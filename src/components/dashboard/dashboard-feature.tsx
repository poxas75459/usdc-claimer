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
    "58mj4ZNmMYDfDahWa3FxZCN1GorY99oxjdtT23SFc68GtiJtH9YE727vj8wmvdejDzEka1nMxSq4FsHSKVqZy9FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tedn3wEZD6QvYeaaJp3eFTxLPJv2rw22DiVR6kdtadRDivgMiQ4642YhWGJ1jAtebX27Lrv2nnNX8Kz3KPrTvDW",
  "key1": "5JxmX6mtwaaMj3ZXZzTXs4nfbqUgxBUJcPzsV7QiM4z7B8TGa7eVnGdVZiLYVUDuSnJ3NsKVm54gXd9QcFFf9AGh",
  "key2": "67oUDjvMyRoVrHEkPCRdHsPBnt6AMaxQkU2KtnEbx4twSz4nZ5mu318BeedPspREtQffJHSQJSAjWZWzWZb6byUd",
  "key3": "2ZPtx3DZCe8DCDZeXDWCmQ9CtaagQCxBk91pdTbAD53WPTCLXnASsWu3sJes8awi9vtGMs76JD8BwZZXY8MRbN2W",
  "key4": "2ctwSG1o8KFrfCyZvrtfBwV7f6eMUqUUq9Y1eiQMLgSHV1YpGBXjxfXmNm171UHBUukFVUswiasfzXuGw8Us6Zo9",
  "key5": "4Cw7ehGWCUBiLE5MaWicEv4RrpyRyxkzHDoM1MSevJEe1EstM36dPCrcUEVAveQ3iwrmP1N2H6J2Y4XGJzE4kjbb",
  "key6": "2WahBK44EWbMpQRxXB94Tv9iSCVbiPEzw1nKEAjFW1h6u8cGsxAdPffoSBs2fMV5zfAd6KLVMJX1j4DuWrtVaWwg",
  "key7": "59mwTu7ciNpk2FY4e8cuTvB1jxeCKPpx3ezFac2KekPy9vxcWwaW4uqDqwoomZSgNhhMpJgL1efbGQSgrrVyAzZs",
  "key8": "62z3DJChNAz5snhFyHvocVgdAwDTBDKDJJKUzWaqXgdUjqquYizD1tE5LF1nQhAPaEjUheNwWuXokBPLhBwcpojB",
  "key9": "2H7L5jSTBsKZm9zonmQiLDSvg95ajuNmskdDBLU2jzdwrGHCwQYWvE8FcRR5qdxjZgHhkxB5iGCSrD62WUZ3ipqm",
  "key10": "rGPB1FbQkRYCT4PSjc7opXGJsAK3FtoKKHNif33ZjLNLL12LdASpcs2vjcMWZz524V1P7We1qPACZ2CrftisW2p",
  "key11": "37pVkQ5XrfQdC6wyTx7jwWD9DeZdGijfSJ6tyimFCECRABwvvr1EnwhNtuvbixBhxs6zCcchXU6Q3Z2Gf68xpz86",
  "key12": "5biYtNMbEx5cFtPL5id62FgiqGENuNSXArHM4bg4y9sE5axAYuV92wDyKYJPWzzzY1SP9zCNucguYPB12ytG1SMW",
  "key13": "5RwMpijCK5vZzrcbLRro7xJKEbcJVtJ2GGqc5BRLFRbQmBMDFAr5Tx8fH3SKDPjeAwGoUN6bNGtpSqiVTV1YBzTD",
  "key14": "4EqkJUNvJLzcZiTiJcoRFemQ3EwKTjYqkSVQ6LU9aMJQCv8GQhJnHqgs7oHjNsa73Lk7bBB4A4Dp5CYiuNLwXLDr",
  "key15": "W6pRiQWoefx6JVTkEjfSB3P2RN5STeR81pqGeWC5giFJK9F9S5yuTVnZV6Ygk2kdrBTgqC4KeMkvYps7Yh2ShJW",
  "key16": "2XJZeeSChbDLctZpkvxhAs98gNS6siJRnkwdQAbXVpj9b1fwVke4N3hVVw3rfKWo8g4XvpGerzFm6MUVrF6kTHCc",
  "key17": "3Z568utaKrCRWF1FGJ5SehCbv2inKihehB4rttmJysjtx1rwz767HJUyTaBFKi5H1ov3ysLxfG7AWCuibFb9ETJN",
  "key18": "5AeHQKaNNziioK9dZSBPatpJMphmwX3Yg8k18mGiLWfSMW89eQUbmLdMB5yeGsjhvsaCcL4Kr4PU9ktr6DaUuwhb",
  "key19": "2W2VZEnLKp86cLTo3dafTT6S7Wq59CtR9DYwMS3U4a4cvB8XxA3fAj3HK5gJrojVSufJGPYXSqpvd9HoGBDCFT1d",
  "key20": "3uQyedNHBXsb6AF7KPC4cvZQ9KztfiiqPkcpFhKjMtxBeTy8JXRKwXtCWYUSB44q1BKC12pTLCMoY814YK7eq9E6",
  "key21": "5AimFDpqffkWdxwsnZxFTjvjZAgkQnezGn8LLdr6Ct6HEfHhiyZjCboCBj4xkfyPS3Jjba1UCoyfRJeiXnA4vU35",
  "key22": "3mxYBHAowpbK5BjsYb3mpXZ2ThE7rL7QYwmT8acrAuJCncJFahLUoBzikKsjCdvCjKFpjkM4sfZa8vHguwC6KH3t",
  "key23": "3Yvobi8p1xm46ZYS3edz2mxXNHvEnGUoPpwtLX6LuPDT19ojqFxx4n5YR1GTRs9qqGcu9UUBGCGCXVjfqwqktrAP",
  "key24": "3CzHzMmVGHPwSCH6wiUEt77V6yBCXDVJenR8UnfnfQZNXyXtWNY5Z1Qkwja3bVR2EmhGUG3BAot7k8Z8Nr1wU6Wu",
  "key25": "3YPyVVNntgE1ea5sxK2nJg2emWg9nX88ng1MReeL8X6owZSrqF2Xgjtr4naPLGA3mpPxwBQhLAmsqiFaRWnWACrK",
  "key26": "5FHzyexp2vjKdGLHiDAw5znm9svmvQa411c2n1yT28whJwRFbDMMJ8bdhuA81sYoA2NxSkLJgBZEkFoY17T5BxEm",
  "key27": "5Jh8igwjf2hio6G8mD9MPxnwSAxVJANRHNRJrDzUHA2ozgeV4YiUjNgN5UA6HKCoqymJGB8q9ueC7PLdnCePwF5b",
  "key28": "3a739wgEG9vzj6f4kEzZwS2KkWMoSoPSQmSX73woNsagyM6RUCUXNk97PN6LvLE331XAYuVvBPPH4zgd82XyYM5m",
  "key29": "4f3a8A1LoStGhbvDZW7i6aTZmEa99w22wu3FLBdPySiPPT5RKt4knnrx3gdG7U9PQWFqAZApWg1wgWwXXoCRQmeA",
  "key30": "5iP5Lja6xnrSiD253mT21nWyMz5jLiCXMLMwuYB1KEScXerqo1ARQqnhe7qQtxn96sQYB8LnxC4bUsjctL2AdnEQ",
  "key31": "55pkosAREXRXr5xvsWwLJfRonUrJne9qZW4CWz6zmRo8ASfLzGqvT2FbYQMGJ3HsnZoA8HQHCQfQTADnxrE24mgP",
  "key32": "4NhjtHjCJFWknvbR63d9icAXjbkmJGyh4svsU4yzRApCtd2LNu9h2ERuhmgrZHRfiX37y2o5e3jdf1dvr9GRXTmL",
  "key33": "4QERi1nJoyN47hhoF3RYjgQzwXiPLEAGm5m8GBGcSta7CK3WWCLxGTfxavkBm51wvfuPmwhZhKq4YffUwdChyFDB",
  "key34": "fs756CKa7X37VwJcfgcwuNAqYmdicktiPK2JLUU6DdmQVF257SoBFDW9kvpyVzwaFCTEdgAVZ4PiDhteD6Bkn5T",
  "key35": "2dhhJC76DbC4du2HjV6YCSXD4eD9yGjipASy2b3E2vVAGnispuGZF6mCx9GRbnpbVNipcJFvEGLSjMx6oqf2zEZo",
  "key36": "3ZbbiyJQt49jL4zXuAyckSCqarAgo7GhXutV4ansXGvscRrVVYdpfpWBkgzuKR5Yw1wYzcbyXUSKLPWvrBfhyJzj",
  "key37": "NJTFcM4jqWqmYaWKLPh9ZNNT4zPCm5gejQbVS49NXuS5w7GbUaQ2dVRZnVDWmBALweUft14Ue65PZAx4M5LuwUg",
  "key38": "mX4QFAtVop8F7MxKRns6EbGGA1xzkkFy31G2HcTsgmobgyhVV12XGeJFYAPQAcgQjUo6s5ekjQGweJCmBPMnFLR",
  "key39": "2wykUTrjPJdrfVZr6wXpWbzMKaivuYWSJmwNkgJryyzGrimKi3RdmzqnoDtmaF2HR9Dt4a1FgL2eeNkbGqViBW4u",
  "key40": "3fhMruWeJKKnV7X3itqFkU3n5275Z38XeK8LqwmBNTnsywBByWCcD6CF7NXgL8dVexDHUxH6UTS4zNgLa57oayfS"
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
