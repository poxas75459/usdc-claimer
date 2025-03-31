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
    "4WDHM1QGpUE5GX24va67kW3cgqMRT281iroiiFP5gTssjZCmPuWAXLk5Tchr6rn1B1YteqpZFa7fXgmeKw6QKRKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fvc6gh7GaWjUMghdZvxLebJNQGjEhFi9tXdUyjHX3PqJNeTHJEwY1LQayUkGY7pqRTHZ8H8q47WmvPixucQoGn8",
  "key1": "4VdQ2qkDnhULxfxkgxboGyWVtg7EbnywvA47YoTsvwmcmbwvm2ay5u3G6TZehKf36FwB2HrsR9hbEEtuvZc3gWDe",
  "key2": "5N1caN4aHx8fZMXtXpqvrXe4yKF33J96EiUnGaqMx7GxhYJHeGjob94ykpUJUn6jeGRjLnC9hWpFfpfuDc5aD7on",
  "key3": "3vu3gcvrGXA2UeLR5U7Z3iTaCrsGcP8RphdVjEa7H6BLRzHL6HsQ7cfgu9tJd1oeJjBLdK2i9cGcocdAq9GonjwS",
  "key4": "3Y1tcWx5WUQtsDwc4piKeCm9LtTMZdrnXF3LeuGxiJxyDALugqmpwmhXzE8Eojq8ds34nzM3GdF71bWHmZAkqRnn",
  "key5": "3qpC1R87H44fqsm4frrxSYQ9EfYQC45y56Yr4zcmUb1oC2GxEZ6KmyfHZ31nMbp66FLjLj1TRWLrFx3eWQCGsS9z",
  "key6": "4X4gM3CokJxpzYaAKfWUDn87pUsnUaH4FDRk6ZmkWx5aGVNfbf5LawdmyxuMUpKgBoX4UxM1MPkjrqAbAgarz5gM",
  "key7": "3LiQkC2QXfDTqZ7o9RSmz41EtAnsYghzxs39uH3H7u58pur2JgLWwVD9UcGyGGiLLBuUszP6F5M2rYzgGrSQ4bRU",
  "key8": "3q1CKVyUt42vvrkT2Za2fpvFRBnTDATL3p1tHTssm2CnYf8p2jo2Z81caBBTt7mhMfi1AW9ZtsciHSNrKmtDso3c",
  "key9": "5pLezFryeDCXSizp1iSSxN2vzGap5WqnDt7EP38HP5ggZW1T7SjDxMa1mmUuCD8utwa83PP2SFvZ9HNXc8ephmH1",
  "key10": "4TRpwXV18ipMPcDTsZA5U3imTfeV5sx1gMCw2CFUowT2Eqk31BMWNcwayrWKvc3tssv5gwEYCdmNLA7oqxAFLPpu",
  "key11": "5ha4SuqthL1bKc681W5VgBSW9wg28YT21ZjApUKA4VX8Udu2EASyWZoYYBnd4j1TPLnXhsK2XjfbNVjEyMykH6vM",
  "key12": "5LkJ8BGRfbpAySkDv7zBmQbq6zUqa2qjbxC8xuvoZ8HKQkLHM8oFhzzCAC4o6Ag7FWCqHvmTApBYEC3o7LvHXzih",
  "key13": "2fy22fnxijbrji5dBKWQMDFQ2AXJhg33HiQvRYE3avHSZs8neMsNkE5uG2FH1gd25kYho8KojQo5ytvnyZGjjkb8",
  "key14": "4nnVpZmSAMUp8499xn5MTGqGTXvdPEivbs1wH1oGpisuhvUPy5YK2SNAA3K94sU5ywoxGYdumKLGhkhcwKJ3rkHe",
  "key15": "MkNBFvyAJG59HnpQTrfpTYWL5tgjwFkuF5k9zEMTabEnVrq9z7ntLNHmLfyKL3v1aj1WcNvYxtuHG64wTHAZf9X",
  "key16": "3eBdXkNQE4EabaZHdbvBS6pLknA8Pm8pqB4ywSPTWzkuQ15N3SUTiPnzq9c1PcCH2Nm5jVUBA9XweSieCzvDncTM",
  "key17": "P2LfMwNY8r7efgJPkxKLirgxWCJ4LLaeH5bVKYdSajqpGUSA8aPzncshNEPQC83NhEJhYvHsqoDv5nEy5yBEMBt",
  "key18": "55ErdRdDe5nLhKVWWFXa9LN4JgS8GCd7o4z9yocbze35fqVvPM79miC5eDcQc3brWX2v8gP56QQZUCxNucjVkFXv",
  "key19": "Jz9z89Ja2GHqsupku8fNUyV1Ktnah6tLXe3hwvDjqa4C6tXoQBjEMn5KjxrRSHgUgaGvAg7iewbTUoNGnCm3Dc6",
  "key20": "5o3ymvj1ZCp2EnEpPSim8vd9U6svgyaDHWAP9ZH96ynt6ej9DaLZNXCAmWzgaVbKwYTximM1cNcD3V8SMExYmaL4",
  "key21": "3uQfFeavHebmDQuAWiJEWcxiV6wApDmAiNTUGJ9n6YRA2bvsgxnJq1AaUy27RkpMNgFJJtgpfBzWusZCe7gYHJzK",
  "key22": "4ZmCMNd5toKXsyhhENN1Ahtq2yV8gE5NQFZzz65ewEXmKMkVBbbQ5MfMbMKpYo1jrLZ7S7XgRB1RWAyEYUsUcqje",
  "key23": "4usqaxDtUqw8Nq9X9LkuUNR25U7qLoiCYjvAeWPC9VdTsZPcXUqLyq5w3kidfUox2JbZ2vDjCM4A4ZvXeJvKzJVm",
  "key24": "63cVi1f6NJrzizWhPE8Uat2KE5UAL2iBNsqHfNSxC25NEFgb2nrKmZirydVXH4HC92ffYF2S2AVAcNZTvrJdJvUf",
  "key25": "qLJEYvh2vLVFshYqUgjTt4hMx5cXLCGyZtXo6NBPfgrXA6ZxPdLwUwvydH8VidSakqeB9aSpBvJiWD9DHwkCzve",
  "key26": "jAxzkhoGCHSaZhfqY8SbpTHMH2YFmpWnHzBZV3ZjKzFLXnCqC6FnHQRwniLo1nuiRZEobD5GzAqwgzyWGQarRWf",
  "key27": "5DwzgnJGHWuv1XpvR6twajevMnA2JP8WUqyDR4nsNuDxi6LiAj6nTo8pdEQ4ehZmNu55NyDVvZYbomn3HNnywhbj",
  "key28": "5fAvc24eXxAjaXUhH2NsRh72bPK3gMawf6wR8gLA9KaAGsapE7Wdt47QwkHc6Q9k6BjmX7wBTisAj8CzxN5tTzih",
  "key29": "4F3J3wRPe9uHrZMFxUcsPQQiU2PfmkDutcyFU54TR59LtjzLgrjfAqcrJXWN9FAQGsD2y5TgPx2oww2zFzduDUPa",
  "key30": "49bj1poTsYq8QRzzySBQtEUZXk7cJdHqQQ7pjEHBSgfnj2pC9MRAsarnXjVXEpdjXaxCKWBu1DUsd7rVajQ4JaFU",
  "key31": "4o7PJSamBbEX3dpYVY6g3jsaNty4L25XqERKJQwcR4ModFDwCbMjzJYqmTbQX7xyw5SQ4oy4L8mrtxVi6yshqm9b",
  "key32": "ax2jDpGbktHMUD6zwPE2dZ1mQAkkwcbbS8Fi7hdr4axrnN49kBj5ef9GnjQQ9YdB6HcH4rXB5FgCV77SSC1h7c4",
  "key33": "5MKqP6emcTBViQ9mozsNpsPRodTXoNQmHZ2oQjxNKprrehe3Tw91q6WrnpWVF5sQi54AjBv3zuD2HfM87AvsboRs",
  "key34": "3vDBRzndMExD4USEeJhfCX5v7T4SUY5Xjvxt69NRwgL87569MD3G3ohqegRETGBgJkUoQAFJae9xgLdbbUpwbhnt",
  "key35": "5HwiusVSqbqii3mfLpM9WfxYr1tCej8e9wdkC7J5nptUWuFxuG5YjbzzFgULuQdoR4BjjJ3CpPgBjfKvgmtWYqBq",
  "key36": "wPt5K9A2F62boA5nHKFzjH85HrRBxdMvmvqoXbcgEKA6TQvvNzZLE7n2HENLvLYmbgDL4Sqav4oFL6ayJjtYWHW",
  "key37": "3LjtrG66ZaaBvd1LsfRJaP1A3xfcvF1W3gFZjdFwKU4bQQKk7CEUx2Z975v62AzEeTn2zGxtQTRUCAhYpmPP8D1Y",
  "key38": "2sKYxP2grdRAFXc4YiDEyP6JNzUxrXommnxytEasLsJW5rn2jNR66oZvpwvUiPiXFQ5ZqgHLBXHt77eC3ijzfDeB"
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
