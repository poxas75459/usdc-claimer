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
    "4dQxL9EJP5q7EuF7ZgiRoAx5nNFuf8dh5gJSDUHqNu3FF8GnbpLkeq9oj9GAx55NiRrpPuFtW5L4MttXf4VucfYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mrUbooZtXPvYS8ax3yUGLCHU8vMfZVt62NCg9kmmUh9ZRK7ed6errHvmGfJW2DV2ZHfd9sxSPy8Uh2RQEgvoJhs",
  "key1": "4WpwZsaCbipDXCrzJfHaVkUGA2xZZSLqTAdKJY3jDCQQVUyDK3kSwWt9v5CEPkJXUVT52h9sUJgwyaQb96vzhviu",
  "key2": "4utghzGnE2MY7PPfbPMZDdjuKu6gaXFgLrGdkzNBhdR5tg76sqSiEBnLErCjScHDkSuV1VYzhKMHVg2MUmK7JC2E",
  "key3": "4pyZZ3mz4K1hgr94AskvvbQa8P1hsihWiyTJAWKTWEuixaq8G5QhAyMatnBCEYrkgD8yefKprKmv3Z2hpap2whns",
  "key4": "66ZJDswbVQRNGuPoa2enihGs3DWvswGFkSrTPsPka3qaF13ngf1X2iP7WBQUbxwg7qUzqBSiu9Np4AasEe7vhiMu",
  "key5": "3pCWFcfcbAPy9fnSeYj2T3NTRo3DYAjhUAfFgf4pHV7WpgueWUs7hv6uCqZRHdwoavVko2HQ72RDYVtaoeoszfMj",
  "key6": "4JYGMjHi2EhbRb4VEHbytRketH2yXaA7yJJKC58ty4ngY4gSQfsAXC53KJn1jXm7miUmDqpGC6BPtgzBA43u2udJ",
  "key7": "gjdEFP6BZxuwy74bE2bGNw9bLsz4UsjQFwCNmNdgYguaGDREH79uN8MNYkRunV37sKxaiRHnrF1SDkH128g132o",
  "key8": "3cWA6SHwvh7jL77rYMZ9jy1r8hbo1punShsvoeUYaSqRGmg9DnCWJ6dHi47v8sK9eQwoKi31y65j6Za6mnwH3od5",
  "key9": "Qm1BDuQKu4da78uCZeGvxzaricQxTJ9jRDkeCypjn5kj8sKRtoJR3YPrrenpJTC6P2crsHuECsaRj6jraZQ1R3V",
  "key10": "3ccb3SQivCJJbdL6FCnJMuqG7ANHsViKV8mVUXGctCqtN7DSEUQ7arsaz1uGWSCbbuHNkgB8EovPE4Dy7TvveUnf",
  "key11": "4SscKKM9PBBp4rjcPdtWPWCuUHSqos3tf3ox9dkHNUii94kPJpvnwSWrAxHx8cRQzTvFZgsWGZiMxVbCs1rrvo4w",
  "key12": "2eHxoCx3hDgwuPTTRBjZEjqw8xChUqeDZJAfN1zZw7D6YF6jhBCJg3G9TvsdCHKcNgHxd5AtJfzqkpFshqVYmMG2",
  "key13": "5YPqCRtNwNYsngTHP6EqFUkq3QGo36oCvsPHVvSjNaueXJaZ2LmeJtvj218yCBGWdMpouK5Zfihy6HhqmKm3Z1fw",
  "key14": "4MjKkPzM7CddQsT8ztsjT3YBQk3t3wdqPCXqm6k8JmT7KoPKhrK5SNwRxyE4TpKyjhwAdcgBh6i9aZqWiAwvLqNi",
  "key15": "4bjT5D5xtAV3wBgrHZRD1Uoc4ZLmv4uKbYbNbUzebz9YBMc41tLNCnmxfAPUvi5wM2gefmxFgYxeSpb9QL8EvMHZ",
  "key16": "StvdHDdHVzetw4oM3Yt8JeFmDb9gxWwt5CpFBFLJdtFyUPTdMHkQbXR5uTo2SUPQt39gbMR5VKztaXx6u6fwv3K",
  "key17": "2schqSLwzwutJ5wfNGSKR3QWZ8qXsR4tsHT4PKk4toX9rTBcBqdqjDQySFVggmHneVrmX1rg2UFfBfB6UsxhbvwW",
  "key18": "4LTiF1L3QiXnRcFzmrhqCHCGzwrtgiK7yA7FfTYgH5jWUCxx7myd3WyqLWPLmEmfa33fumq962tUzZsBQUMd9Bam",
  "key19": "4jSrhhmmhzHAyB34aNHtRBeFLh4GQ1vTSjSnPZc4SLC4HrhpDmS3W5pcHjPK64K3BdGogvMQiQ78Cuh2kBGfsPkH",
  "key20": "tPRzFiMGw1mXprhcmPfmRHANPhwows59jYTL9vqtR3FxFRAcmzuqPcH56zVqKDoeohFE1aZsSGqTPG8C2i1VmtT",
  "key21": "36CjYiMNm3Kup3ZT7j9cnR99LTssXK7SzZbwsjnGByHAwdJgvRsPpJ8rdMh9dpHpJ9J9oCUeto4UKduGa4ZWPeYe",
  "key22": "3cW9ejLMQaLLV2w8ViDFvyP1DdfHy9ytWDeWzh9Z9e8AwEnVqjX1cQxGH8iT4q6eJqJkycL7BFoUixUUQU5P5qTf",
  "key23": "24aHvqiCv9hh1h2vxmYo6gyxHQEqqrUpGHqsQWXLhZZSQ6iSnY1Sb93k16C1Htv8UGWwBZnJmkN6wqYDknA6DVvH",
  "key24": "3CufRsMF9fo56pddF2DB7iNH9TQXVMcyKvRxdPuWG86btSa6Z2K9iHr2F3e7xwBWcRTNDv24Bigf62xNxtSX7Tta"
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
