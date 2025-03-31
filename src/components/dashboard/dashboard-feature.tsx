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
    "3NqgpQWYe5FfGixU2CAFizfMNVgwxXnAAcNwm2V5Z3KzcXKXx2AjgrdEoee2gwXk4K2qfVJ4A2av3ZkvhGuGqf8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ckP6ucezZudJ9CGcVunCKcymkFXyr5m84ViMy6FmmftweM1JoJuNFnTSDKDX2LtWxrhKdYZfVE6yd6kZkBCY4m",
  "key1": "54vaBDd6JwRvL8N56yDeyb1CB1mtSjXLrD7S4SUR94PHMkvopX41Nb7DhQqqadFYkYZb45dVRKHXdyFPT4tbEj9z",
  "key2": "2JdsChn4G9w8Rey4dUg1E34rZQxY3zm3K9QZ2tU6s9J8GBkawGb3qfe8SY8QXRMREpNcPnaxcfvLEeRruAtoxDQf",
  "key3": "2W1LBW6i3U5KsGkEPQ1fnrq4XyfhriJhwPQFsxNCrr8ZXjPGoPkGxjWD5Ej7Vk6odTJrnVDzVvWE9ThgahoUicd8",
  "key4": "4VTQRtRbk9baYSpNm74btwy8fqseomxBaVpm93LUhyFP4emzNdutw1nfzET5SL2ci5MQfvP5o4X671eAX3QuYXfV",
  "key5": "21Ts1ReHw2au9WmVMddq25K7bip5fDfKFf7Eu1n6YEztr4qquRwTkL4YxamdmUuGznw3mnVhjArXmEknjiKyK16Y",
  "key6": "2jjVRfRUguLikpfhYnTQfgv3AuKaRJRkAamM7mKbZQrgV39gYnyjXtQs3gqponJAb1N2UfhdWdYNB3P35VriVSQG",
  "key7": "SLsdeVDwCRqBHximnuT7vw9F6mDoY7HvqBjidcdsCDb9CFJNA1o8Z5hM48NEHty5CPnjTY7HL3H3J6KrBpbERBF",
  "key8": "4Q3kEELHreTzkdfH4V3CkVVej5qaiT1hSKcc84GRpJSoqFReFKVo7DrpwHeohGohz7E7dHz77BQRvP8uMtcx5yQe",
  "key9": "4ZGQDJTbfNPihntz1bqRcDdMJ6PwgxXokcPRUxHFPpzi3nXnJm8RSsLaf3SmkNoSxZu7edoQDpRrsMac6BEoWeRV",
  "key10": "2ULjYNBFaGdYWxBmV5TXVKSdgxqWoU3znaDLdp7WUyNwj44gpoZNUfEjxKHejTA8gZsuhUPKg298c8NFUcHD7LAN",
  "key11": "22KNH9pc76gf95WhDvYPT9Bxd4G15MKNs4jdJAEt5SG4buBoLcdfx7tT5a75ZZCeGygvQDG99q141QHu4CXDDQuE",
  "key12": "3xpa7VgCpaw7BZypVC7ZESurKPpM2gLKNARYeofY8s7QiovjQSNuCEsrETRJvXGf5QZMkw7721Z28zuyrJg9sFiA",
  "key13": "U8TcURay1kkYm3jTQ8M1rGFp5GtuvDvbzAQRNygBw7E4Y6cmegGmPbecPob8G9yqtNfceq3XApD55aiu3Xe8j5U",
  "key14": "8qxtJqDPDtWLC5s3zEBUhzdiAMtn3FNTY6cRQr9W8x1MnX5RbMbagt3mosNigczNz1rMsPWNv3iYuTbUgAKzTU1",
  "key15": "EmKGMvGbGTJ91k8RCfhaTeagQyautLJzv7iTzqipJY3PaemH3gfF9QF6o9daTFm1sZCPe1KUQ3HT1J7LA9wTzGJ",
  "key16": "4Gw9JBN9FjVdX5Zb5JheDL592SyDj9habqimCYgQPEqXx5nPZdgw9qdgV8DSUN96NJv7pc5rs4SKrUCa4mALMvec",
  "key17": "ussXWwETVv8KtuH2nhYwncqvK6yKAQVkbGhQ7TV4n3VTBuKdqSQFoqfv9RrGpspRTrqipWoehT3yhP6HXjn6MGE",
  "key18": "mqqzqTg1QXc9FGNMAd2q8ibVRU4mzKHjAbSfL9KPHsBMhna3PKymnDF6yhvopiyFr5VQrwx8T8Aqf1bQJvRVSBv",
  "key19": "3PMFeHKZvKewyLcRZkvTRKi7nKp79yYpCp1TXeRa7qyb3JjPyXhDE1sdVfrq5gLze27CHZinjeDPoQ1eqvsEiYZo",
  "key20": "jWeMFPdA6s3Zn8Pxur21MuBsyzCoJWJVVpcWdjR94sajwLTjv4kJEdyXzgfadz1p6o5Vrc9R4bQzCjuANnbjyLv",
  "key21": "3NN1YEnXj9AP513yLPEJuuVFXVF1yYx6ijczvK2PHsqtBDJH1arJqLzwGUe6Hqzpyjc6xajScY5jCR6BjviTpEf7",
  "key22": "2ddwXKavKToS6crdXaf4YUqXmvaESMx9aZCNZNvdaHuX39ufjnCsS3kR2CQvBU1pjwEYD8QTDRjwyW6WyaG6Hr3k",
  "key23": "Mz7Kptn1pqYgnCtyyogPjfme3ywLkyiXuAKaDi9Wr5PXCVoJsJYTAJTKAV4FXS2cbKqk4bmMyyjv8JwmsVyqXuX",
  "key24": "3Pmj6gpxW7LVqALT4HeHvf76y3qZppWzDEZwfCM4mymrewubhrVTcfgmjrvBnoHSnvDhavqEpxNhfLgZSYjkdsuZ",
  "key25": "2jPR9js35J1hG493maBLfp3nTTFHesSN3k6FQqnbheFb5BWPmmLSwoftYK6shyXT5stmLpwSLoewYSmiPwPQtM3w",
  "key26": "38wjVN2oiyGygmbYCnYzFDQa2qcwKVG79cg19mQ2yV8ixjNDd3wnBm4vzkNRBzbMqV6ufnXv1H72cvL2B5fNKiZK",
  "key27": "YTNCATS8wpWdqGsBp74k1TNUJgoS5asFqyrDjpz4g2nGY4Qijx7sMSehEUvDotqdH2tEtLsoYSRHmbAaQofR86M",
  "key28": "286UurzfVu8HBqSj2L4eWQ2Ltp4RfxrJRAKUnShWkDK9BZcoFRaLgj8nBM9wa4mNYEHjHemQMJhbcxs7dtbm4chk",
  "key29": "3iNyv3KcPeRx4Yjoyfy98Mw91bPtW91GN1oVpNoAfwX6BDGFymp6FQWsGn1nGpa3pAHKmNsfKi4bLe1VsGPRJSV",
  "key30": "4Luf1uWW9sFWjiABLt7fByPcmK7WvVwSW22YXAZqfqvC7bSDzXs4ZzBsHJV9zNAyrSeR7pEMZufCeL9QZ8rEVQKC",
  "key31": "oeSevtoHKdXW9AiCiHyQ1aPpj4c2eSd9PmFdoaKHmTDQmoL5jnxytmobuSTePeV5fp2ViW1MJCkiNrmiWvCavN3",
  "key32": "aZXabnh9XzBhvqqW12Z14b3X1HBKKCHmAJj9n51xF1gbyUPxqjiowUeZ7Qjusc5uFLMDhPfFwNXawo7Djxw7jMQ",
  "key33": "4aLrvHWXMyS7YqQkTcU4FBFQn79TzYHQwigfUL7QtbBxGCvtBjdewr5cLodfzKQBXD97wuFfE5qj3WC4F6zC6yYE",
  "key34": "2bHGA2gXPs94gAdbC9W6LKeC2t49nteshZDpUgKb8FnpwWFxafz54hhRq2v1C3VcRtJPfdNvSJR83715CTSviXGc",
  "key35": "5wxLJzfXFJEVYQEWmrMtNBpoU9HFKZiprTCMh5586WmEFvfJVEyzi4ok2oeH2cUgtGiyFrY4rY9A2VkA3GgmW8S9",
  "key36": "BMHqGrnKxdvJ6a4WH1pjzsonR2oQ7oWrbD3UvmMHm7MgVfbYGYjK4VuaAXLCnjoCqXKC6QfUxXvi4x74rK4N5tN",
  "key37": "5mS27HsByXg7mNCJSGLc3tFW2sNU3p88oYdfGNU4cGKqUe2Ye59NfZdvaM5J5wRhpZHMMBbGf2zxHYJKL8YedyHn",
  "key38": "o6zPtQMWjgFiSnF4uyBwcizmHyX4V4s96vDAyX4WkDeh8tWiXZxe4cRBykeMgraz4MCw9r37LDSK7xuq65N3cXL",
  "key39": "on3foQs53EjqU5UxSVu7kxEUgtSuc8MUg2UL3Ezmx6281BUUXfZAtHSr7fAcvyJYX2EkjaDqFKFyNsPZLzousvF",
  "key40": "3VbnbnuhNpCoP7fsBhmRsdJPB63Es11xCGghKbX6WSp5a1aQf9ccwkZdfUyrNpYLAQaF9rtPgKux5ZNrcjcpUAjd",
  "key41": "28jb5eYKL36zb6RPrZZXepqVtjQsbXtLZF4EpaYYZKQKn6P33ffjBZGZyTaq2yHzeVtF8efqNmQ9KyMYHzHv5rJg",
  "key42": "3qB6aX67Lahqa5EZdvyim26VBMU6X1vBJvZGMi4fjLjF4Unc7xShKBmAgzQJ48V5HRWctzgLvwTWxDi24YAaLDyB",
  "key43": "2Bntegufykuaa8xVfEmC5QDTiw9dZfTkj5dgw1HvsQciHK8xi9t9BZhRFChPoh4qZrPRf5DR9dt7ZvC9bcdDboW",
  "key44": "5h8NVJPDVh8pH1dVLq3AREy92TqXLWUcNyM61JkohfaSwAuJUz2vz3SuhQEqPYtRbxGdpzaFv3ffdaV8vaBwrTS8",
  "key45": "4mTEwACRDWgQXaCTWU4ouAbG83pDf5vuZYZKvFzJqLqksBQ7H6W3Y76T6XnjUA4CPwqjSYJJyhWuogFdquyKmR5d",
  "key46": "61oBSHKQvkaTuiCnStkyW5xu5TtyhemjnM6JLxjdNbZddgPeVjeCAWvpnwBhioXKbadjjutAZ3JBa6fEUG4L8vk2",
  "key47": "vZYpFH2J5E369eaNPNeoYenZV4fSwuqFnHsBisuXdn18Tag6AHrRGcVkm7jBUDBSaSRdQVvmgU4dGf5rPgm1ppk"
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
