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
    "2XNZsxRnzpAymdAWvQ2Dd1AwVmiNPkDEkMd6izFP3gB6M2gS4eqtJQrRp16cqL5cRbDR72KnoVZKeewjpqH12woY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBbNTVcr6zLjesauVSY5xueHwZbVKXrV1qe23CcXkgmNDnSeycKeJ738i2egtSGJBc2dGG43FGYCsuPqp3x7V9e",
  "key1": "FYzCfk7VhXhmFcprN3zKTH6XZQG8LFLwrDRWNVSi3VCCaG3dQ1ZLGefPEXT3wCSf8imphFhrfqpPwqz2qRDRmvp",
  "key2": "55q2WtfDPYCeckuhddWJ88mUbjsVjxi4mnjtsQwKq6Nx5ULC629LUH1gYcaeoyTkiK4S6rMAn8LneUk6Qgbu7cHa",
  "key3": "8UkwEZY6oQoGxxqDhcwjjFP8ZsDRKKzTw46F1fTsFtJAkSp9nZAv4zYSDYG9JRKK7F7kqFhNJxCFVWzmc51XDaN",
  "key4": "5mzMfYvRJ3ZLao8AwMWZnAWPzsx69tYzrChSCR6rzkS5oGHL3TrDk6qt3NCP95cwJmr3215fdPHu8biXGhRrPM2r",
  "key5": "4otL4JerBBQHGvcYrodwBwrGBM8bofriWiY3wkJYThyr5ZRNi6JE9o5L9yXjCT17iagnkYPJA2x6KEpsyyy39EtD",
  "key6": "sR9g1K4DgJNNbwgDuyUJ3vkJhpoRKDVzeDf6rBVrC1qCF4Jn4DrmqY1UBRBPU4fiN255mESKQa4p1sLq55qBFJg",
  "key7": "5E1i2fFZRPufWXuyNkv3vMCmwsWae4LAP7me5Fk5evipGmgXKvcZEw5PqAzHFA1pdLLvT7sAam1RZyf66qbNuvUF",
  "key8": "41fsGTMJpUVrhFARVEgHGGkZYVgcV4ZYXT3o3SqMJ6Af1Hem8sJ9K4aSbQ2fRNdZ4j8USXsFxm4f5vpsQSmUMi7f",
  "key9": "3zF1FbNh1VKvZBYb4Ujg61fkfNYmNTLmudztxqDYU9HrYw8M7tDvGL8QSzG8qNHvi23k5B9B3ma6pcx2KSUX1J67",
  "key10": "23d6wmu1vVA2EXAtZn74ZrFy8v98RYw2PLvs2d71pXYeupHE8vLFnbD8t1Vc9WxDe2N6Zn3mzbuZVcbZ1up8f3Cc",
  "key11": "2xbA7Ty9xPdhZUiJXf2qgaMXedhGBBB6KcjjTdEzJdS18BXupHDmVinCdh9RXR3pmg4B3Ppt17UtMf8pFuT2Ptti",
  "key12": "4iZeg2KAhBoKm2d3SDy5oAD2LaLMpN6TjKspnquMQ2tZsYpjuAX59cT7LpVw7rV5E1hTyHNmNMArCnPUAQrYfnma",
  "key13": "3sQPEKvztFCJ8qciGAB8tjNjMxwbYnTedkjKvrG3iRWnhGbKd3Dh28ZrvR5PoQ6ZuBEeYWyxdT6663risG6bMmUV",
  "key14": "2r94862BT6uvwPozjXVKFmvTs1eAngBiVRTKvWqiZJRhmMDu942ZjDw3UaVvc3hecKvZDyUt5VrPG2NijEvPujYd",
  "key15": "3rwrYbgyEitAWwc259DEEJnsbtn4RPG2LtMCLzmTtPSJxXZhJbNSX21br5vfdV2E9dSLaxDKMakAR3DQfRxsGmEG",
  "key16": "23d5BECPZcUybBDzrLZQxAs7ZrWzz4YQvmETaVYBH3q9gkSSgpGtb7e2Ffv2auGXfCF2DMZikdS4MCgProXz2B2X",
  "key17": "4EP2nbrQRNdtYYw4qT1j9ZQ7cWduP2BExrjy1DnAVbKGYM9eoKnCW1t1aF78FKNeSVHs1sU8t4QfaeHoUQzwPs4B",
  "key18": "wSrFGEXqWNyoy86kPY3XvF9CMPJbLcQuVoBZcLrW1yyjaMYqt4YfEwk4S4XzmXcDv7zKWx9YGCVJd4K11fdVYje",
  "key19": "2vgLKS5xTVi8Ev72sBQ3mBV27SFR3qqG2T9PNENz39eWmism8RbSJEA8EkqTD6tq5RZGcq2N33gj9a2phJ5bqxfH",
  "key20": "2bTjxxEjiXkZsK8o6ystjGPHLqQ9DYFXnppwo9CtMnXEVWqZcypNbYzZVfz7UwUc6eisDMEZgTzSENmZJkZDCGZV",
  "key21": "2m9zGXdFfZvtcdUk7YJ4bgm2M4rBSvcp2MT3f3ng9tDS5TKaQk52SSj8ymAY2zNBUuAkG1kSSP7ZNh5bR9vXYxBV",
  "key22": "4m2gn32JzowYLo8yv7MZjCysTv8mZikpCK9fRHj6CfxTrSt9V7cVgm8oLDkt2CjzguF9yd4j1U1xC5qA3fdW398o",
  "key23": "2Xt9tPhxxzKGSM5JzurjJvVvzCDYGLuNxheZFvEWCEKri2u5vNxCA9baHH8JZfevyNzMCoAib2eG6rWWtTGjqPLd",
  "key24": "39N6dfikc2WnAjvvS9EHLxeh39wpXwXfpDyPGGgLDCx3VJzuogDEk4fj3xy8mZ9u4QkrZkovWhQXpcm4Dbg8HYxX",
  "key25": "4CDumwj9jGTcBUsSxSvujLG2uijLykoqAG73vzH5S1pCrdkeovzuDD4rGUZTjviCJGbHYKu5K8G9P38vc5kADWKF",
  "key26": "q7K37gHASWsYrNWPTNg44BfnxUXAgzTqEaknB8vnmRTDEVdHw1SDRq1n1QBVW7osVQhE95wtJ1GWEWDetw2cvpM",
  "key27": "v4Q6T8xLzmkVS8FcrW6NTKPscTXsaHmknpG8U71193KwytgRtNxUtc8UXVQbE4gotREZQhN2cbukbwqcrdvhzQg"
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
