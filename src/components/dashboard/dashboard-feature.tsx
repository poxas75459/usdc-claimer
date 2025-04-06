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
    "54DzWug6xZ2ERTxZDnFKHG7TsRoLUKhGJMqJvq7FQzCm2LiLQhKwkbbUhKJfJwypA9E3t2WFBu4LxyW3zZ4DFQig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n13jX8Fzx72EkW3zVjEToXz7wEzAKGgMXYudyr7YhAxueEb5wTLSeoo4qretG5aPEpSKLeZV87JxRLXhoJdgFRn",
  "key1": "mdZcwDcGTd5yy47rqQncrB48K9F4NWgDfxHf1ES6hwGLK6qPWi6ScYgHC1TDncH6WSCMMvxZTp5GQsNMxAttp6W",
  "key2": "3UFhQwBpVt36o587krC6oKvzef8KEQXFK7tNBqot1CSY5gMhgERXQivHaQqSwUgnb5snvZJAEawUnnSRCmmWTthq",
  "key3": "Awz5fMEamcnexPM5KxmPSk9Tbu3sbEX532PgfEFKPDSKyivsFsBBFpoNdwzYToLe3Mmvz5VaSECuJy6pcRFJRzd",
  "key4": "5dJJnWpfKHjfiuoxybLxRhPvT1aC2iT7LAy9t3UJREwsrBAb8b4E8UKDyftG94V3ZGrQBEMLnvfgAHYbNgh12k4s",
  "key5": "21v8HtZ8V4Kpa2mrfbaRrkPEBwddDezDpAgSL1a4MEpqcpGjZ2QvbGzsTSn8AcePq2PZMFtSctZ4jyzv2Hr16ocm",
  "key6": "3DAz8a5CVuXTg3VDxGTFrKhMFQ87rT5aoH4zrZNfKeg2sUNDKDcPxkVQJKbJved6sPEFAVAFEoYkBDNJNExLimuv",
  "key7": "4K4r34hncbazuucUVbX3EqHRkZPK4fNcChb4DWcWCzkPp7CCZbtEJwwYMd5Cqtq2f27WuvVvUv4TQFJQ3erEpe8h",
  "key8": "4T1xooRd8g3Juy58V6j3xA1BaLLTX5JEPoq41nXH1fnF8QyjPBRMtGzsERLmj76kCuygfumuLXHKkn8NC9wCXquR",
  "key9": "2gVLGWb6vFCj3Zq1QZ9Xy3MuempKWEZK5h5PFoMKfTHSRHUhGuVPufqWi3YQRWfg6oc6Lc31qqAzWN9CKg6iRZ3p",
  "key10": "3NrcrEpBVrZ234Hgsgug7TuAfQVnSRkyL5vgq9fGJ1icbbFvKFf2YMahi2Nm4eAtpnkNnK944uvfaWeoGEAAyjA7",
  "key11": "pKWz4e9LkFgJr7x9FjAkmso5qJ7WNoXhCRUHcWE6iv3MgMARfnotmeggxAMsUe46gKbPk14wkrZAcgzwHEqcPLJ",
  "key12": "5qYJjyaByPzkJ8wVmyjTh4HsgQpp9tGdwiRMRqAEryttzjVDseXsXdFXMjXFuEVQV457MMbedJU5jSPeXr7WoDN9",
  "key13": "3YzFVQeXf4k5BSdDMotrAEzt1MMks14woWTjHcd4PMebrVwnwxjGunUAiMRu8w8RrJ9qstg571QYVXgR3PgU74mh",
  "key14": "4NagyP57mTraaVspZgonXDshXYajUngWeYgSTsSfkPnWMvCJuLaoSXF4CXctphwEPysmZd5M63upzk3yQZXnSd7T",
  "key15": "2rParGVaNASEHSEDLXMbYuHc6SVDbWU3Ecwa6v8QR1ZiQWigWgQokh7D3BEFWtwUsgTLKF7v3qVzZQGn3QgE9SvT",
  "key16": "1aMCz3LSRZDD4L4z6jcE8qfSmr5USfLW3LTywsbJAz3s7VhnT3gm1hLsMyFUNodiQvdR9mkK8wPYtQ8mqNTZfmx",
  "key17": "2Lhh7rZ471HCqNksXaHkcub78dNmbWfRQqdx5x7JLAWgoFA9DnjM3d2THCUceXHVqiDsApcpvhQhVGk5r55gwx6W",
  "key18": "44qskFAojimURh8faFmP4tUspbdbMmptVdMfXwxRByUfpPNQhSRsDB4zvHNjnX6CvzomKfkmzxR64pi3s47U7ZC1",
  "key19": "4w2q9mo4hYJR9VKfN62xqC4QDyxjKA7AjSZKzMWqD2zREzyUpQV5oZmhMVGme1f7RtRcHbUqCtwyBPw1jkrmUtk1",
  "key20": "5T44ikmFuSVmym9YmgiVWx7zMfekznjPJSsnMXPvSH6heK5ySxXe1T2HrLuCNY2KjiZS1P77HerHvxiJfwV8Z9wj",
  "key21": "VfAPLK5DsiXPK7sWgGdFt3xVX5Rpk6YqfurxbyXFpkx4Qqr9UEjrKFik1eRRBQc17Z3Uvojve6N1GVr6KLtpau5",
  "key22": "5swrhWL6x8j2jpse3DWrjU2RBFB7u1qE1MWNukBPuJymHtyL8og5TBVB5eTdH9mUeo54TdjfZSSkVT7xunn7TXZR",
  "key23": "33tFD5hTaiVJU4gjjzTyfyLG5zfwRdZc6kuEoX5pPaWquqLHTCQkKWDVgCddqFXiwWf6z473NgnWsLFBvBhyd18S",
  "key24": "4cR3fbwNp2teHry2z3NmCZYQfNczzB5BkKoW9aUpd5oX3qUdDi1kTYza15LfPkTAHA1NV6hw7HSuZGmp7pYbxnPT",
  "key25": "2TAzMWMx1tCjqA59SAtZmbZLeA7pYETSMBfq41aQFnF2SpzTLj13i3CGXd45DTNYaSRqQoP6q95sRvVcgPeDUd2D",
  "key26": "42pZQaHiQC2xfZ5UvPFWXvqWAkAYReWGKrcDGouiGez9MKqgpD74dLLWQ185KWno9YTZ9XAoZNRHdALFqrwVsP1Y",
  "key27": "4APYXLAarYMo5Psb6PxS3vYP8GQBPFiWPNB7BZRYSVHm8hCU7fP5hZjkqGZmjFLtgRgfW2F4BJ93NNwKAequvYQN",
  "key28": "29EQLUYfRMurSz4kLcyUYXZFqswd7m43ZEwJBg1DtFha9vSpTeywnnf9Lxzc8C7AA1NuXhNheSyYMGHNMt3DVYt6",
  "key29": "qa27RXHDkjFnp9HAVtdVzPP1p6mNzXD1PVxpahknfyRXRdv4wLbu3HVULTf286i4oQqi3S69xk21FeYWCQMPiUf",
  "key30": "53NSaNnJ8pDg1pNbeVHk8hSHjb5viNbG2V741ij5M9JeENUZye9ZDJw5EnuTNcFdNBVgKw64Kt1JiVXC8iJnHgFm",
  "key31": "2MkPFbms14QDbyxFSHrEWNobGsW75n8ugsqNXG2t8oRQ1V5hLhpJxs75ET6AnT5FUGJbzDDw93sKaNGs7i3zKYD6",
  "key32": "3Ak2icQFF1JVTf6274DehDUUbV3tAxjrpJtyTo9AeZxAAnHj9QYuAqg9etbcyQmP43UwWkfMCgj1FXVdyu4buPUN",
  "key33": "2CHDhWwHa4unNNKHu7Hmb6p3cxjraY2fmLebC31HQB71FAobb3Mmi7qpyyTtgzTwZXpUh8mntKmGfJS67HhP4NKn",
  "key34": "2V6cZ98WvxU5dH5kYjR4gse443gQuAnstUzHGq2FLuuWbzLt5dLFRhbF7vbyfaptxewzkmDXW76aE6wg8pcBUVFe",
  "key35": "2KKLbboVxzkcQRFBNLxtR37P1mJVmwN34V3zxS7KEgKFZMDGWW1pziR5x9wCwJCDrQ7129KJstNFHwdC722fgvp4",
  "key36": "yTfep7qXaYtTmiU6ikQEfj4NR8RXKbtqi449iE13U6zmSeydYHtxdwFg77BJrWEs5SFZKXe3iyXwxgkupCQYdK4",
  "key37": "5u6urb3C2phYoUy5tTJqZwZZgZ7mn75286DAJjXpUjd8JHPng2GMnczXxUBcxEyXUthiWYaXvBVGknUSVdD86Kic"
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
