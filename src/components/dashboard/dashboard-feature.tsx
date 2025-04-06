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
    "3PUzi746Vv5mHhjXdLfRgfAE6i4kkJ2MktKhhs1vW8pYUV16j5HXZMjM4v5aCNHKL7Sdp3kRwRk6e9LzaoHc3G5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1NW4uvU9CcWu4jXiyuccZ9B13nKyZMJwWxqcyKirSYPgHB5nRnNLNmZ9ysUxXSjjWPbyvE7GsX6X6HEVD36LmX",
  "key1": "4gNu8r72RFRoaYrMbZTWYqwBAFPq9ZMtzg6bYN66VyaiWHpN4qeLMXR8iH2AXgET3AJ9cJNBZxqxvqAGkzJrVU5T",
  "key2": "3ChG9tLBkjsbiTbwM1qpCZjhKved9cd3bXEY5MYdKWRM4347Uuj7DNCEjAa6RTamXEDDYPust9p3qD7ZDkBmNNmH",
  "key3": "2BE3T9GR1Ep9aD9A3w4QZiZ7nT6XXc2uYcPPzEJa5ABY1VtnN9mYiZsVJQaGwSQVVW6xasJQGngooRw3NebM587P",
  "key4": "22AVjU6N7DeWGB1FbT3GKe7bBQcQHgobp3LKBJie1LWatjqeG4UVyEaML1QUAFZQLcN6CrPYdbrM3G2j2fmDbPt8",
  "key5": "4XfBbgjYKGBmnG2Yf2G4qxzJsso9r1AgBz8pGCofpQCkA4R9k3BUq5wdqzokkQgayQzCKiEWKiCdsLfUAq8hABtB",
  "key6": "4NEsKUT7mafzPD76sJL3PogWrJFXrMATqnXvK9vV9WFBEL6dALC4gUmUZtfZqVhQS7KbzqS36qTjNyvQsKeLLwxm",
  "key7": "3eh4qGGiQ9LTci8eZCDxgtL9Fjy3DUCHyvWmkeZHfiqPBABSPeiBmnbTFPfcvoRvCLybytU4DyTxxnZD5gr2V8rw",
  "key8": "2uXfykwtDR1ZeTPqKpyQ8SXE9MhiPhQbGCxnKK3rDa3TcqNRi1Vu7cUjrzKKgt1H6R8J3kbmj1j2L7cic1KPcyZ8",
  "key9": "SFgydu8VrZe8qTf5aRxDMy57i5pfW2TjwQM64wzifyBw7Tre1dKew6fh3FHgR6zhzSiLofAC7Q9SLVyuawVn4Th",
  "key10": "cKJhghWXHxL3L2N18MvvA5s9CsfwhzWJWCXoVXst24mBrmyeXjUfkNjsNZ4KFwMWaC8VhQx1XTs5QFyickAG8fw",
  "key11": "4a2aUiPxrQQ5onthnqDjxm5c139m4xRvHmrS5ZfvjGW4hLEcp224axEtqtF3rup1hH6uRKm4q1av2dBsqSM7e2ys",
  "key12": "3yqHDjq4ETjJ7cToZjPnKhbjoW8tCYsy1zcGPzratiSDBKBwhZ6JDfs9eTzbjNPtXEBUVv3kZw7EZ3Mcin7xBkj",
  "key13": "2B1c1ESeiMHDHztXSvFB2XH3yAJAnhhpE9b1Bbp1H3fXi6zThxRFzSdMfNC587mGecCgzRrzYRE2XKf2VKVTnPa4",
  "key14": "awJyjGbkQmSgevMZZhD6SGwmXLqjE4ymN25gw2SC2qYQQA9MYjQHLFVoxMFF9S5SkF4LAxaX6cRTh6Hcsn3TzPj",
  "key15": "4L56SuaAnj2T3Zz9gcDvNYebgN4NciSLYcp2V3TE5cyYutndDHUw8Wc2WPojzQH4n1D6MVGhj8PCuJxSXvp1w6LJ",
  "key16": "3VjeCtiBQYbL8jRah53TsVHDACgFbykcw7WMQzkanbPDDcEUbzNs1m35RtW3iBYkdinmyUjxqUWmjf1yBXhdL7LT",
  "key17": "3e1bQ3MJDeyfy6uriJH5rjy9Pk4mCcEXuCcCae8pFs3QeFpYFPwtPhikMPV18p6m8CLmTRbBxRoowLKv1KscgY4u",
  "key18": "5tFinbi91CSJKrCJvvk8EuLdXgsgPgq16TBNtWprxZsYXTKCsTwsdE1XSwW3QF6zzpxXM8YCnmSBXgaXqzvc29vz",
  "key19": "gcw81ov9YtiWvBJdN4HjDVFr3ML7kWzJxzKHfSZxx9uHX7jHrvdwk9vG6ZdiTdrQbKP3VLoqpRWRD8fidCgfcFe",
  "key20": "47o3sBVBieUiWuE2tjGbZXWBCVz6TioH8ZrKG5S1zVQ2JgrmSVkZChUGM4Fz8b1PPDAmLHnNPAAv6xLVmcztEFWA",
  "key21": "Nc6gTvynJGEFjmJMBUZ4Xqre5TkiugqhyYFnnJppRAa5fptTGETkwGSTuoyunEQMkwc9H8Ws34CC4q4ZkdioZJd",
  "key22": "aTLv1e1ywWFZgzG5qMv2nkec7MX5GatCEetEogdbk5EwN5cJsnXNkY3s9QMoah7Yjez7Gn47qGCeVkSxjY2DD43",
  "key23": "3CnD4YYF7ZA3dcxoYY3xBWjW98FXYkM86TNiNRyFu1GtZRy6pwtex7tMKKkZws7RqdWcxAZMq3eXHzxTvXU9GRtD",
  "key24": "RY5by7NepGkTgbomr36G2R15pwTW8PHyLWCviKJbTayagzKr6oQ3dKZXnpRVQqnFqjb1pWZyBMfLL3TPVeBucLX",
  "key25": "57G5poG8Ab435uVrYV5UDs644pSGdH4ieeDCu8Yti5EPLkL3nctQ9yUmyZhCHQaApae4927WYdPctsXDRGf6Y6MN",
  "key26": "4p4oqeG3QWiRTgMnw3hgm4nAWbZxwfy19RSGJ9zybRtrrzsQ5n1oGg956pH6suTn3b7mymrKiVgRviGKRHaYwkMQ",
  "key27": "5MYq2GeRtC21VEfYNaq78Jh1em7hxhUD3ekZAtjabKVMfpJbPGMmhwqvLt7YfCEw23beUTRT4P6geosAFfT7sKdz",
  "key28": "2K2j3cukBciaKqZxChgDAEThnjKiPjy5pqjZmLLXMpwY9SeLtBcSHrDXsLDiph9afwBpK8L1KXtqAkEGboSuNWa1",
  "key29": "3qK91PFJvfXSkVfNAXkpXTpw4fQ25ycqpw2MZr8ajdxJ71LjZsgaJs65GSLctg8CbSvNq9pUbY8Vz5bptCS16cwP",
  "key30": "2Z5QHuJpM6o7WQAp7ThKWeXtgxiyrhuZ18wxcw3dm7AHAopuNzCEv6DBZaBmEMToGrSi2MUPurMmJc2ueFWkQTub",
  "key31": "4caJpWUJrhYxBJKfARZ9JkNMquPrKK3BvRXvapsW6jhahPh1XiM3YExNKbyKYvG5JBz9Wu4wYcPUBwwLu6YWpMxg",
  "key32": "5UsXHoRhyDibQ2iAsCHTQcoae3Ghnf7soRDgnvmBppg7QpQoiChyMQ1DyqVSbqRA7w5t9bCNCwVeu3AJQr4HnxWW",
  "key33": "65djQCbwfcuJ5UVb7u4ygXduBVDfSbVotUoDdG1CabTXxzVsVMhwUvvEHEaxwuMNCSbBaLHFWkuWbHT4cfAT8V1",
  "key34": "tJchPaKr3iQWqq4b4hrRhSmyuHxL7KggtFHo3P5qqRP25ntbnufZ96QKRS1BeFGuDghHvnPeqPThufNcuMHYHPQ",
  "key35": "2H7W193m488mxjEjtRWdJCvVX9sd2bcAC6gxznoMUkzUtQJV4niVCdfM8iX9FKcUqXqjA4SbnJZP5Vcqjn2zvGUm",
  "key36": "59UR5fhnpa4bgGuyyjfj18rjgForwGHunktqmSxMg3LvJLfwL178XVbKuWJpTcDUbhUc26zQ55e7e8nFvPN3BsYk",
  "key37": "vxrWx4K4BJ7P3t4WTqfWXSfZahPw1sBBg5V2E3xZcieevcaR5Q44RmZDa9VrBMfGpLnYig1N8kMpCRUt5fdFGQX",
  "key38": "51eeegjJcn3FvD5R5D1gbcPkMu9Hu17yPgATCcMYAJxJN1ingyZ8cbtvrYEfDi1DKMZovznQt3aowCdj8HJTokc1",
  "key39": "3iQiTeBKGi7K2jrFacaJp2utow9mffbnFyPi5DPwkUcFjGgmJ5Y2ejbTn4A2QgXt6YDLfcVZkStG4Q44FV8ZSYiS",
  "key40": "53xfDZJMcxRRu9aZVk286NF8gTR4MViVHmHsHYXLUDeWS4YhnopaJESBT9GFLpNNeAXoQqy2W1KKrtoHuEkr5HQa",
  "key41": "4aMhYcQ7cHhp68de1sBc2J83PApi5gzAjqK6bSD7oB39Zp2HHn8X33x8ynWfFyBfRHdAQAuahpAmhRD15irhncsh",
  "key42": "4VHoNvAba7dJHgFGhci4km4GJcTEqQjsbqmx6pXampxpWENNakFFYNW5vut9BqB7Db5myqWDnzGiHkSUYC3pijJQ"
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
