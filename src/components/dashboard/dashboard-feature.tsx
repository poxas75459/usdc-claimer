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
    "4eYsuTeMBVknt3aic7p63eRJWHiSeaQ59fS6jHLPqppAGkAZXQxWNFNMc7uYDLG11r6eu1Xugf3wZCJ2RQ4EW642"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LvBGBj6zX9NFokFPa5mQabh1fZYDoMEVqyGiL6PaJtL6xXpKmt3W3amNBfgzd2UrMk4r9zNsfcREjHstaAvaMni",
  "key1": "xt52CEu7gZkBZeHg4cmySmLwhyTY2uk7uRpTXqVQrBrSBk8BaqdFpHj1awAatZdY5JjMZSwKMbXJUAzDjLEtgQh",
  "key2": "4mN7khQZ2erDt9wW9sFY6Lw6MULPWW9YodwqfeAcdQRxPrVDTxE19KNWGRECmUJdeVyyUswtD9moCDSiqrya9dmU",
  "key3": "Ss1FngthmH7EmbA9jyA7C6EqJWWehYbTfXxsbqqdGzfuviP8c8BSXqbNTJpyQbkUkUWmjZNtc2PDYvxzthhMzah",
  "key4": "54tkejnoZmQLnvCMzwXtJrDdLRNPrZvdBJeN8S3s4WSsAMwxQtykw7gDGnic6FaZrA9p43SL5LomFEZSFMqw1X61",
  "key5": "5TVSd22ZQDw91CM6pGmJTjoNdhGLeu3xGqKjimkRPaMujuexU1Kb9sFot8jJsjS9vq2J9p5ifQVKuXo6Jzw9WEmW",
  "key6": "3sJ5xYrfSCXCtDCqbXGM3yaL2bA2UfddpvwZZVonJx9RR3suKDFSiemd3qYmrbRmJa3ziVnaDkV5yCkiqrSDGWMy",
  "key7": "3A63XwAB578qCQmS4Tf4gvNAqcRyVQjiFBgqNWwRZoWqDVvwMYZMReERu6vYHmgje3PGqidNcjpRBtMLvCNXFeQo",
  "key8": "2NwUdSdy5P1CnNtEM6ARkURhpbASwmnuBnhP68g6DhKSX6ZWcfsxdAqwFmSfJZw9zZLe7bwZGmwaztcgbmosry1h",
  "key9": "2Hg27QVFkCx9CCXpxsXNGNYqinf7qVh65j5juqt4ycdF5ePb3HM3tq4XwB1To7UyHmu6qo2Vikxyha2Sj7YfqpSQ",
  "key10": "4mEZc3QcfFJcDdPhYj4ap67DksZrFiL541js5wpbFMCk9ZpaJVxZwKf46wh87DFuS8mVszjvQpCWyxHjCnUsoGzh",
  "key11": "2pQnvZDiGSSCNspgmWi7SBdEXvKcrP9BJ61iH1feVzmpWapQKqEAbP53YpiTiMz1ZK3e4E34LdcJYY5otVeNmnhz",
  "key12": "2YWC5JB3BuTXMDWD2io5NDVywotnKmos6RCJ4RfEemmVXirfam4CcQcwnGvw4fzexCTN9MvvvQGsvgdHkERom2XA",
  "key13": "1tZ8bnCGXnK2e15M5yxs1CH8LKvxCPieuJ7AkNBvgCnwBLZNepvN2JYC9vfdS8xzMC7WLHH8JzsjrJogocMbyJX",
  "key14": "4GKkg8i2gdVwND2oCwv7sAHiT4Y5daPUtYZQJwQ76c6oURqpxYUvBKGppJ95SeaGYSAgSnu874nFsE6xDpYGBcXb",
  "key15": "26CuBzZxUWWNTqf4jM9VnH3YyNF5NqEzrKmZhwVGu68w8BqeDAYBv8zba6LxeYp7vByEVqty6jQNSnpYobmLGUgD",
  "key16": "2hS6zQbWpLPmAnMmrqDHXsq8NAKcC48uqvZ3ih2Le62nvMuD6cuawvYnZQVZdMwjnLoeE1CtZfDLkEFK4aqh6XoM",
  "key17": "49tzd2qK1PzbyedCtcvRe1KCJi51M45XTY6ZqUYjQBNQuPd2c2dXtQxzRs7A9doxmGNS6pKTzGUDB7kwwkaRRaph",
  "key18": "2SU1pYuKdBTGfcjpr8uZPGcgWvvTJLhdezMeivRB9DzuCXqaFa7fWAoPQvKWSVyVyNXYpDoQSNT8fuikMyzNv95i",
  "key19": "ay9yJp9nKCgsS5xXMei8hYbjcmDTfHu4V8qUQiwFGbNYdDrAz63jwkzY5sGkaEKdB9BC2wzMG7BRAKWtfqoeRJd",
  "key20": "mQ5Q4rSvwp9mbknsLPJSN4tYrNkdnPRLJRnnYH7uVyFWwBmnrs7UCWC3qoZrBZkGs3EH8YUiwkYh6PxMQuBvSn7",
  "key21": "3vFwk21MnKhopGLnyNqxYWuciDWBdeAteq79N22jmocq5YhB7ytyitSd3iskdbGMcZ5YwBqMWufKky6gZqbLDFbV",
  "key22": "3HU2iC5RZpfzStA9n4Zej4q2CZhWEKktdR7fUnnWYvEg6wTa8gvLAi8hnsVQB3F5VNy4RdDCfzNJRh4st6Zbyf96",
  "key23": "5Z5nGMXoD1ncR6PWXqHCAxQZn2oPajUHE5sSdTBpNWPjEUYgM3QRqVKMHGXCw1mFnVCduzU7nNAAW1VcFetMq5qc",
  "key24": "4ipn4vk1RSJ3xpGqN5qmhyV5w2xyvbgkxFHyrotn7JExhvSm33SXZRDVvMYtXAy9kZBZ1qcrYCwXpoZbHimADNd",
  "key25": "2tUFUbm33Bem7CuHvj26kgt3rCe3FF7rKdJJ27G6MKii5hEbnQR4mUZCUxLYKRTZ5sEHqgje9uEq8MGtqvcPribw",
  "key26": "5VCeVcRvWtMS1vGoTpkhex3jSNRHHU8uaGna53J2ttmEUP45jfhJ2wQxjCzh6FhnGCQ12d3a7h27vKj4XYfru2rR",
  "key27": "53ZGRDtzBWtkr4PEJrtAhgekEBjEZBaab7AGhTr7DbZuz8N2Px1pF2LdqrVLjw1jMhs5Ef4FXkKfSDjzrz5dv5qV",
  "key28": "2DPieEt3ciaVr9c925WkmLLqWhCzc6VpUZDr9Xi7hpkPC1Uyzo66uivq5idXzWpsNPofvGCMyLxmwcecBFu9ZVN7",
  "key29": "67PTqaBAGW21JiVZEZhauj8Ae3Y3hgj3beXJ9poJ65DyQ4ysue6JchhhkEtVDu5WN9ZjP32qx8LPbZPnxqStWBVc",
  "key30": "5ZsvYYxqeN9PXqeT4PXUexX6KCY4A3uJb4qhPEF5qUeM2o9E8DMTLHSPqxHHojk6eBJMC4SNfXszfjDawcBhsBUA",
  "key31": "GAgAyyfjvQ3WUrJBVqq1BdXAN8h5XuFoHKr5fHHQf8AHTLPDp5MJTcDH6wDdTmwBZhaDsPgwRDrHrnJYKrY2rc3",
  "key32": "3qEnA2p4jq6ggwZxX5grifCLkmbMJrXiuCktXsEeTnFDY8C7xFKqA3e38kHmvi9Sv3h2QiXfkLJKyGWH3dYomn3W",
  "key33": "2LMiJEeXy4uPTySvKHyks2pHwbsjQWR4oJRzRjHawnokn4Cf3sA4wyBYy3DTJ5kVsntAdxKMAP59C3HiBzAutti7",
  "key34": "kawRKPELkr2NdSo3BtzNUVrrPkm2AmKPsgb65q7EWXBzKpUe3iSEaTVjkwPvgiVZ7e9PKst4ugZ5zvWGRznHMgA",
  "key35": "232m5UDPoABy3k3XHwg8p9A9R8Kav2zRmeNNqSMMBhfJBXXtXQtNMJVRXfTLPtgxqW1vu4SUf9EVPn9McEAW32CQ",
  "key36": "29zKrYxbxtKhq3pjqmgA3qsTzc9sXgT3K5XF8WVrSx65HMyTEXftugWGFieTn2cvWSp6sJh1zSzpqTruqrhpjkB9",
  "key37": "4uQmf1juXCqim9Lmh4PRPtzbT8YbfLtJpXj3SaBkDYQzrjcpjirFm8cF1XMnD7gKH1XJwx72QbQBcx5nn2sqJp7U",
  "key38": "5YK6g4EZqdkXmYtxcEv72yMhbABoG9YPoUemQ9u5g8gVXVUceUFGk6wZxqXtFrK98N8TB9R955hbxahFm6bYhZ9s",
  "key39": "Whiqv56seN1VNrcB4zV1U5SeYTpQ8aPARHtXvJJijHRWg72o9YwJyabyho9hRmF5Kf2RKdvi8SyoiGkEqX5BmPz",
  "key40": "aHGPRmqJUc8Pmwfxj73CvF7MoqDefw3y19fGPp3ovXcVCv7zcBY5se1TopqQDv1khsoXPq45qhgbv5Q2KNzj2vT",
  "key41": "3d2cDTouoaW4PvK7HVJQ1vEALAyzL64mp8AkYJzBznBp6v8j8PoBh9n8zECWo8szM4i7gsNZUdJxM1w21YDZi9YG",
  "key42": "3R7DQ2ZKtdU2VKyFVQSMbMx5rGSFuuYMK4LRLT1HWJpScxaamBvwMWiRKqh9FFnfyrJGgeKpaUwKQiGDEzJAGRLj",
  "key43": "4dChYKxUyhQ1kEHd2YVmUvnsRFikbLck4yGVPwhWDhz8Mvwwbc5GLo8Uj2MRhQtxkad92NnbKUueQbUpXhkTYndM"
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
