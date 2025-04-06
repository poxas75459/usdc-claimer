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
    "3yDbbPLWf67ud4o87RVJfGMMgeMEGj3hP1NQvAwg4RyLvpXhjq3A91hXHVv9q1nCr9vqFUzUW6rgAi2Nh5TENXFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29E7h8MPvsghbYXgD713aoKPtdAiwVnrx6er9KNtTq15oRLsHAyu5UqjdRiRgkkB4tWeSYm9D1eLS6SnDKqFviwV",
  "key1": "5o7b2sZc1DWEgZXAzsYzvUTzy8cerC4wkmAiELnv3qnbMSDtioWgiKZzCivqT6Fk2r64aoQpZwF9DFyai8AQXkjp",
  "key2": "7T3ezt8yuiErrAy93Y5ZLgdMYRiBLBA2btxnsih1fxLYHJe8RJu91DLrufS3PVTv7a8xzF3qVKTpSLoXdXAfrmJ",
  "key3": "3szZDoJL6bxJhMhGjSjREiU38pmeVUXYZBPpikZmm864H2oSMRX9dpwfK5B258veVe544qPqGDnUfCR3JQFpSYG1",
  "key4": "2rjMrsXvbwJS3BCodqK2V8pFhMDFLQ9ETMLmPpNEsz9nAVUHVmbbPFU3yvm8utgCTxmb2e9xjeSXeAYWNG814Z9F",
  "key5": "3r5zCkZVAS1rhgjRF6tRm4z6AxF9uBZ5XuzL99CBGwxELKwF91bsRjfHf147HsrDPDi93nrs4RKUfv3roYzu4QRT",
  "key6": "5P5ijbNa18rZLorBqsyzJ4TLpDbhvFcxWGAWed3i3AFwj8BaVg1nrqhn3ToNM8oEAKjdX5xyzrcJSyhkbdsuC3yR",
  "key7": "4CcPtfKD9C1J7DWXfdcLkwwvtJT7ZfbMg9oXBXvwYvpchn1cUFieeBFp1pYeEehrcaXxocSQKgUcJBhALzTE7eBi",
  "key8": "3Nrthry8iqx5kZ5xi8ETo4WhFsGYhsLZsVK57NAPnhAkN49jSKCKZLfbAG72sjix51zYrYzvqyDpAA9RR5hNgMbV",
  "key9": "22CinPau2AMmHQZpRJDHFEDyALCXETJAbXVTJfP5BXQkQFM4U6X5XV5JrPmrGrYJ9edcdukxvL1JB8qX8iNFEs1h",
  "key10": "4VEE6TMQSVwWCGHJ9kLyQT9P7PfmC4vdafWgc41ZWorU6fFHUzUy9VTdcx8R2X71edeXFG7PCXPsQy7k99K3RUgn",
  "key11": "2LQwdk6BprpjgC9UH9cbURwWyBVa1Nvw4HHWw5Mt8atb3WvNSZwZUMgGniVxXjv7vbdqzs6Kv7bzNZjreaWKtXEK",
  "key12": "3cWZgGMqGMSHBmefjghyKnZNTR8H6xStpZLpxMxzRRxcwu4qiR6nwH6sbGpqcjnBLWWB4anbgpGHESDeFN842HdG",
  "key13": "2mvgdotWhqoLUQy6t7xMtJC4TsXunmF8oHhBNpb27hSDGUjF5UYAAfAsEBHgjKBqFoQpum9ceGt6Vkg6Zh1rxFZX",
  "key14": "5teQkXZSzxNRqZyFBHzLF5ifc5uVuqAKyqkPWBX44sBfaUEym9hf2s77GBZ8RMWU7pdchZXfcSC3xZovqtpjFk8u",
  "key15": "2qSLbmfM8XnuXr25Uyke8bJ87bi7iWj7FzQ8Ta2EupY5FafqNVuZ7c5wHQF3xV2D3jn9SQJeWhwSRejfFeNRZFcY",
  "key16": "4dKQZfxkcD2QiFppiMDkj6jFxCaTfwmhgsHMp4dyChk73T2XGSUHAEhPLf7hQpQqJwUvPcXYQzY6MUY3s11N54j2",
  "key17": "49zCsnWSEkrMkNHfH5PPgmtNb2HLAMynumUboCe1HVbD7dWnR7uAVryHRULKuB3wjuTnELgD7AQojfv5o3H8LMQW",
  "key18": "67JNLHFAF8W4a315r3Kv12aZw9PkzwM16xCGkySK4RfTxb8VHTXk7eAe7UHJgH2g2SM8jhWRyDRGN7fkvHzZv7FG",
  "key19": "5XRQozz5U1Xt7g5vcJMYVWxua7MZQLGVpUe96ip1p22QboeFt8LT3fkR7LpteZrcYY33iYUVWer7KsnZmHbwwWv6",
  "key20": "4EpivrZXVfeR9cZtgsSY9PatpPuGYkanfcNspUya94MEteyp9sxdKJLcSzg3rWyaXUDZihRe461oScH5BGfRYwtM",
  "key21": "2KmFbmzVPV5z5yyZ7Ecs27zuiNhnhxSyf8TT8G8FNEZtvNWsHByMpc7gqookchZyJWgWEUJrUSwFfossM3i4RHRw",
  "key22": "52UXapHzGrCbvo4rRbtCiDirPvLCiizK1X31JfhPQUhBLLFmUAzgAqjZSf6aVFCZFpdvULhkHCfqoejjxAespQK8",
  "key23": "qB5cw2H3dk1BiFmbQFxjrQ8EHgFcUCn3abCJwLGGuaej7ZZQmEhVZiiJ8MJY9bEo4STJdLm8jaQJDozVDkFQwLv",
  "key24": "12sVKp9vaBjbN2JpqusCk6MuyCe9EcS5sVyApv9PgZVz47y1MqkouU73D3oLWwyGhr9qdyFiA29oUu1TpoHHAEr",
  "key25": "2BjMQs8RHscAjgxwp51XfL4djdBRd26Ua62diRyQMdVZKf9dzHn7CTXf6a3FYRw3S5EQKRLNwQooPzUGdmeriZKm",
  "key26": "5syhp5tCbDEdYynebb7QYxEgDqNcx4hSuBJhw4juF2UX566U9LAUdKcWUc4kCLoDdRGqbFdxGfe1KLhDYnR9zBfA",
  "key27": "3x3SVCensJXGkQFfMyCSciHX7CrQsTUcFBTXcu8FEfxxoaQE6P9kUPHtWHQVC35pC6Do63M43aaGF27AzjGh5LhU",
  "key28": "43KcWJoKEGVkf7GJrimgUaCkEBxBZhZcWRycijhgJXfsyaha4ZTW3wF43pkwWAHSKCXYRPT8WLfmHxLnWNeResMJ",
  "key29": "5umft27ZS5SEy4Rm1gR4Tbez3EgPSB32rJ9qVbohoCtFhJcfj9H5RWbfLDHFLfVWd1NuPcFadkzJNeYAaGVKgBa6",
  "key30": "2YTrEvB5SqqMDGG5nfstkSRu24nm25a2qBEti8d6sUBTGsUcjaQeqVmNFb42fcZ7d8sZ1PT5yfeY8XwWvK54QVQJ",
  "key31": "3ijQNXNEVYgNjjQnsYmWRxmBNb2LuDd8wPsvKvNQQjthbGy2cYkbdrT7TSbjHnGztN61oPMTMnrYY6TwmgvgDWJQ",
  "key32": "5vsMnxnyKRRzU8KUWAtD6D72izzkZ6gPQo7FMTEfVKGybMoZoWyKa8JwnKXAbRZD3tKf1CwNC6TkoPWxSym1tR5e",
  "key33": "5Pv95QktRvEmJPetNXmhqZNY9fzvVN144jHE6Sc8k4W2DVSCqneJSYk1ni67qGd5fGzXmfCcUv8dG6wrCBHbRifi",
  "key34": "2otstCFUVvW2Bd1UmHsGX3RV5wejTBEGV9DYQTLGvTiEkX674ebGgdPUEzmVcreCBHNUyPEPkTtvJP6RbuHVQPKP",
  "key35": "2mTPTERohhepNYHaQ49weK3RmEBzN3h8yimwqmSxVw7pYvX6PSqbai15k3a9mpYfeEF3NiDeqN5HAgf3gd6FN48U",
  "key36": "5QnsnYFdXf3oBdppPs14vYEkcjGxcsrAnMo2C7rVzHUeGcBKgh4cGbERvFsxALFD8mTKpy4gx53zpDbt2utigD9e",
  "key37": "3TGsA7hEq4i681CC8FQaJCcSZgw4Ex2CWJpWKwsfhpzAnJpJhSLvChN3eWkjqf6CigSVWfvFUyf3BqoM3FQwwJvy",
  "key38": "3gNZQHMWsUJRFPJ7pFkWiULxE7ZzPRbS9cx2ST5ZTmJHvYZyWERpzugvJoEAGWPi4tpEtsesodmA5KiKTiSe94Fi",
  "key39": "25GzCsVBjCr9sFDBrNeiiNRPWPn352e8YQUDHc8riYtfcFLTtRxkbRy19jbdszwxwXzcmrkjzw3JyPA6oCJqhu78",
  "key40": "5MxGkVrdWQDzmDP6ecsKoavZ69gAHBhRSjVK3GhgZxmHP81kc6NkWDsB8dXBQBe4bWAQEFGUvC3LSM3483JZYnXL",
  "key41": "3VGRc5ZKWkZwf2fUA4JN979679YaNe6tpcfENUE3gvTGpRAFoYkwrLPSZUi6sPV5Z85fff9eD2UXS3ACzyZTuTzh",
  "key42": "2FF7ZMc1F1D5LaMVeLLkRbRqbNS8rRywoNMZoCis2HDHcN5kz4EKKDg9KsTgXx7oAc2FsMLryYy6Yp76bExD7mAt",
  "key43": "4xf6uWtxwaPK7nsp3Fjjwzpsax17D3JccJNDTrNGxVWc2tW5KWGiAMdqor3vG5cYyZEeWXpu1CUeS7onAjPfN2Ms",
  "key44": "2Gj1dfP1cAQfdt1C4imK3rBfHfB49PkDX4SrG9g7Kz7VGuWRfvRanK69BLCXcKvHaXhJFVQ4GHSmDFVb3Rzs5NNy",
  "key45": "CLnzyg2LpqksXbVKM8CAj8EVuWdiUqevVHqtmP6rnYmKtPBJprzUUBEJdipj6GsHAspF9q3vvERWU4WTaArbdwj"
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
