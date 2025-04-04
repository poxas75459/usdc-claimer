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
    "e13jXMGL6Gze8V6d8Gvdz8VJLS8sysPE1rYp23mcSdwjA3RWyLQ6fujppQEUqCYbVKSVizEjNSjnHvpwxJeeTJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355rQc93Wv5nRfgTHuHTwLP6rynPvLrQiZttYef7JZhas9zizpN71PRy2ykHz4o9FVT7oFcPqLsUbCsJS2JtKJxY",
  "key1": "2TmSUwV8XM7PVC3PrJZHcqrgLtVGSnoqYsR8o7eLFzpFs9vWZRKVzEr718F538tGvnCW73wGyhtLrzf2mWF9YKLY",
  "key2": "5j1MBedazijKPVHNx42oA7A9irTmWaUSnQmv73RdvLMHRYLedQvVRqdG3Up8kLQ65opTMjn9sfcq5JdrFxpWQuNu",
  "key3": "8sauPre6YLmPuGCm59TC9VpVPs5QoPy97ykiabngcroLNeEPceUEFSuH7sztJvuWbTUys9b9GDX4C28QhnecCPf",
  "key4": "29BQfUVgvWPnXmgtC5WmxmNsoafR3Unmec7JCQ7mLibJBreK5tcEdBD7e66xENfGz1Lk9rQ5o3wnrQyZs2zDiQpZ",
  "key5": "5WFNZteedN5zV7p7FnoG4M83tFHLxhYx78vBHoWX9reGRp8RKjaMQwtPXqDX5xzP6gizXWjhji4AJTLiLnaShB3A",
  "key6": "5gVRn6tps7u1Ucx7xDrWrWHq2uVai8kVA28oKTNFB73ad9pFXnHe3g3jcj78YgHsqTPZjqZkUDktiKqnqcoBNFFb",
  "key7": "4srYnTNfYG6YsX3CyfU2fqpcfKpMLfKZutcMyJ9xvVL6ZNoNgNTxBhfrw7feJn7oEqUBeBmVFCLyJK3xNXT8SYyp",
  "key8": "36k7veqkhzHaC4oqwkUtDHq3KXjimyB5R2WyFKZhkYLXAyNx8q9QsyXRLg4suMv2DQUtmm3ed2QVpgbuKvqxKEEa",
  "key9": "2w91MJV5Eg6y6uVYYCqmtvoXEkFhDpzuZH3NvE6FcVJHx2gJxjub6xsi9zwJiGGvAdHq5sMKy62gA4z7FoYy3k3t",
  "key10": "62ey5qS6b2yFtF6EtZrkxtTvyxgwGVQvPmXcuU9FT5HKHWfbhC7QaJDGYoUxpdPva751AWweGHs9o6sRJsBrCfav",
  "key11": "2e6nESsnG6dxEKhQyyyRJ8XQi1xihxBN6eEaEbMcP8NuBGfwD63WGaqpAMxyUfPb8M5pj6hejqUm52GCBJcEKsGT",
  "key12": "3VcXDYhyTD7oJZvP9beMegi5w8tgTCia1VovJdZc8ZaRiRxBkHS9anReJuiyDJBCc71euvmewNHc7koCKJVF8HWc",
  "key13": "4Gc6CNqx5vfirChCjuGrrNFPpeH5gnmi5eqwHaQkFpYBZvcmDhdczyf3YYK1qsJZAtMaprzUYhZJSxY3fiWei8VY",
  "key14": "44v2Py2VcMud89F3sZM4G9161Dy7KcfKBQoT64wXZgNwM1kjyE9Pmzr43q1PNoU9WUqX6ZV6FkFZyftPcTWC1RDk",
  "key15": "2LCdnbgPAFo4w3zpMBZ7C2ZwH5xkxwadJG9touSCeJ8zqDFKubaMixXaJHRUpp7bHC8nXrQ9SFVRzRvhxWEEuAPk",
  "key16": "26MkjNrBWvCKjNs3ud1TU7N69Exbnui5Lk6iJTBiRJLvu1Rghu38FWrNYKfqgD5HFnbSpE6EdEhZD2M9kJkJW67a",
  "key17": "5ohH8runK5dVpCfBqUtX8AXDEatXXSbaQ9uf3kw6vZJV6a8AbFoiKqWau4sDy1H48qMwkVgR6MCKurcQEn4Rc5Dh",
  "key18": "ZCoCX3ZdC1Vj4DJUsn71wdSrXZ2fX9yyNNeNCh2WVurmDMWR3aCqE4Ghd6JA5RXmTVeDJY64CNmkxAUuAzbyR1Y",
  "key19": "3PRtjnZLXBULaFMwHBszUtS1qKtYL5wPVj99V88tg82zFzJi8xBZbe7gjGA9JeqXC7rS71XeWj2ztTAhzNx9tjHW",
  "key20": "5rLSWWYSbYGN6s596AFo54RNSVPoYto6pzVDyX1MywBA4xtvEY5xVPgd1e3HH6TgfwY6DbGQZsVsjS9kkywC3R2c",
  "key21": "2PZcvq3EGK5bwnfdwiyAhmjqimWz9xjWa3mSnuRVKyqr85nAGVQT9Q6h5MMpK1AajuBxYTJWnitzuj9pcZXzTnz7",
  "key22": "35kMH98WkAtCJNVecGHQGvznLXt1yfNSwGr3JxsgsnjBHERt7GYxE8XJPtUrRLsV1zMjLkd9YpBdKogTpGLD7XqB",
  "key23": "5SEU91Qoduj7jEW6gDqJEahrore1CuFXHSWF4fc8xvTXRXkaBBWgvpUYYBQ3zwzpQVHFa7ePhaosJfukU6XsWaUd",
  "key24": "mSqreTQgBBNfHxHej7RtXRnSFEii2MFsPvMkKEX3gvTuuBZyyNFgp2awA5LecC4Ecj9JSbqeTfCoPm6hiqLPUEy",
  "key25": "2G3SnofFzeBFDYEThdLibmPYRTLLvWq3HGRq3YS9FvGbjTKLMdFkenkY1D1Q3vrbkjFTE6H15XxsPSVU6heheapq",
  "key26": "41DVad9DuBE2Ut3gyZFpNLhBXhfdTScvdhVLKqnKWsDkMRRkZLzQu3PSMrL3QAgiCZzHVwGAD3Dh72jTaDvoAjq5",
  "key27": "fqWEJmgFrTE7j4Da2gRACrgkE2CfbKhQicNC5nwABtSAdbYduHbDE7BGJ1biw9Xmz1pEyfoaRxEH9cwGjbAvnDR",
  "key28": "djhsb7jVUoKkqm9wmckA2YSZRryuzzv7z5hva94vtsE4DKE1QtYeydJWU8QJngq5N4tuwczgHWpUxxNbZWgLW5v",
  "key29": "bop8vBub271q94JZ9rJQku7w9hFBVTrGhQkvWGg8HYcMtFoMqSjQAB43Sgk4SczRzPoFWxEqR8PHNQjpuojfr2J",
  "key30": "29VpeWSV8iLbZVtQ8LjXWWE4DBtUrMXD7bdgvHLet3Avbgsb2ym7e5s8AKP3RHV2yXvXw46TzgdhDF7Pi3fQxEzd",
  "key31": "5QLZxqGdQtTBHyKYfEvVP74bWRxfdwh1Ca2HXEiiUKd1y4DQforePaFVqMTfYKULgTJ7sdRZSBFnsoAngAU3C7ZB",
  "key32": "1WLMJrZ8PygLqQSS1kZrdhcqHBdiempZMBzJ5q6xivrVpdgovJUKjZNptPyjJbxoajzYGCnEippuYqpPTZb1JsX",
  "key33": "5YKXRhbjHg4DeLzoYUPKcamELSTs2w99n7AV3FXYPW5Bu1ge17XXyMuzppFeLkrimeR7Xnwry6hxK8kL7NYyfXqH",
  "key34": "ubsGmPLDvE2VGsjvqPnepKimNeNrtSwnWFmwmPYGEpSLA9WHEAKnbntyaQKhs4zkwdgUkyL2py7B6yWe5Bi6QS1",
  "key35": "2jFwoSuMNoE7kfer8D5efHa7UvE9qVQemeuitLn2utk4cYSMgqWNjhmDgaFiJgbfHWevd2QTP3ymaDvm1VMKEa6U",
  "key36": "3y1QwJGQr8ZjHkTLNV23w3qBnKdp6BzsEjTMXiPa4AYmPLKMyrKfyzbJKUo3rLwynV4xwTcgKbq4CCg4xdRtGhmz",
  "key37": "2yBWnhrLjSv8DP5ReeVKvFGPF9hHsULzuSZk5HGxcsdut2vwJJr4t1j74ASKxesVarwoKmjkhe1cxPbRRu6c1wRf",
  "key38": "63cNhsBDEeRQeszobcxexUM7Zmbia6mZYwMbyggqSRpmpeoSdH9nhfFRzfzELWtNBfk5dHHg3ZZ9ANaFzaFiSGnA",
  "key39": "3mRxPtGkumuRoT1uroDtBZUyhaPJgW1yKSLZS3VDesyYTvzrkkydU3NigNB4ia11dLKia47Ym1Pw5yRFNcptXAWn",
  "key40": "i8qvrRkTZz6empxqCgT1G3MkkdC8AQ21bFoEioHX3sJQ5zaQWji54UGLpviYXrbsaq7gYd1evaqzLjFG9i6mXSu",
  "key41": "4wToM113yZbWbzSoQyPatErCyeoBFJYgkpq5YXFCmykJrNkmMZBbs4jSRJCMeitYTsEJsy7drjdEoFr5n9oVUXXG",
  "key42": "4uhF5gqf4PnNAvVxaAX4viTBAqe4WPQDaKFcGxFWYPvebv9MurvBeqas5ozR1axhacqeeVBHHPDjdaFSzELodgNG",
  "key43": "4XFDRen91BLtHS485qH4nV3LB33rEDgQrs17Rqs7appU3YMucgjZ3gnJDgm6NVDC4c4QXdeFAe23QNScsYxYA9ib",
  "key44": "RnnrdFkair5Tt8YGvURMAMCi98Lv3XX3zooP596Bn6B4cAGihe7yFdqBQ2ecSS161Dhv2Hrqfre2oob71JmUWfc",
  "key45": "eCCHGLKNh6crkerUBZMKVPSN2Xa4gkhzYDmnb3GHKLYdp1vnocJGEEtb82rgmmV5ohZTf8AEyDeoe1CigbvvxX1",
  "key46": "hkzBcfkyrXZCZqPDFUb9K9qh9e4vBWYZ3saWAMwJx5J9dHNbpKsRobqpa4CRFoMpjpCUWuUfr8QaF86chBP3FRK"
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
