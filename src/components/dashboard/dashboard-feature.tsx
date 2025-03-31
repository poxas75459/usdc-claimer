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
    "5rBjxxEoUgVMuraxLrqebLxuZpKJFgFRkqUFnWhxj1Uc45bQTvg9uzn5pNyUmx2KU4PtPQqZQRx8BKUrmGLPxwZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzgxF6NQ9oykTsTn9d9vDYyLFR36wSFLjbXsFQdSi9mBZsL5wHKvm5S265bG8xntRBNw3T5ct6oEap6aHtF7o4q",
  "key1": "35EQhyueRHZ7Sz9jDN5fXXXyBwBGYK4akoUz1LFqHHhm331Cs8ebVXfqXL1E98umsWBUMWZADAqe34HwM2LTcae1",
  "key2": "iNgxrQ75QaW9SdssRL4Zp8Lfj5xTYfQPVs1Yq7s9hbLgKGA9RVoFrgiriupL2fLFFym7928Efg94AtDv159oZP4",
  "key3": "23XgE91R34DbtWsytMHCh4rVcykbhF4Mxek5cELME4ZSiAdJmsnUcDS3aQcAe2ptkwjzV1BLoVHy9MVnPwbGnv1c",
  "key4": "4S4xmLHHXVusaEu8LPd17VVnqXmDofA9PBc18SDCR8fYCdiTttJMopGsJui2G6YSRUayX2NpG3yESwovFTS5ZyPv",
  "key5": "3R5jETEApQDxuSGTVx85sR2DEqFByCJNdjYhbmfyiDzL8LrmDsExRmwhH5FBWobARAgpwQgRoDViFEowBzwPArLR",
  "key6": "kAsynshEzkPHLGVFHWArb63DDWZ5FwaCC8fqxZVxC1rjV6iskAunFvmyRMqoQTGPKrK8EHZ2oQ2Sja74BXXQKJx",
  "key7": "5H7RNKEEKbMn5uWiGQ9QRs6dwHMs4JnRqYGQ2xqzpvqiLntqSfYShERuR8Vc9HkpBwsbRV2ErDB1ByMmLMvHEaGb",
  "key8": "5Zuw75khVsZ2MNTPakM6S9SLnm6PEyfN7iVb3pk4vXvnfNgvhr8QUo1jzmQjMqSTYN4dG3Neqj92o7TeSFNsbhn",
  "key9": "3uqYFNscbiuHV9DNYVfwSairgEWs6pqygQfR3X22qQPv3cp7aKXB9D5APj9YZwD43RUQNyMLFietGjvFoUzE7sM5",
  "key10": "52nvFDMyDiR8zACSKyduvGSQ9Vy11TmqDkdYvnch78du17tAj36tRUVEC6QsT3K3B6yKHCqVrQfoanE4uN3kM2WZ",
  "key11": "ppmkjeAz1946rhxyEtZe93qrafQ3tSer3w6VMUdX1vVvopSXda8VBv7dgoKiymEaxJQerEs5V9JWDppPqerTCDg",
  "key12": "2hguAAJ4uxYJWS2JiDEcyaoUX1m1ENVCNf1fj8BLgDxHdKsaJ3FSixvRbgZfJR6hu4wQLiV96g2fyenW9G8BJkqd",
  "key13": "DbK9eY5P7CtmCQD4MkeMHz2GNhckdrKC8eUzEGCt8xpjj2zA526M4G1XmYMbRz7obNxuLJWomt1q26hmFLb7bMd",
  "key14": "DQ4VcTR6G675iyJiTyMCkvTPp1CCztfdRpXsiXdX4q328TkwntTfRSzjYFQS7ARkkZrgX7yngdr5c4whUw9cg5b",
  "key15": "3Qb9XoXWhgDx8cw2hboGNtx7GJGZjVdFY9fJyVt7MuLQUifM47xdzWDV8jthGmwr56GYZ97TYRB2dC7FYUQdq5Vh",
  "key16": "57QzwfPppEhhzBv1Cy2d7YvmbdaPhHATYXFcep4fA5KSaMynTbh2rrdJhFriuwNy2HVLwBT3D3SP1aSvkkZAvB6R",
  "key17": "4PwRSxoDPYhsnodhTLs5r1iLA6AYe55bo5EKWbajccakiakKBKMQHinxstSqyBZcxgYVRLMVrapUPgcptuPApZPF",
  "key18": "5Bmm6AoZC2yC3x9ygWTP9PApJkqKGUASDoFQke7KUzGLpG1JAbNG7QvG8nrggKSrPsEZDPTURk9CYko9k8C8HjFi",
  "key19": "QKPoLpHu3i83ENNszsLJQt3wFPkzjps7URt9grajD4B9zXw9GoMxoLiXMmhiHQ9yMC62bPgutgPZaPsR81svGbK",
  "key20": "3P3KLM8m6WFXD2xTiib8NhjEMhpbAs4QmM7rbXBut7NBxirNgoQPiRZR81JJYJY9JRJqgEwLG2PdiTNDeaFafBY7",
  "key21": "4ZnZf9VadHUz6FS1UeafsaYBrBmtzdkXzvh8euwVEdbU6pYeJcj2XWThAz5JYgAHqKvJQPFDhwfpJUajVgzn6NVi",
  "key22": "Nzi65GktVaemo5A3yCBXavXPebues2J6dbkArZLMw3c7jronsEg9ykLAMy3Z4shio3yXUjVLGKjcocrgWzyohRT",
  "key23": "2iQ3PRiS6rCJjXaJm84r7QUdeyMSehV6mPXtdZdgQb5mor5FYayjhW2bwxfNwbdYAwHvmb765pVSddjDYExznLh4",
  "key24": "5KTQYoV3ce1q3UoKDM8kCGQizgZu2SEEgtRetPZiTbpkSQPFFdtxWYguHExHtTYfRAUi4TTFUT6agnxT2L1RSTsW",
  "key25": "5pfbXZj6yCJpzKT87cJytbRbpeVui2PphozcpTGBniQpkECjrTFkdRRcvY9TYSqGeDAgGwsZwNUHiDqdDzsvqLeR",
  "key26": "bEeGqFBG6SahZwqGnhfFrdQxDLq59Bq5nSHDBfoUN4DCmMpavUJcrVopQMWY2jrz8NZW8u8Ekb9ddMqZw2Cm2Rv",
  "key27": "5uzaZCuuv3usSK69iigVdp7K1JbmDQx6WSFuJ338XoCr4Msr6hcXiKVCBDAVh3JMsCxkhp1g2winSDA7ee3VKYkd",
  "key28": "5ptDRztvkLQ2Paz4jC3A2K12WnG5P546m64H3ECy1TfdNJwcqhEJKqVEtrt1eERamFiY2A1b13PnDMfPvASbBWVG",
  "key29": "4d5JFStuaCqBWiCLXTDKs1T5Ra2fBV3gxAkcM4vodYCPSWbvAFkvWqBLFBzoTnP4Hnw2i4nfL97owuyKJvFT6tAE",
  "key30": "3mccRT31eq6brKGgNc5GtZP6pZvJ7Q3s2rywTSzCDQnG5bcvFiZr3cuvjYiVahWnHpx8BykDF5jDxxtKvkvpn6Qh",
  "key31": "2fcr9EtmB13RF2pu2MwBarZ2C6GAAZu2HY2t33q9yHfSz4eUBBy7cj4S457WZKV1UmEsrnN6jN7KFPixzJCnKWdW",
  "key32": "4rm2HycdBixx5fGwvQU5Yzw8AujFdqprkvYyVcN43qw1xuwj3XhZuShYCdcfHHAEsTu45pMQiRtmGzLEnV8VMZii",
  "key33": "5pctUEY4NCn7nWNxpLncaYcZz2AkT3HrXbCZCrQqbYTreTAmi7BCgrnFodDw7zPGh8rg2sxSRgQA6bsKPWPr81Pt",
  "key34": "2tN3yG92M56zouPjMvaM1YC7UqLdoWwCoLzq9rvgAXY6sahJVQmq4NusZiH8U1wcQ87aJk2ujVXTKXRTEYWy9Pvo",
  "key35": "4FdJwdnXeunBdmphXxAUggBvB6ngDFJznBJkQ5FovyMo28y2pUDueoxD27QxFse7wvA1iY3yQ5xcMvYwi4GfWbYm",
  "key36": "rXrMpAUUr9MPPnLGGXA3Xg5nS4Em4PQxzx3wymrnXCHea8FJKiNxQKPURhjsdKEfCuWbh8R2KyY8MWLN879HjWw",
  "key37": "2AHnqumt4SzWtAaqhiBFDAZp88PaXFE5e3vxB5rz7hCeVrewiYXrbhB43nSUG3Pw1xBybnGSuJDYfiAgL5oxBFrJ",
  "key38": "3utzvWEbiacExiDANxYM7jm54S3drJ1gNPxcYQqpsAyRBXoHjNC7NaZRFwvSVKiUGt5YTZArHkkL7QVmuxXbW9we",
  "key39": "5nUZonH9wckU7b8tq1MJos5bmbfau8JT6bZQ9p1RM3UMH5ZN5qW9afUQBQJBaVN7asyDo8LsZLrYgKx2YAa6auJF"
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
