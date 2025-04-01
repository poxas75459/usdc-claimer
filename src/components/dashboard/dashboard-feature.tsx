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
    "NqgaEc8eHF3Sc6ouw6QSmXsjHxUPTL6BYo1mY8SXSU1X8fKb5VBqDEgiX6mW71CkZSQCVUNYBWwd1Rr57nPvuQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDQjae8kaRVrtJzBtbmdKTPa8nUEs3keWEuztPjp1EcZFUP24R3pgnnZcJBUQr7NiPR2gB4DrcKHWocSY4qz5Yh",
  "key1": "5LGmkf3Y4zwKif9cmSEqc8pvGAW5C8y7XJ7a1fZs53NZ8WWCHBfwey87kyGTSDL5PjZ5CcYQfgtH6pHSaCsFD8ZS",
  "key2": "487qF87MHwB6S2myn12RU8BWAoRAmR9k68iFdap4GnKVENna1BbqpiedwDtEfTKde9Nmfh5P3KaTVc7qpyJrHv3L",
  "key3": "4kBtJL7XhyMRPGJgaxjp4CauNSa95piXq5bk9YijeMB2QQwcRayjwGee2msGj1Qtp1KWXDA6js4Z5szpANwZBUYX",
  "key4": "4Q9xdsNXxVoSw4NeTGNESq1u69CLAKZpfQXewPhjSCiZdDXr8SKJws8UxoULhkJP5kvHLnviSsByP2StrtFHYbo4",
  "key5": "4mkEgmPRzd6QoYrLWqyqvq3JA1CWW3A35iBXEB3ZFjiWyv1nbM4SNRJDpZXWkvhWhUESidayo8MbTYT4ZJ45LyFt",
  "key6": "5rirfTgt6TVVkTbpErhPgRcfLYQrXm4ptMcLeFMd1Qf9qNyWkBzMNjMzYAD4CkmBCYnRhtfhzecAAqA6ZdcPgvL7",
  "key7": "ksgPvFAj3Yg7LA1W5V52Z6Y1fzYQfbsPeTmRpoKDMtEzNUy7ops1ajQaAbGqkac9PLiFRgHuQDttZssPBKYKWQe",
  "key8": "4vN5LftdQ9LBHBvYiG3AyGLZwuae7VDoaMoAQvdU6nRwDR1xgNU31NLcc6vLb5GpfiuSkFEzzwmETfiFcFMgCs7u",
  "key9": "4Gm6HW1HDiFtT1x7bxxpngV33Av6BeRL4sqD5J4RbxrckKr3yaUiiaHMJe2pXjzD5qRZweud3AjDZHMrmJ6mMf3e",
  "key10": "63hAwhysVXnNWxMRUWbkNbRnbFLGvAMi43tdUQhqTb7iB1FTC5MR8q9NC44BrPP82QJSMTqvM6FfZpgJLHHLYSgv",
  "key11": "2n9GvA1jLv66FR5iGorHxmRgZB7wtAUDoqnGqFDWRCRkKK3nuD6yUTq9TNZWtZ62CuqAG9Pkx6jVQHUXGi9x6qT3",
  "key12": "4Kf8VsuFWdHKyYWC6rhNsJoZdZt1kCwwwQxKsKmer2SoXCKD2ULha1NMnyEzNAi5JrgCQmRFCwLeBQtLio2dPReC",
  "key13": "3VBrizjAhLpv9ewYg7mtSFRnG9uTev4eqbWBjc3JU8hZzkoHt5sHE5PdQN4Eyw1A4wqea84h2C11wyfrA4nhwQdW",
  "key14": "X1A9pKepqW4kAoeucVPu6D6vXGAtKYqWXFXuDdKLcwjuHW7kC3somC9XZhxj6SrRt5C9jA1so5mtshHTvJEeQ5k",
  "key15": "8wNKRqP7M1pCUgqBVBtt5afxvz2TdVj3WYTTFaPLpABTG6yNg4imUSKDeF4aSCX4kPVieUKmKWBivAx2uXJjoYv",
  "key16": "3qqidDuUcgkVLsjDY7novGr3sGQw2pZ8LqQkowf5K6yUdt873XHEMUGm7zSRrrDGwH739XMmbFvr4qjM1FAEX5ta",
  "key17": "4vfiEdHTCHk5yUy5QJdiMfqBWzvLmYHC3JV3hpiasNqpAzgfDGD7wz2QxGfjgVwVwJQQq3wg3aHLWFPVN9foprVN",
  "key18": "JJHLVJupuUKHpdiZmg7bKKKt6evgNu5fmrdHeXNLenmjnE9zYrQVzTfWxYQv3ZdTDCk9YhnpYYDSvN1kMRjHPY5",
  "key19": "4HarFvQpMz1Q78S3FYVF6mhLwQcmAr6zMiEdP3ZQfGoWbHH8wQt8DTBKGgfNW1suoVx1RWFxkoefV7LPvtND1w6k",
  "key20": "5Rr9gDiYpdKfNQvBMtCYLPVR8YgtYucu8cMLy3murDcMmgiu64yccQschq3QQSjsUfJRka457fb8pW7fc6K8VZNL",
  "key21": "2MMbxJGH6cdiVoy9KZR9MEphcCQPSu8ci15ZtNBbNtXe8yy2AiLikG5SxMxpfSJBSamhb1owAyf189SSmkN6gkjn",
  "key22": "5s3nPg12qZGnWKitqdSwjkXbFGiVKJcspJbnLhESS6hH7eWe6z77qZUT9HNKMzb4Twj1uP8xVPHdRJNqxUqXSNDe",
  "key23": "5zdQCdMpfDbxf2PQUFtHZ1PacDtqKLMCs2eAowxMAK4u8GtuVDQr2t8aj1MqPU2R81zYCxAKePDZJKYGRrG5pWq6",
  "key24": "3D44BwnCoste9ThFCpXQfrFxjYi8ytvAL6xsgW4mBzbXMP98Yeqzm8GhRfssPk9NVJdrj8vYeJmnQhDV76H4gKiw",
  "key25": "5UT3GzDkAFs6DnVdz9pvmc2VDgiPNXHRTRcoW7nEXk93MFa125767gtn1eG3xRHYAjafs8H1W2PFVKWJbB7vZp3R",
  "key26": "2gDUCghKHaPDo4Rjzj1RS4MGJMZ6R4FZ3c7V2uCGmBQBfRhptE35QoogbYfTVzA3HmDp2nBXkq5p6VXiUKXTuLEy",
  "key27": "62n4ynB1C532GvdjnbcXN7mnY6xckfqRyC6oAd7f95v6TngGcjspru6qeT3VRihnJyJGeGJ5A7NhdwCNtX1xGJQG",
  "key28": "3EBo2Q3LZQMRb7H887jxGrrNqWFmgVwLyNgGVsaB9LQtAGBdkB9xR4VL9gVUuM72o39wWCuviQmtxETN62gwATs8",
  "key29": "3aHfFyRDpnKzaM6D9PVVvpuFS2EbobEfHS8cGC7Nk4a1uSjgcp1pG4zuTfqRP5P7GbNQt6XNy1KFbqNPQAF9qDxk",
  "key30": "3edoQPCLn17UQdaqwyb1YRiUt2cJ7BZoGTjrELv5sbjYgrwSqQWAbKvbqEvbvxcKw1EFFiLdLvbNJjQD8KxBXtM9",
  "key31": "2SJX2ppChHk411Uh3g2wygHHfawit98BMZ2zM6Cy7MdV56WW991cHDbSEUCyv6DLYPaoC1LH8vjT1UHdUEfaJEGW",
  "key32": "2SiwxVxbYddfxCp8PBvHpAyabeh7srKvhanYASs3AYV1rgXEYET51SPdraB9osfTjf5NCFwM8An8GTyEK35CTvfJ",
  "key33": "Dmqp4tjK2b8mNQKEN434HuttQ9AoCNeoZg6TD2L3AxbLZJBChngQ2mVoRJEmXrfgMWPaXeXGW6HFmJDyukKCfxk",
  "key34": "4gzFopRXDXg8WJ4fFzAVcjEJ57hK5BMSJWNrU6sKR3Ar3WhfYxmEsiHz1QZRUPh3hSgA92wmsERsC1SsZ1uhd4No",
  "key35": "5DxZgWzctYdjEnw1SQxqi6bcs4pesNvJsEzFKAWxPchExEAtRDioNbxGYuXYnFAmjSbc5m4KH1TNG46X7RksFa5T",
  "key36": "2yY5Zy4pFHVwEMtJZo4eh3DXTCG2WhYcREkxzL48nePT28uDkL7YBrzATxFcsRUufDYu2CHH6FEv647qR1Gzr8Ff",
  "key37": "3jSYesue1j9cShk7S7YkWWH5qz9LPHL5jeittJwk9hjSnYyD9Xcg7BKidruBcWLNXNgUYABghV1B6oRkJNp3GL6u",
  "key38": "aovJQH5NBwSeS5eB2w4orehC8coh44D9ZnQWrnfeXZfoD21iCwC72p9RGE6HvXL8QxfKmHGPDJ22EnYaXwbFTk5",
  "key39": "37MctfjTnE2aHEHkbEVyqXbpjXr4YTpWTHxugoM3UXxsb7Y1Q1MJoyzYchfkipddX91PRQEK319T7E4T7yuZyDF4",
  "key40": "3bV3iXSDu6EKdbL3PoYTXggygxHyf33acebrFoCz9J4sQMS2bBRFehYoWX8jD9Cjup7MkpaCpPaUvn6wmUn2VbwM",
  "key41": "41VaxhGEtSpAQ7QHKESQADJvSJuv5s4PFAMyY2ZQvVzPJbXhMsEpzjc9GYPnxUsgDwyVBUUeFx2V9NLsxMoqjuwK",
  "key42": "375LDUiXziy14VcfeTJ3tHVTGdLLRKCSVUjMFzcMkMXBEiSqxCHdXRKC7MXgNwJrG23dzcmzVRtS2z89TFCg64z4",
  "key43": "d6yhkBZYBoBZ3XvH2e5hs4fpfPX3tob3jPyPueUx3UzuqCX4ryu79BYBUBEngjHpqcUvMbS3Hc7JhnVsW8scw9L",
  "key44": "3RXYckGsGbmBSG69DH3rKHfoee7ctiP8mrQVCkbWMWStMVFzcW319Jb1FmVQjJPwtWGmWVoobabP9ScFvQH2YDDb"
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
