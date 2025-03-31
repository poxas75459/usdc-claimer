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
    "5xAW69GGJhCNQ3ozv1y8U34y3rp5GTPgQd7A7MCmprUqxc9222noUUUYhsvMNwbSmBdncVcK7rM6HbCtihCxXmZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xMN5PWJz2BU86J5bGQj6S1j9FMu1ZRNpE8MHSy2qMeDyR7ddTb7hmu67qPFGz4AR9D5ZhDouUkPspn9U9rFUxk",
  "key1": "5otQ3XFBeBQm8NCFFtyUJJEh9aukxxh9zPxExahcNnWCcdkNZ2yu25XnMr5cZFYmAUpy99YUWcCiWV5JG5BkXYmh",
  "key2": "5xoFhtFGTp6BW4gw6eQ7hwirJbHeFEtVCGocYFpFmQbo6rBCE1VpZv44zTYF5S8M53arvsyqXySiwd27LnKbdRJu",
  "key3": "3Unu6wmUgX91zTHEPQo8CSiexFcguRS5FCdi3A9hVqBCDmL1TcvwYbV8JnVdMA8i7CY3jgDmjoKwRxDuAHWTiqPm",
  "key4": "5jN5mkz1auKvauS6jSegLZWUViNwJHt8ycJ8tGDjVsdea42FySwwtV174Fq1c2UgLbgUJuSyz3gPZjdCrEkv2HPn",
  "key5": "47kU5yaXud83jb3Uz7MESw5K8x4xjm37XcBZRRfsPZfky8Ht1XM9Set8khRMqDL5w3DGdNzGgzE6iwpmjNF1LBka",
  "key6": "8k9KvqCkHajwi4nN3NNkianpvovesFt3zeMMADiMcSnjUR3BttWg1iRq6bQAxLPBuzxX58DJvPyUM6CXy8rUchY",
  "key7": "618291vbMUyACRdFSivYgZCTmJuaX8AQgcTbDjetswMjAUCky5wYDD9CbMnbteinNA1hWs8u8abK1GAZqcrShzMH",
  "key8": "44vUP8AYqS1nXwUbz1B3GUK5eNm4VaByPRvNfQCy2TQzXFs9es1mz38dmVAKnycvhFmTFVtq76zzfL88DThmrgxw",
  "key9": "5n25Qu128gdK3uh7WD2xQPT8i5z4L29bjVW8DyimGMM8npko1Dz6uiXwjx2CK3vwip1G4RHVtwScwAbD9AFiSUqy",
  "key10": "3zjULe4toXxbm2KsgaADP9oxR6ucJoaZaTB1TZib1bLX1uPU6uUfpghKf8iBt2QvS3veNeKwuKQsumw3hber3GCR",
  "key11": "3KLzPPMLvGSiMF2wkwpzoBesgHbxf8f883fmwzXRZmZ6RhpkKEYTL9zbrrqooQH5WEVVAw9okAeejG6EwDmVqcfA",
  "key12": "2iVZ5XrnsmyYUrASDFc1SDH2zrUTkXr3ZX891zbyx8sZbrHhtuCjzjk71Hn9ya52jUW3r2KB4gbTbZ8iHmxbyiTu",
  "key13": "jruFZTVN9xtxUxwT3UMkww7GkREtPBLgBEwDp2ipqnfRWf1bGfK72x2agrck16LBStrpMKoTsbwkD7JkiYGrTCm",
  "key14": "4UAiVmDbH4vSLGQv8uBT1ZUt6zFTbznu3N8EwunE5hfYCvTWCx14BCUpJmcFyo37xJdbq9c6cciFV7RQifVYHaCV",
  "key15": "38rCDd4tc9dbQaFoEh8TyKEaVrPsW13x1ofGabmVGRns99u7WWYTmZWmrrhDa25K3SLcrEZdBTwFC6KmNNoYdZCP",
  "key16": "5CJo8p1cXbdbQZPtpKFhC8aBngREMVsnRZhbZRCmGY7FzehsAa5ytZTGBsvCiuG6qpwLhVVmNchJbjgoKBy6YQQb",
  "key17": "2WGeFC7mjepk3hXwxtzTR8qFuFSXPENwPs8xm4ggJNKfQ4WTQzQPykC5E4hBEfJBz298XTicMe3DHv3JNDkP2gKt",
  "key18": "4oqhZyP7tktiqjA5nGfB6oBGxfTjAxmFFBe1W1tirqeYiQYqADJiLZyQUs7K79EPM6vXM3eUdmFVFWcnS8Ai4cf4",
  "key19": "21svwykZSmwauztjd9RRYGGjdXUvT2GdxphRQoBpTfZUSgadWLcBF1rRMYgdi6Mfz3aQbGv7UbTQxjmVxQ7wvA2T",
  "key20": "3sybLmizZaFDUcgaEN5GyGdddD8QFgC3wPdv7kbHCJsVaJsUCM3vhMvPG22bvJEVewbTeouCmRM686KX4PU69YHV",
  "key21": "49Kh8sPvJubciefv5zuJqhnU4T8X5bkABMvRFQABNMTtW5LH41Nesyfj7KTCUsGC7WuyB6j3p5mB6ef7TTTYoXFX",
  "key22": "634tp7VPYmDhQc2972dGjoKXefgZ1j3BfpZp4PqPoahKu9bFrfrZ5eRD4Bym7t9bqGHw8fkk4junRwvSGzTnUmzt",
  "key23": "4ikei8FMiyCGVxHHDU4araX6EPqjnbuHJSyzmb5YGM1cQBfV4nfrzUdXorSx6fxz7LAxmhJBRGVw4k5o3y6pgfeb",
  "key24": "65HP259MMvPb4nGS9QG4pBniZ8UDPrNU6PtLuFjRiVQMgnvQUpncZodmMNWrEiHDwphQJNd7KSNZycinJJZFs35U",
  "key25": "2UJ9Ees9N4XzoJ4LFWZxNUBCWWqsGfwYwPRf1AYjYoqpbD78K1zsYM9YUg5MEatfr1ikA4c6RGjWDu1CP9DNCMmN",
  "key26": "dZu7xWegPJoEFp2MiKznyQhzAekwKJSjFDpcy1f1fwFdaHyKoW5aaXZYf27GM1q17YaoPBHTHXXG4B3Tk8WPJyC",
  "key27": "2DixawirzCLf63tAtMGxPWX7tTSHbMPGy4ydmkpNxUpMmSGexa7egUKcBA2MVstjwB62BxoLyoUdVJzcymCvFKmT",
  "key28": "2DQVWFC2EgQTmoDrVJgCH6TkE4Hjd6ZjQSpWrPMbYVu2939yVy5rEyVgbRnhypqgbuheDNxdhiDJZdCtFat3FNDi",
  "key29": "mAdpmqY31BC8Y1BctdnKF8woAT4fFaUCXQWHVqnvZM5MncBBTTu5URBK3CZEZxkr1Hfs2v5WgJ25RtjPveKiAx6",
  "key30": "24cSo8LQ8oWQNr4UvCzdtLJ7XkJ1rvW3V5tW7npLiUcsGQRzCetUgLg6py3u8TeRDPyDA2e1pH5i4bQyqSkbsyWj",
  "key31": "5B8r5sxyyzEVjS49fNHczvDDvD8d7dLpxasHaVDXHmijvTksYUcWfi9eEKzUTH4uT8jEjFntLmSHxzXmRGGbgSiq",
  "key32": "33i35Aapr3jQ1rahGNJt9uxRNSsSLtwZabkrrekqLt3eCafUzJSoSRkBwhH88imJAJJVkR3gmKRzJvo1eUKm8E1M",
  "key33": "pyipeCBT493EVh5fV7D6niavuGDoFtkaysVRVr9DvT3xrbKcXAzLhSeAVfnyzadFhBkXEpXQH7SrX3xafaed7my",
  "key34": "2w9J7fBpK52wzzn8Y9ztg97shz2fcEbZFxfK3uHYxbWqdSWarWLftH7uYRnmFcmkLzD1hUQs7UcBj53aQZE3yJ3d",
  "key35": "55pC7SkxUbg9mQjf2FsR4ds6rZjJQwaSgnTaMRGYGXHLfA4jr7wAk8bF5hEQkUFd6fExH86yfoqQsZwwT6ccwZrP",
  "key36": "2n6MXLgQdNC9aHSQcet6LikmtBxNHEwRG9YxtB9WHRRsbqbwEFK5suKzPmts7d772ig6Fv9NUa8iYPh1v54k6E3o",
  "key37": "4kxeo9td5MUQJCSAj5tT4qDQvF1yaXYNrKJvbfRkv8z2EnduQwC7CACkuSCG3FYPLqYSMi4appcM1GJuJpdA29BU",
  "key38": "5CZgWCeZCfp3eRZWSeMvWm6VDKdQWrVQ6dkvsRcvubAxyJ4c2VN73y6QrkRskhUQjXeB2Br5M8v9Hgso1WH8mPYD",
  "key39": "4xJC1NXjPtF1raLR2YTSjGPnQgHpXgf6Wa9z9sGt1Mei2v8iKZUoiuNi9iew6UcuAgusUUReBiTvCGQUEks8dwLn",
  "key40": "3f6wkhmqVDUP7Z6nyAbpkJoKAtYT7gfeE1zTZHmELCx8km8NxczXSkZYxX3B5Ve6iAg4XkXrtWK4wwJwWWLY6daH"
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
