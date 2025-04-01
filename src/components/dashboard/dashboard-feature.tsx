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
    "3Ae2DjY2a9EHR6LiGwhcF89RqpRdBxPeTQ9Wzem8X5JARHd3QUQRzg8pHdB1cTA4KFCAkMUmpVWNvAdXgcpxtZTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2WAny7vD3X8AorEbC4ahLYpZbFfv1bGN7nS3JjbRpquh8kDbs6XjyPMjyeWVUVNBVDWbYBvm2MJPuYEkoQuWhr",
  "key1": "5MSNAuAyhNjXFMpyj6tUPp9Tqk8SDkNwaqpSXGaEFUm8mGxZTVeRpcyWQRa12dcEcSK2ELBSSQdSC7tpZeDRhWLP",
  "key2": "2ipoNNBbVUweaZiBXt1uJDAuw1YyBgzTdMZxXu2tizbunaceWQRGHnJ3mHEQbcTZw2wyV5mPK8ymz3g5ZQXkgrKR",
  "key3": "JbchE2uBaZtU9Qf9vK1oFxn45tTG3Ja8jfHnufngPRMTiXKcH7N2iGvfvMXXVerE8bUZD4BB6WsUfeQdQjHS5mK",
  "key4": "24sskJTWHyCR6G1kqqFd8jLBn2p7YMSRWcaH3M1x2dXPFPFDtQxaNXoSDhDyFCh1Eo2wzxoaQdfxrCf73o1EgYtd",
  "key5": "2nxpDuqs8crGGym4144da351qzGCCwPhfN5eUFHLdLX3fpWApk1L5WRX8w1xKuWZ3T6ZgksEyZhuLf2XDroiykoH",
  "key6": "28mH419cpKdCmBjYYbUWJosAaRT2djAtLQ2D2wTsKTCWVr9qdRzFYU6kcfwXZRqqzaAhYxggaJQGiNJNn4Nfznx3",
  "key7": "5kKSwzsmxmthSWKMK9qxcqFJeVVkhwuFVTvMUHyK1HPL85LqJnxjTFhCxxvioGpt3Q8Z2qVrRqKs2mmtZ4M6TxRE",
  "key8": "67bp7W1c3YzkaRBUDCdNVyC3g5pQNqCVHVLDd8oLxkHXa9ywwFxDo6LynJFAZbeNX95rHVapQKGWkAS5K63S5xEA",
  "key9": "aXm2S8YGpAncqB2cyXDtU18NyaMHWsYuqvXsmCStxi3mDJVg1Q4haPyUzeyfGdXpz8LpvxP2y94JyEFHLAfpDLy",
  "key10": "3Xeziq51A7Dr7HP6C5AnWkoEYAt3ZAWpMwHUPWQrsee2R497EULRVkMXsgPb8f7gXEuWzsrukcidgYxyysPXZGjj",
  "key11": "XMdkmc4r1bDFzNgFGPN4NaLWWGppWiur4UfrhY9eQM6EEaRybRmgBezGh1VvuTB9pWPpZbpJjNFDJqzZqqyVzw6",
  "key12": "2HW7LFg4wTQAZRW8WH9ZR9cT27yubkmeAgtbetFaathHH8yeUA2fFXVBi4Mmg6NmNwkHADvQnoteqFdARaDasHWH",
  "key13": "2SRnWkD5Eur2ya8GZ3jvJAnudibb2ijyB6jrerBKGYMQ1kJaorhr1Pwx6tNoZuezHGcZi6Q3GYk7zbSM2Qzbc4oJ",
  "key14": "3uCY3mFNKPCENYmdx1m897kJAAjeeoCbnH2NfKzFs3MqqkfJAmoxzRXLgoSsfndnkSFdRzVrxTT6WCV843WLcvHT",
  "key15": "5HrMJLTv9Qy4roaF2aGVDZp7re18u2YkxcwGTDGyACDu39Aq92BB2mvjzzb5koLUSb74yL3f1rY85KuXfcQ6UoFB",
  "key16": "3PtruwUHeYiHpYA3eScQHYTzb9TkSbP7zaGe5FdPLUUuz1MJzXpsK7xaQ9KcXGuRzRGXh8kcgdjWXd9heLXiYyrT",
  "key17": "4SuNDkDqrAS6kDcuxBCs9uUeeK4Yjvjp9vMafAzgj7txeddS3CA6ev5pj89DRjZYzLwMX78iwfdk3zSBHU23mdZ8",
  "key18": "4fLoy1zBQp4NZL12Vg1aoSrJEecgdFF1HuJ2Pz5DPWCGvAbMRyv1q3AGmj9KnGbdEiWCU5bmmt1QvZyR1tv54sTt",
  "key19": "1TKHkbQc2BxgdTfZ3QQ6YMbVNTxWRg2bmzcz2d5MT9bcLjJA9bBaSK2eUTjJjruZGyjjTKThgRMqJxiLYGyprSt",
  "key20": "34GxTVcjek6BpJuER2NQWgwEvF7uHLXtsjhbhdV4r7b15ZSTYuxSa9KJHkCi3NMDjtkTEZRNhBCqBL96dY3n7PMT",
  "key21": "3Xj6WRW2TcuHbCkzFgAPNDWcPT7x4d2cCjNXF1w6jmLTpJo15Y57dkYFc8mSXHhfFJrXuDZTc5khF8vGdrM7TCKq",
  "key22": "2WZ3SZatuZYSeBzFuzuKJe6uEzhCDydxGcCiY2SE8aJYkqQVeBRqnhMzkhs2MwMndQ9Ctp8HTdxEWeXYmBvGQVbN",
  "key23": "4XCAsnJcNVqSiBiBxsAN3j2Ku9HjPG4XMZtQrJk17YwRSTy1nf4eGn3Wy8VideX6rbNYVBfpyZaS4jt9XxghHTeE",
  "key24": "3DrancRrJf8SXbN7jvZMUqN4CYoJ46HTadqbCmW8NxwwL9F23j1mW85whXWVwAxxE6FY52h2zQoy9Fpn9D1gDtiy",
  "key25": "2VMS1PcfKD4R5KqwgTfNoZ8kQ1pBcsS68kV3KMZCfu9khAau114opXwi3fK4mkzQYxKnFFbJcbRUM5th6EjhGS74",
  "key26": "2YVA5ToWUEzcMjzfJNqfuBTANNMU6bkcJ4yPucMvJRFTWNEC9iY4YietGdfW5BVDPxQ5Lm9cQcUWY96LQHo9UJ15",
  "key27": "27WQvRBFM8A5BZgMGWgiaVRvJbrSG1f4Jf9Fq8s9pWgnuNFuM7zhAF5g7nuXX91YwWNZzGfMVbqqvK9qmfWNFY2W",
  "key28": "GqLYQkgrhrD5z4ypfKHSUUWxsE3CcJriSQt6KmU4DtLbLWMN9x7pLrtWNVU74qvo3BvvjFdUxfBjFe3xjFtEYxK",
  "key29": "3o3hLXoTRfkXJUDiq5AAPyUnsy7e8iDBaXQjh1143igDbbrZ18Ee3Qgvg4K3cC7Y19pfwzPrdWLDyEtjRi7twvft",
  "key30": "qAnKvaNB6sEc3VHFnRCWpRrmPiphtzbfNHxyKBY6vYpJc5U8EtEakRWc9wmmZr8162TksuGtMKqDqqz9Bw2QuKG",
  "key31": "7J7tFMPBWKQuoFYUc1S6EdSK7tcPaFuuy6J4jgfLGjRa6nrDassmzWtCrLt3YL4SuSgwnUi2QMGyjKZbJyxstS9",
  "key32": "21f15NH7LL2cstFpiShDZ3oqoLPDAr8anEVBLPUPSkzYMptjrYSxek9WXXonQBzNjtPE38jQ1chpTeWTCJXeKKTc",
  "key33": "3ik3UiYyYAUw9pMjD5PH8hiR5XrY1vNrgHZfCCy24hB7PgcByNVMrHeCPi26Ln9H8CxtUkDHLMPBBjUCbJxaTB5c",
  "key34": "5ZuvmDSEXrNe1odg7Rcspywt8v1Lrs9wyt56Rvmhwhahi6q9eaBZJnb5TsDwjRCVYqsi861DWDLQJ2cr1wwmwtXg"
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
