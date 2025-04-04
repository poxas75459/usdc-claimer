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
    "3DN7VXS22hPeCtf6BDxgYNvgoNQcKciAwQy5yjv47ioYVAN8DDgtXFdUJbMjdfT8FGfyku7oa9BfN6MqCsbfkscX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygXy7w1HJjm52ELnYwX5fHYWaAAWW94fJLGS5ES9XPMHqJJVYumGDaNrprzbekBKZEJyMuSEwLxdn1f1UGt3NbK",
  "key1": "2mB4fSZMj1a4duxVKEykWi5VCGBA3qdtDDK64KAH4jM17TDDG6r1bRPC3ASG26u4YSWt9583Ff4WFDVcoUAKBfGB",
  "key2": "5N9ZRHH8EP7QYJqDi6fgTAn5qy1ZsHtfH8jpXBpQSxnmQrBr9BFDAgKWjdNbfyGRJqR4SZCr2VAdhQNVoTRc2sJ2",
  "key3": "Z6hXP485JNcCsjdaV5LcW1X2TCDT2HWC75e8XcTG139oUN3AxRD9Z5amkG3XgMV6MuHauDFDNoRt1b9vPFNSdwe",
  "key4": "pVQVNgvMzVaL7wYhJhbdMwy5gvWF7oJaVJjvzzmjGYLNw9pjXEgRdxLiEJip5TQ4QsWScs33seAUBHgULwhmB5j",
  "key5": "29SkPKVngjWYjttBHirAq59NSjN6jwj1fFvugXX7Uinv4n8AsWmwxrsj38uRTBiGoUV1u6hTBMhFFrzyxUVabajW",
  "key6": "2GaUqMc6nvEwiuM3wgkWkKy7bgZinUdPF3pVTQCVAkEj94MBp4esyn6hXcJrtQsd9n2SpKTDfTWyhauNkZJup4ui",
  "key7": "2hfMFZqdRQTkDX2JaegwNMdj1Vbc1fQ1CDKUVb8w9uXpNhu2db3S7m6fT3U6maBQMDDoVFyUK3XLgfugbeb5TkqR",
  "key8": "3JHCtpTXXnJjiV388C5gSnbpAhTkqExCmgQPsjV1MYuJXChSoY7u5o5eG16KcaTe8UwpWtcDFqG5xo9Xqtzc6R2U",
  "key9": "CT2m2mM1jz35jYGcCP1R1KuYRrjmwXScyo2CQDYKn9iK8jKGzEjiBBxqHVz61cpEzejyWr54mGhFH95L3qqtaNq",
  "key10": "4TCez5n5rAwJmcTHAcjEGqBQi7c4tNtqZX2uXHntqN3Gw28JWtw7jFW5VKC88m2meWc9BYjS6FpUcqwyMuqFoB11",
  "key11": "3AgVtw55GrFkVpKVP8qpEbtrBc7NxkXknuiXnHLWTTrnYYhfXp5ercHdn85yB1f2XZzCsK3vjS76hq1nsoQpCgEw",
  "key12": "4z1xgFRpDAuKkSgCfjnQ8UBrCyUkWVTMUzg8FRLx2qGiSLzivFrmU5bXKbSaqEjvMMho5dAUfHbXAC5T2Z9u1Yyr",
  "key13": "ZfHeHk79vHd2m2wcsF6tq6BYNxi1YMSGxDNaBLTYZxCXRZLk2wzkExLTkBg1iJLVUXjuWogjs34ErP1S6aVD55U",
  "key14": "3r8XFKf2yBXi7PmDJCviARYxLDCjhBEYmqnJp987L8t6tvJidTa4Mcff3N4vaCaEXiRUeHEozsXDGjDr43SAhBSi",
  "key15": "RNhgseLz2xX4zq8AQV9UvYrpKopzkcDm4MA2osTrKqLLLnDskJ8B33SSeEwNqFeBuF9ASN8hyEjuJcWCpYzcVMb",
  "key16": "r868XstuprZeJP7BT9wm26rko9JkmmzM9NWAH7wboiLfc6QvgrmzB1vh4D9kZHJUDqZtbbVCPDEkQuLgcDU8iH4",
  "key17": "2GvrPEbk3skmKzR87TfUaexLJumS65QaWhRqUNjoP9hbPUDqe6T8WdPCY4raJVXTt8yDo9FF5Qb6uZnbGxz3wmcM",
  "key18": "4VitK9RJhVL3UqfLDM29ky59CThYZDR8VmhGTSmKwBiEhym6WdGbq5NZUne1Zd2BwcXJ2QPVcbuEY4sgtiaYuTJi",
  "key19": "23ju1YQV79RiTCMNL1yo8wBBPgpixuBLYXT1RwQTLZzh6Z6BUvH3WZoosTwARzrVVVdLz3sbpVGcnr28ZY34Qeip",
  "key20": "5exySDmZBth2nWFn4KkXbX9savxUyyMBwMYQKGSvnCK6n69J1EaMRVksaFa5FnXerSP6SAjjpo8rtAq6wSbbuZGb",
  "key21": "5PDvWDMiHkWSnjhsVH7i2Fpu7aLboVwgHjbWaYFmriFuxEdLgy52WPabR7uBsFGvy94vDW6YbuktQoJRMR4XxcjQ",
  "key22": "kq2t5x1ue18NfDHAggrZmxUVZe57xpXFYaR3qHdMps4EUdBozLz3gGqJCUwzUPTwLinZnjJHXzibiqHRsP5PX6H",
  "key23": "3xyEDg6CAhgDwmhg6zA5k6xjpyxqVbmR7FJv3sATreQHQR9CGFpgG1cbzhVzke7GMFLDfSRJsnmuGDFzES5iHuWA",
  "key24": "62mTfPheYonF4diNbTNNfjTGjEMWQZazVBFXVk3Gd3tRbGU8CZL87qKhVbQG2Krv1QRSj9aZ77X5rzuGCUeTsyoP",
  "key25": "3CSvYmDM5H2HtrpHrjEmvEfDn7s4yckYKZp9gnbdjnJ7qFP7dhjqMKpmucV4FMsq4SnJajEUgP2rkQvX8uy4HdZj",
  "key26": "4KgKhT914DJWpL3TZHP1ifKVji2GafLH5hwPjz1wPUu41UguJYoyeQFR6JNyHvqdVkgWRcQtYbEtGR1KA7TwP1x2",
  "key27": "2etB62rZ3tf6HRcQYyA6AKBF6NpXznQHnZqPHCggEDwBExsSGm3gy9LNPfMHmt2TGA5cnU4Kt7gKYrfutLw3WPCu",
  "key28": "5H4aHWyqMxNkS1ZD1qA1AvVNTwcr33m4Jqzf7L177gJjhMQ9fFnrwtSSUUq1s5X1X7X38nFjwB3fwH5MdHxeZEGC",
  "key29": "4PMijLTQExzeJshxV1PDxv4Ngi3JWF8zsS1bboPqmEVRMVS8kPuvgeM3HbABA8EFRu48yEhe3MVTdYbLQVBnPayk",
  "key30": "4jnrYW2xY6o4kjis5cuBncYcpp4phD9W3QWz9KRYx9a4TV4ZWXd6nF6cYHdqGkbcoZFGMwG7Z6jVQkURwNpPCiuY",
  "key31": "VGUVVDEZwqc27VAVdLhtXgatybmSa4xcKdgwdydxzQGuP3KBYmUhx3Lnm9HdsQ642KrUkCmg8BeLDSxTnFJLoun",
  "key32": "2B4MzLHHqcLpoDmnKr5bz5oVDKKjzEr2stru72tcDeJB2ghcBDjLorgmxTcpcAMaMwsDsnusxXWizdZcw4PX56Zh",
  "key33": "kkPH1gSxz26Kv6GH6fn9Vuokvj2PPUMFNu4gLwVYXNX2nAWxpBEDrbuL1H27KpVBqPybAUAg7SVoxsx1voscuA5",
  "key34": "57XFZx4pWNiRCfpAfzm2Jvutd14BkFetJYiB75RC5xHPowtmYZXcM6mfkaFJzcShC39QQC7jFcU8FTDypyxpT2qz",
  "key35": "5KrdJ6bwES3T5b5SBuMJ6rp3TL5bCvt3DKN5KNQAinRMCSzbQUU8XzeWqn9e6Rja3KWC6qunbh5f2p79HQ41Hu4i",
  "key36": "5f876bbz95XFkxPP5xLtzVFLhx6n3M8LsFjKRUfnLim2SEbzj2wozdU49SeAYcXkNhxcDsFBMLME7oqsvLRVhBYU",
  "key37": "21PHaixdEzMaxFL227x4Z5t4wpiD4jmZKsEVePHvVt8QLttPQtB2i3XK4NbMmSwDKf25av6jwF8wF9VVz8DQ1RR2",
  "key38": "4pVpryUMGyCMTKnrkQuycUdDDrURNKCww26juSyAJrs92J1deBgrFXCntBsMAqFcaYm3KodaLGtEauwxsV9gdF9F",
  "key39": "2uhqf16NVuwDYv9mZrhX3C34WDr8mxbzgang6kjvwAnodn3W7kMqmu5V27xzN7TDgrZv7Spk3rKAhjaQqiKzUvyR",
  "key40": "3oMbAcGsfMYJYMSGjq5LqyJPKqhv5Mwu5kqhwBgEUw62RkYWXS99tnANwBzAxHGnaQHSBFw1fg7GYNEfuGFw2Esn",
  "key41": "4Drb6saFreY6pGWYQ4csjuTgt42dVHWUbEFGJtK36Jh8yGKQjCyDy6EVPMxVdpRbiWXVBdnTKth2uNqe4qVKwbMy",
  "key42": "4gadcfzxVdDZ54CAH48UFTVpNeqa78EKdmnf3pUkygPbjTV9MiyLk4eP3WBoMegHY7JJWTnQJ7oD46tVGKKc9hGD",
  "key43": "4WLBNanY7Su4iEbZ78j9WJsQhm16F6BLcKgPJ9RLPd5PD5ZEjtvu7kvgwoSpFc3pr1WH32oE9TM3ryQQeWRioZSx",
  "key44": "4FwSM8ewKuQNuPvNMVGGfxxUAGucPceLpreohQ9u1DCu6uBRZS59bL59ijapLxYwuXNcd2XF76tzgcCw99YZXw8c",
  "key45": "3bV284XEQWUUQaJzUxisYuBZztLHmQZWX6Tynsso5CTFRP7i64HPRHbrnB8uGDgBJmwXbfLifovStsxzXcmfjNWw",
  "key46": "2U2Ro765LX168HzWCgFjJPTJe6zrf4o3PVF32Atp2niuXtFwbxSdqeUywMAe7pJ7H9G3by2G7Zsmvj2EgNLtksHv",
  "key47": "5snNephzPMEDWFu4pT1miFnPHviipZnoRPWmQk5dzkvYEb3u74kaWVvvneCmWwzbuXXF5KVPrDHznNfc5Mm312Pk",
  "key48": "4wwNYJ7eSpDzMBTQREMtAkzLcr3JCaMW3kiUi5MgZsv8nfgggwYVcTYtPY5ZuYF87LbdoLPCL13AwLxHPhSFTjau"
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
