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
    "3RxRbETyMtGwpaoSon6pJwA3mXY7hqNsP1e6Mq9gJW5yUV3DAP2pQvNy739eQjCQ3Gzq38aKNKokb6K1r6nR4R2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4LZAyS8VCycVKd4yMs3gGmNk6ppaMDBJtxNWpddCWatuz2fnf9Ab9dR6pDWzGRCnqEAdT2iWHBTuW6Vphaizdt",
  "key1": "bWi1EcVcAdDmFezuJYGsqGoeR5Zw6FKAmpGyYMPm35TUXKeRZPhRi7pVvZEB2QXEY7Gkd3tY5WGrptnS6JYZKcw",
  "key2": "4zRHEhXB4FEbRBjsrM3QdeYD7h2Nx8SAC3QmmkiUEXFGdra8Pr939zfhZMWFEhqwej5QmZ6nG78uaTBBnR152bBF",
  "key3": "3xYbjYkrmsma9Zcuf5hozTWfVHsoWdVczj38bo9QfzC63p3JSNVLKa9pAZstWC5J1abDAAs9w9UmuqLDLWZD9TkR",
  "key4": "55daomZ57DdJ4Qg2LmA2Cw9ZrRvaCUgrebHaTfMg9nGPibxf8AcVhmEpTZ3JmhsXUJgQu9GAD6UCq3EA5ZaXKncS",
  "key5": "RWZHxLWA8WYJ8wXweNSYfm8r3H1K5QtGioWnP2xbHDHRiG5v6nFUYwXEoMm6Yu7uNwjyhP6HwrK7mXVrJG4f6Vh",
  "key6": "3f42XZatJ5MsCJKRAo33wHWcekHA7d2a7x9TemCWTmg5NpTFR7Ei1n4wYx76gQduRPY4FyLNpXTiHTSozXPTk7uT",
  "key7": "3cnqhi9ZxvfHBGR1gkhtuaAS2bnh6aexm5mQs8AJpZXiUcUeWiqjmSvH98ZjDhvKwKmGXQYL9mp4vwJ1Z63rztc5",
  "key8": "hQjbtuKTS1jzMYbfkgy7UddS5SgTB7kR9L7CVtxL3zMDfugMfJqsE1WWTYYzW8ifktwyW8s5J5L5KKcatFZjBKV",
  "key9": "5sRA1aohEKHousumc6XQi6irZ5zrJw2ExDNUxuAHqC3DSNLbpD2iYStW3GFEB5YGop9cBAGHJfRF7FwBVUzo3riT",
  "key10": "2ucFdPdcABTsMNAGty3Dgu5iQopYwF75hDwyvQLJ1VxFYgvF7yxFwwAGvgHZcpTY5jswZQYN3sTbChRwmEtZW7WT",
  "key11": "5Dk7d5UPwzP6WHFR6uoakQge15n1f61NgPPTNMQVviJL64anGhbhWKvzf4Em2tiRahpuQbhfcdFz5y3fEfHg5u73",
  "key12": "28ykbwVYds8u9QQSjNhPzkddBMLbUY7fZAPMEn1xEqu56q8v2m2By1Z9JieguUp2YGKTJgoe3woipEyRSJ16frsL",
  "key13": "4mnT3pPD52toMT5WwpCQXYifYitwckqD6uT2qCNAEi7jZPqcoTckK1FtVJ2mbQRnS7HAe9uECiR89AwAXE9HMeWc",
  "key14": "468j3jyfDFABU5vbsxmpSVTL6R7MjmkVza2Cwm6NHmtQS2YJRCSKTRTHCAxuAWXkYFQyTP1ZTzA2kAa8yxwtxDdC",
  "key15": "VQ4T5HoRvxPSYdaHsHhRviS6trk3wgXDej3QLifWHFtTiWiXLqtU5LYERbAFQyL8p9cH59MAtv5K8396jShQYvr",
  "key16": "5raNqBng8nd41SojkFE4EcvwyWffSKpqTqZLZFANL2QQhFdqYEHN7ZxehrsJiCbKfPSfSJ73HVaAYf4baw8kcN4a",
  "key17": "44iEDgMU9pVvNJXFUj5C3HDwJW4P6WKEK1YnV4wnLdRSQnR7kHDLavjq8gEUeY6NMKCsa7sK6ogyGTRGzB3qP3s3",
  "key18": "4aZ8FSrPu7GaM3VnXvJHr2LoxZhQednQHmrhgPD86Qv3rJc1fezmak45pfQABaznrLxV7RCJHak3i6hRSo5MtzKr",
  "key19": "2eSdKiR7fBV1SZcifWz1kghxmWaRYQ7dpVaJTSE6RdyZAuvzqQkD7snbR8RepQo5tsQpj8gGc5VcWiUi3TXhJnTb",
  "key20": "3ve96veg6a9vGBRrTYBV8D5QrRp3mzwQNGYDiPaAZYdq8n1VETvnfgjeRUjjmSPMyjhUaEjyhwxTgJ2PPTEFYVfN",
  "key21": "39X3zqBeFYd4aVhGvSp2pyPeQG9Pcs9WBfF4978Ef3ew1Zk7MmzRA1Ayg25RSwJkQetva5D76arfvGin1bps387D",
  "key22": "45ZPSfovMqKuDLwcwE7keqNCoNyUeJMexdvvbrTTNJA4xFdPFtUrQnYHYDUscrGnXvGmfgbikpaVGBr6Y467nju1",
  "key23": "4YUXY4HFgeJ6UL96oq7hKUQGc7eL9m4o51Hhq4jqqrpjDvTg6DHm4zLGPMLeNRPrSWYBWQQbpFjMF4GferV9BJtP",
  "key24": "4rNwmk6CvfR8dTy3XD12gVrfYj9nazpyFt335YSwP5PaFkUbU49obxbZUm7QbbVSqEQBP56kHuzPYHRv7tvGsq41",
  "key25": "2KHnLcfXHSA5nJjk3DvskJaA95cQJYkFtDvaB7HjndDfNoAKcrha9FgSCvjn6N1v1MJGxbCBxksX7Yp26MnSnr6z",
  "key26": "2Qv7EPe4LZMuMZD5WcGJgeQG5FkVKdPFtms8CMw53CsDRsnr4R59ExLQbn8vehbL3Zsw2K9eb5Mr5itDnv51GZZH",
  "key27": "5j7usg7QLnoKpPhmQ9tgnPzskRebwpbZmNBoowmQw3rVCNZTDz5wo42bVb8Vr3zpByj1Uim58EWZvbZd9AX1eVtX",
  "key28": "5hYrvzVUjrU8Wc3hU3reh2LrQ2DtW4PP5k6DZE6T3FXTpTxnaomupgQHmG9JDDLYE5JnqgwHJeLimAAjwkL18GcC",
  "key29": "5kNMmpFyfD7uPQTdY6nTdvVo8iBPpC1xhVK2M89UD6vJP1iYR9SB7P82gEJzPv2pgvvQisxdSHwdriC4wkpQAGMr",
  "key30": "5CtvXbRFDKqHFHrAYN6mYgkfKJ5uDydEmQ7stdAdTkjh5mgw6JsDFCeuPwzU1778xkwk68sQo1ujP4LnPrsMRpvo"
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
