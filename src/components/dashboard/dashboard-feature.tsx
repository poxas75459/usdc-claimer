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
    "3HnBmEDfthwCAxRkHk9fhgrqK1gfcERdgjHteb94UdRiH8zYYJn9Gz9LyRtBVLutbwqHNdHHVvq9Eha7TxYergUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfH1s1TdhbXa1wHhUPyKRpEeRjEAiUhbaAaN25HSuNDg5dP88e45au1VYBBDUtWNERV5YNHdeokuAtHHsG3mUpz",
  "key1": "3hBG8erh585AbjoZi7YY7XBz9HYWsUEmz52bxW17bfPMx2bQGzSCnmWfeNimdApXQ29j5bG8uwq7jf3tqqxT69JA",
  "key2": "47qt3p48H5G2qMUwBzhv3fHqgLussNsEhDPmixkM7H11ufT7w1UpmgfqjbxLwWWqQRBsLF3Hrh3TqboM5GxpMaw2",
  "key3": "53C5P8YYGr1PcZo6giroeL5UWgKSP1fFLtqUULHDigJEZH8cPT5BMLmjZ2wSmtqdsiXRGHeh4YmAwYvBHXY3KRQL",
  "key4": "4ScfmrLMX12gasyw1gmsLn8necuxiF4Y8JJRx8n4FvrX4PtCgS4mFUZ3X8puq9sLa5ovyVqiaTYDGcsd9WGbCDdo",
  "key5": "2ENnT6fF2j6qNxCj1kASqRJ3CUbwYZqtF9nG6KhLSXcVZ8W1jdouoZMFw5zkcwbcEh6dU8EtUHN5B3fejScg1TfU",
  "key6": "5VAEhz7kidnUF4wLkXVxSJXFfBgRg5RBnd4X8tbv27KTVPn55XmtE5bJisFaaa4CpocskBFM1NaDwQhR81iJdq6f",
  "key7": "prwbMyHprzWYrKg3axJHR28s2n7jVdZAgHvEtmBye7NqL455h8PN3vvozZn6KJN6SUuws9ooVxTXGZASxaLa7s4",
  "key8": "4EufNC3dbHPCRKMS7976oZHuf3n9QeL5nNLTWmFUhnfypwwRFbgG8Y64yn1hzWtjn6bgg8VMV6Ftp4S2bDjwUpXo",
  "key9": "668rULMumBaXTE7MnzE4cxhk69krvx1TB23yxN3dAqEmtGh61Rqjh4WRU4SiaLRE7gc9mUrJcE3jHh6Wh4SsEsBP",
  "key10": "2N14VXiU7YRHd6kEQd4gMjCF64Q1NtebMshe8SHkmqn6nE8RuSgPNpoPwvV4GVM5qxt6ez37xvNKk94gtVeA4mbE",
  "key11": "oYXW5AH3o95yHEFKaj6UQUNfx2ZJ7ukcjRJFjGZfmz5aHYmFWUspfX6FCZ9G1vDx3SEuSxUDzLwwbU5tCaxsYFL",
  "key12": "3b5xaeedjJ5d3UfsXyG2Vgv2aXWFm9a78V1h9YooNWGLJ5BfV6QX71KxRkiTr6qFvUU1kLkPtc1LtajoiiiaqQNb",
  "key13": "2Mn52TSGiiQERxhXjBgqDdxWorKF3umZbLLB3Bu7JmqrWGQ6itMKj4kQVnpsLK8FM7cXF7qhJvYntmvwWcQoGg7n",
  "key14": "2ZCLrhRirsv96wi2Nr4DpAEENbeBe6sCBSS9Mj7pFWg81eUoCjQbvm8q2Xdy6WMhaqqsMUSi2WSZcDxxcwqkfJXq",
  "key15": "miUHhTLsyNELdXwKLWhneV8dpQCH6qw2fem6D4iGjuo1tnQAKXEfWaUwxGFrL7i1GxjiGp9mJPDruefoqusoum8",
  "key16": "xowWGdZLdrxuU3tNRQSucgSj8twMpR3kyui1hR1RAiGZHmhW99VxvCDkWraxAedDuHHnBd5HNw7NfhU4MggkopJ",
  "key17": "E3VbcdpoFA2MmzukhC2VbmeaaUNp7mK5VfxZXQsA9bURnPt697bidwUktUVcYG9TfZBDx4iJfChce3gE8TrkbsZ",
  "key18": "q72269URjDkYWLkXUvepChYGxgziCczy7UAq1acgLkANM7jEYKihPnnEMmPWwHDxEz1D6jYwHPEvdH85zHgQcRN",
  "key19": "3R6SWKEsr441SM81kZp17fpgu9kLZPRm3yfwPdhYhSqijtGaHh4xFY9jLFpmr41C5Xciw29dZYwDTcUxx9xDkRwm",
  "key20": "2uXBA1f6CfaFnrc72sU8wqSTrARPpS8PSMYmTzkfEGvKzytRUqbo6pGg7UHwhCpss9xPMu96h4QWsC34Wy1oi9xN",
  "key21": "2HmPw5zqWAbC2qavoTCbNvST7b5g1tLXjLeJGjhXQ9F8srEfCDLCDiZqcgitLzvdpemYU2di4DhbBYKcnZU7hqY2",
  "key22": "2JFBgz43NN8cSSLcvYCmdyZBbFH73EXW2psj5KUKK6wz3UyJjr7SYLb3Hqa2mDhZ68GnWYCw6cYLbbNqfBPJEGmd",
  "key23": "4JKQc656fyyc8oHywB53YM1nx6LugKELH8TKmA76FRgckHbu9mXSLNjwBQPrADdWeBRyPcFDHKmKa6UX1hbFKiA7",
  "key24": "3j1S8q11tpNfsWaePTtKv74GtVcJau6a5sLPVEuTvLK4dQEfGEhzhgForepg6ChGbhM6mTrUKVqx5fFasmv7SwDJ",
  "key25": "6Gsiwt26w4EH3vkYcbJkypBD1dPx7KryA1D2VXUmuk9Xvuqi79anRvEuGf88Pd32P13ttRU4UCTqg9ybziw9gAc",
  "key26": "4JyGyd4JZ7M3z6461z3CL2mPKQ2sz5qZeKeijZc8g8t8ZYXf8uBvubJ9L2ETjXVwBUUkyQYFebLBmf6BskxLWSn7",
  "key27": "4iXE5eRaL4tsD64jzhb8zpcaSzZR1eu9eZ9qWpuyVkWi58K8DX5zspYiNA7uepU1uNVwZok3EyyYqUEU75SjV8rR",
  "key28": "1cfyugX25xw1tbr47g3cp5S9HjAYhSvLiK9WHfaMXHAXnq9CQqGKt4yxXpFYasTzrwxN2hh22Z9Q2cH7h3uCftH",
  "key29": "63YQeojWSvUdxkptFHz9gR2LEW8FBEsypcwPanU5UTg1eQQhZ7kp3uSsr1DHPE9BVt7o4A3qm5CEExw5iHTPb1Lv"
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
