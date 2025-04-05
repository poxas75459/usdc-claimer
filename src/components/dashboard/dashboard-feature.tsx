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
    "3cVwH6PXBKmE8New3XoPAtNTiq4y1wdZekKdV9w4SLdvvAWqhyGHNDf2RN3hCm1Y2KMjgNYZHRrSb5yW7yoDej6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDAeYLuaGKw2PSRRsMNPdLfptJNjVaAW1LsABCyBKTjjGDnZnSBB63CviteRGRVZFwZeXzMcAXjnPtNjwWER6Dw",
  "key1": "64zyFZNSPbWKernWNPxZ9cwg5sBxY8mwPdztH7WNqFJexFk4KZY92L899bfMPZcrQRez2zANLV4sVywgvgSGAssk",
  "key2": "3SBo6mur8Ew5NPcYWJw1Y8gWqCR9qYzL5zqhKG5reGbaLeG8QYMribma8adqsHGqktnhuaVemEZtQqygRRFM6XD9",
  "key3": "5Jr5NHAn1m5RMFnM71s4D57tJ1ffguyjCVLc9Kvh3yPonhFfRMWnJbnnkUP8hpwGvsEgWUpUUSeVMUPtfAKDSVV2",
  "key4": "2Enwetq8m6cm4rZ1WWszf1U6KF6njMKtKgpeqKwyZKhAecSKx8nfRco1mRMcWHoZA88AV1v4pAv8kcgC1VF52ohJ",
  "key5": "3cxk59GbWzAmsjzmwuZWVfdE7SYXLkJxtEnLsWyYWBPT5rtHr5KPaFHZNb2z4ZeiE8e9Y5Mxym3xdpqNqu3kPyXC",
  "key6": "4hmbpxxspkg7WJgR2SRH7AGVnwvtXRgjq9puUVSZ1iCeJsTPyxb5iSFsDwnftZrxmJ7mCfTqRBhPN1AH8RvJ3aLN",
  "key7": "2S8a3GysW846VQuP2BgDrwbtxah2kCkh6ptDK5BQU5PfTR7KzEeBUsxD8dxtrjmGGB43DPJcCQM6HpyuiyXaSgs8",
  "key8": "3n31HEw28Tg9Pak4DRGrd6kR1WskoFCVMMfL61NeEDKszWZfgSZ2VN2vox8NLj99CdLAhEcb91sNmFRcEvX9tvSH",
  "key9": "5psy4sgoGRo5KsvtLTaYMdJxTVW78NFuGZgrdtnEVaRuTu2FtyZBHRSQqinMqt2zz6oD8GexcAkDwBdqJuGaPbHC",
  "key10": "2yuTyqj51wzJ6rroTDvPdCSdorgW875P3yWhCU3uGtsqBAsXAN33MNJTRcZXPRkRVn9T23qCu9cjJM1gGtME6FJo",
  "key11": "5VqHEVaxRdjKxWUKoDjYLbHXNM3AYgnWwyyXyWx2pQXVovzozoR8W4YaQXXDbeiPurmXbsFNYzTpDhXWyo3mJ4of",
  "key12": "EMSMQdA9RXu7LBwMPM9w7ujjkm7Ze6GQFAfavtpChJ7xAb8HzZuxAuvrFaZCYRCquuL1yVekzHk1SJLhhWZppmJ",
  "key13": "2LChnTr5t7gxd1Kz32bELQoAYdyqdDEp6GDjhS1iLnEBbZ7S6XY7PjtFpV8DJ4FarscqfPbn33EEkAiRGWpDXA4b",
  "key14": "5AkroHb6CWt9guTxTnZNprJ71gkWXazKqkWirfdG341fES88y6cvTb9boUoRL1bSSydgU9vKYVoXeGZMqBXLWgKH",
  "key15": "5oN7qx1zEL11qZ7ieJ9d3tMtHtq419FcrAKQiYKytDhRej7S1Thar9fADRg8q8tEUQxpiKT5xR2PUSxULbfY3h7m",
  "key16": "mSuTNVjrQcCXZgnpxCw5etskD1ZoDCwTrdQTreq7z5VvRrmnokQAdh2XVtvDhn41ZLEbygTJYtV72K1tc3TGY6U",
  "key17": "2LoSELN5XYcYDDdSgSCYxrxMM5VjVnexNTHrxq4nS459JZ1sUMPLJ4ai2q7eiu2vdDzaVa4yFMv4np3mofA81MUP",
  "key18": "62tTZPRXp1GGdDoR3yGdbQcXdRwcdMgwhFhtVuDMpeCSbRQSv2zDf3H6WF15XgLK6NefwbALiY6WDuH669skhSAD",
  "key19": "nZ8FzuFQH1Thw8h5y1rJ8vixYGpDLTM2LHzfvbhkjvmDzUxWYLJmfgXCQJvvxSKZFXyd79NqJDmUnUqkWC7KSqb",
  "key20": "dWDSariUczntPR4w3egVpfpiG6keKf9TdhB8guszTdZRfFsCdJG3eFoShJVLJJE6iNKT8ccMgdbLKn9Pr1d47me",
  "key21": "23VRbAtbjxK3sySoLk24FREKZgXY7ydUUxriMcnSHm6JW1f1tGkRPL88okwHik7J43hmaCfjYqLgUHGGSHUvWdpG",
  "key22": "1vVqBdG1nUtNTNjrkY5RXQcJWADkPx8CPgt3cwGjP5GaW6rUrG76Q5rMZxFAuHYsr93G5xFzdoo3EeBDfEMD9Fo",
  "key23": "31hnWwWzg6oysKzjfnN1FE3ZRU2hH4QyvVQ2gBta47utdGSCuLDzgxWv4VSpgaoK6h8eDw1V2thDNw4DTC2A2yrq",
  "key24": "5vKPPdY5J6pbkmhN5GWPQxbb6i8CAugfkqTJnZY6vpqy4DV854KdVBKxSau4L7rjfJejUzqcuX8N7ocq4Lb1nFes",
  "key25": "4jR8edXvQBBAoNarPpXr5cKPKZ2GLXLk1HAvkuCS2RtX3CEGiMt7vw3j9vGaEpscg4ZSbuAXHBf24h9FW9NjbA1C",
  "key26": "4ZkRhCRY1sasoLPJLFYAT3y1fQsvgr5FdUmonP1tuajHFfoKEmYCAHGYULVn2ooMsUkytxbHvUHWAJ59X8rvMzD9",
  "key27": "272E7TFDsVHaVfBy51UgVzso3evPQr2f5AQEumB4uwwufK5MQsPTS7u5hFUCR4QmnrXzKRFsij2eYjMRpx8mAe93",
  "key28": "624PxzKhpTSb3kL5UNemtr7jKUY3cmwWcr2J6P6f5NHkv2nUKDHdtJxVVEjXc6ECpQbGMnWXpPuaHxi5JAAsuDCZ",
  "key29": "3zraBv2TxfE4NEM7YKjGrSCLHFWacTDAXY292vbAMLDufpuXXkK1aQ3A4KPULugAGQadmAQf9ZKyWJuAgasgcwoe",
  "key30": "2JyfmGcsU7JPhuY7FRoibTNEcLsih7BxGJzhXLmcUVkggEMXaQS9C1YWJU44Q3rGWPzHvDEEsLLdD7HGxSMBfgCs",
  "key31": "2hd8Ehtn3ahVKaQ1WrDDyW7hkqwDNWHCjHu3jYpq8pjZmGdhpm5XbjVc8anw11UFseuDkgTqfJbtDeNvqb8BoAYd",
  "key32": "5bSqeDRkWdZ3jDmCoDZVZ73z1FMcVGbvxVpJDnxDmeHmqc2UtdPPoGLpitjfcBqAmgmfQC4tGyHCVy4471SZNN9U",
  "key33": "5R9eydWGE2rKPpVcqnAbScQ2i9XD318Y75TaQWvH4WyJHYjq1mLAnQcjY1GEq1LtjToL27Wr1oTnnuk82RSvA5NM",
  "key34": "5QQuiNge5D1diW2bJFGDrwKUfo5rPP97rXnG3x9FoTk1shbCH3ymCvPaVvcuSJjbv92MtpP2d724HwhxdjaWppTo",
  "key35": "4bAUdg3ov8XjnkHFgsFXAicHpSEkAmJEpLYEvShdVsc8GTM73WTntDJxrjsCfUQKbHdLgjhTPyHuzXx7UBRbo4qW",
  "key36": "yuAHkSEGCLkq26HwaUyUXtUkCShgr63Mq2fPA1Rzgfq2cLQCi4PXuBddyH5xYPe375YMsfTuZt7YN77S2Tr5vYh",
  "key37": "4Pwk4rethrSB7bEYBwXe4tKNEHqkEsb1qYW38WnGQxrUcHEJ5iAAzmNMoARqXCF76HHM1DQJEjpbTA87KMkBSW4t",
  "key38": "Vp6TJmz5Czp6c5hPHr8y7P6secipZU6c8gntV48DLqBWSRfRhmjT7ueRjNxPnWJeA6Q5PrYy5xUzLGiDtu6kngj",
  "key39": "126J3DAs4L9Hb7xiVdXsswopBP9bN7WQCP3mSUKczMF7Q9bYw9N7WkdxqzpLrtWJ5rAeZP4s6qs424WKMvy2QsLH",
  "key40": "DkEssjPF3vYbuFdk141sA5GMb38Em81ef27Diq6hyX77JBGhiK2GZ69XfqpQUiW2yvLp48LiEPvoMLMcH6Y2MSv",
  "key41": "5e5fxNfXjHhVQsU18gkmsg934NqrLf8hgUTCjqP8AbAbPVsjazf9CufePcmXjYcWZu4mcW6hFH6eSU1nkHPHSKdp",
  "key42": "5iyU7xbxW8iKPF62r4JTgMo3g5on3XfirNy2B8FhqKNmPkyfaJ9SCjZthy3k3dy7KaygCeQnL2TYBiJCuDjhrTjt",
  "key43": "3ztGC9bbHHzsABasDaJrxqmxDGE1EFfv8nSta9TGfhw4SY8pXRTCiFdfBmnC8irg1N3oC9sy4NBHnhs4MKgkfVR6",
  "key44": "2HboRtW3JRuVioSQ8XwiX863oY17EbEWUFN1ewiQpSMcx9emXyYcMGr8MK5joAAdcxceXzTxxkyQSyQEEALST685",
  "key45": "57zUe9Z6M7BKSX92XvYu6i1JNyRZfPD9xpmiUwh4frDLqNnP7AN3FsU8hhBpnzXbeiF6orceAaQnQ4of6fRRmXMk",
  "key46": "5EzkkgNjhm2d6iZf6E9FdxuVpaKL1DGNfwv3QPt5LjBfeXwwsgh3J9j66AZ2LdMkFYe83mGnrJRdkw4riBu7mt3B",
  "key47": "4pjjyBKC5tnNZGH4idUbph1D5StdYgrwyX876NXLDJ3a3o6ohZVTpC7PyYuydRhJ3yKzFYmikTCBktM38Z9QCTFr",
  "key48": "62qGh9CDfBZ6Bx1rJQiUuKDiNCYyYRBespGFdtLPXdzEKyJBhCZ5y6Yfqk1TGeAn3fkfqSfNVrC2oq7AHJUagjpS"
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
