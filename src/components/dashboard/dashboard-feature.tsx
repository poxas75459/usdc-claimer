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
    "2AjwiMzowiQ9b2AuPRDggpfA46HhRBuZZ2fzdcs9C5KXGX9UKVUURqLu16LHkDWKp228Pd6sRgSGSSVeEst3AcrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57az7XzZSeQ9hd85jrZFTYXTvY8VfuLVN12kw6n4eRvJz3Y4bEaRUY8GqQsCBgo9sTZkxy4RSjrNYoEpP6pwXyCP",
  "key1": "5XWD2nypSQRh2uiVBYkZmTNsknZ55HQaNn6hBZrwdt4HFv6shqQ373RZ4E1WMC4Xhb9GzJA4q1M8ENeBpGiwrX89",
  "key2": "5sRpC1nmMmEC75EpqJAugSdbQwaApBh4AHwJxXVCs8CWqGXHohPriyafcKMLELrALqRjmb6RHrtqkrHuy4HqKX3P",
  "key3": "85hviZma78BrghwPZWb385vaKwrbNUEyaYCL4i4uCSesrzGsrZfvzVLNY8Cv5GyagNqv3VfPpSqHuA6EQNLcUpS",
  "key4": "4J45gsx8aS1bVASjGXHp9ahkZcytnoaGCq2qAHQFTfL5d3DKdJLmQVZjVeoYuQjX9JXruphL9jZHGgkYcar8yjYD",
  "key5": "EqwAL4Wngosu5hTuyGx1k8aA81evrM9Nf4xnnQ7UwaynCRVnbLW8b73242FFQevCK8sUFD1PhYMdkvFp8cpmknj",
  "key6": "xR7F5mapLmDY6TTUWDbi8Siezi8ddDx7PQDwtWcu2ypf9MVwd2TvtcvLdeshiGBxJpM4TkfY2TL122TwQ7zVg8Q",
  "key7": "32QW6jK3SD5ZSVaZQWTJ9Mf3sjgJJKxjc3vZNkianK2o5sPuGcqTn3gHpSRq8ALP5msBLUN8tDfoHtsEw32f87ZF",
  "key8": "3zfSeLvG3ntJZB5kcsyijjxPFxM3QaguwufMJ94MD6YkwQEvH8p2UspDA4XbokrnhzNEt8L6iTkW43YgSbwU64yt",
  "key9": "2JFrvbmdaaHAvuyMVktdbnEegMQ6GAavtGruEpK45qNpwieYDbQT5n64GWjoWtthTukFZccaxVkiiPVwsrMbzzXF",
  "key10": "3w4mHHFfDeUgefwkG1yB5nkvSRpYe5CPJS7BHyWN85AkokaGnQjVY8dJg4tNfvLAYkvdPf7qTeD414LJ1ekudSmY",
  "key11": "2fmSMCkn7BmJfQen5wGQ27BYAhFK4DSxzqP7JHbnffBiNu5TYdszCt3U1gjJVCtrUyj6LWS9wfUxHXVpeXu9uwp3",
  "key12": "3TEX4C41Too1rENzjaCzFCarnQQP7b48NgUMzhGzgE7brQNiZiECQ7NaVb13w9NnB3KRSMZZgE8XRkkHXzsWDPmY",
  "key13": "4T9rtsiCy6brXrHXs3VD6brqfz1w8kzRreRxJH83CANF4Ga3pa1NPSREWVpiXECoML4QNmPnzZWncMwhnzkNJgPP",
  "key14": "51hZcH9sUEDZJXD4VgkveQgbNgqpB5NFmmzvr9vnx28jgN4P9pyur9Srr6ho3Uhg1ypqKYsd376SYqb5D5UELjQL",
  "key15": "3tpMBzDtpM3t8SKT8nUSR1GTQY5ocQHqSmxfnzL5tgxKt8c3LQ6RceQW16LSzGZEUfGjggDz8TFsTq3vQk2ASYCp",
  "key16": "2rkDZBin9AiCCziu4P9EwScDKFaGSjAdkVipZHZcke3qj1JnqPThnVeZkcjDrsKEE4mXSoFMdsG26UDafYTsX1FY",
  "key17": "2ipbg7bXohmAoZNumGmVgoJvnBRPT4XJ8kQKLef7tdrpMYowCzqaVqMSmEP5occhuzukJavLZXeKChUtUdqGTRnq",
  "key18": "5H5pigV3L4wtcfbqr99kfv5tXtUKggTczkhpXUD9dcu3X7amSMfjxrBVbJ1pJoHFV9YTFNPoDbU6rvr3d9RbuN6Y",
  "key19": "4QRkfMBijk2JGaUxgnsiSpYmBdDFjo3G9aMAanjPVW46DPbHApXmHGNyB5xABBxKposZkKynBDXhKsmiNM66qPpQ",
  "key20": "4BSe7KRmwvJPpBM5cFZaYBkN2FVzcx9gPNw3bE3fdY6G9fXLswqr3yHKvnifbxFRePWzboEhFAtBBohg3cNianke",
  "key21": "29zE9wth3xiK7dsLtvnFpeTgdaBq7cvrisnLSvpPWrHjfDQSJob2T2RiPhdu9QfcEvnAcXQDz3fSpjjvYE8zgnvv",
  "key22": "M2g1RLAkB1oZN9HSuBQLSX7ZUXrKRFd2v6NpDJKgqdQTv5SrpjQyhaPg7tfpPCQ9DYyNCTKQsMmP3mns8peUBny",
  "key23": "fv78KcwuwkyB6qkWCFkKeQ94dcoVtvvV3yKUjqJPR2RCQoJb7VdNC3XyPA3UaRyKjPQVfWj2DDHxc55HJnYmF35",
  "key24": "3uuVKGGxiHdFofHcxCbhA8ytwPqj7TxncKEQ5qsaaTJLRnnBQkbowUwL3Cx5rh352jsYhicgZx2ApjEEqrHy3fkC",
  "key25": "4KspTVqtA3GLunV8nRKyhC9BLmtdPFCxEKaLRvYsWoMrQ33GjShHwi4CGW6hqm1b8hACeUiuj68PNrSzci3NSeLP",
  "key26": "3qrxrtGZTX8TiXWng5RiuEo5p26hzm9cwnKz9AEp4QiWkYA84rBkWxjzxxQR5S8g1MzEBBPkpwBTmeoXCsBsSyLc",
  "key27": "3J6AKgjU453aGX1kv9wkG58RSoxcTHn4J8c1JCNzxr9bSWbZ84x3mfQbX4xmCZKTiArKJU9TzJfEnJ2gikH4LyEz",
  "key28": "4yruP9mYCN2iq2x3YnvnE3vsnd2TFsuWaq2Q4oYa76c7TscfjDBMBVDK4ckGRdjre41Y3nC29B25in7KwRt4RK6p",
  "key29": "47W3ihNN6UyYDRxZqd6g1igz5tXz3UtADwrrQ93ZCQZzyRPqx7RW6GZHzRWDDQjoxYUcqfLrYcePTnJsgZLndTv5",
  "key30": "5J5BBATxnAuf4o3no8dKR9oz64XumRyLtMVAt97oQyJBTeRLk9rsc9hdnZYZ7o5pC71JEB5hTs271ztLzeLb5xbJ",
  "key31": "KqPjVioKJHkzQTL925WZYguV1YtSw897LqyYkZcVm4X82cXqbkQG7Dk6ofGFRj7XWuhQw8MVac6NSdBEBeNNJnj",
  "key32": "XBhJf7oApZRRDu31jxtv9krD76UPsMD5G9zowCuHSmMUjurHrzU7JhV6kUEU1nvjkjjZouKmM1ucC5ZREEDSebw",
  "key33": "UQXCtjThhK1rmgF5Wem2f3eXUrRPGHTnAa8uYm3E93vkHobN8Xqi2jGoVSU2YVKiQXF8aGVth6kh9UmEDY4PRep",
  "key34": "C2VfdRyWT8xajZoMxuNNx1pg7tGnG1kMDTu4fkTGD31SJuB9Les62yXF8h5u3h8qBN7nEjmweNQSSkyy8TxBMG4",
  "key35": "ezE4KYkCiQR3Nn3YBucqDaZv4k6oLn4FG4iYCs9mAnhabjqfFqeVei3TLqj7PpJbw2jHxF8mvBXnKjRnmgmj7Yk",
  "key36": "Z5EBtewT4FvveVPZGYnc7gesi694VYH73rVpmtYdaiQPbq1Zy5pWdQuePXeAhty2y34GLFhBwLKXP4GHYfyoAMs",
  "key37": "5JubFt2hqsMC39aBmHaFJpAPbGPiEiznszCZJFGGH1n5e3GJQw6VzfqnV7ac4zCP2FWLfHcZbqiWYj2ZrEZi1Zr9"
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
