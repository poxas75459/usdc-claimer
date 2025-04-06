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
    "5Vr379NXPh4sk6FffxF7z1sbZEindc6PjjCwXj6Cb196662r2FPuz39NpU7j4uMew3bXf5Yrtv9UuQQQLjZ5NpNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UwfbfwGEJSnd2F8kApct8yku8V9g7coD4gYrKQuJeQNGwju5HHGaFLHC1j3hro7J7AX8HdSHrn2PnT7adbZ16mJ",
  "key1": "55dLgy8aD3tX8wzCA5FnL9kBZMB4Nnd66AkrUq4j1qGz7VmRt11XWqqL7MfiNGdQzM5dnMVqgmdjQM5DGK5ek3xx",
  "key2": "UgPb29MF3PmYUGeFbMRptQ7N77dncz9UZGSMG5bVsFYgEcTxZq9dyZKv4j9UAB6nFyc4Z2rAQLX9upNJ2SQCnZi",
  "key3": "33GGgDKVyDnMoAQgyuRV9CGonVxA2Fit8AU63nAJm9BL97EpE4284PSEhutYrQ47Gw1cXuTLKcnBbu7JUTkSgktw",
  "key4": "5BySWRjsNWwiJuhP9bRkhipxhdEPmta9WE3c3tERGssWtXDmpv1ZWLtnXSmRVkjd6UdBwux5wdmT2LYCJh2ph3Uw",
  "key5": "yNaMRaLSiE8YQd2JoSNbTu4WccXTrFiLacWpqM3txe3TLDvysNGD28EAK4DtUFj8hn1N7WKiwKdoU6wSEQoF73u",
  "key6": "59Guk8RNfVG8UjnVEVFynnaMAFLWqzBbttCa4QA5sKgVALck1rJsTW1dZ3g4aDEkKy2M2xMUUBY4SPz6qJsKwqGi",
  "key7": "2HiTgn3Qvknvwgm9DuyrzPSzhuati8vbCSLcroP8Ev5uNxGbXeAUoXTxiXp96Lq9HibywCgG8Nqnw3YKzykYNxZv",
  "key8": "4fUATT3wsi56EVP4rc89jRGVi51Yj4djCyLfxiD2vdPC4x46Yx4iwuxAmr7kNVnvVoL3BdanBTWD31oK9KLdqMKP",
  "key9": "4t2x2XJiTh52kSySW1beu5VEPamBHw7RhqqdHNNwFwFSMktZroz6m99F7xoT81E8hxetpPDnMzcs1ERstrYD4Nyk",
  "key10": "3R6wLjV3puudMXmuZanEkcHxWM4T8ihvfGNEtTPjBRoWJD6BivQUXj4wijcEXgWuCxVpA7kUnTLvnsyzTWAToDRK",
  "key11": "2AY3YrqM7LUJCdipja2dXDsjLYZ29Q7LSqJNFoj19w6c4ArUJXekLdjR1ftrPUTkbsgc2xUkiKU64LSARRhzZGzc",
  "key12": "27CKedrtpEWkiCx4FTrK4jLqq7txmuncpw9TVyEFXVvCZPN3QGt5m4WePWCHq9Gaf3vgYDYxvyz6MFXa93eTjajj",
  "key13": "56Q3p9nZCG6Vikf4tpUbRcqWj1ALTV5JyjpmBG2ejew2JwskW33DcYdd7otABUDorVqr1LeRhGjvyJCcY3GxVZ7y",
  "key14": "51BKDq19SEnvWbxbbnKJNxDz8ka5j6bNfLeDmh4kiCf6rodqcw34MoXMSTjGnKoFuZnEabQFmQBu2uFrrFAu4na1",
  "key15": "2t7JM4RR2NRNGB1vVL3F2UNfmMo1F2MEK1KbVpwwX9EK9gg8HqspTC58ykjQ12PpWRZpaJeY5okGeDLVLoBPfcn7",
  "key16": "5ap6sisyAHyG8qSuNSkwekCxZULVuKPfEyBxRjHJbGjQvcujN3mnh489Lzw8ey3MADS3T2amqAVJ3oq87ei3NfAE",
  "key17": "5KMwmByKN5XL83RrAdnqBSr4conLFC14rTaaUYjsX2cGptE2eHQrHHCgGR9ff8hfsPnYsTd6GigxySCMYt2D2FzV",
  "key18": "62XZfKHf3QiBFdf8K59jR6R6QPLDSWyy54Jnr1uqZZMFCuU2c4cXbp2AWgknjyNukPqkG18Ytd1fhm6FybAg1WCU",
  "key19": "5qBuhJyCGVKShG6bE4JbumubYv4bPZB9XXciSS5dVdEuDyWFLUh57Zpr37NzwJh4vEr45ospxPjFhXBNLZXNkFtH",
  "key20": "3U1QHiQmBj6QbkJEpdJjwkvk4BHHTnQ67B9Wds2rSNpKpx5t2R4h5ojbMus2ovWP7n7L1rTRZ7pbd3Q685Ckdtoo",
  "key21": "2F2jVPaXPgh8ui84ZDbK1oUP5A3joxqpLAQf8h9jPjCeU9uZXWwYuCjZk3iaFc9sS28S4D9GiJh3fpHx9rGRkYMg",
  "key22": "5Je7r5KQZebM4skJSs4XcuzMsmkTvVfnV7tvz8ycMHj8PyiuerMSiZHGob2s2up2cLAhZzgpvu3Z27vRhiMiGP6",
  "key23": "454wcbohXWUDvWAavP6Dvr1JUE3xQnSFB8A9eJz54Lcx9oq5CQAjb7PnGkEpjg3pbQq26QFBqhPHrviP1p2mjZek",
  "key24": "bnzvzgZTPtHwP2rBLvayUSwASDFGD4yerFyjrwDdKvaKNBz1zzLqfyvh2DkeKGT5sHc498Hw2CEkGS7Haq1e6bA",
  "key25": "3TLhXM5wmCPpExCKb2pEZFeyYMwjhbrxiibLFUHVHnXu6S9TQ4fW2UAPKHxgGSHUTrzzSpuL7vrCE1mn6HAWADa",
  "key26": "3gCuG2eBUWBjfzjAt2zKgeYE9qDaCnQ6HckUBgcYL1s6gngmkUoFEdmJd58fpEo8APYtyz81RLgpMewKy4rtUUZB",
  "key27": "3ZfYonUv4M2noqBbBYHJcPukWG68FnHh6MPW6RsXFC17wRJGef86X1QR3VDHaAGWZP8i4FqfQHsYRAPRhqdhP779",
  "key28": "3qrHrYCgqitrCbZaNGSmoFEJqeWmrh7EZpuis582dWDaWDbgWsrFCr1NzKrg3CDGroAnwwhrUFDPTuDnyQ2GncSQ",
  "key29": "4nV7BkkkmwxoBekC5MbCJ825FrtFcVdyLKKK6gMe1WttwAvdXpwoFTJdkV84oWAmhDJwfoRw3HDe1G8SepWf7U3J",
  "key30": "6VCpje2A6pUN2EN4bwVeGhACPdcqwvbiFJfgqFpBHEQGqpg6RZxd7r9JFK782JhCJMjEZYwqdBJYUUnWxMyJm24",
  "key31": "4GhXszo8aUMBqwyvRwvFXbnMLYrze1YdjfzRXRWXxNYAs3HhiB5K1211F7GAEviynAb9yQ4q8y2wtX9ywYkswsUa",
  "key32": "3odaPFVkqpXwvCtK1uScCUmr6Cw6YonFmRiySF7RhnNRRPGm3Yxj8AND1XNSiGeLTnQmJDXG4Mpw2d4odd2qqkSi",
  "key33": "23dk5VrYKB6Rk9oxSercKB2kvSZZZzPQdWKvUZz9wGsrWEa1ew1A6VkbDUJ4C3gLKVFS2DpReKT1vpzLQtW23Lu5",
  "key34": "22tJehGcNNMQuA1GPGvKTuk85iXy9iEf4V8XKC5RYs9rAkXeuz5Uern8uJzeBVW4kprLLonL66Sp3uNDYgnydsuz",
  "key35": "5DFAwhiYkQrL34YcWRJZkjixHLvSPqVWRLRVygiP8YsA88TxeXErxLAZ42BcD2JXy5NhzZtRTZUNkh9qHmXDLF6b",
  "key36": "kaAoB9zrtzA7XVnq9wqVTRvNYc4HWE3RmzSxVf5oZTtKtadV5mY7uWZEsyRAYMjp1pmDh6CtQhKmwm5gX4Cd6kX",
  "key37": "5JKVH4K415twKvimWRjDYfYG1evGYjzZKXxRpwk7HASTdhFHStb2qhuhTeAz51KPWy4eWUiYQrRHvECYvCv184SW",
  "key38": "5uZkHLE3V9M6WWEqKTP7pwyJXAbTgGPa2tYuti8HvJXaYJtBwFcCGXA1qW4hLGqMwWvWnBFJ1DqitwD8wFCe2wZx",
  "key39": "2meg1ciGdrvAcP3D9LqiaxCuUiCHvydQRwC3SCbZjTRZ5HndR3kLDayqd6z7Lqdj4TFyVmsBpL54qKy8R4F4voaJ"
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
