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
    "34Nwz86xCzVBuiE2BfcZPE7J5Rh6xpwm9WGKZUU5ZR1thHqpCkqxp8wXqEJtfkxSJ865BmsHJLfFAnT9Dk6gv8dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1eU5LMthSZBn73G7gXehcHtC7t4cHhuhPW92WqVk6q43egKrrXyPNQngx7UpJ2N5TeZyyhg2ENxvFLfGcrsZsA",
  "key1": "2vfVLcDfHgMMqdnWfUMfAFeocofWEGBw2Emv1F9UUULviNjapeNET3sz4mdV9MdCobLdu3egK4r98AChDQAVfV2Y",
  "key2": "3TYNMH9MQkSJk8zqnUUJmsSo3Z7537aRUJrLRhJenrZZSC7DEmJbGYM7jMTMyNXgPgAnhCC99avT69hqRLF33HWa",
  "key3": "5BehL3vrjjR518NjGcyBby9TEUa4Zg9oSumrXNEbTsGSomQvMkuAc9BY7YNa3xV91NEDxJYRwcz3uonU8bEAAuqx",
  "key4": "Ycsy4cMVQiJYXJD9t5jpZ1q4mWtDhUqLoJrS5QzbkTAAXU4Zt4dHYdkuQHcrrQqqpKfqSqwopFq9wfay9P1b7xm",
  "key5": "3kjbT6mVkn5TKBw3ES4fxDAcqt9qwzgr71kUPfUUcWgjpPojRoZJbPLXdJfUGyqiY677AQwpQhvruPtUPoEsnMbP",
  "key6": "4L3sDHQG4kmM9TV8P7Y1PBBc8XLCXzGJKRphMpywqSRna3NPYbwG5m3z8Rfr3A9o5FjKwPMUHb6MZgH8S9Ljw17M",
  "key7": "4ACKmWFGaEK3arwuNVyMgkZx2RTkxBpvWks7rkKWZ8RW4ZgRbbnBeCRnurBhFHTzzPFYJ4i41SRhgpkFW9aTCwVy",
  "key8": "4G6z213rkNvdrohszjnUUqTcXcv8P2jzBrhEqsGnMXwud8ArJpDZqRtdgRNDiLsUAbAd4MvAFdxwZ1YxP8Pqm79",
  "key9": "2UDn4VepDJ63E7F767AikryE31TDimRhaGhLfiJ58HXNfMTLYvJdqhBWmzybF7GrMtxbJYtywdXJN8V7KsadbxqM",
  "key10": "228TAFUN74qGVvHzzBFfzMHXmWCahafLytvfXAJFXJvDksnUWTxVkvzyRis68B3Hi4v7teQyFETEtiH4y3cPPJ9e",
  "key11": "3HVwtpaNbXswGotprZLrK6FNd8Ywqv1B7cvT8ft5pkHjvouwjLST1cvJN9TdX3hSZTDtT8MwiiUEVLwj1kv2o67q",
  "key12": "33Dco1LsQfgt5xJ4D8pLaTb4jSXgueQNAi6PZL6HVidc7HiAxobGLpCqQ32u4krNuEVJahw7RVAT9RWrRJ7rg6eV",
  "key13": "3zo4XtZrs4w5yKC9jBSq5fSEpQZnp2HwjiJS2xoSHLre8WxgXC4SuPLS3qeqkmFGzXubWmFxdHmkKXY484Qpjxf5",
  "key14": "4DWtf3mD8b9pfaVyHFtY9rHpbUM8bRNvmk7svQb5QMnH7rcP5DLGP3CTKhJRQKcnhQvpvgbCZu1mPZxQt4yqGYA7",
  "key15": "3hhswEkj3w6myFgXwbqSa8Boh5bAZ7qH4QvwKnmt8S7pRMLV5e5MmdaAjnQHLbvNUyUQGvyAeYT6SUpYrQF3hsTy",
  "key16": "4K5T3swhwLCsuzLfRz8E9q2STYZdfonP8HV8XbRSfvBwnK17EjnamfJmFTFHvkNkU22iiH5izuDHJFU5CMvnB5Aj",
  "key17": "5CFoFmznWQqitupLWhwcECoByJAvQ4toezLENDzFbWhFWo75gtP34ENLZSunyxHiK6Uy7dZ8x8zsCH8mTpjm2vwQ",
  "key18": "4wUoijv4ZovWjbcpngpo63K1UP5sAGh3xUWj3WSA68f5G8QvpdLbk9p6NqqJpDrSBfaaQEjzZWwmPE8HTE3HzF82",
  "key19": "4qmgxe1Mnbq79jjnaAhX15XhfWDUcY2pZVTe73vFS34a49ftJcwKMZDi69o4RF9HVwNYiRcHSZ16abDAAPixvVtH",
  "key20": "fk8vTcNCfbS4L8jkryX2tcF6i5qPeP4C5Tr4FEDHQV4EKRybgszVGWz88dKLS5Qr9AndrT7c7toT5aKmgBN9xXk",
  "key21": "3M88WnvuXr2ACASjUFLcieCZD8GARhZ8VqmWbsPttL1hxZKX4fUL5bBiTMJJkEyNBa5x9F1jtNndL9nE9L3LAPXw",
  "key22": "4VyJVKQwkjJV6KsuGtRKfWhHKiHg1kfv1bWhh7B9bx7G6PTKSkuJuwtJoue2ELwTFYB4ShQmtLfvzD9sx2p6CD5C",
  "key23": "aW8oaEbyE2PS49EmTj78FXdn2srQWSmaRqYbai3Qxa1GgbkYN6UqsAtpB9ZB1fNzU9m6j3XNkeBXcesMEHhGq6A",
  "key24": "5h4DZ7CqWQxTN7dERHqKe7e345zrAH5RJZC8QMo9BvNZttcrdZUkmKZ1CgCUw6kAzBhrjKpMxu5J4cNcDzXndz6M",
  "key25": "26SzzeWu5Q9E7yEiFeL3qbLxTCFfFJ6cVksPbbpSMVdr4ArAYr4iMRuZXAJzd2baMfAAX2dZjhosSZeEF9uJNjEK",
  "key26": "4pF3Asis8viqTFT9m5wTaA2BsvHaReu1v9TTbTMoP9tEQTHiEAWChSExjKa6jZhhK7TRrfev4nsLXXr6fSwE7HCp",
  "key27": "2Pyhq5s2w3TJMj5ppikk1TVp48CXgCPnuSaj2vJS3fwKmEWfrbZSaKZoP5X8yimJobwNnb9TZLLPXxx1fx8YxruE",
  "key28": "YLnTuRNu1dS3b8awPFiaKExYA1pNjESf5QuDdgxXNVo52zWvFStaPv1FBywPgw7BFvJ5KKoJmEeFR9XKtwHGESv",
  "key29": "3GsMucZDH3xZswEsXBtQEsfMTLmcbme9EEkCFAzpjJ8i4mH63pSaF136FTCZQCj2FWNVTudZDugTKfLsiuh5cunJ",
  "key30": "5RTcQbXmSnvJaGrdktJE8ZEfH9FUDWDb5rJRvDyjEopocLDVParBZHqVgCXBwYxEXk8D9np64aeJyVDQGf2NFbcK",
  "key31": "65jqUo51T2RRT48iBwd5M1WrMQTXRup3HpdAHBnAFT4ahkwsSzmGr1cyPvNuDZCBg4WixRE9N7y6f1xmGz6QPSSX",
  "key32": "252f7aTCd3c4zB6fo5ZdEzqJNS9MZiKdUVtgQZFpExr4gizh4LgcAnWo3szMv194qBhKvV9LbfrpZcp9akf6bQFz",
  "key33": "3JUTmUAq4ZeKeGeCw8TEhpdurNm4pqqmGubxuqPA8TTznn3z41gmMuvXpQAGJEVfsmoAb7bbjUeAfsDEPu7Sbce",
  "key34": "3UvAPgCY5iAC35eSimNi6jR72AC1UfKLapLBwSNBsqaBGvKodkWsHPiaQC7M8UpnSCyQZLAv6FLNDeCsY9skhXo",
  "key35": "3TCuatGCGLpwhS7hYTdJpxNoAA1y91LyeeQ1qBhZAoccdu3mddno1SJvcN4zCMkeAUEhaZMKG95XpMycud3Yaqnf",
  "key36": "5GM9GJsJzijiJGke4piSV6qBWrfM6m6e58rNAKgCVPct4oH8D7CLXbtQP9tE4RUL1tHzq8pctYPkjdWEdHMosDcf",
  "key37": "4p9tNZx23Um3pkwm8MBB61ppSJewh7vG6rmwM3dRbz8jf1Ydk8Nh4jUtUgdQF8hdLWuXKJeQqcwUuHfF7kUeGLX6",
  "key38": "3gZNdKQJ1hBLLrgE7gv65opUo6VGvrHDJ6C8QGPacoErEciXUk2y4kU1c3yjMdTkjZXEWgLwpVtdGqKBRjCMewxL",
  "key39": "L8jnLP4n6qBWAaFuJC4QFnbjoKddR2WQ2AB4gb5BFv7vmbKdpXbzYPKXBDjD59jVcNZTnh2Mr8pyuamncno4YRW",
  "key40": "p444cNhCrjQd26kBomdYmzTkYkYMMG2BGs3BLQX9hE3V9VndQRPuhXoCV1JYyjosRWJQYoUA4KdAK6zwZ4qChCW",
  "key41": "3XJqb2kATJhPVFh26P5VvX4fQS8hQwJptzsKwTrmF82N8w8ZQQkrUsBYQmrkZA2HHoHUKDgUEKL2mZa9smCnjm78"
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
