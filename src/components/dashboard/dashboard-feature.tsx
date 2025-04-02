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
    "7eoezMnS82qsDn3sqDdTG3xYuYXAhvmRukYbTN53GMaMw8fkq6G6jCY8PbteifHAsiFHwXjU1CrHe8BDgJfoHHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQH1TZGGLyn5k3DUYpsbnF1LLPB9huRuUr7JvVkKadkoH6mKSC3sKCsX7ADBXs67udqPfPAq3xTZAYHnACy979K",
  "key1": "4sJJYW5mjV3uu1zntijQYw1dtJ34a1vo7L3H1Bh3yeK25STgtTcr77QDfBNLAPBnZuTZpBmczLPj3zWXnr5fDt6E",
  "key2": "3LzSitoFyGKz56dXDAvT8fF1aiQ9XHsBKZhmJMywMWZRaMP2FxhTyTEnQiBbpFVyNSp7eRQiUN99Hg8zuNZ27Xf",
  "key3": "35EyEX6n9oxUHacNgbbf4a5DWSi62ENukRr1671xtib1anXefbEUcrB3JZByyhYhf4WWF1PthwKm6Nhjf5ZyQJi3",
  "key4": "5QGzguCV7iQAxDeghdKyRmQQqBVSCPGz9YrYGXEcgUJmux9jebYj69pNxjfxhLhYQuBXvAfe2G7V8VHsENDJFcnx",
  "key5": "2R26zDGZpwUQ5dY5j9EXmKr6v2xkosirUeswr83DpvdG2cgpqEgKHjrwXKjHrZyUFd2jYBSx5Vqgub2vsRzzXgsv",
  "key6": "5fjuoEsFKTwv5W6dMbVGZ4KsnhYz7tS7QWCy78Lzfknr9VzTVtwmZCEaHUoxAySiebeH1g9u4T3guT7CdGvAqm7b",
  "key7": "2pbmtPZXZ93ZyWamCYJsJodJWC8H7qhE1tWFDZ2BZ8cDYA7zMbuwX4NSbzWZRUN4NxfdjDXtRFXSesXi36SA1jca",
  "key8": "5393rsHEkX5RFVM1XKHDWU5hXqSjGztwDfQRiBBvfKeZjC1f78DpEZmjMkpduuXJ7924Rezd9p4Jc1VjpgDDG3Jj",
  "key9": "5KuoMojbYuczvg6RFQf36T4QqEtWeDYtZ28rYr1C7N4mRsGjYJAC9WxouxkKqM9No5dGk6EW1pS1Uwe5tDjUJ8Cc",
  "key10": "UjcAUZSqQpJSYwjURMR7JQSnfKEXxm5cd8ZnYcb82SjpD4a9eiERCW94RxnwSxgwc1oJ7XeYovDYj191M2Cq9mM",
  "key11": "5mRB4Y3RoRcKFowff2RD8trpnbG1wVfhJoi3LE45iSTf8WBeW6HhZ4GX7CnyUAspQjx8SLUg1sN73E4zY6wyEAqX",
  "key12": "3SqVbmovNAwdC8sh8QE8h77uUWkonAyKUpWb7qoYsU8XZL2BC8SAYNuS9GwrApm7SyCwT3diS9aTtjjHt8PMbsGE",
  "key13": "3gpCvtNkzyiAXunW187YJYzATn1Ph5Dw6B7H6nMuV9iiZjH4Zf37YrxtWnhpVmRUuR33t73fWpyNym2hLCgfGZxU",
  "key14": "2ytPqMZ9rhaKKy641Eee7hFo37pjg7zwesoffMvrb8zKp6deSEFQGay1cLXq3gcATPu1BqsqFNUNWYFbnaKcR6MJ",
  "key15": "22QoyhCeGt4EVFqzHBG81yHzCy17SsxoCFcbf67VgGjLw6kiCTs6fFoTbmV5ETSUbY8KcpwySGuARPPmZyhuM12n",
  "key16": "mKuc2tmXKbgRM5iizo9aqH3M5hJEnEHeYcv6RrKVwZHeBdcppipHFWZJR9Wx8QmMMAiCtXvAtFym23tjFPyzJXj",
  "key17": "2YCt9jfWivoju6owmwjyyHMrHcYHHdeh4tDV1pM6BXD9tYxyS9u94fuMfXXg5mijKTLrAxDWgqFX5XBEgaR6M8vR",
  "key18": "2d1xr72gEmHxNkCpvP2kijS7uaRgZagvcfYrKViEwDjzysmEJgFMWy2HX2Z4383PrS1HyHTniVqyG2AL74akPFh9",
  "key19": "3bZjUXcuPiuWxnKgH2HTQQMuF4J7dpo6jGmJ1Ufa3zEckJDkaMMitHB3jwbBDF4c7DVSWDdH67hTcEJK1byBBte3",
  "key20": "44yAQyqNaYSxBHDgU7MUdsKB7mWzttRDWBUbA2pghfdFSbAxKTFQETh1t6jzwqxhfq1K34zjwGNTi97M4W1ssWdU",
  "key21": "49N1Py4GbJWZ7xRDV1PZxsV5MBSi5xJ7Jw7h7ztEj9Wds5N9jcjvAg5oJ69ioyKsKvBj9rxGrnYAVC6shJLfEQYP",
  "key22": "2zpGzzfGCZXjxfLHhX6svKYELCpi2oFVk7H541giQLR2W7kaeJvNsQSTJxVU2raVE9jRCKF8sApMmbMG5rtGQqR2",
  "key23": "EL1RYV9XwJFgYKoGHcfSWt3FdJTriZv3UsCWzwGzu78YVvJj4zX7r5fxC6VwHAB5W5uvuVZEzh9iz9Zy9NdPPDY",
  "key24": "5ZXCB4sn7jeU2NELvKpCMnyX9vKp169vboa59rkTL2CQypzm8DP2fX4YRGbbXRgFP6Qsx47S9FzgKVCkLyyjs8u4",
  "key25": "Sd22Fzit5v6bVfUk1doKo4MT3dWqKuci1nvzTgFc6EJc75pRydhVAeaGBU3SrTDfaQfeAGomrGxW9VUqqEJdVCZ",
  "key26": "3FTv8oacz9W9iwcCijFgrkViU1mPQXkbA4i3PTLuin7CV8X9uWJUjQ8QrGgGxHUz9mAq6q5G5JgJg96QMr6HSWHw",
  "key27": "gYaAoceGj9UGkcbZF5xGsmtvMLW8AZpenKzvLkzbrPPSZrtCDtuKxz8zQb58jhPoymKgrSsNtYv4oBb2CntkThz",
  "key28": "VhNWXbyDZS4ssnqHqDy8PfHAk73cLe4CwEC5A1jrozd7ZT6v7Bj3f2wkpA2BEc3g1QxZsyZQ3jorKsahDd6Wzwv",
  "key29": "yMWX8eH1eZDQS67nTmXcdceRwqhUoQMxnStx7niLRdcVwMjXyZ5i9riPwPikJr9Ggy3ng7jYP4616k4w5QLs48f",
  "key30": "4bm2JJYgcViULbpg7vzhG9Z1bGvAJsqcMe8hVN6L6nmKPTo2ByxkqsBRAwesSsJNxQ4b8Nd1N86uduQYU64RYqJT",
  "key31": "2UTWiodRdkYqsD39Queu6y7wYKVXqMk8LCrzdKvfMAbTnKFYHNGCpsZaPnwJoFvDfRw3YfzRNv8XFHfH86ZpSfsX"
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
