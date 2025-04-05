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
    "3Qikk5aJo9h2NshbbGDeMhS4gcCJiicAF9mEVWZ8SVp34xWHDezDhthZxi35RkrurFQsr6mR8N9qZzmwaovRXbRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuvxTkm66SgFvnPVHB5Ka8GPckr6MskcuHMdpFFv6brRhaPTcpqTFTVTxDjbMHVLNZNpASo5SEaaPJeLcStMJUU",
  "key1": "2vHbFFiYnHTpWFobFspwqFuEc2JXEektfoZTqjLbBKY9QSNxP4rLcNiQvtnGuXnX5Kx1WFSCUay18FRyEUCKoGzV",
  "key2": "36eVyhpm7YrSvuj32C4B2YrD8j1gaqVUPJp5cY9hXV3bsqa72RuPjctbhfwBHbwbtFd8ZDScMMC2W4E44J9eqQXe",
  "key3": "4dVppu9dCUGiMfhdfpXqitVGUbFrFbvjXUdBeapfXhmPFUXrWEJZ9ePGpsFJSj5BBtU6TpPF3S1RHHSZYBFUo5F4",
  "key4": "2BWKjXd9jAUJsvLv3US363s9d3jGUxykRrKDUrqjDew2tAA4DGJv5QA4q4sHHXtHXm9YTdBmThtAo8EN7E6Hn22B",
  "key5": "4PBikfsbYQJZVQphp76Y991kjHfDBJSM3ibEfyhMuyQLPDrCPn8UpyBTgJisTdG1LQbUyEQYoNjUqxYC89dsrXka",
  "key6": "2DsHeNfDebHBNB8HxToH5Mo82W1hzcRHkMC6bs5G91mjYpNksobT41C97uzv52nXyLQ6k5nNxFqFjanDCjjbS1HM",
  "key7": "5YTFRnenhJzuri2dQCjpvsTfAFgirhWh6DvUHAxEo4RqfGXytRCY78qaFjM6B821dAUDzH1zn1nQNNqQqE8sp7bH",
  "key8": "4b7s7L84tfocq96YDyUs8rLfY5YZe6aDBdqAttkYhNFkTLz4gAyUHEx6XJxT55K9BMoprbMVo53MQR96ixQMXJkX",
  "key9": "2mqosmQpw5q73wfpDZmfPVwDVQN7bYHD9JxSoEzZP7MoSq44ni7UaTxuFBVXVmjhkZaFBU8FcnsYjx4uemTPgaHG",
  "key10": "5hg7idKKzmzZEKtKNMpiuQbRuMgLZ6D8YWR4bT6kLYBWTQ62p5h9keXLYZjRakbAUZbbt4TdkwhgpkrNE3yhGWDk",
  "key11": "2MRJirDgxGYzy9wk7pnh71TRh4PTNwQRoNbQs77E13P5ySFhRgEhqswkDgbRceXh1fdkBNQeBEjbWodXuArgZcWy",
  "key12": "5YyLU2HJ2XthaQKMem6ZucikGQGn15eadA8EyptxBeRc9zKJqA6bBjnkc34GZyeoytwR8cksS1SFDivqkuf9qH1g",
  "key13": "3qSKmBvhuqEfZsJBdUBMT1bGVGr5b3Tys93GN9MVGjQGjtctATHLLngeYdGjDTJR1zgkZe7KxtAmsGZRGZBvSKvc",
  "key14": "pmtm835sadcYjxZiwSj1GAQESrynGiGxixQ8z6hJsbWip8eSSuvzuduJDNg6RnLH8BHUTX7MhaQs3PeLzu9dagz",
  "key15": "5K79LT6KBxjvdkUNEnJMMie5fgNgGkFVsGcTo8NsYASsg66GgzsAPtvSxyHqbfH1MuZidrxLcc1LspYKPdYaYqZG",
  "key16": "5ZgLGU4wRsDvgfjuJRNwhN2nyNPM2efYXg6GYqAB8Q7MyeCw9K8o9kdV1xhLS3P6mX269sxHopWXKzS9fQXXVTBD",
  "key17": "nZiYaD2z4UyN3Z6m7VPf7atURHyywy61MqK9EeeuKPY9rcGxkwS1hWT1Z7qVjGSu5R7SbayCas83GJdx73TDhLt",
  "key18": "gXqbZQ5ZwT6g7qmfgmRb3qS7dr4JkKnYdU4AC9PSytVAc28Hsq7GjsvgyZi74QAaZg2B5rENX645ep5KWVNuNqL",
  "key19": "pFMjZkETwKUzwupBngU8fdWoSDbApv3dyACHMBkVb7tQjoVyPGF8mi8HKrDnN2JLwqBDyrj8NY1x5gu3vEeG2o7",
  "key20": "5rHRrfZKxYRN2R8fnsb9kY87uH6oWK4XKcxrGgoHNwRAYdH58uhaKDDLRTQehZXws1azeRJsY4YWzRf9ogivDkRz",
  "key21": "4T5AiMrpQecTtFHfBbyP9GEGuKWAcd1pfBqT69EycUSB7Sj5wC5ZBSjXNmRKTmvGzuY5uVvBS4BR1uQA1m7mzx2h",
  "key22": "3q9XiCjbAqPg2JipshFCGmtumbBeeFuvzTVUqDmUdx3FbJuXpe7dzFkLL48d767wxpyL6udidpamWjBEwcgrxW4b",
  "key23": "szuvzTEv36hV6uSUk6Lo2nm6db3kceQbjWUMxGXetpEeYb72eMi9FsbduNDGSLFcPRqRqZyBZkkPmt7vmF4EWvd",
  "key24": "2KcqRjU9T5jPBWNY2jibpMYggdLKjUxFSWg7K2FZnyhwBGUzvpxj1AjNUAg6FaAo4RzkHSH9QpUtnG7T8Ag2fp3A",
  "key25": "49BW259Hf8gUjVKqSggkKpN2tKAGWCuDqcn21J8rxVnB5vQCbR9cNHJZJbqgEqTShYkugF9DmG5eXiVU3UNgfNuE",
  "key26": "2E2cxQiHvNb1PLdW3G3UVSZQyUtV1xnCjgo9t1kLr5EEdKtqe6cEcFVKr2NQepfodesNfo9ZmhumhKFkSPHEKgLW",
  "key27": "2zA59C3cdUnVzB4gwbdLZ4Hy9njcbBcAk8FP6YSUZafn8x7fYL3YosYLBMpVNKbtLief9vrY5GLPRD26brP46tvT",
  "key28": "5ZymLfT5B3eC8RurMwCGymsNWZF9jJi6Q19sX9ApmVne7LddoEU6VTcFGNrv5HtmuwqhpbKEkK1vkEXdCwDrMbNW",
  "key29": "45yWP7vV9AgV8D98UcQvxKV61kiJmUmHzS5zxRwgCGtqbF59kfo6aCvJkTy3dDTpSafDq8LdhHgqZew4tszQH13R",
  "key30": "KsD9xf4CkQP5xauRnWQ4iLAfFBYwSg342XTV2NNmQ4q7dh2hFdMkQFF8vnDuvg7rp61m1gZnjMGZiRZwPHsMRu2",
  "key31": "24XntfzSJnjzgbWYrwFdjJZHhbfBLpkKTTjkLUPj8NcGiQ4uyrfVzaGHdP4mRDKiPf3qCK6R38QTysqocLaYqP78",
  "key32": "LYBPcaLiCYuYpLPX361nuP27smtYb7riLzSAuBWVfULoCoXc3XhqMyc69uT7eiZW31jRQ9iiEH9Hq1FVeyBA3dt",
  "key33": "3izjbQ4Lmg11EWR64i2hJFZ9Nd9hnbCxwB9ZPMv3eCoinYCSGzqHqvS4rSB9m2WBGhuQhB2zXJvkCdMYnSQh6gvd",
  "key34": "5nVJzzyVMgS4HnU5e1gqmZHUuWw86pdFZ2WiNZ8r9FvV7MpJ9LeXZBU8Prep2kg7iYhmHaLUsBxJ6FW8TQ7jLmEq",
  "key35": "4TSBAka8oAetNRGfTaciV1jAqrHr6bgWRWmSSu2q379BKL3UPmsm3Z1X9e8t3ermRVAvTVyWUxoK7cDZCxfu6yeT",
  "key36": "3DenZ7vL7USiKESW1DjgsSotThx5uSgPoij6z1bj5MSrp4sNpjDtpp9AMtHTFWriDHoJ8PBcYiToTSySmhjsaMpL",
  "key37": "2NNkbbx8Tx1QuTy9MRfDj1arcQqiShwuGBTx6R1qyBJu5qoneSdAsjPYejUc4SMqsb6rpMC2NoHVosBGbB18QQUg",
  "key38": "568T45RmqY76Kj3uHfJCi9v4vRiddN56P6zNgT1GCp6fTBAo3fs3LYSk3nokV6hHp2tQ1zayeZKPKcTrHWfeJDVd",
  "key39": "32bFsakTguMf66o1wTD7EHXrUUMcyjUTJHEFqndZWHwrxctSwSp4DyfP3SF9ay7pmyoKvLcUEWx7UtJJ71CLkgBy",
  "key40": "Q64XC6YyVr1K8iePoPA8GYUdi36kxH843r23WgGgHykWjah1ry1U8V2Ma9AGXM9uyoMGjcnv55AMQdkyiGAEJVR",
  "key41": "4iGDwCBzvReJtcd4w1f7ZvNACb2SMBDfHwR4EbwV6M6pZspSCUG6zYEUTGNqzeEVbpa9RJ2Lr7A1QFdF88SKnEzg",
  "key42": "2dVMAo5tj4b4gyF3g2CpdAg4TpBp5nrziA8HTxhYv6NAc7HnpnkkiX8cRXY5N4ZxFvyHcFbbqSYAgjCHyg9XB3Uv",
  "key43": "3UfwTKE6oapBWFB4qSJJSvQ3F4PwZSRZJEwuUardoa3frDuvQzXKBmBFgYpfEmN2B8TmU1pW6u3vZZVvt1jMQczX",
  "key44": "541TszoCRH6aidBs2RQVyB3XwqQGAbinBhP57q5hBRdFCWaMKW3HBtabFCQNVMTS91kirUAfnDFe4kvhBdhiAKpB",
  "key45": "2ELhGrMMnj9j9UuzxQPNYUPszPjeX3d282k9fDYACufjiewLxpmxsDWwL4GpjqtRrCJh1QiVTZhrNgHXUoZ7uxhQ"
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
