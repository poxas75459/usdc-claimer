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
    "2GUF8youcqgWE4HTbPPKiRUyg1WALpRTfibAcAa8SxSRChhx4JTa2sc2AWJPZdVyC3JgaFqinKAVLNNDJ8NDKPqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xpDLEyisZzoUhtCddXep1mFpAzEbJhPar1jEeLpta6hsZ16St6dJ89av3sHQJoWb9HnkFnPJEX99oLhk864ieMS",
  "key1": "4ojx9Tyy8Ksc1se7huzmRLzjVEup1CexoJEq4q5dc8JY6koTeTE4c1PDf7a1g5w4rtzaeGq5ZbBwmnbgvrVByoXj",
  "key2": "3UvWvUk3nML2WizfF2gRkTULmHB6XZcDQ8UeMJ9ao3R2vpe9GP8jbfZyLGaGv49hYmQqgiQbxgqDKzdY1rvR6gmr",
  "key3": "3DeFLsQbCPvL8YcawyG1RZm9GyzekdyAXzftYjYFDbEuqm4yYaCZ12B446oy7KRJtMbCYPSChmUM48D9Dkqm9a7s",
  "key4": "3CNNvxVds9H8us291twgvEh83FVHQZUaD4tDfPgcZd5AqX7Q8JvTBY1Hiyo2QD5XcWmqtt1x858uTLwfhoNmJWFW",
  "key5": "4nwp5H3c7TxVzwFst6Y5n27UivctuB4URju2mLXNtVVAoLX3jss6g34W3cpJTmMF3TfEBpRWuKq1zoFRGS1ya6hW",
  "key6": "VV6QpMbZKj9sMVbP52UPcW4RsFYWSDWw2aCDPwtxyEgS9YkQJ3Muep2tSW8J4cu1KWy4HTSv7s4kpfuANbeLrNH",
  "key7": "3D476P1gYDEXvgM3pte9uBkpJrEMSxCN1MbrNWuBxteMWLGFkpErwGXv7uVyd98H1nE8bj3TDdnF9V9ugReCREVm",
  "key8": "u1paFKxN3wYWsoaftm126tfigM1amGdsjHGEPJ469xe4v2vhunWr49AGE7xWUsyXyzAz8hNhYCbsKPSuj31BA5B",
  "key9": "3FiV5Bp1A4aSHzcQpigXx7aRcEhWJRz4fcJpWi9w3kDRSPhjsfvCjEy5myiQ6TxXHjsBfq3sarTJcbAqo2HtGZdQ",
  "key10": "5Qx6qsDuuyZdYgsATPcaJuYoShBKpAsHTfmVoMBQ9BhnVGHTDQt1ST752rcFwQZ8iNqqBx2nTFPCqs3VFcg44Kj3",
  "key11": "5VcgzXwKH1k97FCeJsm8uFPiZ5HEki64EY2mwtaaH3gmnK7j6AgPhUSMztbK7DSe4zVKzruU5APS7vFxQqAcr2pV",
  "key12": "BKvX8BoxmrpireSeN5vmZnaSMqjyq8beK8dk93qe9k7hheuXmmoDwoFkAQyLk3dXNa5fVbS7xbAADaGkimtGRbj",
  "key13": "7R5oESnHeMuZhWuCa5ECJoBu2HxJrYxXpwcJy29LWGeFu8avjute76mMNn2aEag9A1zJ6hqBUEn9W6KwKgvtjhh",
  "key14": "2KobkmKXppmghXkXHW4td3yzPPuy4EamY6cRcY2q5KB8FsyHKTm7KFpjcXooPQQDoYtWJyQBJcsQB81kN4Zw8RTo",
  "key15": "4sgxAboYFwFkwZfB3z7A2egYpvaoeAqn1RYMQbveW5BotCHubgqnVqZ7HxqBZSdtywVzUFpchKfoEXgYkD46guRg",
  "key16": "yjcs9d7sHh8SqjTNDkqtRfRAbCwLV4KkXrj41Y4Nk32GQnMz1AcoUBtYcYC8fha4R2nhAGx8XcNYUTRaLm1asx9",
  "key17": "5BvLi9giZkgLYoKb5YuCTxJYvFVAx7Gi2xqNC7MiHGpdNVqE54UAbATnJiY4PwEiMGZNEvg4XSJWs1Xu95zJpxE",
  "key18": "4GgNnP5fPg5hVoQ8zEBsCzMWvBKxFVgWrqxZpmVFBGcLdBpd6bWGviSKtVuQrvpKo5r7kfBRwvuTrxLqNtGmRAn3",
  "key19": "TEeL3KbyRCoxLPF7RQPZepnsiVx2DoTNffJLe7mYG6jtjYDUdUgpnZKCrzBZcfQ6Pd77vGhn167TADfHXYhj9f7",
  "key20": "gqxnw3AfjV4Syh3kWXuNSqXtPUvdVjnhg6kcXJERE9xMZobLDA6YYSYqHXw2h4wvkNokWuh1ii23Hy5BLzFjH39",
  "key21": "3CYRNP8xJoZfZKrUvDiWNNvhnNQt4r6Q1XGa1H1SdtHbLW1EGc2Uu9mHkFvBa4fcen36kjfuSrimjAWKQA9MZxHn",
  "key22": "4XQiTvf5Y8hwc7JG6rUAN7AVMY7q27WbPkYCw7yiCCFSLTAj8AULGoiqkiAbm2RdHnTUmU1saJPKqGxS2huW311z",
  "key23": "JdnpkRa7Xf9vNMotBtyg612UNJj81mAvfx5h24HbMVghfFwFpSCV6E7yX8u4Ndm2NLmk9tDSEuvbCkeLcsVi3Dt",
  "key24": "5YCR9tYFAgP8sMGVNKkk6W9xESKYGZokNSJ4dX36q3az2a1ByWVrzbxBL3RZLdbgghFK1HZ4rnTQMUQmiaoZhdSD",
  "key25": "4eVZqFtgEHknsxCR4pdkcXNQ5ad2w6mB9Pr5i8LxkCxWP1LxCWb9yfQRwbD1cksQgQFyHQMRBZa6a8SjsvPHrWFg",
  "key26": "61FzwihqVX5JLJQxb45MySyGCzdfLj5aAwBZpB6958Gxw893pw1U3v1Vgr138dae2WLjaGyfDvzXkFPmFwkCc7vN",
  "key27": "UmAq5jxQTfrJC2FjYJHRsq5H2iUgqpk18uAKL5iUtGvYGyMrFk1yZ79ev7SbDPtUQKwmVctUhriGC93dGTVPWD1",
  "key28": "3s1odU3WjeuY8dc2pShgdfMGg2HwVUeVjTmxm2mniEymYHfeJgcKnfYA9YojXxgZHQ6ECNC3UJ9W8fc2bRN22k3Y"
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
