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
    "24Nz36GUSWQnquYggzzHufgDt714iqo3puN9VjvW7QZKvk7ZbJuoksWjWQWDFUPLHsqU89CTckvH6qCP6KWCSMK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rs4x1ecnbB2fWCc7d3hBnSHDvHDQbytTZ2CYWx2VsuaBhATRszDBH5tNQpUqnuTo2SW8yTJfrVNKE2phJtYU928",
  "key1": "5imDaDheUM8adP5f2yFzy839ddK8SQu2SC7hFEziTp81eaHpLSzdAKyQV2eBe7ewNfLAcgidBcUkutdXJP7TcX5R",
  "key2": "2ZAXSvixxFpSmM5ge3N81oR4D6hYqWs4tqAsftT2y8pAk3JyDuFBn9pJztcGDxqErUNhWza8N7bCtSXBexCLr5XS",
  "key3": "3mcod4Q83Es8fpRmZ648mKs3uVvMsMAE5BS7jzXJqeKEvcMZ29VeN38hSeoBim3TCtBV8B1GhW36dBXMBDxx7J75",
  "key4": "Nf8v9j7VC1G2GsVcpXcpMcDkxTNr33CKYvaNoDAWG24bZUBXExYaX7Vu7JyzXof7gLVt2rV4cxQeiJSG6dRri5z",
  "key5": "5PGtQZEf9u54GetnpmY4NJvWPPtbi4nijPUxDGtutXj6WfWd4CSRqruFotiPS12JPv1P7awNG9GXLGmy3cMnwFNg",
  "key6": "4f5DzGpVD4YhqEmZ3aagS55sZAXJ1yEC8k14kefBF6zsuxZw7akCTjCHvaJDcbDWiAZ9vmSWvMtHbdq9MCFJNZgq",
  "key7": "4imuzqBNKZbqMRR6jAzdQ2hxXYQXUdvWAfpvdoxrUecsENqU4ix2cCKJP5zchwKcVUcf5JeEcj4ymmxrysxrmqhP",
  "key8": "4XSGjVbmJSgSQngHbeJxxCPbsNRyjfeEymP3E4oZvpcGC1nQbTKsdmf9Deennt9JkfDGz7m87JgDYBkCiDtZDen2",
  "key9": "4sd7ZTixuVVUNdsFU1E6J4KMce5oKVuVhPk7wz5P3C7SZRwY2JFpSzbsHnHArPgJwvhkpU26Uuwau9Wrrm36Qj95",
  "key10": "2g9VjnnR7K7WYwYTG9ZNSiGQWYPaPGrZ5gqjo1ZSpVa8P2NoH8y185U8xAaP2togxUCW43XaKjSZuucCFUbXtruJ",
  "key11": "5aaDrcY9cFxUXbxcGu1YUzcqZo5nsTXjAVgaHirym7E5ecVbgwEgkEFAQ6SLEPdhNDRcKqmvS8TMkiiqsLyxtu7q",
  "key12": "jcUy7yDf8X4Kkp7T5yY1XLY3FEDr26wzDezmPdnzrbJim25a9guHAALDUqYGmP2W1S2t5pf9iYoempqNJp311bb",
  "key13": "2BjMySF4Dibf2R1tT18euzSsfdtYHG3RDHzuLyh1E2Xd62mJWpwwMKpyXRvL4Z5TGz5ucfDv8We5yUjX4UhVv9k9",
  "key14": "2t9rJzLYmFJKXvPMHk4SpUd1Z7kUCbRf6f5CVHkE1Y9fVkXhGD1PTnpQHbQ7juVEyH5ckWQ7Q4ant3Fj9s56FWKi",
  "key15": "5TyGRV6TGEEoTJWrUPUftCMn8Ak6ER3Jb4XgPwbujQYrxKQmGRB6FKjLP6CPRpzipEoFqP6FoijCR2cvyQZUTAZr",
  "key16": "18DPvQQHyRDJEJepFJJM5d1BUbHp6YxWF1EhnoLpycAHzD4c2UAMS8JFT4BTDCQBzhXrQYvUS8FSjXtR735SqsY",
  "key17": "26prjk3TfGAn9DSD3BZdHRabVjtb5fW6Cur7vi3krYj7pJQfsJKm9fzWHLFYKGoW65rvPHqXiqH2zfbMP19odyqP",
  "key18": "7JzTQd6HRzAwoP2j6mDA4XMKHh6urC9zHhejky8DXNyq2mB531x2GVUW2P9wmfAWypQj1YJ1x6VfrHzym2vRMJC",
  "key19": "hx4tkY7gEby4zneFXoUwhshq3ahjihiDmyVMAVtJKx2uq5VP9Lpe5FYFxdZWTrRqJbQsF9N4eP8eXomqqxLD8Yw",
  "key20": "3Dv3z4C3JQzVxb2TfMCdU1sX8MUfjiHB1HQbNfGz9uZGJEUJZVtWoyW3ayHmEMCKs2G1fQxFbwGHhPzFzxcAgKq8",
  "key21": "4kHrK4ThLK25xFCZqSqZPGzBHGv4KjtPTa57KLxkDvUmzFGabY3zf5B6Q3JtYXCNSvuu4EzhYPaCTxLHBxKwhZhW",
  "key22": "4CpvmUMYMUuMU1zqMbZXNY97DsTWr3ArD1YHNqiJ3TVHmjdMaieaedfsHKLseFikDQzgpNMHAhh1k6m666aq9LZQ",
  "key23": "58GNM18PpMb7K7MfCQecR7XmJW9VseAUgMx68cNbhzhdjNVcgdoTDa11qNLyScRagRtrTYjwzfzfj9j6gZwPZULZ",
  "key24": "4A45v3DQtodPqbQpotAJat9N7MqfeED4jbXS24z3huRuxvQgUPgDWjDp7W4xqQt4nbiU92tm2NvFkCKxcG2icWXf",
  "key25": "4f34XAka9hcFu5jV9RdUyfC2W2esgC7kKC13tB5ckcmWdo8iULJYq2tFNawbN2XGf3J5zQVTdisN3A13X3hpNdcS",
  "key26": "56UK57oKjV5SLcmiLgsmZgqfNapDMHVvv97ndNX8rBKTUZB8f78FQQhvuchowRfXL53W3WqYC4bjvB1RHH8SQGvj",
  "key27": "5VQHc1VsBbbzSxDsNjVSUgJrsRA7NTA7skD2U9XGxqH18R9sU1Lw9gXsxGdc31i1CbRtufX4YrieJodejgv6V3QT",
  "key28": "3QGZMGojmyBPFJAqNXpD122ZMgvUc9a41xjDAqe7w3V2UiPf2iJ1a1LLH3yDdGKy3vAPAcwMGLcyR16V1Zp9xke5",
  "key29": "5iAgdb88aYNDEAXpBHyTj76hKDQ3CMqrFGQ5kFV3siVeM2JnreYWywBAJDFh14QV3xc1CaoYc8kG2f3y5RFP4Axb",
  "key30": "4ddxYMbwv9ztNHGKKPNeEsSpJgBVMsfQmU5qdVDruSUXpPTmxd3Y7L4WgKS4Huzcntd3f5Y4miBm34gg1sAC9LMt",
  "key31": "2rzP7qqvGHnLawRFRfCFfzmTXXMFurWWx2ddtt5Q9sTQ9YdwG2RpGxT1xP3BAYbs3N8x3e693mqK9qhXpnjakQTo",
  "key32": "3jh59wJLPqVYz3SJ6Rhg9S6Wen1iwLX3jPQRPN62LFXtLCW3wJgeBktRbBMZqFqWvNRyqSBq7JfihGGxaf19NnEQ",
  "key33": "3oaZoTJBPfHHfXeKAh4AB9mxrKXGoQiHqQrePJBQGNFUD74gTeMdjTxkzo6wafYUNbgbUjGr1sZ4Mtsr4aqZdiMY",
  "key34": "56UrHoW45goTkVgtk8YT9uyVXCDqgCJeSDvnTB7HGg94A85L2dbzWVYYrodZbJA16aoVY9P518QB2b1GNsoUXLZj",
  "key35": "utWeRFYKAZk1diCyLewausZfs1FTbANShkbahB59KJiSTfiwYW5A3MqdXhDA1iMxkJtbvmdtYdn774ezV2d5Gon",
  "key36": "2MkH4XPiXuEDWiKFcJBSvLzzcBSwbyht9WgAnc3zrhdvYuJZXuCK5BYHaPreuxPFcp1uREN3c62BTzNjD1KcK5cS",
  "key37": "4Lo93W7kmQyUT62aVik75GSRVBcKyceVKg5xvrfujL1445nfhZkaqaBnwewF3UoLvJvNVxywjwMF54KtSxkwjj1j",
  "key38": "5XNhkpofWn3a8eNuciqLH7iGjQikbwmQVGSXqZiPFkXVCzKanbTThcRfReKz1EgedtE5VZZnaawjARdJNwfrnsms",
  "key39": "2g5ndCPhyYtNi1KrBWw4J4rnfdbZ8UdZFYSM1cFU89Ft3NqUNk1wbfDSqXwMAx3K2WaNzqocYJkDsFfNsXYGGQzt",
  "key40": "5MH4zZzeDtfm3BDptu6g5VudHbVxVmQaWRJTtW2ZbpcZAh7ug5jAwEjNAhHY4SrSa8jAS9aQimv7u1X9ZZpdnZY1",
  "key41": "29Gjf5UyqtUht9GowmbgW4saLKkCG1cmvcLPH4iX9oAQMyXXoSCrMBMKeYpNBGSLKyitPw5vZ6Jxr6SUxVBuiMtH",
  "key42": "3FWgpEGJK58Wa3DcgYjd5mUVBRw3e5iPDyTkjcKmKQpi18aWcSf2rXhjC5FSnphkv68LGTMvWvJy6L4ePFbFfNSw",
  "key43": "3176dKNJ9drQJG1DrA85MaeWvaoe8zQk1BWERkjG3jorno1sCzjNz5eA3jdDenMhfvvSZA9gy4moaMVSpLx7vewV"
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
