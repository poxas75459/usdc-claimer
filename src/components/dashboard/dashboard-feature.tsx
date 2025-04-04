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
    "56GHdFkFVPfN29xq4oHoTxbC5P3o4xHwZKBZmFKhSeYKUkJvyphdvkbXF1HWY6kE235cAp1f9VwkrCNGZW9nHXg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWkUiKke7TqUJYiiadXSPg2UUd89X5g761GVXKUAFu1eXYZgUbFtJYRVMRSHNZcZvkR3Zvngi33tUF5UsCzRYdc",
  "key1": "5wytZDBVbtG7LZ5vGWs6uB3QpqgpN9JCoobRW5mph6KWy9VDQvbnwWshgC3WRYvYqB8NpSiuMxtBcqTk3PYzY8bK",
  "key2": "5WBWh2xDhs6YFbi6CptBMZgbF83riqqVBbsYKfFMs7JJsAnbjk6GW3xymbFciSAbkyox6jgRTPW5WcWPiTSUWBVs",
  "key3": "55hHakPdPv5MdDAJEUviqLyttzmMYr1u356ve6jhJe13CVfBt9gnAQQHnR6zKw7xpsRXSzifEE3EaWnx7QFgYFcY",
  "key4": "36XELq5coVxC63KYWn9gS6vCRUEFZaMyX2KamoLMEje8rG5Yt7jsmSjPQCbY19jkHMNh3vGVy8PSSBTbEAxwcQM",
  "key5": "3VU9trWCKzvVKJwQBJ4ENceonPiFsTySWfP4SD7YUakxck9g3ZkcNe4Kr694vEeqJCHJmsMdZH7ZVRCmzCyjDcGM",
  "key6": "2EDpAiaeXqvu7zy2egFoqoVeWEmgstYt25FWpPs1bgXoHKknNwQA6n7FwY38MGhsFyhBk6uVpXBPaRjGKMEYhp3q",
  "key7": "5RxP5Do4W9bLwHEsnrhwK3qb6v7yFEY8YihpVSrLcnciJjBiihAyxwXkDAUaFQKNiXitJe64gaFfGweRJBxDnP56",
  "key8": "62knM6PjgdhWDZhjXzEFAnFBKf496DT9XGh1yiRQAAC7fwYuPDGAF67iUrKXYgHxD5cT3oBkhagTetHPvYGhvzxM",
  "key9": "4UmnCVeo83MHLgZtq3AnJMzvyoscSnn2pC1tRY5qj6Bgz5qUZiE3pZ3PQyVbxXBjUPZ2G3p7ifHr21Wwv7KdFmuH",
  "key10": "31kQDn44yzrmheUVs4eaZwbeh9pRVsdbweJYexMznHnXheKmEv3995YgDoRZFEPhwT2DwBHQHkfLJoRWz23x9pM3",
  "key11": "oQe1Bs9FdYpfBEzUi3ReuE9c4oLxTMUkrvUnNhp8TLNaL8h5MdxeUimGUpQxaCHma7rmVaYPtesFd9WZwwzihww",
  "key12": "4fuiWtApie3pKq3Brt7TYjjJZSSLt14ouB5W5MPup2LxFHvMgdQqetD78thrFdDBvxdFZ2Ty6xiAcS3WFmuBRcU2",
  "key13": "FGHeN9irvjzgHb7giQ7qBMs8t3SHkUn8fUeHX3n7DwL7E2jBFV6dHpK59ZH47D1gozYkYwKRvs6SryLAvcHZrgu",
  "key14": "5MUCAzrEesJzAgrho7Mc2Pr4gnFf6UQM3PgE4uTaMoXvp1dRWM3f6FKqFP74VgD4wuGVYstG3g6uWcFiLY8U2Bao",
  "key15": "5gPFTsAWCKc8vH1gZLzBqGkyAQ5n3QwoVds9Aj3tTEe9dhy2KTaGbjU8QtZbCnJjoW3WQmaDrY3nQcRrYztoxN71",
  "key16": "2F8WaSuUXj2mGem47AGxgNewfnYC3qpmFtLG1Xng4NDbCDTUrTaWuNiLH2EJhL3ktHGf2hRFu9eWfcTCfYpQU36",
  "key17": "3PTDLPUpqjsDQM4ovB6Nf4xwjeKi9TdCUQdtsDESodmkswS6CURq9hjwXKkQS1xMcWmo22uTs5yW6KfEj8TCK72N",
  "key18": "3CWonVaCuazvtbQQwtBnrFnEjB7Y629wjHzZmLvFrwsuj45aDCT34kYhVU2MRzY1aSmfvRtWC4pgeKjzqHjK7f8S",
  "key19": "eQj19wq8cSSvhhRzx4KLQhaaih2fQZBRweprw8xygubGMRLNMe4SrWhQEEue7yiUqxs2VFRq6Jn6rbUtGiwVk6x",
  "key20": "2ePWrQbPH5k6T1d41mrnE8bpz8Jc1bU56BtkoYYeNXTz8CHuH5F4PrM2XZLGHCm1BZFE6PDqeJLAjxQpBMu331GY",
  "key21": "2UkWnPEBcdiDGXjyFY26xZtjeRp3Z1BNtDHeE9b1eeCfdvaMrUxNRn5xv7fbjQrxKg5wC6tFDTU9cQp81wuaS5hT",
  "key22": "5LQwY51aTzHfgW9G3yBzNZsdLssJpPXDfC8zNUHLnk2ZQ9Cf5PgbBb9cdY7GKnCMa5k2upAQFwabA1PzNUF86Fnt",
  "key23": "2zhi6W9cwdmDmfvatRkTxHD3qDDwWzuaohR58mqi9kQSjNct3nFFdKSufjiMUsyrVfNwn4tHZiWe2VY83qHB2fAE",
  "key24": "yHhEtYx5xGukJfYeniAMVHjR4AEH9CBZ2r1iyj5kPUQChJLFu4U9bVMx8UEmAj3in1vjyFoycKJevu18oHw4Z2b",
  "key25": "5WMT4B7KEQLSVXfZ3fCjdMJMjqu6zq6uzXhcqXhcDCBU4gFAHnszJgaDsfwBeysKB2eVtBPYMW1djGkeRPBkYGXh",
  "key26": "32QkNSmrcApUKUZvEnVfuQ4akLfsJAzEmdmJKWSuro64fAgK6Urw7aEqodjt26MSSqUbnKZxU7esPDABi1Zugonu",
  "key27": "5e13jV7w7AprkyjNumJkrd694gpjUQBohb4mMY63iXxNadX48kvhb5fV4v91hSemBwfAhvfWpmmt3bfEYkRTJPtj",
  "key28": "4TC3qWhrG8F6LTjXKfaE8nHv7TrwjMN8kjoyAKypy3MoTvrVaz1e5MbsBafj8JGkoRNPYchqioHVMBqNJeRKqkec",
  "key29": "61tAuK1DGvcLqHmSMFqZgCLh9mY3vF64jhaCsyqmZsnAwT4tAqSuM8fNHTAdF3NQDC7m3GNrABf4FTdaKSW5huYB",
  "key30": "5qasUokDTUocUqoPuPHx79fU2sx9KuJQeZSL6HypCPeuuyTJGD5XmEJKAPfguYr8UCmvVq8uTEyqChnw5bA3a4xo",
  "key31": "2YN1xxBDXcRaK2PjRs7326q7JY66WZx4tBgL35ycD3Tvcw8hfKiriqo8DK5mpYhf4ypKtPN3dRCP9YaudAUmdkGW",
  "key32": "4r2c4A9h4tFXgWUDNotaGgLTfgVKzQF4WDqTZuDoYPoJYQpFsREca5aLNunswk1fNc2ruAT26CS97nvReBzfNVGr",
  "key33": "2kWDQYAddZbcGRPmmfmjEnLPMRFD4icpYji6b9sc4i62JJK1MQGEZRvSjESEBscdVsuoEMdCzZDSTBMagKtqVdWY",
  "key34": "5ixKs2UhS6U96MxQQr8bJAxiWEwDmWvjywtR6rfARbW2ovoic6te5BJSYkPmNKrmLykSCWtDT6dEENk8rKFR6bGY",
  "key35": "4Q4Tt1nAMk68bPCyQd8YYQUs9PzutZXvFe9JFNwBcpdevEEwMGErzHhKQpTeSMGpdRZNRTWqWjCvS7GCimSrsFHt",
  "key36": "8RkTHNRuvAgAyYhsMn9Xs5snEYYRRdiXh7qaAVwHLHxgisFoPNpgRStbrqgZPTtnwHR4P8bouD5obc6pzF1HcN8"
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
