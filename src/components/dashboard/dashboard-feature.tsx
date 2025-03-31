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
    "5TtZRSEQBpdDPZzZVyELxP6w6oySUxPkpU9Tx3KapYzmFSXnCUs665RsvjQ13QzDJi4sV4dcdPFvKVvA1Wg51efM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TT4zLy4qZduM8FVPBgLwC4LmXT3iQ8dZk5jxUU9PkqT8RtEXDGfyRGqgZSTvAXUe7vHjA8t2UoX3uqje8yaFRvT",
  "key1": "3AnwtQ43wQd8EoPgxvjkP4m6a7X8v5mkG6BK7QVG7RwQcTru9bCSEWjde5Hrd5k3A4rthMd6PBVCHZ64j87WPiLn",
  "key2": "3YyX2TLpiin68ToDXug3fA1XwGooa5aVXeA1DGrA2zCBo8jowqmr1JQECn3Goa2MLZEAAd327BQt5b5nK1QGRnaQ",
  "key3": "366T7U3h1CF17SkyKCbzaGoEAiqNJ9eXeUzmf4UZ1BMwrtAdMBgC1hUR64TGZERCjBZxFPbvyZb9tHv4LKBeV8Wo",
  "key4": "33wb3KQ4CHrtNUQe7ikvCdNG8RmCQqwFHfJzELJikDkVMJBwj6xuCYWB4zaQY8tF63LAvF1FCwt4C7MVPbmSegS1",
  "key5": "5nhFYvK7NB98JbMV232r9VNedZWPBqrGKdDEm2ZFrfXadHtWk55S7rcVdS8A8QrDYsBiMYmfZCBg1kkBzi3hsqHT",
  "key6": "3c1RxTUkF2K86kb7acL37QpiqaiWkR4LohV2PoFNvJNGeVNH58pBV2H6xTqMLu3qb7TnT7rGEe4sX8DJmmDUJDwg",
  "key7": "feoKaGTMfm7ujV57bJGo4hc3oYNY6LZtEE1mFmSdjW1LrSexwf8ziaXVs8Kyt75HCofxWzMFqPmV5uK5yb3kp9D",
  "key8": "2Be13skXXi1GnL25iqG7cX2mjNMAHrXwuvRGCKQqWre5mw19SySDHU6wa7pVD45KwvLeCiNcxyXJYpWFzGPe9Awx",
  "key9": "4afkQN7Vs9JMQta7q4JuhkKDXZbt1RNFKHbuMvfrxdTeTnSWCnF1t8ST7yXgniNTQ8FvMePxbztjSURCKLwXq9BV",
  "key10": "4XXVFfmRprg1MznSu3sdAurWcP8FmsdmFpSRPZuqGDHS3CnP4Sbkvre14BZ1hqVhEQenr7yVrSy3hzKyeX9Yca3T",
  "key11": "2iYaKJR1zziCfojiXuTBckzBMNNpCvTnKuj8UCkfUrhBXZ2HwtE8k6qXnQPfkJqX4LE2pcrCTdz6h7PMAXyTRffY",
  "key12": "4M5qMpuiB5XX9VzkkZmj4wTPBrv71EJgtVQwnPrhSMKSbqNKzQ6NcyHxQ9Xv3i1zxeo64KibAgiTCaxJr1SaeWhR",
  "key13": "3k9e1pqM3wybFLKqULxG8mckBgMndToCA4j33c6wqNUVBVLbrHs77szm6fN2nWH6z1uNLSKKxucyiPy3jhVUU7uj",
  "key14": "5eUBjPurjtTJXBXxkEZwEFNupFhLoL4ddgC8zgHJ4ueDU7dQ9SMxWMaKjoSesUUhcTjEG3LWae9kPDp31nTJevfr",
  "key15": "4PVa3oGQ5ks8Yr5mkTQgsDuJi7C1fAHh8XqYuceEQWcJwYTqjiNnMD4B9Fu4STdhePF5yhCDFCvsvKiQddmL3SoT",
  "key16": "5z1FLbTpzv7pEorsGiMr8ziFaJj5KDhJnwLXyarduxS77FEUJwEjsPr3hVPE8RUuHVuNTdfvd7SgsiL9zJVdWqZu",
  "key17": "5TZSRS3iXdBLoTf8ox9WgAZGgePge8XkhfAGks2nhU8zvvaesCw8p4LZgHJJeJfM4jDQpoC3pXb57Yx7qZULrqw6",
  "key18": "58B5pQSaD8aoZePjoYRXZTTUE3mLTV6UAMtVYAwvuUUR1YQrZJpQabSRXDSTQYhXt9QtWg5yKJsWqHycaBipnDSD",
  "key19": "4DLxaQjQFPaNGKXiyRmYnM1cv4c5WHHoUhp4hnyKMSVti6XSfQrc2JkM4DnHYV7GRETXUpvQMZExXdqDYgmgVoro",
  "key20": "FBVXFWUEFsdLnU8dYiqSGH1wuC7FfzZpCx5wZgHU6KWyAu69yvNeA8AuDYTk7purB6uBhdH3V9vC67ASZDveruQ",
  "key21": "2aNTcaXAgRi87Cf2GTXh3HiEW4RnDgWuhRe81bvY9njD9kxPtErn22GBNyEj8itZdsauj5wWHhEUSp6ssYFgx7Zs",
  "key22": "3Noek82NStXLYj75gThe78uiVdcV5Fzxyth5pz8zgVFP3exxCqE5q3ozFUupgJgeXAJJWeRCJX78UQDdhbpLcrGX",
  "key23": "4T1eqQjFMpH7Aa1sXZrYh5gLAAzmrUqt5VZU7m1TqCsDyWRYeLcp6Z3pMzmPkg5cGu17GgRNTpadpqqoTzSNKN3A",
  "key24": "5iGzeUjPsJQFbuhdGy5aZfR1UBADtdwrgVo5PQfe1Xk38EwSytQQfQBiv7UqHZF1psPiFSeqN3AyWMvjfDSGJitT",
  "key25": "5jgcnTX9xHMXBxqWU3oNG57T2hYQ6bd8jvXp7JgvqQQahMGayi2Fx2w5SEYKHiZYLezL25xCyPEmy8uGFtGVGg44",
  "key26": "9nF76D2C9GDAxsZd3dk4BXBYisDjocMWUFAY2nDMGVTz8M3Sj2LMBCnTxowrJi1GmxAhsSSm4aHV5MW1DYuAenQ",
  "key27": "1f32C3GKa8Nz1zdo4nj3JgQumXNcqpnBpXMZesC81SvCtf5RSeHtspsgGKqsw1uL5bq3vfE2M8i1kfBRymdbGc1",
  "key28": "3bgjLKgkpoKtYC6U1XXRnVpMTBQoWdW8TD127FaZNJg1mLJNeiK1f4LeRHPhVe1kbEaPts8pom4ZNgW2jhnbV5eu",
  "key29": "5RzSqcWBFfMwoqGCHuMLQq6o8JMebNZg7fuAWzbGFHMRJfgbsFxxZRyy733rZhrBMVsZFHG2rmErU37DwFM8EqRm",
  "key30": "2Rcgse1j82Bp1ZV9kLDjsUEevKB8fpWFrrcQD2kUDqMp9PuqwufcV5uhUZgoJUy2RfrQwsF8vfYUDpFPgGcnsxsy",
  "key31": "3hqJ8NWF8c9zccS8UsXPzwYu5ehYF6YP3wdvKcRsQ2jhe8QbWCVcUjNLrSvMyvH8Jg1tF2X2ngCSHidi3DCqqLp7",
  "key32": "3kzHfw75GozdUSUN4KQfMbya3274tRu7ooNn8AJje6VfyuS6L5AfbnaXjgpC3spojkMy3zMEL4UzPSzvt2N1QDtN",
  "key33": "3Fh5UAmpJxcDQUb8E3EKFYxG7wGSJj24S9s1VGxmxxs4tEziuoTG5MWGzRtuk83yL7gcWW6AzXABFGzwXskw11iC",
  "key34": "46JCppjHUvvcQnumtG75M4A6pxwx1CoM12bRnJXTA8nd8UAip6AxbycFpBfHYHM7zfypi5PLCZvgCCsSzqKmF9YY",
  "key35": "53QJ42WQUMe7LPQeBX5Rb1o8NDmfM2DGvR4QYGwcrHgk5oBcJsqmqc3VnT3aupDKza4wcPyixdekV3N48y5uvaos",
  "key36": "HoowRVQXHMQdtc1X7iWkc7bkL4S2syeXAzK6RoJv8bikbd1TwgQUbQFr7PUbze36huXEb7KuK8dythd5xJxG3o4",
  "key37": "5jtR7Nx8Vz5PnyzDZNrfKZq3FAe8BDgHDa9sV4HbdLq5Jew2w15CvrmKmymghMViN65zy49YWAL3UVVho1L48g1Z",
  "key38": "3FJLnL8op1x8GEHbUe4p3rkd2fph1mY7fSn89WrHrppBRPZJokkCEPucdep8TM9o9qDo38WjQHxZBqCHbJW3eTgv",
  "key39": "2T8SkmDXKCydiNzE8xJq6X5wWizDVztmxhj1uHoRHAcUj34vVX61W2hgzKQxa7eTCdpWb8emf5sdCekvW5edpSiz",
  "key40": "3CNZBexeGL8LmBQiCb32VZodW9ijEXLjgudZqBxqrrg1fRkmQwcJs75e3TcesPXMyT9qNDNv6eSGcPGkwVEsYSaA",
  "key41": "4wnY9dA1JzsniWmGsBV38q2yGTt5P9L8BcGsFKkmhfZyceKoDavT8eZPKsMnA2imUHSwjB1VfHWDWMA2Br891EgK",
  "key42": "2Yf3yPhMVxa2SQtoKPDqQjiUe9Hak3WwYhKYfxA5BVsYecf8dc6pTvyXFjnRmyWk2pXsg3vqE7BD4czie46UJ6KS"
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
