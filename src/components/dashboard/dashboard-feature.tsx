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
    "2npHMRuhukps15r9vGSmEKgjEFLqqTfne1yoVohAET4DaeHWHD51oitVFzXSXP2uWrqyyP5vSSzBZeA9uQFy9c5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4MKDFRNczVw2uPjCBzY61xoRuwzjz24VasCfsVBBheCZCqUpxKpkBx3R4vfBNPwbTySR2ddtDtXT5pHS3x8QtE",
  "key1": "5tz2HrD6Wn4J11tYD5n8TXHvuAa9dNCmNpzcUJW4rM9bUmFhqspKeLfudxwnfGoWTszWoibmrU3HHwexXPh6apf7",
  "key2": "2egbztLcGGTMYKrq85GXo2XTvRKgwAho5cwcQWPHzaPwhechu3jdS9HZmPgdndCCmqPkQbkXYbk4M1vxdNUkMzX4",
  "key3": "3Gtuj9kQaepeX81c7XUNZhKG6BttKxFWMPa6qVyNyM5Qj5iz3giipdA6nDL5PGEngPcb1zjRVAuWMdx6ukxELNY4",
  "key4": "2CfYYCkvvaHHsEZr5YELTao4ZWT6uaJx3ZXhNcsQvAS69i9G7UDzcYUqBGFdULEG67PoLEftL1Hf1EDVj9Zcb8hD",
  "key5": "4x7mu9msx8JNGPyBafLGfmhX2ZfhMtCbwvF8WMQ1Lqmsf5qs88r8MgcSXwquR5sv9SdXAwpSdyj2MZnh3wFGeVBX",
  "key6": "cRKv4gyKG8Ewj6CzPSj12YyYLNK3D96aJiRp3DYXGYqKFAWShU8k8RoDs12PfciknjaR9x3THc1y2Qwr6aCJtTc",
  "key7": "5yhDLtpwzSPXVXREiAsP779dDKNVo1QV5rD3jiK8yF9JXVTYokkNYR6sYJqK7wn5smo5f5iqaci5EENtP82zpZjz",
  "key8": "fC7cPhxMN8uhXWW4nfEq6iP26BUzQTuE9SsoKcLA7CYXSLGtsUeZysFZFAohyw13cMVd3wmEDTNNmz71McADm5Y",
  "key9": "63JmtJeLPervy1Yi98myyhL5g9anKJ5VMcpxXA1EshR8xf6bPKmaiNFZQZSzs5vUJC2cp3JrRu6kc9KuRCca65EW",
  "key10": "vWoeqZy4R3GtBSAhJe2bqmqTF1BEhgrrwWF27Ep24nYhAYVQoHHM4Kp7mSW4FATKMyWQ296wHD36Uj6HrPwUuuv",
  "key11": "4u7GYtufQFgUQGa4GAxJXvJ5htLgipyd3eLsNBFEJwrdoBXn8yaF3VtnJuJ7iqZeuToZruc7mR4NMssUJVbLp9VX",
  "key12": "518jRXAXcMh8C57Hmux2DFgJzhvi7iH48ZzugW4ArNyCzZeaot9nqmNmHCBvGrAcs12aXMTGoRi8cNu8NnjDrsyb",
  "key13": "3GoGzYGpbrjCsefW3X1DXjpi5y1H474drjC5suPtNDAdhy8hzzsKw2L5yzLXdvnmnBeqnEPpJnZFYYwK8FMScCTH",
  "key14": "uyhwdgfYWmHNd2hVVi8Wm9EVdK3izqwh79Xc9eFLDSyv1dyNSLt6oQhruDjHJ3bPabrQhMKbXTKoBwcJMfFSx2m",
  "key15": "4WgxDeKu7H6RUZ4VMjsuN65CN6sxAVWeCKpHLD74iVzgWYvQF5iP3fk8oNYHytguf8hMwAGCKPdWLM4KVBKwiKfH",
  "key16": "T3aXyBHektVX74MSQtmM86gmoG9fVkej6Hzgoy9GxPcJUharRxMEnihVMHDngWfqLrdRedVZBwCVQqARVR9RnK6",
  "key17": "3XyYjufsr5UKiBAAs3Zu7ofc5aJfxPi5JR8dYhpJwR8rmm8qhnLy4nBdNLokZhCV1VV4jt2wcVbJPepr3h2gmJEb",
  "key18": "EASYEEw7q1NjWpZMdu8YAD24Etc3biFXPT5TyLka5f1fJQxwpfAEB2ZUfnZEBKqbNx9nonXX9gqfeerXRyWW29X",
  "key19": "2Gzd9SK3GP4YGVcuNAkK2SDJuzJoDvK7h5zALQqygtqv1LXJqnmiJyfPGwXqWf9u5GyM6DFHm6otep5fwT8jez6J",
  "key20": "4RQzA3MPqwABdFRQJGaku1FVujEc361fS18nad1iLkAt4mnjLDbsF7zemLEjC4k4ZJWEAY4rMXkjmK7pLABTnTeq",
  "key21": "2vjP62xs3auJvHPJHtmmAbQ2isS7Ua1Qcp4AnPjPkFknUxcGPhYU3KNC4j46NYVHjjQDznCjeCXrdNVNG6pfzABP",
  "key22": "31PhK6qikLU25cxEaYKWVniAQxm34Spd7uvp2DugVZq5uGyKg2A2pg4ygaXb6tY2SFbphjb7Nuicnqi3uQLjnnpw",
  "key23": "q9aSEKKmufh28arSZffJJ5M3r5MvShuRWEJv7oLXJ8wWXkqWBQqgt5RvzLMEh5x9Cy9aZJsoFDF4DXRBqMZQTt2",
  "key24": "4NFGUMhdqUz2wJL8BzdFPebp1SR5VTrYQHTBhLXZ4aZ8ENschcMvYhPKZKkJooPGRdXdd8PzJgmanPkuSVex6kSe",
  "key25": "2skCmmzzuHCUUENeTh8k7wnos2mCSDvP2p6RG3yc8ErXfS11uvXwegVyb5VRJtc7UtXz7FmtyvR91ZjRUVb8uEuM",
  "key26": "2kTYLSCrji8U4HuB4eVM57xaQgZ3dATjruMcLXK6ZNgVeaGVsQf7PwkuXR6NVeoEicbpWKvnS13NWkvXWDmPjCs1",
  "key27": "4k7tKb275QgcyEyVUQsU9gUZ9kfMkNgjPDCCzdeWgAyeBvsgY1SViwzhNh41XwzpiiSseNfRHU6EHDyFVhkzhY9z",
  "key28": "3JfvxztYrZgKkg9HQQRfPUhJ5g6kFN4LYVqyRb6uQxKsESMCJXorZzJkAW2qrN3BV8qN8tML4sM2F7iCMPT54RiZ",
  "key29": "3uF39u6wAfxiyUEUc5gFRxEKooe9CNTjVQuG4xskbHKSN6HKjUcd6HHbSooHLnK5m3FjDfxyukFtNEB5yvDuhjSW",
  "key30": "4CjZutpRtFA8F2f7eej9r9wyTBAX3ukF7Nxwfo2F1ApWWUoM3pNWpCjK5kgNQBxkL58JrWqLueHuQhw8zjHT6cha",
  "key31": "B8W2W9xkCjKDniCkusYfbku6fxqQBcbWNDDMpy7roZd29bxYG1ok6vF6TP9MskJfaFUXm6pfjF6aEXPcsVhv33a",
  "key32": "2wjQvNrjnXvfG4sjbg4ZqPSuJ9JuFZaczWPLj71pqV3Gc7HPCs2NdcwWRbLc6v7TZt8epUNRjYQBnRaDc6ymj2hD",
  "key33": "2ijV9vbzj67taRQjoBBq6jmuiEjGFg4d5bvDvgsNkLZ4NEW3rHSv3U5eTWeU6EM1625P7RD6Eyacnds5rEhJLq3y",
  "key34": "3JHck3oKDppyQChXq1xHXw9irYvHV9bAE2Wn4wdn842y9M3F3sTKQqM8Gzn3WB4KgTA4fjnFKGZ1km2zE5F38e1v",
  "key35": "HuzuSdZNUS6sUDCiHELT33WYeWgYrdZY9rXkB57rqxAzix7Qbp3b9t1udGexiHTzQ6mP8iquxwH3erJyQWaAdTA",
  "key36": "D6pscEuuH2HGqmd8Sfa9tusodSWLo5GeGYTNYGmvpgwvDpnt7j4VFzdhE5paH4XYJmH7N3KmCDxnWf4ptYCJCge",
  "key37": "2xGcV4zJgEjL6xhwUoF1XtYmZeQyGGaH99NCopLPrjexgaAetEUDtCjTnLep2KqMVXFCz3hAwm8UayqZzfSGHvek",
  "key38": "43tRpcaDhsLgqHtNBLDehwyaHPriYwA3xL9HhCYwGbKP8YwAtshz6qC6zxnP29zper35nK4DNWNc2cspdsuknSNw",
  "key39": "WsDm6FbSS8jeY7LKjnctn9LgMm25YNRbP37DNMuiQb8RaSwtppETWAAvjPz3omqCcrVSL52XU8pnNUfbw4ukih7",
  "key40": "mLQbFoPuTjgw5eGRQswoAhXPBnqNftbiBjYEFrnBGrdhHvCHTuMRuK3KDBgbjkmX9ea9k3cSzYpLQkwvyqbK5V1",
  "key41": "5UppJMKsEDWtvjyQgKF2VxmcnZ8SZuy7fWWXVcQXtpn1WAHxeoAngQsjqEiXzVk4vFhMVk8aDFD6UMJmnUVfsrRf",
  "key42": "57JG4h1nC23Lad2tBtnrCXRgKMjrGyF8bigrAexRkMbKNXXkFWAuL3u2pQFqbVhXCSDMSwB7iVegGMonSqS7iR5X",
  "key43": "66i6AiRqFLAFEbE36PoPWhvuFZRBimypjCbp3aXhXwXyPCTN8gs33iQ8yHZGPW3BZpA8WaZEVXF6nbW5YV4UX7Lg",
  "key44": "6LR4KkQEm5QvzSbsk9Mq3LdLgEDV7bG6frbi9zEdD7FLQGXBNkREi3FJT19qrtYXvnuSxfCG5Vu4oT9FUBMA94W",
  "key45": "4ffnBkT6fYumEgqA9jhh2T61EuNqvFkHB4YAmCyoTmLB8MeymAZERkgzjub9VqhPmFikdrcie2WWzShNL9GcyqyJ",
  "key46": "3Hkf99DsemCXsx52FpxV4VWT6DXe6S1kDpLgb8dBsYrTDa9mVeoAPyfYNygDqjHhf1nu2dp4efG7s8j1nxvMejr4"
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
