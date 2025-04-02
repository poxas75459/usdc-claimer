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
    "5uT8jBdfD7JULsvydckF357nig14Kx5r2TCPa8PiAz4SErRnVKadh6qC7TqETynfed4v2VZgXotJQhRwHtYgRVdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56m7yh2CMJsek2hRbyicdaZ1mGzg7Viyoqud8EXv9th693juKusHiqZCTrcYFzjJsm8dxQUvNBEjNmwRgBq7MaJm",
  "key1": "HrC876D423TKfTdovcJuWUxfspRLWoZZyvFijyWice13eHd7TrRv5Npfvwtw1Me6V8rU7NgzciCSLj4aoifY8B9",
  "key2": "3XP6vopiB5zUP1WowBzVmEzTsgUpJcxUF6wMyJDQ4Fs8KcFMSu4k3GUgxxpECzRfocfdwCBo3nTgMqcBN3ugaXtx",
  "key3": "5bszSZXRbEXYQNZuKcHj5hp7c9J6m5fQyXLsjgPhmNuC3YD9cjqfqbN92V95r7is1hvDgYKJwGuwyQiFRfDcD2sR",
  "key4": "2EeQPedTu2CS4nEBP6rSpCq7h5YMZu4BMdA11jbu1wcFc7spbk2kBRqm1ik7kq45qqrx9JtrQ16YaC4t9UnRQb8L",
  "key5": "aue8AnYKb4q4MgGmUwdKLj7Lu52LgEZUT9ntTstTtAUEzRYVxQ2cyBPTFXnUAtQ22zncw69Qh3utmjPpwSYWr4L",
  "key6": "2FxrTUVUx8j1Q1AmULNvC5DMpeJLPyiLoT2C1csEDNryUWKgJKcaYUYSAr71nHHb68cnv6TCxT8cKjYvJmKpbitE",
  "key7": "3ECg8BN27Dr4Y32qDqkFGsyDowP6iqDntTFNaZpSoa4M6MKog9iwM27z6UFEMxpmpzy1tscApmGfd1QJhhrQYKyV",
  "key8": "5abDVzV92fqERxpApGeeVBrbWY3dicYAkCqgUgqq9oaBLy1Yk2SVqXMrMu6Akcvpfi9KC3wbfA4CStE7NCqcG8KB",
  "key9": "51BJR752yk1KnvarguFEt9rzZZdU7PPeZSDnNW6NhVhpiuywCYiBrbRJE2QvdA1ChRkGjCeDjaAWqK8GdzNAMQBG",
  "key10": "Lp4i54sciBfE22KyZHZLAhMi98cbGUzvW6S2fx6LCH1m2bxdqR6R3uBAXXfb9ZtPjYKCGbZeCjpr2JRRju3da4F",
  "key11": "4uaStQ9Nw3Ki9QGoSePC7cpgRuxKPisnUP9eAd5E2KaymCVZbYChABTdZWWTXC32KZwLUXoP5LbsGuR72n5n7CQ1",
  "key12": "4BpirTEGDrxVpmipEQWBoEQs59zqsHdx7iABfuHbj7QrwTPNGGuin6sZsvVRy5CRPEAk9HXAo4knZaGtYD1rKCnc",
  "key13": "4HQacYSqKHFL6Zu9Bz4p7hxQSWwrfXjFUygyQmmciMgbApsBmSU8LQ6VdF8pijGV5UGQL4seaDDFEmsw9epU8Bsq",
  "key14": "3eWhfRTbBsjhBwYYZMipwGzexeAwPYTR9E34Eu1fsR85A2qTcdCuoP9jC3Ddb9h8o6JKLuzFk6NfyuUhtBXFCXgU",
  "key15": "4jz8o417YPVcphj9pbJ3Ksew7N2ukCHTeM4DfkwZGdetm1Godv3pmAjSNsYhHnRYHNGWwqUymKTC8yKUXyEcyqZK",
  "key16": "2Yrxp6NqxJVC1oP2wukRgX2n4NAHgqQbiGTKZKRQttDWgyysmfwsima6WwsjJNQoHD4UceAQLmX66dSwdLvooGoj",
  "key17": "2UFjAL34ksNACegpTA1kSuSnmeamXZiuq79ebRFf39RuirZqQu3XBGFL8NcUA4KUjpP64sWCTqx6ombFKoduvauS",
  "key18": "gaq7K4aPqDaSpsxf4eZ7W9pA11pSnsZiHbZRbkzZaXWGMWunJkVsick4uHDvB5LfBikdkNx21MdL8P2fq6aY1YG",
  "key19": "2ZmRiK5Vo8QgHDpgZZEJcYy99Cf3gYZ1qcMDwfGDyhjNMMo1FP5mCSi2XNwYxgFjP3D2TAFUzDLTug287esgkcHY",
  "key20": "3Twif1nBEBzvBEBW7H4Ltao3khjAQrXwWL2LhE5ccHA2kkWCMmc2CdBNFbvpBYBU9Mqo3D38Kq8iGHq35vmQzKpL",
  "key21": "3r7yp9FyWQaN9JEwkjxZaWZQK5Muczdk78dWbVnc61cAJBLpXWwEtHy7Ajo5A8BpmE9SoAJUGCsC1oidRedCAnDz",
  "key22": "4ac2jZ22hk1FJYaegAwMRZzLKhm3XbqLNFHZvqqpDsgWZEqHxWNevLowMAYXnW9Z15bY9sDHUTYuymvLx5srekyE",
  "key23": "5JcDBnj13aLLxHdYfr18MBjH8Gcqfd43zbFkwuxk8LTLvRXtvFu7yT4GqcxpTgkHZAYvSiYbLFz2ZcJuZVGUEzus",
  "key24": "4d5PQiJrBEm6D3fpDEExjgmYFbrZJUEQ43VswGKHgy8KbFWt82U2CPgTDrLqi3BeSQXhwCjVwtxR1tEads8cxKMH",
  "key25": "5zVV64PEhvuaaVsBPSZ1mUh8sGKhcu4HKMAwLX59zN8WsiEaxbznV1cAUz419wihCwYEjrnUA246ADgndPaemi8q",
  "key26": "4rVxpXaV6CWQwyN2QYgbZMEjMRTyPxXkbm1qiRyVc1hPoWSZV3LkQTrWDVsHLUqDnxWB59uqR4ZoK7ZEetC8ALQf",
  "key27": "4qPUBVqLNSLdsfbUqTDPFZxKHDSiBAyNzxvJjjtnTx96sWEZniL6kqGxrR5BGakNmAzY9PH6VWosaQSvXKs5GHmq",
  "key28": "WMYbqbHCmkSo8KgkKRfA3bMfUy42C4iPZKPCdYN8DTWAGYNriDyD7uZYM2ocd1tWD7LUFoeTy6grREoUDZ4KKAm",
  "key29": "2VCjU7LebqipDQ2EbKZQjbxJ5fzWuQc5EwdkPfuqchXfNq9yR5MiNFXjSqL5BPSFNpQrnujrBeyrvcFHxmZVgPQd",
  "key30": "22LKZf68cC9Y1cuHc7rbrNjje4LY1aw42vQJACrBTjsnmg1NZHZGZjsSdk3irU1HFDGYc8mDm1Z8mGobwmi2NM6W",
  "key31": "2SMSxrnBEr7617dYbUw45PqMfGavtSoLQjFSuwcqBJCJEkBvBCDowSCohJRA1QWjCEvSWekNTGfrk9Q9QRgBsrYw",
  "key32": "637th4K15VPTK9Z2MZzFhBJs4zMzamEgocFZED1pSchgBkgrA9EoMYdKWHqNNUnqZdh9Wo1JH95qFgN95y9wwWWJ",
  "key33": "4LvWBy66WhC9zsmizbMD2pUPJ3BuD7p9L75CGJH6iB9LXxJigsbmsqCcSHQ7e4RtG8CNRoh2p1c7iGLxHWeQb5Ls",
  "key34": "2Q9BPERn1dxQvd49cNEkUNY8zuH3QLqGh2qc8UuRLzY1cg7S2ocJWNg7EYGScp2ztPtbMwYsZpaR6BEXq4mRkRbx",
  "key35": "51j29RgNphtUHQTHdZJQXsksDzMdSx94pMp9Ar7YM9uBzXZWeoavDXvawHUQfHxrr7vFiZKttRbBXGe65zZU2dZj",
  "key36": "3YNdCgtrtnTwP3X8wtFKbauxxrMbAzNJ8QBEVeSt3Ju8gnC3fGXQgVvdLYX4KNkVHKtzVE4BDEwtg9g3VMAm9pXC",
  "key37": "5pVLzv773neYVGjv2tK1e9s2pRJQJkt8cH9AAQ3rVt5YVp6Ldytic79zDA8oqC9D8D49Tn4J6gg6QUkcvjFxoM4T",
  "key38": "4pjQMajfGFzijZ5jUvKRYoqVHVWLQERDSCoFr7cPmW6SmiRzzpaayLm9v5BhtoMA5WpzqRt3wy2JcKqzCxbpyrv3",
  "key39": "488uqkT7MhrBWhuzAhVEGvK2kiQHR1i9rDhkZSdDxbpqrVdzTmnHKuju8yHeVSL9XcRAMwmy8nvWznjkVqFZ3tUY",
  "key40": "5WPtJBScM3oNJAUh2aH7NRkRgCmTCcjt7wGamuS6AGuLkQ9U3eSk9hRvRzGB6XqMgmfyk1NbwbiUKxdJs2eVJ6PY",
  "key41": "3p5mUWhZAJiF5e6dqb8ZPLouSQ7CGQoTfRT2NrBsLn1qoyepGz6JLKp6MPDNbprmfhGqQk7VhvV8P5VDWgaYa96c",
  "key42": "3edLqPWLGuAH71ExcRTufcQE2nceDCPfFvfZsEXyFvJ9484obi6W5yNsALPLqr4LaSHhMhJ8vNoU55bfsianJ8nB",
  "key43": "2cpjjT5JHJzWwjvVpr5Ux7qTMsTi4skPqPaNBynhjPBRnJ19PHx4hLJgUjgsuy1sA6oAytihiM2UEJcj3RG9BZbx",
  "key44": "3f6GhsX9nPty2eZBmzyvScSM7Ae4EmeEb91Cdx25bjRSbV3unswPkE8LhHggVTTGHYqvENnQcND4UiygZLxcoQ3X",
  "key45": "5PmsLbMPNCXXbigX46jpg9zmMKP8vXiyVRKPUpBQXGQDRaGzkNVWrLbZe6eA1mtfBJ8cMpzRwjx8KEkqHkvTBt6e",
  "key46": "3oYw8R1UuSnCKAcXjfHz4ESwBif73fq1obibensW5rWV34FjJJtAQCRDAzx2k8LH8XFsSCsD7LhYmGDVDmhN4mkX",
  "key47": "5RrUVyQzunMKqceNkpiYEGyongFzEVgDG4fa7R5JZSC7qQpd6vYEkxKUjyzrrQ4dfD37fDu7nSf99xuma6i4aW7c"
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
