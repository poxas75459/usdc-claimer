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
    "656CZDFuCLNKoGkEfubWQ1SrXEouKJr6pvA1wWg8FVitmAwJu4t4p6t8JUFGenbmomFR7De8pXbqRMJywLaeAnBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYpKgpUAXFRBcE5XhV9N3QBg9Pv2mCiP44uGu5LQXk8Qct3ki6ZpySmFu2XCgGkHE22HCXhQxFcBDjZKaPXaKrY",
  "key1": "3MctHjJbczE8EXLhfe9EHzTR3LvABEgvYZoLsL93jdHqGLsQKP1qBfneLBmwp9ubqfUbNTVfr5TiGaudRchiowYg",
  "key2": "2jjvECzMH5vg8de5DayidQj1U2xTyLUJPrQZcLLLJvvbQfSNN1STBsps3K4ofw9eg5Aupk7AFo8u8Nw8Q5a6jndv",
  "key3": "5ZTqrPUZTBhCGbArAPoFM8dwGFC2nQwSo51ZMTVdWgvzC47q8kC3DoAFcWTZNxXtfgwmNDv76C77sPa82cLwQjCX",
  "key4": "46XbtZ8RVQcAMYg1h89rLzer29DjJBaq5eqfGCh37MbGEAknjKookDyrLasPPcEhqJ87wMxLxZthYF8dFij2a69Q",
  "key5": "3VXdSSxjHNa8YLaaYsJg2xcjJ1Lf7YC6keL5rf6vqfgeatVswKchn4ELvw8diGUBfibBthPv5HRHY9px1RvnU42k",
  "key6": "677iTPbgJFCEhFim3y9A8tZubCuF3iXR9y7AKo4arvTTo15yHxoE69kbqWM9a2ArnKoEdTEZn9qSn6XsUoiGsrbY",
  "key7": "5psLHrhnDrrT3WGwPr4y6gjj8wcDvnL3Y3P51x5tyCB37HHtd8jmT4Anbr7RAB3xMGFkzu6iGmJ3ph7BPuTuBVHK",
  "key8": "TqQFdVSHrK7Bq8WDoQpaRFUkQXEJMWZGkHuybn4Ee2qEKgCTL11HDUi8yCWtM6Pc1iQH1vH6n5aANsAMnU5hBYZ",
  "key9": "3HExE2Z6J19SUmcvXxouXtqLegtmp2vC1xpLXVvd3bQF9pW869Hpidq7F3D1viB2DhpgwnNpQLp5HLbcXJGwW4oJ",
  "key10": "24BWhg23enp4yoy1zDr2XoWqobimvGhXJyBfeKYnAv99WYZ35t6oKNynSRuUHinWrTGiWwE5YkAWwJaMujqebS91",
  "key11": "4USwfxegjNzWUW6rqNPYELSyhsi9pzh1LoUXFX757rtWeZQxvTm7JSSwvG8GvRZXYBuza9XBgTqeL58N6FgJMKW8",
  "key12": "2KHr1buCKwAPgLoc87Eb8wbYJRHZLNe4mxHhQCEMc1CuvFaZPV6ksZdh7JmkygpgyfoRKsSxCSL9JPBc25C1vrSe",
  "key13": "3UebWURnxiX83k2fCoxSG9mS9qW3J6aoQi3aVYVt8yhxm4dH9HN49oyx5u3FibffBwyEbKtSCCZXHc6YtuRpQDgS",
  "key14": "64zvg4UKsYgEzmrc5UrB5NW8G6sBHSeHnYT8tf7BLxQawJDgg4oXMqbzBBoDwRssXFS2ka4ivrEWDavTkHA94VLY",
  "key15": "uEpAPetrdzSvb6qF9nMnQhiAWVnwcGkZSohaidM2h28J7NLocCHNu2UjyFQnSszKrLP7fdbVC9bA96TmJXWE1Ui",
  "key16": "4QcCs9D3nAR3fjdQZXU4Hh8ChwfGhEGwydzCoHvPvWYSmNN8EZNVnPKVHZ7hGnphqYvf4rdwFYvzCxBDGRLvsyM4",
  "key17": "24n4y74F6cCM5vcCmNjUq9417FuNF3tebUhpa9Mf4nEAmqVvx5oB5GikCtnjJHZRE7SbJvXSjhdmXdWZHSGgeA4m",
  "key18": "5gJC6zAjxq2Pd9w5HuZSpYhd4VHemAtc5q1HoQomwPyNr6fKquhztpbXBDGcwcUciodKx6uH8jX6wG7zokqqUwGk",
  "key19": "4ayPdARsoUB1SiieSTpoav2SqNWXFEsSvem3G9JMXZGXQ1ToHR9Z6jh4Ex4oPF5nHuR2qx3sPtzb5nAEmTovKqgP",
  "key20": "29vNb496zraG1Li4ZHazNgYJoQZifQtBjEgjHBU5KADbHTxrtWGvQt4NNmrM7zViTfWHDKsWhCkWrS9TyepK8pGA",
  "key21": "hY9dUX4Pa34GyLhiDptH2zBGqaCdp9gZoL2XMM7pv7qPTvEGCt6wv7CVxjRnYhbh45JuTFrbwkMG68RJvXsAzJR",
  "key22": "4YLVhcugSMtHXyp1iYTwxZdZueQsTxagneeM1JRS58m9rz4ov8MvB2fZJRvTcqz7nz4uXK1TuMgH7DYpYrYEDoUL",
  "key23": "2H8sWwTZ6c33S7XpYFhbgh8i6LuGiTvG27th2uQzvTu8nkB1tYfBCwNLfxKZXS23RS8DTi5TasEY1MfUK5cvPobg",
  "key24": "BXy56RgcvaYAB3wb49dAyrmvEwMFsryRRSRc4pWRKGyxXXdGXqbcbei9KgSoicY2jfU66aDZQU459r9oF9K6Lz3",
  "key25": "3P8BhvAzpsWikvZuTP9hb7ueu7jCnc5MemPVM3F7yjtaSbdrHoXM8bRLdFayvK3EWKaBbY75UhHQP8dcoq4Fe2EE",
  "key26": "2WT5e6oH2WoZk1Sk5in9v4itQEGJHg8WGsHW9hptw6SqA61DakwC1odD8PmKPgKqnRgmrphPzW4bU8kejAMd673T",
  "key27": "4FDrEEME4bt2Vr3wYTNWRamxFLSr1FdM5a66eTkR5tZYWDgx94pRUYwbmm5FjgPqR13d1rJchtBkznEgnwRZn6Uj",
  "key28": "4adQGz575ctB9riPyE9EThZBbCnxxvjWRg5a22wpKfsnseDxp37M9r7MVSh9Gg3pj2ZYxgeXTPK1z7n7jCDQx4Em",
  "key29": "2fYqBu9Gc7yCjuwuz5w1xTYfqh5tVdYQKUo92SuAo9wF3h1NDCjpm8kXvVTYc8fNiXHiZ4qutARvh2xMczPnsHMq",
  "key30": "NFVRVsmGwA9PeJBqtRYFvraHA4m9J7VsrX4YzKgccC86zt3M4QqLZDJSeH37P7W3ccfTqquWcHSpREs81SAxdUL",
  "key31": "4tQQZs2TbNpyDkFzVCZy3aXWNPki9Ps51MejgJNL1QRYENxxeJjWVxNxTbqDJPYRHzaU1XPpXaDd5Hq5TJ4D4b2q",
  "key32": "5xxuHZUkBVrHtx2Z5RhHYEvJvg3kJpsXPKW9p6zA9nWmptoqstLkbsf7XJbsontcG9oRCYGJFXY86o9G57rL4MQU",
  "key33": "48SVJXG2NCcTArtZSPfUF8dEGRajnriq2ghbNn1g2AoTZaCmMtiV7u8kYq4HVotcm3CurYiciAyocRNxsM1jQJpV",
  "key34": "3e9Bcj4nEM7rz5ijf5qFPJ633zNFaAMokirjBAQPnmmp9rm6CUze2E7jT6pUQnv5ghea5EwEGxdwcFE6F4NWK17Q",
  "key35": "2Z8nRstPrARyUFB7FjQTXwiBL6K7mzcgmUPUc58EXm6FnMcAQQ4GVEBBda9rF76p2SSWz2U71aqmP9hgAFx8kXen",
  "key36": "5ywXtGLuFZrhDT8QCCfjnZtcU2RYtRm4ZVd3JoY5wEV7AHsN6Yjdxg1tCwxJ6mEx99vgfAkBnfSZbv1oWY6pxiiB",
  "key37": "5RSuzL67DPRqhEBEzXX7Ad1KCP2E8upz2rpBS1M5GUeAAPgoGRKCiQcPJrNYJBQWNNvUSTK8pAgu8RiqiM1GE6MG",
  "key38": "3gXnkgyoL7YcUgc3mrGxqhnMNnmRf4kstn9QtfSDpD3rSpS9xJNrfXqC398A9H8UUAaEjXSe2TSZ5N5CdQtea7iK",
  "key39": "3vD25WDk5pZx5Ddt64nPXpUG4L69ARYXfVGo57SbT3HcZCfYkgqqjAEtth1xKPw7jEVfVqHCH7AZciB7qSkHdM2p",
  "key40": "5M5GrAAqtH18XzWJhFY9wQbPSr9y3SAmUKYSGes1ThgGyZ6PkZAhmX6ypUZyfJbTwqLUTx6J1EPJ2Ri4VKry5MYG",
  "key41": "2zHXeboC3NjGFA1B6jpzWpzaUKtuvw5EFus3hYjX2r7FAUcBSCKQtUuiZarrAcKiV9es9FKRFbUjnoAZ9Ve8Msco",
  "key42": "wrbuEgLYFUkwm6TUysHN5a1mULUS5nxr8waVLeJWBgJwms3PyKuHL4JVWuEgHyYDne6YxD7BpNnyEdTDvvX3LhP",
  "key43": "35DKy3nZ8wRT6UMjbqyx2EJvFRgKwVGuG9825aTputpKJdyMYfjttm7WKBpgH6oju3FsPbafVus8aynLKa3DjmtB",
  "key44": "3RARyhjMs7fyQjNeCTUFLyqKVKL6ypo5vJAaqef4GmSJoFZyWkCYDj6Vd7i82uNchadx4g6cQL6RiDCEMqz5mcu1",
  "key45": "3z8U8ptu4dPGBhYLr78Le6f4KQ6hcqxGVqj8WnMcACxTwscNTmPnH7kVT1pE8kFKWiodNCbCAqnMsckAC8fNe2Dj",
  "key46": "5QWK2js8CzpfNKV3ZwtXu1C8MUKB1CwB8Q5NWFR6spKvzyWAQWGknLcU4hD8jbsY1vftHFB23cN7PMbndPKmAoC9",
  "key47": "2EKv6Tn2Bzj9KzwKeDzqoXNWUbHCEGugxNM6CH2B775LrXoFXGST43MKULTa9N66HfYpZLH4UcvHJwXxnr3ec7XJ",
  "key48": "5hYyAXuYJuW443sMAgfjz7qqXh2MTkrwwbvoKGyr5h5UadKDP5eUM11UvHRDCfNa1oFrck2FMoLPhJyr2ahnJDGh"
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
