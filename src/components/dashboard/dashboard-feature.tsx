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
    "tjQC6z8A5Kj1LxddPwCnK916s5miRzwa2jACpZXGZj3iCMjxVTtHD18xhoeWMy9yp1FtCF328oQBPQgftfdozK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFD7pp5z6Lp56yUiSaZmXYcS8zKVjPzh1FipQA7uQ79sfJMvu3pfQcwjegLPU6zXFskt5AjnHd6b5sWBcyVZFu",
  "key1": "3uYoZo4nBS4Xi2Yu6BPDt4VFGNjVJwakJDptqNb5NsEEC5EQx1xgZeG3J82yi2sAh2Wim1AcbZLs4CUDSc2Nyx4C",
  "key2": "32cHxmkTZ4cwdF3ztdYxAGRRRD9bDiDQMZvWj7w9fasZ6ZaagP9exkpAtKCjjVehAXD6KrJKAxWf8XCNSPLPEPGu",
  "key3": "phSrXFLthKTA9Bnb1hEHwiCB5CYYPvQtJnoLL1h6qGuBcnsxEXnTmEFNVFv6gthXtxAH8WQCBFLxbwx7iQjDdKs",
  "key4": "48EjxCTSMXWsCd1RQ4sedXhqBCvrzRgQ2HL8N43Ba81FgX6J4yELdokPUn5KxChQtRUiX7Ex5AZERMz3gmrVqk3M",
  "key5": "yeUZ7hUqx2AhKGMMMunHtuYFvDxjumWRPkqQ37tR6BxV9BdokhoojiKaSjAfh73V6pXtatudbyHrbPZWwdp2LND",
  "key6": "DUfFddM7TZTmX1N1ja2rGBnrSTHJS8VwbWH9yNr88kyK93BGaYP6B1bbAwcNDxdCUw7ewSi9unGQfcJuroDj6wE",
  "key7": "igpyVjEJYPfA6CDJKBjMzmthJeSHHBudXwE9LHH1NsHkSgd9W9PjF7Y4feXC2TgvjVaeiPfWcuuznjtczvZKb8n",
  "key8": "4kWsGTxZhJRKaV7sypwjMNwfJXuuW1z8MReRejjPmPu7mf5ZzLARTPd3MLB1a5yM8gW59YCuqFmZVC5cw5VfNQqw",
  "key9": "3N5Gp8JFRp6ZAmesunUWZ1V9WFxA9M4Dzjegd7Uzqm51NmUkacX1EFTtjwNFx7qPJoo3DGRRJrU6zxX5fK1A2L33",
  "key10": "5eW17YMYSruVS5zRjwyJ4ntLWwpmVBVnCd3DGt5pFSqZuU9mrm69HK9TEBnBeDkACGfS8FNqtTpAf5cq5dMYw4vu",
  "key11": "2avEmJnLESMgfWjunqgzpLnk9JUSuxhfXwWFRFBVW2zPcY9BdeaabwfG6ec7msdMXcZs6dPgugbCFNuDkn4KfPeh",
  "key12": "2g9MhfSnzi91VCxZfzZLwQ5EKv7JA2s3TinmTxGFyRte5R2AAfcxBqQVFVuCKLTiUefpcXKiEh4FpBGucseqhKbz",
  "key13": "26SDkqxdM7oy4ziV7JXCPDH6UUvjLewuTmoxr6GfpkBz2nFvAfrLCrofdmFZ3wjU9bn6xDv6tCFWEEtoYzXxbnyp",
  "key14": "5xwwoYZge1wt7rE9hzZ9vZYvA78QLabsca5HvnrQ8YWVFFREzhT676dx2A6nWpM8aexBYXiwumNvCL2FArSG6GPU",
  "key15": "4qa7HtV6FGyJ816L3Y9FhskQvvV4zLqNoH7Yez3VgGDgbaWj65Y5VCY9pNvkyExGZMUrPKWKANgPJr9yjU8dXWG5",
  "key16": "56dqadQHtxZRBc4QWfaWZ6UH6QsvDJHwoMtTgTvJuxdRoUsihFk3mHrDATFKgZgUHshkjK2c98SQVKUhMCYmJf8u",
  "key17": "NCt24F3w5G8xuvBTCgA23oEQBKwLsdcqiucmPmucQiJpNVh2ruVu49S1Y8YT4DdJdXsySzK5K45xUxZ9dqpc9Ai",
  "key18": "3UyD2J11SikhxzcHMbwmopDLymf7o7h8ESr9TumfyVQNHwzn3L8Yej9JCZ3PAYLiVZMPQWeEoX9pnGeKeaTvcZV4",
  "key19": "4zDiXUnfxaXCDPYwS6YRbRHpVYRaKsuRbymaU9dn9HzWFshWXd3tXCFbjLN8BWnQcDMKKu73H1TeHA1j8H8u4LPm",
  "key20": "5Qvo5E7ogZErahUgDjRVyv1rV75tpFhJuYE42SQVLFutvViT4MymnVePPjzyeRS5LKY7Tg9naTSNYnd3s9RE8YNM",
  "key21": "5LcYkP3tz7Xedoyrs5deE9Lz5CGHXRZcMMqv6o4qByKv6JTL2rCTFPNELiQCSXcLEnvfys6Zp5tnAo4kDif2gg3L",
  "key22": "56NZ2Kjtzc8jw9SrLRPN9vCEzs5gSFw4cGnMTjAMo3HXtcSwMF1V3LYQtEE2emsLAyom3vU9JJRK9PXfQmwZM5mP",
  "key23": "41495PTZit71cv8YJQbQA3qqFCoMKthmDhpu9YkZDyBeTHtqeAjQyosE6Q2vS14BgSJwNzK7MqqyAJBJ1FY7anLu",
  "key24": "5AZHeNKrDXNGDeuNqAMgkBd6njSTfaUAGodeJCDzJpAr3Zg5jnbDjZmLJNbmJ1CkAWXdtc2RjoBWDeka5FJpxrWN",
  "key25": "35VM8MioggnmMJRUoK6GkpbYZKsvTFytGcEyyiXqdMtthjWcrVXV6jCyHX79BQDCDAqSXzmBYmrvB7JQKTaLazAN",
  "key26": "26TtAE7YK27fHvAqvGu8VMtksFJACx5DC4YwJCDiot8W5vaeaPvFbR1DiXwnwaX7DgV1rq2mf6428XMBCQAqZjXd",
  "key27": "5KsnmzQgqpNoBScxnF71B36sZB9CQD2YvytCD5mCM2oG87M3RYeViH8eAR3pzxXN25iT6qgR2gVuMC82mHro6vp1",
  "key28": "5QyhDURgFGMeNwgBoJZzuLQoNLXmbDs21Qf4EsZykpJwpC7VB9qC8yLkdrovZhQq7dPVsRpXVNPyRLzedNMwWAGE",
  "key29": "EL8kaFv3eZE5unmUNRuHAmFfyTiiAPGbPZmrqpS3jc4L3E4FdQnWvYa6nH8W1Sx6QCxrJroB9rgWf5ks4J9YtZD",
  "key30": "5sAthgrmBQ9nzwCr5NG7z3gNeDYj7DEutGjtFmnSVNRM6H4eaV5f2SoERFy53xN8aRqcqs49pxQFjV75fdxMNdUy",
  "key31": "3ay9L1kJKD7YFYt4MW4dWPgcMSsxf4BAR7FBR8puNKPorRzapA6btFFZ1Mu28zgWCgsnHNmhEoCnK9tQDGpGU5ky",
  "key32": "3B3orabmukDs1Ub9mYUnfuxb4XugGmD8JKdzdGXWH5HWgQ9CHiUwQfR6fXXq7i1QzV7iMWGDaQcEaFZAB5DYqK2P",
  "key33": "2rLHQ2isv3LtUCuS1bKsrdm1JwLcfQA5mkL2Wi2fP7e2KSwwe7pzgwmT5qUKriuuN5FJWW9aPMLxvqmkAKgkS8cS",
  "key34": "4RVPLP7Mnd52uwvGp9dT9aF42TpsyUEsgnRXkF5NMseusSpH4N7d2STGSZM2sQo8MrpJrJmWj5PUE7bDh72XJCBz",
  "key35": "3pU6DBPpuQah56ovHiUhSApwZhVZFtnPoUMRPp1F5xDfBRtu13JFZ9bdbsgjkyqMAgV42z3frVy415hGiP97yq29",
  "key36": "3NYZnyCuH6ZLK11jjEmuZp2AiTs1J4DBwfjk1X653GdH4THyBTinFnMd8aB1nrLvYQFqeBxuFL9ntCbSRcGoBSaM",
  "key37": "5g341psbpUXsXruCStmsehz59h59qT1mErigNYR9BKSa1FKE7UDSCTwuVCdFTW7M6191d69uUF2651B8JfJm7NNV",
  "key38": "2ZVn7eLrkvK1Mh2jooHQuHwu7XWvEQGXdz6jt9q7GFx12HM7jeHES5sf2W1kbiEoAkvqH6zfv6NxszdsoYwgsFxs",
  "key39": "3g6FtJwiAkvowGWJuTQv6XCoWHe6YH9es7t2ZVcUhZKLH48fbHShs1Q4aniW1XDNSe74bUw5kv9vUntCphiB7qyf",
  "key40": "kj69YYDCsczGvDhxuHKv8Do4S9yQpqgqRwzngE91qiJqyMN1geSrDC8wjCZpUFGEk3upvmMt8itg3649gWMiZev",
  "key41": "2zkRdkXEUyQGSUiAFWvcYPqB7y3tPi1aJDY5FEfgWJWMLYGt3HLAgUxJQJb9s3CjtVNYKcmxngtFgSF44ZY7PZvF",
  "key42": "5ionVYkB5Kz6fiYPenTcJxDBEXwyZPYygdLLfAHT1s8K7pM7bW1nBUATSt17wM7A4WtuUcwQFLQSuBbuN1nwyUqu"
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
