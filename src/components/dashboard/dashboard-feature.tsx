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
    "xg3xr7rU6mGVv6HfPTzuNE9pB7xjnKv5QyDKbmfq3Lo4964V5GWkvP2kvNxbsBqHK4exTJXuWqiMPFtJdrP8FWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rZtSJRExgYjTgspztkdBw4xKTBPYvRXq66k6fZZTjVvPnQ32Fqo8EQWg7Kvcjc8Zwy4JCDiazp9p2rngFC5Efy",
  "key1": "5La9cYsy8o6jpAxgGxQaAh2xWCghmJwKBb4fPzf4r5h5UiA3JyCCLMMiM4Fw3ASSZNUQqYPpYMpN4XoZtWHnSWBe",
  "key2": "4Cm922UEhLuUgHpXxrsAwoDAXpcvPNsiGBVEVErZEDRdKz17qbe2QDjeGM69d8yreaEfGxcHHH2CSzXQ5Z7AkhHp",
  "key3": "5vxzRFzEmrQmNZvRPGGpu7jqs83ybUpjjXAHS88D5kNMjxsoc3j4Lqbidqz2QbBid7WGtxmFCD3gXv11GoUUkoxf",
  "key4": "5dffyjxZiX7yNZz2A9DNSwVBBpCJ1vN58CxGW6P5CyH9XaUg1A2Dr2doYjVFLiTNT9sNkbDLoxKLouwLZUBP4KNH",
  "key5": "3xADQd6pmH4G6YVNiM7yqbmvwEcmWW4RXh7W3quqE1iQD8DuMxi5jhYqeM8BxKcC6Wcc3veBGD5W4iQ5DTd8AYg",
  "key6": "2dR63BwU1ASGQmHSfssiQ9LCKEZ4icgfneyoFjJ4ZzMsSm4Ri4PLN6sMFbyei53CdPcTKCeJdciPNdEz6erzPL4L",
  "key7": "3PLqF53LZfhFf2fHpoDM4tJ9EHqkaM9Jtd6KfeoFKKqm8qdquj9UunwCZoe2FXxNrg74pSFWwhmvHj7YADL98nRU",
  "key8": "37Cg1VTqk5Xcs4PT2bFi8bUBVSacoFc68322VmLcp7225WQvfL2mtzUjyyHtJ5e8KWpG4JMN8r1DQecnSXZgeDEV",
  "key9": "3TRutbSsm9MNRtnoJaMUZcVJGsBGacoTq7FViHobvjjdbKnvQhRm2xJDtwXwioA7dHboamjPY6rG7fjJXLSVjG3t",
  "key10": "2GzvjdkbV2P7pTfxixf4mTqD1Bbs1LQNnxqzWMF5pqQyYLY15MPHNXJvkLCdaFm2nGtRkBv9PeNLfhuHjRKttMLq",
  "key11": "3hbBXBG1EBXkQnMQqSWpA8p5sG7D5g3PwNjxh1BzrvCA9j9eaoFNw7XEx3SenE8X3QHuofyJ5Vp2tk2KZ4K6rLtu",
  "key12": "5L3T6K3HbJovHhESyxcj6TKZhyANzWk5anRv53ePc68VYJijbhkWTQWW1zWTQwzUPM3qYCkSSpnKUNumAJUF1PaN",
  "key13": "67rdPcaWwN29BgwqN5vXAaiGXu67hCfm2b9T8UhKXD4gZUtUi687JLgaJVDaGdQmtKSwrhNe7FQGLTwfGz1mZndd",
  "key14": "4GFwtZmcsDGuD4yo5Wen8N6RNUF1MjggoLGRH3hAVEZAoDfVTczebia4yJkaFss16UkUdckMXMMG5jdwDtHeqiWq",
  "key15": "2AA4hrAuR4urXQiVibftJCyRz2neCiVipTxSZ2Nw7UkZ8BwjAzCwY3jyv3g6g4UFj2G8cBJnu9J1AKZZu1Gjra1a",
  "key16": "2Fc6FFduRnSNFh49nUNwijfnGb47bACJAxZkvzD14RQFREhjuoomVNDHoJabYeiQTm6mJSinWdisLFmApdasedG6",
  "key17": "4Hr62VkAtzaBZbf8qSLQ8PSfqDjZztM2GEEqGdsj9Q9puWaRYsrcvtz1ePcEgBsJ77Gf7VEDFHoHjKgknsbE6tUD",
  "key18": "4XzgotsTx6MTw7qYPceHhbioYsuZiSu4qaVNEb3wtXu2BbLuLdEqVDW8F9LnbQm7CU8LCfDyFLenHrK3oYCH1HLv",
  "key19": "U73mtsPBrMJ3jY6tgFA7kUDetcQ4tg8siVAifQZZd3AReDDgqZqq2TUYCt8PJnZfycrQQ3aKneAAP33Bnu5axLa",
  "key20": "57GkxpB9YBSD3cZXnfVz3npbPLUELkThTvFBbHrWdxrZYi2QtWKfDQqWVbicfoMQAys1k7hT9h9JphvYAVzuiVrh",
  "key21": "FitrY4E5RLyi5jSBzj3VyMfyzczXLqoqAmkmEjbcbUeSdodPdj2wFYycPxq1UwBqT2BkbJfopbCcppy1zTc44CQ",
  "key22": "52Uzcj7mSrBwkExMDNd132ukVD8dc89x7SP3HAFarqcERQoKE517C9XsnbZoVgHVQszLRkp2CT8VsicemXTygC8q",
  "key23": "dTpuHrAsfxVWWTZAcgLivfpyB2Gv9URzPv3wKHtfDBJq2mcCC2gyT8kEPSRSVtcnK138B9zFiQgYYsEWKu6sjHq",
  "key24": "zqicVkLMzbTK9U1NTRoGAfMVGmT66RrWWDEwswVyGyg5Snz2rgza562uF1LsfchUzP6x6WqUTy95NvXk2cthWDL",
  "key25": "4yZtTSM5vwf6kWhfWswxd6SWPiddYUxYyhUrkB8xbpJegbJZGbhTyXPgeqHTyPVYQgeeHwqFStMABpiT1SVCW61p",
  "key26": "3FjSmJJKQdgGxQtfgof5T2XDkaFjyYMqcspqLhSajxQoZYNyHCQV9MEDscMj2yD7d2JCtvJd43jmCsS2N4h5dgr2",
  "key27": "5zbWxG5qNbYQc2L8EipXaoBvwzEuiTvG8HYntP19f9b5KSHyLyvfUakUEd6VJ81X8ggVwa3VDqnLn733fig3ypTk",
  "key28": "FewnRjZ9ydzmXQMWem1JDfCDyTbQovi5FeF2E4jajfsCwm6dDvAGohbUC1sy2uHRjrJvmU6PTbQjs4fvsddqiS4",
  "key29": "5q1Ww88uvHwzz3XWcLdPkvqhs5yojp9ZFuUehWLPGwvLgiG1JSucQXbRTZTte8fx4pLZx5n3QLNyk3QfKfCexWzE",
  "key30": "4aAhJRaPn4mZF5ZtgESkVfCda9q4zxbBJssDhMuKkTe9C6NdMmDNJT7mHLBPTHqiGTMwLTSNUcjcMxbTdRpuLQub",
  "key31": "4sgiMBvmWsU44EUwVBPJAUhPV66QRA2S1EPJQi7Kzy53YjNjQDim9iL22dcrzHs4Pr9f7k4syoud9tg1RcJweXcS",
  "key32": "4UdMjQhTEzzjcZQZXg1XWBsTzYzX2rmraX9ffoPjsyT5otHHxZ2PupNsP8Ys8vNv6ER61vatRSsxyf99oQt1Rpa7",
  "key33": "sUivDyt1yiMAheC6wnwQGyCHEyxNwG9otaZmCAB4J4wUUhwxKb7YJ9czu61tzM36kLZqjZDCYPiTki15EaBKg7f",
  "key34": "46aqXHHBJxDScMe6bvZ7SSfpfjWMwTeVat7kimxMswf3y1st3iKvUSyEtQ2gCKHwEuB4eEdcKTwhCGMJNtLvtqvG"
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
