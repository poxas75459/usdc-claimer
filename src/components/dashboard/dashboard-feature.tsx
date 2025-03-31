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
    "4pgTCq15Y9Z4m2qLgtHwf1f1bnbmYHZm9KnqEtfKcUNZ35YdrLaECD7JG2rs9b1ph9H96BzNd4xZT3JPSv6fNhz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XzT7ZnXexgTSYzxH4ZEw5TLj94vqFTQFZB2AYCov9YC8q9otQBMepJoaRKEDWC2fjC5Efnkx3tLFmD7Qq97MqCV",
  "key1": "3p8JVdY4L1CZLu6YfbEbhnW53mhUjnAX2H4LNtWoKRHnwumN8eca3hYQusM6HMS4AxPnSrSYrZ3KSfiVZ2ekCucE",
  "key2": "4xXBV9ntgfwquKY1VYuHg3DTyRayacnpNRVwfHVVJ5V3XP3SrxV9tAd6vDotwa4vnZPh4XSYauLGAdTDEVKPfXjh",
  "key3": "2miQ2VBZigM1YS9oHrEpMFW4VPKKba1s5ijwNP7PKXjob4BzrjjgXLkRhQiExX34u6HNRp5xNMxoMfbg3Hfwfyoa",
  "key4": "5kY7o6Mscq6MrotYTGsChFLSLyJj2KzMnUjiEnR5kw5PnHGiRYfyJjbnxzpCVCeNUY739btF4sCRxgQUXJ6EPc6o",
  "key5": "5ZEoiVTj6rNA7Qr7YZTuMVtkxAYmwCNk8YR9mcKGhF4d1PGs8m2Y7Vs76WnZAavLFyMRgWv18343VS5p44bYyBoa",
  "key6": "KWw9owc3vmT7PrCsyaHex1JTkX35DkRdxi5DCs8jnxfN5w3d5zkaFjztq2zMK4Qc9DP7dGvCAAzSsc7FsBvJ4Sk",
  "key7": "3H8GiMMVhhGpfB1RynJREPhEmPzQ1ErEBJ2FybCEwWrvKkS3U6NczS5jGnLzKNzdNDJEEA9NmkcvAKW3TgNk8ubQ",
  "key8": "2W1ytjB6vrev1TnLzAyx3KRr7ZMYoVWLBdYKyiJzFAENsrsxmgaqUs5q3sVCo3QiwXJERkQiN4k6HWTwkBqyH7K5",
  "key9": "3Aij9NV4n52ucYeFA5Lktm86Ke7JpYg7MsWsgc6nvAAFWtDvKxqmRNf5TvtwdHE8ouAcP16cpyJpMUdQMpTEL4yj",
  "key10": "3w5JtCTZxBxHqqEeEBaxqvt6n3yUKHtq1YuzrT4uh7mXLWBNSeT9PvvCdpvj5S5caV7JYwgpF6KoNV2uXAXeJJw",
  "key11": "3H3Nm9wGKNya6SLioX45866cE9R2C7gNBbxvqtfSZQGrxkjv3R34Mn5n79gByPqdYKyruH8jUaRabh9VXJzZCj5e",
  "key12": "2yNV7v58PqecaJnEaq7MqWRvnGVjv6FBxTcqDu9YCCnEZcqZmTeMio3eRJBxezwcwxiyCaYHaZ6BHWRckP1bf1AR",
  "key13": "2DNY845xn2cpYZTHrKtByt5btuqQVwbTpmkdgb3QCfxKo22ymvbeW7dqtSotKkWLuaBnxEtTJSgnjFfLJcujaNJu",
  "key14": "8G11ZhQMVUMJYWzMJescYsURb3Qmt6YDpDueyjf35k25dERmq78XQZ4E1RgsFb8s4Z4cKb1iMB6CZBbMUMrsyMx",
  "key15": "3H1tYXgNHQTxXknPfJW9VNiFYVTv3kxU3pKCy3dKST9ecA2CZmeTjwDR4edpDirmPHoAdr5CBc5nPU9MDmUtTQav",
  "key16": "4waWAYkq8MbyJRLDPejAQKN77ya7MnjSKBJGZX6Hjz4MqbNWVT4m6z1w8rHhpf3B7r9UydkkkcEPJ5j3ggiPNoK3",
  "key17": "24XhcTH2g7r9DaxLnSArgRpLcxrHBvpEKztT3CgBsUiWJZbjfBbb6T6YmHNfRiyCyHHGNtCarWqjNakPRWb41bf4",
  "key18": "5Z6M41xtbHNe77YL4M4526uDydcSDXdFfqJWroWxYgoCk423A1rwce4npR6JNKbdrjzQNpCgc8GTA82GH2Tmbv1a",
  "key19": "4GnjisLENXHMEoLL6GYG6JzQZjK9CjvMjw3iR6LuRfT3JuFF3vRXdZdLETgNdq1xS5zPKrkMaENQYNDRsvKKN1xL",
  "key20": "3fdSoTxp6dwA43kSECY64cYth5wef6q4Eif958ofU1vfD8x74xPoNHjGu4Yi9bXvusJuYLFvCnwBEbUQfy8LsN4j",
  "key21": "2nWYCdoipYyvGTsGMkvcJqM1wUdjfWqpMn4o63TmnypRGZyb97rYVHJ9zJcPCkgbQKjHYK91kSmg1BKeJuFU17sC",
  "key22": "2bXN8ShnAbPm6LXHaFbyWu7LYRrf3di4Y7VrYTFfbzUz179gxWhYx4wUH9inKrF8h3PxqdtitpGMmcMqXvrJyipu",
  "key23": "63Vr7dwJ126L2KbFFX5uraZ8wahdccmBSMGb18KZRTikomHhkQxi7Tc1J5HMUsP2xGTrbEiR4tgsJfsbuZR9R19Y",
  "key24": "4YdyPtboTU5AFoa4HbCN4cAM3DhXCiczD6eExmGS1tBZvVSJv3gJHJZbRVT2Nt627HmUWk3wE2exDWWug9JzMP5s",
  "key25": "ZfqpDyCyxj8N21KYCtdbn3Fyfvah4VVYa3pPPTgQpNkiYHy8yHagLv73ddB1kpxK1nmWzTyZERN1wRXWN6hd7La",
  "key26": "WaB4DuYgbwURyJ54ToJwT3H9WUJZtX89eZzwAGQ715vRtqkhv4w6MCF4iXCMMkToGf7SkgBdqTaq4uqdJpWDTri",
  "key27": "5XaJfFQTzMFdAFaTJNcRdC2C5Rv7mq1fkJ1JZkLNTmB9JgdBf7sAfkqHYpKFewrzLcZT8TEscRRhrs1378f1Rjq1",
  "key28": "3ZATc8yLeXYCMfV8ZHEDSC2ay3kBHFbtiLF7MEKc3U4xvBFDwJ9FMFmq5sBcgPKm1XaJMfoHCW8KjtFgpDCFLwCZ",
  "key29": "4nKdp3zPjoExgVWHhcTRpDMDVoErnJimoS5YC4NagXinTWLsjVS6YFuhpwa9iDRDHikxcXHiHyQyfDx6gosckYDf",
  "key30": "3AY58md1msJXStJQe6gZvJVGouUHww8hJGJrDgcXVAeFZd1qxdkN6FiGGX5uwuaLwAtJ1cHynr32GheEU1dEWA6M",
  "key31": "5iYV9DspXAxxDiLUXf5QkxPykm5kx8oaLJmKpQmNoqMq3RT5FRDekBTk73jnZgLs1b2nzR5XzC3hhqQUdQr3q2tA",
  "key32": "3BssceEEPjdVHgpjSP7XnGiYLCTmWjUSNYSc2ccvoLbM5n8ruxMG77h9tzMcVstyHrPx1EWs5T6JRZtxBWYnAEQn",
  "key33": "CWMJTrsxRAVBmLkjfQSFrt2z1FZwq2qEJJAquBDniiVUgRXAobYvkfZxvYG5jamMmGMK886Uko9YGvmkxLxFzFc",
  "key34": "3Ju6PfNUudS8VrCHtX5emCwUFYtxSRjvDy6htGmWbDcxy3BeUeF3BAMzbNZLpffd3sxSfo7M4rzqzPMusY5D3cCS",
  "key35": "2CS5eouQMPfwvTTJs4euP9tpXCo54Z8jZWV2fTeRwHZeNGTAyGFCpKEsuAGs8rKPBAEig7JuDPJBY4SZc9WfcKTM",
  "key36": "58JiRYsXQ3eXKabpT4f3X3H7XUrQ1zim25jbGZZYgkirZvJ7VvQcvut7AS8WFH5EagzN89kHkwoPBWcvkTwqFVSS",
  "key37": "3Ey169Z1R8zJcEhRRqrw3MAR2LpSVnMnR4xymzrPy8tbcwCrUKrJvoUaN7TDyvLo71GFc3cdmgyxPzDdqRi1rcpm",
  "key38": "AcRyKKcqbkLc2x7NvJh3goMjAN5f71zaNzCUY5FGkcs2aFGxCL6ntCVmV7TfCrYo6wcp21uJygjbTDGqAnc55h1",
  "key39": "3poapnfrBTCDJStZ1aJbsiZRSUfp31LS7MfPAdjBhuPeiXdsneP3shDF64Sb1GL67qS1BhDYN47kTFefKWVtAfqc",
  "key40": "552xHZN45fT6fpXt5cQT5o9K9DatweX7ah1esMM8pUhpgn4r7TtzJpDrWS6KQeb1JdhsNemM5hNPLtTzZtgZ3wTV",
  "key41": "64wjuBELtQZ1ggkNRqrVZ1UCW2bj9cHuTGDauQhMRjQWtEbubjqw3LRy1esWRsuBc6DR4aRpmdAs4SYCumCTXRjY",
  "key42": "3iweQdfm7EfYWPS2Vx62dNw9emt1Qis6vC5KuZHMMjUfUbNhgjvZ5g2MF7iWupUqZMtnex9jUKXMi6heHeygzFmb",
  "key43": "616R5zPdxUzWkwB7N7c43JCsdoSGXsbN5UKDdj5b5cPtqdsAerrkW6P6kFzAkYLK9QTkqAyS652CGNuuGp2Z4Cwn",
  "key44": "61k9dYnXaWgcaUrKef2UjYgyZZgL89jUwdaam3cDs4Hf3ARXfXSYsyW5FG1Vv7YPfrDKci9i163n62wEajPQYdnQ",
  "key45": "4BubgdCUQTBssAhWsx1Y2pStWQJJEpD4N2j8Dd8YVd1cMWkWV534FS3eAfN411tjcqbHDpfuuk8k6F9CXujEeA3D",
  "key46": "66yJD2pPdy5UH9u18PPrjRB5tghUT78nmeYtjWbvyoWoBGo4FUk3bNxfCwwmeVXyabgZtGWFUkE6sTZTZxH9pFx8",
  "key47": "3u3Nn4kAE1R9BhwXFZXozK4fwW7ECREzW4WfZagKbS9S9sZpBNLVAYx7CtSNsdf1Dn1ip6VFeGX3nXXwJrcxKBio"
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
