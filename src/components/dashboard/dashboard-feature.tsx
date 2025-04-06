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
    "4c96B5KC7pnPTW2DARLSK1DgkoHqMuxQBAVgrJwYnd53s1Vk8LwcnTmeaokbYwfcq19hvVnGHv5UGVPt5cVTZNFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WT4ehgaa8VeYxvQVSdj9PpyQ6ETZu3kipjJEECmuoKLb9KkkdbBz4tBgDxFnHoXoJZJsEX1VHwAQY9L56DTHQnN",
  "key1": "56uzc2skanG8qTYeLsgeTjUQLvrHru3tfrmgXxRSSjsDjQT3TSNLD5HEumhMRpLrqVJJMq3rVTahxJq36dnZVJNT",
  "key2": "2m2W9KxRcyk8op5yaum3MXHzhmvUnRhezf9yMNceUX6UU55S6uXgGhA2oB1CT63FdrFGrYVGeYKNMkgbhHf5UKNb",
  "key3": "32bk4B15NC2jKJQrJYhuofS773pTkRveX6xvxrbEBr8ZhzXNXcfURQGnZDxURN4axvTaYxarR2kDqiAyc1aCyp1J",
  "key4": "JyH7365UQR1uN3yTgxvKwPz1SGgnvBe3gy3fTTju9dwPfgjAphdLL1weLfJUQPW3vyqMNiC2LUZRB6EKHtePRKB",
  "key5": "46VYvGs3Nb8ejPhQvJEVAbes225mKHm6rZcFAKpAVsZ3WnRmbd9Zb4X6i9CC1nDVkPSmBJLqngw64HKwtvQJCbcV",
  "key6": "BeZe9TDrjNM6oYoQ8BWErBwpuGQjKavsGMGBrpdLLfHr1Es46CrvPWypmA7ATaseM3wFpgdtr4iDm8J1YWphN3w",
  "key7": "48GK7i8XyJEE3K5eusbgonr9Ppd5unkamU7uNHYUzzyG3c9f9hCwzgmchWjAfY3Ky466Ud6nam4K2rjWy8veKbja",
  "key8": "hn4oiHvyJYAyC9xdAGHNcDfh8soeiBULpc732ZEiPBMpyKQbxb48mXX5WBr5Z9UuasAgTbU7HQN75qRK7vfHRYF",
  "key9": "42zdjujftYzC5Lh4fv6FYpd8K7ELpoXZNBTnAXJCJdxkbHCdaiq16BqsoB1R2kQfrcuoS2KhbyT5BCUHxUraDVmE",
  "key10": "2rPFZh428GuTFTGJwPajY7tFjpJJtZ6ispoUEMcng5QiY5qxrVvxPqmbyYJ7xrAmxfsq7wcx99ugHau5JPG8BxJa",
  "key11": "4ynaDRxecZPBVZGBRdYvG7ABeuq6UjYcjf7Si7mg5UNZno2fH6Be3NzJZt9wLvgAZLcduJKMfHXv7KeZ8vNwT6LZ",
  "key12": "4RNv9Y5VfDvBsLqjJJL18s4RK8HU885K8XRfWVkGThLqxdMrNHyw3mzNvtTaC9u94yzy53BN6tUraSCE9x4B5Zct",
  "key13": "47b3gEAH1825PMmozhQj7XDuyJHhFVHkgEM5EyAmx3Czz2ga5wbpJZekLQNrYzQ33wXDeA4PP1U7ARHmNf5zdoeA",
  "key14": "4muxarbtzznRhLeSugHu5beqS957fZHVDiTEKLGWrymAHsCStukA8xhA6EpvYVDX69vkxURbpBFfCBe1suq23tnu",
  "key15": "2TZn5oUuM6eid1XsQmatFExSN3iN8AVvN1R58J6raeoHhtwzAfNrzPAYtEF7QcfNzDKrJXupardi6RUfBbzD33tn",
  "key16": "4B5ZnWbNzLyBDTVxH7TUE5RUG2LcEyoKupR1cUjpqim5zeiWnkHJKT3fWpgy9egY6P9zATHrdZ9F8dqvBqApHoqt",
  "key17": "7qN3XCmdCEsC8S7zb1ANwg4kPLf5bDa515yoKVFyWNaTbNyuheE7vJbeAiy1f6r4cYjdHZ8MYpsLzEGJtUB3rmd",
  "key18": "yTxkjCJVpjZ7SQAcdhnBG7xyA6dPSmLHGCqe4ZohbvULDWsPR9wN3yUCqq9PXiNTLmJsGdDSsWCDJBjBZDscjjR",
  "key19": "4sSrckvN5ZF2CypbPBA5FJpN82cmXix71AExgwLK6MGyFMd6HUuG54QELmztubGpnEJuTacHF8uUMWUxZj7FZhUi",
  "key20": "43obnbpv1NKDuyp7ZbWMkWxbGG3cpTNuJZN8tS918AqxRKqEoKyitFJvqgWLVnBP2hAQKyDJcSTRafoWZeyTGAvX",
  "key21": "4PDjFEWn9qeDZipSXVWGiT7yuEPUScMvuafNiEewNgC63J58Ag35Z7LJhJHqfVAouimhv7FbWmsz65EF6txnoQwb",
  "key22": "47uw7pyuopeVjSTZDpQb5QMgAdz1AjC6mHvV6ziSCacHaVuQVsfZt8pXcYtDZ2zHCCFmpY6cg2sgCUNZYiN8KNuc",
  "key23": "5dnuwzCKeJJHNGE6cwEhDhcFZDfc6RsYzenT3cbLGwe3iDDZ8z66CK2zFtxRq9pQ5dQganQMsR5hwbgqcYN33bj4",
  "key24": "2GLYfi1jUzZVfReQb8k5mJVRNrwTCpxksTA77S91NLkQKLGzhXPhn8vGkaHX2GQQahLX1nKZqbfjHLP65ZRXqXJZ",
  "key25": "5mJJsRrAEbqaT2ZjRAJX18FFunF1vNgt995gVvb6VUXBbxTxbqipnpiYE86tQL8khZayXn8titqkZB1nG8VTgoLo",
  "key26": "3qH2JZsPvbv8s3gCCDQg3tY841V491zXQAbXdZySzjjErDgYbdyzJjQVUt6c2WT29bPmGfeH4AYtgcUKaEHTUk9C",
  "key27": "5K4KxjNAdLwUV8QUit3okL5Eq3eDnC85bPfhCJndhRUB1sJ6QMCeozs7aA9hmsWvzcSBzi5XtXHyHdjjX8Vz4sk2",
  "key28": "4XQajbpwJcHLg3pGWLLNzpVrZdefbi5PsPf1CuDNVx1V8fzf8NwKHpkGzvWyAPMqwFAxpk6i4inkadDqALbjtBY9",
  "key29": "4SNQyaqusaofpf91CSrW1aWVdrc1wX2nq6f1RvJGmhXRpN8tTLGHgDWHbzy5MNA5nKUft6psi1pxbCLGBpeKF73D",
  "key30": "54W1xwLzekapXdJUR3iuCs1TRn6iYqbmUNE7eYMjt2wjsayA97SJZPGNm5xy2ME3VqubWUas7faLf1WvDDsRPFmK",
  "key31": "28oQWyWLbfAwQKBcc2Jg5gH6nMEf2bXo16TvErnFKkiygjYCK25wPHg3izEhb3rR9yqkBGmzFpKREeDhqbUyEsMo",
  "key32": "7Lt48rUk5EBzSKgJVFoYhEZ1DQBhV4WLUT3dLbAYmrcvEgQu4nxHwokTKnFfrVETJ8PHymUitSsQVZVudWi9Dr9",
  "key33": "3UP7U6X7AV4WgxpsUZooS6jYYNTPHeWYKNZpgXZYMVmWf4hKMN9gKFxt5F4S2igQkkUzquhsD4yVDb1RZkMCvbdY",
  "key34": "LT1C75ZiZQYr9gRq2S5USxeMUQC6knwxFs1DTSjx1aP6o1W6FJBXEvgAPvQZBtEfdRcWCHFHvai3yHjKEs69S7E",
  "key35": "59ZTtjvT37u3jbMkMMUHDS9xT9gxV26saVc28gBpbn9vxyXpcm9VDmXhW6TVwkVLJEmc11Af94XoCyGGFB26dKA7",
  "key36": "3RLcqmcoiP66tmRhwHteLwi8bvdv2fHE28uGv8zdTVhZRSfS7Ro17yc69nJWWKYTbLzpfF59grKRgnFjAXMtzhkS",
  "key37": "kJ3VAk6nCC3d3Jv8dsW5rBDVjF5Rac7oHwpZUVSyAKGM1xZMdXciYkKzw6vRt8Adu2aHbv7VQC2RfPMoZFo6tLQ",
  "key38": "LHWj6zYs6wvN11L3MMdkfSnChN2aVxffGYaLdLrAs9xEhFae1dxUhpXu5XFQBPMXEsEddzL1pjR3y7WUNhzsMDt",
  "key39": "3uiaf1iGPBfsqdugsc7mPty5xf4GihMVmXAKwnE2QxKESuPYPE2MjEFVa7Rc26y8t7Z6QtrDhDv3HdoTdbtLakKy",
  "key40": "2cXipoFuYofaEKMG14BhzLu6X7u88N4aX1KCAGx3zRjHqF9q4NZGXyFjuW97yBGVAfk3MhzuXz8esiX2rvohUgtE",
  "key41": "3cWQgAv9n3h8Bb6DYDCAEYrE9VfgqQnF4wDbAtL5XrkvFXbJRD8m1gi1N3hFnNgvUbTXryxzpQqeftxxxraQu2kA",
  "key42": "4ULrPNdk5znzG1Y51hj29aubzGXmAKyAdG5VPjWAaXBoJo8K46mSNdjgDj2XSyaxfK7c5i5kA9ekfpVAx19cWmL6",
  "key43": "iCS88237FuHZ3JYkxRsCfbVZgXFbz5s1aHQZwB8osz2m6vyMFipsa6hrTmEk4YJNaDfaBaLJ18NDXkbwRQeK5u3",
  "key44": "4iR8CEPf6eMjfwoVsegzzxeFSHiKgsticDXnc2m19fHoB93m96DdZceK6ggzrh4VW7DTgUJPgPeMsCZ7p56bnfZZ"
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
