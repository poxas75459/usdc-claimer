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
    "4veqJfoRyM8JGrUToy8ydVAGz6o6sYQKXGNpSWJZUyEjNfErKVLbQr1NowF9tREW9UD5eHPSZECSZL5GQb65JVXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54nCP6heYz2j2ngS3hcjXi9Yks7fiAz7XE4g2wer9Q9hWAS1KCYThM6AJbWEHkDaTdbDzzQ4cerbB6CPgsBCbw5E",
  "key1": "5foDTAArKe7GYeRjvahBUiVXtBawePe3VEiRXEcsBoXGjHcm2jXinZmKnk4UaLua1F8wBvPN79mLmaEijnmeGLLm",
  "key2": "2uRRhXU2E2SeqKGj89MJsXsprBihT4SmfB55sgNd1rjBWx3jM86Bx63eY5wL3EFQRz7GTY1SfALYGQt2NV5uiBg1",
  "key3": "5oNYFezdNQLf1gj9o6kqpX6TL3cwnpew4AX1VGXzDLfLVyEDbGwiB9BGxEdVmJKappjGQiYvWaYKQV4kvoyxwL9K",
  "key4": "3xM9gbUKW2tRoh6YSx26mWrhjEF2F4tV36GpsuMqgjRYFMPGyf1qB6Js3VYJzt3pBeRRzrXpvzWfX8wYHpHkq4k9",
  "key5": "BEf1NkQZr8Gb6Ytc8xBFn7Zxow4xchL9uAoHUwoY2KwGP13VnTGjmSB8rBaKyz7iXgywetBGUGscuUeBL4ibFGk",
  "key6": "QTL3vkpXATvTd4FaqZw4wSf9JcsNzhZbKcYDQTUqqradhA5pCp3ajcjzqYe4NNzBz5C4QA2pkVijmCDcKGw8obb",
  "key7": "2BnohFx2cgfaAC7umFreNWcfiYavzpCCvaASXFpeoLpVzKZMDJ9xSZgUHBpe5voiTT1MBgZEjwqQvNyHpyARyeDr",
  "key8": "4BnWjZdk4Woh4qVD3qZPLi9Td39dpvB6FmkKzdZSHeeTdg9NnGLTkAgX4RpZmXkS4auENqoqt3MTkkAZNHNEHzeM",
  "key9": "29UFYxzbtC5UvYqJ21qwVwoboeKeWyAp2vvHns2WJCUhLdhLyu9i5tUPQPfGWmszZedsro5anwWcp9MZVjVcgLkU",
  "key10": "2Ns9MxGQyk8gXncTXXx7RwmLkUNbtrXXZXtP6RRdWDZXLipavHKqq9UE5pDEKebav7fihXDQ9ngxGuigzHai2ZGD",
  "key11": "5XVVPqprmYxUdKfSr6tuha6rFE568XHUNaAKL43jeNvts8TvHBX6coxnS4ovuoqNHFjV1Y4eK3hd5T8pEJTPnomL",
  "key12": "k5C2AZSTCDX3rNK3b4SoM4rfFWFwRvdYjGgXKqZ3FbrBLYtk7q8c9YEcWZXvEta78xf4PHkwbqtRY8GrNkD5eNs",
  "key13": "8hz8QJQcANNVtPWWFvxXKU7c5ah4vAiWSkWAmhTehxcHefiopiYYCawWXmyhfZMfDujWFgj6qG9zKEJM5j3gR8q",
  "key14": "3LYvEMV8TVibowcbMeJF98Z9X5nU8wyLwnR1obgEFwiGQnBfBr9zipsxZfCJUgRt9nWXsVDa8LnhCQsr6pktQg1P",
  "key15": "4JxKJiD7jkDv1wvS28g4SBwfxKZ6u1guEbYvbt61qF8vrWw26Wff5pawqeNbFDJmyW2iRM5c4KPtuas9vvjZnuQ8",
  "key16": "54eFQSpuS7e56j9471Be4HRdkMfP4CT1NuvJ115SV1Ls6puoaQkxNfeLkkZyTjCyu5yFXSDnrtAAdoBh61DZvC39",
  "key17": "4RLZtVigpdb6jHWeW824RxNeQ6yQmgPYtxn9WzMEn61vBFvewfn9xMr1uvBKQ12Ri1tFSdsBqoybfhF6WXkkj7D4",
  "key18": "2cPayGAmDxxDySwEJj85SBLpVRyr96H9QCeEUD4vHraTQQc6s6SCMEfag9u6aW4WBjZPY49VVneLSNXrjRWa4sxf",
  "key19": "mMshX3AKKQAZKSjYkkxqZTA3wnKQQ5WfykewVAE5cyM3GLwvzUPGDRpzE5hXVN1VEEX4hMRZDo6DoUeSNAQFCc6",
  "key20": "4K3PTmGgwYRUShoNkPuMm6fNDHGuWrhz8F4TW3iFx5xgmnLhS5qjFCxShCenDwA8rFtr1ZqRjCdYig7cTDq9Gxve",
  "key21": "2Tf5PYSZXRVtsNgMPuE6ZMkuDD5q5Gt7uTZWoJSyYVegGpv1ruHUU1HJczvCfzaV1vRzawdTvMsxGZCfLWAxGTxS",
  "key22": "4MwEwmWSUTjiVmmomgNWSXNwybfpDzrE18ajK9zhi1zGfMbCmfmnub2QQ2Hhhr71iqBo4WUh3TD5vVeiUjzmmZhC",
  "key23": "5Az3Xwau1ftNAptGfBC4S8GcGyMDbDpnDHdiwKkriD4CffVkMzk1P3LLeSiXBQ1Kc4iDRgJMMf8e4nYMDvsUWWoQ",
  "key24": "122tVYsWVyVVgZVE5zA2MwQikZJRGrAMrsRejtWZFhUfL1yyD167qD88VL5PYyUxeYXQFBLHRi7osPevMoZpWJFY",
  "key25": "3ijBpdNDr96SBJ5ssSUMLcs5mxkqk8gYKimAbGWRJKL9ukJEqhnnqNUp7GH266tACHuUUL77hNaYYSPZ7AZS6FyJ",
  "key26": "3QndCV2YGutKPoiKUHBXE1UxKXXeL4Qowv4KAmRqy6wU1BPYDgC5aMaes3VmT9q2WxLpTR4wSVoDNbZK49oryTS5",
  "key27": "4kEKfsBQWoYea74pwFi2oAJJB1D8qqVk4d73PkhSJHLU3WZKgQ4JuVSXyAcJgDfivC1Zbwd3hWCeN3ivhtsa42aV",
  "key28": "3BSM4FQSF8x41HNvf1K3AaNvZwXd2cxekRasFjK8UuN74Mkt4ouKmpCByb4f7AJAj3YEmPdJtEbnn3yja4XNzKUN",
  "key29": "2k4VLDrXJSZV7EBTvKrmwLf5tBGbCMJiHyAsQbFWyqzYUhAw9BRK8RHg1ogsQ26ybMr2rMfHwLJzXmB22vHwysoh",
  "key30": "5rEZJutn5wbgUNMUx5fLLvYvLuTrZvasqfsWKZ156AUy4q4LjBNnq4r6fSESEMdJ4hMwzqsCCZ6duFp8tRJrX7A1",
  "key31": "3zHboNz6RZzQG61pEYKxZfcg5CnFNufRQDf1Q6TCStobKGfVe8UGT51fNdn4iydLPRxrCJiDWxWWYftsKx1Cy9vj",
  "key32": "4tC2qomRzcZnursMfRvAdagdjvg5M3qTsnFxN52h9tPqpzBaB6ExQNYMtbPcVQFx7ob4EN7fhCZQhEtWpUATgjbS",
  "key33": "2HpRiPysP89nVqPB1FbNCsamA5AhkVDUzbbQcvq9xKSt9EKC2M9sRAeKooZBGAQSWa9RZWPWEuAeeY4scLuCHrCC",
  "key34": "2c7gaVqW75JHSZgbrP4aJPMPhvpHNSc9Tfburih344nENLm8hgQpH4wBjZD2hKm27nz68pjJC9HkhLg11TCJ658y",
  "key35": "3yRm1UX6dXFTAUNobeWgMV1QFZJ4D7ZeyXVisJ2FwAy4BNv7updZLphX8j79Ph77ZMjkmdWgoYP9hkvX3XXQBhBq",
  "key36": "2yEdEjjSV2DN1pDFaqCSXADhhCHo2pFkgcjPsEvFsLJy979hwhH9zqmKTpXRTx8YRPpv69m4D5ogeNGDYWXWMSGf",
  "key37": "5VtpxPJehuc6cJKY8ibnWZekLX8m9dteZdhtQhtQ6ptxRnhaVGvpTGfXjwvRuLogy8E8KeAr9ZJ7bdAyL5xGbx2z"
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
