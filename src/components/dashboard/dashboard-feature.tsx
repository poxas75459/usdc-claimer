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
    "xkfirJKgt6hubCGwzYf32nHo2hMHdVQ9UfUEho24FULhYiJ1wooswS2ZcprnwNAxgbXz3UYADPpR7EigKMJzZkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2acMYhvPr2wtaC7go9fukXGMUbLvLZggnoUquMZYmjEo1DDSopaX5WW8R1hLPAujxHA9gdTSiQdtuUG2k7h9F4PA",
  "key1": "nH2KaVxieYi6VanMXqXZMswFLdDnanQbVW96hJryYS4RufY2nVhNofDAK3jwbuSe8Riy7GjqvRHuDxAq5SfxVp8",
  "key2": "26aB4jD6dUKDfRAjmDi18DaxQHxSZeacW3ZSbtNZuNmSQmamgp96zvtDGx9sWZ4acGv5XXMK8tqty4AQ3J9gzyAG",
  "key3": "3emwxr3SQzwYU56ttAjJB96EWYMKosFHQvkm1kcGaLLu38uUTLek3teXaPBGMgPFoBvAMiQvPNyi4d2TFhR5TENU",
  "key4": "5Ryn8qDQve43ynxpHJAh6AJyAHyUZCRDyGZ6mQzBgVTuY3nEradwwVsnhy86Nqg3dhkADkv6sMJeMxEBt5ezsdBX",
  "key5": "kzLWHcFFSAjxo21nhWkdXoQSxyRbeAGx28ZfvXJhVvxxP6hDVkF1mmHD6yx1sVPkaWUDJQk7SXSqr18fwNkkbZs",
  "key6": "5bRJgpzeEWp5GJdxeQrx9iTiShcpjJ5yRPB75AbYFncVxCF2sa4seMDaJ7u5ASahwjob9NqKSiEA3j8zANj2HBMZ",
  "key7": "544tw2sYq4miqBW3d7fGiPePpT5pSedJXjD7wQTLKbmZfQJ9iponr2T2yhHK4hR5qQk6ssGXp7AxLpkwntMdXyvf",
  "key8": "2K8uoV3YFMGzpKEGPnqdGadoR7ECF1RimBKi1C6e4EYZrZYKYTfMR1NnZ2b4YZ6mQgjzyeAGGP6GfijAVAQgjJR5",
  "key9": "KgpzMCwBr2L3rXJ1gz6a6soQsfmukV3sQHx1fC5cprCvDGUQj2UwZ5EztiQ5knjDsn5wQZRg6FCzQ1BGPq9WiT8",
  "key10": "4gZQAGnbt9ETJ7BXMxELMZi8RGGto5FF44FJXzmv95Sk1boWBLYuFTpUTTN1ecZcyQ1Z7PFf4nNNSR4nbuLQ48AE",
  "key11": "5BPwtcKBpNP5Yio3dLJF3XayrTo9tVPUTxcTLtFQy42LjLxTVtHo47rNxZ5Aic34RBv94tXn9HJwLgPqWHC2Qapt",
  "key12": "3Bg92PYZ3cBLegYG1urj2aTALGyywrCq89LxswrX51dY8UXNdJDrm2BKxTA7RTMGDx2P9fUWnX8GVjVNo33iw7wR",
  "key13": "2PKGWkfBjtuTTTZ2VsGp2z7zusDCAXsxFbhG7yG2825uhQzxtb3kWaGwrGL7WoYAG9hcpVxGFRfYHWQDYbWVwPKF",
  "key14": "5295SgBpJgiaY5hjVbJ5Kx5kaDuKhL2ASYKYdoQ8gJvFgjJerhymfkdEA5KnNHDqQQcrWpszbQVJd8aAngKq2k5Z",
  "key15": "2awomdcCx15vEnL69dF5GRE2RKwKy7bR2ZMPNRaooLz2EVY3XfxTczVgViNthipoLUFAZ3ShRhtFjuDsUMQ441UY",
  "key16": "4JPk1nV3c8mBrN5hBpJutDLi1DU9MRJXFWk3E3kh4YZWfRFJHBXuJ2UEqUmTGddz9eRJ9nGNdTdLpC7vb2NNPhdy",
  "key17": "3jfW3kcvCsoqKgH6AGMfzY3VjocwQpVxYttVrUWGYWwC2nUKc6dkofZyDQUHDNgzypdyTaLah2f2xcKJ7weA7vNz",
  "key18": "2XBipJfdM6xZaABsr3aTvNQFPmSjhQM3i86qHZ3SEUsKogXZCETszKovuP1GZHVe4YYgFEtHwkvTucFwwKdNPfEP",
  "key19": "dVdLLMYxuCoMXLhf7e5JAEk73Fpjkns668LFeepWBMvUb1YYNhdEKxuGkMDAKPakWjBAh7iKucfDjfjv99DxHXt",
  "key20": "4QRqxWwgF9aS4ey3Y7SvboVFBuMVmNJudJTjeaRuMUfUtJJHnbE9xxL4avCjZxZkJ4mst78ffE3prXSEdkzB1Fzm",
  "key21": "DP9i9eJTFzXwUPHXPaoqWYBpiVpdUsabMyG4LxTa6ugfFzonSfZZUQGWrg9SnLP3f3CG4womqW7ezVY6PkcVWcM",
  "key22": "4qhZ3JphCwg7RHSvD6qmSpiZt6beVAiZB9D3zGPZWQt7kD9kSVSDzCRKjd4q5hooTT4H4RsJjbHJeMwFpaJckst",
  "key23": "3oPcsX6V5WPPY4Fs4MhgJV2Hf5s4W6k7qySPitfku3gHCX5scGiGju8YivCVHqDSd1iTZA9QMEY1P4Rew6he8s7U",
  "key24": "4ZgbiTR2DikPUcyXsrMq5BiZyJdHgmoQUYwRVCGGicvB6rbHXe2nzA5vY7zTxq8vfBPUqSdwy1b4fHUzDpEKazS",
  "key25": "384hnXtWYqCnHtFQrTcFym7E7t8v89Bc7BLHqNayLB88YtZnLzkXX1zhyAe5wXf9br6sQncuGhkFPEMw2qswy35j",
  "key26": "zjpy8r4vhoB61rxCoexsu3gcW9GMRcqyBkrcpcja42WdEdHgBBxxRZiswGt9kStvG7dDnto8Bpq7qSGJ8cF2ds3",
  "key27": "3bs7ECsdT7nRphvne2LXfqbYuSXkPfqmV2ZJGdVmLZxXQMxMf5XHUxXq9MmKFGknfq6zhNxsWnmaE4h7FtFPouMh",
  "key28": "4GaQbMJAM6yZeATb2MQnmqMKMU4RGJSDGytQvyvJ1nePLuzVpvj1MMaCi4wq9jXXbP8Gus1B88uXFmDmaGi4zHwy",
  "key29": "2jPeVgCnoVyVaQabLirnDdE5GMXiBjgd2cKNL1Zs3ym5ifND8tSEYU5vUYVismnzgmbP9gkdxXsnNz2pHSs4U34P",
  "key30": "4q17hhA8PPBPGXtTMMoJ1J56uYHZswKmSBRH4LZq7WrzqRX2vKPYHpdENtgqfX7jorRupvGncZwS2c1WXjkVW6zw",
  "key31": "2Ez952mSq6SEnXSU6KqyBrpV1uu83Xp84kA7QfsZVJNSktikP6LcE7qSFbEScJ6gn9rLLDRSfQgFZ1g7T8TmqGa5",
  "key32": "2ZzAMTrz27WgdScL1CLvcXHrHHMumZsTeumWPLfRxcFxDJ6cRzZnrB1LQwfMXjvVXmFEWFhYZ8bkVJ73MVjC1pzt",
  "key33": "5Szco6Y2rQQ52mbgJj5yeh1LjecVkWpH4pYvVic9Aev86M6i8HHZxs8aewiNUE4xLQC7iCqgJnWUk8vocFGwyhoH",
  "key34": "3yVNoutiVo7b7Lf1wmGfjMhdpAkytejxC1H6gA1jbQukt6R4fWF5yTJiqXx8qN3Df3TFh4XsWR5gSjFsX4KcdT6H",
  "key35": "2eqCvvBUXoA3vTVZi2AkPVaQuM55p2p1NKNSaeHT3SN2UrbXe7pGQLhgDZfud9CVnmck9LtYvUkLyGjbAmgTCSEd",
  "key36": "2nJQhWsFaZpLEvQWWdi9eUrNZ3Bxzp3z7TLoivHrZKujjb8e2NtwnjcpdjrXLhNRr9fWgd9reJ6mApPj5x4Mn3R5",
  "key37": "5STxydK2J6KMAVbbQjSScPh5UTYq2FkRDAYhLVKsRQDWzL48brSV8vikazAMzTAG6WqxgAomcfgdieVEQrs2MMwj",
  "key38": "2SkyecJeHknajnRSdfhEfCnB9dRKCz6LzdeerLMJHvPJSZoNJT98RGuAQ2HgkqDBnYkiLpcoFHCkHkJAt6uSBpNp",
  "key39": "3qi7xf6KfdJJaf17BtD7T8QievExxf9nDvPXQdUArDp5RCj4kw4ZnhgkXvUGNHgcGRxBJD5G7TwP3LC5QrV6tQxD",
  "key40": "21ZegTebsk4nZLHxibLHBx4mvYe1X2ZkPtMYvrPqQ7nK2Jn3LYowwLjQ9Wq5UMeBraMDj6PeC4tzfrSdXnLwVCeS",
  "key41": "5m3NYzvXxGsmRBLiE921gGPQFmveGPnaHHim9Zr4XTbnvVH625i1JGWc1KKSUuZnymFsLEmacBX5D6JuyaQ5VihG",
  "key42": "4H72u8m5nmJKxhDHqAwLPjSsSJGgFqYshW9V9uSnaGpgnsZvQYTj6vpJkD7kFD6wWpUt8kP9K2w6Yj3hKzm7qhc9",
  "key43": "4y3TjebUCz2nxwJH5WUWHixeLMER5WBhAoHV5RtHcz9wxcGam6NLNmtM5uoqFzprwTLnJWPpd72C3kuVk5Ztqxk3"
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
