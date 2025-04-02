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
    "44eKA3wQPk7PnwP9tcXNqeoYoE3HSvBbmcfrRVGiwREG1VRWxZq75DcdW39PwnZZoGqCd4c56KjrbswgaDBxXSiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quw4CNNsyigJdoLVpxa2n1BY3PyerWj2tPbZracUFQmCAaiAiEWbTZJZpyHH8EgQt7AbCKt49uYN3MYew6YwWsD",
  "key1": "3ey1RRvD3zWEek5VaAwJkctYKDz5SiwdaF7sVQRdXC53Cwnxb3HRsyaUmBdhHbzftpZpM2GLjgUHLcaCsDqkBsnc",
  "key2": "4hx2XVo1JoFehQkojfsHfscjQ6E7BSTaGeKFaVhe64mcxHXoQARfB28Y5BXqYnzkbWBwMNfHoeJRTWQmx9nYYrTm",
  "key3": "24PhC4Mz8paZFMrQPPoZH43wit5SjXi3AMLbBzfrLSBBg5qnbXYsLqDBJVZKqEoKndecCzKxFAiicmGqcui1skZT",
  "key4": "3DKogGr3F9UFuZ8z7YUJ2JQ3UxCkbPB53ivQZUxaBM2JiA2bM2d7gu3ent9N13q4cxPtQekPtKmnPXSpAZe5StAT",
  "key5": "gPxbYtL89Qm3mT57fZcWm1c8q1ZA75YDivh3Eo1LmXvxzu3mzAvCDdJWToJKuwfmR4JxK8vF2PPoj2b7NRgWZKP",
  "key6": "3MftaRk4CLf7xSv1c3sP1U86Kf7y5JzmVXm7TqZ15d5kGddMEjoR7t57Ks4eykPEu2gNUwCizhra3UyWncvSvXZk",
  "key7": "4eeooKyEw5Yxm97DUVai3f69Aybn1QobpCdStsdgCcP37GKjo9Y5RqZJw4sEakCv9xeMaSXcXfDNoRPY9q6kj3kY",
  "key8": "5BjyKpFACrrXJJr277xSJPy5et5ZrnzMkjGqfjrVYi258sdD2DWFaVXzEGB9MbxcLDfVuJw5wPayBHG61q1nV8sy",
  "key9": "3oZpYV2PSU3FCYrko9G8dTrukP5KcH2pkF62C17vEQRGg8DFsNXtD6NZ2tgKj8M2mLbU3wZ6M2P9Ro251eUeL6bR",
  "key10": "3VHQxfvFR8qdaeUmUvdn9w3tcWreA7kJsY4m7SoJeSaHmbupMFFuvvBxF5cqNnBhAFKdMUkXfpPE7GLTWt2xYh1u",
  "key11": "4PrtqArTTw5DtdeodxT1qLrsxSrnD99irqY8YUcFyeAQ7DAvQTrsF1QLZ596KJYxThMTgmwfEihgwmsmYMhLfAiw",
  "key12": "5dXEcr8JEBfaHrVPmseDcsdvrWWAAWWenHXBjmKEqJDxUPdZ24AaUha2F69SQXaLLtP1fBe96z8ermbBGHaDsBEL",
  "key13": "jKigrTMMuTTM8E3qraqFMLFdQ3BbxMcWHuTYp33iGxXq1uut6ANikrqpXdxgtdgFvjN4zB5utW1QwigUCTpofQK",
  "key14": "45yK8pi5He9YbpD6JQSQVkQ9nkVfoKUaNVYtTxYiEBGjzVCet58scKzq26cTHMvQrp7rd5c9PTWFcizP3MjEpWDE",
  "key15": "2Sb2WLFtv26BtJgP4jrkmjp3oHBfzKV8bDgApMrhuAiasXWVJZm6sFNYgQ3qMjePxfpDJKjptAout3F9gaaaVU29",
  "key16": "2xda98LNEZiNVcKdcFa43trx7eZGJKkgGGmSE98sTJEn9HyptrAGoBBQMWm6K73pVChzWZ9XmtHSsJyvV3TkHy3F",
  "key17": "4PFeKHhX3eWzZTE8uXpJafBdac51yDPq4eJwiHmc1YY713Jr4ahVU4ogZyQXLybQ5yHWVtHSNEKQWqswfASQWptQ",
  "key18": "eoGaCvsNtKGjL2xLsWRJvYmLfJKS4zh6uoNxSKgJeq1CrCLK1hFRNujZHN5ChUEe48GE5h16y9b7tYv8hGnd1qi",
  "key19": "4zZGBeosuawDc8xEinsu5AKZ9JoZQXsqvgyaHVM3tJGKpqpRNP5TKJAxdPkYvwrtqugYJFbk26mULbcPWeq4a56b",
  "key20": "QWEGR3jsXefELyF1p7erm7ci7fArypwabhHLcsaCVccz3UYE4o59zcbAmgJCbnUvUZDfzVxQjG6hBzH5YMUJMWU",
  "key21": "2GEG7PFXc7CnLSGiuXhMaYeUT4JQrZUM3Vgcf4JraT9huuMFfPubf6TTwJ1JC3f7Aa9TztoeU4MpcrXwcWPs33W4",
  "key22": "35SgcPo1uRNuKiCnzRB55KPzCqQKmKQCS93AAVPx1xosV2zL67EGJBViFQHjPXoZFCXML3eY4wCiEq9QHPhcqBqU",
  "key23": "4S7zFh5voU6STDJKiEy9x84JzUNLQLZpux5UJfoKWYoLWCZYYZAx3Brdug6t2E7RudXaVFXEC895aqDrQcFcNrRX",
  "key24": "4DohPcdfSVffqVVpidZgm6SZUrjgJCDjGtGnUsuejCVabFEvDXhHCC8Zg8BEy72AYooK1TpBGtj4C6vMH2MbzPkq",
  "key25": "4JFzKdecfRGauQPKkWTQCRntKKctmRE5Zjho31RFCub1ya4N1YU9n4MFYzLwa1qDxFUccSsppgJijBCu1zRZnunq",
  "key26": "4SbFiFJYaWqe3vgMkLmARuqsCgrwMxiue3bnfRDJB8imhiTJhu7V327njKguC63EyqMoNSFwXS5iFXhECqYuT88X",
  "key27": "5EZHgrp5Z5raUqo4GbCh8p1M3ZUHoXneiRjfssnLEsf3Kt6rbDHZaxUs2HunxvLDeojyRxAdp3keoJrqq8ASEjZg",
  "key28": "54ejRXG8p12FR3QkjoFrRRcDsxjZXhbuNXbQungakgYXRQZLTtLQSTKxmJBCv562xPh6K3mUWUMdKR48fy2GSSNq",
  "key29": "4BrUmN6bYmeUaijEau48B6dE2n2nYV2G5bcP5VUdBbTKKRXGF31Doi994gkM49XTLKbuADdGDdvzyk5R1guXt4pB",
  "key30": "5fKJS2ZJVGErVtCRtZGQsjiiVoHWedAAAVPmjgCVqoNDExWVNsrR8SCAn1QRmUm3JfhCqx9KF2ptXnwDS6qmR6Fi",
  "key31": "3bh8u7HkirKxV8mZ4Hy28tS4ZNo46aR13H4dBfTaGyEtuMHFtJkTXxVLxgHpnHDHjeAjVXp4YfxdwHXQBjfWS7b2",
  "key32": "3XZCcuPwrVADgzCaHBg5vbaamfPoRAA8C1qw8bqDAEMUb1ZpgSbhJBttfs4yLQdTNxBd1zvukSMjaV88eJiM5DVb",
  "key33": "3b49vFiGxUJ6qXm27kNpdcBp9FZCr2RxspZLHAE79PTmtaHZNvfWJAhkS68i4WikQ9ZN2qaXo3a6zpQ3URpT77Xi",
  "key34": "5syLyM47oCnaTf6CqqpXn12x3gxupdyFvLWNk2R3TTx7gSKThhjM69kKNRzfUmRU9iDt7pQvZY3ELVqiL99o1Q7N",
  "key35": "yJ8npGfJL34GGXZvtfjkCyw3zUau4P7dzPc9DyXeq7WmM8Tjm5Triz9zSTsEUQbCgqxqRmjGiWRYC5r3KB6Zqhb",
  "key36": "2x3Bq3HcGnPKv4JdRQptrL4NCoth4GF5rswYbpZKtDgyRPBLTJZV6nUw9ZYrXmnk1ajJhY3gp5MmggrkcdthyMLz",
  "key37": "2XLSoK3fYutKztibvP7HGynbV1ufxUzQgcagCDEwcdbAFaE4Fo93WapAJtM3D77rvGnDtGsuy8FmFgRQD9UbGa4q",
  "key38": "3WMHUyodmbB6yQGhVFwtbmHv9h8pa1u9GzXJfGwpuypAfsww1Mpnfeo9EBVC4kLg57o6j35N16db2rKpMFnfHuQ",
  "key39": "3xdosz1fHqRwGMsqvysrzPqugm3cdUKXejYEJnW4WYWTywuyN1rnLi3633Vrqus6bAdzPTbaw55oXHXMsYDoNBnf",
  "key40": "5mxZjan2GvhvmVHNtPE86pXgmNRXUD4UQHiRkRh5hkeZx7QXYLMGsg3yx3U9Mj9PcVzV1zjeG6kHjXTxHuDDL7cN",
  "key41": "2mxLZHZggeeJrbfP2qh9pytj5RBHjHjXDkaNoJ7uas3vW8vVA8NtyFqnaS6UvWLP6Bqy5mndWYvGTrBWtGwtHZ2a",
  "key42": "2CykbQ1FepQKWb4geKaPv96SXwBRXdRnhfFnNgUs4MWG5KRMoH2sYFYJNP8AmpF5iPNXKdRoz2pYMJT9MatPP9pG",
  "key43": "657Rvag6CCYZejE4NLnhdwEFB9fPtZGsD7JnzfPjXZWskohNLAdpJy9aLnLGyub9WZBpMTT2K34pJAJRsRJBgBnW",
  "key44": "63WrDMo5yCotWf6evKEPv4Gh7goK7kTE4CLGwmHMkxNwCgPQA8pYY6jD4mbJcwkudFmp9B6akeB7f6bKGwBzGZ1d",
  "key45": "3kqDdbptwpKqpTDnae5reVhngvnmiZUJ9V97d5qo838WafvZUp7k2eowe6gHQBpQkdzPxtznDU7285SqygMKvt1Q"
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
