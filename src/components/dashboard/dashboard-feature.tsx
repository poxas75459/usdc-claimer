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
    "2VbusRe8Jfh5fygu9aukGsnw5QjMobUUnMVBAhtd4a1H5GypQXuBWHtc5kgSzxki5hCkR59uikDd2NrezAN4rRHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qAX57qL6mHzYfear7fWVTjBvcNGxVxzqzPsdJ8HF8hVHV7pxucfL7DH3k75g4zrhj2yaTkguBAB5hEFnKH8LUAg",
  "key1": "3VFHMEPcfUcTzE7bmsBwyHPbfoPtivWScgyh5S9HF7cGy1VJHWuFot3FZqWn5Hx2g66XMqwqMhj8JYWvkNTAs1nU",
  "key2": "4G7VcENYfqCP7nY9xei743xe165ifJdSi7GBTqe4SfnopvobuxLmHfkWEqdUoCPjnCEVCM9jjenykSZNGKvcAaQz",
  "key3": "5Z5JWymBEJbXg9CMEeiycW9mrBXTDU8DnJgwQiiRZE86Z1e9Eu1oULYPa5ZzZtin67SodBHorkFU1V3RrGooQBdD",
  "key4": "624ekQDd4GUDKKd5N6FiNYJSJULxfrqNjEfy6kuNXZyxeXJo5NfzAARZLZjUbQMHdJogsWWVZZSWgHDFtvMeBSUS",
  "key5": "54uMzKvi2xR5nFsE6DL4SEUfhynzT5ko4nwwvi1oVkphtDvjoeCugxHkCCgZBMXYKQhYW8q5ASe18fD93dRa4wHg",
  "key6": "37PPh1iox8K3oybqX3sDjNV93PeDpyLSJHhiNLS34zk6wxSAF9CHrYwi554ewXNC8GqkmWehAD81rCrmYCL1mYir",
  "key7": "5xu4qJd5BrZ4Nt3zDnTe3As4H5eqR9mjVc7xK3dZ4ixYfNTXDwsScgic2XVSPsHbGAJoPho44MvCF9ktAELr382z",
  "key8": "4kP5jGpUNLe6ywRZo178DKvRYqAdRx8Jr7JQn43vY9L7EdiKEqSZVmFeN4QdjUi5yDJeuiSPCwyrGgQKtxK6og18",
  "key9": "54kiwh36wDR4gsjj6meBEv9p86FftajEiHrpCwGUF45kT9qkDCrPzBSQ88hKfLSptwCgtUNGtVP1EZyUJmv68doW",
  "key10": "d6tfpKpuLXzVUBssWBjQPnQBddF8nyphTTDdDT3tDdHz1ibUW5czr9fFA1shXcoxQ3epGgpZiviT2xqv3PQAQXA",
  "key11": "3yPk6ivCBP796MasRaZgrvaW9pUJXbS1saSkj1XpKZiuD3VzC2aanDr9tHcoWj8Z4huua2cTRZsarGk2eWkFZDNz",
  "key12": "yMwFDSur5LdLQAhzDntaqNfdbqABS17sRwFLAQxZny8CrgeiFbqDRoFpc8WuL5FVDSPVju1CrApTuoUfXno1QyX",
  "key13": "5TmuyYnPKgxjncGUvWvFZjLgrptiN3Z6QRY2rpucYpWm8m6cP8qW3oo3VERRLP25udS7Tcx3ueXpgp1ruGSqEban",
  "key14": "3ikE9aayTAvSixX7tpWtPXSLgzqCtFLpWUh1RQkYLDtU8iPvUmQZzw4JEvrTQVE2ZisuLXYZYJdYr55WHUikTYy8",
  "key15": "2yxT1Tyrt7C5BcnSYEB7mjvuznnPmduvQ9Ze28FWSDWcY1aY5BWXR9E2umgguXf1pz8YLRzrNDvY2cjBoTspB7AD",
  "key16": "RAm8Xg8pXA5ezH14spFcnVjA3mT927unRAYH8frw7yDU2D5CPHhP3nxAYud7ZkNp3dEhAFMu2c4KpyovGuhZpMm",
  "key17": "4SAD9Ezf5gudH7vpQtUpEpeG2HMzRcaGVF1eE2y2bXTosY3n9SYwb9vcqWePE6yVs2tfLXSohQvc2DRip9TjsyBw",
  "key18": "3j6b9AUvCpjh4NcfX2XSXzr65a8yZYm2hmvZYkzdcBKEeoXFfXPhivVj1m761UXEMK89UHL7XNeAmcPNAwwbz8eU",
  "key19": "4gnXqYxYe4Upq5GYhJuh7gzoeu2VLCREedH8J8nTyk4TqnUF6yTb4tMxeiux55CfuEZTAneKG4oVUPcZFi8ZFquW",
  "key20": "31JKSxc98Nn8G2b66MjaQ12rxwbjWzethT9FsuoeEa3aLLQ2fb5FNDGHXnmmDCQ7bm8pHeFnkGHn2hNeHDyLCa4q",
  "key21": "Yf9izTMsyB1Uesy8vYMxzgyAydsXwLE2DfYkydbSPxG4afnhWyFt57wen1Gh94gE7SVEDsGhbDLeJjGjrTUGHAV",
  "key22": "5kXUd1mxEUmMW71oUVsvAiCnZBRTLotwWCatRLaVMbqd7BHiFVu8pN8VWWLyxebrAUMEiQ6NVnG4LQ7faqmp3WZV",
  "key23": "2ZFsqtLehdH94sFGN3rz3tb7GH4qkQUAnwromdMxohA8k9pgGzbL6ZYrSnfkTRK53t41hCZWp7gRePfymjkxShek",
  "key24": "3wAJPkeSNxNUiTW3wrDUTTZhehd1JhNdzHC6M78CRUPushsRM1sCp792fSPFB4WP1Hw3gy1UrQaLQdKEec5gNUuW",
  "key25": "SWzM6Vge4VQgPyK5T8X2hxZwdLoLhPG9EAHULcPwn6ZCU124GUGUBPagdyo75QQacPi2sKUgiEnQ5hqJbDeXCSK",
  "key26": "Ud5HyFFdLLa2fpPkoqULvTwyWMszHWYMwsQyPWXUAAUUZbptKAkH1JBwbLoiAfUwdyW6PY6yNJZ6TMMBYVBby1Y",
  "key27": "52BuUTwXa8JsdRoBxk2zRJAqfdhKfb4y6r5KmCm78JtidWvvQGG7R6Ka96qVAhxeGdAwDVZWSBJXSYS62n84fogB",
  "key28": "4DixN7MzX6iZr3KCyBtBM7XfRD6gx6aNtEGz4y9J8T34nmNvGBFrpYEJMxEXqpk4JNmYwFsd4TvVL9keaw92FyLa",
  "key29": "3QP7fsBf3bpMQRCumuHCQaSzsX6z6rMgfmduzSfDxBuFh8SLNjQTovmNsC8L1kcrb2jbFRhawfgVRkzFZKN9A6J9",
  "key30": "2REmMtdCzhfJD6aEAnrtG6hFPADMnqfXVwqhNpXhaJyiaaKgCRejRTx95LJgk7uMENhJK8bFYw5YaaMeoGvhc4Y6",
  "key31": "2dhuvFp4cKburUPPWPvNKLLsyJC79Lgv427a1bz3WrNJrxmRiMWB7zdghFBKjKHaJMqSf2sTo1JwhPfuRDkeqEkx",
  "key32": "38f1AZepMFHRePCsEjyLfGB4dgs44kMPca84AWHuqFx2XTFVwxtssqXbH4rSp6bqe7G1Y7AxcwHDxPDMVmFvfzkJ",
  "key33": "jce5xau2qZ8mjzJ32mEgRGbpPaX9t2QsFRFYHRmpGUUhMkXUepWKy3KVzQqX1MtC4DLAdVBiW8a8V9J5Ggqj8w2",
  "key34": "3jvuhbNEBU3SkYhTTwXbxd5PoXtxESCASFsDuMUoEASzX7ut46kgHWWkX3mQksibxYnhGQUEXQLfa4Agmr6iBj6A",
  "key35": "5NwkZMcRkBo2DgShBnHzbt5Xxc5JhgmSb4T9wHBiCxuZciwY1eL2eBhiSFYzuXphiwzAvYPKqDEyTaxNTNEXrqFx",
  "key36": "4XVVMCHr4rYrM6twW9Cdfx4s4sKF3MP277X1X6RdSrePEZHRAFJ4AkfKk2177SKVRhybFJJhVQHwPKFWp9tL5kyk",
  "key37": "3uzuEittnigtU6w9aTG4A9jQhPHTYMAxC2gZzw7QDgCv9xa1UULezrtkW8TqzDP7d5ASDYtSptje1QWqG5XqBvGG",
  "key38": "3vPEXVCn7J84y31ar3iwaS1pNEkncSg9GHv1Ys6ktLMqcnELwuvaYLvc8VcSb3Q2LtsLRNxc2BXom1JqpZPivDDN",
  "key39": "3kb98XKLCJorGiTM5UD6Z5ooYjC92L7kemNv1mJqMioQBFKDhR9RQoFU2p31Q67sE4Z3meVqvXdVvNkeH9Z2RwSU"
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
