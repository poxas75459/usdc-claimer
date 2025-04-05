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
    "2Ro4RjtVxwfPwPsnKvtXeZrLFWgE5tYwFFNRNZ4rjqgRYUp41ysban61ABSuoNmetAdAFApeVQd3ZyTHeMxvibmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsnFmNFt166qxQhRqafuUjZkZuLYpBXYxY7RPpsnGAiZLWsbz9bDMRvzt4Zyig8vtFcJ75azfGbbnPwr2fau7M3",
  "key1": "4nKDsp7ADqZXWbR9eVRtEsY2i67sRcDAMj152qJhuEYNsXjjWfD362sWQ7zWGVKAyD2giGUNfrLtUWjiVvnRKRXu",
  "key2": "4gZM2XhPFuMreoxp16cTvpBYbT6bASpoDq9ffGg5XQABXVk1YSasdGRee6nsnfWpyE1Sv3g9XZ7hUjSCe8LhoGi3",
  "key3": "4qcGDVoHByHq4J5eU9vEz9YUeSQ51bpB5n9vJQL84nzkxvfdvWmb5TohW5g5v25Nmv9upfJXcHMUrPeTRSWma55T",
  "key4": "CjGbJnjdhkTysjp2F84VAcYnyVDSActWDk1F3CZknrTJ2Wek9sGzwuUXYQhAacN17jsf7KA7yb9fKS4gv1byMMP",
  "key5": "5A3FKhvHSMB2HAcAY2bvTWZdQsiWHy6oJUbjKnoif9fmn3uWi15kHCFs7QrivyxAw4RE5zJCPN1obKwsK2876s9t",
  "key6": "4XxjFaw3xqDgqSKrX6QF5Y6MyMU7uSNxhon37JLHyp48f8SmUQTc1bFCdDA2nqKo791tG8MjjRixRxwaebXpHLaa",
  "key7": "3zJtTdSpxGfUcanwVzxtDdPpuwRbVS4uockZSuKWxpK7P1jPuAoAJEGrFVeQ22ZGwAeHbTDsiwMY1RVwLkMaxuCt",
  "key8": "QFhBJnE3uMsZQ2hENA2cdZptjQvLtTCsHTkWPJ1emzuAtXsvSmqWwxKXZWBMmK114EqSnyHrr7X9heYJgnG4yxn",
  "key9": "5oXPksgqZMD6DAm5wMyzdWYH8QRKYTSkt9hyQDnnZWRhN65hV1JugC1fLXp7me8GnETSifmNKghmHUVB2Chx9prG",
  "key10": "3yivpGpAcQu4ZmPMpCnHvbmBaPySP5SMeLY8T5jHMdf3Ujy8fYjBGmCBh4o5yZASE4MRFx8vZzbXa4fA84QD8Cfi",
  "key11": "5ZsY6sMK94GJdPbyRtPtww72JTojzgTXnutJ9SbwNu4ew9ouWPwwtosZ1EVXwUWvxu7FFjvwwZocAVRX9fJ6P9N",
  "key12": "TAnXCNDXXWVsdMXNqwBNnMM1Nc9mZapA3KzZLk8VaMuXz99UhT6muhtByaVEnYTbJequr54wUusEGFNwQKuEKv9",
  "key13": "48LSH63pGPhBzyFySudCHQfVEw7N9uWgAVzdwUUpCxz4gvZsSPjpcumyWKWd7CcDcFDbC5nufFpJh1YZF1grME8Q",
  "key14": "KbaMgiSBFBx2V4TRvsiaw9eYv4WMuEHJ3idvBmw3emu7nifY2SXmsZ1sbRUey5UPT3c2eYTD7XYBN143MuTahog",
  "key15": "5Vgtmf5NeNuvH6MqTdy6rQKr8mAqJY7zmXznvq2j3ky83r5aTVEHv2azByXjR1J581xBSrjFBFUMPCfsKsey4WQ2",
  "key16": "3FgkM1QfGA69E9X899FCfuAxqboBgcHBWX1KMAZYpufBceSJCwudZrbFqecHi1duvNqTQrLZpHA7ZEum684DXZNu",
  "key17": "2fwgBfLqFczyHz7EW9n1nb1hnWuSrtYctVbo4dhccVJ8xPBk7iKQgzX1ioFoefTpMM7i4PutZupMaCnvGpjKQLV8",
  "key18": "5KfecStksWZf7FK5mdbdyUgy4KMUMSQDVukyK6SUUQZSZqeiBGAMDQQzTrRFeiqr87LsyL6EehZAEAbak5327hsE",
  "key19": "4CHBrwGoq9piXMPt73T4A7eJTH33j62EtG6gK8aW14L5rqg9SBgPYfhHuBS6M5BUfPYxQoAwn4Y8Lw34T5YzsqMU",
  "key20": "3VyQu9aLZAeKwnMZV6Fqj3cr32ntC6rsEacHv8fbRViQx8J5XqwJQ91FwCysaAXnGEVqvTDGQ3HpMRo7HDGXd8sC",
  "key21": "3JrLK2oDqAa6PDSYTLh54Se9uXs6cmAbXWVv1s2tUH8sfefwDz3n6VkGkdtWXgimP6X8DkvMuczEfkZJNioSHWGn",
  "key22": "hc58vyFqG3kpsai7YAyHMm3dQTMHmSDf9urbG6Sty9bwGfNV6GnZ5331bLWdYJfhLb5paPJhemyULhssLPujK2A",
  "key23": "3CbA9ACGARmQP2E73Z1TKPrwYihNAupngkFDbmeauRKJf6FdueN655XD5mAx4vdv6kwWGPpSHdJU9LhFCVvEbBzy",
  "key24": "4hU1svtMhpA1Eii9SSj3kucgoGPmSHUdqXezKWkfou8195H7nr2pUABAfH97FTHYdDwaahg8Z2WfRpX3PM1cQZ46",
  "key25": "u9E8u4cJrD8ua6mfuEb64wRxEbWQKCzW3FMURQWcTevxmdQH9jPTCmfaZXkq1vAH2waAoRB8SAfcLwr5gxzRZqK",
  "key26": "3yzv8gMcSKAVik3d566SgmGwCoAYUXPa94wDBKPDMj8HwV4hESPQQ8ceqt6pmWM2sWF6wu15gScLAaffUNCCFwom",
  "key27": "nm3mMH6Jo9o942gruAXHAoRmM4Yjb5iixTcPTarYmmhprcsb4wRuWjTFn42Eyfrs9U6iPMbLCxgDpsnKfR7o6ou",
  "key28": "5Rc2MR5PkXPAWoW3DSoiw9xnFjjzZxsSQyJgfQ9KxFCniKksSLCNoSrMYY9XwtfSdagFLdGPYVRkCGVcPDkdyvEJ",
  "key29": "3NqRLZYXkY7yX8MyAef5sBkQ31yYvDCFttFp9RgXY8MyGqSpHZKtVcqU8rj3paPmJoeeB2KZfyvCaCdW8w7FfKEd",
  "key30": "3qmRsS6Pb9S61522Xw9eiMsEbb2kcAovXqbJhrCv7TBkwqqPAedBWVQUnkUBe4RYtZ8AQ8vgdjxRngS1ragL6T8F",
  "key31": "2xHGirdj1VWciACN7LUfbMues7FYNece1KYU4Jx6waVpSaYhwp5PBotTnNvFLEpKcwtQnkWrT1bwfaqxsa9mWAeo",
  "key32": "4GQuTharYzqcHvpzRAdA66VYodk7dAxJ5mVgoLyP3F1KoTXUh6wL8VhQpNEZA149F5pqPZLp24k47wkxSTw4J84F",
  "key33": "3X2GiMyhqrXhWziGVeqiV1DL6VNnhJhG9Smr7dBqdJkV7sAujCBLSGi8n5BMkNeWcagYRAmyHs9Znc2YWsnoXnhx",
  "key34": "62p2Ecb1yWitdmVVjVTDGnRAUpab7SoRmMzZkYWqYb98DSsg2e8WfkAHr18r8tUXs1hEipHYagUg4E2dXfCZq2yt",
  "key35": "3EUNepa5CKas4VQmjiRr5tV9mpzpibdPXj9G4JX5BJosZ6KfesBRadNLHEmKmZTUMNtdMfW58eqcKRfBjWabdTBn",
  "key36": "8cZsnHVsoXn44zPDA8jQYajHQikb8mZxHw2XAnKeMdMGZBbkyNvsSeVZj3LiSboUvmLQont3dLxTT48AdEuXo8d",
  "key37": "5ecoBQMDmrLDLE7R5YWxKnV4UXSPAHWW2rnWDziPX3oP6m2Jn9DwW942oUbHeYXAF31YR2gQjdWzThCKpdXkX6xN",
  "key38": "4esTJ3azfV6jvFhQNLj7u5NLBdYzR7NZuzof2pWfFLWFxAaY9DViG5NuK3s5e4b2Qg4cb3EdiAMLuejDcG2YpFov",
  "key39": "2eFLhJd1qxQs7oUbvMX78z3wXUZT895LQ17R5WE4jRHwRVVkwjWYfscaF8RvSrUjLJdCds4PebDyw1dDcTqBVM7r",
  "key40": "2RpdhoPGUZNMpuQzhwsWmHFTx7f3MA6PR3sY32jvSQV5sM7mmet1DwxUFzMVuJXjdMv9NyDJngDX5Zxru2jV9XrU",
  "key41": "2sN7T26WDuUgCQtMaHmwuzUYKktGnjrg4thsYsx77tFrkXdzZGxWXjcmLqSX8KhPYSZoPFGZWHHRS4hm36QYrRSC",
  "key42": "5aQqRbmoswdxmyL2GsRd7NJ8jLrbTAE5iypkSY5D2gcSigLA2gHtA5J7RXsucKWiMaLUBiGkodYwT98W23aympu1",
  "key43": "2v8H9soJ5pQRpaRvBSkQJNKXV4SWKFJXv9wJco682PsRvyyrRRq7m2wGTJr1SrDb5mVTa5Ea5wjUrGUb72XWD2NB",
  "key44": "2Cgk4Zfu3aWjMSizH59KEVxZWoqy6RvegTGMXkrbUDQZYCBbm2QGntFJDt5AsfPf4B2XYHxigWATrG3nZ7hvbRs3",
  "key45": "25xkmbEBs6G5bVYXvL9aceCqz344Pzuv1UP8YUp6spqshFNKg5emdtBaKWh7qzngEKowhfugfJoXcr4VyMd3X9x9",
  "key46": "PhuFJZnz7P7KwQVCkTuZ2s48Cx5cEG3D1BkWYDjqoZjHgLNy8jFDux5cvVSSv59sbzHzQ9Nk1TnepHWhAVR4FFP",
  "key47": "2mChtqoqbwfoKnJRf9xjqSx1CjSonvYHgp9T7rMfUG695KN1nLchn2Qu3F23nkUAn5HAYnGARmC86nKpmLh8xMP9",
  "key48": "GmsrXKpPYMeZRBbEBm2KRvaEyYq3vyhKnDJqWWfTyRTQury61uWcZocXzqGguajzu5PbUaE3TYA2dLWvpjPhage"
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
