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
    "4n74MqnxXvdMwnDBVFETNrVVJvdJR7ghP3J2K73LHVYc7LSiNQxXx6mEk1U6bCSRHyXyTsEptQUw7kZRetsJAYx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ehSe9uzZwx6cwCvvoJNzcjZgzougPgCVkCM1Ntsw5vPkCWA4oM9HWYGyEapyERkjCdiycP2ztPdyhzScuY95ULz",
  "key1": "3JmpW8hRFCabMBhVoVYm6sG4jDheTW6XdDJ2dex73md6MkGbL8fsF3y11C7Uve84gDYKN4uqyhMZGemj8n1WtdRV",
  "key2": "4Gn3PwKy2QUQ28y7ZQApKGfjNQwdZybQmEM1jyD48E3XnJsyqPqEWYX9xvJB8tVd5y5uN32KTxBfoc81DRuHRbXb",
  "key3": "2erbQxgzZAVpAoaC6Ve1zjzcw5VemwXNyvpLWejKQWG13G1fFxp7GAx33pXbjW69ZwTzW4zYf1uhmQMB7aoAbFYJ",
  "key4": "48wD7Y9wxfwsmfXZ2ocUo1Mp7sM1Tw9NntTYzb5aRnVQV5eJJmhaEknxFwWazzk2aV4QAhpmfZszYY4h2ac7wPxc",
  "key5": "5K4ATokBwBy3hh4pBvdVszweAL6i7siudok2C4pKJ3HW2MPJy2snZm5G5sTsWCpy2Ri9neB7oQyj4UeJsPwS8H9g",
  "key6": "xRxvySDGER1ffNTaQA7HBJ7J5RTxvgo2wonMfM49sRuE2Hj6s4436y9ysZXrWrxooA3EPzQLs2WcUWoEYWryKf1",
  "key7": "2aSRRMqpNihuXRHHa5DUBZD8rmxZV9PaF36UbMHiBZnZDtHjLHASrcjCbLT6KdLRq5rMJyeFMwJCxLb4qBY5U8U4",
  "key8": "5aNuiDFHzCW5GLr75FvK7P12RQ6Vg1JocrXSUYvZyb6MExNVz9vfSBPDR9HotfY3rK3hSjQ1Ns7dmm9RWNSFW95L",
  "key9": "3EdMNfbYr6eowRgvEnHLZCdGKV9Ffsncn9s8qB2gHr2z5ABRwwvZ13EhKkSiSx8aksr1JVbLPFGeusTwgvfjRMnM",
  "key10": "34LSopomCLBHizxkdtUpvnAneH2XAL6BRPqtnhSjHTn35PVUJaggoHtgHS6xdCCvEay3W5HzvtWyBEvEQjvrWqnT",
  "key11": "nBtgA9Dx25EHhPnAgvtdjJ7gwur2WHAdAd9795baXc6VnjHyjrPKzGc6kNEviM82oT89AyEooXJSZDrGoVvCLE2",
  "key12": "2jx5Ru8gf9tCQEGZxhniwxisn5F2Ai18iJ4wso6U1eXEaQbnxwg7r11ZUKTAieY5Ho7e4BbhXQ6Lv17PKZnbWJif",
  "key13": "5AGSQdfucdGPxcBHRmtpAerfQDJDLfemSPYzB1a4PgPh2hUiW28hXTDK6fD12TqVrpddbUjedJvhV63s84ymQCTz",
  "key14": "3FqV22yAeTNp4XohXSJyWMb1F715AMgADPWHqWimcLoPWty1cEEVUtThf1FYN757yZX7EuwSY261HAkQvpRZFkTE",
  "key15": "svP5BAWDmigk4ADQgmQE5wzdvWmnVopfYqgYX4DkJAYXhJzuPC1jM6w5jg4yTMiLYPEpd9Y6grTbSqqkQww878g",
  "key16": "45jms18DXo9JpzwRXNEKT9w3H7fX1CVxjz9wBoSS2ySi4kGrjJqWJuCTH8jmJ7aJjXyFpz9ZZrw2aRh8Ppq1n1kH",
  "key17": "51VEDASHMRuX5a55esV89nHf6WdnskKiJA3J7ZrnPefRtB37THaD6BYeZaUH7NYCWBEs2buEtrZ5UWqPnXnWbUzp",
  "key18": "HSdfF3cAszBKUnDZh96tTgKVRcsqP6DZWVmqaZ2RGN3ywaehLtB24Npe2sWeEiM2CtRSAiGaYui1VZQ4Yx8oNvC",
  "key19": "5yzW4WXa3SY9Tj28F1um9G1JXwCqMSR583iNy56L98xcAVHq3b3LBkU13M9KyD9vi3BvHnQD6FxiQynwrywRUHfY",
  "key20": "4sBXZdXVScc7scERv6kMawpCKsc2LRC9Hw4B58ZhPfBmmNgGcqHFAp1Y1FLjcec4jGzAFyenSzTtRPKWw9gZ3TxQ",
  "key21": "3UmozECdHrdYciSHHBUWnrig17CrbPFocwdbGLxU4NabRP8nbiTUTdhyEYuptaiZVesR7siKFF7yjbXgfkFUsPq",
  "key22": "3G8xaN6oWV515TCo7y4gCWRryBDztGUeyeYL7XLMYg9VzQmTgHwuoNhHZf8dJd5MNCsmTy4BH9iEBKiAvHfkryL",
  "key23": "42SCLqq18Y97Qmd3gVboaBQCxPD9E2eSeUZTMMbZiZ9CReY7cvcMSqsLmnGvyECFW5YDpfJMBo84xQEbVvE4p3d7",
  "key24": "3MZFTpdiUFpXKdoYjNPmmKPBDyidC9hzmycs7s2Hvn8kACz9Ln6R3ecsn5zPXnaonix9NjwWiGNMpW9uvo1kYbtn",
  "key25": "2LFrLS5xMVMsJKUs5jwiZEGAxfKJ3C5eHC3pBGPMWiAgu2exHPWXt5CLPUBgD23Y91W1eHCe8tAxir7ovUwC1kQT",
  "key26": "2bQ9hf6QnDpWVy6zuLaDBDmVVJM76sGLsoS6wo3gX9Bu1zr9mYxzutmb68ybH4LSw5mqNnF2TuZLScqvASTwoKi9",
  "key27": "2QDZL5FMR4kn9JUbS28S5uN7tCGagMr6SVnRKk9xaiMMkyRfg8dUpWBNnx8xP2D5RV5tKWvDTMykYw4AKanTXehm",
  "key28": "3c4aNsKMZB9ATHAyAWS2XAxx64dXFMZ4FwWyQiXrr59ZAeQGkedLR6KvbMKwZMBcV4AV6Y5htd45s8WYm1MjBuuU",
  "key29": "4zNzy9ihncQ5aRoGbU3DFuqfuYaif1Ej2cpo4W9GeEmbRmC68ecx9kHGsXvCywU7UYQBEYfbz9cyqVuhrQznj7ap",
  "key30": "5bxu41hRjBk8DDL5FUXkpRRcynSbErN79ZiwGDWhKtWTozsdAWdBbfTn2RE1Y4v23MBpcEumH6y8wsXRqyc4FN4z",
  "key31": "3RaebtgdGsFCHZzhhQ2s8eqMUSp1Jn6DR39SqFXPqZKV4XkcARvyMdbbih8GoaioJvq7DKbM6vZauS2pA24SZKMs",
  "key32": "5hKou8QRiG91QMEeqi1GRco8pLXX2avcG7coKbb6WYUMd4cCBaMSSwYKu4AxffPGxoJPscbuow76X4DrtfF7mN2Y",
  "key33": "5g5S83RK336FzpC9fNRjVWEoztw82tcHNmV7WjEck6nSxSZsQyJfHvSgxLEkrTSYKD1qDdThCkvnyYraE9DqXe6D",
  "key34": "3DPJLsZCtkTNWtkf5ciaNgMD8ckZzZdwkEGjPXgrLxp17c1eR5kgHrGzuBPTSkWyvtzsfcj4CU7gwA2L6AD9dEWR",
  "key35": "dUqyvc7zFgWTG9uGguqbh4WgzCuaqL2LXFGWYEAnUfAsW2Y3Wc95fXVUA5BGaZKYKY2qoyuVAD95FUFknLDQnxH"
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
