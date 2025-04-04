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
    "5nnxyGY41WXUN56ryzvoDS7GZKeuX1da3UpNobMc1ccpppPttw5FdNqZQ4SYKHGum7TZsewsqBb8TVFUYii6XRPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTuxRQi7HJKxunfJkxbuyHPGvt5TQ4RtmQj9UZ766LzoqpUk2eJHBLVaQZV8jo9EwYVZ7GqG7vTXXQqmAJ6EJqg",
  "key1": "GboPqwuPtxStwzubpqJyeD3yELBcYLBmWhVBg39QfwhJSWK2fgqixxbH8YqKVjWtiEs5bVoQQXKmekTT7mb4wux",
  "key2": "3TvR1DwfezKctfKtbg7ZLf4S2SQyDhcU49cL9eohPNRjtJJSizZr4nQYuaA75pDqaQiGc89t4PLhJEbEPnSDcnKo",
  "key3": "2QTFdNDJuPhgTwpg6EU23zw1D2pdK7nmZgVf8FqVu5Gmm4NG5jrywc341EWcNTUXU9RKQZD5jVrCZ3TyJ8RvMyoT",
  "key4": "4HG3NSXeuvTuqQ2rQy1iJUtXkB1cV7X67AZaFf981DwnZuogNezx91jQGxv5vRfeXLZ4NoH5FbjjxXct1dPx2eN6",
  "key5": "4YXpKhJZesQWA9vxwJ3HaYJ8BFjftJ1MM4JAPfKf2zfMQxyeFhdmz38f6Su87mqHgbm795Jd4TzYn9y52zdg7z5d",
  "key6": "64hGmUAkKdwXavbtP3fdJUyZ5yHh96ko7KgtNDY7gQDEM99s57pqGBwXK9u2MHcHWtN1UNMpRHNBemSiTLL1Yvz",
  "key7": "3TZ7aQFuC6gbDAJGWneN9zpmyZ1p8iJJGw5CaMjEc6WD9BbGhBHxeHrWy4WCzZEYT9wesYr46AaXxuZ9t6aF32t4",
  "key8": "4HSsTSzfNPqtq7WeTXh2P4BU9SZhTcgLA3315vjWvUQmfG4nqNVmsCBUWFMhJ73Xabv2qH6VkM3XnDZqVa9QA9vu",
  "key9": "31jKDYtV7EVQvXHrdZspJtsuTb4QynTJ3hio31MEWPWSwWFM8Q866yUbMTfAJmNwAJFZJjzHoiX7QYdzz4LDawa8",
  "key10": "wx9d6YpVHU2p8wAN6Upz45ad4udGrx3zQqNGBuR9Va23rSANj8wFEqAWwMY3huzqnKNed6RJNC5VeFnkjipzxih",
  "key11": "33KKq2pYv7CVoRqFGaMftkukx6XhzfewSEwGutopxeRduLYSp7QQgeU7dwaqQ7WypL9fH9Xmmcr4BnEVZUxcewUZ",
  "key12": "ZvDh2zEzP7XteFnmqPuCg7fVG2zZLnRcDYMt6KNkKsJh73KDKqTZGVabwMaY5FYAwkDsRRxVktaHHarWhZC5XmC",
  "key13": "3HSwZMMhQFkDaqatrcP6L2Wb5uLU247tNW3h51YePuTuN9gUVozDfqfvrVHPQbFLYmUxUfpgN1KmpmfweLD54bV3",
  "key14": "2uYVwqd5owFRngx3XtqncUPMXNwmUUENfkVJM8w3j7ji73fyPiEsE3pkFMXnyTJyA5psfZGUGPcaBs7TnXx4qp1i",
  "key15": "4iK8DLLWR1fbM82PdiZftZsyBL6cYVaAsGwt1ruGzVFCFhrF9RVSzdWDumVgWh2XRe6EyetEzGdU6Ub8PJLWzmCd",
  "key16": "3D5bmkHpUm7KNkuuw7jyWKX3FzSkxZZg9dFotbXt344iroEzPLBHQkj7rA7QUckmfcjp16LBgSxABKbrtpYnS5eN",
  "key17": "27vyt2xmEgD2dxUMkszNYHp4KN5Y1gMCmnmNeL2gStF9Ngr1pZFco8pQ6yYsSL292Gi9Lom7FbnbXSEqHDrWbpod",
  "key18": "3EWfuYxDCg4BqxSDCdtNhTRt9YFL3ouaAo83ytyppWcxT7FjVHhT3RepnHN37WF7uWFVB5qZZhsLaJHEnF81etr7",
  "key19": "5A32xpR3pN77Dq8BjPgc7uxG4pfxQyuTuiCkYfBEvohgNwCayU2Qfu7nEy1QTbmyaUPDoMk5XwAv35QbSKk2g2VV",
  "key20": "2fJf9RD9PtkL7H2Eo5MSPAmMhR9P3hoCXhYbLyQTi3NzF1FhqtEcCh89FUeooJWL54bENuQGV2UE44EpsjF9jrUF",
  "key21": "4Y9ips157k94VnoTtA4zDQMjkK5Mwom8kPwgDwU97ZqXTDxfHjQx9BWjpQTyw1QZ9XhJQkRYvtK6JjHZ5H7JyizP",
  "key22": "2ydZdzENRvd8CVc7RMHkp2VssZhziERJSve1fCert4fkFv7rwgP2GBCRQ6PiJY83BcwUuH2tLmLW6LSwMG3TtZ9C",
  "key23": "2YNC2V4bi1ggxLJAK5bnEiDztFkNWMzVLLMzfkXZUbpHZqQUFnXw1Anz3hFPxUSDS1LEZ7HU2sSs592Dd7ksYSnF",
  "key24": "4zZbf4p1ZsT3WbkDZFEJVy5usNryoP4PknvAPiY75JTkiEA4q2FS8mhaz2R9fNtf9xrWvAhQGRxX4qcWr5qZwesH",
  "key25": "3zpLAPzpJ4YVeKhisbDvX8jXWLCxkR2A72PrruqgTGVyMgyrQsXTXHwQE6uN92Fqh2hBNG9uii3yEBdJN1Czn8zR",
  "key26": "2diLWtdbjJCC8e3JAbfCwUd5ffRubkBGPscPM7Psws615YLxdta1YcjqxdZ5xLrWhuPEKqyTJqdqegQiCrDLBKG8",
  "key27": "4teWU9xxGzy1GiuS2GPsRPADY8hSE49HrwhwSsjcZ6QftgXULqmrb8yjp8EA7KFwudCYzzy2faaxZVHhKpxSSyRt",
  "key28": "5eMeJQCNmvrQihhJv8fBQJaHtFUBJ2sYqwDj8Nex9gM3xkswDatzTWuE7v3s7YG2JQvcuWyj1U37ukCzNkBuN55A",
  "key29": "4kj2j35RGZGD9QkwbNAFFT9bEXxuKzqAQ8cbdSGMEdKp12qSggWTzfdPrXCkujKxtkpNnjFFR3fHyw1QitsJKoXd",
  "key30": "49mgx9rUvmeYMpckQCZ4CjwfFMVjTZymjAvDzfzUfDUCm21N5oCBCkAcmRHr3EoVQne5Y6kJZJ9v67WcdtuP1Qay",
  "key31": "5kXWeoper8SSLY1TPVq7tJhtPkNTiQ5e4pDoGEGYEZqxHDt7HrZRfJ3jkBn84fkB7h5V7FJjbxWuP7qRoa6NRncY",
  "key32": "4N11cL6a2FLHvJiojxBkQk6o3ngwRtYcqs7H2Mm3V3reYQqoLeUA5yMantJM5Jo73g7r7NSdhjdTGrTx1Pz2Pie7",
  "key33": "31dSkrVzUDHNw8WA9NWhupqc9vQd3sVZUkw5xhieiEqWxy4cQhE9XMLbtxVzibcVzC3JeaJkeAjv3iFcnwRRSKKP",
  "key34": "3ovmSfsSGMAnJ1UfvXa5sWzxyRqgYf5Bj4UwsftqrUEX4EJm3n72ifRh7fSm1vaMo9RMjN8LLTVwYvsF6xEysRu4",
  "key35": "4LT95oaFf97TGSDL2cRcqpLCiXJoZUKVAMu2kDRZnrrtPpVPMpfqfiyhtu6FaZUu8NhRkT7YwcfWiv5uPhGJKBYV",
  "key36": "2nTV69tRYMdaqmEi3Zn4ddvBzVEJsuShkS8CBhEitGmasdqSQ8vYs1YD59tgWsMScut2xYcbQt28mL7pxsBbQGFP",
  "key37": "hDQcM7dEdnRuUrrgVpxeTMYBwdKLnmsUAuGjti3uSUfY5tUk3xH3QvKdx7nRLsKCAsU6KkFdyVygTjLG1DofTX7",
  "key38": "Yq8e1XGkizVR66PTqwVAfLBs2HiCkJ7Gcv6wrSMwJ6adCgLxxXCkfpg59tdSYiQjAqXSrUYcxZLkXNQ2JbAnZTx",
  "key39": "5ZV7ZKmnjhShKqHoY4CE45RQWPPTsEbX3BDWZtBRyA9GqbRCmsnpqNqfjjjaXT9bLPSRYownc8EHp6tYPU1sag7o",
  "key40": "5nSLp2smZeLw9iwLLzRAQbbhBmXGxNshfL7YYBkc33tB4rkJLLfNAhHBVcJo38bQYxpUiKSqBQAQAyhY4nsYTXa4",
  "key41": "18ZdS9HmK7EAf25YDTFMbY49eHZ4nfSKB3dg7dqWXu7Tcr5ikkvqfCMqWo2SwaSWrihN2wm62nAEm4bbSw8Ejuj",
  "key42": "2vPQbAsVkWATWpSAKaS1yZBssYLMeWpoJDTvf1pwi34Adr6fG7yiyVBKnh3zTGPiXxujJXv7Vneqr7wrQ9K5tXvj",
  "key43": "fYq3S4cn2k1GJNagPMQ2DGcEGNduV8j5RhNHyUwYDhZgyTZCF6n57KKM15wvLyLPm9QKeWHPqf4pSNSqcVaQxa8",
  "key44": "2MAQjYpFuBf1asKUi9sR5S54b9Rqx5SAaE5x2n813mqicNKeuWjLKUZZoypfHKvbgCBDzhgRbP1hmzD2WgptPpHN",
  "key45": "4yhiZadrz9X4bYjZ5GontJcySyjg43B5NrhHpPEcFdunGtAyCTCZxLa8nUPfBUQzpJLfuKkKVxzSiVJSyJbjDzea",
  "key46": "3eeFPaVTtMAqVnv66da6bAD9vyWJYHeyyfX8K9QykP3qUwNucDYT9XT4a8dBhCMVnaPGAoqyfQ9rCMKCcc1Bu29H",
  "key47": "5GA1Yfyc4Bc5U7vPRa1yr5P5cAE2YLW6ZBk6BWyDa67tXUcmGgTW2AqjyKt6JFrGA66apY8TyFRrKNVQv3NbfF8q",
  "key48": "5znSMiTaDxAzpfG3hTsWKEQvk3t4dPeb3SLhcXFWYcuKpnZBqetcvzo3cEnhRsPsvhbSDZ3VqAd68YUwGuJ86UN6"
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
