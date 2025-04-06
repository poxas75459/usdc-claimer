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
    "2EyUK6VemPATajuoAtWo9gTVVVgBt3ohgf9gQaR3FXrAHweG4hdN97pj97WYmSFwmCsfJqhyGnfxbRgsEuGptXm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtRWk5SAKUo6hKUnX63fZxpGWStxT9cQasHDosG79gFAY7GEdMC47x6hNjQEyQu6ja7ChzjNQDQ4fHfpjh8JxUs",
  "key1": "5ZqoeFtbwcP8i9DFrcK5uarVkHx5rd151RtBmiRNyVcrWpjj6UyG4JCVS9oz5rwBQ4gBaXumEUyp3WRgpHheVAnY",
  "key2": "3Yb9TdWvH73GzkEXufF7XhzXpBaTv49Wvb2tAb9ne8U8BRCkFP3PaA9rGMDCQV3CH9QixLnhrMHPQ9QEx33MX2gV",
  "key3": "VyLCEWZjMDbPa3d1vHqKmBsSomqWqXnYnWUQ1f9PP7rZRkS3Rj8127d3mw32KP1DdKABwFSjqcJX1QonncNH19A",
  "key4": "5Ds8fzn1oxRiW88UezBJA93xe4xdSqr3m7RsoyRx63TUerGVEQCEajezH3tjXy6fa5T9njXJCPZjQJjHnXPaKdDA",
  "key5": "5Ytu4RjmwicPgUTUb7yBddgHHhVgnSQZd3MCve5nJLPe4woVTmynP6bjZqbpAm4UZZcpTu8JAkJjjvQGqx2y9N7T",
  "key6": "2Anhzfr7y6qYkKjWSeJkoo9vNfQr6WFsRHCnqBJhSRaPrGfoukNVTwLAu26QzJzv7tdjnZVBmSV5hviQStWqpKwd",
  "key7": "2hoakNb15voALguWKMbKGeu53GmbXXmy2tpnYry6YPsTXyKbPU2yqM5UUx9nSDPGnbUKW9GBbxuVEdX3Ks6nQ2S8",
  "key8": "4CMha2BYuFQfvi89QMH1e74kF4aT35EFVv6BZh5YN18o5Co8nnNEpy18ZuZEYQKVXkCrHe9ATpe1ELP6KKRPAUWq",
  "key9": "39utuEqU2URdhPq5tKWypD6S7Hj5KYXat2heiKjcvFv5j5fNdUe1yPUkcok19ESZjPm2GWfH4fmaUGSUJMsGyodV",
  "key10": "3qE23eRq3mjSs6sbtmMLQKEA9aukVxzGPhsGHTwut5EwiDz4hF9yuLp4wZ1jVNsuKuuYpbBSUX8hwrzQL4GEgaay",
  "key11": "2uAMRGoLbmhLh6pQhHv8NGN8p1xh7HBgKrTJxgdwcWHbeSe6pXxpJEhi8pxXXYfBZT1ySTNRbUn84M3VyqwsHW6a",
  "key12": "2uXQydHfk1vAgFSmuhvN93qP6k3YzYHBCvUFhsGrFn3Ay8u86eaYmCHzPMg7DTKGhbUx3o7PmbUYyZwJz6CXeBFr",
  "key13": "3q1ojRhdLkPCYUZFFB2RytZDBo23taLtTFvu1RuSD9bSUrTcDGL4edn4JZiRGjhEU9ydvdUE9k1tfdpQHreZahW9",
  "key14": "4oZQJdRfRaPhD47VKUjMujkhHibijMQPLFhsv8FGHn67DMiBMWUPVXEoFMPS6PcLxKmrnrhEssFdgUkQU7ttBaQs",
  "key15": "2DjNhtX6nPwYeAvfdwkmZjygYbpSQcUWhqp3kWT491qSzZukrK12uWdED8PgLTJZ3KVvr2NF3RbPUCLiQnnuBv6T",
  "key16": "VqA7ZvBqvSKVRWAggB39f5xmZVgY4qMntUqQ8yUCkTijKSD4DKtTz2XYryg1u5VFKBuiHPaWytJmruFaTMkimyR",
  "key17": "z2L65SBQRt3WjyZBUznmKP5ixCnE4PfBp1vK9MR9ZG8zSAUt8btST4ao6hiHkePPpnANZ6Qud84J7fLtbX3Nm5U",
  "key18": "p4zySQSMgnbYvbfhaitJdUu2TNEpyekPfuPW1L45jphStHCNqByi8C3Wpn1U1KBu2ujG5S87vB7MCCLB4jLBHbr",
  "key19": "42rJ8KKLYKiJmEFEJx23GYyo6479BxpSUM9XbugxMWycCVSpat9VJKqALwnKqpGTqiVDPUJBDw1dGzfjtVqLtXm8",
  "key20": "5Kxofzq8yM9ipgQ3hKnvJTYeo4b1PNtmn5kQE76aR46qRaop6mscE93B8VnEEwmbQavX2ucoKFRj6xegXp7oY6Gb",
  "key21": "2V6LThmy9ovbKGkfH9Gms6aicGiUd2KcQ1cCUnqBhuZGa57Tv4ui6uCBBDm2y9JtJiTkoeVqF1r8LnTExd48nmKh",
  "key22": "4CpJLPWPjnVZYAQ3WMNhku8EZGJazQvNnnkQVBHGCfQVVcRwNqkGwCEXT2DDTU1nYEx9K5SpXzkESZ9q8rxd9qS4",
  "key23": "3Wf1PR9T8AwdDB5AUo5JjTWbqqj7btPyTs85UY6tcCtjz6yYuq8hPEHexFQkCpb2qKhPcXQ9skPeHuTWAmsXCgUb",
  "key24": "5jF5egkgNL1V4viFVwRcNUccb3WE2uz7yU3bs6SZ7pPCteLZFpB5jasJr2Tk8ZWrBGzdtwpepFwo4m8ZuCikNGdD",
  "key25": "3kYQnjjc7aDEz4qYmuiAoMR5hN78BdHa8YsxKeaq4nXFwGgdVCrYhjAUwkLcJUfKzYbvTiSQD9YC97EnLXrjekyE",
  "key26": "3KXvdRPknvQgkzXARzTCDY4ZE2p2vkzwdwX8FheTRxvrCd6sZZRHyMobrbpC4drKjVWB34PpdHntByuydAywFmxy",
  "key27": "49dU6zL1APQiDjV3VS4qqTBfNHwBK5Z5xpPBMx456RPdRNzkbJFFbZbGuj6PuTaoqdSHtxZaaGXqG5o1XyFwf5vp",
  "key28": "2yFnp1E2AD71LgH4XsvcFaNn3S5mVkeMat7dNwMTdrUnoe2BRF9pPzdRwzohNVg2XmLpKwKAqAyz2GRSSdu3RCTa",
  "key29": "3ZpGTCWqf9HajJPRs2anfY5oMgaJwqvk5nNFACFtdBvbYMuywuxFroAdgMLajE9d9ZhEECpiazvhUQLk8SERw2ys",
  "key30": "veM7HbaAWL9k9JsoiLjp5KNSY2kYJR46fzREUUuBQxZcSKy25CuS7LLLxaEZ1CcHdePUDLfCa1oWW37UFmrGYBq",
  "key31": "63W9uAqTmtXveyVKQFh1uK1pUmQ18kiLKNkZLHLJ4p5NNb6mcHLeLRgabRuj5X9g3hoXZ5EZPLKq7265ZMx7jP9X",
  "key32": "hm1PBiLCc4A1Vb2njQK4npkjARCQpsaNngRY9YPnY7aggBNyMxt4vfMia9WyjUL1rtC6vLX7HhsXxY2JBoEaJy3",
  "key33": "3oSAJhrWUY8gdFuBunu4a8KahpGJ8s6DtUCGcq48tmgreL7axGoNBspGNLTXso8XUGpiEer3Z8sYyQ8MAiT4ptHJ",
  "key34": "3nQugL3KLim6b3Dz14yECt9QH9uyKUqJefC8naSkwWmYJzGheKDgoXMqnBXwq6y83yXo83caA7iMByoYb4QUW2FR",
  "key35": "5GJZmLkXJRUjuBSKb6kcWd1sdKpAebDsqketfRna5iHBvXswxSrmQRQz4f9ubnpvfwvji5Cbm9gZXFvv1TcfcAj7",
  "key36": "XHdCCS8CjrFuqDYGEigXDv16L8XFJpgyxsEzi7tyUz3XfZzca2LpKCCs3ZLFVSbjWBNPs2jLmNrGQgjsEyGNv8b",
  "key37": "4dyJnDxnHeDy98NHrt1gmmU9da1L2QXyK65pnrRxUV62PwA7qMFsgjyJ2FR9X5NK8zxJWqVzFu4KRq5UrnSWgRU2",
  "key38": "4QKqZxCheDuyweaXWh1NLraaacm93H38UhxvMEQkxC62nTYui8etrt6YuFNfvyu9fs39Wpfrwpsg82KRGjqTC2YC",
  "key39": "2XWEXLxprwGmjvMGfDMbx39rdkKtgHhwXVk1YB1jcD4s6EGi52GTMadXf44aZtXdGNfNYwmKEiZjL1deQbwframH",
  "key40": "iKGgRdQHabqiUtxTenWT2t87ba8Jq2Q7dVVtJkMhpjeqnTgWNxZhhmjBQHQxr83S11RinzDvSMd6wj1x3zseTev",
  "key41": "3nPFRvaEkk7kFTdGp6kxdJxfHjBnCFyp5TeQGkUD9HD1Pd7A4kUwx6hhAgPN67HAmWhYNXsDEB3aSZpSc8sohd2D",
  "key42": "4rpATWvqxny4UHWRSgs2YyzRVH2gr3oudZBXBint3D53RLqz5M2M1w2x4NynSxfDRQQbD6DA6ZcEeNsWQS53tiUh",
  "key43": "BHehTgPVodVBjxnsdvx23QSaDyY255eHPT52Tku3trjz3XXvAe7i7otjwmZ1WrVnLUv5dz53EEut1oCFTwdf8mM",
  "key44": "5HnXkCjVcyP6Vi41hDE5tYyLK1PgoJGdYCZFDDs3yPdACLjr2sm9qFRhquafvP8265cTM9oVHyJMMsS4HPm2DBBf",
  "key45": "2Cp96Q44GTM4mgeP5VhQgpZHNuy6W2bA3pQXZEMDJdUDzrkMH3ShcwvqT3Lfvk9jUYXD7YATPjCSH5KUxZR1qTaM",
  "key46": "2KvipFR1AVcX34PmmNuE7Kzx7DrcW7RcKXw8ZNBRvSGCTgbGnLD83cokuSL1jnL29jf8ZmTttrAbNQQrLFStyipM",
  "key47": "3enh7KU7YFL1EPPnWwKsCjgJSCZTnCBzwyT5emQwHZTBMxVfwJiBPddLMvxq1g4ayEjcNz3oNjABt3BisrM7dLtz"
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
