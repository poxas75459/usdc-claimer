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
    "MgAgcbNVVne3dif2v6CnyLLNfQqMRYzCn5V3MFWJRQKWHSMcVcpFD3DDe1neA61R9Kpupe3M8TUhNy22quJQPaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38od7TszuSHRPy8gzpuocCqjNkh4VGVvDnuCTPkzmCmtBMpYr1WN9wVmQKDsGbNZkwxyWsqZU7R3Xs8tY4nhYAk4",
  "key1": "4tDyf7mXqx7gApgxNhUTjEPSwFQsSqXW6xZvM6yM3j5NHoE4VQgAm56AbMCdaZ6q457toEtbje59Xnc4TcS8tgoJ",
  "key2": "J5oiBMr6XhJdefmThYX4EGCQ2XQmoRP5nS5rLEx9fPGjgxx5YtQ9xKwrgcynzM6NKVGjcgezueyV3CSAyHghyip",
  "key3": "5DJjDj9LvVmugdYtPkShxUruZi9dB9mQtfwtNVWuWNNSGh7kaG9PGwktFa3CBhx1gV9QSHGgZMez98A3UQCwd3ni",
  "key4": "3CP6diAWPrfCxfuJNLGJtUVprVrqZEQxCyvXAA4JgqwHBSFouQjFAxeepVrebW2VNdjSq8hQXhkSzUUHNWH9QLVU",
  "key5": "5vCL2AtN72W9onzb582dyc68bjXG83ZHxcFi5w3cDPqhneyJVFZKhUqLJmpXpDSGrCHMxud7uy7vjJJmdxZxEtPW",
  "key6": "5y2wCS49z237eVyxAWcnYr6GVXYV7WJ2S9Cxw83mPN4KS91P8qo9rJZy9dSya6RpW1jJdNm1hrrZMLJ3Mn9o1qYn",
  "key7": "5znjmWShhJrPk9DBiJbCU5rY5oVQU2fumnrrHeiYfSZNstxrW3WFYsAPwLHStCegZWgat6c9Lrv23ysugJC9ypvB",
  "key8": "7Tp6pNK1TFKKScgZTjVxhqGYdrxdjnggPDJvBk82RazyrMCaj11mAwJSw6bZjfYEidogm4fA4LvEygrBx6fZFd9",
  "key9": "5Nj5zHmHywRYFdtpjCxdJoWZinvwqJKEbBN7qn6yF2GGfXbrbZay9iE3wr617zqWp7xZxZBzc2jfgcjHC2EDnJg2",
  "key10": "5CRBo4M8Z9PpdAdnDRqmnGXajpP11TPYHbziT7Fer5sKtvnL6hMgnifBgfsAM1qx339Ng8tm9qJfNq3tCkWvYPYg",
  "key11": "4byz7CP4iMfhnkoaRWyrA4qzhHrUVTugDgu3shBTPFx4xrpWSqdDeyU5xee1wxNXwESbDm5z1AfDYLAJwTY5Q2yJ",
  "key12": "2Dtd6kDXdNQ93jG2kTcYRZdJeKDueNsfMk9ybqBQ7cNYWFNFi1E5K4BFukMD4mB3kZhj2zHJCuHro1B1RNrG7vGp",
  "key13": "2qebgNYfstcKegmZhuM2NdGFiTdx4jMwsXZHcsDJoPYkvkQ8PXobJTAkd7UqwvMa26tZFUmT4LyPQZnv6Fvf7xJv",
  "key14": "5GVgvnWYJ529VQMxL5y6xmhrr9Q88AtT2TEAzgMMRYyhK6RXe6Q6LVeSbF4R7S8EooUnzDHouvckS8aoeCJ2U7e4",
  "key15": "2DDwzj21UZMi8mEGXycgFMqvrAbzYCVmW99ow73Vmj5P8roWFcK7Ch1FcQHtbYcvtTtjo75e66BC4sjNU7YbdZ6Q",
  "key16": "5Ex6kyweLHkbsz7djRFpadXhin6EDYZbvcHVACbtvyrokxsujThngE2doj546pVAh6cbif87EpkXUzNyTV3RznwW",
  "key17": "35fUVdU56ucLdAhhs1bVdGbrNZ2sLNQL6gZLZdMMjhu9qjirf2Mprk2LASQ1X3LsnZnLhu8GAb4cFHxxNvsSaH9b",
  "key18": "2KDevGCVe58w21chZZMmdVAADUzxVzTDsxVqPBErzioRfqcfDwPPZAKjMksyeVBp5DtefqWzkdg9AQRMg2NYwWj6",
  "key19": "2pLJ2HiuyvWAgtDuCE71ogS3NQmxJVZY6B3Ykt6an6pPCUK4vD9qZCmwnErBAf85UDiR8co5hTm1kxABuFYJZk9r",
  "key20": "2qcweic1Tc4NxL5mEJmcDnwBe743Yk6NcBHkN1rA4KTwG8B9cTa4Px4dqDaeLRMhGbfdw7zkeJvXQAhSu7ooJwEi",
  "key21": "3RFUbqum4W8gHX3kCgfNoonSn6G8e5dnN4VeKRf6jCqZc5CWoFigbyMmNLAwz7A7EUP99QCxMjKuEmHy2h78N9Rm",
  "key22": "4ZQzUictoyQRXk9W1YHrYSJGBf8SY5xpzhaAyyJPQT9nsJ6Ue4xeToyp9ZPdXLQMQCVodNkqs994o5oHf5j8ncNy",
  "key23": "3kYktwdEkJ3JhkzjAgGp6hVKnoQoGizJXugKt8aDmUCkd76beNtiCUd17ts2ExCD7mEBkNVaHFBXHjuLsokfuPok",
  "key24": "3wZenbPqc3oNF4xCdi5MQCJVWbMgnjBdyaKpLreFk8WLoseboTbgD9EXhS5Kpanz4NDUnw2bdCppyKLg38tzsFdC",
  "key25": "6mttvz5VNYrBmUiUuhRwM2nwk9skg6L9qrq2spLZkfh6CE1gKw44nwJewGAdPLEVLR3xhcnYdwbdRrRA5ohQYzL",
  "key26": "3ozKJ4CucmMNrvQJZVEjBur3sMyqNaYapHgNsMnmuBkKrYs28w9jJYe523k5yr2EYE9uSAGrjbWeiGM4SzidQPSG",
  "key27": "29bj38pfiuMVCaqr7jYmpDmawCrZnwGe8SqKbQ7N6LVUSMeNULpMGjk6f1BnPUH6Xg9oMF2HZDPHbYHKcUebYsGK",
  "key28": "3VdjDmhkhL87HcYXv83ysr9D2abUKRAjNb2vcrjevRUmZZiHdYAvkAT29mSCeaXiUvC1nahd9QcmXivHEnjy2vJM",
  "key29": "4avy7aUeCnaVWAHwVeYrkDE7c6NhxBRKVLZmcE1pzWfBb97aoDVT1yeEjPTATnz9ubQcFEAgfw41iPGM7ZfSSdut",
  "key30": "5MXd8fUNfiKnD1X85MG6KG474U69HCegwUd7vwE5RgopmHi5vD4V3hRd31exNKq8hct7ZBC6YjZsVZHQZ1vfTC3F",
  "key31": "3icBSpp53gQazQ61w8afMCJ5CxhkiqxNXHZ4nMMDFkMraBiohkKrivjEz2FGgVTs3G83MFUPtSrxyKmVHrVZaVFv",
  "key32": "4Y1JcpQdtpUGrn8SYgxrUcMD1D6nVaNgVQq2gvQx6hD1fcArqe7eULiPVxyBAWQepCuuat99r4BaV9v6T3jgMjA9",
  "key33": "4NchmvtsZktCgv2LKUwfuWz6NwjxerZzkJMkyRo3LUebFyBYTAUPnnxbaBJUaQJUAyvTtgG3Jd7DyBk2Z69otBYU",
  "key34": "5Me5w8MpdM8MzAdMEpRHoj42CQQzZfTdFiJ2eG9PXksCqDGViKwAmLy1kMU5trL9mfboH6FRGt7qtBv2GHx6kFNm",
  "key35": "4Dxm8C4ZvMnGMvmEyrGuWP527Zcqmoc9v2oRkU9XgFrDhooXJKGjPmkU8L9dKq68dw7WVboLbMwaVGG1Hp6wExUZ",
  "key36": "eHnbwDRY2iWS5L6JRJR5wKVfGXJVgMUtuhR6oeCEH5hQccmCGVnsyifohR6UM8C7SwodBZDbgmaK6XdDGi1J3Pc",
  "key37": "28je72RzfvFtGeGfWMaAUo2wXquLqvzbn8Z53DzXtJRgNJVyA2dD1Erv3XYabwhVz6KoB5fwCXPU25j2qPsPecLv",
  "key38": "2PjrDnRK43dzmabK3njZcWHDw2m4r4EF3PHoHAWxDqxDV7dRiWRAgFMthiA3wYUPMb59DXGM9j1ucaQBqonsjhqW",
  "key39": "2TVbC3FMo9eH8xVxAcXjwakaaNT2Qyq7MmUjGBWNhkBmRbw4kGecLaY4wFq5cH32r2kAkqNQRSp7X84oiYyme1X8",
  "key40": "31YEuTKy24iPXzda3otv62NP5CswQboQmKJYMMWpzHvRajS9EPsz9mryh2KLUqBQS42fYZZeCaNBdaSRF7SR3qgM",
  "key41": "5nNgwMP75Y8Ywanx7SjTHJq9UM7jmsGykYJ1W8mJKNxw7UBawdXYiS7g1d5iSr46gXr5LUbYhKRaMRdUJXCUAuCw",
  "key42": "ihyQnLrfGEcSUXAdEixNAMG9DLzfzCnx2FrZCTpfyoRhZV6fD3Dsyg3mQZowa3kgYGWnAaCj4CgZmz8fNg2oPVL",
  "key43": "2VqqxgkPzuNfxYTVjkzExyKXFrdhTHZQrcGyDBSJNEYpAAT1tMJ4E9yBXT1mKfR9akdzjnfuGArXcj8dBA5ABmQk",
  "key44": "33bSGT7wejpBL3tWRBK1vbZyyK4ZVPtnJMqvUiiwP2diRJ17wxKjvsESRkYhxrZ66iMuVRPWxb8JTSoPJBwBNS6u"
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
