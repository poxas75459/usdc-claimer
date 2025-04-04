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
    "5WKpfYVhQuSX3AnsDiP1k96Dm9p7wLcmos9UZvpt32wMzbDRHaC3zh7wafnVzosAit64oLdSKry9tAUCkLQrUsYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRbpZ84TAb8FmGiR3uE66uwSdF3seWa4qrhY6qXyaHKcpvCwdAxG9UdLASr5uCrggzAfPAxUPp4T6kyEsYAFmMR",
  "key1": "4y7YTMYnGaT5bhhUkH9byZxE6xmUKrkXiaxYCchvWaExXHKeEbKPvjDVteow88AAimKG6Gsa9PoBuhSE1tF6xv5W",
  "key2": "3iKyAfFX7cezwSXHj3Tqn463VvnviMfbpZAQ18LsvoHvg5VbvDCV45UUAJLSX3kYjUXfEq5V1zpfq5YyFDxQHCPk",
  "key3": "5s4VBQP94aVWtRMPje4RASjXVyzjeVhRxc711UMFzY4VgoxWGNJ4hEsnd1PZ2NPtUZVKK8t8nFZYdA22WiAe1rtu",
  "key4": "5Qy14ZKRTrij34EKDESQaQbsGP3CtahELB6C4p4dWoMuaPmG4s49akkwbPUHrTgiTjGhEEwuF2DbwqtMjsynRMqm",
  "key5": "3v3UaV3ouLGcQJQbMeHGKZ1eCHxBjcqT8coRebJ7pEmct6FtbDin6esb6TSFWoRCCFfPynNZLXdtEru3c6VHND1e",
  "key6": "4XGHm593NZguJz2KacxbJJ3XQ1SjeLPRsnEwEi7ELorUAUgabjHCE9KCD7XFLYFj9JQy4Ea4fq1SrinoJb4hMcyM",
  "key7": "5hbbHPaGVXMeQYPYkW5ry4B1XWrPE7KEJ98sdCPPbuY7WZ5tzrwrVFtAuCtVcHKU6SYJM9Z4W2bmmRAyXtJWYzZ3",
  "key8": "5FoaSnX465g2BJiCkNbT3PfEnQ7JgHxiK2C6eRuRzVw44Se1hRe4fESaCRMMd9HX9YvgDzEt8ENWwpYHiZHgegpD",
  "key9": "M6H6Q9pUqsahbBxCM7pN62iUkKdxnoWHDQtdTJKSu5Wg4tdTfTdouek6J13YdCiPNptun7hqxqV2e8usiMeA1xj",
  "key10": "4vNyB6G9sK47GRZdFX3YLtkWcKbtbp6rs8QXJvtD3fzqV35Nj6ZHkYc4nqTvCWVtvv1ZP54TgZh34KaQGekhgob",
  "key11": "5H1Hk2abFoM1DB5a4xKhSCR71oegn1dFVFrsVB12EEefXADY2roU4BnqencnkLyrPXv8KfxsRyn4muKsgcsyu136",
  "key12": "JkJVkRyzTjBWZusu71P83wDB8XF95ZrMA3Qa7pdPEq3YFHF8innaQTspZE9xVr1Z57kz1U7W832CSsHS8GaXpM3",
  "key13": "5Ppa5zxMoKh6UFqitgQB5jwCWEfgqJbXVmbfNtqgTRBeZVZipnLVkaSxGmjZn2cpK9MrzzceaFv7GfMAkk5AY9cM",
  "key14": "48gKB2zHwv5oXr3QNoKi6ZnJYqsqiFpEEpSwpbjjXduRBY4g5qM2XfUds8Vqj7C8DtyUcHzocejKeAE6AZtASA2d",
  "key15": "39raNs9HBBvLeehA4UUimZJTsmS34fgV8C1GiGxt8ZdLsdVomWLSrdmKjDc7UEJ1SvG2Xv5SWruKqvT7zrQqcT2h",
  "key16": "25VdCJkrxmDEV6gzaK5TvBdrGbNfWzKe1Y3ByXazwmLQqzdai3sbu3bpZguDMjJquRqRh6LygziScibMYtoAnQyD",
  "key17": "5AhcGQt6TxsiV7zcdL2A2z3fPbt66Wjzaysun32b9BQU8YnTBDibKPmE4LYT4sYypcDPLbKWvDi3xUVUo425YZtQ",
  "key18": "3nfYHJnyAyQsjgw4u5yr5nEZtvdMvoGXRgbKbjXxoAwW4pfM5wYpFihnkALLccTiHEBuhV6iba2pstqGsQijHJqz",
  "key19": "4KLsFUhhKfgcAv6BWzmGaryyjU9dQxgxdtDNiMURQ7QUu1QWfoTiyrqvxNTdpN4UkauYyQReDCDXzTdDLmXMiTh",
  "key20": "3patTg6sqN6SWztNQsiadiS9165CxAyFeja9NTTV5DEfkLYeWNtfFn6EMTNXnCs95xb5GuXvCks2BGojEsEAbt7d",
  "key21": "3BAxsTh3XDAMqhCv5MMfQ6vF8khvboYxBjCBoSrqC5VJfpeeoeQmHyMuPobbExnN5JnT37SZ8hw9qjEAWtdVi7yR",
  "key22": "5Q2Y9gkkmDMRzegQmFLtT2gqBDbWUMTQEKcMdqg6hFQVGdGMgzDLR9s54RUthxgsQpo7xEHBj3DEiB4nrn585jdN",
  "key23": "5UgVRwPUTACTA2AYNNz3aXebiTNmVwXteN8CvyQUqUcrouSzL9CsW1YPbzU1SqN8xd9Nsbt5zsdWkZxz1SQpZ2of",
  "key24": "5uubmaDmVBeVjZbfB2KzS6Gpio1EPqwdKMVzAK5UeW5NgGT7DmW57StdD7huFAqRQUKeLdq2zJL9x7sfpmkeGJCK",
  "key25": "Uw91Rqgxs3XrWhLDZ4DvBkWVsmmbYiWpZR8smXWPf6H5nTDfRz1R4ZH42ubg9BeDbKn8xcEq6Mve21RR85gLWP4"
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
