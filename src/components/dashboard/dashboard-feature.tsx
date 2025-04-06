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
    "5xHJVixUepGRapMMtdPe6BbEYxC8eWqUNQHEymUtjgT9WXu8Ly7T8xkdQP43ZfuDaAmP8sPXywW27zUBNBy6yAQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26vHtPsB4MX4VjKrsJDv5q9rzMaQeGhZy5knVKhZ4r3Dw16tQ12AakCugtyr2XjtiUncuyDvkb72E5sc4obMHh9B",
  "key1": "4KkonuStZPD2JnUshK1bTttxDznuyaAQhpHqdEwQ2kRnnvpFAjH9Y3bXSR3SWZRf2ADTXidnixgZKPMJwbikeD2s",
  "key2": "2v2cg8yV1yZZBcqVpQLZZ2kwPAFMKSZRhnrkHn4F3xK1yG1fvX7uz4JyFzqrPE9gxy9reCX3QxWMgaMLNa4PoYXR",
  "key3": "vrZ3Sw8gaMUAips6kwQe1CrR7BfNdL9bYFxpcz9xvieyzurnYdHf64R2C3Voejbb6z1JhtGTus83UrCh1NjpW34",
  "key4": "4hRrjuNF8KN7Ku1MKXu6fuZC1XJybTkdTwQxKsh6anf848Q8KZVvMidvXS3wbKbxJ9epnFWNBFREZq4Gjmh8dH6p",
  "key5": "3j1SxfkctM77dpzyQDCWqonB6XfhrWvcgQnRjR9QsfMaars4N42jVUkru8ERJjjhwM8R9jNtAjhrNEmcxv48bF5x",
  "key6": "3E6TKo1UNXjgTCVz5uk441nBA8528q8rEJqrSGKmxkksdJfyXiafbBcqw72FeeL5mtHsqKm9kG1Fro2CW85KxnCx",
  "key7": "444QxTuz3CbozSkc42KeNqK1TUxMvkHo7T66EB5e3RRSw3tMpkgRDM4PY7MTtRZBrBs6oaR8PUHxaj3ijQWsU3zB",
  "key8": "2ZwbjCD7N5zYW9su88dhDjZvfGCk36zpnE1sjkcuLotYsQpAJAnVbdhy4zgEMY4HjLTevvNe3fDiGtr3YFa2g7DJ",
  "key9": "7i8NJCrR6U9Qo8B5zeBN3uD6osFapr9bgEU1Z8HdXtL3ASMQZfS6oj3GQWy5JNMd7WUEsVu7RHccVdPkhAxfczb",
  "key10": "23XJiwLosKTeDXGztGmZzM1oJcAYtsB3mEehN4NAfiY7jiroxaiAoY4DkfgQtRw3eAGuEQx9uMTEEYSaJLH2eZYS",
  "key11": "RDzNnDGJgPSU2XD9ZabkUtw8sJdPtt1fnWVBLPyX1xheixUqz4npoCAukNHpPRL45sriamgj49zjfv5LFDZRZv3",
  "key12": "33a9YNTGTHWFYbrNQm5ddVPA4a2jR8X6vG6zzapJQdkAzcuff6ifEXs7iZBGVsJiFLMgnVkV6jbiBUAH9hiAhntS",
  "key13": "66UvfX7SEaEBtfhDbwt7uBLyXKnghs8XpxFqpVp1geCsydTcBY1oDvRP4jkpeVK6dzYG1b3iZq7taoKcZAYsBTku",
  "key14": "3RfFEcuj96WJGUEd1qqeQFqQuJEeKAo74CKM8jFvKnjaNqC2hNEhdtTCUQcSk75J9juMgAvzQkoRNtguHvLdo6xn",
  "key15": "2sSZ4o6DhjvsRnkiJ1eWx65PegFJDKQq25qNPaLB4WiTGDwfG2ibDmkmDtJtPuMy8zya4HKnQUeXSsE1TsdMnowU",
  "key16": "4QhryjGD8xRZdkFGJbSXgR3nUpZQbTJmKjD2sKpuNTBaUUYTusAsDJ5QpBi8zQfBhaHKxBJHiufjoq58pFKC7hZR",
  "key17": "qHBmajmntJkBN5SP8MsvexXUjAAoTeHbb7rhhc5f81jhCJewC359PYGC5UZX8UNBXyLtGxnhd1xCDCLT2yachoF",
  "key18": "37goRv3EZpqxXvm9HCSpbu5xt6YvSupSoEeFw9cZZPjKixQRhszmrnQE4DAuERxxWVzHAER1moAZX7p6QDXAkYXh",
  "key19": "53ui7rKGZq5HRGxGZzL95L2GAQeqC3kBaKiWkoBQdkqSEwUB8x9WhiGVWzWW8ssDgMLVH8RSPvvv3xoTapvA2fYW",
  "key20": "Ch5qkmxRAF3gQ1qiq4R9kSgeXmGM4ntR8LBFj9ByeoxhkcJr8tqNkMrgHru9FE1DPAXgZzs5AzVmYK6BpBj4z13",
  "key21": "XqSdiYwnHFotz56uxrq6eLVXh7Ux6Doz2xjqs4hJMRBzQ36DsM2riUBYYxBLvwiuiKCESSuQFobaTuWWrsMQqQZ",
  "key22": "5z2ScQ1iG6K1xmdo8gYv8j5vXYiRMCXMwBT7kdBCmCYFExvHydrzBRbFyPnAsTbKrzpj6vDUGBHQgcq1gTSVt5xz",
  "key23": "3T3FdAu8euXyFtHcb1gceKQvciQFsAkV4Uj3YmzYL75uQLB8srowKK1xEmoGEBqH8uY7XGepn8UbfYb1g7Ay8F2z",
  "key24": "2ZYahhbqS5zhX1D8bbUHr9EyWi9oCBSc3X2Z7K7NWZgFL8kWgUqdHEwWoH5E8xjVKJaEvvPKkjP16NK84DE6dLQo",
  "key25": "3EXB2MVkKufG8rpMYfsudASHMvXMuBdwi66rAE7qH9feHgcDrbFwUyJ3bFZ7v81UdkX3MvYD18UwsWD6myv1reDP",
  "key26": "5AUZ51G9VuHLJ9B9vTTDe9ERn79pdm7eiVuyN5hfv8pL44B8oYRmSER44MnotYVyuw5fmNdjjZ54vzb7AqGXNus7",
  "key27": "hRy1EaowwpkAwp29ZpwovY86ydZyccAegYEB4eP3hY2FMZRQymKtCcSbNcxW2KN1F7PtkH53KVofZwbnY2cSwdU",
  "key28": "5CqDghxe7VAXF8mwVCXmqVpryiZN8eN6YDcDhAJhBttmQS5gpVjpJqvmMFDLYxgfmSjEEHG45NM7aJxXHrQkkjDt",
  "key29": "64XnSwm4frQV8Qj7LLN4uPwDtdNATEqXNyNx1NjVXr3cT6xAHiBnazBHxkRUK1h2QCp9uBoEoTAYhkJL7xRZAQom",
  "key30": "4WZCLVhUaEQA49hSiLGv9DTPp4Wx4jbnZQ8feZwLYcAJmgJCvpANHehzCAaK8eZqjpVnGQDM8BjuinfmHX1mKUgm",
  "key31": "65LpUYBXBpiUGrZwUNavmBBMpHV13BJzG49FJaFbvyovBTJDP2BEhpZUqzwanXpHDrTkCbsHbjCwHSTaekTFMonm",
  "key32": "2j9smohQcGfcBKtSXucHeKuYpNzTddq12bffxUBWW7mpfiZ9zAuw1N8YEg5c9eSZF6GijTmoj9mfyeF94TsSj7Mq",
  "key33": "236thSk2SYk1fpw61kQZ1yEwLjSzXsHGyDjsVa8rNrMMqYcg6WuKufwykFWqVvnn7UnKR5x7ggBS5DMtLtr935tK",
  "key34": "22UD2ffv8ZcZ8ZBRwbFdyiBYET6xcY9bEKiTeQD4S9h9hFaGdQJEhsM8WJJzbrNUmunt5xsWtFff3HFrirztuwCg",
  "key35": "2eyFAN5AGdwXPsdSR8t4Uj3XM3uesKoQ5mXHbBkYA3fHY8mvnR8ZwJi96ZUQ8GXcC5xqkR5jpUDaQxFymNdcwMBp",
  "key36": "4Qo2ZtDEKqtJH3DrGJ6bNXrGcuBi2aduqoByTVnSs3KdDi7mAEMDGY1zdEsKKz68At7M6zWKaPWaumd2wXF6v4g9",
  "key37": "4E494HvpGBaS2KpFc1WDREqPoJuTiKc3WkyQd1MXqZuk2MXV44fXv2Ejc2Av7KfH3hhDJ9RdZWWKoMAzp6toqvSG",
  "key38": "5dM3Zrs2kfYj9qzsgmcWELEqHybtGKacBK2uUmYezM5QB16EKfhhH4EHfthUajgxWWVqz21Ap8haLJHpvjrndiKA",
  "key39": "2k2hNsYHWZLdE322SLmaDQZyYafctFd5JaVq8s6Ccov9cvgtmjUjQhVEoLWmpuDnX4edTdSYpG1LGhsGR9m53nB5",
  "key40": "53qnxa34FjVrLUe13WKdv2X2tLq2LC65oUeKmqnBTGQPm6D7ySkDwfm22pvMy3ZBTb4oo8UgawbFZk2mEm6EWhYy",
  "key41": "5AthWcHKizStqPUQ6SW2EjsDAsTgQhM6ZkZtNjfoX57tjQZuJjbTa7L5Y4KRuuVbqmWPtYKLMw5VLAFXJVMTMzso",
  "key42": "3G5go3dFTnanZzGbpT74Sp119yFtkhpFZgWDNNR7zuS7AJg9gyBPmemTqT8ToWS79rqXKoMDRLVyXVGYWSE9zBKD"
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
