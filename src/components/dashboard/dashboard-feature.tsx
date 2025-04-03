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
    "4UrnmqCAC2S5YdtpwrZUajuGGcrWTKb2zV5Mtk2UZvbjGUUJzPMR2yLmVy4P4gL5XEcksaqfDF4DDzxFyYoyz9KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nyjrADWbPu68nFNK5aAsZDrZsu1CXWxrP5NCKHd6XoNYPbsjJawCbra44x41ucR6FEzWCdt1G9c5kne3PKM1v6A",
  "key1": "4U7oDUrHPfGpob3zN21KyEMXrv6d1X3Q3CpNbzjBSN7tkGyvGdrfSc6TvRUD3kaQpSCg2fH4qwxmrXfvhuSyBnP7",
  "key2": "3C1o1uXC7hkmS61366mh6LhG2hkRhRdd9S3ubPfHviiJsqkLBsZrWQV8qLbkrwJ3Fh8i6S6hTs8mPwF9cmLETE7H",
  "key3": "5qKuqh33Tvb2oGkTeo3DGE7vKuooDdpRohhSGa7uiSCrPMXNgCehCoPFC9vQu3TY1iyBH1QWjJBuA6tgGFVVbQdN",
  "key4": "2cDsbuNJQFU6H9K1RyqMdAaugHspsxsu5pqEgF8ARrQxVzgc4QoSJpdadvaDKdN7p8sar5RQ2k2Lf1bBVHNvmLXz",
  "key5": "5kfvdUL1eJqYdsabQQ8zBMbrq9YoDT8zdoa8jxm3ZZyHCrqGZD2yNvcDckM1tRSSmHjYFUSv1Y7BZohCU8kBSKfJ",
  "key6": "xM6jhkwDLdhZPmvBVYXLjVSNYM5TpzapwaT42Zq7wim4LvzxaudgVz3GducCyvv1bpivygL6AJ2EfEZWkdWec6T",
  "key7": "2AZQiAhdbV23Zmt4tHq9jPa3sA3wAnpN1UV2Ws9c4Rd51AEPmTt1MpBLFazojSwamkzoKSkEpaJmPCBZBQHXQ4rh",
  "key8": "4fBYvPTcvRUzeY7Lzbz6iswA5yFLN6Yhw8j2pGiksZTz7qzSQ5crRDB5dbPpdFfsL4UGXDo5PRwzNHD1ir92TQxR",
  "key9": "5cQEjGojzfFrokendAdUM1JDLZift5CupmCcxdDyA9WMm1V7xifKYFd7KRLY15QgoecYRBRvtgHcx4i6gFV9bPri",
  "key10": "263AbyYL14vqcJg87yfrLZxGDfQSVmuayTs5gV2XU3onpQCWTDapcS7ndFdHNsnY6yxjXmRibpQdE28BfZYJpCbi",
  "key11": "wXaj9Ybfspk5RYMHupr3BdUWEYDLFHNDQwjYbiUVvaHjmbTKokXp79nJgdfFUAJ8buMYEXL1CCntHQHJUCBwL5t",
  "key12": "4s71f7WVgH9hXBx7tF7SRCVRTvFuioFFZkVTCpxjnLb6S8sCfNvmXd7ozJt77XBxNP1CcAcmreWrB7nxfzzHoxkt",
  "key13": "2X7ts9rEXJHmPomXiCCHjLmr92sHgBec9hNFFiM9NtxxdLSvQXMaNaT8SPaSrxjrEJSnupt9KEVbsiJ3AddL4Pa2",
  "key14": "5kirTfyRTvovKsSKqJFCuKGmddqmARaQPgP7aow8uB3dXaQjEzVzpKcVqdCQsG5YuALSh4XEeC79AK3VHNYsT4zy",
  "key15": "5ygi9VjoW8kxjZxbQdqzGMja8y3iau6WXdp5tRvbKgZYwBSZQhdALSaxU6EaXMy1WbhfGhDZNSaXFWFVqNhEv9ZQ",
  "key16": "d29imXS1frrj1PxyQzshnApGA1yXMSrCH6dBstHyVF3BFzo918vin3Z4vrHFJ8apPBG7Dn5YdU3dQAt84cdB9iu",
  "key17": "4vUXrxQgXvLRDj8FMtKcGZmDbHKhb18Z3q7wv9ax1c4x9hUTTz2bxEjPgJu1wqMMsvkvzx7Y3Zoshy3eNcaHuYd4",
  "key18": "4KhLazqCdM7Vtx58SM3etA6NBddXzw1wSLkTwYoixSoXGm1qCcxBTaKei8jzMNmhQKvwYqJoVjxszZ4uRKg2j3HY",
  "key19": "3LtkBggaCQzKRyoBAaMMi3ZkTUArBFx6jRZvoP9sCN2izYxQne1tyhFwSzqoKXGukWLsxZUS3ZgFWkrrc3zxme31",
  "key20": "3C9muPdfa6xpzzHnNdGpnKp7sfWQZCAu8ZpHL5JMUp3kBk9T3ZdVBiD5kdYZGBimCmXD1nShkqqXyyVD5Acv7st3",
  "key21": "3FESupDC1RaibkZkLLRbZ4ZKJhajANwxUZVrwnqa1uixojMm169TSG84tnw1x6zLmNaZek5oNX74KsmZSnMnKKpL",
  "key22": "49BGB95vBVwEKERFojn5fZRBXEiEzQK4XYUmMshNUWwFCAkV23iysV5UCJN8d33yHRFFv491xCSfXuDcNw1vHggm",
  "key23": "2tK7WyM7dx46n5ByYWVf22oz9iddDcMvwVb12j2KXiPf5mm8TXjZFM5txxSGCsYv5chB8xefiZ65Qp7rQEzdgQyG",
  "key24": "xTRcCfH7fYvg2TiuwUWUKE97cwQTxciU55qARXp26dyn6SWNJTVJQNNLxLjecfxthuargftha4ke9hNntCuBxtU",
  "key25": "29m5K5FBSrCaF685EftHsPrNLDkrRu6ruLoSXa7aUBc6ttiPgayRrgmDcASDVQEFv3pMxNfjPLi7BLMAoeuXE9Uc",
  "key26": "5duneTjAKiPsDXuFhjamPiXZ5QfmntrSPH77pPvJJ8rA1vtSHDRJiWuAC4ffKgBCCkj42LKfBfuU83apCpkbczkw",
  "key27": "4X7iMXb6Af2kCopiy1o9cGmnzsgmqaNJxqHrMdaf4ZRSLu7JF4WpN5cTAbRWA2i6qGZEsnen79ce8zPZ9E9g6opA",
  "key28": "3S5hW76ubHRnVnpTV9E9J8dmMDhBEQhXRdYRJZymw5fTD5mkreiiqr9YyS5P9nysumKsWubVQf19xLntGEcFP2mq",
  "key29": "5B6MaX7MPUN4iSU79b8f7jwwnNTQUmK7pS8zxEDcwxJa1wU6UtW4rSVZ8egMNAmEN6FhyVu8ujp1EFz4BHvqKr7F",
  "key30": "5cZZQyjSsysHJMjaXf8AzpWRNcamHb7ADquRWRUmCKpBaUei8BVn5N6HEAHAmdQtYD3ozd3srC42gY3m2s5BRKy9",
  "key31": "5Lp3PzCcJtQHbSdBzyy45Yg4sSFFFVb8Q95cjtKk3Dj9D1uB5GKh3m95trvfPNtbfaWuQRGjYWYCASpSMkU186pj",
  "key32": "5tAAMD4YALT8f7mCNqEvMbKAQW3HHp9ToWyH1BpNSx1zVpXthfJAhQ5YciErKF8tRHyw9fyHSdmTRZFjky1DNueD"
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
