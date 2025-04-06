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
    "Q9fFXraLE9BgyiQ4saSyiFLEBP5Y52Gx8YCSvEXN98dJGPHmi6e6sbYjm2s6Y8HkPp4EzVnw3iWdRCXrEEsSib8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNbnWaNR6jHqxTxaVkgopJrdFsUSpCKodgp3gXZSNpSgnj9iPkfhh5BHY8aWGk457nFDVKdxY4te4Ayi5J19ZZz",
  "key1": "3TjMK1emSqt1XjSpgBAqoiRKHTTrRcFyEV8TVWhMxMT7dTgoW4Cjmp5oKMW3T6gytX1KCPYMPFxkebqvCT6Wpbbe",
  "key2": "5nHaHPrBC3movfLHUdaDDs4ngQ6oUZMZEK9cn6x62ynD3LqsSsufuLVqBVLYcPvfw3HpK18W9vbj2k63xefr5Cg3",
  "key3": "2FHa7kYMWMAjumRWzYc9Cc3LQfaEbiM9z95AGYjwFHKzqQpUKuKVqYgLmk9DEzcVYQTtJDvKxKn9WYmWxX7jKiMz",
  "key4": "5JXBnd9tqh54g9eWMMstndu7S2sXeEpWP186Af9xTHcFFaV1h9sAuqrKUw78b1s65YW6vMMuLuapUbW848VWs8qE",
  "key5": "5FsU9C6ByVeTKCbCZJyy9fU3rsEeiG2eM3ntGyS4tAT8dLzhqBtgmG5kWLVus684xif2SVbyhjVD6SLwn8JLYLmY",
  "key6": "4jXqiJvHjxH4uFo62FcQGuvuQtVmYdKAnXAzYGg3iQDTjgmqoj8pCFVWfL4ZS1ujqE9ThZywwsGnbZZBY9w76uaa",
  "key7": "mw6wkvux6asz2qTkQaxC3N2btfaivWyvsoR6FRzqrF3XUhAXgpB8izBCToDD2D66Avb2iAM6Vme2347LQdmba6i",
  "key8": "5ddMGNmPR1CZvXuxxSvpD6kviaHCJQ5gxVCFCxgcjaoD1Jy8WXycWuLt6jkEhE1DPEmJyWRmn9PfpV7oK5NA1Xwz",
  "key9": "3YPmZoJ8mf4GJrGr5vSk4gfrM1E7oAkLLGaikXYpWJQKcQTeNuhnq1GixdNqh42s3e2mzQT6FBR6ii24XedfRrHM",
  "key10": "2ojRLx82rjyMV3s7NWVY8kfyWSu1qsE6nB4dwjaQyL2uwzAPd7QjHf1ATDFWqs1jDqb9DNzSBJuSokuK3zX7rkoG",
  "key11": "AZqpVorE9ywUJuUCPCr7bKkjHsCe8EKpZW82evUyQn2M58vhjFpBnbNTGE7USchZkeCwUDvrZNULYoaKx8wrik5",
  "key12": "2Yxp45UQdKi3aTzMy3ERRF3sNAYssJs4pbBMWJ9tghZMtZPJwnCffgksrEGGwCLn2s64gmfrr798jXkG9C5xwSpL",
  "key13": "5smvrugPntg9ZB7YLqQG4Tw4ePNoNxE83GNxbUMmtad7mb1FfC1SB831miU7hKeFW85ZEqn4otn8UYpDzaSVLaBQ",
  "key14": "26Xo4KXxqfTcsj8QaCcWx3XCfr46XXxMXk68Swxq5ZMEgpHvaRsYjDxqtQBTMxjVo93uwsmZFKRTsLqzSKew7ZR7",
  "key15": "5cavgszRQ79uon3xCG41WML3F7esT3GKY5HBWyYL7LnsmL1VHis1Y9wcp3wVU8htRwgdV6AzGoi5GxgtK7Lzso8Z",
  "key16": "3Zz95oGtpEqTPD5zTA73hnbYnXmrjGAvq6CLjb8VM4KtGkzXoSHXubfuxC1q1skLWqp2neay4fSjUPwNg3NP2qep",
  "key17": "5oeGAwPUeGpkfWyZzVg7VSj1w1VAgWV1enz6UAmPoNnY3j5bjqd6zbqJzLrrpESKC7caVpRQesGqcXZkAvrTHE54",
  "key18": "5fE2qf4Gwza8ox8ouJ9dAaqvmTRiyaaVBgoKmfHUTwfDqDQkFb2vaLq52PEweoZ2HS1c83HiPfG4DauM5fsLiNjT",
  "key19": "4ahncjXSsX2aajgyKq3X8Xkoc86u9e1jz27w3FLXbeEdmD4fL9K3LGjPzxvRWM2XvqUECNJW8Ez7fcRyGFes1rBC",
  "key20": "4F8kvFeU4HtZUv9zLLJeFMMD4mVoYB8yF9ViXwTt47eLFuHeorK7aJRMq5Lq2RT3zW4382ii1PXMGoWiNgXz7Ko7",
  "key21": "2q1BtYLmspWhvW87RZTVn5jFQDhsVVthJzi9MoEyWqQkaMpxWHtN95kCHDaDQvJY4s4Wrfh8xg2JTT6FcA88kZJ6",
  "key22": "MiBnLC3mYzvkvWQYGuDiQK9ZdFixujgzYMtZH6ik3PwcR4DtCDTx78QFufJ5sCXzx2muJCsjan8TNwCqJkhZbEC",
  "key23": "g8fQV3REQAHYKurT8GGZa4oRgPf3Ri6LyctpyLhgenxKrgARSjQ2xDGWGAbTFjRD4PnRJbnZdaAZnBU3sw5S9Hx",
  "key24": "3zzCTwNsJzBsmM9VcJzwK3a1ZSXtbR762rN5JbGTxrgbyx4cutN83AUGVec1Y8Nd2QWtfpXwmWoRZQZ3BxrNd76x",
  "key25": "31Ug8RW8RqBpjdrwyGp5DSqsCUnSBPsLzHpEWJwTirNNNJ3UewABCPHyqVQbgQQxEeu91aW5UcfWvS9Hdc86VjxZ",
  "key26": "2pdKakshWQ8pDauTVRX5PLvS31xyrny2VqqvDwCWnae6hv3HegYGq4511fv59hPptt7D8dqLoRPa63wWfHN82hKv",
  "key27": "2sb6D7FtDhxVkobt4PLcKaY7VQcesUEZh7vMPCRQYMANAsgF3xSog6hWT8fVqyn5KmdeC2yhWMMntybjFwFg26X",
  "key28": "4WGVfw12JY4KGkfdaL6Hwo3kXZroih6m2PUysJdf3qbNb2b1naea4Wxvrxvb7i16S7H6NKENb9VZgzNkC6jdCCLp",
  "key29": "3zvDyuJJ5BU7iy11o1U5KCcFLAakkbaojaQLwd51ywacbk59YoHffzXLv6yE35vp8Rm61CiU1nM8xAtF4Wfnc4ef",
  "key30": "4izanidWLMiZ4nAwNtF4YLdb32Kunv6dygHsDqAetiAW8J7T1jaHvApsfLtwyqwgY5PTyeu7vvRaS3FJoPWaVaWf",
  "key31": "2WJyRfg4nYfPXZdFmzDxvYsyrUp3FEJnwEqFA58H63q8oYd9LWRwcPR6WGtEuLb9P3JxLUnC3QWSp3VZPvZfA1Ro",
  "key32": "5aUbdNohYWrAw5b6AUFVdVQ64bRggvBhpiaxMar7Ld8N1Ss7AEyTMfNAN3nPmALR854yDrNK6DNcNrbj96MFKiGQ",
  "key33": "5FxdRbbf2wRzcmdyV3XxXPJGEUx56LjaPHTnAWXaVeKqgQJsQAU2tKZSF9uJP5RUtWS9MGaL5AJLPpEAEBnpSUJN",
  "key34": "4XNDYUMVPeUvqDgBkk7UaUGZ3sQpaSz3ZGCorzFQhG4LukpmKyCpqghe11b2BXSfjo19jwG87jaGe2kUS6qdNmX8",
  "key35": "4GhFpnoh14Ya6oxuuC9owjc615aeiooidhEkTPMTvwhpPhCsyK9JxTxQrXp5GCMp3zwgqoT4pRJ2cenz6gLC74MC",
  "key36": "3cySG2KRMBgjbHTLvqqjr5rRtCEjV1qWqyQ38XA95LQACNB9y5VZHRk7tRsNr7XTn2EmnEurc9S697TKzUoaDVpo",
  "key37": "3cWdB6w2vxwecdE2nXbMHyPFqKGfEu638UemcRME3or4RkBzyHrS7W5F4XdH2PfcJt1GWDHQQxnEc9scXFanx46t",
  "key38": "SKQ57GmtDYLVoTqvuhTf93y6nG7EYcuhwx4Vzvgixb4gAyixLXefHivQaTPLPkiqSnTTLp9kn5u55jVyWiYwr3z",
  "key39": "5vG1T2CEqCC69UcTfFj1iwB22LkhZHTMRMek54yZivEdViTBKXWnm8mi1mx8CTG1zvLdAkqoibVEYHJxYTaxkQnb",
  "key40": "rp5FdA8i9798W8DbYqc4rNw1bqyRKvd96mTG32V8ykNFkQ8XP4Wj6UTWi3gUWsWrr1UURUuYQKT88AZ55K3N4LN",
  "key41": "FFy3nXibD3eggAAzu14fVQbWhfcncPr7oQ8xka5hMdLDD1xbYHqqVQ5yKJsbxd1vB6MMfovynWHonvDzuP5pZF3",
  "key42": "45rTcRbbgtd43XPSUf2pSP8wLogfsq43369rLd9p91EyTrysRfwt2YG4uhQpSK4DEnpyWMyd7StpA5xAGjdDwR6u"
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
