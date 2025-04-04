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
    "4UAWMtuHkDCA77WSgAjiqtXnXvxcBux36aaXcQV1XYgyGR2tLuTpBWRhKtRGcL5CZ8j51xS4vq83LX6ux9NNBeCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFEMyQvk6n2nsMawj12Pfqjam7eqLKiLngg1hVvrABCpM9wrmavzi65jPC9oCvufpjLrihNcc9KTtfHxnyM3s9C",
  "key1": "3oNc4gYHiA6D1vFjhWambfundHRz19YyZDEYKwoKGCA28jAyp1RqoY1yPtzLhFcUPrs3PJ5onuAPpRjB7umP7KhJ",
  "key2": "3VA2bSh5sVntvvdbFiWuScTu9hpbvFSmtiiKJHgPAtGzYx3XszG3KAdw4Bd4bJtfHnq6oLnNwwEWcg6uyAoPPWW5",
  "key3": "cr5uWCCJqDYoBnLSdc6oodxpfve6xs9JzFWnaRrrRHVvy7guDXLy9qBDU4Z52nKoqXCrr33PkJc8gDCo1jRxqhT",
  "key4": "5Fv63owqomCfffSU9N1qtrq2TioLo99ywey9ECargexHsS16xzwyr38K9N7SPYfPNJnivM1yrtRoPhh99jGXrDxx",
  "key5": "2pwksgxq3QpLTqnWCW4L3TPVD447oGyP6zpCn5MVZ5TgNwhij3KCVAXLZHeJvnreRuLDJQHQcPGhpgUnEeRPEUFy",
  "key6": "TsTqTEYQdfWfQszQ7uzBDsAZFbZPuuVcCtovPfvWRUkmihUKFatCRWuB2hmEwuyrd6PHDjtwbkdihR2hAU94AEN",
  "key7": "3k3bTYtYQy75DmBDYin4oZSbNbBbUZPCw8CzwmKWpBJ7EukWuzYzzGpu3oMDouPbBptZgS5cwgLss3MXB3jMPh5f",
  "key8": "5TEeQBD7fUh6fnmdQXRGLKMkHDW4qY12NGf5S3NpP12kdKzV9BkxZpijmWh9WjmxtGBskMCCKsf6FnvYphmr5MRw",
  "key9": "3FXqbSXrrXozJNq52SAeVpmUtR94jcVLyzeDmQ6udpJ9qHJYqYZR15HXpH5ubGgF6QZhByPUYxcsGZCK95UumFzT",
  "key10": "T1v1o5vfopwQ6NxBKqArDSKPAEMHuY7CVYtBh1Tuey38tZjtNdzZUaM9r13HehNiKyiHSLF89AdN8nQ1EFDcpsp",
  "key11": "3Knb3VNVXgaSHTAm3CdfiQmKfCtjVoPTQSHy2MZTghTLHSRBwEuqb1uYVvvsBm3ERY3oBmuw3LjiENZnFuC9k93M",
  "key12": "46Mggbeu1bpWWB65m9gmbDoRUKabXWoAiCJQGVnFgA9tcwemjGYfmeFARaVjmeArZ9y2kJ5YsPsX2JBn7GfZvrAd",
  "key13": "41aBxRDiTzvzKnMUYio9yo5PC8VMy6qdAzsbRJo616yEeo7jzTb7wZRBGzvumrnQM61UoJK9cWmjRwLZ2wteWQVq",
  "key14": "2XYw6zH2wB1XouktTeEgWsX84iN3QEGmaobLdJgEAT3KQniNktPRkhq3FXhGjBzbcCZfDCfx67QTofu2XNYco2Yq",
  "key15": "3YPVZj2ZwHWLvZy1nS5XhHdFJ8x6UiuCcMXaebXFabYEWh6woNtch2a14ePNj6wKT63QmDVnmzCaWMqsABPmcKkB",
  "key16": "on5fFVV6VJnU6y89ahb6DkjpdQUUCZn7nvjNgnhNdq9xXU1qqdDjFjcMwwSTJirHSuKz5iq9PPDRYxK12UC8vNb",
  "key17": "3rJFPLUQAHA1RwTWLvQFPXk6hHTRFT1j6yGMbBvXP4ZJsjAETxkuyRwvcwQMshNuFmDhVHzfbgwHYVLhHW2MH1Ge",
  "key18": "3phc6SkL4sMG8VxeqDdhu5Wqh689gJigU7wmHztiMxHGKf5CrvNMMnU2swi4i1MNC6qedgEg3PdCGdi5GAh76RhP",
  "key19": "5PGMXPd32X9JvRe1KpqAHS3zzcbNG8ZTpRHERZug82BHSnozHGsUn3u46Bg6rcz6XSMASZPnxHZubBbDyebtXk43",
  "key20": "4FNS1UrvbqcyVQeYHt4Uv7X7foKYX7jgrHQtEvYXp6cVftoZLjbPofcFLENeczLFdf5LGDLTukpwx7j73cjjJucm",
  "key21": "2rnAowQSqaAqrafnwAKq8j8aRWKZ8Z5DpQZAwa3kiQ2r3gL8oXf17toW8jfQ1yzud31QPB8148fTzgGqpLKWwFTo",
  "key22": "458eLMaPvCHa7wUBMtUm496bhLM7fNT6UEm6W25AZLVX7eBrZRnRv78vnnG7psKpwyX5anRJS9aUMmHWh4eqEGe1",
  "key23": "4W7kszp17UBBh7v47yYFsQnxDqnTZcmCYbsxmPMjHNqnQUGcG8ZpjzgeoK3ArrsH3JXUAYyMkzNuXpw8YrapaaK1",
  "key24": "66LuwTgKtG4tovnMqKSW5UYayk7eUTtY4mTnCiNhV7pGApjUeG6pNms7MFN8zotvN8FWZcFwCVWx2pXYQw3jHbbc",
  "key25": "2Ab6U395SfC6YGyp7cdS6WnyW3a5CUXqAiFqtY2yMpCLFMt59MzY2WLApKQ1GVAEx76iRN3WKcrVjpzLoP3nLs2E"
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
