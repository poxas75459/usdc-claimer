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
    "MkRNQbh8KmYGiBuqGZq9JXAm1Gpnm6FT81VeGe8nEdGfyHG3eJt5GTYygCYkGYUpiQDJ1BE14wR7owgEbohcKAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjaGwBYSQQBA9gD9d125v1JTHfQ7PLwQkkKyKCun3UngM9QhZcihqQ8RQVk3SreY9ib62ca7Yj8PPb6vmxDqET4",
  "key1": "4Y3qMr84Fapg5BKgLVC89gnbipknqGMZGnmUycBDzXg4kj2XHbzi71nkCA8ssc1nouhtTNXSyw6Lfkd4CADww58Q",
  "key2": "3Qwwp5NYRd8b3u7h7ezupzy6ZQ181kQgVYnyzdtbhYGxTrtD7kzMMieZdq1t6LwQFtn3bHaFAgWK33dtGrLyPDwj",
  "key3": "3nV1hjokjjG2BcRm39yb1AKSVGxMpfqmAQUuSNqkamfh9Q6dWgfkFxm9ph7HUM4iMYupKXCQWw62eZEh9mx9Bebm",
  "key4": "3VU9LiK56UiRyzcXMEejv4qQSngwMQjMxcKoE3ggaWPoZk7vLZWu7BunZK7BJVBSkTKaJzaWNqAotEm8tw73rWkm",
  "key5": "3szJCDTqdmKgCLwrUUxEgxDo6amvBoZ66Cgwix6csZ6Cwo5iviU3KkAseZLhgQPE3gmWsyWrExR3S8ZfTMD1x17y",
  "key6": "2hZrjoUUDMARGB6RrwSFqAcv1XBC5x5H4SEa6B8ThXDS2XyBCQVUxbdvoHykv1KtKDEu1TVW82X9CHGsaX8tqMwb",
  "key7": "35Ym7Nz3Kj9XsaSpMMdZ47G5goK7ZuUvPPVhVZ9GZRKBykmxNoCPG3FAkaizkUSVuYE4TBedyor6d5VREsVsD5s5",
  "key8": "5saUkjwxNxj7925evWDBjaa5sFVsRopFm5s1E76iMhza9k4zBAZ1ubokxfQ7F6wTFvvXRmym29PCvkiCva57b9mP",
  "key9": "2GJEe7ytyTKFrziikhfXDwnDNVoz4j2ewTWcgeu3uboKYDioEDFcFixszhE8cSZAkQgJgeqeFvbDvKEVHHbsz4zp",
  "key10": "3nZASRSkGDH4QfgT3RtFCkp1rR2r3fgn986uvwTkcAG5P7CUFFeUFmzyrePhLabA45uuWYxFZPwfdDE8K8amdZB3",
  "key11": "38TmeqUjH4WPHH5QSBQ29Ktv4CkJUH5LvWLzgXhmvTGZDkutUhD98whTnmAdrZVff5qbRnuBohZRgb5VEEap8DMT",
  "key12": "5KYHasMUhVmFRNwPnjuBQBmUhx7azjXJ5rt7jW6pBcR1PSonixdBA6NM6S7DnWDTNwXaXkFLjfEFpfXvRkwMXcgz",
  "key13": "iHUWX5QPRRjNBQS9Umr9bZatayMNTKpchYQxUEoDDECFKZmrzokr6dVBrYPjSLxaun6jsMHiFmv6ZQb4nHdrXks",
  "key14": "2ATCsHWwu4zjJSbuKENr6yQRPRZNbzdk2upPYKoSCockwnB7KxZUN91t8f95TDHk6mhDDSxA3Rh2RpLnBx2FSpwM",
  "key15": "xtHZCD6JnLpuh5xFYoGZC5iCzwFGwT7q1Lz1UJatyM1cGvFDZSpRHotmTvK7JMBt1QomH7EPdpbQ2gdgFNHmSwa",
  "key16": "37EAhJWSq23MECRgncJyXLa8Sus7mH2AtNQZ7WJ7JBjL4363Ck9ivRCm9YZALMjkA6XHJU4qAgPym6dmTTq4HTKk",
  "key17": "2cJMeNHczwqsgtqZRB5SPidTP33WrJqp6p3XGwiVG6wvkfCWLxm6nPaJhyfY2Myd4LiBw52SmbjBY1LtbJPKrwUM",
  "key18": "4NyrNedVcHkTsBrCPUe7yBxKzaR1WkqohR3HT1Cp1aLUwa9cFPKi1gBSkrHxfchYTCP9yzm5dDq5tVL7ntBwjDdy",
  "key19": "mFKzjx7G4DvnpPFaPCK1ZtQJJDWcQyj86wQNXCa7qRJquUHmGHVh8rqyFqtRcuepN7CDeGccGQeVPBWbm7FxFUc",
  "key20": "3RRAiuPt4awTEd2ZLzG87A9QVwbPFE21GrAtHgkwVvKf9bvFCK4khG1gt39PkGVXFdVrNfbCj8UgAtNCP2aVQVjU",
  "key21": "4Z5VQHH4bpy44T1TPiy6sgmB7zeR5U4dFURGTYXYHwCDw5waptKvXaHaeq7SA9CNknhX6aW9X5VjZS44mEftoash",
  "key22": "4Xm2NH4jkjTUBarneaXvRXpt1rAzjXBnKiFqd66zRGTf1RDeL1AJ8ZPjQhWLiy6Y9SBSzEaMgWZyhp6wbkaqV68Y",
  "key23": "5Kttu3TQTw3BaAdwdcHN84H22GmowawHEPYrKEDMiBpKDFQtG5uBuKzr6wmKjP5n6Je4eD1URKi8ykADW32cQxCB",
  "key24": "4hTRQsJiRC5Gk8srizh7iiSnkyat4g8bLgSxKS8yC1zVmWmiSvXws8eYRFswmm7rU4BZnfVbkRu3xNqVbn2MDekn",
  "key25": "4nAvVPZsVAdQWECAPdvvu3TeUAUAQ4RqjTBDEfkowYpEiihUtyJ27aKtvHggY5eunYzbYmZs7n2c7uhpxeo1xqHt",
  "key26": "4F2h3ERdMru2so4KPJ2rmjugz4DHDJYKnoS1J3Sr1fBmBmcumA99k1GCnr93VkAx42VdxDBDYvvP4sp7mFGWDdv2",
  "key27": "yQsYKwRBj3ugjMoKXdY2BKM2ic4Ej64gNfmJEjm6LQPXNZFLNSvgYn7wKVZyXm33SVswGZFBnDVqcZoazCfcr3s",
  "key28": "4652NNvhibTpDaD5gipnJfm8GQu33BsqWXz1B1Z7ERpVY9vvcnCpJr8Vwgfq4BjTV1p3nSqjPceT2ihbwEe8XBM8",
  "key29": "4qpDgQAoimDA52nKPxRb49uy3Ex86hsfEVWkzEUVKVx2J1Yn7WtiyWHYSt6sFd1YRDLh47mgDVpcoPRFvEQZfWya",
  "key30": "2EYKVKXTGL1GbN2VR5scha1Lk4RD6wqpENkQMNhsCb8uYEEC4y2cyK5C2zqnoLJsWDebJEVxo24tqwPnVKbsF1E4",
  "key31": "34HHKuGBPas3EtnoDMCoKGpnzmWbzF7qqPPgpvQkkyoXJkJrgcrhgENjwC92dadX5mpLY76AsFJSCJGFwBGQeL3y",
  "key32": "4VsLF11ajDTnXXbPUuPe6VsPKo6UG17oAJR9hCFuUdm4Eptbg6qyx2JwaupSpQorXK67DwVcpRgesmYZgFJEhH6j",
  "key33": "3UmTmxkB5FLLdkmKDMNRYBuBzS4DHpG3ExivWBnad3YihNUGG5eM8jujzQWvEqzH2RiU6vZwBQaNJoyRck71mDWx",
  "key34": "2xwxA6S4GDLcTJmsE5pZgR7wug2mKL2PTsGAeSWbeQyfjqKRQpRX8vNp1aYivzuhY3zAtDn7nwGPXH6sQHzKRsfV",
  "key35": "HjFMmMBJmdnz5KysfXjZs2TW1YL1sqZph43a17e34RMBSfYcQdV1uHHAjYeC6RNVReQmCMCHuXxhuJunCbFRDVu",
  "key36": "4vke9nTh8r7kG7pPs7D9AzFVCnCgdyZjDZ5uYj2a9wVU4QGQnwgGy4NycWgDqL3t4HfDyzdSWh3KnTTawbegRC5L",
  "key37": "5Xjtqj9YMSHRHxYqmuw1jRZQaq3FJmwJDWFchEiNGsLT8PiMd1QZqNLgBRZCxz9i7EcYfeL3FsTu5bFM5T27gQJE",
  "key38": "5qcU65u5vvQv6W3xscS6F3ugosDoeh1KeQ39YbJaLMw39FcDULNZ3Qw9Vb25aGsK4k9doTAggSZBdWgKxW2nxkb8",
  "key39": "5ChGk2uiXL8HtyJ1iiw3tP9m1H8XnZUdXSK8ua3RJxaRsQDZA53CNDaJbhkjEUyzEMsE3k7XeP85Sux7HaTTacQD",
  "key40": "JjwYRByBbdAwHtcos3LxgffU1Pen2WiiS8de5RsYUAgZAhEiTdMjgb8oVwAHm4a1v1tvAexCzD4yYxHGtAxdPHp",
  "key41": "3fdp3SBGLGAf7SosE7m3LwSfSSTQCX7Co7vmbd31UkdGTPiEu9uFNr9irfpTbqAFLZkhxEP53Vqe1Lqa8n22FV82",
  "key42": "2GyRpgkuXzbEJXJF2Ho1cXp3DqqtYpWD9sG8fFkYAhFKDYeLrUmNXwQqLjPHf7zYPL2aQ9PM2Akh2EyZzbrdv6aM",
  "key43": "5bvPk8tuoC8GZp1yNq2wVX671XezXHv7AZUgMRjsTDgLuqJgpE46y4bVmysSoLmFVUAsuowvTeKseUpBG4fvEtdD"
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
