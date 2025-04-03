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
    "3jiR9PcKRUVbA9eXLyqTBfFhDfe5gHqNZ8vqbLKg6QUXsb7YUhLMpCPjDpqzsRLMCF8pFv8UQbrdJ2t3J7G1mGgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vP2d1SecA47pghFooJHmgTQKEtUUmPPaJjV9GNPSWMKJBrEZegsUi74MwEMzQdxEyABLgzgM8XKpEz46A7WiS3N",
  "key1": "3pi6dd7TnzTnKqgucrGACJrShbvyBuM4sf3UnnNgpQkRiR9mwWBLZS34PqsV8WFCDzamvT3dtvQuGBbpx9apm7Ls",
  "key2": "5uYMKN6DJeQTG938Df1Eb4XMdEPebeaNrgtFPoFMPZoaMJ6EnnZFCVTaa6fyTjxSYDYBjCBsqnh5XGnM2pcyRRKb",
  "key3": "vNdqaVHaLyrEhNNcQM9nrGS6BCEQqgQ4rPqPBSTJskjXadq5SegPDuhAvzB47fxxiW1NSmB4moHaGorZdQs4UMm",
  "key4": "3w9jRwcHav694CQQkRRfbkn6e3mRj7nntyknJm9ynyw2xAV6uqiPfC4uG8dsYZESMksD8togtsaNd7Snd3TKcf48",
  "key5": "43Kv44MboWWq5dc2zpFEN8oGTCfNqNRUcxnmK3KSBhmcr2NdcE8VMoqDpPcVgunmNyjiGt71NYWF4iUb52amA5Cf",
  "key6": "2HkNSfregaZ9wAxM5AAFRTdCN8MPbwCWA18vsWcq6yreDrhkK7FLSci9enF5LR1khxpwpgsnV6gVYcV2LwoW9Luk",
  "key7": "5vsRtjgNDJ8GFPJo45Mwjq4zz3tqnDAzx2WQr9i7wJE7qZdRowcWJzN1ed4xaTndrEytUfR48ZGqWyDBW6idpsMj",
  "key8": "3ewWM59KJiUvmWrebcbxgXz9zXKC38r8UyGVYfWdH8WLGdeeBupM8XHsGJ16pBEtQ2fPpxrtz3oo3MXA4CrGNtww",
  "key9": "67o2PppRVUchoGzYZo1kY66ypJm4iLSU157mwdtTDyoCXLzQWxcKvVUP7UexoSudZucfGQ33xV3NVdRMnibzS98C",
  "key10": "5AJbC13okjJzULcTfHDVLYyJmr5bsXE7CcQ6cTJ6FPS9ZpPg3ZkTEu4cthABNCWGtdjDExPaSYLNGq7t8fo1Wcxr",
  "key11": "hyhCXT9KaqW8g6w69aV1DhePqAFK4gRDq1r3CbPG6feyVDzj5pwbnG4yzm8pVDqfxwDLXFcef327YRJdtwy3pNu",
  "key12": "yw5pZZnEB9BaLoabLo2ztygXaQYru1q6m9Z3bz13xShoXV5GwYikakPELYWRb8ftUS7zFqkGVVjxzQTnPWzgddS",
  "key13": "5icGUfFaM5aDWQAaQaG98ZHZ3FT2U44wS2vfTvougu811rGz1TrrkHZYV2ZQwrJeHMkhZFxRhVZpEhMUkRjwubki",
  "key14": "5WumgavAytRShdZ9kjGpJrju8tqxaw9ie3CnhM4MSLvgaFVeSvK6JJqeJ1GdhwVLHyQgVEkAjv8eTJKGYwwQs1x",
  "key15": "iLg5Tic5UFuaNCAQdd5boeSrmnWbmTxaeg9b8p11GLySqDX6kNotZdF5CQn7uWCcH8uehTpok9K9R9dW8FM3V6h",
  "key16": "3S2XWxbMd2dtG7i4PEBE5WAqW7HbjVjQK6kuurh1kchgZFNc36Yr9uaV78ZaTvsnU9SFuhUmBFDsbHt8kJEDubZJ",
  "key17": "XFgFg1QeyZqtyRvmX8NSBhwnBEe9uDmvaaR2kECXZoXMABv4HWtjGWCVtZmkT12MubQobGsKcrxWxCgCrtsCj4Y",
  "key18": "5znFiwdRdP9LWec1Bxp83KXuYsHXbGwDBzBa1deh2jeY7mJBhcSFfstwVf8MHpPJTqL3hfFRN9jM4V3PwJYCV9kk",
  "key19": "3FP4hBLeHsGCWdmn1Rg2FYZ6AJWgzmdJ5QNsCi3kHa4zdetWG57W3mBEwRsjtJwvm9bBEhuefay5zSEJbFFVxGXe",
  "key20": "5Nk4k2S5PGhZ8uiC2LorfKmQCuJpRoNd32nNbhDmR7w7MD7vwikE9dmtEREAc8XJxfv3SZioJ27EY5xZNgEPGoRr",
  "key21": "APdCQvgfJuuyBmnPMatQmiBFmtkABPeA8KG1oLWJZ1G5Ny5eepXYjDqyi9v52jYcFe8Y9XT2gmnTr6YL2Xes51m",
  "key22": "46gzweW8tKiM85NMT43hDGn8GsB4eVTTY8ipe9jBGr2q6sb1nq7MbeGLj2HUdvD7p7fNEFkcK5pLxKmSxh9HxFZd",
  "key23": "3aSHswq5gdQvNZdAtBSV9CcrCcHkxxrd3yMP9yFqkAAKpcNB854xqwYTVPuJqonxQtdWE5AJucernxkKSNCDMab4",
  "key24": "5tGj4p2UHyuHooxJdCT6jad1ozfwJjcHADsCD5dozgesKbQRKmTEAg5MJAmZwR1eLVRLcecB6YvcSPZNA43WPkYS",
  "key25": "3GQrVV3VuLQf2T2ga2nbbV8v4Rfw39xWg4QuU32fRf964UQiogN3TadvQe6dQafoS44XnfBfQXoVg55FyTLHSpvE",
  "key26": "5py6CiKZ7dCS8dzTSd52Hg9yaXCDTeXkrciCVTcq5N413rtB6KV9kKScsBsYRft24734n4h7o3J9ZLTnjRcEcHbv",
  "key27": "5FAj3pxfLtD4uh6oFUwdxhXvKm35qbk8C2PA8jMkKF6YQcXM7P7gAjopNN6X8DC4JjYQRBW634uby4V1dffn6V5W",
  "key28": "5q9YuTnMHhbPoJwjztBz54XaTg8L2pcFUpGZYzN46fD51cDfg44vNyLRos3K6CcpdnuCoem859zAinzwoMeKWw57",
  "key29": "57AG3aWGEWYGzhJvphRughkkuD72CMrKAv28djG9U117r4nuNkYtcrt8KM5ivSyR8LBBg3m8zBE3KpYGZUjiz7v1",
  "key30": "2gfYP8ahX87LztFHb581LrTwSythVhAB24oj6atDuuW6vP2y2LESbhWvMXhE7ZsiEjKjuvpnQJtVjPW2QdbmqL4V",
  "key31": "66wJCmjqYckjvJq3JLcWsdQiUELCeX4srx8TTKVmj63Kcud5HhLRec64UutQa8j45DPBnUwjfzkgvnPjEL3yb8JR",
  "key32": "3LVDYSW8fLLGZXzgN6WiHuDgJuiftDH9XeAVSGh9EHizQdtPDPCJd4sGWvi6k57FnrrGj1XxivbFd9rLuYTaCqR3",
  "key33": "4r1SNTunQBmNiSBwMAQnqPnXh4U9hJJYV1N1gCSLSA4skJDk3qgyiPE8m686xqSzan2mW881b7VvwGn5Q7h6Gqk6",
  "key34": "2XBQPraomBt53s2MKmMjz8NTx4ZEBnqpYs61GvU6WgwmHJWifCTTVXWku2bPRUvKb5rDjDoQ2X4SYh1ojQ4poKZ1",
  "key35": "3ApvRawYBi63iaMkyDNqSkUTonm28xFAGNA1B3jeJ417K3RFQQMGsV9wFm9Wu2ho1jamx6XcWLhto8F9XoYF2Qx5",
  "key36": "2hviAp2HxYn8UjRhhknRRaR9AQuBpp9nhJy7xzddc41Ct4ymnWBydawhG2APDQWsL11tyA3FkUXmnWZBkfPrBLJw",
  "key37": "4p7C1XDDJ6ax5uiZESsEoJk2EM75aiuf7f56BXLnQqdYKJRwxRacwBiRDjV1W2AzsNvHzTyiRaxq469XFf2PeyKu",
  "key38": "4vRaw8FEQqgVEGiBrXrgBPhTJTTzcgF7SkcVMGxAM67PtdsYkNJLywTu1T6zxvaGAkfs7h2FsAd4ZZu2uBYvJAeB",
  "key39": "ba7XbX8JhnqwVfLzT9gRf8dSzgXnYUX9FToByHxky7oDZqkYzZdpmFMz8tHjzVh1vJNygaqyeZ9KULrRCR4sdsV",
  "key40": "65dscsr6K8yArLm81Ea1FmjSg6JJbktHty4DqwUGKoNN21G1mRhdBzXxQrm7z43xHmg6DZpgy5F33FWKyB8cu5km"
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
