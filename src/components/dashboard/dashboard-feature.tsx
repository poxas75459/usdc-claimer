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
    "37WisLngeRUYYhsG2511X6AVkCoBTq7JTVWa5LGML1s6KuUErWH11FXbHUsmxbBq3YMUHTv9ESVWFSuxa1e5ubK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVdtjWjsPANMaADgEX1qcg2XtJ5bCNxuDH4yVUvFrv4JPTgMm5mp2p1E7cvM4jiAUGRFBPXnmV3hssXk15T6Edx",
  "key1": "xeVwC9VTcNBtsGJufAEULvgUKsRKFrG68a9r4UgM45RUhwVEuBXjUK4XDosShYDfRLxC2spBSjLFCMts8Xhp2z6",
  "key2": "4GYWhGCTPRL8zvBzk88gZfoPLL7oWboBbXHeeGNEFZxr44deoyYf3tZZABv2eCLs1xErbQoN5VkVETiyoZghCnFV",
  "key3": "4ULnFW9pCrugGhjb9BqBmumsuE1wM18ysCDxxhm5oR4A2MahWsqrfMPtkoLNczB7iz2CFz59LfEEdiL3JixjVrrj",
  "key4": "2rfByd87z5oZLGhrpKg6WnN8Vc9NTdbEhWRTb9nNhXxrgR4KmH59TGnqb5jzsqXYZFktPwUxTyVii9dHaE65nu9G",
  "key5": "4Vry7pchQoEaR7J2UEfYmnE8T5GE7nSPERU9eguVt2X1TqTdnJ5sgZKVMxfBJVrTxLLAhGbZjYjPJWCBHx3LYSUB",
  "key6": "P9vzMQ2jZQnUjM5xfyvZZ8Ndk5NbP4HGB3ynn3bGpSWtwyoXGHW4QUYRAoipC9zo6AgjS4qWhWx6G1G8NKaPfMM",
  "key7": "5E5iwpdBwnWaog3eFLKmaWSxabC1jD16vxt8zpHBi1ZUfdZSB1Df9DnSphFjowAyfxBDYpYfXLxF1MqWBC8wCNC5",
  "key8": "3chaoioHMfP5GhqQNtT6TgBvv2qx4MXirqfffW3KviRvGtzYT4KzE7EkbYDtbT1kLeJratocjUctzPGUgkpKkPSi",
  "key9": "2zUsbstBrzKmGUkJuWbtcY6Z9bBbYwHmueuxnVcB8Rgdw7me2GcYJ9XTXBLczfHTn5eSRrGuP81xSWMCPCBWzTyW",
  "key10": "5TyDe2HZ6mGFAfLFfc5Kx1grCp3AqAAT2idd7LdviAxkLrm5BBv9Qc9H5cm7qiaQNrHuPP4SLwkZYqAHsUFPxfNr",
  "key11": "5ib7M5miGP4NspiEW9KiUhyWTPPkpDzeeabU1xx1jWUabGu7g1Ks1YDXCeScEKgUiTackc9QPi4WQUCX7RAAZc9v",
  "key12": "FpC31kDCvbfkZZ4q949KMDFYV6n2eN2K7dWvY81qTu5BLfbhDQpSGrwTFqAeva7RDA55fzE2cmqnt8PGUXvKVus",
  "key13": "KkXZ3UUP3fMjGXxQSr3mU6VxDKxV1YGRiXFNUAQVdxLgerhHSN7wbWuzsGJMmeHjWMGQEK9avDtEN8NDgCnXkaM",
  "key14": "2srrwth7wgFpsyowk5kgbV9iWRU8UxBmY7tVacDkDppzLHvug7JKAXD1kGgStUhKNLmxBQ9XN5mFy6kszR3n7VpL",
  "key15": "39gEmHeJ8R4xfEiiWsRLkUgadis4b4dMEfLpoz6VqdwcCLMfLswqXxQFAGnvNuQYWPxwhxMgp4t2wnZWLK5Td7LM",
  "key16": "3nmAqLKr7FCTjV3FVPQ5rWPzArVR7GG6cTaVLBY2uXa7C6gLdXU5LECQ1wfAnR2Fzy4aYkNndmxMzLD6GKLVJdFd",
  "key17": "5y97ayoRAqPa4dVpCXFMNLwL5C86hSMqZNSCah7KGtEq3LUPZz2tVmoJFjyV448zVvbQpGytevu8v6EmTYdwYVt",
  "key18": "2KFQYog8ncYPModbUciGXe14zjRSWmgjMovYd8brPsppSWCor77wA8RRLDq9fEJV4dYKvjHtW3gKFmSqijf7G1eg",
  "key19": "46nUqXB5d55XGGeWAGy5wfgg28rjnPgCCdEpAw3ow18TWbkTzo8uCuhC2ooGYW9G5DgAW3cqswnaY7h2AxrissDL",
  "key20": "2tADngeefjzLv8DQRzatqtfnskVpU3Ab1J7mkQmxZmgqDpQNwYtjP1w8AaGToUUXTKr7RAnMgrd3D8N3xXQEkhcn",
  "key21": "5VYx25PY7smYQ64FUnijvtPMnx4HsNb2JWd5pBbpTyBVtNzJUa6ySdDRKcSdKz8q9ErdpjXMJxzvDLWRanzLdjh6",
  "key22": "2UK9C4QbAahj79qyj1RzqxGbuzkq3UEUT7vyyk9QBJMQticKnaTrQZVJR5WB2Tw3hUNeD9CFpoR5Ky13SLkGBDzw",
  "key23": "2fJWPFDemjgG9dUfKpTD3ipiBR8cpzzyQES9Tka4qvd4La77ykyLLuEaRTpizXr2PKhNHDvPXV6THrHrkrdGLUVx",
  "key24": "3dy3h5Jw6gLk6U1F9jqPQxnzbHn9jaHS7jSxwS66MLeKJZGNZPRoiKHX8BKNC5dXv2escqVKrn85WYMbV2PNKD7P",
  "key25": "3DFWTyEHzUdUnYSzKfTy2cefbAJrjLf3VcpjA3Eir5mXKc3NksBWuWC62jfArUQEsFvvV5pRJ6XhNCKFZQ8fAbZe",
  "key26": "4AwzrS2b26boen6tML3sXv8ggoNzpUo8bnPUcnNT6tSmMb19fs76mxvqhaVvYubWnWcW11GjtwAKjmqTGJSXoTw5",
  "key27": "4nUpnUERAMqxAgr2qxEFbmwd3jNFhTXQG2pn96rLgP8GGaEqwrnLmfeqD4j16p5EJPThpmacCRwxyfPpWtE7LEH1",
  "key28": "47t8kkbk4mePbE4Y32j8ECp3WQuK34JY7RAYsL3iHKxZL3tKb4tn1GJi7GYCeneBxkho4ar553BLwSsSa3t2QKR4",
  "key29": "3UJYzPdUqeiH8qFagTLQeyu2W9Vue3RtdiryR8g5krnB7ggQndv1QgYafv4v88xFJQCwtnE3bt4xLrDWoVnPK7kL",
  "key30": "3aJzamHGUa9snjQWdj6JokjQ8PFLYVs5h2qshhcBUYUSjQQQrN9SwvwxQUgLFodaYdmWfHYMcaFeidMb6b2a59Dp",
  "key31": "5LQfqt6x9Szg4q8LZsXySzydgHXKpjmQxQmf8f53CLs2iXVy7fVQepJUeYPKPjitXy5oWipKxCmPcHrfamxWwz7s",
  "key32": "48bLgfDQ9TqvmBh9yLqhyL8FMJaAvWLjS5z22SfV9KGxf7TmmB2tRZBBgiMJFe9K6388VgN7wJetBMwPUTponGJm",
  "key33": "44FPQh1G4yW79EHX1NiMepwbSqpXGrTa7DczwDWzhdmZ38mUDM7nvNgrSvWiNR4uShShkpLTUnS9L36T2JJBe4qA",
  "key34": "3GDs9AqkbUYTBuchtf4qvJystg9BX6nUHvAaHpZGke1bH1yJ8yBtsCaeiBF66oPeNt85MypYm2pKbuuziM7aYeES"
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
