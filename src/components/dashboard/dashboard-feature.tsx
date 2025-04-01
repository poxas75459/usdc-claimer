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
    "3FTkhXUyo137y46657mtXqAbGX9YdZGc4PEjMU8zT9KxY7182tTR8eBSpdmr5cmmp44tAYoWV3Nf2yCreJSGVSb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Cgf3ZoxdD8XeBeN41c5PVX51x3GRN9F2XvUp7WEfRCwue4VnPNzN6nX3xC8WJWuTeJ2UX4g3j18QmAiJRZ5YeB",
  "key1": "WtWwS34jmrfuotJTwJYt1hA3kSiNfW7SPmuH4GbTgRG3k3cf2Y98pkHayGiPAwrjzujd5AscS9RddXdykHJSv1M",
  "key2": "WcrLJYu9kvNaFmMZCPtn7zLmJFEWxsiVg1qmLPKx2X5R6iTAPYjE3j77Giy8NCSoZJS2dmkcQizdrb95LAPcfy9",
  "key3": "5iTGna2F7zBpFJ4PPtDUNkS4AGDZ8w6dc5782BDgUYpQousgRxBG6y8vz3uBBqdqciAkkHKXrrVSVm8sc7y2rwb",
  "key4": "4LmqhWmbvQz2YHbHMAHnTv6YDtvCtVrHtdrenKHwVYnuyxXZg8pvobKwC3u5vYoqYc11jcPeGmVKcUtV1Sp2sQHC",
  "key5": "pr8Ardey8uMgQFzDSdzNLWKF4GoyFyYiti5pKjGiqFyYbX8tNzbQedNUrVUMYXqThymMvq8HDSEn6vSu22mfAcF",
  "key6": "4F9x7JuuWYCNcJW5HrEqfxFtbRCfk8ETDYHKBgwJLrk97wv7DTHdw2s4frTEeGc8S1m3TXYpSCZ3x7jP1H8UpN7m",
  "key7": "2kGg6Ewme8jMhmuhdB9kkSqH4oyD3qkC15kwAyQMsViXBYScat7fPyxZADxTWs8VNjNzd6WxLN5hT17ZZgUeNCkk",
  "key8": "34hmkJm7HHHWQPs1bJT3XKreHjExYipN38bmAzZfNac2ESUFgu1fvarS2EJ3dxKM9hNKPffN1mu7922ia1hTgbN2",
  "key9": "3RdMRWoj1NJx6cfs3xyQNakMrpVnPckT5EtNhbLHREa6hJGy3Yr7EfMmLzXcGzKS3sc6XUTByenxJTrfxbkvpEA1",
  "key10": "2kJ6pQ2TXtdkM7FWv7bMHVfPKi1doa5ntvjSCrAVh6oATadpGyae7caWf6Tk4d5MWujzLgqRixaRnvTV4MHcHWgg",
  "key11": "54xt3GzMUnwo94Vz8GBqwXviJ6ioak7Dq4UxWKXcZ5eHviZo3QCt6DsgSmhrv1tHcmBji9ZSWLE1Z48AJ9h9uYWg",
  "key12": "2cECmMFuUHA1SGonBNexaALr8Jchi8wBV7J1wfUybLuvQrHnw144VY1X6W92xvwxQHDGB4LntG4AJJLUqjskPjW9",
  "key13": "5nhf3zTiJKXPs32q2EDYr6pdVAgx6p8BwDYrnTDeFF7q98SPmqYnZngZJNusb3Dcrsade4HHWdbYTLNo3MvtAa58",
  "key14": "4q51dpBxqUFbdtedS4drEFEghF537M7aD8AMA24oxoXzxtz3NLmBHptLfYTxWkA75rJhdCHg4mZ2tXxPBXCuv61g",
  "key15": "5eVZvQfK28SEFuirH3tPKoMttjrodCgkay9HgRscNajYXmgEU9YxP9UBix65Ynz5SGqgUb6gLXFWuC4s4ssFUoub",
  "key16": "3Z97oUGNNhsiWAjsVohVzDHCwpFN8mh1sv2SBPNZG4hFjuMyLnFM4np524j81vWgpFqsqEGqwK4BraBbPosPkx51",
  "key17": "5GbyEsC5uNZbWvUTQmLhcm8DuWP8Noj6iAHgEDNcH5fUtnHU6JaUrqTpCoEQhWKydMNjDWD7z9mkYSrT3XZzdgFZ",
  "key18": "53GM3mgYd1qYJTLzcXMEmVhk5ugq1XWjdZUGfxn4mLiTdYsVWJCJifiErcqFrhwJwgLUXWMzKBP3budYBPZ9msYX",
  "key19": "3Qa7WsnXTFuTvD3LTfGgU2BeF8DbH8qiyyZoG66i242gcxCi5c1bKzF6swq2DJa5s3BJG7JJoSn2VAKFFF4PkdD3",
  "key20": "2CdUt7JjkkDXRHYKzQdt3NAnQaixpRef7G6V5wwB7JHiuqwNWWU4MTTXVRCeEtfhLkkXrjxQvHk4zUVxvhMTEakp",
  "key21": "5fK2e5YccNGCFB1ZneHqCLYEa2vYp79oLVbLqjcfpF9qUV7qvfqZSmZ4ZPDN9u1f7Mrd9TETLbeJSoCvJoqJjzsL",
  "key22": "2LfQNEbvFJxzG1FxgN2JtmzhCVwbeFHVNz9hwu8FFJuf2pQ6ZmgjxkbvLUMk3so5N9QjBMxvTozDXwp285gCHFGF",
  "key23": "xUxAbnc7PUoxyRHWYkpdfg4G6szen2qJSkYfXKtmcgiysGFEetpwJDUsmbH5jgw8AT7Uf6KebJ8Snv51sZ1zxup",
  "key24": "4PxTE3Cdt3otGV4hH3Un71xhpG4ZKJeGi9ywSCC8actg2MjZ9yF2FfKbfhvQHkgRTYCBA9bRaoZogomHbeyrW6Bz",
  "key25": "45z11LEfJHUnQ1VffZ94CtUzMV13K1peK9XG9H7Fc3rbGvfg6uT4XxYEm7zJT74Pp3EvHTxTVb55m3UXNioAnuGw"
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
