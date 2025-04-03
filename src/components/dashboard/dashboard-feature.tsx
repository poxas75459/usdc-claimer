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
    "3j8Q5BvwSnsppMUFkyM8gh3XZjkyeVLDfVhnThqqKBGEXJ4YcDWwtwnVYArYFtqoP8waFZoFSjfj6XMyQomUovXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SGMqr6ydrxEhLqGwWV545kCz5fGT1fP9eU1E7jML6CJcx6cXLXxocqMfM2VcN7KGLCLFe3J1LRpy8wVV9cdu9H",
  "key1": "45d2soLFa4HnCgAvtM2uQ2tuZwxRYi7DGrEaASpB2wmUWJBpqdEdArKpDQehmCKAihkPVZGpc6vm9VRo1Gh5RemX",
  "key2": "52VP3eYkCDbKQQyC9Uew7QEpYe2ByVC1SPjfoqVD5t2Z6iWvUhekBPND4YNxfd9G5xS5Kf7Tm3x6HTjrGMfiwjR6",
  "key3": "5P9scdYax2FsHePZfmzcbsvLVqwYHbRtauCqgWsQTfEFdHtRqqgimp1dokH5y1mG4nYXkbpRVX8KcH3ZdsxLuPka",
  "key4": "zCqEytwHsTwjNyTWitJaoXP7eWr9MZALf5prez1qC1GeJ4vzRHzZKQr5o4NQeyz3XBkbYZLhQdcsUJHRxEnU1rg",
  "key5": "26SimiFoxaUuDobhnKP5a64ddU4FiESBtKUDZh7j5FDk4mxc6rTwovSvH26uBppBBBtka4b7gBivEWbDkbRC5GEx",
  "key6": "3wifzikeR9kuF1HcYdyhcwLDh2v5et3KGkfXxxndcWbdz9W8fkDpT7Pq9LpoWKAKC12Av3dEg31Dw4gG4cHbaNRm",
  "key7": "2Cp9tnuWn97eUrFc46bV6DsP2W3EacakVBbHFwHSt8yuZGZws15MKRH5a3D1KK9d2scYs5FuoPMhNxTCaNe5zqcd",
  "key8": "3eEc9cQAXnpgnVqMhfmDzQxYZUc7ABfU9DZwe5jrs5j4n8NvquNkCUW4WCYEpLGC5gTgxFdmXdcPwAfzreXuN9qE",
  "key9": "5YkvFcjodxEmfikHMEV7imqzHCMMVB87fA6Bee157NGVs8ypVp5kL1kbdNUvd8SgtvPG1A2yrx9YtTdDkt7eLnN5",
  "key10": "eDixTvvCySSS4dYYbGNFk3SmmL81YhWALAesjNjFqCo1ddSZidGTWkduSnWYbGNcsLmN4ZwUGXPuVWDEShLKRxt",
  "key11": "wXfxmLThT1NY2uSoAF221vwzPXvskkGSU5Esx956pGAkVX3Px3q7cPzWy2uTgeFSApBqaWB1ybB1immAJXRbxcG",
  "key12": "2u74adKimqQGfhevNue63nDggLwRmWqUiX6XZNT151yLadpbwtK7sGHEHjofDKEZbt2TxysMn2w2jzjpXiwRTPnb",
  "key13": "4EwVF6n2PV1LuwWC5UjdgedUn1uMPrp7CUSe8fm3nmBgUYtbbzH4Z3uo2Y3ap8w7JebuBW6F6oj9SygNPvKArQak",
  "key14": "4PF85f68uBVtbhtk5DRCUeSgadJPBmirXaiVBN6WnDjGdgrrtsUKGcc7XSdxtQC8UX4t8CRUkMaJxPj1F1PPuhVf",
  "key15": "4XYMhxYzBuc1C2CW2YJ1HTsYpR6YzVinAam9WYZ2ibbpgVZqDd8TWjZq94SD8WehYf5PNF59CxQ6BV1mCGmrbSXy",
  "key16": "5kwPhrUT7fBq7AR7WGLBKG7iVGsMy5gbsuc83qmQtNXzuG1F9pMPZz1qLGQuKNbecYrLTzLSK4RsB6WrYQWujXHK",
  "key17": "34nMAnvwDAgbMu8e4MX3jCbVnqakpWb59fBXEyreSvN8GVxaM27azx5duJgdumFSTefm34s1JvGEpgPpkmj4j8dF",
  "key18": "2aHPGQF2F8LhdvJCpTjSr4dTUpFQSF9TzSAyZ6nHb4shDCo71ecz1HaBPHRx2LWBcfczyWzLmxqsSbXtMY7Keqwt",
  "key19": "61ngUoaDYUZtKjSoJzDXmqXxJmtcP91cJFUnyED8JSDXJ4dwyHA1hTHUaE1kRRPRpkiAC1GMKNRvrpUyJQsSn2NJ",
  "key20": "4KT7KWFGEbE2BKxHSgTcNuins55R6ue2XpewBKZjhrKeKZCmJzDavP4ZH8UcQk4oiLB9oCJUFZWu9mSrqUcvdwwe",
  "key21": "45LuBitctSRQRU7xWWhvgmuqg16rZ232KVv7Rv7H6qf5a33XTqvKDTtQCeUDw9V7Pha832FE6vZs8ToqcBkivw8E",
  "key22": "3kK9FRZKRZvGRe4JEWe4aKLJwAP3dYE8TS2gLm1tXdPZLaJF2uwLQ7rJWMVLb6VonSpi7pJ19mqZgiVzFDBdfJ3P",
  "key23": "3aEBEpunkwrzCvCrkMnseqoyVtobjJt2jTURjApHcDhSqwNELc9xa9UAsZXVdj3oxmzAEgvpsUCEjvEfHaaapJSZ",
  "key24": "4cHzM6PFW8vZRWVQJam7ny6Bza98SkLh8KxXvy64ytAEUFPCxEM1SwLhrrhAYqh4DaPNcEVNmVw1xFjwTuMmRcWC",
  "key25": "2bpjiZGyceJHisrcybtWBmUBNYTkPk9mmHYur6mCihm5z1cgtuLqhxA8uNDnUixG6CQWHJsiS3SpYrPoCyd7qK3j",
  "key26": "54P7Tu9mSsHXe3VXtJJL1UZhBiWBSqQ1ZyvNqCeyHkqtR6peWkXShrJW7FyjLokazotcoHWVUAVUB7LTjsGhmzBp",
  "key27": "4hWLfrsULbWDUxd42XVu3bokzHWmaF3aB1Mmo5sVYyqXsKUyBJ6GWqoGifH4DtQzWMq3rS7JtRHg8pEDYzJ1nywd",
  "key28": "5LrwtnuUVTRoV5NpGK4RtUxmaTYz4WmyoAUR1EveqPena46v7funvjzQg92GFyt995PVsCz796RnxNpai5CwZf5X",
  "key29": "5QfBuiuJSxDrTeyaM3WJtniXTVcbFJ8ZU62zQawX5x53fyDK3dfCDuUT8QRyH8JMSiXRG6PtEYZb33Fce2VCCKEy",
  "key30": "4gorcadupzm4V3NgZB5NUxJCDphQgdNxaLux6iYQprmjyqDggsewU9DZcEifp32ppSP2wpE6XpjRUupQP8jMDgwS",
  "key31": "5HLjhnw2jNdLaozbfPEAwtEATzNBk9jWRH1RT9seofzdH6vBWms21eeMQqGRBeGXdKyLGKsXKSPygxNn21GSn2sG",
  "key32": "5yNpA3N5BSMXGJaVuc5qR2qqRGzV5EcSgVJgRD542FSzPiBn3Qf9JW8HtwY9777L2vsT9CtM9rpB25mSY993DFRn",
  "key33": "2YfY7Q127tUyvCTpDJcodW4fZ3km5wHngkqemhdKPtrDaWWtpwUw8rjTRqSnWDkcheGqUbek7KmWBqbhFMU4PKxf",
  "key34": "4kVvHHBEk3ErTuDRjB5BKUi1yHe81Sc9yAkfZZUG29RmjC8nH8X6rKqShYbhTJgyRnwsHJnTvgpGJKYsbwzu9YNi",
  "key35": "26PjVdH2o8E9sHuQZjrBu1LLcMZd2ctJSmrjVCG9ioVmZisGJtYrd3nZ6oZRDyhMYCVq2yptYtEcqBJjm93D5t97",
  "key36": "2xLqQ5gRNcBWUFSoMj2uTfsCPjhRb1Q19yD5caFXHyLsAR4bjVNkTaqw1qxbtxpXNXpaNKGX4iGwst6Wux5pyPYB",
  "key37": "4fp1zeaZgdiEaR8W76Xj4R7ooxY7UkDbCUpRiWkXZsjXdM32c5gaNNp17oAuuEGJacvFi6QUSXheRCx8t7L9HHRN",
  "key38": "5vtjq8ReMRFJj6axEy5XKBuLpbFGrVQxF6bWxBLbBQAqBdBTnpEu7kD45X3GUogoKZcDmCm5RFJCYtUZ8ecXRf7z",
  "key39": "cYjmGi2ZyMaFbjGtU9LMpmuRiVCMfX8U1uRsWnm3T9NGtHufxQZbjLR3R5FFYeFhA64d9uAU5qHqsmnvYJvGRLr",
  "key40": "4LcWmBtwYq9KxRniNQo4GvpPSJr4sECyvrvV4uq9AHxfyWfYdd65pvVevvS3qyuiEMioeJzN6eY8ctWc9cNctarj",
  "key41": "5bcskFAo1oAaTqyLreuGH4Egorde5cqrxAn955Ms2RMaoQasHXfBPE6npiKB6njbFMXcmamSZ6aBQsAmWgbbBL9N"
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
