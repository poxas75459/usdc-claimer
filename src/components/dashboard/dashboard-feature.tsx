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
    "cw8AKQZHyHsnUwe2HdcnjscFxfub7avYbGUJdJqPyDCexscqx2WErZVg8BBrDAViYqfdFSJ64ashAKtPKLvqyG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHiA4zYF3wojE9KF4jtqAGS2NMyGXhetcpZ7qmpo8XQo4uYUrNHWRMXpNFnyL7L42sc9iNYhUhCTYtrhpprCG53",
  "key1": "2WvUARgyzX2y6ALZTTwHgH6W7ixGBYsPr5xyaNpPtGWSexMnZG9TMS5J1gn8S5bufNTqr5ptipLdBYGBcFhkzBYb",
  "key2": "gXjtg8oVEtVbdhGueiYMV2srQSXySydNbPwDdjRHMquNd3n9Jevngmh1phqgA1v1JuSheenwJhkaSTcdqgJ8GKP",
  "key3": "AWLzRanoQZZMnUNoYGcASD6HEn7f9Lpad55P4i3uvLxQdfo5WxwsAJXQRhyr5fcNuRGe8d7sauEfTaYFJqsAHag",
  "key4": "4UHyckR81riqGX5yY1QC6VChFM2B8ESyV4CHR2Xzkkxeo3RP2QonUyBogyRUphtMXwREwEDXQV3y4rYAWyU4dEoE",
  "key5": "4XPh7hn3pxyoRj9tUv94xBUpM6appLHjnNJ2UiRBYogXFZCeG1Li1gvXZ6H3de7ec8LQg4gqud3moyqQZg8a5Men",
  "key6": "4hRXrFdsh2iNJBW1aCkdisQVDLH5PMK7iPSJKSfAiGp5pMkTnEjVVszavSoTZd6GfbY6b9PffzqY4aU3gzibu87G",
  "key7": "r5TnsdZdk2sEQycizhLc8J4v27yj4qvbE7JDcJxHo4tnpt1AcHetaCfWuno33iPfjwX6AeR9Y2FvxfRWbPmViro",
  "key8": "3rLNzWZGYCon1LdizYiFCoYwjf7pAgQ8jc22h5n2GwpMNwFjimpvvrCTRzLHdV7VREARvkKcMx9qCA6wESXFELUT",
  "key9": "3xDHQjiq1z3AWM5dJWovtLknJnwBRVUaDwwJtXU6QB3KZGYZuWJTLgodEWKFTJ9ALZSHLmsttaMn2LEmVigq5uaq",
  "key10": "2Z8g3N61bc8RTdGDRp6KaVPEeG8o8uJZb4adDoTmNbs5ftcib13DCesRse8rKxseKqufAFZd1hQaT6EKZKtBMjXo",
  "key11": "5Akv8xWe9WuD9NiJ7sk23NUwijiqGJYf34j8tUfvbPoBDRR6BZHYusFxaHRptGtfzmRArziGRymQeuCQiieYkWDx",
  "key12": "3V8DYgRNNt8dP6CHN8X2pwR1rWQmaWaRWC6zkv6iMW6PKMfVGbQ3njNEC6J79GkmGVca6XzwPr89yZc1i7A9gRBm",
  "key13": "5f6XxVNWj7UpmNxDW4tbgvM4hKvDiTd1yfzdRAx81DR3BGuZbuUbWDTguNQuw5jA6TAMrLuTuk8rH2aiKdKsNjnb",
  "key14": "4ahU7uvTBK3pyZ5aByFy7G118cB35BetZrkCYHTPjCp1QF8UScodzmCiBukaeJfxBA2g1wvHCP2QhZ8DE3dWqfPA",
  "key15": "2KrbTtFXJhg7rfrMkT9gxAyDvRwfF1eUP45w68ocakiWunB7SndBGQbxk3vTUypZ1QG5we9TdYVKhGGFF9UdiJL9",
  "key16": "t1exv1eCbFpz9pGjHv8N5friES2wf8KVPdzr25gX5ieLSmdRiPzRfHT4RnWhpsuqxfdmbcChS7M37hFcs31ekJh",
  "key17": "2qHr1TcnmH8eL5eJoJcMbw8s3T51xWtGT9mX8sbSkdVu6DkdCX5FPBZd6hHXiQC2D3kr4MeQKEVf4vL5m5XnjuP7",
  "key18": "Kbp5zWTWWCCR5YNpUuH2Mk54UWkJc29tq76A513zwSHF1vy8QsTLieQhYBFkyYuBBzUeW2knp3Em1wqhPa7iMqR",
  "key19": "2vH7FPnzQoSThR4SqXFQcpcttuJWy4o93LTtgqJg7cANp4h9ST8ptimvA8bCDWQffoxU76LaLyEpxkKMCeGCk5Y6",
  "key20": "66yR1P6QjfTvtYwU799TbDBsLqo5znW1cz53xSRxym5AFQLFTAk8tCxX6mcaTqw7BbSHuKFVWL2XySTEHhM7LfE7",
  "key21": "XfSnbThcEpPZX1ZW6PUD6omu3o4e7hDpCZcsJqZ11kDoZSbgB6ekriiigwGMDCqg49erLXb5XDWEA229nuLPSVa",
  "key22": "bbPBQHLioNJ6nkRDdQrt18ACHFu49EGt5ZBNF6v4HMRibmwwnHZDQTfsyUMuS1ZvJwgnWVnLdyarczwfVJaypVg",
  "key23": "5dpg3LJtqcdCvZjHR9apFouwyfC7MR5RB3n9AX8KZipBJ2skrXws5ysP93zLyTe7Rk9jy2NAyM8stnt8Q1PpPSS4",
  "key24": "2ZrcP5dtDep35WHTvK4zWJ1X7iKa29UPs1R2Xp2feZCfe6s7QukNqhALdM9AM2Fia6xzw8wbYgwBky6kjafQcfur",
  "key25": "58e7g8smkXtRSPNja5uhovq1QGDskmXUvdsTy361FAohH7W9XUK7uc1UTZZBwwEsiEzQ4rt3ExBMsQLxqTmVsKFU",
  "key26": "5PYvs9tnEfcG6dVas5Y9FSPNAEpQJ7eAVvKnrBymBZwC4n4VADSv6CvCNgm2pGu4rVU1mts7YWPkAq8ue4WBCREY",
  "key27": "3jXvM4ig5KMuVH5AkMfNgDZewfF2rvQqzxZ6aHM59ZMNpQ7DFzLHBYTWjSGvfqMiyqQbGfqCbaVQSBuGP8tUyMEA",
  "key28": "3jPF9Db1VRyACTzdaBWRmUg2g1FfLhk9SvU6JZQ3ZQ65iqgn3ean4cjNEifwcHAz1nN2tB51AUXXbuH5uCPvQw9k",
  "key29": "5QUV9JZeRs5wjdfTpx9Riuoi12FgC9TwcvsbJobqRsSj7vV4GhgpUfEtUhDGN3KrTfKRLDXM8ZxpqogaBASqqzQE",
  "key30": "mxyawdDvfbNk1DAAeMQHT3prpg3c7LD8EDrENJcJjJpZPavaPiG6jt8Tj9u5Qbugb5UyPTtXXD6ug1e3zh9Xkvw",
  "key31": "2cGDbpiFqegSDJrYikt7cftPfW5k4uhS56etux7hqBpTNh1vAgXycczD7sE38T4oqMt77MJAuWsx4Nek5661FYXm",
  "key32": "5XE2VLsFKyTVSxrNLJdUiDJkjXF5DT3YWPhai1uS142Z523a3RTMMySsBKDAmEYjtRoAH75DxexjrvTSfSzSKtoX",
  "key33": "8poAUFTv74cjJQYhLjcpHC6A5afs1qjaPaZpgztL63qFKo748h3z1at3WPkDVF6q1UMdddNDe7yqDcLE1vWEw2e",
  "key34": "2w5jtM7y1JgphA7BpEWSiuepmPszAvbBLwWrQQz2KrYMpwyTpsfa8kr2CCJCjp4ySWY1pvLTsrSpugPbZtAw8nXA",
  "key35": "2FA3hEEz29C6m2SgRC7vh7A7Kt5HpF81ok8brpu3YquHyV3ALMwT588PgfK57vJBVVRQnL7TbzLUJ24gJ3g4wGgu",
  "key36": "5unTv15hi9ek7TdpytNndNex617G5o9YytNcuLfqYT941vCWjCyATyXbS8XcEHhNajVDXLTw3r4Bji9UDduMk7K6",
  "key37": "41jeXpR2mdo9RfqvXZ8EUUQQTX6LXzP5zDQbv9fhiBumKcRKFZrwrVgtRcKJF3wegBai45BAHmPdioQCGyA1aLnr",
  "key38": "3D8mNQCU7rk1MbVpu8sboMSNuQ83UVCNmJSHi2CnPWgavGTTBGskysfzkBDztgm26ueGkpWZppHGfwYeC5bsx5MN",
  "key39": "3CEc5wYDLMvN5QsVE8TC47FLPMfNwZcFyKK7e3dTCsVJT1YfaqVjgmq3iWu5CEaHcdzY7xuqzpW5ek6UXKPRX6VW",
  "key40": "2mFap6qXbpPADUPmicy4vx6XdbU6Dx2KM9WYdUi5mtsX3ZemHN4fm2ELXsBr4jXbFj9ahDBAj3MaY5ELfsxUgLRH",
  "key41": "3pKPPdjaRPtKYAM2Wg4hMzqxT7wYojdLuuW4Qq3bfsPkaEMKoyZNC7KdaRc6EfJxuDTop6pFYxJ7kiyGgC9CKWTs",
  "key42": "3VFBe2S2JombRbPkJvQJzJvKJDSdyiSVHNvCD177nPk4e9b6NSPxV1TQAvpvpCoJs3Rm25mecumA5nG8ep6Hgvxe",
  "key43": "KppT79TTMCPqpox6CV8ctNHYV7AMGkz2jESQ7r7b4HW2HeA4JXVE9kG7gSs7b8B1Hu7TTgpkNosyKXPGfgYKULu",
  "key44": "ian88dGs9LhGFqbsoimWz28f94TW9j7kFYSxvWSnYm5kZRWgbLpptfthjTQtREiGZnJ64D5ArrcHqHtJdY4AN5V",
  "key45": "4M3yAmYA5nD8Fi5mtXpqAmxMJz8b6CMvoBqzbZ8FG325odeJb7jPCm9HbTfu2X3T9UXPHCE1S1j7iNNS2bDtJ9uV",
  "key46": "3fnDxDwGNAbRfztig7BrJnRT9Quij1htk7HBXAd5frxXrvSz8pCTyUcFAZ1tGQjSCEnbutcPiDog8tQt8h9Dsytm",
  "key47": "3noTdvdZ3oizoLHmqf4VSSqRkyuP5BfJSPdzw8P8Tnxr7uXyY2NW9SiqkaJASRGDUY9MjTnUXLuGroJ2nJX7gU25",
  "key48": "2XKXUZiaAwfSgiGDEBwgBPnkdtL8RBbSyM6CqKV9erUux2SqTBKzRs5bmU8M1eNSeACU2zyMHnHJPvZDrndnzZek"
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
