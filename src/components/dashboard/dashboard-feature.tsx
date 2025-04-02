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
    "2X4JR9KnBHRUztfYG3kegcze8juAybcYjMgx6z4a8V8NzBJcWNyiBUSB9Kh37D4NjamfnmSh1uDQc26a5AW6pLgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qktX4R2TDmh9R6FHEih5Dzc1aXmpTkVVSJTM4ptwe55LyFkzSMLLsdhDW5H31Hq67Np6rAsNBJq8WBQTGUK8TRw",
  "key1": "4yKEpVWn4dhJjAseKoPyq1tQVssddGS2UkpLhr5d671tiB7cYtajW1bg4s9p1HhbG4gZ2xNWbg1FeZ6K74Wiht53",
  "key2": "2A22BMxorhMeZ5JhuE5SKnZMUt1S6Ea86awBDXbaVSRjDN5cKrhzrVednvYu6C7M316c226zWWcH2PYFEv1ZkB1s",
  "key3": "4FAgLcJaL1S7cxFhfJNW4fpszTGuvNj1ynwaEjrjFkk4tEfdhvPVK8A3driHQtoz1ZjKgBCGa7CE4pPkw3PPcCeN",
  "key4": "5yR6ju9k6F4BMxFmyxwBwCXeCA5FxonS1TB7TyqrU73KxDEtUA9xCdYyxVNVEpywdTUt3GegYfRuC9QduGF6Hh3o",
  "key5": "5zBGS2ypcu4wbzo6uobfWtTzscYeUcrmaFRzgvx3jyyLLqpwG7kd7bS1Abd3vnvmveokirXCpr4Wfcp5QSdLdoLp",
  "key6": "5qVMFqDw7Qt1sVWjHUo6MFvDztmFcUjdiTxjgbMyiiVFVWMifH5dkDKKaZH2tVEZtKXevTwK8vrRMGsm9Knz7vMs",
  "key7": "5Y63NGEpDiDGpSsMRNa9vJCSYVbxJWNb4e9vkH444EkvuaxMpAG4xGWNU1tABznFpHVsLD8d7xRiczZ1Vb1xTsm8",
  "key8": "2wdr9vVCFY7ELgLSXnfo1VoHtMsshW9jvCb6CivRVDzEaX9kadbU14X4SaR9yPW5EuZpiinGaG8CxaMYn3DuduSZ",
  "key9": "39ZK1uw9kqX6oydp1H1Mo83Mjdv9qhUSyo7L7DNNSyVNvzn5G6D3C1GJu97E2Y2CjRVcriABSbZkNtyVTrnU2QMh",
  "key10": "21JreLSgCZYzvCQDYN9Ugx2nGQub1HrGoJkLsJpCYypHeXVT5Gt7kaWh8jaBQGedopPiTwwnBEnxFiAnBEUCEwER",
  "key11": "3YPRE4VTJtKkA7cDAqjWvRsHWB5H5FkWfr8xq1mY7FGAdJjSas4CkEytCDqakr1dDyABj3HVsc7DnEmQtRnF4kru",
  "key12": "4y7zATWrjth1P7cqAi8XzC4LTgPt7uC9vmFindbj8XuRXLbHNSwDom3jwgddFaQ6byv626C6JsAfdq92UthNB56W",
  "key13": "3tpBjmohuHe8DMKMPMp4xeAKp44WyqkgNHXLXRarPfu6f64g4a1nBx1HV2XXkDLMikGaGpF1ZiiWMDNejreHHyFK",
  "key14": "5MZVySxW4EcUqWs8N9V7Z9Nnohi5K9Af3EKdW12mUutyHTWWzThC1u5AXmoKxWbEhHrKct7Th642riLFPof7YCWK",
  "key15": "5fa1REGJCVPrWPzHoJjBBxrkHtdXPp7V6qT8Dr8FkppkqMipBHcPWZmkeHcNNXftc23gtCFi7ceeDsuVkbUxV2Lw",
  "key16": "4va5vQGctN1f9rTQh1YifDVM58u4pAFiwumpHjXacNvTznvFuTw3ZoSnoyDuF77sNsFufPBiVyK8y4q8NeECXKbX",
  "key17": "5uvYjrCvEYpirSdjw2DFcKmQrxFrQLbLu2y8yG5ry3evsTn3ouC3SDBjzeuJW4bjaDW98bSj96jqRPqk9xSZZpUh",
  "key18": "2fbNtimzsTkbg74oRbThTJiNzjWT1Xvi95xDvN9zhJZeunQ7ee9iz3VuU2cD9o54rnuX59H3xFzqbVzyGd1Qj8Fr",
  "key19": "5CbURssY8r57aYDXfK2eUb3323inQiA6aQ2sXiYZVUAax7tLCVzdNvqAdyWMvUc28neWWB9MCbCfq7oJZEVQNot4",
  "key20": "48crE7Gn1HVjWMqKraPu8u5MgcPHiaTNkx3yQ7X7zS7vU86gHbyC9MWJktif9rPMMf4VxFsMtRRr1xWgdGgto37s",
  "key21": "GE5xemdv8sKK2yWz3b2iakrKb1r9decH2HmBg1bdXwrvcHCPWFgB2o1MD8uZJmv8SZqWF5QAv2isV7QeALAQ2BD",
  "key22": "SurAzpprXWnwSyuV2zvsKQDwCkAwXfVvENdJj1se25o11WGMQGQpu5urcJG4wXG5V4akP13eYRXaTNFr961j4vr",
  "key23": "4qSheJJEFbKuLWs2vcWR5r2yyhJ9LuKLs9XWeZXwQjpuiY9Wm7zUVM9DQh5DjufFw5FuHFGbVPiugJyemF4AWpYU",
  "key24": "2mq2hTm5LLq9GjJG4Bo3X9PMGDPmQyi3ayE85rAxfvaMM3ZKvqCabQanT158wLENp7NpPLyFLGKTTtEim7nU8wpe",
  "key25": "SzgpC9YstaYcc2Jvvwm86447EtMgbEQsZ1n5usVtfKqjnxks7DdM4vUP9ETMtaUD7sNNCvbwgTk9bVLE8sjEppb",
  "key26": "f7HVqVnEqUz11LAstdSfNHQuu93D2QGEdP25B2E6hVXS13yPjxvQczoY46hkYoMgCFt36K2AcB3motMCw64Qgdc",
  "key27": "ceSQzy9mDuCwAVGgu1XMCHaUe3Rggety8BoznreQguveKqim6uUrQHvGfLpDXDEwxWbzrJrsXnBLtDK9vgYkBih",
  "key28": "55hTqjPiQ45soJgEicfPfGxGWqhmfg9PxUsEFikUL88pCc23JEbNxC3EXv8UEU4zx3wnm6knxXj4x54PAuwMrXME"
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
