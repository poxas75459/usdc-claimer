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
    "3dFSqA6HsH1TyACuv8oVrE1deVpcDYBHzn3wfnKsdMzwRdwzcwnwJ9mweBdGg1XZAp3oeyEDDM9f4JQ2N2jPa2nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kg2e3nr6dJywxfbnCtcqihDTR2RyRSzNvQBXQrzG2qiqkfqkMphGm4ZgxWCdoEhPpkieDVmBJ9pR8g2Xx95eVFo",
  "key1": "3Sn1a1ZGvz6SA4TekmfAK48FQB7TQUBYuHbbNRo2seWQNSDrUJBwqWz6agUCX8jfZozPWBMMWVHL3NgZ9KpMjjr8",
  "key2": "3P4tW7aAUjgmskqpWvZPYm8zteaf4d5PDa3ng4aMacN6rz9VJzBxzdk5VLRZigi83g7K56Y9VHGxPrQaRGiBjz4b",
  "key3": "56MHsJ3Hpjsf5LVJQw7rA2r2xAyVhg1XzN3yCQ2TTFBPgJHrfesoiSjkxfjFRwgVkGGXYUXyJ4misAH88t3Sm8jg",
  "key4": "472xS68nQiG5zu2ezK4PzbtiDdZUVUsTmDVATqrG4ycdncosp2Hoyau6iznEnviniACtAtBsyEq5AuNxwT4Yu2jY",
  "key5": "4DfxbwHa3RdE9iycrHapeVM2tAzvzzCnNjQfCU3LmuN18jNko7kUGQTPfrmQ9JwyJZ5kSPjy6mA1Ae9h15fYxgLP",
  "key6": "5mFQtcpLzDaUVxiq3MyjoXXjXMirtsfbPmMZVmK2TFFkYyCUchYHSScgNipgbJg88XGVZRWw9d3JqER9wUtb5KKQ",
  "key7": "4YpKHxffjBUqvMZrd3oudjt8W1KuHzvZfFdoyMEr9XdsQCQ7yEQSSt6mKBbWjkMdm6uWET7vYzFwbgY4ofVKLEwC",
  "key8": "4VNmEBfbTqeHYq7p9hbrHGDfrjumpnc7ZZ4VkqeUbbhrDbJxBqPzip8YSZVfG8GF1eVtYp5A4uPu2DfmHgfYXYRc",
  "key9": "62uKhcYHbqABWJDSHLkX1UqD5Q4HWjuq9y9mf22ex67otWihAas6cWi4DomQpqTKnuqeLAv6mUjJZBCNUpJd7CAG",
  "key10": "2JxEG7Hfst6auq6f3v688Mt4iYsx55aVkDQS8xCwtvPG5fkxCEbpP7ACzkKvcYSopoZ4NJPUDCKFzLTaUaSvZ5bR",
  "key11": "5uMTXHuPqMmAM9zGUndSmPAbzoyvJDcjBqPZ23AhoGR6ZBgi81uagh5ZYkGdMo4tYdhfcSJLZKnreZW6EfXg1Jtm",
  "key12": "3aoGcBJVTjp9z4enbdVv9bbDBtPWNPeAbWsdiNsZgXx5vWavbxSjKwCWJn8NT4L6hiTPXavmjpY7i4qhVfYTyfdi",
  "key13": "3j6FvDfWjBCEt5p9dAdKH7f2QztJHrt2gNQMogReRpgSXUFQ9B4tn2QQFogJToK9uqvKPM2VUqJZvQjVMqvjRCeD",
  "key14": "gZ6vmM4a2snRXsdoB9KAjL2fsgQrX18h5nZSeeQ55wbkASfujy2rMqQsDWSczz8Qb6SDtvATBrSEZgsxuFZu4LR",
  "key15": "Jk6y3qGTU5SWW81Fm9zAAx6WD71AsFwSY6rSLZArHippXSPP3zZBpJsDixzSSVdHBe7SZjVUgShdxJMQjb4jzYG",
  "key16": "5GhjRhwwBTxyGjSjryUCVc5sywYAdekpPrzktT49gBvgo46dPc1xVHj8qY2SiERCdBsP3KAJV9iv74FkY547hEHt",
  "key17": "3C9NHCEUb76eRvM2WrbfMDZV1uSmur66xyNHG1PCvPfjgQvDZNV47YJeRkts9cLBVvt5oBtXpxzcosbrWLNkjnp1",
  "key18": "HSccw99HXfMbi3LUU5CfUQ6o7Gbf5JqYMANpRQyMUuMRi74aYcfZePzo5TFtkoCDz4aakaBgdnMmWeNk2VtbFVP",
  "key19": "4V6dqxZRFuErgbninhZQwfmUZbkKLrdPWMGMMavfSJixN6LrhiccRYn73qZwsx6jh1RzmAYJckUT6SmTpeggePZ6",
  "key20": "2XR19oD6U2XHvW2iBWyVS7akgsmxPFFZWnSGhwYLjegdLQSkupQ5A8JX7Q6Z8Zfh3iTcm1SkiGm5E8GmbNWQTrEj",
  "key21": "5jrQxxuWPKeCLU2zD9DJQZfJKs5ahjWH7i6borET4LBF7w7eQWSwL79zLzA7ZC5E9rxkdt1QRJsS5X3QBvKgxHJp",
  "key22": "RjLc676Pi4rDWL5YWg3dMbc1frxqUdjQpr2NmuSohimKg1kmdKXVt3dkmHjZv99uDZonKU2LJax6ryk6CUttSnK",
  "key23": "2n1iGu7QpjnYy1PuaJd9DwNxe2uEM2rdK7TRXPoT31ZLsisqTyeNNsPqTobrsSY9fvbtfdneZ67rjUB8UPtPXezL",
  "key24": "28YZ2McVtjj5ixHTp6eKhV6HH6EyJq1kHw92Qg58RnvAvyBiNHFiw53qScHTESyFKBpBxBm6QuAky7U3k3prCJJC",
  "key25": "5xSK7X5QqTySPZMDbQn9kSJPQyetrDKdAMBpxLwAzCixG3LTr6VhTtDoEGUppfCUXLmQe85VCDXs32iU2xycsmuL",
  "key26": "23tLTp168kmmVaTRpY3mpz3jFrrZYbUQK2n6djucifNqdLB94wbNvF2naUpc78EfYjVZJAMAyQDdEXogzHQHPuds",
  "key27": "5NtWZcaEhWS6nPvZKqNW7aHz8XitoBmkMyp3H9dNzqnKvqEHnYCVJcCPp3qiXeF5tSwFknm5DKAjpnswDUz6DBhF",
  "key28": "34jAf5gMBEccC19z1qqawLKmkmkGST7vWFERHALdowRi83YrgfSoyowUCmmYzYSBa4JgzGwm3XMw1WjYnbRUiF4s",
  "key29": "4j72zViBv6PMCBkLukfiYDKA1fvv8ztnPam4vvxZj1VPu8bxhzFjHDZQHcTFTewVJ1r2Dfbyr2pGvj5CUfNR4DQT",
  "key30": "2W4uoSYk8RMpG5ZgRgW2QtNfAgEbtxuyPS5uPts1b8uivaCsYQZF1X9wJTYr4d3kLQZSyhvPx1Ps4dH8e8APNXLt",
  "key31": "3vGDH4GUesBL3CbYpdi4nMSNfrUHkwoEFw5kuPh9uh5U6zojoN9egB11Zoxo99wnGdSaXeYjBmtvxmoVidVMULAL",
  "key32": "26rFVnFf4tajQxBQUzVUcrNFduroLmYvbVs4oNFn5rFeT5tBPqyRfVnwgk6QJB8AMRBti3cP84pa6bDYFQLjShXd",
  "key33": "3q4zwSeZtGSTGAtjQGeDtUBvYy9h4WggZ4MZ8mbhYJXCNGRhbtofsMPrVGhVGtHZopXBUho9cAUqDTg1HFWUzbmZ",
  "key34": "3PTnxn5NbaVLuVRwPqYbBMAQaHd1YoBhuQJi7LcPn5vsFyoD6CWNqVa1qddAVrgKUeD2n7CkXN3nug2stvcyzcEQ",
  "key35": "b3Q95K1iMSK3hEwigxmwZiD5MHtGodKwKXBqSAfctX5G1QDy2HiwLpRJnkNPB8cvKqfm4dbmP5xrJxaWgxQArj5",
  "key36": "5o5G7SpWUv5JLqi9WswpkZWbLX5iudb4xoUKGcwV7bP4jrcg2Csep4y1pjxPn92QQUySEQrZi3jSJgnyZzT3SEbQ",
  "key37": "2yCKKqwTCSBXEqKXUPNnRBe2EYVwrMPJKjFKcFp9cX5TiLtzMURErK5qJzakZApH5J2xAPuDpC3qmDLr1vvPwAqQ",
  "key38": "5FD6aWUhv2fDyJvxm9Tj6oGGDpZrVLoaexY4RSBQSVQqHQYqE6JWB2iCizLYYKNjdQfQLKdkQ8uVer8AiVPcERz7",
  "key39": "5GiToAkaDDk7XVEyyQBrihWZJm4zWxnazWzXKpKEjisonbvSMAW2yAJ5HjUGUtg1skMssiuLYWHb9X2UPd18K75"
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
