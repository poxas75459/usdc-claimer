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
    "54b2faUWS81gyd6QAB5h2zq5yHYfhnKe6Lzz7sdKiWUt24THXxTFxqNqMLPDVPTvGnhNDtjTBqQitm34zLrxjKX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATYGQJSaWM8Zsayj1jy5Tof7Sb2GZqohPgsBJkWo9SXTiAcTBD5RyRnHvy5JuRjQbRsAzp2dNnMUtbthLkD3bXo",
  "key1": "4jVVhYdVHihGqzcqyJ8Nf1gEFf3pqrmjUUjn2pQJvzyW6y3gpSokcrkAd27F5yAf9mmCxR5hd1bESscaHXjM1Pkw",
  "key2": "51UwVZtAtCjzfKhXnhMDdph6kHo9tD67fRcCF3qGrr8SXscBHcwXEXc1E7CFu8RwPMogqqYZfkHF9UEZ6zEwcLBK",
  "key3": "3EEvTPWu2Twvk3XtdwFtt7vUW3f5QdTCkffhSb4zvJwKN1pwKWdr2Kk2kBBPk4SYC9sofXpHbS7h73DWJoi9BUmz",
  "key4": "5Bp8VvzsiYG3HuWJG9V7WxU9A1vqH5NYaaRAwjLfnxKvYN67GsqSiaHspUYdLTzGN469pYNdxMR48SMffLuLjb4m",
  "key5": "5JEsA4aymVvnD1nPzHE8SXzLUN83iTpCgoTd1qamz3szNyXkeZJbepCqpgTDG53Zngz4pvBRTVmkhRVbQP8KqQgt",
  "key6": "4QSYyDB5S6kJPSN5FonsfjSdUdbN3UyHqA85YyJBWpgdYDdHtKkezkYv7LmBmAFdbmBwYiFegidQkXPztGkge83W",
  "key7": "3WPajt7D3261bryFobBpRHDphiuHWKtzJYXanBiCb1zPkSzzEBzn1NhanPD8i7YnpYvDYsrBjX8H6CwzYEdQDQrp",
  "key8": "4Gb5z85sKSY8daQwNR2R5vvBaDdysXXxEXmHZ9doEFbZHsjxAW44dobQa4HEk3qjdVkCRhQfnsS5up3VMHjJAdNB",
  "key9": "3prfnoJKuDSnAJQjp1uGxa1UhWoWFYek1Jen6hSKNpxt7NMxhgCB1hzXYdJJXdLdXET39YMA2tkJfpD9rYXqpqsJ",
  "key10": "5QGpfEWVzz3JmbLajM8dQobhnVKCQku55cHtx76SVkuouFEZzHaETNCHbo31tPBVacxnUhhPknMuexJnvRCxdoWE",
  "key11": "4ukd2bS4a4SW2FQ2jkdhSjwXWWvsMMoeYKzDdydVhS54aVmjov42a63EoRdH4dwFuH9ya2xF6EpfUEm7SApPP3Xc",
  "key12": "5F2WNCxjUvavi1hXcGM4ea7A9Xe47Srb6yWUg76WcKtcdAgYEQTxz3jQty2ZZnbk9RQSMLfswhrMZiviinEFqMyx",
  "key13": "5oGeGN3v2fe7WoQbsFooCNGYaPeYWyFv11uMied9RM39CStJzYPfxtmfmYfrdpey2AaqEFANLx517NkfQmGee6K1",
  "key14": "dVaG7D8weM4AtmvErFnTGaredjnqKNsWWuWGAXmwxS2asXq9UafqZUxjSaNmTmJVPM4xyJRLiT7ZbivwFAqjQZR",
  "key15": "vh2DAX3hZ3LP5gVyTyZpBLwgQY8xkumDy3NCXZaXuTpLSff8p1ufSkS23xJECoYmxswSJWw1RLwSCEj1iMcQKrX",
  "key16": "2Y7FbjEA3R9gVo8eV4vp6sVjRenZKRADXdPQakPqxvfVJrTHgbimiDDVmWR2agSUKujeJ3iykDP2ZPzDQ6M6PbiX",
  "key17": "mQL2AUK2R7UVzFGNLsL7gAhkWtaNdXJcA7pDNczvYo2brruzzqXtKhidmcJhXmcNE8QkifyemqHTNvvyojvLaFg",
  "key18": "HsxtyhBPcndUouYV3PNugQKs6218PD7WmFZ2rpFSmWeKK8rhMSEhCeEBezAs5xHTUVYMFk1W63LdWkJro5dmL9P",
  "key19": "582m7HD7aNLGD96Q8TBLKrsZmvGSWWDyj3Ko3QPZ9TSsVuqr8NZDaG8oPrJPboG4Le2DjcoyCVttFRDitrod18WC",
  "key20": "5ttNUTGXACq8HjHCaJgbKqktE3t93uZi52CU2RaWna3S9HmgpnzrNtC9mioTtLM8LbsSJ5fvK2BmJX9dqBk1Cmiz",
  "key21": "52YnQ57bUCQjp2bWYc6H33QsyoDvJNxzhJ8PSweZhhA6ZV6wDQjKnY2oMK7uTJm8wGm7K5HHX4k9TLoAmwrXau6b",
  "key22": "2t3Kd5t6ZaS3NMEDVtz4UsAd83eGzTLnkMvLe4etp7KDjDQCz7pu7suJSajgc6qdbAYWJNYK6dU1BzwCgPnQQ3Qb",
  "key23": "2Cfihhjwpkn5NcJRY5Yq7iC12WboE9mfxJrfnumWo89E2GNePHbPZjxC4iEkdpqeydMgEdsm3kvKnLrswDRycsmR",
  "key24": "2Nh5mK8uEZ19wMTPHN3V55mdAc1U3spKRnGKVK5d48SHh9rSQAMkRT1VKmSfHdQA9zdRvfhQiVbDwTGRwP8GeaK6",
  "key25": "2PxHNesM3G2pxB6fUFQhLq5m1DtU7Ybp3sxyk3AZ9VqBCe3kEQVWYmaDqWzQSH7iGNRr7En2CCid6Z1Hn57xzUNp",
  "key26": "3QDcFNu3LJ9jp1beJc9ZQLQ2Lqj7GVmqkPeAUicU9gn8qdjYA8erZ2Y6tptwrSuAYESS6QAPjywTeZxkjXxAvxrW",
  "key27": "3f4EE3U9JdMe1obtsWquECTkYx9GNdyrZzY9nL8dt3AfseEA9ZGkVCEDE69ZWwpEwvRe76JdBaZgQm6DCRSR2L2F",
  "key28": "4W1pHvZYY9rT2mdoh6kRABMyhRnNtoxRK7iuPjyDRE7wAYSidRb5gQEq8rRoJdxKazvBUjAzdRwumETAwiZFEyeU",
  "key29": "korS2tnwZ6Tgro9HwNdVBcUw4ZuKcdhkBgC9aVxZD3MAh3qtNEdpJh98RykDbGobK8PqBnRERziBxM7p9WkVSG4",
  "key30": "4R63htDvcCpfiqW1kCPPkETFxSc8kLjcbv8unobDAmnAf6WBD5wURVBxZs2ERmgqqwoUz4FUnGNkj7uziMooNHhH",
  "key31": "YKPeLUa1rXR7xMz6riQVeCo6MMom3PnBiCwvRtWEKviQKzG9dYdejnaMZDkniHw8kUSwfCuUnhhMuWhHLffymyL",
  "key32": "5N5xqm75RLxfGPFDcngGFrpf2CNHnYbfJvEfV8iwjZqwjEiP8zwx4HQZcJEoSn6hTuguTB265xFPATkGoBeQEUhr",
  "key33": "2QqxcDfJCDiZUphcsTCRrDcMMqvFp56URZzanrYn2MWEmfwBSgqMU93ffFMYXXpGJUNLaz1r6E2praG3xWzMhBUj",
  "key34": "4g3CAtieYxus5gxAFrAufvwGqRBbzHVYmbh7BPHxBwA4PBsBoeDNdKSG6otHuTdg1i37TvFUAXi62PNeJwi5A7fq",
  "key35": "33Q7BGM4nxX9s2YKyQqcnRnG94qyukj3LjzAPs2ituUEDZbyJXJqtXTrQK74v8k4pxewPpwU5X6KTSS6Vy1ARppj",
  "key36": "q91LzECG7UxtNM9M4hD7DqwWFsx357UHPMn1ac8uhow2cekZpGNezuGqBfLq5jcJaV5gnPWRps5qCPp3t83UnSk",
  "key37": "4ZGAAWWJ5uz6r5PeaFKZp9bdLzuRx8tEy6RarjsNq91aKnTRrFyifkYWUk5WcCm2GfBBGv953t7RPA4CiJGUokNA",
  "key38": "47tDfZfgGhLJekg3qJXhs8WHoc74zmpSd3kQETbPig11Lf5L59bCvBqhiUMzWSt146TuFcu9bCJvsD2Y7vv9stwd",
  "key39": "4NCvkpGxPzfogwQ5oKPyXxFBcywx4a1Q5peLbo9cZcq8auEJdbKyhqMecfE6YAk98Lu2ctwout6ZGrekJUND4778",
  "key40": "2s3W59EGwwxyCcd5qBfRNpThM4c8PFo5JKPP5oXrixamn9ycuHZNL72i8jRBimMiEgDdtcBm1FE62TA5RRo2u36r",
  "key41": "5BwCGsXsrNVYZLN5XUgqhuGfeXGTghHKNh9ext8PAUfxZFcudAPdXfxTXu9iQ6TSdChkh6U58MN123vJNbgrNYwX",
  "key42": "3ceysWLsnzTsCcpZphYtcz53oashDGdsuLMJZFnJ2uxRdEadmq4CcfjmEn9Ryui9muGdkQmb3nLkLRwE6dJ2GYZk",
  "key43": "4EAPei7Ydai2CgqPBmWXGrV8ubZdu2hD2cJBYJ9G93RgXL3ghXqcSZuqCPMU59HhfB6YJH3vdwqTXFQgDxpyspqH",
  "key44": "3ACbsKNjoRb9stAcHF9XEKUs7dfUPfPniXoTajVkqEnWZZrCP4fZayNMubyAmSwaUPjYUiCNfX8pU5XAjUp6LiTR"
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
