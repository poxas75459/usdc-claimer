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
    "4qVCpPZzi7tHa6R3g3ApaV1iMs4oAsVdz7J9Ychy2zitzM7CjTbfWPWrSUAJAwAL6FxUhAzFmF9S3TqrnzN3ouWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RuRHENpE1aLUBkSxj7e5d9U9HsQLtnzhTNS7imrMomriKNkw3mEPMY475pHotXdStDTpFz896jfvbSDbS5ayYo5",
  "key1": "4vCgNasXG35dd5FHW3oC8riaTdMmrJYRB5BCp9SrkDcpawxQTjDHhTtrWMDNjaP5ZPrDmF6b2vqojTDqQKPg7yVA",
  "key2": "4NzrBkviyFWJ6FG8ftg7k2GEEiBKsaNr6iVGSySgu2Vo2zPSX6ZFTp3wYdgDTbEZdNL4YfZs6qPNLVUK3DHx3k7n",
  "key3": "3G8Cv1mvwq2BnA1phwZdk6naHAsMubLoGEd7T7kdsge7n1xegoDCDgRuFsqc6L3sSpW55xKuZh8wcZvxEWV1q61t",
  "key4": "BRB3xAuxWUxcP4HyWdCEqGjvr9YULHxLVdrpUGrbSAZpTjJG9rShse7fMTUGrZLsGnpuC4Lruyzg59uYhVLYFAX",
  "key5": "5Byx2yB5KGt55AaHS11r5vNcQt6UBfLMjpqgXpCk1HgtmdvXuBTEY9VKrArAHVc7fETvynCiXMDFgNo8LhNXhrHi",
  "key6": "3aSHeAc2Fj9d9zyAjY5kYVU8xBmJQH5qiqdVW726r164MhKpM5AftT7Q7jG8MVShQiKwhGefmaWunp6ZbWtLycvG",
  "key7": "vtTTfbmQMWo2Ts6JTzA5urqypaKMB2vXtJGWcK5pdsR9YWY1zqrfc5TohhrWuUqhWgMM6tmrJbcC3BtreGKJo25",
  "key8": "62Bcsocw85xGX8DsHQKxtSDvbLDZhUj7ZpXzYSHZinuwJ457WUYYMurxagqx1e6nLoqsEXwANnA29KUefnGBGWC4",
  "key9": "5M3oYXGSYnYqVmembDwSk2vHjaAjRMBFjDbSHdRGcWm2FFuLXsVVsPHZ4dg7GTqAhnDuCfS8Cmao7RTpCCgmcyGy",
  "key10": "216tAegbrUe4Y4eB9MfSjdLWWTg57NArNwNEtbUMhhpcrNpHQ3kYn9LT2q29hFpTeXRoMTWzcpoNBfHa3QpWufJM",
  "key11": "FhLH49x714jYC3vruNuK8W4KgjYTF5hAQDmmLNGz2sS8pcyXX2aBY6B8ftSr6FYpTSFupZA1JMu4eFK6SMayxnV",
  "key12": "DmTwZawUBrsRCjx1guKznbewN9SniyN4ozFbmQUjDmtFCPtVXT9d3hn2vedZbBwjcTpaA7eVRvZG7UjYHHhYS7U",
  "key13": "3reNx1pjhnCK9kWm4nVbYStf55Wv34KLzT7tzsW7kEBFLGfYtdKqWLUpX5rYgtx1wVmuovhG6nCqWqE6Nt3cCrWq",
  "key14": "357iKP7VasLJLKe4tdjGKfyVp8qFTx74b8r6qzG966J8nHoAgEoS3R3EWZZ4E7JKcHkyyuRRBMbErWmoGPpq9UB4",
  "key15": "4EbeZ5PednMcHABxb5dkCPUk9mKfSwnrwxGGgEBGZJEeZpeYFh28gS5ZDoy2wSb8CV2pVaKgwzofpiRAqVut2Rpn",
  "key16": "9spuHG9Ha6VHU3KHbYFuA1WZ8Y9pzohyehogavqxo5ZuowdLcyDVcgY4wuhFBSFHRwuRsqGz2Ac4bu9d4KwwjBX",
  "key17": "4YxMgyiSmozgxRN3MX4fVcbUNysZQLumWCtKKzVk7U4EB5UuQk5FZjxeUUGH6jxJJQE2ibCi2w9mFasU1swxgKkz",
  "key18": "5rLAaRH16LZTFbK8Y1YCxt5NfVEaBsjvLsXRUcebUPBubeTTPqh9KQRvgw9WwYcPJfRyEWXinjK2tPa2cV7Ui8Vo",
  "key19": "2pRPTJJDZtmRhTmyEN2mvKmqMHiTu435qoAusd7Zvgu82NrqxqXQwcYs4RAcVDoidecA9YkrYr86DY9Zzk4zW8nV",
  "key20": "m5m3dGBHgqmYi3nGt5GcfXU7iz9rTjUxB9Be5fqzYzBqUyUojse3gtpBA2HHJcbf992Lff7a3S7aTyABSWjmtJk",
  "key21": "47bSePRnCZpUrHxq2Tz44wpGhuosZKmGeSffzYaU19fWqaf1qJVtH8AxrQig1yXiwPtSiBVME6KRFPkbnvCo7iHQ",
  "key22": "5WneU8YiugwjwUaA36BMuKbmCzj3mRP3Yn6dGJYLo4J9KWwt1fFjQ5yDXX6KtudeGf52WiF9Mk2rFAzwavhYCqrV",
  "key23": "2Z7WFdt1aZFEhxRKGmm9Hci6bZb5A2fwHVnqoy8SoiktTVAEXqYhoVoS2nsShGB7dnTE5aCFkuRjcHjVZL3U91VB",
  "key24": "2dE1pemmV1acPtURn2VmBmwo7dMXFLWmT77rrbEyNqZtuEKprMRJMxjvVshdEj7vii9ZusSknCf3FTvrJEkSn5K2",
  "key25": "28pSHym28wBHsFPmyCWc5amXQdeZwDCFKhBRiqx6Pdv92sh9EmBonX4PEqhyt5wHK8gsyXTvd38RGFiapKgrzxvr",
  "key26": "4XtUaWVvkt1beeb5v94cxBMQwtR5eFM94J3CVcJDhKW42JFqBwHyeqbxk9R2JJLvhEqdPsaGTWseUxs7DDTzzHSy",
  "key27": "653uwC2macMcfXrMghrLNLTq3RpxuQtGEv7XhjAKYqZ4kuyE5uMSbwS8f2cjFuPUVBVjSQXYEF3R3TeT5kgqzp5G",
  "key28": "2SpiJyftDqthmkqsXTBqSZAQ1v936aLb6eCNJQAYp4Hre8sX55tCCTr6B5JP7FUgJmjAgpjpRnxei9KdtuDEMrzz",
  "key29": "4mh57LcE7EMRLZ8SMtXatn2H3mP5Qd7DH48fp1veik8hHh37dMsYmBaRrWw25hzEYcJW17aK8YKv358vZVQ3SNPx",
  "key30": "4r5oFzRYR7KRFoYdfFHCi2AtyTRZEzkrW9MLpqR47SNwHv4HYq5g7Hmg5e34fMXjd8sxi74Yay9P2QpBtR3PtCz4",
  "key31": "5ZR12tP8aggZoz7Uwei5J2AY2RMcinjAW9rVEpn4ip8VEbrbhXMp37ZidhkPpVGoGbK1dzScebdYTAT4od2TKLS5",
  "key32": "2aSDHY55duRMTCRdx3ar5cEu9ZDatNKgj9QSo9twq9AKqqqvXCWjRkYPAMuEVyWbLnryVLK1J1p7Ppua51YmkoHx",
  "key33": "3zS2CmRSccSh71FTRgdA7MkL6TD3ZUeJKBRnhgC5xL6ALJmUwya9zU9C4AP38QybHEvk2diaXsaXjhi9pzywjxq6",
  "key34": "2uaw3Y2QSNaPLWSaUSw6qqW2QxRgxtrsphm218ZoudUSEsC4F6xJyj5XqS7qNHnDXM3Za39SYcBcGc9exYXbZsUZ",
  "key35": "E7yRuvPXNrGg1gHW6zCJ8NTYzMn12FAtBzgAZwABFn6qpr7QFvSV5gmysexxEJrBSskgrxYYQF1fXAJio1WnSwJ",
  "key36": "KJdyrdNpwJCXj9fGDJrSv8zYfBbL2RHbWwGsrtpGkBprh2NDK2Ac7AAMUx5QYFhr6zShfhLSHqUQ1MfgumwKxjr",
  "key37": "Mh7aV1mNKQ2dC16i9DagdtPdVpt5GYgcJtjfKDoxS9UrRdBjpXMjDRHu2sPdUCEBAR2KgxptMWWxRGGcPcRgRju",
  "key38": "37pHbzsHFe8sCwcCsNJ5Pkc8R4kiLyTMXkNXxPV6ZtxLq6gc67toQFtzcoxfqTDHPcWVXHzaeY6rQ88JmQZbuRB8",
  "key39": "4bLDbtvkkqFriuGX5fNJFG6Nx6scvsQrzdbBrWBwbb7Kxva1Rt7Mv1RtRniS2uUuX7kAs3j8PvHf4zashst9eERh",
  "key40": "5x8kuMRJp9y26hiitPRKecLhNXTF3aZXv7DSVTu82zB95u8gFnNf8dZBJdCAy2XrpHzZvwybNxcmoRSbGrmJpCKc",
  "key41": "33mMG6ad2yweBoWgMnN4C8UNy882zjFSowP9LE7tNQdCE4Q18ANg3vULvPpmNDeRMkeRHbBeQCySVu6gp1qwJTUA",
  "key42": "4suLVsWH4LZkxc9s1gkUE2B5LNGxwyQcHQxZRssf5R3gcoLZeybmUi1MLUNzyCM9KZKc9372eACKaNa8PQe8bDvi",
  "key43": "3h5f3puV4fEnitPTRHAyxeTNyTFVNfjwWpN8s5nFMq5sP1UcvajRBeMXHpf3eTj7xYUNc2rcsvCHSMs2aSFjFBJ8",
  "key44": "4rtZtGWEjekEVFEpEMePcKJyjDrUC1ot3ifTyxruAUNP8N5bpkhNgcqobQHhsFrf6JTuMYjejnh1T5Vd2oXkwm2H",
  "key45": "4o7q1wQWpCSSsMpg6mGYnC7r366HaMYXihEWuSPjGgmMsq9d3u14hWfTHNZvQ2EiL9i8cu5zFNEwCt9qE1JdBbv6",
  "key46": "5xE5jVkJTxPhB5PA1sFwER2QtfnK5FSF684EFn9opkcFZnUi7pEFDsqSmQ3ocRXetBwUdR47t6YvccjyAZEbpQ4Z"
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
