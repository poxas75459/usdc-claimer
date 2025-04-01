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
    "5xTTqnG5aMUPWJZyUYZ3Bz8b1VHbwna9sRjMBbtS7r1JtXBa1vUzysijFeyK7m7dxLTY6GBQFGRzGCRR5dtHPY88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vdVSdbjfJytkSu3ykTMT2nDFhQYxEZhopNu1yo4NGNNr86MbUJyhSnHKFcAMWt74Fhci3KDEhTXsbAi8UvacYQ",
  "key1": "4tUX8MRmGVb9GVg2AfcwMtGHab9ncSyZFti3yWzAVXAN8crnXktJzHotcS218sL9NFuEuiLZt4A9eVUuVcG52o4L",
  "key2": "5BNLgMC7iYYMxuXJrqSnpxc5CxTRohxhef5HqWufS5kyF2GWUK9fJHxykFhxSA7es8ZvVrJXtiMLQKVgFHxsrd3S",
  "key3": "ZS5mmjywYZqS3jG463EccaAHKUm662t2S59wwExdtnnhEeYfgk1SMggp49Z5yrPFobxm1pVcoxTYM4Dbpp9vz3g",
  "key4": "5fCQ659bs878DNWnKjz7rtEPKyisK87zZRo1jFWqzcvPX9SN5u3L4S63Cy8EmHMdFVmw2ywcAuZnbeD1MUDG6KtH",
  "key5": "5nbirfrCy6nDtKyTwGmkPQ7zj3faxAC4uQuR4MdXiSDoFjT8Fv4CL8HSvNmKFutFf4V7GNLHksJtZj57eeGL2oXs",
  "key6": "ZdHpch5cMyoEveenPyJME1c2PdxLwppruo98HhDVCZ1nUzCFKJEU6hti8Ffi5ZCSeZJXjP3RsViqupMCc7fFD5K",
  "key7": "9hDLucfGxGiYe5TED96AjubHNx4T7YXEB2FKffpQtVzm1wSWQNWe8a1Ky98CfhvjxWBE3QPfTexcUQVEA1tR76o",
  "key8": "2yexCFht67xaEzFWkJWLU4uqU5crpFNNzVWCyuL8TgFdqDTvE6bKhwiMoVn66KUionWaKxrr7mfdcFKVbd9i6EAg",
  "key9": "4r6is85PQT9FCJMsC997deq2YNLMUgDYzDPGjBVcpFeApUsae6WQfp8FmbQTUiFXyYB1u5UksEUJPM553V3utZXt",
  "key10": "4JCEBUAZh2Dy3Lc4C7XBKQa4Tudjgz1JpJgYmjaEGQMyuau2dDnUqU9S3CAShFvgjbxDCeZChjnKy7S5iBoKZ3he",
  "key11": "59zHFUsJJv4sywN9Yjy5qMnuHvTL2AUKsgQDMjG8At3WHa7gqEwFE4KTujWya2iKbYRrbgFTSZZ8gZJa2qz8bJja",
  "key12": "4uuBA1G65YtbjPAUDRKcUZuF4AfuSqSnnYiYqcy7CQvgci6CnUrWSKT8ykiNvF9fGqnB2ij4wdeuCcgV3JiTnnzA",
  "key13": "4zQKjXtHCNscw4nEMRYuxrqmVemwL3hp3CaPScbFLgNzK2wN8fvHotaN96FUyY6HbExaUUPTk6HvLQRSv6YjfgbA",
  "key14": "3tXX46CLMhWpkmoFgyK9Jwkka7u1KxgkMBjzcsT3MHnTLuhjbay4vRRsQqUCPjxtyfT15AKeqKgJiZCFtRWjcP41",
  "key15": "57E55yonAv696MRaehjQiSuhja5tQW4VdYG5H6XSR93kFB8fH53Qx7AmsFcXwaFizFPeDqNr7SccCaNTV3NybHyn",
  "key16": "ZEH4XzmHbYBS9m5gSRxwfnZGZccfdsCBPPXcwcKX2Y8Kn4y1DmtKAVTJ4vbqzb6EruQTLmvdgtKeRstgeGjrjqJ",
  "key17": "5fiUxLahbYdmwrRbivDeHefpZqLpZ8orm5ttvuJdbVwBH9ozGgoXCK5j5Ba1nPtGGwkQFpzLYKz3c8pAn5ATorBS",
  "key18": "5nucGpE2tZe5q1QQwmBA7CCtMQb5PaNDizbhuouCtxodwVn2MNNc6jcJMzSj5nG2RuU783Af757D3fZ6gektgDpn",
  "key19": "4U7EumeyhafS5D4ru7PigBQRzTiZo6pEwgGUrMZThq7iJQAwNDJzprKrTVV2Rh2KyWeiCFPhZ2tDA5gyD4uTYgGv",
  "key20": "32ZhoHRcEwdVjLsRDdXddswZbQacqbMbp4Lpy4GQjjv7sZxGPJoP8eyfAnSY4grYV1ej9v2k2gm2gXkTDKJGXeD3",
  "key21": "5NYey3n3UdsrQ5DowXdVE7Jb9u1KY8HNkeaZ2RrR1L566bzqrFHHV1RFQPZMN7nnCyTuM6sbvhVTGzYwkvRu85uW",
  "key22": "2q7XfhFGjx2BgcyhBFX636YR54PCE2CkpAQyJMReaFii46WpYtAzKrv2EzHjyVzyVwejRbKTLopzBgy9yudW4moL",
  "key23": "5chc6QLKjbL97NJDvLcWkb9s8j9ypDLLtFRjpJAGLf45NPVeyzCbziiSFJAZtwVgZ1uLLbsL6NYKi9UBprMYBy7s",
  "key24": "5eeg1DrJm8BDXT7WVP3UwreniQQwoYtgU6vmVrbiRqbd9nBNo9Ssogq4rymjhcN74NhK8HUbBgafdidCys75uJa3",
  "key25": "32j55HwGTwaKk4dUGDo7f63iayYP3Xid67ZmHRfmBps1sd6c8sCQ5uG8KjJYdxDcdqBXM8jRDBhdTceNuRTMgmPq",
  "key26": "2Cv5NHVMe2ByrbnCqoyFFePssCcHQCGtVYTjXYHQHeLt1uvZdPXxLejJnpbCkm5uSDsusetcpkrU7XYPsNwCWc5F",
  "key27": "Gxov5NrfvrZRXwpMab7UiaKZGkuphM8sTRzerVKmof8bYEVy8Hy6JWVEdTtDBX5W8qYoUhT43eNoxJXCaaWhh1y",
  "key28": "338JYxriGNXNjsx4BcXYtkPymNDEhyZXFqRP8f19K1KTqWGmEBqBW98DT7NHNBAR6YsLPjhLnt5s5MESaaNTdwmr",
  "key29": "49hzgpFAPxK52fe95jM7CF9B89ceM3GYC2Qa4goDQptHvZfrpnd9HAwncLz7k5aWYiEQHsPpZfu4GAJ2xecm2PFT"
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
