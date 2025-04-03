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
    "48os2EexCnLTASJcXeZNhowxDBxd9mqgFvFBLvB4XpisfXkv4fiLMRgzQ1tS5fWmLqgLDHBGiqxKRQ2FN8cWshNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvE9LoZZHVDx1egWnCzP14geTyMbnsd58vzps2nkaCVGashaokBSUW1okGskf3iUYb92aUd3FQocmqqeqARKfvL",
  "key1": "3p4SEv9nT2JxJuHXDi8RKiSV1zoLRBXbjxSSzLPLGh9LsoULtNuPs99MfL6e4QFHeEK5pyQi1aaUHorddHcgYY8n",
  "key2": "3wgtGYf6rzaN65oxxZvyye1a8eNH51HNXS1eS5waPzHuBjpvmhMn8FpabdtJDpzBp8wu5P7BsaygvqMXn4tAfsxn",
  "key3": "bP1sxGtwuEuURCvGxpFxoCUuhrr7SKbrRxgV3zCd2rZiD6GRfrVsmasAMpmyUa3Z5mQepybqPxYG6QMGhS3ukjX",
  "key4": "KpQHZwgBWnsLcPffx1k81UmhjPUsHzBzzkumnAn8fSFnDB6vHoQRekLokxKAbAcqhmdo6MRkaC14naG74P3ZF3D",
  "key5": "2My5enGM2Ruq8H7TjVgnf6p1oupMTtse4TPPFLwmgxxYAopTKxVgihCSPQim6z3HwrrdmTRFMHv3FgFNR9dU1HGY",
  "key6": "wwGXVEcMcKaBU3si1AMxwu2eA54n6cyWBbPt3fRK49kX7Y4iVssL86SegQHMGBssRswkDktY185CV4k2A8njXp9",
  "key7": "4UXtvPRUv9yo5rnjrKtAadXz6GTJFAtxRX5c4jLrHYNHY8N4emdLP2SLt4DPMLvoxU65EhRVzYxg7v4Pc3MQrYDS",
  "key8": "4cTyFqSzNBZGW9RKnY1izLxhAiCtQpeSta7oa96aHhgwETgzuKCv7ZVUwqn8BCkvF7noLS8SRfT7S1bCDXJtHu34",
  "key9": "2ufMtnZhqTPRJaH3QHyTut5cYtjGL7FdAssXzY5YBPKHLgPLb1Ym212pkm97Y2vuPANijqMrykT14AaV8sWcPPJ6",
  "key10": "4DxTy4KEzg7vCD9X4xNiv9BwFrzMHhpdbiwBmGVEtPbBZa8AYzxp65UXwnFpFyUWPEqMuS4fp72ayEqXvaaYc1xF",
  "key11": "2rendfodHfsF9nT5oWpTdk7LeWf3kkHTmUME1dQjmqJEtHBriUXhDhG2fAC8xRkqQvd9ghUVSGnueXWicVAfwSQq",
  "key12": "5owXRZgDR6aAf37dsUTSK4cgViQ9dVhSVAAC4d68AKLZ4Cjp8teFEXW2FjrG41fqr6AYacvjGF5qbp8mMBut38QK",
  "key13": "4fQST3tvQrRqPCckx4Z4Q1dqCdLYH814KugkgtzPzjWfjCagU3B6AXjo1aNz2GpcuFxfkgNmdDRv7qh48K2YNwRb",
  "key14": "4k6tEoWgV7quRyPY2LAVJrJhj1ENju8yGLP8c2t7y5o3kVPt13kQCryeqQEyRvjDw6peQd94xbboTitiirx1Pfjd",
  "key15": "3kz9UxLfiYw4sXbYDTjrb7GoxvMrs3e3cXx5FsZoboRR4s8U2hfPR9SLV2QxbxTLfkBFxNX2PjZHGUz6ycDjHqVK",
  "key16": "5x1S1bAwmZxrMHHv4FhPdhB1dgfz5BRVqoLFWxDpe91MwQPk7M3SWqBwjhbFg5cuDwYaePRGxrVxXQ1nfoHP5k31",
  "key17": "2PphMMBgfv3cD2ahMudrL2Qo9Vsk1aaSf36pBQF7NKkB49gdygainfhKygAvPk2FFdPWxahxHWtJf59Qdqdm6Bqt",
  "key18": "2snUPqPLFXtPxobwVzajAH9jUXApwGZgHEAaYFc4PggrUgZFMoL5nwa4eE9sg8p4YCHUxFV9tRBdeLu77TN4Yft1",
  "key19": "4LXSRTabyptYXFcyLurLu7YpGapDaBNQk2LJVb69frvNLdQJadiDPAx3m5nTXYGB1unLBYvidfobRvSYHcevE4L3",
  "key20": "3XFrQojtACuvGNNWucMMZ41PuQKbDjPatJ7EyqxRFvLd6BXGVPepYGEpvwxta85WeKS7kQNmgxhV3dnbqpPkLYQq",
  "key21": "4ZtLry4L3nsE1fMiP4LmadX31J6DwVCWHnN6MTpktGvnwHzB7HDfv16XLTwpGGDP1RinTWcwRug1gEbiz9R7QrRx",
  "key22": "3HW1G2Cy7VUbUC8TWkdEz8PY64fmduvJzzy8aDt7EzTtZtajQJJKQkEwSN71DrccC9XRntYuGQ56QETzFxDeUXVG",
  "key23": "2mqB8eK1urPppiX6h4Da1Dr3FBfFThUozJYeJMHCvo7JXtcMp4DC7Z9ketaa9cmzJPELcAjSjANWUmgXSVwYNM7t",
  "key24": "2cGMfCxHKHYHnZxPRsnnr599ADSzp7JkDBC5DFzXjKgKJrb6Mvw9D3FeZy7KXeQFwPAizbo1y7pKCajTtSghtyMo",
  "key25": "3KfhX1KCT4Jaqp7FdxWDvDkup58cthMWqWhyv7Y21XJopc6PMPiAWEGspfzJj4zTpvvx4VPsats1B8sw4mjBd1hW",
  "key26": "3EAEEJLwYvL53wRCRY9S3JYwk8czhJiB6r93eQXAHZJTzKQgUBDdeo4rpas4JkefyvJE65d8Q6o6dVxbkNbAa4iw",
  "key27": "5HXdAmTM1Vt3ETAtjKBEZaVQmCjC3hPvPYZUnQF52FP2Hr45Kx4Emc7a4KTqVdxWZPoMHF1q1sEnwN6jaz2Ebnc3",
  "key28": "534bxrcXy6kG484whoKt1joxA7g3RrRLiJsRLncVkXnYaEB7P3a2igg9mFogoAa524nQDoayHvdb4ZhdfTdRa1os",
  "key29": "5QsB1aiCofcjEeGKWcHcew2a9MZdfEomCVZ1DyZd5zRGqARGAC7doDRZZhyGvZdskbmDrNnP3miU9T7SeC2cFuk7",
  "key30": "3zC2wgB5WdabsYCJxDhzdpTYYk6BXBNgJv5yG6Zvd8fSSJzYBwidwFNE8PTC8Amen3ASPt83n2QqRrnyD5B9SLTb",
  "key31": "5Zih4mCJXZNgHuQweibzNxRoYRQfPreKpkeKMZ7kK9ZF8wqJACBJAfbynkqHpXjwmpvxvWefbYj876XTJAf5fqBi",
  "key32": "3jUAc1J2vPZyvRCMgzyQBVv4gyEykahAgKZxzAhMLBjGk5BrhJFieKE5q5Tx8LJePRJ89fUxE9kXUXTA525paA45",
  "key33": "2caU5o8eGEZunsbMQvUoKDLkYiT6vf3wgMEt9fVyfUT76ipktzZvP3VZHr3fGpbRgJV2ETR3ZAT3rERoPLnfTWgX",
  "key34": "2kCGa6nc5Y6gvxk5ioUBik55S3woYhrMqnow4scGoyGuUmjYnVi45RtGGJyPwg3Fj8weAaZhaQMJydaeK9dhTLZ",
  "key35": "4MT4mRQ1HWPMEgQU1jAJqXVJLi6U7AfjkLeyAHukG9qjrQwZntknpm55QeKJpw1QuJp4137WU6e3ZU2Y195eNftP",
  "key36": "ZLcQEEFBMfeEucZvqPibfZcankgf6DPqNDK3HbGySd6RFbv8sGpT99Xwnto47NNbHhEf31HSRuocavHiG4e8Rso",
  "key37": "5gQZ4nWqkSXt4QjzRm36WfibhfyPCZmZhkjDVcTET3RuneJp7bYB6t4KweQF6M2FZ7s6gNzL2UXRBEu8Me5o7YZx",
  "key38": "4AXAdxtR8DwWH86e545AHNYrRiw4BGxuNvUhNkY6FQNg2qEzwhjJmua9tf1CfULXzNX42bAG8nPxicSypfhtcNGs",
  "key39": "TCmuh8fJzLc2nUJicZDQyT8CYEs6HeTLAbzbXqf5iAK4Q9DbMvCZYGwvUjWLEj79cGR2osZmDa1MxZ9Vc9Cyqnn",
  "key40": "2irb3Bo7Y5iqWDFnFzDhdN3rCfacLQdjTnNtJz5BAPYuQxusFcZRttcW5P8eRBj1mR63t8PcTtqd5b73JStaG2DE"
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
