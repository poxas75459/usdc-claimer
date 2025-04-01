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
    "5KAxBkEp9L8tNoUeHL7HS2RKX4YpqMCpz8B4nfBaqGx2oi4vdD7eLLcWm24wv9LgJGXVit4oSEdWFBtUNLAUDEfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZEXNVdv8PidnhQECGxFevZFSneDCMbcGPHcSfPNgeW8sn1osdtZHUKbkf8WJ8CX9FuWMowWxTDLBepKGfWSFrtK",
  "key1": "5Lv7LGmsAZh4zV6yWxUuzTwhmrRS7LVvXX8kE18h35NULTQbz55evWwXRPFENsmfxH5SxAoWeXA3j5P5ur3HjMeV",
  "key2": "sT6ThTV3mvfTSCxVahGu7s13mzGFV2C2o7eB6oUM4rqRtjdJSQkJiHEuzFFBD5q5oYjCkHbrJf7ZcuCVcWdtRpr",
  "key3": "2TpJAykHiM7bk8SAAzuSrMuR9tyfzXxmWyCNePfMUavdESFehMyNeJneGh7HW5wMzcDtjxYsdSMvM2KeJQKBFmUE",
  "key4": "5Hdz1NmVNwjm9J6oQzQSaDeSmCQ8EVrdrCXuNsMv69C5PB5ekb1QmHm8Zr4CQM9sLErCuTULFuaB2EHisygvyWGX",
  "key5": "23Jm35p34ZAe5mKBNsYtyBnF7aNaWsNco4T189nAatzuoCmgfvzmxwujmrqKWKXvFTerBnp3T1Y92nmLKk67Vbxy",
  "key6": "4HR1gQCxCbe9mvWYeyzEoKoNVUpgr9i6gEqs5ce6qo5gkREZHcYT2P3rQZXwSy5oaVzgTQ3GbYKSf9WWue5L91sA",
  "key7": "295Xguthsq6gTW8dcm21WSfYjJxNSGKJyJweJKpJMYQovHHNv4JHHiPasHs81XuQZGKz4VoxmRzBHXYzfCiZgNVD",
  "key8": "4bbDKVyjmRWUm8qm9o7KxsAdYLc2rE7EqmvnKBcbkvzMBbJy7FbMiRA8qdv9V9TYz69aoC5vJ64hK811fnzccMFP",
  "key9": "4qAjaxUe64mEhVg38oWX2uiDkzoGq3RsJWqc2xUGYsvF2YE7dvMFUpn2RYAq3ZJW19qAMRcEV2ZBhMicbjvqMbXw",
  "key10": "3SYGs13NtyanjfYCXemxJnMKFvrrkxFYmZ7mbN5FE6tNDqnJagXsufLZKrrJLKFK6EWPBo6HkHpo94wX7dgsBB3L",
  "key11": "wEa58VMgVV7HkybyPJGuYF7MDP5n42dTGhkveqXsLCF8p19p9626JYeAcGuT16VbnxhyB6xF5gXvtSyRx1VVSpy",
  "key12": "4PWNjWo1k4BX6B3FTFxVkJTqVupbEEjLQ4eCUz4oGUgMaaxmagayFHwHJ1p4MDeKaZBXVt9MRbJP1coWJtEM3ffU",
  "key13": "63GeT5J3uhdo83d9TnUVCw3LP25QQCrGtedsQtDLGvGg38WrYNucHAq9MJKTqMv61z6xpQc5vZyWmGHGcneQX5VK",
  "key14": "AEvaMdZTUQWWB2cuvG6kSu3RuiCbVWwxzs3UTNN3qbYasJ2vTfegZZBf7MwnFkto7D67T2mD1i3iDeL5QLikh1T",
  "key15": "4U1ZCCf1cE2ehbJXFmE2P6uo1hUHsh5CcgRgJ7Y7viArbKJttFDrJrgegfMpd4UnRKLKsV1WG8eMws6LDLoXdo2F",
  "key16": "5LMZehYuKuLKuSzJ5DLyNU4kJGKM7k67bzUoQfDWTBFy2rBNNVMGD3Diji7wWczzW8C5ba4TfbY1uHYAyiVgBatt",
  "key17": "3AQXksc9vWnMry1cLCSE1F8TDNWSse4B2J5aXNcE52aUa7v1VGF78vGxKzU1LakCLpUMXjVwyCpcZTV6UJ5m7d7D",
  "key18": "65F9wjBSBexBwvNaUBErJqdFKmns7HZDMo7DDr6ve8yjEZpkZbS6imBEwheAQKu6wtBaKuMDJq9D5tsFv1ZtSRae",
  "key19": "3ww7XeC9osUiuZeprXsxvZxUbWtWPSy9bn4bQs7iTesaQFo39C4AYck1bkAHb946meyH2MSt4715crMJnbn6U1TL",
  "key20": "5qhMeLie8CeVvdgKsj57tiPiYSKwan3q5sd8K7gKiG5fnHPTEg2CtrpthyATEGcQvQwCBQ49H94FFRvH9gxFoAMs",
  "key21": "hPUkVm3tks1498DcZaAWZUXULMVwQYDDT5gBS36aDeR7D5gDfJ4oPYBGZ6RUTVXSc7dQqunHGkwgjUHG4J5Yo2m",
  "key22": "3AuUaE6CCsQrSnBacNnL66ncCSbkcPthALhLZBy7vCnNYyjYvJk4YyFPYfoX6cEocKPuBsx3DbKPte6WJbekcvQ",
  "key23": "2mKYip9vDyjA4UyUkHSGZnK5ypChrAtWNKd6yDFjA17oPDYkPDGMHzSck9hLNAQ294rEChmwQ61mYBYUMazSJpJH",
  "key24": "jGusC2hJSSaBRDVyvQYmR93BZSrRRBWtSMme4pqjA2CB5cs2kAkf1tc4yhmXV7uyw4QRxNuvr7tDqBXYDygNGrZ",
  "key25": "36LPbeAQHvASW6CZLb3hhYoGHUwqDoF21JoYmi5LmuuoDW4KB6i3L146DcfN545yvuJoyUvkwxm6uP4cG5t5as4e",
  "key26": "3ZMSNrhFpGfkBNSAf5McGrbsMunNf1sZufpZAf4wQVfHopMUSYXN64jnNP3QLzco1hJ3cJNZT6nsWsbr8wXsk1KA",
  "key27": "5AghrhnuHsjXfZm5MrhYB3PkxGE2zKcfzcABqkHg2jariv7o3qG7Vhk1BXqDBVS1td8KhAUFBjFt2mfY6pXYSk2d",
  "key28": "2DW9DmF28bFCrnmR1JsL4w3WWEP1Njkv1guVskzEshMyrpJQt83rLmpJatDNbEznpWDyAPf7WHrFH42ouPFviPCF",
  "key29": "3baDbC3fuYPWs3kJDkmeYkZqFwBoUf78wNvXPywGjBUeZ41Eyhj62e7RTZaHK3wipAQjHkSioCXh6obYche2ZDsZ",
  "key30": "2EA4We2fhXkJj5xB8YofHGw9Yvnw3HfWWePEvsPkA1L8RYvtn25hmFF78EZ4gKso8TSaJzgDQFuXDzuHn8vp5V9N",
  "key31": "5fW9Qqm2fENy8cwKZv8yo5JoCqXZ5qWhvPhnHQUMQMkMbwKJq4E8DabVM9FppC5cPCe9QTJidDha2dWqSVNQ1nnW",
  "key32": "4drkZ2SBbycUsJPR3PzgQ1MpFC56S47FAogC6uxKDdRCdt9BgTuZx7TPNhS7czXg1pBv8e182iYCSuZykDhANRLJ",
  "key33": "3Fw8qg71qWQxg4qYSRyQs7eqwRcKXRJ1BubcbXwd9UHHYwvkJJFy2YiDYxEPZQXbA7dK8LG6yDvLtEXXFpv2CD8n",
  "key34": "26pthK34U9v8KTJ6Sbs2aZYp24wwW9fY4dteMNmv4hkgFw5Pn9RvR2AxSc4cUhcEVwf4hR3VpdAhXiiYmpBKyeUn"
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
