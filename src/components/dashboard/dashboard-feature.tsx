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
    "DVGg2DEPizFXQXLfL5CMEQ5WhgsiDyd9e3jxNg7CJfC2ELwvVjfuAebJCY3qJUskxg4mydPnJUWneYUciL5unq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zShuGBkn9FAnZFUtPuiqKEGg2MQoNFyyea8DS8q98eGri72oAVhwHk9szoWTdB72Ebo77h1zQdCvs4GK7GcxnAG",
  "key1": "5C7ty1xVuaQQ6Z8tgBiEEaM2qS2GZpAtraMnygmXC6mXur5bMUR9KKLk4YJy6tSMPG5eJ7ezkHXHkbahzMwS9ts3",
  "key2": "4HY4rrR7zZHdrmqu8TPH8a1j9LAxoaK64UwcqAoZJhQkNJjHva8Y5z79NriQ6v9Fic7RPE4Fgpcfc2uQAkyWSS7z",
  "key3": "2VGFq3EGjZSHCBvNgi7wzQQ7Sn22htvn7d3CrUmPZorxTKdjdZpwyLaPFJiPdqT2PNxUy6qS1PRomvgz9hJnRxB2",
  "key4": "3Tj6vEovkitJoo7uajj9FBmCRi1AKKmxLNYDDAzAy6rD8h9qR2gxDnnWHU7EfKd9TTbnRtQd9MKeE7sYmCyDwQHv",
  "key5": "33RjEP2b6ZbpV6t7Ln3mGcrwat3dLp9j8iX4V1VnD4ME4eKBcD5LJBXx7fpJ4dvSSyVYJaVqUYKq5WGLon8Wgrie",
  "key6": "5vYmn3EnMy6am3B1M7PjwJNy7SXxoT5pYTsBGjqUc53uTtVnnsgLeh4NS6PX5yHMzeS7Wt6Y3gs79S829pQPKTD7",
  "key7": "4UdBKD8AFaqs39QbDgeS63sxm5jE9RWu7fJyH6umB1h8CSYQL21uXHekL79AZ1ounZgsmeTjJuvuX5q7CPBXFLf7",
  "key8": "4fSWqJYNyvfaspBwR589QbibGRy5RsRHceZ2sLSvue9h1MS1evNczmLfGL6gMmoy5PD5JXtvh7U4LQeNpYzqDSxK",
  "key9": "4oXmwGy9w6rGuWRqrJ34yjdeXiKvdN1RH1HUzgRzvUZH7wC5bHxNsVheKkYy6FpisPfWPhBhD9unEKMyKRn6vfZh",
  "key10": "49rmuW21zSZSEfsAiTuGAG8hK2fXDBgypo56wrTheJKXj37pGJTJsVJgrhBmuBPUw5kXgjf2tzJL6Wabq4mtj84M",
  "key11": "29V3yru5uYSdg77iPNo5PSdJGNEC7htJxHXB6xn6wToCGcidfqk5AuSPtAjSMcMaJBYDibSyT7GZkSQj6bLd6Poo",
  "key12": "R2XG7ZLogYx8XnoDPNVvMRiqgT3oKkFUFsQ7PTwCBUEsaPtiVsxjCwRtwvz4fZYEL4QZvqCLiW4NgjA4JKLvCRv",
  "key13": "5iEGXZoQeZ2uAzqr9atjCu4EwNxXc43CY9QA8PMgodtrAo3M3CTxTyZJzTypgUXciRWpZ2fUMg3Qhbjurd6by8JZ",
  "key14": "5KzQARdWbMruZKwAT7FHPQuDqkcb8kfD11SkWhFfJUC5Kez5uTLpzwuDgqLbYbt4pcRxoWzaC5Aw2vDMERS4TE5z",
  "key15": "3j5LW6S252MJxYq1TegUW19Swir8DoHLozqR192UjT6nStrscAH4yKsLGY8m9r8Q6NJRu76HcJZ8oPefPLAcDdNH",
  "key16": "5ZvPCRhbC3Zaobe7wUapFKoo2eoSc2r2dNqR2uy9ZsWEhhnuG2qNexYpqdcdqhzi4116H9XZf7QXWmnEqq4kh52M",
  "key17": "22ABaXaxeJSUtstpitDauohons7jJSpCKDXxQaLJEEMAP8naLxiJBpzyaCHMWgDxvJLEkcov1uka1snQo1o5C6LE",
  "key18": "3e6ypFfMuf29FwovuuaFkEYtf4vBdanJLeEdh9wJSAXHaaX4CsCYF7No9DQdYYa48cUUie7kn2mCgdqneSqAQuuu",
  "key19": "4538TeTcqtABPsnjMTw7U3PSMhjes1TWnjRiZWRrtMfnQWPj7AwCQNuzRUcGbL27gQL17HrzxjagZ4Y3P2hPmyn8",
  "key20": "budXdW5vNWHPYjkWtH7ACSE18jKSMhZUphyNLJ4PiPVcKnyTfsoR3srzrdp2zioLjqBoxfaiTidbQC1sxPM74FD",
  "key21": "4aLVD277jKwwtGJMsWiQEHpwVHSkPuwCLL7LgcsxxWthn6M4AT7eS8ZGgiDuDeLsiSxpyAGXYckna858X6A86giH",
  "key22": "2faeaGgSEBX2b5owxz5f5YC1VmKNQgGns9Qa3HQMhnkbZeyADYmgYF38WzMFubzpntc8cFGrhXsWAcuH5u9TyHSC",
  "key23": "brFGs3wR4fvm3N62gEJAdbRXvVKWgnnLu7crQgF7sssFaGkYkBx4bdY7czknwunejvVsFatfwTxXEGqrCuZmAEV",
  "key24": "4zqDfeLt1rNE3N45xRDhx4aD19E4xf1XPAHuamUbB8qitnBgnUG1T9fcUEFpsaVUJeT49HP28jddDdQNpeUYnqts",
  "key25": "wWX588JdcR7gpmMpGUDQztjKD4k4xhy3bKz3ZreNtnLgpk7zTiwQGnC4PPBJDZqnVWfga3ghLDAM1yYUBgbGRQq",
  "key26": "3Wo7ZHdAfMmKwSFyxWoVvVGUzj5J11rNMQLXMbpAJDy16dhhEDVktd9HJpgnz7jRpLB6oWah9WqxZUaTbUBfNzyS",
  "key27": "2KKVYQKqjqkkdwCEo7s17FXaqFetwEgiyor6DrXHp4DTJeFH5Zqr8SGPrd3AncPSp7UgnFGhoo8c81HsJrMkYCNg",
  "key28": "4y3fqerJWu2H5GyEivUBRjdWwCVPntYnP5XV6acL8myNzumEepu4h6Qi4CeAZvtKtmgMJjkDSTUDYZZUsrhQTrMx",
  "key29": "xPnfJPH4h9wku4bodqw3Eyxw4d6Tz2d8E3pakrNbUmTFmqr4dsnhK1H1wTFrcHdmoTiJLHJgjcEcBZwHRZSag5L",
  "key30": "3AbTpwfB3Syn9EmefEMQjm6rCf5Eo77w3STvMaHYUTGE1WDXwTyD8BQoiDxHgqKbZvX46BkSokxc8LpffNLjddGe",
  "key31": "WeqHmYu8WrjZBiwyxaKfJm7zcSCsfGaTT4aYEzBUAQUW7N28FmgmwCudGTN1oEaCm85gVpX4iyFXnoSa5ADePmW",
  "key32": "2b1pg4zg2ug6Vu2NKx5T2uzM1XbJSZ97rgLVZjwqZdLpEUhkckzT7CuW6ZbyrK9AR8kBGCpUsWtVTvVjnkew6SSV",
  "key33": "2guap1ivo7KmgCEufrknL5H2hso2T4ixHWUAkWdCW3h1Ee1X9Tt3dJJe1E9jKsWrsT7EjQcu9ptVHnkgq4w6uX9s",
  "key34": "3ewjzLaMdHs9e6QKaibXmYabEM8bE45SiyRXuda6hTZ5EvkxCUEouKuohCCduyUcRtdBrN4SwSvmt4J3GtcfowMY",
  "key35": "ychWTq8h6dtHHTjV4SGGrhEEYtwP9p3L8QoDmGZuQgb4je4Cb5FDXeJFfmeE7Mh9HQPpcVLj5BEKkcNbauB6euv"
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
