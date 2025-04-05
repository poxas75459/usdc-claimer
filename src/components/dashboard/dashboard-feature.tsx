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
    "4S42i77ttPnbkagQTYJRWcX2412YdFXtCpB4bDjY5iWK5LzYKyw8sPh7FNZTdvDy2yPF8ByZXSAbe3TsMsq3wPVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uiVGjwZ4y1KVVyRoNW1Hj1t5y8uMK76nNQzL4G5JS1ic1JHTFzufBzYbChRQAq7ABpe93uZ91D7iCpwmL8db3Be",
  "key1": "3XJuvt56VDcfK2S67omaiQ8VRgzhN6UGvHEGxqGyEBEPvxA1DPYccXLRF7oQsSVrhEJQaPCZR6GnDYYVVgvsfKt4",
  "key2": "5EHhyDRGgz4ViYCnZhQTyCpMqyYhU5Ce4TdBiVHqTGbcTfhRrZRcEsUZ9YLTyHaZGBQU1dAMhV31xveXJH9DrcA2",
  "key3": "31vuAZM7p1hR5mTvetebs3cdVeYdbn3CNHR3VfSANK2ktKLoimw1TXWJUNCX1q6hiJDv6BAB4pAc5Q2XbpSGPni6",
  "key4": "56QashX4vsiWZCHsPWqCYSkC3dTy7nvTn23rt6kSVP59Z4KFXMQH7FARNNVWN4R7gjr1Tn7Y74S6rs5di6g2tCYe",
  "key5": "5i3JQWi6gJDGmYNhTxXMNMGAo1HV1nBn76mp4eaqaZQVGa1Pk1ne4oX2tkkPVFAfbNi54Nz5ZqM6r5xYvZB9Wq2W",
  "key6": "kSMAFX1MuFZrnKFQT3dzzemwY5WM3jvTLe3uKkSG8bFQhM4s3Rj7juXkqmeYKXNL4mr2WSJ97zbfmk4J9Arr8pf",
  "key7": "ftfpAhtzRV4NYuR7Lw4YUg2dUtHd4aephqMMtmnCbA36xtpQEkRedjyDD7DaZaizc3NpguqJFTFNvyaodVdeNxX",
  "key8": "4XJLMxPgw7Z5rw2FwtbHmuNkyp67B548eqSHZAtsYhvuARiSH1WvDTbQheuKuL22HNr5W9hibepYx9vL7BhceL58",
  "key9": "4AhfYzVdH9DmXLZZ3P5qb9H2owzvX5K3oKJ4bHKsEgJnNYHy5buJZigX7dgnbzB58oWJ4Q4BVJeGoK6L2khdC2CH",
  "key10": "3Wnxo2cCchCNUgzBYn74oGStKWGcoMpPrTEToaxyYjCyx5mv3rNkwoRBtoV4pfjEfPDXUuzJXcUaLS7hdosTRoSm",
  "key11": "4k9arqD5SRDEMQgeR84cpQ74HAwvkrNZheYY1nm4VUHpq9AGLD6Hr4dwwJisuTChtkHjUqRW6him7x4qAxV95Z64",
  "key12": "Wzoasb156QW611voii17b6kJwm41gbr1k25BNJVkaUM1XQAKQZ82SiRprgWsu1iN3hqyp8gS8gEfQ9hK9CHQEyi",
  "key13": "4FiqMYQNNdG2uG2TALWPWFR9dXtohCNeEZtt3ukZKfAAtbpihQSzMXBsdCJYLc6nkGxb2SVBc9LRAEztSeBHaBFv",
  "key14": "3aFivHzrA5FPEeKrwAgbdCWVASHqML6MbNji76xN3ssvT6MVwstqmHadZw11N6wvGB8ZQyAhXh4AbHz4qd4Zn7R4",
  "key15": "55qW5sojgC6YFpPujxpWJ9kcE46ucBmcVH4gDSg6HUpKGeQQEjBG2ZiCJ6QRoTeZcYSfAmL6vw9tbFqoKw76knTX",
  "key16": "4KDW1sc28kQUWJ2xTFzjKFEP3PT2XLJcmzaFHTo4P9umRXhH1ceXptc4p3HnyhTnPgevJPmJCpJ9d933Ko89tk9T",
  "key17": "26X7LDx52VYJpgCDPUzyC1g8KzrZU36wvwTQDGzVVEyLmefjgZSNayZffdDzEwu6nxifvguJ6G2WvdUDQqbMgh65",
  "key18": "2hJ69rcKwbuxAxXu7afY5uSNRQAfW72YjCbiKqydsDSdBfwwsTngFgG3poqosnj8VBQGf3vroxcjiasRCdFuTpm",
  "key19": "46FHnbwffUupKEg6Wpw2wotw6cVY9LCJ71TAKHdNYRFgmgNY2dVpbnRSEiyaYDS8QZTSwYCBoTusdRakS95e1SMG",
  "key20": "5UQqG7sMYGC6zagxN4TNCtw2dVgVz7d7LcxipLGcaUiQcksQguLzf68TYgUasXuVXFRpkSPh5zxW58HbNr5WMW9b",
  "key21": "482bgSzajSDLGHQuQac5XCR58Pj3uT2QCxd1HqKkw9Uc63RZJXtQ38PPo6vGsVnMHg3A3PozaBuPiNcpnXdaKZNG",
  "key22": "5kvLTxXSNQt87pSb3ahctoNYWQxG2ypupAvq9s7Zgy14vdeAEKf5XHR7zuVmuFTyeMHCNqLyGunc4ytHW7kDgLud",
  "key23": "6ECR2kEVpQ4ieDg5UyTqirgfdW1dxqsJBJHyNGd9uEG1ZLFK9iqjif6hZGo4xm5i2zTDrrfv3FHRmwDLCiFkdBZ",
  "key24": "S4HnKew5zJmF93AyNSPKQhDcL1Y9TKFV4ESApVgFPV8RhonjiUBacpDLa8BcswkSEzSyiKjhw97vkcyGfe2ha5B",
  "key25": "3Fh21ZVLQEH45MbjodCKQCSJesQz2oZKfi6mJQqyGnR4s6syuvTn9iho8y7sRDk3niE5cUYgM9NZTRJ4azALyYsi",
  "key26": "2L21wNNgw1Hsuu29jrncgXuuviSjVdyJzzYhnfEf29SBGqh2L3VfWSvStLorm4dcY2eLwtWqSFYAWJhaUUkCD8pa",
  "key27": "6161DzhRHFmHTqxgLDSP1K4SGHvDSMSUuoo4UcVgCFaf7AQM6vc6zhtADKVPygvpFMCtisyfrQYQYV5QfHZ3JaHt",
  "key28": "5VLYe5ibbHjCtTWo9EzTf1rg3rxMAxEBAF9Wd1JVX1RmvwU4V9PgUZwkEQSfdM2nj6Kwfo7NQ6mT5oj7zq9DT49Z",
  "key29": "2ew5YfDepr2FwSnxLnS5NPVRPhTUiiWtAbSriSBdLKpuhZT5CThRd2YEFBfpuEwT6ZuRZ6HAKiVRtUFFAnpXeNUi",
  "key30": "651HkkEUvkhwJr94DDEfzmcVCR1gsm4XWDWbTPQqFLiSbnz9r7nQvnaEF61UEnUR7FEfdheb3NbMoQTH5va7aHmg",
  "key31": "gmygyWdpMR8h5kwmQLCTpaUW4fwUZD1WHaEhkUVCx2uGGBMncDxrLQ7Rjy6nhkJWjxpLQ5VqeV7sbb6jhwW8EZC",
  "key32": "goMzrWAHdtXYfNqhknM4GmAh8wXt5QgPZtEh8zna7Zsbu5icFSxNb9PNcBt9ArHYiLatn87F5LdUZ7oKgjtNoS7",
  "key33": "2AM8VecdBJ3mctdGrRAJMCvWbgNVyE72UpgrfDu6rQdpQMAUdwm6pk7JaujiTEgFGWJm2tB2NS1b8YiVdw1QsSDh",
  "key34": "3x6Cez6wQ8E5pVPZt8CtmHbsH28BtCpFAayU8n12KRMvvEhXoKr2wc4XhaUgU31r1sKW9ri9xZYKLfJ5u8UZEuSP",
  "key35": "3tUhtLL5kUG6UuiLGTaASiS1Tw9kbNFuqhmfkiCVshCraYiGGUw7qDSwm5eYr1XYyToTxbGPJxcknXxTTyNvHpVj",
  "key36": "2eMYcG9ZKGhMtr9TguehETVNdnkfKtJepviYs3zT2dC98wwNSQcWVPGfxjLEyYKCf6MXi9NfrhNBJTgVFPTAkGQj",
  "key37": "3dGJRgQvBTs4w4JCsbfiJHNpkvLvoYA5mLQEzaTnTUdRUNQcCvpxqeT8JBFtq2pTurfmdyYAKrbjftZGBCeR4JC3",
  "key38": "4Vx1KzLsQ7VWKKDG5L8USnKf1gSfs3GpwshaSNJANf81C96GfsjxwRiJ4aCa9b8z95G8Y8tbctxRf2R2ZBhKNSuH",
  "key39": "bmN4GBqyGiCT6J2QG9ND5qCNjvZwqXPLfF9AmfDVWtnTr4bsxNfdHHvsVfxnsaSdabppk8Mtpcykjj8JfvoMg8Z",
  "key40": "5SyfYY6EDtgu5UbzvCK2WWgjmfh5f3ghogTjVxMh2NTVZzBzhhzcfbgaskJsRh5DMEo9by6frFBntWPn46Lq2mcn",
  "key41": "639wdBBkWVTjv8KvTimb7QVinntBkknT4avng6whfJd6TGne9rhRu7QxjoR85cepkWkKi16rnm9CEzdj5pqayGfT",
  "key42": "5SghVCu7K2F2tMQdMT9TtmhmuJUNRj8WdkUBz5eVRLQwChDNuDy5eL8y14XTb3rdxiSSgsXhnRxytYUup1hHUbGi",
  "key43": "3jewHtihPRQXaP2HjQRQncfDuLYkGaicYCX8v7yqFL7e2YPNG8UFWfv528njHeJsbCcx7seBETH4VqfMXBzzRvL3",
  "key44": "5njwHgX9d9JJ2UhBqFSetM47ZsPHHg5mByupGvX2b5gf4j77EixMCBtUiAikC4wUNaZsPZmwuhGTWAU8yt7mTG9v",
  "key45": "2tfz8hV3QBsVHTtsiXqT3ETuqPkNa32gchMNLnBwqfqweLNg3e6szBWH3mKEcTZ3wqHnScnJXr2D8gCrCcGdRqGf",
  "key46": "4YsU32fXRzZXZkMJvtkzB2vNEDaPXpzQkb8e2pZmRoa1RzB5hRwZHNrB1BEBMCLm7gELKo4XgDbtK6dEWCA4mAik",
  "key47": "5KozX2HedPadcaMe348jxcPZMjVoCMykwaMizhHiEkFDPoJsdndeoqGYEZucTojMb3ZPe26KWPeNqBciNryzTxb8",
  "key48": "5vTUqDT78h11AotfXnesvfU1E5AEYUCcr3ed2AHiLmJ2DkzxFHVxsrGkcfAzg3Zk8iri5i3HhLFVgM9JGGUJNqCB",
  "key49": "3J5AtPtDvujSaWTak7zL7VjwQrebMfbiuWYxyxfDAzb8gXTwo6Q27xTWE1tPg7Mxy9gh3dabzbez9ird9wPfaVyr"
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
