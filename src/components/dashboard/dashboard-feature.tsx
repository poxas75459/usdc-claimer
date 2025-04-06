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
    "4qM3SFcE8kZzqhG1rSN2x92TTZfMcKgT7kwokAuVoLLizeAUSDNeNcJwWND4ZRFM7M2hrEMtCTmpzwqjtv6CYLcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8NSBnZ9XzjtLsuSocPsKUS1y378UAQDACtgRtQGnoxXAEe6dwFixHghUbdaifAEoDbwXKmRy4EmsTNaawTiUtU",
  "key1": "5pYCzPRNpwWveedHUFkGYnS3VHFgwGRc9ZkJS5yjep3oyYiqemXKXL1v7psWJz5GAXEJEorV3YdCiSLYKs8qGXG8",
  "key2": "P7QV4Si9vwV9wAE2mqDQ7nsUcHDcv4FKRRRMaSa4eGdTpV36vLieaUs3bV9juipTHuy61Vwfh1akVq5ccubeUSs",
  "key3": "3MUZM6gwxUDX5mvxWxNiPHZjckDuyuJULNfZqqy9Qvu6KUGMTghjG2g3HEsBe7uV7NCjmyHLfwzcAikZM6JstEa9",
  "key4": "3XGQ3y4ovfdMG8wH9sZVbbLyLuk8eG7qzo9zVNt1TwecfpZiFviWUadrX7TCrUbGycUiPoKmff3sKt6Z17qykQFD",
  "key5": "5G3r48TadStJvhh7xP3pt3xcy9qmNBfQGaLGdwPRQsYrsqNrAKs8z3vJCNyzRU7ouw9T1VttSyy6wTZ5Q3NHsAgk",
  "key6": "5c6wcVgzTyqUmbVNMZtp1e2i6KeDRs5QuFTLJoBHZ1DiAwEwKdCU4W3sPfL7SDGFiUTBpSgPxyj8VZb4WFouKhBr",
  "key7": "3B614bmL5hknLX4nrygrofTEWgxvpaCX2oxKq54iR41cEEX7MjNDn71sBYNvRxFZztaCiA75v3DnJwm6Kn9DT5aA",
  "key8": "3Xvmugy7YY5TRYT3AFmXNBL76DuFByh7DNiqLHYyHZGc5F2RtNqRqc4YFKBrE3d2fz1dp13iTiYKGUE3j4XNas6s",
  "key9": "4nvN8g7sUjPgLaSqseV9TtjiQzTiL5u7MsPe6afx3V73y8NhLAwqea1nTsKMdccVqjB8DBHkswQtRVSQRPb3vPbD",
  "key10": "24RVhG4gPrqE1neRokyVoocC4fpwghmbtzRJMuh7vm6b55vFiS2JVNPqnVFoN7BChDcMNzhMBpqrDcQEZ9ANSSkW",
  "key11": "5fLpWfuEnz3WJe84XXyiMUKZ61NsBVTMN6puEKnBF2yb9Q339sTnxqJUALBgxLYUyyERGnh3GURJYAaa1LMAGwri",
  "key12": "51EYfYSj9ieiD95EHUCfWGYBxNSj8WyUrurx97fpEcLhNyfKZw4vnauYEwxGm8PFK9R66d8csMh8XoyHwiQHKkTS",
  "key13": "R2snGHQhou3D8YmNDB3Mfkia2z7ny7j2N8WCzwBcBaBmsV3cXtgJ3pQjHNd2KJ1URk89znxW1JbpEgTreD5s7vc",
  "key14": "3Cexb7Be6hDpd9vBrZkKkVCAgG3e1Cv5o3oatb9hvyxbfrKAeAufxUENarmwtwRNDx6mxWAMYQpy6oW1yS5Mrh18",
  "key15": "47pkJsCUQMGfids12HJak2mcxg6ET7vL1GgLozsjGjAf7XV1BK2y7nTJMXLNmChdnaUCquFPd1PAKjDkFEW8ekQF",
  "key16": "3maaTgi4iB3oc3SnMeReWy21Nh5kvwrwyeHAoDM9UQcAJ3zzMJPUdUxKkextARrvZzM9QtLoy9naKty4r7FL763J",
  "key17": "7joXzw16yKj7MdAKmnHt7swbkPjdFe3y2ccEgfYr6mXKmTsjkRbUeHrQsq6CnkyPyYfNHTogsgxuQBTKTZL8XhP",
  "key18": "5kvhdXdUFgk5grbWUMwvAF6cjEXbn86Phn1SXdAQwZRavo2Wvif2J4a48SHH2bKVTfqsbKrw7MSPTWm4s8wYvrVh",
  "key19": "bHkH5hGYYQwqRaELmiEssx2FBjcwPaTg6X9Dfc9nEQyindkrKysYLBKcArVDday6LcbAcYRFDRV4vxvKJXpHHXC",
  "key20": "3zXjLJu6EKYFziSDFH5FDkJNBLFUsjk5WRVXACyLh4LTxHtA14dtf7CRnH3FHsqXCsC94ZwpVnyEUi8JkMbmvWD3",
  "key21": "53kXaxucUrhfVH91BFbrzyM6QcKq8u2w1xCacMM1CP3DJC5beTF7BhWN5JvzGJGWXd84kqeNUBbEzLFRLAqEsDYZ",
  "key22": "2mTBA8JEqwmw3MSjkqDBLLUZ9HaBmDF6EAf25dDYJLahhbzkshP5eh4o4BD6h4vJMfYQAv1HC486SUma58NErnym",
  "key23": "5G7ZU1JyT2b5NSXpi5QLzD5GgDVnGoGFPSptpgmGGzW2jSnA54capoo2Pa8tmbBWbrJ9m6H4TjKRDuocpAxCAzSH",
  "key24": "64Nu1r4X677mBaa3YDrbtrtdoiMmhGgDs89AyK4fEDqcxU6p5kN1sxGtciJaXVJZQfLhwi8WRc1CKQBsHdgQ39e2",
  "key25": "2wtn7FisooL4iNmmzhmhrRwHSojBS34ddrSRGJaMFeSzXYrXqfzyZpoFsaj2xxqBPyqSaSEuxSyoR5KeVcdZPGZB",
  "key26": "2rtcBRTxtkVcTFjFj9yMniBG6PTQdTQViEg9ae8Y7nvnZT1T4QacwZ9Shd4ZhX9JSqJeL6K5wr4MxSXnBG5jxYfc",
  "key27": "2rwcpJXb6c6iWMzgvoNk7y9TnpnVkxc9PqrN3FRHp1QJtsvSDL1Z6QdSqf5vcWSZSztyPhyUgyGoQ1bhWy8AVhWM",
  "key28": "2gkyXkR3nnLwpsrthi7943R8jeTKsKQBAYdmhYEEDgDCQzqoMbs2M7uH6MfNPgTP9fPVhNavBNCqWLHLEGfsV4ty",
  "key29": "4Z3T3N5xvVZ6PEo4EXbrqthmX431EVNJxmszVA1EkiMR15fWkmBrUdNBDywcPBqCTwqddzfs5kHi9BcrzwmwnAMK",
  "key30": "3x52TAY8amWyf4EW1xxDbnU9eoPAD7pvRzBb4Vg3k8aYqdc5hsTP1vAHAtzr6yMcvMt2F37513e1XBqLBacd7hwf",
  "key31": "3vuHrVMnrsDzrVvKTs7NCNtL2Sr1e6vUCRe2RVV55dPT58YBTFcYqTa3RS86QjcKgjK7KyZsgBWUKG39D2vM4NAp",
  "key32": "eAbkogNBDhe4Uq88iQUWijf8QEpwnKhTNurtAUVHBv2eUejXEAufHh2752vm3tGxZKWZvo9kvRSDStqX1DAkZVv",
  "key33": "2AMsQBCAdtBKpRYbqhY5fq6sQRzDDaFU7uhmK1Y9Y6E4XYW1zCZQMM1UnfCuYRbMWuW45567Krn3E3fu1YcN7x6B",
  "key34": "5X8WqJFf9wAjpPHYAYuzwocnEDYRTdTyVrZhx97AkCoHnB6T2HJ6Gzx9ppgfJdtSadpPJ3fDwXCGVmJjpSgY43YL",
  "key35": "fHkrdWcFRn3aPCSh2LgNAk78iSA3xBca9yy9wVyWP2TtyPjBoeckj2h1TgA9HCH2fh6bYZSoRz9AWCMcU7X6tMc",
  "key36": "4pXQQ9x5nmo1afJ5sumhVRdogU5DRVuGFgmbrMR8W6aJiss6ZhAVZ8Timze8V3KB5D2AQL87mQDbhszoQbA2bsh3",
  "key37": "2FVTyrRZzyP76DwYLMdge5oZcmbazpgc1HwAUaxnwTp76dL8G4qshQgGg2ZcC2v3AQHkuZMPLZ12yoKJUfmZL8k9",
  "key38": "BF1wYHD2pyxvujZmYLWLiqs8vhLEYdeCBZH2qahNfBEGwyssQ6xqUC4smSR54RLyhpN3Qq3iAUohUhVYAVwPHH6",
  "key39": "2PAeDyGHfMJHh4q2fQDRabZV2jM9zwu7dg7dG2r8C6RC6SYLkigyH85AymAqXMuWkrrjzRHxDJCZjNxKsjyGkj9D",
  "key40": "5o592JjgueF9RUkQA7AyA56x4PQSu9DhUDgjTmVUjYo7mwSW81MmjSXCtPY1yTi8DPq88oQ2HrvLpyB373JyEAPw",
  "key41": "2Du5cjQdhhAUma7PasGMrwstiZP1ZSTkKZY8HhX1ic7oNc1Lh5qe8RRb9rtvncWHaJV5RpSn5jsLCzkW2VMK8q9Z",
  "key42": "2vF7pLwrG5pCCTgFqhN9HZxrerdwaA3hT7QQuy5cY7n8gKPwxRcRxeQffVLm1BbWp6zQv2S1oUgfs46Gj1P8Y8ew",
  "key43": "2aci6mgDqgMX6Bx2Me2zC2uquuDyX1K7SCSm2pMBtXrM5ruceoJLXhcXsXSq4GNvQYrxcSzGcDGntoPpsein63y8",
  "key44": "5mtHtEd73zD5pFQFMo41FuA6gLCWC3moo3Xbq1HWUFCk2h8vsBoN1JnncaThgkfk1kbudnch9nddXGJ4TdSthWks",
  "key45": "3Gz2tmhSUvQdXDyme8SgwHUK8291onqpR5kAkTNk71NDuMM9NQNJaugTrfuMFwVVkZYJPLfHc3k5eShHdkFW9Sbj",
  "key46": "41DdApUy8t7DEb3mszaUc2gbz4wrSswNnFLrNJosUdYFygJnapMXv1urrofnX7x4eVpGTx7xyK7ezQwuNsWXFrH2",
  "key47": "4WkXrKq7KYGwhRm4cdhqCkgwu5YJMTq7yjr6p84dTk1BQRw3NrFj1NBFdQv7qAqqwT1nEhV4NciFtXQGTUC1aEta",
  "key48": "52c2Vn5SpTvYvx7Faw4m1VFmvcZoWA2FwEoCcaiMZ2GN3n4fLz95xxcRp2Exvb11mmyTNxKYTRLT66TEHJVKjg3s",
  "key49": "4Mjqm4S4XyFQYim9A2cHCM3TctvR8WH5oEfkVvBVCieag347zfDY361jKvQNft56SXUknwawmqe9z82Pe3whAXe8"
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
