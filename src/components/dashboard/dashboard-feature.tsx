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
    "vhLiFkoTUtwfEfWpZoBXrZHuAyEAyHwTaZFdCKyACZpWgAET3riJzADa9fZLsuPM1fjT9TnvCczT89y1PsbPpod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1hyAYYeD9Xvjq48Far3HS8roivLh7Fgyt2B4YDQDeFytQbkuvQ6hGbsrEmqmS787TmTPNRSViMXJiPKtM7SXJ1",
  "key1": "2GDtWMWTxLGsWmjkqZK3FmdGJiFeKzAwZdnrG7PH9TQ7XhnSzesYVp6KtQwKVQMupPhiQhdyxBit4mYyPRNA9AFB",
  "key2": "2k1vTJT213uhTTuBTAePFnUCxkmiZXoDMPx9JqfJ6sySUe5xte5Pm4vyDgcQU3Ce79otodGN1GwgzpdyMoN9WbX8",
  "key3": "LUqyzVSXc5heUnA5tmQmD8VjFGjp3LLSVN8UPrdKddWnC2NhyqCvaDFS1Bm2ecQwpearffYBSYDkBTHX7cX9BCs",
  "key4": "5mj8mxcs4SaqbRL6qQKgVbchJBjjWzn2g8eUqGZoY2RB9saXpzBcc2dYDBpakRV16ybaCDNabx2GWa9n2gWyULgM",
  "key5": "61qvXrWo5Kvbc5W2vZKdN4ANpD7x6xqHU7LiF2FsJ4UsbJBYd6TthATREPkaUf2FcmzCLB7S9EZxEXZ9ysx7bMoV",
  "key6": "65Tw83egyb5TvVkDFWEPQCPmFgN6vV65VCVRmE7PLWMYo52xHRBaVJXdTFoocgxtGXmDeUbYY1ALUozpzXjEETfp",
  "key7": "2mwSf5xzBaMdYwge27ZHNhnxA3gq5ba3nzjBzpuH3z2UEK4mgdj9iRr9UFZJ8SDChE3sKS1qn7fcb7bUFWK2JLfG",
  "key8": "Hxi2JEXNQHo3ksXDMeAvp4FVwmv5Ew871havKHFWaVbZr6RPMte6NK6tHB1fYAL2fQsijLWduJLjiaxjgoPV8Vq",
  "key9": "QLucPEcsyEqpHUtQtBvZ11xXn6Skg3geaa9m7XKbqL8WdB8XV6E55W3P45qbDCAaJgMub8hxvV8oKvu7hX6jCRv",
  "key10": "KGYv3EyzXQF4pD7BUooJ6G3mhvW7ooHX5aFBaaVgDLSaLF9D5qYbMVK2ycY8t2W1uBTBjy5njUeojNrx4XomzVj",
  "key11": "5jVfcf96uLWbUA8SVqtkTkQ5RN8KL9Nx9p6DDxa5quLN7UsjeXK3F4asz5oouMExhbTYLwchiGQhn3usUE6Rq1k2",
  "key12": "5AGCNKvRc9bNyRrkHbavc1gHYgEZBHkeyf99Nr5X7fjKBJTjb3JNJf81Vui9PLjkPR3B8XFWmkvz7vRRcL9gzVCk",
  "key13": "jEtpr9xVEXQD8uRHL3T4X554BqBVj1xTkKg8fU2MzCTjzTcHVK48SS16cbHDo39WpcQsab2zAPkJU2y4V27buap",
  "key14": "Gi2mEidcmLH9w4NmKMHztAGDUqRH8JX4ymrfMNWRFiqy9pTTL2BfAScrLrCjCaCShZz6BjLZzozJW7qANT2Be1E",
  "key15": "4uxTYwWJuxhMpf28ySniYtACegqGHCud17LHxzKwLWBLz1tsya7DxewLWt2Hrhft3RFNzKXHTdeX9R5aW1xvQGwU",
  "key16": "4NGSDQ8HoxiZiC7B9vQ3bHETUQtwZhF3ZxAR39PpkijVbe5yeMKeQkzSgtj9HRu1PfMg9pGKC5vbtYB4fioA5LsT",
  "key17": "2CQCP9mbyfiahwrhDw1TYfUngspaZqKBFjHwG1CMSujZ5Emu7uGpZHuuqgjzCkLwup1zzMsYpyFncnvWkYybGru5",
  "key18": "2QmFwdotYqxVh6VyE5xwRnJQWE1iKaKCBQ24taes5ttwa28MUyTkeY8SikfPXvRSDtUpRnwGDj4MNgRUyNNWE86R",
  "key19": "5wBh5darq1qt37r1HXETqtDdizJSWaE3SrvMWkMJqgYk4RKLQWKQkWrVGupBjAyKYH8qSxVTVsHLMPsphm3CLnY4",
  "key20": "4J14A4Jr43X9FFawb8oQS9ynw5CUeF7Kw9jbmdoYrNZ1jauGqDJv1CWEtV33riXz9k7hdnwEfosuih2ch5cboy7G",
  "key21": "5ytUs7X3LYChyBVkBMx3ehZvfbjMDWdUiTukRGSo7mpune4W2rttFEJhiyWzeQoznwUwMmEEWfGpQfmGjW9K9pEP",
  "key22": "2BFkvzuz1CqQ3WSXGVZ3ZGxQE4sRvHVY75BAzJ1YBmvgjoWbLgngWi3qD7jZnyMHBGoUbKVRV6UTyiKHu8RrZtVF",
  "key23": "3NbqjuCsvAWHyJ6KRE8bQ86zPt4FzWW6SXcvc72P87LEpEmpRGudspgFhNXjrv75XQ7zqGLza4qanJKoL32W6nyG",
  "key24": "4LS5AAhRowxEFR9NGya9Logh3Wgs9gmnrSMbLeW2w8uYk6fCcZ5wQkujVZz79MRDUEQQ3AYTeTPEi9ZNkE5uz1Gq",
  "key25": "eBeYx3rPX6TYKz1gb5FakMpKFMDsjcbxe3T843eUwxk7Dgq6Wnhai66pemNQ8vCnLskpmU3CZVHDESi5cM7bmnE",
  "key26": "5d267Ppc5deKHK49mUdWDK3XFLqzZiJfsJBqXFEvQUBSAdXexzAGTzx4nYkkToxgBSSL6NdxvpsriugKK2P21X8W",
  "key27": "4zYo1sta8Bbw6KTdXX3nYndbXcahVEpenj4vXpRrFU3ujVupwFEdHFLpuj2hmqyrkGuSa6kV9ohrTXsCr2masvmK",
  "key28": "58LbtC1oH6WbK1n2AjxgSzkVYzjvkmgetktbnK2fz8roNVw28xbAXsiV3iuwYD6EQ5X9Xmg6gZrXxTTCV4aWSJap",
  "key29": "8ZeRFVS6L6s4JphejaLBaLtazgsKVXQJReBPjpkiDacSYyozSYhhd9s38rotLX4TCcvDn4vXFiKNwXbpr3gmLod",
  "key30": "e6aRq9iioVsVBDqMw1S9ETBg1pDLUUwxn3V2GoKh5TPWG7XNC63vgqAxEMzgNvbxpnSv7KPCrzsjTmDJGpuEnF4",
  "key31": "5BSXKvSVNwSAyc8dp7WzTPEPVpY4gxYc16omDSLatbxcFhAmgj2mhpx6S5aKTqiyEUaFjVMDrdABrsdSfKxygGRT",
  "key32": "3MMixk9LjA3d37XsD249wusyqMX5ZW5Q8GYp7dGjs5py4TWZTHTf4eSjis9NmPoghefa6VZmR3bdcZ6oFbxuS9YX",
  "key33": "5cMKz5FYRrAqZueNGF6PqP4HzuoxRwwf7kzZvqfsjzHjoNc9DkB4ra8WHpboW5yLNPVS9LqdEAdKEiSiyT7PkGex",
  "key34": "yqYspgmmCm24Z9mkknMZaZYtuhEemmJ3VsS7twveN9Djm24BSL5WhJK61Pv1vRQucDeA6ADjUR89jXdmWk59i6L",
  "key35": "bERMFj7s8Ubt4d5VvZiUD35BhaweGQUp35nZyF6Si6dfGnEm2XgQ13kw2QZ8Yww8sTKoZZnD3FTZyvzgppZDipB",
  "key36": "5eWQwwXhQjpyZQ4yS5kaK9J9LzFhXh9b8nJNkfvU83mrKANGZY86bhNhdHzRwM2pyyboRMaqkwM4yXugjpPekCHA",
  "key37": "5oRotNSbyqFiuuQeE231nwHeJ3qyYYFwqRjJfy6KxCPyNijm6LbqfPCoeBHHeV3hpPTAcnSknniZCuaJ4cE3KuZ6",
  "key38": "5mm5n8zHS8o7u9h2UeWhC5hqAFJQEeGkCtDmTUsHgfj2owUbzFRkCJ55aZU72VFuNxdnCFNG5DRZaiPgfMG75YJC",
  "key39": "2JLogMRqmknLoNrqJKRDZnxQZVLMs8DoF3YtqfZhUMGWq3kZD1GaAoYfaaycf7nJEhEL2ZoG6ivWdcqbg2iPb6Ks",
  "key40": "4c7ZuyMJQppKcKbaTi2gLJT14tNeWrvR8Uv2FTGi9eKH73jF6fNcU6Mwbq6wRyM9ihHAQ718JckiAy9d3ebqs4T7",
  "key41": "3aHzCTSBDZRNrjVVTmwtg9ueHSZmyPxsxGUvYPd6B4JDmTYvVCgEHTuu1aEADQGZ2RuFhsbcznak4cEoCahXBAXa",
  "key42": "QTFCQrJt8ZX1CCML7DXrNN6Hd6AYkYXWBZsaWxgx8788yQxpzGiRA72ktSEjzAxCAzaKoLUTvCYHWZEu25C27QB",
  "key43": "3dBqhrbbQmRA9bk2JrzGQtPfd29z93cwBNFLt8Mza5gAhyfEPXYjeGUSz7LUpvtLBpuqcjZmwWUX3fmFEBwgKHFm",
  "key44": "2SvyZixRjTZpDdJm5siU2qDvR6EpHhnFF8wyAQnwLdNv1A4VmCmpCjmoXPDd5TMHVUPHswX83YAWVAgxHVuvjoxQ",
  "key45": "5tSArqxKH12yt6vG7DKCT9bbY4YmJWunHhiotVEfpWdTDd6Kjt3XDo5JVR6C1rUV2QHw9r4ppz3YJasfLccpmCbT",
  "key46": "5dNnptttCNxCAp2C44ZA8sLDdLa6iEaVKPSAZfynQ58RNmzcZomDs2Ef7ycB5xfjRW4apNZLCHGnuGmwEUxBGedR"
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
