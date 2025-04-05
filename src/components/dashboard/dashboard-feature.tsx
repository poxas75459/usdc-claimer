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
    "2hCZBov6jxQkwYffmj2GX6AUf5YSwWpBQto46za6UN4xv1ynP3McsYTYnt3y3Nh89rg1RdE11dYHGybXtiZQ4Qfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8SXBTdS6vNfRGzwju2ATZoxBDvVRagQx6fiWvt9DciK35g1wFJjcL13uCmwXnnLfqz3hGLuE8FNkdH5ED44TtW",
  "key1": "5ZVim5zKYeCEc943s56wWVdFQff4oC6x3LctbeUVL8J5yJ5MFNbNL64ew52MdpcgnNmoq8Kz3ShYuY3Ws4A9m453",
  "key2": "23S9oJHvMUtthfp23PMT3vsAHpE4BfimpB9CCXjKRr1AX9KpJc1bLbEGBNJTKYpXLaxsfxct5B7G6TXZmwb42L25",
  "key3": "285rj64eRZbapNPFyctrPNPr6qXmCqQ19yUC2Wted4DrLC8THzK7z6UfD3CRjZBS4dtSuNgbckD5WqH3dDAiagZE",
  "key4": "3pzSJacBkgZp1JaULyYhWFvqWyFr7Fg8gmJVScsyw6ssqUWQN3cYDeusbRz8XJ51y6FZ1ozNTZnf3dcb9XwnScoA",
  "key5": "PoZatRhTqJxkSPQ7N3hj4voyx4UX7PmiXhLMdjkXDeFC9WetyTkqZ8BJuZg99AcUfNJT2dx2Xo73bjkpG2EUYUP",
  "key6": "5Yf6LJE6iGwRevdBUY9URkwukDSLaxg2yqZ2h2NqCyvYKGshC65j9ESERV7f7ZgFUuTPhACDETY6wkG6qDzFybC2",
  "key7": "4ntyJPYFWzQsQcqRN68HwQyBHdgceC1vyvDMcymqhJnfeFpxSnMGf7t4V65M28sX2TQ3bDbsmGzSSKVHinFVUT3j",
  "key8": "2wB7xJYTTpfvu2GroujnjPmiSPutSidSpTfvw4ai6KzvRUwZsYSAqhLebZWjx21JMUBGgDRD9DESVMHWvPJHT9MJ",
  "key9": "2nVFoCmjp14msTEeFMuusxLc5aPmz3X9y8DUEtwYtcwNS2M7nxUabUETW2RvJ4cF3yLV2D9fHkJg59xjPkVchNBJ",
  "key10": "247g1ior4A3BUzEtr3xdxh2oDoyheG7rwQW2vmwsBpM6tHEWYj5ZDRJCtoFEqQVXpsa92HQBAmLjYagG77YzCU47",
  "key11": "63ccEGFma1mZHGMDu5w8NASENEJkVxMkZV46n3QH1oWv7Z4Ykn6T4fi5kiJVphcdPkcbAZjy8ECSiFC4a9SSkjP6",
  "key12": "4v15iynd1U7i9gn6StA4Yo6gC1erDu52EGEqqUSSUqPx2jke4KWeXKvSa323QDz3YVcG7BSLqXF9EoDvQAU4HQ2V",
  "key13": "VDpVWq7ZzMwmJWYVnL7k5Vi6ZBzajdkkNisRA7G62CRAXM4AaZ6BZAyQYF9k55aFiD3iaGsFNRTWvt8GRwfR43g",
  "key14": "5DszmK7MuKRsr8FSFPratcGJfsNMkZdSzQZLFdooVX4yDpgP83B9LCPQRtTwnCafp2DfKp1XvPPcYXJxk1FhkNNJ",
  "key15": "2e9LcJ5i5XgFSqkTViw27xjg2H9tkf2eMwC1iUQBSxxD6JqyVwiWZTqK8pbHL2C5x9XTYmqGpE46APi8zkXYQNte",
  "key16": "5gwE5RyweJvqvZjLqEYqLN9SfBC5QcKgeg24FautaHJFRd924ne751yRNDpmoMjtXDuFKeQuVW1QctMhDPcftVeD",
  "key17": "3gD5ccW8ovC8w85SXGJCHvhNtjZNKsbfiJyvKgNBzEYbXKcXpBRKWVFuu4s2qQ6ejk48LSZ4iVLs2jrDDe5KRfo6",
  "key18": "44MAkiGUsVqBVRyne9Pz5aYmCa4uJY9ffEYCfMxFGNAdGDHbVCsk4QNeHTtmLrWENWc8q9WCcsnL464bYSPUv3s6",
  "key19": "2tzWEqsS1Wk8uJAYVFr5hnjCeyMzYzQN3kSySqxzC4U7AEVZjfNXWvqphPpN6TgKibQ847YQQPcWuZqswk6pXaMu",
  "key20": "2KLrPNufxEuqr6pAT18xb6Hq39Bj6e2BAr9gUWG2Lyajg1KDh6DHH5joi44PTTDTo8XZ1mWBPr7STsUmSv7z3H4Y",
  "key21": "2aeP5HxbR7LphRUFM25iWJpfr8d2W67S9vXFavtKuoc4Qv8fj1uFbs66aJAqA7oVtRLqh62d4pYYNMLrJndK7Qws",
  "key22": "3Qc6z8mDG1xtgjWY4FfJfArv9PyX4igVd6T4wJocq71pysvdNQCqyGXNZNdkkJkR3GNpBsCSk2ELnd7kYnG3yCAR",
  "key23": "5tLqCSXQUodfMRiQDdgt58ZAp2iuPNgDnFwRr9jUctxgNp5D5uoRTwjTiLw1hz7zXBt58sWzKbc8BoKjYYtjUJtk",
  "key24": "41vm1zYXNPgKLNVyTASaiWxJw9ABn4x4mP62muFdMi4hxjwH7xMpiEdU9bZYao5X6GQ4qqG232Ak6oGvr9AYyydE",
  "key25": "4GgV8uuDA2MerqzgKHeQBbeXKCP9SjfPc6j4GEwKR5YY4MZ1ioDXVUp6tuyawkrv4mnEZugQ7K5ye8godqSqhHji",
  "key26": "RwmvKP6Nw8EQWSN9xwn7rbjSq8CTHJB8iUgzXmnE5J3pj4qYPtFQHNre3LJdh2y7MXTUjsoZjDnXb4Hsi2fjrWS",
  "key27": "3inuQr2pydPtsVNoChSuQzsuDieEtxtLx8J8mbvqjPsWWfsBMQAHn3Ce5jCPN37SkEUEfccaYiFCHk9aZvsrR9ZU",
  "key28": "TxQGdcFNMqorsrm4ZtDXFgBxyQrQLhCFSTBaHQDsxaqXPTXpCDD6Y9b5rdns6ypDVEMRH9TNxPc2dSxSf2d9GXc",
  "key29": "3cBfrmmAv6wF7vFj2xJVzQB37A4VytonTA5x288LZHbXRW4Md2g4gyJ1da9zUSWEDctnGs11KnpxSo47X5VUfn4n",
  "key30": "2FoNDEH7QzteCae5kfWk5uM8GfPCiJPYjyk7TZKUDp7SPPNQcUBRiUJCe1CXDxnJXdtRMAByWkgAqsVHofYkvKCk",
  "key31": "4hbzy4CsFgYcTVdW4jzecswc5NuVZeMC7D9fPxX45E7nJzTsYEvp2o6dQA8jTwfbQ7LsPp7zP9DMUJXK9ckzye9k",
  "key32": "568hsSGbSKgRBaZ4QHqdtSjxzWayyqoDWPAEeicbZvCbP1j8vAKxUbo2gtcdofTpYgB7f3UPJ8JbQettdeq9n5VE",
  "key33": "4LSQbD3deLsihaT7vaK627pyK1CHmseaVENxqLGY2sV8TovTN1yGDqVSk7H1U6GtJDLY7NYqNeZjij5e2has27Xt",
  "key34": "2yQrVh2aP4FSU8wDC7NUg8bY5co7ZV7D4YUBJx8QWsgNBJPFZ2Xhb4nbxNETRU1fi6m53PeiAiCkHsmRLKRanAhc",
  "key35": "3pWwLjBfz5a5dPEty9JcCApBnKE3rPNiaSP6nVwBMKqFekUVYahz4bjmrfkykUn2tyyD67xb6uNDb7J1c1gke1QS",
  "key36": "3aawgtnGzMUV64unQFH8ppTg1KprkZ2aWJ1FjrGsxkU4jvgeXqHadUUa38WpyxUtjFzEJaHQsgHetFL3c5LL1C8i",
  "key37": "4G7wQ2HHznTGyvakN3k2nQZVZ8x8mzN1LHQULpDGnmYaY2vjk6XxFAjeh9dqbAUTgj7GnAUbTvNQD7nN8Lb2RCGQ",
  "key38": "3vRyeoi3U4jDcGCJ5GZjysZ7Va9PG7A7r7eEoa4S5GKrRhdGHgTbpYWWgWgNaTx82xcgkWLAQ9wiKFRBCkEKXroE",
  "key39": "4ubkYdymEFC62YTY3KP5ERL4P6ACSo9MqwNZp1nWFRh39pSA3jGcBBUUiPaiLM7EYExqQukT1bLkCx4Xgzf4LZYC",
  "key40": "2D6C5sfJohuxTkeVfoin18aexmrRrYi6DTWtNbCc6LdoUspDyiW9xV1L42ykHsUYxecnV6r7Uo4hyimQmQA3ket6",
  "key41": "3vB434VkHm4zKTiHHyXBbQkHS6RYbQnBdFn8R3BBSessdiYxVbyUR5U6HQRvpp58Tt9QuLnpyD5j3DhaXaXCs5Jr",
  "key42": "475zzGMHWPD136dtSdPLoySk2GjLkZ9Bpfoeu6htph6ctTrwCcMyuAgXMWgZWc7CYgQxbHFgxoLXQytxgQCYHzi8",
  "key43": "4fju6fhKFRxuGxFRoLxzAhYLh5JcvXurML4SPZju5tv3xCKNQN7GCtV5jPvksTFZtv8PJgNPq1cDrc1jTYA9Zvvi",
  "key44": "5pzggZRXU4PihQd3t6eZQ46UCGme825GBN9Dmen2JMnAgJrzcW6J5jjsGDzMkp7WN8tf2v8fQYFeXJJAokDPjgtW",
  "key45": "51ZwP8yvfSidkQYMNJoKtDyB3Z4wRTuAPBPKjUfpzkZdebxkjcspPEhPJWmv6rJUZ8sSP23XRxgybCoJEW94D3gz"
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
