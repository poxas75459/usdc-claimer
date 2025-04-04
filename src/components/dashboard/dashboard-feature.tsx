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
    "2nHj3Ac7HUe3dViE5R2KQLUXT4BXk8hVWJN2GXNhpi9vsEv56JqKhejU2g8DEorsHzyTuBKRKVK3kVjUATmTTC2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hF8mtqjNaXSA4hiLxv2iPkZNa6BHgqJyAustMbXx9g3ukuJ6p8mtnSyC4TKYKR4b82TFAmUcMUuFJa1yq8U33m",
  "key1": "2ammwMJuayWVb7hhnKyVP8MAD1gqhg4GSTdYYRRGrLUUGQWKZ7WN9EDjcP9uve53AdmJdPNaAadVN49CCupUMwTz",
  "key2": "2fmhgXdC12J2Lpmu5W7tb64W3gQaAERGfmhQuWFf9nD8CiURkwRw8b6poYvTsMXpT4GQGV7E3uwqNETbVCqrc4jA",
  "key3": "5kQoXFaipkeGUYriBsLFhRWQ9NXpADA9m7JzYsmei6EktsWcUmSZSXsFZMMAamGGSkU4G8zpS6Q4sBciJFKSJG3K",
  "key4": "TtsZUekf9PAukyCbchkmT6BhXupDq7aFcicFaEqjH2AmAnKikqh8d6eNcFZ3Fw6hBKgxaLZMSHSxKSbmr5Qik5S",
  "key5": "2cuGvTdQ3sftgnEPvTMwHPws5kxx8DuHjWtYnZAXBLQPwakutpWnxMjcX5hRgjdN96JJpHp47a8tpd2849kT1j4A",
  "key6": "AmRaCngZATa6My9gVWC1fGMBGZ7LQZ18mgKeKMmEAAg7RhhtzBruyZo36onFU44R7LvGcfbMAFuWC1YNunz18X9",
  "key7": "2arfwwq6uwKBVNkgQuypFyh9wLcsR3K1bPSPYzpXwr689jW8UjSnWvWehnEGFqS2eYY3innZoBhc1FEfPwQrdZhK",
  "key8": "4NEiAP27P28eCMBYezpEgJJUdoSmQmNVWPoJj4PmkehFWLV3CG9K75W1c6T4eDmEHuPgjQbbW5PRy4Pdgtybt8cU",
  "key9": "5yigQpCSumg615iLxnjRjZWcpKriFbZDWTWzKLrQQrUUKqWcJxJEBo5QLVndkBKbC1RMhbDrUzoCzSN15JVWszXt",
  "key10": "4mQ62LrXTJstdKWHr5FwsE5SLzErjpKaC9M9CsYPEW1HfBs2BDEWSAUmv8a53ADWy5wK8jVnmEDV6bepkcMZVA6Z",
  "key11": "5JQgJyqGA9VsJksUwv1zoxMzLVQscDeY2sF36YUfCAqCBtZvcHcCqhycLZAQtdjCHSXHCgqADximtdXvV2qhcZD9",
  "key12": "vJLEFJVJS1ocuQjQWQkmcY2KNofTrjEbPPRJ3QBCTphghboChDukjQR7pi6gy54YbJckLyfu1JsNvzvp3H9Ycb5",
  "key13": "3ayYZwMTmmwGCey8TNDyzwv5KAM2fogp5YeyVEKgk9Ln96eZSisKu2WvKCxMs8iPoTnC39MUUZBvLzPscH3V4Pqk",
  "key14": "bfPC3yLZk1rpUknPYKaeX9DSoKGtdxZRN8Fu96XMvDce7ZuicAtwdez2ybL4PHsMLHQ7ZzHU3Ajt7fitq1ygyw5",
  "key15": "4gxzjhnLkjDQ5nsfQYMHFoWbgsegQmKC2n77iXQuxbypgXBguEeX8WXHeLdSFMLSj9nHdp3ryfy3v3bC3yXAjXeb",
  "key16": "2cmimnn9YKb3qQc6ugv7Tdq9ScWn78gtRbdqVT3CeoJpFp55kfaWQ5uPeZAiLW88ZGYQzj3oKKSs5FPhJssxCvuA",
  "key17": "2MAteKDnB4M6fFuybFwkb5uhwePhYe7r13UFYcicEAoDXxuAix6ij3FqE8vem53BrQiQSyRzVdvbjrYtnhEZZDeS",
  "key18": "5Dx3LYN5E3t6pGiBfT62BmA36DUezDp6EqQNmUf4HQPQjbrX4MLUDswVxMgEZKSPpLct2oyCdYPGKfNchjmVwBh4",
  "key19": "4NxrKQDEWXHBNoMrwV3vjngiuAX6X93y4eLcJgqeRMUU9cUEpj98ov4rnNR5Q8f7Z7fcvDscANAeRQ3FTLnD2PHw",
  "key20": "2jJFJXhvjt34EyhfhKtoLFAKHbQNUjhLUahwTmF11vonPQBRo6LsaRR3m7Z3S4AcqDvXFynV75zLoPBvFsFMVTVv",
  "key21": "wgN4GD193ppRMVoP2LCYBS5E7X3qrkBxSroKozC5rQ2NsQ89Jv4xKEM5eB5QnWEiF2dKSfXewFAjjcKsf32jZHx",
  "key22": "6QVBb9iDW8EZ4hPCswsEMp3GyFvtxZz2nMCDCY6FfBmkMwA6DBn5aVd5X4cL1EuW21gDMeBYSp3WVMfHndeVdPE",
  "key23": "4HD2gAr7epQmRnxdDNcr5B7wLrS8J7aLfBRTcaWbCx3GWPRJqof56WL915wv1PvfG2FWWwu1WZ2nufNaEjcLwuX",
  "key24": "31Cd96cLmXwvKEJENnGGTzuFQoB3LYbXxVLYEX4i3zzWkbM9YVtV3Lg9C6vYgDZJPg22txbrF4MohP34FJvZSxTB",
  "key25": "2X47TKasc5adQMVTP7brug4xkJyorLzekJwuqshyoyns2ZGA73pu245BrQfpyznDGveLrMp4gfPnn44ChXLYoXFp",
  "key26": "5qDf65Q9rpAFWCWvsGYXkafpvJGhye6id5LcZKciYRWBgYCek5mpKYT9tPeSQda3tnLcLUyi82obEbEHw1UvmZUs",
  "key27": "5cdvHov75w4RysGJebj2a2cVmnT4BNeQctUjBP6T6G1y7XdVU5AfjCpQGhDMmk8WH68Uoim7jCLCdpUnFjGRgRUJ",
  "key28": "5gqBViSFbuV2nxPinbHmJH83o5gSXADdMxVNUkRn391P5KkRkUDiDUD428c2mTACLaTNpeCPPW2EY8FgLCXWbBpv",
  "key29": "5X39zu31825WTm3UJM11TrPKAqUnu6BVW4WTBBZ41PS5Ec9yCAC2b2ygcsf9pLWPX29M7EjXvGVZobDDNVNMzZiT",
  "key30": "tA7twZmJiBaWF2Y28Jdie2KnGw7mS82GWrCyv4Q8suYVnVm5MCQjPpjmPUf8ke6EhXUNB4vwgeqdG4r52pVdCDd",
  "key31": "4tNxj953e37c9yMzU48PtDgKgW8VPZ3JGzujYxjvGamaEa6DJ2tVKVDSUo4djZFZcMrqe5fRydHuCoVVce9imcoQ",
  "key32": "4uTgA7vQCWzqL4Fcs7D2yeAjhduRJE6t7PsdC8ynMGLYrixNJEoUZEzYcJegiNM7iX3FqvZdkFMdEytdmqp98FeK",
  "key33": "4vphb8Dd9sFkyrfQxkQqSWWXEf8UdCP192up49ELhmJi1RxXj5APUBZYSLptsgkfXKoU65XyTgodnQMqzt4yPMmv",
  "key34": "52EP6bJpnw8DcZCvgiJDqiRvgXsMYS3EwysVeABzAUxcrRTxFjQErJzE89LvZbNukxFT7PvxMgme1XpX3seUA9QS"
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
