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
    "yMonYy1eWrpcSaYQhBfpwgnLPwDaXjBR4eCY5GKVTFc7g2Agm7pbidFjxoz5a3Mh4CP1Njk3BQq3hkynFd1bb5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hBKSLzVNKhnikNqUKUp46BM3SeNjcNBea1GZtc9ohJeEq6A1HY7wtHFkhwbE1ayxrsJFPmLkVDDRMTEtxiXkveL",
  "key1": "GcEAdAtAr3FYchwovbZGbeTz5oyyybi6b6KwuwzdSGoyNsWJ5xZmaejtKbyfVCUKcY2rByj6RRct1jb1vWaKo87",
  "key2": "pFGPD7icUYwyWGogWksNRiR38xZe1QXoxAMKTo6XE7LLU5fkEckEEYqRoQk2aFxSsfLDFGNfHdXpUupdy8yjMua",
  "key3": "2Ui9ZM45proPvvDxCHJHwaBX6JttT4UFHifMRUTkjWv3DvMe4g4Yaum2Jgfb1SUxrKSw2xxh55FEAMq2KfYnFtrP",
  "key4": "468aWeGtJnoesZz7TyK6ALxAXC5s8JYppkf73nFvuc3fHt2fNiN7BUcKWCGMcuv6Hz7dPree96JzUkCsoEfL4yNz",
  "key5": "NYj5gmRdEYcd49o4HYvFBJLqt7LhcxnR7yVb79RY4UiryUiG2Qcq3CxjhdDnsttumm6aEcTPU61vqWUga8YKSmW",
  "key6": "3L7oEENRFbrSs9m9DZEXp881uzQEXXp7pmb5QCSNgWDxNbyzGnxdFHg5UK4jWqBBDRAzNCavN7hQaQsT2iN5Kquq",
  "key7": "2yCSx5YSxBYVBg8N54bNpsU75h6W9mrA9Ama4ZyhCgfYbpB7jab2ZS79dd7XZGSPkKdpNPUaZQQTQMD2xBJreBQz",
  "key8": "4sPUAAarykYbbbYiD7fovdfDUE3AoFW4pCVCQrhCL94iezA3xyVRAU1mpVMcQfTDxQgHQzHxwfaGFgPRmmn4G4aT",
  "key9": "5VcTiw1zUdH9deSarLiQunvtRQyTJBfLSdX89FxCGMoqMNbcA7bvj3dsexV3BqYTkS8sPnr69yHWA7uiML2Ds1t5",
  "key10": "4DnsYTAqvjtwA91FbV1AxP7Hd3aAT663uYBg4uY8e6fwCdkwcm3Wc2mHdAj7TGmafCCEe87HSXYGJFENSWuC8Dy5",
  "key11": "26DfibrDb7sXSbGASMWZqtsbN2gL366vQedoRXPDJTVYwM9Fab7bb7Lv6gHndg6sJjJ6YXihhkbqy8M8gmtJp5ox",
  "key12": "5GWMcsRZ4khbyvAnmgpTVAhCbZuapzGn6TthxwJDtNvmwYab8VGTqfvUAfnQuATpvkiNmUq1QhuoheJTfeVgKh3P",
  "key13": "4GnSZ3TcQXTQu6x1e5CH1bEV6b38tCWg3XAHRk1fUyYiDN61t32yCqpQ8WGBSnEiYGVpgjNUSH3npqkLRngPPxi5",
  "key14": "kpk79aJsPBJKgZgQLmn8nP6kUKcsbJafukKmVzEbPK52us8Cy3TBqidRmVtAbLJyTWhxEKKe5N6LvWNR4H48wtN",
  "key15": "5CUPuZ73K5uu29m4UWq3JWrPXWLyCPf1ySUkGW3FqBsJbR3ojh5P4cZdGSHNiSFfo9a3sW4od3ifnXyiU8Lmf5af",
  "key16": "t1RDzsLzErnvT7aomR7SRH55i9BYWUxgHR9Vs8jRnpjktrDsxxGz9APrLZujyXvYvM8CAU1wUjp2giCj9jDXrE6",
  "key17": "42NxzLp3QEgbX7zg5hgrp81xMoAJjJwNV6hzk1TwwFKTMyJhiohNYie2rvetPrfaPUGMHijEZ3hzte6FcVUmymNj",
  "key18": "2BgsmygadSQ2frmDymXAFSFqfHPe52dGZUpY3fAhK4h2hqo7M4NeNe9RQRZHnFB3dx2sryt59NuVRCtNwJ9aVhsY",
  "key19": "4swKMVPNA9miPbCeBkFmpBFRufDcNkDJjwaGZQ6pTdrr3UkFRdZQoe78AQesMGfh6gF8ttmcgHNnpj87XmHkfEJL",
  "key20": "cCfZHvha1HLBrNnTSRTdUdBrVgZfRoAwkvNC4zJTfxtUrFm2wKRSwuuk4hnPnxH9bfFhzaPk1Swk7ZwVJcoLopy",
  "key21": "621zyCy5sgVGbEpYLzZGTna1vfbLjMxzDtY3NzjxHsptbf1FH7SpshiDPZEwu5QWdBf6fEVAr6Kx9fCywDDVs9ZC",
  "key22": "rUhFbt3dcmciDn4Coq6WKBVo1BRe2KYXpUf1ECqmw8J8y3hDu3BZiMhBcmpCgVnNbUz6yXVRaz5kpFcWBiCjkA6",
  "key23": "3VFxdqKyYjfqqWqV4RB1GTS9hW1ixz7sh6h6CsYtMzkjzUhVjjgVAEEV7mg2TV5qSCaPMiUS8TbH2fH5cfPi3Hne",
  "key24": "4hmhDuqdkrNAWmX9zj7f3zQuSKyNzN48tX6Ew35w7to9EbSPphfwECFCpeTke5UdBmQKyXSiFB1FAwh8yWdDBe8",
  "key25": "52KDuZhzkiVfZ3fDGKQFiDo8vPwFMPWHwNEyvCGmfrd666LkmLPaqTqCnKY6NUnJS4JXtuvpJoGpAh9pLmdGCey6",
  "key26": "4kA37t2PaZhQYZmRWG8sHwTNYYBdzui5RN9CMHRASYjKAFVfs2tY9vBp3CtveTb3xXsmE3EMHfr2wk7KJVGFGBXD"
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
