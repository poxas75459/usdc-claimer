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
    "4w36nLKuGxNRN8BBTzF1SYXdRpstW9cicCTJ7mwr3PY4W9ZPo74uSDaQHuaKMkMdVXyKmx8gVvfw7a82jFHpbb8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEeudxYXtC96BBGrjKreHbJM4BP5tvFpmYC3JeJzkwu123Y4D56Tm8fmsRWt4gAVNc79XW5kKqgK8C6zJkQe2oh",
  "key1": "3UrW7Kr1Dwq95m5Cm5oX9arqhzvB2U8yeWx8rbC63MhMqwNX3BVK8DFtg5g9kgtvq1NMb9FEFqPLRzMvjzN6Jfkv",
  "key2": "5J8gVqnuQL8SK4FcXN3VcLBt984izQEqsidMjSRehdXLg6nJ6nLPQc3RxmYJ6sbD46A7VE58LjEEmM8M8XgRQmeP",
  "key3": "3ymW3wdY4miihBiLM7nAgzwcQFkn5s8mzYUaddJCCp4ZjFRiHwFLtZTr34CVNFoZduvRbACAbVrKLRSbGhs5JRjT",
  "key4": "421bVqmdc2JWJTJ4zNMrnQvzAYp9HySnW4BCKuMjNEX3VcHiaBHRMMiNbtaXU8mMiH9tKLLNGEkM5tMfXXemFScU",
  "key5": "2VFoar6FVkByDodLdb3BaC12Ze1abQ1cPzuvwfnmkeysnv9oLiRmSpTAkCzNMmpc4AXnbGsr4GBMEoNzWpr4uAQr",
  "key6": "2jNh4bKbZ2k5AZMJMLtLt5D8aNyVCuLtZmLWDQdM5XPrc7RkXKtNtc8jM82cPP3FwjPR5WneW4VmUGyqiThCJPKV",
  "key7": "66UoEVW6f9XWkUidZMuBMUBLCBjuufaS1kdnCrzj6Mo7s9hZobgVSeQoVvwhUDPjAnWZ4Bq3G8QREA891DrzPn6i",
  "key8": "VKQnYHo9eV5V4WPjHTT91JGSJHZe6n4FRRDgAtKbovMALK3UCcqxycdxLLCSYNC693hCcD7GGaknM66WckhQJoi",
  "key9": "5Vzzrse7kTBQWNvjaLjPL3bqBPDN9fH8ppmRqamqmAE9RnXuTk7oj28pEgCUW5VsnTpwsrenb2mWEmqSJheG9rXL",
  "key10": "61Qt4NgVH3JKSCM8inYVjV5VVAJ5Axe2UmQHq3DVrqNgaNxWKGTC62mZmwkQTXWZV8dXEb5f1UJ28w54LjEhMYdt",
  "key11": "3qV6CeVLKR8KF4EC2njHcNgquFbivjoRQzNqTAtvonJwyZzEtkkF3aQGu9mQe9zXvoYiQH88xmsrPQHv9Lgm5Ypd",
  "key12": "2oFMs2XMKp6rfQy1Mk3XRtucnStCh5AFgmDDEkbkvEKTdgEhqTcieZqkuXT73ZhM62SKP6f7FepJKBB3o8cFt5AZ",
  "key13": "3qyUVYwRiEST3UBw5iUbivbj4NDv8wMGXsSbgaCe5p2US4NntRzRKeCFKmJcTevPg43GizTUMNpPpe2hGpC4Mw1N",
  "key14": "31iAC9UvFR8jMUj6v5xp8NaeGVd1Xs2uPS3wEwZxPxAVkJngu3eyrotvNA14eh7MvBwxtbXmRyJeW6PfhGXqoj8k",
  "key15": "2hxAWm8Md4qEVAFK7ejT6ZeGearcNVwByUzwnEmRsi2pK5Dj6Eefa8i8Hqpr2N1f7JqcfNLxcy2jALQ4toookUaa",
  "key16": "4HVzwNnTjpb9ghC7uGUsyuyh354FSfGNV2xmjAcWkAWcRgwiWwGJcCUhFFPMtfGHNHsfEiTvdJMimepRZ86Y9Gru",
  "key17": "65u9FzXh1p39mo8ia45npX9tYYsh2BPEgJheuyt5cAHNPSxz94KN1nf7oRp1iirpiQeGHbhTxQmVDHrsLxyzMh4K",
  "key18": "EFeSmnirf31Z1qTVUe21HkGzJr4uvizfkApZ5tyGNJfNqHhRnGoDjk28QDQ4sjEicjBt5mf9rPFvE71yCc31yRm",
  "key19": "2fpMqnL2incb6F1k6UQUJGy6LarFW4gB2Cjh8tXc2jpQGfCB9WLsmUrbUHJ1RcX7Co1hiHqZxsugrz2tA7LT52Jw",
  "key20": "5Z54H7ZLkqEW9Gqi1dqikREjpuH9Cu3Sv3mcectGSHuwPSBq46An5WuSsMsFeHHjsESYQL1vnfyZGbLKEYoN5Bu5",
  "key21": "5Z7Wkk5qfzgAAqSpBx3RqKjXpFttLt5EGfdWER2fSNGDXYM4h1p38J5SMJ7uapbVeXoYhRe4zVXCTHWPRTGW5kSK",
  "key22": "5N6ry1zMWBVceZKbY5hP9sSjMcSWAwkdbK8Jp4FXqUDsftonZAiSZdmQZWxfJ4snofRVyejgUK8kJoLawvzpuHVc",
  "key23": "4Ms9P3HsGXjddneyxJcme3ZDhHjVdVhq6RZMcCU7XLKoyEP3aoU2v28KkLbvaR8yQ2PR6oeweMEuZk1w8yQcR4Pa",
  "key24": "3viUkWa3zUiRtx9DRSpvo47Gasv5jsTdBxQ5eayvnFEyfeKvkEn7NJtLeBMuTuNw6JCnsx1SAQUvJWRbswJmmwzM",
  "key25": "2TWJkWNp4XYwCmWvGstNvvFvKVuWabaxv1SMf5cedNPQezW6vBwn1gvgABYTPkAJX1N4p2pbM8K6vQRKboEdcUF4"
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
