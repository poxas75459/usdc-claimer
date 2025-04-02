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
    "39N7XmGSSLFRT7qPQxJZWqZVMUSwPcHSsPD8WiHiJ3ifY1KM2Na3sdRF1b52pGAhPLmVX5cHBp6xQZPokiwAcSDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37u5JHrsrDuGtE7BbTFbntKmbeS3NLcMA5jAviS6QQygD1QLuWysEZSsBkYmzdzg5DmZXbtYL6miKkd6J4FeECa3",
  "key1": "3wm44BFD4ztzMnFLbDVWadzPWuRLwzAmYWq69QTVJVFUZMxjsaeHWQhJd3L9zLRxMDQmZNJ1q7DPVxf9zxUE5Ajz",
  "key2": "4Vgqb18VocKfByQKJ3dEq1MGe2QcwrJKGkjBgbdywR13V7Pzg1nxGxkzdFAR3CjPHkXi6k16QLTnhvgiWaUYaVH9",
  "key3": "2WM9aRpU7vR9poY2MF9oniBqszbF27AyeQnZpxKXpTtT7PparLB6zYqDEPpe546ZbR8fc9EPqXzc7koMW7HhSp8",
  "key4": "x9b8dRePbxH6nhXdEb1yCEcuv99fS6MfzCNwkZbzcesvFV5ARNGft1cF6v6kiRX7BdKRMV5nPcNsiEVQU3ki6Cm",
  "key5": "42LpkgYEnjgGke1cwrqh8UYC3AA3b3yL8xFKxqG5qMCFonCCycJC8P5pYTb3Sc77qyV8ZeQ1rmfwuAZe9NM2rjMA",
  "key6": "cUacEMttthfKYiq5eKLQgoTzgNsuLomJvPKp9mbXv4H28owQGtCLopcM59xKUBkExQpvyJQZbqm2xyehAmZYX7q",
  "key7": "ygejyBZSFwdMohQHDpqbx7k29mJQaJYtjggJsxjEhu4s8Aa6UxJUcUi2WqZa9ZDGMtkfzPENVCQ8XPFstwRDVBE",
  "key8": "2CfMbybw6dcy4Yh2ddD985YdDyCfbMT1HD7Cgc2g5rsosq2ohRPtrJD9ypgMX1NGVen7CPiL5Cm9zRnwWWrvrWG6",
  "key9": "5HiV5SJmooy4o6Bdk358SBiv48dCEPsQteb37GkA8nBSHmZVQBjNyW8cWAsT8V6zpFuZxMGwjhQvnX4T5toZE8YB",
  "key10": "529ZK71p8zz4yb5hq8ZEKaPKRXE98SafPjDFvvZZ1pZ6ZVsun8jd6tnYFgUfUGiCu6YocVMTmks3bCWrbUTCYKkg",
  "key11": "Q6trA2nu8rjsWDALUGApba8fNKxCeRs5vUJ9Mx97r8L6nzdRWcYueoeLjADKurLVd7iMAsCckXgEBkEuHHiqxMG",
  "key12": "mRfjargtKVbomhLwnS4NgGDte8eqeJhxsA4vuzDEQjrkbj7o21LTNpsPWUAeA2RebjeSBa9Z9SkusZL2Ggvp4hp",
  "key13": "67pjVyb7A1MKZczyPwJNYwkSoWr4TTg7phRxrxp3ESkLTL1oVQvAsGePTc8zd8G7zjbCA2vCWWdGhHgJvWCmHPWz",
  "key14": "5y1CKLWhS1BJWUMp94MEDC5MvCfksWmx7oHXVVTkMYhCqZ6SVJKhVFo3cXvFZ9NxHkvZQbkVGVpWZKJiXnHijDzh",
  "key15": "2LTrsN2zVXuufxgXD1z1yEgxm9itKx2LwraQBshY253isVYphhytBawj2xA6QHgQzThYYu8ry81YUVTFpjas6R3i",
  "key16": "5CZJvJbKGnqo7oD6APnwuBKDpDVsE2ybUWpGkAQsVQ9SCX2Li1UpMgG8NEa6tmJUX8s8g7pL5Pz8raJAqkmXXxSR",
  "key17": "2i14u5PkQMLMFub95XkUwwJoQbapJbmKRb2mFioQe1VNBXQxRhWy6rBuTFJCbYidMkbmRhVJG2K8kBshisv5eDuC",
  "key18": "2zWxhJPNzatMptZVkiqrCx4uUdNAZvsxpFwrjqiAcnBFSXXemuaRUCvEYD9VaNJbga2FTk49uHbXvrU8iZNkBT88",
  "key19": "2EoRyfa8DDZiQVsVWRuAtZEdtpYexFg1XCobv3pFjAgyfUkQvuLziSpirVZ1EduR7JUftPQLe77LEr9V8RVa7zp9",
  "key20": "3Nwn9958v58DJc7gBLSpzNSPmkGG81MoGE7u2ZXefhHo2VkpxiAFCfqy4YgtjVa88S8QwC1qR2wAFa2NCpWHE5y5",
  "key21": "5u28wsKcHeYKThb2HGJ2arHVCbfjPNZEWNW7DPNFWUJrNXuoqugyH5d68nUWwDSY98bUVb92iSxSHKH7VwNbEqrX",
  "key22": "5dCK5AYsuXeeUncmKDciXo2sCZf57AQquWiwgt4JhjG84uUaesgTQ26WbMWav717L3168BpaGC6Giu1cURtbS7Af",
  "key23": "26oZ9sDoRsv4j4T2UX5BXLbCDHo1CLyhNGa8HMiHXUeyVhPYNGRiADX1z8Zjcc5BG66zdnRJMTmjbgv3RYtkeey7",
  "key24": "hTgeGBvWGw6jPhrxEU2MCDVUVSKh7RYUVUJ9XkrWQJzu3mr3ww4DkxDEueRr3qZXbCsQXgXnRHtMjbkkTbdwZfu",
  "key25": "2ZCCoJ5JaCi1xZL3mjwBN5SSvxP3BxUunZW8phLBDFZv17AtkuN2sU43BPhEhhWPHPFtsqwVhH33s5DQ8M5SNrRB",
  "key26": "2xqB3fZ7qvCQzjrwnFu2c6YregC1dTrr7mwPue6rfNZTanDbW8UmRuFSyxTUmHoN6mHBdZ5HrKeR6pPisoQszU29",
  "key27": "4LsGC6eSDjDp9RQJ7UtkRpWgARwx4oW6TCWo1NHwoqHajd9sErxrxuPxgc88e3CfcQE85EyrM8wt8SgBtQNtCCsK",
  "key28": "21sEeB9KtZzHXKC59syndEfDxfKBuYvuuhnFui7uCKgwH3E4RBcaemsK5cUNzXhWfhHZEDcPobmisteBPZLoSvaA",
  "key29": "52AcMBVtBqj47nZCtxPAnFsXDBC1Q5TsiP5rR2pZqHakzsNwwvqJjMDZmtMBBMn3T9nyyKW5qfsdfVxg2s2p7j7W"
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
