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
    "5YpDMuqQQWMiDdZVXfUDqDfxRBRDNeHbXe48zenJsXDt41EWFUZbqr5r7TrsDYUuyrxvNhgQS3nTGWS6GsV3Xq97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9xFJp6BYC7Ca7aqPKARs987X1SJDqeN1fnEp3yqV6wy6EGf426rYNEmgLsoCT8NVKMJQPfbo2Q4UZQJgCnQqmB",
  "key1": "3HwMTNosKEKEWyk48MLm2HqJn5XtfZo6Hp83anJFukWjHuRVAZXcm31K7PUdqVYT2HwrkTfxTjk9vxd5q9mZfJSh",
  "key2": "4UYTgSNq63dbZx4TkUS5QbnemYd2TFGtUehxuyzvvHfeoHuZq5J5FaLKDjbn7Yu3i4XZvwSwLZjveZB3hUoVhqkR",
  "key3": "2g7YLR2eKtPFxk8VYqcoAPF6LqX2Bh2dnsXooGqGxYstiogYYLfCEF4cFtoGbghw4uKYzvPmYSAj3RRG5ifrHrAp",
  "key4": "2pBAvCisSa1iFdyW4LZhWaQuLHV6XkhHsonnkFx2cVgSHutUZim872wa5stiCXFquyC65DgJugT6DYCmsy3h91qz",
  "key5": "3jH7YsifbRtm2UpmBMLD97fg42gn9e8iBabGTM4FqvhFLkxZ96PPtDZn8qfpmSqxvdPPu5P2uf2KyjJVttYuYyS4",
  "key6": "42czjcEct1L7pwxgKBGaK38eC9WTZDewxJpMiwvDY9qTV6HdHhVeZWnQe4nsutqbZsp17kqRZec4jEHDpWYRVXfU",
  "key7": "5iUeC9vwEDqbdqEUYrYAhjXbH3L8PTEW6sVwHn6SntqE8eNZ6pkxHAmXR5fiLmcDuRp1ViNyEaztgB1RMBbzY2Bf",
  "key8": "2DxnrucZThnpoGvvbUULRfmdSmixVNQcmYgNSbCUN3p2vpmhvRqnvYVQ9TB8e7qfnFLBs33y1uMqTEr3oXuGQexk",
  "key9": "5yMwiM9BJpks1RTjw9AWH3j9RNiU6GcGMcpYbaiFbWGMQRrysgbXDx2rF6h1gFitnh9unPN2qjqgu3QY4GhVfst2",
  "key10": "5iJ2ZvsthbAtruc5ZXF5NfukErmCH6JkQk4YR86jHaiFkEbBW1cA3ackPYz728MGXnJHHgDapSWqHAd3DtHdL2oU",
  "key11": "2GfWnK68oG1eKxuro14T5pY1pWB3kVSq73MTMJK6A8ZTLaUQNtvgi57wT5xn8UvENpWGZuGJbEi1RPYiEJ8ECWFX",
  "key12": "2ukCnt4H9ejSiVveMtmwuu5LMGHoHpMSG9sn8fiDgrzo7ZsQaFJYfwb5V5Zwf7xxtvZxJjikJcNqCEJQPo3H8J2b",
  "key13": "4eB3pgi2P26ac1riwo6AiwQBFHsoseEZDxENFBPs1VQdrsuQryASp7e9iYDwxhQ9nPFh1ZnfW6S8SHNF119aTrH6",
  "key14": "2x38piZFufZFT84EqKdmrSChoJcuRGX4rg1K9Vp8PLvF6fsjyRwdKFYkucXLAejhkrszRWnQDvnhq2YtzTnGhH5v",
  "key15": "63xun9JSWXySAFvwBAVpqa46CzKBftEt9SfP9hDEYuuQ4Dow331khVBXkL9vUAagcVEpoJEq6CA12Nn3KAt82oLH",
  "key16": "2Y7u5HwgaZ2EpLAoCFdkboVjD733VwGw5ifH5RT3XXkBd8qQNav28apFmfmCrwkCtHSjJnQaUA3psQyqN2vYmr89",
  "key17": "4sdy1fBHgx8fuYLhXw6MWTRe83PN1ZrnVQUMkTgFNpKsAgWn1RLVML2oAfFkimw6wm9gicqFRM8PsFuLQvWQrjCc",
  "key18": "2VR4QNcjYhcQ5n5wg2DTv2Y9KFpnctFnSzTEbsmDMo5amNP2amaHcBPZEm8Ud5pCaqZ4yzjsoJDkrsigDB2HyWhS",
  "key19": "PjV4u5eGP6dvxLSpyxXhKyfYF4wGVFB2HCdnhVF5GntQ7qiexMbd1acoov6HR1P7W4UYfTgSMFKaeUTgtqGkpUs",
  "key20": "5yiKu6mEEnq274XZrAqgC5VcyXYvwVwKSiBE7QZt95YgsCLXJ8qX7PxSLWzw9AP4KAJqcSkwywQfsUfvrqKbCSPe",
  "key21": "3SiDnGtCgBEHJrKcq3C3XUCh9kkLoqePkj6zCTKmS6CvexgvPcspQ4uPb5MVn5QF2dvsVYMsQN6iKa63KtVgJLZY",
  "key22": "2Aw1WqvXxHvQswVPQuRNWGdkGsBrfMmcTqoBcmLP37me4NG45xgYceJJkYC2KnR2o9RUC3f4DsQyQ9BjUaKXvNtE",
  "key23": "4UHbQsUqTbEj4LKPQ2xrt3EMbfyfJdrdLgtiqL94B8wyHy7MRNLKctuvCVYzoc9xQYijzp7YDgY5jRCL6W31TrUY",
  "key24": "3kPFixYtQA89ttFtdrdXf8HHmSAHynZCTWVpTyHzWqDdGwHhffLZZVuE1zeQirKb37WmYebMfE7CXFYDueWfUXyw",
  "key25": "64gsKnfQy9uiexrr6WyJKvK29H6H8md8B6bECF4QCNbHTaPvAhHuaob9uF5DULDCRhtHCZvNT6kATkUAGrZZZY6o",
  "key26": "4H8XXPbqmgqkB1zwJhNsT24GGdYNKc789fvpAL6kWMabWGbogrF2Byh7h26mqEUyuLsPZVvEo7fuMBmKYSR1gfW6",
  "key27": "4qBRnUox16RbHvmB6WPLMMagCazCbC9HmxrqpTBC9iRNUmJy7S4a5wdLExv8cMSiJ8VVZQH1C6eak2gHZWLRoEgu",
  "key28": "e7dufXNsGPDZSGiYxENKwqvDZaRCoJvsEjPAgdnF9SgYX2B5Wga5LRgM2owA218ss7b9X66WzXYuDb1aP5DgSCE",
  "key29": "4Ki8kGkR9ADWzrvNqsfnUBMVKuaLT2JuiY4viaBCxJnnViQWs9jSYtaQtDvAJbXGtqU7LvD7jFstpXmtTxMbfY1a",
  "key30": "5Q3zgd9Y1MU7CAQ5g49YHFfCYdgvXH6WsbgYdaUDeM2MsVsaUWESTbXu2iX6jyq8V8b1nMtGA5KncwWbRvQqgUuG",
  "key31": "4h4SPtWYy7PrCWbgvfLSfRtjpFv9W9dQMM3EYZ1gssYJuvpWWVpBeXPvY5Po6CZPRnQ2Zs6Ck3e9hhNbm2nyGsRu",
  "key32": "5KLEQge2QD1QCvBLSnCkN4XtHzmtGBanxQAFUqya4Wp16rpNTRb5FGqwYKSoQZxFNPgRidFdRh1ovB1bhmQ6NcL8",
  "key33": "3BsWP79tEkqvfEvZKQRDmARWyDSPwgdTnKVkPFdN1JysZ94yKoAoThwZQKV1huGx8wd7k8BYnpN5iVXXawSN3fNa",
  "key34": "3WQBuXdapaQpKGLAhmoXBs1tCLwHrA5WxzB5A1P2MBuapr9hyCsomNFND5yVzfYvSCbHYiXjp2iju3yaVfWWS3Kd",
  "key35": "3KNJ7Bzjs9x4jTSSXakiyWapzSqwarGX8xpwtxeJCwhGEdEP5Bu28FbYkuDzNaozMFdzWhpSx5EttxVRpAGzDiAT",
  "key36": "4pp8bxwsptHqFkfokM8j3zQwQsHJGt8iCCScEdF681fvTqNrCV77AhPddQNJjfnexBsj8GgGEYmd4tTBsrW5Rq6x",
  "key37": "5eyAXD7itGdZwHmHeosBoAdtpXog1peWgZRNyF2NuU73xpMXT48uExpd6ZLiTuYpgybnWjPCFychsMeSY8AFvnUL",
  "key38": "4uH5nCn5W4AKbneScYZ3w42sHaqvUPWHkotmBbT1VjExAqUtMYVhvrJAem8PgWLw1HjPtR6FekSR1zP59guR8XC5",
  "key39": "AupcqSQm5WbauKFpaE1vbejN3g5CWN9s48W67pLv3Pi3pKAaRXUXr2CdexoQzuHNXHMr3f6P7F6mCvZCBNnfiX5",
  "key40": "2nFTBLxhwBupnv9sCXLbYYCePmUntvtEkCpop9meAPoKxbtYXdQ2o8GHn6hiycb2SB6X1ybq8q9ruttXuc8XzTvQ",
  "key41": "28M4Vz2Td3HAqwhuvajmbVYj1TFZdWM8wdKsBPe3GH9D4EGqSeQok8YnV4JdbMUA4ks642mDr9QgrvQMPRBhxLFH",
  "key42": "4vNgYvxaUXE82HygdYBhyaLZJbhvAtmcV231y9G8CmcmNZWX4fJjmF34bQK8XzsahF4BSZPQs5pvLkksdyEt4jmt",
  "key43": "5taURQLG649yxyYVJ4ySLUEoiqRc7yZFam8JLXa3nmuE3Fhm3Y1eH77J2WA7GDt4TRWX3f5sEoWN2US8uujWwfBY",
  "key44": "4rMaRorLTc9z3kVeuJAgxF263QAW1o4Mxm7na5tcDXPHoDcbqVoHpzE7HfcXZbLfiWxQbbFw77pynajCcUqLAeAk",
  "key45": "3o9yjs3jdjHAMQejy5SXvXkLf2m7KFuerqpH6d4655VvECjrWZ3JbzAcED8GjYdKvZteug5rwffcqXPLVD6En31F",
  "key46": "ZNPnDkayCUZGAjaTk2knTteUETvu8xiT4pbJpwiLrWgx6e3DfFj519MwUWVw2Aik2eyKgK4o7X62iKLfFMCnaHw",
  "key47": "bM3RYz6Rtnn657RrYG8dGYQhbAQ1aiVmRe1C4t2HS4bAsBqQAjV1y8i6UQD418qkyc2GYtWpSjYWeaYRwbSH9WU"
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
