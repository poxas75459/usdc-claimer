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
    "5EZbeSr8W8QbTvWLn6XCesjZ3ewbpgqvd6MvGqixfV6B4zRdCDRHYuwYFfQ2yG2S6pdKpGAG8gzhVUkFc2MJM2gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kEHvF5Q9Kf2sz4UgLTw3A86nAUBZXqxmzrSor6oPQPcrqwtC542yheDawC49nuwMrWSvn9Hknz6U2vz2KKft2cY",
  "key1": "5ZC1CUuSxyB4gvYdCK6bQgPqWw8T9pSqUx7qfyxkHo8ePZBqyKAgwwEnwnbDC5zBHdY2SgeTSXoeBPE7rDuyUGtw",
  "key2": "43q2NqraMcCErFKnYSDNdYhrN3BjvP9jYhRJ1cBW7ddWm9H2zTGjuqgupLFxa5jXytR2t1f3HzSfP4NyhqQtS1ee",
  "key3": "21jjT4YLYJUnAuc5sqCsBAxaPQ9Qt9bdxejGvtspHH8NJCD6Cmeh4pjgCY8uw8yC53k3GnYEqg8vX38Co2SZPseJ",
  "key4": "49LuXi7f8tU2bTvCQawR4ZVss8um6rRxdcL8w14SRsnwuGnSMsA889xPEjmUBxUZcPTWR5hBKwpV1L5D2PkomnMv",
  "key5": "3YXxwRkDVFd5TmbPkj6jSyEPRcURAtxcdaixLEsByByPEfKBAJbPpwV7drtSEN9sxuVGZyJGH6L9wts3TreyqmyJ",
  "key6": "44VYGEfKTYSPU6t9owP8sH3KeRM3MKgEyVRPKEdFNBHUgQ6V4QREHeHL8avmk17kMUrubmsCYt4oiPA2VRoHZBaN",
  "key7": "2K7KQg3KJQVm3X1LJ34TMJ7mCaJrKSaHDAuKPrbhqHXDstPFz1tqZqhHBLNHVo35ESsq2RJKJ5sPkGZa52PUd5Yq",
  "key8": "5NsWUYfKdsqTiNn5akgypzeJyuxUHU5uVN3UscHDqQMdypj4gosHsjbPd2x3QemcDoE8awVDheRdrt4C4Bg4cQYL",
  "key9": "3dtfJr6sr5yxLrhJRbADM3c3YT9SGjAydXH9jPtdJ8pNmpyLzMAsaZoZ5MTYAxmbWjzb2LpkeLsC75hfk1iKrURJ",
  "key10": "57cpM64AaEUqEG3u8wuF9Qg71sz1vt7e3iQQAb23BLm2E5Y7EYWWmGdngUvivDq3nS5sYcLtMfAnagTRoc2H7bRr",
  "key11": "3KukiiTVGakuNqx6vqdn1bLSWjGL8tokbTqpnbSmKtGtXLcH7Xn1AE1YvWG3d8dFciMtoUDicUzRXU8n1XqdcRQA",
  "key12": "3WkWHr6bm3LcZXqEd5PJUNHxi511GxEtrsi3sUX24Fgt7BGz4P68F6YeD7e2SEX2UK2okrqTSQsoCtKzCBkofSH9",
  "key13": "5wmJFfekCkTd5KmYGtbooQ3FxFNVMcmSCVz21BYZ9s5BvZBw36zP2Axc2qsiS7sqdBQMkJQKsSm4uAs9UdTYHS7F",
  "key14": "5TTaWVUEDuA9E6UdhXNbUymAA6rpS8J7LaShZQGWfJphtYPoWNTPEMCV2RL4xzrDcFNbkPiZBnZYgXMhv5u5Gmm8",
  "key15": "2hg9trErBpyrUctQDwRHbSZAYZ4MqkFV9THSUzrigS3MYEib5oTLDk9CEWkturPmWhp8uzDmnoQAB1hQ2DhDqc8J",
  "key16": "3G1Dx4dNX7F4dDmMsAyfvMXaMD7m14Y4Z8UC7m6SgAbWFKBB8Yn5S3DT5Novk22uFNgj4rynigW466swSx9TsDU9",
  "key17": "ykpAAZxVJsX5qoJhxzc84Yh2jBjUr5Nu8AHEo7jFF3Zp2VdwqcTKZf5jCEhBVomrmuafvzHR9BbMMg5isdPTaHv",
  "key18": "47EFGVDgX6b635hKc1zqUzzm1qkvER1b3m9Wx37ab55XDyJPuWfCLcHAs7GKfag25jJa6TkYGxo6czQu3NEDdwG4",
  "key19": "4y6AXVtvYvcfVNhGthdkiqEvhhZPB3hVE75DS3wUFxypCGQEXAAS2z8B6kQW4DHbTazHT8kewrzqS8zzMdBoKQBU",
  "key20": "5Wrx2fBtLChfcQHykJr99ieeytWvoNJvRcjLX88i1gk9rWZsY3w2UADtjQ7Vcka1UXvVFxWRqQCspWKPa9sYiNk3",
  "key21": "R2bYNXwGfPtf4HdRivETtRmyk2sUC9yjjwUt2eCbz8b9sPt4RgWwyQCE3ofB9qZtLSmTHcPjE9kyNzXxDfAemzK",
  "key22": "zBUKuarRu6vDxiFdACdAUQ5jfPUVjpqr9C6VPgkfkiSjz7gGYgNXssqvSnkB3fnWb98XywEH351ZYzkhEy1HiiJ",
  "key23": "2Hqh7X5c34M24GgHkzCEmtX3A1bJccYncb97aXzpYdpKfLphtt5QmJhUN8RYMDyzJhAGiFGK5n3yRx7kd76cUKRw",
  "key24": "jvdfNMiqHL13Dy653hJ7ZfjbpRkVgE6AMQMK9b9Eok5DfrxxsQKzComrxChPfQijbwksbF9GWUXnaZPfx5D2jL8",
  "key25": "5UeXspUbfXrNm1PjRZqkvsRnDp9armnNrcAob7fjA2dxXrn4mKgSkXN9izVYMZTGu6yHjbYevu4XMeKr7PQWUBbJ",
  "key26": "2ppDRCpcFaT9B83scbCuaAEuqSaZQVFJpoeaTPnyLCtFJqrPakZ7q6kjPpht1d2e67UWur7qoRcGFXNr4uq74rWf"
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
