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
    "3KgjBVtm8wHz6PjDychbdCMNB7TZQZr9yesLrRSnkAEHpvDkY7ohdg5i4eHNKehTvDuAZq7YaPGawus4PBKoTGfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBASytcdjPV6tCnCi9qBWP6wxbxEVwezgQ8AEDCcC5kyMXq5Q4X3TmQfGTcFb5nrFKGz9AgwMY9BYQuYmvJ7Jge",
  "key1": "3VUqFBZg8o9gj2JjtvA6fKLYEm5em5HRhYicoZwcVmdEBY8s8coQbq9wuSTwrUtUCXR1ER1yLjdE7LDfGgtqTds4",
  "key2": "5A9VCAqcAPLJS82d8211w6u15vi4xq9NTPQonJhGQEsF1Kv7VmS6eip13zrSiYpe6VEXTGdmmfvRaPZjJutkRQyE",
  "key3": "iwzeZiHLzyYJq2h26eDcd9M5shUnTjcTqTSs9BHc4seAtt86uvCYvRENMCZHrgXu6gPpTTAMx4CcSo3MV2VP5ZX",
  "key4": "2UPPG6yzBxzQ76mu81rKf3xLnrnLhGYaujJ9YXSaSqWLQUkydhEm5SeURuxL388RMrHnFiGPuZmVLoccFt7mQuTK",
  "key5": "4z4XNtqcxDBVU6o3ACQKPP2cioggLWWRms7UwxEpqwngUcNrG4sqRWYzqCjfZu5ZmpMFGa7DzeV3r5ADSwMQMFcz",
  "key6": "4FQb5p21C6FuNNazvSY63HzXDpLTnETUkeZZxWgJ1UhzEq9YZdgf7Lwmz3giD2fCew7bJtZ342j4SYRYaqReCsNH",
  "key7": "T22TXBCiwEkDc93gqLnfhNKNbUFk4GcAbFZuvnoYaMxG4eW95aQUj3bPvjNowth76qBwtqJ7oeEAHrHnDSroh7W",
  "key8": "2Lw8WdxqmZqsmv9x9Rb9EPQWc3PhtWaXoLm9R1ajckpYXsePMXLFcE8J8wD7Jc8C3F5Guu84b2zrR3jogQE5ffBx",
  "key9": "3WY48PLKVvJuxHFFhtmkPLfjS6tGzyafxrydfRUSWQmVqc5BdEPNYEq5LLwoDha7mkP1ggwWL17v5YeieaK3FZRJ",
  "key10": "ThDRUvp9ngkpzLSLy5B2GxPwnUqE6Rcq7H9HVAs28AD9GYYuQZuwb2rgaGxdCVgS6GUrFVn9brvhxFtUcHv7ukJ",
  "key11": "3PMKDE9i8DGzVCYk53AgEw5rW1c96xDYCFE5KbxVJgPfYV2SVH1rfsYrZ7Q92VaURMbjgPbVxSMwdhTkoyawYmZq",
  "key12": "Lc7hH8guHwFjgWrAARrkoXoRMNswG4Kh9mLnf8EeQMo8vnjfXf5PabRhEXPFLjdQVxhDB2f6wQm2D4xSbJ8LGLk",
  "key13": "3a8ARCFYE6pLc89ySQdFQLqCSNYk98gEPQZpiFaL2fYQxx8Z6E7SaFZpB1xnSNKioVmsBrE1VFxKdJt7Bk9QjCNt",
  "key14": "4zYm5BeKzN5vcUgbJA39JWnLsJQ9QzBhYsvPqyeEBTfhEh85iqGEnpzBRrtyFRVgEGJXRmv7bCpBwtvrBgWWui8k",
  "key15": "46jvdUCT7x7DBVutNAqfmxq5EkAaE7uymsTJwFYcHJpxvNhHHT3hJcW1dNcYRKSkfuB3wizgX87dBy5EECpKWjYc",
  "key16": "3H2JnQw2khJdnRhZ2jse2uvrcFG7KQqP7hP7LDmF3hMbgLP56jPAn4U8PGpCinh41MwoLp5kAq14o6xAkbyC7E1n",
  "key17": "6Sae6Trt9TB11BfjAhELDad2aBBcJKqzn4z5aiuJvYW6tuN77ap1jycLbA2cEGASosbzxwaWARG7bMNY5L99miV",
  "key18": "5XveFPAzC6cau6kbeTpjaKxNdJwF85ZPU25f9RHpBFjRhwomyfom7BeiBBCaZd3mMZJ6mFEwqWPAoY2zbjHH1qds",
  "key19": "4CXZnjXNYYGS2jWdoAeygxaRi9n1E4uVTCkq6SyJEjaZtZZKjCv2n1iUrsVRAH5VmiHuUeTDRrPd8PbS3D53ao9A",
  "key20": "3XxALTKsPqjDJaeAZYuDjCDQJb9m5yS7Fyzhb1pGA51DomxHtRhtjaUVAKhSDsfY6H76wo9LMv7EKZNh8dWavUKm",
  "key21": "3jyvqM6pr6irjraoGyyFAK2gJ7wAhQgMXbJPvh787TG8dBiAPDEwjWYV2GKXC1JJ72PhU28kbpCCYu13QMPWvtyW",
  "key22": "548zBt14szAL3rLGmkzxHJp6733kJLjv68awCzCGt1bheSDb3ga7q86gWM7kxuE4bY3MBMdJd7tXkwvA1Mcxy5gC",
  "key23": "64dfDmBuTcE5JhsLfVkb9heR3WdGCcjPAys7bZn8Bb4p1bdF69aR6ohWZkpwhGjb2H8ubvTA9uTyQFwKPKXSGETJ",
  "key24": "5yxyTwwPNjAEhdrVxvF5F9ThWvaMbJ3VFPQuFFGZTHPcvNnZGFdxMGpgL8jFtrdkTJauZ4LfHG9K9obpVFSMLou7",
  "key25": "49NWErJgTMZU9KFmt54Qrs4zeZrn67wKHv5eBxcUrZAtG8gdbxMkN9jXnPYnsv3uuvVWNciAeq698nSdnn1F5jc6",
  "key26": "HvscTihubiPWouDyaYDYFa8iWZWVQ3zFYq6GCGeCMAoVvwNWBWjFRzshKjGKELEN3AEkQtCfxnDye8fWAeN4CZ2",
  "key27": "3CTqkZGTV5xRBddADDsbWh5pvRaz9UXo4sWkvryW8aqC4VqKE7z7Sb5KcWjgvhhV2FSrDjzEkdB7B59JMfMVtE2i",
  "key28": "1hN7xHEVsoiELH6HH5wZ6KVxmuZNyHgm3yxJKtBdwHQwbSsa97Nt2iex2V45Pt865359HfQJnCwX282rgfTxAzZ",
  "key29": "4w1nC9D1DdZwNyJfe3MefA4LSfSuUUcuXBTAu2AsQztPVP2kY91afJxVK71mQ9RS2goPaJBHxhsy5Vo9Cxj9WHey",
  "key30": "2zxDxLRJ26yyYW5hSZJttzYb4qWXutgyTpQvD9WzcoSyQbNphd3brFTdt6vLzqnmAGzkDSZVC52vo5WogshQSF1D",
  "key31": "2B4b8dCQTWmgZWFMjVw5ttSyCocpEY8Vmk5mXWGnsaywdA9AzkcpVHMsPRyFjoyxMJ6kWCK1Bsy92EBmx838RApE",
  "key32": "4F8mXLWaejqgkbCgHCQFaG6ZfHuYqvYy9eD8HuP1gzz8XrSaBTo5iWbSBkpAGwY6iRYVxMiKpkPFLnKb28A5hfmd",
  "key33": "32fdawynjZ4RxNVX8PxV8DVMnz25ibRVroDo5murLtrkrKzJVc5BtFdvxaxLShdAyFfofjPeGY8pEXuFBWNThzZT",
  "key34": "uQU5SZshGY2gK4vSP5pLGTiao87WYZ6LfsckLpFyQLtWxXvW5xtErwwr1XQHLxckKipfpTMeWAZ1ovm1hjAJJ7Y",
  "key35": "3j3U2xNHciQPpqocHHuE8wVjdaGBTfTdM4vS8Pj7d2WYhXruCFrG8RQ3Wo7GD1LV2hfQJvHnWm8GCWpsWCcef4Ej",
  "key36": "5fMZ9UY1ZutEBF7AgvaskCBE7zc5woJYQT7ZSanqmJzWb4H1J4t4CHu3rLmY7AfC7mjuqgGe4BPo75Wo2HjN6kwB",
  "key37": "3UMMmGmLFUEsRTmWDWrM6qpu14VjPh1o16JoRUSD8o5PeTXGa6SmDw2LJRUzT4DUjyyMcAzsyZ1kLG7kRvD7HTQ4",
  "key38": "2uu1LYC89XS52NTCpdmp5EBCVeWLp5Vnb6diFrdvdPFqb6B5ZBHy9YkRnHSh84i9J8WCL8mEtFAxUkJ2PFdNKdB2"
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
