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
    "3LKZxrp6GjJUkoBQzk9gL2UUHLXXqoWvUn5YEWY6JspxzqBocw6C2EAY8WG82CELWsWhvNXQ1UNJuMRhnKXHdp21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wELkzoKkNshycHztoPTgVPdWh2n8Pm8wVqV9adiLSscAgcv5RwNfqnr5NBuR4tT79h1iaMa8RuSgKm5sBoiqu7W",
  "key1": "3w3iDLpYzmsLRKHPS2EhBAixWoQNwLQNHSohERdjdMmpESpPR3AizpyYQVH4uH2w8NpgHJEzxA4BkJLiQagFafKL",
  "key2": "4akEUMbhqRkV1d9pW9pZ1zpA3J3xPsV1uiFhJUejYERWQt9gxbcw8xJ5F3Ae8UdfaMdhHSRBNS1gM6DhFLZZRhho",
  "key3": "2iBvpbWvCkPZUxyhAcMz9UhxRM3s1yfjwFjZF8ttbM75U1EuN2zrUfRqHPWQFwDaWh5xzBUF4dki3Su88YXW6KkZ",
  "key4": "JZRkDEHSz68j5wirCd273wbz1yGG5MRgsWoXci6Rz7YL8P1VYnF4EyKANtDwK17Y9JtJSHfQHiRz55gqkTsYoit",
  "key5": "4qru1FMu9BYYvxEBeFArDwqVBSUbs9UJ4Bb2TNmJaVeau1x4r7R32KaVbqECofUDxcvJKQZmwibpSwpYWDzvmDTs",
  "key6": "2FMtV3Scjb2npD5SxpM6noeeTAWZ5GDn2D877oAyFrU69r5KJeYwrEUf6rVV3vSHjxVrgAThAZZ63QddNwzp6vQv",
  "key7": "345mkdMdhkyLLDzoMuS1ShyFKJcCgakqyWm6TMxtehtTEGPEsgs8XixyJ2RRYmb1NtTAiBvqza9mTYbKPVMDLVSd",
  "key8": "597Fm7N3x5h192KtdqdaCXpXoAfWZGZEEPJQAbkMNXJYdJyHAdpqfC1xUuxN1hLPmw4g6MvDVnBtiBLZMkJRg3zK",
  "key9": "5ha5kvX6VhEdMuHqKtg3qoeqaAkUKXnvDaBGcZ9dmePcsxxrPen1o6HCuLCeHTmKMAzskkvbxSgLmiyvLSKQhCc1",
  "key10": "3yAAVBh5NHJfEcASCyXmww1bz7aWoVnY7NjCReRSAvSJy1yt6MUq31HTssK28B5CHqFmAHs7AdkASjbFPgtKwKU",
  "key11": "4jiVVi6qWrenASn8fPcqNf1L2nGGPWbfCLgsu6hWYAtLPWawr1mmrac2hDnSTwydJZusUeev2csfTK5RxtffH6RX",
  "key12": "4kXkQcyHTaVcapzu2Vh4m7Shuw9kZrp4HMzRWDem2dzaYL4ca5nWkiYwKUV1g1t3LdeKxi7Pf3rDvb2TdmQXdBWu",
  "key13": "xzonRwuks6dUaVEr3EUK8gnhFuwVzAMUpQZuYXicKSScTLKfS6Q7SmfFjRAEY7uaezBrLV6EQCVwdcuswEnSixR",
  "key14": "2hcWUMTJsreWdRNc9BKzkVRxG6gQUK6qW6vY9qxzuscgGo8vkikcBvQfcgLbDsvaQU8KRueB51iNVr2MxQWAU76B",
  "key15": "bXJhJkBjkeTvQJN6oJMTWgES3TEzSCPPjywjvrcwxVQrNucj9wd1cKrTS7pgwwjdQPSJNYhgLevSCpktvYLrPiG",
  "key16": "rqDaUsA4ewXSpWn8JocAGmABhKm1VPSxosbAazcHuDSYtXCo11Gj79WkdHHaETFcGKgLBsrTSvTbT89eDqn8sHU",
  "key17": "2G4CmC9V1EdiCKwCqPyb1pEb89kAtpsXkZGLJmaPAJgqmyymd6fZBBfdUQCi4HvuyFuRmXzfLZkxpSu4hBghAZ3u",
  "key18": "4pMHLB5jSipy8eEsYZHk7hcfN2DBr6L7XNjTb8mCDd4ohabKu75EWK2m2j3XkzV2GjW4EHKLQmTZ8s2vnmvdGa4j",
  "key19": "w4HKics7TsCxTh9CSUKJCpuHh7fRd5moENZb3xnHKkVqwmiG1PkXpHd9nApDkqGekxaWJDxvu2gARx2i71UpXN7",
  "key20": "3jPAvUYjyNsyZ7DXCpeQMLBJ7Y6uCXYZZxzLyuzqNJaDnwSXCRG8rkrnYHJzUwQfGniK3DxuULHje3VncsBwRDEo",
  "key21": "48Zo9b3JA58PRhWpoMNLZpXBT4t94Jass7Qr2fMknWCfMwFagUJm1proyfSrD9kU6bCwUF4i9MsqqDwC6bkjCXgC",
  "key22": "3Kw8JnAri49MWT1j6z5592AZeVjY7MVncVAFbc1o7CXbqy8ypmyg5oE5zTbb94ukii4SQrQuqcU5G2AhQyZAT2rE",
  "key23": "6HEVb2JvQpcESCrZ9xE6Sf6xV41jCRz3Um261b84AWv1B4e69CN32rX6aeWpovc7dsGCsG77xDvD4NRTsrNR2V2",
  "key24": "2PFnDx7aybA1L4z3nSoeAjNBtMyYmVWbt7Gf5HW1mJrj6WCf4jWnHBv8cPbMac7dK8F1xJXRbZHDGSwxhVHKzcTe",
  "key25": "5N8Na9iAkGVxsbiV8sofQfRMy2kFA5YGVT2wR2rCfQ8xuoHH24CvzKxRY7jQw4rRHiJuVdUx8XjtPGPsQ6CHe1CH",
  "key26": "42L6aJCkfXWoQbKH6imf6E1RvxawzDS8fmBA4ZQkUdTJ68QCLm7Xhav5WfypVusQUHyj4djXtcEywy589p3YfuGd",
  "key27": "4hVMVLMdkrDujz3dSCEVW1gafHRt7NsMCS6Ja2gSpNfzi6PtFwfp3vZz8s5za5TJGQpdZrAsfia3cwuaPitz4TRm",
  "key28": "WGMMZX643pdXXoeoj3cYEDoq3KvbcGNsoN5TNvRjEt4PJxHzvw25F6SafbEt873EdK4pEhJN2BH7swLa9no9o9z",
  "key29": "2TNnfviGPSwDLWHzETxXsKkPdXAy3KZYmBJ1azm5eXEbwfGT66GNYvEAwA7ujTf5B1cB3AxV9HQh6NfQfvfjV5DC",
  "key30": "3XG3oqikcR7BH2zGygfPWKEjBNwLakK9YURHwpo9Z41wCMDDBFk1x42HYF4JaaCoyxTPJkNkwAHMozFmBKjL2RhK",
  "key31": "33qUfxrjN1KnfHwXpUNVdtcgRymwBRcioYzF7PThKuMtebw5uBwJTozyXLK5WrKm7Bb5iFznia3my1Fev167tuke",
  "key32": "4TyrbkqakqamUgpEWnMt1pozdS8vDC7tiWGaxkvmffG667iUPeDZVJYKjw7QBGX3WUXm72ZX8RQKjb8bPAe32Qoc",
  "key33": "2hh26Rgnfyemr22Gx9qHbNFuGrpyzeugyXcE8UeJNdGMRUu3uXMYNaMrC1hzEAqScL7jzDm4phEsRNtkMfzZ1fzq",
  "key34": "2TpnjAPwD9ZUHx5qTc6yR3MR3WdcWWvBkaUdCP6VSq9nCCy8ryyq3ioytfPjQ6qZqvfpSrYAW7gvdFZK38EcP9HT",
  "key35": "5NB4iYBUbHGMEKmULLhjhSJDPFpn8iyxNPwLRhGVSSrfThFucVD1Sk5qiC8vQRWVuYL1UkN71Cg3popVithN1adC",
  "key36": "2Yv1sFF5irviyTRfHRBsJfKH7ksfZsbJ9pp4AVYScpGzeoR3wQmAwanhXFQqN8wpYPM6uFKWyJiivvcCFmcTmYAx",
  "key37": "5q8iyYTdmanQfnpGsSoHsbkhXytLASt1ooV2S6vY9rPQTmfKFWxER7duZUMkz6ZP9LUZMCNdaJ2mjwquKPxFXDfq",
  "key38": "4GnC4dGaWJeJuP6W3MmHxoS1wFejhN7zae3xygRUMzc1tMhakzaLeJYUNnspaVeWD2H8wJkqX8m4xogDjXeZWuL",
  "key39": "4hMxtt2eVqupURsku9dxd1aykz3FydW13rzeGThox5852z469cxv4cMfx41hAzr2LSRL22tPdGmiHMixARbXpUo9",
  "key40": "2UTCfXwRB611LS1yQBauRiUdaBwiHZfZVi9EbXj4oBXsDVmXuDBmnCpMwtKaKTADmFpU4r5yV1tLfkxYU2z24rdR",
  "key41": "2k2STdXCnyx9FXZnuzdefoAShERiVtKtQKdnQU38RYBEuhR7UejyQ9mAi1CCN6dTPwsYDcsZvxkHUzhCamjePCXq",
  "key42": "4AzGYYPiMUDPbvDXfBbCpWFpMyQgX74aASqqc7ce3fjK68YEt8Ny79BBVFTEuUpi4dxNHtLqZZZCKZHFj4sAAv1w",
  "key43": "4YEVfSizATzPrS4J3FwZYKET3WdtwXRShbBK1JkEFoUkbC4eCqNLBTxmyAX538fyfVHrABcEkbzy34C4haBfAFsS",
  "key44": "5CQhZomWMcWuigfqvwMssxyTayBcNU7eqPqYULJeeoMuk1MX6FFmGoN9M8vWoU4ymTFNSzQWRxKiCPJKS1cjK5Bs",
  "key45": "2g1ao1Hf5HYjvF5AAeRCKkxn771WC7kJmFzVx18y1saqgDpEAo2vqYTZvMpKMaoTUdQnae4nVFMiE7y79JkY4kix"
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
