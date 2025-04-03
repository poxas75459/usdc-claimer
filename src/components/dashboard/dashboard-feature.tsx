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
    "2yhmHDAwxQ2ePkBiznwBtPuTAwmWAXgQGhJsePnXAJLf6UQMJb3BVRvmAFRuSDvVube3jfLt2UuPKMNaLnrz1tEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655eYh6ayxc8TaoiQgKZknZczDGJwV3EaYhApnFJogtfabdw3qREGpqjyNNxNbBSyypZCBxkmJ2NZgV6sfwba3zW",
  "key1": "4g8mswKmDgegZ1rbKB4mWEXV2yCERe2cv5nkxZHxv7kqA4gH62R4vYuRTdtTzMhm5tjgPBnSV4PAYKFF417SNVfZ",
  "key2": "4WeZRLvbmroMn3SNkEC2rNJAzMrLCaoroc7HVXEEgAxxvPH1AoyL4V55roSm5mBwqZdqUwRF2UsF8gSUHPJETJEE",
  "key3": "5Fr2sepkoCjpgQ2TrAP7FxE9ySQzANordq8hXJH4rCgUHcJ7jsFWf6fT6JwckZCpYwHZ3iWzm8XDDZTHcW8WqQ54",
  "key4": "2XvcwhDDh17hjn1FyB8oEWtNXL6Eddts1rLWV5m3dfs8L4hL7CGVxWVmN14WG2hPq317hFgdjWaeuUjsKTUrjFVR",
  "key5": "3bMFhZNB32cbEnwgsohxXVEZiewm6eRaQqP1uC81PvQpNvCunMe5AFNvmrHRjWhTfBVjZTtAzq8bVQBgaQXs6FRS",
  "key6": "3UMoTwpEeSb2jvRvp1ADxJ4FpkaMH7WfkAzSP7wS4owZTMna2XoHuiVyJsFf6yuHVwKj6n6uunrbcJpzkaavfYcj",
  "key7": "26NX5QHQdWToV1XmcQMCtw2YovrPDD2dfgCmQFZmetDAMRhYBkahCbabxUwAHNm92iiMNUjkZ6LRoDtErT776qVF",
  "key8": "2cLjA8jTrU7BqzWkKVPUukstYvyvJ1N1sUt3Ad4soCXgdDxg7efn8tyQnqwtXpQGXriYr63wavJEd4Z8GsmAL71r",
  "key9": "3Y3uqCNdvwNwVMLX22UWMsRWNLi5BeAQgYgheMCKy78KrijYpzDX15TCNWxoTEoDi7KdBkhW18hUxQLwBf7URVt3",
  "key10": "3zrmr59Cy3CdhmRKVUGLBJTg924urS4ni5cvS7aVrwoqxhrThxAcsEjzDK7q4sFzpy2jLcViEwa331tViWCgrH6F",
  "key11": "4e8cJJHDFhhxv5GyZHarDtjbx1kAhF181KBYgiV9Gd3Dg9Kui3Smw7cukRyDMoFHV5n7q7rZzJudaky9zEriKg18",
  "key12": "2nZFpRhvNB8BxEsXpQqUFZjsRc5Z8tdwGXYC3P8HppSRTnXi2g97W4CufkWo6gxA4beJZKhVcobsAHXXfVLi2nS8",
  "key13": "3pnnsJuTP8TYJEHxxLB9J41Sj7Y4sHdRSU6ybMwA6dXfHjggBaWTqe7JQWGwsWKPNQphz14zwMrg4yDe9Vzmfv3i",
  "key14": "4EAqjyzsx9ssePihwT9eFKfJQxTnJdHqLwnmSJ1XjsNo9frNJXGdcqKXQ3VRpsawM2d87axSqxuV4S8YrRzLADBc",
  "key15": "31foU3SC2MwS6J98oJxbwhDnR4xSkqdwuei8ipfQ4eUkeMzNtQgwG4H2XzGY7gpN5YfWSnpeDiuocvEqWqiZPZWB",
  "key16": "59VpGqgoMPLrKPrnSBDyNPEP5P821nhZbn42igkCzfXrqW6YfCgu2ZHsgja2Mp4GT97KNc7tx6uxNKshotzSDDtw",
  "key17": "5ruWTqqzbQkm9XdfGqsSjLuF5c3QYS6tdthc6vXeEe1zS7fPRcGDBEk9QTtjWePvy7hWAYNYJDqDPLBbUH1Kf9aF",
  "key18": "32ayjWb7PWwRjvFpGXMZiTK13kobTozBjttnSERA6RoTHAuaTDSVx5qdCdpPYg3BjPLe3s4pGHXxbv5x4N1u8fha",
  "key19": "5uPCzsY99XFYYaSufBNcYoMX7dNY2B4h2H4vUyGwZonNnhcj772y3XisiwYzwCEkJ8XSLueXnMGBYYUkGkNELTdo",
  "key20": "orzYyR5RGC7Kzsx67YZmCxj7PT9hpEUC677jqKVK1L5NmYgWMmFiJa8Ujqb9wCzXnxdndFxtVQLabjmHvJYVq9c",
  "key21": "29qF4DsJiUWJihSZKYyQtgwJmoQkcHveLcQ981CiHFqHaDCzKDy3DUHrjM9bg3G9jCSWNzb5eLGxxDnrjyT17dzz",
  "key22": "2XS8Th7RpbmR9N33UyQSkp4ag6uZsZkyMcrZgsUtrvaDn6SiM7r8QhzRuRuDfzcS8FxNTBAyVZr82QQScSjaHi7k",
  "key23": "5GugxCDjdQEDdULVfTuM35kkDuZAH2AYkSuNMfrXCgohsx5ZjVH3NLoiNRbH7NSHLCCzgaGBvmoBDoxtqzioG6Qh",
  "key24": "3Fmf21mZUreL1oXEg7aBDHQtnLdrbECrYFRkXJZQ5Dm9uJED4RhoUEMMocV6LXfQCZenFtEiF2qyCsi9EuEbs5Ru",
  "key25": "4TbL9nndjfPBcXCQuxAS2iotLy1gkfLu1ZLLjEUxnuK5LXgrbGufYg1jUrUHcX4K2CtaaBfNrubDwojHeyLWxTCX",
  "key26": "4zWT9pdzLaj5NEARnmp7vKdauEnFhmxoQ939UG4C9nFzasLmLdDMs9dYu3jbtWvXfY6i7pNxVfcKEoWrwEXtcjxJ",
  "key27": "5stC3Dmdc7dvte4a99JhBoXY4Rnv5R82F3ekGATMpccGKc2hXTpJpt9N5QraK4oWzbxVC3LB9AkUxw9Cdeix6DRr",
  "key28": "ioeo7b1JimuVRCqP81EF9gGsikM51b4uLf94NdFJZtDUHuQRkdaQe693xFmUX2Ub8tBnVNWoVLNJg7LyqpFcMWV",
  "key29": "3frfpLfS8GEaeGQyexg4gd8TuhxTShntPzue8E9fwciCohGJ5wKaVVNVxrbj8hXYzcRhiD59eqwiwsbFBg1Pj2aG",
  "key30": "WGFC8iFBncgGCRTcVpsDwhkSGkr2DxAPYb8D3Hp8Bemx5nC29Z9QW9XhHmqXXuL4K9qng2nvuVrHxTxzftiU24h",
  "key31": "3ERQoqSH7oMwujrm4Zrje112cskMCNQXZTxQGyHeTG3np4zgfn2wYQTgieDRfqt6ZWHJ9waG8b9b5aybUPfmPBDP",
  "key32": "2gJ5JKtrhTSVtGob6qBzZbK1FPgyua4NNpwqQ8avjybHaCJwLu8sPNY125Cr9tKaDMZFd7ciaw6cvnE5iGjVMR8M",
  "key33": "5wkMniKzsT43BAnfxn2sY7e6kazj1gLXGfykHhSo8yw94eJfnKerq2zMTj6Q5U25uQ2F4oYuQEWhuwEqf4T9YVPk",
  "key34": "oXzX8xd8RRrDtWBKsHcdZHvvxKs4Gq6jAJXDvziDSVaGzfFhyd1U8SHg8Lt8qrBNFD6ff4YNEGhWqhLyryrDAvr",
  "key35": "63PvEcxQLgJwr6okut9p4aYFueTyjzkpMvTffmS3DW3WdoApkpi3AVHg7xsZRk6fWK6egKdxJ82dv1daUbgwtRwD",
  "key36": "qpyKT8AyvjgofQqoU4x2ry4fBxXfoCrPHhaHD6bWrHGhcFbRSTxBnsezVun6zpQLNvTbUwYu2L2iZbnfgSHkJj8",
  "key37": "61AobqZRQf2WRvpABnpq1PLPCx5H1otEArXLhQ9TU5VGruV4cuYnv7efuf5xsFa4nM5YfGVusHv5bCvaQP4Uremf",
  "key38": "5vHV12BLwbLBcrTkH9bLQY6KQgtEp9sN8r2jkQeKxknVAREo4VPVstZzxnELEmoWz49gS6UvEyZT1oxscMHcs5sx",
  "key39": "2PFGuYAU9yaVtzgrBEF6RHwVGnXse8MBPup9veizGiSUHefEWpMaES6AVMJChPmdWNs8G4Uky4qB4GFMiuGN6VyG",
  "key40": "27GeiCDhu6Y89MjeXvymkgP2wi6XBDysGwhVMAbrbxS8rQL48pDpCaAB4Vj3vvfzhPbsUM3fMAYJEM4LaqrK55E8",
  "key41": "5uPoFuuEm6w9u1Y8CsXDtgtZ1sco848vvcKrzjkwDdvMuiaaMTvaY3E9Cd2Pd8QNVhJqQgSp6aiHdqzyYDctoC46",
  "key42": "49VeWsTuqfKKeQVaFpnvNiMetGW6NQTzewTzQFDf5TBNVFF1aq8z4ccfSaKiKTGBAjwbBkBgbkYWDAYNVwLtzG49",
  "key43": "3T4krt1Z543SqtJ2HoXfmCnu9YUUnmffKPhw88fB1Pr184NUBbTSq9YF62NG8UrS5k7ewx64cDoeN4g6jrUr1WC5",
  "key44": "5JeCg1UQrhGvtZCA7ByLEzZuS2BEjkvSfMj9NdRfC5aRg7SDvVadQAby6SMUULb5sazpQi4Ff4Ydb5Nab9NTtspz"
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
