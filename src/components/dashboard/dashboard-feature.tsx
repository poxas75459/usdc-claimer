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
    "4g2xXRPjRXSLzaMVeAMfLxy8zWDyqf29JQyjzC3QdhxH8N696cijFdVAxWpCSx4VLrNsJo4NpQE7NNLhxHkz8qLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhuNVvBsNhVS7tBHW4tzcHb3DxS6zXPdZUiwNzPVMKVLX4czavYbPXFbMNuZWR1cihtRWowNr84Sq2o53M1aZyP",
  "key1": "5CPpHAuTzQqu3HjmKFd5hZ46D2potgnigSo3w7n3wkPfFfyZT5vJMb9kaRat9QhtfcXY9SsoPdFNA6rTxK9nytsh",
  "key2": "KSkmxYsXEzdCYHXQRPWtoBYxAsEqY2sy7mgUaeHXaiMSGcDTSFuTihgyWXCxV669uJupeFqepcCjSQnkKb3bGGk",
  "key3": "2y24powBc6skupZFxjTkNVma8upSMUkKjf8NBbcZtVueREtYAw69s9GfVHmPWXhPRNpppnYqFmtL7dxYmuNz1SWy",
  "key4": "259Kaams6KKj5waau6A9YDAM2DpP1Ftu4un2up2SgkLDUFTSCMPBQvPdPVHS9Qan8UggKNppsr6LcMpiQSUoRfUQ",
  "key5": "4rBeQZKSDeE7GswbYvJ3wQ6jBDrcPCd5AGRqsDekEFpeseP1AhVEwsN66HTUDRcRddhDqaSmnQB12V7W4yEVS451",
  "key6": "A4jT5GxVxYEyHouj356JPZ5U1yn4ucV4aEeRbFJXLK6VYLuRFJFDoagGZSymx7DV7GUyM2teX3Y9TJZdZHmGxSE",
  "key7": "3JvWu4cvW5k8zPvqjPDQrTctRYqfU1jp1uNCx4sM4VaiDv4xfcANJSMRUNx4GeXdJe38rMt55Az5ZR8nfehpktJ9",
  "key8": "vHGMrVFoMeFw3JQiANKCUU1oDp5Us9mVhoXwURgAxPp57M7oerUWfnZREUHSz73HTeXf1ZfUdcwLzE58Se81zCG",
  "key9": "5QmwGYhbrKt3vT5c82W9EtPpjgiGa3CEm1H4dgKkVgg77gJvyBNNJfBDhGjzharE9iQtx2G59TSvYtgtdecXY9yS",
  "key10": "35rjN7NktDmgYuJUkCj1TWPJjjAUT2wANeBBUSGgq1BKum988zE9pHju5Q3iKsudcRdw2U7knqjrR2f55wFELgd4",
  "key11": "4AALFrBg3ZyWK5Yosh9hxXQE6Woks1AqMF7u4hrFkyWcmTrfpqpdjWRxf1nxnJZvfQayzhd9Qvrx9Wt1qES7sbsX",
  "key12": "TmoCkkhGD57xvFPhqV92iuhD18D8RhHGz6kr4jsHahLUQywJ2bpxenwQaUVeF4tj7UPbE7Vu9DYCfoGaWbspBau",
  "key13": "5RdfGvKh68sxCGmvPLV8qddvNZ4yjVu4erusJwPmTCdaUm2CJxL5YoKggmGBBuWwgEY7dsyMk5Zpdhxz3N1rDjsT",
  "key14": "5To3nngvzjfqxQj9LThQc8Z5ffrDbcnakzV4o4V8KzhEvMRWKJMNtDEomftVNMwNfEtqXDvaPTuAeXtJTzK2qfqS",
  "key15": "tmCtBs5KUEi9LWy5j8CBhVZwdYH5M5qSPTCozXcrpJGiVKZwMDJLKemV5UPcdyHK5Q59WWmtKGE2ZHxqXqmaTpL",
  "key16": "2G4svmHT3ZtafGGFGdBN9eyTzJ3ZGinafatRmiuZuSU27FS9m8bNxoDtC6JCuHZEZp2k6nHdvmarkqDqEq2CFrdL",
  "key17": "5MBS3jca3SA5fdakEjT1fLNqZ3FXx3U4tHG9nyqCHa13tYDTSBsXSV77C7bGV1FNZ2QRNdCSEFuoJvHytNyDtMxm",
  "key18": "5atwwY4uRTQZep6YtGn4EpQZZptdFqP7ZwuRQN5giF3qTRxLF9Jz8G88DMQcSAGuG7524DmgfHGBJyX4Hpu8fkJk",
  "key19": "5ymAKjukry5STXgGY9dN3nEfJcCc7wjBhuuZeEJTqZtxLpjqKnzgFoLXKB3fwC3kpAKgNj696ypmRRcSgoRL7E5h",
  "key20": "56PHHuQ3Gb7XeYs11kYkbtY69Qv1T2GSvLrP4XsPY8jjFPiqfssYt91WDFHtZLv7i18jmps6BBb2LrtDEt4fXV4d",
  "key21": "477vZw1XnKVwN33DuG9kuNUVK77qtpFsrtLWgixJEh4TCgKVFRzsVb9F8UaLA8o4DG2ehC7hYphxbBQA9LZUKsGA",
  "key22": "2acApB7P2Vc2h7xkywChpNuVMBH972YfFL78KGAGiJ6k1YqC7knxNHQEabng1q4JmZG44RNcVcHfbf2ETyYjZ77u",
  "key23": "7FA1wSXMGsHVhhfKFz1iDtzrXwEs5XsYzANE76dB15dx63SsKpiQEYUBRPyWrrVnVrfVbW6My6F38Y3oZbhL3BZ",
  "key24": "5PmPBMP1PPBB4jDS3P2Dn5EW95gqniWweQRPwWohwHtptX9ed19tNirvV45YbGqaHkXTmjboJpjfJriNx6Cmfgn9",
  "key25": "249BxqTw6pifLsbmNFyV11dBe96MzSmzXGjhsbMcZNPVF13eynpgp46xoq3qgp29u15KftmGiRcePJjTsx54rNiN",
  "key26": "4o6pxDzvqgibq8FJ279dCk1srs7w9n41hzKLpLdRRdKtZmedhzqyK7vTGuHngtFa6fN7N5XvDM4UXwCuTovC6uoz",
  "key27": "Tzbj92eEyT5hUV7SRVZ4eswq47wunvzhH5PCu1aFZhDRqmokQrSm28uK1sK2diXSeYx434aCDgNsatSzCgWL8Qc",
  "key28": "3j7T29aLGuq2S1a9xDb7khg6Jx1gE7ovXwK5Vtij7U5oWMbmQf2pwKqDoTisyVo9wEwuanYKuMGkkaVaATvBr7SP",
  "key29": "bWtVNRLqbV71pqcyLCXKLcTf8oqXsLuXUfQ56SCcQQTjwuCcXVswTR7khqQmrMWZhAPh3FoQszV6f9gpXEj85R2",
  "key30": "6529mNyWr7fmY6AZGFyFRJvBAjHDEjVXBb5N13emSfaCr63jwHxCB2GPovvo5xusg5yLF4rknrspKhF9uwNq9ZDH",
  "key31": "2pBgKogYRoGSK4LPZ8KUs5Fi6a7DkZMLhHQq1zyHL7gqJ5viwoLSZ1YQpJUnkhs2eTqKsMz85j7zagQ8VnaPn48L",
  "key32": "2kFWGkpTsRABLVMZj3BaUa885zMpTdzaKQzvXkYQhmTTPb5MANebvD9FNKDFzKExfxfxqucjQ4N4NnQuMvt7T6Rk",
  "key33": "3RRoK4XVyNLBv4eYs8ZeRcQguxQF6WjeZFJeBc3fm1QJ3y7tjGFUrUDHiCzUoingfUfGE9YevfpRFvT249btz24a",
  "key34": "4XLbbeqwTqEPqbtFkWum5xyUwqAY92YQQZtxwLgKu6Hd16DDj7jauBqLFjbmi2YtGp4wJ3FxeypnwLJjRVHyqhDC",
  "key35": "5r93qYWFA4qQ7iPi8DYcLGYMa86wCA5ZfxTxrGPncwk7GQ9B26r1Yq6oTGPzE7a6ZWkAy1jBoemGhoa3EbCyx9hn",
  "key36": "333TxXZmGw6znoeW7obBDcwhm4eSjeLygXPeDS36jjMuPJ3aoiET4G1QUNJN9PU6k8pSUEThkyU7F1QtB2Pofsox",
  "key37": "4nA5mjW9qpgkPM6ERnkFMtfJQLVbGsvbvKnpuxfkySaQe4pZYucUxBYbYzraKbpihgH6VdV5XR5sXqYeaJsR6nt3",
  "key38": "2FNoC1exH832ffqECRZsYibhJptPDe9EoxadSszpjMWtWMcgi74Vc8o9959t2W4vkDv7sc5KwSYz5NsgMwMj9Y6H",
  "key39": "5ztWJ3d3JZ9TEerARk2no3NzYXuBekUkcYVB9xYUURRQz6NkvmSc9qnWNwjyNtkNj6jjWmREe81nqYNv9iT4kWFx",
  "key40": "39WECiu7wejWNDicsohPRJFZHYWbfoqbBiyMw39qHLCWqhLtRyVe9iXvXG3omdRVutGEaBHZWyYusBpggDYAyE3G",
  "key41": "2gCRXxnyhaWXtMTzryUcTx1Fa82xFveSWDmYE7ifBdggwtJJfEPBgXsEGxNFbtGFeSqNUUZMoeJ1nfGL7AgPxA5g",
  "key42": "qNdNHyDQufrWxPAH3ZmxgWkCbQznMNbxXk34dSztzHm2CjTTNY1oxUGvWQu7UyRsSQGecPDTapJcc3TJGDRSxem",
  "key43": "2Q9QgY3YP8yPj1UKsURNhy4NCZqrd5NUt8ie9hQPaTjFYehb7YKCCrpdCcKAygs6R7aYsVNkwvfgmAtx98sW2Pvs",
  "key44": "4G87T4Q2iDEoEQasyacdbkoXbe1duKNcsojutozafy5XP7EwKyAxz4CX4a3PRJNKkKKC1o9rxiF7BKcSLXKAgAnB",
  "key45": "35qG3MmGqLJT7nhJyStAdNGLFzfHN2HEAGqL1WzEpskyxtg1dgXB2a3mZPLXzoGgHvJ3VfKcoGS1TepQyui4oEK5"
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
