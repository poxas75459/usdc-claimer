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
    "3rx3qahM473DnX1V77KBR48sqRCKfG6dMh1n24xHsKzrhb4CzvJsYGWWUaN27QRxuammPtXB6jbBEdn2kig96feX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DSNBDoLsXr6UgX2y6skYvHhnzumooXJN3nXAMFyRkfh4bis4XARFKNSf5XFPuPSKMgA9dfzeSefY9VcD6KppSzN",
  "key1": "4cWURRiQTbL531gWVmxmRdhyF8r3fNf2SpyYckEo9JBhk4S5HRkW4xZEZ3NjMBoqJT6c76xrk7TAgrs7PmzodmHj",
  "key2": "5NFugKpE6kAmKzkdbc2CReiUBm2DturYfRTvrvt867jgVXDVGFmp2YPwrzrtoUTraedLPV1oEGzvUVe4aU2TLwe1",
  "key3": "24UGpUKDukmWJ6Y1E7EswUpPuE9XTieEctpmVhCj39LcsAHHxGDsV3erqXdW1qPgRu5qBwLa3xBTNt3coSyZBRff",
  "key4": "5GqrcizUZGZ3TFBQ49m4QDzXa3kWaUDm73s9pkx1y75AuhsP4uKUg1sBY26NDBuS8bJ1dhGnoUu2jaDSffXwzxwx",
  "key5": "2nfgcKnZ9B1vgGvpCaSkQuyQTB3Wrf5EbAK85AhomfA7ZXaQyWSxaR4JrRYyi1PTTTQoqKBx9znrap62dAFj9Aa7",
  "key6": "5SjwHD3NNFdP3BQzYvNnvLtqKhDkFWrPb1ACsrWYP1meuZmBu1BKAUzBvRnQNG82SWFv86adDqC2rDwLiunZt5xm",
  "key7": "5ALSDApuRF8uG9ZPtoULVerdXgjFccsb6xMi6YP4DTQPpBR5s6c3GbGTrTHYo5Yqpkov1BPgkHJ3c9ao17uGAfMV",
  "key8": "5RWVJnAz4iYy3HcMGsqCEat92EUp53cr7jA4WkKHKduZDqkU9PTTzxeWRY9Gq3WFnk1uN4vuhQQUNo7Mdm4mUPQg",
  "key9": "2iyhcZiUMg1w7MDRktthG2fr9fCSGUtdKyAgwFmGkLFHnWjkH6mfZAPwsCoTncwypa79H1rnWkpyFwkMqgbBNTNV",
  "key10": "32rSTXH81kWgSLmGK6km3pyivYsKC6gGcs6TNWd7KHW4cCZojT9CPE3RqQvchXPkWa1pKXSXX8yGgek952Tj7QA6",
  "key11": "6W3TcLiFsdrAo99tLSwXz7m6i34qqCvfkqboCnvcLvsjKiuBVMhjHhqVkjqKRvz1qSaaA6bQ9FY1i3mKcgUasmF",
  "key12": "3YAXovivN3xLX69XqP1xsSYTsNbEThkzDWDFSrULK8eQM2LG5cBgNebaUb3xnDmASxtA1WtsgvMsyJDWDystNCfV",
  "key13": "4YcQk1Wab26R4vrzhMx5WEXdtYGEn2W6cCzxNj9feyqxM4KZb9SphBPYwPGvZc3CQYDqguE1BixdLCZ4mw3MkhxZ",
  "key14": "5EZPfNqFo7k1TUvACVHVWh6yNKZJrJandNK2NNjvhMGSvrTJUBPvj9oaVvhGKcpNyDndE4VepQkNoNYzaSwnicSy",
  "key15": "5574M7VkDitaCu5ABZJSzoMDxqVnQJkqhuAMSMM7EPNnnQLSEiRR66Jkgfe9KxHLQw2r7ZLTtXZZE5AQSPcmCjvX",
  "key16": "4RWQcuAFF6SKfxZqCVCF8f6MnG2gwFqRbQsi5ACjmYSk6GKFKQu2TT9hzHxUkdKjF1sixaDfqWEdMjxtME83t9sZ",
  "key17": "LkV5eoxMhuKk9b88E25djYKee8KP1cgig8c1db5kCxc9jMWGWHf8enVKu2RgP2L9o6tTeFjiMvepHvyJYLst7jK",
  "key18": "3YVscjQ3kWpJoMyDmmzocU4XtFituVe5AtnLqdou4uyCfobUy7jE24AkaCUawuC17d41jr9vsWC9CDykjc9MsVK4",
  "key19": "peznxXhh6boFnSvi83Er7MBuErAYtP5mow9pcbALzBaF6ytgVWHJuVmNCuyGRYqLVyPz4yUvW4GpHMNYaNKQvUb",
  "key20": "2ywUVYmvb4hYQNmajo44UspBtPwYu6zdCoVWmR9iKo8w2GMzxNLFtgt1ULLJ6NpFddxzGJ2Bj41cXpuruvdssopP",
  "key21": "5syhpbDTtAfGdTZvSDxKraS5jixPaWUz3BKaPBEoq7JgjQeKKwXG5CHyvhn7KpHjTDK6MMEdRx81dBCezUbf1HVB",
  "key22": "4AavdtZAY6fVHG8rHs8ydWnBgBdxZrfgsk4VuNjcmvoHppRNZrhVtFheUjs94vBv7PnqkkapMEyZGXwYVuDtZ9ai",
  "key23": "5AnkMpUnVTSVDsGynJZQaoNbcQHq915eHsNHpb2PCSGD3YbGaxuaiCpCWdWBCrFKQAMwEDgSfDu7iAyNRaQEq1t4",
  "key24": "S34prtGJunSZvTvoeMRTS4BP6D4ugtoUaUdLJa6caifUvpdt61ppjxgWBR7RVqNzNxzXRFaUmPC5CP8jqTiej6u",
  "key25": "2zRZ7pS2WoNg36ErRR7PjhwD2abPVYrjQxmhYUFfByv6fhYWPApt3Peh721chJ3jMu2W4CEjYZj8ABf6SiMaG965",
  "key26": "5J1h7mhrr2gUdywDFEFFPnrz1XPqVdjb2Bkjcgt82E9PMeD9WNtTVNZhqLug1mVzDretgMEXuN6TpMQNdGFMFyTU",
  "key27": "2PBaHnL4Ph6GTrAXoewiTcnVf5fCfm5oRXTFovvQdUDd1PxUTQwGUb2W7tjHQNfozzemhmEGZYU4EgXCB22FoqV2",
  "key28": "3E2b2pnoJAwDnX9SeP48rQeSc8kAF8GJASkUcU3QZ3BKiXYXf8JWfApqynBj4ziNvVS3JRqbUftx75rhGBSGTWNZ",
  "key29": "22neDAMrUFWWRxZE74UgphTW6KwVqVsEUxfxMjetpX4VavEdz2YymGgKGDs5ZtFA5uUP2aQyPh4F8gseq4saWffr",
  "key30": "3UdLTZMeqZQQkoZzg2JXrnAbht1eFd7BdqzZRM36uDjS97Y8djPk9DyukU3U9ZZVb8eRqVegq9ZrE1wv2XrEpGtw",
  "key31": "25k4NCBfjZUwfhjUhZXE6KkWnzRZg6XuKSeJVNigJUcp6M98VBRF9BvyQr9jXbUb5PVnxhCNuwTf76c8eGFQdjhF",
  "key32": "28DEnBvp1PnTzWtj6eGSfjptifURDxgrAmWxRtK9RyVgs5Lrojjz4KV53EW6MMuqZecSzLsNY8yTfgkfFgqmAaZZ",
  "key33": "24YzQA661kWVSrRZyvRgKCXxKiaZXM6PZKkwK9NGcvEemik8AKPHEShEyExqWHqhQcyAkpvRjNodhYn8LggdE5T6",
  "key34": "3n2R38PmJV7R642bL8Hyfg3XTG8LbiASE4oHyvaiVUTfwYA5yXEcKJVh3aufsAsAy5R3uM8Mtw2ftw3WZdpa5Ggj",
  "key35": "4kbmiXPLj3DfML9yFVq3HoNvyzsoDasJ7sg22Q8h4tiVztprx9EgznCe7GbYQfwciYf9PzcSJnKPg7sgwx7UYUZ2",
  "key36": "5ifSUYxzbq7j5PKVEn2SPmqFKTFYAMaUytQByLtQPc4xGAQpJZF4E8aRV8eSFUkSNHKmJ5oquY7BZJuz7Pji48uB",
  "key37": "3X1pwXzwAEXDdLxaq7QCQsjF4J8K3JSf9Qg2zZgSCV6f93J72SVNydaDQ6kvqbQu79p5PAP7HQdzUyjEWYGaP2ix",
  "key38": "58pkYJskWQvsf5C4ULAv7oMJpF6XDDfgEcUDvpXEuS5yruUyT4Qey7w6qXB6SvE1aoj9RKj9sseAwqrFKgKLMAgp",
  "key39": "5bRMiBg3se9p3JizHHrUxcfwLTCfD26EJdfFn5NVXHYJzs78dagAta69diGEw1XgCwKZsZApmR54TNGWrvaU6sBT",
  "key40": "e5uws8JmFfFzm8xeCdh23A6oS5iQEy9niUxUmjWvVDC2YYpic5FoGWFCyivCUMkZKi1GxgaaDFaCDzyGCrjZ5ca"
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
