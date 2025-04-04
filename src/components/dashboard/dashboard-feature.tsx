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
    "2GAGCLzQGHYc1NaPUEhyfoooNWneai2H7VETTJQFkLQ8RRM4NtEqsMVmdwKLMrBsQAHVQ3nw6X9APMgeqdyoJovg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E49wA93U3HJxjiN1jDRbZJRJZzz9T1ALTdJ3FkFsJKBYuZWBxYgJxWzdtamxJvcNzizmdsG41ZV5nWGpH5CkGa6",
  "key1": "8XTx9MJbBpEHsHYLm1QzmywEtRvAma1sPxCUYEGoK3KJi3Rc6SDwMPZ2uWai2mXKxqe2CYawdUjuSbWEHDhCVmZ",
  "key2": "3jZEqGtNDcRdyeNNMoQLZVcPCVYGDRYVNE72PvrNNRTqcZA29f59f59CKEKw7NmbCQxySM5zbpi9HyWZmCwdc1UB",
  "key3": "2G4AC53GqpPHzbHpqz7ri8dAMKk9SytAXPVWQQKWDrf23z49p87cBXBWk5fvY4c4i6ETiHipKZfYKFRnvrQMZ4cb",
  "key4": "eMS5tVQvTLUqGLHxLiEmeaxUWGjsRNtXcKSySrhcDu1PSWMxRNvJbb3PqwNhjTcLzYvoFUd3rkx1V94nXLpqdsS",
  "key5": "5ABpejkF2SMEXeQ7UQbWhVrdLwiwu3szTSGur49mXUSXgA79LHQJvfNELExcoY6ZKYzBqULYPETP5juhGhBcV6Fs",
  "key6": "3PvBPruNb3iFTGjM9KwrcA7to4uaeDPdRtvEveTmfCFtURvtM6EZfQqd7djCJzaQZMcPvwhny19fKfsukbDfN2yu",
  "key7": "Nb21q3YKSuXBwbWguKxWUikGXDiNJY9P8R9mZaNvahQRHCoz6bHLv2kVtSFAgxKHABo1Z68toYMxGhzEiQkwLQn",
  "key8": "3XbhCsvWewRLXEx5ZdZGvJss4Woo1awjzK9efQRsWeouTLT7UXBYuVvjgs6Nx4mZuEDExXnpkfXF8hxoG7E1qB7t",
  "key9": "52JHoUUgojKmGyBrjfgJHrSX2p4cJouD9ip5FpQUv7ptnAYZNW1GczLNftfX2S6CDWDeLCEfia2wqC3wdXy6go6D",
  "key10": "CbjS2Dv4a29NmwLUsxyFqbnBEPDjZUjLoUkgT4aoSzhGSUS7oCzPfN4DqNQChUv7c5JYcAfJ9iqSRHMN3R5ywDu",
  "key11": "2fD2XmeaERGFo65zcXHRJpnW1ypVF2bHaRQE2fZmwW9fwq4eyP34t88THYJAedwjVuWGLUMwApH9atqqghKXn4jf",
  "key12": "5XSkLJQogttGGSS6jZ7ZfdgziNKHg7zhoBHg9BifnxvCAKdHLfkCccKYWcKPCfZF8iWgJ8d9ZucAUexXGsLyfpEH",
  "key13": "4aMEEShDtnuz6uR9sL4v35W6JdCuXowkbAmvubT3UaZfisDoDt4PczJAH2ZTekd1tJWXpZZ5qSGD9cTDBiMwsziR",
  "key14": "KXSPiruiCjLuNkXRZRtuStX5Re6fqzunBF6jRv7vcpqxoeZPqEaGKBTaVKEbyAdeCzszxhYxwejaP7H98gRW9q6",
  "key15": "4V7yc6FJC3mNwpQLHSw4GG5EVsd4aYtgAY9hoTGSGsy31Pha6KwfpnN7WwUYDxdMWafGnw5BffxDRjSVVqkJo8Ej",
  "key16": "5uhFyB7SfkQj8Dkhy4oDiQ9Mig9mBzxSVssAF9yQkc1iVSNKswz3zRqEjYiamQTSzUrbw6HXznMK6w4eeMMXFYom",
  "key17": "3pv8ZLRWzrQuG52zauVCsSwf9Mzkb4ppwy4apEkr1nB2CwVyi8wFjdqdLYXUmJv7hcMxvSCUvevWjScxScrpn16h",
  "key18": "vfXjQKGXge5eaP3xpErmaQ7epyh5mCjeUHq32RKLEthdUDw9v4DxHTMX4ZJLb8phQpDxneTGvPckr7dpUqJmTHo",
  "key19": "4Wg3TwpJSbjA4tApt92nJbNVVkx8yG66vN61juPbTy6Xf7wjNaUXa4SqBqiLiqyiUtZ8XHppEapBioHVPAx1w7VW",
  "key20": "4btJYnr7EN1zEGkJ8tNnr3tjRdHk9mzX9md4P1bte9XXHRrt6UtxHHca5CwSFUgSLJfr9gekoffmPWTUWgKxf1Ay",
  "key21": "5RMM6uCqaoTSTCyc4q2nTcBDnZRTdnZpuqahihS3xHmjxyL5K38RSpbytrkr8vScaniDb7oszmA3SynBndaztssm",
  "key22": "cP1wQCtiD8P3mQSESMt6v7GwspMLAgVvsZSnSqtY1v5u6mwkn1xEF1kTaZc6qWxvtVBg482p3d3CiDGuQFYr3Dt",
  "key23": "4LQxzXWCqJiC49RH9DH4Hhm3s7Uzf3jhw6fUrd5TKWEYT1T1JFQ5wxNEQg54riyjyqDL44oMzdxW59PFy5agXSy1",
  "key24": "4wgmuYnkK7Sff84pfTk5q2YxSfVmpTLMttyovAD2CQhfFFTxxJwMxTBcKVa6rWdNWh9UUJCDBWU49bpwkBXdVKAo"
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
