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
    "5MVHSZaX6ds4WQVeodMm3LFf8Yc7sg7auLD7xCoUQoVqfQ957baGDFmkqbzL43Ljw8tkgAbiV3YGigi28Pi4nX2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1gWegkr3vNsaMCf9EpNHnGXxYjnniW5fo4su39DbREf13uwQmWa8yZ2ktZi4HPTvCxom1ZAc8FCUnnL3EkXTWL",
  "key1": "RKUseLjq4YxRhgCeE9gBiQHGt1V6AajeHzcPyig92R3p3wP3PhwWeUX3UhR1jdhv8Ebm6bBbJ1rCG8aUawrNZTk",
  "key2": "46qwGxYDMUiG14c8z2GBVejQw9MsKVKa66qH2SRkLBZ9W9qGNBedXk2SnwNxtEozaUV6neCnbDmRSqpSAhJ49Kav",
  "key3": "3F2Ls9Q1cj6kFsrByWEQQSgABnsiw4zzoaPjfmezZ5QkWoqEzJ53TK2aYaUpdTmV7tBuGUoaA4YHCRdd5ct4YvEL",
  "key4": "4g5hBMzE6BQK2bTZ9nBPDfKhTT5Xhtuv4vnCW7KHq9RWXEjbCTj97yJbp3dhTcZ5nZnCycGMyNKPyTEk5YA8SthE",
  "key5": "45bqoY1TDo1v17BHYb17pbMGLUCxKKzYbMX9AgDfZf8FHGTAdFMufv1u4PwKxrUehfBHBkEwToj1qa63FES1Admk",
  "key6": "3UkuX9BW8WMNFESftfuRM2Azwj3c7rzUXXcRZLMRry5az1m7VZeZKTnMEo3Fjf2wfeCXdrqdibcPqs5Kz7GL4Mzp",
  "key7": "25uAZx5w8pd5pwQzSdR3M4JUCWF6NGoUNvMVJZo6vCS8meveXVdmR1n5K6quX8Znbpztv5GNavCGMjfHyDWsWaEq",
  "key8": "317mkCoZ4bVobegwHVeM7ZFvSKwFssDLgYX9GvLvY1C8zu9CLyYaiAXpqPwnWXFpKfKv157HWKjxG1PE3V7piksS",
  "key9": "U8vzNrB2aPyPd6yfw8fCTecPkwDEZELsYyeQKpxR4RpG7WPpW9Pk5JBESafoU1GP4dAsEWkxkLqwS5FVan3WCrQ",
  "key10": "28QvZppqvj5S2wuJ72k532XAukoZdpY3SkK3jww1dwJSjZFDSPi4XoapF3YviZAa5uMmmSuNXtXvqLLtwCpPANQN",
  "key11": "mxisA7arxxPLATnM9pBpijS2CPDL9woPPzqnqjqFiDb17VxPsDwycfPeT6PSZLbp1EjuKbrrn5X7c5qGKchDLTD",
  "key12": "3hqR8HY2s4rCtEZcyyAzvpwHvzj4XA92mt9PqHPzY1WZdVSvRvKSytL8zfUiw3bhPz7oaRTk8fT1cNzLALuggtZV",
  "key13": "62mZV9y9tVUkPk5LWx7simGEYGxTWbHbwfJMSFc2AEpSfxn7ngGGeArUY1gSX7uhtPU1cqd8PnRezRMNmN49B6H6",
  "key14": "2GzM64cGLkzy2f8rQBu7ExLNM3r32kQgUSbmDUiVaDYQicPSoSb79oVKMmFMaLm987KnKsYXB6YevkZyYMqAtdxD",
  "key15": "2A8msoH7DVWSiHsbdmzjMKwRTZcNSUpp4eB2ikXEvcwnj51vAdsxatD32ygi1PMEJn78wD1Mz2CQyYLUxx3e8hv2",
  "key16": "KT2SRsCGkWEDdH9nbjoSYiwc9jfNaBG2Kw5EQgc7p7uidT4N18w3RLjXW8uESMcTQecgPsjXq7jY6QikyBeir2U",
  "key17": "54xX7NHaQEsMQAtW8vQw9tmGaaVTH2BswNHdaj6jNqwH5H1YaLNhS7n7qsp4jMcbqwJAA99BN3Nf9eBJkCQEzShB",
  "key18": "2aMmVrQza1fS4qDYDRyTE8V1C77Usbx9722rkGXaoLcazXYYyHRCcqDvFBaw7CR8DkHo4aoHNuSny79rDjmcd3Xs",
  "key19": "3foLc99BM58mtcEcCtCbhWq3WzRN4asYkmpaThURvRQfzgmLAb7NxBuLct6RqhqwDQTJzbvpDbAEgfWC8t7J1dFr",
  "key20": "3WHwFfP7jjtwFYXvjsi3oMgR8rXBAL1nUL8RQs4jkgyWf5y54bLQKkRfFUDphp5VqEAFfZk5drDy6824UDATB7Vo",
  "key21": "Ed8Wm2xUP2pGctZCtpH2RBueDddGSP5aD1nJCuwx2554pX5jVAaXQr8o3g8jRCyho1Sb9CY4JA41ocwdTwFkEn5",
  "key22": "63EFJyadK2BiKnm2tffj6PZbCHdeftFKgTMTtm1Lk3qLPWWQ9X7ZhTYUzSwaBUVgZonksjdpdxiCXdQLi1atPZap",
  "key23": "4Yw2AxUgbbaP9YJxjT1k5JXbmMFm6MTyMhDk9EPNSpsbXksTaiCKUjArzgMt5YXvt6od6pkn7YEaRXsa7HJxiPZz",
  "key24": "zSbYPurLrbSfRq2oLi7a9HrkCFUrMYv7NqeRv2v7nftK9sUXh9vyT2uvLBr8xRrmXuWaVrpPpgnBVc9ZZtX8ehQ",
  "key25": "uXemBbH3z6k2a7tKjCJGCsJKraZTaxM5LvhcKpccz4n1QpZtEoy4D2iApXoryEUpW5dRMxB9ztfQHuGGJMgNMX5",
  "key26": "658QtwKyKLeCHikeXGZnMrD5VHvA54aa4a8cgahHvRk6QNA5LaYVzbfzdkp27KAWGXymDpmst6RRjjy7wDJfLNoc",
  "key27": "5rtRsCg6zhoG6Y1A1Jpg4w4ypJfqauj6furd2zwNSy7p1yJtuwkoH2CEK4fr2d7RabXHGrQ91LgUdB8uzxihHYsJ",
  "key28": "2AAzrr3Q8DSbQymS5CmRMqbqZS9LtHY3rNBGhfamMmFFz5L5Jzyadk5hdLkg5okrPGGY2wUxU1GgUDwxDixuWj5D",
  "key29": "5feUKtgNyLHN2D5MkH3yrxDTe9BknHmhjjaTUU7FRM82U5TU1KeGGvsfUQE12gB3PYRwtMnRkrmnVZVJzjfkWbDr",
  "key30": "23PsF7mJjG5992VjBvcwuiYCp9X18dppbgA1EwPBtucwgNWRQCj3JiPLpsWkkArjUr2SVksrYsuxngH1pq69jza2",
  "key31": "2yB3wHzZuotjgCvoJDTAz9RoQ1KGuUpa3Xcqn6mx21aQLi1dW1QsoD4zoaHzQQ4MH8RcqEh3Lx3BQYqVbC7trGsQ",
  "key32": "3MsL7FmnjtSXjV7UTk8iKf7sUrpMKAMikwvMWxLMGFGP4yij7znJFgbuWQLp6ysZ5kvHMCRagQohYYJfmNz3tcS8",
  "key33": "3gvGveotSTqzYGV67heWD9nT6cmeHvPzKcvVv4uQ5sE1TjiuQYWQJpDmR5pWmKAB9o7HcujFyQubVYLG6gakHRx5",
  "key34": "KahRrxKFkxMcFTbqPmasafDLQTV4DtmWDKp1mC7WSFHNrWa26SHD528NX4Wp2XX4ZhzNWujaRNtxpxLMUQcQNfn",
  "key35": "nHrosT8xevvjgFqX7tNNWp5DbAuc6N7uCfP2bf66HVWTSYgoJZS4aKDSbNnD559GenAH1brPkmD88K5rdMzVvKC",
  "key36": "4Z5Gm9sEn7nvJj8rbaV2eDjf2Xa1LUyR2K6HqX8rTxoUQYNspQR53cBGC8HWLz5DLtMxBLUygGukPTd7gMgr5ayQ",
  "key37": "5LJPDcDoDEiaL1rK8fHcjanjhD1jQZUZg65ELrTLi5qN6WTNVeMYreZeSXuQPg5buDeW5L1A8k8HNghNhiVLCiuk"
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
