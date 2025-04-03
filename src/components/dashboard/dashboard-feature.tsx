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
    "R3yLWWejkXZpHa1Ts3zu7xCB2AcBQpEAg1fN5nbH5aHWTfvebYqBYrED8N6MzpBePDcW3zJw6QURvxQ8G2zFvhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3b8YYveoMCg4ik5aUSKUpB84CRX1x6YLQ9vEyPsrHxdekewWR9egKThcb1KrACzoMRjA17P1MHqkC97reWH7oq",
  "key1": "rWusDkdxbDxTRwhrhhtY4CQ9AHwqW5xWVbndQYnQxVyVZzFuRQeMLRnsTY8DNyTbMsXAFL2KvXcgXtuRxfNJ6Hp",
  "key2": "29EnASrRSwM2UVUn7oPetQhHDZt5AfdVge4LSNgorYe55YrdFrgfe2NW4YG9jHURZEK4EgWXyz6PHk4bkzz2wUfL",
  "key3": "43T4swzQaSoESKVTNvFDUwqYjVXxUDjb2LGzyCepCYkV8KyRYV3rPtDSVMZUDDPj54ue2aaHdPYJNjyHMpgKEQye",
  "key4": "3DbaRowY5iD5M5cVa5vME3npg8dfbgKXfHsW7GGGGLkTCzjESJPY1XmHdiJF7y2bkby9MtWXsGqGU2RE2TyW4G7w",
  "key5": "4eiihc66HQM4X1pSwmyQLBwiBmzq1DRjcHP6piBevmmx6xYpaPi5DrGxdRM8GxT65wB1L4g7KRZNAWffd6v5GRmH",
  "key6": "5CzZ7Zu3pTKKaLyijScBsJY28RzHjgRz9krpH2vPYx6mabSTW9ATamZihjHZf7Hn8My4Z6YBTH3YF9HXmRa4npbF",
  "key7": "4Md9yhHM1xYR7mBKg5kECHBvfiYSUr7APLTfuirqFrr9z5mRavHd6FP73AGAHh7ANL99BVJ6s1hT3hbEfUGqvs46",
  "key8": "22pNXrLCvBhhENFrQkVjCqUdu3apvn5k3XDc2AKNYjJNyS9We2M6xQ2gU1Fi8DnQzF9PUrVYy6gqcjebG98XCfQR",
  "key9": "2gQKs8o6xQY8CoiHh57fFpTm49aKaqKfzuxYmbj51F7CkPWNVqwNwXc973gSj7wJ4pePP2K8YcupMzyHCLNyEiRK",
  "key10": "5KUhhAo8mNZJeZs56MXB2wNjR8zH6BPSLTdVE3tYKdRe5ZXW3cMvk6fwa9nRURM33A6ikvPkoEFSjwD1H2jhMRTk",
  "key11": "5QyGQHLX163swNpSxM5EPbyafdiSsMyQMAwuUVyJAFMvuVxnmRrDMy3BNxfhBp5jc79FAGfYVmu6fHEuTJGFbTHA",
  "key12": "29hBgiUvvjgC4m8UXitTivFCstzBng826qndMhykq5hC1bkx2e35dJnpy5SMdQf5ARzcciLCnpDQFm6TZqWNM7ND",
  "key13": "5jz6aw7chBJrb7MSBnSVvRAZb6XivM7TgN4W1gPGjuWQuWaEjDbW9EbJA1rv17iBt3eperupQEekW3kx7HVibVSF",
  "key14": "2S124dK3FiKQqtgmc8VrZf5EA6YrooMpVeHibkSuQ2fnWorXBYaNwDgp9PivSZnY2qf3hEhP1K7gingAUFvu73T6",
  "key15": "3PmVPNM6jNyEEKK1h5w6Y4uf4ndvgAtGcfXdDfQnNCaZw8WqXmM659FDjyiw59T8cJ6VgXgZJnS9ftwZSWR49QaL",
  "key16": "4MxK4QyotPEArh1mKZHZeHgM5JJk4P5LYPhPYFHcNwZZr9VCsnwKFNXT843DoWivPYFMrRTBYJ8JFoFYPjvWCJd8",
  "key17": "5NjNfw7u45ontP7ZgiPj8VRFATqCus5vbnqtDXyMSmkw4ZxnU6sctcvD7jGK1RtxLLNH6f2d1beNLMqAYoG3wJah",
  "key18": "39hMfEdba2yoBftqpCSfZVvHm7XEZeNAMTDrH3n2Kryq9pvQLQYEu5Ui7oXWdoZKLX47KUFuFYTdUQJRngDZKw5Z",
  "key19": "2naC5qZfuhkMNJSM1TRDJEWKfibXjotfSTE7vjfNvzSAX246JNr69wXurin8zVEHMa98PzPvJkbDtqazSH4sh5hx",
  "key20": "5Cm5t6TzaLhD49YH5CBT4WsrRCmHj1MQhPW7k6nubjZRpyXPuL1Wc7vUSt76rJqMJ26J43UeeSroAeb1EXuej4CN",
  "key21": "63dCLhiHy31Zg98ETUgW4nt1u4LbdkAoH1ezWwkKuKPfDz1V1XdUZALQ5WfNMwacuZ77trjmjVYCVbn4hKtpaFuu",
  "key22": "3mmH7Rdg8i9XYDAbng3qsvJDtzhVNWZSo8C9z7xChJmpqiZNMcJUSHn1zkAWqpvNaBJHZfa92K1qcZmQMpgo4rYq",
  "key23": "3s1qzB99kq2a2L8hUnN3TUeA1XZfJXNhBfo6hEminq4TorkgU1kvPf7QvQ97Bq9GoujFsy4WUcPgN4BmoqhFGLiR",
  "key24": "59cVxW3YXMaPfJVYHpwdNSWd8dQMjwJ9TTCySshi7wJqRaD3MaJLaf9nJx3PkudM9cTfbE3bfsXeFkjUhpM2GmU7",
  "key25": "VCfvtMk6qNf1W8hmq6aNr94Sguh6fXY3L6ae56jNAZBqyGK9b2eJE6eaBYvtbBFmHtcqb3Ekiv5pdUSvkoSBwPA",
  "key26": "2RLmnVKD15aCesDZULwLFNn5ymu1SxhgZVc581Wg44X4wuwdLqGhMJ3s3zSVsugSjxyvbFEmJ4DJLqNRc5Q3z2Rb",
  "key27": "66b2udSWTWjC4amZ46oFrjkuZnrRbnXGSKq3x3mL5JzvwzUdKpCewQcDc3Mx9zUbtxuBC5tq5RUrLTJDnUPAJxgU",
  "key28": "4nYjepcvcE4umhQbDNTJ44qmiuSKRLVcbZDcmacvBo15kyVVMCyY7cYdQTjV6oLZqUCfyXQFctTfqVYsfwDXwZQD",
  "key29": "4Gbxfin56tZY8Rz4W1wonBHoNVtWAU87dSfizMHxyhoN1pjTtZKRckZCpHLbScDqo9NN7Yqiq77FGy1wCSyRyzqF",
  "key30": "YkxyNZVx4kSs2xjALuWQxdNJ9Zi6ESN7sn47TKiq2Xm6DjbLivZHxP7M8C71Jvyy8cKFySqxegE6oiLE2CYwdW3",
  "key31": "3cgHeiUDToKc4AedraEf7fFbWbDf9z7gQMedvbUNiw65hvnXGBhJXp2qjJgNxSE4X1VQHHiF3MbGCiy3Rn4mcnG3",
  "key32": "3rTDWyBPZHf5vdG4pD4uEp1MvsYis8ozXTFvBHMzB8hSwxYYjgYRLSrwYbPcBcxbL1Whgft7cqZ5LLQxiLxwDYVF",
  "key33": "2vFtugsPBpEMfvwZYrmfu2ooDHnXeYjq7gM8t3sp1REX9E3D6TbAbzBbN1iTrnoZrziHKGdEUnc4yeNS9bnMwXtM",
  "key34": "4fe87KwaQMRVSHuRHNARGS3N8AEjJ3VtmyaooN9N8t7p8zHP1UG2nP2HNV9aQVcSXQ7hiD86HzBRV59xBt5pQVe7",
  "key35": "5agHvc1cnh36sBWFPuSMZk83ja7UQTLE1dqbTYxDMmDjtiZh12T17SJB9QzS1KExx8RD1afwK9FSGeKC7qV1fdNP",
  "key36": "48DCD8YRXWy8NhVHBcNwkNjpvhCVZX2N8C7K8LLK4n3ypqez5jNKa5cb2dFt2UpNEPgmpY9HRgVt9z6BUumKjPBL",
  "key37": "3VL5nmcc36Rptf5YLjuK395CNRLuRaqSbNVToNbdXRdtVhde43CTZw6mRoP8uApeKQPhochZRwGDJdZ6N6vcHkAh",
  "key38": "2oSn58MozPVFrvdoqnJNfheXoqBNtsvTHGanvvgtT9hg45ZcnYRmGTYHPoNza19JFMVPbSQxuW9voiSUMDhNN52g",
  "key39": "2GRfzZHrtRXPfNhDpJpQS9Hvp5krE1QVrPBxjePqZJue7L94V4HBAjt4HfamW9sJbpnwWEYWjfLDQ8iFgihWmBkF",
  "key40": "EgJ6MNGyrTC4NH6n4UgdfZ8GwEm27zQp62jYsauSgfqTLPKM764fkPrHGMB26tgUAHPXxeh2HfU21miHLe3vRzt",
  "key41": "H9epjkdyUzVYUZ8n2Y498JWU1q4kzgaQXGFSSW9jwroXRkFCkdeD5sQ4tZVxT7DreYDgzch4oR4a8xuVfoU5jiu",
  "key42": "4WasF8jyqd95viypGJ5X89FQ4Fr3aFGyytiaU64LLEonujvni6RNcBqdFpHWLaMKmjst9Lf3igxZVwxENAa2RDgs",
  "key43": "43EPia2sNRiP44DYfadb1qTv1qcQAR6psePMHWWnegDyiuXSE3HRJwDd2XXkccJdhwhVRvkq6NZwx8xqALBMH432",
  "key44": "x3Tit9ukLPyKaiU2CCrmLoELrvBPzdGz3JrxvduBafvqcMgZk7m1f1M5MnfVh8nByynCoc9NAU8VCNuwgScR8TH",
  "key45": "53w29B9z3FVrbV125FUafQvgRi83Xtoa7hPtatNuwRLUGzfMEWQKLf1Vq5xAsMf4GXzbkvbWDsfG6dwbEx9hHfp5",
  "key46": "4tdAi24uhTxfFRrUw6noCdVGXzyRsGtPyPvyDwpSNZXnt6NaiJtNnSZNSb65UphLp2eGdsLYdou9W48wR23z7qUT"
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
