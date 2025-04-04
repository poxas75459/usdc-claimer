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
    "4wDsi9VhtFTjQnYm8U3FpHQNWUiFemtVVPqwLY8ErurCfAi1mLyUWFQVFzcjVqwNNBHgUh1LS6kkGFcoMuVQb6Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ekjWiy2RSDjNedXCFctQH3XgjS4hTuYiNmaCWYvciNyvGGgzsi4i64Kv2A6btqHUtWvXzZrxLVoZmCKGacVeZ2",
  "key1": "4qgdceH1VyVSQDuTG9aQN5VVxWBRouYNPFpErwET7vJVcLHdyse92ePkh6sTCUZDhKSZWX3kJyipwDywgejniVpP",
  "key2": "5xpEoGcigxcSqEabtMgzcx9D9Lfiukb5K6ecMPJ65XVsuwEsk3qugMnssArTjAyByL51efKHefgxjWvP89S6dQjc",
  "key3": "57LcYkKsRN8vEdte4mQVf5Pxh2CRoPsLD9V257j1LSAgpJvfgKSs6EXLmy7GtRKdWrjFHMWSq7yxujheHwZpk2uF",
  "key4": "2MqqxoB6hYP1XJr6Dsr2RT2KSYsDQEhAZ9ErN9BpbLi9A1C5yDysMrabxcD71YmLST7RdgpUrFLFfF484aFoutA",
  "key5": "4addkS8tcHhqZ1N5G2CA2ySr23gMULgvyZt5DfUbbGZCwkv1gfmGajtnFpwJi5PmrKkqkVyUrMx6jLWdAM6GKGuX",
  "key6": "3cpPs8MxWYFRy9ZRDawD8KnoRNfvTfqUfhskySakWFmt5L79gmTJyCqzYbbWAp58t9cSvKRoPaRvM5mk3QvgUDW9",
  "key7": "SXEtahKAaAxXBC6JJPdYTKqD7zZCQz8a3SbNxyEJkjvprwVnx2a7McN5L6y83GUQK5m8A1QejamxsJz22y59MjE",
  "key8": "42eAXequox1yaJkoYHw7baJaL1qDCGADzeborTQJTmsooWPpZE7pH7pnL1Vf8zKUQtB4mg7g5efxVnCRjm8pDpDR",
  "key9": "5wBAWvQiP7sgMdg8tWxxku8p1D3SgSKukgyWyBhssMJ4aMWNQN4uEXbzVyFHxYVL4BQKyywkW5Q6JLq2x5KJ8nL1",
  "key10": "RpsVv82ZpLr92gW6piaZQvh6FCJoFCz4G8rU4iWhxJ8vcqZGUJw45dZ1mBhMwJ6FYcmnjWcwyRAGYcnmbvLNat7",
  "key11": "4VFBdh8nzQpBCFTMqfc1bJtSL6biTNAhJF2cyDbMrz6kmDB7XPu74Mgo82HcjPKopZTTCShE7WUGMEHYewe9rR38",
  "key12": "3REdMf6iAWbdUePhvXis1GBw2EnXMcu7trg6Q7pAGHE9ip7MVj3xCjQaMUijPCTCV2UChKTHdwtfSnRrto9L7Se6",
  "key13": "3WZ83dm9pBwAQCrtHkoWVxou5FHdb6JSYJDHoUwigZ7c4K73i7g4oaqeZWhiuo4AG4XiEQyVJnj7CfP6PJUEt1Sv",
  "key14": "QmsMCRW2CXQWgV7748BJ9ec7SnD2n6ApdUsZ28G9v1k9oXXuAm7LovqS6xtqyKtSmwp3UYP1zxearFxDqNH7qh1",
  "key15": "A81aCqtqoATuMQW8TB8g2fMCdpGxFYKzmxSSZKzQ59EV2qcCAohJ2Qw6uKhzV7UQLCyY4ZKGtWhrQB1QcRTF3BW",
  "key16": "2x6ukUCz6W9TgSrhBJQA8scoQf1JCEwPA3x5TdUQRtH2jh462ZPYTEtjNAQcGR4C9ptAgganuY9xp1eaApo7yonL",
  "key17": "3LwehxyFf4P9j1XDojsqovSZNmEYK2RpYz7MyjvYkTkE2Ggf6UsoY1LPwh5s8qhqkNovrr7ghaFb85AsSbfvnBcM",
  "key18": "2s3bPtgQ4jJYThRPFNRqRnPy9Nvynh8aT88gyhJ4ZvFbCHnxY1RVG2qgbZrgMCLUBcFECyLyPUEannVMxhiBK6uR",
  "key19": "5bsCYPpuXHbLbzDRA8cm9BaZNvBsKtzk8tZLF8AeT9SdFTE8CCgQwAtKBftMVJgwMvxqhXC5g6XT6SYZKbQH5f9J",
  "key20": "5SbJXe4ikmRyhLGAXxzLKTyj3QWWe8gdS5c2WSpMQSgNwR7trPtn4SLKr7nDtXB7qBrLssdFL2MnqzFtNkezF5sC",
  "key21": "5Z39bs3SaKrLzDZLM7bsLPZpgnrbhUp2JLUagLYBToqQpFsWqaV6nBdV3VA9746XhVJUegw9DFpnDwr2oYgFME7u",
  "key22": "oJrF7PCkPnWH596VHr59ZZAaxjSpVCYTQGoiMA4jkwuLK1UAkVvpi1vZUaE8bMiCQurMSzADQBXRD3QSz7AEsAi",
  "key23": "2HWFrqEYNZv2A2bY4uKbfChe9gy6YwHa1vpfR9UF1rSsn8ZAvMcmweurQdFMiTcuK7j26ZDgy5oNFeT4gY2E42yD",
  "key24": "2A7Vy6i3LrzxVm7VPx65cPHd1LJLV2hYuJeEzSX6gQY8EAccBMLKRg6YLng9GyEiux8rLhsySGDpvSQR8LPaaprz",
  "key25": "2iSsMqyeojJXBPFyT4Lu59JFTp8kJ64Qic3yhssUyUHsZwSgJmQCMks6DQwEs9DHbtFp7o5spoNvPgyUf5s1vQ8W",
  "key26": "5WvsqwzAXZnSi1DX8phmb88uDRqKTNLffU2rxPYvqYoN12SHcq4efNrq1HDTSyQFeAD8D7Qz4vb7eMpT2DKCmHPn",
  "key27": "5FdYvzBXUvHP3tTVZ6FJfUGzYkavsa2wTxQph6JWobsPqoi3NrmkT7zpPZGWCWmkq6aNiPwx2vaAaun3uihfNwsb",
  "key28": "5C9ibKZ7EmWRPDBgDSGkjS3vAdcFmC9bkxq9McvzU9WQD8zyGZcQtwYPQw9AZzwEyNxJGDfJ62K9rjQU9aJnwgQs",
  "key29": "4AqSPjabUJi6UWV5sTne1uNUCrREyPHfo3GXHLVXrKTYHdPthze9U5WXw1meW4bztY7sYZcN3GKUEHikC8Vq8Hby",
  "key30": "5wZT47cp2mPEdVSLcVjBw1GvwrHnwgZ8i1Uz2hdqZzu3oV6vj8jtEiWV2sPXxo9pJFWPmqHAnMz7s5TFwupQQXQ3",
  "key31": "tyU22MEY5a2FCoHaRp63fbCFiu5jHZRn4KYVTwz2XEWgKD6ZNvwLrt5P4yEWek2jbXGM6j7NnMsP4RsrC4PCE15",
  "key32": "2oaY84bxfypSCkop24PqV48TRcrnQsSV7aPk9f1PDG3e1uJLtiEjruX6aFgyhxeBZiAsNweYr3fTVa8wbpZ4Etyi",
  "key33": "599Xt2vJSEA9bP3c6VcfXgqFJcvQVwLSTrAAGLQJWdTEJeenjd8tZqkSaYus82qAZ1Z2cSyBVJDX6buCP9QRFURv"
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
