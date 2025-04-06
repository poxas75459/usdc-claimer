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
    "2uWSh2ZSudfRbAFPhHxnXqgg7bGT58RgtvDjGboCRXqUwY3U5KwkuNqFpx5HWwAqbFrRPVyA3h2zYuKPPV5hWH8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZS6gFrmz44oLnd1FytPgudYjgsAwCA78yuads634ADj4EKvqUMwtcLejffJbagXDf2gmx8ZaD43YVwAx5LpcjGz",
  "key1": "5KXfm18bKuPdR4yxYGMMStUEK48noZF43mfChTY26o264HCdJw7Qciy1uYsirMNRA5e6FwLmjExEVhEFXSDe3CsE",
  "key2": "2GdTYW7Ff3Q5d1fLYuzPQqoJF4tyVQixGe9YWk6S2exUsYLU9ux2QgobXs8Z3cPyda74StfoD6Z9YmpbEAcjjyKE",
  "key3": "5ZuT1eHXCnahuSu4k7BmFpriaBF51Sp6vpc83ApFNwqZRxRfp5ut6EC1XKvdYoEmwJw6C1osY7skvUNbJFm4jyHQ",
  "key4": "67CT5mkUmdx8SsiJX3tke9i9qPJUYEWX4ggeKcbg3w2DjoNg8YUD9q7aqYDtomb9jT2Es5YP2GmgLbt22UWLRnVu",
  "key5": "4x6bmj8hRbtreXep3a5ZkQcqs82gm7EyuDjjVjtnCxG8rwzqgFcrNJEvsKLBbCcoZKnZuSQEZoETT9TPfbhEicik",
  "key6": "2ZNXKJWja2uZdroo8B8a8AsXDM3QmaEiXJi16NgL9kBTmzAsMv3o9v2gShZXoXRhc3wpbg9neqb76ycTMs2treHL",
  "key7": "5UZSwpcBanjcVawkg1KQigZT5MHM18bJquyAQLDedzFrDu7jiWkpwotJpq8TZXQTSwkWFCwtm1wJeJqj1J3N4YXy",
  "key8": "3Vfc4FUMM9QDPh3A3WrDRGipsYtJnauFjzpx6apfQxy4D2WfxKYJv7yZEsq4YCnjnLdEu239kLg3DxDxANrvVaVV",
  "key9": "4bmx8447JCfQkqW5VCZrnwEbG9Uc6kFs6WqenXMKKvFktyreUWK88LbyoGq3QWVXggSYk3g7a18tq2nSb6BHWiLY",
  "key10": "38wXji2M3Z3Lo8934jQbyyf6ESNDrpYyEiQq8xgr6p5bXtbrcGAcdsK86q7HBehaH4DsjG71KSrxP72iYdmrCbpG",
  "key11": "3qdFKf5XyDruN8ZcVKog5jJh5DgU5kpfyTY7xDJW7ntVMkevs52nuQM7i3fnYurMbTUbxHBn1wkxdzm4YiQjvhkv",
  "key12": "4u2FY3sKP7tFP17GkCyhohdAwut5BUBJ6QdzF4G8vfV5BPMSddM8YzcS2cqmB2naGkvNbWEVM7Ry8k3ka6sREs1c",
  "key13": "5tLqmdGqscBuzjxeqtAJ1ExugkK1tT6gMDqrq1nz59bPoF1wyTZBW8YXvFBFF1subYowTpFUxnt3hP2SH2vb7naZ",
  "key14": "3WS4FBU3GeNX6HDAFRxvacS9oFDqiLpSQ7tnwNxS1JyMkXcew1WDFdZuuyFVL6X2ctxXYSwmtiScPaxj3vne5JA5",
  "key15": "5hijp4kkoouD7pXfFhMYztGrZyhnHWes7dRmZzWvRRav9wsrsWbYVnRAJz4hQgz1fKKTFCgmvDPVH5o7oa8anfCR",
  "key16": "4GUdeWGxX4upnrYT8N2c22scLXYPTw6eUngKaAe9sUb5uXbG8V35Ak6HyeNNue6horE6GTpRQHid3v2bKf3YDdeA",
  "key17": "2JX2UyFAg5WqNMW1t6QhpUKx2dr9Pf1jzf41oBqYedfEYm4Ksy18Wqe1vmBFPTyczuWgGxrDiA1LKP6hKFBom1kH",
  "key18": "35s9DKokV24RKzJSFrLSYWEUhwVUVe8fJsv3PHnh8fLuGayJh9oYeY4pTx5zMdxhMincUXSdSmN2pT5DuNEvvybV",
  "key19": "4eEu1ZdQWg8LhrR4TmEY2z7ens8GdniGqyPmzMerwsy35RBeuX7bgsLvzxz6aC5FVGFefdYC22QYpEKqMobZYKNd",
  "key20": "3U8JzSLKefsQWgjHMFQKjJioFqM16VyE4eseLjKUsdPpQU2k7kP2BKN6651arrZP36Rb8nU3TzDPPvjXxL347fbZ",
  "key21": "556jDp78ba83Yu3noR5tf9AfVibisimKrAVRtYmEfTtyWMtPtc1jNevEp2PkngcERvD9NiEzVJgEVBvG3zitNJrK",
  "key22": "2yCgSBkBhUyoJzRF1VhGPD7WgAtQ2u8WGqBCas6qk1qT8uZhrubTZ2rkRPx1mKag8nK4zWPZRxB5teDGCjAQkudQ",
  "key23": "KFEq8DPpe6woFtqaaarKCHieJRqL6ZamPRAqJgv7vTfhbH3N4yyqwRDXqp7U9zEAG171KtJYKW4zFiUHDjoAor6",
  "key24": "29tQ6Wg3mHPJFTVQiypccHQyBGMcNAnn5jZjGKXZYy6TmbUfMJY4VVLQVaH7jprAFdkzw4oPEwEkJcwCcrq6WzMT",
  "key25": "4F1vHoaZzMQTxVFvMBoLJTiFqC2V2hb7sY9p1J7kH4UFZBtJXgjABYS2iURix5myn8VyjMRhdSVJmKBHXnA65CKq",
  "key26": "65MYgQFx6ozj3T23b8ecyJwiSvCXvjnnHk2ieQxwjrNnWhvXhxsdJrJmogWygRRfBKMiKNK8zRhMjkxK83XHiDaX",
  "key27": "saPh2Gw4ZpvD6TsjmVenJ9P8QGSPoRsq9EGYuKTYMGqL32GLkMNwVvYCTK2FTMLougSqRcHngJjkTwwBmhEnskh",
  "key28": "he6w852fdarD2zmWKUSC9YqEtKwCqLXjTMHVpFDf3CwmfnoKqDVnfDBZkvmFDgqn9swwvAQ1ZJ7sjhbmoK4axMD",
  "key29": "4G5urqURWQczAGzPDp9wY33Zb3FXqdnYJ4HKE3yPqA4KvZnWxfKAfcVtB8CVWgwd7RzgxmUspnZLfZBMXz5DpioV",
  "key30": "4b3SANtCPTVXkNgExTuqQgLFbaTWQKXx9WXWvoxp5n5toyhy9SzYAHTAQKmyENnHKPen17ghYHopGuf8e3uDt2SW",
  "key31": "62WTvTg24XPiFrVNHPZZ3sYkQD1uZJnzXD6sevCzJcEJ8bpPjc1nQUahSJWv3V4U2wfUgo6nyDNVX4MYgPt17ys4",
  "key32": "5BSNgUJdBdsdUz868zrkxMhEsaj3A9B4Nr2QfRDcC32wSKy478UTKtehYGtNDmpJHc5Wt4HJLcYSykqZTP2WRtHr",
  "key33": "MqmnsaqCZvyLkygJUtedpHQ9fP8kYvqETSLJ1SgHV7LmYViLL6xvTR4GzURkrANPkAW3JrBpuMFLepjFX72jydk",
  "key34": "53hwAHnBrYFP1nyJf5Z8EaA8VWRbecBEVo8TbjkeBPNzbL3RM26WBZvHsesPcxopNRgRfcDjJLmm7NaUXA6cWTdC",
  "key35": "52mfTuHDEYgJ1JosXUKd8W45BFWrfLvt8n2g6xWkMgc8YPsfN8zYGNv16CwumpCMnJVL6v1MyBmZHb8Pwmwzoj4g",
  "key36": "5EPipyc2U4DwznX5ArHwaBWd2evrpJwbyMEw71q1j8RADe61JPtCgM5ygTMCjAxPa17r2toqZgCG5XxvFkzi5oJz",
  "key37": "2RpoVEbw1zBhro3GnuyxGFxYtKxZjqLfn5qKFRCdowz4YfcjYWPnkqADBrBnfVsqsSwauqQPJSi9BdFUR5p58YBi",
  "key38": "LUshRVgPtzGRMr1SM9AT5aU7HmA3q8BHz9DgtrJFwwNZEAhTD8AsL7JWjnbjrEGJYdfXJ35Dvwawfnhr5MZUss8",
  "key39": "2RdWzeUWeHXHr75W1xBT6tgGDLMTd5Eqjiz3RQqoXwSVZYbrphUfNhdYJ4eXrsRLrZFsPn8eYmC11FVPcvYWkvCv",
  "key40": "5kY6Mqx5mq86ZqbXzHLnmjHjdk3HMW8wGG3Crv6e7uHw6TBPUkKM38EjakjiH7pnEMYuUshrakNQwer8W3TfasE9",
  "key41": "5KrCEC3AN5rR4YaaLw6RND5RYnf8EZrqj2qRD9wVXSWWSVxs9boTCD7S1kkCZ7LoB3XJRzZ4iYWw319qYje4LJS8",
  "key42": "4aXXW1vnXFmBdgxU6iy9MVgcBSwWKJ8y28Nr1Jcwv6LuhjSRBqrbvic3Ryhj6WzoHEEihNnRMkMxXatHvk9FWz5h",
  "key43": "2CFyXdaKAkXE5urVqG9EwPcdYFtSofwar71AmKmbj8vn4gEYLwk6rLyuSCSbMDm4h1cBk3vVQcj7prZ4H9WxMCAM",
  "key44": "47MW91iEFsgx2x39qktCbVwoiyC2LtFEW9wCRjPkrPStNDhd1uN5ESRyWfWrmduQj4mJn6hZ6R3Qnx6GdVhncSPt",
  "key45": "45LMB6b2qm79zpgYrow6DnpAZH7qx2oSMMLr65xured9P18fbEqEYjwJXWx87217CnPpND6NsYD3KPw6rE19D2jj",
  "key46": "5ka2XBEtyUk4asz6Q3rNmtrmudxHoP8yifhqW9CEdGeFa78uVZQm7j3kPfNrc8n2b6WVmPFwZutF8i2CUt1vGN3N"
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
