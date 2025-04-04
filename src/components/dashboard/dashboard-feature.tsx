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
    "3D2WdsU9pD7nsHVGYnKo2Mx2iGPHv3ywRDbWH2Rd9d9k3QJNcCDXpw61sJFpAWR5kWVVTKFN3j3xe59LDA6TCyRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrWseoKAnBRHJxtciCSmYSmMHpPmsTRHA3AbkqGt1iBK6PUTpmXUsST2AJQy5HvXrSRNHMvjiWiuJyfxsNhzV2n",
  "key1": "2dBGgW2w4ipy3N7MZsd6GNuawjG5wNYzus3ZR7YteDCvYmbxqwQchDeEvzxvXvNyhNqnvo3Jf9qkSgBZwAKYitBX",
  "key2": "3WQW24iZ376Ze2kPeFoH2r3DkJ62cYtKqK4em9qXZYCa9EyEa4MwnmWEi4CbjjjbZAojFw4vwDqrDmQznY6wo2V3",
  "key3": "5L9iP6YZdBGhAs1ZwJzrgB1zHz7hDaS8kvFjivN7EggBAffzwQWqcnbYfK3jN3aUk3WQrRviE7wEgo5fbUWPzeRJ",
  "key4": "6u8uTwTA6yuo6qLLYG5T7rN7QGV5XLZNnUn9TzM6vNiM2XcvBGQhhjTACBaGuCVtAd38cTnKKbkHoHjXS5mkiDn",
  "key5": "4HYyZfGR7wZFJmuERR2infkii4oNBHmWWfWeJT6JVRGYTdXykbTgpDRPpWsYvhCCXQG96PaXFLGuowSwgQhCcWoU",
  "key6": "65CSWyyhsPd17niMwVssM7gWePMkogGCW8UFK9hu8ASSrhMLQxih4qdFCahJEZJ4uysioLSzGWkKYEbkMPBUbwuB",
  "key7": "22m76gMcK9FSQezcvXEEgbgqp4F2a2gpXZdYqd8539HNV6k5NZ5YBu1TtFSXMT6JJvAsDbcS6sAGJS5fYYsSQw4W",
  "key8": "2qM4egjkKCgrkTaABcmpFdebXSjHRMhWbTmT5SmCQnTJE99vwFYemc9ExSCiz8txaZweGqDNRGbUo7bEkGacQmwG",
  "key9": "5kHtNLZL4ajGiW1XtAKp5fM2R439M2jTWmfWrhMoaUHW5w63jSrnM2teyamDerRf8hcVHashZAR2anobxAN1NnZL",
  "key10": "4zamH6enpK6zSPAnvuUfm25nfryZLxnUDbHEEKZDKcwJ37hfZ7g6mqwR9VnjiAjd91stwQTzjZ8oezMMEoarW9Ec",
  "key11": "3mZcg9kwdcKsEr5tL32nLbLb7ojwWkzXznzPzphCHsiJG9cAi4gAZeDHaFemi28SUQH982QC5fzbRL1HKq1cqdR4",
  "key12": "Ws7Ts6ha19LfXWrPjsjsDhGviW4Rtu6QG5Jbr93VBLQxwGE31489LrXV7QWrmC2LWHuUZEsXf3SnnmTWVRBaGQA",
  "key13": "Y5uVQkePiZQ5deUiFSmrqLmCDfqwoEvK4rCM2mfKLKCEMnsckNU3RBMikArd1cFvufV2SuhZ2Sbvhrgs9qvCXdm",
  "key14": "2hWPV5Sn6rQee2YMYZYNRQC8GE6A8Q6a8XmHU8jA7LANj8ZAhDX8fc9qBJH6e8d2rvMCTPi1zntsrihiwK2MCN2v",
  "key15": "kpazpaQh9hvTn5TqVLj66a8q1ZwCMNa2SgHfZYV8kNrBWun1FRW7M3a4hAdwnSYDA2heYFg89irfmFXHmGAd6tq",
  "key16": "5cBuZQRdnoZoHW5GHdwGQsjeRmYVKb4hAFpVrZgEaczh4Q9EcAugAYd9fW12VBHFxAD2NPVk1U8YxXXp4XqA52gD",
  "key17": "5JRh6TrJrWdEwmsv4hn8UkfxP6qA6YHEdHutD4KXzu44gzKS6fKNfWQagr5FYs4iJNQFn58vpa2Kq1uvLTToa3G6",
  "key18": "36oVtCeSrgbTNLXpe8xVNzAe5qpoxK27eLG9ZtiiAbobtcJLhGVrkmyd4Lbx2rbAhvMmHNRin1gCjYsZsMn8Ev1A",
  "key19": "2paqVz7jaD9fB246nnQbP28B3ACHkoGRe8MfaR7nv7gjPH7si2qLUZEMvBnBBmyCG5muG4WTN4FWBmkHFHrPZBZ6",
  "key20": "XVUTF5VrRFvRU7mkPQWS6drTu5dEZcJ9VRkKEn7pVixbyfaYZPnGMtcC1NdfDyBj9amthXwUBCBUayjXzPiHFY8",
  "key21": "2ZfS7K8Vbn1T8vacLqdLP38McowAYg288AvwriC4KTMPRkN3GJMQ5bo8jYeesrtYMDjrttvX16nUJMpPYpvtGhvD",
  "key22": "29bojqKzoJoAkRkWX4L2XeSXAiJKdR7mgkgeQMgHDPm4TcCTzHfGCKDcjWQXTiWAQNWajmDjh5omJ6edTCxarUiF",
  "key23": "3rzXdj7CpTc1guikoWkT63FwssCaX1sK9CEG5MFiZHA4Et7xDTjPztLXj7tP1BmYBWWK79zPAu2ANt8SMqioF6yc",
  "key24": "5ynNqu2Fwp2Ly765YnGpth3FNArXXaDnV3mMhf3EGQPBLC661ygyDMYHDqHH6ANtDnfvWzd3BfNYHJ1J9VmLeXQy",
  "key25": "2WGc8w4nrv9Es77xZeuXgEwZkkBHo2gAEzDEj9oxWBzMF8B8pYwvQg4q83WMMTvUqckcHMPyPQKmP2NJC8CJh7uU",
  "key26": "QKZCj4mQmjah7RvNwa2ugzJjNnZ3xYUpctqH78FktpoYft8ezK1LgrSHDqjyooXwKYSS4YoXuuNwQCYdYwyskFQ",
  "key27": "3PjGhZp55Uj6sRsPxmgE36oCX4U9osrcmdKLVt48kuKW7abvW9kjtgj8Hq8Zk5emZFic8GEWkufE2sAVHuZhuCkb",
  "key28": "3yosuR79JHKx6NFBd8VMffnEtLPY6sdEgs6v27CthfxUsq76rf5MKoQENAwPcxWECyAmZEjkxag3iruNGzJApXvb",
  "key29": "4Fk1cn7V3rBeZeTg3ACTMFJ5UkEtp1o1yFGi5oiEgNK4kGfBerSc6TQd7ocJ7jkEwqfzqQYZvdKiTzLm6KHmmddv",
  "key30": "4CC8MwxRoFPYuBBRM5tVJDEeQ3F1bJL7iz7cs61Dk4bfsvNe5P4i5Md52WuuKpavbkagnKwXJG1it2QU6BTnwjnR",
  "key31": "5JVaQTEDkkEewoku8LPBnmSH9STjsavD2dWV7NDH7aLh8Lt8yR9ibp4vVqeD5V99HZqis5gv27V5duVA88msPxY7",
  "key32": "3CDCzhNFokFJQRe5575Qt6LYFptYHFJHrcK3CCVzzz34TNS4KKPd5JsUYVX5XV9W7SHWsQ3VyikGfMgvhFFTgRvA",
  "key33": "3CS3vdKSoe8uwYoWtLvfsA3KB2Lx9BPNj6f1ztftDNyTr7FcFvjnCEvhKUU2ToqBGn9VbMWQYbS4L7c6rfgvFxz3",
  "key34": "4BD9VVqw3mcKuymBKDsuNi5gvAi3v93apMVVKMpypMeHBw1UweZSCAKovJk1Pgf6XfkqAEJtjPYf6owPHBmWjZSx",
  "key35": "XcsL6sftW5hWBdQ9AYneRJpWoKJfxGRBEhA8U184AtEEjDmzjYKJmkpCm4dwSeYxaqVmhtzAsbDKPmbykSqgiui",
  "key36": "2CAPWWTAPR2AEwQVQJbFSBmVkHfDUGZSHZWQ916GTAbtveDHmCsCoZf8Pq8qZGjtyxsEexyvpbfbutmzyLstN5iF",
  "key37": "3k3F3Z74ZMSj97dbagA3N7xeZ3BfvK8m8PvsgxUJtzMDp5vz1cticLXAGCjwXxhNCaUxWvqt1ncpwjCGtsLn8TkA",
  "key38": "5PeSzxQcrydPavVN1Thq3sMDpAEMnaRcZVwhwpT9UPLQxAHNKK9KykXquztmChhcV6r6sLUaE6SLNW9LGSmiU2Cd",
  "key39": "2d7AT8Jc6EM7cvZRNj2BGkyDXZKcJ9RQocqKVL4w919jR7HFyimxbJxKjbwAcBRjgqb45a3t9kk65RbGSocxAERq",
  "key40": "3Vi51iCUE6fU2D8ikRum4j3KrcimUDfo2LX7iQf5zwf2s4BaY6Z7KcNdW4eYWqmxezFXktXqds8yTivNcaBSZDbM",
  "key41": "8WArpsDVqkEGJ4ZTdT6LH5T6Kn5MBqb6CmBwKUVVQgJKZoFUKmtqmVPEcAN9TmGvNjUXACwrkrjX8oub9TE4qin",
  "key42": "3LPHFQ8DaA3yp8p3vQgtPW4nQLu6maqkLiBLwFvrwYjjV4LDffceciiahuUkPb8koKLFUCjp98PkPZAujptLhmE1",
  "key43": "2msdfXJnMYqnRfnb8xNDt3aq34LrGVSYmVEeXkvDebuqAeFebZLQ2caSftK7eyjp1hj9zj3FnzRCRoXzeH3f9Qt1",
  "key44": "kBA4eq2EzpJ99nLykhLhuk7zWQEryHkUHYJQwULDXzh3Fo8ikMLHDpYWrtmKUaRjASQvakUQ36tbEe37akDNdU7",
  "key45": "597BWEuY5Yn4CrteNVU5bCUeno8AwGd94qZcE22fwH9yUMQLmCoDGrFtNSk5YbqW1bAWhmj8vkw2rmiSAwd5WyJD",
  "key46": "2ZjSb1oRawG3MbgWcUCWvtAKxGUSPuyuqcxWHYutRDAQhnVJEiQ6h4oiCqQ8aP6u6s5PVvrUkaHutdGEPz9yzBHA",
  "key47": "2Xr1DXbvhLKwQUiG5Yq1XY7tX4q1FYyjxmBd4Fz2ufUCPpeHSyLeQUSF9icUsHykZtd1BUut7frifzP53cEm2dH8",
  "key48": "rYm7ZNks9Hoah75p8ngMNVUWoR5JiHHtbwEsvDhS7vnEvB9hzjTMg7bHn3Ej6xHRaxgNm5frn5JxN8VcA8rpoAC"
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
