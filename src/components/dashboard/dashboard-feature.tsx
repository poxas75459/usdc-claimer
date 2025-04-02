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
    "4QEYThFaqLWjC3YGsDNwQTrxvCT686exyRLURSBV8efXdNjhaLzmjGK4YHGgrr1YJoNEmw5tQdeVRX2XfVss2VdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52hutZNeiWR9Af41sQqFXxaQcH1QhKhTY8wcMdCSnMUNGDXSTnSLaA1xjDaVL73SZ9DLvcmREMVuW6MWoNmAmMjM",
  "key1": "3c9MKXW4Jm8vKa8gam7bfKGokvTQRwTvZJsfSSKLiwzsRYB5t9tzFxMwFfTQfDXVFwibKivRgTtXB14bGzgky8pw",
  "key2": "QMEPsZCgSwVZJWLDcgtTJF7sGeRFGLBDZ8WEtZA9yecWc7rQbEEpncGYWTnV7ZHFTBoXwFSUgR7CVhJKruGgY6t",
  "key3": "3Pg6i3YXA71pKEjwryfYdgorWAwWpR66v5xg9curNCTWRCH1mHRU8AVztggzp82vwhPQtyJC3FZGrG7JTQ85cs8E",
  "key4": "3TLGXtbQUN372BjftoAfghHHTvV39T1TCM2mx6DRupToYiQeYgxyjwhRUwpAyJDC2ZfXG5jFCBhg1LiJGeMuiPpB",
  "key5": "58wcrpVuWTf2EVsMyZbrLgaD9WfMc3PikFM8a4Fi4u8rmoMJrW7CffcMu66c7yauktzz3AfGj2Nu6xoVuXkqhgz3",
  "key6": "5uZMe6ZnRnLzxvLjTSp9pqidnRVpzTTC8UwioXzUhrdBntF4MxADC4ZE3aa9m7hXdRjvJBTvFyihegiATRpj8h5y",
  "key7": "2EZvrgJg2VFWkzXSAYPrjogXFLTxuZBh7gkSrH7wHMXjPDj3zF1A2UUYpJ1DWCF45EYFXc8dXzmXjS5VZcvaNGQm",
  "key8": "2Yb5k7Q4fcYHm5Jhd9nbCG4SedWJnnBk6f9p7RTcwK1syarjK6tHYqGRUYKAcYZjXCihq5WzmeKt44ArNwDFWFRL",
  "key9": "52kmg4cLmTvqtd5gi5mGnjG384y4KeCz4QHAubVXgfmjHPaGwSoAb38v5P1z9z6fqZWLN8FBavEkPpdyAjuji7jE",
  "key10": "5U8NSDGmuSrc2mpsjjqavSJAPg7nbPDYozVBcJXWJeT7wbD3GABPifeoiPqJggg9FqCQmLq9LnpvU9hxY2bPZRyt",
  "key11": "4BWpeoS8MjuYwMcb5oB9cXJHJS2RPRuXaHgrRq2RYoDJC8Yp5B9hRJFBGCR88pwmjp7LsHcTSW81R3WNf5NtdZD9",
  "key12": "k6oUhYAMFBaLMEj6MzAQ4XS6qt6FXyUXhjqVmCHtGqtHtHvieYh9Eu3NbCStddZY7fVZniauAhkf8ZEDaXsCA3d",
  "key13": "UQHRkGUF9pKDpUaE2YUTBCcsnz6bN9ouLRFpJQ4fuU3MfLbp1kCEXwCsEPJkGhuQKDABqsNt2RoSALu9MDKv2cK",
  "key14": "2pTmoXWBnvTnb3RVhkjbSWwsUakhrJGBvZVH4vtLg3EBnWoeAEMNknd3WYpqPat4ThCE1JMg4R6j8vVbyvCAccJw",
  "key15": "4b5pnYgBpktVFKxBSr88GHN12pUW5BHFbiCb8pu7nXSE8C7ZGU8zJ7pdfLzFznBhnCbeucexZS4rArrnkJQwu8KS",
  "key16": "35oTTPvsC9nmKGF39AeNF69pMr6NpoJsqVgXAFDkKYRFiLzgg2w5YfvLSddkrQSi2BwZMnWyVakg25kewGi4Cmbs",
  "key17": "4Skf1ovDWJPtYzVMkt6JqFXuncANbpsZaeWeM7KuxCyrHBLeCgRH9kj624VeTXJCbYehnPk8MNUWKu9c51pCCL3A",
  "key18": "3XJSTjr3ainRPU7dF2KrtnZ43XtQeatedBP8zZuSgnrbqMwn7NqvMAssXtpaFkFmFPnjbzHJzpnYukftGMqvFVf5",
  "key19": "44xUG6iHwVHxATq9PTtf3aEkLL1wohrgyizHxuS1t1tWYbrEwsZ9WZZFonkV8fzqJHqeMHcwTp2Np7G7ihqZVats",
  "key20": "5QhkENURUce6VPBrn9y9bbJVafzjiTDDY2RD6Q3G6sJu1AXoecTkwiLkePRBUMR1yCPYHMcLb34VfyzJ1Jtx936s",
  "key21": "PG3GjxbMovBqM8i2TGEcJCTytxn8ZqPxJL5tJf2WP85pLTQXU84WmaCxoEb483VgakbSjN9zeiWAvjELr8vSLXP",
  "key22": "2AxafYYtenjJU8QieqTCbsnRH6bBCf3FmFmtciqrtnNUVFMvg9JZtSLjdTNXvsda9N9GkdAMoBhVHwm7ZNHGMXFa",
  "key23": "NEGF9nBpdJ2Gi3h3BuGkq8y6Vjj7EFtHvY4tyCw5oi2tehg6uq3r6CYJ4KBLWevdq7v8MgXQ2rgqM1QqRJQW2y8",
  "key24": "syB2T134M5d7qFVEa2L48K5W6vJRv43jw67fyoHiVGfwV5cH4DxpQ1THr4UkQae8PkkSJNeLgWHEGpBjv84nMDk",
  "key25": "5Mkmr8YHxCBohsCKtD5i6ATFTNmwz9F3z996XJrboh1vPr8oNc2c8RyxtPVbgDZoxWhuipgpWtd56LpxvX8CWr12",
  "key26": "5cJtVueS2H6tJya51znWjM1pijwBD9VcMh4HV8o69n7qGkehUACsNbW3o99J1BMfENyRFoi8v1EtXsvPNTgyGoKB",
  "key27": "2krWeY6XCf3dx7hi1Q2gSAQADhY6LtCdyfmqByckB4sMaAfrz5t1CQgtYP8rYHMRN3BQw9BqKYLuY9tVz6kQj17e",
  "key28": "23jYrMQmZNesNvt9ELaVKbioZqU3LVsGoVtNTEXqBDjHp466jf77Gci3UKLDLSkziCLxyKQ6rt1tWbScMPjaPuet",
  "key29": "4w3dj3R7nvS1yEeVJhck5gz5FSmxjrwipFNUw7MZ82YJWVViQUPhpdF3t8cNXErA4PyyzCbBXjYBg2MhHAjzr48r",
  "key30": "2GnU6egwL9yTD1DJppcBYNumox7SKoZ5PcaTdEwjaq9557nxfKV3mPL4TCz6fAAtwPqUG45U5RXvdBT2NXe4MWov",
  "key31": "buyF1PgfJe97mj54bLzoahKLRQ5n6JNZZ1NAkFPuizMFrTvshLDp94Crg1dPLbnDF43SQeicVMoWseTS8tY1KHP",
  "key32": "5Ng6Jh7Eetq9Xn7pzopbFtvPaW5uNNKwFaw7CctPLSfqB2MFEkC71CSkHXVxyVKsctEzZXkk5fJjkR6SG3wqwPYt",
  "key33": "34LqLPHvj5gPDa7pzR51X2egCM4CbGc6o22cLJBn2tMWwztpJVCPmvnuEhPQxEuCooQjq5KG8e1cJz419zar7oPM",
  "key34": "3kSur6rEjZuDLFKtxM8nSaaeo9RTrtHftUeRf2JRu9FiEkGUBLBTNZp3EpGWZgTVdSTJHe8sVymhUCqp4fQMRsHP",
  "key35": "gvo6ZhiqbufBNSkGoWMCabGrzJxmpd2He5HymtbSRV6FDiyBZcgd18kQyGzJseBbaBF5jdB8DMdT5mYZdAoUu13",
  "key36": "n4FUEsXHkMgxo9yRnQ9kPi38pbJ6Vv6TzuBRr3jFUHGQD9nsHdUVm3ozB5KYVjCobP9zUCU1C9Ff5xf2NQyfgut",
  "key37": "3onMWuA5UbMXKW4Fuy126rW9TvuoSQX1oMQbrSmp9EQgw3SBvUKuFubzWC6mCe6wZuNzxcj4ncNAb2HWJ9ev74ES",
  "key38": "WHcxK6NswfpCHhRikqM9wcWcTVcL5CPTY48G9GnJ9iuNnBUerDLZnWwbPWUoEPiUDhU4KuCbMzvVJRFqfAuFRtk"
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
