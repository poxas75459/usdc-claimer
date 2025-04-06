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
    "YX7LjcNKXDtcTB7yhyMpwnCu5xmUydoB15tP9QNCjmupHAUJGuJ29WMYY26AmN3eZVRkHTigUKyBHxyauAPK12H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1c4HKDnipHjX5YpzFNy5UmALmaj87wn31yz7F453MVGFwJu4D2DoaprkBQPyh1kHQA9eLHKSqDrNiu91iJpKD2",
  "key1": "pS1GgW8ZBfKNPq3E4gbm5w7TKNBvtnCXK99xZF3L6tRgMRixx1g7AQfprp4kQfTHnoS4uV8f5LNpUz9g8XdG5CE",
  "key2": "ozS3xqxH95o9hYjznjRA6CRkKfyJA8PLPyNir2BHjnrc31UcFH7VBpCVqzzrv9qWQtKLwko7Sq6Azz57TzgiKkR",
  "key3": "WP8ZtbXHuuHxTmht5MQVs9dySHJWwUmX6XwSW5gpBKVFJykgumUD84w1h3vjCAzHPbTz2qEQYYwpjqfvmzXbMtk",
  "key4": "3UY2Srw9dtiFwDZnteaudUGoooyLvUMMUuq7cJXPsf6pUhN5nuj9Nyaxg8UMg43dJHaFXjDE9qNnJm1tqCHhe9Sa",
  "key5": "2B2JJWtohVQvua4TmAxS8h5RtBGoVUApLgyu2mcnEyuibDmq7DBC16KEyoxm7CmBAioYxCCW8dPwraUfbG9JJNKL",
  "key6": "62KDbdVnZDNQn2UVdwFXgFeV22fSbNTHgmJb7D34DtUaXx8RjK3GqJYytw8i8zR6ebdCPRxPnW1y1VxkUYLXyY7Y",
  "key7": "3SpD8mzjAw8mZMYT64C9Yz2VUHoRAxMJzQ8EGCho64CDvCN5dBNjxTpJksDxpKhjq228dJ855krZE4mCyyC85fov",
  "key8": "NmYx1cNhjBRf2LLtV36zrGScMNEb7aNXSP6wrjfFxHG27kxEL1awui5REs5MzsBvxa3767Jm6qJ3tT26qAR1zBe",
  "key9": "4GaNwADupusuQEBjZjFgsc6sCyzcG8Sjwhk53qHc9ccBVGmuZ9Ls7p3bcypLhXJrhcmM3jEBS6z1PS3zUoztxBML",
  "key10": "4f1NBeN62PkoybQtzRhrYDn14F2LqPQRgLp3aKWrSnSAGqciUPGGFDJG49R1cX6JNFMfdZdDKVXsaayuJiGyPteN",
  "key11": "wf7DnshHgQUJFN56Yk1smbSyBVo8GfKCqdqmX73edskDymKxoWfCRg3huet7tXL9HmksC5dugaoMwwJU3uFyM38",
  "key12": "2MrxhTL24JTMZ45yv7yw6bn7UJffPkZMka6W5zDYXUZUPuH71krXWBm9VTKmsYKX8qKrnrTs2mFE83XxaWY6NjHY",
  "key13": "u4EiDe39vA4zoUCuZyRcZBHvVhRVgEHwoo667uushXhdBYTuyWUSaAEAJK2W5jUtfXtKDdYfoYj678cogwHMJ3e",
  "key14": "56e9cwNAMYBiantMHqaoZtycwzpGi7Z6Ar6NgV5d7ZBQZW3bFMUUHCa31bKtQqnV4xassXsq6KEaLL1raae8qn7B",
  "key15": "2i2AuGZvHHAp4E5J5Gqc6fUYCGqA8PSmzTcCqkooySBSwaxEvqnpmPXCbtrCxYr2t8MDbyZwPw5PcW95fdew6gGu",
  "key16": "ZKQkdUbrWs15wEEpmoYoaFnAJWvX9pdvojem57S7r1GQvu6uJvNAdcMGjBjvKbd6Lnf1JKfBnm6X5skb8n1bshZ",
  "key17": "52dz91H6LMyNU8wzrYJqr5jf9gb4PDuhbFQ1TDRRAzWxjVDtMz2URf7dBNSLQaG6YympEUtY7N4QupfsJnQQumzN",
  "key18": "3kfqR3L3nQkWaeBaMvdaniVyYBsZPK2Z6Af8AemqUfxK8BU2hLb8qQ6Yb5jfh1moC39mQ569hnpJiszZtt4Ndz6M",
  "key19": "3qKt4sePUJa9ibvdzgieiqe89ZoLDtiuDHTd1V3womdQKSMu8ZvbWwYsj4K3cSNHJEYKFP259zYFAKdrYLvc6EbY",
  "key20": "3UgLsshFPEdPQ7aAGZ3NJLUp16aysKkuV7ebePjAzvV9bh2cD1A6DXYJrtP9t1wRADBqVnCPtPG9k6dcaU7jdfDe",
  "key21": "2aMKqsWip3sQ7DzVVvBo63ibtC222V2L4mdy5X7eEfG5LAnp6zbShv2DsUwGViUAQf9yZtCgZjiR1aGxntmK1VRF",
  "key22": "4oGVWyKBY9BGBPNpH4WgchtkcC4HnzFCPAZy6nfJvb4DhF1htJk51WEsWdcTr2duPNeLuN7xm9oTrJvzRiPVCVWB",
  "key23": "2HqKCRcrk1qtVvFtzsjqXfxJ5rNo872gizKo4YbjocBDBg1WxgyqRCxihomdEsRYU6waDbHg6jmVVh5gNKKTDiBa",
  "key24": "2uCZypdqmbs9x6pSbBGXvjxyMfiftFt8A8HnH2u8dT6rMLNcFT6awBqEFYNgHbaFruFmJsjYL9EKezULHSDjUnuj",
  "key25": "2bzGXdT6mTS93FmZp6wRy8d8KrmGUQRGMgRSaq4QkMBd9nNFx5f44Me4Rwx8MYDKUy2PQaPMUfPTY7eq738QisZX",
  "key26": "2dW3GudiUw8jyyTgMboPurw6mg8Vfnzo7vZx3m86Yqn5NTrdrYfhP78fEKBxt3mK2CnuPWMTZVZX1uHSU5Usepik",
  "key27": "3esLcYGNWLN8j1Gug9eiUopMhUdo3z2bJtwomNc5H8Qozf4nue6omqcvw5CsN1mtVBcUU9ptyV1sZJGXwC9XaQk1",
  "key28": "5xEZ2AcpZWLgRWZwY4SL1Y5q1vCARq6hqr7fQvnLimSivEWW9Wz6AibGpG1s5QD5by1woVGSDLrNUfLiqGZsZ7fD",
  "key29": "4WJX3KyExbMFyTqESbpGM11KQmTV7xndYeCFLrzNRpvumSm1fep7ANMNbbUR8mxPyoMcBmxvYdzLhhb9sQcPph3z",
  "key30": "29PBb3YY3z3LVNJPRaPB4j1S4LPgRxTDLMyBtBNfcGnUpspEKWPsA3kCwnRcqKpPkVcDqygimjCMMn4dr9sGLc3B",
  "key31": "3LNb7KeGDF5C1fR7P5NPHkXwRjBpD5BqcPgMZZHLaJFbeno4VrJNn4KdyJH6fmH3PVBWYWXSNhRhCBXE7sFUKnQb",
  "key32": "4AKvyjvWemM9F7pGPeEZs9Mmxv7gpXsLbo3wKZhk3ZSAQ9r36jPreqzkGG88ZHSGonyZw7T6UFH68JjyHXDmg4uN",
  "key33": "65wuBji5pnEMPxPr7hudevAkq5mTsZAzqJYJttKN9ysQw3iAzLQLANaTFQJZwrGsthKAF153DMB7DtUswnZa9ozK",
  "key34": "28Xj8p2BuA43Jx65nFpGnTYDDssRLXpqscAKcMfzwr1ZJNxzE9Kck2ARFvAvmYHFpxGb8WXYHB8tKYsa1zmnfL5u",
  "key35": "64H2rhyHFyEAVGb7u8pKyZzmg75sg1ZAPf3qtwWwTQxvehgAFxq7pnUDwgQRc52HGDTDTwzAPMshRQVskifeETtE",
  "key36": "5QuiZ2ovCrSjGQya2MTxGcYKJzGAmZpG4K6qFq7gpZJ94fQgZaMT81fgXjues7wdUCy4S1xma3AAoGs1J6Z5iPze",
  "key37": "64KCZps7JZeKbRshfwLUuC5cVWqcYmTJCQNTeo5wdDiRzXKMKuFTegqrinTap6oQbywUHpLiQdht547JG4NdBEiG",
  "key38": "3Y9UKYskpxDme4rmYbLWLhUabVyd3iHGmtFd5RM9W6XoErijfBbKAWTkA81dHhMgX8hkmVvqhks3Wdmb965SH4KC",
  "key39": "FYRJUtoHwAaJuShUxmtJUTd3KyqNzpFofNo61okMSzmoPCfsqGsTPYnuXssrBqPXRxRLVQj8hV97jWwLq1Sh2x3",
  "key40": "2TGynFqVRoGH4d52oFvGNemoJV1WtKNkozSmiq57bfcbXJcahmsPswiGk52wRyibPUdiWcASk3M6XSYeC1hmWmkm",
  "key41": "2RFB3e9F98czVtVqgSbuacDRkvQrUvkWBMKvFqwJLUDDAtksfoGs7ejoYThVh9DWd1W4kofkuMgHbfRuP1ogrsMR",
  "key42": "48HPirL9g4iv9D8JqMv1bSabYc4zMw6yzaNBZxU1WncqGQLkwxUCHMijU8HJJKgVmZwZm1WiJo6i2f4LMNMER6jc",
  "key43": "3ojyBnKcCHyz25BLXWY67g42jhRFRC9FaDYsrcWQJZjx4TnsqSuo3BxLupw3uaxDmG7ykk8rDV4fvZApBpykPPAq",
  "key44": "2YV7UAJNqGkr3ZZks4BGbGYze7kf3d8ew7yhdcqi4JcujGMUsLFcBsvd98RbbBBqupc7sPzjNW124KJHiXEX4ZPb",
  "key45": "54nAMSs66LKvALiyDZT2czAJfGevmB7Q6HaBZMjTj3AnGQvqDgTcDAVNmLbWcduBkb7gUhGHunVQTwQxabGXmekz",
  "key46": "gxJWo38rgXL75uuH1fBubzRfuEs77cNfB2pLvuBa8nBDhgxycnJDfRzH6pQsdKm2ZJAYCsTSZbYnLH61XMrLUVX",
  "key47": "5fbyjBpjWPhVa1ENMTWYfYmL8BrAkBGdo3zXTQ9EbvzTtNtSp54QQaPwWN9aMvpeRifWcscscR1f4k8APPTV7ruN"
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
