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
    "3ADATat8CmGh5LGYAZuNu8goisu2GFb91GhCMpWA3jAe6gdDEeYeehx47CS85QAMDgnAEF84BMi9BDhQFPtPZdEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nsjw4NsvFavHqH3fMWn1V7XzvuaYeq55PThbYbDG1smGn34jgc6nyLyUSCm1V9HgfumGnVqAWhWGg22a2xjG67a",
  "key1": "671nAm6eiRnpt9TVk5SHh1FDMCgAk3uHfAhTLaR39UW49sP7EksJUKxb5SDEVdUdhcepyhFbTm8hSiZPXgFHs2R2",
  "key2": "2YzCg5ZfABAyC5nvSBhJ9ATPrYyRsRdVwrdRjP15pUJ65QNMdbPrANLG8kdmQ5pQgsWhtKi4pQSg1QY5UNz2DhW",
  "key3": "365dFcUNHnhS4jscHPkUgzvUDGQd7F4zFvCuXQ3gB6kWAvZgFVZVcV8FVkVgjaM9mxkS9ZHipQERwztLdqkf4FfQ",
  "key4": "3PBhmjxPn1bYRMvKShp885sWHCmSXKrVCbP3HWT45mbijhLoSbeZazYcJ5ZoBRKvTR7Ww1yBfsr6nnsFqg5aJ3Fe",
  "key5": "2yBTdfiQVuSZvdFSXXKzmNH1UzajtFis5wXo5Xm4N9DBo1x62tK7NxnHWUHJ5itdKZQrexxpfzyS1bqFGtknL2iq",
  "key6": "275wBZg8xoUWjY8eypRzk51XLmke2cZQeZAsM4oAz3cYnYzuCxoc89dnzzuiNLebqwfKF3sPEJw3nWSH1Rew3S6w",
  "key7": "24L9g77UbeosEJd8MWAjGd1CJahgcVQyvqdc39QV7f3U85C1hcjEaNt3PPcFWpvyyu77zBJ8Wi6y9bDJJ3TtnNdT",
  "key8": "5Bx8o7AmMn5duTj2UwU6R7aCuMzTmGh9sAppjzP3r1byJcv2LEbehh5XBqN8FfCM9KAPkdZ8hLYXatrCsFjShCsZ",
  "key9": "4GYzFjJX4k6hxSUgVSdqXRfH2sA25PkSz5YbxGCRdHfzV84d2zxyjVpn7psBqNv3hXwpuAJaBrKrFpeFgZjEBwYi",
  "key10": "LcXJp5iEBrw15RgQ48jwXSpi4cebquqXKdH11kvFVMJ8FATVdNXnFokTBJ2A5GvHBpPRVBJ2fd5bi3gpySVLeK2",
  "key11": "5ag54rTG8ZAtTRrb43S24F98tzghh7iRWVzgEJQP2EZGzJPFx7AqT6YP7Ed3fy5ZFurTaS2P56dtszNNPiwPak7Y",
  "key12": "5MyQnWhnu4Rbo2aoHSBQuyUca8frb6XYsB61ETtjCtnX8ijuZYgZyQ7NCNygcCwCaMfSeyRQHKrtfSsHZHeFVfte",
  "key13": "Zko8vZKNWZ1FAjSV1Qhb7ZCYC6txMCgYpDEm3CGrt9EynkZmxy9kLQM7SQuUqdzLBmvQ6TkpzwvmT8sq7vTsuEE",
  "key14": "3SxtwgXnZejZTGwqfs6GrjsyhNLZP2mbvxMS11NX6tqEgiPucaajQyBKLCUJ1xMHhT55anrLPANg7Yfht6LrjCfN",
  "key15": "3fNzLVB7bXwK6GwzyL1d4hcogHe7VXkUpibRqLYZrrNJP6fQyVU7PMrCxmVDFhJo6chXfcn56Z67U5geGYU1o3yb",
  "key16": "4guEfG8KV9CLKmU7cBAjfEY6uuohQhXDJc4WqJ6T8SD3bt7cyixNgzcdPaKr7VuByrb9RY9c7xjLdPMxRPV1mD4p",
  "key17": "4LLaQRf7nTvgkAoru61g7s2AnQBadHpLUa7VoPKPCGZ1nSA9Me5xnTDKFsrXKsj3Pt1PrL4V8DYzsDnS5QyyodkC",
  "key18": "2uZaXz7d9jjUBn244QWRzoemgBqHa9GoxU1H1Mt6w2p9y3qphgnQAJMzKyPrpznQvit3DRkmVUWrGSkzGteDVSac",
  "key19": "4akEa6sJcD2DZWQg6JwjnogPJyPy6hjudZe7jCzwd4yUZjq84RBNTSkRe5kvppBBjANjjUGCmGSSkeepQaatxu66",
  "key20": "4Tswhphi9d9ZJaUyDFzUFcNkp35h22mZ82NFCFWQGRJXTv7xiwCbWBS3Hc8TAy1EMrWPYrVCK2JvgjDGHVmDKs3D",
  "key21": "7Ne8XHJqe8hCSwjKMX3GdHxJjhVabkz1h6teFwQbg8qxAsZvnijArxWfknvKxi3c1uMnmJw4YmUxx8cXEZeyX2q",
  "key22": "2dRsUSEKYRXUHk1vEZ3q6NVzcvuWUJSWDxG9eh4s4j814c99AEHG72ZBhT57gX1kSjrD8NB7r734zcKX9TTcCjY8",
  "key23": "2z1VHAMz5EyL9z7xnehJnkZzTvB4mC4uWnYk29P2tLS4yoXd9GCudB664p6Pt3KVyJ7mHMERRqQaFAuE1rmLRezD",
  "key24": "bNavTFvrAw5kp35BUjt6VtWs217Q8JvCnefonobdAbt3K2BewFUdaejsDkHzYqVdMFkp3ttJKR3cuitANYV6nCL",
  "key25": "29TZBaxophnRyAKDNjnQRsw6kciw6HYjtznA6ajQiYbGy7RKZZfC147nJEtF218ErHtZAAPnHpd3mQDSkpAL4qto",
  "key26": "rvfQguVxcz7kKU7BmyD4AyHKdnksWz7T3TQFxRbvW8h6XG8fotjDBUaaf1heNBhdVs7W5jFVwe1GbBTZK1DmE2X",
  "key27": "57EMg3LPifpE3CcfzTcQS9PZHGQsfSmAu21cCn7UTvCtLEY7piyZvCYXYzosRyuXjZnPkxjMJE1S64Phj2AxLT2Q",
  "key28": "3ByAPdHxcBfSZqK7q3svqxGAWVC35JJrm5TdAhbFQiNN2RrGssx26LFkyjYubh61bXa7jFbyLkuJeJRyRYBsTXAJ",
  "key29": "2LVDKXMGSsZx13nsbtsgYVtGwQhko5uLgPu43VP9WbB5aZEX7y734hUFYuwcrDcoMUnsoGd7zn2Xmm7WjNggnjXB",
  "key30": "2KqyeDdqhr2PPemEyCSTcMLYx6msQ2ZryNyoZ9RXodjHuQQfGDMsiqovJjJqjuy4ougnvDXvS1E7HPKoW7QBhQWV",
  "key31": "sfD3c7qdCx1J49FMYgUnp35oRJf1exsC2kgGtnWmcVo74nvoWycWqFjtqZDGcMahPMHT6vfmRLPpnDaf1UvupJi",
  "key32": "5rW77ZHg4estaRVC1sTsYUM8JncoVsR3M8bm4wZ5Kn1QdsECJ2zc3RJMi47aaneHCo91FeseER5GMSkfTcEzwgrL",
  "key33": "4ftBHA2eNrL1ntfmoXnr8SSQEZjqoUuJJBmXXYQNtuyq1zgn1Jw5VJvD2an8SwHazVK9DtmivQf7BMJgX8Td7E7i",
  "key34": "4AnKk1y6dcjP6xEKvTPvtQvVKSzuJQy1o298JuskTcNh9G9TnAVFjp4utpDUyh2i52CzS9QCY6UvUF1Wb27vqgHk",
  "key35": "3hnXkrSFig7rNHBYxRVT8Jqr78UB8iwrayxYBkor2hVNgpADZsPx1xWcVsuEm8iqDgZ4bVjQXSx1pjGwwY6ry28u",
  "key36": "3tY64riH9ZuXJKQw1K31fA3uC85BKrPz1AvqQiw26J3yT7Xbpu5FpMcGg4VTxCf1yoiGLYB25pWdLCNqgmqzVqYQ",
  "key37": "3wLZvnvm3kpzRirgbBr78Nuvnr7cEvJGDFFsmrCcewnqPfJguAn2iriaeefJRQbBNZA7U6wi7QRdZC8GDErE6cvc",
  "key38": "4pjRh5r1AdZQFcpsqspuZnr969ScheENuuCbrHgHZRLRmqxGaifC37ED1tgZz4pTXibT4uj3BeSJz2akxQMAc4z2",
  "key39": "5DdHA2pe56nDzzMMqNTN3SXG83goKUnYi6TbZQWkDFAGh4QzbamweRfVN8frBLfoAa57HNzvWJarYzLaZ7D2QvUw",
  "key40": "bD6Tjkm55euXtZL174nTNebGAiwKxYY7aiMvKVG3kNF3yKx7E58tPgooFFzTEe3A8tBMEj86Sv1vqETHnT4qSWV",
  "key41": "3Je5i8hYT3Jfh9vVxuiSgoHA7GdE8HqA3D6wn7bU7bk9DbeWdKxAwFwe1KYv2dWUwb5t7JcBsRDh7q7gjSjrpvSt",
  "key42": "KqRMQ3o3xRAe4mVeiJSdjRAK2rjnypmpc1fbkc7ywpp4y6Kdg7zWfjowGMrU7YHiPMZRT6Y8riMQjJhDZZVSAZr"
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
