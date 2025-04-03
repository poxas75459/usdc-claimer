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
    "4qfmeEjjWq5L4eAiEqcCtNNQhY7RjcDGTb3D8rpxgR8g3P8N8Tyuvuimb2pBmzTY3WmG56xfJQbCx6oUbRhZZdV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkJrbuRD6iAub3iWAz45FiFJ3gtJNncn38bJ4udpv8JbaXouSEMyihBPwsdffu3fv7aVTDGGjoaLU8uSjrk1v8K",
  "key1": "4tiJhgiJZYqk3Z9Nrs7qdJLgBCem1k26U4V1TjcjwSD954fBbApL5CBux3JiVcRDXjJ58uTHDo6BCDPtWQ8NdHjX",
  "key2": "3ua8L9qqHQXHc8tR2qLo4BxUo5arJEd4gxZXt35zuW96piR1z1vjUvZ2FHJkDGLtuzLn9sJbMCpttc1Eg6Y3Nqm9",
  "key3": "5wqxcDBVpu4Q8k2YvCTYuLJNtDKr788immFg9qAySqgtMaGVnpkEqGzSShGS1ErxCWJyx4MoGNkjDHYtj3w4MWTx",
  "key4": "4ckbdiLoMbzPhk4EXQYy2EtxEL71qnAxaYfwG7T5sMy9xsVyouamynYoPTaDiLByhWc57urnLZWK5bhWcVZtoZ1C",
  "key5": "5gxStJWGZoKajEqvofk8JFoFzE7cpvPo1jzKAbPqM8xktC8nLTaa8fGMjz8qbctjFWryBr4RuSxjyiKq6UnXdxCa",
  "key6": "3gjUu8xR3bFXdUkLhCqhn59PngZLUzX4ufWwwdaJozrtwDPiTkmzkSkwjDnWcGdtPVBHnB7nwhr248Tk5Bg8ztZ8",
  "key7": "27Rd66WCE9Scgxh1f5LqVi63FuA9CC65SsXRDhhikCa29vy8apSuogHFbEit5HYduNgQZxNLuvTU66DVeCgUfWkq",
  "key8": "gmNDPc2w27RhTFV5pm8TJvajcnLrPXdrazAKD7qJnvLyYy5nqdXV1QPd1nfdcVQQRshGob2xzBzfvi7WNbyS8o6",
  "key9": "5PGwR1pWdbEePHY824AzRFHjou7h7VaGuUsBK1UD5yv3izuYwRcngcC4xxujpa7Vnf2yJxYMGEaoyybV5TSAU5rv",
  "key10": "5YAU99nHX5yuVfGq3WSW2KvoSG1esATKWizZS3SE4U6k5wfdbCLqc4W8MgBbKaeG2YTHqcAHfJDn9ir8JtfC6AsN",
  "key11": "2XRMkEAgTjWdnVYSXDjRTGaP9xEoC9vc2fWht62xYpFUzLEWxMLqfVovptLNVgHZCXD4iW5VWDnowcf6yfMzube6",
  "key12": "2R32jSMjdnejsby2iTtV2WaGhUyGWLrXSdndv5438eH12ZxF6FQkZjV3GTLU2XdXKhMJeDbmthU6RXQ4pQFk5jdS",
  "key13": "42xCDjXSZ9pM9fE9oiqVVfE939VNAdQa4uWwe62bS87Wr6X94PKdd4QxSwr6XM9AL8ZzpiCDG1fDgTzMeXLLhhwx",
  "key14": "5BS5dMLpHf55vqAtjHb3JZTjTRR2FVmA5N6vCM15EpUaMZgb5V1uCLRkk3ibHwoScHqLAaSfjFWD4WGNE8iGMSUp",
  "key15": "5xZRNKWZBVPn4Tg8Ca3jDrsR5q5sZ3qfUmjojm963jzX1vbe8YaYB84DRjuwbvHteCm2M2AmxwQgRWmpuRnhowS2",
  "key16": "2cEFVfvrLps8fj7xMnDqneSjQNoMyzh6YS84xUZBkMxp8TDNW5xTEhG3yZ94Rj3gUP5mZSvEGNKTuBPZT9J8gGmW",
  "key17": "4bHjx6hK9dNzMuLwyfVwYLSBotnSHJSuoEza22u4UnDCb1q5ZyAa749A9SXWXsHcmGFXwPLKWD9t6q85Z7BdxrUe",
  "key18": "5owhdmXJY8hThSdLqY3o3P85r8ZwS7unASYqAjc25x8ZuSBd3Ru4TAzzPhTxUdnEWgnzD8a28cB8ioJqphFQcGy4",
  "key19": "D7kNCjbZ8KFQTh53GxXL6ozhrqRrwD7DGeikb7km19vjt4wkr28YFmdvaebpBX1rZnmwA8w4EPGNg84SQejwgBn",
  "key20": "2W8jyCqRr2fLHeGCfkK1Vb2cg4F52RxgiyqgCsqxXvpVNLQBvdmNoFzfrV3J9QymiG2d872hWZTTkCvsnywKCf7S",
  "key21": "2nnVtmsyf1rPedLLXfuYAzCya87bjmseYBmV1mtdDzJ28Ddcy2HLEevk8hneTLG8CMMpMgvzPxVCyBZkuX9ogV48",
  "key22": "2iZLYQQAu2E92zLrpcUkNtim2AMsgtRpJXKGUBZZp3DnyyjKpbrW7YygpzASsuYSi13u2qGEbmSyxC681qLJ5Ygt",
  "key23": "5rCATUC7o7gbZUYBngkj3dpNhvpPsJiuUzJ8QBFdqLK7xfoZUHEW2LARk6KWMBCst7yS3nPC2Dbura9ARWUPiBG9",
  "key24": "5iBUQfUjf9i8D6brUYi3CsNGUhjbhT3RBPFpfRkhpefb8PUnpifmGDMa8AzG2JeT9GAtejvMbKrGoykpXvcjQS1V",
  "key25": "2jzRU1hXTppE5YmZHSPQZY3iRw5MVRXzkydCdPiMffZdktYgyVnAP7eFxXdCWq8ptp3crbTHVwYmHegy3fWxtFa6",
  "key26": "3XAKoT6afMFp5pYfriot7KYrwQgeNjfPjFR6mwXBvy3qTA3um5B27gXR3gx2drLFeegZW83fqpYuJBbkZLzjoi7B",
  "key27": "2yyRFuomUxUkvWsubx6YJ3SnePB9asWPudUmq1vYoPEMqBU6XJQ7PFZtcQ7AGo2VCS317En7SzizEXCsdqPJAXf8",
  "key28": "5ebLcVn9MhyJffiZhmwu6cdfVkdEaVQh9gN7ZueqgYVhGRFzjArFpjht6noENAzcHe5ZRkvFtouX1Mwu3DLUE9Fo",
  "key29": "4aeCGmZmni8s6s62pJPYTtcCkF32SnpfX1cdW18i6Nm9cae4gCgg8qeWJyQQSSkosm5fDgbVKEoR93TFFh9BF1zN",
  "key30": "BskTrNhjqauoVWbRqqX3L7iXZCh4puteAod72C4S5Y8gmEeA9zS9UmzWHW2YPqjf3Mjst4nzZ1wTZ8kVzhLcPAc",
  "key31": "k9i7WzSG8HsmoYVzfjFefyLpH7mWxHWHx1pHvBz2NN6JSh55wfy9SQXX5gYZztg1CfLLDfXSo39iJjb6YDkHq6j",
  "key32": "4tvcfvHn46XsLgN2S3ttCuAJrVMs6Av9dvxvjRJsKHpS9boBRNjxPrEGnwoYQX6kvELmRk96FMNcKt12WinrYS1y",
  "key33": "5dwDLr3t2xhEiH2tgH9kU5xUyvnJbHzPA7ocnLb33vbACTy3RR2sGAKkxNEL9LfoeuZWMmtKYBHZjty14yGhkVuL",
  "key34": "2sgDiwnKPtQmXwWd4iDKUZXjHJ4KRHofLwrp4KPXb4r5firxcex3tX3GUUTscRrMiws3mxfgLChHiJSKp9BBZ9AB",
  "key35": "3QP1VQS3pRsASKmLQmCHBvE2nafsKLXY68V5bTTMinWmsJN8J6YQjL4uyGMrRfhguw3pCnN4SKksh8zy6LYPpFd",
  "key36": "2ed9xLp7aCcTXXLzbkG11xwki5pkxFoHw4nxnYrSjZRfF435DB1TJCMvoKmMECJ7fuhDqRtrKU2JL5jnkeMzhKmN",
  "key37": "2wfHEddJD9nqZDiRgR4fzv6tRpzpKQrPgP5fZuhKUtdaqKww7qkcCEWoLe6TZRvcwhkjRD1ndkiDQi6PGRfe9hLB",
  "key38": "2BAnzYnDZZk3ukgba1Mu8cG9pv8Fp4nPaMAtMY54PKuxHBjvmw8FuvTmygsyQ2g12EbSMVuggE2aCG2ffkzuN6tY",
  "key39": "siiwxv7snCgHpFYhA7wj3jtMk9osJnhEnvwBPp8s9UJjLK8awqpu5A93TYyTmxRbZR7pgNKEPvDw1PVLcy5Ba2h"
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
