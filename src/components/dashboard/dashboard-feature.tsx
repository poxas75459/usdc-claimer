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
    "4PW6HMGL7NJ3bEiAQWdE2WS1UmNakFxM5PYPo84Z1Nu6Sm2SoK2nQaV9phSxxU5VScgu4RVUegVSmCdjEketFsQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWYkAZqzWizEsfdtCziGZ6TTTjrXtqGrRM2wfPUF4gZFAEFwPG9mcEnXwFPSoy4xRa6n8QgfHtuyX3kexDHSS2R",
  "key1": "5q7gPCBqRQPryq7HP74EdzP9D63RJo551qdh6cFLpzCZr48QZtKmmcNDdsCYcVAwQtxbbyJSFZyqbvFjZAeMPnnt",
  "key2": "3JhEgWkEn3eybrEdPsD8AuuRicE3MXGTBC3n1WdNkGdYGf8nmCEPeCnSF7jqMNp9Giaf6hqddMaaD8EBQgjgnneU",
  "key3": "5NgLDAzYotJngshFihXLWWLkGyK6WPeEBEpQ8zR2Yisceayig6HHJaqWFjeQxzDrChra6jESyPsaWAEeQzWk13Xk",
  "key4": "2kM2FxSxymZPnpJfxVTzSyTA1N3zo4ocCUmrqTpBCCnma9Qes49yvsjg2mE7DtbJcm9aMX1xPEpzxC3nNmzUXGPm",
  "key5": "4PFFTguWWgpebCC12fhKgwDpWJSmrrggeXTZuZWQ7MM1xwhSy1b6hvdcsLL9voci2zDp6ni9HxW3m2M9CqXMnYiF",
  "key6": "61S8ee9cyK2koXXKoz2y4xWYYk4ojTBMiPQETNTNMVxm8srNRNGKNrRyM3zgDuVq7FDYjHwcy7HCLUFTLXFyvCrf",
  "key7": "3sMJg8VAfuwpnZ6oEopjukaFTGwEvKhcGCyhPQwTMbfGXHVxehy8apzu8dHL9nfpU1PHGF3mU1WCrQWc3Fig5zMM",
  "key8": "3BMxuReB5tR7hTfBDjdn2gzM74ndhbfgEfGzQ5cNUQNCPetzXfyLvgqXrypYviSs6mfpgHN37r6CJbsQyS6fEz3L",
  "key9": "3mnm2xFEAzcuU43keRV1t2Z4wNZPegxjtLmpHm4CHya6ZtRhBGSnHna23bDnfLp9wa2xcafTcmqPvUmryPakKXAs",
  "key10": "5ibu7wohp8wGSw8wTw17nf7s7o7gz5Gt6Wikc5RcAHnMsmhJG2Z9j9dPtZSmnUfYXWWMN1ZvLsVQGivq59DfXYsg",
  "key11": "35zJwWNxJaukPWqMK84qaXM4KgBvvQShy4TqDHUiZBfMqD9ikhC6DaqkNQQNXhawds7GEMPUg5izrqfjpT6RSnpK",
  "key12": "2CFov1boqWgFmvnXMkhLUhrYm3h4CzDiuMh1hAHgZz9tMiMU8mahAphWzyoc3kyASbajshfofbZz2cq1u3FbuCVb",
  "key13": "47zTfiaySfuHMcamsWa95wprvubeAXcdtLt6hRAaiJp1VwBo3ecagnFxFLNdtAQyhuHE8bscGn7t32aCbA25Watb",
  "key14": "4KJAN22qS8kHHWaGNkAiBUrdTyu8GURBQukUWiATkgeHPogFL4mm97vrvwJfYbtaJy5uUhAnBgruxvZNpsnFf3dC",
  "key15": "59wuVmUXvn2JbB45k6vBovPm9wVXQgP4pcN6vx7wXxGefGs8g1Umm2RXUbiS9rezu133bQTMde4ZD1HGdgqKXHx2",
  "key16": "4GTrPRWfPynDf4nA9LTuDj18ReNvUQ8HKbrJkSd1MyhMUvenJH1cL3CmrFv1eEKLSBqDL1NsgEycW3RaXKYhrPMe",
  "key17": "2zzLkbbHrXy7Gin9M5TReMV8m3634KzVsEqLphwGWYLJUJaRXaTt2t8WBUADbsMghc2BvG8ss1KSJMNp26krCA2j",
  "key18": "k66Mp1dDXThgvE7sL1SbBEgnNJpUTUvv93M5H36fV6p9kHy34PRttdP9cWtMJPKwgJiUmGqB3kpqs8p1BBrP8Hj",
  "key19": "2SAcQVYsCd3qnWHgUCUBLuVq72WgyyYpJTeiWbW9bvB3r1Bq5jiHxZgVsvya1P4Agrr5ir5prUP7HC2ose1kg9vh",
  "key20": "46rzD593YBauqJEHNkyMZsTej2Y4CDQC1sLLqwBHaaBx6xoFw294vtvZRMXfzHjsaXRvZ8LWJpxmmeEfHXu4c2AK",
  "key21": "WCkjKpCvgMbK88sCCBW6GLZKBMNhfjPdXNctGapiQBMP1wrcjXSfRr1BqiaMcuJSYTBGqpNyQiFtmnbxrngpyHe",
  "key22": "21VckKHPfo4bRyCCNHMxVjM2KxdHWv1A5jRcSAT8Cvnn8iS3cwHHtqpBXH9fkQ5qDhHk6tY99hNiFA95THFadaGy",
  "key23": "4TF3F64hiXcc9vqUpeXggnn3gf7LRUThNConXkEHk8gsQobx8tF4jEepJvARzHrvnyaijkZJozPkonjvk6NfkKEo",
  "key24": "3oCJSrBMT8fDnVWVbBatmk9aK7G92su3P2fCrxc1BM4qTYFa4oaeysAnqhrqdc3WP1c85ESjfY9NAYFYdPvaMA2P",
  "key25": "5t5smcBvpvQgb2muGyoZAfSBHqfEpujyBMXGujEh8miwKMQj8h3DYq5hrwrJNismDDzTiNgVmUFJvJNe8KpphiYr",
  "key26": "2xfcyR6Qbsvs1HoLCGvLRyAWKCRNL51VNAj8nsJ3woUGLVfiAZcXCxgfkcernninyYZC8nN4mqEZX8RccufZPrVr",
  "key27": "2PkqUMeStHu9xBxUwUT27rqAQV3DBWFgUt4dsJCQLVc6hcovvkaTFL4h1kiWHSLLhvg5KdFPrf3pYyhFQGPQkuAM",
  "key28": "uRjLx9Zcq6qoY7jHuvBTgpEQuK5t4qH3jGq9WdsFWHsPui8CHvp5ARKPAWkgQPr4Jbb2SmBmAqw4kLtCVsk2NES",
  "key29": "31Uc6UPukwzEyyjciK1GmwuDixC5ma7G3oW5voBA9jGaVt1LDVSMonwQuquYonCMMTLkjgkhdXUMsGauqwbXGx5z",
  "key30": "3XgNAPmqbjTvL2FxeohNcEAwqaGrMfRp9xxRfKCt39XKoAa73cS37i3an4hdz2kDHKv1u8BTZp87aDZu93X1upVd",
  "key31": "Qt4192d9CvhabmWBCCjKHsJz9cTAQmd5shx4K3KLxx2g4t2XtE9cbhNzAQCdp34fwdt7svwn99JdQh54BcdMbj1",
  "key32": "571yHx6tksmmXvzAneZ6H8dqWqhLJZaewSeFva4QeC4vczSEzKeuBaseV89Rxabj6ekGR6arMvMhhMpbHi4VTjmc",
  "key33": "32xy5GSoSGvwCxmyY4ibG1SmMV11DY6xqFtuaoVo667ZmPijsmvaVfizgSyFWEZgAkbCU3o7TnLPPm2FvJoMKR6C",
  "key34": "2heEePX3TYEmCHDpKku96F2SQXq29MDCXFrsR4KVaKFKgrFqjdBwWdtr2QYwkrC2Kj4CuciR8ZLiYEiRKxyWYkHS",
  "key35": "4VtGXsNkmt5DbgKAwW7jVsUTmy5guhVKKwXTh6D3JfYyA9ZbNGMv17WboPBYYpfhFVCh6epVJjPDV1rsCgDMtkRy",
  "key36": "DL3N9ms7esFsHoVYFbpo8TLqPfc346uHXf6UnyBdWN26L4M8V74CbPY7MRL696RJsMc9xfrFMxDJjJMgf59e5DM",
  "key37": "2JE1jmkizwiR3mnXeFMpMw1ohCiaycEitrsL5Y5qGVjFPpq4ZKB8gzRPyAwA3N8YVA53veoQfk8fGcdEvXAxGzWo"
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
