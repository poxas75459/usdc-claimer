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
    "tQFFvzrhLeruL4aHbmPLA4zXivaL553YDk3zJargt1U7mdLKZtL3zzFb5GkogNZSA1qM9gqh831rQP6gskWBSQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s6ziFmm9QHbKJvFojHH2EWJPRhhpoH7vTqcY8ihAkXPqTUwcVbX5bGHf53Xv7Dd2EJmkpLpBYFUoZq6baCiMpwm",
  "key1": "4zCyfuxseqiUkmPiBwoHtXUmcp3M8MuKVTotHUshpUrSX8imTVpWSMKMTV1ZJzzPa7HhP5K6N2jBArse3nLU7Z2z",
  "key2": "5EygzvqMXaGYfTsdR9T1zWZJnYA8jnyZxNwsStULFhkcjYdEREWH2Fw9q2AQaduCc3qSPoBcuBNfiG31hxXTTM2o",
  "key3": "KP2x8QpMpfoyt9pBzrHifF4YATJHE3Jk2LiMiPATkwHo5UTFyUxEzDm2y369LokDE9wKZRLRrfGx4jcEjHM9Qim",
  "key4": "3iPzJv5gzKwHCeQ8NxMijZe95szGgTsDFvBWt9twJz8fWasRz6zn5pVtX3QkG6hziqbLNZBYijfYsn1cY6PDQee2",
  "key5": "3WEDsbhrf3kLAem4f1o991MYC64fGQnqhy71HAwHLXJQRSCdxYYcyD3e4y8D9y7EQkYWnXPCzsyPa1oBbzjq839F",
  "key6": "zvx6paemE44fBsNAYRfxuruWPv6TWkPGw55YGboCyR7uq9CPzvBCnpUKgMBVZwpRqajSvex7QQwaowd16migt4C",
  "key7": "qksNVmZYMRyRXoyh1VjaWAzULsCp81P6PrEFrNHBkjBFqSXR4zGtnxxEdF35SRCWEUPqAhYzBh2XauWnP7Zqr9a",
  "key8": "66QN9rwj3nvvWsFisry8os9FCnkWvHK6wfQCpyHahsrcEPnKWekuuge4p4fiDZib4DoDJdtySb2UGg8F8GtFxgyj",
  "key9": "2dCsxqo3g7ZCgDAXC7XpBK6ohaaDgjXuwbPXZe371NswB1ipdPRwvvgL1NCsZirzogb9quyuataiYg15n3VKsbbW",
  "key10": "5m2ERywajtDc2pUSeDpU3GNiEFWQEnNzkSnJjV4q8mGKkk8fiuhLiW67aafDkFZ8qTpFBnGyJDnjB2EUfEGtbX6k",
  "key11": "5Qzv2DFW9t7sMzMuXmfHVKEgEa17qVDTnsFS4KQSp56rdbgBQUdbRZS9YEVAkG8EoCQrkq3ZgMj9N8Yen1edN8W5",
  "key12": "5s1XrBruRJajzrGfh29fGAg85NF77YqVbLrZD5nP6k8Bj9yjkPG5sEqnW9zSmwKGU3UUJrhs8Y8BUnZpN95ACn3m",
  "key13": "CqDCSq7pwYZpZS4ZMrK7n681dPVRt8aEB1T8JRR3R4Zje6Wqkj9dE6FGzZg26purYk9UsHq8MReiYVAbsgJGQ7x",
  "key14": "R5R5nBf8RsuNHguPuFoLjhFbSDuEfqCnkwLn8zWTxJy5LzvTzvs9XtRzLtqMFGizguUiF4evCANj8eWA28ejC6Y",
  "key15": "2SoRvbJtcFeGapHn49Rim9rs3MqxXwfZRMrkLi2gpP1j7iigfYJvtpJQyc5HECobSujyxVPyjrG3CK15mDnpYuSL",
  "key16": "4mbh5HwKkBD7vYQps56tWteKBHWeLFiXmRNeYxs7Bq4JucHHD4dS3WjCTfT2dDrAB4N2Mpqx5NoEWnGMoxNBqgZT",
  "key17": "4VigSKhBpHedK3gZBSyBp6fvCLrsrqivfkHTTmT46mFLuZ9wHuRyvyuvtP6YDbwRNSZBhGNZpyxyDUZJcXnPBdRj",
  "key18": "gPiRPbWj9ZoDBNy2u4vvQbLBifCz6KiJ91meDpkesKwYAEZdEoMkFYXnrbCbwbazAzQjTrwMdh1PV8DRFu1HXL1",
  "key19": "4vRneK3bmSij9A73CEngjb6MCyJQtatf4HMVy42BBmKaFyHN2R5yzKsx536xxciugvYSSzn1ukAM81YHXQKqEqct",
  "key20": "4fxxMfNL11dComM7KK4r2ghHrV7hahFZM8DHqnQaw1hwWWiiLjzgvTDFuXf1G1yZmia3K9QcVnMsFSfDVbpHfPKt",
  "key21": "67K43JgaXQSnDrfNXmv6Xzr6aqDqyuFF8vXyKnbvS9DbYrbu59oeUkg63gYY1W3rutpd8FZtHUYGNFBMUzXMErQx",
  "key22": "2sximgkYcH3CTDMyMyemeZW2wT15jWGUKFzSmdc9TX5huBDG1qVt49kpCrJ8jLYSs6sDp3vYCWuTMh3zxz2NtMKC",
  "key23": "3EJttZQB7sfGjjV8suYE6aqh4wM6jnzwZNhSKzUzhomtUzh6FTWwMJCz8jyZEsroWhX4doKq6LJKngw8U5g7ch3r",
  "key24": "5CMC6hU7mmAkemhUg8L9vKWv8X2zGArHV3SbGbZjP5UXn81GCQTG9AdrBpzRbjZzHYXwQEa7Zy1kosNMpfvt5sv3",
  "key25": "23hAM7yJCXnDPscqMusG85i8X4h36xdLoD97AtHZRDd7mLvWXnAxPz147LxER47fKMWurvzUzQHptW12znS8GCFg",
  "key26": "rRtovYqs3wdfnkGKutNNj6DCrqnsWSDwQ6p1AopPETzhvAzuurmzMJYfW2uy7BNHVHiZMJrM5XETaEoNQvWYVVD",
  "key27": "3SNGF6zZbLSss6HbbxRbhYq7piRFqAZHhVvG1uEUKkqYooBfKpp21TR1zXa8yp3xV6i3shhxYBvQVookiointYQX",
  "key28": "5ojbWac1cWc1CvVoLAKqxibAQhsr71S86SjgAmC9bqRdNwD4fUc9Rahhs12Gruzjy4PUaJUtJkskXksD4d2wYQUq",
  "key29": "5FAGvQkA91yErdHu8nTDxjriFNFR15GFNd7drTeg7qgVngodiSeqqTR7uR2ESmWovmfejTE1vxqZA96d5qJy6u73",
  "key30": "5JBrjUHCJYhqsUbR67x9xD56tUgckDWvzLjbfwwXufMNVUug1kLaQYh6BVcCXVwMkjNvR8j9r1ceDtKzqmVnLi9x",
  "key31": "4n6mLzUXMXja5vWUVVMfHSi4m43oohmULCVWovbaXCAo6QuXaG2Y2rCo9wHoEt7pYMmUkigbBXV8i199pLu9NadT",
  "key32": "4UCZgjTknJKZFz7YGF94pmiNCgcLqjJKRWDeoBJSd64GfDwoQPcGUKb4EXdGiaDCw5N6jyJriiTQuPJCBAEWNjoZ",
  "key33": "2JyjURuP1oawBYa7Z1ve37Cx4DN9tFvkatQMYy6TDERLoBKbk1LahSoQTgDWLpDdFd6J5tbVS2x5oB83jBuvdB9j",
  "key34": "353yF9b1gUr87zT7FKsSDX9mMB4UdWUUkYCF3b4iw7jkhs1RFwAgoeG8gWz2wn2Hf4Jg1g7zSSkgAgyqFY1jEAYg",
  "key35": "4kRXeu9zjxyd96Mi16qoDfZNvqC13t84RJGQpEF4qVM4XE87p8yVeqBobtJybkPoxqq1r48GDvg2HnkfqeiMRpKg",
  "key36": "3LgsKg1QEuCmw2KMqS6apN9ETpJFTnhKK9rvaWzucpYyMUjzdD9th7B4AacdgVd7pLp5Z4Q2QoU9HSTvt8JWByKr",
  "key37": "48Edf4Kt5ABLxgSM3yMpiFdxpQP6iUjF3CzT8trLXAneWg8cYJamLyZ1J73tpNmAmLihbcvDNFyRVAJVJniFhTN3",
  "key38": "J92VA6YEJQXoHNNdNEm7Entnm5VnS4fYEYzYaVHgTpZ6ENVVgL1K85PDkonPsz7MoMkdUm4hCcTCvZpmC1pB9Po",
  "key39": "2jKcMAkuccT2bgiWcnrXevxwBq9S13W8FLsZ5bBrC7uqsSZNkRm8vTw14SEtG9qNJJoQyyLF4Y31uML5cttBZmEH",
  "key40": "3BYqi6C4bik6C8EzVT55uFFLD9QiqGYSxTiG5TEgCkxVVvLBHgikJu4BvBxG2PjijKB5uijUC34eXgNsbxDqWWsE",
  "key41": "4Lkxfv1q3bJP2Jvwr2NGXnDfmS4Cs1T27Ut877qauX9XDh4SYeCJiyzcqHLMCgpyo4dYWUWLBdXvuKwhXrdKroNK",
  "key42": "PgwzbwB8jDqNe9v6zjc9UTDNY124mBuyj5gGJWb8VCfZZm9Sxmujfjc1xKFxhc6CZhHZVLrCjXrFovKAGibUQxf",
  "key43": "5TrPZQ8LXu4aqzJdCiXiXb2KytzLu38PhrmjWKL7EhH6Heb27yxrvR6dUJfCnmdZyrAGDQTACHAbfva6Zv3qoVkT",
  "key44": "NXUUyNkDohVfXWGVYnNLQz5UVk9oW8E9y6Y1UpYFbdS94D7kz8BwULUCyME6n13pG8jzC2rnyHtd2suN2x32t5Q",
  "key45": "39nQHkaieRHGcSPZvYTTyAUv7h1nJm8EakLFpsoNzxN9CiM3Pqvw11QhRJLYMRdvuDW3eZr6UbzRB4Xbynpi6mAz",
  "key46": "5AsK5bgffZ35DoD8KRxCgqMm9pTojZFVAUjNQ4rGRXRM81HS334WQvVpzYJmxZJTbrmhBqzmEgHEG95uDRpDfWdh"
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
