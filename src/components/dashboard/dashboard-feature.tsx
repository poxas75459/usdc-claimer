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
    "5dVyr3xUaCsdyeoBgeudYhgKhYiQrVk2jsRfq7gzZXamQSFwuor1ngcN2DQivHKKP4eNayHht84orakevpUi41uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RnQzRGaL7R2ap2LCPkLrAun8fNfGD96zoFfdcXXzYvigSbu3h2qNfhEm7bs3D7B8EniRgN4KWUNa5eoN9wAtzrL",
  "key1": "57JX9JmX1eicnenu8xKkthkST2zcpSZnXrzywmcetPdNmb9j6EXHRDLgHjXDNDHAEHYEHTTjGwnMz3PB1DDAgsis",
  "key2": "2NDPTsEkPccpvjmdqCNH3XLpU4AbempAMf7cXwQ3ihpcMfBNoqVfsicz3Y1Ya6FJx5DKUj8WYaMvjfJ46WXgsZx3",
  "key3": "3TR4qp5fKnBvXUGjr6zWP1qeUdMY3C8vXbjGFTjKyUDWo868nzJnEa54pte4HL2FFh7UzePtuU8NCadNP96sn2Jj",
  "key4": "5kWQigeaZZPX8yqD7wMUvFA94MfDBjixF3xhiRFBg4LA9deSjepD2cmzLJtanmjupMbRieTg5uRNvLKL6SNB1Uqa",
  "key5": "ohhwkwTVQBq6DV3G7UwwAgCDANF4h2ZouT5bVpuUroZKtGuwGFgegXowPjcWQxenpAYpgWQTJkU6w2VS9w7hNwT",
  "key6": "2mTyCPWh4f1fSDbx2HEuhLV8eBWdCHbtpCB9EDP27sJ9yHBY2tx3rrpFtJBhSVinqgBMrxKMvGzMXWtXxDtaWcwB",
  "key7": "3vA3uiV2agvgZBnh58whVsPVDK2jFM2hDeaJNYm99RKUFpK2V7EBXxpgZLT9vDQ76bfjyHuzH3Tr51c7jrvpP43g",
  "key8": "EtxWR84butFNrcKBNz3kfkGmys1jaT7nwby1TBthyhTQkjQgfeGrfa1fZiKXC5tCkdARC8dfcRLD7WUb8ducBoS",
  "key9": "2hdiSDP1qUKbhK57Kr9Nrgtvoijr5q4mNL1tAorHv7DWt6w6CphGCMgf9TMCjFq7hNyGgcsuV2NkD5BwbAbXKC24",
  "key10": "4e4JbC4sAiZCvwjhmTyixXSjMCGT5Ku7jGryoMdryaGTwEaJuUSfAiXQWeozk46GyrCCwMrNpnKc5SC69GUW9xLf",
  "key11": "3nYf8ArJsPP2qW28trejxkqhFquuUSTgTaDDx2dm7yj4g2UMgiJVUXXa31BsL9Py6mw4u3R6EapzdqnhP3rCXKUx",
  "key12": "4UxYfdDimvEDbus9r19q2xxSH37j9psBxmknpRS2xYx2Lv2mJiMsJmQPkWDZHvTj3iCAH2f5k3bEd8tN6tR9pLiP",
  "key13": "5wLS3tCWrsMkTBMxd98vjshv7Ad8aB9bdMEbx6dzp5uWNCtTRSHPaYjsmVeewMb5zKK4DPLKNPhH4zdiSYUt4HqC",
  "key14": "XazrVF5eN1o2yEw1pym3UC2cjtvn92FJsMpdeYee4VcHNDE9NCCgBwCtKFKupSxN73BrKUx248rAsCXb3Ae8CTi",
  "key15": "48D7wP72XUgBn32xeCuoFqeKw4hJqkdXpUix2EEADr6LAu2VGA6PqzgWzvsHJguvFu34Hvr8cb87YHZWgcFMPodv",
  "key16": "41Ph3GkQnjTmCn6NgCjdVdDe4sUkGiJU5F4F7SfrSQ5jcDjvD28cuEgxu8NS8dNtsYSEJRg17qPUyJoq2qEHqe7p",
  "key17": "48s1Mjvwn6DeyJWZ9PUvh4qVHLddZ1XYiTFbqB9oZi8zUTm5dpoATsWz9YZZRyjX7smzx77ihxEsvFiwifXUqmA1",
  "key18": "39xDGumDSxvWBEYCCixGVeusFAcN2boH7oVzHZ3tzGHfDxcnuKtboxqVUCmsn6wYR9gZrRTa61mQwUHBpRNuqqRs",
  "key19": "4K7FjC66QGKYsptvHCAuZBFNpsjtoP6vs8dsojoefpSqydTWsDhA5theYJfqSs2xj9yh1UziD63jBZCxMqY6Cx8G",
  "key20": "3kH128oKEcrhwvYCD6t5PgRCcaTzKx8KToavxYHWoPE1StJbgUU8VkPRJS18aj7jpHMH6cyzsdphR8dLsNNGNyk7",
  "key21": "5uuG492jiD2xs6ZeWqCgzduG6ekvQHJDAsdYDTankNP5xdZmEJJv2ZHPYTUzDXY8nmpN4N8g5dh9pbTjEqzAW1oj",
  "key22": "E2YcoZF6A1DonLAmfm7F3jdBY2QtNe33JecX8U1vYPNDAUjk6RKbYkiTUJwzS136G68ir8kBEPCmTXam6EK3Rhu",
  "key23": "2TkKDRLtta3aPiU6MSvjHHk51DQW2iPhKDxt8CrezxA35JLdhYykepc56d7cokEUaQMSsyKuUDhMbrY3fZAh4M4Q",
  "key24": "2bWYXrTFPFmUGEy5gvqSeowg3dbBBz4chPRdc5c8KbAnj3CjskoRYUEp7NqrBr4VmEQ6cGGTWYcztJFg31BmwL8",
  "key25": "3vBvg4TN2bJTxeH5c4QCino3wUTZtono7FNqjWiSKXN5FubwSyQZQNVwCtmKg2np5mAAh4iX1urLcboHjtFymMTb",
  "key26": "4ErdikyebyxjUcKnUH4PMpyzvPKQZZ1DYCWJgXUPZXQwvbAWBJgy3m8jZLuR7hGeFFPEwMYD7ziTk1JHm4m1h9ab",
  "key27": "2YMTZrkmr2TwWhx6eQt1vEn5A8BZpM1RCxB4hjQ9GKmGFKsLm6cR3r6TPi9LnVA3yNuHArd28Ay4pamCkRpPiP5K",
  "key28": "5pLBuybFSw9SXMU4Ubk3FyLeeEEUnonoGnFSn9E85Xy1dj7Y3scGiHRuYb14PtcdoPx3JDTX6TtLQ2YQkrZR5dJw",
  "key29": "5PonQXmGF9bkSBs8TFvg9pxnGz5fzfa4TsdAtqqRUwc2yUCaz4yg9PtAhkkNVogLfWavEZ48147kBTMRJHUujJD8",
  "key30": "4EAx7wxBmFVs4aYcRydisZq34abBXZVnqmxFExg2RsB4UXFS57gjvRMkgCeZ79sfA1TNM3PTC2HYY5aEm2iP2T1s",
  "key31": "DmY8ED5rGHfn7uggMcHs1a95vfqbjAqu8feVvmSSXJnFZaqkXPG7bpF5UubBqmfvU5KJ4JzQuG7oZNBZaWpr9fW",
  "key32": "4oLKhTb7fjN2F262BRFipemwrZDnJ9HuvL3GvET6oFsXbTeorzznNqc5rM9uydgDCwvmyGPTuMevfmRVikcM9z5v",
  "key33": "2h2sXep1avTvQtiBikF7MUo7985g22qPmLcWAX1kj7yaV8WydwNzM3z2dmsdJXhcakJkx55RxkXsRRMFzdN3hKB4",
  "key34": "5B4e7yqasJWpYmUk3QNog3E985u6x6bA5VS53sf42juYpQBvwzXTmQJnpXYA5yFRsuhc9QMXcbHK6YZhSHWMi1gU",
  "key35": "2fNJHikyyKeMj9pyZqmQmmLHvmBn59WozmBnDJVzisbqFC7QCWhGgixcse3SPpUjL6qC3mbatbJ3xzxkccXynysJ",
  "key36": "2nt2zkoLYB24R7c9oTd2ez4hu7QCEH5UBqBqzxMtGaUB4JoUfVaXGvBgpYbLukhdYSse1fZ5fpzTp9cvAhko3psT",
  "key37": "pRah2hogrqoDULmwgGDLhmdC8noRD99pSZroWKti2TaoUHkJTMZ1AqsWmddqbKkSdDKSxUcvzHErVxH9vfrFaMY",
  "key38": "4zv3YeRJyTHMLDt7RDXGprBgkXxmwefM7vwE5g7s6pq3kssdDunkroRjfo8TJaMAEADLSqrGmf7MNFsELo3WNgXn",
  "key39": "442GNgtkrL9j5T2mA7qZLgwLGCDzLhWRttyRkyAwCUKKsy3EkCjaQXAhVoG75GgXUiF56w7KJDiTQdVjJ9suHq48",
  "key40": "5S4tifkmrCCG9G41646tG91pRCMXL99s9mWgvU8varJnQRkkdCpJQwWcsidU1vKtGZJkGdnMZzCBSzDwjanCPyWF",
  "key41": "44h4dwFTWT2JNT5PuzCjCDtLzrCbwsX2LffW2bWCUvmbwum4jHR2iXH2V3G2XoqDk5DgDF5wQCCKbE94ADoaYJpq",
  "key42": "3hMkWEApdeZgfvd4BfEG7H6hHBBvXq9CvadN64h118NxLb4ZBva8EKkybBt8vYQAEyUvb6MbeAutk1KFHrSw1ust",
  "key43": "3tzQUxs2w4iwiQ55tqiT18EeAgqspeJKm5aJzKGMzadNxhZz3rm7ZYAJ7mu6obDTT1p2SY9NReffaF4RDcaXG3b7",
  "key44": "2Zs3GVAmWWFhZjADSE3Bzx3yMg52aYqwtM4NYMbAWuPxTzASF1Mm53J7oJaTBaSuaM2NTugyqxcrVNQwe7tfNAML",
  "key45": "5bQzmsHtRt32nfe8M8b2Qf8stEstq588h5wJKeyBVzJmDcm25911ABsPDe1ScMTQoPkBj2MZJgN9Mh3BD3HfvybR"
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
