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
    "3L6U83XtYwrd69bwhyXVMEo9Evw3VSGvEsSzFVj2Tyt5uKhK3XzgMxwFmkWzgRBL3CTGPLYwZN8aJPqfWBgmHYHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUbQD2cTv78vkKeRfNMrJnnG9FKbH2ZA8wZikk8ayVZf2JzXgaJ7Abp8RFc4jbQ2Gs1ykgXoKmPUQ3KndMub9E9",
  "key1": "4Bcaim3L6M87VrkSkUKMVqrmL6WXvnWMy9LbGcyWKv4rVccS2RsoX3759WfD2gswRJM82SCh6A4hmJNDzm3h6nEm",
  "key2": "3A1UeKAu1MVLZX5iMp2r5Nm1f2zKr6QWepM9XVoUSD6a3FYuckKR4JTLp13DnzQsbpt1L6rXunZ525kAZkUsDJRp",
  "key3": "fudPkoSnM2WWNHTjkWXuxQb29gRAMfu9eqhhAqCSLfi2cuPTrvYXWdjrwceynHkAeN4JkRs7zfEUN5CVaBQLkLA",
  "key4": "e8PTddepdeopU7atqbj6fsTcuLQ4AztfXUfNyHb1VrB8NR1DGgeqWnNbdrGfsQ96nv6PMH3ZRjjVevRqxdXwMGV",
  "key5": "5gAQW4cahGRMK97NMbhzJPTWAcyJRGVJBQyGtuqxHPC2jgVALU7K2Nvz7SziP6cXp1sKhNxTgASvAjGH41sUbiX",
  "key6": "3gTCLFLqeeqDFpu9a9huhPxxLe6hPFzjoDR2EGuVBwMvUWuGetdkZ2hAhVyoVYYpFkJtnv7W4MJSsiZBXsqZTock",
  "key7": "2NgozhREeuKydJswaqDxvRzD77c46kMM3xwXdj6Lc4MF7jnDM9GfyLtQQnzUtVaTd9Cp8bKxJ7VQkMBkKe8L82t7",
  "key8": "4BBCrvLHfqFnETyRkgMAryWAYnv3vaMCuhrbvd9kyP2oZmsztAUarsLMT2qG1j9ZidDyFqNKDjaKqJBYDhJUw3zy",
  "key9": "4j3fmz9QVhaUzC3rXtwDDehgofXxuS9bVxFxTEiCuh29tnDRuYn2wrxgufWkfKLZBn13DaZ9TWoTXuqJe2AzJV2b",
  "key10": "2Lk6uJXuC5nrTPMz23xfodcHkSmnS5L4CiJ1xvuQ4x9tnuHkyTDcKpWBp6NaJNTKPuEFacK8h8QhxdVZHLVgH7kS",
  "key11": "992Ntn4RULaFXFCajeob1d7QaiWkjRqzD41DQTP4483H4medVvAkECR6R1oeC21eEdMydBN1obkcDZazfF8tXbx",
  "key12": "3d44fZjRQZP5bTrt7RSDaUbCPKyEh4kVmsgkueCUT3ar3Kgb2LxQyKvP7T7F3FWZtksJ5MsuUDjoaG1LFpxKBNX9",
  "key13": "2a3TBkTsVfQzTbsn84YcR5mWQbpo5T4oW7MfYSewSdmAAmuVxTCyVNuYT1CqDHVKnmKzvcKL3Etku3K2rqo5SkXz",
  "key14": "3K6UXU8jH1FYxxM5PcJr78RJUYsE2WpQs5FBVRNVVx8RR4s8U93DNf9XbZaV5KQ9SwhxjcQaAKfKYhCjcyW6jbPA",
  "key15": "bGCYpP9QtiUsjJz33Y2Hr1ykW1BtU3TBsjmAQNj4yzYymzhYZPNN1MCXJDj6nFttFzTbxQm1txfz6qthrys5GoL",
  "key16": "4dZkC6sJSGWPPacXWLJHmWa81Wp4hT9jA6x16F7QzPXJ4UvrW1svejHrAJYaMERRVfU53YuPtUQ7wNkqQ6b2M4V3",
  "key17": "ZMvNAxZ6oHraMK5Qxb4KYjSWmWgHh2uedKfyuAmULjEE5jLK2LK7AG4JtmznuneirymjcKELvHLrbvSJvTD37pW",
  "key18": "5Ftu9VxCSRTsP8429QNJhZJ4nFgFYdQw2tisFktX4xmyQ6BxUkj3TCBvbQzCHjkMTh6J1UVkWQqSYecEMqekaatY",
  "key19": "61pgecun1zFVSgZQGEEADwVqetP91dGNzbaNYUdrTRd5L9CrpWjYEfUH6SPw7SfJZH4j7x43B87L6VdhRYYXUi1F",
  "key20": "amw1TDq2M6YP2z1JAEuRtQfR66C6dfXCmJq83XFByiLBoyXnQQ6cKwx8fb29RuLePeR5dHMPkTPWWfF1sEppUvt",
  "key21": "58bjhBW4wDUQ9ebQFZHMQmYXsZjKBue9u5VhLecxeTixDWibanT2Wq3JSFeLLdpHsrbaG28LgGMiWETqbQo43Jp2",
  "key22": "2YprjFGrVVLjtGg3pbPvtLmbjFu1mSANazEsKwrqz2NDixLwsTwAeEcFC698zvbXrP31u37GyQMVXjuaFYkkWuGj",
  "key23": "HEGdn5ncxc6SosNRWtRMuXaL5U8kNfKx7re5847b2mekX4wT73nsYRSS5sU5QB9o6kpDdaLcPWYBwFohYoUcmqr",
  "key24": "4sCeF2yxknaVzVcweTTkagF4srfgTWwVee86oDpzNiCjEJT9mNu8BvTso27AurDc4fHRtmsnAKwH6C5mFZWMUsMF",
  "key25": "2xTqnABaXuus6EnLhZbfj7xRKnwuEECXjXYerkiy2aFTwDNzvyfdZAaDZCC9yhcpJiyvt1CJFGsuCtpKtuChj3Gv",
  "key26": "ndF6kSmR4NwMWKSTujT31J1B4ebAMNR6uZz8Ts4y7UJBPm1MtnpwFgyiqPXRpatm9CTsybt7WcH5QNECjHbuJSn",
  "key27": "4JtxDxmey971Nbi1qFNXx74WevnjXRVd9346dTEUnqhSaP6hRdAbZSZjzZCTNX7qkV7acQxGMXcbLcLZQcr6gkPi",
  "key28": "j3JKAcm5kbE7FdPUbqJFvuRxQFHMUx1vxMDXTsTYqA7g5HDR7XNRbYRPoymGhr8rFFmoZRBa7giwMhKnYwd9YnH",
  "key29": "3byub4hCJbTA2W1Y3CYeGYnU5tLqtXn8bubPx9bbaeQxTmjmhuyS9HYjQWskGYnaEXW8V46XshbY64yjMCDioTKR",
  "key30": "5FH2vZMdMgvHjhaCsntSp9XRtVWcfLaGsDdeDPsR1ttbukPMGE4XTuNrhErTcVH6DnERHa42khR9iTzX5UAVhTcU",
  "key31": "2f2i4H5ZBWoa9trN5whVgyvNpgHZp8hDeHNj2ZefkuTZRP8NAKKvkmac6GugjppA3xDUdE7omp6a73hKxYbtLvXz",
  "key32": "4ndronxdugw5Vqdi4F43gYiMnQakb3WKPC8m38dWcMousEe2zokS2gVeLA3WCjYDmc5oPnAvZfne9fmWpiPmrwqL",
  "key33": "5xQrjozDdipyiEENWmzd6bfERvihguu6Gjb78LD8LFQLs1PkXyNhpemwrxTjToQ9pZTP17ppCQV5xxTJvoargRjp",
  "key34": "5zKj9tx5TjgrHHe8A4Um71xYEWnsHiue6t2vPZ6gVANPTVWsTx7wjWQaYjQ7zR61Ha2EZ6hyHqFRsNfdd2eb68pv",
  "key35": "2iT4yPCLyjepHWdiwJyMLNm242rTiX6vtkRYhZjXUFm4kVZRYEGCzWehUg3dviceAU8NmLqisBuQs5ebMKotMVNW",
  "key36": "3KQouad9GUuEW8hrQnYgT4eb1EqsYPEyHRzXb4aPUMJ4pFQc3Xt8CutxTMQanP3fpZVHeTBqULjVWYyHwh1AKtoY",
  "key37": "3dA9VyttAZNj3jZcgZTa7VX8BPMWT3vXtf7RXUJgHv9fzTwD1LDWj8kSvYo9jwJwhJ82WKDLkV9FVM4oDZpAiQJu",
  "key38": "4SrJpzoFiiR8cFXsDNUSAVgVr25RVLEH1Z2Mhgb9RY5rq6eobsN1DYaSwctu3UDQbmPhRs7YoYxdA8Q8VE6q8od9",
  "key39": "3YjG9YhFFN838LiVPiyxVtUhMqTtuKrNt5MfaCNuz8ppiKsCSbPDnLsD2kzQYEcSzuWcodkQZw8XmDC1Sy3hB6wW",
  "key40": "2tYv28437bpARvBg1NX57PtU7MxFMYBnX9fizRyWUCv2868iKx7dn4Tnmro7piPUurucdMQeYYcKFRxX8qSTmFte",
  "key41": "4cB7bXhAnvJsEBMib3VK7uLfvh8wo4pgStjNREdupxUPXVBRRqMyAePAHoGUUVyRGpfb8dbsMgLiCTxGqiR9JMgQ",
  "key42": "5zdrbETWr61NLzrrMNH5jY7c4V3f85WLQUCuJnnU3AF11CJrMa4eZjtutH6ynHLu3k7uUuDodUK1j78Do15xu5NM",
  "key43": "3gZxqPJkFVRiRLcHfUdTp43nL1rWXkNRHvc8qCi7WmspyXtGUUymDoHJxCnQkXpEMtEmQVDUivPPut3F1DuD92MC",
  "key44": "5jZdthMkwqjBetDjP9to7gxR6hds5wgwGD7LD7ysGRTqFw3RXekGdvrF2MrYKw8G5rNgPmR7A8oG23aesMZjxs5J"
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
