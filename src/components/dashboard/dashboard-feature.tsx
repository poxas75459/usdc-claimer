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
    "4ACYrXkcdfPkYB8d1ovEmEXFrke25G1KkrgB56nzyABdpGXrCFNZgLccQ7S78qQMt4FXYLm5oafN7vzi5fbRGuQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rFGVYxuGt231oADVDdJi1eiuwbPvr35V6PkgXbojRp9KLW1gtX2eeSASfb77tSX7DuaiaAwvNygow2Ysre1zwrc",
  "key1": "WnGBdaMyJhPogkxtyVKn1sBXmmSVhuLXq5uVRy2h9GCRjBNZxTgYCm46y3AXDyy7H54e8BKtxmCsUAAYKQmyoJE",
  "key2": "5JKVZmwWjXxPxh66Un5Y2b8bBcL8XtgbAWgBNuHwpmVfXSFbhhkjrwLrW3nrKCvLtAHd3hEEfrtZ1YgqYphrrGzM",
  "key3": "4JjoWfGLmNdC8zFK7X66LBZHofs2QdFywjbuoZ7LsK7AcS7DygKfbK8n6RXJFaGgx3zJEc7LWUP2BMp5sD4xyANi",
  "key4": "4oBMHQBtzEdPL6qheNt5pSEtUsj9HS38k8otMAHzVVRqepweanfMSRqircTrrhx24EZuFnQxVN4grfmVqvMV3hXW",
  "key5": "MJAQN22zduMppDG9jWzeehUimkTwnH4R77b5oBy5FMBH6pi7yuUZgebQGAFnBKauTHfctHya55ZBeqmVQ1fFZF8",
  "key6": "5Xyos7TW8vqJ28j5SwJgxto4jfKUkCUvfweZGAMC6LgNVs3N69p38C5qUakKsnoSfNNHMiteksrPau85HRrRPYB3",
  "key7": "4p21zMwAkiwLN8aCff14REfxNSj9qU7uU9wGvkZgVoTexyA6VKhrDGYzNj7AarWNaBbXcHx16dxrpcoMdp2oEtk",
  "key8": "3FBcyhrWpcQYLPS6MbA89AauYQEv9NqGpdv6iZzLJbo9TyA3fwokZSSeMpF7gr72xAbPQZBzLbpiiKDiHVJnk1xm",
  "key9": "5DpM7WDBXJPHPCt1HadJ2adiWZ5aX3HuberyX1ByMLnhgMsUfbiQx6cQSW1siSYsUWFsEt595JAfMB18LdXTH34a",
  "key10": "22MqsdL24nw31ZKoP22AcpA1KL2HzChSCckcJXFSHDDHcURJDY7zDxEJura38vkj1ciRKozpuAQMdrQ9K9m3MSBg",
  "key11": "4Lw8PpZNQ4ZsK7Ev57B2F7zfArQSEdCrXE45woEZMjfheo9p7axAYjdP7nxdHHdXvX8XYoRSmvuBUSQHWFE8J2XM",
  "key12": "39cvW2QTcUToZughNFziZ1bKynEtcDHv7Wa4VVVL8nzzD52ELL1hbBadqotWts61opgFYYLtEUxHiWftYZG9FiVS",
  "key13": "5RpXWj8s3P3YpJgPKURxJrsPDx9CBkSct8APzqor19o3VhYjwQvdin2K8MdijxQUhWkLcCGk9PMcGPEmaeHfDLea",
  "key14": "4VKuhYkDrxGQPj5zSBqmeCL1sj7pPBcRdVMvrGK8JmQN1d2WkfTAA6KrW7P8ypNqfrZomR1JJnfaTLtQSixCaTQA",
  "key15": "5WWUDhqLQefWHHeuXrZkLMSUupTVU9nRzry6FMx3E1CztE43417zeZjj49NJVxC4JfV3S7xK43DLUBJCGtEodx9H",
  "key16": "5pyUyNy9taYYKbTbjyEXdp8f8YMAfA5tUUbyq1oKrFaD6ARfAT43T4gViVtFmZnhf4WWosJSphBdM5NLjUGWHVDH",
  "key17": "4zompnoegLJsr4dHcUixaC5AeW7C2hjjkAXvUtACZzJN1ivB58mmcqjtiBe87mq1EhVCZjLNkECKNrx4FNrjsmMo",
  "key18": "5QVFp3dW6BkYDnfQLScKaWWMTW3VXfrXHqc6zuLgexzEDp7HfTvTUyWuBRUaXojNmiZT377FqU4ecpM1Jni8VxbM",
  "key19": "4GSw9UXArHEZAUmZA38cMNuboDNphPwLmptfgDVDLyUaWcVDrmiYDrp6ifRxmybQWWPicEfYrZyYoJUivpo1juTL",
  "key20": "4aKhHrf4myjmZR1W6YuK8ZJpgbnMfJfZsiox3xF5kPkQKfy3ghoYe6DNZbsaYWn1DdQNAwjmjEekTxRcQp4CBhGP",
  "key21": "4iHcfz9yVtWSsN6gUQo2WLQ61ieeWXybarhAWGkzP4tjxNGiNMFEQC4DgWG8x3wmjxzyEzd7sRB9cWgrQYUM7RUr",
  "key22": "5BqGhVCAc6XcBW1rGPndT8czxrVaViFTNFJR3BhtGqeutDRoreHSKsAocAVuTZwhs1DJQSCva2ZLqUNx1tMynnKB",
  "key23": "53bRSYn3KrLbv2RFMbi2xn6L8tjretDhHmarSjvXgYc1VX8HjZd1CjKuA3KcANHfpR1heU9M1M3PtcjV5AHDgZ3H",
  "key24": "2ksABEULtjpwx5BKoEw6nW8qRjVFn4LkeoNzmSD79YC5FNp6HxJhyAUipZZL9tJk8wtJkQN6VmqEY1QvYtki7fE4",
  "key25": "rciw44NaN5rbRL79Pae62aXBm4ovsgomPjAujCwsYN1a8ggdZAwUeoE5R1Kd1wVQ2XtsfFHfzCFxHCKrxXioUyt",
  "key26": "5oCCitMoEcTVqv5Wb9yqCaZEQLXRXveZRNZ1jo7S6m7DHHtjgQasSciViwdXW4z7C1Wp4i14pJsHmfqyXyKW9tGZ",
  "key27": "2JtQuAsVMPMHgLPEf2EkNzag4qTtprn8CLerL8Q5sJcK5vPXc2yF3CSWYRzJhasKyz8LjcGPFxh6qjvNgZcWWepa",
  "key28": "3CYmC8EeXvSJ2Dm5vLcGJf2TVsRaYst4wTs97218E7kHdJoHxWYXfksh9a3tNuv91AwWGtsMWMM8XGQVVVHPeaxZ",
  "key29": "5aaGqC4KhTmanyfNp5oBGDS9QXMobUJhHDQPepdTAcZTouwzYP3vZu4VDVEqVN1hYdK73W8g91BHiG8SrKYTLbY6",
  "key30": "3rojFqA8XeHHjbRvXbT1k8GPu7Bm2BW6tAzCCxJibQjwKFTFWE22FTNnRbUQVb11ygTNyZUtCqgaPbo5y138NB1P",
  "key31": "669yQWtzSeztDfEa1ti7qkoBKWmv2jKAjG7GDYVTMjt98Fs5JqNH62z7fCetpheeQDSEnS8QobLtK3GMgmZ3upsv",
  "key32": "6UsLjtu2iXGntYNYjTvW3zoGpQMcmsMqTUteU5K1Snt9sjAGnDk5WKNhsDGXwiTHmKsSWhGtbtmz9vGfPTowTxA",
  "key33": "26mZWG7YRffr4Hsp2a1JnXcDtB2CGLPhHAX7cChKeKeVwD1atPsN6WtbJd89NZ2enw5DnAE5RTwJV3VAQ9qBYJ46",
  "key34": "3PrkE9KnQmvi9g6LfdHpuJxboz7tnrzeUjDMyEKvE6uMwveKUMYH97UwbdWgU3k1Cs1aRevq1Ck5N7LkQeFwzexK",
  "key35": "4yWmpHkvAJoAJ9oLRT1w3uHYJUJV9WZrZKpAubXnVoq2qgpjpvyKi1Mf7Grby3rtw4qSPV8VbjYPYtyBXzvp6QQE",
  "key36": "4QG2hp3kkKRHfuHnaFaXYi8ZArKSRQy6RA9gP3WHhG88c29wgNJxoBA9YgF8LbhDMhawyszsQaLbGvrq14AVB6fE",
  "key37": "5pK2UXypvW4ymFRNngkk4XV3677aCc7MfXZhtETGvk7U8nkYdx43YrJasCbv8BVY8cT8rFc7D4NGGVjRGf14gB1j",
  "key38": "2vUZ1PghQbgXV8LeuQ4iaTmmCEyYp3xT8irWt7qo9BNvifFQXkkVF5xrwNWSQcecRGsqFdXwbhrRJndTsM7xj7pY",
  "key39": "4deWK6QgAzGiURgfZdn7jcPzgXTDpp8HFGfP2YpwyQkDKsK8VFArrcFb9jvPUJJLEFf1u7f8WYn7a2RFDPr1NWpE",
  "key40": "wz5vFdHx8swymririW23dwSU9RcXpjrtz71BJ6qQFAaVumGR2koC4cdr2MM979BrLTdMDCPBXZEQDd98JNEwRF4",
  "key41": "4joi1diWYS2XUWbcfn3U1oEHJ8ZoxWJeLjiYttk2DVDPdF8gi6e1qkWGQva2s7crTJKbkFSSJAqy7TytEa6khUbL",
  "key42": "3UkZpJ8k1nPgf3xBLKx63M6acLJ5hKHYqrK35fVuNGYGZpA4247BL8Fij2vHkxtzqHc1hKbudEb7Uhxum3P6NHBd",
  "key43": "5zWNyhZFoVnT7bmbqVEA2gYoNerGJNWZwHGLRwKpGXDJFbN2bQMebVSSHwaYzvaQufXp5xK3NyztoiWHZAhuKt3X",
  "key44": "2x6veZF1WVWhihAxEDVVdgHaPedvj9Pv1SnnRaT5MEXFd1hc7474mrCAESCnXSch6EKLeRGWNt2xZgUaDBek7oBs"
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
