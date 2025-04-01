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
    "22jr3uQ9WgYjdBddStTQLATXNuiuNkFGg86Hfs8QFweNWSHJZzMRuifbW19GYMpDCifDA1KycBdnpqthGCe9UvDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJvRWNEGKJu2oYZz8kQCeKRhYawqKLUoqXjDpLqN1hctkn7kzgLoNLa4g8ZXn6pTcVRtAmpvvAcafRnLctYYdJF",
  "key1": "gXHKqMMoxPKMjJH8DVGMWuvJgKBt6vigSw1cc1kFFKCFysGoBTcpBNFmujz88Qeo4m5JzXw1ULH1HxLG7g7T6xA",
  "key2": "DZiYekhgL29wJePX1MSU6kriR3vQGSUp5PaJqsbpNTdxJ5oUoKPQMzUpnXTfkDPZdFrbWmwRBgUDbvY8F2x8Zfh",
  "key3": "56epxMgukQhS7GDzTmtU5w7WXmrreAFMMv25bEPVRnH747UL6wB2Nh9n6RUeEnaqSmRTUELMj7doDGhFk3SVDGEg",
  "key4": "3DHfJcxBhNfxabvk6wTZADu1y9jNWVJZDhAwDCYBbKgft4YjqXMEHfCHy9cu49JTYabKZcENeiTbVgbP9jEzXRz6",
  "key5": "2xcjJcwZU2JGufjmyjzpGmCKqwpDLHe3SCQATuzLSmzyzv2kRoZeMoE288rsCwNTATUr5Jtz83mmjL9dWjjV9AQn",
  "key6": "5GzcjwSnULFoibAuYzZpLJNf26wv2wC8sDH6d8Ntsvpv6RvnZNaeyj7JtniU2p92u8C5N4KsCp5jFCpCfatq2VC9",
  "key7": "3cLfnc8j8eCAS5LhnxGdSgpFPYCdQPxnCsGLCTaYmJmJvdNQywgyTYhAbSNtN2qMZ3w6dgrE81t3tB5YB2dRiQV6",
  "key8": "2vy7fFXBoVR4eDVuXnvbKo22GXCmkJJW7uF36gbV8cvaUA9v8CLUdm1q5pbtYxz3YsVd5dFrKjdWUE7eXvhtu9Mq",
  "key9": "4awmX9TqXpNSr1uysPSAYBZcbwRh3aZB6yjXtdaZrXRX126eJuToWP7eRkkdtUJu5hsYSVCTR7pDZRo38CWJ5C8y",
  "key10": "4U2GcfaL6dgdUDCi5ptGJBtoMacThxC8z39a8hWdBNBjo6nxaYvsNss6GmeRApqSnG9VQX355Mypy7KjMhPUuakZ",
  "key11": "65XEaU4Sq8QuRh3G6kT5254MB9VocqvCLV9gA1yvzUSV8rB4cSsCJfFMhMvGLZt3gZf6NLS9X92wfG37P2deqALZ",
  "key12": "4jaHJ59jEc6cpfa8ic1R9iVt3FyDpw5p8CLziGR9rujNLDBuXeGetrASeC774FcTa8g85og3r8oT6Tnp2hgWqPVc",
  "key13": "3uuEYJQcvDy9Hj3u7Wx9nBVYccqfjYUnmcTuJZQNVxGpFoxxY71t1xSVbCN2j2ohRQPwq8vXWwChTTeQHmq4oZb8",
  "key14": "2RWDzyHctsBZLt9uZD4DKJ4HsQapBsqq64s43cjHuyuVi7akPtSAhQWPjYFpikNarq53vrwzULTEbjkJeR4DJAMy",
  "key15": "3z87YqfRuuMMz32KjRxFMgJh1J3YbgkWyiEL7zEEYnoxpHzqWxAWk3LcnUPKoSL6z3My3YWEQoCnXWYtc2MXuWDp",
  "key16": "2iqEWRMHBFDszspgSjn3j9MQRBAhdtQuYPubWdesKyYAvuB2Xett1g1CBrQuZ3iQrBUfkbh2WU38gDbwSHmAYDvs",
  "key17": "z4axxnnMQL5A4VjiH6UbiHyzoqu99CCvYWvH3dnaQBLQwMvD9hD5u3QnZrqw164S5xsoccjRcuJuWCT5fH7e8hr",
  "key18": "5j7JgdZcAB9QZhTmLwKhfpYew3KNkVtxhy5Rb9fcXku4t4BMFzvc2q1iL5Hy3V92pLJVN5SmGzQ3BsShZ7hw7mCF",
  "key19": "swpBmQ2LMA6TLUEpqtzNz1mCrDiX8YRsCvy2sZcc4ELkpPB2mFzEKVBVaCQUh2gw46Z8nJPnALFjiKvbGPRD3U4",
  "key20": "4kK1cEGBht44we5AqbgXQKpxq5R815qXCgDUf3UUEtLQ6JhMiefQtXojcub9sKc4r2cbCHDAT7SYnQsuJNH81YcG",
  "key21": "5FDs5Mas3Sovf6YPwNCQntxFkZoQ3mv8smS6CgkuoMY46m9ngTqmEJnndZbQx2TgAuiRFHgdPnMcJtYnJgPxUMac",
  "key22": "ziJpmZyZa2swTseepYoj5gRqBKqCxLHpCBaQhNjveH4oaTrAU8Bn63VgkGyaKMmWy3RM2ocdeSwfNJ8RdYxfQXg",
  "key23": "2h1ERaQdyLCFXo6uXZ3t2D8jvbMJngcSyqBizexj3hxREHATF5j6P4QtzJCQsoaSv4s72dMdZVdgJKxoMiinRTjs",
  "key24": "42kAqtcqYgPtDZMF9WF2wqGtq5f5uG363g33gMSYWxLYEKdRXUMoFpdiZaZpEH8jZW4bKHHNyftbJYojRComfJk9",
  "key25": "2CPbGWS8Hr4cTGksLsGmR1Xk4Qa3GFgeFCjLWv5AQ6XvBS1GQRwmr6y5nJp4MTpuo7KQxT9X864rJC7omAeAnaBo",
  "key26": "28pukEWDGYHZLYR9fnXTQseLwDHjaxDUceR9KQ4wmDzVaRVsCvBQAoXmNQiuYdf9FEWTSzK2wsCXihiKZFFTdzNm",
  "key27": "2VAdQANZ1GV1Fe7uzU1mn6iNZJrczhd2RLbak3Tb9vM7mWQFPqxVdbkHyRQmozVhozsjZYmJ6nGLyeUizgnJMcU2",
  "key28": "43sGG2gDqL33XgFgeqU95xrNQszNjFHhpUYC4wdvJK9HqHFANo24exWpWJUEjtxVm5aJvugAmHTm7xfHEHYaeeqa"
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
