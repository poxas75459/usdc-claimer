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
    "5diuEmbFNSg5zQ9t2ZjyzpEr5VL7G2PYXAmB93QPmE3kaUpVchbHU5B9VCgxpKRNaRthCrA2ZxpBxNGEGyxbous6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B1YVgpvp138VNxAYw2F23fk3b2Unsba3iHkSkzS97ntjbfP25QMfaK7hRJniL41DQdsafkAzquNRD4eRgsURBaR",
  "key1": "3qSWSvGXTrw19Y8eSxK7Ms6Dju3RQYhRQ3MU9g6mRJBoYWYkAtktCMLtPA8wS1Lxqp9BCznvtowhgyuCfZ6Azyb6",
  "key2": "MJNsqYjLan2J8xoeopMnERHDR2kzboDzSWomWacnTmHquR2hP2z5NLXJJM3t4H66MakxUXHQJhHTtGGqTaTzV7W",
  "key3": "2cM2Wi9U2WsStbpsmLYyYPEABBzXYaxBjxE46Yk9ozAuf538smXqqTtFttDXH54Wctu65QpSsNFtMjEJMMJw2d4M",
  "key4": "4F4yGmLTVTccapWXy7tLJTyTrjeSJ5YcFdAgMa1ML8LjxJtf7NWSnYVApxn7oC963tQL4s2dRFjH1NePm9uJGft7",
  "key5": "5vLeJm61LDMzBQYxE3ZjFdrGJE9vC8kmQZPB2nY7i5tJLkFVjj4RDbeUUr678tj2oPi9tt6jMBDRFd2f6UxuwEUo",
  "key6": "7zsoYhFXFxpxqCYFR8Ye9EXc13e5BqqcZKKj27EEzB1oGXMFNkW6yuWue3C9BkEoT5qEi2oRhwLa2sq1MNEfn3c",
  "key7": "53mARUudXYio6kcoRRzZoZQBvamMBx8xhM6ECSkAutbhJtYqKjiXGdyz5429Gjkax8sjzAQMWK8R8qweKzmwAtvo",
  "key8": "5VRjD555cv4H267EgSLWvcMBCUaZqJEkERvqD7x2KgHVpaHDCxDsscR1Jwm98t7xACj2xacPBkoiMfCRsxTRsGB8",
  "key9": "hveTqEygtFsC8PrZWR8tVm3muwJmBPgTKqu8v2B3PCTSki4AkqmBc85NJcx8dSxi4waoUkrAFzWz1esnfr6QThF",
  "key10": "ZjAD3m5PnQyjBYBvsUb56C1y3kYDdLES1giruN6qoKrdcy2JqxnWNXqCn3ngpdizpKUcQe8v14SrDK9BFBvqtpZ",
  "key11": "55trJ2wMUNMUcjsqi5HwnSi2zEMbQJb7t9Bv32K9SgXMxDvMc6uSHttg75fYtNBDi6TwDduTrEEvd24wBEeoAwmr",
  "key12": "5QtJayvyU37PM5JgouSYut5QGA2WBCfZAtHwgg7KkT7hmbiYwRDGsewYzNusMeQ4fihe92VPuUwthirmFyQ8kt21",
  "key13": "3Qb42FJFWexYnoJnzdxDnBACGso63EjfUmLHrgpyQAYoASckydJiikEAsuGVavornepdgpCXs1FbZY8daCvi3ifZ",
  "key14": "5HomjDek8o4nwCyNi2GUqg5eWYQAHNAQ8ZiahKmaB5SXqp1o4rUMozK6fDTkokqZLKZtHGwEuJJ7iYATFCi25z4e",
  "key15": "3yZZb594FKi7z8qEpNjKD2htdjvd2i8HDKxyqyrCzwc7mXTe2NvM2JqkZoQfEjpczuudaog1fPr3rSDsMKMbfDYS",
  "key16": "4UQ1PUXa8bYfSb72SMWRvZYmQLT2jfqbi9LNSc3DKCCWjRVnoG7kzRwehyJXesj1XgXWZn2zNT9egZDYkYanEvPy",
  "key17": "2Nbju5SkZP7R9LGeWB84GSVyQfTg77WVunn5DRcJe2NUr2gD1nkSdkjaYqusru3utTZn4ZZ4ZJu85zWTU9KojViP",
  "key18": "3U4wqbGShPB4DEs9xmAELu4vRCVDpEvKS32VBpUhk3LCEQ3PqLT6B3wFQ3vNhBzaG7MQKTb21DTmPsUVamUdpc55",
  "key19": "4zmq8cFv67Je4k2kpUNiy38SwTxypNp84D8Nrkp3FyLhkdmuxtd4zkDaqJDNtbXdRG3dKkgXnDd4v2sviykFwhJf",
  "key20": "3NyGHrx5dXXDtUwbBHkgcQ476huKjhxgBiHpsiHDbrcbmarv3xLdjbFSiGdJZ2ts857gs9JDSXS3qSj32rbmDQpa",
  "key21": "evKaBWmEYaf4ymQ7m8mQ2uNPCF28tHqF4CoHqgbarCPKZHwcwuz71W9Eu5B3eTtS2voaiAxUBRojctp5MYPHk5A",
  "key22": "2GjFTz8WF8sroVLZ5hd9GKkTGZkTEGN7DBXceDUFzzxC8RKnoQgBvAKE3DYHR8hnunvyyjYjWviXNhguvz3CcfRA",
  "key23": "92QVQc7sPRAqrhTobhzeVGmDd1pqWLUfKn7wAnsn4LQv6B5C8bYmRLp8hyLtHy8FPHtLSuPmqcqhw1phsuT7MAK",
  "key24": "HgimKfPM48Wi5aE8acExfaDWCz4arETMjVmFPoZZKqbyrMgrSYwcSC63QwwTf7gqsZZVRKBCrn4e6LCN7iQyUrZ",
  "key25": "2n4YhB9YK4Moj4Kvgnf8H46SH83JfduHVatRMo7nYeytMKjUMsGyQwkJ2tMpFFZqKh6jcd6KB71X7UHU1tWgV6KP",
  "key26": "2QngYS1GX6iNbhon5fgbnUto5HWLKUd8DsiSJvMLARmoUu5uyp9uWK9z2dUWwJVo73WppVoen7Yeg5quJ1v9YMrQ",
  "key27": "4vUoD62ewtfEN2tPFy36YXnS3jNX28kTF4RdLP4VMHWaKqkZq29FbFJKyv2uGLCr46sNsvoZWK2mUk9tac54kbVx",
  "key28": "4RSGnBNKhMcQs8yfiH5qJT5CJAfxbMKTr27p22nQGx9BiFcJmUgWQdZ3bJqhvKDe1SnN9hYHzqfbeYHWcbZYy2Ld",
  "key29": "3vkWn7sdwQViYg8is6iFhk9aME6bqe5p8bFMGmF6Nu5DmjYJF3WgpLQmkjC6w8h9tDkWLqHLoi3k1MJQhbJHuvYM",
  "key30": "5VJGpz34roifFGCVPz4PCBWh1uf2fyvAagTy1YKHU5TTkUB91VCDkRQnMonQEw1ggyGuQj9UwVEcQUMfTfoVMaY6",
  "key31": "57RKepZG3EwoDPKTPhz1STJeBczecQrBnBKMRT2drk8MuXdx4qMhYLPRiq3whBxR7ngkX1TmPGV7SX5tjNQpxbtM",
  "key32": "KaYMchtU85HGWstGNhrbzEx76zCngfPE3bFTm25PXaURn2TBhrC9SXb7zNAWWBsAC45LPrnwDFfcgAC5oiAgPwB",
  "key33": "5HBUFKVE7RHmE1azquj9okXk6pX3XavfC17dHsjPAkAQwpwtY55L8gcStahqCuxqdqoiF5vWQzMt8AD9czGVWYFx",
  "key34": "4HujAAHfvAAemwqZDBxAE5q9C5Xh6tEasYQ8tXtyX6S6byNUV2nELYKxvHJmaydkJVNTjQU3wAvnhkGptrrDoANN",
  "key35": "45pSt9pS4NmUteDZyYCk3bPP2r42mf1ngoKRoPFi9EojMJouRP3RpaXQBfzUori2LBJcDezZBps58EZrFNd91v17",
  "key36": "2hjA1jLUSxknfq8NJi4k1zqPGBbd2ykFwBTnzWrNVW9X8HktpAtV5S4X3ic1S4S7y6kKhAbuvu9kpMMABNeoSAc2"
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
