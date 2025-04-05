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
    "3kJiEmVq8R9jJ21mNUzsJfgxFogAeWn2TB6HLpRdk1XMPS9MsM3pbwwQi9Wb94ob2shYAK6JS4GatZdi73eXUkcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bymtT8gimQHryovAsQUs4MQmC7fFsrWmyoR27eAzhrANYLkXnXeeaBm43qQrd1GmEnMkbv7rGzBE1ssPo43mRnB",
  "key1": "62gDSBuXjX36B6yGiQi8wf5Z6njgXYxg6ZNHRgAWjsc3V8kiwaUwkszY3dr8GAEAPt4LAuKBinAhzZfiW7dVgK1W",
  "key2": "5cYhx3utCCa8yPQKh3zFq1qy5wSgN56Ext15AU4zwXngYXwKo377EaUJRKK9wLhA8PLvudedQrkvnoBeehZueZjw",
  "key3": "3toH9qZGVHS3nRgZme56dp3cPqNn1XmcnVXuRBxihVCibDa7Z1P68JTtzjrTZHj9EyYjbRjTuhuE3e4NH5iY4beo",
  "key4": "4FaUN5GWvskZfqC1Rj7efVzJ3MjM2iVBporekC7WKskt7UMefZjZCeWvYXVLzLptqaNGpwpAUfwVmKWxYYGpHheB",
  "key5": "2Fnj4aLSQTsmxTbP2JgD77KW6eUT3Jnc3CELBwnQ7iEj3GAQPLDz2ghckrVwscBqga7MLYXjPy9eubfEhA9PJ7wV",
  "key6": "4onv9AHVKzhQWrAh6RGQ4mjE44jXW61kWw7SqUA9r8129QTsCRbnmkrffexYjPk3uNLeWULHyEePJtwYHo2zLjxZ",
  "key7": "651TW9EKgZhKgR6yTujMcEWveKVY64NGPnA9cHjLY7Bj63nJsCJQPMUeCP21DjnePiRW2EFC7h9b554DgY4mancg",
  "key8": "55qdV1f8CmFvS3NNwn43LZM9ScUc92Q1HDs9DTdmPDzNKSjV7LyDojBfNz97z1GAMiLawQ1QfXPDsXxv53JfZfTA",
  "key9": "3j3nSLDz8ygx6JFkVcQy8fdwLQ4xCuagKX1at3CQjqyKq5Dm4W2ns57fmNZH5jLq283B3KkRwA2zg4o7hra2w4RJ",
  "key10": "3j4ixpLNijVRBLrqdbpUKEqvY1cuBg95XLq5BpegtYjioj8hVHiCJ7H8U3p6Jij9urrPDPzm5pobwqKEYjjAaczU",
  "key11": "5trZxgDYuCWkkXxSUwvUJbW9mcw41isHrb6tGyTLaTe8j6HbrMeybk6hPgU7oK5WhUyRdwZEKHh7u3w8967VFLHb",
  "key12": "2tiXXjuoBDXGEZS8girRxNiWMvhJVit2bdxiiETTfQ32YqBYXJjkQ5zEbkw8TCTTwTmD7dMmsscWLGpJUFVoserH",
  "key13": "5zqqWbfBvVFazsaMkhr9PA3tnTYBJY7fsCj7RZSxLu8GuMdxLSuom3nGBsmKXxB7T4wa3ELSPnmZPd3HDxmc8jcz",
  "key14": "4ZyTcoCHfiN88FRj5Sjq2RJxwpLxCCGAsmWgbZpJs23NMe2MjL2dm3brccZvZvQF5Hm1yvDcXQoR8kabQP75Bn7j",
  "key15": "Vn5MUiuDPuTe8JWKqjLvqEPo12iALAseAEKkADeAhArc7r1grZkGT3hAMND1ATeKGRm4kRbJfuASTYpC5V4d5Eq",
  "key16": "3hS1oLzsJV9qQGZAUqgcy2FxBrUpi6MHpJM9rhPuu2GbsnpaE2fwuHYuJEYpYpudGSnsZjRb4xStnsLHcnJBMzp3",
  "key17": "4VBdqaTswWvDpMEpu4Qc5vtR3TfQ6SRMVUZYYSMCgXR7dUtJL3joxaiHCssMGX8Xjow5pXVAr5c8Qxpb5SdMyGkt",
  "key18": "5ZhYKbp6AkX5njgSdURqeXD7qNs1GZK5fnZPBBZTch1CsgHDVZytugwqawReUCy7vcWZvdwiePdxm1tWFysUNsEm",
  "key19": "5QAQgcJYJsfzsvkbPA5wYzusWf3ndQ8E47yH7ESy2X53vEtyohyysjcaCgU7AnarLEDmBJHdeVSKkJfnnq8uAW81",
  "key20": "4M92At8GPavXDS4oB342Q9utmAsPg6xDbtWDyp9g8En3SuYKKwm3oRUzJUJiMztJ2x3iHD5rrUvBezBQgtRPVuBE",
  "key21": "3yYDtUjgMKER8Gy9bLrFzdzmzQJk4BdC8qewrqbrSKzof5LWzBZmPnHYFyUfRdUer7Ah9x5UNbd87K4dAqda8RK7",
  "key22": "4PwzfLbKn96aL6c4yJicXBounF246FzGP1AqkGcg8y4Sn6h9X6zqfZ29mdrUi2n5VwmrKRSetyBCzz1At3ZvDEEt",
  "key23": "3qvs7J8AqsX2hxugnqPrD4jZxGu5saApb6hknJhdoHHK9Pivv5HjikjSiMDNuk8MHfKhDW6tG7dZhmErwVeh1XE1",
  "key24": "5PZRuGZ9LDV2PfYC8RyqwUV4Ys9i3dwUrZrX1jeyvNPysCn69HWGesyvFQmkx1w4s7acxoU5mZVgRL3vXq2S3Cez",
  "key25": "7AtMvVwonv4A4gruzaUf9DpctcEc8tzDpbg4Bv2xzgdtwLiqoj98i1sKXthPw3W2RESYXsk4iPjNC76wZakLShU",
  "key26": "51iQGNikNqfuJkLSn1b6RNqkiHFMCLRa5xU63tGV6CUGK7JTuAbfum6iHqd1DkUX8BdSPPWLbptGg57hDhxcPFyU",
  "key27": "GE4a2jzLn2HvbdGRQau7anqJZsCPToaZRS1nBg3fN2G7BahGvxYHkxR5iRSEzp5LCx2VPL8uLpm5F18Hc5QxCjf",
  "key28": "5euRS4dKU5jonEYxfJT7KJzJRKWc2ModwCSfLKnEZG5yFGPiTyopr44pRe5RUL6K2KNnTMjwZ3gFhqe3FDsMP6wV",
  "key29": "3b6rvVAcPB1zou6s8jQVBq5EhuE6q3h85Pi79t2eCuLj9baskdS7amuTPzz8PFrk4kKs3y9quabAEAaU9pT2T4Nx",
  "key30": "63iJvLie45cuf5iYB6EGUW9mq1Ce9SzYq6us2dHgdi298FS5mYkfZoqQhU4UVN9RCaLG98ikbN4zvq7NeR1JgXSZ",
  "key31": "5nhsEpP8Jh9szMc532AUwj8JAwvZFZSHJh2UpyW1NdWBe1KC1dLGzJv1wSopwnGJJGmcfH4FLQezxmLF9MMBbMLn",
  "key32": "ikaqthxUW1R8hnibrxwE7VS2mMwEeJS4bbF1qLMv6kMcoQyNvjFBKJLysdRQKXtW3ZSSJejhsdve6R8EAPXiv1L",
  "key33": "2JGEiGzECF4XkMNjBQuVYKAYnTdE7SRdzpCkZy3TfEx2ckfPXGxFnJ14naXapDTee8UPEGPzjChPacV36Eyxns7",
  "key34": "55XLaNUFdFSE3MKjnMC5rVoWAgFPB9FABppP7Wdj7oXVMD4ChuPUqm5Fin9RpQmKSSvqhnMvEJZvV2JJSB4qqf1N",
  "key35": "2L4ohgrgpFc7ZQ2rUgZHTgUKoJeaVqbrePyeGT8PDWApnyWyVoEymrGHJMveLwjvSHaxsgwBDWHJ5CA2CBvo8tbr",
  "key36": "3UJAdJWg3AY92GEArY8NCbdkLx5RvdsSV8K5CdDcf59gFEsGg1sktddjNhTuxUkGq1Q8TmqnPPPRZzCL5x6wnCvR",
  "key37": "34FdnRxSfzpWvKBB4QeNBUucQoXDUQKAfrueiMN4AqhBrnNkh7KkAh4TBRaBraFwrHUhhr2j5nvVXd6Px1ttyB7W",
  "key38": "3FFknPrw2LbDmuTV5wwEaXgESyrXntN1rcCV9auyZkRKHjBgg78T36PtaT3e8vtssm4SHzJ2sZ2Nvi2iEMJPpc6f",
  "key39": "1UQ88mfEK7w6nBWh3xHJN47GZ6bGVrC8fgjPg6yXBvsY8sHBSKZ8AbVwhHcNfydaEdab2KTcitAWZATdQeREHkL",
  "key40": "5uxzuELMvDiPP272dWJyYQMy6FMMnhBa5Yyu5CthSG7MsCEnEJY1vA4nte6PbAdxdJU1kJo5U29vveeSE9FZhtoV",
  "key41": "48zqSMBLeNUm97tADqXwT2Awuyg8BWPvZ6C6dWxzzjaskTKEGyh1ficGbAQbueiRcVKncfHbjxyWiXuo3FXAWTMm",
  "key42": "4oQvCDPoxXRAJskvSWbkAkHdfZiJFsfJEbnnYaK97neo5pu4upmRRxSAHGyfoNm7j81wN4zaubM12gAHy6g3jVSz",
  "key43": "5DxPykEBqc9YGGqrdUSJWvfArvDMjqzmyJHUJTKMUE3MvoH6WcmnBfQ65bqgp5WutLZkDhDjAgAzZtDHHDDm4hvh",
  "key44": "2q5SwtUg73apNcvjyJR8AdzE1Vo31Dz58v9ecpWYJbDmxxtDD9LMd1Rdo5ygn5ow8rRHoMH52wQgxHUaxtCxgmvx"
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
