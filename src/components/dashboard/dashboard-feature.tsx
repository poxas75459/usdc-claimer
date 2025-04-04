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
    "3bYWmG4mnX8fqaXFpZsLNvXADGdh2q8gjhRVBVvKFTjNj8T4bNvfEmfsAX9Vv56wsiUXE56TdDAzLJywJ4ouXDmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PfXrByDbUdGfA7utf3SBUhRkJGG6zkLTfqNHhy4EeM5idbUDmrYTpACzJmsUFrNJMaCD5AmVRRLaEYQpaW32zax",
  "key1": "5qwYpoHvbJqBdLZA5uxhH6wVrzE1mtskGR4EnmEGPL9Xyo9LrjhHoCRqonW31vzbyojkKuPcBmqcpRA9PF5BARdy",
  "key2": "4i2THMQtheaswYS1TQi5khWK2XJQfVtsBhV5CaiBr5UNGgw8r8xfw68TME2QSDfSS7iu2YzKS7x8LBtGjrc6gfyu",
  "key3": "26V3ihjztnzSrh2B991YETXX6kG9owb7cc4DRzqsXpwA6X1jrKU4Fo6rDwBCkXMHJE9WoicWF9XCYAGMH27XqGFq",
  "key4": "4RGEbFsKE94Li2PDEtFuC4xRQAeLjeCcbG2XCoY8VvWiNyuZWhg3esZD7eWix5pWZnMRiB1FCMuXbaz1bEHNz6U6",
  "key5": "39DmVvbMW4r7fxc4A2UiAwGREowVBa7L93eaDrPzbZAnTpAFb2h9VkPGmpLm2f6gFZkepHgLTi2iGAmwTMyWPspi",
  "key6": "4frzHuTDs2vdZEbP2NuJBiir5MGFdFw2vVvJzFN2FehSGkrWRS2Rk1EuyWBVcRy9rPtHzz3j1ugXi7p1DtXKbobE",
  "key7": "3TJxVHZ1C99sbxuxWuhNyFSBnFaU4PJtBuuaEHtNPtPKB7ccnVx1LUvdu11LmhyGA7hjRJrLuVbD8TaEZPNpCmwY",
  "key8": "3eLrs8PBi43ofuxDAcN4VZ9gWpVqr4fA4jKgUdDBJmEox8v4fpUCetNtqHQSt9tEqjibfV2DPXVyEKAf5NcuvmMi",
  "key9": "4Fuj5Nq7FhXA8WKAfKGhAZtTm9i7QnUe1jpa6wrtVKgtLT1gQ8EBMH5wLPvRSCxw3HGrCVQaC7rYX7URqbPf5Uks",
  "key10": "42oL8XAcvhgHPwhCgDuTzGHCZ8x7REJ42Acks7GvGVTKhiLurbeXxA1ZJ5UgVzdJWqQEMPoh84ZyFtw1fV6B7fHj",
  "key11": "3TK1QjGsfRKXYLmxvzF83vHtHfgAKj87wDogAnigqMsf4RULQyVG5TTfUsbheaUeTMPCdUdFd6gDrjotF9bPwGGq",
  "key12": "5dUxh2bFA3hFkkqm7scdn4KcLqcTGNpeMDcCY5H38TG6VVUXe5Qh7HGhZMXayhmBcfVEeaQRq8Ph6eMRA4mHv6uH",
  "key13": "4cKRu4Gimg1vHLjEruc8HSBkFGHBEUhkdK1iJkjR51LCc8WVKFhPB51qVqxvch7MywVhomBpQdG92eFEUE5asL6g",
  "key14": "4ug5RCptmd6Tw4cMpEHWpE4dATTGFvUJ1aWR1CJav2Qao22i4ZHzuxx9e2WPfhaB4mrHh1VNDy8KssbFPXarxSoR",
  "key15": "4otznFqjP7pAco56hjViRdZBnE3xBd8o3YDXJnAZ1z2ZU6eeveeTqERRQSMy3PUTKpw5aKF8XZ4fXVMGq9uKz9Tb",
  "key16": "3qf7YUKgtCQgsojD9FMSERUMHhbay4kjg5uBXeKoimj1DCjHxUTwC3kkYXcQkGUkdxSpHe4WcanZxUaUFEow92fK",
  "key17": "22et9eRaXmCPUBrDCr8A8jUALi58973NtvZq43xjeeZanxw9drUBAZwRSFMcLw9PQ2U6odWcDMrjoxBJwwr9Dgr5",
  "key18": "2Xm1eNHAKEvAtzUDDgdMizqKoV5hSGcrjh2jVZF57rf19dUeFkHPKVUQiRshvMXdfVgprobWDqsV33Tc8TS5FEfo",
  "key19": "4p3nuThU6QaLPppgQDNzAM8Kdi8BAnMde5EQbx41PvxkCAbbobBJ2APLYwiHbsijdt5whDTBk31VEAhDAsbkhLaf",
  "key20": "4FfT4KahBdMp1G9fPew5FFSG4xvkymkVyzYKTs8ihXayrhQuhL8KkTJtwVLDJusszhX8zEDo8VncwmL5UkBaXwmG",
  "key21": "5tneqUF7JbLXLtaPxJCk4HdAkiCmqtq5TTV31CwUBUceHaxzxrekLq7TK63X7KqSwpkDrxTCdrsmArEn59nmrjjF",
  "key22": "5ZZfg5M1eByTNhVpUh4h9p4ZQQ7BsiTDssmW1QXvQ3Y8vapLtQQt4QeUcqHZgKewDzC9HatgNPHYLcR4iC7XkWrQ",
  "key23": "4RvZwX4nJRfUdKm29VAok7AcKNptnwzXWhfqpMeGnrpLGxqZkaJa4pCZTktj5Tf559daQQvtvXpQpsdxUKLg3HR4",
  "key24": "2ZQFH3QhPna742CXydp2ez1yFHwC3qJYtMiYZ9pE5NXoBHB5zG6u789Cngt2MEdvQu2yZedYTPxFTFJnPZqANTZb",
  "key25": "59mzyXt2Br6XQSZSpe7negkiUjZNrn4Hibzhz1a4E6dCv8aBsrCWUezd3VoxfvYr9DME4zmAC6N6gmkiRVAS5Lya",
  "key26": "3b2YjBcevKSUMBMVnutfPtAMLxxN2iAddHkms7mcwtmZmaDba19nGr39jaRgP3ofUbLidFbca3JNgvkJLqdyVSJL",
  "key27": "3mcYzrHe63i5pkUQb8MPM3nyLhqfrH1268Xc51LszrGH8PZGAJYywfRw3Vy6XRpN5F4BMxQDtoe1nZsNzibdmBN4",
  "key28": "2MAjv2zSWjTX1p3mTvN1zKvqx3bB19PpbKNyGVpA1F6yeGZa6b7csPLwyqWq4ZFx1DoBDD38n9zLDf8j75bcyKnW",
  "key29": "4vUm2gKwB7cJnL8o7wUcDMs8Wpw55o33sfLpBsFCiwo8gQQkD5Svep5TQHgW5xqoEy8DUPU7TYr3wkzAQ4D1Z22e",
  "key30": "3MTwWDiFadGQnvXackJtouMoY1WJMk4KgwxqSDJGuCn6Z7CL7WHkEakPwzjEL5ZHBdn47bR6mnLCW7GuTAAKQfxJ",
  "key31": "4FZmJBjtKbriUEBBEQNeUE3ydA6kooJbfwC8Mnv5vKsR3GyYxpfkaf7G3KTKZYRinQ6x5ZraQna46EkNsv8qjPJ9",
  "key32": "jWo4uVa7vU1DWg8BfP8GdZwQfNfKCZ35trL9PGfZeGqWF6wwVdKRxnpH25Tj53VCYaUR8pFwByCbY3Dxzp1C9qS",
  "key33": "5TrhBHRdQQMXnvBADsBK41ay2y38TXCDzhzRvDfY64LoaPiBr34XeUYyiBxZ7UeSzgcYHMJPbLrYqEXa5E8z5m6f",
  "key34": "4YNs5r2hRw2VRLjYditr92E1mWF7Sh4FjNwFmt12gEtMvM5cmMYfczsf1DGXYX4mRwNWHFP9yapoNu2WTPYszmFK",
  "key35": "4QeBbyUPFQUnbAe4zUYJAnFEHwPY8DLLbjTuxJBm78cbuLKZhZHEzKLcp68hyuzg3oaSF4n6ysfhKPTmkM2xMiNW",
  "key36": "4V9QiVndM8rMjfaPoQLqxHh9AExuGwuN5VSbNKYoiVJAxSfbEFSr1BrW8qRLqZrv4wPtUFpt4HHwFPjMT2ERKARY"
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
