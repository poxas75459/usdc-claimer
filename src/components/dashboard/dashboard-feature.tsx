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
    "Eyf92oW2mTHYunmJyW12BenvYMNthGSAm2oeybTKTr6JLm6o65VBgXzu8XUW32QBk5DY9rgKRJt16HZhT7xMZgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWpXibGQpqRcyKQAGuY8WhuKqcF79BJzS6CT5ek5wrWw8QQGQPUwMMDWptui3FfCDKPUDLDbf5e7ASCcQJrSTz7",
  "key1": "bXHCpBYXi5vYWG1NGDXKGUVMzuGt4xFRcJH9ksJhNganxkEEKB7NShJrst5pDi2tVFofTwAPqfUniqk6uyLPWwD",
  "key2": "2Z72qfWAn1KtuNwRhQZSUCr8KijHjvUCwrPNuuUiDVdukwYunEPzdqp6FCaWrk2xqPnEdYbD1YZgoxsAMGGZNiqE",
  "key3": "4YVx3T5z7YJJkHNB3bhKNRw1q7zBKfanAbQeWhjtQuXkdRE7mWakoS87PcQqcKvfbQ3FZCxyUbeMGv2Uefh96MAi",
  "key4": "4eBpwZ1eDZv8De3aYy6hzinaZvvnBEGCwoKQ3uHdZqVHG6zA2p1q1X1Pchc2uxCRrNAUEbGNojzyWoDFpiZ22oYd",
  "key5": "5FD9bWdrgwX2LLch1DSUx1rziazeubcZesdb7NtB3gv8WJZov98pEG6rVGx2szaoun3fKDJ2Ynx5ZTnobqta2SJM",
  "key6": "48FCnVD2nteEARsR6W9ZGkQghan97jt1Uh1LCaQui2o5wr23j9KwhAN3zkQVN6ogSKxiEiAmFwNC3BypScPjLgD2",
  "key7": "292n3Cym8iSDQz5Lqxku82FfYmxL8489TpbwRfQce65KDCMziWjzTB7w8J7NHK7bN4zRpaB6xzKHWeQJTyoCKNPH",
  "key8": "4q3XcWGDDT4e7XTY2fNZ5hbwHjM7EYW8156UCemUpiTsLTEuebWcWAmnXrBoRYGaP4ALN5wHspM4NVB9GJA9D9ji",
  "key9": "eVb9QH9adFXauCsfMs4QJaQ1dK2hmcqKCa9ix3UfZgrkDbfskmK89t1Qc6paWszNJmSWYJDRrgqhyi9JmMTNTrW",
  "key10": "4NRt8E2q8KpDSoEZL8KC3Vx5mx2geQH8yVd2BspNbqJWEshEdJL3rgMZhYQkysFcFQWJFmXSqWTpbmrf8krdvANX",
  "key11": "3Rf7BRdLZLDX5TWQ2da1n2UkkWcCD1XJKi9vnz4o5AZ6QDZKG2V1QTNF6irUZi9or1sicSSGgFUSRm2tPYuwEtWw",
  "key12": "51j6QdBrgnZxLZLvC84KYtS8Bw1BQ8ry8Koqfaac12QAZVY2KUWtuDnpyRZeTBQbcKBDGgEzMpLfy1eurn1DShzN",
  "key13": "DpRDei3rDbvvnFf9ApcL8XP6FzkSnLrghWG8hvLW2s2TV6d1cgkXuFtLzssZQNDC3ULM4MiCxXkUmkKyGjBiBdh",
  "key14": "5poAYQCxfh1N7mGRbjjC4L8wVvUcs7ryfUMUWCh2dj65L7eLqR5HoPNujgYpoQ91XyBouNNpQXB8yKxrSMwkNvsk",
  "key15": "AL5FvWymKRhnGtbuLAixjJhWyXMBrm6tkkLHuzaiPEPvaDDe1iSGqXfeMPk2uRrFMgSswASttfKVCZ5wewoq34T",
  "key16": "34F6WGbkLpJQLrCBmQ7TKHe2gZJomtUUJgyYYYzz1mFhwFGZsvGXierNekyWLHiTQ8kEN6WcSyRteaoodDLJgPa4",
  "key17": "46KxWTvSfX67LQTVwCtC8CzUrWotntbfjHRnzS7DUy5QLwEyPiGG4eZNqSuvysimryFwLDY4wCdYwEz2GW6Y6ir1",
  "key18": "5mGrKHadCb8E9ZqSWks6PsBxprvvASXhJ55eE7vNGrzCfHX2LKJjAcnE63hasMccc9mE7PPrx5EnM2oMhDhNifoK",
  "key19": "4A55mqHUQRxG2YcYP935vZz58EkLPruRTseEkDAMd1uXqcrzQSKkb1wt6zGzEyHRMagABzyhugmvnVhtqg7sKQFx",
  "key20": "4aNNWrsjsC5EREHArPiz7Wbpzi6Z2SDJyGKiqjdBWYnMhxd53PFfQ7Wu5R9FQiVVLGvw2nonpVqZ8Q8KCFhTrTJ4",
  "key21": "5EDujuvRESTMrvRDfE3jJN2WK1aQSpddXgG1F6i4mpb2gRUX1BqtD46yhEzukRxchEcoiduuCAvZYqDSwWrYouF4",
  "key22": "5Tu8GQ71QnvGgsGUsi2KxqmKq3pauSJaWn6T724AFrsPbXwwMq1jCLYseZKcqdjQ9YhYJMDXUnZuiSX3nAc8ZKCU",
  "key23": "3JAzigJnagtiC4jmDPGxWxH8vXYqCrd1Qh1LdnR1c39W2B9DqChmPTfAMEaTuj9JoHbYk6ydqHbnrDEcoCc1YhDE",
  "key24": "JSnW3K5ygiXyLxNTQfp7B2e8yfJCDpkBUNZYDipb6BU77b5W7ESpmRjctCY6nMLPrFthfFEE1vmz8cBNHxcHQFD",
  "key25": "378kjRLMX4EhhJm8dB8jTXVFmstMyNyXSNqk3nJzmUxBUb6irtQNZZHLAXnd6dY4ByWv1kwqbNsGRej9J8r2KSq8",
  "key26": "2maPddnGDwp8mu3tgf7YcmiA6biNRnE9tRdD2NVQZpgiZXw5qSVVxVi6TfXSKw8pTNddTJWXtK85e9C4iGamRBip",
  "key27": "4ZQbzjP1xgRjiP8d3QmmDZybNLPkujGCZBzyPzqZTvTLUnZxyA3rzUGsaVYzXmNGDa6eVSWjaXXM2CNhcVPyFCtb",
  "key28": "35MZzXLDAsmMBnqVnkfho4URz5AKyiBB63Ryok7tFXGqJJLkyt2asVf4KT8DDAmGaTR4ctenAhB3JUD1mjH6Gq63",
  "key29": "5mgtVQ2Ti6Zj9XaooaAeQfNwRHdadr8Yw7yHh7qyatxYnZkQf7smL5iYmDEYX8EhppcSnM5hXQVL2Pwgf2gETzJa",
  "key30": "5hSUPYxHbnsK4uWPd4R8SHeLYAyJAddj2otDEDEtC5T4FaHRwCCP7tDB6KJPho98pHEtSpaYbfTCMXVS7hDeBHpa",
  "key31": "ro1G6k1oTudZ1HdH6sqkaJkFfzMKYmSiVeYLGGPtqM5tVqnFyNJ8drKn2SvtUTEEQfpCHydmsCpKoPpbz1biWuG",
  "key32": "5CTAVEJnJ8CkfuHGbXUY43navQ3xNWrdDR6Da4w1JW7CrEbuT87ZXiLm12Wy2FiUeRk2SBh8Hew958M2o6nqfTst",
  "key33": "PZ2DpuK63o618qXgTo2d3R8B7hvHaY5jYSBrf4T9tgSHkkZWd799zoSNUB9sobnhYQhCqZkxdkbXjaJ2ahMdfWA",
  "key34": "5fDWXdEudcVZRhDdEocqkfF4dg8X87ouJe664hVFnkTft5uGdWswWbbyB8yvb3NuyCGRmzjnyDf8uAZWDE837GM5",
  "key35": "4GUQMHUqPwCGSwTGf5q3xWF6vXthn8tvk4nzrMNUii1USXTWF9ErWrBk5jUeoqbU9QYTT5M8f95YZp5aHk8QmQkc",
  "key36": "24SXY7S92uKmrdxwNtxpMXCxq7v9aig2hPhzd5o97W7B2zGmthLuGeF6jTpFwEcxUyoFKpgEvivTULmNo4EeamaQ",
  "key37": "SX4Zey6bxiLsgm3HJ1DCAmfyYpqQjtkEAwiyf8u7CRYTviimsbpy6CJJhgexCWdFCFpZXxXWBZ85bSryohXzZCK",
  "key38": "2TbTCvg54UbmmHGy8ttngzRvqWkxhBfsiXr9JvCbsYCcHyFMEMwhDD54Bo4bxr3Vdzi7zCsBT8Xq1DUBoHzGLZZ7"
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
