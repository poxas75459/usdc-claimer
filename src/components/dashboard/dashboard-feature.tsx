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
    "2UoXMSA73hs4pm148dP6b3FHskmBtgPqsv745uZrzMuKphp4zAJu8zd9gEWTeK66BqTqeegKZkMn3q9mqtgThz8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NSZKiDERHjq6JR9grJQpSG96adUH2CmjAK8DVkWFYAMzXq371HTP91PwJpHm989rNQN2PyfdQfvGwg2Jz9VujgT",
  "key1": "5iBZzwooZ4eTBLSDRVFatKVvd6SPXFti1v4j8SKUjPJMYiba9CSxT1wGJYN2kCHUGKmVYf8VeA7gDwMdxYYNRih8",
  "key2": "j73CShHx2eWLuayQkQo3bsU5WGuoyxSSNLdzJKypLhvUNthW1uUBWuGA8DDcPuUxXZFBXm7dDKXnBCcGpFND3KY",
  "key3": "3uFoJ9GaeHLqE4SHKn2DJdCnmEfYL53De4PbXGToTEPNA1RyTd1NBa9RDo9goNSGW15u9HRPjCPYQiSBG2mSBCnT",
  "key4": "2MDQX2w2Foip5JAnCmfUF3cVa8F5qMrL63AHvN77bFSXbs67YsixbvxjG6cuMJ4FJAL2NkhzxhVkCbgTSwVuB161",
  "key5": "2Jto4pCPQ9uQtvJF1Qph3SrCEUcXzGYSBFLw3uqdjcmTpvoTNGHLujACxZutWKaZok9rwtcrX6BwfqymHwuwT59K",
  "key6": "4aSsBf7BjZieJSUe91P7m1Up9XLeu2951SUBDC3Xd8ZFT77rfqmKyzhyZv7GMhppRk5GkBxRvfy9XKPRfneqRB2x",
  "key7": "JwqZ2MW61c9dz2SYb5RUfETNUHJa3ygqjgRri32Mcsyomw6986wYf4pUcgkaiYiW2own6uRR1JgfL6VyKYZgG3w",
  "key8": "36BENRB12PRNEMd2D8VEM6ymdDgonz1E8qSjmF9p8Vuvk8dU3Dp77WbNJh8Xpvs6kSTse5BSDvmDQbLY4tbey1gE",
  "key9": "32fkTpjQwBMXYkHjPf4KA5TmycsdqKHQG4msdX36e4ESuDga8fuHEcW8vbhxkioyGSj1J95AekMeF2x71TEEWnpK",
  "key10": "2N9ZQwbTm6Nxu6MgVUQKHFDed2hSUtpQTUARbUibxt7u8LBQVyRZ7h4zFzAPokaCA2M4xaRZGDvofaQg7P7YSGta",
  "key11": "3sD1xKZSiV51u4zfe5awocV8hHvrqEaJKNMTFVVaXrUPAzct47jCsm1WSgqV3ZeABwimK5uKn6LDftAERMF4ofYg",
  "key12": "XSu8de42iTcbfShVbBDmnb15K3izPQtogY2J8NQiKaj4AQtia963kG3L2GNuyXGhq9xnqzSQJhix5nvAoif6Uzt",
  "key13": "5qaH7go6FYREkisoShZn4UDUEY1TRAYPCosytkj2xpTWNnUz7SGwca23voXh3WUXVtpizCcszJZGgzbysmqXuq9T",
  "key14": "4wY2LE58ar4BfqVS1xdUuEH7dQdszADrCTcnE9Kei9R42kvCkCxPYi2rMqwVxTwqgc1kUzfGdLZ72hyr89tyYxWy",
  "key15": "2YsYks2ephbccn62r7YS5mjijF9SXxH9EnomV4sJkhdyPy2axhvVD5N3NSHxYcWmrNL6drKTJHsJcXLyDSxj1Xsx",
  "key16": "4h1UShJvYQCUJmepbUhSaz6uAmx8HqDD7f7JJi4ftRwJZ4zLRGxpByRiwGU79RUSEaxEipTc42c3q9YnWSzaGrD4",
  "key17": "1HLq2rXNGtp5D1nJ9X8Z11X8KdFVwg3Ls6sKhdGv1pCeu7cSHFG98z8QBNGGymxN13kc2nXjKwDBCeyCintrYR5",
  "key18": "3GHDWUMnSQpmRnpznFufjcRUido1nYugsygkrZdH9r77cfWMiEaLNQSeUofFu5EVKJtZv9CBgna9px2F3rC7oimk",
  "key19": "rxqJEbp54H7pxKG6hgduj6vh8Zmjth3avjnWqv57WcB2EhbQRWd4k7uL9qVxtgAxFyGB69oTktxBNU4WpPDP4DE",
  "key20": "3bQrtDfK38EoxMwaUU6khDUoeyQo1mZuNb6Fgu2iFbVTM2RuMZYmmiSPsCWk62rwRv7qSFMKTXSLNAb1ahFJsmgH",
  "key21": "4sKWaRM1wuHuWcgmoUtUtUXiYkYJU6DtWmoRUY1h2FMXa3uR2b1KpbKdBHK5NCg4WAVmqbBDoFFXX7cKG3tFA81t",
  "key22": "4cuFu96fkpyjNSSsy7z55KfZL1Y6HnLveEinAekBY35RXmjqyDPpVMuFFEyTychHvkDLauMiagN9EiHSMWqqHptR",
  "key23": "46KftFWMFzeEWBKdKSz7TNVqJr17o7QQsq21egQvmNdnuzMXgEjoUASXsiYJxDdQGyh4GSqf9Pdrc5t1usGVvnBt",
  "key24": "4zVGFXpbAwpALyBVnRhz3oRuLubLhXBJ39WwJubNaSy2vAuad7RYQMghsNU8xzP167Knot8hCYKtg2xKvdCyZ9bx",
  "key25": "pLWmxGJY2A2RPUdhFVvfLj1XLfnpEK4yf558dBEa8MUpQncrDvXJzCD2Vz9ycN2JN5SBth1cuNKwKA5oGedz38Q",
  "key26": "4eXcZJFf7KwuCoGo8mwZyRSPoS9VfVgoCuHQvkZ1Fzh8ALnv6AXzbb1cYsfBcXAq6W1rUrQBT7akpwKcjGfq5Kbp",
  "key27": "66JkXNpNpMdhivPZ8GWypKgYPZ3Ei3BoZcLnM6q8vs5xKrKphoaeGfjKt1n8ySuteyDmApgxHYeCLPZL49bqaSM9",
  "key28": "nF9PzC1tCWxCf2bTwX3aiRiZ9FagRVXB9hWxZJriAwwSZ3GGsZQhF5EDH2hTpjT3NsWvr1x4DbRgVhbP14nSwNB",
  "key29": "2sNdSq9QNUhoT2zpy3ZWsUD3gmDMrZs6NFMxQdFZKoF2ysSLCSiD9iBL7PQjH6J3GS5oafTMQpmxT3Mqot5NKW19",
  "key30": "4JAi6xDtytdn5Xmod7gCjUpxR8sbH1d8opwp96BQHRBc2d5q2LLv3K8J6vDdTGxTd4wd2gDjk8VcB4oWxijzyjqM",
  "key31": "2th4XXFcty4Q6PzBKbAthg8RWfbD2CqxZgtS3VjQmfSi7ATL7ZuEMHhRzwgdxC4yQWMw9aSSdPtrWJDzBVJa9hPS",
  "key32": "27GP4JCypGSkZU2XYgrgnef7X5VZcYvgbV1g5FUfqTyztifGTZQ8UdJDgiGcCuJ7tQoVaHkLms2kUXJRtJ3e57BQ",
  "key33": "5n7A6w2ofemgiBbg7jMCxjTgypuXXmZ66164rpPtcy1qvWtcGu7WAtX54Q142rhQe5QeVjnwazHbDJ6VcTKUHWG6",
  "key34": "22Pp7WWKdjRXeA7BgKhK5e6cjVyurb8giViRFxXXrFW39nsPoYFL3ArigZoVd14pCXMPmqdqKbKvSey3mKXfN373",
  "key35": "5jZW9V4ecoMWGgy2firPPfqW2GGLiVPZRxChCxbmhbNnHEEyKoPCniCU2UdTspM28s1d4PRayDXVgzp4UBwAy5rq",
  "key36": "2Kv9buLnA19qGhSdA36PjkCxbajAregQNREJLeHdSRECgg1jgufCgVtBCQJAdBFyrX4cYo8qvtHCpTSPGzwvFSSv",
  "key37": "2NjCHVQnqpHwX3nT3ugDA4FGJ6GsAGGnoJzfZfUAKzUsgnG48r3KrUEwn9xzFVxYfEyXSFi5mc37dHA8qQmj9ia3",
  "key38": "4mtCMwwbHV9J7ryYEZoHcRKWctuUbaZsfhLNHxgkh5N1Fpsr4wWtnouzLdCSUnngQzLeNsZ7JgcjrWRnuXDFuXiZ",
  "key39": "667CXj12L631XGMK1cCooJBEBr2WVYxj94V88KGzTv4eVJ9qxBqviFqkiEpJ5QC8bhNuoLwySxMfkGZc4erd2iAC",
  "key40": "3xZ4J9zXzwX9i6NgdfrT962CTGsEGyfwXtTGeh6CJVagv25hiUW7hpUk87AH4ukeQGnRefPZv1uNLQ4LiN3mzcYW",
  "key41": "3aShV36YUwWoqoT5eFxUBZ1cY6ef1EcsuZ5H8PoLU1fUa76TWYxVNPc58kRqnahicbnYHE32f6CcDmzKTJziUxvb",
  "key42": "5Jp4daMFLHywQqrLFzQuMo14RS3SHw7rPCf4QhawP93r4jwNQ2makqYcpGpdF1XiTjZD2cGXYubKwK9QqDpXwneD",
  "key43": "2a5dR52y4n3XHvBMZL5JWmfJrRxtHjVvKvn4GjqBFZvZkwb1dbJ2uFmBtR9JKYREvX1WenwjvMSPY3QEJLLYWpA4",
  "key44": "3GUgexZZfhxi1qDr5hnHhM2H92Xsi9fTp8VsVPXGUW3a9zvJaATjQoydnBNeTq9JsEWCVYih9wAcNBw1gcDw5KrN",
  "key45": "3kFkggua7iSuhKPmKCj6WUWpzwNqR74LXZ1eEQWnmkoThBKvVyfZUVXVCttgxd83w6hXUC47ThGorU6SeLCBMRpe",
  "key46": "2nTMApk6nq2eAzopLAh4orvbQw9WgStKyE3n5hYHJDWw4nWPYEXbUEMBm1UYVhz3KZkGw9jj72uAk1uAZiLpirSn"
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
