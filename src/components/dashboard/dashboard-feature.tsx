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
    "3mEq1UWTQXLjtg73GwWNaqRgtmN1Xa79X4NEgpQAbKzSXzezK5yAGENQNNX4yx825Lw9Fe5f4Vp2hw4QPXhio2av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZFEVngTE2SbTEVeHyPRBxxtiktgphAqF152NUZgQiCMM4csw1Qnb95XS4DV7Ppd9CiFrKDQxyctWbSjHWnZPRn",
  "key1": "5y8FCcg6pZQmVpbKpx6to4C87sCVqxgXCez7SpsAEuM25TTKdVrxo9sHovtHF1jTMkb53dDi6bS17zTbZsRy7QmF",
  "key2": "5BGfAdHvYA1ewtFyYL4bYys5ad1KCyhM89phCxayiWsGEn1SYhd8PVDpeFQQ76EDDL8jfGRXzUHsqg3HvgCofug7",
  "key3": "WWd1S4zb5aRnrhgMSxb3e6g1w6smvoZkbrCqEwLfdueZmSHfExsj4YLmCqTzVq9GboGSmcsNZonG8x7SL9A3Wch",
  "key4": "21pgpP2kreESKaGfVUvog4cD51v3Dk4qJpG9wvfmFwNwZRNFTRJHwNt3AdQeRbLTP5zYCybmx6F9pKj7vze75YcW",
  "key5": "5ntTCRL2hy7PXk4SV9765eJDthFaN3fMhEgWUEA4CGPtRh14Y5noCjBbAMC91mu4EuUF2H7SaYH7k3A46jMxiU1X",
  "key6": "2U7Na5fXrwFsRLpMNm4cebvLEA7W4nprBGtMJW67ix3gUdvzqftYyxRHKZmfawntajbCX4a3ue2wTMLkidYBiHr2",
  "key7": "4i619YDDULxzAJZT1aEohBmYvVMBNcYx2bvDkeCL3aYGJcKvLSgfz3TXRV8GZkFBSS7fL2oDyizEkAYT46yJ6Npf",
  "key8": "31E39nT3jgsBhT9qF4Zjy9zGsvGiSMNJemhP29GYELxceJcSAHFaj1FMfKjxuhLunqCxqQpQX9fUwTyrsEP45snf",
  "key9": "5AcPjzsY6n8bVLtgz1y4zv2BFNrazCqVnMcUjAJZ7f8TVRqReeQ6hNsvsBcwTkHiSBnHaXusZyH9hNaaUD412Jfx",
  "key10": "3W7JpPc5T7efiyX7Qv7ed2zLJV9tqLRD74GpB1sfzQA6gf3mufnnFpvd6LiZ5AjennzV5CqTYm6YmWkh9vfG6cXv",
  "key11": "67JwkjToSDCKaFerjQYoeAtoFRoPo5KsfKJpHzJCeZuWnj7ERZ6ftdxM38kRVmbyusCtboNgMU4QkVVsrAhxjBFN",
  "key12": "3u3aGe9SSSLWjGVN2FuSqHJpmqiHZ66y8sYZ8FMX8zyTBnNJzoFKsLJCVt4WYivUwQcBhMFZkJCvJxAwGWMny54X",
  "key13": "23qk65CwEgCKjdMxXYVaUattj12jMSW3Bm6QhpvEQniLZTUKEEVnheSmi4iwBbV4n6L6wNGQpVixyJcHBoY81GHK",
  "key14": "2moacss5fhwqgyHtzvU7ugLgwvKqQ5WYqiuvu4tDVASPYADnsQcWmHty3yyqBAUyyXgubaCU4gytUjFeGUeNoqb8",
  "key15": "4exZHyNKoH3tHtTR8UiseJz6vehAPodD29GDS4MmATP4Gj73pXv1CUb6jKK9omL6XqNEesorfhyhd82LajRBGQua",
  "key16": "DRUhJUgMrvMCRZavLUVpWQjq8Czzjf2BQugCD4v1tmu8JmwBqQDJER3FNDLQYdDbggGL7dyU5VAyfHjAdD9PY4a",
  "key17": "3Z4Z2a4EUttyPvizUfTDtDr8oQeeyu81SoaM1rzXNXmpWFgx9JFuQ6eESoZAoAKmsRSNoK1XjVRSh2fSmWPWSJNL",
  "key18": "5CdAVsicZm2GeMqRpqwoH5wLMYV2ynp1QxvjrCqURc5MPJht9PghVVceg8KtgNSk3j5xVJuDsX5pB43NMDajgxWH",
  "key19": "4VSa8YysAC9r2KgddJycrMuNQ6sswyAvPqByWvF3tFce6WHaJ1bnU7dWpKwnm4dfG9CGNtmwrbQboMLj6HiMDAsB",
  "key20": "5SwCXJY4yP7sgdarTTP7hBGFFbYnZgRaLKfafA3XFRQxYeND4tivV3YPKqjvixz7qPTFnVSXQKW5giWB5bPshDnf",
  "key21": "cwfCYnxHN9FJUSHHvhghRJRrttMHVqzNay3wmFdTjqLSwVHfAfdoyzyF1BDrGboxjoqq2bNs9Jfm2pXRfh25JF3",
  "key22": "37nsiz5dumUJCG4ZXSnSxNcvc8gtLvpAouWFqAr2L5vtLLRTDYsuNGJumwCaoqgNSrZLWQYRC5BZvVN93uJ79UGK",
  "key23": "4ze8ppcJG1tJN1bb7xQVX8gyNHHNvj5r3WAZn7FJQFyTAL15SKentprdbXv8jDoUAe4gyZZieSWQhauVK5dvgaUz",
  "key24": "42NAJ43oAWLZz1qwcu4w5bSSeJtQgspGM4RqKF7FtknbrkbuQNBydynM8vhKHPZJcKo2M8uzWaWn71VPJmPzqGHk",
  "key25": "zJTUB9rXKg6q83NyZFXGRYcRF47FaLzEWzMr5CDAUabxPQpvyRJaZjBwKNxQj9HmzZk9cEGfLroRErWWpUxjckM",
  "key26": "5BmhXysd3TNTrMxYCuyKwEENapyF97atNpweeHuc3YNZ7J2kzES942ZHM6zg29PH7kRYnqFnXReb2WeWZHAFsng2",
  "key27": "ScDY74Fc28aNREZynawRCxFU7C9Qrzd18wospt1Uri6xTxmsXCJRf3gR15zxeHwjBESiudQCHaMFi8oE5JJUqAM",
  "key28": "wihLrwH1BeD5TeT4EFJYDaXGexXx9wBgVGTshi7mmBzr4s9hn1EhiBhouXLdFqRg7M9opb1qozTRzB9cMPF3v5Z",
  "key29": "53rLcDErJekAVewCZPY2GSVKUE3Si7u6vbedvjXbfzkRhdahTvtBK74U5xSiixC5NgVakHyKSqvy8pXprYxFnzYj",
  "key30": "44XcDKYqpd61C17UHxRB42BMi9YR6LHkp3xL16JJawRjqyH7X6nveAinwAAVQ5WHABJKKGymogz4T5J3ufydELJt",
  "key31": "PEFWcVr3YZjpZyQ5a53mV6qNJyhkG6xJSdWaezrqRHK1BerCBANvGEWSXuJvSzhvdUewtpSe85J3vU4QYo6fxkr",
  "key32": "2cQmUdrPyrmk5d8iEiJzKyaxMN1hwB7LNQ6wbKJ7DpQNgHqHqsYBDFtFGkeXDgUpeQzQVknxY243XQYukVKNYFDR",
  "key33": "2HMgt26XL31sawJmJLGsgBgZe29mibqd2tEU3wuLkeSgV18Zsq82vUTmMK3PqTT722KaEda1uMdEYjKFJ22aCDGp"
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
