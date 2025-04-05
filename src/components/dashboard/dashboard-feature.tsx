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
    "ayUqeAFbTSY9QfALH3ZrJK9hhzFur4icBj4fAsq5GvXtAw1kjmN7WHqaaJhY784wHbba6srQsSJ1EBeKXezQbSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wp4c3yTtaCpoLoWmkTQ5tKy3oHgL2k6hEcHzCt2RTjr4SGS5AHneQaG9SyxqNEZM2sbqBKAU6xyBwKH8aJitBHe",
  "key1": "33GQWo2ayC6geecBuhcthJBtFbzX2VKeRWW2DJ5Q1LbgjqHxwViZbgxa2HdsxxNCMd481PdbFUfAwTXhH8Sbgm6a",
  "key2": "2jw946VSCpSZertfFUh6gFn3Xf6jffTi2aZYW7ahJjYpG2EKdF6PtBV9WL9hijLATCPxB8Qbes9kxPJFVAxDwJ4L",
  "key3": "egMdazJNawiXyWEnXdtt7Z2TQySXzda5x5QW57cVzdYH4jT4LJEYZjtosPgzG7Kqshkj3dedpNpdBkbzbJq1nsc",
  "key4": "5YvNbRW8XduwP7zHRMspvbpUCLcjWhTVEYXBFgKoLCPoCptXyHGdnJDmLHhn6zAyP6KSNismQjdYT3GAu9tnRteo",
  "key5": "4o7cTaE5fPRBMeiXdLMB1KAcUGTaZF8zm9ytUVWDjw3cCBuHJyERjh8hMupRv5myS1sYDMA3sxVUzhaGA7UrAWPg",
  "key6": "3QT93eC4W5VWjty7qvp7qDk4kj8DCci8f6irVgBs3hsRsZLXvDqPjfuuhN3cZwKcFiavuk97ELtgK3AUuMLtDByV",
  "key7": "2q3EnuzjbjGsLBrxCnFboJu9Ykhm4iNrsqoxmGLLhihci4o2aTDszqwzAAhJdiB4PnDf25tnquNw2DEY8xkSprAh",
  "key8": "3smexrfQpS2baQU8w9RDHjgWLTcjv8F5Twt3XDdJiGS5w9UdHb3tZd556iB37Sacdw3WdKApSPRu2daWVPUbhsLV",
  "key9": "2K5VxH1VLs8Y4hS2oYD9F79hxM3dGhS6vRwTr3nRRpFNQWeUfHkjutMSzG7LKy68ot5mmYUkScnhRtCzffrmfJWw",
  "key10": "5TNyog1gZMHdkZa4nvmV3FWH2Xjr53beM7EJ77zaUXWrpHYmBjmTfWzWCHBkZJ9dzEXEKJcpWZQFW49P5Q7fzEiH",
  "key11": "4GcDbUVcX4RhzKRzX83juULFCNaSffSybGUY2BHmV5KMX8dsAX5CDAePRhW68McGVQqqbxSzKRbYCRp1e9TfGvKB",
  "key12": "MXGwJ6vXmuP6SEYjqEofWv2JCcpkqSKWninX3miVSERnteghofQVmzqmqJ2HDgPAQvR6aE9CrUNRVxf73DTNqBe",
  "key13": "67mnfpygsaoJ8piZaghE1X8U9XGzDkRrewgE6PTq3JWw72Bt2q6fcYyJfJ9n92fCAcnFbNNP2CuJD8jRfe4rr6Wg",
  "key14": "4VVdcFt5ui6KyfwHwaop7JXxQN4KLM977SH6gZmMeDvw9qfkjJCsNXM4zMAEbFmbEoak1pBHJ2BpYzLqSjpC6pbZ",
  "key15": "2wcwv8jat61bdcASUb2NeA7qdTfFFj52a48JD7nRi4kzNPMKPz9t7nUSsnnxp5GDbj9BozGCZuH7AuKQFDULnUu9",
  "key16": "FTJ3BKrbKVJEdKfFYr4ETRtVZXeLsADhFmYJxgQKN1jQm6LRSK1iuEVH6Eym91WJkD7G6RXRRKy5WtXKQmx6CW1",
  "key17": "3PYCTDfhgTNU36kK7vmW3PxgFidweZriLM8eCWsxre5gKTKxcVYWtLSE71d1LShoLGJi2RZYzS1ytCt5pZf2k5mW",
  "key18": "5jzVufJJuHFfNkm5GpME7hidfDNFN1ozXAzYGkCwmeH3HeCxbdL9NMEnTxDrkNym4ptyvhm3pCg4e7fciHCGJvrW",
  "key19": "3YomdLWUnVjaV5xcJtLEj2R2SZjJ1XwPhudKsSHTguZbVX5rK7PCrW27quTV3dcVezYa7SVpgt1wS18c6Lja2Rj8",
  "key20": "4HBSwhXMv4i2rR8C6znrVRDUiFnwC9uLUEHQFUZVWpnZ5NWenBYD9tSdM4Ad3Xq8fqWPfxD4GzweKmNVJijbJxVD",
  "key21": "mSVJWR3EBTcAbrLqSKJKCDoUAZ33McMjrZGEA7TWdFZvEYJomaTn5Z4Kzq51eVWe2zZ2rYxTebFcEqjzJYPcucm",
  "key22": "2UoepKDYKih1bRHMgWRCUtsTxn1KA12DuphnKb3dvHgNW3jzS1EDvNrKiLqJtYgHWufq1boij84Dm6fvE3HBtNsn",
  "key23": "2AquN4E3i5vzVHgfpbU8TZcJucRgdJ8PGirU25n17XLuRnNbmoV2CD7GvqtPd5VqCmpTYXswuFfwJCwDMdNUKHfU",
  "key24": "YVFY4inXqYkKdEPsEz9aKBVNGySeGH2YkZxMyRpHu555pXYrFQY46nSYjDeLX9CYeDmdUDdMPV4ScHzuHtDS7Az",
  "key25": "62cvfaCuH25WSzyWxPyQdtQtdg1oPhyP6V1RxHJa6Qx5QobeofotmRWHHWKHiYbPUW6BvVFjNNQgYNemF8VPZqbi",
  "key26": "t95Kqi3mX8UGspLzcoCNFXirfqWdntgf1DEhYWK5NS55NT6pmyuQwKiDHdkaMPaYfEsYMM6rcabtyBajw3YarPf",
  "key27": "7mbbxVyYk9sbvJoWVeNc8ddLjdnzu6vk2iPTPN7h3XX4EqMNTc7E7j9neXB2FSipMj3ybwS8FxhfW2bZ8crjX4c",
  "key28": "YSUPSkGHTxQa1s8XvdpNxNz18EeaYwQWEusDcAaTgeXMGpM42oX9ueFVfNpFNSWrMtm6NSTcNikcvA2cq2fNhiS",
  "key29": "jNymBPMW8nyirvLUMY8i2GH8G8W5ZVEbsePY3A1kPYBhMLzh6W4bpgt4seuqrc8qEdGdWELkT8yZs9gLVgxzAK7",
  "key30": "41BteJ4wP9DFZozBx9qjE2vEaHURw5kyDktMiA2hMxCYQkpCm6tp1JLs6BGMQ3hFeMz87fPsPx6WqXBc5VQg1VNE",
  "key31": "3iWuwfKfLgLuP1qUc1E5dfUUTKfisvgabh9ZNAcJfG3rpPqzyffgRSHVcTW5twQprb7zZtvGuqTfp4nmxZWXAoZ6",
  "key32": "64PFo3xdwicBF8xUxKZX6bLgT4k2Y6nT8xw9DJJyRmQebvAxbkmG15WMrmWtH3Pu7iQw4nQrYPv5RAYFxt2vTGx",
  "key33": "QBhtc3ENQqY1YvigfYhwSt5mLP5G66JC4W5khrPGdrGuDAQ6jrNiZPGMEmeXmdXTbfHXei83sYxnJEXcfaQyUck",
  "key34": "3AbpgxCkrXrxTqJqouTfzKiyicghZ8WepmCXFrczNtvchRD5Vdr3jtA1ABceqKhpNsmwLxpvdAakruLZezQFXggj"
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
