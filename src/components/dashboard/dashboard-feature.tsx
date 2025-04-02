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
    "3dtXw3JpKXhUK5B5GCr3p6WKdhNBiw58Nayh5QX8NUBNC2rTMbYjxWKDfLSux6rXSyMx1SAFCW5ziktoSKdnpBoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heDLDRe88WGUQdnd4xAo7dbR9mBma32XF9JGriyQ7XSG6ex8itQ4JQYKTsFXZy7BCnidhEbmNHHi5axczHcP56x",
  "key1": "5aeKTajxXjsaLkTUXDhDsXvvVkCfLpGoUyhZtnFEhKBXeVw1rDWJD2XMgu358xFopCdYZGx9ihUpUuARU57YnEn5",
  "key2": "3UzLRkVNDQp8DBymKZLMFvtNJa81Uc5k4E2XbRDZTzT85wLBwn161wUmwWS4jxEweKBmKjedsqYFFGF8ks8bCq9",
  "key3": "24SYNnDoLXVMqUnW2yHFKr8u79CBPEYyzLmUA34ZMeqdYRe5rTcENC2LGXswipeNbQMpwJXsWFhDbrH8whVQYyh2",
  "key4": "3Khsj2R5sP79neXc8RnHAdHNViHzQLiGEPqokTyDAfqXTvqwu6KkF9VwU53784szgWHhoQaZDp9JwatmFezq37VQ",
  "key5": "3Rtf88Cyrrv1PFsnt4oPSCHRn2CgUZew8dQrWiQ5BZPc6exs9ihxkd7TGKanbxyGJzCm9Mp1VWLCZxH9CamVtPcG",
  "key6": "3ttEaWMAwsiLfUAYHgyekUDQsjW9XTEPb8C4pR3o3b7JYcjZBcB84M3EmSKECT2RFj1w6E4yGC5mAkWkvrxThtWF",
  "key7": "jqM1T9wZBghFhM6y4gY25Y3ShomJg41rbggz9JA5bYFYmNvzfsQ5gJ7cBNFmf4nkA9ej4cB8ai18eSLq7ydxij3",
  "key8": "2X6E2ARrBLeEW2sqGgoYNKNEQFFcH7cga1aLM9ybZJdXiwJuwc75pgz6Awvrma2VcPYHnDrTzWob7Ky5y5NBnNdt",
  "key9": "4FNP2c1d4BwihwScat3LHLCxCpd7ZYu2YcgmGeGWQE6nxGZG3hyTZ4ztCGtETCQZyoTvXSPEoLH8WaWTNG4RNkKu",
  "key10": "D8enjTvze7pdf89qCwiNYxamerUJK7h3VSnMpbVDUfdBRiAV5jt6KQS4WPnz4QcMr9zrdt9YVfiu41dCrjhnxKK",
  "key11": "2Sr84AsJg6v24HBRVAzyLNN2fr8JFYt5vBVHFAHxJzhuTFFgK2HfvTjuoDj3qkQeremGuRacVHT4jwtLRYAkgnn6",
  "key12": "2fUxuDvX6Cf4ZADGdHLnFkJf3X3JDZqaFfjR3LMogjDuigHPktAAGy8AorbZ3mFmN7yh3WU2JbvHQei48mq6Hbar",
  "key13": "5knePMgyTBvzdK5b7YGGfEMKhWDGzKK4NuxqZpKmS6vki4K3K4t3wz4QKhH78qexFXoAEcuTGHo3ikMmZGQTELSP",
  "key14": "5kvDZhuirwWvHPbxE7mZ6xVMGTep1SqG4q9e6xnNthBu8SLnwSM7n1wZdcB8MH7mGpCbcEXmZKmYY4Q75v5yDzwi",
  "key15": "2PRnk6vRzkS43JfzBkWXWLgtbe6a1Kyi6cV4h4vqhYodYFA2EztdBaaGbk9KYpPfCzwhHh5z5qE4mX3S4LQMBsRo",
  "key16": "2j8LwQCX9a36yzx39Aj7iPXUWf8puwEEo39vTDF2K4uPCjJrU2X5XZTVJJNTNDXzAh3AQz1kzLtFEpmRkYk6ELwt",
  "key17": "3CkMVJML4ky7YVmmZD4F4ykWqRdwSnMkxDCVJqdA522S6UwvYqBcVsiigRGqFdj61fLSegLNJFVJtmRasuPq825B",
  "key18": "4Vyj8SUmdTGBKJvDKjEXnta6JhWrL4pJCQdseeie824wGrLTwQV5C5kcAiXHM6seqn3VtGo2PMpoBnydMXX3cmhk",
  "key19": "2tsPYQnG11ch23xcgxLVUtpT7ziMANkW6MUA4yL6SHomtdekVwSq2J3kAJpraH1C83qjXjS8VzMde8qV3YHoS7gM",
  "key20": "5gvD3fBUJmLshAgPDMEwjnLa3UfSK2PtTSSFnzq7pFUKPPmQS63CL4PhiP2gsZvbZ6C5q4fLm5HXsEXxBxUQXxEY",
  "key21": "2QT7JSALqgHawMLuNjPkmP4HUKoEV5zYrzGgAsRkxFqYMHPXguVu4jMJYbsuvUeDpAyXsuWA5pY4jdMFzw1Zs38u",
  "key22": "3z3eHjHT5Cb92zNo2baDwyxi6xoJdJqKdEJmdUPHCe4kLWQVQEZWaTdVoKH5MUMLfiovGc5qqnCjrHWWHbJSiSQg",
  "key23": "5ER6yhvmwAzSjj1WGc6jUDnZxmLjvC5Dp4ZXsxmtHAAd7LVFFtZwryV3beNJtyvYvwYRQd3e8B92gKoHYCjEHjFi",
  "key24": "4bbo4pBRS8GdxJ7V6AigB5Lt5sBYTPFPdR5qaJnVXwYYXSWg5LH48GyybrbPqPEPDHRRa61SWLxEJL96TwApb9oG",
  "key25": "5qLSR5ZkT83NHh4ctaFXDunEtSwCboYSGH5WtsE1hGh2CuMvKYupqERxWVjhQzu74sWPXKCjTAexz5QoYXoPSDA1"
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
