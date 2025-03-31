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
    "2YnzJHj6g4KYMUwXidjFq52yXC1icGJtC5VzxDDu6ByaNpRFXwhJYLxEGNnnBGKuxMJzajVSMceBm4jj2UbeV1nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mLZxmw5eN9oBSaxteZEPKwuLoRCQ6QuF8r82zE8vZjMsQjySGztEgXN6EwpF4Lp7RbWYPbLnA2w8G6G7ymG9Ttj",
  "key1": "3sB1AHdqYTK5VN4KHhR5Sc6TfC4LAruSPjrFH2sRnRUdPEJHxkHMiNYqQGMCZ4yeutWuNc9uRqKzP3W49k22MMDy",
  "key2": "5SQ1MEYK9pG3jyXwkMN2tiwinLuLQrvp38GeAz2VjpD8ZHz5bCcRNtSVsCxZaypdQbxxtvCFhVk1UR6mqaWsnPHr",
  "key3": "58c3z9EicHmRQda3anbLHuLtxefWtaivnmL5gzTdRQpMPh9hx96npV1qvV4UE9B6HXwkj71auP5os1gQH1BvtaCh",
  "key4": "4rxzQZSGAUQdeYZP4c3SPHbgLDfBg1eNDf7Tuak1G1Q9GwpDZLRJSMmwPBi7nuQ7k4TFCVV78x7FChLXRNkBeTpt",
  "key5": "5m5M41XjhY43a6QxVNe3Yg3qWGYL8ddrxnDX9NhwUvJG1G9cF6f6RD3YzBDWME1VcHjXrshzBr3YnMEBvwtd9HhU",
  "key6": "3KmFfiU1Y9syR5t89JjQbrvgLVs8sStK2dFYmQbQgbvfxCpbET24iEH3yQKXTquCGFSD6FUTcosxf5DU25q4K3Kd",
  "key7": "5cgtwpFVyigJeiArH3UqR6bCUcF9WZwx1ineFWfR5m8dY2PiQiMz9Vrc4sJh6k8ETrBtjQzKRjmbi5DjSuqe6Bye",
  "key8": "3WYanUNGxegAxfRd21agioLWEpSPGs3F2AcuqTKKQJFfR2MjNppXihRKawVRSjU8q3cL811qq2XQZ3MwwMbtazHF",
  "key9": "2iaUNiBQyweXweGteJPoMm7PY79t6KNCiWJm8FmTrTi2dw1vnVJ7MRkZK16Lkiw7q2BqU5UGtDTyJS5XhUHqX2Mg",
  "key10": "3jLSGWVorCZ6ikYry2eKtPh1sfeopnQk6XD8Fx6voFkFppKWE3vkqKnqHBbwSz7V28QToCPmePrDBeXy2LiKHdFM",
  "key11": "2GQc1fY31m9jZPJFmkJNf8Htvz7Xb664LSPD9UTDtDWUaaKnpYRQPfc9fKcW3TShLT4P1fFpEBHMJonJaHqGVEzu",
  "key12": "5H8zQv4PysnpKTcvKdAHf4gXCts4gfhwLk7zajXftTaBAWwJMmFvZo4mryCZVZ9jvvCPrNL21fefz7wv6nt8R5sV",
  "key13": "94gTN5LwFE2dcSqM1GBnvCk4oBSH9nWhmgMAgrmRhJoxre4ojHwBG9yUzLLwmoub4QEnHb3MWFk4ffNBX2c2UtN",
  "key14": "53mk8zq6BJrj4ZFha7KHvXKMRUy9hjdSj7xrsjWivS6PNR7bZezJ9TBew9oLVNhwA3t8RXw1gNuMunxrMbgDVeio",
  "key15": "4gRkKpBo35JGdVGr1sXgVqwycKtRsM34vR4vkEuTucGy1C9wj7pHt2v8MP2HPhmwZqFQsjaHjTeUdukPxr1hVtGP",
  "key16": "2g6CbuYhbdHDZv7W4PjA9647ev9LYf7jsYpbQmqUhuj2bkhAejrodB1BKTQibYTMD5L1JmjW4ScJG5oD1R3hJhCn",
  "key17": "4Bt9mbFbjctKzQ7C1kweamaJjwXdPxt5rXpP5sWTteABUqnLyno7nTvLW6WCb2rUMQvLG5N3KzhPJirFr5eSwE1Y",
  "key18": "4damrpRxowA1Rcjnd54rRZuexjNNSBU36ryNXvzWNdFpLAdmw68SrM6xXsYjAQApTtd51k2BNbE2a128mSND1cNP",
  "key19": "2sMUkuF9jFYNuKQuKdWvcnaKGuKiHdG8qqoF38zDynhHsXb9GpfgdokjXu2YRsxtADuHRmGURvCwh328HzNsiiWU",
  "key20": "625uuH9nBVDKNX8E6zoJVXSTM3o9PVQqtG4DABgG7DnYF9ujXAE6B9E8YNYjY5QeCTRkk1EH6Ua2PrDG4SZDrvYW",
  "key21": "4otqcLyfkXdWJXW61ogqvsaN5pWMkDQmHx3rPnpkLEV3BNywbD7RnHwtRBcEmwEUcSnDDuRVS1mEG5GZK6PW2Nmm",
  "key22": "4KKs7q8U4XxedzgVPQTgU6Do9KDZfxkrSLaA3mkHvXQqKa6Tabx3TX1WJg9aaMZkomtw3LoX9z81DEy9BGCxxVTZ",
  "key23": "2h1pPDTteMnDuQ5wEQ7A7HKy8j6mQT6Ya2UCzqUAAkgwq7EiAQtiApyKuqhF8fwP45MvqQNgDSAe3KeYoJJX8iif",
  "key24": "5uSLQqp9zcVA62At5oPduU1XwrsPFcUvc7FSE658AETd1qtrR4w5NZ36EPzwiJeSnovxiGngBmq6D5NSsQ3fguNk",
  "key25": "35iPji9ZBrcGHYpjYPm6sEe7fCunh3Q7ZwPPq9XSvBFDbsNPwTP7TTxKqQgBfNk6J3uweW9uiiYXiQM2eSsLTop7",
  "key26": "33NEtCiEoi8UJvKX9xZWChPn9vTFZTnWBjwcV56d7gxQxNHdQKT8by4ULhXWhWs151rqj9CBLgkqkZU7JDEQ3Dnb"
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
