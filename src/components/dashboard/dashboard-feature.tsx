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
    "5oz1r1bzCvsJ7MTQE8xLKqpNnsmtSU77T2HDdhnEUCPnm6Kki1Q6xQMFjm5XgxqNTovZgRRwkqRPcZXDxETd2EKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYdToaaURY9bm17R2tmeE6fYuuQiPeXx91fvhjTxZLFRUvDSU1yJhH219UzS61qthUnbM821d5QYtTtBxGgW7wi",
  "key1": "eDWzMFGjNy6kD54CvLZjkcteEficNj8LQ7WTAxn9zQC1ykWPGJmgRfGJ2UNg7qYFfSz9JUZZ6egCaXbmLJBGq6r",
  "key2": "5XXv48G5PG53Y1GRYd1sCUZ1MRzJNcUCs7HkVwFX1s4zF9L3Xo17vWme4a88MahnbC5ABzWDVTfq5JpaUedskdCP",
  "key3": "41G41wEbu1Bi8Kyd9fZSF9NYdyA55wwSMiqGjRRueDhEqF8zFtbbFguBgFPVy7wheRDBfnHuo3FjBG6oqenk7C3h",
  "key4": "WcJJtqK6sXJDarnQCJQyP5b8mYyYQJJy6Hd5eeLW4Jq97T7TDgrz3UDaz1HjXGHG8vhAUR6afXQ31RnPtnrpqbv",
  "key5": "5xSm7rmscsoCrjpAzGvu6E8faChsKBKmbWwxPritzourZjXNmhqUMrduMZ8HCdW5gjwCy53WEs3dMQFFvJHdTJP4",
  "key6": "3C485VK4cyBCNynS1PCbCJwBQU2Y2epTbSFASmG4rULJ1nqTjprYvG8KKVYfkNV44FcucetRyCd2B1Lp9abeAiPd",
  "key7": "Pxhk9AcCBiYARqy3MLUgtE6EP152Yhpymyx2MzPdXCRTwE8Ttzb52a4RPJrpDXyc1BzTmgVw4pVk29Ss6y4EmNb",
  "key8": "2gxcXxyPmpZWBdqWw2ptypND8uWC1twkdLviMyE9XRFvi8NinjgGhVjNMS4XCG2uhDqGSyVPZ8chHHqRLw1mDFFP",
  "key9": "3cJFL2hXZDk8BE6Sqs3NShvLAkpfgfboLaZ2gwr9Xv422ZBURHhcQ5PZjmY74Bx49BVzWnqXCni3ACM4GtY19CYj",
  "key10": "4i52JjJgSxm91Mi1GnaAifHe6f73c9w4fHorAyaerMDc4n3bSY8LLS3ACdSUL9yoC4rBCa3grjfHztTNLFz72F4s",
  "key11": "4uxdFWzFDbif3YSxiGz4iUeb4Jz6jrCLBT6Z4q1vUQNhWBUDhBMKGCQ6PGKWo9iBwb69xzDLLEve9cUThecXXfZR",
  "key12": "3CEvjznDQgzdWpeV47SgVpUmhv9t7XrzpP8E19ZBz5248EmsrTL5KxyVgK5QNksagXPUPrCuaZBSY58WNGjFHEWB",
  "key13": "5bFV7ZcvMHKeGvnrZpM8kkLJL3v3oUbk3ZBNcC8TjZHE852d2mKfWoHvE8noNavHvEWZbWExCmNYWGDn7XEmtZge",
  "key14": "Ds5aivwuqCikJFju5q7UH41RdEKHy5JJ4ybviHvtbm4NZSHaagEv4LTnqWe11hNHf7Q3UMZhPKWAJa2ZJnAHnsc",
  "key15": "2CBk6cjyhotarAz1N6kEMbauDjmTd4BdWAEb4giMmUcgKjdejK5XaVSFgayUsSFj4vcZoCAvnGCzUrqyeaRg7vDK",
  "key16": "4VqaEpKwe5g9BRZhpmxnppkwt7MtQ9DsTRxVHMB8MoAnBA9nLFY3ARjDqRVB8s7G688Tpdvkr95JP7HYpYbCXH2N",
  "key17": "51rvTHVNq3vbZ1F1ZdNXTtBtc4ry889MaRkk5zGd3exU5WSsCdzmD6rkYJLXJuvqAov29yZM5xVeS9EueEhFnFzi",
  "key18": "2kGoD8q5NED526MUDmRDw7YunchjSSDAmgXa8cMDz34X4RNfqYRHYUJbvro9z2Rv2Yvbx5NJa2afSiRw57iy3i8A",
  "key19": "5mYiAHX6zPHwbxE6dq5FHpZeBLBQXDuVM17pn7XMi9w2Q34vXhau2nJEuum1H3i8yiRzC1x1mshU1yupAuNQEy3w",
  "key20": "2DuvjjHFyURCmJ3JkVjLTEgcnaZ59hSNjGxQPiAJgaTu8HhrgHCispXpVbfNksbxm4m4deVv9bYr5KKUhVxAvoEk",
  "key21": "4KcTMGtZdcDwtDjGZT8j6bCmK18Njpmmvx62pPZJj37eZSiY3B3SqH12RGEnB7h2yt5mVjMJD91uiSzhp9jxg5T1",
  "key22": "Q37dZyv3BZSgsg5tUm2FGpLVo7DHN9e2UuVWJeJAx941n9CpzsZ6hDjG8kvX1RLdLigezhtUYku2TVqyDw8Mdm6",
  "key23": "5DUG2ePygTnw69Y9ahEo5uA95fDGAknvkSMr55rPwejRsiAJyvDtzwaSijBP1Sug7yaSy6jqUsnX3oNeSV7mCJwW",
  "key24": "2ZACzgmZvE2wHQhp744ME5ddLsfCdzurKrV2S2SX4MtmLNQG4YA8kJgdGUw6CaBU8ih9ng1qTc316kCbeMNmnNc3",
  "key25": "4bMTptqE6HaebGjCZuyTvwrjiBWztFVRohmUNocaKRvApyxsHTHottJNQZwvJXhLeRyJR23V1PU7G2bUuvci8yk2",
  "key26": "4AuvTW6U875Mz1tpD6wHpP8hVDbZtBSCsq33HnKpvooqR7bmucwTWri1muiNtbXVeER2cYCvZ5T5c7TX6yq5c1sK",
  "key27": "5Bkwms9Yo6aLAYQupLNLgssyU4coxVEi3gG8pwKhyfnrtT1AAkKZe9uHzH2dXdKsPoNajpXWGTndB2FQkASg5Q39",
  "key28": "4Mfc41gv1fbm22RS8D1CB1vmgxTaap4iZnbhkfr3q71qU1rMsaGih6nrcGRuCsFAoyTFg4TxBoGDRNhKkrBNQBA8",
  "key29": "3LHHoQ9Gwcg6wvVGwNLRhLuRuwLuRSTH1RijX8KxHABWD5SNWMjYAQWo6cLtMYTR5PE95nr1fnUpzouXkQPi2u1Q",
  "key30": "5rr8TzuzBtNPzbvUM6Y2RVj15CykY9JDbJWXThCRDVAw8XnBRoKAoGwFFfHhertwZevFGDdExnWueAEDVjR8MTZo",
  "key31": "4x22GmTivQdEsVWggLdRVZRomjoQpQdj321HGwjCdBYpmjpMiEBF6gGdYpfP7RUf7VQe8VFmaJC2stD6upBpNJUb",
  "key32": "5QoJd2UmF26hd4jBdPsQyPtzxtChwCkedupgiz6zSvvUSWX3DNKsfkh1B9RAgLZDswT777RdzQh5ZxBwUBtm4b4g",
  "key33": "5R23PcTmimjFCTtAQhbcL2htfUz68ffB3QUk8e2WUFdPqosqT5S1eT5JkGYiCMijDgqiVZ68SyVov6kFnHj7oiqb",
  "key34": "RK6LmT2tqqhtJFZyGx9zbht11fL9fBX7vEf6DHo14rSr46aMyRc78HD5vDNQqVvRnBV21PGYMEJDEeGqp6wzW7Y",
  "key35": "qCv5FGfjrvfR1hqvU42jizvjT8XUVanCPJYQPcpjyVBW13F28h6Tu1BwQZKXsUXL1RSGHQc5woEdJUnK2sd5KP5",
  "key36": "3mWLJ7X18waZDcqivorUjnDxvMMGp4GYLCYqjAodqrgMLfEyiPbJyJbmYQ6y6wqXcqLoNHVpz5RfVKMtTux2eavc",
  "key37": "2EZf1DqKnVzNixJk8GC6aq6NvFEFvEUGxskun4GvMmsEquXr78eb8uF5scfQ88iy4Xtcj6r2F1gcvXxiFNdUs4Hr",
  "key38": "3r4iYethcaxr9kHbiVv91Kw5MusyU8pbHTCa2xwBVTA5FxLD5oqorMStQ8jGtjrZqZm6q6w7Jfgt3JmqUqQFCVki",
  "key39": "5v9g7Vt2xyzt8yuy37ucW4sdsxhkhsvrWC4FmgAwPAUJUVELmAYiUJNBWu4cMVyw2bq2TvYWMJS3ngD4zm3HYMxq",
  "key40": "2898ypbsjdkLFHSgbAKDuhL7Wc8cjhDeVQHPE9uRKvreQ9HSVgPJ8qzE2f6NkQtKmYLRVgFpy7Nt8vkCbdq4RhB9",
  "key41": "53RcCrLYZdJ3uaN1hK6jdPQDVoSATpwi2ckoe5ZGNEJfGWSjzmhiVKtTkCdhrhEa17f8HQWz1wbAZ3mSThRevyGR",
  "key42": "5qybjdvjvJjhGZhacE9ssUHCZ7Z2uGuuFJjTzTT5ti9gcJMtpGA5FfvMXhqNanYW2i8fKL3KPA8n2rcyVtT7imem",
  "key43": "3JiZMv2PqjiCe8hRmbJFkaC9tpNkpdQUFdXi3fHaMf5xSUbcafFsuDuUgoNwD5PAP2wwiabAoUmrZSyRShjtiNs6",
  "key44": "VbXr121MC53EGgA9JWcjHfmiMox5vKeNzqvgzZFsMeKraQKb4hV951KFrajM6LxyKtBM7kWTmPKeJdtevaD6JAF",
  "key45": "5oLgkG8yz89FCgK9Fc51xDgAwz9AceyaEkZsTTmj5wxLHPMRUPnEcoANGUtArme25ZEjDpLCPkT2QUbU9jYHiwPh",
  "key46": "3W3Luf8EqVgLwSNR6LaP2UxtRCywwt8W2GYtZTaRdLRDENEAJZMM8kccpkQrAXt6qgiNgNArXm7HxMgA2SoGaRVf",
  "key47": "Jcw9hVx9qjgUeedJbMb2Az7WD3hdkSXo4CqQjy32k5DmZGXgmsAx1hFg3Y9SPv7iwCg6N9W3MH5hG23bRAhivje"
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
