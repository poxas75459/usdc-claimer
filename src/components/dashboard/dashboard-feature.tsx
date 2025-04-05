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
    "2JJ5KP2JdpQPWNeHqaPsoVJRqqG7CH6rEq2UaqED1Rt85ssfVnTMUT6ecHjuWeVgNce9Hfad2HXWZezaTcW5oYEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KP5ZX31XrRSXdHhRbdjNCtpKUsWZRegdwMFmh3J8EQNJyNYLNBZWWHqZPoXwQP4ScWkKevAmEb7p8cu3WPdLMts",
  "key1": "61QhYSLkvv8g7GCz7P4AGvuNbvd3eKaZENHt36hdMHJHw8xrnWFbQK6HRG1AXBBsuBgjWBMbGsacnxSi39HJpHi6",
  "key2": "3bwj7fAAMDMWeKuPs626yyWwnCjFvWPohPHxSRe6BLEwv4rTtKYXsDeajeac711zwEbN5hUMPYV66k4HXs9sKjrP",
  "key3": "2KNb5JKJwvZVjmVDEitXHDh7x6KtQ2ikEGtGisegu7dfbTwx9JHZwEDnBYfLYBj9NaKp2KbVoB5EuQBjWJQcrTT9",
  "key4": "5RF1iQAb1QfRVnqEvg5WAu4fvmDSFM9yGDGqQY2hPDf5qPhqjbHrdhoAumpS4rre6yBsj58Az8EWCP9WMYCxeDFM",
  "key5": "gKXekQgnSiCGAYAHHLXNNLAV43abK1xqKuHWqnE6RW1gfQ3BJv8FQa5od5RRaDUfWwYjLufp9kHDVUyEDSnVLsf",
  "key6": "58FqtyrkxQnAWpjMTzEfDqgxAEL8TGqnmipiSQRHdbiMACkuSbwAyDBLk42L7qvwmUULdywt4AvM2Wbk8aDkYsLC",
  "key7": "2gpcD8tX2AKLKensoy13nShHS1LoSBDJny8ZbAapdwXS1orvgnRwnEz7hYXJLyzNirjKrzL1nwuhBMbVFXRXHZYp",
  "key8": "2vMWAWwDsji7FGrPAXCu3dJzoGotG2JvFQd83p4NabKErUqChJSuwRftAHy5e3unYL2mg9ntkEubAfiDcfYVeUv6",
  "key9": "4cZFAWQQSaVVntTYhZhKGQBy6ETixtNtDhTXCkAiTaTCs7e6MqV1qkigQPWris5bywdRRseDWFcFMR4HHqzeQypF",
  "key10": "2eAE4XZGpvaLCqggKsLZVvVpqPjjye7ounyWfmcuqsMLmY1tTKks5EBypZtSzphHL8rt1yPTxG4x8nKhVtZ2jjAm",
  "key11": "5vd4DtnnkhnQNxjSJpFr62B3H5rfLAD18ofTsTD3XbTiRCBCu9mehMHLPxVzzyQRcqN7jqRXihpFqri5gUkZtZBD",
  "key12": "5rM2GS9CgJeqsC4kNfJSE24xQqag26JfwzvwCfYo53TncAUuvQhCxZ4fivTJazKkeMNKMvkpjXeRTkRikcXbToY8",
  "key13": "4T8LUofwF9oYcaiszc6MuRrPRT3XJ2sRF8jpZyjSJVCV3FZuryXbtyJHCCbptNAdbssaYvtqrmvL3kVQo3kfMK2B",
  "key14": "3xPstg566CSP3E9aJFfMVKzZn5MYouBhmfuWx4qELjhnzaPGow8E1PqzdfeM7cU9owj84ePLEHhfLPuzKg4q3k1B",
  "key15": "5vzA82wafmbqjCrYDZZHheswMVvYDJ1HxAkTjW5gRzMoodKUy2szNU4dFidu66x7wraTM9SbzrtESdCaxudPZmLE",
  "key16": "4N7Za6HW4LLpVdV7CP3FJyhAejSMxvRsptpXxghmJV2bsNeSaZ67ELv4uWRtnSAUAknRWHRvNeJ625dVtpZgAGJf",
  "key17": "4uumbhBhVRxEFJwHCXkiKiq8gQsR94K18fDRyGCdhzN9zxFWesx5YhSsSmYWDp9Mm85nKL4wSvUPCXQ8XW1ar8B1",
  "key18": "64mMNiMQE6HXpGWKheA8sREswtsU7cGnWtZdaiiZynBv6jLYVddQ2fiEHairQ1wtvd6WoxsnfYYsNJ3PGXnGVsGb",
  "key19": "2f8iP5UBHsywUup7fgrGAvh67RXvBNiZPNxm8KqYKD4ARgZEE9HrW2EjhrYmpDbuRwyEekBsAz5aatARvpuZqVYZ",
  "key20": "5iYtJ1jXMJ5eMU61xb3CZq9R3buDA1T5BRkgSY6ERBTppTWDwewFJdbEE4E6oWCkg32pNEH9EP5HEiwnTZGmhrSf",
  "key21": "SMhgZecPU7mu2SNe49nwLqHSy5bLp4nuNFADBMdtZ4yMiS9UdxcNoePgUQPxPzQpDDW7D3avkBomeFND7FzgoMN",
  "key22": "27dxzi8hFtgo9EYeEsnGEJhBc3yUjdrR6TaNXeP3ZScPXrrMtxv5P12PamqgynqgCYwEoviNqaGvG3NTGmYnbii3",
  "key23": "44efKiVERtmWj2KrKjgfDFNpiuunuwkXvEcH2x2w7ZKbWtkj3HRt2yXgKndyDQdvxNmiD9vzUTdhjV6zmF9bcT9e",
  "key24": "KdEjjeDyHf5BP7A2LJHguFDHv49NoDcvvEP456JTB9WxDBdtfhxKjPsYejpbkKjPk7UQhmAjC6JgJ9JDaBSLMoh",
  "key25": "LFKD1j5p3aDVdzianwh4PtgevrhQ1YpfzMWcAL9ZWCtJqnCU9iXaTL7fYo8jSjkyfUmNJjHPrcxBY8nyUaKooJk",
  "key26": "2hh6UP4HS7JVjfMndR4ThoLoy6CV9JMV2tPxVRyAow2x977sZxg1hXodo24KvazkVyDPsfbUTgfckhTtoTWj8rBn",
  "key27": "5jm8YEG8HgMZX6YSSjSY4CxaC8oqcM1ikk4yHv56oYd5gFSZBRHEn3FMbMNGF3fdaqVNgpyPLyUAXEvVhs8EPfzX",
  "key28": "mU9kJqrbsV96ugiEKzUgzp78Vkc5V6tupHLaEmjwTXKZLfxF4ECkRikkjPPpFmth5gCzfB1dWa531Nj43PjuwzW",
  "key29": "34ZyuUein9YFS28MP9L9cYYCuiaxYsQFbXSorkZVSwaWG77RYnSvjtKvBSMdqxBqC6VJd8XKi473GMZmuXbvKoeo",
  "key30": "3EJDEi9P6aaYckgC6RKiuHPXmFLzvbt6GWYUPn2Vm62Uzn1EtBmn8nfFbzS4xZJCsG5MgyrA9xFEPTr2U7eGacQe",
  "key31": "4gyr1LjWgUpisMcKPLrKmoThtpL7DHwvgk86Sj7LMdqF1vBoDk2xorWE9ju4QWHcUFNDsiWNk9gazV8nULsFsotq",
  "key32": "3rjhgmUuG9fYeB2yWf99yGygcFaLMHzyRCmDXT7ZWHyujeaWZBLi5TkDTFw4ptEMb6guJ8yCUjNhJTogwADPxXpa",
  "key33": "2Kfery9mt57yfNr8WksJdUvCBtLShHzUfxNR5UK27twiGZv3i6kFxGZCAPa2rVxg2CVArBgF6WMEqySJNLg6R1Nu",
  "key34": "5cYiVepS8UHsS6Sn6yivCHcNfU1rjfvfq51mjeHeKhZXSwasMRZ6k4UojbZ2s17eCcpjrdEWcHnpzpv1H5JYedp8",
  "key35": "r4rP6u2WWhPKQ6QUmMPbuAK4Gd5XJyQPTh8taSxfVsb684NQsbJYeD15JevWF6mx9ms6rsutRkkiLWBvkakgjfW",
  "key36": "64rbcbDhytBvSWh9CuvPZQE7wy5zvGaGJs2GZbT3enLSg4mKhFKvMrsvsJs4jzPKGgadzK6o4jW4XojXKSNGcXph",
  "key37": "4FBA2V942LUyXupBk1SGH4cAkxGV4aq11inVN2GUqoHooLnXCZH8MPBxL2SBDbSdgS4ofEPBBz5fXHtY4a4wcSy",
  "key38": "2Zv3F16MJn4jiQ38UvWVpmraWVUXk3JnyDZNwYcppxKhzsSzKQjzVuq8ik97WcvfuZ2XHn3Je23q11C6yKNKkopz",
  "key39": "5afFZLrjrvL294zm6JTadqsUWC2YWN43htrwamq9F1ekXJq3ETYZp6WT5N2m6T78iBYsz5xjtioMAifXVc221Mio",
  "key40": "48EjbPxLmPXWyr86LeJA2PWUMHGA8ZFUQGef2NXox4R2GKBVyv6bQTTpJUdskYHkaJKeGEYxLuJAwraf6ykhgoDP",
  "key41": "3FJmfnfoGvxDvC5f5X8fQ5BfWhsneyVL9vJJCLBnxVmYqCVcvcuhoGiG5L5sURyFkBVevwYaAfrWQTGdXsHXDN9o",
  "key42": "5Hd8e5W3wJBmfSami3oXqn5Q3eMc2cifvBu6bUPWJtiihQhtqk38vPiq6MzShYnLmjDAEdNUS27CC8a9gQUKnbjH",
  "key43": "381egEhwX7X7KzspjkXQTyLEgsjLUZm45cRcLQxhxBjtuzezwgL2XWRuFnm79i7QGoiLfoAW6RhsmHUi1aKhmoGM",
  "key44": "4s3cVKueBEpMCxZfY9BJdGcDoqhzYFh62HqSuR6MZQunVkfbYKGYTvoSqUiRQ8ToKmrSVLmU2iqrTw2AuLq4jshR",
  "key45": "3oqQ4DLqu1efUwvUhtAX9QEH3YK8sYtoKv3KLqiKDAJm557GezYZs3cVXLb9SJ97m7s3WtawtGDfRj6r7S1UMpuT",
  "key46": "RpaD4mkobVx1qb4U5TUqqZZGu1pvXjnhvcoEwcZ5zabmb7Ka32zRoQpk5oWYq2dFyyY229GM1Mek9hFNpDYUhrv",
  "key47": "5FJd8TYUKN6XnH5WeeyavMpZkGgyBMcaVFD11QpXzJKWBB2M71BMnQDPxCJUsPost3KbDu84q5Ju15rJq59bkhuk",
  "key48": "4s3yqqyWbtzsV5Sc1ffwJeUUvuQ1QpVVouJReZTu78FVjiXrQ4yTAwTUcBHvVBDs9mGcYbxcaowm7ckHpuVLnNLU"
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
