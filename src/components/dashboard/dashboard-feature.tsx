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
    "37pMu9ckVgQjME7Kd89WP8r798XXa8vNAiFmNRYjLKJ8t3qkoGF8wD4dVNpKrocksB1ppAeo1PZvxdiZSNcjsDUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625cmZ3hsqaM7CLV3uGQMdWNPtADnd5DNmAwnQArct5tJQeUrV1Xzqqxo7a9LKbNJ2djK8niQ7qvkV9BYADpTe5E",
  "key1": "3FQSG5uYfYaDvtwAGMk8iBh69WERxYwJPGf7PFx7Wj3HqdqnyNwMy3XxDS8u9x1WqunK9a1rguCBP1x16JLGGLK5",
  "key2": "29VKviP9CJknMtyn92ay959DkkzbW6iqDqrYZUe82StGs6DDhWY2fgxcUjKGzAxfZAjxpypReRpyFvN3iHD12SEN",
  "key3": "4sYsZNLr7PdTW6hadFfKiMMpeCRdGmX2tHs7rYhRdWgcUu1zxPzAw9naQimS5L8ZE2pr7hfRaCCdSuXsVwK76FU5",
  "key4": "2vJpPJYcHP4SHsaT5jmK3YhCM1x3SAyUSMkKMnpBfDX9M3YCTrSkq8RE1yAcprYi6Rk3mXWxqgAzU9FynMrFpqtk",
  "key5": "28vwNa4z7bEVX2E1keecUkmF5gXcyhy5Kk4GKJ4wyjiA9kBY9DLiSusWKtP6WvcyieSXHTBJ97zjccgYJbinDkEp",
  "key6": "5gGTnXJ12LPznmJrz5YU7K9P4bz4WHf9FkzCckkPhuhRmBMdMHTgyH47o7JLb61hCY2wbVB659oj1oAaFGsmjXf5",
  "key7": "5KPswXxG25DjYmwKmLMYWrmYBAsoCgEwaDCdKUmSJcnZFsANJ3dbeNXAfj1rzFa8Lyuo2o2YY4Zpqhsqj3Usfwbu",
  "key8": "4QWUXu9AoxX81dswndbctiSbz6xGLMiBNwkUR9g6tLhQrVj1U7AQGrs5R31Rm1ttqQmuv5ovkXX7MTuDSTuKhEW8",
  "key9": "4N1UGrs6KgjpMiF6aVEMEhecvxt5b2pYkwWvDc1CX87kxa1vEtyCSFLc7csMzR9MmTSRwH1XY9REwHoQR4qYgcwY",
  "key10": "44JJQbGtLJV1TpUeNqN87FiYeLVV6Y31U4FznQewTJoNEJ8EyAUFshCEsS6vKTZtUjrt4MxJbQyNea74rQUsHLda",
  "key11": "5xntUAtCjK6MC5QPvFJbf8jdmDPsEY8NfCaEdCLFMBHufHb6WMov1TfEmNXa1VJePfJ35XayEYrhitVJgg5DXSva",
  "key12": "AYy1tkBnc6ET7CNQSBBfgWqFADrNQRvH4QLkjdNNozvKEnTj1q8VyXiyV1YwNtozuKBDxBVmdvjxMF7KmT17n9z",
  "key13": "38VegHmhi8BZhoRirz1NkkDhZxdjpDxr4SDi6k1QvLUN6iA6JngeuYjnPmG7eotWvwGmDGidJ4Xrh13cPCKjMnqS",
  "key14": "3AKkojofKFH7zevnbimUqz7xWeudLV1grd5oKEw1n3C6VYkdGASAts1eVnX1bNamhgUKvX1JG3ncWwoDQBDth2iR",
  "key15": "43s5EffamHFn99HgCsa8mhkwxUXFphhTDX1abPi6KeKSLEBnGhhcv1owfCx5f3LQQ3eaiv6guJ3Sa8wFMpvZAJcz",
  "key16": "5JCzRscWKw6YTSd8tPdeUrjgBrXiNX3hqJkVkBmTRR2TiDGAowG7seVzJyGmBPmE9xQ4kqT8faARbSQ7qJJczAk9",
  "key17": "3kdXwbAcyvm4ckz5Xdks7SBEoq86sUsXzWdLZFHWTr9Z39Lrn6X7a5PFbN2SHCN5U8JE9sinSsJ3TtLtsVcN6Mso",
  "key18": "63uxThAA9jx9ucFJ5AwHwKFhwjWdbisKV3gvMDMND2p1q7atE7AVNbwB7HRXaLt2oRCapbCU1JGW1JcvLY86VEED",
  "key19": "dwwX8RTpFxm1iJSfGrHdvEM2aHsZdfX1WkHHpYLSrSQTj4GMexjVZschkKHGecnN3SNxCzYQ3GcfibnJV3Q6iTP",
  "key20": "3x3batEeD7KGLKFYB6CXu135qqEs7ajXiZ7yVP4CQJz2fJqDsjANeqU6p8CQ7dwyYJFybYFqSZYJR81fe2wdyCUc",
  "key21": "2A8ozUNEXKS2eZfVi69anxxBJ6dR4UrMnZu22QwtejbSTfjVdP5rceQbHFH5Dt6YoMbNfpEaE2cnVegXNF781FGZ",
  "key22": "4j9BDGquVjUVoMpgLQJdLCtbtCimNJfeThzNEwCRHNmACbnqd3ZWfvHpmGqHFQmDPPyJKXQfnHaoNMpyiV7AJQ6G",
  "key23": "62kRkaJC1yn6vZSjkWNBcD4gzqHvAFuKL5bu7ftrtemkQ5VjYpysihbnMCjxQZoiEtDmec9G6PvFqovM7EzpoYwk",
  "key24": "3YPXsJzvjRV7qAEjKz1scdoTj7EowkjEpuxZpNQf9hBmpZHVLtJ8SESuzny8eNEV3rSvPLCEajTv3fkQNvmhp3rw",
  "key25": "4Lk1vRZUNZihWpaxvc7XyWz8QByi1FrnmRQqcFikepwdKZ6STMZGSfJvKzh6Ap2cxKfC1H7vyR4EJRhvMFTBHKaL",
  "key26": "63LfPyHZRN1zz3VPG1NU8LaxUe526vWQnHwxwqcqWQDRYttSnMToz4gZ8w9NGstDEMsWaeqwVzEycj6dP2hESrtm",
  "key27": "ycLSh3KggvwTjaX3U5T6e1jQftZ9E1AjzXekJGY6JKGaYP1zbvtKKzL16SvuNCsDjMQLBuY6vrDLQGhKEGN2pgy",
  "key28": "gWr7fkGcWHFJvbc1FAyDmdJxvFqd8fPxNNmQyE8hGVTcLzL2UVUNGi1o4JTTRAGfPjPoQkzrycnbLq1zSh4Pwaj",
  "key29": "3wKFiNgeCgBSjN1SY38pQ2jTmSCLikwj2DMRuUBXJtRxLbSziqdXSXZc3z2Wm47WPSEVb2XTR9oGe81Y9akfATvK",
  "key30": "pMvQY2jmBpWE9EtYkW2MxijQDURYfFUSJGYmoDEbvwTqBduewL9s7ipSghiHMfPCfBVK6zX7taGWmy3fQgYC1ib",
  "key31": "3KjsrdPN8o6P3da9erwXR5F3dWKRCDy46TG3Bn3pp6iroTiPqkS2YAVJrTKuwre2QmPsW4Lv9ubrunE8SYdgQ37v",
  "key32": "23N99AvMuQnEvBS2m3jBGiKvx9o1LqraW7VQZ5q6fTrdFbfAvAAqhoyf8JyxeTX3QDT19HibQnv7MPgPpZJ7r5tJ",
  "key33": "5aKrkM7eLLymEmGATDvsa16cEe9RRvtDQ5qjqJkbos8z7p4ZAbywMmytMJTTiuhhnwhjUutip3wNYVUHLbv1JBMt",
  "key34": "epLy2i4CuusadsC9PNKswiM5UsbW8LHuFzn4HkRbvpFEPK72NzbPQpKuBJukqinKpD8ZDvhHQuG9TqkbcjUAjJe",
  "key35": "5f54tXHiZJuTuxAQegPSwJ8HLkBmXNEdavX6fw2vkjrQ3GWYJRQzwD9KVfUorqdcnvdthwsaU696uAGySf4B4TiW",
  "key36": "4LNzEoUH3F7nmCgKW9tPxnesWtHSJzRYP7hS3pyzzvFUhKbNJwoA5J5eeUVf8sakbUr1DK1ncKLqy3wvWtsBX4JA",
  "key37": "4kbqofQdXnQFz5F3hQzUPsoigp2MEiLqSVH7xRh3AMrZwjP28ay6612MntkpPxxhFGmyCvapt7XLyySbt8yzHuCL",
  "key38": "3HP86oEyAJKCJusJLFkdWXrYeR8W4UwfDoJ8Mo16ri6Agh7FPxueKT95mgcyED2RXptKLTCSUpVu4YqYXbQTU49s",
  "key39": "333HygnmaSzKh5L1c8y94PouoE4BQvuqpvPDSESjkFgaQFXVSWqHYeKDBumvcuJbRgjzLkVyJnvrLgzNCu2sk4f7",
  "key40": "4RfiDswr1NF9qy5vgFW1tMk1tN9Gq1pEEoc4UxiJNuZJrWhptQHiSQedNTV3wu5MVXs72j5eVyJ2LWpbX5xTpt5D",
  "key41": "3ZgZVXRUNMW9XmuLKihrdwM7VkW8CEQVwiY8CuRtXgekM77aCqSoUXzw8vYkA76WoM2hfbNm6mFYJGXvH62oZLUy",
  "key42": "4K6LHvK9cqGA91hrV3bFazs55f6Ke3Hbv1qvqz5xRTqgTw7MrKAci3ctoNJXTVaQDUPy3rusQDvyPZX9MGtNte4g",
  "key43": "5HM22Fn81WqPExi26XQGbVsXUMkn4b5SzhR7Yg4MpLWrbwQb92Eu6cS6u6wzFTzBxHvAzZUJjSr2La7FFneJvN6q",
  "key44": "4gu8jUN6FgJnj3p2SULqCcBwp8vRXcGsbFRdJnhj6gpSjSooa8MX2KF9H7r3gFiVTZqNWPNKZv4D32CMDe4eD9Sd"
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
