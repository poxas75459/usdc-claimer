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
    "4YbKRC29mYmYKsPRQzEzCZranMG8MtBwjJ7dDbvSnVwVu1ZPuVeJnkxBv2SxevQo628nzR3naunWEaBY9Vbiqu98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L5deLnNz54HvNFf1Wi6LP84b66a1FLK6yKyCXDMWhxzVHyd8NumkzDYDiB1YD4hDtNX162uMx9ezgTCjvMZJbAn",
  "key1": "4XG2Ckz1pavVy1vB6puS1Yn1koCiyvKbHqKteTb5fBC9guAUseEMLTf1ts44dXQ2HPBFDvSqzu1WKZWqPfN4DWF6",
  "key2": "3V1qmTNZM2VnBU2kGMWrDWM6P52mmuY6t9e4etSZF8tNUbmkntSS7mzf8xDPspGKw6mLG3vnyNEdpwuXgB6EbzHK",
  "key3": "2kgcH2JK4UZ5pEV4tgQjYUQLiZ5rrGxJ3KTSTSvJeM8VacukUnA2m9BBEM41YM3U8iRUSucaVfnjbfcxtmGisZZc",
  "key4": "3YA6jfBYHscBrxhiufUgh3R6ZpNXCom3eVBpyFTue6GXP1jrDQkAFHDtnPyqmCriaDxSxfu4ouYnLgCbp8vS4vuB",
  "key5": "ksxYS9FsM1v7G1sGPMbBhH5Q94ZwdHYoP578Jn929FL57K6YXWnTqngJxYACCHSVek4PVrApmFqmPxEoSDiy2So",
  "key6": "4nfH1p3hyan6896Zx1zJEmJCKJShwvSwJMt4hQpwjuWqnN9231BKgvKncW1cJxfk437RsJV6b2X4nqXdscGEcvV4",
  "key7": "5qF82fePxQzYDpqBBepeKutRUPEG1J2VQYf7U2yGm3uFam6cgxYRcNayJHMGY6s35DLw8rVJ1v58RgS4jHgYFdwo",
  "key8": "387vVoYxJs3dWrG3YzU6MwowsTpxmxfqrkWJuMbojobAL2uUivnY76zFCnDSzDNX1PCWh8WR4etbjHLorEAjmtP6",
  "key9": "4jGHZdFCH39vVN52paRh6SRojxyqoYAmHyAS2H4vW1K2R1FowG7sNCEJPRgJ2pc6E2E3bgwHxskxnR8brpxjwCWf",
  "key10": "6KqrCtnnFEtkH2mxUDTShTJ7mRZ5wwhh1NfkyQoZ4zdZANR4bvowwjJxUP6vbzZvTpRmbZigXKc7k3euFTiMnW6",
  "key11": "3Ri8PWGibDwGVSTr153TKEWepAzoZo6NjKq36c9eAG5Yf92oyTdJTB9UsjJ3uzamZhmczCoiPGP6mGxg6GdhbJJu",
  "key12": "YpKbBy5iu7fRLagWYdkvMfBKjZD16gWiD1y9gu3356yW4x8Qo3tKwMCtgJ8pcp7JyAFZNNUVzuy6JinNp7HtQhp",
  "key13": "3nsJxcvN4tcPVRa4FYxcJtpFoq1rPwsiGkg9NxamMiHohTfMJoijxE9Q1CNAFNm93QXYXvYwavNxwNa6Eukr8dfv",
  "key14": "2rXJ3YMXXHX89SSkeCXASp5tc6e5wVbMkkcci7GcqmQA8Xwz9kAcdE61nNYCYV7giDLHf2KTZdTTAn6n1HAEpJZu",
  "key15": "5KSfmqeoxR8Q155eosGHHjNQ971jQgC1kzU9SYDvow7DvL6xbabvEvnktXVQNuQTtPMhjVhsqXdjZbYPvSb1mj9U",
  "key16": "CdK7RbEuXLp5iXwzRkQQf79TBi9DiQrYjfisbEvKhrbk9orecS2Gkra5g1tNkbtCqXVPjzn9onmS5JANfUzytoN",
  "key17": "5mNuMppQNMYtcjABuLxp3utX7LhWktVxqPPig91ZvLcdJrupeU5yUgqA8Xcn9JGHYAuzq7hL4Sq3c5ZHx7UbqdAb",
  "key18": "47CB84rC81nGtWfpXKXv9e4raNj8d3Bme6K2MjCyiqpRx4Jc5BKrnKY9ToohcuxbsJWJ99KJ65XrVJ5BdUhceTjU",
  "key19": "5MbLd1xSrs61U9h6pFLvaqgr8LrnnvW8mFG78WCEpn4FegFcd68NaJbtqqVquqTSm1WDkmQCk6viJto3gZRuRVDG",
  "key20": "xU7wyEbnAYshUszwZxLXQa7ANvRXBu4gRQaBg3hTRTxkTDnYNqh2WYuwbWWYoWQcWYHiWgTas43C7oGz6isGkeV",
  "key21": "2Lb23YfbEmhjSKwVXNCPuiQBPQGjVhMv9maJcsWjLyiiYXazC5dPk8FKaLDStP9UARrWxiopoH82bnTERL5UoBFF",
  "key22": "5Qru5KJ1TvMPALczi9cTTBrDYhcSV6Wm5hhpqowgXuVtRab9L2zXrnTqGw7Y1GnpeA8V47QnV1EkXFo6sF1TdH1r",
  "key23": "2V3rf6CGdJTqDZNryYRXsuLixyJCHQyxza3N2r91dnPUU92BNHwNjAPZbSiPUFqpxJMjoB9NWwt7zuUcLy7W5SX3",
  "key24": "gxs5bYjFKUvFNvt2cV9Hdtoytid7MuUh7t7D1GtSjou6J4A2L15KyuKYY6yG6VWynnFNLHJveeySi9nKYDdCijV",
  "key25": "4RLNjV6YYaWtvUyd1LqndDkcXQuUxAzTUBPfCeMt4uYGPNGTJAB6eQEzBLvdcyT7uVJYZq8MbpYyYSb5Zh3dJrU4",
  "key26": "3pPaekQn3thLPJMU4ZUL8hy2sbifQBQZgQ7NTSwQsqDHkwvtdQd4CyzwAsCwEeLH6VsqjV5sab2fskZdghf6Rz7E",
  "key27": "5h6gtTzFNSApUN3TuQGmCzQL9a6yNZBQyCyGkHLz1ksNkihatAUqmJvevmeyzAzSqN4RuJ4Xaf8KYGCtYNRe4oRk",
  "key28": "5He23ULm1qBdRcJTgEQLGuWoBKt78rCoPGTuXpcz4goSPvunMb2DSdDeGnApVyz2Bnra83CwrD15u8qJ4PamKBbQ",
  "key29": "4Jr6Mf3RZRrs1wXp1NdWxH8k7K1JppSkVvH2QZou8hr35vy63eD69e2XWdRrvdjxyizxmpqG9Ny7VeEifYAgCR3q",
  "key30": "2m325cvEQ2yzmjbjThZBRqLGoAs849P6Ufqq3cH43EMKtT7MY9qP87hAATYwyQpmmi2PgGi2EfYqkMYd2hPcQmkQ",
  "key31": "5r8nofcDqD5Hv6n5okxEmwdNJKYbakHCqQuGaWceQYftYbUz2xhhkkRFEsGKWY98fNtrA1RvaShqJfP2HBtd4xVn",
  "key32": "ChF9mbx1QwEpT1ewex1Dnrz7wYU3APHnC7xP89UKBHbCHcK14XXGiPBQpisSVm2zSNFLdLhSifqW2vs9nWfyH4K",
  "key33": "aTVfo1dKvs6V5bU9gMWWFWNjdgZZ2rvxf3TgySejrTsLR8wGSzNHgeMR9jk3DbtDULW5Kdqm6BPUD3VLnHqUPvw",
  "key34": "Y1RMr6sCzmBXPn12RDV6otq5zQGkfuJdqGScpqEyn9Ecd18ByCAQVZt2rUGmGTAWzRWBfogvVKRCsFPtkoNS3gG",
  "key35": "4xPwhx71U8z1TSqWU1EooaK2NX1zLBatioYQ5KJkFVN3vutVDn78R6h71fUTsFGx3ggH9Fgfygr1sq3gV45aM66v",
  "key36": "4abm3BGg7ru2XomE3Qysat1GUnEgcpm4RUj51FXg4uHogekX7rKrUnxJBVcD9zUBg92aHied3aYM89qvQBiD1a7W",
  "key37": "3dZQT4ahUUvVd59FLGGx3Q5QdNHWPhvAGigXHVbJWSPAmqkACC19qKSDC9X9tL9YaWrywFbfivRafVwx8wsZPoix"
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
