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
    "5jr3XLnh4fErCgXdCGxSmMu5MjgGyHZ2gRBaZuG7jGUZF2CSfJjH6bvhhpCVpt7BPGNDrUVB7a7nDUqvPMfkm3XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkA3E2Kvazx1yrnnT7t8fYVH4f9zUozeQBHhfKGZky7u5oPaDgnGcw229JehndC4BsqjW49JXnVmeMe6GX1y7Q5",
  "key1": "2diJ7PMsEF53KGZ4CNFM7QPe9xDXBgnkNQX9ExjjchZcjaqqQpipPTQ9PdZKJYStfwpB8LLsDcvnpGBb4GLnBmkt",
  "key2": "GCH6jTAc97ABven4is369Mjk6ySiKeyuZNgxzMR2KMeRcRoSnxv79FocrQDB6LU8Ra2zxrrLRtzqKwn6NNN1TBU",
  "key3": "2Tu1Pqv7zmUqNhX9FjGK4H4Xfy4NcYdnU6xuhPGDqNsbrF1aeTaDaH7Ud6TuX95hwHLVJytTzd1xF8RUxENiQpnm",
  "key4": "3BBCx87EaNTZSvymGDtRsRcUdzYXZ7azEMYreG6Wxizouq8Amf2HqdsH62janqJ5BuPRgxcy23EnvoeUd3sgvLnb",
  "key5": "5gsb4r3ojnHH5uLDLcxEwk6WpjjQyUfaGdNHsDP2rjmEAArbFPAkPTrABX92EVG5ukfUsdM44FeguHvDsbWN4VCR",
  "key6": "39vDUyBmYiUeSvrGnsk3bNKzLGnTtTQMXcSCwrw6C4aytFgYBYNzu4vjWaLwjvxVUJkg8q3gVKTFAL31dzZBBMvF",
  "key7": "9Z2qyZKbfopLVg3JmDPaqGQVaziMsBCBtGy61jt6em2g7U3sUXVBdhwxgfxntJGEgdDBddQKvC6sGFVfjttsXWn",
  "key8": "2njhEAZoprYTvuMYg8tcLcug4NjDgFjRjPtghzif8VuJhYuSYzswFGUUYPnJtJ3Ebc8x21iexukzQWkPwjqwC7wg",
  "key9": "2pj5mBANbFzXUcLJV6xCZxMwqCfhZZeSs9ECyxw9wDRQt3aKturdz8miLrg7HYCKhNnL1HHud9LMApVovrH4zokK",
  "key10": "2RL2FG2as53DpYrpsvkZymLRHsQojxPxruXwh8LzL1feNBMHUmtMtBqo3vNW2okjeqVujaApeL3g8HCztecBDf8S",
  "key11": "4W6hr58DNE6Tqd2rKvUtAzVxKtPCygRZRDnDWmkR8Rqe8vPJgeGtomvuskmRDvkRQEaQBpVveCDsLtZ8zQExqfFH",
  "key12": "21PJwa2rVFpm7vf7AC9TQvAu9YdE3LFbvdkavR2hPG338ydPwWvbLCVPN4oRrVYbCyPhRdGuTFyxAQZQcqkrfNhe",
  "key13": "5m12Q9BU6AETDPzFw6H17sZ5mD4kivcT61FVTjkShF6d2MVqq6WU2qbCYxgzuThJszJuxRTuxtPPcKE5kq8F17Dn",
  "key14": "8u2XxbAejAg8r3B1RkhNvYG97Lnc2E8NxiVyDQch62FPXtyiHhfhhTwCFcECuj3h7au6fB7tAg3eMKckoTeBnKJ",
  "key15": "5FMHYaVxnm5Tzi4YKfiwbVNveDfKrS4frVGBDCuzoCyWhcGtSBwDkKGe1XUykxrkqaywBG1wqV8kgg7mxyXmk5J8",
  "key16": "UrwXt137m73AthScbzkG9Q3UMgDYH8SPwVuBvuw4bpCxAf68Pag5VHWnsTkANKnx3mnUX6tLTpBkRPxDTdGm5AX",
  "key17": "2CRQJRRF21DTsmeBtaS68GfwGeHNQGZHBac1WuYja4DjidKfA7eA3mMUgYPpLy2JCwxcAdhiVSmbLBLpdCKrgYts",
  "key18": "5x9ZEJQeaFQq6Mr2uRtTH3qwz3pXXPE6j3kgXN2CT3Dc8oh6TEkEbk2BGiiaU1zgjYNdhyp6eXKQcbxsVoZNgx1B",
  "key19": "5QEiiL14R4d5bQmc6xS98ym9qkQdXDs3aBDfHPvJZRzLmawqqcpJuuQFMdc4znxaAPSmGM23MQbetbsdjhP1HaTR",
  "key20": "3uyf2smEsgq6vhaJQxNZXRrXAMxfZ36wtyQGruuzuLXtByqJp87ZKMyHTUBksfJJBy9f1qFEHvF3s5xywM497Mgz",
  "key21": "2nAqiScTWxnZDzSzFe8aJ2i8Pmn2NEqH7Dqv5tMPbtsDeYgGJp8w6xbM1oUhk5NWbAJjMDSNmD4T2QKgY19izNbW",
  "key22": "3ZjnVCxDprF4mZSRHtMtjAnXvfqEbxkCPTdHSGaJmc7VnRD1BQLvLJHvEwXCFu5E5zNDx6ytH3NL5pzdKYSpan4c",
  "key23": "5gkF66VPXG5YDf9pGVMUdzipMx2af289y1syQ2KFL4wSQiMPTeFqiWMYZaQwZiYwVJwZU2RE6Z1FNV4iZDVjZsGw",
  "key24": "51gjZtG3vyxA242kAQuMXHPxsnSZBAXPnAgMeQCdwvWSBpNeuqds1guDtCxsagH6Yt9AFyhC5uFquaooxwtpBAm2",
  "key25": "SChN11m796ET4JjT6kPnUQZCw9SUjGZjdfx2q3vfKeLSmACaYmbkEUpbw8A1F1ANDXZcuU3bP8uVpE66bo7Foys",
  "key26": "2yrnif5XDvWAenLF5B2ZVXYEpXv8ncZV6MdnxHgSgVF7ZchcqWQRX3DPnqokfpL7oqWz5xhPdXPgNFoZxnkM8Ak2",
  "key27": "v3LyfGYdKLW1kng9RMwUiKh4YmJFt2ABKjwqMDfQUe314G6hLzvuFPucFxsaC9FSLuxDsE6xK3azhN7xZURW3ih",
  "key28": "5dd1EM6hPKewWHcFxWp6cCzvPG2V8jY7SPVaqCwHfQNZLcpR4aajTdb3ym3hFRNuWSPHSjFZe9otTEDz7dCqtRnm",
  "key29": "5oRLrZDqAhK4LoVdhG9fZsKriFitaEDNaGbCz1R5RuCbh42bFsb5d2CKeWWHnUtWdJ9KxTqS7uFALsWLfEiqMK4k",
  "key30": "3SBcPgQL2aQjJHoVcpEbHKSHJ1EBNkCTy3mHYXrW6KWcSXB9pE6mJeRmFQr6FhsxPFggrPBCEioWmzPmpRnseiaB",
  "key31": "27mh4WmkFthR14SJ1brVW8tUbCYe7N3Edn6BEWG1HsbjQn8igrduoWvUH7rwV5JczfqPtVk1qjTmHdy4oV12R6s2",
  "key32": "4CwngMsFNYjADDVk9cpEVEKKA3Wkjmuq4sMSvK3MeqxhHaTmjnqi1LKU9REDiYHnWQZBm3Db3AEY28SdymwZsK7D",
  "key33": "ckWDSgg8qU4NeCS8F7fqhCJ7U4WUYxezr8Ckidj8wAA3jCstUANU1Js92ptuLwRcsXMKUXVBztSHy1D4fpfxibJ",
  "key34": "4CC1z4XT35D3wRH3DoggxZz9gstYTQu1s2hsuQVx3onB2UVxULD8VfaqJGiMGREy5z7rxytVK6aQXdop3PdoVEgz",
  "key35": "2f2WNCFKWXCKczbVndmFT2zSZwMKbHf7yWT8q1FFiJYwvq725d4soZgABi1oFeVKJiYgJ2VsFHdgBVSp6qcviSHa",
  "key36": "2fbb2FPFp1418saTqWZftLVchtFohrfbmTM83aBdAYvLED3m1UuCKDZhkfjN7wZ6bWWmtHuvamrJLzzFXwwA86vb"
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
