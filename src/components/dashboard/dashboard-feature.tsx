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
    "33UHse6mX9W3UfpG9jK3sedis6QCsY7DjB4U84boB1kGRrUwKtWjz4dCGjcRpRVcH4Vmh8GSU3PkbLfZWVVpXNbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538RWVpCXm4Nde4gq7bQimAWfz4rieJcGUs7nzzB3pNu1XeFAryrbjAB353tYFJ2sS5HTcF8RHFca9zxPxFtudBa",
  "key1": "3UV64ngFydNQNRejK7Y5rhNV7F8bHH2kFDPkVuWrGZ1EWU6FdvzhJ7HEoLCwKvMQTN4U6TVjXaRucGXp8zR78CL2",
  "key2": "3f69dcTPbKBBWcvbFAw7aHCTGgzLkc15zucE2YtwCk63iHmMmTmiXteU19CjFr7qwjZA7YBoZ31YX3ajHLmPu7np",
  "key3": "4jJAcELrDHpMmrrYz3vRBCyhrBrfN2oe8vmoqXF7pZVtDP8gEagNGkXMdzFXjkoB5qywJUbep5PyMidNkebvEH7F",
  "key4": "3gnUGQ1ieoTbH2GJQvckhd7uHkU6guuHHEuVFfGueVX5wBaGjqwtGqbjVKF1NnGaGappcH8KCYwXsTatzZ55dMYK",
  "key5": "4vJhJjGmDfAcwbVtTfiCpjUbBRTCTV4RqG5GJxjH2d1bkaD2j4PxUv1FzfpuGSxYVN5TQ1Q96mq1FckUQAZ61RLv",
  "key6": "4zyU8x7b6YHYU7Xk8nZzrUfD7Y2YVwhwLASC1v3LVFwUE6CcT9p1SziJPJWfyUPwouWuKSvuqQy2VnfGz8jzCHtV",
  "key7": "4Jmwop5VFsyZWBmPn9ZwqE4wXBzjwL1mHu8hFt6pJQbqv1RNpp3nTDcpBRedTRAwwx6eJuqcgdhYQEfhRyaLB72U",
  "key8": "2kiuXo14fHvtjbadBJxxQ2CQCDtbheNCbKsnBggtVXtaPF2Xra5Mm9tmJPWvbKsFiEbE3H23wexK1VqnHyAmJzxr",
  "key9": "2YvZVobVUs8Y8EgzZbAc87sABougEwmDg2QkQHQjYtnKvqHvvvVSZgYsBZNpzsdtQZZYLTc6rBAB6hA1LKhUebFx",
  "key10": "2BgdwMUUbKJ3hP7ak1WDzwH5t8PzsozPCQgdwTnmyChYPkmKmmaqYgtpdpZnhEdTvWULtaN2t4pAX8ZvuHanXnwU",
  "key11": "32Dpw3L2JWoYMNBv8DSWaANbw8dggU6xfFBATmEEC7YPApEUNZq2jrW1j7k5mffWc3FHHVduCvGKqYRq24DGx19U",
  "key12": "4uSCYhkCysiJ9dvAE1dachgeVLQZpmGkjxEso83TCj5KNVDAchvb42wu1kH13baDDXq2qz3D9AHdPTgrLDW8pvhD",
  "key13": "tRYGyYozhKo3425pn9fJVaJLqhtAgSW3n5WHTMBCPvJBSxXyR1m4dEJrJaYufR3e3Zt8pDaZz2KWT3Gzxohhkc8",
  "key14": "371s4CuMmttzxTupJNz5sfFk6GtENkxsedC8nrjZXAxoXCjNKqaeoMP8Fv19S51UwpwwPSKJSf1Azm3ewXKF8Yoj",
  "key15": "2XgPWXWRTJcLxYFvexE2EEkW4FLmJmtMgdbP6TBCJdfbKw598NW5MfhEX4Qvc2ZnyM74Pt74DnUb69SQEZccrB91",
  "key16": "3U8QQDRZhuHQovcejix9SZjN2uFFzJL9JY2fHWpS3iGfcZDDRNV4XAfJVhDNYA8riV93ji8L3CL3N6XwkxoYFGmg",
  "key17": "4PhsRtW3nyZK29yMX5XSQwEVAxut3HLa9bC8NVonD485JJyNFUaeLA45rjnWsE7uTZAB6hbVd2vRyVPG4J8fQJGr",
  "key18": "4RweyhsjJciTtRSPPTzs4Jz1eMZzryuN3iqtojVJtAKgm78G1yFCQKNiaWM6wCwe1RPDxgNgtaQdnh8yin2iYb9C",
  "key19": "4VgACDtaUfyuib9YE7LH1v4hFPaqp4KcRMT72NXwdDSE7qEKubfJADq1VwCvY9JwuT2Vx4forAidjME1j6DaN1S1",
  "key20": "2fcueHwuf8vjCHL7fbUYdaoxs4oUsLYD31hWGHJopMhA8wg71A46Hg7cmy1kvDJX89BK196w9TiEcCGB5hgEA1pw",
  "key21": "2h74HE5yoLwgkyJVLNc88GTrLPfWjCVPKvWS5n8GxPUgJYjS9n6Fw2LYoeFsAaKJSxq7TFZBnfkswSi3jH9H6TVN",
  "key22": "2tec2uJviaYrxi1DgaTohswMMSvYNmE31dH1SFQjwwSmE9jmaj9kufpmB9ZbjKXqEg73RKpf4DmHKHYCZznfQkg8",
  "key23": "2Yw7268Y58QxD52U6NRmnUVSQvdtF3fKcX88YWRBQqCsyLYMVGE99xGUAQKc96HeCiuigR1gCq5aTSwRNqNj14cc",
  "key24": "59Y4qXTZABwNz93U2NWxYFdDDsMZoG3m5KS2ur7tmr4QQvsYxYbd5d6ioG4oyGv3GWH1ic53hufWLiRmVhTvPtJi",
  "key25": "66A2TuNpPiBihEt4686Bc8PB8aN36cakyTfX8UiKSGKbQYCY49DEqYnfriE6vXL6rGd7AepE7dq3hJZeAD4a68q4",
  "key26": "62j3mxqhJjGWxjU5f9wGFgHq9emTuYAwKvPAc2VeKJ5N7czoiKYbGb8K2xQJRCBR6ntZJG37KE6BAbMuhfmCswj4",
  "key27": "4nT6K3MDZE2CH4GfKAzQgfnF2KUto7PyqN5MerpQJfx8VjWuyCAdm3KY3QMLrN6m6QmUWxVDQHNTLzHq6EBBZWeA",
  "key28": "KuRFKPPzeryoojWMv2iAiyzHHaWtei1dtZ3LdBhK3x8fGwR2ENf8mRWRPyAJ5Uxmuoo96vHyfSoMtFGGtFs8qG7",
  "key29": "2dUakxpUKscBdSkqLBUmeeUrd7AkKpsLH6peLWwetsT71D6vBGn4mrm2Q9gzL3d2smTuAjx8kHbxTFXzPeQ85QKV"
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
