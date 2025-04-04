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
    "4zsWKHBgoEv8in3fvu2RFnazXXnsLkaiDNvFwZ5G6iF8P4JCgxpaKpbrTJdgLcoaAuSX7A4oxMf9QZJDJ1knNJWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VhBB2KaEphg6VeRxvaL1u41QaCq6WVm7KTPsnmBWS8B7dWaozVbBnHerMA2GebsFkeQjMRTn8XZh7ZYvDsr2dxY",
  "key1": "5TG8YbsiB5tUDGM216CVmbRMNu31L9kpBmEiYFHoDWXM1W62utHCAxwyS8vwqw6n4idSaWQCUMvZ2NJ3M2GnBqjN",
  "key2": "3gtsNyJEBtGcYfqQXiwRhvoKghCXTWM3ZDc9sXiQCi1ihKDT7wNT9e7yvPbXqGWh6NcRfckx1Dj9QNity1s31woB",
  "key3": "2GHuMGWy7r5Fh6QaAA8C8F1zGHaTSHF9snrCm99idcokNtRgXJMKdpiCmKPqa6JGvphKgSoub2oko4WKrYvhveYi",
  "key4": "4H19cMzHg6BYLwjJqHYF94iX63DHueJv6M3X1tdPRE4qYg96CvQBzbAnb6gdqKmqaYzL7jzgUqNcgDjrZzKCKi6h",
  "key5": "3v4ze8iMcNJJc55GkjBHwpQ5mqwhX5UrEV6BpR6Ca3yHGyqZPa3JNLFiYNYJ1Wro1A5udHewZsbUo3hoX4sTvFCu",
  "key6": "61fEoDHpokrUcWCa29fTXG4G6goQJggw5d9CTHm23HGmFSpCM3gUSkpa71Md7VfrBgarJFbWSnY7FZGdr54hB2ZX",
  "key7": "52kpp3EycieKVLrwBYW5ahGYoHXSLqZDM941gfYDdeYfG4eTAUYDPmJRqqHkAFNs714WQ5aN1pS1m6Lf4SxVHLJa",
  "key8": "57PBzJyGV41sZpybYoWGcGtYhN5i4tDQBAiEj6JNyzxz1GWazbFDsiHwwRXKsfbS3gGESxYDZBZnboRFTJbL8XGY",
  "key9": "5Cbe9cqVHdNDcAoXkXgvZWRFajfHBobJ34gBmAFaZA7WAsatdKBuDxQ8duxr7eaCJnaVX9zoZKri2ESqxabj6fH9",
  "key10": "4nUSb6X7qtXhF2vVfYp7aNoUvtPfagRzda6zbAAbR4HMCt1vUtc4eiZHQRkoMpmpFfDMrsJQzsDmwUMe8zqKq1vz",
  "key11": "3qSHSEU3cFBPRHF3kDxDW5hbTwP73GsiZiBpd2UTJnEMwhGPAtDuEY4TnCTTrfse9DLo6ABpTerNRExfjqud1bjW",
  "key12": "4rGu8m5E3V4p57iUAi6bCTcvwDUUSHzhSLeJnsB9mV3kbCWmPSKhBpAooY6R49KecLNGrebbapd1SuxydZLEFXWi",
  "key13": "c1X1RTm9BFMAvuDPtHKhQGotN6fkK7SZWH2oSiTb2J8WKcn3dVQxBmRDy6XW94paSCxJxY3nG29UD6usyyB5rFD",
  "key14": "yFhPbePh4s18hsFr5PNHr7NUDiEvmBLo4A39a2oFK9hcjQbhagtug7mgzQTY7JMvqvHDbpmWVmPUcX1s7wcYENc",
  "key15": "3S8PemenXW7YUfzWBUKwLUPebJm5NqkXN3ciXXe4JmHCdZ22SDf7g4b8NX47QtugStR63poC3aPvaDHqc4j48vag",
  "key16": "5wQgkeBRxQpSWiqmbbqoi2qZbYAwVvif6bps7FyfpSzW1FdkDk2uV27TaXiUdfkyH1SUGcZiQqUGHAHh87DKeQkf",
  "key17": "1aswikupkcwr72YfyN4WWAiKZvpNrDgrSRbc3x1auZYPYKVVNEabCDtKCZcB3cX18qBkWNhRHZUa76xh9mG2GvA",
  "key18": "5mxiY6eUveA9bEapTGpLrgGUDrCBh3VAdqvcpGE1FHRabeJ8eKJu1z8zE4HSMEFSC4CcsNms1w553q9DNyGdNRW3",
  "key19": "4NgwZg9iKrW4yX6gPatTEimChjoWwwioYu69hKQH5774waTEHUp6s4yBJPqDHf7McmwQUrh26BcZNgRGxXqNCEC9",
  "key20": "ns7ybWbnw9gcui2ni9om7K7TNVd5gcFL8ptWqsLb5vvw5CzUavQFFHe8qx41usxy1rkDDLUgAMFmp4z7zkggbTv",
  "key21": "36je2C8Ag4Fe52bLYswWmgEX6yUJBDu8A7Mfn8t7v5PbmGVyAda69sBap7CXwGFuiySZpJJMQqdDTQb492914x4f",
  "key22": "Bh4r4CKVy39zCHCYQQicf2y72p1TuR7rkygfXL6wY4JWJxSAGG5w3w4etjN1FzKkufVCq993LSJyZ7Zm2NDpAgP",
  "key23": "31oxv15JCpNWsWPRRTqvnXmD8PrAgc3vz9SV8rufvXed2LwBukHKAz7WzHKPXgjV5AzLYGekrsNUiMqsdMS9paUn",
  "key24": "5ukh9ES3P6PdyX8ZctZokF6HMhZvWYX4EDTnUnbS5wnNBAaw5s4gXkGdjDZD88Ctd6Xs1PUpWkQrSJSWPHQUa9HT",
  "key25": "2rX199uUpqJGocPoTpw9wLBDqQxAxUBv7bCZcVLwdM5fmhuA9qko36dK78v8zj1rGSyNmizgUZL88u49dqzKHqkr",
  "key26": "3c5rPjzMjdRHsAAVAcuX4Jto5RC9FafUBVNnf92c12Yrx4eZwHV35EWYjFv3f6YVNfThtq89YQJfccu2HxWe1WCz",
  "key27": "nSyxGuFBz5p8iszz2qahqjd2wPp5rVWoQsSKgCQANtLiFCkn1cyeoLxnZivdrpax9xkDCECncFPcc5THQ29t6wF",
  "key28": "5TTqrfZLBSYrGHuo664ZCxUUS8VdgTQeYXSAhvXqXzfMBeou9Lr1Lk37boz51FAWmjJUUusNE1MhQVKfhj2QfkDv",
  "key29": "2sPLXxruQ987EbmpiqyJv26ncgXwr7UiPR5GcMnt5pkmCs2xDTAGYw9dQspYT3iSffsxShvfCF1GkzkmTB7YtY5",
  "key30": "3uKwZsgYSgJZ8wyyErUuMDFG3gP2iqWbun46we3H7iVbjg51H5Mg94aFL7DKTXA1mNQCiXjipvkM5jscTpPizXhB",
  "key31": "43AsUJM6NucNhrJSkyh2DRBfJj8LMxojTDxqKSbNtuXVTDvHQpKUjFkzHm7L3qCSnUz6F7kBi42dNUxbRuf1h6td",
  "key32": "4rJPZGkUgKAvuESHwEZQE2F1i4t8DpMWLoRASaLtH3Uo5bqkLxLbFAGqCSmCswYqAMYXUkpJHKURUWQoQTwKGNvC",
  "key33": "2TaVi6aDMxERd8CAs8B7A9SZFE1FvKRECA1Fxrx7p8axs5BQu58FdpzqYZZ4hs4iXAWb98N5R35P1wz6chy7HaV4",
  "key34": "4hDpb8LNvX51wn42qt52nMqwaMnTjoq7SKU8GJaNxWBK6GAx9N9wt6ugHLnCt1ohkJiameNUcbSMogSgoJrSz5gU",
  "key35": "2GWVxxgsWY7xGb5Pv6LaZFCWj4UWgABQZYYLjAqTLowqhFDn26gzcWsuRMRX6Hxiz1n7nz7jHnRh7aKCWmPaxzYn",
  "key36": "4kjAZ3YY7vYKG2i6pTRz2m4mzn1GcF5FeForPW9K6TtdjXbKutLU3476PFhviWx36y6j1im5ARRH2rBFs5hwoZeD",
  "key37": "2hnRxMaqytEW9HuovSdN57xhZv8cnn8aodhAbB7Mwdb4RxV6HNW1gKRXa9u1UHNA7WPfDVb46neF1wUJV9RTuSYH",
  "key38": "38yo2rYyriUDC7MjbLs8oG5tEErPAfYhZtcAY6Nu5frHeTXLFhnnrNkM6pc9Yat8Dgkz9k45oRGunzycRMp8mmWo",
  "key39": "7TiaktgY22GbqiiWSqA332G39MfzppSWMWeuLJuikJjyV8QdZzmMKaVYx48Rjsn3rcnY1XTb9dBjFVgkKaLZLwV",
  "key40": "3nSDrC3v73QwAQJKXHkEhqfxG45Nu5j2phHYJWN8n2eJcDYnn3J4kjMC2X1Jf4xzu1JyocnQmYLBcGsUeLxeB5fE",
  "key41": "5G6bnGbfSB5SEyVdRJq3g1mG8SstzRznQrd8Y34gaY1QvK7iJLFvnrEZK5iXYGhEe84MRwvUxT73q7WewGdBLM5k",
  "key42": "5NZ3JboFbmzpLiy7EwnSBEXdhuKngNviLeFKxnbMmhBcL1snoTHqHHJnPziQSpDNWstkkzi4vEL4Z7LTXjUmpeB9",
  "key43": "3haBKD1Bf7Nwx39jbQv34Pt7LoYKzcgQn6QR5yh1up2ngdABe5iMGeWtVqz7HXpfTsYQHWSopJcxUvPuHbAfejoL",
  "key44": "tLqWs3HZT4DcZP2ZhCwHwNav5T1JfKMp7XsxhDPYDnRkAjPRAxsM8umPBYssg7zR8FXZtacAmbKB3xPAveBAL4N",
  "key45": "45P8SnmoCCDnmHPoj9UYs6bCAUBVna6o4hq5Abh2SzUrKhf2PTZiGN8QRT5t7nGj5ASme7cQGpndphwQEupzAMJn"
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
