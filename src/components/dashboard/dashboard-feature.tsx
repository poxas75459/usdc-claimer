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
    "3GjnovsgkSHGAZfcphoa7S9TA3gdDrVwL6Gg34vtCnJDLaPMAStaFa3Ayfa6QkTADTbMiVmX86fRwhBzVEezDhz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmwiAkuBFMrMUQiYNiSvzDxrKBTgWhCdvZBmXMWTZDd5PRQZxcAgUS6YxQYnjNjX5hUhqWsKNkphNzdkuoxsNeY",
  "key1": "2xdUGPnEUh3Q1VpXbBYEynV18h61ePMP6AiqPpswxJaLDWGUALfiggnvNMUd5xijYR3MXTgAZw7QwyvTvNkAmDLe",
  "key2": "5YD1eh98voUKK5sejcMGxxJ9if6BxxLrAmTM45wA2BvqUnZe8nAQreDP6jbnMKM5FcRbMFCpLUaSzG7P6igBxG44",
  "key3": "37wRfqjTkkcoJEcXYYsRCAX1s8aZFAQuDVH7fxTBZaHpCB54P4cfW7v3Kotr47wqoqFgDZTUcRtRLvuYxHaoZwT3",
  "key4": "3R76tFLFawJveqQch3XzgEqgzyQ2YjSLsSreTMhjb2gE7kp3GqqJ1i2AnFnY2zL9PoD1WhZ7jwtYHbdCgRsqdd8o",
  "key5": "5byjRJxF2s2Pxg8eWwx8YgLkHNKufdaKSTEyaM5iQGTPtt8B35zUmRbNKAjZKg7dH179dueDPA4k24y8Lyty916F",
  "key6": "5VNnvj52TtNkahoiAotGqcTgKiXG3uaEc2ZudhE2Cjfm4NS22ZceAfxRBcGR8aZXq1LpT2smxApMP37eUrTBwz3g",
  "key7": "27DeX4PB4jbxHjFuZAYJx2qDsy1wqwX45TutSVCWM4j13aDguKcB3Tu7WemK5VXHEJm26XzrURoYdYPqQCV5XWDg",
  "key8": "FhegspQ4hVAxoLi1mZkjPFknaBEaRoMwm6NruuNFM6gyrUWA489FNUsiHPHMvQNMv3PZf5P4zXzXTmXdH37gjEZ",
  "key9": "nvXsHBy4P8ff5HojReW9CMWyiHQtuUe6AERoXoSArZVu65Rp7jfpdvg2tP8FtEKGVnoHkjSZqVzRHjNjsiP2yrZ",
  "key10": "4om4XCyjcvhRPCd1ube7N91xXCnuVvBT3pU7TxKxYFtWA3qhef45cHNN36E9A4X8XUTPu3C4ZDKPA8PJD5ScPCun",
  "key11": "43LSPb5Q3XkVRkmJRbKCfyF7YiA5eLZQGLZAnGVYSLswA9ov7kPvjyRHAYue1HBgegry3bR4RSZjRFsQY1oHKsTj",
  "key12": "4TLqViuVH7j5zUBXUyjhaMkt8fawRXL8JpafrhtqcUq4tZAxKmaoPCAuppqUceqCbeJ9G2sXWfsYC3tR2joR26Ti",
  "key13": "2u7WnqVLkg7GamVowNJDQbDrSebeReuEz9BGo7WbLE5QMQEgo3p73Gtm9pYQqrXsH3MRZmYvddccM152Ck8kjKCD",
  "key14": "5Nn2s9ymVr7PXbNgLu1RBMEH1rWaUdsRR5rRs8Mm8yhDWtfAgcCQQZmPZDKCYNFWmsHNQrVSdZBKQHtC2gTNaTAj",
  "key15": "585ZiRPDHWGRBTXWLGV14YPTkeKEzheSdCQ4z2w6XDf2BSbHm4oNu5FwW7MTq5w81JVZ2aWycJTUF487Nas9sZ17",
  "key16": "4xkpqwo7WgUueknu8vT1BnbsLbyd2NwuFNaAeXrFp1Vgf1LMAewRmf8Tuun1Y18Hu8eaSajH4zpnKs9FWTuj5cmk",
  "key17": "3eUcA3fF8hH9raAnAEc9ZPDUqNXzhfC8nvoakr5egG3Fa8xKRNtmobDKPxq7NhnxqCJg2QMwmro7QuSQnFD2LtW5",
  "key18": "3NimRAkby974hNZhjb9hPDF7aKMwmDeCzbN1697pu95TofxJ2BrNSf3QtF6ay7fsYeBv1ip26NcwGjepdjhfdz9C",
  "key19": "267miinFf1UpNUwzWdQ7Zp6sDv2fLMLtXhYXv1VgLJP1mH9hTx7GfDWg61RKCrkBjypvZxiKMFcaBPugPqL4AhEB",
  "key20": "4H2oLCjdwb1HuTuZAfy62ur6833z26kArZNEoFjgH7ZNqW8cGqv2ATtW5LeAqMNjWhNGVEzNuMC3ZZsdjJvEKyUS",
  "key21": "2z4V9UZBrE6WvNPGGt6KB9UPmvRWjCuqzMFA4bJj3LM8kA2H54so8qM3MT1eZJHbQtGHJAMwANB3WfsvuvYrBEUa",
  "key22": "2ky5fwnq17DrcrDPtNvtsLWmQ7gu9cFzmWEz6Q52uE4DzgjwvMoUe1FPKGio6wE6P8zuzcjP7SspkK2evEhibAWz",
  "key23": "5rBkf3Xx9hxHocLHNepeeQ7c9d3WJmM7CdiMN3CBkqnhumnwGSmBbSTvWp9dASUpGyR8qW51zukZBHeaWnLuqTXP",
  "key24": "2vP5dP3K3B1WVxjc1t6mfSJT8YpDzyLs66kXevcNhq17iZyQtzP1oEXJpobtmJ6QFkPKGEgfM1kDNyfYuPkCeQhK",
  "key25": "3pmb93qHtxAsJQdpfrBtJAouJ8PsZpVjFU3kyanwU6WRwpWfAmhG7713CN7VTY7LBstST8PGWVekUX98W5bucYRZ",
  "key26": "Gnj8qzdaJab9oa9SpTVYnBotLSxKJhFYgzTA6UMhgDLKsD3PzBtDXoG1undqQpjnCMiZ3kJP9qibt4T8Y7PBLPX",
  "key27": "QXoNXRNtC6ZWCVGuMRoY7UY5G4nPDNMQYWLMZTP7SXx3DrgKzq2WKZCRG4TCEJDYGyaEJRKRMYD98igSB848nT1",
  "key28": "4XsHpQHC5i8NxoxDsMP99XP31uVok14BCFzr8Mbg1YP9N6heL59y4UXuoFT6tjVa5bEEUUWhgpQ8gTj32sBbetDZ",
  "key29": "7UxwUFdYxcGbi1BPPf18Bu9fqsYSu4cMQfZnwFWUUgbQiCTnjj8YjCDaq4aBUxQkXM1oVWWHAEFi5kZt4KmLeko",
  "key30": "5ztV6AUkFtS16f6kHCsPzhsghMgtNJ6115kJB2QbTrNDkS1E6GT4eg1ky9hKZsu9w1wdk1CRcZQCmRNXHhbXgPSJ",
  "key31": "4zoWrEHSUKGqpZhbJ2F8XBWj7JUfv9RMRzRXxMFjyWKiPLNxp5qZtNxrEV3KeAUNmB4cEi7vHHMyiD6pw3Vu6Ypq",
  "key32": "5dnckLQ6TRpGpmYwL38uiRiyWQXyX2Nk7ngGqadMmPrpXdPtJL5uzMe8qzmL8Agg2eQH3HX7sStmDvHhwzDTmSvv",
  "key33": "3DwR6xEheUZTKBZekWtNUUyUhRZyKJ7HgrNtq682S5pNCEk3bjoZKLQMkEiTDS6gSA2F5n5aJF4rc69RNNxHMYSa",
  "key34": "NGMbxU8TWdngke8sFqwMTd5tbCkoS9wFyKNqmaqHQtrPxEogUSFmB8a4bpHDRaX4cxvEJYPXGJMy1eBkCNHfAPL",
  "key35": "4RD4M5gw41qERQz864qSzwNFioR7zL1pBXSpEFkbhcThSErxD4CT9eBKpRD2Sn5NyoS2c67fZxp4JdvcCJDQpUkm",
  "key36": "YB9op4Z1Hhp1aWtEpU1mC2jaAwckBucx7Yxnv6p2PS4k2CR4JJZByS1m7fNa5imc7RjmiHRx7Qbv3cbTgSh7odT",
  "key37": "53geCiSrgcYm3jeme189szBhBTXPyQWrY3kDksuSRfyxWo6XUbopHM5VL4zcFYuNKAwit7RRSgBWiZv7PFGunon9",
  "key38": "KbGgYto4p5TKzvbb6AzqB8s4eKSSCMDAhKeA1JJzzVkXs8nCTt9kUTQotD9gwaiiZuStZhve8PabGjXGnUzMdgw",
  "key39": "4ooWnwogtVAs3nWGMTDMTH3EsJw4vLsxPvcvN3cKG9Vj7h9pZGJYhdhuddSRsWJvZ9WwpLovJ2qW71QKU9QEJHY7",
  "key40": "3hXtTZWFmUDHUgynFC4qgon6vu5K8revKp3Rn2m6S3vEHSejbFAaBbLLTicuNRHV7uHPV2RxyuMKzGQbU7EfDGpy"
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
