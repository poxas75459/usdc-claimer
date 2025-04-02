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
    "429vqaBGs69aMJBtUvCeQD8ZSyf6uNjfAR6RN7rdbAuCVGXz4FKJ8DDvEhmVA9k3XGsSMmfrgKCib6S9D96x6Es7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E98GJXX1rb9MaPitmF1R3MHTgvASpeEcJ6ECxbNNU7w1wXNXmea4LShdzQsmSE5Zd7zucJvszAZUj9kwcTMBEEJ",
  "key1": "cpkjVnGZGypxkxc9ipVWXgLMtTSnzi2ZMhUpKMNo3adk7sA5R6s2AAunkP8vQ2P46GTQW17bC8Pbe59jZ7C2p1F",
  "key2": "7LWxPmUVbqFHFVoxtAWGHg94ZzBuPMTuArUynJDMKgNShN8oY7xRF1VjxWFrme3f2ih9RnbgSUEqdMHezSi8ebs",
  "key3": "2hKv4WSLR2neXQ9sw6ngpu5Q41UufGug7FQJ6guNSK4CuV3Z9SBhoMSccPryja6GjBv7dFqDGgJR98jqPbMochhj",
  "key4": "3Kyb4NWKNua94waxedJ9pqYbmuEuQsGMzXd9aAFUNGYhZFny3cLLY2qWLy5zBNjcmqWasdLQoTCuBokzVVQEU6qS",
  "key5": "34N2N9NksFrBrhhrnYoudj26GsF14KPiw6DiMMganCWHcVjxweJwqhGKzttdV1MnsvqB7WBxbKNPNp2Pb2FcGafC",
  "key6": "xcPsNeDo5dRtdoHfKUd7CZGiNhysdAv2s2Wk7n81Q1kQ9z8opzY3hw6c4cPHGj7amJ7Ag6ewJ4T6snd8GB78nX8",
  "key7": "2xDTJN9L818mZtjL9T4PfvicFZXm3RY5VpU4KBx1zvzDHYAair36r4iHdSBnzuLdbzcrrQu8BhYYKasfK4j7zeTw",
  "key8": "2Hw83gU1yUy8wD5HhjCATaiLyPqgDkaBjH2dXwWt39iyPkTzj7Xt4Qcxwfwq19M3wfTZGARRDnTagseyYDzGJbcP",
  "key9": "325UvoQxFAbPY3YSNQN7nEcYpXjuoydAaU3LniLDNEAXsoCpA8y3Vp66ZJ4hmwL14gxMT6Urz7XVR6sFYFbdasGk",
  "key10": "4hubvpi6oojq6xUoCvMViyX6qTKQJcxj57xnTn9ZfSio1iCLXDQs675J2Ya7YVcpPFRgw97fDTwALbZsQsY1KHH9",
  "key11": "2Cwmcf3cpBPpDzYYH9o9zdo9AQsqY7R5oQhHCb7qFZTc6inyxNYZRXusDg8UK8VeJi2fumpjJH8Z5RyGJJe29qta",
  "key12": "44DfHd2UbAQh2hQvajK4H9yv6Ag8fn1EC3qWQ3SXaS92DqRHmMDfjHSkc6csakUwV2dS5L8deMvmA91S6TXooA9W",
  "key13": "37te5NwdUAE1qs27a6jAFwULk1PQV84miKKVmAk9zYxakQVgsnvuZcfLkUAAyHHJdLY8sX5xvnn4EDvteBR5pfG",
  "key14": "3azX41D2VVUCaXNKhYn7BHeUyLh6ZuPVycGLLZWcXhKLjSSEyBp4HyLcTBu2HhCL6ia45FkbxhtLenVB8GXJph8j",
  "key15": "43i8XTySudMi6i54i1KueWEAR2D9MjDsSM6MsaeejMFu13SWPRT61h4cBpiH1XHuavK9UCX1EDXMeP7VAbFUASmc",
  "key16": "3wEEfFQ6QyzbcZVepNTKbPhFiW6WmLmJcwRrNKpHecH727PJiYJ4asHoDiphV2y25Jhn1B74SEGhAuMzUtfZ4J66",
  "key17": "3WzQ1461PpcLG89Cezo9Sod8FFEKmU2uNEGRpq1xPLRHfQ6Mp6MwM7daNa26CVCNabVGMXW3ikqL6qqJjYANTdjF",
  "key18": "2bMZCqt1V7KAuE98CnQAveJx9PcD7NBtU3p38vWhauVxPk6Yq4YXeaPBX6xmxykEh83ZgtTNtzL9XwQqMHeEnHK7",
  "key19": "3kDw4cs3cEeNJpbXNheQw8JBsi1464ZXLigQt8r7PE95KePhruxDREZF71y63PRZ7VdhSowmKTncpQK81TXWf2HS",
  "key20": "29EdyHMzUtnaTX7duhm2Pz2YViWon8GP3ASQXdFYiWR9zZauNHMu6iaW6E3NKz7ZKbLiAoZ2r4gGTBFXsRfCqtwn",
  "key21": "4J1FBYzAGwMhitSpZ4Hb3LwwuY2t9xji98WAXWSHdXAMtMMFLCXQCwdnyQZknRctXfWG8fMLTV4parqT1SioAnL4",
  "key22": "3NybdTaMdCLvSRoT6jEASMmUUauWuqLqrhGupgZLLXXF2jv8gGMHXXt2x8DgRZ2pDBWNNNQEobLaP2AAAwTcDZ8Q",
  "key23": "2wJp8r7JC5MJTbY7n5mLRV2o7K6DrB6credQVuBWeCmBXemM5pejibCHKDao5vMYNrDscc9XaRtK9hURcj3uX6so",
  "key24": "2VQj87dSKBdvLm4B1VwFPh1FuXjY4RMnYejR362aCv1fQZ9K7n9sGbnGffStR9yj2doA3GJZdJr8LGXv5bDZWvsh",
  "key25": "3cGFVn5WDX6co22QJFieNfzWF25rLUXW8KWyUx6q8PHPcj8Ss7ZZkkKS7oQPLmfTedwaq8A6hLhJdBh6r9hXLZNq",
  "key26": "2kvG1bfQXLAE9c3KM5cav2eHBHXg1WKiRXxS9LVpffFj69UwXxTDYwwM5c5aXptdyZay8pQXchUCxaSh5HjB4h4Z",
  "key27": "M31z3A5iy59jVG7KZzYM7iJTgCDzhMzcRf66pLmuAsNo7dhgGq4q27c9MR8zrihgd9PGqviiG6S4tcXgBD8TTd4",
  "key28": "4vFkvJkCpunxLEqNgxq6WBqdsauuWxjZzzHAUfUMn6qWu7oKc3j2skH7f7jywRtV892WFkicgrGpnaXGwKQouAJQ",
  "key29": "3z9qv3farHrnd8yyk1ZU2462vzo6a4QXeBG5kWhnRqA5SSqBRDiz9mBF5neKpYANsLuspCUwvb6o1JK8XGoBkJb2",
  "key30": "4bHqdpefbYHEYV1TDmwGGYsuNywTzmNMZRgfpApgCrhaAPSmPa3sYTu9Ku8m5rBotKHkekHPejJwrNAbvf5TDNms",
  "key31": "5e49KDqVXU7FFZQMNjQJa2MtziNTMNp8XLv6L9b5rSf94pMXcEtNyqZ2dTsxefNHxD1xhEfjb1QVMBPXhY8JRk5K",
  "key32": "3xspTgoGF545qiZ26SnPBmzHmVYYQput8uxg2SLK5x4kWMXaee17Hzuu4mzAiyAjYnnnX8zuCFTSzHhnUGQxu8pd",
  "key33": "Li2QFUYmgfNyLZiBaVD8N2d7P6GTT3KYjunqboLdtQbN11UQhUQsa1joYy5G9McEbA1gk6RgFU5tBoF4x6otP8i",
  "key34": "4KsQo1BH7rYygecs3AdgQidJNc3DrejCsLawBNVkgCThByUhiGBH5nwbpViGAZQcgKmYgruL7HiQHFeUsHmo82mp",
  "key35": "63jznLHtBFezJDQBGZBpZRVbup5GGQbpPLuNJWvHDb6MucJ8MvM61NpCb9qLYobATDcHnYkzwdQAARbb69HMc9u7",
  "key36": "4RWdkwJaPSxDZK1s8Exg5CsaAhTBEwNPb2sZDxMFugAPbkTAawBbKKMa8Y8UJh6XB528WicMC6g8dAnaFzTvTj2n",
  "key37": "41c5RFoxfS7pDwaa7Qbgb5YG7xgFaGcS3aMcU8y971dTY5PYBAdE9J3yraFmuw11SZdKjn1dg8bCP4Tydse2W9TY",
  "key38": "st4Pxwr1w8g1WA4Br5gHHhucuMYNRopPdfHCAonBQnimQJcS8XMbQaHcK9RaKfErQz5GhHj9YisD9BGnh8behgS",
  "key39": "3fqH21Rssn7XEsoygTtRUDgdufBi3XYmmSxQwXcriAehrptSDhiQbZixHrmGtycpcuM1UiawyJ7D6GcjY5thaTYp",
  "key40": "3f8RSBAo36SyQ3ZCWZ4r5eaaqGGCRSM48Xft5AJUReTE9Apthv6VJMu3PSwdCiLHXQNnUfUNCsa9Sf3pgG7RXKog",
  "key41": "gF8raLJg73PBE6y9fV7yNsieuDdNGqqYRQoH1CJPevD7mwtbgTQc2HhsUhXjjvdYZbRfv2JDe9miU3L47Gy1nsG",
  "key42": "2Wh8u5uCjkTsjNmDZvvg1RXuGVesvfWKF2mVqaEYUGmjwqAXZ6K66irnsnmvs9PutvvJszXeqwZ6n3dWQFMum5yw"
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
