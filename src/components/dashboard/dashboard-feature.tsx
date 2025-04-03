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
    "1EjfcjJmHmXJrbXXwV3B1rSxpKtaXSvP6o4aPMj5HdEfCRHwwAwc3ZPYfNi14ooes6vdagCaBS7vLoofptMeNYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgTkCRZG5LzX76xdrCQ1YoQhqjAh37bj4rMc9MmRy1xkPhBUR6kcSPoLh8ymrN7Sp7bi1tRwhcuTAUDNxZUbsxR",
  "key1": "32R86HhLgenVCaLTkbYWti5k391QxJiPVaatWigXYZveEe8B6nD7GHqaWk8CBevYwZ8gFKrg43Zdkx5FQCMkbAJ8",
  "key2": "62J3TPJtGmj2iapCAph7MjkBrDroK4oApEk7NLEuLhV57F9fH9En7zbdpfZpUhGvY25ugNvxTsb7LXu3DbkA8GP1",
  "key3": "4jBHcbwcrvqUR3qKt3x8CnCVg7UxuoY5qvnWbVpGXRRXSzanE8mk97Z5TMHkzXgogxFWNUqFku4YXq3n5WT53Ngj",
  "key4": "3At4dhMVDFjYiTpW4qkyY6f3HRUXAZ8yFaJ1T5EVLdGstaqeNZShiYiY77xrmmzj3P5NLwJACXqqd8VycpZXkKti",
  "key5": "Lb31b1GcaobvbqNsUUuw933S8PNBG4MebqzSkJ9hSj3rt9cKACsoZTjDfUbHVZ324qA6pWqBkGxDzHd1mYTXsJT",
  "key6": "2eXqSPcC5zCKgvJCN6EHvomiRqi3bwxhhFaSVVyJSFpYjNgbfBFUezwUwJYMF5ttxN2wwJQyZ7M8nc1u4o6kUFVU",
  "key7": "5YN471xe4tvyPvo8JzxWFBsnqhMQtKkhETdFEdVWNT6p2RBPMCR1QWuD3ULe5URwUSUmkLR5cWnVcMjVfgz7x5EX",
  "key8": "4XDkG2rPbGKwzTzXi4u29w3nbD1jMGBWHUKrPSBHXj2kyYsyL7iyMVPHAyQ81p7upHFkrMi59b9BUdWYpAg5Y4Y9",
  "key9": "5vajLu1t3qXFAkfVHeaj5B5oqbWR25SMTGEE1C7q7Hzgde8ZUBxy5euZZnNivGk58BzKLJCHvRBV68d8qtmN1zUo",
  "key10": "2go8guPDVdQaUY19Xbe3erdTV1wvDvfgTZmrjCdThPbussepy1qf833kxaz2pDhcP2tv9D74PdsDq2vowDYNZABX",
  "key11": "5SnKN6E3GLci11ftd7GTZiNJgWEpEeMbQLmnqTVSV6uMbbfSTU3gmfLSAkXSxpYtbJt6Rk5ppX5pT3NuAhUvn65H",
  "key12": "22zXSHux2fwa6XrmNqkTDve2DqLyzdMAyhQCVzYXqUULDEhdB6bggCo3PnYAgXjxmHSi2fwnWTBHAXiFFwvYePD2",
  "key13": "35sHonpGQ6mziwR8ziiDYkAibWuCR6iw2LoNpB4oKiPWrNvQM6msx59h7qaooyLP8TghoEVr72B2PuhL1rrJcoAT",
  "key14": "4oR3GrzcePjrhQfEZUnZZmJcxQBL5tGfnb8i8ATf8HGe7xF5HvLMAA4kZNepdETZdM6N7dBJzrGKXaiPJpEt1UNh",
  "key15": "35MmzXidr79qTaF77w3apfEzMaABcu9BbN6GWBMCQJwhvr3kKkEvdAA5zkp6nizitzBAeCXvaRxBuGibTaSj1muZ",
  "key16": "2SRY3bB1tN9bAf5ghDJ1akEihj1ofe1C2tiAz7at4adLxrd8UWbZbt97J2zp9ZgCUf2L8rQc9ufBqY9rNzcjA5cX",
  "key17": "TWNF3NhjVJ8RnHDkEq9RmEsSSrw2bdWb7WKtHxiy9QTVpphpBDm5aUBtQM5v4yNDztTt6XBbdfxuJpPVXtJiyoq",
  "key18": "5BqwRa2kDVLpQZzxtLbKovgssBbRPbsmhEe1EpTgcvdW52yjiNx4pYmfM6UqfbWKUFPfJj8oZ9dJGvQVD2NwXC4C",
  "key19": "4nZDd3JDzWS9Y168DHmNAnaDwDWHLmcZpFV3jnsKKJ7m6FXS1YPZNnS6rLBhZcPToUVS4sMMwqtcmiqJ5T7koP6J",
  "key20": "3za5MyBRSMLG4dMuAzUxLJCJxFkvsq7pMHHk8Ta1DQ8G1asDApMVS6LNLNYRY2nnWqd6294xmJkk4r3BXNSqjvAV",
  "key21": "2MQoPpyaHYj6oG78iQ9zLygB1PCSMJW6FBTBQ5sjPuSh9ZmHuRwpApsWRZZJGwgu9ioAhzt2dxQMXWxb3vwEaTh1",
  "key22": "VEwinsvLGDRCj4iNjDMtsYpXizeWr15VWAyXgbpBkEqt8cgJZYeRoa2qU4xcBFsVm7Mzp1Q8UuVJqeafaqYgpCh",
  "key23": "478BsLY8Fue2JhRBSx9UDL7VVKzYpb2YKvkcja686HKjqTnHZNAfLTmfEDCLcYvWR7kfAbCasQXgpLzQT3tAxKrM",
  "key24": "5wg9pSQtgXz7fFZ9YWRi7LD1Ev3yz9htgydhACj6y1EmF7czLrm2Sr3XssKdLktc3eSS6NrdB8n22dpxB5NdV2LF",
  "key25": "5exTQ9JTAM8qT9SV84pkJyc6SzhfMDXXZNswznac8oQwfnU613ZHuN7UXh1vY2r3ak9e36AYSqxNW7VdzrW42Seg",
  "key26": "5xNNa1oGuBeGE3wQtcHooYYnduAtwKJuqcgwaCAXKB1JLZBC7VjbjuEEEQ3jcYkpUGvKSz2cDp57kikzrMaoo4Xc",
  "key27": "4CnxXng2awRvgMp1UCfjc7EeMTVQaV9UGioAy2cHPuQUFqBGYrL6YU6wgck6Lw8jVLSo591kVVGj4T9WFWWPTucs",
  "key28": "3Ytqi67d74ryUBSVend2onEUvipgF1aF3y4UTiyXtRMMavzn6XUuV344XXBNtuQuG7xLRD5fLgJUcvsCbZbpoRHD",
  "key29": "53rQeFYzVpzQu2deuN32Kc92PEUg3uxEcRP1XGXM4DPr9DRwU7KSGKr6XFUWUfdRAcAzRquxqrLry9di7E9EFFAD",
  "key30": "5pbRgGtVpY8nB1BUUCTWnoSosojogAFaP9KFUEeCPvXynnwztYp5tj6B6Vwiip8qbdj79GtWbg1gsNkHXYBFzTkc",
  "key31": "5gyNzKRgCs3AyUYiXvSfg8EqZLc6jEPu8cpU7BmVgCft5BUESEwtXjKYaYpwjmDrgr8g4sP22mQg1HDqLAEW2UeH",
  "key32": "5HcXwU3YV2mnR8EmmwAqUX1YLZzZV6YdbDB6H5UqkgBG1uCRZXtBYxyyByvNyZQLhH1SiZr3D1ba3rVRmtzBA21P",
  "key33": "3nfNfYFzTqqRoZgJJ1d69JJp1eifSMUiYEXMsoLASGPYbHVY9RRuTrVWLeh3NR8ZvieN7dCM3RcVMv5HnYm3kuFL",
  "key34": "2daLgWQwCmwtAnoFMK7dTx1EFzufDVjk64QzMgDYqetbjui3HaxYwT6uMhXFoJqWNRBggiNnN8pHmNGBRJTmeRwJ",
  "key35": "23h5tgj7t6HYz56FhyCva2c49mPYpaNDarxox7t7dFdzE1z8TeUr7qNKQxLYiZYa5n1MrJmzxaTDYs4CRfFGEcxC",
  "key36": "4KL8REjxZ3QvRgwPYbr2CWW3NmwUAZDCX1G6U8id7m55n9SiPhAyspq2AoGE22Tuz7Q4XoSQqM8sMEkMXzmZHRUK",
  "key37": "2qxmP55akbb6pwuK8fsMxpYtaszADJZUZinMdW9R7VY3YPmnuP1UNj7dzSxXeEZ3SzRvwypxRamMpesKHuzx3UEm",
  "key38": "3vo1opRyScVribSrHfZLcobXrkn7ZsVZshDAGaU72BeaFkTirfKWGY2kixv2bhyHH5Yw88fHZLh3MEf7tBCPquEx",
  "key39": "3vni1fbvrtA3pDxD3Nyw2oA3R7mpKvJMQJ2TAbJnDLPYynK2kWfJ7TP58sH3a9caPY86q9tDLbbsiPHaEmmpnnUy",
  "key40": "3iAHD2TPMV3XzAJ8qrzEnTyWKPax2aRzPW4oJyX8JfCPbpsgY6jfYaowcXUFM86TLK9YHo5n7cwKjB9CEF9qTnq4",
  "key41": "t7T81wuqCzWijnBHGga4oGeTyRyJA9HqUVfTPZRBbbGy2nJC8twV4BmC8MEYnB81KjWLWwmydyA4QoW1zAkvBtg",
  "key42": "5rLMw7TsGyWJZqk9HBbQWxsxPeiKJTjd8JsRQ7pdMKsp5TWgL2Qaaf41KSxckVAUUAKVFUgrWL7GS842Lopn644F",
  "key43": "49YZeczqeFqsm4Ya33sNSSTY9MrwCnFf1xpPiVoufjrk8zuT5PxQGLoJTWDSHcJmyCLRaY7uk6e97Q1S7sfm6yxs",
  "key44": "4hFY98emqUc2mAbijoei6nPwFNKhiTpAPpuzRAQ7sv2bJn8F6mdL2pzCWj1Z5DxL5XManK7WNDL1YMAeo2d8M9To",
  "key45": "4jShSqzJy6uhRPAZQEQRFJR9dvnt45ADjF9qc9imKpJorULd2GYJXzjbLrQuqu6KJBGXotj2mM6WiTuBX27a6pBS",
  "key46": "2Yn6mvKu6AWDjmNB9yRHkmKjGMk2gor9ZBK41V1S3wrs5UegXyVHinpb9iYnSmQHtTY2k35RuotnMdxDrDHhff9p"
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
