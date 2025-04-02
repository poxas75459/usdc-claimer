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
    "3pKHewpcSia8zhW46PGr3PWDsKz3WQNbVhTzSyjjVh8DeQ5shgJz7H5JL6Fzwg5o21s6A9hpFTEEpPkn5hmPAdpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PF2VhQrJCRK8gobt47jwrK89PwwgSBLxRrckAjp5v2jmchgpNoMhFZyG2aYtgztBbNC69mNXuWb9Dj2SPSs9FL5",
  "key1": "fb8iRkago9ahnE1PBs7qpuJPHaxWKGBCkvc28uKBeMw5PrVTuJGnidiJw4aRE98dA5Ns35wyjfSANzMXJZkxjiY",
  "key2": "5HZQYLUgyg29ZjHMu4ETrBtr7TF31HWFneXEGXtTX1fPpZ8MN1BXzbJGKJy23Z7sj1QePjwvuF9YQ4c9oSmxu19C",
  "key3": "5LWcKRsPBfszThnbiPigDL2e61ATnvWbRAUtL3HUzzm3vFqrrZUTyhKjnXe4wVsWhjjARriLRpGwbEQ5iz5RSeaN",
  "key4": "sAdtPfw1kzfu9wKJjNerv1aW2c6bESWfNEHYyVPzdrGLuUQTdqyDKeimAmBq3fgHE8MXSLs7usdXRq8QpzjyRoJ",
  "key5": "5EEbjeFakXMXhuXThua81hob8ych8irJ4ausrNhfbzDEyDZ7qsiYsyZBXivjkbTyNbsxde9kZdrs538nyG7hnzfu",
  "key6": "5qJKNb7TwuRcgr4zD8DVzxLzz7AsPbXHzmXgM9HYeSiCQNG54C2HCSjmxbUhsqNxX9xCdRqNpR8Nhg1fLykdgd6C",
  "key7": "4TBtWu6DtnrF3XoFh8RLs4us27dJz7bKB3Fkpn91dpPGUBof9dGiEJ4useWWETjTxKc6aP6n2Gn9VghaEkkGuXV6",
  "key8": "ihS7W32G1Vrwtp87SkLkFB6u2coJcrm1ZNRxx6WJpzAhdHbd2S9PCYVefCZ4NMuw6BR6MViNSoUJcgEnmQicFeX",
  "key9": "3ffULw8CXicMS82dirr8XhPuYPpQiANtCskKQJWhrqd5yLmkLaLPTwtTDDPFnEYf3U2dYpSUZcAsbXAeEnQbLKU8",
  "key10": "2Z2X6ZNZSvmwE8r6VWAoQYTZm4m6k2hn7H2a6uPC48CkkLmYY6YZbd938VeqX7cHpag5q8yov5kjT4vf92Z8xRxA",
  "key11": "3NNpEb61MzaUuDL4efpPXVGUFucZmxad7X4xNnC9HQjuV7SgwcG8xz2qb1Xy4L546R7CjGmhD5Z7AkbkcszQKLQJ",
  "key12": "gixhKNeCZwvKoadwQCkV99sNrZCHsv4qKacmKQWNwM2jKucNh5ZhYUFpQgajnQNVmYkc1g6thmt8EQsbvLKYfVS",
  "key13": "4avFfGUzNhnmmqp9zMUfLDug9YgyUQ9ZeBBWz3LaybRCpVV4MWeH9mubWhL9Y9t6kfmKt4hyj5956cD7S9cmFHrP",
  "key14": "5sf1jkKu43BV11Pvp3L5j7spKUuH3DfLd2WBTVZEWyfT6XpY2cwaxxVFu5Vf4cqZ4wwg2WL5Au12QcMHSxVSJSQT",
  "key15": "PnAugaqaECJSRcNBK5HpC1nxAh82HXdSwWjx2bz7tQLLJVzfGj1iQhsWzizpxGzuH4eG13k16dfWseNMfPGMvRK",
  "key16": "Ag8qmKTXdqvN97uscATfr7kogysFTnWa4rNszDCtzhxQveExmPrHUNCbR92VwJeiYvFuDnEYGw94ygc878QYdYB",
  "key17": "2gPAQ8VVBDg2gVmKjd1GG77hXNgTEAwNkV7Q4WbyfrbXvxJPuayfGgXz5cAxjAgDPakN53MgkWXiFmpXj17vMNSf",
  "key18": "3K4B9PUixS17LN7jED8QMZrhWXSaE43DutwVkd9anU5TSLCasYu6Qgk8MXwnCABAKf9CntL4uQQfqo8wpBQUhKR5",
  "key19": "21118YudwSKV4hA6YnGA2bpsqrApcRzAm7c5qKqgvHsPqshEXTzWYxTCKRswQ2u7AirsemRbtGnCbf738tMTnWnF",
  "key20": "3YfVteDZYEiwzTqFH49D8xBKVjWCXjmmPtbUoB3fp7nEBQRK8LPnBa8vStXh8dWVtsoeKLgzqZDwBaAs2Honx6jd",
  "key21": "3djTwrD28xsotstHYw1P63A4et4ic1Vko933s8JAXcUtnCHQ8MTwymb7YU4gKJxRwNPij7osyE7BedQibpex52n1",
  "key22": "2pAZYPmDxdeo9Qx9PhESRsn1tdwDQjMkLRcmCjZg1d5BQgfeuNathcydPwLzCiqbkeRsawQRwWQSoQ1iJviYPNLw",
  "key23": "5RqF6yRJ8dw9wxsPv7VEtQ4ssMvCfXN5FDHoJqEXdsyq9CbMimi3JCPm654a7FgKWEigwy3SpR89AjGX9BMERJqa",
  "key24": "5Xk8xNxn4PLPdVqmZztrXnfxf5nsKygWw2ctDiwD9HWz5mfsdphCziG9zkRF1xi8jHJ7TabP8yZZQj2oHdHUMpMo",
  "key25": "3MAs6yn6iYpnBTEZFZWaHztPjSimusA8SLfeeFhw6S8XRvS2EgxDikco6A6aVpzkX73zb7WvVmHuvN9ETR9FLBin",
  "key26": "5UpfdyGGtx1dzhBcgVceADEa6rdJcNPaK3jsgokvA1unhPoCwRWdwu7Vrjj3XmB7EGfCfJJLvvHD7k8rsmKMhYd7",
  "key27": "5kNC7TzeA6ZP6dKkC547eeXqAGEhDqbuNHSkoUpQ8cCMfxRVDaZcfUQi1NaS152meQkSq351eZCfJpQMmRy2afZF",
  "key28": "67EWc8GUuMYD4b2XJVUo6eQudaJB2BYf6JBbPigUofu65tSZSgysy49zyb55jXwuWHTWh8AS4LjUuunzwC5pGmhq",
  "key29": "4ktz4TFZZ2JjrM2gDokYiTbTzjCniewWmCrL55L9YzcszzAF3oNYMy67VewhSfVz8EpK45zmTCXLfg7WZzbqRkna",
  "key30": "4DH8nFmFiKD3NqGjtHxDFkAapVhVabcMoN7ph8cmUdojpCXmWZ6kxCjVUaPrnRucTREiYRzSA7QuhXSn4FzXo3sa",
  "key31": "5dABQiSgrtEAi68uiy1FAtmwJHL3Zc9FsU5ofX5hRbcKP2DgCChbDCUxJZq6nZkHfkDYxsP2Q4fWSCD3KEPNHZJR",
  "key32": "4ibH3SbfFGX1fm45izjpNuSLYn4bp5EyDE59BDD4b4HqXNzj4EDboh5e81h1uUrBG6ksNEk3XSGyj7VbwhMBJwqL",
  "key33": "5uuhRPgZRtnjFdxBUoHn4Qap5iMomyUBDVy3WZi5ys1SETLaT8wLu4AobWjg96wbiNUVcJqrjhcvqk4zvVePNUy9",
  "key34": "3cqdLBseQRidwgpM9aG6ryp5XvWLxQMR4edrYw4ktdp3E4NmDtXP3ftRviab4ssFbqTuygmF3je1ZnSqF75f1vFZ",
  "key35": "4SkaKtoWw7hvqFVjoJJiWdtmfZjTmWPWTkCG6H2nz73NLrDgFFvTTftotVzCqsduimoCZaqgb3pzKjf26Z7n6p3Z"
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
