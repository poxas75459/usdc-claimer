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
    "5wB2zmVK7Vj4fVoRUpppUkozQ9LKFbT9ZcrhpbZf8dCsTgPyNpRCfTig5Eew4KVaKsZoBq62RttKJWBD6oLGJAYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36JMYFcrdJsXjVxyzZCzgb6HhGF6LVjF7k1c1nnZ6aqgZUe1YpfhugXtVUDu6FbegggLagDk5FFDPzkpYzHjjfgP",
  "key1": "5srxHxj8pbMVGXPK44M33nDm9H5m9NTEQ5EiT4w4pZqjpm4bgGWwFwDM35gw4C1FGYMBjkUvjN5RBd6QUQAbtZTU",
  "key2": "3jrtRYKCyxYq7ZsUu1pLWvfYyjLNbe8dLKBYUK9LReNpSB5QwhYJ4Ttf6W3GDThS81WKLPhGFP5nDh7N7uJBEGWy",
  "key3": "UvNR7SAgbxjp3cpRMjkmtXG33S27jPnZTd6BHAwtixpzUy14RvVJLeGdDu9bsT3icistpXHCvpnDdoy2SNqX6tG",
  "key4": "5EcJ354kFc22H6uMHdZSiBDmzSdpH6d8McvY4kwZyWrgGs3TuABFyC6ZDnYr8Qa4xvxh2WdE5HDSc3uEXGrwP1pE",
  "key5": "4SZ6Msj7F4Hgbnnqf8SLTBe2rHwKrR9xH9zJueY6eKf7a7cnRgBwismAWDX4QJabAGVyErdQdzfoXxUzRHMQnS63",
  "key6": "5g4AdB79bCpNpT9pNc1BryrJsb9tk5CuiWfzvvsQV7uxDLfQgcc1B9P5Ndfiqk7f14YTqu1bEFVHqYPTzRiTHVS5",
  "key7": "3QDNMQX1QoLBhEyszH5s6kUZoMLH8F7Uj4sj8UtFccx3nfxPnbfVMynnebv4uQ4Dvc1M115mvQSUAJk6Gi1Rvbus",
  "key8": "2AkHZUNPT8EhoQ6RgTngRS3jF2Pt7GAGUHYfie7cSuPL2gV63XMGiV2aknbvGtGtaUxxmQA7y16rU7bSmx5auUq",
  "key9": "bPani9ZcmmU7yDKqdHnSkfkUEsuuCgECyfsttjmTAMBpVuBhNPZ1jq8g4kpcJaQiijAsHWt2Fb7gqLcdhKCDwvn",
  "key10": "1t2BM9CsJCzyvrZ2ZyMp1WQCPJMPqpbzoiCMrwqTiYwobczYAwZVxiqc1ZUFeXaJWbnFVyjru7jQcUsD8tXjug8",
  "key11": "3twUEbES8ogxSnydxNHmCKyeJ6njgXL57z83SYzVQsoQdT35asBmWwLWVzhJ8YU3ApsAEshtNWcwEPPdCPDaQzbj",
  "key12": "26fdLoNBbsBtKyy11mrZL65HBzvSnUJgtGZkhHw985QMnX46DSSFmuijqwwuCLDYM78vJGv3ibRqgmuHSJBks7mA",
  "key13": "652WopB4gzBMMtYCbsAex4zV5uVpWBKnCRLXQMu5UsmMUj9zNt2DEDdzkdQWUP2GahbXpZpNkdMcGAo1RxXTzzzF",
  "key14": "2anuSdrJsJi5kZCBSaDoGn9bZ4vrWYxJ5FzxaoXBfAQ4D2PqnDewG4dmHEcPp9pPEcbShTkvMYWHoC65Em7FzoTs",
  "key15": "51CqP96REm9YDHWDnAg9ULrsaUGXFpWDRqEcToRkhMhk2tR9jFrYFcKjyCmifHPb9QVAvEyA2eNgPxPffXDWX9Rg",
  "key16": "4szv47kUtK1dVKJXriNVMvqPesikjdw2s28KvenT3gBf3n4eExmEnS2LKoskkM3jmCdParVkBRmoH6nfmrhRKqGc",
  "key17": "22qrUjpPeJzJsTERk1WzuStb3yVAea7eDkZSKhHjLZcyrJPecP4iecvb41Mze4Rh6zJdNF6Do7rpGHamzRJyefzc",
  "key18": "4DS99UeJcR7cXW2kNE1ztw95Ei9B152pQYVn48QF9jAGjki6Wj98e6PhHx3pAVmQva2hKePfc5ma1nHmxa43H8Ad",
  "key19": "aM2XiCWgJ68Y5UjK877J9iMJdFp1ytPQZBCWH2TehF4s5GVQeZjeUPRfC5r1tt58DB5dVKY3p4ungHb8LUubSAh",
  "key20": "32xzktJJMmohTzt4NevU73cM4pEBE6j5mqhS4kKyRZ4QfQLcRoqbb6SwBPH3ks1VJEbHDobGdk2JBHDUYUbA8s6d",
  "key21": "33fsxBH7SY9CcGv2Cdp5L41CoFDem13r5ikrbGeByXJcBzAJpsdceysP9T23jqR4yzAFbNCyxVWHH23mGQLtaSqa",
  "key22": "2C9wjtPU98Q1G7hprXZjpzx1KrDGXAc25yXysCCaZ96a88PBXzvjPyg3J8vheWKPXSVQkk6VacjD5RXHV2HBLPLa",
  "key23": "4octpsd6uJXzMPbmaV77j5pzJxVFbR2ToQpLkRsa7VD2F7412efGzsSQnkaNGv5S1saSNkKpPZWz2GRbqaNXWLhB",
  "key24": "5tfwk1yKAHMu8R71M4Yf49T4rEM6C1V9PwLBytEEL42FLiK4ceMuZF6eGghMX1CnHggbFFezADdiazGSmbsdKdY1",
  "key25": "5YCjqHfjE6kyf5HRNkFP1DAnxMsbaBv6o4U4JVo2ndoMNbkLVdQnQWURRrEP6GJoyRuXePVLziAUaR6GgcF8yBf9",
  "key26": "3hhHQD6ubXJJxc8Eoi1xY2XPVNQSurAGoEaugSVXDsQxhkrTMfZajkX1tHUL4TPUbdTKCsPWmY8waj5BzqcSssoR",
  "key27": "2Zx1ZbcsFbsrfbaLnAei1R9t4u776gLTwnkjyYHUSmVugeiQuQHNSL3ddWj3xAaV8Ztz6rvhgb5wVrEcq7oPrFGm",
  "key28": "4uqCsdhhgv7sXWUATrbzaYt2jEPQSRz8nEtdYDyRMtGthsHWsXvxSwurww3Y7PquBsQLAjBkkzetbtBo26i6Dg6t",
  "key29": "4ezHton95ssgMhNdn644TKGUzAc2w54bStYpatWGrojVdTTDrSLvNYD6YfRbp9tLcbqYiVv9s3G5gh9J9P2qcVBb",
  "key30": "3q31UBgdSDTdhFdynTnm8vPk8cce9nwSc2cSifbpHTVCpxn9NJenS3BUJZibf87ywjrjebov5ueJsTuC4vRkrRmF",
  "key31": "3dx9jCrC44eee7qHZR1EQGcPpXB1wiz3WqW9Y2qKoMDu3UQMaxUSJirytzoQJ2xoA2911gQLHAQhsVwHVnoxRGC5",
  "key32": "5T8mr5hjYNGnPEW1FCxYGAhs7SWYFWc7sCDKibj9LM8dSMzHkJL6if171LVHyEz5wekhbbQcwsHfkHBbyRxY7tpW",
  "key33": "2BhMyw1HTW8XMGBZSjpPJn4YquutpuUZXJy2r5qo4BXcfUVYeMC9bEEh9dmWkfsc2ZAKnMyLzWewbedHHma5xCzQ",
  "key34": "3SwNr7KdaSBJP11f5BJerszzbJRGrQThGUt4ik2NuEdJDSUWwcpdFi81f7vtiw73QEt9uH5tPMrkEwmzYsCtCqKL",
  "key35": "51WwGzUXHG91ihiEK4opSK6oHiK57mAXby3geBHtzgkTgdo51kubaun9HuUwsrPEGgP93ZHzRjtfwBickcYrrJJf",
  "key36": "4sD8UmikZKdgwCiHKdKt3H6MS7NnSTh9yVPuSE1o3SJRpgAFnyqPVdKfyY8QuAiCkbnpGFWQ7utHumH3Jv5fcLEN",
  "key37": "z6qmcdCo7K2Qi9docxGDaPvvpCodfdUWF4oP6aUf3gtqKpkWF8r5EcgJ9q7YPJfd8jF16HziYZDFF89ZLjMNaeF",
  "key38": "5qubT1ymTrTuBuYFjJfermgKfzPRnsZQBh4cznWqHbTbRbqXP7zHWhY38VTvtof7zpqnnjbZBh1U8uo2wxNbWvry",
  "key39": "4UsLBhogzSuM947zAYDCin14MJBkadESEHECXq95q1MdBb5Jy8j6fmMitCvgFGqfZdSS9PMsgRWTBZUX3VmpvdoE"
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
