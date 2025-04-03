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
    "21bWfB37gPhFnsa3N6G2VD5GER2QLRh86HL8dxMaFxZJ467rJVTzU1CFH1vhTjeUK3n1mgzkcuQwWjJGX1fgHKNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8CLbxxUGXsy3GdW9d8CNE8EjbpjmfCQcDWNdvxCXfHbZr21tsm1MkgK4xSwwNzyzfSBDhLA7Ki2uPBJuXy8ReD",
  "key1": "6248PEZN4m2cGv6Tz4pGbTkHqyC8maBqpB7J1XF9SVcqtcbZ593QjGmWdhDibnyJLTQ6Tq1UR59BZzmJijM4n6cA",
  "key2": "65byDPae8pVBLzKJWB7EjuCrcpVn9Bm9UCGQajPouu6qdEBHymKP3kQZV8u24n7EXFbErMPzokR8WUD1X2SAG6xC",
  "key3": "VEVpdCR189N9TP9v9QHc5pLkmXtai8JdWyeFqnKtGkr5AQxxHV1QE4kb1fwKzPEb5n1FVU2XhrKZ7qga3wkUBR5",
  "key4": "MuKmATGQpWgfN7R9hnZ39ummcxrLruQopUCmPC1UJPm9jVeMykX37R4k58PAbUgV512FbTwcEt7qVyGVHjp2Vdn",
  "key5": "5jLRwzjtuTKfdqtZD12WxDVh49FPchFNF9UhiAVRPtgYz1qqPww5KNWZG11UELhASohAU8nLoDDdr7vX7h2rR5wT",
  "key6": "3YMTEQtDDXErWgTMzKMyZEe8AZxs3eaGVUykdKKouDMSuDRe6WVyj8DQTeptvK2bqgmq8ZggGJeZWnqFA5Gvp6FG",
  "key7": "3h6ktLrnP7xaXSWSbXvEYtsaRywWzGx3Hjn7zg2um8yp8Bj2YrKTTeZte1sNk21hhmPJxVpeoGKS7Ny8JMQzn8iw",
  "key8": "2LY5TzETvSSn6a6U5PpXjFAPYrKmbB3DoCzAS95rL8rvUwYXwfpLS4xWFaqbmu2rGRETXGs47hyntFftv6HGdfyW",
  "key9": "gWuAXRX3sWAp79EEH3qUmT1Wh9c97pyiUhtrX73yd6mi37Ed13XDH4D4d7cNgNaTpxoGALn8Us7ozshwfYjNhrE",
  "key10": "4EpZqnnP2KBBCdtWemmeErWpiv8F4ah7QTEtUD6ifVey7HG2f3N6AXjnu2KAFT3i9JkhnkDcMQzAMrf7K8V4bKKJ",
  "key11": "2FRYsViSyH1ZAiJoYv185ceYmW1mL76yo9RFU1QK93L2QW7SN4ZT1bLPdcg3M9uPiJGAR2WYDWABQFtRTjHa1Uaq",
  "key12": "3dbBE5G78dUHW6ipMUAyVu3yfJGTWbgoXMqSPs6YXa1B3pGDbTEEoLiX2ZPWdyNRWSUgG5hkgmY9Y4f7ViQWsryA",
  "key13": "5h9cSMQhWMrSVB8goytYZLzWxwiQfVSrj6y3KNu4QhegyNzL8MQ2M8iD1JEVL9P6SMoVcaM2NP5eozDLCvSZnG9b",
  "key14": "5RBHQAAqL9UB28GetLDyPodg7WJnigbWmQHJfA8pL9pbnk7obZ95eokpuMxre89QUevu3QAgM2uN4seU6wpqww3H",
  "key15": "59qrEhHPLkPsc3yQDUBhYDoYTo585gBQGxfHmSZQtxvr3KyixfxrXJfbqmScpVu7Q7zYc28ysVhMPpAkjFXZE6Ac",
  "key16": "3uqxWvzSCNZWxvpnAYrAxTMChS9xFGzzUurVuzbWtU7KC3Tr9DpBZwVc6N2Jf2UjrwMjo1qvyMVQ4zzqZd71m9n4",
  "key17": "osHk4MAh7BBJpmnKVhMEjKmhSdKXZH1ucGgDZ4AkRftQ5xxcmaxf8qFm1k5h5LzTh3LpnV3mqrCdNoEKsLzeqz5",
  "key18": "5AjsVGsoKHZvZjgyr6hj8Enr2EYgjbnSiqvA7zzNxNGk8vPHnCu42SSfNkGaiEJwPeoyXEVs6umfMg2Skz4dayNm",
  "key19": "tCRexUsXeHBmSL7cZHdbjQi8NgZPXQxnU48LKCtmsAmZrM5pYo3eds422iospHSUyNUMEnFoH9872cKgBjn2WLN",
  "key20": "2i24qTg6Z593bt29GroRrVjMsZokA2htp4DNuBQ6Bso3mM6TtCbMRhgywnwaPmbRDDKYqUrcbfrnc6srsFH2H1Ff",
  "key21": "MxpHKL7mfMu4SuWnAn5iARD6pSUiuvtQiwQ2JBtM1TRXqAhvwnRfi9YQW6vquLCCyFuxdxyRHtpJxcoLwCn1DXS",
  "key22": "44AwyeHmAZBkLXrLdZWZfQHjH4GuxhGL3LfYib3WqLDYwndx8iMHBEEVpimjMzgoDER267NH5qBBeLgfnAxVYc5y",
  "key23": "5uJC9mVtntFYT2xcQEUN3yV295rcp7xadiMT6zVVWS9Esaf1EW1TXNwSbBc9SP96f9SKgtkB6bCVhW6Sk2HTVsem",
  "key24": "2KBF9TMLZ1ZLZkL37edbdUewFiRwqDunnm6X3uYeEnYzRbxHxvxsf4AwFjTuMtzPFBJcmEAwzoQUHNEhXsM27M4o",
  "key25": "3xJojKj9GKkChjHcHPJ7YPxYLw8XoM7agGRepPz9Lb3HDESnZckgKb1u66hxw6YVd6GjHpeZ7E2L2x3JtXYJixnB",
  "key26": "5wEw6Vt8kfykVdVdf7GzCJkKw32JDZp5RuGKs5MPSPL7bTZot7uBuoGYb3iWzGTU36PYWQM46c8on3cxv61ku2bD",
  "key27": "2NASzFwdvsVnwUdQoB8Wt61qCKZYvMVmffqpsimwxKaSLwPGL6kZkgQocuYCYds7aGo3tSygyVpdXXny2yr2fV89",
  "key28": "5PCCLjAqjmU763W6obepwCg9RDb7nXxWx7DbABEQoKg2D8h6jVXfRpcvZF74vHmmdg1ac9DuJkKQMJ9TXwwEgMbV",
  "key29": "5vLmBWJEEo87cdwB5UgwE73wbPAfcURSDp1gaiiEtrDKN4cKueyP465aJyxGF5ezrjzcaF1B2o4xws7PtvqnAC2f",
  "key30": "xGxPnEqBNKZCogKX9oLC5FMEsDCDJt5UpTNNWrRaSTZVu9xuJTgGhvgV6pKmEt69efaEJFWD8LbQqEERZwYz8Lt",
  "key31": "4WXg1G8kGhWgBX1WKwbUZA2aNqZrQ6GeGCdhqgrwBvZC2rM9K2F87VP3uLxQuWkg4zuPZjWsr829dbTdvseg5B7D",
  "key32": "2MGZiRBzeNTwUoyCnXqnGhbcBe4ExH5tegY9ytwncUNxQHuCmgGD6RFDD6iSWSfmG1dMEf6UpmP1Cntdo1hAi9ET",
  "key33": "4mrmmqsK94PwStvk8a6cnohGiFGR6mZbjzFAzJRYXUKfHWAQYKR8dWMXiseZj8xErnQTYG4oeBaq9WniZR7kxM9u",
  "key34": "4qPEf1dBY2WYqJRNHzSngmxjAYMu9SisMxTvH3rppNvGu59id5bCEBPFVcSqFbVwKrJS51hJzARNyJK4PPAgjLDb",
  "key35": "e4aGR1Ut3iaHCtV7nomdxusACHe4ivBcjsUXpM2x5ohTYoJRCA73NMpbWFKJz3wKBKz9V8PURAZ35fK1J3ynytU",
  "key36": "a5B8FLw1e3oQJ8ABTCow6mZWxjDdQhDbGbYM5oJJ4yHesQfibQ6A52rmHkghG375xzeQF9BkUP9oj6LsXHKgBag",
  "key37": "4edUJeeEfvUbtTqMJgxEbfpM4nmyig9XevLYexbEXJj1bro2CyQSm6wv5pnQcgbXa1omd3iKMV5eK98sdQPGw2Bb",
  "key38": "2R7PPcRwjkztVi8oG8U8qKnegrUPSZcfUdVMp3jzMB76M63du9xL9GYXaHT4dY8wAdfwF4w2EroKrtm3GsqG6TBy"
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
