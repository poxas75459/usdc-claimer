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
    "5KSehSAMHFEA6CB3ZAacMuz7Yxfrs15Spg89odazyb3JKBvdP1ErSrJBNcaNLR37tAu4meBo73rMzSPJ7ZecrBSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q2dNAeqm2Pg6b7NHzJRx2fsBDz14pbxT1PnptgecxDmm5ZjsGA2s8Hd3Sty87NaVdGVwcotm7yXkoLJQ1HvFhbo",
  "key1": "45bHRXNXhmcVBZPiheuyfQYXc8aXb5zng4RNGetQEtM5Mj6WVcG6eebvzWMMdBcMrQBfSAWBBRETxXsmjjmWuR97",
  "key2": "3egD5zF6BDQnHX1M8RnWbEKE76BBfv6ASuUhTSiVbcariqw6f5zs1zQzg8R9i1DXC7wiNgpyCQZTP1i3DencE4zH",
  "key3": "23u3MbYWGpGmFNmJEfvv6H23YW85CQa5WiNfPMEXSELnsFZ6mScum1toui5gbPd8puFzU3HjS4imugGVjaiQ2xjd",
  "key4": "5TofFYvZTtY8C2pFQ3A6TLZrC9DdzNcxKWSRRiqYraBtRs2gk4qow2mjMaqHHF1e6AyigphoJmzSxdst8XDBafGs",
  "key5": "2jWEUwbbTyvZDgro8sRokxgqoMgqTdX8fCm4daSGc9kJqUUwFu9mQuy5GNzi7pmwDMp6YNGG2jDbzJ5yeqRjZZXW",
  "key6": "2PpZv8jjrHKJrSo5XCxiVfC5aNT1A7oZz1GbakBN2vCu8gM8gqRhyQtjLfujq5wuyUp6j5KdyzboNKK4XvVc37Hk",
  "key7": "XZg2DumqbsnJ4U7hL2dV4wH6w73Z9df6PoKq333NpYMfiF55Evkz4jGJrPH82rSztABrXvAzbAjGXeP9zESFKhh",
  "key8": "2XJ3gqgxLSVLQPaH1fPME9xCg3MQop3APPed4EPuUQPTC9r96kZtjVgVWFZQ7zJ6BAskJpQwdknPZE7o4dBuiUSm",
  "key9": "K7MfPiicxedxdw7yivp4A5ndRyMq7bjJzDtWV9mSVmCSYwCky9ZFGxfwnAGUUSMmeHB88ThdKcRuUeo31bZM9hu",
  "key10": "4zQ3nW1hhbvN54dEvWSX4so6DnBQnMNRz7TUYMrHjqgcGtwMaMfpBJeytC5WuwSXQKeWLDdgNJNLdv8FNXwy2BEV",
  "key11": "4XM5btvNJyHbdkkM28QWmYYyCxoVbAue7wq3XCGnT7bnDrioZtmvbvH15Q5WJyHxB7MMJkhjgcCLzYGicne1r1nD",
  "key12": "66Psf7cV1QjTyKEjqkYjRaNmJE4PCjaPgpgeNiaKFPGeocJUVP7w9SC6jQwXAyP9YjCraPrbUD3Vb9VLSZTHgfdi",
  "key13": "2NAMom3S2D7Bg8FuBaWqXuzSW2Etw6MmGxUqE4UBqmj5xWp7Npjqqj4HUrrhjZ8S6x8WTKYp3Rvn6mppd2jCnC9A",
  "key14": "471nXJGYLQGaxdYbWqUJePbmbwfvv747gHHXepxQqgyXAsQfwa5vTPcrxNhpcdX14FTzq2w1Ux9vrXNyLDmgDHpS",
  "key15": "4cJuwycBjKWzdDhGkFwkLbvsG5KFQ4pRHkmKCeTA6YjUwb6rztqv8mzebPu7sc1khH8aepmyK6jXZJe99driS198",
  "key16": "5ByqLF9iHdxpaihKSPUPRFw6Gy9oZjTQjy78nRgxejCKjvWzQRma7FULJ4zeARy3ABbwBtsUJyRumAPPHwQzDp6G",
  "key17": "3VqJfKRAscuqVUjQd5efU8FpAtsypBQqquuGvv3Zh2b87r9nMTN6kHc1XkELMsTSTeaW9FgvLiELrUuq5LNpMxe3",
  "key18": "58Yio7R7gnLD6hTf9f56pLRfUMgsPSXPZxfJD7vXUAet7jjp6Z3ueu4xQy8Km53ph2YnJyuNco2BZJKn6K5ye5MY",
  "key19": "QTTnTj8owKeKELQJGjwn5WVxUGyXZg1U98Y988MZk9XKaTbXE6jCrrWZEkAyFB2NRonrN1bpATQJFEDqcnZvJny",
  "key20": "d2CHiYuPX4WP4jNWe8U4ejWnTeqPxyHFHY2NLCWGvTSwsUQeDwuccRmganLJLQFnw67kWQuECqTPSD3LgMujyhd",
  "key21": "3S8geTpSGjvt1s8LoZCa9hziJ8shaEtS9MA1j3v6Dpvnw4sKEr3vcnZSUhr4jKmTuQYWtjeuE9LauZzbYDQAtdTU",
  "key22": "2nvLB7tC8jXw26pjk2cgBLsjPu4FE7zWhEcaH2ZKeRW1nQUzJHz9LafnC9HFCkDyNPL9KMQJjCMb4ugdKwyPqEEP",
  "key23": "3phsQDV188wbGpWbZKYiFNJqJcw3AYqGNcoMshKzDTo5xm3PpW3FdRvHmPwnNm8kJtruFCfSwL7PdAH2dc4M1twD",
  "key24": "DBqWXXs9NdZudibDABmjZownqdXBYYFjGME12NHgz1wtV89unBg4hCmy79RrqDwPUj3RaByxAGmjZd6B9oqjtcy",
  "key25": "3yvvJjic6R2XLAoUzSNMxE9SDevhxghYhqakcgMb3rmYYun5uNVG44MaH3JS67Yw6pcaYtSkxb8Q3ckU9Qo7eyjK",
  "key26": "2aSaXQGF8uC6cYrAkhdGrVFpDqAhhzm1tDxkYKxCFHzu6BD38TtvPuTGkwXF7XXPta4JhjDvWszAQAHUpFGYoWqB",
  "key27": "4paedNFtW243qivbN5AzAC6ghinL3kkZDie4Jr3HVziYcc3R2nHHrRHbpn3P2hybk3TbegVG9deYDkffAUf8WqWo",
  "key28": "4XP1B7BbssVDoPQGgcrioJcn1D158Bhxss1KTL4F9hwUuf7r8NrTsFgBQxGJjdtFUqGzFsE4HZjAJ1wv4JG1smXs",
  "key29": "vaLCTPFaKd8GQmn8ax8iekzPknTjcGGA3bthsGdWFZzUMDJ379xhKryxKmVkczghrzrdXaH8a84HLP2qXGY8xZN",
  "key30": "4xax2E6znQFR39u3jGpuUpbNTWw7RLUk5Qzbjjbozfp7LMSF1gQ3r7BerHo94a4UAAN5iiihD6ypoZW4bADN8kNg",
  "key31": "5bXbw914rVXt1P9hiDfTq9DpTtZNRHWMmnpaXcPymqZeS22sWdhwTDEpwTn6KtaJePqfi6WYHTH8ifen5Z6MecFJ",
  "key32": "27nfRRSEY6ev4Qi9WuVUZccQnNXzeTSXUjWGChYNqZQuDwEC7AJQ8Jovu4rvNekCCUjfuq31hXbJNaZWWaRKJsuP",
  "key33": "C68MfivLn4z2RzPogm74bMQPyxZKxdQFmA8D1wnVhnvbhhtBjvcbK1hShd5YRUf3TPUEtS7fytPCVsL45bRpp4t",
  "key34": "62JZLTmJj7FFGzmyaC6hz2WVfvy99xHSY8wvTNVBgx2ZpZdxvvPcoQEnSEw4Pv3z1QudTaE7S4bJinLUExcKbLfr",
  "key35": "3CNGvakKbUhNxshPDUboxhpJRobALw2FCrr7SSVqZ45FNGji9TpmjZXK6LJNq6SG3UUL3pvig8arhsgaqbQb8ho7",
  "key36": "4h5wfEuR2tvGU8jFdJe3pgqzsCwSEXLVdHSpQgjoXVano5XBCfziYTwzUUEH5HcjF17Jri3LchgupUK99yUj6bsW",
  "key37": "4b5PGpWMKzXPzVVgZsHsSdRErMSxV7fJke1GP2KKjG1y1g2KKpJECkgsNXfDPUwiEsuP7DyJCmnCSu1e4fYZY5gF",
  "key38": "31rLiSabB7K1iJ6ta9GZmsrKv79Q2fZBoHCsFQaZ7eMCH57zW2nxTwkkQVa74Tkj7Xd1MFQ8eeRrpkkQY35Sw9Nj",
  "key39": "4mWTTdZbXViAYXpvaDHs1QhLE9ydrQmQqvNRjULiWyfRbgT4pidvpQkqCvtEiqm1cZ9sWUrSLybigCuVYeJJZc5N",
  "key40": "2PAokTTEhtTLWXyrSmEM3fjMHcad6efJ7LgcA5BrUAoSa9PASyxBSmY5VB2ZVxhs8PjswjmGnQsJSAbaB1xP8WRk",
  "key41": "2zereVv3vjF1HnoPSntYqfqgSVPthDXknnmHbJ5iKBQPUD65kBJRtW2HUf27wDC6cm5V3Z1CJyz9BFMA4NfrvRcg"
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
