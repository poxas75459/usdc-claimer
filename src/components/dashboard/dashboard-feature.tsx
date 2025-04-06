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
    "47xxXiGZ85pCwbWcWDwAmYSDoVN2Fs7vEr4AmejQNak9YPjPiQ8ByznLPutVe6qSQE9etLNNPzKUeFQBmBEwre6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iD9YwiM6Gbh2QDbomhGpzUEpBwyRuLSujePyU7aWerV5HgBsqciWERhsJXYqbY7g6NqG3YrNBRRQuXHXs13xT2",
  "key1": "YYifoQ9bbmQzNebt4btkyMWcwvMWpe7VcAGqtYGeU4utTF5qKSipBbv6yMdmb1EgfcDuKzDCH7VkZkRRSJ4oK6m",
  "key2": "pwgZMvjhRymnVzPcBYh6bP79umneHAMosfjEW5QMPX6ims7PZWHxHNV7LzxBoH16s7LQWeN6LoomLPv9R1i3UdV",
  "key3": "5zAbEVLUTCnwD2R8G5TZ5PkWJp9hdQBN7sgD4osxTdMRSWuwqAsTQJo4TT3W2yw9NuLbsFEpDgxsYicnwPvh9ZEx",
  "key4": "3sXKLqyMR4VucwmZukPDqJzAdyKCPjvCGCrxzEuKMd5idcMpUGHLrqLvTVPsydFWSat93GBxZxDxxhdHYDVXgrVK",
  "key5": "5brT9XmV2P4YdnEWXojV1uYYLFeLDR8dnkvMB8p1oUY4BkeAm9nockuH56PG9xyGQrGVNFfcho2feoQvhQjE2tvw",
  "key6": "UVRQPrJQszFhg1X5S5iARpXP8vJnmNtjvrTr2zh1NuT4HWTXjio16R7UVkLkJ8ezCjBz2nndsuLbGWMdDXyfWJD",
  "key7": "2qq57F8SepeUcjDv1V5LPFS7zRvtSQ6yK5KXvu6TK8xHhiR6aaFUVjgbQDUKfzLMTrLyNyiAqRvbRCvzbw7XC2FD",
  "key8": "26Ur5zHkvfYvEgntHaAaaB1Z2mGN5pSad3B8K6HynHwHYXzoyF4Y61sUbN9F6s2tCp5tARAfEa6DxhPNNwXfW3YX",
  "key9": "2wXzu4xn5DBFJWxtYfafnUYrbZPD4t3JfA1k4xGscPA7z7RxCqYRBQVKq4updfYvAVhDNbjZi4yyYpmhygRG2F7g",
  "key10": "s9UQ8USNoFfwhfXQsDgrR1JUufnxp9u853H43QwvDT2Bs63abStN1f1TjbnggJo5ESc1LJ4cd1nExhQYjm7vHrc",
  "key11": "zXcYrimML4H8g2cNkPXKx4prnJYT6byZGa51YfDN3Zp7EvfHyYTgoJEoetRC5eQs7NUEkrTXTEqkZzuypYzZi9Q",
  "key12": "2qZYHDT1RsJBPS4bxmt7HPnwsAoZwX84iEJjmfq3bw4Vg8PSiHYFQZpucz54sVHUqrGp349uFqZeWxi668X1W2PX",
  "key13": "4xkVqXrE4jrCgT1ivB15cVD6NynyAvU9XGwwYG7qQbv28sqpXBaeRMXqb7Cc1F1zpjfuLhqi8szKETiZ65LuGiLi",
  "key14": "5rLC5gT9DMkrHSkUJkVzrVjPgUfdYWhF7YEvbZU1xUwjJYaQMQ3Kyyu933aMus2iFApRcyW7dgtzV5mrtBoqEHxp",
  "key15": "4Vt5MoiGwyJ66n2r265vbXNggRHKnWNK8FXXEeMioCBMjQgQKbJsRzApB1RdVZ3psuhQo7xaDEDii1NLG5Ccg82e",
  "key16": "21Kpd7vuK17H6JQvjAbNMi1V3etcJgZXnWMboFFWUTF84q5sonuffJ3wq9qmoDcvDBsLV5o2jX3jhVKVw9Le8nKy",
  "key17": "3FAoDUw6LsHj9mRP8q6j36sVc2rSy6UVBtrsgUwVbkFpx5LjiV8Cii4rHSBh5mqHvu9Fi6z2m9i1YQdULd5TvxFJ",
  "key18": "WCXcA1GdnRs92q3JN6FEDu54WKqR1mBRivk8XSZsb4WThHeehrGUUDE4MeHyLgPNQhyYaixCm8TsEPj12eC8Xsr",
  "key19": "wWFRQcFdfHgB5eS58HgmFukHgxskhXsGRypu11M9t2n1opUZmYRTjPTULcxGHbKrJN6epKC91n8CJ1iRer1gAEF",
  "key20": "8TziZchCbaNgej2EmNBsGDFAjLSQpazWNfUEseyYxwmn2XBEDWE5FFeHJnCArEV3zBiP12emW4PP3jSZXsmnFqp",
  "key21": "3WVXoHKW5RzKTdQ3hciAUsjG8C1gR9omJZAfV2rXHSsfVbrE8H6bQKcEbC7RFd3EZ5vRRJWMdcd4vQUMKJrCYq7a",
  "key22": "deg3RzPrAeNejaz7VazTdJZG3wxTL7C9EgccctNyZ6i4Ds4QJwDmJicMcgmwxQdFT6iXXVrtG6iQW6DhGbZaTPY",
  "key23": "5r94zGEBJPLsZowyr5P5vaGweLBaTQ1uNPhVJTAviQh3WGzauGmb78r25baGhcLsnZ7EdLi8JbgPcZoSgC9rSVWM",
  "key24": "22atD82V3J1q4odddiGZwfAAnSVX7JbJuViyKeusJ8Vnc9DMnbvpoKsp7bJmQj1c2EPTBfJ37U3xso6fzDB2T86n",
  "key25": "s88EZNmzAY5edvWUBWnmVWdYqmrF91XfGkVGAQNh6f8S5BdYCfr1eVm3TDwu7vry4tNTJhwQGWWfB373fsQatVS",
  "key26": "4fTzQZbYj4nqNz6MKZTH6V9HtJBqMpdStJPQSoHj6XPN3rPH5S2LrVLg4cYL2SY2YmBFAeCAqZDhFzBLQBmAVHne",
  "key27": "3UiZws4TD5n7cRYTkSoD2NFJ7gPhYoQFonbha2PkEMkopSudUStNrymjEZ5engdyCz3TEMv5Jh6V4AjSJWGGytrH",
  "key28": "SMHrPCQPvJcJrsLrjF34sRQouW8azSjYFnRwChUiGoF3VJNDERykbE2Azy3vaDrspiSJaJNpTG5ZrNZzz9rhC7y",
  "key29": "5KAdwhwAKTNaf9arGvNo7DLGX6YvJSmYbnABfmkAqbvwgw8b9RkWCEo8EyDkanXqWUFHRg88ByQpcP7gZXDwRnGx",
  "key30": "2dcJEEqE2DrEh2p2gMvdvqfsiSJhnH9yjaQXr3F49MFY4V7yGa4Mcgz4bbwzSxCQJTmhRNwu4J3i1ByDFc2rdTSe",
  "key31": "51KCD11tvmyzkzzXh9QVwcNSi1Cce5qRrxNxFBqbBYjtzAFCwqbK9zx2y9BnW4swFtnB1jPWWGLtXv7AJ4WDsLVp",
  "key32": "38HUdmg6f1QfPP7V75VzCMH4VDAkZCYFG3cJwnbQRLXUaWWRqn8Sx4dc11gKBxA2ukohvRbj1g6Ht9ZCWtEFRbmA",
  "key33": "4anYgtSdKJJuL4U2JgSqBCMwgk53GbZbhFNZDVq8AvZ5jT93HbKJCyACxUAWpzLwNc6vrLbQXfCVtbee6eZQVJ8T"
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
