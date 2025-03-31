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
    "4zHu5nH6Y3VuoX7uekh58LcSDGbi4KLcNmxYNCQnnNWFZe4BHxhf4Lihag6fUJjN57TB2XpcRipG2VxnepJCKHEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qoPU4zQQv6Zza3Km3ARjQb6PE32EBGccexB6QAhhRdhFsyjyHduFSAS8g5TY2SKbKTw57yE7kG4hu3PsFo6Cotm",
  "key1": "4kce9rGsggPfSJxEoyv2DmiEQ5zk8Y9E1yAepZ8EoeYoH3LMo2ztYXaN57XmuX8M7PiBfH3HTSFcPegMprbhWfS",
  "key2": "UFjsX42otZbAbVZLKKTDBia67AVGVCnTgZ5RSLiuPxPMcscPciTR2UoYYoXrRtD2cvv5rjux5VwEa2wGdQhSrgZ",
  "key3": "j7nFbvj6towu6uHZS6ZKT2xWQLhLordyc5f7EpWNa8yNcaCT3wzLtpn7BCSNPkhAZpF4jfsGGVzjugEygnuQryS",
  "key4": "3fasBGafDdPcfixWkFUGcb24nWa7EQ99f336mRobb5t5XN85Vo3y77VvDuSi2VasYCQPmgyb4xsVsNddkQKECrWK",
  "key5": "51tg47eU6CWHBKsExpu2WmDavAps6kZNocGmhYoPK7rWRFgRGby7gqposrhyacXHSweYxYVsCKrhBZk3TXBUm62c",
  "key6": "5E3QnbQdH7MDAGNri4T9tWewQBn7u7xGxVBsbwey1mon3UuMz3FYzc8oDTPH7njVpZBETpcdkiiM4rkmqCD3hnFh",
  "key7": "5Vb1DXiqy6Pit4ydmqg6KTChimn4RSC7V2NuV9r7skgvBTrHVsxGmbZADhkvWWKo58c7AHAwfkJ4ujh8VNsGUGP",
  "key8": "5cUcHqAM1azWwLxqjDsBT3vwVbgbePm2SbyrCvFeyyrYLDSwsqLtNmCTr7DtdAuEsNJuMviqAK4nyY8Zo8Uq1bFR",
  "key9": "5LYieec9hEZGvdj5AEhq6Auhetgk1LKNtMcyjpkJbL4RKGJ6fTGwzhXBans7dTfGkEhJCZ5sGYxBkiZ2Y6bn7JUv",
  "key10": "5sDTN9pRxgvvEz6XZ2hxJtqAnuc8NqNRk7HwVa3dpmEPCm69auVi1RNY2hVCswZZPbF8fFhSPccLkfGf6ACxCf93",
  "key11": "4ZCAoQvtPECQ3EtCwL2iBJqPgh1V6wCxhAHdsXMpPAxzNEMSoAvCMkPEEXEQrYiZzTaGiN5wRCZy8rhenkzQe7NM",
  "key12": "4Cv8yLKsPcxi7pPqrEn17YzPbmUircXuYNMksi7yPxvnjPYaai2urFV82JMcDcSUMveCJBsnG9bVJNFkBMJug2wU",
  "key13": "2eCHKiJqQaGXr8DD5hNqjPAh3ru8upTyMTPRVweEgu1iARjD5kNKcjNdn2eRt5KZ8fpSsevUA69ycRNbs9ETVwck",
  "key14": "2W2ShmPevg4Xce8Ecaqe45prDdE3QJuyHUcHKpfDRPBQcMfvpWpXZGmYQUBNYxZ9giduUEazNJuZAoU6ArM6h6yY",
  "key15": "2EMe47x9SxmwCn8vDsRbJxwxRNLbRNStpQ36HyPvVw5Vh6c9nnLpg3P2cbChkgQKQaNFbayCSsgExufeiKwUp9Re",
  "key16": "5DsxHNJJ8uXiv8yhKJSLhFedy64FYNJaJPyPrYJbMnN2WaFofpCreoe2qqTRA7p4jk8AKyjAyHnQJUt4aBt3FVh9",
  "key17": "5cVjgZYuhLrYJuLpXZBgQsfzMAxxDR6jwGSNY5u1jrkgQutX6UxYHqHsFFcvzq5FypgFbcdgfYeN3tNrr2fFUYDM",
  "key18": "56yG614uUgPR6dd6Y8BAcG2cW7N7wVvaxoayDSsV6g5pqcGvKefgviu1jVnAJ5qgUH2G3nFFHXQUUTGi15ViBnrS",
  "key19": "4MfDCHzUvxYbvSe6v4ehvvUKsU2Zj4CqcK2vWnKtivLNZLenMgoYxwwAsJHNdz4qDWLSbLYvynjsExZZ4Yn3rF8e",
  "key20": "5q563WQrMbzQFMvLE19LhLrfAPtGDXKuFbgyVhKFoUofvJ5PMstv7KFrzjVuRR5VSRDuPejuVXjiYFcBRaaE9gSn",
  "key21": "5HsoVQHEaqQb21ipZafk8jLtbuiPM1Xig8Be5cAE44osQHKTgJC5DUa7jKtii1WEQiirxzgLthDY2xKCXGdQm89h",
  "key22": "3WmHq9eVJ284YtdKfioY1GvSAfqY1iLXA5UNqnwUqZ7hbDzMPyowBnqdnSLoDsR4pBs1kfhSD19u1FXrXXFVP7y",
  "key23": "RXUcfCymoJSngeegYapsTF4XfUraqSm7XTiZHdQXeU5z6ZCXREBVVWsyn82r9PqqRwfTk58ypJXHEyakM7HG83F",
  "key24": "4RWAwwJyQ2hQx1PoDSyEXnHHsWttNi3aDCu8aEzpoYGmgArZAbDrvQqbnYjqHdp6aSj9zVgJ7TofysfVL6tKMkoE",
  "key25": "4vehTNpRkPUwaqAaggNoAdAVcqU63prk9wyM9gsczLu9Jth9zfUZoD7kjViTmi8kPuEuBN8tymZQ7Q8bcCjAMztd",
  "key26": "5eD7S92N5JthjbYYPyfHV8KdiJN87vZHzYsMQnXL7vx9m1iKLYGSErg9dTMsdcZYAwKG5gSpQ2vMMBNkjfgLVTP5"
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
