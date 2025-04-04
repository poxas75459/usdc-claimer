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
    "41PJ882rBzfCPMtTpfrEsHZ6RKftWghJozxaPVFhV1TuJvLvvhZgpKpfduufV7dUQX6LB4FyK2v7TRyjrQ1ME2hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEK1gJezAqY8bFgKP1YeXtPmYYq6oAD8PTFKXeGwGjf7WPxu1WVS4wP9UeuXp5q1epeagCgKRUkPq4tNiMPkgqi",
  "key1": "4JsoUjyk3pUDy9BhM2vtjnyqNaikWLu7s4YxgULPnQLTv1NS3qjAr2H9797pG8TPFzoSPVrwuFwD55XahHX2vDnR",
  "key2": "33Det3x5mzGE25dEs6d8Td8kN5mQQEY2myDJVkMo1nFJF6oY31UY9ZkJ4udJp15dhs1tzkJVbNFrGDsJt5E5G6zP",
  "key3": "47neyvY1uzRZ6iuwJBuYpYuvu6jiYKGa6wEWqByUbf6X13TbnDpYFNmuWRYPengSeJTBjkQ8t11QnZ99KV7uHg5Z",
  "key4": "W1fvAkgVMasFRbViHPtWHDzeyfLbYysKirxgyKfhcxo5wHfqHWZUyaXKpt6mWmsSEKjU5uSJjGHQDUGTUmUTZCy",
  "key5": "4QYcEMTfDPjcKjuJguZgqr5RLeNEXM571JS5LRNa1P7MKXRwDM1heyRcdm98fXvHTRBnWCBm3JoQn6JP7LutWHVi",
  "key6": "5GoxMDR2N4HAa8Fyako8584kX9RdetZRHJiCyXkJnfArQR3JGNq9sGTKPLro7fRyUYqZ5zVb332QW8BFxFVnJQ3r",
  "key7": "2EGLeChzZwCV7x2Zv1KYL1V45KvAiPaxuDDnsar5VHS68oT6p3Ps6FpXya612vBx848XkvboLe4rrCbKMQAKcvSz",
  "key8": "4PpexXc7TT5WV71hK9JCcw3DpyU6GRqimS4buLWqSNHQf3SiQA6SLu89QWiQZ8M6nENd769Qk8jGRt9VE9YepjVQ",
  "key9": "5mXHguhaVJVHPb7NtvN7BC8Ua2xR5RnrznAq63Y3SxpFT9xvPv7A81QZEuorY74YjmTTtZ199geG9wowWQcvcjcV",
  "key10": "dADGKx2J9arPzzsN8izC1UBcHtmeJe8y2LPAD7EM6uv5DB1fMUT3gDsppfeumajxvDgwax1e1fgsjHsj3KgmcTT",
  "key11": "2VqgiGvFdxu9un5P1kwNnydBWbtbtcSL69F8TbjHBk64NPAZpUMtViwUhVuNFgaCh2sGXFXMsjSogjfXguea1BhG",
  "key12": "4euZtYc6BWi1KY64Aw5WUxNPkpsHroU33mn5KuvaXhUJavJjjBwAt58Tt4w1Z8b7ufNF4BhrZYqGBNEmuVofAg7k",
  "key13": "65aeFmYqh5ipHGehjPDYBi2rS1ha8H5p4Qp18KcGranDhSzE97x1n9fpjSpgSE1DL3YZ1upUUuG8F8zkKLYNUmoT",
  "key14": "5AaBfmSEULWyDvMCU24tR7YY2LAdBjTibXpSLJeiUPUh445omgBytsbYKFCtx6SL9vfi1NygnY4V3zSNqm4bywFU",
  "key15": "2Y6cP5kH7nrzcfgXoyP8ejAUfFHHmUGbFtM2VDx7Hde2vhCiaqDvgyFh1edui2v8Wd1bJARKKgScSoiKZSAjDKrT",
  "key16": "2s2AnbWMxAs4UtVmAvWPf9UVhEWHrZJQTgsmKF52tSnyKBnv9j9X47UMrzXVDfRxwdqYyZ5SsJUdAyt14HyWuaXS",
  "key17": "2KveUAWk8HdR9k5LQjA9sTooWEqqp8SJDivRPZQECEdiSURhcCjBDWpMf5Uw5XqJCo9mjEAuqPEjQjFXiYAvsfPN",
  "key18": "5MrksMG278c1mSiS2Wtvj2zkJNvY69pLbY2v4eDtQBWydU6jcHGXF1eaKuHekYtA78gFmfWW5UWpk6erFLo8MXBT",
  "key19": "4TkpoJUNPisfMoH5yyfthuEgiBacRmR9VGqaiccHaosXdNWQq4z6DiWfjgvjHAL8oFKVEBePPx5K1zZkW1Zx7QSf",
  "key20": "i53rG7Q7PyrYQZWjZdzD8G4Yv6uNA1UbrjXQz1S6ZUeUHPZo4mkEcbHBdeGTJ1EqzyhcjDPCT7mz4CgPL3XxAgJ",
  "key21": "eks8CVUB8xComAnNHzzunezEW3XD57tKLoncfZvZz2uJW2Mvc9Cyxy3PENVcMPYfiWcWuujHg85i4Bm48sRYcF9",
  "key22": "2aLoCtsnkDXUqzDFdGkxsCQeJxJs7MWMtyxSpWMRaBmyJPEnbGkwMQpmiixsjhUrjHJik9vNGiyrA2LXiD9nXGP8",
  "key23": "13pWAKSDoN8xfVjf4q4zsURzRcDWuhiubjbb6fDjjhd128XCN7E6uL4oJuz5bWuUAxcbYNWkwjBuc9vyL7gd51E",
  "key24": "3NgaXDbk4NtgifkcuUnRgDHui7t793iPjr1hrHpwVvVAc8ppR7GbgNAHSDHsPbkSvYDYvm7brEs4AE38yM8kJzjc",
  "key25": "5LzvG72DNHgWWjnVZJu1Ti16GhKPZ1kaCcRtZBvkxK7UCtXcVQ473BaCeHwLZqXickEHbheM7wVEEy3Nwipe8w45",
  "key26": "6qoRzuftqvJRaxG7gqSHXGkFKaYHnddp5zHLKShMJBuY673uK7op42WhRt5dAh2edbYdS4DoYJPZcRCfFdZnJXw",
  "key27": "3o3xS1imTkpZUa9rnPj66rwxwjNyU9qKjv4rfzS3uALyz3Ddq1sepVXGyetw7SnCZAznBhjxAgBGg1ytGc6aNKhp",
  "key28": "5eJCbrZ3PDuVADkyTjX8Pn9FzAJqjVbHLwbYPiMKPD1L529GTMx1mXDuDX7FfNSDE3SsTDxem9enHyxP181rHnH5",
  "key29": "XYhcj38vJDECmnvbES9Nni1DUYupaTGcfb5uVitWDBzC7udcZRJfBGVwtgvKbrQfF7pVvDEnggAgVktmFVb5XrM",
  "key30": "31YHNGzMQyadbs31uFGSjmmzytpS5pNDRucokST22bqSiKF4fgcURUMj9eYzy5SPnoZbHBRPfptZiS96YWbmRRJH",
  "key31": "4AUhTHZv6BmWJtDe1257Qw3YzxX4xZXBERsxUfPgRpJ3DUWForoGPAATPWksPvetyzPrfqfSKAP2UeQGc8XTnooL",
  "key32": "22FDFcGZe3TZH4JQLyssEASs43Z2y59JQhUV4vHppxEbRujrybKjGvWZkKL76RVQxrvKVvSKGfoo2r3SSPN69cfT",
  "key33": "3vL9vtiRXtDYDckzNfS59dQkXqRWe8yNsn8wdt8dN539ooGzxcQf5Pgho6gNTtJNHsEE39vVAorSHdEH9DkSaBbn",
  "key34": "2Kmx9aNDYKWprsy8NyPiqkpR2HWFxXem6PPsLZh8rQ2jdqV1yJUzPu8tuoSzw7Hjf2xssd8ETcjCkMvNtxTswLfs",
  "key35": "5CpTqrWRyZZt1tudnEgCpbFDLxhtYAJY1XHSxAz7n2TPsDVKwVRSUDhZaCUa1Y1NSnPQwfV3n58fV2EKUsqieFvg",
  "key36": "3u6fbVvp7X3HMaxb2ZGUbPbmfuKRD6pnbUPMC6VaH6JKa1oUWwF1Z9sKpHiTpN4PqbxMKbb5LMfc3jsu6v7vsc2m",
  "key37": "4z8xh3p6sKhwBb8rPFPJKAZ5dL2oAA4jnaDpmZr9357Xx1i8TdSfRCFKf2yREQhYnRtpposroTfVek4Sd3uCiZZ3",
  "key38": "3tp6sBdp1e3HVJkwT6UaNR6VfRAGyTeJFB3K8f6P8iDUmpVHWf8EQhxC52y8XEa5K9WAWE19H4Tz6Z7KnTC5gR7E",
  "key39": "2AoJ7tLe9rmQ4QB9GfhF8ahfUh4i3FZSCfnpD9uc22h1gjz91EEWc6MbEPTXJjNq8yeWfuApwn1NBTFj7TFK6aYF",
  "key40": "4MFszGjeWapTNEphpGnCDfLhfqvsNcEqjazaUeRz147ZWtNcgo6seo2S5j4R8Xq6cge1d43eUCUfX5jsr9hLJXhE",
  "key41": "5FFynj1aNnppufmP2cdKLGYnAxL1mjaBtuTT45UUxxkexgZgeZgPxQ5TxioFPykXy9w2gCsJ1nmHjW8VSarp6fpw",
  "key42": "4RNWeo1YuHEPpuKUX5Qc5DoYacKYP89PRgfLwzdneKEfbEZE8sFmNUofTsUz4bbtzLJJnbDPtXTEJbTza8ARk4a5",
  "key43": "MSM7gmys8fBF5QAa2zMJnwAV2RZ8ban1tMq6b24HH54nJge81dQG71fP5CqPq9QTKTND9JcW7fctstDyG2fFXhS",
  "key44": "5fFjm4UkHYBMdLREc3WSVCBy79gwxvoCKikWqUEpGRafqTvCQacavPn5QFqay9KDEeobxh4yVfBcpXKhdzRrFkYm",
  "key45": "3M6gDpwKN5UxwZw7xk38tynHp6fsBHT8L6FBqibcsiyQ9RSopDwoHAAGbTt5VoxjKNM9owhjBnK2HKzBpxmCAhxc",
  "key46": "gJCr8zRVJwzTa2dCUTYagHzQsJb9X3Qssqk3VnxzLXpwF1MwE1tPnY7uoPiTYhHiJTSHoPC8UR93LRMRC7A1nbj",
  "key47": "2eQ75AipxvKQMcSwwENzxKHSmmXbgZRmrHZtLJ56Q7HGJb8atcX1Y1JgTRD3wCpgpR9EqvLmd832bpYfQVrEmkfp"
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
