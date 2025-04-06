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
    "4M4cEreNAcrxv8AHxbXvwKxSwAivxC5f8QxvoJmeDNcbDV3ohsiFhmLZwGqANKd35Yfxf27ntqmfYErxACVKzan2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsdVw7FLDDK1WFukqY3NxVRDUhFHhnjsoQM96FWafoU5mLYfjmxcKbMPJamNMqF9kuiLYwe5CkD6NJmg4WNAKKj",
  "key1": "5jpmUYjS7qSVHAyBRgnsJJ1Q4UGQJxRa2bXHp8vGvmyqqJFqf8ctykVo2NVZdeEapek5Sa9yjBz6UMtPxXSMUFM5",
  "key2": "ULpzNn2aprrXVxrYYacksUN3jP9ztv9tVdxVKsEDDLiNXTQFZMgcFLr2ooatA6mCdHwn24u8uDGxKWDDBdDhAKi",
  "key3": "3tYpf9F58aZx8Bo7p6iWnjVsZvChXYctLkxL4GS3ftxG3jFCWVimTomj5AP3MDPf5oe1hMSM7msbhKxGa4fnRkAJ",
  "key4": "3pUMBweCstBaeAiuW7TwfQVPhSvoaTHtqBmz54Zdq1uzckbG9HiW5Gxzud8Q8ZxjpPyQKgkTfZzUyPhapQ2g4kEe",
  "key5": "4ns4X3kkVRQ5n9XHNtrUAnSXHiZobpJjqmyoE2Wvg76sXFGvntzipeN2NWSVcvfxrVDcnwU7pHwKrjb2QeBZpDNu",
  "key6": "3L7mG68yRFC54VA98KTyujVVzu3NvCnDBER4LAudqveiCSmN9Mu34iAga7SCQDA1PKvTYfAKC4q3FDAsoULMYJfQ",
  "key7": "5nFj6a81L1QW78TNiUbUUVtTXaFDCNkpnTjkzbDpUjWSX7rCCYA3yzDUMbKFTiNwkYKxK7S5GFL1Bdp18AhyQfTo",
  "key8": "3LdXS14B8bN6imgGifvc3mqGFGEjdkJCg9FYg4T4kJFg4PcwxdbjrENg7nifSmjD68cvGYVuFmRoKA8QbJ1sThQC",
  "key9": "W9uPPJDaRneP6eCmfLvyYEa3Duhb7ocRzYRqt6ds1nUL4d8eq6Pu6cFGyy3X7SYWHbhN82d7GPxgqYuXj9fqrCU",
  "key10": "452hdFSZpRU6td2PT9gDKWK2uUDQAChDR33eXWnHWkHH542ARDX4NUdKamVur2yfYy5cWfpJ7rVH4gXtqwWSaQSY",
  "key11": "4d1MEZfaBk5h58pQ2EwZJQc5Nk143egJEmeSRw77s2fmS9kFgY6s9UYGHN4muH1XastjcfCiCgg4S4EW61LsTd25",
  "key12": "5DeTaW4YLU3F4krW982H3xusdXLBWGPvbJhdbdnQDdyqDMH2BHL8NcuPazTU1dyPKubDqwqmzk2AEXHniXyE9S3r",
  "key13": "2ee7ej6VcmZMz12UE21CicD2bZYJgGAazwDGoBtYDyqoCZvut1gnCMxNqdu6Qdz4vCZeCuW9NNJTEo4BzKCViw1k",
  "key14": "2nSgTfK3iAK6FutNVhNeNZugc9kjoV6MApsyVuR33PGBsUDdsjjw31dMibezr6sgTh6jYACPvSRipSDp3qc8oj8s",
  "key15": "4RLG921T7qh58jdJYkHCVtXL1pNvnpWx1Y8FHV96WbAT1pieKLqjC1mWfoN5bHRxzZsc9SoGVZHc1JHeGzkkA9cZ",
  "key16": "2n7nyamV1343u6X23of7ybzCESrFkdNAAa2hEVqVahfrCmJTFqKjFyNxwrJ9ZXJ9u2DyAwnHasquxYE8R29aH3U4",
  "key17": "33vcCYGNmHM4vWk4UVccH6m7hsavzeq5tkzvoP2mUngDTt3gT9ZhUYs8GZuFpjwUetu9sAq78tADxt9Z9JnVU25E",
  "key18": "3i4Es5Pq6DFkHymFYBHPxM8LkoWE3HjmxGrDYh7uUFkg8uHDLTVacMQbbNUkpt4V4jFQ4DtE9pSGRjXmKTPv6KeW",
  "key19": "5Ww6hYpxUiBxpUxVKJfPc1fv6pAhcvhrLr5YMwv8ZwXsimGKByFKD3hEwPG81zoDTGhbWrLNL4jLK3zNojQuTKtf",
  "key20": "4RN1W1WgJthsaQ1X4qTNouWHHL11ov7Ce2rVDQrBHZiXNTyHccrwphTzqNCXD2j6KkbptxBVm4tQxj6Qr7URdq83",
  "key21": "64ANAaGAcipJ4sZdSCVeTyAgMnoiPJcv2xYQFqTALdxGvAWnT3wgYSUsYoF3V1cojtuRRfhCRdd1AbFtHZAEedKH",
  "key22": "3Z6X44oGDaiVTts1r9ByNtY4VoTUawdVWJoG8ZnSSKJ9zyVuwJciRvzNuAB4CSnt5GivdLhCCPvqe9AUvDADUhxd",
  "key23": "317vYCQ4ne8StKqnedKN75bUTYbjmGWmiQJcSCDQZHt4wHGk1gch7U7vGJ1FPBJgLGCgs2GL53z7x2kP3LBZZcsH",
  "key24": "5Dzd92BTfe478F2RBFQVQYsdJG9hKYHHBupTDB6tojM9nVxTqDsPkCZPt5CZy3khY4UEqPXzAGPsP73KvLcQc6cc",
  "key25": "4Q9tDArLravG7wixY6Ehz8TjVWapriWrLoeD6dcBHgukh5i2oVojp6NwR1brRNbDGfLnByJ2bMreCEKb1vVTJG9n",
  "key26": "3HfmpBkMLb4qGi6tR5ZxT6AyYqeyi9YNyEHtGV1FjZXi3VUrmQkUXrDpQCw5j57AZsmY1tM7CmF2mVCo62JAHG7i",
  "key27": "2BNVGGRzTNWpyPqXYDdwaujaYvEqS1tB3qdthTiwDEoLkfvKdi34NP8oMUfqJNcuB3oy16hTvJ5TDDn7mChjNoPG",
  "key28": "4isddqobVvUTEhkJAM3NwmY3XCzBecZBQJVn4mTxruyQdc4WzCEcpCQBuavVa7jZitBNKMbMY2CKwdgEsAhYwgME",
  "key29": "JNMnL9MR5VHsJpfT6L9hU6UZSxFWAYhL6ok2f4ooMvsXURqKsgPVHwrvXXYhhnRs3FTJyjj4tbbZd9S1N4f1So4",
  "key30": "DExqE7ayK1qA3wHH6cUPRNX5essUmiiDyas4uvmEF3eEdbhQrSYU2JWA9C1az2XuFco7nQWfKExoed6bkgFapA5",
  "key31": "3SsVWNgtWyC8mFTJGGYaQ5yDuXLSSxypKBnj3NXfan3Er4fg2FgkphZQVnBy6QPLqi2r1vgdwrrp96gVRGsT1Bie",
  "key32": "KVm3ymL43X61fQuGYvWXUBd9fLhUsYzedJpPzs5cWYnZrRDegPUH71BAsHMr3uoGd6imJjw1AiHxb3sBtQPSGLU",
  "key33": "3ucpdzxne2vFdqSeg41t3xFfifW6QwuafbmnmpdbpcATuMGYwaX2MyaFJziVSf1h1nG7pFkVpuY6f4PCWtGu9e1Y",
  "key34": "ajgus9uxb4otKiBNMLmLY29jzubC8E1n8fSFrNnPZRbp56oRTuxGNUZLyqNr4tSD7AVWE2zj1rwwNirhBkNp8fS",
  "key35": "4DGWrXuNhJjvVnyHskHd85pVQzGh9YkqA55wogLEMm9u3HxLeNsn8DxJNJQCPBRNgY13nUd1qRZobcgZrQY9M5s3",
  "key36": "57P6Ji2EjTfEMytz1X4eo7WeerC6g6q7pXWNpgS2y7S1hE9Bye5DuNFDEsHxWb4CBXE5NkCgUvyQgpfkLVyAuXZG",
  "key37": "45FSttTEv2q4dxcfuGAnyvmAzvXdAJXW9nYHEFm9XiMQ2cCmR71ioGeiHUeAdrXqD6LZgXRTTFHZLsBVPzutwy23",
  "key38": "3VfF8Gz9F3MFZyS11j1YxgER6Uxtjr1y3KuuFtzCQKAPV3woyjJurLpyJppxEsVxMvhftFWjKToQt9z4FqRjFmgN",
  "key39": "bx4EngW66bUJcsWRVYArgjv4QGK4KkLbpzeV5EsTH6m87RcTcRyoCnrTSVKanJTJSyRQ4xtufA6pa2F2opZUpcR",
  "key40": "f4wSdr3TcwJRRcyY2BKCUypNoZScShB4Y14xsg5FjiAY5XLmmPbPNetU4xPLLrWHJHv9QtcBMgDfRB79P8t339R",
  "key41": "2oS9kqL99XdtjBVxGGWv34fmAuVqNGStdna5ztcv12dW62LXhwD5vc4rVvCgk8342ugEoLAZQJbFCpMniDXwT6ut",
  "key42": "YKkNnWSwdyFH7iEenFuSkD8AQvtsP2LJscaABS9c4dfXkPHqoh1CNKpFRGKwAajqyWy3fpWqFQTpD1nPtWw861R",
  "key43": "53xeQweKNMwRHmfg3EKKvr2SrFzztnVB72EK2bfkbNxPHBExVVVUFeU1DB9uMWK1j1LjFCVo8kGg99TDekCySumm",
  "key44": "3xTSMbQ7hW3W7o7HqFT86RX4E4K8DBa95HQWsAAhvBK14uo1kZj5DL27CUKS56m5Z11pjK7NtxYTdUhRmE4p99JG",
  "key45": "5KPaJuyDYNRvwfRKizuGHVvKviSMgfTsdgdgjPmmBV4537kW45krV7V7ha1t9KYU3hhHNHsQFcfNBAueR1pHycqs",
  "key46": "4vqtnhhP9TsCBHgJj17tjLPo7eTFqLuP76LABcuzQm6nYCaNBA7E7Xvtw2RZgz8XPqFct6Q4hbTGjJ5FigywAyES"
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
