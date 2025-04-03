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
    "QGN75JkPJuVHEyjdGfTczqgXBdQrejLpH3PnXDAcSwBXWEQJL78v1zkBbyj9AJGzoTdZkuEjbWbYXeQ5MQctujC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38muAJBgoGFQpkHVZM8Mn9XkNhzUmJv8DAgT4G3QYrqmhWP8ntKg5u66xsu5e9CDN9avT5MybYrccVo5sFpvPBfJ",
  "key1": "42oVizzyGTcdbpy2ANEaTZDnMikNLbpmuD82t4VS9pKP58gpY9RMQmB9J8hGeRqy1PzbqwG9fVysxyFzAVyF2qWb",
  "key2": "2aTemFPtVmkr317B31XiitnndwKHQEAWRV8Dybkpu7bLgdZ286k7byimdjWnNbgk6s7vXuGM8h1L2r2ZPHMqmXnJ",
  "key3": "41rhnXYVLthJCLcvwcW4pqL6rp3PnGX4pEdxhybDksHBkVRJrtmfUEAvNbsg49yCMcx6KYPER6GT5m7f3b37BJp2",
  "key4": "3rEymZLs4c83mBwQQuXzsqi4ow5GZoerCjXJEgZdETL8eBpta3SFTHr8uWDMJoePD6YtcSFCzmskfkMpU5LtFM1s",
  "key5": "29jav2z9kBp4CEnw5xkfdBY8B4SVJLuvjXXk4NEgbgtw4DhquxvzEHpoZ4hso83Dio9Lm8MP8SuLn4ckGEC4XMiY",
  "key6": "D3jPJRbWaNw7dru1b4yZr6yyEiDVm4MhxfgiVQzf5N8Yy5aGYXWJgaQRw6zN1pkUXTe2vpAjRbWLKceqGA4K1rH",
  "key7": "4uch9wXbSygFQYxUUhCed9Yey5A8w1JJqbBcEKFF8cTo8ZJ8n7pS7SCPBtkhsekXPEbBbdKwp1wRnxFDRcFzYDGu",
  "key8": "vffWB4kAJDhLwZvJfV6nDWoJ6qyXtLZMi5p9qsMY2yDegrcSoinedgvqoS9b7iDrt87bfD423HthaiFQPriBzsT",
  "key9": "5JQGJujZdpzAa8KdRafQQVq8QhoDuMgWYzdJMegVmY5EbMLzc4dg8TeyqVK9j7YGhc7tifgpFuAL6gjm6Bba5sFg",
  "key10": "34q6P95RJ6JDYWf1r4DLRypttR7bfXBBq5JY3iMHpuaHQUGp7JwjZGDCNTLfzCfysqGjB6bg85EL59rAm8xf7q54",
  "key11": "54fEN7nkAPvC7z8Un8mzWUiQA93mLzKEJHdDt3b6zeayDYexQ2DLbhhh4jb2jzZjbu6hgpnJuuUSdtXMbz5376d4",
  "key12": "5icYR7pUzw31BEjoonj1YCvMscamEEJnJfW1yHE2qxfLQ71HAahuuARo5UVjeAaWdipg8UFvfFr34EnqdMy1enLh",
  "key13": "a6b7hBBnkrgJBYgupp7hXh26TTzpbZ2GaC5MQ4xN8k5QKFSxyYoFwCrehG2ZehDKXDPMCnPQ5BBBxZye5dmEzY1",
  "key14": "3vRTxVobmXupHfy4VEQQsjeQqyBvW4vKcQC8YrSDLWoGqouce7GMdfyncyFF54YAjn6anWZs14uTwFTfnRsaEs8g",
  "key15": "DneSdytRUjKXrz5m5p4EJvzreYuVuXUhidpUZ45DSzLjvUy3Kqw62pt3ieSX4RuViCGpJXDP98uYfD2BP5tkGoW",
  "key16": "rzTHd4aP7bkFFBs72ZCUpzBCjsQd4NtdSNntPDiyAvexStGQWAeYVsGkeSFGFrKVHmdpiFoi6JxTc9Ug2pb4NX3",
  "key17": "2391NBoQ8ftW41MGewRsU5wczEK17CA5tizd4skKWcc5J3uPgtRovQMvtir9oDyru9N9mqQqeBwkc47VTSFyj7Eq",
  "key18": "Ho6PEiJ7BECsvuboPMNeuEUoGXQvuMtFpqeSuinz38wzY8NuXwxkc4fapQcic124RCeMKtK3RaWRz3RKEQ3w8pm",
  "key19": "2E9oMjWbnVECFJh5quXxggPPHwyWdQK5QHk6wVPR2J9zyRUrXDXuGb96Eqo7kNxrpWbPEy4XhtZLJNPGXUQrwGK5",
  "key20": "aZaRNMbcS9Mk5P4xu4Dvk5FoJ1zA2Hz2WT6wcLJNdHqApcdiafqVcxMc6TgJzDcysjfyzm1MKASuRmuEXP91StC",
  "key21": "49sqXTY8EqqmhbB4DUeviwRGjSdndz3ooMHdgNHsXky56GH7nk6y3S75NJ6mYNkL9Sj2duDRvrnTZBUDi27MuwRB",
  "key22": "3brhJGD6uWPoQKNwZGgbs4RhaYuedESQRjgGwqe8dvQeJSBeFFbSLKYiwS39agpeMUSkCjU1jyDXAwKuc2vzBExJ",
  "key23": "DgM8EBWqqCkNSAfEbZkf67Ba1Gr4yUX3cwdUnenxfcYtrPUs1ZdUW2mhK2eAgtDSULUGga3NFFSzhqdK33UYqhH",
  "key24": "5Cz3cSoAsbdZWgC9JECeB7bUA6UEa3CMVWNjDKakbwyDSL6ezcemjRSgmGb98Ydt2UbLDVZXGW55EbCbak3r5Umn",
  "key25": "dUvFFuyCKUeuN28b7M9dH4AtpRrtZKR3DBfdXjFXTCWy6Jzp5dgs5gwjX5YsrAe9iSW89sbKaeamLUxfqd9dy2w",
  "key26": "3nKCUX7XwjT66psb86MkUTTGKy5nt5cNpcdKf15VpM6uR7Ahb7sVXDKV6XUSot8benZjrEzTkS8yEKPiBm9KHT7u",
  "key27": "4d36mcYr8E7qUcFtMzP5HAGZAiPiDNfEzjQqaJejcSm1aV4Ms2uDNuWBatjCjW1qTAaQCiWSzCkgCTpk6SPZZdzH",
  "key28": "4UZZXSWjn1cRoDC3SSHwvNkzov53FyRdNwwSv2bd4Z1Eg4aXwqCo5dmRmHLeKFyz1bqjPDEzRUTjf6MLj4wmNp1Z",
  "key29": "2FCTp3s6vXcfkyRN9GsZtsnhkZB3s3AKyLNdnH2EYT4RdYKu4d1WB9LVZXjeRw4YWR9SwaFEBM65rP18DLZSV7UJ",
  "key30": "2WRdtgKSMMSeVMRZ3Uh7r7SVUHYLDTdcELJESTgnGcpmkbA527vm3bUMBTJCWBsiBkxSNABRUjQVkBPHbmvBHixK",
  "key31": "2eAAU3FEHBCwQS9Vv9DjgD31UM3Y6vZczTBQHmbhrfg4XgNXUs8F3as4uxDPAEgz7gPfRzs1Ht6W7MZ2EyfvnhXX",
  "key32": "5Qh4FxhTsRRCvJyx6qyrWjLRFvJdJjFWtUpbCa5ytMPr15QBVMe416XvubETSWkj5g86qr2aQPsVEp9q1ujY3f2c"
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
