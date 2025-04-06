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
    "4hWEuXcKcpuwcGT5h7pQfz6jMdQ1DLSc9Ce1GUX5rGFQnhRp9HT4KG6C9sfcSrhqqXBa3U9XGxet6tZ7uyobtThQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5QdJ3DwkVxvM9tZBbyRC49NBGBvuF4xZmGUFbbYeiHaXVqiArqTsD3dobAC6mH3HgVifn7H96GPeBTkHMbTeaN",
  "key1": "Du8f5vszyBQrygayDVNEZeonx4YxftA4RAq7iU438MTpN4cgDGUajCqvEYC8fdwS1KjFrod4t8e9B3qRSJnbowA",
  "key2": "MYARmVwXBMws2y2TrKhUp7xXzb3QyijYF7zBqJCLUrMpizk7eoESMMsUPNfuubQFA3wXjK6ivUSVZq4cLGgpGZ4",
  "key3": "4zWmFsDD23fyGjJWwAK28Kiibpt2TPjK3F9urVgAEGJESN459xE6b5X2DWuHm7ssb2HtL4nrPsFcMHSLpP2SaXhW",
  "key4": "4DfCLTKN8hPij1EVY7fsRuZHoLBBUQoh4QXJMVaFxWwMDPBQTesk9pkMnx8GFQqDGXPrxyrULtRCDzZDAbzoSLiB",
  "key5": "fcVncSE8vqVoMcwP9J6Agg4B9XSY7Q7YvdHVG3QQK3G6WYLxKdYn6QftAjnwNgMZ2yEKfAnSAwkriThK5riU5KV",
  "key6": "5SdXKhn9q19d2kp2gVr8DPiC4JFZ2xDT5RxRd53VMtSg6Y346iXe6dQV7BE1keDZqVM9pogoheno7Lv7QzNP4fcZ",
  "key7": "3oUcToBGM4MZDJiYCFKinC7tVJMg8QfnH3sr6vky6kWY46zvwVu3CsCC6t7kbpoAUfPVwaXTb7NtgXFVFKDCHcRu",
  "key8": "54mWjpYZvV3wJmmewCSmVhhBZmFZ2yrFQJVC43xTFrE4tqv2RME3N9WoHzBnLGyPWNouDp93bspFsEhPs1Qvrftx",
  "key9": "y6y6r12zNM65kSQk4Y4vGQZqjfqoXzxevMNQepQjbCDFYbHg4x1kxHh5kCm9zXj6qdUg3wwHmAr8pteCeCQScsC",
  "key10": "5uNuHpcyF1bkhoR6khbFMbCAvKxUmLQPQxiqGigUaK5vQdfqd6mbFfuS3R2RuWKnsmy7nVXooQxMzMMr9uY2jMGG",
  "key11": "4m65tzMYimHnbXLzWMUzUZdNiG6JLrbpGBjQYtE2NXEQufd7LQphyDPCHw3YXn3cWtjvcTzTYLfKVZLASbtCVYuc",
  "key12": "2CHEEM89SQbRd5uwDLxcxhDN1tS2cVs9yQjUsQhy4ZLBNRxdgzt2zRsKU1fkrn365i6Sfcq7z4DRsqHGkFKkrmjX",
  "key13": "39tRu9vXykNGYYB3kE9c3HkKE7uzzaCCv7xKcmwzTfox2LKyguZC58mWRWB4DgsPjesRdvBbKDJYFzRf2SgoxEeY",
  "key14": "42cP7oow3NHdC77CPR7RXkFfYg2A1dmZFA6BZuQ97hTsBXgfLveyQm11mdm7qAHhnYMqhwTm4BpW7bVx1XT7m35A",
  "key15": "33hrRaKjMZur5rq8QdHuQHykMJMCDAduydFTaZkgVpYCotnjuYKVey3whMfUotNosodcW3BYUTUnHvf5YYvwQYsD",
  "key16": "3pozcNF8n9AdVxAEBdT7wMDmnhSc79uLm2kUKuRf9DjaxdXuK7piYKuT3g7X1tsgenZ2ism6Nvv7CHBUUd2Ws32G",
  "key17": "676VDkkhd6jZ9VhwKpRgkBfpbn6bticCoRc6jqUSyrwzLbQG5ZEHD6QdsCPZhGexgPzxK8FTGbm5DQxLoBeUhZcr",
  "key18": "4AaKM1btLj1CoputN9VRs9yBWm8A6CpBVXZHaanxxZxsv8VucqRpCPHKD3Pxjdeaeh9drSbHXLAsDgmgzdTmGDLe",
  "key19": "4fKBoJFtunzVzzLWVpAsgVSBmCcaVPjBkuHwfmDPARnbFnXQPeZPY8ucMaLZ9wpTJYVZiZhPMsWmCwCBteXthPc",
  "key20": "4ftgos9PJhHx7ksRn9h1A12jUt2F6sT8JwAKoHDsR4FN68me4kmtSgX2RJZi6RHgh2jitqssYzE3vyRVd7zAvBDV",
  "key21": "2YTYUYnoRJyobPqW4oDWVozR6C1sqyDPnKGuUv9sHUXvqmGVswR2WMHbBtkxUm8bjXx5Uhd5wSHKzoxzeJqhLJ8c",
  "key22": "eE21Y2Zo7xYKxyTXeXgZtoY2iXXQCs9SS8GSCibXuuNeBDvbJsYkLSzGLJVei2QD1FgEQR8fMQV2NL8SPCV2UDc",
  "key23": "2ZJS9E1aee8HTQfcg3YnvXy6ZuWJPMvXboGPstqVo4TswspKsz77XBM3LU7w8CQxQem8AponRzEZu1zkNohGt2FS",
  "key24": "221VFzQeq22FeD2JcyUEaDp1JjBaK3wJguRqEZiFWpayoeN3UKiNAE9YXtMLc7nXWzbMXFyWPVwb1eo29wvRhct8",
  "key25": "2h5TUNBbaX9yrSGgiRkbHTB3XgtF1hNujZg95kkSWd7G5WooGEypq4j7UR1JvqT5N1Z8wietgeMLTz3LbrNmp4PE",
  "key26": "3qjrCTisfqpYjJgDVTKvCKHWheq3Jc1y81s8xB61WtTUdJjBC1Vp864UHKqd4q86j5UY4aCLMsxBp3RbQmMebHL7",
  "key27": "4TP9ceWipKQ4Hh7BYP5KzyEQJ2Gpt6ei3KjrCsN6exU8KNQfZ6MV8x2VEAzHKEkMDbh4EtuV3GgagKqyS5bqJ3Ve",
  "key28": "2UCxQT886FEKYvD5S2vzgc7zhG2TTpPxcnm69RdRuHNF3geMt9wW8XrDmMfRYMCSTGLg6pYVEQgZpoBimaVA7VVW",
  "key29": "NehLh2hDZH1PxospRFYfcTowbNYpbB1gbiSy2pk97gP6YEar7BCNu4pw2HDN2fQq5EWYz3hUqzXEjQbgcxYKZBa",
  "key30": "U1RE5tg5g7NtSnS8hdhctAgDanEfMcdwTRUvL74jRvYRM8DVyEhbRVw2b176FgKPEUKPZ66UBw6C8HYrFnfLbCk",
  "key31": "3GKkmhwQGLTp1eFZV2EheqBgzQ9QnUjwuRRZHYxA4dL9Fkgwojx4JyrDdqXHD7u1XruDL5yDrgLPnJq9ccLKBsa6",
  "key32": "3zfdpFLZ8FEWLA8kaSo95yuiWrd7QHhvXL7NmZCkpwmAjxnaZNJymAys3KMqBFmCLUQMEfnJFwqFLg3hT7Zixziy",
  "key33": "57fqVzS3ARkmmhYDwCYdHqeE4rTyGoZCxFbE3BPRXNr5ewqHKw1t3eP1LUSWJAXGjAyAuCDYL6oQhr9ZD6aMcAno"
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
