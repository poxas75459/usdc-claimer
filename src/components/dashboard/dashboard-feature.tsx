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
    "eMv3QJehzCKHRCKcDD8RF1yJtFeb46Ai86BeKjCuAb3vt74eqFfggP1YrswTFrquUSd2EeHjCx5E4DL9u4ZYfuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zpgypHEErSEZGjxMkGiPQU9LM6zkmQYs29B3PjYQrcaKBaEmJavLd8mBHEtL8Gyth1usGEhNczg2F1HuP1e4tc1",
  "key1": "2zt96bAjNESMrvvViiYrYEJ4gASqGYeQanJ4E21L9WwUzmozUcTH9WiTkWG1C5DyAZyMHxYtECahEn8vKjVb56ub",
  "key2": "3E76JfX92uYLBA9snwQ54UjtG2aPHNunrgDHwkzekCyyJPtTQVcK5ra4aXAvJgwtXbEwZBsP4oGXtH3Xyb5DMAAK",
  "key3": "5q5m8XQSRTJsipc5rsZmCZE8Yejqf7cVfaQuZQ3VFDGb7qntU4gN2hMyCQGxvrXuWRpgPkkAAGx585BSHMQNHFpx",
  "key4": "5MAair9qFKkcoK7V36hrGxc7zNeomyNsUwTZyVnPDVQSstA8nkbRxafGiYtEUfXiNXALF8Pmsqavx4Gnrq9eCqxt",
  "key5": "48Xgg6P8wFEYc6HDbAysnbHNu1Wz9bYMUfAxWvjJGM8pARzTvZBNSQH1cnBGT3F67HVt9YzheCCeupnt4aPNZfY7",
  "key6": "3Vr8ytqmDgfikdG268CkXCEhXgiYijyc6nX7LhMfCivaoNCoAbjTWgbGAQn3rRNZtiBRiZbyrSEV3B7eiF1VJnna",
  "key7": "4vpEQYfmq4Aed5GwpHMeHEX8Eh9kSHjVFbGhLPMbZ1GLp6YBTra15aa7hHwJZehQuHC8PE2q54ToVNHQFaS5LpwQ",
  "key8": "57aoCKinWqNHU9kzYZFwyMgsjAnSZjoVBkWHsJyKR5TCJGsijXMnPunfz2DFPeRi5C9xtcfYawVFn9SFUyBV2gjP",
  "key9": "VpfrzCBVQxeowcd9aKdBqzE59dqkALVSrJfnAgWRJ4mtJiYKrMeijxGLEqpy5EgYztE1NEdH1YooreF6DTHRtDU",
  "key10": "5N5wjEze29fjjTBWFh38soN8FquhDCsXpUNMxnDiaarnBsuZcaWLjMfiqaDCnXCXPe1p6oMXHkW8qC9xPHTgpqsB",
  "key11": "2TL4x7eCF85hjU4Se2f5EgHdcSRtCzqQ2RnrkCKW9fSS8tf9hYNx83o9Wjn2C6AaLLaAgUhg8a2ug24vaaxHVvQo",
  "key12": "2HHKiPaW8pG6Gh1G9BvGJVecPJzFDtgMuZxQ5cjrx9kxYhCmKBgUe1KEwTvVLnkWGJc6GGmJ8iAnBmy22Rf5yu1g",
  "key13": "2Mc9wwSufTGAXkGCCEMHmK6NYADFcEcqF77giA676PvLXhMQj18GvopubkwmzWEZRhkxumP9DoySLBxqnH3njssd",
  "key14": "NCgdG1CsuLQfB5oCMPR5bA2WktH3NKPThruCuLUWKTGaLxRwmtp7x9Rt52SZxdJahTH4ZaK45zFM9swS46HSgkP",
  "key15": "3AUqNv5KgEfKKWhygJVrpETF4uhRnCRUejvdYxooU3QWzEHQTVCAniqhZVJawz3ZVKeZc4Bj5vkTQa6XciqHD75E",
  "key16": "J9hyYvxUKtJhPzMLdJbMCr6jFoBwZXrMzhuDFmGy1TdqUePTfnM2jvA3yyUAEHDxZfDRaHNpM5HbNTW3NsyChtx",
  "key17": "4HT3rb8LLTWQMkSUqA9uPNcwSsAkiKk1VKRMt3boM5GwLVLCocPcbRSXSP4A8bNBG5Ke89kgChUW8FxZ4HdQRQKx",
  "key18": "dsQ2jvsc7RRrgGnF4uwot6wAa31GgSk1zCsL72JEsVr5TyGqdCYvxiNTPts3EBopctJGSqazWwHHZ1gjEyXVV93",
  "key19": "29GTYdhRgjavK3jaXnHyinKa3xfgZXovpAUHcy9SvruPsusSLmYSdg3ykrCtnidWQ6gZdTFB87iNsvwj9BNrNym8",
  "key20": "2g9ib1mfgq7AiLeQW1RCkFK1vGi1k5RSbe7WNe3NTunMam4nScxkr6akVzMoLh9WtVYi9wBbo1W72f4kzm4yp3dp",
  "key21": "2R5ZpjpBM5jMxbtV9HfaW4JHj3rWAzz6FYuJqVxJV3dd84KkFMVm5bgp8S3B8rj6xec18mwQFALs8z4BUFX41WgW",
  "key22": "5Pb9uq762dRZyzHrtGf7oQNGuPYDZiYUvPqJt3915DLJ5fr8h2r3NHZaByKNXMHFqnA91sugX5zdUjRrZPoZfkBw",
  "key23": "uFExtjahUu5TCm4ncTNbmrTKnBRWCzkuUkMtuedaQEy5D3JebdKNLS36UqkMZQnmPnJpGtBAAo6cVRoJHZ3nWw6",
  "key24": "2Y8RgueoLGQAaKw76kVFMs99VP2K1fEQKpqbt8jbXTtx9s7jd3d2ks1oQgXc6HdeJY8PbyzorU2oEsT5Pq7BhTFn",
  "key25": "46gAV26Y2MJMmtmbYrZhZofsSGpdhmUZRATVpQAz73UQMHjr6kWntoWT4ph8h1WpqFKPuanQj8qabsL1qP47nwBh",
  "key26": "5Zr92mHSiZVAb8rvzu72LYkeiwh1UmUm28z3qtLeG3Z4VWcj8Z2kmxgUrFjWgJAoe75kFR5qsehPFJYUiqzk65Du",
  "key27": "22oJj28oVF9dMbThNJihMjpYBMwXVbDtYFBhFVcgubZc7uQR8J7pNMu8uiWvRYuuxg8feVeAyVxZcM8KuSQ1aHWZ",
  "key28": "4YdzTKN2tTpvKoxKjjX6M5sejuNwCZAcutVpSSjTBgSjuT3ZSXE4CrAuyhzZTDJ7sS4pYjrp6ZUb5U7xPReiAzm7",
  "key29": "3kQjj6e7whighei89VcRwuiNJXMBGr4cYnFqoxk5t1wkEPwVrdSzT3LGQeFEWY1tyAXGmA9yWRjKEtLXRtueKnaL",
  "key30": "5imRqoR89caBUYcXtXETgSbDJM2CbbNYv9p2h37q4RfXoTUi98DF7GYxhywcgCTXeQZF8isLR2jhsu1MwD2RxUmD",
  "key31": "2bwmXCR3zhMBeRHLUPAPKfjPzfAqCmv63f7J7R2uZehCJLukddebNNd2RcrCfqMfj4ShXLwwprJ2DJ9fSfyBxBHN",
  "key32": "21b8A9NZyLc7Rvic5hkd8yTsKdn8iZzDPLKAKFQf6NfD5wQoeNTPRKzvNe1r5t3Mqg4qXD8G12sfqHa89D8oesNL",
  "key33": "3x8BfNNRc7DetL1LdKVunMNPnbrZ7oy8has6wnYD45ULWhYnnzDbYwT4rLj5rcTWD3LY5qjKmBTCpr69iKZTbPaa",
  "key34": "4FKgwSR5Umx45KJBDAAPjCiLVc8obaCTgWENA43KrQQ6UpR5MXRw1EY7TbLbigv9nmGgfdJsv3rxMoZ3qUcfSdVK",
  "key35": "3Jt3R6EooCB1Yf5hRrqqfabPNVV8TDXncNNuxtDo8oVvz55B1YiSeksWqfgqJgoQEQsTBfMoTVXTZZiLumA5QhAz",
  "key36": "3Ao6EpRe3fxbiTfyecEwzBcaKAMnvz3xSp7JTUqZ2vQsWWaHjg6tmjRLzSAdtuCVB8LTmrtZVc3XzwBjrZKNKPZX",
  "key37": "3d3SvQJe6dxd1Hw3NsTGLHc2xdHY5f47fgKhhQpDP4whQ32VFBder8Lunx5CzZ7ZakJFMHLa1SEqutBzgxBDjvZ1",
  "key38": "4zQaoe33YyRcoPRXMfZNdw27PwFKDSSLhf7TB2aCqr4XpHgnyPun4m3LZiimCQPJEYCH92BtXmpwjUujFMxS8uCD",
  "key39": "3KtssFkM9DhExeXR3RUBf625iMdvEamXpVkoiQBt2r4CfMxFVMtbvFA1Zfut7gpJaEqbErppHCmSYrPCsWhSemy6",
  "key40": "2wgpDUVdBbyFYWQdbwBaXHnNh4q8KKtToPvXMgQ8tP7xmNMkoFhneqhik3Se2thCeUZVSUGxfFjtaoRC6mWuYzQq"
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
