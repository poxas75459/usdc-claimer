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
    "4zmMuHNby1R4qU9TumEf7zmhSNBNJ9HjStEqueLRnWsw8UXqu2DG2RrJqkPZzLv8DY9rKRtfjmWfa6F3XcQJm6ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VHuVnpZianERU6Kz22ZVkstcC6ZRHqZ98jsDLnQVEnzvh2fpdCcaSfPhQ2uXPE6G9kpuiEGwK1GGpXj21YBGwbh",
  "key1": "mtVu4Ls5XhKdShPKAbGAjEfEGNEnyDrbk6RQpY4C2WoR2oNDM6ARmkNrvLmG5PZppBbkLyZue7fGxkzZumUj6qQ",
  "key2": "4RwpGsiwUAW76Pr8Dv3uXVgHMKEDQzYCzc5KkBbCDkPYUCRjoBwVewYw1JKgSWKXkPXzhPwhB3HsuSVG4bA6FoFf",
  "key3": "65saUpQ3msrqaAJXsQuEFQ1ot4CxicuXWBv2q1G7pHTpsXUXcsXbz6yGjNtT1WuKfLS3YHbaMcyYBnrPBNkpSxyB",
  "key4": "4SpAB4qAkuMbYFCPmDhcfnnMpC8Dx4FA3MZhvkosixFAEWjg87UCvM6CG5zbEbGz4mGHGEdrMurXEZQgrJ1mjqdD",
  "key5": "3er63za4yN2b3idZdUoYn29LSQrbiBfeC7MSsJMSNcuQMp5ps3eqiLaFWSndyVCpXtTAj974nUS3ADP8hFitMAfU",
  "key6": "3JkFDvtRB4qnVRjTfMAfL1PDK9RtE96pgXQEAoJxWWdoSFGWvLesbs18AhheniSj8HmCDH9W9HhRKr77pd9S39qU",
  "key7": "2ZFA1riNHMoPVbXiCcg4ys3AReFGamqjh5MabDgw1upzvSP7rVrXgpp3HaF7XsYerPtuxCZig5Q7MgRK6MmVdbTL",
  "key8": "5V5UfSfeMWsbFJ1QvyvQWqF694v7nrtN4YAfmxAKY3phAVeSq6cVmvbGShsoSRdKLq4mTKZWP8RCs61zodPXvzVH",
  "key9": "4DvhxoxdiyRr5s8SNVVKe5BPx8txAL2vbGNNc4ardb5KEwuS9hZzHByJLKaA6ZoZUZKRKxTRsZTj45i2fi9rS8C9",
  "key10": "2tNsP9knJdRzfi6i1unpc5w4icFY3CmAEhQ6oKGFby5K5RVJXtZsxc8KL8zmwUAnjG1sbQKyfDWehUuCd2ikgy5b",
  "key11": "35sCkTqBENGYDZSodA3kRLYhZgjz3riGPcfWEHSm3ZFeTuqvvLkwoL7hzCqU2c2JRyqRoVRBo5zdognVMcNijvz8",
  "key12": "nfNy9z838wqfgtqQHckHk9nAXkcacKpzBV7F85gXt4UCbM44tDxiB8cjefWgTdmdU92aLk2K8C8jEQhf8FcSuSK",
  "key13": "4pMmP4KK1k6qtGyh4Kff7tpMkShoqyzcGjPXWDCajkE5jgn9RffuWruqYDmS6syAwNv5TejTVJtVTuD6wCMR4QsW",
  "key14": "52Q1nmCtFJh2hrMVhdBsaxiHCkE3g6kNVuucxY7hxqSg2QkhA2yiNmf7dpSuKndAsxXm7auLAs8n6PkVSWuNKse7",
  "key15": "3KqZdBJc5AqsMxuMukRKtcichggwmWYnZ293G2YSRpdZkMdZiYdFRPRqiosLRbgJPP3nAbfLrDwCpRZzu2saCrNW",
  "key16": "3fNxreaFBiMZvfBHoiSMvkdtwsbtBqbQARmhp9X5WYbhmow175QqWdYuysS1sZHzvyDbW8JyFUwXztQEcJFu2JBg",
  "key17": "FD1Vf86svy4RCiQjnXAJcQvAedaxcjsg85FFRN49jCTJHzhdnfX2cmM4S6V498tAGK9EukDoxG4WN8W8wRW8bax",
  "key18": "4MqHq2F6BzqRj9MJbtzuuvve6kXc8dJ7MgMqaaLqkYmvQJspMXFNq5hc4aGJ9jawSyDxDyt7218BPGUsD8xL2Jt6",
  "key19": "7xzNp6QiPQTAHjnAwcQvfwHGs1hrUpQ2R9jJghsFHiVYSeSJe5Mz5Rnr6U8EjeT3RToa5QFahKo1uUvx4E6a2mf",
  "key20": "GQ62GFPp61G8aub8RV4LhUs5ej3QR5npzXM2p9EhrLS3YhF5tykZzEYTqkAmfWe5T5a52LST8cTGpBXXDTiPg74",
  "key21": "3DcoUvBaaEZ9KoWuJKRiqdUjtkYuXJPGZp9XJGFXqBNA6MLQce2MDeDREGWC8mdN6ccCgCuHVvsHzY49iABWJfs7",
  "key22": "5XYLQ7gNaKSQKPpSuuwhZqDS4mRaj3MwL4XoUCb2hQbK5aBqSwtGhmDKhT4CFEnkRCpJxxQi9fz7R6AuzpKMasbD",
  "key23": "4zrfkuoKGk4yFio5adQv7p8uDvGfb4R5RbTa7f42aHmgeCw8hZyHGcsem5dtv9BKWqvpzsdBMDaAnENWyf9HycuN",
  "key24": "2BfDE1YSk9Gebw448po8Psh6xa6ceQEhiMzb4vEsgvJ4cjEMQtaEw2tof8c48CWjrvaw55PAnjNYZ9W5gu3G2Wud",
  "key25": "3ikfJQvaKXX7wYjUzSpC8z49J7FWz2rgRtSkSYvKgot7gQcPnHC6vVF8SnijCcfDyDp7e1iZbbEi7ui65F8sAokq",
  "key26": "2Ne7iBeKjB9UCcj81M8mYckPkyXVd8eWpDF5Sh1PKeugpJEXh371QdS7RVMXUshxKNvhnpduEtNWi8B41iPGevY3",
  "key27": "5C2SH1VgD1MRWG7ajhwFwxiC2zPdfjJC1q6TFCYnRmV52jUMXEsTnezQbGXEexipR811vuHEATzPFKFR15uqVo47",
  "key28": "wChdZvkRmZeA6cEfViuj12dPCd9exYWAgHDThjZ1ihF4MkoSY7v9eRDvXWTLens3prFhWYAo6RjTcyw77ddn5L6",
  "key29": "2Fm4PiDnd5wmUCAdW8EJVaBuQyh9RKUwv8isZriktFoCVKmdsvkjgpoHAi2KYqpcpuQDUgrvvaaSTkHcJNAcMvkG",
  "key30": "3cqnvs7JGaKxUMQLgdStg5jCCqpP4BMFZ6CADstbUBCpHVHzxa7J9MKdqFBehauL6dqfdcpszn8tXeffzBH7q7V4",
  "key31": "3JkHN5VpabGhHYcpsz9ksFKwczknNnFo6PzygNWA5rtBoyu9n8ebbaBrQP8PjPkucTAvkn6PgcicDyZEnpZ86XEb",
  "key32": "aEiDVHTbemK24gDoeGqv8EE8peYUV9xA9GCm2ds8YHPtYGjpYQ1wcfq4Yixp6xPHAy6HZPk7GXcuiFUj7F29xe7",
  "key33": "5MPVocRZ37ZsyZsYWDWzeGSF1jRuL4MbgJcAjyDR9ybpSuWsWF5rGHzu1ANfkZzprtZZR9uQNQMVRU1y9AxyniAs",
  "key34": "524idiBShWfWuj3fuE8sMFbebFn6FgLfPXNkfanGJtLEZT8ACxHHfZmYBkWiszhb4hdFoi4AYNzEYpRVphQuweJY"
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
