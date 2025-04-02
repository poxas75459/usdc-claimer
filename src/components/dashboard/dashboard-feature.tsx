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
    "43VZoMyuVMCBbGifCy3XYz8kaQxE8hgVKcrwooPmm673ssZnwAppVnqAPRqRLSKnQV9th72rioGvQdiiGPSgFeN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBhWPj4m2bJJ8YtVtQ436Vd1CLYxygADWDzt6kEJHBQh4tWCTn2xVCviJpkoS95HYNNbwYwbR2DecsnGe8inmUc",
  "key1": "JywbY2EMvCG3VfAVRV9za13g6hnCL1MsQfd2F1midGVdYJumBf9RxfyBArVKqLzZix2jwnPxBQduD3sfuQKVBSc",
  "key2": "61Q7TE44jKa6RUmBS31JjQzZFaYPTM7bLLoZeHY6a9NwxsRVjLWg6wzLXZPqWs13eDbntnmxw889bZGnXCqqkzau",
  "key3": "4G15rXWUaNJhaVRdg7cvZSKd8cxXtkhnmZoGXYps7wZmvy7D4jMcvzUJ4CERQ2HowRWJmPd7XRuGTVjVC7h82juX",
  "key4": "2tCuZDmL2dKWBUHt1hR6mEiSyT6HJwZN3FtkZHnkVtS3SKesVb7JKQKcK2DxbMM2LASXRkJfxLH8w9s7Hxii1VuA",
  "key5": "5KWA9MVXmquHATB7SKcwtJ2x7RFkTB4nfhsPwNKd5hDiB3zBVxHVX7VqMZgCMmxaJUjzp2MBjwJWaCRWBWQjo3pf",
  "key6": "U4yYGMTppUrjzEJro8duMra9SP6vx1B6D6TCRPBFgGKbBzJwfhdYga4gqiouvuSG22oBthKRdc866m9Tsx7Yabv",
  "key7": "2mp6CEMDSj1Cq4ZpSriPvDdaSDcXgV346bH2N263HWGNy13mqi9w467vrcveS1QyBZ4q8vMWJ2xS9L9UYWJ6sNKZ",
  "key8": "4M6Twdj9D3dxy54xFNdeWnFFdodc29zs64tiWv18KFAq76VvH1VxKrrBda5WGkLXx7tzWuATELeWfZrmVu7xdmeb",
  "key9": "4uAb8nGCWXK8BWkR28gPXFzkpbEC12j9ExKodRXZAbkiVhoMosMcTSX13isJVK5dcV251WTbB7d3YPTkyfj2Bgj2",
  "key10": "2UurvoXfv8hVGz7eJNRLype2PnV548EDa7L1ajTzuiNzmXqmvS5B6QHQ5qP7PUFfpoFm8dWqcbR2Cod93BtTZDrV",
  "key11": "5wGNm6kwDKdcX2Q4pEs75NHak8d95b4ueVEsdw6cdM5LfaoyRy6WTo3BVHnUQLjvesGdyrnrD5B7ZBcjt5AyABC1",
  "key12": "2ReRRpgpWqytn8dRGz9ZJibeeFBd7V5VYhdyA9EHZmvvFHCMq6Umncwf2s9p1HcJgxkG6Mro61RQXHpzERs2FQBs",
  "key13": "HeBc2iALx6p2BXaAemz4GzqthFb7VJ99CUPSq9faaRLWkJej8EiqBjVK35aurs9WVmzzCF9gZmTJGiDenKRdttX",
  "key14": "3mWLAy5VRb2MQ16YBQNwVyqBNAVaNB6UupLnDLAmCwYGbGKiNTLGTvc9q9ng31LF6qesT6rEmedbo93L83qt2JUW",
  "key15": "HtGjnHx2nuBPEHGSeKdMnb4y5H7qc2GA3zXtieoAafUn7J5mUuCXogtMdqcNNtRQzEFaBenH2Cv7kgWzqCLxJYU",
  "key16": "5C2UsB7yDJkK9rj7QkRW3ZW86yCQnuZSAf1f8AgrRdrbZ5iDXq1ayLRNeXMY1GvFFxwdQwDc8gFFwVhbXr5ruz7n",
  "key17": "2xKW6czoVbkN6n47MMVxZTsohetzwFJySV9SfPQTniwbYxED1kCjhAU7gyeLnGjgdCLgXnbvXXYsaf2q4hxZ39Dv",
  "key18": "2v1n7Mj5RU5JzdCQEhvUvFhd9Dp6uzTWiDJPrnM3PEBzgBzNYK5PZM5YWGBybQhuXm9i3XiuZAuMDCnFje4AsVKn",
  "key19": "5Ko3dEG9V88ix2ErddzfmTNG5AK8j48uS2Pw2E6u2zdnPoHFQQ3Vwjfbx5Y6zqeU1kYiou8DgGShqQPFK14pgPMs",
  "key20": "5fvJ4Ezap4EN7XVchRwKDmsjCYsQXPWFLHHreZWMjPtEbmez4CwqLbNY2XkjRxTvBdTsNzagAvzqLsbLZ7FrRJhk",
  "key21": "2JcL5NMp7VXJUK2BtMXgmZ8BU1BMf7CSM8mtNc71Rzs41fNGtJfeUGupEgktnB9Ezitfeb3YAZc4HhixehGx5ZTY",
  "key22": "2HDWh4avBpSJkd5A8NdCuop39r58n7MSWYcVwgHhRtKDiFqMS25WWYwTkQY3BpMbWqqWFzHMD7g6rZSKmSGmWiwN",
  "key23": "3nXpw2ks5awTS1d6Uk2EUzt9LGasNoM2igYPkRXSpqZHQfAs5V1ayGo3huCmqiWewFimTXoDqhnN7vdJGDZTMBm3",
  "key24": "3YKjHjgKoMoieC2fMUGWesi5VAGMqG257qMrninVDx57soV8Rvxtx4b72yw6oJBJWkt4rm4HEsoP6pW2er2i7e4h",
  "key25": "47gJwpcCbqhfT9FRFQ5xSuVZ2N6SXyNGWkm1cMZtzwX4vmDpCseaXnVScYpfQCFnv5LSmmFdJbNjDTrjmBpiMj5L",
  "key26": "jgDR5yrKt2Mnv5gp6dKVQTRVdGhfUS1qQEuaKVq7nxmaThmYNqZ2uDhR8Gz1q9UQVUucHdx9eEBxtAqQdKZZM2e",
  "key27": "3HtepkGb9rGzr8iXvNhqBoVkz7rds8tCR19ja5PQPzj9ehTtUnXuAd5nELa4ufH3VhXqFupNnnfP46YHnHAyFaNM",
  "key28": "5Rn4UfjbFG2Psgn26s9ZMLEQBUEGnXo7CpC4Qypr7hVzq8jcAx4yT2KSRN52jtewjwaa1de32K5GfVo9zP4agz5E",
  "key29": "nDZEN3j3wzXqkUJg8PqUVfFi3AFJaNf9WHZZnkv5DjzbFiQEBySpLR4tVFgHrvXX7apruUS1w1kc5js6f4wYFfA",
  "key30": "4KysGc8JsoqW2PKpFT6kutBBfo49JJkyG1MQqZ2bMU5RfuE9KAKGVQvU9zeGZPkjK64yVDQXw8xmap8Qa3VGfomE",
  "key31": "21KcpSBjL1t4y3FH4rPwSbBV4H9cAQVN4emXw6KpRLmnuU4XmMR3MD2GF5Gj3XyFwoMMFQyo3btq26yJViQXneUd",
  "key32": "3DKjXdD1Zsyap5KbgVvg52FSLQhqTkbnBEKEx7DMGNNKrLVETV9Akeo6n82Ahbjhqed3wgK9QdyNskdZ39QfsQUq",
  "key33": "Av7g57M2nN4tqnkVHkMLhAqWhJKRxAEmLSvLv6Ti1vsu8LC7QGpsXvin1ishLGg4jzUE7Wvi4oxdDKyLi7JZWTz",
  "key34": "2Tqa5q8NNCrpsxdkCwAMj2WXWikQX5Jj5AHx4DjjE9JJEgwBC6KXQqeMPZH5LcdBLFaL5bjuFtQh7DJ17sfCzjb7",
  "key35": "24UZabmUCbd8BgCnMu3n1L7EV9V8rHo4ZH73U2EGErY62rn4tkTEzKu3smtU1oTuYHksHegVWForU15Tmu5voxtZ"
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
