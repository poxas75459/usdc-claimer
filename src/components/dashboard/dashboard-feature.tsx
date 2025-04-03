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
    "4rRUfGP3KQcYkUR8XjgL58qJuL7PttqN7W2L5usbN4GAZwL9T6RBdkpCiCTYXtdCZSqPwLfuaBT1mRHRVV7VyHfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TkvzX8stELBK8FCqf9851Y8av52rsiFxazXhgDRnH3S9YuqToq8XMuPCZmyb1do4ke6W9XGd7dVLKe7JWDviSct",
  "key1": "5Q4Ab4jLu1DN3cKKhzAYmJH9h3WhTBfBXHyZhYDLtRReBNfWwAJpQ5KGyXRqKjgxsZ2tFqTSdM33bd96hVJzCcuS",
  "key2": "5wzp7suavHiTyT9ranxp8v784EmYZHi3iV5HwFVVJY3ZaZ6R2rmBVFP9KL5ntsFM8ZYbdXN3nKoUvcKTcVrWApKF",
  "key3": "5RNaqLYA4CSFfNRE2h15QKeustfcZiJYGFoRT61MsXBDPpL58hMXiXYkjutuPkooqBWcEAJT522wN7YBxJeyvNxN",
  "key4": "3vac4BcSAJyrQndeDr98EjALJBeb2m2BWayZ5HdMsGEtUkw875AqTqYEsQLpZ3vxKgatWZdWCjmqrZgesQoJETP7",
  "key5": "5q5tRmPdCMSgYyPK6tLiSLEiZHzEGEykERx4mh5MrQNezjKPUhULqeSfhKrKRAbnfy3tuB1u4QSnTMnrEP79eJs2",
  "key6": "3LyvNGzQDMntUiuRYXQ1tXwLgDzHNi59JbZfkKuhc8AVifFrve28dNDWwqC1CtUdKS3uuhV1ZMNxsC3mgAgJdjJ6",
  "key7": "59Wer2g5JMJ8p1sZrFBKjTSiBxzVdNHLaDfgHLqy9NoF1pC2amegRxzxBHPxg6r4Csr93n6trMnt2PnPwgJGUKth",
  "key8": "4gBs5sWR9bXuLDMFCNc3y5nWR42wcpWDG9aqLie2QowMnSn85tQKBGeZffuz6DXCrX96TmgPKrm8zLVXMgru3qQ1",
  "key9": "4wJaRjiCVB2tCnkRHbQndU6DJVUe51bRdAazs8VyRxxiB9vVHpFEayCPF1SRgHAeA2M8ScA3j8T7qHLJohECVGQg",
  "key10": "4m151bcfEiRUD175f3BtjXbxcCFaxWfZPtFvaynUsfcqvvntmSScJ8FgjfFvSBziJs4GJAk31UmpKGavFSBQjPtp",
  "key11": "3VRwNQGaCbTnS4fZnkLwNKwCDc2gPVF7DMzvwzpwmoXY6EtdQGG8eiA8czNzmodsmwvoLAqQTE5MHDmZkw43VbYW",
  "key12": "52Qp4YX3SXhtQXjPbSZNR4ZM59xD4k419sWKgSTB4r7kHQdDFdZimDaHimMp1YHKvM6F8hxdw5v4Koo85ELuG1vF",
  "key13": "MSrZHvuDHrL74KjQLzhdu6zQWmZjsa6fqMXDn6fwJ6tjKPjuFeqpVBYMxbYMPCKbEn9ByJU7BWzqewsVXC7HrPv",
  "key14": "5vPe6zQSRiVruXduKZofq5MssMSCeqpVEWb2dr3ZPiFwCidGUECcnTsXvXu8SjBH4BrQTm8zpmfraMgQQsGfgV1U",
  "key15": "zJNqr9GcGqEjGFRRAMf6o6x8xDKQGNFAzL1ysSkiP6tXX2SQLR9wJx43CNbaTQ187kUNPuS1snrt4Kdv65YxQYZ",
  "key16": "MNrPa5bptkFs2tEt1ZqQeKoxvwfCboZcyTGvx8YimNsfXb1PRmTQfxxW2oCH1WZ1T7uWSvoDPLzRTrnBE1GLHUH",
  "key17": "5uuYiJVmbHiPffbeDor9Jq3DiAQ1d3pFDHmhyT1ZfMhefJjaC8TnLTHxy2n6AXZcHZWUJZ5z7dpHEaC6KfRVDTkq",
  "key18": "3aaUFFQQZuyp1vPPc9rdYJdoPWkxePAd2pxAUm4NFmF879EVT2G8ibyW5LU6nUciKWJibNArQhvMyAR4Q1hYJZvS",
  "key19": "4aWZ4Ns9pGheNiopMWo9JfuTJvpfG3JramUKjuPFHXjSvLS6zLfBCrt6SouyBpe5K9gS6L7HdJ34WALY9Utfkhyb",
  "key20": "4bCuC6UBMQM7Zz7YTrj7Ti7kxNkUZQZEP2XjgVVisU9ZnjCLo6sh4pqxy7WBy3KLsZJKsFqBeEhg8PkiDEQtdua8",
  "key21": "5exixekPfFuuLQkwC5jRFi9L9SGQTPmsyK4aLv3G8j1suEZ8Y4aoEZQE36VJZ7q9eHB2tr35Mq8KB2UjwhNAft6y",
  "key22": "2q5DAkxmAMMWYUKr2RUnnQg8Jq522iFErQRZfgP5FwyvwNFG7M6UWzcCtLvJy9jC5GK6DRjFUwqwfMPmWDz3APsU",
  "key23": "2fELZNbvu7n34wmYNr7QWYgm2KPnP84KwkWyQebnobh3ni5p5AwMgywsWyK85udJe8DKtRqdNKBsVzH79Fe5poXd",
  "key24": "2LjgZvHg5QmZJUJTQi2CW8SGoo4FuE56veuAeY5BjPvNxLDn9hZdrNXHotsxLVGFbSBjBQ3eBv9dSMMap5q6StkJ",
  "key25": "3hpRT2g6QY7cCCPMMUSc3eC5ysJbG3vqHW7ozW6FvHCEeDPH1KSrN48kX5Bv9orJ1biXwRZFpkWzxFeL7gsCkwCQ",
  "key26": "4biSbuzE16TPngyCNPuBY3vA97W6UnP3a3d3j7pAcz5rcMBGs9L3WHoUtZGnY3bAY2zw4RLyFtUpAi3NruVJW2w3",
  "key27": "3jSwz5B9CfnVtG4xXUoKavwpmhqM1fVkxeEdWKJNj4zak4J8KprAjpsYSRBwSFDtEW7BMpc4vQZLeKiDR7kLGmMo",
  "key28": "4osms6wneCAshqDfLQBKxRccacU6hN6rGQ4L3rDSToMYs7kRNNNTaxmsPxTtrdAc3BM5MBSEFDWiHcZFtszHLBdG",
  "key29": "546ELE8cvUDoRbEXHTVfWe5DUA8nwCm4tcaf38ZqehG5UyVBbYF4obV9VbkykTwwRukqG8kSeCe7FPPKjsJEHpLm",
  "key30": "5vDBQNE1wTmYhtn6tynMVuA6LyhcP2JW5e49dpATPbSJEM3S5hRG1MJTHuRmjmpa88WKNRP5SGE7gx4a6ktDYkyq",
  "key31": "4UuKXZ1JaYHoHv248HpmVPLuhmaFeDLR7X6qqcEkq1tz7BXhWBZimxAH5uKhJai3B6VKFMGGeFWM5GMRF37mr2Ha",
  "key32": "5fVq7PouhyEu4DFPNBbxUkG6AUDppMeGazZN2UiMxaQUFPv7Bq5SMN19nRixKURTHuQkpbvq5GUJReVzvrV3CnYc",
  "key33": "58RS3GrYtpBknUDPbbepZCLzsGuxEwdpTTTwq1uWbHQkJ5JLDN19RchxzEeCXDBni7Y9DyLakMUfJFqehqUYdniM",
  "key34": "5gGPt6H8Z9SWGMqfQ2XHULckab9ivB3nLHczRYvAL9VtKuKutoR3Cs3R2Xz3G24kohc7Yrp9Vs9TBsrK7EPtFArE",
  "key35": "2Z28FaYaA1fiS23yamTCBRnWky6AS4ZpC1vBMNHu1S1VSaWjDRKyqFAFqqyF4985ZE3UTx6no6orm9WBDYX91ggJ",
  "key36": "ABusV37AmZ1GLL61jcQxSAjds91vDtN28C4VCHw52RPUKBqCSepVhK7DxHHvCmbdcJANQmS2iqptgLL3AFDQVPE",
  "key37": "52YRZZKt2PDDTkiiGBgj7QvQB1sS1PHMMpD43dG3RQwpqiGmnE1cn2Ap4f7bENk7AWTP1eDPaVVKS8sdmYbjdTS4",
  "key38": "5MQ8oHFna29r8jNvCEcxpAFP5oQEozSHSmsTMAEmDjwtFwFz4Ua5AVcYKyURrs5qPZJ823XX3KYiQeVwhRMPM5Ny",
  "key39": "4SVHJZWXYQtGXXBHHqUYyX2VYWRgJjwMszVCrcwnvUjai2VPVbakgHywT3rYtPuGvcBYCzJk8bqjpodLVmukNrt4",
  "key40": "3XgH39BHqBmvfJVDMeBk6jYdZ6KNs92qZNarL2HiiiP2qfDtAHDkbzbYiCvHigMq8WXQqqvAwiTejnibV49tRtwd",
  "key41": "4jKMXxjVJkEfkVG7WGjc2E4u88YY8przxwHAhusVzqkrCkAw3jGMCsBbCM8jn6qoyGd555mDyWYuVnvsraVueQ2u",
  "key42": "2vjAvrznRnqyrVWJjFEJFYtMFbhmN2mpYC7nbGBenYHU9Er5ibk2mEuyeMjYahAeYgQ6Dhe87Ji4Zx6U8BdtaMNy",
  "key43": "zoDkowCerS7LYb4FsJd4bJ4KaM4P6afam9CVt6MEW7t7o3WYx6dxVhVL5x3bc8QaWFHKQsSR1wo5D1LtLWvwh3a",
  "key44": "5su1UXoaAq31Cjg1aL92mvcea6Vh8TUkwy5gLAKUcWEpSVzMamwTQYt2aJWszUCLD2PCnhjwfZ5SmFoGdDYwaMSG",
  "key45": "1NYje8xcFPvcUUGGhLQ9YSpyyKpd96FCXx8WrR7tfeWyGcfdgi7vhv1j2NGFuX1r5UpfaA6UD4xcTHKhk4YY8kY"
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
