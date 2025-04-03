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
    "5WNYjNzZa3w1ooiHPoAfciaVNkWu9uV4Vohz8CLxaiJo1pPno1xv9fwNf9ocevTwjEd7d6NyuL1L2h1yhFyEmkEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fsr6DCycPrNVpjfUAeUv77ttqCuyEPN6HFpPoehihdeAe3LZPXTLNQCtbJXgbvAgazG56JeqE5ugcx8fhuw5k6Q",
  "key1": "5funEbNL2H11y97GnLQHu74VQpByq3B7KFTk2vFnmxuMMgQoTkb2bHPU63anyiBiwr2dredYgmHhc1rJytZob5ce",
  "key2": "3RdJQsMuLRHdejQNiuF54i2eNsBWuQJ9V4wE9Mf3UGP9f4jS1CCPf3voxqHvafDifnq3hYEH7Z8mzMAEL8Eg1r6E",
  "key3": "3tVm4R3GnhfgHHK98HGxx5JaNyD1ZViCCWuuCCwDNtL3d6PqVcMeqNzvouQ7MWxZc3saVvMXyA5SC4xBmhZUSxWS",
  "key4": "45ibxsJfxX7yRsEAbbguL2pRrYYv7HLFvHNpa3vcPMa7LfQrBFNhYYa8ZUStRXHTA9B9WpvDGy1aagnLkXJgNym6",
  "key5": "4bJDBLUHeuRL6FW9MvLQHJV1fTAir39AyqoVvjrbAirZGwSqUDbpqHutqodTZHMqMnKsLW3soLuiMUqbsKhyXPwq",
  "key6": "2uyJWYD6H9hTFkLhRyGBKLsyA4s2BoFEdZMtHWjDosVsF5sG9TS2uibqpeSGJGZ9iPiuMBTtWNqNgBUgvTm3acFV",
  "key7": "ooeuMxVeJC4nLGqZJAZBJeAX6sW7s1m8m7FwhwsfhTibktRUpy7HiVsSPJnZ2QMMoNbewGsk3gv98TBFt3gHYzF",
  "key8": "2UAC8DtAcJ7u12ripFiD3qc4iLkVw7M3jFLNUt5droHw2Ew4YtBdM5AQHsTCF3T1YXogu6eeS9ZQhjyszjhgcUNv",
  "key9": "2J6G6BwQGBtKwroNjRojJmW7bPKUi9DgfRoLREMC1LDot3LqWGukvt861CGETLq3RiHeYKuQprExN1rteq8kADCR",
  "key10": "3C4eNbQRK41wH3tTP3xP3PoPDY12eGhCCsCzSPf18MYCBXWwTgsVYSUvBg8Fn9CGsvCj5tp6vTQ5obgeyYf3w233",
  "key11": "3ZiW6sroSDno4x7m396YSsfwcTd9WdqWxAzdWYrJRtEbZCbsM7GYts8Adxfo4HLdENcJyeWGKasdLN8sUiB7Ewq5",
  "key12": "uRzsSsGYW6YheFzQ3ev9Ee4EWLzoeh6St93UmhEjbAqiYaf9L6szFBrbzDW8AQ1LUyqYauuZd8VNbTRGZkkW3o5",
  "key13": "5Q4vrcbjWG9ffxjEQDrDCnM6wFtA4mABqUpEfhr7S4o1jkJBfmpS7GXuAMdbsTf2SLatXFy7b9B6KHJkEeLnE9CF",
  "key14": "2u9u16WitKzyYf1daR3HEYSZ1HR8qrkbip6Ltn7nXJnpjUDFr6ytMkZNLfoqGcYqzTATD4npZNgTHMz6T4h73Fj1",
  "key15": "TSt9YobHQKyWbhQ2HaxdPjx8kiDAGWzrWgjsVPSP1J9KB6QvB2LkJiGEYWFQYpvrti5AtkhE2QgoW45CC3BBSju",
  "key16": "dn4PhET66ai3TG9NnvdSLN53a8QZCJfpPWLShn1KXxKWYaYsYqnbq26eXjcifr155w94nJur6BUKreS7EDFLSA1",
  "key17": "4ZdofuMCWiVh44vUsQrw8ca1JmKk9QECJz5uJ66dTNo9y11YaN5Axc3w3MPrDJdsPvd7vmZnTefuGWYFJp7jP6Lz",
  "key18": "3dx95mhNT74Rp2qj3pg8KdwBXkKkTUWnPmaj4rJj1kVZaGRhCxUamFjPtwaed8jShVPz5kbfgiba1r1r5sTME6rK",
  "key19": "3FBk9DQHeunF73VYLATwW5K8ZQpKtiECYHEK8KwDH91A4VUsyspc2bHJQujKcMmADSjcc7VKee6WDn8pn3QzN2rV",
  "key20": "xKLrcdR2SWrEE9VyxuQSA2eLALER85F7FoJy89BMhKaZgZpDPaYSqMCdG6u3pErfxWhJ6Etd2TefyBRJvFDqZAj",
  "key21": "ZGwr9ieFBMe3qnKLMK5jHQarsyryV9XfwWg9g3HLHqLMLknpfbDnErrUegYq4EsyCixpqrQRZzukitTixLAJNv5",
  "key22": "4gZpoAQZcvzp3KL4J6N7uJoApfxnrPWB75ddi32UphyXxGWvENqT1N2yNv5aGyYypUpxJeF9NFSXiaD9ou1RtmRi",
  "key23": "ALu6fAqk9w4keoLbL8g1xFp9q4xZeJtcSarRwXzGspN4fBPGfWecKKgHbYdUZvgxUGknGWy94r5GnKqgJdd8wqr",
  "key24": "4sWGkp7pYfV38Rxy3j5DmDFQUbNd4uz143hbNsPwWmcGPktRwUB7erS9rTZRJTApm1BxZ2pAD1Ncvom2Smupvkvj",
  "key25": "35PkeAi7muaYnpCJiAf2Q8p23kpyRWGANmFbFzuuNhwymWwWim3buTchxCXohS1CHNPoKbCyLotn2vNs6w1Wg4rb",
  "key26": "3K89gykDja3JXN2cvydBYtVHDbgayUzo89A6X2MVx24z96VVmeM35esjPYUGGM5oFwsx4T76G9cnt5JxJ2KGt56Y",
  "key27": "4X91PbJCBERPStYzvTbsBZSLgXtCJLc1g82kbqprkVM51fNMwNmMTSm4PftCovAiuXXsW7hbHLa27muMnLPZAeuQ",
  "key28": "euDB722kgtSHgXMfHZpbMNHPB7k4vzHzerfnwbBB9TK3qFRw87cVtDyXQE1kiZ5uTLtVFhyvX5UBC6pFCb2dXzD",
  "key29": "5XUcSQvwGJeAgCGUTsGafLEUQWjungX4CtD37gsUodn1uvEPAi3u6hgBkzqLQTvZjMWDbUNQFPjYR9sz7oYF4X6v",
  "key30": "5G7hMcDY4ZCoKrrFXe2BzyWfXojMTnVjFQizUsfaVgG3HXEF7JvZLkHyPvPxf6r4GvefmEFWcTzQbqjBSjPrkFbc",
  "key31": "3zNQQxzH19pu5puX51uvsNLXSnz7BaUi4KC1QguKynQNhoRQkXonwLvzXA77Fy5y8ap8PQdarMT6nuZHwVoFtsv9",
  "key32": "4BHHL5zJLCe6i2PLCnjXGoybZ46zsXs9e32fythRrN9FUnXUiNbvEHZnCWP6ETUhTpNuHDmdnesNYQmXp9FbZUyx",
  "key33": "zxKBQMQwCcGw8A4TNQn1X68WKovqWoFAjeEqp4pA6EmGBnnDFnMFbgPAvzuQP9ECn6ndf3tjsdqvzwUEbnkJ1G1",
  "key34": "53xa4XQmGvseAypj73QRABbDq87Rd3Qi8JbTojvmNANVwTgwYDNWdDyJCvxZBWQtdUx4cjC53yF3YR3JWMHMZGQy",
  "key35": "52yRwNFa6DuLJ6VpkvEGgWp4xbd24UWR6qooPBDQAdD5t4mmLirhsnyWHTwB628F6Z4oSz2evNn34uNWQvUvdsaF",
  "key36": "3MXZqWbtck7hERj18PJ2NVUBV3MFYex9BejJHfnNkwjcQpnKhmA9Cd8JfnJMt5UUosN5Q4CmK764nPj5Mz9ZTNXX",
  "key37": "2EqaL9X2TZgnV5ttJMbbjqBH7ytzVBMQAW3VGm6jsXYagdMwNp95QazauEGEwz4iJVVA1JFocbzbUQTJZgaaCN4c",
  "key38": "2DW2EPJjjRXWVS6eEA3X6kN9EXUofAWdRRGJ7VB7sXjEjw4KykiQSBbK5qkDpXcoY9xZQSRHfmaaXHwxB12L8ZUf"
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
