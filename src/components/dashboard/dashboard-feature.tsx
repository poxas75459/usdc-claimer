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
    "4nU6tfdnZWwuEjLAZPDPVGHr7wAbkdUFGENmogQGvYicV5eRL5CLeBzb5ykZL2XWnTrSS3uYWBXs5egNo7Hj66Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sp6oNrtzAj5Vh1QkSfr1L3wKvdc1G7QoR2unwEy6uvhaCKcjRp1BTAEoQGvs5zYHGg8ouT95iH4oGAJdCTDzobw",
  "key1": "3tU2yCDbet6Ch3JN99umFr4pSr9eYfh5KqQCXZT8T7zK5sAt864h5jiu3Qn1gnnUs6utnAVv9BrZqA43gbz4Zgv9",
  "key2": "zEpq3gx3gXJRDXMiwYvtxJ7afap4NqQT33YWqvkaQiiqRXi76gHBc7unriS9Ni2ctRiXZAcvsMDd7aeMpmbuije",
  "key3": "4VRg3BMkb344frKGQnEZ1e2AWpAj4mY3fent8zZxYXU2SQJAFFZi7GKRvufsJLnNHfy63qAPirtywdHFYCcSuqnY",
  "key4": "3E5uoYifbsDePRWwACn2E8xAXBTb7dSatFX6ASmdGDfkoHaSUe7vHhV2duVwxXJ2487QNygM7m7Hrtv88bPR2VPN",
  "key5": "4wBPq8Z2FaHHYfYpmWoC8VU6XCu1JCWnvTsnqwtBAWo8wdv5v9jMz1jb6usxCM9bBHLSxCWaqgPmmd27unu69VKD",
  "key6": "5hgxgPrbAa3SXGPTbCgLW7a7yYENGXGEkrapfj3rnENRugw3SuY5uAA9jwADfc4osor4F7zYUMtsHM4ZhLeA9e6t",
  "key7": "3jznZFykGCEE6GpvmkgHNsTfbJyCW2UsFsDTu2Rp27E1o7C2HWLhnDicLtygwBdj5nHYhdXzBbZokqoZqMsJshX8",
  "key8": "5P74hkemPyLGAvs9XAQooq6UXX2ErazPKMJE5npFFZ9sHTAM5dxWUPGBaJzXxAKhremk6urN1XrJmGhQCgY8Nve6",
  "key9": "4fcwKPRZmxq6pn3jbyGJeEC7ACzxvAzpajAYeCiB6sBYT9U7vXfpT4tR72CC7E5vkYvpAmxmiTjPLcWpXnRuZwTz",
  "key10": "5viGmWrowi4qZWHUx2zhe3mjL3WDMEWkktA3uvEgimDdecEG4LHPAUGxFu2HtAXKhA8FabDTmd7iWZo3Jj2FrDML",
  "key11": "2LRGvfKgxqykU5NYSehHcxtAwLEsoQGVKHf5uFnqcQVymD8Pow8heECMeeCzzm5L5a6uLoyE4f1HhYJyYSo21NUS",
  "key12": "4cFuCytVof6tKrANK673wD2xNWA5SAVmFpvNgCmd9iFFQ9sy2DkgrsZpYBj69RR8kvz4pRHw8cB25xd14mmm954T",
  "key13": "21ss9ZjGwWXv7T7dobmVq5BkWYm9AZ8tXjRWmn3FCDpqspwwtSrvBdDTBLf1JciVMuQTr6VDAgimGz3BKEUZMAE2",
  "key14": "3rJPRaVieXRq8AwPH2aCCDe4eGgrELY19aMR8f3nkC8mmqfHyekqQYqRZDMZMzWYR1KnB3joqGemCfDcGpBqhiVM",
  "key15": "3ot9KF2zaTajKU3puGmxQJPtEpEaVDC2kDWT5YPHshbZpTmrpvJ7Xt68QJCNMMuNsnvR7nbRtcBwBpep1YpJr9MX",
  "key16": "LsjEGPxYkQAPrhvKNz4tswWh8gLxAkNq6wg2wEa1AYMqUqgtjq4QGZGoH12XpuBUTF9UE2xczkWpBt7FGPYfvE5",
  "key17": "5m3SpcKNstv851e6wSrP6SsFEiUan6ARZKsnz7wzJbfZBiXFbqYYoJwC8nfX2HZsHcuGTtiYjEFYThkRspQk8dyb",
  "key18": "2bGf5Wz6UJtEPMJ3SrQ8hNVa5j6m9197WwgnydjB9sUsYCS6KB7ram7Quu2zGHKuyk7GhVunpAsjVg22KEfq19rk",
  "key19": "2uM5qyoGsy6CbeVQycVAKBgKHD6QfNcMvCX7qMWgDL3axhJkvcWpZmFwd8h3niDLdisKTA9rgtSFPpZ5TycQtqBZ",
  "key20": "1hc9T5X6ay5jLz9PakoEZYYpr6MNwueW48nNYtcbCh2yX2bH6dGuyQjP4SoJidH6Qn7zjb1XTGkQGSuthJWbBNy",
  "key21": "2F6pES4K2ukude5q4h367BcJ223x5HBrNRip88ZmzCY1GzLyPeNCSq2TxbrNGrfM6aP2sUB48o8RXZSLffsvFNqn",
  "key22": "2YNQS4tFybcVCC29zj6btRMGZveQvDpTfCEUpStohxT5L1qJ7DvvaNyL7GVUtRZfvbhEEvUB7cdgExH3Am4Jbaju",
  "key23": "57631RGq7tKnJRkPJc16x9voFCHKjYdxYZRy7BzcKFBamJKUirHVsqgF7zADQBuZumWEHsENNABq2d874DZUET8P",
  "key24": "xyYS8xn6fgfasiJEPaNHRjYDYfjjEK5XWBfau8VQBJm5hYfWg3dNgKF7FmcaFFvVKiGhDtNyLddmggskP6hvLE6",
  "key25": "3kbaVWp2dMNKjEgth9UqzU36ZwWi5t6VGUfYvRcdrnjATFWyxEqi1vrQgcfhZcZcugxWbLpahHqQaPi1qL7tVb87",
  "key26": "3mwQYCDH4DkMLLxDCXSFmx1rhcUrrVYWXBNBU7LojwpGCxpm5dVaFpuYsmHR8qPRBJx4UWuLRHq5tR6wwb2zRsgm",
  "key27": "2k9FeJVF6F7EmuMhE8sEMDYTBGcPpx7WTfTZHufkVsNLbgTEysxKM4zLefamJVbbRLkJTu6oS2vNmrWc1HWtgwD3",
  "key28": "2B1Mbf4ZSFWAXAthuFWf7LEyuTgGrAFcJhWPW8WDuFNFZfXQbJnW4UwKndTMzyprGFqonnkeavYqfbab7trc6p1w",
  "key29": "5hcBHuhma2AkYPLqhBaL2nx93YLwpZa37kPfMAnUuv62CnDqLknK6TaJa1ofv6NFzsSHQZdjsAq5q7manmm9tSXp",
  "key30": "29aBRgGoGmejPBpDvU62dmvebesFhtjhKCpZtG2YTWu3TF4SToxQXpTSyvbeLxLBpFLLVs5KU7gvZ2dc2K9AhZnz",
  "key31": "3aSc7gJEa2DJtw4EamjDsk13QaEsqnuHFcmtegjJbZy36zJNd4Z95dupf64jskByUzEnskm5CzS1Ng9fso34fz3V",
  "key32": "5JQQkDmSQZUjNbpiSLxEQYtWZWmRkhcF2BcYkzdjKZvmGNPrzyTwZ6ti5Jm3Wyi5aAcoW9y8GT66DE6NSnpoqKLs",
  "key33": "36uwxgB5DZ1xCfuPHN61c2WaR9abmzrzXHoBsP94FFq7bHMc7qiL1Ssjtw7kdg76UuLQDWeGkm2je5LzonHtCtsz",
  "key34": "2YU3mWBWoMPLkQnTbTKT1uEU8wmsC8yB7d7Jnw5HS59oHmrCRs8h6tLh7oSuyQ5CHGdCT46AFb9mr41MkzVcQenv",
  "key35": "AUcdwM2tydcb7rQ2j68B4T3iUs24eNEBoL5zAoGk37EJ4KkxT1dwuphyXVNfL9VB1wbsrGpHadHWbJ3BPaK3i5C",
  "key36": "LvmP8M4Hrfmi8XpvdobJsqaYF7qfqVoksU1GgJUdQTybkNYN7J83Nf467gUm4rCDAVExdhxLbhfMvnvhDz1wk3U",
  "key37": "5J7u1D556zTRpW2FM7CJsSzcjBBvHqGWt11cyYiFGaYnvzDPoUWRQSKhAz7PMFaoS6MfodtamcYyQ3u2oZGwANu5",
  "key38": "4VWy8fpFqAwwC4uDkaP3YSy1UoPuhQoBk7WSUYPMWZQfSdX4RjJeiDeA7XqofF4iHDJLkLTSdwiK57X5dvEt6BWL",
  "key39": "FJyuwqdVqCQU9yaXTHRBYFjmz1SVnvgtEjrgX6onJandets7HzEKRvbbRTVqDDUrE7qHWo7BH688RscsKLAXk3t",
  "key40": "4zXVP3ZXVKqv8CFrpTe9XuHNqkDjbZrezgECJPJY1yTWHxZZimsJ6TRCUUnumxgzkgRfaxjGYz2LvAXLANYASy5R",
  "key41": "5sGAtKBhH6JWzY2UP7JteiWun7qTBn4rvmeWWgVRMN1tfq8YeaWGXa8dKHdYqj46tZkJUbjMDBxgHRKCL4WQrGDA",
  "key42": "399cur5i96E1YprPnrhyDPGVRyE2LAQd8emPvWyUS5eWxqZC8XTaV8FsBBZkcqrd86k8jVSjynGEDR4agViSTSH1",
  "key43": "3LGx8y9ojZ2BPtc1iyZDHxyvgnN2yKH6S8x65odR6997f3LvikcmnK3pZRzb8fuCtD2JYmzzpFwL6rvEKSR2BgWa",
  "key44": "4osMKSUvTiMmq9vf4kGeuQdVaiPQrjYNdAW62yBMLzQuMvYdL5QXzNHr1q5weWMGRFCPeqNCcwoA6GnQ5PxhwwPS"
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
