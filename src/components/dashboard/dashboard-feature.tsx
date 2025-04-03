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
    "3H8hbWR9yoYF35prmZXg1DX5SRSumpuNimdz2P5bZssxKXCkZLELakjRr8VTWNsh79etbNdxMjLpxsRdKQCtYZKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rBicyhwNerxii6A5dDTG3rjeZXJbQdyZZsu9pRzTSGVYy9cY7seDYbzdYYBG4e6D57wjjSytvPzdpACPmMm1ML",
  "key1": "5Smj9jQdk49EUmSYbbJhyLTCtDyURPz4hsBuhwFG9FRYSFMXNSABp3gJicxjh4H49H5JiSYDcf1jhLA1YFarJrqB",
  "key2": "2Umz9jSQr35xtnHwCk87rbCbVrKUkWDxGVGhDNwGqaTz9pQX1mFTgjUy2ViyaggvTBGBURrDP6icGvcBsmgu1o8V",
  "key3": "Q4kiChUH3KfaQApJwvugi7vYgNw9dkYjb3FML8Cv1aB16GVWZkjC4vn1QXwNBzM5Wgp34kzFVGtFPw7GMH1D6ze",
  "key4": "Qrom1Pirwu7s9oRfDgnBJk36EsmRBcq64fagyML5hkNaeojrCMtQq8zfW3uyJZ8B5wgJDEAYHikSNDk3aVWdDaW",
  "key5": "LhBcya13XrMYpYiL8wz42uq7sVUk4iEg9BT9ee5RyvUgCVBJShByoUsbYa3LaNKrcXeFjgA4WENQJx1CRFPAAAn",
  "key6": "yCDYbWshP4fk72FquTEFY5wtekRycfq4HrDNQCifceg2HGFa5HVyZVwt356PYn6hsKaSEaJr9FfduDwd2tp3rCe",
  "key7": "4MEbpcvFturTfrV2MkZ2rk7RUvkwFboKwVtmgi3NrR4nJSQZ5Rbir5AaPy9MgPytBpTHNkzsba4Q9hxcDV4SLZBP",
  "key8": "53W9wVtu1HexgRAaRK8qSLTRMz8QGR4RHnfHVnfb2Vk2i5sDw7VQeeAaoLhJv7iMsGcemGMGmSCbirEPcTbZC7gN",
  "key9": "dWzgc967Arg5cRNJRr2XR1BYA99Mi54EqyCDweDzxfUAfwhxMvHdMvpFe9soNokE1QJgRTzveJKF2rjETweYMMw",
  "key10": "2evrHbUHrmDF7mrZd7nqeuBsKEKe2vPVNtR4DfwTAhr4nnuWiyce16MgpabYSMDmJKyYBEFCdJNzkVcoHZxVsbod",
  "key11": "4EEmEL3Br78uEpfA7sbjrh7FMZUcV1cQ5rR1tqMTw3syafAcSRftzH9KWK1bLQJLoHxFNqeJ8Nh4dvQfayWPTjiX",
  "key12": "4e27VgR79rZyGZtSBkMMMfUR5nu5Q1n9C1LGVyyKWSuVPvKvSSbAT7jufi37BBUAjCXivxo4C33Jy9JxDrFeE6hn",
  "key13": "4N8WrXEjVo3r9piW8NgZgjEFSbKJCgrVq9nii2NmVVqiKdLpA2ZjwfX8YuxSC3W7AdgsuwqbJgnhAvUzhYACS9Cp",
  "key14": "4LKMWTWUH33ezbPTUU7CJ5REyRHQezjbPDfyoJxDy9fzGD8KrNRvr828F7LLMNGC6A8WTe2Bad9n6vJVJEZPeyF7",
  "key15": "3nvZwgm7s29JZywTyhFJegL6PgwbTe99ygT49DwgEWZD65Bqxvapa1Vx6XuZ8ZB81hMN2qyPxRxdvN7TqT6Nppge",
  "key16": "4Kdk6hnfrnvWyQsje17cmWtfYGd2JiYwGFKDs8izVN96879YfdnXkPC875QzUG4eNtVnNpmLJdYKXirWhrdn1CU6",
  "key17": "MhY3FMmHasQroCYJheveNd8tH6LhZhYNnNLbkTcyorT3foUCpZ3WbUCWcaEktTEaJbHXsPFXLjnW9cJya2yzLZX",
  "key18": "3NozbE7kcVTBzL7p8vj8ArJMfE2G9vD6dfGPTVwVPTSyyh2hMrF9fq8WduSRFpqMT1yf6Qcez1gXNamAu45Z7ftd",
  "key19": "5MaXmaXL8qPgk7FY8cbAi2PqPZyQaJAE5XMXpokhUSQjAQfGNK6L4XytPr4rz6BSagYoR2Pvk6MRk8DEizrAstw3",
  "key20": "42DDbTM7fAvkiuyCgGpxMfAMxovt5tBRL5xRCPVmpWDVzVLttrPHKgD89kn6YHW6TGYi3cmkNc4USotRasn5fDRk",
  "key21": "5GqNNTyQpBtinqQe4RukGyVKZCQHfV2KLKTSHTL4bTfcm5MtBuzYFd2gDCjPV6zfP1y6ro4N8EKMYi82prPzdAdi",
  "key22": "2C7xDm5JzBDh3fRnAbmhaZNV1EkHDBzx9A2y54vTG6bYUqvAwTZwaQ2SnAtkCgpxm5Y4CE8DBzwdry9XLHyrdXYX",
  "key23": "214zwBvA19ZDnXHwvCY73dVu8ewTdUsWNUju8xAS73EcpvyCUqePXHzfHebv1VvrZU2hXr4FVWN3WvKdBEBusNnT",
  "key24": "2XUqTy3Ae9TJ6Q8zRhrhXdG6eXSczKzBFjKHMt6e3RmTYAEwsUutFT8NhsUMyJd3WzEccoCSeu8ZgjpULZqaamTm",
  "key25": "2DGJhQDRZsmjts4bDvMU6RtwVSWw368cvRniGxmncSb7ziTj9MzhC6vTL8LtC6kiZyNC74TgsLAych1yCTmwqtC5",
  "key26": "2TwaCGNmPkayrmLw35Jd9VKmt1M3qt8XHrdjELyssGPBPdjC8ZUDxHuy4FcXPoMmXjuqBCzJkoCEfFhCDTDBfuvs",
  "key27": "3ZUE9c2T6zwLG7N5Dxu4QUdBm5feGNaySipqciuJ23bQzLJiUwVaG9NVUrmh8Grp5Q2f3pBPu63CdF1Qyd5kyKtk",
  "key28": "YeVVUGncEgTz95eg7VBe6q5jBPiTbXgT57YnWiquvf2h4r1yFAGrxGYfvUuwNKv2Lt8ED5FU9u4dmYx5cWyeGvf",
  "key29": "5Jj6umYkF8geUvRkGmv2QVRv8BxTTkqo6aiMbqfSedNX7RU7cRdmDDVTDzhgxSToQX3dNrFU8iZk7GZwPF5M4tzt",
  "key30": "5zsB3Z99GwUVbvCAZkRioUWyxXoetm8zw3LXqECGY57ptdNvjFn8ruDHzzCPHndKk8h6tDfbqzF4RjizRnPL3vK6",
  "key31": "4cSBPhVEJQMWeD3SdjhHVmpr8Zup4gtjmyGJipev43aXTn8yLDXqxYwDvMdgQZBSbF7L6CG8JxY1QL7YJZmVLFST",
  "key32": "5Dbs6w8EoPX83VsFsgC82KyZJ5n17db6SnzPLnQ9Rn2fQxxdQ8eoQfViDaK7iddmjftgoBe4tnuzZR315Pjfa7A7",
  "key33": "65TzCYg4LL3J6aGuTM9R1yoPtzCuxudA4vw3MAC26LEX4yFwqin5ghpBRZ5c9tDUvXMLpzztSmwWPZwTt63Xzhsv",
  "key34": "3dVqWoXhC1bepAaAocSdTkjpGdzAHsnJaqwwTLkmNrJ8E8yAcUBCBiGhM9mR19NtpkwNZCyx4mHYJ5gEZPhHvxWE",
  "key35": "3ZNMbmLh4GaCYQ5zs9pX642s1bRNZhBpbuanAzyKzciNtXZuLaYLfkPJR5uQVJvUPttX2Qx8STmnpqv3eyidCXFQ",
  "key36": "3xyRouW8FsE4mxnbHxcgtHkL4Ra2Jaa5BmMdxwaDwY6U8ZH5ccZy2GowYKjS1Ax1ee1jQ8rquMhJpDkA3bmZtZxY"
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
