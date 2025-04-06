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
    "4iTSxXrkPXZCg4QLk8Y4S9MPKZtsmy8Q4BRjTKQxhUm9gNGkMW9q7GmR2XrqjcYgxZuUQDvPcaiDcKwTFVpNRdef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftxHa1FwWytEivgFrKbmocHr1US1T7isj4fgDWAm6Ht1tgjjoPvnRWRmwLBiCHyCHTTKvughFitZmeRoqknavmo",
  "key1": "5MkZMRFVh9fVXHDU8g1Erksx8TeuVLMRVojUVBgEbXr5qEJk4rWsYY1kfVr1vmQpxHDmaP7B7c4XfbGWrqcwLU3V",
  "key2": "5iqsbBotxDcuGsHmVrE6Ppb5PUfEScT9g6k2YsXupUqRqq66YiUHWJUCJhhU9FfcR3pU5aCH7BkW35WQkG3NkEX1",
  "key3": "62SEmmzuSCeYv3vkGquaN2dgxz8zg8stmRokvdue9irXk9AWhUPcrWqEimxeTj3V8Ji66ACrBtGJvaYNmQc92rVR",
  "key4": "Q8W6AaQYWWhtyoSECv6q5EFc8cfCTtjxxivgK9yUepyD3NKJ2VHbF2JcpyT2PWyBfWrHj4zjQkyY4H63UXWZJ5V",
  "key5": "ey9N5QbE1gKAFuHudgaXLNTAH1zkR68ewuXtXngfEP1YWKBU6Hpg6Nsz6TSDEnjk2YLArZSkuf3uE629T1KXDi7",
  "key6": "VxV3F4DpCRR4NJAvg872stJCXFMmTYJ4EJsz2QRD5i2UnaPKmxYeX3NVKEYorvNwM7qgM3FKRpbUmt6fJEHn5eg",
  "key7": "2i67y49yzar7WYx9ZJSSgdz9FE8b8MRQvuG4XekaVqeQXodbisk1j4f4f4U18gMuUPpX9k1NMTxjR5Xy8xY6ns6k",
  "key8": "3NmWbQH8Z5bSz8a7ayScwxUrhNN17s84TjDQcn7FVsBnXibzC8d5FwVgfkMWSGKV75voSinGe7PmhhyUjegNXDFg",
  "key9": "3rrQEiEJtUBBxZQa8joHsBcAuehh56QKDBN5Da5Bpzf424H3E3ZucY8Egf71iiMwfZWx4HQwQwUVxDW8pSbkHZqV",
  "key10": "5LX1h7sB1EXLRuiwSPcstNmiaUQpidHKDZ6KVcweWSEcoZhXoo3zeMWjiSbQbL4j5Vxtd3MqrePQstteEiYLrZtb",
  "key11": "4TmyNuRSUYMJo58kiuaCr5UmXjweXTq89VPe1Htr7HC9AWaR8L1r7rMiYLvN5VnPuRid6EQzE3h8o9ZVLs9zHxKD",
  "key12": "4Ki7311HzjxQ1vaKjQhZ5DqbfLwMmuV6oRSjAzievpsUAsByjMQT8Lqpgv3qYTzcknotGKe99JibirPn7QoUuekc",
  "key13": "5q6QV9Xehk81D8FNZcMs1UWbgzaLT3wCoraRF6sNPeeDvc4SRijCKFKsM1Ljoqv3eHi64YGE8ukCKRvpHFH4Bi6L",
  "key14": "4ZQg84pE6kcsmfm5qfVzE2dBFfMRdUbsxsLCskqqvxZg9EwmQTeATDGjsZ7UtiCobh4MXcdxZmTg29SbsTykhfEp",
  "key15": "2H2a6vHMRjXYif2D3MifabMrtjeVRsDPbTptRdeuz2dJQV2PPyoy71Lrfvv2ZF1j5aX3QhVkh5TUcBsWUN9MFQDr",
  "key16": "2fj4tv7RxZHgNx5LKvqGaKdacnonjSo2zxqjrTkGazDBdUsUZfM53zq6meUXFJwLvVdHgoyLNaUc4pfnRADPfKDk",
  "key17": "3e7PZCTJezxKaMShZA85sLdcfhvdgQXh85z82Txa23KrGY8U639iE39kGVuSabcrc8x1rWZnYZ17S1JjmpD5tc2w",
  "key18": "He1UfLDuyPMnt5DXjBeCgKxza5yajZs1PjS8hf5Dg3ywjNWmiyp6ESaAbiZ46w1D6L5xVQYTXuQ6mdhLnK7Ur1c",
  "key19": "374u3dBd3Vtc5v7R4q2vfu8h1ZLJ5ZjkDzF71XP285GjfJe4c3Pchj8qJCx35pP7Qtxehejqc6AoDHfE17r87F5K",
  "key20": "5cXBteg5rAN4e33nvwknnHdFpQMN3jVANH9krErysLYyuM7qBkX7xzxCL94ATKsFVHZiZ6irPEnYWaWZ6z97iPKT",
  "key21": "eV1newtFDjzdytTLriPduYJA4xCe878i6pebeJWnWzNobPZUhUw2SFnqWSZiH2XiweemGnUdf79TDi1Es8NcBzh",
  "key22": "29VUMqTk4pK2HgMkgyajgtjFc8pDkQ8GSNJfhiSUPKvYSERBEmTy8BzhEkPAx5Suj8vNVfDgrBBUCRbfAsJU2QNt",
  "key23": "44eXeMJ3RiFDZ8jDruoiGe8UaBWUWBMjujAUtEJExh97u5xQ9dYpZE8n7rHw4vMqhnXXqgcqg4yBRsb5o447QUe6",
  "key24": "2cPq9eESfMPRrXsj7bBzgZeKzyBYzF4HzSPvXEKuAcBafaSmAhm2KDdn6QngfJFnN4LbbC52mGRjEQBz6NvT3TBW",
  "key25": "4htdTAeyzkEVKSe71wpo9YUokMW5gDJVNcDJtKENhPJA9Af4567xphMRk77dbn2NajsHmxgae1eWCvcgofsEcNeS",
  "key26": "25KVVDc5mba7aUXB4ganzFJCCkJGdMSA19zzvVgaaqdFMbZAKYxLqGay2ycaSK9xo5TShHq2BkqgsDn4LU2kW5JP",
  "key27": "5pZfWy2LdwMtYkwSNM7SnEZH78ybA21BEbBVMi6Lt8jdVso3DXyR8MM2PZYrH8SGAWZ9SZPipPZ3VaRPChZPvq4w",
  "key28": "31ZkEvMvxMLfHK2K2tCcC5G1rsds5rPtM553JXtNwiorWfFqQ4dHw4xj7rGCpJECC4egzVwVXFpuiMjrgUj4f8Fw"
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
