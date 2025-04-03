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
    "ZpZqEUpzhWx3FXiX7urLMuTcPJV8bWNM7cZZ13PsjziJvk1DN3w4PqMUc33TMpeh4Jds161wszcFtfKnQHgASS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JL6BrPh9RUfZAkk2eT817FP2MyJLD9tWmQ45DT1JRjuxxhQeX3Z7TG42d8ae3iHPx57fxk1vVUZUfkcXtcxeUnZ",
  "key1": "2Z3FGGXLSneAsjUVLjPRg1XKw48NweSYBkzNjwpZi8JCTCQrbPhraSpL3UczCxpJeJNPQuqD4kY9gyT3mxzY95hh",
  "key2": "5PP87tcBxhMqy67GMy3ALaL5G1xy697UxsKPMaTU8eEiBfDFE6taVbS4gJvyQKj9WYnhvVpBkmoPV2pWH1hP2ThY",
  "key3": "5L7jfp6QtTatEb5N2rM42rYuHQQjbrEGSdZUc6g767J1qZHFo1hqpiRzqamckAYMXmDwxjf19Kh62pquRPe33oxX",
  "key4": "cTa1z1s1ERnMv11vSgGuza2BwgZn8oQx2ouGGF1pRRv1jVsC1KR8fEY8vQezhpXXcV1h9cPeM3fQY6DGbrkFLb4",
  "key5": "CUWSdPCZvC3TZYCWjHvdA3nS8ySjENydXnK3y75p4AkC11YHKGmvHxMBGuvgNngttXaqYtiFJmSBrR4r88paAcD",
  "key6": "4KrKoj22TvH4aah3Z5HEBzUQp1APAKovEbJzrxMM7ene3X2QncEiubR711PAFSa2ePgmiDTHniPapuvuoKY2uEff",
  "key7": "67PmHhGaQptXyTGpBEN6PKSmvWr6q71BBg4zu3baB3wop4JrWNxC8xZcgHrwVJKEEQsU7T4CvwKdsB9Jy8AUPGTQ",
  "key8": "5yAygJhCvZNPXsD1J855vb8vhXx5CVZHV5DfuFQ12mfi12Hy7q2cpJX1b6NzRdJtcyAxKk4cWZK7FYctGtthRbnS",
  "key9": "3mKQFZz5P7R4Eoaada7hcZDwLmLXfzJCpGftrzQ3MJGBU14nTStT8VB6eizZW9oRgmNeHuRsTZenu1G2mdguWzp8",
  "key10": "3NEsn9HhxLc2rFPuXVpbq3WB2hTH9A1Sbk11N1KbjXhWCijoVEUAbAqxWPeQMhKAxQq16hij5dNyTisUFg9yp1nt",
  "key11": "5BYrGbChMxkrP2WtyT8sMKdWC7UapvB18Sk8rzmed8zXcLv5UiKvLU4LpcHQP5afz2NH6TJRWu6jiXp4E4CBxV91",
  "key12": "Zi3MusyxYd3wEUdF1bNoSgPrjppMwrWu96RHusDLadvHwB4QJCJZSx7URiA8T45LQL5njERNDjysfvW6AeeQo5D",
  "key13": "4sW9goASkWcmJKN24n6ZBPmtzsBTMnn5wQsqJTsWtspuxLRPaFNRBLiM7FodKfBeXL8w2LUW2iPzu7euMVRxauFS",
  "key14": "4YiwdkfKU9gZ14b7T7EmVhi7z5YPBzQM7qmRudhJNeULetHbmfGwJWBvAuiFGfau6rttCDTCuaccZ3pL4Ja7ksR3",
  "key15": "5sa8zHMtvVCXLTdLr31EafBkXctMnFqwdeE7LgpYTG4FaoHh36JZXCjQW55P1bLfUTXfAMe7DbTPwASJuUzXZFW7",
  "key16": "4tep4FTDnqTu9LB2qmqvKb3vFcPtr8KrKs7TJh8ZBFyXWpR8Mwsh7pPtrU5JZhi47ofGpUod1gdThzwSHHrdbD3W",
  "key17": "sMR1KDc44k7vqmxTayhPo891KQD1KqS6wJZS6cG6Ge3bDXGJbjfv2o9FbT6RrfsRqmaFxahELwfXHQiJ7JgBVTd",
  "key18": "642yBCgdP4DzG3Dm3Fd1PSmj4YMcyWQLin8xnStVzLMnCfZqWSeW7WiNmWSgy762b3bAs1Ci5QmLqCBa1VDN76zi",
  "key19": "uzioQiasmQnS1q2KftwkdH8qZxVMR4JGPJkwdGFj5JZJqX2D15HQHQ4hsjg7HL23cUi46sLnmYf7qGiaM1hVPpq",
  "key20": "21NkndY5B5xq8WM3uWYb75ECsWbkAUzDFMDRwseAZJ5xgn5chCF4ifYFcuMqaN6JaLZtfNcdFkTMkq7oCADi2aQ6",
  "key21": "23XoaA25zjKXrWbsbaXJXiLnfDoamJDeAaCTpvoAERFPKXjtn1ybN6DRq2ci689FpJyQBSJ2XjrWTbpZGuiAC1HT",
  "key22": "4aPsCC7No2oqwVex6dgwEkvKAo8ZE4uC3V52B1S9jSrRdjgyWqkPAeVAH3VrSyoxY6nZXXs7ED7V49Htzy2Bh29S",
  "key23": "Cg32bC9XWypsBx3v8S7uJeHTq2M5pVrNb45qS86Lk7rNpQZxoi8BfRD8pixmkMQQcXvi94JnoT567S11hHtmmuG",
  "key24": "31D24K5ifPPRdNMXwWyYy17HeNxCGhpzyjvtZmH6E1D8oGiVyiB5KZWuxDpqje1cCf2ZyZpptCQPyYfCnYsfPHYD",
  "key25": "2PHDB8dJ19HK7ynwBwSL7ohL6ybQttguRDb9jiuVF2EWQSqZyocCZnBHPejpG7dtYS6jbA2buPWKRo7wLQtNQbJo",
  "key26": "59DhxzzPnwuMfbv3kLWxhdAG9F9TrGSKPZhTNH93xdpdaqFpVDDjkXtc8UhSrNtK6EE4vP71ebQ4jceQCk8Wu9nG",
  "key27": "jVKpQY6YpwW3hy4znVAXuvUzZUGF2ikq56QzibErUAd5Ub73epQstfnRuuR88F5f8LmeKbcVmHZbTDj3UDaU4A8",
  "key28": "RChpU5YDE5sTFfcZtm6YHPCXmdXXuZxiUnethrfBqJ3WsTa9FdpS1o26K441JAyafvGwJAmR9wNYQ5o3CnBfjtu",
  "key29": "gdXLZ7ohssXC82K4KjQuC9XjyRETL1Mgh8MznQebMZCrZKe8ss3bMBpGK784wG7iKQknSSBEt7XziqH4FBv3T88",
  "key30": "5MwGrFJD2BZooG1VfoJqkmLSeD1Ff5hpedjLcizqN3bQYxs6mZsRBtbXQ1tLmYrNudAKLu8DMqspkaCzP8of77ee",
  "key31": "59VdebpmzwjVfjUgkKCy3gsBBU1jvfH2bpcraySVGCzKvoKhsfhmqNa8jo6cZfeifuPN3UBs28RDsqeqcqtwMjoP",
  "key32": "2uqaSSFSaS34PVENYYwubWziiuybHc5e9ZTA2nSPmmm5bi4grSX5mJt8D6TStzGHP8cQj1kZ3D3fQw6x2sphZB4x",
  "key33": "51UcgSwN7t4gQU3sQQsLyUSZcsRhbMf5BRTn35ax54M6BHqgF1wgpN8sNppLGSeVvyLhXqbWJ64uJ5US2yZD4CRu",
  "key34": "66C15kuk8mtFCBiu2xV7UpxouNp7bJsmZfz2MnsHg5dC1MnrLHz9PAHDqh4qGFu3pexyWVWbnAiCNHLFvQmV75jj",
  "key35": "5z8ah39u6VpQEYH5dEA89QdERLZL1S5brbiCcYNNKMMdW2ZAT5i38n6DXgmRywmoxw4gpxXWbe4R5SYJkqKSUZx9",
  "key36": "2zkFkN5HdMSXmWSe6aJcLZ9GrVqjDh8Tke8ARqs8cQHw36xs7Mz6uzr2N9AvtWUxVtitBLiocEkP1ELufGUWpZT7",
  "key37": "ZhAVft7c7TaasovYLDHhbyTDThnUSVHGFQcb1LgSrVk7DLNPK4gKMv4fWdy2XnQunhfZ5X9YBCadRk3yEKtVQFC",
  "key38": "4YA3Va8nY2qLRX6PoNz7dsZXP2t9doJdj5FLYTnZh2FXNBZkxpLPgoV6ua4WyYBHXh5NiDEoG5jPZWD4iEi5xuyu",
  "key39": "5a3rJuJ2tCpSyFTyPRtSBPXwGUNuDd9t4ih3Qf3ttPupYHvNrHqeSRGaqz1BtGeJGvj7jpkMVi3QGYVkZ9VviaJW"
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
