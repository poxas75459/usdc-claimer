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
    "4rVRpoYDnj5xqG26evkDMpdhhDkvk3vWdHSeCVAkPGVUgVjkv39KNumGqZxQzP8hEY68P1w3MHnqR2Cv2h8FrVST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYkcRFFpPU5oACPQ4QEj5RxKEbi5wi5ZdfgcYfv6H6tzd8TyakDFS4KDnJCPkLEYS9qoSL1KdU3QF3ZorANtxxX",
  "key1": "5vfEvhfqPGp3x4QZbnkoDY4gE2umyWPEDcZHAYVgF5byfoFGnxyKVyPPYSMYz9GLroPmGgZ8iZWaNAnaFWNhekTA",
  "key2": "5LqXNqdVcySRGZHLLnPxhcteAFuqZNpeHrAURZ8d9drAjQdygs9JQ7YLeiPZsVXNdtUAHFt6C5KgBTDp26MNhcyy",
  "key3": "43P3xUmqZRxFE694192FMDahNESVSH479f843QSBr5cm1JugJ55nqa13TPTQSiC6YbnCUsULQHQP1swfskjxq18b",
  "key4": "52k5Hp1jPiAiQ47yRCUrUisUHihT8c8EoSu3eY3nfRuFjCcQT29ycpvuPQ56axM2KypkeCsrCbk8YfZHT2AZ3qw",
  "key5": "3nBu4uLaqFr3FnrJWuJCoXSHe3qFuDbTCH87nPvx9V73QoMy3vuPsBqM6zQbwyzoiXN9uAtb8VeET3qqHygMqky4",
  "key6": "4CnpStpF8fUngX6EpruN4W7fXFyuraeVB3FEJmGLURwK3hxAKuDAUuK9bJtm1FKV87uqbk9K4BhSqrxXYQY634p7",
  "key7": "4vaAaB5x9GfjbNuaFek9YqgdQ2EiwVGYfo1HiAV8tL8TR7fsc668yPEWWyS6Jb3MGmHHGpu4yM5czRGPpuXEcVv",
  "key8": "4JMjimStLdraSYkcHW2VPPsrqMQXAFK19LUwv5Ej6ppnDmHtvSWA8pqkQaCvkCNyGaUzrgxvo2gzBt9DbVmxVMy6",
  "key9": "4wkR1mv4JAKov6xPwdXQqfKFgfPp5MEV3AY9aJTDAmyr9y4eVcyYyfxv4FgST3gXLyZSDBGjXZ4M6Snbn3pDa6Xk",
  "key10": "27UeztHgYVfL57xjDgTq6HzBuSp6XTLvQACJqzEAi1tE29sJEK79JS7v95owkLDrKg4rifMMxqGzYSu1wnE6BSQN",
  "key11": "4syf7KFVZAWUg5A7JhsXwvYiQtFLE86hox9EWmzSZkvbggpToM4y2iWM59ni4irSXNXaepED6F5oMkmX6tKtHwih",
  "key12": "3EmnXtCtz54MCcFmDfZEpnBPK5qWhNMPaGLhnmCAEyDmHAieAGUHfQYbj7ZXNNKokUPfV7XqWUEb1yd5LDtAbf22",
  "key13": "zMJnEd8aJ52eYsZo5b94oYsKwWzff6FyLTSr2ui23nZj1YGbWhmsacBcG74tsfKHN7Syuvxrj1FU4nYt84jhhxN",
  "key14": "8EmTjBZALYfuxzPMH16oybDerohX5gfGgsavu4GxKmMdVn8EX5CrHmsfC1Ajsnmih9s8T2jmtBSPtBLPenvQZvo",
  "key15": "33BqjqdMK7uEPAT24HJVUzLLsDpfGQnwHPhCQdbyF1kHS2SPwGfjsF9oVDSsv5WGZCq2JBWqdLrUzpB9onmjKE7m",
  "key16": "3kNkmRAMdxnddWKBhSYXg1CFVvwzWNjCjbPg3gijUeTbU7e6WFbHF4GbzyLbNEUggM9XDpuskQum9FnbHtxKLTdr",
  "key17": "5sL1HEQR3L5u2XPgPY48YyjqA5TiJYN9k6s5exKzJuEDdEfpYPyrwTzbnD7M9F3wyHQ9NVngLQjnNhj5SPe1sBgm",
  "key18": "3jNrKrbCMdoGWfLXfSwmVnoMj2G8qgETN68ZBiYdtZeWq2siVB6da9G6axGpWxZ8geJuuMPvKFh3LNRGtPxRFRzy",
  "key19": "5CZAWv8KjSpQ8wqjzZJz1JXk88ncxG6YrXqdHWA5J7cExsm43SrMVUVrc7HUfEvonzAJJsNhSuvc1SPKVJGox66e",
  "key20": "4bVhXNQ41uJ1jr9sczVZwHqtjYCockF9ZFCfbun2pUuuASphon5pRgbmNVbhWSYPLDmLSRxLPiJ7cf1qpYskTVun",
  "key21": "2yi68XgxAhxVUZQv3YWchBCEbxp81WZWZhEpM8PXpWxDYfNhECyWYrFUzhgs3DkEmJFfkovFXwC9Tui5iaxYmuag",
  "key22": "2DkkAVvwUutaiyVWLfU4ohe1xAe31twjSb1qXX1Ygn8ejMVcgBcd6vg5D2N8RW4rv8V2NVeEh8HnrfmcLgETSFCJ",
  "key23": "p4xgg6Q9LSZn8f1JmhW7SRrAexpsgT6WkGxp8xew618vn2h7DmvKasZ43RsmT7ovnZphmhBMvuGwbWxHRDuRjMi",
  "key24": "5UVU3Gzr6sS1qxeE3pLds787SQUXm1MtaNPynthkCywmPgeuQ5imi9dBFxrMZzBDntjZ75TDoqsPgFNmzxMXRFUv",
  "key25": "23nkZkggiq3P2heeWiGqG5BC3Lsww1quZWErMvpqGbV8T8xrCBLb5SQd3WGz5SKWFaE3RP7jpFWu6gQ65bN92sC2",
  "key26": "3xoAvqpxnMy5q28K4V69PDehSxMJL7Ka1eZyxCneayCS9HJbg8HDkSTir6rUPQrkXdRxXtKFyPBCCNkZuuz1T9YE",
  "key27": "7ADWY9g92ptbdYpRrRpBH1CB1S9EdyRdtL9jUdQ9cWL7E9MXZgXjTfiqGdBxLmqWAmjZLKsM3bpbEWNZmz4pYia",
  "key28": "2EGLm7zsJp3QFLhjDHcsiuAUrFRwAeYFcMDpMYgXx8GL2W1Aoq71Q1rc9T1iAeeNaohx2kFk6PMxEpyLmGZdr7K7",
  "key29": "3GoozimbvndUcx3tdPPi5nrFQwEEdn5devnkunGvqFhvCKmDkpgh6PHxP3ULbuqT3u3s5ZT1Uk5rZNLits6Nk62n",
  "key30": "2RhmTNSfEj9E8ZFTwUgmpJytcmMzgfpfbkHsxxoeq7KqSsqXMmRBofzXq6E4UnNaPgKp9V1FrurNknzd1hbySsjx",
  "key31": "21SG8wTiZSdzfzH4TRteTT1jdqiS4RAaDSFTMtsqyBPeHspAeaMaTBvnTXPB975pXSoC8diBb4waGrMj42UA7kuw",
  "key32": "2zHofR3eecGWaceqVRQSZHFXqk3VvRAQoirQMTmLTfYkPfZ7bLkkQ6KnarNvPyyKFaZnCn9bT3Fvv1Ym32DCR38t",
  "key33": "4vvwcEQNdCtUzUMnWF1rbJGNgBTAiHVxQ31qXpjBsSdT6yeBLvUvwX4WnFYgMHdd7f6EvtQYsk7uuzCQKeTQ1EmN",
  "key34": "5D1kJBcuitmKuC65VbLNBMaWsTYAWc2Uo5HD8QQQ8LiH7jVqPJeVyBaqNEKFZUYuxA9xFSJ87NcnG6qwGn5nc6Yk",
  "key35": "2Ghrf5JN7s16BgDTFckwgVAPiLWdjoisZLE3yFr35JVbnFiE2dMzsNk8UdcpN7ysca8GPV8yyTdRPHCzmEPdTwAD",
  "key36": "24pnEgm6ktMUT1ZKMncCnojzmi9F5wHwsd6Zohsf4mmgbiR5AW1CjiGxUJkVVbJWvqxnEwZDRenYiDsMJejJrJCC",
  "key37": "4Nv52emQN2G37ismSRtNzCzKK1REF61zcJAXErCrn4fqzxHGjAJyFJDaMd5ECvUycteTSquqXg2Jc9krGJm9RG94",
  "key38": "58SFUyazfiKmUsU1rczeVKL4cvdjvqnrBakDwuUuaoqSVLYq8rHmwTdmVbGTfwpZrMmquX3kKjsMjRQ78RAMKq6Q",
  "key39": "4zasnmx7ZBXEuDFzPNxuEcaAuwwT2REHQDLw3GFU9zc3bfXL8x4WkjD9v1sHXsW6yWhHcr7QRmNve1LK4nGdSY8m",
  "key40": "62JNS34aRC3ugDMa14bqnVMEtSmf7Lsxhc3aUaGLiVpRjNoK9mRYfWh8Fj7URhW2H6JSBB5iBVrk6VxxSZLUpiyU",
  "key41": "2uCAkbcMjCBmyFiHDTPC286u1kRANvV4kfY8d6F91FCac6EW2TKVdfeCRqBtNt4LVDveafgRQg2YBqLu55tw6pA",
  "key42": "62BGuzhkn24cpLQAeZ8gZiwHJWJ6Cx3c9PzJDb86qMSM2AjW1b68eVJo1VxG6TJJSyXyaUnMHBnSJboM3ecvFtS2",
  "key43": "59ASbr34s9CMW3AVsYNY72jcvJ4ZM2PJhGYWhLxW9Kf2KwdqAe7Rj5YEqgMdBLKsGupL1oS7x3qujreojp5Q4Gz4",
  "key44": "j3RdkDMstmVnMixrBQHt3uhUUe6xa5YRboaALkHewdNM3d2sCvE4SXEP4J2vb2kdEB9iirNgt5x1BNr96n44quS",
  "key45": "yKvx21AoBqf1RmZnE1KFaR2hP9FvBchgaHAE3raVNc395jMFCFyPUuVTFbAYBsdDByoJnUky9F49sNCJ56xRT8x"
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
