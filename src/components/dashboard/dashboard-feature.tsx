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
    "2JxsLMy3Yu6F4RqELdaFYpFfTXmfqLpKG17Zp8aCAzpGqo9aUukAkjY99rb7imWtg9kRxLpVE4ohqW2h1bbVN5gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6vuPxQZwwKXHJ5EWtSveJUSxBtEcEeXRwYEVxLTkbBveSBYKKN3Aj77ZdpfDgWc7dse48ZT5UBPNCz17tEzhaf",
  "key1": "5nSe1XbcdF3Xaun8ViAi2Vuai9FRkVFoYCh8evgR5PQTKp1y7KjQmYtRcEVRWFKmZDQBgEmqKW8wX5KhgDqzKCDu",
  "key2": "4kuB4bJLrgLz5VpDUkKJZrEydwzu1JuGWdgJforhNLGkC2JtbtJL8XNeiWqcqMnhjUJt5TqBwFPogWyFaFkPfTaL",
  "key3": "UnzaceDSt2oVCW68JLAFPYDA64GeB6ow9rcDRqB3AAM6eTsKhbjx3M9KqfRh3AQiQ55nPHgb3H9JzcXMDcDKFNS",
  "key4": "5V5Wg757ASgA8nsmBihyPi8kdG4VJV49uMpW1FX1VFpFCMFqT5brZQiDj4crkJJUMHBBvVWzcjAYUU9HdxAd2GbA",
  "key5": "25zh6K8YQaL9WctTiUzdh9Gz12vDGbBmAfeP7gBcGLQmSMLkM2k2BfXLLdGJv4fn1MpnADKdiNj9NJtPNi8DPCjC",
  "key6": "ytJ15aERd2oKNQpd7iGc2DcMNFNH4x4KaBYCdNtEHbV1Ku3MCaHRfGHgM9zQMWLH13XYQsrkKp3CfrKKcCvnzyp",
  "key7": "5weV96SEUpaqNVdiXrcX1TiVfiHDKjpzzRBe3YPUwuigt3foDzvWBryGu5igjE6eL6pKSvUGDNuGtDFwLZp3CbEj",
  "key8": "3KgrZsoMj93DcAkR7XusrAw6thKkmVhFB972FJEWQEjSmGhZ1zXoy5jwkMV3evnoPTxdT2mSbifC8chsCkUv2FYN",
  "key9": "2xx7Tm5kxc2Vxgz7eAULrKPyu2WMsAve8LvbqZrup65RSwaT1J22sA5T1U5pSzDJY9NfQBiEfXpjGJZT3ZiCvkZj",
  "key10": "4kixzNxPFPGs775vdHju7bt6aRbJsXoST18ESEbJyzrQGZYxxJzBGJHhryKFMt2aEYRGHzhA7px18qbzs8SQFjg7",
  "key11": "BudNny7i5mZPumqZZCUcg1BidmdDAUvCuLFGzSpGXKnZJgdGRjkYkBig3ghxiSUP9HqRCQDu2MLvR9UyifU9XLz",
  "key12": "3VCVEgAEc22Sptqn8VCsXhCdnGfgBYiVzvGcYH4KxQF5RSeADs8HgH1At5ViCzZfVhEHTUtej9yeMAj9p645qAQM",
  "key13": "4LHhqfhfzcr4sHWEvkL1bsqyj6qJq3WJme6dvCfPHGzyfdMQuLZpastU1ooVPN6v5PFSqVjUWooijNBRK4dxAXBu",
  "key14": "4xDDnYXyU6D4td7jrKS91Ar4B722j4Dei9aJiS95trRqtBdnAf9o9TGbjQ6LZpjVUxMk5TSa3s8t3z1cc5avo9mP",
  "key15": "3iuoDcAETBGy6ekk2AHyQZSvEGfYnVVMGzepjCaJ3Rvf52zL7UUUNyYVG8sUdYtMPZQ2bSZkVxwERAUVrX2KthSb",
  "key16": "53j8Yr2wjaESdsJdqxNHcPAEBYdHgCRLLtTVWte5NGhsNMqdPbwyxnkJ8bK3DeNrcPKVaHoL71rdqMeZbtB7FSdF",
  "key17": "4nVvaKp4sFpnjKHxfbHvzyAor1cdWdE2fmbGURDuph5dN6235d6CdKSBEJKyj7pXX3s8HYEaDKf6fLSrNs7MKhpU",
  "key18": "5ZvpLyT2w9TpCJQzCzEMfs6UokLhQiXR6ufxYsiSCowtTZCPSazRQ8ghaYwSFb7ZL93gtsB6RbC2CLRKgPbD1BnV",
  "key19": "4G9n3KDYaCshJL8wvjtZmrKmYpmrhdwnrfQR2YBUWX99digmedesetNJoBSMHMEt67tpzNjqNt8khF2y4RLy4fCN",
  "key20": "5LDZG3Y1MHD11u7ehGB29zBzRwSrQX6TtVCgvoBTcY2QujPWGGDktp2AED9PHqTndpSyhEdtqHBAJv7Z2VvdBBT4",
  "key21": "PyGLaTZkKz5p3eQourSzUpnHWN9X7j6Uxh7D3tShwnxBzp72hH1yGQYjD9oXgJd9KWHrtr7NgXRtvrda88Asc1u",
  "key22": "2LGwKrjq8qzi6hj2KadGiRVC67aQ8KePDhuD9zrQdEraH9myjfyFJ936TJRLVZauYEy39TnbMSXbbXmvPcKVt8o7",
  "key23": "2tf7rFMzEin6Khu9SFgDuNV4x2rG9aiYbYCXUEEsuzUZEy5vxtPBo2ta18h9qtvuvFP5dt3w2mcrDtHmj3K94yT",
  "key24": "3Vu6ComxtqiBZ2cKemFgDhpXzgKEsWhLSfcPCxHV5cR4fCvjVmp3DJXzo1kApYCVazihmknRyosQ11NpYSwoDW1",
  "key25": "rr8JkmDoFxgTCMARQoEXaA7QDaUKas5Jkt27pcBdqLCX2iEr5mptTj98DoTehbZX5Mpme2gZG9EP9GE4KAKk3Ui",
  "key26": "2QogR3BAHbQqkw1rpucyJfH38gXdBHzwkNB4upVy9NRoLDqxos2arfaNpQge8oWZ3PU4td5Lhcpe99kJbcBmHAaE",
  "key27": "4nEcJTVgdFbri6DHtHAkC4Md2ZnxJPSSoaWnAFZtcRHz6WjrvmxqTaTFAwJA1tdJm8DGxW82uVRabgCyb3voPc13",
  "key28": "zD9p6U2NN5heyBQSzNFX82ChB7Tt2pLpBz5pc3D8mczEKKNDpBG8fhkn2Gdxh5YLNvg93fhjRtytLMHvvevW9mS",
  "key29": "5bpzAE5jqGN8UMTDgD6epEvitf8yRrt8QbG8SunwhaYpY7uvEshUQ5hJGBaGZLPmiAdEd6eoWYcgJaztQkBUe9Ub",
  "key30": "2tuqX7GWTQHzs8cBraSJ79gKok4HMYrTGReWG6CtEi834xktA989kPyCnKuFdio8JrKS2izmDFsyvtrB3mFMsUJm",
  "key31": "46m9vjiAczh8kdabmQTE3vQTVZV68EDthAgJE27xuRm6oCbNk1FxtvHL4HdXjxPZuxYG9utB1H57msUUtEBhGKoN",
  "key32": "224arhdy9kmoK7KgyCTkK1FdGJRrzsSygKQq9A9SWUjm2Tb7WjhCprHZQsZ1nNo1ys5bsjgYHpFGNL557fTMJSao",
  "key33": "2qengDT47GHn7o2vL4kMQY6WFmAheVZppiZCL1uUtkbPcSmWEDCk8tdBt8najmLHDhRKkbvJ1Ua3Txbb5WedSU8k",
  "key34": "22EFFCEFfpkqZvrL3mwKBjM4Fw11FaetiZ3ZEcTuoAbEoUY4XK7QtTRwbsy6hRfXBGiyFg4V7BuQBCqowasGXuvU",
  "key35": "q9LV1VH58C8r4dryAKS9iKsxrzq19sAV7WRieemUnxQ8i2G51M9Aj7sbdhQp1e5PQr6L1MAdWGevoF6oUX5bua1",
  "key36": "4rKzgvpjQyeBA3HrRTRiPxczENC4zpmcg5WdqBBqshJCeNBAgEeJZ5C9jeuAm8S5PjbLudQY4wSvT9HkRRRFbjE",
  "key37": "2gC6KRcv9A4rZ1yb5nqDwuUkQztrgYxDnHqK5pxn7hNvhSfKsEYLvax1G62hGvPc4x581dk55LPXmW2AxV291Y1E",
  "key38": "6eva62zkJ723DNoaaorbYrYm8GyjAkYz1FfMAZGjnnnMcDhx3dXHfk8AgDBgJjK1KaEqSFD28vBjUEfMjK392Wu",
  "key39": "2QxdWaQ1u4zaxU1c15tqmAcPV1ucVbfLeZUNUkD22RKDGXN71fBexDQ28KekDaNqf3XEp2RoMtM6z4LdzeeiFKwm",
  "key40": "3WoSoFpPqZRFSxd8qgUgRgRLgVTvP41S1GQgQLP5Bugmi2fkD1e4cweiuZACfST6tsh3ENsfdfYNEqBfwqCH4Mpz",
  "key41": "UmF1PNYKf1N61DFodfz9mgZbCx1tuoK9Whyh5Ar5MXYUxe4s6tQRoBVSf1D44bTqGBsFqqz8RvUNcZQmGnSiXu7",
  "key42": "ZEEfiShQQaByzHN7QWNSeMJ79fuKJe3TmJFQuSBV5LQGMun3FM9J5SUueB53zB2wJ4xSBonyb9p6CJZZbyMpVnU",
  "key43": "5gy7mgUPhRe46u9TxedTcBdbht1F6sKwNJMWSTAXEP7vVwvuXgucgWgDsdVu2ARm3L1xy9yE7o7puSN1dNZwc7H2",
  "key44": "5eMkaVFPihTexTDvVeM7NtP5nZFX99yoJzmJjinMjHPJDyjUtw2F5CpmgQcBSaA7UDzHX6688jLxAdSzdSxK6EWS",
  "key45": "5Z5RabyPHDPGbyyN2ZF8ubjNpo1sy1Luk7nw6bKEhgA3XxoGEJppMm9QtGo7j5Eiu3Ltg4BCoE6L5pjSwFvpoCYC"
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
