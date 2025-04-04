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
    "5cBi94n5SgvicF9jVqgNjCjtjrQeybAvfKsKCtJV7CrYXPmnWLfvQdcCicfEcm2bsUCbYd2V23FsiCdcsypncpRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjxupboRTqyFV35KNTFcefKnaovg32Pk3ZNtHHL3SseD5KYbyd2BzU4USgCNWwKvEW3ZhBAkR9Pm7FmRwX4Xuc",
  "key1": "5Jia9EUGPJFryUmhS26HkwYSS5N6vKCdqSXeKMn2r92j6aFUqVz3EmyUyQSyvQBnmzHGRwNNDqxPu8EuM5cZfWvA",
  "key2": "66WQdyM4SroNMoEfHqQupFX5EHT1HUwE2drFH7BC38BY2C8K7DWTZFyhonFmmJNoBb5jkdeFBndFs6XPhWL2ng4F",
  "key3": "5SVKSKYNiq6SLmQTuko9FQH4xu5XHEphDdHJuHrbegN286fiayQUiAtZWNB2XSigb5GmjFE4Kmt8RNC9ydPrCVa6",
  "key4": "nbiwSYWkMPzxohrpf1PqR1t4c1jbpkKdR7Ud8fd6Ai9XjWpXMiKdewvCRunzd1BvJ67uQzDXE36RxL3vAP8Sg4k",
  "key5": "3Jmf7KvdUxGbbP6joSauqz87U1dh5d5YJk9JJg3fNQRbBjPqUe66kkDDP1K6XTSZZXMo92p27yJTdRyuKx8d2Fjv",
  "key6": "4x3cfQGan84BBLXb57vsBioQBFULjx5YP1ba2HA8QADcQQZCb5jEMVTDhjwEctRUgb1xEoMEfDvznV6FzjqKrk12",
  "key7": "5vEH6nTD7Fkjp4kKK1Ni3i1sGYPwGC2J8XDNQwszs2MEfXesTwPCWN6JTEWjUW8sgCTgHPFBQSYZxKxTNozfobYn",
  "key8": "3f6dXXiY96HbQCByKeRarznfWXPzpJdKAsB8cAeniD4MF9UQ5SytbTVSzsULFV62K85W1QFbB4UPJsYKbVH2VL4t",
  "key9": "5rb5o1i6sfoiRR4VPjjH88AQ92pCHNZW9eSpZkPzz7RT1FBTPCNgpi97pZHPoC56ssyCyGW4TSGhusNTV6UV7nh4",
  "key10": "TuoQfG4mdCH2dBV3mesN9dPgKs56wk3AK3sKTzpjU56d9QbtJtEYd8b1wj8FphjhnrsKdd13V6vwRoJYRzXsfWL",
  "key11": "3BN9SLbvT83geF1bA3MTtSQHk4iyZoz9uHdrz6XGF2JF4uC6mxXyoyQX4tN3EbajM82BsVkSxX6kmo6Rtn6gu9yZ",
  "key12": "4JXWi7KLM9uJU7MwqmcntCrqmMGa4V85ggscNEAzAGkdxLzCX4KKRkRESAvji68RffRwjHYPNYoMHqw5wgpq3CVU",
  "key13": "31iKtB4BWdzkUEfmsLpephWN8e9R7tgWLFMsnDV9aVQ91mtHhBA4t8J4bwroq3MC9KxLJWZrTqjkzrG8qMiq5Pbt",
  "key14": "Druu1LGu1ajrgWrRKtEMG64taLJSMfkP3Lqav81WMzzpUq4joanQj1TUz7Ktpiq69GmeFjS8veatWSrJB6G4kBf",
  "key15": "m6xHCZ4yDRL2AMGRgvaa7THxD6Hbmcqfb7T4N9vtut9FbpWUG5PNvTXQd4PFgzyccsoY8VSqzxUdBdr43mNJNJh",
  "key16": "24NUjWDXav2K3Fy5TZaF8pTzXQhmrR1RAbRruu1qs6FgrhHsZazaNMHfyUKH9pYpN5GXaBw8jPDDFHE6kSUt5m9E",
  "key17": "2uBByaQvUrC8G1e1npSzxfNg27VQHGjTtrfHw3ngiu7jMVKbbbazDNtUfdT1x3iibB4E9J7PbK5Lw2N5ZCuDCRgo",
  "key18": "4XdrQh8xMxQeZGd812DD5hzXLtsfVDDM7tQNvtZdiuXbbTLn5sBqdVhu5Ca4sFy6zzzdZPgXKvSe5vp7MZitjfmY",
  "key19": "4DQztNhLfYd1awBXACLx6t95iHcmjurZsJuLgiYipnqoWq49M6B6UdGrbXXBGfcjsLaRT3k8GEptqzQ3UiEZAow5",
  "key20": "2o2gu3CMDp1Yxz9KYeoSgQXpVai97iZK3p48cg64A6KsnAMPJY62TXCbyNHhZ3UqzYtCSfqqf6xZiRmvi7hNbtJp",
  "key21": "4ESKVinWkma3AZ8EATKGvafnV81KePPAEMh2MSpYeD24qQ5Ld76yLzs8zNvDyPYtsLCZzW9vNab6rPg5DmrsVpix",
  "key22": "wpcJfmho6fHWdw4QWrGnwQznMtNvAY37iXorpzpzorGcjAiyKsyU3mR3yJyLmSUdh5GuYjToAxd5RyQdUAb84m8",
  "key23": "kxLA8WjXuEKA7xCfzCLx6UWVkg8vJZrMRZEyTTwseQ7f1v3FBmaRGS2wGX1f7oupEF9brnMbRFePsYpJibKk1HU",
  "key24": "WbKxAp9J34USW56uxngqj5jvj9p2QKBWEgBwWDCb8YeCfa8DWyJwXA6yYvPa2f4kxrJDBUAiKJJN6ZeibS7Lpnc",
  "key25": "4NHxkKN8LXkjQFwkqa4YkVRdUnamicMkifXwFkiKNeZEGfHioVSrijnR3teXnArvmxWeiLfAHPnDhRG5cXZ63YmE",
  "key26": "36XE5AptamVmhA3Q3mhZ8sNQa5p1dmkoWwKmaWVz48AejLGwo8cWBu9cUGqCXzj5f1qT8xNmCvw2jrPaaCiksbD2",
  "key27": "4zkmMU3Forx6cZzAvLCSibQR9EzXAoJtxnrv4zVAaaP3NvqDxMK6PFQE8QB86qoebTaWn4icp2CHq5RoK4Bby92z",
  "key28": "5GVbH8reed1pRKuyTJ3utQ3YRa1dGApazW9G3fKjs4uNh39qBHdJTfU6LZZGWbGcpSU6dswf5bnXsT1QcfSRuy9U",
  "key29": "37L7Vin52a7dGWPpH2bqy49HAcQEVihAhFyCVEGC11jzjWZaC79a7JG1uiikL3rha6ros2gJsET5XKALxticAd8i",
  "key30": "4Tx4LkSXT4mEdvp5aRJBhUe3c5ha7Z5xZXKa7b1iYjDG4FYYsEYe1oL4PWWF5pUnMhAnyFB1SD6mPgoszWAE8zux",
  "key31": "3797FSYytP1xYHKH2QFasC5XfGX5PftiQ3ieAcp4bU7zhVHobTCBcbj3vyaSDGeCb5rkGSRowk3ZvFW4xjyJitCh",
  "key32": "5QMSESXasw2DogTZTn1m5QYmVNywZGQ4fMJbKZmD2Y5JipNB23wwvsERxqrHAQptY9BLCZ1iec5rFa24k9RuAtaS",
  "key33": "3TSnLDWJJnhhdFtf54V3nNg5whfPuLZCN5ATZX6wyFsnpmgRsW1zhnuL19NNsBGaGSvp1PSNqgq4nzAcpcbxL5HG",
  "key34": "4CtYxjoEtCEuUBtbXHhShAojmoU2aj9yjDjCFtZXeaGBB4N5ma73KqT7Jtk4THehp7NkBVhkUf2DyjNMKqgFWEeV",
  "key35": "3Y7i29tcesGBAq8rUXqAmtfFUvgYLC3Wc3wwmhrFBrimbk6CbAMsFiWPkmrR5fV4TK5RAJDgU2ZFQTsRbrMXazJJ",
  "key36": "21rBkoANZc51CVtUsY5dhcRFYULx9eG7P1EkypAvXaK6JSdERVWhNsa6haBzysHcU1xVG2xBiBhYGncNzbuVrQh6",
  "key37": "skNCYx3XxkBNeytbLtGnyUwdizHysg9aE9fKzr4e1NY1VYyYiGzBBZkttq1WusBRH8ZMNgqCWMYczMtkenRJh4B",
  "key38": "48txJzo2Ca25rSBRr7Kxm6WFTfSqv5rrGuq2AxkLu59yVWWfmNo5uTjbZdma47UFAYRTASm8jFCzkQudbn23john",
  "key39": "MoCbDcJiWhPsvDhP2Bij5cjJv3hwFu5dABe2JT6j8WX2ZJXpWJ7NiWXgkBhdyvC6mLNRaFKPBYg5CnFuxrM8r12"
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
