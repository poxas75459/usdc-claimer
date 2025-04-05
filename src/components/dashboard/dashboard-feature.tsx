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
    "3gTfLErk9KNb2NtqJJBN3tefdDsDJDs5j4NvUtczqKgEAzgti2JcwTYJ5VEAo46A4FjCpP2XApqwcVSECJLJ9K9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FaaGQimUq7ELxfMTCZVUene4QEBybMRZ9whcoQrC7wY5cT5hxqN425AUcmFFfy9RtVeNmNTcmnKuZWJws153f28",
  "key1": "K5YKMLZ87MiqTJ1xBd3DyiRVwijHXPFzWcJRECZjqrV9tWCoDdHtNatDVLE7jsN5NPJ3z4FfXLc8XwdvXirKYJX",
  "key2": "5kCaC2KUCjRkTUVcuVLoJfDfUY8Cs4iGzDMnYAtZNmoHaLsJJD6H4J9rMV6wNHDxuv2dRWvXZCWG2neQxMc8Z6qS",
  "key3": "3rERdcuiwUQni2ibLfPpcM1vm5ryHY7eXqDPmMhi2tdumhxD8NDgoNrQeLRoYy8iLoYwhGZ79QYGvXL41byU4r6G",
  "key4": "5dEThENQzjodHAPALDFUAeis3gV7ctkwcb9THCvSgFB2jqMEyvAGVZ8T59YswYaoynZXjN9Hi7D3NfnncLawSyqf",
  "key5": "5QJpReAcDJPf7wWEvzQGRGBJWNC658QJ1kBsNsRAyYjqyQzC1tDqai6wBmRgQ9hUneNUY4Qu9Vr4149vvcud7961",
  "key6": "3CPakatwgbvG4o46M5Poy8pu6FsBYcwazeJk8nXRrAVA6iFA7258aKeXynL6X8gg8S8w548LHDXKo8fgPjJpox8m",
  "key7": "94xoFMQAcFLpoae9pdyJZQJDVVnDXt3D1cJHj3EUhXVb6hArymDgaV9rHmZ5k5DKWdHkdz6swnK5jLGZxmDdSqD",
  "key8": "39bX6SnxvfX2v64XysjxPCDo4zY9iePv44zgKgSUS17gYzdnKmomQFGC8RD1tgaYaS1Yfb1w7YiE23tgin4zdz1K",
  "key9": "3gWRcwG5h4voaBqFsNYcVyptHZ2E9ghMokKdtxsdoX7Gp3aeqNkMEpZGZZ8TDGoN7jsvK96iBHgDbjdUPF9iot9h",
  "key10": "yYZnkZV989bUFQ6wtwsgo3FpkM1rZn37QZyoA4Ni3vrvaC88RWEzxx9FCbLzhZgY3EjP8v3KXdEnhFLsK2vF9Hk",
  "key11": "wzGxn6G2GqySKbHAi35bD148j7g47UYbCGYxFUDv2ig8AuRnH5Vvgy1jBbwcRDy5T1cBUAPdYeNZGtyvZp1Ls5x",
  "key12": "Bcxm5pBUcwWEkxmfvL6xfXhVzufgG6iJ73Z6YKaH1c3JhcidGkSXtZ5KcC3EZZdrjSWYgtcD57XYWsrNFBeJkgV",
  "key13": "5ntxxHEaVc2oKRZCgSsPxxhgJP7QM5WLR6Fww1mkAbbRAyMCTnYnrMYpyrDRFqG9S3hvYZ2ci1DCn9xvjgmC9qhK",
  "key14": "5f8R7SJ5PYCsjwhRbKjxDVYTa5P9ay8yux3uw7RXyH1Kca4RJookQRzByC9tp8TSpsCMdf92s63P7GwpYcAdoG5R",
  "key15": "2xx6g1JqojHpcmxuokb7sC5nN2Vv9DiL7M2We8ueBKJPizSU2C1vqaF67DW9X8tNB6cDBdT8q73Rvmnj6dj3D7Ah",
  "key16": "3iFwuDSRRc2LyafkcLWDiho6rpZve2pShQArsFeQa21gcGQkApuSFrF6mU56LdxZrRGasBXieMFbk3jWf13LDW3h",
  "key17": "4JrY5XNDJxWy1beYFuM77916iTQxT16q1TqfoaASJewJ7FMomT2UxgGEaFz6rvoqaVZ3zxcNQDNSGKE7DydPMsLF",
  "key18": "CEU3rbEaCu6uQh2qs4Jp8b4ZNVLCmW3fVddXDThrxHMvrMf1wq6tJUDWHCsj5gAu7HvsY3mQLKVaT64tsiqPyo2",
  "key19": "4j4kHcxnqnBg35r53wxzyFTtPKW5CoEPbnSSr38iVKJQe11U3LLB1rQpHAEUomeTF7NxRMRNNajytBaABcHwWSpf",
  "key20": "2hZiWNNtewcR3QDQGuFxeCcf2RYk7Gvjy68mUue8cCPutE6ZPXWhJaZHbzNi92X4uqdJxkYYCfh3XZoTsJJ6s2AR",
  "key21": "2dnyYCiAGQpy6SB2iXvj7nScmV8WC2b6sVYG93QDNtn3r2bvUXDryKvm6Yf9UnuTdPHYZXazHL4uKSgpRxwPVBUN",
  "key22": "5khfnhuse3mAo88CwfAx59kE9cpEzyXGLEWrauXMwQ569WkJfZXvxMAXUmqC2r1jw3PRcbc7KD3Rp4BxxArwGgAd",
  "key23": "471hKnRWosNLkgLhCMX5WXhss59eLPdVkhUtk11aKyEaMQuP9cu2MxJT4NbixFHMzfifLmGhkxAAks97mVUK3eZ2",
  "key24": "3QNHQWPGAxbyy9qkCdxsth2RFwXJ8QPDWWU3LUAbHtbLr7dC6SVC4x5FtqBHzqXuFfUBaJTEaRRyr9aHyNyXAeVo",
  "key25": "mSh1jaiFzVwFkaCQdPbY4wujhUFPCiyGR3w5Anoy7q5YQzf1FAV2xXKHkW6wz6G5VvPoY7umLE6fXkeqZ6RcMVb",
  "key26": "5MCv7RNqrmUe1MgE44KzzdN6vMpJutbJ2oLWpb4SSfguSfwHuksaQ1hdzt3HK4ChdbLSQQzgY9p1NFPJi45rUUeV",
  "key27": "21S6WT5VE9V1TWdj18KRa6WnfqX4bYHLRgVCP718wMqbL2kA2yz6PZdiZpPxYdHSCrfgMFHR3pEkUqoo3rHDUW36",
  "key28": "AGoFNpDVMghVWJQ5RdaUkCyPUCtsvsJTrGgzvey4J5ndH5FyW7DgeUZQC1BGykJ6tjGUdq7H9K9D3rjSqCVJAUF",
  "key29": "2DA8DgbsMjRoKRsuxaJQyZhwoZrohaHxmH3vdeMGQYkPzjtjApvFiVrx1FiwcfQNyGFAGqLXmtKtU293q7bDGabX",
  "key30": "3zE9dzWTfrYU12kPDyVyihEmr2z77R814PpAcDvSQWCTDS6xSk6U47WmJvQ3e49wC36LmbXHJpoMPhm4cy7YFuPp",
  "key31": "3RJmuXM8XqwEPGxfGiByVuJVwrAdTASie8NLebP4tPbm4BXi6i3ttmS83pPQJdbg1xyPnfiU485D3qm2BGDwrmFn",
  "key32": "w6Qkh73VZMnTMoNcWeXSJu8bqVk1n3YPz751ztBKP6yXSdZmjVtSFeVe5LyQj7KnAaYTFVvLSixDVyttJHMCJe2",
  "key33": "5dc4qrMWvQDioJdHvu53xKGNo1VMTdmPmYbuZUxEW18F1Mn95hu1ShEXkbNDYVxcd5455o4RQgJeWxsRGdmBnEwV",
  "key34": "3qbypiH7EWUZXGbDt6bpvYZ9v7SzDjzDykDC6tuXw6LZXWSetKVkPfMG8WL79pSnbA2uCEjvEx8mqVbXz1nsiQPL",
  "key35": "2bUmSWyPHSLnttXHc2r9cgojGXVLJevvpuzJYwzUMYhQSsyJVZKnNL3VN1oaCwGkgpKV38m7oTZ4PaWDESgaJdxX",
  "key36": "4ko9jNFo3LXCAsBGgRZLPdodNaNUL2B8bw1peS2Pa3mK6XfzJHdFhAiD6Yq7Va3fn8eXzep2Z4PwSdUqhFWZKAgs",
  "key37": "4rSXRanWx7KsxeXPCGrUCfFReeeBxZXCKN2itdto51Pv8R6xSVTP1UnAuJ8TBkpwEW4e22cn2753G8PLDnF9ubEo",
  "key38": "5yV1E9tnbJ5iXTrGbmC6CDP8WT1FhvpwXQSF3eKS9T3csLfScdbqzAFVKs5gEqJVJvPaDRWMhd6P9WfRK5Ef6PpJ",
  "key39": "5T7EPrQLfJcyH6nxPgSQjyBJPXirzAEZCbCXFtvRDJPK7zx62RTrn27UpSfpc4M29f8B6RKubf1WCocUfy3VxgDw",
  "key40": "u1J5gs6gZ5D9hhM8RJxHxKgR46So8jq5YuGmnBGhk3ZRAzmyLS4kVwfr1S7h73oSvsww32zes5yXWDvN15ZmGQB",
  "key41": "5fXKzsZASQmBY5zPQ3Qk6WaRK5m2fWQZ9L8YAL1JnHCnDkmbDctyK7KQcd28VfsMkXeudyNHcHDR8RHxzieHjbN5",
  "key42": "4rqe9mPnV9UwE1sntvEmi9FGxCSLSGUGsYPjgghAbdxsMT9ZRkdU8wVCZFbKStdkVcfSxoTiAasFrA7Xz4G2nB6y",
  "key43": "8j4hoA7dd8aUuR1viBxKYyiqptaeagZoWZ735Z9VtbmisYTV6Xn3JT3t2gFbrfy1v3iJMnH3guG1mv9YnexvZAZ"
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
