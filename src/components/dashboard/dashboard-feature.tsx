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
    "5sB2h3k2hGuZuBkBgNy2y4xAvEwTXvgyE1jmj1FMJeAo8rxQj6f9cyamup8f4gzkh4L9ATfiDY5VMAB59c1LxGKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CDGk3F3bVuY5FzvVrfZPqYwu5c4xHkv7RdCnMUzYEBHy4brtGHY1CCtAaijqvwkLnarp2hEkdU7V7ZUmRc4MQSf",
  "key1": "28R7QYmP96c1sHkKg328Kp6NtXod9GBRDntsF6cutz821EK3KBHkkCGuhFdHJPW1kJpgK34LdEkQU7CJ9QmJoHwA",
  "key2": "sg4Gk85T8mmciA1SBca1GGejjq3J2zRETbjwDaHUG1UJBU1ERTV1QribZJbd3qVFYSKd4XJ94ubRtxQ7qtaHEmU",
  "key3": "4stq1qn1jYki92MmFBtJ4RepCxHUdiRPpBeR2cbDdFzorJxkAuwYe6eDqEAowW1TP9ZnJigco6bqZhqwYEiwD4oQ",
  "key4": "2NZnjH8y81vka34bXVui5JPuqgyPDrs8C9MBLG4MDemXQ8n6SDnEiVqjPhL6wshT3g8kyD2oo5mNLfQvay1ZnfuT",
  "key5": "5V66gQLeTLdkbhYSqLubT5Xz2bKeniSWnJcRgkPxRUpZsRqjpv6ExVFufCbAvxhLpfTRenUBpTgP1seaCP3jUCRu",
  "key6": "5ZuuvcyREgt3tNX9qRFpj4yPV6zMqRe3qDd5uubXwuthHkNuvRsdCQyn5K5z6JxonqE2ag9g3hi1gcXRYLv3EpWk",
  "key7": "23eSM9mYF3LMCLYnCDFeQ9E6q8g81JtZfzi5GdTBMMGqjNwcxkqyXwZC7wSpMTmPjJDknehCkcVUnkUpW7y5dgK9",
  "key8": "3QVhib2TRujKSfbQ9TjGdYQDg9iwCQS1yLnvVdeXWPXoby7K8BTKyMcCzmPjnengSPCPaZ4FKDNPnNFErt1DUxwb",
  "key9": "EgfvFhos7BLpTvZJ1KqsNkjzCSyrYp3V7RseSeqYRvBsguFHGToXTFecSP41nqbUs4hVx7VB2tAEHejkHpnQSWU",
  "key10": "2XTDNE9etftrxA86WCDgb6M6hXvHGQVUkr5NT75YAo5w8U8kSTYFgpUfvHeDmvQ8WwTTXbNo7MbCkbSA43e7vibU",
  "key11": "3b87Xnax8QNqJvttwa4iciXFX5jbmT6u1mB6vMa72vvDsGCXoVbsFJesrLdRcBFUvKTzpH38sB9LQW6EmuYgkBvq",
  "key12": "4X6GBT31Tv2gBQW8RCx7RVuM4vUwbfPLjkTk4Rp15zuRLAaRLNubGxf4NKPCex7nHpdFmYRpfAXPnMALHuNBHaf",
  "key13": "3GGoiaAhfDgFS5ybRwGZK3PcUvuTL8Cd6k8VaVtK6Sha2EPz2VgztWnGhCxrERnhQJSgViXU3AWYh1DmVjmLn7CV",
  "key14": "2AwnHcgwWmtmpH5HmqW7PK9wWR4RoK7dketndm9FdjE2akDCkyotUBv2y7BGJ11U3Jq7kJnqtJ4eQ9dPmijLTar1",
  "key15": "2iGCHUm6JNQSGf3v6CPusDB7xAASr7LU1tg4zrmZedsLFQmrgwiPYxbVPsFRHNPhrYPVAfZdE5NxEFvYsVvSMUKn",
  "key16": "5D729yKgGns8KHXuAPQjNKhgck3sAvb6MzgaGWPne45idaPV9hSZDXmKCS5vUQJ8oASosnJPmsMffnMgJHXZUk6m",
  "key17": "37yAGDxctzDkMQhsWS8EYG6TxbtSopU8uyqrHE6cZn76yXf6nnPGFovoL4rGQsHiwtxWoxYtmFXeB3ig1QKi7ctd",
  "key18": "3jUpmL8Juu5LFRo8L3CuecpRWtPmntJ6SYEt29Bx1YD4ggZF6JiRosbiXkv5Y3sFMfntvEzhJFr9Yhi6meBzCEnJ",
  "key19": "4uE8jstjBfSpdJ29hYGv8WEHJ4VoHrcYABN94P7CX3KwVJXz2JWJm3DCN71FuvgFVLCi9gRXAasrqh8bHaUZuPvS",
  "key20": "zHbEY9ys2bHnPHFzr66DnWpx8vgXUjEUmojg9CTffgYUw7PSQVqGavEsG5odbCW2DU3hrUL36e7DAdD4nxgQdj7",
  "key21": "huNfo8pdU7nfPpmMbybJNwhmsyCa4hUwfDeEmKpMMi4RobdSVc2e2V283hmD6Y2FJWYpVwHTDYMMGvwjJ97wDUT",
  "key22": "qDDcmCMbzPC7vwp128a8RXQPPaiscWhjtyUcF4Ri9Sxn2RfJwxH7d1LMe7BExBHwdPM6bFgn4z3tTcrc7B6g71t",
  "key23": "5tw5LpDgtxuXc4j8GLHazfnf2ZgUUZQwM5BdFgCFgcJex5LvN2BLTvMhy1A8pzeKi6tS9E1U52tKSR4XzSpgcPib",
  "key24": "63aVoXCZ2hR5rXf6r1cyeVwUha1P9KxNUSB9pUyY2QBrxdR3Y27VTNUz2Q9w4gp4jgP2nNKmoYBoz8FNoJJciGnr",
  "key25": "5TxmHQJwPGnUi7RFLagBaFYxmw12NEdZV4b866JqeaheRtbKo74cA6jTjo1CuP9j8F1k1gfAn7FMhkJLeG4vw74a",
  "key26": "5K1AX2B5pY9Kpg8Ne1JMNNbPwSgDoibtnJ5oTiMUVPh5ttieoyXWozY9io1jUMEp64AYb3pGZ1XxdJVwDCRAPPqD",
  "key27": "47RBHgP4KMKgQzSagvXxfeBRSkxTkark4576nMsVg8oYSKm9nYVmmV6TB1kCwrxBZHKknDTDVDZbEMnWeXeAm33e",
  "key28": "4xmuhPXZjhEpaTdTPAFn6hhhyqcGEJRYH5kPoXfjpjYzFBGcPTCEaDzig4mmvHy3zGvfRt6TnjLkFfUMQxCyNoRe",
  "key29": "UjgUYmFiX8GpvEC23vAoFFBio5E4Yw8L7XsS9hR2MijApR8ELSwvKcz1YuG2ikKPPZLwZ4Bsz9bWeGM6mpeQYZk",
  "key30": "8qLD4XiRMFiMTfnUP2iPHLyWQ9KDA8AVD8ppbbhLiWYpn5iPRyPtqKaCD99ikHzF8JNa6CbuVvCvm2d6ZycFw62",
  "key31": "5GYQ3zpzeJuoB42xw8hn254E1LNwfcc68etQDoeGkr6jzcB7VNzm1kgUyXLfcAD5f3nBFCDnuUdmwFLd5rb4ezqc",
  "key32": "4FU5RAGmjW9idSWRxHvefsJmudDuCBokAG4ES8sZoRNYVRx6qKJsF6BSJ4Rv8V4W8aMKQczEbM1tBaBK9FBBrcrK",
  "key33": "2qHDBaUPacbXBzTSyLk9VpUJZPmFzUpRrMcG9kzwiYbdu5HdG7WC1tJqxyqvWPVeeXTYJP21Mf1LAXmiZNrKTj9Q",
  "key34": "65d5w8vS3TMUjwDq3tHqrxw3gsQDNPtH96wTk8cFpjfuckPLS8BDzVmkvRH395jSpvRHzEinsemEayCuvVuX8z4v",
  "key35": "46WkvmQnT3nHEF6Hz8ej6sRw419hr2TJyj2YnFB5BBZrECoA8H9mB9oVwsoLFJwxTWzZFzikE1LkzraYLXqaxxL1",
  "key36": "5pEfjXErAKCFjvAuqY78RrpLKMHZ11YiVQeQfafMue1QNibjyiuGSaAoEAfocwwEWRkdFrPAZM8gWa5UFmTMhbvC"
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
