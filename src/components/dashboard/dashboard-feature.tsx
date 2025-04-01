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
    "617aGnA3NhHBaBCgtUXkYiU6bUToF2bwjfw7JvHUAJXK2nnnWyywpKNprv2uRccXdwpSYDjYA4jRX5CaticsfYfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2azH4M99njL8xcSgLfJPab18BsGteZ3W2aTkSiJ9VG7PLaEQ7DBZMi9GN83EAYXYARKUw22KqVaveS2RE9Raybki",
  "key1": "47aJB3f7JyVUXGttipYT1ujveH6YZVnUoNCDiNNC6rNa97TANoxxyYMrYoFuhnUEgLJVQRhDi2rkje7xDiozSsX",
  "key2": "5oBPXkxfNMMZK9cfwuwXYiaj7Jw8rHoRwST23ZAEKYAcZeyNdJcyZuV55PpXaXeibzCZAtKuKAdcxQoknu63EEd",
  "key3": "59QJJvKq6uAcRjd75iCJEGqS59mhRTW8BeQ4EvkjB2hSdKiS8iCT8RUey9VSKrEDvNSPkAmEVSrKnx652unHuu2e",
  "key4": "4RGueGEXn3M48JgMBUubeUMAbigcrcAgSaMjmBBsYcKYJFzyMWoqQSP5UwkyCSZuFhfjYeYAWkCtDKbMnEPwz7Fd",
  "key5": "gWp2RaRGnohCxf9T2WtCrCt2Kweg2WjhSBjmyA8Y7133sz6i5hTYhphpjRuMxpKFDcvwdt5M2hRahMks7qLR3SU",
  "key6": "61bjQ5HdSsCaufnAtLnXY9cVmZF4N1qyuvHysbiLinaR6K5soujrKcBrmBPGonh265zqDf3krwu3tLoGH7H6p7b3",
  "key7": "4ZCUeu6o7XUm3bdk2qA2TeuNBSifdS37Lcom9k3t7sKsQac5QdwR15naJkgPPTzcpyvfwUG6uzzA9aXTjhVvKb6a",
  "key8": "2aQS6F3sd8mw1KobP9PpruZxU6CwdWoV1KxoFu9t7Q6FwsVtbxhSL5e3qdyJMMGaSNxwUVfAaSAwzx67axUQTiRV",
  "key9": "GRuRzr7oRba6z9VY7R5iCR9FizBMgttWAQ2eHC5S8etQwBofUZF3FytELQMvAaGA8pcxgKY9kAPhugv76GWja8T",
  "key10": "Grqa6tXcqwEbVMZBhe53vKcjh2LNfBsCbe1UzsuH8zGoC5fqghqkq1YU4VoQ7d3B2iafQxeh6BAr3kBbvkdrn4K",
  "key11": "3TaM9fQsD6zPnM6rMVHYBnXLtLMGRRQxPJYNZFyxKFTdAy1dEbFnqyTWqSpKCZuxpxiRm4DvA3yiHSkWprkph7Zv",
  "key12": "2XfKtwDCTJn9GedopWEMZBXHtFaM57KEgPfjZGxAfPfwJdKAevQ9jHcYq8gsui3PhZNX1NTU83MpELsjAhV9pqf3",
  "key13": "3JZjTJZZZvHEvN46VQEr8geoSbXz6uYQkY5EGugzHYJv5zkpTuUamAx2DeTgozbQPcjGbC4hUZHtmAuMAP6UeZ9h",
  "key14": "2hXbaJfW4x91iypvYceQ3nDzHnqpnbcMWNhQfkNdWnkpUg7EBQRtQoLNXauzgfsBF6g6hG3pCHayHSaMAy8QKrT6",
  "key15": "4p5j8cKDhCak1aa2PNJdmdpo5ToY9bRFw1o2ntqXsF6t9LnsXEnNhMHUzEq8gCFemzPDu9ZcNX1jFzVncAcezzjF",
  "key16": "4bjaw1yzYJG9X1WiUFAGxJ5jHN56GbLySnwDWenorweCJS8bvJRjnVWKJUEbCC7Nx78FMdDBfmfNEeJ4BBwqkaxE",
  "key17": "3GkopMAzKmhUKHWQHtAeBr7mjcdbbwgbZXdapMMPRFQfHAYEQsVxzLEBMN8wipytJEYaKH33NfKGHbkCrM9jsLyy",
  "key18": "3SVRjMipDxJRRYET7QDuzccyadALFLnkyumB4r6Cb8AwNpNgwX78CmobZdN6mj7eQGjYCUsFNggRaog1bgTv9Lzz",
  "key19": "3wLNSMZkSRbjKkhFZaU9L1gzHTfbAtXQdeH8HDrBKLsxJVKEVMxNmMqhxqe2cR4vUGjuRS4ZH7ioFWoS3sGH92ZM",
  "key20": "3CTWygurhd4ag7gDnHh2VqTJ47sF4gVGwhxYrDgjEjPAk8cAVKQkfd3Y7ctJTwJznfzTY9WYLTJsXgdzizyc9Tsp",
  "key21": "geEo67Aa5DKk4Mn37WRroQMnh9QGs2zEX8oCrxGKHQ4P2LCAtyk88ZJnVpLMApHQcTyD8vpexQXWZo5aH56HF3h",
  "key22": "3W6hmYqXodXtxCHF6gDF52bEY6J6esBHzPNLZWCPf9sWJHdfaZ2hsW5rTnPQPCaPjKARqukAtH1juL32iGyvtowr",
  "key23": "4QHcpWtDrBe4WYtRJgTEqZ47VLmK73CDdtjmt4W9vZmYwqFZDa92gcDdTStnnye8X2G3VgEEkr3n43QDvmgRDyTU",
  "key24": "QT26YS1qwbK2pbHLofBoSbpzShhGHXnsuyC8kDvHbgGjFFpWTx1mSkWnJRtofHbx3zuBRfstDZhaUSSWrCCHSZc",
  "key25": "2sxjmDpzDVDPRsr7zxiE6SwbjB3DGy3LS5fHhgmUGQtgAqYg9Xe78k3HoNJDdxLhaEVPTcCzparuPx7MKf4xzFiE",
  "key26": "2wEw6Jy3ZBjuVKbkxgh4ixa1aTL17fNiVoyeXE7tysDRJdmEctirX2BCuastLpbNs8NCPTrDuyMVToxMbNBJEjf8",
  "key27": "2mAiagAeuiaH6rGqSrw7cizqmgbAdmGhVNMfRUDrBRc2bW5LFQVZe4pwZRbzv6CNk9HVpfDawuDEQ3tNH5qEt2ca",
  "key28": "2QmkxcHiz8JTnsJLN5uSEHrmqbSfe4kjGqFSpzEK8PJvUpcqUpDi6sVRixp75G1kPYKTXsxWFm34ro8TsWTRGGcR",
  "key29": "5synbYdFuobdu8PEqVmSQt8L2TjaJQwkczK1CGkEtLm7jhksWxLCNigTnZpR3QABbPtvMHdeDdSZ52DVoxobatNx",
  "key30": "2VNYyJKZQ7hAwMGxfPviShUyZ1UkEB6heW2h86vkRJN5gL3Xrog7dULCAiV8LMhTCpEnyHDvgFPfEJama7eYX2HW",
  "key31": "5DX8ZEm2ZHVWX8SLPnzsyUuFzcFp5h7PjwQmXkEjJ16P2yqzPotPAas9j5Wn2oSfVb6iRNUvtksFHx8i7pYo1fv7",
  "key32": "2w8h4yDptjnmmtmrSDewozY5X6Y4aJH6YYHcdAdBqwW6JFaMUBygSyuL7cojhZQamZVED21QtvW719auqb4AuoeM",
  "key33": "2mRr7uSusWQhJhTPvKQGq99zgvRPwR1gWGzAZDH5qSKFY2eapuM3GP1duNuTikFtzJ5wr9c18J71mNmW3K4uz58q"
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
