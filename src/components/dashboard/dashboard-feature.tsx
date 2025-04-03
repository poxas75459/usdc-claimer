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
    "4dszS5UMAu5DbmqzRENPR6bViWQonKwdY7bmAQczJ2XBi8oYSAfuAwf6x8NXGfeKz5GMaWhvYZbH5BSXAfRaqpB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9cQqLZNPKtUsost7RRTC3Js8RU5oyjGY1KV8tCfoaHXH6jzrbidzxHiGY2BQC9L1CkCnBd6pDo9LATGyc5ncoE",
  "key1": "2WDXARP6qw55LBuk7JiGadqfFN5hVEwRGT9pQrLA5C8JanUpGJpiNP251HtQAEXuFaWt9KRZh3UBpsb41Q4nxAup",
  "key2": "ExyzVhpvL3BQtPYS5NDUp4NKqZfazg2CMSzHsRQYoMxN7vr3AbTYqKc6vLg5gChCwCLi2ypsXZzMZ4SvZGbsN76",
  "key3": "34VpLKXNCzuToiQFrUm2jsySrkmE2ARYenJZE6hY2KTdZstR8gNWsoPg5ijjHoeFBcZAzS6dXz9oPaeQjZhtFM7P",
  "key4": "4fbVp6K8VZk2S3kqTa4TL5kpdgV9WegtKptQ1seZCwrVaGN2b7gcyVYCW4cB8yMxgLMcwTxF23ndr8k2VsXruvXG",
  "key5": "5eGb9Quipd8wDwCrHxBNBLJFQByxFmx5yufqoBUwRqWWoLioFWwqvNVFCNSpKFADPX6wTfkKBzSBhCSkFaJ9iSWH",
  "key6": "XbkVmSAADqJorvB9KjfyztcyEmWSt27tFprDq29efkNWUNHPvcr329vyTr9RmEFwU7SEu2qoZBwiQ1Kwq5Zuy54",
  "key7": "3Ubr5t7AqY1GGNP8SHYbVPwbxUqr1ULRURbUzpoe9y9B1esE2LzvisGF7GTYcEKiopbhCCF8Svy43qYCXnRwmDHQ",
  "key8": "2gJ3yLVqvegYG8TVuGb6CbLQffaVtssEMwX43KQuvYfJ39xiHx1Ac4qYVTR8GvPbaK8EjwZdaT7jzYDSDKfmUndM",
  "key9": "32iiyYYzHdrR9ExyUHTxc9ykVwB7KL1bBTVJAWT29RVMo6FRu4f4ufrpXgQNJFS1YpXY4BKxNzLPYbrH8XvmWyZ",
  "key10": "565A3crCsdPZUrguCE4FsPAV3FhxDTb83XcPffnBNB5a8wNjKvBMmKKoZMU9ZmsECyLZH2v9T1d5PCK1ifxPp96i",
  "key11": "2rd72c41jMmNWwJJvWiWZhBVR3BXDxj5aNaqqt9vRHESWey3PD3DTjLqToQnUwub2DXjiAVXWesVAFvpvq3cuC1f",
  "key12": "4woTxfoan4vhGTGgHEA8SJNgfnZJoZUxj9vgaQgdKJQxrLJKk26vKqE2XQA3JrC4bonq9p3p3Zf3rWEJWVw2ZmsF",
  "key13": "5EXGRSMGa4aDP39v9EjMn2YqmtmmZYz6JyiBgoY8MYHS7utQWpieQyRmXMNKuhbBgZHthXGMGvi1Hwz7pY2Qszgn",
  "key14": "5sYAZdMjRKmLvLSEmEZCLn5RjrYVVyp23q8syhe4ZJie3xU3BJGSUwbR5zNATLs2hwpKxZTEY4nGdmCtcHytACaF",
  "key15": "3zuxJoRt4WrRyjNpzyJZBKc7L5GSUuQoZXC39HdVWTukEzSuHSkyZ94D6V5qEfkrHwfYonaeSo6eJmcrxCedJJwf",
  "key16": "62BWCwrAs3QyDYPM57x1ghnf38ifvrgUrbYugSmnUvqEArbz2oMfLK2pzDgTsY1Tq41HSH9Usy5TatQNDx43KWHk",
  "key17": "5L4eWGqBW9uneqi8eWjRPQXBxisUuw6Jtfr9pEB8av7TAN45bYkGRWmtVPfyX2QfZcVyayGULLhaJ19VuJL6c7bn",
  "key18": "5fpj532GwVKjj3wu3AKNvbK7GgG9qj5ANyJ8q8EAtsRbU1Sz1ajfB63kwCXhQbMskBoMdBMF5G1GskbS5R1R5q3f",
  "key19": "25axYkKfh3VdAL5NW9nYzULvzXtWxhw1bgr5TUoaRZKiK5SsUHr1n6ot8dFS8AouQSmFepWegYb4AJP3TdhJSFbt",
  "key20": "Rfcz716Eki3EKoemtdDrY46QUbjpo3M8LMUTH7mnJubhVVJiyV5ph4xFeic8CYD8k8653jScqx1z7fvh8oo1Tx6",
  "key21": "2MnKfA8E8c21TDAKAVjKAXQMknXy4F2crsacmutQMgbcvGMs6ioru2o8FEMR6sxQfNgyiJxQTwsziHb8hQEq4fqK",
  "key22": "4B6RztKAdcn6eMHVnVMkhySNHSXC3zUa18MHDc2MqQSCQgyTYrA49B75gp1UhcRgQsGBo6DhwpKLtWDxquGn8fvU",
  "key23": "SVmPVt1Pj4VSJyfdspnVJjY26NEGvWsk5e6xrcQVmPSSwC9vuz4nmTKvR4aGxUsFQ5yUFvdbyg99xwwmesJSVC4",
  "key24": "5y8ao8VpsehC1cnsHwAqXyTxXiRnVPPLvZA3SVey6UgeBKEjYpbKS7UW8uFkMVbu8uQuNJYVScZcnRdHhidqE13G",
  "key25": "2UytSZVcvDYQa98VWe74WNg8oP5N4am169V8CgfToCDjk7unBKJB4xxAoJfeQvascp5bucGS8djbkwdV6hWeqvCF",
  "key26": "Z2PqiExMYvqBE5ZC4nkxMFZWK6i4Cf1JgmvyS6cvRRFq2aTKVAN74D8G8eovMrxFLHWDodhK5jpq2J9YLzX92dk",
  "key27": "4g6Vdq6pvddajqwHhYwiNKSUYdyTDxyneVsrfsXAqK5KUVo4RL872zDffsknxsREgistFA5J7MmqkVUDz58Wo1kY",
  "key28": "5KCqBAU5GqowvhtSnSkZVe2dAPWYFeAeZhYArmLXTjZyxDjgKU65SscEPe4PttSGq7pbxorhPHAHPaH54EXo6ch6",
  "key29": "4V4tKacA4Lhv5bRGExQb87xtn2bputdvDysrcx7KTACAv4rTLT9XAip4JKuA9aQPYsX7xWe5Wt66Sx2Ho6UJ99E4",
  "key30": "5PE3YozmL3qkGdUCeEonoguWitHpA7bRd44BnBDYYUfATvCtaqiejJsCK4krSLF4LZpzYgXivpBggTCMELcHuf3V",
  "key31": "2tAFg2ELxXnR1mNhVk19Gyb4vVum1DRWBRth6oKBPLavk3zq1CRmyLX63kTQVCGg27JhQwgtZwpfEWvcf1pEgqnx",
  "key32": "2JeD2Rkh939AbuYCg9x6moSgqo3N7Q2nfjLQ4zeHWstpdHcexCNHYpzj8t1c1c5jg7NreuySrEe5u68fxiKujACY",
  "key33": "622SehMX63eNNVxmTdBzQTNjjtZXYdukxJNLPnMmb2TR666n1zm4zcYAdYYpx6RJ1sLU1tXaK2ktuXHR3BbSbLKL",
  "key34": "3NbtobYnA2pkcXwd44jA6s6q3UsDG42XueGmaSWm4vBcz2CbTNeDDLTqnnCQXisFbTxaXyPEv7YKYg7XaU96zLxy",
  "key35": "5u4hMgz8JHpgs7ibCJtP2RPEkYfbRQRBhzw4ihRrurYdc7kNWSFxym6ktHpXJdMbYQVenEjMn3ZAbKAz2qGAxsC5",
  "key36": "3ec4dBd1sVyyCrevJypM1WdQMtTcP1fmfuPEbszwykcJXqf3YqxhB3GJSEp932rQUnFhZqaTZmnSJBi7BS38e1vd",
  "key37": "2WBaxRt7p541i9cvCKpNGFn3dzh2CzYiekPP9AzX1vqbVhef198LcnB7PZiq4N5zfkK3hXdXkMCDk2H2CmUa54GF",
  "key38": "5cUXvGLQGQjAcjbjM5xFNKt8JbxVx5wRswdF4q6jHn3ZAJagQs9j5NvuuxWLE2zTrJwCzW4t3Wfh7YdTWZoGviTj",
  "key39": "3pBSjihZzFBqRPmUW3G1P6fC3WFkExeEXkAMgH8B8bUv8h9wZYYsNYNiEZAJ4oag31CiVVwcJBRRUxgEB5bK1YMh",
  "key40": "4chUoKcohXffgKDcMnPYwbXwdDhswBc3tDBHPXhCmKnoQ5EyKw4YQJeWW2a3Hps7Czib8JsHgzMm7LYummb2sGbb",
  "key41": "4N2CvYriMSWVEoT6FfrDjZWKz1esDKsAsmdLRcxwaEq1W64uC5ZZkprFDvWXEQiRGg2xg9ehZrsGgX39D9RU92rB",
  "key42": "3kiHTkiTsqgtaGWd9GVSfLYnGjJ6an1nUoWHhQCWPQEWZJpzfuHZQr8ZKSU1B449jF639gr2PZ9VfqUieren5qoV",
  "key43": "4QmKvs9VP6yyQALr95aGEEjMogCf9Pz6w5zXLkdxKPiyJ6xv1dzAF5m1oMdjsra8mHQgD9KU1U3YVRz12K3aeWWJ"
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
