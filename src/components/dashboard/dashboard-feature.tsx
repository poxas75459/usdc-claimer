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
    "2n7YyPmLBMcsVU1NeDvuUDtwryqeUo8JwNAawoPRRBwYSNHEorzomVcuzaQfzoeP2vM6DsKbqeLtBRDxm1um6D6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdD64sgChCGizDkpqCvaxWcX2GXJnPSuq1BzpjfwVn27Piibpok8dfC2JbijoEYv9jhbUfmutpxxeEqHDdcnF5U",
  "key1": "5Y2onK2iATnjGtqfdpAHuUyMGH5YGN9rdu8UwtaojrbYHHAgYCxnMgKjC6HCxo4PD4gPLUJzwNnNEbyJeoTN3XwX",
  "key2": "y1ipKvJW7UC7qWNWFsrJp5ctf14XstteyX8TQ9WuwRi4SaKU32gwVauwww67bFqARhQT489mNBYu9E1j7V3b9jw",
  "key3": "m3ZamifeXQD1JtZEWqTprDBdUNELL3fUu3cAZrYbbxBmjX19qv5egDYVBANvmEfMbTLPPd7QZnc1KQEG4qBXkjR",
  "key4": "3DxhzbgdR1dDqPUQbK2Y74xmg57FwAQNo8JV8nW19LadvJAQnVGrdvtLiG4jfVtEYNF2rcbP6grL7cHCmkT8aPJw",
  "key5": "31we7D4nBAcWYq6Rgkfw7tAZ3yETBA9gzJmcUrzM7s1c3D1JMd1RLMmAJdZTV6dE2x3k4QcSenXYy5RUHcRbArWk",
  "key6": "5CJHa8qyexAMhpsicmzaaR1sgsxXHZFwa6kMjp2u2bTpBBTC2WyAXZyz7pSxu2xEfpagYegFXAptboq6Cv5ZH4J8",
  "key7": "5zoVwgfw5sdyVF52U4Q1xXQFduPBoWTxS3XPx6D4rSD6ozvTxFnew2fuwnnPA7QxUXHcAAUaVFtJQoDMgvovv4Gp",
  "key8": "31X7q7Hj4nb674VbqeHLYmxoZmLFjkWwkzMtcf7JydmXqA9MfQX1DXg7jBZu1TG1oCDjEs4voEcsFXd1PbXomjRm",
  "key9": "49PZQem42QwMxJ38ymsE8NMCjjHC6c6jhsUisGdsuuVWLRvy6JepJHbMrQhbXWgd5XbRCdHg9cadXDcR6S5FzB46",
  "key10": "5vm3AiYsuG2Dz3Fpc6WdfHdZh1GWWTGL5RU5UZXg6Q3X9Rqdx8hWo6rKDVjHB6UYUYrPhrnVzkN6J4Rcf1xxEbFK",
  "key11": "5C4gkQ4wX9JRuvWPf2fgekDVfHeYJE1fj7vbJBUVd9SsKsDQ7qtUZ2Li6w9Ym2VdCXPdC7GiqQhjnyRg7PqvQSYJ",
  "key12": "5hEMfecyF4CqKtDGJ8enpYrLwAPDCWN5Jzd6jADZRjQdwuW9hAHQ5RCX11FTMMLE1bSM3ugwdrkTUibPzos33tFw",
  "key13": "CemgACc31iC4uFJzrgrJAE3wtu48eyZfcPV5E7bVi1CS8af7SD7NipQnyfsKr9nDp1LrvssRQ9VUymGjgAX7KjQ",
  "key14": "2BhVH9iC99Zmi4xhLtKxHc8um1kUZuA8UM4TojaT8iyXdRmsmMohm9uHDpdYfKaoGRos6hmHY7YVso8k1VznA6z4",
  "key15": "36A8AkoU6zniz6Sxc9MWEwsnPZB87kRezYSJ4VAGBDCjUD9vVjK7rbF7MCfC3j3qChd29j6F1m8MC18YL5Sw4zBD",
  "key16": "4NHxYVgsohHBQEBNPJ6dsNEHuDZ2HFsN6SQRrFRst6faroemHZjoBRRhrXi44spprLUDyjEAiyGLxR9v3RXVyTP7",
  "key17": "5oiXJ27CuZt9GNNM9RHXodAY1DpqmhntZ26djP71nHXQXkXkWPmGay25hTvuKNsdSLkQ6q2VtZ1BssUyYE8p1ZVd",
  "key18": "U4ZXWgXHSdXiQ1fJAwuzM75zDLSGfM7d77hydTCbezeyVdm4yWdRCcPEHNL2xyrURiFCkh1c3LKH3vZRskRU5rH",
  "key19": "2esVEZszLyCwRkc2GTNCHnDbffrWCGgbpTbUBoBkFnMfo6gK3SwAuJqTha1yGfLsnKaFPDpnibXqxGnHZUBYcuAj",
  "key20": "4NHmemSUGZ7k42XjxpUCmSnatBugkLaUxGBtucLhdJKza4Np4CfqLpDBnVDhTVL8tGNgy57vGa5Srz4XHFtrpoti",
  "key21": "3ikm8pLC5pbbBPxou8Q1Ya1gvuqzK3YDsigwYFvdzvofC3QDxAMUAwAx4meEFb2k1Gw81ggyYgdrKjCq9Y5sBoZ4",
  "key22": "3ypjWVLrcQFh5h6SM4WADfPhKzYZihYwBye2k9yNSZAaK1DwsYjiTs1WRWi1y4A6JvmCH8UwvxW6yatvJegRHHJX",
  "key23": "4KLcrLMYpHWE8by2Jx4Dx6SvFw8j7gxoQNk9XZ7BaZTRpjbDRhUyoCV5LubFoLYyvx6kgmAAF9F82zg3Nic1emS5",
  "key24": "3ebiSEzYBiS4oGABL5R58efdtdyks94pdj2FfanW97nFwwneKpbzyCyc42gJr31NreG7SHh5SZuuuVvvHCSR2eEJ",
  "key25": "33W7QEjqC2g6KEdMhZGh1yp9WKL9wKVsybcitHV9Ev9N7LX4i7ofa4fLXGynQ3cPUsKtpYSjtE8GMAe6AU4gHeXC",
  "key26": "rS9n9iww3n8vwZ68a4zrk8Ca9WimBMQUfhhT1xanHnwvDxdWzPhgHDYNZXaEWK2rRsGS7D5AQoTgEcULYGjsG27",
  "key27": "gENLn9WtG9TUxQVbRCU3iXpeVM6JMwopptTAe727NEg74V4G1unzqtXEetAhYvBiv9EgWt3kQpcbSWz8QXcJVcC",
  "key28": "5kw8mwzdbTVsy3eCWqNN3sJNSGdf5GKHg1qk4hd94k558isir299MibuBk5PbNN8N5b49tdxvkdNvmNZuy5aJKCt",
  "key29": "4aAmd4xg6a9GduGi5P9Quns5aMuqFCUQJENcDFUc4GDS9k2bh1dRJZRfdFJidfkUPtbTwdUozMZBaAHwbnvRfb8o",
  "key30": "2eysjKUCKEGGF2uG7BQtpNg3NaZGXeXMSe5W8BkndmHjEcuEm2yRJysABCbpPFrscbjCB8FLaZytPor47JUnxyRD",
  "key31": "4WXZruL8CAVaWSfoLkg6yN8T6TH3gKr2o9N8dUpWsViUobqLMGz3SGbcAGh3HhVDRwLbbADZUtDTsHrLhieyLjwK",
  "key32": "52Vk37uTFAftxgmyHR4WkHx7dSpWh6BGC7QE5ZZPSBrgxT2ZTBNpPrG8uvd4ogRj8zxtqguGVNUMmBETXz7RFeKC",
  "key33": "4w2Hmx9xTWzDRR8v7YrNHSJH7KoV22K5T4Eq2Pm22sJvA3WMdU11GbSnR4bXf4FCZfJGUk7Exrih2cmreoBsUFvh",
  "key34": "3YyZhsWbjfJgpoRN1dgQiF3Hp2G9utBQNEKqfV9SmBYAesjmFyUmSYntMvEgsQ7hsSPR1mr4catuSJWgVtPUeqyp",
  "key35": "3mfeYLPGgXMEMiqfbGC1Ja3WknBuBiFeQ6DRi25J1hW46HhT1fbaPfDMadRvtw939manujQ42KmzvX9kqHkx6Nsg",
  "key36": "2AYxt1XoWaXPqefxDy7NgK77BnJXCERFHpUwBPney2GFpZNYQ2Ljg6yXwDmwokRPzKhzQVsXpPYPmtVos1jDn2Xs",
  "key37": "UbBNzFsogvQxvwhYQdsda14JvZpqYqJhwamff5TFoYrjHNrpnDqxmxPYFF6hyJrab6hhk3j3ZQEVeF8qKKEUtf5",
  "key38": "4gT5zyVgtiMSQsZMtV1HQh2xcUaT6MG31DNht2sgPcpP4YxSBLWnc2uW1YNwxEKQ5hB3DbmbJq2Ec3VLVXZZaoGt",
  "key39": "C3PtrJGqgLoCitPq34WsNgfkAPgZFQ5mrGQeZFigftrAMX8aAAdxL3kiwr344AJQnGZLhMd5NUjwCQQJkgKh9bc",
  "key40": "4P2oLbgHsod1MUMr9tenyfRgbxUCgrhZ7HGww8M184BbcPxqMJ1Na9wfEG7jX8hN6sbeceok1qQhB93ztH11WLxv",
  "key41": "5rYqHUeapHCNMiwnpc1FrMQ9QeoFQtka7rku36eF89KK32GKg55mYhxNFuMhCBUCEo2TVJwbFRZFyzMvJs99LMRe",
  "key42": "emubYbyoo7s1onnQcV9maEdGKv3KP3ng1NKQ1nEpqhjRCrWpYBCxETVgsCBoX9bXgd1C1fc2ZhGbEKgpAn7c9YB",
  "key43": "5Da1Y7ShdssNvSdKjo1XFB5WxK79AKPvMBn3ShQGpJSaqDtXGDqmcktgh8aGhB4jkgoCuKbLE66PFDep3j63Xsgq",
  "key44": "3sCMjoKWt3SEr5ixn14yizvtUZ4hXnaE8gwpMS4iuzB3EFKzrRgfVi6X2bWy2KxRPqSAez1NPJK9X4UXws4z5A2D"
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
