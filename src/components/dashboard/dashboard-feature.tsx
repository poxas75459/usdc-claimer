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
    "4eF4H6TgvMBsWmqVGTLtRfjEAbSxWFHEK4ai2a1BoW1PLdHkfUYHCaHDFEboXDT79caZ4LciYD6bY67GLx3Vvzik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBKRYiasQ6ej1QLPr7ye8nQwfWxub9RXhu88t3ihYCQjdvNX749qQSURH5gs9xSN8rSjMwfhxNB8vcHzxS3RRzu",
  "key1": "g93Y3dKmubg5wNaoqqFVkYBZ5Dkj1ZSjMLsio6NzwhJeyh81CG1gVR8UnSgAZUCbDn9psJn26bqawpzafyzEWcx",
  "key2": "5nJYmuL7ZnFM3UEqpUQkSP9DLXrWz5cTiJzjCHMHtbrskTenGfLuDjGysJjcddsRFp5qdhvgVtz1dqWUEHaiy6a6",
  "key3": "3Fquj7tE8yCtyRcZFRyPfwCSTtBZXNtbmrt65EDUcAP3YbDr4ds5rjGUs5AmFLkAfiDWLt7HyNiyh8cE442w9Wv4",
  "key4": "32EJ29UmuxKZUje1UtrcrjPvjqKEwcEUk6KZbaDRBXLdV9AiTZBjjK7zvfCty57am7rnozKGTk8g1dWAbkpQWLjd",
  "key5": "2zaG4ZEQCsixVxDRdk8TGZkasbCL8JhyYFwyseULfUWrD6mpxBp34AeMS1MQepGQqerHvkK9ZmWRBN3gk7yNXpaP",
  "key6": "29tQUwkVzkZNTKmjkJNmjhPDcKzfQtbAPtRfMvVCrFzyBXMLCWDKeBDqTCWHNU17XUtAN71QwdFfaLCNAyJC6hAb",
  "key7": "4R2hm1RYYeJxZzDmo3LRndcQKtsu9gcLgZvjXSZMWKzFgzbSi5yokvJPi7icBgBmggTanvfQK1Qe3r5mBj28iQrH",
  "key8": "4rQaWaQScmgpxcgNMhMBZsiiZ7oGryuZVojNhTFRJfd1WubH8zALGuud7fathaqKFCsVp1ZTARmAevUe2DM7Fhv3",
  "key9": "2Gyg3xJX9nWVswn6JGb5quoCMFSedFRysCGMtABnHHNVqFDtP8iC41ECSJti4y1u9KQMDCciHR8t8MKTojNsdfqT",
  "key10": "4rSydvq6f8Jfe2tcAYuyZnDZJtfnjR6dFDo5N78oQpqFekrtw4sqXhLyhYcL8991jaTofFcKCuguYfyX3gUZeqKX",
  "key11": "aScFjs7F911X13eoabpBL83QpCArW7pH4YRvfpmLjD1p4XVFhKVD9gMeqFi1JKd2a7GWPLxEjaBSSW56MpgJz5j",
  "key12": "5gQJyGBCDCMjoY9xxGSTQDL12c7h7rstKxP8p5Z7NSr4WHSYxM3ZKo8ffxWabXduXScnWhc9gHkYpesLeiq1rrxH",
  "key13": "4AiL3yicubCsVMKH6BuSeNsxPjphNo7bBhd3aWVE9AhQLWgzKB2NQUmGStyYR6PdTH9HewxPwcghS7CBpjxpi79r",
  "key14": "5oLVCkFsQdNhy6cRGDbwFMPXJUMncguYhKSCXg9UxDMmHKW6rxJuTq26vyyb5HZYwwn1D194chf1Mhv2C6tms2J1",
  "key15": "53jC5bhLzFtZHuFfAxeUYVCgYLUbZVeKn4q3rHtJU3UBTnSn7PRp4Rm7E7nWKSytQzyEAyhNik2Me4oVHkZoVDs7",
  "key16": "4KyoMscwrm69LdD5sRFu3oKom8MVGgEXcLAtApadWFJRpnvUpqK5Kanm3NVW6WSDSSTiQRCkxY86NH6VnchZiyMB",
  "key17": "3H2YwMSTzfjf7jYVU9hTdd7KCPW1goVR8drek7CHySnDDj6KMgrNZHpF1Ebe3ZNuNTNRRVhyjsN5KrpzXSZmhxMr",
  "key18": "aLNnq3JNirPH9fGLvLKVd8qW8jaCt9QchL29ztFzcqpWoZ4TE1FhzVZAVPa7qipRhzn8a6uW9Jk6MjMVQ8ysnKo",
  "key19": "2nou2kf1X9VqydU8yTryxJy2RKAqJzaxzY15buZ2cJnYM5f3Resz52juBetgaNbFRBq935NmdRYVnhJjpyExtjED",
  "key20": "3Qtv8xzAN9KkW6WuGWCRTkMmS2TLAtcfb7KYyLFpR8qYGgrrMYFzgES1mgnwxYGsdApGQ2vZgj44vivnpPkA6trX",
  "key21": "5Q2U2BTRLYCS5JvNW3dmDFb2Rbqf6YuPjGLu9EMMvxkd7ypL85QW2v1LmHgkg3PmjHyqsuDvJS51ngeMs8vPq5N2",
  "key22": "4c6LfHPiun943Edrd4D1Ruj5uE3PADQ9wnvQWv8deMKcvN3rVPf14mFhqEuU2CTJ2D8rPJo5cj4JfkN7T8cWCRSG",
  "key23": "356eRN3zSNWRA6dH32ofvwnhr6BJVrizkuXkzcYnZntsvZLUoadyRur49bgG4iKnJetZUNZbd6LW6shLV7ioabW8",
  "key24": "4bKrA2eS4hD6p9BEVB5pxpSzJeRf8Zkjs44rHvB4qVFCSzABXS3wBBiG6B9AvDJbbuWiQcnzzAUrLfFk9UQdFAas",
  "key25": "5KTjz9LsgAwRH5cMLUC3Nef4VwNv8rWL7crKeWGLRchKa4QM1Po2s5WVzfi8gZ4KeqkvdFF74dkCtVm47ckkBLsn",
  "key26": "Zh8ABr9H3PPJZ9FUXJr7xZPgN9PHE4XFbCUxxofAtK13qmEyc9pXRZ5i44ocbGA1Te2Ldknu8NYudrdwoVkqb3K",
  "key27": "2Nhosn9HxnGzYpy8xDz6utn3eLBZiAKK1srKyjU5H5w5jj3ZZQzMTFDLovVpE5KEwgSLmEf98CASq252Tc4q7FaZ",
  "key28": "47qP9NuFVuzviQLvhqUVJiGkx2jsMD1yG4XizQ7TNKf3J6UZbFpnAy5vMj3A5AgjYPjwwUVpGkCXfkkreQmcX1Ba",
  "key29": "3PqtsuWwjZMzah125fDujF1fKatACo2dc8mJ1JzXh1eyVJ3YCjLhS6nYobTqZxQdBWVgtNgppFETmxCcgFCqjUwW",
  "key30": "4m3Y4t37d7edEherQomGXUusaWgtwdjLwSCDjhJGB1pQ8nxu3PVfqxYxddousDnCH5oPhAQneGD2z9bZ2oMUKUZo",
  "key31": "4aBSk1sppBFTTaBC7AGYUFAbfWzBsaD4wtjLcvkrPQbKQMVoCHV3Gf2EwrJtUUX52yS6AWCtrxEmRqTVNgp9iu16",
  "key32": "4J9TCxDcpNDdH7VzrYaXKMVb6z9A7y9D4n3ayGSCZSy1vNZH4QkUiKje8Jbosbc6nzHWgbPy3RhU8swLYAr4vUyi",
  "key33": "5tJiPzZrqqGRbvqWMfAewpWTVF6vEYwGpv3AYKwwp55DSjm9XiaAiouxN3uPc9bqf3YJbajU3oCGSkHUW15Gb4HG",
  "key34": "5jRD1HTN55vzaRPbSJJbY8ruxj6VzJkCNS8bf2ortJGQxXpMwCcymX8y4AUa2oJr3vD3UUFDaZr7tq9DhrwXANaN",
  "key35": "3Re4nDzTjzrn2u9KB1NF6wjHz5LrbWjyxDaAwUCTGEJnTyxm8ZwP16FTngbaEu6D8w5sSHsaCaBQ7WZq2Uwugm1J",
  "key36": "3vHGzfrXLiFk47R5TvJZyCJ3eA5wBBwmi447D4qQNJD1bBde7UEJiyTeESeiiTVud6FMiXR6tykuqu6NH9jfspUQ",
  "key37": "4L6bWUMpS1ZCeUzGP9cvt91rMTvfm4Qa3oUSEk3uGmvWacxPLHCLHQ7UtG1wx2mhoh78yxh4aKU4shoSUR9Km7E5",
  "key38": "3PVzqPhhnAmF9mnGF2Zc9GMBuN3vbLyitVv9S2Z4MyaQoa1pAtCyt6pJvvQ8GsRBZQ8R6f7apreKCUPSri3dxjAr",
  "key39": "4W3HdBLufVPtDSe7f4qGyjSHQed2uSJAEsgocCUxMfshomN5qX6B81bFZHagpS1nsBYndmYup5LnYf9YGSL4Ehwo",
  "key40": "4Eizpcc5MsRDJ6o9v1ZDeLxfDmbWjB5DuuNMahCp68xy9PnUAU1bVLhCRyeyfgrQqhsKDzKENfp3eLWhZuExZUP5",
  "key41": "2E5eTngiHNmxcu3snUuRcNKWapaF4EC81iHZ8CaR94q4mWVtswNBA69UCLFQGfPVySnma94uWnquj7JNV6C1H5Tz",
  "key42": "ANJhzVAv73GCefcZ5tPKnVno5UhFjhxKqfKTEgK8ACoYZrqJCAn1n1pYTUEWxATuTzRhXucqmBRTfjgRr2ADSac",
  "key43": "597TeCvVwAnCNbtY5eFRkfDfdEiQugeiZBhYimyHDJPiasZbUkzbgCq81SS3UoNFvYU6LRmECaaj9U66S4PdenP7",
  "key44": "KRdgRvEYr76XzzMzFm7inFez6f9H4vnmfe3Y3YNwbVgZgSKv3Af5EcdP3hnpgfsSrxiu9Mo8ZZHBxGoSMctvAAT",
  "key45": "Mp3ayE2oqL3NX9TquCnHDUvR9RJCyZwB5bDv9Dc3uA5e7TFboUYpYWUtYhazdGxMqURNTKjohagiVkLG7mn43zB",
  "key46": "4rqRXjLEPxSTS49dy4gmwtv2hyScPUNNPoTVwat5bcXnTGNtGFxDKCoMzaznok3i5hqS9S2XrehAqyvAxeF2zQ3K"
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
