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
    "47SziUcgPrEZVSdRzamR6r2CdjQjSzSxn3Cc3VYMTwyLbAvscDeDxXH4TJbcMSvsHaN8MEKCX9NjCBKk45mgVTc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XKdumNvRWXYtcdcS48fCe5TBUpBFW8ZncNAn2VWEUWunvntJ72rn4xbDeKJbuNRduFLptqb8UWBoGtV11PxZjQ8",
  "key1": "5r4bKFtqaZfxCsmeU8me8T979Xmbg34TZidqW9wnwwYmXupESvUsL8Jkh5NXMdeYpRDf6zS7Sufpa7nYCxC4eNQm",
  "key2": "4k1fVr3QWi4Xagz5DbSyEU8sN1bQnakmdToWevdF5fQEVMSKVeC8cPYJyTeX6ab59cVZsBWF7zrtpahS4Ciqe2Rw",
  "key3": "4aTjW5rujm2NvLpJ3kVoNd5vDo4G7WSBsNkWFpf8CeDG7nLifKwNNhdpishnGYC8hxT3ZK4mRH4Xma6vxoivqdRN",
  "key4": "2nCicySco6x4NrHBkDYpjK44vLvaSgBzC4vAXGtiPLeNqiDLmqjfbSa2x4vvph27cT6CNYAbTg5HRsjmFU4cvmCh",
  "key5": "2WcnrMhGKC3N2nHh8wc6Q2FxUXuoWSJdggB5YArpqXfJYcEkM8zWjGzmt8SBDixqpeGEV76oKHAKJAfS5DmsmMKJ",
  "key6": "ajyzgnsFNTyeZ24Bqx4mWZVwqQquX4gciVneM6JZhYf91pQHWqYkEmVydGgJKHgKBNWCPvpF372KzNwvBqeAm1W",
  "key7": "2E2e221H6igisRah6Qm8hw8TC3CifSwqDX8qXGuiQtAArV87LPDxKQoxUGf9pv54g6nbvUt1QkukZ4ctke9gua6r",
  "key8": "5CAneTLRR1qwdBNsWQei3cUZXv9tg7sPWrJoBWJWz1DuGC9EKMmJKUcoNsr7Yc7BXeTDfgbKHy1sQY9WuN3YX8XV",
  "key9": "58EZBeW5fRVUai8jhfiHjFSEK2CV1uW93EYogiFYhDncefS9kjv2qRPHHvahAJbyCBX6qrnx5teJ1ecy9nxSef5s",
  "key10": "67oZYPpA3pDRFscVDxSWQVjSGHvbRo6NG2v8wtkA5DUVVzB3LKfhhmJbvtdPzpF3m6vGM3KZFtDrFYxczoVVcY7g",
  "key11": "dj3QMJ1nXXzn7e24Qn8QE2aVJ7kjSEhKhheeQNDzuCzzfkSN8urcHQF9qh6BrKv7QQnSD5pcFm2doyGn9hFygPL",
  "key12": "3jYbk9di9XzHHgUY9Wook1jhFuBwM3NR98u946TZrwsUbCQDxxwGxAoWWuenJ53XXuxtGrHw1etGie47FutouHF8",
  "key13": "2HtUUoZBvYgVY5CzjQUaYyExqoVAcUrMbENqGq6HDXwVmbPzKSt3MYHgowvz6R9RGFMsXYDb8hApmKV8FRuRzVv",
  "key14": "h3UpCVCcfESKnBbURMxpCZJw4QmSXKef3LLcp9vBh8PwUt4ndt5xn1sxWa2himDM1GCRSsVgFTW7oqDPtayYTwo",
  "key15": "YecVecNn4YRpDmP9gDaygrY1dxkdxW5ZGosEWtogcXpJR9ZFmAGmHRPiQbNuFc1qZuuJk8ciaaPRhiJtMhknhQ9",
  "key16": "4KiA5rHjSGVuK4jrLzXRaQoHZgsEQ28pKTC4PGSdVRTHKojLNdPk9R5LzNC3TD16u5McHDp26sNMuZXKxSPJ78Qw",
  "key17": "2VpQe19fWhfiTrjANCCqz32hWuJP3PtML6oUsBQJxC7qmSSwiNTMBQafnXuBQPezE39si1BiqfLqs15X3tCPBx1w",
  "key18": "2Xv1e8AQit9bp7rk8YmbLXFbk3RTGeUXXCm4AMCFcZPHKUk8LDRGaSMX8an4qMJLsCpqfrF6UrJ42MHxQ6Q85md2",
  "key19": "58xnVihGjzue9JSevAbmiovLEEPN22S6qcmWbKgwj3qH9JbseViihEsCGvNFB7NXfQVuu3LPmWt1Q92NWxYmTF18",
  "key20": "5mJn62bpsBHjqxhAukcd7diVuz8AXFERGRAYtRq9xszVYn23yFx9BZ6FhjC4HoC2LwwHT2fx3n8MoG672CC8Nn1a",
  "key21": "3NhrcBTuGuG3xCDYAA6NpGEbzXXRcJauYy6MvhiGWnLNvz3B3Z3o36yJcyNEh6eeAmkQBiGaWhLWoymwuoGFiJQd",
  "key22": "3v58FU1Zt81F5hv5aAD2y67b9fSV4g6emiwcm3aHvGrkANFDfjpW3ZaCyQLqLDMDZesCFXCrC1AU5rGzwJFrTXxu",
  "key23": "3gufb1f4N9iafknQKmxNsc9TEPrAZcyjT6pgFadfWYuZjS11tqYWmrTDA4wWH6y83teRXKz35Anv4YaRwyiZeWsi",
  "key24": "rWyGDd7UpbzFDvHM8Ahxbcx3XzRDWztw6DnnuyMW6SjNwiba2gP826nTWvfXDWEnj3yQrbbCt16UvcgX85df5UH",
  "key25": "2NHPZZT6LsRQiUUqFMpYFHLkmHYrMzyGVYg21x8JHuu6sXCbKPkidkbvyeFxDp2FnuYojqVF9grQWnCVmV7NDzk6",
  "key26": "tJSWnniKYtYaE5JhS39endd9SQLzdn8XidpHqCxHKA1k2qLXky8npYAvtKtCJcB25gKfJMdJaun98ikR5BFxnR8",
  "key27": "2YkokAVTNnDFVJwMi8eLe54cWQ5jZzrcNpFW6NZ7p5kVDZZjkh4qjeZE1BDThqg4disceCz38tM49KheQN5CPXHr",
  "key28": "3UCZ56XTDunqGEUSeaEaK8s3EiiCWGe82YqEgWLjVRu9G6bRyDE8Mvi1sVyr1dnsATZWNEXFzstYxQkHMQUSfzRL",
  "key29": "34HVZUSzaN5Ph8Sj8HmZLv3nCPEB6U9w8abdCDyzCSGmbSo3BMuiyUT4AYwVSdupbgHYthyDohR1SpQeXbYfY8Am",
  "key30": "Vqjcu5WDXHFDLEajmGcfHn4qnYacQXLXxrRVtrTrAKus2HRLPXLz2RxZ4bQDiwCLNYT6h1UsBHAW6C2DB4JpW6i",
  "key31": "3kyLhVDJy9xTXPy4bYzfhFUEG95EGeN7GxHLJo4u8Z77ykwcAYkaFqhX6U1v66StSAKD9uVzt7tNcQLWgyZk92Y5"
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
