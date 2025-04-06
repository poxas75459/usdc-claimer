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
    "34uTsT4BNiJQcX6ytjshmcKo7H8jbbLtpzYLmB1qeyoJNrA1CTVZ1RrbaLs6b4pux39Xw7gtvtXJRs9T2qN524Pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sSucqhvLMCJraZCxvxi3YfDxvrA62SyxrJh2bb42rbJT1WeiG1HSncR6ea3DLpvHGgi9uGKVHZgS9KvjdXy9FTM",
  "key1": "4kBryVbWT9wuuG5LkCWpi3UdsGWy2DuLvJposevLB9VUXDVfmGf7JsDBGVGXLqmJh9MoTBZsyD3HmwdHFex9owd7",
  "key2": "61rdUWXQCLyxQcznZMBcrSryv4agQpowcxxBudQNUzDo4cxMrpdS6dvKgij5LgVuW1BxkEE5XU6xdtKCBeTs5kDp",
  "key3": "3hmvCxy2aLexz4RGL8dP6H1dJfBtFwsPvvLwPCZb7EVSRZ6azjYMDcn7uLNm3iDGJWEoHqEFaXENbZ9hr1UFhDPm",
  "key4": "GTN1gTLgerWoBQAHwmv873HVh2Zjd99BumD7WWeuxqF1cYKdU6YnLW8wG6mHipFm7P8XBxgUyXak7CGffg4Au3n",
  "key5": "4qCEPABjDJTg3u5FN2tWjdyhpAuQ43LMnKYHG4P7XzkLNwsqBRzLXZaDYfbrCn9f22gW8WD9TirD8NANyDkzBtYb",
  "key6": "3CZnGYsqGgN4BxZ8hmLB7Mn2QevQSFHfujnnDgg4JKcdfpLmVpHVGJhr1kEuNtQ8Wix7s71WfRcdu1syuQh25nhS",
  "key7": "2XKFVjg5EwE55EEAfQ4TSLCccYsVMVKvVgsEKDG6KxvST23A67tFE7MLfv3tkKV3aRG3FE5bFDRYsDf1AA5rc4FV",
  "key8": "4my24H86buduDVNAfnA9HufHdroNwTtDLrW9cLnhy2qghY6sHqC6ub8AgrRtuSLECBgt3okMUvqkHZbAyRW6Ja3h",
  "key9": "35XpF8bajQ21WgoX52J6tTAm2fCuEVsgLveXUm4M24FtrMyd7DKWGGgt9XWZeqjnKYba33CFGNRdSG5MQhq5Febd",
  "key10": "5A4utn9aGHVdHfvhYsrqZnVBRju3KCsCMMDAs9WV41CSuDeWJJX8h8tE3hJXCYcqkXYxC8TktrjsZyZhSjUUeBfP",
  "key11": "4eKocbdQZb7EdE3y7vgnWNrk6JNYtFdsoriKrzL9H4JFuRkpHqocbsptd73bApfHtDWfhHB8tfTSATjv9qWC2ve9",
  "key12": "4dy8fMQ5UTHu9pELRqEzLQXYZGrDsZBT2eKyP5KckDFfd1pdvax3ngksbzuXpjpuhRjkSPpB8TTj9bP5dvJ4zS9y",
  "key13": "yr22VAvCMU5RKn6GjKGVr4FTcwUEzPwadwVtqcwzisGtYutpLuP9fAbrJYLj3JWvGSuJ9y8tmSeuxV3QF5iWH5Y",
  "key14": "3rpLYkjhbuAa3NTUibujXTMX69hSu2uWw2VbbVcNJF5dJ8kf22RicyYgSv9USjt9nQN5SPrVboLRppWdToMoUtFt",
  "key15": "25JeLpiheJHxqbSFM2MS3XR9chvxFiyASts474DSycJAZgv9aTtckYY8HRYYLWhMsvPaTcNVwkn6mAerGvNYaYjP",
  "key16": "2zSfm2gD1t2mGbe8d2g62kXijPJfTNxQWGtSyx8KoyfNdCwJ5i1crLjHFbM2XjYZq4qSoC8N89YteTrwVwTgzuxX",
  "key17": "42jPuqkjQ6zvWsHi5kEQHNfguUZFPh5nxjUAzgYoCN1KA7tj9qJYZBLpSw64qZC6w5Rsy2QKqu7kDkxEi6tdSUUX",
  "key18": "2NU1USJAVr2AR8taSAi8eAVJwqRkyQjFVUWzLENwLfiWkQab1jQDPTjvALWYZeG2WVpvWHjoiRk7crpPHZs6hY6p",
  "key19": "5zUKDyUKUcqHZgZUBUBT6ohQPGHfYPqq6BqYQJHKAkALF6MWQw3o4WksBG3Qau7LY6ASfEZ7ooVVMGWgHVNmriDX",
  "key20": "3vdi4giomtbZdVAD9x8mN5bpk6sMNZiV3GT9DEc85SvF4miKQ72CVJHMpKoshGpcc7ghM4a9tkPvX4N6Zq9FpXib",
  "key21": "5taKkzVU9M3TX4aZCjJksDiZbd7wP9dozPncx9WZ46X7m7UWTjHpU7F92sUfwC72BBwPQ6WBgaJ8TGytZHAzFrAE",
  "key22": "43tDCzNPFxoRhv6xnEMi1UZXCBM8TyrnfBBkAC4rCg8J5CBF1mHUcyEzSk9hiR3PACAHnwo4YindYFTF7vGp9Tkk",
  "key23": "4ktRDRKVuwXtvtHmkYXFmrzUFLVZMxAuGzU7sJ5Zr9K47JV7HVjJ3Aj9mt8xFLfYimYZTPvG4hugWRc9uQKwXErK",
  "key24": "24SevQ7SKpmgvPJhxZEHkXBFyFYZUDZ1B9PCKRN85CFNjap3wcj5Q3E3kaaHv55ffgeSQDiguUSoM5oqqwq5mfc1",
  "key25": "3xYezKKzLHrwYQieviJnxDe6JqXk6vGDYqRAQgTGNPPEcbVzV6pbAgjWcWPJQyPb7TX8EdS5GiYyWGnytu8qFtPC",
  "key26": "2VCxhSkjkzHLhUwEFPH4LAHt9kM33LiXTQbjLQKcp67fgVEjxFxpSgqm1aqHQkFfJm7QQzJ12T8nxqeujQUXB9NU",
  "key27": "5cFJh1itJTY6r4HWrWjZt4AApWYv1iPjAknawCWydJ1gRgB4QwpGXxDLByYjFNxH8MKFKAdVufLr486LgVQgYYTJ",
  "key28": "49AkHyTLqVa8T5NMwH3GYGRNHWr5WbfG2JPMwVy2fDwLWKZLKs2a7nWrXRggkKcG7FhEAkgPJ7bz2J3yTmHnRjyK",
  "key29": "hDcYRetAqg7EYE5gzZvQcRka1Bkz1wfmt2Vi6PBqFgepDFUEXd1LqhBufpBL8j57ZZq8fKKVcBKSPaBgcWCR9Fj",
  "key30": "28qpzwATt9Zv2LyZ2vva9hTxnGpHpGwAmAL2BkJcCpEPgn1Q9vpvY9F8Nrf6ScAUyF6rCUmKUiPCGvxWQ8ti6Uxw",
  "key31": "5T8SmTTHNZvJAPp7KGKUuNXRJx2xbUEWMX1qjf3eaaUqAeYbugC2eGKhaRd2xvAKv7wrkjc1wtZNta2JzZ2M5WPj",
  "key32": "3xYWUszT3j8qXbw9aHkGxm2TrbPP7mnnzZ1sWVTmxbnbC9jxAJjNyXo3UQH3fzC99Qqv4AQsbqMuTZLmHa5hohNS",
  "key33": "3MexLC7Btw4NCX38ycy5CMhFxvuBuL2HupUZgbXtE8T19tivt26t7MQq49bHWqxAxAVLqvxnBP8fpF2V3D7A2Bvg",
  "key34": "2LpxZj6n9SMeLDs1nPFvAkuXFffmUGTtyqU4ZazQCEwY4LkXexCgH3pumYK4AzKAKtiCpaek64h4id2YFsJQEyLf",
  "key35": "6PUWgEUoBM2jyQBJnAQ6QtUZpwB7QxAYYXqW7AR8FZ1GAmeP4vvGVax71exYpET2Cu4u8F1UtNanx9bma5dnAx9",
  "key36": "5kKHuzc5RTffZktkMyUbgeGLP6CYQYra2ZnDV3tiHYnkzaXvFxGti4mzHgNvx1BLLoKJWvownEJt8nPBBKiijMZ2",
  "key37": "4ma9MmcydjdRB7dJrwzCPvHLjxEHP6moaBCpKBzmrX9Uh4ivYwezHz9uru8AhrxLdGawssB35jPpDAP2EMgKhnYb",
  "key38": "5GBoxhJfNu5eysKBjgRA6yUci182Kk1GFatYXeSR7kVQaysxJaWhNZB9jJBaxE8vWZqBCPnW1QgMKP3cDhxmELWK"
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
