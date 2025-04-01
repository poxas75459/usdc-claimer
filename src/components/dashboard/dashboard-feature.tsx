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
    "4StHJesw84xvKpXR7SWDu2Pv3ExncUAgjg8964f6QomiKHY41Y2LhPQBpfduhhQGnTMwvQbgZAxrfuNzdFeEuzgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mpdtno157Eqmu3epVHN1y7Ppd6bS8AWN7ApnjBjBC7oN8iwFpAzCe84Kof6M41WWqSKtt5KWhnneKgT8gxctqVG",
  "key1": "2ZYDnxRUTs77Z1pyB7YcE3nuMfSk8CYSAcfed2wFEvjdWXKhqDcmyjyvLyUEzy81SPjZhBZNj4nAi3Nk2osTWUS4",
  "key2": "5nkCd4sANftsPVpuFWWEXTUHfLPGxbQDdpwcEjFgsh6zVt9crDU2wrk5FNDc5E621erRR6TLggqPwtBQeXUEAfiA",
  "key3": "4ApiX7WmmzFFZHrYVHndRwthgVMbcbxCqMKbPK5UfvKzvYjFndu9k2TJX8pX6YW5ospT8Jd9jCzxoifABrvrqqva",
  "key4": "25MdiYftUqBr6gvdfhX6A6RtouXDfjLosDF5oHyB3DFztXoQhj1hCVjJBU9j3vua7nsTHZZagEDsRRu8c8mq9qCQ",
  "key5": "W3k8GYuYjAAW6a5FbXWSdAMVZZvKsvBvuZ6zMcWBdMqxEyYTS3YbzLBZEA34R3fpSxAA2z9FMFL5yRSdcsQLHem",
  "key6": "36J8vLZYFuaEWMjjeK89Kjnb144XkFvMBQ4sbUuMUncTrgHb2D1hn5zPXz2CJXCF1sDytxNNErUmVFPtXM2dgoqj",
  "key7": "2TP9tx7coT2sQUKDqVH2sFwHjmW4ZenFKH6Jga6MnQWpUhJpvotqjRP5fmVxUmQxJxUY85PXqaZS7WH4ohQmoueD",
  "key8": "2uPF3ZPn6KxuvEeLsh1rrmHRCNksz9wNqR32PccAcrpGhmDHzMpjtKD3zqr5Sh9qp55jL8Cwc1HjKdmweuAT4SU5",
  "key9": "5KmnM5t8nDv3GYYjBXFsvXHY2zqY3wmsjkdhsvpT6bN8sQ3g8ZgoNqGQRFJCCPYdMp2XroW6VWAK59QQfMrwJHbC",
  "key10": "4dBTPvGJzNdaiwBkKFQgSiRZj7dpaMbXGDSGEXbYRWxwiA5LumkqRR5DE75Wov9CB7W5WFVXbmSqCPerExaqHB77",
  "key11": "W9A8GF5s5Hvbu87JRGrKvtx7REjv1XnKJE6BVLS3LrCmAaoKpfGbzWYsJk5jzreg8iyQ6byLkKP62bzrMCGXgrH",
  "key12": "2yMiR1e8BurLHQ8JUr3oBD8ZJDSQp9csdGSkMa2hYyv2tBr5tMnr5SFJgJAfnMSwsgxaKefrYRtQAeEa8uX3L2S6",
  "key13": "3ods8z4i6VGRuhFC9fSRR28zxLy4CwM2qdTfhe5zBYfaCWg4QAbW9s4MCQcBgkprhtAGKVCX2dDZrwFE7aR7gdFA",
  "key14": "2jNbPGkY1oeZfnBoL9nZ6x1D9nhG1uDxWpvBTD4LtX8dNRh4gyZd7dJWoDxtJ73jVFhbGUZqgtkWp3Ceo9i5WxER",
  "key15": "3BmcMDeBeAF17hqqf57JyJxAQ62BbU8pioj9ndG6iV515re6biV2FKdGpKkBZoCdugsNRd6f14yszvDmLX5YQtdD",
  "key16": "61nPm5w9i1ekZvawvf5EAnVdULVyAzpsQZoaEpWqxsN4C8MNHLyCAzDa1iqazLxESY94oom3rSd1hS9SpULNk6S6",
  "key17": "PEoN8qx7LQbhvLnzaPi1Zmt4bqGtvNuN3CA65knCnCpzxZrtVQiwy6duf31z8uCooX2EAf2r3hC3HTZqBL3HrC2",
  "key18": "2C3SmU9UT85PDZmFJ8W5R4cPtR8zcfajTJBTqgMyfXiwN1GD5tdt25VqYQui5HFv9sZsdqtkALStckxxLKQqzS9H",
  "key19": "281xiL1hqJU6WhpHBDVdKF37HPNYYKfT3PdjtQPMDzo6v35v4rSZX1tuhfPkwoExAotjfPKBxKJhvP5YCkuGRhMw",
  "key20": "2s4KuAqZahz1wwHCDQa1MaAymtHaYR3eSm9vGGLoT1w5WrH2YUtz9RhNo1gNU5xFxrArufs8EZbAmBZsZ7RTrRVq",
  "key21": "25vjRWiraukn36nhRDCozpfJHNAqwkJ78Z1b9R1jZra8kAY5mVqHqAUCqfLAyVCxDSLcTbpheSs3wuPyiRgS9Mff",
  "key22": "5eTxoSauqBhtHW1Z4Z4hqZ2jt6Vep2pCQ4AgEP76zzAer6ZTe3PZqrixxLpNSLGQC3HeXjBRq7N6kc5sTQeyqB6f",
  "key23": "66tVbtpzcD8sM3R3CXnSyD86imKNtm1FF8ARL41EAEAeykJ9Qp6Ann8NbZdnUx9uGSUNG9a2jLbKFWWyw5vcS5qo",
  "key24": "3WkLAH5dTmmbKGaNptvmxo1MpVRoVswAiVzEA8u4cbwRtp7d4QABJCWqPLhuykpSadgu5j66JP3YbcDv4Qg7f5uN",
  "key25": "ATKbm8jx3f5ojqX2KDbnEdQkZCpMiegQNGtZU5KZCDmBRgYPdcqWPeT5MuTThcxPob3FTF136g2fmHiLHfppk3R",
  "key26": "yBsroUaCC92K2UWDJADTjgDBsY5xdZvMQeHJVTkdzX8TRFoK5HXhq4NiQKqifbaa8QixwBKPCHcq1WLi1k37ueB",
  "key27": "4kLcDJxYPKyHvCiP1CE81GnVffzdiHDpfHBGtXMBeFusXJsf6XEg5AF7Z7RQgyAR25tFM3oLZLzDRJPycEdMD2eH"
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
