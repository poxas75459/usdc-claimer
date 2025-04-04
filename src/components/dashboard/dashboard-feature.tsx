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
    "61noVPDMfzwrGfF1RTH95BP5jom2djHwrieDmpPP5UDsnqkVoqEkaL8AqqsPMa3KLCLHxPNnLX5yTZLCBzyGGPSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WdUt7n93gnN6AnW7NgW1rhWZkLKyqd9V4XmjMYos6Nqq3Sgjrtehxqx28jSz9yb67G1PcbyLPGRAJNGTBSrERpe",
  "key1": "3kY1smsdUG27kVivQtj7dUfmeS3kKFFB9t3A3giiP69LAXBbfTGj7dWT8JcpeSBhRToGPiYKZ534h6aLF8bRtMoB",
  "key2": "5wSmrgFReUKKqSk7PdNT6u4PuJR2fpTQqqy6ykb7Y9PiacFj4g4tFdWnHUKTZgeKgV9iCxgh3c2F3LwCqzkBayvq",
  "key3": "4beuKDhZ27fkNHgjriJsZ9jRWYQKe4zowqoLr58VhcSkm7JQS3aRqtZRAFUhQpiXU1eA8RXjSDjeW782iygbCN2g",
  "key4": "21asmXp9Hru5gx6WteVK2E4Bja3Bq5Cv9rk88hRtMT2i6B9inecFpaTYw4AodERBfTKbqfrx7gQ1k8F6eT9hvZfa",
  "key5": "454M3HBypE6j2nzASMagembdvJM4J5MaGaQRLoAfG3TKjhAsP3kreQoLjhm1KC9tjLi25igWnBMYERpWwjCsxdtA",
  "key6": "5MpFSZ9xbULpGALjS1hnSF4eXrrKxi3G7JcGqyQwBiga6MrreQ2T8X1ijmwCgbjuyWd4neNCgexNdaKoXp44pRTN",
  "key7": "2117pxp3Ka9RYUsoqHK39X5vvKNmFx8UnitjMLo4m1N4JUExK4C9e68pjTfSkMu3mLy9kkUxpEAZ3BrqoNmgegcA",
  "key8": "2a4GhNMDCA4wHEMHe9qWWQaPrbUhxgjNJrqco7EatHmd9HXKQdw4BKZQptcakgR6pyvYSJUw7BrjCqm7Mp58RYvh",
  "key9": "5bRxQKh62A7MGXr7ecLEsPzhoM5BtCWGLPGRAuW13C3WQ3CRyunG5VbVQMbysqmJ4JpHFEbbwNPBu7AsH9DdA4DR",
  "key10": "MPyadEmfwj4gmbUjXLuiDgWYFAouxWpqdeD6R3W6ZaGeqvaiDixEziqSXKn6N1JZcReCyzLx7McQrbAgxqBHbLb",
  "key11": "3iy4ukJhNr4xCYrhQCtUFwBmTRaGmvBPf1PU9ZhujgoVBjkCdhkT4ackxvBDvhHGyKm2Hj83DDiSsJAicea33X5p",
  "key12": "3Mshp25Y1c8s9b4RaUj5SrPLYuKtSws62ry8ecjZPgAhmXwX5jcXgdrXJKEvXs6KDDbpRGAKASUgNZCuN7qyXwPC",
  "key13": "3bpEb1aS2CgjEJfELHL2xZdMjVNVL8mrieB8QmpGwo9a74Dkfp1w8dxdcG6kzUVBpd3kQdxuKcSV2kUXr4o7xj3",
  "key14": "2DLMt5AMjQEs61yDoUfgiSmm68aXDRijcbcdD3FWor11vuZ7skSQ3n3rgxpCzZsSUkR6K72zba3dSJ8CvXWvzSPT",
  "key15": "4iuC8pHGEUhasugNQ3jQnPZC8sWkhBZ27WbSsH1uBhn8QqraLrpWYsTdq5PpfCWKwitLvAFBZPwuYiVkXhjNP8c9",
  "key16": "4V8jdEBomRPR79o3NUwy5zk2ce3uG5Y6XxFJ2vmzMRzprS4tFwQsazeCYkojTeP6EhahDSmoqXpC3d5iqmhRVNRT",
  "key17": "2snAHjWbNQJyZNoCNDDLmCwwQSDyRKS1Q2WzF4oUkybyEUXHLSZvJtypWEupa5T4TAN8nYNBJnZZ9rGJHaDqgEYf",
  "key18": "5P6sBJN16WK4WwcRHtD7otfZnTnSbWc15grKQVQvn1Az5zyMatbFNmakY65KFc3j6K5SjZdn8y1Z7q1Ax3Kfjpaj",
  "key19": "jzMx1HJV63DJyU1PkFFA1KKyspc7b6tyhU1YXq3pWP3wFidRgqzNUrjBKRoiFqjvs6T7PkBVPE9BdmuPPx8zk6f",
  "key20": "5HHpcE7pRZAZNLUUofR6kE2YnHwZzT4BZaH3n98xrWge96RxEJJRLn49zRsfvmjiCiw9aQYXnjLZPaC1RFQGcRJi",
  "key21": "PyCcXdTURJehN7Tumwj6Ucy5YLfVzYwfMoetoedzazEd4zHWwPwn3vXwfN5mqw6axLBxeeJMH5GG9W5GVrWPAVm",
  "key22": "4k4zW9Taf5d3cXYRmXeNiPNebVTHs8zurtTxMddhexJZdomAdWT8g5LJPYdKpdS5rh6W7Z3Et5PhJFm53PtZUFK7",
  "key23": "4LKkDbbj1JxuDEyjhk5861iNXw8JRNcEnoFmYbohpCB8u5BdCEo7zs6wwxLUS1mVHsSuFojVmMHccafjGuC8JxSw",
  "key24": "4ipWuAvJbqja7KhMoxGubfqkY69B2ucidxaSsV8DSQSzPjW3LZsdfrb7XXxqKPw99yxMvTs7ouTk4w7wGTAGPkSn",
  "key25": "5wnqAvTSJHGg4Rp6Q7MVSFHaFwFJ3wQotNR5EQSuCLJsfopLHvWnSnjjvnqYs2RGJgdZ5HRDL4CWvZc4VsbUnnSk",
  "key26": "65cjgocghBzMLucC99zdfnom2oKzADxgwZXek7awdD5GuG75nmKDjkK45d9deA9gorBxBGUNkYQVxgAFcw9qYZPq",
  "key27": "2N4Zp8N3aqvgf9stGbZkMCx6FGVg9CdazeJ41k1oEnMy8wraksCEkdU8ePMQH8Q9y7ZiWT1EwKeQzqFZkxhZ4RrF",
  "key28": "3Qyq8KU4Vbpp4hB5gFda646Ctb4sKzTRXZq5hyz97rVKJuP8KBhc4rvnN1JdePjCmfswduxhM9ibz1jpKpCFLZ1",
  "key29": "4raVC1JMswZAqxd5TGWHQMbe7FfmgXEr67aJ7UuhazM1cLSSossBSt2SKsWjTQu1kGXLy1aNs38JgeGdQjs1Ws3j",
  "key30": "3zH9QHqK4vJ1DgmTfoGqKuMHok9FUEnYeh9Jhjcc4xTJcaAPNjkcPCTr8sUK6SGtLURYVRrmj9Q52r3YKNhVjAcw",
  "key31": "Wjoq2yYncyBoyNS8VroqjjxyiqRbJY2przfrUabZrkodupcf7aDG5yCiTsZBHEEdjMR5BkjBgBJtz9ZUyFG4vJi",
  "key32": "5eiHsQKeYY4rdH1uN1KkFFHBAgrXJezoDpTZFxE8xKButLkEDdEBL1QX8pHHyrbnMux9RmwMfK1p1eGbrHRYSBi2",
  "key33": "2pq8qD1pHws2tYLzZPGrvNkwg7bdu3b7TxjkQTfc1kWvDhk4zGcXEQHwpregfZnQJFvaV4yo9pGeWPWHcv5trxdn",
  "key34": "652wmukYuHDL1hrkKoA9RztggCGGRjZcnk1euWzL2fCiNHrSqEatnVWHv4G2CnoVs6i8EnVtj2RT9M8mY8VHrB7E",
  "key35": "5q17C6wxmc6WGfV25XsLrH7zdHfuRB5TvnP4TH5ykYBNJFg35aTaPZDdpaCbSNeDyukf5fg4fZr2Sg25Ct2D6Vpj",
  "key36": "2UQvpyvhhArP24X63bMeVGhEXfeuH8HugV9xgCEjV4ti62f26R5qEZazbzjsZLPktrxXuwVsLpAowsttaAfKydMf",
  "key37": "5RTzM9BxLGgkVtRutvgXSmca81ruVMdRQ31nzou1hdJLAopEtjY24fcAnZEV2c796q2zcTVYizcaJk6HZb3mRFab",
  "key38": "5jSbAyaUwdDGpZTcAyEeNhKzALv7mMXsVrECKiMVDShH9dJWUvntuhkB7QHyeSi44VmDPED5T1zhWDBs4JTatGTH",
  "key39": "FacvYtztVek6VRqTrtfEfT88fFBaewmWLo8LQnRxBZfucWe1ksjvynFQSo3ZcbSgiTyQ3KAmQQnLQZFiLoPKrFZ",
  "key40": "ewhuYjqg7dTRxgQ8giwcTsGgAotDFT1jynaxHQAb9tuDbGhzGNJUg5p7TPePD68pNLtFatMKWP61XcbGB3mt8FF",
  "key41": "DUuUWJUnZSzHgDYDPz4GnhMVCPCto6FfUa98SUxpCyKyifjRriguTByYJvqegjdCjg2LkjhBtatv83kSkfTMUeu",
  "key42": "3EC7g3tHAd7HYEhY5GsU7wTWVBBmBDgVvKgSEN8oCZFXiXix55zeZLGmzyTtcb9REKgv9rTdAYjj3i2vLDVDsAe",
  "key43": "tdfyeyDm3ZW9fYnAgjByh7S6WGAUjsYEsuNnfQG5Np1JKvC37BT4mWzA9eMi2E466Lk3VdYVqwmptJTMfaMnroh",
  "key44": "Ca7k881mnJ5LwnDaACzCtgKXaetJyALxtsay54RUe9XB7DK1LStDrMn8Q2aP4jxqELxTquDUhWKBEs4BbmziSz7"
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
