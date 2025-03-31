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
    "5c5BxTkVySKCJe4gAz2oc6gF9VKpKksTKhcVEbs5e5pxjB2kxFxV8uh5E5w5nGay6z7a7t8XFuxasECKMrrbbn3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yRzHiNfZy8u33SLrdFVe8Ed3cTHYFtiYN9TrftCWuy2tcgjgDrA7v7ZEMhQsDxBvuTb4y8ppdv23dkFt8H67mUq",
  "key1": "5YUFU6LVfzkLwAvhHjtYwkfBqksVjT7mcrM2rdvBPAXnpdWQsY2FDPYfpKPY1xjcDVw8wkDKc93uXQkzV6fdqZyF",
  "key2": "3oTasZRhyYbgGAhwrrTsPgiQtusbF1vsT7MA2cLmpkmr5f8dyLKYQ9jgTxvnV8mfEDkVm1i7JnSidEnDET65MX27",
  "key3": "3A6SjFL6UmaXX5i4VqEMo4h2oSum4NPm5DAJtRoqApoVF1skHp1MuW6HXZQRiDg4eW5aCkzEuVZZoTa63mTFTh7P",
  "key4": "Tcqt9zCB7qTQUSVivEEJsvRZvuyKDiegVPoPNYneviYFLZTF14w89JUgLVxrSn8qU5GFh5Kogiey3SW4wyGRwhm",
  "key5": "57MQxvWLC8Xr89SKzBYQRxrhQ8hDchvRv8KVeF6mBCU7iwUjb69KyWKLbAXhmCn8LLoRpd871NfNiuvPPbB18CmV",
  "key6": "9K2cj3qmLqREgjFDCHdd6JLwPrbXKP8tRBGf6p7Z3Go6fGMpeXmEFH8EWpuxtq1CZQjkRQzVqt8iX6CxGS45E7d",
  "key7": "PzRHX8avLaFw8UoF8HXqPX5hsWzYLrwDJ8TEE6FksxuB4huFLYK9D2D9HG1eivsoZeghQJVUbNsKzzahkoRqcnh",
  "key8": "5aLmia8StM7kDEZ3LDsXxkLbdPM4sqa1V55fFEQkQWacR2N3gL4uBQVGUXbNSaF7CpPc6sNRLURmQUwxAiT3TUj6",
  "key9": "33cSuVX7sNyx8z2GCocq8mfbyHhcTMXXPRGdLuaG8usvC98eYRu35S5pi1JGfG5QpCJ9UgALjBahAa12h7dUrm9T",
  "key10": "5tarJYa2peBBsGCmYKYCtwXmg9ZFpf7yeSFddi7hw11HXJ6BnF5inH4g7D4VCmNvcAVRLEJNW46ktaQdSzEwqkti",
  "key11": "2FpDqB33x8gV8qp7cLNrtvQKQJehMrhbDyBk8jkyZN44JiDeY4ZueVUany1Taeds4WSrXgxHRRruBX1BfrCroHVg",
  "key12": "MDPAHE2cu22NwpDaN8vpvAUir4pCrecVhrRPLqNebjn5BECbqWfZcdwFgbmf1Jkif5PSEXhhS8byFqyEHMiJjHp",
  "key13": "4DH8y9DgSZHmuLMvmCNKZwiuJpVBiVCKt6gPVDw7SVmf6W186cyA5i7miUWthYGdegztD6D3c5caRm2p6GjNWoCE",
  "key14": "26ffiCa43bgNgXQrAecL7ptWfpM7KgbhdAKxcwrkJRp1aZdyRGvKc53TanNhVXuVkiq4hnWZWVraKvK2uKW6Di36",
  "key15": "4cdk4EPo8Sx5kzVrfT73vEhoBvEwAgrT6AGgKY9PW3knsrNdMkjcDK24gSujPsGuvt7uT3Gq3NmANDyBfS23PZ5o",
  "key16": "5QrM5DoDxiViAvNBeJ3TtqLKi56rChap7fmLBRMer5BxJGhKwyTJYfMtJeC6VGcWjtWtQoFpfr31GnAJkBRzqsrf",
  "key17": "y8NnMTF7Qxq2sWus8srvXnDTZZRjKRBdmHS2oJmHwXaETML7wfWskkLZT4847LJ3MPd4uqdTaeMVicSAgRQVu82",
  "key18": "3pkZxBDF4Ze9zxbCKQChXMLLYiedCpBGfeBJfbzXQqLsHAYGc7ZDdWHa9qtDMw25UEvY6M4jV8Bkj7bQ48A6yaoC",
  "key19": "65uXXJjodM6Y5LRPJvCS5DjkGRgE3KUfjKFQf8ctL63qNZPAU9aAnpQdpwgcUGmKzH9QcdTYkT5cyKrkdbjZZNzS",
  "key20": "2ky7ZVmR2m945MTmSG6L1DRx69HERZm6JFwDJEsAE8yzpDkqbCJ7xfoEJLBGfAiXYJ73biUUPRLQshjDaXn5zLhv",
  "key21": "29qsEXPEhchacuHHZDX3yRUUEZ29XLdtbJi7pEhQbbJ5RooNTwcCB7axDDMyMiUWhV6h1NdvjJ9KjJNc4QtWZRUp",
  "key22": "4G8WYht3cGFj3wsPFW8j2HrZPQXxsjaKCvxfJmn6S4LEgtPF7SAiL1q9zycj8qJD3vJM2wrGcxjosmzFN4WR5rYS",
  "key23": "5aKexYgk4g8pyCiF6XZfkuAvFggWUmGvsAKG7tkRFex3qtKWAa6SrofFNB8G5363M5H6X7XpfuuSaqqap2B8k2nW",
  "key24": "43k3vazviEwdKDnt6XUkcbfobwbgnVSM9mQkntfqDzyMpM2YXJEagBNdmjQ8euSoHaJFiar6ZEq8SWPu6cBoXmen",
  "key25": "2KHdq1WcocnNTJTEnfg2XXkXPoGjmBChWNZDYz2yDAPqPSSZDefAgEWyW6nByjR13ePAvG4h1vu5bYTx5iEfJciT",
  "key26": "bLFPP1Mpzw6qovHAbTVCpoE4AKKvLzENV6W8YPgJUmSBVAKeCEYYqEHubEPBeFAuAVLMJ5KmZyiFMTMuSote8GX",
  "key27": "5DU5Q6c6qtGxByt8fg7kG92o3krWqndUgfPdfN1z9iTbU4KCSf4TufhWnnimSqDQ7bL9c3eDU8r2ZFG5bcVinHEa",
  "key28": "4XXBsbDtWLytW4XP3WyXkycvNzVQ4oVZDb6DxGECxM9kdMdJg7SN4sJpuuedGnUi2ikY5P5ywZBwC3AuaZo7RLUE",
  "key29": "2L7TN967fVK7CA8PqaFzviCDnsVNZMXfyX2QVEKCFQJSVh3ru9MrGPsfxAicjAgdL5qxwgjsmjGjXU9RZvENAHkR",
  "key30": "5phQmewLDrrprSHZqSoMqdzxp6Ka59MhpPYnm6ww46WxQQVfJxfEV9BgL6CAnhvXCWTFYE1rJUbuVTDAWgCaM6Qk",
  "key31": "3ctAhwpFvrPWMeikXqdNARxv2kGYw29bD3DBTFk2kHnZEZiiTx9kwo4fpXeVepPYWvwuLmBnHUZaQN1M9tXSBgzh",
  "key32": "wighgPZzigcAuHTBajSfMME92bC5oAKymxGbhRKseLLT3S2hvvn8bjT2nbJHhzUsqVxo4naPWezM1fHXBL1CgYx",
  "key33": "soj5RzkMcjGLHFP4RAsXRFpvCieE6oAdW4jJPENhhev7xPHoNAuFfx4RMZv1HeMCP24UDNpvbvcXKkAPubmjyWj",
  "key34": "35FKocM5DXH7oXnxGHDRon5EhZAncDXMz9ACPGpWEvvAcXMSqDFgcUB3jXpbWF7MnwhZozxLBycnYam5q1sP5LYm",
  "key35": "4NiV8Bza3RuSKcbZoeemjBt6bTXKWWxoibuxVKinEfVwoqw34NitC9WHmLf5JgEXgyg9NJ3UL8erKeKauRnT1YLv",
  "key36": "3V1RhZMvam45QhiP7Kda5ba3cQBPLev7izGKz2rErYGGFoA7LSnqLvzQJsZeytvW1pCHx68HZzsvaKJopFVoc8GZ",
  "key37": "QZm4R4zaDvA8fNAwRzrqXnsP4iYctqyS4h3j2e1gsswYJBVutWfJMM8gYw9PMbeghkc1dbUtaT1BxPBKHY4PmS9",
  "key38": "3dVmci72aHF3a9Rm7mqoMux52CY3DotFWFwMYEhvMDBdBQVABgKbJFWjqjD2PBkeSUEmmEbtEYMuLCkxvgyWzKya",
  "key39": "qdrLrtFp3XH1PvZHaiyms4q1T5hQkTkBHXrKjw79azdBDh3rBnfuiwCD3PKehP7JaThb2EjReLR7EadhqBYWDdK",
  "key40": "3QDCXUNNzEZSuWSU2euGQBNF7Ei3NFY3ivF42yGS4qk6sParWd2Pva6VcYjQyb2whE1YHZNBcED77D2htuzLpiqJ",
  "key41": "5YgUD8G43nNMer2Dwcog4s5krFY5RLNuzH7TVCsDWfc5J8tPHAiLEPhdbAgLLyU9MeFrXqNFpLig99JYtt746Vy8",
  "key42": "2jBQ2sfEuWxzqmbatwXwREEagbyWEoix9ECGnCWLRgHzQEZ1KsvNAPyJF3eBTsrKEJAFmCfgRybxZbYrxcAYvf8w",
  "key43": "35QEsgyiAmjVJ9kqq6739SgrhRdW3wBxTypPgyDvPKxN2GnrBNt2a5sUwJhtFptsee8LwjpPRF7xPtgSsEvWZrB5",
  "key44": "4LbbCNJXHnS1x7xW9suVXSnUbtZpPyypuy5iKcPaz7r71AYeNMfDpK7ZCke6Y2yrrpbkrWMKa8zxdeZQUujtpxqT",
  "key45": "56M4MZaURdzf6aCrDyBLGBL2PEmspJtSXAQ6BA1CoJ69xuGBqdk1fYHJxN81DzrucvKYeQ5ZYhM77PcbvBSGyqrQ",
  "key46": "4yfbJUWkaqvdDFzcdNTtwUWK2HAVVS3ktzx5Yre6Jm8G9414sdKiX2g6nwptpTgVA8cS4ChYNfr3BN2ZFRLEBznT"
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
