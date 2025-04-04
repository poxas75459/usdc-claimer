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
    "4Ze84CR8H5XH4tiotFRsiBnGVBDrc8yHJB56UVkX5ccD7iS6D4ndyHUDSXBEM95PmeT9n2Q4ix4VN2GxWEsd9at3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BR6iNRnfrQoN23FoJxLF2zYRVjeQdEwmunMVpsoCDTNN1n96ULAFYbZ7WFMyfUU73JxkqGghRTH7ktAKRBMu5cV",
  "key1": "EeawkLHHC4fi6WYb7KvLs8vntwjj2Yo7UfVU6YKZsc7oy9kM3YB5e3RKFMMqvVaCtxbvSV2wGUNTX1GkPG2pmDC",
  "key2": "2zYX9C3aJi5JFWj8mEXjSVzVYrr6ZUnQL3WaupD3ZqQ7qkb5k4AwiX8DSNsQqp76SQ8JBnUXyUo4BCuA3xbuDro5",
  "key3": "63Ykodx17i4fJSFU3FQ5AUn8S8k3JUWNC7MHFoUWHNApevaNx1uHit1VThUudyYEDuPVoiF9TyBbpuDTjHnVK8Hq",
  "key4": "4DRcWQynPzhpm98q5YqUfGPkSgzpbexmRuuqsYVqPm8CqzZRvCHWLoCs9MYcZPLic691HyTwf5ZwDg1YUXYtJFCf",
  "key5": "3EZQzZScSdZSo3BLLwiNicyYY3hWB5RGX5zoKTNeEnjULSLd9GfJRgVLfbVh8iLmnCZ1VV5AfAbviwFTPRjJXQ4H",
  "key6": "32R7xFJ2WkLVqoGeGA6LrKv48eUqNWdADBstsvHTFzAP11g3oNm4vYAVkUC89HJZTfQWxtq7HsbC8kvbSSyZqFoY",
  "key7": "3HLjjWRdgfoYZEEMwKJx7dyspqMXT7NHDThAa9PzB9JDruDR9tToqz8sDmjRzhw82xf2uHuy7uF4NyGhW1QuuxFf",
  "key8": "rwcQHwvbj3hHDPJwS1RVuJo1UHuijU3mCArPjrdKRabujw69bXCr45Sr7nEA7KgQ738qyQpUnFp4dZUsHBj6X6Z",
  "key9": "31J5eRx5KLDxoA43gis4FrLuFoypg51YXgM4TTgpu2StciTqPBM5txDprdAb4W1ZmrSXBTWfgny2AC5qNwKBt5JK",
  "key10": "5owaRMaAFLS537v6grMQE8aSnTfKGQpd3oHWrc7sCVwCLBjEk8k8dtfqi6VMBELkpcizBs49xp9uhqwFuPDmWe78",
  "key11": "3tkoy3phHxYp4aezbGxRpBAo7RQtfFs2GEXBvyDMVJEpbsqEtJCc52UttvsFEDJAmorURB9a5thvtyad7FWu7yNq",
  "key12": "59sSGzsAHFrNE6qVdgTZtwKwr9puoT9ugMsT5QDyK9hnNYy41XnF4u18Qt44pVn2ctJpbB1BfSqpFBVqUXdd8kXN",
  "key13": "29Sgfk2Yn5VRzEVAR1DbNZ6fdsEmC5ysUpGvMC2XUkouduho5AnRZoTk7xryqQYNYz7rPvB9zEjEDRSqULH81Guc",
  "key14": "5DatBzeB8N35iaj4ZngKKaJXVXGcTt4VHcHH8Cb2R7BsmtCCebZw1zeRiRezdnmgBsynyK9aSYNYG18LGHPwvHTZ",
  "key15": "3uELRQ4juQiRHspSYUfpZRXWa1CwVyoQbm162binCDjdyTz6imxvFxRVAPcR55sdLM7LaS9pAfqdD7PHZ3FfV7US",
  "key16": "4uWvFHHXhm9ZrzrKULoiWR43yfnw6zL3nSPFs7TzttLMtmJALydBQtwT9YrmdiEHJNxtx538cLxjrhgaCTs72FPv",
  "key17": "pDde8WpPh3CCGNjb4sqQjk5pt3kK4GpMArAAWrfRm5XeciSPqyH4AGLfT6xaADzcUZhgFEeuR43v6KqWXmw4ETL",
  "key18": "3a2bMpkJq88Wq4ALjMLi15hzeEmMtWQ3tzECUuLdNn6ucWSueyeCDKR6K2fu2j8RCsAfJXix3FGRCKaZZthA5Aap",
  "key19": "5aRcGj6L3YQdr9X2pdusfcCLGpQqc1yLoacdCaZNYfqHYf2tx1nw7uP3swF15XBPTdzogYedRVcZ4jSRzyvSZjto",
  "key20": "32P8jKhwcUfZkfopNqNouf9AHP2TsbKVipDxJdDtqUMg7ScFPwzBGWd9cNNj1zv6QZBRbcFczVXEsRB6tSdQGm85",
  "key21": "5HDwgjMWfRtuG1RkSTYPD6mjr8HqeDPktcCR7Z45bULykepLaKqyw6nQtC6szwMVcBJnksBUgP6EHj5YJqL1SFPj",
  "key22": "4yVQJiujYnWCxqn5wM3SnEA86X5gXATqj5eqzPcuR3U8QfEYvz9UCaxaZS3eAxkJmj4Ho5wZubK4kNA9fggUJmkc",
  "key23": "47AQQKgRywM1eRrSaCFkCx9KDT62hGKsNaMFb1RDpMW4kcgdgXaD9Zhv9orwdRkNdtCddS6Y6M7NHNW5kzDhHDhT",
  "key24": "U1JCUuYGDhFAHZifWuAALYUM1MCBuBDrvZGcNMT4mH7A3ULVhYLfhpgUf8TwYwkugwJhMwsPnggsZ9rJiBmnvmP",
  "key25": "5Vb13NJoB7PUj4fz1bAeyYJFw4v4ck6i66WkF91i2Mg9QEHeCDekGYG1H45QjMAQHS1brDRn6SU2q1wt3F5xCfCF",
  "key26": "3kzpvEj1Ya9BzfN81ABP3quzBQVeNUg2eZwXZt6eihuvrNJDsEbpN1a8RrRNWFVQQSAEkf8vbJFz1oVoux9rEGJ7",
  "key27": "2Tnk1gesYnWrVGSbZ23yokf7aVwYzgdFZPwgJUxcd2EVyuuDq2nuFgwv79msP4fmCsz3SGMnEZGAU7gzxHS4K3hm",
  "key28": "2nVgQTyoTVAL2qMCWYvaNmBfWPVBFQBJWRZat2tKJewc45Emun3qLUT1NkKmRVKyNdVWKXyS3MurKPKGexFjLJEJ",
  "key29": "s7MbGFUz2XDGsJoK4zHaEARqzyTkZb5J3y1HF1T5NKUVqW5ib1pbv8hzKVM33t7eAzL6EntwBskoGdFuESfFB44",
  "key30": "3tc5jNiwm1p8rLRHWzwmDjaBMrFZBQj5Av3MXYUSXhDhD3cC3xSE6X8yY7H4P86wK6zMTEoN4caJjgM7KFhowyNr",
  "key31": "gBtQLzPSwjpCh4aWeN8a4DCwrDsuZQBukeijrtHgY96aTASL7EsR52qJCJQYP6Nk3ervtAZ386av8qzPcRxjVBo",
  "key32": "W4u593iBtX3wbgQebJFDDrTZSfABvbffLfkxi2wwZRRRfFFcJZVkqsWwJ1XnXmUku9cLRKvnZAS1cj9ruLr1EQE",
  "key33": "B8wYqcRZFinWUMupB4DHYDZRyeDYeFmvE3owx2g4skPynvYvDSLdHghp1rdo2KM5MVMw4ihge293cGPDzGXV8W8",
  "key34": "3RFBKN6mARnRvMFkxwfb5p7g9FpoY5E3Qjtwf2exyst3s3qzTH8bKGtx3VbKqa7eJVerbv98YnmVV1PCLPE3Fi4h",
  "key35": "RXZgjhDSXRYZ9Cru4JMN5Fp6ENUt611K1qKZy7qzVuriqBzXLX3QSXFp6wRNnafTS6aZVMRyTh46QT5Xb5frYXQ",
  "key36": "LK15nKDAScFTQY7J3q3BahVsCufKXh6NwFusYAsuAru9GndeNkeK43ZaXnw8ULqog2sfwc1aPuQhtnceviELxaG",
  "key37": "W5hKLvVvXdsZCkcmaD9q4oxppQkvsN5FtYC454JvYvuVbN42gE6ugBdYR9tRRfSw4ho8a6cUcihmWZkp4DGfgnc",
  "key38": "4VGkMK2GzUw1aq48wEq1MYfCbL9be9PUmf5rdboWiEvDSczkXFCLC4rsXfVKVezQt1wjH3JCkbZG5MX3Fx3pANGn",
  "key39": "4Aac6nXqFLBdGG2tzeMVjEiHWHtQKZnUjVU7kKy7EL8ReLWA9qzzrmKVwnW2suS9BwZ29DV3QHYrXzMqYb9Y5cty",
  "key40": "5C2mBcP8CaNfJjRYeMShM3pXukhkRugdwAxBMWZLrmcNZm4x9wuvqfVaSCcVe8ST9Tgvow1STuduErREjWkcAwZp",
  "key41": "2KAZvTvS2VEzyWNTAmibLBTuUkY6b2FB9P7GF59jQtA9xQTQhXsaJkLDwBFEqmSHQ2bQaYfac66TFs1autswZaUz",
  "key42": "Hia9jw7Bpv7ErH4CzqeEgwisyUh1kW6dBc7nPtdTPA4kQPapePgSvPnQdHHsgF4ZBnakvKhfuY6HgGq4N9iJD4s",
  "key43": "3zDLPtqkqnwvpZrMNmwJM7F1a617MjxExLez9nnQitMcgkhBBAKVbPRPkLw8VorPvfTQQ8pASpCWcbFeB3ZsTCz2",
  "key44": "3T1nk2q1vhz61zV5yc3CoMaGSJ2nESZeo5By4FqTULKcYaqxW6pBhppjf2FPQgZJjpY7eWtGGTj6dumu7E2YzHP3",
  "key45": "44F7TagEy9gxd9fXaNBzHHa5xeuWWCzFg2yS7Bq6PohSsPdSf3Swxb2x4swJCSntyxHBU3F132UbqNND6ZhcQWFT",
  "key46": "51T1J6JhobYSi1BujRwZ9pBErqxZs66Egk7MDnYP3M5rBfSXYkSzuZtPe5s3BGX1yHmFzUNDkcAUXQ9z25S5VZP4",
  "key47": "3AccNMNf5Rtt9q1J7o8ma57XfNkeHG1gESrNT7JcBcZSYgAkFBGfyKjPZ9Gqdu7AYjqcRYWvYrkYX9dPGfHeWb6X"
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
