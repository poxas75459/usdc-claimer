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
    "43C5Pfei7w8F128D9LZMDGywZrTkp9wEBro4moQCafsXvkvKf5gwecxGEPoqudvaKiDMxANZ13NKZ8aRdEnnTqMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skX1NUfE75QZnMzqBeupRBt4NRF65LrWwKXJYZwwCZRwQEWqVTcobydVDYT4NpDAK1rahaWXGZMQj3H5BpCREwU",
  "key1": "Hu3p9Uu41eAofnyMVBvycudYJdNYbYSRev9ag5VuBfWEuhyvxfX3DCWYzDgazTtcoHkyAtJAYHu1hdGtQP3bHWT",
  "key2": "2iDAyZcb1WjB2afh6tFoiwf2rrZec7Za1LiN4bixKMpedMXwfM9ekDwxgLE2yxdXDzB6ExRinMX85mvHE5uePw3F",
  "key3": "4s2qQgQUw2xRkh6vKCe7v1sfcvgFhDLYtVmVyCvtzUHfUWwo3YS8mCBryhBmg8cyhQsdV54RtzcptQQC6wnMDLov",
  "key4": "4ndTEamWaHv8bhTVZHwTbHxYKFj1QGE1dCqu4zauJeWxAhgYHQ9Fvw5gAv8HLoB4L1VqxgpVSrMHQJupjmpsDuvF",
  "key5": "4sHfNG2s9JNeuJjQ8zC7hTrsucyR5q9qg9awXgLKU6Fwx9jQYkBAJYYvjHw7yFGbEnwarPhpHeiA2aKitiCz3KBc",
  "key6": "4AEbReR3tHiPcvWSt1MQ3uPJGgGiWo6RtvLhsL8zsP92M7sDFsmsZa5A3bLi2n392qZaQ6bzyHPY9eJZi3guKHpr",
  "key7": "589vCouw7oLAMY8ZQH4dR9eRn9wwTEAsuHx24Pi1YKgfdHGwnHdbJ68AjPzwpcUZHhRk9vm4tBXaeUTSAydSbDRE",
  "key8": "62aeBWRnm4NKvsGYJVWQJcaRgxk1bsCqthedQjUCndDb8r4MugcBDgutSTWpS3tEcVKvkyAkNDtqKkuRZjqvmsWe",
  "key9": "2g7pz8Dpt4xPcruV29EXuotSEh49PntwQDFzRMBtuQd7MMEq99KYxC1mVivCfVNXVSHzQiM4DPFkjLmxDgXAXsNk",
  "key10": "59Z4XngMX1FEbcRARHDE99cGf6RBjdQ95EF5CbUBLvWqcvHfVCuAHxhun66R5qDhMShPa95KxJ5E8Dh8N84joyaD",
  "key11": "3qoZwtkdBqupx1pXy2eMMi8o4S7usZQUwiSopxG6YQsyBq46QfvFxbCFkB4Stse5wabuBgz2XZN9XeDmUf43pSoL",
  "key12": "3sa5HSbSdymuNtKq5QMSZ84w1UxbjtP3SPM7E8kmd6aa8zvNe5gouKt8uTAnUKzAx7vt89Kg1YPx2bCGvaEnmBWC",
  "key13": "3zGe8cfFRoiyt7SeS8v8Avo3vSBCajAz4HzwnbaTS6XxLY56vW3hGFQGFmh2MGHyjFi5TRR2dRDhAfBLoHNxGcxE",
  "key14": "tymNSE85Udu74MhpoB3sko8Ek9TQnhRSsmbpSfLXMYUd8vz6orpF9rdZiyAvqdofkkt15Wh6NRs4P5x5i15nKRy",
  "key15": "4rw5A4Jzbex61aWyAq5CjxFhnxtNpmBwJV7FRK5Heh1vPuBcFzLZmQtvuHhKarV44CYbWU6EHPzbQRs7Yy1Hpq9n",
  "key16": "4SYEVeK4BUBHc4N8AAZ9nMYFCrAb3wMf2B5Uqc5QhMCiYePtf7TfsWVjfGcPjy1sfZsneW4Y5Szjbh78WocQJ9jy",
  "key17": "M4AEScbYCGJ1nsC6nR5YSBrR9pXYAECxjscjRonYTK16LJHDEmsj5NsffZX9pCia6k8w9MQXeKLmibryZR6K5Pf",
  "key18": "36pbQaxtPDk7BaCb62SC5W3pKXZwSFbatPTawucFeGnVXCckebR5MoEwAmwLpdRrNGJMs7tFMLKL7AYr1E6cK1oD",
  "key19": "3CvTYe2ZPMCfX1bonrWfZ9DMzDj3HqTBhDBrsNN41yt3Cixc7i9iu1A9bNBwzkNHrsKR1YTctr9GgkZDtd2wWxc",
  "key20": "UHvNq6JQpbRQY8XEZoDx2b5NiyfpaCgNy31FUAmGzeTN5o2ffkRfoLsZuKNPL6bD6Gie9iKiCz6PQqGUwmSVf16",
  "key21": "v3Mq1TMpggpqsZjiF2FcVrPsQvX2DRTrkPPoT1McAk6H8cXg8c39LW4QnXKsGPu4hAUZUUN3gYcRXgPoUQmDZKa",
  "key22": "2mr74h8fe6nzpJpMMdwkRAsSNFsUxWPMwHnyRBa42Yz7AQPeH5PK4odw4uoc2YrRqZL3J1J71SbQoXbhVNbwpM1v",
  "key23": "NYykLkAfTa13qqwD3piUUBNdit5ovnBb5WRqbVvaHo2ScfeFad94vhsA95EnawBRDt1N8gA96Czi2xViiBwbCNw",
  "key24": "3XAP1xt1dfhafX2jUdxucA48NptYaRytehR82oGCSVZx2v9VMHtxZuiKVHfxP6U4StsY38mLK87iGgyPU5u1rgYA",
  "key25": "j7uSDDTE3ZWkhGK14NYDLVznD9r4xzMWtYuVmPtRkHGo69XMjMJTst5cWTXSPiZwEAETMpounoTbGhSxWgvqXsx",
  "key26": "3AVcLfXUGQjZVFf5LHug1JXiLjebBSxnYpHFfsbLAaZaQyD3vMipZApL8xQh2qpbHaC8q8XKyNmWNgoDiTK5NF76",
  "key27": "43N7qzCGprdksqbntTccd6dCUrBqr1FCe2FgnJaYimavcmL87wxEv5Wz92YTS9cXEAkFLFGXqcAjML175SAoSPpv"
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
