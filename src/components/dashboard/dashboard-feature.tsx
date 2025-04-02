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
    "5BviuHBfsWwrJGHSHa6P8tjmnsw8ovw6FS7vkpimex6WjagWQpUEnVYevLR6Mg3j1EDFAMFCgV2JqCJZLsSLCgqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTKzbENWbC2UWgwnDKpJG1gfGTBoUzufDgagoozAGJCU5iTiJGSzRXfk194UxnHPYPeFq4C21BE54Coydgj893t",
  "key1": "5gJXsn1jHdREiG1di8fzWFjtDoMfns4jvMf7YUeP5RWhE1vUXBznhbAUBmwUTaz5s2JD54C5d5d7wo2NFKKyB8CZ",
  "key2": "4Gp6oKn2WNKbcRTomfCJKieKgnQ8QUGaY91U7BAxxCddrouPS93unxVyTWkazpcUuTgMcHrxL7DC5QXmucWuFzhE",
  "key3": "4yp7TD2HUxBDe5WcdtjU8EDiqmej5BNnDxcRRhzhiAxTzdJnndCeenerj9X2BsmgA9jB8iH3UacbLxK2awL47vKh",
  "key4": "4Wr261CrVQbQ8jvYcLVbvp3EnZ2gSfihdGxrDLbxqWuBb9kjFdxfyLKN8aeh4ESgrqg6TEsyifcVF8wak5c4R66n",
  "key5": "4zqh72pQ5nbDtLQLcwUt1WpcHbVT3mydzFkAXNNH4AGUBbMifmRtTd3FgfW2nc8VdseB4PQobFbZ3bPSCFq4NhnE",
  "key6": "2sXNjWmBMZUXunEc5MuqX1yuj7nqodygJYjUFJJBK4Jyshj1c8onmfn6bVez1VKReHgLbxdUfpFQaba4K2hB7cYj",
  "key7": "28Pxa8HoToZAStMX1xp8seu7b3iaubAjFRmq2rPnnhYnKKgtnPedWcDdKKuRo3TEZzQdf7YLn3L3wfBSzctRb1NK",
  "key8": "CAfqCv93WZgSw6eGgshkaw1tPzTJuGuLGeDVsWNkTWPuY5EdJGn6P5eixQxz6MninmykZoLqhKLxxtyBXk6pt9K",
  "key9": "kWxcbUS5vzHMAiTAn7U8A3yrKsqzSFSGK3jVuSJVYvUrqVazR4Y1khzAH7eoAqEtid187UrV3UKGegjLFsJCsmj",
  "key10": "3j1QEzGGYXVVuaVApYo1nTwyS5yafg4YzkqHP4a6kmJhNCtVYxD6GT8Ahgi1T3j1nSQNEvg1rqCi1RHjjLabVeab",
  "key11": "5L5QT5w8cx5YjvVrSVxpvXzhzDD1EyRj9gwYgxvGzfXfcQmCXX5K34ewyeUjJhrDKbXvQjRxicvTwyZ1p9awPWa7",
  "key12": "2Rm5DsEsMgAk7EZgQT4NFu3nRL1Zd9YyJwF524L4HRfRxPEo4QqBonhkRX7MhucBTEqHZmfk8z7R95EzTNt9F7ph",
  "key13": "4ikCr9zSFtXk115jBv4MFgetjzY4rckShotk4iNBSdF2SwZkM66SaAhKexbdAPbovebWQz6B14QXUgbL1WFCff4T",
  "key14": "55z768z8fMxHNsMdJ38fCGpe8s2GbdFbgifx2AX1Pvzzt8rArtWVzrswAKZEzQV5DfHJmeiKaRyWfygB7NQrCXuH",
  "key15": "2PJKUgyH3jsDexHQYnhbAqmowVf4tn7YW2329meaEyLPUwNGFe1Mn288GNNxtfb3BJuHQhupqDLXW9wm7RbG9CET",
  "key16": "3VR7nYQZYc78KpFPWcjMaRbUCChoeisqaTepPjHKWv1tWdtEGPraVTotiSVTPYWjTXkiHL3DSda297YvXBQerWuu",
  "key17": "4RTjVjgqyqN15EcnzB7B44sFvtNiTm5srHRVtpyPFCry8Ef5MjJhBXCNMHiDd7URhRoRBnNtpWmJW2RZ2YBcPKN2",
  "key18": "GKd5UNsn6cpUcBE8MK47nAtjRXRai4Q3qR74U7Hsah9FVgBbhMmKRqg1ckksy1XmLbFjbKYaBCdNVhDj49baspe",
  "key19": "PvhE16hKpp53rmSki5BcZwZiYJziw2FqYMfgHv9HFyqMrKLHXj9peQGmCQQdijfb2DJqUhpkmmZSfftG6rJFed6",
  "key20": "5JWRqJJQHUkYUwbrb994YwATqCATjvXWJ3yDamn6SyV57Ewe8eL2PQyYZTjxdb5k8C42Cf3ZCR6qf8H2nP3dT1GK",
  "key21": "5rWcxGa1VPRMsPn9RXX51uKVJqgEsgAacLXynETTcW2qfCsS5pHrs9cjGcWGKUn5jL5NLR3ojWAe87Qc8cmN3f8g",
  "key22": "38afEainPzSbu4s7LX1kTgdPWaWMM9PaHA928DWKfGr8Ue5xUXgUFEyNbpyPZJMkq7W5WVns2HJ1mXiEWsLKPF2W",
  "key23": "5YX1cpqSyuQ3D4ojXfa1uSWpD1ihED7mCmJV4BgZPYQAFStT9x86zSyaGw1JT5EXSpdBLSgD6ngJ42ujHRXBqy9n",
  "key24": "nbqmuJo67JoEg6QS3fYyAWjmjmBCUWQ4WokrsZeJK9eghuitGFYkUzzUrJrRh6W1zw17PsK5KoXfUc5XMPvZQD5",
  "key25": "4fHnjcxXi7TXaBMVSb8YECPhtByQgSbYXq5A8vcRhxtWPdxHLnEx3rCg1dXo9QWDAuxzLEbVKmZG4NBui5Q2Ebmi",
  "key26": "5obt6EtAHxREsKjj7ws2SqskVURecuKt135LEtvHWujdpGRa3MsK5oTVmwHZ7Wu1D8nRmDE9gPV2PRf2pAAhYJCh",
  "key27": "DCThkZyzochCivvpYNEk2EgAWpzfHGHnMCu1oDADvBDnR2ohJcV7XFCTUQGqkbrWxQZiYpzNDRmnibTEgcTQ3TP",
  "key28": "D9vaEg35ewYhUxNfxq3eHiRPASA45BfXUoRcWVMXcpmLTGWpEXirVbnHWXh1WSehTFUy8qh2UMShVMN85niKzGZ",
  "key29": "3Qn1zSoQDGbCzdJbxPgGXoPCqAQzwRm4kUH4dmRCU71tusyh9mH9rvqTaoVUPUFMtpZrwHvjtFHiFKicZTqfZjnL"
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
