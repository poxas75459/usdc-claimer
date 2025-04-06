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
    "2nUKkNsRcW79Q3VyCerFqJRHfj35ZooQswtuBoZCtzEKChXsmxAjf1LQKPxy3TYMPAxzwhKn1Lz7mLbZHibSEPis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3du6Q4e7YMyTEAgcCbWkhnsgzq21Sj1bkCDEjMWBgsR9a2NdT3DctkrMywVCypVFv7UhziVxyESZanHFTWtFRkyZ",
  "key1": "4HPYEeUCYL2e8SfoARNWkyaikMknLdmk9a3zZBtvjm2JdV4wvdenvUH3BsUbhDJxwJjhTDGDLojETVL1cZWT9D59",
  "key2": "5UR48UdyKwTtNQ685d4tgcq663KnqRyUx57b4ML8Z818XeVNw88ZVPFJnvduc9jf9Sk5sNo6dtjptx3C3xc4g5fd",
  "key3": "VzDDMfhkdpPy912RLmn8u6Z4ThQe3oJGpJBieHV5mNg8BsVRepGwQeGDWwypPkgsX8r1Nt7wfryjs3ErXomyZHg",
  "key4": "5ZcYCB82unzEMvPU2WWEazLZT6sFm3EKfrtQ89G8WPWq5DBqRFzHcRYNDVBd7NRi6wpFaWPodrNznFxBT2Y4yTUH",
  "key5": "5t9aNCDqnDk7AQYVU5LsG5pAom4aipTqDiBrcn4SFBKp7UvquWj9mFdU46muz6TpTZvHQH3JMhrTMFDyUfzvSoog",
  "key6": "3V6DxVf1nzNasjXLjz32o1gEMdJLTP5a5GyYnu7h6sRfLhb2VkRh1YDJ4saTAVdScUzRXtYv9JCrZbyyaXf6VVoe",
  "key7": "2KzrUa3ckDomHhtG4ngME7hWwCXnWKNCkyyZRfbcVmR3mLuTD1F1yRDXFsCEt53xTTEkMwa5EAqzH1veD2uZupLd",
  "key8": "3QaYK2sW2D5CJDQLGyXwunoVkV8w8tvrPf4iBoR6UUzkR8MM5dTWkx7GBiWvbcmnSa39sQsZtrUdqJXhoStxz4yW",
  "key9": "gLemtA6F8SD51aWdeATuwfUiVg6PuAD3ANmnvV7NdQQE6Tf6rozVs8SxAv7upq5VE2oHZCsu5Sr4LSmUAxwYk8i",
  "key10": "4htnCnBqvWM2erhjEeDHnmw9rM3PsuVCmAQQS12dgK4oHTEoWswE5oc89x8eLwqKbnW9tpVECPqw7soRTEfAj674",
  "key11": "3FQs9zU8Yj76ozA4iEfpu7fZqfVixwCVcwivTwFUFFww36efcMJ5he8sVkz1k2pzS5qj37nki4VC7ww77gVsvEVn",
  "key12": "4PDY9yyCfsXTkTZ2xqi8nVxnvrBpzwtKH6rMUVKLgkpDJU1KYj5EyoaTFtrJHhzX1s4kmh2dLuREj3hKqo5NxWUg",
  "key13": "5KCk5u7oR7KM98C1DyMHPBr5JsyMqAtZFnFJhX7KRHcYFg2owMmNoiadcNf65zSzmiHrm3sEciYhR6J2gEXKxbah",
  "key14": "2f3BKr6PT6MPdmMc2WUxSPgLdVSC3bfvEks9zRbp2vGqrbQfUHwaiLzzUAdJTYHJucDHj3nDpLKNMi38cWJo9ENn",
  "key15": "2eAoYwwHT158P9TG1q95SzPnX9PQBBkw5awja5oyr3K5jeaLS8tkCsuZNi7CUtXbSUmmoz9BP3EFHWWhY7Gc7siQ",
  "key16": "5B1eJdfPJghkucUoHArscUjQoLqrkZU9scsoFKgfzzNkWdjUJDVLAAkWiYecc9o8RGBtJKcRQzwx278vLJnWKT6m",
  "key17": "553KP55XvARToBuuLLL36QCUXGdzUaR2dKvLsmdokoGz4DReD8v4zmwuk1FRvmRoWMy5FMLsPX6UB7Jmhv85qx7x",
  "key18": "kXosUvdiKUnkww986uWnoCzHhUaQaFWN25ro8sMDpev4KxsUH9VkTWWwUtWcpJvPfyDi7NEC5dBe4fBmPzqFGve",
  "key19": "AABmB7QvLTJxb6gLRBuWPJzkCSx3KW8HyjJLTadiC5KEowogknFob3cK7Q6msiXEnyccjcppBtqmH6SSLFyAEJp",
  "key20": "NqHC8m1iR6ns2LmtfrKNNZC8fDh3j5W5m638h1hEZxJfGuDc19Rr9pyFeDxswSfihFXSJvb5zTmHPpeqaXRpE5w",
  "key21": "2sFsihL8eYt6i7v3dQDcfRMqqSWUXqnTodD4YwdmYZzkafop9azPE6kthwuN5KcbMd33QjrX9QW1okTn5293R1iL",
  "key22": "5FqVnhLXaUT9pWWJG5tHg23JZrF49pmLdgideq4tuZAD37yYxT6FVSP8PDM1mc1HVqh87mT6xQQFGbMjw8pkz4Hj",
  "key23": "UrBTE26emdcmAitCs3Z8F2fGcKbekBDkBYEgnkWLoqk2XDUXmro4qQos1e1EgwCb2kA2pDE7GTTTnodm5XGTTD8",
  "key24": "5giNLSUTDHLbLqXCZ4uMVYCbjApNUsGTfTFwrLuigjXu2VPMNSqZsUcBQMzsRZaJxELx7h2td8HPnHD9oUz62YRb",
  "key25": "3bWWwgRNVzUQPFc44SXB2mbCMQ8J6edFwC3naEPoqLpe7KbbnSQefjgeoimuBxMPpKk2ftvEK4pmacKkwPiHM4hv",
  "key26": "3kYQbgpF3muwwjBxrvXXhX32vyChEVYkx8smzfAoDtCYgiJh6B6LqnhMMVMRJpvZVNsrbBFpHTU2pG99m1QAvHyU",
  "key27": "2TwFBNNfGKniRZmw3nkNahDHfoc5AFC1JaVRL8Hg9giqTMWBftYywtBjB4f4U6JxwXMLq3pEhsS2zxoKAWJgLsVL",
  "key28": "5X2zdHQstNG46ao2tMdSUZYXbJgrjmYTRndCUKWxSZwNRPieTTo8zMiR4DNYRQFMVFa57mt9uG6z5kSyUCgmYnwW",
  "key29": "4iAVgd9Sh4BnvZAefe75jm7ALh4rBD3j2TthTEARFf3Pn9VHKRdmbWpMGHAXJhdkuPm6DMGVxudT8JPNnsp6YPKH",
  "key30": "5mj7hfcEMagKneYkWMRyXggXMwo6vMjTp1XbkXbozFSDsQXdgwjvjfqAjLEu635qdiU5qfHNJaM81HULYjjxHujS",
  "key31": "5NadDq5DeArD6AA2n9ZcsicdeUUgqTAxRwnh1cDuB1Cjy6w1LmvF49C7TWzcaqeG9PeJpmr5MwgePcDjsXajZ7pC",
  "key32": "LoxK7yAL9gRL42tGyqKFu6wy557DmFryF5Y4VpYLdzeMepcPVh1uq4tWncQHaXeahMnE85MSkLp8V5KKjj2PKC7",
  "key33": "4hMewnYefMM2Nw6SKC5G6gyH3Rt2iFsrAXLhiuNY5tEwHoPczuNc9jnhKpQYEfX5JTRvGv6kRDTU7VUZ97KWdBsz",
  "key34": "3FmExYCftAzT3Y3SPrDBhDdEvY8FFtxbqbppKargjjrwXjRUTwoaFeagp6Wq8SzsHwopLJyegn2nXnp4FwHfTdWk",
  "key35": "2XVryKmEDHbfNEMSAdH4e3BhcHwGVKkrmNC9DkuzSGeoXxswvBr8wV8octiEbnUUa6rQdjdQnK2nHfipnvsGwi9D",
  "key36": "3oHtcynzxfnc2LAAUFoTogxceTo6wkTTWt6ucs5ZThZXG1xa1S28NGeYQ8RhgM2Q85PivA2Yb7MAmDMuFMZxNpNr",
  "key37": "27B7g9KCVVkBL44c14v3Fnp4KkxusMuu9iJRmM5NDoDVNvp68uUdoT9ZbmGjSw6WiU3SYciZ4CwYSb9WVEUnwWQF",
  "key38": "4PNpFcxcT7VEiBpbpMABouJAq6i13pLKPv4vEM53NYPVVv91LePoNnNXhxMmPgUsCsVwJUSyZMorop7RpkesfrMR",
  "key39": "5dDvoShJYCyup1mBtpyecYYj6JnEaffA9W4b84pRk2DsXn1xVQ2WeEdD7F3KCaPW7ojPPekdcVNeF3zUwjbGPnoQ"
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
