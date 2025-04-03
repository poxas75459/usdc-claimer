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
    "3gmEXB59NX8qRt5fb8ry2Mrqi2LQ5psfuL9Qk4PXAqrZWYV5ZdcgEXDV1us1DGMS3kYMYveQ5jQoChiPBkMG4FwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnCRVGUgZ4tYJJR1xeFLvmSW9bqZNwo7ygLTkkAoZwE3BrbukUUmYycKiyVWzeeHvMHLCLNRo63g7wQ1FqmQuZr",
  "key1": "M3zzJNwxzJHJUNmw4jMVMZHZJgn4SiJbrJbebEteJgsCkrQJEXLkxRsqPsYMofk2WCBnFN1FWPQJJGLU1xikpqC",
  "key2": "2s2jLEzqh16WLXqnPhshgh7wLX3fPuwxxDQGYZN7dBVYxN1a85zHBPLXTPoeDipsvfwamHNwRhE6xVGsqWpQPGYL",
  "key3": "5nvxxYMrfWJncjU6hjmsahRnJN1TMwfbL1df9MLBgWxGzRCkt4Uj9w6nAiHc1H7wrPoJFPj1WgJXQDWky8pRqE6q",
  "key4": "3eSm6nwP2yLLZcH9q1CBB9AySQXwYVa1DbH5VEpfvL57vatTVjGJvkfHkQB6VLEqfKj6Vs1tAyHa1VGqpmnYt7RK",
  "key5": "3h1SKsT1DBHKQYQst7q9mhbfw8MpfYUHqLm2R8Kj73XWCfuzVtMu7y7yxvj1WqowadtzyXx2KQn9hpcfas7UDJim",
  "key6": "sX2t6uGyNLTeuGnsrinJBm78ctBUyPDyVzQjFJTBXznecXMi5bjUcK1WPNMx9gh3uYqh73zzrxNkpapdCvdXdm9",
  "key7": "5rAn92EvaL6A1ZwFaFgn5sHCykRU4gS3B2uKGgXnAouoRyxoF5LqZZUn4VFVWbnAwGbh3TJuY3KB4STRAFiYsqDh",
  "key8": "4MgNSrGaCgFG9Wom2HgbTy7QxSvpm8a2MDY9ruFmRpcUGY3u56CRdqRXzNNA5KzCRztNPPHo3Y2DfN4znpcq9Wni",
  "key9": "3JqashHso6mBVXdxyddm1FAYV6eSkGZrAXYHei3Mi2LzNmEiBysCTDWvo9mKBn9bp8s1Nb5sFgBNyAAm5WjdQCin",
  "key10": "4s9GzukJk9B2By4eyYqVh3c8MER9RawUacpgc3dPxDyPotHdiNyyQp3qPWEGrKoaHEr4oELgAcb3bY6TxMNf2dq9",
  "key11": "5XmmNMiB7AJT3sato988Vya2XnCPKSwnW7LrU4GYvhz84tj1yXK4wHxViBV8cztXMxoV2SoMNUDK5tVoChDZ7aUc",
  "key12": "3NZDUX6xfnDavFmLHgk8hFFs85shPDhjTvKJ6NW4RX36wWgs2zi29yhAi5XKCsVf8E4NESg9V9kpxj2JiFY3i7u8",
  "key13": "ragXGxJ3edDxhK5w9hBTeL3E2PPyqmQYApaFg4J2dbvnWgtFace7Xd7qgZCYe6eZfV43trMnwmLhQtWNYPAFYPL",
  "key14": "59JNjhYw8EkU98T7LRAp8cc4NAyRhJoaC1cRwjF3fsZs5AoQdbonxHUBuvdAPUFKcQtpi9E6dshBQ8n7PgfhffaH",
  "key15": "cMqLh6HMkwZ4WhupqXHymD1QFRbL8Ks4jvrJUsZR9KRMBcGqarxFNcPVSUnokHaeL1KtqNCrN2E8Lg5Hm4rzntC",
  "key16": "4uECkPhUr36b6bFsFdadugYAAeTp7zXNbqQZkhsyJCHAMRBny8dNt65qRTbSeyLQqG5YnBNGVkH8T7iMRiUZPnMm",
  "key17": "drwkSmPgc9RAc3RjbEEcB7XsDUQrM9pEbdohoyJn6vnbzww35h74Nu2NdTLjNJsP41t7V7krb53BjX3hMUCRgDL",
  "key18": "5aBaYwJVaQW91MGXQZB7t9Q7cjRkSjxdhzCWxBcyc1EpxSTqcPenCcFbSpUp3f1EXvz4Q9J7BSW4iWCT5ifM39Cw",
  "key19": "4h1ENdxwXu481m5xGUzzfMaFLKtUJYWCb6kE497N26epCLhzNr52wdrRmN3csRQbiJcdXFrRfdQnE5TowpBtNSh9",
  "key20": "4DpuU1cHNLZ6g4ZcUvMKGh7agqKCCbcG48UApAWLcnKtDFbgx9DusYAUiaaonthZjccyULd8hv2iyPFxbUDmbGeT",
  "key21": "3Rn6ttad5MvoDAemRHKfUpqzyvqCSLPS1skiPH1W9VG1uU3jCXcJRmxshVDU62gfEhoi5BairTcNfFp9tbeAt8hq",
  "key22": "2TX2R3mxeb9pJ5cF3yf638LtrPyeYGvKxecke3vwb6CfLWcBUYPUEFTM6hKSfJ1nfxRyHUB9v2gD92WU2uAJ5VhQ",
  "key23": "4R9ezJujKSGdGTa2b8hM1DMWSkbq5r2PvfMCQzugZUhCybHM1vpHF1WKAcjCR1JKffdMw1iRuzaqqGUiG19ckgjk",
  "key24": "5QtGkh4HofbaM7s1i8SMc5GepmTzTDbJppbeBA6fgfdchwaptCkUS5Bhz1RfM7XVfS4wwQq2RA89FmcrFMUvg61J",
  "key25": "FmmNT5of93rRejZsGV2vjh5wtAwvgEHUsFtAP1W275ATegM9giqNKYXkiFVM32HSgmfusmmCavM3Krz2CT5rZnx",
  "key26": "3iBigEmTMubPXRXd8zy8UGwVKmi3Nb7Uix4fTRPKzEVknqU9Fkfz65MX552NFEMvnKBC4kRtQ1PGKBh7R5gd6VVu",
  "key27": "5wU3aguKVSKsAMUerHceWCztdAxBQatcjLAup7ZRUCzVUFnTYmPiWmkmvQjoHMAWKqfZTPQv3RmtxJnttnSPaCAZ",
  "key28": "5AeyxcmrQkkbD8X53GoHPqMDEgjTwr938E6EuNpu9prgupAeGGdEMrTMR5yZZmj2dvyLBNq8Hn1oEgGRiQRgQdz6",
  "key29": "51XDydPaCswVN1mp3WyueLfAGhh5VU8Eauh9fE9WD3YT1WCdtWoYUQsNJnF8B9mXGFFFPDMuy8MFcDy97JzvoDUR",
  "key30": "66tMLEmjUQGCgqCJuAjSMbovD2prZWZhEHzG6HdqFv1KZ4a9MUcX9ErPvX85ndNe7jqdAupxRZesQui6KXYMdKa9",
  "key31": "rqbdWVM57gvS5Ym6DabgMiHx2pkq5KKs76rdTbvpjapKkLEG1YJZs2FxZYmFWgUiVKJ9aWno84gWo8AsfnaJVdp",
  "key32": "2jJ6pahNugAGH6SHTeqDEDJ1McXwguGHSPNXSiRCsyQXVX5cs3EKHMjww9zgdJykziYxqNihERAHZKQKFF6n2Ayq",
  "key33": "2bbeE6gM7D8zim5taB3iGCDaAUmoZUzV1FFKvRXHhkzC4G27RjNEPuf7twytvojL9nzvShmcGGWKnFTJrJ7V5zJY",
  "key34": "24WbBqWcweRGcbAnShJsuct6j2ayMMnaLEfXes5ECKnZX4J4Zu74qPLCBVoLPh4HjDYzk3UA2HzwtUhrFsbfp7Ba",
  "key35": "ufv4445j3BNodRrMeidXVe5unDqe2wKrqkpnFRNmDaaNwZdnzWw629y437wSNnPhSzjHALgDiCspxtzTCHNUDwT",
  "key36": "2LrBjNnYvEgGoLvdTUxNKZnQF2ZNB67YENQhxyENZAqSn6oMk2pNhC6w9mGEPfqZqAaqmUvxmqZGTFsp2mUweJAn",
  "key37": "3xK35zVQSk5stJUMhcy36YWHMwgBZDkU5rMYmg5DoVDu6wGtj1rJvmj2AQYV2Pmc9NYK1p9DJdQXE3tz4kJVoqpC",
  "key38": "3tfhosFVzNcPAXrLxXc9kdE4sAPQsLGSeRc2gBuNnGhWY4dowy5BqvehKNbyfAYFitNbRwPa8k1Z26Nm9nwv4o5a",
  "key39": "uVPmoixxgimRTwUcb7cNY5D74F163tRKuXZxN2JsfubRsET6kWd5QwBVEkKZcSQSZLMMyav3xKSjDvh3FgxW1hY",
  "key40": "3yA165bZk1bipd3Wfp2bSJctwPTwPFLYDEMTQhM4cZcW8kE8khedDheQgGWojTHvbLGqpK4dKboTo6yBsyrCry4X",
  "key41": "wcFXMKtxoBYgevKmuJxJSvRJGSAiHhQeNKRhSZ7zymeP8bA6sUXBaTUWJUZxm5gCberjmU68e9XK6nAVbAaYjtS",
  "key42": "Tn3R2gEbZ8wjr7YUWuFqZ4ip2baakmtWzzh57Xy5kGenMntrBNKBE3kGQtK5VKV9EpGzMGLWL1fUpVVZ81aJYyH",
  "key43": "xiYKs3PpdQ9so4DsJAmUxdoKAg2ZdFmUKdhYfqjG2NdgLM5EEiPto5uDDyHrAowNS8RjjKexz6SQFYWu1Nn6ZLS",
  "key44": "5Lkt9FtBJV8jsofxbUvXB4taWJ4zXArSNTPSfm6GpxhjvAXCnnEYyEnEHmvePvo4jpj3R7DqbyKjnEPeetmGG8jb",
  "key45": "2zxzkNmgK3QWHWypcmUNSa4fs4X51Vta29412KPhTfKjw9SPkbcSwwQmN7nn6ioRVjFknT3zJWZZPC6ey2ESYbhE",
  "key46": "XASZyvDbns2onZaP7TUEF22yFeACNBCMZ19Y6cxVqodHpUCz6jfTgGu9Bgz4TdzyfUJToA5JafgHmGt3tV6kxyv"
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
