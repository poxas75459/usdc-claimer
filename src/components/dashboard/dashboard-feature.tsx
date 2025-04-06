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
    "4NEFj2TbrC1soVUuonH69DQRuJNXmTJYw2kBUWQec8XVGLnhkuWo9SQDpFe9qWEUnk8MfDjxDWJDjPbD5BNSdasz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQGCFougYpXExzLdWoPWLS3vW18NdY2xoMMcPKw4iS3BHWdoL4Xz7VUfEHSiZGMHeKzdMbfAUAHqy8qD31GULfS",
  "key1": "EH3eZ1NFhVFm5Yf22qfhZTACEUoC2wrQ3hqRwHXcDTj1dbLgXtYhJBJCmdJ99UKnZfoRtMcuDgVufqKu8D6xWza",
  "key2": "25g7aAky8kkFNUZN4vX3Rxtxk9ZmHdeKWUeiek9uhh6amX6CLUvbJqRXM93pVZ8GUTGHKPS2pfgDpee5j2kVRAp9",
  "key3": "28wZPDHpbcVQ1eafMShYufKnUwt3hHgK6s6ArtVJsdBuv37C61M5ibp9HcHjzbPrTwJW99Rgr5ZkM35YPsH2YDrE",
  "key4": "okV2GLaLyPFe1rWH4hmqcSzzsA3gqXLEGV5mUQmcJt3g3oU3wEDrJ16A4eZsvbt8sAZmV6s3Vwn5ap5TffRHNW5",
  "key5": "3Dz2gNFyTavGwpiErpazDyQd4SHxgYg6oZxmKTsBNUmua8vn5qhPtHx1gtadbVtbnRPy9fmwrxh7p6jcfPTNDYB9",
  "key6": "zkLktLvFaLz5fxSbSUkS2VxFGv4MfRRnKpJEqdL3xtkhJyF1BJfp67zxi1Jzna1QnN7H2w55SRrpBbo7Gf74bUu",
  "key7": "3HDe54tEnVHLE9Z6kaGEmk57UYeK2AAjPm7MdWpfHENHCtxjdE51bqNW35BR9DaQtc5wmZZ2DKShgd1Uysk2ChMb",
  "key8": "4qKiTpQPvDXrhHAkpvdo8WxGa1eN6fqadv9ke24dwdrZ5GYtzcTViSU29PEyD7MuW3wVrneLGCUPkaAuzRY2hEzC",
  "key9": "rxihgK4iw32MLebUM9CVrn5CsqA5814t3zezrud7Rn7ruqx1GpkZFBB2PQkh82eVLeoFndHYTr4vvVEw9fnGsKr",
  "key10": "4h1Q3G3m3SfgJFbEVtRQMx5wnycDckKqWb1vajH5jptFcqRFzEsBfvKSuUvksmm8oNqjtsyTQj3cUxxvDnBgFBUE",
  "key11": "4xcQTzxnAUHC8WGuRWfu9nLMszLBbjEh3f5FwM2ZPoFzedgRpqLDjC4hsRXFoBooADq5xNSPihh65m5F4VGDUZw6",
  "key12": "2VnmnpJQEMYB1W9F1ckwBAke8tYsoXNstdoc2DGYDEPWthpQmBu8rufpSrHdjibJdukrQimqai6vUcWTcePAa9i7",
  "key13": "4SW7qG92PWgJ4AcA63vPNs1JVopVumxBQudFu6YvcaUAbawmhQyNyg2hRBa2umLZtV4mu35Fz62KQr4T6aWYUWTh",
  "key14": "2wUsYLQRQFKZzN2xPJMiHXzUK8a4zcwPg4ianM1fm3axXeiAsqmVgXwpdpfcjnYXWmoC6d6GHtmfuE9KofP4CpB6",
  "key15": "5euuAmd5HkjLpg63eup9Ca7VePdXQthgoaG6Wgw6wHiR1iLb1tBgoDQzcpoaU2MCHJHzKVHKorWSwbF461568zJz",
  "key16": "34pm34ijqJ8pJoBhQEMxkTty8uHXhPHabAYiFFNPWfC717XPcFSofaHEhg2MRVGUTZeu6L4LSLeuoWv55annUqrZ",
  "key17": "4jfXD1Sn4heF1Pm9T7nUQoGPZFi2xAvoRZdLxv5dWhmQ9ZwyBfDG1GHscKWFGJLuQ7scvajQgUEKfhZFkhn5RS5J",
  "key18": "4kGsip4UdyVxytBinQbAPX1Vo7wJni82Bn4GqviQN4jRovE2MBpLPQ31eKdHy8Gk1DTuHFenybDLLFwEpg8CStdU",
  "key19": "5xyJBkZQZcW1o5d71k12oMZ8cgFc3G8X7zE1sjU1bqirXQn71cHZwj9tf2iKrjBvgmHYetrnqoHj414SZZCQX7ZX",
  "key20": "5oL6oQsRUCmRy56YqtnTtEJLz9UwJUfCRew7H9Rs5B1grGtSjeJoeNxELDMBgw1toqSX6RmHJvngm9WVGFTSKRhU",
  "key21": "5wRNvHrYAERUsjVbEKUz9RHuxdfNDEqip7ZHKqTWh7oxTv95yG6tw3AABwJ2q9rttd7o8J7QE4sAYjifqMyVYG59",
  "key22": "645ZvguuYn69ZRxq2QeNg9AXKqoxXMz84aSaQLdS1DovhtCPvro6Ebn2JQ68pvvu536tzjFaGESQN3LE3SJMVfTu",
  "key23": "5n2ULAtwzVARvd6VmMUj7rLeX2wjFSjuJggwrMtgvKwTNNQkZ9758qBqtuSAQE7cHAEcKgjj6uY2ZwXofaQdKD5V",
  "key24": "4QivrC8iaQCDwnDm3yiAGZfZJ97uXzWCfSGUD4ZZ5jp3oihbtkMBXKNsvM5vQDwpFACtGDGsa5wqqgH45CQDucvf",
  "key25": "4gVfLnzTDvk5dgEcwhYZcuz5LAkjBbhDoxT3vAMXZBAoQn2jwTrLtF4eRwD5YU2iFTbGhzmtLBVTuwGJxj4mUL82",
  "key26": "VycHVsHWk7kmCffAic7XezSYcBNfBkzEjWDbGi6zT1RjoUQe1uYbK11A42FJrRMHeumbgcY9gjBgZ2nZTq26pgn",
  "key27": "3QKznZtyX4ESzJzgWeAzweza94rqiyyNKvdM6fGZrJQp93kjuZeYetrPUGsVz7KLVvJvVxQpCZLLhN4hkS5hYQ1o",
  "key28": "2KVVdgnFptitpPtGRzQ5sRcpqQWz5yUhvd8n1EqNZHqVZpm8LMVnwQ3gG95si3jS3a3NgpvexEyHi46oor8o2tvV",
  "key29": "312rDGshcQfV4dFS2wVvczAFDBwZ5vYarQxnSmC7h1wkcVEPBEayq6HVDYHfNb9FmRMnBLMcwrtZeMMCQP6bAuDh",
  "key30": "62yEBapLFtMoo8bZtg5WFs3kk7nsSnmWoQVPLFj9bb8WkFgJUnGVQoLpF9NwyJ2YmouPGD3dSnRRgpVxzLP1U3pA",
  "key31": "41Z5hYtVoBd5Nf1WfB8gBgYVZNUwbTypq8KqyXZrjpqVQQwQyYUL83ccRfrjLpUNenXJgA6V8u7RB7opR63kSip",
  "key32": "4rhgftd3udq7hF2Ui1FB7qNAnLnBQKiycsa22XFuPKcUDzHgz224EchHviwhLxGeWvCWf893afDNY7ooM7giZbpN",
  "key33": "3eE3jE6GdskgwLpGEtntXiu7dhYc79d73bfDdomrA7zFjB3uxxaUuZPkyBb3FM8zQWYjub9oXM7Qdn6NS3kZRCUk",
  "key34": "2tc6wLAv16oj4g9zAhgGtkmxpjPLj22dvGaz5r66A6esxQ49TPWdd9t9Tis5GSF7zNDuUhYUQdwJpqFyS96tSwN",
  "key35": "5e7JMee7QwwttrFJ5id8nWtG7WroHBzd3SZCfrtQyUJgVPd2iGm7DSjk6Xq8y6ktAZNDbyUBroAWb3thJjFUEjrU",
  "key36": "5DrCNfPweZS7ZwboguRSZiu8eKxHp1ZqhBodHfNpi88aZKHKk56TRgy4SjtPKZxMWCyJThzzVZmrLADjhtmCtTNh",
  "key37": "3ocBLaHhbZkhGkE8ggPFaPWTU5FwLo1StH77bop75uSzx2t2czzofKC8Cxh3QJb4SmLHNJ8Tx59YFcXjN7tjq11s",
  "key38": "3nNeUH8QvuhvDxtNpSw3JbjFFEe2NSWoAgdKJgDS3HLpHzAzJPKVgUanuLJU8VUjYPdjjo1vxBMRk67wCEwLpmHZ",
  "key39": "4Pv6XW5q1bp2LXDcAMFVKuNzX8fP5D1BfxAenAT2iug1xVNzLtqs17vvXEbTCxVu7XkruSATMgZuKkKhHBvairMu",
  "key40": "4hmVU8HdWQHiQFpgCgSNErhtzQBwFnLkVb8hnqhCWE7DKDunWvF8gPH6LyKkrkX7zLRuWeAp3QLXpBJyymtMXRwg",
  "key41": "wR4jriYNehA8erbVNmANFibFYAGCU2xtA3PWiv2wxLYAxLrvet3ncEg1Q1uGajpVaofuUgFvtnPNfzcoW5aTUUB"
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
