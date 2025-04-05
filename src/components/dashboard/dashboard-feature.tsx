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
    "igiUCZRKWvMJDm2esLjYSiF1uW7d3aYxUXn9Z3fkk8MV2zDTTwMSdLzTbryBCDLYLb2S2FFD2dY9j1ceAj5adik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36M8jqp6872MqDQVecEGqM3dG5j5mf6iNR1B4b924BXuaStovKF88UsKMSrGambBhrmyuSaUMvoTgdtoJGDAAjgf",
  "key1": "3nM3mAcFHDxniqaigSbd63eVxgYnis1qSzuonstBTwSnZTjaCsdEpFZgDNPc4PuY5ywxRtAme6XWMYQesKDPEGde",
  "key2": "R74dtixcFcbYGBAS5RDhGzv7bGiRpMtFzP9c9m7ZpMCu152MUYfjpsfbQ43KnVE2ferP8tbxLXp141joypL4SGx",
  "key3": "5Hm3cVGzFWyDuB6AYFvgHLVnVnkbNhgSoPspNmLsDVKVRRh86xeTRuyJVNnmXHZVfNW3K4pRPZLfoS7BxMNV6Gzq",
  "key4": "3cwiMyG1L267AXrV5m869SBSsrFJjJynh4RGfwETjHKC65nBMpcC9kKvUDgdYUrzEyEPTy3pdtxZFYZ74WsMwnKe",
  "key5": "4Kagdw9ziCUkRzyANEngLYpPaj6jzwMdhQX5Son28xFgkzLQ8Coyv3F5DBeaKrn8UKT7yC5NYnQ1yogcYx2AHGv9",
  "key6": "4gyENSur1MGEpwKfzPxXoCkqhiaLDTvFrP1HCg42ALE5vsnndRST1mH8Yz6cNAZfyBP2sUqvED4DpwWMoWnPpVRA",
  "key7": "KXtnC2FcHqNsizKeadABMeKtM4Joqg8kJQPJi8W3nybuiMNY9sUMahY58m1TEoXPmtYZP4SYJM4AG83fmpYpTXe",
  "key8": "5ZQenEyXLH1PKs8n5WM66T7jXRBXwuXeZJfpcPJqyNi8sXisuYgEHwLzY19kbaYPutx7Bqj2TpQVVNrTgMsRj9ZX",
  "key9": "3EA6VrP2cjHWC6oriSfFxubrHeLSaisqhEyUJs2J9MfbR2j353eDpzzou7vRuf95sDB1KomqX9BhjoLiGQmMUmoq",
  "key10": "4augwApF9qqt13TKhhMJvzVb35qB5NXXutxwpwUNmz82ReLgUDXQw3wun1djCtZg2YRFjTEu1V8gKzvfbhesaNHv",
  "key11": "hcvrabyDGXz8puMe8UYBoDsMKHQDdJaZi7BbJVFuAdEtYm7DSBz6Yv9RbK5LRbxDngVwxuKJnFxMALry9XzzVnX",
  "key12": "2crJn76p6fR4BwonCd168vvBLR9qm83sxFQ4kcxM9B88ZbANe9kSd3czqCLXvcXiYe78a7ZJCbe8wnjSiA716vT9",
  "key13": "4SqtNLJwnRgwXbCVVG7QQue7Y4Cs1Rw5yZmZCUoJsPhMbYjnpYtm7VGcMsFDacgWDQuvXSZXE5eWnRoasDvU4rm7",
  "key14": "3Zyo68mvpLnq4wrm7QYmRyEB9dXFLGoohZ2BJBRheaKjwRzhCZQffcQ9LxKp1g2t5rNJKSKN9T3tLxibjQ9CcXEN",
  "key15": "32PfRHGTnnTJta3XFyfBc1nxxg9tbNqT4yZjDhqB9ndVYgdJxkZJ92abfbbBpvK3gzXhTT7X1ByUXi2YZ7ixTiPJ",
  "key16": "2vUcv3yKutp2UU6domrvJJYvzhqQvTsauQ8X7PHjaDLdSsSNPHNKxJW6moZ6kR9hdzjajAfBsQFy5SKyrc1nipjL",
  "key17": "Z5BsZKk2Q1576yTedBfad6RqkLmqFQfQ5J5fwHiB1DeGCmTcSNNKt138sRm6dMy3VSei3dWoP4jjXdvW9kTJAEk",
  "key18": "4QAX1fhksRipUzC3vaq9eQ8aAzrHTnWR5bmN8KVfDgYjVqEA8we3JaFdwdUs1sp44EPfNcUKj3Hb9rgVGbzZ4k1e",
  "key19": "49dJLnKvqiiX1XQ1Qaaf8sodfBuWYfJpM1ndgTsvjrksUBAscDuo5shPsRfyXEmB4XGQrk8ToaMXXFSYuvfYpWMT",
  "key20": "35goMEE88DcLcbAFdQopZ4ZicvptqXXTJChkyTLzmR1JJTYXfZkedEBfXM2Mbom7J89JZwox7NUy2TofYVWW9V4r",
  "key21": "48PhmgomckCXREvsSqHrR1C4kmZ76QWk9A7DnHtjwsKm1SPpg8JzwWuYwz3t1UGpJ5xzjKF6ii94uEm2C331Z3Je",
  "key22": "Mq8HEQkrcEFGrKtmqzp33h2DdVPsa6z5E7tCGgEXGmfxr4eh9xHCY3XHs3G5fYALqcUGuq4sm7usSyLbMU4LKi3",
  "key23": "4Zf8mn29KMQ8m9QLraZUasmk7iipAKDEjgHkijHyG7Z57N1h9cfeGbxzmbLWncywb4rwZyidWRAh2rPeuAj9rmeE",
  "key24": "3m2nXFD7wGN7Pumf3B2NaWa1woV5wQdBeWe9HUzpiUbt8UoSfpBzhpNZmn4boTE9iUmv1xYu3f4voRwU73ZrBeRv",
  "key25": "4ysyEFPkvK5JSWwdtJc66GqKG3tf21hj9RL1eZaQqBcKYF7Hk2bXbNRU81J9P2M5Ts7QcLwkt3auPVPoykurRvQy",
  "key26": "nif9vFpHjvGYMQDTN4UKggqgbPSQ86tmkVfzFuac1NmaDBM1dPTp46a65qfcuaQRRSfrBkH7rxvubZbJFp1yP6p",
  "key27": "wTVGTxBDUewGs2UZTPiz7dugc2Q8YnQpRyCX5syxVcb84Tnh2gHXLghGbjJYXabqTsLphgoNTQy9wBrGPrwbgTi",
  "key28": "37ce3Kden7e6hBtJAbbj3ViVGcC1sLxnaA4bY3VaWp8bWFxgiRjKgdZchF2wnpfaYHzgQ9onPowGLR7w58SC5bfV"
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
