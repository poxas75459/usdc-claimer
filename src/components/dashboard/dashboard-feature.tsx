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
    "4XD5wMy5ftUp2kgJgtnaHBhhoQ4oaefMt3SzKgscFVH3NNBZT479qcNJ6kDuGP1DaVXCRcaDV59Bj89aietDoR9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54fnT7ZeLAv4sxKg3LLjr6whQQZLcBLHXfkK3C8YE9hk2cbnpzhRuio9nZsTy7eE4gVsHouX2ve4YbYU8R9SBT79",
  "key1": "4wVZQ6JV6G1FKAKRY7tmVNeuzpr1Eh9fR79FvFmsLKoDuTxA7dDjbAySvZBgwRVREh2GQcjbcorqETbuKHSFf2M7",
  "key2": "3VyYBctFb1nYAnFHN4PJU5yTD7MdSaEm8yNwbURAmoVZrJNV1T1HdYKmiGAhWELynCbbWqsMCv22vc1FBot5M3oe",
  "key3": "2b1K1PLi5B3qcqHa6SuWWC71MAfBmp99FEUgk3sRqjJpxACw5zRManW4uXaZLi9FxFtoXnccxSmJhavv6YUgb5wW",
  "key4": "xGaCfuWSBcvtvEjbyGfQ9gp7WTRzt3PPsKyLrMQB66HYCGiFRAnzNUsuKYuMxdVs8sxxPVDDnq43kiPoswSqEnM",
  "key5": "1N7UNW41f2E4YLiGujCXxycKH1ujYQLa377NbXztHbJspLZp9TCzfxkNv5Zn9ADcEnhrmJSxe41XWYrLFeR2dVX",
  "key6": "2VSoCqXBJau7czv3TJ5F18uPoCzMtK4yu8RFEydqvkNJYn2JPqBDbx2V2rT9gEv1o57ZqNmLvzXQDhHq184mdvBw",
  "key7": "JYrpgeRoySLRr8zRG5QXKbmUCYkq8YrgdBfkRzBejqC9fVk8xorFGwDSAi7rMGK1yDy3exk9nvwESDSiSWHyQUz",
  "key8": "5CwyMvAzbtNE5AXLyPbn64Z4i4nhMd8qoxsFKP3Lne9aLbbDeMiEWuqicHjeHvAvBBAVWD6qy3LCD72MWWHv8Ntm",
  "key9": "rLq3TYY7php5svffSXrzZeo1Ybi2vTm6N67PiojD2rd698e3NCfEFartQssQUbCAhqPDdPGidnvzfxjh15c2M8v",
  "key10": "5UxAw82Apej969BdhvapUmwraQCG3KvUrdxZ2iUDV4WocKKBcfcYE3wvHEcvqsYdqbNbVnnvXzwQj6pC8GaKULpi",
  "key11": "3SCXNuLux3DNZVCFfeHy6YTBCePTJybpgUFMwtjcMx4ttm2vC3aAn4L3eAnpxv99V8bR1WLjvGTwXQMKnQYMpbgu",
  "key12": "JD3hN48j6Uof4hGKmbNoVaPFc9exTcF43bKczeGhrjBqjn11gkbTyk6eTdQPbp2tn4ugrFEvrgaKQaWHCvoms64",
  "key13": "5ckJ2ovdnkohp3Ng2HByG5UPW5aW8H2qC1qiLEVZA3CW5VrtmQLrXnbHn2sRXzscHDGS3KjfnxYoUtdAEJ8BUevh",
  "key14": "2wXaXwbEtdFtSPymahEUxbV61WZ8YnMt97nNTzTUxVnyMdAGiVzPncpKYa6jKw5GTUmFXP4KgpbW2LnFa884Atf2",
  "key15": "5uRrTZB6ScuHJ87b71QBFefk147LShgL4Sk7veLqxWNni5YLVvqUsLDy43mojrbqPgi3e3G4bfGtTKcNR7N3Ziav",
  "key16": "56orQmxEC3L6yV7EXHjpJoEMfH9Q5Py6o6b2ReSMzwVoZr1QaUbsoaDFaQbgwkhjRoXef9kYDvgfcweBwPbuBGuR",
  "key17": "51gxn6pJLXqCEs3CY2zJkMFatvKAXj8YgEtVTrQ36zNfYmBfuJrekUA5wNAwvAR5iJ4ANk1C1Gj3npPAjb34cvog",
  "key18": "Hd7Yg4B6mGQ2N1eoSz4oKGdhQoStGYGeFqaRQbxLQ1X6aqGLi18ogoJnQm6WXSiwzGTdiBpm5xCLXvNkDHHNrKa",
  "key19": "2uxRnhL6m8StG9PxdVLo29bNZLQ2nixAQQZPuUpwAqTjntnsYag9YArAVdEdJJL2EqUA8dinYgJNE4BhhyxP2vKM",
  "key20": "5voaMtwsqwr5s86A8B77orQHVYBzqqdYb7TwCTv9Bf12jwK3K59NdkQ6Bh8LcWh6GaBhvfKz3CZ2KskzBsxhSKew",
  "key21": "KGFomdBgtX1VHAqLMZRtHdEHbisW3uxiA9zUQ68xXrV5axXkqTTfR28zJaXCG2ErA4wWQvLU6AjAE9rhXLvxR9U",
  "key22": "4UxsCjfoTvapPmiKxesXEfNoks7fNnxQXF3yuckMvLFC1mJSR57pV1EhmMJgW7p1E47Jakwez1zKEKxmpqsHqdXp",
  "key23": "3ukt6Av5fP1PkobgLXheRrAkeKHucs3y9MjveUmj5hZmyZ2nQYXtYefpQnNaTYsDyuEpWiAvT62PXhybnDARmz8S",
  "key24": "4HrNdt5F9s1e7P6k3aii6KzibD4SdNfK9CYEVf6Dq6HzckAf4ytYchcy2x9pVEXQadj5pjRraQpUeBNJnarTB9Hi",
  "key25": "4RU3YqBDxn4YfSznb6cPbBt8baUAgqEqRJzjjs2ghSZCXx5JrdJ6CVV8S7ZX51uFG8pjjrCLVDTy8MeCfnrfkWvc",
  "key26": "2vGpdu7WG6oBrGVbXyj5uHkHM2onpgN7qv3fT7JNGo24KfVH4uciEU6QMpgoUg2Z4tSwbLfKdEqP5zkBp68stxmW",
  "key27": "2V6yzrFcv5L7GBy4KK33B1TczhDxx3dqefauZbkfLrBEzkcFag4jXXHE7qh2vUXQyaFY4nzZ9TDX6FS7VGMW4dPH",
  "key28": "4k1YkvjLg7oTT6sdkQZ4JXJ45A7TXXKFzf742imD8Zzijg4NhNzaVeDiHn2mKhv7jUDta34i2Yb9XqEdoXKb4dfo",
  "key29": "GKcKqTuB5rLe2bZ5irqDGdgPjLZFC6NwwAyWHx4bvkkBkkULdNm3GxfeHJjFeLUWzK7zR6NtrWjBbYsdNGEbHpJ",
  "key30": "5irDvYtUZdgbvp1EEfTNQZTmK2iHx6v368YY8EzE1XjLygW1ihkngRmB1Qcg6naeWarxTeRnGotQPxPw7Q5jcYS4",
  "key31": "2D8bJnwgix382XmJDkwsa9wD9s4TBVpKfAZxWHMxexZCR4shEqhQnuxjZghL4YayyvHwz2ejZFn9NnanGKRfyfrQ",
  "key32": "4oMf6ndgZfrdoR6MHN7ZDTKRBQHVxsJ1mAmDgQNfoDKmMXpkoAioDUfMYQy6CCewGyGnyhPp6298DxCLDTkkngaY",
  "key33": "2EbcUw5Kht3ArFxxwzA8GAQPD6LEqJeohueaZiGZnqWaL4u5FweYuscoRakZLqfxizccuV468m61MZw9QquYyUa2",
  "key34": "4xjrV9KDrzXY5WSXBbj3Jahsjjrz4YtmH5UfCyWgavSgWHT9yJ8jYLrpWk2jRXTgDfTzVFdZhpUqcfsQqFocQmDj",
  "key35": "29xUdR71cL4DBH4aeHSLnXaY7DqKDUzzRQrhBNjzhCLjb6ZYw9hBtEY1dL7V7dcj2gK6dp95z8sKCFkJU3LpBEp6",
  "key36": "4NfrPGefTVPMUyKkdEYyXSv5FNUC9WH55i5ULkQpw7jPjkR1PTmL1U2DnRt4p4TmMYqj9eGcd8Ct2WJjhP81j9AH",
  "key37": "4RHKEn9k3NR8nizL2gECoTCv5e86Ax33DTQdaEfXR5n7J5D8bW5LsEdbMH5aY2e2TBQeciTu2v1RtLzNKsQ6Y558",
  "key38": "2kjot3yceaLgBgTQG8dWUyCbiaBp7b2HuRV81oo4J78aUmdYahFNa4VbPZsDY2aibNCmpbmkzdRZuzwZLakPvcgf",
  "key39": "3sXqoC2G4MJmhAnEiDqrsT6HK4b6tj5htk8c58MAWKqPLT8bsnv9Wec6xxWHne7P8MncKUjzcxwF9qecgY1UYhA",
  "key40": "pr7R11uxS8uNufm6ztmDJGnqhvLYFDHFMYzUUmoq1kXUbqcXp8SD942C14eciRHUNLx4V6EBsuPvKcvVBJHo6HN",
  "key41": "2jd6ZTku2BJYB8MijdWP4Hjq9cX9F25JvamMZJ7YxZGmbtt5rZpUiPqkNywfxEtGArFtJH6TJNA6W5Zgi85pLjdm",
  "key42": "4KwYvW4PJkjmCQW1uVQfEt3n1AG3Lsb7hHovYWCMYGZ5J3HF7XQxBtWfp6uULS36Rz1KXw6WECqgzFqrF1YGevcm",
  "key43": "WF5vYkkFGfL6Ey7seT5jY3DX7DQyPmcVrGK8CTWRtXQHraK9Dd1CGnNrnVQTQNbAnjy6wvtubUeuyv9TGbfZQ3P",
  "key44": "pgJfdcAq5SewZmGkxDTMjTVNFmr1tBTFDZXBc34YoXG966CH4vqAQxF7DkYV2v6m6vMGoGsfuSSCbZCZTfK6HYw",
  "key45": "3oqQ6NyUaT9UN4pKu58ZpCuHCt2S6bZrjPzxghQLWPFDjfWM9QJewNJiYJ84bgpr8yV1aiP7Bcvo8KFdEcj8fWGJ",
  "key46": "6zmc34VRTgdRbEuwqWKp5VveqDzNGYhQfks2Ps4QJuaQnm2fd7fnT7epYbdTEQGsoGFBRwujmesL5NzWNCatjqx",
  "key47": "5PizvcXXqRkvxpW8DMRjrBLsBJb6FLsbA3U5WjmeJmRZA1PzYy87z7LEtrnokt8z7akZ7KSwMYq1NPNax7gX7sd5",
  "key48": "53rVR1Rvd9hFhxFK9ShwFVHnoqVvMCdtD6X4ZzH16brcMe718Ywfi1Novi1FwKHCn2mk5ETdkUxpwuj5AqdCRGmn",
  "key49": "5MdeskucbVqM5ue5eQrq2VQxF53DEHfCU8A3cx4TkqmZyNsmETbKkKb51F8c249MMPrXKpeNhpfRqXp7hSEr87S1"
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
