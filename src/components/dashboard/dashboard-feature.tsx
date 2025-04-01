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
    "5tzy96ph5h3UB2kqcTBAa6Y4UfsrCKWAiddq55oC7rhRSougdhVLkJoCQx1sPoxnpeAoA7ZdgV12vTJVk3zry6nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bWYPHZUzABDJCLYX7mcMFNsqgN3SEBTVorYjUCwP668p1fSij8QUGtrB1Ace83qHRXs35wSyD7KjuXqPbhHmP9C",
  "key1": "4jDorvc5MBRXcEPmCWvdyLjtobtf77Q5hDdvGTsDjqn1i3EKb1v5E5VBrzdzhHQjEjyjcR512Wiix6cnn8XCgyuc",
  "key2": "46Mj78QuCctQGuFdiLkHeBHZE9E5wHQeLwAPNNtABzEgv5Q1SKXvq7G3ponpv7PMsabHvxggCSoUWG4itoXzv6eN",
  "key3": "4nEC47NrpsaKpKY5sqjyJvBG4zUifeE247wviz1BKMgqsN4R3t5NVTdRXCqbALCs7aRD68iUE6S2RmmWa9vAV233",
  "key4": "7Bns2Rscnp53eCEUrmvTTtQGZ2rWjXb6A8yV2tbPCQXgf8brNWB6nZcaPYMYeVMpS6SoAPwyfQSBmMiKfFdxd6n",
  "key5": "3bFVWyph5QQVoRyxhQWKBnj1zPKeiSx1ArzkLXA8RMrVbckNwGNMJWfMzfYzx5UdssXVx4gjNmjvGC2UhDTKBp12",
  "key6": "5yrBRwUw3yBrbHysXnbBUDQDe4svK5usraqTbGmaRMDMFdKkG14wKo7VchzqPoTWUKU93GGrdvfa5Dm1d3kSQw2h",
  "key7": "V2ZS13d516Yzeu8jv7GejG9R6DU3EEQrTMzKP1kwVZans3GAHMH54NkgQ9U4njLSmtfmzCfLxvJpQtypCNuo6WU",
  "key8": "2kH8ZNaWAdS52xkapdsDu9x1KUaHVwFEZLLgFiKn9opha71eyGpZUvXjhJSTHvg6tDxLbGW36Lmq1Sfdpd26RydX",
  "key9": "5jdAe6zNxrxWXKWXZyd3bNtrUmkTgWoTtuywpr66e7mCGW1hEWfbznStFNkytQwMNPMms3V42CbAhQsT8YvhQ7Bi",
  "key10": "2CSYqezLSx69VAjqVmeGbrLM2rHdsoFYtc7cVy85b8AyxTonkWVWFno4DaiGdsv3Jih3Vq5Kyb5mvFjCD64cdcrf",
  "key11": "32FWgmYNAqGBKQ6zBYH2wBoXcUQTuGKXh3NgiC3c7P8jyxBpTas1SAzyfkvCefwfkq5t9w8RYmW86nfL211s68hH",
  "key12": "33Cfquvhuq4Vxbu88cBmG7g6ucrUSUKdqnXMcxUMGyR7xumNt2n9cg8Dx3DZHqgcKJL3ubRYE5XjPWY5z3hbC33E",
  "key13": "2Y2CQBnavr9Bp525YSafSPSLPtfFYa6zUjhUxnAG2XqjM1GciaESGTQ9Au12ZwdZbJhwwGayrQ6QhQKEYhDrqDAw",
  "key14": "46KbWPWjCjrKe2huJDpNWyspkVy19reAbMxCKSnWZykGPkiH5WLtTfKydQMrpSU6zAanv7on5GWAzsVJ1RSNwctr",
  "key15": "4anFgbeHbLagDKLFbpHM8K3nRUAtZD48wdN1qw8cvzWUf8hFEMPo6ACxQU67qiyzYvnLnvj3D3dsmRTZgA4bYDH6",
  "key16": "5aghfVG7Mqnv2LcnyWYXvfCV2U7C9HZho9NU8pR1LUkdnWTmTjChi8DZxXdajmeNmiPVourPX7HwgpZWarKY76MU",
  "key17": "LPxbJrZ6ri5XAWos5bCtN4qsWp6ZuKUcwhuduByUinrHzsBggHoG44M19j14Axugs6AiAueWQkYp1HbsbZak2Jw",
  "key18": "3eTXSK6TjDCJFUvtGRLd6iYuo8pdxCh31ydy7KqD9j4xKZqyz4kk9RPi9ZGzQT3YGzJE1xtCpuGLiUU1iac5fzYb",
  "key19": "tQLuqf2bmEiJQ8oaSkpkzD5gVDUdDmNti5kRD3b6BZ6iTKZuo57pNZqHZv9fEYxmGqsQopoz54YAvg319Ybhnib",
  "key20": "28pptNQXHJgTUL7yuZSQvMMkZ6BZmisjPKJ9iyST9h1dhx45Yb42joixPtYSNEJro1QfZZ3M9h7Y5oXFYzuRQUh5",
  "key21": "4eQNFHkMs5p4qZXgexXW8mMNnUu3XjYTPoc4hcy3PV9SeXWKUg27LJV2Scuj2nTzHuvWzehK9pZngjdHpJiNCMA8",
  "key22": "5KiyDyScxbky89qFRdBezKn9UAatBzNt6VkYjNCtx47FE68cLFkFedFHZSy3siee7hSxf2HzRrmuaSWBMWFZCqp3",
  "key23": "5KDtomcukWsiFhvZv3gxv5xcw3hw3A8V14UiCKef5odH4MMb7ruh18BXJhYHmPYyuFBBBp6RQpPKGeZ2HPx74EG",
  "key24": "4QBmrCLtqpT4t6889uuLm7TVDffU6D9sU7BBzzipuP8Kutd1sdhnjtt2uM5vVe36TysPXaioWp5w1D3q9uMNPbRk",
  "key25": "5SPLpHQPPj1KtE5CU1A2BbJeuhAkpSJTUkP5gQVqyBKyrawEEEgqopXCu7DavCMqL2RaTMUGyJuawKywFSBC1X3h",
  "key26": "2SkEg27FYraLVHK5vWT1PB83WANhSR7oextcY1EYQ4nG8KGdYR8VVeNAbwQMTpb74Yt36et1RMdzdEv4WghCvshg",
  "key27": "2qDZWvg9FPWStTxDMKFpdC1GCcJ48B6MxrF1p2hetwh6uZvcCj1PFyg9iBA1Ze3GZk6DHdH2Xv15VR2LLY3b3mYS",
  "key28": "26xEssxABYKL1LnpNL2iGw6kBCLmt7MJvNzDTyY8TQwxNsXYpdXg9JD4BCsSyfnbUuVBFMnXDDeaHWidUfjgbtjv"
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
