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
    "62GM2hke9krkEdMcDsauAYkhWGCbBNv9BektqKNmpfq8P2mXiBfhi97XjLoK5ygEjSUwhh9hGqLdyoGT3MtKj8D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z67CZw42NP4AhpQiRq2xEeiU3k2dnb3kjmjm7e3J9WSw4pG67b1KLhAXme66GTNVWKpb87dWF5NdXtZf6yydVNi",
  "key1": "3WL1xUe4PERAgyqUoPjX9VDbXxqvpaMU1DWcmVHW7rYwsprFHtWXyJoSgCMhFXd4HmDrkMmvp4iukim6g42vVyqh",
  "key2": "679i3cWEdfgxwbuJjZqbqC56KEK82u2sMbmNTpZ7UFZqW1kcNH9vRAmy94kQGRz5QfLbE143WeoF9CTF8cEyx9FJ",
  "key3": "29TbBip8sjx7kbNeMbV7s5j5P3spMu5tbTfxfoi8ecyMNg2BRfmcvxED35RRw5S8uCKmcdeyGYRJFTyEhZ55XVLg",
  "key4": "3NzmnMcRmLF7W2KevraarA6MTc6hLBxBwVffmEki7orNYyhAJuzw4s4BsENzZQkKtMeAkcbfZwqogdssRu6nQtQe",
  "key5": "228Ex7MHAY53ukKo679vLYcS1K97wx9C1TR3GYok25iBq7XDgavQuXQVP7Z47TY411MAutpxWLq7DFoomUgX4rBg",
  "key6": "WGL6tEQ983F1ikVkah1uULTtDMDKdrVptgpL9HjtHZz8R8iZmfRWdutm3Cq7SWXVgNUKWQqgxwp7yQVbGnN7usX",
  "key7": "3fy2S6kytuxXBqTT77HBt8SEkvpYMEokAydjtXZKQVrBPMzKdDSf7PmKgd5d35b6wcfGnrsCqfdV3bdBvAgQ5Ent",
  "key8": "5yaXT76RiWJtJr7ca6dGqjsAx8zqQRV6goWBfREuU5ncY9WMUQhb4qjvotCcYm9fDsGT3u8SX1piktdpzBxqwEYE",
  "key9": "64bN5hDzeaWWYPJCtpTHg9658sMBrrn2zFBxxJh33Jrqq3kv6V7gq1BGsYdz2S7kFSrooJPMu7eWsH7BFeJXjwbr",
  "key10": "2rtNjXXcPHAWb5tJXQUyfwQrXdvVU9YDpxFcAiXn8LR4yuvTVkATdDMSTbkAsZ7uYLazR4mW4LF7KEvoMdkUZEiT",
  "key11": "4aRRgBgauC9Fb64XiwDTsuDak51Mn4hQE8aBnrYQurqLDadHYvvSL2PtuAPhWEHDU4acjBxYrMRdm9gcKaLA5gbw",
  "key12": "4pioGd58iFpNQZxF7uDuf59kZAQhurDy951RHQfvRbDjY5JjiFZZ8391PYRLUUzcyMvFfSfxzcyh6ZGcNsKkzmBk",
  "key13": "5BWjoBiKosn1Bvv2LbjY2ao9AWHst3TBGR9uFXB3HH6EBccuipuQYYKwGJMdXwEmfJzF5Sm65RpAsezFbfPtaUch",
  "key14": "2CoJmtoMUMXKRvNM2x28nzeespaRuRXGwdMtcaVsnHgpx5MWkXgqrpz7qjdQkqHn55ixg83tEA5yUj2TupWqB94N",
  "key15": "RKVEzHa6WUfaDCJMRgP7dRkryWjaWC9EiVFZDJ2Jk1aVUTjCFoLrZL1ohAQxRu86HGm1RXdeqHFdgJhphGVA6gU",
  "key16": "3QQQryrQReMoaX7VzkJaBUc74ZV65BG1h9ZL2NAN87g5zo4qfs3HGEuMjUZ4EjPAzYt3m5vzDixEfX1KR8dLuAxy",
  "key17": "2RH4dVW4fxKXXcEJk4tNtxhEnbpbvYC85ArrBQ6YX84KYeLBVVzmvkDBAxWFafHa28gXcXmvbuSjys3mBJV7QW7E",
  "key18": "2k1fc3nmrAafwoYSyrrbd8xhWVb29PMVCPz2dGKw3xRvRwprbWYKVXZ4Nvi1KTZHfgZrbbQdLiMXk8soheRxegin",
  "key19": "3We5YVti7pXorLeCFLL3oQ9QMdMTYXgSi5RbwRrQ28wfHcjd4BVaxzXXV7z6YGxhjxncv9oQZUBsuYEFuJUUgD4d",
  "key20": "2yB8NAWhRPSf9iWx8wcpjm1C4yS4xgFNPY7HwjnzVcBR5oBrks2RdfwdyZ4wx2n6R8s28eDwmnzDYE3NfXMmorVj",
  "key21": "e8d8m8u3qpptbP3WLaoyc9qmqcQW28y9NC924LwGaVQcwbGnaaVNpdLR9qat1ZVaoau6GKF2ovme1a5sLxUqJAU",
  "key22": "yiG59xPQQC4DoMbakM35twceQwTLT6i3UKAQv2R3TKQQVnSPGtF2W4ehwHkW4hzxAuoCw7M69b5S8XvDpGYH3qi",
  "key23": "4qqfgKjePL8ZPQf4wnsC2mXcDjrPMUEiES36SskzhN1i4cB3nmCKDPGqMekgKDdZrAWU3gvgFYMXFseo5769bxCY",
  "key24": "26HSv3B42LgoQik6sbWmJpAS3Ee8freu6Rh2YAkaWFkkSRhirfX6kuNfVixvpZBRR5btWyA8XiuNVPLxu2MZ8EZ8",
  "key25": "PCJTHNrwwF9AeRjg2sxNh76MPAsvRVWm1fKb9PD3TTdeSXkjdVDb3brAZCDRgJmsaHRo4QasXuDH4DYa3F9P7sR",
  "key26": "2kX1pLhGkKxqvz7TJLkud2qpg7itH1BiCJnrW66QeBwmCmavBamSqXvYR5vHQZxc6G6233twJEEHU1cdEKVHoXcA",
  "key27": "5feFMDd9hisPwcbPV5Jg7wjWBE53fZ5ZTfGL8QXDEgCwenYnbKE3wcZivTX9b9YBrLfKjNL3EFwKm935a3nS2gR9",
  "key28": "55pF9jhp1zStpzDdMkwUN2NohAFKV15X2kCsrLCF4yvqTAswXSXZzHidGMAiMqrKa6Y43J7iH3ZVwAVrRM9tnj8E",
  "key29": "2u5Y5tD4MAzqiMSE4b2ioK8BuHH3oESgzGXEtDQVBQU3vr1iJUPBmSg6T8psd7UasrJG6B85QHbo6QwCJP7Denc6",
  "key30": "38dq8343euZTSYu7iRVMhzjAiU64hmfWVabz1bqfVoh8B9ZZLPeDLNqoTMmK7HryF1TBePm8tewewA4ZJbxnoNqy",
  "key31": "3gb9qTzrxAbRqyMQrftquMfWs8FYRwEbFJ67twAXrUu9BTKCtQhQ1RWmWRCQqSTHpJhbtpwgqs4Ux2HsRPjXa3cw",
  "key32": "eHh2nX9XKAHUUC1ccoyWwykT1KYsvo7mG4YRH6mCmyJxBRbMbKSNdVi7Uz3ngXrjFkhazWJKi1UFJvqQyVgGJ2g",
  "key33": "5JWegZRDfPnN4KpB5Q5VF1MwjfEs1Mc68ZHTcbaQKdSvZGue8BPnf34PSpDXYz5gNnn7vbnvghMdZ3DA97ayJJW6",
  "key34": "2edTR9M41GkUMEof84Vkuzrzp3H96TyX8yiN3PdEmbb2g2Wx7Gg4HQrwP3hiZHp51dmrx8PN7pwKSLxTEikGgByT",
  "key35": "2XeefPsWKZYkWwKQsJubuW8cqeo1QnAtmf1kUEAeDMPuhrJa7c6SkoNy4Pow1pMpYJVXFzWjeBerBs2HnVoiVY4v",
  "key36": "VbjfcVG6CkuqzKhfbcdPnfrLi31fJvB2J2kPmRSMB9Uo8pXdfopLGXXvsRYjY9LQZBVrSuwzZE9tfFBjfnh7DT9",
  "key37": "5RfvPxfrGXKC9TT39aHfTgst7dymzm77jmbk2JJzwAivFnbeYW9qZdYF4rZxZRHRYmmYc4o1nKFmBPAyEGEXmnk5"
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
