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
    "2k4ST6xZucevE3qKje2ooRZtHo19tR61nVtmhgY8oVQu9KVfXkq5aJVfZJ8qz48PAcConbhC6dGzcHRSd7sfp73j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sV6JEuGBAT4wPkGN6KbtQUbgJAav38FrT2XBGU9SyW7cUP5TXENqBVaHDwKyGabWo3PWzidPLtnThGAnjtVP18",
  "key1": "3yCNNUJLT5hBCqvC5HQ4X3eM1YXCNRppZR7pvYEtJZvzS9uihcLa25taax9dZN6B1uqhm416HA7178o9z2VVP51N",
  "key2": "333Ldk15fFNgAzk97WmZLm4K3VxUuu8Qjp7WYy7dmZb3wATXPCbpW3D3mDHk23aQSfGkftPGDpeLfcZFBFBoqdDL",
  "key3": "4pyEdst9urdcwmaerCHAVC4Hhmg1vX7CZ5nLVpETmz2uwh85qGGomdLLhgE2iMTcHEah4fxFJ62MCeaTxkgvSLDa",
  "key4": "4Kno1BqsGLm9oWT6DD8yJ266DYh9aeW3SPbBpPqx2MiuiFG1zykc9uddnNvibujrSunKFYksVjd2xQhnwwuYFfR",
  "key5": "334FXshG9nWLn5kfS6sYgsG1bWzz4ZUydhZ4HDnsofKqvnggkUiWNN3SXuehFHH9MoEL72cPdE3jVo6uydsFjyUe",
  "key6": "3Kn57G6B6E32FoihwZ4GNDzg1n1GYEbEVbVp4idvvihWoKvzJzQb3pnH6CDVW3bjpaf8A7uyRC7qYGEj3sBu16te",
  "key7": "2FEKzu8e4NCL9MFRmGaqwnAhKvaaBV4TA9GJHtg9UZu56e7H736VB7JvYhuaEbLA1xRA1gxXhHGdpNq8GoFukefb",
  "key8": "4Ud4cdbJ81663mDzeGptN8Rmw11zUnnSw1VqQdjh714Y5TjptjLwL4GwDzJfJAbwdyeF6JKLK7BLAdDM5JHqwhAt",
  "key9": "RGya6YKtshYWQBTDrKGmiENFVWTZd79DMexmXCfWCfhy41WFA1E9GTBVt9unyrUduU7bPdRKdgjSicJVZsA8jgy",
  "key10": "4su5N2aVoEcsSHa2Hb8nFXkQc1qSUeMz1kAKxkvWWGo8a2h58CgpRDPXVyj7vbJ7qL9V412u7oD4w85VhhakGdNQ",
  "key11": "PiwfYr3kCifHzsB6c9uDiSCpTE7tKomnUWPK3N716scBKqq9HwZVmCWyQsDBoudChgkgZgfdLRAC9YcvBzNqnsJ",
  "key12": "3PG7cBAjvEzYBibbDQ8usQTGdHM1nwPJtVmovpRGpU7XiDUteYWjJeyqcEst8JStMuFpfBALEabJMFYL9tCJzJjM",
  "key13": "iWwh9QzvEx5LsRNKpQn5b6hZHqpTcr9zocnQFCZY6QQtdURPPGopmbvAqEVXVvuUYowqxQBqHpgCVdiByHXvZFE",
  "key14": "6532tso5MSJatZaYU6h62bdR6mxVUvJnP42adjEuHHRBjHH4mQWfmtFfLJt2Snie5SQBhJswhGKsLqkpFMyjwi7v",
  "key15": "5KRWnGtNBfAD9jtdU68MSckd9B9o4XNVAHWF9ySPq8iRZDMXah5iPyyYbVvwmEGXyUNnZ4r2ooTYwGmaxrk6DMxJ",
  "key16": "4yNHfysj5nxhw1HUfwFxvxrJmM3asp5yE3zWFZyrL7rZ6BjV5t9Y44GsS28SFoHoFWCTQNxnSXXfx6qZgXBt7i4V",
  "key17": "4oGKTEt1qGxKMDudUsTa3QH91PsKzw8hmp1nPEpv9MxJBmnssbxXWyd2cNj1MahHRMeWfFHLhwg1DTj5qu1oKbVd",
  "key18": "3Jn6zE3qUrprFUo7BqyRPinaG7GodQVaqsQsBvbzvvkReHZ5nZHJgu8TLiEi2a126ZmHJrrKsye9xEykgzA32x5o",
  "key19": "Fod872eygR6Bg7pyXkwy4trDBhR6HfRiwJW8eMQnmkY1sWnGWVB7EAo9YgWPDNRJtuMdQNxvZ3pPQ2pV6zZ1vmj",
  "key20": "3beCsC4Q9yR48shUdzFW3z12tBNmquc3AaA6B3YZ8H588xaKAgvyAJahR9eaCkw6qivjEHumUQuQX7WBxZ7ofFNs",
  "key21": "5AbLkJDCqfFcVqR2vXxq1rHZdgE7g2U5eUy4GFX3hodruh9tsJBAaq2YYAjcq2M2WaTxWBV1hndWG2mQGD7MniuY",
  "key22": "2LAsi2YM4KaAsq2jBzHrZrMMrQXgtAyDM64wZdttX1V2NN9eNY6UMuGCaqxT6jQm4VVPfqDLLUAHjjnkUUqTWKN",
  "key23": "gJH8DeEer3phWPS7xGnXKgArRxYCpYrF8iW8TKNyLtb7CtyxM1EthmdQu3GM2hmqV5bKLSmjsatNFFyKiEZJyra",
  "key24": "4LNnQmGKX8eHLYukHA2KSTGNtqSNxNSwpF3u2srMjqDAcYPJjXJNSsEAfYTfqCnwzUvmV2t1bD2hYjhmZXg1scG2",
  "key25": "2X1mjELevcKUDBD7BKsH9uF9wQeGththWiBVoopbyrmMAqJ7mC6FFRWwBCUhuQTsvKRgrWdh2ng5jbARSjPhHFX4",
  "key26": "3iPSS8ASReCi4gSkNg6CJjxBg5qFmgbkRHqm6Yy27Rw1Yo52G2zSuw1HhuEU6aac6i58skq8PwbBVfw3aEpgsiES",
  "key27": "5d6Z4FKTxY5i1SYPrvdikudQKdBLay1P1xMkbgREX4y1heVLApurc3wBykQ2RzxaRgAqqKdoP32SrBt7vgSPmK8J",
  "key28": "2iBNsGRQ4WfqDsVhF87rSuG1A5HtS95d2bD6aHpamiw2dJedwJpAY9vW9KnMGr2s1xjy4NcbbqHGY7yzVWupjhtZ",
  "key29": "2FhYSKdpgoGz6QHDdxoGU9FHHKMGjLC8cTyzBe4EFAWonnw9kRXAZMer6c81B5PbYkfenrMRrcNQ5XmfkVkgTCUY",
  "key30": "295kzjH4s9e1xRQHBvyBkrsLcQBt838FgkwxbPHnss18YbS3u5NeAHeUi6E5sgr7HFmNadVQ1htyq8oCA2ZdA613",
  "key31": "5oKUGN7vscnCsgvcZgL53jXG7NRKkkCnTSsaVdatuGqktXr2cUpgKjPwMPizB37Uf1nDBRJ7mDHhWf3MEfrrJeNK",
  "key32": "5LJS78sfFtgiYGKC5XETCurYmQdaMNuhR9u4tz5GUuGYRomBY2dyANHJX4r9eTgodV8kxUitRFkhPnZKMEhus1Vp",
  "key33": "FAg7iB5ocZ5neEpBsqFNCGTbt6xoxP6EsmGfEQA75BeonKieBfCbmXwLHr3MJabg7eB28gdh3ZFq1y6NYyKuDGm",
  "key34": "3HdkpEtDELoDy9jwLypep5xpvsmK5nQYkWbyX3gtGm2yxNFqrGePj1eyXhTGDi9STr6d9QFGQYixbyTdHEbwCfwk",
  "key35": "4GWyFL2HXsjduXtxycMJ2xioUyDqrzYvuQstcHqwXv4CfmxnkiPPhx3YrFmBpD1ns6L1Cw1pA7rZcpSxcgsTQGsk",
  "key36": "53hUNqRdof2mZTDnZii63E7q6eSZmUoPnZ8YAth3w5CtnMd3yAT8B2aaG3SpHPWZuDYf4ziBrqqH47EZTVNMDCeG",
  "key37": "5RHnehExzLpBiy8DxcEpY7psepkYsSed9DvAJmcFkYcxkjvKBRiwbDWbZ77dxydgAYE6nhM4fmRSAbfjhyrDRuXg",
  "key38": "2jDD7Z1jVjjxkaGnUjKUn3zC2akxCzoAokh3revkQYEVtULqdvMT4vf2GaMxFYVChqZ3tErzz6h25aXDegBo9cXW",
  "key39": "4viWyQGSWvdPeGpDTvvubn25BPDfRwAdzxWuSyg51Mox2o3TnFavU7KZaa1xiafYdQnm4trX3dMwrbQYoHyJNzpE",
  "key40": "5osnWnJy7eirzRQ8E3joqwZAdwpGUCEqhpsAHN6Ac9zXcYTJNuQZq9qeRn2gYQQW3UkpxxDwDfsMKAUqDRkU8wPt",
  "key41": "iJbsDWPwzNSRBQ8RiVTn5J4aRwV3XqRvvX4UmaXBMLJGf1FaLf3anfQkdEnFDB4d1wFMfQojRZvaDtorHMgYWqZ",
  "key42": "4ervuFPMydNRsYxPg4CjVETXs25WcRGi66sTh6t1xB8NyXhqya7j54gYHxToFPkQEEvvo9DhoUzLHVuQ98ckSAfN",
  "key43": "5xh6Qxo2wQ4PbMt74ti5KywhLgQhBfXyBYzgytnK1rpSMgThDQtTGvvP3qm6L6jgpXfioppGE7xTWyZiGFsRz69r",
  "key44": "3tGVxmgGPMt7uu1M4DfsaxX4CgJCnWuxrXQxnTaggoV5aH2m2hyZiQqsfNmjvn4hkNrWwbZesM8t3adbxT86V96E",
  "key45": "5FvKpoifcUHK3yxcnBCNyLmdaheC4aCHKU2m341qcTbcmik98Y97rdZs6rgymxuJpeps9HPRE19USuWRE2yo16sy",
  "key46": "4ARKW6N6mTEWCHrnBpU1XsG77b4MYZVZC3JdKHKjKq3dQyLhtdVEwojQHj7HbsjdR4opoYQS5N524UhgbHqd9cuZ",
  "key47": "2r5HJ3WWhmuQcbCkfhVxACUL9tffD8BonryPm6uWyWHzCBbVDWNSMmnhkWaeLYw1ahFQq6hKDzpvsDVP7wTQ7Zbi"
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
