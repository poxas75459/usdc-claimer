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
    "kKGU1gK7rgQnjHebuGRSw9ZdtjsyRTA88ReK8LJ1zBYDRZLFTyyCLYK5uFQ2BTQApFEEzX6mmVM6KpKy6xDNNRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57nue4zRhxPdDbugk3M79BfCHKERWRSrKMwMLhKmwDPndyKoqnPBmubpy4GBWwmtZwpLv2kehxEzNNed8oz7LeDG",
  "key1": "4chKKrfohoEaykhogUy5R7kVhV7FA1rxzpqosy8StJP8aQD7336hAAaSuhaV9LmQbSf5tsgsys2f5t2qfpo3r5nG",
  "key2": "3fvsRfr8KroAswY2Ypewq47EbjKtg8EBWnFRbzjf4hB3ocn6xfGxfy1BCt3yXEMjZuGSwKPvo5FgbpmwbTHywLmV",
  "key3": "5j1Ge9hXstCas6hXBGEQjip8hvAiEKo5MksKgXby5bscgzVGsYTcpoKhPP5S19b6H3X5mEwUaioMx1mQ5Sph6zp6",
  "key4": "5Ms43fJxWm1U6oFfKVCxJCh1G7TueSRzM7BnhXk85fmAAnNGNYv8d6V8LHnMhU55BYmR1Nf2D3HX7pHEhHZ8bZqy",
  "key5": "54cc9RE8Z5TanwncrumfH98No3TcmHWRYQhKQqUQ3V5fTSJGADbWqpxmERsYu7G1hziUsQVdD4W6D5ufH3EnGPBv",
  "key6": "3cycvsHJxekBYbLJw9yKfzt7ZXHvDwXbx7RnyuwMJ3JZeeoM99CbYaeu2MEHxk3LBkSfkqfAW7SrmxgMGFLX8QvF",
  "key7": "4Mwuzc6kq7idzuzaBBdYHigX4hUdn6cEKSGNKhAwwEZyS2kfmQXcTAxtxjNTvpAgD7ym9N27vGNSMhs2UHhTMa3i",
  "key8": "3wRAatpWV4SoZJBSanEWEsJ67NtHV7Xdgu1jCTmQyg9EnCDPPWHTq95ZKB3KnyhzX6NMrLgd1h2bq4QRmepKaa63",
  "key9": "2Z8LPHkLjmTqvzZM2LyeMg4JxZkbkkDFqfihXLGSkRRtNLFT5j7o3JRFnkJuRcXVJzVL5Pkwu7vk1zkoVD4qpiFr",
  "key10": "2BBKoA1LgYSuD4cBK3MGGu1HKXkHFgUG1p4cnFocK9J5CBS4jB7v5fiWSFtcRtczgsTD22W7CDXb9CVvtTrDzaaQ",
  "key11": "2hHinPNWmm8gyu8AQSwJisecBfCpb4zB7a5gjgFZgF9EJ6PHviffa6pUagQqKgo36ziL8GFuSAZ4aA9LXWtiNg7k",
  "key12": "5bXW8Dv63ZP5k2JSRCw5e4hB1STDx2GiRy9XWmGdAzdCmYGXT3WTwc2u5qkBQ898UQN5ajZwAC3gx3LaQXDQSdE6",
  "key13": "3eo8UiDGjfKnpTVmLHA3rhKq4TsFytAzQFMK1PJBsVxNrUCfPMjJ7pEum9z8Ms9jBbB12iYSP2BPqGDAS1mHZkcJ",
  "key14": "4apYqGdDzQuov8WJ8ogKam7GowL6vzLybR24iNSF7zZXPKqthw1ySxJdhVyz6uE6R6gyZsxiGWGaJhGWEoRjCNDT",
  "key15": "3cPsX2ya84hT9pigdRb985NcK7KXKw5bFZndM93nkwYb39jogDvxjhS7Bdd1yNWjoftZHzf75KhY3RcUn8KHV4uw",
  "key16": "46VAwDbSmqiKQtWZveYBGqYRo1n8H6PE6b8eCj9WeZF5DNWVqUwUvFjuRnJ1Lb3szkdiU2srNwjZES3DNe55vii1",
  "key17": "2ejfGHSF7mZzJsv53F4cP2TodXTmh5CFvRFnSpCSDBEFn61H4ZAykfSQkUu4meo7ePad8GMDp8ds2RPTTFfYNVfY",
  "key18": "4v5QAe38Q8Nqm35FWqedDhXfKp1cN82gSXVvn9HeEQVc58GdgU6Ay6ixG7jKBZxB2hsZ4GhJaTphmPca3iL7xTAZ",
  "key19": "4VCfuictwDFkmxbg5aoKoDEpkqFVzYZT45WuX1VM2Xw3TY8jVXa5saQDYXb8NgMVXkZVtYf4AxE1LYLkn2WYuYE3",
  "key20": "3MjxExDsGeGteULbvxj3ffKU8c78SqMwyVK6GVdwtbwVks5tdw7cGbZXaXmjukBe7ed3aa3RKraeoZuBxUvoiFx4",
  "key21": "2C5cA6RkrGqeBKGgXYojyLAY5r6PyLzvosRhUu9N1UTYvCiFDkoHV36bdoHSYc5H2pLM6FHjCWpVpivCvEDXy8S4",
  "key22": "2MCdm99czakrPCzMfKu48oi3zG8RiDTXBuQkfR1AXGRLGRxC1EwNsm1G5NgjLJpDFtw4mm2QnErbABjLJtKDvAdR",
  "key23": "3PPeTkn9PBMNJt2qWTzCVUwicse9N6b1NbD7V6xV28DZqTECbbwnyk91uJ5MKATxKK4iJrJKvb1tfRrZVgc6LsGM",
  "key24": "2YfEo11JoM6nJdKynfh5C8zq1fh1KGD3QjxFp2AcyafutBA55t3RtKNxJGiiocp2CBRDxFdhxmM8xsRqCDZNrtZ5",
  "key25": "3mhRREPg1WLGAHXMY3CUtD5Rq6n7hhBBcGzkWiBXVqn3Qv2Qi6fRqzGK95vPXa5ibVwUKRJkyCgQ69dbz7ZdURk1",
  "key26": "2cG9UTBqUSea82jSJC2QayYPEDwXtFrBWV6dcypBs86NumzLYm63uUbdffWzYS4APfkydPnBTGb96bX9VnQ4oaZM",
  "key27": "3gSHigSRC76q2MvCpeL7XsL51cRYDo5jkWX7SgjjDf6U2Kysz95SkNtkw8LK32hiwXmFdVYTScFyA1iQZJsTjjt5",
  "key28": "2fJUjp26gqfELwo4CHcw8FRy1ar3Fy1gYM8UykCLMkMxTWoJ1wjKQr1iVJQ3brGEH6S4RRtRaxjNF6P29ZkEmjes",
  "key29": "4LaLsiwSwyf5FN7fq8DbLb2UdZfujfHyN2qEsC1q2ANYoBhSoKPFphjzcuGzeBj96i2cx44z7qEKK64ZHjsv7srq",
  "key30": "4Q67Ya5goMaQxLrV85qJoxHswowxnLHsaB1d5PXnuuzvK2E4HiR9fPiLtqdmg3gVBTREEkeniC7jWXpBMyEHczVt",
  "key31": "5uHfgm7mSMNXHvqDT3KkxYLDsR11yLrhCDPE7XYv9YBrHEesBdCu8Svp8yECp9ZNM6yLUY5ks1F6CzSd3f8V3ecq",
  "key32": "2Kao7qkDwutSH5fsYzgJCqCpmXQDQyx8DPjgK6N1r8GgeuQ4rdSSWzkxb8vPmNAV6jhy9SG2GSHfNHyVtWPmugpV",
  "key33": "3hiepR8mgELQdE3wxwWPmSFLEbzfrRJ1cz6MzrS6Cs1oZCbVtUWjeUdwEsdw5S8Tvf59GMT6X23jHpTK7F9bPXsN",
  "key34": "37MqG9SzTQAFt8rhTGNBcimTc9GmuPBPAYZywmDTKWJhVVQAoXEmAFcS2rg6nmFmLQaPQWd1XqJdZTaYXRKTzvr4",
  "key35": "5jopNSfv9uALr64o8HzZC2iGRamxqMCnFtsXjZn1btK4X9y2Q3F3Cq6urSkP4ZjcCFkN2kXEKTbr2KTDxQrgiPK8",
  "key36": "3NjFA5jkgQy7XYpa1YZ3yftRxK927syQygGZ84E231DUJKjvNQrhWR2kcF3wxJ956uzhRAUhmM2MHf3MDcsgbiac",
  "key37": "5Z89UyNiEtFyD53pVDvnTWUCcnQv9JZ4DUPVSKjvQCy3z5XEeVMh5dNVfCz1XmNu3yvaBNoLwp5KeKKYyJaAFNJz"
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
