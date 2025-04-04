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
    "SYGonQDXvNAyw4W2REb5TB8CnERGr3Nr3xKBfLhbPAGYKyTh2Ltj1RL6JdTXVWLQugkcxh9CcjLZoEJ91Lq5nLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJTKZ8rrk9vxncAXgKHR5f6tVZtiTTGFPRZBC1wsAwsnRWXtU4ujgWrcYigLskqm9xfWdN6doMMPr6z8RnzSE3W",
  "key1": "22k2jLvxHTX6EqSq9EniEmHXTwvBisE3ofZ2yP2PksHR3ggH3z3E691Ys8wYJYvkVqYMbyyMDZn1SvPuQN5wrw71",
  "key2": "3itaW9RMof1gskNpDBwke4ftH422H2fpgYPvY1hEbRoHT61JvE38uGdUfD5667QC8eY2sKyjACFof4uTUjBXDAtW",
  "key3": "5iz2B3DGeRDXKchG2zpNyrUEmM9sd9PGN1vK1mDwofM7RH5YXY11ehQrNNjCd25SvuuesoMQnmD91tcGZzoUfseS",
  "key4": "3L75HbcGUhwURREnog5RmQ9xy2UfN7APfjQLKoof6uAC3xdJxyXeQfb7Phz4Bvqmt9kdjzspKibAFnT5cKCvY72V",
  "key5": "25evA5ksWWp6K337cFuaDAEtwcvzKp12jx3zknMzxNd635UKnA1DiHLB2FcNL6cCyY3eZKm5TEyKW8az1nLh7S92",
  "key6": "3MBgnJG7ykDZH8xUPzoKdXBiuy2fXKTyguRLkUxgUoFQJRRSuBVNrBsBSu88bun7a5nSjGc1L5HxyFfdvN4LyP9x",
  "key7": "45pFL5NyfbGrJxHEgYRPMKLTPq8PzH8pjUxQhwNUGWYLnMvCmfEiqTHVNPybf6HnrREEkLbCzCwWHWZbuzdHY9jN",
  "key8": "3ppBJHm2ppA9ptGkaMwMDCtQMkMqjDAVhHNMfAdSTjVcwJyx41fvFNqTfND2X2oC8s6QbgGNtskPiceCTh2qkijf",
  "key9": "2itA7StxNTCo9bWDhjjeFiZ79EHFbXQH9WvDDE192EPeN8Qdgxknpaje2NnSXG1BnPzUrg6PtzibGwyzVGHZuTRQ",
  "key10": "p156aYH8TEHj2fhF2EChScRSDNXXjd2x59nKTLgA4YYGyCEWynpAcYc4egCSz9aEMdvyhWXm57CPWCE6ReXdPYi",
  "key11": "2p3CwTCceuJFxeZwC11ubZ9fCRBKrqu9qESaWCR6X4TH8BjKLjgUU2cY5XiAJXaJUt2gDFWdMNamemPCJ9w2yeDj",
  "key12": "5HJfELVFou84rSgf8jAqH3HMnA7hYnavGACNc8bnMzVds1xsEZUzfQNnYVcmhJ6zQP46qzd96Sfa8A5QmptXA8Q1",
  "key13": "2cirTKZ3P4hWNp1DchHPsJFdQWRvwmof1Yng7XJyizm3PckP9SAJJkkgEacU2z9c4jTxgzzegpUaZWEkGkyZW5Zk",
  "key14": "4HypiMhu1pKWSNSWBeu7MvJejR9qUZ3UXgDwmdKMgdW8SZMp9eKbiF493uW42U8rctpQ4k74fUyXx57siJUzjtXk",
  "key15": "2Y38Zi6aXktghqXxtQeWtTMexxoCmYvvmnWSacLmQVD3DyVyZDuFdMm7FzyaaitsEcCGeqWudqsMzmGAyKDSdqhN",
  "key16": "2et7Yg9oMt79xWwTXYN8K93RrVPpyQbvgKmvNDLPxvrTaAa6rAZpeYgzF3Zg7eJL1aaF8geB4Na6FDDR13MX5cgX",
  "key17": "419bdnyk2fTtDRGcNGqNV7KMF6nNhUD5MjmW2pRkVPXaN5b8kYreMQbpxH1FWWcA4Szw5H4rY1aXsco7gboUzzjK",
  "key18": "2NuXCdJjw5CZ8zZStfWjaWP3NubFp7usW5ERUXPZTufoDvRJeLEANYxnuejTKQ4hV8toZ29bQ4PoeBLhcvGBVbh5",
  "key19": "3V5q6bhonuV15fKpVyQ3BvWdnSxKDotsnRH3zAunXBqHN8bNYcRufYTGzoX56LTowPbAq6dPJMbbDoGa8vppcRyb",
  "key20": "2QQtqhfxFqLqCYApZYrCeWCVoMzK2GrMZcmwGndhvwD1DXRUyDAhBohetB5rLopsyi4LcE9ydU6f1FsJLhUeuoPC",
  "key21": "3BRMK2YDSww7w2cZnFxxEHXYcYqH9R4BrWA8A5UriLCPmfT6fZryakixPeMXrRpTXhYQTgd8krWEd1v8k7Xqjn8M",
  "key22": "59dkvzu6x3cdJqPFm4EJxH2PGo49h7s4zauTyzX2VgiMajN4Jg1TWuDAJwpB84gsCbuVz89BNNT5XFJKTsqxhYCc",
  "key23": "33XWbirAyscYXZpLXkZmLTBUHGHUTqDnrW1QYpzxt55zHhNTPhKab4dRu9pdZLii2swkDLjVZ2PhyjSYdLETqnka",
  "key24": "mDpn9tTEDXqxtxRE18nAEnb9KLVYQxXAjNrzBDsecV9fVd6zJ7PRmAVxsYBDDSWxAPgDHjeh23z1y6zZoL7d7Ce",
  "key25": "28rGRMyNL9BT8QRZSD7jyQwzeqVDcqeodKzj6FpgHbJFJqD7U7cWBGeTyYNoTVswYSiHh2H2JXJ8bxT7LXRtHoZ9",
  "key26": "5zhJwQU6NV9mVTxwwjAzhtZdbZnvnooFHA8ks93h9u5bZaLU13wTo2pWyLsRX8qHf5NJYxiJUM7pw1RXbLVBNXwq",
  "key27": "2tkww293BdZfZsXpbfG84rVw2vYynY5Am4ePNUdYkr3k2EkhYpQgLWfyZ6oAutmjBhZP4jun9H8x1nv6YwCQn13E"
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
