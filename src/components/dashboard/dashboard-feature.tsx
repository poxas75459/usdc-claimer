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
    "5FtuWVMDGtafMZb4kAz2yLYUkdWBScXXvKuEYohjYcf6AS7onmmFqXBd22XWtcA3oLomDugQXMWb6TEHF864EqiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cw2ZsDzR86m2e7dCxXf2C4ZdbwyFhEZmtxUD72ZxoQdycF8SMEt6sPRuCMfpqa6Y8wfhp3pdsCG45bmrHwhGnp",
  "key1": "4EAog71Lc5PTYNd6mz4auBFUsk5Q1abr4QY6uyiu9ALzEteHt1v9xZK7KigAQq6AeK46FbaKc8Sq6BuQQrDxRkcg",
  "key2": "2EAvrpyMQSdPRJ7wmNvAifaDipESEVreFoEdjxWmzZqVaJdDQVNVFDcys8yUxTXwrUzj5DnPePVPvZ9kuT4yjkUW",
  "key3": "J2aooKgzBgAwLfgugiyKmQhJM5hXjLWrM3n49bCi4G8cDa9KRWtfdGpZ7GpCTMLEf8DDhRDebpYfWMP5DjrpYf5",
  "key4": "EMHW5iJVsJF7JqxckRcZr29qJQ4EKCQf5tqEaopmympVBQL42xZfgLkk36F1aT3DjbN3Y5JTzd3eEUeM3py1dqH",
  "key5": "n73C1q5MNZBLM1jkE1vMwUPL5WXmBPfG8dQbvPdpYarCUWUEwQJGyDkbhJ7ZKCqgxRMxMpvN84T5PBM4gUL4S55",
  "key6": "2DGQ3hPckbKNwzScbRivjAmHqiUfyACjrCEcAt9gC5mdVNpQEtWggXY3UeQ4eF5Y7LyCK861236KbUeprYUesXrX",
  "key7": "2mKb6XJLLRkjMzTPNM3pUEhLBpbKB2kMXrLgk3nVbqFvsBZxh3s9hMiHpWTzeFdbbXfqQTEpajvX5Z814zJN1ER9",
  "key8": "4JgfLSynK7GaqKeXTMfabCK79B9AuD3KfEUiXGTFFXHWLpEEMqyr5nFuE74796z5JWjMBkuwJ2tPEeqph9uW1LQy",
  "key9": "LCFmj4NMEGyRSWy18v2m5TBVorLe87Ze9z4bjBLESjhzAau44qkYNA5gXWCa84o4Ke1KEXHUi7tCzUo42FVvHHN",
  "key10": "5vPMnTRkv97sHz6G2aA4esoyAZ5dH3P6vnYFCnAHaHbDovwfcRLZQLKexreEgZCAFrgvzs9uh8JBh8FeAstYmsHn",
  "key11": "jAF19bqDfPMRzHeLmRqY7Aq9AUuKT1eJJqTXwQDkfwQkQYPxL8GZ1EVDQEPU9Cif5zuRhGW2shmgU884fumXKxV",
  "key12": "48PrV8b1MGfZzJQpj5LLrgZ26zsUGRP4BeFax9uVsMxkCHk7kriPqb1g1mqrtpNZfxDfEnMDNMcoRqpHGwTPRLTv",
  "key13": "2r39iA3SeU9SEwN2GVag75Ca8e3CUJaTD8wKQAFwiXv91E1fdLoNx4EvNqZxWPsu35Hws7ZFqPVg6gxCvUFkPYYw",
  "key14": "29y1hMV8xnaBCUAVuJRB6eSAe56yCHvHvke5DrXDZuLN33cyMh5j37rkT7pwP3jBp2B3ABy792dhAg68suGC557i",
  "key15": "5874NMKb72KZGh4xX33u1nF3EQeGLV8rp9JQpujjQrwxwzLXJCvmrkNKb3eU4eVRNixoJnVpzUk6vNasJ2RpJYti",
  "key16": "4UzUHUafFAkzCMcbLXnqbmdEcbpkb5VMQkhAS5qJCDsknDdhnUxfpNNnMd2VSfp1aiGwX4xoMHHYUt4p48BqMyLi",
  "key17": "43sMjDYZkAR32etAZDdAWXekMXN7mkvir7hMqAPB2S7J4rT9mWu1Riysr2GP3D3jiBjJygs4ZaRothy5rQqvBQwF",
  "key18": "47aih5v6Wh6Bo2G3GEwTaAkcL9Xo9QR2XoetxKmvKTeemBU4PdnTLkvfEDazpLsSMju37X7oZn9x8QKaLZgHuerS",
  "key19": "4DLgTrEaw5yoLi4MfnUcBCt6opXppKy1QLtbNBYxbV9xGkvxtAe8cERkRUNNMMF3SLziKgfcddgVFT5MzCbTQw6p",
  "key20": "qVW9PS55u4Xa1VfVFWnzVevVv4K9KPzRH7zTTo8tKpphmYfGSpWnKRCRZwaeJqXFNe3NMJAT6sV1PxnbJ5e59Ee",
  "key21": "5VJLktpBZEmirFjooGLoESJx8WSc3163bpMEQn4kryR5mw9kcKCWLEGX4JZb7DHYD7cKrSu1AYpjVMMUvv3WAaKj",
  "key22": "JsrTsBqGhP3YkBYyo97Akd7hUKBNL1mc9HuXtFA9RWJLQd9MoQ533gS2G5Dyjr1c9iTKQneHesZ84o2AHXz7A3H",
  "key23": "4w8f15ggQaiG2FsrKT6LfFbEFPq1KiSuuxBbrmHA3Mx2HkgnwXxgd5ZpDc3Vj82VHjamyZGiXEMF9VZAA9K75ctf",
  "key24": "24dq4UpV14XQJ2cQ7Gxrok3xq1eGyHnPoKM8VvLwQYu7QqGVvyVgsUKd4vMcVViEPny1cDToqqxmg45QzCU1rgTR",
  "key25": "YiHzCV3k6u7zvbWyXUCz6a9AWZCkB2NxqXcZAXM66jYqjSWCuHKoGBEM7TD1AQh9ovRhPmhiy15SAUnQbpr87vE",
  "key26": "3bTwbjbuU5diumVuk4WqKgQEN6Wv1ExLS2pN5nfBcz23iaX8HSAXr3rCmnRsmSh5x71kq3BTZzbBMBEzYRNEZbpx",
  "key27": "3ZvhPtPfGD5ZR4tMRr2qAoK7rAiSRNvV9XHCEBtmEKj3YWgV6Begr2tyEXYZxpoC3GLMRAd9DghRU6NLj2tJvD3y",
  "key28": "5ccT47cjdo39F1KEA5Dnnjr34FYxD2ubw1SjfhmAKxfDkrZcDWcUxKmimjqPr52esLM5rfR4P25mFVFnnFEtuquu",
  "key29": "3BJLRMhmoMRqRo4PyNgGNoQXsnVuiozNgii85sb2971HmkqmhMCftoJ824rd5A2DwE8T5MgYjYipVk8TEdB8VDmR",
  "key30": "2vaaPvxMZMAiG7hiogRN5qCngkBizdEVE3WnSXLjfHgjUCJidq2YJXpyiBxW6Hsr8J7ybo2TdEFo3E89inAXnr1Z",
  "key31": "4awDb5ocU4xEZYoJLbVML7cLAaFn5bgz7wh6aML5ALTRAntXYAKMpo7q6tjAiv6o8fnSiDdM16UFR5rHJPVQo6r6"
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
