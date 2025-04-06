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
    "5kTAccYF2LdNaU9EqLSFqXmJ4r1g2VoJ5egEQG6aj8vYMZEMxxmsiBx3XBwDcfU78aQQePoMPYVMjW8y2rMV54aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47QvvtrnmiKLToDezrEGSiBMgsxTfugUrRbGQQQaRd6WVcJkd71hFvzbrYdBkUbxRudgBGR4eDuyb2nzZYhQRnbL",
  "key1": "4dtaxyifXvynwxUfrqbZA6kNAfDLivUkqGu7fBQA1nvoUVGHyqQumJqnGdHduEhoHZKfetHfYGz6LiFBhLfGoNHB",
  "key2": "UQ4MDcC9gfiwESGqc4zCvx6Ptj49dVosza3WVjbNFu5jHoiVmbgKL6dUiDwnry43Fs8Y7KrMeqwUmgfZUvFmTja",
  "key3": "3UEY2e8vi2MrAbjBT1ttqN3V7U9WLH9yp9FppX7eAYMemYy3N3SUT65TVkDqb29MdL7F4Rp35W5b3DqQS8wLbwbe",
  "key4": "21B9H9wdy9ZtEwMMaPTFEcKLz6GDV7htzt2cLkNXe1XwHgp62Jz4UCJvshbgnJDsv2EuE5T5DN6HNFFfpLgHrdTy",
  "key5": "oqvkC5LikDxAzncS44j1VNphQyA9XfUfE6ZphYmCP3Wi77T7Pv4iRQhDbkop9WSMsU2ibT3KD9hyzomHqvo9Uej",
  "key6": "5SsfuYEMTWaATfFQc5zq3nLwDUeTNQwbMTyTbgqXsYUwDq2WemV3a1vqCpSRsN8BziDHiUdPKZs6qaboQFdS2pXE",
  "key7": "2R9JQxY4w6749MkUjEckSnC4LQhYAZ8E3r4kUQ9T5Hcrx698Fotfm9YxZygzD4EXfigaBhd6BjjuYzimYKMYcAgF",
  "key8": "48d2sRwNM2oLzPo8LqmBhv3B3mKBXKYZBGGS2C78ji9EuSv1zMJb1HmK5qtrrJRnKd9fWoM25Z9Z19C1dpkRt5b",
  "key9": "5EMXzSWDPLNv5PwTNiCv48rtxdaE5cBEMN9teNeiXiBFtdT6Da8wpWwhrbsSzYH1KS8YafAXrrXrACDmT4dPeXHb",
  "key10": "35DLkTWmrZk4HX5jd5dHwFzvUGGyNx4u1jLnGfy7ny4bbkCccLHiihiSHyvnUih7WYYoTnaBCqcuZYYFZ5KMLpuB",
  "key11": "5kJWQoA8GeRCpWYkWpXVuHtsWZ6F9vYKHjSGt7SrRStmyiBLXZusfvysbUxkaKVX9MyyCj2yMjp4gTDWVjAsgV1X",
  "key12": "4yrHU4BUHRAbkL32CjgFzLWdKdkis7LcAAVduTjjwWHnBx23xVUUuWUMfsG6By5eSem2DyfnTwkesuLnvpusMmdw",
  "key13": "3HBkfcGTmBT5HBneUkZxpMTMjGSG6GQnp8qopyUnyxFjty4U3Vzu4drgEEADKjHc3jqhFX1qTcnDyKKGG4TMgZzp",
  "key14": "48pTiBRrY6BNxUp2sesZ4jFWYXrFd1rPj8YRsHBEeU6YteEg5KGaWbhGsYVXDWuYA1cTEDfwUu7GTiFtMmkLW2BR",
  "key15": "2mJpyrqb9KZcAFmMjJDx82pErgBELjeKCtnLMb5o2SH7bzsSodUtUHeV12v4etyNCyrorNGSv2C7FXdh3Pe6MJsU",
  "key16": "5BpDyuhvw2uiNVVSf9TwJxEtWtGqnvLjhipdHBfi4abshWQ6EpA3SEhEMQvs4SzCg9GmmXHJoB5hSJbcV9vjbNCR",
  "key17": "5CZEaGt7SiJ68GFuY1GDT1rNeyDtN2LUr4ef89RtEF5ZbSjie793EEJfbBkHAhFe61L4tXmXF7s2JXR1MV3gaLCt",
  "key18": "4KqA2HoJTxpFbdGFTFqvsKxVKuu8SdAayHre8PGzyJVbbhZRPk8hyubTgaEgDt9B5xKYCXqnyhjp9gUyPjkooFi",
  "key19": "2Q4Ls5mJ3BUxVsX2Snf7keDUJxP91euWvgiY1z5y8UcaqTqQ62Rc8hkS5u6TG5R351K2Bao9WxauY5UfhTRtXUv9",
  "key20": "2xNBBgkT7FP2SqcCRQMxqpVJ6q2kUYacbpfxKKBcdwGrm3DZZt4QBskQDsHcRxSr1FRfDKmVmHqCAfbGcXi1RQ5Y",
  "key21": "3y25jshF5ADDXSqUVNnwR1NftixSaymvPawhjxgVMdPhUACA6K3cTtJujPG5r2828ksvSEEjjwSguf1JSCPDtUqA",
  "key22": "yMUdivvfJYgN4A4cWdmtRnV1q8pRVa3tzUDw6ydoxJtPDV3bPNqe7KHNw72xLYGok7UoscQCAgdMK7mhaVD4ecf",
  "key23": "2GGqY2BjN7w5vohLRwnbiaFFVVrR29Q1JFMKSKW4fChu8V133AThAS3XDVT2AK4BH2hwNF7Qksxy1na2VA1UUmXM",
  "key24": "5TLANbtC96oVMunXKLemRKTVCUPyERfEpDqoHZ4rCBJ7ZHc8SrzdgCw1d5EwypkSdzEcEryWhx5G4cukvw7GW65T",
  "key25": "2MgnGE9ee4YC4HBnxtE9T5wxXVcuRnePoZYudZvJw9W9twAUm4XUeR45F114adhEkE3criBAWddPRi4jSWCEde8y",
  "key26": "34GLQpiZTtmPexCC15PxL9jLJ3JBgg8bCquijRt7BvReyKpQdjaERMTG4EXWukcgHnNqz4RBRtQ2CbeZBT3tQcTf",
  "key27": "4HC48rzW2g8S2QpGPVDqiei4ayuTLRYPCWKwbSz9rUUuJvNxqsfMKw2qucZpbUpWDjEuZZ3G4HYRHNgv8rmdWMi7",
  "key28": "4iSLoVunWiKToBVs5cuCRXxPdEiUPN3RSTPE66rCBnGS8zKtYC5xUXhtErCpT5wMDqwJMYueFzpBMn6Bpx9LwL6p",
  "key29": "4Rj6ucRxPYYU3zg3jbWhoVyhWzSxoQa2rhcQBA59EpBeQLv1mDYwuG6GcuWPL1DSrWpxpQpAa6vCKCbzwXES6sHT",
  "key30": "mAXLaU9V1Xu1fk2ov4H8UNMixgQcrKYfrgU5EoqavDJY41C6BEAqpiRe648B3tMBYtcfP1n9odVSjMMdPRL8ugx",
  "key31": "7w3arV2Ucw1UPwDc6YRXqKzbBtbjTLVvEn2pCzN2vGGdvwKFnLUdRPAwVhHfgWHh987phUVnrQXfL1pCJjM3wL7",
  "key32": "3aE4WgMRLbijHTwhiTGSvXJnA9w1eZVetujRe5mAEiDATDrn93wyGJa2ZFFZzNmKhXHVnxkWSk4wUYYmcqoD2Pe5",
  "key33": "26yLUG7i9yYKBP4qS3hFiKnmWjW65f4FEKkqBvMXTEVeSwgV921dw5AdBrtgoC2wsjGk1DjQtyQ3iwcLRCwPLoYV",
  "key34": "5VpHQsZQufTNoo4LitDVPmtqvFHDUXhuhqTtK5F5FH5Cjjkby5LxeCwLM3jBA1DZpfYAqmqLQxj4G71drYzdRDer",
  "key35": "5y3MyDGP76LWfvW2SfKgdB7HFvoQue3J6WW9uKGCvEfjXEcRAjqu8UF8bejMt9KkabHEib7zEAhUawntPQCRcFj5",
  "key36": "382HaSJrQBMnEgffjwGnovq3wx7p1Ap5WMh36ZQpUCSTq4BoTAmFsFhmbNUyHynMVrmDdpYa8wW7afrY766AAxpo"
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
