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
    "4pAD1C2ALxNn5udRvMr9txG6VgqsfiAn8iMmUiVmMFmmScSSCo5KW36PMX6VEGSVHxCipMUmaaHJfpFWE7bavvfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWpLrGh3Ud4LtrjhweteUQWLviowCffVr5VJkm4LawyG9HukbYDSp6Y1gGqMu6ZajbdBUkRLWB5R2w3ALEDzit8",
  "key1": "MfvdXMVKe9JQrUH96rgy4xjHBBPaJxgoSPPNAPrdcg8eiKYLEr827Jg91FbfYnvZakr7NeKDUQ7MHYhZ39sePCu",
  "key2": "uLR22c1fL3xoCtBKmvfZ5RdwKVDe8BCacZJcLAnpm3YEvSZsakGMetTGY3un581sQQUbq49kMSLNbqWk4RA5s11",
  "key3": "5vXAsrhQtrBegNB8BaAhSVEQwT8xjXX4PgxgXQep39zAQ7XruRHz4gPYZwf99z1sbBmYxbg2we92Vck8nJqMVfaS",
  "key4": "5S46wcV5A11EBmpojzWWhmopyN14Z14TCg2rL1U1nZBtLaiwKQzLRPMzsYQjxVgncXm3TYBnfjWb48HDBQsszFg2",
  "key5": "5FgtGmb9zn9KYv8LJSkvvjsGYJLfgbBfHC8tpUwtTWBunu8ZTT3gohS92KTuGJ7wFwTjjYvhoaPzJoQANCo4s7jr",
  "key6": "4si9EtsFNSiS5qM6cx3nWJoxcVwS7Dqit8WD1LdGvwhyXK8vS8eRrFYhsfnffH8KbzFPuEUoJQssgFfHQywv5Pd2",
  "key7": "5S5JJk821YG22bet4g1YGuLAuhuUSen1cN2A3yzQe9DcLGgZxnd8PXZyRxyfZaj6payeE3gQ68xGK6UDc8q6FwFj",
  "key8": "dUQEai4PDnJQ1vLAkz3hkixMLcrsMw7SFH7KCGazEKNspdLrF1JaNqUF3rya6hvYrJie4P3Ge5VouH4KYfBJbmp",
  "key9": "4PAfbBHnBKgHCFNzAGMEfLiUF2eBAiyjHWfeJoJZAYFZsbjNiwaTGkcWbvgd3wRKZdmZgcuwqvjZTmaQRTWwLntn",
  "key10": "3BjeLETFyFxGXB7CfCpkz2uhkRj6hitWM8PxZvEEQEQJc6jRReY7CqTpaP2KhTkcMykSJnVNroPTdxctm6dPu4bh",
  "key11": "weoPDuTcZQ4i16n6m2rdPLfkfeqBS8m4qPZgS51iANXV5yUtSmjbSNAGwfbTxQzD7xpyFuBJuxSAuSvjDHzTBqo",
  "key12": "4PSTU8qTiCnzGXudvtYnPbeC1ZMA6etcmq1qYPFC86BEB4e4X9oW6dzRELYmEeqy6b8gd2xYXdifBhWS2odHq2kN",
  "key13": "5WkwpRJwNkN6abdpwj3WWj4g4V2QrpT2xuaeu7SkdoezU9UmHQDQrTe5z7MduLF9znaSDCnZgmaLepJe3ZoaJQis",
  "key14": "56yWjTbwcJtDhHKH7bo8qwaWj34m7fcrvLdsWUUe9BYtAtBD18LDHWPByKbgep7X8RF5RQsEjwF2cwLMb4H5hpHc",
  "key15": "gAiATjHcBmm7saKPL5a61HzNB9i4Ew1xCZ8jFUpMKthesL4LJSmrjmo8NXWBcpCXFcCKwF7VKU7jMBQzFh7pGWo",
  "key16": "378r6THSkfP8Ddyrx3nkcM5ZwPGsDAzWDpESJ4CKNzXq579oLpscoyqCFxq8TdNSKw2VcPN1VsH4m26RFRW1jcez",
  "key17": "kfGijFhwVcsZngJgsaf9RnnSkEtC3oxpbQ3TDg4ZdgDTXzRK2NkLRgcdsK7RC6ukSogUtDcXRQAK7nUdKg382VV",
  "key18": "PDP8aYb1eNjBdoqMVeKh2GNM4dKpjZ5iP4EyJaF6vu5rBqAMXUdH9ox5Lr6m8dTxFFLjpbG5ufKfvZEwUWeyVr6",
  "key19": "2BDKKucgW5xaQQphmdgXisxNsL7Md3D42pRfevz9wJiDFRFMqkQAKw7B1KnJCVPnfB3NtWVgAENDdYXxURMHaMsJ",
  "key20": "56czHGq5RtY6V3P3dpGKYdD51DgR2nDQwg3GdpgzUuFRgSmau4GH3KtEP1TgDKkvhGoGwpBBT28WooHztUoxnmYt",
  "key21": "2Vyuc8WTmA5ADQNZqw1xoHEBBi8UPUm9Qn4rdctBSSmn3QPzMu9PxGUTr1uhy1dnjGg8UpkHaoFhcgMqEGmKPEhp",
  "key22": "acuKxKDaqMxN8PaHGzA2qq5JupLKx4PjkP7g26d7Ww7PoicxrxqbSKbEZZyik3fvwaw3GAPvv82KAqP84sGU6mR",
  "key23": "3GXWpPCzx3PXU3oDHGxkFozaAtNMpRNTsPicWdHFKuUStXdtaS5NvSE2NdNS8QyYGGk2UrNDXBTmETBv3fsharix",
  "key24": "4vp1q5L3KbriJ7v2853t2ieshY4SXsUj1JqoqgTP5oTgfXPxKwW41MZA4hN1M1eLi3fzBGHWEvzbjsi5EtZpWFvm",
  "key25": "3AeHdGE7suWBJ4LMJ5ynE8BCscZRfsUYNLJCYy5xtWGuLMqz8j6SvNPz1pZWNwgcKMWzwPDt7AuC3jEXfhV97rUT",
  "key26": "2sejHdyRNNQGeccDLE8xoqeJxqudCHfcFZCCi6R3Yr55uraB1xfUKNYornn8hSZ7FqQEvKkNYSHPBMiGE9B4VbXV",
  "key27": "5MDAVdWhf8nHn8e21QGuZc2fRLZxtCtELUEAoM8MDEhNTLX3b7eBrMDGu44eC353P1D1KEVT7gX8nvLTsSZAPDui",
  "key28": "4S7zJuL5XoyVK879jXhXiWpQhiEbFyeh6hiB2Xq2zc9mdxsAN5v8vSqnpy4rcxd1F4cExA3PyVLtEmS5NTp8bFLQ",
  "key29": "EHVgcBddkyhMsPQtiGgxRkGMksnzFfAR6b1bCUqttYQABH7ufvfacn5nqbeGDAjbxZGphA1ezYFx8cqtxYvtKg6",
  "key30": "wXRQCsyRohA1HCNj6Nyu4BPuhHJGKh47r2j8BZFX3wLnUmC749mEFZupFFGKPHaLnSUH4J3mNXtr7sXdzCxKCL3",
  "key31": "3SMw1vXc16ZbUZ4go1AUt1YqeEztguNKtYkWruo4jNLTHtYY7A7ESAGeNycnL5mnCFuMy1hGV4Gy8tCnrQwnrtQj",
  "key32": "52XeUWqwcQ1m9xZNrKa6UUqZ1mkfPZ3pMcuyKzxadkqzGvJAK2TFUFEuUnxxyEMc7ZAMX7bEDzKLRiJnTfqLqG9a",
  "key33": "4mnAwh6acC4MsmjDjCpp86c5CZ6TNYqN9ntNmyNQsrukKJYgTsNLzPMtibEojY43WkYr4b5QwU7KXVdLgwZ4MrBK",
  "key34": "4Bkr6ejk48JQKKypUKSahf3bvj6ubZqLuYxVraCVQjmz5CAV8QKTfSANtLi9ACeQg6U3QmwX5hLc7GZ8PeURJYzV",
  "key35": "3cqFbwogyGFcBQAra224g41JDQMkrH7GJp5Sw47xHxUpRFjSuXug8zbYTrbZxZocZPwRewTtaSso9QZUgtXJKktn",
  "key36": "4WXbhatoi1r3vvteGRz3TDPCvjGB1SGYsW6uJXBatUi3beU5akDv1qF8NSzF6fwH9QV2gxTBm66yDCFvQS94Vi9Z",
  "key37": "4zwVUJvL4txk89u7xcPp8pPsNUpFJ5pjcLoXfjcveq5rhvjgzjeHYx9jYbv7xwFR1YnmdekU7esYmCXibxnnj1hz"
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
