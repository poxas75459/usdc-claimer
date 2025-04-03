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
    "48QVNmSu7zp3KazgmayAMqpEg9EQ58utDQRzJzq2jHLPjp3tiTU9xmLvAj7eSvdcii7M3Y5ZL2ybig5SrakLQ4ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G2freqFtwrroHPH5myBSzSwnBaLvVdF5uCEAhfQoe3inPT5GEu717BWEkNEEoBG4KFAyrotz2sLQmG3FtXtZzTu",
  "key1": "j4RwSRvsRcji27xXPrpv4jV9i2Q9doexNarvR27BcFEiiDG6Fs1KDrWBH4jU26K4jyyX5BGLhJ6HtVtwqZRDC2c",
  "key2": "5JvZFc9F78zS2VE7Yj2vuorz3DSGGuPJcswY5t4s4wsYC1RBGdJZvmmHEQxhXguwqxrrnCPvTjin8dAfuDVKrzxC",
  "key3": "5ao6L55pGt2w8FCP9LvNaRoY5ex5WqLqt4Diz5rfozDUBBodAtLev6Cs9AB3shSfBBSNJ8YMNtf8wBoDUbT4RFFj",
  "key4": "2Jy9o6KEtgauDDsz4WCTZkTZpdEjU5GH27z6DksJSRWgmkGD4PVewLfDcF3CjuK3B8KxUG1RNK5o4Y3S2JCNb32G",
  "key5": "2ytM3UZQntGXJN3hzkxV7krufNafk7TzF1Tt3b2o2skZWowxSdJcFw6v34SXBiZSU7huDLvv7jR45HmcdfELL3iX",
  "key6": "56GhtvREEJ21qRp6xWTJTe8nHB617CzV9vmFjhVLHnzeocQrnPr6CVNvCWdzKA9EMmaqTD7kbuv5wGWgjbuaXd86",
  "key7": "4UWT3gw8gEAnot6S7hpLuPgCmyrjGUCtmLsiS7gx8KVe7BGKvfSXxZsvaByr2rKZ1kDehTLN3Cugx3ZpanXaZqn4",
  "key8": "2wHBWeu68KWu4b2aJnbb2fCvmgwWHKXPuCKfpEUVK9fCiMRbueeVCNLfqmkTh6DPLzw8saaXXBp1mXR3oxixdKFp",
  "key9": "3Z3gWZFPYDEyR885ysz7hEdwVG6rjAJygGebdQbPdttHDqKK9JNYKLHaojPNzzY4y3zPC66ojrd2FHn7d2vc3rjr",
  "key10": "4LxWC3FEvDUrQZjVpzdSsMEeLcqqyqNN4HMW5tZmB4QChpLGgn6z6oZEgcWNiFv8j8Pd5kKWso89PSNN8Vj1Vwqm",
  "key11": "54yrtqgPauBRSJ7Z9mote3dYfQZj27pKXfYrNE5Xi1kgxEF9YoNo4PwRs4seV3RxcEtNxw5FRTST3x4LULiga8TP",
  "key12": "4xCEmzHSLM6cXAxed76BBntHXhoEK48zvWuiKSeZ8qDLyEmhYbd4Lbay8bUUSSJybKRK8gQgyUDunvQKEAJg6RkQ",
  "key13": "2fghXJkfZ9A6HJPSWh6CGsy4YJoRv7qYekvjGvKayg7LCRtKGHkcyeMs4qttFNPXGSoypryMMRie3eeejmtgPYPv",
  "key14": "42FJ39zhpyndB6HQuUt7qAjecQ2yoL9XKD5nwMUoYv4tr4F8kPEad3vxP1Y9QipgsTk4AhnugV5Pzr1dp2XoT1AS",
  "key15": "AoTqFzTCQqdGhaHQ2G8Uway55CEhnGKT3w3FpbwWoCJqWA6trdDjU5VHh3AxLS4RN9kk9zvSmdh6oGeiWVMX8uK",
  "key16": "bux2VDKjpM5YGEH5ofzDqxHAtAcnwRPZ4dposSyHzw33ybxgjtjoLmG2MsyccyvXGxZD9ACQQ5G8NEjDT8fBKDz",
  "key17": "2kD3JHRwDpuW6FJmRJEs6MtgNr18DC8K3qLc4otRUMoxmEkCKYU1u8aV3twi5PBQiCesKAJfWiy8215wVhuSw87B",
  "key18": "4SumHQz2UYKmtTzoth6s8QQyFXeQL7uaPEBEtQ1wUr1caeVp336CYkmcJHTZpn3X1UhGAEWGhH21DrpTx9y2iKQB",
  "key19": "2pqe7XFTFiXYrgrEzKY7GSpKg2FsxCm6X5noz7H266JpHzbmVC5neiwJTdkGMiNyLCTvDiiaRridHqU3VL1V3Guh",
  "key20": "39ErQUJtBUW1misGQqRSHaVeGwFoD1JDmvhf34PFLm9jXyqBGEfAtdwjUJ7mRQZxhPrHUZVKSmhdsMN9VTWGpMm3",
  "key21": "2KSXmCteHefFrRc7SforAraX1RfxLijK2BrMF429HQj5XgWfddmLJqeYTvURcqRgEefC3a822z2y7df3EKQ3UZ79",
  "key22": "4rd3R3fC8YjLqJRYJoGzNRdrQQewUfEbeHx9rSdytoWEnVSY8tM1KtQ9Re6QRRuKDYDEbDxx8P25Yvf2ExCFJ31Y",
  "key23": "2spTGsRmifVRUnTduKMS26mCVXwveo2sazXd1M8SeyH5G7rFVcinVFowzFjj7BokfqgwoSaiAKCxgVCVK38sunPR",
  "key24": "5uZD5qBB9nUgPHSHUsUzLMfv1seUhQdhEZgpJqsRma3mpFr79sXZYRc8w4WU4xkCBC3W9mnHMPScta8WUzubsy5N",
  "key25": "2rbFDxWeT126HMX5PgLiXQpovXyVzCZ13NcEwZemWrkSr8Qn6j4A3hFEnYiVynA6LQcaP3crLvRQAXLw64WdK7Hq",
  "key26": "5LpthY6H5F1g9yvsqkkYqW5BUmLGBokt4YBdtkrvRS9GdLwKq34ZT7hfTXkbsQHqbzeFQEcA8dwzW9mLKeLXhRH2",
  "key27": "8KTLKLE3jjmJiidnLC1UFfX2wBnCdjC7tFU2SzGRHFufcwMzDPA38PuFYwKh9uaJJBQ5KuiLVsZtjhuidiNFGmo",
  "key28": "3pRTNr11ZeTVS2M7HbeTWH5cb23rDwjc19AmA8Kboj7gshD1xXRMfbkfeoaAwQ7URSwPpsHd3xsRnLcrMQ5DVKop",
  "key29": "3A37jkWnbwp3MB1u6nQuRV4hnk4iWb2sqto84QrE8c9UBS6LnN3dSv4LYpptaComBtefAiPtUN5X58MQVNzJdh3c",
  "key30": "NWvbvisjx2gFk7keQ5FBDHD3aPT8vjfdBULMmybSY6KZu7eGzpU3azmAE3bCznaY3sTGhQ6fbCospPBGTVChvXW",
  "key31": "2nYbyu9JtoqPp4ybn46UG3k4hyPYQYLqy8FWnY4YoiDWVTCpUFPLYRH31A5D4Nsb52Hh813H8uoF6GLFpu6r1XjU",
  "key32": "5iw8TNexR1yodMdcKMLowDrGmGqCoANNtcc52LY6jkA2eq31xaEBYeJircpjY1SDpR47QfE78SCTVCE76i2HKMKi",
  "key33": "DszFDwZZ963ZzHYNt4N8csii32HLJ2zDB9ud4q7712HryYJnvbzbw2vGBN3KANMQBt1tgjPFaRcHFX4sR4A1ajj"
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
