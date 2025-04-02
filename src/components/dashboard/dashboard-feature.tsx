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
    "2cVSGa8jHXXA64G2tLjDxyJ7v6qDksHQkHmCX8kr7AfYXtEvgBxMUREuCCREkr4dbYYaQ4H46S4Au81RxyPcNhDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtiMR4YBinzMyJ1Zk4DjL4fiXHJAgZdiYUAjs8JMwsQbSwotXmgh2w7MnBAUAsiBDN6RJqzUcRXFMJPG2b79WoQ",
  "key1": "5R3d3Sd2NnubcQNV9zPCGbKukVkk5iq1vFQtvMNAhco4RprpgXUY4qutvgGdiQPauyiLWABSjtdeMA9A5V3sfwGe",
  "key2": "2aQBeduP1SHuSdnUWsLwd5dFnLsCRzGRdK8qM4pmnYgRoMGiiiPUwKWAUUZcGydr4TNSMcR2tw6PoHGBV2KuuxF",
  "key3": "2bpwZzna1tYimg71wvixFRDubr9NanV7ujMbbGRQcxN7xbpmGhrTwwGaiqRsWr9Uh73djVxtrK458BmS7aS47GkK",
  "key4": "2ssaPHb6uYCtH3DGLq41skSWNyP14MGMheU3qQXAiSdAXV9zXpyKY64yos2qSEgPqSShpWV9HyJQskFjFi1pXiUY",
  "key5": "3CfzR9LBwHuwmkYXhx3DqBLWdDbxWtwaTe8suEAwdsYyYqDnTqsDVCctK6o821qodYAGK17f2TH1ZwKwMVKJ9bt",
  "key6": "5dGNGkk7rzJXmQ4BwAHU9JKDZiKd4WMZfzpE4vp3ZK6tUZT6i8xjdqGqSxUUpGr1GWc7DF8DN7t1hpQkn92DFgXg",
  "key7": "2YQgWBKyjZwgENwhPfqrVgx31Ch1xoQh9atDfmXjCetBBpdodXaQLCrcU8R95Z8nMUxTyEeTuwV1dqPprN9LJyK7",
  "key8": "3KQbR1adNr24oTAAHrz6dNSh9brNFYwu6oVACegMegGsxvHGKUWs4uvMQk6X2uVBPBQidt3vGP2xqvV4aZzNXQAo",
  "key9": "4XYuzH4j51cV13AJnbhX2eEAnESaXXoCGogaCxS8z1VU4FvHT5ebfeG6MbVtMvugekuaNSimSaZRaJ53sB1Pins3",
  "key10": "2dB2Wp1D3Yjckd1rC63WDDXi1FSVCKYDGSeJAjEGTz4BeLXAvwwvrQajPbvaWhh98Wb6ewn45FfvDqpCCQL3b1Gs",
  "key11": "5VXJEzPYFip3FXrZENoCwoWG9UaKZTQzAAM2Bf7ijbbcwRocGzoMtHAxLLrRm8L5Ei8LbMx7gRqD4pJyi8AebvvJ",
  "key12": "2ytDA19Ee9Pas3USKty5AdkStLm5n1yz8xQe6VPwTGBBDYHpjzAzcBpmUgxWKsQQdRMMYB3H6UwWFQgE4j7wTeD8",
  "key13": "3b8v8SvEKWMTBeYPEKzPc556sQPdZv3SqW3dAKPeuHZmCSPU5bRNcftJB2BxjVwXwn1h4gaiZGnRv6BK5HNVgy3g",
  "key14": "242ndsSsXvumwqJ9r9TvWYCE1ToX2UVqxw4UJeQrot8dQrXKYiamEzPWUMP8dP1mxFCHNDPYF78BuFjv5L13DTVn",
  "key15": "62CKJefzjd5WSkwLXGjx173neG5mr2nk68wueoTyAHBmnC6cUWrsLusr696uLSUaR6NFf2fZM6xUn67WuSgZQFWN",
  "key16": "2j9Sn5SkQzAugC9msiFbvbcFf5TqDafoYxrEnzBYkm3syiPpsCR4VDoLA7ysfkdW9sJ1hn1FaFYs2vH4DkgF6FVv",
  "key17": "4z5TGApNh3oQtE9aCfabJFMxovTsZGnvURs19oaFeso68GsWfHNotmmab7u6URWqQH9A5oyqkwoFzrjGtZsN4Kry",
  "key18": "41tHEKkwJB5U2aymWPbjDFZBw67zHfxWjoHWbNEsKcZBdoQXieTASgMwWyAtgSGvRRy29zP7v9n9wt99D3SL69ZG",
  "key19": "kXc55WSwHDPTRbjRBHyMgsFnPCqvPdsnkysokauug6xebDpsU8QTsF9CuZYmjvrimdJcjxuSQLumxWLgqtZGqre",
  "key20": "2RKdD2VhQ3x2zvqhbehNsSiQnFpcwQYXZAKxRxWGhaWBdgNfuYzXqQEZi7zNBgGRrxEXgt9Jp6KnFjeWvnRtEvcR",
  "key21": "47xSkReS1YYfQpNgHQmQ9BuCM5SChDrKDJkN9rCKhHkTgUuz6GMwJEQ7uF6R6FJK4S5wK9gddPSWLsgtMaLkamBp",
  "key22": "2dM7juiubJ3ixvi9Pt7nCwpaobtfhGe9t5X6CxhAm5p31NdDeSsUAdxnXTkSpSTy98oyX5hfr3rBN1RnXtkxRYUQ",
  "key23": "3kCxnPrKR5pi7oDZDfYmatazqq1QpjtUvAN3dhzgCTV5Wt8WvqQ8J8YJxuZtFUdHuq79UwvEMTJVG7nEoZWxRwdN",
  "key24": "zFHhUN4syWJiFQ88gW4mYud6V7dr1UQPSxt7tFc1vuWFnKzzTgGr7CgTJTmJzvds82iN44yS3hUm7Zc9MzM8LBq",
  "key25": "7PP51exR8QaXzXHC8CqhwfDC7Ffyk3takr8iQMbkTWZLSmFyQ1FXqY3Hdy3n2i725GaKowieau7wZm3YF1eEaqQ",
  "key26": "2FAmM8BbNXSdh8qYLAhmLoY2UPEif5RAXUhDPUrvMm4QJEsfnR3LKjMMBTcg9u1xDb9AyDDVthhMdnbEEddfvdeH",
  "key27": "fSV8vQbhWT5rV1Fp1Zq1tTsLipyHpii1SHnb3MKn564pn8W6UheWJENiofMu861goQqWic4oro5mHnwNdFS87pc",
  "key28": "28XH14BhXbQaBVUb1dUNU5HW3fimRqDdpAt2pAXu1JSnqTXcK6MPD9EqFvc67tYSjCJcmtnWwBeigf9pjswt4h3Z",
  "key29": "5UbVNVPWkgC7VdQd6RZXr1eXTYPuKziyvs1rBPWUgaj5Wdafg7Ftp8vxy7zd6JZVk5ComKfzr1CBfcoEQPVMepse",
  "key30": "289ADvtrKcXFMt2utvW2kZK1J1Jdi4YHKrRA3qEqvfPu2c7voHW29iLeVwLa8DpmLgNJzw9coQkoQ2C4U1VbcYet",
  "key31": "4Y7FEJsTYEB5sv5PPMo5m4sj9fBKvS6XuoQb2jpYzL4GcRTYH191kJcZbjdKKgVFM67Wahv97W14KHsxvpWgteTj",
  "key32": "4m6WzfTk5NDmvGJd5KUir8RARVw8GxEuAUqcAz9hgTM1UEkWezN8cQzmRBGpN6agyRjfj59fqhEwpRhcA36CY5BP"
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
