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
    "3naapTZ8twGjLjL7eCkxeEVR5mZkyDKCnMrS7EBmYr5pFkJuH36t3HGqJ2KK2ejzZ9H4AKWgcGExTd3BPZeLKC63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcDRQ9uNND61DtJghCXgBUz4rau2DeWtBoHPNn8ykBEgi731YXLJyQAZMNUazWpt286sp6RzpRKrTNNa6WGQCjp",
  "key1": "654GcWj5KPJT5B7yVF2CdsyUsQWVrgrhjLcbpGLH8G7hkPNgD4SnhUHc3q4ijmFVzkYvtnUeSTT16MhKnNLV6rVx",
  "key2": "2dpoEWafNK6cRQtRAEoZF9UP7f6Rxeuh9drbuDyC83LjLWZXqB3JL8copCRaq1ZavggSkH4wTcdzxPfMbhYh4nRu",
  "key3": "2azLvK4CAqiTzEpv2QUeGjarGfn7oXEWr7RDwDoR58bV5MrR1N332qZZSAPayrv88iSNHf2UT7pj8mLrX3innQGT",
  "key4": "4xuqoS8FhygbRoMBcHk1KVC6Cv8B8GjgdHQeJc5Xqh8XnJ82YVQTr9EnjFChXq6FnW1h2zAzZX2m8xK5AusDESer",
  "key5": "3X4h4V4rLzeDHbH5DzVDE4JihRDQNGfvG8yABK8yPCkh5JBpjtpRCi8vhzfQsKd2JTz7oAGFc26twsK1t2obpefR",
  "key6": "4CaUF4FFNpfYKv9Es3riFNMke6TXt9KcqSScd2xLzoUsxppbKh6tfVB7vs2gDQ5knzCJGHgXNHTQSRQACPu9cZ6i",
  "key7": "8bw93x7vxq9XqCtXi5TTEhp9uGiKct4QxREjWgviA98HpWmFGteRr2QH9cDoHpNk1U62mbfMs3ee48pB2PAQWhf",
  "key8": "5c7HdEvSKk5G7j3sDxdcSNNarfRC5wF6R9VZ94hmgYNHFPHRmhdQGFVCqKewDGik8icQxuiQR25J4Ph4KXkj23jL",
  "key9": "4VTMKukExn1pD1V3SRKmcaNT4ZpiA8JdPsHcFxZv13MSHzyNBThFwxm5Q5Qwe4461eUc6Sf2mNTysfNL3FTJVEJX",
  "key10": "3RZo86CfYuiGW3XKaHEKXy11dvXk6yscTDsnDaCwqjhwvfm8uCDsir5MwiyY7ZGeoM1XR2MyaJHE5apMtFxsHybN",
  "key11": "snY3cfnWBFeSc9FVuoRFhEgGKCCmiFffnTJQpoy8Yfp4JFiDMvNch65YPTUrCPnFrz9rfBFS1MJ4YtNddJCyc39",
  "key12": "2HPVcmwHGBFyuBtCzAX5FZrsp3iv1W9AUHRdJnh9eYJa6oLYkrEuRMYKkhZmvooWxo8mEciewkjoAqAbwP5kyh6M",
  "key13": "2RCcdBc8qcHKXSvTuA2yykJg4VaUzrxt2Vs7zRuJmNfCoB4ETUy3S9R5LD8rVnY9QyE32pniawiDgJ76epegmsAH",
  "key14": "YNQn4HojniTbSVdpomh8mrCz1bX9GMzp3YsEFQWTvLtMUivS1cmTEWe2o2BvS8jQtsD54a1WURYSFA4mnMGS5zJ",
  "key15": "2GzdpPZWmk56vDfxgtTMQXvpyb848bPGvTUVH88ykqQYHGHPp9kGqW51BmPfrnLHkyb6xnQ8H7LJYfXE2kSZ3eZP",
  "key16": "2D2YVZDR1krUsE4mG9oTA4hayMGFy5DA69ew5CN81xeyfCFzLZDq2z91NiYresJaPKBvUM9SWozbgFJthUWwBGgW",
  "key17": "5VpWhMPrqRRRJ3jYbzV2vwREeBE2PrtcGbhZGUWNvDqYPM1hpjwezyDAwxMEv9H2eNxWrDv4mLJreE5roRuRtWND",
  "key18": "5bJmLCGXhuiHCWWQGAJjpVQ1vhn5ixD8ucJzJWmcboHExh3XPsxcEENHRMkEwncXExtgzz7ZUjuNHMdKqS7hn1tC",
  "key19": "2v3QUdzfpT83XM8o83hwhtvygCG86xM8Nje3mnUqqhSwecfCmwu61eypjoPyTPYygw1KTeUgc2MVKnaVCJreGqpw",
  "key20": "2EpgEUcjGHKdnFQPWquAy6jph1NpycdqMU3SdiDXL8B58LsbALoBFDJGfb5rtGq7ryXithc3Q3pTRFqduM33pU4w",
  "key21": "2Gm5NSCF976DBfJfMWmqzf94MmjaaUGbKJdL4iTkbVJpFACvcpxDYQu4bicqwG5Zqcubc64Vd6KL7npZhSDacnsp",
  "key22": "5bStS2LKGVo93BmZhbAe8qPsjD5cUg1f6KkCgHv1DxE4W6roF7gVYhUznmE1b8DqGNrPUAFBwSYUH7gLTGvy6Xka",
  "key23": "3LhFtqHwKcwgGqmnw7KxEHFRhu8DdF11FKEz4PjjYyG5nR5JPmMYsevutjhQXUyzW1gL4X2Z11oWSqFFnmPDgLmE",
  "key24": "5eE62C7KuhBcXuvAUx1wH37Q7QWoT8PxrVe4U5uuc28rjYKBjTYuFBRCzifobKwLgv8paKrN5m4mFqGTeg6fba2C",
  "key25": "3UxVeedZHdYnGBwv5FLLNRffupsZEMFszE9Xd18LR1jFM5RjNELpF9A6D1PfNkeAgTEkawQ4dCTrCD3q7MgNQupY",
  "key26": "4FED2K3iNtVWni5SRDduT8nfJUwgpNuiNKxjnQGxm4TYfPy456JY9bh8E3ZUCGuRXU2xkCX9XNfutKZL8fFmBNxP",
  "key27": "2ncwojM8dxj99jZwxeLPqcMoqjeHiRx285qHyHwtFG71arSQhawtT7YALrAdJxtwWrUuPkzJPrYLuzA9rz71ZAyr",
  "key28": "5JJ3x6rqTE8e62ynbhGntNywzVGvytpiAcPUcz7pDxoYx1ZyhW1MyZxMaxcEo4x2VixMMe5Wid3CmbB2jUPMEoGm",
  "key29": "26LtCWhmDV7h5MuSkmcX1Xvd5q1cniu3UXs64DbNJ3eD3BonX8SFeywcbp7dUw35vajkZkyUNwcRGq6oaSyfk6Ra",
  "key30": "3RuxYASxxbX9CQk2Vc6WHr15zwtwv7MnyCAkoHv5TvVrtnJQMveLrKwuBX3dSrbZ3W92usmcwAwR7eMBaaT8p86B",
  "key31": "7mKnJRkyPpG1vJTjWqKjHdVtwKY7FUw9yCNoVR8mwhnanQEbNCXP3suJU9mKEm4YEChfDKexnT4MXmhYpzQg7uJ",
  "key32": "2kVEKEYoAs4gEJcAE89gXyScHZar6PxoYuYXQfPZtM9pSdnDLBassDBG1LNhkrEXjxXTpmAnfhKKd2g8bvvCBzSh",
  "key33": "5xXa5cHBDbHCuYxFbBmtEP63iDHrevdqU4hMiCYUteDrL6w6eA7Gy3BNfJE29ZzsvMcWj4ED4GvhExiUgqtZNi6n",
  "key34": "5LC53CCe5yw3uj5CAerkdxcMupX24v1FPXyPQP5EiE5WybDq8ukMq2wSUGwAmr74QUJzAYUuQQjV5SHuUvyTKrkr",
  "key35": "95vFsKZKQNjnNURY6fWHZiAgTkaZ4z3Q1QiQEmGFshE7r6iztK5STWUi5KdkaicRMPmHFivkjeFV1xify59tD79",
  "key36": "FddVjA7S8QeMzDvf3g9zsRN35FBhfsy8TKk79XZ8zNmnJbkq8AjgiJzdyo7ZCbpQ4EtY6aaLdwVRsgHGUsZhGBL",
  "key37": "2BRRpiKgfWdbBPog1jXzyrvFwzFbCrfNN2tZq8GYW344oCAhut1ZFqCi9zoy3CXKnmmwYecqe83e2c7fJ17rWUdf",
  "key38": "2MWWNTDoVxMBdRkKnUBiKDjgZhAPRC2RbpBqRSiD8JGjXtxDkHb9cGcpNEe92aBQggxRF5G4ahu2gLnphb6gnaZ4",
  "key39": "3EqRq18iirmjS4By5vJMojoXgmkiufrEHri4faVvDoRuUr7bdbwCT4Qf6MYrNWHnbKNx3mThYwU1PxmwDJNqnm9k",
  "key40": "3oZqERH15qP8J2LwWUfkenWXXV1qfNgQjgS6PooCWvJkXnz2W9KdVzpauqJxu5vTsk16k2yW8JN3Ay3aU4E6gpHa",
  "key41": "4yzEhc1kuhDBPyZcyqyPLbd3AMt9wQhWRAboVxiDXUCoAb3nj99vua4KJghxhjRetXMKupcnDymU3LB5C2akbLbH",
  "key42": "2vpPcxoTV8cKx1bZ7oMG24BB5pQyAaTEArDdTNYDRUBvpFqSTNuovLtVZj6vQswAwTFDt8c9FSsTstwkanNVvzJj"
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
