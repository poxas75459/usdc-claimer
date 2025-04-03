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
    "4dW699u1Ef5wBTvmXeVQ7gEGyJoritAdtdc931EToaTCpchd4uhVAz7iZjjjgsoBNmzWsFCVDVjHjRQWetFsiZWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RMEgoHUbLCwRPb8WzZ94JQ5Bg4EZLf78c2SX8kwzSkMXEfpTzrAD4N3DCcwYWpeuGmKouqLCWLbHdmWXiETEZ7",
  "key1": "2E4AB616izxc74wivXHWSJHX2BSRbPfu15HqyLFTYvMXjcB4hrHFhvQzU8Bany5aoaYxFtJ5sxWmPfeGVS2nBGDs",
  "key2": "3FxCWSHisxZQEXMTch74LMRwNXp1SNgmriki47jnbduwmNFtdECnT96bV5JNnrBQsR54Y6gGGMFHTscmJepxUDAc",
  "key3": "3kskuyS7myKKtb5LyiQmoyHd7wgTS1pAxtpBnLattq3krTPgxXHkVNAh9ZFz3CBMaDzimixDGZsenbDqPSVn1bWY",
  "key4": "48fqX4HiWT8eYY4H3TtKtG2wNrqsJKMAk3LSXcYMnCGVDFCfrHhb4W1Eu9s99pkQKCATDesWhEw8mqiWAVe41Dg3",
  "key5": "MGFNoC4HGhyPAJGzjJdD64tWo6K3zRdNBYBN4dxjGuKg6S1FzeBJKABBVxzQcwzCiAQ8U3n1NxTeNeXVoq2ADR6",
  "key6": "5V4qYcjqiSf5S5xuLR9r92JSCtPWrcEXvUVzkMv8eEoxNJPcFjT3cw6omro36wshCvTngXBvkGjyfizQq496PTsP",
  "key7": "4DSVzoS3bnuTyv9xb9JvtdB818WWEW4XsbBdQXyQ3unBgNwua9MPNNFkXNm7AFVpJzSkbBSQMfnB6Jv1ACiGWTX6",
  "key8": "53HqBRV4HUwxhA78yGBuREuG9ahqPPRNENJQDECbey8vAM7Si1vXJgxdrgbv9wNGB9Fe6o8y1tsC3mwvNo87Dh52",
  "key9": "4ZuMvKhoHFauebKVKx8oLJuA3MagaVkR3BWMbi5ahCd1u48bUinNFZviZJT9u6WxWHZ4P6Vq5ewAotETVJ3vbvRk",
  "key10": "2cYMjSZXg8g5AsLLT51v2wgf6P3QnLwAbidHXiQfpp9iJwZduD2xeGPPHNd8Tfj4zPBFEiR3HCQFSLaD9xNYnwcs",
  "key11": "3ULv3dKo9Sni4UAjUqAAAdXhqiFZwphgh8tY3PkSVoPcKErXTfYSrLCtZbQsQtedHTwy3Z6649UTnBups3rJAJui",
  "key12": "4cbp5FayCVYZi8yX7xTj4RqsrxvrKLnMZqGk4vysaBhfja5Ht4rRBPFkJxoBBcRYT3XFVk3cCc6hwR2DsrAndnsb",
  "key13": "2radNqxi3EBWrdKr2ZNtNrN1s1d8t18EKtmKT7ZJSCg4wCvSaBbAQ3ZfaEJyZ7Kmbm3EZerEbEE1Rkz2co646AFR",
  "key14": "MHxT2n6firbK4xfRwSEjHxR8mCF1pZGRGWHjh2BT8qaydKQURAStZmi97P3N5ccDtvwHhZ2FDEK3NaprWs8yTRq",
  "key15": "22YX3cGwihxNMXWAY6jKu1t9Yro2Draqr5FvNw9roTjvpXzVCSqzGkpeRxfqH9mHpPEJD2fDdFebUAQn89eyYDdb",
  "key16": "32oXW72Uws9DpMjzKcP27FwwFa1GJuisG8jUE5yf6MbqRkmCJpVpMXT6h2dqCABuEPzzFJqdV5eiYW5bbKMtrs4T",
  "key17": "5RBwa1Cj34NettBDQSTRfSZHsjy9zAeqfZwfFFTwKBeY9qvAbk65MtKohcVP5k6GVGLCzi5LwqYzTimCKzH9A5Wm",
  "key18": "4stcL7q5DdpqYRi9jPGbLHNydKtTGnG6NzBs5TMm8qbRGHx1MhM2YNcg5n6QJ2SJ1fovTakbwxbdpfsyGK7CCCvg",
  "key19": "5d9FZsBa39bi7WM5qWBniyRNChKdNZ7sbKbf9F3ggQtUX454bPg9Nh2sKmBMCRYcQfeH5QRQxX9hG7jFKgoqnRJJ",
  "key20": "UQWorpLSeM4Y3czeZpnAybXjCr2FrHeBpUmSDdtMLz5hbrsdbFcmTjqjeTZQ2s9ERdK4PsVuxRRzbScWQdxwd2e",
  "key21": "idJS8DxzqR1bR9PpPQS6ycH8bD1AJYVDBYFWsVsxThLDEzf4fWjsZ8DBtSq4yHJRWjU5fDXBz3uYftwkBS8E4ib",
  "key22": "M2jJfudkaPHchfbnUfxcejHeXF6GiNBGPHBmo92MHvT8s62PndUr9KB32ATZTYYJeDyfPTQu7S8x278jnZtPt3p",
  "key23": "3oDiZPa9ep6rKZGyMJnhe7XtAApiCdM7BGnAvYL7txkvXMmisd6kAwoxuXZmXaf2xnrMoCFMygT5DgFmrCoz17rf",
  "key24": "5nCBeRYun5aoF5TTWWrJJUZ3U2NmCWxnF4qD7XNPbo8LBqvngyhXzTUWyuWaAJAbTyJSGcFh9kqbpCujacwXGGDi",
  "key25": "2HPntSwFvfaYwjdQ6z2VQPT3vzHPHDXe2m988adZ6qTjRjSapCu8wypsaWWcR6QrdZubhS9UQGJ13ftSfLJZ2MU8",
  "key26": "4fQpPe2P8ST5vFem6KubABmqXnjKH6t61sR3zyhwqyXf3A1jtPu9mMA33Q765UBb8kLkBcS8nCnH2qDpcN2rp2BS",
  "key27": "4RD7pCBbCrCc5TTya9t9asCNujZz76mt6bzpSWHo29TmqRMbECPypzGwEoHJ1w1QgNDncs1cGYfFKbAUsQJZxNdZ",
  "key28": "2hvjDHCg14fNSEaPwr9xCfXaMvCBGdUJMaoCRWNjs8DNFAhYynEpy73E8facMeE5rTyx1LZtPjJyRDYETBHtuy8M",
  "key29": "a8fDoMpPY2ZYLQ9vKEEkNnFfcQbNrYgJCEqchAEuFB6q7AKmVjn5vc1jwLXxsUpAqx8HSmicKBSsDpfNqRHXJpX",
  "key30": "56wdg5zXMoACgA4LgftesRS8aZY5zs8eh6yrkD85YYVcwxpVDQrpxbZQvyNupy2TJ7imUSko9d7jQEQgzW8uAEQD",
  "key31": "7BZgzAp5xM91Mwb4UqRVMmCaor6JfX1RAoU2v8jbsj1CZbvxcggBZB4R2zYAiE6F9KgmFtsACv1vRKZ81fo2j7Y",
  "key32": "2QMm1uLRTQbmCjtwA1qLfbQ6FtcY5hKuWhMmfVhB4dgeoCZqS3dXhF1HuUjwm1ZSozEX8beK8tvzCNjAK4ei2rEk",
  "key33": "22RKzXdD74Qw41mEQMgVzJrSS9LVUJcBgpoMjifREmKo4RSsNjQVimzySBtgZvJCjeg2546Xw4M5D1aJTHMgDeA5",
  "key34": "5K5LSzQgCZjc1u4iBN1UKmGC8ZGrRnRy3rpfo4qu4mTeecbVifyrVb3pF46hZefoNnNU13W3ttNeAqAwFHjyj1Dt",
  "key35": "3EY81inJnrRUBeZFGKkgjA5YSqp7fv3VFTk53YAENirTugLNMvQL2EKY1ikcKxk3r5N6BXXrL6WzDavvr6kss2cB",
  "key36": "4etQdZyM3kY3FcwtXU35FzqWdg4ncbx1mPkMMQykVM7oBtKjN62FecVfUgKBccFTfkL7W37Dp6tcECg3YHYkcQKL",
  "key37": "2XRz6teiPYT8kUbxUNSHtSCh98LeUzCuhVEv8pDuLKqHcy37FbeVa6caCh7PYbDxSsYxfRJNmW48AxWnmtn1UuFE",
  "key38": "5JwqtZY13okcVAujntSkA2ZqohAKQVAgAzE4yLRfNJ9Ez86AKfjvGi6pnCmwSRbe3dCEk3pbZKWkvr5CmkmHZ6Ew",
  "key39": "5uRVUyVYhj1YFc9n76wwztpfp5v7XSgMXsj187s8yhquyt4EM46aQqwCMXnaH1girZLr8P9qcBfeTAudUFexPnbT",
  "key40": "3YA6YaVzSLUzxFxFqVDQfHomV3hiPm4Z1HUXSB4XtKVLUiZYLMnVm8YLzyeFcEzS85A4mVBzeQfLUj2JGwCBfFF7",
  "key41": "5SfePjHGkeEdd3sJ8L6devNDRGEMKh9WkSNNEk6unXyEcbJeFtNgLfupBgjjkHbisZVJCPcgP9f61oUAeuJGzEt5"
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
