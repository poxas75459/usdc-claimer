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
    "37HaiSGJUnbWMimy6cn4WEivZDEUGTphdUXtaMAox2VuKA1FDGymtL9QW7dxRPHnnTQz2esAiv3NFYyzoSuKwRB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9Q1pAXjUu7CAhkKXDrurc9LxAiMxQa8BBquN7P3mAT96gRtubup6CvhgU8QpCaxVFWEtZRYDwmhjTTdym4rQyS",
  "key1": "545ztinDYnpvDA2zVD8D9tkuyHewng2PYB3mscSQAG2qkprpyNQbWFk9hYDWRYYFxLC4riKerZk8dFx8V65XEn7",
  "key2": "Z4C47zC7ggrFwLvsKHM7ESctoAuTReyhKSMTpYXcVwsPH4e4aXw9NtduHi9A6biMSoCbec4dk4LJDyxGB5J7Hq8",
  "key3": "2vwaXGQ32PDUB1v1k5BJsLptGmPcc6tuzJV41E13bbGm4iqpk1oPgxMJTVVqSpoTbo2umUnSRUSppPXw2zJec4x1",
  "key4": "2kpHDb1WPn1jNUMuYYN3TJ5vAXgqTgHYsWrZRX1wK43krurkeGQumx1wj4af2AR7vVYrScpNCRZ9wdBNCPTiQWuW",
  "key5": "ZPS6ekao5sqVRkcJH4ei1zx2AsFNNNq2T2HD5S7F561oPnUStanMCqN47wVzqEsgPpyG1tvd8KqesMD2M6xYAHP",
  "key6": "5xDdfLMua7iiMoZVN27QyzAveeeCgSRepBxoA7YpfSMKeBKQBRDB1Xo8vEvkgn8bTsq7YTpqFFJ35yY8GhWdJNJ",
  "key7": "3Gf55kx8SmQgpJGgAW8TqdynFCRUyiKcJfr24VdvWzhicMPZsLzbuzmQUpRHDrt6htXyr45LLTLWdfg7ypmi2yep",
  "key8": "4tpGDUY5d2LGLvUgkArLysMzrJt288JvhSXjYYr91VoGH82B8AUHhz99Hc5EhpGLWDmch6VZ1gY5FtReZeqRChz5",
  "key9": "4YBQuzysCUhvhzjkEE9nHDuS2G3DAKbZ9PTJ3dCj92N7YAjfoSmwtWq5et8fb4EGhUww7Rnh8ZGZBBPTpSr4cHum",
  "key10": "5Jm4m63YRjYZghx9Luwps49ZBTArUq3xY1T9VFhXWUgYAyWwC3q5UMr2eAYQ7U3b4beGMxc9JrhQ7Wxf1KWS1kXP",
  "key11": "4PguPGogeimaKEg8kiZSPAdHQ3s5rXmYpVE13hPiXXXVRHGLU3zdRpMGSgXx7UVTuhGcoQmFQhkRRZwzJu9qMCpD",
  "key12": "39sd1UnULrjcHojjC9F9oX5WocFXUPJFwHNknb63AkqibCyqJEMi4zx1tGBD2LjeMiFyMXHkp3MZLSKLPzgwjKXS",
  "key13": "2za6R1DfopPoSchL4UoQcypgyUC8xrjQ6WjnyJyxGH9epnxFqECkwiK36kSydizibZ31eMAeeDgUfwcvbMiuFzFV",
  "key14": "6274gD2j5YG1quZTWBLT7YFzfPDjVrJvmhsBAFfPwS8na45LFAorZXt1Ywb3gXmpL75f9SWeS3Lkfh42PLCDpTnK",
  "key15": "NSCKrLaiW5ns9Fcbh1FQrFacrUVCXEyNjcocVQgxXP37ZMKLuCtqvPH7fwqA39KUBLSEkTu3qcgLGbTT1fXrRxU",
  "key16": "4r3gaeeBisfZdmiJnV9wcdYwj6uevnzW4CNNa2j8EK7oXco4LNFKtspgVFGyGyR4t1mdkccLEMGfZho5L2HWP4D3",
  "key17": "k929DoU8iVrYss5YTYG9kPYWNiHgKvTAc8fYQGjAhiHzXtnBVbJpv7AGWNnxLMKH4yNk2DJKRtNytCKL54BYk8q",
  "key18": "4kh6ekLty8ZgKR5v8kMmoqxtM7u6figGUQDZwgoArfL5wg8Rx12pKnmFhUArcjz3cqYnBdpRrmLcqqP8yprGr4XY",
  "key19": "2utSgKk4iJYVAveS757YeLsUXGEntDVMuBy265Qv8HWZpGf9K5WHDJr3K8dTF5efS6VS7KTsQ4R8NF9ug6SrLaU2",
  "key20": "Pgrsq1u7LPcTFdkYCGa4DriHgt9r1gmBT4Y5XDZpNvrYnku8uhZyYBrdsL9pESpErx4W4sPy4KoqdrvUdXWTUyW",
  "key21": "2ZkmKHKJHg4YFVFLD7aMCXkfQ1DuvsV6j4CnV5SegudifPhZX23otyrtGarvDuX6YUiLt7rTLRVmqqQPMdZyrfA5",
  "key22": "3GAKZcAxKPJYM2A5ViMQvc7rNkB4F7LvBdnBBbLmdxQpiB3N1thHm9KB9PeL24ZK1vSHufmGD2j5q2p2uF88E1oE",
  "key23": "DQQJWtycGMh85ZtqGFKJzRjmc1QCCEDCg4EXTF2UwVXtbr76rEjDY7THEN2UnaCw6B1UbwmKUrfFJm16ukFABSW",
  "key24": "2DEJtm3HcfkffWB1Fy15JGK6TssvB8yNuk6Y5Kx37mGkaP7ZAGeihfHp8QZKDfJuQdJBHMELxiddPEzuZc98yUGE",
  "key25": "4BqzEEZ2uce87K6bHADwZRJ7U2rvdsUpA7ZZtogg45gMH6L1TqChH9iLRMPeYVWienJodfAsgRHykCjsSnnLyH6a",
  "key26": "2oidjiVLseN1p1VAzVmdUz68WHyYiUibnMT4LZhNJCzoGCxu6trP4ktqPdJ3vhaghDoHqMCweyFyf9aNzg4irb9F",
  "key27": "5m3YoGHKxSyenRxW6rgfukTpS8TAW1YmPNKE3h6LswhG1mRLxUkC7GKBvEAQ2atYVVjkESB8LBmoJjfPPCuJ5Jwp",
  "key28": "614THvcpsk2Ptx6muXSzrXLkKptwj5q5WpuuNjTVt8q7GAy1DnQttJoAoWQFbw8ZCda9MgsHh3comcCzX6F1y1Xe",
  "key29": "38yezb2iVM6WXHwr6Jd2nbQioad2cz7o9XQPBk8of3btBX8LXkY5bG8UY6oA91T7dMtRQLFWD8pjeTztKdTQFhr3",
  "key30": "iFpv1zYFNjMsrVbyRuPVKgTxBp4Dw1FNw61LLQsX6gQQNwXyBK9vQCChYTWZVCH2N91b9LmoaRZ2oDqXc9D3dvE",
  "key31": "4ry1RRvvLHGfk5kxsmi3LTJxJ9uGpmAAK2wcZQKX8879Ai4yiSPEjLpNYx2uX9P4Jp5BBRQjgjUD9wVyXLJ3LTtY",
  "key32": "43mt4pw379EiFMSJdM5FtTL1Li7umkRRfpooyhVEtcnHqeXcxaWYYeRNjEHBUwt8ykfbYFtUYsoPDLBG4iqE7XYF",
  "key33": "66gFJWbB9H2rqDfG3h3W7dYNAr6eeSb47fsNJw3SyMxXTyXyci41NqL1GMwWAr4dPwBn5317GYduFvF7NwWvvsPk",
  "key34": "FQRGZAyiSsWGpUirXxYC3q6fV8etkN8K9bdf8ybt7fRt4bYCSPvJgKsPSAfgDM1v18WfZcneot5jYxnzR2rW8cb",
  "key35": "3vcxRk7qKBZpuAe9tnjMaiyPc3avWfYoc1Lx7qQuVdDg9FFVyrqSBJHm5iLy62Mdzwzi7aXzajetDFhX9CvAymEh",
  "key36": "5MNJyqZdmYUAsGuj5JCL7CmMJZ8mGqrYG3hi25eSWqgyxypjTGZy53VNc7eVR2VuW152n9eLX3NNZRewjamrsTb2",
  "key37": "CjwGEeFP7wYuVmPttZy3mafAG6xyyjrwsS8Ds4VXCHaZmJTiMkh5i6HwgGsJXwnYjRwvpa9ywyJYVc58fC5t777",
  "key38": "4VArgMJPdTvGiteFVd4JefrVcuKSrt5SwjJURc9MYWuHEZC1scWxFAHYgfYdo2iEu96nu24aNkmxdmWi8cdMcf8v",
  "key39": "62Hz9gEMoNXkyihnc5F5Qua6Cr9riUatesidKqKt2estJg63NV8x6kEbnYKH8hJnXbV9YZtj2m5aseUPvepZKoY4",
  "key40": "2NciL1xHXrL1s3MwmDK2Sa7YrA5Vvkmko1fd3mE2B9YL5zBqcDqHuX7scSTsD9W4zuD67FbvhVMRCBksbU7irPfg",
  "key41": "VtvfaK6qGHUpGxVNFmMvmSvxVfaUHQibDTMKYZtnDFbNwLN6QRK8EecBSAJcCLr1QpDE2QetpXdXmodXFa3aikT",
  "key42": "4V6iZ5rf9z8SwNVSLSEbppP3DXQPAiTmo4dK6czVGPVG8wjaVN34ybXNRNpjwquRPvE2m3ebLiGWF1G3NBpNEeFy",
  "key43": "3McWDwvqvFXq8QPy3segqsTfYeu61X12wRy3ymACmSwxKvv3bvxdcZxG9duPvrdB1T2yLwfTvoGaBqbrfKXBt617"
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
