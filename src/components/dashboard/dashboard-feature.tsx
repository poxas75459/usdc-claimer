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
    "JVej5byG7zfKo5H6bfeGGaL5aYsoKbeX1PYqoFyUu2ahhCViQfJociFoUBzyQ6GCh1a6kDKyA5fkBNEDukbXmkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCLjdxa65TD3SA73FXbhbenv494pNdNB5rGurK9thgkvopoVNdoe3nP2qjqUBnCFryj7ethrpn7gJCX5PjQf1TJ",
  "key1": "CB1n59bqf31a5q4ksFCVH8KWokfCMM3R3xxKQoioJnGKnDSbUGuhEjc3jcn8qEA1mprTyjdiKm8CtxyVfz2GTe2",
  "key2": "36rHuoBbt9n7y2tFWfnsmHCjC3Bc9DyjsJRb6D61xF13AaS1WbJGnrEXdHKV1Q972tDjJ9AecEfzngojEBkgAqVK",
  "key3": "29UTJpmkHcrHuG65YNsHnJv9ofoKE2FKRE6zoi1PYUQ5JNNUqWaDApDxE4Bob36QR7KR9oJN8tiK4L5oJ1zBqthU",
  "key4": "3XYZp6zUxqa6zD8iiNQtV25KmVYQerUAKaUX534ZRUJoVMjZMDTBY291mTx9rxFJQXhj8wfaMnNSZzXrvkZXjf4K",
  "key5": "3sssJfU2uPFZf6o3RHVRVN6huo2rgbZzV6LpYGZ2vFXbUGnybSrVGemDZnYkQHGnUJDqtqc4G1V15ooLizwtH9Xk",
  "key6": "3zZdHpoqPhQzSSuCq2wiJZcuxW1N65A6zrwK79CTf7QrBuZdp5McVN8zdUxZfeSQ7LyY8zUFH46vq4gSg2JNGcus",
  "key7": "5UimXXqPukpvK2XQKe4SSXzhyYuXUN4sHXu1PQyaDuvQdd3j2KUbdJyAonhYmJFhLW92xK8qUvakoXf1EHYDUBT1",
  "key8": "3eog1Fw23u98ZMsSCEnXoZroh4B1j3joP85qjxd7zatQRZ5JELVmWLEit9apu48iMS9S4XFviDaPiAnfQDxQB6bW",
  "key9": "3Lph6ircGpUzao2tcnxPRR8k1CEB35XLNo4Scjs7GveWUmLTk3NLktzqmJao45rhQu6u4X7ByEDLmkQ9uHXhFrAX",
  "key10": "DMYqtLWgPXo6EDEGj69UooqkrX5zb59Ngk4Q46ogU1pqDL5kqBYiGtBiSij2EzF3mexbNxFB8TFPuqVdXMcG9hK",
  "key11": "jeW887EdQVUYsJDam1jMYXt3HwRv8tonH6BkhuCoM144a3Dfc3hLr992fHcByTeRyiSdNfFqkS7i9eZiGCy7gvy",
  "key12": "58oKrrLpDpy8nefQURjnrKnVqHHK2SqHJJesxAmanEEzbnTDfCcJsM6jRoggTVRbHpCSpxK7gczoSdmP4VUt426D",
  "key13": "36VBxVtkyJEpET8AN3D2qLDarXjgqBK4DEStZ7dZGcXotW4ERNiporR65TKzG9RiSRC9BTDXDHgttobvd8P8AeUv",
  "key14": "3f1UvefpAfVeEZY6Qi1WQfcMkZqCMUfHHXiW7NdfuCG7YEZUMLqmjSuTCE3tkKfQjjBtb5noqSmqSyoSsjYp6Xmm",
  "key15": "4xQyiSnJTg5c86Tnh5GZyr3jszfy3wfpqReyoMfembiSdsL2CmCMgomiX5GjZ8eRYtgWwDsb221St3SHiSvUmJFr",
  "key16": "5B4Z3XnuAxSj24rHUE1BUtXh6xAPTcjxYgekyAypmuQ7KcHkGQ32y9TLNrqgy9Zb2j2M8Sx7R3Cqu8NajSeaaFV4",
  "key17": "555idGgZ14Lh7gBoXr7PhY7AbJDv8PocHLEPcMHUySRPM8TopJ5fkxzrPivDMFRo7GqDZYetNk6Gq6GGWsk6n9dH",
  "key18": "3ktft6hGKrb9XRQr3mLh3ijqN6sT37xkf1tUdU2La8Mh3ggfp98VMZMuwwrYuU2qqbEktwu6WWCUed9Ed2Uyf6w1",
  "key19": "5XHFt2ppb59ikdAmJzZ58ckErhZmMyesyiPWGcujZMadLh8HWmNwwLJydPHvkSxGLURwRekR4iZb4N58h95JMJZc",
  "key20": "4YwKf8vHLuGv1vFfep2b7Kaz7XqPMdS5qXUdkNQ6M1VjawQTPTLwU7VFmeja8EsNjd8hDRMVKrxvJAGSBDh6vvEk",
  "key21": "2TytfRy3S92AAGBdEtWtKTMcYCUtbD5qJ59b1rQjHwb8puT3ZWSQKtQ2mQ5Sy8qsy9XwkjXhfW62xJSzXtS439Ht",
  "key22": "4kEVWZWobGfWGB2bUAgF8jK71Y3xYEW1engAJQ8xXj3tnmsMHQcwUjxBeeN7gdd6fXCRRkRHmxm1TEVRBvPkapbB",
  "key23": "3BfB4Zz9a9tkwfFz7s9UCwSagsxbV5NfzA3hiRir2xBvV1uZ3LJQrPpYi7Ys3gWuGK1Zq6SVbdxa85n9P9cwJq1k",
  "key24": "2KB6aahUsgEcVFH2TLUDE2tiSGB78tvQqJ7o4yPKHCX5jBcNkoVLcR8g8LqpNKt6XN6VL3jdeiy3ziQdv3zYv9ja",
  "key25": "CDGB58bKquasvHXAGGHAS1vMaLuRSqVEFxLbpLqAuQQ3n7sCSJis9SjAW9pUuGE3DbBrseZZymN9WctRTspMvYc",
  "key26": "3B12WHuTQqCZ3Xwh9weDVTgq57zMYQqGYSHxjdxE2N93ApKD8NppzoE82bmL1uyuaomBpuymYkQM44yR3jLDQDj2",
  "key27": "4FroSFKvfXE2VaiaRAHP1oXPdfXiBGqRXG25cr5jE5N4JSh8HFp89UG9YqWrhjSvutPCVrxzynAsnD5Yi5mgVGM7",
  "key28": "2HAVgckf5pxcKZmzj6QfjX42ZrwH3rCGC2ezKkWPtagBPym2m4i2ux5mZqAerg4Tm8M2cZ4tn2MQUUVG2RrFr5na",
  "key29": "2fuLAVE8qxXWU5vgxbnKU49VW1LN7Ujp6yeyCcYTXmqU7eKbSXLpSKe9PW9sMm4LNpgarPLvc3TaWQKbRvSVgqod",
  "key30": "2J5Qdhfqp4KYb4mGF3wjtirvaymvwhZ3HAz2vmoynupsfLHg6DzwVvSuGP4ApDvSxR4hM7Zsd8GB7xt6JWaRaRtq",
  "key31": "5zzDkrsHSkjsBaAGTVBSPeBbq9WuSTppi7f9S8NvH4285baXFVz1ie5B1vHK1MCBGDGMGfh7Ay6KNSMRktjCVxCx",
  "key32": "8WYWeT71rhmmWtrsHXgWhnpgCH5q8ALdJJnGiSYopfk12w5jC79U8TJ2ZhJfsK2nMR8UT9SnwuAc4Yz97xT39TB",
  "key33": "NkKLgDs17KbQA1z14unbtg37Cwh1sdG6xN38A53pXffDqY6Qj77BrS3Xi2Tf56EYmJEc1MH8LyP2yV3Xa6kjatn",
  "key34": "66GXDaKAqjapfx3YZmZjiYYRUfkU4fRmZTTwpbLst6kLzrjKJEB53mSnYGADxVn2u4gmw8h9VgnXRV1SckkFUHR2",
  "key35": "2V7yQBu2M3TyCsaCVNexR1Sxre68LB2kzsxF8Fofh7JWRupH4UW8RQkdcRAsnPjAopmMitVWWmkrpsQxn6qDkp1M",
  "key36": "3rQhrKBi3LJtZwZGyyUMNYcUFv3ycunuwbjfX6syJs9vTnc3sGcDG3r7K7pNUSwgan3keuWYo1zkxkjWfgipaA69",
  "key37": "8Rj7m2DbFaainfjH5ma8F5LCar1QETo4fxZziQNmJrfTz3SXsQ9B3SossephbMAAScMQYgJVLGvfTS27MoXoUKd",
  "key38": "BqGJrYSBRfnPcAvRMdSPtV8HydhLJZEvBZQWhJJ7eiCTZBpsXySntsHRtQphe6882SG7VmhgoEx6mBRYyEcazpj",
  "key39": "4PTceZu51JUsQcEUuePQ5kgyUYzHyy2KhsMaKq4r6oGMurXtMwkhPge9CzD6Y2aA9TfetsnL2jLMYNJJkxdetDEx",
  "key40": "5HCcW3EAa7fa33nWiBWzzXrhRDCryQMaStAbtsRGJTEYUPj9a9vyXTRtiP1g2ZbFirokuBxyWQhwaHeMP5hiP9yC",
  "key41": "31FuQTvxGstTtnJhfixP4MrXnzVP2yAYmJBsuhdpe8pfdWitgk8ZQzsTGcXaitrj59uvpQJeQnRAhGxCKq1x9m5C",
  "key42": "vPC7MvrV7aY5XJ26B6wT5VHqD4i6zZmGoTbWgnJSjYjaU1ShWMbiqYMSzRX66fFnJvLZHgKcRCufCvb7e4bYKE4"
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
