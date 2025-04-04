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
    "5FkeZCsYXnpeqoKvP5ULnE4BpStVPLvraLVViJxSTwVrthw4qkJd9kVGU4zp8VN3mLR6SbgqW4UiobxuQh4TxcEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NoD26B8ZNVd8WJ3gdSUMDv1G95pxp4zb8CiBZMyNxTAnttPtCJnSd9oRe9fgVYxo7yHBFVBrkYA2miP2MXeGWw",
  "key1": "4pWzhptNhAGJ5VWskqcDQ8m1gJ6fw3X55Vvw9Dp1R3daUY86Hp7VGD8jUc6yv3K2jTDTTtbL8xQgPxc76UfK87df",
  "key2": "2BMbq7CPw67Tmxci4Gjip39JmofFyKC2tgU3KpTxa14Cme6dpoZdXhQFQJR6GiyS6Ap16NFZ4VDBdWaYbxvdgBuz",
  "key3": "2uUZaqrmnXzQyTVJkqgkLoEggTqcTcKh4g6TTjihwwbCejNxTdBQiUigub3G1xDwPxHGUTZrLbZAQUNMLFgAyjyw",
  "key4": "5D2TgtACHbwx1j2SBtBNo3oss6HKXVb7ExChiBij6QrbURTAmkHi1r87VnDD6AMVpMuJ4q3ddcP48si7zPThmVF2",
  "key5": "4ccxJkqJqTysgNGw4KvGSyBxiHPt1kQsLMVumB2SyG1bupL45sBMwEuYA3KJcEoXCeNHbVXghGnihR3M2PrgV4GN",
  "key6": "4MEG6KYfK8xxZMcwEQJjSpQNuwc6Pn5und5Hq1dWJ23AVzBH6N6dCdL2smM6vWV2bZVdKdjkws7L3UkW6HoLjmmG",
  "key7": "5kf5AxRkX7D64jW5yhRaQBmNmEFV7UpuHh55nXtCUTbBGCBn1eSsStBDS1kZXFiUEH94qxQGgsVABuvoDW2ohQUj",
  "key8": "3cXvRqRrhT4aQsgufhYUpWWzjgyMVsTpXkTrg88mhzoSp3KQ1VQGL1faEL5qC4oHhcoCJodTswPxwJZB1kue2136",
  "key9": "4GiNLC2YCmnNHpfb7aYjhA34W2ouGHj3frUedKiTAJwHRTGmGXa9yH3B9BD4TY3isQ246Z58kbgw7bXn1fKXy8gM",
  "key10": "2BYXE4Rj3BK9zprZh7CgqTSAcwXZcKoCC3i5y1DMJY9Z6ftTQ2arSKovfcijM2NMfTYzi5S2FGcqz7QZZYUw8pRF",
  "key11": "3DE4smNhJGcWUnhNJFdjbEyBPSiSZrK8gEdxMTj5Z3AHJQpy2zxLSydT2fFHGoDxx3CHNFsVEQQ3M1CmRozrQp8q",
  "key12": "3AZr5KjTFVS42237yxVuR3aKQ2rGjLucKBs5duR8F6aNcXxutuF3rKMaYmyyr7YCmmrqeUyAMamJKesGcUsKtBCE",
  "key13": "dwFgbC3WgUqd2eVRDdT6R93wfPhLAJdUHyjSndmr6gH7QikrRfqmeNu3oZEaSvpKfCP8QwaNjXZcbSikJZZWWhq",
  "key14": "2qC1o88un4Ldq5S683GhUGAna96xEAPv511hpFLMgDj7dhZ8WCovSRBh45Su1qayt1tjHFgNGG5GnD8gd6nWGBkm",
  "key15": "57GcwymD4HW8Wb1342izaNMy8d2xLX3JYyeQXD3ECLt5g1ZA4TBNECpfRMMKqaeH1tZS1Sb82mCwHa3A7u9yutKd",
  "key16": "4vzpX9hTQTegotqCoTh9QFoJfWBTWrDUSMJeLCg8bBqZAoEVfJrE2kBdKwKoNP3uFKFjuJ8cHPKLmFDCiMLK9d8m",
  "key17": "et6Cp45scAJoLzb9B6qEoDh3V5An2njKYWeK4rWxCNJ9aUyhFtKWskrSh3TaEe4kDG77Wm4YR3HzDULAm3EMeLo",
  "key18": "4XjpNpkLY8goCLvjhDxaKSiB2BrqUXcbqURJkSoPbG24tMsmezC25EDhuZyx8kHz7qvzxHP7fnRL2AbtqJt9bi87",
  "key19": "4FCjYvNpxCb8ZMduTCokH1q7ToxWSuMHgPjoKigX3yQrBHXvaKG1vVWaVeDYuazoH9mQGUfscqtkikR5GKndSoDy",
  "key20": "413z8Ywoy5G3nKugJCnwYH7zSwPHgngLnQW9M553gPtwVetTMu4KPzjtLEepFbreTgD5iih12JZGA9crfyPKH8d2",
  "key21": "58vuSvFkt9EhndWbizkxVHCeHKzMQXmcDmYGtGwJDKjmZpJPHm69Vtx3edkSCT66HvpSBDrNTvoKrb5sbMkTd44Q",
  "key22": "2baZSA8QznKpzyXwzdFCSyS8RBZc5au8fU4dsKKnRsUK31pFpZAgJU9y6Ayp89HMUnUHr3Gz2WGJ9k6gjwjdAPZY",
  "key23": "56dbe4ErDDHRozmpvEymyNNfYGMQPYQFMJUFz1t7cQtGEaBcnSrjdAuQkPCYoLJnGGLYwP7YgXWw6cqWvvnvHtrd",
  "key24": "kfLL2D1BQa3JFPt5XZf9285WMoKXp9rgVubTMQznDsvrspJCZyU79dsrBmoFhufpUH9UNT1vL4WduXVZx6UQS3x",
  "key25": "2z4g1AKUWrBnaXreTek1bhkX19MCrHZ5Rq5eGdJqrEEwkCZtGrUtLusnH8hAcABs3tS5cuNRMLNV96gbcFtwPZDg",
  "key26": "1LpuJYgP5Vsu8J4425Srxqbo8fixo5WQSKsgo1qu5M62dV9HB5mLJ1FQtsdbQ3prEGLfCWaokvB7ZeHZBh5GgBK",
  "key27": "5HADQimC3YxngQNYUrATw28GmvyGGH5Pj8vJh9EYU9kwJiNzNLst3ozQvYAKz3kuyA9BGhw3P5kxrjMPjMBETpx3",
  "key28": "PnT1z7mBfYVTtri11TXCQ5xZgrkYc5M45eoZUCxH7igBZ5W46Sf3xGEAukfLPyGai9YTakXr9Eyk6r7KV1h2tSC",
  "key29": "3XqPjwS8SA4vGPevbhJbDyhNjXsZnyJmMWcFEwSBbDYXSoXiuyA2LVqzGp4D2LUsHG5xz5i39tf88cAtYt5A1hXf",
  "key30": "4duQ3DA71TmQd9efWqUYeV12GLDF4LdzJfDMb4C3RwsAZgDR5AQamb8WHj2TnT6DXZJnTf87aoeBqXASS58wAcC8",
  "key31": "3dSP2NKYx2nHhTPsayLCDpd7NHwQ8FH2oesCZyLRQvVg3DMmxmRuZfP7S6BqUwvWstadaqcSTTVBdyH1FuPCtyp3",
  "key32": "jGc8DfRRDK47Yykt6cuy4WksT7ibdEzCUUuCvVAkxu2ZGKjAok2s1iQpmFXE3xBfmQBCdyJCQ3ZKZLukTW8XyPn",
  "key33": "5EyTMK5fW9RnGzuWyXnQabpZpfKVz8CyTcmuTSgdJoVMwBv3dy2JWFBCgp7zCQ7Sga2wEbjXBBcXyiudecVVKNdC",
  "key34": "3JuXWDBMw3LpPWAEQUq92bW9R7Tkda2SCmiZAgRXJ2xXACfPx9EFt8E7iKCp6TpDBVYRY7CiJh3JhdxENRvnCN59",
  "key35": "4xCcMeknEzecLHpQxvLCLzbk3nqKazcoQEktn6znqHKtuahAtKzyNa3RyibweS9qLxQR7QAWSQAy6f6HvZovjyVb",
  "key36": "3nbhbwjoRBmD1FkU2EgzGSg9aqxQ8rP8mQHzRExW2RLzmBXHLXt7PQNNSGPmR8GYf2QisMsfftfgwaRbGpVdj6dR",
  "key37": "4Rqh4FttsoYNtYqFNPUPpYfwYodMENc5Z8jGDaJu8J6TyYhCsNMkgxenniTgrj1Md3VNSYpfxgDMr2FHBD7iCWVa",
  "key38": "XLyMWL9fRt6StojrXVK5zBYvavnTTRZUdCii9f8eYFxGgcX6krBEfYXLipBqgjwjnbiwSuTqSZid1vfG6Gz8coP",
  "key39": "5oCYppE2mAREAhZ4vzY6VrNY5rg7tXkM3T9bkdZNfDbHSu5wiZdtWHHrSWe3FZVKALQfKYvfarQAbDSzBZ16fRfV",
  "key40": "2F44XgZ3jS2Jf9qVUZ2CPRKgWZYmbo4gNagz6TxALipDE5gREw1SVfANoLLoTwq1Tv6a71J9T7a2nq7NiZs5mWhF",
  "key41": "47uk2JeeviijaWhurzCaahCDz5Ychn26ELkVgSSvfe1pcG9EjRTXwjfcYbfGWR1rezxrWssbVcbDn3pxHpWrpoQB",
  "key42": "2LZYPMB6ickjcevmfMUCn1VBUU5JKnPjsPQLCPAJfkhXSyFVLvNfLBxnZGgHMFYSot4iX5YNFF4HzkyXN8mEDMxi",
  "key43": "5WUZT6egjzAX5VkMbMkp7fGjJ5hQTgUVR3WoKcDFdGCQLLD99ZxcvEC5Fk5rh5nNMjgK9zrhoMwxbWaxyghhRqbh",
  "key44": "5Yc1NkWLYm5JrgqAKwcXKTASnECnT3uMcRA3QREQyBMmQafokxzru11WN576tYKFB65GxTPzPJaFbofMQw2MJ3yY",
  "key45": "2AkABRUCVRK8Gf2gPkCBWHA5ycu7bj4GZXvJfAQ17H3QMM3YCaQru9JhCnLN1Wiv5YdAaB9A6TQ7YPZPjiUoY4BH",
  "key46": "214er9aqzYMyBtkPvYv43qsiHtjVwz9rh65DJh1xGHXHJbE5rRUBtsXWhcF8o7HYDXTvHrigm8Cta3dMTEeQ56ox",
  "key47": "5aFsMdP9cSXyk187izLTaomSkkrh7mpVNQJoneD3wPvgbqKy7LQQkXbNGCB95eHc8XD91uCamsZJ6LYx7T5g5UUX",
  "key48": "NunTp6kjLNyBf5EsWZeYT2XbL3dtq7hVgm3Tc4gPQSS9a2289Hr5sQFb5Na7zHQW4qN6aoq5eTzyzrq4xj1hczD",
  "key49": "qgnzEqscqtSJQ2NAvYWwD1JhPVoLeABF98WEM7sgW6nabjCTZSwW1PZdDsTEu9SgbUgpFoT7YY3uv4oVBJs8wLR"
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
