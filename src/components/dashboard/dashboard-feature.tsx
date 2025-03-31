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
    "oMjmhm9GWnuB1BvTkz6ecqBE9MXJvbWzifRsyHai49qTdARB9HWdvb4wKcXmqaGNtR6zg3ivG3PE73o5gQQAr3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44JjMHkzbZNUZkskKCrWzaVYyqVhADtcqskEVZVVHC14Y2QYJhPxhnPKWZbBMqX7WBCrZGM1rvcjx8sMakpmNAay",
  "key1": "PwNstEiyLfQHLE1XCspQvhQrcHaqGm4v3ZwWgfxHXr7SAeu2ruNbRfyrXcP56kKXaC4hBvwyXpLh6bt1cSawfZn",
  "key2": "4DoAJbHBmqwhYnB5Kn8sHzJhVkkUsDJxPqenXyLsRNuiDgH1Djt6CkkQD9EyFtx3aFqZpwm7XNefucEqaaX7hAsK",
  "key3": "5EHdrgBNxvCywKJTiboSaHyQ1smAo4di18v16gmgjiqGkivdQ9CLskj2EGg4DCSDo2BkFBoiRfN2NHm6yA82Bhat",
  "key4": "cyBUP4ErxavTQPpEZTxAtC9iZMsq7qQot4rWZ2AaTFX2QiPuMwB5zHyXXrU2kGr7e17qnxCGkBw6F8WBpbSPx5s",
  "key5": "2AGwDQY8PxpLL38Cg8iS2n7ddjprzUU4zaYeiNvjRFyJxXGykcxrMpfNQDcLP9ewkXPYNnreBsdWyRTqFgeKDTnU",
  "key6": "4zHQHAMpGLxHhLTMkCTKH1mDHXGaSUoxjY4N5HhR11k22NRY9RR9cYhUYU4eRqJQp3ZahffXT6WEBA3v6qBE8cvs",
  "key7": "hb7XU1ZnbVBiMEst81LwsrAwxTDYPmgkEmRKfQmJETTAReJvnBT97oQRZ82imC9DZoNgq8bNY9H59KpUdLG1cME",
  "key8": "wqsVYiGmEaEHxucwmUM6ie7t9fSGL7PaG8ZmqJGHRehBpt9HhFHDqWw7HVGZyaGUC61pbMs8hLkWhyNKzqFrxpA",
  "key9": "3h3KP6a8PYTt8NFU3vaNV4oht3mv4doLB5BxXGdGSWq5pY6iaAwbm5KQtgMnrgTWgZQHe9gDtNu6PPbUSazaf3uE",
  "key10": "4eaQ5vaFyp96EBDXpC4TA99vFofaDray2JYvkEGcYh9DgB9jz8KSu2Fzqt6xSBLb4konQjHAB1RWXLJth63LDnaj",
  "key11": "D7cJCiqNPWnUvMrchY5dWdshfKeZfADjhmGz7yyoLXftf3yFYSNH7N19ARPuBspxTARtmkdbesjsfNc2Wctva3r",
  "key12": "2q5qJpmXWFvYYMnMf8BqRexjzWBVhdSqdKuHmLHjFQfnWzVivTkMBsftpjXZhZSergCbV12vSFQMAdQNYkSw3eb",
  "key13": "yif3stWjnkEWephegdQWGDD9bwE4yWtesPkNJekkBG4p9SCxdxdJ71me8arJrWQwG7dfsVxN2BgnLevVxcMqGZs",
  "key14": "5Cmdwkcq3G1vbVTDQ2JMCgUZF1So2AHtWHE5k792re2mKqqMLqTvDF4CNQ79xQCs9VkuhTzCneH4FbQXgy68gva7",
  "key15": "5nUxEAZWMh37h8uYCxmf7ZUT3wdGbivnrTHpXeN4Rf85AK7Z5FtQSZqju1moFUeMZ777raVXnQwXvLU4JkjW3Mzs",
  "key16": "2oNgXuWFcKcrd4Am1o2Zs9nY7jfMbabwxuDECQq1KLYbp4d7GzcRV757KVZidYy3zKcLc1eZbpN6LtFmQSxh4Ajy",
  "key17": "2XRRGtCG11M8NumxVfdLKr2X8T5W8FkDKGURrUKZpPdvuwzEqEdNBZhgqveuqkwcE6beFaqF8yZ7hvr5XeJLacoy",
  "key18": "2wwnb1YGLvSb3AGP7jEYiyASVyQpXGHgLgc5GAMZ9bQ2J3HLBPyiixGTu9M3qTqDPZrcrfXYQ7HdhPceGs3hN6qC",
  "key19": "5RxhDponnjxUbfJmrHbPWn7knuq4NnBsCgZruwaJ3dZ48z3x4mHJ7ESPDkynDDFq4dpUQPdRRbCygJbshVtcdFJ1",
  "key20": "2woe4SzQSw6oBL3dWgovwzQVpg9h9MY919gn3CHYuyFhTCEWrKGcJeUUZWqHnaf39nY99xubsyT6Lso1ksWhn4Gd",
  "key21": "5AaW6WLo8eWvuP4mNLHmDs1x5ywteko7KbGG9gUWgE9hE6HJQmD5y65SyAQfJ2StEM4KABtFmHjWbPXc8hNj9Mcw",
  "key22": "4fgWk4ZtsPqHheJUBHGvEmeeEAJhx7fdqq3xSV9qjwqjJ3ogjUKuzkptjLbwYriNr86ywNBdhHozJQPQG8Emf6nm",
  "key23": "5BumZf33n1jsQTsP8cz7NbN7BBt3DQ6FmKAk2spSvp7L7qHGCcPiR8TU36ULxyun1Mc6NJPjtGohKQg3B4CEa2ML",
  "key24": "2iddLbNGBZny2VZg4otED7YUDRe6yTndhMv51xrS32BRbzz3pRxKHJZUCwzim2QSQoMqAQeGSH11YpYqhFpxVpLQ",
  "key25": "4ERx7ZzNutudqBQCirt7xmgRB9gmMReaYqXRRUdpRzZSxY1maPNibh53VZUybCAszPrTkkitLFr589wDcna6LQYX",
  "key26": "4SXZTUFXqyKH7bgQwTtDwjJeXV81sFDmj4SkzVqGRhYCAfseAWZ8tFCe3jx5LNYNAmyp4tZj3jTo1vU5CqzLB1cX",
  "key27": "2DnA6kdvraSXyS8AZ2DogAT6EikiA4ngHzEkfCmKaycMKmQb35R6uSjcrM7C9ojTyeKQicgfTdP21nVuUqSvP2aE",
  "key28": "PtiU9muQPnwRKVMxHgF9seZsiVSJhe5UP9NeMDuq2etU4bUSHhp6fTZ7BBp6J4mxzzQv7itkW12sN1Ys5S6Sx88",
  "key29": "H4egGfxUNz2W5X4pYWc9y7SGmGKLtEP4L2Q3NDdUzXAWHvdQyC4aTTB9fBbyq4WVhhQhXeaA6jECK2ypnBgJmAa",
  "key30": "341K5vC5AJ5Q9x5nmvmk7Et4MMEtjXyid4SNB6TBwJAdkRu89dwPQZDwynUer9q5r5X4shysm2fETZrASh37yqs7",
  "key31": "5sxvM1Movw6PkmRQ7J81pFd5Qq48E2yDakP3ah3rN6L9UeJFTWBmyQbRdm976SGAPQK8iJYFzbd7aq1aM1JNETYK",
  "key32": "4fRmfm49AhjnyqQBixZ6sZDBBn859dqXAfwWRAqGeXBrr5qvrsD7yYy8nab192nAgtaiARAaApLJLa8cpDvHmkaM",
  "key33": "5iacGPneYWg71cJjCQfJ7rrJcaKppM29xSCgbvTv3wij8Ed25hazV68DNC7LXYT3QPydzVUGqQra55rkCjreBvAJ",
  "key34": "GMwS6jhC8VPWRKsVMd1JFjkTj6fCFDDFKvgnNC2bZes2Qr23wpLfsf6TGGpFWMAS1Km93R9txs4haWJGTFprv3Y",
  "key35": "4nsUyFRucSDK3BgPBSTuESC87KNpVGUvaRZcHeygQiMbif9LtmotCVGvrTH1xmf7wTqyX8faoyBKQgk5w7uzWUwi",
  "key36": "2x9uvKbzgoJassEUvKPNSet91iVVYyrwWSe5vGXT9wFELk9kCR1D1K3QwoJD2sXUVSq6x5aYsjsroKgE7kJCarKz",
  "key37": "3MC7xrNJG1eKXqCWvGtzqsb1gmWw8YhNByZwgJQaPjMsr8Ycw1yrEB9q4PCSb5BGSZi1UMdwpgFRp5UBSxuGQZU",
  "key38": "5eSJz6rYmkXDN38JqWuttQ4bEhXYv1WeRD2tcWLjALWgpszYLESN4uxYZHicaTeKGk3WX6B6EuBqHztzTSYdqR8u",
  "key39": "2AXzgWau4WSGpLpF2nNh3rqGgd3nJLxx6PjhUvDJCEVC9xbufYxjcsMVjHQA2ACocoYyrLsNmYAfVEigfEDbjrLD",
  "key40": "2TypxXfBAKBvedKMEgwLTF8oQxCwKPctbso3EYf788x8z4CeVuenbduDkAAaMB3B6fzr5Q3ioPg6BFgLBdSLqGow",
  "key41": "4RXWjtZ3pJkznD1TEn9uFCWD48tJiC935hyeSHEVj6nZLX8Rbu3Dks9ChCzeotfB6RED4fLTwvp4hNpE8h997zU5",
  "key42": "2rEtoYGdbmrPmzKxW3mzyqVJ5GU5FZoK9zpPBewDF2hY4xJeXMVnu1NruxXGhX3YcypKXHfpp9X5u6MSFQoyzfmz",
  "key43": "5GshZogoTUBxBJMr8RyTAUn6KZ6YB6RyUfjuAdMFX2WV9ZyfBZXDJY9BsDd5SGLv3kDZo6v4iHxyfkx1Cs9Ft51t"
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
