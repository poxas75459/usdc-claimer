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
    "3wCAzjS5oexnyGL6o7wYMwZHPZGL1PGhVknrtUVNUvfqbBgFW2GXrjXSbrrRmzpw5qiWsU7uybdJmszSjSyK7jJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmfyVK9PBCqjDbG8h9sLxZun75Py6jG22a4Nifp5PaBbGrxD5FcMF6ATDCWj6yowebZPUCh5rYUtBis1S8KUbGT",
  "key1": "3YAWhCEKr87nVVt1pFfEhVUEWLCnJGdGg8nA5enEvLm1uWLqbPVbS1cXLfr31EeAFkGYhiKqAsTHXdXuP1eC2vBH",
  "key2": "3GUrYXDJZiNuDwWzpjp7yBHAaSbpPyh8748ToX5uFQghUDg858WDyKs6YiSPh7QPuLoZQHis9dpyZFahBeWY5Nuz",
  "key3": "4xTxX7SNUiUZocMdudgj61ruyYivwz2gPZTaYXxAbxVNpky4U1bH3rQavbW1RHUT2AHWBV2TFqb6yR5TVsdKGSqT",
  "key4": "psowoSyLULD4mZRWNdoy5EHKTn52zTxaK7m9aS8wZhEfeAWh4ho8ymXrEPp1RoSR7C5472gcfeHJvkePRFJhhbs",
  "key5": "2ES2Pu5LPQMHGbyFK2iWfVtWwtAXHpaMs6i8GwGUECQhNmKEghkvsaEnF6y4uPFSEL8o2GsJG2ARmKFwz993zRsr",
  "key6": "acz896gWicJHWDh92zY6rMqiB9vxgh3EzpTBopfrj1xubjbDcoSaLzrXoFAmx2EBtukLjL2MDs2tegG6DdXfEvS",
  "key7": "389cDa1Z3MysC7giBUo4vWmLukk3rEqbw3cDhwySEb4wGa74BhZrQQQEApAqVNg7Fx6jkvFaG9piBq2N6NhNMgdT",
  "key8": "4Ps813X6Yi1bCK8JAUVRGYLSS9Mgz2qURtX4wb8WJiHi6gfZib3U8gpgG4d4nEsMd1YnMGXtKjgGy6KTGEkAmnRo",
  "key9": "3UMZhgcqp9mNGfzzvf2nWV1wuopdJtx3Hcn4ZX8SpkK5KumsDRcMTSWvMsCDr64Uj1LmphkVABWjqKmK1Qbm11Pp",
  "key10": "4oABW6AvieS6AvLDQZJKi7Z2s8dbLguSWh3Tw7mZvQqeJgg8AtZqTXUijGs9mc8sVvHo9GeXabadnx8zC2jmrigb",
  "key11": "4iDYeFpjDUZhRhWjVAqqEWYQpZ6Uem6XASsxSLnpZVN5LqWzbqj5kutvPExHNhHfRn11T2T1P4M2M9frBtcpGhxd",
  "key12": "287LoX7TzbKTJAwArcpq7Y1bWEy5EdtfC5JcEQqdGgWZH3JxuTD59yFLzWFAKgDXavczkPh2PjLk5nHnjDBFqbHM",
  "key13": "4qRGWUS4fdWU8kYVsyQYZDjFnJzyMosU8bNvVgdgaMXeLXSo538Eg8hvvQUNT39jdPiDX2iV1Dm4by9S5CjXqR4T",
  "key14": "C3f99ndupJ9K3NJBh4EgS2mRWSJ4eJAtQ52fR2q3BzCqFirVPLZ6Th8qNQtjq9xasJbLmJJGdMPk9RNjJ3Ah1yM",
  "key15": "g2kWcec3EHS87NkF8mF7Qq7S9tdM7tFE9jzYHp8kGv9fAaYvg7TJQyGPVVKj6UfXtEeLtz4iwBBzzZSfUY4ktYv",
  "key16": "5rqp5QBfqjfK6ei7jDk3P4SRMmDFRGcToAEwgkNb6WTfFXEWLzgTvewPa8HsHVJnpnFKLCEtVip4NE7b66HGan2q",
  "key17": "2TieYS6WXFyLnqekFZNJHK7d3or8uqTRNewerkHhzTwY7XSfwZAiBEdXaqe1aqGiRxAnhjXQFeUqbQEatJ42ZBNL",
  "key18": "4TJGKrUgTvhc5PRw9vnBCgXbsoBJjS4GwWrmRtEcFgRzWaQbJnisKwcGyMcuqtoYVULYnX3Dq3bjA8bzhGMZoQxv",
  "key19": "4poECATnmU2qndbjGEe7t3yg7nugxcrafPz5yvLUtdV9k5sNJJ54Zkb9DSUPhkRJ4yNGik4wUWRG1ncu5zr3PYH9",
  "key20": "2JvVxrUB8dmPGTC5Q71UDRj74puDi5Hnd2ohmZzjnqmterXrvbsCstwQ7fQ4Y5dt3W1unny9hPxVPBAhfGQPtp8a",
  "key21": "robLE1a8xWUHyP31E2kUBsMAzbP9ZwoRq2oMmMNjWD1ToU4Ewr3hJ5pM2Hwf5a9v9oNGLHZcffEHwg2Y3qPyj52",
  "key22": "4qkjdqPPgk8kuVjp5XqB8ycKGV54Fm8k3KgbuEk3ZYrd8GmGKwDJafXt5JU21qw7AFWh9GzR9C6iv7QxvWPYAuEh",
  "key23": "38mtSj76sz5M3oxyNaSLHBEnqC64QGXF5464FDbzRQCr1AeG6UDBmZSA3DwWKHmsLuDKNQEwvZQG8c7xZp8MS7oB",
  "key24": "4965cEM4AgW77vgW41MDMGkQXK93rYksgZBhGffmzNxcpbbwGAeF9rjPpfU6Bx5RBjdhg7CVpNG3JQhZHV6CgLDT",
  "key25": "4CEMNUfTKgdhZLtPzodCVdWCpXjzYyk7jSHgHLXiwDQrnZvH28XU9csYN1HGTmS2y1w7r2rDsLzy7B5GUXxiZxVa",
  "key26": "3yHhw2G6CiiACQsrCWAYBZ398WPFGLiJvwGv7jkQ5e9Qftcetzik1L2sZEuHNqyB6fsX5EtN74gvgjuGqRVyaX2C",
  "key27": "3a662SuaavaHMr41aSH8Phq8WR3iWQCuix6dinVyZhKqB92VV9LNB3hhRWL9tGVGaCwypTJ839BMCQGNPL2amHcf",
  "key28": "9vxhqDCQeYeLCqhYSSx9ivW77brJC59w8xBwTtvRG1Jb6mhhisE2Z5Zu1weJDHdT7uihcdY4U2i6g5GV5q1VHYu",
  "key29": "2BdQyGQtq8KikgEYS78Cb6RqrXRyiPwteq3aSyqf1HDqM6BH9xKEGhBVuHj92sspcx3ASQDbXvKQxegMky5aWtS8",
  "key30": "t8oS7ddECZzw6zA5UsaXcUfWXe2xk86o47cGmjiZqfPkRQu69dnsLLkLGvYu7Kecm4ouLWoivQnC2N3cmeYHoSy",
  "key31": "3TSwrSDSi2RseSNPadzj5BxdN5VBDZsXNhqXQRjkCoB4526nUhqZWTiezkCT4685jjzUmjNn9Wt5mc1dYXhM6N78",
  "key32": "28nRMKy9qFFxYyTZYisGUkQdWLWMkyyVcGpgKFf1mRTS4S5jczPVAwqMFZUFtnZrtLZGxfqPMnRankGtPbBnyHxq",
  "key33": "3ffMHfUmEdre6i4N3Hnzup8EAqfKGVFo4mCHFdz7CbURUPBntC1MQS7xNFc8cxWEpco1fG7XRoYUUF5yuaBfvhwq",
  "key34": "Wo4aYieJCUgXXVmjG8rBABrBAuc3GtdogDCn3kSwmmc3TVfPwHNwxFLXzhDdHnntR4xEEsWZk4o9ksnS8oMzhfp",
  "key35": "3R9L1CYKXjY6ojooknsjMosj3gVGjVsnLv7RzSdHmjEdjJYA4mTNb12ywPHtdwvSm5AeKGAHdGoGCEUZpCP1bKE4",
  "key36": "3Fs3wjJpZSkP57sZvY9DUzEmbVdRUC8iRk8MhtAaXMoD6y7wdDAqRUzgDQyTB1NbJZHAMuXtuwAHqfQprNXwuqy4",
  "key37": "62RQroKtM4ZiRU1EBM2cQWANy7mLReT2x5o7Ti4dJXHZUXq3RZqonoERadcMCHdtuwLjWSwfnd37Qv13s7cHK4wR",
  "key38": "2GprXLz3Aq7LGoEjskN1Ru9kvYJ8TWgh31qec7HNUPBogdAnFxK2RdX5FjtZLyJ4BVdB4Z5h2owxpsWRHwg9pTMW",
  "key39": "2hz3Fv2qexjBXYjGrSfNJzYtS3qBwaXHK6Xzwt3h9JqUrZ2tqMhKjUNb3v7LSEVJRAySjTFDcKdu6bbEySNFd6C6",
  "key40": "31pS7QixfkPz6vJWv2kFLQighv9EuBPLthN8Pao9DugXfBGwwtLQMGxv77jtjZjTecuZ5Tojv5uk7N8GFkwQGHFM",
  "key41": "5PT5Z1x4nTZniS4nE8dD2KkswKcC84zQBkYgJj1YyJmRUbEwYSZZSsC2t4oqJpZvy62WZ3Q5hPeYnnszDBB15aWr",
  "key42": "2vE7hKNvWWRa5iY5abGmPhCXCMX9W1NmnJfDpi2BuEZUF5iotdyxWpNbLZF7y5T8HUDe1zudgyEqyGub1P4rHUKu",
  "key43": "2FmuyegLX6TUfSe5k3vsMZcfTpBAQPmCNkQ51GJpV1rUH4qWqdxV5yxhQVL4YMm3JwoZweqoavBmaFWpFbLbAKdq"
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
