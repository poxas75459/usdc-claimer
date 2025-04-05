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
    "5K9P7z9brcnruiTV3xLdiZNrWWugnupDVnHSQdB5cXgKF8xiMdofQsRnRQyCicKrmyG8h1zqvUVqocWE3V88wA7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r3R1iTJSm2Etdm1XpvJvn8rM9DxRzxBu2f1GLU3QfHGVFZZTKH59s8Ck2NA2X8KHCmvBgXpCpzm8V4CpgNb5cKn",
  "key1": "5Pp2tkF1nuuxq6foEinzPDMLrKrX4tTRfmTwvWeHSSgsS9DbVaXr7AL3zhqG4fHWKuXN8dZzA39FS1w5uf8L5cku",
  "key2": "2eqem6AbJYXq6MfpfaEP32PJi8YcnQUYrMvX9PkuqChCqZESbEoKzD4ZzBnBvNvePcJFR9jCtSE8S8Fxx4m9q7qU",
  "key3": "3HJrgPPHpteec8TgDRdJXFYhVnZY7nohDMAbQhCXGKkmL63a13u9k8gdPYLvGCWtJDUsSTEZYP6aHk6rsvdk5YqW",
  "key4": "4qKF1735VmK73TDZXprAZdfzipfxj4s38cELXydff2YGoZgjoJZHUHPbXAubHabbU6Sk7AbVTyFJM4iGZZ8unbn7",
  "key5": "669f8C3DeSxGuRy5QDw9h5aYKeFZxtV6E284dt5rWU4EgcUKTXiAWYe3cGvV6JboM8pjLW1Ltt7Cvteg69nQzMcy",
  "key6": "ujzuFCiLbiCqd2smKqMdnxvqr973JoKvScNb5Bfq5rz5FJgVQFoFAv7cQU7FAqs588FkT7d728hp35QHggnAgmR",
  "key7": "41X5aVt3b2qua5gJyeF7VUcp1LzRNud9Zfnbtm96JRY5AYCSfYnCa2heNX8BQA5z9hxQR33hHkPGSYx6EghoqPzp",
  "key8": "4sucBxnXnyoxS5D1YZHjd92BkmDrPDPNHRR1HcQcnbKkaxDDRLZAMgfaSY28m48tw54CCyDD7nzbvh75trfxQ4xV",
  "key9": "3aCFqSz8hhcaZyNs5vpiNw4Qq5o5oqp8ArTnrJHmV8E2uvzPrkz8iHmNZoJBPQtTQ7m3MmXtbJ9Gx1jNAQmK67pY",
  "key10": "4X2m2wFk5xTcyquHJKLVKmik1KewYVaAo9zgESjBLneAiSKH6QCcFVzPDZkTcX4QdvtPLuFLWnt5wDhLCeeJGQRY",
  "key11": "2QRLSp8MwKsconAhJadk4jfm2oDcaPvVVbQoXDLdBVZjacKw5dLU8Xmn7zVN8ZFdNQZCHE95KYNXEspuo83GWZ9Y",
  "key12": "4HCwdJmcMhUgKPuuZEjxAAvuHv5ufbvpyroVzar5gCwqi4T9t2xfGyfRBYzbqPFi5Uowtv4wjtjcheE4hQrg7XXF",
  "key13": "39TSZ2KLh2zxycJcbdb93ddrqGBN46LKc6dCD2VSW4FYRH4L9FDunNuJGmF5C52b2sp1suY8v3Q2Yr8K4k5MBBh7",
  "key14": "2qyR8jhKhBNEAFiwDpQdhPM3FE1crpKdtwkjPYHisrrUPcLSh4botevJM9frGCRRjobaUJ3m44GT6xUNNRQEAWLU",
  "key15": "4aiyhAA4vcuhTxzWQo95iegt7XN3cw8PCnoDFYMVbjcRF6neRSF9Z5Ft9sb7Sn7cV8LqrSMaaUqkUG18hQh2Un2G",
  "key16": "4jhHWZyHPJwMWYRkSL9CJYxWpDrnHsE1mb3DjmjsVAoC9VcVAFaKfRTfHxT7bciXnDkg5xYUKSFgvdbu18jmsW1q",
  "key17": "2GfLUXK5hb6mwxXsqmVyoBJAvmVbtJ3yQGnYdsJFUEFUMPLCHTXnVLEkd4VsdAxhVij9N3gHVkSGTXAvdVMA7grT",
  "key18": "3MuA3mrLeGiaCqKqn5z2Z1DKF2ddTJ9TUBHw17efzV5RFu6nCd86jkAfZdvxdnvMn7hchZedXwvVrwbiMvUTVBLa",
  "key19": "dJWCimsAoTfoosnbDu76wKn6NrnZwenDDLQuNybBXgFRVkamL8qJ2HH6yhAhnsRXwWjTZhWSLtRNC8Nw4K8o16j",
  "key20": "2bbmhLJDKX1SkB3Btm7BcRzXY6N95t2ieiHrjjmz83HnfT79UK14SCz2ufqjnJH7TGtLsmg2GujDjz8gVTDdXjmb",
  "key21": "5svsNgpFDxCRMPS5DbAZvwRJndutwCk1guTRqfqpwqtifwdT2kTdh3oqEFD9wJp4BB8TGvrXqyjHfrpWQTUfTfwg",
  "key22": "3TjLjyQY6scYbacViXhgs7uBJ2maAvmqTzoVXJ2o461otSX4BfKAFynTMigFkP6fL17HAk9YYHwTwa69EQwp9tWq",
  "key23": "4ZRX8TJfErGqF3M296K3nE3P4E4yFN7kA8Bi7wHGLRt2eZ5FySAQUtkSo1LMCLBHqvgkLvxsJEERLJNUegbRHsBo",
  "key24": "FGXHvetYyti7TDdBFYhVc6smpb2iwk1azQcBJ3JphczNyoPcmHgjgtzda98DTiakg4sJmq13vCzMLVNBcb2d83F",
  "key25": "4A9Cgca411HqTr18SgXaF9xN6yVhT3MfUaL3QwuaaKbBq8owniEdYauBq3zJkYToSGPj4KL2JN95eHvgiQUwRNPB",
  "key26": "3Cq4dogV8As6jTat6yQJeqTYyrCbVPaXEbH8fVf8TmDd7hH4Uczo91WoStC8DQybNsTxRQzKoyYLmdpabWM3LJMC",
  "key27": "4bTGfpnF4HUqDV4AFo5eNomdjxPGNfqgqobe3FWtUwihKLBMxQcULWyCwHRDqow3daK87TcMrGGC8W98pu3sis7D",
  "key28": "52HuQomgES53UsGni43KUihSdUFPVGzaWeaynCuXwwawkSdKBm6wC4owTFJq8QbAoHmi73G9d7Wpt4fvDggAC5ZA",
  "key29": "34rJHseTYTQG6FqFeqpJdA2UgZawuJWwUcdBooKjTLo8W6psuQbSafjNkwozXtBYiiZ9wdPqenV8QJ2UjCzgiR7K",
  "key30": "36ByJbYobZxZ1TKqNaPN3i5Luhhb6Rfs4NH8JfiBd9g9dTe1NGk9LRYvL3Hj2W8DeXWJCFuCeb9mvq27Pn5w7FKc",
  "key31": "NpsBJSBQrf1VZqqVBx1xVnXheVF4JnGeSF3oFDm79ng67u8qfm6AWbnF17qGPnKRuLyieqz3W2grfZ1g92mkwQg",
  "key32": "3fdJ7TGz2LvSDr6vcShZnZ9YpLKoZdr95aiKG8jdEpnqagpab9F2jYfTLgftySidTxkF6uur7TKdEBczsfahPkWP",
  "key33": "2q9gqRn3XNTgqo6RNjKmZPDMfK9boksvZ74QNHkbNEWtuKexrHeXV5pvP4NJ6Vxdp7624pehoWd6YfZGteZVrnaC",
  "key34": "4ymBwep7dAnU1sLjiySk7p1qquPbpA2LmgTzZj8MR6ADKHZYD9waw5dgwWAGGMTPfRbJQhKW6HNboVBstiFuygC3",
  "key35": "4m6WWKkn34JKhCgK4NHbCQ9wdvoxy3Q9BmRixLFX5aBJSV95BaCWuhBhqUFD822ir4SrRdkYE9Up4xvKsox5byC3",
  "key36": "62wYYnLkQ9sEZKUArvvwfM86YV5aygfaPm79ymHjCKfiT4TsDb9MFwyuCGdPpXfWfjVz1HN4F3YmHUFGojNz6Sjn",
  "key37": "SWPWuUWrWvPh4GP8qnPo2N9cAzcfCbfr7K6BgroMyCgtdqoV9Gm1pH4vWw9uHnwJXuihCeYsCwZug696ZY8WEFL",
  "key38": "XTv63CEcVLWKAQaKGGhtbZfBVn4pk5tXCZmuHa5ttSPdRDJehynsnHEaVwUK4kJDr5JMYCuikY7cj7CaGiFJcwc"
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
