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
    "3mh8uuj6TxSDngnvGqRrqM65fov251u6z1WjUKcnTQB8k8sYmj1H8gtEbmt4xaafRfCCpp7LB983mfvj8JW8YrqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXMvDtTuXR58LYdCd5RKzqKNAKbCk5L44tsi3oKxPMVBeyprtWhvqs5JxvT1WjLr44DeKNcSAmjcbD7SUxUMDWM",
  "key1": "5bsVtN9Vz6qe5GwYaentRuFxDt5D5rNRhyftUpR87XcMvyxjZnX5bj3139BvdibyK2NGRLK8WUqJSu5BhtkCNnJg",
  "key2": "7BYpsQtJo8uigXFNe5wufafbncrvzu1hP8eNuuncMWfQnqqJxXfaDJyCzPJdm2En5bzycx2furTerzAgJvJRv5j",
  "key3": "4iPk3zAmWzYLeTDpEuTDeFuRqhSMGVdeeMeWfHMieDxQ14NQgQiAVx23WLe1xTE1Uib9JSxcnvVm6c61XY1kbef9",
  "key4": "3NhCukRnjRRdenfgZjvkMPo5osie81nTuDFGCXq5B3j7W1Y6PmjKQ9D58ckfYoCjKeh8zspcd8MeSi2FUsUasFVN",
  "key5": "5hWV3dvUoNELaDHobr8TUqByhCy6dQsNcWe3MG33ZjZjbqK4xcbeo16FTFwnEL2yfpZFj3puRkXnq33KeyeikFqK",
  "key6": "3T1q6LPa1fVQX55KMwJ1SmnZnh5QKTNvxpd6WQyQuHVUFCwZ7AasS9y1EbKW6v63diuizeD5VuRpGvGRjEsWuJiQ",
  "key7": "V2SJzYjGHo7dGihAamdSVkWKAVpiYMhm3RJy4EMe9a7AR6HtV6aonH4gQ454BMZLrTieaXhg6YxEEs5u5Ho754p",
  "key8": "4e2LVPLKPXjjzbrK5RhU4cbympLGtiFFQKpwatUeQp8vhBeQEsfqCezJcFuad57iN846cYQHz4yzwp9WV6VRwxR8",
  "key9": "32K4QkSpSNyssQekw1kX8WhL2JBcMLkqRHz7KCxw94pmAu7LmkTaWZ6f9ufdCSD5raS3Ms6YhhW59rKC8RHXi9eT",
  "key10": "2zLPW8zdn7quMouZZ39rz6vSg1hpgMd3FN245XUJHTzEwLfKZhyM3mQonVxoDAuqeCFTNGsvphwEeNRsQsDSQr4r",
  "key11": "39Vfx76jpHYgEHBqNhchYkhdp1CQcGP9gBAsNZnXwTniRJ1zzVGTG5sFp3tN8MPyLqrf2KNuGMYo6fruv9SrE3Yg",
  "key12": "VDsRhbfAZQ6SHvWuqi2oMRST1xD71BkXHC3w4JkgTpPXPEgFk2emxyq5M497wEXx8Hw8cpcW5pYgs2vKJhuGPP5",
  "key13": "5VsLQAU3hkjaivN3GpXE6DZ9CvMPKuco3tBBNWwxXjzzca7NhM5XrurUa3MWga4MX2azfcAEK228meTTaCQyR4f1",
  "key14": "26WyC2CYPtrrVhzWdBYFY6JxVHSc1a7EWn7tfEM7HmoD24LBLxMgCce11kVgCZvWSAM5WpLZJjKJMW3HbSfaU44p",
  "key15": "2aUGZTGfo8SzAr8VUR7jVgoytDeYmtdQRM64RK7iC7wdtan16gVPkjMoq3J2dwENLJxhpGfFtnTi6tG9ENxhzCzY",
  "key16": "43zxhWNPp9v49cGKY7cuiNNg4fXD2H9giEXpQaE3Y7s7ap42n1bM3HqvRyHjdFq7KAnXEW1CnkMq9k5u5ndfirtM",
  "key17": "2dkFJxSofAq283ihHMaJKmQtCTwE8hjmTR4nuCRARGgUmYaZnxxXMWD6AX2VNwSEMFKBZCHcVntEMm2kpDs2CXYy",
  "key18": "3zBoxSSU1dsQSe6iM9rMmAxUCwFvfvK1YMwSZmNBp6mkcapfQRfEkcdU8R2HywqeB2YUKa6of9Xm8k4d7SbDHd7P",
  "key19": "KSu2Lq1wGAXwDw1Trt1KU1XwHHS11pGy8kar2ccnm7o6CBs79qW29YhoTYxwc8h8UxJnED52SPURVywFDyZ3auz",
  "key20": "mkaMD5sSZo44x8VPNuE96aoqMVTr3QHtq3GusMG4KBMPRp8AAGgXH4t3HRHMPF2Z4Vq1HsvSJQHDyEdqhuG4T3j",
  "key21": "2mVobq3a9x6xEDeLbCBPK3abGBgkagECnGRdtdCNE5nQHYQ7rygCdHCoo2Moq9tNt2uNZEndQJuPEzbh1kvj28EX",
  "key22": "4HCmYrhYpTNqTPnDLuNxPr1BUwKVCP6vuri88S1bQjsto886NVZfL4dQnf9fYAF136cdFgoTNF2e3k1LvVwgR4wa",
  "key23": "2ji2zGcu31emBmrNFFAbzuNWdBSTtP1hLPDqJoi9wxub4CJRnJtjBYdKtHNZqwM8hAwY86QkbiDkQgvjpgoHtwdZ",
  "key24": "4Vbu9GYt4LiZxzjqFz7X2ecNLPiNXGFjVWEWkh9P9N7MEqchf3efoZMB3uXBLm4KptvLPCmxs1HhcKzaaoBKUzFw",
  "key25": "4fnWXUdNyC8DhmPS2mud8c2sSV8jAJgRuJJJH48TuXF6phNCfnEj53UMdFjfX9xVhPQZ4xDZZiSohB9eJrMAesYL",
  "key26": "4T4Ab34mDVjY3iX2wj41sDsHUe9JyMQchEvjHxjwEw6nSfq9PBta8y5PLAVGipTKByFcsgzo5cCoejAJEN3SGmeP",
  "key27": "4kWtCiG2zV5YKVJT6wL5o42JhT9YqMsH7Apbc2w3sDZrtqueMw9M9XQLbWvxMqLKGUZcQSAiuJp5WXZ2UxheeyyW",
  "key28": "3ZbADFgGkStxaau1qX6eR2eEoJEyCzxTBs4LWUkhgsenbKsH1JxuRy1vYHSmCysawcrYyvZzCafZBwjjzDMRzjS9",
  "key29": "52869aecSZDt5JBxDCTJUW8noK7Vjni2ZYaZbTpyuhNQg3G9jYxWH8ru7YuZ1Pm1SHKBnn4EvevCHWqnNrg2XhzF",
  "key30": "3wGz5bUE5XtGDvgc2RHghekZjbWu9t1a2gg6Z9YMpZ7Nmk87WRjeSBFaLFtuBUcor7Cj4V4CMuVtXdgNFXeUwR9E",
  "key31": "5Dyo5v3zCxYdQJXGdMrFq8ySC3zdL8g5rUhUjVSNsraupN58brpbuKajGeVWFJEcENG2jFQxgMJPjic3D2t9SuwK",
  "key32": "447MazHockKuC4bH37Fr5BTQEmPLfXU6uwZz21jEHgHyxPHMEEvACAzXKiFjKSWUUrXejk5fuFJW9KLqCPXAbS8C",
  "key33": "2MvJwUrQnZywMNqLdUFp8MaGkQtZ6AP6cBRU5nXPcGX8zWpMtjuF7ASpq9fPXLQ8FMsWz86mq8XzafNGPPAqy6M9",
  "key34": "4cy1evRiZFqrkNcuwjzeLw3u5D2hNsUkYUJeMYpywNgdjeTp8heFu5gVzBKmXxECJxJm9V128rAUzpDq6jDHtK5Z"
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
