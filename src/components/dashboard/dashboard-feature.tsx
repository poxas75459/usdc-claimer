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
    "43ywfU6gzPUWjCRN2n1PBviUkwuavYgYfuywvUxT4PrwCcH6wdoGjE84Xor4BCtK9rYnSMGBCehxENM5h1BaMhxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7x1NikAzbzpKnEN8t57Jz3VdeJGJe39J9VYuJGf2kfRoX8XDE7ayjRYf8KGutdC3KUh81VBG69D66NKmFroj5cF",
  "key1": "2ZFAUdvN9VzD2X4TafkfjNruX8V4XSt7sTcx27dRQ6jA6m2MUNeZbxEd1NYcNNc6mxysCHaoPWX7xNcA4EpMUkee",
  "key2": "3q78qrfuXb99QTb8e83vDyAvuDPN8x3wh5fACZCEqJKnTDbUFr8fSt5m24JhfgCkit8Kjj7mtb57v6WdyhUfj97J",
  "key3": "25MYrT5c6wZKE6RRho8LvJU5Bg7brpJmNEBpU797Lt5TRuktdh1PR7sLLA4Dtg2VeZxVfmpxTPUFxn4e7zSEL1kH",
  "key4": "4Yiq4g348Cz9t6BpLbyD4TpM1uEPC7dGfy3Kkoirog5KGcrRzr6Pghb3xckeKmmu98e9YLduPzNoQ8QrngszmfUz",
  "key5": "2T2CV6wj9nmHBDFBNS31WrjPAcw8wRMXFtUPEeQqUvXrhKacsswgphVWytMu6faxe8DEuEiuxrGa8a9XG9HpTKgR",
  "key6": "f2R7Z1RNYJG4B81XdxK2cgBZA6jtNB9mPBbNLfEoTkzR2A2tUAsucoexmgFDdQM4izJudZJmvjrfnz5H5yzuub2",
  "key7": "k6QUDbdKQuUkquDFUeWHSMNnw6JWoUPkdatsKDhwLScYbwgXrV5wMrWENGfdX7eMpG6q6STrm1PQgHjaJ9fR5xt",
  "key8": "2nGu3JXe7PyquEkcdpM2Y6q52Ffth6jCQ4QEHwojEsrsGaau3y9jNGCR625PCYfKXHSSPpDtknfEGW7ZtnP7pQHD",
  "key9": "3A76Yqhzvv3mJk9MC4Uy9sF7K49ShU2RaHZKp4Gu2ZXN8qEK8kE4N6P4W52WbPZHByurJUgB7zmxMaUMkHWQPLxx",
  "key10": "WQLPpWE6Tv3gxDM5MFyo97NWXoFqZNZi1NEEWNCfGiQXYc7Q32Cc37k8RXKZcf5YhmCiVapiUfF6FZbK8s7Q26t",
  "key11": "56ZYi5HQ9AMjJvMBbgnc8DW51ovAmDDpUcjkW6zkXd6UvZb5RS4s3J482cPGrKX7fv5vzAL9RCWXLPaTzguvouBP",
  "key12": "5Phr2kUphADc4Wr8FWCghogpdL1CsARCWKd9FajJPEG9nEy1LSPWGEcMFpyyDa7xtrJbwELiusbHRhCKcx9CsGnM",
  "key13": "4snCA1BG18BC7s4TxPrrT5z7QJ5haihSZcWzdWCa65ibX5RH2P8ozEiDERLwzbvaNM1phyVxVKvdEBXCmSSMfYf",
  "key14": "4dd7w1fE6gCDpDUBEeBBYDWsB1y6qzbavzZwMVEYEBzwzu2moqpBtuTsD6FibC2cwvouPKc1G7jg1w2P323M8KfD",
  "key15": "2zYmpisLwcVoNf9EC5khXuuxhy1xcS3DJTk6ctaZdQ8oP5ETrW17uTmeWYoStSmeq4U7pJpXHkXZtbDUsQTzfRC",
  "key16": "4ZSxZgnWZL2G7zpyULvWmy7LhPq4RXT877RY1H1dkLCkPsLK9G3DP7RJYPoDzptnTcAjQM7j4vPTaxpjLAoh1nFz",
  "key17": "2E27KoucJSN9R2M3YfaWqaRPB14j2QUVEzK7JABu753pEdqeTe87HaTjKuisD2k3pY14jk6ovFMmNyh4HVvJcGit",
  "key18": "dxhCYRWBD8q4i3FLR1KTv7uDBBV7e5vx7CBCikfbDmf1eQ4zxu5npcBFn3xJuTaetikRSUMNUDA5ya2aid7GzMb",
  "key19": "3vCaKJs4HtZ4fMbc8zERWPxMqgVULVAesvpn5geJijTpfxtLBz4hZVbjoWiRqN4mhGjhk5DWaaNEiZT6QxGfv1oA",
  "key20": "iwZZpUJ5icbEA1cRscQKt5XMa1UcNtpKt1G1ToTaTNzDDY4sPc3CtycqWM4YtH1iryGtEuiuJJB4PrM8mwoP8Bq",
  "key21": "BW7fLhXGYUJmJyi5ZhMCkXEHfSzsWAzMKoTqGemXMK4nyQb9yKRjUrWmPnzj2B2kxi9Rhou62HkxGq6orhfrerp",
  "key22": "4UjXtsTbJR5oFFrFeJcL4rzTGRXb91hbsRPJ593snS7LTNLxrX5eTdZcAEZHkgTGH5JzvcTfMMnuVTWiaYDGC8PT",
  "key23": "3FkUgEwz4rShDR3ZcJG9XethjeJVBzCuoPvctdthWTYvp9JXYaE3AxvdYMcgMtsaBPJ65pCbuRZYNw7tNRDn2XCB",
  "key24": "21ZEmZZHTe1TUhGYzzCxwKVV8bR37NvUBgRAExtNwbCZe3fhDk4qSCvQep19DyQTGA5s5531Php6r2LkRRrRY6pJ",
  "key25": "oWBgDjnGh3fvwCnS1MxTps9f7Yy4GhxkTEaqhewDAPYsb7BA8P4cYnXCM2QAVCqFEGNUuo52neMQxxJMLQXzJsX",
  "key26": "62UNP1rDw9zX6vKzsvkHksiWYizyz9fKcWVsW2mCSzqbNFqG3kPaXLQumZHM1gPn6y7okW9acEhy9cEdK3xEAhmf",
  "key27": "4X6UG7dX7MHdk562fYZRSgqQvnYhFeroHFH71t5y2PqHRYVAHXRG7i1cqCrh4cAUa6ewBRk4o11jAtbom4HiF9z",
  "key28": "5hxW1dd3zn3QXmJ3PWuvjF9NFaRe5YWzc5DpB4j53Fq6sbwqBrSP6EegXh9V1WPuQAtaA52MMVmL99tzdSnsJfGk",
  "key29": "59PmfwJGzW8vdGAo7KeivbY7t8pGijTTXxjvzSJNiDwwsPGXLb9WXMzDjd8jaWSAAHksdksR9ZizQbtECsLgo3jE",
  "key30": "7fYG4BnxFx2L7YBnik5BjgoT91htSWbuXxAbYUGyRG7yHkNhdzPLp9f5fh38TgPEdc9syggjLSJyYprY7mMqSfa",
  "key31": "3FZSmsaWceAJuRoPNe8UWXPFVK8gEypoaFhYHDTdQEJ64rQNxxK1MCJt6cRezoxEW3kmrJmyrjAPQnTUECkSmPTY",
  "key32": "2npkDtatzL4Gno6jwn4uUbM4aXzBGA5wt6iud8Ng2Co9gNPdrmSkFnryk2yPriAugGkjxqMtA26ddYcmpYbefbhh",
  "key33": "4vRLv7oJxsowE8qLPhw6bUHNx61QH4HwLNJZY8kRNWxnY27AcSPBp81wN6DDK26TDrmD2isuAct53VRTk7rPA4YQ",
  "key34": "VqZVKaawyzrkFwYnSEvVpDiGEqaCvoDuY34cLwznhBj5CZygaySdJBVSrML18iy45QzPST8rbUNEGVeyjDYrScb",
  "key35": "3QdpYeuKvqiyWrBgb4Xo4BHwqugqZSVRfb7Q5EjtzgJRh57H2bS5a7e1swx4a3Qus4v2C2h59X2Nx8GcrSAUKp8s",
  "key36": "DWeGZggQvguLrd2teMZsN2qgMWxKmDGQKiwNPq8YTDvVTn3ehDwxXKNBNJ1XvZgbR9ZM4NBr1LFbahVGN617Aaa"
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
