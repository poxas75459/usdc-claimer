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
    "PB5Du5QwsibF7fadMXpYr2XuWGiTyGSU8vZeF2vx9743eMRP1ShS1Cs1hHarEq3sif9fS54crJ4dANpNppwbHbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VMrpXjq2SqUQSV8gEk2tKu7fjkp8DTGvKQy7HZ6dKnpgws79PTBxCxReyk7CcReuqv5yPmKBCQNMbbRenCBmYsi",
  "key1": "4rGfAcd83Byo2ctBKxEH4eHXajt7d88C9cCtUiotGGXTC8WkXy9dHgPcd5JqAfweB1kcXUpdkfZ4GUoSb6HpHDg4",
  "key2": "4DfLw3ns6c9RM8Hj45ZcFBsQyYxoS1iSVNUAZvzrqKACqVoc92N5e4MVhY6xjVKzWWveJFYDxRTts3Lz2QndCehT",
  "key3": "5vq4ktxGBuUXM7Gdm759DJzR3vcXV7mmKCyYXvKMUWgxFXtENuvwuthsPceCVa7oSFznX19SZZUxLHFByuJKqGPd",
  "key4": "5DWs1mMAr1BBArZ7Ei8JxGB8jZdDYCAK9SbLeRYRBZrVourGuxBhHL7ZmvHp9AsLFm9TwKpUXbqzWnY7Zo5bPcbv",
  "key5": "3wLFPRbyhmin2xMXdhnaWA1tH8VfDk3gSwNBw7t9DE2dzuUopkDBEWzsw2gMFAygx3hAqnU6YoMY2Fqmj3DU7Jka",
  "key6": "36QdjX7gF5PY41bQacRo814vv8N8g9gRnXsmQRyR8peCN1ZraAqWBfr1qpuDpkceWjj6S6EWTFAsoHoWCWikw3DY",
  "key7": "5j4pjeEQxdv5eheiUqPyLozuhP5qryehKERmu9D8WH2ew7TNcZ8HcF1hznS9ViAo6SBUACbyNKg4mXAmCjRqeakM",
  "key8": "Kx5U2YbbVFiBe3u17mV6KJKYntVjYZoH3MzNCobpUkHqvjUkZTXab7xzekRQjKHEUX3Jz6aiAfvn6jWokwWZqLY",
  "key9": "4Rf6h79NBWhvDEAFcio2TddpcUNdJvcLBAGKEzG4KffENcrtob6ZfyyKasZjQSbsf2f3aa4wSNBqxqAWFW1jn5uq",
  "key10": "55oTjnKrbmsRazc3jZrvRyLrKjmbcBDRvPUwiAEqJSFnb16W2u6n1TUPjhoitKEzmd2CAwNHkut5JRuH6dvqsvuC",
  "key11": "6495wGSfPzHzvJRJ4yC5rAbhfBy9StHQ3vMA248ytp9pUvHvee2LJ1xfv8xHPeeyy2QCixbWrdv9EWvxpBzJL7Cn",
  "key12": "YPdgufw33FCvf64kAQMqBsUN5SjieYqSZshdQztYNLrsqJb7NZnZ84hrkjkfp4b2kHJv2Z1JYWKWSZJpmzsiHWF",
  "key13": "2AnLkJUhZRB91E8UKfDLZN5bqfa3M482yA7F7zDS7miGBMmpeWYrcpoweanHzzN9BoagMXWaKjUuRTjEorz5s6HF",
  "key14": "MdFzn4dpCDesZAWGjQvVCcRRpLQKHQNkNTbKGbmq8wxUcTTjonahyK8xfu6PajTgWH6NzBFbxXakw7DRk93kxtV",
  "key15": "5S2V5rRvG17JUNcXC7XpX9RsX4Stk9badurSxB6DnB6WfmtnHbkm2jsHGEUDARSFS4ZBky3Uj4HkxL17YjiUCQfB",
  "key16": "4WRaNnPcJJ5jC2SZ5Q6aBhLKTmdWDLiXRg9i6EX3q8PQ4fcUykWA3jD9ypfzWnMuvmy4b9GYB4VGLdSTZ9YTogFx",
  "key17": "2B6Gsi2WPHAqSebu3hxmfvXE2K2oGhYDAjqQct7wrxo8UpsaN7ZUQ67YB7aeTZ6kUwHBoPiLauQyV13MPF1EDZdQ",
  "key18": "3GrRQAorJa7jp1zPAApKG9qAxdKPmHzNhZ4ateZ2LBCCNxs85LoLCgRYLFb4MVVcywEwVFjyuntWz5ieQc3YxTvs",
  "key19": "37XKtf4vw3FtQZ87c2GYha5y17gbLkAjVxY5rPtoNGWcw7Ryz6JYLh6jMs3uj8ws94MEarGCj8hKkXN5ckrSZs9u",
  "key20": "3eZw23n5TnFPJMryHhTduC8s2VryTuhWSMyYi4TKXvDKnzAA5xidNb9YRUM8BGGmMZPV3JN4Z64WhFz6nX4jNzXw",
  "key21": "3af4a3RgdPoB1oQpZNEb6maA63zNB7mbkDWJ9tkH182JFWE4s1HHc8Cn4kQatuKTxTZGECmTos9eNFJiNyvXXnbe",
  "key22": "5gCtsNEMLhpHaUJYEpkbfzPZJGw3ZVzFGEr7hYD8AeDfQ4T4Qq7mSWWxpU2QTaNi8hQ16eoSnhDVBm8zFKxsPpqd",
  "key23": "3sEqFA1vkzc2DbhmdvbFesxjD1S4MyNo557MeJwCWc98Pn1ZCH9rhSyVC9Tr5UTaBjGyzqyt1LjNpBCv88mm2CLM",
  "key24": "vSBJbuq1up3wvPPnrJ6d1wMv2jcmw6R3cKJNxtgzbqc8AaBVn9eJShgzzfGUAwnsnr3THgfLkbfiVoXePNv1D7P",
  "key25": "rCSa1FgbX9sR6iLaicwmqP566Ci6K8Hi36HaZBD2fM3FYcqMhok4rHrtboz9hRApEPFEzhhgGjeheoiV2WPmDFt",
  "key26": "337piuosFSkVzwW6icwr6WQZuTeZJu1ko2gb8XoS3VN5pkYsuDPAmDj7B2pcmq8jVpzbBgowfv1PVbrAQh3L9F1G",
  "key27": "3wUpTkQfVrmpAJXvLyjnGcq2zqFm9GtpdWZQaTRyfWyUuMyTddZUUrVdFtBMz8WW5AmPrrDVnUcdo99degCk6swz",
  "key28": "5eXQYtoJ1k9113X1TSX1ymmcQN7xcU9qnXMZVkQ5zwY5Smks2y6FjsGtPN8XiVsTwT5kSrAo3azPj2WstQNjyg7k",
  "key29": "4PCEdetWarnRZY2AG4KxaiiEsaLNz3ZoEVTpQE8wYaxotw8tkcytsJDgMdwjCcdoczXsk3Ch6FKyVc3xdSFSJPK8",
  "key30": "hWdByLHhQFjE8dJvSDiamYsS75ocxGVjuv3Q8UhF32as7RNKPXdrwr9NrZf5yTrG7ZjvFWzFNAiDjHgLcK7sgNo",
  "key31": "51VREzGSEaAoNhD6PiJVwQy5ohBH7zuBq1f6ABdKom4wPJQoMtD2Uqqtrq71mzv7JMFcJZTyBwc6FZNtneyqjic7",
  "key32": "4RpzVQZrqJmjAyrEc1KcJjCudGB6jVjucBjkdLjPSSPSN8GHt2g7iMi5L2zJF2fngCQupy8okvXuz3ztqtE5Fb8e",
  "key33": "AuUFQt9DnJUmF6fcxvPpxuiKkPfBsoXxufckGwx1rA37zGhEGasnWQ3LawmuPvfoMX4RZhGWy2JsjmefzupBuFV",
  "key34": "g9gpi5CriGduXud2b1wNYNdTAukysy46QHZt6kZ3q2eW1iz2993Ej6FA1SB1pyftpXSn3HwV3TXYTt6gtXxdUuf",
  "key35": "4nn3MW3PdkgmXcRbxRQQ14suQS5TLhX4uThhyo7rkWKm8Ww5z9k6Ln6WHuuab1N7fHDctZo42ABW2jskZTRjXi7A"
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
