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
    "53515F69EMpuCYhNL8F3PykQgtuT6WznT9uPi49LZghVD2ysvmFKWfWJ1DtcjX8VrhhCYEtUXj6mQ5XhKXfLYpTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBgnN5oNeLHeEMCHRvJi15Gythd6uV9oYrUYZzgt3p93ttG2qBvxBvQKiB69vi7wJk99GGLMBqo2hDz5UDXLBCF",
  "key1": "4pwchuqpBrMSrDva6caGv1X1aCzUsKwrnkpzByK9EiqFFhd497kc5STJhsAf9hxmrRh8h2i8u1r8r4F11MQyhkXH",
  "key2": "232gA5ZYZReUsciL8u7XW9aGd1TRHCc6F8gG1jhtg4daUPHV2h999W9E5hY7sDU8fnC5Wqe634jppR1VgtFiJD6g",
  "key3": "4zZLv1kxyeMK6SN21GLVxtvaohbHQnjLP3BkVA4GatqWGvqRq2TGhmEBAgFNqTUGhF8eyNWi5zucLvMhmaMYJu1w",
  "key4": "58s4SARzAPUqEa1bsRvP2ukon4hzNKXMR8YRs6Ce4VYzSkcjjUCSbFeDfZ1X5ruvb1DZxZY7hqLxACWBvyXJNxDk",
  "key5": "5RyjhrUYMj9Xct9tL7hKiFsg5Y2kGMngDKfcZHg17YhoaHsgUTCnxqVC2ho3kd5vDAbwiszjGddo32dDBiC2kB6J",
  "key6": "5AEoXqYXdsD4RpHie1zLcJ6eCgrg9N3YLCWeSyUaLj5TmAAdQsMa9aciJuhJikPYhBa2kEWfxwgyJSJ1jDrqrCv8",
  "key7": "4z61U635jnc8R1jttwGGQR93q1NkePW1sV51KfasDwc4N8r2euHt8AxoX9DWgCL8jJKHu2tiXaqvJHDsBcsYhubw",
  "key8": "4xWsE4LtfGTF3NYSRTaFaEA2tmiNKrd85X6TKrx894R51JqHU2wARzrvUaxhewyBXdLNUpV7z5t3kgEop3eBBfyM",
  "key9": "4okALE5zQ6fWX6vQhNzpLAZiiYgJUsEX8Z7m4DmWxHkLWSaEtTwMmzmsJgwDiJSeqmQVrfVNkVbmBL3gmqWdcd6a",
  "key10": "2YRDcz46Mnuwpd7kz1VJ6hDCyv1cbWkAQBk5s5akQcEkMon5TkmjWBfTbZR2TgkjD8vr8hzCHYwEGhMoPXisq1JN",
  "key11": "4qXvsx1EAMskLrvTtiJ6LaA3BAf7kS8cMbXd2FSmn38xoDWk6tqbryAYetyjSRVAQWHZjjTiDs2KxYFd9CxTX7Nm",
  "key12": "n59ZpRXNUHJ9Q2fKhxVCJdHfxL6vFe9aEY8p2gV1SrDWLYvg94J3TfXo1TrqtbmmmLW1ca1RA9w1AZVRJufDbn6",
  "key13": "2RgZDwhijhLd8ZhmG5DrU6R2MprTnGEXvC5VYCQiGtRYLnAsMEBTRXR7JPJWKiymndXqBBAzaeJpHKhSWZgQR3Kn",
  "key14": "4HeuWzdvZCyWCvzP7LySdCtCDAUhdVi8UaHi9yTjjPyUNS7T96NDUTeP8GPcdNpGkSnftANiW7zcHgLGj9xaS6bX",
  "key15": "2Zv4ggd7gYdbfminWpFFf7wdQzGsPcMahkgAC7ywbuDiPULWTHyrZm1AYqgSrQvFh2ih1o3PVa7DDbLxPbNZqLfM",
  "key16": "2vAPtnRoDGYV3Jsm7CQkbL5vPrC9K9wgTbMsChXpQXiVxhrwZBFYaMvGgtKhhbADxaXLxGP83XgrqVivPN4hD8Qs",
  "key17": "hPNV3JJiBbV1QesnznvE2fXWrmXoMLb5yFZX5Xgvpmn35vfmJpK8hoYYyS7xvcZak4rHEdTxiy1Zmap3w2X668o",
  "key18": "w8J3uwQ7TgRnF3v1Fr3B2r81NMofqzZRxPT5StjCWXX72FkSbitFFruNqARF5bLDRnxz97fgSpvbWU1oxjRb4N5",
  "key19": "4ATEHuVq1nPEVXHFo3UmedEGTHzgcrW6MyDydCU7gyXC8XNAWmnDo4G1JP1GrSSw725DQG4BgiQvjGYPxyiTJCKL",
  "key20": "4AMLHrDoxQTUTryAaxwLM6du9SfXjDeKUqCDYDqpVnq42CEJ2F7TKqjRjtAAvXj1UZKWV8ra8b4DFQbC54rx39tb",
  "key21": "5i2uBsxozAkJBzJjQ2tWT9RQfkZGGwEYJqFVWczra9N2aqAo6VeiNxVbZwjHJykAQ1TXu9Guj44yypBW7q1fcwQN",
  "key22": "cCp266B1CzRo4aupcrPJzZvF735e7sdRd5dWkJ6V7ZRQsnoacXcNG83Zz5iseQKT7wGdJgh13n1PEM2BYjx99F8",
  "key23": "2NQ256gB23w3A4fp8aRSxocUBMaUMw3D6UbzjtTyKLKP2acT2jJSBYV72Y9s9TxNZXsyvHz5ihiYASbp9gMcds9x",
  "key24": "2EfjxkWcTWXKifiJVWf8DTGTkDY5ZDwofNAMHduVB5ze3kTCpg3sF626bg5mfs8grX8EUfPa8L9MsPVBc8oWjSes",
  "key25": "w3kKpeoDkFRKuZjmKAz8N6zxLiEZTcCebd1RDjp34w5TpbKrRs4EQNBfASgLQWWYhdHArGfAU6VJeLpg9SPyYyi",
  "key26": "3ob3gVc46VWFQYZU9v627qcmrpxmJ8osAkYAzUKJZn1BcdGTmf9oPd1rxkFvNzy4AYGaj7BGeuZdtoPC69Q8ZNjC",
  "key27": "636hTJCdAYgCkZS2Ba8E9rBKvB3ak3yQNNzVvhSPmPc8K81GYefuvV6nKGRBeP1oJcARKDDYvqkbk2odN82Kgn8a",
  "key28": "3GZtDARzzABt688Toh3YBqDeBRVrjHiwR3hwK2QLQJ8aFzW32seAgSXitzwPAuussmovdUjHiQ57sPrF2adkXDVj",
  "key29": "38BMkE4fi2GkaYwkgmFzxYi7fi7xf2zj3dxDPbPYmFivuMQXYcCJ1DfAsLzz4wCKLyhBy98pSZgQ4JntHAdX32tr",
  "key30": "2XqG5mQUXhTaZpT2h6hUTwKkCYzpDW7Bu7rQt3Tg1MRmG1FAi86mPCWV22R9wa8JM8oG6xfpu47XzFsxqxD4LHTv",
  "key31": "3wQRzisaVogLnMUhw7Cz26PbTGL8RkmUCUGaMbAab2oXeaCpDk8S9M12PyUUpdHu8fqiFGL8EtuBscqjLQRA4BGG",
  "key32": "2kqcwWhpi9oancbsiT7wLLJSNdhpipZ8gDNYxGiDJUe9Dv9v3uWpjBfYr8hob5LNrwBEQbDyL8PYmKMtYP5fgZqY",
  "key33": "jKgfRfQ6Q9u1wkhUKuUq9yWCKd2jCHU2EXe438cXMUtZKrg65ZtALe55khKQgR2NUr1Rp1c2fqrF8VVXmt1DHKP",
  "key34": "5XCRAgwB88NMr3YsQ71Ayt7TxuxyFTEkGn2USeADXvKBj2ELbcpdhPZMWsLHVWR4y2frVT3XsVGfEbcdjAfsSVTA",
  "key35": "31ojkbwLq77Vn92a5C4WuVizkDQjNBELuzF5cAG5EoeZnJL65vc27esWLwSDZwoSqBdfMiFytNUmJmbykaQKhWda",
  "key36": "66XWmJDf7zQsYbsb8dZfBRwW3dbmjumzXssWYENL5KXPMvjUXKi3ACrmeZz3jud5xrwcfbngC7coHgg3GRZ94999",
  "key37": "4A9ebM83gkXSt4gB7ogfYtk3D49Kd53TdhQFVKFJDTe2HdREgq6DVo7WBeFrrZ5fAgqQWwy4pfZqUoBDweAzXVAm",
  "key38": "3bBZUDd675QYXGcLgsqCoD7GtzS4wpcJovXLzKe5byyziV6R7RuwAq6NWi8GEMHPQ23WStNEESvrkLhQzdKKcqmk",
  "key39": "iZJ8TpqGhvVLBUqAVue5XYj3nAqV2Eogayo9mUzAnvjiXEqyza8nBM4pASY1uxukm52aurVsHQ9Cg1tPE1nwiPN",
  "key40": "3y4JhqgDgL5SmqmZAqzM8Kfg9KDxFxzxUYbZvnegmXMRQKohgonkGZPTQtoHohSByjqc7QaKGdnir27ZtGkrT2x6",
  "key41": "25Qrmth3dfzqBmauBoe2LgM2ncGtgnxdPK9UbXQmr4zoqCxE585xEWY2kfiiorserwNGA37GwgbmyP2BLDt4RUtA",
  "key42": "4sJN3Lhs3XbZaQK9t2jV3iD1wYitQjt1HgYFtxbm5RrQEepndRrfEKaJy61ruw4uFVJcYwtfzwahqEczf7kWHgMo",
  "key43": "2WVjqMmetJjwdsC2pyPxKJnVaSDAcpv4roWpcAA9K3gS4wd42E5jgDFNuM3Buq1bdJAty7EF9KbRQ4FJAQx7uEop",
  "key44": "4PFf4xQL7eXRqN91ftbEEJJYqYS8nzH7dJtNkbumkN4M41FfzbQaxKJWNHysvv1D6jCEx3Ukxq3mChkTemvXQhYC"
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
