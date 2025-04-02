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
    "AMtYuwzNjiYML47ovZjVHeUSxT79ThBgy9CQV7f7X2EQzYynGCr5yQSsstRRmzvBDvQJCiYivu6YaqaJgridEZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLc8mJcJx8aAyVFrjLXMjkiR9kniU5Nr19ZBLHYxQ1pEshNp5o2bq6tB2prYucwyD96Ziv1Uf1zrRArFaDjFUMh",
  "key1": "66njaJpNEo5kqXCpEDjKtQGVrRpjxaKE49H2jw8zC9K9BhcgTUWGYgZLCqTijCKzQZz523YCgaLLRu8FbTVnW2gL",
  "key2": "3mbnMKWK74gRPsAZ6nbk8nALJrW5QfCEFKSL2uAmVajtaSSbnQo5KAEFSdTGCjA5YCpcyNG669KcuturnnxL9Noh",
  "key3": "ANsJkguUvgsRWwvEsT2cgBgsywromsmfGqFvzf1VezR9BYu3CaC1MrkMJSNnz3P1G5ReVBv9R2DUDHcfWPr1HZG",
  "key4": "3He42ZL2u6xL22cG5VGV1uKJrGYHbRTVZiQsq6CKwUc7GsWLRrsSmZtMddm26XYAiPTKBXTYchocq7otM1LHmF5S",
  "key5": "2i3wQcenyqzUnARTqxwuVooS6ymMKWMowFpFuySijwn2mmCecBji1LXdrjst3KSX6mdYBtBJgQjqFCMTTtfNdqqY",
  "key6": "ooWmqQ31tKHK5tzYaQpDMjv66TMm4vbAvHP1C8mwYw24KYQAyXExpiY4RAKjPj9xAEX5AmUvhR6Gh7fAT65mnYv",
  "key7": "4ywF1qgXBUfdRAPto9obU8JE39GA7XxoDEFRfAzJCb2eGsXPf5jNV8B3QBoBTNM5yTLve8sWZvkzkJgaKnSwjKKv",
  "key8": "5vKFiXNTs2Tf1QZx5q3uPhE2m6neps79QYs6p8HFRqsBd7eakJUy7nqr4G8TF3aNRgeurXyCFHHfuKR9UqFsa3qz",
  "key9": "QQZzkvcnuUSngczNAwoWypq1BdiH8t9VDwv9Y3AWRyPrvABJm1bmf4XR7npRUHoJvUwoRXU5EG3gy1eJHcKiJYw",
  "key10": "AVAa3eBDb5e8NUwgeYMFGrbbwE6yECE5jmUK3Cx24sugJH7JeVNc3fXQ9pSypdfF1euXeUhyhT3rjZLbENwWBcH",
  "key11": "53QavjMGjGmvTPm2JKTdu9Megegxtk7W6MrFTRvkh2PNdjqPL6sCND1hqXh8rCNWrGuFcbDFdSoBcUKRrCZ2hQeN",
  "key12": "3pqF54QVEaPhXaCKy9dnMWWWFqNxXeTXxVRkw9eWfZCqxpWnMdaydtaMQMbvSCEtoSQGqzJCDPdpzWWMXwSUAtvU",
  "key13": "ikYNdTH97YsARBMWd7w2cPK7w6KatvFYSr3C7FHHFJKpk8LcRzNM9ons5ojWkRvJ5AomighxnhuzjqpW3DXWp3o",
  "key14": "4ngaerRSkBMZc9q5e11qLX9f1Knm6gqDb7JJwjg428KYKKkqzp8cSi1JrEKi4tUfKrY4aYD8oZiNW4gfsUZbubFU",
  "key15": "4ttaCBY9Kk6L2mGgwx876gc6KDdLBeUk6LakZ53gAtPVohbs9RTaXTUyBEWA5CDsaW29otXmeB899Lh62F6RqQZX",
  "key16": "5wuwVC6gawXbieSGigMELpo3h9mrWBXzxTcjJKAjUkoZ8qemSuBPsY9zFk6k8vb2xswCmn5dsg8zwF9zWbjAezqt",
  "key17": "5kRt8nnT9YVN2XV87GyzjaTnGTM3erFRf3jhXhTaBBRdGFimrB5m6Mb4EnjQtnTTUbjWNLAjf2vjYWxn2fBcrWM6",
  "key18": "yQaWnG3aEZFrkJx4cYsuvxiSF74Y5nEU4hzab2fptA4D1tqWFBJj2LVBf168Aui3FaVKfbvYB4w5DQfRn3LxJqN",
  "key19": "36FJb5coomPLbiueU16nG8gJLwT38kYMCgqr8Akne2EEWGD5kuQdzJ5L8itk1Z7eWddUiyJ7utbY3vVS63pkyvzp",
  "key20": "6r778bPqee96mJiVvKxLiEx2xutS1WhMEuemky4xU4S9HpTc8pYTHPkeLWhFeQE59QARnWo9vyfuMyuYG6EbUgR",
  "key21": "3ZKhyP84rTf8HvYEjShpizcBg7ge35Fg7xAg1LZpCV3MZnTD8Hbv2eDdQjxj4dgrWHaHvHa44ZBQ67yMUBjSniSs",
  "key22": "ff9zH7Ezs3sWnL38jPGE2yzZGPFQxwbrDxvNdkcHSunKGrJN8A5scPb3Dtin8Jwu88EMupxQvU4C2FVPAm4hpQY",
  "key23": "9b9gzDdXNnJXx182S6K19xRRqySa7rrnX9SUhQSnqfhv35qRCfhc76a1Us9fdEgCt3XjY77CEZAo3CBBPfbChYJ",
  "key24": "2n13AoNn5DXY5X6Z4oZXvN1V5NsSZw2KGSfiRwMpjeJKDHxbY6XvupnbzSqfpBCWZRdTWjX4RzaUrb9T8QRh36kK",
  "key25": "3B3PSesMGudyACAU7da3MgP6sxftH8fZq2eTQrVDUjKZwod28oPVsn67RzgtjzoESP5qXHupHfXURpNHkUZPkwXr",
  "key26": "5hZTBwMsiLmJPMHu5yNS2Z26VSgzBYacFbcdjW3QG3n7LdAbdy9nkz3hWUzMR4KUS3zWf9BXFCoLytQoe1KQGtSu",
  "key27": "3PPwc7tLELgxcDConjUz2zyqMvFvJt3ZNpS9THgQmBudik5p12upmPybLgvj5zD5G6iqtjemmSxhom6fT9Hk5374",
  "key28": "sZoBvYviQG4nQZDUFSdYNgLNs7G2eQbwkEXSs7kPQndvVNbfMGMyckib2QdU4xaKo2adSr1h7oNfwJ6mxKqYEBV",
  "key29": "5UBW2tQD7Mj3yXPEwv7eZdpqYRrD9SKh9AFp5HpUNBtLUT4teYs1KBcXPrKH5Rp1cika2EsZsFU2RYUDE42y3xux",
  "key30": "3kVhHD3u92crgML376gXpTgrco4MKL1Qi6GanZfdBT8a3EjKjM3CfHj4nh9wctjaQQrioGHaraAuxaT8TadWvZ24",
  "key31": "3hjtRuVdb8TSfa7LGV7ur1xL6RqCoAQ4gZfY2gQN8997bqAQEPKfZmq8KyDt2UkBa64DNbMgqYJwkE1edSYsbDxC",
  "key32": "4nTAcBnxuJp4wKqVYkC2ZJM5tezXg9Bgfq7VVeSWZ9d7mR2geauqU5AHPH9tDgzsFvAnB6JpZpaeokJ89Exqi8eZ",
  "key33": "B6TGvbJJzo1rZmCF39mPG24kAPjgDLWA9778EuYXYHxebU6t7cPz5Ru9bvK7k11FsyY5j1bGG8tTeQ6eotsSUk1",
  "key34": "5hTt1JmpfpB1EmZCsk7rqW2wHGbGiJRwDwNyjkQfmV8EP1542U5YDceDYpTLvTxVdU1ZeU5auEQVv3nKjzPHAm4A",
  "key35": "2DVR3X2PheXEKUS8Qz4UagBQVdcL2yuzX8oHLwH5YfbPdLQ3KtsiGKtdcoGnJLCjFcnJMLYD3wDPZeZaVf4ANqmx",
  "key36": "LPgmQt3oB2se4KyRpuY5iy8WMjQFcboyD67GCz1ByeqWBsorBn5Cd6HwY6cPHvSXhXUyEj1H7WpijYigoNZCifj",
  "key37": "muJTYDKMFTqkTBGekvVwF4zsmCcJhfQnz287kSV1t9Bg3LHaVj2nzHY9MV1MAWboerqTQiQ3PEvHbBx5dVfjKw3",
  "key38": "4GXmicfS79vJuWUsdXuy6u6yogchXaFbngHYn9KTePxtm6ZMoFKdtj3MyzQ81cSb3pfaD83ULccU1SM93mt6wg4p",
  "key39": "Wa72Ktydrdp9y15yG4fAyNYvsexeYUcL1jGtVVoJfXugbNa5BJEg3aKXLkpkjvDGoEo2SqtKEyViGuijux29svF",
  "key40": "5xUY5KXWVx7RbA22BZSfnZCmuG9HzXny1gcKYqAWcLv7GrJUyWCTSQjW18byN1tgVhW77qnGqtUT4v8VkWbMAELp",
  "key41": "vw1S3arx5bGjWtfi2n8Np1MpedEHqPRhtvMHk4oXTQcfNzmV4heftMhS6zZn6RsbERfAc2pSySsKdWb3Kv24Efe",
  "key42": "333T38h1CgLkdY8vAmJw3CZTyeMFTz6UWE6fPqLJQGDajWG1nAnaBbWRrmpEJK5NAffFJKfnAsvmsignk5apH4Mt",
  "key43": "4rYfj3nP8aXfDV3kkqJKqtdyS3L6kgCrSmB16Mw1soGYHRpDdERVzK7Mt6U8dJjHoSTPnfrKVGzN7fNWT6jFw6MB",
  "key44": "3m8CqPscqBg2Nc7Q1ysFp7rV2kYe2VMBr5sdL88ykP4qpRBd2KFeDiN2evuQ6bTNyVjkzNXE55ZJsWvmJqxb4D2F",
  "key45": "3k1pt7r7CJUoHaMgoNpfjwWJGcei1NRXQ2HqbYV3Kxds6xqriDPiCTHJSrziF3kMDRQXmh4NQioWABxWh4LgpPqY",
  "key46": "3SXvbGsjs6v6HxiW5gga6nNNrovRvPrZ4ZoYEaZnhUd7pU7pNKyRZqkdPmq1CcuP2Mn79zM4jVk9wC6d3gmEpEC3",
  "key47": "4NYWsXg7bhXJLDAz1UwLKqoJ8kwW2R7xoKq1VCwhcM1LqvWV1MCCLap881pUBLWKdc7udFysi7Pvf3ezsNbKkjhh",
  "key48": "fvdJ9gtdjTaggtqE2kZK9g8iBEnijtVpXeH6T81pYQzQXhVgfwkk78Z6QjZ6prstV3P2L1QEpsp2raWkc8qaAka",
  "key49": "2U9GRJM8PF8QoWW8G88ms8xUi9hXURNkhHj3fcnQqQYMY41t1267nMrXxVNPDs3tBDkdFH5RqAUQPMuZoP9AKxAG"
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
