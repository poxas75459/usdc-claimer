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
    "1LZjBUtU8q7c2RmQ4Q3TSeHtfYoT7tAWhGnhE3Ebp8vbPw2mdFnhn6MzHVsphkc7KJWyzQx8rigvPEW4MoABF9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hTbYHSUwyr6j8KUkxn6BoDCNex7oLSrFYYjzdfMQiiMPY4uTDyBrGg3FVAtJ8uQnzZTr7o72JhnyPATKw1FZKJE",
  "key1": "4FvyyjNQUd9p3yTzipncuJhTKu6UyuK4yy3HcWHcCPTEYbNpbFFaYvwqZaBk5VViudCkLo9tnaW1EDxYfUcHWksB",
  "key2": "4BPzezFEE9o99ZuidZ3BL1mxPUUdWKVm8yGF65XBv3TsmfCDVmWTFeV15gBaeweZ3y71CvJe5qj1SEMqPVFnCqq8",
  "key3": "2ejPJuwCg8cf3msP3mZCznNff6mePkFVivB19hfFeJ5pGMn4FEyxH7UDW7E1gZihFkHwR3ntLFZeeFi9ddMZjyzT",
  "key4": "2fPwAHy7VNWZTh7EW7XGQ1fdEZrPm2Bgi9PjnnxYCecYk1ZiytXPchTdFVEwcCCGYfZZQkBaAE7bAqSq92ERxF8X",
  "key5": "5LuCneGjo6xft6vJbyJe1wuLhvNtJkZFTEY9g8mpSCvhEn4akaJDJ2HL1GXoLY6JTZfxaCfh13FAtAdXjCEAPcfF",
  "key6": "4CUEa9si5jua4gpDDTH2iZsucvZJRU9KpD7BmFtEZFKb1tcuRvBzKQHFi5RizHmaaGTxZHu1UUNB63dBRdzjDWG",
  "key7": "4Sbtd9ZD49pweh9SW6V2Ry4hj2TTKyc2QZt1opbC2VHf6KxedGaJahx4G4tv3LmpbWDXs1kScUiCbogYCUgU5RgN",
  "key8": "3Jgp7iCAAn7pmM1AyRkSd9rEBUa7aJSLf6AN7moW2wp7qg6BFa8AzDrFqQHhGUgezC42WFKDNBB5bnoRNVwpPbA",
  "key9": "Z6zGdNMrp9CaBbBnH8WL7ppoagLu5rq47w9Cy42cHka2CTwEZRAv8bVF2WB4SquvEd7uXJnCCzhFS5kbJ4ggXEy",
  "key10": "CNra3PTMjCe1SKXhBDCkefbZffi2KaATbiVV9eJ4PVX5rXxqTCMkxC6EenZ5cZFxyEiP5sJBZKDVxnhseZp1i7a",
  "key11": "3Bq42qg9on7gq6LxyC3FPaKkD4rDNYZqnJujdXJnUBLpbshZ9XSDZQmCMqvQbVtAdh5jrVy1FNjE1theMFYKDsmp",
  "key12": "dwwtcKtQ995wvY7BqigoLZmFKwrfPPpvL2znLSDFRZp25yiGvZz2tiRSq6w7JvFvRPuhKqps7sMSoG9HENBHKG4",
  "key13": "4Vx6FXx4qiFT5fpduxtAU1BPP7WfnGjtQHcz39sLVeMbCMH2m376nckruEJZtyzioPo6yeQdkiEDF67jV7QP9JXN",
  "key14": "CcA5C1E5SQrnENVwQSuuBRk5L3qmKDQwhpTSJ1rw7SQYC8kCGydCMfEt2Yo2mxWBBJWsHgu3ueitC3d4SddYnpe",
  "key15": "3B9GuCoCRUWha9P6ZabiD3DbkL4Uq9SHaWCgEEfkDEhAuPfiUJS66ShvEd9DrVNjD3xbQQgaayEdzmSmc67oF84T",
  "key16": "6rudKYisJ7dA7njSwWvR5Np9cRTEQCXWw753uwjgjJP2XMPQmUgtNb8gR9pU8YN5SoMPazhXdtdsVkmh3VyzXQX",
  "key17": "Faugsdxx8NNej1eysA8LyhcPo3sP51rUTU3zJAnzaYRw52EcP72sZ8RMCQyYh6xo57UJN9ecqYwaJi7Wt3zPc3t",
  "key18": "3BZ28BmxaFMJfSKofpcdGNTxUaVmfQnqZtGq3cNgp6RM2w5tu2HzRdqmKuEyLZWLxy5TN4WM2LFm6aEA4wgcZ7cR",
  "key19": "LBm5ubyt5KXGjFKu96zpLauJutcHP1BGScArJcSUQUY25K3j2JL5KVXwSePZBz6d4f2tzPhNJzfznd3KdE6qyJy",
  "key20": "5sEonowZ2Lc1QkG1ttRKrUUQUE6TFefnVj4C1GByb2L2qLKAkrNsbPKVCaff3FxRMEJ9ekziokKcwSBYjvr22VDW",
  "key21": "54GLPXX5B32DvzYA9pBdXrbvdwzEppS7r8RjmWV1pbnfBbKvZeGaXBw1csridjDajadSwb8aEdQsE1Tu69VLyYZT",
  "key22": "5YDngtbAvCMvFeUuqBMjw2vvuwA5Sge1NhDTbRP26vFRZJ8kHsDhBm6d9srRxXZAFGv5gVkp52TF6nMs1yo73sn5",
  "key23": "3iTHdjCVtZu2CKjseTn5581gGbEZiQppERcV1NPKXHFHgnUkod8atEYJHhaKaT8cxB5ckr1HkYLB1s2EDkodTmHs",
  "key24": "UuR9vKfqWuBkrctE7uFJvqicUwrgbp9HJoZCuKVT9AzP6ihhYNdgDx99FEqNt4BJXbMCp52iiVbyNkvVevs6hhu",
  "key25": "Z4WvQhcXUiD2vqH9QcRRTGQiBoGZ9ZhJhT3rji2HUU3iyzeQBpVYLvCYAJ7tijYN9QaqYV2K1y5HM2sTj1BPgcE",
  "key26": "xwToN8KXgHCXz3eqoywzWANRyo9QsSt1PfjszfoYozQ1TtKyYZ1f53NoAQPJMwVxnh9X1up8pVkxUNXuBXm46Y7",
  "key27": "2L6DFQmrBWGswRRYxasXsDF5PMUqUnVtYx878atrKJuPkcvkasZKi9Z7UX62eNM2aAf7cXvwDjix6VXkqjcZiUzx",
  "key28": "34n2tmsfgiDnfUhabCNb91gADbyQNJhj1VPG86cJswbHTCphNTwGMMPKtitEFthC4TTetizoa2FsXu44MV6iK6j1",
  "key29": "4jP2L63BwbVRJP82Wu6EdiNn9etYN1aq2QdbicgUY6Y9yrcqxARvLFLyx8BUSYp9NmS3dEA8JwatE5uu7nWiD9YH",
  "key30": "2HrJdBePKF1zCtbXSTjSCsfh8eLS5zT4K8fpWBWStSk6btHAmZqmrFxvzL6rbnU8g2fnLSkgQ63wU527ELLXZnMk",
  "key31": "4QJRcnRV2EsoXdy2rH6nQXfgequJZiA3TU2wA5sPevAdf9JHi6BcFHrtPSrAZkHHarjNCKLDSSvsJWQEFbVpvuzA",
  "key32": "YvyRh2ZnKGMzbMShyYEmCXY9dPVBx2oLzZSurtqTvkobGGLfHV4QWCdq9wCkVnpC72XzsDPkWLkjeD2jdibVofz",
  "key33": "4wXXkw33rDjzE9S4RTYoN2W6QxhmcKkFLP9XYTLhKEnm4cvyCJ94ynxJnhRxwSaXodYA5xcVvn3MpcEnptgLDTzV",
  "key34": "5grg87sU4TP53HaoUoeNjAdEJMBPRYPqmXUycSSvrtmdjobSf68Fpqnw4tHRsj3SATmdNy7LvxPy5SCC1zZp3gbV",
  "key35": "3FVckHL86t2xWapnuBSrMxiDfvHU1mrcinzsGqaSDgcUabPxBvKgQ1eetQpKJBvbrvJSxfMgvLS4ysS8Jfp5nwuB",
  "key36": "qZAAnC51zSDtY8kgouuBqVGuU12JcnqW6XxYpgy9X2Sqo2BH4TW7Mi1ivupBVgkAzrPYdYzu5ghGqtX1ekfrr95",
  "key37": "2UniM8Cym4dqWSxorRvBpm7qHG6sfErTccCTtFZLXAPwEmQorK2eT1dLRnkJf95scuedEjQsJZX5UZyQAY3keDP1",
  "key38": "2Fkj9LfkdDD9i7cstMYM6ncCF44Xs1334oH7RUWBZhBwVJUw5jxJtNtHc5hkWcKrrxS5D4cnD5H7kCCXAQRL8cDM"
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
