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
    "2gcPDmbWTaGc619VunLAWaWFxE4myB7CYMinBCvH3zyQZMoibWvDftN8T7QQ9hwwewg57TvJwRUsGtSxe8sSyo22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23752NXTj1Fq7N7ajPhrVq1rZ5U4eQWS5YpPLd64b5DdGEsBVVz3xBxhjTuVgKxydVNvRTxrRfPsVXAQMNzFGYLs",
  "key1": "4T7b6iGkwfV11H4Zohjk4CmtGA6VBvn2GS7YpPeRQPb4NRektbBTpbh5aayJjW5bgVa3wxNQ9E1hwKxDxnamDLJ",
  "key2": "3ukpJqnGREv7YdzPmVHBA65yFQPsHjUgeU5e67dxrFXA5wqNAL7rkjS1L1FMQ4gWDJTpXvErmhwKMgVAk9TK83ew",
  "key3": "pWsVFxBbAVf4jxmNJsVxrnviUXq7TyC7XXR4N1xyeVZkyZvWzuF8SD99Rwkcr8SzRUhibvVzTa3ptznPBooswVH",
  "key4": "4CL4Uh7z1mRWuGt7x9wFtkrsuF3AEF6gLkCqiMegGNb5W18xFZMMNgfrPGQu8GqJPogpnfHapLy53rLX6wvcLdcD",
  "key5": "56bgHsj2RD5SqoxDxHB77jDmp5aTvb33W5LZkBQJBcUPoACgr8P59b27BBQVHw6zLhYnzaCopG5hDREnPum8xqkg",
  "key6": "4Sk4yviecguM9hPfEt941KG1TkEacMJ9rwwq1FFCb4HqfhBFKbyht81NHQqmxkeaiLxsSXqJiB6sQNodQ7nDS13z",
  "key7": "2jEtrqPG4V3NEYwdzXbix19o13fLV7b6JqZaAJdbut1kmQNcdDXW1LXa7zsKt1v7ecTtYQKjNTUHij9YtmrRX7Pt",
  "key8": "239pznXiXKW89bmKWWofckMguicF5hD2CLzyFAcwgfiEDbvyC1FBtpAPNnD96BRD1gD6E5oNswwqf6gAgs5ujDr6",
  "key9": "y9s9CrwQneucVPX2UEjDM84GxMUT7nVj9EbySZG8hxqATaGQmuVAwC73LPPVV32zfA1Yo8fpK7Wq7Hbvax84Fin",
  "key10": "3tgnubpvuFnxvMwSSPm2iKPEaHPb5pt8qqJ1aShVJnXTxaqXDCtwPWwdfNj4BpgsMFNGUmuURhwQTV4M8Sb13e8c",
  "key11": "3omd7Bmpsj1moTXG5beuLUJtDQMyNdmWmFRKiQ11QKP6Qv2YktaueoWdmLgcwT3sWEGxeVDyfwuYHZeTF7TdxPhD",
  "key12": "uheNTjYvFwGTwS2CCTPj2KVWudZJR8te55WUMJasAk5Am7upxqPbZ1qonFWGkRcMyeUaZmAeacZ9AqGaYkdYXUF",
  "key13": "5fccWE5DaHRgqCWdgNeCeGKPDuoPtn97vQSwudjKWg1V9wXch83gRNsJrEZ8Jwn7x1whdupCBSMQKva18R1C9Lcv",
  "key14": "548d49EcoZZdQPMad2pyXMnHRxqbh4fe5X59SPhoQWirnsvHaT3uUdynMCBqCA957AHuewLrxfDPgepCxneVf39C",
  "key15": "4uTaXDouvYdrAYAfZHGXfwa2CkytkGBV27AyNsb3dqewsN6r3byHqi4NBXJQp5rfjXM9oiDLCoxQD8dGSoYXMERw",
  "key16": "4UdgRiL4KXaN8Dw2BCTRzfHdrKnx9v1mipDCg7dV3X7HkdFHbpWovmoaVa2JSJuqJ4E9ZuJRXHoC3UR6CbZCvgmw",
  "key17": "2KMw8DLGP6g2saqTBBjrL3yoqUuRvbqJ4GqdMEo7q1umNbpF4QqoT7wzfW1H9suZdxbriAS5ayaD8DuBPDduLJQ3",
  "key18": "5wXppttZE6tBzpDdFGZdw3h5Gg4VdWyNh5TpMSqsm6iJxx2XqS7ZLQz2iWdfzD3eExHb1hjG48YAWwQEZJKukej1",
  "key19": "44w3odVtQQXn99vvzpUh9ZCNtnbikYJfQYnq8ipgcsdtu2oPQyWUzRisYnXyM5BTro7n5v3K25UuxVqSWswo4c5m",
  "key20": "4Rhfbvi5kkDhgJi6Higziom4xeN7vSq68WSGxYHQ819RQzhqR4ZkxHAtSSghzQFxgmzcMwuH9qLb6CEh2Qv9T824",
  "key21": "4j5NA3XCrbKUHhBqAfefBHYQy3s5oq5RMEkWqcvbynuNgeNr2wgPkAvt9J6drB1FQjxKvWD6ydDvRFEWBBqcB5mf",
  "key22": "3fN9Ftqawedv6Sjv9xu3rrFLShkGpCb5r8qNgirMkk61kWyCHZfQACid5C2FreDJC9C35tkBmLx2x7RGKnPcYZte",
  "key23": "2T2SexfEk6DXLQ8qD4y8N456kqDTpXhp3HPuCxwTu3jbh9811Rquj6ZQ7sBwc4ULmdEJANt55wj6r4kC8uY9bc3G",
  "key24": "T8ojHAUipc4t3QSBCrYxe6RRJ9ana5S1JwzJAPtpXYjUKBCQdNuY2T2vmW4Yg8oubLSumkeMCNLELyvuJha7vBC",
  "key25": "2BjANnkxPYQ1P1Ki9SEpBmCEtncDKBNAVQZfTesNLzJdBzKb1qeYx4VHhHD2jfGpG54dU4X9Z4ivak7viuFqL7HN",
  "key26": "3w1AwN7wb7DFPBAt2EjLYpKDPozwTEZTzDyNU6iEp61agoeQfpAQZUkA4yCT4fdsZHZ95N4AKgdcsazJ1m487n2o",
  "key27": "129CAbTAsDeKk3B7vAw8PBeRCqKsHeeX9exRpNxaSEBvwpuX3AhGnBETvuvakJcv9kr4nv7nM7bQB62A5TN81Jsi",
  "key28": "3DJgDqd8z638rigcUFhbSEnVgLzbNQwZTbZpDWf3VovktPi2SJWgADGid3AiwwYmbK9JQefFuozQsHaLmN77MgTn",
  "key29": "66ZHrnWMVwopMqbyyyR566aRdiSh4CQxJhdXZBKU8Ew6kzBtT5ezVL63NoUs4i5ebKjtBqmPPwAavN1yHYAnYoab",
  "key30": "2c7L57YLieMBqpAE5ocrn3wRsPjXoVsQPxatV69vgEY2khSfP157dbbaAQUixxvNzrfy9zKdsYtUDWSxJ8YNG472",
  "key31": "337VRDDbdjQnBY4ktZ5CoepyUYb1ePmE3njTNB1jLTxxRMhVfZ2CWYTiji92uDCTnLfij2tMfPUhok3suuxY3L3y",
  "key32": "4Dky98748Fdme6chSLFVVZTY6FJW8BQu4jZhDyBdjHQiMW6sBrvJYhc2qahTJ1jREZqYap7XaBdJcG36Z4xLUfF",
  "key33": "4n5UpzKN8GHiQYcQXyMJBB9v8Bx84ddSrhwyeDSy5C7NZ8ewUhJA4ABJ9Q1bWiQjHTkK4b2ujLB6SkCPidzpHTZP",
  "key34": "5tzrGNjAHURsJcS8QFnEHE1rVBWn9DzcHF6cpVYZ1DSR8RdpNqpjknanVuhXzfQxLBeCXk7omHMHje18Q8y9G5Ab",
  "key35": "2bwFL9rv7CX6fSmkXwYDPnytEaUkm22urasPSRUJ9nkJTDer92n8Wmq414x9p2Zx8J6waBHsAEDJXoZGtRtEZgbK",
  "key36": "5taFLgRaxNrAkfYfUHQXC55n6FnNvruHTB3q2VtETKyLCCpTsYUuarLpivRnnF6EvC4itzGf6L5Pzn6qFSTFKsNt",
  "key37": "3pKMMk6WaKMZ44htXxbC6RX4DWedDM99DjSDbwCce2h1PTRMT1GGbmdMPGhoPnzJeQhFjE7xAb91XKVAgjiwLsAG",
  "key38": "4ByEZn2q7CncouJVSTEM6sghTjuSr1qoWWwBKs4ZB5GSSRqLyC9Pmdq7G2VaSkGVNuJ2RL2SV3L6vcCW1AJEdwcS",
  "key39": "2JG4CybLTyKj277thGx6HLzq5VZc1gspHKGobxUwbZ3p6NapwLtDb7FBCyL5y9fxJZvxJjYzwJ6S4hUNpo2BXqay",
  "key40": "4MfBg5TGwJks2SBSHXZedbWUriewhqebsRnmgeSECjTL9k57brTaRiRMg1GQp74rob4WEaRjYCmpfjao3b4HASUm",
  "key41": "2wobQ25ZGR5ry6jqjB2BxWzvfdpSHBWVMYEvfKMWR18rpTqodRqu7vy4GJvvzfpPdHC9Qv9qUTy7XyqRaizYgkSN",
  "key42": "2dphHZ8BqBdxWR4nn1yRxMBSQAWjqAerm94kCChaF8n4wzbNG19LZ1SR6YAm1gSXp7oj42mWFAUGmhwnKS5KsBhu",
  "key43": "4SGAsy3dUQ9npSstRBhEiPXKqBkzZeeDsovV46CoesELaobCtX7u3KrZ2Qwf87iuWZhGdAn7rF83AYBZ9BShK1Kk",
  "key44": "28pdPKcZLrEWki8P6o971p3mXCjF7AB78yeRJf3FLMRg7qrRjKQpQXv77C5Uv3xSfGt5XTxJ4YyUaZeyF4kmoLqk"
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
