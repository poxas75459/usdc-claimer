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
    "3egnbhS3KwgsMgPnxkXWksQH25mrgkcWeraniR8vjxvs1cnTyVgLjXtAYWH7ke5Pc5cyJA9W1LK9GiSoFfhUHaed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGwjg2cVgSt3YDnC52kfKFHRbpJsPFu82qjPkcw7S7zJBAUMgWwhU1e9ZgEiSu8wtoTDeoEmTX6quFL418PwBGT",
  "key1": "2YJsDXNN8DRW5skELL5L71saiUp7FEbbntnGWADxNgQKrSpbcenjj8fgmpZvVP6jETMhepbaJTzyAqjqBmBRmdWn",
  "key2": "6durgjDuKBTx2f59hoH76Dc9xJCwEQcxN7Afv8iTGohWQ37RJjpik16dhecazcJBwNMEJYWmyAnNr4J5mGPqoCd",
  "key3": "5UQzeWnAongyYPL87ygqDLvWqUqRR4xfKcQqL1QRU3KrHgxSyJuRSzx2q96132fGHGaFk8muYrWM7Ti5ffdZGhBJ",
  "key4": "2eY6L8dYEWeFudDBSiAmwKFs8PEW5ewB7KfSDQQ7Livr5fsqn86RfkKv34TVENTffAt9mpaDCbpGVMDYJozUMbXt",
  "key5": "3qvzMwfYAtzNe9GSpkLWV8JjdjQna8ncBBvbaLguHXx9hVJreeFrMf9N84PmTLEjQWhoPR91YomgBJj4DPAtDZuj",
  "key6": "5AwshiRSFAVnzLFTmp9gJSzkiZLwvwhVW9eiLNXZPkggkQSA2d9dQA4CxhBP9c4ZXqKriL1FJ1hesNmki88pZwLu",
  "key7": "83ymXxFFbR2w9eKYUf9bj1d4CpNwJpsw8upJLW8Du9GTQNU93fWPLPRY87QLD7SvzC6oJVgJ1rpADJgy2sRqaPK",
  "key8": "5YgoCcmwPRiaK75QhZfCkKWD1mgYcssgxuBpSk1q6pu85fCfqnU4sHaUyB9bnc8rPkUXK2VRWYv1BzRSj5iWw95D",
  "key9": "67YhumB59b7LTihAgq5cKQeSGpKBLa9zQUUFYPCGVs7twdSdx6U3w6FYmsYDW1ehZxbscLY8CXeZL8Dxrn5Nfqwn",
  "key10": "46KR2QNgmLHtA6vrneqrjqcYWX23eUppbSbTU174oZQ8T3cEV3rKD1mWmiT5H5ncZ9nSVqQ4ARdeFXpb5gBYkFam",
  "key11": "4DY4j6RPWzK4pSQMGWJsWB9tkywsGar4SdyqhJL5T8KUFKxyhRmNYDQUoRLx55niLCvTFJP8cBCatvudz6XWufa",
  "key12": "44hbzjTgAhPM2y3K6f8VBs7XCn88jh2tNJHZgToM2b8tsqx9ywAX6NTxsVDdtcNce3MEWENfGp6zHK9tujRkZRMf",
  "key13": "8yoCsJWMLVXzStghsaAK1bD9hRU17JtY9ggiKouazWB8WaZauCAeQ6ARrqaVHi2NVZ5bv9hQc3qBajQrTpemnym",
  "key14": "3qLCNYBJPHK6Bk4RLJusQWg3VFZq2KeQt7ggrfzqicpLXC45bmBdKe6x94haRD9qHjDJRk9hSD5Jm1qRTEQYgFe9",
  "key15": "2tZKsPiYbJo7vpZMXcqBDcuJKPHquvb3cf8sPWnUgbNU3qzs1kZZSLG6Xa7AtmYdbCNQUweDsT5TCwB7JJc9UcpR",
  "key16": "4DwUHaBPw2yB3MNTUxfVRL8N32yz7HjCN8ECRXi9sXyKhbKkAfKBdkP1HUw7szaPutN7qyr6f1pFCpyaTko4gnzr",
  "key17": "5UgYVPVriFZYH9zgMif1WFidMftWsNegXSo1rtiLjkABGwj1CMXFR5KumuSp6ktEWTwnXCACA37qs9am8Wg1xJ3s",
  "key18": "4i8i2e1xSkgEMKTpTxFxiGV7matPsQjbV6YwRWVc8iyuPZ24LWW6zb6n6uyucNUS3YdfzAzDwuZkaVhnsEraDhoL",
  "key19": "4prFk4ucjs4fY9F1ejKzjeK3ruGw6WGrrEuKxhH4JAp4MAD9pZazYLonFMHNw1fAgeavUokxxWKw3SnwBmTycRWC",
  "key20": "3bhcBJeXkPq3ZjzgzAhisD9NSTbvEoHC4ALXGDEioEQBAV9ghmaojj2XboLUUc8rQcC2US4xFU9EqMY8jyT8f1Uk",
  "key21": "5Vp5XsJRRNy5v7n8UzCc7wV7DHrM2SYioDVTWSHtPDGfPYACobBgxKwiGvtfKpbqazPSjYc3b7myGqn6BqWCBfYB",
  "key22": "2r8XnmSw49CNpBgSFp2eSQXZBTm93JGqmZ8KPgcqS1uZTu47gYC7PX2T81p47iHEGegh7eauEpRhRsMQ9WLWs7xP",
  "key23": "3PnWH6A7DHEUPAQsGL7nSmpxe56wqjpFbn1Ry8VkLfb2cK8LzrnnKe3NMv1QcnhSHkNYHvA2otgGmioKwkriPNbq",
  "key24": "4zgjgsTkgNEpwU8BaLrwbpZcNuwbtwjsXYJWQAaH7LnvAWtUpc6vazq7tBpmR33WtNrQBnBmjgpnh6WdZ4dieraD",
  "key25": "n1QmHVehemKJegKQ2mjDfW7CHvL2x2uyfAjVHfo8dihLkq2h9hWJWe12kMCexrhqHtbca3WAZsPn2efFbvuigJH",
  "key26": "2kcRFWjdFJ3QEwsQqr6YLqijTukMtrQhnMKHGrc8Wwi9oDM5iVV56nDDXckehhSLd8bjqzCdt3iEQCUeChsZdMvc",
  "key27": "5duR1FNBJHxYkbb9rgvMG864dC3BSWEjvq51uGni9N3Qz3FtSMTJmxrfcwZEGgfZmr3hZiAWY7UnpbJZrm8uDmwc",
  "key28": "2MLTC1Vgkypcw2RxvVvhEFrC914tp5aZR3CC2s8hoPFGEJKfwcP2dqUrgYNGYViy2wSjaF9XhyHK71TDQg17bywT",
  "key29": "3hrXB334qkyuMURodHNsQ34huad9JwBe4sGSC9AEMCyEYK83KECfBJucao4AmEDUHUNW64Hqon5eLxmWMRDJyCU2",
  "key30": "HrE5EpzQb5ko5ArpQh5q9fyJTJsd88FoEUUqNbMVqxvo333h4Xr6bpSyrQcd3eZAfZunWedC8ySvpi2dUG2bZME",
  "key31": "YZP349gvzEC3oSUsuCGttn2kNU1yPjCqFEx2FyV19SUwZQ8Qo3FsahiLfuFuoDBQTGuLHjUUrtVfcsxQgJtUr9N",
  "key32": "4A8RA7aWc1f3CPTtsRZuZSFHQ8smffLXXmhVH96R8Kd3DavmuGUvdmozCoMPmz3ED2KETHXzQd2yHHoAdYFNSRtk",
  "key33": "C8dUMvqiLC1GfVP2QFor6czyajB8vjB7pE7vToB6gdCt2D3Ha1akcsizhCfJDwaH9oBznjkae9k7oATH6QYtT64",
  "key34": "5LY5jWH2SdmkEyoGvWeaQNzWNqjE9vdQEUT9t4VcZW1LpvpwQr6sfK1ZgiPz4Sjh3JdnWq96dcJbn2bcJBNfDU1b",
  "key35": "p4ForVBVzpH4JbgRWBDDkMw2pjCym6gReiKczAV5x572eVfeKewGNkHbFLhZhBjNrBtWG2kJZEtSpFn5svprCAa",
  "key36": "35oFVLukkqCJsozwMUWy2LtVbFsgM9Yu8iFpnCxRrL6xWYwQP1q24kqwXE2J2TuctjevSriwnHBe6ip9kEr5qtmc",
  "key37": "3DgEp9822DmbSiR48S2AVcFxmpdxNepVMmNXj8Uhd5z4R9xfuEUcgfLsRC9K2fbVDGeoZnaERriyGrehn54MRR4W",
  "key38": "2QWYywUnvF2daS3vAkqA5CqvkMR5XAQXkqQk2wZ1F3V2Fp6djvW1Sjz13jBcBuXJuGFumBkJdM7aJv2VhGgGNprg",
  "key39": "4G6DWDH6qNeD9wKRqyATEHBc8Xz2jzuufQ7qaqDM5RexNSsVsDD3X4HA9kx6BJFxikiES7u8w2W5fKAXEGhbv81F",
  "key40": "2SzmwCQUcBNCG4CFS9ajVy8hn7T5bjVxcom14a5MmWP7XdPNf1uV2WgW5jnSGzd2veTNkHrWvagYpZvLs7fidSMX",
  "key41": "3cDq9FkrUGFUpPEFRKupUpk888D44Zk4VLKFJUCmbMG5DRdBDonY7jjgH8pkCRzwL2YyNxRe3TZVf8PUidyJAf1E",
  "key42": "463QtPCWPciDEk8z37UGhmdfqaP7vPZ1KCxUztJzPNWnqcuM3KHLRTpTy37j4rnN491z8afwUGfSBhTurvojAUjc",
  "key43": "5u2E2UsVnkC7neGPef6L6WqhnQ2sJJgVXmq78bB7S3FkQEdXXLN5derXw8kSWLVZES2mqagzCRaz7T6d6r4Rm6MY",
  "key44": "3dy2u1a1Z18dEVRasD8Q1edWFZ6K8qFk2gcjytsGqvvmx6y2v4TJXBPPqxvjLC3knAQMj3SpLHb1cH8NvJG2PbCv",
  "key45": "3Rhp14i6CA8Df3dEk8bkuQr7dUVZnuwspkaCSjEesbeRpsPK1V7YdgW1nBJgXfPqLYEKp9nDFDkJTvYshv81bHDu",
  "key46": "PheQk4KRavNr1AVsEC9WD9SHHax6TB4s15YExb7R1P7ai7S4RMCFBs1YudArz8npKsf1eCZNVHSbSs8fLQnnCtE",
  "key47": "2AtKV355CvcMUUyG2zTFWFdFAztBtG9Vn7d65kjsZzHyDDHi6Gkit3MVRSn9btuYKKAYbf9E49URQ769FW6V6u8s"
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
