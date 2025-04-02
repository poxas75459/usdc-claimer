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
    "5o3GW97HfSzM5DtoNi2RgFNpiRrRvBhS4NrKaALwK1ZkXcAxtxBi9q66YCYTHgytGce7z1kkaKdD7ajJhRV2VFvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wEuwGnFmEufqFqppnJeYd5BEqbB7wksUgt3Tzv6uviaCdCBfH4boPgF5iTnazUStPtcJchmPmNe2kAJojAMGoUo",
  "key1": "DKQzthi57yW9ZX56rekXAMM362aBCqCaEWiFdrdttA8TmirNTYU8oNc9JiMDi2dkxJwhUrEKZ9ZYFhmWVjXsdkF",
  "key2": "4UjyD8brLoWT6U7ZDrVHG5A2d7Wdiyvfuo5bK3RQeGwokNQfpQ2HBVJ368285CZ6s8hBVv3D93spiY6fZL4ApePJ",
  "key3": "4Ui7FXF67F1ba3ePz9ysVFZTtmgniw1E1zrkMwYqGCpjPm1giHAhgox6yDzPGn8vnBQGtfHfjVSKv6xenz5Z1W8q",
  "key4": "5zatnGcUBiWzzzHGHcSKqjP7yJoeEg7Wpxc3MCbTKHkSij7aPWXcWE7Yg6pz2C8VEMg6Vv81hQuGQ2JjseL3DavY",
  "key5": "254FprEwybttDqt5yHVKSkfqmEPP37bgxhTjmJST8sBTggVwdMqycuNnGPjDdUeBeApRhU1dFMnURShqp6mXXxpg",
  "key6": "3t2wWaVUF6CyW9pkLoM7oyLxwELnjKhk1T85vfvpzsBrH5tUrqkR6JKRv8bBiZQB8nkd1wdg6g3vLqt5BqJu2nJ9",
  "key7": "3sS8b43PYEa5D5iEFG5Kqy56aKE5nzKfAEmBK4DFnqAyuL6KTwMW7B1D8NQCPiTSUP43z1iAzk3erx8DVjHMv2Yp",
  "key8": "y7hi78qW77Gj4iRbEKdvSMV9AkHiBK1HxijBmPUeEQz6D495dmXJBUcUSFr5ZDC5Sa8t7C5NCBcb7cuaNDLnpC9",
  "key9": "5reSQ9EsCQQsdHzSJ29wuZshTSuk9yo9hwPr6CS78WF4afytiEDg6kbWc72TTEq1ZiEM37CWQZzm4FEvmha9ut55",
  "key10": "36z9t4d4QfkUMf29CYGSqzHnwXkTXdXT51ZKvERC27G38r6USgsWk99LPz5S8Ef7Np5xnBnJjNBeKGe4NCRbXsjf",
  "key11": "2AbcQNuFCW9g9jBts46u1Boe3BkPbSzGm1ffgZp42jwNvFh5xsjDXA8UKZyVEu2zkaqCrKwrkmw7TiufbUFHUSEH",
  "key12": "4rq8Y9ZikYi2DcF7XRvGdgGhBXmCxFzCfJuNvXbmqtQbc3U1ciZ3jbtNaKwZUtRZUTRbn67eVzAgPAGerWmUgMZ3",
  "key13": "2muPipJGep2A96rtT4AhTdUpvBWC4omY1cZ8WF8rk32cMD7kX56wmsEgkVotYsrGDDQxGRBD4BzBfXBmDiBsCymZ",
  "key14": "2hBKfRjzj9VKVQDai6vs8tBwMdoZ4MEyPcszgAwrkR6QvPuxmbuUxuQCBFnd4FRaNEqVCVteD7eA5z9pxiUyHc6M",
  "key15": "5Wo5DLfPp82ufutrFQwwJNxiMfFXVHHocsZD7wExu4wXbcdYYffdeGGMV4kwMwsN1CjYH7DqLVhSHq1JSkq3XDBw",
  "key16": "5YPoa1Bkd1wK3G8XHKDnY6mLhKarP7xoB4RaLHhEuUce4CUyj5JHLsUcoAKgbFZ8fJbVU1pgK4CATUdUurcucDxw",
  "key17": "5GrzybVduaZbku8ZTs55Xryf4WDTzfwXBjvWphA3PuCe4FhXvccwDBMSMThqvQaceKpfv4J9DyPWmQECXhpZNaez",
  "key18": "25k3kVa2YS42HsMM6DSExRgUtD4JQjSuqfRsNnF4Npf1grX9gUSAk6AXGyADiFJegZoFim9DFS9g95D66BAH3Y58",
  "key19": "4MA3s9XbRmNfDz6u4qMNzYQXxfNdFXwMe5sJA2PLw3QUAFsduaw8s3HLgffesvUYucCrRYkLqmeneCMcJZNaWFRG",
  "key20": "DLiNAXTT7e85gdaPD7rxLNAPN8CoyWuJcGrLqUbggwWaMvKgEGTtFNKoK3FSk6QbhebqLzi8VLviTFjYbuxXG9z",
  "key21": "RccstLkyzU2pCSJey3QFqzhYCrTPA9HfKLuYWqPz17F91zeYkCPgnv1aqFzCEqwCN83UrekEPP6DUpXDsD7w7Ym",
  "key22": "4N4PRwETQn1VircSn36wUwVDaWRvhwc6XFMFnoWvmsctcAtPQtYEu3yJ4RVAtwKKC6bHRdPmw7N8hhPWgvByntM6",
  "key23": "479mwz8Yhnzt8LNRdWLfLTcgv7jWn3GzDgzkWdqXHJgfxmek2ivXUEfp9XanGDQeempoByZ26HxS69MhaDhK7VZ7",
  "key24": "5hwDaG2yN2DNsTxCxKzFBt4179mXWWFowHgioxtLMg7NWY8Gby78hqMjbBwCQ8Y7ZQuJBJDSn1T9n1pcjGXQKJxK",
  "key25": "415ToHYq7cJ7iJuq7JAFe9T9n297LqtF82C7qfEXVWSscFzxVFMxTJvs1BaiSSRCknXeEsiZyJXS6qU7LWHxsWCE",
  "key26": "3365PktEpZKE5XNi5b3zPKmvKAaCSodoPnZwco4Hf4p3fioSe2RLDUUFYrdLSNpPht1Uiuioqs7b2bsXja49kBVZ",
  "key27": "52fuoD3pGKBiPqkq5wqJfYPVM9SCh7XY9Hg1Hyjmjoc9SbJwrRxfVFdvjEVSUkzPsajRQFVcwd4q1LwbPbAJWxng",
  "key28": "367bMSRZ12AvcWrqQMchtFELZCDq83qkRWZEuHGLiY8ndhM7buZWqK8gJChuB7MUonq9bN5pFgk5WTqrqHaFTvxi",
  "key29": "vRx7snqUN6zdKWi7Zq2SoGs2WswKva7jxDMMCCXaAXfHNfGA9cKCwJxAm9JcpjMdmCgXtsVuaeoHq6fk6jMidYx",
  "key30": "5XjoKtjUZSx574Dfn6vPkp7hmJnnFKh6jTNxTKqdGK8iTJ8Di438LH3B2uv4Hty9SUXYj3Z6AV3yYuBUomqbHFEv",
  "key31": "eTALTGpN8cL6hXdWUiecS1q9XDSsm1sSmVDj6gSB3mynQsvUgQPfBxXjnVh2KN1yYVy8yygn3Ns1bpyQdUsbzwr",
  "key32": "amtdLBfUJPLThm7yEch8Mo3QijiGRwQb89NEg6Q5EA6aaJg2FCEebhjgVtRqiuK8efjLCBdzqThHghPjtKA1duS",
  "key33": "5SzumNpU9tPJgAcGo1s8atExpPwrYHfcZXY5PZvLyUKe787McYjJJB2k5rsK1qousaN6jkW7ZJsxSqfDaou9J8KD",
  "key34": "2HbvXnEn8JiUhunr9NB6nZbTbPV3fBoMsHWW4uJ66L3Uz9Rk2skfy21VfjGDWB3snRTguc4P3oQDVuYDBqWWyysW"
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
