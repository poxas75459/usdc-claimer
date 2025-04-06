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
    "4g8Z4ELoDGGJLQcrwYk3qDMs7pWWWQrwL31Nik9BeQC85X7xD1A2wsB5gv7fkXq1WmK8fwLkjsg9nBqHfm1bs9bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBiXjMFiW2KgQ4D4zdrc7tb3grqws6W7QadVUFhYAq6z3Mzdb2MLybvEwLDGHFcn9cCmqGsGHphZLLTHoA7uU3P",
  "key1": "2f8zog6WhvYASNQH4jih24ZSo3iNTom94QSEBZ4UR3pdW2TkS9oCsZ77SiPCnvtJBGuapJiDaz1tQiHbZb1GE25V",
  "key2": "2QwgZhHQsjBBQFKY4AxtSCGodgLjBHiycWX9SvG2s8vG9oMuveK2n1D68XYMQyWxMgyNbQGXs1sFFc8rfjE9vnow",
  "key3": "2bkPbxYhncqja5R6YLHN4pyp9TiiTQN3EYEv5hsJAp5GHzaAJmuqDg5mV9W6AR3Xrv9i3V9pRDMsd7YM5GY6PgaX",
  "key4": "4icxYzbNdmVVmW62yYh1H7Qr5vQ5TBhzynse4AvRqeXALCn3jzna8ETv5LXTSYvDAeXFyNgagqrx5fYWVUxZXQu4",
  "key5": "5CAY2m5mpFrBjeTZSU28A7Mi4Pwy4mZd7VHjMxYrkFkWKfgs6EaSGdMLjYZChmtWdagEh2XzW2YkaN2PtwcJ8TTk",
  "key6": "4YxzaEjdRmE8Tud67TsJ8oX2hQ3x5qN1XpqoK5M6BsQ1YBE8v2Zue7jnh7mggpM8mxqwQ71XYDdjj1a897Mwrpz7",
  "key7": "Y2iBVLR8VcGNv4YSF44x8MLamZ7Yi2i8v2aJ9DE5Xk88u9kfqoBhV1TBLGVvovEC2JAX6efUbej2YeZZCfdGgYu",
  "key8": "6kyfeZYu89L8hUfBc1nJbueVkJ5515LypTStrznPGyEWRSXFkE2NidR78NpkEvXJXwk4YeNz6T5wDARybChidvi",
  "key9": "5JEvssKQiwbeXuL1t7fB7sqkyok6iE7DFnyBNSi8qcbcDXj4LwkH24hFQSKR3FmVnPm1Lgx1zqxHfyrsZdoFhb2Q",
  "key10": "3WG5EVjjiBRzVhTRpsXuaZSye1nD2vLkFCZJQdSRuG6odPRDFVyWn6JsvB3Yn2vK5FMs7g5oxxfkNd9AzHLvnvsR",
  "key11": "3hgKVF8gosDLBRsjPXd7L7zjFSFSYf78S5u2nNBwgj3oxJmVfV7i4B2pgS8kWcLanQLqJkGzHKvfMhUd1nd1nmMc",
  "key12": "a74yxZ7anNpwVQk6SBW22ZrAA1WXiVNEafPoYLu5GYyb5RSP8tBiXHfcqAMD1LuGeBuDMbfmZmAGUbBYHQ6CJrj",
  "key13": "29NeyzD9KuyBbRRMZeKyoVLQwp2vCtdh6Lp7cT8p1Quqf78oTuMViokwqPwLfnrSY27ioLv4M3MoaZD2FMmyRhYU",
  "key14": "5jX4fYa5WdWwB8aAm7FD6x6P4RPFRcrJosNR2oKYc4tovzfKYFc5PAPf9rznZr6x6rffWVqYZSYxYRSsaugL8CBk",
  "key15": "4tUv8dm39szMjsE5xFn8buff52iZqisEHvV48zXPviyc71YS6UnLScyVXcSVc9JMJ8MfYmj6iZ8ZsYHxpAgnjJyj",
  "key16": "2SKWBxiEuU8FbQuXs6HmZuAPGty1Bg6eFDWf5Uwk7n4ZdnjQcodybNCmbHNDnWQUT6UDGXhunXvQJdkqMtzag3BP",
  "key17": "4NF2FfjU1SsrTLBvLo3Rnki69XALtBBF9TBj3efq5vcnTpuMZxCo3K99XtjLE4feqtSeVjrDop9b7KULbRvZ2VkY",
  "key18": "5PgQQrKcXnfCNDetW3mrZJdcguuZoHzVTuyRHY9qYpBZVGoWXtH3gmoUcDJWLuW44fQxJBR1qut1zqQHXZ1pm4uK",
  "key19": "2mouU2z7gh5WiGt5VmCxGJFDZgPCjs8eM9qVQHTRZ9f78eDkyvPKRt15Tszzdsmb2U6Ek4KX6XwjYGsfFpjLke4f",
  "key20": "5vrSTHon37mZHag4mYw1F6EkwdfYv47bqnzRR7dK71vwSfy2zkmM5dHJGeCoZUuFfHhUzYRc1m8eMkozd2gr7wCr",
  "key21": "21biMuzgjuUXjnpUYpfn555xcE2TuAQjffQXtSim2yrpBARnMxkXHKhkfhi6Ebug8tqcQX9ZZcLS5mWJ7ndJNsnq",
  "key22": "5eWxiaBL5VtF2KuE9FpdopWLB5MeWSRo1BVYZPekdK7N6PvXMeHZbnMuc68LMfYnMshMfKfoRJmkdNCoeDa9Nhqo",
  "key23": "Ax4WKZBirWLYdEBdo5nTg8wEkkHYXLsfZX534HSGFvGqeoYvtTeHo9CEVGj1tDJLDwmHxDn75uCZ2K6UnDggSJz",
  "key24": "4KQ1nx74PWgmAGTDFUwYvEMPN9FAwX4FHqMwvhDP7b88WvZ8L3q6CpXiLs4v6G4tWazsKLpPbogmoL3hrHsDMEeV",
  "key25": "2Fnwnk6uqTkUytCbg4j4rJpbGPgMez1iKBT2tyXPfye6aEuRmhiJPYkujcFEGrdi2nSosMgyyVN3XpDx3JLDkWJA",
  "key26": "4EnUZA8pccqB6gZNGSEDDsAtS4zEpcpSAmDYJy9ahGRxBbsPaRJXxDmAGFSo2CZZR7MHBPX8Y4CeqWVX6Mecaufp",
  "key27": "2mtXzsZZ6T9diKC43Sr7nd3Z1DtYrnTPK94wmEKpsj9wgcpHFm5coct17N3TL2mLAnZruwfzYanSqTX8gfRDMsMZ",
  "key28": "3HiTPiKxYDr7hmb5Hx7cBXLUWftZtmobPEg2WnctUzuDGcNC5viDGW37YVFajdaKMBQxyTqA9rqypPT2a5PhDCTT",
  "key29": "gXaVkrSvNwyHzn1PU9AyGKiDiZCAeZm2ctBfuiDbKppp6ZZKNxgxr9QQe8RS6YG2s1nHEHaRbJ8AJYPKDVYdMp1",
  "key30": "2R9QDcu6eWd5kon7TfnVEtiSytYRpjs2EkHQss26W6DUYDn5nm1XkLixo7QRERrfN8p9EXwvAUaxy38PRYyjRfQT",
  "key31": "5t36nnPy4LYXw2o8WHLyQjS8bJXZwPEnM7mEVUqQ4rYKWj7JTn5EgTP6QVcmbzc3MfKwTwsWC4xp2JXYt4JQ74x2",
  "key32": "uxmnATe3t6dRxK88y96dc7TxG5FKn7z66xxtXcvfcMnwxZx3jkrhHLa2jWPHLpsb9mwiqjy3YpvK4iindhKHR13",
  "key33": "3sGnf6WbmxfM6o3ffSvDG2xDyp5tc5AHVFebAjw1k2pxfDJPDJLBdHys7n2Fww3CzQ6e81paXovEZFmECdAWMWKD",
  "key34": "4BVMdgwXS4XZikR53fhBHFMXWGMA8ssiYUjLfcTDvVPpvfUEpxmyMj5ucijf2iXmecPpuKmgkSSjACdT4NhJcXuc",
  "key35": "biLk3RaBgmarvPi79ACoBKjP9errWpbB2AJj1DfAYkZ4RuaMFswUvgfPTyXT6GF1hNEbWDoVJPdaZCcqLmcRiPC",
  "key36": "5Pige5ai78TuHWxKGfc1YUKSM5s3Q6A83MACSn7c5eoFiGJyaoPWxWZkBWcGcwVvap2ZYE25m3RwyTwoovtcy9cX",
  "key37": "2bEjjMNiKaz713QJJMWUG7c9RJb764Vr83VW9x7RNmPRnuURrfmG8WaCgVzcx5aF9NKhC1kBG9P6Sk2iDE9cmA2J",
  "key38": "54sZLmEsABhBsQg7FkGCgbZc2VRVds7dVn4v74rVEKdcxbVMRbCZmdGdunCRuJiSWPxXwh8aYjVz8QFMDdYDToaJ",
  "key39": "yPjpB2EmZShV2hbiCdmTe4nh8wektncX5o6hKewDCfWdkGdkQHpxAjGhyK6Dr9obQz551YNgmWHEPxfcUG54378",
  "key40": "3yo8U1emfCHfVaB7g7bR1xSEEq5Brx4qxAYR6eiDoCJRgHekYCj7aR8kaGjLoP36TQ7fB6txVUUnKGGU58K2Gb4M",
  "key41": "3mcFTtybJ2HhN4QcGL1VT97n8pB78746fE32DymDJgQwgZHybP8KW1tEZxEBefViFhb9U3QvQ4Cyuha8vdFYug4h",
  "key42": "4PzTzezzCEiMeL8rUxxDH6PzhYSXBPEc16g7XhWbSyBQCySnvNjW1JJNKq8fGLT7jJjZSzMtKt1ZrjTUpyuUVSTd",
  "key43": "2KSD6gQTLbuhKFvwAdDtyVnnhYTijMbosm7D45Co6s7Z2EVPuhCCdHycHypasTHLK9QMxGr9ggwh6mhibtgRM2sM"
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
