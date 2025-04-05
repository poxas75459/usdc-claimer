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
    "2h526ho85B37rHP8ag8wCSjvSURCd3HwdBo9gzjZEMoB5V2HQ1FgySq4E3rGP2p8zFiDLHvH3zeS6x3sMzn1BD8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9nRH8kKTMa8mvwy3BAuKABVaW2MLpUAwu4rBBgQsiEH83cbZYtkW8upt3GQyjSAUn3pgtZJ3sZcAcxfaViasjr",
  "key1": "2Fef71sb144aGtKEyqkvysBrtqQmbcdUWBXeciJt7pacWLnMK3uTWCcC38xstmHn8fy68bmXMr3qJvfkBYfasftW",
  "key2": "2dibwgZfriZeEkvR1TEGfmqhFSyQNjEKqiVSjm2xP6gKEgKPACSqSnm45GbaKwkpmbuPDTvMfEeqNyWjmrM2fVGi",
  "key3": "5TeKW2irAfZSDKhaTwdqFhsSNmZXUHX66sBNWEaTNSSYzVHno56cyS491XJYVGYTEvb7Hh2wVa12YQsqy2dygQLS",
  "key4": "skDsVWGkn3PoRSPw15axC8jXDuawgJ1EyUHeM34vYdsUa7e7f3jKqpHgTSXEwL6J23uTcx4Z7WS8quD7yZnFzd2",
  "key5": "5aBATDp72X5FjAgGhKcEY44XYWu36CWuFaMAkoCjwFfbzNmu3S8FUJMN7RiJTYKY84rFASzzbkuVq7KCHUE3i2Bg",
  "key6": "M2nFKFPLcXER2k8pmgH6W6A9UunfKMnknHxXAGxdv5Debi3vLe7Agz1qtLHnQBTRvQLhEBrsvyi6kLHaLrYW4Nm",
  "key7": "T7JRWqgXQq7EezNAykijSskytfx1FHtgAwdLoGLju4Hvgtc5AGgshXqpTw9GtiysEMuA1zcgE4dNgmhti6uUN5u",
  "key8": "3kW66LYuXPCcmfExFGLn3bCvurRrTCUrKsS7PsubdAoEBCDCCEjz8pRTFk9U4inbBXoNdRXuWXoGZdYky9bgyPka",
  "key9": "2peq2K1MHTE9yxhetFN3kEirc35CW495Bdp4HykgEZm9vU3kdJp759ffp2G5oWX16ncVKSFE1jsiX82qWb4WcvTS",
  "key10": "3TfnGfkzLn6YGUxXCSzckWmBj5E2eJMEw7GKmEKUNhkUFeJUaCKHMCnMY2gLcGZfjBHYfM46Tr5svqwYWxYZ3Eah",
  "key11": "MgCDyb7eee113ChdWNwwtxF4aKmHWAwFminu8UPK7n5RvJ1oEAu7gEHFzi59VyTdiqjVoeYjupwayoKnNWiPu9X",
  "key12": "Vt2eVbgsUtGJ9FNbH2Y5tmAg8JJsw5PdaPiBNDzZZx2gd8M6WweTh5ee5wAgaqTwvmeQFaUKHP4mdgVypb1iD8h",
  "key13": "4WkNT7nyaSkMuGqctNeVqUB818HkvAWPYaoks99sp6whWL8154JCukftDp2T6LuKcXmgd7apdyVEpgDJpS812mjs",
  "key14": "4YnxCfbpaaJtvRHqwRsykkF2Ph2pmyX7K8kSrtaWzKbJ3W9cPRbULbu2NYTkrD1T6RM5KPtBSdTpUeNvhrexYfn9",
  "key15": "5iK8K4aQ2JjUyK73jvUuMp152HUmXQk6HS32cnVUbZmzD82ZMb5uhLSzgtQ3u2mfsL2L5TmksrxbNpwjxJ8MbPjz",
  "key16": "2eZH9cHEGfLyYNgVfiFf5GdjGaDPZRv7t7xTcPxUqULotdE8qkgSDnMC4dFyPeoyehsdREwVqgu3nYxizZUQcsFd",
  "key17": "4dLSbpY5E44RfXczMrrPtuZFEdfxnPh7gWuWZuajpbAUBgx3e5wYU82fcutEFRsficLx3psxdB2igmKFcugADYAo",
  "key18": "3FP1fBXnaE2aekeX9MDwvBiY2yw5vuTUpf7AbhQjRKDXZArSegNq9bVw5kN6bJyfRUsLdW2MJjcJ4cAp5y3YDJy9",
  "key19": "5cUA4QiCcb74Q6219Qwd5QgFj67mWWBwwtoignAjqP1MZVU4xbgB7fzTzffkW1uL2hMHK6fsFnmS9XFMCTfD8eP7",
  "key20": "5ua3EnkDMEqsDkToXDx7b42zPDYKTv3JMKjJNEnuuL2aeqpcdggqp9myLoRbwoDBNWJNjzKiFuURLaEadJShXpGi",
  "key21": "63SN8E3ebBLRtsaLg3LAS3GjX4Mq4cWp19auMQNERao6yQiiJVe3ex4jYncY1rZksnnqHmTL9SdJgJjPMkYUrSca",
  "key22": "nfSHP1bF8JBXDxWiwF7JM2LtpCtiq1oxKuv4wwqjeFvbNgCt9o9EW3oM6NGBiGqYU3RRkTursvBzGtuiCuFc1DW",
  "key23": "2rfdC1K2CpxiAGSdysrKiBnN9G1uHeTKHLRPRzXH2ZwRSWFk1Zw8AGiRuETtcuvZmhVw1LPY2q3QoriTnEdTy665",
  "key24": "4c3DP1fVZ9PFHT6wwASey2sLbWG18vKD4cSB9CZbCi5GVhwZntj3rWfX5uHtogKbSYjKNohNYuvMJ1UpxQiHKRZn",
  "key25": "4W1v7Nq8E5UhyptNZecz1FvYXM7gSzrerhi3Z3hHk3RGukoqU15ABHgdxFBnHnSPij2TD8bt23JUEHL4ELJm4foN",
  "key26": "RthqiNxTFVJ84MqQuaNZisD7DEZ5rR8KiSYxW96YrmtYtpAQEANG3MWBdzhm6R8aujN5e1oEX7iWmhGUTcRezAG",
  "key27": "2CgMA7NmDJjL7Em3k4Q54i45nfNBhwSW8Wq3QMU4PRqjcX8BFaQsSwY27vMD6pgP5LhCLfBo8mHG1fJsgVNnGyrn",
  "key28": "aK3ErMcVds9qNRomSRwZpTKAGUSeV3XYPMXFs4HKc8K8eGz319yX2PiS2xWSLNjKGFT83tsEQdsujXadzvYTS8v",
  "key29": "7cC3avWoTAPACuJKduu3pFkMGhwZz9i1BTn3vFd8KCjQvkrm8WEvkLZwkWuTKjqc64AbvvX8PTYJ4a4UTSfpNEi",
  "key30": "4ABfX2ohdigWioSY7cBFKyjwg4BCEnwNzpCkkK1ehyLMbZhF3hxV1aHHuTVeoDqCwH7119MgY5UEyB8mvVKGGqwJ",
  "key31": "448zdWZGKSZD9zxxzud6Yu6HDojxSYGqE6FeG9zA6WQeyyLKJzQ2fFY8pMFqGAdEEekP4XyqiJtpyeRkLCYAgJvQ",
  "key32": "563kycEFYy8FvNfydMf5muda5ox9wBqwGmcVNrrrLuSDazUqLAoyXJnG7NEFfW72hpryDnsAY1vyPYDdahPA2xju",
  "key33": "5YEgTWqWcFz2JUio7ow9WUzH5RVCufJZ3Pahz14Ynz5n6ByPSvFMVfAL61FRtxWqNNPe6XCAUrXT77Tzy5hwWvcJ",
  "key34": "3dy4HcwSNzRAErQWsdz74FbZt8ymfzujxCo8vvB32GNnRYY6MkvAcyUcKtMBTmLz1APazNk7m2UpweUt79HEYfHK",
  "key35": "47LavHCN4Ag2TEP58X8e42m7FiAsHVWt6j4PxEvhFNQtkzWAJRL68hdWw3G64bUn27yFL8YWUu2FDshqzrbbtUKs",
  "key36": "3cV933hMv16PoBYvvp1YzWHFAKyjnnwxdpvxGj9B5EiWPhGvUn5cT858kKUxG45zpeDfQz1ENCMGWCBAHbbRfja3"
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
