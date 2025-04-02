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
    "pvKhHfMdtM9RG3HGyWQqtoKkWYaPKc5xZjMqwmWQmPniCGsVh9RSV92NvvpSAqrMPZhSdjeg5E6dm3aHYTvkUCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uaydmq6aGFRuBBZNeDrcYpLrks52W9x4EcswjhNK5t735qJXvpHsosPmUSrVdW2sXvVnZdwiZdAsKEn33AmP1zP",
  "key1": "4NJ91UQ1ncuq5AqegiBP8WUdSjXeQRKzuPUtuUfXtwXLKwkrbZzA28jUgD8q3u2sDYqoQ52Egh8zkLuC4npJJU97",
  "key2": "2b9fgcXmCiLpbQEp2p9hY8W4u8getEFQmDTZayhaKTyXzWfNBmiydpgBTCWrdDdErvZUfx3XWqKBxxx5xU97CXX4",
  "key3": "2eutP3pi4M2kwVCjugauCgPaKhFc7PkL2jL6H5jxG53xEG8LRNrRrjRb5PRsjacaqQi9h52XZAvxXPLJknw1HzYi",
  "key4": "2qJx8D4qmoVpnj797cYaPgscbn1f3Dygx1Q7Thhvmm8FvXYrhEpWNaqcNAD7hoAu67rDUUzcHg3u8euH3GK8udj7",
  "key5": "naRriuGfL2kUZSMm3MujYCMy89fFxa8pRX3AcYRf9XqiLiAk7hmSDm4NkZfhbW9XcRHRva5k9X8DroZZ5PCZv1Y",
  "key6": "3JecM87V7D8nudK2zscpZqgfHXayS3iEN1VqbXDsF8VvzejFf4E4bCUqweiferK7gqv1ckkVengEABc179dRhTM9",
  "key7": "4T4Q9rUUMiLC6DVj1GYP68FgXEHmFsf4LhbogmdihY2SGcVp9TeuBNQ1k2tPZetMqyL1CfgvYs25ZmPdzYWuHumP",
  "key8": "5tKsKrGnHUwVZ6LuFdy3CZifW9n8Tx5WZYsWvqsiPUcqHeBjFokmrxk3itEyQ47eGGLXAd9bpSfby5rLxe4sJaR1",
  "key9": "cBLf7ZXPjxu2UXvCemTV82Q7oEN75rTRzUG1YKujmLwbKLqoPQVdDTKoxHdaT4gjxi8ZAknnzinruwieQuB3eP9",
  "key10": "4MFJDvJ5oFKdSbf4X4xKTyLock9Dai62pxkLxjPzZebpzrTQWk4jfXjC6h8cn8ZexLs6rDAULpUbenAnVzLLH4Ky",
  "key11": "1khpceyBKaCjMVotwdptoLnfHtrgEDPfV3CVvJ8PXp6VL1gzbUfjhMmbwYxDraZDDYjkmLkXcXCX9Fw43ti4u8H",
  "key12": "3Q8LSQgdXQWMGX8R7r3mXoyVz8zMDQBfz7XH63xEKejcVC4R17XCXTdYvQdU7ijJMdLKkVHEGe8U3vHaPPEQ3BTr",
  "key13": "3STagHacpZbsZEtZhhX6Xtb2AcGQFeLZZgHyRsZPiW7wtToWctKdk4Ejso2quPJR6hWouGFQEuvTnBKvYhCcXSzG",
  "key14": "2d1DVx3yJnmCNERWPhn58Q8JhdMCbCZ4TrZxHVvZUPg6TMRtfLiwBTZqyG7gjAUbgUrQHfHAfZbp2LfhRkGy7K3s",
  "key15": "5kebs7zt4pt8iYiC6p6ddvmf7daB3WhwAQ2va14oNQWpTSy2vWEyAz4YbVE8tVpGFkCzeS4UUSfJCbzLL543cMzb",
  "key16": "4da64khSCmKk3ZLUoS1N3u1FaNTwzXqVCjYC3R2dYbtymz1aYNNmfFZRcUpfzK3TaCcrgRAv9bHWcz7h6R9BNJxU",
  "key17": "2FNq4LajWRKsSQimCHnmjNxz7r85LzMaY65hpFtgqyjrC3jociberJ73UA4vtacXxjJuj5jjwUmTLDRADGRsHjTA",
  "key18": "5KogBMpqq3WmVzydCuYBcZ5M2xFZf7tvksNSdD2xBdjk9seYgCHjcZMEUKXLUyYFCwYR6gsTAZKmHtzK6rrwL4t",
  "key19": "4mqXCGvFXSM1mFfjdJou5Z528kGvj1d4sY2dCy21Y69Mou6VH3nyBmk9D5WNkgJBbiUExLXP4cE1GM41atEWqeF3",
  "key20": "39fqBwHpq597Z359zVNCWBV5QRMFeiig2arH2eNd4XqF5w1HBRhVGLx3LTNe386EtDQVe1XtVYeQdaTSFdiwvZDZ",
  "key21": "rgbzcmskcyd3DhwxwDoiqS3yGs7caCxb7qKTY9DCEXj3zFC2xWoZvHZbbua3cdVtiPYeLQWDVZKCWvgyDcX8sz2",
  "key22": "4xyLsK3s8ipnzNCHopSLPEZbQcwRE1XDxMfBKan8nsk82SBVitViqG7VZar5y5saXFiFgw5TQwFDmPx3sFnd5DqY",
  "key23": "QTYtJ3anKnzPRg8r96LJ3VjgYabtwJHr1PQB9Fq5mZWJkBRWH3j2wx1Xit9NqmqmNY7tg1iE8goccYxSnH2iqo7",
  "key24": "21yqhVZo8nmqDC6hEMQyzZkCBvzQ5qRhNEMkwd2p7yxCBdhLuogour1gKphjbJPnef5sn2Me4DAd3LioNpbuzEML",
  "key25": "2AT8npSTqRr4R7EXAmRJULP5Qc3jMx6fridNqtkn2Z7hHmhKQgpyGCdwfvwsmT3knhQafLv7gGtgvnmLnthcjjaC",
  "key26": "28fdyEvoG8xoNHc69AsJ82AiQYeBZNCRigLgqaetVivnyuwsqDzFND27c5XZgi2XgJ9hNT89cuLiuyciD8gs8u4E",
  "key27": "28juBPbZGVtf18eX9zvtw5eCHA8df7P9Q4crRuXBSJYTfLzuKUZkV3pfT5Pg6ccgMBvWd7bmTC5TRTzUj4foE6x1",
  "key28": "5K4hfBPTopfbrWbZvisvNxTwbSbhmxMoExXvZpPiFScnwRuAYNQri1wYcAUh4VUyK4QYe8RRPGSnEvNN1dGrNkAS",
  "key29": "3oyZnsacSpwvbUgMbqJXHqQABDQgjurjkJzpz7RUkjvMd3hicQ7gufneN2G3dep2KHVZGCv45xSAbHjTkgh9ZF4V",
  "key30": "5puVvnKTdSSHMWbcSPTM5nXy4kdRh2mDiu3QjyoA9WxePtXvfCULHangWWNDnu7GKb5SHXnLuDnXGeuFhnjriPZf",
  "key31": "2WZZRHXBL9pyZRkh95Xt178qS3t7ujyngk9A7CGdgjE6F1L2RHhFJ6CESeRGLCbTkCFbHc3izHyUYfm3K2F4iMgG",
  "key32": "2HsuyfvAMNoZ2yNu52VxaMYZQoK4FYJiuEL8BC9SaRZwXPk7CSeCxWuGeEjMe6MuViyuCzNSnoJTH5ug2qEvdhRT",
  "key33": "5d8zULazpU99Kd91nKn9VotCA7FCkhid7DKqeCidYYdaEKoy2XoStRMeV22Gtdc1SPKZn7KS2SUDxRAiTGrn7oZr",
  "key34": "2DfhjToL1NDf5rURSRyA7zj9Dxa6F7P9RZd4fc8NVAXJJsGdfWMjMiTYSC98a2mqwkJPy4jnztJ7QVZc467arFex",
  "key35": "3FihpwdEE7n2riXf1iqVxiZ2qj4yUG3cBG41KZTCEKJVAoodp4HZojvFpuZpfPQjbEpCogvNuuFR2Y5bUK1QUce8",
  "key36": "59QKXLwWfeCfwg9Jgm5hNSirVW8xvDxFkFqE4RkXPED2WRxwtGiJvGUPmcQsJqZHrVTjbiFNTx55wiFAFkUD8nSi",
  "key37": "3o2QkuKJMWFX9k22YPBg8jwJZJx45tRzCyCvjNR3uYmRhLq9v1FVf6B3T4LptQr6AGKHL9XnZTYC78F4Zzv8hLbR",
  "key38": "Tve5yH7XwAtT9hgJ2D1XDAKGazUmMy6dFkymzzzUrNsjp9XLyXoNPtRHyW7SACziczu7y3EjENteD6aBVyUFx4K",
  "key39": "3E8ysFkPdZqzbXDDNgX9hjeXgkzXZUEooe12swYYPpo8gN2eMCmdJywmHKdBmaK5TaQEhWdwMTkHTyNXtnRwkGhv"
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
