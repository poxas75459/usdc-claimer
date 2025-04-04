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
    "34adcx8MHfDY4HfZiwcoJRis9kSqFPNx15DFPGwEHnTuqVLrUCPVWAX3GxPwUSQ8C8k8Bbg34rVsvsTHbXtmr4Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkJXBhDQLYEZqNV9WXy65G2UvM2VfuSR8M41TTs1tsZ2uHjNwpC4pgT7RxAgqNsCmYimumXNdGhy76qtZdiVRkK",
  "key1": "3JxhsgTWBHis8PEoBo4dUaR7iZoqBT7wTFqHMShegq5c1NR9uKggCRVxfXrMvqP4C7fEjgZdsF19MH6NJJT2bENZ",
  "key2": "5Bh8NWk6b4cYSKxb5U9uHQ2djZqRheh5Wt594X3gguyfQghSEDAL4uFpcwtG7R2y7TDXdJX8ESet5ZnswBUD18uu",
  "key3": "2UqH2tpZCtAacEfCEkbzomajCCqnniM1kAZ4BjA4vAivZvokvpFGa3e2t68Rr8ZMqjDV9guTaG3YujqPvpshd98N",
  "key4": "28FzDzfU7Wu9cJbmw4QN8zHHo8W9szCVtW7r3cTVTKjFScmhywLrhY16F2nKR1t713o83MmGrTLJ1CDEsbNUvy46",
  "key5": "C2m9FTJKxiUev4r5B45L9aViXQLyEznTYiaSocsVtMgVMp84b7bSWvdQkeWXE826inVHLsyrtBDpBsQnDG5RqT7",
  "key6": "3c3PnWMEnppxvMP6JhUegjqYK7xc6HmJufakaaK9oP5zr5bLs4dV6FXcyYvmBPWHbxZg9aEQ5oa4RrhPPNyfWeiq",
  "key7": "4tVzV6yNhYbeyJXCmRufmJEhaufAdQ7qmHVrrcTS5ea9pmZmxV23EW2N24k7GQiuJ27VwxxewMdEKmkUz7xjVSMe",
  "key8": "3TD63zh4oLeDnwtnp2ShhMQigDiuMpuLPskv9vFH5ji7Q8SxzSwSuAip6YTTgPg9vzYRExsCQreqi5VgjzAxpRqb",
  "key9": "2ZDPCFd4LiGQJRVmF3YdTK5K6aKimPonA6UNziEEnrvfNwye5A2t9KqR5B3Ssv2dpiLexVMuceBXHKgHMMeg3fte",
  "key10": "5iJhU8uEGC563EufhXXoyE8d6BqdLqvpgymhNup49eeYsgkmvspDZSX3f75VG6W732fGLTJPJAbNn2nThpsezYFx",
  "key11": "CNLMSUi9B4GFXpSHZ7pQurw1RjKeFdPfBhUq1Th4P2tDVQZFHCLFnSPRjETHnfKYY1XuHXuvUZoJiuPHSfUaku3",
  "key12": "4uPX8WWoCnEfhc4vCTzxwByL1yzBfrcmB4AoVod5THQca3uN9Y5tYDa4RKqvwcVd6CFZq2yM4dRMAQNVgvHiBnP8",
  "key13": "48bqRxKD3Jh3XeHkaPKFp1ng53taqRvHdbszu1ggoMSqmX5M9yLi8dvJ7zPBVE9J22s5YjitXVaJfGHWdjEDLuYX",
  "key14": "AriKNW6BjGCojsQghbghXbMykdszogNJDDeMwLrAb12SPFRu7yZsQizbg7bKHGCsZLrzaEvyMDq3hXpEP1h8EPq",
  "key15": "nJM7CjknQKrCChGNspfqi7JkMQMkoSn9SEoCaCTxDz8AQ5sfbVQBS2HEkpkgXAy8yfRQhbGBQtcPiLYfpLKN1og",
  "key16": "5psiMh7vtjyKBC5V6xrRkYFpy5oJoJAS4TLGwBDM8P7k5tVL2Yt2XeF7yQfgTVmgvoxsyg9e5Mv7BR2zAt8yvyfX",
  "key17": "4g16wdgKx1goGpPXuB91J7iEZULJpTrmeTi2eP1vHCFLUbBu8XGRFBN9NR3QuyueEJLNtrZYFLeYRkqSoTR7t3zE",
  "key18": "3iMWW6LjbKrokJ2cB1iS5gBi43Ld3qWddhGMpxcARQHQVM3smECZ2yjZLfXieGsk5YXojfTb1kqtNrb7prTgwHDk",
  "key19": "3feMyXfUkv2Bxa8LzUnghAZnTWjDmWAY8WpNu71KN4uKFXUEHopsHT3SyX2zVa4cYKBNmEMDTq374t5pCvSrngUd",
  "key20": "T3vJcXQ231JpJ5ydZfrDJiv8FisTULAhainWFUdc33Gz8zf6KmBge5E7XwsMaahWVmrB6cJWqGFizBncJL84Tse",
  "key21": "51GZUdtG9yXbdyD8oVtQqKAXQ1SgNXoUaG2b4rJvRJFppvqkiFSbf5vafgQ5GjJxEQY7LCCBkHsKNYU7bZ1d9Yvt",
  "key22": "4FbXLLKzBb3ECjgMZdwtfYZ4Decc83Jxpzm36JtaKdCBH9q4U94NSwDf1AWtgjvMThyGSqJNzxy2XWZU5QRYuFzg",
  "key23": "nQeFK6d81orKb2Lbu6N4s5BDnTuVQATjsmkkCCQ4mb2mTv7p5ZdwUd1zPwoqrUBo6vwTr1m7QgxdnLq45CgpeiJ",
  "key24": "4EK12bNaXih4uJ278fvux2hzu2FVmMfXTL63pgCk2nvapyuuFsMpiEZYqFvQpFwPatWBXgt7CBQyk6mxDj4Ctp2z",
  "key25": "57rZJNpCPEP15ibYnczNpCTmqi95fBVnKMxyMGY1JxzScF3riGJy8WfbPixeNjvx6qCtZrG9VS2xqrAQB8cmY2iK",
  "key26": "3r2y1YfX1mYuzWbYKiRHYF183FybDBf8YMEJXHJ4gfCooYZc58cZxwMeYdQEnTM82xABsfN2Xd7q7iPyMx89wyaL",
  "key27": "2TPbAA7iGrPmYVBqQxmHCLVt7Ee17kGb2RnLSvhs8XibKuGLPj76Riw3KchhUZF7VzjbqTn4jomHn9hs4jqhTfhi",
  "key28": "66U5ZxsKeLfvnAhzFff5Up6W8CYiqPVVVkNvrCiPC88ZbEQZXa5mLUWojNoEKSVnuAiQxTmorPJfr8QnzzEytGAj",
  "key29": "3XsnWKDUAemiChhnj18bqjTi81ZxRj3e8pi5zQukVHBP65BnJMjRXxgwedfHYGsWdVS64UKp2Vh5NKxkfKXQi54E",
  "key30": "5njDeMcktwsr1TLVdxDqmTdbm7gRDmL8y1j2zMv2eqyT1VQs56Ym5x5eEfU6A8B8vHyjDdNmADkJohxkN1JZsXUV",
  "key31": "2THoghMxtoAnxti2kx5c2gaeCEZDKGtkdVtWrbiNgin4yr8FequVEnhtTxq2ftDmrmqxbqFFGuq7pXmdgNfbkgxZ",
  "key32": "4AahADJhzc8xoRdpYEmqQRNViCVYiuL4FhZbQntvEk6Wy1gsWPn9tvbuMn2dZASMgjMazpFHx2d1SJLqZQKvia2c",
  "key33": "2EMXMBj95Fvk2f9dUHqMC4pGmUTWDKQKWhmXzZnJZFGgZoKAbEadXXHzkAMRnNgsGd7B5fDVnJUagE8jZFosoREi",
  "key34": "mvMcgfAHo68tBU9WX7PoLxM6RjSAfdJpDkXi5TfzXWZVcV8d5nDnAqaCiHHBPHDuC8W7C2wWUPb8AKxERxM2hbo",
  "key35": "5onsBQyHdrbNgZ3Y8tgNsEBEbuEifPQTFScmKrQRvfArxUTxmmRf92V31YmTp9tg16YpPHBC9H4RLbDGtyg9F8pE",
  "key36": "3cdnR83rEFf8Z91rgqdkhXQRQeHJvBxRmDET6bjCWCCHN1RdG4YYpAd53Rt3kUxy6mJgkMDHh8BPc5ztrV6qZdFV",
  "key37": "46WWt2bmeFe2wuxa9UbF7jTtCTz3RCiCzriUvCgbLw8t3AUJJZDA71wNEFGaD7r6ywS4sMP6tqYzZNHQvN9umASM",
  "key38": "66ajTz3B4BNVNoXRUEaJJbCLvR6aArr8oozdq7uDYPNJ2Joqyi1DE8988u4xzBkZGPAqPXmgfNuqiuthscZH8hti",
  "key39": "bQd8uJuhf5PQQPcJXv8UXNrgsu8pp2JKwkXVKU6PpSnWGGGYQQJ6oGhnCcmsDvDNT1pQFAJT2WL8rGt2ee7sVT3"
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
