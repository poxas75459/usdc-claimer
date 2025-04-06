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
    "BP7mpYSQ2Z8YUPhnGUFoiQmAZxHnW8YAjFB4MAJa3gAD2XAzWt42rsFy5cUAK9Kv8adSnk5i7F4NiHaMfRwGxLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655KNG1jnqBCP5zUBhHgfZ4mwwSm81JZuK6RSRbbjWU8ZZcAdnFow7JgUwfnVm92ctsMfjtxRXTkZh7KN47MFrWS",
  "key1": "342kPj2eMfogSDZ71bDKcGiovMtKYv1MRE7cHGVp8CLUtW7AFdndmhkBZuiFWuaM7EcweDLd8zdiLfjVv9USYhbB",
  "key2": "5mJhLvcouDnZyi4LhXmhH5N7YvQvVWBhsmHbyHNwHtJ9h2ZnLv26A7VJBhbjy4tpayS3Megu4ATd1ZdEg4o2j9Mt",
  "key3": "2bUcwkSWqZzvcetpukcQb7RWspRmRJbCwVqvyRncVm8hbuA71ddFtbJerdwFHWuACwdnZVsFfsgXY4V8KTnhA3fA",
  "key4": "4PM36TfmYzkCAjyEhbNAKLzqt57Gu7mC5H77T4wpRiJEpeQsffBwmn8vnrgNN9wX3Jp9cPWWv3AxXVYPWZ7kHxN1",
  "key5": "HzqarmFTqDX8rxQRVGRmUsNQY1RmMWTyzFaEqzGwf358DuVs6UsCFjzLGnRNRkKed2XamnxHvWAszuhbgnGm3Ro",
  "key6": "5AFKtMFM7RN12R5yFYNoPx4dMht6ieYhPPxxEEMFiZ74Ad6P1KvVBBN7e2jgEBUHE2aQwxi5xu6VHBs8fQKmKQcM",
  "key7": "2unbLBKDjtXGjHEFfunu5SjFBmnAHZi2Rf3uMgdVPCFr9dv9PseZUK5fVo64vELETLvn2RodGtaBcEyQjUDCwWG2",
  "key8": "62bKBDMdpN6h2g3kKk9KEbNE8uKMcV9QtFBgqUx8nHmmJ537fiwFiZ5TS9R3zR2hb2Q8nQUkQxx1tfLiWJNwjxrz",
  "key9": "g65T2cUGyk6fYPebhAxiT3BomR3zw52wrkqEaoaBS3eUX13iLrzAKwATvbKLuJyZGSLZK5YN5GvBMgytq457cQd",
  "key10": "3iCKkKXfMBSLr3nXtVVEbqZwLTYG4DHuSVwmmuEuRhupbJEXonpWqFKvaPn71hMqwvRE5VyhcwfD6br645sPa2rK",
  "key11": "FNZaikDmZGw43Mc3YhtyL8V3CfdGVa6DtLdgsFrFAtwZsvfdN7ypuniYSPtpSDBwrt5wYwLLivXwJm8G5243Pxe",
  "key12": "3EyDXBX3tWve5Vc5Dgtgitcnhq1gz5cmrq5wgEV9cfoeeZT4XXXXcTSj1sS6H46Y3S2e6vpaPK9bW5JMBUnATevz",
  "key13": "4MAevYLXtUrAb2VpBwrDWw8LQPXKUYV1oV7JBd2ptLoT7AANRhfDrnYkUuP9oW5pz3jJDzmBaGmALLiHsC1xnmHm",
  "key14": "95BecnjSH1EUXtpyaQRngCCrmiRNk7TnadQMdDeSrHFtGQfRKB5UNb325vKv49sBi33C7q9JtDqikvVtD3oNtoL",
  "key15": "pMygEdyC7RB2p2iTQoA1W9XZx2hPvq73DvcR5MV7fhu4PBNgXBbAQ9GDKd4oT9Z5EfgWjtq9j9hXM6stTEqVhFv",
  "key16": "xMKfhT1ivxB5HWejLcHL3AGJnZwx6edQsBs1T7fkD48c45afBDZLrD5SzaKvWo5xktEZqDvCQZwggTK1wDBA4BG",
  "key17": "3NBpfxxiLxwwQiPbQAXBcx8jFhkG18HsZ2oQLQ39CbPb4FKx3Y3dKgBz1cqvDmRRyPAioaq7tnEpkQe48Tr5ABDn",
  "key18": "5ssfKbKNyauHnk7gXcUHkbFJ3FPhFNhrfzvs4hXsy9bUj6SND5KV1VrRme5nCTZgdfg1nMtrGH2kERaxMscJVNiu",
  "key19": "EyH1v2NiHya88NSsd4ah3tAiUtYsLpvZPLpTpJ2BMrEBQ16rtTDRtyDkT4xcRpCurAhDWj8azkJSJozfw78ixPJ",
  "key20": "4Qme6Q6kxxoiQrywWEHzL3S3GWD5soBX8jGahz6DzwTQLZfR2EuMxFRtciEGdUtTU97ojX6J5s5XPSp1MqRHGwUx",
  "key21": "8ZWm7FKMms3q2rmHk3girXhmw2SM6HCd4dmnese38V86Gmio3FAQbVAFP81qfxQDPqkNDrTs3ZsDTrj6YCvHqNi",
  "key22": "5Nyznd28YKeCHLHEPWhuVxzZTd5FsPPSzayfgPcGpxVb6d9GzBtf1rq9jBoV3Fc7eU8kTFkeFpsT2F9Zn9g7smaq",
  "key23": "5Xts1X9hNZFFtFRyu6W5TzYaHQH5Nnb9EJRPASSLzzpskgcDHA5QU2hab3von2dazGibGtqi1tyw9pMpuAoAc8ck",
  "key24": "3BJYzNSJAEv6jxzSt8bpE5ZzPB36TTSV2cRYZJQ4L7Nn626cEHwF9PgC1EAwnnxEfe4ZimBDBen5s3PHuVbBiB9u",
  "key25": "5N1K1yZ1ooLJo4M5qhBox6eQ36yHYU6osYubixPkKvFXd816fx4sVfh3xvswsTchtgT8EAEJidvFxpGbzRgvQZKC",
  "key26": "4258d9VTr3LCP88wjmmjMMjoLKW5PYzh5iZDrBy4HJENDnp8Gih2eAvXxUYp8Rof9F6vKzc1hiyvkQbstgFiH6zD",
  "key27": "3ck4VpWau5coZqw1r2tkvVpi8kCEz4Zd8nhqdo1MBUdeSd7VgRNFHK8HHM8bcjJNdxrjd8i1kqcA193ofPR1gFUV",
  "key28": "2iFKMu4kTd8vW5rQwZKUM9NGLJpnnY6jLNxaHTRkxhBjjDTkMgNECBGqS9tV3expsnefvBbZEbx8LwggD77ougwJ",
  "key29": "4HqXrvXjAjzJqqEtXTV5EwB3gZ8xyPhRzFiv1wT3cKUWjZzMg8dWcfpJV6zvRiybSd6PrG3PZPtPMjm3Qma2NCfP",
  "key30": "3w9xgDyQr2qM3u8c3KUyj2HXp2zA1BcnwHX3YxTAz6ejGRv6Rjoj3izmvM7nSH8nvWFU2DU5huU5Gvy6wuWxrjeS",
  "key31": "3o46sM55XinaJpY2wEoagD7hRaTBCTPgRdk6BQXfcjduCCNTrdk47EydmsiQcvN7FMwXrqTJXG6QgvAJL17QLWtm",
  "key32": "5qNMMS7uDVP6kZuHHayAdNxfro7Pg8mH1EdzaCD4YhfaChmug85aMPtaFY5eA53fmj6PLeYM4tnAB3gKXMHctpqj",
  "key33": "P1vWgmS2V4bXYMtPEVxWcSFaA5AySzPedNHTRuTjzD1J5fEVRzqWvdbEJT87brCERMibUMMC1bFkcfhg2p5cWYp",
  "key34": "5BN13h4qhGSPRTQ6MnVkR3EgPS3ALsdU6HhVWdah1igLc4q4r6qDL2R55JQj21Bf9Q1bY8J9vtUaDxfMn2CxvzX8",
  "key35": "58UbQpQfGSdeXr7Bdp1cVSRaG84E57V2EsTsPiyds5FTrDEVxD1D2hibfS85AAnZJNfnW7C9Evai5249DFhUM1Zs",
  "key36": "4kKcynC7VSr5PHPEQ1ZfU8vvyd7daR6c3VXVDeFqakgMQWS9KF5ehV5FwvcbZVFX2CX15nQYZBV2979oG7HKeXUM",
  "key37": "5829JDXCnYMCuxjFPntayrUPzWMWAgnCQVErhLYTnMtjiDDwhETV6Dz2XpNCK1UxKQjgziaqvRfL42MqkRKbbtmd",
  "key38": "3Bh367wWi7uptEYRJmig5d8dC6GzmZk5yJJj9U3TYydKJhMtRj4Adb6Fp4RQyEzDDtehnQNriHfh53Hi2DUdWu5K",
  "key39": "2XZ5WEKnyf5mn2Q363myMS5STpa6oZa8shsKbBGmNUPGNxFaVgNRTeKLHiARfvgrhVKG7d5qE6SbR3pJxKtPx7Qe",
  "key40": "2zpsKaBYT4Bgh2Co1H4eWMicSUpewa7qnUdyz2kGspe7VMQZFK9gAWiVNftug7zAvogJ8nsjdoUZ9tgQxyGFitFE",
  "key41": "3zHJFp1Kis3o1u7rXNDgHrEv5yzzxtDfG6YG4X8Kxb5jgZ9L8c8ySS4gLhmmfK2kM4v74jbRUSJK7XBYKQfaaNZx",
  "key42": "htFmFbsPBacccCy42Uzy7rw4msFF7PkeeUS4bHHvzeBir7yAaiEpTvf71bkn1vMJzqnMZYpNEpdToqnYn3qrnd3",
  "key43": "3MtvzSbavbtCARtWERnAYGaMY8dfTHaCk7bvXp4yAU2uKQFVZvzR1E53d5HJnipaL5KicB6AYMJBiZLL9hWnhDpC"
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
