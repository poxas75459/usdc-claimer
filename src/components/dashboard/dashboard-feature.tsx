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
    "CfKtvFpoUYTAHGxnQiUGLW51cUbsLAqABM6cD9enKoCpz9URaCR7VGyrVycwyAEoBMQWSh7PK34Eccs1HjhtjhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opSGVde1St4t6WAnjoLWcF3vsp5TnjCH9NFYt1nbkUM9gnP5BaKqWsh2jdNyBfETJTpVwB6ovgrH2HDMg5MKatJ",
  "key1": "4BG9Pu52XVE1VcPoE4XDpDsH5B739ijf7oaRkbHWWjovcEsMYUSDKckvDmP9qda1MTeEBNYE2x28BUbKih7b1nkj",
  "key2": "3juBdQ6m7xMF21E7y6nWV2Buzeg3GxsRCaGC3oxCzRsNte673wN6NePqEkHow8eyE3EbHZqQLqxNzCL8oUEJqSRC",
  "key3": "3oc5gAx3NyGHLsYeizc7wpA4iZbYXSi2ozYqcV9C6sheVLXJVyDEdrn1a9Ydgt7mVswnWX8USy2zchwHyGJiJfKE",
  "key4": "4UbuQXhaMGo8EB9XLGrW132fXecn1vy3TQngf8Nrn1hVh4pdD3XujdKRAxecYkFuqfqQnhLMZwHrRYxnDS6KTd7a",
  "key5": "5iggGP4Wf9pvrD8Qe9H5BAYnQUVivCP6Re2pwURShBXWvCQoRPsxGoNju72Ke6SWqe58GLp6LJRW78VmrTX2D73J",
  "key6": "57w5FYrPf6AjXVZ9nr84Fv8YBVr5Rh57oEzZi3FUDMwEUSe3bEdxii8tHJx2Rai8Rt8UauxtTjmucTrU6o9be8mP",
  "key7": "4YkFHd9xURdfy7KwtknktQ8hJFryP4rTdV7ZXhHj6byQ83mhW2WwrMyRBtnLT4hFKoXBNnuxNzoAdVnrqoCeEVmS",
  "key8": "4spRswHgm3c4dEKoGtATS7rT2sVwR5R1G56Vn4nmsGc3KNVBaXh4mQ7Hz1K3pzTHeE6p3P1BzQdQ8pSNj3TLQDgG",
  "key9": "61jznvf56eJ3ifDu83nw8KfLDoXai4sjJ8kCwCqpzHmYDFqKptrYwM9Pkww7VJMEq1repR7gr5RqCHwsnt3VNB2K",
  "key10": "5Jp4gMKRKiU6GpV1rD8ThLeAEWDrc5TKg2SLrUhgJeqm3msf7vePzEnwyX4QL4V1EyotYsDhAkHcD4s3R8hhhnA7",
  "key11": "23h8b4gGh58v17zrsER8kHSDXZs9CoaQnxMarA7yfxFjdQSrAwLACfp77JtNbGfvFAqQBq4MmkbLp3z3wJgMNXGU",
  "key12": "TkExk2jiFFZm4RYQfVzra1pzuHf9HhmB1GLdCkJAdKhAn7HxFELpCrR5u3XwtofvrhXrNhPY3FmQB5vghQKp5sr",
  "key13": "4ctJr3WHAQ8kHBDdhrYxHpTuY2fSqjKVAdvM66RS1VKyBVk8q9Nx4muKEy4AT969zJW7UpvSgpi3x5AsLf89NmgZ",
  "key14": "2eoYPzM88s7kKoUEEuofSCTPyNC7w67spCktvWgNETd7KT6HftxKZC4uM4RyMkbh3a3pdNHdR4dg53hqeScyjiEP",
  "key15": "3FePbPvD8m8qcRgXzWedZGBrHi6WBW68oxBDJZMKd5xaixAtE5wivkmxcuvWeGLnSctDdDhfM12vtVktgJDdECis",
  "key16": "2zRgGLS9JxCfBSzDT4GVKQ8MprJpx8AkFYkocUMvh8Ho6x5DKjpmRMKqxEcxuDFhcAypgwggwa9MrzD6yYRwBrUS",
  "key17": "2bUPd3uqsXVUHmSTZv5Ufhgi2oH3cji9UueEvLcCdQR14XpDebnzFYZ2GyYktk74MoQwvvKUUcSVqxZei1ueWYUs",
  "key18": "4CukTa6GE1BaDVxDnWyvsRkCagQ4q5k453EW69VPocawxYmVEg1PDT5Q29d3CNc5hLtwktor6SZvvVXzXuUFwS9z",
  "key19": "2Yr1SA85982tHyQSs3NVEkxwbVnDf6buddqKhyPa2EB6W3BLjS7K5YsJFbm6WyM4g46M7gKX1aG3DdcBDrV8VNHM",
  "key20": "3n3nhfPaTrYkiuq4TBrpzQvcANbLthBY4Vu2KRc4U3VEJV8TMGCfqoLtrHTmc2HXshonrJaadpGFwC5rLUnF6dT3",
  "key21": "2tFABMWJkpAPttSfWrZXFbt3GmkD5iYQePv4DGvcBK99NbWYdj8fodE4BbszjNZHzzf5SJYjjaRXw8qKFycNpmkQ",
  "key22": "5r9k4Jw9wxkj9xHywZCuC46UNGndPvPa8AdKM3CP4JFTwR7ztJAT2mJhLTheGyxjouR1E4vqzyRDqMPyUT7JDBUP",
  "key23": "3rWwnDhKgWknv3kVYyKMiC6t9Z5p3uLdebELq48PFkaxQEoW6o3jEJ146Faue1e59XzgMX3fbBEhX4qRpsP2NLea",
  "key24": "3ruCqex2MgrttWDG3ku9x5gnFHi5GRPZgnf4z2Ux6fh9TNDPfXiR4azgoD7qLkcE8cfBK1pAwA4MzNsPbwivx7Y4",
  "key25": "32FqZhVhr3HGhja6ZT2q3pcM1bug26fSPEDByZ99L2kewqhLz7VDqvsFcQ2Cb2SGwV2EQYsVojh8ZfJ8mo6ttkhu",
  "key26": "4hi91141wkpLR2CbZtz6Z9WVLdvUDg2VPv4WVVgweZcjKAzJhh6vhxKgoFfezbihz4hCyTRLasqGm82ndG9qTLj2",
  "key27": "4pywJQseAxKAbRMqx2B8e8xiJXcRgSwxNMSRQT1Wu2naRihAKg2z4Y6a8ZYzUKKwqxzQFU2w8AmfU4bRoTf7Ka96",
  "key28": "2zqW7oKJZ8Wduvt1v3Ns4L1rxRUtRiw7skkzTjq9NAM57LkD5KyGiRRxdSjGrE8nBzrThyMzb2V7MSNCbqiEW8Nx",
  "key29": "3nUrnpYYwtxZt6wN7sNa9g3bUs5n2PHceDHmwiGrDn9jAAyQXSbBybroqytVtSPbTKFqdfTr9e3z1XXsZbTCWnaM",
  "key30": "vvbZaLgk4Z4fB78KKdeGh6d3QcVmrrNkaeJR5cyn6nbYKfRyfUYKAuKGu33YLVe1YCCzbT6fX7gYpxCjUQom9su",
  "key31": "5VWxjcbCJA9BwykE6aLAu9mpiwYAB3UZHFcEcDnnung5Qh3iaMVw1EiJVXytW6434K5SJSVHWS4FmjbNnkRavpou",
  "key32": "2Xt4H2WChSz7noxqqx581hjug5GC1RSAZngseHRfM1DNQiU3ewBHgvEcu5BLeGrdj2Wb8EYJhLcTmGRn7jjtzGCR"
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
