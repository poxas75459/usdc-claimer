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
    "2CVu56FBG4JQPwTV5nXBeD1HtzwLgFTD972sfMDs3QJZTWNQDxXkctfzKF9QWsngs43NPJW5Z2ueZgdc9MoGXgXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHX6GwMpYbx4YSwPMVptnY4qmJ8SnXdE9pEduGpBWumko9UzwERZV8jT7kd1QcDMKE7UwVHDBEKbme1Dw3Qakd8",
  "key1": "2zLZCPCCtvmxgQZsrECoKsysYrvabL54noy92ZxARXJvasUmgx6N6cUyb2BCzBpUJZFqoSo34MuSg95frpDkK2fr",
  "key2": "A8AV9bKd621mDi9s4uqnUSpKUzBuPz9Aa3dj284QAUtaFAYMwtE1pjXBheW4LzrrPjThzMXTvxkNL8en4Q2dAER",
  "key3": "4mMS67yzBbKSYDEmdNKzfzTZvz6LSzEP2wXBpbdEhwWs3AMbknBAUiVrwyxRWaME3EfAv47HF56h2rBB6PduaAmB",
  "key4": "56cnQJatFuZ6165BRPeqtBgHBQgBrx3j32XA4zQvqCnG3u532wgrmnCoiN3ZLVTNiXxjgEe3T2z42VfqNLribPdB",
  "key5": "4s9g5DUE5emXJJtLkwBrmfweEfGjNsbJztGaBGtR1V2LjNYdUQTLgAfoDW2DuHYbopbwYici5kSVE51r7bEdPB4f",
  "key6": "4FCbpWVNgFhCDmGvmiMMR3G5L5PvRqqPbq17Gr6SGoSoJ8VEoDeBXCDZA71Bx2R2qfSYXXrBMxa7Kxs2NhGfgABC",
  "key7": "3wmV6WTuhYaEwkqb9n38c9TMQqPvUNWkCgkYssMpNoTy9r3bG7FT7ytM1JDrg6LaoC8RLmXStTGnYGi3DuFimoom",
  "key8": "X1Wnni4vGRTULCicz1Ytn42siLw46sCRQaVjD9ZwYUmjVbPBiZwxBNfAbAqS279jQ5re2FD9jBcudYXuMft5Hdm",
  "key9": "5DbsxemFRAMY6jUxEFqps9ejVd3VPWYUnadbuM379R5YsxchK3uttrs8oQvwNBTFfcbA2HdAGbQU8PAwrfi3WqGQ",
  "key10": "3b3G2pVCZk9yAzFQRR3Fo7q7DTmpFfTZ2wL86cwski9G3cihdXRV17AoDGfrAnL8iodLayuncJZsP9RS7sh4GXdA",
  "key11": "5XkztCMZh5EgJiUtdCKCdtHJiMpBeg7jGjuC1S6DkbnN2zQiRU17edf6FbGig1W8eErP8RvyKr2JSkAvt8t4CZjj",
  "key12": "5QJ1HX4VNnmquZ3kkHe6Ziv1dRc3FnBnTYFU2pWfanJBLNqE8sKuqqDynwGd2PX2RppbGiCV1X5cNQMFmMmYyD74",
  "key13": "UAM7ui8SAXjFv7TwKSKqhQZ58SxoS6xxqMhWqi2EYq9wz6Qodvc62u9ANNz6MHdTLq49WT4SEe8jRkB6Wo5HxWc",
  "key14": "2U64Kei5kG6MfjLRiUnFCmCQ94mH4HUQnJT6HGeMDBj5YGincyZKFvGSL7dwuroe2Z6nDasjiPCpZ87uPpw7gXxZ",
  "key15": "3Do8zEkcRXaxk78WAh1N4k2Jt8SL8XwVUzhjMHrZjNT5pU4uRj82ds4HW4m2gnDVkFgv9LiC2AL2x9464sveVZak",
  "key16": "HBfXXWxWx4i4yv1LUFqNgGTG5haVtBzPwwSsiEiCbmCqrHY6B8u26LBhtLhx237jBasL8ebCzxGFhMyCnHM2gwz",
  "key17": "45BueGXHJAvuFwc9yjW2qTw2sBtRDSdRa65W2RfhJHtE6A873YHX1n2ZNYrgUcnYo5N4QshRDtM5JEB58aroqCqz",
  "key18": "4DjFejAHP3CkJH3RpADuEU2Gzja2LfFLyQCGmZV6zRWvop6xg1UaJqkbSLZqGifDNy99tKTvTDyzkv6HX24UXX8T",
  "key19": "2a932P4iXZEDECVtamvS9i58wpwcVW9gA6KyvNwUYTucA1BpbH9kMEE58TCNtwUaZkATn9fhhXVqkPBiDTm5rMNd",
  "key20": "2hJ9ZeEhw6m67pxYF6kzkUNkonpVCVR8AqRFHXCLQGrbbvj3uquHNs7YRhzEHvPmizRy89MJ94YUKCj8cHfWraVQ",
  "key21": "242PLiYsagS4K9ZJTACAUub1mz4p2tAf7d2eVw8vPgzibck5ryR7Fpwcw5iGTR4dBiN1jv2LXjWaVoX9v2VbyyaB",
  "key22": "2QWP5twwA7pxxhe45ZfTqXbhcV8i3D4UaVkLACxPtqtUrFUezD2JNyoabEVHzDx3zign8Y6tLCrGugjA85nobboG",
  "key23": "3Q6Z6vkkmtW97vuneucFfP6PoamKK85sPh9QW51NNs62YwSTiZ8919Y8TRYkWn2pLcv71o84ouRMZKdKjxozc6P3",
  "key24": "5a9ZX6rVBNtBGY5voXda229twqTAMuYa3vDqTtCcaRSEjPU7eHFYUYZs7uM82dNhW5MVKhLyDJj32nMcEa3MUs2",
  "key25": "2D1bkPVGX2wjqQf5pSH383hjzdby4qKC55oua5XoeRjuH776ABkgNWfeMqJXrnD56QpH4sCjUemM3GuLYx6A7qKV",
  "key26": "7bB9mCjisKvQeySVrkDQSu9w9vLAXVn51V6MFkjZUGXHqXSQruFeK5gvCn7RfbbDKY8VWpXM2iuMjDeTSag1RAo",
  "key27": "2QHYD7iS9j8zyJT3TN6DAPoS9mhsC1teESNYhRs8bSdYNyewe6M6RkG6FnWdpa1jhNJDSnJxYXVwovRUA8Af6xbe",
  "key28": "3bwP1nPSHgHmRdMghAfuR92ud8zUMY1R4vE8ifXD9kewghc8cAtHKTb2CiPAaLQxjaUVptWFQpNEyPC5EUst2w4x",
  "key29": "5oqsJHFut21SAw9L24KhSizUZK2B5YAwgb4rf1ihGJZxyZ7vnrfMqph58ETQj1AtidYUXp8S8XBJTdEehaDCjgqB",
  "key30": "5HQ1FhiornBPvBoJHaq5K9W1Q4gYfQtzNNHoKb9roWwxQW6ngiMKExXMHHohgPBUjon3swiB66c5XnHg5ydtGUo9",
  "key31": "59dPLTcvRMBkhgnCcRFYv8HyjPtB6noxSBepXJeFTd2y8yFhgJ8eNtd9gZBgtXgueZYtkvPC8FW9vVxpN76t4imK",
  "key32": "2tEzu24MCuox3SxvWuDPmn7zMzAVuWp1rqQv8bRkWYyXuu3ahicJhsBcTGia9KXgQ2sdB9xbdeYkoxgNjgdgzXYQ",
  "key33": "26LchErqyHN8EEJL7FSHdBpDNxzY5Dd6rR4mpX4pAvKxa3YfpFCbLEE2x6MdS6PsXK1DvrYC8DJpc8dJjD6f3B2J",
  "key34": "61Qk3K1TD2UAK9FrGw4hzZq1JYt7icVLzMJar6rGkidRH9NGjFUzHP7xg6Q1ddXaMCgrVFiBCE7oaHQysvtFy6Eg",
  "key35": "5NwTJbUGZNuZLyu2wmheDqQQiRUGyisv7BLLgKH55gKyx4FZB9STcfjUXF7a7q86j8FiBF19Kv69LiDCawfuPwoC",
  "key36": "bpn4ENtHGMQpPiJ5cKcALe9gRR5KFu2Mraf9fvxtxgoTfrJBghFP2ef9WM9tqmAjgrS3zdGyETA78sgVkBnBc2u",
  "key37": "xj5V8ThV6vjUiYWhs3r8unsUE1HWrB39emFa8GeRXVLXZJMxWWs3DrBRrE9wxfjQaiEwH16moTyHUccxNLrt2q2",
  "key38": "oNWWcWk6zMZxCVXzq4ujXjMhfZ1d1MyA1Wss4jHdzMejFAkGH68Xav2fHEvk4Mp5VuF6pphf9HJ9kYUkAhdAfRs",
  "key39": "5D2jQ1LnX3qenkj1NDM4HBvcGcbGbtShPeUmxiVTL9nz1PbozxaEHFoD3E6g8SrdH1KdSSt5i4CGt2n1CdZmTzrY",
  "key40": "Qcg4eDnKJHwcDbgMJzQQf4Cfs1bS5cXNUv1YfuYvYxpukpRqgb67CjAE9Hd2LT422xFCQrPM8v5TWzoYrChsQQe",
  "key41": "62v5t8d13jGDQnewbGwzRBJqXpLt3y71jE566WjuRjpAkJ4fdqsFxQe7F6pp6GZu2yCGotvKjd3M4n8QD2tvqniy",
  "key42": "489RqSt6n1aFQkGrFDTRBbq8BpmNBA7QZnMh1QQmFZ1eqGPyPKfV6y2PHVXdt4nsnc3yB9LRnsEj4HombetJNquK",
  "key43": "5bZewT4HVwho6UBwA9TxhoU6BCVai3JQX1rP3RHTL39cjxtkavy2DcbPHVRwGadnPopeY6WTyxQZ6iK4wW15cgGW",
  "key44": "3x2dnb1wrNjWqNDMUFxRKXm3Zj33g2c6mFb74u6zyP8hBdfVeEw6Wnw93xZZfvTdEPkjcAWAFLsfy8ZPbp9sgoZd",
  "key45": "3JsBZpzVtiqqgGcPR8UkjEH24EfvSGnYedVAg7uFxuWJZN2S11U3fC91SmAvQNRopqJwisiPEX3qVfYtkdWwhaCH"
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
