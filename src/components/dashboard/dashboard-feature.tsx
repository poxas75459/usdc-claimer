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
    "pyx88oNT9HMUcCVpXCWfVTH9zU6nQwY7jkvCkfxzqmZ3dfbKxLYxZcXPipXUAvbUu3Wqa2AD8xDEEH2jay3uK9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yShg6jk7wJiviGdW8Js3XwR8E2Fw13a31tDS7FnteKtqov1bExjg9YAbdDFMeDb2vfUfgLzdj2X7PHCcCcL5yGG",
  "key1": "3yzagjSA2u1ZBDdr6s6amwXUJjbqSaZju8xcArdmfrAnpbfq6dvLUd7QTAo1M4qxqrm663Xuy1VPjKFjrjH4bDyx",
  "key2": "3GeasSbVzzu2sGS31BSAMhQ6YckpLWD6R5DSGto33112s3UcN8wJuxeYJDFXP9WCPhW4YJbkhyT1adf4Yhq52YdP",
  "key3": "9x576DcBeNWBaogcbUJRBfKCGqVmCrxyuJr4SWBaESDRNvB5QqcbmMV1oiVBgVnMUgy6Xv8DWCY8peGLDTDTAKr",
  "key4": "4SLJ9CZrUkcXPp7TjX6WFqNHBM8iVHjFu1Ln5T6TmFbeGqnbNLhupXexrv9zQDjghtFEzKBz7fW9TBznVc1sue2n",
  "key5": "3rGjLA1tNJXSE5kR3XWeVXLe3iXUCjjXUZSxvktQQepnpdAAUJ8Q97tB2PAeqE6DwHBJE4nmJ5EaXRvtFWdAqCHm",
  "key6": "2LKW6LRCx3JfqjD2vktJnZnUGAuS6JsxudVXTcemWbbUsKyjiwWmMGaqng1VycJMJpL4nJihVHLuyZZPAPJr8JgY",
  "key7": "5dzcF6Wqp2r8qRZU22bHFav6kP3YjdEfrcKmha7ELp1GwetG36X8ha9y8ijDQnHghsnRadrDMHc2xo7Ae6XgQfua",
  "key8": "qeKdC9eEGaSTbMPfYEaKcz18XB7mnHYmL7twazinDMWv3wXZmTAVYKCMz4xReTPxbWQm29rcACHAUkka1RoEsoA",
  "key9": "3Mkh1HdeVTvJat6oQqk2chMMbNdiujd2QV2r6sZoWQQbEhWPX7W2PZZ5WbgZS5L8BjbypgmQNB6CyhWM8jAd4JAG",
  "key10": "r4kSiZTafG1iJET7z2DGCJP2j779t4h1qCybJWWEkNF7ETqxkZq7YpG6LbUUAqikQrDf8rg189W2wDXpzGJ5HUz",
  "key11": "4ZxUTRi82PfDKM16aDAqHkMWqK3RzSwrtDaRmNECJUtfbq34B4eFVJVKpGiMHmWgZ9a9xAv2cxX5ovnxweanC1zt",
  "key12": "37Ch3jEkCYcspCf4CzeHfBUhweHff1vRyB93GbjWrAXKnaL9b1FX2mRmaqjB3zFCJzxa35xXLCt62ftMCuFM18xE",
  "key13": "5E5GSmtFRpYX1Q1beLJdbrcJwXXrnHLJzkLquHxW26qDx3caUS3QrTAxHr532e52Wd5kpcAToebU3x2GkQS4D2h2",
  "key14": "3zkHjGMqv4NgkKKcXLnMohwbDFWYbyt7EkpYP7NPb1fz3XeBFKHGxZ9uPhotbP96AgCzxyGtqUKipAtbpiZXxcgv",
  "key15": "3b9vGb5gQjCBgXFK9qPBYnQ29V4SjjpFh2PvYZUtXZbqcTzUzHAcp33WMjQhNsqKquTjAvBLRjLqQKAV5hSzuWbN",
  "key16": "2jDv51T6GXVxSFt4w4dJCT8ugeQFrrBeJnarBDFVAKxWD3yCgawRGzBCjq3C4eT5xJqPnYixDNEhfTCnkXXi38RN",
  "key17": "3tEVfddqGnRmdrYcsD7NgCYUTKMaMwij25SXR6irtVzZQsXcwh7J9btt6R9fkrsrFtBJZNeBGty2kqh8HCjZr34z",
  "key18": "3zVPuLgd5otxmN9dUv5BEXxWwSbf51yKZtfp9jx1vXFBD5AzH4gsDWLuL3ivA5RUYpeuBLdbvZYksPx4DDy9jz13",
  "key19": "2vob4eXTpto2cbVsZyMo3wA9pSRKUzf6E7RCiDX9AeYrzvs3QkHtoGevWhVyzTZ9Y9v8JZf6R28hrsKkqXTrBcze",
  "key20": "28REknaQQNCt7UYEQ1vBh325vCw2EojFBrhjxzDsrt8V5jhT9Z3AhB7j4EtorQnv7ruehRHxwtGSNKkn8y7jyTMi",
  "key21": "2orNaA4PpbaDbitNnmLaQ4Ed4QGuTFCLs87XWHaUa6d5FjrAcQdCR1jH8gTH7AaqjaCsJ9uHvzWri6LVoAJ2R1te",
  "key22": "28xZ215DkVu4jyBjN5yd9NZzzpapRuP637oHzY7czWAG3mkAUKrtz58bQikXLQ5YvXaV2zhyFY89udibNM3mDVxT",
  "key23": "hM2QfsywY4v9BXmVsmsz3HVEGqQP5atxpkM6j7xdbk632YGt76rNfAhZxuRaEmWQqT7mXG5mBuiuswtAot97FBo",
  "key24": "AoEx5dF83fDafjokSDx2spmCDsGnaBr1gYHxNM8FX5TUuZJiJ8HszJ8Xui54FWrqQy52DjhFYrqbiDTzzDeuyaD",
  "key25": "vnLghXJ5EpgwSF3MRfY2n4wQtc1ZKeRuGE4ZLmG6vwt1dMy1Jcb7gX3E3y2Jkb22XUY14nfamQiLAHM6HBb7uiB",
  "key26": "5Lm9LiJhTd3wbqAUyW4EKXCEAR77Co1GnrN15JHM6zbWA3GMtBBsghcTGmkPguYWtHyGVacFJaM8xJUAnn3UdEZq",
  "key27": "LCNCof2jEVni1gN6LXupr9prFwqGPFwX5256YDSkRY4cqFHQcpqjuigZwE45DdC9BdMjoXRTfRMuBh1w4puXqr1",
  "key28": "jkwWcgsC6tqpzjfXdqg1hZAYRe4FC1M7jg1c97zDq9FgWQmeiJWiesdgcJc8DsEs9Ptndp9y7mg9vSV8kZGKJaz",
  "key29": "5bwwJtiQcSXy324zTUvZi5qQmhpWtwDvcwQDk97PuW63AMiEcq9V6eA2NLaycrVJM8yb9Ng6FyGNjFgdH69rJB7r",
  "key30": "48iHXxyGQDHszh4wLjyPkExJDfpyPkAAU6gf1mgABzvAYXrszmoGmHLrjuqMJqKNxD2F88QpG2F2io8bzR1GPp3t",
  "key31": "4SKxNT6Xjkn1BqVV1yu7LneVGCVkZHkxEQeGbAggiz9L9B32cq6JqR2RWfa5VXSXNcgvWVVPy5f3716cAY72rQdR",
  "key32": "2PQ3xejBwfShnNdxbPmn61N7SzSU9Dg433f14VRttj9tbNtfnPKu59uBsRthJzCc9f4wp4fxgJRBZSDQZyWyHSz5",
  "key33": "A85RPAP3HN2aHo66c1wqbEKy7zvm24nT5cuRQvRHWy4XCtV8KBWgdEW9wQXrJ1Vj93DUYS6zihYYHiBhrvgT5Gb",
  "key34": "uQDY7PjJ8p3zYsh5EpfXfw4LM3zCiQZdmk13T7dvB92hnqq5uFFDxGawyRHYUvQm2QnideUjygmP2wxHeSuxkYF",
  "key35": "QjNELTi5ztzQPNn2DsahWJu7vCCjx6LjnEhSadBmFaoHrReUcBY7s7jfdeJMfB2cywAGwvUmnxLcpDtoiVHGDf9",
  "key36": "4gN9bStJhnpC19ryfRWKb6EoCdWECVBy4pUUn4Qq2a9B9hu7srWKDTs8P4ZRcKiD6ZbAZsVLVWYo3M9kz5HsvxsV",
  "key37": "2povPSwf3UwFRnYTjkTee2ZZJ85Cmjacy7M3tfhdyv4GH5QCQzsUG7CXzZph8dV9UXoyFt5rST9xuA6nhmd9G5MS",
  "key38": "4xqzciXvCDKQyjr9hMk8qzX6vmdw2ESYw42Qo2A4DUN3CHf7JFqeiwwHcjxyL6vfhjn6SdyLiY5b8CdVB7QzAwwg",
  "key39": "3Ay7e1FpBjjEX7Wz8sQwSgmooBAmxhKM2YJXBDbqzTbG6oKRAG3bkhT6CiswNyfe6m2hq4zdxjererAvqLsD1kQd"
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
