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
    "5bDyzkCxvWWJXe2kcoTmwcfv2UHTnQR4aHuzuswDbw9QLYcxYgM6BiycLFs8iqDDiSXN5PeHQKubQahCycd1aL5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79cJZBZf16CcxLsUZXB8ccpsd3Xx6rjjeWguFGVCExvNYQNuEsH4JruwRAaegLZpmYiTPS64cPG2CTyDZVCFejr",
  "key1": "3eTHQu7zXArUHQKqXPMSaPC2aStDGBrcrHKTavZgaUfUN5xRCawHUvotXCZXPhXxcJopni8jL76RKEritqVCvNfo",
  "key2": "2ZWo9CdEo8CrKzvA1px4fXdwAccxn55mi9MpAgkjjC6RYGCxjn4HXDAk2bukaDLL9tABZqBGFjs2CePs2z8uwLWL",
  "key3": "5CbtwVzYFQcdE5juz3qgXtsVTvyP5zED5LWficmspFbt3CTiPa5w2aV8D8kGisbQm4nDgxaqrTGzf9SCMr1gYBhY",
  "key4": "5NWy9nwryzER5C14GEDEZ2Bhuyj8AAei4UnZJbHci1r2kmzTQSfXc3bYYGDcUWKTCFrLKQokrniURkXA9kCgiZRc",
  "key5": "VMA5L56cML2AtEzgwoUPSwQbHTbAYsNPmUjbPUzctSNPVpGU3HsDGLgX37xMAveYBuUNtsj3zuEVox6VG4ikxAR",
  "key6": "5v4YgPQyc4Dsu8Xf8fYSqsAxb1HguZMie3P7AoLAMWp8hfJ5v7m4QuhJch6QvUZHSUeMUYKJvNzzy7wEHK5pn75D",
  "key7": "2kMZEKW5Z8b48hvnbXFA9DCQAm3gtZb7QpbDdrWxbM2RqFASW5xFZaQ1SWQqARJe5TTvfGAcrUj3iUkMS8dG3Ae",
  "key8": "HksWuDAFTn6iozELMLgCGYEyGUXk2ahijkKBAKSCB6mhxCLhevZytqBmZ1sp5YMRJzqP6jFZqvuEbTx8TouXFGF",
  "key9": "NyXxCLwk94iJEg7uS9XvyQKPMzxJ9PTXG5B4bXnv6gBcuedzX71eTv3k5KPVQoJe8UfaufY6rNb6hKtD2GRmMMe",
  "key10": "3Fj9QESrgmcsUK49BH8z1jRNdLCeNjReSUb6jCCheZkuxJi5d4FEgY8Bz58vKP23hSqF7vgrkc27iyQJc4xYLDDG",
  "key11": "5AeRymgGD2kBnQNmCKwyxvuouDUJEJaspt5Xpgrc1CnjftjUyk4ZjCh1JYeLxQcrQu9hV7FN62xAFw2rzA6BQcc8",
  "key12": "4r2aph4UsLqCJubtEqPPuH4RNEgLW3mryXqd7ytgLqS4FBNarCwFEivo5dq4dEpS9sozuxfKXSYxKidEpVyN1nQb",
  "key13": "5V3qE1utP1LD3jmwNXLLoVQgBGduR1rT87ArWbttt6ovu662C7ECdVBvnpwGhbgBBP92KzyeGYgQkn6JuXA1EsdF",
  "key14": "2auSyPDnHgM9GGsd6rBFHvrQ1DgvtSyVUeowNB15YsSjDCPJsTxQ2o3pZekyttxRqGSAqghbFpM7tFXGyRabQ91S",
  "key15": "3nqbhHodgUD6cnyEVS3WGHtRNdcFdG5XBaYAhCRnRf7byEAE68xVFoLR52f1roexahVb3aruYrmGsnN7uVy4YyRX",
  "key16": "5TrcMcDDLJj7YVj549uWSjDMs9yy11omj2W3fBKHKApKPJR4XDdzPdWQB7KegFiwwRubhh4B8RDX7W56Uj2GVN9n",
  "key17": "S3q2nogaVHPBFpaC7DiGzH7ZMn6ygFozqakMbJw6FfaNAx37NaAREqGiSzHfh6DdYLnqvKiHUhvpqdcVNTnWmEW",
  "key18": "Hcyg36pd9HUtDdk6uW9S9jEFVi6huskqihrmycXwpar6FsZLGtAWKS1bragBfWbCrqEVUi3qqYMug8na2R1y4mS",
  "key19": "4Fi4LP2qxhRfV2KLZiiQzSkdBgUemwAEot33UGBe9pxtdUmuUuiB6qLfKsrckYovKHQY8n7LzMucZsr51bGQQdah",
  "key20": "3xnzxyaktAcv9ndoBcmt2kVPx65LBuNsoMy8kuLj62T6y5GsASgUHvzmq6bqtr78B8bxMo4d3pzQTLk3ajbxVKSF",
  "key21": "M1xFciWZ1Y188SDcnB4EJKc3zwRXqu4L7DGVqkaKUe57fXyGNcGstouqCCsFmhAayDayZprTwFzVnHZ9GFiVSfb",
  "key22": "2tVznKMoKGrR64gLFehJXHeEVfppJ5nkeLGjPPSif7BV8whp6wyP192CXmF1KkDVTKUaHtFuJgFAtTbH5d8k94yr",
  "key23": "3icB6g4wAgnYJrDzfECfo8cstA6rnf3ZcG6u3AQ26W4HMNq8FQdsp6H9G9oHLM56a3pWEFMrbFss8jtT96Kz6jNr",
  "key24": "5vZhw5Zih6Wb8J7SXa9gnU5zpxnKBaUK5yYvHvi3z8tyAUMt6LdqeeYdC5o5XBcTABWyjWyMnJV75p9VpAZS4m1f",
  "key25": "3UN8oUsvEs1oGNoFKpDb52Fm7yKsacx4hAJaFE7p7pnun12E5VrATMVxL6LT81yrkgoCnehVJXmsG1oZhe7eNepg",
  "key26": "4CZUTExPr1jtbEmvxUmeqDbgYwuB8JX4RvvxhsMCuzmWq9otZsRyvSi2Rw99uq5ZC8vp7GKQvLoeEeenaLMmrZ8g",
  "key27": "67LDwCMG92iNYz856LZJ4Gkxr1cbuGZ2khX29fQSYuUboAmsrPDDkwFooXHcLkSGihEBzXCsg5FcDkLDn335UXpp",
  "key28": "h7vBSCfBEkkWT9rhCq5iZoXcCi9fJo3PaYE1uh6M9hna8th7sA53h7fqjFUguFk3NvgMhNaXDkvjLsB6PZwpDY3",
  "key29": "4xC34YrsGEmfYMToNgPVqovALzXDVCJKUW94xmDpE6CFDddXdV1AuMP641FHgqQnVbdBvXUuTT2BHVCdQzb3A7bg",
  "key30": "4Z35wFbbPDGtTc7rGepuBSVQNjQUmdwmDbEKrk8zsG8QKm87QvSEQqNLLdvCehz1dp9aWqCc5kRTdinvePnAA9xN",
  "key31": "2eU4k324g1tem6iL573dCPyXBY2Ffx8kVooeeAA7dsQR3wrhtBPrLKcXtwU5nvKnf5yuRzoRDLSwT6DPt8dgHAA8",
  "key32": "UB9Zz6fmMGMa26q7fyNGnSQA6J6PrPoP1Yyim24o8sHkYSWGXBixh1YLtUSWyapWxxkQXUHywLNf7g665qqCMZm",
  "key33": "h1pYKYvukY8AZSgrfvNVvYXGS112gjhSKTLLmHuhshe2LZjfTwWjiAQoKnfhkX3j2pF2bRe26GSaeJHHLvXBJF1",
  "key34": "3jAugK7cDesH86bwkDXcn4qF9bx91RenVU4b361u7HeZYVLnAKMvezeS5abs4svKiRoy4NGySabKF9WuFz98WwEu",
  "key35": "5FSDAoCKG4LRjPbBMU14t3f1t2GmiHLWGtvbHofrtxkvApCP4oGATXvEs5T9TFVaKJwN9cVHgVPVq9nhUmVMNn7h"
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
