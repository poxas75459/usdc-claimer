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
    "3Mw59KKu8ufGmC17QiC1h72eKiHCXKeneGnBAx57EE9sUUamtsGEs5mdZSrKP4vTWiFWFveajez8Y2m188oUxvqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lqg4FHa1VrkV8XCsf2gLaoqK62SgKuMoY4HvxyjkMhjscC843q5RGziHm6QpRKT5stRAGMEtyFegyKxyRCKyasP",
  "key1": "5oEyJ6kygEA4Pgq4Qu3ZNWkkHgxvftswBAeAr9jmQh4vmwHKoHqmfm59qCt1icdoQpfyRRFDvrMkqH5mEiB7n2jq",
  "key2": "42EKuJDH54nXER7gJjFVPL4iLN9eQWgyrQv4BnmJCSpbnfBGigzeGjDBihBaVA1y2b2TTTKBLBecaqRx12V3fBxY",
  "key3": "5z1nLTEZhXuMVxc1THtiBrDQhexs2J4ptC6mCZCin6qjbdVqUqofzNE9N1EQ3YBgM58iT6wJ5D5PVai9esBAiwMb",
  "key4": "2TPynf23o3NdfoeN4et4YeuLTpUhyWCYYaDh16ScZUcXCkYd8ZBQfoqBcTaLUvLypWNN8bJRscg6LMzvB2Yvjr58",
  "key5": "aehim2yi33eY7k6Qvq2oVqMoPuBDjorhuXuLvbp3nkrU84qvwNikaHAAbVbeonhJ9NEPrJMSuYRvUpaNaccJpVK",
  "key6": "TzJ1RDMDuHHvat6NnZiDumzSHoUrWQyMqsqazktQuntzgWcwopFUx1ck6r3Kyo3RVx8J3v36U9t3faS8fCucMXg",
  "key7": "CVKc33bTf4m5Y1iKo5tqcwXJC9vUruuo4zXa68DTipFHZpdkW5LUvgRkositotP38oN398BNakSUpu9zn4xfLGc",
  "key8": "4w8Rj9WrUaVhL6FayjNHicTcXYLVFcepJHiiTbRX7y4mVUpRUouiw8bU2YhvVrtbB9WmfuQi3b7ENoLBQFJL3r2h",
  "key9": "28M26cz8K17L8RtsHCnrJPqpEhkwczvJxEFozUSBd3R4fgbKnWuTuDRgCrEBnPW3cw73KZac7hu2xriqmvuajWDc",
  "key10": "2gZLhVo99kXdgTg54sYDo18moQ6mWxTVnAyqKwumaCFBKiNu9oYJJcMMreP3UZ6xg9wWNFmyFuYz2SqMs59mSJbN",
  "key11": "2dgXRoNeKLReQgDZ2iXRbMjAy3ioXwStQbv4K3LA2dP7bmxiDn22gutto72vqVvJPapoCp9UG84ve7b92ijkofqY",
  "key12": "4CJqn5cFFFT4WH2WV9zjFsMMo1XEn89D9JH29mdWkjfTL5x6BAVLmYNQtoAwfLzdKQZRUGxyjpYyTj22xx8TULLU",
  "key13": "4haAnY6vX9mKgiJiPzQh8gpFaCJNiVHU36kFww3UsKz9Juu3zrC1Ee59oSYxYDcEXkfL5f3peJ1wR2AKAJ1Ns4uJ",
  "key14": "63CYZS775myptB1F1s4ArwDuXcErpRGd1zW5b3dfGzSchQERErBDzPts8VYRfUn9jPeM8n1gPJEwnxMmvuzt1kwK",
  "key15": "4AY5ztYhFdLJYU3MyQt1h5ezti5T3oYRCmVn9bJ86VcgYZHCfRcg7ZtykDKHm7DeN1GBkkK6gZH7e1KY63XNhjaM",
  "key16": "4LGC7QFcetbR4Luy1mSXAVisfsYscV8SNb2DrfYMDPMZFBXr865zWAGf8xYXnAcoo7L36mukerL4YveLAVQ6vsrr",
  "key17": "4iV41xLUNeiryYyVN8pvK1hUdLyVSNRYhgALezGDA5hT9BJDr8wV12au22WRHuvPcAQ1Pfqad8Enz3j1yt23WzNx",
  "key18": "5Z8kTYJP42gPp3wakB44yTtuDnfuc22HDJtohVYVkTNKiMndoEUfbrP2YfekbrDmhTbme2jiiibGQCoRWGKur5CW",
  "key19": "39tXatKmQwSaMm6yWbFf6RnSWy8PGk9wrs2NxthZzWwx9nkWk7V4Tkd6dKobE1LQBzKwKXfH3yRSy4nY4TfD6Pa9",
  "key20": "5kD4yNHuSzXZFRT8boxdedmijwBYBqgCxjeZTGHi2XTr81hN4jVxMCJsYcyoYFCK6zi1iE8s6bwcxVKaNqVrgP1Q",
  "key21": "3utrP3cGiKo9yF3caE8WBXcivQSyVbriZccPhApr4ujvrArJZER2M14wjzcMGgGUmQWYhWjJpEoiVrod339VpiVj",
  "key22": "3mFVBUbFfpuX1RT9CS8ww4m83nZLEj1JxzPbUakXPvC8wiPqCjTLmBc8zCF64HkVavu1wrDwZUNJeUR14JkrNkhE",
  "key23": "2VDRTRVqHyAC7F79NTqvRyHmxSvBE9HZB14iSTTY1jRGy7ngcrnTcKvQ2igEW2LVwafSPRx5j9H3QoPqvyPAmWoL",
  "key24": "41yuWqz2C94w2pmMLCquCn2zcy1zpiop9xLtHjTqvYsyZangdNhPU47QYznKGaoyEDk9KgE7Ug82VLVFERwnavDr",
  "key25": "rhPvdCVLwvzmDxrmdbNhjnAFAMMYj5aztsAH8LhUvjoRHMYjFxtpb1hkLuDJ1DwhbHHYND5StUvuLnftcPYNuu4",
  "key26": "2yCqAsz7kMiCmvGBGixYHHY5EuzewnJMacumQTH9gagU63UaqkyYavDC1Z9vvq7SjaWMYap3rZC9pp7EZVc7iMue",
  "key27": "5S1mBFuF6hE1KUQq8WBKzv3yyGZimvfZLaHgmrHnt3UdCtX5pWjLxp5utRBNTe2tvBbDUzU8ZBQYnjhf34ik6RXq",
  "key28": "3x42US77jLe5i551Fv2aMU55DKJSf3K7RG9F4vQwNv7P7Pm7mixkFgeWY31Wiax7yvSfqT3CAkMrBjRVtMQGsgaH",
  "key29": "5EgvJLHRGzS5EgtsmyEfQc3N1TZmuiH5pmf16ghKVV95Mtwe12RTV4Zb2MfQHna1eWdGXA1a4CnqDiShavrHxTqZ",
  "key30": "3D7onKisgoNZYjESh3vYSYQcuFte38skfPQqHMYvHbV4Cjph9roh2E7jH4RCyAfZ7aME791w5iYvpRp6UigiNo5f",
  "key31": "bccFLmZTJKqfpaqpWLTquVoKcLdUmTJvoAdriqpQPpVhiMZqutnNTzYHEKoF19Qjg3pDsGFc4cU1FTyFgYAarEq",
  "key32": "vJcETCKUFTFhTELFjuzCEUuSz2ZmWBig1MjkajNeZpJP52woD2pAsukeFtRm7WA2LQDnWsqEJvuz8TJ1uGy52ZM",
  "key33": "5CcH4RrT8dDywFwKnMuhrBNp1f5pYHPi7kggAaYzUmpcs4zFgvpyRGsqLzZPhF5KBTg2AKpSshfmRkzFonMqSzrG",
  "key34": "BzLRqz27nab96BRe3u77BBxteDm9GagFSz2QuK1b1NGeduW2ZPaCoXzysyK9MFHYgSrPt7yQxKKbE2gMU2TzV4u",
  "key35": "56bMg2CKSDJ9Rwk6nD2RwTaq3ZiEhTPDAJyQPDbycNQYkABNXx3CHMEUzeUpz65QJBEbwEVENSQDbQPPfvWYC5YP",
  "key36": "5t6pQYgYYC2GNTGHMSxF4vJ1mq32Kgg2eMtCm5E6BHpMsnrxLQKjuTqL1RVSUmRNSW3jmbgb2MAeWPaw2KCLwLHJ",
  "key37": "3f5Lyh6vb1xcmw8Qh3Zny7V3kYeuvhDgr84oCUzXPitDbWv8LSH2yaA1KgT4i7PDwQK8zEXBLdmrtNDa4YJ9vaU8",
  "key38": "NoKm7UGtV2ox1EfDUVjeLR3hiraidjmgjfeHm8Jw2ujuxQeQ6HchyBWpvTKpcy1CjeUK4WfCn2eXpHU3aqK9xYb"
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
