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
    "5zLfaZ1zEL9tWscP1vAVbhZg78whtnpFdEtyTuLXnAiFHSZn3uTonNy5KrcVrTh7hhd3nMZz669cziNkEL2dZw1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMFPuwCbEzxJ5dyjNJ2CSb4w454JNK6NCJnLPmw5bLAvifHvRG3v2FXkhJvQNhAr1adXs7Phdm876BaDJJC5MTz",
  "key1": "4gVUzSzDnPwosyo67g8Bqdufya8ma6VqteVKDWikdocgc2G5soWenR4Q8QWoRXBWDgRmXQtdDQ7tdHYnzUNY5YWg",
  "key2": "5m3sSJ2BvnYjqqVTkCXPHQq1AfjPTj2ivrCTmRo77557DopWQJgYsHPGEgfXkYm8cJUNskVMD9vstrtyzg4cLt57",
  "key3": "3238UBNYryCE4XUtNGxbkRiD4wryJB51nmHQUJc7q3SzjRF17qcLpztsVbBJQamEMpTyLbgFgUiJdBr7GKjQyqQW",
  "key4": "62uHLBP2cvcsEN8pthVJqTqbYwG3xVExdjh4Fk7Pi8xu7A5pthguk4UVR7Y6xu2EhajgiTHpEzWjYckb2Wvh1XPV",
  "key5": "GR4ZWqV9i4h5D66eAGkUsedfAKSUhkBrrqwoQ5hcLp8roX685tWuab2ZtJXXMEdrt5mc9MenAPdvkhvQ173LBN8",
  "key6": "8qiQak7xDTs72dygeY49BAoV14M5PzFga8LWRmUenjn88xvv1ijgPZQqpLgt76HQiKHbXknUEUuQ3359mDzW8CR",
  "key7": "3porvgWNUs9YLd5fcxTxdK531RV2he93AZRUaFLRuu4vnBcMfT5WNFKHC8Y6Z2RkRVT2YYPHAFXYs7Xjxun11MfR",
  "key8": "5UKxQawsVMJAKhDdYsTqXaZfUYTGikmAefAB9GiUbHrmniD5WH1QzMnTPE1qRm8Neou6sY6WqqKPxBS58uPQtPVr",
  "key9": "5AudYZafAHBLGxj2jHHcqfeXLEzQ4d1sbz8mrHkbqubq8vo7rYmA8PnaXtNn9VrG8LPvgrCNExZtJBY3RuVvktrz",
  "key10": "fUS4f32ekvtNF67XyViDbQ4Znn43wWvuppswG8S1gPbBYGQHFoExWgZV1iU2U4EJ8hvGDsJGVHhYsYYbTSY6yD4",
  "key11": "SKDbnwJ3MVs3MAPCZN6cELyCixkm3SoBE5C1zeKczou3AeWJT9HqXajD4VLLrR3eGTEd9EEjsP4dhfppHbEmbrQ",
  "key12": "63w3CnQb8JeZAig1YPsb5ysQHLGuhX8AMh8PQ2wkGQ5gcJF72QV8apD51M5SNHKrpwDPXZqSFB9RAB7wTrUvtU39",
  "key13": "5asfCawV5ujMUayZCBKv7PFt4LRrY4gz6KvmWZHehpwY79SZqQonATjB1hQeGB9WYmY4kJijfPkr4GpMu9JxEWyh",
  "key14": "5DZdLx3ecVfvx8GjR226T6E8vGqjVNrFiosE7gMJJ8ZDX5rwLE22ZQFWRm5FhJdiG3mi7AtBxWN5VMEUC4wycSDM",
  "key15": "kqAkh73HuYfxwHNxpj8PXk2qfjawabT6fSeguGkkYsDKcHnif4uggpf6XU8tXQJdUbdLRpTomuSaa4oEyNEnyF4",
  "key16": "4KAg5XQBZ6Du14fKieex3tTPQFJg5gdqzqNsjnrvKsck1gum94v9vgxL2vfUqCXG3xjkcEnU3Svcv1R3HTT9q9x8",
  "key17": "5Pq8uFQKiK7KBcV6CMG175pVNpExx6Fn1DoEFgX7ke6iMygMjpKYXvx1DmPAJUGkJFvyDNTEyufahx8vUnnyPCwi",
  "key18": "4ndwWKig8ifc1unSRoLUVmhqCnkr7BUkNRRJEnVhuZZP89tBipukr1ALtDHaJqCV2oRsrNHYiyCqt9n3AKeR5J6i",
  "key19": "4QyTUw7rPAyKrF5yDDfE6BgXGQRaZSa3B5verQ5TknuwYNY3yxpqZ2AcwprVAcrR3GNQd7cRJnvRtJb3pTvgZiTF",
  "key20": "4L2Yst1K8YAVuncZqnKDX9g8aoYcHMCvhhK6xL8mt6PyiRFejeD9WaVeoQxUoLBdf69dxHnE8i1GEmnQ4ozrwHNi",
  "key21": "4cvzkCwNTsuLC1WPSwg6FU8LDxFidvyj7qDv24pu5ampAZeirNd41nKiGtgxHVswrfgdPZJpi7fss5KTjy5ycigP",
  "key22": "tAS2RAwWvGN8ZScJg7pCUJqS2FAX14vXtYkCaySDseUzp4bPhpCNK6mqSXFejeCNKknaqFruiPHGe4Vkhimo2uv",
  "key23": "4bfva6rExRr28m25oYVg7ePeTh4Vj88ZrD5TrWSuDUovAfE7R6AR3ciKrxAae3gA4jhvfCwn1ofGt3WwdzqBYefN",
  "key24": "62wdEeq3FvZ2M16USCsEYUZnPKm7Hh6ukmsSmw4aZwNW2zawAo4MrtN8XsN4qS3GAJ5rsh6pzozH4pHdeQecKrbQ",
  "key25": "3Gdg91TgntsdEPmc7gCX9qT6atQj1o9ZAxVykfd2xczGUcnH689U8iUFApF3cBtUw4XsiJu8PncSv7RX5PHAu7Rc",
  "key26": "3uVDztv87fnCrVoonmgc4JLXrizMoY6tBLRWRPHunNbgjf7Cg6FYztedp9Gc66zkN2mujQKFpywfZUoRgUJYaUhi",
  "key27": "3P688YQV5xaso34WRGvsd1JVx2rchsDja9Wt3rcYchWXFBz6AVkteSQEYiwprMP2zw5w3K8WaarBdGTLV2H5t166",
  "key28": "UgboGX2wUFJWaqEtoai9knCNMj6oFGZQhy6gFpwcrNHMF4mcFgMwWJ5HPp5UCEowHpRvvEbjkQg2o7JeQ2sgzWC",
  "key29": "37tf6q97TUz3oQ2sM4XP67n5q2on2dKQC8bT2yk9ktPqXuMSgxbTTgmaNaAUXAXUaLP1CmY4MbcSm6nKzUfjr83Y",
  "key30": "4942BMtbTDY7xjBepjfcHnkus1yCsywBw7jBsi8bRfpDZd29tN6LgcqY2LJ9F7neRnn6Ln2maAdMyBo8Z9dBnvwq",
  "key31": "58xS7CqkPJUn6Qq8tehP6jRwzdMikPpERR5ciLrizb5jdQ74m4zCTprkLxytdY5Wm7nD1tK3abRMXC5EjBot3N5o",
  "key32": "25zMQFYceYexzAqY2HQ11QTGb2fSYdspDte4DVRYr7L23bb5dQtF5CiMutYbQwhLycHzvuJmxzwH2mzmL8H9FRoK",
  "key33": "pfgsYoXkrLTDVhjQBMaKXmtWqUccYdacBgt83AFUJ94ff9gGUkh6iKtwExhKXXFmTwqzUPCX3fTKm3bBgwBZUve",
  "key34": "538JWWMgyB7otVc1wDPACENb8kQ4psEBChPrHbMPEpHeefiLjETbabx7shpcyQzzoFjKoQgyZj72XcAixuNQMEmQ",
  "key35": "418qn4rZaQoPhgSVLQBKy8skqHwEQB56YrEnT7GY6RG98bWJ2Ze6Qt9VC5MWJEkdznKGdmDZwSwsX6iJ2ecNDkdn",
  "key36": "ksrQw59LmKmMrzDCDPRiHPy1fb5NHW2Z98ZMSZQD4vwwWeWGJ45zjkzHNozKcAdXnAHUzyDFGqNtkTynhRbWvRY",
  "key37": "LeCgP5gU7jr732r4GXeYT5U1uqptXja29Zz6wS7wSpgAfav65XBznQk5u2KD8LAxjJ2Atf9yXmrtxsZULo1k1TG",
  "key38": "3Uo2RBNXqcFgSkwtkPr3ctaTFFRuK9E9kZ2kd7Rwgt3Y9seDrBuoHeuG6C9Luqrvj49ajpFSE7jpUcaNHcmPiy4n",
  "key39": "5ivDZDcmTNUUgA5Crn7CdToNvPAihgaRdTfUmnrr7kqe5Qf8GYh3A119QWe78hHtMVH7BP9HizGN8xvukiJirpxk",
  "key40": "SaVxtdibnLBdMCcsQHMTEadpckwh6WmT8UJ4sh4k4h5As4RJ3h5B2CgQoi151ANCcfZ9WuB4rNkMp7qh3w9eVDG",
  "key41": "3mKVf4vkFutYmCiVGsdbVj2Q73fUMy5W3sp2ThAsQnF9k48tJuhUGUYBiCokzuiQ7g34PhpHGNZuhpWXdDtxvoBK",
  "key42": "66hCp5D5uDy7rGwt5tYjkM8DftpY4afKxvEgVCjqFgFA6wijZtXuvxexwxAGZumP4WmZmL2CVMCTBEsZHv6XZCHR",
  "key43": "2bQNFPg7dZKf3nKmb2tsScnoLvBko9BhV23ocbNbF4FhqgpsS4Rz2iwceNLwYhkyzkf3wXqNzF5yQbP7zfWyTyCF",
  "key44": "2VSuG6VFkBCpZjTkkDsFor4ZwcrTzNHtkKD6N94m8u4Ykq2ivyeRaos9rCPm9wVVKisF7rYjToqvYUPEtpDyRrRR",
  "key45": "WqJCwpnDNB8B3FEKFogwUGDzZhjzzMmAXdQj6KWFjhU1juwUGZRnwfxWdc7rqpS3F2m9tuYnmBDQcuT84MVitJh"
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
