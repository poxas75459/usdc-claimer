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
    "3uaykvx8CvFqLHxnhYsEU7n9otmpmgQKPsumjj2pgXEoUT7tremRfXRoaaeh3r6GM2tqiweNxCrpQR37G6bsjLUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apCnJmrv87Gky5XWFjD1ssshFCgk18WBZkcsciXc9SuAeT6QG9w1fQFrmevCfdxVgheLePwRmuteSsS2PSpGJJo",
  "key1": "4qYag5er7biGP4GPof3dY8ZhFCvGKEETViL8H9wbC4ut2qH2LqsvLixXjTuTsHm6tZoiSEU7jexXBfhe6YW5tk4z",
  "key2": "2cPuXPjaNVZYDtnoTj6d5AWLHeECCFjwKWqxjNMmS6N5CPJikKnJXJj3sBrgMV3pPQSj2tPVaEDd1agXkoFpP46U",
  "key3": "55bn927MUAKNTV7pgXGCZasjfqDCbLxeZHPNqVnh5EbNBXRobKpndQAupgtxBASFrJh3PBmZz9yRw6Zkuju4WAh9",
  "key4": "3ZBUzY6nvVXR6TXQXgUYarnjr4yMvwVXHVTyjyWDcZHVHj6nw2qtusn7C55vBzF6RWtHnqCXwRSruy685gWTkUz7",
  "key5": "2MwR78HNCCURbwYFEDb57f39FrbVKeaNLe4ETjHT9PoQVnfNomu2c482x1aprWsGgexb7cr6TXtoTdbNy1Ufuxza",
  "key6": "48y5ivPGbQY7BNoZdxhPQTK1WT8BdS4cEcMy8kGFzXekxZXr6y4XQQDFqC9Zm3LXgKXp2cXfxEVZwPzDYGmYt3q5",
  "key7": "4hvN4Pbq861s2rP5iWdEXP8HsNoe9N2qbfAjYtiZj1mXJhASfVyPYXh2eneQqsNLVgQL3HGx2mQkQbkSjhvGV2gR",
  "key8": "2JEhnkWSVMQK7guVHEgm2bRvvmW1QJU9kq1tTxfpr2pHQxkjZmUPV8RCCBaPJTirD2ddko5LFhCP6KrafCaMMgZk",
  "key9": "225rsyVrEYeGT7coQs3peBcvytXuVFNFaAFGzX8vj8QTScSrF1BXdTLVAtsih5ta1xahcgKihscXXWGmYVS2jyMF",
  "key10": "2NDKnjtvxcJ7t2bPniVgbRCj4QJCvLzHcgYu5Xkj9WWVWmjjFem6PXQ1dxfEtrSHjqFpaGvn8d7xiZrfkwcjpbCE",
  "key11": "5dueL33NMSMLHfdyFKJmRxMKxzsB9nBcWZyS9oDzMcRMxLTv6Q6Ab1hi2CN4vAT2kRHgHLN5KCBWUx1GPhT48GRy",
  "key12": "4bqc6LTZEEXZVGUGdwibaQLCu3vyxz8sBM4ptMnHca5FJPAyu7yhFEKt4mgunRVyNVB5e9gdvvVF1WF9fmixbzqb",
  "key13": "5nU7mytdHUeABdjDHeydEjfjpJs8qGkmTkAgU5nb8kbMRKTaKmJzh9cLZkbwtsDqYd65MyzMCwmwouJ5YhVKANF8",
  "key14": "2bXBHudL3NXsBST3L5cCjVvpfjNrwYby8bPkWmCxTrfyimSc5TvD57DZDSfZLLJNRR7XiDTV9fATwofejgNpMPCx",
  "key15": "5WfYH1zVaAxDx8n5XeDVB1iWKLK4uGpErzWtq5M6eAzc45KbFATgtkuo3c9MdFx6kAJQSiVeifpdombyfQk1C7Aj",
  "key16": "3bpJ6Uj9APwWvFz94nRfsLvF834NGggnNuFN7nLCLjNa6848KKfCzQB28pQCX6bTui6jtSsmEakGcJBEP1X7jvYc",
  "key17": "AgAziaFPHuHN3vpufDq67Y4LfdADDy4vbNEbq84x97GLzA53oWCHHDbAiVcehR6r3Mh5WAECTk8EDi4cqrKvgpg",
  "key18": "g62kV6PJi8gFVtpGZej8ryo9GYkQS1fxdGB6KS95Tnk7ruxf7RFXJWmqR5F7TjB8dmKDxoPPLvigSuooZo54Zi7",
  "key19": "2kcXdEfyw1N4N49RWezP6ieVYk6bTDrJvgScMQMQqb49kwWNaJp28tjHQGVEjyt1Yc45VK3FF3tHX5afNaC2EEaU",
  "key20": "2uDE6tZRYHzDW7wSNABrdh3ar7coutTmpJTbs87te48ZF6pwbREj5V9ybMbM9GTHkhQDRNiRuXt9eRCqxZGLbUcZ",
  "key21": "1GY9V2ad5nDEgzSuAnYZizVfzzhi9bEmHWUL7pRrHZRKN57LbzRzarsBvUorAS8wx6G1KsXKFE6UFmCewnFdFQt",
  "key22": "ESB4qagBGHxBRwBWeSgPav6Tyhuav6oBCawuW9GnHx1aJ46jXQ1aJU769VnYPUNUYACKx9QVdQPEEVPo36ud4hj",
  "key23": "bH815PikJbWqJe23XaK959KaxyaAMZ1VEu5vn6qzmbeLG35mEkGqmC8t36u7gt8zkNqB8Q1sMreXowQR3CYqZ6Q",
  "key24": "4Bo62icJyfGYGr6xDNizMEMNvj7jhaAZa2o63xfDyTm295V3A5DthRXRpehNxKVMSi3eDWsSRjcQ5yuTF2HsaHb1",
  "key25": "4ARkZ64bUXdeXqo86nj9SuqycazH3J2fJqm6UGtNXLeELyCWaRvwYvuv8KRwnTtmYxFgdYX1GSm87VD18aFXeMx5",
  "key26": "66F7PGzCsXd519Q6cQdXjXmDSzZuj7R7dFxgywmSegi1ZHBUusiNepG3X7zPGc6jqKq4rSk5Mp9uquUKF1FnrVxh",
  "key27": "3kGopnSPJysBH47TvVv8DmMaC4fQLJt24pgtv1uQBz5EPmc1PLCW79fRnq6fXnQeAiwEwySf3Huro98jwk9DrMzi",
  "key28": "2kXpwKUxdwfHpGt5Bbi9Nx2kSP78HjYUzj5k2MbUCGSuKaeihQFHLohYqe5jqtTKsunZR9FtpSFcXJkRiZCprTZH"
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
