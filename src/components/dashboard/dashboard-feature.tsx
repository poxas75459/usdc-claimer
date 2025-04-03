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
    "36cKxj7jnvqHyCwWdHAGFpcYkXNELRnsxXGyXdRESbeiR8GUCTaCayzRadTyLs6C2x6FSjurMWMZsoBASZs7o9RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hGZMphk4CkqdgXiLvumyxHHXpm81ZrFzhoDQu2J6r2mcpn1QFxswpienRuaqeVsxNpmfBpDdXZucT5DJw6sAxy1",
  "key1": "4dMMvuBEJwBJG1Wmddx4WSPcqFVe2Gyv7xde6rMKPkZzQCztWriHysgB8BXqJnEhvnVZuoHFh9eCwAXhniyDcF5B",
  "key2": "47nSgr8vJtUimALGZeZ9FNSpfRocvpxUxRcXAoCQXeG6PJdUXSku1mFPza5zMjztNckM7muWQ8rW2Cm9uZ3befTJ",
  "key3": "4FJW9p9CGrh9csqRoP53gmREtKK5EXYRko9AMkkCWyDTLmSoSfs81nFUEKsfwcs37HDTdj8B9fEKWJsuQx5xDzP1",
  "key4": "QiroaCzpsTUWPS99xCmNhm5eCCDb3hQoo1oURdGWoLPWmU9G7ZbxkTHZin7V3fLjXLTAjT5Nkunu4Vq9TzTeNqM",
  "key5": "2NeueS1q4N6xnBqWPBnPE6KAayCyGGm5sLhiG83qdd8EdgsENTJBBvECmX3rpohgRbb83VNwyXphQejhTVKE5xk6",
  "key6": "5fnHMaP5AJ3VRSvJwRC2vzdByxdLBZcTCj7t4GbcQXc39xASCVQHg7PpepKDzGoTRXaYbkVCXKRRRdWszxJAnowD",
  "key7": "2opgu1mDu3Ftv6Jf6TnfQpW7czSd8FC1dMWvjpTLSsyS2ecJyyFZ8AhxPn9PTVfEoDVy2pqTFb2SDb9ZzMBLfoHK",
  "key8": "T4Z2i6xB9NSxXo6mnmjd5JyuwyCnueBbqTTiTGCWXpAzksYeT4fVjFZY4LEyXpf4RoSuL2oV3ppmdbvLDByfWgC",
  "key9": "VuGdvKdSuJCFhFWP7UAmTi1ivLZF341P8ygXyFm8xvZLksXvamKSEGGRJF4HVL1wn4zfXmrgy3ugbUsAaKMFsP2",
  "key10": "5fwD7usPexG1ZJiyuJFmvJ1krMnozYCoBj2kgz5wY8JASCTCs42VoYBxNx5TA5qtJ3U6rtWhUhdGqiK1C1kcpMmV",
  "key11": "3fxPzxrEDzrYL392dr1eZoCaqRDUmeVR1WZ2FYX69GmEFMHHYNT8uua9mAKcx7Q2Z7FmX2RdvVFk8jYuMmTQWd3N",
  "key12": "3LggVMBsFtw3QKobBrnT165Hyj1jwk9d846pRhvBYtCacmpX7aL6FHihkUhFYVwqua5xcFNvoBaudBDcfdZar1yk",
  "key13": "rQQs1gDucMKxLzq4MG9Zz1yT6JzJb9YBSA885U7BjUctP4RbZ5n6YvBhhKcA16aJ9yEwPSbUBoaF3rhBKxWukqF",
  "key14": "SJCzDj95DnoSxUsc8HN51YeoN5SNqCjkvD2qt8ZBXuGPHL8F9g9zHvajQvTShhNz6vz4RoLxXctFvFKDiyPmR87",
  "key15": "3jSimDbVc6o1ofxdfc793eW2vDrLeKmSXrJTStSVJGf961TpyVksKYv8CFndT1DteXUProkErUDqdhRHwCG9pWqg",
  "key16": "5oKX2v7LZAN5ztxs1wDsjoiRXem4XrbznHUyWCriLQS9x1Gd9gswzeXyU3oBhsVprU3noL8dvDk7dhq3nySnwPye",
  "key17": "27ATwMQQNHNh4vyqHdyEHFb7aKipKfdoGMxTRRuuqALgpBQihNaeFNMUuRSEzHSDjjMBbRUPdYjqU1zqFnXDJQcD",
  "key18": "5hHfcovMahBWqYJBxEr6HoHkToJ7uSDoAEsQmNninMu9fW8qJdhpvLZvSYMKTPsMDEVGe15Y4BmEqNjhBKQxRvaQ",
  "key19": "NGHwt6e7UgqkfaWTQYu2c8toLdhRvJu1AvRPmGmuzq7preP1yXWh1hAQRpgG1ZvoquNhtzNYYjjq15hQBkuUkEq",
  "key20": "2u63tXZNAaHm1NQx5y71k82w2feJXwYD223TqcWMqVJaz37sMcJnDAZVGuLriYhYLHh8gtCiVqcWxaj9iTFZ5Saj",
  "key21": "3MNd7NS67dpPp77p7uJwSkPLvSEK6w7U4sKzNL1yyRZE5WxE7HCyYgm2EGANd8BCtbMtHB3k9VgRM8SAQLXd1uen",
  "key22": "38npEjEJ9V3kJaWeejDEkRgKefzYcBGTEbDGgZqaAbdqYhtWPL3JsGbjaNKMrPuVYNp2vQ11ZUqafSc7CTooeLRB",
  "key23": "4wD4cdAebwi7NJ4NsDDftjGUDERrqSfaq2D1yXcUr52CJtz4p7SamPpScJArCTS4ueYnWqDy73PSEG9ySrGEmSCz",
  "key24": "3nZBBeX3Ff9WmA8oyRoL4EnX1CuRyD29fZ47QABdPzkxi82ykUmnDFvexFzJ3yHMcjBetiDSXK3UHWjUxzWqLwMT",
  "key25": "5of4TLHM2eYfVreuQCMBsTyBD8CvqsDPiZrwTkJsngkGjtkekXbKwfszw9n9Mv5kGLAd6y263LTymMfvahZ2Jakj",
  "key26": "3RtPShqkneVWrgCjrL8RLhq7WhcsPQnRx3AkmHLtWniyFGMCD32EwnjrdtwxfwsqXZnrWP5FxAs3AqtAZfMmvkpX",
  "key27": "3g98Kvp7gdHRM9anAwuvcjbjWJCd3hMpxAzQPFn8hEpbWrbvmarHrZQ9k4jdc2BC3f2s9HWmYiPfDoocRsMdxULE",
  "key28": "3qTcjZjDP96SNYTXk517wK6pDtP8kzgAbdHhLiFv51G4nejVn6HHo8T2fj4QmGse7r9NRz7QGvQeNJdb3Cvzv7J1",
  "key29": "4yRZZkrGv3HY7Xkmiur7UjhoT5X66bZVLPXP8N6R1kK7YwAdQYGLhJHW9wTuu2zYZ7xBD2kMoMGpYCojWAW2RcMj",
  "key30": "5noeyT1PyfxM155vvUfdtvKKTcnRGUa3wx8JWznZfFvg9dSELbqvEJjVH3n62ZojkwvTtRneqDCvcqvxcARwkcHD",
  "key31": "4AN43oRayGZb9jMofGsFnU35xnXtc5V5iHGzrEbttabznezyBPyynDyjU8yxYGXLxpPqhRRmdwcrobKtfzHDespb",
  "key32": "24VoXnnwqA8SkE67sk98aFTwZNK25zV4RXT9EPfYq7voU5GqtxqDHz6gQ2MsQsEeLQCP8Wb77ywgfThE7MBySQB7",
  "key33": "3PmJPNSvus52yTmMC4GLw2x5N3ghTcGvjaydvZpVukakoKv5wiCpTyw7DwtdhRceSM1tiexv7zULv8S3JM3CFC41",
  "key34": "4vzY2rrrRiAoUnQ23YxvBjCnmsLVMtiXWs2Dn9z7oaApSZfsa2pDnx8UY148oSY5MecD6wr9h1u5un94Gd4kohsd",
  "key35": "5mzFskRM878Fy8S7oLv8yqoPRX5K93vyTHV4nJ2dvnc9VftSnE4zBYLdrwcMWgCJoCGewMEayQedL1rr5j34nn4W",
  "key36": "4VxSrydx6956iWtN885WYsuKr43Fj4PeHT2F4gMa7U4vDurmDRUzpM2uymedtHC1Wj9Q4gfhQHyzBVVuVuULoLZu",
  "key37": "67NCKS47LkcgiVfcw9DTZMrEexVRvgMjBZh91aHoHqZMQmmHbvQP6MWsuopyBDw3ZG6WTTKsUj37Sgt94bg26EW7",
  "key38": "4ozVqTpuz611uwxnNy2QdfGb6pmvMyLaRw5q82H4G4BwZcHNUEYFVWmT5SH9YpMftha6dLXDV11WEvQYk2NSHy1h",
  "key39": "2YkQQaCy6M8kwq865vpNGXyesurFSZEhw7Ja2zZx87otye4xWEPDxwBfv8XeEFnZGTm95ay4x12k2exjjRAwmRc6",
  "key40": "3uE6awd1wcPSXbLRXFExQ42tqPzcjdsjWhtXT4tLNiNmKsDtA2Stn1yo9cpx5MbLhMYxLBgcVs2nhDgZ5NutAdmv",
  "key41": "3NJsTjEDDCHxfwXWi4bKpdUAAqWeX8y4hnGDhzX1HpseHrh3okiQQ7iPQiUuWjAkT1zXBEzZXZsvLBfGsZJVZhxH",
  "key42": "4wLxhGeDSp9DLCHZzcfnFr2xiY9g18paJeY2nsyzSCZZ6Fj3NdPGhcnUyVfHDx1PRyF6NYh3Gi8j3bADTDULF4i6",
  "key43": "4ZAovg5C9vy14nKAGjzYehLSPzEFj8zGwV1b4FeZ4cVGEC2FAVBMRCDVeS2y542QjSSAFmPQTQqF3N7e8A1dKs6V",
  "key44": "4EYxnmGJsiQwgKwCehEFF4F1FdZwgZZMJ9171AMBSLZ71NUQWRRWz3p5kRUAnp5pUeqfkXVW797GRLfih4utUGJ7",
  "key45": "5izVEoaBRxDJBaJuc8HWvWJCG1AoeSwK9KLvHuREeftaGfZSvXJ7aJ5SYacSqeZBeyDNWKQnbnBxdK6qimVB9PMv",
  "key46": "56YGqs1aSEZamp8SQ8Wu3Q5KbjWf4RSY47NWpSrvXXkXdDLrHBrzNxCvsDqM4MHeYdU3ep6U7qqLbUofT8bt1fMu",
  "key47": "4JEhEhpkWnEzEtrBR7Jm5uZ227FPWDiuFoDUzMvk3HXr5QnzV24jQvADkqVzpyNkL33dtTFewFryRhfKtkVDgPuL",
  "key48": "ZsAiowwZk8BamdLbPo66XXNXU6cnxMYJzJywqVugAJq6jNm6Kh69ZrP5H9ZBjPmiqWNW7VpoztGkJ2QaxtDXZeF",
  "key49": "3EV5t5W27XrAcU5GcpCsRs6rY5tAPfA77hQrT6k3hMFTuuZcDZniZb5JfKW3WWHEKsuajqz1TRnBmaRxKyBA5yhE"
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
