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
    "5WyKCQY4L8cq3YNFHKsKAEALrN9xTXH7PDttzvn5mxDhR6Cw7QznUx1kqdKQQZyteVHbiZqHkDXHrfeYqf2Gvwip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "278sRaQ4NAJrizycg7MMWJkkWXLgKRSM69z6hnXBWkPFabXHEVMFMkE1acksYTXYoji8spePuNrLrYJXQkgjHTTm",
  "key1": "5S4VmAz8DJN3PBGLHkkmdwWuyiw6M3QbR6HJjPfbsp4fpwVYyknaLLmdXXJJCLydZZqXdbSbhw12vSMu8zo6HVdQ",
  "key2": "74R6WbqUmivkw4YpCnmfUDVKJ7vhM8j35TZw9MX56DGaNfZ4HD5u71B32y7eRt9fgnv3Y2S3afEsmERTrztHhWi",
  "key3": "2xDV5c983LEyDq9oBmx2DCwzZHhdGcibALwgP61jYox5UqaApTgvewkm6Xiok5argKMoDAUmSNhrRMwj91wiD76b",
  "key4": "3BeSNJDucbYZ8q4yfQBapJ56UPEzfRpTXSatEXEqfNuBfWRxdkFEbTFLU8BCxH7BT5cNVrkZ6XFCbPwJfAqSv2vM",
  "key5": "5NGxb4qLrYxKJ9zCAqcGouKhk7c2LAefBSZ1t1at8ibwnsr3R2Nn7BBTm8qYfnLd7iit9Kb11546sAKpfnrqNQ1V",
  "key6": "2gzaACv33aDyS3Bph3zP2757uYB2xZcnJY1txmwGFXXTbZtUVq3z6JhjGRTwZu57HDB3Sfqe5SihvTLkYdy89vNE",
  "key7": "4wzDWrN3Y5i4gCAyRBQwVxX7yKyfWXtVt51GT8xE6VXjxGbmGUpZXuQ9Uj4HASsqxQtfpRdcXEn8N57hJEhrH4oE",
  "key8": "2mrnD2Ph9zJzRtAr8YCYeyFNWhdUAchwpS3f4TcuBcUkoQq65W5m31cJG7GiU38VpXy1z5XC6cDa5sq41UDxLZJa",
  "key9": "2YUYsjohP2TK64d29MXr6YBgNDsxAdEsQuPbMe7AqxS3rVuKHejgzaaE5JHKXYRMFRW8L28fUnJPe4ffJFE8UUtc",
  "key10": "x3tD5g3767p9hSM9P6ocw1Rn4k1DzPCjojgY9AX6p351173yRz8VoRKx7WnFYTxFMMJxJnGepBXpAtPdDF5EFhn",
  "key11": "aS8g63qnCz4p4FK2xiyLdSZWTmLo5qhwezxJyiGPMnVHRmHXe9ELgrMkpV6RUvqUT9TX1JW5vGoa6pc1HYsTFSe",
  "key12": "reQkegctqXxBFDLM5pPp3t6dynKbMPYF7F2VC47MYLaR2yXtA7KgGZ6ZQEBVJmucmT6GGHzAUwxpHmpi3cFg1Du",
  "key13": "22t4uiLYzKEp4fpM9Um4umFSEVcmDPtYv5ei73AFnZUpn8BzMgJQZAakCQhuE6x3aoezG2yhKvgDmMBVeZpYdmYi",
  "key14": "5z67w5peked7xDxp5P6SNjXASRxcBG64rHeZHQ6FZUM7k9vCVHhM3QPQdEDHb7gKGCXgsTGy2t3cNxnUwVtPk8Wb",
  "key15": "3gYPkiL32W6USXe8gfosofXa5iHDdYJ8sCe9w53ciQFSCq2UT6DR252VwkDFDK1HFGWexS1XtpiJ8SzBVevtuScy",
  "key16": "4HTHS3GvS741BM97A3fu4SBEKpGVVxWcadCxrphyPeuG9UZCRUyCUkNUkbm2tDfv9Tk5bFAxjPWZSPwtMFwW3R5f",
  "key17": "4UnoBdNKsNF4RPaLgucMHV2xzbbnx6zyTvdG8UsEYvreUrDATmpKD19tQo7P4CNWBr55bFMk7A7bs7WDcmzbShYy",
  "key18": "4qnYpnFSvQzSBh9zmAz3ZrawB9KWkVsYdopHNPzn9WtVofUXrX389dQDpnw44D7mny2KwYYgVQrzXd4FCEeL8Aca",
  "key19": "29r31j5vFquhRtpxzyaAKnCzU5mnYmCGR68fderQqqV1wutRWuvaPChSmH8yoLYjxVmfg4ZeG257Ea9SdoyvMivU",
  "key20": "4tnwN8QGu7eiLAcPs6esyPq7A17noX8J6rhG3TwEYCyXpGXXPAJhZDb5ERbPdJUg22Z1am8K3kMkjUYJs65gJyqR",
  "key21": "g1wyDkXUEGYmEv5LUWinxhS8bSz5cnUeRxxjk167R5mJYP2VtjEoT4UuJ1A5zojjXF555wa1AJN82g7fpWnELfU",
  "key22": "2dFoZR945mPJ9oCyofqY5Ap4dU1mTmqaufvRkGRRSpqF8uBWtLW92HLLgA5a1YiM9AmWP6nHNLSpMetTa2WLhVd2",
  "key23": "3Z8EpT6ZFvgMANzU8pbGjpqejY6qEivrjRxisuc2WdETLYrbR5yoac7T7JaodPx9sMrXVZPftEVp7rviE1PxDay2",
  "key24": "3t7qpiMeK5iwsRf6xJyizWqSDNumzgW6R55MxCaQPHj3jfewoEtPcREuBLtUz69p43kuLA93SZKJqNb7QogvDu2a",
  "key25": "65194TpGMP7VwnJLZkxL3fzi3zGHMigEScUZxQRaKFGwiqkNY7hkFE4o8Az6hkk2KTupErZ3L8Q4udxXL9n6aQEQ",
  "key26": "5vNuK442v8dnH4ob9aghjYY5MyRMENWSPTbebfLfcHh7YuNowUN8DQsKiqw1dMCoqug5fD72mrjVsruZXNz8LCHH",
  "key27": "3gJSA6jMNx9DmfM6Dzp8bHNXu88zYtGQTBQgrKkBwRBxDfXYQ89xtJ3NrLooMMPcnQPzjboBaQecrvPVgaCU9XgN",
  "key28": "hwao9DGQSmAqaX7a3eGYeTdDs9Di6JE13BivfTnapQr6XfKsDvcQ9pj6MArsDf7JzRwFFxUGVgGvy2HkD1qyCF4",
  "key29": "4cxcjZnWNDmuptBmEAXinSZ5hcW3ZmKAGP54yNQGAfZiQZAfyuwDR2Z7KaLK8cjSXeBcGCW8JEiEMtV6rByp4YGi",
  "key30": "4N5zy6muPwHpCQ9hwhYpHda4T6kPbn31Ha8FVPDKktHXgnx5KA8RvjqjEmZxkojCdQVxvYcQPTcBh3EwTD42ATjT",
  "key31": "EZ9ZpAbohfrXN5JNLk12k61dAFeivhbXHqrQUD2WEjrJwAnBexA1BHru9sHAXsaKWBdrgMMRRWGNmBvGjAViDst",
  "key32": "2DgXyUumoQs78NX6ya4FMy3oDh9tAFC9qyYFQLHMyNrqNzVHsHmBsgak5ar2Feg2nCrucDjM9nd3DoxR39ViVy86",
  "key33": "4sYwbypuTKD9U9mtbX8b5SpnWadLMDhZDL8wHJK3N33NskRB41yMEtQT9V5mwnVA58CRkzo2WZg46g8w4NdhSAMD",
  "key34": "3GhKgCqBeMBJGwZ7Y3gz8CiLvMjLhoYnSKVq93R365iFhtgoxoVdc5TMgDmxnJnXCbrsGP7ME5J2eH7DSkW6whjh",
  "key35": "bkgHQ7r7MtL5rCUQ8ycUUwj1UktV1mEjzUUCa8aCtSeyvU2ysQJdCoCreekS5yoHnNf5buGon4Anhddk2p2NX9M",
  "key36": "5f1tVcw8rvxJfUsJB9t59SdBVk4hjVTW8fnQPFUDTchqAUYLCU97JcPJ4nn4Adg8aiJ8APyZrDA2HbQYDGiKFd6h",
  "key37": "5jtALp3H61RcYaHxpTrNNEeECgEJbpN3krjHarPbPK3eDXv7Vmgh6EYfc792KTmVtRroLLjRhRp2o22cw3CZvv7z",
  "key38": "5jJrYN1TXku9fsWvBQi92TvMycEMduSdp6Fu91ev69m3NbmmJ1EYAZNBbL1m9JnKeBKY8tB7SfL6FeZb2aGurp3r",
  "key39": "5FtgSE6QRqRDL1mkZwzgwz7RHCY7GkWNJ77iWWF1YZhYucq4JtppcB32zX9avqpuM9ydcViifxFcEBMw3b1oMr39",
  "key40": "554aJBSdaGQ7ro5kufqwYSQgvNXwsdDVgJbZjkYbWC4HYr1gw7u3AHNnG5YBor2umRgRQCm2mMg6bueT9yEpmKGP"
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
