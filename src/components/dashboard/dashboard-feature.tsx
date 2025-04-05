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
    "CGRaHUVVXnwb7KcbC86akkRPQfhjpvSF711X4rjYL254iv47CXAYoYTH2kM3NwsW6YMF4WsDhN6qmde8QfcmP2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LUceFA6zs9EyNNQtpzzXBe5UyQ91yrq1nRy2pnfHb9kWMeJvePFbHx6RWzz3vGSzxria5SA9p8p8vDjSRm5Aiya",
  "key1": "ZCVhYFkKyEkZQ3vpREW8ZvKw46kr6M4SUv7sGit7WpCPNe1WThWd2u6PFBqfa71LRxeiS3q84UbqPi3zY3kquVU",
  "key2": "39UxJGkoPcg74bRtXrR2SqcTqNaiPuLTHGYoHQZu8gU2yExn9Ys7X9SeXYsGxbA4MNb5PuQD9m2Hr4yS34TcLC21",
  "key3": "4NP1LnP6EqZk731UidbK6ogtiJ3zEdUNycW4WjDJPPWv7pQfiQ9croFU9VfsMyHSMFXpBYw1GZu6MChUdpusUHfA",
  "key4": "5mS5Y1zMu8KpCCcYwsFG1a7PBLPjS9gjRJivPyXsud9aoMiqGM7H5FjP2sirNw51z8HAHg62NFKCgYUzVsRgKUin",
  "key5": "5BYuXUcRxXVrSm6tBL1RYM75Gjqf3A4etqzXhQYZFKDdbLBc7VLJb2idqHHJQjb4UTAQXDZUhawQ6VJXikJRGaDa",
  "key6": "2Bwn5D2TCD2EcrmSsbFkCkUSZDTfDH9wD5Mzu7xCN3QbPf9mLsZU6cvvF3Bu3FL5E7X3gUKKwTqWDbR8XtWT1CjR",
  "key7": "F7PNQHkFvMYhrrWdYqWBPJttAkTGEqU3UrEVg4jJfcfHWrWH7unSWbebd44SH6Za95BGV6vDYC7FuEfnPfQTP6W",
  "key8": "3pkKdTdrYbjb1fFEZEgpS9Cu3ktJNGKpfx7mqbA91bv8ofJm5RhTPNAMej1EFEmsZ5tVdnBt4DHxmApE5R153BW9",
  "key9": "4DaCCsNsz8XAso68gY8JHUXUQbtN7Y6Zw7SpCzyxz9HG7Sh5L1BJQigLAoWAaKGnFg18NwBS8bE8u5jZWhBF4PAs",
  "key10": "5LHZnN6hW78WehnBaYPbADNtjEw6wk4VXrYMycSxXv24ovcUbUF22226smfcYPatPevm1n62aGbs9CCPrf6Y28CH",
  "key11": "Ly88k66fJym97iaD91CTWwgjigyNQYSKWgcKik7WJnLJLhEjuhMfzZz7C9Ea6rfuC9T9Vp6r1Jz9QgW4HXFyiK2",
  "key12": "NT3W3V8g9WuNVGPpnE32uJJHT5F9T7ru84oE7BvHeWeE5n7efV1yjES5TmNSodc8vhmsRGd3oTag1dQ4kdmtp8X",
  "key13": "4fueYaKXhi1DpxFjQh7vnJ3nBLej9pVLzDZMVt2kGYkKjf6FHxRzsoBpZiXJ8bW9Qb5iAjuaxd6LSkU3AkomwHUk",
  "key14": "2hWoG9qLTqhYXZnLYqyWs9t1woY8rxoM5H7CR2cZ1x9eWt5g2N6g1MzSwk7kcgWgbVh3WkCEMedaqHWdsNpUrpFV",
  "key15": "3r6js5hjjToKhiSKv4nevTs7CqZnsdPiscJ7TG7m9s8s5LvKEr6C2eE8zAxTJTFzt4Vue6JgwgK1DZEFhKDbCJG2",
  "key16": "4hCLbcS5TrbDK66w6XVsFw2xABWAwNNaRXqqMtX9e3p7u2nR4gQzXhwRUAK6dtV1CxjV4A3T9jSWULBvYJbTcxpe",
  "key17": "3gMyQ4KZGj3WwNG92w4EhyqojjeGxiXhGdjKM6QW1ATzdsAUfGannGuSrLtYpnjSPgurYDGtUd6S7nhSj6hK7WZh",
  "key18": "3Rv7Ws33WVVrErgoEaFyhQQJTNSuBkN1uNoVhStDDURVwe2hnczHZju4U36Gy91ocLBYAuLg8a6pnpk8ZCk3sAr3",
  "key19": "2cAozbVV8VNU2qRXcWoE27jZFvA8EtAyBPUaXXWbdW8eerBvk1MkqqyBTkAdzAmvKZsYPx6K3CXAvEXYTNYVPieg",
  "key20": "3CGonijdDsDeTZzZf1AGJzcP3Jfqi7bkRFzbDV6X1F652KaMz5cuWF3qa2aRFWWxKoDzXStGokT8vrP91inNZ6Zr",
  "key21": "5RXu5qynsRvXiknqSX9GvMeGHTPURzX2mcXo2mqLsHx4au8WTC4WFeVcPgUkowpQZjE3E8mzdN1YpYrchFzKab7a",
  "key22": "5RSBRjRn8KMnAsNrUZGmqhLPS8M9CLBsxwjGX2ZTBPpWuzZ6PpxUqevPLWwsfTGHUevBqfrF2S4gpoHiFCG3YQiY",
  "key23": "3pybJ1wSEph35AVeo2xVfbW9aQugS64h1vH5bS4QYQUJcjjtouXugffo3j6ZsV2H6Scu87GmfLvoTvGqCK7rkEh1",
  "key24": "4Ar4tMg33gBCLm7kRaSy5YGz4XXimD1af2Q5yVpst1t5uKSEQ9JvB5186sxWF3EbUu7rdTrkbggvcEnb7KebCEZj",
  "key25": "2ynquPLZeV7G3uAxvnfJnx91iXSecTx7uanRMpkSrRfaJwn1QkJDRbfjkrJKhPX6yuUnwSBD9n2gRHWRanmb8FLQ",
  "key26": "2yPrbt6ft1QnjecgqvivxSSQHQNeZrTwJ1UB3upP7qxh3nEkeXoCnqQJdXnGQ6YqYgh8VDtPoK62UduCWbyTsDo8",
  "key27": "48t7XCDtRcZxjWEZ4jUQ9KjE92MXkFnZuqoSvGQTErwVxEUg8jj7CTM7FWrsZDAb8E3SWHDYgJcStoH9UiqMAPyA",
  "key28": "RK6X7YwusKVbumKSDAXd5qBrD48eEdz49DmQ5gKhhQxYbSeu9sdQHXbghywwGYvfJ8GTTLp7GqBCcb2nWwbY88s",
  "key29": "64Vym5Feqt4Vu3bRKr25XbU9ym5ztUhRESrvkNYg8xtgU8RiSASKD8K1P1NPqKf8kumHabjritBfjwrM9gYWCmJw",
  "key30": "wrJE9TBcsXyGDNs6NgKY7kEnK4qNwQ7LYRExhjTjaHjRdKRKHxrxqDFkNRWU3cCB9aQrsC18j93Z6jVihA8U5aQ",
  "key31": "42ZxhyUqpb1i4vrA7zyjmifiWwcgdpUojoYpF1w7dS8hXv8J97D5q4XFvNbXhwUBBWLf5RN1ioAcYoviyLhyKinM",
  "key32": "2kK4UFGYPaYAJQhZfRGfL7iEnGHD5yJZfoHansQo3ehDzeAiNfg1d2vSvvVxcGX69Tys4VvoExNpf2cWAp6HS4B8",
  "key33": "3tzf99KSAkzjsGQX4oFkoe1xKiBXAsmkrhJKL3AXTokndfFv43joPVufmTVqV6JvLyh1e8RNcWLQKEC1RcR4Q8L7",
  "key34": "38AHUYDAF8ECaZp1qsiw4yHYXG8UJNucZMwv8ULW6u9W8cjVSyE6oS5oRe1Vr4rqVEhYDry9qib9Q77B9MigMzYb",
  "key35": "4XHhaUYcjdBSVLTzjxhEmMqXXJHosLA73gX1nrQpskAWL3NfmKNh3RFBX6RXmtbggwqhzufyVG7pppnaQvVxSeBV",
  "key36": "66ie5GNtueFWpcJSqUsQdioYzcNhQ1xLZwywVoa7ZVpXjHS6JsCvBqRhRviHmFSjfP34Z35L8EfeJ3kZAsFZjXLR",
  "key37": "4ABcZ4mHmhfazJEju2t4Ruc89HFtFNwTNYVRSfuchLSeLsV6QArrtNqvDVZ1ctntWaWv3J18emPnPtB3wvj5buzr",
  "key38": "5WbLnvt6ztrGKpmuMtLVZCpNvxqy1QrsjbD6RYLzbswBgoSTUca5h2pgTnDTJpFgE3csSJmCJ5kEfv8NEnLjkuDc",
  "key39": "2iBfFvyQgLiTWY7T2uAEGTpHaTtmpeZCGVPSKyQBdAxkvbCbhHz3C1DwqR9W7eDCuHQmZGyvbEguSthxHCP39q1E",
  "key40": "3KJ5tL4R7rjN1ps2YeFjXhQtqpEAou8FF31bXd4ZwtLzWkSP6NoWaDNRM9ESiUbXnmnDr5LLz16q8Tki4eGzNUKe"
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
