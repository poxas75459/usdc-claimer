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
    "bnFoZ9uF9mdyPMF9xgF6B98m6oWPgghq53mpwzndwEypwa3HzqHp8sFhS3MFSpAcRbPt8tTK9hK5eMjkTyiAzgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39MkQzmHvZvmDeBvBJeHFgEVwE6ZXBRT13pNwmGX3oSiyBqCWddLwYVNxUG87YUkbdAhsfrAf6umRxmvZFxKb6xe",
  "key1": "2EzM8uFzv3EuDnFKtuQYxVPTDGKfedPxVvDEeGKJtvoucVCqfri6yhHUvUaiycTmM1mFQb9Y67n2sQ8ZRxzMTMu6",
  "key2": "21NiC7WeLEKoBf4Kp3sPDqvEyXVAVT9iDKPfof4j8J5PicfdTBJhb5LBk7eyhGpMJNws6HiesRPRccnxqq8YPJWk",
  "key3": "5vnnPUgsGyeU3R9RgxxH7ZpJo36RiaXisY4FvoGL8qPf6awaswQHpkgbkbkqDaCuFksnDFMzmMpCzf1GcgNqTeCL",
  "key4": "H5MNftDHv7MXBx2i9dr2bXVWmQsPYvfifYz4takLx7MiBEtGid3ugrwYqZsWsYm1bimWYprazHrAq8QdbxQ5roW",
  "key5": "UNgAhUte1oJMxutABoJF7ywgPCR3RLiUHWeesX12zqTBc5YMqcV6DwUEToJ5GHAPjoEJCXTWyXLoERvvpqQczmz",
  "key6": "4PYyimmYGgHXV9b75txnt9ECzkw7Gk9tX1DqhpPf9J7Uj7XVoPMWapDH1foZGCvQiHvZRWZi4MHNHGF72LRjLo81",
  "key7": "4WoSxKSAuufJzoTTeih6tPtzpgnHPnfyAgSo1cYb2iyEoPHtyrkbHVvcgHVjdPrgHcXAMT5rH5WxjZe4uvLMenty",
  "key8": "2qdPGe5ZANHZDNcnZtymWFH4TvhtMMA9cktsfLzEWy5Xnp9JZCq9jd34mJo8NPntaz8oW2vyXaNLUiPJydPEiAmq",
  "key9": "33vuFzgAZ1d9wErZphoZ4aLRPx6YMoHonBkiQ3zQmGMUDKBhsiqdpxM7CBgvD1CCqwKNh5EwMLSPXmfNSmUCd2mk",
  "key10": "jdug1tFPXT4PDXETGK6TxBaR5FnB61ViqdLc9MRkRshw1geUa5hyaPYpTigPBvoavuhjVWKf4MY8MAqASFDjqna",
  "key11": "kZDrsJ7igdgBdUfYXwegR4QsPaMYnYuc3xUWfHyS162GHfuJ4qic971qGKzzRPXrqJeL6uwYTPNwhfTH1Zecpqh",
  "key12": "4Gc77KDyqyNbXfvMfbyL1EHrmwUQU9k3n2ufUxnXWXwUyygQMtj7dhVTMHq6zdPZbX8hkMynDhvQh9wUMkNCsoxp",
  "key13": "5PF2vg4U2UYu5f8RmhvhMfnQ96dmHJx1uHD137NNRrd7Bdi6h9mMX94E3SSXGpeSP5V1NTVGTsppZyZT7uBPhfmW",
  "key14": "528zm5gLqygV51KqU7GYQgNUsQ6HXJrPCd4EjJFUpNMSVmNY3UVwmbvqPiyLXp86Kyp9APdpvQ8XCHEswUsQVrd3",
  "key15": "2zk4PZW9ZeVGW3DyZLYhCGWngErnq7amuCyBpFs2SnS3x2Q9adJ9zxhZA2yS6LcBdx5b3jrgE3zkDkQkgSY5Nh6v",
  "key16": "a6TdzPwGSsb7ZqewLJmjAXRemY2igqUCNwudETRWZZ9SjzAPCznRqKs7KfK2uJeZecdG6fLSsjcE1yrt3Aa9aVV",
  "key17": "4GRMEYXBCTrKkeZdis3ixiUFvfQDFgm72NMiSAhym81351HNrMdocbWKXCf7xY7et3VWP6v8EoZHYs3e1eF37tcF",
  "key18": "45Gp9cY7JPLXWdA2zJyXFY4JYYRW6jUEjYekf7eMKPnMQSDebVmiNTojPKN41hYn6q5YXzWpdrJFDU4SdLeqCh2K",
  "key19": "5FCTboMmcSZ293bGfoFiYhRHYYzghCvPrQpSFQC82hqT5a8mUr2D3jM3nh6MYUBBYDjM46ATfjBrpLXWzmg1U7Cn",
  "key20": "5rGnTk9gGxvik6RwWJ2nRBFdGTfe67rwWnsiWnm9zjp8Hz29sWhj9T4Vb3WfZeYcjfS9fEG7UBxKKoD9Ge9HWWdX",
  "key21": "r9pqZeUHz92LXxPwPuxTvqASwY8wg6S4uoJ2XYhLqfPG1WxRXDyi5d6R2iMbUWzyzL7grpKAaprUHBwipWRAEwf",
  "key22": "52ihSvxtDq4zLMKuVeudXX2m6GpCfm2sdPaJvTfeE97wBKncpPQWvyUQqpr2sNppqDD65RV2trsDbQfLd5cDKzgf",
  "key23": "2HkQa9uZfxJrTXyWoVW5FwfJNdGU9hyvfE8WkDMaBHHzZBZc2X4FNvmhsSWACw8ykwiAx5Zqz2XqaurNgoqSAcpC",
  "key24": "4SNrizsP1KUENoZ6NK86qLcEKGXDGT947kEYVtT68BAian33Bx18KHjjqq1uNZZtqHqbXLHoDqnmC3avYpXaMp9k",
  "key25": "5YjavsAru2KvUn7jJZstaBkMpJqWVkMCG7RGrWJXNJgjXSXjrmtjbRP4Aubh8cozeX8WtQuCb6Mq5X27cf4hPGUh",
  "key26": "7WBQ2VR5wcBKajqNLbZvtE72vmf1dLcDdRmdJRwXn4Tw5awMb5Po81nvcj1W1LiRefJemca2urscND8ApVwsh5J",
  "key27": "5Q274UbLK63S4NHbwM3s3xTaWRoaaCHzacV57fwyZXVUgyP796o1P3xMYYe4coMzDujAE1ve3HEVRAHLm2y6dbKq",
  "key28": "41FEmUNuBqQZmdavPhJXASRuUbEXZpXRMipKZxTEDoaYUNb2mhZVReHdhMorpBZ36Yrn8hHVxHeqEigZSGSdJdyu",
  "key29": "5rnfgBWKyVb8ErSj8VuJkPFVW5HR48RSQA84UefGsVsKjU2K7x2wenxUjisEY1r48dUCd85XbmLdw3TKBvuqSZiT",
  "key30": "51xm227nYu8KswoHi7LUDQXzX25FGfpSc9k5SwLu34JWrLAv7uhuqAXwZ7QupYYegLoVmKY6ytYsi6mcfHGr3QMc",
  "key31": "MkKvsaJWdTNSQHRA54Rt7XyW9gr3KsGHu5YvKeDGYY93Xcj2jHRoXh7seLuFs7Wf14zbSU1wQ7taM44gnsHp9by",
  "key32": "4EoBKZ5Yvnrmybe3Z9HNVxZLx1DLi7Fk2fLHzw5cZebtxYrPCQ2W8yFF3w1vixEp6y1qzv4csmcesusPgWvnUVd9",
  "key33": "3iMUnTpxK36A2TMUjqq4nbtLUCgVyU75yJjrNCjwErRbCsh6vJa6k28SooorxoewtPo7JUYTTm6v1cpnzBZo3TR",
  "key34": "3ci9EnUfxhyq776PcygJYb6wmHPC6gLchukEQUEtABwsHc9n1THYFE7dBWLLdARFKoBWhyXs3knFaCgVEPzuP23j",
  "key35": "54xoGYD824x62dkEQ2YNBprbnnohFNU1k7GNHHzddKx3bqpvDPPdhq9LP2X8H55DfBa7G8h8bARA26cu93hTaFYL",
  "key36": "2Mqrk9J7p58f9qxihaAxKBUsrq3g9xEKKPmCSHV3uPfct4TkHjEgRrcqSyNxbShUnsNQ26F23uoceMSFXeTmGMix",
  "key37": "3SxotX3iCnunmA9ZhpM1agvdvo5puyskwymWPzzEyEEiUgSNyyDBvVWVhh5d22gefhc1cxqp71zDoaK2VXmWAJHB",
  "key38": "5AxpWJ9rBeuebpxjut3RuHdKHZwuWz6ZqxRXLsAn2NYwCAhCTe6HV7oGcHYTULE4ssRpYe8D6wDXddSCqWauK4PT",
  "key39": "3Auv8JPoyhdmMPtFcahZnpfDqZqu2zAxDgT1Nixq1jsczNbh21Aq9HDpPWo5Xq1gT2sxDp6UzRX7QT49NoFEEEan",
  "key40": "3Gwox3DQ8gpHpZGWxKNGnvbrdkDoh3Mw6RhRrY1okNnE2pVRsvB4CCbvEeuFJDaYb11FqZy9e5GXS4uQ4XhBsuEp"
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
