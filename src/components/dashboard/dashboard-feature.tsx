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
    "4reVhh6b7npT9fbPCVVfJP6eHGgLNgEqm3Dp55kkHQbpvAoKcKzGkzDFRCohp7EMZpLorfxekuRcKo5VyxpAW7Rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pM6hM2skUGh9fV2QxDHXXdTZZdEgmGdFgzsruiQiDhsP45L4MzLBQts1Cujtn2NHvQEw7WU3zPDPSCLCytB9nsH",
  "key1": "4Rvq7GgPyrDu2WXy8cscftoyKj3PY4fxzD8UFoMeYz5kGjo7dZhTURCoYZQUMS1krMgnpKbngxWjp9tpskg7R49",
  "key2": "28YRA9EXejGnjE3QzHBHn28gsE9i15mEyEc7FQDKCr7Lw99aqVeZspiWunGBJtucvbTcSbXCHk225iQ2Le3hrjvm",
  "key3": "4iwYU6X6PXbvr4DXAp9VKftsvD9xLfHWUEBiL1dyTV4BX9hqPxn9PJ32EPRXGYu4pSyoUcui5iAmtEqqqF8MTLPv",
  "key4": "5NA2kDVbdr5XXEcdMwGsWnatkXk7V7FovJijMpH1jhECuwj3ZnfLH1USxFddfX3iiePK9D5frcGvFnZHYmktB6ez",
  "key5": "Abp8RZfAw5cs9c46qC4zh5KzdjyE8q69RzD4NqEtLe5SwRQttvXxxRRtuDs5JZF82sytaU4uNC57heb4hddeGvy",
  "key6": "4TqLkfYDsj4xEDgFqZ5iPHXdWXPFjroTFaPkkLe4cnqo6Z8dtaxy6mQ6k3Pw9WQYeRYcWz5LHjZAPtGiFYzMXgT7",
  "key7": "4gP2ehJybFqB7Do4Phns56ojJaYHP3AkP9Kd1QqoCdXtU9SsF9tTYCCLUdFpPX4bdAbGkpV26Zna7bJJtSzZyEg2",
  "key8": "2yLvD3Ney2S1rdZS6qk4F8PE9Pq81kouujUKqZYwteErR6tyAKfT83gmUavU4MdqGMipDrdCZFkyWzut6ncSXwc2",
  "key9": "5U8myN4bVNb9yinn37fX2z8YgGETSfvMEqZ4q3sEKt5ZcJvnaEzCq4vvhyQMrbysk2mkSuXJzzuufGeK1YKhRbEZ",
  "key10": "5Aj7AtdijV1wD45f41Vhh74visG2H3qLGPuL8BcRwkZ37sAUCKhYtDuQMD8ajuV3XFxGx7BscbibfV5qhU4DJeha",
  "key11": "39Rqu1rksUxFBX4aBWX647dmxCNsdL3vEU9fSDxcEn3EBAzfhCTthK55tgtpwP1p3cx8ryeqxVDcqH41ZwS1oH5F",
  "key12": "ZjyxkHnqbpStRfWJSBNJQrVtA1QysVPaPmwwi96HZF7uis6JGQ9tCbLHMqPrLNw3HLFc52JRk7zgx4HU4jWcQeZ",
  "key13": "3UnA8XKst1LZvYCVC8D7eB4FvamDcaYS9vFZrpHCBzA29ZvBTdXRfUqfwWt1MakY2Ya86KBFm9FMewpVE9v8Xw5P",
  "key14": "4wa4yJefi7MAs75spuNpqUgWuy6p64kwrZ4NU3jKeAYL9tVLpaS2JKDR2PLhad9zZrCKgeXAKgFCR55vfNUM8PSx",
  "key15": "3hziSKfam4KRgYarVveQpf9h88VaJbhqm2d3qtFCRL54c2n7u81Y6dq7m5xnqS6YRZdhi7G4PSPruWLqVPuttdvi",
  "key16": "41yXDU3bAoSSPwyywhBAyuvmNu7oeyPhsxiC3ZBrHJfqRoGmdb6kPjkSTi9w39LCZk3im2XkatBfTy5unEZ74CeF",
  "key17": "5obSmKSdDEjwfX1ugDfA7KdF7j87L3pm9Q2bq2aQaQede8VGjGJB3pbYztNCs2yxAiq5AnRZSVQTUMNxW4z2SiSE",
  "key18": "5Qjz5NKawS7dLCXKRo8Tq87RVeDvpMB1TrMJzkvee2hiafqkYrusXL1fvYtzPyisx9bq3izQiASfbN2wa3FHFAZp",
  "key19": "iiqP9yoWGquBtnAYWHTaBgubrK5m6CvaP3n7bEfLtegi4yf3NFSARTD8FZuzu8jG3WsLMFa4nyUveGtcukUshYy",
  "key20": "5ZqpT4yCK2ZtXZsgqtQTD3LMTAZYuMCYwxfiJjPFc3sgiMPv88JSYZju2gYC9xg9Stnsa5xAgvJ7qh7eWSpatukU",
  "key21": "eVdx3R8g15BEprrghPL5X8iL5eyq823mJCEFNWcabySn52Y7Y24uRrRJP2HM4EHJzhs22nGzEGwZcWMgbdNQ5Pb",
  "key22": "2nTggVoVmavytdCvvrsV9ecjSjptLn9Lmr3B4q6VE3xr9GmmmLG1YE7xU1rmkceujkKH1mZdKgbQvBcGdSAYQeBU",
  "key23": "JcH4EUREafLy18Wviseqc1yJawGEt2gg9N8PLCs79iAKWNUjzfbK8GVkbMW3D2sFz63scawVWHcJx2WqHP4eWw2",
  "key24": "4outBZvLSoAi2ZhAvgzjjsWayGAFVBY2dKiSdKJrshA9T2k4FzrokX1MM1ug5oWgfy9yCoEsVtKUXUHqN1xb2AxT",
  "key25": "e6a354F1M7nXXAUHLmV1xkz4vEVjxFCzxJqzEZHfxbagaPMqnnvFKNCSgpDU56hySD29gkATf4L7jFzUo7Nz8xH",
  "key26": "3cZo6WLXfTH9pPT8Wm6tZzHC4X5LCAe78L4ELzqnYRJE5BWMnBfbcC72DyMQj6oAS4Auta83EEhp5t94x5HSxtA3"
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
