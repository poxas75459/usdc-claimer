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
    "3fNm5yonMie9JhE2g4ZMvsazSvoKR6ouDQFzi7fQXGFWvTu2ExXZeCVx3HHmmuNaKRGQMc2cnHYu6brMYbqqWhht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJfFKqn2kjSuoyhuTFs8jNtSd1HXXu4opJyTANgmh38L2DrVbeUkwL7ZQz7bnBeM7aUgDbaTtYDAmFnphqbPsbX",
  "key1": "C71sPBYNJxDKajJbfSu3QW1kVaDo5tu5HicoqQNPVvT32pDFAWmSjS14UYevmgqR7NhJuCwSyVdNuKXLKa4iZsa",
  "key2": "3gSjALGvzQzTkVVESG2kZMkwDHUxACZNQu8zTbw4dQe3qb4chXJ7dFJ2RGoGVm5B67wKoYGc88qfG33LatU3YmN",
  "key3": "42ePvVdqp6jy4BDFEqzZtNVc2nCS65Z5SBd23ppifU8mbdAdJ6i7QzAQkEyF2dJY1PHnF66RwX6bonDdXABtQaFr",
  "key4": "3sFdKHnUZ3hKf3LRTssZrM8bfJYDWwSaUgmHQosZzFW8j4A6NN3N6HoPq1J7oJP58nCLKGmQ5rqxRFGRa2Rq9bGQ",
  "key5": "5cN4TgED4Ae7WbsRyUCSrNF94uVCAV2eizDhjuwncCyGNJPeAwAvUwCd4HoZavFZrcWBXXQ9YnFUMYghk54d5tRy",
  "key6": "4tkoyGC3sCVmj5N1fvVC1THcApHVPhbCfbsDssymu5ffYmVwvHofcjyG6yW7HzBfj87Xrcq7gF82MT6HE5Dg6nEA",
  "key7": "4YaDBv9eDE1DaQFmh4nPZxvQ1jWFLoD7hhpCEXLTro7w9Qxp1A7ZWjL73mA11VAwp5zfKBfz48YND8japTbGr7WR",
  "key8": "46G4pELBaHaEC2c9Y7jWRG2ckv9yJ1wAeiuxuT668ykWX5U8cqQ4TbLS9HmxzFAoJM8JHNzeQ4P1GFF7MGWen8mn",
  "key9": "4PZU55LgjTYa8QAAx1mqDYzH9p4yoQ1HCD6nyhhpEyCCvsxkLGTYGrZPymXmugBLQttryu5j1rzHDy2JQ4L5YQhG",
  "key10": "3BRG3dnnWehbawpJRrYQibiW2XtJWPt6WceEAYFvr5dbj2XqPejLRUyvCWqBMYXTsVeMZtGJnSmjLqyiTgJCEY47",
  "key11": "4Kpnq5a818bfgYC1NmSVBFR5QGCBqbkX1VmGRmDNCP1yqM6vF4VZqDT8XjUJuBAMWRy8FiwQXJSDdCw823wdkhfX",
  "key12": "5ZWRAA6JaXgYoKnHdeNzxb4dqXx9V32D647QRLNRFtfuFhKHLWe5QrTYeHWMgPZLf66E44QfG1LfdSaNdYG17LXn",
  "key13": "62LMnVxQmZH39LgFVEhmRiNmRERtmbZfjpuAwtdPGbdCvifTsE8ofMFeSap3P5wsNDQqpNFpHizk2ning6TfEC2y",
  "key14": "3hYvjXWXbJmhWMzZCEi3WYDKx7934tYZdi4mvKQM8ZW9DkNCrHJrBYBoe3yfX9EybgKREhpsvYPE5XnVdMuR9vLd",
  "key15": "2ATHuGjNipJU2U6KN9bZNiR5bzQZdz1sn5HqqME5WSq2i6uD13etDnbnaFCoxJ7BCWG61obkP2amDektMRykyUiW",
  "key16": "3g4Zw7Tk2FPFkEGiAx4ixfwCnWUu7deMYJL4LrWEuZdz6iHNNYybNbcDaVQDWjii3UXwMrMmddEDbg84jFAX8yQY",
  "key17": "4b2GG8oS7t9NeY3Ywn7rxDHQmQ3J6biEcn2PipfLVgcQKUPnKsNVAcKBY7yw7bQrxjLBfi8tdKYLvW3CDezFKMw4",
  "key18": "49hTzoG9vsC1LhEDM4HbndiBymcEgPr1HhYeimhXgwFmMKk9ZB35WgTCZnoWxzszQX1jwHCJVTQckTxdnHrdZRcb",
  "key19": "SvEJckoLnGmpu94pwLGaVpeiRC1qJZCEVEfgYgrTBVep2YezV8EWAPnM75ssESXXZjR323jU5zWprDuRt4yqW15",
  "key20": "38eYHhVpbVbZ9NG3gyet4mVC69yj3uw1btYdx27DJUMymGAmhHER1w4Y3LYJmX4G9Fc8JDEApFjxzvby1CF4WwBM",
  "key21": "3Ly2VAZggZKHKkAToWoc7v8K6aHntcu3SAAVZZzvwBbTSvUF2HJQhXc2T9Eo3qNq1VQW5KDdEZp9cRTipXhbvfnb",
  "key22": "45Pi8rpndaVtoHsqiHfNQjzKr1swcfaY7cp65Ywyg99zTm5jpyxWNxyCNk7h9kxcoLZcsBz7Ae6apDBsnntTT5Am",
  "key23": "2k8jqon1EH5UHZGTA1LsqGVjozmUxAKQvkMv25CtRMdShC4eqoB4xBitywnAxUSALrZru75MVSVLPoN91jWGyhke",
  "key24": "3HRnZErpxqVepsFiBnjQ7jdaZ1Q6mn4GaKDKCf5gADSg8wvHBV7V4S23hY2cE9qaALk4a9aB5wD4QrZuVtZwEmfN",
  "key25": "3Gw8ALMRU6vac5BDZmYK1iqcvsMMWrjMc1u43nsPQdVKYDafHo36qBhanGCbgZtvg8MDreqaNKH9o15wS2yybNW4",
  "key26": "3gUcxj81WMzCwCseZxJDxeonisNdL4hq8UZESRwjJFpEs5rE7GdPoVzMVgiqWv5TdKR1aoPqhE6dhPqJF66yiDNQ",
  "key27": "2UiRjvBS4i1hfJDQfQpfCUb1xmwgrCX4XepRwUv6W83wFMzTYKE6p4dK2mPH39zF4zFC83WMFiF3dLtoiSH6xzik",
  "key28": "XpgM5SndN61QEVV8Hk1teGJPo5tW3MmyzewT6AATUBYWmwYBHQtkovGuLppF972x92AuEv2tT2h7t4226bqqEbR",
  "key29": "4KRCwxNZoDmmEtwJZAgZKrYjAtntFAB5xFGdccmmePLqyfo3HTmEfdumNthie9uRRt2XZTS2fCcs4eBGGNM1tQ9X",
  "key30": "okf8Bmy5P8UFHGqsbYG2LsPctJyrqup8pNXVqyQwAYmL71QozBbA4HTJMmLxd7ouaF1ynQDfVu8ApsCd4H4xoJg",
  "key31": "67cDafBhYqK3zFBjhRovKzgADfK5iFkLz756MrciMqZMCqQabFnpSz7DsmCjt3T6GknvWw9WYWvGWtoGFVR7oSsB",
  "key32": "53JWnigB6RHZm2dWBeiAB5BQupoEPd3YTbWyfzBmsPYSRB8rYaDBKgXdBnCqjCXrkYmVTMuLL63pBvP1cLDkQ5Rp"
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
