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
    "5msSks7VfzWsDGX1eXtPXva7cw2yjHE5fN3oWtUekLiMrZPZc3Ky5YkWnXiQVGA6FyewBuss8qCkrigQFQKcL6eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPSnjkTuh4x6ehndoT2kuLNqm2KMnn74F2ENRUwdiy2q3zRxLG4CN864PU5V3MP5MDHp8NarExq8DEY4zDS5LD5",
  "key1": "26mPDpxTp2Qgqs7fmDAH4esigELLhqau8NiGhNDS2SWUdvfCrEsSRfkH54i9R35zkJCMFqQYEo3iXCrijk7XMviR",
  "key2": "2QR7Vx3KQFC628UV55mGsCikKAn5ptS5C95d4p2wgCx8VwyU4jxxFJzfQb3yoMKmcg81UJ1oeBpRG6KZ6ugWpuDp",
  "key3": "5wqrXQGLBCxghMqdvKJ3jrVtQXjgDGbvdYi3ymi57HHhc55cbKzFTph4SBE8NRyVmNg94mKkVPY6niDLjDprkhmU",
  "key4": "2UErk2XhsbunAqvWw9ZcwkZ2rsbm7DGA9cGbhcpctcGeT2DanLzJZHq9truGFmypStkun9oDFYAMsahF2cSHFMXN",
  "key5": "4tKnTeV2yLwWPSxXo1E1Cv5vdQNxtmWNxJ7cnHKhc6k5NJRM6mQaxycdbmAd3WC9zUESJcVrLV34cRN6rB17BqTk",
  "key6": "2U49q2tN1Z6raR7gi4BSP5P6nqNJbSMSCSksLe3aBJhMxE1sN77kTmfFvX5fwyJkW6eBoXARfCXn6gUmJb65p2hm",
  "key7": "4orzWUW7nL3MrD2qkNqwAUd3fRMcgLGAttnh5bVUjz5v8YsUp7sjvU4fkiDYAN3BMnPGJPep4zrd8MsxDBKQTfNh",
  "key8": "4TWfDdpvCQBdXRSv2oz4PQb39t1PAKpcPZsTToaL9xLMYu3FU2x6RPHguwD44ujgh9HgHw96jGFeVi4wGUEpf7WR",
  "key9": "2E4Ag8a5HNYHY1wDvzPcsbfqfA96YXtJ7kV5Z7MUcpRQCcV7pZLyALs6qXjo7h4s47J1pAqVmw8T1ob9TZW8ZsxX",
  "key10": "3m5GcK9MZ4BrFjyr9WVrzMCDwgDkDGvWUkp39VHpUzRVfViQbA1MyHGtdyWGx9Mrgo9JiRa25cSfJY7721jZcDZs",
  "key11": "2VEpHxk2FNsU75pSNuxLVXMUJcL4TGwAZ5fRJJpqsa3qPQM9e9zGg6WddDZQ3kTiDY5suWNxKeD14ZP4PPRCjRN6",
  "key12": "3yDZvtp27rQJk1P4L321qYnp3bNsGBXfQVPcntzhDUTc2q8RGGGJ3JfQPuiLqE8hxsTUfp8y9mohrU79qjrkuKxt",
  "key13": "2uZsxFKYvaFa82qBsE7k9EcC2ha8pRqRsvhqJ1fnNdJSM2ayJHAdHHJhjozXCztDiPzPEEtCt254FZyXmoeLciPy",
  "key14": "24Rr3M3Bk3v946ykv822BQMawxoduNZQs24cMA8MbCMBrxUBcaysdCFpKy4gNEvrnTfovC84ps1C7Njp7Zs1df2w",
  "key15": "ZL6EYeVufvjqc6yJ54Q9bK1XLu8JwccAb2LkGDfm3BMopTo9ou7Rzd3TvHCK48cQv7W1JNqobJaismiM3tSEUaB",
  "key16": "HPQofVQvrVA9BGj6Ad7aYzFd1KiYVZbXnYenwU5QNqE7pAZUQL49x7rf8rg3ecFksCyRBM9wf9nP57TLCY16ZrR",
  "key17": "2KJ68Q9GCtQMHBhyQBBhJb7zxMFY2HthZgJbZot71pRcznbmSLbaD2do2y1W4wtojjaAbJMFE8ETxZ4mQbPi76fP",
  "key18": "39orw4EWyZqeDCUKPP1VFWVu9fhUFoU26E8EhqkR6GkXZGYrnKLmpfaz9hSYBZjMUVda9fgVNPfWGXf1vF55DWra",
  "key19": "4sK41WytRQVQwEQrrqwCq7GoyMNM6kyzxaUsnz9Gee3zYCrZXvpi4v8gy3hWhG753XD8a6PCu2qcXpHsqnjQTwbq",
  "key20": "2osSJe7odNvvaRGccPfSD3jhwTPUhkzvry3sJYhN6LVkUTgcXt5Sb3py1rEGi7eQZRxuX1Z8BDYM1aUshyJTDnRW",
  "key21": "57MFc3rVd63wgEe9FZAZJkw8NaDCRSQiqrXmzjp91jcuHBZ5ejgoRd4tLFhB9LUnoW7R2369sJVoitoByxkt4ZcP",
  "key22": "SwSiNp9AKxBejiEuuutzQXVfHcE9nhnFYDfhBgT1DpDm6Qh1TReSvRQ8udM4w8bW7ECySCJ4Wd7JF2rwwBMMLnf",
  "key23": "LadX1RgLoGUz9CmociVrXu4o9EcdfE9MSkd5nSBbtRSCL6jAwnPWeqvXknf3dKVfHSCSxQTgg9r8MqyKRZxVQZP",
  "key24": "6FUkhgBRWcDsTRxZpmtvmM4db4apAqeAk8bgLyCbJuuyHXkx854Lyxhtr8io8WjeaFvcrVvddYcHV9YrQ96uQxC",
  "key25": "3TwhV9rzuJNhvuVAXE6HtEAGApBBAgLCFE2wDyeutGH26No2Se98dvN3UvZtg34Sp5NFbzuqjwa6XBVb4HypWSaK",
  "key26": "A6SjEKBkEAjsGj8VT9PxBjW2Eiu2Qt8ntEtFMxEo6MfTKSq4bWssJzN6wNSL77sbsuQSYRXVKVoLa54e5pPKThq",
  "key27": "4YuPdo2WQPNSUauD85RiWdZw695fAsgEDC3p5vgXDhpdEvLHtJdMHhPEY97ydcyCHiAqtJAKfHnGP6JHKyCX3WYP",
  "key28": "4PWYiuw18UHqdjaotcbEXaPsu76hBkYnHo27gXGrpdvLJDCK1wsM1gUtFDJFbMQdkh7HTWh2Vd4mF91eo8t1HmXw",
  "key29": "22TPkG2TySx26jQcQTjmTnSz3WSfBgHYvo2WyeMhyiPdA8QiQsdURnCdyzrK4X1ZNbCXVUuEvqW7VcqbqM4crZTr",
  "key30": "5gbxGFLiWQRNo4E5Ms3F6iDpKma2XofWHQTHsL1LA3njMGLp67TZGHbpEY1tQy7M5MCAXs5a3raoRBMnd5dRkHP2",
  "key31": "2duL1hLkk6wBuBBnKagGfJBR58vASCJmgikKnSbZuWg4RiwWpuKm3YtJ5DQoq5Z45QBk5LUhqHbW4bkcZFxGKCDf",
  "key32": "3yxa9RrCszy6ZiPaWyvdJkKj5ejVjShvPrktjYZR5sELfXLddinaiBSotBkGAzTM8MF6vUbtDb6jfFcp5AuR7DYb",
  "key33": "rAhnSpkE4G2wyg8YxFkUZVZi415ZhQJdhCzn8WwagZToBs2jjykSx9oYawHQeEw13nvcVeDdbtinvcqhPQzSZkc",
  "key34": "3UxnfGLwyZWCx6ykAXGEtkWkq1rE3BM5DvpgfJyvQAXB1enumrrnHpny3teqBcMiXyek1LnqLz1PRBAKfHtTTg67",
  "key35": "2wbEHT9SNxT6hXLjrDWgwb7foCEBKa89Ayw75cLpoqVY8mX7ZAeMRdsoP38pFPtteYUpDnySviiiwfwGVfjz17ni",
  "key36": "4B9hRpbc5F6VdKfuAMGA3eRpHZZLrpVZDygvLsoNxcfSasvg38CAfTsb8dwsodhHLtprxcjxPwgjVkmGVZfVZbJp",
  "key37": "4f8ufiyrUs1K6LXz7SMzMhKnKNtXBu8Y5PaQjE4TBuTh8RR42B5iSyfNP3jzKof9fBKDHf76hZLSe9QtbGN5rW6C",
  "key38": "2A95gGLbm2FGFYPFf6DBPsjqMVfZm4acJaW7jR8Fzp2Jb72ngfvkc9FTaAkt8EPhJ91tPFvhJXuquz6ycrcvfHSo",
  "key39": "3Zr14rDMNy8EfWRTGhNsqmQiQXbkfu8UUt3r9MfJiwRwbkDCWJ5RQmn2h4dSwbVPTWuYBko1sgUZyP9RozaaCduD",
  "key40": "fTUY8aBD6inLenpzcbnSxtse1CyH8uAYXzBzMaJCvWaZTEYTm6VMxwFAUQ8BgADUkFwNv5Mv1hER8XsoVxRGUBC",
  "key41": "ucXvzo7BBxDxUawPAAgNpd5kZyb3TNobMYcvZxHKjC3mCobtq5TGtcsFFyV7hsSnvRKdVkoSDTio8EzytndxHB4",
  "key42": "4RQDzvMBmkyywWUCafSvUjHGWmYP6qUb1s7VCV7CWenJRxta7jumuKTuoen6sbjAjgLigrciU2z8qsSMrUSmkWo8",
  "key43": "27S4SAbbhFzVAZcEUyxHKcHokEpKpQLyAM5GhacNwS2MiDJByZWT8LhkoB8LurxyEtiBxqPjpCq1a1dmLmNUtk4c",
  "key44": "21xD8c83FBDt8QeWz6efPRDbn8nRQUYBxKsbDybFDwduPYUCkUBZdicazehozacH9SyLaC6cosYuA9eLUhk1mnzD"
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
