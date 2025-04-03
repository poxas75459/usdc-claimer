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
    "561KvbBLU6mv4ko6EzCHqFExDn9Hau1TKHZBC1KNstY9RDGGG1uM7QTMQA61aWdDYsMkHQ1emLwg9Nd7LzivNyQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ty2d14YLZh8ATrZVWmdE5ZMJzDVvcfu9hHWSgFG9VDWQn38TvsKHGpDXtsYub6JCkK7puWWVgrDTHAP1QApHz3",
  "key1": "4a9SvYk5JiqDKagpAgWNYoVWUisPkHwjzmfuKGt1hmWuTnzB7cELrUvQpxjSxRJ6Ua1UpWnUp4sKtWeowLZqAbhM",
  "key2": "58TyXaK37EMFGMTg5tHCRZqgbighRaa1xtG4fSyxNKks27oXK7EGHZ5ygV2YkcFN2w3YDy8yxHcbvK7939SzCmPJ",
  "key3": "4MzCvoYoLeQ5q27sPv265A1CdAfzGRm2V6chTYyt87C9KcFKhuEpqXcGwVX6eZmVp69XVAJoq9pmPJFk4Zq3WdYR",
  "key4": "5njMV1pUihMrLowcKeWBnpWVvkh7febE2MLFE3Thre11aW3h8gXV9Rtau9rMrRW8G7nq97bM3HUjLXHGhKdpX9mJ",
  "key5": "26NfFw8yP4J5iv6X21yTbuEQ5ZLEtrBe5oegMzxJwiyNWSuQW8yMTx3uXfQk35mCZX66Sfucgapv79MXGEhV2tmi",
  "key6": "i3afPteVPVfPWGVoF23zmDcSM4XEAU6T3vXQ4esr2isjGURbTLaet48j89uAnGZoM4kfvtEVTezZnEwXPvdT31M",
  "key7": "3aL21ntZ4oFf4RqF1UFGSEhzsWeDRykvgQy6JvoBUtSLuTVif1yednkevJUVNukNVRF6rqHMz5BD44uNF5fxFX6R",
  "key8": "66KcAy9VtTcikifnCH5dyGasVZZ9B9KxcYCeqWErMDdTwkzpukkNaqXkypErTUgUZs6h6btHmZnhDoVAk4gBKr6t",
  "key9": "4c789X6LhvEbmC85RbmVWyPD4oD1qnbvVBQpSiP9YbVLyv2eqop3NWUdY4MvCSjARz7TTCCAmNDDg6mXXa8WVeYf",
  "key10": "3s92M8fEE4iv719pV5cmxu6juF37NhXtuDVuZJaqTQkQkT9aurjofsZpMZ8ssb3X525TpDUEgRrXxmsKV5ynfK8W",
  "key11": "4W4cfiibBRBVbZ92VrFELx9CfG1r5rdcvKXCSZaaoCEs5bKo8F2zWd2fjDQoXwuG5kUY7tYnmPix2YATaG1d1gPm",
  "key12": "66yrkAPg4ameeAfbrCaG9jELUfzMwWPhFrqQK1feE6WMatKiMzCr8SefwGLeFpAqT33Xyv8kYPoofSDHdCNE6Rs4",
  "key13": "Y5or3dswMQumDyZ6q3dCsDjo48kWaQ5komL9ZLVdu6u53c5MyEL4wJiNYQxCrt4oZC41wiwHUXzoxq56Q5GGR6r",
  "key14": "3mqcuQJZggxqc57vS9rYR7WmGBvjPgC44Lw4KUtRbqyg3ER6RpUkuUGmHBZ7ML9ybUNSRc6MkJDdsF5hBbtqiNLq",
  "key15": "2pqVMmRuYHbjWVNwvb7d7Po6HPTU2R7PHXpp5RtPwHpiL1krWfuxP6W2Aybogeg2bczUHRkShdUYzWKFsuHawtgo",
  "key16": "4FaHULd62tr9nD3V8Cp2YXUsP4FX8r4zXXSMtaScBt8kgJ45CcYbbcDUAFE9uVbaQcwZJ8xifQhnVV7KM8TEvMgt",
  "key17": "2pmFY6rX6HYCdZQqfgA5cskQQZcTsm8q82cPL94GMFvqXqGPtaEst5bNnaDENSQubMu46WH6wcfTMfsheG23iRkF",
  "key18": "2jQWbxRM1Nko71hQNQx7UtdRE6Qbmsm4dQWqygKZ7dPL6w7QgBRya9GRp2ZXwHxqGTuxwpdKTjhrZib3Lpx9mx4m",
  "key19": "4RPDywMFqrsfEAsTBWNZpp2byeT6ewtjsPzpe8LwgrQ3dkiat2B6KZR48c6CXGBmPto99UutEDRxw68FWLBUMKVk",
  "key20": "5DXjxUd1PtRksqZ6XXvmuwXkuNcpYdFocaY8RYJc8UR9XQWXte9yZRdXh6Kp4QU1vpKcRUrAvdwWXunn8JvBwkXu",
  "key21": "4rv52MnYoBLMb5MKYMHma5U1HhtpwZh9Eo6CawwTrXDtVkdBef3a35yMRG83LxWwErd9eipj5NJSBM2fM8VKTrLg",
  "key22": "3MkcUTDDNEY4Ckv6EmdBoD1nudGHHTjYaz6ZAWxbWdbYszLN8F6saGyrW79jEEz2ov3GqrbUG9fZtZ1L5mZEqT7Y",
  "key23": "5qHb66Yg8RzLxRBjhEZeLSed3sisuxrPTCevJFNy2UySSeJrPrawFmhw9Vdo3PxoBS6ASashV17gPHcVoHYyvUFE",
  "key24": "2XsexAhC8PjXmFcUCNuGcAQ2Cm1qFWTM22MbafW6oLTEaYTLn3rTBs894s7qSjVwbBW6UNKMf2wL1x5aKEumRXvw",
  "key25": "5QxEgkcrX9CcKmjLxHPm8HYs7hwMfEWcRypWiTeHjjfco5GKjqJp8zdyDBUeM5NCMenxntB6PHhoHc7igPTx9o9U",
  "key26": "3eoefWKKrCP2s6qCAbUojLUTGYp5XnELfFC5U9Jmcu25Zp2G8Lsc4ZDuAd55qpjKQkQQa2wA4Y3f7bESZkBpvRJF",
  "key27": "25983jt4R1XfutkSTeG3joBaYHhDux9sR7bF9uKVopN3JWiGq2HKzb5RkF9uBZWd44xwNNDdgneeHVmwVtr2AzL8",
  "key28": "4zJyQk4emG4MCZJUSJbmbHCFRMr8ZuTSusgEbrYStsKyYT2TH8jyEoZPLxmXjPT3E42MtWUF2FW6kDz5DJHkPc1t",
  "key29": "5UpfZJQkifDJGFvzYfgPp8KTdhcybvWew8A9ETX7syjKLR7PoRy1Grpdk3yQzhDqwF4EuLDqtD1KDyZ1kR11V9Vc",
  "key30": "2d6sQXkP2yTtBdjjCAr8JCqavqtkYMnisiiyx41Mm9YDRKb6a7dVCLrEcfP2pzQWE531DFJoMh9qYMrC6n2t6ya3",
  "key31": "4GDSvjbKrHN19shBzT64ehbTCYAAgCgitEZhXUoKvdzdG97jynqXy6zZodSKwwQbjHLSuWkyLAogMHujNkvMnquU",
  "key32": "5BFHNNVWK5bLxrkF5Kihgxz9ZSsXBYiSGteF7gyfceXJCxkciAYhnsR5qz49vhp8v2nKkdA2Bkdpt8zZVHeGk3D",
  "key33": "3H4WvQpuGxkH5avt6fBL7hYvyUgumqJX71VoNbbLNMBx2wCuAgNuRQb1LraSZETEqZhBgePj1gyCJGjQT1thKjjK",
  "key34": "4xhZNFvjBwrFoes6qKfSLLYeJzEPSKi7vsYj2XhVegBfpuJMkXxc9d1kibzwS5wy9Wn5mfr4PoVBJ1X4QYHrND3A",
  "key35": "5jPvQNTNd8r1mhSWSE5FbspbNyyjQ91TsoCC8ySViK6hM6s512EBfUMuvpXizynqrnNQnYyZ5eJvMKYHxAKfRyjF",
  "key36": "A2ZB16VZtoZBJEnL3GDZracftaiUZH8JVCgm6Cy9j8DUC8XS7JHRDo8UL52rVCSLgt1WJt85ShZK9uXRjzjSv43",
  "key37": "4sZudoVmkBhth8MGj7M8yZPtbrkfHz6VXgYQAGBy9gPt7rjgyB9sQrZqZ8UBcLdi2zAqkoLChc9ktjErVtu7tzdK",
  "key38": "5PaCg37WBfNXZdDK2YDU42YtAor8JnsckBjSHa6BcwGHDrskzp2iWzYdMyKP9HjJ7bVBxznzPYF96zQANpKffpY4",
  "key39": "5p6Yrpva7r9sMBtV173o8KJdfFzX55s4b1x4WeLkrm7PFkKX8a6scx6GhAwAt9D4CjDx6N1L5jhFAKEqagguiZyx",
  "key40": "3HpmcjMhZWpTFJaEhWBUPbfVLVFsCmRj9Emi1XCinqpjb7s8fnkqMuTRZXDjwm9RxaX3sJH1foXu7WJ3hNMA21bh",
  "key41": "4Recq7iXZH1xcBvYVGkPMkMP5aXz22rdHQWXBNWKxXLVEvDYyMe9ghMUavfj4wY4FvxFkHPH5UGm1fepeqi8evk9",
  "key42": "7sRkquYySP14EB9Ya1LXc4PL6dtJTEyxwe2RZV2Wx86VJM3esweYhKemtwpXpd7PA51s9YQG4Cytg6L8MSUj433",
  "key43": "2MG1hLhFbURNcjQMDN2v9G1Jrkg5yJHDw6odyb2qcXZyFyiFqJWaSh7ijDHEgPjRzEDNLtAb45kwqfuN21gycC3X"
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
