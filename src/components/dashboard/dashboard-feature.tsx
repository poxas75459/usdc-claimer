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
    "bRGD3GurmeSpifxvB6vBVZy6deH1J88JxsL3oVkd8BQs8jBx4dMdwKv3fA2APtCWWE3My4jxCD25ti4mc4xQ9Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRUM4Z3esQd5S93m3Y2GuZPnhuvBkVjAVbRpzNPfK9W5L1RPCLCZcpv37YJuwxpqckvD1eHVkLRyfBqqdxuCWZr",
  "key1": "4w1EPhpQBMHsnpDHvMSKSwpxmwrA726gyYEDRGV1t4LeQrmcWm8kU6P4CtBqazGwi87w1e5KmMKezfion8e6ETfX",
  "key2": "3fxcwxuDe8Qv6kCwpgT5t6jkbVurmeW4vdL8mBFenUbtLv1VstZssqS8H7Td3KdUGpcBUwMxvkYc8MXydrT4MZVh",
  "key3": "5RFff9m7po252uTvSgrpFRFCBSPDXuRHn2ywUwyiEsqQEaq4uU3u8G9Bq78D5c8t98g4YrM34jt2ajtt8QHnDhgn",
  "key4": "c1dFM8QczyX6U9sBykGrcBPRuhGwLrJNJw2etk2qVxWp1LRYRKVWdAzxSnJgZHHKSuMuGk2C6xvmZHq8HhyM8YC",
  "key5": "51gwViU23nu779KYTMyXTZEuuVX5rQ5GNAeQqHgyVpDV8dUfuL6isK7FszCJkNfrqB9NGy2yioyxi1iJHMFULvrJ",
  "key6": "3A9jhXN7ece8Txy5TJQ8W48fnZWyrwoqQt7KxDMJA6uYp97BNo3NxNbMUkAgjaDCBa5gobpScayndvtCV4KmQ1io",
  "key7": "5ApyMyDp2EPU6sXuEz3MPbd68sDR71gUvjmhKs5WCZ8qWPMsQubj4HyHxu4eeuzwckNhZvv5fikTrsnba9fjqpsV",
  "key8": "2o7Qx31axw3HFsyoaRNYRSRpWUbxYBP2kaH8odmcV5m6QZF2V9saA2wsULA1Y8kkfugzcgsJgtTxoint5mL42PF6",
  "key9": "3nd95zG253TFN7WmUt3hHyCPfFbq1R6Jor5gdJ8AFKNncZyzekvdEX3L1dZ6dLXx98K8y7xCMa8KZDEh5LJKi8Qs",
  "key10": "2xJrZWbzwkhuF36tdF9jmRxVVoyTjKNeLztNnRQauoePA3GBRQWBzJTio3m7wy32emymutXnjWAodTVtQZ1KzmkB",
  "key11": "58xVLDyEaLKKBoC8GXXeW33ftpBmfCFu6XGVwArPHCo5WPjKxGbHNXXVkEbx1bJC4S4cNi4cHhvjZYerwM81M8tC",
  "key12": "3XmFgUWzGBNxFARdBbfvW7jLYoY3gTQPjK6tVz2AEdP1BL9sRzkJRnkC5tE8J6PfuxntwSetm1pXthExzJeMqnR9",
  "key13": "3Gmp2ygNaPKPhKRwvqC5tFqAHArujeLf2fWeA1EbG9WPM58YT3Y1Lra3XqnaiMsZH5YJazgPB5EQ9nHwAczFb1TE",
  "key14": "38H4fS9bxDTDjkLKACT9LdaLk9Z46EGgGgzfNaGmqfRxMP8QwFCo26C2BChP7ikbJK4z4ESbfs9ocwC4Jwgos2g7",
  "key15": "CmGWkeKZRiqtff4wag1hvdT7UgQUeTGKU7cQ18o8PnGSUdf1RKGPuLny1FouUd3Ck8dcK3QFZc1VNUwB7F7GDGZ",
  "key16": "nXqHUjXpwVCB3Upm1CYeBK1ivnHNmCc4JsgrH3H9ANRwypwRP6u8XnGxxq6NdqY5E5P7cuhTbTRp6GY9UJR2iJr",
  "key17": "3e4dhqSvvKpkAVZ5BQfYQVbKQusv1XT2LLS6wqr4zb349tPfcNTF6Umf6PNKnYafx4Jt1tdAkFrEECHVqXxLiMHC",
  "key18": "2cznJgWoucMhwfxPzSy5Q5uamRD6Sy4aFCixYZhVKk1i6CEkFYtLBBBVQ8gh9K5MrEhnFWvUk56E5DjvRF3aFsSY",
  "key19": "47UQ2cyVpNLD45xbxyJiiyt3fUxjBNSUbKUCThWqGR5RTmXcEiYvDpdy5ViybuCgRdtZcoQ8fnTBfBV4o1Tqe1gi",
  "key20": "mcH6jsZzjjjbaJbn8NbkRV9XhDbFLfhuG7sVKGuL2Njcx8Skgs2zT6PqAndbyEimY88FGopACPHRYnFadJbNUd3",
  "key21": "4ScW9ZyQ8STLajLG4u6QHxTRALQ9xgAs842ej7wpEvZNdThevSKzruyz17v7VdsAdUhpYSonFgWWY7JsY8npto1n",
  "key22": "5h6j9EuhwBNQBnG2VLCYEsk1JdCQeiHFB6hJgus4iLRCRKkbdbzS5DXPhVnAohX319VwuFq7Lpdmwj55s52tRt1h",
  "key23": "2rrkVu2ZqWV1Gesb6mkPAn8SQ8ajc48XTXeYovLvqH6G1dkTKFY3rmZqvB5pYBKszL67eMU8eceng23NcYLxmfA3",
  "key24": "5wGMyTux1n6VbbEuWo3uHU2r9dqFXxfhJ6wGqefeukCtVB5H7mXqmtNMASBVvJ3UkaejR7w5GFQdUUsLBkSjAhbh",
  "key25": "5KxJeQ5exNK96zhx5mWVf7wVG1sueDDbYZ3PGSc8GdwKp4irD9YM14AUFwQyggup1iYYscqdH1A3NXQvibebot7v",
  "key26": "2t1WHq3LUTifkM3Xw9zePWpXh6YxuuxKwkGa42h5uA9DG5A3sYTmMgmBjf2b1uFpCuKcmwE4cdZNB8USw6wsiRZz",
  "key27": "V4gUjsRtJCvpNbMToZYwkg6PAtyiC3hnPu5ygJvvw5tYwE7zwKDycCkToAhEH1YSrTUh4rgL23VSEaUgANCvXHn",
  "key28": "3FcaJUXaYkkEbBJbpe1DqUKfZtnJZeuxu3q2hsrNPrwJ9R5BMCvQmzdUMz9KBQK19hH4Abek7FAJsK7qvRQjUw62",
  "key29": "2dScp8uGUw8FsK6dSSd6T352UnWjDUThiSeEubVfCGjbWu8u4zsusAfqJATohP6A1s2Z9SRxTucUapxjByT8nX26",
  "key30": "368AM4YSqSiDX4DPznMuJG8nvdUjyPqVpP4kDgd8q3SqmvVZbihAcWGzKTmmZSoyDqesLLf5dTqfKN544JnrZvgA",
  "key31": "27S1J7FzzEYL6VHzNfWW3AETduCtw1zXegLmswxL6sXTbmHH99mXKyxvAjAjj6hjAmDaDxHVnB7CJZsHMj1827Ai",
  "key32": "4tzT8FpxysyV1M9G1NVSkRSDapzTmSPupkAuvcvMwtD5G2mkG5bzJUJHL7ZpoKrpqQ7pAHQ1bShRhZFk8CTj78CF",
  "key33": "225bW4XVV4YBiqEWU8n3rV8wk4Wq9X6sdzy214xoPDdWiZ81DmGh3PLiP76jKB1SwuwZnDFq5niwthdw2Q33ZYyp",
  "key34": "3PsqBPYFNgY8rtF23FPSCkYttDxjCDPk561ZsaWMyMMFHGJjgtpuy1vWuSXLxSnfc44MhUcVmxCDy5UyYpRSczna",
  "key35": "35bEdReataBEWLz7N4rtfeYzwmoNLPYv8RddjQcjBt1rvyvNdermmvwwCwwC8dVTTQc1CKWAzKkaisrj9Eanbf93",
  "key36": "5YnCsQESYCL4zd2mTzSuA7F7Likb6MZfQMm5KQmvpcGNvZfiW6SppejkxWtPKCw9K1aD6GgJNsVFwfaj3LoPMwEY",
  "key37": "4tzu6x8c5KAWwC1xK614mqk3KkNRRuT16ABPdxNAy8y7duwNTbgPZC66Qdx83Tsu84wEBdMeRw4vPrcJLStCpCmm",
  "key38": "n5Uk3XJscXAG65vVAfXGDNdp77rPhrVw2tYfSoffzb2CJVfYFnCvjUj16kGd5GwbGjmeaJixCmyp9eE5BgiLv63",
  "key39": "5LDB9JPzWipaERZgNvPRDajPMaQnm2xBmegBz8evvkQmDNasEx3sM3kMMcB6mrcAtVAxKd8k1AMRwQNjrVWuBTsu",
  "key40": "2C3t7zWW84We825WLX8rb86Efp75BoPdAk2cbkVZ5DunZD7YqYpQtd3GNhzjJGzAsVs12DPQjVSrtjXU5s5GXMoD",
  "key41": "64XGHehct2DtexTXZitb7yGUzWwzSxu1CqQEvpsnQre9UNyPrqnV1SuyiV9nzqTyhJ79RTt2EGevd55gCeV7D1bA",
  "key42": "32mrkG1gLvMt3Avy3y9RVuQSkTG25zKw5ivB5fSpzhtYFHRX6F1PiEGeYT3RtRoFMtXMbZH3U4A7YNVuHwpLfSPf"
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
