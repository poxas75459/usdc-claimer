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
    "hkeSi6C71nuXJnWLP9mAN9pSMrfTcV4b73nKPMrs6n5bJyCqMrADgNu4HyBeNCJUXAKBPEVu3Avm3Rg68ZTjRyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672YTx5BQ21aELU2jrxn64d6kMxPeG3VQCHUjv95wzkwF7n29UAcBtu5CA72Sopknyrt7D3qSJFfacsUZwqNkQ85",
  "key1": "2zhi3DeKWiXdRqLVqX3BDQJ2utqZqFptQnHviqooaDgpvL3RQavA6PftwoTEsuk7C8Pgh4Lw15Bh8n9mNkMaz8FZ",
  "key2": "38WMHVwHBQvvzj884bSrhsY6nCTji8XwPXPqQWwdFm2ZGkk1NBVrzYMekaNFamYPdzGr3eFAsR7FpGbQegDj9gz6",
  "key3": "64gR18Mw184pHRukgExWxf43GD9Q9Gyw4MRDXDfzZSLgfciZEMVTqa8RzUwxemJeboMKsoT5RZpvQsu5HWVRhgTo",
  "key4": "4Wg3LcV3FAoG5u9KxLscD3QyYCTfMsQYVWAwp7pV4jixsczxpozNNJoeKbqZnFd6NEVKFXzL6DCGfh6mGmfmsD8j",
  "key5": "5PtBH7s4UGwdNNr4BsENA8DWwexh1Gq7RmH4aZJAdiGmx4aQMBNoXMysXftf7DbW7keAFhWc3DmB3KebwbHc22J1",
  "key6": "2hgGSrnTxv3MNtJWDKgxqtFwHM8Y7VFkKA1rrNyZRCZNqENwsjyayHRqELukiQFatADxFNnpjzf15DnrPkfJ84xY",
  "key7": "9bBDHx1mdNBtUtRUjhobWPgN3bSgyb8CZoHLXuFLMjC6aqjfGEGHM894Vw3wPKuumZwCNXTebdGLRWnij6HWzkP",
  "key8": "3W9xcgJPotAdR6TKrvtZXQXbA567GiQwjXXmYvmnBC27vEUzhQma5zjysqVa7PVkxRkAio1dsAT5m2pQYZ7LJTpm",
  "key9": "2QTVV5jN6niQuz2UD263q92sG1pV3x9sLJyqnW2aMMUc5FckE3ybpNW5pdNFGXJDyFY3EtxWSCd6HAXxVV3ySct6",
  "key10": "39YtYmhKaBxw42KNhbiJmWvLD6mkrmReFsP4dJwfPok77nRzXkyyU9wNSxTXtY8pcsvat7RqTehnZj651dzw7ECZ",
  "key11": "vzK4Q9Fsy4Xu2ReunU5cXTNuzqXsVhumPqx6bteerVorajwojFiR1AdpuzDzNj3GTFHvZPpvLNzxm3RdmyHyNC6",
  "key12": "4yPVxGVFu3jF2aJiGjxBqAM8FpSoFkEmhAj7pdT3NAGhSgex98Znfyst5uqQwj3YmeNsDrvDcxADGwrq9iRceXXW",
  "key13": "65aUTazrYTB5nVMJtSARSuaYtJ14EKv59tAtgQCviodDkFDBoMqzzniQV9tVgHg7kTRpFqGqvWDKQaDEehC9Tx9X",
  "key14": "213ffZYvCqtaQVbKYo5sxZrku13K83k37idHUTjCyqCcQHLk7MEzg9ePREF8vJvpSUVErPtM6T6eZ7Zfv7V1vPDR",
  "key15": "2AcYDm4xfRc9MqhL2avf6z5rEs24b9M5NajypJERADLFtFU4UeZDskb4dDSM98PWBb5nyaNDzPvRYMLbPCVeQXXj",
  "key16": "oCLBkoSvKCceuJHg9QwY939Pnej9QZ5XCgPkcEW7kn6e5wTvKnW79kuK9CKTpbnF5wXat4WJuGTwvtfg2htP91E",
  "key17": "3coZvdc4UXPdvzYkkceUpaF57ZtabjFy3xoS6ZAcnjf1tass5gmMHQPMu96wcQ5h5KNmb1iMJPr4tGDrafZAfYXv",
  "key18": "5XhhouyLh7RK9oDuHaHSh7iSo3msjJoHNcC3yTNZiYYiWxcH6HHwUUnLUEkhjDvKmwgajRDuGaCVS1t4wjBRYyQq",
  "key19": "4rBqWxHKcZjKwcaEXoEnCBcJaG7iv1tBmTDKfYZ6PXgK1Uksa3BxQnVsAYgwpR3Nipc4ED3m58BAhMreEoFxHdd1",
  "key20": "2h3MH7C7S8768BfBzbH6ENBd2A7dbpbYcorzRakZUkCMnvM8yrPEtEKk1JwC4YuweKv9GKESt3x2bbSUpeZcsJjQ",
  "key21": "33ij5hDkxur4shLubhfFBbMYCzgYuE1ku9XThZYUzZys7YrLDDs8BDTnsRncyWRY6cg9cKZ1UZEPJP6BANZcZfbK",
  "key22": "4UZd5j4iaZ8qScucZ4a4pegjdhwjACrJeTZwVwbMY4kMHCcvEzXgrcsXFWcnnEKrMJKfE6TkZCMoqfEbQCc6nGum",
  "key23": "33T3WgS2ZgVpg7PwENjTAL4KshnD7pR8izTgemHpoHsXoNq9zx1YNj4XS966GqstubJjVDLkcYp3nkdknNJpKkYE",
  "key24": "3cqMeB8R2omFpgjFB59mUBFLqAVw8D2os6jTjp4sBi4xMBwgYcfrMWiaZB6zyrxUN5kMmgYvsFFkHcpozzkh7sVh",
  "key25": "3g2sBmA2c2QSj3YraiWYHMJL785WntLZT1NnvnM4uK5Zam3Jgi5VcJmZbdMiD4nRNHQQWQG5uX9brkeFMFPvSthS",
  "key26": "2XR2jxhMjiBHDTdYknhtZ2k6kmrWQKFZpQ1RARCfPadqz7jYHQsLnn4ojbubT1TkQeyJsf8kWSo5BDkREuFqzqhj",
  "key27": "3h2A56za1fxz4oN6kd3MZSQ9tVYn3G78eBFTgcmhPrDV1quFsKBSDzUtQeiMv42jv8xm1cwovWzBgg1Ra2LaVcCC",
  "key28": "121mDcbs8tH8ta6ih1fAfhxP93f626K8b5GqGZTECMWKGPcmnoyzNt4A1WHsMBuJw7AyjqhzVQJayYUjf2tjAFHw",
  "key29": "5h6WzvkkJj3zmJa18mMy7cQTse73ektHJzWj9fM5pnEHVxj1RCjqLUkCizswH35gTd62RyqPLdZVLgedjfNGpoq6",
  "key30": "GcFAGsw2w4CPP8YzCooUqPkS1tWAd5nYASWnv6Chgn9YppDCHRdzb8KifpvSrit53Uz4ZyZamzEFcMavL6munq5",
  "key31": "41a7LAewXNnPmTYxF5B34obwk41GxvMrFuXrYP5ju8rM4iPGQwcK4MPofStJejdYK2gigdZMdB79ingi62c4NpyG",
  "key32": "231ZTzVVz6ab7w8V8nvQjYgpD7RYJsC14gQg3bTYQi7j9f8AowZAtvWVEWNBb3WteqvgKVEhYQnNJDCfgEJi3vSy",
  "key33": "4LsZ9JFn8DT87T7r7KVAMNBzLmn6sFvyrxX65ioZLFDkttyDVs8rXru3ZwMym2exhM3fAZhHqFdtFy7SpAz6xJEP",
  "key34": "2tAzCc1n41k1TKe6gWtyswadrJ7zrXbfjgaV4uKQDQSGrshpBT4cLU1BjLNjMBhLRN2k6ZSiPr4B2p2pij9kWVyY",
  "key35": "3nLWGNTQGqGoszcF12MSQ4rmoHavJdAfo9NUNFXBFMTmV7wem4yv2u5Asa5qUQyeuKEFscufEZSQUxJPLqm7W54c",
  "key36": "4PLhuv1ea8ipgoZ9Q1F4YFFQwwC6RKmEHZkQTtHCN6PE89qXjSP1FmLuht4jeZrQBBjG8eHE3ZWuRUWeHP1rAeWR",
  "key37": "65cXXoNf9Db5yeApbguX5eVw1KeQQjHLyp8eK3vQ75FNXnjpcgQCYJ7ifvW3Jyod4Hvmfk1SwuU64eqDxyrdETwU",
  "key38": "5WZwWgK5V1wuuXR2HVL36nTepR1KMEPv4ac1JFDD6SwCRLTmskNbrMWM75teF6SXH7fiU2W4R5BWDmu9MoTp6ZuC",
  "key39": "5FAz6hwdA4ttRWMrfpf5mwbWR3sMejKD1mQaCncNQXAhJMEbW3d1rkY9qwBUgwo2K7zYGKFxCPRpjedtut8igFoX"
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
