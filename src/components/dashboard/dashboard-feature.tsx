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
    "4WHk5Aoud9BJuGiegmLRMha9CRCHF6UKgMJ3wq8EzuiTLqmE6nxUVXzCRN5CoUqWg1ktDaLQtFxhqXwq6uTD6EaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hh9gGi43dn2cJ4uYhh9Nk1QywPNrcqRFXFq7UC9ZGLruuRqo1Ww58RmdpEcKd6ooBdXfj1W67fnaLJ1YdeSxVEc",
  "key1": "wkyCDDZYZ25MgN6uKK2QofzcvpRbC5usHB5MfUEh7Rp51xjza1XMfnLUStYbviMsDt5JbVPw1bKBTLetHwCZBda",
  "key2": "4KvZFWTdt1jfoAbdoQLGVuvyyoivZFU6yER18sGiMKC8k8s8atCA8iniXTWw6DS8Kvp7oeHtKVZPmMNDg9fa1vEu",
  "key3": "5kgZvfc63fHMNScYAtiSGPgyjH4zT8NP4hUjzXLSuRwst1y2zM89jZhjdXov9DpuUwieR7Pw1EztJ2pmKcrEoBLW",
  "key4": "2ZuuMyYT5NDDUj6JJdfVkRfSmUnoQQHpqw39HSkkz5K5Qk5Yg9AZpVmRZpQYWQ2PYRjRNzrdQhjxSACCBuezqGHc",
  "key5": "4z7KBgeF9xMNUwP9yCU7vhRXikL667qYxMmFyX3Ghy9VqaqmJBsSMSmHWSFNgvqpRS8LYYngYuVsZDEQqbTdR6Jy",
  "key6": "3BjPpWcZZJfPUJ9bcMuCTyPxFMMUii3KjN57ihkS4nNNVfUxXqq97C6P6DsjdFk1YMMyYWJP8gdHLnd1BrQA8Zoe",
  "key7": "3EG3YrxAMnGJ65RpCT9RRLRVz6eW89tcKQzw5JEbGc3eu4qQxXveL7FtB3FtLv5URAKYa6uDBFWNsza7UyjjyaqR",
  "key8": "29A2ZU7p2Ny4KE4aUiTESSKhx4tkFMp7jGRYe9ZUhkasqt2sd7DAG1u2RF4SFYvaUHGxXeayYqtMzZCf46idgPXt",
  "key9": "NSp2ZyzSnEVqtoMRjt8QDeuNfQn1rbHFmVUq1QF46njRzyrXywkcZcad9NqwHSHDQAA2y3bebSBWDusTYwX8zz7",
  "key10": "5PErVrfe8oTYcWe97unz5bhfiYimBmtJsiPrMMDVKJZUsfTTepqccFLJkjCTdxXhFQ5Xut2PSCxxubJTSBRvCoEy",
  "key11": "4ZLEyXXSDXMDL7eBiZmjcUarf8to5JzjgoSoYCC2xgUWy4FEy3U7H7bWarPwx6GJc4mPqF1gKungqqVkgzNqszCy",
  "key12": "r89Naw4ss61pdCqcz9pToEB5qZZX8qqExWcTVTNbkaBqGn65FmvG2fmBwGtNLxqrm87T3yRJiLuwMu5BSNER8XA",
  "key13": "4J5iyn7hYrMZG5f1SYmHYCDrtXHN5LiW4dh2NZaZArJtUmPYNJ2CNmwyu7YUNJ7XqfoxJiBFF92Q6FQ8hjobcTh7",
  "key14": "4FwVJf8VwsSjqgVRnU1VBz7BZQqB8LPXQoXbdR65kq6tLLzQ1xjnWM6oBgNEcJgh3W7vTX948u8ha1sm3BDY8Bah",
  "key15": "3tdK9Mb9jjgRYprjyxKpzuhbLZBRpCj7etst9r2LU8Cv5fvtMy3n3KhgPfh89eTC8W3z4TGbPEHXuecQs1H7oVFe",
  "key16": "34jFMX9U23cre5ZuzpnnvZhbtAGGncco8LNJoHvYkuJBixQSVJVHbF7eEsGrLzKKb9FiRxaKrR7GXqjAtUpRBBnh",
  "key17": "4jhDmsBdTcmQeL1DC4U1eikcfmTu5n9osCk6jV5AN9Ek3fgzbRcCz3Hvhhk2YPSmPW5jTYHdyEr5MyzWfmYrmyeg",
  "key18": "MDML2Su1SxKGSPSLQ3eiVxF4aAZgN3ucWi9U3XvZVNEMadskpUt24CuvvH1MyvZwD4vcb7PgCdSr2U1h1hQXV3A",
  "key19": "45B4We67rwzAu8GMtayjcYaogguaQoHzqLHvnU6DtU6zPJ3nQxdCFh1mcDQMShiNSnyUYV39Fwda8hAmbubbqoTh",
  "key20": "5jvDM2KUGzhj6z75SP2CoaXtM2hEWChkQdb6LMeyXLH9HQwovMeuac7btPh1tzhGESxBCtmXviikzZbR43QQLNJe",
  "key21": "3yVH6WSkhVBu5Temo7BnfBFCrnNefJ41WD56QZcysmSTEdCYNsczUgYF9wNHVPsmefeBsgPm45NrFeqhVrcehFeU",
  "key22": "67jP1i8nyeTNuS3t9FzSiu7H2shs6bW6JYARwakoHKJWrhZWp8q74k56E6BmF3HSAq5YNepN6PUoCtQ2bBu3xo8B",
  "key23": "bvj2daPYwTgbHMCB9FNeZaurnQ7PJPJQYLHeVnr69cSNrAPmViCr3ZuugSncL1f5XrnZW1ENASuosYwBTy3E4pS",
  "key24": "3Kb7d3a5DQMzKwnNbQKCjrJFQjjgE53kv66NYgvbyY2jGr9GQYNra7nQNRYwr3C1W1x8AFeBurGRdm8cgpyLApoy",
  "key25": "5rgNnu3WY8xyUn9N17XqyVhQKi8VFHmgyPuqM8cdjTkqqTtVRSJwZ5mioecTbPwnYBWUWWr3P7pny5nMcoWKrnZA",
  "key26": "3EfeoFFWNwhrngFCFuj9KLro3L8YzdKbz5yLW2m1mRfR5mLBcubaYKvwNboGLq5BeLZH16jY7L8LYBJd7gZHdv11",
  "key27": "3yXSNcsDUD6VvTueSZ4madpQr2vit33M11qQDsrjF83jkq2fy9tb7eWJkLgERVKMQE4qFAufkQn4jw7zQncxzUgS",
  "key28": "6vd7Y7PmGquQRPJWTuz551scGxRozD37qTf8xtWSfkb7FcqECTt7CWrJzDLs3oAMm4Ezuq8eJj86hPt8Aymo9oA",
  "key29": "3oGcaoeZU9cUcBsxzq3D5bv2F4VeppfpuFhoFvLfLzPB2rGHfMoeBWJxWdtEHfHf8utKpYqF3DAf2odiLjQFcQgZ",
  "key30": "3VNNJdxDMnR4aYSUxv8TGRiZwrfXHnBcp2R3AaMPU8Xg829ZJ3DpWCBUB8LHSYs7ANt4R3g66zVMr6DF1DocXo7g",
  "key31": "5FmYEvssaQ78hs13H5JPjP92712hYL9cH3BqP2MRyDNKoPp68k1htuQVxJ84e3k18d2WbdNqbHyn4B3rtuQRiTee",
  "key32": "3fLD1SZsM5XsxegkX6nXiDEuZjFDNVjEg6di8VfAQnFLXAkTEXcL9Xy5Vscf6ZpD4z5JN5SapY86mpkhLTt9GPCq",
  "key33": "3khmK6cA3gZXburZhzBBy2nsTLDDaBSMuoMSZrSvkkrYCDvyeKrNRuiXDb6YS1p7GDuxGgfA1hEYNtukDRWAaxLn",
  "key34": "5Kp5MVz4Lat2VEMevHT543mnd1uUnEiSHLFwrzvaDo4MjC22JmPJCs1eiZbbbYMVbxh2MEW4NgLsSMG67Ytaw31k",
  "key35": "4zjLNWa3fi4NBbq9PDHKnqdaRCDXuyJuUJzMno2FxWNXjbwMJAWB2xERj33VUd4uZCEMVZNrFmakK6KMqUNA5skQ",
  "key36": "5Wc7gjwRVrzofsRjQnAX8DjwYkoHSXisGtg6VNKR7JQgAdXHyoGRYeiYtR2ZgUx1Sx8LbQ8dgQtw731zRMf9P1hf",
  "key37": "2c8J69h27NdvpVv7Vit7EaR89ePDkpJ4dgPSftXT5RDVPtTyoEj8vZ4UeX2xd2NfMdRGrQuogLxGB8sRc2gkbiN4",
  "key38": "4vhwndLwABYcmAvkbSoCCWqTzMC8ogZwKxouWSKrGHBzjn5c2SPvWg9fx2qhd461FB9jhVDfZY1gR8eikAmZZtFq",
  "key39": "5ugU2GacNtyWooUn3bV3yzktfumqYfvZuNVtVrNG1T4SCkZ1ECRx3RYUexQDcVvKM71XQHYoD7jxr8iwtD8BVf31",
  "key40": "hyYgYbUn1Ue1JSVRLaMJnsdpeXTBUEmPaigSjVPCGrAQBTYQtHCBGdsK7FSEHTAPgWhiDN2psFEyf5EDT4A42B7",
  "key41": "TDEYxKtuoRdK11zhXeSdEXSYkfu1KzQGahPKfLDEkqQGefkRjMbB3fHCHGLfM5FqCKsUxeYs478CXY1xHoBQmUd",
  "key42": "fnFWPBMRV4LTK2m7cozmr2Ucr4L7vx7QGdNmk4RjNAX814f9QnnNgF6bnsgtwzz3RLwQa7PPCqPYTkjQT3yVrN3",
  "key43": "rzZgQrbAPhzQ9GX1eLVfvMnK6V7wSeugqcKLdWnhb4T5XjkofBAsW97ibEEVGz136mMvtF8yonbUkjZXPJ6E4QC",
  "key44": "32WxhQizgciwvfn9nkx3gHfWFNVj5wc22DnYNBABXJaBiuAoVdNrjLgZkuE3Gz9WB1UqVNqVn4Mra6NDH8ew2CW1",
  "key45": "MZBQChQZ4mS2NTSWk3bvQHoi6sPLWppckn1wgKTNSXd8TgwUNbB3FjJJHHiwmjQYeAJtvskJA9EjYDjfEkhMPuE",
  "key46": "3U67cUku4pfGAfWjgwEpH75Z4Q1uCrXP7kgdivAhSJbTE1JdcmvNB7Fky7raCC1MCzsve69byRsP6kdwTA7DFGN3",
  "key47": "34J2qAEVfHar6vTqFUKUuEXqEXw5nkWPnMJVV8FVLCwzAkgF7etXVwCK7PdJJ3nxwTSGKqZGY9pvVAN1rxKKtnRC",
  "key48": "m7GpK1QEdqNR95YzupN1ap3NFGr7yRqHRzRBdDynDHF2FysCDvoLU6iAgLEMMm2xqVfzVzPPknxVD6QFSLZwdyn",
  "key49": "S2yDKwAeG55Lje5TpepAGrAazJoM4YjY1QW1YyrJF5kncmMHhykDkcpvGFnTPT6wAaUGatZdMiAy6nVigoSRKCd"
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
