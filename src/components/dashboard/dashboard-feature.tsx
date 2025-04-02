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
    "4R6aba8s1CLKjXaQD5LZkZtJd7gARfekt8Qg2aqbZKgYDjNSzE6G9KNnVPX8n2CS7UkMYXNHAWCSVit3XRuArMbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giocvHm5GJXtCkyX5kNWJ8WMefjVSDagv862Kt2NYUyrpqAFWydfdENuE9PexrMPr35LhxtyEQDtRTfVTAUrCNU",
  "key1": "5f6HSt2nzHeevWSeCFPFsFV5G6ST6uNPAMZct2hF5RYVN5bA2u5JYtFy6vhxVpSZDrT7vkZR1exuqRpnNrVyVeiR",
  "key2": "3w8anbtXYPgYUGZTK8HDGgjT15Pyt6G58VMbPWoMyvKiDvRXm9GDdFT533zK9nXYSAaBZKQJ9fAQGGouCEEtqLor",
  "key3": "42KcPMmjLYRb6iVKM1oSULGErV8uXFK6ktdPsnAdhHKUvMDrJfN5EYsiEXEj52FWXW3wBSwPvsZGHhoeHTC9Zgy6",
  "key4": "2veeWtrk7EiKxgRUyitupZeM2tmyADwfzg8CmA68FJxWZLSoKWDXCkMr8cnrHb5NhPTEAjuRjGsa7j4oeozVeDCR",
  "key5": "3vYy3WGpyCzFrsrQLPTVazVKFQpN6WCGxGCYirn5m5hznt8DNQ24WMb368RbfWnPHVzfeDJTH8CHs7e1dWMrd8qT",
  "key6": "4WybbZ61jUY9uNXgZzzkcEMqYprxF1q43b5sp3mie8V9EGiEVu9eVobdCTYb8dA4xeAT6Jrkpj6zJePUThRykPvF",
  "key7": "5duNaDhchSfjfDF3E6yrGLdavYsDxRZNsnurzC9mzmNb91LZGzNvmY6NXxWZFreZPD4yu28gvgeMbVq4BhN4VEGi",
  "key8": "4qdHUfWdMqaczsaJSbha6CQ5QgQ4QXTQ2XKRa1MHRwLhTHjpeJM1hoYZ8FMPCKpG9XTaXcnDztfdxkTUzo2yjF1u",
  "key9": "3aXLmySoyLyVAqLr11brvHsMeBnSwBafNvCRkKbFRboeX1FBZiCwYHGbsYBEfyXxnNTMwPDtCtU6fqmPuACAHTTy",
  "key10": "5h1ZgG4YHsYrUXE7q5qTZC8CYfHgXSHGPkD7X5r1YTYrd3mgiUgLQkbGbm8HdD4X4QTTTx92k1UAfkWgfkAyErwF",
  "key11": "2DCMzgZ5q9y67jNWQUFT9dfBudviGHQKC2FgXMhBJiV8D2yPvn57gmW7Y2xmgA83mmPhC1dKNzkAPN8jqVFoZjj2",
  "key12": "5c7YtP3Mn9jvWWGgiMgNigNjtJ58LcdpoRRtxTvQjMPrcA1WZdo55nWV5ouoNq9tza5ozfwawdv9jXdBMAAHKKvz",
  "key13": "23cJEJEza4pt6Udi5st2rMnBbGcuxx7mNQKSwZdMjoCvaN5afCTBC3EvznirNDeQLGcNwffu1iwa4P42qfGcgWwm",
  "key14": "5UhvHSUD3VKeWQBzz5AtWk5MzCtjzmaGH2PN3VNiD7MWfkRsRSkEJwxrBsdcW2Qn6hiLhUp1iBnGXQhcvGMFoFhm",
  "key15": "4ExKxSxPrHoeX5xy5xRi4hcgXyYxKNC5FnwjJQYpi9kjJMBETkfizkhJgb8yMXsN8mxbtJ6LojEqFmVj6syuMTyv",
  "key16": "4SfkBMFmNBYLAK3eWpvmk1faXADdRfEFHEWWiStuW5mW8YNNQPhhXTYnaSnGkYrTf7hrJriGuEdm3hPweCv2xaM4",
  "key17": "62t32XyqMpqS236o3Wye14BA3a6NQKvkYxPnyTyvLDQyHh5LYkPmjosA78qUUE34BrrxFaB8eDFzPU4dnw9ChMW1",
  "key18": "35qfUQpE322MLyGppnkUSC7YSciihoewEoBPEyini1TsQ2ztRmeWjH8t64aPEt5aXsQ6Wn4aygeuNPMUzAUE9Ysh",
  "key19": "pwGZjATL1TgAXj5nfaDPLWhKN4ycKXFEofeJJi7y1f4ysKPsxiE7Fwcx6HG4cdPKVChuTapP1W6uSTC7mxXwcU2",
  "key20": "5izLC6pfAFxHVQv1qpJc5MkAzUgpHbxWDrBY4H3NMeRTgbDLZzopfosFuc5b7MEYTWYXZGHg3owxHfNX8Dm1fAE7",
  "key21": "7LCExoVs4yZspeUuaqaKWCX1A9YoWQ6jMqzYHSHPoFuebrnLta6fpucmKxcogGcBAqA1taLR8E2pTcNNMP39PnD",
  "key22": "M9CBnjRFK7rkNCJNh5H3n3CjsCDjEJftTfMfyFaipVFwnQFw5etwcmbML4fVtqJbqrnkMTSJtwnrzRtpjqoWTWW",
  "key23": "UY63sUjsrMP6oACigBBZbawcz7cuw9g4MHZaY6Re1U46NMQrUbciFjf23kLuv6GDxdcDiWSXD84FYJfbCAQJPFC",
  "key24": "2ghNHr9e7rhez5pBp1yNdFF9T7f9V2LaVC4i4CY2Tz1KgXmFjEvxd18fg5ghBVrBP8gJv8J4WJfFwMoAAAdncFJr",
  "key25": "3qXCkmDLZkjnXvT4Tfp4UBJKeuCX52dwnMS8b6PDPvh74D8AGJTkcVYmJNKRiJPPQQa1QEt4FU1aviaWv96mtCkm",
  "key26": "411Uo6uk21wzBF7zaroy4KCbzPCvmEjPWJ3sjtj1uReWaCLxcmTXRiH7aWoerFeNFXCpLhK9rvP9jHTS1QEfRYDT",
  "key27": "2eKit1FJGXsPRGi9qNAX7V2B7TjzyqvqmW8jNohptR5PSCpyPwjpKWb8G39EpLzVjS6aRQD2YEeGGcXi4UpDweLT",
  "key28": "5KkXeRp4DSVM6CxzsHBSW2inyQAfjeogiR4LLupUaDKvNGdSt7b5ZbZR8ZYPH8KHGGNhmq8GSmLQLLG8HdPjgpAc",
  "key29": "24kg534k9heByrECQrhTZ7arGFYr1Xs3hbgu1mYy2x8JPLzJPT83weGo67fpr5dE9XTt6i68tsrsoaQFJXCJYE3G",
  "key30": "3yuE9PYpsAbxLuj9r2bi6dTPJvGEhkeSmDGCcay9Q1q3cduDG2TurY9V9kXwgGF4wwZvdBqf1fg82iWBGRdeDdNS"
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
