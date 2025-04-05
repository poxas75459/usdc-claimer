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
    "5E63MdH5nDTL1ZAky3jy5fKnHWyiZ8D2domGWHuM1qjh3pZ48iV2N26uFjv7zL5RuFZFZfqtT8BoYqyKNU2bayAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eM7KK3ZDyUVgD5NvqkmPqzrHtqu7T7Au3azB5Fe1cMvUEZFQtX3Ti5gDpeZmpH6CgJcDc3Xuwzj7WuPx38XMYgG",
  "key1": "4Fea3wZ4egqeWvoSB8aVmTZkdJ12tMR6gdKnEAzNZwsPrSVDNaAYd6LFX88YnH2cBKRLUp3B2JU4EJCgQWM57SkV",
  "key2": "5k3erZKBTTAxWVv5BEDkyynHD9yQ5foaphgvTxxs2GAi7ALEKMsRer7C8rpPbA78JeQTtvtd4gcecETTQGsiDUNE",
  "key3": "4m7XFSbrSBJZsNyksYa6S46rnkgVuVzSisSR6jdCDLtSYQP82KDkEJNxxnEHJsHdB8LTeMCTPMBSzqTcs2hpj8N3",
  "key4": "3WJztqEEYn4hobgsBoBErathyBNbuexmCyL59p1aAtA1vfc2barrbRNEHZunUzhR6xFFMVzcBXskPuhHUjnMCxdJ",
  "key5": "2jc4gs6aJFBSAbhxhdFzGfXxrE1HbezKkHYMLJrRfxYJY6EFWr96MCSKZUhYZd8rT6agdA566pwriPr9pijMa4hx",
  "key6": "ZV5E1YD9fJMNgDE9Dot1LmMGGsYAwPvXeQoNnYJxfR9ZXoCisQdohCaxpA4zKhhoxRLrUGUYZTPT9dUHXJS4Ti6",
  "key7": "5j5dqQLWd8urvuLC5KRGMqYvhbiAzbShJJqUCWvunXQpyujHUcBgKkVr5AsEMkZGjmtPjZhRsZCX2zUS9CduacAU",
  "key8": "2o41uN1xbPpnqv87Rr3CsfmkcmGVKaHkt5GdDeUkNTLN5GmFRMrb6yGqfUw3dFvzNKaJhje4Ds5YG9GqoMRJXeW1",
  "key9": "62HdKaP8yGFpVkSNb6hW9SEZEGX3tusQZRqp6c7kCfg5FjuEQMx7MLu6dXi4A59vMACnkBTi5zLzkz3qD53XKdN8",
  "key10": "4mVqce3JkQwu8Cjt6xSr5CXstogqM5z4STa16Dh8Yc5ypZugdNATLvNpvdi4iK8ZWce1BP5cwAirrivT4ukyH6Db",
  "key11": "4GgiTLw4eEzm5Hkt5hHf2AvwdszEXJ62UQJcQPJm6dAUMyT6r7cgQBBj6hvFP5ZsCE4nw8xqxdgXykFtrmrb6UJz",
  "key12": "oFbBhQQ2dnegdwhoyrEqnNKRNbiuhfMNGMvn7bYmpRJb7Xd1Cvs8SYvCq8DEKgyR2FKRBD4rqyL6iN4jJekSxSk",
  "key13": "55afCZ7e87HSAq8uVn8p5chUw4N81Fir9ovfgpKA1tbn8a67BC55vGNv1uj7m2j9iTY1tqgpUWNHGxDiYkHCDRLz",
  "key14": "3vRfTn6a3XmndLnWp9h8B4frgJEaJ3C4NoEatwncKMXyjm5g2ry2axADhkD9ffrC48UZXMDo1v2DLfZbr7k1Yhyf",
  "key15": "2su2PtTDYpZ6EtH2GGPPptsR6igF7AKLZD5m6NBF5wzcchRVADq67twmNJVe1Q7iKqPhrGwah33EUmTWbabmdLbU",
  "key16": "4dkbpnzLh4NbUaa8w63Yu4VN4vz4Qr7ZMucEXa1so9EbRTvRDkqGWQVXZSdDcsJX7iTJYsYWrUY59tCZo692WdDX",
  "key17": "5U8bRQXVpaPMhirEJec7nTfB271qbGvVGcZ6yf5kcymR54odGcEiZ7Ao2yspND5YdqcjtgaT51rUfi72Dm3cwXup",
  "key18": "65Jx2PP2ptMkjgQZqR7VRAXhApRvun64wTrBCumXvMpdWZxCQRqGt4tMDdk8WDiPVP1jGzB4xnM5JFVCXLvpJqsL",
  "key19": "3eMVbJQeJednAVrXGDYrzcpS3W6UPLK6scmnjBJi1WEH7BmMS5qbqsVeEDrPxJfHV4SKdjiLZUgCSjWYa83bXSX6",
  "key20": "5PEWMUVoqn7PHRLvLFDztLh7mYrmUbYYQnQWEAHg5YLGwhiLgLwvqyXuwS6mybS4azA5TWPNyVJdbuzB5aLUSkpj",
  "key21": "5mkkRUvsS4vqzT24xEzTt6M7MmvWBx5h24K1V1xm8attmBFmASRYKCjDXTHwrBf1xkPukgmKkarDxeoGtow2gNaH",
  "key22": "2T4k1EZi25CMffnTeqwgULUyT1CCBeQvZ85t1Z89KCtZ8pxr9D9eSNK1R1vA6ZytarNjGjeKqTsQaPa2S84vg8vd",
  "key23": "3vkBqowqVyFmbBSAb7EEYT9yEBBXycka4EGZu2oEooU8sCgwF1hS68TdoMVbd36Uf4zThD9p82Ky1S5uhxWwmjDa",
  "key24": "2tGK2z9LkRaSM4qyYBe4aYgzLiCywqzWJZeqDNLTa9EEgf2v4X5GF6KShXk1JaXSy7C9tf1QytGGULXprVrExNzn",
  "key25": "4wtHbqHuDsGvLi9jbXH3FGvmQCSuAqFQo4J2BxF4x5TEM7xzJMSegP1cg3s8Y1DP6U6kxprStkvPihKkCJsYhEnw",
  "key26": "kP5cyyu4zAeqWDgcwaHTQbUjsBwAu3RvSF4cwX37rmJHH4BDPXVXXSMko8t3k8oHd8Pgh8yncLWGgRgrjPKfAd9",
  "key27": "3k4MVRJZvfkMpwJYUnUqu2uKrBhSB1ZYceDsMj9LGsu5cL5KGT1gkFDXK85qFV6M9N8wbve2P19v5ExbrsPLqjnY",
  "key28": "3BEFUzTLmZU5fq4sDgYD95ErX8NP4zgXH2wXbQobw9iq9H4ApgrAcma6uu4FM4S5rZ6WJBPLWcrauWwwhQ1NFdZg",
  "key29": "VyAmEA2QM9ArK3aTMqWGffskq9q5XxTWKkwM4r915X8ysJXntqb5K7vHkLDpVpPGVd2aKopdcxEMQiqtwvugXsX",
  "key30": "36EJe2QFWsFBPiLKTyrHFi2igh6YxWnDtZb3K2Dj1n4kpqUC8UVvFp2dtSWfNkwSCiRS5aXro7VDUcCzHf9U3jJz",
  "key31": "4ieN5jES9VBCTa9BGiA1wZiWdL9HmfygQnUAiwPPn7Lii9TuW8HFGCTBGs5F9YPJtfBo2GNGSSzLwLsQZ5emnL2c",
  "key32": "65vd5kyxDRy8cSKpy4Rf2Ayymn34Nugvcv23VDXFjoMEEZiH4myUgSVwLExHMg13eQJVgXquYm3smnbed8tj9p2a",
  "key33": "vn8aZnkk6QhWBNZgvnCQZZLveEpZ1gzicq4PVJuvwjPFSPoaqMYVRtNN4evLRkd5V1Be65CYtsp8YGgtNLi8hw5",
  "key34": "55LSTdPuBomfiLE7LRtnf6fzy3jqDGaQDRvguNruumQDUBuKxfRtZP3UAfV3B8qXXuMmFwgpCnMvWHHf49pS83mP",
  "key35": "5CgxWjDz27vAYMrKuWzNwvsf8Jn9QQoTYWqNUWKF9uWK4MQndd4D8deWjCBqwSBEpfwFcxrHMYy5qATQNLGWwVsf",
  "key36": "4rmTNzCeBx6YwHDtVsLPWLkBj9N2fD32c7BqwBDjrUHaiQqEiSXzjTg7XcuQN51o3e2MhBm6J5DJDMdxErPe94qR",
  "key37": "Ss96QS51vSY4e5DXzZ3jsacgUwppiF5h1kVyogKm7a7eXc4oHSZcPbg2yg8YAUHHT1JadV38BqWveMSsemF3zhQ",
  "key38": "BVjKHGYajpGb6eoQPJPdRKKbUcvcnfuvK1JwUWPjjqDyn79WUqcYU9XAmRdHDkkq71ssQrKtgvawzX7mTnu1EyN",
  "key39": "2gfhLVBuGmrqhAF8zANiPaV2qgLAhXJdnVEAUdBJZ88S9tneCwEgxWxBncKhRCKYtJEodQMrqqCvjxSHq2wB3GQi",
  "key40": "3ZC74tpsGEGY3EhK6kwbrgmQLmvJXF65iMUQAcdVHebctuKDN6iVgSn9rPtaAP8Kui3e1HdHiRAoBuTLDjBHALBG",
  "key41": "4v6bFhoutpmrDKPFxYuGNAVjZGzkVTo4YxAMHWs84XcTx7AhP63KP7jCcWwVQaB9mbDK5RNkrVwFMUHJHehV2tEx",
  "key42": "A2rKzgobAZNUEntLJZEi8XfyTcJd4TTMXQB9b7Shw4jC9urqeJH4xDm1ZmiGJkEBcCLHKyJbRML3GHzG36R6aKg",
  "key43": "3k5TNyNkq6rjC5Lt8w4rDeCGiyxbSY1bs4cyXv6y2zAPBcpbnEd7nFnPPR2GsnLeN7SEhnZUpUydrExVbjwChJfn",
  "key44": "3JzzryzQfA7ntx84xiNowkusVe7nLsLjUf13hybRSXcMnPdx3hmGKMRxmuV1u6g2BiRwiKp1TW1QrBYpzFAMZkVv",
  "key45": "3z8Xa2Qsr9MQ77bVVGzYirqfG8WeSwaTqwvWKeHLjksNXsbf2Z7ihC6GYjMhXWGHguSnRNpusrazRDH3KUR2BXW",
  "key46": "2KNUM9Cg6wqdbSfJzV18urpXetvkriY1wbdQmnp5ZJF4rv87s3Dv1ppFTnDkJYpN46G91xG6hCFa5bNe1rd1ewfW",
  "key47": "2iixtm4Emp3XaJaEpFwAwRgUheVRTuuiTkk6Z1ZTxQ713xJGnJL3DdrA2JmG85TWnLueA5ZCEjXjgBnUTKoxscQa",
  "key48": "3H3qnbDPR57smxprT69NA7sBTgJA3qAkkbEoejLbE1c2aSff4BL1KjCo2vRhuiBEqEWzzGkAtAGYpkmtx7cX8zy2",
  "key49": "4TB5GwrjLtHEpV7sSjuGtbnE515KM21RtDkYTc9VdDiDQJft35JbSELHkSm4Sp7mM6aKkpUt3aMzuLp3WhtGMWBW"
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
