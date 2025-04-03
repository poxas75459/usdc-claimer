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
    "5MvNFprjPieZPgkKyLRHcd6u3LoNEmkQYvwc26fvHFePA251wv4MEN2Ce9bHDBeZ3FbnJrxnsYhnh7kTZqC4vmKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKGkwgEWWBa8oT8afJeX1X7g5ZZjBQ8U46feLW2GrtnsFNUSriWfPhVSd1KFh5CBPYzgBzgnu2DD1zy2okZqk63",
  "key1": "5rScPu9nS5TNEYXBWYSsj6gaCajEs2bcW5pwACKn18HNrysXDyWCtkQG7zrebc2dz9gZvCKcUk11pC8whU79TtWj",
  "key2": "e3vhgSDxaUUPzhKbTqBp6LZK2267m1eAsZoPqLeUhY6mWo6TNTWFeoy36zvPdisaQ1HzBYAw96kZf4fS7im72g5",
  "key3": "3AK2sfQfKaBuX9N2sVxXtVxg6Vkd5E32xN1a1NfE78EftfCEsg4bLX2GT27QffqxZDY1zi7v9PhGeXzQN3PLFW5x",
  "key4": "fJmt3QA7qWD1RXqn3LXi8uxgVqDHGu2iYk4Kdpg5115c5C1zmxAurG8EqdxSkvvh82ME8uymutBQMdQZBWKX5nW",
  "key5": "4E21ceYTkVTmzNJhRSABCzPvu5MP8UMJcTqLwHaUQWkJUm1ch8jmiTuSytJPiTEDAUK8MEYgToN5sZT8p99PRVY8",
  "key6": "5Cu2PnhFFNJvBBqSfYEpbEAZsipFZmqMWyCjgSwJEZ3oVE9S3UvcyNrqFDcnDXzvZDZeDz3qmUdHwWqtkVpe1ZNb",
  "key7": "4wzcrDxWcpBNC57pJ6fp5GAZuiy6vLoBFGQEKRySa7ai2xRQMqfxrKZCr2cAFChCUEu6LKweFhtfXNFPJJD2oxGn",
  "key8": "4omVpjBvMbJptg1FcT8GiSohusDnGu1D79v6xhNJwpSuREU6JVDV3KXGaJN73KZsHVdJ2SAqKLig25cH1meCRbLR",
  "key9": "DmFuJidoUG876omA5SCFsNUm8EiCbLQpuAi6bDM5M4EM5u7jf8BsJJH5cJqXQces9uNmtPowd26whfYc1W7yvWc",
  "key10": "RnwSQDmigAa2E51q44fySGdKbvaDgKWHs3oJDitMBGADCC8owqmYv9VRLeuLKDwzvvCnHTSEfiDNaAfvEvMTKMC",
  "key11": "5VWECDzncNVTo3JrGLVHxCpEPreEa6v4Mq9kaqy4k8mjiu8hEghhDqo1Ygqta2AyeLNRyto4smPEDRUMV4KEVeGA",
  "key12": "g5A8tZz8Ynk1cPQEJ8TGHqmRnTCBCKop2etZYo8N7H6eZ9eUAq1YcZGUmHuch7nsfBbuAArPqDFaopWAt54ag4m",
  "key13": "4S8N3MEdNjSGEXzdwmaasbzSe4P7pKsENZ7p7tPeqT6tpfXt8qrTJnvcmKQpTMYH3m8pTubZ31TbWaF9rzXRFNoB",
  "key14": "5EW3ucy1yiCbEefM91c5gWxYcWZUPFhkY11UTSpGjiMsNYTetiMRi34xxsLckHTVh4nq9BQyfj1CmKjLNXH8zUmY",
  "key15": "2LHGuAhfuyL8MBm4AH7TohHAmQFBCLjsrZTEeT1G6C4aVehxMdBnREh6TbdiVpdcoi6J5ckuDkfuQKCWjTj3GEYU",
  "key16": "5UoQDnZW3bEQvf1pHZbJ5D8s7MTD3aywPS8Ez2dUJi2UfnkwmnEakMVMo4SnXyCgrQPgy3mhk8L7KnSusZDd1Ubb",
  "key17": "4VEwihjufPYjZiVrtTvjLu59NBr62ocr5n3fNfGW23TvMAfagQr3wJoE88ecLtXhmyXMgQjbmim5DWyK9xSSjxDm",
  "key18": "P9fXc9HXBQBu1Zkqy3MbTcyf8PHic9jryGn2pmr5TqmYfoRG9irRGbTDmfiYdhJhxeZ952pi9wYycZd1c7tu7bA",
  "key19": "554ASyVikdfy7QxdGP7kZMgSH3fFhweTg2Er7ut2jjp2bSZxD4YaER6vMabq8zXnyzb8JALmM857Ee1xGxPphbcu",
  "key20": "AynV4f8LdTjTdAKJ9psvMEbBhgyoQqKQvHGPM3tDsrpB2B8nx8LmmXE4Jg2oUKwor9T3kKwRdBoQhW2pDyvPJtw",
  "key21": "3sfaHM9vsiBdpkKej6jYsGApL2gHDupNcrpeE5eqymBKB9ouZtmF1F9xxENecTX2sdnw5kMYRcVbKqBLuk4hhR9m",
  "key22": "Jtzrqj4JLKhDPtf84ZRAhAyvtkKJLKjRWXgCZVVXFBktLToxuqr4qpYnn6Lq6v76FuLiS3o9h5qTR1WGufCWjct",
  "key23": "344GCVDXvTGT9rnXxy3RjeK2FDnUdEBUFpcL13VzZPVVgjGoEmdgy7SqiyVcgf5wBjbHuEsqBiywPPWK73zyxN12",
  "key24": "7fNmo2SAFZEoW6fvaDg29tp5Dk8RR82mA1tDbTREEbgK3vXbAvCp6Ci5B8tsG36EBk7CssF4eZsjmv5H3wXWdyd",
  "key25": "3FMgSGdYJC6TKwPNRWkT2iUhA1ALrY11Qc6eNMhCLCGSirxsuRQLu9dpNgJT1pd956J8bwZmSYSt1a8WGLg1x5UJ",
  "key26": "4L8qHy1MoZSqE2MH9wPUGx3K6eKpYiSiV5u7gYVLiVFr8BZQmn4rUEyn3koZixnXDiuZV73H33tsgEFUE4amJ5wx",
  "key27": "2tKrVwERNqV6cH9dQyLLusfH77CKMkGqhw1jhsaCCMGFTdfXE74FGFLbp488NeXvcm3f3WaJnHdFPeY7U5vvomjk"
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
