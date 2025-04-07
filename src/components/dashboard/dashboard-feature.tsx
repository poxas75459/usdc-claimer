/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "32kGhHHPSXFS54KeC8ByhbiCuHa295k6rcMrM45XENCaFQxGpFUwzH65FbLwKaSXmUVXs424edxNq3XutXEHWjtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qyM3YCR3hKBCmKHCXpcH8QUnwaw7UiLFdSyNrnE8GUYxEcEs8qZxi3MtyDoLamY3ZMaPAk3cNYHNs1sWUB5hEq",
  "key1": "3Tw3u9KRyGZoW3atqWXcgeY1DREpXSjPKTK8WfPmLBLfVUVWc4vbUzhsB1TDSVajvpa5MJrZkakVz6FdxLmLMZaR",
  "key2": "5Gs5d8DXy1wjZtP4UuyYdWTYwjJZT1XhySe7X7GJ97PzDVotEcovrVoghu62PfFB6dCPd2XBE9WfePwT8J31mepD",
  "key3": "NG1jDZfrBRVLPG1m5qFL169jEpMjgQk2YjQWPQ8ashdXvP4tGXH14GEA2r7JkxiiQ4GAYA3xkXxCrQDLoyR2p6X",
  "key4": "2NZxQtiLYTKmgQSobhTEcwtEdqTtjYsQ1bZqrdNuVF5Wmdz4trXNL2JpND6F66pZv2E2mjrE9DqLBMw4VYHtKdjH",
  "key5": "4LjsZ1PqDopCCCxVK3xGL1viePEjGDqSghoLAnhNQoZ4aNcTjokWeegYBmSqx9dhPyFPB59XKZAwbNdGApqorD34",
  "key6": "2YnqgbKHQFXcB45SbQabcBVgUwSd3Aa6e9gnKZGfLRxQ4x3bu3p4nVd22aaKxNiiZnNGbyLSh4Gu9w9Uju1rsEit",
  "key7": "2QQXLtp7TW59BFKHi8YDiGv7ipyJQGQnGDeY6hWMn6UrfQgX7RoELae953undur1aWSWnbABDZ2WXLicAR6yJnxg",
  "key8": "xahafK8xGS2MTp2JhuYznAHfVqenTUxz9gkscz6u9RpUvH7ChS9esYQQTu9WimhXYFX6Z3eA1dyHkpgjo7iEwHb",
  "key9": "3XbTBz6DoA2eGYceBY7AQCBe811J5BfAVieUFhsKePN9waDZYRhRxHFrf8XBmaGtqhyiFGek2JhbbCunKUAjhVxG",
  "key10": "2ADUSTFBoULPTZV8Z7xCLR91hS88rwAiQTKHthKT3e7guNjchaLYdx1cH5m3ZaEssvaa9WCJfAjgYwEX7wVy3qiy",
  "key11": "3cLkdBxfcYhTtptmnh3CHXGsqmXCZf8mV3j3EnyY6V2h5FCqEm2KoqW4md3aZM3soBnxBkbQvZsezzyqNmtw8aVp",
  "key12": "2xoGNSWhPQT8H5TBrGSjzscFtdc7Uv2eDiamRZafvVbPtqozj1bzhWxx845R32DDGqCBRvAnND3tYcGyHDfu6Kqn",
  "key13": "5PByrbfrvYhyjXgxK7ivGcLzLh2pjYScmcRU8XfaFgYZ2JML6Y6oeZuSjpn5n5Rmy9RwhFrdzUAD7hSCkjV2Z4at",
  "key14": "653LcCpvKZFAw4EmT6M5LrvqXYLJWjDL9Bi9zPZkxk4n54Je1cooUG1PP25LgRCMauzY4d6UesTGrr53x1K2vwu5",
  "key15": "5segsHJ7XWy3V6CgruKuwmLhADq6GTcdWt81DY4AaRh2qcMZxNGsLPskDCotphvh4VHDEqSpb88N4SkP9VjQLLud",
  "key16": "41gjiXhe8iLqJYB36cjUpCDRtkizkP5FVxjn8SY2mBdXVGcDMqMQB2VaKetdocFhp8Qc3uRC28WFu9jdbfEh4dwE",
  "key17": "nQgHwynHAGhsMwXVhgoDBaCu8jF4MPhtu2m39M6nKotYy4L3v9VucyH645VGw7YvWm9sWRoVscXuvGAgg2BT42y",
  "key18": "5DaBhdB9duwBWh8aUrFYjnBBtkwaWHdop5BkmBEKGELTMnvdy3sr7GQQ72VtsP71AH3F2mozbWJSFdL7beNhBfKA",
  "key19": "4DxsWj1QM371ByVjiDnT9gfkMxHDxkpErqNWAU7nmwdCusyFMzRvczKXhZcQL4uBEohnQkTA4x2ZngrscPwo3q5g",
  "key20": "2tsDZurffwztie8p4DixibJcY38VCC5G24bPypg6A6wNfAtVqb9pVCQmDx1P5dtqYowLtXsQTX7RYopkP229aSPP",
  "key21": "cCzzV8TumVSyL9jtnDxN9YY9r6BKGDBwTLt1cddchZB4BVr9RUCQ79QymTNPXQxq8fALaDasPugHtJTaq5s8fbZ",
  "key22": "2iHpXRGCMkujeUYkFyhbAiTjWUwjqLzN8oVaZqaRbUbe4Dfd8ZaHNugze5dpX9yNTKyLqgEnThCjXybCARX9PRnQ",
  "key23": "W2MEs8Qn8gNmWBkGixKHAsmHwU8aRJykuieXSUvsTDKaot43HxVUV1hP5tG99gEoQpEaTsjfLTfkTcFJx4kfg2C",
  "key24": "2JNScYBegMT4oDxozCvCUV4JhE8C2WAQVv3y4B982wnfNb7MgLMakRpCVUfbgZgjPLTcs8h2dUqgYHBedQe6XBKn",
  "key25": "5mLqYnko7AvXC7odYHj7t2vqnBPAjoEEFt2Nj2uxuk1zsHhiUuFrUCkBjFFxEnCVTtPFG4yCGKfDfu8PaPPSupQF",
  "key26": "4YMf6bm9SPWq9CbFGgE497JHGeTg89e4zpb1tCYHem8QiuVZWs2NHUQyWCQASVQbj6EJahFZuFKc3o2jacNJ92J3",
  "key27": "4CC73ep5ZD8EARYPsD5c8Z7hQfoYUSx3CC9dgRw4Efu24dMiKH44dDSynGFaDDsJs4V7RNXw8HYQjBoQKaAt2bgt",
  "key28": "t2xf6JCAwofAxV6bgWrEEySxUVAqw97pa16oUyffke4qBrtUYvUgMrX86DvBYeVDAsNcjpeN3QS1dpdorP6cNqJ",
  "key29": "5XLNU3AXKsjp5m5CSG4SZJmQAnG1kfKBdbLHJxxDhoSpoU1ZpxLBZppRgVk3BjACufnhYC316EQcSCaHSCWyp7zW",
  "key30": "2oyfEtmxLFEV6kr5QxXjK9xkKbiQpJvtYnrvKgnJTtNg9paR6QRzM4bTbTFF4a99KBHngDHuBwyD9gSbNqAQWdwp",
  "key31": "XVc6UdR6Y6VkRpSFzrCWkADTfw1T3P1oQ1KZmyHVZA85AMyoHqe3vvySYQfpPLyxqPL2pCxcQc1xSvV1yrqyB6D"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
