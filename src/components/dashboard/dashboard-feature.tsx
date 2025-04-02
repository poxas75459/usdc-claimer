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
    "3jgqPTae4foPuqKoKwujskhgrxp6bwTK23KRwixocNyRVP3pkowmF94BaxYo7FCzysLBjeyEk2Sx1RgGmWJkbZv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29D6V6jfWryJN94zsHJhTnfu8Yp3KoofJ75je6osyYPmVJ265eewcpC25y4UdCwtyxcWDRMMChv63ye995x9LpUf",
  "key1": "59STf3AWDN4AzQB3DV4ZgACWaKQQ8ZAopZjUZAMkqdeA7AU3LL2Yuvz8p3KNjBrDd5W2JCAXyikfMXYxjfVT8ihV",
  "key2": "57A7neyJNa8rbBiTuuKaqSPrjZSwbyxNDXZHpybQMXysQm4N4ZqzHj4SzFthHNhveycbtrrcPffqAwSqi1MsdgXu",
  "key3": "5qivpeFE1wvkpibXkD7nDx5Yanc8C8qJDPepF2BbGSWAvZeb4Qcfw5CmY3WXiji6ZsFyViJ8352zBjTjKUfhBSaq",
  "key4": "ydH113huxnw7hfRtfCbT4eDo7biTFyZVBFzWgtHEQ3pTgMCNT5o17Y1j2VfSSAjjjrnYAFBFX1pjL7UJvmUoJR5",
  "key5": "5dNDeGWSkbZbTCrtZjiZjfnYfRr6PvmEzCSq56x8whvr9VSxbDRR8fdqKZ9F8pcSu5uXV5SkvGtZXZ5mnacCG2MN",
  "key6": "66nXf1W4DyYmvxjPai6DkR5BvqbDkbYMRdUi3AXKSWPq5Z3LoqswoXd6CdcZEchR4VMDjWNXJ6MRUKYzAnhuRyS2",
  "key7": "JxHhj9fhMUJRyn5vQHyN5yYw14iumEpXzcqZFeLp6cMRDymUxW4r4V3Wc6xKhfqdQ7Ywzxs17fedZxuvo4sR6PG",
  "key8": "4sNEo8gAmaTXe173fxiU9vCWDCdWNko7PW58Hs3x4Q5wxhAGc5uzjZRTYUUoVUdkJ25UWSzgXvmjW6jKRaWXoMMB",
  "key9": "3yd2c9mQaBVxibKocTpUUmxai4oKVFyoghdJpbysVP7SrVdhVM6MaMZhx8YZE1Kx98rwsgwHA99CzJtE2m9pMH4F",
  "key10": "3Gvxm2AoVZ4bPrWjAh7uNJ2vTLLR1jZ3dTLRzHoRdQnrnHckd9fWvWaBtJNfwhFNL7F3ybmytpYjnphvbzuvtSDC",
  "key11": "2KNGbr1w4zJ88VQi8UFxrNjVNhHck5XvK4yivU3N7w8NJsVgjhgwxy1gCMbootwX5eJ3rnekagZTVNq7o9vAP2hy",
  "key12": "khN3tWQj1Zt8Ci9QU1JRQMyMs8faATAuwEwJsBm1uW7VoCRU6tFJNuLdYXpYpXbX1LHY6ZSytrEC9iEbULmB8RQ",
  "key13": "bLoGP4TZwLyLrTsXtnembdhPeyhX2qwZykzm5pxYgnqPjFNeW4rmTgzs5q5uFtjVzC4jh4mnNcuuQwaU3KgLKAP",
  "key14": "5ZAwDZqoVTyHFivwD2fuWJR7PGVokNwfWJRK9Hvi2AdvgDEUsK8ViPWM4SCiMBF6gpzkHsreZi7RzSUscAqjhBrx",
  "key15": "r78c9Tx3a5S3te9Fmmcr1ZnqvhUfFkBs4rB9L8ey2YmT4LzrLUofuYn5kN9tBRiRqdDyPg39aYANJTgDB5qEPV6",
  "key16": "5y5ZhEEmKgXyaC2ZciKrk3MLEjKh5WZujSDTcPFBVMxWkgE81EKeuioqc6fus8gqNEw2QkFDBN1uqovqg5Grrxa7",
  "key17": "5eowDUL65xqW1fhTRcie7t4GhaGnaG55yiFRDQNgtMg1ucgWW6v9BiPLyPxSKhMJ16BjrHiNDXqpmMhY697D61EV",
  "key18": "2E8J3mSktL9eoKrMp2f4wRaAwfqYAkc59j12s78iFN2mpmTC6vrKTfmdfgrankLLmpVevr7S7acns4s1GPBdEy35",
  "key19": "iz6bAt6KTLHGs5uxorHYD3JD2Kd4e9QHE9ZNKNYgVgMLxpxMRfw5SbtNKWVPVRtYrj1U8xEb1JAQfmY1gPzZB1r",
  "key20": "48CcuwFBV3qYMAymccFnEDK9L24AGaqBXaq9N5HWbmNMer9fHGFFQRkk2PnExPmKPmpiCaMVLZcFkvW16Lb1hj3j",
  "key21": "3NoR3NKBq9H4QefWYLfAPEUARAWE9yJqGgAULQSAufWL8MhXLtJ5iSZyYmzsbDgSizyadSY859u3NqqhbVygUMsw",
  "key22": "65Sbj92j6yG6eeqb94p9wffGuv5Ygjp87hirDbhrzfQNfufnrfDZDLBFuidzZ9jDCtKeJdC9JRrbfqWpiqUrQca4",
  "key23": "5SwCCnjk4zMy15V2TeYYzbErBudayHoMjVdys8PB2eRXATcW8MzkpXepmC9VaGNYe2SCaBq85iHroQyoFuzVfC57",
  "key24": "4SyJoY3sv8g9yU18vnN7vog1N9ztse9kLXGiR7JdFfG3vM5P1X6yWptB7j8ZuKqsxB3c7ar2guomzyHUH7kXVcbR",
  "key25": "mwAn2bmKEzJj497rgaUD4RQKj63oS3ByrEpxyi6uppkAb4yUEuVQ7f2tCwVC4bd6nkHbhj1vt8LkzhDX1jfZ1ow",
  "key26": "59aCvoCVvbEaHCRfBdd83rYASgyz7PmsevxazCuiuWpLKuvF7mWjPW8NeaGfB1CG5osMy4PXygvMPfxWMprNLLe4",
  "key27": "3uADxzqJxbFT1oBAgwFtpXcG7DThfUxkDiDnUDzWzezVwHM12v55HsDRSRvUws79Njvj8YKLQR2YjTPZivXp5h4n",
  "key28": "2MMRS5Yd1wVR9o7hgJoHojyJ67L3b4y52TMtLmMU1HVdEF4rmTgUTbyuSDTB2awzdMmkHw3hrtW5M8unwWzAp3VH",
  "key29": "2Q3EiGvAyStptHnA7U9gPsdHFSaodfcm5YQ3UVvHrWPmSUto9fA9D38y6oVMFjhJDkRXDf71gbbGu54DMtxQQGEv",
  "key30": "3qF8QFZySMmXKqF8YQATm8kGMEe41NLQUqEihyza3yWe49D68ogNiLN4hK9CWsX3Y1EavknzwS6q8VbAGqyahK7E",
  "key31": "JDEmqLyQYT1xMYMiCz6k4aQsR69EuJNe6ADVvk2K5XVbuT7KJjBYY1CqvnczQwwNXbkDVTNyfGtxwJPRrvR4MTs",
  "key32": "2c5Z8cnkd6H1cX6qTu6kDFMjAxLTucqe5e2Vtfp3sSF5gurTa8bouJdSryy7hmCLVXWkaBUFYkJa4GgxXqQ7utuY",
  "key33": "3gFVno7qC96maunxpijmLMx2pEh9bwiaqS6wLDdx3JYLnXDMM1nLXfizk2UN4WoRMF9JpsYHmAgxQXmJkY19yhWR",
  "key34": "5PQc6zoP65bbbg49HH8XL6bd7YrTCtf6LVYrswAKiCijpDRo6T2SmFHgUNaJKAqhQ67sPkx8ic7oc8TrNNLNUoXW",
  "key35": "4kRq3b1DRTVMG5zRTxkrQk7xjUWUzjcdDnSFCbntCpmEYCyhNPk8GUBSHotraF3i1DGxckxtFtEwMWTbnofaUC9K",
  "key36": "4fk5gvqxvUHWfaEYvDM5u6W5zNka489YqYcy1YKLGFbKnE9Q9dcgtpTdpxFBbspBfwqar6CJ9CqJxcHrjjgsz4XZ",
  "key37": "2VZfoSghyaoaU1YwGqK3eh6ENUADsgwXSA16i2X7xx7bVCVLJJGPCJdJjmyyJ981cKDwuDgVYj35CrPQyCRfXwha",
  "key38": "48tP9peSh3t5WNiHcMrC2FfRhqsxWAdt13nsXSosTHsRS3sjLUQb5N5qHvvag51d1yhkrajdUN1R1ozAdMfPsTNA",
  "key39": "547ZWDS1pQRJvp6nBCpFpixGBnNbTeiXoE8VFhpAvSxGuN2N6Bkos9rK89YtKvsaKFcTrKC4YAEpzt45C8qktTAi",
  "key40": "5PGSMZ4nmhsTSaT3dMFntXoAdCKzg4Sj9dZ6Mvic4nffw3aW6t7W9UQC9cCgMbBxRvgwVKRcn6UAJErhEacB9yw3",
  "key41": "4rpYPSUM2vdFjTYUxPbGuv5hD1notuxCWmNifbGJCTfRSHgQ6yCvVRXGxYq81LFuyi2EVNDVZa85mcWxoZUsSB6K",
  "key42": "BnDvmnkTRpo7Hf4Wnn46DThY9EeHfDebAnXA7Jnf7A1PxftG93xrVcBJ76TAnoUjHtjcaa86M5zC5DUhGFxWwsa",
  "key43": "4hFep8d2RqhAtJYvNdhH3yY86VpDJtraSzgHFpXBfQJ3vRQeQfjcEwJSczrJzenkbWvRUCRpKBbDC21mjmenyHtY",
  "key44": "4myp2mWcwMngyfjD6xqi1HdWG1Jf6GfcUk2VDKEUjARs8MQ2ewXQW79GfyfoUFmySYM2sPvomgmXxrYxpPrWG8LD",
  "key45": "yKLnbmgbemMT5nTQnG4TPj2MGvp7S6AA5Z2virriXA7X9BEXAc23adGMS3vHqA2TeTApZcS2JYLpFFe6G67HUwv"
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
