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
    "49ZMNALs8Vz619xL4H1eGkXRaZXg7TDK6ZMCTBMHK7wVqjU5S1MVf1Sn8m6t6u5PDHkm9Wa62jj4apVzo6fvwPmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaixJk5Ygi5ZB3y4oPgAw8S8NHRtYu1yXXdpX6nPu3bBWLJPGXrQG4ENNkGi2kNbsryADNBdv1WPebRSn3VMb8s",
  "key1": "5WE88FSRyvGaJwzj2ZcAuMoHCR7Fe5U4f4YvFjz16E1vmh7vjKnqVZxr7kkDYNaAeaSxUt25b8A5nJ5xi3mkMcHm",
  "key2": "2XgqTr3oreiFkB8mykTBXfuWPagGB8Ue7xueaZdNzt3bvNRL1fij62zB3Rk5sd2v9mmYWuHN8j93HqBAfHcE795b",
  "key3": "5pJtrdxMwhreCwjYhTA1CZjQKYNRvwUJWn9bjZRzv6M98WVSV6TfZb4RsNDFkru6Wup85QX4BzXwNGwGrLEFWnBu",
  "key4": "5uSEkZSdfCpg2NjcJhQL361q4SidmBWD1K7Nyh5W16a8JETJhsygfNQCCNSdjJNukcB7vzXx5g6JwjwrRURJhs3J",
  "key5": "2H9AeiqMcXtksdo9F2srjCgMX2uVgAB3cz6AFt7xcm6dPng3reuhpz8dfMCB4ogrxr1nibaNDk4cexb1kUo5irPQ",
  "key6": "4rS2FaqbfKWfjwpCtgsNva6iuNwaUJstQgR4Rge6f55dK82JA9kGkG3E2P3sdUzF8GngWr7HG7sjYdhDLjqjo74T",
  "key7": "5L4KSuiFFKQEBBGVkvHg2NfJMqcHZWLihFfSXMGJpMp1Yc4ZoKJ4wM8toK89F6HmfzPc9S9TEChbZASmYrg7sQkP",
  "key8": "39Ph1LrofxyDZKB9h7N6NZJ4gi9jhqLKfS4F6B7nMuPGN1jsRW3boyAvHQkMkkC5zNPjqme2y122bK3JyppmMPYv",
  "key9": "4X59nQgCzLbMT4gdMu65Zegmew597zumhLiz3b1DSNPPhkPhnsNAQY5j6XiFxWUfa43DUpgYamCBknkGL1JBt1ye",
  "key10": "3Xzb9JsN5BRSEXrDVtJ81tPPwwrEUVniNmbdaVgJEFQYaMWgtmkMcK3JFjy2FS9BqEacb6nH1XYAzJ19QDZNi2NF",
  "key11": "jSU2vg23sEsa6FYV1Ge7He8xKmfzRWTproyUTm9JAS5ANveVhUSnxiEzpYf2HkkJrkd2YDkHgsD6uXzeojs2TJi",
  "key12": "4gWKekNHATfLwt8HNbcqYoBKfJueubwTt2MRGosksYKRC4TCFiEUeWzBdSjAss2DJqjTWwvziBV9cToRFiniyuis",
  "key13": "274aK4MRYU3BNTCWV4Jfxq9sfAFfmLVXa8Nj6bcLxYinsrJZ9WCmZDqLJtJXQpxxqJULtgkmzSLzr5J6rebM7JBW",
  "key14": "38jNyjyWohn2qdDZMBRngSb5hGd8sAjpxc93buHtnzFo8JaL8KB977qiwi2BgoJZP2qgepYuyUHDNhp8KzNj8wz6",
  "key15": "5mQNMV2tsW8ddjzTLLsaCNdJkPnxtdmtxWuYXme9gp1GLP2GbmReQcsSMxboSA8KQvXPCrPUM4hvKGa1fyNDNdj5",
  "key16": "4ZF9H5b46npkzqbHyxcuqniYZjZmZNpUgvTHG8UZgZLJcxqcdkXcChXNMXo9J9Lwu6sXLWQghCghH9MxANhzem9u",
  "key17": "8NEB6YYCqfjiEMc853TZyoR1fuUVgryF2MPHRs8KXhW2yXpej4uoJ41kMzUg9cWxMgZPGwctgt2FWhHt8bENLtG",
  "key18": "64N9EQEijMucVZWRqtAKGLWdcHP9dNwspVfBpuc6suVoNgPfArofK6Nmg9yYKFbbvLVuGUo65QWhg2xULzjGZnVo",
  "key19": "2c7jKv4W7XKRk8KCYpiCFpx96voyVevBJmSWLHhZCGqRhUh3YNJFMRZvY2yYZ6p8z6CmiPr7Jf628DtZ2obnnq51",
  "key20": "4dc97ocddwZps4cc4f8ygZfsYiwB1ZwfADGQAhmdg5TTD3rAJcyZGFuAw6axmC7HHwDzNdBzXXW1A4JifMzLBKuU",
  "key21": "23qL9myry4a2k6c9bAShB89vP9oYqaabH9sKGL34iGxeqcRLQ2wbo3NAuDGQGqGHuzhGNRWEWq7hPFGSKxegyLqa",
  "key22": "5hirvhbcZbS8M365yNQmm4y1PTFcvNAMQ61QWX6tjsuMu13q18LA5qk2VuSAV9FNnazdRaQ94WegoKG1R7WndmbR",
  "key23": "BnbbnsTg7tseHhrm7ctS13xxsDqj5cdPfdq7vPG8WKBFsbMhS4QXc8zjEPnMFo9BjLd2gJJz6tJNjrQ1MDGwz6y",
  "key24": "2EqXbSVzBW2878FV4nur3stHgmv2d42ScsLxHTBu16k3cwuDYbJqvzGrgo9seBQp85wX1HqFhP9ZTW8PGcxMfQyz",
  "key25": "2S9n47bG8Erhc2T6MyGMVULpRg7CpJaZwWrrNqv31MFt7VCZFmokuNStwzzgDsHhHNEkUFUkzaTqEmiAyX1hPV3P",
  "key26": "2HSY7vzSsQzmG1AkYnfUCU5UqBvMg7rxL2skfRFkJWLfrPYAMr6poqK1rWQv4EwwCD6wqxZ1oj7YoNthaYGj5u3",
  "key27": "4YpFLKJbn6QNbtcktu7VRjt9VGoRoYHyvZ9eE1WDSiY3pDUeuWs7XxKiosVsDu7jVmSjKzx9bcqSp6xpZi1tWTsd",
  "key28": "5C2ATQ6XFQYsK6a18hFJUjHKatyvWnw1JZVYWbBDzXVxdk8EUJDfbMYHXhppLfBjvUj7VrYKU18s7S5Pa571U5z4",
  "key29": "yHeaWaYu6Hxt7Z7ZbGyUr14u1L9ix1wDoKinhGsH9CkH4cu7tbUNxNDMVHpbXaeoWjKtBPCtcgm4AN33kmVdwCc",
  "key30": "4WydFc8Pm6R7TWwXFFmyadqfQhvVEer3DuueR3XUw1C3QGuCXku9uGhXXbSKvBTrnpTvqiuyNKNpGB4tX3SojVh1",
  "key31": "3ws9gZQp6APsvpUT32gjMHrVyb9RCiuwvwikGoBDtE38ViBksifj5w1i4dYRUcQ2RCW8oCf3ar7D8awtBd7XWJMG",
  "key32": "4WrXFSS1CSNpforsMYoztyh8qX5uiSWLXE8HaiSZJDPwmKbioZYnKZiRCWjwvk3UDwguwKjVHL76x9EmrxHRznDb",
  "key33": "XkNHALcYRQp25oLy6LuZB17Sz1w3wsL9CqWj7hP4nytPv7s7q1YvzcmAmehaMQSsZzPRYbQtVEJRu7oB7nFzg8R",
  "key34": "4aotbvyBg7eaTGWnCZpWv6LYfZgLwgCkshKSsSS6UyYdwpEHo3H1WDQRqf3nNpSnfQU2DSj4fAFeH3a8SCThJWuF",
  "key35": "33FboxUmqLg8mwDSZtqPsXqYhkuryRitfGh5mKkRP9LWtpYhDoZx4tn1wCXguPG9zy1FZTv4sEZ3niK18pSrZAFN",
  "key36": "4gHro3yPiDsTHrp2FpnmPx3kqc2ai4Q4reQqpww38qjhs3kGcAQr8kePHh5FZyEXg3Y8CRcbdQCp7CzSBnSqbSWr",
  "key37": "2HuYeFteKugwqGWGLzrAeyMvDpNbppx8UKv6G4g3RY5MJ9HaPs56retoEEcGwT1dCawNaZxcU5bQRecLnoNxjMJn",
  "key38": "4rzSsxbgxrkJkuwf3UitZ2AXe4egjkbBzcoQQdxaV8zZjqLWYXKHKvzx2gxBGqEyomBjBdZ2pYxu1C1g11UUsxBd",
  "key39": "3YvA3dzbGoFE7Gzw5cKQHFSSkwKM49M4A7vyP1kxeAzDfkze1GoYuA4Mamw49zSx5mMmysw8rvbJv1nZu32ggZwu",
  "key40": "5RLsJgPPdLw9oyD8h1eHFY4kBTxenPT5mPcUxzC5Diwp2MQ6RFYTFUM6krmzhVkgzDLXZVE5TBAQpuBeRwHLBE6t",
  "key41": "4izAd4pFNmcftZqWbCTaiXqd5eCzpkacqxtyLx6qjQBUgBnn86FdaoqFbaNgTM5bKurrbgMjS9QbRBNRkRj2666v",
  "key42": "6371NapxUMfgniePbAi79LZBZocm1wvgKZEGQcy8vtVyn77gQtzPSFEGPTDFZnzLfqVYtSL3sGBVztM9RgCo8gko",
  "key43": "5cwiZi1Dp4ZUjH9zjjNQnzAs37qPKD373JpfEoxjhu4oDuheftHQQr2kRMpgYTeFcwxfebDkT5mJ686SRKFsBaQp",
  "key44": "4dVJbeWWMhwTQhBxuQTFcC9f9kViywWxVyrWULVprGrL9mbuZuadcc1nRouH5fhPjMeZ2bUbDbaSPxfWwvWe22LX",
  "key45": "5BAaiFv7bwLiSeDkpzwDquyoH7MRDjB3DxcN1UyHpdcsSU2Jv8QywDc7oq3fKkxxsNRz6orRGPmjuyhnjn1BezxL",
  "key46": "3Za8EoNoGFWZuJv7UE4YSjnTLq3nGNQxxgRiAuv8gZWvVCWCvPW184JCWdqUVTTYB84SSDYNyYMBEhXCGbMvj7be",
  "key47": "4yhuHNpEeomQGYsYgrstGgqMaBMpd2FneZkxPhsUvp82wi7rqKXRyMViZi5MYkQsbjXQvXBVripaN7LwGWx2yjFs"
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
