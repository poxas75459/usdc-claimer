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
    "4Eiv7QqzNxeH3qx4cGaEPFvRRajK3nWAhkge1ogTBbP1sGn1Q44tVdPpEsFjv3paVgaErLA9MF7QjSKXisHEAAys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybHhCKTuWgwDKrQVBedjd3cNCBM9nogdA892czqavjMojuJamC4TmqEBt2hcRPuhukBwGuhn8pqFsmmkwwwgruX",
  "key1": "5ugB8SGUVv52d8SenUiCqzUaWb4gzRwdAPqE1s4uvCkpUuzfZmWPm1gwnnC4KFZTAxgJXsmDMEjZCwqkVYn3yvqW",
  "key2": "5gQxxoh4gRK2mpfpjQz48KjC1Uw4nMmjWUmy89CSBgfJaebvXXbrqLMzFXM292k2gsPcxeKrCAiMhsXp58TMG7me",
  "key3": "fNHWkfGHv85Nmb5fkS9BPpr6nu9MJsPd1FYwVzM2ESbqBxYhDr2bLJqvEsRAJ3wjdqQAKgCbuR7mSvGhW5WNAGj",
  "key4": "3RA38R6PwVriCnxpAfmMnznhAQvKJeW1kghVSGjAZM5MLVKRveP9q7Uir28UopCsbFRW6DNeadMKTESqeij6cVMv",
  "key5": "5kwNkMFzLEyMaMVjcL2SdvHLtQC3M4SsniaezJ5dgRgzw4FumGKApREdz5Q7q8yhUnrukCr5jXB7aYdzwD6nwodF",
  "key6": "4yjFXyisgHmwMyajtxhoKvNsc5t9ogHAivDpjp947CSTi7HdC7A9Tv4Z91gN6BEHNFANsoWU9FzXKgAVMee545LA",
  "key7": "3piBjAUdi7s2B9F85HDghUT9m74JTQTeyiNYKBN2mGk7xzUNJFqjnSJt6ZLaDqwJscufzdhGCGZTibR2EELHFxCb",
  "key8": "38hqz7f6f41fN4UKMszDxvo4Q7JmygxhyZdbLBMhFkZCvxTXgCS2ASpCziB6nmPwJi8HtYa2LRCvbstGjiaw6Exd",
  "key9": "4QFdr1KHGBtkeyxfgw2HAa4gwfUxq1UHnkFpHSJZMKLii1gMsEsbYudKmda9jgE4qYAjVDqjpVQQ3fvbFdqQj5hT",
  "key10": "5UE6MYnDKzRmR6Mfk8uhiACWapKbspNcxH7F94yh7ZfpGGHakPhKCjx1SCkb39gEbaBk33k5FpPHDrKesugQVhZq",
  "key11": "3R7Nc2uLNmHzpMhRphWWcnFdyTrf6GwKrowXAnbvgqBfPKwoiWMoPbWciginwBZzH3zg1mofeHW2QqAFGpNRg2S6",
  "key12": "4QkcvZuNGkSQkaCga995uhNjadccU9nhP9aFSXaxGkWL3nvJhfZunEpBkQGCg7wJd1zMYsGG1k6UCV1hBDSQLFCd",
  "key13": "4mFKEMV1BMji9o1zHJFFub6iL3HrJAkCpmK6Pmja46ZSCu5n45TVHLeaToqzjkAMNxDB8ZmoBum5cgDGCftxJhAq",
  "key14": "2vy2XR5K12GD4cYHAReWbUknyJHj33vAcWQ3UsetGePBUbksgEcqGbCVQryj4nQVKc1HxdatToEhe4EHhyVdnncy",
  "key15": "3HpmqUTGNorT5ydzrR39RUhTNM6cKnNFhv1hhzzxFJZaKLbhyB5vSZDJPNUhDnXUTjEqvBSEzHm6LxPb1hEXND4i",
  "key16": "bHKVhWgatThZvNbCcZ88TN1cugfC86CBz9h1BerEesLe6M4cKC2YChpXF4M8GUTrmZjSseQ3SBHVGHhDo3Lm9ct",
  "key17": "3K2dQTh2XmAuYeBHpb5HWULqvUEuDoZs4MAoiEhVDr2kcf8f9MjXQVYYjePHks67qgo2QaPGiQC7XT6uMecs6d8o",
  "key18": "4JxgRkVn8GsZFJMe9JPKY1ZhznZeYg65Gq9AGgmxEqc8th7e33pEtrAP2GGUhjja4APpbHU3xWV4GFMgmFDnj2TX",
  "key19": "3kgaWMXT7UmJtMYnLy4GTtMZCVtZWJHsGWoujQ9YufxzWfgMTTvi6mxLiwqEx1yZd8ivLDaShf3R4feXdZKXb3fF",
  "key20": "ArCLNbJUibDWKBWLh8S9GCL2zRwTPEQK3GxhY7mfBXAz3WX4TuxppfwSFapuJt6xBkuLH5QWw1itaU7NgyVTTpt",
  "key21": "3G235cBdiqCRfK6PjFPygyv8raCrE2U5av17vqfL2NZjJgUjtmd4MoHTbzqtbMs2TAS6Bti8kCEMARbthbZFNTGQ",
  "key22": "4vZWNfjGb1v3k2mNm9kFYigsXUFG2LaMNkUaagngzfAQe3QcHwiyPLto6N4RmLRFMSp7D4tnfbd9R8uRzwhumvrp",
  "key23": "AgC8zFu3FYux7voLkjEyw9Jg6sUpDMPbrM5KcWJAzgxvZgFA6VJxw5idfoyedgQempXrM5NGzf3ekt3qJqGQme5",
  "key24": "EWyJJJhYupvMvrHUNomRwU4v1QCbAxmzPwS5drhr34WZiqA5ha2PCfVZXs2AT7ChbPEtQtRJxgg8bDcn1oRvtRB",
  "key25": "2z7NF5qoVP3NZhwcjwAggqKsRRs8AX7D1ysgdDaXPmZrogtv64qsHaW8VM4XqYJVrtCUq1CW1rmoDw4UgisFn1mR",
  "key26": "CwbDvNJ6Xpc2cfxYM8K4Q3AAB629J6uDPD1bzz3A55LYKiLb4QyDhhoumfLj63HLLLjMyvnxs5TXaytoFriS4Vd",
  "key27": "5Lyeoj3HLHsga9K7Gj7S78bppYwt1j3BKi59rjMKvyYQpsJgTcviwgm4ZdNiByjAMvKnXxScQagdaabvLmdCw2qz",
  "key28": "599u9n8NGk41gbgYzXDT8JWZgXqDNDDkLU1KjDyJVRwD5NL5xa9yCN1LWHoHvuHFpG1tNpfHY6xikPQkunUpR9BE",
  "key29": "5We83jhzvPUNXWnSfabst6L1PPwPYMWHP5pJPXszwFzZAtdPorCFdPABWgzPE95Tv5DecQ7MQPjM5SWaFBeLygV2",
  "key30": "42kgrLSNzLFJKL6bsUdgJHkjHJr597pXq5YMnyBZBKJ789YYTWjJhiMiC9UX5yp5NaCefGDyMYFVoCkU9cxyMbiu",
  "key31": "QdR69qCagSakZdsVFcK9WzjSCHbfuWJk72zSMGBVydcGCmfLQZFLqVbbezNjWFM3ZWkqo3gQDzzZb3MEGDmGWh8",
  "key32": "33toxcP9eM63fKvrC2Uix2WsQVr9qDLdUqfBYy2wP7Bwt6fSeoPN9NQmcoyeuuVNA2fGfB64HjZMGJRCAtfcTKmZ",
  "key33": "2Ez7dDpFHpd3t7wF28ojAAj2fizJQN3xTnVPSPS9k1bQzjXiKfW6FwAe86dBbbNk6PDwNQHKwPRdEzxnBMe3Z3YM",
  "key34": "5zXBLjDJRiqtFt5BWE5FiWLUaXdtgAY9TNUGoab3LwB35fqSQ6W1Lkmix7TRK16DjVdRQcP7qhTgdW1Jhgptqss3",
  "key35": "gJk6QK1Pg8VT9gpk4Ab6iss4S7UcqDJi5ysEheWjwhWNWpDKdXf2B1vH2JCgddz3oXmqnid4x6v8ynKGQWc2qtw",
  "key36": "5JAHRPQX6epLA7pE9m2SqHVWgbYyytG4DTSgr5TqVEkHeaZCR7sDuSXj3nYkw28Z8LinqoAcssjxQa5vFaxgr5yE",
  "key37": "24sU8ba9RHsYLXSi7gXCqZTQ41EEPv832rm5xgnrYh4dwN7fdJVhJzRZtJGrPGmS1QY7Z3hx9cNnYb7jeWVJ7Ba5",
  "key38": "5CsWgmDG6PPxpmjzxKX9HiZh23nyyDqwNfBVtAXoGHjYrHGNWwSxzhyDEYw2mqVf4x95H2r3ryAVv3n8oGLrCVUQ",
  "key39": "5GYW26Ekc1QUDJsSVWwH373MstaSZfAKdU3dMY3nziDqZ96Dz39tnhsUb7447TNgUoacDvt8fjeDa4FUnjbkjg5b",
  "key40": "2pTMzvSUoRLpZXMdszHF97VjcLAuPA4SptBmtXtGJZMwmx1dmkhRw6QiGtie3y8TNTLJW8v424DJ7eEus2GLXaV2",
  "key41": "2QPyZVEQAwLcMGwgR8tvAs5yxQkPXyk5y7DRTsBt29GHUE4YX4J5KSmckx1xz7uMHts2Pya4Hd78oAy4ftdCwsSF",
  "key42": "2LLbWmF3kdSnrSNw5RQMT4pvES9vtkdm9SBtuaiVg2mTWokmdb367gUS166HFMaviwi9iQQJcQN1HU4MxtbehuQF",
  "key43": "4e6Dc2mtGMZghojyoc6agVDh1rsb9dDqS57uq9es1vJhLbCrRzPHwnm5LwnL5kgveMfUqSz4ovkrSv3iXoDYkkKR",
  "key44": "5s55qLpHij9eryiuN5PChUSPMasfyAYnTvcaBVmUht41jKxk4A5P5Q6ULHN1mwAq54vq3jFwvNWTLcwj4RSnmAhb",
  "key45": "3ioi9Pg7MgJj38kcDgskwCUZbFY98VvEigh2cDGFhTskMJbFapUaQgevG4HVuEUhz1Apx8xVccQ1mzbbUdEuag2n",
  "key46": "JK7FR2koRVUdsJhLqgKXCtEatv5gr4zHSMcWRYtuvUyM51PZEeUysTgRkH1hDrnHXLJ85H7KdUzyTtcL4v2ND4S",
  "key47": "3w4LDFqAgdZv4kE8rxwiByoErRPcrYQwhPq5YqN7A1o4ZSKWYAkK4PKFR3YAGJ3YLEh9W911Q2miN9WvFr899qxS",
  "key48": "37htK21qZ1t1VtvzRVRdpzX2cyL2yhPqmmsidF9Rs5RvyGqZ4mvaAm8EnoETmLXr6kp2UyR2oyv6izycoua7nZeC",
  "key49": "5BmcWVETnX9T5A7fmEeHymLWjMWbPQFjJjKCjeKsTu5vaDDZFCYzqYQ9btgnviUNf9wUEicDrjixHVV5maUAiEWQ"
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
