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
    "4w2cPEUH4yAa4ayw7PGsdKJcyujj7HqikKRaaAVFV8H37LPBP5VFM45un78BbiXW7Zo8yFoZoKtVa3FS1eDqtiEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZ3MnR5oRnuYUYtPvCFMTdqFS6UNyJbGTaRL9gEymKRwNXfkzYn1kUDYtBq36no3Nq5kNBN9YP59U84aKDJcFJb",
  "key1": "3EANQyNxQbbK1x4z5aFqsVGfLnm2JaqPkLCHQfevSciadBQXgpg6NWBfE5roTtkDkgB1enio9D5QRE5jSoVHDiqv",
  "key2": "3v2D8aYXfrcggkoyAE2MQq49miJrZ3btEJvgjghppNjEAWGo9mGLqBV1v9rvbmLykW9YEoGMRnhJBbeA3gFPUqwF",
  "key3": "4D1yMWUKPackBF4md2Sv3VmZcq2kEditG996o68M8RhhpcZaWs7gSU2bX5UXayMnQuyamhAN9RECfHYJ3RcyEvXu",
  "key4": "ThCXLi8NKyuiyTG2HMoxqXXGAApVtHN8vqL6XU56MBnpZuDagkGySV2LqgbH1owQssA9YuxaEajdv4fCRWZixUg",
  "key5": "3dwmQWhwjQWXT9eYCYTs7G7yozT6AC11zSQjJ5vhuqADDZ4kLJSj4aCgG7MrQEHPtgT2CNyUM6VyFXDgazoWE8NS",
  "key6": "4VvgpH7PpDftRgAsFS2GF4PtrfCg5SQa54xp54n7CwRSw4CAfFcyjbXVsQAJo2QS2vjJaHSrbwnayKqygrihWPuz",
  "key7": "yXjFdi9NLPHEfKck5tyS8UdtHiZMMKpBf1EPrhZMjFWApP7Wqsn8KGpM4nH7X1FZzbhskszAA1uWZshZFd8gSdr",
  "key8": "2fSYDsBtYzKwavwsthR4nW8GzUNXMCzQE3K8YgszhrtXimJX31pZ9dQFezoD9y7JfZZiAtAuDqVMPChjsVkQqSNU",
  "key9": "2WrrHrbiwsQu5SnyP1usCjWubq2pn7Dh1hBbp8AX4do58hEg2MeCHrssrkTLK45oKQQJ8mxwswgSUf32nrPXS9wH",
  "key10": "2EuUPq8iELbqBEKTtJ72oRhiuTBQ4VTEvxJEyUiNcpTH2GRaXJ7cLJiXGJMYL8isqzTyGQVAMjLBqJmNb1uLtmWu",
  "key11": "3MiD7htfFNaFjcDidT724jUax8E11xRyhYYdmtz1Qjt9yyc1rXGPLDqPxLuNjAuNspb7h2WpXjDD1LKVDjNCpP2f",
  "key12": "4QSq7Q6vt8vFAAavVvrg9sRebLDmGdejgrGo3cAU6qWB5P8YxzrzugBK8xbCyqnHxbLjfZ82Mq2eM1VM8izTLtHM",
  "key13": "27mw3adDEDeJzjqoK2V8giJiBjji2S3sgi92ecs9eY9veqMTzJieQ1diPN43UKYq2R5obGnRLZ2jXGUWNNKf5oEX",
  "key14": "5JdP8uw1xv11DDppzhf7nPpbhPrth9RmEqvyeau4eKf5aRNRT7y4UUM6KYbPtVnZQ9Yr52FD2G3XkKL6qWhyBMpC",
  "key15": "71LyyYm2pVexgy7nq32WqwULYbcV3q3bTG9br3bQL7T8XFwpkYEPUYFqJNmVfFUphYemKqUnBUvyH289Q9j1T7F",
  "key16": "5NUpuc4XJ3fpz4u39dkNPRS6p4SCwDA3QXn69imhdcyoJnuGM3BhcA4Uft9a5uJC1oUtBpa9Pr5LJanMXS2V3fR2",
  "key17": "51BKXFf7tp1s7gekt7bjKsEGmLLwVFECxvwCbS6jkcDYFXeYB6Cbbd88g4Fac8EagkqBGrGJC6z9Q8Fu1Q9iTMVf",
  "key18": "4A4t3YxAaF7MW12KABb3xQXBbLBzYi7nZx8rCkXS2hssZSXWYHVcKjJ9VojFVB7BKLVgYQCmKJhLDLjRnE2xJCmi",
  "key19": "GBSSYYUV9NSdtnwLjxWteUuhjfv6nEyPKNdedjaLB5y8bwCmv7raHtwhXsodVomaWo9quQvXNY55vHGspBsVktR",
  "key20": "2en4Rgoh4qy7HWxbkMVi5HEe1Bpsj2zUVBD837yAiM6abQuSD4vNa7S6qDnoVtpUvqWxWi8RxeduZ527WQU2P3EZ",
  "key21": "4YTvESp23aNvrGu1vNCGTZaezbuFjo5aWaSRzKEGYBdNVQiWPHgeKcxVToJ6Np43KPGasimUBKDrSDieMThYzy5V",
  "key22": "dq4yXNyyqHJoFvdwwpdagzgp2teokfzf1VcZc6K9uUVXnsET77XwKKoExpcFsRtcsrG72YNvuXngo3ps5brLGmZ",
  "key23": "3FbPVyXEvztGVoCM88xMffU3WgUYhDi6fe4tXoSC3benVpKddNG1m1LAn7fCKVRGL3Q8hNZ4fw78G3WreBGamsb4",
  "key24": "2jrZSWLEMi5cWwaPLPgS49zqxC3xknakbFb1wyMDXmynwULxdUeSKsPVL9k9hHEUkYfww8oPgjKwF76Ee4bJfZLL",
  "key25": "2jH6tcwg8iEnRwN793N1WutTzfbSRZvsA6T5FtmXgmxMwsJRTpZzpgan5vByMWri3mWyV63beBeq1RLi6D4TkmN2",
  "key26": "3V6nKvcd5iU4chv2REUiaheJ7egUsXPzmqk9STwqAqZbJeB5mLfLQjmBVRoGvpcEaFbAtPufxayJZUgY7mn9Bgw1",
  "key27": "32hz8omsQ6emagw1sfRVGhXzqNBGEsPb4eeeKNExbThDZ7bYd4ty8xAUgmubYCZVrrMt9r5YmsRu8Woxu1rY3YKv",
  "key28": "4c59qzSTYcUbEWCzHJpSu1jSNMqMwbyLwu8ZiE3mrngjkSw5FjVbdMBcpVtkFxieZ3JKx4QNkBLg5P9ELWxyVKwr",
  "key29": "e2yGfZexVq3XX5zNvoUbAXby3WpHDC61QqaobYgBfWrZYQ251BkA6GQRzKjH4JRbAopg7SZ1cWoJ59oZy8upgLp",
  "key30": "4nm452jbEGVQjkse7XGMHC6Qo639xpzYKqDPCg1Xv4HvvLFLrLpKmjBZcAumzrt4aZNwQghsxSTCkAQjgiiAk4zA"
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
