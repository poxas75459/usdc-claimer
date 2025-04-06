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
    "4pd9PvSVpSUwcv22gGPeUPu52vKPZAD48WEcvZR5ivNC92n1GykW7R6vmfGTpq99KBQLnrwUDojJTq7GLU5rNCBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kvwGUnvJtisJPbaY5Bg8jDyVeii7vRv4QWtxXJJ2NyXyycjSJNdW3Ux8ezirmgd1rFCZ8nX6NmiVEwyD2w5xHYG",
  "key1": "4bZgAe3TL3M9LH6tqXgG3bs1BrJGzBhGq3VEqs3xM6yywimQ6d8ViquV3RqrxJRjAqR89s3UQzWKjGFf3VcQYgZs",
  "key2": "5Zg2DoQDuWZCank27hxFjsecgbPjHqMpbcNJVMj5WWiZbp9TsqSUBXrwEMZgsKSbbwi8dRYhTW1C33oh8NewaTVQ",
  "key3": "4b2vbKQUpaTpNDX91cC3xKdBVHdqNLFKri6BSDWUb9e3nWW3vkBRbf5SCA1pRcbD2Q162MXvuNPEyJPQbH48RvLK",
  "key4": "3hzxDuXrxg8NpHt5ZysvM4n7cwYRVCDWfChUfvADmLohjPPHVjMzBp5paz3bQea3bpj7SWscd32vFtoZfwtZguy9",
  "key5": "5T6Fs7GoWkdTtcXKo2AXuS86p4YEo6cHiuScMKtJ3gZaKfVXnkX6dGSpMU7PzAVGDfcZogArLhkEG1UcvkbcXcno",
  "key6": "4vHmRAgbhasYodCnfaAb19JrH4B7jehEvwiANXbASzWwNNTAefRcaquZbmy71FxnyKGNjA1AsvohmjqR4J2EsG66",
  "key7": "5cZkfKo5faV1Z2DCcw3NkD9KqoXQN4DRokAMYpnxbx43jHagACbZcRdV6QYpz3zufyTbu3d3LDa6zYks96Gh5t7H",
  "key8": "4KvwqQunL7R9ep4n42VNDkaXB6MTYUXo2P4Mm4KbUFe7kd5LH1kg64aLF8vKLYuEpxHcZf6xoMeSe1SnX5CJ8b9R",
  "key9": "3J764WHFyCf6aQHmUjid1wrMkW78qu3Y6b3hPBmL75zv54uNVgQTDb511PfDizfEQNYynbwKXoLFJEVjA5XZatub",
  "key10": "2GS1yFWKNfWFG9FGPS4692ti1Qcjh33koY8Xv8pWFLqo12k2CXRyTnFX82rh5pbVbbmTJmyDznVEE5Lcad4neTzB",
  "key11": "3M2rcbh2vJPdLd12gkLa7S798fp1VwajCJJwEtxnkGkpmPx3zsGKePPFuKxtHrQGX9WjQ6byGeyeyrY1WDdwmF5A",
  "key12": "3REudcrzHg7TLxMH9sAe2snpZ5cCqKrVjizizcWLJrMq7DVCXCnJ891openZRnbtrC9RAUcjvMLMcT5d8xhuxB9W",
  "key13": "2wBU1fFx1rDBDwJCkuPoHzpnDVr3togaZXm2UJALFip1mFJXWcnqg4MCs6eggDsQ9ZmxXsyRXbsJiGMW3KhYLSBK",
  "key14": "4zWp8aWn8mReq9c19fX37g1fAMXN7XMJMYwTwmXHj1kLF5XjztCyRb1XzWYtWbSkSBhgDEV3TJrGVJGZM6gr4itW",
  "key15": "3kvvzYvQfDLq4iNup6LAd3SK9S2KReFYe22MTEMbgA5i4gGV8kag88okLqy8RB7WH7RfBWwPegtZQbfSgntYb66C",
  "key16": "WQAi4ipWsLkfmXhNv9N6Cguy9r7wmUFvRg8fCG9oZuA62DpyS2289yZV9uN2qnW5FKxGVhwMHJszgKXDhYFXPVe",
  "key17": "2vDPBXF5UdUfYHJ2N8RsFLSCz8tcyEWhFY3GFPLrtdXjvmphodyHErTW7q92XJ1xhtZgNK3rmqsU9mtnA6UaYAns",
  "key18": "2ZUoTpDANwL2EGw5oepApsDg9xLrVcViTktC9NoAfDSS9xD6QCejpCTVfpyF4fAoq3NWCzRDQcTECW65So9oxZbc",
  "key19": "V859nqwqwSeqLfSir7BX3V5wQhszCBQbPCMywS34qHtidEYeCVsFQzbMPWrA1AXYYhxfrJcFDJNY5ySiszdAWRR",
  "key20": "4xnmtHadWmfaUBq1yUiYoBV6A85M3DWesm9hiSeJu6AJip7UEyvmNxrt2wvuYAwWeFrkNcxyL6fUPxM32Qa625iL",
  "key21": "3sBXG6HnmVFr9YzZ65QXEETxi6a4Yj1386EqiQ3d5ABJhzEhLLTGWoneC6YuB8NiDiV4NWwoDFcNpn26HEqnBGur",
  "key22": "22E2EzM7cJddSrJGWqGci8FdofBfRdVGwSqcbKbQwvtxZeRLaRgmZCi5TmrSFzy1qVvQVdgEnD1z9svfh7a6hJ1Y",
  "key23": "3X4ZPLSxb1fRekWnnbzLMCFq778X2AduVcfcmxoiWySLnvkhyaeR3fkLRQagKTyjbMqVdMyyXVbCzNoVuFJKXWeV",
  "key24": "jRMxvKyXBCstWBRn3C1pU5Jvai3HtcQDPM9T2Z4HWmrn5HxR3roHZuvEurDEYH8XwRinjzUoe5VEhCV6sNXvYEC",
  "key25": "23DkqxC4KeKH65aariuDyX2QJTYHyr5eU6GFAoNwJdr1wuvKa6rfvaU9tiv6bccGfbhTG2qLyr5Qd1P6MEJyPVn9",
  "key26": "678vqS1r1dJiG53VscMs4g2SFnGM4rJdG95P7iP3ab7dbw57cszgoqYy1jWeTGFvNkGSVnkAf8kyNffRnUjGAvPR",
  "key27": "4ezcrABtGyNozTzxhQEfPyeXtx19a9MQZ4LVcAQnZ6JYxssAhWnPVAgc2S94WCsJLifzD4EvfnNGquuJznSgUmLC",
  "key28": "33NQt6aMzruY3QUwYdiAa2bhn5ZcFkt3BPj27SC7rvfZjw5as6Jzx41ysDz4CWDD1x4gnzdvAJfZYriLcpEBoqoc",
  "key29": "2XDvoi3jV14Ubzsvh9ixeqCU37sq5LafFTBE7cE1NVcuMLLhi33kLTcqmnpQocWFcFwaXLyVsZ6GRkSJv3dpeRqE",
  "key30": "3xC2GVQty9Nwnt9GpXmtHqXbbhgxDh3WahALYAPSQToh3sEeUqn6YeXaJDUvUCxiYy5zT7NGLp6YBrdHmhQYVp66",
  "key31": "4hbyS9kquewQhK4WM3XthNcBt68QNcHqH7HA7jvuhJkjzfreK8VCcTf263Qy4erFJ5pbfmb3UREuVbVEhoACfUUu",
  "key32": "5SxwLwfvJYnjUBDvRdhoQN8wGMxfHY5W3G3V9FosxaHxEpyEQfrQeMaf2gJChCFmmatBU2QWZ88y5g1eHzWRpPbs",
  "key33": "BiD4g4RXY7yLPZbAfPES5BCozT9jSR3PoXtdUW1LgBuzUHLAUVhJDFh1t7pphsjC48oyXR6RkGfJ6hmn7ttfV8Z",
  "key34": "3oTSrRPStxxX9Umax9NjEqkvGxChTCsfom6icE8fvtBqQzRkKLShzv4VpT64DkDFkBXRDzZYE6uBBPTgJJgNFyND",
  "key35": "5RFhSwhviByZVo6cpo6EZ6zHDLik9nzuySuZ2hvkGjc7nyo8iCEsEcU31rHiMkkuuKuYbeKNvjSM8KuU9yJuAYqY",
  "key36": "45WdZJAsvk73Lb1eTY8VVW1mansVB6tZgxwuVYDoztqgqDZ2CNjMDjKirS7PaKYVi1tUGZAiZxxMhNdpyp4K635Q",
  "key37": "UGv2iNygn6obVjmPyv3H6YzVfVzErnbaBD7VC6XpSEs2sEoV33HMh5hc8PzM7BhzZiEBPArBwKZZD3YaUD1oejp",
  "key38": "51ovnDHUci83fSqFr3j92BKba5usK5eUqpV7PUnuoKPJHGs1y23MdgQ3tgsaq5fRCgqQgG4cGum2wzuTq6vkdxx8",
  "key39": "33zFaUAbrKvjPum8UJCXBPh4W9VzzQrj7Dusg7f2qKr3M6crf8tUZ5dduU5185izHwUZoH6SuAHDtM3iQLKcT2zE",
  "key40": "3F57GEX6WGEqtCLWVxjRkJCscqwFtFXmdUrMRPXNor8SSM6UfJP9vJHCxMo9cj22u9j1nkH1T4qYRKZiVE7SeaT2",
  "key41": "2zqNcnBPQFc6SLPpmZUGCvfcbfp8tAWoRks12Q1egSLkjXCrxzMke8vayEizESzu81c3n5ns9H5WdNwjuxSB8iSr",
  "key42": "5PidpCsTWqpUBEmEC4uaS2xnsZ5bDHCVfR3vJxUQAotRQP9DR5NWUumbq9Dwo2wev8hute5W4wsjdiPfwueH6crj",
  "key43": "4YJQcNQDGjmaztUxQBBakeZZVYJ9SELjMeVRDcgcEb3f5EqvoY63C4KSnVfZS6DWw467yLgUQ1fjHvbQxKvMhzRs",
  "key44": "5upbEWACcFMvibMWd7S3m27idmjqmNvYNwYKmRF3QFCa5to4t1db32j27FyfuZda12PXw6Sj7DokE3UWjsgBoLZB",
  "key45": "2WaSRJV4y6LVanB7FVuuM9dywGoDGwPf5ALKZfWgUnxZj4LTF93eMaPteHMpUdAvQhKXMkehrtwgUTHPuY3krh2g",
  "key46": "iZ2MJG2RbUyQwqX9HPdohqcTprAXVEtWUTK4fRKEhtFgmVfsYpkadruWRFUTqnpMhWexywv9zHyj9knCjqDuvkk",
  "key47": "3uJFgMZDP7gvW5oddN4NY36jGLkUWPNPXeunbBzHRGiPZWV9sKwxz26cTUwKNwc4KWuUHDcuSbXy5RGRwPEDZRdu",
  "key48": "3KrChs8MTum4KUQ5jNxxMMXmJmZuh9KBrS747NnsodQeysySVzm8NXHEuurChya3cNNgdv9T29CUboRPjF2JfWaz",
  "key49": "5FCMWS34TwwtaEsEu8dZkdAscBjSF9UPtxKrbVWXkafgRgD6BNMsjG1L3uPfWnMuQPB2Roek33bH3YbmtizFUDED"
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
