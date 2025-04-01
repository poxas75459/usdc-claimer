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
    "3ucVRhPn1pfLejpmnLABBZ5hbvFH3EyxYGsrgjtKz3HbUEirFfzHpzhsaMknKHBEJcffJQCMFo2m3CZFpiVKru1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBm4mcdhWnjqcHJ6M29vuAZWdcDsE6GSz6sZHyGpndGUeXqXddnsQhPVMJUsEYaQ6V9KQ18fmh7987q2acMzhdZ",
  "key1": "2PbWDTWWAhNdRjR7kx5iqCCUkJircuERfhLENuihQ2aEQkmvVuvXPyUgtArD4G62TvDkaWs5B5zBjphAtaxR1tMN",
  "key2": "4cDVsKkRavkbQgtJrDJc7KREH8E36macMKM7xm2r4usatdsVvd3vLhctH21aCExZut91KW4kJiTokxtxJey3AWHW",
  "key3": "55B6a1WD2dmERTCgiFsFgWEKKSvqWgg8x1sTXvUH4T6erdKnnsbgUDvuRw6t5w1A1otuSup1f8gqn46D23UCYceY",
  "key4": "4hHEtUpqtL7sMtzZ89DEbDTwNoQ66CeLPUQUdDX1zZ94jcupjADBPiDmmMffcmuVm9auE7tmQMnfKoStfirFbBC5",
  "key5": "48Qo9dBj9kSLiXcZHNY7RvryfwNijTuP1Lu71sBzwuVBSger5jjYKbcsa6rjtWpTUWAYA8NZNsQQjNPdHhhmP9HV",
  "key6": "o5D9W21oSnpiucjeMJMR4AfhiRMijuQmxosyRQqHFRn82EEE8CenQjq4kDLwQypxzLPSYXgj6K1VV1cebxQi63m",
  "key7": "2PW4ndBnbB1RKVsX2cCr8oYP5pz8Qe78sdgTRWizkvcVxUcdkmhy9mVdNojNy6cxfdGGYE6Yhz8BtSzPoLucFntS",
  "key8": "5XQbm1R7BsBoJd55BZssKWUGeYH2wYYMfwAmLNkXdvsCcTB89ecbpMwm6fUopqT1RtYdcjjyCKTLppod1Qk6dyCc",
  "key9": "34jidQegxbVDTkuvXkpVewWGS2ARkGZMQMBNCSLXcyy4DquA6qNeLAmNyfWkkcbcJKdUbVxZxhQu2qV7sEaymYhg",
  "key10": "2fvQWvkzGyGX7miYJGnMJebRihKYfVWdsGaSvi9c3nSDHYedPVamU5AxwCWzZjRR2fP49k6tgNs2vFpbGRjBkRbe",
  "key11": "Sw1vR7xxqm3zp61NBpuKg6eyye6zJ34SYbtDMHS2Za6vgr1UdTohDcRFvxbDbdmYwPicWDbZ6jsycNVKY51wjrD",
  "key12": "4mJ7zzoZnAYHoxo5JEoxw5BYJo3He8b6Qgbi5tX5pAMfHztxST3sAA6oJJ3qQr5hhWHpvntu5ZtNWUCCXHQksFc4",
  "key13": "u5ydgfY22qP41g2Ty6kxwgYk8joD9TfRL9MJ3U8Qyx7FrV2kGMGZ8TVAFEQWhKD4mNxVVe3UemCzmGiUrsiyqYt",
  "key14": "b5sdHCecuiWnVHBTHEPePoDN6oPPh9aWBh1qm7DKWjS6WyjGs36531dUfX4PtdzzkrRpm9Z1qJ1a1HcSLEfC5j7",
  "key15": "3fLqcFrzgrinBwNupyEyv3jn62vi2zR6K4mK4eE3At18HbebvzaHwxUQuHphb6iXMbx3FmRDRyz7Yryku7ryKp8a",
  "key16": "5ckoAg9CnchsR68pkTrC6d34qs31PvTLgzStVW9kYZbsLuV8t6rr4op4T1XHuBZSCGvwqYZgomiKn2fu3guVBa66",
  "key17": "SoSnNJvZVGV9hhcwWEDaK1vk9kQVUS6VU4rokeY2Nhxq7jq1Rq23woo2pnDrHGDM4Kx6fSxs5FYXbLLn4pHR2cr",
  "key18": "5k3oz32PcGGMMqu6BMdT9Egq1RmbJKmTwjFYZsgUGMUtFvAPNUg7uYux21W4DFWn9NVtNfnGykBie3kDzFmuSQee",
  "key19": "4QhJqS2WK979BHqiY7uVaWaVAFmuuBbwiDpTFSZi71JSrKHhcrV74C9hJbdr83Awx13GvzUp768F3SKQSRijTAB6",
  "key20": "66AMb9TBiUuX2qXsqH1JXzwtzy3ASDiTYcZCQNHzos69rYjN6tV9vgxMgE3aecVpwQJ3t8kTTdaxDSJyDVkDkUkf",
  "key21": "23PtcNreRDoYoFJgNL63nyAt1iLdcEBjCWGCEZgm7B6Bs92L7ngxDkhe8An6xLEmh5abcoKpEKTftCMqHQdAa3vK",
  "key22": "5nRm44teAMEX5E2eNmjF1SS9gYmb6rEZUNFNPWwhvHSAGCQYBSePqxjPxPZ6YHxnUcsjBEVAYLfKftGv3CFm26e2",
  "key23": "2tt6mo2ybJXxofVgrWCEJxr4dDrMsFTu6DwVgFaDYM5xwRaGepfrCvDoK6eptB7ZDU3onJtdqXsoUMrF9YoZKFSQ",
  "key24": "62sJa4ReRxJ1QKso2FvgtssMRxvcmRk1fxFwQKPU3QbGFzLZhyiyYpm9yqGETuovgNX7g6b9hnZyiMk6JjGzY9Y4",
  "key25": "4iWcAUXmgmjTr31XMhev91m9Hp6SKrcy292CGECxqUfgehbqaKgoYGn6hvY6WYSZ4Mi5tmMkvQxTx8arjbpJZXNG",
  "key26": "5WWGTicL2Pi94DPr3pYBXBhTb6LT1R5TVirWV7yXeH5ezoobTkK2YcpRDyzuEVcS54aPxvuP8ihtxRc9XmZb8yTr",
  "key27": "XAb6uRVENqWDyHxvL8u8zYAS2K2TS9TvoZYToQRc2Wd65oizCfnyjGUZZAfeR7WXRw2EzBMHB8uGGkQN6aNNEeC",
  "key28": "24E1YiDUt3tqAn5dbHmh54No5mZ2uEWaq3D5wzNaLjaiWQkCu8eUpLHvBrNKz9g1F1ZkEJWWD4AE3zr6B1y6uMFy",
  "key29": "8Zbzonyvbhf3SBibZBCyZSkAY4VqzsovSqKkSQFbKT6crmRVsNe3weH8tv3JvEMe73HThKFdeNQkPDZh8poRs3A",
  "key30": "3XcjepZXF71f9BcqX947HUsM8NFkYLQ8iqzspePM4jyUmxUQJpnKeeaPEHg99sD65D95vofF8xfh7Dq4JVTaraTQ",
  "key31": "4ZXaFFdMK3yX862s3EqG4uDY1z2oqApoPumt8dbbUpZomKey52HpVn18d1qUNtd8DX35iLuaKm3NeJeK1PmSy2Co",
  "key32": "2EWyMFeP5wjnUZ73mFjES34vy21i8Z724y2Qpd7aRAdea5xbN5Hgdkkm6mXdzTJ451SyBts3TdLsJmQffcUnY7Z2",
  "key33": "4A6m7StvXZFaJHVdji7K5Rq4Xne4NKozfDd9C2ykDZd3XUQekFRsRf8URogr2s8M7jPkSummxup7D4zhG4vzHomG",
  "key34": "4nswydFdDyzEoyWMAzQPcQoQcrozrv5A4RuutQe3QDBE3Hk6QrPjUhtXLKT1jw94prMAyWD6pKpqJMgHmZknKhTH",
  "key35": "4rfEnMaZYmNejsgTqeb6TY5wVE1uquUnDz4cdoBwwZdkuCJvBTJWYjZVEQyhdN2wZTcjJpz8Dpe8R5AxcKg1fHoZ",
  "key36": "2PKcM8n3tBHtCJFHNZL6kCZ6bTseRZE9A14C3RYfvSZNCxKREf1szaZ9VCdZRScdzFdJcnFWZVymVhG85tUEHr8v",
  "key37": "3n2wcAtJoYnkaydfxrjEX6p7YP8xvXJMeMmFmYVitMxnZwdY3SmBoqmBVzBvJtxw7TEDBhQJ8rGGFJkk4zEvErh8",
  "key38": "3YhoCakdoFrV1romoqqwShYcuzhJUhS9SruhcjAL8frYHYKnuawtsDqBFwguBEYZZZHK1jRs8cG4MRyW9o5n41F4",
  "key39": "bL4breopVr9EiyYGaNAwZZ2Yf5q78yBWHP76msyystP5FMjWoeZud8VXpmXFpzhnXQ32giutmPDabGQNGajAjJc",
  "key40": "pWHspFTj1HEyuU5Y4TWPpUL8mHNcCGFtvxXLSEStYtzHQErwTC1ouiq1ZfH1ahBnRx19skKSdCfPJPfy6SEiUyr"
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
