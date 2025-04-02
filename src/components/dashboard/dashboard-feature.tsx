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
    "UvGWFGqnvu6PHdA7Kumg5DSooFBQpuymXSXmUtzyF2brznyeXqEe5pUc1A88PabdVKWUwsrfXejZQAhfAaf6YAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dbbh3EqrUKKF4nLQxmPYRiXbJEvUzaR4q3gRnv7EdxpindVJEefoYEoDbQH7DqFxmxKxi5knHef72eHtBFMx1Pc",
  "key1": "3Ne9AvZF6aSrJoyVV7RYjWwdCpvNgxQF7KXZKap3SFyW4p3W7y3LrqVPizmosA63fToyX2W9AkSChvGA8Q9eA7ja",
  "key2": "2JERN9CJjS42fj8AKCNbHgnW6jSbG8P9fjd3V4FtLeCeoEqr1HBrhSVzCRJxLVRUPsSmhnjgCfLqqNhSF4SEDe48",
  "key3": "NfAU8zMrfmtGMHFanhe15vLPrhtxyzMCEBqfpLV12yXtQ678dediJxKB4BTpegERJW4pKAwdDQB3SzasVfZxaXP",
  "key4": "3a67PuEoVM2JQXT4776BmiVC4dAWQbx5qPgi9nteyiNz5Xmp9BENHQapfTSqPKkwx9thL6YcfT3nY8YcQmxe4RoM",
  "key5": "5Q8ke8TtaqhGWLD4zgZoCZCnaM84dxPWp5nqNR64XgxHFVojAMHchasfLYAJuD2C6fbq1BjMjPhHsqqa1UyKR7x9",
  "key6": "3HHNwhPx6zD9RvNrAztAHp3TKZMT2QwvHTC8zHPXq5RJ3gdufXCExXmzfyE931i3CKkZ1o6vybCcHwUvQr8AKrfj",
  "key7": "5Aeg5ed4jU1cGZrRXNKqjd6vfymq4CmjkwujmoxzVmZK1Hn1DuK6MvosE9en9TWg4rM6jdjNdN9nqAys8Y3PMczC",
  "key8": "4fZw5H4s6vWPC9Bj8QrmrmjCJc8Qi43aDVPxLjDL5xts657mk72CRHMsSMicoGEByM6dWysfM9sZNpARRQ3vwMDi",
  "key9": "2kNwavJBTpuzG7etMJBhRNnQAM3eC37mTJXzPEoB7mhwMaoU3az3LAh9GUyRqN7m159UPjQMQYhHUTRvfBHeaD6M",
  "key10": "3RwQXfpKXTFHpu1WuALm3Tqv6LiTCQx1ZEQu6gffXH6xHPuhiaWj2wSPehzWgUPn2cc1UZffxU1FLkYJQnvhHj4V",
  "key11": "2BZ7sEZrZhD7iWm9bMbz8L4zj9Rj86n12o1AqATZJTixWFUjo9BPS1enBaXfiq9cXkji73BeYv9cBTUofpPyDDyn",
  "key12": "2oXkxVZ3mL1SBLEP2LQ1XtwS5CtDJqCrR789MMkdcU2dnjQEw9oPowQAgJpxxfJbFrawc9sqVf4SdRFfCpPJ5LXz",
  "key13": "4xc47S53aNnr3xN6mHxpjqd6ZbKGkMWGhmMsPEpkbT4pbaDiuStxCRbs6UMnjHKuAt7aSyGyxeJ7jhpmFmQgjdog",
  "key14": "8KyuRwefx53wKamnfK2cE2F85bR3MwtPxpTH9HmtuiYopYPMMxShM82fyHZYFnUyxeheke1Z7M5gzRjoETToxEr",
  "key15": "5PHh3KwtkJBALPrsPZ8sArj7mTKvmZZMo1moPFXe5RpgiUzQTwMPMmLZxANMvxKop1mS1XrquQc4U3EPFoFV9Ru4",
  "key16": "2o9AzhmKHyWJRi3cErESUwWoYD9neg5KHaGdyhw2ND8CiVjdzzJeAUyTUnU2jA9sgyZTXW8wHSvL6SLULMhrdZ5Z",
  "key17": "56ry9avRf8f87K4rfD2fiwp3MKtBc285Pt4cemkeVXpfxuvHyiCdgxWdvpGiWEHbNMXKSgTfgSaduUcChiXYrDA4",
  "key18": "23PWrjjmtbhqpenJra2Rco3bFSiF2uNw15JurfpZrBYLQ4nGbaAy1BgMo1ysH9cA3fNAHt6vGLFXZpLGM6HK5RgU",
  "key19": "65jx34ARwkz2vn8eu5tQd7riQsYts6rb3nY4VMb5MUSvHXFPeZTgCNCwgEZSVxVhTE4vm68pqpPfXUXJaj9Lsoja",
  "key20": "2gDYHvmh8QuFMhSMVgdWWb9XYdBVL3Mc99GpGFfaFn1v3tytMyYvhmdMFxBCLDQzqHRzHPazFaryigXRhyZ7DTFn",
  "key21": "BVLxfctbcQdYcTZreF5RQ3Y6msDvcfpdHrKU3Bs9BrkGfzb7JrQDishGfTRJz6pqTi7TWce2pkVDdcceYiSEXoA",
  "key22": "LCV5YA9HQGm55kEMRwuiAQaBgpFJCadE5hrQQCa5vB18kanvP1ydmdcdVK7adXZ1feghJGvtj1bR2VzdHv1ZJdE",
  "key23": "Xd2nVHQUd27xSWQ7fW9fg3MEP2thghTQRdrEWRByvgCq9bpigkxCnkyymKaUB6jQrhRtbckQhWKjT1SGheVDjeb",
  "key24": "5XK6q3csrHh2C5rgQZqTHWeJCbzTCC1HHrk8Z37hPhpg8SW39L7tReNs1nCPEvqqkmNKe5pRaDHQCpTryMumdU94",
  "key25": "3gj8HpETZv262HjNGHxwsq47xXZ4EsRg3RPwQqyZrHRccGdANQYpnureEK2puQDYWxrwjNVEz1QPjoCQ1DhmouBB",
  "key26": "3H1MRgaiYASyXMWLpAFCs4yJYNvRcC5EXWKQTFmDsKsx8dqfDmNdkDwGdph7GPDjDfXYidEfWzkR1PZGoCBRiz73",
  "key27": "5MGbbtnbqj7d8qN8Ak9eui2unxgsrMuRdGHq8qFYdeVhAgatiQ7h22fKsj6Ldc878AQNBUMaB6F87tqTqJdSZ5mB",
  "key28": "5dmD9YdfuMSAQeqSyvxfW4yaNeWqmcw7APMWZx4dHRg9G5iQw8BEaXYxCJLxEQXa1uEqwdroEXFCc4jxutb8Mpd",
  "key29": "3mz8fdu7oEvEjrFm8mCZc4UBKBDV6ob8uCcVuRFonmcV8WfvWiuYnXfRyxLUtCwkberj1anXoecqUrQN4M6QVAhB",
  "key30": "67TCKHwsR77sgiTPc59ua69jVLGX9mbPA5zagyg4Hq5etXycUxfJyGjcPGzCeJbhPWHFsZaAyWaRxJFAdQkXUodP",
  "key31": "vJ2jQFRREeSYaVDSiR2Spn6XwnSRYRTc9ZtEiDFdsLqmQtb7fLSGjduNF65ntQLGLwdSMZDmxegs1wsCPG1n1kn",
  "key32": "33ea1fas2efDk137bxR69RevDtTeE5t3wPSndjKLa1onGQGvBQAHvEqdNhwHShuzKmjdgVEMxanxAhmAoEQ9HCQ2",
  "key33": "5LFuDVQTJkauioLhL3Kp8w5buJVC9jMKJX4NVRAUR2vwoo7oK65Zdfs4cuCtVpvW9HgKroB7qJEkwdUTeo7aiWoc",
  "key34": "4mGZR8S7qi1cqfxPDcAhYxs3aEZgCUjSo4ha31cJ1sinxFTWf6Z6BLGbhSa5G4xwLLWL9oE6dGLK5SKzQDN1zZiJ",
  "key35": "epvpmVPJFfX5CssY4ZYzeqvUAajdSbiEqVuUakHymmiTwNsu5z3nfvvU79vUkj4A5pnX5Q2y9SRLk8pCfwunFzm",
  "key36": "5mTzms84AMfGf1HeXJtFRCgAiWTiW9XwpRHNz524i9eYzxSKbNt2oqJ1jjaDsid8Acb8VgT91adEDKvDgcajDeD9"
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
