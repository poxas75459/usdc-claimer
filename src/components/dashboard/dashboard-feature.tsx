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
    "3xpjYhf9Pcph5XnmUpkZY3bgsKGZek3ciXu9Rxjimj6picKpY2FP6M54mQNX94HgQF9wJvRyH5KepTCByvrLruCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmdCufqj8URGVXmxJ3qzoeZmWn3VbUbvHeT8BMzDSnRrk3whHGdYysMm6QyNGF1XiMZrsqRD13q4D8z3WoKg5Th",
  "key1": "mnr4C6vRPB14DbhTTrLdq1k8Gm4e7pBzXLHtUk6HucVusiLpopKWCeX1LMtYbVygtGtUAEQgFBkigeb1NsdDm8t",
  "key2": "5DQA8FazU9XmTf7drzLf6VWSqwRCzSDHZZc1ZmQseJmoAC77v3BPD2rm8FXf4pca4n7kWB5VD4rT1wFEEatj6P4b",
  "key3": "Nhkso4qG5kF5gf597o3BxSc657aJCBs6H5Zit9J5YYfwhNrN4A2XJ8yPskbWxYRbAqfkVdPQHwPoPQu4JZYJMgK",
  "key4": "4jgdaHxziHKFFHLghugMvScpD8bN51cviikacirXQtRPh7gQPCFLWTp1XfgmtHj1C28ipDr7DZZN43dkvHofgTVX",
  "key5": "3qH3bdytby2hw7jQoJsntKTgGZi9EmcYqsC9v7wgdnGXSVMcwYfd55xofy7XpTdUx6mQDexzFQvxf4a8r367DknE",
  "key6": "2w7y9X6fnRbMmGuqT7fhz6UmxZz1FFFbRhDWxiyUoero4Fe9ayFUStxX5wLZCyv8udPyFhYCdtjpYiAHkiVSiDQW",
  "key7": "ACCsj3bbqpiLnB2e8icmczkpjri9FpjDx8GZd7HYLs6FCcbPjuCvAD8pcc5p3qH3xdEQGBm4T1hKX7HXYzBFJQ7",
  "key8": "cyGtYNfCZ3JytbuYhYNQR4DA92GdJ6dhWc5LtJNV2KmquFw9vGgY1RS99HEGVXzkTfgE96bsgfMAMieayQ9fhBb",
  "key9": "GRNaSEQYxbEuEX7Hf6ePjNzEGhNBsQUxs3GDDR4TGfSkLt3kPNb2dwQeAnfAXpXVL61vyGuRUCpCrMLUMBkchTb",
  "key10": "2b3nnqLrEeixQuAMiqrw7oQwDqQp4s5PDTfbRHjhiQ2tb3CramhP27ueMF6k5W2LaL9eVazjoVNf96m3VbF8jnhQ",
  "key11": "4cLqzUMKjbD9BXDcqzQsxJFRrMNdbErpwp2mq38E1Y22XRBbczWYff6J8ibZrgubwj72wEJnPyyrCfLuWqtwRz11",
  "key12": "43sfaqCMek7vQyyJ9ALrDyvBy5AgZrPBCPcqUBNt41XpzWhUQJxHYKCma3S8cLZw8HNK3ovpaGAgnRP6oGvEQZ8u",
  "key13": "YhHn9FRU6fxvwLtgnLVSLdeAnF1gdYU6GLuGpU4WzdXgPJ3wbhfQ4mC5Bsw3ncjBReccQzRgtMvx4sHJGArFKo5",
  "key14": "pNTexdZj8cbfCCF9QdmfiAuPPeuc84rmChZpb4jYvD4ZPHxXYdZHSaT1v2kHpFrZDN4gUzkeCYfkM97FN4ie2pg",
  "key15": "287FXdfwJsgK22WJ22zjU3RPdp9rF8HHRJHc76AAJeN2RuYrPC4F9gPkA9gS8M2WpqqTvG6X9ku7cWvevQsbVEiS",
  "key16": "5eaYhCGxBFg8bFkm4fxzfLoFpxviVosb16z9A84W6qkxECZLxzzYq1PoVX5Jo9HCumqEVuPHQdHPVTfGLLcb99cn",
  "key17": "2FUCePC1ZnVkRB89bXYLBa9M1P9osZvxGaKKs46EFpcuFUFYUKd54Vzz7zoR5qc3my5CfPpPzvxiq1sR5fro1THG",
  "key18": "3xGtAFg5XBRtce3tFPRsPGkeSgpm3j9KA2gSUifYDzdtzj3pMh4URFNSgQC3BJikuPcZKyPp1rZPyfuheQwSoq5f",
  "key19": "2HKYQ6Ew267e9fzT1hPtPTu28YtfXM7gnuK1RX99b7ntsxSaYgSeMkSptF9qPk1pGSD2UBqv7RDrN5Kp4TZnZycB",
  "key20": "3E2nJvfMPruq7m4a7uLo3bBVzLekoaUe6XMvakGNLNzTve7zSGQbJHgHrHRG7mCwMGkCFpwAZ1jpn27BpRrHvoRE",
  "key21": "3gvY3dT9T7vMTRar1iRf2vEXuSkgLogMXRo3aQPebkL5gYqs6YLqtJ39AaZCrFTQfbvU71p8cMhkWahkE9FPbfp4",
  "key22": "25vaDL9RtwhAmU99LA6f83Nvw6eseSB31nnLF6sstj48uwvdC8aJpfKLXdxwfu86ABf31nc8kQ9FH3ct5XmTyxEK",
  "key23": "2HiDQ9g5RK4vFPYQ9RLBVfr4UEJq3bD6AmAD4t2ruKvVm4wV7DEFiAyQpRAV1Zyb1VRPjRkb13mnk8V9DnubBEht",
  "key24": "3S8reNWvvRgSUACMBpn916briEqvyWABrLZSRsDpWwMV9bzopdypyXUByfjYkNasgRXK93kihD9syJ6FERkRmGky",
  "key25": "2fW2GAZYUGUKDvc5SgzvcxxcWQ6x2VDY3etr8VPgCrQarpzmbrAZCqo1u8skVRPuHwosgEqQojaWsVXv44xYTyhJ",
  "key26": "5BTNWNvESWzUUdDRBdnnbxHY3RfiCN3mF7gLmbxchRE1XM45xSGocuFTYWXcXACDNLSwr7bJc1W7rfu7b7mFHU6C",
  "key27": "2HJTFAs5mHJ9d4RfXQ51edBy6djVhga4rrUgbAtgD29XHo5YBVNoY6cmKz687BfCuj326ncfGv5i3TXDh1JH3f76",
  "key28": "5ksZPs7XM55o74x4GCsPu4mu2Nn8G41GFJZ6t8GgVGA1HAZWBVZBqz8zDbuP4RdPR6gadfkNCm25UvPjrebawfkJ",
  "key29": "D5kShdcPiT2hPcZRLkaKuX7HKzCe1cy6fmBca98AWDaUGVNk9BrS5uH4et35DU4X9wS674cwURhu3pGnxfLNNv9",
  "key30": "2TbyoA9Eb33KaRGn7wAwxMjPKJxuumr78K37VZtPsdAas3roSskgmpN1bdVLeJk4HgtwCEvH5EhvNm5oQvpRL47E",
  "key31": "4RiRhbeUjmp81yLknkt7Uvc4NqCzyVxdmXbteZ2MyYmZ2bVeBmB1UbgsVNaNjci5pVW4DnjgUHzxez62dbxEhbXo",
  "key32": "5RxuB9ZDwaooaWpAVy6vBwEr7kj8y64Ud4anFtfCY3cBd3PZNKUGaZpJNqxeJKSR4dQPaHcr4VVcsPR81SAH2V4q",
  "key33": "4s4n8BVwqVsiE3kAiCrKLjZbqXrZ2RSq1yhHA6odwH6rmEppJum6hgLgxtjHUKQ5tRvCQHEfyT9P7GpTfpMVvKrr",
  "key34": "4cFuTSqV42qwCW5cgNxFMQEyf9wNntd3vMuSGYv8XFFVmGzDqEcXXXb2oPmR4W6RZMSpKeLFehksB1AbkNVmcq6",
  "key35": "5o8LjqwCU81PpUfuCSoH4TzvPoqBRydW2XrCFfrL8VSan441oVtEM7n2VYdDPKnp5gaMTYd6pyrWBHaeAHdQsJwZ",
  "key36": "3vCFokNHY7GsSBaZTLMiPVatihCe6JcvqdGB6ULbdbMN4kmNwTtvYcih1iiMuW3inrF3e1AVEAbkzJVsdy5WGkbq",
  "key37": "4c4mmcZqFZiYW41YfkbALrGyeawSe2mgDQ6eLns3E5g86J8MM2aQ91NQm8Kx789EvvXz4kP7onbhqFg8RoC3Lc4D",
  "key38": "3VV7yKUaFvE11aDBWDy99b7DjSnMJGcH8vFLdbgxVrB5RkKfqDrufKGraQpB5eVKNGAE2GiXfuHUCqAUczGVioca",
  "key39": "ASHNEYe3hphB2MU6rDq3YgcQyvQkNY8JVDeETHKuqdSdoUyB8sTxKi9t6Uhr5AzmvdPL6xTfFW61NDxapELdKbf",
  "key40": "3orzVzMVQxuPTzY7rBMfY4ksdwUMNnbu9KVq63uSdhtR59aze8pJzMUDeQEgkz4ADRn6EyDveTivM2B1oaL6pucs",
  "key41": "298BpF4SegjGCrLqFWuLdXUMs8XBd9HN5hkqwZCkuV8omazTsorxn7qf4LtQaAFKpb5R4V8xqkaJEY2axgT2tWZU",
  "key42": "2xaHYVGd7WpwKHrjehgePuScpeqvdbVCqM9YnxN2mQ2Vs38hbasQcjU65GfRUaeAHxAgVzAthrSgWHc9DgDoqyXY",
  "key43": "2giddjG9zK7ytRBeiJZdJjkoWScVtDdTNBumVRmzgkNQath17zkGRMVSVuoauSNQ5AvkVmMN69SqGNiHqrHP3ogd",
  "key44": "2RC1uGhjEuVzqnG8yMB5WQuxEkSnYxnqffpTxmcMz3QnVc9Qapu5xsyoPyXAgX5h5DumQyj3dfpBFyNa7GBMBUP2"
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
