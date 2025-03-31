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
    "394ewxjgzr269fPXMEoJmMPZdGKxHiyCYXkkDogB3XCrEYHi9rVXYqxPgWnkTdqqhjey1SbiTPzRGdD8VPEmWei6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22PHUSLDmU2i8pp7B8JQ5L92EuubomQ4f2KH7HzpUeAno26GXntYvt98HDmQb1c6qLSXawodUh2twWKAzA2jyWgU",
  "key1": "5kkNsDSES3V2v1v256tGMWPGD6q3eS5xzAabpuxGVP7W1rNZb57EFVqk5bjzXVPT3NaJjx1moYs7WhkGGxLUR428",
  "key2": "e3FdPskTAfBywK9nxNyWvRSCqHuH6YXzoC5QahtJtV6VZM8Hne7hbGg8PLcUo81BYe4rqcFyQxkpVFijTcRg6i2",
  "key3": "ttk4xSCsUZFG5oXZcdvj661e2smqvEKgoJMoBZPSPanYaud4GTv7EcnjhnCErD41WckYQBF3zS41dZBopDGBe5D",
  "key4": "4bvHv9UfwEXjUxMTkPd91ChFbq8trYfH1rnhbdMWjzTRJEvkZzR2GSr2ukVXb3ANR5Z4ZGqWwVQJEUR6M49Agaya",
  "key5": "3tuqqoVfXa8LiLcJghLrLCuzmFUy2bb1TShVvgaEW2zKLkotxRv9FfM2T2itSgZEe49uCmYpDQqSEjifXWnsLyyV",
  "key6": "3FNYLJ6j6jefT5wj3ccygyEDhvxELsFB6e8MWEzoBjKiSFKrnnANXDqZuW2DJuCZYuu8tQjZVxanacDFYiR9c5Cm",
  "key7": "pgA1YZs6KeCVCa5Z5Fnftpc9AYU2VpFsvCXdZv9sf2kE5UAg1sBQBeUajdJLhGTu7nkX6EmZkwyXTydGZkVn8sc",
  "key8": "36Z7iYNChyYCgvun9AjbMATPWbANgu5r8PsGjNLjUx3foGFivGyC9sGiYiTahYEs5VD1y745KTRzqQy92uViuH4k",
  "key9": "7en5XmX5R9ojkW6P74cAe6ebmojAetbpyf5zjiWvzMgSc5L8m6te3cu6Strduy8QoJkeQFsBgL7GZBUmdvSrbZg",
  "key10": "3eVkpn6KLnh8othMYXRj4JVUUpa6AhaLvFhwMwA5oKkLJk62Gg2TurHP8W7RYRt6zNNDC63yCJAmj8czNAPXwLpu",
  "key11": "5g1bs3C2Yvkiw16rQBHgGC4UNokbQPJEsCCLXH5Wb3eBfuPPyftF9tJ1ErJjkfNhqN2tJLWPM1gbJvjqYEizoh65",
  "key12": "4vHTyewVkkxs7TDySJSFsfPh1zfCchmzeNrFixQcxoLfDZ85hQ5dBZr19MgeLYfH6QzPk9tRodBgftouTMihYk5m",
  "key13": "ouQ97M2uqvSRp3LYdpuSBjQoAPrK8YQrSWsRMNS48xUhUjZbYdWkFFVY6iXXfjTLvXbrRASw3J2HjL8K9SjzX5P",
  "key14": "5Z4EDzXy6krFgFuQ4Re42AxFV7Ve2LUhyz34SF1mcoNxcgGZfeL87CGfM4vVDa4Hfcj6NxmKwG3AvprqXZTwWP1G",
  "key15": "2ovjJ1e2NYCUkXRESgNn9n3nHK1AvDkrsGnGgPJy1zhHmh4KqVA3UUgQJEDK8ihKyad57KNnrgiuEM78PgtpGw6A",
  "key16": "ehTHggwwipTSqYccJvyPKCaK1BZbdyDzpFTj62SJASsW3Wo6Nr4k4gtNVhvWn2BCUR3SCoEUBVr5vnuSaJvVzuH",
  "key17": "57HF44q2y1Q3k9iJe1YQXezPKWZPw6QvRFFLPmrDF5gRRmSvynYCZmZVoHKWyGkBLSS9VuAN6zWbvdRyLGKYqubo",
  "key18": "2hmeGb3Ymzy2dSVwEjsJ9q6mHPwX3f6cftaxaj1rWa8iG28STZSQaywd6EzcndvTg5Hpr1sgcrNSemefeHbGXLyh",
  "key19": "4uzhyAuHQGT3zNNV7w3wEULj7KDB1kCFmw3peZ1HkrXQKHw6TphwaTMuULHkAD8wkhge3Yagu3nqH5zXGMoaUHoB",
  "key20": "5e2nQR1EwRThJNdGhMnzJSLW63A4uxEoHgcrPmgTRpj96BWMrhkz1geUWjydwDEXtmbn5W4DTDn3qAefCzP4gDNs",
  "key21": "2oNMMKYM87fzh5b8z6DBJEdQHGKjb8NuFzDkXUdFmV5s2Wy7em7NdbrUiCSEuLnyp8qhNpApk2N7Vds6JUDkwzA6",
  "key22": "2wAK29U1fKSd54gmbL4C2KLwwVRQ3e3jzH1tzU37Jzetx78vZeS6C9ZK5fkq4LXiSq1ZMkxv2TKGXrtDHk4RQ3xH",
  "key23": "3HnwJMyNyVM7Ba6En3nvQ7zp8b1cnwMKoVjoPNuhZAo2YQJSxe8QTcjBd1xPjatygo3y2cR9yi8R4MGTQwBhw37v",
  "key24": "5LWKvFfNunw2cuXQGSQuHEjb2SdWQH4oCp53rMTQzTWSZg3kKgaUNXwmNrZxBS28ivDEn4e4auT2DrE6qVxwMmJu",
  "key25": "2FkoZgL45uM8n1GkQLPN5jEDxu9yQwmwvX683Pt7TC4zuhPoEsdDT31MBCeeCQusiuAq8BsEdabhY9hh86eJscm9",
  "key26": "wDgvdRRfmnR8EoqXhGtv8CEUm4gwec7cQR2ACbA5Qyk1WyxtoGhohDuBaM6ybjDRnSxX9YYAyNxDfAsD9z7pWJd",
  "key27": "67hPBc1pc65aFNm51LxbRiw5kWRsRjwJgjUsiZQYMPZRpZa2wtXfLyb3w1oY1NQR3DzDWXFuL2tKogkQei82yNY8",
  "key28": "2oPMaxABKCdLBn7nsx7dauc5ZwUjBsdfV1eLsUB9NAX1XZ4fFae6kLFgYoj1C2iZrLmpBJM5x7wTNxyewK667Y5j",
  "key29": "2UPcoVmntUdKco2KnevhC9dXViR2RGoEFkHyLA72KRmftvjmV3ASn9NCKZwRVSiGrKCGfu5MbyJZcoySdU2TA3sw",
  "key30": "3ShWEF7ieFL5E4xWZy9GZuvj8NMVUe1WiLRJLMJM7AZukdNM9ygnB8BiZcXoN6zHYpDgpb4oUupyJQguRyCNHPEC",
  "key31": "5uZfoSTtTZsFJ3X5sH46bzmsbJTT2t2NEFTUqgqjL6fnu5VvinxucaYDZ5Ks5yEygrEhBw8Yanxn4vwz2uwUifRb",
  "key32": "31c3qdCCVo5cT5mt9bhn1FpRaypfSRcUoeZ5A6d8kmwHoDPZzsZJPwRp8VHNsGxhpu1RUgjnD6cfcFev3GhX2ocN",
  "key33": "31mfFoXX24SDJ7B9pcqE7xqEedAdCX3b3i13Y4oa1HFXNBvi9PhVAuC1Tx6hPE6S9SaiCZAw5L5NHPDyUp3Rqbqo",
  "key34": "5KsFHJruKg9jJ1SRMtafN2q8vW6nmitoPodph4e3sJGkznucyq67JBT2X7Qro2qMN9owqEPKjaAzv2qFBBpRhNzV",
  "key35": "42r9W4iGYc6dBxwaauJ8f14CLf5dHygD6Y99YYHjC4uXqLWHdNks3oLkBjWvkjvA7UzfsUXFfMSL9n3FJwTnapLE"
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
