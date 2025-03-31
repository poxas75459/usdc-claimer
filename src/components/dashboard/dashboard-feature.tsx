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
    "ueBiWktaR2pNzYbuG2kzRApxtAYdGEENpsJvJhkvutBAsFEW1wEowyQoBnwv7Qe4tTSgiPePB5UMQbbzVjUaAqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNoSXZuvp9GjorcY8k5ALVSENiY9hnPy6tR1L1Ezz4wNKAYpfCULossHctDX6RaFobPaSBLgDa1NjcF1arubdsK",
  "key1": "4bpjiiiFoTsgKny5SK8RQdMLAPNSLqdzZxEhjcsBHoepu5JJozDjPGhpzNxcM7rEirPu3e7P2383jNGC1PuoNRqT",
  "key2": "5FxTze32aMDJRUMz4AKSYx1xm4VtRmDMr3iTc9dMab83xocGV57rwEZUK4tYS7f2fek9geReGRUzoTBRkV4ap6fn",
  "key3": "5Krt9TFPyZL8J4f9chPmNK4eSsscjkgoc8Qbj3bgayubawpQaGvUSLp1WdK8pF1nK9PkJaoYHnsyPRfZfTn2MZNM",
  "key4": "2fAMQLvrhf2wYjCDQTzmSR9NaLrWjhNtn1eeYrWcNDRWXUxupXoVdirxgi7wiH84E6FHUNbNVaE8WM8k1rSwXy9f",
  "key5": "2LosybNwm18bDxKW6ooTsSqP2f7qoSTngUx1d3SJZfABMepcUADZgWLovAbRDS3xQrDXCrCoMDK1QveAxj1ZokXm",
  "key6": "2oJVp2UNKcHjoHkwZM6sc9jcTSS3mej2uixtgG7wWi6U1s8YvU2uVhWAxyeveB2UPsnypjtF9vYfMXivuxAcHPSN",
  "key7": "5bHyftYaPYGQEHcwP4RqB9BTaaxv74H2JmxpcXLGHPjTwp3PE24hKVZr9fEKGcwnEQCf4Fu3cvEUUdkuUAaYJQeR",
  "key8": "42X5Yxmv6Bc7neCKc54x6q7DLeyhnmP3zu8hLV5oK9m5cVFiBGegz1oRGoTDcYV1rhXaJGsu4UeZ61iKBRVtNKEN",
  "key9": "4Vp8xVqMfSTh3ayx8RJquNEWrPstyRLHhzbSUSpGJzxiaaGVcfzzjoxk2WMxnGnFCPtsvsadnApuFrxnRSjsVNqC",
  "key10": "5Bziso8hWebGd9yDqjyAK6i3Q5StXPqJXHJ82EkCcYRB8m3U3TGrEeEo5MwDTAp7LGLbwwMzbtgE4DG3hQTVA1ap",
  "key11": "2XAJ3GzWbzbRC9Cbpwii4ZhDTG5ZKV53bnkuyWF5rvAE1CQTRu8f4oFRxUWbU6wMpVNpG1xZDxYF9SUqwwHGNSsW",
  "key12": "24PRkJqncNBQUbpshYGwtuSrjgRUaWMtip4khsiFhmfRsMqvZcYZgbuYsSengDGmrXLnRzsWq2qPkdyZZH39UNUy",
  "key13": "V2fQj9s1hbYTJAVc4PQ5fa8nHPsr7Enfrjd8vEFiAb9pCD5ZvDd2NxRmLbvBbx4y42MfWDF7nuxzuhZBj4fYtME",
  "key14": "5ZBxLhjN6fxd944vp28jXheyDQYkQcGSDe7dkeKHsMPwiwnWW1MSGRYqDX3tvdPmB5JMjRSiuYtKp8Dp5x241Phw",
  "key15": "2qi5yrxAokyH63kqd24ivcdPuLFncUyEJGRtdkmajFWv7ZixMuS7db2y2Gn9uRqtBzS59DhGFY34Vyb3KtyTPWZ1",
  "key16": "537wQDKU7n3UwKLHQ8XWBMxLaCU5jhxgtQqhzk9eYtBb9ESSvHTHsNq9QsWf4ckAeUELXTR1VQfdEUNfgug1XKyP",
  "key17": "5cJTEXMjUMDkw1a2tCUS62kgvdCDJBibgxgJpdCWEnMxKYNnpB9UrUyZF4CSLgmfWFayz5eMdpCF3YvG6T1gQ3TB",
  "key18": "FtcuF9EqyCpXCvrf2bDgmga2AXNt5GB6tz3hhpMKSMAybwYepqxHZmK1vzXAoeR7PLyRsP4G7H6MjfTgaLbh94Y",
  "key19": "5Mw2nmGgVcnb6XriUripRGibTcfZoj7BxpezPeUBAbTKap2ibMVVS5NpPpHhb78Qar3mWV95VwsBf4fB87VjJffc",
  "key20": "53CpVusWfoMWct1mKE7YDAv5TodW37tG2hahmoaJEKMg9g2RR8ptXUT5wLJe5XqvScM28ZkYTAXNdfJM4mwjmFF5",
  "key21": "3acT7M9K6gA9twXaiw4rBZ9ewpaEfM41MNuv2RpPw4frED3Ss48DGK5PHKunSoEp2Nyd8J4rhLaf2AaVwVTfpPeS",
  "key22": "2rqgoyzitdQ4S4KPiDryju4fLxveapwv2nzz8p7sbW9gxPzMguHzsbmA1dnJyVQZgLg5EFq8XRuaSowc5iC9nuMV",
  "key23": "5DbeZawbKDUYZpYbHkzokrXtZwLDfTbyXhuKNwDxEwVFZGYgb12C7iwndg6qMZc4pKjbL58MCP8C8LvU5qR1MHRM",
  "key24": "2r65ZM74sFz8pGd84sZaUsVjMaXJN2FVgiRBDVLff3Nn3YwD25ui2rMbEBkxKuJ8G678mvAivFDDpubJbBg48wTZ",
  "key25": "5JSRpGGz3DP8j1HyRjZ5m7qBkTtPDYKnMwTjiRYDY8p2usnaJGoyzXuuDR7Ltxezpvnsycqo8NZRxvsyvUz3JnEh",
  "key26": "5HNppHxzGhPcgffSnGq9z1r2nmAMUc36jtVNbnAMuwUJTbjs7AkjA8eKHjwtVbVevT2R4rWV3AtwEkVPCs22GKBm",
  "key27": "3ab7gHURw1amDGN7TYVY9iY6guiJJbTWipE6ixKes7MxpQYqmaZnfa4CaRcTvp7XckKewaSbQd55oXzDfb3HQg7m",
  "key28": "4F9DUq772nvniD5nPLsDr59bDtNEenPP5jVpdxHXcDALeB7hc5QaiUSaSShsnUa8PSL2uua4tc67QZY566Sn4DTk",
  "key29": "5vqSvnGRqJmm5t4WLsYMd3a1eUhvAEtspNKng8Z1r7aJnbxFSyxzqmv8AG9RZ6Q1j4uzc84T1YNuTZcdjd56PEvd",
  "key30": "4v8BAhDN5rgsVN6199YDNZ7tNh2CAwhA7AEfdLCdqNTTxuAaioEPZC2C9UhpM3MSdPe4k5U7oih2dfWVSXzaUgc",
  "key31": "2SMVEt2KRPggCj6pMkayToBix4bw6mopRcH1eBr1NF13CJ3yUsYz8EerZ7LiXZJWzFtaVkjdg8jBM4sFExgqumwq",
  "key32": "3qzgbrRUsGv2NrWjbgqqaTV7VMd3qQYrLgNCVqNoUcwE19ghNdRjE6mtqg8cHtjeyStrt4A1rt45t4KHvFgdpDDf",
  "key33": "37c9perM9Z9HkAhMoxUhCWkfocKD5RAnAdX81LRsYq9hCyuahpMM1uzuJWPYQrH6rrjKCE6m9tgCR1KVWZRcirZu",
  "key34": "3aYoWcWSuEcAQrkKPrKPhG2BT7mZyZbTzEkcnrbHrkBVSKAzmzgcN9fTNUUH9QmWYVQRU6SbPoLKDQHGyAmbAkAJ",
  "key35": "netk8VdFYzLRPU5VUfiQ7CMEPP1js5P8pEhn8nhNLgF5L8Y65Qyd61k1AtarTzi6HkXb13fqbeykXCmnAKGJwAq",
  "key36": "eRgXjG6u9TTYvBtivAZJiVwciDaU3yMHid2vFLS55j1i8ZuPerUCHsWiEmnzhjZjmjvFzPmbunFpzMDWaP74Nik",
  "key37": "3LPR29MjheS6Xuc58HEV1qZmszJm1BudNiJmhyQHd3p8ZPm1MC2g12e1E2btbN1xkLpK1qF2JiZ5HfDkwwUK4zFx",
  "key38": "2MW4DdKC6dTPzioomQx16CQgmtdPdzHfagxzEmbTB6gQgA2eL9HK5sjUbaWdBsE2xPzvLfoPGKDEcctrWMpd6dZZ",
  "key39": "4JSnmskqV2WTSMXH1nDjQi4hjV12bH2RU78GUYh1YpqB5h4nrGNaVVPsnXvRPKkQcdHXNCtdHAgh4Ht4X926CGSY",
  "key40": "673nLNLMAKHJrppTRbVvgorBKwwD3wgkrWbAikB4n2siB8n4U1dHLq9ooDDHY7NxYHphQnEqPxyzW3Rmb9AvLunb",
  "key41": "3qt86jaGToU8zEtpqcV5CVbMFcn2sdSTTHWDyr8zFa6AWxzwz9MYxVYgeK2jjSmdBHeNppVZ6iq8ryQFQ6ZmqWUa",
  "key42": "TT1ZveofonWgD47GEDogGRGN1gMA2QjYJCEyqQXjbojesDZCTXWrUHn9hDp92BDPcW4ZWMMUtYERsqeYtUzL8ud"
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
