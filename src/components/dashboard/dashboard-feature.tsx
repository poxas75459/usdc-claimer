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
    "UKzJky5FuoGUYrDNCvScSCjrJ6BqhwFExtsut9gB5yo8gPhzU8P9e95Wb5Jf5yByPafQJzcMRy4TAUJ9Sy1cdBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKX6iKuALnQMWS4Ru5xdrm1CpaeSVa5vVZXbX6kPVz95KLnxxuPWDqZyGkJiWc4myq2EyFhzPdVFL2z1cz9g1za",
  "key1": "2GP7DEKEW8VaRdoDv7U4yKPCHKekWwWff2kEmYiNPaXtu6pVuboZK9iQ2g1sQyci6v71REWDkoSKVc6z2skGTprr",
  "key2": "4qcQREUakAB31hVz2m71zBr2TPsSD7wF5jzVgrAAndh6LX8izqwtqYrcexfeZgDQwC5RAWVJPtvQHHTdTiF21NZR",
  "key3": "DcwvCWDs6kdPhjrS4K9f86NWyQfMCt9XnhQQRnkbpQcz8Leeb28ugpmniKsV9xdH4Bcjd7jKWWuFkZ43SR95PVs",
  "key4": "2cSJETgpKiGuxbVyQNUNmnXR7m3pi97RdB3un5xNYGt82MJ4msadjMd1NdWZSLhfd9sbZqep1zWEnpDyC1Xuk2mh",
  "key5": "3hF32CE6Sc1thBekd3LwSZmyCm1ueq1CnFAsosDUH8CYnHuY9V26B5W8mTtnYZij84JugjqfYJwQ984nFgPpFXdx",
  "key6": "r81rXjYr8yz1v8jSuFrBHcLk9bHgsVYD3UEAWorcp5gSY8iyTw5YCzWKY7tce1xYLkG67XGaWPi3FsrH3aeiPRL",
  "key7": "5depu4gq6n7UgNdKDuQGNMVBjdH3Gsgp5ZgbLEWHWLEgCcc5RTfA7uCp6LEg4S23eSi97qZVrNx3tT5P7op3VbWM",
  "key8": "4ZB562CEbuNpaKvYohsQisWy4yLphaejq8Kj6XVCmtMSS9Q4krx5mQiND4dJenW34ZzDN5iXqdLzkEPRs8W3gtr4",
  "key9": "2rFpCTaQivs3AS15P5g89Qfrw2iMoNoDaCJicaGbiJ6w1SLCorb3xdgnNYtF7D33AojmyUqxD9HMGy6HDrKuESdV",
  "key10": "4NvetT2e6JCT9mKVGjrbVgoZWngmkwJP5cb7U7VbP18aYvGNXC2M3PrrdFMNdmJyCRzZPbRFzg4iLzqgJVtazpJM",
  "key11": "3Nnxm6Z5rAJN8H8UPddXvQhQzLJPYvwkCnhH8wp9qMHmAHmfsSaD8Fh3JS63fqguQs5BxoS6DzyaV4x3H2fLNDzj",
  "key12": "HiCoeyrQAaiAWxWFsMrFBDnttBV79MMp9Y1hXSmvvR73FnndYkz5QkhKVK9bX9N1BNsvvTyR7fc6UryMxmjjXjU",
  "key13": "qxDHGXrURhn6kmhqsz7UEVT6uvAv7wjgPUNjnx5zBBcSfUuzwbAUoKHNMhuuYHdjsMni6FkTBnt3aVdmoxmgncy",
  "key14": "2Kkgyvu3etjZdsD5VAjjtoLkgfW4Nw4UcNTeVxLzFV37MeYCuuufKR5TqF2o59jgY3f7Nd5v9wqRFBKjiyN1woiT",
  "key15": "3zu1VTiEk9LnovJUMqj5X9yRwm5sNUCCxXN5MDSFt7ZkPq6sk9ZF8hNXujJxS5J5ueKiS5nvgP6P1R7kBgrFkowN",
  "key16": "ej1jv632BNLtmmWAWDLnJsNYjETASmfvQTDB3yjCkqavzxbE4rouWCxBUUwSKUHKxywUaWphFqziM6GtYm6jto9",
  "key17": "2ogDvnUW9539tWngr1F7o3MJTGTYq99UeFhcxnx5BXJ6eGnHUUBn9TkwJnWBv7fH1mEWMyirmjsSfYrxJLGiBgE8",
  "key18": "3Yx24tDtTiTvecDuV1xuGyqHJKRDEWRBVnJk89YgMrbtsadZy69ZnJQgMLQ9TR3oFeVziM69BLeZYidtbQuJtGny",
  "key19": "4p9WKkXbqtev7RiSEs8W4KzqxjXavkboHy3sRLsuVYmZibhYo6bXuWUPxDR6wvu4K3pvWwtMaTGgT5PLbH8eDuJt",
  "key20": "4BEsJ8Bzhe2x6eU2cGhy1Fmsp3o8j9EN2rnviNFMkYE1hvm9t5C1FpicEZ9UZTfKecfU52QZQunnRqiFhEb6LkbT",
  "key21": "5Py2MStYztbSSBf2LZDTjNz2UJFd1pBveqjQAL4UQqzWtTdkZYHYX5kmA5wNiqC197c1HmWHJQbewirRN6NSGoCC",
  "key22": "3dUrofWmUfuUj4C1xBW2LmynGGs2EyRApEot825i4VLhj7uktWLCB6rnsSh1du5k67Mvof36s72LE4tACjj8oR91",
  "key23": "57HBo8bRxHgJwefhiAUTQK3kBsCFz17XzwEbNB5EFqj4zWCgRt4cVwRrRKPvcPfxScRhEuptjba1D596qPcgfeZz",
  "key24": "5FehfbK4F5NmFY5Fn6uM6FS7yA9fR8VYUhwJKyxkz6BCKvhBv5iyfjU3emtVfanfV6ty8jCZRLokfwskUaHJkC6u",
  "key25": "4oQ4tiJbRNwNpL7dJDZGYTMuysNBwJQrLkDYCqdqE1wyPoco7r1Noodk1VAi4pKKg4yttNQPwvazZykPUde8kinX",
  "key26": "36phhzdrw8r9TgSYcKsLk1z5nTa129F8KFjEQEvzWujiTTibFZxpLKSU2gk6PiPKHgnu1hC5WAhgTqHV4hhJsoaq",
  "key27": "4juG2qh36b6jNyEfiTBEjmzkf5MrBGhf14qnUMLuNUgLvyiWfGk6HZ8udXmxLbeR1fQAXLCoVDd4k2vSuDYtkvxT",
  "key28": "5RZYxQvvVzrmsauEtWR6pzUJqvmfsfDruuCKZqnugtRnbfKNyEnPKt5U4zuknbQ1u1ixfiffCaJ2QoTALUcheLsS",
  "key29": "28YSsAXDduFsDZ1uHXoGXVgXdau9Abq433MGE5pCbzMruQhp6QRT4srDY3B1QvfvB8iTCjUKEZbco8UTwHDEDN3N",
  "key30": "2jHaLMGhfW82Lbg9fvpifiSo3Q2djVgDZc1GkcokbaKpdfJTr3jfaiq4YDdYQeXxzDn1M4XTornDKaEMCTqDN6ZT",
  "key31": "4XmtxDG9uMtpqYejs88abp6desuzDJLJZcWqki2yhar6vRFSz9QgUmj8z4ELHZsaG7tq5gYHaxZ3oRfuuuJyw2ZR",
  "key32": "2FC2hmqVMipimykQXEpwmLHakoNs6Q9vgYwnhkc7azVwmiid3kUeCW1ySwzNzDgUvdR2om8XzTTDxohrMfMqJQ4P"
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
