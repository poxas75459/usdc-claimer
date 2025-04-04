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
    "3ohMfjDGuLFYj43YtTxKHqhzE5xu3pntcr8yWb4cFjMaMKaapQ4gtmirZ2RUUL4fyncHXHMo7tzZ7ajc9oHXu88q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxN8AYNqzmhTkRgPLDjLpSbHojVL5nGzytqxCmedV6tY3xv5kPFMvMAwnd9MtLpLRyPgAyqyoFiNLA2MsvqtAsE",
  "key1": "3GY6jWK13tFajSvmdVaX2gJJKjp6jiBS7xXW172NNWujduFmGPCpas2SS9GGu6xeT9kwE2X3paT9FfYhkew4NqY8",
  "key2": "57aaSXDebncnDw6QUCJ9Xw8KPgE1wepnFWxW7gxhKrbNiyiyuLdEWRpPyQtMvLhYm3tbr84uwnN9txbxYDfdpGiJ",
  "key3": "5zQ9ijSBcVGzMvLC7zi1N9e933avH5sfdizzUm1q7PZ52p8RY66vutZGsjw51VJW7LzdqCD497XyMaaLuHqd49WL",
  "key4": "94XuLwPFjPow5ELm4SucgZkwrkBRgT7ncq3eGT9QAhsnxgTWZjL7dfMCzg9V7Bw9N2uodxnWLXpEcxQBNb4sryX",
  "key5": "3jUKWWPH3xEHZB3qXF1dy3UAouEEbD9NYwiZDRZmDLUC26Km7uR4ttSh7HweXHxYfTihrSzLhu3jegx3LoWC4nFg",
  "key6": "2o8WTQmB4pAaCfuWTaYQfLUGD3GDxp2QgVvtcTzbxCsQbUfd6K5hMqz1ifk9UbRTDaQWeY1fovZeHSycRCW9kRAX",
  "key7": "5BsPWRd11ef5FkGr3GZg5G5Xp6SybgHBcjA6rBKurFhKorKR5U93wGtqXiDxaaxQ7rSQuR2eBC7YvHCt7jF6NRpV",
  "key8": "3PuufQeGrXD8nzqThhtoRQ6Y9Fn4EW5HhpCJPQoxe4ez2LK9obJj2VZ9izeAz5kJiu1PmmDgtkw1F17pG1SD3jQE",
  "key9": "5ucWMczcC3KJcwQKZvgpPTh5dAQ47ELZEktRG4FtAkKF9sBnYnr5gPRtcGuar9yUKtKafwN5PCfrfBWfRZRMt9Cq",
  "key10": "26TADqHXcCHRD1WeEwHLXMo7m6MejkRbZ9kdgkHHA2W67KUsrKcHVRDKULkYSgHAXY8QKM9yyvR1Xf1PpdpLQYPx",
  "key11": "4Nb4xmxgxGFxnHHQfzecBvGBrGJjZiDunZLzAVknvCBZLVwrfdNQF8iQ4921fLzYG5a4w6TSPPFpNFz8FDWE1cS7",
  "key12": "2hKnghbEnW5JS9tYfquUer7FqCwbCs3DFPw2jhTMZSAPczrASN5LuHKZPXYhcbfi5bMD43nFuDFa3s9KzsFhiJcz",
  "key13": "45AghvyhsTXpTqQPBQ44AjqVpxHakLCSVsUdKE3s8fUyUgVG93zPq3sLDCS6zGiCzzih3ZTQsHHyyMHJjNMAJnYW",
  "key14": "4yb4y6DeAoG9BDoE3UDgitgCKE1h2dBobLzG2gKMMPwPHMxECZcZVjmZ6oMYKVG4KRPfG9CKH2q3NXaCVwUAMLMB",
  "key15": "35cFd5RcxCKKvqFwyqbiv7pyMw13aDrzd5kX9C7AGAKWZ45KjXgvdUPQHbcmA1DXBFG1JayPph2ArazHy6d2dV2q",
  "key16": "3kB7N6L6ZHq1voqGE2DTqbw6uLuhZ71rvKgSz8So53JLrPgSZ42tZ3Jbo4JvGeqcVimkHwPN8ni4S6WuipcrPEw8",
  "key17": "4fZzoQjo5wxo9SUuB45W7uXdArekJHv1AwSECPYsuryF7FHeP36yMeBBYdTzUMhw5iSQLVvdj8NLLyC2FjaWEmrn",
  "key18": "4UxXavcucb3x9pXeMBUiu2wucb7bt4wvYavsjXE9XXCYWdyThahRs8orWGqxLZ2PbXHJgAi7kcCgWR6KuoReFCyy",
  "key19": "3gjge82UY9z9rreAN6r3efgAkuJJzfxSeq8oHunM8kcVc2o1qwKVkJ3Au3wnenVVEWyL66reSNWsdsWstyheXesW",
  "key20": "4qhQtuXJCb5iNg8vRfCoGWMh4n5QcsLmeDrmdVqD9rV2jeUuKsDsmghWbYFJ5AgNRwgPyZY6fJYmLGQXnpFEK48J",
  "key21": "5pc6WukZCBnQVZMTPkq1SkHQJ4cyXLZB13jA9yUi63nbG6W7YM6dJEAtxWKvYydzAbis4EQtWVz5LpSy1iWjDfBc",
  "key22": "2UZYbo9z8jfYATmGvJfJWvNA2VkfEEE8N2cjDPSNU5QLFwJkXt7ajfXV2ZqNXPUSkXDsBRjAcGZVA7Nipg38NsGi",
  "key23": "5D1QSEcqLnKUmL85Jp2FZ54mgV2bZTM1eGsbUweNm9ZjQ1hCQaSxKZ2WErL82hDi82kFpSpXD2aEGkPcf8ZmyZog",
  "key24": "phfXvBaNFiD4xRajfqYnLdm1nA8tueuzRCahieGbxGewjiPLBphS4EmUUunc6XALpBEbG1bPH2fW2q6BZmrrmH7",
  "key25": "28BkBrd6yCcid2AmizKLY82vc7pzyUGsibT8Uau6g5rNdWTVXifarCzYbdSkNayiz2D8tgBcJnAWH29tZWip7bcA",
  "key26": "3UCcgpvHh9VHvza1RCLww7LjKsvdZFj9pGZAc4Zn4RUc3HW4Pfv5qpBx8XFvmmzmo4bDovaxDhMYUBMaznxQFxyj",
  "key27": "sjUAaQQAKQa6YpLvBWbkxZKLiP8eFbPUVUwmkHVv3zWB1cUHiUguzzjUALNQHJ52N5iujQV5ABypaxuSyAtxoU6",
  "key28": "2198QEMKXjAvXw4nRpcEvNfpvAog9AmkrJr9wb5XbrCvakAvyGuGzYeJd726VgmHBDcT6B9VkLJTENBRVyzoJyZe",
  "key29": "2HHPF2Yzbbk27LBHiJiGwx3zXyz9obsGcBxERpp99sJpAzYCSGaX24cvD5nHT1yR569es5EkCiEEAoXhZU1Sz2cG",
  "key30": "3osj9UotAM34vuGD3wZF5VqoLYQErCbJ4AzKk4vsRs79sq4TgcSNNcGjVxYm3Zx4rEgjpgxF3xgMAP7mvUk8bX6a",
  "key31": "3agWNc2qB51LhdFFEkofPvciypM15yz4YSCTfx6mtMgtbxkDjZbRdHW4EaBTUSL4n8REsDK8PQnEbEHmkrjp5rMw",
  "key32": "3qK5buPDuvE4SVya6jpx2gAqdqLhSSoZDhS8ztgdtbtK1iKLa44N8RYHHAJH8GRSaxG9JF2CnWNajpfLtfgpVFuU",
  "key33": "4SkT7WGYHXkLoovU2DNpFNCGhKRthgKUHdYVtRS4C9wNDDcxDf3zUUKMZTiZbqrjEkGo5TC2uVfsBwHyC4GxLvJQ",
  "key34": "55XMjaaqGc3ykZvfQ97due3QpFBjV6Sr5aWnpAmHALVJtG7g5DMaUpquYV4ireJYp1gFfsJPTvJ1Bf1h5Er3QEx3",
  "key35": "5dXNhuJNu2ucvNnFGLgBq5fhXkQysLWWWSKXjUP4NNLDZkvTuNs3c76QbPy3k4oass9DUiUJJ2RRfVxcwyADWENh",
  "key36": "3usWDJsiXMHGAaeK7Wo4KtsHsYupb8bWKh7gcW4wAJrJXjKXpgrnWeUcXjgToa13uScnVDM614jL7V5XMibZpE5u",
  "key37": "5wYXDAoUHAjNou17kTwqZoAwohioDuSLEWWUMbFDBZfvK1ipmv946haf3SADKaJqU2wEAKcTzQ9Ti76T5Jj5USTX",
  "key38": "2K2yQajGzk64m82F9iyR968y2dvc5Q4qxeMdx4AibqtQwmrqcNwD2KNyZiwFtiuA83FcDhDiUvmvbfVigNtmZQco",
  "key39": "48PcesnVHWK87gaqk1jcztNQw9zbMFw3m2McnVafRp9jBDNDVVJdSKfzP6BzcDmDbnseqXxYv9tXaL6cSuq1NmYS",
  "key40": "5okr1MfeHaz8GmfsM7iE31fqfFkQpj3kL4g3tQ55vtZH8TRwBGoyTMtQjxprvbTZXbpj4NLdANKxWdQcLHEcAeDj",
  "key41": "5Rdcnaiypn98FCsSS1S7UNeBowE396s9EQHMN8YFHjBiExfY8pQzmnSu25z91xpwA2nXUg8D3DT8HMc4kBBvASMZ",
  "key42": "2moi55KvJWshcRyTA9w9Q3tNxLVk267wva3TrQJc7Q4YzCyEtJLEvrjTrjqGeZSTzBaXVUkfhzyuW4T9AxHZNQqK",
  "key43": "4r5fh25CXu3NoYNrTCR27piUpSCLnAopoY6BBs2FsJ3hYv5jPKhB4MV2E8wfiu7Us9P3KtPB3tzRk1SePcurGc3s",
  "key44": "ZeNY8CDfMFQPcGE4B6gbRZJ3zwEH7WfYDHUkwbwpjCSKZihBsucpmMKtvt8t64PMYEvmBQqhR1rNbHkHZekRGiX",
  "key45": "32zrjsfPkVe47jzw3r247PbWmLwRZ67yP1k7Kqvcqp7NBrJNb6ueSdT82iJ44CMzLN1r1WRmpuRjn9YPqzNehGhP",
  "key46": "4E6S9escEcgj9oF3DE1DXzX8TB4qUcaUcUCjWaub2Yz6WVrvLhnNSebSfqaXZo7SqTuWJXtpSnq9nvCaWriMjvSU"
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
