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
    "5WcpW4gXJGoU3MRqRc6NKCQJmVcoogxamhcARHvB7KTmj1iw9dfbGuYo3SLWtj3ebAaxSVB1MWtGqFBcYTe8gfkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psbb8tTVuPbeenpqKNgzppvBBBPLQhYm5q7EstSEq23ArKRjqWrDZajNmaG3ZiBobUCXTnRxm8tU4NmgRKxbWEa",
  "key1": "bnPQNdyeirzVPbjzU9kDtLC8gp7nKqF1JYyDVwJCh5nA4wymbNWZYht3vc3NEngAQ17wxZ4VSR2LNQpK11RwUL4",
  "key2": "4rxdUns4XxK5JZ6rHAtstqQJCTpR8gSCEEtdujeYFo8w4R4Ycvm7BdsswQB6fWDSx7v7QxcKwnjyo1sqJXsAAzwD",
  "key3": "5T6yFJ6NBR4VeMZDBoBDDHC49jFXD61fGjZRoUPnEDfYLxt9CojR85oLwi3WV5wdwqqMuiGEKBE49k8dW2F8WvYD",
  "key4": "24yXNyoZ8AqWq6W9nVQ1wQ7KgUiqF2w2cYoHmXwKifyyi6Fu7B8ZoHBBhDZBNyM6vhuJwUvdYBzvZPXiNNArH8LA",
  "key5": "5J3FHz91wgDpC5V8V8MV3MK8K6moNCU6X5TzcYwfocJi5CRMeQnwrgjC8Ye3RQrmGsroixb8MdC6rKpFcELN9UzD",
  "key6": "24giHdxLbPnwySV4D6aWSv8rxiaQFUnf9KNeHho6zTRnmjycJoFdqfZ1kxBm5hD2cbtAkAd1htEzhtdbeY5nd7Ja",
  "key7": "oj7voe5jixnV2CpDz7REiD1V5hvXUcsH933KMfdSrVcfNHrbmiwm46HWTSHheU6wCCaKqibzoSLdnwL1CVx5rK1",
  "key8": "4tWZDiMzHErgTeWUYRRGGM6UDfgFHw3UqEWAHcHFMJM6j83tFQowvgp5dsHauccUTUJm5VaKFTMYabmfKqkUWQiT",
  "key9": "29bLaUHX9zj1Vgg2V1W4dKN1QPHS67V7qDyNEKnupoguW46C5Vswha9yHk5pjW6KibBEvhH6NihSwjuiat4yCBfq",
  "key10": "DrPXMqFZT8mJXZzdi4YhEft8EtfxnBjbXUdDJSEJhoWaED8hjsXXdKzCUG4yh6cNeKdmK4mHx7ufYoZ1sBcQibs",
  "key11": "2in3NB6qzcZ6Cz25TdVUkZQWGcTpUAqtNfEntVCUnmDFKACqAD6NS63S7EcEeXQoAjbC7mbabzt48jakaZ5HaDSF",
  "key12": "fhPM3mEdMh2ub3JNMz9qqxmjjfNvH6XR9yZbivKZWjb5DsR65vc8JmbnDkUyMwCAMQrqT5z1gZKCZ5oRbyZxy8L",
  "key13": "3TZ4rubASJqpePyG31ozqedKKjVroZXLpZU65WwZj9Ukmr3Yd2rLF1NEGErQHrBe5yBJraR3xa6zJv9x38n62q9S",
  "key14": "3YGf1aaNzCBEEHYk6AmgS4ga76L5FqPhsCGJiybLVCWzjNjZYi5x1JbtjX5tm1M81av8gVgcP1GnuiU72QjKqhY6",
  "key15": "4RxNdqq8Hqzj3FK92y6M4pP3e5ZTb8Y9dMrrxZUcqvmUb3bRXVYKwB6KrEgrFMJ4R8VWLUE1H5EZDYQhGoyWce5W",
  "key16": "3wjckLyTfvxiMEuLA8noWNVPx2DHyz5KtgBGkqEWL9tweaXjXtWJHkji2TufUJGcJuo7sbER3z6mqhraDd7Rtyfq",
  "key17": "46z8VjpMTUbYfixnpscAgKtGAH3yVq8V5HoiivVMWyG7PERi94yd1KxPiY7gnwan4r7RENFJkjcrQYGKhdfo6JmW",
  "key18": "3atN9Dy1G3qmPg73NHHyAQ1wkDdDKZjaui8oNRVr7Cm9gUMdNM5R6FR71LxjDR2u7Kq4ELEWzMWqjdKkQ77ojgbv",
  "key19": "4E1qtJjUTvY8HED6myB1ZsRifhPzLFSeSKt8ifV6PeqHMCN4uUyEwDtLddm6V4zZjdEtNARX2eZLtBPn5w2CSBqc",
  "key20": "5TGvMBjRcg4YaZ2vthj4ave31Gg6UhacnUbbT71BNxRKpCR4eNLCQkWiHjPNaKQkXH4fDAkeRhY7zCaUeykSVUFe",
  "key21": "2SKtdN4dU3BxzBS5W1Vr3d2REr8xpewvZ4oRG7iL82sUdrSBkD8oyxJxUv4rn8dpTLybcHSNjZspcT5bV2o5B4hk",
  "key22": "5tuF39PmSVui6J5kgyWUyFrDFGfn56GFm23SQjrzvnHU37taRsmTQq8iNGp1xFmWFFjSiWmZDoswHaE9DqRARCZo",
  "key23": "2WPQmgYcEPBUUdkvLGx9jC3wFkTGQ5XAQhSjQ65AYG6FowTNjh52BvDz7CN7AW9cbBarxZ9RKWpu3kbaRHduxBBo",
  "key24": "3xAevh7HrcZsZ6oE4cVHhFgVAodnTFGyECqBPMWLMTv9KFyT3sNi3jT6JcAiDBFVsKTw3138nrmBcu2ZXPH6KdQ7",
  "key25": "5RmfjRaYgJiuT6UMjmzZWp9cMAqYBpy6X2ZXHaqekPLqNFSTat8UqBJk2Y9gdU6a3X3yxdCgRJLNWK5i9RtCn6nV",
  "key26": "3BzDoSze6m2jti4qkPcLwhM7SS8Z49gaN9arJukhZqwL2PJLZ4SLRXp6wnxLnJTvWeBxejC2QX28ZZn3cieQ5QtL",
  "key27": "TRqKvCo4MKiENhWKqyQa2kpuDYGHfk8XAG3B9mCshFTVtc7vMNVqCpRubYSSh4rKiLK1CemyoXZ7XkaZGzfErmH",
  "key28": "aqxfsoacukXxm2ux5SRPQyFLcBA5tSfRjhhAKgkdFBn8eFmTrV4d44isdstDVCRUYF5zSC3HctLgNUguud1Svk6",
  "key29": "2beb8WBxQd8PRY6BbZSrauYg9hBm681vcaFVKZg3qxaxHfu8ZdghBJi1PCxPq84pimHamyNmk38kLEUE19GW92eF",
  "key30": "43ZFCUVXyq6pMrhCk2hD2PdXtZVGw5qvo6HZHJRiKeLaqbUwVF4wMMypK4un9obDf7pxUf1vLtk3xJHL1Ls4JY7n",
  "key31": "23rzCU6W8p8cksTvuir8wdU5rTVsuHK7BzYFKB32Lb8fVqN19no335ojWD76So4RmStDuzYtHGSAVfVtHLqrBs4j",
  "key32": "4AZKhp2umQi1kRKR9HBB7CKMh1aVogJbDW9GUnzA6EGKLqH5zx2jKbjhfe6eFbtR1nstvU6KEiYC2hGRRhwZhVGY",
  "key33": "3DezEDgUEqECxcMaQuJoiehzpaVJ2x3WDWwJycEcgQY9EiTxajHMQyNGeQXYxsDFCtuHuuBoaG1c3U35SopCLax9",
  "key34": "4DbXFMYdcFLLFVj3rd4XmsedmFBhKwYSNowCTCaS1frVQ8rpd8NskNdjeij74sd9f4TrPuTPhdkqqSR6pcAZB2zj",
  "key35": "5TxANmJD2Diy6wDJj3vQUK5FrDF5hBMMmCq1PzspsxBMW25YspmquT4uHb4qVTf28kZZQSaPGaFfz9ngMvDRGQ6j",
  "key36": "2Xtqo81Z6LkaT98ajRr2HPMA4SqBWhCPEXveuh2XWvy7j8oEtPcpmsWTH4RF8SXrwttmmkQmyQTgESsjATJQbS2J"
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
