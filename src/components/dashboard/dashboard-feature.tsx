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
    "ajpghaNNj25U919v8owE3kbqEsJFK3C6x3aWFgrN6rBSKGzCW9hofZ2oyJVpzE8ZeFzLxcVYEWWDEW4S3UUKJjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PJKzmf2ucTr5y6FS23uSUjpuasnF98GuLgvzSwehch6Xdey5TsvoU6Qka8x9FLgCJmiv4rMhUh9wM8ttC3dnsG",
  "key1": "fSkqGdJm4nPPaTx1N5uderJR3NCsTVNqEZJTB1FGu7qec1fLW8tMdY7ezRwwZqTmNDjGKogkGmF1fNhxA6R453E",
  "key2": "q1jmRv7krBNczLPeAR99qe1G25tCytBmT1YMfNCw1PxRDcvUU97BgE2K9jcU1P5k2BqeWy7BhAfosB5dyfra1vo",
  "key3": "PuZiKxaLha1UsEfyJQv1wXkZ7rY8fkM6nNLoZDAR7HeTxCHqgeD7vTe9MPLaZdDmL19cAZTzVRxRBEdELjiDwb7",
  "key4": "53zipZXNfMG6LnkvizKTfrewy1Pkex3FawVWRqBXX2X26EPVcFHkF7uQhJPrAf8HULTU4SfKVjwEpiscxmJPd8Hv",
  "key5": "FA4RR8L4pqHvUGSjiRpoHNmTkgZaeXEK613p15tGvGJGrhdtJGzz8kMSjLE3u7HUTsyT2kamTG5kmQAh9enTwab",
  "key6": "3fgD8AosSNqasGoyaVpBQtYE6snVg3nW1yxXh9bSc4iaMjXNt5YFidugB6zGr1zwJ9jnGjctCQv2gymfnmzkW8PK",
  "key7": "2tLjMUMMXAJegrjpTQsYM1CugsYP98hH1Um5dESbcGUw3x1EXHFopxycvtJCCtPBEwwc5szibJqUhwuLvAbPH78P",
  "key8": "4vgdjPXHtPvnqe49xiw7ZBYZYCt8ocPpkKU6T2nubeqnXu4SUKhF6hpzS2Htztgfub1Y8CrWGmSb6jucPbk14qUM",
  "key9": "5CusDM5cwoL9Gw89bHAKtXhu1fTgnNDF1Cc5Evh2eRsfa1iBvLLMfaDAFnZAVhHCZX8d5bo1yPLohdh4FeLpZYf4",
  "key10": "5GCCAULhc7j8TUqMNMKwDWL61j265vYmfo8dApdbcTqouCye3sGvWkm2Xt9o4aDCh6XPJQ1hNALp648w2PmRGnpy",
  "key11": "2pv6ydqLfrUKVJcurR6ZDPsVxJmM4HQv1L6oVifJp3utJsMJ7cyiz5qkH8ryLUH6UdbSioJZ9aLyW1XWRnpcDF14",
  "key12": "5Sy89izToFcGdCqvnbedYiWbmtZyHGzdBCCPXidXfYBR7nKn3i1ysqQdXKLMQZ7Ttukf9x14jGtkFLYHBV1xThp5",
  "key13": "hhbnNDpaRgbMyvZPHgzfLWnJ3XhuuVk9UKSkYK2AZgRZzDdEnAVNjiz2Cd5zorz4ErQkGYDBbzuTSv48uS2cck2",
  "key14": "4t6KRh9PKUj5WiwZbHpXRxgoNJx8T1TAfagc7rFuyqqp4Eq3MMjBxAUF1yfvg1PPnbRumVAqzJGK4PujJSBfca14",
  "key15": "wixLFm6KjNE8NqiHZ2xqw7VB4oR3sNVgYo81Uk9pCZMnedWch4NqNiceAvEUJz9WG2KQkEH9KQmqzYEmGpZkiKn",
  "key16": "ohdwnNmPbjavwC8EkM7J14FidA8vvoD4Tt97KkBUSGQuNvdiRLYwttqjGggnXHuGMNRbJfN1mGHdkiZW8VXjUTH",
  "key17": "UwooKf98pSrtZzQ3Cvj8bcLtmrLjLQ69HPFvgqSRJE8MKUvtT6ywLdx5CSVJZqEojjedPWUzXetVsJrFmC5hN13",
  "key18": "51vyYSWQxJ7NUFGG1U7hxHRuBjDwFCavUgZ3naPomxrH6qdXjuTPJenCjpytB62ezi6ys76xRRLFtAEy1XdnW38D",
  "key19": "2z9dBMYrnC8TqNA9KcE5dbgVyGfXddCiUtYr2H31kBpjUamBHeTXj1Z9j5XepYMaTRxwr96wk8qFceaEY2hJejVX",
  "key20": "5srhWpfrmc61BiD3cNnhM9WJDY8NjSKMqGZHm9fWT7kP8GYTd85Kgg7rV5CUajWsvWiZyzpBTSs34btJTbNhYMFQ",
  "key21": "pod2AFEG7PxB2HQ7ssJ1xQfYdM44beEuauPikB4v4XrCoXZWJfnDG48KRnf3qn3hnm3PZfgUxKyAki8gxBqq7pD",
  "key22": "APidvJM5fb1VmE2ahfL4hUtMNvovcQvCD1z5qE8TWJN7QvAJ2dGWwWTFP9CTBomB9TLT4WnjefycSiUHA5C2HSb",
  "key23": "4Y1meSD6dxsQQGTHNHn2TfXXmFsEuCkVj24QqGiCqA8ceXqoDLCVgnp6N1J8i725ZMZGEMZGuXvm8hyFGiKvcyqd",
  "key24": "5USM4q4JSn99EF6FxVwV12pa9vt6axqQC3GsWyYJQEBeJVqYjX4ApVWhTwG5LxPyAcA9LLiB2t4EKzVY8c3246Y4",
  "key25": "2tU3wd5fjyPSYVa8r8zUwGzrWnhBrF3yaKaUSATAwKWLP9CUumCf276BEDCtShBwV2XB1AsBm2JgNWwpfo6RiWDg",
  "key26": "FvNtgNvQLS9kv3V12m4QQhjsLPcaKmH2fJKMwsiXeNiLvVVL8Kskp9bicfKoGn8icrKem3gfGgyydBumD7Ti7ei",
  "key27": "5A7WNRvCrkdLoNmufTFJDi9tX5sizZ2weacaWkDRE8HHNAyM5pTGQivi4F4K5LYLLBBuLBYn5czFN1hUFzuDJZ27",
  "key28": "4r5JBxAgGbZnpxqGKG5NNxGnNsANGxheHbWmaeb1gEvGJEeQ9mrhTPRRRgs3ZnZeaZBy4YqQmzLpXbu2Xx8fFmrA",
  "key29": "nrw5qm4QUu5RvkeJteqX6oUmcjfCMt93amKi6L5NttRXxNpW9HNxjmGTMjTHSyfqehpEyouA6dgPae7QENx7zue",
  "key30": "3Afg7XhkhvnumqfuityByZbtzQkmgvMj3CY6QJCkSpa8rLLEgqqxkPcuKPp3qJwmF2R7LbpbDe8hySUfh9vLKJzz",
  "key31": "2r6FUx8ZKQxLUFNQmqTsuHaXN1vFwBiR6CNAw1oc6TVHG3KjWGnLUY342TKAnka5Fhoti5CQQiRyMRuXkx1wm8zZ",
  "key32": "5VgnLuuTQjDyfNPa73s7qo2W9G91tJe8mF7U6Q3UGZSWoa6tP4ccuWxYA5AxQuNZubWXa2DFbUh1j2ZN1aUhrjtB",
  "key33": "4oVu9igKMCSy6kkP88pKdpGtkQV55znTEc1xPHdTEMSCBCGsaFSUewRbJQX44KhWRijRCmGn5ZgczYstmoS6bHmr",
  "key34": "3geM6vxhWcgSxrKwgbEW4znccaTehFsABKnU6g6Vs8qLBuUwD5THxs4ZJkmgKcBkKyT15dL1hj1rGVE5WKhJyezy",
  "key35": "5xxT4Xvh2KrLxS9NmHBag1L4qHZ9YM1WBFCCM1sAdsDKCfhRh7uMngEA6cwvqMeGhQC9PkNB2sVS1LFaLvGyVTxR",
  "key36": "4Vs4LTeP9RGCTHLXAEJMj2Vd4tGCpzJQ8dExjiwSAd8VXUrFw6XzK155vTxzFLhFQfHVYp8GEpRBm7oYbRTCmd63",
  "key37": "4PmrQAEMY31kTCWkwQjHaPGeB9uKyHi5P43FQo4SSTSxPCWpVPB49NGz8w7BobzJaVWu8k1BUPqfrqJv1QgvF9AK",
  "key38": "jZyRH6f8mrnWiPpyTGA2ccN1ZM6u8ynaAW24EEnjQ3eDdXg8wLjs9eQpEEksdfuAjJZqbfBhBQjjyP44gytZXu8",
  "key39": "mn4cJp7UDzUC6wCTX3EBJMx5UM9BG6aBqQSd6sfrW8FxjXUExJTHCNowhzZH8m3VPfvNx8N6HP1higmcmZK4B55",
  "key40": "3tYZmWysgg5b1oGzAvgF2LcjATTuq5WYVeXuPurhehfCN5CVwsvcJ2KfbiRJGQ8MRhDYpCcPRTGne7f195ebMGZ7",
  "key41": "3iSQoFkw1c8yR3UsvttWt61qNLHXMwWYXce2UWNyGG1EJqiop79rQQWT2tKF12ubqowja5XnFwyjVzn2XKjfJThS"
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
