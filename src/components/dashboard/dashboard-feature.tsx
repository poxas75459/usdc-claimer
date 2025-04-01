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
    "3KS5u16oJVZ8LKqfAWAA1fQgkpTJGU2jG5qLa9AC9m8qiFZfKBQKZm6UKYwVYaZJwnVmfivERoM5iJh8vfVrRhxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oeGEi6RFYMPo8Ad4jzWhkzu95YNrD8x677mdA7TZ57JqaR2Vk4f7DPpjQGpkSjdmxqXt39i21r3kuygRuTzDMMU",
  "key1": "31Mv4BHHxaSo6FWCoseR5A3mY6KVsV3YknpghvAQNrdgacToujBphRnomyUGGcZfw76bJZv4XF7pnPEYYeU9ifNc",
  "key2": "48FWL38JVwBxgpRdBMqAa5D8H7VVovuG1y37H9fN6uSrKDxcD1KF7ETxLCMoCfp6dhtQbFhQn6ws6skk8mn12Mrc",
  "key3": "5hp1acE7AGCZqpxoW1VMJoxRYUg33CmPsmxUGHNcsTgPd3AfJRSU9hCcVhg4nkSmuLnVUTpUZePzp16V7PMB48Gm",
  "key4": "42TCDUCGHLh8t4EYwPhAdobXFPdV2uGKGsSyCG7zogSYFHHaZT5MYEZY9ahERzz2d3xmekxEhiDPuamiqQNuYooN",
  "key5": "ggerh8LVWrLRvzHGgCqpwFNQqXvJZiUHL62KrmnhqVDV6ZMuZotChwxYMufgs4WAXt3mTCk9NHeaECn5pzrF5Hk",
  "key6": "p72Ggqok8Lf5d87Qky5gr5azB3uianPifq5H9tPF2mPQDyixsi6H4J98WSmfrUnVPZHanLK4LiaVFwX6wDwfMPo",
  "key7": "5UGdW2qzDZAAcErpmg4AzmnEW2MDvdJHRfp28553aYo6YhRv63x7MvQhXCcdVMoiRJrzdgxK1ymqxVYZPUYYgV29",
  "key8": "64Yq416EyTi635FsTMhRbmchgHrxa7ESVAmdi3EYSbLthah9fcdZjUMcyfcqa3ZBN9ANqKhKR8KeXjEMLcYT5R7t",
  "key9": "5f4EqG9tL26LSHEeua2CsKfrgxi4rUiC7h3ruBrsV9inoRdL8sNpanGUyS6nYkM4d7iiW34Wpro49dfibcp9TXZ2",
  "key10": "3DRKF1KQEGyqRC4kpRz9fnNXBWjnmpx6jdpkMM2YztmbRbo7jRjEJeNXA4P7E7ChqQ9GogRfb7WFnZWDvXnn1qvK",
  "key11": "Gu4NfHfYQof1DZxNj9CdBUJgbZPmDiFzE55hDRiyAiUhif8bNgowxGmncex6QDKFqJxUgvf4uQ2GwGTbJUtZU9G",
  "key12": "39ETQVspBQifjVsAvfgLDG8tBwMDcVRTvusJnJGCvRgDgB5hH9PPtZ3RRwaQjj4Lo6PduobyAWkCQYHnYGdKd3C4",
  "key13": "3VrpLrwVWVJ9dCLBa558Uqc8H6qFwKe5vVQTANodrXuR6ZbhJ6bWLi8PpWtJDMex2awzoMtUTVTaCEs6qkcrzZgf",
  "key14": "Je3ZXp8GC7m7qYjcTMMc6iFMR2PiNj77WKYk9ovLoobzTTN6EsyhA8nh9wMRDHJvSnbE6kcSxNdCfs5NTTeBsdB",
  "key15": "HJFhCkyztwCNj2iM8HFFEw16eUWdvRo4c3Kbi37KTEnx1eK1nJu5EWJNm9Vvcg6f8zWjfSUKTf4WTw43p2YH3Zy",
  "key16": "3XEWkSgQ9AzyryoZgtmnz4yit8TSfBxqSbTpWidEvc6xZMU3b3dUciysomZStTb9zpYua5NrKR2nYxCFfPyr1i4Z",
  "key17": "2KUtUAJKsUqKL6U6mvRj5KNp7eYfZcWVmY5pNbVT1hRjxiGZ9iLm3yL4XdvtW5wdcNV2pCZLRBd8gaLKSH9Jyx1n",
  "key18": "3SY2MPU465YbRHqSxHCN88eDoP5zumhKWMnYWeW4eJvyVi6wv12DBTECSqfB8afC3K4EmdXUkxJHZhThNRnEzgUB",
  "key19": "2DUGUo4MPCZevA9qaouNy2xaEpDZZfT7s4D2rsdD6LA5qcf5bWKavXHS5fzinRD8rTmoG8VaTSm7GkSLC5wVRHQf",
  "key20": "48NGfKUjbWTsfgMixXuBEiVHjSBcnYhV2aQUprCdg7Vea1QaUZgGyE3FahcECsSvYEeLuDiQ4YFKJP9EHNUpZttu",
  "key21": "5ggpniRjnvsdNtERm11WehgT5ySiMhh6zV3V276gqHQ8RVgskmwdSs7UURYSBd1VJtJK7amh4xrrZUBVovCdEViS",
  "key22": "5xh9C1iAoiZ4ae8XffvLCAnhCuFmGbSekbW89nfcyBa5M2JC1QYPCeNA1kCziL4o8TpQ5d2jiKyT94mEEnUWGVUd",
  "key23": "2K5uoRutRsNEga7dbCGJ81nCZmLHnwUU1HJWZVAyPF54zYxNe291TPRxtnkcLy3dqfbk83BL6uvM1uMtNv4CRVtQ",
  "key24": "FAkm3rhx6Gq3TKNTay3F7DvbrAughwV2Mr2wM2P6hysPycWQRKbrpKCNhF2BnnnKSQuz93eYGNBd9rDWR3tsA1f",
  "key25": "28yWFnaZMwjaC7Eag5apVyPG9sT844Mc8R73jEQifugKnNs958uJu8oXoTJuiH695iwBQP7ZnDKwLTqgNZQur3qv",
  "key26": "59QKjMcjC8UxCHjP9pAjy6agtbwZXmxdogPjKsUgQMgEkuuq36EgjvMUwe9z9Sf46orQG2s8rrNdX4s5dMQVyPoi",
  "key27": "4G7RttsQYEsWKjgH8zdcG82w7ETLT1xWGE3J1CCLCEcjmUMeDTCEwtdvoJtqEZrANRCLHBBPJdU6koPHhDogFFw6",
  "key28": "5MdnGHpNGPQbm1heu7gnugcuDcPw52omaH4NRi1jKgLnREKcpqUAb6fYvXxGqBUvQM1tmrQAX8FgrwaqVKYvDiPU",
  "key29": "29gaxT6vpho5x3rPcFkraLwdziP25N8m2dqqqA4a6jTGNos6sgYEio2aRZjCd4W8ckar8ZRERCEnkCFrCfpidQth",
  "key30": "5z7mKnbxe1jWmCvFpVQg4pxNafCRmWyHHKoh45zVZG1ib9rN4t4UJrmJLrLuDfnApJsJ72KYCcbdN4uq59T6dXXR",
  "key31": "4NHtKnhey6CSjqCw3dBCBrjraBuExA1AeALQUutcW49BpYJ47UpFe7RvCwbnphurMnPnYVY4kE9BzLsTU46JSuap",
  "key32": "4i73zxLtSY2Eb7rth7XdPZaKa2cJSJREjChbELLW2pDQd9kr8gVzZHTQ8QDZBnYG9trN9hrECAzggZY76xPTEnoJ",
  "key33": "2JgbtB39b6jXbpoJD3qh21yLetcsMs9kBiRG9tvqB19V6Fyh6bu1D15qqQYq8sA92jAM2no9unjder5aYL3QELBZ",
  "key34": "2dS3WZWFVD27w34wxPvwrUmdJCoZ2uqRoGdkGLMAg34KWZ5LXsvYnUESruaqgNC1pFFmi5T8B85imVXAhpRZLRuS",
  "key35": "4RPxyGTF9wEYQAZD3xu8HJ1xE76U3m7YaBquGXcnkfy61bQ9yc8fpBKMbaaV2jVRhAWjtjCNSn7z6bjr99VcFvk4",
  "key36": "45mQGHKTW9qedjn13srifbHuUEcXd3VAmkW8jyVumbBvqxU9yNpcDDg1vUX5HFd4p4ieazgNGr5RDu4ze8cxX44B",
  "key37": "2Nw8S3CGRPTMqCnVCYKS7ZkRbdfi8do1Gsrvgw2TAr4vPcp8Bwp9ecaur2Ed9LANGBqkNU1HzUBmFNGEqrKeGps",
  "key38": "Yw1WpgN5WPzRqysrgCspbPQr5pExpv4MYikyDKQNGzDaUGA8XbDVP9co4yzE65F92ciJqDoDpM7Ru7brwwXxUhz"
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
