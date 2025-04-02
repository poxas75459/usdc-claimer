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
    "X3YGzK4yCi9aU44hRCb7RPXDnNP8nFNYCMEgNVekbhtwW4VVfnK9nB8CXoZRTHZdujgJXnbVDs8Qcd3EixFHhGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2esA41pqhjA8PoEz2jc5GFzgJZ5bCvE9wgeBx9tX48d8AonDjDvghAVBy47z3gPCEAGnu5RFv4ANKAtP8jbKsqa",
  "key1": "2kHywMnX2WRzmJuaqSXAw96Xrk145pRiNqxKpjhGxDevNbRz6Uev1FvnXEhsxreYd2KqB4aTeafTUX8PzUb6NY4K",
  "key2": "51VyW2myTW6UQtEVXEJxGkw7oyPjjSdpnK3GAcQWTu7KuwNb1osAKCxDnboEqv1hj3AQrCVZj4n62otYXvkHSrqM",
  "key3": "2zx6jNeQL8DrTBK4YrP5aEHjd6EwT9gn9BnEGkTyw7jJrQ1yKTW52Q75HYd6hXZjJ6vSjwGZyqKwCiTbzeBL3sxg",
  "key4": "2dqQWERsQzeZ2Fhf9vqM3LMw1d8mkZAQgHkGXtvuVhxxHmAAckD6gW9Wzep4bRonouz3TwYHt8ufEZixZXRVjJkS",
  "key5": "StFUqNLH8MrdHFNgKzt9HaNiWG6CPtRRwh5dS6d4TfzyH9r4vx42jQNdAkck6HfC8Ws4PkJipwuRZ9FhJ9HYDhg",
  "key6": "4j4R75mNf8kmvdH2z1E87zqSFojZJkbB1M7FRXoy4RqFNnuuZtzeQYeJCbAPDmqAzn2Dkqg3YhuTwe4BUTHwv3Ck",
  "key7": "UhUQ4cHUYhww9HhKdmgsnxNgTLhmDSEdjo6xKrAoeeV51xsuWBg1zP57U4nzdnnjBTBDbTS61e9gqj6sHC97eC2",
  "key8": "3wokSSaDTBiUJxSQMLyyBuzXeCxQfotAp2sDjWd8RzmpznL4dJQ7vBWtKiH8eq6bGJM2ronQ9RRpSUkfu2u3hR2A",
  "key9": "2VV94m6aox7zMAoK7FNj5ZderZhq7F1a3xCyBDkDv1QoKCUL4CqHpFarVABZXXkHufgv6Y2YTE3838mzTx1Quhq4",
  "key10": "f2sffqWq4p6Ce9c4YNqEcgJVVyXoG6VZp3T2ZDv35Ljm8j4oHgBqYHbZ7ZskPS3wuLgnQsSJzCoEF9ZAnoR9Rwk",
  "key11": "2r7utwojkxR2VJJC2aMH143BKrh8EBomnqJgThmPuVsnbDP3kYRopSpjC92RdMH8YL1AzoNMN6HgEmLyC7NCd4Az",
  "key12": "8267JVxbK8arogurLha313ZxPQsiribez1CQ6TVBaTLev96rYZJjqoKUn4FfXiuPULwsfVtiiicDLr1wZMDjfuE",
  "key13": "5hXa9mQqiQPgdGVtG65ruh8kDwC5NMnhxU4bihEdWU6ifJLX1L7cJVZ4BUYksVHzfyjhC3VYNyCpg2EiGgT2JxYp",
  "key14": "JMZdFQjNRfSqEykdpRUbE1arbZz9swMf4xjr6mHgL39VKoaQCXfvk9ntBpm6jsm1GD4M7QtSY4U8cE3nCJBsCDZ",
  "key15": "2VJohzVJoJFdvTaUYdivfrTt5S73B41NEsqUxLCmy1dgujj7XP5DN8qunsyX8xXUtVBkHSJqdFSRUXY5sKeQS42b",
  "key16": "3cJVMgzfKWXZ5wzRDZnR6Egg6SRsXiVD9YSV6ZtVHgGgF2qoE2BrTmdsb7fvFaeQb3TK7mvLkcsdndZdA6DHxdef",
  "key17": "5c23YmbKWNNNHWFSuAwScPtw44XiyYLaDWXbCH2CNoTSLALn8u39vRVYspbnaVA8m5Wcgu376ynNFa5VZWGFAhJp",
  "key18": "4x7rDkWUoc3tmG61e8PH83r7UfcoXtnUmdbdNjk8P9NLy7TDM2G6Yd8B1fdwxD1H8FMH6x2cuG4bVv8xvhzYvJTd",
  "key19": "4TzeBVVJL1vFDQNiDXX486Jtv37qZfEqmsGPSbWrymkknV65fvXCKLTtrqAt56uXraxCzEMsZVCikyxq6652Kuc5",
  "key20": "3MuJMdDi1FmbA9nR6FBSrUSsQq8n6eTwzuCBgEryYTPqdK5QLhSuCwk86r5dDUR3a9iQ21JMCVTYDmeeEvFcqYTZ",
  "key21": "2BrkY1EjpLqVEYjGHT5w8s2T1Neyh3xmrMRmP29FEdv34KSgWASMTGuLcqWUbovcpdAmLjqvXuQoNhGfd5xvVusf",
  "key22": "4fWqW7f1KPZJWANKD6J5Ea9qUTkpsTMJk1FuFUoRZMw9fFeVfeT6U7m8XKTDjKZshVyBoYhqjcWPmpDWqb5KgpCe",
  "key23": "53RArnaqDjkf3pN7z9PjhG3iYBSPzvYT2NPh9FHTXPLb5jSJQ2rrRC4nJcHg6xxdnskuJYPcLySURo7waFg1ENh4",
  "key24": "4RTU1zkskAixo13L5RsaArbZhD7GQ5RjdxLvwwRpQHtQwEoGpnLfz6aBchEchJqp4F49AyBGuCVqei8ZL86zt9RF",
  "key25": "Z9Km1GBtr5z1kqWaqpjs6ZMJEVuEgUhicD97LHAj4p5hWNvgQyoiugmhxPo2XnGCmJE177S95Weehzb6BAmDULj",
  "key26": "3TqnbU7G4gTUuJcfbbDERAsEUJcAcZ5pUqTXeXyvbqWRtXqid7QE7hQwRjmxK81dw9EXQ42o7e75yoGEmzA6EAkv",
  "key27": "64gTpejTwCi4d5ukpjRJW6HpQKncHLE9t69dxMNZMuNhy64w85VK5Rk1r2sZeNSrzWZMEqR7HtU4uTR84D8icQye",
  "key28": "2xYb33VjhPbsV2cWGuhUpaNH1ew9QoA3v1o9YgD1qV2YAENCgSRkpbHvnAvS8cggT34Zw48V3yLzFKCczkZ627G3",
  "key29": "3qWowdw6K9r6Csk7BXS8fUmV7Zro1k4bNVubD9qNbG3fb7ytjZ6dTM5uFDPvZpFX6NsKdVVpCBYKjYnAFuJCz658",
  "key30": "8kFsmAMs3EdW4CnyUCKZsCGY1XLhnpsL7Fb1JwdB5kQymVR3bcS1wKbTN17CWL9Rb6fHECoNP9CcR3PzikVrqAp",
  "key31": "5CXfT7LoNBN43jfg4HYMzZk5zpLGDv3e5MMNk8MPUwFhVycuqd11rwETy34RwXNFBzKYdCBvx5FH4iHJ7fzdEykD",
  "key32": "2tyLCHGsAungZhyN5yvkrA7K4DwMLrUk5Emvcvsn3TrgjiUJRDPbbQKzj3fwu3n7yzKdz2fiErmQDVwmhJ1Wf83y"
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
