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
    "23Zk8Dg2EdvW6tcWs91gs2AWgZ84S9cACos8a2NM5AoMZP9v62uXHPmm49o3JMHq4DSg12qY5PB6QaarMkHAsE3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K6YDG5L5TgMhLwJfgE4vyLH1mV53nvvPhk9tTgeL5AHzsZhYCyHNpr8UwQ92ePP9zKoMsSXpVbxAz8eMoTndPUB",
  "key1": "y7CnYerXp2WJNAgM8hWzctZzKfmsqn24AdMS21sxDoJPR1HH9pGLZUfZo9owkd17RkRavwKWwuvBpqQ8NStBkVu",
  "key2": "2zUFfmdNCTbPaWbwAyEJtHcpDRSFZ8AmLykSrij4Z3pfdCncNjUDhUKk26PEYD9KfUTwbKRzfhCebEaQwB17ZLoH",
  "key3": "5jk4AvT8cFuYFk3cSUnyz9xegTLcnjzi3RvMoGmNdwRQzbqbfBjRvgT8mGZ1Xz3i8Ficbg2G3P2bdJWrHVkaQgKA",
  "key4": "5ehT3xEZahPmzJVqdscyf1q6Q6c3aYYDs4dADGbHtqM1xMg4ZCkxnD8m89sBswWcCpa3NhrZ1owQDq436zuvCVwg",
  "key5": "4SQn3ZN41YwjKyMSSex6F8VdFamqZQticB3xxfhhhiKRzsPL6YgDoEf6eYHbkSFvHUeQNpMg9CRDqPNvFaw4vd4k",
  "key6": "2b93wUbKpXKL4ReoVn3AS9bRWKRvyzBj9VFo41cYQw9DM4snrsj5V8Xd5NcaCbK72XcAaNRhQBcHs2e5jvyfKm7G",
  "key7": "22c5QW76Wut8eYp3mGKTeiPkJuT1oHYYRGc2U3gU6Lub1gm4TV3jFHmfRtRmU4RNYyBy3PTH929nbXp3UJHUc8Lm",
  "key8": "4XnUQ6bK5eA7nYAGADgQZBsauebhm3AXz2hf5kPy3Kh2kMMTrFEHRTkDcWspz5J3BXh9owePtm9fZ3hekmhRsgFB",
  "key9": "53TrnqMc11HccPKUdhp3bWNNP865KkmqKJYt1AwELSNpN1jSoMwSvPRpFJXHrnrWDV6Ui6QKE3GS7ajVGRHx7a26",
  "key10": "3eU7ttfZq8MteWHtok5NR8aS27k85fJ55Bwy4jNPGNPQ6vbF1YjMvw5gAzoZp6afUdtfKfk7dJtWJh1WtJA489FR",
  "key11": "46cYFzD3KmpaQkBRryib7wyhWUsja2KRT5Gx7uNRExsnVeASYwHaZhai2gRWpaLeaCou46rBi1wREose31AvStsL",
  "key12": "3ATAnDu8PN5PCXpN568MFpBERTeet4Q5xrMaLA17nfFMnMmp3JbXwv2qjgfVrnWjP2tsxuNsofNuCT3hAMEmU15m",
  "key13": "3TV6FciRS4FDWLxhAUYVqfhJpkEEtPTuE1eVeXoq9ejzKZUwTkVkHicUAudF8xEE4uCz43jbwXYDk1ageWwvuY4c",
  "key14": "5r48XqqVfC94CfUAMVtCzUi5i3vcnA3Fwzpp2ptk5PkQTxSdNWw5dvVVPxQf77ikn3R5B8F3cL39QrMjHoUjwgMo",
  "key15": "voVRd3cBmpPc2kKuHtPyaCTbs7wWYMHKWKxgY7pwoWEv6GnAcR4GDZMsrp3N1WpMxfHeBhNVdvAMjXe99nS5AU7",
  "key16": "2EP2TEe2qRmRJwCzGUaW1KT895t4MZv4o8ZtCZNTE1fRKSRn3cHC9RjPYA5F7fphTPADxYhRjq9JQhz3EvP52TbL",
  "key17": "62m2HGbMvZzVKTF5RCu6wW5TjKetiR7A8D7NeYSeS9eZtteAseduYn2ThQ9frtHbKV7WpEobXdUWPss3qRZDNRCa",
  "key18": "3q4Dr2siaZuuyNWvBgA1qpsaUBBcEzSmS4kt51Ag8gebFGAWzfq8Lb3cAR5igQurXanAnZjCqpgf2SaSuN234qC4",
  "key19": "22efftAiEzegkugjJ6DHmUuzR49wztmb1RnGk4reRzqiwXoHy7JibVMBuWZL4knYXbCzoegKRv2tMAhAsyXWwuAf",
  "key20": "5JyVpG34PCgTMoFwrLXGMZAZx9sQvf3iyRmhsdEnZjnQ5en6eg5LREhEGXdJgU9ZSst7DSpwhC6kfbHYozNJWmRG",
  "key21": "2nB9ipf3Am3G2dmgVg55JoSWrU3NhtJHjKvQDMPADz77p2KmgMKqPpp5aKruuDCwsB1dcMqzQWQBYTm2hE9VNvYz",
  "key22": "33UFevNJMznXPLombt5yDHRKJNGDBzimQpAW6rL9TFSwEzJ3T9qSv4msSoXM6N3iPHgwnmLRpVTLTW6iCnMvcrzL",
  "key23": "4tZL5BMf2RLpouvwgpJjs6zGZJ2ZPEMKiCdpo6bcq9xqbupbqznVpAroYvZCaJniSVzZTD9psxPuqkyHmRcab4NZ",
  "key24": "4yzG2XivKHfnpxKEVt46q8ttYcq2g3P3KcxppUHi8q9pWN3inYqS65JGCCmGBLMRWvwHXEG3ej1A9zoKYdZqzQGK",
  "key25": "5GRnaqorkn5DuSjfX214kUn2QpFLUGPShmtzvLSoiNhKw2atcDhfHfLEKbRGcDL4gnHovBqzFSPvBCkRBGWHJppZ",
  "key26": "3mft5GgjRATrzviaqnhCZszoKDwh8o5NAetPxzqNYozey5Y5sdEaU8eVF41AjnChguvhYzgF36NupDQDuKvbfU6g",
  "key27": "3QRAkyZtR5iJ81kj5J4dUp6nZu4zLDy613sv1ciHWKXe1KdjHbSGHCgJoMBxzs5LcUk4EJ95cqYtdqimhqNuUKdZ",
  "key28": "21Kj26LC5g4FD8iFxzrHDCmRCj4Phsgu4RLXRa9v3tqohLS5sSpZG6i593yXT4Uh2dNrCqGVZV44ea1RUpW1MGtP",
  "key29": "2u3pu9BM3925NJbmykEZ84pWAn7A3DDUAesd38iv9QY11JPhu1mvfzW6VBtL94ggM9kLZtet7DAWFFR4cbgvTcJc",
  "key30": "5hnwRPwR6ksdDj7hSenM7pyfpEV5hB37MdSVe7iaXTqvaUNxmJ5bG33Z7TiXJnbQu8fm2NbDbaLY3TabFQWiuzVH",
  "key31": "41JoenEMbcbWdwyEQJcaRNTginx7mjiK1StsWwvYo8BEEF736rCwK1HWK47UqCVTZVgpSDyFeoRYpFj5mbG6vqGM",
  "key32": "2diNJM8itMCPJWBe79oxh3jyog2m78k64otVVA4wGSwLzifk4aDFgkbkcjJELCqQJh3bKoSuMF6dgDn48pJPbm2k",
  "key33": "278LUYeqYBvV1HDPmAEGb25DEdywRRKT88anf39LVHTJuTUfLDWSYL26eRj1zHXVxmzgmiJ92NZYPdZVFQeZk6ku",
  "key34": "5PxXf6AEHyj8LRX3dbaRQd5V4vRAeVDudPih9rXBTneKUzQxt4pSKGWFWRC6ZEb39ikgnSUaJndiu6ar9KGhT34J",
  "key35": "2JHscY1s4neKQoXtLWcMapDg5t4b1L7jSJp5HZa4BpPRtCDYxhxBopFjKg8Rkx9RPXzLZZ2f3NjMdR7Hb6Ycrpyc",
  "key36": "5b3zem9vTJshM6cejn193a7e5Bp6napHRuKNjxohGy8yvdUHXRiDUCGZt3TftyqLgGcNc9xBajLzufv8EDRkdHQy",
  "key37": "rkxCZ6soYEHGVELLDyeaPqQyeXcNGuEJd8iLLtNCXcAViKne6xm8G8Qcd7ztWgDq18KZXed59eYM7TYxtSgNBHT",
  "key38": "TEsEQxszzwpQs2uVSTGJ6B5qxd9HcUR16pqdGcwGVU749gj8eb7ZoJjPcck7Do1Z9krfDEAPfKHsxdJJW4uFsoG",
  "key39": "5YmXjx3QwkAqM2RZLZYrHJ1f7DWJpXZC3aWG625YL6jRmN9UAQpnHsUTNUSHhagWvdW2wiQyJ5JwEvnfEH8vs9Y5",
  "key40": "5gepbbvEvBmdTpZFfFcsHKFukmjHvsCADTYwjg8Rik37W8qZEYudpAcmFgkoMNhTaxQAENjb9JWe1bJkxYxxf5x9",
  "key41": "3Groyu56aGHaTA3CGr41KhNi3P1wdcfAdJTb2esrjU4kmw8R9poDNKVLBCHsTFEwsmEp5rSn69uuk3jtd3fSwoAS",
  "key42": "sjdTjpJH1RPKANqNVEcHW7ssWcuEdjH83yaFkSLwXt5YdF7hpFNMrzqyQ7zxiDRmNFbgqFhYJrui4Nc9XHCqqaH",
  "key43": "3JMDVtWcc7NNvKgQY6jjSYamQG9t33feweY6qWXkaoqjSdyK6qnqvdxKzmXfYQJ6JLw5ycRMSZ1vJn5grakhHZTe",
  "key44": "45QKrHya1rSub5JEXA5mMNu3Ejc7JUR5MvbRXkmKVscmQ7Yhybz7iWdBoL12Qs9FbVXuXtD5KKVEAT9uVoRWkjGZ",
  "key45": "25vwqn7FdMsiTHndTK6axG4EWXc8sn8tT9apu1jaxqr8se6SnntrqF5MpKdDaKBswy7J3SduhXUzuPXNxLkSUGpG",
  "key46": "2A2EGxkfugezAk7TkN3AMrK7umkcqwSKF7PAukvqBbUhSxtnZ5dkdub6RxqvoawCFXEPFapYWbqhgpiiaHVS91jc",
  "key47": "4mMm7TzUnPx1fx5QbHdCDfNzgsmGAnRSYRvTqXEvF2absTC2LrUQAcTxxqSJYYdeVWoagkDHSdghiVKpz5pZivMt"
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
