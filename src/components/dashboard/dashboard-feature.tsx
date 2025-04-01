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
    "fH5nxphBYpF5i1S6iEwQZBEvnrUGUtdAkJjXYhtjFWAWMVxbxk7VWb7z4CMDShM5MidWgTF8so76TB4ZZkm9ajL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VVctwcWXiELPJFKkJcAEbUjrRYJJvywSAuFDP2tqDEVbR9VHjHAUSYDoELa89oW3fzaq1g2kxV9aBrgwyjE8twT",
  "key1": "4HTr6tXaUUeQKx7CA1xMnKKsyJzUdDyCaUvp1SSeeoRMADr3JH5krZBXAEXfiY5zsGShKS5g3gNH5kQMo4Gi3qFo",
  "key2": "2z9dRx5hn7ZM1uYVEdK8ugdgZMnwW5BFWLNckTvcX3PEC6vtCF2fJXGFLZ1S7pxEJjwuYbmtK1ZKcHnY4cneFpjd",
  "key3": "4GP33aM8hyDvyAFvbvqkAvGNFyYWCeJkWq7jRBUkwDgZUohdo8A1GYJq3mpaYNFXLBZx3nbJRGJY42k1haDXTCAH",
  "key4": "28KiFKDvs2AwMt73KBnqEsCz4w5v7RaVVFRgkKSWvsLUASQwL2nPdTYewDHQTiXuLhjN3Yf68iZ8j7BCwUTV8292",
  "key5": "49twXcaw9aQL7pXWjE69STVcwM7dHsYhyX5Tt8kT8bFcphxX5U4XhX3u2XdXtx4hZGk6dguWJ3HTXkYZXH6PZzVn",
  "key6": "2cez7bpbs87kGtAZPpbqXxq5KAryYQKFdHBu22bhtVqQJjLPJx883p7xf6as7vPgT5NudPGaoPdYP4bEFiNDxsCQ",
  "key7": "peH5Nr7uEEkorb4KBfLhFE4dfHG9HZCoZu2yx6fy4XLYasssyCfaTxkzvhrRJnHJc3wkdqTebLhBGuJ41SFB1Ui",
  "key8": "4QA9jipEAaFrkRgt2Xkgy8dHQ4Foq2nBYEPyJ5UsoF3w8JzgUKoYvLVy8kiLvqqgETf8JsknGz6MrYVVxtMqwvjb",
  "key9": "4GY4HiTM3mmS2Je3DNbd6PkSnvK7uY13HRuFCQ6NeeWVK3YfErxgZaFU8XBs2duP5cj52zmcP2jTXXKZYyckvnJV",
  "key10": "2MzamUYEEGtZ5GpAz73F7vw9g7z36aGp6zdP1PSTnBDw66AVpurBpuLJbbrGEezriyAwpN9oEMfdUDXeSeJLJc5v",
  "key11": "2TjnLEQtTZSoysoZWWKKAgoSPAhXdYcUVGMEipN9oC2tX2FkVWoUnhJGSnioYeD5tf1FoY9rR81j8yMuaavnM7E2",
  "key12": "5BWBRiScW4jvvfDg2rk1AgxKUPPigdLLDdVYgPvtHGmzi5ZBASjbjmtJJFyE5GjeCer9TF4pqeK7kS5TF7ENSkwx",
  "key13": "2gN4u71qCkRQZFWesbc9BEzLt29NTxdZgadZwqkak3NNDjGCPY6JpgCsnFuFufrRSW9rxLGqAvRzQeLmAcJGWVQC",
  "key14": "4HuRcg1VnVSVBaPSsULcjcxZJ9xLm6Ku3mi8BfjuTSraXpSe89eYRaRsWuWDLp3WzFN9Zkn52xA4ThvQLgnvRh9",
  "key15": "5JeosyN9Xdk4uB7uwyz8RsZ5yMYa87qT3aLWAtnAeWz2brosn98n56rTfipGDZu5i6b8fsiH7Pg9jxGHY9y17awb",
  "key16": "5VGNgQWdBoqqJrHPMepkEH6uvQNaWT6bYAy2sdoJ4kDFsgJg1w766eJF9hjA37aavZjiPu8dwiTbFQF1vcZrbWnq",
  "key17": "4mNi7p4iPnDx7jvkmiZcGnSy8horhNjGsQbNuPj2LKMaCTtsJPcqAAkmcN414exwAiPFiQ3ViKfSBbFG292nRjUf",
  "key18": "5GQ58eKvPxhgdeqn4Hig38mpgXnbRkjExvSDy8dW5zxyXy9msBqogL7URRSZixiwWNWyuFf76mHepgH5d7fvj6mK",
  "key19": "5KTWsDi1a417M1WibY7R8L1nTz8AX6gwqJEMVLtsmWhC2AcjWp9mwmre3BXbpw26y3cLyyms58WcKQSaqmLyorLc",
  "key20": "28tNSFt3fjSUgJ2r8HvqxkHntFos8QTaUJhHb1WGYaQpqTLtFyKmKSeKAHnsCbgje7chvv7odGYxW84cB6ehkGpC",
  "key21": "4ymMu3BscahMwC5i7npnisFNzs3WvVJisnBy8zxu5wJ6CLP1WQdXbCYzQ5aAkAXGGiNfHQHSzrQq57VeaR8ZgvhU",
  "key22": "4yzofVoNiQWdN7gA6RWoYVWRVhWimN3n4sBDEtjVeS2QSKkqE9oFZYwmHjAZD3sw2Qr32k9mYKHG5RRUjQ5rkMJE",
  "key23": "3otybmcipaVXzUngqxkqAtk9ESRST2UetginDTPqzHbNLR7QAGoXBE2NBFY8tMm7Lga5kJi4YYK6FLNDXzhEtUjn",
  "key24": "4zS4NHkrBU8ypHgKZvkLYmTveNzP2BBLvYqzbVN7xpJUQDZyy951uCwo2n4gsE4e3m2BGK2QC7V5nPBrnZMcpksv",
  "key25": "4i6vpbdb8PTtcGM99b9Q1y46uenpi1vfc3JdjbnB57RrKe1QZiLSSKsXcnRo99BQYAxicfF4ojgRPG1Aj1PRyLPy",
  "key26": "4stwdTNdk14KDRfcVtBzbj31kbAdRFugcMhySXfFyxkNcmySLd9wHHhFZtyJ8U8oA2t9VKNpZCtDhTfr5eyAgtRC",
  "key27": "57EzR39pUzkmVN7mYxFftY2hZzBCBrPyS5b8EvbY968JBP2ydJeiKrKAcBvAnSMmnTFqWmEeSHq9wyugcxJaCuMJ",
  "key28": "4QHgwHHXsbzbe2W6VQ8bhGSG9PN9M66SzXFSSCiDrWujLVpGZRJgkHdHtc3fV1aniuhhDheHLD6TTbcGkmN1MNpv",
  "key29": "23kB63CyRbu8eMwQeX3u22kWtCu8SnqA9BVh8z8BmQMQmJ7xY3VfudNHCyXwWDRkTheErmt5EfGdXjd1PFogS3R1",
  "key30": "3We1hkbqDhcfnD3XQ71PfvoHtockKFazrKUxgKVZeQZVpQEwcPSGgdwr3T8JLFcnVJyQkyQ8NwtG8mZGfhEFpyPj",
  "key31": "28uF4NBrHr56KGinwzAymEFJy7tpYwfVEjvk94MCm9PaT1VfvBcx1qo8V19qc3G9aLpNkiWdkX5ysHjMrMzib6DY",
  "key32": "5L11DhQdU53r2oUM4QwvUvLqJfDsPHCyqZ1bkuK1dUchxi1jcEbn228VzRxsPprDjhBpjh4ZJ6HYL5b9oL7ZN5fN",
  "key33": "22MdYZ7UMeKqAPY1Nbfu7ZkE9Hfj4NKk7CBAZqd925utqvwv9MdWYxKG9Wp2fXYMNNJWhNSduSnMGxVwofZaz6Cj",
  "key34": "3yg36abGWrXfxYG4cCm1VFbM3TqLHefSKb4vsgsmUYPRFcq1CdTjQWvkLKba4SGrd1H9z6DmU3gX5cv6EupS63rW",
  "key35": "3ryVrEsC4zHVnHUJhmNeXni3cw4VHDcYwmyk7a7jdinwdtL2cn8VTgaLgVNuq3oWFDk2oVjrum6FcFDYhadY7SLQ",
  "key36": "57H48TYoYhzz6Wx2DNjWV1xeMR7i7h2PkWc75HhAX4MkRXoQajYEM7VqSiypVkSFaqW72hziSDgGoW1ab3wxoDbt",
  "key37": "64tsWWvKYxGro5zAS7wh16i4DUqYhkFcr63vCDqsrmusyjMdTxYCPdY3wpns9YSaeVRdrjikywCUZau4WUQibtjm",
  "key38": "4J6gfXH67NddPAbgYW35XV5Tp5oityDN2gsrfn7GnraRr3gmbLmpHTLwuo4GUJ87KoaQEntKpz1twivk7qMq2cjo",
  "key39": "aHh1jWfyYfjkxY8riEge6QAsgbYWJBNXzKnRtLDuPL7WK1jsc6bMTtGk1on4KkXJVSNihS5izB3MTKxiqnwq65x",
  "key40": "4GepU1u3JsMXQ9aC4B9tL7bUGUh4xTYw7yoTSRby42AtZsK3xGxCqiwPR5dtgrd7KQd1YPn3KCwz8nmJcHmDhHyS",
  "key41": "3ATMiQUiR3eA2WmGvDDKR8U4rekRHEysxe4UY2Js8ZuJfWw7nrA691ZvzGJucD7LrmawvsuYFaumMT9NDX6JY67b",
  "key42": "2JVBVeTcFaKdmoFefkR8Gqp2F5fj4Hs6B74p2y6xCy7jRmkNpPBTWRFDDvVcHYzhUvgwRW1KiEHVX13PU8Pwcytn",
  "key43": "58NhWQuDRNiB4odE2FPQKgK2d65r9gJ1zHbg3DF4TxF1AiUu1XyfW1xcdBvrpbFeLDTe6tNzCm1R8tUMm9oqCyVc",
  "key44": "41dGvaWxG9b2PD1pVjwQaHbNQ2zcrVnEXNqiuQmUJb1KSvwC8aoetFQiHjAg92oSahBhUJpi82m5ovEa5AA7jHfX",
  "key45": "4zHeXJzcMMbZF4XUzURp5shev1ERX1G87VrZp8uh3zkGMXyYVrZm9QJ49ErXPFokDYGNqV3RWstqmUG29HPsZbqs",
  "key46": "CzWeuGSmcUhGDyypFgfRiQqVSgSNnJMUjJqHZJjfEtRn3jaFbB72Qb72kJAgL72tTtL2d4mPQqHyMMm3WfLpb7U",
  "key47": "21PvHY4WMrWCgGTEwzmXvZC248C4JQgqoUr16cp9K1s7iyMJeo9fdWebwB8hNTxdomaCnJfAUYGsu5ueWY6QS2VC",
  "key48": "2YwEHZKawWBTtX3ncsKzZRRpPFUB5eiYE3GGGQWcPRWKkCSd9VqWeirtZVUxRxCxvHn8TovWRGNL6v9rCCPQ1pEX"
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
