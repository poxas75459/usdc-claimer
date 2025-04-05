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
    "5KAoM9vJ2Via2jbE5EWypmAaNdi6v4x6HSJJPYmRfU5U5jxjbA48SXaQ1MovXevrdrYpCjLpKySn6qJBHfBpm85w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5qPH7eAqr596AHeFBESzPJcRUipcbpw1iMGXwipp5ZbXJT4ZRt8ZMAKiE7CVSPuVserSUcZUygUkE5XCxC15wx",
  "key1": "5WCCZtP5veZE6BjNwHuw5QhCcuXzmqtBey66EpRqDBSg5PRU3or4s9TSNWsYvHDoe9w8qRgJP7sM92HfuSvvef56",
  "key2": "CtXqZHYXmNR3EpiDdDiruaKE2aSpjiCC9uHCoziRwR7rPhBorW8izf9h8N2BYw5XYvgW8iqrXzuoqE7F5tjQZ4G",
  "key3": "24gZFqdbgWDLRM2EaoV9esbEYzq2cJZbT9EBYKGPY9uwvkCUu1n2E6nqspPjUwJNpoWXiBBs3DhKMcMUY9r3aKJh",
  "key4": "3ELZQ1ae9G5BE35p26LoM67x2Pwmt5QNNAEs2jLatFiYbTLaXneLfZyp8J2UenzA8o1p58X5ZnKFj9NKXujbHs5A",
  "key5": "3EksgMVMFVDwDV5hBHBAwfGxu9nL79JoFrm2yWMHjwhvRu6n5XSv3JKRwNtNnmXEhveaifiurRsusp9uYD6LNJjz",
  "key6": "3NBx2VQw2kFsZv7Trj7vfktz2Kz97H8SwQXxT5DmYZoxjZuqzMKzu1q9mjP7GD6KKdTi7RfG4bWnoKbeS8AYSH3E",
  "key7": "4FzdJs19BxpoZgrdBUW86QaquZTGEymjvYMcZgiqL24dzBYzcfSgN7ZAGF5M8115YxdoAEgJWoPsr2PVw2n4Mj68",
  "key8": "4tJgdaPTS5x6pFTggCBkp8DyYspoh7A86Dzpvy3T1o44NYc3Cy5STLMxFKbXkRaVE5cyDyUrd8qG2k1LFG2RU4ip",
  "key9": "2muzp1PjhU7yyR5uJfBCA89cEehSgXvfBcYdEthN4PbivohQjdtMKKAx2bqBs73T72JKJAsHfyATaekygrSKRQh8",
  "key10": "4TRDgh8ts8899qQJqB9zkBfdGLxNGhu3N3Q5X9wjc8TNEsiJzHfUpFzDA4PDDJofiEwDMZKAddw8Q6CaHPuLpdxr",
  "key11": "sfkKz9autAFrgLBRPwp1tVdJimtrHxak1WzG6eusLGtaBTRRDAsYDnXQpC6aLmidSqJA7tNniKiGpPAthjfdFX9",
  "key12": "zYRUzrfT2RgyfQJWDDQdvCm1ArLeuzsUJZ3jEbLwwywVBLDrXHWXigszvzhcFxcwA2ZMpyecJb3ZH81vQPv9sj5",
  "key13": "66fEupYk1AkiMzJzWrhah4AvKkKvXxyGJWUbDg3e7hHrq43tXtFbxuMDcRETPdtiouYowELa7NDpxFTLRSJS6hZ4",
  "key14": "4hcqipVF55cPV1YFwwhfX8TiiMHYMUwXsj7LCLt3Mod8YWd2zUeq6dsUU7vrV18S2SS9HBV4TgwyYumWyY7vfbTa",
  "key15": "cCy4UH6f2qwjhJkZT5VrdKq8d9okfYpFrBboBHhUu4Y4ArAAMQ4Dwed1wsw96Lev6yHmgdNoWKZK76W91R22QkT",
  "key16": "3crkHVbwtUHU3LM3fLimEjV7jmst8HvRtrHB777dQ7XRhw1dypiS4nXPKMxgscoyfksZH4v5Hj754TavjC4uxQiC",
  "key17": "4YbgoY1zjEo4nTY13ArzDtKMu311WHmVC3HAAJzD1DR9UbmWv3xrWhvfXLV7pFkBXwv4d6s4Yy3CyuGsPG1MXW2",
  "key18": "2yxS1ftwkbRXWNzNUxybGaZUuoeak6hb8G8JxDsu8ey6Yx1vsMStswBceBH7Y1uyQrrgtqJ5bMhbkT87NF3XYx9X",
  "key19": "5earrHfP2mFuTpCtCi9a1uretUSipBqEAaAtZAzYhrkVi5pegELWxdNzD95gZNzLS2VSP3jnzUtCHvKn7czkGc5r",
  "key20": "56udKLiRXTB3ADLwMHCcyMoenkwf1CuiBCVEFoCCjq66VQw9hfKJ7wjc9B8xqyJx3KZuySdQVq2CzVF5Pbs3iXzA",
  "key21": "24q5oQcfDDfypPa8NF74uQ9MpGBfN4bd6yGEbiY3iLPhcoeydfPfCpheVVKoU4NJnswfNLQ4Wn55UqVxzCbd5UAo",
  "key22": "3T7i142fSwFUzRv8rTaUusxUUggS5QNNu6kHVaawq6WYRw8CrTKhWT9vfMNWCQd59BmGk32EdYuv5uwfdc4whSD7",
  "key23": "3JvTfNzt15VCADQfLLJGUokRZJdHRyGVH9vWHbUw9RYksTVN9Xi8nPDD8h9JvKL3C3oNjpXdFZYNPCMgPNPJTUKv",
  "key24": "2ktSfwWMfpsd7U1GdxTxQuy6Rq1cGnCagd37PerqpTdJZCzFUJKvARw9zBh4hFTh7M51kuzB5p9HxCEdRTJDcRop",
  "key25": "4pfbeaBTMaoQ9ZyAk2xzbpocUVvDEt7KVJDDoL4c2hF554JyqyuwvywzKGXLraMgcJNXBN8vpxYPjsvwQ9mo6zJe",
  "key26": "58GzUFJ2Y9NUzujKhcpWTyEhSTZPAAW9PAEV26sZtZMLac4daRXupCthHZVY7Y3hRXEVHMJrcFDq5Eej8pUJBAch",
  "key27": "3F8xGQAtJzqNbeYEG2grvJ2deMC6BTzjw9QR9jpj8agciYPZ1KUgBNB53Vp6XHFzeRtztEnW6cE4YhnghyeiPRQ3",
  "key28": "45cjU8JQCkmb9rBvzYXbD22ZZS8qU39nGuh3oGT3uzwD9158UFFeJz1WXFsLd2wsrSdjwZdqeE6Gjb1nhHTXRzdV",
  "key29": "3kQJeENqyfDrayTzNxTfXDVTG6B4YhhsNGpSy14dwsNRLEjmMewEjkC2yrej7N6mUa3mWJME4SstcV8wS3gkvUoH",
  "key30": "snV48C3GRmSS73JouwgfafzmZYQvFsBtYSPyF94kN8PAn18QkESrEJGeQzn2ETiXbaZhBcseE2iSx8TUpwx91Wc",
  "key31": "4DHbDnPB1FM3TvKt8bJCSaSxhugvF1DBqJkSu4dtEAuczSJuuwivrTprDERQtmkYRh8o4MtKun4nykHHLKvZXGyy",
  "key32": "5UHbE2DQwgZLycw7EJERwCkLcZM6f9Eha2juS1WCRFtpw4uVNbjRaEXLkEfufUw2FHTtpYEuHu3PTKM6QWzJXUnK",
  "key33": "3tz5NGRunzFcLNwHrFeyevmc1j4mBMc1ffYkyjpTm6HVVtCp7QoLjLcFH1HwhNzkzAggGN4tw1UJW2zQ4LiXrfos",
  "key34": "32AZzipkcEwHnuTaSLZYoY8y4zXweoHTeXcgt7Abottnivjs8QBLYYagRTZ6igLEaaQgmMqKA6YxC27ojUrPutpr",
  "key35": "3jLXifcXh93fow6P2m538XuevRByV6gsY2dxkJCPmJk7ALguFqwYfokabJuz8J3b4TNYGaEqAZvKnjK5FjDidR8C",
  "key36": "qL1chhRVMhxwwS2sbnhBKXpcQ5r33dQB83h5CZRuKBQtoSNj5J9hYWSRmPNhJrNrKXuwYJ8qvhmozud5MCu45VX",
  "key37": "2oMur5kdVeeaFsXnUFFpaWGidv467366gSEgCVVe36PxJHJDpLYnZNmJt51Ffk8PSQ5RBPCQBD4DLh8fsRYaYRmo",
  "key38": "3GJiePzpZZDaxSvXJaGT4yCingXSgeJewWJC7LSkN4TRxPF37HmZM79QixTNp59maUGaEuc9w6nxVztAebRYmzYf",
  "key39": "5jm1dtVZ6Y9qa18ihe6mxKvzenRDWzYN7yWbzvp8KQSJNfg8RpQNf4qo5J4zb2RJMypnyt1mwXTY5FtzhTkutRyV",
  "key40": "4ujr2JMGMDt25G54ron5HR47BDNKQzXtQwyPzhusmYi61hYzU1eVQS2HQgHKsabNEaBirQdAdaSvgAPS8obrbn7M",
  "key41": "35XYcjN4JzWnbXoA73jXgVuT5Z6uAQjUExJeCQqf7yZknmJkrMYC2FD7rkekhPAAWY9Z8rtcWRvpiZhSzPQYeLrW",
  "key42": "5QKPEDungNMZKQc3ikKJvfTorwrg9DowE7ueGfs6dA2WfuHpogh9FoSEAPTtHoxiBVAfKAYMJa91JGjST8urcBtk",
  "key43": "5Sq3hDHor7CMNgE3veGxjeZwLbvgerPcUofyxpJJ6xcidY1Qyfisv1WctsqkGG5PDU9hLQXNpMf9M97SKcmif9AE",
  "key44": "2QWNS3SwqGzKsjD4CEKquDqWR9cXv2Jq5wgX5XXjKmQj5ingPPguBpbhciwTgMUPD6FzpXvXdx5KRRt8fGyzjJLE",
  "key45": "4dvozcgs7CVjJbeRkvVbJQw3jS5zWCvfHWUijCQ9F5pqMdqpbM9hykFdSd4KsxS9KK9DcrJ7Y2JDtPm2qRUMycW4",
  "key46": "5Nvuk8mQz8ASdFUVpgGaZ75shdw98PTeYbDwPBcizPt2ds13WfWAiYkPFmbRpDeM8Bq3EnCXKXNp7imyZWtWGirf",
  "key47": "5koLsFrPouCDaPDSTpdr6UgpUC23ebpU39U7Bi6FfStsRDc1xZ5BzoR4NSYm2jtYG9tCUk1jNjHoJ7mPoiP9JLkG",
  "key48": "2WWh6x6Hrp4wyitogUhe3HPFNPX7BUnrpHPFn52mknoFubsfENe7RBqxVyWnY7HYajPsQfHzfondE21jrh1iwCTt",
  "key49": "3oDneU2AQ1sKr9usogo3niDz87K1be1ePsLLJeDN67TrF3SXrJJ4GYFqv7ufAgM8DAfKEYg6d634BH3eSpgD5KBQ"
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
