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
    "FD4vGAui2rqbSg2wG1cnTWh9qLrqyASGQKVLHpPf1hthTy1vHdVpN5Cn81tfy9VL3VhAPnicrNCQtwNbkvXTnQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKD5dWuE4v2gpjyvFHeeQMxVLTqBAZ5tmD83GY9dj5wJCPF9ar99p3qxgxWq5FBTqbw5rtJyGQRXuGWU3HC51UW",
  "key1": "3Czey6wgomjqJ4ZAWQgQboq5CKVSnKYoAtjqfrLT79hB1ecF6ZaJms94aWYMYfQzDg3TAuuLJ245PnTLXhvdSPJx",
  "key2": "3xTZLHkqTrn5seMYjcBcdcMDcA6ha4gVKBBFGuudnPHfhLsEZAqhnPz8n9N68q5ANdWpe6w9qjgKrsFAM2AJcuRm",
  "key3": "5mNRgn2ceitcFGSUGtnMbAdk7WedSEYwkeh78o2nANecm7wSjn8mrKggnxhCyhfmdnZMDaUFF1V2qYtaJpd5YHaY",
  "key4": "Qj4LbaGPAV5ZsmwK7QfHnqyyPJmekCXYmRkn6DXF58FW7FnGVZpcNNCwPdUoP7vmjKV3w1SXw2SsAJ7UwJvxBdy",
  "key5": "4BrBJEnNfSpka3dUP3Go3dgMPwr6JtBapp6V6PLtY7b4syFpoDqZj9ZJNgfmW6vQwKNXenphxMoVLBvCdaP4eQge",
  "key6": "2b1SFiRK3cZDZKdXobcfZZNixRiezJ2NFEenSaQPDyLYj1K1uTJYedT48FNzzu4LHViRSBVDfSSW6EnusareKtu",
  "key7": "mhsgoScExEaHBd3XtkkeVdhkxfmoNUGoBzZNyErKA66roD6PAftXrxcuyKuVG2XLAVwNAeMa2JA7BinQBpXejFU",
  "key8": "38znhpims72xDqYMz3pj2QCsTcNa4vBQokfyusoAAeWzisBmSxgDZQ6hgFzpZ25MbPEDbcmnuFCTPMmW3hyZSgEo",
  "key9": "KmPuxdtSvQtorMHw1HRZFESR2HuZ8QcGxq9YV11YGZsNBYQFpDvZrYhegKcfYM7HUyqhvaz3F5KYYnjacks95Yh",
  "key10": "2xUP2izJuozYJM2s519kei8cPSgWVyak7Z2g64kCrcxrastoobSiHcbyfVDBcU4HzZ849iMQWysymjAmA7ZC1cMj",
  "key11": "4pC4LAZm9Qa3ywsELKFSk5AgCekZeU5tt77mKs2WpjgtDsrSXSCxxZacqfPN7hAxG5tEKqZirVaa9TLGCQxVxkrD",
  "key12": "2fSuov9MJvpVcTrEuc3t7YeKHLFXii3C55i2y8Tm2xyFtezkuvHh3JLMrmmRMrh5kbd3c3bYWu5QURxhYQ7PoEYn",
  "key13": "4ppYL4MZEDm6X1JKfAoc1ahr1uCBZtqEVFuukcdmrM8ghW9DTFmpWuYfFAmg1dbjq4Mqf6yfiSwpr5TypBGs6gcw",
  "key14": "5VdqmFZZbLTVTJhJyYwgY3n2qNdnnKBi9L2jzny12tCj2o5jDeSi9LQVKeCgV7JLRNBREbNLSXqQa8YEakNn4CsK",
  "key15": "23Njmh2zDXeZKYJDmBEyAGfLMrPm9VWM4iotKKnn5vjC66Twy4SGb2nuDyXAb67WJjUbRYP3mCnHhdxLpSxr5XpG",
  "key16": "29NjvvTQdLaLc3hJwdJ3yE9SZBjpgzAhsTCqeeUaJDUoZ9EsgpAX4JFQMXytdxcmTHi448wMYHYW1y5bfrPiGcxC",
  "key17": "4QjhNmd7sXU4nVx8diw34eUL6VbSrwWWvMqEukB1RoChV41gPGSTRkf9Aqp5V8PmndNnZB9huKXXn4B4D18QGABW",
  "key18": "2XndyjjLc9Gb2Gqw4nYeQwJPwdGGmn9WmJNiprs7hHoow3KsELykhiV39FrDJihXXg8mAx4y8FS1koiJSvL5H7CW",
  "key19": "32pe4cmWyTUjiEhgtTf1VqHqC6Sb8keB3VwhQ7YerJfMRurUcUJxHMLGGAm99Z6VdEZXQgmT1cBSqNW3YZtuSiHP",
  "key20": "5xb3pLsyRYNLRRenKFzcftUMfmjawu4vFa8mcb1F6yF3NNmighkjTa2hYhi7zjkK6XDN8CFwKb8CFrW2F8PRRa2Y",
  "key21": "59KMCFk2pLT94LsFY7tpEPoefCabzuiiPr2C6fxEvEch1E8bii97BqnzQsYfZUWditMD4vqf88NTyxVY9HPhtX99",
  "key22": "iK9FYzqQWZx4aRAXWHxSQF4tBiUwotAP3v1dCfQbXnDtvN9udHyQ4Cfqyda8fyiESQXX1NGdCT348Bwfw3Xn4AM",
  "key23": "2iqLBcy4dkYhsz9YxXPRYhQmnFe3LwT9EBnWAMBkb6PTpRhKJy1LMBU81YMnzb4C5riG5QHu9H1VHiBbVSYZQRbj",
  "key24": "4zuL49MyaSxtwd9DvBXdC75Zfdg2CKEoZwupYsRz2C2cs7hh4FR8kRg1nLYR4Fg2g7QG5vEN8Ssrb6imqH2uAGpS",
  "key25": "5jWocJiajsnfnTdjWrseWPcbcKTnRuNRX7goQUtgZnFZMynEa9r54W3GPiNcqRT8jgw7msAz3CGmRTMP4aj9fTow",
  "key26": "3CxHEfBsDnuwWA4uicgFjUk5CHbtd4f6eRnPKoUWr5ymYvLB2MZZqo4UrcgSAXe5NMkcZcubfSdNGqcy78kjZ3Kf",
  "key27": "3PvtxW9qmij7AeBzXFmnjcK1Z2HdDkogSbSZGDJnvKHygTFwjchfoagje9PK5EzYC9PbitjHryaLxFgXwtT3fqbi",
  "key28": "3YMesVsSK2BbFPQt3Y1DvH2XygRmXSdeiBoKh9CwS65cocrp2QTmM1hiuagZuNcAqsyTK6D4tqV2A9tuA6zmMQDH",
  "key29": "2Y6D2wZr3DMPEs67ZsRsGVzmz2TziWFpjR9cQv499TuRfyBHCznw5u8BqLpkQYJ9v9W7Di6GZhn9YZsYznwFcLra",
  "key30": "2bDUZpUt2pfy3eJTpJsHaA3rYv3JBpNMBZJn6ngqT4ZNg1hoVfSbe64PYUvJjzmdjRhuZqSwiVZPg1QAnVmjADpD",
  "key31": "63qqSqVtPmRtub6stV5CRy3XeTsghg2zRevd2W6jDc2tzUdn1yPEcGeKBctSFLFkMPrpM4dCY3EX1ayoBPpc6enS",
  "key32": "5E8WFJDJTT6oHRyX2WM8yXdoVcmbgoGcwyiZtZ7hSrZ9jm3kwsWaZGWQqrf9VtmkJByZgzBusfsjvrUXi6s6vjD4",
  "key33": "2vcnqxcKAkeAfiS99soYQjQwFnDWzhYQqgA4BSuZA6GHuavfQ4mGDdaAv5fznPHfVeKtsH7xFu2DgBAGr4CxtqX1",
  "key34": "24VuaL5ZejG8gf1GxKBjvYkiVhVKJfRVaYNonXVFbh9e5Ht7obrD1ooMQWzrZYxzfnTqCgchWNgDdkWKB5kpq1wz"
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
