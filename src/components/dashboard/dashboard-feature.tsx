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
    "2DE68QHvtE6nopozpGw7hU8Y24sCXkMJnARz32XfphUpY2yffvWw28UMsaKV9eiqeQ2R7ozgri6gWmQmArqfLc3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xqtT7L1BJv9SzLf3yvZ3ecNy5dfFYucQG332fQbbibxpGL5cN7EwFZkfqvc2XmDJV3yeZUCrtQAX8oH12UkJVz",
  "key1": "PZAZ4tjusLgYLk5ieJsGZ84Jr7Q8BMmVZWcuaey9Vuj4wFCw1jvXCvjdhtntyfsaFdBwV36AM2N4YNvEYjp2ctr",
  "key2": "ZKbmUq8EGkC6QnpRdgHtdcQ4Q3eS7MrgoLm61pP9TDYNEU28yc7LuFdidouTqfbnimYU25ddYhfJzJuzGYVDvwS",
  "key3": "4quEj3qJFw2jQki3qfUFyBp6hnaeaqeH2cVhFKtNeAh1P8gv9z6MfH62Ecfd7Qrye8iLSePpXCRCpdRgwRUFiuTR",
  "key4": "4GKr95hjFBV76JNwiowRa56hCGcXXk2ohE4ZJFnVwo1D2wu7D1k6KurUaKaWdwb624LSmdGtkyeZMPLyZqjgN4jA",
  "key5": "5ZZBVvfuLDLtdNoGQKrqWc4E5Q2fgZXvq6NmPgLpE3hx3vuJ8PJxqtx9P69659fuBKbmA2EDfjTZcRGvke8hXvGM",
  "key6": "4TZYWeXbdv7eNHNLLd7f3q8taBB7m2kuciN1ZZ8MJEBJUgrVQ7WENEqr5FUxTSBFBnpUeVJA8upeGkBdFNkAjnMs",
  "key7": "4e5ADFMrWo9iTHq96WTuZUpfvBnrnRiwQEw6MprKtJyxnKsY4vGDwBoZLBwuxzPk6HFAP8nADBrr6U8DPBkWJ2RL",
  "key8": "Bk7wPEBBgyP6hUhg3pHH44J8EjoDVBBdcBHK1QQhQPS1K2KuFaa2Rs5azZx6DuwQkrHxfFMJWrAYk7ZLfvXbrxN",
  "key9": "613ifTrW9iYwrdcivrNk3oYPrjYj2ruBKubHcEo6H5SCXCfKi6KW7domBSk9d5frBH2cLnDx5ksutJrEnMFNsVaP",
  "key10": "QDpSyUikxx31hT3CkA6iN8a9CN7DdKjuYhPVUCAU6snrhWRSXKF9cB3FMC2no4WJXcEDHQvQJsujnUPpD5PHcgu",
  "key11": "2guneENKLoDLmkwywy2ZeHNAy6H2ZAmdJ2kne7ets1yDQDWmU4BndjLXrWNvGsrjAGVHVEj8p7WpJkR9kARvHHsD",
  "key12": "2pGCRgHFjGY9bogthXC4kUZh6HHNGwS5fRSG2FgVCy48TxcnE4Nz5obvM2fCmh5mUm4FqAEtG14RLcm4QbnTSHwP",
  "key13": "52195wkPt46fr8L26RyiLBgQjidNcAbb8vT3ZEoQTyTJUZeMESoFWWmVEQHqpoB1rmgz9pSt4J8BnQCumdtL1Qtu",
  "key14": "X9KAhGvKQbv28SohTVxqXsPLHvyWZmgXyex74MLmGxNz6EY2KzG2KqiKzb6gyB6Z7vstdBRmosiaSEbY7HwDXBr",
  "key15": "nptAVPV4y5srov4DePhw5ui3p6ZjXrDRUGfKqpr1kERwvTTox5VZQ8ETHbqV6RM3NMVrYRjkRNkume1qMssxC5n",
  "key16": "PnNrzxumVSpMEJeuSCN4MMGQBAuuWVMqFV3Stxg1y7xxREQkcJQLgroUTEGNRaiQxwKHsQEKmdHYJoxmtLSnYMe",
  "key17": "46uUaXhD2aGfGNX1SgnPYAKxSFuaKJLH3paF3yaQMPxbj68U7eMXUxpt4fQ9te4h7Bc6G55KG88DC5LSVn9TZ2sQ",
  "key18": "5nxKgc9AiNhaFLdKayQioYPcCrFp2eTm7tJ95w7EXgs5f8ijnq6P2kqhUjr3Fmeg6egGyEzzP11hwvDTBbtjoV6i",
  "key19": "35nRtAx12SKdRrQYxEeoKJH35Z5815aDsRkTDwCE4GRbT2heoBXnyfQrHVksE8EYoDrnq97Mi7VZzagep5BkieqS",
  "key20": "6kwn74pqHRWuZUUzEUZsZ1CZZbFyrioVnDQbwaAdxRiCTA41ZvPAcWS8oKdUNcdmWmmbi4ZsK1XEgXiFxmCUK6u",
  "key21": "2phq2Mv29zPDroX5CoWbsXnUuMZAAgpWjUcZSUEZbUrLzFLetVWC4Yfvb1tX65yZtSaew62ZqYbKzK6be7tztyVg",
  "key22": "5x6WTSqGCd3U7ifs7RrVaquKfM3iPNyyhZhzvh3dc51n2C9qJzneEsmFMtB4ukGAJkm4hxqBVHARjAibEdADRbFn",
  "key23": "9YF2PuD7ti7GfG8f4yrGjrv32bBt29CpYByDw4fhLTW5bej56Lbxoox8N5jL3J58gWbC4VCtWe9KCjYzWJvo3AH",
  "key24": "4cQS2cMCQ5gpSCNd5EJ153EvdiqzPmsNofUTtHWYdjDp7k9pTFgBiMvXqafYoKr7oyBWhfKgirWyxYqAXdyPkhuf",
  "key25": "24nzjTgSdJyPLBttt52r859z9zh8cRg121BAy6MMBEL9iJisK4uj1H51VVrNnKzswWsn7MMEC7UkrqkihFRBtM5Q",
  "key26": "4RUDSihvZPkVSC4AjnJTaMtWoPLNbn1jLTP7BvQCvE2Y7cshHiQWq5hoHZkM6HNW7yuLcYGEYWvHHqHvatYkZNFE",
  "key27": "4NBm28ReoKmtPsnHSC7RqqcFyabzrSTYY9FWvfcrDSJ9mbYXQw8Cg7LwzgzfEGhu4a5L89g981yFyscnHLokfC8A"
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
