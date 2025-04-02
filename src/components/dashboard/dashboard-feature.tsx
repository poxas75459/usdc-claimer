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
    "3Q1NRQY591v4uqS9oLZzjEVvmz5p6EPp56zVx4oZNEJPMocQcNJVL2GwBiYZASH6FL26NezWqSF5MTXfRKQqyry7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuveuvVaZ5vjXwRA6csdwRJZLdEcSDsCFC1ER639kVrNSUesKzCU4Lgkq1eyKuYAV4PC8y944p3iNrrYc4sYV6z",
  "key1": "3n2CkuQVGw2oK2y5sKNevTbYUUHxC5dN3SsevZksRB2h1UhKHjVmYKtZ9btjTPEEg2dNZYnCXHzEJMzxmcCHtPi9",
  "key2": "BBHu5FrWyamFZq6uAcBhupPsi5PKfgL8mmuJ11La26hxg1NdWPAmR72ai72q8NMnYsG6M6tFVjxqzj9kSpqNkHr",
  "key3": "GAhsv8qVGJWZtgVYbdXuibRFBEPtgxDsrWqvNKidzDyndk74n9rZfCQtMQeazfMMyjKMPbNAQEommAD2pnhzMT6",
  "key4": "5esKkNxFNbVHGNf1bPfiAmkTL21TDMr8Zvhfebt2N9ZLyqFc6pX9Cqojv3MwYQQxzKsaU1LDk8udgozPUkLZHGPp",
  "key5": "5YZ1dYNFvNiH8qPJM7MT7kVd6kq42CmXnA8jL74CZpaGSH54ocChiW5xys9zNVUTTiZhmiMmuStU6zABXtKt2Fmn",
  "key6": "tAVtNNCDJf6V2DnpSJrwLPdJP5DkxtknQym92L38iCmGiniUrMxtgyjeWYKCTBxMSzJPPFrHqKxG775aS7AnYKo",
  "key7": "4cvh8XAoGsWhvg3fVZYxDTBCFspeH4kNmtVw224ms2qyqTyHzXnurN1rRqyGaCch8AndtFrMsiJb2dkf7pvK5GR9",
  "key8": "3YkxNJpJDwbbWeSvXbtD1grTJubPZW26CE3LVAyQK32ZAksawWpCrWjxHMUFgsczn3MTzAiPPdj2QRE36BwpHbiA",
  "key9": "2KLi4LSa8LdUvLWWT3yJeaaFLzyUn2zWCaZ6eBdavFSENLuDApg5LVGR6rVTTGFU3obkf1S9Ghefm93HiDdqWQPx",
  "key10": "MddmxqZAkcF9FTVNMckcNRboNaHMFx8JnwzJAP7JkeR39rZzVxE21rYRGrJq3nanKFzjtHDuHekJYjT8ci82Rkm",
  "key11": "5p9rXDz3Tx4CKyJY3K2H5Vp4g1ESVnPsSqzjVPFyHuxNUAZ7JrcdvMg1qXTaYPo2Qvmgr39pk6uDRoKapJegYm8c",
  "key12": "2E1RZN3odQYBgGvHPBDATmh4Nxey22xfggeadQkJCkfDiqHvX5oTngUkunUUfkaQpqzGMawP7UR47eE7UG4WkPW8",
  "key13": "3vBjwByaHgpqVQ835BRbDMZUPg5UXs8ViEeGF7ExSoyGL3mbse21eQhTJ2YWvzg5F3eMsZw7eZczp459SgCUgJWS",
  "key14": "iNNMvTLSG8yBATPJRFGqKurroQLCcEFQ6mYKwqmymeSMPrcdbfYAy4GPPCKQUsD9k9mbCFW3mR2jQmFBkUhMaCa",
  "key15": "AGmrxcLuCfYrSZwR78HWq9YpeBNgKParQWkSgkx4Kjgir5UXyMfZGCYQrj3mPF2P3i9kTs7ErghuEoE7wfcuhRD",
  "key16": "5yLq4q7VUyWiai88qUC3CTK5XdZ4aUfs5z3sNG7Wvoe4rraJvrbXhbAT78PaZP5UtDdgVMjBGAJm9B7jvec3o5CH",
  "key17": "3QyZ6xjcxp4ieFPXqReMgjry9oZWqkpEANx2MhHFUvDz1dfuru2ZVAwruxVaeAgsxRXT8B3yGMoM2vaPjKyYZqAn",
  "key18": "5saEeCFhCQLwgJ38UoeXYJJFtcEm4F5kv8jY59P9eAU2xfZFd6TsWhbVX9iiHJEf7nLW7aD1PzeqUhp93CdqNBei",
  "key19": "5f6bEeaAXMctomx4KQUavXmBzrBhuTdyro7e2wbkSKNnXG6pqh1f777XzmwRDiScQoFmJcNdxdpuHPHMHSen3VNU",
  "key20": "5ZQTcmp84rBbvieAJSLE4QYsgNjw6ykzAcaENZJKJ2Kff8kytTHXqaadU69XTbsjLtKai9ZZcSMVHiR1ymmyxh6W",
  "key21": "5TE4akWmYv1VrqfaEsNpUWWyEgLXpxzCPc99aLhv73w9BV41sbrNjLSmZxuWYddqi2pJL2yrhmr3TzNtK6ka25jK",
  "key22": "2DmX78r5e77U6en3b1GxwGEcJTfaZvXYBXzy7fAfFeZpBsnxF3rVwk2jmK2cFyaJEdg2YJ7yXaiYVFug1dY3M4aF",
  "key23": "2aRXcQrNHg7uyk9nCcmhRMB8FhGor6Gbubpc283USUUuWm1VyYxyYcrFHLC2jJQpYjcw9PG8ydwwVFMxtRWqMgkt",
  "key24": "4tYJGGYiUAdyPZF5Gs7piR2pVTWW9jdSZbP8HogaNWnp3SPz5Hv5FM8Y8ytdtjhdYGubNJ6nRL3Eqz61Jv48gxL8",
  "key25": "2LUUJcndo25894mjVpoddnMm2jYDKv2jAqMWhsooTewZXxghFfEF7yCdyMJMVajWDxZjwnVrGGacQcofiXb1PGwL",
  "key26": "5JQQhM8VYGaGZNTvuCSxXme6JdSCgDmgtcCBs7jjhM5KX59CXnAVcFyyz8NHwozjQxdVTWPPiShLagkziXL4jZAG",
  "key27": "3nm8cgcNjz5Jxoi4xcWH4tg1yb5nf5nUbnQn4KYWrfPP1SwsE5GYdHWUpQy5nb6NTo8bGvm24Ukah6brs1jjwhbq",
  "key28": "52wxwem6WshFWYYpUbwaQPH7yW4rLm1Ss5hH9qJhDu9fz6nuCAh9iR8pSLBZ3fpVirn1Zdqf4SmjsAwFbqofZeDT",
  "key29": "qTS332kn2az7CfvVhmz94NouQxKGX4LrUxv9uCwRTAwyymVAvTKdqFw9818RmaR5PFc65TwnngfbNgWUXveHium",
  "key30": "7Vd1SCZdiyhns8i2dcZ6szmw3ggPafnTCRZX8rLZS84pnZkQ1fEGQ2547ZxzAEZ6CxNdmejEwhbd3yoDcPnhQBL",
  "key31": "5ws3WLjL8Q847wYafknVj7Nw769DR8Qr5eQqTkeNf3g5PAEEAE5JBe7U6m2a6BrxXdZj4KdghVgbG8PtYnGJdZq3",
  "key32": "4gyZNGgMFJNgpcigL34f23WBtdCQKDVwNKWG9ohUvhTouS3CbvkU8JFR6SLpLsA9kQxxLzyNxtSYNbGTSJwQhrjN",
  "key33": "3vMWWh3GXGk262cmymK9NcgDe1JCMJjzd2KCgtcwLkm8Z7cvkiwx2ARVkKg9SiefFRYdkz5yZJx6TARZxsyNLowh",
  "key34": "v44e2kxG9bZwURJUit6KzqHrbe7t1pGKNvPRNTYKVMrez8MG4cgeuDYrFU2WHcSV4g5e86qs8498ePBAZGvR1Hx",
  "key35": "4ybW9DBdubWMaA6DHHQVvPz5n19rAfrSrwkGkdjF1hNgmWTzvtU6VSwiZ2pJB4SebGaU8eSYQQ7Y7HdsFyLTmj6Z",
  "key36": "4zzpzxuGQmd4kk2WDcurzr7372aRErHK4j9GUv6sAt5PaCioVjVTz2YF4yrcqbGTZ8fmj25iwP1eSr1yrH7V4R4u",
  "key37": "5yLccjMkpVmbxHVAGmGio7Y2ztUyh3GAkg2k1fLjotVHwYgKETxwKEWjyTPahkUHai4fpcEwED6yyoDHzXtHbDSE",
  "key38": "2XPVfdp7zmajXZAUmHYBRKMKUocrYFN2gq3DNjnmhQtV2bV5rv9T8d3eC8TYeYtTPmsQsZnNJCHo5VTFeULr8cX7",
  "key39": "4Y9niaLPSfNYLAC2j6r3UC1cM7hvsNyVz7zfd3kn13tq1xRCzoPkkz5Lt3GaBPw4tNCYEny1eHPyJypGnNoHN4QS",
  "key40": "24tA3tRVWSZrdeksHr6f9KhFVs3nM6WfEVsnYV11TBNVMQF2UNPDppkz4P7HjJj1oZGbF5JL1yoCkTLdFy9dZqAn",
  "key41": "2q24DzCQM6HHNRzi6cjVPr1X5azz6JmMrSMZc1EQT4nFnZpY9mQLMye9n7XPpHAHgUm9kFu8ucF3wfSGLiD8J7tq",
  "key42": "4x3x1QrzFtkzBcg2HZD8vL2HGUYrpWT2L8Xgsk3tFbvG6EboNxw8kfejr1bLEgenN4KXo1pamsQkgVgqRbxgoXjx",
  "key43": "5KGu6RZyNurn54r19hSmpuKjaNMHsJZqxLWbobLV6FGRCcM68gbPqo7bgAyApcxJABEn59y6pvFHwHwJifYE3FpJ",
  "key44": "2TbiRmZu75HoF2K92b7kDsaBBcNGrXCQ4JF8AQVGBvddt6HL8btHE7dWKpgTo4XJsHmH7E6vRX74ZJF5RPmwa9uw",
  "key45": "Y9Cn1fkrhNvgmSwrBHuqi2NU7k2M5FRWcMSMm6rcwEQ9e1pqc1PNYFVsLiyDbczPckcpKzas23CdUQbZYVSR73B",
  "key46": "4xge2vbpA81WmjqAu7vsHN7dB6KRqVJHWdyHBQrUtAHFHeLmXEWC1QuHSSyCgSsZXgRdaHnbyWQKeoYf9wwsKkEZ"
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
