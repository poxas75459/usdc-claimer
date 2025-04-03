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
    "4jLMFcwZTFzignwe9YXAj9hgimLBz4gsJGAfuRdwVBZJGWgSsEV38171PBXEn17mcwpUMSVyeK83NytQZAB9wBSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKTuZyv1te8jxLu1RimPgSo7V3d6jCHbuurM6eGfUGkZ9JuwyNWM2ecBewVhByr3yUEYCayFBF4AgxpQffQNKne",
  "key1": "xu9eqzkXYQ2muMTt1Gm7yDVRcd3Rpbv1bJVqtj52AN2NeTsgnSAEL8KLeaBAAKawsQwdbNR4kU46JerPjh27jxc",
  "key2": "3fTwt35cZtJTvAyuzxUog16vPBVBzy3pMwE2krPGb8tETehCfZs2kXCPLk9p9pF65yVnwjLizQVKihVXHWN2ZJMf",
  "key3": "5Kix269CHqPGTuH3h2RbM9MP3Fa84keRvXTJotCH4KyVgeCDHeRnjadXoWxBihgnMu4BEvTFEUdrcHy3Vs48nAT3",
  "key4": "NrFWWzukBzJmE34sH52Ge8nS5ejVH8akQfbSnhWsFQpntiiKssFtydQ8ZVTstVwsGzoqSHmBcyuiDAqfLV4H7Zn",
  "key5": "4uxaP2mgNTyFyEDjUjRSJoh3qEw29JUM29dd2zWe2upuVNHCpy86TL5HdfhXNE26vvMjo9kThrkWCeWBq8e5Mq2G",
  "key6": "4gJ5vi1RAjoX2FFs4YrqqrLqQKrjgUidkB2Y525FmEuhBJFjc74KkKwCRXBVEUkuJdxBrUtHKLqhY9HX9JdSycRk",
  "key7": "3EcmQkgF2PRf7rgLMGxbuQzhj8swLYnYeMJyPGRjPjiSyoz27xQNSjDTZkCZoyLwJ7qHU85rtxoEqDPp3dprts7Z",
  "key8": "5xCQDosih3Huq1s2vtET3HbCGnG5LSKVxSiRrSg58et2Pm237N1VxcthZDokhzoZKruAD3d9uwKjAN7ThVwidcvc",
  "key9": "4WFP6gLvByCxpDnuhNZBo5KVYGzRJW5iVk8HYq3AvjVMYMexW8sDcrz6pSigiQmnpYiafNDWAXHFHNa79cN4q1Xe",
  "key10": "2KFDAb3Kqx2Vj6sTRrJXX4K6xAFD4DohLhUq4raBWpZ548pdtaKJYSJfmNViT7USy3aRvC7V6ZBN6zLXUprftdiP",
  "key11": "3bm5aRPc9VRoebReYuHJZ9Yuq4CcvysHnE68WqifMY6W8RYkyETHSVPUdJATSxsWgcJ8uu7Xv4dLcgqyCP3hFzLT",
  "key12": "3eu7gn4r2cbU5sjT4hKmfiShp8LQwCA21WQnt4JEj4bFHrekbLauE5zZbWegcNXvpVgn6YPEcnRDY4XdSFFMPcJL",
  "key13": "2FwFDndUrFrdtgkxaaduPbC1xMKaa6w35rqM7BzCHHKRcHLsk4ViFGjw4QtckPKEPvibVDKxiXTXGfu6tPCKHThy",
  "key14": "5PKPYtHSzyKxyHF9P9enMvB7ZTK5WSXJDA8K3sVs6wBs1gHg6v3i4DQg3q7fBbAXzv4LajsxARM4XWMsRRSi1pHv",
  "key15": "21gcgU51ntnUxdkxXAQPmok8YCYHvEQmghHPhT84VtcG1dwyKqMNBcR7NYoEyS3Xwwb6sxyJhS8T1J6M5tLdVBJM",
  "key16": "3ZhzGFjdvnowFnLQvLdGRTJdKzqdiF4N6VdSwCyVFaswiLqmSEYAnZgrZbWciYeUHn6zdgJjx8UBA46VbxbjwE3X",
  "key17": "4FTRwMn4fayc3NW1mQEJmcoc1pKViZeRUaqofn1uT8rV39ZJNC89Lre3CSP72bmyVMMHUcm9Qp26kk4nEwjTeND9",
  "key18": "2cg4LHUgM1wiU9pWYggaMQzQKQJHtw3NHh8G9fCobFPDtwqqTqfENFNZvvbnVHBfmMSy3F8gctz96jxHpmE2YMEJ",
  "key19": "5Qu8tuwLBYwR8edEFz2yaBg645Ns3XtxTuHnPsVZC7fhPRVwtSeskAJWEQuWpWnV8XCQVokoz2XKagTtc4jjrhLT",
  "key20": "5zAxoveyhHowacQMGP4b2q9HHGzLXNg4LgVUjVHwwtf15JYffnEaGKJSFRwHZ4yuntg5NapjxWTfuo4cXSCPzYno",
  "key21": "2o1pjRipnP85mrPm6RA1sxkkYwLmkYxmQGN3nwWWYXtCSrWXsruj1CRVJ2NfgA8Eg3TP4TFpQiwJE6FN96zDMCLp",
  "key22": "4CrrsCKMrXP4UVp7wYZSCqDmcK36opA1f3xq3w5gWbs3V6dvd5g5TLvQJnFECDwPEgD6qrZtnRBWt4CnhYq3AqPT",
  "key23": "2YGEKesxU3grZvmuRWkwGVMCvHcVvRxj3j6TTfdYQydH5PhRkLVCThPmvw127caxs78yR1VX3VXdmc1aVefsN9YC",
  "key24": "4jtgDexoQE7KVB9pmkvvS2HsV1z2iyihcj8uHMQzc8RA6K6nnA8PYrAuRjLqePxJJ3Syej1N1ekhsuM57VHjEUpd",
  "key25": "ufL7VviFQpXi2cxyhAUfoFL1QkGsh6mjzS4zQqUg8RmUEyPY1WyGuqAT8Unusufn7UDBGoP7Q8T2ABU1nfCvv7L",
  "key26": "2mwV2gHDRde7Z9BwA1T58vMnYvmm2UrhxRiC87Fww5uncfegPsZo4BV4kG2eKHENSNA5bknbxrsnZN9jqiyK4vtA",
  "key27": "5HDkCQn4mVuWDrhGavXoNwi6XKs9H6wGqE1uJyhWSPm8vYFwiyVRxtT1xA8ibKtmTEb9SiCsUzw7un2nmdUJsvTM",
  "key28": "bVBdJCQsNLVbPahFgtFjrMgbX9sCiTTANFpPKRAQfKZAhVMwM3jcFmZUwaPerqRDEcbUATLxMLFT3d4gw9fp7R6",
  "key29": "3JApbSKSp9H6pRnh6FVReR9o7ekwbGwRXEr8CGAp9pnDcPPNVmngUKfsnmVMdk6mSkeMutt5M6ebLzxVwFU32sH5",
  "key30": "2j8eo6skL8vojsAdm8FAMfFfc4Wss5N73f3QWYzAS2CzvdsXfAcDKthT5WiARheEbWNbwB4n4g2rX6uZCRXhpwkE",
  "key31": "3PMdau8Zbc5fTFADMH2q4kTsKyxQUsNwJJyGCWa9e787xepy3WgVuBimFwvYyeNoNys6aReLeHhQucG7Z56Q2f2S",
  "key32": "3apPSU5uLNSMuHHEFC65p3ueMR1iC6pX1bngi7w6DiPcg8aRL2QgZ68dvaUqX2TXy2NKiMghP1jH3foY36hGHR6i",
  "key33": "3z2AmjqPZRwBo1T77k8Phytp8BUekqHdPoHpHt4GUWLffFfyRvFFJfTBuXQ3GKjdyd9adXN7bd76A44eSogyJitz",
  "key34": "5ktRG64vmHZBMEUvWWqUMEdTkpZ7JHmMi1QpEG79jYdLXFbBsz52szUrcZEQ2D8ZAgQKVBDdX3ghoRPYadZD8Y8s",
  "key35": "5Se3mziGtkm23RgCSwQniULnaCBiwY1UcJXERqMw7HUj9zRG9HT6ueX2wQQd4PmetbZq7SUjajEw1ryZfvPwf9qC",
  "key36": "fqavpiSL9Apfc6yiQbP78468nnzbmL1UoyPJ2HH5vC4EiX5A1qzGkhMB7sLs4j6b1W9UrsbZnbYko3Dd7WrNzyo",
  "key37": "2Zg5A7ypmmnSb2txhyHykiYwf47u8mHirNsvHz4xs2TBPz92y73zCb9vcG2Nux9GpMF4c3aah2JYr8ejCXNwwHP",
  "key38": "2SUEMvkB2NjCvhDYcLDCtep2aXZn5cPA6VApwaqoyoppZ1GQoRDhnFgoHERCpVnkea5PFcbGnva6Y6SMnbmxKERt",
  "key39": "5tQMB7TVSubvGXR34cErGzhdSSZFFs1hwJv4n4eUqiBe3ZGSTi3zJWpm7p3Uk9KBd3PFVPgBBhytPcFHdY8WgDGm",
  "key40": "4VF7gZLjo62mtYPLbU8zfTLegAjBjN23cWX8v1SZDR7Sp5ZWrSDZNbeP7WG5viqLXoKWLdT3aFDJzzttjj57qfW4",
  "key41": "34yxcgjYTVdAJYza7QVt7HXH4Pj3ouCqdUckLRhjXsfkjmxSijBz7wbQaKcbCeid9KstV2BjSr9X21Z8GA9WJUbC",
  "key42": "33eKAq8PDivyiA7xyo2v3kd7tpQAqkvotsAPfjdq6r546y6SSmzNBBD3dhpjYHHWti6YpqC3FBHWCjL3FiLBuXdM",
  "key43": "5z8PSujxCaffEaavBq67jcjXNCRQPRTnK7kLrc5AAS14Kh3GfLtyCrjqcaQpbZqmAMYwwttVLzHkfRFckCv9izN2",
  "key44": "3YmcB1JbQRAnHQv3odaub5W5XnrUzGTsxDVDTgdBWRAXJuDphhKACYwEAGkmqvRvHUH1e4uDZydajzSLFSrCuM8z",
  "key45": "4WLUxC1Jnmnmf4KAWRqcbxYLkw5WCEkgvHbtJwbir2oPtW6iswH74RS4BN6s4NkprsJ1Ffivpzbn9ncZ2naw3f6R",
  "key46": "4uYNLB5MZCWKQX1puKHM7rsEu5aCjitVNw2d9FYwVdSWy8JkeLWZB3uSW5gMcweL8f7csvQzdF6GyrL3JDRQQrif",
  "key47": "5qXmNax3NrxnF3eBSAg1bzSrTtdZzjia8srZXKiDFpezMeKFb3MNFJRZEtYcu4PkWmCEXRNhrHf6ssijdYsdc6Xz"
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
