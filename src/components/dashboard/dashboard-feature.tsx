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
    "3ypL8FkmkY8G2xDmdcXDSnEJDMCLsXUYVzNRZtGRvRbpRK9Wp37zNsYUNhz2zCQjgok5VPq1ZBaarriixXEhPDC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tz3jGn1gEvDbKZs51dvaEdSEiKPVPTFJuKdrY7nxTepQwnwe5N5pt2uM7erPB7tEPXFVHktDHDp14tzv6skiyx6",
  "key1": "2ELcvAT3FLNLQ5iz1p6HZn5BEX93VkGnMmS7pxD3xYb6ftY8LnrsSk85CipcqWMvgbB9KMwjZPxM3VEaaBVcYLRF",
  "key2": "23Mz1J64nL2hb8oi3cjpoKguTy3q3HytPht43gFpQzD8wP5X3r7uiWLzW1Em6Zd1VgEGfPqYRdXvzh8qxBZ6Ro6B",
  "key3": "2SgCoum5wCHdMKVvqnYrcY6pharfWZpEm5FwfZivMuxYEB7kri6HPWBLGqoj94sbrwKdx8X7sFzWb5WXFS5xxKBy",
  "key4": "4qT1TMUKCtcx128ANaXkV7vRxf7sQE7hEaoHL7ou6eiLQ7mmWArkDrisRckPP5PRFv1E1dAseV1njRrC68egHwwE",
  "key5": "x2wvMwxGbPx7utUHuCZmdUCF8LZsBBbCxMsVMXjPfUEZ3TKQWX6TmdAaeFkzxrEbZqEuVyeAJtuCeiZjD8Wbtuu",
  "key6": "4CsbWmRb2F9DeMYSgm22xxx6xh51WgbvPWCnPwmvPAR8u5mS3fpP8YwC8ugYMStgEizL1UXYfNqqG7jxEh397A8",
  "key7": "3QcRkyw8vRms3sK16Xbt4ZqNUmopLGCTWPDL4BHgxYgf86duR5h8sFtR3wH15p9ZYvZqcDkLpAQAPENC4Hr2JyUf",
  "key8": "KVet5QrcDYRTZ7Pg6udsxCBXLsk5VrWD31TozyP64cuBA9trBEhU1putUaNCaVZouJXEwDaTTjg65Z5zJwvRkDq",
  "key9": "56cg2i2hk5ipGnkW3dxszTfnwGf8Qb6QE9Q3t5rpscAL7km8hgCzNabpRSTioSkAtHyi6PM41X4o5Jd1h2tHXVWH",
  "key10": "3q78KqV4WZzbpwG5TAkDwK3qoNzxMTkysYKKxLPd1U2MHWWsMP3qEcr3WfN4EenoURxGiykcjub3ith2vnwJR2hX",
  "key11": "2awo4zRfPe7Mnr27jJMapWsGbVbapop6oHMifaVMENThM4FUq92LURxVmgsScwtwAo3zjMPK3ZCnxWuLFNN94PGv",
  "key12": "5yWAeCHM7RzkLS3Rs4KvX6Q6DKgDuY2NKMVmQLnUknmkxy4sRWZabpvcbkGxRuQX2RDPdWytchnVsEuYjAu5oGzv",
  "key13": "4yY5STMRsQE4uGxZXVrvJ9PG4aTt5pDVTmBWWWJPTSTS64yT5FbAvjadYBPjmZiuf3BrQxqFvVNzd8K5iKDKLiqy",
  "key14": "21TJdA5bnfQszdABUGBRmKbJbd23Cfcmr2h9ydrhN8JmTwRERuhS22msEtyDhE6jpq2uYYR9GEkRRj9Dd5QcaeT9",
  "key15": "3N8XLcECx2fPqRjJRRQnzcaotqkjNeHXwAfcUYbEkxSuu123uBat8PYXodFkGuyJ2tg5vx3nQCRC1PkMBnK1EMvc",
  "key16": "J1FXpoJgp3Cgq4WUuzbeKHFCQWW1fLeCKQVisRKwLU2Ak5gxmA4c3QDTFfoowtrWDZQp6QrxnqUsn1h6KTSendf",
  "key17": "Z6NBQBNesC5BY3EmBeLsxxdfsXef8q6T9A8e7hxr2b2NafdexBsBNQLL7RERzZtVfCYHyeb3jj97B4tUyKu8r3G",
  "key18": "2U6Q72CQeHe1pe69WkUrSYtdNBixN6zU95YxVWk5aX3g7wPpvhtF6qVrGTyjDBHtqzDhKzHKuzB9XfxLrETVG6Ns",
  "key19": "2boMqfw6Bz9gwm9ynVNteMRGTe2Efj8SCrJUbBp1snjj2d7i8po1TzuXDkPX91RLf7gAFuaYUc5ACSPexyAzNFSF",
  "key20": "5uxDxSv3QDjvyfmwxWha8DXzLYnYaEBB1fDnyD4imXygkzYuLL1bz4Kkth9RXAfik9xKJ4cWnGVpaLbCZHvouqW",
  "key21": "5hkFPg7eRBDyeF7Pkj3U7GSnJHxdiPU6BTK5WVTc1e7WfBzCdoKSrdCiy8gMKCe8aV7MNaTRMUBWC2Kjkwb4RQ5t",
  "key22": "5TByZuH92zjyFLfZ535Dp7piBScwFCpYVsdaFELWFmgA774gWANF4LuQDkCZvhEq8jciGNx9xqcQtLXCPi8dzW1x",
  "key23": "FExyu9XvQUhswAjC4m4KAuubFpRyoWoPPGcsZPH3UrqTNcnLBKa3utHHb2ZYaqRNoMX159pwfFP97FLwyxNSQ8Y",
  "key24": "6bP3XyPCMBFXNMV9hRbrnBAhHTwdjT7gvuZbtzRkXyetB8n4NcvuzG6mQ6TxRZ7HpHKcAFBnyZByvNF9TSvcRye",
  "key25": "61DcxWKMQwbkFyx4AGp8jR92XTQLZCJiqFPQY1NYb5wnu4n7hqDFhmZ4G6y7wiWgUVDL3gn5q6eHhhYGJ8qTCrea",
  "key26": "56Xi9KbRxZN9AzssFMetoEusBEX2akoJ64Cayxyz1NGtaadt8pcEpQBiFhuqGXV9sfg4JGnZmatTXruV17EE1tjY",
  "key27": "2vcHgZV2CXvafJKMHepyZUUPPnf8bHcwsasgQnUe92pPaDFKuXe14Cb7NfJ9AKzHvSf4SNZbFh9a8JE6TAMKP8rY",
  "key28": "3Gi8cgwFEqGhXxETJM5chcc2jX3UCC2GVUTj9L8iZDE7vqtJScFxorNW44XBrNLrgTSYtHBBt2TrR5WwMgqvWbHB",
  "key29": "3Fn23hikrkdTn5wxhffxq8gUJuLe7kfUoKaqz88JhDAU6HeHkSR2QykPRPq1hsMJqEB2c2vCo83uwtX1mawWdGNr",
  "key30": "5bCUSPEqaJZtAUk6sydV2PH5tZq2jABMBGVSJX5mDnvDNinCYarsYdqpqLd8LWJgqv5cL6soVVFKNxzuDHZd2iQ2",
  "key31": "2Rew5KNgU7VfBxbyhtttm1d8e8mprVCSJtUaTAtixRpwEPYAnPsxCdy8FLKmREaZQxvCXmsDydE5tSvk1s6gYVj7"
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
