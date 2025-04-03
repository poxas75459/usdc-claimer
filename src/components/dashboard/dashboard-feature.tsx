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
    "NEUz3RjyV4mXVmtdETgtnDsg7N6KAfxBK56w4DRuhQA7ZfKg21ckdSCGLV8YPfkdQmBm4r4gpPPrzEUN4UNfpD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LgmeB2t8hCMF13ajPPhnZ7bTy5RnmPeyLTAYzkYZzfrUCDpq2NQ6QPNQff1rn3p6EQ1uAzMNKXfR4ZhPexZDaRK",
  "key1": "NzgtVxfKPneCE22KiFxTKWDpi1Rva4kYW5ZVYpP8ABc1FRCdntYVK7xfEXFb3re4Nu7JcBk1fXBjz8TA74cvPEe",
  "key2": "2KqGydR4X2WcFnwHQkLoY7kf35fXWUEgf3UeSsVG5tWAjRK3MNEQF9sfcCU8S9m2qXrn28Xmrpkwth55fo3i13Ez",
  "key3": "3Np2VKX4k49iYpqCD9aZRP7mBgYrinbimXHEvCPZ2L8ehFie69HSS83yYzRzPRSUmGWcN16iX9hG7RsV74iyRjvQ",
  "key4": "mD2WBPXBJFaspgDsPsADcoFXMLSnp6Uvcf7KnBRMje85Siy3EEk8Jvm58GZQCY72YsSreQioenbBPePsb7UcBWw",
  "key5": "37Jhbj6p76xpHLPmXLtMSHSN2MngVRPmsWEXxZHnARtzTc5QTYSitQwVukjQemf54sJqhDjJPznnwGDgHjCeEkkE",
  "key6": "7XcxBrzsFfhCicRnWkrSVMEgTfeGCsdwnEvKAuBXzteePi5oyLpCy2TSNZbTQKiP2xTM5CiQGkwBvhzViYkaTaB",
  "key7": "2KQ1aGX4MT7ePPeMm5TfH8NKyfT4hCHyWBmD3a3v1mDrqb9a2svb9met1u2uQqi6XjVsrPoKPsZ5V51mQ5gAyyWB",
  "key8": "CY73PcN8A9UGhz6KxVhEXUnWuWcWBSiw8R1NWctLyySSUQrH4wZ7FCqLgipa5h5ygaPtkvqyGRQ3Hdspm9pZA5b",
  "key9": "2qoafkmHy5LgXHdVgKYHubx3qW448dEvz7xHqEKP5PgHmuATJFph511zuTap9SokkeCM9J4GCQQC2mt9ahskodxU",
  "key10": "5x5ugJapQU6LAV1Ya8jECXJP9toRVs4qaAMKNZ8SMPVCyAtMXVWDKFMgzewSPnAJ5m7vSJMyjn8WvhS4ReNvNYmX",
  "key11": "2UGDv5pBSMHDdVpB8Z8czx3y4cdWzd8yi6QXBrEfaxMwg1w4dEHpTr1QjpLAC7hopyvspqYsQyteyM1Ajmgn8aQg",
  "key12": "ABAgTL7FD59ZZiNck2VgmWUBxqxGFmggu3jT3GqWFdTk57o7j6Qt8CNE3XDStgw8ndqdEMMXCHivC9Xf25AogHy",
  "key13": "4F7RMrfxf62paHqchZWVPb7tCqEpF6Jkh2qHkJd2ekB7adMdWVqdjCrT6m5BT6Rrc5wXGkvxJYzWj3y2R5CAS2ia",
  "key14": "3ySpxh55VSg3L5NHgk8B5ubYhyfspsyhUgf6j3ydnFHBxhSgbbuikP8gHpJCtEWVxiR5JvA4zPTkQc4sBewdUqmm",
  "key15": "324AfG7Jbd4YRrqvQmYmVm4zLHP3hUdEJxBH1CC5y3azvdA1G663dufbq1SN1ZPQdc2suifeMU4n5K2kmkZy7an3",
  "key16": "2YGpfCXYy7fgXYAhP1WVUfGYkMJTHwkdKTAffkLSD15CNPnPjQ4KDw6tCd7mR85H93uSsHUBuNT5jMn1aFNeuQfh",
  "key17": "3Tv8uREAjdtzU2ywzFGTAxXbAJnV2TnBCz95v79oM1Fca5uRbDYLkaMhwPKnPJKr3E8CYakBdpTtVh9G2fQR545o",
  "key18": "3jTLkXAcp33KRgA3qPfgFbMnHLQGCxEzCsViAKwwMhRNhZBDAkW6m97m5xz9FL2EYUbymXFYfG4qhG6D4cocanDu",
  "key19": "4btC4jMcca5zgTNYpGPktfyY1PvEhymZoK9pyb8znayKCnVRYuKUH3FPYUzUnDSx52GDC39mpywcHTKR9C5V9ZVh",
  "key20": "2ot2WU1vwXv6a5X3oepvMxWmoymPGjPJsthJ6DcLfbmQGyGZJxPMmFodmPuDVQpXJfVCZAVqGrgvd3Pi1nd57HXW",
  "key21": "3BJLM7RqpiC3zth7bfQ3ZbJWNZK83H8bPd2GNot5X8duxN6DTJ3ZTakTQzXCZ7Zw93ETRGXHqx8WvnMeMSJSHseE",
  "key22": "MwpbxCxiLKCb5M1qeg23yprcDcHXGX4VjxDuZqCKumCMeLAnMg1JtyRxyNCHCpD13QWzSB4ZU7wZnkKbmsfMfjU",
  "key23": "2rjejJCKFQUKFF9aBoi9Rdtyc8Gtv9HLnmnEYq1UaAhCgPUTbibGKSRRM9eCP9KHMZZp5RWC828nGeYtQwh1X4Zd",
  "key24": "4Ed551uxRJt9exZ4hNgXnhyi4CMdZu15fso22BrUccrQFAYpL5SamERrxZByz8NxrPPJP5JWxYgp1dV6NfeaaXTf",
  "key25": "hbpAXRzuf9zZFkwMx3cEf9C5juJsCw5vSKhZnEAE4tXm49N9UwKcCQTdVYKjzhErfet9Sc1GUjQYynVHjuLkabF",
  "key26": "26VD34yp6ZkEePQH5bEmd6Y8vLHB3RLCKt3sbHjmKjxRt8eJQg5VDJsko3HSuRR6BfFoXW2E6gG8zatgCTq4JmPS"
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
