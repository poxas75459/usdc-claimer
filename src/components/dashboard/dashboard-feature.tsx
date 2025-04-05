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
    "2amaAWZZvRDrbxiLf8JsvtDDkXFyzyuTq29LiX79paPnRK35QtK3m9QoTGpi5rdYJE973iqLR743wZEsuUDXVrLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m6GmWBCPMQjtRySMeyZwjrWz9d2c8a4SPLJUS7Dbqfis8gHe1LXfGAZECLHKezqDQkArNKjsp29pocZF3HexCC3",
  "key1": "3EJxV942gEEujWfRFZfpeQYCY9GnkHWuBm3zwQnRr34yvufi7Y8xviozFZnxCLqNKJiDkTotvxiJ3UAZyED9xugV",
  "key2": "3gbUamtVu9SbTerZJ7kE4WHUbbEvjZKyLLaSeR3dsvoftAoxHxHpS5FQKWUFukhMfHS5YfHVDjijskqy8ggmaZaf",
  "key3": "5mx8eEGL3hxaPitMRbNQnqyWuXk6yMAqDyQcX9WWUfVs8ZSVy1WguWkbtEpvaWkLn9txEy69CAKeWuazKrGiLaiY",
  "key4": "2tWZSyfiz6w7tWwEkMohXJLa7FxGxsh6sTsK5jqDqJVErmJf89R9RaoVSfDySdqJqwS8Ch1zV9w8HBZLNz6KqLTa",
  "key5": "3s1SoWTDRJUPU1TRB6bwiWrM4DxDFpoDTrCwKFJiREcoYV5NLnwWCnx8yyvmqc4RUKXWjCFCes9WW34z6yfVKeSi",
  "key6": "43o8LDZu5NYui1A1zVudNKiwf3edyRJMxYhHhcfBvcSnQhVetrGDtDbMNEq2YbgWbhfM7Co3AGWxF9LBmpCQFBK6",
  "key7": "8vWwXRXJN7cJhP7LeKMXbGPRzZWAonbQCJ9btmvkgmVjsUGu7ZsEfDHHeZyUUYn6wAMPC1aB1mYnveVa5UyP6NX",
  "key8": "2H5p17cwmXPMoP9dyTB5dn4UpyhG6KdNBYUDkvTmEHdyZ5VK9en9BgBL21mUNLNjsruYcerFvkmnGt652Rbr71Tb",
  "key9": "3LARVv8LkGHC3Q8mhjS4UjGBMuDJaFeCJd8i7RC8w2NBoqjToy8tqpDhqizsYAYtCfF9kENVEt4C8UkmZY65fzzH",
  "key10": "4RYBL65uqq5Gg38uTRTeY5PY16TGvnMzvEer23c27B6JsA47Mk5MtwJZjipDPdqrY4dtD2RwYqBbaQyYnC16QgdU",
  "key11": "3T2mVJ2FNUUM7wJfia3phfru1tMQ38YZ9hePmJGJJX7exehYdrLERWQVcH2nQLQu9hHNKT7duBJveEN7buviUEXY",
  "key12": "4D2YnGet9Sg3QLUiEAZZhvDxW6Hbky5Mr5gKLaJP7wXfUNYLrPEDZ1NzPfdj8rvGykfPB9hdMQQ9ydvj7FSn1g9L",
  "key13": "kqe62rYjbmm7G3FvLdU2j66eha9NiwAi8VP4Gwd9bcWA4WV83HuQALh97WEkzpZMo9NpAMvyDDTBu9NUagtvpEJ",
  "key14": "2wL3dQjSWHHi6MdArDnV9K65awiNCxJybJChbMbshzUQa8ahcDk1jrGh9gpBe3T1i7SVe2BKcf8cLFv6VZ1DLiXo",
  "key15": "25KL9om41Y5Q1rLGCcpyRSZ7LTdAkKB5LTutSDbcwGCsVnby7rjhbNGtdcSueuCW8GNbA95vsrpiadJPg2bdTQRH",
  "key16": "4PdtVPHkdFeyiLpjEiLBwzYshDSczc18rgai5CJ9VXhm3sGi2XMjsRGP1KGujAgX1Sq2sqV337DThpZGHzrrnWm8",
  "key17": "3DgghG5bnUZGk1qtoamGUSiNKn3w4VhzbSjVJh1pbCyoemoWASTmCX9fZAqGfmGKvFBy69XrQ1KzcPDZMHybyhUt",
  "key18": "4zz4AUzpMus26EVzucib3gatjGfABZj1MLNobLSDLWWVRiMwtNFuvgWRdVDgTHzEEpZLXvryRZXcHMLRm9ADXMQA",
  "key19": "4GxrCbNLoLVGvdeMDjhHnvk77AqcCJLdA5YbVxqNK9gvPXZNiDombTgk3D2gwdMfdAB5oJaAZyYDDc4t7VDS3w2c",
  "key20": "4XYLvanK9xCRTJKwiev4Wx4kHgr23yT4FgtdWsd51UNLvUBgkFP4aXLPwHgtPmUjns2oq745x8Ky2ypxfmYT9Xkk",
  "key21": "5iMUpJRXMww3K2tZYixp7nVLtwuHVkijehKi9F9QPPM1CuuNa7ZLt6mTdzNyDCH2PXtbzpHeX7eNpfqeAxpKnzFa",
  "key22": "65Cw7i3vYWFdhUEgiRGdq96p8FtnxJTYQtbzQLrZkAjckSj3FDJPr1TcWeQDu4awRy2iwEnx9s6QzwnJUiBFX6cu",
  "key23": "4vmTnUd2mntz4UhF8CLUHF6iHqpxFjZwADGhKWoEbqm3L8FxansqJgTDFx9GCyjK4wTUftrb7L4cJSdehA9mEMSz",
  "key24": "3vMoYXea2LVzrkAtcjTAcNoXXf6ZbcjJjsshy6h6zHxCbH4mm2DrcC8ZvQoZKgHPhmdKLnDmuWSQgzBMtTkJvWmy",
  "key25": "4WS7mbxokUqKegxmf9non5xbL5wdpmJABqHyUqCfFsmLghX8KDGdCsZKrUn6NohV6U8NkcvYH9cZq16fDqhoxqHv",
  "key26": "2X2LiWqEgvmk6dQSJ19tUCB8cAnQiGSggTSyGQdrjeefcrxe29Lm6KgRXyE8wnCNaAzw8tWLyajkNowgXTYeHDmq"
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
