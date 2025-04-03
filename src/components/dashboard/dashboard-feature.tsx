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
    "4W8XJYSCkk5LDWZgHRwkFY7qS1xNp1SfwRpxazgtcDvbRpBNkCiiLx89LcGdQHjJiMA6vsyqFXSnjsrQKnsHP732"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBtXnmffWR1EBcg23sNZX9zA6BjbNDHv4w3G9epME3FDBmwjKU5N4duCwEcYHTRLrZBxk4uaaqSS7kPtXGTDbt5",
  "key1": "3EooUt73hwj4TZeGcMmgjn6WDSqhFBFHa4XJgBUcBE65FGGagN7P1tFrttjnyu8vNrLxMAYaLQxyeL3xS4EPyx5U",
  "key2": "2BAfRxMWjb3xCcPDD1chC19o3cUxkzqbneFyXBkdXRYv6XJoxKoeoW5qpF4ohFHqy8QwE1S6tkQsowtcbC9JPPp7",
  "key3": "2bYzJJ4wGMxnVfAGMWJC1AfbDaQXrVX3urXhEkpRQ1nzFhBQhREHNwWa5WG682ecG5MAep7bWmSy61RoRkN1XiaN",
  "key4": "EpbviP1bttN83dg8K1KeNzUjyjzmAAD4j36iW9v4JwwVjdiejUZcv9QVDcPxJyZiJSpNdXwnGpU6XcVu3Ad6Edr",
  "key5": "5QyVyL39anNmxjstgrymVauT4fUyJdwXvWBY5GhQsNYFUsJ15fdfcpADCigCsMY2PuW44BJD5yaWM6fbxqFCfKXp",
  "key6": "5cS255CT4ANGynaMMyjx9eyffihBZ1rShDowHZStBG4BeBHjUWrLdqcZEujYoyRcmLdWgMAbrrQAiJpFuo9YNKyv",
  "key7": "2YXyUBRBjGHNbDYSDZzHDgSXryYWtMydhh1fRDrN8JjWBcizE5eVAKcQDGsvXvsUyKhoL1cTAxmZMsKNnPQfAsqK",
  "key8": "3iRzZDr2RiWVzCe6EmMBFHLRAZxeyxoGcaNkda6Ew4gHVzW6d14ZP9vbd3PqtnF6nLEku73LGbf7SkuM17CzmxaL",
  "key9": "4jep6mNAtbtyztmB1TTX7JWkBToyLfkNrW9n43Z6GB4gGaGAXbmZ3XDwS4Vvag9YRoyoCkLR7kKrZHJ9uum7Csh4",
  "key10": "Tx8j6uMcKRMx1SrtcDcVhcqCLfNrEsMpRKzkVjkQ1Q92nndUJgT6KJiduaLbTTteyqDRuNZuuWX6r61hX8ATez3",
  "key11": "5EvPZCVdNvNLFdrp5hpyjaDahEdi7Dfzo2wd7zCBTxdUavRqnerTxvGBTLS3i7uhQ8wuArUoA5KAQJvHQawtKzAQ",
  "key12": "5DxQpjJPpEaPbL2PHF4yDQSDXtnknAVcU71TDnpWUzuhGMG3P9LzcoKBdDFhWSy8rhUhoc2hJKVSozKinTy4Z1gf",
  "key13": "3BvkfdXwDvsrJH14mfCv9PYgouvuwiDSmr59HXVDUNLiMHKfky9w6eg9zwn6vNPXJyGK6pUMn2j6GmADstdfQ3YJ",
  "key14": "5nBSGAL4HJT4WAtg1TXqSWosrqjQ9GUmqxgKMZcFZg2iCu1QxG759eBYW5yiRAy95qFgUUdfGePusoG8sU8dgvMy",
  "key15": "4QoVAWemDRuQEMUEsoWTx8TcU6mbpFRqfeT7iVGJS6divKmDzVMaNUjw6aRu8aZyM8uyvJXVQYsMxJATYxaLqPUJ",
  "key16": "4FLFnvarD7W9HbX7PEFKAtESh2wPpX4tYNXATuNeLo9LQZZmq5VEErMLDjuFQVg8i2rCcEMehRFCz1FxZZgPqSV9",
  "key17": "3gsqz3AhzLjvVNiGxRK69j7eguX1qVVRTWBchkbBaK4hGp4YrpVBWKGmviP9bSz1uMzmVE1gppn96hxDKLNc3g37",
  "key18": "4LF7EYU7RPvMoiPjVWDq65qvMH8uPEpEdKzkyz1v64EhTQDgvgCGRTxgtWBeDqYiyMSUHeVXA75iihnmqFVU8Tqq",
  "key19": "61a9HTeuAfq5Dvc7dZojpVahb7v8vrqtprzL9m2uNX3Bdm4Urhqrcun37BA6DeXeShDopSo4LoPnv4G6n9iyq2bM",
  "key20": "2d8cGJDEXpbCrEa4AUJsssR5u8FBqte8WbhQQMPRYG2vs3e9A6PxN8QBqBo4zCQMoKZXwKDeaDUGdRFpGDwfySyw",
  "key21": "5d5Dnvr6hjFeRkrtkeSagV7CULtpPBq3Xh1xGkzCPTw8dWdwZr3DkNEEXsKL5cg5gbUGW7vrrcAExbbNKQnM13C2",
  "key22": "5pZ2CtZWwYFDkcNNru8Bvr96iJFjtsoXRw3tTKJgT8gjc7z3Z45EK7Niu6zLi1wUPqM2iCG4rwrWUgMYFNjB2zd6",
  "key23": "4J8GczWAtTzRCerXjSWzQqxJ8FJwNTSYdYidydeHKxC72CucfFqWc6ANHaz1ixoexzdF6wEsDkRYF1kTajdTWZ2u",
  "key24": "3aCuoGogfJARoU5RnL9DoSs6dYP8tTL4Qiz5DspmQeZrVDSTk1xP6575tL7EqvPzjhF2xFRJqj14HUNt5cxkS3L1",
  "key25": "5vev1jPQdhzMUZZNGEbKxVtv3x6m7ViXrZB1pXjHAoL2edffiqVAaq43VMeYGZN5LkNmFY9L4rec9ma52RXQ2je6",
  "key26": "5xYEhQGFNGvmp1SDMsg8gC3b558KxJDoq5Jg972aphaiW9X1qCeQyJZijKY61HNFqrRSyLEQsqHUxUUiWQQT3zeB",
  "key27": "23djCxLvFGavN2wtMZqFPY7jYuoWgMPqF9Nu38H2WTd7bSTTX68MJHfwjPkAFtePrWc1Je54MSv3os1eGpmKFHsi"
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
