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
    "42hqCTFnDR27kHSELJDknQAwiFp2ZaEvsRD8EoveH9sxTWsHrbTmEBgCvLCSQVYgVSuKVyAosHFtiye3oo5w5sZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FTzfxFD9c56joKFYDz2vxQm2rQCWSYrWfJwHRf6koU7fv1wCpn1ZxKF1UgsrZG2fKygSQ9QjUkLtY76ZKzEXZpR",
  "key1": "2mLNhoTAfT9HbQ9rJFbx6obuj4UodqryZyErbLywvebeEAx6mneCXRL2y7gxZU7YuGuKXqv5JAkiBsBPQKuCF4MS",
  "key2": "hRZB5kNEkjm6K6YEMpGnsbHnUyCQLJWmYNWoJescwm7bUiJusfJrtHLuoj9TWnEACXqUx9iYCF9XyEf4Lijxw5j",
  "key3": "4iMrE3Bxzy2BV4VcCHh1gcRQS9KjPtExPRL5HbeAPPSqxRFMmTQ5dpsQgzUGCgfHW5mppJ9Ab1t9o5NVypj1F1EA",
  "key4": "5WZHCD132sAh1yZ2TzQ8HXo2h3mH7WQ3XiAzjUS9CJVceNcwXVDWcz4BMZUftiCVzJt5hbDtMJ9vy2D8kcFRfAfr",
  "key5": "5Wtm7u3Ni8qtkguSe87ZmntxkNBdtD9HXi5AVHCqggjwxNXpxrdGu9T4LbPoFgSM1vBBDxbi8UCRtY6nJiBsZDf9",
  "key6": "45unhgQkscAQRcD1H9AqsCNcmZPy245uzDVtW949rifbaksYkMqD1xt9w1KniY8T14itQaJCvw7Csp4zSsy7Ujr9",
  "key7": "2DAxvMwHR4Rfmxqv2bdYNpG3ujJprMw5v8kd6WSPuwkSNHb3via82U1XUkLWzPasgcjzyobUbTZCdxNaVEw6jkpG",
  "key8": "MdpGhTwi3JNQnh3L6k4oqpWSX1C1TAD2keXVKNtRrYmh9rfAJqd9Ng8BQzcVpc2iPMf9XwDFJis2KNtrCfCzwpi",
  "key9": "3KkwXZ6cne5WfdhHKJkaD9AY7mEQVbmXTSoDutXvMe25fNebt5fsD7anvT62RniR119M5FGA7Jdyoww4LpnQgGEZ",
  "key10": "3dGVUfCASftZePmUKqEDu9kjMV9RMSmyXJuGxcvhnZQhdY655gedQABmWcaWYppRDwctcvHis7RjLxSbdgkBqoez",
  "key11": "2YS1UbkeYSxHvZ2uTHsBgSRN2sNe4egLiQ4VGVjWb2PhDVZMd1V2BDS4oRRgst6SnR8jzMgPs3geMmPZNHR6Xnri",
  "key12": "2u3hSWpuRyngCVAHGPDhBXSwYxnQoEJr6S8RzmMYMcDBjCAQ9k6ADoiPWQMyQYMspDvu1ARifSHUy6LtczDL7dFK",
  "key13": "2W77thULkDUThPC3j5fvPe6QZFGTRLZNLniBZgRszzjjPKrk7sq71sfHigQqfpnjk8Px8GJ2sSmh9T5iRKkGBpup",
  "key14": "3a6heiWu9gQkZT1au28Te3DoJXVWWTXopNybuQsqLjpUNAiAmetk66VPiXY6vf3ycPBaZYouid5cUkYUDjqFn2Gi",
  "key15": "5BswDZFEfMraiE8fxvZbZJ1KWhhnEHtbvi9fELVMiMin8xyZqkpkg7FrhQmi67ktcFxVhwUsC9xketLAeJb2uhLu",
  "key16": "2Hwfko2w6G1kao3wfjeYsuJoucNJUFKg6S19pwDoPotitzf9PzrjrfMpVCRtufjkYYBpfTxKWFrs1tovbd4bHTM1",
  "key17": "2LCbzPwCgUjmEketSbqN5nHXBDzMBW9bjhgE2CCkUFyBzocL1tdwB16zyfB5Fjuj1EieBiKKYJCz2JxLAAqXQnzb",
  "key18": "5cAv34ickyNLLmoDJuxQupGzr5tUadMDkyehk6iJBwvLbSr5XjA16rUxHTkiaa1sNEHLyUeDipNbxV49tAsQeBsZ",
  "key19": "ew2bGKqDHnfyWHXXGMrQ2H2pieWrhC8hYcr1mTKBA5FMEhQGBBEtsvzdyeLuSxmZMj8YAeXAFkJ9ZgPVfUqdYyN",
  "key20": "5aqzciBRDbTSZBaAVHJa2Mx4BbzzB3iJgzJVyQ43jQWtGgctze8yk6oJVNfDbAvXUuos8EAhNGCiw1e1pBVYLhAb",
  "key21": "5JEKWopENbrnBgBdJo84EKSDKAVkL268tcCkQxH2GyhkJE117uenn9gSJ6bkfdD8ifqRwq1fSwbnj7Pq3yawx8gC",
  "key22": "jhFCu6xYpDPvyjQu9CtD8jS1R3ABKA1i7dHqJRX8HwVXFk9ouzvP1JwLEbb3V364eiiaPcGsRTgpFiSVtzSaen2",
  "key23": "2eyC9Goa9asmKRLqHyH8vGJHHv76rCTQiyHt2GwMMBYhh52MhMLNCtgZPJkffVd65D3YbCfQdwtuyCQwJhh4TBiB",
  "key24": "3yVDZBBZJsk4hZ7UeKe6WwSRHoqT1UD5XzEoiivJDc8TjE7zAWzos9CJb22pF2Vajxw5ZgXtivpwLT29L8fQ37aK",
  "key25": "4fmuYnRoackVfRBpymWhJux57NXLdjVxNFbWAj5BdnngSyWBE2cXDnKo2AaaB98CudTjpEYbpn6o1v6df3aEyEyW",
  "key26": "5paTirUQYAaM2dE5Tdt3J6KDLHKmeD2fhFCtPwZTHJ7Qzq7MfpByKNrbY4GjcGvAEDLQJ74kUn36xhzTFAcbqrAp",
  "key27": "3caUmaPs2fmk6fGDnSQUYv5g69qi9UMnCSbFwfjX8GxDSosBXHZPVFe4hsKpqh7xz8RR7Gvne28Z198u2WKUs3ek",
  "key28": "4jvBkrsYhR27AyqYepr15N3ck9xr7hFVNJiJQJXKT7JNNAQW15eqvYWJhkrtPnqqrGiXMvmm6rnPYa2tdQyHbgMY",
  "key29": "3FFUxA6eGKosAwQEi2onRMhzWdD8g1YDGLTQpi7c1nDmXPounBjsdgtBBrZUuxNS1TYB7sd37UGtVJGXDMdMSZr1",
  "key30": "5VvLHDGUUGoSYLiLPYh14ZYPR6GqgZiHVJHAfhsLj4T22mrj2rs4X3E2uyHszbrHULiFBgcWaAVUKMEHCjm2UgfB",
  "key31": "44ed2o43wogoEWVEYYDcMxQv8wTRTU8syakhZHTZw7BUxWKtKbEQ8SXQpg5AA7WH6zWtuQLceXCjVxA9K6jUt9oN",
  "key32": "2PCSxxPNYZohroPfX7ZmPU7yyYEj4t1LNohBmMY2aTVhWYz98pUv6nVEjYBbGi9S3B1HvwXwb2VRM7XgheFna2uY",
  "key33": "2GF2qxZZmUDMC2HZ9BnFuQzgYv3ng28a3D3pXVVoRYrgqxnCeG5AahUWNnN7gsZBjPinGc8tNdJ8KJtPQBV44AFs",
  "key34": "5pyKVM2HJYbgFivBCJCqBDgrk7j2rYyhZAZ9KJzLQYQocsCZjqs1DJswhywiPnbxdBxVi9N65xzLWpG4fK82xvkh",
  "key35": "4fdvhDfNdQhSeYL69QH4KWxd247wnKegVv4YQVk8dgtTvYGHd28xnP3p2Qkpw3dgEbq5QH9o9qHrNw1KFNEs5A9F",
  "key36": "3XeSRUDBGBMMFJq2Cj8khmCQwqgCrJhYmogkM3iSuDQD9SQbps17rX1MnpSDvFv5QwSMW4dFHociv6j7rgSvZEXa",
  "key37": "64JJPmR9e3MubUfH4RNeAd4aLebpkKHpVjp9bCbkjTkYut4nnTfBnE21QqQzvZyvhN1XodM5mtGHhtF6XNEJWBqi",
  "key38": "FJGrhmw3kc1iNDRyVxPEck6RrcBhuiQP1ViyRKWBdHg7AaWKbHCh5KMAiVSNu4bexTcCBb8PWwTG6Vo8QqTfkpD",
  "key39": "4rtSMnc9Z9DcpkXV3iLxdiHEQSFwKVGBJZb2xBEwiAjNcyqyyELXb2tFFEKX1Y8FELZsaLVAHVKykeP3qZpG6CGx",
  "key40": "5EvLFQRzoXWLuPUvzVN5XnGarhVNrqszeczEgA38Z7Qmk6aR2oQArpFushfyzvkcdYteiBmFZEGkBsmf9uaJpL62",
  "key41": "2S1V7Jh4YDDQWDNf1StU8gyv23QrtydH6qAvmMAM8zrQuQRsSbzYUzaiKcf6nqcmKFVWBSg5tm8G7Dbjq3wZdxXt",
  "key42": "W5aXo3Hh7NskP8hWsrPV1aXGhn4wexEX6UjXUe3dJhf4L86iZJH5JmAok7NXDPB478suDYeUhVC9NN9mfhuC2Zu",
  "key43": "4KMuTPpwG5vtw4wBxxxRuffLU26mUrPxj8xkWPXKXr62pxZkHyjrCoDLs2U1kpgnJp5351BNYbSJ8ZCXVFVrejve",
  "key44": "2XSkeHJF7UbgYu5tGjcHVFAD5RG9kvBYQzsegCR1d5P1Ydg1TAtR8392t1RMej1bq6SbDrPFCNTZV5P4bDqLC5mz",
  "key45": "p5cWFCTmwwXkTgbgYghZokztieL7kFCaizL4qf4TD3nXeEZn6y8MC19fp2LDba7WopRWmFE4i9NmReFTAyc7yUw",
  "key46": "QmViW8xYw7JUYUEzCeeSR592HiKr1muCm2heroR1DVwpFQUYBWCa2zSWkT58kQPqjWxhpiZE9qT3bzQFqsUC4LV",
  "key47": "2UoL4jqdpwecaCBTDQxeNTfS4ozKnrBum4azisCyjcSF7qwfNHXY7hhvCfeBbXYuGGPDjQsUH1i5WKiR6btnPbss"
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
