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
    "4cUfSJu2Wqyu3zkzS7UNEGnxmCTqEBbSWURxnr6VUdWnJyiU7utrXkaxnQUzpj8bT6gSNa41sf9HnAr6TgF4KTJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZuZtWc9jdfE59yUxuwyfpNfYciHWkceTdWSFtJYCbf2K6xs71eVyTKkyUtrcrN4mzrxgnBNx9BcET1Xp3qqTiQz",
  "key1": "uZXVacpv9Lx6M7KEYUiZyeMJGx2ABbqrs26u5dUuVXuFQ1HcuM2k75vDb6eGQxkon9hbnJ2WNfudeA33mtpB7DP",
  "key2": "53rVBivQunss2D29aiqi32e3gYCUkrNMvynCX1t84XFMYgVLRFSDnjseTT6k2eErzzXAHLqucETpYUKZyHHxRMr1",
  "key3": "3tq3xX7BabFcHXRhDoBazann3nKWFxR7Q6CzRZV11yCyud1V1PNjEb6xaQA9Mw5ao3KRiYuopi8LBwhVZ3xEwoYw",
  "key4": "2PzLVguqQLCfsDcVcTjDZ2Fc7seJqK5QP6oCAtYxcbPMQkwkLU2XD3bv7JnQeoTXAiAq49LHDMb8NhsbdkkaVP6H",
  "key5": "3XCm8CSbPQyV4euNpJH25hQvLKGTq4iGi6xUvFfrXbVUYBVF8RGq6uGxZJcfGSMikQcssbSx3fU2ZPvkzh43Uys8",
  "key6": "53H62KjuSygFbQLsnz6xZpcrSE7QR9wPKCTdhuHq71jZea9UN1CkW7QJSMeqaVD4RievgiGh9jWoCM4hygXLxhHA",
  "key7": "2L2RpJqjGC7kMp5QwbStfqgaPNysgL5FNqZRDnso16CLzNtYya5aCrGbRvbrvT4nLY7mqdX1RMj9NKpAXdCxM5vW",
  "key8": "3m4dEiKtAhiyG8HQDyxGjLiBCtkmux8vJTpKmqeJHRe6LPUEejvRj1Y6UZmqYw88yBYBHCAEo9HEWy3HLNnWRYFJ",
  "key9": "4S1YFNRqsfprWvdm65RHBtaCm7PDdt8YuhNWJmbbCmfmSCkkmDreDtsofTGu6Gx4oWkifuYtpTFHTVxna8tezs8M",
  "key10": "4PUTTMimUGRmdwVjVMMDg4v4MGuGNSPXwr6AXDZyoy9nLKU2Z287ZHDXZuozQ5RYjwfva1x4ZWLw2q3jdeQWhBNH",
  "key11": "41cczpfBxNJQEh2ZnhpT2PUqrGPKVd85xnV3Y4DCRv9HHfAgmquL9GH2WdUfPnMHA156FZqiVbiAgYCVGpL2QUcw",
  "key12": "5nCoDx5vjx2aKsXyFDC4UXwxwFZL3ygACVhXX4osY3erhtMAwN8m2LZzYmTdvdogPAjEXekJKV6XsYZk4cC7Mbtn",
  "key13": "578o7ThK7wnFEZXsfURsZnxycT3wUe7fwVxdoRWs12Ec4Hx59z72AaTuumqzcYvzaNRDQV6F4cPHCKUsSywDnqYp",
  "key14": "4zVydSrenGkWurXixR5xdsoUV6rFd2HNckH4fGLpQpkGZsjx4a5fBUZWVNRNh7zG29SQ63BnieWyzbTWNnLJpkqv",
  "key15": "4ngFhURiKes7utHqsDgoR2x4yNdikHsbirp8njBb3Wb3fPnZXTJ6UHUM3JzcdzTxqu9AsAzaPZcDiz2n1bu3zADx",
  "key16": "3z8Yo6h1Gxs5oZNftWTH1xRW1X2stv3Z7J3c1saeGwp1DpWnCm4NpbA39LvG9d39FAjLzReebBnupyAm1kH1wzxy",
  "key17": "4yYfWcFjqsFt3Xo1VJJxV9PY5EmbVPvKpBXPzy5BWq4gzgh6acv9H6PEQLskzoCYMWQzcnYy17R29r98AVfJ3VVk",
  "key18": "56imzKhpV4BM8VzezeuVN5rNdsbNDfXapgViatFkEJRgxVEqkjG3xDtQtNCsQZPkigmSQC6KJHU6SvYat8iYgFnJ",
  "key19": "yLuHyycHBaWJ8WgxvuMWqjCpTfuj9P542BFMQzByb4TAdzTRMKnbeBynJwtQxchqYDV55j1B4Lnh5C5cQyAfCVr",
  "key20": "4MGNkbPC5BiMdC6F9tJWE1PswG6x8qcVmLUvJA88RNZZeWj9U74CMkTp4Gr31qgrFMaKKYQdfzGZnpVNMr31rcdw",
  "key21": "hgHVxAVcrMFehxGJWPUQHmjwi23JEgWUjmXyqBm6wMgP5y3ZSo8upQiGeLb6edNBiNMTYtvqK7zsENoG88b8844",
  "key22": "5SwfwruWvYKefdeB7e4oobKmpMngNrRBJ21QsEkAzrMAmpNgv3pWttsBmqgmLnqPX7RkGnhTB2Eq1enJVk9wrdyw",
  "key23": "57VjqnGoikUdsw9ys9VMPejne7kXu442zTYCPzVYsa97Au4i7b97kw99pbHRcaXcx1WHQoqE1WtnVENyqXPU3Qvh",
  "key24": "2UQKnSPTfVGvkQDvxAnGeGyHLFXz9VMedbFTfMpUXYm1H7U8HtPNPNskcaXz1T7dBgqeaXeuYgsTx52j4jjLD9tR",
  "key25": "31FSQxjGZawMj1GeeneqGDXRFbXfARBHgRoqjAeN3b32oWvxqQms8agKjPRh5UpQchLaFtm6UuaAUJgaHfLq1f6z",
  "key26": "3RcgwBcT3SQU45jzpzCYD41UBGRrLw6Fc71sAHSqYTiVQtrzd2JuyWgVSBhcDCzAtL1GFqebLSJhgQwkaktp3Mum",
  "key27": "5y9XQXaRQTBJAQZw8GTM2a2Dyg9KRmByv21Rf1xVCrRcxMi26gJQrGHqmC9LNbc5A6sygKHyzRXB2V11vuH4dKGr",
  "key28": "3WYrgwPDXwzkYxuwRxxbhSV3UvLL8ToLXeLeecb7VP8M1sdUECSXxaV82jUv9oj3wzbAyUQ4Y6mVHe4gCyeJ5o86",
  "key29": "5FoxHebY6iPwxVtfz2VGBKhNGKpzQ7DuZyABWHX6mgdZBgV5cHSYbAoDwm6Ee4B64qqMy2TZpJwSdj4yuE2hEFCs",
  "key30": "2miSRy5R2z1sdTeqL4rr3SeozNQBt8Na81K9pV4rXTzYhyJ4VgpPZFKbShmCYPb7CyijKPJekCEx42w769XzkJNh",
  "key31": "3NrMZRPNnS12BcwM2QBzwa3WoiMNxC5Vzy6dYUmMRowJWj589C6PGTc1mQsFgQyMGXVLtoFeuU3o4p8CoVCUdbaL",
  "key32": "3p8qEpdHHSeYWEjhkfNAr2evm3Yyy9FBkUj1RtMKisgyyRxA1PnZ7EuHTfSZmcfqmHrZENjZ4W8YqEKMLmxLqq1D",
  "key33": "W3ZLjEsUXJHMxMYp9HdAcuaC27rRS9Kq22x3VCY1mLSaWRqCBd5FYW6mnAb3r74tka3BHPjhkBYd3eBbcTcCiue",
  "key34": "5bYrj9KSZakU1EqJYJ9sQhpctCwYnD6DYvuZpEywWDsmdA6umA9UeDrvPFkSPZqCCpPGGZUooxBNL1i6H7Y6VFYh"
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
