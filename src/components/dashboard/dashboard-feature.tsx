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
    "5c6ckHfjkEsUQtEHBz7eKpEFmWgFUsEFaVcFgfCVFYRDXbk2NvVSShbHi1q5zShZoeWjwpNH22awmHAP7Bsz7dst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F4BVTc2xK7h99nDNY7oTQcvpKFbhyo8hQfsSAuJdWa44kvMvUDzEjiGJKYCaN2KWuTxVeuyLwcejmzGUYVsZJ4d",
  "key1": "5kndQcx8U7sK9xU1VPwiVRQfmJntjETTQnsrxusSXXmctf3GWAqNoQWAXgeWxbmvQCmfyKzkSrJCqvMmWxT82WMp",
  "key2": "4mLQhx8gSye3ZGWbjbAQqWAB68zdz39hyUFRWGmexKCME56kxskTuVUNGiCEAF6s6ddZqaxCNBRzsyYXgrrqW8cP",
  "key3": "2WLRHCEph9bQWz6SrnKvb9DsesY246EZm4ztGPTgFxLd24FdrQWV89saULpbQTbKJ4pZBahHo4HZ4SJUxzguPK1e",
  "key4": "3XJYGTHvtYTFyAMRggSN48cBPkAf7SuwMnuCTkUB8VhNMTHVJS1Zrsp7d4ijbmXuTvHJuzmMwsiZ2ie5PdVERLbK",
  "key5": "4BrSxYXQhCUhAdwqNsGwZwF5KdqkouL6MqGbJkEjYBuhfmKhi7uxed8ck1eRPy8DB2wxdSaQbrZHdzCtzQEjrhWP",
  "key6": "f9jAGFCSWDZumnxWAfL2RHGdVnXGVYw3hLpbV69aXTa6sijhFQVJVwZrXBNYjZ51qkumyKshBtEbExy7CmJU88N",
  "key7": "3b12VfNAFe7gc17tzGMbKYJXm92j8PXuwWDvE9GjeiGJEWmrpN61t4RSZbnCijdTGFFM1nrcQHYrUXHUURnjksE5",
  "key8": "5hDU8MGpMYBDuWvpDrv4RsV6GRRiH4MMxEf9FNwAdGsAkxqakDS46TFmvSDS9xPHn3Y2WtjaBeFxnGCBT7oKRPA5",
  "key9": "qbUBjtbGH5ZmxoHjEus7gcdkiUCk9vpRtfidXkFo59xEtnAzLKPKF7mkeqr1euH99s23UE7QYoJJtqBKZS3UEKW",
  "key10": "2YijLz5MWA18fDvVe2kvzr4tQVDvytsEDRM5WKxxYTprGDPcz4dx1tNQHTKg71yb2Acy1MJHodkunYnLSdy9Hvq6",
  "key11": "4k44PNzsinxNzuPya5nqb5hhwompabkinVqSN5CFTiFPRiDTWqHU9UqXYw52FHULWEkTi9yodg518qNgUGLnm9xf",
  "key12": "5ab3TVdUqLikA1i4WT3SV5JQ1WRTBzRCTAJ4bnSF8e9w5jA6pbZBjmXEmZR2MUXKhPorp7XYmnes5Xz75GUFUdw1",
  "key13": "5RUcCudeT4TRPzmTQs2KtxpeYNc22vi8sUbihtLo6UHcsWhu8ahXnbQirJ1hje8AbNwz6CvJh1Usws72RJ5iKC2Y",
  "key14": "5UDsBNSy7HVCaNFSBrreAjPyhG54WSrQgzr6Mze7uvCv4QYrAummXqMuMwj6AgbRhLsQgnH9EpRYEXHV7n16ms8i",
  "key15": "5QFdGSTfwjekaS8F9BJEbgRESZK85nDQQAW3BQkpCfK8GVvbKUfphRxEWGQzNjfrcGaQyHtj1GaEvrMYaJkwX2um",
  "key16": "2MyFVQFmX4pxu3w5LWz7RFTZsdi26s5g2mWvxeGes61xJb696CS2bpY8Dzk4PZnF1RRX5J7mpFBitZNubbcriDZc",
  "key17": "4RjBL8RFHyvf1CMzDvADJBYNytboZH65nPRSrLqrL42tsBj8EC14UuVKvfa8fF9wP37RWopiPh3p692TrJsxqC4",
  "key18": "4f9cVFyZZkn9brSgHxei4s71CcqTQUsLz6dBc2KCbv28wx8GPRwkozJAy6TbkKZrwB8daFxG8W7J9TJLaSZjRs5n",
  "key19": "4uRrCK3WcTvpeZ3whccgMnsYy1qhVPrFfgVuEv9LipiU8WE59FgbYFQrrJJwwr2j35keRm7uT7Pd8VjJTTwKnSLv",
  "key20": "3htJfzZS7seS6oUeFph74Fw9cmYM8KX4wcsEe7HWJuzEKbmUnshY72SXiuba7Bioj9Kj6rzfKPQBEZmbotSWCYwX",
  "key21": "5zMJBH1DPhKme1WL3Siw3o2EbyFbRGcTCfro4WRMEScngTHo1EBkwe1r4nPWi5fwjHBT4D9nvSEb3QdCYGyMNjef",
  "key22": "5z4n3KKdi6FkQ6LEQbnRctVjwSUZRMVn8HJzt878RQufCQqeU4r7jbBGNFwYskW5bW7sjGaUUJZvuVEDTFZuYXwv",
  "key23": "4tetusVuHc8k9rM77YHFhv8QCuzurLkqQukUWkY59Gj1NuRNPWVcCqZaJEv8xTC9iB1chFWHVBfB1DHPeFvydbJN",
  "key24": "2BUUxLy9bjhfspKbtAjDDaFnoVSwzPTuw3urz7EoUTkfgNayEzNH9e97N2zWNXHKgjFPbrC95tLeCFtZk3p3dFdY",
  "key25": "3fNeunZkmcDgTLcpHsqL75iddjJ5esgz1dgCyCE6kpo6p7dvT89o2yK9x4YwK3Hax8TPWDh39Q1VwXepsrVjDXw",
  "key26": "5cv5mNLsvDRvoLhANTW5Sgi1SvUsgNgtVG63rANcnpCfRkeMThrmjSiKfy8YvVi86bwva1XaSDJGEb5teGgzS4tH",
  "key27": "4ymxEnXMzCmsRFiK1L6a31BbdigGebXdgUWJ7n9rqP3As5XFFjrPyR4syF7KCq9Rrpoq1yFQAHefnd9T73PVLqf6",
  "key28": "2bW1QXLyWRGypNfqa89b4e33wqdvVeSW5QNUSvcZpU4XvHu6M3cfz96TN83eQQQsNWC3AEJh7sCsTDYhH6syqt3",
  "key29": "4VNiwoVjJJZHNwvkCasGvGbSj6TxdNBXX6NbxMPYu1PsiopMC9vfyANejCurVQmLSPkzqxE3JAM44DWgHRmA8spJ",
  "key30": "2ZGSNbtmZLYRNMwoBJXb4oysYUbxV7p1UXaXrvgyZTUj67fy6VErJ8K31mSRDPobEgufKwzcDDeuWzZzD5stajaP",
  "key31": "HV7JaK5EyRzt3kgECjwNJC9v3rJeR7AhefuVFzhW625vaCfJZtSufdq7ryxtRYUWzE3tENUv8mzLesfNEXT7Zs2",
  "key32": "2gPiKv7dxdJj45hYekbLrUUVSE85XhHUxEEESStecMbg5dyFkL67VaSsAdcKTcYbuqT283dWXcd8zC7bbGZcHoAV",
  "key33": "vtP87VYah2tWcDQbfLgBFUeQWUszTeGCnXXFEw22BtPFbrcLK858gvtka5joUCRBXAYdFKxNfR5o1qfjkjbaELa",
  "key34": "45Ndjn2rVdx1jobAhFEHExAeJPukTVKV6Fwp55SFmPU3u9sH8WnpVmX7ihGPbff8jzWdvxop9hjj8C1Aqu4YpFPj",
  "key35": "2RyRCRcaAYb3GsQFZhjA2eEbGZX1pub59gU4uSffYMH68Ym1G79HjyJP1MFxKD7UuqB5RvX2kSb1PK6KR3jtR8Zb",
  "key36": "3oEFRFGuSv5ptbZMx2RBzHKqg2tGE6TXuHMtV6FpoSBvYxXdNP35s2xrhjf3r2rFv6VCAxBTJaYoF2Z3FH1nd7Jn",
  "key37": "3RPcCMo5Vb3XD1U8piX4XF7yf4L32j8tGqTR3jToWSz9vLhD4yjd9iWUS6dMS16xkuehGJwx3yiUcXcYLyNAJczb",
  "key38": "4ePMiFSYm5fifPkBu6L1pqdDb3bZyYgy4nvxCgNawLtaKZE34DM8d9fT5o9qc2khr9YDr6Xo5fW8qDXXbvXaoQmV",
  "key39": "5Lbgfgdhth6u3VcCQGiqbbJ5x9oVRsKNEBEPjYwEstxKC8DZjf4QErf1i2GYeWUPKCvT1wQ3293QGwNHxQAZSGtY"
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
