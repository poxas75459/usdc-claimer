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
    "3GTrgnv69d3tW3qJXGrQvXufKuNSSgn5TK6fv1WBvRBkg2MqMJ7msjEYqd8hHAzEVSXDQKjGDDT52sgyZP8BSu5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFwzcExKJPk3T5VmBtw7HxbAKgw3dpwa34EQXoypZNzxuvL2HTdP4KroSpj3EEkxt3taagLRzPmUDsZLjrUPawv",
  "key1": "5GevtzqV75R625qKRx4pwHCdCS6H3aq6AvWbzyuikbxtED7mSYryLobXAqCKvXK1pYQWkU81gwzek4fe1E375ZHS",
  "key2": "2nATVKHumeDhntkTDS6FGTnNao38XpAFHxeBrhqJftxTaPrsdAVMPvVGxaYf8UTdR4ZLTvP7qYtjbM5mmxQqjxGz",
  "key3": "48KWZC2sdwxHEZNgoDAyCQ3LQtLCBL6gA2AYeDnGnwS16fm1niHa2JDkAevdU4UF6qU8GtDFvfz47RTZJpy5vLNW",
  "key4": "53qPrw6B6K1RxesqmPvFe4wJua2bAUYXMK1dULgyatirsCmN44FyCo3W7QQU5NZPkXiDrbVLj5n59Grfg58w4LiZ",
  "key5": "5U2fXparhhDov2fXdwM5a926N5ror6Cmjiqe326HvaQFi3AtgF1EL6arbn2hXJuDFfkvHMgkQZq67ZfE7gXMDew3",
  "key6": "5sTXFGMyv9yLHgXKi1mLLk4DfB9oifuVfx9n2q1QBHu4Af7Hkz9BffYNXJapxMJEAnEirWb2dU16AuTUXXJTdiJA",
  "key7": "2zHjZ2Sa7voTEnHLG8UfUu8kDk1NMJRfpov2517hXa5Sm3xen3swD3ecLdsXkWnoAZVwr7Ygw84yoKkGZKxFoK8Y",
  "key8": "4Eg7TfM1MZhrVgoQftCZVAzBD1cTPN62Px79uU2Ffx1KrCky48oRgSqp85T7DFEM6XCBZc1gpNrz4nvuxptPCJuz",
  "key9": "4vSUjqYbWMk7ooZS1D7A4tbGRWb3adJPmzFdJE7Zu5mieu3WeRwN6LDyQLiKPp5r7SRENGgTchLuTueVJtRX2veX",
  "key10": "2s3CodXiuERpSgArK2tBA4AtT4W9i6XmbkKeCegLqkmRKm5KYPCA3xpw2QzocrSTUHESxjJQ2ne8NXeTCrjWB4me",
  "key11": "2P6rbe3DpH9KDt4FPfySW8zBnX14vGGJ3DKtXTjikXxWSPLz5ffh1vxBKCqq7acvzvaZb23T7GAEuijXqoGMLnaW",
  "key12": "4KSKcVWYWhLZapzTPuSPmW1mvrnXyu5JApLBLNNYCQwQCLDXw4aLKqR9ew6YrK7Wzmiu9wHGziA88u6HKfQDZ1aQ",
  "key13": "22Qv6SjaLuGyUS6sTf2vZTvVPVxJaVVSst6BxHHpVsRe5w5dUJ3NY6PF6R17o9VDFvX37EVKrw1kJX7bpbNDtw1r",
  "key14": "igatMj6i2HpWD7HhXmbJoxZhTJKZD6mN8Htht8rmkCqrEGkCt6S6gKx7JuhZUBHG3YNGDvFdfpyFP4Sn226jVru",
  "key15": "5h3KMTGU9YBjw2LKxYkeBsBqoMb7rYsk5DuNtWrBgF6vizv1Sf38ngUw2tPMQdPEC6zrLEL9HcRg5HMGB9YTS1RB",
  "key16": "2uQa6aaV5j7vQUyX65wPXNVgtgsZDE8kFBC8sGKdR21i2michxrTP93tZB39PceLmVDuv5afE5xMC7YcYpc8YUdV",
  "key17": "48Y6oMa6Wn56TeHM3TzsQNaX3zXR2vgamb5Y71PmMQYxKZHLoFUEeZRUcRiEuXF7x2aCJwJLbP3ShJmiTdSjbPXw",
  "key18": "2Rf4vCoKBpiAPxbw36gxrroHJgmMx39dKHWwPCcW2M3hK9qRE3ePvAuzzwPhAJ2aGVrAtaEUvEdzzdN3BxLWdUEQ",
  "key19": "286aMWTx1EEFviuVErtNkuAhAH63kkkns5NtFctpgwZv5u33YB7cj4F1wGBvDeGWyzTdjerPK1YwdWXLWtrf473X",
  "key20": "2krosRkpPy7vnFUrHQ7jgVLvMhKTxsrmpus3BUiEyZDvyiUpCk6znd6WcKHdCihbZx6qVHdW6Tfyraqs4FgoQVfS",
  "key21": "3dPzNptaVbjUfRDQWxtt1AMeWczo1w8CNaZZmSz9TS7pJ5sQmKbUmHpJvAqsPsKrgP2JFr8acwAdsGRfLwQsiLg8",
  "key22": "45aAqYmT8uJxCEjMzxKjt3tEruQNXQ44srxs6eAo8gxB4oSQ9TvTWDhufC44D2NXqGh37RuqLQbrhTxWBfgH4tMN",
  "key23": "3Mx7oFgtWyLU5YgDHhQAMS6bRmj83FTJgLP3ZWZu6WANHco47T9oJUJf5LyiqkJ3sMV7RkLT2NsDGNAhKRPqWoSf",
  "key24": "2z9XLQPJZHCzs6rFhDsFQoqB8LGTu4yqf4JU6sNq3dmFWMk1U5vikqZDWAmC1LGXVLmcw7QnnZ3iY3Auro539CHC",
  "key25": "D4peEhp4XjEF1GpZ7dwPMF7dnNTu9HqbbR9NQv7PCHxMD5qXfGRShFj2SxX4piEz9wFLJ3bB2AyvXD4bCJ6EjiS",
  "key26": "3k13LaRytUZDWP7d5DkH8DBQun3mbvzqtw5We9h8c4rTdsxpRJo93uff2vuRBFduEAmuXCRqHvv38ZgwRdE4wZ3x",
  "key27": "uWix1atqwB4nq6hdUwxvM2nJirxLi8AfLBy1YGrkGZjkvjL9kgSj7cQqqiLLe8nHZVCp8zA3qGwoBMSYo9Uwirn",
  "key28": "z76n9CDgZ22jLbstXGoLQ3reykL9PYZJnsQHDRDaqn6r2rnUqmhj9vTgXKbiUWRgvGeTmqYcEb2ngHEnn8W2PGk",
  "key29": "2jnFbJzeNUdrLYyor9NHy7FX5TTLWQM6jCbMVXDbHSaohWZVWAi2UzRFhEds8zMdwSxiYCnLUvojEo3NbdmjrVWm",
  "key30": "4T2uEgDNhahvQMwx2zAWobRfK5s8kANWJT9orCxoKFRT7zZ6pd6wrqpcGBxhPGfxTTxY6b9sHuAChHS23VGu3y8b",
  "key31": "3CVS4PXprySt1JyAcWvMsW9LBR6ixvZpKidwU8WfJjmRrbR5Q9XzjcYuR66VXGg7YLoZ6XWNg9JQ2TfCoqf8E1pg",
  "key32": "KkDSBQEzsb1HTJT2krknYcStz3SUobjbZhMHEmjdrpgE68uSff6FkiDQsWjirj34E8RnafbCwtFLdgQXsovwhwC",
  "key33": "5i6ip2pv9PGyPUsrpjNwxDrJRwTR6SGvmwfruheGYW6ZvxdjvJ5T7M5X6z8tAiv7ZdBHunXo1HLz2ChEhkQqAnFk",
  "key34": "4UWbovoQavd16NDs5fyW9GLGnoWMHCuEx68BTpGSRZVT8GFpxhVBNCfA7xBvDfP5HrK6H93DiQDk8xMQ1GbDocD7",
  "key35": "5UVjnDWu7fiPZa1aoJhL7kiVa3fLvAVMcdnH5HHXWTjsRZzAjHVfNdSi7ESABwSaJRKtzSpLbRRGFDzQ951fAwgN",
  "key36": "4GC249dWZLDA11n5i3jkHToNg1Ejsc8nwa6LKHi3Me5pZQ6pWQp8xjq6VtuydDzT9LJf1RWxFSsER8xAZBXg9q5R",
  "key37": "UkmY1iMSaCqfrSJcGqZMAqxwtwaHCWeZ5pA7TzcAMvucr2j8x94uwmw48oFkChRkQt1q4TjxpmFPNjunGgxePM4",
  "key38": "3BJrujSAhtBERbwxLnKwHa6wDPqohK7GmGRiyKk7tZLXALQxRDudisb7yiZBL7BMqxdRthatJfXT9VUGDfs9cf5W",
  "key39": "5RMj4sN9kcnEnyndGRVZqjJfjC9S9B26bPoe54E6A6TnZCq9MNDWuoBWKS9M3JwwPoJAcRoYjehXt8K2y15LEjJU",
  "key40": "2ZaYENZnWyx9yJhsranbUh8UEocKc93GkwcubQndvbp1PAxRkgP3WGPtbBb41P86moiQ8eY2VQuwKrSP2Gbbr1Hd",
  "key41": "3xN8JYmUjxQ6B8Pgm8SVYMn8WyFASYHcgoh2XNuj3SrZaG9CP2MS5Hey9RyE89M7NcjN4qaXzJvVFWRGzhrf3fWo",
  "key42": "32Z1HNnQq5DMDByoMu5gMd73Kt3S4XAGSQCBmXiPm6ok4kG8K3H4ukhGNLo8N4frZTZ9HufjH7ag5hMrdPN8mJHD",
  "key43": "2SuzHjjKqBydWsBdqFvwgxr4Mt3GjCQ45YzNnjXQyqsoVqH9T9ZwwpU2e23EF5ERPJD4nzrBHNr7kcbS1w3eC5Du",
  "key44": "CudNmHGKXEzn69M3nKfwmYgFxw6KkEgALHVjLcKD7ooHo6mUF1Ezpf5ge3X1LUrxagZPyAKdJbtBUguqUK9rtoz",
  "key45": "5a8AsbD8mtutcHgmL9PBchuoiEjr733cumzJwnKrCpqbQosNKye1jw3tjPVvhaf7hdCu5jGQCY8TPfZSvDpwHDUT",
  "key46": "13sQKTSD1Ehr3qgWGh3nXZ4kmZYXNEvrpUNRpJb4JM7QyQTaMuMUpPFFyDhoft2ZtutYRXTfCgSDWZVHB6YYRbz",
  "key47": "Emavs95zf6zFfcVJKnVoirXaVS69kLsyBqDu4eudzwtR6eF7xZKdjhQTCBjUNopzgLpDeUvZKpXX8XUVGSuPweK"
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
