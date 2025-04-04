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
    "CnbGuzSRxnM4BRSqAjXTscjqvp75Xbxz2tyt4WuydviA4izqsaeEk5A17Z7NahySazCMyjXE7sHfvhHSZsdvG8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhu2ZQoEkPTj9CgQWB31FUXxvhLFQnUhDMW8SxTavBW6tmqEH1nLdeXL8LNThoYB5S8C5Ws1tvkYCCNCzA5m3n",
  "key1": "4JkBt9HU9yueptt3hkaAXmxwqE4Fq5ceKaPMfqrLmGMZVydbh3QNmBqpY3uLko8VUKV48jKJiHTX8ij1fWRrTgEj",
  "key2": "5ZASwxKxAVKZcCARs5eZWr3ymdhRdt2JcdMHbL3S7wgErokANBEgJjEkMgB7eiFo4892AbfaygstHfsqQA8A8f5Y",
  "key3": "5wLZY5eUdGizjpqYtcgAbs1CWmzGhphmz2LtosWCgUVj5AY18gRVLvcrmYg2yVh3wKzuvPUZg2pCqukLA5w6sPyV",
  "key4": "4AZGZGNkF6mLtLYyQvN9Bnd8tjgZubtYeYRyvoieUAra1FQvgcge4PjpY9fdoK19ZjH1KmftcXFjT9ALAPHGeod2",
  "key5": "2szhzhzv9DxEcy9NMfGkZdGgJNDVVS4cc6HwBKDkabz8iMVdqmci6fRBr1jRFnq2aDpN7wik5p8RCMmuWogrLpLH",
  "key6": "4zARkW5MvpN9mJWTB1hFkEjQ7DVaG7MNuWwdMJdKTLXSyQkZmnFAwmN4yNL5QWgKJqMknF84ex21F9pNWJQWU9dw",
  "key7": "474tABp1FS8XsgwfU1k5Hr3ER5AjT5UgkZrMcWQ14YL5quqWPxYS12zowsniwmicBwCGiAej2ZL1eP459GLQNSDk",
  "key8": "3sjwujuk2jQMEzpmRoZy4JCGWBtHDT5rkEyKSr6z7NYKt5d6fvC4K1fjbeS1k9XpxBfErfHg9vxnE88GZRvTTiWw",
  "key9": "5GYrG5tDCccqvnMbggHf18DwmStP9njirdTN3G4WDwsbzCjWVQwRB6XQSjVsmLjDWNPvLXZZddGhhS2J1iPT96E7",
  "key10": "3UV2ziMQ9ubhaWA4YieRej8rTZrVUNxMpaEbx7HaMaTHPubna55K9eSqrhJnnJwSCPMmoxefxjZYqxy2WN99TdmY",
  "key11": "4xgqe69sDErv59aReuVmpK7u1x6Q2iHWwfZe6gMmbQWT5Gd7Nm5zaLgnxuuTNgCbwyLdsuHn21JkYFNSMmtxQdwv",
  "key12": "5rnFwQzc4mLeoM6iaVUS3j67x9jVpT868dFmh7LYDUZLdHDqGm6YrXmW9wKPnFfWeET8bvrZYARxQZkLFTTUFtqt",
  "key13": "4ubESNKUyoCUSFmTm8UnfcEKmb7nhBwJvdGiHoxfjxV46ckgQUJHTEd56EDRvsyuskxkJ3AeL48LYi1jFiNqaMKL",
  "key14": "5yUr2A5zGEhQCkRh3ueAxYRAiHWz75EZZ8aCuwoVK1F94chREUqACDdzciEuPazgLozmQn6dyCjVeucpj3Sp7LY",
  "key15": "3XK1yir7kXemhn8zoibjQvgWzF5NuG2gsBccRtGvsCFmyUpU2qi3sNHsJcsVDTdb6r2vycWGtC1zfBEZtn6u8jKq",
  "key16": "2BjMVn2HH4oLnkqQAML9G6t6F2xuqa1aeQ3nyoxvSncudSQrgdLiDTg9ZxQs4HooqUSLLZ6FBB1UPnUaubitx1ut",
  "key17": "4NTasxhXXngQQGt9vUeTGPsTMKDmZWnDcVGiuLwZymiiMTHXE2cECgpQs8YdwErNMLemHfppoKB88oj1SzLdMLPJ",
  "key18": "5DHqvXkDWvsQk9ADYRCBnGF6mQ2gGDUyHin7VfW284sKAfUg1w4WDXZhsHdH9n9iQJGZToiV9QCVqHq42sjfWKdi",
  "key19": "2qFhypcHmCcKmZMpf4VXaRmJTotcH7Tq5ZcwaFrracPUYaswNhSQ1uN4eBozsVcUKQYF7WnWQCu7xJky7KPxga3a",
  "key20": "4HGFidxcQVBE1GZwGTt5mKJbyCF8JVNPV5g31uzp26PVAcEvtBUWTmthFK2NGrXvmvCsqY22M4QyZPnHp2hFQXaA",
  "key21": "QhUy1x7kePMKk8azoCJYGKr69MLMfokqb6UT1CLbKXnpb6LG8dMZ44LdBtU6g9ApbvVr7jEyWFSEzvRTrVBpdG8",
  "key22": "5wP1eLqmfAg5LLPQ6w5S1NHTEM6RPPco9wTYRFaJM4WvaxGsR6ExTjMCCxnEDDpmSmzZLo3c9ZZS3HJ1e6RPr2ze",
  "key23": "4bQdthYK8bBKqiwhYWVfpCuwwCDskTbDuZAic9dhcfGGEUVTeXqG7usmScf4ehBaAUTttezz5uCkYYSiYk3YyXb",
  "key24": "WEMKpTXxUpXMRgV8Cr39MRSXYuKNYUdXcFzpWVTsHgz2DVZNj4jYG7guFKPjVVMk9oJwt9NUfejLwAgYB6Hs6XZ",
  "key25": "3vogcHTd3b9BnZK6Wf7zg5PS1UMXMghMXssZbLBYZRoMdAJtvzbbcuA2ba2JretiAoJHRR8XDeqGdRyYCnFR7QD3",
  "key26": "3kAVhPu2xZAjqmbfUDAptEV8WJWeafMMSNg5EhVT1YfMLWyhCVmHyURJu4JzVjtLiuyTJPFgWZBLd5dLd2YXcTeo",
  "key27": "43vMvBLGFZtoSoSxE1yS24WETda6H4qxyzriWskeyDKgCxnN3Mk5DV9CQTCzvfiHurGwK7CZZMLRm7URTLLeuGqE",
  "key28": "4CCYpqKJPuG8TKB2SiqBVu4yNwJ2PKYC8W7eHCPVA2iyss5RP8CKURuQYV998sHrDffmZTEq95D9Lxhbm8cFdB6w",
  "key29": "3SiMYHfhjuvkRSGevZZ2biCddZCvZ82SAqQx58Y9zcgkqBmmWiPvLfHpExzZjnCW6KCRSwny1Qi4TZgnqpHcHh6u",
  "key30": "5psizGmQ7Z4GcbcqtjTRUBmMeNsJ3rKBm2FPHD4GdCUoj6PvZR4YWZM2pwyKqNzUSsLseVQ4rKc2iHCMMFrNRHDK",
  "key31": "3k3XXgXpV8go3ZCPs6s2z3Hp4dX3jNcjwrcwr9FCCdoDbYQaadWuDFmnjy5DG6QjZGBUedaNdTRhEPPWxpxH4FeS",
  "key32": "2kmNMVS3uQdwZSdaDfM4pTjzzrTbekJX3Q8S8o7uwumBDkSN28gVzMRNpFYTLg1n7p9WvMhMXx2CtjwFKG9G1bcd",
  "key33": "66gKqmPzrAEssANDcEwXzHnaFTHY8y6fiPVHTVaX1MYHjDHKKsMHGMjdDJGDhmNQ99pRiKYpUh6JrREuMMvyaTh8",
  "key34": "pnh3VekwVatDCFck149gDmKdZdTD8QAwYSKsg41KHNcBJqb1ZMg5jjHB1cF3T4jGpSc9tqhm5MrsmXUkSfJ49jN",
  "key35": "4H28ckgPPeKj16YWF7hq6iBvuNDznZKcnqqc45ybs1zSswVg5YkzZPNEDnwWxa8TrBTjykt75FwmTsaLenNT5JuB",
  "key36": "vr8W1QBqG6LL4GrTjJjoUknVdiQA8qQrn17UjPJA1qDmFksqTsT63iTUX5dt561z5oWzb9W27nqjuRmQK6wytgA",
  "key37": "4ydpgoY5YAB48F8eDfH4Rq2uiac78A4PQrterEGqeSFaoMPYqZtJ6m4fFKeteyDvuZ6mrMPeKaobfx5VuWf3oxr9",
  "key38": "59jUMq5nJZ9dzEiKHukg6eLUQ2dKqwpnQ78aJnLEsWmkeeVgHTMR67vvjrmVNvX6SY9wdQmq869Ceb337gio4hsS"
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
