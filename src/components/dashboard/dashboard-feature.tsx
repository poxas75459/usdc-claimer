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
    "53Hy7KtZqS1M2vv98bMNsP1Z4q8LUrJPvJ8v3uurG4aR989HQqqWpFQDYXGRFV3UntGGoZZ9mq5AcRdr1hgjZWEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VpNiWfqpmUKDvBkJzj27By1CyLRibBV2zPgzvxPtTNb56Cj5rpaqiwc67KczK34VnPkr7z6EzJucyxwfckGx5WR",
  "key1": "2t58NZNpFzusPGLEu8C2tU2Gzv8SmJT9Bw7pveXYs7RmwZ8nB4NLjwqsKm23ZtqLz6dLpPuQ77p6GrShSXErTocZ",
  "key2": "36HMBC1Q4dDVf3Ei2ZqFaFJdy1D13FX95PtMsBTppqyQV9Zi1iRDFETD1ZveoKdaujpKipQkULDn5kSyURqdvZy5",
  "key3": "4t4zgywtuG2ZheaX7pL6tLeWX5eM7qqQsiSqwiTzuoFyX6x7Cs9qbhtUfVJbsYSuuTwxaSooumEgzS3iNkMB14WA",
  "key4": "4GCp7uC6Wov8vAvfQbAHYvuDjpYr2F8hoj1mgwTMWv26n7tQA9D79fB8KUKE6hksLMUDSRZg3vUYTRVJTG5ANScB",
  "key5": "3MD1bnAcCwihCkSyHqrjvtV5c2xxUJYmLXqh2gqBL7eFNpAfYv9ytgUrbBzecMQqyYSrqAAN4EaTbUXP5puEM6Qx",
  "key6": "D3H3rssCyUCYr5wQRtRM86totaCysUBWMU1EbwVzv5EXm6kHb2XfRD8FBjVR8wi2epBfVwbcC3cJpsyi8gv91if",
  "key7": "2hrZXouhzx6bZ9y6quaELBRDowFhiFTFb4mMitxk3mbqNwEoiV5jP4CJtmVmkWKfj7n5dxicUaQ3MvoxYnipNKc6",
  "key8": "3S2JKaCHJMj3gg7CabzzJnzLLTwtqmGBFqz6DAhhKk5ASKajSBDTzFGvMuxh1A8qMCtSPMZB9g9kfhWVFPCJ1d2j",
  "key9": "3qBzshQ9V86Ypc2LHxjxDazBnockWv74cW8vynLRpNndbv85uDsAnRDpDrEycdzfH65L3W78ddHs46w4nsHmhY8H",
  "key10": "4oR4GAQEELhSX1orFyf29ZdMZzxqFApnhYZ58GspC3cGFEKSMkyfsreHQubeFBcTa9PkbCXF9Hn6TqSm57R8MYXm",
  "key11": "61Tsni9sKHbi7dD4MgdtS5Up8buF3EYFbyugPYUa1uHGfn2cQyMLYuMLfrFUMcBzADUxQseoXjSRVFq7qDfSGeQt",
  "key12": "66dxPTvnM6GiEU1rjCFKw8vjcDHc1wdcAjzJqhzFayahQAcu5TGRLAwBzNFdYktULPQXU6jiTYyXhWs2SWbGLkYH",
  "key13": "4MD8HyNfGy4c43WQjzr7qr9974NDKYLXQUtgGLPeQLpXPvBcgLi3FqEZXZD5jWkyFn8nQCxM6UcymtCAgZpvs3WL",
  "key14": "2jcA67PavFaVeSZdYZ44nKadZXtbqaqAVe4CQxdrY5siWvFGUL7jY5FQQBMQ8EfqaPPsk8Uj2HbRVE7cG9ZW2ivT",
  "key15": "4n3cY25C9JAW8ph3k7V5VWp4YRG6dHFuYRcmQWEZ53VcjFHpvKUU2Nvt6Zkaser8pjUrMHxRt2SZ99mGs1wpvaAS",
  "key16": "kPveskTZEYf6WtKPqrKpnR1QJLYQHtECXSzp4BdzVpoGoiDt3ghwVbWLPxWrdFin7uBHDSTNAajwSZxSysUhTaL",
  "key17": "212XunY8p7fM7ZodVkXhSx2wUULq6E9kTKLE9yQETnZWjyaTTAMArNYXzzhj46nhFfFPD77sikuqt5Vn9PWdMaqq",
  "key18": "4vNKKLLkmG3EdNQKHbBRhVPu853NjGqqZWLnaGiLx2iGYfvP1JbPYmmYE3kMsj9R6pC1LPvn8eqT4Y1tmnNAP2Ax",
  "key19": "3sLvcCyU15KYbGA5Cagp2B94xVS8WxfvJGjFTp858N67dygBYBf8owXffAXbuvguXH8J4D5tpJdact9Z1AVHsznc",
  "key20": "2iQboYTT6bgPVcBRC7RSNWAVtMeXD3hqE2eHkQj8oE5boFDggN2oQCE1N5aFQnczX5stYJtKRebTv9dkcqVLXRMC",
  "key21": "5MzqJw3ECnRPu6uixxq4GzVBrfXv27LwWw36CM5cqgfHJp9xUiaAkSp6Pg8vFv52sWhZHftVYn1ZV9ioN1cHDsGj",
  "key22": "C1G811z7nUuGhAT9vFbRUbbwr5gqswxLWghK3JaAdqAYf3g9nGAy3FewwEMcSDBiHpHVfwFfEdKM9PYKsE2H4QS",
  "key23": "2CFDDjvKiWdK4M9higgDFxjCzLUbpzt4wofvQUFpTTv3WPaJyuPtsr17Ho4yLEWQpmCZ5xENyE9tdYcudtZcpy99",
  "key24": "3ATh5QD4Aca2CkVzB7VwzBefBX8vmbjGmS7juf9ZvyGhcUaGR23JrN2wPiUKRTVW3kZFDfmmx17tD5pwGfE9Jj4w",
  "key25": "5HdVtgmaaDWRKs9kutxkrmAfCuEQZHGgD1ohLAtJFdXxA7gXrgvTSk7aRwRLMLVkpwsvU1Krk7Hm1p49jv5vPU8W",
  "key26": "2KVzhSwBv8DTbHJn3uLiKCxXCno53siTktq8zVouXj4KoRikE7p1pbyVBrDsxGCfZnvxy3ikL1ujE28mCwqrpB2H",
  "key27": "5mMSngeQYFB51u3Jk4YAbyCQq8ynnhsfdtSLZd7TcU4YRFwX1zrdqRKmQAqA7vfkmE4TBt67EyZcoT9vYSQr29XQ",
  "key28": "5CWNK3jYQxkNj2Lp3yi2hCWgBWzBm6a6kji4sj3TRR54iB3YfBZq2T8q5UETdhyrBkRxEEz3xrPs6NdtocsnDuPp",
  "key29": "3MmBYCMeoHxroioR2wXSihwfPeckhdUXm2s5P7uXh8qi2dFQeTyRwHvydXgQSgiUSyNXBJFryTFV8oSzbzXDned6",
  "key30": "2hCnkQtJbqCEyYyZo5FcWkajnFX7nTk7MWKCUPj2aazfEArrUQN3BBZmJdRpoZ6fhTmH4XPhP5bK49xo86beq3yV",
  "key31": "3p6GuAD46VwSEh1zq74WHqspWqxBJoSLR8dAJGAsAfjUgv326SdbhJL4ockvjFy3Xre6H1tDEaaRB7bCdue1qFzZ",
  "key32": "2VicaXx6x21qTugNMDmrSw8cFpQj38xHrWcePzuWxXgW5x2PYAVBspVSq7NNKDeG5REeZJBVHQsPVaMahdF3d1UP",
  "key33": "zBnVBspu7rgFn1sAiAwQBKkNRtg1SyPSpShKAxH6WbaJqsQGXPZm8S8kknA6w9CaTAx4q2NedZCyGNKPSqcrx6D",
  "key34": "4zjiXMnP4HLkYQgikCBjzerAq2Ckuj48YqCjk56ajqi1D9ovYQnmD1VQUnbzArMhTdzZEAc8d8DRdXKr8nvFByrR",
  "key35": "jLYDUdA56pszqxK6dzsqfKdWYFDTNGfJ1ah1wR2R1M2fD4w4AeKi1HSn1NFUFtAptD6GBzfyku8vwBT552M2mey",
  "key36": "4mLyjmR31MRBzK1EfmFnej5gPVFjA4eE8urjt5JDU1a7XR5i9oosxsiUtRogRCHrT2LbrWaarhwjwN2CCBacn9wK",
  "key37": "5qCJzjjkQB3PtpCjsWLtUbBcy5uUER9gskwdDL6ZzoWyj67jEtj6x1NrRGB1815j42VbboUFFKV6faqaf1hZF9aW",
  "key38": "3EyNDV51BdrKpnw6rQqBHUTb9qinaFZsj8MeWBkKcxiFo7CqdBcFNx75jVAsTaopeUoYYcmN4UDcHJwgHN2B7zN6"
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
