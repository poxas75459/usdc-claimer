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
    "47JMBQBbEHtK5WmeyRZwUW9xswfUeYsUHP6nfnNmY8FTCJeKUYzNzBT77bA1xiycHHx1PxbTrToFCEsSYnXoxbdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NtfrJRA8vd1ZFVe3W4GcQeDYByJF5763v5r4SdcAocKSnqgs9wCjVoH4JDpJp2twAnH8QzvHnzKK26V3AYvUS8J",
  "key1": "39T3edfsCY8Krt9AFHjMc9RjDH7WeVakUhR1LBjaV2NjoMu762hzspaGYxzEUXwFayQrows5m5L45UCk39U8MQ2o",
  "key2": "42TQ4Y8u56UC7MzH5uNXWNgybg6GNMQeumVuAEc8gQaczyUWA9yCjuSB7PVnVNcAvzCAUyiJs1BzkEBFftymvgAh",
  "key3": "tSnvryhp41XLL7KhzRMA2VHkYj1PMXhk1V1zSgrAXgtuL6spQjqY3u3KaYBddLWBUYgcXqRDthKY84Kg6V7iGqg",
  "key4": "oKpXVLZr8uydSb9efmpBEj4jnD3d1AUvRUM9jyJZeHKPEKz3KgN9S77XKZeq8VsyhZFKso5f9q9FpZhHqojfL9m",
  "key5": "4sVUCjeRMXCcsMe7L4nXjmqeuGC1CNbbD26DpQwkDiU7VFqsa3KftRfrgjj1uRgsxN25qcEq3eUAAuES3rDKHwvq",
  "key6": "5fvCqUTC82FAhssAUDMz96rgVubYaZX4qa9c4tBoXeJfGVbfuesVKbrWYbbGAJLEYoGLGteVbRvdpWkMQPQ4p8f8",
  "key7": "f8vmThpwgHPdEPsnL8RkmFhmPdrpmh2kg598kworSTmf1ZzxPZgZ8KHnGYvBCEZbhMnsVuGQiRFu2kHZakDDgF8",
  "key8": "2paKmrMU3cQobLq9gPGzvEu3M3N2oy38C3s1UsPJDqP9jZQQJw1npCqVVVufinLQoH5qKY6kJswckuFevtmRezHC",
  "key9": "4N2vfWpp5eej8gz6SyXX24keSrX4GRgb725BtgTavio5WRiYwWkzJYRxLeYUsaS2Z1uvnFUzXxD7tozwKUMZV8p7",
  "key10": "BGipvoNWmxLWLDXFLo3NsuasgpAA2TQFDfHKU8X6YV7X5Feh4dAVW6gipcwFvk5yfUFnvK2635YUTd2uoXNqpCa",
  "key11": "sqDqqYsUTrAepLXTSSstCLwLLqQH2fVzNDpYoRagku7MvQq2hRtkuReqcXz6oDsh5asn69r4dxLDHd9qNLnZLyL",
  "key12": "3iWXZeyUgvBYVeVwShYXgQrmbEX2Xmwyp6Hy8dWhirKSYaauQ2o3QVFBN3cPzy2Qn1RMQwYcMKfjAkqsJ2UK6Gh1",
  "key13": "4NsRSqsRUPgf9JueGfEFT3VDbaRnLqELS5HN3MGKxHCuHSZALpvn4kQekmE7dkNuLFeeZR2UJVf3RnGHmq4Z8TMp",
  "key14": "5rvSTCPgDb9JUt1b6i7fQsTpDfb4ouAhWA5M2JAVCF5PTy5xyseUttnnK9JYqKVE5SbjkGFRGZPkhFm5Lc9VK4oB",
  "key15": "2LMEtNzJK4GLEdL8fZR5nSyM6EtHU2QDyWD5CuoJGDXV8F5Gv2TDDCJYsvRr2wChgHpenmDPCxukBFFuv1KR6mgG",
  "key16": "5fWh4MRiuc8RM384deJyAuWWmwxNAvFbvfS4xS5BNbfkHC9N5TpvjPfmzop2Agn3PF6H7YNcK82GjfmVbTqXEq4J",
  "key17": "4Pzi2dthRXig4FVwwPQPkKSjmMXzS7FXs4jJK4q915N4u5TU6vuiFK1mk3qZEg5cKD5rKMuwuQgFE93CtcSytwfh",
  "key18": "4JUHxW5VLTc358gMLSq9hUa21Z8uUmiiaZb96yT8gu2T3VDDfAtuAFjA4s8v1U1RfhR5KRYga7x2fMjYy8fQCN17",
  "key19": "27JBygFRrSwCwJggQjPQ79jdPUYYRzunteegNH3rFwF3Af22PhXeuVx15YaqAwiC7EBzqNRRRxDDoWcpyfgiyuFU",
  "key20": "4hdwWa1FoUgs1UgDVvWpEZR4vHpxSD543QbKYGixjpvy8H9UgFf6YRUHrFxN7cNQzKrPDwP2sr6QAZ1SC3SWY8R",
  "key21": "g4AAo1AVRR41FjmkkuFUwYCedhYY1fnGr7aCC5nxpvcoZ3phxoZAQowXnmebvWFiGdniM4ceDBMbG4f45EW6JvY",
  "key22": "2nx8KxxZ735LG5KmPp3GJPbJ2L1nLovWHLVL3cQd9vqDnFJYboe7gRDvUSi4FD68aXfnFcA56KAxTkZv3VAidnKh",
  "key23": "5pJKipG56N7751tDxipgDGyeTpx4SKpUqJ81ik7meWQF3VszSZjJv1QfBjgJAHmoLnbcKAmXWseLsdijtG1nYtwN",
  "key24": "qewwii7awuq4VKAq9316LMH9U97yLdXSjKxLYApBtgBeV2SPv1wy8uR7R5zkr1iGRbNxpXkDRWfhZeNrw8mTRTo",
  "key25": "2MRX4Bk8bxV6C9Gn1XtGyHGhB9ZMCSWKLfpCQMZqUX27iCDZFj5cStGdkUbRjrYmcS5XbofRpHKFYc6wHJoPTHdo",
  "key26": "EPK8YL2C2H9167TqYFZ5B5y1gauscNTjM5y9mLw5Q1nX7QdyrYPsgiedd7kpC28hmv9cBj2yBfue7CH1rmh6DHv",
  "key27": "uSGzgBngyqwBeX4PvXoKqANouVRiUjkZBCo9ZDs9v2rmc8PsiHhy5M9HiQ6c5RZpek87nhUR2SgUaSw1V4rok2E"
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
