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
    "5gthkW5toGhcnnJ24KVJ4im9f2yA3H4LdbM6YSipyr2QhiETnXvckUKbrzoujy5dwLRAAKBVbHhT8fqyMGQG36Sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34YXgQAEwfQvpAv1xTxVHuQP9tRoERQkv4sctS6SMFGtX19U4bbsFgSek2q1UXc7x4RSaWtqUjHhCrxmz2s3Z8bb",
  "key1": "32AZtRtdHdifZZG366wN7c3w5n8jGCQBrM7qmL8spUuZABvukJw3FKkzQsUSshJpWkPguqTEGar4Gtfef1B9H5kw",
  "key2": "5WY9Bd14GeV4oXnLkP4Evuro93Uy43VtG9X81v8PzA9uFyTNNCnHRwtsaRHYZq5tgThSbvXJdMtYwMhfF5f7Pg7f",
  "key3": "5BMuLTkurb2HbR6hKsowu2CoAPe9PVq3hWqHe4rwAaqAgRFjqhmLWRPwiYPhjUrsSsQ2bmwfDbsuWKmF8a8QJECH",
  "key4": "5Befwi9UF4wsGFCje7u459oeyui3Dfbes8MbtmKrysKMP2ZuxyeGRiXMrva6i4Fj4URVH4dZ3yHvoKMDbWrWPv5y",
  "key5": "2qGRtUvkqJ2h7grCVqrthCVQD3F2wvQs1D8QexZCUqxFNMsbPWKjPaB6TreuLZk9jaTfXNyjLT4qY7qfGEHa2wyo",
  "key6": "4YhMjwA9BiRESL4vYw2rjJcAS1pYGwZddq2aVvRiddiq2yY5AuB5DVqEVsXhhcG9MDCDrCuz7ZURsBnFSD73F83Q",
  "key7": "2He5Q6daiy9Em77sNdyuYsT2WrrqqumiB5b99Cikqidq8k67zkWgWBVf3ccweWiRDDFuh7FnRC9hCMvFcZcmp6mo",
  "key8": "2pmF5y9arUXFPjUvoBGVJKdhz1vMWdjAo1U7rFuijfj1dX3w13QZoc3KkYhhnSpxJrm8p93nXeQnkZLHoBdqM6Hu",
  "key9": "YV8ccbkPZyY4Y9g5tvqgkysUvHPrgfSGiPTjyP16MbRneV9E6gEc4UUaj3xkz8h2sP4Fnshqc5haeSxC6nsKLbV",
  "key10": "4c4jjCeuYfJG5UjsTQc5QAh9Jdb9WJRorArXhHBJ786MSjbNJiJr8zqcu75YCXoucVZQTAK2sCDhuPL23cyBVDM",
  "key11": "gtmFVYNgwv29MdxJQfpwupoYVNWKAUY15A8twF3s1yzorg9ZPpNdJZJ5b4Lm3zuxSKuzt3PSycL7VNYjpkM3uWG",
  "key12": "3vksimWDaQG2MA2saW4wnvgD9ipJ63pLpkoncQNqSMPavXBYin3kEEMF5xQkcoP6LQrF1hc49gqgeJNvysYjHD56",
  "key13": "j3YMz6u7yjm3GPEVhUvA1Q4mLtMJpEyqUWvAqY7Jwo8ZEYiWuHkcsoAugateBQVHz5tf26RgjAdoKHFgqCY43Ne",
  "key14": "5df8cqXq99s8RuvhU7Xt5v4SY4Zc3jH8oU6DbnFpJLD4SXaDWKAJz1uyKHzQ39UZj3SZ6grsy66jQ7epYAgLRfQL",
  "key15": "4CZX6BfsXP7zYqvcPJtqJxKUw8LHKfKLzZ5Jrg6PFNBas9U1LNCb4W3nwP4EmDDP6YhuEhFSMZx3Ux6gBdXSeGZV",
  "key16": "3e8m4Wx9UKCiZ3Fm1axBzd1DnuEkU4w79h24BpYg69EXpK6Yv452YHCppw8zZSzqEVGS5XGwRwJfGViNcJGYh71H",
  "key17": "ZYDQVZhbF6mLBuK7hW54m6Y14rJcvGv2DE8Yx3fBahBWC1yrkmcfaYSxgQiPEpz4c31NE27nYXhHiRaFmQZ2poe",
  "key18": "2wFZeyAZ5BHcQytiqfk1hi9e4JH5qtVGJTchizmyv8jGgugM3JchM5rFbbKwnHLciL4fezoh8RMUDmpb6hJPjogY",
  "key19": "9HTsmNYXGo1UxcM6kRM7ECuxSWCwk5GXqkSTNbqDzk1sv7Tx8mTNVmz6PZH36LjNz6grqZcHcNUF1UzG92mXuGh",
  "key20": "47XWiSxUaerg6JaHNF89KwNT6h9WiPTQJbwwP9V6wLxHUkQ5QFg2YPo4MAuGLSfybsqSpUS8pxCsTQBQ25p1jxWp",
  "key21": "5NJqYFCpAGC51P5vf1wWZ2QckYsJwcFh8yYGgZQit4F9Rb9zKLCPZGqJfbKprxPkK1YzQb5DCPxg8gQ995ewAA7R",
  "key22": "5ifMvHmXc8hV31C1Sh7rYtvi8AQrmUbscdzpX6PaXLUX7ta4DaCZsN6mCyXCPwsWf7nrKGPZefw2EJN7zUWsj7mv",
  "key23": "4wHwPUAJEjdZWE8ioX2v73eHCsqKEJkhGtcdAfUftHp4a4ZKZvpiVuwva2Drrw2M3wC59bNSsT15VcAJtS5rCxTB",
  "key24": "4cwfFwKmWvDWfEgFqa362M6QH5h2hCr4qoPGGLPJaGFDnutjX7umdR5M9Jqptzs69dmrRRE4WE5C6AJadtq746J1",
  "key25": "4P84D3w1vqSbfroQNhfFfZR3uxN9Ctu5BMRkFADr9NzB8zvECmP6kDK9UJyf2E3dLSm4txvwemM4dZZEEMnAbJhu",
  "key26": "4CyUZBhpnJaMYoYnKb1HLsAaF4C7hPfcf5jeRPXAws3rrLbupPWubL4dNwSbCNeVPXMzA22n7RPyVpcQKGeUwua",
  "key27": "51Lm8GYYoR1hboKeeDq6wYtFbXhnXmL7zpjbNSB4V87troa6JZ5KsbCtmfoqJHkY71RCZBFoccei5Q67T1MpbiyY",
  "key28": "24RSPSPYPd1hxvwqUrBfB7FLk9PhjSFXkyx79dpnEWffMwivLAZoSKGaW1QoBSyePe3NdnWoEsBLq9qLTR3AXwD6",
  "key29": "649e5ri4orkuQVUVyw3Zqq3wzJNZ9cWryfh5GbZ2iXpFpEMreaWcXVcKf77Nven6xZ9YjQkPETxRz1SjtnLkphr",
  "key30": "2q2dNg2qTVdKPT4zCWvRPb3FeQhBFsJVjYk3i1TXSmWxYGwfrUm9xiaTYgmtAD2p7jGWL2pUoErdSk7Gmyk5vS3z",
  "key31": "2P3moVBWvhmPWmt1CMrJcCZeEcZ1xU6n5K8FMK6ZPA9rgy6JJuQ3dfaBbGSdfoMPCAzxqfZDR6Zpgo54Tmr6BwoP",
  "key32": "2L98EzV3EEkcbn7bZNBucLYAu5aHztCFnPJpdePFZ4tLMCTBjZG7RaF7j29eTTajsiCFhF1kNeFSBD7E9y6mmHQW",
  "key33": "2HPcGJc28Z1oQSSAf3EEEiaXGYERzVVDjXpC7jTUvUSheT2E6mgZTYubQtBi1S8cfX5xy8LLZnBHNseCZHXzYFuo",
  "key34": "5yXk59yoU5oUVE2ouhBGBtkhEZxhzAaMWERF8NxZFiZBZiC7GHGyU9oF1RByinTEnWEpGbEdJyukCw2f3zDXoMQi",
  "key35": "4gvoqwM4DaSCzaeRZhUEqbpeGEwJKXChdjReCh6f4WP4G9CiHUXS7rVRiUNFGeibCmjveYSBryxK2Asyy6LkoVfW",
  "key36": "37kj3srg5Sgvhpjo1FhJfVTJBAzpVwFpsBd4FXEw7nQSrQcBDAHQLx877ivmM1LUQQX4iwVCWjsFjJYH1n3zKQEc",
  "key37": "51YRhaL7TfTv6v18PcW8SenUoexbuthfzY5ptb4tN8EnZvf5Y5azr1w6JNiDbZa6znFQ2BNCFmXtohLd3qNPvLdL",
  "key38": "3LWzHdq6fKrkB3nEraEhjJv5QXh1giWL2yMXsxTFmfcaR2s9xD9eCV8RCVjDvdx42iAUGJ4LW1WtqS4iVkdJFm3G",
  "key39": "2c5SB2wTWnoEq1S8CJ599AFLEfogwWSBBkCDd9nhYzE9fWHdP1eL8pi5xtW1uJ4Des2B76QbsSQB2RMaVH6dBUxw",
  "key40": "3oK3f7FPkKAFKEn784jAGSV9ji3J7uvnoom1kbgxTqQnmbg2eCSz9D4MUYBPtAu2MHL9xMWFCofR5z3J1cLXiRzK",
  "key41": "3eTxRpKrrM9G5DJys6vbxKEMB3kZAhGMM6NYCBAeZ2WDdLCYWnippwNwdwUnfizKArSvBj5EesYKVznz6AWs21Ve",
  "key42": "4U5Md9wpJ22nuZH7bCdsddGxiEs8MzKNrWfWUmNoMA3cZ9q1d3UoRFsnXhuBQytpBMztyhhPqwF9Aez7sxH5Xdwy"
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
