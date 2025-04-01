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
    "5mUFxhUdENaEHHpPhb8CGB7gmUGzRiCMQqE7bzhXLWfqaqNPnUeinfBCMniDmoHuvd4H9mn29LCeuzYVyMvLbF3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ywYuMuTRCKs9qAbZi7jXxBDnKyH5cjWwZRq7bgVa2Xbwyrcw4tsScJsgcBBFhF4gNgGHMqEaP8AjYUmjrpY4GeL",
  "key1": "2WW2kAxxJKBTPCbZ5BfaVT8WJ2SciuNaGCSedY1zZu2v2q6rNev7yfjbLrAgtpSX5nBwqnLt86YaXh4xPFWgjdeC",
  "key2": "C8iXJCwLwcJfpJAgJ8j2o2QSA9Dho2vv2yqQi7cs7bdUgdDbYdhX2JFrm8NSNfA4GuBspDvFTi8d3BofUoDppYL",
  "key3": "2Lr4m5cDT7reyfxbRGoyBWb7zmMRjddtxx3nmGXZndL7o9kixkLk9cgYPyGfDrj6cr774fU1ERcJs4Ua4hme6upo",
  "key4": "2XpAL4aC6sUHkbmxKVfYUVZn4jfuF4V2Un3oH9rLCVrh4TGEm4iuy6r61vWxG9E2SJ4kRW6qL3F1nQrGfHQPQ83i",
  "key5": "C5ZGJAAjnUYrNKxpijxUiqrccxGNPeu1FSqw4noLJxkwm9rMdyvUNxMaX5W8Way2DvwpKk2Rxk6xnLN5HJvJ3Fn",
  "key6": "4HYsa3giUwuaFaJeJfkuBd1MRtSum9fW9upYNYyWtbmv5qZTHeFAhEZWdTQKFPfmcxuwPNYYCKVG5BmYVrsXVTDE",
  "key7": "5CxZQPVfWxFBFFwmznuSB5pahsFuQdjy8sRErHpEzMAHboV5RcZ3vYTFvTjMMg1VFxj8z519uTRzATF6zg8tfR5T",
  "key8": "3ZouUwd4WYnNdaVXHYM65yPTFG6L5zLyvT1Q2gwUqYhZRJqdazGfPDdSjjrUmwNVn6i6tYTuvUKwh15d3781stHj",
  "key9": "3d72hV1PLmhTfaguaWd2v1uyHnyKAQJbifAN2s6mcxoFQ51KxkjHKyqQ44av7APm8nnfQB5BXpX46rzBVMXSdvzL",
  "key10": "2zMLPJ8nWCHUAGYibpX8NdDGDNkxz4EqJ12u6WE65Y4U5hcBshHtVNRyos2M9DGZWwmL8EoSJhU9DHifmECkbTyX",
  "key11": "3XnxUmjpKKcDhZsq8WKZKABsWch3kYff5nuV12JYkLoYE7bLcCR4C4MmUxnQ6eoj6hsRNwuSJh8ZG1LSpniid3w3",
  "key12": "2WtaJZRFQk3gyz9deqE9b7qzpSMfTU9KfzeMz1ov17X9L61F8hTM2pXjY5V5tuWr4bnV3Ykng6xM6dTaenxpovxR",
  "key13": "ozNDBxDfjynkT4eFvUpwFhJU22SZqjLQc5wrooySoYQrKPuWgA8iatL5jbqBrUBd37witrUhnUYjcLJsB4aJdsX",
  "key14": "5XnhaJBmNxjZb86EsQs6yJMChfvV9fqziyMirRqpUkhX8oh83F6iCy2SwC91boWazcb6zr6QRLe542YBbViYEkmV",
  "key15": "5vV85gWgLXgRsTXncBXpQQinCP5M1o5Zh3rhpbh11YxKog9Gr3GwqRHSFLHHEHpKMVeY74ETYTJmvqywMw91DwXH",
  "key16": "4sZEpxgBWEE7FdtftBq214ouDtVTK1Nqwhw9xAwvJd2UKoSiLeUBz7ooafxMXcMme1fLjstdX2PRFU8ssQ1YNSYh",
  "key17": "4ejjacDpPyFZno1ENjF5Ya3GbWWpwvXBHCiAJ2nK69Vf1P79RpEyDwLkMHohRTpDhvs69FYnennKkhCbYK4cfesm",
  "key18": "zktcMy16nC1h7RgBGrFc2za2iqxMRC3owEgJ9iTaSm8eWJxVeTettfCJpGJQ2X1krvf86EMeFRMuBMUnwx6LjLq",
  "key19": "4Zn6xjZr5WcTHUCZq53448L4TmaWf77A1Lag1PrhXreRUJMfaJ4PNCXVw7sVP9AgfdvP9ZNLBXagzDKejmiKrZzD",
  "key20": "2ccR7L4cJAzdXs2WL8dy2rUUEq9wdv6qegvBb23feJR96iwpkvnbcJFBF6etmfr2A95EhPbezJtsruhuCT7JrrQh",
  "key21": "3SH3VwbEhaqPsMXSUdpRLMhuRNy5bVx6bmHNU8qqY4xnbKebSMMHosdXpqHbDGYfaANobmwybcsdcbDiikd2yGHa",
  "key22": "5jsygo3Us9HNegNeUoc2hgu9eRfcUNudFok1rygjuNkgCCJkGVVJCCnWfgva3drnhQXxjMq7ikf1szDjKUAHLt5s",
  "key23": "4jJrEcgvYqhTivGnUE1ouMV7mgP2WECP8frVmJDdKFZw8Mt9Xvmpjf5eqLnpzHFB47DQ6S5NmGkJWbYCnMJjwfw5",
  "key24": "2uSnyQEEteLuUsPsJwJG4N4dhGDnUhtvLDiej9ZhAc7kHiXwmbNqQpW1RLzWx4jn5NVRT3YmLBGRUPh2gcX7PCEk",
  "key25": "4uPKze9YdbL9sVVE6cJW6NtJvPqxVNt8o8mj7gBpvjtRnbytYCg762iA4nMC4DPgSgPDBNAiEy3fefu4WdHQQ6wg",
  "key26": "4YoF9q14qdEiyooDGGxEEN3fKEnpwHQGgWmcXvwQya4SBhXMqe7aLjwtgZ2iLmVdExRsqRToeBavsz5bw1CVtgrt",
  "key27": "4Yh9ivZUCQp89pnZXTstj3HHUwC4eN1zD9DoEXspbpVEbuAdwSpCenbTMMyRWTVSRLMum2ZR1tbv4HRc3nJhfKun",
  "key28": "5famKb2vmmFbULBaHD5vJyRFmE6YxXmTt4CY1MFSzhysUDtwdzQvuza15CF5cZqdBhkCqreX43G938nisaP6v2XS",
  "key29": "2ycUNdW8eXeybVxCc4VXGyXGBRazBBrZLVXbgtzuewo9FeCcU1CXmPqsdJpDHbpUiVVGMsmt3BYzT3gWCEq5LEuw",
  "key30": "44dpsVL6Poo31PdwCz5AExkdH1uxZFzK5KYbosHtVkPpd2nRyVsVdrPoDhj4ob7pAqTmEfWuapwXsHq3x681cYfg",
  "key31": "4LE3vyU39ZRcoxpEWMJ3aCiVUh97stx8mixGcENgTsK1QEUNJbwcrENUeC1AEE1Nowb8gWyqdvaA1RejNeHS6s8e",
  "key32": "59NVCgwhtAJEfJdVj6TPceV8zpmetm9q88xaojjQqqkcztu61daNoqgD9uT3rfiesfiTvrQcLWt6BqVMUK152eYW",
  "key33": "3za4kd5MXmUkcuoyxF5dMWr42ZLK3ev24e9AgASdmok3LxWiC5VPT96F8EPKh3k47wCKdX2M7SUeua4AYvQPvdUL",
  "key34": "2STxxLx4uZGBdmR3GFyy8HKpUyodp5FUoaoM9p3KdCwdF5iEU1s6bstWA2GuuCCswrrm8795vZWeuJA2isDW21Tx",
  "key35": "2TeJ6R67VGPkbxNVFhuwKaiBp8wnZZe52k8nFuxjBgYg2yR9TJzQY5dTBzWs8bGT8qCfzUGKCp5rFpm9XYvEHd4n",
  "key36": "4zkNU23wkQ4wAzLJZXwDo1CKXRAqGk3EsVnRDMevBcinnQ1gRz9rizJrTPQ9hZ7NeX6WMGJ5UmYxDN2DoGDNn6Lx",
  "key37": "55BPBeXbKJqDj3HWQ4HDpRKydNmDWNK6yz4jCbUAPBvS8BwRZsuKayYdTyzjryLhrA8CCLhkqkKPQcyZ5idmXcUF",
  "key38": "WJc8LBfqU5AiQWkh6tD8H5KEqVdtaRsV6jG9eNEtKhaNtfZ8dkHSuL7ANPtanYXYzMvYvo9aVk78nYaF2jCt28w"
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
