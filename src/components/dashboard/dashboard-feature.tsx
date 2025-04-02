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
    "4CM1AFC6kcsZToAg4JmfScDVp3Bw7ZY1ytrWRYqehXbY6bNomoTBUnjgAG8FD8uSZW18b9tr9Mgdw5VEYRgfWPsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GC9ihb3CqRk36n2GDpfMJ9sMukk3nreRk3CS7PMJwK6iP2NDdT3ZKEiBYtYKTJZKxQtzQ2A4d7exyZfrJnBRgQg",
  "key1": "sUEbgQaBW1Yui6GnKhpbRJvuVbcnNZY9FRd6Rxji1cwofMjJCS62s5CskJyKzeghfYXiPF3nfHexCRDEL5tuq2D",
  "key2": "53dJsEX9qD1vf8Dq65sHLHVz4BixVuJJsxcsYtZLSpo9Nexugv2MGxpmHzjPY8yZCe4bSEdDbovS1oDvXZotkujF",
  "key3": "uFYGP9YFeYzPFT8UwWA1uaxDCUrp6p3gKpxXN5kb21dd2ttFpJYYv46NNxjv3EDeMwFGhEP5K2dZ1twdM6FuUPs",
  "key4": "3RKHBoff1JmWg3DaH6nr5RCJK2WPxeENkESyoScTUmP69PvHYafs8XWFAcCGU1ewp5W9t3MehvbCw1nS7Gpe926W",
  "key5": "39MoxWiYXuLtpynsak9X32ikudisBYvYBnB4XppvuPz4dTQ1ZuFuptgYEbYphKm7265yNY82txvFHf7mWKAS3BJj",
  "key6": "5bUWrgKJmfurcaFLob1c7fg6takXCbyYyQiSnG62mZ34TeKnyPcz1dmDhrYZvw3GwLaYb6KfkrZh4TgmA7xihtKt",
  "key7": "3X1b4UgJyN8RXTPf2dy779Z11fLVXjPe8QJRsFZ2BMtVPjiy7WzGExKT1UVqeDaqSC6sPADzw1WK7GXP2eJgRsck",
  "key8": "3YNUTwfg2brnd45WC1U5tKwPPdc7uGiVWaQHfvnsJaafUv1F5yvBQf4U8Uarw1ysmw7WK6mxJqosE3uPTKwkEyeM",
  "key9": "58rjzboc6b4ZM2myNs2411RaR3ViW8gdkaY9tqDgBm2NxJbobcZici2gkGvfTRJBGsSyU2bYz34yuRHBeHe4gpA3",
  "key10": "2k76EZBMGLhuC7SFQqM7n5D8qgUS5nhzA1QPg7cVFcTo9Yx67oP1gn4sgbxJvpJ6ng3oacpwmQ4yPXDTvxyM8Vr8",
  "key11": "4ZwpymFPjnZPH2CAot2NRrqCUP7NppvH8TYCmTjJS58YJj2nmZUSwgHueRoruyLokeyyuBj9a875Xe6n4i2hK9pc",
  "key12": "KAkgfJKrW7TkiZtipvKGMMuio94d1wxRsWLS7ZMnEmc7VMK9ZrNy2TRYB8AM3PzsPMA22KoGHG2YFkr6faYaQVR",
  "key13": "riaEPXsg1Y4p9ofm98bM9pe6Vv8h1w8qobbtpsAuKPSsiT9G8xW4pTrTr3FHb6C1L5qjdzoeKUc9MGHitPMdLW1",
  "key14": "3mC8aM9CFu1YsVoyYZdgmFfVNiSyi3RwWrqKjdHG4ux9oJSAZH3BueufcG1mk5GF3FUByYcMwGJo93a4YXNTJNNJ",
  "key15": "3ZT6dp3Jgw2QTaDgVomCiXvvfKr9CqykHwnahF1mXPZpWRxscaTLgXrf8pbPBKYAXPCC3mwvFUe7noKytHEgGBVW",
  "key16": "2DER5DuXoVPDVoWgXHLJZ3nzVNy5SdYpgM9iZbgrczAE56wK1c2BLNzdfiNNrCRGgjoHvcHhhmeuLYJzXdWk3f7Q",
  "key17": "BZsVgVWxwrWng7kDJVBPjdkLKffpbQn9mwmnqpUu8jrM5Hs5krjLC81ex8rLmgyd3GdmRnCiAsRuoWJfPPUgnt7",
  "key18": "2s9JMR2pxpbDFyYbx1C7u6c4SQhygFf6HrztLYFfm25WDywEZ5yRVd5bF4Rgzq7ph7GxnMT3ghwLWKPuGzy2igZ6",
  "key19": "44Pr7xavgSXCmrS3f4ftEcG6VXWqhDyb7ofs8UzQtp5m7jTwbxQg31Mqar53R4v6CbAEgzMr3jD2LFsUhsKMXYz2",
  "key20": "65ZjScFf512vbSR8XYJxDmKcWEWrS4a972YumwE378nKFsfeELckwyhidL1nrBcjr5BvFLnmHTFN5dzcysjhf7wA",
  "key21": "YkQRnMjBUMFAh6zpMzLEcFApHtpqyvcbnT1KTTru2edEqJrk8H8A7W8LspvVVrFzaxgDm85vp6JNASEx8N9Nxoq",
  "key22": "4fPjvARMCQoHM2TkrcRTkpPLyrbxMPGCW1nuSD2fbo8wwrQd2eKVcunR58RyTCpQm885nR4nXXSau1pv3wRcX54P",
  "key23": "iFPc6r6EvVb5CMxi7iYdQUUABSNR4yqmhSf84vC2RbJ3FC5bg8kqBGRQdFWiUYzZt9sNz2pwoGr4NA5bZMirfXw",
  "key24": "675etcdreYWbqWfibYkDHtp351xFC8kuFzbyJAmW9Qc4E9GESBRNz9BkjA4rb8o1NB9Xm6Vi88UjAZ3GEb6aNUtA",
  "key25": "xFLFP6rLAFLkLvKzhMvQKCDUMeuBWhLF4juKNaMqwBrGbhLRPZVb5TLndEj7Bo2WDntMKgrubshCwyXVdrQ65Ce"
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
