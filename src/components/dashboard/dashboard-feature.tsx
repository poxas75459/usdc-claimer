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
    "3ujKAB5bCWzLD8jv7bq9LtjDRu5sBwbdg8BxZoEgWZaN3aJKRxzbfrRdE3R39ZmWW2m7KGSGwxmjCaZ4t862Zxze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3biu13MMeVXKecVPuc9UBcUrGRi8v1ngXWVyTFNHRMK3f4RtXbZ6LgiFtCzQR8QAPEsvh2gsPbp1NKMUk1nP8TiQ",
  "key1": "qrSHk42fu1fCk2pbta3uC8AB44scon1we7a5F6GJjCtZQdqDAvPyscE6y3TfjpNJh4paEgm7rp8jRgkVK4kMv78",
  "key2": "3UjLD6b3tRRLfXNBxNMevCwtSnWcmhrpJiVMNqFgBKg7Yes9SA5XgNomt3j7pNo6G9iz5yuVU5iKoE86g5AsFqGr",
  "key3": "4Yf1qEjNHGbMz4Kzdek3DmEzoVtrtNYcHv6Hd45jFn8mtYa5w4nUhQJbqD1q2YC5P3vE5a7oqjDWHiLThPaXF8BS",
  "key4": "2mBFghQrQyBcKrRKPtXUBtwLvysNKrdxWUEcfiLfMS3W8C5Sy2hv78LZYYigEDjbRxsVg1RfuxN6vFYoTuETaHzA",
  "key5": "ouA3G2tt9BKyRYjk9uEcTm7SU13RZqq96hd8Ys8ms5naWhrTm6oSA6QCodWXVuFLZJujp8NV2dWS758DBaxjLS7",
  "key6": "2YrRZW2F7rJn5TZ74XyRUXJdVE3Uytkb99fjSpyVc5qxAkchspG2MR82hDJjZsfgnT8UGADJyzxwTSDSW8B7xf2S",
  "key7": "4gRgdDiNxyDjqn8JiWoWwT9WFuH3Um7r1dXz6hWBSbwWHwqmFrkk4r98TWEcm66vpLNSVzAJPmAaajLYvDrswcdB",
  "key8": "4V2cWveRyobQgXa7pitMfZyU8sf22tQTQWEuuzaXy4xhBLBTXRLjA4zh3GQiuM2XH1XDTUURvWPCv9Z3V7Y2bz4T",
  "key9": "3rY4temzmg3cSi7FhvyNmyqEVMmjDAbK1Mu5yD3Sd17USRyMj5Rsdybspz9fpZ6mPPZKvwshHYwunoE4CHZgjPnT",
  "key10": "4BEDyJUz5ER1k6LVa1wnc1h7YZorRXfcLs7BiA2QUHq9aLv11ugSJgxPdmwFSE4rb4GRYjshH7WqQqa97Jtz5Au8",
  "key11": "4DGLK2XgUgtCKvRkPEw4nrx2mmdcU7oidnWhMEPFg4UT3hdAGGo3NUYd6GNyvsLb1gymJHmq14HrEBoDntEn6Q7Y",
  "key12": "5vYQ4wAg2EKPusNrnWYgZZqUs48u3ARErCGzu4c8dvjyj8MfDXh8a4p8RFXy4TtuW5nDakbZckvS2KYWy9DGwXiL",
  "key13": "3fn9DrNQw7VSYRkR6Xxi7LmwGoxY3qDzV6bRGCLmyYsta7kqSNC6M3a4D5pAReUVfwPwv4KPWGUuDzGdwcfdbvhY",
  "key14": "4a93MFwVD571dEohveGp6SS4u8HdCCqLDirCP5xppUGMCDZLEB5nM8TL1ewpe8rjy3zZdcX8zuNf8sMKNJVPsUkV",
  "key15": "2pnZQLVS65neQ6eU6mQPTSvDFnDdng5tFahbKPtozY8C7S1oMcK5SRtCWEq777W1NXC5WLAkDmmQhKQoWUnC6BnL",
  "key16": "2mmJYSxGPSDi7cbEPJz4Vuk4Crf3r7LfStSBRbUTMUWuibmJd7a7S87JXLy5swhMnLZHfatyMGzjrmyuZ8sEKxDK",
  "key17": "2FrFJ5mSkcPm27VXzyZudypWVd7EZnZux7Xmwk3ybWoyNw4QNCxDrqDQBYndXCmWqGQXj1tCKy4Tp1Bx1BT1nfEy",
  "key18": "62BW4m5J7EHC5H582ej8Gctrz6cXz4wEVMxZkMemMUF3Pbaa4qzPyxQvgcQxfkbbgT6zPTvAoRxmE4CaUmtLoSNX",
  "key19": "5CxjEyVPNGaxy9w7rNj66v8rSazpp3QfVUqmWg2Sb8eRdJrWv5tfDCnCD4gbuknfUdbqobLuCq26D5tu7SZdsdFK",
  "key20": "3QnCof8ihQrrnn2VfPfT5EqwTkLhRNfB3Ci4BNv4g68MBpzWzNbjcoqE1hUNou3wsKKNfBjxnN9dJm8PoUz6baW3",
  "key21": "3Eo62eotrfeZDKWME6zVCNyUwev8Ew8fs4Sq8PaQTwWi3pk77rCERSgyomxwGjfYzZA3TMycZJkexvohPgvijx2X",
  "key22": "5c7PzozLx9gALoywRgvXGpAjAPBCg6R442Ss5Rnj2gmYcoztPisYpL4VoK9nYY1R1noXBPmdYQRZWExPZGgM81mG",
  "key23": "2yShdQmGJ39jGw9NbEXML2GPsRmeuphZPj8C7CtP7GfKUMWBsoV5FULzW4AEsU7L6v2gNhbJ5dy9qmWn9FPevGyS",
  "key24": "23nfiQZkVQxo9U9bhjELQ8Bmhd4aSiW3CW29guhV1fo9eHUgPLDRTGcanFibdLsji8AgEtZZGTdqc5AdhbvnaznB",
  "key25": "4C5dHBMjuxVgVsBN3S3JtNGDNRZP3PtkhWyUXnayZph5TFeqN2t4MNojLmPnbbB4TyE6xRMXgL6YwKF3vnGG3syU",
  "key26": "56amWaV6rYRJEQ4qqQFT3b9MA6Hco1DQPyVLTnn9n2ubPp41VuH9kyevCETgNW1tcqdmWFU6R72L182BJEVqKW1K",
  "key27": "3S1ZNiKqXPjByBoMGSgjygBjsnfNEHZm7uRS1pjaqJLvUvpJEVEhnfDh7VXjNWrTUsiqQgoAabpsQ6fNwYti8L3K",
  "key28": "4JQ7F9awzSbAaueGa6u2scT4ds4HVqvVJRwHaxVP7mmAAsdRMDURz16tvDtz4uejjjt9qYb2WutNzmmsiEzWUndU",
  "key29": "48WGRhbj8dDmqHJHzN3Vww9bgsuV13S3qkFxkZ1GR1Hhi8Z4L7bkaBRgEA1L76YoTJSaTL49QZeugndgPYjVDVmM",
  "key30": "2MQQ1on2SEVCS3G7sokwwVbcYvEHFzeCidAYkQ2DvdqJBY8TWLN8c84HFhsvpgmaacypkDCtRSJEu7NnriNFAbbk",
  "key31": "2LabrfLn6HXY7ofKArgtFiHLRkxND3ERAgqay6RXu6bGibsnQ65rpBxyD4hp8wqg4P9thmNhJrCmvPtK9qp16yry",
  "key32": "43H9nNjm3N669vL8GkAEiRN5aC7eQ9ZhgRtpNVrpBc4wRgDeqT4b7eg5qSwUYq6x4HJ5DG8gaxrFDeHUZYjLRY7z",
  "key33": "2JeWPseqnSXFJpJ4m9DaapS8maY7iQENLjsFB3kwYDBk5TAC9iBjhJMF1egTPiLYobNA9FD7exsZaVGkipveA63R",
  "key34": "2L9tEdSNrWhefGVFZuRWcQ6btyAXjGfziSy6NESPnJnfRjJoxNSe1NDBfWjyFWhoats3xseqB94XDQEMDqqqSDN9",
  "key35": "5HRc8bkpwiWPeHXXTiYE1MEJ2XQBysKpGEMjX9VJwgscYVJwew9mbJvvQQV2YV4XR1Um447PxBLpcPNj1DXceGd5",
  "key36": "SxgbobtsaswN6wxePuPoHtJFpBToBDw5CFbz7tnhWS5nJTpZkeugzi83CRqReb7AKQ3kUKXvDgQUoNXF6kb3kN5",
  "key37": "5ufKce8R9iHjywpvNRzLhKBy5iYv1mHRaZkDqahg4toYYfvX2E1UtXEoU75kGLCu9puSxA7cxuvatXAubYL51H8E",
  "key38": "sawRL8mxJt72ujcsfSTfUu2C7PGoGzj2t9yfVHLErdod9iUJhJ1wBaPSbjitoFRBXpntVDoCUjcRyru7E9q2xmr"
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
