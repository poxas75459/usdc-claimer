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
    "3CqeGhDjv6q5nMkjfggs41VEjMLkJQ9yc6rZ4iAn1yvAD8SzoQvH3DZp5S1CSnLpSwruTH7APYi5szejJNHdL5f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFG7iLxddZqTatw2aaoQGEpcTVtzb5hSdBoCMHJVj7cWSATtPeLqN53iF6MthjBMLiDC8J8gkDPH8nxDjYmXxWH",
  "key1": "5k6ae5jYztgusbMKq8K6FHwvMY1kbSDaTpD7T6S6bDms7dKKSWZQVEzxsVrgak5hbkE8pe87Z91ULW4LHYyj7Adc",
  "key2": "WYZgpLAKVe6xPnVmNox2wNXqQzUbGW8FsRL5gFfkwJHwiM2JNhrW27rTmLTGJhmuuLMxShPBCh43v9Srw3VPDEB",
  "key3": "2h2Xu96H9rW8DKokT8L3G1F53kYLYo6YuKLk4HZrDjgE5vsbhvTZT934tdF2qP1tKtT1ikG2cYUedLpb6mcNCK8B",
  "key4": "5EiWo7XECxf9nkR5EZntqLRX8XeReDH5DhtNY9DR8AW6PRJ73vyyKWYw7uNLaiJoAWdzXPLoK9WxVpnaqbrLKZKb",
  "key5": "311G8KNNJNLcF3jdY7XcfNVkiPeMR14MbskYDaPuEPSwBYGEoiNbkHgnihvqWAyaFzrKt45U37fttHjvxzPWW6zZ",
  "key6": "2bSbZWHGTkRqmiD5K4oZkAuKZGNWXSB4a2eqeXU9SbqUkPVeNvYnxALoLUcvXjvNz7BzKv6jjPWbqHe1mwVjQeCW",
  "key7": "5iTnJn9E3wgKYixFnKj6GakSEt1No6zFz4YTn9xtJY7NJ5d2kuwAqXUCbcUFjkicDck6dW8YfwQgDZS2wDdsmmDo",
  "key8": "5tbRV5kGsKgs3xRGxxinYNrXDEwq2XXAQKJFzGXRXb3phzk9VSLjJcsHVLRKvPffZJvdz9fWpcDdiqE6N6mayxac",
  "key9": "29h4jrqzQBXXig4LfWgcQyZd8T9kh2Y6wmdqMXPFc2vV5pmREBFL3B2HcnZw1v2L8EWtj8fHD16uoYwTxgCtKxm8",
  "key10": "3bmVjgXGxQVhRRgzQKKh7HciZg71tCxmRQnGY3Cnkc4DjNB83mBfFtqL1d9J51hutEfeEKbX5Fv61392X28fbENk",
  "key11": "36UnrNoPKdXz2Ybx8XQ11zHHKxgYXyRPnzzCzQYe1GzJRrkCnhJ6fnVjSqxcA4wkgJRq7QpSbgWerrqmX3zvBwdK",
  "key12": "knZacAjdFgNeYPYSYjFM5eUvPcmGMYfbD9jySu7YiiBF5R6WcUuvm9LrsHwSWKPkC79s4y3imu5sXcgKG1fu8Gq",
  "key13": "4oNVForvacwURjTgBhrXd363e9AvCcn4FMZ8Ho6N5Sctca729PUpxfsh6g78xhnBmbcBBKiiNdfAp1X3rrU9GaC4",
  "key14": "vdVbSvSaRdqViewDYdyHvq7ouGqgex2j1QykMAHK9wcvJKYnb3egWvSgTnEi4BG5JVx1fLTyFHzomC5TmbV5wxh",
  "key15": "2hSNF2re2D73jwFqtGkBePCtSU4xHhoF8Cn261ubFRzQKXRBmFhdcaPF7dvBtnj1cen6ZuqBweEiTynASw6bYCsA",
  "key16": "QuBYi4jodwDw9s8PVDDEhLnRFHvb1RkiCt3cMHwQCKd7RvKkDEfnmKbzGqNPuDFBLH4jUpmh4JvApDE7auVT2KE",
  "key17": "5taQX5Tqwz1F6M1UhwmCoakwdXfttjXq9yVMwDqCVonCGdjt5D4u9urw3qRHqUxeza8aM1fNJ5NCmDFA38YgH9o9",
  "key18": "45Usz9CYQpQs1TmtJwLtMVxCrmqs6gGhuTGrH2QDEPsfp3FJQUN3bS91rTiottZL9xEXqfZdyLy3gLf9mZ5HVEbc",
  "key19": "3uAjA2L2jDgsUK1gjG7fDnXFd73LaYr5wTM3gpgHR1Vri8oir6KYssmKSjSJXhPp8y54hLEMJYZMeLdqDWg2R8YW",
  "key20": "4SYESKR4vNw7w7oo3BNzFJH6aAoU7f1N9WPNg9LhqM2bTxsVXURFL9kq2Co21rmcpSxNHAMQ4k37DrtGgxHvrrpe",
  "key21": "2FG8hXo9WcsEmExMgeYBEVu8HZwBuHAN5UC8ctjmMmcjXNDKtvCgfod1HZueCk7RNq94ruPnkMewvdAF71NpVu2N",
  "key22": "2sEVLrurqc2J93TJymm84tQAZGYfctjUSW9RRE3v4Ga2wRAKwvY27gm9MgEDGcFXrcQo8RGRu8FEJDox429VaYGB",
  "key23": "5f73LWXdhUE8XzbXBiraed8p4JwMr8J9FSSvGfUPq9hPCUHA586ahFppMLEWC8AnJpPQ7iKxUCgmjNP3Ln4tVj9X",
  "key24": "2HP2uoqYoGPUKHxfyDDuFu6wSiZoMYff8rYKR2EHK8Y665HZNhc8RFCfd9U5bts49VaTAW7xbzUiF6rkH2Mxy56D",
  "key25": "2oud3ps7ASwdkrZc8q4GtWAwsYQE4eju6BnJHLU5cUjdMk7ugB3FGzwXs5nnGPKjKLB8TQ688g62og1EgdrfEXzo",
  "key26": "5yxQbfDXPSQXHKzYi2LjeBCrDGvdQPoAQm9Yhgpgq6n3HoYyy2K9tszpYxM59WxX7HW456a7AebpCFLmK5XPaZU3",
  "key27": "8M5FafGtnurCTY1L1KuTYeKd9X8gm8aWiaCCHGE5LMpet3Sm8eQZZwrxFYLNknYJ47yB8DKdmJrgVXJHHfKGuq9",
  "key28": "661ZZ9w7hYdE8SMBCS2YzGpEGsef3fh12XkgJjaWPxDJnhHmSA6mkJeVkz2RhQnLG6wZz5qZ99ssWWzMwGcBPUqE",
  "key29": "4bNoZNBUM7BwzMAkpkaw13LfbhQYffUhg39NQ71d4t5pXhx1w1Y8wzfkystBvmRCK8NGBTtewuBdL89CmbXHhLd2",
  "key30": "iGR71PELsM8zZxztu8NL9gfaozkxQpioVNAeEE34Pt2EyCCbuPHsKRdmv3BdFLpro48eBaMbQ1RrfcCynYoDWbJ",
  "key31": "665PLRVqyuBBUjdSEFrXRRtCURaMw3zL1GC5x46jJXn4SSmD4QfpB8j9zMZ9SiyLZhULdFbK3sUwwJpY76ixjDtm",
  "key32": "4FLmKjuLWca6hcfz4LuBiUxR3r3Vu6FEtFr9UaonF3h8BvY7wQNEfggzJuN5eMr6QR1ydwA44qmJzhFTbUx1sDMm",
  "key33": "53CAnUxQ835LyW6SoZZEEQY38JYDBcvFTjTKTufiDToPdArVBAt1ggaZNQkNPLMNPGLu52SZTHN6bA4HZRRFasRk",
  "key34": "4PMgLnueiQZ3RVNQSVAs3GYo4nRbQWKpQR2qWqZY57h8ULEZn48g5AHma6anwpE5wv26KkKZXgtiabzfzJvy3VsY",
  "key35": "3Bp44v8QWtBiGx3QrxYfVbBFkqcnzgxGfTekakEbzsiFFJiYsV4P42iWFp4C8f3o34NprSmjfEiR7YpVyjCCkHLq",
  "key36": "2qaDWXBbu1vrzeKSZGBFzrHLQ78vKVsMWRHP58ivdKo1sKhXU1i46YDZfrEFEmT46WQvRBiuinqgMwR1mF7cqSXk",
  "key37": "3M9Q4FUg1d1WcLck2aAQ9DLzXNC6REiFMp3g8xzW6H1k7jycaY4ZksMNTJDtkdkFQJutaFneAqZBvJCQdsT39Wob",
  "key38": "5FA8wV47qFb3XvnQsdiJHCgvqe7DBvwym8oLqXXUPNovYX9MF9vLfYQuFSyTj1vik9mj7DZb5RV1uFmy9JLvzUsD",
  "key39": "3bCkxT2SuNspwBsgG6PCHGhejXKp3C1UvWGDMZMk2r2SdzrMUr6i57SAZxFfXuAmXdrkgjVwfu42iMgH1ngpXWii",
  "key40": "5mKW7WvsiH6wAbHhQhLokRA27H8ywerfJEmS3sN5wx8XVgeZbwWHo7HyfVKjc63G3Fdi7KY6smKqvTftwg8gEVjA",
  "key41": "8qZgnjfffhESaSNJsGBseGTUS6fhKotKQRbLkaXoMPAZn3mj1JrBGBWQSYrzCTJX9Jdtbd2yvxqbdX1VcmmZHKr",
  "key42": "4jTSxW9TvjLK2G3QwBLTjX35hnjLuYHXWKhtT5Jhg7jYakUU87QcMtvtGVj79HbMQntrDaBBqEH3cEy1y9wMYYG"
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
