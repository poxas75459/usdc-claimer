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
    "2jB6XFtALAUDeiL2QGxC1xEA8HRyJ9gvCrUqRgwBZ4Y6bfMwVC3mBAcN3J1usPEJwzAVjau68Es5g61sf1RYZRPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfMXZ169nm4EbZgK1txCdPn6Ab7kAGrN84KmbszvFs4GYXE6pTbv7iTYgZZdFuF83EqXfok9toMjpP2zSh1ZSPN",
  "key1": "2yUeArK1ECusMFCoESNPUjVz2Y3oMBthY9wLPekFjPshB1XjasxFQBTnKYKpdjyMCuqjEt9GUxmjYodxGE7EUCX4",
  "key2": "4dkZjjt8Rbr3RBvkpLDMuXM9oXP3cNzuzsFHwF7uBbVuanAaYeZinsAyr2RW1bGSHe2dWa2Y1RxBY2ydVAPBWrmg",
  "key3": "5Hw2AgMZBBNtjQvCniZqik7ixGownDyrAgA5NAq6t4VXcHxbyztW1L4mTKrMo5scMSGAbnPt9oCCtQbS8mp3PU9t",
  "key4": "2M9Sjwj8kDr9c3hsHsZeQtSXCR2cgQtYDm1FfYU46eGhCPYHaHiE4cy8usKU2B2C3ZnPogTCV4Pk4sUFRdYCsydx",
  "key5": "3V5BwHDb5jg2gUTpvDJNgiN2cQVjSuRSctABvcvYh8W3TSmdRwpaqB39SU5pQwNh7m9xnbQFThE4MTc1M2vvD7te",
  "key6": "3wXjHpJoZWfqEcRpXrpvS6jjdPM2BqxjGFHYinqf7RN2eCUMjH6z4Z5LUkXVscaLBYZ4LGJuzcNP5WcEp88Qkut1",
  "key7": "2JSSLSXhLK3BNGVo4mqGfAX53DodZNmGG411XRMXcvKw3dBvjxP6KccE3sm1XbpVLYBo4wrQEpeeMCTFWWenTKDL",
  "key8": "39hL43iJkYV8gB9jSZUkM3DG3NYuHkc58EVp8kwdMxnmCnyaKcBThSVSTtC7ShdwbaNHqWDbdv6ikLo9F5TkiAN8",
  "key9": "5xFTmhE3JJZrtpKLDcGpUe7Mp7AS4G7U34UgUN5Ve3HL25TvZsXFyaHvfBg6sAtwuZAjxMVtkitTX7CDb5o5msH1",
  "key10": "3SZrqEdkyVzBouBS5vM4pyw9MddcFAstX7cnNfsEMQyD6mCwSPSaWGhrS4pxQWnmwHEUyNaEGVHQdA92tQDr9bXJ",
  "key11": "4Mo3sQWmDWFcCpMroFTd4fzt7CkpWDomKwDq2EuFhDRBqNdKCihjzas77qVnN9sfUDdFn5u6rmHJ2zu7aqN1Fpyp",
  "key12": "h3JiQWFU5KUzaFDDyFgtNgzmSTEi8ko5KXz2Cy4LjzWPF2zS63vKRCUC7eUP7Vig26JS7QpiXda6AxGuWEfnfxu",
  "key13": "4Sxw9v4VF5iLPr6jcfZGq8eJPW6P13BxdrZ4TNvdtpWHovi2CTHSQCTBqqprn24FoARfQbXyhzk9z6os87WF9aRi",
  "key14": "3WJJ3sHjUYow7bGvCAqoGvqmrHuJ9qq6nhtMcFu7StC6FmCPn6ou6yknvCoFzw9xCCLgJTa7T3RL7zpVvQCYTbSF",
  "key15": "4yHiHnXew6oNRYckP6ve8CATsmE7kUnqzLFqhkjYBK4eqD6f4DQMGv4AfdEaWFDVkWp7JzPe7zagTnNJcDi3WZYw",
  "key16": "3UtxYmpVwdhDCzH3xgt9N2exhLJwNqorXwpvfJLRhgi8Rj25WgmfAFLU3RckVbwcAWg2UQBtCM1QzybJqwezkB1A",
  "key17": "2ScgwmGJ8jM4hiJi96uSAR6gHJaMfaJxSbjfvQfuE3o11q9KjbyWHUahSbPJNUjMKZtbTKbDH2oCNJ46KCW754o5",
  "key18": "5u16teSJikZP3qSRMaGpLax3zC4UbD9wgkBnwW5zPJ75uonZNaNaGcMkNrr3G42qidQf7YchCWvEhAsLhekdeJYw",
  "key19": "awxU5carWVcbDTTb3MPCdjqZ9NEHmJQQCgGruKzDJ3SDJu93BkV3EkRCRSTDK7XQW1FdDRtPDFyGoRtp72pTdt3",
  "key20": "4shZmzSa7cL5rQSvfAq77FHDnLbwES4pvx45ZMfh5yVzJFDo4RGCakdogo5KSzQYYwpuUmWm4NcmkiJvHGoRKcvz",
  "key21": "5hCvsgX8ktYAtVQRQ4VZhkRp8xJziZwLXvWziEJWrACaFUnaXVBDzdoNjU3G8mKTHG7T7eLXMvtcrNQGX4pBhru9",
  "key22": "KbLWcR8Vp1JvQrumkaLq71HeDmyiGWXiKmqUct2ZpSAqpogxps3poyLnsMaEiAHz4cMa5qDkGi4xY4ATjihscLc",
  "key23": "4vNmE2fhmH98kvHrwVB6oUMdYr6BmSfGzkhrYkutmChtHoHNhXmTjxR3PnHeNbyjNKgvrNgSu58z384V8cFndNvb",
  "key24": "227oSBEwYE4bAShgWu78pJ9TVvcLwA7LJCgQDZzdCSwAqsPHZY7UwuBUNuu6KTqpumda4ixiKGdTgEtiostbA4dP",
  "key25": "2h35ArCATtLHEWRvYGHkEoCNy23UuorDS9uFzCsgFgUchxH4GqGPqPhLBQXBdk5CbvEm5B5pwo9jXdHhdgoD3pUW",
  "key26": "4o6iaCuYL3M34zoRXiQFVs2f7DyNgr52wuoAVtBpR43gGE1PGFgbffcBVGxUEgiFDVk3WUXN88QujHgWRThjL6M6",
  "key27": "2AfN88g8RPv1TP5gvner6tisdexwCLo8dtp5MmFtk15QLTAV1XcvC58A7WsPLsewpDQpqqMD1MyW6ucaBW2Tq7fz",
  "key28": "4wzxw1oXKVusGfPzsem5eQxqL5SZ7MiDJeez6G5DHhVNGQ4Riexo6fYCpU9CWxDCReqddgM3hD9THJQeHBpouT9D",
  "key29": "omJSGJfZ6kVWqY2Vz62phxV5JwAN8cqpwR5xCRHStvUDHk7jRAhwRg8NKxgS3u6GVSGuy4rDQ8hFbqFa5TQXvFX",
  "key30": "5tanyRQF5upLZ5nTpZNi4MMxYhzFfPhdGFQRiLX3Tm4Rjb98kuwbwApo6Cb2uNQ9hN5UPEPcDreYCWaSqKwPqNXq"
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
