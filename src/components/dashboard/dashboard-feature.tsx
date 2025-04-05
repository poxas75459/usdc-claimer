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
    "2uAM25T8zmdjGfLn4EzGz81S69SYMQanbMH6DUrF6fQPF469chNYR1TJPiLXayCRUQGhe4qiBY4YizdC5432ahfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9dGnaqoF8nzQ67jJNFR3DHgogSdnAzQFhFtYdrYbbkidY3jJKdMxsEeKCEUEbSqievAWmSCMkipc228aPaSQg9",
  "key1": "4Q1NCSZ3H3GjYY7Cotu7yqERytFxrfHbBCabwEDAqtLXnMCd6VTqd2e9CyPWdTF8GjgdXfkVA93nBMBwU2aoFu4U",
  "key2": "4rvpgXZrdmzKUsWw5kiuKCMB3iX1aDgoQAfsyhQcFtaPrZrxsCkYCZNvjrhsKXE31JUssdDDeu7NSCTmakkF8Smn",
  "key3": "3wb4aL7Q5FF9Seb4YD7qCMvcygQZBH5Eun4ByDCVmXa634ACfup2X1M6Lgm9nMpr4hY96tPiHmMbdcgJTSvXhP2L",
  "key4": "3FNWXzv7oA3hzr1ysXBwQe3QaA8tSVWSaHKE3KXsYbm23wiJCjK13E46geGPYK8R6U4DDpBCLw7RFCGTL3cRAsXN",
  "key5": "PE3uTbDzSwtmrCFTAnNjxsxz2aLH53h5rckHX2nsMWV4mvfx2sukUr8Vgr2TCRW5av5rWYk8GTNx3zgrbER111K",
  "key6": "4bzku5w12uyZi8hJs5fzLFLbD91Cu9emxwrZth6Yg9xT7AJVat9zMhqgtzmiwyjKxZusJVYDxLxQMGK6E85gEKBH",
  "key7": "JmG3uwpL7p4wMsyhAP8CrchwaxGggq5pP7SFttqnkx43jjoe32fgv826PAquzE77n8tuipoNYdWC8QaR3pczs7Y",
  "key8": "28kq4wHJqPA2NJLhWKffewnSt9JLsr7fTz6AQ1asmDWcdb8HCxvjqdbeV2y5fNF63zpwDHDQo684SDpuYm2s2X7P",
  "key9": "5her6bpbJdw1ECj7d9MU6CNMr4LNyjXnKvhYGDKtRAmZAuWK4ZCjoeS1CM8aoWpk3fu6GtfPFTdCCpBM5LiWzafD",
  "key10": "5Bpy94X5pcP54jfRXbL2DWQr9ueHJaDvtHJSDMUJFqq1VRWR9LUMkPYbXUBUXywMuJUHcieHvGsyV7KeXke4fBdQ",
  "key11": "4KeaQw1M2vveFwzMWKjhG8VqpL6QLhNWo4oBko3sSzVbhcprsHK2pcYdEtUXKwM4jUtqLzvokuXedG18pma49Qjv",
  "key12": "5MCyWrndHXVNGG2rtuVfzLYCCW2rjWcWc5YgAfh8MDnnEfeRahqhqz8SZmqfJATDmSKUMT1N64C88vjHwqvCQuBk",
  "key13": "5d4kWQbm5ae6rtQMM7Zht5iL76vXc8qL588iCeVPsG2KCynWzrSsvgMGyfkSsxkAnT6vTk7Voj7XGd84wqbgiE1R",
  "key14": "4zGMxQmeN82Fwn8ZLu7othM7QvSMJro3Uq9juqvMerZRFURPCGuJGUqbzQcoCPVNeWqmsSQxNAhCFr9hTYbocNmZ",
  "key15": "5BFkLweN1QS6Qt4E8HkvKHhakJvLxVEFuZYNUf9Jqi6cJEskqrF9mMSwGNCK6mUDypxF2YtsogQsbTcpFMQcuHZb",
  "key16": "5x7nehMcKGMqDDEkvsFpoZK9mMSd2Ze7Beifke1CoaYrLfJ56fKdMnDqHbcBhgy5kcuxYQRAJ6WC17QDfBmc6db",
  "key17": "3GhhTSjr5quzcmTMRxtDHCjQ92ucjtYXw1vR651Jdn9znmqwZoLyV21qFACi9AmsSugDzosWvD6PMU2EhAQp1UVd",
  "key18": "4xG1V1pXXD9zYrzZ4wFwTL9w5MGWZXxNk1zakxty6u1emx5YDLvP3FGi59NUSEY6U2dqGsDNYQpmTQ5mzDn36jko",
  "key19": "5ToefGYxL8bwFVnpVhhq165dNCbzUkU9JWP2tdv55GaMHjz3pYFaL1wEsdk7W2ycRqHibBA3puAb8HKv7ugqfRtp",
  "key20": "5cC7vU5gwPLThzb5s26fTbMe8ZYiULEPkskF5BPYyhwwz1ZyC3vb2DBviFvHU9KLVAJiAsr6NkBLwhshcTVHf6YT",
  "key21": "296tYBmsBTcPQaFfCygfh5Zs7MzUDvWTnT25rLPeeBUEy4ohL1f6L1afcHxQFJFHn5rYpD4k6fvjgL6vqjenUe1S",
  "key22": "3sW1PtkmjuCSMfddG3h4WDFhWi2o19SmdUm7NhsxouCcQCyYNJi7WRr2i428nmkks4GEaQuTHNFdsZHW6ak354Cn",
  "key23": "4aZLvy5EgZJMkuzFZ4kEF61Ng6Z8Er2ePFxxSNo8vZLvxaqLYBwME7o9PHkwUv3xkWEZGn8EuWUa7SeMr5XydMY7",
  "key24": "3jYEPSE819qhU3vwxDZX8gFvqcMNrn8coUPk5cdh4tdZ7LxTG9wQWcohWtLfnyj6gCqdm7YAjJbaY3tFkGyihUCB",
  "key25": "3pR7S6fpcMRV5b4aiwAr4Zd2fZxj6X9nCSN4mW887FfA1JEv4hPpag8JorDsvTebLCBhecjH3dxYfPyQTMCB7Cu6",
  "key26": "547E5VzxED2QQCv6mfeLJgZ1t5afi3XfprAx6vJSyR7TYU1vQNiFyvSFUTqvrr7JmFAgoobq6N3M3FsQeF5xDtuK",
  "key27": "3inDxy2nntT85drSAH5NBZqq5S2zY2B8qHCjMhZWZELWZToswyvbmKJ614NP6p3XMNwaZvTQDs49ygwBrm77PBFS",
  "key28": "4zvLVWiaGFi9UieNdKhVLsih9W21fSFKWdAUnxLBiyqbzYDs3vZP88GUDftP1KCdp4p4XDr6hxPesaUQmZxJqP8u",
  "key29": "4VXgLwEXb5BEK4xJLTo1HtWqtnvQLnrGEiq99hSfV2n9dwfbPbkNpo51Ei7V61JCqds8SLFodhjafoE5SYb5BvGe",
  "key30": "33Z28y9XNATSESReWv7dhpK7pCh3gjvfthMaYEwp7CzwZeTeB2Q7Beor3tqQiw9eycCccoUvoHLTDKfVFsHgF6XG",
  "key31": "37neNPNyGzbLVCUB9MTsubshKHH3KN5wDPNY1B2nKjg5Dwpuw4yxXTBJLrQnSS9UocFD62L2mhr9w91fyohuoEwF",
  "key32": "RBytodgKMx7gbyEdv6Sngc8tUR4bAS1pY5KmNnMtX2q6hLipwCU7MgnxQLDUjRqbKLRuQQjiQFgYvwN19oGEDmK",
  "key33": "47RVPAPmzVv8L43RT4sytcbmpwUEBb81m2cDurfp2FaSgVcgPdE2cZCjNMDBMbPGoeNj4BQbvK4un7vgnxrmudZq",
  "key34": "27TNYbqCFAn3kY3KWuNXp4rRobErxGt3CUMTjYH3uZgya6cQZ4vHeMBSzHnVcC14dpPrnkeGboZ51FkgX5BVVkkb",
  "key35": "125AMqrq1rcMs1eBagjgSYxnDuQT4t47mUZ3t3UvgUhkS4qwTVC693Awrq7H3vJeit3nV5QoeyHtymMMrNecot7M",
  "key36": "2hxymg1p5ZS44MRLAZxg9BDdrzJAmWzMfVrpeyf1rq1RTkLxhSXYfKbsrpqsv1T45AzH32iGpvJrFyz9oteDikTV"
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
