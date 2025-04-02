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
    "2iidwAE5aPkNSPcwCN94PDGTA7H9u2SoFzQS9ZKRuq4Xem66v9qpPWCSRtDXqLhcDPvMh1jCbVWMhYdk2CpD62yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pu2LQNRep2jmVz7Y3S6FWH2VieYfbWcGRMdZWV81BhD8pDmRhpgEn4Mru3cDu7uHKa9Y31ykyBTqq948MTsqCeE",
  "key1": "62XJkcKVbP17v9YcnuQ9LwyWSDMdA9vKqBr4snAaUTHSKT9LncoqpZVghXfBU1EZLeq6T69SBDkCXu3tyPiJMr7h",
  "key2": "5zZQxRKyny7gpBq8Y2Kkz1b8QUxjMvSJZkCm3hNpZUXaXj8YDupQ6VmrxwfsFZtpNgxV9MdN42J4uX1B6CuTRZg4",
  "key3": "29Rhh4Arj1CFhFyExXo6avyXNwg5a3ono9QsisrPBmAM2dWTYiXwAegoRcwQXufGuSJZKegFGjNnLFeAWoK5kQrM",
  "key4": "2Qf1dyknnhN6TJvo1SRi16vwCwCEknhZ6mREXcyhK3qRPbCMJ6BPLTMVnjV2m3Yb5HJvaxYZjdSLppdCjjJGfmLJ",
  "key5": "3MEXnUEwr4UeL7FcvFDDqsaBQn3eaNYFM6ERmDTGYqaudZkKyKqezELki83UDBck38Z95zPXoeHrqcxFMdbFCShc",
  "key6": "22yGEwk72eYRC6GeQsxDnbY3eUKU421EcL96G4SsYpkW8cxXKj4xEWC6x5PnNCmgRms48PuRjL4XccYvoZ69dFeT",
  "key7": "4YDtD4GChLe6seQn8VRchiNR2MLG27Z5GhL6KddLUjKQR28HTieAVYEJ3V2fwXxvoDhnj9oqLva6bcSLpCSiMPK5",
  "key8": "4bXo4AFTSHzX1xkmC2tsf4DgUwbYLn58QbXLkizPQQ6fB4ivgdqHpR2tmYifPFPAwNojja6uoS44BeLXvbe5yg9j",
  "key9": "4nJY236q9LoxE88x2B5XPnTLdJNVsbX5Eto3WEX1iBsCKrf1Np7gRL4eesNDKHhZnrUzAjxb5ZENyuVMJCyeX9Ff",
  "key10": "NNNj2TftnMRRDzfSYyhQ2uMjd88J9bREY3XKGN7zb7ufUMVHwtGxu7S2tRvXcfssDhgRrMEvgM7ABW8BNZthwnp",
  "key11": "439NUFbPQuAzsNKTcm7nzwtvy2ZWM7XRVVmTFN24Qv8bN1KSLpAdxgZuyTbdLQTJwognCCtnFSVvSLSYP2KoxaZV",
  "key12": "5ifoE3dHZH1rzTvbukSe8EmpPH9nL4DeDdiA8xPNv6VJiaWc63vFNw9V4NDziU877aqSju3AKSrtsVwjrJwBRwN8",
  "key13": "F8USD1kn1xXUnpZcj2aweakot2bRstxC99EduCeQdNxgJcS5naWnCmwFD9QS6d9P8ra5uovPUtwMDSnTkGUtaoy",
  "key14": "63H8oy3qJJPHr8hGAeWKcCDzYrpL7Ypae4PQfNVKL23aciY6rG7TMFhWpUdKNRMtvFnT1ZMugrcgo1tHEqhH8Hs",
  "key15": "2EuSKFVxNzkh3kP4Ppi5NC7Tge3qn9kjhv129N2TtYHrkoXPjthKR52a4W9mBcwEV3jBrDbjGiRirZQqcCZKC6rh",
  "key16": "5hhEaM6YBdqmMQPbjZZzgXvjZrVbupFMLhRbTUwfreCmiJjozpSZJQuT7ANzz5Y5fB9dhKGTv3eXa2XEycyQpZ75",
  "key17": "4ZjcrZ18uQP7k21cfMGghA2DDtFAnqfkPGGYVDzZt4P6LiJHBoLK2Bom2xUE3jXm6mjaaNw47j89PEa82x2UnSeu",
  "key18": "2qNDzrGJx4jFN8NuPU2WmKtnEZDksxJpNPukEEoPtfCVCEWNsHDa5uoynQim9a3BJYTd6MfMf8XS61BmMDZnFSkp",
  "key19": "2JLifkwVLT7sBraqYfsLD2iu5GpiQqE81zrbtnxiEJVhvB7TaaAMFRDDpkhRNHy39RN6e41SDJnbXZeNJ4TAr1eW",
  "key20": "FnEgkCS63EkZFVGEG113c2Djyt9rx13cJ4bG6CodixWNYeqnoeeMiEqe97onRTAzRpCwZqSr2hVbWKHLbQv1XhZ",
  "key21": "4DhnNv58hS4N8HevQ8kkNsao8ZnwoAkACNKBU7Mw9WjMAJA6N8nJrSUHqASeVf6QpaXQTgD6J8Pz31jBJNrkh3kC",
  "key22": "2Vms7MCsotyT1e6HY8JMXEnAnLwuHA6qBv2oV9X5aEnrdx2d9aGJKF9ABwdeBsgXDFoqU5pcNKAGkm2kRUG1wkzC",
  "key23": "2U7kjUGfLBcMiYLoGGiM9dcnMKdkWjjswE9NndJVikVsA1uiiJea2dKwMuGbG95prVCNjXrhLHP5ix2m5ruEZsDG",
  "key24": "624qiGdQguUk8eCBx1KxMVQXYdvs5PVVg2ZiKhhtJcoguaUFogiyN4HzMXHsUJgeqyz6kZTgQbpdJeCbEvRwvm8v",
  "key25": "3FMy4TipSaEZefUsDp7riQQMCYJi2bWWUqB3fxqFNkBfRAsBxKuWvZV9pMzvRp6aWTL1eSVpjTjGGG86XAP8bt1z",
  "key26": "5rQM5XMyXU3hgyaXWXy1BU4PsmQCzjWwxUe3eTAqCVxsEuUPPotnS2gNds49su6DAA1c6Gd84rgfT8qGg6WZr3J3",
  "key27": "4QQr1bRfRLpJ8TDJ1YZ3sWLFnzdQsjoCFuVfxygchBYMjZr9c3Z8YtQ94VNtpS4fwVrK8GvehvnTubcVPZAgTQoN",
  "key28": "4MhtZ3DtNgVm8gq4G5z68UppLid6EELR4e11h97A5ZKkxR2G4xaJCMbf9nmKZNxphnBJSDkpNQKHcGHUZuXVbhnP",
  "key29": "3FRvBBisLzXsWQ19gxUQyARDHdddqzbfLQCPSBRSZysEWjgaHgNSdBuYiJLqpW2viJMRXSXQCnJ14Qnu27zSJK3G",
  "key30": "49wu2Di4ZdNnYGc8duPjLRtywhbo45afqTnBsu78FGbfFsdLLxmaSAWBPBH2BDHaVNugag5SFWMKvGHSxfxvjDRi",
  "key31": "3zggyTzvpTbkkgrd4g6tBGBDVCPfTpvMsqTzcwAjP78FxAuhhdxPD9fbmdhRxBpziDZVZijhcQf3xYRbgDcykNyJ",
  "key32": "4ezuP3asipeNZqrG47y1rWKeVkpWiTHGX4BG2hVM8bvbsqspnJmptteNybnoYCnaoCxKATVBSv5ZghTFab49qeLL",
  "key33": "3F5fCpgjUu8yUi7t3fNYcBXr9GrwTjqFeoykA32ssnrJyRDgvgkxd3VqV3ysHjDuVeJFEpANCNqaU6JoqtvCnYwY",
  "key34": "2h3j4ePKyeJD9WW8j64SvrheFWuBAyjeSxGeijXrZ5sDUdUhqPPbQTp12D6aY1GEdu59KiZPdKhhFDbuo9uTHLB5",
  "key35": "3AKP52A6gjJCLt675dLFJz4gngty8pY97yV3V3xwi1dz4AYr1iF9t51wFF2sib3euTHiFzxCrR62y24rgA4KiWXm",
  "key36": "5Jrs2XWHgDLGyhTca7vH9BzUwxurBp4DG8dEjGrxcELqwYVLF8pe6hprMoH1MR5YBeHmKTMWPNRfQWsMKmKxsaob",
  "key37": "4cQMsfyekzmgZNLMtNoQpDuT4F4D13cGMf7rySXo1mdyeSe5FwFBFGboK6hthNpPy33nxrBaMBFdJhrbqs13b7jc",
  "key38": "2sTKdnVgufmsWRcn1X6JD9maXqKQFneQx2xMCS8bySAj9WW115eBYQbnLpiiGyZoy9Y7ytErPpSB5XvVb36knhb1",
  "key39": "fCcHw1deigUJZEParSDwYhktCWLUUhs43DcAb35XjPD1NySEnnBGGn8sAb8FwGtTRjMSTHPAkUhQPTpvgjbQbFy",
  "key40": "4NKmnVPMqMEnKyTL2jASGW5MsBwUU1mupGjXvrxw9S19jx2Qnnqh2tBQB9WwpwQLBe8LismDvkKs53c2rVLDAzRU",
  "key41": "3KYFeBLtdZjN5jr8ZRmuvPAXWkhyKgMYweQ374gn92jQ8ANbLCMF2ynkZB9Lfjq82fzCNsTLPZeHuZFdjtcZ28Xd",
  "key42": "2jrEQrCiCcuP9Cjj4ze11QoHUAuCVh57RLTxWzPXA6L2QQxZPQ6TTxSeqV98BaJz1NsJEgaSzwLTQS4UiVkLDMwD",
  "key43": "4QjhtmZvNwRr2bTsBsYzXAavmohxNRL2BPFKNV5oxTPGx2fNkCJ7ZE6JSs775UosmmmYAtSdow1HEoGSYogDgrgp",
  "key44": "5xAPFMvBG4uFemy3RuVN677HXmQqLjUTCaqymkyLwpBrVhWaAfuhLyusrCLHPjadPoD8bL9uEBWy9CJ7raoDDN16",
  "key45": "44Hip55VmAaHCshXBU4SKvbYtEhb3ruDHUrkg6RAH4bj3GW8zUUF3ixeQB5ckD6pWzwg6kKZfC5FdRUqt5FrYCHb",
  "key46": "2RGGzXMccuD4P4C9xjdjPhYeSmuUT2W1d6eKof6QiKR6jGaefRJfYYpgJDuqifoRSHhwt7rPceqyTXjnP4dQWTBT",
  "key47": "4yyhCbrhTcpVwJhHiRFj8Vwg66d5fqg2q1Mp4pXnA8SbLe8EPb8xhBHW9uL924jLprAUPvBPLiC6CMfWLJ8gcVHz",
  "key48": "4QMGRemuSNy6ZARDcVDCNFPXM8E5H85f43Dg28fpg7Ud8UR72sLN4Bn5bX99BUbB85VQoYzjUSQRjhrr7oDmKrpk",
  "key49": "3fMh4FACy2wXkbdTB9ePJ4tyBVg4hDwVeoNYEBWLtFyhYd9E9YsnXRHuhuFPcKkKQvLdwwRZajzYzs7Qe9ANxWwr"
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
