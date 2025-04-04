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
    "2nTXkM9emZ7294kKv3md6ynaReMT6eD855bHKFPYE3tCiZrUhnNNgm7bTKPneqWWetwKoms7WXtcV3mDPjAqgr8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7vVLDwN7yGpFMpWSK7ER2vcAsdizHrN7nDChjAcdKMB4oxZ52235cHDegJFW34MgRaiGrNehX1coL4bCcWds9W",
  "key1": "3fz5jELA25hcoyzTpsSpRzJe2EJPmbf5nehsT8RN9dNr7nmiyDugajAv8AomG55KAfYHd4T88ofp6p32zZCdsCGp",
  "key2": "5md8Ujk5bbUaBoiFz5Xi7faQ9JiVd1qa9KFAgCbbRVuZ1NgTECPrv8Wp3ZKMc1rJiF8NdT5NwctbKQGhNc6CyK3L",
  "key3": "4qB6wcxHg8Khf1XyrGwKcu7rfagBMDL6nd1b2TmmTsXWqo31udWXDuFpeNuKNKGqQSYQyVsV1KS1bYHqK8yed8oi",
  "key4": "4nJ2wi7JgL9UUdNYPVp2T9KctizmrsX6WXaoHESBWLszoCFTAEydQ17vnsd1RN4JoWrdaK1FMm9twA7bFir7wmUU",
  "key5": "2u1dXR1uYeoLB6PsKEEfMWkFHWqyWAqdtRfM7N67SqKtPL9uXCjDf1vq9kLBVy5RkxSCqA3VMDyAiryZL9XrfeDV",
  "key6": "phjXE7FLFsrnGejUrG6oE3yr5py6GvYCCbMB3GvV7xNk2sKRBap1eNudSeFP2sKN9epDtTPjyWoMGEX2gsccw3u",
  "key7": "2eseUDcVNJG6cYvhWxSE1VmzExhg9BCzUgauN3xn6VMsNBiKuBQfDQuo4dSLJAny991hSvWZm4ivpNFTL9e8s4Mj",
  "key8": "5sEFhmWyK9tcJWgewT3tif6u3SfodcJNExo6YRjUJvNdkTbTxDMnSWsV1AjVfPJxpvthrELQjVUJvwKFRnLbo1PX",
  "key9": "5KSb4Q5qn262kJTSvaP7G15EvhNAAK4R4wKBqzRkYDbwt2c7cch16Lg3wHT2kG3fn2B6GKxs7zTRwC5kVXpLt7t5",
  "key10": "3ZB2LDrz5BheSfy7cFErmrrvK3d3kNw5kRjNZSmC4iRAVMv9LbX5wEn9tJBainSvsZtm3A9uJX5L9B3fVi1Qr5kH",
  "key11": "3CCCsisph9cMQ47CcZKxkReurWipVYxXF1W3gVqPwXDDHp1H8ELA9mde1zPxqv6FspeZ1WXLRZ5WmJ1Bvvw6STfy",
  "key12": "37uZY5hby62c16aDHfeHVeVDhwMksods1FUZJzbhHqta9jbzSYWVy4vN7qvvSVmLexzfr9AAgDckPRJvW33QLv8g",
  "key13": "pbSngsKvdu3rvpM945TnhWm8F73rSSx5cRfMbgS2iSbNjuYWWhHX4X4ac87QHGbviGfWMBAVg75kRYJ9aypbUuP",
  "key14": "4tLu8s2FWHKaAZtyb83xrPKmo7x9zfhw5E4U177QJnG3vCAyKG2p9tfagE6k7SqMqNgN9gKcKphpWrUbhttYoSHN",
  "key15": "3H7CRdJw9D1Vuj7umuA13C9NYGFMGyeZYPqt6Uwd6LFUCPZnnezAfegxDxq67ZgjpFY49SuXXtJpZLNtuzK65KzD",
  "key16": "4mNXc3MsdASp8QH7HEoSjpcWfFHNHXFi3EjkAPMiEEqmRzvWEwJ3P8RkAktSmCmqrfJ6xgQHunSUkQcr7uMpZhLq",
  "key17": "2fks8Y14LF3d7QYkWDZqffEGguUJGZ56L85JQSJX6nDhPuU4y8bxs87PviBBGiVWreprvqtpmrJHEcxhCKqx6Wy",
  "key18": "3iaDM82gAnQDwmhyw1he2a2ADF8Vq3KwDyg3t7w7PQ3AEsNbhHWR56DBesBVveM27Q5EA7zTv6DLoNSp451WTmwf",
  "key19": "4v8cqvfmLdM73JFfQz7ShhzTVPxPb4As6yWJgtaZhMDtisrEvR7FoqUUsNGwsjh5yVmXoA861PaTRUJCmQfbT2av",
  "key20": "31PYCcJqGKXxNRswx5CaBGKwJus8Tv4aeLTRe21oa79MRq5kG6sk86GcZ6FqVsuXDgj8dBvRpxqLkqdKbfbARFZM",
  "key21": "2uBNqixjT8Yv9FqtNqJjDmrSqRRbmiEpbDU434rR8rDC4egEN1GqYSWjW9qT3QEeTBc26FH15L8mTxFsGtFPPomq",
  "key22": "2bmHfNw37n11FaKHuiccmQRtgXuDaAzo1kbrgTwoCNzNnRf9sMrTGxotDqH5oF5ZBytBfuSpLN1ymPuv3iXHoMuw",
  "key23": "2YdbWkz7E1Vdtw2q2kxuUC9tZbF28gTvHZZsShMLE9xZaJkS59Gz7434cpnBSGa7iLqKK732AESvC7dNty64fBKC",
  "key24": "5DNNaPsTgzbYtPLCbo22WhdTrs2Tqh74TeoyfUz6R13E52D8NZH7dQHFA58yirWZ9zFRCEbQnXDkq1XVxQJUSqiv",
  "key25": "zDsufKemY4yQxoTSAAWzmc4jBrPLjrgTafEruGtM6m9LpsXfzBjyDSpMwsZ64myeb9ibpQAhfyeZGaUJCK5sXKh"
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
