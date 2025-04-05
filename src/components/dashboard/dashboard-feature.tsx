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
    "2qdQjPYqNEmrTLNkshxrC5PWY6ewtmh7shTeveY2vpMTzNXsU63SNF1KWPnKjbU17oLRVz3nALFBBQsdB74U1ieX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJFUYVn3bSWAfoZH3rq3Rc2zspZkLqVQg8zkbATGyquzBK32BLvGD2YSBMqniCmqJV1bHGERKpeFJrUxNwLXKfF",
  "key1": "2XacqsVDsdgHD2qznbP114M4vaBF6qD36wW9CZZvVxVGp5SfjEnvwjxz4VqQz4pCciY2zKTbwuWEzi3tCTpY57sF",
  "key2": "3r8PnapRirCNKtsFvqZgUByVgYH3tXSqKejkaSiPf2X8Ym25rA4AEPX6ahwumsFAH5Mdt34wCs4rqnss2V9L5TDz",
  "key3": "25m7EpADCwzSaPmfbZv337RsSQzT5yAfR44PWvfmPhA6KZjKRbJrEvLwaddpgM942P7yKhk9AjnY18o9Nnd2vdmF",
  "key4": "Myq8Lcs6Rg8FD1FgbqfKDWt2kahcKks5bAouJ4jgsT5qxUi68XyrYfZVGpsDiZXBV71po4y9oEdAtY8SG6Nugxy",
  "key5": "DLuUxdaqLExWJtQHcn9KBukeFz11hGP5wp7KxNGMxde4P9aeDuTKwgD4xML8amfuGnX8pbmk2Qq7QdpFp7GRmUz",
  "key6": "3VLktZad4bHHbmXCbBdX3oHFRAg1hUWJCqbYdVewJ811jJEBu3FFdAYeis8eMiMrG3M4JPHXPMyYLquCryuxHd42",
  "key7": "qxnWbBpMW9u27JtkbZ2meMqsiBWKgoibnK3kdNixev8yoCDYcNePBD8SZshtEiLUoCKCKAfRDwPrAWjJdtGyJS2",
  "key8": "62Ya8AETUgCVjhDN2k6A13fUctryJhsKCwF1EjFtqkNagJJZu1cGxsXysutXWf6QRfRhn1MZz8AKJQizXo12RVa8",
  "key9": "5eMzhxknAEHaCPGcR674PF7RSidJEpQKcxQNAKoLmAyPvshVZnZ39TPRxaSmp1Qw7MLAHsR8csvhYvZkK5ZoHZiD",
  "key10": "qYg3CYTkz6XEsBjgVQjrPMnqssNBfDNSvxQKPff127QXbQavxQh5aEJz5LRd2xb7u9atSdvmP2TTsbFHzHyu614",
  "key11": "2QhRRwFL4BEfC6i4C1413Jy3sDm9Vr4cXKK4ScmrR2WsQ68PhPvFiGbBaa4VokmJrzCdeHgzoBBaFfnKGUiF7bEy",
  "key12": "3MjLU6yvKwFFfXUZmAsnVZzDf8ctvDFkVtS31mfQGBzhJHZpWfZGGMgYq4PAsi5aGoVybyCwrguDGnnWFT1veLRh",
  "key13": "4KaW9QbZrxHgoNzfF3UD5XxERisVDv6NTLrgmAB89VFi6Wp3Z9uTTK9JoiPVxuZ7Lxeq1bymv1NYJWmYkK9MjjKd",
  "key14": "31F1HnDAYbyF2wQwekMYybnMxDKUfNVVDqMd6GTwai51MtyTDDNuma1CK95KmQ6ZdLXmQ4SEGmefkj8zFjSUg8ae",
  "key15": "ba1hYr4syifTr8U5zfjJaj87VQ17ju8XNMDDMAAWNYatRf9Xjpi7AQxBJqQczmFm8ZaUfy2bfBHXdYxDvkqYGpm",
  "key16": "3dUX9tk1TN8pJPf5f6kXqHdc7kyNFHy3wsPTSkLEjoURjsiyGyhZCKTKb9E96qScktGk4H5CLUd8qsNV8YRiw1SA",
  "key17": "314WoG3ihZeKWEVpHqwm6TFzf1MNVUPd7w5E45f5PS9xhpXuYaGDrwSyR6j2eyntd4iVS67LGnWNZMTthuJHvvc",
  "key18": "Bp6H88Jp2TnrpgqSiXDUGzjCoJ5CW3GYqAWFWZ5moLZvc8ELkpzJTFk5p2kuVYfpyxrmEDLiGfk4fRCnKeLeNLu",
  "key19": "3paeYMyf5EutEgCDFeiL7mBDYVwHS76T9akBsD6stKKjJeyj7AKy4zGLXAjemafzEtpZzPS3StBciaxeF9QBibor",
  "key20": "MUhSYT7Maw9V3uM76scbJp4GJ9bQ4czwhruAEfQBy1CCBhffKVLjBb4jWa8gfCnmsdiwNX5Nn4AwGJ2EgcXLsgt",
  "key21": "25mXnmq7bjB8WHEqf7FXu2bLd22PvPBJNn2x38TYWW4hmBQSQLuyCKrR25HarARmcq7Fcjd7VT8EmA8dcbAEjUyy",
  "key22": "4kwSKBhte2FKdbU3qmVxuX4dQwy2JdKZjdJDvXZUPSpcCrfN3eKaSb5to8ACMPy3PHWvKQeBv6pQ8K9R9LAVDSe4",
  "key23": "9SgGvH95chtNHyyN17u9B4M5qEQLxBCV2Ffy3kige7ZudLy7CqpabphmcfCf2eV7B2njrT3VL4CHRQCueuY46sb",
  "key24": "nq8XBpC2sfWGd1BKUuSnUsQ1NwyLQ9k9VAtNPuLpi53VaWFw6vEckt6zZMj9m67tKeKNFtGJoek6bBp9rBoygDF",
  "key25": "3XvPuKhxi7rqUvFZiZUDaYD8oP425QvbBv2F9s983HrD4cWHnS5iZwRtW6fnwipqp2eq2X4u88cRGXzcQ9BXoHH2",
  "key26": "3Swm6TVxad4Hi7VEzGZoDrNiaEmujhPdamokngJwaEBBM2FEqegeSbubrhFrufuKkur5XyTw1CtZZG68VqmoQeGE",
  "key27": "25gHBDyNR6fWEtoYEDF2nxgKDQJT2Rt4Fkq5UTygCozphD1WsA5du5AneZmuZ9nShr5vwhiYqYkCyue4WTq8kaNr",
  "key28": "K9L2roNQ1yDkAtfzpJ1GmW3p59rusYii7UYYRH2nyjFp4ZbTVu9KWrJjuBV9vQENMCQWWNoqaLQKh5sdB6jwtkM",
  "key29": "5iGcaNaATCCKRJsRb3XAb2HhyBVyAiRCkq7wRrZ9oHqgnNKKgrq1PtvDXdVXCwWB83amwWH4qYBzQu4L1Z2xaqQU",
  "key30": "5GbG269CUunxFCBXdQNw2PfCME7z1R55XreM5qPXZHXKXHdjbqdPgD7vXRd1Q2cX6QuKSBtCewsNZMJGZJDEHJEn",
  "key31": "3JwSiyLZbA11diYnUopxnYYuozF74eD4putUWuATU78j4kxQeYSJRn9czycJXQP61hnuc3rfsEnXf1PtaBmbJhw",
  "key32": "eht3TZTd1J4hZL2sTGiK3edYwECmqgum7mj4HSHefRuevqV9sGPvjvpcuGEYgyndoS3vXo5UBMmasbZrgdAtTQj",
  "key33": "2Q8cWRAZ1d7VUP2c8JUhAPrYygEAqWUCo55utqYQhfk9cZMj2JtPvEYMVDh2rJgbJjW5nwS5xB21pAKjT2VfNwLb",
  "key34": "3WUxyPRgC859Z4ZtEhebxi3UHbXedzwRkNWjjsbSGC71v3PF4k8GGmG1JKBsjqruvmPJQYwZpAuL4S3JZmacWgkh",
  "key35": "4CUfq2KZqXy7KcW4ueX59mcTp3HSmrWcaztKrWSEY7LspmpNn4N5gK4JNNUBGDMu4MrXZGQGgYWCWCdBLcXRC8Mk",
  "key36": "2AS3Y6v6gf7tJyjv4joXNqNgZvrvBdfLxQVDeSXJkKuB3a98eVTfeVse7dcGrMcA2kptnQmpLZkPcFaiML9NxpcL",
  "key37": "25GXFkFfDHqcDxifcxzPVkD9eUuEXpNFDua5KFCfCUzUW5ngrAqJBJbsDDjWzfbnbmmRALpEFditf4Dyy9wE1S4L",
  "key38": "4SoR9KvZvp36QkoJcfNRS5NjwV79CMntcgMCbjgUQudUcMQT67eCoYohbwhGDnmiNoXj8zxzNiETYHNHRRpWhN1g",
  "key39": "4e9QUgxtEsw2dQHqsnLx8Kotxpt6wSpaWHFjzHfMudyKw9hkHGvhLwDPMrxj8v6hJdDpTP5kLodSWV8BEfqWM1x"
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
