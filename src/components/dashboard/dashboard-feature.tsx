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
    "jwuEy2CZXAruaNGVbS7B78XbFVaqDS1GnBQJ6EE9ioLjW2P1VZUtN2xRGQ9ZN6hYn9iLGUkWqy2yMQcStqQXox2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDGnfqVjfQoU8JdWPtqh9n5No8CiEBz4EYGgj5Pc7m2x2oAU9EZxzCxwboz2x6x9NQWzbihEytkaHvD2KqiHXXD",
  "key1": "2bDaNqjfFHAFkNpbnQEJa1VPTRC29rKAmA5x2VeRRXzDukHYWY5kCpb6ZkTDq9ig99zeVpUBjWSDs9weD5ZW2uG4",
  "key2": "YGi1XFxFNZPMqpEBrPMC1rMPq64BNXXmt2WoreA5ERhBcV6P3Fw8sjCX5EpmRyfic4ojjq1f6ZuSBmHfZ5DPhfj",
  "key3": "2YmoRNRQiDd6cHeT1tvMJXLvYrPjNbqyy6YzAo9kraBw3qBtT6mpwEdQcSBsX5YoEkWgzqXSgHHdGmKrTPvVMD87",
  "key4": "2d3mDpJsXaASWJ5XFPzZi3P9oF7cLLz9miXYJmdejsZfqcqAvtLLvH8ZUh8fHU7d9iNKhwTuYWTgVGnwfwnWTmdQ",
  "key5": "3q3ZiVgifvFWiRK1wcyzBumrEwiib5QvhShHXA2DvfPmCwEe3H1w55vfadv2GYgAoNtHLuD8M3bq4maa7yievR9t",
  "key6": "4gNGvnRLHQSUKwtBySRBdVSSyJ2e4pjvR37AaNBtc8QMPqKsMLobJbNSLEARVm89BSTvpsCb8ehEMw7UHjok7YT6",
  "key7": "256Rm8v7uUmW7uMdPBemDMvv7uNDjJvTvdeL3voS6QY4CxEj8rxyVQ1mwvq4gjvrg5XLVJ7A1i6FdUQH59wXcquh",
  "key8": "3twzpPPK9Xdtr4oKJ8HQAqyihHXw2g9XFXkTo5SJhyViUgtaLw1GwkHaDjd9tXR5e3aNE4udEwUk4P6g3jUCLZJ8",
  "key9": "57jXhPJauu6xiWuA6PRnU6RMixoVREmXFYdsjfVWMHQHCBpmPfUmvuGcmahPDDsbs5erzx6AUtybWv9KHkGRfWfM",
  "key10": "3MbS5NQaqeuVcKXEM38w1k8aETzXhBw2mk3EG6dHWTYHm89qMPmMSwqB8wLHjHEATwVmLTUhw3eromxGXz7ytn2Z",
  "key11": "33Fr2phHH5zC8metEENWG7psNtwRiea5Tst8TmajnYCUpCxUm29rRsAEp5ot2R7z7BABkxF8ExSQ4asQR7j36Xub",
  "key12": "583mhAuAHFJ1xwE428GckQv3Mehd1pVA9WjBXwzpo4F9LNHAyqXQJ7azmABEc3atvyqTfKkSzTj5hPj7WdEhrFmb",
  "key13": "3SF5zQB5gfBR5Ty37TLBY2MLf6oN7ze6LBPY7fmMKcLnbwDZ7BQ3qL1Rc567eMA7px2dKrqyYC6RFpgTeg5EhcWB",
  "key14": "Dsci5EjmcnnCjcSfBKwbUixo3bEW2HPxCPk9n4MZnDiCAByXiFZmoAXpTNtXg5KvuSZHTPe2k5xoMD4Xh2mmPgX",
  "key15": "678qoXs22BArmYVm6wvyT1kvduhYBfcDMzatG3Noon7sPKcCdHoQ3sPyj4KjExv9V2JrcvjPZjdrrkMG6BmUyXd3",
  "key16": "Co8i6bJKziRLvk9cePjZmHoMZoVJtFdsJUpLu8tSLxA1uHxBGFAvRDaFL6HD4VhVUwp7GCfdnBwMNvMUochdttR",
  "key17": "2fNUqxCR7nzDzqNSk3dENXqZ6HHZ6apPZG2nUQeSCtLTQi1CtjQPRaBUAXnR2BxLrrpfy31EJbFs1UieMuCrbe6F",
  "key18": "4YLMCXe5HwDmRM4gKs5aNXYTaTiPjHwLCwzUEanupSytohPwEZu4VPKj8CSJdX8HxDu4cmyM8KvaaJCCXRTrocjY",
  "key19": "myZ1bxb8Fx2RRTzbfgxQMyuuuxbHZf92WGJespiECFch7ArFV48nVRtDQbsnaiPHgGvt45if9D3wzHHpJN3GstR",
  "key20": "5csNmrnNc237YQqiTLNkVifBR441qWM2UtxdJMRSbBsE5m3QjJQq6g6xnZMDRe8WpHL37cg36JLmanypbxvzjobo",
  "key21": "4iizh1JDKqQREe8cUmeEXUnLvnwzWyvcfdovMvA1BceRjqQZJfMwRwP3EC9NLxLBBNpjL1BtXqSiKr1aWiP4WRXJ",
  "key22": "4xVhihjeagakCWz69AY8N2nZznLebN2y6g8gj2QGNqthmF7GjPD5xDvAFtZWvZ1vaDAMUQie28LCgrrbKft4RJzs",
  "key23": "4619gqo4gDjCRUaJ49R6v9jK2NHkPSpiGby2Pee2ZQhcLrEDQyNH3zw11GJu6KXkBTu2tFKRHzLwrVTpw66KW3dA",
  "key24": "37S22izTuqcUtoRT8dwuGrHFhmGZfQowrZjwbdqpia5KNURZPvxmmw9ogSj7ihdB3c6jMLH9EsGyWNzLgW8btU2W",
  "key25": "UvUsF6LaBRp2USCcgorGDdfWGhp3wXZdByHtwB3MCfBPUW169RyXBLXq7prWMQsvG4WooPdpd6WsjjcUCuMfrMZ",
  "key26": "DcrxWhctx1UkSf9nWfJrPQFfyzJ8wjwimeN6YMvnYQv3g1w8hsMn1BpSKR9vJboz3RUMAtkkdQn9XcEqSj4YVY5",
  "key27": "4WTeGKENaSiizpggNHi9e3S67k74gzP24DbkeBEbHWtZA1oWqFtzCxeJt7ntExS3whjyoCciRSVegdSXdcYUz75",
  "key28": "4joWeRVBG2YnQpBwTXC28x3AzAGkouN6pUayVPSna2AMEUgARKAQYojMsdqfBJnJZ2BLePy7ToWywW27Ti2tqXeB",
  "key29": "4uPqrKjoq5kCQEKRLo9cqA2YsYsNmpV2dCxLrNsxz1haoDXFfAqsHkcQfazsGEmdTBmm6Ux79sVH3ncgUfKWxo4Y",
  "key30": "5UNvW6LC73Rj6ByiwphLrALE7XBvcEDmJZVYHmvijCaJPN9r3q7BWywvPwkTgKUWBqJoKt9SPXxDZDvV3QmcrpWt",
  "key31": "3PuMLmnzDULsa9BX5bsdGdnwKu1k2KbmZznrizJEdKp3SdmfAuXGJyPJfLJGQw4z9qvaML97cH8f5539P6vKJsvo",
  "key32": "56MpnWh1BxRp8Qk7BU1iAq2HL1VbXXPL9byXx2zV1oGwctdbT6xjk5LiQATr6DQmKfmbXWZQiuJP9FHT5LSMqgnz",
  "key33": "JQotxrE2PbaN3q8auP2BBYNkmtVoFpK4jLz3GNV3uQ9Cyt1ur58pvwvLvPyYx8iVb3RjvMv7poc2KbPus6vQo73",
  "key34": "4eVwMKMvKdCnAxANuTJXuq919xdBNrtpnmgF62nSWE2fQ5JAY5BmaReSX7SAjEfxf7TWD7zN7mTtGkNRqGJQS8uB",
  "key35": "5APVHuoA3nYRmK72YZkyMk3A7ATyxLFBb3wiLoN6tpejbcLT9VULZz9kGDMi8H5cZoMBoqt8NGz1TegQwbtYvxYZ",
  "key36": "3PXcWEEFWc33D3i2V6PWbrxzSVMDyMvhWaMs5nQTgLZmJQyfpHyVAD8NkA9TDaddZPLYxodY9tyuAAtTn1wLYgLh",
  "key37": "2JjNv43KSMN61ZjmninNz5A9sXuDkQpSYb7PXjmY1zhPNaFpf9vir1sSXrwLfAaJAGGydy8LwoJBL9yNiL5nuA7R",
  "key38": "2fbdv4P5p1422X848LmmA6AzhAht5pn4vAWEvL7Bxz3mWLkBfqLFLQDVptUBgtiWUWhKZMiUxN8bzoPswREJBEE6",
  "key39": "3YmPPpma8B6mYjCGMpeqyaWqaSLhuUYjPv3U82UZ9mnsp1Xi5HmNWLngap476FBuq4KBRujBqN2swRkd6U7ouZHq",
  "key40": "4dJRn9MfHSMqCCPyS6RHwudauQvDvJLX16QYEVKa6ra7k5xAaVSX9dCFmwKzvGuPpJm5LzKAbqGhogtShM6gyrgj",
  "key41": "4qj1KFip1adETd3Xa2TFPN7EDTWctYFYDBBkWtRWHZHBqkcBcx2Hc24DsjWBBSmj9saSqnjjag8N1bq4q9Tq7e7k",
  "key42": "3QHDDZExNeFFgTLbDJfxbHJzRu6qz8pDMrt81c2VDEB6pAY6s8LWj7eP5aGFCDy4HuJb5a73jMVVZYqg9WMXjSCk",
  "key43": "6GBAXaTeJQ1egRdDNiypqUN83HXkDFeu4VpC5RmqTrSyGyuvFEtaVt7rGrQLE7AgvcrLjPmbsfg6ZWaKNv4paTS",
  "key44": "3FgrKpR6dDkYFmxJ5TrVktWnynGTDeM3CPcbLTtDQhVf3ZDrcBTLsrRqUw1ew2htC5v7GfPWRD3pU1NFkSmo5bcW",
  "key45": "pzt18SjoLirb4QyPxhngqFtRFH7gCky3XtPoQMqUZYbxh1p8pLAz3drJJuBmW62DwaZ2YeX2tKxt3o4x1uTGmco"
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
