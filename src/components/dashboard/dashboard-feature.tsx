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
    "5WxGCpvnVzr9eoJ753eLYE63ovYAbcMiUyteM4MDNYQ7ZvWwGHyt8o3NfySeJ5c8iuKepc4yk9a5Srci7vXo8uZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qczr5nq5TdfGX5SXBUDDPpUYmjJXYd8LZTc26KKGjpV7icrN2v7hFMPh9dtJiy4w7QdAneUMKGrbZ3KcPNtopr",
  "key1": "4Y1JzZU6yC1F1qcbcdN7XqRBKPCuuqvxTBxupRBwoXJYgaXQumxeFeA9mmw4SaMwBiThe43UjM7FwEgbH78591Kv",
  "key2": "3aa7foH99L4WQCkXormcWKcLnfEbDq6hRvWi4Wa1MyFDJGYznDe4DR23Wy7oF8PLKY8e7nRA9EE4iR7V6nZiVgTL",
  "key3": "2x5zvpN3vrQyW8s9GZCSsnJHX9QULWrUghk4f87GdxU1vcyqNgJFyvTbqQT9oC7bQQfF3UsgyqbpGrJa1vgEsfB6",
  "key4": "4xof9J9qBeDAHazu7fWQ7uxTPXW188eNGmof5k6o5UZyHmVdhQfmxD8VbjzViacadzgccExcKshoiMMyxFkiGtAc",
  "key5": "27Cgxcqwi1i4KFJZivmfzsCQshdbbqRwCSpSfA3FQ4p6pJ2shN8kRxLJF3f1t3zA66ttbdaCveC1a7aLipL6hLSt",
  "key6": "5pUDevF24v3FSwkbpe7xGXkJLEgugswbpR8SQup4mGpBRVn4Q9zLvMKDiKLmXj5bkE7PAVTQkpgHtsnxLS9RRYEF",
  "key7": "53RMLAoVRLPSd8nAR3EcCw2Pzs1xf8GAoj8Dj4jpRWcZZ8UzHuDP7NL7gPhw7dorrWstH7fXsWqXdoaMWAyHTxG6",
  "key8": "393AYb7B4kaHv55ufFx6hwt6jiP4WkDmQVgkbp4niLhfwn3ZKzdycDUGU826KMjf86reqA6BaBtj5Rtswifh3KKK",
  "key9": "4hBwGBGEdb4B3H9Hnptu1LSkYWY6iqV57rtPT8EjzymaFVsRtPU459seNuqv2iFNYcA1VfUXjCMigmV39UarDMKE",
  "key10": "57wnnDDi8PwVfbCshks7BkjjhNiDuXfgnfhF4MNAFXuv6j41vFA9hUFpts771YY9mdUBveh8awj7CFqdUdxUgLUj",
  "key11": "4Kytrnkk1ZuL4GQ7yqF7ojyrN83Cu3dZNvK3PyHSuF1uAmrhsoEhVQ6XL8zHHpT1uB7RPhpCHXPzmVEcEx8GyGrX",
  "key12": "hqDiVo1ch4uAJp9TZoKXjGfBsJi24pLPnWWtRjWaNpqdvkjU6QBDGCuT7i6NBpfLSpmCAkdgiEQSvJo652sSLif",
  "key13": "5NLbVoCJR5SN1wngu3u58k2ZjPT65k5iFiK5JkF2TsFs8EPQpBxXLXMxnmDpwoPA9DdtbuHqd9eM1GJH4j1UR3b9",
  "key14": "3svo5N9GgXnhbHdkD7EvMd7QL3jpPNH16t1FLJ9Csa5BybAMWzujXkimMy9DzieU2fWaKmcFKWDsDQTRQGUJbUNo",
  "key15": "4i2StjTLVzw8WmtR9Zn3SC7nHBpgnVtNw3VaVLqq5rX6VxMDtvbJUQonCL5ALjT3AjYkMWw6x1xoniJLL7KiEGad",
  "key16": "3svxEfgBTdkKzrmb7ckRPwDnicKZ5QVKXrMxwFWFrgg2qnFgQEqJaRjEra6zzRYKwSFT1aa8d4c7njxAR8DqE7hw",
  "key17": "3PtazkLSUfzhRfh2w9o8jrnMX83XkUocqB6QCfAryTc4RQEy4RboToXZvKqE19j4ZBAkvSRtwvnC1HFy7WbvSCof",
  "key18": "4SuKMWXFUpBSuvs7ShvGBhUFtTSYRp4qFKnoLQtJGSjTTw3UsCr7Ctvh4aHcwbnbX6BNJHAkL8PrsgFVz6vHNpah",
  "key19": "2d2BiBVFzKRazwidZUGG4wdjFJ9vqppucVYhw6Ppeq2BiagGurDDYYWXjrY6otyadxih4Y3ubPnE81GMssR5pkWq",
  "key20": "5G3jNJrCFnGy9kMmcL92UHH6jkYtCw6Vz4VBd2Go6Vg7QuwqvtDEFnx8uQzBdeV9yJpmW7z6kGrysbEdPdp2GFR9",
  "key21": "edUxqQ8kaNHSaktp9PMdYZfhDzdHBp3rFPg4zhbLbCiXWtBtQjB1DvsMkQoUyz85zCny6VW3Xa2KijcnVUNf4EU",
  "key22": "4ErQRWPMEUMukyLUgc1k74hTKcs3GhaJqYcYxcgKXo3TXdQJyh9JKc3CwmCrHoNQ3kfRDFec6hSMfRYqPfxqi5wb",
  "key23": "5UVreXhTQhjL4s4ST1WC9DGAaZd1ts1Ay13oJMW9E6B7CW3ca3Uyg5XkvFjFxAjaAqLYWqzA4CKeHNotkt2nE7ZG",
  "key24": "4wHVd7HaVRJg7JEiFV6ZJVZRu2fa9SuZz7tC4ZWzFDYnqRFvkKrq1fvrfmZ5YdsGPe1ea8BqTqvnZxpEmaL4mQAr",
  "key25": "48KhoJqZF41uvwPWTS9qTamyrRy5tiA9skNma7HMaQ7kpoyMPFLPAt8EqrbmPbdwwWzL7ivqV4y6FqpJoHy6V5WV",
  "key26": "3vFZMqCdN3VRF4Poz9uNVku3W9bKPjRT8mTtzUrC8nQ3p4TMAHVeUvpLUKjTYPtRhbrGNww8mkv6hAwS2J8cyL83",
  "key27": "33JqEEkZ53sxeEUqxinQQJLwEvez7WTGpdXV3acRG1JdZE5PpW4gdgdZCsJoTAF9mLPBVeYUJpfchqV5xbrcCuaS",
  "key28": "2zUinQ9Zju8RwGxrxKYPvFa6cW5VT8538ty6SVnSTNmkTt5utzoMFdtvrEeV2pGwnLWgWPRmhw54o6rsFEibdTp7",
  "key29": "3juhdbUtGG3vtoLc1sB5GewTtZ9SmTXqWa2sz7dge5qeGx7xkU1pNU3b28iFmFPowZEGrMgPtiVDZGzcz4ScWxFV",
  "key30": "2xt531nda7u5yjJJRn5R5v56JbGZ3nDk7F9NQW91YCMU6CAgzEZDRyUKgxEWigLMeBUdWn38zm16oRAxt2ERmisj",
  "key31": "4WxF1R4C6m6mXizqzqseKUcKpYy76D49LJXjPz4ydyUHEUBMD2LKYZYcypyF5rZAGRxEUuP1R6P1qNidj5Ty9VgL",
  "key32": "56haSxuJAxq7sryhiYktB1NXyYpJ3KsBxmCFwS8TwUaABDfmKdPFwAzR35VXYVtBPd4ng9Ubqtn6DbWWZ3bGAM6",
  "key33": "EnHDAEBTHHA4AQ3755f8UnM3XtKYaFFFjQUJnLsMidXo4JQGPbDQXhbpYZ34VUTjDeWyCrrpgK3Z1aU75YtoWiy",
  "key34": "2NHy3t1YL9gZg51g564jnkHnVqwjAQFCqvfowRs1v9QzP7bcc4LoncHZokvcq6A2n6UisiE8BfHZziR5pPTEnBwD",
  "key35": "NgfpzA9A5D2wBUeUKLkesdED5pNNjWEsVr4i7h9Zh1CZfywzzL6R8iuWNKWvBvyudt1u6xXExon1NUR6sNNLXfQ",
  "key36": "4jRaX2szhvbaVpfE89fKWPVqgh95ZvxFwGMKXyhL6i148oEC7FcKrQLBc4KjAXidaGx3nvLGYXUDKr8rWqCDwir8",
  "key37": "2QnQcjsEhLWgz42JBn52mRKFJtqQJaEU2iCSfUvNXFF2PqEGTf6FuMdLigM35oyeQAaiU4wYmLVrWHYmyLJvJ4jV",
  "key38": "39Rj8qPqiH6Z3Fp26coxKadEFsN4XGcFTQ8dxaTKbG2JMFFLMm8uYRejv7YNgNGceHU83Af8GqhgfNz56hTYHARx",
  "key39": "3apVF53ufHjHtp2MYZW7cLwHwSBuuseRdEV13xvZ6XsPeRi48tkkyaF8ek7EUsJ9dZdUrRfy67VZ558FQa5AgTQ3"
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
