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
    "4nbdKohwcMnfSKsLLbwa5VCFTMm2d7GB1sU56ya4eyB693dqGH2xGVXZg42ZVRfuzvtCQGNwecyqn83AYMsg5iMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVxPKPT9HCLMNSXVLyiYQQ3mb7WwwbwLpvqBU2tmfC6Fw1r863HCTaJwPP9LtWgpRdGVgXrDVHqU3E1jqCmHaUu",
  "key1": "55LbxMa2f1ZFZytT9S2kbUt3QMWJBZXN3yF5R3JQgqQMBUCECQyAvoF7DSLxCwcnSfaFYGKL1KhfWkDSomKDfPS6",
  "key2": "5uC9KYvNLeEFGPrZW9a2nmFgKK5XouLp3sQ9Tvyn5GZ3WvirtvWAyaFntU9MtXsbLeu8QVYq4z9MvRqVFpSNyRZR",
  "key3": "v6DjqUJmjmTGTyJR7LJX9JQAteaSZHW4y1SPFPZoM7QJVGsxCYdC9NiY1T9YHF5brYQerUyPDyWgcchtBgV8qLR",
  "key4": "3CS7Z6YYrWHZuohJDLGs1AwQNEHKLRQHAAt1BjBCHy95d19iSLXD34bVosE8MY8nmh6YHNN7aoki5JSqteyKV1f2",
  "key5": "5bbRcBdU6MfeCMyebZ3B5GgnBULvWUAcWwTFWqfcEJkSBTUoBJXfLSwsEoR8MsiqqP2ikCFQUD8cUKjJ2sRxvvxD",
  "key6": "mXpL7K5bFRBSFZ2RnLy9Co6Bs15vtzkagJk7ij2YQURwQVM2EmEYZDgQniYzwuBCEDCf1YXKHoXntPVKRm8cRe6",
  "key7": "5y4TaLCLd5fvL3ZAUvfM87ZXPeu6hjfWBrVGWMrTzAcfm2DRTNZ3ahNjwzjEDQFWUyurwBRwQSgr2CMgTcTCMJoR",
  "key8": "2kaJnmEsF9ogKxTJvtPLUnfvtsXGp3nXT1eJM4MMpy27GNbn637MFoGnjoj7ryhSV4ZPv9ztu2sZrffSXwk5TB74",
  "key9": "5u3PyWXjuApVTMmxnvWwUt72xmn9JrA2MzLoEiHkqmpxhDpjyJXtzDjCyhUZseTx4m1TKiA2yLCns3sK1ArqyH6P",
  "key10": "2UvyWL4vpJj42eF3Gn8yrmdCJyyB8upooDWhGP8xFhdM5dDWjFLiW9G8ZxZSjj1K1QTZ2R63rrr8967ztRFtStFg",
  "key11": "5VYTPb8uVgjH61Dhs8fKCZy8YD26eTSSDB8Sj5dUHqiQVYNs8kjhK6RzNEsD8my8RXv41JXirjXt9rmh684RWtWz",
  "key12": "4d4EcSYZFuX5TfF3C5mDLEEGcQRh3xAU5tuHeUCoM68wLkUi41vgorNoBpwv48CzZVL9j9XiXca7KU9tWtMWkq4z",
  "key13": "3Sp6m7NneocpUaLsF85wSfWsB6ciRXkrRWHdRZXPQ8ieUGt2nyoB81atVdXh2ZeQLmPG7xFiPbuEt3xmAxETsZNx",
  "key14": "4EfASXQxFtQy2FsA8sipwGrjA4YUjKfXkfs7291gatNRfCLF71nhchn9y84ivM4gmL2JgmhDaWDQ3DWmRcvphZ4c",
  "key15": "4gDQZWNunQVRRbdN7K4fyfEKb8SrBMbuV4E9m6jeW3YTJWCr2H9SeqPYEDdcS6qssLQ6Xa96nYvWjGk553Zwc5U5",
  "key16": "2sSp39hhAvJjYPTf1hERXmNS9TD3387RBnym8KWXEcr9nJwU1RThHZ7nqT67jAqo48mQqi1tgBU5rwyhc6oFJLmF",
  "key17": "52jnA5h3UBHqHiBgu2cWe7cLrvEbCR7vcMBeNiDYwP4azPrZABvaEwtYHM1XTGd3XcNVo7yuYYYBbemUEfpxPko3",
  "key18": "KzRTdELHHGUDJXfkwpjso5e2D15iACLFzKta37z56jJkEBLa4cKdELB9wcqHPqwbwz7brFPWgCf7CwZ2JhBaCQs",
  "key19": "8kkiiHXWHgb9FND5vYwe4xFNZsf7zor1BvhaRGyTxByhDtHJjNWC7r3S7X4AzNLxafHdjH2by1wHrpV1h3YMgaG",
  "key20": "3Fn4jBZr9f4qj5HZKL6LRGP1URDkaXY3GZsSaLHWhAVaJBQaCMud7ibWp6jexHDbWrJmujvAQnXoGQBBLVhVWqjs",
  "key21": "dtuk8APnkBQ8B5CMeCH4iUBmU6Du6R8EQXTGhaLqEjXTbxfxx4uXtZ1XFA5vZvL4PcFk9ExrZeQrAFdqSUfQQ8N",
  "key22": "2n8uyLrHQsBbLjrUeGtqMpUxWSeG6oKXczCL8K8FixB63x43i5jahSe5kaVrZWquUS8kSe6dvN8RM1BTe6KPH34c",
  "key23": "29GayY76AbLoK2mPiVQV5UmNUAvMjv9Qp4HJipu1TLzB7Ms5P68Ghu2LzzKpgsuii5VAVx3UtCXgoBrgdurRPKyc",
  "key24": "KuVJ16azVPcNQ38VrL6FofVHFMhnkVuMWtAW3VLmV5oFcoG29AVsTpkGfdN9q6P14e7vVZhHyYfRKvtbKc6qGSD",
  "key25": "wqm82pBigyuwMRdfA9ncXT8PEKroKnBFgXLYNk1WFQgFeFtngZeiM62M3T22ssQ1ANaBUPGRhjifAAZyVZZn3oy",
  "key26": "4kPTpZQEtv2zWJywjxmHNXM6diSRZFDYK5EHTswDBETKvTim3jqfJieTEfWbkTkpuDSoGdYH6Wv6aGuFaoSWJXzL",
  "key27": "9FBszGCK2mqSq988diXwV8WBBt1ZFtc1RS5Vz8omMp4NPJaQ1kLwKi9sRPAjfdgUqTkWdXPyp12dcEiGFoXe72N",
  "key28": "5WLsQVtiqXuYHcz8aMJQBdyqgbvjsb2Ybetx2sgcqEXHmAq5yM99fs1Uw3DbgMz4HcmmnhoD8cDy5GcgGMuWFjvB",
  "key29": "5HP8DWX1iLSTo67mjSp1dri4pExBnvybL6AL9v3eaCdbXt7ncPK7iBMaTpCvRDn3Y639s4EUeys7zqp8bfdAtR6u",
  "key30": "4j6JKYbNDga3oqG995uDjBar4bgf14Cwn2eMrV8vwe9qm3Pw9K7gmZ8KFpNod8dhKnNLLYxZDGuhsDnLzqPpgtZ",
  "key31": "Pu41fFw9e6LqvithfeNng85PexdjntZsQc5ERPqrwpJ4uev5T6kk9FAAk7q8hC4urMEJFVLFLb9t6WYH22RWgP4",
  "key32": "3xDUpNzrcpSpZvRPQ1EzvqQMxv81PgNN6CJUvobtR6y3qau1MxBuvxMWUBx511rscMXECweQG2pGk874hs7KZBTP",
  "key33": "3CKGJiSJw6DJtXurUzh4Xycix1V6QPPCabxmjWTrKtYCvZkR8u9rqv7B1so7GXLVcdHRdygrQC4RTCv9f1qckjF3",
  "key34": "2AecFP11VSgkBRTdnRBU78PxQLtS7avVYkiEefo1n3As5uFb8UJLbrUu4QWKGRCQFQH1uJhjzraQJxj4pHRbsywW",
  "key35": "3RnhJ1GqFJ57VxrUZp4UxngVBDyDJ2zz5ySxPF9uEmG7mMDVHMht9bJjMVZL6RTZvJe3T8j2SvrzWwn6SxABauSq",
  "key36": "3EJjeZJQcB9UicSBZj16ynwMDXRVXMZ5NJ5umnAoGb9isw5XZGTGQjX4Hr711i594MQCD3ah6FaA7qavhQnuqX1f",
  "key37": "9Ebp5mu6gGzP1FwvPkeRAwXvGPJhZkckevMRMV6DbcGnHUFcdQ222fNquj17QoHcvMV47qX6Pzpz3GgpkJVNKf5",
  "key38": "3gy3j7TeW7PFJFi4sS3gt2ctvvYsAeZy3THhRQv1hhico34uo7vnqtD4jBCNCYc8uehdgxUAH5dcmNSBu74FZXUj",
  "key39": "51wZ3CM62Srs2FuCoQmPA2jsbdov3ygM8GadyBMBoFHLwVxvGTe1Vecdv19sm1BH76ctbhpDCLNzNTUpACZtkNgQ",
  "key40": "4inJZfyw4dXog8g39eXYQmjULRaY5f4jX1pfgMXFEsBH714cH4QDtYPw8AWekrywyQTp6ppzgKSAHcQwYrMA8stX",
  "key41": "22aRy8nT5vmy72JUH8uVRmdVUKxQhirrtSUeUJGuwSZ8tZupE2URbXGjBRUo2hTQ2v7QHGYak2M2bbEshqQvQmJN",
  "key42": "c9rj1L9QAjTjAon71M1mMxZ9onC4Qojsfay73xxfb7Vv7ktAZePubNrazwfsWk6pDnYc2sTZ5Vh3yR3iSfxM7Zp",
  "key43": "5DrEXAjoZ24Qy86YxQZxg8Eofs9qNcGAwRcVSaJ4VNk8dhXmT2sznvVsbTWCDpGWNKRxDn17ExhydpB8XTNTPFNm",
  "key44": "3Cf8eKYr3ang7kxA857NHTFWg7DqzVEK43g4cKCUixfAK9cPGihN1JtYsBBEhELHqieWXHXHvUS7jtbpmP5nFH5T",
  "key45": "52SJyAtcunxLjBkjVDEgK1WczB2qntXdAfkc6m1Hz5LY6GWrh2573m1psFPKePWPyShrmpYnhD4weMfvLGqUjT3m",
  "key46": "5iA9MFQnSpvEHfkTEm2ey8PNruLW2vVi56XdS65LSUR2DJQHcoy9p1VMozaDmX7kVTTHVvfHm3bRK6VY2eSTTJtg",
  "key47": "2XFX2rp5g86wC6ZkZR7BSGBGfdWbkVUkgVWtZ4fhQekDc7WZxomvc77gZwg1v6ZkbfSRMTBLcWJpQbrUH674Vn5G",
  "key48": "4EK5qY8PX4eZ7QQq6wMCQMCfyoxB7bkSuLbEDv8fWmR1XmzLFAZLF1AZv6PKdnA5FVaMowHbiQBgPsMQoYZ3fmYT"
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
