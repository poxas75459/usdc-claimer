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
    "5E2zEV2Wsj2UjBBfuprChCRcJiM18VJbDnaofhcMT2uiQ4HtPM1ASdfjqaUNJVZYH7yfNtqBdRBQza1azGgegQgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kytiYNPA7QAqWuLbR3Nboz8fUGhfkeHi9nwJ8rDMFLhCukwjxhQPBH7u326hCpqxzRQ1gyqduq8Mm8H8mjjrnP",
  "key1": "5aXBN73VEfmezhgvME2hHGDTVwsEdw2DT46EjjZKiXP2k7adxjobBZne8EqTuxApXpQ4yifVSYtU7LiBXDXgYQ2s",
  "key2": "3MjdGXyqjaLREvr5ENM5osfgkyhDojwSZDKU3QoNbBgvC4amotKZFDpxs2hBTKrwxn5EK8LehHzXccNUbRoz2F1K",
  "key3": "2w6z2mFQUCKJUVWShoG4xLRvbn4m11x45eb8bAURYFQtKuy3GEubX3vVK8MuYDutTAMS1G49FiWDwSQZaXsCAJa4",
  "key4": "5DYXUpYDcz2y9n6YMpRQmFhXe62K23scwiLUa5b77VAiFHr3XBxwPBhtwKa8SwGqfDPcXt5XDZodBamGXczoHETK",
  "key5": "5fSQsbzuCEMzEGcZ84tU3jei58Yfnhadoeodq8HCFCFdt1GjQu19bptrtiFZ5FVUU4BcrfkyS7KgbtqGkc1sSgQu",
  "key6": "Q9rX5cUv5v6fTaZU7cD6mTnwojjwV7xYE7G1bdrfyBDNpG8q7oXU3n9YJvgspTNhhGrseq1GJ5EthrY1LpZPGYy",
  "key7": "2AySybKuE6kfgD9PejMTUPt3KJ2YyaM8ufZYBA5uCFcWFc6m5EER446TZhXySDV3agmHvkkrzWQdoGNYr4bd9dr5",
  "key8": "s4GFdhrEKSRnuYGaJjqzLSUPZXQPVxBqjuE9mpsouFRuRH3jgawC5izPD4283nMMxr7t3rF6e1zz2cop8u2BDQK",
  "key9": "3MBCMntZT3U3faxiSPNdy6L4qtrB7ZwJeG4zLxe39igk1JwT3Zu13xuJiHmSraDoGmBCzRPmztrtkVhBny1o8o6L",
  "key10": "5Peib6npaGfRrKeX75VdSTbBEAbXmsjUA1EJ18SyNfNRK9JaN3AXsnrBxbfHwuB1DrUhNDSyMamGdwqpzeysXmQ6",
  "key11": "63EZ3Uctq1eZetnNhiMbprE3264fmTxkm9a2RAL8ir8yn8uc8Ex5FvgByqcutpiQ4nhff99W4u4eYCEtVwApnWCa",
  "key12": "5isPojHyHMjcP7Q4MQpTm9QtyumgHTcp6k2WvJCx6v9PmRNqzjiNpWWkomMyaYFvpZ2sXQrhTnvkmaW2rBNtvzUe",
  "key13": "4iN95srBHhdLpThaoTGXT4u4DrCkMtrThqcS9c4557sbVdrD1a5C37qdvpZAsLakK34JVXcrWFUfsn1ThnhabFT4",
  "key14": "2YNZHjnhFtawNDFrKSmCj6kGMQypp2riUCUSS4KJDQAB8Q5WCsTCr8VtqTeDfbfB987oWcYP8UX2xJCH4yQR48fD",
  "key15": "56UySH3KYQLVvgyv3JJsgcJmaUtBLTHBusiZ5RmP93PYzzUmJwZiuup2Vy6Fe28WB4XRMeiVT9ShWFGxFqteEJvQ",
  "key16": "4m2jtGEEDQjj39Mn3BG6mk3kN36x1Fmp9mLUG7sbbeRsqG2ivzeBpNADmw4v4Y3yoyRjG3BhT85fH5JRHWpdfye1",
  "key17": "U4LxCFmdtBgq8vaeXBrrGMfacBuschgZU2tvDC1vyzi7qhquZoceSprTSWoaVirbWWgqhdLZ9aupMFPtYcJNMmn",
  "key18": "27EWx2vz1zENr3WnzmYuk5rqKAyWqMc4t3qjaSBGdfsxps18ibex24jMgn1j9RkagF6cxpAKoF65JpKHCtZ4mfTT",
  "key19": "5nJ85SquQtf56oUhh4jomnmemXfGazVGyXyHnKcKjT2SWXNLMg9bGk3kiRY6sCdW9NXGf9zkZVtTc3ZeGNaxhrrc",
  "key20": "5viz8mdXsgsnc3cShXV2roADeemyZRgnKJuf9BxYxXaDK64omzaGKAmFodypRKVaabGttDs3BnNMH96BAdyaJNca",
  "key21": "55NJHd9tS3xRwUcFS9jUU6MPmNMcpgf1T8CyLXEqPTnZUHYkCk4pP2wBxNcJ3RmzHHKvUFaVyqYtLRJf8oNqGrF9",
  "key22": "SjfMH466Sa4RdkWcpkxxgYQqkfwNpUCCaFnFmvy27uQjkDMfdmhSBkAstAXNw5ihyLtWUxutsfZc6vRipCY9FTZ",
  "key23": "3dexgWnWgGNVdyRVFSmHC15QEQLxdiSr4GdXhJhpAjxuRLZ6ihpjkaT88Eq8PJp8P1JsksAhrAYmkUbJz3ojQjPL",
  "key24": "2G6qszXuWwz72VWm88kjNWd9tFBabVZT9kYM3v8V1T7nn4L4BrUzLufFkZSakUoM1LXqsSos7KmaV6WxVPpHdgae",
  "key25": "qQQZ8faoX9sdK9AJTCaULP7rfFHJC7mNmyh4kAGoQLMsqr4DSVHY8hi7UTEPvRpU1NfoR7JvMdNAXj8TVmdkU7Z",
  "key26": "EfoifithYA4vF4yXWzx7rLsJZXgAFP13Q53JPQLmSuGxe4143KkEdD2d67JdvKArR95Yp9oi584AY8BN818t8RK",
  "key27": "3WA9aZKWfj9skWAmkPM94ahuMYWKkH9hsFuSBKVDu7SH1gbmFNJKKMWWZBLyixQvSmrmmmfrB4ubg4Z7uk7UGYp1",
  "key28": "4HtwPScvPWhXhHkxCa8CRZVRH1DM9oZPMhiLKtPFx595TDjVJF6Dv8tXdURKErY4dWj3tPRPuRT63QUmBDW8uLiT",
  "key29": "qwXpg47oc3vQ5C5EGphLcbmDq9mEnQt6TToBVABSYDXjr7hUbaub1nUatMvHySaiykii5cthGXx9sbSZpE2NBUL",
  "key30": "4GA6Q1qtFzdLKKEYhK1RKAj6kTkTxKJZ1hFeFryeqfuDCFjywtwwEes6HLnqJg7P9JZDh9DQh7rzKqJx1tPxg5gj",
  "key31": "2VShA3S5t62qbyGpFcxogDkdaVmhNQCYHUJqRDWrJSpSEbMoPGMqL7Q8bnPm62t5jKEygRCbDjgC1EWVpw2TxZ6k",
  "key32": "wksLV1u49HghDb3XhNLHUZmnKtMzz5GwThubQAJz3JEWCBJuCwwfSDvLv3fCbePsC1wv335K1qyshuvocF53Z4J",
  "key33": "32b8xk7tXdXGWGyJvcD7fQw6EX5tYktcAUHDnFmqJPDUKxKxZgoNtLthyyfxarqiwfLfVGpdrpPfvAgZatuWpH6W",
  "key34": "5wwoRTWiuKeTKUEbWixUQsADmQhVJ4oVKcZFHR7M6vhbAYQUwUyFcPmzs9N3iXbDqXPd2FQBeFGcHXNzuAc9i56x",
  "key35": "3gDAExoCqfm1qCd3dLGLV4XDrwDHidk8z32YMJShehpZfYTwLKPgaYg3wJpfGw3neb265rBPyqyhfN7BKeEVGBAg",
  "key36": "4SHguetSrQLQH8P6JGUYWDnb3LH4t6WwLRfB5cZbkYw6LChNXwstwbgZvhGXMCNGp9BQX4UgNyWKb83x3wSVpNhG",
  "key37": "2d1Q6JcpBqfMsNY4v7v2dfYks2XSKVDhd4oUR1FdAbkLXezx37qNsFtb5o5cxpu3uHZx6tch2PN3VUajQDBLqguq",
  "key38": "cnw5HPm5adJcmpYqKsv5VZVEUoZjrzJ6d9qH5r5fXDrEoRcfMT4wZ9jBzEWT7VghzJYusHqTPvzd9RKtyNs5aLZ",
  "key39": "4PQVbs239DDv4SWGhBH6hAon7SynroAcazbUcmWdBCzMzgJ9jdhdLmmrPhaFrx9ZDKGxvJYE35fTYNu3G1EYc1Jt",
  "key40": "gruHAZNSqdcA1w5Jfuh2cVASMjygXHisD85Q1AkvR5DBVeRW3TaFrLDwSsbgoEiqrVJAzfy78MHDuhjhfgyNrqu"
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
