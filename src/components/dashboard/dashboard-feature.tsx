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
    "bLHssWh7bT9LpAZukRzCGRsTVcM8WCGrTLULRgWGahmX8GpY6PjQCWhHpFJkxWcYuWBs6s4vXAUpaYPpHAj5TqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NWxrdExASv6AUXzZU7SEZZAtBJrVL94Z4uLXWhxh1RAQYtMLcsuvbZiQFRAcZakZAuUda29HDYbT6RSym5fHpt",
  "key1": "59wgfMCuio3MGXcLeS73MCosVcd1Rj3ysbawxCZVHS9YCsA5o9dUJ1zLZeG8pCeZrTfZVgbuhAfV2sUeTmExSBNK",
  "key2": "3nuFasDpPgJr1BS7qcp1MycQsmLYcpQ3uQ2YPqAXFkE86JaVLAnoajPnr1YwjXu9Ei9UNTGRXGx4VqYs2CRUuGMR",
  "key3": "3MeAU3aWaerKe2UPjqBwRYUKRFSezLajoxKzSZk1CcqmT644z4u2PGy87WDQ3SEwoQmKCUkZ9EVjJC1NPX7Riuoq",
  "key4": "3oRRbbtZdLM5ihMRFV2V87VfoVjRbMijAVQQYm1xuqywuBu4tBMqEvTksJL9wpcS2zX7w9nU6sJQ1Bqs489NNUN7",
  "key5": "2wUBjuCJm8CMAEACoATbhoYWMdBunGbTQaycUT636orMRaBbfNU8yPm8LcwSEx66qSLnxeesvQsq2dMQJFEe5DJs",
  "key6": "297QZotvRUjc8J5fcWGH91dX4C7dDxqWm4VMw65ZLmXXFfPCeraRPmhNb6LpHsb4y6CjzJU6tBBmU9VLHAyoFt9v",
  "key7": "2t94NhfW2Vev2CP8n4vhffgcxRAj48eRDhN8faFkUd2DRH3K8bYLD3bo3JMbbYm3yXgvZ2DhWuhnKbUb29uEwBXn",
  "key8": "2ZsQVMFuvZzc4R4HaHChnoRhqvi8qBsxWH1ZbG8jMDPrjKurZp1FyGqhv1moCc7pBmqDddzndrYPQMGnCYva5XGm",
  "key9": "DPFWLSeVo7znRovzspwvi9fhEzRpVAzwv3r1xVJBCVXrnVVaKF5L6XWP5qDBLjcoZoroVYyBjeQ63eGRsS1ogiF",
  "key10": "ZRHff2NGEGWLCMSnP3GfFiNt4Xu1fGgqnKeZdFiQ2ii9voDMquMPxa9SwcBiswThhSQwogUWpRs7kmGM5ZBWodn",
  "key11": "48bzgQ7GKq7o6trpGMQUomzg1kpxAjiFrZ2aboGwjrR5K9AGeAPbBqrgc7wnikeCjMpSWDDL5w5mFjfcfmx9oGet",
  "key12": "4edPwci3MDE8dR1xGtsDfAJR8KWnwetZJGioT71SULfQ8Q9SDdzWDVbox41uqrkSZimTYqubJ2HZvC4hCUF1WAgy",
  "key13": "2WriDr3eW47iTXkjYdbAj8QUcjZ35YiQk5UTBRfHZDrPcpUJrCkdBsZSRHsBc59z9hLUgKrgEUW1v4LDku9tMf9m",
  "key14": "f33V4SYRwPi1JMbNGu34VnSAbVjehL2HVHUCaHbiEMcQKoHrNviSZ4w8svEhByb5LqgHVqWx3d4N65eN5eZH87b",
  "key15": "3h7Ti2iYBMvcraqpNqwmvj7KonEzdcQck2vT4ot2Csqs8GZaBX2nh27vZ91J8S8DzGgVjAr6MUYNqVTLpdQRGpkh",
  "key16": "1XRzztJJSzX1hU1Pw8DZiBwQmMbwjD1FJ46St1sKCtDvQjVL9VPmWQcEyKAzYUoCkzv9ZgdGMEy2rFGW7TzWtLZ",
  "key17": "5NQYarH4RmXHRqqCjuvUfvcXTkeM1bGzShp2H3fFt9zp93q3b6AVd7gxwZU7iFPmiQ2PBVjyeAjozxCyG6oFrx5e",
  "key18": "5yP4Ee3UJF6T69Rp64xwvdPBQszMacwwALYWYtkRCf8LLAVwryAW5pzcD22NQUAhsnSU6LEDCaiXgASbPQsYUPp3",
  "key19": "2tHsnPJ1CtgFePkKPqS5CTF8ShtSwfgKfXViqnVw3C6gDPGPZkJVaFoxYoHCbTJGvumvvqWdcxKvq4abMriUe6dv",
  "key20": "62sQN89h8b9CHFn2KeDCbySXvip7knQtgbhF1SN5HVCvdvJLuGN7cvxRtVj1qcj9EDrJ8apHSpNiGRsExVnBsdvJ",
  "key21": "3tEiRaJMEh3EZxSRE2y3hc925Q3kiJYFYnhYcEsJiNWSXchMcoLuNDCRLoKds1DMWUHb9MsCVkeaUXEUQz5Ntzp6",
  "key22": "3gSEwDUA9t75T2K89tf5aq3S3ALou2ftpAxyqj5sXXtwPd45Gv647nBRc1WnAsqmUFQnB2BpBEGtyLbLEqziC8p9",
  "key23": "5tCrTfBQdLtcFr1Uh4vjHKdSS12dxeMiBZuB1sJvmhP8qzfveD1fh37qLbnEDXJhdxniHxDf5v9qDLDWu4dvh8uK",
  "key24": "EZiYhMWYVxnmTmsTjk35px5sDWGzxaGBqmozrWgBFkVoGspWYn5GwfJS6jNLgWnwfQtxNJHZELLhrmfiXgz7gcH",
  "key25": "5LqpCkgaJqtujgADHMUN3iUAcyYwgz2rKrQNSMcX1cWz24KBX1k3YF1oNahxjbe14YdvANzUnChfUC4JsdxGjNk3",
  "key26": "2ZEAAUzFz4TqWhb5SomD4ViNVbRkvJQaxRfQk8qqmCRq1WG7eLwaNw8HmjQDR4pxqdRHGRb8wZWE4DDzP8AJvYZL",
  "key27": "55RN4ZNZxMx6QgUGUs5XfiFW9wDTpFJgnNKEXgkaTMBCz3LzBHZqYWfa1fZokeQXqRoN2zC7AXDTfpQbFge1viqh",
  "key28": "4LfQ41ZNGz6roqMDM7ZkmTCHEm9M39ny4WhWTp17nE7wvv1SXq1ihDHxvjtD3AQthXZ7hCQc9jbQHVBR3VqUxu1Y",
  "key29": "48iZfEKMD4jWhTHnQxASp2bk1JUB6PCM2npgqtGgsRLvQja3gQaXMnbqHWE7347u9ZvjWbhiaQwb6a6Yfy7vveN5",
  "key30": "4kdADyvaHV5xnEdXdZDc2HkCSPjRBz8kXNHwespXr3EsgD4UeBpefkVNbpnzjeFZqsYxE72rSjdbtFzz1YGubW3B",
  "key31": "2UcnWaSxyNd6ShGtVx12dJNM6A1kLu5HQMy5nPwFMWN1o2cCTdBfKb7obYeoFD2nQP2j7AEAGKm7Fxv7CNMtKLN5",
  "key32": "5NGkng8GcGyrqmZ3oC2LaiBKqmXogqgXtCZkU58fCTCTN91cSR1BzLQUfccJxJh2b7vv2fsnT74ogFjnTRcq4nVm",
  "key33": "Ca9vmG9R3LxRoGyWMruZ9J7uKna7QZAEQjvgjt8yfX8A6sDtKUQgeTiRUuB3DuZeJoy3YAmVEYWNPQ1zCiMaFEV",
  "key34": "SX6uCeTt9spD8xU7BVbbMnFMwLNbXdCF5tKmQjdSx7fXoEVKNSzCigvZtMvDHzC3kYkB6T4uP4uWLFdYiNwSY7v",
  "key35": "5Hd91qezLn2TP787jaQoJgnwraJNkGJMHsR6v4jNb3S2jr44GcnUtZPRPqZVmwtswfFRZxsTiuQwt8T5nMgmnMjj",
  "key36": "5EowAJzJM6ThXWxVhXo9NPPzy6utkEi5ce8YLZbQRFY54ceDwT71K5QqPpksESF8g9Q1sn2TJpSQGVuQamscKNZX",
  "key37": "5XAAF9py1b3XCPz7bqLXKqEK3TxqtpMYVHRgQiJTDHabzGCMFWHbCZHZF4BqonDS1WvwYtdF67e1MV9B8N8dnowH",
  "key38": "oePpqMbhKV2zu3ahPxD1os5Ysoe9xXja8KWCFk9DXWfBnSdJiaoQBUsxCHJGM9kAz8aefHz2qsXpjUAZo5MHTvh",
  "key39": "2urMuDvgCsXferxWH42tTuCtfeg91yvg5cDSZqaAf9Wwnier2dekKaNTHUkjubGywDbTBJx5rvqFTNkfUsZVdJ9u",
  "key40": "4fx9wKdr2daE4cGNbZBT7xXXg5RBiUCFYwWFHLebR148XhPpqAE6QvtHKHeKRDSoStJTciE95NwfjHqrZfettKYz",
  "key41": "FpD5zD5rBasBzXh3YQ8iMdUBcgL65LCAmm98L879ofpMysRUFKWRsa4f9uYi1siqQYAF9RgpJ2yAzcoN3dHGugr",
  "key42": "4EQxNQgcMcw8jTtrLqK3JXfrp4GeGTFMgS7DCDt2MSGhyV8k8jSHTCZJ3Hv377cEVzwQRUckVgE7JChQ3azteRTB",
  "key43": "3BVHHRwoV9aqTGupa6VDGVG4LHho7buHN9Y9Gdy5X1vR1LeXnHE43XGGkVXwoUWQ9nvcqCp1tTKoekJwLqqv3PtL",
  "key44": "4PW3pbiqksh6hG1Ys4z8G3WMavq77cXk2dGRKXmTfCPVYLTrdNkAcirvCrLUjq3dSxD1BGCTtgLUNeC3nM8MfFeq",
  "key45": "5RZfoJ4KpAzCvgwT4v4xDgY2mFHtz8PFrUNyfypgpS5uu4ma36KvuseKeADKBPAqJBgEtRCFCdJ6j9EA2oBuVX9j",
  "key46": "2divGCtqWxeDN1vBKQg5aFoGpGat2tLk9Ug5TKap2DeeZHYuYgSDBw5qqiW5Wq9iD6LVtE8se9k1qpBqhdFgb8s"
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
