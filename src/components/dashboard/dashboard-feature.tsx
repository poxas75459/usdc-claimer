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
    "4LHLpCAXnLcT39T8B8TmxJhCqMMiewpCbLSeZPzgpZ8uVi1ve215iDT3c6gCuHNbA3GVGFKCgZKZ31hTtYjyzH75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztVoQWpFvm6UL9BjqNwvgCsUGLaBxZ8QqVAcGUK66sTzvCYrooyhu5XyvtXB8t4RtEfFxrwDJWPctj3UugzBShC",
  "key1": "2kWFgnM4C5NeF15qnMoajCUQ5hcyeaPWdJLypEJ4UhaKCHTW8MxRBBDfkBpNgoV59uXmWCFXeojg63P517kQjaoS",
  "key2": "2Rnhkw4zp1tD9jmF7BVyuDDfJG9YL6VkB5oh9uwjTDAAcfMUW9CERzzDNMktWDs4opmHHBj9DzbdGFFkGwTduQLh",
  "key3": "5SCjUnjsNwLkw43VSRnENSjJ17zLWHwQCJmb8jKnyJwdR658tWFkD8Zuphp4tZMmPBx91EzjBtKoZuzTHpCRS1mK",
  "key4": "3TuiykkdG2HfrVE9ubcgTAFoZJsk5QnR2ZyuYm5Zc384d2jvh95RJmKop4WPDk8QYuufM4XLN7KKgwxEZYptUQG1",
  "key5": "55xy49mSWTdS8xKLWux5kL2dwKFoKtMWKzUMjvAbeRBfaHK2wnGB9SZMQJauh4pZ3QwCFZr4jmKEqfdBmwvxtS8P",
  "key6": "2WAP835j4ko7coH4zyN6iB5Q7U9zLczFMbGSCPaNaSjaiDNs83QNzbYsNTFvFiLyCUKvzQdHXwRBfvYEEhfGjzQa",
  "key7": "1do2AEF7FdF2HXHjXwQFVLhcHu7VJeUtgpYkKzT6YLFuGVjDgi1m5bwGiZLYLQjCLKzZ4W9xyGzxarx9NAGBKjG",
  "key8": "3CFSaVHbs9gDYbzafi6c3WjY1jB7WJ4H9KvhXbsoASDzmxAjeDRt3itW2gWgKD9YThdj65KPH32iwe7aJamWDJdX",
  "key9": "5afB7JCZfdd9RxKVP3BTVCuSWYwPQfzwUFPq75hmcttbLxyZ4anmHPgRN9H8Gys8VLgNYdVQZkDEe9j723gVwDYy",
  "key10": "3M8hqKh4QYJMx8gRwFbm3LjR3dDL7277YQv7LGLqMXzJJyjWVPit6mgr7m2wBAx7bTQSzLzT5Fy3Kig69c6fejcC",
  "key11": "2fMZFn1xotm9ds4W9fhE5E6Xh3zBG1FwefMzCJ6Cojg3ovDYXUGbaqWCRr6E4cFGMZo9FAYhaMBR441QKoA86UZ1",
  "key12": "4VeJNVLd7JYKg8upPNv8s5BibpvCUtdhfXHUb7XCVxsHLRu6zCpSLs4YqTSMZzUssevz3SnewEPqanfoVjKYRD9h",
  "key13": "3o48uymCgDoEGKomurix1bFbE47kFDPHRE9hiFMh5rqhLPykQaNssHChP6SrXNRTTupavdZ7ZpAmBHyi7GjNDozi",
  "key14": "26cYs9PAfHG4MQ55P1gNE2hiYwznik63cRDJfKUq9iQ5vdenpm8pwUaZtbCpfQ4hKdKZjQunaGQ9WMpwba8d7UJd",
  "key15": "5BQC7cU4ipeC6E3gJh8UAEj8SSL5k7dv9EW58eihaa6vE39MfRwXWQ9UqrYQQ8beYVGLvjdcNj1nGsfgFEABjHRh",
  "key16": "5BD1ZkoFoxCtHAczxbePntdm5pRKYt6Pp8P56JQ2NGjTb5fBVqtBh5WwjBqXPeediDNRpPoLGDb9qzMdixRUpurA",
  "key17": "wPS5z83YkG6pZ7ETbEbB82CX4PmCvcEkjRAAuY1YNzrdBdMmqsDvJWaCkC5ZZRNhEDW1iYX5MSgLkfDgQszgZZ6",
  "key18": "47G1r3JekaRjwuNwLkjvjPj1SDyPcBMuGLLPdfNhDVd6dmb22n7XUTyYPTbJnHR3m1M8HyrtewzbNhBAyUctga4v",
  "key19": "9qcNdoXAJJu3wKRndaj6uaVtDEdh1EoceWkyopD9mq7ttnuGETSHts5QhBNjrNZDJG37tv6GsNRzc4Q8S6YAvaz",
  "key20": "2V5NwDsmKL62Rap14qQwEqUXaoLTjskM1gwCmrHisvTNPz3D5ZFdYvA1uniJKdoRYmAWwqwCUjF3tRzuToQsPibB",
  "key21": "3KCCxtRVg1xtqAMhr2N6i8nRDHrWmWaxKJw9gg27p1BGDqnhgUsvRduu8GcWBQFsPbToidTLNPrQ4LB2w9E6h6CS",
  "key22": "rfwByVHP8cVpqehXR7NXQKSMwy8tifcrcV8Awn8BZZpa4h2fLs1WxFZAwnG21gTtawS9kDX7rktgieeMZfvngDe",
  "key23": "51gEE1k97NpuYqufPXUp3wftpsnb5883sqyrhhrTM7QyE3J2Xj7A43bMxrwz6fd3Re9MtbdRu3LZ4SPUYc1XjnJJ",
  "key24": "2yCoH4RGVnUPPdVvYRdqyMrdZKJQHKMwnsn8gyob85AxHr7EHychfJHuhHBx7QVhHctd7Li3qXD5mpd62oGmhx4y",
  "key25": "eeEwYSzPNa6y4on1MWnJFuLhJRbwCh9HpVc6QxqFUS5Xk3P9ADpzpK4DsF8rdxJq2HzXdECcQwvVBk4yMeWaPa3",
  "key26": "tNYUAg7fwWh51cjGGqXN6x8DBGTcF3oYmZuH2ShVXNbLmstnZb9rE1JN7kZMVTRUJ8jjWDx3iCaya1jFYD9sGXm",
  "key27": "3gxsoijgnYNTTWDAkg7McJhMSW1G4Vkohw6y5BKmFBPWQLPkvQDJn9mihQGBW3UvhcqreUqytAtNQD8ijBnSvEtG",
  "key28": "26fZZniYK4VXkPNAZZFZz2UTytXnMuLoLz17524fYjTWS87P1LJr8mJQcFrnwVzMQ8wSekpnsPBsDQ6usaoDKpbs",
  "key29": "37VdhtE72JxiNKy9UJZdxYF2CsvwwDTdeDqYQ6shDnrNunP1p9Y9rAPz4TqnbLQpwTheSyd2kfme4oA2KddseCbm",
  "key30": "4R8KBMZeJCY5vz3NRkTp2nXZhgdXffN35JJi2Mt9e4LyqgZuQsCFN5rZDBcK5TcuJCjF99BvzDdUR2YVfZmfNZg7",
  "key31": "2Sa3eF9TpB8WTebBYURJp2c7UnhLzEPD9xES8sChVXBYiPck57wY36XJZD1yaxwAp6FakWYtLeT9SsudyCEHzzyR",
  "key32": "kjdxSvxL8GyQkKcJvmyfH9XfBKHWi5WqNZ3E8U3ECNiUSyCPJ1evkqiiiQp1bVg1oYYp2tiFHGMFeJTEeoZfk8e",
  "key33": "2ANwbb2YnXVA2ppRYLWkvfiP4rPbK6jnWjrfri9NrEesSgwH3gFZxofELHm8qvGxovdLZnGYboHSYECzQ5GbheYP",
  "key34": "4tsrb43d2zu6ugX9ULKAoL8srXcHaZpvy1acpGDYEFzJYdxxiLEvZTtFX31wNqnGomNgnqfzyV8h1Z26WN9y6RVr",
  "key35": "465jyWCUaR7qFR2t5JdZRrwrdH8Uz6kUL8Rr157iFeSBCnEZkNMqRXWkoNQ8fuVoyTw3CpUNPTNESRCXhT814F9H",
  "key36": "2XkCoGgN9r5vkFnfXd57E3hfsrBgyjE2Cm715UC76pFioyDQ1v8JTbXTMPTmyF3bCsPcwYrS5q4Pwx3mfmjqCUbD",
  "key37": "58unKdLRsiHKviwU4qNg8F3yGjvFJwYHAUTkKgjCwkxFipuAgKmVJrbDruKR18qFwbVWtsFR5kbUEg2mHYQnWL8Q",
  "key38": "5amXdUuBhjSmkfkmkjyqEXy6T8qcoMYzEYqBqmw1z8vFhp33eeKeNTaAzh1sXfu2gqVAHTQ3up2e5ENSxRX74Biz"
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
