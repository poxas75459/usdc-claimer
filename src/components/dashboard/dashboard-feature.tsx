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
    "5uVJGTwhKMnPKQLu6siNRHjXaWCpqpeQ8PYhVG9UnBcLGumFNkQVqMXjmiB38PnQP8Zdwmbqrm1P5gEjbxgbpDYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JpkXG4zn13Gj1k2BwcNzduXBjCX2mPsfMQXDWLQc8ysFu4zj54hkem6Scc8HaMMxqb4EyhQBwX9kPuRr6AiYa",
  "key1": "3Tj9oAod6R7VMAA2VEpMnPKG2cLKnZqMRRvvEPucnbZedZ2icgTFmU7iGTreuekij7UzauqmeeU1GkjbqnwLSHN8",
  "key2": "3PLCsnzKJ4MhX3oaXSiiyvouLHUnNAJc94YomNwCqBanV8CvXbf5cLt5cszNFsMWkot8QmABRU37H7oUBjaqz8CN",
  "key3": "4GoZYLCqcjZ2SV2UUuThYAPZS23sPY4CEMfzCgzaL9pKJ2QHh5bSs9pR7q6jNqiAsg2sTMtauPAFM3mfjXvWs3rF",
  "key4": "4eQjBZZXedvwYUZ3erE9URxHbr3U1bpxvo4ZxYpKyCnmGvogeBdE6qNanyQk4PNvcfq2DK9Cr24MJeioj71n6APt",
  "key5": "2TchnkgLBPVnYjsNoWWThoF9ChvjhavBDB3fLD4qFRHXdX5sbQDrEGTpjqJrDzuX6TTd33fgQGV2Nv17VqykWMMR",
  "key6": "7mkynmdFaPUv9p7er4VNqvBEwitFHjDNU8YrYnEET2itLLAvzqPszSxqfAC5bNskAnepLKiConejyNQLPrTVf5z",
  "key7": "n5K7zEdQ5g4Lh5USqywnn7PAFQJZ2h7D2EbMgbYEQsvF6PFmzKQUn4uXUuJrQFWGdiAWsUBTEyMbLJpBuUV2FBj",
  "key8": "39Z2weQRcGcNsFkgBA8wrjLaPhSCTvgo2VwQEMvJkUD2uwG7WTPyMQ92w5x21v4XWekqMrSPx2PzopNhD6RFZtsb",
  "key9": "4cRaQF29gUEqsycNRG1dSQee3rF1U5FV5wtTARDuetpfDf4bDCixDyNmRtQt1jwBGjV2fp9f458DfTdYVU7BNySi",
  "key10": "wQA8qyRqARiuamhe2LshTvKG8DwgxD5v3j7oz2CwSQ1vM9p6LkCK19p97QvoSDSqxXz8TF3rZfzwma3jYVxp9kF",
  "key11": "4pF51RXtH5yDZnsNnDLrEgC81fBR6kEeqfje4RTiM79tMHwgwA44ZAtAGYfXPLFzn4imP8kXQ6urJWQ1s6QotcX6",
  "key12": "4Ub7wuCgYexhdazqghbMwEswQHF8Av1UkAioBDrUF2jbR5r21Cwyw59rviwGGkymbwg9bp5eBmhs1KEM96JJ5Zq9",
  "key13": "45KWe5cANkKokv9V8aGDoodizvxU861iH6rwC8sTTztQQVFph7TSVmYe74TdZK1jqJunq4Z7VubpyfTtHCvr52di",
  "key14": "479fCyWUJCRHBTdx5HRbqu3VzzPLENLnVWEjywC8GdP1hEwc3K2hNJit4R1Qvhwz7SzMXgSfcupHGepNNSgkEFGr",
  "key15": "3CQCV45mtY2YPFt8Krp1Wx1hj7c8EoHZ3ArKK5QJKcbMkxXFZFuzBeUR6zXpvZNSutcyVbc2PZUEHsAxM5f5huf5",
  "key16": "G3ipHE9n1Z2Q8usJAqUPsVJh5HRoxGvXL8UFyJ3LxdmPP2xsxU7LfZF5mHkeQdUcs9MPsztCcQu5UNXTj4GwyEy",
  "key17": "5Z46iiCNzSC8qXT1yyzYcDAZYGybjXMNc9j9THjCALXZ7UwhtmwBrEncwAb2tLMRR6gqm2MBnLwmCVroZbkHsJjg",
  "key18": "3UpXasvDECccrEjiPV9kDcxJ7VcFqtFYHo2scGPjyJy1Pq5BCENRjHYZqv9sE9nAmDMtMzmPnnfrvNnzdJHf5LDp",
  "key19": "3ZzUpjxGUqg9Y7NyeY3nVHvfpzyT3uozyiQ7jCbwrERE76KLPg1Zb67FbF6GxXLnHgGXcH7p6sXg5JSKHZry5Kmt",
  "key20": "5EPKAPE4nUqnHd8fD8qmpKVYsDmQKSvL6vBpfSrK6mXk5u6ATxJVtcyQcYPVsTEagp7zuUv9R9MAAaGG8q638Vi7",
  "key21": "586fZDnrWKNT4F4zR2KUcN3C371jYiTEE3qiuDb62jbMc5yfFgMsEByRswVDFmdXtGQxaYjJjhf6JfMcp8k5UYVX",
  "key22": "4BAeG5Y8oiXCRdr11czBZY3LkY2roVnE1akuNvbmqWNge29UhuGDrNTsPt9rnivcuvTtZwnHM8UDqFaPAWia5MXT",
  "key23": "33y541hg13SKzR55EXSVsTSu2zx2Nfv1vqurxrHs6Mog3FdWQyTkq5C9dnb8GRcVaGSdyFGy3eDK2fdWw3ApNWtM",
  "key24": "5SVo5bkGQ1SBSE7Swm7XLqhsim11yvVkpxF9VvfhvvAfGLhXZWn85N7scv3y225tegPnL8XPEqMpFqxAieApADxm",
  "key25": "2VBAmkwjRj9Dbujm1LfjiBeHghC37pAPg5HyhtUNB5CzNJWzz8bpDKfLsJZrSWAkpcSzHBGFSWDLSPzKe1b72Ydm",
  "key26": "2iaYQXMLJWbPefghkeJTF2GyczPnSJgNDGWPkjpZW2Qp9x6Ci9Ut93WV8qNNca2XVHTaRurZEL5NHAJpRY5msk4N",
  "key27": "zuhMax1ZqCY7pDcREjeVK3QxSuCMEQbxwU8bbSXDbfSock9UcPimRRbweHXs5EwDXK7RvZkDNBSvuv8BbFqGWdQ",
  "key28": "4zm4y2oYYYwbB4hzUkbKtgpF7vnCYHG5okDP1ZQHzBLpsDW3WZM24xentqUaHXPuZ2yQUDZKvLaEe8KVFQPtkKj1",
  "key29": "4NRJHTZtoT8Fq86gvYqZWeKow1uGu4SmmJFLTi5rph5wZSuLcZjFMcKFmYerR1b6DjZaFXQFXkHWr4ep4Z3f5x8s",
  "key30": "5SVMARadZ436qCN17mRgqSiKfsCbwK6G6kjMSzDgdJ9ckB3BQXU4i6EEAHTFuLa1tuHJQEA4yqWHL6iRGhV52A2h"
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
