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
    "3DVyWH9rMwygkYgxNAoYDfG1nyHQqnijoeLFmyLfHM6An4ti97VPc8vkT9UC85ijb6mfHDmxZF9Qfd9n9u2Fttr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dKXvADWeRz2bsjrzZ9na91Y3h2a5jZPN7xavKXzkSUmtjVmXbB2dDMsardnxW41VZqf8YBQZbVZe7HdsrXZjJFY",
  "key1": "2aNYLTePCp5bphMoqhkZU3i3vDGGcRua4TeFBXzgJxEZTGMmC1vkqKrqj6sCMBHbse1CJGzgB3k5dNDbYkY8ErqQ",
  "key2": "3TbnEzu4CMCcK3We7wgZGKfTkCPa1AUtNsxSTXK7QyXZpFkiHL6RtwbWPXtfbtrxAcQHVaH2akBHP7YuUyfGSumF",
  "key3": "5aHyp6VwTFZ55usT5Le1C7uiAxhWAwJhzJv77iatBnGidXBDoQvTaAVXFNS49iGCtSfsgTa7yWG7sZgHvbJvtg62",
  "key4": "Mz4bdDkU7tdhxShcy44Tg8KSyUR6ZEcMbPYwBQuMCAsKYVdQPxSsqdacKL2bisXzdqpWaubjEToXqdHWeevWVRd",
  "key5": "3xA5XWqVTti4JeSPojjW4Jm2exXDhG4CPcnAuVx1Q1kqkU8xQ5dSsszg77mhgFnK1tP8gbmnxJKw2J8ZPXgJDEmJ",
  "key6": "3ihT4LJhDSzCwnaof43RAvhmUTEstyvjsExhPgMJ2xjmGuPJh8pjXxtULXEvm94eWVVS6wUNb6pFYiBBDQhWfYD9",
  "key7": "QerJgCHEey5os8Gh8swo34dJDQLaAQoPmzJCxpQJaLu1tcgJWZdcE8BiY85iBkuAuFYcdFnCkBdYkzAKkmh3san",
  "key8": "ngwHEBiFLocD5GmBzvE5pYbMCeSaqBhGEjbnW5UHX61ZeNL56u7WVZw1PYbmU6MEt1ZhhmJRzHb6KtY2yyQfr5a",
  "key9": "3rFXUbnadacYuEaEmzG5rM542bVoBsAD1zTeWW3EzXjdsTXnSF87SQ14utEir3z5JRFcDkL2iwViBP4575scptzP",
  "key10": "4Lv7ze1KR8jxTHWACWYytNJNJWi7qCYBFgursmTLvb8DgJ3Zs8jZ7jE6JjA8mqCvxYqfBCYXYeohXfvdHyauFfJt",
  "key11": "ug6r3gNuAshevGfqFbgnX8wDT99oks9nuJWwB37XadbjkhptUiXs5bh14tunYGPTrBZ6ZvDKjjVKZe2xb3VKWH8",
  "key12": "5aUJMH2nkNR6JYYtuLNaoQL3EDrctzc2qHvuiMjfKQcsoLMnLFU867juDtQgmKr625exeFb1f1hjNg66iBbAJepc",
  "key13": "5tRVkMGcezhUfMqb4E76avGyVeagBJFZUBW9e78Xu7pBDBDtnKNy6Girfchb8sufPtxeMkQV9xU5XqPDDR7v9Wt4",
  "key14": "wWZzF3RxucRFoQzGgwLoUyMLriPMwPGn5oXWdPiL381Em3wRreZkxL111R7L4KYmMe3KT2Xkxn84p1Dydkz14ez",
  "key15": "4Us62y7f2ArGjZrNTPYb4w9yij83bSLjGiFgfDg9dDixF3FBp4H88WwTmGnJ1wpYYUdozMRaFqPYAATbSRw6ECsr",
  "key16": "51qsE6Wq8fBFcLHsMoJbYQ2Tjfkug14tM8RqPeSyF7Wzot6j41frqs5ZdxpCsccre43HvA8E5hJEaRLatWtrM9ec",
  "key17": "TNSkMHaVWKPNh3A6xjEtB5m7ExAb3wywJf6zHSMF2hQcFWQQc8mCy67an4hBDqLcdgvBNtZHyzGneHRiHwUbvd2",
  "key18": "26qzCyvpj7avjJYNcY8inZXaXwr3LiCoJqXywATX5LxfQerqpMdB3YWZXzqhNe3DQZiXU6DNC9p4dPWYfR5czDhw",
  "key19": "611ngVrPLcomgfjfxRqkZRFyVvJ6uLHvuBgnYzjSKY5SJiNP8MtHaQ7dQD94U4Bn1QChAgUcgm8Hbws7THXpi31S",
  "key20": "5gzjM4wvX9QGGR6xbyimFf4NyBqwVqmfYNy8Zs7qzk2rt365nKHwt38L7ZZRJH7gxsiuAWxxVxH3k5JfoQSajsFb",
  "key21": "2PKE7m4GDi6fwsgPAD3gnZUAkSzLaTWr3N5iDU3Y99nhqjXxAkoJmLZ4wVTVgJRh565b2bMT7EGDa7586BYQUPmQ",
  "key22": "2LJD9Q2UFRnFmWFtgj8z3AHSPPpeJsekk8akpJhaT8WSXf8cyaNx5yxk8CVoK5q9wFBpknobPTdmcM1NKrXBmK6D",
  "key23": "2DNkFk6JfzfMwwG64EppcqYVtk6v2nj4tbz733yn35GdLCfvdwTkjThzEVc96edH2RjydX2FREnaBHTfd9H2dBRr",
  "key24": "44QnvGy25XRKXFu4wyhckasvn1E2aN5WmfLJtNGkUrMkMZVebfz34EFwVMPcxxr4ESL1gQhSgvVe71jMM3S3qgoL"
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
