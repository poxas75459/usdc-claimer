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
    "3Y5MnNASdtvkLy7YkxxhSN64s7rUPaU9RXGNSdB3jscrqiXgMAWYRGHuNnN8soSiBqeoGKU4RtBqELSrS93KQ4Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CoFvk1DePBnHChy5CReJz7R6NkNnyr3AX5JvBL7BwPzHVDhArsstC9McouAWGmvb8D2K8CfwVnkLAt2iBnnmzpy",
  "key1": "2DBr2eT8wwdzgs5iHyqsocoF4iBS92f3NiYz96yvvd3CB5VZSzEV4E3gGLq8vhxkzya3H4C2bZXAxLBeiBMfWctM",
  "key2": "24t8NsSM1HuNHiTNXf3t5UuBcvCTGoL9KwRqJe41shoQuYvwqzTwMHoCWskrPUSxYf7Nk8XxAhkYPjTnYy1R2Vq5",
  "key3": "3XsewCkgfiTYQMnShvq9GrLUqVLdXU2bvxFQgGUS92BCUnj7PUmYy8TRSdanQFJutmGi2hySzU77X1z4PWzeBbd6",
  "key4": "2xQdT6QDuVMBFQse3McRNtUBZoiw5j1hzVMwVcSXkMHzxLaewjVuxiv319zdxrVKV2AXkNeQksdHXNftvsoWupjX",
  "key5": "3DHxg7z4fT8a3F6votNLcjwxRMVkM1pEU6oHCoyXjD8Szouu5rjgntjpymVYaaEdcMNxALPnLMTvxmM9G5micby9",
  "key6": "2WwJoyFVejF61f2uLWDM9r72LGCtzKLkTKnhSAX6PKbGyM47nNM4xYPjpgjXErjsviaQruB63og4xCsHntu2e7cX",
  "key7": "5ZgXJ7hCMNsCLBVDB1fpAyMjQACV1avcu9L7v4m3M73SWZRJLt7cRutFuzkfb7JNZ4JJMWvXVqJFRKucRFXnHjZr",
  "key8": "4YC8RJesWT8oWv4e5hg1v7bitNEYQ5irQDjcTuz76f8gXeZW19vxuVcEYMBszJnqt4qKeSCzEAJm71bcjancBcUH",
  "key9": "26UWxtj2DaiVA396VFRWtAye5HrXzY8UDxd6NDBGMzu3mYv6RaM7vtV9KbPDZbcYGtedVcysXrKx95JmEMknsXkC",
  "key10": "3KkJEvwPH8BqgnWN6UiZJWN6Jg4cWHPUrZm4TtrU4cDEvpjWbFV9MLg2VYtoJTnP2cLUn8bKLhdM833D7DcxzA8H",
  "key11": "4dxxW8cisKuCHqfTPD6s98uq36PtPFGUGeges4woHZEBHGVaEvnHvXabY33hqgwrKXoJuMC3f3arF6NRA9rFrfev",
  "key12": "SCrydF7DR4iai2K6jKURJmnyZ1YMsocKWSPXuxUNPx8vT4RMREhPesqag9zE7o9VEiSxgHRtafiecj42u2ke1iC",
  "key13": "H2y56PJtXGZXF2SRTKMvfS8sdZZokkEPW3jCPxtJ3U1NJfWH19NdnAjAU2cqQA5DYSn7ckFpKCetSoaZ2ve5hwE",
  "key14": "VvLSB6jfqDbVhU6eVw5SjiQ3mPhsoJH8L9q5LNYMfjpb4jzY94g9Gq4yXBChrpR4qYoJ4CJz6HuZMTgjqp9HyKK",
  "key15": "22wr2VdKg7x7QZp8rSSMxE2ShzaUZ4hyL8qMccjUNmfeCmTAriaAguRvcvRkugWrV8vG36t6t9KLZoaVWiutcecs",
  "key16": "2Ek1ZjwoMUibDuuiWaoU46qgcCtc1J7HddEiRarU1Whg5QadcsrjAY1xLFZLhPmT2N4YgbbaarBVFrGSEyehAdfK",
  "key17": "2ujMdz8WN2nY7DkfjF4vSs8746xkL58KiDHhiYRcYkT3jGPbyzK8rHiW8bexgybJ3AANmz17iNZEcdMfAZieP62u",
  "key18": "5LBzYazuinnwi7e4tasQTKXC4xdBYWYRzRc1YwEefrAStC3ovL6fxFajh9RNbyyoFgDmxkVHecxPNiaJJToHAcSu",
  "key19": "5GN62vkhTYBjXGKz6fSMaH6xYsB2grcoPV7NZgWvBucN6Q3Hf3CahKcZ1EHzrWv3GYWj1PQ8Rj3pNPi9D77bzYPd",
  "key20": "4RKpnnGKEjUp9vyw31gCY7WGfQtFj8mdZa7LkYc5dVmKZRcaUHoENmg5bbEgiquUz7EVrFgG6ixNzyQnbopi9oSq",
  "key21": "376wGzLZGu7iAYWS3CvUupx9uBcvbZ59txghEWwJcH7ngstEkcFz4N3Hcr9wNkZtSuxQ53GXjKuGbPVMKSvYdGpG",
  "key22": "5693kw1CaNzb4Biy7rENUPfV1XDYHcUBNPkH58wnMYzfLVmJcs6xDfXJoaaTH4xbaGtdpDuVQs4i6g5waUm6x8oL",
  "key23": "5ozUxYKcA88SrcHY48Atkd45Yh91vLYMbjZREkNqkGwww6NQXG2oQ1LZQMQ1TUf3khTQVfpN1FXhwd6KmPePmt2V",
  "key24": "5aJ8B2nGVMWjPgto6oM3YDs5BcLPSGtYUoW1uYn5ipCb5d7rsbSihvZPzvASCrPD2CPXbmDsYR1wKQ1D4dE8PH2g",
  "key25": "48rmPa1nFbyVRZetnaDqC1dw8jJDvqr6JUhucQhopGngPEKHFknobPkDDu4mjEHmeicvQrChbUPbmMquDzpTZoRA",
  "key26": "57bDbtR3y38WdcCnNoLXWe7AJznZf6t16bhem6YBiZnPqUsY3Qpm7MuKJuVSZLM8FhU8wZpKM1qXUJRQxgi8Ucep",
  "key27": "3oBv2NS2aP1M1YAPYDhEwpaikRSUWfU5jqWPGFkqj4XihgJv65UKvBsRYkkTfXGJfHKR1QqETnHD1U2g5Y5tTZoA",
  "key28": "3EraXxZsWyTuec5jGzMB85r93xTSEnAGiTLBwNqXT38emNSSVsfxr6HRTcQYxBSiLQ6qjmnYxYqPjJwPQyubUbJJ",
  "key29": "2YXaEc2T4nkEHS8iaYeKnB4roQ62Vyyf4FR5S1jC7fK1S9GUCQmuaX1LcW9xNP162D6kcL6oqyGUeFrnj9NruHjU",
  "key30": "3EV8DCJ3jgidaKqBpuY1Cs7sMxe93rp5qLungAgABN2N6VR5iS9VufN6Q974afRfQABnZ6GYGWVmPbXFykpHG5SB",
  "key31": "38r5tDmBaZdX2DeKa5RauNufdoDw3HDmuu2mFappoS56mtKZmwhovjRgHqDCry7nxggCPxqj7u7SbRZk7tZ1usfq",
  "key32": "3qg4RVZvbBmikCgAPXj4aLwfMpJ1nWsPv1ZgDXrXpWc1pN617xEP7wAU1iDdgL9SUDuZuU6zztSbqoBMSe5Pum61",
  "key33": "3Xk6nAYRjW2S63U9QJN7sn8LHG6LSiaLFgAXUC3MFspMDUP4mEHbYHCpj6Z5c4XkVrZqUJ7eV7tahwXa9SRHzQqo",
  "key34": "2m6R1pWNKeKwMti7gCEHNmH8q57yRBUyZSiQ3fNgmmejK65gWAoDF5LeSY7pECsQNWJoHeGYCR9mUwwkfKnRBbTc",
  "key35": "5F9rYNBSpPZfDaNQds4senLmkxjCXLq94nkrDYaxQP59cz2KyM551qjsT8FYqKnGjCAv1WHSYsihBvB6X23M2YHi",
  "key36": "3UbR3AFsrstgVpyiPRD5wREM1mJYBCwdTng3YQtdR2Ea4k6UiGvAz9JsqaLjAAFXR3kkkuQ82Zyn4yqAGcypKQd6",
  "key37": "3bB5PhX7QgCADa5qDCHDYL3zHV3zkcast92NS5e1s5R4gowNxK5YJFKx8v25zZ5mb6dnpXjvXouwwe5ZLqGxB8wv",
  "key38": "6oSKfknvR4yQPK4ewMZkyfyYEAGzAZVgSaLgYqDMjBe1pZWFsAj3i4vJZj6nmQXQap3arsBvcgLrzaTTzmqwizu"
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
