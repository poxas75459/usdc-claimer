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
    "4MhUby9kNFfERKnUpn7hWQf7GgB4Hhdrpz8NpSV2VXpWSRiCqzPXyGkpJtwb77YdDbqPQ3cPfQYjN4Rvna3R5h7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4r2vui56Bmq2LZyeD37J5BVjHQ54sVp9ZjAiTqzrFcGu9AVZaGgkvVPWhaM9i2RK1zJ4De14HS2itxkeGAhKvw",
  "key1": "5LJDDtJRyZtSB7aYe6bwhRmrdyRfjzkHusEMp62Aa8HqYD1soP6ZHVGy2S7jHGmVjTMGJTtWYgMxAQXTfJvxaNq7",
  "key2": "5bC3WT5GcqwhjGpPMHvKPgY8emaiUUCc53n3ma8SgyjZ9uy9xptn5PRP67PrD863QJbStcnAsDj2sLERbNpuy21r",
  "key3": "5N19Ug8ysTDaVg7wg4SEgPA1S5hrp8DmHTGJaRNrP9ocm1nrhZaEmGpGrsZDQ6TpUvYsvgNM376vQznedLq8Vx8d",
  "key4": "29T5kRuhLXJP4ENzf9RHns32mrhQ9fkPrCzoJ7MBiJqGRYqKkj2eyBLaehZKNQgc5yyoqfoTJxUwNXJrj1QWA1cn",
  "key5": "22wz1xwL61x86A3dQt5GcWm8yCh6bKwGJw6XWzLjmXGxT3HRih4oe34Zwg1HprtPHtFv5vUo4ftV4qycy15axU5a",
  "key6": "2DjFbPAQFari6U1nNkkHtp4CxDQQH9Tak6QcPHT44uDeNVx1hUZ2kjvhEWMBvZqLRMcGjBDueQtCpe6frHFCmEur",
  "key7": "BayE6EitwsM2FXs5ZsmQGqgH4zf2xYyn7P6Uxj8jPiBymj32uaQyuNyMJxwbbJEVfrJUMFZd4Xo6nTb4faDwawo",
  "key8": "45h7HgTAhcuVu744vwhtF17BpMpL8bYW3GmiW14q4L8NsSGEsYYy1Ao7RgMKUpFQFPQu86efhdRTnupW9LUfEakN",
  "key9": "5YZgz2S5LnUqsB5fyNpSXEs8TzT84CsuEHWagEhDts9bG9xwsyEiE5hScmmQ337mTkJDJV5EjUgYgjgGkHgQ7csA",
  "key10": "XaABmv4fn7qJVqCWTc1kPQdBKK268VVVm7Zt7A4154APZNGgkcYk7gVhxzk2H31oiGpKVQkmtLSsvzHbocmP1wu",
  "key11": "24LKgYEz8rQVGKjPuYKumtgsjxZjoPM7x4ugHtdFL9Fy1Z9YvVCESTA6Gd5TZpTcByhPFjtk8sQaLzb7aRhTpbn4",
  "key12": "2LFHp2XieJqrEmbw1XSQxzaRMaMmtc73puLG89qe9wUf98fr3S4J4WuJWFnBzjefwY4TM8vp54N6yRn6RdLbPiA4",
  "key13": "PpJxG4M65ocBHJbRUCxmogsrkYEqqriSSfyAWrTjecL8YKkHZJ6Bhq4vGV8H3vehDZ6fuZCWJbyGk4dAdEQUjFK",
  "key14": "5cNYHUQWi7y3XNoVZvxRZiYd3fwuNG8iU7yda8sTzugV8s4zMSE5uBr28vggcXsUP2p1QBd9jFSmJUPfUZpH9CzC",
  "key15": "5LUrZykLPtskwVbE6PuZ6s7GY6nj8u3hcBuyVJueeb6pFsChkmgf4gqyyqbPvm3cu2EaHexiCwT9GSyhaW8GC459",
  "key16": "2W1nr5NWhQT1YgqmvEzTd9szdZC8uCSV4tucTuGnhnX9UTThZ8porah244MpZAkwyCiUgDRrqXrCFJ95AjahY2co",
  "key17": "2dR9hNfK2Q9wVfz4PNvw8UtFPTHmfBSAjtE6SUk7Ahn4jWhCDeT3a8koop3TvXFfJX1W1Se9ZPHEYEbx92Xfj6YP",
  "key18": "ZgEV3egPyeZE1ghxStD56UFpn9e1SmaexdEPX88cJbFsEUvtMEghyXjTKc7PFpkD1K6g1T6LKLLqCK5rdB5PBFK",
  "key19": "3fuatVM6oMkKPiBh9oqX6oPkUTfi8hYr7farhkggFULvpdP6p18bno8eCReFL3jDWR9Tz2VgyqVwbXHcr8VHmQun",
  "key20": "4isJ55UEYBTDpqddY5okW3jQDnzdLQEC1KfkFqVHHdTN1eJL628f2xSehyKZ9sySPMTcbhiDwazNujr8ZW7t16p9",
  "key21": "3eT5v413vbzXhhi7LFBRXuUkWAr5tbJuoB78n72KZCb5nx84WzWXCz66d1VZbF99ujN1Xo1ftn9BPofpjPX3rqxK",
  "key22": "5GKdqr2yMG3KztUATUpuTphD14b9Qw32f9hJrviVgZmuzVeEC9XvssuZdbjqBnfhwSEf4dW2AKzHNvELP4X3gyvX",
  "key23": "2dfkaFdz11Cjxx4y7Tr8ZygrQ5wXmxQNCzwPZCvrZ5NG4KzgzqkbeA2Ju3Ej6KEPc1U6TaHWJ6BtbmCRfSXsdZ6i",
  "key24": "5GZXw6wKK4LKdPzCv8rmG4FdiZhCApfUfeTePYfanC9TjTjVDruwg8Z62udZHHszUQDEMiiFxGeiqpHfxcG9dirq",
  "key25": "5HC19kZm5PNSJC3rQPfozo3ADJdzH8xamtGiCX5NHotHykgGVPVv3k6bHphc5fjWoWKUKxU8ck2Cirgey9HDaRHZ",
  "key26": "2mznLbnh7DWxKqH6gXuQH4qmdmCfjVHGp4XTP8nhkk9FqvDoTQhwFiDSA5TeAkjAqcGvQHwxwASJTN5M8e6PVWDH",
  "key27": "h3TpTdojQYR1nDR5vqSvsiLc2jjpVoeb3jV9nhp1KctbDbQhTjWoHf7FgvK7UJZryNyqAsrZ6HpHHZdN71GvKBw",
  "key28": "5wXKz93xsAMnNk5tu5TspeYXbaK3bWYGXZJvNKkmnVtEbqHZP4Wviz3NC45CaVbhizkuHsfryJfkAntBvbqY2M7d",
  "key29": "X11aNyY594r2zjGaVmrw3yQDidbiauthR29eVWfTxvQGsjdzDQ6iuuad3wm8TKH6ox9z4dKuZtZzv4pXTvi63MH",
  "key30": "2bqHKsKb8aQYi5mBUuN1zTmc5hA27SZMr8bk4gBskfYDS8u1fRHnDDWfwDEvATmUPYR7iTXg87np5kAmS55TptVr",
  "key31": "Mqage4eutkDt1QBw6vD9t52mNSwjoSdLb7aMP4GKNZEfZZoykCtdcfvqYBDtHUmRc23kV2ZeB9cANHtCipUJkFM",
  "key32": "3mYVrbELhqCmc8kJ88DnfdCNSkXowRsjYvB4sDpiwt8ei6m51md6YEzpJJ7nRw7Leuys6iXD5Pq9DnQwFBwbxJiq",
  "key33": "3yokxvdMzbbzRqkzY5vmrcHqFFDNxaNqzJ3ZRSEddLoEh2b2JFPRU2N9KjV5wUAGjJh2ZsvRWMfFNjBvZPhXszz7",
  "key34": "5L24LaRL3GrcW34ijuJFYiqpiX72W3hT2fF2dFDKzGkfPffcBv17cWurrZJwLCcq9tBJ8QDzzf9UgoeBRfNqhhmH",
  "key35": "5FzURkav1Tci4FSXBgAPaAkoCzupvEeWuSdk2GALnCZM6JMhHzGAmQZU39MZmFREp4XTcquW85LWXvXUdR8TpsGw",
  "key36": "4qVusMGqYsAMYAPB2TMhmj9AietWSFbDRS8vh8v8jr2JsTsMKcq8zmRM18NEJP28QNLoQAhCjC5JW5DM7ob2VW8R"
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
