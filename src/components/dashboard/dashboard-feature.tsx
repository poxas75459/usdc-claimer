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
    "47tg7LkNZb1V3PYvtZQasikw8Pbiep5e3dDe3xG8mfkPweoGyaBDTnabHfF5vq4X5yJeeXwdLSYMJqkEdyHCR7d5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwdAQibxEqEq3AYNm8yRYHaBQBQAYTftGDU5u9HuJ1sVDfQoVgDxo6wyeHbNMWFRLDiojGEpPak6WXhg7DBdktZ",
  "key1": "2GCiD7PfMqy42vghbRg8UZSgnXyHfJb7na3Lpx2x76XyuSdtXE6FRQddcdXSBFvpLa4FFXiMtoaVBaehRJGfXutt",
  "key2": "2hq55fYBEdjdkmxckSsuQUfeBtej5WC2MWn1LkbjcmtV7i2PDhgnRR4X4jkrC9XnRJ7W7Wug3ErYzMA3f3BXsoe4",
  "key3": "4amHkxkTcPrWyronFn1YgzEEuHbQG8iibav6cjodxUzhjnuemEPfVB53NJUkteZA29xwZGCVWe1aPrPbgQ4zo8XL",
  "key4": "4HAThFedwaXG6gE6TrSaZjropFjF9GbAuDNZFxszwYEcHsNGftVpQSHqqJN5RFNJo7tVAdAmqpF3ieGqYJX4DhmX",
  "key5": "4WTJwN7dJAKcjUsoH7L8tsRgabJhjveQgiu7gJHMFwZ4ASCTYZrFEKzQ2L7P123jzecRggAcva4hkygjmSedptzb",
  "key6": "4DD5mr72TvThMXrcsfnaA7gdaVnfHMAzDXvSkK1T8EGAtwU3hWmMZnComXp4K9bbG7fD6vFpzxm4jwxj6qgxtW6B",
  "key7": "5F8b4tEfbpmtoiVvd7yyCzzjC6Pc6hU9JAohvVEuBmjXpz2DQLt2h8D33KwLLu8wqR2VyognATTiRu1KFLWtEmQg",
  "key8": "4icc3yaJFFPE2SrzTqeV9qtkG2eiKWofGHnXqLGaxFNVzMz8UU55h9edt8xeStrxyLdNAotk1bKsN9gpNNLgq8eN",
  "key9": "5dMUPXYBHMUvaReokxFPtYW8K8YrbAUcto7DHun1nKkHvMw13b3dhQLkXZ3YVweCfoJ1Po1rXtroUKMQ79kB9iTP",
  "key10": "2hRQ2KDrDqJJzSE5dMnxiQLedknUJQNE3b1com2cRS8y6NyowP79hXmQzkL5RKEAbMWXeWXnDxcRVLti8wkbjxRx",
  "key11": "5nPMVQgAAgKCzLciuZdZLVRJfthXwAWEg4Kt2FCN2ERR8H82xtzL7jZgQXn3y6ce5FyCx47UrQpwD5jXxmYuAVea",
  "key12": "5RXpkpiYaM7GyZo2PHih2ZCkCpBP7F6ZiEsNHmwbnESEdb6pWbSL9gWMLjMmNFNFGNjrhy26C2V8TjJgqtdbv8Uq",
  "key13": "2vLAo1ikAthWw8zZuqzqrNQ5HhA8Ctow5t1ptZkAJezncvE2z6eecafrzkK15urEbuRjeQntXL6TB7Z4qTL8Ve8c",
  "key14": "2XouSyQZ65VhHTzGr3ZULWV6J7qAQB2Gnnp5Y5joVEzsq1gBBdJszZxgte7VU9H4bVzivm5kzp4AUKVQq9dJy7ui",
  "key15": "2skEr9UrRRDCAzM36rBYmuFcxNErhXNGr9d3DBmHGxNdf6YcHf1RmAwvKWNc58SQmucDAJF6kGZKnZtv8486TR3E",
  "key16": "2Sqtp1jrhxs6pPf4EZXB5aco9APBESKvHkAQQwqfNcQhG1Q4LmRQLAeb2idZ8z6Ne9p5JubxGg7AEhfmVvgfPTGP",
  "key17": "2w4wuMEGTeKSkjeKVGcd2L4GRdjMYZL862HYFkQug5xjqhjMHXJAwhKs2gwx1mxQVCqe7UG5bYjnNK37bs1qHTJ7",
  "key18": "3wnJv8JRHKBFh1xJiS9rpEEB5inPehXGEsHtjPK4W4KpVbdHikbzqBTrKtrzj8tNydGcB66G2cb7KPX4QnE6MtKJ",
  "key19": "62TEDeg3wfBLB3ZvXEJPup8ZQFufbmXNLfU9oWyjQnGgUXvaXG6Zi7gW1XewLVwTNcGbmypuXpjvSqsu2tiYfj99",
  "key20": "4hY52jZxhDetCb3y8xeDEN3DZ8Z1kpQ3xUJFQpCiyTzaSLofiw9FSDa3muRgLq7jEb8URyizsz6LKKYdgxn2d7zt",
  "key21": "44XdkjATnGkj8xH8hPuver9dcANpcn1X9Nm7s3PnZaF3VSmKSvQpXoe4kVMx7xPb1oExXZfDmkiMN7n2meN2QD1D",
  "key22": "5Z6eEfsWxcCTfWKF2APVgbPPTyVpsabBtLVjiqTUfQpyL2cLyTwQFRGjLxFw3QdSY2cTicSjGSA8JLCApDuLdWT3",
  "key23": "4oJJR2bNoMrPWwWoV1ScnfcPptcsftvMJbrD56juiGQuCoUfPqArEd4p82qENLsYHQj69D4p2srJjHoz5YxjZufV",
  "key24": "Mz1rLW9fRhLCrDKQnx8kLgocjmp4n7FUedPsQjG1FsvkspHp6McWwWNcx8eANrXDzD4VT5Dc8BdXJN5WXXPMWhJ",
  "key25": "2rMfHG2Z2jGJpfQ45dBA2tjVQVgcivgZh3NVvGnLPBEShWxyArUb81u378ayitMnYeqmXR67EQn83JpspzBeSba9",
  "key26": "4uXyadgvUqXkvbbQfkqzWunqPSXS9xCWVGtid9yuvgJHPkXz2Hwv3wLLGZKihCmiFz3ftnr9peZKMMaTt2NEzM1r",
  "key27": "5AiHchTxZr1W1bo6Vz435fMD5DinUxaQpHQjBYKKaHJZKaCpXv8CxHQ5Jvupp8FiQ3CNL4anKM7vFxxF994abQMY",
  "key28": "2yQdTP6uY1B5onqwm3EGMVHwYzYN4PrgYV3UPqbdm3fKg2FFjgNq2xEZJkB2bJyZ2HhHvBn4N3nZisLRPJnBToF4",
  "key29": "5u8eRidmgw7JJLx6ttWw7L71dPsHCDb6UoeSxGwcPd4LpauEFP4YUzL6u6Q7F6Q9BpbdotY4Wm25bqN1sAongpEM",
  "key30": "5pU9VjuRyR4qeffh7wsr2TrsFx68QA1Wws4NLAoBpPBaERwq4hdihDrgZ4GtTyMEwNEn17GAVUTfseLhUFW3rKSQ",
  "key31": "6K3XnxERVnPMLuBn2DkQGnPR2AhLrVtAuqcxPQQXi7DRFSDNT7oaw7L4QbEzLzKq8Zaf654BHjTXFaP1NxoZFwd",
  "key32": "2eekv1RhZ7oWDnvgNdkpF127yzuZyNoqn3qskd7JhYzU5ELaSTyN1TNH9VGX4pSQv3sHpdW8LhLH4Mm2L3U9rppT",
  "key33": "26YiiwhD2WehjmqdPurEaqmMkT4nvod2b9XaTUW5RnNZgaMy1MQgjEKweGouDA569MSayRPDzPQzDEe5NK2HYCLX",
  "key34": "53CJfWQ4Dpxgkq5nsg31Kyn3yFPC75o8k8kVEtiztMCwGEZPMNCwz3wgAPpPyFTPT1Godaa2iTHpSd7VsTejrgvY",
  "key35": "4aknAyPeyMCtbzv1j6PWgANJj7GdvoYbR2EQ4wkPkAM4GiUubJa4dCtdYgteuMSqDwcfsUX7smKswTYPLLAgrGXP",
  "key36": "5zEKftFgCj7RTEcQSvVhPomvLusRhppKBHzCedVEAtT8vwsAy3FgrncwmNCuAxFbu2nvtjgyjQrXHjq9nFkEfbna",
  "key37": "3D5TnfJD5mmJ45SjhgAk6KdLnXzLkbfWGWEZH7MSCGA3CHkYWSdrCU7hcmiQbq9zCWYT7K84QpmiuDgGHrf8tBSN",
  "key38": "5AyGmdPh9swjd22odQrfhBTZGR2cAqQxeHqZErzNQQYx9wh1rQpaP9SvFavdrwpTteSdk3AN4NGvR1TFMoDQ7itb",
  "key39": "kH83xNTudHULMFwYbE9SP5qnHPCsyt4VVMmr5o7ET8ij2AabBNZxpXdwtU2HpXzXzfKLa4jUUaJ38fbLHmZadkB",
  "key40": "d6rF3Yywe8XG8oNHRB1xbxASYWC2QB6iYwDKbjxKrXUbrQQgKsSsrEtQX7YNSynA2MhrqvhFwYs1xny8y3v79zM",
  "key41": "T1yoZU1AmccNmNW7oPsxs11ZM4ewpnP8VKB7QNLucwmG2rnRdjiRP9VRd1N33mDZChFYhn7y4C4JHwmGHq1spy2",
  "key42": "26ZM9i4iHpp2WtuBbVHtQQ3iSRWSe8ut62AaRE2xmtEF5b4MgqvYfpuupBAgAXnfis987V3Ke3pE9sdQvgxMqN6a",
  "key43": "4bi1DJibK5RzAqJA62fWYQFMwkVGswLTCxCrDRobwLYZHeU8E7MaZtKmHxQDntwKGvtmfUpYhbaAdZwXHnva4Foq",
  "key44": "47dRyET8XLLbRtzWw8CdrPWf7qtStbMPaU4Mu7nLpwptCeoTkHEToWPE5J791bjTZm1Mmq3vrbLQs7GSumPeMTsC",
  "key45": "cL4rbaC5tmHDA9EaT3z19vRyXHpbEqkm63FqhMUyBb7toq1sFwb72YZ2M5bEXY1BhVSr9NVuEuroXf5DxwGSajP",
  "key46": "5dimJMCrCRRwDzFFXAX7WdeywFfLC9UFUmagQcF2xNucp5oDQtJChYGxuJJicc5EsfymPavXR3ofNYsucocpTpnQ"
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
