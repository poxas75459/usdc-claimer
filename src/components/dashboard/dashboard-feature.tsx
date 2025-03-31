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
    "yyrAHrRCcBi9RL9N7uSCgRYv7F2J8XjuETadwrn5PiTRfqfAySWWeu1EX1DLMpLHWRLNbbicpUXcEpDRYwdwV7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XvmMdNBfaKfHU6vt3wpg8ciD8vVwdu33mdxZ4iRqKvUTArEaJjQnnkzVNjcf4cF5F9i9DPj9fmYTswZKxhQxrq8",
  "key1": "jWuja5KoGuuUhcHKaKxMW1wyoLDSEceYQcJhcJfxkdgoL5DQTMgxQy1j7Bcqp9rZABPdgVQrdWoRtRhoAgiE6E4",
  "key2": "akDWKX6dwy9HJSykJPDushR73cSLiVqVJSb7YKeujK8zi1vvCe4x8uMQJdWRMv7eYDt5UhdDCvetWXVgcSyjVXc",
  "key3": "4JqrjsJmjPF4ZNa9FE6cKShN66Q1PuWbnbEqdzvhWhz5NSxsxFfnGUw2bzW5fhhZatxA2D597uvFTmoV9NzwGPvt",
  "key4": "ThMRoj7neYsH1fwW95HDHeqiMxVeQo1yF8SzzqxMtHdJSevZgMeQWCvQvZvTaqWfMUyaBdScNXPd9WPsbQ9mRCh",
  "key5": "4gs9Z4qxCh9gR96oa6b96ba14GJuijA9abQJTToBbHzZGS1xmYDVwRY8Pie7yrvct8UmoUaFDX488Ve7s8Wg3cgJ",
  "key6": "3Vp9WWiCmyP27sEVfoyTT6j3jjiZEY4L5R7BajXZm9MjefysXwLQQfTgFKVdJdSZp1b9qzB6jjng4DgCLknGGizJ",
  "key7": "4MFfYeUmt6tGzZ2AUPMiTJDx33WGi4y9rF7aaK6n8gKwoUdwJdC2HysfFr9WcqHgzWEKwBUFnAbe82wwxE46kmcw",
  "key8": "4tevc43KJETybofKD7LwVZr5wZxUEViMKppUyVmU5g8oZ7QANUtmy6o12qp95GL6JJUet6nACsXD16caRDXTVUDk",
  "key9": "67EsbeD4R2tkvhNiJgxdF6ShBMVRQzAHuAeRTQVcXyjJFXiAhXpJQoco6UXV38cg2cTCcuGDW9sFZH6xsbHtFoeY",
  "key10": "5SszrMoLxeVLuKTkQiPf8MdYeBaYaWJ3JJoziLSc56PCRTeUJsb7BZzcR2pCQtpMYtBvnfj5FWe3eRwMwQDJi8Fo",
  "key11": "5YFvzALiSwZFxTsZyCP2ZHPQQqcgLohtmoWAzFFZ8tHQKkkQkW9aMHNszUXL24VmqpvqJp5fE1bzAfEjxUaRfLBK",
  "key12": "56EQZnFNK7GcuN556P13Ez4Ra2swhXVmePVqZYKWw8Xa7G8QEwVXKaoBgSZex2LwRa3B4xQXzqYqG8ytDAE6qnmH",
  "key13": "22FCrtajQ86pNHXRUEoD7ReQaJavKg6FMJHEVXCpW7uDiVhbJLZ51iii2AKVs5mj1896A7R1ia8AGSJQt5nNB4EQ",
  "key14": "24grT4nYGUCzEDbrSJvgf6qi8RDWZuygr6SDQs6E9vgKT2w9bJ1okdaBzX9CUZUdBbvKbe6T873frZn2rnGpdDvd",
  "key15": "3m5h7udU7wQmHvKZtjgkFFsDc5MsvZQAMJe3pmE72jXAXS1JpvJT1qkD3gTrVsLb7YM4AVukrFtsUQ7uhxK4EEfF",
  "key16": "5TKzSAAGE5QBNhfb582LniXHrjTv41PpEo2BYpMoZ4ZNEK6EKVdmuTTPZnKoiw7VYLhj4X76NN1ir1vAMXDjVVmN",
  "key17": "2dDEpZmEUtmZu3T8WV8WReHtHYeeAxnRYcU3cWmZAHqpL6FPoR1mTwjNwrU6KJPcVQNJAffKHYSm68tSr1EwbCEx",
  "key18": "5X5SMhkqwDLojyYqmCrLP4eNcnmb5nCtEugXnKgFXH5wPGAXtatJXXqWgYRhBkEbGZQ6mq7EU7F6NhgqavX4dQYS",
  "key19": "3DMfndqg4dNDZftGWATQ2ZA8deoN7dPUaUTxsLjdVRiuuN7LuiKPjqepW8tZwjNdrXrxX4D3D6FX9HwQ1Fdr3rND",
  "key20": "5wtZUee4RPanUqmHh6rRvSbkVbzTGsAM28Q7SXJFeiYqRNS2vZc1XNAck67VKYAsfSGXAPHdmNDcKszxuP2yWnKU",
  "key21": "5YaRoBLMEDfL3dbTbuoS2E3tdURdjTBwPvmDBJw1ZuwgTSJSrspedALk3x4Q6Yh6UtCkwRc3fZY26ZHtsnpGJQSK",
  "key22": "ZdAqBU3kKkzyyjLeXR6hLkwX75sptPYHs6F1htSunEKvVbxJojSF25VX2DQsk5TKFHqHkRZHmxgpS444Nc4srfX",
  "key23": "5DCXMdx1X2Ax79z3x64DjzEEC1ieCzehU8UghdvNiJwqigxwNidn9RXNLDzXDGFRZGkMPWzhH3Vz3jDknNW3soZm",
  "key24": "5xQWHH8aBQnTAUoEftMpkARF3LhA5SPho6aHVnpJCkBs94xW56uGMtebYvCRriNGXWz6VczFukxUj1t4P7LXsoT5",
  "key25": "oTCwpPVNPMcATvyg48Zti4DYDaFyh4XYZYMo3962pQKtHZ6TXessCyUYBzHaav1jG8VUUpfKapStcUADUXw1rEW",
  "key26": "36jV9X8QdMNi63cuR516tHjZbyZG9ec3BkrDAd4USa3KdavJrmfdCZ6NtYbrfMz9pvtnUQa4t91ksuqsHQSzQjVS",
  "key27": "4zvyPTZK5FChQTfzSEmAe6irtjaXhN4LHeUiz9nLFBodSMfRmxz5imSKugzZ16QU4i2rTSkFy1Ad7EgkdvYsh6fN",
  "key28": "3jW1xJPL2WXdj1BAZ4jveNDiy6pwS3HJuAyd7pDrsfbzsyU9vxz5yMYSLMnpta3HVAdRcv6R7gsSRoLQX2b36M8Q",
  "key29": "5A2AuHhWFynkP9DHbh8C8xQYhVobeL1emUcpFsUmx9rMyt7KnfnVJZjTU45T3hND6D1K4nq1UzAAkrVNtpZVCRu6",
  "key30": "YsyJrRiTbuYoTt816c7wCo2JdjKfQNt8hVvPNExL4Rt3EMY6JTZqQKb7mbRntSJMMzy5ib4TsbxhfyeBVXatcGH",
  "key31": "2hfAPu6UTBJ2yn3hSReusFgXXbBPTWqVDoL5pGY11eftmD7ZWKrc1XLvyKJG1d2REhvx8tkJWo9HKchtiGoeqGwV",
  "key32": "2fGpt1tWAGCsSjADtDQhBpXYvnDVvvzT7apgddua19DCdqrQnVeoG7Sm5C9aEbrinY1gmfXYZZuS3zhhxJJhAjQm",
  "key33": "54NsyN8mNTE7yafYCXpkj6B8pRR1g4qfSRBSDKTS2NJtyZHVQFiUoG8g74LyBJa43813zewpreXKP9vX3uQiaTkD",
  "key34": "U5apmPqDWgUFqftnoEdf8ZGG6vBvTLcaAdpuUPXFWXTwQtXkTcx13Y2zEHJNaiC4My9roaqGYUscSLyj59erSSE",
  "key35": "48Dmq1cdtW3uVUgZYE3iSFspdrX64uA9BVafYyQ52UWeYr4B56QBxsibtWrSHCgVRqhTiUWdrv7PiFmizemvA9qB",
  "key36": "aa86iUYCyEjnkPjSyVBX7rEXRyHhUxRPFWokT37y4snks5s94Uuuze1ZzrihfHBBqPcCsbLMfTFMcXKKEfaX4iQ",
  "key37": "4pUcyJJMEJZmqBRYCRm2YeTqGYc8m8L3vXbDzYk3JwFGE1Q72MuLNEET23yW6ppjhKwyGRXYoH3iyfBPVwBPdQ1M",
  "key38": "4MWfrkbiNV2AujU4vgpFwz9XZhCW7Y2x2Q427WfnNLcQet6Nx4xQDCqYtvf6jCLrVKeCMEinH3NezEnhJmmEkoVg",
  "key39": "2FC1RDt5RwBA5bwXJRCVVUUF79nqAdHDHAHttpk9ohLYwLjrQdtvJ9tit5pXGmyeULkpENJomutPqvzDvE1FYoP9",
  "key40": "3KRXneufNh4h68dnPVd39j3smpq5dfDgrS5XH2VWBUZdYgV7mozvsDxvKUEiHWd25NG25JnHo35GZ85Q1849K7y3",
  "key41": "3vbVGsm3vxLZqhKri7DMxFi1sV2BFEcVEWDvVbncrYEFTuCYmZ2n5AvSAJQxK8XrHpkkEwQt5w4tLB3aPLeg8F8o",
  "key42": "3x72wJYUz1rsBJNrhzg55R4U33QDgjj1QfV8bDbkDFQ51grjRQ3MhERZpGFAT31ZXazqcUstELXNhM47fqKXaKmn",
  "key43": "Ybf6LocUh1kCXEnnuitjZY5yubDSMkKPe9hdrdPfiLj9BS4VvTztAKXBpedAXMPdwZ8rp175vzcscV6x34gd3Q1",
  "key44": "EdB8x8JSbe7ondYJR1nRqMM3imM5LbpvkbwWi7J4DkNGqmPrMJUU4kqobfqDtXgqYqzoVYy9Au8pgyQHHVCThB1"
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
