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
    "8UJyb9uTWBgQ9Wu5iCMrw3wfMQyM3Em9XBkMfA8LRY1LZ6xRyh2zEf7MZ3DPb9kcFUGSh1nkktxxU7BwQk5RGYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ZMwF8833U2S1x5MBJbMBCKnXKRYRTspCPGGeF9qzxYeMqFvNmonakhYTCvMrbmNdS9pWNsz5cenZB9PGiV53QV",
  "key1": "AmkbVxzb2KmVBU6nxAM9tLxBoFkP7rnq2uvjqyTPCrL2geaPmSxXUUD9Vy236C1pv6U8Bj5PAnpxr38DRBXZ2TY",
  "key2": "3Bi8AN5oLuARqn1Ezc1juC9opiQfSynKJb1jm2AJVsNjJu7E6si4kfyZbAWQQq9PpQGQfoEZdtJnMCdrNC4YUHVR",
  "key3": "5v67bSzE9qDjUJiztnf7Z5EUSgFVxTGMUnRwmqrDPmzuLbKdAPZFu6xfd3kgEvfqU4rcPuDFeAaxz96sJtqSKDFa",
  "key4": "5pUqd3vj4tc51sCdfqGmpJbBiHzn53aqfB2DgtFPckfWtTHYLS1ewWXzFvEFt52syZaER7KvkF7xwyHrFWkKSt9H",
  "key5": "ZeXcJtCpwbWzfhaZX8yvfXwowQbRhm13LH4qrevtNGj4vFd67aMAvwBBELvUaStoLxVPyDxBe6yJmnikrEPTVBe",
  "key6": "4cM1bLEF3oxqpXZE5GrV5vHmLCUBL1bSYJ2JAxjyRpGKyZ2VtPmgVLShQZpkkfVLQpMcsJoGoYmLqVtrePFmXLAb",
  "key7": "5qSnhkM3UibARwA8ypfgAuYusADvYRyML9x2Zw8DzAHDZLhxAVAKEhcZZ2vNfwxKBTqBsut8fsTKNsDRSaDn3qTN",
  "key8": "jvzB6wGHDYnnwvPHQtRZxxbqkANQg8RoT8hMGqoQJonaxN4R28yn4WAroYdGvZagGuYwdCrb8wNMw2dTqVuhYwJ",
  "key9": "xo5YKYJLXeFQwtu9VYXHLb1W2qgaJkzvDcULTPaos3LoaWFQBxuj68hNCKxqjQtws83oc2MWSkWHMA3p8GtQVGa",
  "key10": "4JWqPoDoh8PJmucQNHLZ2MuPt4tkxwZ9oc7AhBLEiGmXDKFmrRShoBeuau4TNf5SPmAqqy16CE5NUoMTyYg5jYj2",
  "key11": "5gRAKHaFtEmR1Mj6tzRk8T5VL9Wz67njD7GAcKf362T3BrreSwqnXUChyfEohky54J41YP6TnvX1UN6F2aKJtHt8",
  "key12": "Y7azJB36qvYkNY5DqHbhHiE4rTS2PtenR5EDBgkN4hTWaCbk6CJiK9An3mqAZb32F9ibNPmNWTQRmkucyUQwVXN",
  "key13": "2Cm9uucKaaZbM54mynkNYW3vaGDVHRLZsqVqsCr3fLeu77pygrXBq6pk2HLRdvX6zuYEk9cC5CdZXF1FzHJMKeKb",
  "key14": "gke3kxEb4pLfqp3fKfYDG8P6HxnD92ESGxeWoGsMXhVZFjoWkxVvugm7KyRjMjepMMiR1iAsJzrAkmjvFcWWqPd",
  "key15": "5nwXk1VE45o9wqe6tHhwrS4t9EzYYcgyiYiqnW1seikDmtbMmRtG1KbMznuY2SBoiZwc4amxNE3G7fdKDe3NDt43",
  "key16": "5pNqR4YW2HhNRahRBqb8evS2TE1ZtPzVGh1bHq7V7dNZJ3eHFVdu9UXVmfoUmCvxmVgf5XPb3wfb5a2DJhTk2PSG",
  "key17": "2SrhhB1w2xv1LLPhfdr7r19Q8ZooRKAd4txnZT85D2qC1K3Hc7wZiSae9hUFJuSB5Cund2qaeP9DoDQ3bZXubwBe",
  "key18": "2YqNHfgH2PGqaguZfL4cm5jg8vR36BTS6DreKezqocLznC3rtqmZNAo2ma5HSRhPu7tLXuwEU2Ek1vWR5SAdfxoN",
  "key19": "i1gNXH6MfEk8u1jn2ZhP1e3zPFGq8mknTgGZFxBfG3kB4PiiMD6oaP6DJhqoYGqDibKWfTFQZhWNKG7MDaBjz2i",
  "key20": "3p5oCJYXaHS3LC8X2rZgUR34fEfTioeNSZfH7KPiYpSHuAnHNf9zGiJ29D6YHBowPb79hUZ5jEP1qhAfhoQqPYkN",
  "key21": "5LMKqf9xeSRUiFRrV7cQ4mqx6qNLDbreESCyrXJi7yZNriosPmimdJrr1vVUDWpePkPMZu7nYaw3Q9edVqwrW3hG",
  "key22": "4WdZ25FS7SBsnXZFArJTMRaBwHxSJvBhAJo2U9Xa5GmSuQggFjbC2tYBwH6rQ6kMDbqsQcuZpVRTkofTVaXxxsaA",
  "key23": "5pgFwEFdRGBSVh9qcBKJzDhksge7ut9SXGg3SFPXgMybLN74ty5My3hdQnXbbabP5FGWzMPmxkehrkpVTGEap5tC",
  "key24": "5SVNA6kMPhnyvZxSrCRBtL9vEBRePvr4D2kagiwnqv4kt9cgmufLwTkyZimDLYv7vT5nLJ1hC6fBAUCr4NKytpEV",
  "key25": "vwAunnpzoF5Q16rHb3UU6aJhLzC6Gxf2Yo6cGo7oixmRzNLNKd5LLxbRLFE4unRe5uYQGuP9ejyPTnGutAq1SoH",
  "key26": "4QTndV5AvCgDbCibvpxksTSYvy8VU6iCVZCrVCwGZHnPjPuvsiGPXkSgo2oHpjWqjDUqCL9c7NstCYw8b5AvvSu6",
  "key27": "5ya39oqsBEXGXmzXqFggAKrcvZU2Zf2D37BK84xkprpx4maQ6nHrVfXm8jU4HSBfApKZqgPzoQJSo3oTLSS8scKU",
  "key28": "bYAdwxUqtHsxNxafYbPDsHZVTovuHUUoQgyVPFqQ1Ef9b8suLNnJcyeYyz5bexkf4CUes9uYMWTRwyyPLjX9oWz",
  "key29": "4KUmNU18YALUdybHRXhmFkBwpnAXaProad28yeV7iqSTuSdQhsMYv63dsWfVxSLNxARmGbEvDU3K5zyzxfwuv7Mp",
  "key30": "4m6wBgFA1i2HwgK7HbPPS2CZcAnjszbBAMFx3nRbxEYFszNMLS1PyxYpoh8xEDVeVNo5Rz3rdPxZ39aw96Q8gpRb",
  "key31": "umDNyriJRdNFGeuinUdfh64rxcQ9x1jCdeHmvkBm3YmWnDuuBiL7tsNSNVzfnuFAX3miWU6HAuSc6sqPBcGvNue",
  "key32": "DRpCoD1SJEWXL7dMKp6ozQXi2jkxkCjWpWtnaGXafCLHT1uc1wjDqx5cck4z7zC5YGzWQSZadKQMNjUXusRtZS3",
  "key33": "5e7RruHckRMBf2rikkmgRQZ99wBPGFL4fJfWstd3LowWxRyzFiUdAsmDf5z5omTFprUSfKZJdJTZBLWA1V61wLmB",
  "key34": "2CSQixvEvtAV36GQXdbp5qmcsYnQkhd2hsUpZy8L6HGrBGnQ9JmZGorQgx9Kavj4Cdixq5TU3LffmyETNEDKASwb",
  "key35": "2fAH5xVyMThRYh7vjVyG7E4q1A3Wo49QrKmtmsjQcmGPWZGz4RDB6qL8zFiWMaxVUnmvpfV1MGm1ypkSNoqqqb2r",
  "key36": "5cK64tHmtCfxNbX8kE4GH8UNqjpPTRxmwci3UZxbA5uTyPtEVcjVoryjyFLhBaa8kH8MF9X57oEXWj3nP9vGzTkw",
  "key37": "4i1r6uJ9k7g3y8PeaFt5Dppi6cNwpaEh4bY1pEmbwRZ9bqzfGyQA1inVbJ4QAP6qeqhGKBUdkTXpbRC8VyAJNChC",
  "key38": "2xz1xh7oyDHKXgMDdN9g5jZ2FzgVnVr8RxZUH6hEAwYcdj2uSmdh7Uim5Pw3VfjTfEAGgUBppQyfdgZeVr35U4M7",
  "key39": "3JSifya3pXNtKcMZrRuYPLg6gmSULXNGf2UhgXaiuiePmgcJfhCMHB5szxhhiDahht6S5mfwE1XWbtQhEMeTbRRE",
  "key40": "jyMxTgnbaj3BqjM9WtJMCJKxF5RsDytGGy2qvsZ3gNptAAgho9MBNGoGwYHMWZGGCDkPUpUbQiu7GR9jzr4NteV"
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
