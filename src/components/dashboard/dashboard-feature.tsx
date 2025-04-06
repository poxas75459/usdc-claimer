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
    "58RQ5bqmChgtkbU9ZYU7xEYcZakxihpBvtj8hd5bJgw8UVTutfrKnGGBt6pN2sAVLMHkJ84cSTxGoURzeqsJDUF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NvHg65XLZZbATDLDYAB82qJoZcg9fCS2wKx6bMjvkeud1YLbS1W5vuASExHpKgUd4TkeVQEUeTTv6rZRsxin87U",
  "key1": "2uTQpUMfDbTyxZx3zR1zGtZQZ9NeaAgoRTBpR27fkPLFZZFXXmAchFjHifcYbgEFT9dE6HRbspZvqDMFi3N4xENH",
  "key2": "4bb6mggFf5jHeSXfCNrxXrwsqiseQL25yA2wg1kWuozDqE5uxKFYWXKdTJ9QxfcSpTdRRanS3YP4jG3rN4RjthPB",
  "key3": "5qL2RHrhUYFD8PP4ZMsZoSzmkyboP3gVaLA8QYNyyzvvH7A5ucxb5R6GM9hbjbZrSZ3hUz71A4dFQ36gBJm3KBpy",
  "key4": "3fYYzJYnZ8iWEau8ayEsbVv9xTmNSg9MC7KELH5bufgPc2NxFyfVhd4Wzym7wNCJqfmW3BNozAGCbLvEST6scTNR",
  "key5": "5ikNSuhr3rJ7SKxVMqGu7dJfe1wJyUNNU5nm35536eaVmaV5a8wUYL9Y765jj9GRWSJyaKDeRy85CkthFCn4U2yf",
  "key6": "5LTtLu5ZDtLsR3Q6YyNRujVyePbT7bjXeC6wAFre6mi594yYBVjbtspwfQWbWBZb5TKT6Qw6Q2suiFb95LAeXyRf",
  "key7": "3sjH6G8dArUcYjr8ZGW2gFYtn3yqtgeiBwyzd4wVK8ardcvK1Rm9g64DxVG9QrxYnhj9jgkDnCVXbfJ8AD5Y6Esb",
  "key8": "2bkQnSHxiM75jJwhoAuQ9QiBdaxaxHrDtLDhswzsmGjWztxZNgcBXe2Bp8CEXh5Nrf3RcVJCgobwokGJ7puQZ8sg",
  "key9": "4FWxg7TMYehuEJRbCaUWjAHijgLi3wS6G6KcqU6jgEVCzCgeJddtMrwFDkVdHmJu1ZtnCTHsjBVjJwGWWRg1D3ou",
  "key10": "4zyYy6wiTn7zkBKXmT9K5koradvP6i1R2ELcEW4mKyAB9vtCa4WGrzTzhvvnEmwLd5Frfybf59V2VTpX3LU1sLqD",
  "key11": "5djeroE2mHcrHQckDGLJkM3kfrxTrYA7XVtQ6D2ctZnJVBSYwcmJFGD6pu2euHiB3SVE2iY818Px9A9HzE5is2dT",
  "key12": "2rE9aRyrENWEqFPb5k2WEBCZpYHrYEr5oeCsCDbhoGcvutPDS1nfxpagvDYk1NeH9cXQJZCtedQ6PSsRLezQyTKm",
  "key13": "5RLDQtCTZpins11g1EY9LCdtbm84bv14Z7jKzqumEwCXNpeytyfdZLSBaxi2tateZWwqTqEB3tY7hJ4hc4piu9pB",
  "key14": "42WNNW32NQ3JrBbzYvnDvwx7BNkf8mcs6vceq8aNsmJX1j9hWViBJmqk1eWVw9mwghDBGsohVVZWJGfn9Rci4kao",
  "key15": "48b1V5a5VpLyAFVeQokY63XRogss6RmUT85iFgt352CMWPHDmKYByb69kaRcDeL92veWDEdwSeXGKqiWYkS7eCKg",
  "key16": "51xnonKRwkqNHCKfShGF42ZFM29Kx18wWwi9MzzpoMAXpK21B7K5KCzdJyjrPqgJ8npGfv78iR8i9sfErTYZzeMr",
  "key17": "4NcoQsFD9F4Q2Sng9fKuRUaQ6qp66HCT2o3WbA7GJZdEnWTtzpxDrKsmvr4XcjPXScCnhVFWk9ut9rgnUp2zeL92",
  "key18": "ooSvenh6R7XgZm4WEeEg4u9G4TZqPkhvSax1m8FXQKXzKRgcWeuB8oLQ3zsQyWkNPTozA37UYKy1SBN3u3VtWde",
  "key19": "23hFdFvZBVLnt8ouKoadBxZyqFeQ4RrSgY3xCg6a7tRd6vByzm5XRKQFmucqhZ9bTqRZExR7okU1ox6jt3Zowugt",
  "key20": "5WP8J3bztwNHvfNuVTymTNy1Y6xtDrek4qSF6cESYYvnHfxyoYQhYKNPzokrpgSNPdczQDRNJyXFAuoPRfecod3g",
  "key21": "2ktZTNHSdkVE6SAMFFT5yzwZyDaAF6N9yMbSCcQK9eo5UQrsAVqSE6YpZuvaiHJoLWgbW3SzMkmUeDp2vFbUhGQY",
  "key22": "2WYt4GwHe6vRi9v8gDmfy5QHwgoPJCuuhc5hcAD3RmEznePuXLTMn4wdwqxEK2TGYJPZWF6JS8R6JBjDkAZ2cALe",
  "key23": "453eTFGiNdcVJ7MKwgSZcALsrzZ9nf5J1kRSbc3csEc6K2QaYVZaVNgJGiUs4vrmXGUnWXBEdCr18i4kfGwPXHSe",
  "key24": "295LALNDYRUychQZTeoMVinWw3ARuD3oWXpDk6zdwzHoVwaXmVh2qhHFckTGGHEznWCZd3BSLnebCfZnHCjfnMTY",
  "key25": "4nim3qe55T1ay1bg2Aqceqqhf1egCcfWkyTLpXuKSU8FdGJoQRPVaTeypxqjC1SduyKP3MSFd9kTJ2av7BoRDWtz",
  "key26": "2hAmtYCipaNNnNtCYgazMDooy2Sd6mkQohv8LUdWjSKss2FRdJMrLHnDutZyMgPJzpoGwAE4X4xRDLic1EQJjydq",
  "key27": "wXsXFPX5dUygrEYF2k4gnvqqa16zrBrW7R9XFDQkUtpJRrVYZCNyLWhN4rj8dqvUqGf9yHpZKJbr3ot8yi4Pahp",
  "key28": "5fTK3Lf6EXzMyib8QFT4FdpB9mr5Z8u18RErdAd3QGzLxxrEW1uzaH7oHcZUo59ySr4WTys14TivB5m4JYbboTvw",
  "key29": "2GexMivYEMou3SVX44UK18gsEAPFKdHf1Z2hSun26ZAZXYymZcUFGGe5F9re5s53nm2M8YQA9xo2A7SQPET151E8",
  "key30": "GqyxeNMRX35RfxdQaPFDSjWnQa4KVBw7aqduDYyMQqYuhTEApNU9RcKN3t1U4Q2qaDWo6sM2RdF3cRTWR5NMHSA",
  "key31": "5BMeQGHqvizAcrbk6icohmfKDA2XHyZqULn54hax8VzVJvwo6xubK3cDv9Q41esq9xA4B9pqt6DJCaijXCLSR4ru",
  "key32": "5y7q7ZiQRXqHiYqZSVBtTwuKYfm9E9fqwdhHZzszoUhM3RoGUpLvHpWmR5RS58KQV5vfREYt5Z3yNCGrge57TDRU",
  "key33": "69Csyr35iMZxiB1p27D95guTW8HdzzxJsbkp5fXXYaxn7Bhxbd8kQ8gboQy87ttrqU7ajujZvjZHgyqpfdGj5S2",
  "key34": "4Mk9vtxqXm5v9HjFu7x9K9Qt6s9AjDWVHGNsYo2seZbBJJ52qotLpvuYVET9qcrBLJMPok3K5EyLTZkycBsszVzD",
  "key35": "3zgWvresKHHFmw4xSysvcqV7NfHgN5WpAGW1eCvk9VZRisoms4i1JSsKd7UYvqvwWo2cAmnkqQTYRNonByeYtZ9z",
  "key36": "24TAdgD5Q9bCH8dmPoy9jUJSxeoqAd2zPDDs5zQvq9rWwMWAzJnpeV2rXrNQuUpZ8ZUZEHzUmuKiMPk63iMUm4eu",
  "key37": "5iTS9DHr24A7iFHKfFdsZrVgeFbfVGSgz4HYpvmtPGw5DA9hoQ2HaPFvTTDzDFG65e5AEzUfWf3v5hxGfWS4Y6rE",
  "key38": "y27rGMVrX8qVYgSBjHXLZ553kx4y8qQr6BNrpuYJ1DwDGHBT9KM6vhH9ES7SYxgziAqBmsKkzauMTiifphj7fWg"
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
