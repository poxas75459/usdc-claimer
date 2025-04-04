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
    "2BwrtRaWtvtYTDtWyRQQsw4A2vqUcNmDibjryv57MEEdngQFzsDj8HnHw7gs8dvv917igXWevZvF2pwmDbXmitSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFD8SGjNJ2wNAKSG2u5DSMXdXWqtU7gdw4L4d6BgoYDccuPbzUg2Jgo47KUSj3UP4YWDiXfKXM6mtubxS4s4zZB",
  "key1": "2GXJgea9HcNa1TrJD2HmmPCengFUUDqzLTvouX2RiDf9r221u8GrBcnSZ8cBie24MZiZULj48dQe1v3cUpwXM7LD",
  "key2": "5TWLY29Mqiydn5dZxMLBdgLhdoCteKo73FTf12RZFwut9XGeMvqprZT4fjxL56ws2tsR36YDhKrsK8xEqpczTPJg",
  "key3": "5mj3dPd1xqswASZn8NZWDsjkc35MdPm6d3cHPuiXUAJJYUpj4jDMgt4XYUuyms3AwomyYPVhDZGtH9QsSonLL9rT",
  "key4": "2Ww9erQ4CXWDn1PRMs3ETa4jb29AUXt3tb2AbdwxtKepmffvsSxL8fK5wjYgEQEFf7J39mcCzdDhLoK8xsWY1T9w",
  "key5": "2DiA2GrEK6SY45eSRzModYL7EJWsZ3NBLt5i1MAQaFNwt6v38hKoeCp7PQ8Uh7mZqiD9TwuAQACjsM2MXp6XQ6rp",
  "key6": "zpF2gecwB76j5HpU11UEUD4aCfEbRe7EsQTj4B4CQheM18rggsHFZuaPhK3RLjGdseJzU6SCE6x6d1mB12PPuhY",
  "key7": "72tAV2f8HjeNbbQkEcbVrUgGRF4k8HZJ2mmse3aF9YwAXsdy7pQDbdnosKAzH4StDQgUxL6ZycUe8nBkwzeEUpM",
  "key8": "4Sw5w9ozuinCCgWF5ub4UaxGnccJqwiH3zFakHQiw8Ldna9yDnMMD1je8XrPYi15bWXjWG2WSiq3Dg3iM6yKgaix",
  "key9": "2uWqPK2aXEjdP6YEfFyS5nZAHx6AbSJyTxQgDeRe7RvPEn27qMejmB9pzxp7G22QEZ8SpAfsudp9dL5QuEEUobrL",
  "key10": "5e6JB74vwXAoYi6RGpeL4Di6i3C7ygvjabE6Lyb5vAdRY5xkqb7EJFv88ZYy5kYk5NqP5Xg4QjGAXfa3s8CXqsHY",
  "key11": "56Lvst5W7QHdwKHRBcPaT6VvvgHXefYQsMoAmg8JKMwMdjqH9mbE3um7aXNY3Fi2JwNwepZAS7uuJ1y8Hhk9wrmm",
  "key12": "3ogBc5jmstU88uTWQH2ysHxsreWWcnTom9jivmRvBvYEmsQrcsLBH3aKsxuMXWjWy7aHpUYWNy3z1i4WVcAFz4rR",
  "key13": "3w31zrXyENAuRjHvaBqnD8oVQCeDe5jmqk3EkjLhCDQLk13td7suX9FBMkaXXqNf8CZRvRtQTqvTYkYEiS71ohzR",
  "key14": "5N35MT7wQ3rBcvYuLhZ4jcGoWperZ1BTCvEiE9pMiWe2AJ5LBbLMoGS6zgCBnnLY1L3My566FoV8tnBNoGE7Bfo",
  "key15": "2zoBWzQF34xqsQXbG8xJo8zswNZD52frZbHpBHbUcogbR3hMBhnwKH73t2qDvbbt9pGff3vWiQb58BUG6nnhCwhc",
  "key16": "4tYgN6TMLJbcswHNYiT9eqkRv9gRuBdSGCkWxb96mXjuqXPTiK9z5k5ZZpfCFJWu8qdY8irx4z3pP7HEZ6zMy82W",
  "key17": "38moMfrNw4UnRNPmgiyAPbyGhMB8E9Q5yKhAXB2nmbfexEM3sM9RvR9SUNZbmobSm8fRfkqpf45EDx9j2YVMD78o",
  "key18": "4X9HY1Ns9YqGvXbe6uuE8WP7PHUnLB3ZmkJUVqwhXaYmMKV7nQgfXKyQnGLN9UKvAJKBih9pDNbW7B6pGFzreTWE",
  "key19": "5kA1QNDbLe3k6EjsSkTTsYTJnScsPziuNLVYyN6RqMfj78p9btTd5pCARZV8HfTLMjTwZoJcUh6zPjyAQS28TFnD",
  "key20": "28SHZaHjk8ZDpH9HrTKyB5221teWau8FMoe9VtAo4QwDCvkoZKrWg5Kh7UpdyNUfYYDsRtgVAzd9Zy2YUmZVjW6B",
  "key21": "YMdtzJrbWWjVxCMR5tcSW5g9zACe8BoGTygiN2EsaTXMmdfghJbiMGcREpmEbt3A2rhnEoDMU4DRBuaV5knXgkf",
  "key22": "4RHQvtqA9RVMGme35T1Cq99HXvYng3hor7LAP3rQZL4TuPgZZ8B7nTHkHn1H4RJzpvoJKQz5VKr3wBtvcH8LnnFB",
  "key23": "4jXRHoTdJ5eCssFmbq4vp8J3STtENAGUB1Qokt7bhXYdZ7fPhgWv5pdUNq2GiQQL9xfmae7x4xFMQjdx2bXg9uy6",
  "key24": "Cfv2b9jdBRPgD3PdEBggYMVLVZUfoD3yJXecRGyN3QvYZwnfLZT8tfx1R7rNikiEoLdgCg1t2AvtCdDxe4kfRdG",
  "key25": "2f1CEzyyKmrnCEo7TXJHoBp3cXWVqFrLMP2m8ixqV5wxLWe9HR4xjRVMcQt81PuctPf5N6ZozdseEcb6vwnjFhx6",
  "key26": "4AYsX76tqsZEcRBtRo78S5Fy2UTxKQCpZHDX7mibFeKH8BRyWvW7okYjMjgGrrT3fFJRjB36qC3jRZXS1eqgysTw",
  "key27": "63hebcdYK5gh7zRYL8TnBcGpfdhUMVrMxMX6uZnUo2C6m86hwbDHJ5sBj1h66Zr9tFg4Ch1i4qZy61RC12iHG7tc",
  "key28": "5Qd1PsHUWSmaJoGZGxYLqjWZ2NP6KAm2ptv21BE9y1wgr6A4tTgQGsZmECEc1h4M447TMki6nrkFXGp7vJrFVmJS",
  "key29": "3WCLR1QMZYepSXD5YToX3E1gefDEgZ55FR1GL3VuK1SgF67RrasU8zg4BStWBUZPGDH4o9rB7D34VrcWaacC8Q5j",
  "key30": "2U6VdrfTm1rT55x4gKwsC6vZev6eDWHdrKURhUqn1B3tjBZU8AFezwxaE7mTerksvhA6v8JMVt4vCBmB5zGnnM8t",
  "key31": "62Wa7RVp6RCRdUACbXQKwLdJ5yDqw5eSvzuyFCyEVPoNxJXLSiVKh6i9FhKqnWFThCFY37aCa7MCgFLK53fzparu",
  "key32": "3rAiUJhNiXqzukhzgLwCsHvqVPzFWxdvi2LcYj5989nG2rEQ71b9jXweEdf95rGfiWF5gF4TbKBhZ6p4jGN2Mwrb",
  "key33": "5M67jhKTs5Toigy1sGNoFPSC6e9kr9qrFy3QwEH77cxpn9Vsr4irerV27oQcybu2kw4WqQfaiFyw55JfFbbQ8RSu",
  "key34": "2q5NhuTEG2VqHQ849d9HiU5UYNe8HdxKSsBEVAbhfr7JZt2uR8cf2h69GyHM2hQTejjcHauoQdF6zo9U9xLB1m5s",
  "key35": "2HkjRsFEmXLBBnLJ2vtNAAbJMFsougZu1YsQQmMMSSUzePMJgk6JfR12x9whai64LioFAALUwyzarVBmioak7eQn",
  "key36": "3SbsYjNoSSMyjo6DFhtkvXnRVvbxRbdWXujhE8GYuJ6ir76pqE7KoFB1STYnEj6wf6YXd61Bejc3Gte7CytAdeF4",
  "key37": "5ew5CVxHJbw1GoN3dQz9orSnRTdZjVcRKTATvrFFf5iTC9N5fagXb2JPtmyhaV6a91smkAabhDsxRLeQ2s2zK3hp",
  "key38": "23UD43zDP4Xzt7y3PgVojhoa72hg37vctvH6oYB3tHS6tNkpCZ5TjJjVxRBrvwuSwQwfHQkTWB65KdMmu73e48Yy"
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
