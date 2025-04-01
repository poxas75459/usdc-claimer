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
    "5rSzwvdpioPnegxE3teFVnpgM8YnP2a4HXtBxaNxZywTZiigxWh8JpYzUAVCPAuGGDpfzmGBQNR6rPrfKTKU4UqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhMom8zBpyBUpo8pWgZGZpMCsK26NmGdb3jwv2TbjmmhV3mCW5xe6YeRGZDi1VfryoSLeDQBBgXEPDNbUqXPL7F",
  "key1": "4g75XX45xsReKVR57te1WbcaVKFvA1RyhMhF3ef6iq8CsnRXYqTgegyCU9mrKw1AqpSzDAQhxc98B6Uxas44Vyts",
  "key2": "2wKGYzDH4JAY1pugitNawFdH3T5rDMUgpcamspM5Xp4kFAE3dLzNBRE3R8Jix9jYcfPiLWcUpMbk9ShRzKp8xHzg",
  "key3": "24S7bjqt8ttyD4DxuDB1br2YBAayiPeiApzJQvDEuVPXc66wgkwCwmAD85TVRoptRt11Qnuk9Y9TH3h9M3TFXhoG",
  "key4": "5pcmC67VgMNkUow8VUSi1ZMeUo8GJp213viBBbCcFFeqAiJHxqVaA47tyjpmVrwkTLWXpT6eGGeDQVyyomk2Y1Pv",
  "key5": "35f7tydxSA7wkN6CZ6RL4oiyaXaHULJWnkJJsaUgdQ5fPq3xCDpJY5wEjKF4oVifhvA1hoAyDhWnLR7FSwWaQxY7",
  "key6": "TqeKDPuhEmGMah5CNWSBtBKA6MKEDNpwewYmGtbEt7YcaAFP28ePmwmdEb6yRc9uaV2utTaaAvsJzSAF2z8ttEZ",
  "key7": "5K2YDEn4xwiPnczPXqGjGYXrApXDCcxxTwentHadeszshbwhLYRt7qWumK3MzKTn4Lm5jJxv8EzXeT336YiFVsn3",
  "key8": "4AAE6u8Ebpx3pkxxpc1UV8zXRToetpPywKEse4pRdHWsw8W3RjTRaK1CcdKGvZFB5VSVPWftTfCymYhM32RFaZjX",
  "key9": "22cDnjByVeisf92bpHAj4V6yJZqDFqh3xMEt9bqR7Gnm3j3Gte4BuLPUQZ1S4T7mgL9VBakXsugGZoGBDWY8LoJV",
  "key10": "3kWhuUUuXvweQ5Udrng3pm2fNm9TBuXDmP1as6r6fDkNLssWRX64pWrf1bQT4r2qmTuFK2Xeyxo5QpSLMVHxRx2V",
  "key11": "4DMu4BdnkqKiEH36SeqmV2x1jkEHNEcN7whfPGKXAXLHbgizRhATFcBfgre6B54yCtv9orYweHGEkysJBAmJXv3d",
  "key12": "5Wf2T77V3dDp8Y3FhbZuJNinFkcZQjN6ycsypETUhzdEYyevm39uyWf2reE48w4hZezdV3v9Kshai8dTkfZimcwR",
  "key13": "36fppCQGJKfsRuCk6Z5YB8Wh4CwQFE15Uz2EL61pcKFcRahwQ2umBzH35btZqcArB3deitEZ5FVSpsQSJhA4gLKu",
  "key14": "57Wf9oryyyPqpkgUaBmG19m4YvDJUDsqCrgDhQDss9okszpcujaDCw3qxZGk7h3FeVrNGhQ5JM4ucJjswsYjCFiU",
  "key15": "WScUh5YpEq2Yt1qoJuSUeuV1uNzZphCrwbtaPep5Tz43MKkHnxtWxG5WRcnnYnyyX5b1tBxk6qA2bCB69SG6n37",
  "key16": "AGXX15qxZdqMfY7tiSqeVXczPh7JorGY5Rmsz3zRkGWAyqPgiZ8wDzazGBvdHd9dkKbyfBpqPDhMFi2KbXZQGJ2",
  "key17": "r33SNecpfvXMNtqa7QLKnRwz1s22RLfsDjAe8LTxdA9jdkUnc8sZdqHGQ3qTXUvtHPRc4barcxVVmU3xeksoF4t",
  "key18": "2zzR454dNMUcbEHR44xAmCUbSaLN1NtoUCHhNMjRQSzM3Lxm9Tfi3vi4HidMdjZbLBzNRusTycqieshRy3gRu9TJ",
  "key19": "5YkYQSmRdCRhVMRYa8A2hJ8Q5rZgaHqEcmcqvuxwkdZ6v8EiuTTLoy6geJSub8zjTcSKYWg78NwVWxs6dyh7mZAm",
  "key20": "4ebxU47dwG81WxX5KbrGsWxgF2Sof9WdT9GtBVSWqUMVziftW9SU5zUahcBYQamNqq4WyHJ2zt3x5WfWT8c361Rn",
  "key21": "3uh4qnEzKfncTVK3bYgBBG18s6sx6PVvRzLwnnnbkWQQtTcgvRmPouHfxpL84hrzc4JepSFqXswwi7vr48XfeUVT",
  "key22": "5Znh9Eu8FmdcrztBERYJcF3ewZSfJm7AXLWX2bt3nC1SQrx6xgYFkSFa1Bxusf9XkgLqVYR5Tgau8fWQqEGzoNRd",
  "key23": "4ZfDnVvbBvPdEx3UWoLYJtLB8xvaUkfecAYCyMxg8aahPVqhjFFpjoBfgziZ4woiqF4qDt5dW8TzPd5Hd9MH8bX2",
  "key24": "B1zyknqCUnS39Duc5urJtA3Je6HKedzdjPXFN3Lw8q8jvs14nD4cmG9qoXsYr13n5G5nVhPzQ5C34s2FrjvyRMT",
  "key25": "5TFRBbkia9618QfYBpuXFSKd1x4scpGew72j2jAxQpWsLpMSJfNDg6D8rZSvQzo4tGAyKyTdj9g47KgVx3UWCzPH",
  "key26": "2jWNznATSRLycrZkkR7Yv51pPzjfiUw5gg6XvUvACiC1RUCKHgDtB4AtYpghqrhz251ng1GaV19TweH6Pdcf7XJE",
  "key27": "2CJTPcFGVqru4G6fYqZHynywMeb2H9rP3LBa2xcwM2DSjLWDG9AgaebbKYPu5sqoj2fcG8ePcUFLCAVcCz42pm2L",
  "key28": "4gWhkoYef8JWXjnTSQa8BMvcvsZSxeKRgo2FTUYin9DGNF85y7SH9kcmiJHi8hzFedTv4w4g4JQu3fHimeikeoZb",
  "key29": "zdK7E6FkYVRNG7TL5riSwJxFCobho2wTwF8bQMPuso6CbC2njJF5rGWsLUAqyA78fWU2R3XcmbsCzT61cK88Kdn",
  "key30": "28BXiP48zComfSZ218obi56PW5EbcUhz4x43jb8Jodr4sruZ6LRLm2mE7HiU2quuULk4DDL3bgnyhhH1rNo5PgPG",
  "key31": "2SBzsdEitRw5t9WUdb97vXWeo6jTFizDhpK5eT4P7bvfvvqkf1sJF4pEDggsVfo7Z7uuPiDMN5KRqyJmdHydiCr5",
  "key32": "3a6h4QcchdKJ2aLnyxXQjxX6WDyR3N2YBNbMffcQPxh6QsDVT8gfvR6CqU2TA9q2ea6KqUqCg64WbQWgq7tYxbV1",
  "key33": "4wKWjEYwXqfVZ18zmn6MfvMJT36LveAxyZuWUJFagwge4ruhtRQ91YtTKTibw6inZgkN9ZDnwcWs3BLb82EL33G",
  "key34": "3bv8ebZUZ3hThMQrBrwinFRVJ3fzpzCP2UZxEwGVFLNPNYZqQ1BUMQajLhxpjg41kn3XTSaeUNBZCaVmKuMwd6Qq",
  "key35": "2w3PMzNtuYniX2sEKM9Ebxgd7jQcg42t3ahbsRpmKdqFib3aJ8oMrYFo2Ak9e13uKYHPsocNtuFFVVkevJnUKpNc",
  "key36": "3G9RDUzojTiLScJHLu43YmzZ39xVUkGdGu1r7Zo9EDxcfen3JaniZkREvMP4gPTqMjAmaiaXLbseBgtvRDN2qFUy",
  "key37": "3N1qkanpg14PZ2qbwnZJqekX7yod9iothNDeKy2FnQ8y3KfBPzrXPZ66t9HZPZiMFvf233rmTq1Za6xRUYzAkPbo",
  "key38": "3YCUWhEQBAAzRJYSuEiXNUnAmZJBnzMpEBu89bUffPro1EQ1Lo9rC8NfyHhzRtSi8XGrB25KH5w8kq9EAevu1V8Q",
  "key39": "5CDCBxjwTDc3KBgz2S4XDyj9htpk9jyomjk1soDtg9Wbdd3hniCXZXk5n9eyyF6RrDyLrKHcbELCM43dNzWDxPBS",
  "key40": "5e1cQ7jZ779SqS1iQzTRyXvw3iqdjt3KXwJT6pRehZbdWXdgdt8LG7pBBMS6d9f64pxyftzxaLcCZ1vdChNr94Pe",
  "key41": "4xK7UYfzG8gog41BqJeuDGsMPghBW5QRoS9CZ9bHP5SpRifh2v9FNJ25xNE1mjM5KuJ1LLnFgB5qmhjhhZ7AWQEH",
  "key42": "5iLbupfioLZBzFNqvj5eHLGNBTALpDM7iVErcVCFu5HrSRncyTpCJkaZoo8CbpBtEUmjboJ5iUCEd7D1CYsjJYdh",
  "key43": "4MaMWvDm58BCZRoo1X9y8impn27Dc8UV5gFm8RCdi4uSZnxiPASrYhn2LQJnKTKhs7bU563FjziSSyVYADoz33dE",
  "key44": "2A38gRg4DwbFzJhLUzn6fjb6Ti7GSCXJ4FyxDeYRfAdzi78nGT5RUBgSVWaPmPmny75gJnDTTyDUoNhJsfBV8561",
  "key45": "4y9t7dq4pQwRy6Mw4fksXqmew6njaxPSywuJLhVdqUnWStfZUVNXzQDmDYNbGUD79W8FrLUDjRHiu6W8vHVAFNsv"
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
