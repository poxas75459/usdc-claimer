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
    "5NjQaCurgNgsm37FCaLZBDFLWo9NbUVzHabXPDSLj4kdtWU8WwDJoE2qyVFqL7P6oWjdyX7UQkwEA9wXKZQGKfFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVUwJmHBrXywhK4u4wbwLLb3JcSBzrN6EQyAiEwcnNdTxB1w1jMDpMr3m4jPEMd1AiFv8ma5yysCJSfYB64LQxW",
  "key1": "34f4caziCVTjhPmkdzMacfmSrCCSSLK3yfULwyZJXK2m5THcCTkDH8cCEihPprCaLfESCm7Gz75BMduaE4vixqyg",
  "key2": "42ttpLeocoJGfAEanSpiD6qhR6GwjDSqgHA5k4GbnsuicaGAFyFLnB45hTZ2WGyododjqfAHt79Dtf5C7UZXW89b",
  "key3": "267quJ7Ke96Uqpfrq2Mr24zNESbVGZcMXzkfBP71m3DzjMuh983s38aHRBUuEvNpejoNRQcgRqxgK2cC5F4S9BQ6",
  "key4": "24qFJR3aM2ATUwiiaYwVpyDEsq2jnYEaCw94LnqnmYNTkiBL17kw9eyivMcF1P9tkDBZJYU5uFM3wTo8RnNo1En3",
  "key5": "5kDSjyWxkdvmh3hag8ooeUw7a7RpCigouv2SSsrG25YK9sFviyNUZCJtTTxHwBTQr8ytp9iD9x8Y28EFCFpEbW16",
  "key6": "61ayjEUTCa7zWuFBLPBTbwu51SNoVGDxpGFERs7dWRqTWGLJfKgYQWzXQZaQGhLuThUZ5sf4rGc8p66xWiCZezbC",
  "key7": "4PqkPzC24xbr7tZiortMH2VQrn8ZN4FLcmzTTWgoGggWwv4WYdQ7Y34b9DfCoj32aRBf7rLoJUNssakzuuSD5Dom",
  "key8": "4jz8mTzunmob7ANAJd5VLbx2XwBzyd3XmkWt71daDS7W7ViPojn1Nq2keEaqDeZC9rpDWQi4zFgZDwcvLQW9e3jV",
  "key9": "D763PhpqVx6ykqk9S56RjyzBTuGaG3ULWrHaSuwXYgV9Pgm7rh9CJSNtPhQooNTF3GKKbCgDgrH9d8XBAJqurnd",
  "key10": "3sZopJaNxBxuaBQBis7Yv7gR6CVAeQsX3EGZ96aVV6jGUGYCz8RWeMcajf7CH4dmjF85s3qTL4Cvr42Lk4wXWmkf",
  "key11": "2ZahEUfbijRg2HZZ8mUSSmiGQf3eYtaKkuYiQuKV1U177FQvqJGWWDFFSAy6VHS9hCnHminWTvFBwXtLh4aLVyGB",
  "key12": "271EPD8VUzHmhkq8WnLbzaQk5RUpsh6jrydDttbzWKCLKUQhYVHh1pJoFcAsJpdeeqYKrfZEKwHRdP4fwAQwyDdH",
  "key13": "5M5wkbtHLBNj4Jd1HNJvsg5cfZzG45fGtGZ9Z4dXocCpLfsDb7dtZVyD1dkSAsos1wgpk9xMd512QuKSTZ78B83j",
  "key14": "33rxWFgqH6zXjwfnizH1WWEBMt9HpBCQsKrxna2wmQxQ8ZndMT61SZJqCsBX93Jo8AQ4r4MArxAYN47pCCEdbtdy",
  "key15": "3tzUhMY1WB6pmUA3o4Tr5zxcEQyp6zXVL66k5ugfiqNnUScDFk7wCM4XQKLmMGeNMF7AHtiy3e1Wi1kPSkGSEoUS",
  "key16": "5M2Z4DSssnehNZXpkKjpp1xBAjNyUfWeqHxXjg3eNYBeLVsEPe8MBqovh8sayAHE5sVrgp44zLBopn4CoZbXuf4w",
  "key17": "3CcXHTmYBq1kLaLRd61taoACJ25aRHVPyHGjHsfegytEUdgRYDEx81VeLmUkQfGvyMVqi8yrriGuEAntU3saP6D2",
  "key18": "3CTELkJ7kcqvia6rwJCH2QrU4GV8ESMwo2uKpnahaydwubwLMaTNNWbX2TyesTjVweAr2S59VNn5zYaj6g53tdqb",
  "key19": "62rD844QNcvbTuXdZ9zo5g8C3V6st75TQ8e8ujNHM7JHCt7a48ySeZqPXwP9oo2BriqmSkNYmV9majsnmJoDf4Bh",
  "key20": "2ktF7Wq7KazfCx8Nq8nPSXevZQL5hGieS3xg6gB3E8b4Cat1eQGMgRgLPvXrwEoN1o2h7SQhTzCLJaktV1rbssmi",
  "key21": "4Weso6JmpzSNcDDAD6sejGuj8d9Vp7WjApZtLA8rsuqd32YxFtXrbFhokLiuxTrx7VWEAbFirunRNdrkdzXCZn9V",
  "key22": "TK9Lpm2s12ii9rpM6pD6SoDEKUXRwpYW4dknwmUJcuUzo4K9VtqmLHeh1A3FtyEVUhdbRHc8JqbyzXJTqFiSs3A",
  "key23": "2ETLGPBd9xP3T6nYFAJY5fEhYqHQksymp3DXKtrfYGjGyY1EQe9B2JY3XTCmxFeMR9ApswXmCMbEnquwLd83QDD5",
  "key24": "24GSeeEehSq8dYYjnKfxAR2c5csQ7xEzrdiktkfBJ5dLyyWL9WxRrH14MqhfAeoegp9iKzHCUU5yedZzB8Mq9C3v",
  "key25": "5kK784WMqPwfgj9ZswGhzmyoMLuU89sQMt89opzofYHV9TGrbGxnWgWxeEyuEFRipVVdReQrMbFsKmZuDFQzxpQd",
  "key26": "5ngB3QS7UgzeT9MkYFANWJQVipTWcSEmqM6Av74o59CJkvnogFwGtF3pFL9S4Pkzm3yvj3oJMpeLsmiwn5aefWun",
  "key27": "2f1RYffBA6JkCnJnDjdAbYA4qBSedAFqc9qQeYTAu5VH7JSe1iuoX9RHjoqg1z2pDa8h7hP2Ump8iXxwpQwXcBWw",
  "key28": "4KJFGubVgi3cK1tUSHY4FbjUwnDF6dsx8Z8e74KfnjfasDBFgq8GVMX3zEfjvNx1KJxcQtr7GjumAKNcNi3ZkMws",
  "key29": "2atb4sQBdKzEoZLPtwtFYS15iWTn44oeSkfq7otZ9p3L5m7TApXMii8cQDd6QjFKmTR4HnfHoeSygHmQtszf2Qu7",
  "key30": "5jseVyRKdJ4Ez9pfpVLdv7TcmSE9PZN81uQhq4RN2QCmdKgbED66rc5P191MESh52X18ubGJZwCX8mbkfaCxeFRm",
  "key31": "4LvmBWyV78Kbr9CrgY9b4FCR1Jg9hnrSi3woPYJPwhM6JezJKRAPqgo4deuW3wbFsfmQ2Pm5j8fTTAHKaumyTLzA",
  "key32": "2rVz5pF9UjUFgA7DC8WncnXDzdGvzysytXqBCynkwV9rmmuUZJ3E5y3Fxv6TXUrBWWrMRK9V9b4yuroxkU5XBK26",
  "key33": "C5tAgaEnexPjFTRNXpX5sHNSUyz57N6MjT57rjyFzTpWz9ysuUcsSEZBkTojf4qLdNTUaPNaaaiDWq5Levsfy61",
  "key34": "3GMyaqXEMCUSwBQKZsuJp4LynERgKemMpPTAxEGtnaNbPs3ftdr1FRAGkbAoq3Le521EQwuo7mwigqFs47MiiTn2",
  "key35": "4u55TrMeuvu7qqGebqSrBYmpuVSje2KKBy9gXSxN6rSUdjV5Ca5cWjwnUdRqbP3JCWo5RPmpCSyJ74DbTo9VwLKx",
  "key36": "3LtCe88njneQKRTtNPqMUM6wKACE2vaSvoeqpAmhfP45ZjyX2DvsixJcwTpEnnkyDs4q9hyB32U15ot8J5ytGyRt",
  "key37": "HfPKYbh7oKu2us1czmo31yhsTfrEMWhbwDaXsxm24suTrgzfSzXqL46p9XyLjfzABEdLPobKRPbtTrKhFc8gCcv",
  "key38": "4KMJRXjvJzmn4RGYfbeVpdxwbrWxNRU7Vh6ty7xphmqWGkytCBqckrmdd8LL4KbiuqLatseSd1VpnqyRFCgUwmHS",
  "key39": "4PnFQksKKDtvjiL6MdMkqu5iuVjtVAyPkrJp8mYs68eUMuZTFDmtxwstvVeBvoF11bSteLR1rhbz9rSfjvkxXMkB",
  "key40": "38YLidDX7k4KxRXwonAby2NSf6N1fWrWcK4tqdEcx5kEXNYNbK4Ro5Dpx4QMzi6vRLWy8LJLcFUVYH2qSKE7Gjn",
  "key41": "4nJRXvUSmYhfuahkvQLMBktkgZY6A6NjQ81VziBXFMFUcpFUzT8Z5CwoJHwk98gKU7z523k9vA937DSaYgWzeMYF",
  "key42": "jFdTXgstvpA9AgZ1GsQwy6AzNq1MbYboZzYNLupsVFwvtsaJgm4whUU9y8ZHAX7hE5nwDCPfvHsLncjiAqF7RNS",
  "key43": "27L37hsrZK2J868YmJzQPySU4M3tPCXPEEFC8WktqBVPP4bRfStvKyvejY5hRVe36LoU5rVNtCJYsCMTjBzieSXi",
  "key44": "64h6AGjvxKr34LTyLaGU2cghKf4yRcn8XXBaox5SSkp7KRWovYzvnBELHGZvh2A7EgyJomQ1LUrM8jaqwXAa7m41"
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
