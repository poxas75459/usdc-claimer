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
    "PnZpjMoBXMHw99URw3Ru44UyJnbhrABdXrKPFDtzTCdgT8dGm9nwWdAsL3FE3DzntpcHNFx8fyFySjADQFqVram"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXJwnWkyFQyozQBqczRvHwfWNAsVuenxyq2xfyx2xPfNqEa7Dzhvtx94bR7dytZQJDLkAvRnshtBEHj2cvzgygu",
  "key1": "gV6KzSYUU6TpP4oCRxX3FZKFGuux8pHARdykVW7w5GXcb5h9XbLW9qEetaVZtMisVHUPhNeCuZyqwwsYhwu75zJ",
  "key2": "3kvQpjM1wBS3ZEte2eZMwU5wRTMtMqsdSHz8fzH2rJLDWTeSonZrwBy2YRwWiLpnxxqfUZSYA51aM4QDYu2FmAJ5",
  "key3": "2zQjtxKwX4XsCYTeP7tFnw3BZPLkxiWqUD57jvTszY6n6iTa1cie9c4c1wrZKSJPqPzFxzHWHyCrXmqAUdgvyY7f",
  "key4": "535se6vYHnRdAotdavpfjjQCdVCt2qA5Kro9zNQbzT8AnGrPc1AAkUWpxVvm1boQoopk2bTFSfjXzfRmE76Royad",
  "key5": "3QEin8w5F5BqMJGWfjyy7jppqTvjvkMUaMdCfKnh65bcesisP5C1XkHqobRZjS2y7zvP7YQAQYbEXqfvKiG42SGH",
  "key6": "5p9ChLTtNjXfx3jTge389HJzU2pHbQL88vQbRyLKwacR17xU9Z5t8SwEuGmva5miyea4Nfs46qDrVDwxjbzw4vLW",
  "key7": "3H5QspGog6ahvkraJ2qbF13m8Y9DjE7QqgF68eM1xJ2M2Nb7FcVcDgmnVqK1GCyfGDbEPd32J3a5RyHLq77nNWDV",
  "key8": "4F7n6qxAL8hpKXMAr7uxX3eLLSUX7LTPktQqtBgvMtMYtrkVQQyNVdt34jYuSSuzAJ8apoJE1kDHEAnvzrk1DSB1",
  "key9": "532YZ5BDkBXGCjqwvvWHNZdLwnqZwd3cdoMMvGLLAX8GRZ6v4wuJA5Ph4siU1iB3uhk4j2MYTgs3Rdt8nBGTJCHK",
  "key10": "3pGv8b3idue7i17MvftNr52YRCUDpoSgV166AsJ8ATM7MyiA3KFs1uFaLzVYKg23qezQmRjEztMTyjFnHbsVSvao",
  "key11": "4Wg4ixYJevBcf4yoXF4YcSEodWq1vKUE17YhaV8FHB7rFkp4kqyZQMCfmdyDznioUU2nWvuU5NqU8yK4J4kkgyhc",
  "key12": "2QTUgNTmT9vQjXrxXvGmG6zkHavW9eryLePg7AF9Re5e1jgxzUYP644Z5wq6W2ofMGPf9rYoz4BhP9F4NPiPT5ng",
  "key13": "5Ta59aDf8yQ1i1fERuPH4Mo45SuEe7DsGMejQvv16Y3ygxKx4QNLo5RMMF7Xnud2UoY4dj4VSr9FmAWgXpuALydw",
  "key14": "23WPBTVTcEoodGVpsa7RyUDFJpDZVCm5iT9icFYboxeZDtJb5CphM8d72sUyVDzitdu9D27HoD3yKvw4fQr1tYe6",
  "key15": "2SvUxihygLuKn8YihGCqiB8Gqu7sJQMqFBpRkUckEq1V9WTPR9TdwizdoFm1bSTDrGDYwCr5Mz4FWo7sSnAr51zt",
  "key16": "3bgZ9jTUjovLBgQQxzCZPyT3sTR5HvcWyLAubR2UwbRsN9BdXAadAPRQ9nieHX8CW9uwgcPD392e6SxezbyZcYNK",
  "key17": "54Ci2Ud8oLemgajjQfyipifdCWZ6UeoRZ4ekGnzQ3Xfwb84Pr8keD7WBqcMX9Q3BZfqtsUinENvLBvAWBMB2o2eg",
  "key18": "4GTCXviA7xVYcT4b7WgvMALc5wvkg5acfURkSyT8RoSbpJtXJifW3qmnSAYfksF8PFLSs9a5BW1M2R89usaDsrqG",
  "key19": "5D8w3CTbtkJpehZuqpGgbyrBjDPXwzg5dXqtyXAEiytLkknEtNNbt5CyY4YR3p7J9c5dyycSDEWMSqBzoqjTTk3X",
  "key20": "4RiRvGrZwuqxcm9Cv4DPdgCAwKh25dzaJPpXoKjqc1bx91zqPmb7GFqYfYDXJVmZ3epQXrRTqtKdNZo7bBZdamSM",
  "key21": "5HM8ffLL12tUeULT3YBdkES5SE1P8tLPmUnWPpDHKAbe9EmiUX7hN4uconNtCB8cv3WTj9BqBcNx1TzKccH5YdJZ",
  "key22": "2sath1cN3FRNduHtjg8CCKn47BUWFhtjSWLbCj7NKbBp72xh8G3sv9TXahv8P6emA3MxbML136PqqbeT3b7YmRVC",
  "key23": "63VdDLnDWJBwQTvDFR5twQQrY3fvhsWHthLbipMSPwRcRKN53j4iNqvHhQVHpjnhryNezLrPkgwtoY3ohi6qxPF",
  "key24": "2f2d2zrZHkZE6eHZBKXrVnSgKYu3gNJWAgAWdYD4PHTLQTQ7rxMPYjKAwhJFNxACrzCz9C3p7twqqpd3guUWY6bP",
  "key25": "3YqQy9FbL3mz28gwCQiWDnnggerp4AQGizyqTRY8TPH4XdywJZ1JbrAZxNQof5KW5tsYnJr6j6nPYwa7wNGSuV68",
  "key26": "2fYuEpVUyKo2Rd5HUf9fmTxzR1EobqrSo3S3e9aAPHmVNk5Z6WZxtH5uYLtVVJjSeMaykQQcYGnoRp6M2au8Y86B",
  "key27": "mSD5xN8fqudaPZaCgaorGbshoeqjMZ3S1GsB6CN66chemknHU3WYEu7YyLhsoZKhRHPNkK2bzpS27tgFRdvkPSU",
  "key28": "37pXAGsXKu1AEqLgw3VJnDcP2BiCeQXfkZ2ibDhNJU6wyhBjhG4uKiVATZMvJuu5j7CbH4zS5Fthz8JdvEssiivX",
  "key29": "28cuqbUEa2xQ2QPd7Eh89rSCzsJRCCbpUC256m47QfsWWGRxVsmxRjn26k78tZdm8DBJ8ABZFwDMEXoin87wbAF6",
  "key30": "3WgNSqvC8geK4612vKwEmk2oC6WtYKuSU5NAQ3q3SyWn7bjNS7e4VvHH8tWq7cRQdAKdQNhNkxW2Xn5kprD9ivfT",
  "key31": "3k5NBESzy9zvzXnPU6r2W7aJyfWxEa3GwVeDyWp4BmpmKaDfo2YvTpcNdMmoLS2x9ddrH6Hym2Hs9VUePygjX4Fj",
  "key32": "t3nz4WbY7Y8fkgYTiqRGPg74GXWHvH7cB1nyiQzfptaf9f1M424pNKC8qL2z6pgfL2ZkyQk3RHd9BwCPkPCYcxJ",
  "key33": "2rAidAR1KoLYBDdHFv8a6aYAvErU19ATAjpSm6B7jzpTo8NNKv119LfCXdavJY9KMLCHo8Rj4tb5EKfcY2XEYunh",
  "key34": "52twMv9RUZrNZ4FCdNjujuLR8oiTK2J4sBARHc4LB93ex7yEc6AWxv92C1ukiSffDTDG6gAeFZUQuXdN7R5bx6HV",
  "key35": "2zyqoVoMHLRTu5KLJYL9qGVUJ2hP6ezKt7zpaDrD65pDMfki63c1cgMuduA8WZFrg2AYFNgdT3UeqsshyGeCQike",
  "key36": "4AM5HrKo6n5xTbjncbBvmeCzCFkeVhjdTPjAqtwbDc9UgbdZ3duaagxp4HHtndnQ1d1HYxEVthN2yH43EMKMpYYs",
  "key37": "2ZupdUaAW2iewb8Vd2Enx5wMGRb8TtHAwbgqPZTEtEtuHJk8bGHhEdg1KxP8frnVZYaBEi5Te6B3gpVxmn1nFJqQ",
  "key38": "27r8AnMpV1u6fvCT7Do3CaHy72H9qo1e7KSoYYus2TbzHRMhN1JmLVbAvEPjvhVbaBMx2PVnKKDSZ2QS3RDfvtUE",
  "key39": "3wMAk8ueVrmySyDEYyTZuN2EC7U4VVrutBNEt6H99dGsWPyZReuCpmqeHET4K87tDq69jw4gfYmc3kJwRCfsJT3m",
  "key40": "2nmaFCQeqNkNhboa1Q1x5h4cSo5bGxdGD9GM8mK4dGPW2iFeyJ2kMNaNN4VoUpdjWcLVvKmZF3qPjCJZb3aKoy4k",
  "key41": "5XXBtgPknfX8DWB11fLBdwYWv9bhnkHQVJoL9pLd1S6mVhcB8xQdQfpa7UwDuMSXVSjX6quY25aMGRqCiLduqRQS",
  "key42": "eAvm8pRu3fuS1CP1CuCvR4L5JpRQcpdDDshAY6S272Yw4bqPUQtQfkQNirQeEe3s7RUKib4WqfjEBJ7PgYqQ5hg",
  "key43": "2Cd4zF2uj4e3diAW5GngrZvMsoRJyVEFREpfyW3hATMHozvdfw6vFJ4EpzAPg2bMSs9DXhDdVKdRDg98hasuyGhc",
  "key44": "2F3CeeYtxsrcjUaQiYY1ML8Dig6jJnvYDoN3iG6tjwvMc8GyZwKxcjuvukBYKULgyNcyXzEbHBC1CrxV5Y9XJimJ"
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
