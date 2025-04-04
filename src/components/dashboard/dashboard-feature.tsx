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
    "3kUMAaDviR1C2UoX54ve1UyooUUAAWtcti2hHrwEDf7xo5FVJ79kbSKidxVtYTne99U4KnjrwRK74Z1DTsshPJNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQeUcTqYVoZtBonivRgFeaAypGJZgzzrDNMxEWhsPh6zPBCtaNkqenpvA1WPZzu3D6QSy4cuZhMpqdpHw5Hb7x1",
  "key1": "4j93nnRkid6oLG2bDpA1nwwyW1LhVBGZPas4bN9y5MeAzTBuhUYjsqcTZ7sEFU66GQrvALhf7Db6w1xhSFbupreU",
  "key2": "PyVZFFqmLTcP51Nz4giBnNWEFcSCX7EucvYYQxK86WPNN327X7P6d1vVJXSEf5ak8wrHDJXafktiXc8Vnq4iBHd",
  "key3": "gzU2Pgw2Ksi3RTpNz2nMkrCrYFi1GHddfEB34MyPa6W47dxLpQK89Us7BGePybDJTNs6qsMTanK2v3eTVbSxbFj",
  "key4": "2V9qx4XwgB7DL8VDoVivhGEhUzU2HDgDKHxnhAVhH43jFYBT183fpYtzNqGpDHZpxN6MU9mH9Jy5fQ12LhG53ZKz",
  "key5": "4kBGXaxTrivQVv4uXmcAi1UpFHJq6CDGpadYxfhjTPuLheXZmfPVooQftpzNUnGA2MUjHuXqPwnNKmusCDoaWBX",
  "key6": "55gqcmfV3BUVRN1b1EXdQj8bXB58GCuERwxigUXYLCH7uCkrcHznzN5kfYxwMjYpHavEVFQF8okjEdtzyTAcYMya",
  "key7": "5B2zb6MEpR5cCN9K9g4HAhYqd686E87Q5UdNaFCNgk3rs4oHcvp8gxYbWSAzut6TEtzA4vktmjfeZPLnKWN1sSx",
  "key8": "3outEYpUAWyfHQyTuVG9KiEVTop4uKauK9Jw96iwYojRmBWRWWginq3w7bZfEDXVg5WQL7LBz42WtCEamWtEqnQq",
  "key9": "cfd73HRCLuEWTzkvg8Ep32XB6NfA36mvZ5FYPgnxnPMHEp7g5n86zcAgBB6CQGqFpzb9EtMoizvjkPHBoxZe1rP",
  "key10": "2X2A8VdsaDiZSzzcFtEEYTKM3ME6gkJrtRwTXU8J5VW12otM7FNLEM2bzGbxCRMrJdf1pQMULuUKwXjjovQmtGCe",
  "key11": "9npdQ16rYkRLRVLwU4XdCAcvUtPuULBUGCwZzDZHisgVfcyLQbhnk4HQcdqbqfWPFePe8dQtZP7GB86YY3ihovn",
  "key12": "4qZAuiNmS3fBBXwAZGXPy6C5dXAGpFq79xZHeQsLpPn7UNfj1SHNbmZdo4AfnbbMomXTVzYEGd8pHpg6ejQppPw6",
  "key13": "DtNiLx5SeMXQBzDKQVKMKtpXFvNgm2wRovnpzMohG1DNFJVrCesMmzNcazJHvE7asdgzbkXzu1pr5fDn6eveiP3",
  "key14": "nScA5YvZB3iuvN5udLb3MMMHreHjyhGM92161Da1KtyDKTrK6CKApjMeESiULBqWu3oLVM2f9mcXZVZePnJzwTq",
  "key15": "47EKDpyMsVCk3uMr6dDanLEFXCqhfcuUGaxnQ5TbtmPWyxtUjhwKz5Gqm7SRuPbWnvzKPa6sfwNWq8t2kgkTNWfs",
  "key16": "5NEFnrtfxqDxTh5WAjVyi8dwu5axsH1gaqmeh1iwNkiB8oyyMwpnJ7H2QvRHPiXrdqmEsg4Axjc7BBpdHtHKgKBL",
  "key17": "4zTNP1mrqi2qyiwcvtJfik3pUttZVANgokCWpQXbc7GveYrosvVSk3y87awWqESpZCCu5YzUn5rhR8ygJYx63T3U",
  "key18": "PMSHaKRVYTpMPtQF4q91okSdaiyEMpchJ9opfKM1oQGT1LkxwbX9RJqtPi88cpmFhxpNdiXHh8xbQdoDiY7dAbW",
  "key19": "2bRKZeZqiWMgEJEh198HPDYsBrJQHkPDv7BjJJguvKgVVj6XPdeYBw1R9LqGm4Sykshpe7Uir3YAwULkrfDotqJn",
  "key20": "jxgXvX9DfPFq8vuwiirnzXMzYQ8nWh5x1cLLCAzVWRKhDCtJDG6PX1TDjdcsqCvcntbNDCpsim4msWTygkznHo9",
  "key21": "5FuZvrb9q2c3sFJZn7qzQkTv797EJ7qbLW1GMao9zEQqEvC4STCE3pWrYiTNQ1NDZqCx6zc5A8npe7qtuLnyE7h5",
  "key22": "5iEz6Rzer8ozQSwjMBPHh3wHgcpXPz9ZGb3EopKgxVdtMRjmiqMPkmgGL4bHDLH64hqyXZyPZhSJPTNCE44U4pzp",
  "key23": "3bKdNgQqUPSZeG4D5GcFuwVgBGgPbXXKbpPJxeGTYjbgbafZfSFiQitXPaCBZbixQetiDJdi7NYqTQPdwhkGexjV",
  "key24": "22xJ3mYRwN41iX7kCL1qESGoTEjecSknNPqzLhJRFZDMQbwbjkhCvPNdCjREzFj9mGyHDq7s5cACVbKaFXsoyh2Y",
  "key25": "U3FmNaYHMVSsp8dQHJYroaSdifnpdaLd1q4hagiWHwrfJPU6uAr7sMRWwLdi1hqKj25guNWAxJXhmh7FHmabdZR",
  "key26": "3sxmyXerAH5WGdxtTHbEx6R5un8Ho2QLUqajitErMmjMBbRa4vEorrxXwYfcPjTDRakUqcr7sgXWSPgEpGVttXRM",
  "key27": "FMC6kqWUiDh8m8HB4UfbKZLcNjVMutp12LsQRfkoVjDadNhEj1YDFKpBTqx5VZWp2HyRVpW8wnyuvPfsN6KAv4k",
  "key28": "4RGNCNY2Lg2HK7g9JnhgDz2TWcvxwKKdYS2eD8PEZGV3J6cbnuYdLzRh55GfqbeY8eoP6ArNdNBXNs3H7FGqWa3a",
  "key29": "61YMpBSEMMGnemDvXYNR49epJsPxsk3XCDxi2JHrrbqJFg3k2H7k5E5rKKi4TexccdpemApqH8YqgLraHSonkgVo",
  "key30": "3fvRzKGqyHwhZ3QU9axKb8pdy3c8qLbgaSbKLerxYNJjXDn5Wo2uDstnd8WE7XGpUD5mc6rUe9dqaghHcMSB4dQz",
  "key31": "2BRNMPA8TZyywunkkVjk9whq8HiraePAwZSmgFy22xsG8jTkKiou4btajX51YUmEh7PQPKBSAXt6Lno69uQ9r5r2"
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
