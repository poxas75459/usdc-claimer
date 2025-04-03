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
    "5786yX7AFCxYbxisE8u8VXaZeco2Zt49p3T7hqG9Uga11YHrX5Jv4XdYMdXnSbJ6wtLQp96cBsr8UbfaLZ7keCMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RW1RN9mDamYW9dSF6h2aoZNq8NzW7WtAbHVdvwi27McciuYuwFCG1EZJki4crrS5CJ9ipTjUTRFg5LdxGpiMWC",
  "key1": "4xsyeUsPcPYhUcKukgq5PK3ymZk1vKgpJjmNMMRAA1TZafFYesX9jX4rWeTJTCdWS9BUfneYfS3h27jWU2hegUrB",
  "key2": "5euqbhwwFkoXQ4JEN3Db9jU95WGEvxweHUBtZDPyPXScqBJfbmmq44wnuK4VffrMFsbECRadcSwvEx31DUQXAPHx",
  "key3": "2A94rXJ1TZyRfNs7aE53d919jJvxCGVmHa6JKAiMxdZKjuzUXULfnzZhW8kA7PhJoLQMSJojhXgVo7TFMJqfzztz",
  "key4": "4ptP4X2osUVGuNvNqD7G9wfcqCqFpGLWdQAvFhFaQSpzoi2EFpMCM166F1NrqcL8qP7p3uHJr5kDVTRB9Ccwpu1g",
  "key5": "5LRG9kAtNdbhAGGETwfeDv2fkYxNhCptXD9VLKUskboVecXxXyJinwmxa3xRQrejAN9fWt4xrWesAJJbZWL9gAL9",
  "key6": "3zbkMPMy9A1amNFprBbpE6vjCmgm3KtVFYN18XhHY5WqeMYhkGvsYMkpFn9Qe6aQu673STi7T4ZVBBRZZzxjkP1A",
  "key7": "V5myG36WNGTyQr6rD4QuNvwopo75BfoULKzdXV9a8w5WCQqCn9Tk33dPHckEZW4YmbpNQmpHapWoXmUdHSB65BA",
  "key8": "4JrKrbP1AUABy46WvABvNHnXeHHeTyKXx3oNakbeKKyntM4UxAuipUuw7vA6eVydRfe1tEz8McQa8CdsD8gLozS5",
  "key9": "57GLGE722YvYpGeMDBsugAxQkfVthRqLhzp9QdTRrasaWbnQWc1cETUjwVLQuJ1HSaPhy2SPzRu5dPv1nVZqfVTg",
  "key10": "KqvSrehv2L2T5tEVymUCoHnCq2xkgF3TKkkTJDQKhYbX4GwHDq1tn88F8pK6u96U449LRxP6iivYi3MrN7Vg5d6",
  "key11": "4zHBzdG29THthcjhCHBCt24wvq9q6kwX2hfFk4EHBmymCEyDE2x7Ud7PCCnNTU2NEAmpTJ3V2k8jgj1K3bjofCer",
  "key12": "29sQKkaZpuDE4E8kaXmHhLKGB5gUan8uLDqwFBjtjaNQ2yJdaePcTbQthx2ZpgJPcwL5G99v8XXa41qY7hXcJyFf",
  "key13": "33nhn4WCgQPnj1ACoDyZVzZPp5G1mPRBkGsk48QsJyDXTDeSwcxVC54VMCgmgvTzSzxuofiZJXjeW4jyqmdR9z6H",
  "key14": "4hjkXjEP7cedHTevKHdTvo4xWxhiXM2CaPHWTY818GN33HVF15HmDZvWbjjesLFUaLHEfH3FPBFbdqZzrYcv6KzR",
  "key15": "5jcgYPHot5DxZRLX9dt3nyhH6FuJngbehZuq8LRtcj7n119edggR61fBxviAtAYDVfnveRPBy5pHFwCxc7aLRcQn",
  "key16": "48iYaQQeo9bnpUspgng333N6gKfiRmLbpZEzNj6MFjzQ4ewstBRasxSS1erc2vuQ7cZ9A7Dt6WDSpb3f1dMe78bu",
  "key17": "4Fc6tsjALoYS7Uf61eYZ9HMTrkxWqEebc5tsrtyrDXRq9X6hxFFrJXbuBCdomLXYDD25P41oYNUGhLyFP9Hvwq2H",
  "key18": "cCbf2RDwViNkATif6Zh6UcWgZ5rtWzfNC2xCnxPK5ZJakQWrapj78TSFwZzhC5Cns878Y9Uhm85sQfQsSL7bhtg",
  "key19": "gCkPwphAHV7iCgTkxZynSRxHmZqNnwMeKdFNnU3QC8b9qUTFzsAaS3z9ny66psbfesRBBRsyrrXASeieR8js92X",
  "key20": "dGdDiuPDto4dbphqifxHwKFUgVC1MdZ6t73JKS1BTUwmojoLR5KgXWGpm4VBQFCVMfu1kRUxyBTqNPsZ9veaw5N",
  "key21": "5JcRhNGsuyqLTkCFQhB7ZQdNgDZMogsgB1bgMuEWqsGNLnPoJ4JWLkPN9nXwGnXVzYTQSwUrCjhPu8QeuEJcKRun",
  "key22": "3YWuqubqnviPRoSSSgeeQ1rh2wwfyT3KLpJcLqoH634QabHjAupLPUy2wsrX9t9VX8wDVEH2sNFdDU221erqZg6z",
  "key23": "364UFxgDGuMQG2FHGULMmN3RXCHR5J3G6GitCgNA8JThHnQgGoSSAnGgHAYFEKRo4E2SQqoVo73YeWR8TmRayqJZ",
  "key24": "4vmDxQiAnERmyJtEhv9wiNGSyS6q7eRR7EtZHg77XRi5EJPoxdZCxdgds7a9Ww7qbBc5r2stnz23YzsD9H3LRUuN",
  "key25": "5oSmq5vxmow5xJ2uf18h2dfSTdg1mMGaMxiVPxG6HE5PJjHGHyQuC5AHuEUUzpMjmSUK5cwS4o95xDE9CZyVFJo3",
  "key26": "2LiSjHj9TBsEngx3gEGgprajP4pkHpV9g14wj91WwA98pFbn4CYBkJt7cxBwUrnwk7g75fAMujWmnzTvSeCN57v8",
  "key27": "4zvqcexnPVJNjFvs4Q3ttdbp3dLQBacJebxv3e4GQF63CTvBk5LxvkHNrkEdQL2aQ5NRcKGEo9sNNXeHAJKxLXsx",
  "key28": "32Mqh1ZV8wcnZ26GZ7QLxQp9HC4S7uwdpdHDNq6j8UKtwWEn7vQTbwUtNgHMFbZHfut3cvwjtWoJ3Zc5Bi1Vt6z9",
  "key29": "4b9hZU74M8SkQ6NRy4XHzXb37gK8NZvEp6e7m7qousH7jDysHcs2n8NWDKoEroLbenXVu765J4N4YusfXCi4nad",
  "key30": "4QQZCFaPxeonvYV18P8SnHT8Jhju89R7fJ3s2foe6nytJmiV2rpwxTgZ8Ui3byr8GB6u1s2LxmBomeC9fSU8JaMF",
  "key31": "3es5Hbg374gk2yTdt5EmhTmY8UY2DMYTp7qmJFvBT7BWgqihVppz5tqj9qdpfaU45zZ5KwpAPVLpru62pgBKhCRj",
  "key32": "3QVy8QqbM88S5ypR5VY34ui8jn9qfc62h4D5AXymf34zw3E85SoXCdJiy7ofkLQyrxeXvLAd91X65aG4E9b7ffEq",
  "key33": "25vqkgMheXCWF2yvz7Z3NVqVWWLCNWgEWDokSoTzu2YzugqsTjmVTMJ58L9uhYCwxAZD7nzirE1eHPofEhs6Ebd3",
  "key34": "2EKtKmVfqkGvVfFk8VwCw5B9ycLtW7FWMdfzYJcHgJm3m3Uo7GFCorgk7zFtzE8oQSBx3xJDm9H95D2ZmbD6RUUs",
  "key35": "4s5q8Ay9vr1WAqbWnEQ4YTCXYNnr7w2kUAxCZRv8HHek7auX1XgLdBLrJKzsQUo2c83i7C3MR7jkmKvbBM8csYoB",
  "key36": "47NrTkG9EXa5Sxtwckd5qg1QtMLNdq7UCs3HC6jZQ6nbWWy3PBZQdK2uyVVXKqWxS2vf6EowDQbypDFS22j1Reeh",
  "key37": "5JBT4xrrrJR81BiH2ve2zA6eEAM9Qa13WEjb9Wi7ZJTWHMepuiQpqYBu8w6EKw11qLDwC8JZMvGs6nKaX1e11Ln5",
  "key38": "2AVjSmYfgwy3GpLuBSctT5kgYsH2zjYPFTSw2jWhZ95kA7Q6hxvESNr6zMrMs5sCMh3LfkDhSqm1WePTvqJEeyYU",
  "key39": "3HfiTJqFPyYVNf5tV8n9bFiB7XTZMeKvXkwcrSHHaSeJCzmMgZALZAPQgrVKc5GT2L99wezJjsNBfFRDK3j86HCc",
  "key40": "3iFqXaG1yQPwVqp684zj1Tiw2uo5xgj1GZWHimDchweZsnoQBMJasXWhnVDQvvnbtM4LFRK4xhXnzrk6gN7K7Hao",
  "key41": "5XP7iE636LmdzFw9BuMocsSU7Eofmysp9mP1SMwEAzTnSh5rLPqTTtBy9yjTwsXozkVZCWB3V8WyvjUh3ShQ7sAN",
  "key42": "2dgK5PHPnehUVQXhJZn3wZPAYidgvtgvampkmEvniShdZhg4thn5HQV7TCVmACf297R2oBF9WiRF79oMLpgpCG6J",
  "key43": "7DQwzV6SoS3utrtM4Zk6f4cu3tBkUaFEJAs9WWWsih4MN2PLSGfWskc4kkGkDhXggr9j6UVvZiwybxPE56HiCg8",
  "key44": "515bzu8FtLWD8mwoMiPiKcZj7Ym989m1uPhA8MV652FnSU6rLKZ7nnyouUZJBmBA2nJwVwCg2P9GmdE4x8C3D8U",
  "key45": "255CX9x3vnMisSwNLV8ZJFDfsp3jaYy8mPqG6peysXRk5dtKkJ7E8ZsY1NfP4e5fw4BPTp7SWFcVzZe67Lm6Xse5",
  "key46": "4xBAzAVpDFKffim1CDCKdKNZrKRX3FzeLxD1CtFx37wwE5GBApGWT7MHyqX5RSgKv3iCsZaB1j55mVHKwxQtZgah"
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
