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
    "3pmKEiHKJute74gUsUvqEsa9kyCbAnUi29KFZjwcT21KPVy76FC6kpaWwPkVHBEXD9p2X6SxCwtqCzZyJrv42o3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqz4R9e5r2RJVcrAhr9cGjzpZ1jbvyizAJabN1sQbjcgNLrXNTntt96SCSpEwfkFWDBnor3MHYKgWPvD91WD4Co",
  "key1": "36YfowNXa7vvzRctqquhtBCHDZBBq3mFH2eie83Bfwi957vwPUoz2W7HVtspzyNaLs2w84414bNFF42Ma6UGvpw2",
  "key2": "5hRpyWpW2JGBZg7QCsLyRAyeKfaw853z5Z5Yve6mszr2ktKYbUABXfwL1gboVt1qwH6noePJMQqn55YpzKjATNga",
  "key3": "4Wu7qC53JPG6hQwcWcAfBpvRjhspxjrdTL1sFtB9ghUWyRAKekqAxgbxfAHV5oPd91GyQyRnv1rUhD15yggPyaxk",
  "key4": "tnToyymtaXjkXTeEBQCpiZFdNbyX1sszc93DaRnjr3JsjEnJRTtcrx3CZUQKwbWicuJ6fbpumB2xVUpBjJHbE53",
  "key5": "4p8DakyGahAM4eezKjsu3gH9ypQAC7M7vM2i7H9hCWqKP3seUJ5D5K8KaNUr493xoxx4hk8vj5fhHb5zM5HquJHy",
  "key6": "3zHfvBJ8SsruagGfX3xpD8sUEtCovgcHrKeZGt2d4pbHg76gBP22fecw62p4x7kv6Zu7fCFaUphSbtCSGes86Zog",
  "key7": "AXoNH22HU4ar35xuKpXsBc7BxJe4F5sEmy5T5VCWYoHstspF83zoyyBgyJY171UyBMqWaudAhFBrSZvpsUxDF84",
  "key8": "3MQ8iEou3nWiKVNWj3C3G2mJe8oHY4s8fRsqgGdgJDZikPaPUA1CR5k2mPdVRaoDgoWbAmjUnWmP5nHfFKWGcKnY",
  "key9": "3PEQootojJ1yFyXTp1YRekrxKvFqAvXF94TEcLWDuF9BPgFnVLvFb1Nb9nSGZvZ4jh3nyVeZ8rrxxHPNXA8pLBFC",
  "key10": "ciSuV6bSDWwbKfHyn3wH81TC3D9rCFWodP4f2SjAADSpz365pGPkgtvHCDuappEMCM3N5t92zFuF6WaqBmFTUmN",
  "key11": "54UFjMdkYxnV99Dx38aJ24gDZMfKfCPJmp5AGuKU9JHBfz3hGNU4TCtR7sDn66RTQAqzb5yXrVjZn4FEsqodPMmH",
  "key12": "3n7ycx9H8vKcEcSmtD7NLhWRyfCQ6DKaubPMryw8wLtxHfjjRucE3QZ9stZBBqL88gKjk84wNrTab3g53SQavtqM",
  "key13": "4vkbtGrj6rg1FAzD26TozpYnyhfQ3DWKVrQJJKCWsVF5Fk5zZBzFeqfE8KYAxGTApYiXaJds1PaXZVnHn3VSp4mP",
  "key14": "4T7jJBCKKkLJkCC2J8ym6kRv3bghn7XngJvobaUQK1qzKPeriMYwV7TzczKBjCn2FzjyfhQusN9EpyPQWohbioHN",
  "key15": "5dwnCPsK8U2pcTqDaUyT6fuGkhZaD1QoMEGo8t616z5iaaNvAr9pLgoM2BxjvmSJgda6fmErVJ6CYLNKrn7Ze3Xb",
  "key16": "4H3iXYQ6kiQyPZ72iZMYMmEReQztHtZ6LLFwRtCkq7KMPNYnhHcqFrizyb3UgiALLxhfZkxwxzvKMKw5tZuVD7JQ",
  "key17": "5ACTiRSpxPiNujbQ5uhjNqh9Yq2BCgdhuH4vkNLhi7p687Pa8Y5g5W4EB5Qym5jMtTDb1dvifVbpnGzP1Nm5dLQs",
  "key18": "5sq68L8p8iBJ7A3timnqV9bDTQbz1JrwcS9By3HxuaVKQQw67My38fxgAmwH2Z7LTh2RtUWTzcqdEcj5EyitimF6",
  "key19": "oUrjAwaa6pWuKr98UCvCLsw82oBwzsukJC3sBun6RzyN77hudNMjguSpZ3Tt6FGmsoe2Nw3SuxfmyrPQ9mbBrR6",
  "key20": "3TTbcznqZFrTyQWcg2GBnfrCSDL1zD3qCo4bvngs1jNrRaAVFZKhW86NnTEAvJTZ4wnYnTD2F81JRxcux4k7FNiF",
  "key21": "Ad8MpAYgmkEszJA1nbgzmMWZrvVSkatCkcdio7WhmDK83beMqbLzesrM5ejLjzMnePnLxM2tmyCQZJb2etEXhBq",
  "key22": "3ZLL5AzvJKdpmQ2fwGs3S5xCAmJQwKJJYDJ896UbAu7bLQHBdtUBuQd3RHk1yPWn3MvSGdvferRCWXn2hQf7D56b",
  "key23": "5zN2M26Jq57bMPc5T3ARuN9RGG1inqadNu7vtQi6UuKpfjWMzsAoEfbe7hvhwJsmKnCBe9fAHwcwuPZrNs6kjiJ3",
  "key24": "2psd4MnfETxWG9goMpwUGj8p7ufimHuuM1CQ48Zu5hwLuXLRvcUsS6rNqywkD9Zak4qJGqef6LKCspeuVJqSK3cx",
  "key25": "3C9Qoo31Tknq1reWz73LBm7pHNRRkpocWKUz5Mxc77YCVm7hjMUFXbPhWfiHXvCcsoCrC7ZyjptJ4Uw2gYn4Ymsc",
  "key26": "qfKzwakP2XWuo3RPtA5mj2V9ucgywX3BXHR6SZFpCpq1jiiL7i861XNXW6RUFm7tPNvbm98zacFn1ZJnsA1C5eJ",
  "key27": "5ZMpr5nWZ7h1BCsMqBH7oRjX9JVGiwFonRnW6zCJqvhryGHrqfQnQ2emggKfVUxS9LV7ce1FadsFMz7eYAB2yDHV",
  "key28": "4c9L7TF2W4RqXt7DtR3wVNkcqFQXCAsLLGt6YJP6L78Dj45TS7NtmzuqVnLe8NCVtL5PtGW7qG2rUb9AKtim1NgW",
  "key29": "3tAgQPCE8inW8qCZGokn4kAAvNjUbCvaFThSReN6AkDpyFtuyDWvyz8RWwmmLbw1E3RaNUpdsZF2Y2xp9odXBtmS",
  "key30": "QZGZodarqnsuA9VgLyxoR6pt8ZDU6YUPAM3QZasER9S2gYZDP2cp9opLNbhMMpx3nL6bfrHqi1aLjATy4ob4mPp",
  "key31": "3EFaDhu4HzjzJZx9tG3MBTkVcGQNGUj1J7GLM16wg7bziwXHdLJExXLZeUa2i7qvJtnhDoLBwzpgCRKpNJiuJap2",
  "key32": "3XhTnQQnaTV9MSjLuGk8wLRz4kM3KV5cBEyPUGgwb4bJReFkrBXJn93NUWReW5F5DyUf33AuFrBYSUShEKamUTcy",
  "key33": "2NVNg6Vn9hmijUdPBCHUVoD8nxzFr5cE9g5ssa1TUHtWkg3tSSvbEbSgSUs6MtRYkVA2QuW8fdF61RmYeQ9Lzj5Y",
  "key34": "2xm38DXsAY3KjkDUF73gycEUUv8sVSGykW7yuGm7R1qM7JZmddFhvczQCBmAFNUgvLPJBeeKHxct9DCr2h5FXint",
  "key35": "3Uafo3N7pKmqJi9djMzNN5kEpqAVZb7fvHM4yvwPc8gMHBpnRnF9dkyYHY8EbYXt8C8ozgtpJDrEM87hkmRp5nY4",
  "key36": "2SE9zgBAPDGhf3CmUtC6aBjysmKxQXZJifMqmyohguXSKtymjDgY5obAUo5VUBFhZntc64nutQyH8cAFbq815VWg",
  "key37": "5bzMdDUjyd99rj4F67zYfXJPoWyfagNiMQz4Ae1pSs8UuHGVvVaRwxNxFYM9hsHR6AyLGr7j2k7i5NKeDy27ea8Y"
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
