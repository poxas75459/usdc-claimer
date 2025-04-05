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
    "3gaWDHmD2gH5b56BLpUmatCLQTyHm6vER1mgUaQcuSqzAxFFLpqdXWSPdhUN1iPZPYrYw3PiXDNwNgtGrU2Csn9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y788bMA39CBjynSvEjisqvtnKBy1Uo4e9tRkVMtXhbi1BTRyVTayuPXCd8rSyGMPvMm2d4tpLtQz4kQxMUR1zHv",
  "key1": "CfcRaFsH7wUfKM6JaHYJkRaAVemkhpQw8ux7PRtKgz3T3WscR8kqRrpmt8xRo93HY6G5bvFvpUeNEKVHAkqEViB",
  "key2": "4XppFQ8JRB64FpAJPNVUeQaw8rWaGBVka5SD7karLsPM4DF9xZMkfnsKCMNXWFPWBVuTsUVccC591fBTotcEZwhV",
  "key3": "2Bu5TEhnXwPv5QdxFX3EoaEaYsj6xosKbYBNG9f2bWcqZoBLLaosrbxjcS33GYuFoMnnF9Qc4hyqApdggEpkmtKa",
  "key4": "2kEqv32hDTSNveTzJky16bgrxEzpAP5imj4138hcgmDNYLJWu7CNRSYzPhWmVzUsKTowpGPVaPT1z8wHUAHfyxDT",
  "key5": "5DPmWXryjSrMsJJ1AhYWSp3cjfDobEG4Rr5gh6ReAGqr6DBFxq5vhWKjy2yPEfgaJ98Ayfhhev4n7iypgvP4qGu3",
  "key6": "2BgZZcXu2v8EWPrmMr37XsoTJ7pHpQerVYCXrzJtDTFxxuPnjYaAMzsxUk4fEgPmNBozHrmJBE1LGGT1AgWJA9CQ",
  "key7": "5huSdtNNmb9UnRiiwVWYZVfmm1LS5ytXB1qPuT6P8DE6dGDDcNo7qHHjMadZm3p6XfYzyrrc5nYZnTL5bKT4tuTT",
  "key8": "419U96sDeqf6rXR329zh64doCiz12gK7UxYyDsrKEPvMARCSh7GmsCkm36rkvWtw9zkwXZPhsyWp5rykr2YgAGAA",
  "key9": "31phvisHmHDh6WRz313UQWoudPTRVDaP65mZJzuvzov6nH4KAfbokphh7KCoJVzNUqypYbdBJQ987cnzUMnZPEbq",
  "key10": "2DV6NUhPv8qAEAN5BnEag4GZZW5jowEJHavXWGK3RDkyptF8Y8d2snb3o7g6CyskZL2Lxuq5PgFLHpfBbET9pj6r",
  "key11": "4LzEny5Fb6yTHuwoYBt7PeoTGysh4Pgp3aWSm1eajPcJsoRqwYU7rwPBMWsALVLA1cs4ixJ4eHH3o7mpknVAGHnc",
  "key12": "5fWtMHngcpBk95Y7gSv7RJ9vcB34CLS2UwSdtxG9XbWAXCVbYzTfg59iDTemUKfQsmXHJkAYJvRQpLW19q2arSHU",
  "key13": "VFR9rL1gR3FHhQDWck9Pm6nyBQMK82jn88Lws4m37CfDkXvY5ocSVu2w59snKZnhycoykMEP2EcgK6eq65XCu7J",
  "key14": "2wuQ4cP99RptAyG442TuGBi13Pex6UhY8RHk6rvXbUvHBa3iaTJR93rtCSVWtgr7U1nD7PbTZQXJdq6eZ8aAf6jc",
  "key15": "3D2svzVamtyfx2UnHk9xUfRaJpZaih2Ec2f5DnTksZuY58xG5D6ekrAWT2sGo3DTtTHsA4YoNaAAKoc4DajVbq5R",
  "key16": "3CVwUynQ84hgVNej1F7dxwskhj4G44afMJvfHKCdNKpv8kCpDnNBCzA1pRzbk2RrajcgeZFGHQfSP5HVNDan139x",
  "key17": "5pgh2dQawZ7uzq3T7EwYebtcj6hTPUoKwY1dbkcj3pYwDYg1JCnVYRmFgrBMUaRzR6idmRHMe6nu57hDHyBhe2HB",
  "key18": "5nFHRetDBYJ7a4hArNNLChDxyHx38SgTp8qveJuyDVJqAvNx53dzoQj9W9citSxZLDmjwL1raxMRpsQRWSBaLf4S",
  "key19": "Dut7iUTARV1cDXhwt95wyt8stt4yV9R7bG3BpVdGKhonDRFN5XfWHCW79fgLaGjPmPvxELAUyRSWAJkVYsY97Lv",
  "key20": "3GW77YJaHVyWD2D5aXciQPnbw4h8H186odBroZKCtgNhEeCwziCeHdTMGh9Bqz1Ndf9LQTJmBEoNTwvbaYEAhbzo",
  "key21": "KUjft4iW2HofEbhvY4E8ry8ZUKZZavTPPSyHChJEu9LKEBxJj7ekVyAo1n1fDCku7aD5FT4zoczARGeArC5fm4b",
  "key22": "5QcgGsnxz89NPBQTqJ9YmY8LHtRvcb7YmwvGNuY1o5ErCcv7YadbDL4gpFeKdZuHqKwU9y44CYw9rACD615j3kMA",
  "key23": "2f2c38frLXNoj4uz8CYBecY2nmM8DZ2S138qSKcKMvN33NgnNAh19pyFh1bt8m8dkX86bLTZ6WAsQeBXAXeSj1cP",
  "key24": "31LkJmX7Eq6QURgRxTE6MCd5rRMQU7UDgPihLtX6tWqfC4J7PdsYdPkPjGaZmhWsB4B5U51P4QyGatrz52FwhCmD",
  "key25": "2BE1T3uxaaNXWNpTUbibY5JQyXiJyQ9N9hs46sAUoM5StLr94vJYb9Y5pAyLRcLSg3TWHpsEXqWxbhhttnk2bRij",
  "key26": "3QfxwY8ZPBXxi1mkZXUa1Dsq7gRSkFs5VLK12B3wnZDA69qSnU779f4EPCUnF3bJyDjqBnb8ZJ7KiFaLX3Z1BENd",
  "key27": "4grtZQ7QBvjMA1fQi7FX7cShYudzsXvcCU4yrghDsztdinNpyBgFX9sqhJ8Ug8fjNMgBBFRoPptL5JMUWPF1QeRf",
  "key28": "516298kzxPJG56aPB54JXE3iyuCs4GDb8TLYVUbus4SfkG2cgbftrujbww1QhPUME3XMejjnyLdY2DNZ7HK7ofKe",
  "key29": "54BNQcmARucedtH3nxezsxw9CQj444486wqhebZjB37Kg4RpdBNDMfT2sTRLR1L63ko3QJgD54F2DrNrarvGXTeo",
  "key30": "5BTfX5z1K7Yt3Lxn8G9AF8MyPrYYZ2QXCrTgvNoiRrBt2ftypAzQt2UBz41JHWbbcytgVJ5oavb6TNVNRBnrYrsv",
  "key31": "5cTsYjdGD2jLfSAonWPgkfytzDGiYUZbtqWg1DjxbTTWsex3hSkyjkkeZaxB7nxPtCA3SG7XpHLf2ffvkgSVWN5n",
  "key32": "Xb3FuDctW3QPMAXZBGuMEZzrVm2R4ymYA3euDzNwAqiP5ebMqz2Q1Ht8T9qPmssxQpdee97UgGsqDsS4dHcGJkn",
  "key33": "5UDLex7Y5vw15gmELWXuGmHHse8hE5kdDu5ppaghAcxEteDV8GEYDTFrQqprw9u72dDxLwW2xHEF1n3cTo7AdYkH",
  "key34": "iF5THd8hUWstfdccyUdbnNmc7xidZsniYv2DisBwQBMazFpPmfGRzePrPxWDJdx6hDNHfp7miUmK1LEwQ4ZHgmC",
  "key35": "334V6RvHqLbktFT7bnEzC4CfZybrKEYZvLQePBaUMHZsox6i4acmgR2csRNZz2knXg76wW92m8HMxWiRDrURrvSv",
  "key36": "xvPcqpNsdJfFALYa1avwC5CDBrfDn3112TFRHnzxMkRW63Jkq5gw4ch85Fpnd174qTsvw3uJXtcr5TK1PjrKLw4",
  "key37": "4hgSBfegJGyGXAVR9SRruAq2TDhWtyvk1mYWZa74bDLEctLYkhggi2NfrZ4kRWefJapCrL1PzhbWmxFRtvUF1QtQ",
  "key38": "4sjCY3RwGMZ46XTMjGKppxXbfnMSCdnpy69LLF8ManGR7KBEqtKzp54PcEUuV61mLvKod2EJaeLsx6nE8FQzmbuE",
  "key39": "jHzEd2zrtGoC9Jto3og5fHw5Pu6rdFuf37n3snLzgSyhHGDk73866254ZUUC6auTmqYzPZzV24NvrpuEAisMD1a",
  "key40": "4f1S4ekhs87mb8LeZG3TsVTrUAGVqcfcE4wRgGLRoo5D9JUNoGe4b4Xankcj6uLLpygPp2wzD5vCyYhteQK56eEN",
  "key41": "5KkrTcdijGsEExL5nAeCdRDgy7wZQaGogxu5zfFN3BbaC52ZWDjtR7NDc7RJZ69dm5Cgwds7SHpB1BAGZPYtMVNE",
  "key42": "5avJZkCzetq8i29tRmSFqRwtTDUGFZejgepEdk3YsPitXc3sD6Ug6LNqJS3kuq9cVBSAtKvKPepHZKeF6BRfATwZ",
  "key43": "56GZBLm6scK5xponBVqH2BhRfJ5QPA1vCyX8GTq5sTR73sWfmWDgTVeyDdC65WtbexDaoPQp8hC3qKPXryfQKWgV",
  "key44": "3cZJrVWuTYh2vuq4jwdJUxMB98b5cfjHgEive1jt3F4okJYbwdhtBq4Fqr6qsjhc9ygVR1HBmDuurqm6FFxeEFyB",
  "key45": "3Q365c5EadK6BpMpjP45Z8WT6fMetw6Wr7ajLByhS7XN56PfvxAAkD6aYTwm1Ym6WkGmnHvFsbwtW5QiQV8VHmGA",
  "key46": "3XfAdnQ7wBZK1fnwMgG2Xi2Mo53VQFoWzecgn2PGHLT9S3zNVADpy2qBfS66TeKeQjv8ssEkz7gujsKtEFZ8jfYs",
  "key47": "5M4iXGGYbKECQTnk4LCUf87HpeKXWaqmqFyNc9EJ2kGAPb6X1X4q92rSc92c9fmtCQtLejEihehNT1svXaAkU5nC",
  "key48": "21Z3sjvvPaVNyCXzUxKUSY5n33gWwTnodwesFfiV9kbpsJwBTCE9mHmtPazQcQVv22q8JDh3ToWSnbb6GmPGJafU"
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
