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
    "4mE5KKwb7RmVfkNCggnSFf1ssmGneAzf3PSmeKWp9JacNNWJkVwTbCwHHyKMnPM5vA16MJDPdSSmZ3PdnogNWUFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2nLjqDBeVX22CLaLwkUtbfXAYrFADZepiZv1XHQsPu1DowzpCQ3PG9UqSWfYvA219YXiv8Tp52hDV2WkYsDprw",
  "key1": "28ppAKrVp5TDq8qVCjN74UYbWeMtzdSGfcnh86FPzkYdMEtDWomMsALJCmjSo459QRors1DJ644nh4vDbjgriUUV",
  "key2": "3UCE3VazuWZAWJNhSDeS47nKcnYkL5NTLC2CKLxRS6WMxUELCB7EAFyKkVi61G5aezdLaVxWATRLSbMi35zYVv3",
  "key3": "2BKN2GEodTA7fPWPb2uGRxcyxKQwLCgL7iHV38iuMjKoSF8GiQmK5J7ppmSEuyD2R2HrahLxuwZ9rkZUyJ6rTmaD",
  "key4": "5fbH2w23Wr2anQkDZgZa3KtuzD7BG5XZB8N6AYTGKak4pbfoZUiTvEXjGvZxdmFnFB9mpaWVCsmJESevA9fJNTUS",
  "key5": "vWzE9JgakaR6rbFC1trjvWFj5DaWeS6iLDsou8N3FkXSDnBS85khiSTN5CZ2LWjnYEgPHp4473jxgQDrcQKKsWh",
  "key6": "5oc6Ky63PhGAY9J6pD8oEJvSUcSz8AZYTWELtNtEqoRufx48SeETf6StGtRE5BVQGcNXyQ7CMx7dWcXyCAzXXhtd",
  "key7": "59rNobxqNGKEsaLoAXrjgGSPw68SraZ5wdXG7n7ffFASyyZvydA3uCd4XqKrP8WWYpE3TYjau9NCnNvEps4CgkRR",
  "key8": "49VocosVp26DD5Ksj5wcb8krJAvVuvvYRj1qJSRaWQWSKjWBkSBj45L9LeugPz1c1YwVAL2Ze34TzdaZSBBYxK6F",
  "key9": "4AWikqNGxQakiYfeMnoGdqhjHr23zRJkQnzUmnRF6Rb8wDNzGtgHbvAai3m4o98vKUacEYAYs9xShfbSHZaGZ3tL",
  "key10": "WUwKErtVbU2xGCPkb3bhjLaHGF6sgchMj39ijrVLgjfGYZgvvs4rX4eS5L6tXLiPsUzpuwiYFQ525c21KToaUow",
  "key11": "4uqqhd7nM2XyNBVWKPNAJYtLnZo7s3h9xM2Sdowft7rZXEga2diZGZhJpxGy9Eu5tDHhBnWmZSaTmHcaWEo4Brgp",
  "key12": "4nCZV5Xx1TrbmAgKCSWJhGgNVcR2vfHaK1ej2ZZecACQLuqQEAj5K51Ah8AxeRSD1RVWpqzQDUrRV8VJJ9d4HF5v",
  "key13": "2jNURDSSfYCytUfvFeQvjCkkCzzvewimfW2kEvrMQpopSUcDj2sKKRuQ8AeJFYcgaNh2QfzjQBVeB5kXc6Gqd1Ag",
  "key14": "c5sM5pX3DpoaCnQhEf5U7qRuwbBNjvqFyR5gVGmbPTGqDQwHFQhyVLAFuD3xKKpzPedXrfvzf4CzHvoyoEyUknM",
  "key15": "3peGdhtfqUWSviEmfdeJf8x7643krDQJNWw9HXuJ2eQDecm4xcLvtespEZZHiLwobk9V8AfLBKq16tJW7irsw2MJ",
  "key16": "2o1YwBqr7iJev11PuUmCUAdykFx4pZ4zubvHpKgf2ykD47w9PVJmXBjmUJkkCarii7i1e6qD3DBYoLs4M4cDzLrq",
  "key17": "2MiyCeA33QyUa8aubdmVGT6Nvpd9qcEkEyrDoCDHr2K53g5WM3Lxx4q3JHqDKN4x1ujRys6X9Q1GcSVrdE23ZjYk",
  "key18": "53SMXiDq2uCCzUcAuEjabf4QPTGgGYxQ4HTTvajMazoeyTsC4hCaYVVqFc7Lgx3H77s1JVZ3TSH359xgwPchJeFF",
  "key19": "3ELgCZoHqsQB3Y8eREAZs96ZiGMNxyitMddX3q9ECoF2RztriFEBH4R8AdqKRsyao656YeJzh5zTj4GMhZfpQq2d",
  "key20": "5F89y1w5QDRKPxESrJjH6fiRWaqLw51TgQMw1N9MUfUYsHC1sQFgLaB15aWHqGiXg3tVjG21XfBBj82Kb9MdSkje",
  "key21": "4RS259vdUBc2jiJMMxqbn4SVGJ1GkVZq2x6BqZgVowVNmqAHnGkaEce5ZY79e3tw35arMo2zBLZXg9N42VkDeXTG",
  "key22": "2HPPQW9ZH4MNQuTEt2GDdbVF5cHGvAbTmnEhiC3Y3Xz8sjKmxQRNrVzfwuDAhDvMGwoRp6xBCKiJi6kuC3z4dS8K",
  "key23": "5WZYEYY8U7u2QTJsowCANzxZjkYvnno3WBBRUa1Viq5pDg52ogY2ByqoJjpGPw2c7WQBZawY4vppj1KJTwUjydE9",
  "key24": "3Dv136FhtzFXXFgsEzrxg3zrBTfCNTZbc1C328buAjT6CihZSFdRTByAthNCNBcc5KCJ94CNHaTTNVYVTBm4YM9Q",
  "key25": "5RYUPKYVYTDF2ygSLhvawPDgn4crDTDsThmcmiq9hdTejiRsbspdGJkhDtQSScSFWUzyBTHKHpnWWWicmQjMh6Pg",
  "key26": "3qjGoNc9Spm5EWF1TkDFpqhUDWHwLmgoZXbYjnRCVyRoyTfSEzEaB93UBp9SP1hDwCcAgVgiFhCZogNZFZjUUHpS",
  "key27": "3JpxSBJh7Xrr5zufR77DQX5tqDVo1p4YmHs9bUJedyJFSR8s6krhHXSuLvFPaKR6TGxeTEtszjmT4v7QQ1UcKvr6",
  "key28": "67HpDogvwZXUu5AaX9REHdVRSz6W9HzLrEG23SJve6cy8j5JeWppF9tzE1Bjb4bL8m2TccroFjqib4UMGubFSW7b",
  "key29": "4JsnLT1N57PWL2YR9QDRuhLcESL7nZznnghFYARBYKNF3SCVnYxMyhHapZj38FLWgs9zy67hWckvQHr9khLu9RvC",
  "key30": "5W85XzdTWiQbxjHrCMSr7jm5JxqLKUYUTw137TjE14Jd1PT8A85v2xMcXq9pksJCuN3uc393L9jiX1F3XQn4Vz24",
  "key31": "27SdQ8hUQCDQeUAvE8aewKaymNetUYo9jzsDk3ZxPhCZs766Gcr39SzVUFZ98Q1Br2X5m5Ped2vsPSrAPs66ivS4",
  "key32": "53qVnZU7EXoTHnENzXyRJvvxi5EJTPkDmuF4BQf1fSJUh5WBPCSxRKDMneBa5rZJGqA6mJvqfAKs8Nnh437TqMrw",
  "key33": "3sSxTdJC33aJc4gHdBC8KkKAYZAa3ybarLEWcyztSxizjT4AVB5Dr8NmtXGFRqKjdEh291X62bo3vmZ2y4rTUYLZ",
  "key34": "4e1yVzuioaX4vsT4JzChAxrnpK8XWvmevvHE3r9VXYpYgsjqj29MVn9nTVA86wxgzrzU2zoykfd78TTGKivQ8FQd",
  "key35": "23Ra2wWP7pfk1DrN2cXMPQGBEqTsnWFzs9GBaHr63SmCsA6Akv7fxBjpoVJ5MoBUfsVEHFn2HSCkJ2fFGSAXmNzj",
  "key36": "2zXxVdRXUbiLzs6XSZkHZZZvbScX3w3YzbmGHNSxdoiXsobbtHVZ5fMhQTfmXNtbRksJbYhW8M9UsPPWh4JUxKqV",
  "key37": "5FoBXJk56nk6NRR3we3bKjMCrK2hWwmcHBEoWUYueQNNRGijWGg7LUL4ZCckDEa6z8gKdfBAJKBkJ98V1y9VbfWc",
  "key38": "569MHpDqieVeZXRAka1MZf8ynCXXqvEY4WjT8LkBpsCHrcTtGTwtyfdxZrhMi1TDh1rfD82MNXWgTRugiHoX6KUK",
  "key39": "4g3uUqkSak23FXBVQxmYAdbqFg98wYi9sdX29SKtfC5QNTKuYfvndLbj3DDSUPPF57VrbGkDujmuiKakjCUHREXs",
  "key40": "4HRipaVaawwhDUt3N8pgAqAas3PAzWLfr2q6iVoqRVvnCuYtqmpXjmvvM6oZbB6cWVAN2cht9s8kW59eL8tKAP89"
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
