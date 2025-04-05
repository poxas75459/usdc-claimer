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
    "2zqc9DaL6N4aTkxh6AWqpBzFFWgjPhF1HpjKevsiFxzeBhWC8a7FSG8sQbqdmRWbf2oFTJ685Hj7do82su5KYiwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mb9DrPYCuuxQsWYEhuGg797BSwrX5Jk3z4iZSys14yvVESxrn2xTR8YaL8D4GYPF2QqsERkpiLKFG5apn7tGaDZ",
  "key1": "56ELMDVh2v1m9q9tbAqScWxriE9Zu5Ckm4v9rRe6M4pJpoyEoBpfXjhy8UiAEfZ8decbX3PmY1PXs3a7R7aGHdmy",
  "key2": "4FwktVBDaKFPHwdDcpte5CXsAvspqB2NHRhg2w5j3aTfQ8xEtySKy84fhdacxWCJ8HaHLUz5MsGntKeERS72aASc",
  "key3": "5dNAsPUpuNRfGajY53k8rJfQvB7h8DFG9RyCfuADCeQVQ37fnAXS5Rp7X7CWzf98n4G9cE2REW1DnxR1wSBTHVEz",
  "key4": "2XNYHS7KqZ76rnTE7RD1HM8rsCw3rvqQQJCgMzU4cJuRfhXAmumkYWUvcZuyyiZoMmakqN6HrE1W3ka3ETcjwC6C",
  "key5": "NMjcy2i3VxRLHuKGn3MTbpWhuQM6GUfZD3nPwp3t98VWkWnsrk64pwHPq6tQwdu4N91oHJqENRx8QVRYmn3M9As",
  "key6": "3C55gGAxuxGBTck7UEK3GV2LL6UDoNqRaRcmKJK8fi2ygSfK3RCR3VUphs2vykyTPEiPWYZoV7efLou5fCqmnjhd",
  "key7": "5tmaFwho4gVimz7AXi9KGSwAWvR6WvYR3ZLC2Zy3RFU6jN9B1iMoNJDKu5vakSNAF6hnLPPxEV3c58k5Jw4eccrG",
  "key8": "454uz5UojEe9gSbDzds8yPAiAyEg6CBCCq2wKTbPkbffxuD7mYP7vqCNPgMN66cBijjnQM4eRVsLc3VbsHMDyx3D",
  "key9": "4RsVJqdAuAcMuxAXdbkjBhojg6YBjffWK7TAWbP5QNkdUafHgCVEESXAp47Sff4NjbdEgjMMscP7KeaBGpF4Qqja",
  "key10": "wDKz3TttRtF3uztEx72aZ44x3moipYZ7Kng874UqjjfJrZvTaTYKJDaS8o4DMqx1f8tBdmroKGnuuzMXhk2RhER",
  "key11": "52UxwcgUQFErRx95aF1B3iWn5Z38DnMDB82kZGwfEfkANP4RWfptANmmga1DNCjaLcpzFt7UU2sL2ofST8arnK5U",
  "key12": "24JwFxcPddjyEWFAzSqSWVvPMShTX1p1rD4uFu42Rg55Y98UCbDouXZXYJyobeZ5FL3bU3Vq8npvZRtTBpeyR7ou",
  "key13": "naHquLmYFf9CEAggsNeE4fkoYZJdqdWQHCLKgrbfz1c1RsVzdeBcL1yDY1FhgHJFyZMARXqNscY81huhpnxtCxY",
  "key14": "2kBcwvjb9f3Ym1KceDrVhjac8ZFDeSmDw47NhRY1fJBGwHVX7Bh7Bc3fLqnwYRnk4AEi6pranbn3gQYoqCBcvxZq",
  "key15": "5vizXoEYPZoWk1n8oCsz87b2WG52runAAtBe2h7ZvNXDR4Uyeqpz2zfiqQZvHFdWLbkdZGegC6nstn5QTFxpuVhK",
  "key16": "2pQ6HV7zPr1RDU7jmkpz1jGFFF3V5LsJ43egMtERYkquCeE4Jhkoj2aasAUB9ZHymgpP7eSpWYkug4FwYKWhrEv9",
  "key17": "5T7ZTZk1RzPuQYHpkTjQHzVm8vgCTjFhPccSgRvu2R9poNsmHJYaECYU978Wk6pTnr5k2CpHhrSxM5WhiQFWfMXK",
  "key18": "5jxQd4Ho7dbFTbFEPf7FvAKfnEcg3p2tSXWRfGtX1U966GXZskyVm8J7JLGAw3hUprSxVEWsDP94rq7jJz7EuvLv",
  "key19": "5sw9RntXmqSVRoFWDDTtE92STEPobvSUjhAcqxgp94d67k7J234HC4HNNyPkQjjFciz6VoiRfQgQV69LENbZ9Jd9",
  "key20": "5nBxCxdtPeoQUVGz4e9MUqThmr4qtHmzo7FJ34yR1fJAXJ1WfKDM6JJ3uhe8Tdoy7PiPXWXEwfbPu7FUE8BybzW6",
  "key21": "ocPma5hM7N49kBE7qaosQJBvfjbKGpyM24ks8FxuBQ1poVCvJHrEpALG1kcnp2UkfA1u4rxx36bDKzk6JtFqnGV",
  "key22": "5Et2ETTtvFY8y6p4vHCJLgeknbjw3Grne3ChmCkxqCzRq8rkxCtAPjKPKdFHXD3jgZ2Hpz5WZC67a5KF5MFcN4N9",
  "key23": "NWSK6bpAXVvRdHeUNoAAXp883sfMyBhR3dJYDpHGVJFDzw4k7oMP69JnhS1HyRFmfuMDR2rtLvpxpmY8bEThFxB",
  "key24": "595RnAhUPoEMW9j54sXmaddz9V4TLafgPzXJBuvstkfD5mQY89MmFxJfRkHZS5SqGTdB6PPfGqLV1QJMtCABsaaX",
  "key25": "2XUySfxMzRzfVLfhduDoYvqwFWjFXDFTDZV6ue4sWD6gR5ZAwgRz5AFeGag9wy9r55BtvB7FcjCgVrgY8Wg6LiKP",
  "key26": "3KxdmSK7bFgq7grgYr7jCaJH2UdWcJPZfyb9zRmWvrzjhohCnvTo6DqR1ajxpdSophYWCdQUeUWccrxW6f324UHF",
  "key27": "YkggvStkqiZz2b3ZsSdG4yPSJBpAtdaVe9jgoiZGg6CLjJ8qhV8Mm7p4ErWuodW8y2cFSGXvqRtMTkyruDZysUu",
  "key28": "7nNfRnAZP7GHoU9JJQHMzirpV4MeGoMWkUahzc4z7wSbD7vFFfZvruG9HeimLFyVtxhyyRe4WX8HhEdYsh8wu2d",
  "key29": "3V2mePo76a4eeUDLAWbNDYK41yb6dtK5LnviBsWi481pZVNd5mgTMkjhUtUPbKSMgxaxZQDVgh917i5AwqnxiPi6",
  "key30": "2chLUggbscGpUGpmSuYPHRHxf1jNnW8zgYCaXCYo5Kh3R2BkaWaB75soqqBcdfPxnnMj4zEfavRqQ92ghu2bFSzJ",
  "key31": "284UHWvYespe8GdU8i4SMcoFyfiPhEMokr8hhsXHQAZ3v1ZUezbgg5vGVftrAW93uJ6Sxjo1X911tpNDVqyromBi",
  "key32": "2C1wDniggKcnmK11LfyJKhHnFr3cwSqs8CuEhSQoSdhLtd3QDLbJcxMvAv23U994VUbCgy8i9GCuYawj75gn85WM",
  "key33": "kVT27dD2A6SFNbW36h2gfQTUhLVPqyrD5H1bFLL14ufEWnVTaNdM1qNqifa78UnDf2PycM7MrFpBJTzgtMqocrx",
  "key34": "4uy21zcHg9hrU79d3DiecyrbBrfGmWz3zH93mbFyX9CfLtXov9Zs1c3aY3i2iiuLJqe1hq5VbPEqofkXiNn8KCng",
  "key35": "6785mNJahkZkdWbp9wewQeJYsAbWJa7q52vi7HYYeFVxbeVapWB4izX3tnvrgxsUqWDbTQA4MAqGKs59kZGMzV8h",
  "key36": "4FyWuqVShwWgHQx42rpt6u7HydkAbXnS6L8AfuHeyngMbsjCiyTQrXYyAMxU2TGgRoLBHJ4zk34fZfC2c27V3q1s",
  "key37": "3ppMZtiX6VW3TGepPEeenG8YXYuxVvh2tte1kgs8CwVWct19PLSDaXiAjQs3qGrhAxHDfyggday3a4Vts8scqX2L",
  "key38": "25hCSeD2xuk6Bh5tbjSGijVohc2qWQZahHkWQhZ8V4vtcxK2xLe9dUoWKTZiyTgvKZHHCbeQTCk2fCwRktcQDHGQ",
  "key39": "4SUxijEeLqxfu3wESw4w2Y5gfD4kUicCXLwpSa77zGWNBpyjKCuEAzy5BPkF6rMUXd1MtP5LBXqVemjhDS1yDhZ",
  "key40": "5TfpsUqmqgcdcpLn7QxydY34f9cLowhQzVmHqNsyu2uArJg3GMtpPc4mLs92cjfZrZwYirbkkzikManoLbtXrTg",
  "key41": "2z6MukXNFjQQDCZj6yN69u6cu6xcvcwzE9FcZTa8egLpGqNdLh9BSdb4AGUD22MFGyZ8bgNbvUo9eF8Laen5fXW3"
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
