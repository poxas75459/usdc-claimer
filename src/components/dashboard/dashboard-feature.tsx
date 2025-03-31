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
    "HmWkJFTpZeKXbdTAf8C9QHcNPqCzK4Wtx3UqCeqzeoaMwab9YBHmk8YWi7x66wUSiyAFRYmGzSub2hVYksy4UuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K381amuUPGFxoxSGoGfNkZyes91cbYDeHkBW9AsCSi6LPijNwrvrMgXeSJLPqiheTbK8abavz2hnUUjjpEFEtpF",
  "key1": "36auadysY6JS8k1NqoW2KoTvATKBdS9xYj95p3GbQyZG3Rqf569crQo3DgL5bC9fkkUkN34bCD3R2gz8Sr51EgQo",
  "key2": "4GZTee1fANYYqmkH2QisxeyS549bodJUZmudLyqAN8k4Hn93dB6JdqDs4r52zyPtVFMoRFa3Ni91Nv8CCrXhf8cP",
  "key3": "2mE2AP296g1gpj3dQyctfAC9A2qQBjws5tSYyZUXha9xVbthBqTNYgAbzkxPx2B6axnLvVHwhT5MyCYou9cnAyQT",
  "key4": "3j89xXjQELLs7vKZusNiB1aTXJ8yXspmFae9zNPp1MhZCgDxqjS4cgNjARpQ3dPuKgsxhvEsW1oNCukQeogDGQPh",
  "key5": "4c63mFJrKG28sNMn6bz4e7g77zBeZJXFTX9Qp9ejTfckYYzyzj2qxpRtCKG2m1EAdMTZJmJn8y7iYfC7SKMP44Cf",
  "key6": "4JZZiKF5dJJeT34ML7QCC1pnWWzK7ftVTyfiomoyT8xi69q8p1sMyFK6rF4T8xxvo2TUEsUJRNiggwf8ePHFZbSo",
  "key7": "3BXd12Wx8zntRzRT7RcHqNZw6sxqteC9Lxn42izcZyYokfL6djuWyvNCaDGRmx7v56kSMFBxiYw3KVVySCDVNwhV",
  "key8": "4S65WU7jZ2kUb657tWJttdhzhRsAPYGmADc6naeiffQQhav83ycZDbfVXHEqukjZCtr36vctYGm2ZRpEndsuJHKV",
  "key9": "2iMUtMnq3b2sViTZ1YtMyHNz9Zcs5GciNEGcqJjzDX7oGJ3JdH2GPEMPsSxz3exTEf7z2nZfphMU5By8ixAksHBY",
  "key10": "5TQhVv2Xs3XQnVYAPicVGz9u57qnLDSNKrmuTearwdmUyDQzVsxH4mWvdU6axpubbTRSiVaibUszVdZddsDVV61L",
  "key11": "2bTn8eMfrpyR8weDRuCoyQ6nnZJh7RpxNo7Cz4TUmHWuwf3YfcdYvgbUm4y8u3HyhK3dff4vP2zyaZ5GRdsLAkg4",
  "key12": "5rdxTM8YzhH8kAdA1jm3ZaxrLBWD8U4qs4xuMvfw6AY9uo4cg4oZeRnp68U5x2bK7fmGg9g6BvLCDgL7eVjVp6qp",
  "key13": "42Ahb7RhxniGK58UoqucqNojZkFGcHL9jNKRVAVZ8hhvkL4pF8mZaobQAHQx5yE7NpWrb8Mhgn6buoQVL8VCmYrQ",
  "key14": "4Xz578ffFkKFzKeRc7dSQjP5QJXn7NndmfqvGMgtgKqm25iJgz8vgoHnw4aVHSHo6u36Y6BtEB1vFDj7HnCwBwMx",
  "key15": "2uVu8tq32dbSeywGiusZgXY8tynP2LjJKZxVmBCtrEudhXPBBWaq3Agf4rWh9MrpuhFJ3xxER2ovVkE4q3AMpteA",
  "key16": "oC5Uobef2fBdUi4V9aKBtx3DruYTgMXND2Wgfta54FBsWKKbdUFa3QWptR7xSfVdkqnRByhkrbmmmg6LVEefBah",
  "key17": "568oWYb24S6iof7pHUcjgcVj44Qm4N7a31emHBNXixnmFnWvhmb1YQaknf8rgpMngY37wkdvFizhE5VDSMG2jurX",
  "key18": "3uyQGXpWpnP5fBoFkT8xpaP9kfp1sUxxadbME1hj6QBY97yBDoGJk987Kp3n7sfE7qr72GSRPkEdpzWf9aGXXhFs",
  "key19": "2i3okCHWwUb8PPrfUqsPu1xL8UYYEh6u6y8pEeF11AG5A7iPd9pQmNaa6AW8piuv2dnFNEXWNrpcmgJ2QPVoJRwU",
  "key20": "XMBfTi9u5mbBu5PDdYwCfQLr4sPGmQzJVWxZo6f7xsLo148S9q8Hb1sCoYBBqmQcxwbUoxDmWk5com8KAoEhvvP",
  "key21": "3guEUF1p6owxB71PgURwrAGKMAo6t8rmoP7jj6Ys4bAf6EZgrK2vST5yRHz3vrAjbXx6xijYHFF5rzxrBPcqMr5G",
  "key22": "Bxd9668fxSiXc48GhBhWWfpxEF9iStXvLgQqLf4Dw1JnsUW5rekvd8qYXqDa8grKW23b5Yi2BM9BfqxgsppFPa7",
  "key23": "7NkYy6hMHPp61GZpcWncc6mrcZZnquAmBPdEP9gpgHyTeifHNQHZudbzMnXxLr87mBhGb81vLpbGXfdNFGxE7sj",
  "key24": "4i6EZ9kRxTgywUzmPSTMNEqnr298t8RQa1Vk5CCRFGnZeapETs1NN3EB5dshxtuGxNPfiYwbcuu5y8zzX8ndaQPg",
  "key25": "4U9nuDXLmNgUy2fwc8Su4zxhxfrDNfv7WWdvfeySEhFiZGX7dQC5hYkRgQLrpPFygYvLjZiDAzNtNikvM1HWxfYr",
  "key26": "4FdtpJe3S4SyA8xZVmXxMj6Zy1CdFS1Y7xtQBTz1QzvmoGjawnYZwerfJGnH6jVbsS6JSfgcWWgdQSTNMpquUa5c",
  "key27": "5y7oc5VJCGMHBhJTm9dsxgXns3R5xjHDrMauYbUc8tX9XW2msUVWoDJe8TiqY1FJSasJ2RSnMhj236gQVdDiJdKs",
  "key28": "4Lao44oK49N6Tas2zJqMGWa6GJNuKRVdbVp9oxvJGjz9N4GQ5Uv1sgh2J7VnTWn8zyPMoeJv2FJy7Q2W8ob1XnSb",
  "key29": "31LDbiPGdxBMYMVJeajs2N5WDoTGDgpYu5zwginLqeh16UqV2daUMZqWcqjTq2d698ejJ5yhzopHxGnjXqsfUL8h",
  "key30": "4sh9tVgRD7QZApwn7gogDq5ACwvBx3jerJoNDVXxDWo6yuc1CiFZbhLzJPjxQpzVtQHnsFesnTXotfhRtwqbnUyG",
  "key31": "2ifd9FQpLKSi3XfB8SiAgDqxrT55nhNdXrkCVJyJ1MKaMQawFq4wWKk9td74JFUnV1tADzdXiaEgiP3kFq5AsXzf",
  "key32": "3HYbKbcubnAsMbTugS7TkRjuYGj1BEwiWZgbLJWCa87oLSz2Hc2YXMPe2n6CDKaPKq6P5mYt5BrGbh7YBtVCJGWa",
  "key33": "2iC3zyfpPkyUPMyyYnbsLso3R4m1YSofaArfnE3aRCUgAoEyket7ywVt5Abru4Vo4vWmV9pZjSXskc9T679pM9Jj",
  "key34": "27TV8bFST2tMtrq7gRt1dkui4PjvMg4oAFuhap5TAcKeiCyBaohMfRYP4MC9o5fj2fzFr9SXNM39dHYPffbk2wuM"
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
