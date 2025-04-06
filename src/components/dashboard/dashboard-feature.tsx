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
    "289c6jW3PxQR9kFN5gA6ftdWA5KMBcYesCHPzeS5i5QgU6gjSrEu54QbYwcpbDD9uqjFy2Rbrfg6Mz3oUf6CjTyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wy1jXgEbx6mSxXWx1FbqnFrXjfsxTZd5UQF6chfPiZF6Z7by1qarT1dA5hxzNPWJ8jgaXSXUso6VuBjRYDkepF8",
  "key1": "5AMR326qDyvGSd5oBY4SV762ZV6inysjFdLZUQu97pSy7CjiwwtWTzBkioGbD8CohfyGjs5eFBRXRXjv6kcC8ZQh",
  "key2": "4zyCYMVnvYEeCMY6xLBW55RRDBpQYSEB145fBSv5GFASFBc5zBwEz3oJ4LJAp3dd6T2MGK81hgCtpS5tfmpnYJUW",
  "key3": "VCuKEumNGyi4DcGBWc4rggN5BiUyb2Fn2YiawsuQ9KVB7cVRutp3vUFmdbPETuaBSq5Ccrvyp5bcEs6pvQRsQgh",
  "key4": "5sa2Kkg1ZbGmB2z7JPRza4fCP6XmCbJqVdT7QX489yKuZvXAePiPnrRWnQiz4H86ZLCxrgnTbkam6XHi9cKC8Z4j",
  "key5": "5NMbHsC88vkHZueBHFL1DmuH4hCsa7rXXaDmAxbEyaQCUcxpiecBTEM9NCeSMo2t62ax1b49rNEXWL3B1jZ9xyFZ",
  "key6": "4SmNKhtdq1vq3uCnxEVM8UuVA5xGk6Z6NuMdCUAQoTbmwAGcn5VfjCfPWf9v38naprhkECcFqzgfGowWNQJwne3Z",
  "key7": "3d2PhYYP8Mdybgp7Sq82CXZ77Sdv8QuJAZ7exbvzFUCSKJMbexjvmqF5JbXXpfpQyZagrDXDPNhg5YF8rVF192th",
  "key8": "3SYdhmGx94tKmchjJ8NPrV6huU3xbjdKrsEY3QQc3VxoM8Pt6mnc6VNwHte7HD15Tpn7DvdVnig5YZjqHEEzm3Lr",
  "key9": "27WQNJ7zz6iTzhmLAqQYWHigGndWuD1Vjks2eFCZwGRpUj1fs9ZH7UTv9yooUiDKwBUpUZJ3WLHpW4vuehdZJZFX",
  "key10": "4rbJu5YKdfRGhWDbV4tvo8kCaGwzgAwVzLES1zrQYXf6P3TXc6aPKsY43pAsdBpFhJF57gdbfHu5zH3mHVRyeRWC",
  "key11": "3RAMzoZ7uiMQ6rGA9UE4iZCTcYtfoMzuguurBvEHfzwc2vvhMihWyGhZQ9GN65hRtLxjvUEesgLipg8y1S6qqude",
  "key12": "q7XeiojcgoEeofLt1XFT4KmWU4sjzioVNzWCTeSwXAkLkNaqkso83BhRVY8Yka1LmWaR79opJE4zjNro8wmyv7K",
  "key13": "65DEhG1E35Va7s6xcbwBhTbpmgu5BvCvEnXSocYctmGgSRsFWiuzLPUriTxdAe9Jp4FrU4yGRZacxBX4eRiihpc2",
  "key14": "2F9iaarBfmpyiC8KJtjRiftgcqfeCutLCAjFmzHi7BH6QW8Tpeoi2JcD8erZBDHgZ7GBSTjoUk41NANT5WhKvFFP",
  "key15": "3ShUh9K9UAMBVrQxvLcrcHBkzsDw3f1QZCSNb8FFQRWxM9J8YfqZgrjDXBexiXi1XDkg9FZxxy4MqUAMAAYAJXGn",
  "key16": "3X7WaDZzXaVxnkgfgEXjfTuEXBQbe8xKK8Dhva4ojn3Yp8uy3cN75PhmAj5sew5Qn4TZ6xK1e9AR8nb1APUeNZPC",
  "key17": "4tJtN8sFjbaJ92Rb3Qk9YdPAfwgHQGHHNfJepbQCc9zhjigbh5muwnYQFqRkjPBDMKEKCuCLvUMMFkm4wPo1TrjP",
  "key18": "3ggDMeSvCRDAW78oNKF1q9SLFU5eX212txGkfv45RwpCmmycqfy8tG12th3PMWgX8jfA7vCc1o8Cxu6qanqQVcwP",
  "key19": "S9Ud1pLYecfw7K4KHqWEMzbLXDSpPWtfdwXtTAHSL8PF1wZW4cmxeg2xg9QDwLEVmxR9oR3TW4aW89TiLmYYAXG",
  "key20": "5dxHg2LqBcFf8euMxPnhzLf2ubA44zoourhNdGdggN27bBRoCrPeSXdVkh6X5anFhNGq9hVEZZ8QSiMqsaTJJBNF",
  "key21": "51sonLk8A2DYZR1cwurPiHwu2SqNDCWQL8hw74igjNqYCx2zhHNbKeVXx9xEDoe4FtaU5Nk6jNbUtazeWZ1uKrmj",
  "key22": "2ahdCUwQxKt6dedtMyntFcv4LpmiRd2EdKoFNZwBqsRkBA2txCMC3MpNL2pg5Yzq9RuUpM6MaMfcbdigw5cgnZs9",
  "key23": "cABSVjxUcHh1U5VMNq8kfKrjAvztwFKzcvi1Ub5yPU1dqp31D7sN6GmnTK1JzevMPijQDjY8mTaq3nGzmF3PYSc",
  "key24": "3ykwi2eqh2sQhPWHejqJ9wC6FG616MZuT8zAnRYXbToEnj3mY2EQDzYKBwnWZUQNJGGUnAt4cBzqmnwXiGHXBYdw",
  "key25": "3FwG768ixEZYj3Um8RhDeBDmCqr3tBonWwxcfeXjVgYmYNvvfFiKWvMXmqjb7Bq96Bs4riSoDLLdgtWaE77MmenK",
  "key26": "FNYEF3FW2zsxeg3pbW4QyYaSQb2uV6btk81vQjjKRykrndgiYUCK5oBn9hRDBFog5PCcXRFb9drCmwpmtiXVt2h",
  "key27": "3mCGLqU4GuiCrdQ6HMzh5UvDSHpTM2NTrczMbs9VVwZvvVyT3N9Ga24L2iDRun65mGJXer93NTyanRMpj8JtYZwG",
  "key28": "3QYdw9vDejh2HHHiTtB8yRyaVwZXXYRPhd9SqvMzrStfQayu5BCvMkcntLFQkJ4U21FjoTJAcsBksbBdCBDFrr9K",
  "key29": "4rtmUW61gHtFLbp5TNTrzuyJX5c4W6xvfbCCFco92jNkQ5h2UukGNhsaTqKDyt5Rj4rwjYLF4VF8aDSzEVv6ddN3",
  "key30": "3buiL8TqryV9YgBLqfWdEN6QhoXMAPWLcjirPjx3xNoagxLoDHHsV1Z18PFyFtrc7FXYX46U454JqYfbBDi4CJLm",
  "key31": "4BMvnCoCJrB5Nksvs6RRnDbpqS2HyAdsSYB1sZkPEKePGcC1BaEj4uQ3DCiYn1d3SS5ycfFe5sokvQTdHKmVvbqe",
  "key32": "5TQhqBj9DAzpw3cb4j8pfjS29fHLt9qARamK5CSXUikRHqBN1tjug14n6rjLRjztokCHqUPVY4NT6ShzkaWPpHWE",
  "key33": "2B7B54ePUsv8JHKQqAVyUoyJzhygjKzTP6MgWAsd38fHqRneUFRjTqP5F8cB1Qjazx7Fw2tML2mwpQtvvt54DbM7",
  "key34": "2cz77wA9TxpVd6WephZwSvTP7LL8nnFX8dRhUYENQo5bCyKPyDNX59D2ncHw933adkhQeamshsE4m5zdGML8dJGD",
  "key35": "FENaH76RXqLqMnMsn8WL18xnq8smdbPRWXpG2jRTfBneTR9mFYymhJEzgro7XUHo7rCWFD596i2xUYrNrHB1wV8",
  "key36": "4J7tBTvYe1GyC2jy4vtMJT8hMJTXqjHJXHfaLGkx98ymfUrrX2LtGtmhRm2paRN7vLFukhidVCZTqyGKGrQjpnFW",
  "key37": "4cFMbSXGVSrF55ditWBqNZmfW7y82vZQG4udjVqvkJLN4UWtobDRb4dNtYVvKpC3LXS3kyECcFZVhBZrpZPTSGpD",
  "key38": "34nUwVG17UtNkmoXfnd1KgiFRMjHQQRQXaBRqWEezGyX7nPAqfX8M1bq1uo24VWHxTqbiS5jm2Uv1Y2EpLH2CA48",
  "key39": "33iGaQ2KDWMJ81N1B9a1s2jRT8WvuvTnPWvjevi8pnFck2otnY5jXWNzi2EBoCoZ8izkejXdwv6Uu6fYPWBWCAwd",
  "key40": "5DxBytFCfvbFKrnb7ys78ZQ4KebrViT69ossQCdbjLqoU6kc7kL85bjWoc6MttB7MJ3SeJsTqBTB6Uj4XvkTLpoz",
  "key41": "5zTPd3TqtFyADJjmmdimYfyrp9H15Rof9sMawCe5zWvi4gPx35R88g6uxXvt58zu1ZGcG2w1CWREZV2CSxKhAbjm",
  "key42": "47NbFxw3xRAxuKEmzeqRdjC3zPdmihmoDzMmQyUT7caEwGEt6zyt4c1rwwpFXRkmdppHVv3CYoYMEf7dL6ch7o7a",
  "key43": "39pipycSeb9aa6QqMw1dB7usEiD1hoCGh4XBu1T1199bEQcQFqPpvirU1WzcFmm9d9dgGPydodXcztKnRxrCdiHp",
  "key44": "5vYx9kLtKNWctujcdfu2gibjY4ocN5ei2ws6whqXoxkW4aAL3hSj97RmhAHSYqSMkxtMy93FngsDroASVzTWimDf",
  "key45": "2oYGjtbMSEp1RqKfcED7iKCZExrxp15GApWDthU82BDXrHQuLR76Hg3caXS2bN2AViwiwq6s3XMBCF2b7WWmoNis"
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
