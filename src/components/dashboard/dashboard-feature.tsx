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
    "uN6FYdn8sBdaRJh8k1Q3cddMmUoWss1Wck34XGRYN7EsAz8Wztd8R9RQSmbTkGoZQvZ5WZJ7Z5ifZ1C3JF3k2Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ezLfpwqgfwAhCTxAp12CkyXbKxyPzWWkigcsvmmFpCKnRtCCMpuUiqVafWnhJYuLRfuBYiq2BVkXJuKPURDySp",
  "key1": "4uyk9RyYjLURLMY3f8A2YPT4YZfFLFRA5CEp9NZPwzqNgAYFbWUDC5Erp8rPWmvLG6385mPA1AVhGuu5x8erNaUK",
  "key2": "3UvHCNAAdZx9M4qpLtN1wzEw6tE8PukyExSqWoMZ5vWKwvTAwGMMBjEtogq6XjX4TmGeR34Bvq4Kq2AbD16t3UNq",
  "key3": "b6XaKZa45woZejcapTdoT7CspgPTY9AWAQJxhp4w3YD36vNEZ3Ksk15rB3CLMjqJjV7qecH7Yoh6ZPXmnTnBEnk",
  "key4": "24wsoLa5T5Wa8raU8P7AKWQheeChuAG8CmTcn5UYpnzW9cb8dPBnPYhXCE6bKFjGrWFdsbsGVPa2HMGqW85sWZXq",
  "key5": "3TZ5jzWhbsCmDEibDEE8d46VJvjeuieeEHEMhPcxPvQsHFLrzpd3appf5Q3FMp5cvs8zTub9RCr3Qe5PpAycHzb6",
  "key6": "2rCqsoJwvo4imN5kCUfTnfmFZrGTVP472FBWKg6eErSKysQ2eQh22m8U1QWGXwfXjxTYwmMTCaSKf9M2NNKf95ER",
  "key7": "4xu3ZaviZ2mWB4rLCQyzVz4AsgdDtLdNMwwrXuK9TrAyotz2WE3dyuU5TGR3DDXXwFEpFNwEjzAiesPQJmeiQyvy",
  "key8": "YHkPqqpSZPBsH67mNj6qRFy5jx48iTSEBHZ67Mwi3jXRJJZXqpZSD35nxXpx7rdi6fKkZvFGi6Tp2soefxm1zHk",
  "key9": "2Pi666v8mcWBACu8q8d7e4ncc3nY4fATY8HgGcgSoUj1iG1GwL9VqZx18uzg6QdLdFG9GCb8uphHAZQEVnRTNNbm",
  "key10": "52CMs9tatcxy7F93XnjeKgLmhBiwZ7aaSEkGZaeTuanSQEkGoTqQGCTLXzHgiA2x2dAqN8gLvQggH8AX9eFEbktL",
  "key11": "DRVVSDTYkjndRVBsyPWnpjFPYYjYRzTkq1ZUuiKPe2K9fE9ouo5DoFwHwy3SATTb53d9BvND8xaQm3xDSvSFBLJ",
  "key12": "UpnpP1LP1B2134nnrYTcZdT4czQ5eL3nHBJaXvF3ZkvGh6p4PDDLSD12cTedjsvDVhQv3bfjRH9rzXUNvKn9UX6",
  "key13": "3HJpvvQsLQqxt5rXhCKurA3RrXJeEkcK4tuhavbn7a7u1MMnQL4tp3tLb9pRhkSzKagq3KMEvDqZ6hy3FHtYxnzu",
  "key14": "4GnmU2YKJRUciZcaLTRXJaqbNycdzp6Nj3T17zvQNmjZJVCK9v7hEP3519wnArevJghdgZxxrenxCkWXabzqZTX9",
  "key15": "4PPykqw1HnKWjnUVMMptyLKV6Z9YMhctZ4D243r3FgwdNYVXnfmotoZkkCDXZoEdgJHZgA8bWoJbdJcnWCk2hJoF",
  "key16": "3nHn7AkkbZvw3GAzmxCu99oF6HjYcPfJtdthLgkdRmRpE2P6pQgoB7wXSov2YtKbLu5M1ouB93KEYh8j4zqsB7Ux",
  "key17": "3NCWRUgNQcCqRUAcudto7Df6DuVpc59mKVGpaTqGmsnoqp5giSkCXTFcQpzNCwAFR8C6r3h9d6Rrcv9g98iDBHaT",
  "key18": "GCKzovubnfKdrgNxVDbWSk1d73tPbfkyoxz6UR4aG6MjJU3WiHmtbaEephYZX4LXCgBKJ5X62Tr1Jp88m3pG7Zf",
  "key19": "487R8kYT4p6hqScLEYm2r4EEGFpV6f4iVEbv85pU1tzz4Kx6BUza6tB5PATjZFf2EiLHuAAukhedC3YkT5MmdVTx",
  "key20": "4mxqjFqv6a2p5C2bntTakYJRB7FzxVVtPQpvTPyHaPASHQQgnycPYPExFJVAg7FNfW4aVePp9S13ajFvPGrYtoV5",
  "key21": "uhDcmZm8MuPZ2zEdJJq8EBoXQ4kk4seD2HBNdizRcRpQLH8NdbTShUQmL7DsVJy2ZZQ92cXaSwDifsfsd5hMAeB",
  "key22": "3faqWXcrrAWjUXwLDePbX8VuBFm6gpTTsb5eVTpjuw7uniLfEJwHQ68cp6xWP7MEATPoKK6gmCvc1FHa7H1n4vEY",
  "key23": "8wqTcRsDPdmCD9Uc73oXWB186DC7JXTTrWxQJi6Uj6DJ2uYcCQK1bDtemNSuKF3tY25iKABUN8V2Fx7ddvqd6DW",
  "key24": "4ETNcB5HCVpUTzSuJwHH2w3xAURiLNTw9ffqsgYa6bZvQGwYAjtbHFdhj3XPoaYbgWo5MHa5GfZu1aAnSSXQjf4R",
  "key25": "5K6KMsUPUaRHp2e9MpE9WzXeGSNpZ7drpXi5KmdZyUSQdyCfxf8N8gdZY3wuXs9CcFts7mAa73TTcsHVdj1brDiq",
  "key26": "3pj95qmSUgsYqkHigY7zmf6WLjVbRVGwmqrz3H42YbvP4sMn7NswxUZPWPq5bWgUKuZdgg7zDjVLxvzeiJfGdkJw",
  "key27": "5KGJE7tTEMFcNRpRbGEt1ayMZnRFJv2CqKQFzZwmA9XQEzCCoRHhLc9L5oSoLBaY4s3Jp5L1tchcsNs1cDMk2mco",
  "key28": "3eU6VsCApz3Ks4io33AaxoUECuVvCbaJ2ktXWLfcN9LMtmqfWNq7yc9pBdfaiKZcX7eQ4Amu1YtXqB57fztof76V",
  "key29": "PQpWcBj3G8ksC1do6qorK2fKJEudzWmFbxYhbuM4ars9NUCXFqDFPvdgXze2ghoo8WdLwahhX6MCsdQzpWDqMEr",
  "key30": "4AA7M1uFPhVCSrFgCnUkpDooA97fNSU6KW6eibpoo1f8LNZjvXMAU3snzX4rWibdzrzMfbKqc3rXzeRbCtE9MZDb",
  "key31": "2Zk4QrJt3T4uP4JU5GeyVDyRn288oDNt6abjHbmb1rc5JQQTvvG3nQAbWpaNiWb8JfZRbtG6Ced1zqMWmRYNkSNh",
  "key32": "5QAGmUKWBxqP2gW2gJ5XgQGz3wM2eG9eRLA1uQRDWQXj3UmTuknNnxTpziNqFdscZhPJPwJihiF2GgxYVJjH2JvV",
  "key33": "5yKZMvFTdHDd4x2MjJmjmiSB5c9bURSgV7QrR8gC97zsiWBvHnCU2m8hufaRt6KcDkjLozPwd2hKq6iE389jPUNt",
  "key34": "EfMLwuBPEhiK5ZrdownqZxCfCBdWVmsyXn4EZfQERDqufuioGdV8MAAiQFmuAtRsYL43FmkJ4u3j5nywuRXtkLt",
  "key35": "TkevNJ1r4rgJDJsqEXQ2yx3ECyKenmczxtRmNy6dGnwHS3YKL22pLVuKNFocqW1huPYPDk4ULqe58wtkJae4h7e"
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
