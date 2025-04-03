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
    "242oquwoUqffT2GNSHMoQgoAwWugvaso7UhQExtrH4ov26j858RLwg4gVGQPz62mQPSaxQ143Fm2RFQEYfy7BoG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXoYNBCgDLrLdaa91ZPC5br2e6Hghifen5wLnsWU9CSoUD3t8LE5sbJaQ7USb1151HTHP8mbrGnyXr7aQy1VawS",
  "key1": "5rbV9Gs64fhWo9i434nRviESdwD7i7hKvfaKXanw1dN8Wu9wovgdoaVzRLZXANkGx7BWQoyrCmDKhnh2SkyRXaka",
  "key2": "3jiQWvEFVSV8Thkbb4F3ehgxRyC8eKQcjNxvBrEuqWXPyaAnSwWfJyjDihWNAU2Dx51KqK4rZauZeUWNFHsE5aLm",
  "key3": "5d5akCWSCgpyqpH8zrfC3c4YctuokezYR9w6AjgCuXMv53aKTYRZDwE7i9uyMD4guqqtyoRMSRcQsxhGFgn8FXhN",
  "key4": "3oh9JYyWQnpidQAFZSzeMzcddf2mEJnam68zGVM1QERYaRRukAP175oN4BB2Sc7MPqUQ8weWRMFeDiE2mo7ZCsZ1",
  "key5": "5koneHqXzjsAYNWJpSY3NRvpfG6KGxp71r2WgSpHC58tvtSt3LobruMHEGfxhmnP2kKLrUMRduMp82KFSEZhm667",
  "key6": "3x8WUztFkHfTfYUaF9x39EjH6894DXktjV8MZ5d3hCHfYXytd6D166YNouD7hbpXUPoGDjxjibjdwmAWC8pmoMQ9",
  "key7": "rXRbMCi2qbep1JpwJj97CvUM3h4UmQmJgSesjMtAcbz6JiUo8u6HndXBindH2T8bG6YAQdoPTcQ3UXWQXjj8R7w",
  "key8": "3wowYafo5LueauDHFACSdLvVRjjj7ZXNLYdayqtPZE6WCK4KYy3PLhNnbq2HyvDyZu1Ws3FfKYJBjAiVRJZPRbWa",
  "key9": "2wG19PLqYs528rGEZ43KWXHtSSCraHMP838zXqXUW3tZ9tZbJVg2p2UBdKedkY2DWtRMufZA5iLnd3XUgQMcptMS",
  "key10": "62SrTuWTsvC2UzrP1DEgDH9oFJa9B71TczPesxTPCbVhymBaBJxeApKQKPF9U9Y6Vpnx6N37St8fu3ZcoQx8LTqc",
  "key11": "3giPs4EkBHcRVxMZk8Qr8usH61wLHYDXEneLssuN4AXJEjkVkF3nJuSgg7gCbbKZwwRyFCDNzCSRYYPeXRaNGaCd",
  "key12": "ZdrgZcDWQ7i2rJ7Ur56SsjD4cLrkBzK2LFiyvzjn6xbmGNYy3McfeSVm1c9dq8ehDu3rqV7Tr8knCKT3FEia6UE",
  "key13": "21HuunbAgGEoos3kz2PPmKsLHeuX5W2LeUDTKV5aSwwQroNKePCmSP56ga9kVHznG9Z3hQG6LFGkU2ryVq6dSNsg",
  "key14": "5DrcWHTh9Sv6QQPqKN3CcvpdSPeVE5VdKgCq3jPRYK2hxxSpJhAvGuLqWqxpMVEU4WPQXELB7Xo2zCxt1f5XZ48x",
  "key15": "XFgAuZ7wTizcq8Hcx2PEwDCPXwmMmwGjCrhQusKMzvEN57mphc4P4w4dWo96m7iELfrNFCDnybv9cPgiAzcbMY6",
  "key16": "5NZ5sfxAdBUemY81kjPiy3e7Em1ppSBmRnNFyjGwRMJ6amwF6fy8cC8UsqfscHcbpyacDdnaZ27V9YVYRe3GUpev",
  "key17": "3haoP6dzftHycnrjAtc7EgbsgHzHWRwnDGfpBtZEwZhLd3GN9cuA4D91qzZYxWZZocBhYX69MiD8tgeKvTZXxiJV",
  "key18": "2HDLFGHRqyhY8nL1dhAt2cx2RUShgG4KFogToQu6a9cQCaaG878pNkfxCSHQZv4w7edzC7Gm1osGE9uFKLgFXSwh",
  "key19": "2jQ83LFwGyNq6sHCiYxQ2tKToxVRDms1hS7VcYVBT2jFvXeW1q38f1qRDYqGirURxK5QhNYEXTc6imGK93HcGzVk",
  "key20": "4H6vBU7Th1L68zmpL1nz8pJR7ijyPwWdQrKW7yXjjWbsLLUnB6N5KqoHAggEryYA4zFSei9Dih1ne3DDk7urYJ1X",
  "key21": "GijQspsPSc7rxCG76cRgjehkhRwB6ytWpAUq5T6cx5TS5eMissydyyZtCoqK5jfFFKu1NZbMZtuj3qPSqeqWU9s",
  "key22": "5zTGH7FyDxFHk6XCgB9AvSXmpywkT4DXqZQYyonoGL5nyH5e53MNviJv1PXMrJd5H6BsxaRdtDXSxDncYXopJ1jH",
  "key23": "TktQ6SAkFRdEwdTzhe1sB1M8AAiapyhrL4WHbsJuYAqfwLoB6Bw1k1CqegKAP51EztFHxgj9h2xAj1PNXTKmRei",
  "key24": "5k4iXG657Wzq9UXfCmN5erboqrFnnLWtaQFiFsrHusKCoT8zA1Ye9wZy4r3bckX9WiPTLVhTNmNY13HRyS8Xz7Vg",
  "key25": "sdc4bA813Gg9N4NELE61hqt2B8FD7WayLzh7zt3eyTSqNFvtSsVcjv4gST6VFmT5KURmGoTigaSPNkNdCDVB8dN",
  "key26": "3BjjoaLESN6VyKhAMDienMWz1fRze29kx6WWEHA3HqzRmp9YMyBDzRTXdBrSnzQQmBVCT85qQS5nUeWj7U8AbYBM",
  "key27": "2CH2NX9eekQigZP7y6GsekNiALEZYvCmLNUQQ85Yzmc7U6qTqQjbAeVh5vsTGJGWTUuRuXWu1ehAptUfm8qBWkyz",
  "key28": "5QjGn3TWJtvhbqT1EQcHdmKuKFbgsHZb4GmwXQzYmf9jTNJxUfMUK1p8jcnXsQsHCnuA7eufQoqDRnVYHo78gUPz",
  "key29": "LPDXNBptvL1CCLDEWjYCKg5ew3Zp3oMwPE6USvM2LaadbB2zbaBf6JYLc2m8Yuk1AHF4MeffJb8A54TzSAzmu9K",
  "key30": "28NRqPS38HYeHa57Z9mwUyE78SsazNwMDV1cbo1s2NgwNgKyzJeo1EuNoVHdMXRaxYqxHQdj8rwsuUS6bvfuRZ23",
  "key31": "5HL4YB8WT7w7ZWa6vycPFV54ZXGNW5Pny3E3Dniy6PoCAHJyc6nm3yKjPQzSE2kv7mr4W5vTFS1txfocTsnhAzbQ"
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
