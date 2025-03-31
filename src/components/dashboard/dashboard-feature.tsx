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
    "33Piwi1MHX1dX9CzYJVM4Ek66ZN6t1bYnVADfzEaLgWVx2diYxJk5MN3J23tGWNQKJufmzZTgF5JKmwb8g967gbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MR3eus5CfKtvLco8YJWfjWyTMwoNXvbzVcRQgeceWNwCtAgLYoj6fJhpLWFkBrXRyPrKP9DarENZtUWNH5TFvTD",
  "key1": "59jkqBu9xWzY9JKAdWcKEKQXqu73hJYMacYb7jCK4cYu833YhSHLEdVj676hbT4rwXAdYG735Q3U6UAmAFvGja4k",
  "key2": "2r1FFEXRpSGwjEvPwpvuTVdFz8D5wvcEn8jMNjMHzAQ2UuDH47KaA6W5yfqqy6m1EE8DnM9u4McoViPaECDNpAbv",
  "key3": "3CK5ky78QVT33XXECMvdhTbdrhmL5p22418E8htWoEvr1AGqTQYyxzdUxRzJcgh5JmLyjJZ27fuUgwaTAdfwx8P7",
  "key4": "x4YVreJA8mV7EfMW1pBbtK7ku8z6JCC8vQtt9EsTbq2G2tQCfmFqg6y9mETeg1F65wx4ZdPedG9dgQrV6yq4MeF",
  "key5": "2QWymcMKa4Zpo7uwtXPSW3fA5gw2vUznKKcSFwWNSoSp1UDQK1crqSGBvvkUGX2qxNLhGZwip5LrhgvQeWSEWAKu",
  "key6": "f5yEZ7ivmTmfHwSw2RcT9hG33U4LLyPWnFR4J7e68hTVnxxdPrzxN5r5NEVBXpycxyztFVJYCwJKEVhc5HUQMhq",
  "key7": "2tQwXz7q3LeaNfvRA8tVjT1rMUTQWATyEk3EWchjMM38fBJ2Y99h7xyBNecYAhXxGcdXhebsNz8NdKdRNJxoNekx",
  "key8": "4ohYzJvRNM9NPrX8vGwPFmPi6U2v2nsxtTsnwbbPWCZgxxF1ZBgmmDtwxg85Taop8nuN5kDYaLa1ovVkmiXRz6q5",
  "key9": "2dX1cNDkxcymgcFs7ck1Ciwqo41w5Z7AkRBfry33oxE4svjUmSd5Eecjf2a7YLcxvLnFSWouyZLt3tfyf96srQHd",
  "key10": "2LSkjR8fDRmP6wTuabFmXJModnEnqjraf7UJkVrtDBQ12jBpQB8AaG2zrJxpvWpvao5n8DrsE66yx5a7NLY7RStF",
  "key11": "5qUrA4PTy4hrbZxW1PbMSxyWH8Mc97axwU6DxFsJQvKaAL6BKHi6xV79qVXpqZnVhaWG75XGb7JsuwJFGn7ookTL",
  "key12": "2TqKo3ezFXqb693yW5JBmTGnipCLbFzC8HWK2wek5fBb9WmNn8thzTgRt2oSpcUW2n9jSehbjS9vKHTirVrWvtox",
  "key13": "tGdjiN5XA535CXSaYGcpry9SnkrtTTbLNzhC9FfvPfG6ByFE4xrquydr36UzEPJBfPY5yaQMC6rSzSGPmrjz4Kp",
  "key14": "2kGbxUeGftz47WhvneyFbi5GNbjSXHGCUNUpBk9Jg5xND7Y91kcHCGGVpdLBjEmAXLbJvTEbkZ3mhqmyEszKET6G",
  "key15": "27bTen1SNSLra7Upr3t3A8KRxbx32XyWVok9iaCVS9f4r35XXpzN4ywff6dbkVkEFJbY5HsEaJRLGAXTTqYoHZPz",
  "key16": "5ETvsmwMwJSDW9ih4DBK3nH8S6aHS3hW8ody9dyvwooEBUrbD7CZVpocSTr6hyjWihYmvWSJXivAbbfhrc9zg5LK",
  "key17": "4rirrWjd8KV3bQwkwRAiCoX5CTo8QmE4sQvw3KiX4ZEQKvS33MmAP5CioEyVDwijtt2rGmMHWGnBWQxMVHDiYc62",
  "key18": "4Zn5C5wSAypisHGC6UtNjyQ6ojid6useQwvb4d68htgeJLXjFCfKps3v8em1vYfua99eisTef6rPaZa2aMoMUPfA",
  "key19": "2uF9tuvkzCrqLzpmdYpzUTb5CUjVTtyLVqjjBNw3jJ5K5K1E1sxP5LdmE6Zy3W9bFjWzsTqFmtimMBKPCsS9L1gD",
  "key20": "m3WUTvMZcfzaNPM5jKPTaaqVJxs2LyXQx1VwedmGs3J4NeCXHKnhnBkDhGs9ypXdQrV3BR9XGiPVBgh5YgXV38p",
  "key21": "2vyWmVVz9XYQBrKBJ1ZcUZ9FnawoWiorDiNXZruquabzQN1PKxziKZEUdMVU7yxGdPjH96b4F77io4TGGvnzafTd",
  "key22": "4bZzy3YieRXkooVzfLvFXzwKgFEkMD6KbTPyFFVwXoVRPTCFzericQcdFjNvXNRMpFC4GaUXkMd3ueBrWFRHxf43",
  "key23": "5WFCtM6kzrVcY62b8MYY4vDFfYXt3K5onnwV1snNKHrmZwuMb2WwqK5zSYbAuoMR5xMHZE4WRkeGpysp4sypeQGD",
  "key24": "3LeWGb1bVpCZZZu1aSWohKo3ER2ocGDgsRnKiiVc6rG3N53Zkr42r2Wk8SZYErBSkFvELrJ5NobRWsspdNaXZ7SH",
  "key25": "2TwrX7NjYbLesRDfdysk8WRzmecWnJuYBM5pUCQPRhAPfMH4ngdU4NNXyXSSo7YDSYMcrtKkreu9cvwsmqKQM52k",
  "key26": "2nmca31dPvxFjvB3st2qcSDjdUe5K3Pzky8jTcdaxQdBX5ECx1Fmx1k8aDpHsPa2Eot3NHeDpDBiiG2kEv74TkBg",
  "key27": "621srMZUUECBWpjHi3yB5BLJCdfxBnZbdRQVCMKRiGpdMmZQRGSPWU3VZ4wiea5QWDSqzXUGVGtXyzYo8MmuuiiS",
  "key28": "nFuJhwqTFJieKiN71r3tzy5UwY3D9PV4nuQRfiEktF27ub7HJh9JRanNPkRPejtuEsW3f9CEEfap9hjp7nRheuL",
  "key29": "31UV2AuMhLYiayXpQonw8kLSGWXCbtMvJQX51A9BhdiodbRxKFofZ2BW66nLhcnAmJErAMaTbN6zz9siRqY6NaTG",
  "key30": "3ZNTzAZUVUCdcYCjCDfDecry94QVGDEEMUVuZNf2C68TzKDBY1aRDLKKxLjeMQP5Q1QLd5jWrCXRtnmVpiPkPCfL",
  "key31": "yuKJWmUa2yRjNZQs9RUHT8YdBXk1YtxkHT71wy6VEHPgiHYj74H8adnp43vB9uaWWgMQ58RS7mQgXsN5aW3pdZi",
  "key32": "fjWkrWFDjAJpS9NY4z6h3Exfr1sv9rNf5TUE6Kv9btqUBk8NFLXPbtAV5HN5XtiS1RCr27xuAU3CpxbvMG1et2t",
  "key33": "2dVg1orR9x4breRuCXSBtv1wRT4wJFKTtG1qFTLVaARPSH16SVB6Uhaa5FaQ4PpYt4TH56S8ZaM7Y6x2ZB57TK87",
  "key34": "32uBJmxSojFMvi59yV8NozFkViRP6dk8A6T89gADL2LyVTn9jD1qsRzKvPW8JUcGham91Aot7Qat4KbSZVhwJXwt",
  "key35": "4yDjCTLoNsRMSVs9DfU5Dh8BStRCYid9m9DQ5C1W68a6XbsgZGktbgnXiqnP9rCEmjPjDQJoCtXJDgAZazH6gkr5",
  "key36": "XNAhpuZr6PTuvor9d8JY3r3demTBhHkGbVK9WntGhfL1Lgwm1nSePQDCjBcH7BQ6K7mgPhj1Q2QwURcwuPQGqox",
  "key37": "3UycDW7wMkKf8pbri2JybxXymFPFKjxjRbUkdRfAvp26EV1v9XY3hPD5vjbKijKWfRDiKCRmVJ1TLB4V9BoBJiKo",
  "key38": "32bpdewm9ssfrnzyhMDwnoBVtA54pbkFTDL9YUBx7zFoMrHbFFgKwnYQUjubgqe3v7C2hxQwd87kB9oUXigPbV9g",
  "key39": "uGHEGUoZsEbqdAAZSFWbS2aB9cGK2RwoE2odQH5hK2w4xw1Qtg1yirpMbf8sZ4DqL4uAsgba1qqwtCUpg2offRM",
  "key40": "wki74Mx26zrXFx7q2M4Zrwh8QnhAQWV5sNG1vgThthiNCX2DHhGJ65G777HUV2LpNYSPQUZqdrUGJmeJvGPfNWt",
  "key41": "48b2ZewS4g8yDU2Bh5rgCQUwZdUPp7s1hZ7omJZHdVFBtX45rpm6wGXqucXVQZ2SP2Eg2gsVfgmcuYwtNpyd2hXD"
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
