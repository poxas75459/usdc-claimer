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
    "5e2RJfMAyxTTzjg8kAvwdexj4UbvVFsbGbfwiCTBDJPqZPpjt4rjVD8EKnVhXoNZowwKPWvWxYSJiKQmbWyXhXFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Gqg4xmZKLLReG9nw7WcEA18vGrCUFddxWpJYhmXVtpKARUdaHHNUR6T9UDrB47899ecBbgKZD5huqhZEwzNNMv",
  "key1": "3Ji5vN1RbPH8LNeXoZdhhPw9HRL5xj2gLmVrofLiYxfWcxpG4PfnjoSzahzvFsYEPSDdhMexb4o2yXzFDsD3b9wM",
  "key2": "5UECyAy7fpFSByYhuznjLimybdiHyD9rjFsEwRZm425Tnm4CGCuF9y5MQRJLU27Zuh1Gf6Pwu2Lhm7GJsWsKfLsk",
  "key3": "c31d8dx9XjZygz3uhfMhJrKa3MyfCrDx9aRfE2xnN9MhdrTxLWnbPfN7LavVWN3yDV9gEoTbDUcK5MXsLu45DbH",
  "key4": "4TDWC7sBBLT29pGyKp2X2c2sJgojZe1RnfLHojHBHtMGoy65v9s1zvS8y8oQCuvjstE3aHVSfxMVXfL8Cvb6SUim",
  "key5": "52zfPCSpL1v7o38A5L6gXrmzUtFm7mzb75UJ1xeza4t32UnVrXo68ztGgPFugXWwWqSmbM4aM5tWMXfDznRTTQsG",
  "key6": "2yEmq3qPMJgkoNtUqQ4VSX9VxSHUNmtkv2mr7JCFCTm6Qd6cViiFDgfR7KQyHmLgJAoiFbYdZeXeZFWNFVHiEBBy",
  "key7": "2fDTGewLFzeC5jUpWAQL11nd2AEfyyn9R3eFT9Sco11iW1Zsg1nZQoFVGP9jyaMD2qccJftK8ax9YLDNu6EiZgV",
  "key8": "5Lqm8CybipePqRMWpd2j5u42pKJyZpoD2FUWmRUPbozW2TiEJxbimcDf2JdkAeyBb4pvTaZvG4ZfcTsA98xL2b3X",
  "key9": "34eEmtvbz9YFFbWpwrXUDYoE5J16evscQ5n2g7VkMXyoa94pGQ7w6dPZ5TQLAHXx5MjQCTqhSiYmrVAPwuiAQpYq",
  "key10": "5BhzKVXfKUePmpRT1aLJLhchQftJGwodcbv4Bz2NsKKXruWP2tMsXzPUrNhRt76HWThi17fd8JLy21SJYTThnKBT",
  "key11": "51s1GQqeGYvX1gMPi5deoDd8v45v4vNydsebvZnqDP7zShXQGUpdWUBQmiLjaUPEdccUMkHFCvQb418c4gQQbN8a",
  "key12": "4a1DL3BHnXQEDqNeMedQnuaDioPe9Tj9w7PjM1sgfjn9h9yy7tEueW7vZnQyzuFty4ZAvRvY2uuCf9qibpUTyc6i",
  "key13": "4v8LAsutkEKJUnvup5yqiCNMNzZPx8c4D9JjaasCceVzdPZx8tjNNbNmEZyJGHotdyNCXCfYUc7dwW7T3VEZNZh6",
  "key14": "3ipJwmvgpZVDqf5wM3eKCQtJem29b58iqTLfJQM6eVJRranS2FE2gXvYrNZLxi6M5A68EWx8tuQDhNpcPQAn2JoE",
  "key15": "44ytWzBpfnCsrvNEuLvMmQd2q5QGv7ZP5uvRNLtmLRvbMPizJQZi1YYKzBo7AyiQ9q1DpAvLGE3eJ9BLerXntBS4",
  "key16": "127aynxVF51tPugJuuHPCnjEnomxzNjT22e9A2y5oT5X3QLJ2SvmvaLJGz8oj6UtyQa3GgXH1XiEdi5e8SEVx6Mw",
  "key17": "5kpmYvKj63EepCKPVetGq69UyG3gZgrwusVRC1Z9XmiWsrKWzd4R13gfghAbsjdMwPQG5Vy9sRhyR3d3VFAj5yup",
  "key18": "51FTw8sDaQ6WCMRd34sK977QFZdhMwSNxbQGLvpZYQzr3R5vfYdnBmwwBPe4m7BMSejJwwFE2Ag1ydByjeNcHmBW",
  "key19": "4kPXw6kgQxAExZdHxYNsfCz4k4Dec8NkHk7yiKiV4R2RNrRp2DzB5zAchavMEGopfGFqwMwhPJGmUjDseZn6dFmp",
  "key20": "5jGwJH91H48WJo9ogrYmBX1nrSfvGzDCDhbKeB2WxZ7hxkC5Lu13LPgvg12sjqpxEustkE1vMmdLa4HPyRMqyFfu",
  "key21": "4jdDzUNEiWzdnkj7SKvBCkFApdPMcKYvoUHaVEFr4QAmZEwGi5555pVd7zgVFuq1cEfwYSgm6sN2X8Ac6J9fqziK",
  "key22": "WomoRMQTjc5sUnNEMtWZdJTuB7RZ8poYoYWY3Y4XqeXULUWL2tEuS1iZn2TNSwFd1FpNj5STNcZY44f1MCpNomb",
  "key23": "2Ba3XnFh41bokTzSfhr2mkiqkk9xMNQK2rsd6nuNM8XMVx3AajVfXw2rQxBybV7e9DAjLEXdetnRcCJXVoAvVM7i",
  "key24": "2hzyNpqpzF3tgQJdTNME9U5NmFGWwsWunea8MDsAhbtvxAcKYXKiDvELi9g95zpUjNnDdaagB2XKVH6Ktb5wi7nc",
  "key25": "3Wm5UeTjyNrhaP9YP8evqVTAV4ppc12YK9Avwdwa2ywd5y4gjizFPh7bjeKRJgBBEjQvVkqs214H7zTfN8xgheys"
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
