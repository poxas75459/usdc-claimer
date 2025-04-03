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
    "41PiBNjhHuDjdNPdkz5NBkfnKHLeChSUeh3p1VZWe3kyP7Nk85Gfn4wuwJz5ewtxzXbF1nRadKvYPZxKRp2yy8oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iL428zjEedGqcAfLBYM5ju5tBkk36AWgCw15tF24LfPk9VdQoEqd7JHgNP2uHQDVoriYJqdJ2ft6fzFSBKAFsYb",
  "key1": "4ppo8vcNN1RRsqEKGakcM8gVLZ8TzjaQ1Q7gHbiqztsHUM8B5Ye7Bb6imxpB6ZPbsuAEtYdJhefoaLEL41Jsx6h7",
  "key2": "2Qh6zjRZXGxpS2YpvkLdXjnfMXerQYqViFXiPKSkB7kxyUN6HFPTZWHuP2oQA2gxcxYn5i5R53Acru77UAoVDGro",
  "key3": "5BYTYHTqrGUkeg5rpvh1v9hen5PDPazLk6XN4qeCAYBcaELcxSQd1TXPXmBrztgbZF4KSjnRXoKofDiEPvCaYq5S",
  "key4": "5Gn6tGeX4pnKHeRKV1GbiF4yit5riYUuyWqjccSNDbSzmDMJWb7YT8xFzqmm4AMcc2cs53YxBsScXQKDUAqPJfCf",
  "key5": "5nVYe51KPXx7fVKLAPp685Vfq7EMkELXuUHkiNj6UWAQWWQ7d2RPAd9afpaSS216vBYXiNceiMsiMME47A72RqXt",
  "key6": "3c1CnEttrsQR8xLhYBQH5wXDkhJAseN2xiWHThW1MKZHezteswhcSpwHNuGjaQZhvSjLtDwK5N7qLk9JvRqvrnWU",
  "key7": "4PDs67dDWbiV33Qm2Nv7A2gJpPUG3hD4tf6fq2ns83KeaAyx8DJBVzkbZu2kSHZvVgio8wLeuqdGYwV9dHpdwNE2",
  "key8": "UHWjCbi8o5BdPWozKqyrmUmaPQPXmb793yywTofHpwJwPzfK7wrzsV6CN4maK3nu21WRoFXhLzkvgBUrsM5VP8X",
  "key9": "UfCaD4tPDV6zhYxVAkUgREHpYUojWZZVGuzAQcseqw4ZHzfJ8Fcqg6iyyNfdJcoEbHvPrHTtziAqBLamGuBkPfo",
  "key10": "5MVY8jp2FLPYUuxrjoLaejiVteUasRPuAc1EUKejS2meBWvP1kesvkt3ESahiTmk9LAXJ9Pzsrcq1JXX3eHRYxYz",
  "key11": "FeJrdEnq4rixRQ2b9LJBHJF1cjam99bGWdak7d9CMwtt21R1B2pyGnrTfQEBFfPi3FGmGcCsvQixAK2Thu1Zc8z",
  "key12": "4Csbq7WCBnocSpeMxdfLTxV8QdWmfNEUudX4QFY88x5hGwLJEms45oHyUs2EUrRQEaSGZ6LdsHRaX11rXmZM8jQs",
  "key13": "5L6zSM31MvuttvEmfYcepmw4YXazXebVvvYj815PmKou8QHRePctP9PmyBd1TUVzjP4eGSR2kqm3V12ZYMiKPswV",
  "key14": "2V3Ugbu4ee2A8Skt6VhHrVTxynEEiK2eBgbcek5rjpnWRrGxDMsimN1zHEf4SgQew1TmoNnzXK83hsi3VbGTBR2R",
  "key15": "3ZKjBnHwvW185egfR3F9sUYtdJwKh2Ux3NFk3L2u2jqmrkiugoe1pT5vxYAxupZzzdh3Wpdob7H7BU2ciQqo7WP5",
  "key16": "3GwwfhZSudzWDhRkzdU2EQVk62o13wTjTZ6E8W1YfyEZA231Kro3zVKdZdhkd9Vz6QNke32W6HyuBAegZGNSrxZ6",
  "key17": "2JFmyuTmSxaLRR592GynkkZdca6FpzY1AgRBmWeDhDRVUX7jpADRFP1r3yqdcd2KAqVBVbAxREwwsRnzW988ztBo",
  "key18": "3RRSLDccRebrWmSqx1vq3jPKcggCYDTeChTvcJf9xSC6BTbvXQfBCvCEEBWWsGRhTsKNz2oMYFoAQs5hMVs83sff",
  "key19": "eJpJTQ2zdN7MHaLpSSY5RgfyqsDNZ8P5aXvCA4aHukNgi8th1AkqHu5AoQ4DVsaE269S1iHDKaKcYFoau4UZATc",
  "key20": "vXSiqXmi53zVFzMcp98wYdzuJCEFMXMrmxYRpFi2HiMu4PS3aNF88yke5aPAPxBeUaREhu6Ym6ns7qGvaK2Gq6g",
  "key21": "5huQxpSZ1kkXSMq5LkcU5oMs8kaMjRKQrCXtY2zuSA3ARruoP9HSSQ1qTpnmpfn6x7NmCUnMLwoatLAJXspoU91g",
  "key22": "E7rhakKEGp9n77WRgfGbgZBKJP74xDnacsqqmdSLshmVoNQpUFLPaTNFpjcnMgB5oPEgmk9RHAqDNDEigH8tS24",
  "key23": "2ac8vVEfjmu8sFUQi3hNNjdEmMmp8xAgrrr47MdXe9ZddLLPvns3Zead2EatzNP3KzjSXg6d7gXpS9sHAMnF48pG",
  "key24": "5dMjgdiHSjm3Wgn7rAsYp6LLJmFTxp4BKK6HCyrTt9hucwyvMtRLVRKzrEvfZjgp7UzERd4sQvrR9uadw8QYHbUH",
  "key25": "4WEC8iocbL8bEiQotGypuEWSe4Xb7cASQ7nFgx2xaKNdkpxMmmTVo1fT4WLYQrvqh94sq2wBbJCcAawo34ttHLrs",
  "key26": "36FGmSiK2AUZgTf8BCN5QvoLqSiLJDdzbMGCF79sQdaWkAm747oHwwiWYtSKQ3KtVqJbaEQuyMSdXMogRFb4CJbp",
  "key27": "4GUq3J4SyYRrwyJUHkDUPRLehdPnZyfzAqLU7uxTzwQYEBhW7b85cDU5LXbeFWH8qxNmcSx5PdPCnkvhnKf5kcDH",
  "key28": "499rhzzNuncYeBnzUv4mu3ybEgEU53pw1GS6yRn8CKsTLE8utcmSf8ALuPGh6W55aDt7oNSQ3caXNmBSbLEFBJpH",
  "key29": "3DNjCmXgrmDtzi6PxEvrBz6qbA1RUVJF1pbZjRJLRMRJpdX8UvzDYWE359UhzqMQDfsQXwKefjQd8nQKvV5r1o2G",
  "key30": "44JYuwrnaG5ZpQmUDCWwkJ3jeHzFq4hc1yDCUhik3UcnsM4o9q9kCRCcMTCQkh7AbrmcC3U3VvCvHnJ4N5Loyvpa",
  "key31": "4pbEdzLm6cuKPWey78sNrFm4TMzS6oKkx5JFqhJybCq6BHAMbhtxZghuze8yE9wApwbqyKhwexavjE6vhoGrEA61",
  "key32": "2Ry7n2dCNb3meMv4MDMqynKwtBajp4RVxr1Yfm7eYCrrxAyKv8KXbyhqTyn68wrm8BBtmMz3Eem9BhdiJbHuGWFi",
  "key33": "42Pt9n5fEjxu7j8Mm3fL2TDFaZZF33ix96JqXkhQLtx1bq4dgFHitx17iMdyrrBN1rA2KbmkkSSmb83gzKee1CKV",
  "key34": "639p2RKRX1PKBS8G19hRkJ2DBRzRtVGhwJUTYsidBi7p6HnKfBakFKp7aAtij9KkVvUcFt1NUtZuwuV7wvDDP6Sw",
  "key35": "5BvMkV9HuNYpQCjEgSQ7dxMy9ia9PbyuDVjsESq6rWVKSe6RzgYmvh33UtvNWQ4ZjCDdVUmefDvYVuMsr1UdMS79",
  "key36": "2D5m8FcVeoe2J6mbavhjWyTAx9Yd233bW5awj5sfxz53zUhTgdaA7J44A6pKENqVxKZhLJNqUojrJu4CkXfVFag9",
  "key37": "c4nymn9AukVe9p1dYSM3zFoe9DPLmHA7qeobmG1ktdufJJKiLVuD73z1dVwRd9YCirZZnaQVgcGtv7J5hz7G97p",
  "key38": "L4ZPU82rpYP6wArBQDm2t7zrHqkP26bPVapHQRbUxWz5VowDowEXJsH2QjcxiTnoLZDBiHegh2G7syxuJKckCKy",
  "key39": "58KVcDd9WnJvDRFvwgBFsKxxM7eLFTujGnAAkDK55mKDy4vfxHdX3xxXWeWYeA9TBb6r7YP9sE71QQH8WJ6Fuq9c",
  "key40": "5DYmbxfCYZEkUjiMsnGH19nZ15wdyeQbmy8aqhULuq417pohivfLc8q7kymUf9FmZkHbztgdwwDfH893mF23LRhR",
  "key41": "5f5HmoamRNHhGumdSqxoUtVoELPNKc341VRPYEV9JCUY15HbH1ogfo92gvzcYAjtp1EARy6C6KgRozEgcYyxWdKu",
  "key42": "2wmcr4RVMtqAgmknQXLkwnBfevBW7N1dokieMRYipf3EZsoiM9Rf6wZ4XejmresHAMeCGd2dzeTkyxkzBUPTWknq",
  "key43": "4Tx6hhfAQqr6sMUzFWuSsyyyVJ1DugHK6mgXUj3kdLKXkEnNt6nQSzrywwYpcvgB4WR973McaPSrYY1e8u9Wq61m",
  "key44": "gKkiVr22MVBcdngcu6poSr9FBrVFiDwgemKJxopsZTR19T2AQwGYsXSyTAyYRsGGJbdNy3acWWuqxsjH2PAikSV"
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
