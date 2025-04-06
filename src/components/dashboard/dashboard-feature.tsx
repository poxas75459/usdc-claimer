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
    "JNQaYmW7EnxTPWDpZuk2M3XvwZ4tHsqVt3v22ek2RvMZkDMqLh2ouSjsNdVRei2fxuToY6JWXzChXcCTwKvHGAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XvUGBpCffTdhArYBYyiRM3sFCTCPVejqDzwRbprm3bKd8XWATqMhAgWG2jYB9h8bjRUW8ZMqTAN5EmjeSJhh45e",
  "key1": "4ctRrLJC7QF2guTcNUksD93PfnjnWTafJfrMr7mqQGeFkmEpPesXPV8GR3wqnNXzxjUMZVrnDg1iFEUTXRoRspHW",
  "key2": "41wJb4Yq6Dm9bynMGh2QfVgkK25CvEpBuQx7sebfrRoYbbewpNmvyCkF6fCaAuky8KghcsQnDsiBgeMmDG2ftzaM",
  "key3": "65sSDRS7ysAGw6FsJJgNGyLCHM6Lb6yTbvs84kmmYYkqsRnwMLDa4YR5LgYHhfS9rSinQkxtnrkQqaykMuoaAEsH",
  "key4": "5L8i7MufRjBE1fVTUEGE85wE3Q3C1VTbp6jk9qiapNFERmEvTYQNpUH518Qj1LGH1fruk49tg8FXgNucCSnxopba",
  "key5": "4s3a1wV6nLTt4TxmxjpjGfMp5f5zcV3djMpKVfF2UYu3E6iARafqyoJ8avqhi3hTT7RzLVSABBByju5SwDszHZmd",
  "key6": "64eDdK8vVh9dneUuFNuvmXgGGYfdhfcmkEXmjpqJcU2SdvtGeYNv53m3rc25fftzc5JgqnrWdMjF2umwEunw6SP7",
  "key7": "5dxC7MiadxtZ12NGLXZkBNH7ziGMabShwRksKKZUy5iDeE8BFWXGcYw68YXtwE9hj6efze4fJirSk2rhxorPC86X",
  "key8": "7igqU46ZwdNkvzB3MrnSyp1HERfwMswmp8nuhvfB3Uxz4qmwJZuNV6ofxyMaL2H7AFQ3pkEjso8kcwuUZBZN1Kk",
  "key9": "4yDqb6M53htfVKXp6J54wmaDwiciFxpk8UUnvk7WWw2ieRH1UTT18LjP5Yh9LP19EsSeLLFwSJQdS2yZn8EHqqj9",
  "key10": "2hLZXL8cPQ4tJZmoTPcKUQ5JXUdDNKSMVzuEcrDjwVkPfeGbRkpjAHnxN69JaYiajZVjtUR6iMMZAMaLvY4zW7aT",
  "key11": "2H9MfjTh9ZK4B5T6k9KH2SP5FRcQ2Akk3KDYskSCmmozgE2g4vbLSf3tsuwc2eXuj7ps5gDQy24XE9VXy3rp36fY",
  "key12": "2mTPXQQb8hDwBnrAECfABL5azKff6trXcF6pAPce9WNwYdQfQGXRHYAfHUyiz1ttrAfChAxG8tNP39FPsN3gceYe",
  "key13": "2QZWjni5FDMAYw67Yega4hQVTcUpDzQsFnQGr96MNRsPqwsL1YCPUzQ5Hj8sLZbLs9NZ2K5GZAX7aBFx6J8JSunU",
  "key14": "HxbV1YSE2TwDrWAq75C6YN3itntq58tRrfxuEVWiuB3nya56ztWgCjHxA4qqudd4tfHzsbvpvuT4aEKMJTMcBdM",
  "key15": "4QjJ5hqWMcRKg52QwG12EoSFkx9f41STnqmBV4soNvkZcJMnnGSNGBD4KFknQaRuth9ffe13UuQ85eFtL4xjpy5W",
  "key16": "3tD6ggJo7T26vzP44oHHFHwR492gzwonAKrvxekd8mb777D1oHPAp8e1Pjj9dsTtmGxWPoDoXqbMi7cg1zfFY2eU",
  "key17": "5FgPuBuXXTiKEeazcYG3ugPEumU2KUh79yzN6ayx5aWhF29YNjVRvco6FKY7FdJHKfRACDUWFqNfmiB97qkWLG1v",
  "key18": "32c16uBsJm1XaFMrU3HasMJKwVgU1kW1PVoPRoBi4Y6GZDJrzG73agUQKdg5CrmxraxM5JBR7wgAK4ad4U7r8N8G",
  "key19": "3oddBJiraNvxnZagaB5i1cgZ6A5CHy2dx9wrgbqXW1VLdHMD6v8XapjBdv8hehJAgDvLqXAeu6EHgNQUbgbYubuM",
  "key20": "78McXNBPbDjfn18uC1Jeq48ariKo2EX6EfsVA54vAmYQtEoNTcUS27c86LS7RZSfTWm6pLvpFi2v7APMRthxCkL",
  "key21": "3FjfP7wNrmfD2J2pPn2q7xeSNrRGUr2jeAphuRt6MNw5a8AwBV5Mn7uyA6iy85SaDar8ov3EKs3i5xT9hF873whd",
  "key22": "iyn86aVnPcN5PUnpeYqhZT98cHt4Rs3pD7XWL4s3mATrsTb5ncaqKRrH9n949yVEeX76nVvV83WA7fsxYC8mc4K",
  "key23": "5TzfzYpaYMwRgvEtEDqm76JTiEGComd7FvkgmMvo8k5WRu6sxoPLUEvYKyQsMYVsY3BcG3wimVQwu4CVbu9GpW86",
  "key24": "5fQA2FTr6YUi5Mhu5so3pri99WLHfjEWTdkbFpXz8JKyEcUMi8p2Za8U47FBa28AtBsoZFDLumUWWWmfJxsLbMaF"
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
