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
    "58fV5uxNJuU8dvLG7BqVFPCfxxrQw5G777Rz9EEP3mazTiPRRaKdNTBjpCKMbmFJh1wGRwbfVFwva33LBJVcC7C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Cit2G8s6WuXgLaPazuEpGodT5SVugB1nj1vmtudASQvUBtPwuxFV4yCrjHB8iAYuxhfpkPHAEictSL7mPdoZW3",
  "key1": "34X6ymr5b6ZVSfyYfqjWf2A5WMkmMWjowdPMZfcB7udumcvZPVcDZMA8zd3XeAiNb232piVYD4KYTieNxu9LMRvr",
  "key2": "28q2gBT1vfjscTvSiHoX8awALDdFgAuJoeDDm2GG5aXmPAnJx5mYoYhCyMKjHiLTViRd9ngr47yQoGkavzhdGjPk",
  "key3": "4QmnY68swcbmEHtLi9DGrJ3DznS2ENKLpFnRcg5mDWSZpAEtzVbv1mxGDwSGmAZhpWohxU82fVU1YJKgC6EeJDwi",
  "key4": "26zyuD3re3PyPKEvwM7E7R3VaapQXzSLeRsESQMgKfD2Y153UvhCZnjc3z64SCnE3Zy4Syut8EvjRNV71oFdGR77",
  "key5": "4p2P57cpHT6hNW2xUTf2Qq1A96oM6K1rdHUSCSHW9mVqReyRNBikbvg7HcdqLhov2GeYTboXXGu29grgCEcvUzzm",
  "key6": "3nT4ZkECxCWqLj6M6UshjfTJSMtCrYzpjfsSjSoRUNif5ZF5kajnLBPutVW8p9Xn8E2QwfdMXpEoTbWnSc16m8M9",
  "key7": "VQdsWiSw99NNAjuPctYB2YNrQgBfG8uSXqw6npFKdcahkHod1pkA7qscU5yMemo95VfhQ3KxrDKwPkFb56edWGm",
  "key8": "4HeHsqefTPqPk64EXRJuHXTCgtnGpXeJ8gVGdoB3JS5Wu13zo6qGucjEW2gNnAAZYhQwVxkrPLhqnWywTHTgfsVP",
  "key9": "4g6Yjz2uqfLSwR6gkV5N25VoHM388HtpatpFkFKQgP7hyma4sJRZ2GEyUXde9bhRSmUwiGJtffcJjw6Nvst2GD5W",
  "key10": "61C9Z9rCoDCJ9VwZuLcLqcpYQ7nyjKeA1JbM2QRPmJDqx9JSZK67suDmeh5jmk2ijZsdXFYoozterGjmjZ9KMqn1",
  "key11": "4vVYxgYHzrd7qiHnCaRRUzhoSk84W7W6KQvdxwcbZrjvDUn8YH6NRpgMMxgYkYj1vuc8umN49dSfgG7TdCzCRenj",
  "key12": "4vj4EMpanZ8ctzwCEHzSuDnoPc7QmyXztrjR8qLmoqYQr2ZKdHfoFZtK5ayFbYwXCDjjHThfivXCBJiPmxSqN9Q4",
  "key13": "rkxN5rDYUgBAGPcWorf7HhGhW7ykCtk9R8tzNpYt3mez17xfp2NqS1ujRCA6VzTbmfxqEud5GRFjATKSfB9V2kb",
  "key14": "52F2Rjk3TqDtRr5TE3nMjG9sdfLgme8UK6m7dxiaooSJd5Rn2BecNvoAAUK2Cw8XpB1z5DisxvKFKiseHsEQr9Zo",
  "key15": "4W288UFvYSmP5gjvHdgxEB2gmJTQ62jKQLJw3h9DPcqNuQU5pHsEcc8SSQxcL7ffwP7vsYfh3x2ESMQjfxvUSXbW",
  "key16": "24pLYrwvmBdZZgJWodXdzBQ3tVVKHrTU6tCUnpPkfT7vbfw5kt5HxLuswQw1vTojF2Npd8MXekQkZfcxvmxCMZBJ",
  "key17": "4pufH4dWnNjSHTa7GZKK1mftNL18Es7TJWZgU13oh7wbVDkLt2XMryKd8iBGp1F7Ycv3z1b1WbMfvpLNvJVyTS7",
  "key18": "4WJwbirGpYWWRxqesfuHQT8xNDHzqcAbath833W4n98CXwP2gqaYrXkr2UfqsNQsmdeUGyDrn5mDJ9LcWiRqVZU6",
  "key19": "DfEaZJYFdLbRLuzVewxdUyDtr1bSxUNaJ8A5xWvHQ7UBikeDHbLpgxori23mDJi49c6YDdEGZZ6CPypDMLgg8Mo",
  "key20": "2Tn5eAQNRMtrjYAgpe8GKkUayf9WhHtSKUu7Mx4mQF5poq6dvyF3duP4a9J3kzNz85V7iJXTGf5pdEcUuRh6E8Jd",
  "key21": "5toTkehySXDjcgPM8wYAbTuz47JwrDyhRjKpxHdE1sPFCLVdjiakMVDFA5ZLLHWCkpHgDQDbo9qhArtPmyNN44cR",
  "key22": "44K22cG3LZ1Jy9Vx5wf92d3ukZVP2uGtb2UMg1uavM9RL1sFaUhR2xFwyKC7Uvwih9GNQwcsi5KK3tJy3XdgK5Zb",
  "key23": "5kjLZFNKt7Kdj43ByWjRAYF7Y4EnS6k4yh4HBDQwZ7w5z8teL19rxk9GfNtokfhFDERTg7ti8kbj8fu7i1qzwznr",
  "key24": "2oJDkAwF7uGEPQ5h27o169L8uhDD9FqFDXeRCnDQ6fgeHncYKeWsnFRAj2Hj6ZBrQE8AreSw9W8Si2ciN8ojJMb2",
  "key25": "2ToyFHEgatQipq7xwHcu7ZuDwTwfWt6nh1mGZJSgWKfPn35fpqFp6ecqXNhiKds9Q3WsGXAWmB3rbWiTxv2ZSPpv",
  "key26": "2cZcRUhSP8EKBXBv9383YxPD2oWNUDqyzG1vrThZdQuRhEMPPsxAuEDRUvpPGQdC5puCamTpLARijNMNhAPrJm3N",
  "key27": "43mRRqKVDfcP612rTbRZrWx8hKGQ4z2atnD4E8wUpFL6rKzjYyFfPeR3Pce7oumQ7CmA8PtBKJxsCsQGpZCNy7Nc",
  "key28": "42HfZRgsXdRs5JACYXoownXqnPAyq8BFtwJDpDCi7o5zHwiZKBzeELUGU2ZdTXnDdepE6zwMgBdSn1G9jSfqH3qR",
  "key29": "e1mZAKqTseNBnmfZrcNrwMSXbvi1s8XQux3CkawvsmgvA4TnnWhNxryV5oVxgeaJrWMcW47De5hnTDQQoahaQ4K",
  "key30": "4TsAKqVPrinTJSqndxwUbyExZFqK63feWKGSSc4rMK5iffaBKUotNzkBf4XRLyLzNcwUPELLYvGEVCyXjnmf17g",
  "key31": "DJaykfxY6hd6xX9cB7cPoLwnxqpVJg8LBAXyzwhW8FxX3yaBL7RCckgJi61CeXkUiyDqQ61ajtKZdMe96EbtwZZ",
  "key32": "2NQrGfQ1iUREXPZXyDwoeoUK6ctkZMQtAAQMXJbQ6Py5vsFY3pV76yUJC63hYpPvmybordA1BwkHyr42Mcah1nbE",
  "key33": "2RV7LQFZdfPZJGyA1hy7rR7MWCyFwrNxtYdn1G3sWdNA5CYC6WawFrbq1euRCBie4TyBQVYL8i4sgvDQQiFGo5u2",
  "key34": "jhtrJZd5tyeMMgbwfDpL1mRmwe1eT7qNQy1Jj1TfiC4moojnLd6C3zot66januXgMCfiFSxceNmTwFqwbZ67p1K",
  "key35": "SA9uoTA4kneZMri9j62UNfw3JKB6YZSY7F8FQoD1zYyeYSomFTCJxjMh4nya8v7mc3mzf3sAZM7kxuFWW5kjc5s",
  "key36": "4UUAJQCAcfDAo54dVj7kSfdX3CX28fMHYmR5REvU7PexZuLsPeD5GuRyRtNs6e9GQD6Ne4MKVThzoMda8ngZS2r3",
  "key37": "2WXWpfiRUeL4XPf78fs3TgCUmrjUHQ5mgHCbvHjK6vLXgvuyn4AqKE9Lnms1Q1C91qAfs9EgFoXv55sBcFW5tbo3",
  "key38": "qh7iu8j6FhAozuJLmmsjQWqnggFJkc2rbXANb4YNXnLyzxeSgM1ZKAcwwC36JEEjPJgoDZ4oiJkVk4NHaNUvxNx",
  "key39": "3uzZ8tabhjksNx6NnVCNDtaf8XzbnXeJSzDJ5zCYZ8cEZ8zP8fRkb44vkxZMgEB9Ar12bRZ4nX1Kr6DsMPcVnzVZ",
  "key40": "33SpRV4wk7AnxmW7fKCXChJyk4zmDncTwnTodEwyHoks5sZoZE8VwBZgZ9NnmLs2NPPsiyTZjAM4kCh337RYQAxh",
  "key41": "2mz81hMP6p446EYAD3rwrhCvoY5tR4E8eu6WkUcptrJThe5BB7QQHVPwTVpPPyYe7LoqbwGJ3XCBDZcFmyxjUdsy",
  "key42": "nDjeCSuXfvJiBy95uVhbvQJ6MSQmXoxKNisJ83bAFfd65XqPAVn4bAwDiGwtNsXELS2up5Xj9xcgTsGVnGDQJFe",
  "key43": "ixB6gACy8P5fKfSCQZALCWMjVXBHgUJZMgxSGSWmRwWoX4ibUYHqTpJs998CQzY3Spnh894aDNKkfNKMKAX2piP",
  "key44": "63mwsvn3ZuVMBo1wyexvrfFGz9hDZmhjHY39EED6wQSDDT2zPjC6VPh4oigQgT5igiKZhiYdHKhqz5WVCoqWdzVF",
  "key45": "37bpH5kKZkFL2g5eYkGmhAMeoFEV2EYsFkiJWkw56UNZRQT1A2Q9TCftp6UK7z3cMcbNkNS4Bv9g31F5RNZYCvgQ",
  "key46": "qNDTqAHCnJpUKhxaKCpQyxzPWPd2ykw9MsXRwvCDfxEtj3KwvorfbDzxSXgK5uCEtdzNwBYA1evw7sLwwKhtP51",
  "key47": "4rtS1MdfKUaV4Vg4RJUeufB9ueT241EFeMdP3Q2iaTkbRyGCXrXsycsL568p3hgeDxGbVqy5C3unm7ghfBVjhMSm"
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
