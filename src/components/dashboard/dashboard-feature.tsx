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
    "vC337ijnWdouGdrVBSemFfFmzFtBhzW2ZxDuKdgpmHtkZxGdEB5JqWqzgKtQXhRkTDHMhkRqNAJvo1SZ6ydb8Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QcwC1wX9gsAdnLKVyc7SzYgTyPzD87CwMkXxon8qG1W6TUFTsThD1EjhpuBLzLfdMchQHoCdGptSFQCJcqa87a",
  "key1": "3zzZHkjzAqiTjM88QmMxrGcP2Q2uE9B6yksJAVc7tSrFiGeUfzBeNy11gnP31tdW5FYCZq7dNinLBwujBQNV1p7y",
  "key2": "5gVt9ChAz7TyEjq75tU3dxiErb2Tjt9pZLe2kJRs822hpe1FeWkFyefeBPdw2yDeM89fvAuSaES7nsPxqShDxaMq",
  "key3": "34hViBuhPLQq5trHZJVJbZsXv7N4XPbXPQHMNoPqGR4WPDfRydA9oaA2nKSBpsdL5nTBhD1G1sPZGACVJvW8iUjV",
  "key4": "wJmswhCsdupmuWZe63GexQnKJ4HscLwEmFE6P6ggCugcoGgUHj4dtc7mqobngcsQ5YzE7xPcJnSPtr6hyyZKGse",
  "key5": "3iWjz7j5mmauPAPuXRtMrEDKUihXTEWQ3rohCd9T56xTAHD23bQ5JaN4gBDxexrTU9zHAVba2WdPPYywmBT8UX2Y",
  "key6": "3HmM9djgccnNdn3fyLggpEtUXrFkUP2eHfyovdJ11VMSqrHUUz6FpdhaszQikESwTWohYk5usCdFHgTBe8VJDvkk",
  "key7": "3YNuvosXznyESd3uLzB7DTMkAy1f1ciMonsTMEzovWE8GZM2eH7nsjjf7PDpSrU9s42iuQmaM9qLWL2PnETHPpCQ",
  "key8": "64Si6pTjhg9fcjKXUHEr8EvYkbyVG7B8Cs7pomncn79cGi4dZdJY3Jxponmr4MYUK9SCgMRpnjNRuPMRU3Yhd1NK",
  "key9": "WjDw4V7T8WudLQcoeEhkvzP4dpQJaWMZNxwzYqE2nTtmwTsdocG6ApBteVRHEVdTm6svohKFXB34DRFGoSfCGZ8",
  "key10": "67MtR7bebxtSnUfzMH17VYVBxbWqH8w9HaYti5PZ3x76aUw17HGEQr8c8rcAFj2HAyP4cLoD4RbzK3CUG35qXcwX",
  "key11": "45gps4qcGdk1vRyhHsPZEgwHG2UM8ro2BR11JPBxmQRaYzjZekrtyqYfGRsNQN1grEikMS7aEHLENHuZTFaw7dzF",
  "key12": "56gLjrJBXQ6dpZBpEYZc7zWs2nwxKX1snMWkguFYdvAjCWTctyrhyC1gmqCnJCHu1WiY39qy1P5dJZ7mW3pvz5ev",
  "key13": "2ZBWhnHNZvtqLFeQodfZdAEogSeKXVXn7yhkWJyLNKgr4HN5Bjei8Q4bNLiKdMocQMS4ePqx2fVeVJj22rCB7DBG",
  "key14": "35Mz9kAJ5qMehEyHa4T4Yhvitotym3nRqcr2zJmDuTsf1ptEuyYbJezSa1HCUW28F1YjoeVcYuYriufQ3gWeAN57",
  "key15": "24NjsKkRdtPuuYHvZQXmT2nAbbmxM3wtk6Zv98wCnbs24gGM3VVvrrmTy6pAWTsP3HBkPeyacFttKwJs13WunJxY",
  "key16": "5pEHeY6xitUDSJvL775fXU1LgzLYmwwBAr3y7sCyJXWQECpGreQabfykMBhLDqfrxLwMyoKY9vWzDyqjYEVAibT3",
  "key17": "45m6HPxjygNRcrUXCP1upSzutMWpr3CXvVERwG3UZEbUHe7ddqDYucKTTWQMDKZBf6k8AKUCLiYQo42ZVf4NXWps",
  "key18": "55JXmx9X7DTL5BoyL3w4sQM8NWjRyXw3Ab6GJXLk2ZaSdwiUpfApTCwEmdwfmBJeEN49enH9zyjDCdP9whSjwuKf",
  "key19": "8bUBh59y7MVtYYWfHUY1B4z2M6rgyjcaUQAzNjvVghZiQu6bHZss5gfCVAhp5j52oNHhZqTnTh92upHsPmVHHJk",
  "key20": "2cUDGpEPr2xjPvjtpsa32bNXwUe9nwatUAAZVXmD5w2aFTDyMtjLWvXTsywuWZuTbb4q7agicu2ysTTEyoWNt3tw",
  "key21": "3AVnm4J5TYLSdGh6YSWWBh46RhExMtDsjwHkJfrfqhEiMtHn2KjvtrSf7NECXwcT1kniFujfLhfKs2xcRQ5WpXML",
  "key22": "56ESjEjaandd7FzPURQH1qQitzYxSE5on5aBtYgVKCA57SCdXaU5iNMmJJeNokbg33pQb4QccGJVm5n8fRPNqdK4",
  "key23": "3CgnRpi89MDz7JogYRRR6btSjzM32VwnM9F2C9tc4eQ4u1SPgtCiHSy7m23ffkr1q8ibZdZoA8U3uZqWiM9wBsGD",
  "key24": "4bhXV1T8cnpwpnHszFQTEqf28SApvoUHxUKAYon77EgKEqHBXAxZiexqtkjjubRZHcvzReqFnFCGReBkXYb7fCaS",
  "key25": "2M4Djvvw1H5cWTCe6ZSDXqF4p7oc9EQQ6NDfa4aNZgCUpAeM5qfuNtXGcZUGVHnvdUGJAu9zQ27ftLNySMXr4KFy",
  "key26": "57E3ujqUf9vKvME5Ka55oy9VjifhQGD1NgqTi8PvT7W4jK6jS6N7sPjPfgrJEtvHqvAsUok7XbjPmuvuYh27NTUf",
  "key27": "5jUUHu5p672nsiGg585THRjL1xTvy5tHPxvq6iP2oEe1AYWyu2ndPv5wpEzEo64yRzuWUvYmPQKY8L6P2SJzGsKN",
  "key28": "2h32tEPLJuZMLgHjETyko3Zc795w2fdtYvBSxrU29Sdk4q2Dst7WteQ6fgF7NDNC4yKsKAoadLTCwzgf8Dh4Wjxn",
  "key29": "38pn2BCBBLrGuC6VtcHH2MqkHRqvnwtWPA46D2QRjT9zRf5yCScZEkajFfAe3iS2W9bitWDNkXzDj68utaycQJid",
  "key30": "4aJzV1S9dgpXmEvtkG2H2YHMhnepQe7nyQ4mjmSg8dq4cxZf3RRZuv5vhc6c3W7NGESX7exp7tVzJvYgP793iEVk",
  "key31": "2yNnzbm1mUFDdk6xjBYYnAqrwb1BguH5xb8JNHLNEJb8rBwCwyxJd3tsXbkSuajEiau1bbntiFwVP8mAYF7FWWMA",
  "key32": "4KeiBaNQmV1twt29jPHeCUnw7afn7KUZ54XyF4X9LVLvHPyQ9SxeQvJEo8wXLyDw79k8G4uhsn4we43wN46yv6qq"
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
