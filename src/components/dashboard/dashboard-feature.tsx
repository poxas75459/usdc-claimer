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
    "2XdVtPics3gQwjXNvS6jGLBDkPYC11xXfm1254T792SKAp5gc2QN3CGmd2BMxnnGrv1xBbQCmiUAxqWbUWbQM9hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJRxSPoaaF9PBXERnof37zStEruwn99cM17oe7H1aExq6KSx5oENe83j7e9Uri4fzQXTNUwmLkRFG1cNQM9dBpx",
  "key1": "2wtsgjAtojMNtm8u5Lf4uDMQJNNk8rzcvaQjNANXiW8JZAwr3GS5sEnfTHUoRQgxCWdYy65KDpu2T2VHYXHW8w7p",
  "key2": "3TqqhnyqqEkJFvfeSKKuXonBuTxhYUHuDFHeVx5drhuGTr4ShJZE7qdcBCQBzj2oPh9GMpjD7JbRo7rPA6rQA5oZ",
  "key3": "55sYq6fNAonkSiy62Cg7S1Nj7eXDHNuaK2mW2ZYmtBCoqivDcmzwJwx74UxGdatVSmQiibLXyWUKjn3MxV6S4krF",
  "key4": "5Y9tmixLCTqH5wCkxh2DJiHNd4fhj1S3ApMHLaf2baPXJaEfwdbnFXQA4REfS86eDLvM9g51iD5opmWRqMRayjcv",
  "key5": "2Rt2KSVa5DXeD5P8DKvxuEQfLzLyJ1sy9CBfA8iP8BtB3cWGxMeFkPzyHd1WtAT84RAYDX6Xy3X2xavP9dCNE6qE",
  "key6": "JGuRwov3vQtMk9L7XbmUZg5JEQbqTZbSv65LzLNFkP5WbNMTSr4aVhe9c2tzqr6rYnEPrN2FNPmseFuBDpGhauz",
  "key7": "54k6AdKt1bs3B27W4vD9DpY7qTJDi1fW4osvc1UHW2VHTur4JuwK7cvPCnwYeSWCzAceGhAYfHvA9bXh9xPfKC48",
  "key8": "5aE7HjPQ28cPzH3nedUM44Mw7JfYhdQuS184d8ySdvKaDpCbkm2vpBJZBVtTBduUmwDfcEHGToUYmoqiTHz8JCTf",
  "key9": "gZPssVS2wzKSirxC8cU2CazUAkwb5zvsGdgnqqWZGBejKHN6xhy4xkLL1WuUXMuuuqbDrBb9Ds69TcCVpHLamjY",
  "key10": "3XFvd8FfNu4HaEQm3372RWsLMB8RCaHqSCsaxmN4kWAQxuQgZPWwjqB73gtAMFbj1CcS6yZB6yCUrVEMx1SEdxNz",
  "key11": "ujftDKfaLzoq9TFZC1CBiR9pmeor32Uppf7MMWGfkWzg6cmZvL96YXRW6SWknciCh3ZS3LZUK5RMeCDT4tKvYjT",
  "key12": "wzzximuzM5rtQppP3Axjx8UzZQbsLzpAAFguGy5Pi3WvMvMcLtaRjRGQc7SWCoVvfRnybss2GfRRVacjGxTz2qo",
  "key13": "2ck49UKHvoq3ibFNY7zwcadFc851aRhwavSE7HPvPtmNJ48RXcdqj1xAhbWpGutxyHpPxyexXkr137kSRA5TErD4",
  "key14": "4xGVowW3rwYBFBFTTKBTKTZJPMXuAD9JuX57K2CQmGMFnSHHiw9Dzg9hh28nungjXj7etgLQxSGJpW2MsdFTWoZc",
  "key15": "4x1NASsTqcosvHfw8GthEPcjS8Ht7XoPiyvpL6BtrNXS5itvE39NDm6s2Gvfeda3gLAqMzNqcebDuPYNgANHjyQS",
  "key16": "3hxZTw8bTJay3nCLQ2CXQGgBJh3aG8q2GwbMZnYq9RNJQUjxaF261rthdAMrUhhDXFtqvK4koNThs6AGm9TaAj88",
  "key17": "3xc2xULntSzRQ7uEpQ9LEniDBmMhsxWG565U9rL64CbY3VGRckDZqaPK2C5x75LqGYY8L8JMrVZFnTXDZVbHSJBi",
  "key18": "QASRBo5Uui5Lg4GfX5wAs79RZiVA8h1HCtrBWiAj1gXND91p5xcHDeZEwsE5QCqPVkyaKsP1q8Hv9pcWsZM47MM",
  "key19": "9n4xLQNyW1XhcPGYma85RDqcnL1NHNutqJSaxJWuBhvFpArgNsuExgLBVhcSyhtoaVzaLHeRH6SAuqyKGKh754i",
  "key20": "61sWTWGDX3ZPcNjjhN7HcK3Q9fqkpjUt5zshwgYRwcNXK8wmHVipVL5PUVooueuXLf9uhW6v5rFiqSWwidPDxRUz",
  "key21": "5jpzT1RUuFEFuWmF8fKX6i4uaGsiyWg2R2JRWJsEv2FpLWtbswwE3VD7zJm1Pe2TNmeSof12V1Ykqpq4UQQ4WkHR",
  "key22": "448xodrVGLb2sAUNVg1HTpqrsd5EYk8eKhL2HTQZr6psqFun9faoj5VFCeLZEFkfqxmBShT7m9y5QXdU8LGuH3DV",
  "key23": "51vGYtuv9Qf8bD2K13QmDBCYVxCbMU5PdTexsDJtciFjyLvXxsw1FMEkXekkU55zc51oji1eJjfDKqEKXAHnXfqL",
  "key24": "5pZB1LmWFT6PtRXyU3pmVu6HaXaFB17ecwJfyG5rpLeUBtbdCmziTigYrrdef4VJJ2VWKamQTY64H4CHmuMntHMa",
  "key25": "JXmgnqb4MZ5Q6CGySMBaJxaQzEV5smo6Mqa5mzEAwuBZjGCZTY1xCgeQ5xzuq1itJKVXCXEQUZmwQ6Uf6PeB3th",
  "key26": "2GgK8Pi3W5CgASKL4z63zXkAbNLcmqEeMU4UKLgwUKDWX9x4wiwXAH4iFfZpBaYSrBS4wVZaMqadX2p7hFV7QNkr",
  "key27": "2yocWKGVsgn81UdFJQ8zQL8AAKnKYvDJEdtZG8xDVYFd9Z28Ra7jAq7XrNsS8od7qSMCMQ8cFkJvgY24jPMqBhpG",
  "key28": "2iesCVNH1cxQwRSd8YZezq8aAZbZmwXsQviHooVBHLodS2vybD9kxgir1f79ggANb9dquuvMzfacsqBYxTVUCDES"
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
