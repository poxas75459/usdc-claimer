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
    "RjyXEGvpTkqBfjsoX3eTXYwFr1QWr4ssynNpmdwc3RAg7cc1tksoQzQ4n4wSGJVy3TezdKzuSJsgz2SagRAy5Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTaxqsky3VABEPDRj9PhQ9KVUDxWh8hEU9UVaMukVvhFjXxwMqYYLatZB2FX4mU9KY3f54C8d4CFvYy1hD6eqzV",
  "key1": "3zSfobvXK4uHqoMPboM8PLaBTttwsP3P6UqLvUftxGYQTmwhHRsM9eGNPmJGYjdSGGzvEeQ9aFETsUHoJbbK679G",
  "key2": "42bitiqV4CFNeX9yb3HvcmWwM7oMyJ9QraH4axauwpgRMr9QSNyAJWKVfk6qEhD9CN4tfQRwGZLj3kdv5EZmDZVF",
  "key3": "5mq9jcpKziPdLWkM4Jd2ziscxpcTj6nLDFJcNzk6rK8jn1tYYdjN14VuRvCVowG98TE1MX3XgrDpmLCTXKwFg6Hh",
  "key4": "Ltc6raZbznAK3ftfRv8dcgRA6eiBci4pDsoJSWctg7SwDkwMsjduRWEEJjP6MU2B1T6uqDX6d5G2Fm8agQ7rYSP",
  "key5": "2NpemZvVfEoz2aiA39WDSes3GwrZE778gmwzCDas2nyS7yhsCkL6wZfWfbbikBWbLTrpqktttadZ1iYEmCEVjTk7",
  "key6": "2RiiXrThT3qWKcaGanCaAnVkQwkSHQ3VRzD5wdaD1oswRsZqtvtJjuBtYF4fEtcYyLxK3tLZpcRMeCywGkTkYJAe",
  "key7": "zSxEJn4TCrWbCVmHWNeXwyTatD7kjhzSgFwopAzs9ugap9HmBJQSnv9faCE4SZ8F6vMV4R6Dx2n8zHPQURWkGFS",
  "key8": "4XDGUUkAEubTqiYeV2eCbuinFE6QL7yuLmcKeBV6ja7UkATEKNWcDsxizUg1t3r5N7xme65BUip8vWFxpqXTojMm",
  "key9": "gv5NtBernSUdWCxzUE7xfiKgBFST3xKjxEcLgtxye3D6dUM74atWvS7WHjLXNxZBhRbz8qjM43CdD619fKeaggg",
  "key10": "5jWvsMittPP4QES1zo8gKh9uzRWxki4WnAFXF5U9TMfXdeEH1TF3h6nYGhcXitgVMsJ2YBzeaG51QPoAgWeESf8G",
  "key11": "3ci9xMRKzXuTLcugFFGYe3BvUw7kpYo7c4CHAMiKACvYMf2vZJNVd5iVwRuHQhsqsrPgCzZjniJcbwffTajeY9ws",
  "key12": "5j2hitWdcy88JQ459HCXAF3mxUNkgfYCe4dKURgzi5RxjiZc9uon5UZvDxi5bsyEiGfQyKGwVdA9HtCFBiQ1pvSp",
  "key13": "4A61M4zN9Kv9JKkjCyoCdVS7QTHS4cQS8wAY61Pb7WKdPhug8VViCAeMPWzbjaH2FRVDBaZ7QcWY6hmwJYGL17zG",
  "key14": "rcZMSQG4gSEY3mYH7m73hgvieQLmT5ScgRZjnUuMJuc5GNe8tunhR5J3frE7W1VHpZNt1iM7Vu7iGt2D1XJJELS",
  "key15": "4j1gZhipWaCsPhf6sjJR3J9C1ywyvC7LZr6mCoUnekpSY8VCbreqtBzs2E1rSxto32b3bCbRJvkdr8ygpQBQXkZz",
  "key16": "5d9UfFNEMHoR7nvo2x5mAyaAUNWpe9YKFEUQDeg9gAgfCVAPq8MmNR4CEjGiYd7FCjG8LnPeuWt2b5ZTazrVkGPv",
  "key17": "SFW4qRqHJEgZDupqpzrjq7eqvP9z4RTJ8BMhctwMQ3K5vnk4sTj6N9BsMt3b9UDn3YMD56BMKkZNZf6R6DRB7kV",
  "key18": "32J37sLqcfYTuE8SN3Mo2MuJJ7SgtZoRt7EszDguPHNtwXCMBFoEdz9ZMgaiMDT2SJns3LhHTx66mwuEd38pLEh8",
  "key19": "4pqbaCJHVtVdw6YQr8YRnYZToQyccbesJEkmRSSwFE2cgLm5wzkrqLEzxAnLRaZykCCQrApGdiWi4hYbAVkXyYrD",
  "key20": "43VMAfXVFhswkd7cMbhJBzX8PFJqi88azqNPmqHeh4E4i97VjmJWa7fXscBjoZH9vrfVH5PySzjdqNJ5gqVu5HCY",
  "key21": "6U7HeqnEgDRE8nWbN38LogYeRVX3zjXc4jRWKBbvKkGmfjYLY1t9HGXH4FF3ybFsRTMkAWGTjwhUdhvQvUvkrYW",
  "key22": "38MHcR4n3mJeifbvKkjK7ddKCXnNXFXPLsLAXqiKZQbWGq2ZDWDYQWizZJCrSbXuebyx7VNrtd9bM9J315jdMxU2",
  "key23": "65hTxqpsoNQKGxTVYXUDnKHZsqN47WNZ97Gzt45gJkwBCQpYEy4uXb1uc8c9zp2yZzqsqYh6t3N3h1eTWian65Rn",
  "key24": "4GucSALdGFCM5gkY2rAvN9ysTbAcY29dfyxDXBfsN6GDBFHszXZDNC8LcH4ijVky7WXE4k3SAtJskxgX5eoMcLhf",
  "key25": "3hyd8FPgUDDKXQig4nHG6A4ZkQ1fFzpPC2d6RExd1xGQepDE1ucxMmAddJkDHk1Wi6FMqRXgiwNbip499wpqaYQa",
  "key26": "5uVvfFjowW5XebaBopknr2r1JP4P2HeEGMHXSFb5w8CEZ6LetK94DccH4vqKM2UyHB9usWCB5gjsxmigrqVzRK2h"
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
