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
    "2bZZojnCXjMuJD23SYH6hse4muvTB1hV1PzrNAhmDfLQLZf91eJUN2TXa9LxUc1EMr6sq5gYTwHVPUgEAn2z8Uat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwVxPqosJ7mkP3pDszUenVe1LHJLNqgxVRKYYK8mjT6YfhhntwNjxkGyz2SovehEQ8WQY5FUfvhuMJyzsja5DR4",
  "key1": "44xEwqc7U2BxJhQJNSKFFB1yZPbpdpA3542M8uJMzMDCTdNpjWbfmgt33x6a59Y7ZiJVgWWx4gLKs7GrPBEcqpi",
  "key2": "5KoyczwZCVgfrcAGut1kSKTCE7TA6hKgU38Q5MKdqhKNDCWxgzWHRJ6A3L2AZYEDAYZwQPSB3eKBXzCTYMVYjapu",
  "key3": "3zUb5S2UTSESoEFbhL4YNrCHqVvictKZNgfBevbSY3yhqmmaJifvYna4ECpjZV8Z2Q5EEnaX4mqHaXrfmkLGFQ2C",
  "key4": "5SVMqMeSnoSLwyiGmvB9v5r8kUS9rK1uLbExjEqz3ES2bh9W794VX7F5zhpSFHoH5FK3b858HPCVkehsjpBbipfQ",
  "key5": "2UXkeR1bcLiXy4bu6gP3isaP8P8MzTPxgF3hsJyjaTe6UHPGxffy8dZRanHwiiiYiUJHaGiaESc2EDNwYDLTzc9n",
  "key6": "5z118Q7XgZJ3rudoi1aNevXjuNrw9WGCEkBTbJ2DyNEdLQ8UTpnXxCwTAaFA84Kdif1ZfbeCfrb3ycKgqVNZGjmm",
  "key7": "3gZaSYuyseiX9U86X4qXbMHJs2udnhhNspdW6LW8M5qJBocHiocV3f5eCiREAQH2H4vhMDvmHbysdcwm4k8UR7Ye",
  "key8": "tBVJKLiY7tACoUWzdhmQNCqW3L9rVghbsmAQfKC91uNWqWSVKmemfYYV3CUbmtfKcnGEaB9derjSLd3eTR7jtzX",
  "key9": "5CX6xkfd6Pt7zPix6Lukb6VsYhUow7gq2Yc9t29jqrpDcM5TSEktETDctw7DhxA4cp8td9Pf9Zytj5rPhw4n1QRW",
  "key10": "3q7c3y37xRjgwFxR6MR7627nnxYg5cjYWPqMf8XgVFwP2tvfEbk6xQvCrejZUqSm9QzPkfek4UuWKvqLRMd17wJQ",
  "key11": "2o5dwxTDWmbtfoxjLUDPcMQB8Mn5K4mV7A6ectQZ39DUy4MQtYPV5v9V8785aUJuFFBNcdDjSH5MFJxTCqnwqDYH",
  "key12": "36WwMaTvWQmvV91fRFUJb9GCs9UG8RTTzeRJGSyejWSmPvWJSi7cMmKxX5mq6QZap912igVW35qcMHnnae7yfFXZ",
  "key13": "hW6QhSwzaEiaMjro8Z6SLfz11ZjYS6xFAdM15rz2pXAVm57uPxxwakFym7qFyJuQ9sn6zfPr5mRe5r1av4fvhxb",
  "key14": "51KtVsFZt5gYNGDRU3dyAAvwutjveWaG64pL56ALQB3XgXUpcXbmuesr2fQ4b5DVP119dghKEGZSe1zxsNbnusGK",
  "key15": "4gYSDboY7yZPWzZUWfqnDDCWVt9LERY878pzrjoHzW2RXfBnR6U4A3ouGcAuARg5dNgzMAnPJDc1JHcJ2z4zSh7u",
  "key16": "4sJitawqPBJpM79XRjCdjmhnUos99pzytoy7pxLjkBxioWMXRDo4mn3go66kA1NRepyyWEUHMGdER9Nbge3qiHSh",
  "key17": "3N7U4ZHy8u9ppsZDrVPExe5mxWBEf9SjmWc6CEVE5qUMx6tcnCuNHjXLcDJWQ3LCyxsqoVPkMUrEcpajEXph4odq",
  "key18": "4NgmNrUqAqLoLBVqr2EYVmZu7ZvMzD1e23HHdPXDjtaRDghAephTc6zXJA5xuf7yQrzC6ts9xfJWoZd694sWPRmy",
  "key19": "4ei6ji8n3K6mJjVamMPmrW8jP2qGqDtgws5BpngqjasqtZ2FepuVjSB9hAEadaJFdDhq3ygf7fgna5GYhnWjgwpJ",
  "key20": "2GCdeU4xu3vGnwykRXZDoQV6Bx5zDkaFaJKCWeaK4t7dQDDBGjkDsrLcfDBbPq6C8i82qZrkEUcpsJA3kEZvUGgN",
  "key21": "4voLggxuEgf2vZ96fF7AscCb7dehjpNwSLFZFuv89k47Hansj1DPG7w42iBgtxGBHksszreZNQwfhpBVN4quBjDJ",
  "key22": "3nfwiSgvBjSrk1eRUXbikC7pHmjyN7gYBoPdCdJndxpVb6kuxs247rWZZQs3Hwsw94pJJijh7eQH8i3M9C479e9u",
  "key23": "3ZKYQEwbcTD4KVSvTaCoGA71dqAg2wB88tsdoBtHZFK4Mgr3XTTTvtKFka4wuFvxmkMQwijCJDAzF1wA6jzBTERo",
  "key24": "4Qfjhb6E8GM4g4oS4iChK9HjvHUNz8pie8Nv8RwhYCnTFUq6GeYYPsaaFpiY6ZVcE1myhgF3jCknetJAycMk2fXb",
  "key25": "5toGYW5Xh998KWPN93257zqYuwVRXpV6UcWLywb35PEAnzQ9cjeJqfL5bPUk3Lq9oXj2BStmQWhkVM6qceZ5BF3a",
  "key26": "5ZkKfE1hUV5MHNx6kmMTivt6Nv4wb8xCpxKp2MtwU7svgxCbHjvdSBVc4XNcQ4GiX9F8Ti9XMQ66jnDm2RQcN5o",
  "key27": "3EvfRthoz3Uo4v9WgboW1R2r5t1WgVQgJFASHK7z4fLWuN7U9UneaQyy6XQ1AMGa75ofmoH7AWVq3CzXJyvch2DC",
  "key28": "SwUVYZuqQ77QmAZp5GtRtAuvKTF3jqXSQpQc9UEpjNAkKYD35N1AmXweosk9247S2YcrWcbTa9JxPMenEURP4GC",
  "key29": "4EQhBYqjz4NnpnNwFVazk7JrjxSTDepS8F2NwxXycQe34KheDmN1R76LrgZAPkicHo4BFst18DDCc4tGkL1gKeaB",
  "key30": "2RbjJu3wJ6yx6omScrBF2NRTgz1J3RdyGh3TpQyi2q878rE7jKq8VrWERo46Gcy1j8vpFsKqKPAUC1eYdDSFvjRg",
  "key31": "4ytckpWNtmwXdM65RH6GPUk8DgCjnX1tzA9M5wivzFu6E7wtveNsYqxfbGHbgAUfjkbZyXTGji8gmFwxLCv34p6L",
  "key32": "3qeos4jdN28etkJJunqZD82dhqrihZuNY1F7dRDcFaVnJujWpdYK9sMWuBavURc9cGjEwJmbJykEss7bo5VbFRFn",
  "key33": "2HrngorAyxrkZispuDAruPjsu9vxrLz5JsMSP72h5G8sNDHeiV8hWP9suwq3vAXmJvPfGKuqqhCULNcUe6hqbTHf",
  "key34": "5PS5M9CknV1Ax4vaAbDWyfQQ4xed457BaEubMsTubFUp4pMBDq1Fw1RzuNi85etKSFMuyZv181VDkHjsPujQKv2o",
  "key35": "3qUH1TigatLpnyFRaiVp1hJTT7UzDJKgi21LdYMqGJiGTcBNKHZUaA1UgZhMCh4EbrZpVcg8RAyoHnKvQeUkBkzP",
  "key36": "5LmfV8s2BiCWdb7Z2DrJNdEpfM9oY9xnAKwYEcD5vVxokNoEvrPYjJLfze2etE4ZnBkxRYhrC4ReVMfE51NbGDtm",
  "key37": "4DxUuYxwqeavHUJaFFC9EHWG1x1U5XvMVEW6N8b4F6YpGKwtzu9PmJD74XiDmQiPF8WqWqR9wpjC7WaVqZZk9BUt",
  "key38": "WChe3ihUzooUPe6NbXeAnAAy1w5XgA8H112jXy868ak8cvi4z4Hh5dnVky2HeZVwKgVa7R2RSR8MiDbuhTKhV4f",
  "key39": "3ztcbiQc8d7GiDeFZubSQvajLFnPcabTgjo3EV8Gb4J53xE1gDH5hKwBFkHy67p3ddzu8JyN3i3kMz1PHSSJQkRH",
  "key40": "4y3mo2365EkbXHmUyqHewwByFCTwnMoV3bVvy7HJXyYZcNq7hCWsoc6HSZp31ocpRnfpyeDn7VGhmXXZ9LtvKuY4",
  "key41": "37Ye4TvmNkCRP1XNAoHpH4Teq1xjLixu7se9sm7MHP4M471iLSCKhBLYpC7WjYorRHudYKV53aG47qEz5H1jGGEf",
  "key42": "2ApEPduRxU94obnWTNx9g6koq9dNpyYbTK9Fz2m3DpbwGgyRLzdJpvkFHKw9viv6numbNb7ZwNs11GMiD9sjccKN",
  "key43": "5zGHQw9Jcm1eDCyPReAeBHWajcUuzDBwg2ado8wU5FvFtfjXFsKxu5s9ANpwtRcvEW9hAtghGJCDxNsAi3DbPZGL",
  "key44": "55fF3sRNGWdxwWaSXDTgYDm9zJRtH1RyT5dVnvxSnrZB44GPG71Q4PCpKNe4zLvrBUs45x9wy3TgD133zczpCCfk",
  "key45": "2hZ993iKd6jcfUGB6Tus2S1rEihfpkZ6DkBfXtGb3Fk71aJ1FHNNFohCLybvWMS2tmnmsDxpVjeXxBfZn1afGsYK"
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
