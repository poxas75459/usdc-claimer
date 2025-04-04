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
    "4gdpdDSGpJDe4yUgaw5uUj8qt5Ts9rQVyWWT7FGmmrM19Mqtba9SGZfL7bnq4kJ5EKJE5FvB8YJyngf7Rs5ADsys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hnWytSk41gvxhjJsyqRVdV1yrHXpWsFLVy5QJgnEtH2DogMSUiBDYDCYNQoZDVEEnG9sQNRxWCERaxzUro4BknG",
  "key1": "4kDfE8Z8bGNxtWv7wm5YREoiLneXEum7s6nRqZrTBnqbULZeAKJ1at16MG8HkFjRj7wGtwuhHj1RNhP32nuDfa5e",
  "key2": "5EDGitKBq8MPEX5JRpX4fcmjNMa1TRZQFTTb8d9JLdbtEoP75qGY6WjhpaLi3pM6MuEhCpwvGfEWySYYZj7amMbC",
  "key3": "2Qf9DEZExT2DfqGyDnTDjXUMhivyqELBxsQVMyYYNpeXuSYLG5QFb86RQFRy261ip9hJrv3X2KmY3i8JzVp8hPNa",
  "key4": "2UhstjQJosCr9CYnFyCs6HkfEE9EkF4DBVFPctU4c65gF2aNncjCNX1nrdpTeoJHx7xQ9FJ9eJjg8XDVXgWF2MWw",
  "key5": "NvGRd9f4tVCcrqZNnn8KeSMsPL6pSNTCDaHfFds1zKpq81Y4dyq76qp5KWQUM4fwgUiBx9sBDFDGs5BijPHWvXq",
  "key6": "JEoqViSejvf3N6mK28ePVXUR3VFCr1XR1ABJLXjw9Vtt9rXU75DNk4xxsmwfct9CAyovHuYZ7ep4G3Gs2vCztqr",
  "key7": "5JbHz5JEeoJuzAqG8RCiYxYCjsyikBsDKoeKoeMh4B23xKSQiVcSXamRbGZGRvHHGa2LGon7MP6CLotSoH1LfT12",
  "key8": "29pjJuznqP7wx1sWC9nvWEBepjJ71GABJJVcwzMRcv8EcXPsPDvVvQqtNvjHX3SjJkSBSBLooZobZkKJmJ3nF8vK",
  "key9": "2fqdCSfVh662eL5VUEvVbZiiuXCWUrpVZNQDhfDU6THYCdFJarcQrPSdMERCuVGNv94GehN6D9ykT28VJi6nUaHn",
  "key10": "m9HcvSVE5ZgX7BJfs1stotMUwoaJAWxsP6wr1xwA8Ws56szhxMvVix1fZqmZhquStDq6x76tfCsScayDgwpk27x",
  "key11": "UZRz5fkkAzdinCNPsaKfUaoqgTqadTmvps8AxMaHX51CWgXju3jZyESRxMfSyxqig4zskijbowJ1cperVursry6",
  "key12": "215AKEcxHuvMNMVB96tpDukSGjYMYeNDZEuuv6zkMpVKiQir1EhqEf974XL9YocbA1PhBzFazWbaW1GQ38t8taDF",
  "key13": "5ZxA1QoE2KpgFmfpbZwHySHYvp2NJhvrD35X4eMePEAo7RcHub3dKaERAG2jMYTBzVEi4Pt5orNZKDEKS5sxYqtn",
  "key14": "5hhyXAMY9KqeCgp2uv1STM35VZwt5uoJkQrKZjybNEV44XxjaHpA9ZCto7fZLEDwKscQcpeHwfMBVUPM1rhWQ9qr",
  "key15": "2WsWQqhTBGwRiL41i4FBLc6SghZ5tF1xSSzF29a2UdAkvdvjPrF5iprGZGQCfT5F8DhvMpYg3y17HcwfcoCwt9uy",
  "key16": "5eJ7hii21mHXMMDCMqRGviVdJdtjYkFG24S3TddHTEGULbAqDWAmcESRU7wgvPh48RjwR2vv8S7n73uiRhG7K21",
  "key17": "3GJAmQezf7Q7aLxXRu8kc7CzECMpmryByFk7bNDY9AEVRSvzNzayMga6osPSDUWVEWd8z2Q3p8Fn7Za4dg2wgXsL",
  "key18": "65MJR1aPff1BLZZPNDCnvvY9Cfva9ZpsoM2QbKNcNnzwW5tbo5jeP16eTeXkcz11g8aTDjwtXHVt4n6ajHs2wyne",
  "key19": "ZJ8jVzGmMzyoiEGsW89VbAhEq64DKxgUB2jLovemzTtnbPgP26PrDApu2696fQMR2ZNvB6EWV2qgMfv2xPHs6dp",
  "key20": "4znFnM7KwUKZ3nuH7FMyLRKxmRmKRWcbcoqmzQ3j6wMHYmfbH4xqnFi8rH1G1Ne4or5mTEk8SyLzqVEY6UpDk5ea",
  "key21": "2xhT8aZU7SoQdC4pvgJFDWv7kKPzYnoqEFKpEsj4a8LrkgseB1arN7nS5PVwSNJwYWW5adk3ASHuNpurTvaRKN6n",
  "key22": "5aH6NBtcS2qqxvdr1wvzvx4Yz3SezRbRXdhaYc4hASYjFAZ7gEc19rgTLtCFisDYZfF79u1mHo8wnXu2kBs53PG6",
  "key23": "MWK9YRn2sxeNwk9iQQXUuCxiR15bKRZBEbp4YFNaMWxgDSQENB7PHjAi1N1js82USCRHakYL1hbsFKcxmW9ux6N",
  "key24": "2fQXMQ4xcN6vWS9xgYg2XJzU7mJXF8nNJsHB9UjnwBKducB78oBSTqYCbexB8axbHqG1iEwdkXzv37pX9tFz7K6v",
  "key25": "3MrdTHYcamScgyihaBv8k4ErEjL7EFxgqEjcG9BzDaQ7mv8AJSfpF898WAzBWpmQLmDDy3GncMJNUrR63FJDVx2G",
  "key26": "4MFxaWCGptLeF7egiG5PbvXMZ7hAcaNMSX9Bf69CGJb7FqPGhXjZzrbgyiNBuCaWEKrmXhMn5Z8PqPsetH8SEG83",
  "key27": "4bp1QVGNLDAvB6qaEiR3Ui6vBbBQBdtb35wyE1QUcZ12LNgZ8ZUJqXpDrmZbuHLkWaztbPV94kym9e7B8PWwRQSm",
  "key28": "54qF3chNKQDBTnUbVfa513a6Mx1NCPUGEuqcFHn3MW5MwTioT3mYUZLMXP7ReQLmuuNzd3PiVM28XyjBwUTSHSZB",
  "key29": "2LvTzGWTnmmyRj9YtGX7gvPvW42AF5XCdHrvij3uG7qJjM7Gm3GZLpfbYa37eXCBrtN9dzdihQmQ8MLBpSSTPKqF",
  "key30": "5TkFCpPFPnuqD1ffUoYnGTnwutfgE98xnktcHUbZTc7CArA8xcWaM1SthFwESz56fGvkmGVEnq1vh9adUFc5pzhn",
  "key31": "CJeNUFZEQUh9yNQY7MoNUEdqDdnSQV68UqZZ4BVPsn9YQ3g51JT1knYW5vxFoyTzBnxAGxSdWMrea3AFFWxMzpS",
  "key32": "3fcUyV4iiDUHYCA51AhPaNnspefA58v6fiJf2bxEV26rpenMmP6YwLVUz8RtiRzjZ4pt1p4FHdaBzQi7ubwXLvqT",
  "key33": "4nfMWBKeJ2kzZmYZcLzQms1BrkEuSJ2GpHLLwUQuxdSChf3Vw5CRtE4AWbabJZqSfg7D2k9snVa124Rio5XzoUKk",
  "key34": "27V37fMtbX5b2yupKDWY37dox5Zt9ZMYazMQPCUMK2dg6Kj3fJYwuMMDpzvJkSFd6uqvcHfExKQwyj6qppQtjW3Y",
  "key35": "5viNrJbBXpfWE1pc4QL7sQCC2eyoWnauFKuqevDe8NqmHNR1z6HR9XSVfmUQBVTxhGqXiEUqr4q6U4eq7nVUNYu4",
  "key36": "enTywzg47eoUeXD94tb35JmeXbz6eEZE9bAnBMga1s2p4KsQMsvvd5G5qpiLQ84vm8cu5Ptn85AcC5oFnvczwVc",
  "key37": "3JZ6GkjfQS1dMgCLP9LmkZyFeakr1G5F2f4zanViyhxbyQqMEZzUnXWU3EYin4UEz3xi75vsXmNyhyMD6cJF4roT",
  "key38": "29mFvjbMSmams3FvuiQLg3yL8g8STBT9HfhZ5KgfDEfRExH3UGxMkVqTv55PCjrtdAKvY1Nt2j1EwbBY1e5GHBWg",
  "key39": "2ac3JYBo6qiCTbPxFfe39p9D3cxunQuvMuvmL98ELDc8eFwmgCWKQCJjd96yoPbLdPuuWkrjSugnqV3xG6twunXz",
  "key40": "284HFDt4h5BkMNLmWWKEjiDfLNZvZFqR1s9qva49mRS9GzQGSAjZNJqQruwFAjUeST97AxXqWEEytaDtRZVPWqDr",
  "key41": "xGLUXc6nvwfBootNBM83k2NNDwucKkkyZXjwxfJdktsDuD4q4isqFf5KhBsoisJHk1podYdU2QEZpQWem8V1rNp",
  "key42": "5LVfJtD8E4TXPUumU26arQi5dTNSN4g6vVok59Gy7vCEGi3oJLrQyKgbv7BGwcGfruYBePBhu2UnMcjnQcW51mrZ",
  "key43": "rkX8jWCgnL7wUavVMTzXYmGMbztVMzHM3uJ7xSPf82195h62Zthvfay14T4gboWRJA8sEcf2SxP51nySSTHYXPV",
  "key44": "5VYUdxYq7x2f3KW8ZQncR7s13rNKahYkX9gH3oAwZWcC8Bxezn7gwkpboWzqGinsSYzy63TQ5AWcprZWAaMcevaG",
  "key45": "3YCPpGJ9HyPxziiXLkCoJ89Ckn5eVnfJ6cPyu1sZZgKJ8Y3FExGf4orVaMV9RhvKVGZN6Gi2oKPxxZgTQuEqdUd6"
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
