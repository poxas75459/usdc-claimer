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
    "2s8NnPD7SA72c7Dc8eZ8bHp4PRSYzVvcYXyThkgdSuKFoMYY8PSWRW1uAwTHK7ZFYAsRjXgbSgQCc82A7cD2tosJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXxwX91eLTffenbq1L8pvi4vk8KzTZzrjETyWP8mZBcLz7JpWxpTE3Xd5kShsDrP38tZcRcjkK8WNRe19Ef7hLo",
  "key1": "2J3WC5iubiSZNhSyWk8uAeaJTGKTBVdpNTZMzhbiHMwZAXeYCVbYAf4N8n4qkUR85UWrwgtLvmxRC6MwqN8FyVXB",
  "key2": "JBzjdKYTuTtdMVkJfVTbDmgi5YmGPnTjrGto3SA2vE6UCk9317F2VNoeb7ZVXBxNfBMpadKUouumfscZaWysjrJ",
  "key3": "3axFz2WzyotuidHNk45bMiudGqq8p4TVfLfSLWAB2TAJcRBCXs9WmU9acRhYcaf6RQmpNNFSjeJCjpbpsCHZLUSP",
  "key4": "5myiuu84x3uNsdNHRKFhDwXzsAh8jJWvvMYXgqURdg3nmkQUygSaG1drQgUQAbcg7QopWX6XBRKGJZx8d1etL3Eb",
  "key5": "u5ehxoXyJy9MrjUUnrNoGkTUaYagmKwriJmihT5YaNTPW4QaRpWoosL59Ew3wMCos896Md9seZqNASjqzCkbyC3",
  "key6": "2ZMyCRz77gfwGVcK7LNq7jtcrxqaQKW9QUBFa1pMbbVwbpz5D5TucQw2drpt9k6GY5wxxf2eaXRGLFGVpKqp1sci",
  "key7": "QxZsrWKZiwGgHtVJCAMKtKyam1hya1MpgZuxGZiiQqhD6j6PmJBtREHPTas2unwRVjCBfe5HMJRrkXDoA3dTbyx",
  "key8": "4JGy7WEHKfek3Q3ivPBaE9zKm6m1skHstzyxT4uSNrxFvPzybAbrFTUeVvtvBKJN1yBvCyjiGeRmnBFqXTWsPzhW",
  "key9": "4iFEwERZDjRTQLUQrSa6h5agYdJfZPfbEaJVB2gTnWmagsYXhRmJ3mrDnrdfAS1KTjruk2rWi39N8fFKBS5FHQ7K",
  "key10": "2wbEicoT9pCt8msV2aCK5XbKPxWCqYQqk3YR68BarZKFssD9Sjfik4BQ19WwLDAQ4rvYnHrHQw2GHFLm5tYfrkjq",
  "key11": "21JJA9HDw2TG2PtLhDHsM3GBJuYSk8CEofret1p3PUpbfZQyWC9pFxmS2isjPQHEPWPhCw6nF2bEjS9YYYQmQd98",
  "key12": "2vTYALH3sQMQGP8UgvvPREhqkmkWaKC3rGXaqV5W4sccLx1VZUhpJb4JjgKkajkQ9vnrdTBvPkZSMNUbhhVnvPK",
  "key13": "62mnFkqNgjbLFZTk5iw2L5Py2ioZgQMyD86s1BWFGHFYsg9DLZcDqtEx7Fp6d9PPw1kdJgHFV9VNNGqQ5k29KfQX",
  "key14": "5iym8kiJoCEU43HwpRjPFb9neHQsrUu8jDbNgmMDj8KuMjcgiDEtvjT3wKWL1pooqMMZoGS3WCvs1Ud3DcTGdvd9",
  "key15": "4nckJf6ELGWvg1tabfhJJV1K3P2geQQejLceDJDM6tP6vbUD7Dggcncmt6ak2J7D67dCkixznynMcogCUtN5J8M4",
  "key16": "5roYQaV2pwkn7XQhzRn5J49AKmsAsqcRMDnNkJFMSrZypNHd8yQT182U95NmwjCXvKZGw2mAW9F84k1X66mMN2iG",
  "key17": "3YRASXhwPrh26CLV2Hg9y8wFsJaddZztyqQzb9HoDJrBWJSNB15oDNRfrSE5X9258j1SQ9iLT4RdgYzABXHnt9s1",
  "key18": "3GEaHHUVxASsGp2xQR4QapRE7yjgNR9NGLjPtzrAWq9hx7nuzNEsySVnemb4uwb93x4ctrgwpPVztieANFWnYdTZ",
  "key19": "DawaieuUcYMyhHAT7edywSjtJLffc3kG5BZ9rLiVUpQo8MjSxbEwXLouJSeNTVDCeeQGfT1iz3zxgoUP6RkBJ2q",
  "key20": "3D8PbAsTFs42FHXFn8CiXbH5hYpJXgVTe8iLqFSBmCpeV8AzDzcQmwiQakRSscGULXkfb9u8YuVE4158qYPuLjeY",
  "key21": "vrK82vgD67d2oRGeRyLn7Xar7rBwquzjq5rtNJTR4uM8YoqJVAnXwK2QcUSkzDbiYbHJQFo54W8NNc1v5C6XRPh",
  "key22": "5cnHLCrWgvtr3YRJHVvwLiQFPmqWnDopHyVQnUsjM2HJmpwUWXiEbubkWCuzZAtPkDgEtQkfTDn9ZSxh594ABRS5",
  "key23": "5eYyTeZ4EBL2cHbVoGGEcqjV67d5CrJpXcTqRU8UY5qW74dodBmgmiKGHPm1XGcFpK7prirxpTgrsD21DTtbaCWp",
  "key24": "oAGqmxyfrHRbBdRQmSkFLwtrEAKSSPY17n6inXjP7Z8w6JErJSaiTErU3iXmRrnrgYxdwqC3X56mzFjg4D3vF66",
  "key25": "2hJ7UKGVpdhvL96EhmnMk8mCc2YHYPsUr362YFjMstoHccH9fq3PQdLUrF9PhXeeUHfLVWcBFQwiMqWEXLL87oMj",
  "key26": "2GjvCr8P1Ms275tT3o8gvvNcLLfaVRmXCkANiFDmossyBZo8j8foyhPZ3GWtMEMLP2RUNsRLJ8fBRthLU8ZbK4Bb",
  "key27": "4Pc4jhpqmSwV3HN2xqvSvZfZ3b1PMQU5qnUdbHfxZAPja3Gwb4AAXsBipzmTE9DUxktZkCgFLrZqQhBReQws6NeP",
  "key28": "53VNRTdkWhWXepKAursNCoS7ZPb7Db8NQ5MGW3Cu3Z7wZaHiVEiPZy4DgucfP2h3hmcjDfLViqfunjLTxdCANRGM",
  "key29": "2A9VUxZKDpSQyk4GACpu5XJoznDkeMWmVGcvNggmq8bxz6ChybAtEeE23Fae68AkLBXAuA8sNuLzDQtkD7oDZYM8",
  "key30": "hi6Wv3Ttiy9cjkUdaAH3C1nmkkqp5fj3EGGBuCeFsP6dkfSoJyzbgFf6iKiHDEcZureV7MKnqmmAS54UcdqN1iu",
  "key31": "2vnk3s3s99242UcLNWEtkQDkufbpMq8eTYFpuYN7TReR6CHVMAjM1Bdte3wVbvkTMBcUp5bCefiekEt5NnxS4bvk",
  "key32": "5rRhX7GHfQBFRKfNRngBLCev3Ktx7jcRCFhfYCjUewwmy5YqAyTov5VwGxyN1XvL5ipounu2GbHVzexdCLLJ1tou",
  "key33": "2H5CaeYd68t3ergntNAsMh37xTudDqdFu65Tagg1nbHJuQFjZtMucZTjUY5ypoLEU9iMUhGVfBKedkGxWFPX9ScC",
  "key34": "vkahW243p71iEne4WfbQAmqYx28YLLR7nim378pNngdd4JjQ2FWjozSXAx827wgNy1wt2b5VWPBA67dDwbsSWTU",
  "key35": "5K8A3oGjmmUpccTyZEbU7ydYnwXj6izAkqLrQBxY3TWa4fNk1UNq9qkuEBg5GQ65VeSXFSKYDkBY7HBSN91KXCvh",
  "key36": "24MGbDZxUpiFe2bupbM39NKGWwZe5DV3bFEVEDGCaj6ZPcQzfCot4f4ksWfap26VgL73wGFXzbK211N6BNmBVtJJ",
  "key37": "2MF7iyfDPPLcdbpPDVUvv8nykGhj49rAFcYbwiDaiT6dVbpir3CDqE41PRdACNn2xCVcUkQe1Uv2jidvAtyQjRAt",
  "key38": "5oN8KhDnYwnqXHHTEYRFx7hr7aDNRvokipsDQoT5HBLpj3ExaPqq9B6UzHNSpfEaXyx8J5SDqRKB3afETyk5HyY2",
  "key39": "2ZuWDzZevXZFhWVSB2abBzuHU4xZwPDC2szBLrbCcp6FdgbY3y5SUFjXNVixYtSFjCS9akmzSMg382NL8SwwX2DM",
  "key40": "4DBSEemUzhgiuBgozN3Eh6URw9PezjVfXaQatm6rLM3k4Aw6T1fMapNy33MC2hHb24hdaZdd5mJ6xDQ9H1dqZzdD",
  "key41": "2beoDaRSZiv9ZvoY6V6LRNpX7XmVRnqQ4YQQ4Yvz7rjAdCftLUB1k3Z8qkiegZnb6MafS731p98w8qWoVDTQ5boZ",
  "key42": "3WKQiQxJjF4RHS1Yc9AdCbU3NbWxGoHAdZ5mSLQeeMnxjan3p7CxUBBevBLX3SsuHHMG3jyrybkxbVS4pJuheAvY",
  "key43": "2RmNHsnwh4ZEAugtGsrto3tmk2zxU9TcJVe5etgA8zMkRg5hxRnFESmqPuJiWXoc28qPjhH9kWxW2qxCY6CSyekz",
  "key44": "2xNibiX7UGDu4uXLwfwEdh7qnA9z9ARewQ4KHGwYB7mi293PagNAS3DzF9yYr9BTgkom8FH3o3yYysnFoX68Xswb",
  "key45": "1Ne1PgPPMkkHoesX34NuLWHDZMS8uydPt6K6TBokmXbzcxRNF3bZUapEVvegaTKiHXueeQmosi3gWRZXteKh3or",
  "key46": "3mCjB6fmv744CLtpsV9MqUJtKM8bHCQwnT651Jd9LYW7dDjPMcLnnMZHDrHysEtLx9tVL5kUa2yswhcEkShiyUym",
  "key47": "4x1NyfbBVdBaZewy48VHw3Yps2DG9vtxV82GQUEtc5JArYJK9f1CGV5WSuMoXkdWRi3tRyLVbqRbThK7vxmyc4vR",
  "key48": "2Dq9s3jNMt2diaGuCj3b53qvvtBhY1Q8iYVh7M2aiacBizpQb2nQE5JRMtExEujqi4R8iHiVoNfzeznhCyMK5aN1"
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
