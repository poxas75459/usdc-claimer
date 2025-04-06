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
    "5Zo2Uf2Ps8PnMd7dfxvrY2x8fAgfTKm46FbGDuvmYhDhV48Wbed8DJh3Vou3N1VGh7aMx7HYsGZFgKjMj9q3cvXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjgCERRA3rGJFZ5RQzcUeFnrzYz6d9NAAhrvDtjjAQjAp7Rs6h8FooWhFmqKzZhsnBeeCrSecEsHtKP7g1kfu9v",
  "key1": "3iCJmXWLLbNN38u4vVTsWUbGdqrUmHsThhZAhx5SN5wm4t4B8ut2vSpcF1PMVWpsPvdMrkCgWtsV453niKUSiXfM",
  "key2": "3JZvzJsgchuLLRxieSRDKHXDqDxoMgFjpPXBk63fYEhRukdANZXxXQUhWTFVKhNNHMa7iYXADEWSJR4MZ3GdxGvr",
  "key3": "5G3gifyiLg5svcjvwrU9Azcq7rStjfagKraDHtRPBM1fbmKkb3YUUTqPzQyMap9sgNSgQREWC1ptT7u9Rzew1gEj",
  "key4": "4DAWABYdNCo2DAREEdr2NoRDHGr46aAPxxwsZnCrhZzF7CrzXmnueR5rQSdERCyk21iWfs8zZD5kCCqFhfF9CQJZ",
  "key5": "5XDoav48N7DvKivqAXDcorAhMcjjoSDj7WTF7EgjCeBp5hMJTH391KdGuBffKexZmo1DJd3KARNxjdocwHx4R4uL",
  "key6": "4rNBwy1AnKdmGHyXjd2UHSkw6x5KorCZFMvKmUnzfqtCbkJ1Daqhdwoy7vL6VNHWELhbesbzaEdJ2RxLwnfg9a2n",
  "key7": "5cXcvgAZxYy7AYVEYoCKi94ichavkJkYjAcMoBdaJLFdoDEZc3CG6o5CFzv2RxY7W46wmE3CdiET7oo7R3FZN49V",
  "key8": "2XsXHEAcrfyoCqXYmnQQexyQ2L27nEEnWtFqkVCxokht59qxbvDd8wskyqwjAtugsVJLZK7dADCHR2jXiu5XLCAS",
  "key9": "42Pet7ZaP4Toz8nXyb8dHyeS4HW8nXzzPxQNeJ9F6zqaR4p9kPtmPuiJkUP8tgsJ4wYvDLSwDes59g2mindxge5U",
  "key10": "8NA1dkmBdkmVW9XjA9aq59zd7cYahpaSpoarEeogmjPhQxKyqgWj7gEHqKdjVzQLqgP1vPpTmhCfjKjyVydn8Wi",
  "key11": "26brr5w9ChkefrJ6i7TJ6a5TB8VhzYHCpuJtKLQSLsP72QyLcm4hbekwxogr1ockRaVjwmGfQ8p7Kq2a5LisAx4Z",
  "key12": "5jp49crzxybAbTeDAMbP4ZicrRA4MTeQJwY7L9nzJ1SixRmAHdh5Av6ZKHgRjG88rgWUa68dHS1Ljy1MbfWsxdhz",
  "key13": "2CztKBipdAwQhpV281RecVktpMNh88pGYiLDhJKcittiuUQMjMKaLom1xySfjYGPWzvo8RiU3BHEgSKtHm4x5Sm7",
  "key14": "2ixnz14GG6Fev8Qnw4wSMiwuNGhHcWt9572r2MVgSMF9sX6tZ1UN3BQ7AybNwmijaBmspVFBpZ4WFsqkt3EFJmu7",
  "key15": "4ZxkCdqbcNBsK9Fxi4eoMrcgYPZor6X8HzvVsHpFbZsuK2wdUuyC6VYeM1XGDGuP45svSgPoJ85jQx8BNiUf5HFh",
  "key16": "5xbwATUGYJ894nNoXAydxvDWkaZmpaHiCcx17fXAtfuF6w11eYwbZ2X2AS9x7MumBRV2yGuG39WJFasqqwnPzc93",
  "key17": "4USKddFYT4ZVPaigSZVUUPQopyzMwvtvPnwsdp4obSgxNS5RZxUsmz14DQsAVzr6yc9aqfWzcYq7iSfEwzmYgspy",
  "key18": "pN1sKLhNBAtVfkmnrrFikXnCLsyeme6x481ja3eMwfiXSw9MxAjULauKPb9s2aPGDj6UHhUpto4VsyN7WuwFmqB",
  "key19": "32etnC9a3NdBiRfehft1mT3S4m5KtdTxa1nstSf5YTW9y7PvjjGsAUkZqRV8UfUbXbFHc4vvBYjWNv6uvFtpe8nk",
  "key20": "2EhQ2C8jET3LDqUDz3QgBUo1t5e3dRt9LrYZqCvFtYcuVPgBWU8FHPkJix635GWA3L15b4Xs1RR9YYPNtKDLTUbc",
  "key21": "es8HVd7NPuZF9Nj6yHRErbAxvqHaVg7hRwLZ9Zfj7QRMPTzJrnkdJMrV7DKoTk4PcwB5XtCcZ7MwkmLSWzmVv8j",
  "key22": "5LV8mkYECnnYydgusjmqiipN2ffmTQKPfmroRgumkW4JMnCeX9ADd63NPGUKTFYW7K1eMu5neBf7SnJHsQSC66Kb",
  "key23": "2Qh4cjJ1JH155DYUaPC5jKnMLU4TG5BajHgPog9uWYiwgevq1gEJeYHXAK8f3zpswfv3JbmyZSr2HTE5stFeiiar",
  "key24": "5QEq5JNJZUhj3uAEJJ11LjaSqWVJ5dNVAnMaA8vd5qBaNPtUL1HoRQwzwran2wsGUhr7tsDEe6XhruNLDJkXpJ7u",
  "key25": "5TkN9URZaYHXiz86iZeijf5Qyjn5BiDqG2ixR3kHPknffSoYDRTkifg9pXMe3PDStpfjGAWCoKSFPL9DXeeijUVQ",
  "key26": "4prbq7HNnVJtNHn8Z7HPa4N6aUHhQxWCzEti1bGamVLduW8TLK8uZBbeSXiz1xWLzni5oaTLRcWSqX1JPJaFP6qf",
  "key27": "5nkgt45oBsrwXXaL3CqAaCoQYc7wAcM2HRx2zWMLbKhvGLDd8HRDNPRMaMrVHM6m8hypth34f5o9p8oRdPSeEwYP",
  "key28": "2b2c5C3nk6pxcm2zUHr4iVmFtiixenvPiFDysYEHCDvnDR7w1H2HqJYB6q6Cm11k2bxep6F9edrjRF8w7bYF8UZc",
  "key29": "2aqgGvXhUgTjJXPtUiBU11drJF5WwQz7K9audHGr16iXd1HNeMnjqGiBsAyTNsDJSB6VxGzqVfHJtSVygpBAeGuF",
  "key30": "3YdafGF32ywYFbWcmzRqiUE8LLCHkwbAWAf7RYPfRwv1eZ6VZgJctGdvCUZ7tu2wED3W1QdZLd5YcfBNin4X7Axv",
  "key31": "MnbNTzWmSk2uTjAPo9nXoBV5acbJ7U16x7X3sWgJCrGZZPa1uczZmMahcc9PogGi1YadupTNiEvq29mFNdefCYK",
  "key32": "2FnJ9YiZwoQMhdfzrrFqNi6dsbidrHMxLBD2WvxH45423cphndqykXwwPMuoe8jVEyPEYwshHQwxPBpAcg3Gu6a4",
  "key33": "aGxJjfTmEKTr8vVpovde9oWhKaFzbnVAxWRBtmk284uwXQh5FzpicLYhroY7kFTszTR4JkYsMnbwcgKZ1FXWktM",
  "key34": "268Uu9efVYc4xzboi7RKCi3AyZYb8rcwqTiPSTFoatyhcNf7L9if4NHddS9UGFd4yyFeXcyD5fEnG4bpEocQdqnw",
  "key35": "waYuWTXPqsvxSVuNSAN29Wg8FwxxYmNhDxisGnsznQzDBFbN6Le9B9q8HLgLVXFpwjV8mrWhv6cxywYoZNf7X9Z",
  "key36": "4z9iEGqqpMLbX8nFyYRNjCd5qY3Vu5qrgqHHhy8oZLtfKQ8soHzZrhfzfjRBy4qjotNV14RBrqyjm6TBCjpwZ5Fb",
  "key37": "5J7QFGqqUNMtxa2rX19eR4Ts3Vd8KYoV7HrCuY3VkHUNVtFYKj8eDcNvQTw2q6TAfw3UfYzvwZoR7ZyJrkBVo4WT",
  "key38": "36BvUF4mQacmy691krvqR9uSvqpmwturCy49QwzqLGZZkVdYhfQnLmeUbSMnz1iUHXq3QCUD4woDd4GQCbiSKcP",
  "key39": "3RXneUxzyEJW3pYwTEJtdzN2PEzcsCm9TgiKbG9UUNttZygGH6DNxFi64r1mr5NEYKKKqPmwUT526pUaAiugoSTM",
  "key40": "3W6uFkwJFm2t9K7jn7FhdgJaRzEtjL1U24aL8nj43mBfWV6fsW7ypBjvdpc6MVuZaYFHkkzrMtfSUyJfnpUP9RL",
  "key41": "4zXQTCQMYyheX9tZQ16TKDadh9sDrQ4Q7Yrb1dW2WJ5uaPwTVncjG6K4nvkFRQe4pGrLYEH9VPGMrKtY9rfXY7Et",
  "key42": "2Z1JGYSCcaVKoMazD2faXecWpuZFWmyAGeUorRyTxPZ8iZvkfuMsmAHGn9pVDdYRzfg9FrjasZTTC7YGRPAXPDxn",
  "key43": "VyNBqYXAeSAdWZRfCdtYy1u9xsRt8GihXWfW5DoepkbKq9hiNvfBzF3xDYCEXJeXiSK7HHRk2Z3KHARdNi8zaiP",
  "key44": "29Nyj3rkrsatTezwbbT7ognwtxubZ5i2D5iErAUndNq46dFwgSAZpVQmLtB3urPrGaDpywv6rGu2gePRgQsjRWVd",
  "key45": "ssje15k4kzfeU8z7sTqPsLwayaEpAgQLbH3ohGLPAuhSmF5iScdKsUaxVCHDnUcPdKSifgoxfuZVkiiDoccL88z",
  "key46": "2QDsdXqjH7R6KWa1GoRfJYK1ZgS3i8p3cy2cBrE8Ec39q54fzLQpyTEEyWv3g8T3HtYpK6psxki8UHnLsZAgx4d4",
  "key47": "4Hpz4iQzCHshKPfYSnLnV2GoCumMybecEb1EH27dzxZSjNyAN2ZEizY2RKkJv7wPeBPzKTKLPrLH2JeUtC1Y58FQ",
  "key48": "2w3mY6oYeQM6D4uRxNyjV9zoaRjpE6VaZ1KAgfavJuT7UFNpmLFBFTCKFFLpJn7wHwMBmf567dSW93ofrZwyhReu"
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
