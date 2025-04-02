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
    "3zoZMpEE25mxjpbuXPzy2CPAoUoUGb28Pvb95mHihv2763qFk8SZvSLhz8RcUcMh6fJsw4txkQ6LRBTLVv8aEGn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJjPhSiHi8gEpLrXeCHjM9vrcu3T444gmC9vAtsdn1FePHxcqERmed5tcZXf28TE9URzSZZivZgiRJSQEdt1EGh",
  "key1": "iERBdPXfqqUFR4q1fscsXiWSSn5M3u5PbVuUR43UjbQqAek3aCxzdAK4QL48gvZ88QcVW9gHcqp8rQJX8U5sJVZ",
  "key2": "2q1AEAhejbMCcYDJ2SnS2CN6rjrF1bSG32ZSz89TQGwcqaKpFJxaZcU13nQCCfeQct3nBM1Asihx41LH4RSijg8B",
  "key3": "4CeBPtKdGGQg6XzNzPRrgaD9e9gXqUMDVugDsqcN7CPPJBVKvsq7s7HXYEZuXhVafLcKUuxP5NcK6yiL8LVAN6Gt",
  "key4": "2dtc6pAAbvVBKiie8YUcpqgGLZ1s3AhssocVXaLv9SRNCiJP7WJj8nfapDe5u3Lf3BfrP5MeTLTT2VzmYwaBXRg9",
  "key5": "2a4mBiaLBCjfV2f5smvjjuDqJbbejPWmEnAJoF9TJoZj8QzKqqDwVrHq8QDB8ZyEpeLkVt9ndBXbHrnXDUEpujZw",
  "key6": "4si1nHkT4GYqTC7eucgaZPQoYqXCSz25NnXcU2LMvUQ5NVud4AGaDF1wKe73Uw8isUryagwZ8tnhVaPWhWEBFjj",
  "key7": "2qFqYtQHRcLHzCmUB5Bhw88xW5T4pDfdQwTquzwKeeVzjtBqBMhkiHV7ZYzFrnU6R8Wd6A6jnLzcQ1WD7VotG1PH",
  "key8": "56GohBQojryoYxWHr1C4k5YuMXfTZbw6nKztSFQgMqBek72i2eVW2rtvdD1GMLJaYVin5R9MLg6d4xQBUz9gTh7X",
  "key9": "4Z4fhp341MZd1on5wGnRf8kfXdS2ressiMYgBuFUqpp3Uq2BaqRkFu6A1fs3edzm7z9XwLeupZ8qVx64p2aPK42i",
  "key10": "znahhahGVPWF6W1vnowH1XsfpNBAUnV1YGb3bpVsFo8kz3dL9i4AxpqJupXcqtmee34EKcCuzZdgE92imszaTYM",
  "key11": "3z4vRJ6puTjkHbJGqeKGQbHfxVj44WNxk8jwKBKkjhRbTMQSjyVNpzvo6FKpkfevfMP6tEdnZ6uGx14nKthwe8DM",
  "key12": "2RGVbTmcmdCqNu7Kxcuk9tuWn6M2jENjzSopnhonzVNKoDMmoLSEa4Wed1m5km3UXYq4JAacE8F8DL9EiGAjfkmk",
  "key13": "2YkKehqcEH4mzyW487vU1PKKnEBB7EPjDyBbRhMWCy4NFmppqYcij3jUDzJE5pkee671xt7rfzLRvo6GKaJdN7i6",
  "key14": "5nbeaiw5UEGXyt7skJ1obsF5hpW5Dsyg1PYeFhUBt8ViUNUsTkH6PCWsd6Ut51tZc8XC6R9Zu7qx2gGbyfmDgnyJ",
  "key15": "2Xktbpy8ZbdRvppUTWkCLEAMKgPreWYEMJFjreDuiXqHxi4zZYPh8mohCcjYRVeAkhkRSj2TRKZbqJJNN9dTzWrs",
  "key16": "58TqUQ8P4PGyzcnHD9tbLiG5DyP9SMLvsNxcbgGa6gumNHm2cKnbmUtWEsUwmXbzPEsxmfqrz48bcVrvDDVjjfrx",
  "key17": "XKSsUvg3k8kXZeuWULoANvxXYRK4Nvdr26h9GMYyeBE9L4mPbSYjQjvco64SehzjpdAMyUuyCEeZgwqVQnoZQ9g",
  "key18": "5b3mAZZf5yF5s3U3k9ABjfvEBTA5LVmHkTWhHm5UXWhs32N3oihpA3Y4p6kiDbeRVg7tnqzUC7PJRHdSr8WtnLa7",
  "key19": "2AkvuhxJYkHk7kj6kKqYxjGAdjFnec4B2fst7SmwFvk9onuhanH81NeCtcaWTqYRPMgUny8s21vaiNqhAFGdocqm",
  "key20": "39E7pLjtDCkxfBqTAYceprEEePKVXfSqkTpb8mG1nsYxh8NN2XCT51rZsXCQRJ512wJip3Ddov7TGXDE7TW4cthE",
  "key21": "552DwRf25fr6ManR5b8hqM7UzTTh4uUDYCQJszQiXz5pYysSfD5w93SWSbNSZfUP7Nevd3dRvCtX1xPnw4YcpnRQ",
  "key22": "5wt8iehGUAeuUhj98CPDEyLAJA2x2vAi8uW84257dfeRcakswCjmXxMNdYHbYw79HNLm13jzX2Xn6CECTN1J6txS",
  "key23": "5pAzhhBjGuAVxtwbXzHX8aqggKKmzq331gb9WAPCceeZ5thNRuXnwuacn54LQCtxNDUV8wji9Lv5E39Gcy35cnSZ",
  "key24": "4bZZAQhv9yvH4zsWhfE3BLoPNf5iBwuEBmZxCQodHfw6eno2PX5wD61uh2iabkwUH5y1g8PxnZ7B2jizMoHhk1wB",
  "key25": "2WM8DEp28cJDfejyP6FFL7Bxo65VznXqgkHfKhVQhwBJawSEd3EtmDRDEUvsBYS1QPQWbvYoufPeQumxN4gCSTfc"
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
