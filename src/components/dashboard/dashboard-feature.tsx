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
    "2myHYW3NCDWA8Tot13nixGff5xf9sjV4Qcz9TiJWCHQJt2T4WaidERhnSLHvaHVK4ufTBZq9y6u1GVnoWaHvwxEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UcLpLGF9gGW1va9APgcYMFvwVPY5ZhcPTQVT5391zGHnMKW6568zRAsbnA4BRhVpaZWkDDqdfrBzprLjFgdaWT",
  "key1": "2zU5z5tgCdy79Uq3LmycJXSMHURqFkXyB4XYtSeSG25dRQeSkp5fUajhmYMkHjGJurzHR3QsTDZsf2UH1VpQzsFx",
  "key2": "25ue5qpHUJQTXffaDFQfZTtAZcmCHm7PMgRbsfMQt7sEMsHrUxYqCqyyNsrQCh5g2GUTNkRtEwwdh8VdGqyUPAtK",
  "key3": "5GeFaJwZU4Gmo6PCcEhAcMs8bie9SQuuM7oqxtuzfP4Z6naRqnUxwUWnwW5oEqDLRAzJsTEtDt6ywtR2yZD4sxJz",
  "key4": "35ZApCfHAu6onbQAUhti98GPDQjetCU4x11NarMKcuzNmSvAhYa1xHZ1kzqRSjcwmb8Q5pg4w7s9i9Kf3iAAPumx",
  "key5": "22Yk1cmopR1VwttrM1BQ73fZuBpCkqR51XSVPCRB8Q1G7XPjmCSNs2j5mbAaJUEQMPspgtnWZZjMu3TBpzZb9LHn",
  "key6": "4E9LcVqHC7UQomD776de9QzWWj63TsDY4zedZ4BxvwQB7cCXwEdE6dTnsD2UVbmEigs7dMr3wMseY8sTgFQwuDJu",
  "key7": "263oDhgKdwrMFaaRojaUXCUhfCWvWpZ1stcgDs9oVc9oZB4Mavjs6M7ND8YvaUxiJdjvSeJJYerDxZUyxNs2LGY3",
  "key8": "2KRL5YekRMcjpi9eGVcDsQWVqhVT4UaYR2eCifQEXPayVB5QGuApbDuSEyDeznX8Sfd83X3F6TyPcq8D1WiQGzkC",
  "key9": "4Keby6zbsAGhMg1Q32XNY7U9okghgMj27iNnQMWB64Cc1KpZwFvwxdorvrGi6TxzCU9Lrwp1oaWWqtj9BURjcD7m",
  "key10": "37BrozzffLmgMf9vwv5VuQ4eC86Je1HTs8C9LpWBDuhsyQZytXszjkyep4Dkr56QmuTimRwTF9EtgEeYAQPMaaib",
  "key11": "2JVsKtbVKFvTZ1giBH1Re1DeAdHguzZu8yeHDbQGz9rLZtju5HcxA7AZPPtQUPLcyMKD5yNAe2kgB3jGBS2F9zD7",
  "key12": "p6h4JNyDsRByZjZ4r2fa4UV57S4cnC2vTB9FN1Hhc8JQS4f1ZXQSgLDUn5NGZ7wGYTLTafjcCWx1MWx8gttugUp",
  "key13": "5XyRwTYgASTBkQ6S2EfdCsgvFKYyD8RKaUYBTSSDrjqf4SugUYAUWGUMW9ZhbR5kYqcNR5FN5pkJ2qiZQ3a11y8Q",
  "key14": "5sGLoucUu6umGL9mF7CVz8HmP6vLzVbJNKrnAXb6vr31fG3MUkDk1LbZLKLT8d4Z1sFQsXCUXjbJar5d3pXSVZLn",
  "key15": "3nXSzSTkohMkW9yruuK6t3oKfyB9WQaLkZ1vwpcLbiJzz9EwFD97cv4mGSmAwddRr7S3BodpoHfvi6bvEoZbj8KG",
  "key16": "AiUnYKCJoiBNtNvqX9dh48uqS7vy9LhUJHzaQCR5DYZsRoPDnjtZgX885gd5WxqqtWpQ88qntw2ZAcmX2NpcQVK",
  "key17": "2qLYdsSetQ6n562dJvtNsKsz6YMf9hTYZaqgBJQ1MrjFGewGwchciq8w9xuePPYgyJkFFD5JJEm6xWRxP5aSYD38",
  "key18": "3htZm5jatShvhWJaTFELWZAA4oJvA8DHr5R8ZArjQ97praGPTAtjM9ZhNWmZoVsmvXszdQCZTDohLsqf9MwAysMW",
  "key19": "2y7u9gkSM1AbUYxoWiMARWaHNgkaDPVUhYCEH84F1JzUyFAy8QEFC7f7BYJeAbJkd3MBj3LWKanQCcy3iFjAUM13",
  "key20": "2v8u6mW8p4QddZnfuMqPw21UKSDxDcA4QcVHr89SBMWzUgGiZqVg5b2BfkGbXBkC7C6axLY299EJpkZvcbb6fpEE",
  "key21": "4GAh1DkN9DDE9vBzkvNSkaC5VijzsCAy9fZUisa4dp4fEvDKwjTH891MgEFmkNhB9KgvqseRXP7W5mQodfik8n5k",
  "key22": "4F42zKFcwqnmdpmfSKdVLgyVc8qyWpcFVT5tgD4A913Kg22a4S3UABVm4zi6LFtSzvdvgyAT7dKkSuy7GnnLFbBn",
  "key23": "56z1nWNPz7p9M5kr9NgoDKZe69Np4MoSFuzRXi27rppSxmwVrTE666oEXWRFMuatQkvbtwVXiDXmGU4sxgnv5pWi",
  "key24": "4ko5ZpLiMZVZZs9gFxoHNfX2GnyjzCgem9XRaq2QwEX9roZbRCBrLi9HmPqz5HHKhAXCpbM7EYnoCZhRjCJrjPbe",
  "key25": "3QPm3hSpSAQ477taqaHzgZWGeFyTK7NYHrHHq6unVkrcgYpEB6cAHjZeQoyMXzyoveuUY4BeGZ11wcv1FfXrvmZx",
  "key26": "yd83QKUrCWCLUXT9253S3KfpxuCMge6nbNPFGMzeZhYXhdUBpZSZFzXcnpkCMsxtrfQftKMEBemczpyEfJkJqm8",
  "key27": "5g1fdXtpXDHkacpb1ZNUv1vio36uN1wqj8h8iWDKuV1AEkrUSYLQBzDQty9oSCyRVxFUEQN6chyECgefmFfo1cZc",
  "key28": "2PmzFcGTGjxpHvGmksGKuhtW5f8E3PbEn5uGTHTwXBoSujdBB25tUYxzybkpLERK2S2TSTm1nKzm8592wk4y8cbF",
  "key29": "9rWSoup9oCdWNFB7EchjfpYabm52Dhb8k2G1LtUrhw5KtQMw7tozZtSmVX2EKnhbDBCdxmWZzLa6n3KDUuVh8UV",
  "key30": "4V64wVRRQTLR7MY8o9fKhsFWKvQsqU1T99wkMPewCtCST2Br6zAaMqpRqfbFquwsBT2GktPYU3sEo2hxgKh77qez",
  "key31": "5YnedeAb7XJ5drdPbHL9CJW7B161W1oYTaYns3eKvHfXP2d66o9iD1ENpULcTh7cnWquQ9Cw16388wap8X1pMMoA",
  "key32": "3JhLZfR8AUcZu4oiAgb8Dp4mvkcouzefTY64QrYffSfcuJzrccEKCdtSAk8DuxgF5oFFinYKBvj5nBQqtxd4ev5H",
  "key33": "63CKudmxGQYPTTq93EUhfJqoXBELcY71cdtCuXwj2LoTiqK4D5inYd96ATdY5mqpi1srDrAapbiPY2wp7AvWXQjW"
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
