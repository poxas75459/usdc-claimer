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
    "3eQjPoMkEDkaDi51R8BXkCokTPE4gYnDeb5Ejc1FjDYaN7eEuzcwdiFaajmoz7kmXVtj6o96yfNMyZU4Kuv6eFMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5idoSvahwVXixNAivRFwUgt8mB24tEvsK7hDdoesPh6FiVsnxd2EF3LiBXVbKnsuPSmhA38M7phSSmvZDFp9rBL4",
  "key1": "24b5UDfJNSk16Yt1ikcxXfsFXkuFyFDBLg8yRfYp6efckFU1impChNzcJ85kFBaUEJfoPV1VvPRjqaPgxi7HW13h",
  "key2": "4TvbVF9DS3vUcVSrvNQi9iT5Qespgd4G4B8nmyk4KvXiYehzhwMvWw7uaaDYjhqkh6MaoT1a46UFioX9VHTTVZfu",
  "key3": "nxiSHLMSJNWfuzLW9rbkv8G9NfVJwhMHyvQPxgou9kXBtdwSjhyoX8aQDRGWNEE1EvowcoCRnzav8MF8t8KfubE",
  "key4": "5UsPRxKaGg2Kdr3yUm2hStDbF77TQD3M1Vzw8KpcWhJ7jostWBnpofRReQQXQcvWN8fdat3KJTUE84pUUabpt7q3",
  "key5": "uTQMKU5Fb78sNWx83Lf2Fo68Lg91MttbcRi6xym8PyeoC41GdhN8ooNAEqNs86qE1SwvLvi62RWb3YrAMaQRNkh",
  "key6": "4BghrBxpAus7fzWdU1u2CHYaugiw3hyofF5bNiBX6Vp7pYcPBvD4otzyXecHbwcBfCG2wF7C1iP7qxBBxqRHs2vi",
  "key7": "2fMaZDnSbNUin5q2u4HYphkAT4ZMNvy5Pu2XXE3s2udYSoywKLzyHmkBCSoERHUqES7hvx9sZAqueAiCj4mx9Ptm",
  "key8": "5F5UAkWCAFindETC8cK6yxCVgztYuoJxA84a3NrteiWMnBgobfFy8QhnjX7EG4i7qNnfM5AQUKgY4DeN1CAqkA8Z",
  "key9": "3g6BbeeKUTcPfG6fDiahybXKiAYY7PFCGczhnYy3SFczB9aHJkCSqqYpwaqDX9f8XPuysFGEjZd2M2Wu9rJo3P8w",
  "key10": "2f6fzqp1Xt9JJikwUwyYNzcegeZtp4JFTgoAzgYpndF2uh5XVXsUtZGarzcd2oKH5uEHrBd5xLiQU3snMrWzsZtd",
  "key11": "3uCqbW2TgU3S5cQWVYnMureMcLyWYHpLWBx2ktvWgzBwHt5Gby6Nxr5oXKVAndi8EnxVdD2vnq8n2DEy2tSFtxhp",
  "key12": "5BMnAbXWGLFAbjVn3S7RTYboRVs63wtzNrrLJC5EKUVFqyFtoCh6W4M7PXjg4ocrocRLtf5e7W7HAe3SfurkBhfg",
  "key13": "77Z7bq56ZSeqDdhFJz64PG9TDfZpi9J7XRGeHyykNhrpMgzGqRQCxiizkzb5PKgYDqM4mM9jmgj1UJPwSsGFmYW",
  "key14": "4zJCQ86ACrHYo4unDtbKVGwyywC4EXwKkmVx5F21REuDiVYjn1GtuNG9dD6B1TNFPDyvfYSDey3N3x58L44Xpjub",
  "key15": "3KnsuUtaDqGukMMYwDpeQat2SD7NQNQTo6juGoLh1esrNbyPPCDdEbRKs2xuaiycvgkniS6erxxy92z94cBiptgM",
  "key16": "4HbTgm4bYyc5sw7q582HScXjnzpn7ZGV5f1xNJTKSVuNNW5SPs8YTqYvtsbNjUUBTrj6xs3FY86CQd7yf39nEKJh",
  "key17": "X2yjFK1g6hMid83VmU3xtPhcqe2Jaitb9X5BGy787tjvfgszuDuVwLvHiJDWV5FAhNSCCnVY1jwkxhG2q75DxV2",
  "key18": "2zDquPfLCqGVRoEZpgQqRkzDcHweQgutUGMtY1CqmnLwqD7j6RtcG8DpnJtpRjjMwNXeqsgnXhf4L6gdnQV23iuG",
  "key19": "5SN4Zeqq3c47b3tvBqPUeY2d7adx9LW3LLTz5gkj5kedV33V794VAm766pY4u8YGrvkyRZnhe5vMxpJFCH4uen8t",
  "key20": "3tJhLxtFNwdhBiqgB35aSPRdTRT7Zx7mN46jgMbcSTyDfFRsHrtGqbdQvwnfUxi1bsni2QKGBfh8L8kqm7fwjgzF",
  "key21": "2jith4zK3NMByAoyi8Aj58131ZJDFVR44b71fukFbDojZ11Tzw3tvYMXPHaDkUxHpeEsjWsbX2rEf3TqcYarY3vh",
  "key22": "4MpTYPLKXZ9uhYMKiTUMDtpq3ZuwBKFa59iqSkncAtVHokQNnYLxspbhmmRxRGocQSa94QvkkaN54xkAw4E9Tbvd",
  "key23": "2cXjXDhuSWH1hGPL6DutYteRT188iSQpejEHonXWWpzrmGGDNTm7s9uUxwd3nRprZDVqLPhAoRmp5o8Gju9LHWsD",
  "key24": "4fRdWbVHCiT2Mra6gFdysD31VXjJyQ5x8m1VKj6PRF3Cz4YzpwpSTdQPur4Cmo2XifDoYorSEqanv4bAxeEfUW23",
  "key25": "2Jdd6R4hL5seYx5GCHrcCRwaHsoaNrsHGvMNLqCB8FQRNDoXxxYjaH9jtYM3ZYFzKdQua9h21ku8yCioDxkezFpg",
  "key26": "541rP4ucdtam2iiuzfkCqtYJBNHcbXCuUr1VzdSrQanrT3RbifEsBYbupkg5nrLdWpGcQ3s6AAGGsQsLCoRiWaCW",
  "key27": "4GGqTSG2QtRMm7XyLSx6Qc57dZz8ziCRmcn4dnandKR1oZmmgDwBkTuKKVNrfPqZ4mpvgHxt7YB5EEw3z2QmpDuH",
  "key28": "bhM8Lir8o3ZntgX9F8rcdsnveJu2ThQhn2ZzYzh6roybjQgqTwNVrcQSt1vFKsMZwh1qiqiZBjEziFv4FZmP11k",
  "key29": "2Wg2j7GZjxQhkDm6vNFor6wdE4SQPj3ns3J7ZGWRXjJczU8wHPoCn52hF9c6uwEa852Nz8jZJ8kk6BhQAiCPFP9a",
  "key30": "3jHqafxFgs2c7TsMRLhJ1CwGogT8s51E1QwrdfCPHnfmQDpaRAAhp2y4UczKLpTK4rwsNzRjizVAF7vhKhtGZxJL",
  "key31": "5v43mTaggXQHBRCNXk5zKEHsfssdSuRnFJ4mpGdqrYUaRa2atF55UaR1o1j316E4FuLjK8Hq6GC9fyBd5JuWEk2w",
  "key32": "26LkRa8i4ZvXpF3urAiLuG5ghbRNAwDpQZJpoKp4VducPhHweV72iRLKsSZMGKh5PLvHjYmjYMgVtWUjYz57Zu5X",
  "key33": "2kWBRZrykNtd9kE8qgExMFcrqXWsoeZNkEFWBGCLZ87vHyY8R6vy1Xvp9r2x3qK1xcDca41MZpE7UQBFgnSU3owo",
  "key34": "39a3AjibqXRXVb5iiCEm9EEWJmHNA6JnBGSTH5FqV1QbzvM6mPbipXuuKeaBgb6if4nfKYuXZZvn2tpkd3G4CAHD",
  "key35": "5FwfrLm66i7AuBC2jgdG4SYtwMBTzCvNoWwru9XgK8cv8ukDJzZ87gXo6gxGTxTwMqF4jguAPrxyvwC7oCT98MzH",
  "key36": "4YGz7BFJjfxBBuWPF91vhQZnvaYKfpnPjqE2J4tccTetFGVxjMHLe2sZr1oiWeLFnKvNWdrJyVbszJVf9vvHob7G",
  "key37": "61MKZvCW39oq91xbN8F3BmJzMeTjDbP2cgXoa7bCWye1NfjS7Fcwy49FBGxyuEA1qPmnef4nVoaxjnaNWmoboa8a",
  "key38": "2zuCUM3AG6uhVb1AzyCqLPXfM4HTz2Wzi9MSDMk6CSyjJNMwygiHFG8HtwT6NCUHyzWkB4vCE1f5p3ux5zojwzUk",
  "key39": "5NNhQS3ofU8om7KiyaRutzfLngHTLPdLQtjixJnXtdzRcrDjLGskGAftSAXtyaYVHKXepJmh1pNszM6h7cKTc9MT",
  "key40": "3N7xhPaPDgwUpiYj6NCvu2oLPfJv8SEKSe3GDu3E3sW4D6ru8h7TW7Dxuk989rRpopUPiie9991bnv7AKMFyutMT",
  "key41": "4mBseFerFjA8oUxNg6g8vdEEvQxMkTbgY8YttmJ8ZRqJK7XK94NtaDDni5Tz5MyzvUqt7EMPh5ZE28pNGJM7WYuh"
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
