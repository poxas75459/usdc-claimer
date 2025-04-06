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
    "4bn6xCzVzL2easSDSy4ykHgMjAm4FGj6uWbeM9R24CRVx99tpXBv2kCbm9oDaFFTnmhH5rZsvLbocnjWRnW4phka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dzDR38VPTPhYakhTgcACJDKGJcaCdiBuZA4VFVDKeWDRCTbLi5RQWDw65wLmY3x9WYkCMroFARaJDtPsziqHrq",
  "key1": "3KkXNtB2KSG8YDQ9c7fjsWjsvxuYtBmRTyFwVQAB68NzdCNGfEfygvJ3CJH23o644sB4SUXcwh95PZaevpRRbcKV",
  "key2": "5RwUYhjqfUevo6JzRhwPHTVuH3SydD3AN3xV1PLp4q8ao4EiZc2R1rmeDHBXwM4pNaKDm2jeWe5zQ8p9wUfEHXNx",
  "key3": "5TpMkHp7PC6X23mVxfiHSTJFF2DGwTCHxZWXSobNkSpowZfgDLLPJ6Qg1UCs8wMZ9UQ6LKFHzVcjcHHdbAUxjeKA",
  "key4": "YQc7N4xDgJHE3NCBdSuFvpiLTzaPY639QgTCPX3a9SGQnNGuV9CJVKbLYEtbg2EXznyA9vqhJnP7DJjijuhVpi4",
  "key5": "62k2vTgSVj6ktTDH1ekcyo9mgYzydmVNqdeYn6HXWq2L8Y1ACF9Qw9zcFQzhbsmxCaZ7YEru6h2cyvevRK5jdton",
  "key6": "21hXEmriuZ9a5pCM4UiYbkHNXyUEpoN8um22KiVf4zntBLRtt1umj4Y6o1y1vL3UvEdYtr38rgJkmm9GrMuqUTmV",
  "key7": "44z2wjdcuytTFzvd9S8LUq1uCuTGGrMaDeJSiM5aJtJhLLbtbcwekavciyG8UW9Pd1QEGXStmTSz3rULaobLnZr5",
  "key8": "5SbqFG8knY13Zdszhz5E5CpYah27RNDe3gxCmUhfFvK7PyYkZFDFeTJWXyUSqCNUcWtNcZskFnRPHzEVC4ipGJd",
  "key9": "3Qg4tA1LGZaUbCLJhwEdKJH3255m2Y6KnvEUpNuLKhjwPRw4kKivtWXuCvXVzxDq85K43BswhWFT7F8BRHVBkdtW",
  "key10": "2WooHLjKfrWqCpo3Z2kaFWNXvPeHg5VMXcPpxnaZA19yvQXTsz3CjrEUm1kdGZgSmBoocHS2vGWfCUU6AGiaD5ZZ",
  "key11": "38k7w7q2ckvZDaeQAHGQHaFAwTk9BFkg2yaXQFSB1vWUaS96s3HAnkJ7VMQ6fUi6ch1GFsxYdvcn62PFgpd5TjGN",
  "key12": "33PEM95HT9fNtxDd6yxY7z7bpk66ctKK6d8aFs5QQS78mFJZxL64nv2cEdXMonqstwxUCEoKWJjSBemrdDTabXb5",
  "key13": "2zXHLMuoj4UkJhWMdqAP7AkmBUQ6wNBXtN4T826iT2t9QaKmqQtnAZ9BkLCy1VsfYs7hy2idTdqFspTpYV7qD4oM",
  "key14": "5WzqR2fcs1fTbzh36YDgbyGJXwSASKnitmffZWM4vpAWfMQsauNvRmWZ6NQvc2Gkhy2NZcuaWnHZHtsxuwm2BpDk",
  "key15": "4XWXV2CbXq7eGJ3abBQsDRx9gRgtof3k4xU63X5hw7ubCEwr6CSV8HuLFf6yM18Dd2PraUUE5Rpy3njtTKcNJrWW",
  "key16": "5ZGZaxutpD2XKfh152nydMgthAcDNBJA3RghAQCVHMEGVFispxrFrwKRgJif6VaYuf1LuK2xUEuYqs2R7vku744L",
  "key17": "24JdqZhkLwMFsSvN6bwKjz8FZyo9kbik4yy6jDnHAvkQfUrM3bhRcYtzs7tWUHVeLQBertQxZm6sp9CXkP1FL5pa",
  "key18": "5qwt8H8dS42Wm8bhoHV9Jkst7LmRRbzKhvTnnfje9zU8uWcL7Gw8mBMBLSY2SSQ166wXJtg4fxiYP7ZtPnVpReFd",
  "key19": "2FKmpXLAj5HRTKUBNtyEGPAMrUfttSQGMDKopgML1LkJ5vqM4SLHCbUxDpCbeDpS5XBT1KStjs2DLXdqgwD8mxXe",
  "key20": "wkS3niQeUhXahDhYGDA1EWh3nKVHtB2v9zqNkW6aAGit1LrpJpmJNsCt4MLThZsRxHvFWwCbJpTGpQiaFaENnxC",
  "key21": "2UhnrH2y5qsJQT8P2FgV3HrXp65pDzV1VSM5yUokwW7FVCzQFyo7cNRcQeDW6MHkguGS1NtPdv2v6ejjDe7fz3eD",
  "key22": "2CG5cjgVxGkhv52bhwYpaswnkZ11iDNJ7yB1F9JzycKyFE6VuryGSKm3jxxKJkKyoFirSMyhyEWnRcAnad8XDwpT",
  "key23": "36fgDfycU3BRqmmvqFLwKsWRptSd6LErjMX2JP4mYRuWyjSNs2NFfppFbenEepsxciueMQNMsSNQWrEYNMDWNLcr",
  "key24": "HPCcnTSRknU4W3BGNi7J4YpfcKTgEq936k9pNXsX8SQh21YW4pMAoakZT6MCxe6rg2FBC5wsxNSdvcndN6oXFz9",
  "key25": "5ojyXcfkzWyScCniBX1C2RENM5KSzzqL4SwhLZw5jL25Xz3xf9SzYarwsDPngjEUBmGCEvvG7bXGrwUhpsu5gJB6",
  "key26": "12Bu9a5qUPod8yMRSYbRxAJ9iyQpoonMfkQtooDPKzsXe1RL7JeiUGqQguf6UbQ5imunNzyUEA3zR1VSayv1KKM",
  "key27": "5kfuPo985BB5PohPgdnczpLniFLu97jbWiRUhAop4BexPePPtdSMWbxFHpit4bkenCFaeCwDDaPbAxt81zyaEWwM",
  "key28": "SXSHmTVbF4nvQw6k6wgPyGdrpRsRuTmw4z6Yn3JUkM8obTV1iYXEwyDtz46NcGgjxqdA3NyQxG9B1EmL7VyYKAa",
  "key29": "3KbWnecq8yGEgWjmUYCKiRCAt2TZwPQeczmDAwa12UG2X997dZ4p6Lcm8DVJzLaDYYRvtnLaHSKdvagjBDZSiCBA",
  "key30": "3QMFMChHfQ6h8ZYU2bnmf81bJG9KivvJuWmWYdK5C22kUcF6q5v5zW4Ub2MSD9EMc1JBHNcgyAReydnibZvyrMK7",
  "key31": "2daNDtZQcMLUmZcxL3AY4oWfYuD4jn9fPej26hWwWfqLj8dF9SpAa4LB2B4cZ5zidAxzSqi2AEEY9maJN8LZaimD",
  "key32": "4No9PA3ybS9UiRNHrvEMeMD3B7pJ6GpR7pZ4B8sG9hD1THFF5zH1sErXJSDGUXrKfnZipfvv8ngQXqxTxg39QmEw",
  "key33": "4nSFqKFhE6qAZwVjxM4vvZgTeJK4FZd7G4pokA9JHARRk3ittKUKozL9mRz8yNsxnghXx6JUnBjWBBFNiLiNmBia",
  "key34": "tPSZgCNEmoNK5yvhqUAyWfejAbTdj8gjoUbfr3BGX4eBNkXzcMqNXFQ9yHhdcYscuFHRnAHrRej9Cfg6TxTYGSM",
  "key35": "4q5kenZsUzufrgo56zPSd1ZAXrvdx57srvxVqK4z2TDyS4azFV6gehw8aJFzpNvCQG1Z5cbbhPHYFzqGtga9PoJu",
  "key36": "4s6fGGHdkmwbZSzvCRwFdsKD1KGULXMCRfaaWEC1Y8epv46vxbKScsbKK3bd5rLZoFtjabKfJZ5U31xGdSE2zSA9",
  "key37": "3VAE65m2aWRWmwgAfRaYCdVgEV61vNbUGU54LoBFwW9exvsCXxbB9CPU5rnYkbsnMpa1K8gq7EJZpj8AW62Bs2S1",
  "key38": "2dmt6qfvtDf5xJvEdPzWcSSvCRdsehYaeytZVx1cGCudEHGMNbo7U7iHqKoDsreW78dmnqkGobDU3SegXD3ru1zs",
  "key39": "8KbNAZyh8UXeX34PS6LPta99AdWmfHtbJnZf9xAtV1arm2CY9soHM2B8mcNAeRNYCfrgqx1tdgaT4ENMWzPvmp2",
  "key40": "2xPxxtpyT5RntNDc1Eyh3DUtpxsFLxqK93togavPRAvBFT6JMREu5FtPUn72FxMawGEmo2ea7CGwzM2gzNwXb5ri",
  "key41": "2jJ9ysyKRMDFKuZhB3vpsK2iQ1M5w3x9XNWcDwz93SixrxXeMGFDzPWumBN3iFNZPX93nfeuRa35bY86aJqrtQRQ",
  "key42": "2EmaNSA6fpMioar8F3Hish5f9n8btFxALSN1w3tepVXik2cTBtcsct8tcoxL9NhfTTH4xzkRijRvD5M3KpSK3iW",
  "key43": "4MpSZ1jctE8LFVNH5TPy3wpoe5NZN7nDTK6mCBb4MQiFkJVDgyoEpGrUFKPzjURt2UuDdwREYDvhPFFYs2AAFy2K",
  "key44": "2z12MicEUgoahUfhkCi3CVma6BdjhRuLYXVPaMs55rvbFyRDY5ze58uRKGD2fukHvWyksPKQF5BKKbhg5ENpykji"
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
