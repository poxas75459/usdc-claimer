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
    "q12JwzDG7JgbZoVL83nYUs6yAYCMVyytW18hqtQMpg6D37sGy19svritfXZV7qC823FrVH178SbKsMqQp9ujw9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LMDWqTBog1czdR7VcR6fLynbLq5DtsRGgSWDcZHnVPbHnYNGKJVzN5MXDNTEnRUDBFG6AGmqU9cQVXjMKU4qpLX",
  "key1": "4F4ncU2CRKoxx5PB7TsvUgfotiozToLa9vWyWzy6amCaXQLKrVUBShzLGjYqpv1UiJ3qbnLeWGogT8QFHNoU6XLT",
  "key2": "21vE3jt6seGnMqwv3pAYUQgeGqULj7exFrHayBxFcLceKyHhiht9M7wWfRjGr7MB28HeLCHoSurYsNCCcG3U4bFa",
  "key3": "4RNRNcy7L17RNg5zBxi7ZpUZxR53H3i4wyLEDSN3crAhpgstKvbyuFMHakj9wK5o9AhPmMiiwxcQEARsy25Gnsoi",
  "key4": "4bBhF1EbNJCXCkFY8SvUz3FbJe1yZkBi3qapPYLErYsNXo3RGuj1eebvQ7ChoqNWi8dpQhTkbEPLdQ4Zf9JobBRm",
  "key5": "3B9NdqpRKKYEP32SN4MMLEdqyLKWYaFbQYU3QuuiqN5DBRK17u3xXdGFtsj88gPNsjmrxSTuHhep1K2zduzWHCb4",
  "key6": "ooQ6gA3QdFuxYhfdqwDKRq9b6x5ccb3nMJthkVFCpzqpPpyAPdxD954RjwD7npWWxsiL1nAkUikP5fRPpajjge8",
  "key7": "4hFo2hZhppRuY1Fc7QoFxSRBjGdLyy4KBUD31q47anqvttgkm6FrXCu63KARRP4BHvY7TQGLwnksqdANYxDoaPNH",
  "key8": "4Uy1tKBAeKTiiB71oUyXRRqUHP3DbL5PRQQcSakFs3jazVSSvzQpPxRF8Yxk47Bpq8411SJjxVkzfjJxV97jvRy8",
  "key9": "2YXgq2o7PSXPb7ubNh6oUtikdiVoEwLXYkR66pvXaccfH1pA3XojFMLyrVhiXoTMMsYtvUjJ1ztpzJsWCG73wZLn",
  "key10": "7MKUQeSTE6xQ6cn7193cgQDqtBg7dEAij6FecbacVUweSH6Z62mwtxL38Tz6dpk9bHR7aEmPcCf8XHFKduk79HT",
  "key11": "4fB3RjEsTneNu62ALzgiEC7zCcNeRLeY8j16dtThsaURF9Wyz3gFUuRKWXW92dEE5H9vhvNd46BMCEuZkxY5VKF1",
  "key12": "3RSPgGMbWfgdJ4rjF5ZGVuahH3dxiP5B9yq3P4xGsMKa3WxZ78kzCLuqa7hYznhFm7KE9YngWGTmvna4CZcb6gg1",
  "key13": "KqeRxrNCxLHEva2WA3JWXPF8yBNkmSqBvH5pcowgj4cu8sgvybt2KSiVHMMcrXtgmt8Y1NAXjBKSSPgYQ9Y3F5C",
  "key14": "4cwGtoEvsDTFJt43M694AGbGangpgnZmRGzdcRcaFihFEFjevB8Rj8YJqh9JwYhePaG9gAkXTfD9Lc1BmbY9JEtp",
  "key15": "31sUUyZcoWdfJSEG5QZZbwKPHfA3wPUyaF5srpgqdmLq6XbWiPqz4Aj82SewHBfwrXDNVfBhaLayUJYq7hDatFDp",
  "key16": "4s3WragPYP1aMHevsBCnqwKCQ52PJ6vBncQ1zfUMwmAo2ST6YSfvrJa9kJQggygR3WUsTz3owLY4LjH4ZRM6TPdd",
  "key17": "XdL2FurwaXvKCPwm6csadUiRpmot2dN4Vj1vQdV5yb7HRqYWnA5ppurZq84o2CHEztmnqxs9N44bBBACsh98vNX",
  "key18": "QAXqqVTPVkGwmQTaCdPXWDPYf5g84db4oN3NWLhiNDsUsdz8aJ4i5peSAxmFQtBfCJjDDgZ8XE8XRKTApWcUaJ8",
  "key19": "3dk9Gzuq5ebDcsGJPbDc5xUkNQV6eJ74wnMAmbS1et2qptA6aRaBqSV5fqd5ADVqdPtiRUbgFjAh7Lg1hud63pxB",
  "key20": "5pz3bgncuaNsJVT2WoNWV651dgWQQqREXWoLn3M7N3kgMzQqEGG6bhKmKRTamqXvxGahpu7ZUyTU1QT3n4tX3Pue",
  "key21": "3WqmfRUk48LgbwKZeFKYEYEc16bB6ACj7pWLZkFPHwCQoSR9Wp18PBAkwLnPUt4KrmaYaSzBfVCtCRsQ3bXdjUxL",
  "key22": "53ziti2n22Wr2QdCPvXfT4JRt8L3td5zZGwARxX7TkC2uGgd4vaqpiPRtYLsf8fTdBhy7jj4KgcieBWpdzu4r5cb",
  "key23": "5SggVJss57ZhsZD8pf5YAHx3tGNS9FARVeTNH1xzRciirDv8RmtCkSDcemtLGCuxeonaW4gydRHT9VNaDTtaoK8F",
  "key24": "27R3GtFz4xHj8oBKjbMuqKUaiM1wGyHMzTuip182cHiTFy4VDUnG7d4kixLdRuMKNFwcHwNsT59DWz6W3c1TXfbs",
  "key25": "65zKmVZYThNeDfkGRzXokuZKxPeYZtq51Mv2QZ1Jcywr2QnMFDw9zSQvczAPFgMmAxkpUniidT6diUiJA73om9C7",
  "key26": "3bLvPHbz5sfjD9mwVPe2pmMyPvjGp6omKq2Ac7ZPjUSgZEVYEGrtGvS9rgpAAS2vgABMw9HKmk4M5xq34nj1HR2x",
  "key27": "3HPM9JqyHHAHGxswXJVJvRZdicy85MyouML8fYakoTH5XNcKxWVmzFbeaBhBbNtWbf9BcZPK2cDsSjkUHYfw7cS4",
  "key28": "3U1z4mgtJVMjEUb3mCBhS6XY6keLXKL9VvAUn91GeW3EGMBkPnxMQtNhBSDyiG9qqWaojcCBWTCiKLkXgXXnQzRb",
  "key29": "5sMLXHGWFZQd2eAKTeXFcqebMTmbkpYcbavpuYDqPkNRrAxdKpwSyb82RKmv9exuWYyDSP3HNZ11UFaK637DChRh",
  "key30": "UreetVkRHKhVFubX6PBuSxrm5bCXVH8Ug6WDLEDm5MPbKz1QGS1BHdk8pZZkVKqUa7e9mctv7ftP1tug6z2xBn9",
  "key31": "33ZGKt5w2gbBwNnPacroKfR6FJrco19D3RWwqvdwY5Rg6Fbb9Pg1NATJ1EgvPqqTEkLf3D21q39oLKoeAJqZ8Uqa",
  "key32": "5oa6BSKjVsbbSxMsQkr1hfBTHpWZm5DRMWQD5nNdTN7od2Uh1MRspWvJsbijyfae8yyWGjbwThx8RwpjnwbwbczR",
  "key33": "ZUYNgm9Z9qGjDEh6r5moeNYrmVZYh59XN6C8JQbE8NARr5JKfWoucSYmkTRN8R6WqmndG1X6Jbs9qTrvYcChNTA",
  "key34": "4KbCcHfxtJW9X5zpDxXLKP9xmCBAM1HoqwE9CxonUSTW1jXdZ4osps6xipPfcACZ18SfC4eMCfxjKYvcLZUD7QC9",
  "key35": "2PzCFuPNFYkiw4dJhfhRE5FZArhEy7YvPdaiYfjQPETqXY6iWTBKHXDnDkBqedF7JsbWpnUj2Es1PSr662Y9rsbs",
  "key36": "vk6GvceuYWYYRjnmBJsWhnZnhpbDRD56zqdHM5bqvB1rVQKHe6CjtV7rXGFav9i5DdWgB3axsTPsCm6Ra9XneUc",
  "key37": "25g1yLvW3EKMx5DwCLD9aF35AC3tRfgCTSPJdifcjveYpAMKcDMvA2WN9biUDFw1Y5AjNpR1xYnGQe3e3XAKLsVE",
  "key38": "5x8TS9C2EVC1thzpq8owcAhRN562km59kdEAqzNPsAdGJtjNtUN4rUPoKBbUkcBmJ7woyQjMjXkCrw9yrL5vyeqe",
  "key39": "2MwvicDq8xaVeC8VszzYsp5aR9mc96476TJiRswVnxqD6LLMUCwzDjZKzPT1kPNexmRePnhYBuc82JRr3yXZKK3A",
  "key40": "2HH54VR6XJQkDTPqjaRyAzaVFnz3EWBrUGHCXUar5SkkJz2BLcKF6Qr4Gja1t9tFRDRmoh5SftCmJRMPLwRwh47H",
  "key41": "2mx2cqjfp4gj7Htj8Hi67uEjoXrH8oP8NzJKxRuqtsJMtwtJgA5MdDiT4X2AREUGGoWzufT7Q3cnnQamnv4i2xSd"
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
