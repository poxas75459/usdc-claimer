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
    "SFaWuBG4C3R1iXEJgxN4DVNwrRhGL7EgSuePcsMAqgQWG4vzCJ9f12YTQjC1XCfj4To4WvFcJ3ovQ1kwFTxNXv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221iZeECvQfheVCaTVb3gCjg6VRMq9r5R5cBknncQeNgTv3AvpMpnnUJDGcg1guzm3jtoAfKy1xF8YJn8DCg1zW9",
  "key1": "2UXe1teCGFkqGV8HuugR2zREtXPtN9R7z1bpTKmNdBdUnWuuDHBPqZGmwofu4ZPps2Hc5aUkYLU1SHePATSTgSaU",
  "key2": "5YKuLtsyjqzS6ouMGaTrwKdaUkJhhwzD6rjBTHRtGwzJJ4LfEAckumn6cehCKuGjP93xctY22DhyEqGkuhuhfxoC",
  "key3": "5u4LJXaeFDpUsU3RYJ9zZ2a1PrSUGfbs4zdNkqXgWp1ACCEZQJfmViz7X3WDu76xxqaDvHCFi19eVkUFFctSn6pm",
  "key4": "4CM7Ws8rFYD2ddWL9KSh9oFhKeBAEmgHAVwFE9UH95G8qz3GBcBdQK94Y4W6msnn9Y21cnjoutLLDhvnpcfHzdHc",
  "key5": "2LSziRSsg8T3pJHWabcaNpjaYFpkBi8q3wE9hzSkQtNTek6nxkMw4uc7KoXCeaTC9iN91BNTWupoRCUPV8gVakhi",
  "key6": "4nSXhH6QkZ2DtHeXw6UsbvMDzsmBYQc3SSaydQ9rMdswCUu9z2CxJgiTBCEg91KY1qYZpWFnWtdUjjEa6GkByajx",
  "key7": "rKgkK82oqV8vsCfEJtMmNB5gcjgGAhQnkfn6QbFepYegYbpGzkpEciFpJjKqhQfd9ticZ3xneyDRMDbrqZXYDHF",
  "key8": "67Nfdvsiv1Jnj2YYyXAnC5UymSytjoA9yh6PjkNdhSnrKLUfPUpQuQBLeQnTZPnDsv7561GJVeoGpaZ9Mjqhfm1k",
  "key9": "fRAJa9tDkiwC94DrvPHHJ7Ww1mvHqGwPyjAuRQS9WzDdEgnkAehXg9Ptu8vuFFeuUa9JFpep3EuBsKvFCwgxj4u",
  "key10": "5giwTFDNzwMeHARMu3eeLBfsVqJ5Qveu5nfnAe1vMT4bKHtndXRwuFWmPSqu7g3E48QcRQLxnmCTVVouCfofx9HN",
  "key11": "NfdTgr8JdVusX4WGnH419qwhAgsVGC69zNGPh1R4H6it2hxfnPdwe6Fxh9XxGKZnmct9dBqaxE31NGaWgkc3p5B",
  "key12": "2g8gZ6d9vZfuiwTQMqCQmY8bsTSnhN3ZqwGDvkWdatGEQmJeShbvMK7NLu9zXYC1CdnijoXGzCgGofkcUFfTvvNs",
  "key13": "3fH4rzToTqM2cidyQQVB14GLF4xyQL1tiWzgp2Vy99GyXsVF6sA3JPEq9UZZiaMv4QTjdj8kW3XbTouG47BqRKUN",
  "key14": "57drWU4pzG4973C588gytmXQUXx9oRTmqmwgEcYdMwgpUy6MeemP37RvUnFaJXfZHzTyvp844CnfwNk7HYYgEBuK",
  "key15": "5qEp2uQJg6bxq29c8AWPeuM3LBo9k2L4aP92L1Honbm24Y1uK3GL8G2mPaCjP1JtHxSJ6HjaY7ne4tzxCeMTAZzM",
  "key16": "3yexjgz24RBLTPvu2N8FbG6xSGu9JE8yLx93GfkCGoPk6oNCWdnizJ5hdK1ZT3CkNGcJTVsVGmZsGJLCewb1fNv5",
  "key17": "5VQktAqUGSHi2SPTCFGGHNnbh8bgHekmVbYHTXzqMztHBKXcqFyB1njavkDMXaoA8oPs3FvAk73wcXwPjVCHsv36",
  "key18": "5ibyfUvhUwnzPmE7y711ahXBtKTCjtSdnYD7E7yQSknajxkaY1E8nv5ikaV7iWqj8PT4cmHwCPQLgNuYcYQ8ZV7x",
  "key19": "1V53aEzRqAvr2XK9V5rcdd1TKURoHHDW5GQ7aeehdXywZQ1gg6JSLr4wcoSdUorLAQxitJex4FPS3PALUGLLcCh",
  "key20": "5pSWF6hCispGoNjKbhSbsCWZoiwi3J1iteSMojwiUiu4cC775cSYXJHBa9wR43ddE7CmbK4qZka8kspKJZzjxfpE",
  "key21": "3ynbm1aqN74F2QMCkUz8Ma8cB68VwBmXc4ZarJfu2u93mZUkPbDUnUWczYDT939PNcnh6spBLoz8U5J7Av2Ad4KM",
  "key22": "4ufsff87J225uVHc62Zs6Jamodd1XodDHE4jAZCLPMbXJMnsgUhVvgvZS4mfUNZtYjr45FSvEM9RngFfPM2Khj5w",
  "key23": "4Wm1zhqL9cBGxSyBVJfM5oRWMhEdZTpVYZm7a1Vg876ezCahYjUPfHBekeY37NWyYva5hE2LQbMqArimuqt8bQgn",
  "key24": "388qRWfibVZiG444RGasG7Lh18ECgthPCogMLKBmtChNZJLPGHEauFG2VzcZBXSkdaqwZ3j84uiZTigDnnmRRRNm",
  "key25": "2jTAAnMHqZGq9bCFb7bYumpAr6zKxTPmrAaSZUHyyqDbzBUGSNejqW6eEyjmZns9EAdg8yS2cR9KrYSq11L4FDL5",
  "key26": "Pw9jFfPzFQeeWWLtSMRKLNAy5CYbfjUBSBDA2JEf1P8bgMxMdSB49UkRyDE2Z1HzxU2HeYDLsX5ZAXqPrMDMUbn",
  "key27": "3tYWCd2Bm4qEXgRqR8j2sNQzimZ7wTARwdoRqNMPKv3HHDMpVD4DKEcEh6F6JW1wCHKgPUXPJyXY8Q5MjLX4yqVJ",
  "key28": "21EijQe1wywarsaTkkkX8uFEZCFQfKTF8akvK4dyBGQMhRLd8xoJAkXCc3FUBKU51ArmUxhYa4hctz87AMigxa3X",
  "key29": "3nELq2YYf2gYfcoQLPcYiKq3RT3oNUiK1c9PWn3eHngnvbtFaT8922wiLAQLnZ4Tp3svXhA87RC8Kq3ETK3CrAMv",
  "key30": "3LT4giguGwfRzh2UhPGmeUhJCX5TdsiN3DRaS54AsDm7nk7cbBnw56fAuC6CXRN2SXxeMiGgCFEEvuiwRf3G4nCu",
  "key31": "3Qi3i7qoLsx9P9o9qE8s7qG8NbNQf193DtF23MneDhhzKQiDrbTRdpZdcMW78xX5SdpQJPdwqcRviaJHLAnErfm7",
  "key32": "2XxBXnWsD8jypjZQWm4e2sB66cagPbuNDL2ZCkhHEfE6cKmATtMsWFvC6QS46Eh9TptMKgdPKMmsg14ajo7LiLV9",
  "key33": "4e6qVnyBbniYLyaMDfqtaP9fwKCUE8rizKGjwyxoU4JSdGdggwnfLMbEU1EJMg3o7kPfahacRUiRRXNQ5qFXp7c4",
  "key34": "2Gsx1BjsHW68d9JEYrcyL68d9kcszbwQ3RJfeFrAA6verzs8zSXQTKb7ebUvxn7HfWNSk1cmHS3BUGK9CdJWXsax",
  "key35": "3Mec9KEWn42Dru41K8HjhkHVhRuiPUkfFbmJTa5r1kMBqqLagr2hzP9kpb1VPS3EHitwzeaca3sesWPnP9ahERix",
  "key36": "2zPkzKKv77tbzYmz2R6GunLBTjhyYFC1667ZGfJ7n9VvqwfkNKa4v77rdUTo6CNWQ6Qy4sLV2VqsDTp2tTKfbp7D",
  "key37": "4jvEHwV9m5drK8KrPf543VtExt8ABkbaLCY3zxgyu9pW1GWbgPnTHHdFxsQirUehoLV2N2pAuKVSHPrULf3xyT34",
  "key38": "3YVHuvbphFyZXwKYJH9t95bX979awDyDiaseBoEuntFgntGJ79kUbzY44wHKXtkRVFxFFW81KKikskmSspDspcpW"
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
