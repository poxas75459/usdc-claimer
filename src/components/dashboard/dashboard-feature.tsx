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
    "ff5z1HvPbGHFtmxhMCjY2KYyjjA7QxMRuNFJgpC4XMmHgfSWx2vgrHaBefvv3BvvQwr6RwyKvG88WTzbx9mFP1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SEUwvZKaqgCCaq5eLoi6wENzE5ce7e6jWvGeJApxydvcLCLqCmDisP7VeUkT9dQ8VmRjC124nbD6W1DBXPHusDp",
  "key1": "5Jdwv1yeWsS632s7YhdUTFg986hM8FKPHvY7LL1Qhv3JAmL5K6DSzXV3ZedQFMvTw6vpPEQCAKrDpVbYAChTecoa",
  "key2": "5M69HcCDfza6VhEKGZeb1CZeAua7VANUEvhLZs3r1cbQuWsJYkiVvM1v8ztKGM9xeYCn8h6kGqB33sgzg2oGA15q",
  "key3": "3F71qBt7ATJhBcBtzwN6GCFixPvfqP1Q5UsyKvFvqYSpteKvDovSDmcS1zYXwRByrXhvxMQ3gtvsdE7tqfP4a6Yz",
  "key4": "X8aL85PNgqc8tghQE6N2C2cWgDEoHdXgYrzuYpjUbEYd1z2PHPkEvCL7dUsjdNmcnFdCoJnRJS3mq69agF2mXsW",
  "key5": "b3593ovYoAbG1i2vrK41NXxLdLsLAPinSjvcB1oUGxgnUNrUMVPmFxC3yT9oaYcYVmzk6PPXdkC85xSP3XeT6Fk",
  "key6": "3eEVuugBAv2WrAmGizRaWVWfUMQ818VsKgcCoarGQjEfrggCEDFwxiQzr89FuuABetKtDSnRD4Ck5fybmtbivWeL",
  "key7": "UnF8wCoTJ2tRiTZgSQx5RpjEdsCSWtoLFLwFAgYGc8g6V1JsYiM8PUMdc6mVBZtP1Ve4L4M9sKjBfmw36Fr8USC",
  "key8": "3DwqbQwLg9bKJ36f2ftCfaNWF3jGiY7S6eTCZGLtVnYwTb3RL4MxDoq9fNkmbSiwPN6sGBxh8JxN4qnb4vjs3Wn",
  "key9": "2f6yBKBWvo6QwCJ8NhJmUu5QEcqnoShMmFbqcohTr7q7W3qELy3utfetJN8DfMaK3T64Nm9Qd4cYxyK2sW4unm5S",
  "key10": "39g9aD4xrMKGH7sHw4UEdwYiAzrfypp8rT8XpLk3XdQcH6x66qcZyww5uxxX4GUETaTkXLqoZmEeNRxcujvXgEKP",
  "key11": "4aD7juBszv4Q78NqYe77YpvhfHDiLdzpYZd3mtagBKzPHTfpq5MixfcG9MAovdT2mMbQAdJHBEoH3rMA4WaRXHuC",
  "key12": "47fHV4uoXxPABHznTqJgkKraYdinPgoVc1myBaXyWpfxUuKsCMYkCJpsdcMD3J1R5oHG2rG8ueenW4yXUQPMTwE6",
  "key13": "2MTJeGyeSpE2gPncayQC3QkLfYU874NH5aUWtSLUybwQXL922Tk1vHcSesogs7v9Du7BdWWuytBJQjsCfLnT7R3g",
  "key14": "5BTtVMyCKERTCX4Eu294UUUqvEXbvadAW91M4NLDpAtH6qKRg3AZQ21t7owS4NiKmFTzbVDHxTAJttdiEbyi3JXH",
  "key15": "28JbkZ8WCjtgE7ZQ7XUEtd5QsEjkHfqPFjihCvNmgT4ByZcwxZTLRnhLBUHv1BWTrZwq84syzxauDytRTWDD34re",
  "key16": "4MY9D4WqPmFvS5guNZtpvr8DBgyzXHk1hLrd1wAB6nn22ianA9b9oqMF4Qo1ajwVAfKyoZ7dTkcQdy9MHBB8jufT",
  "key17": "4msA5VqWNxcSRmuHMTaAXRB5z48VaL6V9Myd9VR6N9PtkeiSpSx6sA2r8sLTNf3GxMxaDq2gidsp6RgaLTwL3syo",
  "key18": "39cZBAHhbTkFSRY3GksUvKL6Hm2GSgxeDxrxgFE39vCoxuYupgD43Ho4RYsKZmzJ9ZHdfzyzMVd8EKnyxNdRbjHB",
  "key19": "3queHm3czFH1emijznqNfoPJBFBLmRNHtyTLrEGhPM7QS9SpP67hVuaK4yoeAJeWLkDfi9QW6FpxrPtcvrQGmgJy",
  "key20": "2rYWVVMzwNdbNL5kxxAEp2vMSosdaWhWo5q1W4U49qchWobGUTJyhQo8BE9d38cTMmpnpNWqScXMpVQSMJB5Wudz",
  "key21": "5WGsD4BmgYp5YMnQPFMJ3nsi8cmaYZtv6kkfyEroDQ9oodpiVYzik2poSae6TAPgHRiNMHhQ46LRMjB4gqS7sCLg",
  "key22": "67iKc7Mg1n8QLXBMv1qkYPHaLt1M37GZJsbjJBpAHtpCrLd7pP4rU7HVmSSmi1sFtR4targ8o8nKnJ59G6Nt5jQy",
  "key23": "5ejUdq4nVdxeP89XfTCMfW928VDoMmJwhjYmKd9bcLSVPVuMWpjcfwTYtFqRgtPwm63iMdBPybBoPXtT3ZNh87YW",
  "key24": "2P54af8YGfd5xM9kZEw1cQYQ4GRnhZY7EfBbVGkR3v2njYvJpP6kY1wmt65r4QD1ZasTtBXNCwV7iUkCTo9jWZXr",
  "key25": "53EU1fVLJzzbQnfj98c677SrSCBUqBXGGPUsi9WanTNnxwar3URYoXdU5hRteztc5nF5BYkjYV46p6hXaafmvQNB",
  "key26": "4UbdHqihVkvPze5Ffi9Mdu6watifXtKz4MV7Xv5dLefQykiGpGwC5VYNHodjfiC42qHm9FyjJVQKttvxLfyBVCwQ",
  "key27": "284Gph1jcL7wexXrRW58SbHHHwLmBhnUnp5b6G6UNLQBf3ec462sm1WzBLtcEzbxE9mTjRWC5Vv37knd3Fj7PGNq",
  "key28": "2zBhRgtuPqiCyWPPFX15VWddGtpxLPdbHcBboJwxwZFySpr8GjJMphaPkQcXzcxuYNre15z6qp6T7rctUJkGFzCy",
  "key29": "3XeWr6jYfbGvCH62rwQTf93aSiFJ5qpHECaQGQu2BtyTUX1K3PVHM7ao6iVwJDfAzptdkbfx9Kt4iSPg15jNDKDV",
  "key30": "5AHzQa3rh65kVnDZZy8jYG6YsRdEFQwGuExyp5ApdHYupj4CsEnybbUBQ4GzbDnsU2wBpV3se28etcNM9ySQbR2G",
  "key31": "2MFce8kjmoKCuh6dx4YHp5CxGGWjqWARTLYT1maHKq1NETdu7c2C6M4hkt8ZLSrCnL6Z6z3crGvdTnHseLvqRyAd",
  "key32": "DEfy3KwZYMP4svhWpMn3n9BWHs3yBxF86uAf4rVGyfHjR4fJuFK57YzmvS7Jqv4mVHGfgv6po3UQXQmPjN4VxVu",
  "key33": "56T5wqTZjVpfpd8N85G6MamtyboT7cmnaUfbYsQPwwQ3jtcwztQErQMM94s3PKbJshERLo32Hhj5mzkYzMGhvwLd",
  "key34": "8XnCamDEKPSSmgQQCV86RcQkaqquq8NCQPw3GjfMjGkoEoowNrNLcHJKrxSkJ3uzHnUCnHqHq98v6vivsqsbHNv",
  "key35": "3eLKwDZ8neuwe6DDVkdUGrkYwWyjfW2HpfDjctLrbcvs6XZojUU93kQdrKrVT2ACmKEiC9tNoAfaM9nmwka3BELC",
  "key36": "4BeJBWX5pR6PygLB51dWPisv7ek7frTFgkK7iSXd7yGCQCBpLfqVwsxaJXbLF9UGM8dEuwJAPqeYLUZ4ra9TLQ1Z"
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
