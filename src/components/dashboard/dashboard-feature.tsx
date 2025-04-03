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
    "L3X2Yxj4Pe4diCatM1eNFXAF1Qzmtzobix2BtDSfsdGWTKy641Srss8iewAzjBSxYR3HtcWycuY4qz5iBzzim76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wWeTpdafY15aaJiPxy73iZ39hyXHSg7C7Y35NRMZQK3mWFMLEpsfqKhdnaZAWjqe6DazuuWmJFE6AjQAJ6HzYpt",
  "key1": "2Y76hB6RYi7WJkRJMcvddaa876YNjYHXE41uPkiBzkN7KaP7avyMnFVzb1hb4YC2sQ3yo7EFRNg8CEcVDHEmAZBW",
  "key2": "5QjPbCBJCdTe9VFa4mDsm7y725xvcwdNX8MqLB7ZD1HyEaPiRTXLv3vqYXTChxKSX9g1AfCs9mCqafgJAsBj6QQ8",
  "key3": "4d2zAkG9h89pcxh56GpTZXVKACftCBcJPJmnjUPnknPvCZYD4F4ZufGxVZJMhfiyhaHGNyYacN63QVxfA7cjmhnE",
  "key4": "5667yCFLc2pakGi5VDBtYvwWDrTeBHCjSdyHBQg2irfypzpu9ZgnoYg2VTih8eJE6rpg76FJqgbmawxKYDk6nPRV",
  "key5": "3rvea7C52UNLeg7gTgaatRY3pt4Mgukd3XVKvxiNPRLwEUexjkMwdnyX2cMtLj5gfuagUfU8xwVpLmHuFPYD9JMd",
  "key6": "4HudUxLMUBXCXEtzo3Cxegs4obrS1kocYFrj9u53H4GvUV8uDAnKqZRRnSxe7DvwEa7dmbeLj5x9z4t2hwpvmY9J",
  "key7": "fq8TbWNVNREjRQ5e55U7hNNAtSdxfPrsDPhyiXthW6JLHmfsXdH1ZXycypsCZrZEJnKxQKS2qgYXno2X1PuetNr",
  "key8": "3512NKDvrmcbkGctVDUWX2dUVncbHuazP9rfh9TvYxfknXavTTNfupQpPxZWNQiV6mSJAp5Umpet1gPEVLL9zME6",
  "key9": "3ZGp6JyBqBjXVH173697ZNqqggCSHTpySeBuZADgMevExSVu4aKyXcKMugvuMEy5pGNrKD78sqrxPJZPGK7NcztZ",
  "key10": "3BWtUiMubr7vrJEdWSN7aFkyDKSX5jizhsUBsptVxAKMrMb37d1nJ2LWPf2vuT3v7ZYRaMdyZNYhbt7qrTWenALu",
  "key11": "1vpXsw2hojTAEUcrErbfQYFnJTSqFbLaxepm5fDWPgrf2q3Adzh6o1c6J4j9qBFGpRP65BYV8eHJ9v9VUfMW1BX",
  "key12": "4MgEPiFk4hZ4hoERcXjaECqSUZLmxqWqMhF3hrgJ8Lrjzy9bp2epQy7J6wsfVTLnWevNzFrZUC19EQA39qneKCsv",
  "key13": "VEV8hJUSejPPyurpBAtSLZmcU32gbzXHBE2orDwThyNNPu8ZkaiPN2hh5XJ3ZChMkmR4kCxQzdNNu1znRjZtBx5",
  "key14": "5Mb1xyqGh9anZxoKQis5Vp93q4w7pi59MHAMwD2LPBPhr94S1AfPmgtfq6aWeiWGbpfLezze5iCsYcGqHwsZdcHC",
  "key15": "3sY4xhheJWxfGprTUe9p5r3Az3r8V56TqV82gipMifmf1Dz7zYvrsu8SFo4CK2XDhbY2ijPAoKHi4Lh1gGj6PqaV",
  "key16": "2w2DsFpVTkJPrXQYnMByyKYjbjncVLb8rJG66i8pQZC3vzmWFGQ4Mjdqq4auCRVau6JSLDbCBeRh28fMKMYSFsNF",
  "key17": "3EZzCfkEvTdzL6cbjPYJ4YgZRmDfsdvervTDtGdsWH7BxbEm8vneNH2x4DXWxmXWQiFfEQZkUeGFEBUwnA7LR8BF",
  "key18": "62yz4tKfutZwNu7UKprKZ6feZKLzAKrYyB8HCCLCHfQimbkbGEjRNyM2QR3JpU1dfGPCbptroQxsND7vMAeKxFyF",
  "key19": "5rbN21Nm7k6RpApuFVumEULFz9pz4HmsVA5Bv8Fcux3VM6Hcy7g7ds4DXTnVpRgqgG8En7GhVLwQ6kJHzGDGKw89",
  "key20": "5gm2XQBT7eH2eMfX9JwxJuFa8YEPVWTzPKRhbifsMacaPt6KtBwKgU61K39BK9FWjgPYrrZM2aFTLqQQdGVymZMk",
  "key21": "RAbREfWWByeg3NiNnbizxrB7gbr41FeZWdVRwWv8fvCEnkMnJSxaGGQST2QYK4amHrB7Kse2Ugv5rSKCq4CvWu8",
  "key22": "4qbF6sGcH5aLZap8CR9LJeRrAYM98zbbFu2aNowv2EaSrjPMkA7u8HbZUqXcAzpTfxtWhkgFmuGPqtt2iZC7ZfDC",
  "key23": "2u81HarhbN9chWPfNT6rqwjrJCsZJMJYKDMZsD1SzW46indm6skHzBreUpCGPrVmHyPE77ad3BNS6YFwtsQ9DVMh",
  "key24": "5pHKWWyLqSARGVmQZjjZE5T16ooBeJabDEtFZoYE67sD88SJFwrTrH4yM2PnAM6kXU5SF1wU55p9aTVgZeJZQwv6",
  "key25": "4HeRp4ZWWUdMz3ZUYknC5w8u1nyUdAKiuVFyH55mDiF4fXtGs9JQwSnMT9WSyoFNqpBdafy7ccaM2jyMchTDPGTT",
  "key26": "3rtEAdKR5SM8wujTCRFKg8AcG5pcPbxykE4Hqj1iKe8YSkiWsHWwaQ2q8TBvemvqmsshMvhmjNVcd9Lh48kFHKnp",
  "key27": "5MWVaqo8KBFzwB3P4YV8p7m9tonTC4ombzifdjSV94hwGfUVCFbAEhT73VQXxZw5ArAVVkmSbR8nNxRV9j3MZm2e",
  "key28": "2r2FMZPLDoBurumoLSUBQ3XF5QcxCPufdyEfftJE1ytZL1wcDnNZdv4qApBaRyZEYxqSYXseEKJo47zQTX8JMFJD",
  "key29": "2j5DGvX9WSm9G9zVBZ4kEcHhWhfHumNUXe71d1RjeFvr4STVfQvqUsmw8HKmpiYx8Me4TfEvC12hwBhJqwoZB5aG",
  "key30": "3np3wSnBAmR8oe1QTnG7DsvbZVFVLtU9ekhKdyi2pn4Fsn3nz5BphVEVT8ezNYXwZYowQNj8kWf1zzcZMLFNXLq1",
  "key31": "3iN3bPHeBhYrKmtsRrjx9o76iDMGGAaL1QKTBCuGaVAtpviHSDFXk1K7iHrqGwHuY8pJiTgeb2wnqQThN5HkS7gD",
  "key32": "8ELLjPFKozFHcKxGpz7eqkAvJEr9jTMH4TSWt1VYZVaxVdvtdzQZoWiyJsfT99Sh8MpKJ1cJu126ahF2ACN6fgE",
  "key33": "4EN83TnVnZ88qrn1YikKZpS3rJPcEHC9S1pKcd7mWt3NzDzz6cpn1ZNgztEFf2n3JqXqoGx2LYe8gKyjPfjWzAhU",
  "key34": "3571BpwbxBuYoSYCJbomuv7UX3SWpeFvgHj5WAbLbHoSgQaAvusqo4uYGrcZNLNH1JsHLbCMdxpBsXzvqiFyiktA"
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
