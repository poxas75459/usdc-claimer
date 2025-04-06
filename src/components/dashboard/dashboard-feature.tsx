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
    "48bVtEmzq8QzSEp2seuE2iZMecuHVQRPkM69QLFMertPNdnsuppDrZnbDRbEC3nfPhmAocxttctLDdnNB9t9Th2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtEwmVY5JzjKKZBsTRdL6rdrdppj4rvzhdxG4oe6MDiFquuPukghV88AoQbHhwWX3CEywk7jeePmrMK7Wg16THq",
  "key1": "PpK7E5oBrb8oLQaWawN6ccUeoVpfvzUkYt6cxYte8NnbibaWC68t6HAq4HU4fuLgQgXVi9m7umPYdTog1b19wjm",
  "key2": "3jmqpzQVxxoHZuD51eDYsqupnYkzxQ9ycrYvuxakcqwMJv3C9MNBfD5SEMGVZMnVgBMaGkZXsmZMJXN9AJqnearq",
  "key3": "3GtGC8CPYnpjy3iQp9EeSbyBgLxFFhJ3cWa8vqhDs5dsPRo3eq1U9MNtDaciBzJVrzrWPayGqNeuoWz7rS9sDrwU",
  "key4": "28NmRr3a6CsuDg6GgaNwCC5zqq6p2qVSr9hThQxh9HmF5ksLTc3Nu4BPpTL9yghHPLaVM7WKyUUJP9Mc3TA5m4i4",
  "key5": "2BqRnMvQNmg15rJtDfEdCNZqezA3qmwLdaN133qbZCbKn2P2T3skuFpkgqfM5DVpY25x19XCqtYHGJZ9HnFkUhjJ",
  "key6": "5ZMcwTNcuAm7SUfVzQ7k8PPSxhHuZn6kYQAp28hDyno57wxvs4LNSVxMYb5cmmDF2YTSzoAaMcHdiXHxr2qY2EEe",
  "key7": "SiAsSvLpYAecwgwoMyJyqskJnPoSiSzVSY2t5yq3vh9ZNvGtdHbUdDxBaJsHVhBz6d6nqsxdtvqbnhWbutMHf8g",
  "key8": "3JAvMBcYiLdM7SXfcu9MFgQq19tWQjBiPPYWxj21Kt1426xfHrZsCQMZhfSwsa15eE36C3qsKqWXEXpPjHQk7tpN",
  "key9": "3pHSTAwT6KfQBR4vzVTzv8dtYaPaM7h9fPZh3hPgbfDXsHTcFq3wDbTkkiwAC2nidFXXtbLXEXPBah2hUpnajy24",
  "key10": "2x1coT69z9xeCsuMtf2oQeywQkYo3MfwXgshruGv6McFEu2MLoVLL88D9vwSQVUgUv5skozbgeNAB4j6K83Xhsqs",
  "key11": "4mZJ16BptV4tziSzPohF4jJmzDZ9BMf4yFykuJue21rppqCFSqzHUvKnN5NbT8LHGdRpnmk4gstNpGjJBnZniKzC",
  "key12": "3xvm94EeNqsxvgVJBS6qStuC5RzmqpufwA3z9TgJf9P6hHCe768k8otbgfrviw1mobXHr7T1Gt6obAWWcvpyrhGP",
  "key13": "22q5hC5SNKW6CUbkDKhiMMskuxRnZiPuvrCtVF67F6r61bupxGR5tSSRshcjda9caEiU8ydatbtPfbz9JfcnCt2s",
  "key14": "ZZyksiqXNzSn9g64JpMqnyZ7XHurbjkufjRVh1UodcLSxjAcTkiCKiHD8kKrgTtcHJZJLbD1n6y7DZJnLnWBrkS",
  "key15": "49yM7ErNnY7bimM4rQEBAfgS1teLPmBeMbaYGdxy3nUmsgN3qaCk2yAdmK2Z8Z6q8HpGVs3Vu3rshnBcYXcdvLte",
  "key16": "bf1WsvX1AdiL6RFZRjFfm6e8XkDh4YASBY36FnwTd7V4n4UQ4os6W3dLAVtk7hZ9HcRcpCHsXbeiK5pHqqRAGZM",
  "key17": "3E2KTM33xbQzqxP3nsUCziveVtJgKEoMjf1UEfdBuX345o9tr6C7T96pR6s6GvKJbYiAZ23ngUgXVULVeTWA8DBm",
  "key18": "dtzwz3zirsfmsB9U2ma3SPMPDu7qFXaxCxEoeoCYdi74GzQ3tk9wkLtEboLkNy88Bka4FejAxuCxDeAXTz7UVmW",
  "key19": "5SYKswajSmMAagT2yzz1CoJLBTkbFCKpwvR6opuK4uRfS6ssxa2CLwEzpz8hRdhrpWymezRg79WNGGpxy2bJzEJ",
  "key20": "3cMRZWqkS22gkVTrNb66oe3hx42w1BwMuEJYLibrrFsiFAhGZDtiU9QkMTqBWaHo55JwCAJysNixjV3Q9YBL1RkY",
  "key21": "2dKAZzkCW3SWvjcMTuXquC3waAqzuuajdZbWt2vqyYjYLhMLahkSNojiKQUqdgy9Y1pdWbQYWvjzqxW5DtxZmGc4",
  "key22": "5TLxAx8dVJwNW7YjEKJFJX94CK5FpfA9i9c5SECe1GoqZnNN1SQsEyuY3sczA3fypJVG2iiWeYXNwDT75SNdo3Vz",
  "key23": "4EGTRxJjyTNFV6R1QZPoacsKqeDqw8hJA8294Gq6RdxZt6xvbMAKYmLmYDJd86bEbWsY2uTBudKPcBVaiekBPmDp",
  "key24": "Gjyf7k9giW2PjFcJY4p6QTALJugTuVEQnFDG6F8RDw2XzMdNB5YD7ZEr1Zdr4Fui4rRxNVjLv3B6gvhUUveaxH6"
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
