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
    "55yjUYZqPeypqEaWjEhA4gWqyXLHzP9dQXVSQaKSD2y9FFjddSNHBUE7yzEeuMDZ53LmW9pvXoo9bNTmF6g6BAvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vBgMDhecSuKnpafv4zU64MXppMduKYvu62muFntu9gxwj3kHhTe7R1cj75r1XvESHHdGsoBcGGYu6icPRhtZ5GK",
  "key1": "5CNFZpmk8wRRvGg6mNyVvKMYQYaJogLhRkU6MEMTZZXS5QxsJaQH3z8jLEC4ToVd7YrEdEcoJWHhB9whHVWc6o9z",
  "key2": "2L4Xb8Dpcu4fKfcwM2hrnveC3qApzj7Pc9RDGEhUGpJmF9fACVHQL7MxJWrPMRBuAfwpyM5e3ERoQwKEnLNmFB6L",
  "key3": "8jM1GRtoMGmkwEpUf1cx8WhNnJZz6n7EpQLCu4utR42XCwjZxbp2wurynLwyPt6yrfaJSKVk32tEZRS6W8Lk5SS",
  "key4": "2XyUmKSfNjhBbQQwL7mXR58SUf67wJqdY8bJD4YiZwQpWvDdaX2e69G3TwjE8gfUGWPM81STr8JEs1mSvs9e19a5",
  "key5": "2DiUFA9Tmh7V4WhhkQLP7FTdUXtmyPGuSXvFvW8PJxYQBvA9sAhY9iNgJ1SNG5d1QuSNjVpTRrD6GkvPrxHPHUvd",
  "key6": "5BgiiP1VUBvderALvqURfnEj149W1Ssw6op6AJogcooiE99dAiG19wni3ySKgZc11PbpwNBxSczzJEjAj9VuoxVm",
  "key7": "58s8XCHdTN4W7TUUbkFskvWQx6Wu9fZwhJkvARJvLgta4kr15ntQBaYfLnoi2KDkoAGjijpfAcXP4hWJPnUh9m1o",
  "key8": "5KdUcJqzVzRdgJMQbPzWnhpuezn3a4onVTNEVhJqMaxXmQ54UHoxXRn8vZ5D8mtwiKMFfAKR1XuWzS4i3Ys4Xrzd",
  "key9": "ZCdqsihftp1uVVxqCxAncXyGUPmRpzc9MN9zZa2knnQ6yLqRMZPutGimNetzPdCxevrAzEGfua5WrsEmvRirrmY",
  "key10": "2bHrqYJdNPSLTrrrUhejruRkGYXiXYqA1eAWbUJz6GnTrt33rFzWsQNRTgeDNPGiDvcD5DJbhhDgVtJzhL52RddT",
  "key11": "2pKHvgvbwHuv8Bk75k7trcYmAXog8i8knfMz5L7wH2mkGxmyevWxTrdmCXXGDiznFAQadVMVa4m9YbX2zCJKCtNV",
  "key12": "5Xk3CUModacipDeKSWnVSaW46FLXTaQofuAzrYTuybLR5DZvigu2N5ZWRKwzMBDvx3oaMxedZ1GiCe96NVVSUEgW",
  "key13": "66fM23SrPxh11RnQXj7XUH7My5dCqr7f9ThupBrwhbrFmZ6ZTqVrVwRY72qAZUmbWkBKdPjKy95LapuvudTfAY3W",
  "key14": "3NaPawVWzj6D9Scb5tUJPXXBvTYXcMFxnr1fk2bUuX4d7RYXdeRm457FLCqu5KQpGc3J5XdEg6bbH7vFP8W7ZL5y",
  "key15": "24skTBuekFx2XQRDaSnZoL5Q6Q47DP2UuuDqTAkDTRvFptjQDXxs1nNMtWaa1pouoqSZLU8jBrjRawFkhJT9mqcZ",
  "key16": "5Xa75yCUDABavcBHp3xcZceBLE9oQ8ruvEyC35dfyc4vA9RkeEYqDgtyL6RhYuUe2UatcaD4zQqCS7R7xtUNS3oV",
  "key17": "5PD829Y54gvB8ywh26nawBVoAGBEyQEf59AWgG45YGFhD2XbCMK2auukvuh33xu6BUh7M8F5wnumrg1uR5xbk3Vu",
  "key18": "6589yzZRRXWrCyfSJbiig15W7iM5tLC4c8SKuv1seTDVe7HUMRueo8FsYF2b6NafNY3WvKacTyLJCYgzfAA8LedX",
  "key19": "5VmLnmxAg4PwjVsDv4T8pq6ARBtGzXTtPJwj2LtxJp2YpyCviugwcEdjsTn5xJQqjNfuWy2HQPwmNm3uHudJYkYC",
  "key20": "324y1hgLdH8hfkZYka8CZnTSyNRhTbNJmdDGRkHcihE7nhCcvretWZ244d3mFkPJLy9gMQs1JG7TL9cJfwmA6zZW",
  "key21": "avtT5rxX7Qr9uxriGmGAu5VLNgRYDv8UMNaLoSkQZpPKRuRU6EKXrhuipgsYcjbuYrcDifctd7SvAArFX3L7qdM",
  "key22": "3hyh2iuX164eaAzeTE59JT1SbJ9pxW3pmc6D8UZXGpftC4tuTxUs8rtXjUMmfDWm9U1CRG4Mjf4ADnNUZ81WcQ25",
  "key23": "HpEhdGB9QxN4Kmxq84t8N4obMg6QKPXyu1szChn2W7E4EgoWE8PkB2gw921cymCZbyrFTw2zxmKPwGRa9uHespZ",
  "key24": "52bvuVcDtDhRwgaHzjk7CaMX2hWeTBDnUfvrbUyeUT54v2aTUDZxP84Fb716x6NNHJenf6zxJGqg3Zr4pvVttGcw",
  "key25": "33iYdH4WPDV3wvGB4G9ZtUDcJwdWadT5Dx6NQ7StCtwaH3NfDkdjLRhvQE2c3d4Jp1BXMynYEGmquCDMM2AkV33z",
  "key26": "xESkuNhtFduWmp2pSuGHWcYSqifciemz8v33Pus9UVj17WtcjSTWk2UVZbkhAoYTZZjk4wvMFooLTmCrgqKVBwU",
  "key27": "4wz8A84sLJhWYdFfmFUnpjBTaK63wPa3FRdwzX6Ujh8qz97NvMMjtX54yRU3tDKmq4tBb43WRa2z5Z5R3rsPEUAA",
  "key28": "62RMt3KZuEaDNSuKAdrmKA2ifZqw9SbunhhQh55XPvELuAjL6dyukUDJZYhRD3Kr2s79mHMR6xgVkMNqktZ4tCKz",
  "key29": "57MXYyRD1AdjE94FKoRyu3XNkCWndrgVpoob6f2KZyUtpJMmfxSGctVP5UfycoNe1Hcnc1k5gefRoG2b9Zv2FmxD",
  "key30": "4c1FR3qkMyjqR4Hsz22JutG2MRvuRcDTNQUkoewCVs2J2LZvCWNdrwYbdH8TwGad8Jb1NFN5o3aQLyUdgXPD9FAu",
  "key31": "3fDkqTWQ7nZsmQh8x2dtvsRiV78VAjNwupXkiKNrK6SHMXmYccd3pX45G1dkYoYqFKHdfS2ccMvHRCZBEHZYREz6",
  "key32": "31gVE76s2oF5t3m8dU8AjhCnrHStENbnAoZYYcdU8RJ8oQKCctYTvYarjcEgc62ALVyCWx2zwu4V5C3RjwrkVX6V",
  "key33": "4WXRU56oXkhyrdpMAxn858DMNxHLpH4gRb6cwRoZm99QMSsWfjHzv5guKumV9vAmtwXXg6FswwQmN2aLjS8T8uSp",
  "key34": "41Q5XbWeGEEBFJ3bgbmXmgrTFxZF2J3RRnvMUodq5vQmCQGvAMV77SdUaFj1VDXfa2eYk4FzfQ5naqzuFK22jmUy",
  "key35": "3yKhv92u5PDTDa1tPahT9xnLqUavi5q9fVVqQxF949tXFEd1RJnZnDGbUGqLzwxB8tvGAyxtmNVrjuseH5Vxg2yz",
  "key36": "2B232K8jBBuPQ6dUNfmTvnWUj6wUetNQh5b4tRnjVHC3MncS4R3JXLvgTnQQnMNXX6ctn4FaemfmmSV9mJavsgMX",
  "key37": "5zQkDrAy2P8og8JW26kDfgpfRMNP1eGwc8ZnJdAJZ8GKn2Ke2bxLYVrx3WAB8E362HuhfNq1g8XmQCmFV2TGs38Y",
  "key38": "37pRr4EMvYLDyAwx62VRkSUJcjPhnaVQMDe8fzmjwMDruYoZWbZDiEPUxDfVDxJdvtFh2SqGJZXB9UzrRwfUniD8",
  "key39": "njRyFEKcmQKxhNZsgsDp1aJAe3YbGrU7F1zbtruUYvamob9Sssw2fNQgNwM6ecBPTLTQiFP2g5MzjTD4K67mco1",
  "key40": "34TbVqQeXe6ygYrBxQGUFws9bSKzraGo1TTnNAmq2y5qxmw68iwNeYWG5DBaXk2179uu8e2ngf9VWWPUHiE86mCB",
  "key41": "3fZtNBjiyUviACYSTBpxio7BA2awrjXYUn6aW1o9h9QjkNV7h4atqNFVXbCYddkUiXPJCAMwxWxwNP6wyP5mukE6",
  "key42": "5in4by76h8WfHPBSPE6MVeiTTtZnoj8osPDK5L9XrjHY1sVmisZzHdPJqNg9NFJKpZjV17Rz8iVphdYxxgFrvv2d",
  "key43": "4Sza6pM1uJgKbj2cYYKmcGjdavdsRQg6UwRQspNrj3zBQgLfA2fD8NX8mLvm3gvuewKXZrjn9kN3ftn1EWbAvqsn"
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
