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
    "4tUWzmxE7B8KMu6TnxVjZDU6ygk3w4Bz1MBLC1X4CDYZc23SYcb4bNG7o5TNbCHDta9WSh2pgogY9m6ZiBmUr6un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4reuTk3NwXpSNygDAG3raF5YjReaUgZSzQvy22r2WpfzzvBBfABXTiT8uJAW2nUDtbRwDhqJyZqDHYbRFX2iRVTf",
  "key1": "65WfPRxTUVqnA4knMx4BmFtS3vkusVTEJE5vpTzRFzb2T3HRp4p6C7ZiuY5qReXtjv9t4R6vULi6EV3sT7uvYvvW",
  "key2": "FC6u6UsmFgwoFWdrfknH3AqYv1amddHYePMJHmHi27iz8je5J3axpzB7CKLAFT241XNyyPMvAiro3zU1EAFBSo5",
  "key3": "5AbXHjxby9e7kfQPPydjqSx7yxebccZLLdfWsViWVwAKWLTaRQDtrbrea1vV5bHTtJFX8zvrvd8BRjSmNndbyzgL",
  "key4": "1H9TfFoJyaATteJEReHttJdA7f6PyVTiNxmVCogGrnBUubGGRF1yceaQQzZcJ3Wo5sfdH2PoPj5CS7u1Xf341zi",
  "key5": "3NR3mSRa6saC4QaGzETgB7HyEzMvNfPjptX7nAqT6iKT3FQrHMrrWwWm5CmU8ZehuQeYg6KSAhL8m1SUyxB2K9aK",
  "key6": "532zyhGBzsfMt1RQ6eRDDUmZxgEhi5X1WSmwDovsW98Y2WQfEToo7uRrbQxNPDbn8WJZUv1o3aQyzTchm4YFpD3E",
  "key7": "5Vs6t7m6P5gjv9bHytfQo3QCcjPmFsimzVAP7VsfQzQs8T9QjJ29hvnBfBGHWV8wU2ephJvpjW6cmMYV1FUyBPTK",
  "key8": "5fxqo8pmNVfKA8KrYB5Xnp7WmeQQfRquRgnYg2ttRcFDX58LCWP5CptchaGbmQavQ5R5DweSXaXtxoUU3eTs531M",
  "key9": "nnySMAgBVrvVRE6h4obbx7L9qE6HwX6fPW51miwMy2DWcbV16vbppJMuhu8K3eTdmDuCcEqEvYn6Zhoj2HbJ4Xk",
  "key10": "4wrhs4L5w7HBd9k9cqMUjHxD45mPKPaNk72DLVKTeXCKV7wsuksvHynHites3of8YRD2fw4Sqvk96yw5EJrymxQn",
  "key11": "44Aeg2x4JTFVY6kWgY5VAueDnPyQ1bwHWoqRzvigQakftz7j7mX2tZX11dSrBXhCPa2CLgs7GcCrmzdvVviw6sMU",
  "key12": "3tpwjx4EpA23XhwHWxGfRmSPJFKgwVMNTdQmwChUZj8tfkhbCYoGj6BnYL99zHUYtW4nRzpWjQYLNgraZYBE3ard",
  "key13": "39GUyaTeL6jwYUPyGgfNSVUacBRYAdqiMJhFJBWgNotR7f3PvJKjzk1kNr3TJc3BPh9JyLCrpwC6hFsfSzRqTPfj",
  "key14": "4Tr9t59HjuxFADeQPFvX2uRx1Fvud463qYtvUHotygKXQVPjsmfd6VqXVndK327H3LbadwM4iqtDggd6xeT7zhaN",
  "key15": "5c6ph4aW56UkM2Jnrn8Rgb2U5j84wKCKnVPygkofo839RBvcCVUTpoVPyL3EMf4m7QLdikA79JUz7iUUHzjwzw9i",
  "key16": "ksh1KdRy5pWrhKpb3Vpi5QGxr8NXiwdZeVx3L2ERM9T7n5FSMTY73xWqg37HBQ4MPxvyJGxYhtJ2d73RgjCwwRC",
  "key17": "srLwufPLxER1sDVCaLZ9geRSurq9BdPqTbMS2cuu2GWDdxWZ74uBcLyrepYrbvKs7ZypxxtUXcuCRU6xKFhY7Aa",
  "key18": "5uRHaQocj5nWCij1UCBJb1AL8xbMhNrm7DuRMkfVGRSFZw91Won9cQfZzqjeCf1TGiiH9XGeD5sVWcgboCbajRRv",
  "key19": "3Ppoc1YsE7DAcCv6tmJg3sCfGEzgX2PGWVkWqpWptPD74NHJ2RZAEasig6tJXrzV94y6rh2v2Bnzj6ZKRTcfikPt",
  "key20": "Pe3VL8sUo27zk1Lqx9uy9Ch8n4GCbaoRQQLgbiRTu6WPYBmNzQnrBqpcLgrkbmjb4D73sYb61Wdn8zwcxFvgTFp",
  "key21": "2vzmt6jQuC2b6GRZ5y5KjRnJnXXXgXhssVAwSTk8A2HcdNzCR66mbxu2pgRgEFPWBu4wyf5RZHGAuM2Wuzd8WgiH",
  "key22": "5JaE3M8ZTVrjZm2jEPCiRjFb3DcRUar1a8YicRR2sZQLHhahTUt75oFLNdepPxndWz3WzsebCe9C2bDnCAFZdV6Q",
  "key23": "2zgQdbKDBVAMZJbqErWaH5TbZMVxGGwr8LSMccp8xiyWAncmmXYRrWQSDAZynYjc7pQHbeNNuNCS1gQ3bHsaUPSq",
  "key24": "5E3tGuYdodpxWPxv4r9i4E6QcSdUUtxqSzjsCaxcVMoebry1kicHHjiAXZPAySiTfoPucK1PmbJw73DHpaPGSBCR",
  "key25": "3uLcqx48twBDHrw2YB7rbWzoSssfNNZUk9QU5Whtpz61Uo5XACJuGQnsfoDrN4URPhrcjFLcATMzke3fLNn5C14y",
  "key26": "wNEVtmcPmgoW98uzggKAThXVG64KLXT8nV4jkdZJdjjnjVCM9xycqohAKy14CQXdq2z1PcAS6JYptUw1wGkVsHT",
  "key27": "3RG6bgWjVwnJc4TKkjBSF8LfggaDebYHYBbQSJb6QurqJoLh8RRqZ1p5wy19MuXFQ9KC9BzgvS9XLzsx3dakDpVM",
  "key28": "sP7scneA8dcaBnyWFWRXAbWMqR2x2ffmNzg7WcBKY5XEGSY3nSanhitU24YryDBJxZmyavfcUYyNeQA7ZLp1Z9U",
  "key29": "2NHx9mxrbJ3Y8LWAvQqMeRBJC7VTSneheo5dos8gjSHNuCRpcK6iaX3GFdoUbhYY58vhMtx47j6efsPcVEkfRHCP",
  "key30": "iid69HdU3mRdn2wWPmR2k6K34aaEV9EnTEnRerATQFyEvdXy7FequgbwW5niFNMRYD2JnEVFUcx3Cg3uh1EPE6B",
  "key31": "2jeLcu7BvmCX8hj8RLdZSdP3AYr7oocNzaVdYKwP499rCLLuXxfjhF9Rd2cmf7RbAkwCFmorxQBacuqsiFMUHBqf",
  "key32": "4uZjfnyaxH3j5t8WWEZT6pFsxybkJHJim5bbWVNQvthm29zsLPqann8DmAXcViUBzMr6CdJTnCSd99FZ7SydGvzc",
  "key33": "2jniREfy87ecUqAymkUNRik5VXhy5onR8a7WzMb6oN9yfghQfNkgjzsqBwgsNJ5FrJLoz37pazziWhqysEoFCoC8",
  "key34": "b76PDrFoxKJMdF7xkVKQAxcDSYoCQcVrACPXgmzTdbWgYyPQc7esy1YXPMP3nComRy57qpVqFFDVAVpfb75fQGz",
  "key35": "3z8KGvvHnPygdQU4E7rxdzLiumqpDktrPJaVTHfYhnKkx6cGzXRwB2UG4ApS7SdpUwtEmbf5xmBWT1fUW95Pz1Fs",
  "key36": "5fMYpD5rfL3oEJmkx1aMKZMn19EMwJMuj3irW9R2jBm8LgRiGwtaLJFb6y4qKp8TmjfF7FknrJ4bq9YZxQpW1xih",
  "key37": "3crauyDYXtQ26btWECDvvCaZmhujGgBJdS3uL8xM7TpPVXZcu2S8KtYiTkhUEVAgbYAdxEYyGfZRvzxEvLRnPHt3",
  "key38": "3AG7YnNcUVvbBJo1XC6DtYCemQcvBPEG4rtiWXkycHd9VMsHYX2g3WTosZ2wyWiExbmbPPqa5j8MgD2Jq4PbJ9iL",
  "key39": "FuptwkneXk5AXCpmzkXd4LAHKhW9zkwKDG4tD2oGXWMXe8Qq4BAHNcfAcWcnTmUxquyWNhgLZnsyeFAVbpno8J6",
  "key40": "4LeouXTuHjDKhNjd1dmMSYKXzVdPY5B8Zu6D5ZS6gN2Ud9Mj3jgkD8PQcTH87D7VGx3YZEVreVDAHBqXywXc2HFj",
  "key41": "5hvt2BVVD9ZFgbPGBwvmSnLPXKV91gujMhS6efkNGYHGGP7yQxJdrUhm4LLcoLxwGDLoEQcuqGAzSH9HBGJWjHXm",
  "key42": "VVhGsivRMm1TCxk5XcgfpVJ62xzeS43jsogA6Pp3UUvAhzZvpV86wEcihsX6n4VKw6qZXVnB8kntSR9mqQRHpFx",
  "key43": "5d5TmCRV5cR7k8LGhCKnSEDHF5FbSg2NPn4hBit9azVDzUXViDzdrqBwMa7UXo7W148ULdug4mhkDKJG6kaeH2Cu",
  "key44": "2DCCEXFiUodPBFeSXLmaxw1HkZtFcRaEnEQjeCH1Y1tkTuvVQWBynAMDqavVudwHyeHTqn14BGr82K8t4sAYmfgY",
  "key45": "21pgsPePRnyxUJHYQcXb7quMCQKDcWWkPiV9SBGSuZC21dUJoaaCkWV3SBrmqGmURuoudpWu8QAsrCrJJJu2qQTL",
  "key46": "5B9NHqvyGyfxueWWn9F63bBDDrPY7wcx3GtzzNmf59aB1qLPtR6z9AJ8Xm3JWtEwrPts6WgSXfYYRSHZ8UFztewz",
  "key47": "2ZcAPdznZft738qvvVVGoFn1xcQoJLwmYeEBhq7FQCcEJgzbuNHUoM2WQU41RQympdTTD27t2Cg4hJtSxfNerJYw"
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
