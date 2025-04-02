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
    "4JF91neW3xND1PXqSW7EobyrJWZGonoAVdi95oVSHHXJk8MaqVtYt4xyFwBMRq1UzyX4v7M1mKoh67cFyGtwBJs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEZrMispoUi5djonCwKbDyBKpgnvaiiga7czczSRRZ4Y28vRroqCrFimSDk49e9Xve3dGNj3UZ5n3ai158ZfXqd",
  "key1": "2F1tGe1WETDMowLCRJVj4spH7qorxpG4sHLaWKi192UyAezRVNH46xUAzPLH8DHStbyAFpKfMZmtjFkyEzuH59zb",
  "key2": "epF7G7bjanTpTH8nBKPSamFhu8d2M31z9zTuCqcL9tKiypquUcfh1ySAoBFPY61KF8wFcdZRtKSis2bLrqbget1",
  "key3": "5UvXKv8gzLL8nBEBeaX3gmP5QvXmX4FUwAFKz3tuRRMdSgETtwUtWgvEPUB7Q4i9mUXQsT6JeHzeRCRkhc6NL1KS",
  "key4": "49YRCjFgoaaSNpaYMDLAQXKezrSZr2y55X5eQe9j7HNCybuj8K95eckZWHxTdozwbgDcPRXTB4ymAMkFvURC5hCD",
  "key5": "5cuVsvkDu9uBxM4u62FPK99X4Ag4drzN2Jgpv9DNEr8V62v8FEv2LZztt7Aj7fnQzh47fprDPX8MjrCYAyP17msV",
  "key6": "2TcuBq9x462J6NS5r8ktzjoM9CiPZhkdbeMBzvhVQSRAGSeShxTRLgQreugxgMjVh4xXyTe5VJhzyomzzLJwU64c",
  "key7": "2bfm6tpTC5aAVF7X7GMXVHzABCM28P5HGiHtRMqumQKPKM7RAwXiHqNeAEDwKXBSGYcyeM4WfxFjJAncrcewrfBe",
  "key8": "HrghCQjQhsQuycCyTCTDdLm9ogiEzxJKoRjYkbwQSUcMJMaKBZc1xgzC3q2ADduptUmAf8JrSunN9BNnAwRvsUD",
  "key9": "5LdR27BLsFoQks4xg2f93vFRGm8iqCQKhBXcEeog1XYUapdyqZMR8wFcimmn4Y6hPbUsEH4edSisw8HVrVbBUUfq",
  "key10": "5S219jgWEquvNodgyCQMkajJzZmCPRpyHmEmpYryHTHytq6Y2f5yY4Ru8ZAQyrnXY7tEttsCsLNKJfFLZpZfsoei",
  "key11": "4b5eccaQrvmLAJf5rXjvdqgGJtLuhrSXjZAnWWjVG8n28LRARa6kB43eXyKTupJm3D5qimv6WqVq9tCfZN9EKcZC",
  "key12": "36g2D3PmY4mFBCUhH2BNbAbJUv181GZ8CEvVHU2XmoUEQqvKycoTuBUNDABrfdiWECvmEZj738gdXMUzZT6oddNG",
  "key13": "PB33D6VQJoxGGEwNR8vzCXY6VMyDX7HZWcosvFmEHb44oCjWTkutxee1Ytr39W6HUPNvEvAEeqZme6TKM4mNdqk",
  "key14": "4WKDbErq44SndHUBfxK18AHe2irK7XQCKi3t5zCahBRRK9Nf3UEB7CxTFeSVErMoH5tfLsVPULxorHioHQ3Dzsnu",
  "key15": "4qNhC6x1NJuaR4sWEQr1Ssoq7LS4ArxDmgbKsTabs8Pb5CiMUvhRhYXAduKJgwxejxdaXb2evKbZWvBvRuNrqsiu",
  "key16": "27rYGFJ1JtecfU6FrekJVZLED77nfPUseLrFDGNEyHPH9TPR3957ph9cfiWGG8tHrQ1ALhBcui9GoeDkVJVFapbf",
  "key17": "43u7VAR7BWiB5gGtHtSzp9S82KSNbjhYS3ri9mpZH35hDk9VhFActcSPFKRrRSvRhMpR44M5ZkTsixBNZ15eBQ4G",
  "key18": "2aEgc1yfx1zGAnNvkdFCDhjhdkXG9QLcr1PHVJJuK71mbZMZhGbHZZbthbFLVaPq9soxvNnzEmHCgAKmYELkxTAx",
  "key19": "4Dk4jBcWNkMqsM4AXQtnUCWXbBeMnY3hi1mydH6q4TxjEnjjMPsF4YxFyWTG8ZvAoTNUBMZZa8vwTqGdMuiuyHd1",
  "key20": "67RJvkjFni9eizaQZLUrS9owzo7i6ib1nDmWDt6Nao5Lb2gTyzc7dL5QjTufnd2vDB8FQK5uXwNwXvpLP5oYSm5Z",
  "key21": "5Ctqcw9BfdAHsTh32UqFChBi3xkaz4ANCKVAWNLDUqU7FxDpP2AYF8ZRAFwDXZq1CmgJ7MyL45ysw6fHZ6pRb2Gr",
  "key22": "2xT9Rx3usDA7QwqeQDeiALLSzYbkRDvT3MyDRrMV4pp3zqgVgsagzwKy8WaVknDAWXgmVLUPG4dXQmJ4uQh9uJnT",
  "key23": "2vEFcQrGPju71DCaso72y1r7hCMVqsV5AoBdU4VyQR39qNdbXyyXJAYKbfkpoBQWSTQLJyMxE77ZAPt3u9vc3vjp",
  "key24": "2pS6AGChbKjcm8f3EFLPXANJt7vnozhYXqRAkCagcKuVAZNwJJeg3H7Bf8XDdthjc8rZrXNx26qi562NKYy1u3LA",
  "key25": "nZgUX2caQhUycJEkK1WckbFJqKxLjur1HT74CE54gJAtQHyCYN4JtS5qrrpEDRdJphiyNTH132JTpdj6mpJd3qf",
  "key26": "64V71N6HKpoFegihnPhwAHms82JwkcPDRC1aZXsrHaE5vgZqsaFf5B1xeb9gnFCzCtuEE18UwA9Z8cPRQ1ykKBEF",
  "key27": "564t2Qp1Jsv45wfMfGjyZxGPg3P6QtNVHUThkYVJjWfAoP4zqNdCZS5ssMSzKQbTr7SdwcXqH8sFR6g1pPN7KgH4",
  "key28": "2EkFD8MNKL7CVh78Eo7PkXF2vQfhyGEkZdrpwBEVJYZDrvXxQuXkGDoHdimLhyJd3RTddSc6gPnYu9dnoqpKaQFo",
  "key29": "4VBnEFdzFjwv3bQs5KV1WGm4fNMvq8Ew7TPHxXLph9bJ1XFy8H5BP44qXzpoqgsamNj4ghNhAbnVTY3N3rHnnwUs",
  "key30": "5vVH3bPG9FTcbM4WuKt1pEdHfY4Eb7qpm8JzKp5tbAoCHdQR3ozvfUb2pcLHKKRs7RKNxjwqJ9JXz2VaUgQpUeCq",
  "key31": "2YdjQfDiB3hY6xv78wTv8dzRrGgprKfADfiBEnM7UPQ5LSnipGQ2dcUbqQ5LdbuRVnqSUWe7gvLsU1GWwMx9u96C",
  "key32": "46GXBTEk55iHugEy5pD6q1RuZfPbd1p9LUqqhbv4jhcC7y5rP7ja3kgheWCFAkq95eCFGcNLc9ojP1ZJrCscC1Eo",
  "key33": "3fFXSN6jVBdKsCVZjEeLW2Z9ZP1qHwoVnpzD1agPM8nj2XnUpfb8TgbbvfkPwGjohv49QbE6P8dAjfXWiT2rGmYY",
  "key34": "2LyxMjMWTArKKRgjfztNiCz5umsQmZMQVwybPd1LeAHv2RgxgAuamqMbdUm2C1f8abxvVGjTTJA47bPb3KgoAqqu",
  "key35": "3xVBJjWV4qv1KCo7SRu9W8tXtRg7R6gHZ4hp9wgLeNd6gC39jQe7cdAooNG1PaWmfrYNVdTgCthXg6r61tmkYK1d",
  "key36": "SKd4Lj1nAobDXt2FFnzaEnGJnRDQxsL3HL89EmvbD2vnRFb7kBcfiNkS6ZyvdSNuWv1E8v1dbW9SgsqR6uHgwJA",
  "key37": "h4ShMcn8G8mkVu1vufDMfDkeCiuERnkouJwTta7PwEXCYp8Hu8TPeDYds2SdoaxoUyT4a2rzGNLBwnBKLUfcMaj",
  "key38": "5ofvPS8WBSNd62RGLKfgUJjQbwsRJLbmjNbZnAbYyR4ne68ciVf6dRawAsZb2VxNvzp9PiP33kpsyZ131b4D5hV8",
  "key39": "4vNsn1KADBu3jqAKVjZ97Fb4Uby5ijNCBneb27pWLBuF1Ad9d2YckLe8tbSQAzWygwMecTGZnhmVDyoFQozGqHaE"
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
