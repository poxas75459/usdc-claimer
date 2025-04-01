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
    "5sxXQh6sjt5g59siXXszDfLS9xwnTLaB3dbCfjmxLgKgTwaWDSxTMD75z8DThDDFr2drSuAUkcCutx6oN8coFeT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1vmwjcKCTEK4NXcwtMM4BbGiwg14nNfZttbc2QgAWFupB3C3ZcYGyPAXsem2Dz7KF8WtdUvaxipHPmUfSxrh7G",
  "key1": "61VDBWwZFH784xYYKNUd6nvcwtoYAtBpBW9BYqpTCvyfMvXjEPUXLrf1t6xoKmcgjS2NJhqeHSudquXBYLFg5Sk8",
  "key2": "4DkPPeniPaMQbi9nf1q2KotpKAAiCiDq9vKitoxkPUfs7TT1NNgvb5HERpKX8zqZMJtp1tnxwPwjg7s1q5JfJQG9",
  "key3": "2gBz3CFoz7KEmpXnJ691rQ1gutBtGF5Nmy9oDnCyCinN3uuKa28Nfi7rGqTLBD5MWGT72FszWXeLDGzuyVjXqt1n",
  "key4": "213nDEFFrgJf7GUeDYVseq6rMpq8vNWMJepP6P9Sf5eSaqGWpKbrJ1pFXZpvzqgzgDSTvHKTHv9HXT2RMkVwFgKt",
  "key5": "3Yh2WRjSLCgb4TTv6SpVCurTmpMAnwcZzgY8mR4xniS6PmbmMCEtLxir8R7etxAgGiJnuaT1eckhB6rF6WkjC5Vz",
  "key6": "4AiDwrFdwnjZ7gkSorTMVKzptbEfYakhoLD6zMRbRvtuT6E4R9TRkaiYiGVmppvBdeiKqoKx3KW59NLhFed14o5C",
  "key7": "5Xt7uYyN12WemsnCkTrwntTH83QjmFqbPEHGykufL1CKpxG5yT9EysHM4XvwzwNAW5Cr3eaQfcbNkbrMekdMeXXy",
  "key8": "5edUQKKzEzMWS7fCQYr7pJcEktDC7k4zTDbPtRd9LrkiakBg7oraoBXT8xZ3F2V11ru6644uiznCFQzSx7g8i2qT",
  "key9": "o6L994fAJheFJs7DGBjXifqYLd12cZ8EVEjbrv2wcRQn4V2DhJhneCY2RPbgQeoyn4SeJnVPmtvMsU2T5WP9rxU",
  "key10": "3YQVT8kZRLkDLsE4gJqKcWGpFNyWgJ24F7mEzu5eCxdoqtoL7jYw18f2RPuboTeU5jfixTyCtNgBWyikYUHT4oAc",
  "key11": "49w6GxZqWdfQqWR6CPQYGCPvpKZTbP6zjJzuMUXUhRbLmGguViy2x4dDZMwQdnZsDir6kQXkD4jR198QnQpH3rVp",
  "key12": "398tKEake9ELDKV3QAiVzFSUd54iQcFfcztp65P2FyZcekasTthDZwHgR9CjRuBrfCkD9miwwXHLTh3nKaF9e7SP",
  "key13": "b5CRUkMNMA6NJLfhKUgcPmoLDC1miYzFSETM12Q1oS73gR9FL4b26ZNXpUdsw2bNWEbHcmNGE23NAvRbtnJwHXP",
  "key14": "4n28unTjaVEx29rVjyAth1S8RiCdwYQ3qRS6nPsFAxZ64sPwwXZkzpL6UhwrWY4KRJkw1xaQNKMbLYJ3cmwWJJRx",
  "key15": "2KQFiqc5XqD9KRGYt9eckqqqf6dCupEjUrumoEPRBRtiSnPi5Ksjb8DA7LHgYYhd2kHXMJaXuPSEwAmMDrn9LBui",
  "key16": "36xxPyFy5sczCdwocMKLfB7PN74KTkrYBYB4mp5Bo3h6hfAoGK7K3CVUkNkvFgJi4QcWdx1tqsnvFgoJngcXdhaa",
  "key17": "532HmCZi8vPyagZddwvehqm4K9kHWB4oByZ2MXQ9a3Fw1jdx97ApGQ9toP6Y6NbhYjTXBPPvNA14LHao5J5k6SSb",
  "key18": "4RkkTc9ZnLX5JcPEP3Q9nKK3ZagTuFqjbUfpdgAL5xvgrPECE6VUSJHHF8AKH2Hh1rXQxm51dKgdEGx2Bw1qVTuK",
  "key19": "3AaxcmYnf254WUb2qfxLMWakUjXmUR38v2ZN6SBtu6Di9n8MpdCihLw3PvW8aYjKM4vH7SC5orSdXfoHoXdd8A8j",
  "key20": "55umHfWR98ntBu6MUwfM9SsgBwUyYwZNRPAUTcDG29fMaqtuuPsZnKUroxm3Wj41oZttrRjLmL6vCMcC1yyzqjS2",
  "key21": "3qZ9WTbGtxF2mZ14wZcLHC6C7CanzbLtgt7DUWVkLn9eZE6WrSgZFfEfp3iKeGHbJ3mLWgvQde8NhVtXAGmq5BJ8",
  "key22": "3n8bSyEBtJpybqboHusZ2CbexnxAXGmrfATuBXvWrxoGYLs5reBnBUjgW8BpwbXEkC8cz92cgBLFa8oM232sVHGH",
  "key23": "3hpBfymqZYovYdLwTaURewd7xHz5qTzqGQbrBJq8PxyCUAhLQBLyvG8Ha5RcTLQ3qEacwQfvCsKtBYih6wVSag82",
  "key24": "4JVFBF9gxjXYnUabMJA9oJRRnriukMUreeXt3LFRRVPxiMXcVSGPB3iSEMqUZcMzsYYsb5EnS5Gxfnz9yeTgbGit",
  "key25": "2TrZrmbmkttuhsChugQYzixpojc1z2178JAQ9ZZhouhyCxwfE33XAQFwhhBW2z1BedzqHaFUPGs9gAM3AjBkobpd",
  "key26": "5gKAKPnNJ1oaBhLSmdupdaZHsqu6XRPCdiAqf3AJkinu59VyGcm7hcQBzmzyAurDwF1R5hzbcHJ2kYwtBSSJ7X2J",
  "key27": "5gcSza3hiFNVTzyrFGXrNroVJhH8ZNcRBiXQq9TJMVmgZHRnG1mtiv9VwzTSMJLfPLx3JrtM2bM5kdNKH2zybsK3",
  "key28": "4Cr2aG9zvdYhZXAMY3NBymacQhwKoezFJDmtMAVfzL6eXGzbt6GL8SgzumRTgXBgKC8sGrukqmQDXDKkXHvCzdgL",
  "key29": "4qUdpD9b69qbdLFKNH9KPNaKH6DbZQjqYGMEQqa6hg4RA4NvLXaHUmmaYnjihjfJywLAZmiD23QK2irVLR4BAooa",
  "key30": "3bhs6ayLyfyxTM6Nosrev8DTVvLEYtESJRu3sEdxpMaLWS9RDUvAEZrnduTrAN9nyWPTa8sXayNCJ3dyRoN18tgj",
  "key31": "4o5u4g3dx1hAkCsVNmsYcBSJvTXLKzuzgz9xnEuKGvV6hvH8RfCVNYta67Q8LHkFBKU6VdwUjFgHXcNaFWvT8yZ2",
  "key32": "44M8xDQa83AV8pP66uGKgsT5pw6rmAVxQfGQfsZtRkaqvtoLT9ak8FYt9ynGbMrtRtZKzYpYvsYFsrcHp5ydEMCe",
  "key33": "3FrQbLJTdh8PHdDueLnAXSfaKZ4gHjN9A3ZNJWfeDokrRCDwnapjhgVh1dFbmt78MRuFkAijj6LTwVLDQD7Suskj",
  "key34": "5JSzLPtGK9GHkmyakUy7dBCF6eLMn5HzqyB4YdX4pW3LA91U4vZQt78JZBH4NxjwosyiAnFSyvnkB6aPvC6Ta4LU",
  "key35": "5uzsH1pgutYXGk4RTsiZEdYSkvwxDXRLGpM3S6Np9FYz4mcRxtsCz1tGMQJVxwYJY4Cw33Z67Y3ARavE3KH5wdAG",
  "key36": "5LkSZmo559HVrdcnzUNXFXS9QE1XxXncyzpAP8UJFWuyajXNBJTM92SZxNvw3zZnGQBYL7aq99wBdfKLDh7f4fwH",
  "key37": "vHU44AhQJoMhFhtESyoP66Q4UpuYcPgv64L3LpXZVJ7P3BB53UobVcPRNp3ZAy1jKxfBpSLzq1zds8vvnxEH5L9",
  "key38": "va9d1FYMyguvbw6bQ8LFmStYhD9M476fkodNmYhu4p7nmuNi6uqzu7xjTjSBP67eGJMZt3rM8vnX265mxqcR86T",
  "key39": "4wSbphkdKEnXN6DvJPMCP7LWaLd4WxoPm2vBD2GsXfcXwLjVePGvdwQRxXgjAU836hTJE3UA3YSsz4iLidom8qiJ",
  "key40": "4jbYgnvDTNXcFfAmYuVfS4VZzH4rSJgNS7JWVkTRtQ2RdBDU4Got9Y3gS4ZRg4hQxgZYFeomkmL7cCYnbPo7rBxR",
  "key41": "5xQAV69BTNaLnQUWBwPW5hs9MCTgggpt5NPnYnN24aeToGq2xwxcTaNFFKQqbFoYvHgg2naQEpoRq6578JzAdnDK",
  "key42": "46g4sJCh8ifoN7aeqxhZKTvXt7EKLzpSq9Q3wHCPu2uRkvAFT4vDfLYFij4a8YKKvNF3rs7i8vx9rtcqHGkBHXVz",
  "key43": "4NbNaWaU4t4PhWdujjakJhqkk1ehzaEF2BRdbjSAerqhNZf3QZhpG4A1LX1Yuc3pR7HSAbY3xfpTKRs4NsTXPexQ",
  "key44": "KqoAW7TJcir45PuqKAUpf9vk5fhmttk947QvKpJYEYHi6yujW4TMNJA1BYCmmmH3m3PXxmQSTRg1pTDzy94u5qq"
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
