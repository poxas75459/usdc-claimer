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
    "2XxQEyNvUMKynNqyZnYyi36RSRsoJDXzD3RdqaPH3UTBvX9qGzkidfGcwRQvGpZ35QVK5jvxHxyZBXPcdL9TAZjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRB5piiCgtsfGiWBWCwNxUE2A8UgaJbKSht1xSj9NVL2ZLKpGfpYx12t1yWYo1Cak5gbh5evhJBb4s4prnQeBgD",
  "key1": "4x7d85jae8DiMnxADXEaY2VBRbRry9aEdbd7VzWGFnEkmZxjeTvvVc5U5YFQeYP7BmR3ngv43ztY3xV4t1YGsAg2",
  "key2": "62PU1K36a9cxx2B1Yok6SMi62gACLtv7e2rNdStzHe8hT9CtbRzmvWRiA1qwWkfo5eX2upyPNgB5yRtD49k2K6vu",
  "key3": "545LNmKtWVDTrAV26mjGoKxAxkiCHn5zjsoDiG681grKjpZ6zawd4sm5hwD9A7Qg2qAKmTukufZEyBv4N8s6ZiL5",
  "key4": "dE6xXsgTuSHZjksBDZ2pzEbSevciH9E75FUL3riweMrGzmiw4u394Rzm1aTr3BQNwKHmXiwmu1cSfGDwJgTngoN",
  "key5": "55AdaeXudDANvPdaQL9QstYoKTrpj9WSPB8sm68Q7myxBN2eDJ8xbmuhJBPow3W8GJ9VS9QWvjdrRMMgGC4NdTKp",
  "key6": "5yXj5a4N9z468tjRZMhsQxsJK48DHv69vmzu6iZTUXNMNkN22vWa61VawvoSqCTFtRyGZ6e6ygm3mTS7KjnceCkT",
  "key7": "5zKuvyunNobnH2QfwPoiC9ESKBZWWZHijsbfpEPaej7zhC494sAmJodWVUHJT7nBQPfGqpwoTkH8uxLP5oc6GCk7",
  "key8": "5ii349j2QxpRxxPh2unQ5Y1xrV8toZ2tMjFBfBxAtSXgofSbYHBW45ahEU8rXeDYjGf4cpjkFBeSsKsdBYfP9wdY",
  "key9": "3woUjjuW3DhLkrf481aZhiqQpcqyryijFU6yjEAGtK6aZpsHXvgoxSAc7vnh9iprnNC6KvRpnAQpA9d56oPjQR58",
  "key10": "4XULpnjEDkdtBLKw8c1DDfnLLwTKcxSGVMvHr4QuyPG5h6jzNjN5Q1dK2HBXbAzKUzcQRrDSAG7GiWJc5brWtQVs",
  "key11": "2UBo1ZXjhRHoZSEDC9H5f1u2oCcRLWuQjBC789JfwHg3Ayi7HR9fNvvixfgvzABPNuAYJrns6NgUzccTiyjtP2EH",
  "key12": "5pFHoEy12vu3wEaHRvPcbuPXXGmQoZzhcoEtXYwGLwmJfS8aDq78Ar3ZqHFi4MxfKMxh4NjwGSvQKMQtiBqAEAS8",
  "key13": "3f4Zf3fibQ5Dfxh81TMAbGfJHVyXrzPbqvETmS9HXtBHWwjyPHrfmDirNDeGmZBXEnbZEVpKYDAn4Mbgc3aeHcbM",
  "key14": "4T9XHBAEiBazwFwY8yG8ZFm5JYutrjgPpZtZgNVb8PN8DK3a9pPpnQdtg9YDA5DguA2kHq8RMnutUCxR9RuPcxoP",
  "key15": "66bvYAbK5d3sV1F2wHzvve2f5nQzihk2s4LSoymDJaGwEV79AN4KYQVTSP5ifPZKJguZczUtR3DbjYz1Tz7Kghfs",
  "key16": "3Ece9zE7BMRdbEW3ftBobip3ddFgqzMQfQRbtzvT6RDdhPPjg4aTLormRfpurYacwWwxQoPhZWgEgkCzQoLMg9nb",
  "key17": "2Qc4MqXDUa5yaVzqHUe1T7fTJWFjqe1W8D79m8PVQmqL72woVJn9dJpkUcfwE1uc7Xe8fHGfnZWV7KhrSDD9vkBU",
  "key18": "5dAYzgFZKkEFzUzfEwVzL58acbxu5L5UNf3bagAmU3XHarVsVikvpaaZy2DQ8iKMYqZxEhgu6jZseVmNxEchGpp5",
  "key19": "2eaNYZbVPJxShumFeRU3QjyqFYHup5Z1X64xUMNSKCZWvocpkAy75B9NbjK8997KHkcfHiHjbdfZXq8e4FSe1JJb",
  "key20": "3Ub6wG3tNDfPd5DpGw4vadGXzwr1jJ1Bc6BsjvZ3TjKTrLyTRQrh5dK6Z8FBD1Zv9U5mPhngMCy1tPP5TpkyXzQu",
  "key21": "QrtJtaKUzpN5iNUQSuG6ViVw4uHxgihgFgA2tyXSmGVcU5F5V2CnsNetjrfLQj8tz1pAmALGcSyWnhnvmXLrTEA",
  "key22": "5WRsdNocaS8VKvkZsuJo5KButPTbrhEYBcmt7EFdmq41KtDAnyPEELmeq7VSMwWqUPRdHf2EevqJF7LiP5KnavSH",
  "key23": "5hVLQsm5sXk3rTbKrd9LNLZrfLTwAdSHWsiw98LGfVTFmtDZ1m95na3A1JVnKkedmLVD1X8eHYsUSock3ktopik1",
  "key24": "ESzGhT85PHw3xtrRv1RFtawzA8Tzsomg93h51ukR4WS7FspPkuAwxXmwYzGdWFx5N5r2A3L7uwSKZWVUBwmU9zM",
  "key25": "4kL8yhsiw7NFXwrgUX3KCPQgfSLzzfeJmLohXoKkHLDSBiRZNPN2GfXS28hC1CsAJQRfRKqy4EvQ2mr8EQvXkRd9",
  "key26": "5AcxjqBsgSoJfQAgwL44E7dKKkPoSFYbF45gFkQuj56H897TqYmgJ2YA12DMz7TDRqWX85foaWhPXBsupgn69cgi"
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
