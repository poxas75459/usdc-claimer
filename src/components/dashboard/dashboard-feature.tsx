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
    "4xqk2symqSFV2vn9ZttCmht78pQiZPoipzbqG415Gwdn7yGS7LXTwcKB7EiX37MH3ZUCdqn3kPdKHMMqQ99uF4jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vgv9vXHjNDkLgLjP8Yf98kfKEhrsXAVg96sCU9x9onRpkgkfZXeR3S2KwdHu3ZX7gbswh3D1FJmWczatPMD4ZzK",
  "key1": "21sbvCSE1p1SFaYiu48WyiWKeLmBmsB92i3spUsffnTwoBpRfXJYtbjQK5D5H7jXHwJA5hRkZga4Mjw4iyUjtvKb",
  "key2": "5vMYTMbPxTdc5Q1armcxpwFVbqyi9z6Q93NYF8PjWXooiHx69MkXZhXUw9rfWMjzNxFFBKoER5sQ92dtmUkq7yWB",
  "key3": "337xM7Q1RCMpYNmbBBhmKHsJDTDdb7epJvVpkrybznfcAUkmCgu5oYP6ibgoXRDfvMXXofnULZsKaUoJimkPtFYK",
  "key4": "5oRWHwMhgk7jFpJZyRqCRF6zhGMjgWGRW7Umn2kw1ptasWu4rjWRJNst2QEohK72DbswQWvMDeqbaCeedERt3ose",
  "key5": "5shchgB9AgskuRhLdL7y39kQDrikMuySDWP2jLZHkrm1H5oBZEekt5bPi8WXUnXZmUV1CdBvLFJoUjQLveoLeGnR",
  "key6": "6upzDxgoRbd5X3UcDS4Sv2juqvwk5fy5Kf9f9ZTBUQCptsn7kPsuxuVZxGpN12dNrvuFixD2bjGZRurm29uiR7s",
  "key7": "34Fr1h15VDRe916m2ZjDySpvxrGjMTsbTAk81tynN5Jf5gAU3nCnmyMwTybRBGmFHYnjasQn113mXXgU9MTuzTim",
  "key8": "2uxt9ZEALCDBz72a111UfjJ75pbLpW8cQpRNWx3GEwAFxCg7xG7tzN6WE8FfhfkwWa4LWhdpBJAWeybpXEM4Gjim",
  "key9": "3CbU6HhJpYs6UBmXgeyArZAyUL5Gzfrsaumtzq3hxQ8FTZQctTPtK8Ux2vk6nwvW48qKJR8LYvnAgLWXoKJmersj",
  "key10": "31Ky9v8pW5Sr4qeE6dEJsUiqoffWtdET1BDDkVusjkS3cWc4b7HQ4vXeLAABHGC7TmSjmsiDqGJQu7TyrioQMLcw",
  "key11": "RsGPjhiWn4kEus8FDSTfWyHo5ZvqgzH1ErhyavB2bsbVgR6ZmDRktPfDHiKRCtgg2c9U5FEAYmBNgzY9rhD2wxK",
  "key12": "5ZNJb6GHV9CyXVtL61DT6dC8y3nihTpECNNNQV6qtHU3HU4PWYFqHimZtbVB7YC3EcnDKEtQNtT86SvYEtP9Mrwr",
  "key13": "5JcwHSy7u2XGkzqdJeouydpucFMvp99ZigLX6f1tMCZpegAD5gN9Qt6gSCDRk5uKQEjLNp2dmpj4gpSw7bdU9NAi",
  "key14": "589F9WNvhm5nf8tjMPiGEd2HZ6dfoMxJ1YF1AV8DbtqSk63uppEHm3FBg8CvWuwgP7fw4Y9X2bQwmwk3JgjA78y3",
  "key15": "4s3Hgo5ALdGpFdRhee3ehURvLAbZpGeGWzHH9EYWpQNjiMkPV3Rn66YioYTp8HrBzvtDkHCi8cSnecmAzeevpsAH",
  "key16": "4TdDX9o8YH7pBXo3Tos8hqPqwZnCEFbVLdT7ZWkRXtEAq3fXz1v6UHwLLubs4Q8kQzhEJHdgjBQkwGZB93yXw9c2",
  "key17": "4yN4rgKt9Uh1RjRE4huy539CXpytgX3fzankMhhRhTup7Nc9FBscXRPaBooDWA9A53EKSqxeTm757jfRyxEbH1qS",
  "key18": "eocbNPPZdqDkVBaXxQEHuiqzY4Aqyr9QURHe7QornVDH4tfyNnxM761svRdBNrmY2ALD4WKT9Z8eSvr6U3nLR4Z",
  "key19": "5UrJ9ynuFe7uvqvgHq1kXQ4XAANCJrxfC4X3726KEkZQnJNejDbaYtNg4kCMrFeJMyzqeXvPN7CQ1UXmG3fHyPYx",
  "key20": "57AK82uazRPAnwJAYMCSHVgW2jPpmmaBSJ2Z7mcdRCkA5fEMWJm2GC1JNmq6ZPG1Ag9wYabZ2AyLUB3aknxnZj6m",
  "key21": "5xuhDuaY4xg9NbenFt3g77bsjVrEvmwHHqs2ApWervxoQ4bA9ieUcHBUrZWfixF3Nef8woPBfmMxrNgrqhvWnynu",
  "key22": "4E44mh3wTK2gkVkiZeFMQXEPQoWfbQ5LRjkB8EngFVMWC7mXSpfZcAcRfky3cyoFdopBTjDBPHwLANURkd16TD7w",
  "key23": "2hspKMnoCprQenvafFyPz1VyMiK7Jd2J2q2kaC5ZybmwpGZWPzFTA5B4Sxzfiy7fiuHWBP2R1uXC453yF3zHS4GP",
  "key24": "3Zedtq7DqPEicsyztu3Y4Q2nTi6369uKg1LHDSPFC2z3Rqce1PEi4LaLfsYkqye4Bi73ijY9Z29bMtfV1ERjwyz2",
  "key25": "5PLkypmq6T1KuALU24ULsU1gn7ieG4WvQEVpRLQHoNzVcEj9UNXQQcLd5ufXc5Vs1F8XpQSvBNLVUd2GA92ZeN1a",
  "key26": "4KzbJaVUwqUCzA94nK51ys6jnmqjKuRbVtBdRcd61uM6P5Jtst9r9pWoWa9RbLAByYrYcBYHEqY3yAvpEvkp8y2m",
  "key27": "3UQ4LUNP5keMDrTyBwivSzdsiCAK7dQ5J6JHMrx1JD7GLcEqiX8XhzdAVw2N4f68W9mJoxPmCgP51HpbQbL3dWcr",
  "key28": "NMRZtBzin7np6jh4PCoBWcwRtMbRgqx3ir2Cv8Kwxtyk6wu8dp41m74qxB6JFpEXBGcY9iipyykPKJnkoWnmUys",
  "key29": "4cWkwt351jmAsgs2fKnudn5tFmNC3qokUNkFrsHobHrAVTpgYDWYyzMcZAaMYHuJArdUy5S4BouD6TjgKYeH5qVx",
  "key30": "AYpW52oC5NwPfkJN3e39u85DWHHjU7ECNGGucMnVHpuCSKPDDNdbC6ZCAPGjB4FBrqHaBci5Kf76NZMCqzcLhMy",
  "key31": "3sRwZnqCaKBthSF9j8FDmgfwYWJAiXousGxwz6yvjt9oUPouJBb1JPy5X4diScAN8GvyiRjdGerLpnBftSnCj2Vr",
  "key32": "4ysyuPAXTSZAjEptJRVrXyBNcs1tURLHFDJha5MFZB4eT5PSua2aF81Jdtu2mAnjffUBq6qrWYrtzh4XL3bwTTpz",
  "key33": "VVCGfAj3LefeK7JPbvfZGmiSNG8qSEDxQj73ZCWV913DkYMwmEFCs5rW5g6Rsp5xDNBfmqhFNBnDQT4JVbso6pn",
  "key34": "4cq3fCf2rGSvQXpUfp5vm6UhtcGYuL7BkY3AcACrQ1com8djJbycgQr7fK3SSa52kKmmsFkeTxBxvg4bcSmcmJ8a",
  "key35": "61T2Ap4UEZhmAWDbCqUo6cuVCBHsP7YVPrSw7bmGd6AbfKLn7VuB4PDCuBM23spUQ9JSGgDMJZS4E66ipPFmkwaL",
  "key36": "2NT6QEkKSQt7qvAnNS5KRsRz7aBD4MkBNNKuHuVCU6T6igt53RocieYsuxEXDBcTjniSVfdJ99WgAmf3U8CntiE4",
  "key37": "52antfnB9ZUVrNGjN3xmk93XAbckuzgahzMTdLKZz3sZtqaNzSSyAXkShch75oUPKAodRdpueznYEyiEYyZGXqRC",
  "key38": "5xQ8hWhgmoKi12LNcNi52Fb7hE2uvt3hGgCq4HdEoAScDwEXwH7xaCa33oQdAguT5eC9a321YFtMsbSpdfyWjWzJ"
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
