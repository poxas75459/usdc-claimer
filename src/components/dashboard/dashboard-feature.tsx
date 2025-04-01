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
    "kC6ogGj64E5YxJ5FurSyv8GadRyLbPXiQA756f1ad83DkzijUMTV5Nd7KpsNEbxbBcwiMmR1gt41Hcqk4jmCUV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpLTwcncngDcfzsFeqxEuHnd74LxT8zL7J7j88oCZd319LotfHd7jNk9YdYznRB67Z6w8zd6EawTaNdLMc5sb1L",
  "key1": "5MB3EYqCuSnAW67JskPwS9wmbxizyfP75ChCFow6o4MwgjQGAAmwXvMg8U6APdNNH6BevyQsQUtU6LbTYCzRxK3F",
  "key2": "5H6Zn6HCXKYBjYCQaupPHhag68FQegvNN8kY81eG25Nq5oteJGmWp1HofsnHu1hDeSKDAS24SJNy5UMXR7hHbk99",
  "key3": "4vFQNVfkdpyyTZrU11WfQFCV1ZQMSXmChKyiu8zxz7L1FZ9cKoiut66rABgGq1dTrDhdWa6LLatz7e6DArDjJCHC",
  "key4": "6BVqrTmjAWZKx1onvLbBUzJF2KfBkAmXKCrSNvomd2Epyt8Q9CTZRLMpFuVY8Yw9Rm4YxkmBXPeRV4hqRafcp4i",
  "key5": "5xXRtc2998pRoSLbz5A3YXaRngAp1xVoLmx7Z1m5bFfCk3SZ6qg1ELheeUKcyL6QyfYdn46TKd16tcTNB1wFtpEe",
  "key6": "226Mi7MXJtDrfBDxZmrkyvUdW75gzU5GZk7dW8yH1qVPBEdSCynqMF7PBJ6Gd3MVeGwSz3rpi1uVxJwBcr52yaFi",
  "key7": "4V6xVB7wVy8f1CG9sqiA42aL1CC5dV8Pkdsj6NGFveiXhu9ZhRBEjXfkZb3qkXpSEtzJh6iKw1Bo2F9maDo8fiNE",
  "key8": "3FMuiV5ugJ3ovbbFca1eLnEJWRwCdiPHxZYa6SEKFcKfXbaAVLbviekrqAiAeEweirH3SrLQkidGXxHkuJ4BfNhg",
  "key9": "4mrCDfSz7PKyuvu6BXAmSoL9PBfEUTjBFSDTdQrKDXNdc5NCK4BDGfbWNEcLMqh35pAmC5XMwasaN2P7Ay3eRVP3",
  "key10": "2o7Wdj3nQAqYu5saxdKrpPxB7XTXdDqxF9hvw6xJH8pjTXmpSjo4bowoeaPTowXZBiMoeMY2R5BhzZNEBdq3c6QZ",
  "key11": "5TeC1AWFm5QrfM4fMweqMaY48pPScdKmqBeaz9tosnojAJaM4LiWMBXK2Hswn1Xjw6vG3g98rPgyjbGYHGyjuWV7",
  "key12": "2xMGjNbnEbN7HMGatjSK3f6ccaTSaJu4VzBZ9ChnLnBLAEhtGciehEk7Fu8XLy2tEHCxM2YtajLU4wz5WPYxyWAy",
  "key13": "3UB24Txbw42KKqeBo5dYP4UBA3NZvMjcShKkJ7Ry2ft3LjEszKMw9nVTbV9qacaWdLiebnpYvJPYyBBGSFNbMTZV",
  "key14": "4tSAM6kg5zpL4topq75y5u8yjrnZvdTdUZ4NipNu72YBLK5sugE6cyBsBQ4FbqdnhNv71kWGizZqKbWghNiRTENx",
  "key15": "2rRNnhur9UygB6zBuihnK4GsMSntFLy2K2DFi9RsuFNmio4S5ZkrRtcNT2iv3qsiskHbpzLodhTQ1wh7v3DGMeZq",
  "key16": "48GFMyFosmZGdDX8Hh6JP6G2TVA1kqrLYdLxLFNmoHVFG6xsuHjbfiUA5L3uDZdFLJVsVSwdUvr833gum6RU81hw",
  "key17": "tVUXpg3maBfDSpsx17Wr8X3Yq2tvirthibcCfQSFQhmd4We1JkHrg1WB8Qm9ZdjmMzNeSa21935xXgNpbs2Rmm9",
  "key18": "4NTyQKa8p9hzg6cdBZEk7fjwwhbC31oThLM6p6kWWpqLdiy979Kzai7ayauEg4ELJFS9BBYAkZofS4E9LxMnLBs4",
  "key19": "3gsy7dkqeLBiUMUK1jWFz6GNjBDWRB4iW6yJvwWj6YWpvdfGHLG2Exk9y2XjPKgdnjhrJidVDVUXHau4btZw3XJM",
  "key20": "iSocJbD9ZxffADoxJFGnnxtAWsZeg1BXkvg6hhKkjq2UJEJyoXaMXMQJaFU2ErPLTYKVMdEALp2BEZLQXMMmic8",
  "key21": "3b8B7dM1QqZefgXnEpYFAUJf5Gvok4vnV7BWoncV8rKk1DpmFXDVVA1vC3CaoKhoWaKN7DbBpSrTJiaZb97eUoSq",
  "key22": "NtstcK3uvVofYQYtY2NSsz4HnSpj64Zcy99SMgo3osuy9LJGNpoghUdVKCNaFPUr14Y3fbzugfr4GncZqrh6g1E",
  "key23": "2XptJYGUndo8u2uE7xoAstTyAKZ8PuPV1p3oyJqC7Dz9ii9EZKnkppHo3pCG6hdmMWM2fNhQMZ4Qu51gY6vcwi8k",
  "key24": "57zHVQdB5Vh6B3bEXeZFGJnthsx3tJLzES1q8nv16a8X4yKsoHGUBWrAH48G2qJ7B4MBNKVNkvQ7dX7UgdgJ4vEk",
  "key25": "2r4Eei5dDQFhvmfQwDiCQ63zhxzF37x7baxXaSmeyWvuHZg96GSdzcPKW4CQV2SvgMzXMH6YAoiMy1D8LjcJNRnn",
  "key26": "2JHncherZsVPHqvDKgrZrfks6yxyQ27bsKiqBGhDRHpZwJ67Etn1nXiPonumK7SnwuoJSzFn6HVZpbaAN3MatxiW",
  "key27": "4JXFCVXgMMYS4NRbkvT2uDqQb4s7ic4jE6JXqbmTav4DtWDcRt2tigyCwJexXbgCjVjKnjx8D58hCnqn22QLbnwJ",
  "key28": "3RQNtRurhGdbEGfknLEZjQMLePh4zYRPG12JyfvGbSr5k5A8NpZSBxnJ9fd6PzxECAuBXsEUbsHwD94heMULGMMH",
  "key29": "24bkFKE494BqpJJmikJkwVSdbpBtkkHvEWb9ytwyiMF6pF6GxLzNd5uK6oSoaqiK5KJ6cVpbhp53VnSVTXB1noYo",
  "key30": "24JLVbhCinxzdSArBLvz2tYy9pGzkV132VGR9wcBhjR2Qgm3Rv3ENifhmkDrX9yhhs2zP9djdtzS25xABHXBGEew",
  "key31": "2B35XaJQESkLtV5jZ3srXSCzH6S9Gkp1NdMniJQi2H1pcSzEtSYEeCwvfjD4w71NSJdKp5PQ5tv4W5PDfFxFSH71",
  "key32": "3w8MprBpx9TZrLKUYYKs4WwYesR1ifKQHoZpnEVULcAJ6dYWLghQYpsL3YnUnjGSnPPx2rzTgyHdUG4aCb6DyokU",
  "key33": "2MSrW6P65vM6HueXgJHykFJfS6DVKbdcFkGecmCNMDL5E5f6pspNVrq5oQ2NmLq1BNCghhqzm72ioHaBrwaRv3G9",
  "key34": "5MpRLojkUXjtYfaNvu4CgtbaanSpHdm5rVAtdFuDPZbdjVT24k3cEasvmsfqnoDo9EmSs5PVmF3MhpTfX4ZnxpcY",
  "key35": "5jRb5B3NGYKZpZgJNDVPz5fnMJGnvYa7a9bVyX9XpVoAEhbqCCU711125d5Z4qoDojesFd1bWab1ntEADhUJStdY",
  "key36": "3wXnW77q5JqVSAPaGmWotiGdzg8fBkvPE8HYrFfFBGeUareTqFH3pZqNBdYVi1c4TygZQUGYMcW6SpUo8GVQQ8TC",
  "key37": "3Xj3FVrsdL4oFDtzQ1pR6fJE4KdygaMpbDDrQzuxm4VoeHWWMsP75huhscAYUk4t3GmL5rdsyBSkJUgYtKtv9LoF",
  "key38": "XGbuBinpY62briK23jHdrfaWXSeWguVaZBzd5ho79ccqt5G3GEoqeVY7gq7XshQs8phQKAfUSiC6e5YFwJV2yQx",
  "key39": "5xyqR4XJzG9NPkzGLmWH81wxvsYQvJdYDQYek3QrCdrTHWsbWFt183147pg1M57QyyNrDkRfkyc5oYUS64Truqfi",
  "key40": "5MAxcsdEcpdTSBb24ZWdauDvhJy8dbiFook1Zfvk7BowssQ7Z1P1QXg4LuxztUCjJwFWH9VpwpzGspzt8yUn4E2k",
  "key41": "2vt7iRYxHyZajp8J34Aum3KbzwW3AcRRL2mYrFmNw4tnZUZifVfHwaDmjzFzDGrwbG3cwEy71ydqJVfWKWHn9QLT",
  "key42": "2HD6u56RpiGQhHTwfWQtcr2am4y4KhteBqy4tGpvRVBLmTnsH8bpoJTJZQQHBtPKvWikHZ1cZTXo61BpZmoyuQW",
  "key43": "4C4YJ5uGZbaVMhqhCGdyTpa4prAd4GH11SppWRsa9cExg4moKPYwtjP3ARNhfdFawScer9QgUyYPBPQUv3imiqWV",
  "key44": "51wmVryuXkTmuXrNAtyE3KSXeaCWKua42vH9uKVeRqo4saoLbfXUk64cgRB8CaexvQGqWBotrBWJUiGaEYUqBrF3",
  "key45": "2mA4nsFPW7emBc9xS9WuzgtoqWgPRCQ9XnYTz8FUhZ3krkaLkiVmc9qMDqa57vq86D7kxrQez2UHLdWR4Hn1WiTH",
  "key46": "368SFnaHJK9vXqQGRHNhcu8B75mdwMfEn91iNANxyWR1RsXsmUy3DzeA6wVdTZgy2bpvz8kSXGg3UTSvGxLMWnkn"
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
