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
    "4nrxcPwRkQKGLWEL8hyDKQvnMYopxAxR3phpc2T8F4G62bbV6cEyQFZakhYF4HtGVxgsyBHKeHcRn8Ry8cGxZ2fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifRoRj3TUwcWav7fZ2Mx3trZcFDTmVoD8wkTHb7wwTeTvhYinhkTqe1VkNF4v2edhv1HzF92RJUmSCvebHUdTKM",
  "key1": "3VuzcCpnTRqVgJAkvDtwaRjvgBN9TLKdoCMkw9W6vspj1dSd5W5qnd2oUykzH9j27RiJidHFGHUBsAsxcxpGoSG9",
  "key2": "3AsH29nn4Hyehx152T7jBjovFW26jomQWwYVtRdgJv7WjgavwrkQnTpCASaTtSwhFvuH5odht3wMF2XkmsugBRjR",
  "key3": "3WmKHrxKLZP3ZTXBaj7KFLrAAiGkbeyNtLpG2xRq4WrNyd4tWxNqTG7VLLffRiTutrnbZ8nkZWaMumN6jHU4GcyE",
  "key4": "5kZ9zoDFvcLXXcL7GPwgEwCVc2JmE7vVszACqrG8YRfKN7BeQTz4C4S5TjU4swftJV9nSEau6QeisxV6sksDKG7g",
  "key5": "2G1bPufQw9j2fUgqfmbT3BhQRRfv9YdxpvZ9J5zs4iUSySF8mAQhJC36dFuzPvGXhpL3ZkWFWqE4J33cHLnt35rp",
  "key6": "2MwMXjuWk5UaeM4D2c78G6gX1pKkGJe4JroX2NTYCb5qrG2wXg52EoZVbP2svt65vthCKzuiiQfmaGpMRkYCBeJg",
  "key7": "3vkbWtmGtECeWnhwXG3LRjDUTJvr92itadokpeeCpKnrkn9fxaqHBa9ie8zTfhmV5N5u3V6M35G4opQrUvrNyDj8",
  "key8": "4j3i4EkAgkaCyucftyJrHDRwP77fvvefdGj9cz3sEzc68NwCcW4KxWU6eYrkhpCEeWAeCdqw1Nqgw4fomHXRRDHy",
  "key9": "3JvdWk6LkqbNeEAwxzgcS5ZB6i22LPrg3mYHYDtHka1bSboXnjtPkQM4noEK24nTdAQE5FxQ9VLdJ5iwDQbjWC6r",
  "key10": "xYRoHvyEJQK846v4iEBJQVWymACjPdAGMYm53Pr5rFYkPaZpCkgofXSY16pGTJPDvogtSqnxozyStztEewTn7SD",
  "key11": "4ycVbhezXQLGWEJNvA2ehvPfGaoZnAsdL77z5bAZ6NoesZgyv23NCkcyYZyN36UsnbKbsW4F8PM6FaSWZ8ynMggr",
  "key12": "3xosgNvHyMqM6pNHDPCKahhdoJeuuhKtpVeeXwKrHVke6fydSNQjXEpTfJsipg5MwTGWCvZmuFgyjRB2cBqiUAzR",
  "key13": "2QekHZNGVdCR1T9ECCHPBnjrSSuEy7nvXCTTdv3KrHQ2vHoxtxK2kRic4L1fUf8CaGS5TFgBW78Cc6ujznKzAUnf",
  "key14": "5yP8nJWNruLKuyqVMPNGsXkAfgc3MT4vDz1SY5WkZ3nZtN8v8PX7c4JVgiavjevEj8kzgRX3GVKC6aJKZaaR7qMi",
  "key15": "4QrZMrvKwiiBDVz8zZdvV4HrfcMm7sNSDX94DyxVqbZbFAsFJUWDzgUULRWLjESxZHwgrn6xEFj3PCwZTQ5zPMwb",
  "key16": "4XNT7DVtobNsJLWvsui8nHXfZKHU9QYdAqAxi896cCSx53nAkXxcbrZDE4PwHffFGPngGK2NgdTpu2x4Gdbkf2qN",
  "key17": "5WRkiVFpKUkQ4cFjwKquwcCZn87a3fEYL1Pj1ktPQxSn56E4Jcn539g3PU5oRLgsRq3nEz32bH6BaVpUUVYdhSRf",
  "key18": "5rXLrCCtLQDT9RkuHT2iKLU4G7c1Z9b9Eqmo6XnCMfYNfPEAbqRZGJSKWxtqrXiaUwCKCPBekRC4ctXsHjAs4Fe4",
  "key19": "4GafANM2xqotn9xA6mz75Bw4RdPccKDEQBwjaUbECaafXbXxTJMFqhRTuFNHT6jDq5xo3eCrM4hiQjrvjuY5w28m",
  "key20": "22p4q64rGvQsEnWaFwRjirNre3tRjccSQi3Qxs2iLqY59ybQYUwm6vbeagXAfw5vM6okKuqwHVnZ4iReDuzmTaUo",
  "key21": "4pVm28qg3pnoyej5wKFMHFQbXcvmG74vK8RUnRYNbG9ia3aj9eZt9eT2Fmsqz1gXbTBNRVmECU2mBPP5qmMxvEif",
  "key22": "21VQpMPdCz31BUjwAFPr9iwxGTRt8tt9P7xf9XyQa3JjhFwXGu76EBJhuEdo2zaTXTsmdHL2SEPpQQopeackUMBy",
  "key23": "65eSPodmQA3yNv7JqJkifJDz4CSsu4mysVnCNQfMcSGj8Ks8XGoRuSXTkWWJUyYmBewg3mqj5BvesYue5p6ZsQ7e",
  "key24": "5b9HyMwHpp6DN4KGiWkkyA4icqZm7kQnJ14uz9crSu9pZizv2xKDqSoHCzau8eH5xAG3sJTXwRFfpak78v4edzAs",
  "key25": "3GgZDnLseVFxHrR8dyu2SjNJJhMdaHJFwA5LLHFpqpRAajGD7oiQ3HXzFaj9FDUPYMCFvWd72T5guM98weZbTdud",
  "key26": "5S74LfrdrUkYyvq5q4CER76YC9LA3WBKuq2Pb75ZNnwMvoXKLeUAwupvTMMhUcYwYp7EYeuPR9KsJMTtzEY8vLCQ",
  "key27": "4TnNAipwE8Ze8XgJdeV1zozNB15YFouDfKCZ9pnMWp55ow8zAKR7vFZqRHLGxJZvBNmiLjViCEvLHb2unU7arohW",
  "key28": "Xghk3w3Sj2rHqDaBE13vyxymVVgjbS38TTx3rkQ1FBHnDD64R7Mma3GzB3FS7Du3b2Qzr1ntptfTZTViUvEggVg",
  "key29": "222MhXB1ghFBEQNqEgpmc3xpLbMdGS7ouPDfP6MpZzAd6ez1SHLycAbv8W9sZk4LMiUy8U8u5hRPwzidaCJHWSSg",
  "key30": "5KnQBVmWEPkK5xcPxXxtbV2Wk9VMF3cqxPskmsojuTLbwioy3pXpDLLPCNfwCAboU7UnsuDXGfzS2NHEnJuXdmNB",
  "key31": "wbPAu6oGxJ3wHQo7UbFULMiYJUmzNXmP5t57Cobc7ZeZTQ33Mh2BE3Gp9ghM1KE45p8Vy7dJbrybNLS7Aw8zDjM",
  "key32": "2kgFaCZzHWoKtzw1cn2Nm29H273bTSDoHxgEJu7VTdKUihdhktvHViAPnDJHU82WSZc4UemxHwGHHAPzsS8Wic2i",
  "key33": "5rGBjyRZysDnWHCz7roAhpJNLmxkr4xuGZRmuNPNd4EpbG8uFJcECG6Gac64v9Hha83TNWinDDd8ZwKnzjK4GJNP",
  "key34": "3PtcDVEKMdVp7dxwWGNqygYL8Ru4KmBBoL1rcFqhKyGtRuoDsx8jofRzcgRk9rUtaZY1hQvrA8agCE1cvg58CREe",
  "key35": "35sX7R8ti6qicUSRR7LnCtGHwfHFZpmehHgF94JNqeCY6dPryCHZ2JgzFjysV2qXuRkJ5MYNP7eR3J8aefsRemTM",
  "key36": "34qNEqdn8u13raA5Eby8wLS8471m7XKNVnYLNZM53HfPorkgdf4ru9NbDKrj2P2CypQ7yHT1WTyBtZMmQjK2DR4b",
  "key37": "eTaaDrVajK4mXJDcJWRFp4hJgnPevtgJRHUppx8vs49BCwNn2h2tJAwGsLAyMrNzoKw7vtjrPSYx1RM274CsAMW",
  "key38": "5H92DMfsHnDWdWia88eYEMLyWXGNtizf5ioWoz2uxa2A7UqwYT4tX7mVvdQTUH5ibT3QbxTwLyww2Me8aqeQgnJS",
  "key39": "3eLoAYp5moFVdmXhDwkUuvt1h6GbWExPaqqxVeKkm88Q5h68CWfR6pNvAnSRKUs12YNrod1pcAkWHSDf3L1V1vNq",
  "key40": "65rp3WJSdnFuaVxaY7HFvkxnK5C9q1SAMnZr8S73jmpvYHWqpKHa5JJDUpq24oYrVoYLhWCcFzvjkR46wa8bFKmy",
  "key41": "5LSPAQeQu7GHG97UtfGMnj2sqCJpSAgjQpe7ChFhxw9zHXWYoUZ8AK5Yc48D5nXwAnUCFCyLv3RT3sCm53bdy62F",
  "key42": "hF5Sf3nVXEV7zrw1kCFPRtYZTvb1GFh4MaYNcjDD4y84FxYJi145WW41Gg1Z1XZ9U8TEgk7NZmyyyqJnnvicHq2",
  "key43": "4vEvnTbG8dsyd31FkpM5wMqhnxVQpKt5PQchpNMPHRBMkyJRcUcWwQvrh5FeKBoFrQhqe5wGsZGLp1GLYBnTmB2x",
  "key44": "3akQJGGq7smBv89fYfwWd1Dc3yMGJimGwwWo8oSJ2Mb9YrrCtCqkXJnwyW9C43jJcphpZEUKrVxMNGgP5tqXKZdu",
  "key45": "5EFFMdahqJ5hsZqWPETYbMSfoeYvsmXWhZgDkUku7KuPM88kNgybX78VvGpEtvfPctcTo276WEmkFCexdLRTXE7f",
  "key46": "29dh7kenU5khXHA1CJnVnCwSfLkqHb4s1oxyhHqDNws7hU3WPj9xfY3wcHHaP9iU2PgqhkSn6a9N4pUa5Xg9fAwV"
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
