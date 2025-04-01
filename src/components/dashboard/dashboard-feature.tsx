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
    "3bLhNvgFx7grQQbDKULSzLe1C1wFTNU2b7gbjHc6qdduWqH9h9DQwrL5ToD5LjD9BAysZTaXMDHz4fQT8xSR9w5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahPTwbXz3dK7a3iHEsJh4hG6rJmDMMp1DpLZiDRyJUWq4M1HgrerbERAHXU8usnX5id8cj5HDDacHEvtuo2Z6gq",
  "key1": "3VLExspeTK5ykeXsX8a22nGXtrUuCEY4Suyg2bau7HmZ3qErQ52MbGxM84XVQ7Y2zEZxdkBmR83mQ3da1ofrBNP7",
  "key2": "2veEPtdQrDxRcdoVkMnUH4VPURrJ5LncDD5nrvAMJje82WUwTVjZGim7BdHNKLYkgh8gZKVYXXDAct8RLqPwF4Sz",
  "key3": "4J1dDhz7VfCeBdG9EbXc9YYmLhXMgTdwdpCa6wvAspcyNi7UuLL1dqbZZxYAkZZWuPog1FQFHZWe1gzw9uexve3g",
  "key4": "3SSYq1PJWjCU7S2PwNXgcuZgxM1gq5xE7WFcfJKLH2q1XjgzDNwZJkQbfDo8EfKwgfXC2tbSYcGba8D1CorN69kJ",
  "key5": "3LpdYCfNWdAHjRrXF4uxXwTJYnfcgHS1bvLNPukuJLkfNKm8Dnx6j7d4Bw6gHcXjuTwScb7Gqz3UJTivLUjUx8Cm",
  "key6": "3t1Fb7BCPvvhSTA5KGfS59PxS9pWdzDGdq73AfzJf5sWksUX4rs7hNuVyfTG1zoNiL3u28krYVzsm8mw36EEQpHv",
  "key7": "27LRmxLc1XwqpQJ6Y6KFTdaWzUvJ3AQtfNNYLeCFxruG4CDMFwNh13bGtnpKRei1iw8VRhPrTTDPJ9ASjtaLjd9q",
  "key8": "5bS6ghW5SNhB7ryGqQYHMqFsGPM6iXnty24yRU1GkdYxaDBCCu6YTHGXyudYGFFpes8uNAmB6UgsURVjPgsnbk9S",
  "key9": "4VMAgpi9KTiMHVoceuiMqaemajuDzCc4S75oMaVw5yJBTMGXzqW6wsBh4LxJHzqcMkQ6r8WqKhwb4m5ZAboFcAoW",
  "key10": "2kcF1g7VAhuqdKiPvzyM6mGYDD69YCD1Xop4Le18aRkcZNJY45NPBeyXnX5j9Fc5cq92QmroNzXtXT3BCNvkeVvb",
  "key11": "3h2cQM6C7hstdS14XAeyevfoNfhZN9kYtrJSVeeQQoSTAZ58akrpzL8io1A5wQkCeh9i7xVRAJAZNjhMUi1EoDCA",
  "key12": "4o7duuPVH6rhxL4HEuBp9w4jypQqdMHdGhVk53CdZnD43Npog2TXVQ1kB2AYqugtzRwbT9nWQ3eQ5KFerkWVPD1m",
  "key13": "pw4YQm4enGXJ9Bnoc5coGiiXsiUD6ZD4VTsxQzftS5RqvHRiGjyAZcfa2DMyzaPSyGHEXxcDndVmuHXp8saE92h",
  "key14": "cgZQtjJQtu2wgrwDRgcyM3mSwMww5Rx6DnAc1bFU3uVHsnMbHBAc2VjdQsD5GkQ58KWcTNGAAK2QbRW87SUnS7a",
  "key15": "59FXkiCWTZmHumQbfxcjY1oov2Abc3KwsLW93MH3hJMzxPTbKYsxBok4kW4tgzDPzFaKgVDvSuSg3eCQiFqXVxBY",
  "key16": "JrLWwcZmGmctPB292mJgQ33crRHLwu9AUREQCC333CPTxTyn4bWZHXCoFV32nxTKdjSWEcH7DB6FaoobmiELVUC",
  "key17": "2vYycobjAKPNzhZ1n8mQDTQHkH8aKsWuFCiyHyYFWWKM2pL1KA4DhyUXuKGQY9RNqrjhSLRe9biJkSZi3abTh4Yo",
  "key18": "3pFcBkZFobpPAFZ2B9kpJg8K6CmkAynw9zVwNPue1mTKmpELxeGfmJVgKtLLFX1TaBci6r3vPzoEpfjpnZaYFEFC",
  "key19": "22StiMzasdbGoc5CmTS9NP6QjMCmFheFevpQMj1ixsi7WSjmbBMXvQ7rHJduUSb5pGW4sDj1S3S56bLH7v9Qj313",
  "key20": "DBssdKu942ch5M5aAAivvvJiP2gy7XHXkcJGaqGyBGLci3ATo3MHsjQhPgPQQuGRt2yHZor2Pqgp9f61gFLYJpq",
  "key21": "V1Jn16ZzzNpS916LcECmLsxW76PfFe4NBVVX8GTcKbce9UVVPmS665E1cF7DQrLXpgSqazEbqedWQte9L8AGSeo",
  "key22": "5yKAyKowqzc1JYDQUhDPmacvyZrfaScH2Bbn4hHE58NoP45sVohws8ARVdfzmWezoNN3YGkXfURGZwjnp1TSUW1u",
  "key23": "4t8ujk6QqQAXbE9tYrwZAtRN8TxoESc1BRekJEiL98PJWvRQ8bATUJ7K61RHodLRurL3PLi1z7RNyb5Ds4cVzPeg",
  "key24": "5Hqnv69QS7ovZdf86KvdJp81Cw4A6nLAR7kmQp9etJzK7wc6dQVux3SsN7vea7smSW5veRJPexGwnSyVEXpWngrq",
  "key25": "3dgXtgLdA9EHS2eMgFu5iVQNVhDytRLuPHaiezTkGCgVVVFV5D46WChYNJEMv4uqg6g7Kbdy5DwYYuyvUC7mVCxp",
  "key26": "5Thywu44ZakJVSrdBpt6CCf4ejuXYN3sefW4og8wQ7VZQaAKu9K6gWrV9ExeVDkfPsELS5fPwvBCLVMUxcnMtD8q",
  "key27": "4EDDqATWaAGp46fPRS7fGgfazSEG7sqXNEn7FYwyQWWJjSLGK1LSMNfBhKLsWn66P2nWDojn1Am1ge8q1932jHAF",
  "key28": "3Zpn81fydBznfxucBMuotQwiGF13aRH5TRd4mjgpSzoXgoMKFw8hEAk41dmvtnQ7t4RdUC5YmeBzsgC5Gw8tLp6D",
  "key29": "5fJpkgx19NHAz6VCundd3QEiSbPobRWKpZrtFDMyfYGXhqfHDhF5GSe2wc9SR1aRmL5cRTNNuNMEcsfMG7Rqn8RD",
  "key30": "58akS4FQEAzpFdBKfi2NMVFnBZq8ijX9zWhwvCqB4sCVzYSCtbWMoHekDoj1ocL5ZvpeVcZPC66dxm2Q9dnfz3gN",
  "key31": "5jsmskRrCgLVitcf5Jb89HFUqgJ4PxKHNqtdHoMn1bfzWJFs7XPUhfxEnENPumRe96iq9DettqynLPYHzpd79tX2",
  "key32": "3Zmdj27XGtQ2zX1MJgMBJSMWNfXUz476wibggFhsSFQcYU8dTzs19v1Q5JNxeXY9UYDSN6uZu5frFnbXEKj82w72",
  "key33": "qfpvAoMYhRo5KocQ3GG1VP3q4ZNnKNuDE2LSstCsykMe2qsPDY76YkHBFZeYjQyqgrYdzRaL119Tk3VtbgjK1EL",
  "key34": "3VwQLBexrYqUzyjD2PH1bwU1nW83sz4g7yj5XfrCf4knnApG7tLczKEZg1fTTUM6kU9NS4qTDEnd88pbBphR9MgP",
  "key35": "5CqvnQ5pMqwAdnAhYfEfd3xMd8aVFt5uk3xCtgu7Njjaid8fmUxA2Qo8LuHdqDZa13P57uAYpyXPUn1arLddbYV7",
  "key36": "4ShmHDvv9Cq2SAv4NtbtxKrh1ghR5TUvNuf7yudqBSVgN3yJNih3Pan2PLKmoDJK4K5PSiedbuK2eZeEBr64wWM3",
  "key37": "4FiYQpB7LDx1mTmw28eyxzLUZRPiyNKqt9BqcuAEJbLu3iqRGzaNcgCsrjdojanpKp6QZuerzcoRwJPDCVNGZmMX",
  "key38": "Czjob2HpDUA1MvXYLYeF5Tv65ALAoK5jknWjnMtFAoA7WbY7jWUUTjiVF1UD89SbXNxZ8RkwYGvRnbbX6kceL4X",
  "key39": "2DU6ojKxoWnmABZNwmeZj6u6Wvz6LYrRBdQRErSxqvmf1QweLEhp321BdkJVENhHYBLTJnkboFzAKNP2hj8VjuM3",
  "key40": "5eXagaeuXoqNL6ogg6y4N14VsSpwiTSct8TSYnRwScL6uRzox75yh7fDp1UBQASvXqjVd2TCi5Q16GL77UHvAhjk",
  "key41": "2ueWnr1onUdMqUnmHCbFRYKGoLWTieWkgkAnAXovz6jH4FdL5tCum3ZufLPaqb9JBG4Jkjm7RkSzaRLUgn9gtzXZ",
  "key42": "vf1RE7FZoD9FmwZ79sjdTiJ6tjHhiCjH1awwCypdZ58HjTSpyEYZ1JgapHcWAxCvzKSJE7HkY4srqsv69JmnGKZ",
  "key43": "323pnygtECLu5JyN68YZt2yKouktu7UyJPER1k4aKx8h7VrK5QYP75GcSi7DCTwo5KD894nkSBrSegzhcmowu2Rf",
  "key44": "41PwTU3v93dAuQJgbLC28JrkoA9sURhjp3BXAqwreXqH17dRxmXqL7TxXZ6SLgcAUbxXisL25rgYc78tE38y9FJa",
  "key45": "bFAAgUbERaWxgY1TBeMweRCVmBUeL4gn59bFQS4qoAaKiVs77S4cMAg6WfjRGYY7ZNbHDCcfpZtcpM5tmDQj2AN",
  "key46": "2N5sNVJryFnZ9HhuzTXY9ABE1dS1mpxgofNM6dnou3rd3XkRwBwodr1ofTqYyRL919HKu1AseV5nqFNwCAQdrcti",
  "key47": "3tKhRGgHEkhj3zLjaqh5vYWJHMvYjrUfqiUyYF4TT56HHEwZTndic12qaU7kJXh9mQk7kPtDPSqnFy9AqRgUsPLk",
  "key48": "5dWTtJFTx4RFsRjrQWm1LjQA2LYySvBazHzyiqBdQupgFh6T1dAASRrckw5TcJieHhDUog2RGA377BT3rrUxBF71"
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
