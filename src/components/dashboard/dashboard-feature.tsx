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
    "5kvFTNXubcZnJbq3Xg7YVacnxGErrHbZtg4GDBgKbuS8AGoUFa7VXc6E49TzRt9gxS8rau7RPMy56G3PsTsjimkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYMEBgXavPJJKYeHHZmKiySRqTfCznCXZd4CcRs5iYocFUp64wTxo4EmofS1JS8yyars2R37iLckkM7HFgWWAVp",
  "key1": "2ixRb6D8gJr8jP9B3h98peGeW5KzbFfktq6RfJRmvPeohMRdrtdv1VHuTTPsStX8G1Yc1sJ6gKQsSNEkNwrE4BDz",
  "key2": "5FNvutGRdqMCLo3XhhsWgDCBokzn8c1N87U41YTbjKaHhSzQZqAnbA4CqczTpXwCcn3DEKgyTMYGej9TtR9sdStw",
  "key3": "rzQ7xiJKvjSudhECkEMr6tX6RNAFCLLbTuG81ETKRXsUw9bdRvFBxrzBrTapnBduggT55EF5hVR4AN9SfvrTjMJ",
  "key4": "4Y9WvvjNcJjon9nkpqBgudLmL52pLqqSbLrjHRAcjRk9N8fjyjgXLoSF54eTNjEEdfZzs5BzhUUpHWcKfYqUpv6k",
  "key5": "543iFTSQ4JtZpWytq1jxAwz43tegnNAg6jbxp6WRDm1iHYubm9XJhuHsCWk6Xepr6RC6uhBDXoSR3H1eD2u7RKnz",
  "key6": "2Et5DdFMKpESzjnjAMaoFg2oAotYz8H4VyNEL3xmbprRgwvavSHK61Rztey19P3Kf7poutrHznbnWEuvSdoBVLcL",
  "key7": "5UtUs5b1b1rHztKPUx2PvVRX2X8uDAGRjQ9xVF73fSJMNpzZbr8g7N5v9tbpz2rfBt9etooNU1kwuYH7hQz8VHsZ",
  "key8": "32Ttvxs6KnVMCCuCEBqngahaCBAwh987kUpEms1yZZJxqYUkjqK49TaJ6tdGzHsXe9d4VMLFigS2Vq7WqJbg56dF",
  "key9": "28GEyxF2Lr3Zji4Xxk47qpF1C6SS7mxmVQeY1d6FEbEcJK7rJb9mJWKvsH8VHEMjqP41MT9eeBEkPQQvZ2AhsTJF",
  "key10": "5PmQHaNMrhp6u1Jc4viMzjgUcYynSzuGzSqaZYishzi48HWXnLG7Zuxhb9teKhPzafGVDpjUCmGZbATKSf4S9JRP",
  "key11": "2pTUPWLmk1SJXgkjrzZBx75gMU3zSELFXfRKMRPPULb8QBunZcU77p42E8WikWNp4Nr7suaaDUfSmdfcnSdGz3Zm",
  "key12": "2s455rmD8azkdN5bptowENnXHkvgH8ukw1FW7UFnKvbhafcFFqYGUyyecCyu3jjsdDad7LUj6RqXL24HW4ig1grr",
  "key13": "2GfSyNiBdzgtwgSDZawgLbJL9K94eJ5QrCcS5bQ6WQWHo6mrETJUXMEUYqkXV6CUdKCi9iLZutQwJZuT5BZF4egX",
  "key14": "35HrJoPXiGhTgQMpcJ4gdSt3mKUtmQ9qc3peYtFKjK8P8sPkYSUBwJcLtbMXyTi1omVhtedM2LoXn92HkGaArW2g",
  "key15": "5QjS7rPnJiUrwAYsVZjxkPeKXqhZJnsgLNWWBocf4AtAyiMS72eTuZC2edAj2qDhfmzknM8nNxtxEYc6ZSMuvN8n",
  "key16": "2f39XByqSMUSX2MEg3nvZdc3enTrGopKUAj2BoiRV9ukSruxWVxbbSPWTS3zaiNr7MudbyJMEm7tR2ZLhjHdC7uR",
  "key17": "2qwAS1D4ByENVtDEBnkD7LVch5vHU8CWkhbmhCgfKV6KpwLR4GWT6HV2Qv4TnbSgfNn7UqXegA6KdrUNvwjdsimB",
  "key18": "5BxKAdWXddmdG4GAZwap4CUkkJWv7FBnzJ8GYYusFRN9qnkWJASqG9jVRRxXiEtpG3dhyGugqjG5iyp8yRQLWG39",
  "key19": "5bhSkugMMEURDV6ojGTwFEpRnNarBBjF4NYbxGffBJqiVMPDLVJks5CJXTPigF4b38wGQUURf4sFkC44DRBdEGN7",
  "key20": "2iZLXQZMEM4pHGHPbn71JG6dQ89ermYQC1m2wXcQYNSirYAmZs77WTzMJP3HSpujssyjuAQQFmsqTXVzV58e1Sjs",
  "key21": "2dkE97fJKXPJZV84cVoF9sXX25vcLgM8uvHL1aScy2xyHJgPN7DQfcRufLe16bcf1KmzKmJT6rAxSahu1mGKXEXQ",
  "key22": "8Sm5N7QbbE7o5vXWCbDKKqW9qmEwtoxtj4uRHHuyr5EKdMzDiQHRWJmmse1XCSLFvkkfxPDTNBf3yX9vnZp7adi",
  "key23": "XH61WjeJ3sMzdN1cx9bJqKhCBH54R5giXAFnGXCwyTE8D8esLx2qNHq16xcZ8VtNTPJeqMNhiqnGzhTJTpzcUen",
  "key24": "5iD7mQhMkTS6pF7zdMs5Xm5oPuzuDF97hmd1Zoe8p7nr21UzGSsKJhuETxXCVE44yyvYvh3nGQe9UD63pUbm7qUX",
  "key25": "4qSxo4UwWANmmyyAaX5FPL96kAdjmX4gxwP7WYuZfdhtMAVx5ngJUmZwysVQMKpCJthnP9zTfKj3g7fjPS1Wr4se",
  "key26": "3uDCiwjcoXsCzMaQVcvEvhwswRBz9Xax2bfXD5A2qhz9inTVrCVqLwdJQf5ypz2pTXzHkfiu8y9LWCZC7ZGbaJSa",
  "key27": "5Eid6vLNb39FJZL4i2wKEGyoeJnR2vzbHKiVWrCgMsuAXXqPedZgGh7s496Sf4hfdxcq3h7AUnX8oHgkvBFFmo1g",
  "key28": "39Vc91X486o7kZmNzu9U8B2KFuTKSJEbrLZhqKiVWtgZv76bWudTV1ZPFLUKENjckoHNz4t5ayTuDa2PKVY7jTpx",
  "key29": "qQQuB64hEcBAZo55F4q6suDSJ2dJQZTBwTc9tGn2PSUz5aWhuMkb9T3dbBVaSFsjNX12Gao4XSwq7CWGVEqAutb",
  "key30": "5bagmJpRZuDMMwak6UWfGpbztV5dzgYnDHgyjxCNpQjvsF3mj2n9z4UhyYmUwjXum3sRdvjGYPUgAukzztQJBkkv",
  "key31": "gubB5BJzU1cSP6EueXJiWp3aawtqgZ2xANm6ZadJx9AM8yPkTKq9C2A23tijb9U98DZdVcKkAEfAvcNAcSJFk5Z",
  "key32": "5J6npmAzZKN2KtKRczkrmcnmyXdxFAKA1PhEup15kFeQffgQub2S5wRMF9cnVntk7VsCiervuJs262Wtk6GAtEsa",
  "key33": "31MRs7zak2UiB2gY9WneeNzkNmho7pwvFvfKS19o9zwKEF5pTaEW6Egn4635nC1x555Gsuc2tz4xEL7mzLS6aSGF",
  "key34": "4vHrjBVUxwqTT4yqtzMjSg59Kd65hf1tCSK7E8smMgpd9Bdjp8Sdcn5YWtmWm7AdTLeUmmnX9Mjb6jbAiBCjL9Vv",
  "key35": "3SHokz5yvVowwUHcf2hZttWSuz4jrHq4d4AGcY12iEDnDkn1U58jcs6ZsGw1dsjPBvtE1GfCTqFzDDGsS8YDRE8C",
  "key36": "2cYrKrGZzNHGm6rwXCSeLczTDyqmeitoL59MEj5wxGZiLpjUJoCdh6tkYJ1BVxdC8zSWJ54zhZsxLtu71ocWJ9To",
  "key37": "2mLdD9Ppd9W3JHCvkdZEkxFGg8BPFuLZBu2LEj8NxtJEgTT12naJwPMKHbmTjEwQJj6LHZH6A1oYYGiJyp4Vgf9F",
  "key38": "MvTHyughHUPCCY1NihZKh7Co8LEMmLfN5pVbVz67LdYYrxdpA82EARPAccMTKBhp89vnhmGYwtP8Z6TJx8w1vBM",
  "key39": "5uqXxDkLQJd2zF96p8EYAVSrDdKQ4CVyUA7YAjgCmAPHxvbueRxDj31nyXxxBwH3AXgyFY4qpyu8ceMzEQCrT1TN",
  "key40": "3awo3dA4H1oCWKqiBaASu8bktJEVvtxwDa8DVxZ5Bz1FsEGScmaFoF8nMMuvYjBTu1nMfP4nEc15xUTusNXQmzhc",
  "key41": "3GZMFZ18uNAzBQx3r8t44KmQAoNH6Uo72BCLhuYLevhwVq7wLr8FzFvp5zfNKmP2QjQztGgzHH5c2nd155kfAYgE",
  "key42": "5aTzrdAUPWsPVC2Dx2tv9XZViQB7yeAR6RHRLbxCWVhdD4nf88ifwj4qcNxWZV9dgyj1mtPq1tGigCiSxUMc1dHB",
  "key43": "2BUvrqi1Qdfedhznj4EZPd66KDFkbzmvYJT3uVVD9Q2r9nBbmxY94vy81uL1gQPaRsPSzXWvGFjcvdLqk4ztYQGE",
  "key44": "5B3SyU72xx2pUQaLmDyRjYcF86J4wbgBY8yU9ZZKJKU372ZbAo56Gkn8T93eT4dpBbzADhdNkiFVQSA1gBfTb6ea"
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
