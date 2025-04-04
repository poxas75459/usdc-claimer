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
    "57rPP3BComnrM25qHLBhLw2mzQhKHaiYFRZTXwqFqWg2p6zMyniAWnCPGuKMNn83WXfm7RD7EVmNxJwZAKD1SiQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqMvU4ZHuKq3wUxuYx6weuun7JSBezjtrarpNuFwT5Tyaj86dtaJ9B4QCW4J3j4s1G5MUjxhXDGLYprW4JKWdFk",
  "key1": "cNUyQnwKt9U2CTNHE27un2hCrQqjAbzb3Qzo76MThcJeiivEasjkhGgt5xteTsXfBo9idXcSeHcm8ewsuzHFjN3",
  "key2": "JxykvmMxmsvFwxvoYdKgcRYqkTW3kLH2jnx1djda4CfzqncM3NuVMMBwtTCrSiNvBkUudMFS9C1C6QqXZHCFbWy",
  "key3": "ccSTxWHa7om3g3PF2UnSqSpSGVEdwcEgy1EmKED735mXyohbUE1p8w3v7s1PwV55br1dNZeB42q1jnbrL2XEu6f",
  "key4": "4adWSq5MQyVo4C5269qFNm84eXrGzvSLsjnF183jSKUqt47dZbQCbwxYq2R5Wto7R72RRutRYVBmh2BLUTC5zAj5",
  "key5": "54p5DdadudxfpKJNVDiNMt3FJCe3xhYkseQ8N4XkDq8S6iSAQe8nMUkYceTfEivuvvYdPy78d7QFFAicmbgZoL1s",
  "key6": "4E5nM1z1UgNZo6SwgJADwUNFeeWvn51g8w4rAvvrzXmvN7XEsfuaZUp9AYy33jrp6nvq8JvJNrxGcrq7Qa1qysJ9",
  "key7": "2afTijAA4joEVYdEQP2yUCXyVCTXfs3dJwRpKQWn9Gr31K76HpA76dCczg4TufRDvbHqx9gvwysmEDQ6A49b1AVA",
  "key8": "5c8hXkUSAfWnVwzkoxvKNpEVDdeRptwUfPRBFEd3kc5jJ8SkvRW3K9beTB9156fEPxexaiXZqThJktdyvcx77p5W",
  "key9": "5oNoApWYxVJaXcX3wXn3MgqWzs8xo8GVWzH2qHu6ziQjwykMnsnJQqEE5Ai3tLXBiA79YEFixTV3QS7hLPxFvd7w",
  "key10": "2KzZR2vCNUwaVSJSURJoZbQdfS6k88VZ5QtiQF3Jw4SUNrpMuZPHst14QboXvDgg4FaqBiCQk6pdTVg6PrakSEyE",
  "key11": "3RGAaQ1CR3zs8c9hwhVSTRmu4z23z2FLpBaX8EcAtSp14JeNMYiAFv2FHaW3MJzYWorSMhUwvxRQWDEgNdaepyYM",
  "key12": "26snAw4XAGjQGQ7Z4sVYXCfdUJqHNGPSrME3VFboeZuwYs1yPDwqAtBuzC37kFX3rFK4s6qGiAimSSGvKnQgdaV6",
  "key13": "5VZG5g9gWmiumq3ZnsgwiWtbFwVfDRNUo7tkJL5XKuKuLhwzFxPrX7WPVq3n2kxJTbitRa2dN9CqhY6VUuD9744L",
  "key14": "457hoNyS6rZXS2WXKmxSXYT1BkpMTTiGNugB9xkjBFjgm8qNEqjZUBxw4Dk3HcjJQuhAyXwnoNjmwY4hejQ19iDm",
  "key15": "5hj6qyPMQ18LWQQcgwMEtE26xNFGP8PiE8nFJGc6k5B7Gydha2ptL6SyCJyg5NLF7S9mVuxwku28kuKQ22CBM7so",
  "key16": "3Dq7psmb1JN5YreefN3zQc6bYE76x7RGukfy4FgkZfS48WuJ6cwBEgRGHZrwENRT5UwinVSVw89U6miWLkjNuZNV",
  "key17": "4hmRYVQAZWC5tzuG1JkQukVhTAHDcAkrhuHMwzB4voXVg8pvyUACYmZah8aodB7iBF6Jn1MXQPpcgsYkY6Bfn41n",
  "key18": "4tptCckczKk9gcVKKShd1FEahsr9hGCpgiDh9VHUd62MqmxhtGUwnKG9W4Sgu3qPq4ZZcoxa2xo8DTCZtzXDbkJk",
  "key19": "3ACr7fCzQwTRR6Y5u3EMW7XT15G9Hvo5WHzXbkrELrK361bUQM2iWwZixUw3nmXZfPEjpA4kufp1w2Aak9hMKPww",
  "key20": "5SPcUbQwSd689gAXZGtsfv35Ti9FhNuBUTSt9QJ3XytTPKFoRGvKCiW9ecaVNap9Sh1ERxrtRqwcjPvLh57bZ5K7",
  "key21": "3eLtJBE7S6txSpozt8ptAzP8UdymJc5UGZFsn9HyQyyvXRJ1VKduppWF9L5zFgXmQ8qyZKR66ytrmZC7QVznWyHw",
  "key22": "3HHV1SbDei2NPpv5xf2qmWqiCXEHdvbiMnsQtiB7B5AogxzbicTNDERbEKPKqeYKttbvDdZehKHwhn5wJt1zEHYa",
  "key23": "48KjLyDYLN5QMAnGjFAz3j2miNdDFX4eYhjPZDupfYo4KpgcjWco1hg4kKrHheajjtTYxh9mNaBNkXPxzFdz8nfk",
  "key24": "AXESejs65NokDYRXkp7kT3w5ecytS86LeN7abo24h8Y7vwEfBXnBqadzA8i2rj17RwRMm5Tiyt21H6t6oDxbBN2",
  "key25": "3zzRnMXCZgGdNehSrkdVarjF4yUohcz88Vk4AJvhov2G4roQbVaTeKV9gxibVtqaysoQU1C8hQee4Jh4iCENUog",
  "key26": "f8FcW9M4R5SN15of4AFhneAvTZXE21EupDuFTiYD85k2pNX5qxQ8cP9iyxzc2MFHzyWCczeaMhGzhELTE952MCc",
  "key27": "5kLojRivcgUbGLpAH239p8heanwsycB9FSm7ikk44aHytHMnrtgtCNfRnsGYhLLaUopL1gocdk7wGktRQoG51YZn",
  "key28": "3nZhgX62qbn9qt4Vuo8KH2tRoDYisWFjW7NxcQyeDRDZGVUNvxCeNMBsV4Byy7ZxkceBtY6e8oisnQY9qLdH8goz",
  "key29": "L8qUFPcPKpZZKZ4D1gMjbW3MtZ9vRPkJV3J1zoN25NFRNP2B1ezjSyjfsdGaCqfcSxxyLgenLn7eqcSaq3DHfsM",
  "key30": "4sHwa15X86ZL6cmnySLxiwYSYHBkgGQdEqpT1HeQTZmiJbrN32PQU5wukQ9hozk5uXYaLwJSyENRCcuUDtL1kjAt",
  "key31": "52QKSeHmF2nrP1oSdqA35LwbcosQ128bRewb1MpGSvZcK83omZBPPuWkK4T1Z2iZCY9GgARNGpc5aRPL6KxWudmM",
  "key32": "5oem718WRkDM9HmCE1yFqGVQsCvynUQTpva7PSVPsZf6xAw1nGsLAD714qJmG9BJ2P5G5XuFM9e1SnNo5LZgNYkT",
  "key33": "3twQQW68fhd8pffY22xe5BbjPgPBswbUERV83uaUoUYhcnm4f6otMb2sh4b4W6rcZs4TRVVxi2CLhDkRrgwph4BY",
  "key34": "5WF8NKLYPmZkq6wuxvKqmicDnSKvM2V9kvMhU8Fi4HW19bNNdvjVvvXHxswvKiEFJGbMf8G6YRJWmgymYGBYdqDT",
  "key35": "5m1Q6Tea1PbdqCk6N8RM2G7vEUKUA7cYq7cedzqkVx3LNR6i71fWi9EmoVNwsgo8DKBzUsNfz1AUmshgKA3QJjc4",
  "key36": "3kWsMyMM7tuDyNbL6h6U9pRg3obmbFNhRuyovamVrxC5wKC5hZiwWQQs8kFX4gKMDLyuear3bfXX4uoTrVzXk4EK",
  "key37": "5xn1PT8EMnjCxEGMgZbirui8zssV1u5MMcGC16GJ6ez7ZJUzgx9BaCqEJdLtGPGXUXneac1vFcS2hNFT9wbjVaPw",
  "key38": "4wjkMEnJrzSgdFM7THKfNdP5H2SAsifoghb6dKA1QPgwMyx91gpC895KRKKTY2Ftw45NCGR56TXuasVooKBagj5K",
  "key39": "5gKSjAVUG3Kokjz5tTvRqTa6bw44dGSPsH3ogD8U87ezGBrQQFviwp6uCuJi4oVDgNFX2i82yWYAUvWteGYCBXZZ"
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
