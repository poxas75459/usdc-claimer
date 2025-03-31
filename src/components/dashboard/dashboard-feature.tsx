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
    "36vXcwtfN7QAFFWmSc3VkmsRGp2SyVh2CjhyB4w6wsT58uwktyBrHCrvhVGFnp9A4WRw9yJw1NwouPieetezCjQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PoS9HRSv9A1tx3A1QxykbL83PGmf2bdUdao3mrtd6TeGt4xPJKEgeB4in61LTm6NYHQmSJzBy7SJQJUnFCNSpps",
  "key1": "5ximj78NXM6nUHQVBAJNKzerudrJPsC1R2gAT1k6SB1PQZjCAGQb2m8BxWpQ95FEuCd7wuxqgZDH9rfio3vrcAc4",
  "key2": "33tVBpqKRPw1tYCMt3HZjy4eTc5EuWWj7hbob7RJhF6FtdHmLTTHySBgRpTnTTAjg5obV3absZo1aEBtJGv6iJHh",
  "key3": "3k4uYLW6azGqfVuYmmnyeDcipCs4ATi5hhhYsRpDeCHTBJtCxPVVPJBkJbSR3jxeN91bXcZULiiYiuG8MwhxZFtj",
  "key4": "5NZgvN7Ckti2Yih9wYxL4VTsKXr3LwySwFPUFk8DgkXNVpjbUdAcQjtHygBVcdNBSu6fL6xMXsAAH1zpc4po2HTq",
  "key5": "39sQbSfhKcRQ2Ji2LVvvkPhsR4dpHvqVAir3rHXV7o4kudFAQt3VmKMFqCD53GHZ2RyLmAJu6CnvfsWAbsKecr9j",
  "key6": "5u4TV7zvmtX27pEh9dudLbXD1Lc2EKtgtmyTtMhU7g2EjR9GgrmtyXvy8gjHVqEm8wweuXsxzc49xwapNBJKdtFa",
  "key7": "4ZBFx3HHQN7EfDLjoSurd1rkFzYqDXWRYFZyZzHyNQ2e9sHqYvvdHC1ChafDeU8NVeF8SPTMtEDYfuFPtN27GVrH",
  "key8": "aWuqHjSk5DtmtUnioGsuV7w9u4qPCeVwpo9dSb2FJZnrkShq9Mv4QHp9fSCMuWVLXEJXfTRjoca4MLcPKzuQvkn",
  "key9": "5gwqSVadYKG6BRWMi6CtriXmZm6QTgjPqGY3HNYC7rCyXtKRGH3JQ8zfHNZHLc2TQZm3XXJeui7sab3DDH5ucEW4",
  "key10": "3SSLpporP2BsVMM481k91ZUJAsucrgRS4Jia1PDMNUx9sVpmdohWdvqn685axcbJQRkvy4F1hN4dAdymG9YmQxDv",
  "key11": "3ie4N6FQe7LoXugq3N241VUsGQiSAhcoGtpXveSkd8goLEMP1BdD6m5bwC78uMfsNELmksvnGNU7Kb8ofQEwbVd2",
  "key12": "66eNwK9YXvzcGmn9N2whcQ6nkVJ1hTfYZKvHqcNHUm24NiCxwq35SXvuPdKzhfu2ecFdsNu9AdEMqUu7yJ9qCP9b",
  "key13": "5XAdUbgsatFVrc5623wzqwSX56gP9WjvpNwVXznGhfX5ohH26Rb3sqDD6WDiHdFGiDyBrue39mDnrTQTjcGwXY3K",
  "key14": "31LoNdRekgAeqhsCnDQ8f5cU4wNC4aCnwByFASndn613DkSpaFEkMBapzhqHoQkByc6ihtaT9bUuv6hL3eXPJnDD",
  "key15": "TiNYc1V1g5qTXiAw7uCW21NY2Qj5seWony9LsHVtGYdV3QySgHW46zyKE89FHnzuYV195ic6bUvvzocgvambkEi",
  "key16": "3zd5AxKNdzoiAdLVPHNTpbYypbaLzZziisTb6R9GeaQgJoteFJZQW2izDPKSFQ6bHazwnZBo9prLh9KuxN4GDo39",
  "key17": "RLpAKECYqMyPyE4Qs2be61Z6gJwhNB3gBx8Tu8gp3BrKMZNKs6cz8GZZH1XSTDYCHRAXzEuwAWJsBzrxubDjnSR",
  "key18": "5Jj543Utt9zyEEmtpf4ETjes4mpczgSLDPhTHzFtqFcYY3av8dW2FbZmPKn5UCLGQCcWEGTrg2ySNeBgyNgHo27A",
  "key19": "2PaE4VjnekozYpVMrQ86WS8qPbkx5Unza3X8LYdU6vrk8WxZ68BhsauRWwCEBbfxFCXJDJtReeBFbFbFcHg7KkQG",
  "key20": "3iPNscTiNFUuj27fXGJPX3FQKm8ojG8yKYTy3qkPmAVQV7eY87Cm5s7ibL6NTTjRNAvxEJK5Gf1Qxxc3KkhTP58r",
  "key21": "4bcvuWGfGyftQSdP3ViGjdhKFNShXymSpEkdgnoS8mJFJz1nJjEBAXJCQnWVVtXm8N3EUtdmrLSRgjazsFnKzv7E",
  "key22": "3xGiUCLKZtrneW6b8re5EvrLmHaFJxMQvJn1z1LARv5h6n8jhoHQzEU3XhxnAgD34Uif7XwTeiHaE6AeECP6SG9P",
  "key23": "5HFV5bi3UxSRPqNcXayWkmLKcj6ZDHVe3H3H5vtmKiUq2zzpn5QfoCBEvW2QAGeW5gkNHitDmBtsA1BAhZCXN3zm",
  "key24": "49AYg2XKAK4u89Nn4CUHkjE2h5fE21RpneUrUpDw5H39dzZDUzSstQ4fj9Db1GA6DRxuzWrAPFWoqvnPRbKfYkki",
  "key25": "qyTr2L4KCKneW5r51umcrpZR4odtCBF2FFdaV7mCaqRSQ7us1Y9158EPrQyvRSQQx92UQGAi14sjvCgoRS2tQ2t",
  "key26": "36xvzWL3Ax59TJDu5oxPCtW7mhBBBJKEmx68GFdMsG3GsUGoq3AQUPAMbU15ech6C7De2qSk3Xrv1oby3chrsKkK",
  "key27": "21D7zyGMR484eVYs4mfW5ERfWtD7X9sr1eC2MFipnxZ78nmx5HL8UqbtvmdmiMpiL2CohjvDQMaAhqLV4EyJ1Efq",
  "key28": "2RGPPvNyix7a7Nwgb9R27wpsbZJsJHovxiWMUPzBxULJc9BYAXDd5XRcG9rDpv9nSs8XCGvUCpRh7J1PAGkoxp7U",
  "key29": "2fgQLNuENXMSw2dUAachafMh6ac9MTZCoKcX5gEveUfXrPYPsXVHyVFYEYhzs6a8QSnDSvJafpWbYcBEQyT5E8na",
  "key30": "3syDnf7L7MPAYU87v12gQ7JdFHuwPXiBFvWxFshUNZUzNfSG3nPKqBQpUo9AwYDFV8eyGwtFxpBvPW32PwrXXYJe",
  "key31": "4gbz1nzEeebPfBEkTuzqMmtmHokvJ6Tq9KFnQhMwf8GKSXPRxXK7kUrVok2ZPbfuRhyxVMorSqsg7HUzSApGZzuF",
  "key32": "3kKy1gQjokCDZj6WCQjimA7ekd6yewKRAAHPYPVdiBQ3fD4TTMUgMTPqGVNmLtzx8g6Hm3D5RD8yHdoPzJccuMPB",
  "key33": "5Nm797h23qcZwdm3HZchdfg7pRKMdvUs3wpunPo5WRzimwwm4VhNZ3PNRdny1BNiSijD6hUZDwYpLidW7swz8Lyg",
  "key34": "3PXVxYyHuhMSLNoZTKqNNp7dXgqqUc7i4ZDgwiev2B6Gqo15iiEVZBzxEiQvGFQVaC9AeBSnMcMVLjLpbk7RLUEg",
  "key35": "3ej9qD7pe5XaJ3UoHx9Rk8ATbG3NvZdN6sZurdQmPTszx484wsfDfZymUzzzfbSLCkQgG4jmGNdB7GTiisSp2WrJ"
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
