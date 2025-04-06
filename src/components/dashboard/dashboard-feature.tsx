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
    "3ddNJHedUtGz8w1R8YDVkgk5o9qohqA6ErmZpmiChGvXNytarMQkbGmtivNMDUxetVgSBkncHBpNkJuHVX3ZYwuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpAaUSPpjPB93s63WpNv5LuFQKUe3AR99oZz869zPqHHR5m6SkPMmai2mAq821LXZkwihZiAeoPFiPBDRhLxCK3",
  "key1": "5D7xWSZQBHmv9N4iRhRM2gEHLArDcokrTNxzwodNmTQRPmRZehS5SDnJVLYU9anfpqU3ZFjKQT7Go6xkbzkFCMFg",
  "key2": "4FajNJ6LEJ2BahWPkkYJrs2YFPwjJAsudSLcx92KD6CjzpeJ4m5fdQ8cy9mYB9shktt4xkXnJTtG8xAmad3MD1Vm",
  "key3": "nHbZHNmfuJ2YaM3zmQPtKS1AVg8cc7TA9guLgjb5HbW3rGnQGk8T5QNhyTbeSmGes3643jNtapUCLgTVmQhkKNR",
  "key4": "59PW96R3RfYJf1Mzvp72tiNLd5sKkiL4mGfpPexEGCxArjews5DPuspbUio1gVnTk9GS99QwJWQ2aVNefLjkqfEt",
  "key5": "2k7es69Ffuyfizi3R4hRq3u8hXZtdcmSpU3EuDC6hFeYtyC61CxgvzNRoFs5aVkfAcvR3vwVu7pdnVr3u3U8T5Ks",
  "key6": "fFmh6EiVHXxrATmvkCtiw1g2F6kNZRtgKfhw81SBmFTt1QkYcEwoYLJfPqF7Uo2Wq8F1fTCzXhprPUSG8ExKnRe",
  "key7": "eKAzn1tAsQgNQNfzMyvqUp9nSv91yCqv22TGwLK1bRfeo9zuupuJGvzV21TQLTEaf2JejGtVvHK1sZ1ghmpPPsG",
  "key8": "bAd26GKP6Rsr9NRU75u5PTiGasZ1gW9iMs69hPwtNiQtJY5biv5Qu9zDDnEFqe95BcxyXu1ABsqouCw9QJwyzYG",
  "key9": "7mFQjt5x8u5RRe4253kNEHCL4qb7uqFLMrC2AVXqsdwxoq1duUG4aXhTVUiy9PoLA1k92Nyp2eBD9Ve2ppYsjDa",
  "key10": "wrHGTXDwFYyzHqb9rNfK27W6HcUhK8HkAoF1dNBaZRSwPwsWLK1jABCkgaVzvXvu7v7dBgXp7PWYXJR4V8JnMpZ",
  "key11": "vz7QZdFzTfbxj25SXa9hs79hDw4Q5yaroCjmv2D4eXjMMNuaG85TNaepsBcvcEYVDxR1pwp321VXNQddmd1S98K",
  "key12": "3MBXTg8uF9tdxur9GvKD47UrM84uE5nd52hpyPa588neyeHFBqqUQHiQEVrRwV2cPzrccU9YiWbRa4v8j83GSJDB",
  "key13": "4ikzmRRhFv9YDbRVCHyA9jbqGPQ6BwEtZrSBF9bWhAUKssEns2kyDf2dKQkohQTVtBtt6pKq2bs5hHDX8wQESgbL",
  "key14": "55QMi6Da6YTc2Pdd6vadmFrWUXAakaswf3D3iuP98DBqHzP5FMn5Mb9YUk2wxcTpKUCEAkKV1CePFWanfjHqvmBX",
  "key15": "3rPFocpg35AMTAMdA4PdsDwrkxbWhcZVRjuhUfeNrYpKufGuk4kxuD8UGifmsvRffuwqdQCZuF6zwy7ZURbG8HyR",
  "key16": "3SQ5pxnoHDVMXeTS2R547zq9k1rFmLyMzgDQcs5r5UvfVdNy5sENWyHKWgMBspfXjf92YYSoArxz6YCmU4JvDiQ9",
  "key17": "5a8j5DYorGWS9imYiquh6FzdCbmUC79cQSeQ28pPyDkdiwvVq7ZB7RoKdWjjXXsCEwfvnd7mFdhpCFbwGGUD8cF8",
  "key18": "5ZMxMnNizSN2eYcsSLSPSVAL468wh3U7BSZxFsmEqbA9e53L5FVVKaB5iKtJEqkuq2xk3NMV2MxXdkFvvpdvXsT6",
  "key19": "TxLvd7i9u85FUKpMWb3vNZKGr6NRUeMbdxduK6byib33CcaYFzeo9APB3XMqT2ugtM3sD1NDuRRnda3nBMvqJw9",
  "key20": "4vwnDzAVvU6y4qdhsBX8HvJUsoNwcf71SJcTqLjz76SPtP3dpMD3HpF2E9J37KAHbPuZVLcTST4e1bNVWqmqbvXQ",
  "key21": "Gt2WDn2seu6nfd8fD7wAVzyCYiRrUxr8taaavHAW8wnHT6wBfPQnBHp2APcopG227J3YukkjmYodhmD5cdsVugP",
  "key22": "2U89DGYjnbLLeLXs6GaKEt8kHJ5RWCDSDkh5Hp2m7fXw44oUcV3GFtVgRju4uK55AuxMy6ZCbKWm4RbT3x2t8gVY",
  "key23": "5FykpgfXtT7pykNnJjKyYJzZr2TpSQnTkgXWCNtS28J8X8wpzwdwTm2U1bRS2hnLcQ2aYcs4RTin22aU6Pg57h82",
  "key24": "2411qU1uGV8T2a3HzTWuo8g6ztauyPFBhL6GMfQhuD5jngBjtDMwNWDk7US2CK244b5bF2mcKcZeEEPi3DzNiqCG",
  "key25": "4btmXwPAYAkhyWmd4nbkGB1LkNnFPALixCVJwjXEM6WAb3tVuZkCXeVLtWq24iUvir4WN1VBquzEoyQpEaZyY2h5",
  "key26": "3xnnrEkhYg8obq1dmFBtpBxZo9EbEgA789NrxARVwcfDCPFLMuwyAkMAoj22bURP4w23yQhcuXEHfJbDstGazjHV",
  "key27": "5jR1W4xk3kSEZRB7ZkhAyubV5VdAKdnJABemsRtwaVLa276NJC8K4E4ui6AScxXA8Cy6WLJKAQoNW3KjtsEnaDfc",
  "key28": "cLaAcbEVhnx89fejENY8TSzEUPAsR1Y2BzGH8VvFRBA2ZfcWNKBukNewawbRJkR7iUK4FbMRHnB817JA5DdBWCo",
  "key29": "5tX6XR9BPuGDigdZ9LwLnuR45JiQdCgSuRPnVtPE7F3wc5YyG8KYfQXUd1nGLg6kwJc4Vreohj3a5svcUoFX7yL6",
  "key30": "2pS2tCTwPNfR2DzXJc7MRvBKjhnsz26atK959mmmi78xEsj2yz3xr627Hh9feo2iLGhs92r1WN1qiQBoqfdxY5v9",
  "key31": "8QUipEdqxjLx4z4AuSEzCQTxjCy9ZSSgXM6QHPDxHYb3CoMspAUUYtnwkxoGc7VYpw5Vxyq5DSKJJ753RmUNpZz",
  "key32": "5JeAcRHGVZqv1mjUqJrmAKDaYSSC6X4hjJA5DWY5X4Ljrqrw4gMk9WvE1Vjp4844ytGyXobHwqyJ6wvuFuyPMzgp",
  "key33": "44KF7Jb8szfSjgbCUQAuH3wqLTQGqhk33F3yW81J1FkseYWYZxTEk6SzSubvqdFPENxoFUVjZ49uh8q5KJUQSKRC",
  "key34": "4x25G5yZHXkAiejCyMjkbgnYEDzAHY12hU4D6cMbRDCqteuQJuVzoEXdqwuxEaKdazJoxQr1nZbxW5pMJZRneBHx",
  "key35": "3Q367TYB8Zod5N8zaf5JzCmGLUShhiDEH3q3NHgT1ezeiJULcPM8Bp5oDBWH5qpyPtQq8BA3Gom3h5t1e2QSaNsQ",
  "key36": "2bSURENTyWxrtfz4bZoKSkKhUKGu3aUYXazuuv46mdpWEfHynSqLWK511gFR2QrxTXYz58aunonLoj7Dqry2TDgu",
  "key37": "ro3m4QhiEYA7cqdbBgeydNWX2cd3ibQvB2GRYUnNEX4pabgwSWJgW9qZmBozMDPv5ZW669S4D4cDbetaP4U5vhx",
  "key38": "i3cakaGcaxtVG49VA6zunNmwZctriNMzgDfW61Zr4XSXJgUEJvv7PxT3m7WZQP34hWX9r53Z4BTnYawjD6TGvBi",
  "key39": "2NgetA6SWbExTAYKY3UbvfxH81EJfLnSbmt9J2PrSqgx3GrzFpTKnzCXRkdgtsqjCkXVAyLnAfW27RprxsThgyjT",
  "key40": "6RhnsWGsQkyVfmMR9yig7GDpCLFEWE1mDzgiDopGnJtrRgKvCBuiB7oRjdH8FCAygo9ZZU6zC9BnX1BzvnVRPbF",
  "key41": "4G1ehvv6fB1gbTTQtSsDYhVqNuCpnpJZeZYCaBW6q58wp3yFsKPVhHyZi3e8ECVcrej2gvYSZ6C8wfYZ8zh7qKRE",
  "key42": "2nY6KtkygBFL936ftZZN95ndbKjLdJDjoVAAe3xMZstbbDabRkUkcxoSWAA1xbKhJtD9YHBgvTK2GdqfJDGtQcL5",
  "key43": "5v7sdkZcBRYGU6TazuUhsB3K3dgfyEUvnxkWmB16XrttGDRYCVqA3WHskaWeAuxChEXNZNYBkUw5MeidtwarmsL5",
  "key44": "4BnhmqfRmXMgDaNkJXHbYLvc1D53G7K8T5PC5eJhisfMMxUW8cYG1bqQrpZJYWSXX77VKvSzzaQFvifhWxYV8NuL",
  "key45": "3eyExKLP4evtpuMBmue9MqES86pFfx5Qry9x8DHryH5aUFCrD63AzH9vxY6QJ6P8i47UxuWyTQCNsbFYAjNtzc83",
  "key46": "45PDT7a6q6EJT3te8ueeW7JHGWw6PoGRgCgbGUmahvRfTzoER7mEhqTSUCi6yi4SWpddBMcEgoyTgqeL4QjofueL"
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
