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
    "43MBu1J6H27vxR5ZPZQNCegSrtYgohr5ARMidqcP8PnxATZqwNzyX8DmrwGRprAXPkrrbM8SvcqVg1iHpmBhMRoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ygLgWkWwB1cvwqJTgMQGX4MYuhwf15oEXSofsWCgc9tA26g9KSJhxuktfFtBBZF2fqhwEmcp8y2P9XxDgfQRK6",
  "key1": "4fDcGescJP55NuWwhm2mBtPpkLXeMkfdT1gKiik5cdWKrKCDpdqnPBzTixhvuGktJhKycY7rkzjoyjdagqU4ZKsa",
  "key2": "4qL1aVinuG4FHgcKukCNb6rRXuYddNonVmGgTHfQVamxAQjN9B3QpvkCjsanr7mtCKDSmxP4UojbAwVuTnVBvNUR",
  "key3": "4UURwEQSz4kM42ZFYoc1sMtMh6Zmtd3C97zF3Zqs9QXdWSuqjG1NNkhS2JeqL5n94jHsHVSnshCdAQzrcKSjBUph",
  "key4": "2AJ345oxmJTnj4S9UT18uU8TsVUHyBLkPvsziwrwV3A4hbF7TRPqTS1ynaJrKd1JMmv7WU9U1VVqdnkPsrCz289E",
  "key5": "3cdxbbdR7hDWHqmbdnvMkUdBYjLLT3C52ufpeYq8EGPVCvRFgcFPxQFTymz6Uq9uL4e1aCi8NQA7FNrFC4GuZ3sw",
  "key6": "2edManBSKLzprSzPustSfhmNU42je6nG7kaVjZRhi4szPeeJBt21mgRAzDbjD7k76QVJVJAwt5bFkufYbvdbq6fy",
  "key7": "61HDyshptL8iraAWVvQeNNnC49hByZmBWCMRGgxJcA8tx3WDhXCTnPQzsRiiNNE4Vk45KFNek5U3GLmwLwwxv6ac",
  "key8": "4Cfwys9GBFMCSo4m6CHybnHteN2nT3UWZ8Qt9ZAkGuE8AHz6pDJEUWtroNmDsnKtqfJw662meQBmXMHsXr4UV3RQ",
  "key9": "5a3LNbEUUB3GCde5ZTmGiDpvCcLWyPUBefjqvEnLs6DkPRpzJ2kPKBChsPsLTEPu8z2zEYYpX3byDH1eEtjqda74",
  "key10": "5exHX8x96TkedY6KNf31qCnESXshfv2XdGpYegHQtWYQ4cbaayKUXYZGeu3q5cB2X7p5MX3mQ8NEvyBGoaKsnKjn",
  "key11": "2bmhgUbri4j4NWiMxfmVuDBE3XS4LPgVeB7GcTPWJpyMcPBmAWSzteQ1JDmzsYb19jjUmhGDGZaNTHuCEkLTuRtN",
  "key12": "8SNupRzkkrQpuGt9YFqLBYrxGPgvYNAWsBnf6nHmJAKDDvkwrmCUoGqoawfxfegJjQDGJxhMVw1bEWX4YYY2Ri2",
  "key13": "62qCMYZzf2M8WmLoMX9haV3MXafK48gSdtD4QwETR5NbQrihHAEMZbAn3pgzmMARAbYSDSSQGxRrs8fUWPTJXjTs",
  "key14": "nSQjbTuYPSv7VNR3rs1hb5RsMbbXErTZazsUZwSpKmmgwoRK6AvEbExYA7Z2zbuYBMEakzRPC4NTHJrA24z18oW",
  "key15": "4FgK7MKHYoYd41xGN2Yoe7FdeDr3T4FakBBhMabgkJjVH2c6HtHPMfLq2WqiJZ9CmXTeCiudC6NDx9z6pzFtTYED",
  "key16": "63pLkpNrWZK2wTF1QBdQy7QVqr4SjRVs36Lf2oGCX9muCR1iiybPcd2GwADePL3kEZ1f64nQux6x8AZBNric69BW",
  "key17": "efBTepPgUX185PVWkzRmku6vATyoQDnvTrTFUBodUAXghZLfL8V7N6nytnSgV4P4MvKW41LuyNCD4zQ6pGokZUW",
  "key18": "38eox6b7rAAZjAoufiN4vDCaEuL8SQuMdFxHWjH2cC46PF68kasabu3yrna7iNoU5KBEopaEsVdeGpnF2nfe1yDq",
  "key19": "2Vhozx2uKPHDbakh7X31TpTth35ezTZGWGN8DFEPhy9YkAW3pG5yxrHfnrLkNPLTaeY8bA8ok3Em2KCV8j8rHdXT",
  "key20": "34CheYbLE6odziDVZxSdrj2ji1xzDSUwM3YAsxfhm2ByUiDQR2YZYDooE1UkStz1dyrXQ6jbuN3AimrwN42bdyYN",
  "key21": "jU5LXMZzHvcoYPCVJLURCA3oUMJAgc6eWdUb2D7MiUQaeq5d2KEG6xCYrEUxVWvTyeuoDt2LzXxJCKFXj93ZV1d",
  "key22": "EfA2yag4E9DaqtYPcyna6U5XHVGGgbLCWBD7nwZv2xgJ8ZM4AR49iG5KJKXZWy5MHXagTiDRENxHZpsTbcJvV2p",
  "key23": "6MRYog7c6NF2pxFtwBxGo3qrQ9EyP5MPgsuc1gqdBHto9bcSPkvF3Y4nmufFwaAYkLBnNzZVauf1cMQan4h9m9h",
  "key24": "33bUC5bTXof1eE5QG8yWezJo2ub8NKJ2MTF8wWtfZUTjw9bEAK979yr4YbuxSGvH7c4LyZcrMS2GRwjFoQaVNfNz",
  "key25": "2oCAbYyGKLRbmjAry5xjoNxpKqEUdGVfm7kUGDtCxxerE1bv2QPc2zfRBx74GcYj8jUGNJCPXWkKYTDFjrrusvUB",
  "key26": "Sdkyvs4yv8F7Pbcsv2qcGYoP2RvzeQKPqH8YeuREY7U5LcpyYdE7MEEbDomo7jzAtXBR25Gy5QcQj57g4KBmCmY",
  "key27": "48NTSzP3rpEBBsGXASbvEAC27jL97Qpf4y1thBTwY6yG7gcaDQXRJuLWH6mo57LfW8q9wKjPKXPRT3HupGd1ismk",
  "key28": "46WfRLKxfifzEZvsfijqNvq1moVxGuz1Hf9UQ2e5GedC8H33eKv5NqtGRx8xARrEqDafvz9gDGsoijmF2FuAcQVS",
  "key29": "2LkVKyLcPeZYRzZbbg3yRfycQZYECvtMhHERn1RVvVuQe7vknnfmAQRMNEz6MnnvSNmg5msQ69CAny4UX59KL2MC",
  "key30": "EXTT9P5tiTsS3hqmpdkRV9M31bHoLecJxovvVosLPtHnxVebgU6TBiHCoLT1yCgkuEsVdyi2fZGuqhDccGjLDDr",
  "key31": "4uZuZehsHzd45dcDPGMK9DUkV97vjkfeoNNLGMQcyoCLrqM6L3hV4pR931jNEhQh7FNcHmmTj4Ub3T7PchU5qvbi",
  "key32": "3jSNCHkU9rvdM1MhhfJe5L26S6tLdfodmbWPXZwhbJ84C5PkEStqKa6WPLEitT9tAza1rbxwT46cb8X7iS2k494g",
  "key33": "2yXCLRLSWbEuYXorKD3qrrhv97C36NjUi5NtB24caiiatRZKZRVU7Uu9Vin7AjAMDubm1ybnzPd3xEYjeiuawRfg",
  "key34": "2QkEkS6hnzQk2XsZVniKMavAkTS9xUcqzEnDteUVvFStiLvjWkQ2qiMtXMMUg3sTNj8queaKPJPSGXB3Ja4ptG9m",
  "key35": "42XgPbZ5vEmqFQyhJMzfHmCMEieVUuZfqB35K2JF7PXmNPA8qPhNt3374bbe5QwKRwdqtab417F1eyHXTJ9tGygL",
  "key36": "4fMTfEZYHBdeyqE6XZ4gmD5edGEFD67nHgrifFghNs3NRakJ4dUCtKuJp3fSBAYphFrh4PL86h2Ei38WzVRiqPw5",
  "key37": "RyE7ZggJxEdWQcNqSvYZiWZA2hUDUn2mACTixPAjRFtf8VzyQjNxq87cwdeCo7R1X7w4sR9DL6fcMgpt5xmBF47",
  "key38": "APZN1dwakKJfoo4wcc5ap23mcwT44tY5yrSQSFkUfRuVzCnr3BbDbd4uKSkfGf6w5gXcRkYuFUSeSAZPzqnkcLz"
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
