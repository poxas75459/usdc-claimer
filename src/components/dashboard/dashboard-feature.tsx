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
    "2HBfYaDaFAiLGwxcLZpa2CfYH8MVoJ1rpcKh1yrZot1u87NPhFJRiX982ajmTyg7TwBwhBvrvxqhQEHTCxNhzyzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23q3pLnXYh6VCpRPa2mUBd1FPdeF52vPm14QCKmyPjbMWzfrcT2gYw7tmxBNvDvYyaxgedLydZHqbcTgjqoozgpW",
  "key1": "yJMaAwHUqxxPKoc4Ej3rNUGRbbsLVqvNirMCiiKvGtQfFeik59X3YoNi2cgXisVboiW5jUFdJfhD3vWGYxAmqNa",
  "key2": "2ojxGnxzcDLWGChBRdnQ12BeCF7EEFNr5DUB9bQK5WQ72cqSiiHb5jaWbXvqjuVixS61wUki3EaQoC9fNvRiVMiQ",
  "key3": "3ALwvxQRNE4T1HHMWbh1FTGt8aducV5ofn5pZ3kYbw5RvkrKAmXPERaEH5Ff1Lm5rJwZEJGDm48ib5nmH6uncbVr",
  "key4": "3wf6WngzxvVERBNK4XbzURxLCaaxriCJVTynzbCjjwiDysjXKGPYw6WGndLhFVA35aqCAt6WwHrtpFjGmQB7YqX4",
  "key5": "2yVU7etZiFphK6Uka9Ad2ZUzznYHERSungfN8bPTMKeJeoxJkUyVwXMRF3iiiE7W4XoBaxfPsfw9Cn6AXdj2XwKc",
  "key6": "mQYazN8ky8osDvK7CYT8VQrBuWDEoQjhJa8PtmL5fAccT8eWzcAqFnsNwBZ2DAbUB1hiHfyMBoSr74rpGFDkx6m",
  "key7": "3FAyLzzxdfMdLN3og4gpdGscGkPbqBEQga1q2RKqHeRSVYvKfJXwk7pgvBExCajPgafEaLeuM7e1vasEQMRzbGYB",
  "key8": "4hDnCrqvkLgi8z6xAeE7KxCRk67W9H9NsHwsWdv6WXFce6nGgREpvX6jvU2bRHxVSk7AamAAveqwC2qka69MkCaR",
  "key9": "2GQ3gd86zgVsM89yQfe6AoDwLH6nFhvdZKVPhvLRTXQ8cqcmNYCVnKAjkwd7zsDu9FTBXQjE6smkLdP1SsXFCDWJ",
  "key10": "2CzUjgwWH7WsVhnZe2DmizatW7nQJZYBuaxF6T1z5LZKS6C6uBXZ411tBmoNvtKiypcHZskdQoPy164byHg4RX6x",
  "key11": "5NXCyEdrouw4D4orA1SNbqrmmxdiorQmBoEvK9hF28vXc95fapp6byL7KB5Yzim11dDGBoxonyLFtZpk9AzmbNDL",
  "key12": "4HYMget7nX2ZjXZ5oZou24RvYxRZtXamN1SMAKKjAwmNZSQKdnyFrrQcpnvrHGomJHNEt9qFcczjFCHZtEBh67nj",
  "key13": "2qvDcw77BeSq67dy2gCNARULPwVotihNzQSkU4yV3fH8mdMtTRiJv79JYmM4E9pCYeFmwuuEv6X1MgoCaenwwq6t",
  "key14": "rJYRnPzouySthZCY762pjrqQKRBkz6CRbT9rFJzwyqinEUKXiyXG5mzLFKeV4B2ftrBG5T6dU9kcfnq8BZLTSPk",
  "key15": "FzcLMJ5PwhSteoXo6PRr4GPtRHhL6HsfZqeCWsRD3o8kK4osBzE7qjgNq5R7m33wN9YSivcYBUDM2ht9MhuCgCM",
  "key16": "3AY7zKP5TsiivVHz4jvvRVykyftrjT1egAPQqsrusFYqgpUp9jPfod9hdN7sisj7hucPwHmdt47NGUa8Rb4zfsYy",
  "key17": "358FXktSzmPJs8tWWX1w2biqQV9uMJdm9Z7v25tFeUvjAnVEKV3wKrAoZvnthMs8HTjjtDdbXDEDVsm6wsEn29gC",
  "key18": "23ZPPvRLgmfcMJB225uY44oYtyynhikkG541gS9gmsRxYoSmEsvgtcqSubpYsiUiRvkxauT4XjxUvkCmAJTk7DJ1",
  "key19": "24pVBnQDb4GD3Sra3dpgiwZXwqYV4SzRAniMcngsGTagP6BFEoC98GRJKjeb5SkPb5gu9Lv5QqJP9HPBHpUTmdQa",
  "key20": "4rBQVEqF84WRp48pHrPWbnLacj7dcAqLbMoRmW7KAyNCPrtp2WYi1u98o7JECXFuy4N7rkt1EMYUfAg5MH4tB6sr",
  "key21": "38Fgx7z51UNmm3NshWEfhgPErT54qAoT6F5TYU2M7xAJ9y6VBBJdY3vD5ZzkMuD6Qh6dpzDrG8T2yzgXwjQkGtSE",
  "key22": "588jTo9aBVEnADUDU2WMktsJgyuC7a8HV5TS6AtPJn21D7cDrz9vdzxbuHvWLcWBADYgVACLUjtVNjFjHumBXq9u",
  "key23": "3VieHSjUuqLiF5TRLsdPZ777kktdujZkXkdgtpDJhef4LAihxc7vUXbBX5FMFzeHoLqNGv8iRpjRDBqfrgKWbe9T",
  "key24": "2AwiJA1wDAQRW59uaqtnUQSEbBey135U8xHyMCLcFBVRpH8ttHDwZx4YXhPzbQFMHbZ8fTUTcsiUSDjxPevKoYYf",
  "key25": "3JoNmusvmp3LkN4ZJUKtA6EXUKF5zniCp9xKKpUwZh465aK3R6HHn7e7TW4wVR6RZwj9SGyAH1bzpFkJQFoU6jU3",
  "key26": "2a1KoKgWVCbxE6k93uyiXX7WGxJoxxYXxgVNQF52itWKVcv3iuRVnJr8kr2XyWzFBkn1QjkkkiCotH7idhaSMwzB",
  "key27": "5c4Fz6tFvbG5pU4FT3eXrXJ9jhk1yVhF5ZARTLohPNrfvDgSamuVhFL3hbe2efweCmbKCJT62M3YHEGeWJ3NqB52",
  "key28": "66jpeEW6pYJ1oHbJsmaqFbcPEaJ2r768HAkYAUghWHdPzT7wmpXeToFtWaWyZ9horbqzm9zSyb4koS8rKW6n7W2a",
  "key29": "4y2VSWTVhzfW6X8p2EtVBZ5792FpRuM2muTs6EW4ZgHht979SWLiQYngnyfikpWuebwJEEfL8naZDG3iYZY79z5G",
  "key30": "pJNJbgmmUYUAXB7tGMVsGkMPhuBnYWDHmS1Z79WNmZWivdizgFvBwbb7ChxTXSGMYyRJGfH3xc1yMMkk3FpExcf",
  "key31": "3FoW51JRkWKMR73iAxGtp9zLhy8vmzLbtXQf4SZSEqJ23abdMDmpFUeQCHEVYSLfxSer8TdWF4Ld9JbDYFrVrWwH",
  "key32": "9ykNbjeKkz4wJnZrf2wdWAz5iGHdjPEBhvYxyYwoC8nmuidc5TP4VW7DktYPigYcfUe5oGYDrYnk6e2Mg2GNhVK",
  "key33": "3b1qWNF34bv2cKjihdbSZ68HbCn8UJDrqnXkD8xTH59yTnBLPszfZwgEhaSp8V7QLY7ihXG77Sw7EyvE2XVs4yjs",
  "key34": "38U1kaXjt9qB1XRxrhJTQgyQ4yVcm8Zxtsz2GzGxjoWeoeNRgB1U5wFhpb1hTX2S1ctEXD859fLLyrGLU4i5R4pf",
  "key35": "4pKgLJsqHRNZGEbMRAZpkaR6a7vbbB5JruG1iq5LyN27zdTUkP1kToqVhre2fZa7VPDsvNGisXiHKnuxUVf1YhG1",
  "key36": "3bWMF6px2fUFSKWuV5T8quHUVKs3Go3nzBzaS7et3jtdzL5VrPFSKgXMfoBhdLAbiX2oooJeK3vq6hVq2r9t1msu"
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
