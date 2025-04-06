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
    "2Lnoxb9H6c9Qv6d8NMAsRKRHs2YWYNrG8PMxYRaYEudtFjeSjgUFAWHxGEbgQKK1ZKxrRBgF9SqarkpeRFyqnuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5suyKkam7kBLMqUouzzqk5QERdWsp9n8ztJ3ABpueRDAQbM87nrTxSu9879MVEFND8wZ9wAzHLhcjz23v4AHgprJ",
  "key1": "LaRNzLpkVtTS5cswH4jyfKnbBs9RQaeUHS671Rjp6nndvZysReaUGUnpNgE4vJPgxnpZHfcAAhj63tSfWGZutin",
  "key2": "2BhkcBh7eaBBwVMkeJacstJnVaJRt1qeTpvVCQPncxppzNdRdE1iU6vJSqe7bMxSoUSUmcstU4BNXNsxMzWQbuKy",
  "key3": "5Z5yFXro3DhyESkB3T65oyvcdkZYDymV8VdwdhdSaX69i1b1bKEex4BbrQNnVMEav7htEEiHFBrbJY21WQFt5hX1",
  "key4": "23pMf6tEXsJTZMmAj3qi5MsFzHbLojDnBTA1vBJJmWqe3uSKgLib7asDnkVwYT3KEFjCEJPBnRb9QfJ8heXS3SZm",
  "key5": "3kaydjp3iwKHNdVMjV4Yv1MwAPffx57PimVmAk2Bz6QD2qffJRhM3hnVQZNcQTyYdtXdR834uqEf44WLYp7mExYN",
  "key6": "2azEDaQi7WtCSnEg6c6DzbMi9xtGuJKZ8nKE4gkmietjKJAySYVTAHB6VoRTfMiaFVPKZkjsYBFb7YcFFMjNo25V",
  "key7": "2MzCc8mns8xexwhk3KNaYZ5ryTpuNSJH7jGPqN9cdpSTQpy1HuUANQQXrQBFN9DyUKA2gAyF7oCokuP2ZmLgqgPm",
  "key8": "8kNbrKUbFCt9gANM9hfMt9h2fZDAXxVdYmhzSBBzoQd3PmQqbs9ni2JbanJ9fvMngDiDk3Fub6yAg6akioADpkw",
  "key9": "59PFxzH66WcMrrxKqCePgUVfvewzpmEGR23zxHbGRRxbEW3J43JwG8iJGWMJEDihoP94z1RHdabNakxpbYDgNtZr",
  "key10": "229b343UkMExz6LKpP1xEhPAVsRcMgndZGkBGtjJsbhZv93ENgZHSVcc9Hw6kiZWj774GvtczCgDjNdQeh561YU3",
  "key11": "3c9savppsK3QM5aMSRwpXf5RriFfejM5kiEst5d5feda22vD299CSkJGbn296XQyo8wRVPMSyCgNh2gchQgKBtxx",
  "key12": "3DAA6vMdLjpPCN1b3tZPNLLXZvdy4ZEdWH5DS2tPE97bQPVgerbJdC9ysK38H1j5465MfFkEt19h4ezQMNXCPuxZ",
  "key13": "5yymw8fJWimq1fbpqUuNkQ5A9eB5xGTkZAxx4gKLp7xPXPttjT1xFDuxaHWuKENqooeE1ktHvE4vuAeB24Ha8sof",
  "key14": "NL6vUXLLzgtQbPtDZJ3GTy3AXriKecm64c1KkfBoLLb29PEs5Ti5FWGHP7fP1Jn4MHxZYw3kXoSf3FtQth18qV7",
  "key15": "367AcRqTrZe8n2qtLsDFoNg3p63KxirZuj3CDxVncsvuohDYcSw3vxSbKwJ1hRsQB6uSDPPQEoX3965QSrLKCdnG",
  "key16": "spFGeND5swjGDxriCmDhg7WKSsksrTrWWLqX5GefT3xuPshFQejaQczh5xxsTAsEJC94oohcgKosSxWHQTcptoU",
  "key17": "2sgjkgLifDpdosBLsXEZTTYDGKzBuyKMSLP89j1LnPKBNUVoVh2W5xFZQsroAT6w7XgjXy6sJyGPnyKVVTWX3htK",
  "key18": "4fwGTyw3PMW23J2aFbaivJvwVh6KH7rLzWCy4xUfhLgWV4L6oGWauJMw1XUXriJa6FgNYR3nHVPc24kyV3bdVQqp",
  "key19": "xhLWKG7D4Fz72yvRme1V6y1ewoPhcXb3cBHvASXuuoXeZs7C88NbArNG452RmQtSxTzctbjQm1sNavS54pf5geb",
  "key20": "3f3sYhGnxho3RKHaduBATL6VmRotzQDqer36i4N94GNXzZ4VdozuWNsQUKwGtKdRTKDGaACswtSJoQ24hbAueobQ",
  "key21": "2qtD9um2rJsS7Rr1RLHb5AnyhMdXJRVK9y3VtNL7KCnxjb29tQ8hU5Dy8uaQnMCkLbKrvbUCVqPL4Z2C2ZwE17Qr",
  "key22": "2w7FD3sRaS5ZGa8TWYoXUeu1MyKXqw5L5E9Waw1uJJhZuBhaA1LNWr3HQ8vm2nxQ4VbKToFjbTvYHv3duNpQvjXk",
  "key23": "2Qi8F6zeD4uVNe9rJe5KzusALz4opvyEbh5QxB2txce62Efb1dajVjKiGjUWMLRqXs29vsJ3eCDDyw5oGcS5oKxv",
  "key24": "5wSUty2Bx1ABtGgVkhitSJ3UjACD4rxtpbUKPcndEkcvEhHntVgrdZ3s1kjGrwz3xGdeTqD3FWaAL3fWC95QFeXB",
  "key25": "2afMZunrRatyuKkWQHN3CEnoVBsy8AbLxkUzkFcYb26rrhmbzakJXV6WdEPbqjWRo69ytukQ8P4AHSEPTXixomNG",
  "key26": "2aacwif7Td1esty9WZWQzPnqAmuAH5vZRvdhHygofhpe7HzZxCJTu6TTcQJHAm2yUvS82g67drKhP26ucyBHSNKc",
  "key27": "qoz5QzKM6Ty7jjq7h1S3gNwWaN2LCZDC8WiMoAZT1Zqo1y33LYXrNd978DgBkTiVchGmPNJ8USLkBLTNXjRhJs7",
  "key28": "5Ht94pJqemfU6pEeKYN2kRuugpyVZr7zTm1cPNTWH1j99FdhDpuUH8fkLWGQPC6oCdhzCu24cJbwBzRD1tjeUz6y",
  "key29": "4E7ju1TF1EdA8Uttgt8uep6XZLjbENtUeWQKfvzK9WZyTevJQcgj61nvbic3ATafG4V9exuJE3W13KBuJatkv4yY",
  "key30": "4L6k9r8zxUJAjhrvmD4yhsAYejD5ZfYEckGeYm5cwKN1mZKV4sk5bMWd6jMHT8jSTzV2fPr2K65fFJTHmNFCDY3r",
  "key31": "5gDoUV2ZtHAFpv7Jx8WGVfbBPeNwRa3LXYm5X7cRWvnh73x5q4p2EGYcQrPbHAh82YWJLjZTZ95qeuNfXx1YLyq4",
  "key32": "SDtT5gkQLkmqfobo5JcXojanbJ3pN9WXCKocRaYJvL8vZtRu29vn1vP39Dm7nrgGzXnNFC59iBXmYG8sd5M7ojx",
  "key33": "4dMHSXxaMiFvgsMqwjRmU1mUZzFddcNWQTFP3wVi382Z7BmvrXtv7mUhmr8YpuQtjWyz4Er7T8BXF6yXXq32j9fe",
  "key34": "5QxQqJn7Wd6UXjYZ6gsAMVZPi7oiDzCAN64jcxe71RwqBGXfUV6wYSCqvGtqJESyKinectFnCW44pSXqiafyZw8p",
  "key35": "298qtxKnLybUW4YWHoUXhXGm1u1Eet4dbVJfA8HztbNdEkrTLwHBCD3kja7xGkVvDLf5n1JsnfxsVkLm4CsPmhDT",
  "key36": "4v5mha5t4ZRdvvSB3NAVKbm8F9VxsX6hrk3QYSYf2isWKoKF9gvNmQp4xWena9TrWBiEn5JfX1x2LfDzc3YdqnkB",
  "key37": "2L3AUKhaPoKex54iFwviHn97s6bqFRc5j3GJ8YBkDJSEAetjZomWcYJebrgqrrr1hN4YbrQzhiFjELaFDvxJnma5",
  "key38": "48pVLS9JLSAWj6fbF9sAVmNqeZJuKD1eJ2gDWL1fe4sxz5AEVUNNu3uYjUW8xZPZWLUcreteVD4YCBdbnS2NppFP",
  "key39": "3dkEznGUi417xbEEx6znPYL2PBUJem4ByqVzhvcwaYrr2FQmYmmq6SpZFiwW9JtTMXDKfre4kStCLCnWrsGKt6XM",
  "key40": "4nUCMdmGe3aZaHt8yGyzmTcA8Bk9cMqHzA6nkyZPTL9DPwE9xQLJUMCYrCwqT1qQfQk28GMNQmJPixRTXRg8m4FM",
  "key41": "jRHKyMDZ9W6vAPZA4PsT9EbKwNCqNPFWcY6UDgsmBozCB4i62HZLDTPxbtEJe6dMbNGefHVnxQbB5CCHE36cBB2"
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
