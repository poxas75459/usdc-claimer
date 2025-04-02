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
    "2DaLyrYVmtCKRqAbUhqJisCjBqaBNPcWxze9ihFUNue78tQmv4xDKKSmidgsy3khi3Q2PMEWcj7TRSBnuPyjpjkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aBpx1m8TRziHkJg6rHpBuz7V6qcipx1LMGCUddRWretYY9PR5bnaVKnvrZQcUg3SSAE1Zrbe6JB9YuEefzCmdxr",
  "key1": "SdqdpBBkRf1vtqsRiwbKp8Y5QhcXRw1hL8jis8LeF1F6QyFrvuHamjkNDppUcZ7TWHYpYocnRpFoQdbjt42w9bE",
  "key2": "3SrD3yzQNh46dWySz1An1HTdN5Y5NNFDDvGLLoo3vpyYVAi6iy4jFeD8ARYF2UXmt5uTp6e4GXVEq5N6gsB5Fn7S",
  "key3": "32bF7LwTZAZgE4VYzCuJ3zifxdiZ1CHK4GGdtD4GeMeVY7ds4PKe6T1sxRBFcqvBB3L5R1c9PeT2wWAFmH7jdZV3",
  "key4": "3bZJt5yLUcfTusqtQ3UWcYSMFRp4vrujVADLGYVzrk8Wk6Z3FDG1vbx1LAqDgXqQbx6ED2RQ719W6WZix8uqqV31",
  "key5": "3DxiNTkaeRq695EZnE8WWAci6iXBg9XDTP3NLvjcB8a55t7KNsr6YXSuzttiUv6MwtRmPVsUySt5JyZmUK2WeTvS",
  "key6": "bcvnU4vx8Hvezifddk5Ph274EuWerCM97BDS1Wwmvaj4xhht5XoAVvX4VcG72nE1yXd7jZbvLKtf21dnYhdyrLS",
  "key7": "2rwCkVBJG3aWrVhtygRMCM5RffoghWNW6txLAiAJVAvbyJcfo32Xzrye6C2fh9PgcuTnBM2KxFA9mUspYTW27FBU",
  "key8": "3o4osTz1cD6Ahyd7dXQLSBJTSvTbCvgYtTPVRpYYN7xVeTSv9fbFk42YaHm7kee9Q98sx25jmya7fGcKwyMr9ie6",
  "key9": "4pXdhZBrBkthfsE9FMDXivaYzxKKJegxF4TnR4LgGMVtR5HSwxthWydt7mWwt1AawjxpdCAjCouELvoogPyYLQYU",
  "key10": "57ZVp64KgMWvvFSxEY2GyZn5i8wsGMCceGyTBmRuSBDtagPZ7zu76VTiwHmmB9S4vBSNK19wGi3Z7n3Ge5LB5fd5",
  "key11": "4dcuasxLCp5bvr7FLmzVSqKgFYzwHnqTEXznJiRchu1BG8PTkj2wZP6bAv8JbBHGtzgQB9RfQw9TTNU1itr6Tc9",
  "key12": "4Wauhm1BkTxK9GFvk8jJUeKrGSCWEdi2Mj7F65JYbSbfEh3jdFjbh1k9wkBBwreqXcLE9L6k8GK6au4PLEscYX5W",
  "key13": "DvFBoHz2hmxS4zBQNvc9v6zyb9HtatGZMrggRuuDcLrHvWGqsjHbbMea5XEyuJW693373FQyGgGvBs6saGYxSrM",
  "key14": "3B64WhSV97KjMXKYiVK5kJEqkZnv3a8AfsyBDtTSJHnVH9eriDkUk2fxkPtJPjyV2wzuXnM7Qmt2qH1j1R16HAWX",
  "key15": "5w9tgNPmS1hM3nyGR9T2zyAYM3M6TPb8Yj6JjULJ4Le4CKWqddAVH41NKxcrqxEJ7AwwoojY7eRSj3a5tiz9QTG4",
  "key16": "2zUResEsjwYdAWMoCG5YmMDrLXuspqDqq3ZtD3S8TdwefBPtm7A61DLm93iaamLYvgbCEhPNVTLQEN3q9WShsrp3",
  "key17": "37pN2cefAKCstwBKokKFAaYgXnEn4D8DA9WcYCpeX8KvDE4S3BvmjWXdGRAuEurZwHagph6QfHC3JFet9RQyM74Q",
  "key18": "3kKwhyckA2ibaL9sj3bYsnKPoXhUoJa71nfKLq5jaJPN3XDNPKYC82z2VxeV8EvbjjwMNLfMS5iq72yuDUEPCs4w",
  "key19": "61TkKPLFroZgvDBQq9cfvZYj7ikiQ6rq7VuU9Q6fXcjXZAxit4MGdXNEtGsPKS2sqAAcqHNuP48vpCyAW4KJTy46",
  "key20": "4SodDgqrKbU5R2aXg7pxR9cu2muTncF73KQGnkUKUGo4Z1z13uqdEXWMtxXvLiDAc9QqyQCqfKou7rXDGPyYFBW",
  "key21": "47GLpd8DVyLH3z4kJmjsi5GqjFmK4fm16GVV8JFuFucrY7eFCGTPmouGsQodjwzGEF6JbNPoZoiU23jbJuutxtRG",
  "key22": "29AzrYf5t36mNwanGnDWZ2z1soesDWzp6HzCSpSURunwaDx4LPstyvE6UQH1SA94njCX9bfRaT8SdXsZAQqCYTZT",
  "key23": "Zanc8R97XgYJhBTk8RezEtszHY3rVqnw3fKCTrUpKdwh16R35fRZ3GbLCYh6dHhpctwbhXDKJBGhyG52RjMeESZ",
  "key24": "374q8dh1ny8CaKq3iJaHoNYtc14vnbfecsxUKwhCGFwgU8YgBdvgpjc7oFeeZXcwY8xqwFZLmr3H4x4PQpB7GTRt",
  "key25": "3Vd4YUWBDR2rzX7RxwFycTwBPcSgW1apDoHqNZjJa21JqkVeGMEh9r5ECYhTphuAc7ihLjXUdZk94brmyjAGmVrE",
  "key26": "3gmteXyqtsBE74GgZCCj6tPU5nzXALG6hP8t3UYPm27dwHefUu2k5oagiinECw3wFVi8KMSdsmCyqWeCkykqSVF8",
  "key27": "25dRT5FK6vXV3QDXhrXamfhvBw8ig8hZVMXF6QeeDe6yBY9KE71YntatDAYWGevW2LAn6GN7iJgUiotCcghnP8NH",
  "key28": "4snuHJ4fyeh46hppSSR3hfSu8K6FrJrvfyRG2FdadGwoQ9t55aWCVyVNtv3aYg8HMbXoVwuvZKtrtHfApZj9qEgC",
  "key29": "5cFAxmjdgAewgEHeZiwuyEr6i1uMdBtjRp4dTM7HUb9Po77y6bAcDKZiN6raNTMSzXF7yK85W6EYskjeVoYjZodB",
  "key30": "334d3mpNjyj8TB51qvn5SswQthkAac4CpT2CTgQDFBPDeH1SZbFDS9Fr6ski4BeQz5PoUtLo3igmxmD9r3P1xXH4",
  "key31": "ur9Yqww7hGQZsS67thVpFgPhWs8Y2DPR5KAbPLwHTmt7XjWTGUB9eopjeBV2ebocBpMo2ajZKUr285ZCH5SfBRh",
  "key32": "3TaAVfU3aBAKDdYT5k62UE71dA7P1oYkCSMp5BH3CFjRE7esQcGQQhbRzFVX7fWvNdYub7hqTy5RUF5mCFxuC6Ev",
  "key33": "5m7wUabHf2VeYCKuxjYJK73MT6rUrT87uieK734NrFNDZyXNgHbVk2kaaM2C8dBDDn67YJiRfzGdLwJXU4LERQCy",
  "key34": "5pY9o4jxEFFsMiwCU5vj6FfqXgjbpMXBxW5uGJyRH7QSdpwacpgWbmWJ4CwR6gRJq1zDNmZipp1WRuExafrMBS2c",
  "key35": "n3H6x6eruQXp3YWC8yeuRouoyDq78icbLV9v8FZWShyoZ4E8zBgpi7ds4HpEHQi4SFsdLCE3X1YojQHt7ftTuJM",
  "key36": "35wXVbSxSyTy7thxcFQ9AFa8m6hJcWcoz1ovcitUbthZzDHyKDTanbaVXU5qw9qfwTX7ie3EVhJXuxBSkX2HB1Br",
  "key37": "3aBa16MFhGJ5DTStDr2XkRVTm7i3JXXpoGkjHg9kxjjyoeaQmN96qe9n1AAizS7Wzg2vBz4Zxj5sgaqKMaWasaa3",
  "key38": "4rEi8UJTXJ859wnfqHESso335fXLj75jbPj2gugfCGrX8bepjMgrHZLbNZ7AEGeRAzqcpnj74s6EvAUDLFK9kqML",
  "key39": "21zcmaewQ8YWVPZ3ezMZN4YUhRMqwJSeTcGajoVq6AKq5XBADVG5Q3j8QoGwxp3Jxz3XfEYAPnPMa3AdwYArwQa7",
  "key40": "Kb2M4Cr6ubGSVXn1WyKYrUxLQMg5gCTtwibwQQ8STQV7sUQ2WrWs6UiV1Ks4s7gwAmS9wLk1iSMfH9wuET4A3cP",
  "key41": "6Yjhjz61mFwgrX6KneeuLQ69tcvFqruWZWwFtbtzPpDYv7Ebt3UdYnvrTz5NSq85bFfggZSEvqQzvsJmyTEAV6E",
  "key42": "4eqNUWMWLxQ3Zc3LwJQ2uaTBUxUmwGJaByVjmMMJiQQYQaPgk7vp5mJEF1eJhRVwSfKuyYpuxrQr9H56DX5nnZfz",
  "key43": "5F68tgEiyZzpm7rZ4a69r23hX59GGgASy3FDsZvz7X4xZZn3GedJvMfWtvrEGjiXg5PTpEKYvjmbptFDRbdV2dZF",
  "key44": "562DMJdqH46ZjcqhaUJBiB4gkFhiodppu827Ea4Avv7psXzr98PbdfKWee1HsHg28G2EhMc2yYvYLXAYXXgboabR",
  "key45": "5AyhZTEdzcifPPhqdnV6Ao8T4HmdppTh8g3RPLLD6BJgJxAgKDtMR3kPZ6tNorsEn9UcVfJT9sqfWRFUVwpb3u3q",
  "key46": "FN5XHAbb1BbH8vRAnXy3Vn5ZnZrUw8sGSG8yeNcKPsgLyERJShLkhfBttm1CKum2821VFh8VjBAm3eNfP57HgJ9",
  "key47": "4yXwDHgoTrva6BV9UxvzwCRSksCfGQxswUNdhtmV72FkLGUhyECufLBgaPoZv1CcFoxdhw7PmjtyZSXoGMUUsboR",
  "key48": "4BXepsXwBjri8ZaDiDqtWWMEKS7NLcw2LdiQu6b5Y62T1KdPiBFK4cHPBMZnvyhDcBVURaX2DVxLmB1JHfSbvc8q",
  "key49": "4oasWk64pSeWaFHp8L26G2b6uzDw3LxUt8Ajk4Tadk8y8RgJKJ2hF3XZmFMVezk7aJmuBGSo4b2xoZjbohHLpqho"
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
