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
    "2btMgrEEq46fMHzTbwmH4QnuKg3euTjzT7aXjXVtsVSQVsMFP9BebZpEjHpxYHNgUt4527X3KgC3nzGV3KpbvZt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YkuifrEVJBWD9L4ATrWwemfjxEfUcMegZFYoWjY4qnSjo4XMmSnQYdYsECRNJ8KK1tQbPZ21D2oTvoNmKGPehy7",
  "key1": "3w1BUjbRzkZeJAFq7Rq8zMxQ6Zg81usUtQNtmbGnemkQgGhDHfuzSjPzaPk1P1HF7kCHZLbBSJapcD653EKHjECV",
  "key2": "25Zq3zC5PoznYui3xZ7kpwuDDkMAph8mMDbSDYZ8EKdYcBE7H25Jvd1os3DhWdDjq2nguT7qY3uUN41gWerWCjpZ",
  "key3": "58gRohPJN8cBgAfiUm6fDa1zCQ7r8j5Gtdwg3JHk5S7pC7nybLQngVKuVykGq6VLqRBK9C3kz5zhfg5FH9iKZLYx",
  "key4": "51acyXf8otNiib2nzcBPNZ8vycLiMzwKqtW7U1pPRBzfK6caBRf7g1GGjrf3DSwxtj1XZLkEVHqVGsrT2DMRrFfF",
  "key5": "5fjKoE7MDFVZVoiyxzvPgapYFCJDx94MsYyqLXJMtqzcmMTBKyJGLYaVB91mxDETGggdcRqHqpqMCTteoau3dwTb",
  "key6": "5H3n6tBKvtS9EnDg7KDRcCJLFJzi7popwbtSptkKw5VkkqSbTgCYNZCz5QAt6xLzyyeAQ6jQNX6UQ8HzuZ1i9yFR",
  "key7": "2gMbVBAq32i7bJGEh2Q8jx9Mbv5J6mW7dkWDXvQww3vVZwDog6nA9ZhAFpUFWDxo5MorB5xARPSdCakExiWYESbs",
  "key8": "29Emi2iG8degt7Msjboz73HTJdRMesxo96re4LtpfaUtN84tz7cVExV7vNky7ynSuvFTyH8w4BfbnnPxSvvdWDgp",
  "key9": "5BeKyYXcqsYcfNjKBThPtVzdGp5R9MhRhfovh7p95w6wMBTdaqFBCKNqB5Xg8TQxtKHN5TATbxQTWtqgZuVhAjsy",
  "key10": "4c1XwmXEHWhKrdAWYuLcS3Avbm3gyScNbW2WQuXtARfCVys1ciPoqWvXcfFPeWCHLwcXgXGpuyRVXjZ52YtHXohV",
  "key11": "2AG3zs6xA5i7c5GWaE6jByvNYv3ix95HJ4cQUPSnT2nuf15wNJpbxEd5CFTwU9qkCkJKzH1CLsNyVA9t4x7QbZ9Q",
  "key12": "4KQ1TCC3AkePCBwd8dBvoDWW7NKVmZntGBgGZ8rCzWVvXh45XdXhFbiJXxnAhiJ1SmZgHdEKzfS7rn1yKZapebb5",
  "key13": "2QjNs6TNsZvG9UbspXLyQ3mQwwE5wbr14PLKxk9f6qchU9N5dqG8jZ65sDupZ7SG8A9QC1TigcA2QHJB19kVQ7E4",
  "key14": "51N2wg49x1GLjWMxSGUagwepvn9LZumEvQwPTCgJCJkoh68BEWiYhTzLXxow7SgGH7v1eAQVPgzR7fxA4Tu4oEm5",
  "key15": "ykQiH8rqGk834oqwijqqchvk5qN5tKTzmtEduAvTqu3F4zeKNWQ16kTLqzUSjjkKv1fGDcnB6ANFq45CbvkHbVD",
  "key16": "3pHTrJUPb427narkgYQBzV4qvndg1LZTP6HW6yJdJX4iJ1UtTdyhj5o381MnouPHU5Md3CMfGsggxhhZ3LZ3v1TG",
  "key17": "3AGcUpbYeFEApZDmngTwUmiTiCdziX4N1GPzernz1pXmUdmtBfv2p1EEqegG5nPHZkcrqwgkJiGoB4UdZGfedsb6",
  "key18": "4iQ1RsD8Ed877Up3emdLTmP1jkGTKyQXCCxyAwzj4KXXRSL58wbZmkzj4udnqKQsRNzbtcmt3sh3smu7F6Q1fRFL",
  "key19": "3QWptR5P8uvjb2cYAnE6QbDTyv9phGGaCEeEM2Lyddeib1n5efJK1nKgySy17Evz7k4VoXF4YdxbkAHxaYj7VKkD",
  "key20": "Fv8uugp32AseBLuPiRSPKqCyHKARt2RPzcjMdMhPSQ85Poh9s71nXasJGZahR955kk8m9B5VvtAvYsd4txYENhn",
  "key21": "57f9HKH8uEtsFmScRfs85phpsedsa5KnQxyH1Q8eCoXzvJ7bAWFCnLQ7u5UkSZdaJZ26gLUsZ6PJMwg3vxUCCzaC",
  "key22": "2spCiziUMNUkrMfjxPFmydY5KoSKAYDkj1Y9xvNSXWMdAAthcEAy6S3sSjpWmSY8wm42QYUg7EqSPHmsV9dUZi9P",
  "key23": "5ZLiEjdDKKDueURa8Xyee7DDpUaFx4YDnLRSheHAK95DcdfBrha3kvo9jU9t7fGgUYdz1PNTH1bdFhm9kBiuju7w",
  "key24": "59iag2XdFn42UCJsKagDTj4AgBWZNqGxeY5S4zj1p59sVkavhJxtNx8QYQgyPYq2x7pFoBW4MazJomMtP9xE5DW6",
  "key25": "4UhuAqWybU1c5F3LErXmLaVeTVvi1dZbffB9VSZXs8Lr3ydpzqNpad7Ki7BuBKhEDitixbx1H5CudjsJk71dL76n",
  "key26": "3ytt986jRyxxfMzkeRJjCqc8akSc7ZMZ5QA6qeqqWArNBKreBuLZdqHxnVXyaJWJQJjcpfe9cJdhFcmau6MNUZzY",
  "key27": "5irigxXkSgG3RVLFvSWi8sGx4M49gZeiXFfiWzGRFSB7qTTF4FNzQxQicdDVrpbyeUQVZQdmt1p8R9mj59aev5LU",
  "key28": "3CaVcvV7UADVV6j7feBfnjj7dfkhfkdPqxfhySMoLr5PA8Li6D4JtzpWybDYAzZeML2WuHictNmqJJ3ZP8sGVSQa",
  "key29": "2fRMkM5Cp4scC6WYaVhdQvXtrQLGuJevJRu8Q3iTqnRRQvb9R4gWQmSH3EDzBKMMPEXetBeHJ8ebDgD1HAP7c4UL",
  "key30": "NQhNy3vCJuiy69YSjE58BL1ZyP3Zym5cVFVyBpJ8sxK5rJxuAwypJJA3p7HMMBE4mecdh7Y1chPX8La5uduQ2ZW",
  "key31": "5TWHxRFrmnyPn8mYG11o4S8qe1c729tHKgV1yBjVYZBNPCA9inKHcGQH38ZmuJGGomhif3ZhCN6uJYurbu1fFiaf",
  "key32": "4E9oo2pbFRHWUKAp4UFYTmBdhtmmDnmobX3qXUi7CEK7tMbDBPEEcMreehReTtswgHPpSX8n913eUQCvS491kWDo",
  "key33": "27F8LXJBZTiZN327dvFLbh3KNU8d6mhqJrnKfGa9zFa6xXrg7gzzudTehs2MptFN2LgoQSHKXqXaFZ5oUvArrxrg",
  "key34": "4ccAUv6zE85DHFuDQEHiunyfJSatHEKfHbLi2sWKpXXqjPLWdpZ9HUQWXUj7XeKYnDStz29dRuXmwC8Sy92eY891",
  "key35": "3nQ19LSzkgY5R1R6L76nhR6Bzth2STpkiyGZosHdtoJiRabMuyLmd3tX2fGVFLVSXi1uHc7a6yhWbYujdZyHqnkk",
  "key36": "bazCmgwS7BrYCdSaqUQzVJrtASJJA3WRraX2cohEhw3vtNLD97RnsgGNXx8VKHzkJNEtq6ADvAHn6cMiK6wRkf6",
  "key37": "5HgMHCe9H2RU3acxD3vTPEV2d78YicsbMBsm3YnadoTha6Siku5xuemynuCL6bW1MrTiogDYPGEraGAwXso4dNa6",
  "key38": "4PWJvokmwVfiXfufjmwUThTEi4dK1rouRfNNvyff7zymfHCVmy8ZmwNeQRWvVg3ynXwUjRDwBjC9mVvcdtwio95U"
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
