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
    "2njqX4ggBTstiWvPWWBK1oY9Z9Y3zPvkMcsYo5uz4QWD4KToUtt8MKCxc8nHGkda4w7Dr1dA9EHTfRFPpZEeuG4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dib2iVvnjgxXYVr8p6ZWDzPeRwxKDYu8SHENdtumgKsZKto99mvzm14BPdodtxSD8AFJmoqwgQWjwUTVRRf5wv7",
  "key1": "4YeFxeD652rvvtowPe8Ux6YQutVNKrKTkzXw6ZmnmFJovezsFpjvcjaNVG7eP6DA6pqQiFKQbFBiSGUuiAMkYFbQ",
  "key2": "64uoPTkyghHFTLMz6MZB7WNgLU918vfLfM1ngzu9oyp1ZV5G5ZcuNAyooPtFgH8gQ9ccFBP5vDH1bDPzEfXFf1zS",
  "key3": "2kiLPqA9PfWCZnkYCERnctAfS8LGQ1v9ctR4QQG73W4Sbzwp5cuNUderrwFHmQNY2YmWpLv9ETcDQYaQV56BQnq3",
  "key4": "5hDNZqcw2ZibBaehuKqQHbJf1NdFBNcanQqxGfZzRfAanbP6TxLaWXzURQwS4itwgHUsJMgkoSG6WcYRgnPq7EKD",
  "key5": "5ujQHnRfPnyaWXEH4YC1amr71rCxHnAE6zbLHcCoaV3BzFH9hfzgvgvGZEkNoSfptKqZjMRKbfT7B22RTNCiQu32",
  "key6": "mF2Vx6t22gUKeUYk7Kub1CLD7xip6r832GyaYmx9K2qmZvxvxHhGXy8DvQcLRFL2PKfRGNA2em1aXsgv5afi8MR",
  "key7": "4GxgcQTr6XbUsbXZ3b7FdjikJFg6KuGNYxEMtzFpN4Ay1XQK9tLQpgWw9uDPEDLtNz3oRm9fxoX4gdJkbSD3zp5z",
  "key8": "58Dy1hosvZaBXZcYPEpLKhgvvN59SRHWGBEgxHyZkPo6CUD9774VzjRgSuVyE126FhCmBjoVYSLTYSWcTRGKN7cS",
  "key9": "4A5D4umFUD5eTpmDKAcBcbunQb4Fp3q6aaKgyjfTms43BQjctMMZkJyj33yaA85y4Qr6k5xaADcWEdDKn6dQ319W",
  "key10": "39ZD6FNbUMuYV6h41ndfEUaATMYkFaYbURAGefZqjUCw261nVSgsSzU5BjbE1mjHyjafr8nD5aZ6zzwqZL84B6ED",
  "key11": "5Baf4c5rDjPPi3NRzMN1pWcgNCgPJchchvgHmwmCpUc5EUvZGZTQPz4gKkywvvFjoZ4j7fQhSC7geAqJkKesHvPP",
  "key12": "3de8pYVzkBgMVKQS2YJ4tYjS2q1GZpN6euhzkCnjz8v1kZTq6KQGWSGikvuRgnV9TKPsRCrfeNvAuK48UpmGH4z8",
  "key13": "42dyjEX4ke7zZQT3xmrHpUfDGmVj5TGuKG7WsERgr6UayxxLkFFsonGmhJeA1F9g7DfFFePpJKpXfCy8pwY44v2H",
  "key14": "8oSm4VBZiNLgiWeh1b73dbfurWxtnTWQZNNk9ESQwsBpJKcQinHTCUKaFR9QuikdpzmBMkDkKanfRf2MTkrpjYL",
  "key15": "5Pi7NPM5VQmmuzDrV5kR9tgYwcusVt6p2CXo9daJoFovN5MZGEJ3NE4ja9LvmW9A9UREsfUCvFEqRESovZe2vVYT",
  "key16": "4YQQreXugWXcpcTPhy9yGUmMt4UuiFdZ5DuLc7ThzQgFQoB8XudN82PJ5DgqVqmVJbVJHG33565AKb21tXiqnYHG",
  "key17": "62JmD2wpsBrtmDNrPiB7k2YoDopG1PkMdPB4xLNrsDWLCWKdngRM5rZiJTM4JZNbuyUQKNgjQX451MKWZW6Xoyp",
  "key18": "2Ukmxk6m1nUsHkYBTYWsdNkJZ8Jt1oQFRs8diSaR3qxqcMkXjcruQZwpYc1APgVgdkz1KSVyjUaTNBB5MjrA5wDP",
  "key19": "2tNxNGsCxy3CA1XSf5Q1UG8iGXRtWixNRr3mN6MebkkKkyJNiKLGDAcLG3NsZkNtCPgyLZ7s5meXfknYArU8vHMb",
  "key20": "2ur1nMhpDStdGxVowAqHCgmVrZUqeA1Szigpw1dsMokjtovQptspCnqzHtQfGoq8nnDdoamFPjm15jBKGgZcbSmw",
  "key21": "5J1HykRFowGNstjbL8nEeudcNES7C3vLSzTNQZ1GhQaNTk7EBHAduXnykHBF6tDLA5vJJQ6hDwkwG9P9oRvjaZAG",
  "key22": "65XA4U68mdTyFsxqt5F5UPr6ednjCGnxQnc64k9CV8kxYd3hg32ru8kPGYo1xqPkzCUeiqi1iP4bMBkhHx8k9jkH",
  "key23": "qeh1p5posQ2AQZSh4r3SSLFGwRvbJDiWiWmUSWvc7dEE6R9Yqzw3rbeQqYF8CRUzhRTb18THe6ChueBPuVHWwsi",
  "key24": "4R6EMAfsR4GmyaTkQ6hGmG8AcrYNHuU8ina316cbWKsqKxHbRjpiEXJvaRmveAVfp4rW1ifEGZk6BgpJKxmiLfPY",
  "key25": "4fCBKNxKwfiVLT1PhFP1UD8JHPLSUbCbJ6aqYENaaVFKLYiK7XMspLFWZt5mwUtkiYXmVu5Y9JaMRdBjjEQhDgh3",
  "key26": "51XSRgb5Zcc3x2Msu2qKVMRtTsAYZS4GSDHtCA3u5XecM6dWnGGGRned2mgS7fd2cyQ7JdE7JKnWGtAH4Vozj3qL",
  "key27": "5qJTUAQ9fpLY9HpvFGorZTQieN6XQdw2qP7VHzNQyUvncZkq3JHDUVr392WL8FTUDy4ij8e8ccYECVKKFiNW4Bku"
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
