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
    "42zzRVygehEVkPD2kGrePw3vgZAbFLSspMqryqLsHiQwUTt7nxSHcNyuYKTwRkcfkAzUBSYFPSM1V94b22J7DFAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpEHEj7hJcdXbxLRsz1tDJopz4ye46t4Xhf3yQAYojYcd2BXYNmEt9E4PzKk9Z1JyWBVgthMxNywYCqf1oUv23u",
  "key1": "4eY4Dp8TZF3pWTBTLPwVQ9vZ2E5rTY5K4sWTur7EgDdWGGxQCFWYUJNDtRjrvaavGQ5ZLz8jaUa5kbdEw6x9R8hm",
  "key2": "313nUE12x6NPnXYycQyYX142gQePfsVGsbD9vaTgxFMkSakRERbXbXSG65aZFKP7vjr7FvZDKNh87UnRjwMMoBrf",
  "key3": "3pJQtEtBFXUiN5wCEb2zDMe3szy8XzpX4PGmifZbqZZAtwnQ8F1eCgpiBssiVW5besBA3ai61cFgi6gNXxh8RrTj",
  "key4": "3RzkvbgB8g4VGWRcNtHcRyXPZMYchUo5AH2BgGDSbqjdFbc2NsFX1Cc649NVxNHZeXSWZgQycRwvNVHj2jUdi2HH",
  "key5": "3692bLVCkG6R7m1ztiG4g7tgMaQTjGs2jjFxNgpASdsjp4AP6vZqYmZzRvcrohmstTaNnJGtFv6fAeaSsp9x8Yf3",
  "key6": "o3Xpx4N87gstkz7bLwHverdcaKqki3tASAcDUmiXR66Ssuoa7C8nzZ9mUAaHxUPJgvvnKtn4SGFSLaJCU4j7G5W",
  "key7": "2eyFvYxmwdUwgokcWQ28tkXkZMarZpb8ZKtmyfijNATky3XfLTNsLKWRh3rC5fHCjNAo8zSL7ojmdSr5Pyq1bD8Z",
  "key8": "3VQhfS7FNZfTuL8BryUygPGALCj3wmkY7B8QJMCe85NwWRtJ9QDJMXJpKNopqiPadiP2YBEpX5L3cE1MG8t8wdZ9",
  "key9": "ht8da4KNgaYqdWTSpvPoBv1gZrkdTuUwNE2TqKhKB8F1HgFAUswgHn9GmsMTviuJJaTk5x22JkMFV3oJfs5pjpi",
  "key10": "3JefLov1hQ4cSXG5jfcmzZGXzaMyG4najE5uZsHtMwoUoRYConhao35gkDcy4djNWqsLod6G5vrm8RsN1yyW6FRD",
  "key11": "4DuQh6MLi5qsQmBS9w7WShr7ezafXgggzGKVhBKm5VLrSQZz1FKdborfr3s5KVUQC7zGV8cJ25WzoGpz9WrQWuzG",
  "key12": "3oZxZCzGtYZm3BvPzAHz2oLirgV4uJZUDpfNKWWfqvq4sLvX3SCUYys1umYwQfHwwpYWSNCjaYkbmEHa4ArmkLJB",
  "key13": "3ZYN1SvLYkBWtSkq2F9BF7JtEPSiJWPp1bqPiAYNpe53kyGRk9BajKYwagAjYfg3zJo8Tk5sbyaEKsBPXXUxF66f",
  "key14": "4JqPQAeWB9LPPyE836KoVQAQN32aCi4LoVB4PiadY2eExa6Qeb65PMQ29zPrsxav9nzJCB12f9mUAuw5gDUHAL9e",
  "key15": "GtbR3qefMKGL4vAHytRYvwkLGV3U9aH6cwSqJ9i9fjsUaKKTbfAp3N4sHm9NDNqQdtAFUjzGFN8NvjSzB72pWXt",
  "key16": "5GCVg8t6P1f61SHszKrNaTREmnE8wLH9NUqknMndwSivv2tmi5wiP395usUdQQTWneUMRNYT9AUaU7t7nZrMLoRi",
  "key17": "ssnQFg7WwYNGyp9YvtjXo654Miq4QnEpeQZmTNV8WWfwGgcGdggDKUDqwuJMtFBLg4h26oHMqR1iNqVFbVzxWoP",
  "key18": "4BGVjhDsuZkqFDwfUEDLwwjvhe3S1gAeQMs6DxuqTruUPNUFZLmgoqNKB4kSU4t9wsJV3iXZR8ZnkebvN8r2C35a",
  "key19": "2GJnk8PYuGeT13tAVG38zhEmXSEio2xYh3mF1dNwt9vhq4itAsYgcHqApx3rLEfSp9TRj5DeoyayJXd4uUFq5yuK",
  "key20": "CBKzmLPTUma7mrDecNhQeft2uNMCo2p4Qb3C9pLdEAe2RsbEGGwQ2WcojZPNWxEpBHY6d6dpuukMyYvtRf1ERXJ",
  "key21": "2jaSmHyc4qXHUVgQrUBHvXXc2EkWqmTT91yL8NUy77qHox7o7DsY2fvEKqwe6MSmtiLQMLpJejokM1FcMS6cVjKt",
  "key22": "29ZWJVkVzQERpvAM6cUQV1VP4sAr2qrnkMqPTdLH8VLQw8W7mcDDqoxTuU9qPE1GoLqDmqdwqEG8MwSgowu1B3AS",
  "key23": "2u4X5ekoZXXbFyEbUQ6Fakrk99f5gt2MKu3rFb8FqymvtSLzA8iiVsLCw7Jn5xGXNpt4vzomfTqviD4Wq5Pbq4jp",
  "key24": "5xNCD9T3BNSn5rd7mvG5EhhQR2eJ8Lbj8bg4befyhEWRaFvpNtqP5AUeM7jarkvGDF5V7muEozM99WD7GfTR2KPJ",
  "key25": "ZZmC8dWCaYBNDoqmatSSMwQbQVdWSByccD6B1Ao1psMdFvY3mfPTqe6q2ZgXaLSDJAwWE9BhkfLcPwC4sUJ4fik",
  "key26": "4kHjyxNdkNA2rTy8UACRawm9HngmjnzCVRDmrbn7BGn4ibgM6KG49b7FLAG4U15YsAMRKrarbD5KpPfd26cuytSx",
  "key27": "5875fA38dtXNf7wjn5nfsaE3ph475BPtAZoeQpGsjtS5wP1zhmBHtYThpyf1YWyfuUD3PWS4Q3hCb2UNRNwhDHDs",
  "key28": "2e4T2RWwNdmcSHwrRT1VUD64CNKCmPdSk4C3PxMC5VwF8mnAAFwL3bLqLsLfjw1Qv4WtNwSiFtRbbAbi5pBt6ATr",
  "key29": "2n28etZqhbtgXdRXsPzDE985y9k1XDkBeDBCSpJbn2kTfgTHSmcKZdg6u5NEfaHj6AsMvRxS1VxnMgLFfUkucxNH",
  "key30": "2Y5FvNzWkBetKfeKThN2oCTniR4k7LyUfBytkC5jjoPEciVzEzNUnD3VvPQe5gfuazeZXB6SZk34z7TsqkPyUGZT",
  "key31": "3LusouMDtQNiu4yF1kxYzacCobcd8rNbbkXyQgNtRaQgRsH7qcEixEFswQLyC4b9Ve4himXtcEMUUCkXryVvK3Wd",
  "key32": "3QvqZvFeGHCT4AT1EHxVgLBBKjkD9Gy65L8ZLbchgpqDSLTjymDRWaVjxJZrBjRgjaSsXJAwbv5UqQ2k3PhrHuVv",
  "key33": "5CqL8x5xWSG9NAddZEguXYvoTjvptuqDvyqSZUAoYYUiAKpZhyc7XrjrSpeAFF58hNfgRfs9TNLXbLrQbFeofHtN",
  "key34": "MFyU27e7FUH1LP4nXiC7BozKgq9htUikrn5DK7zaGjMGHFLZ59EnchgAZvvC7EAG6nRzdP5skHPYqdBRXtaLFb6",
  "key35": "5up2B6e2SQ85gDGUoEpxj4RAWCft3NU9Tf89fL22k6GpB6qEJAAimXaLjoz88otHYvrkLEjcLFrs2bBioSu778ix",
  "key36": "5NPiazCQ9L2JaLWMupsLGCHJegX3iwjANwP8H63eXhovPTRzBWzBv6DLfabPezj5q15w4vKJ2bVjvExmbRQjcSck",
  "key37": "5tuuenf2qEzYgztV3UHm7n2aSGLCyXRhAfLQDDWu8F9QprKrJh4F3nWi9ZNWHsf6UCJYGhcwfTGdJaXEoLi4YyP5",
  "key38": "5ni2BDGaWsFheaERrwrk9oPuGtA35Pwmozb7NgUBfJ8z6V2n6kdaUVsRkQZoU5F6ye1MSXbr3V8AxG6DndiVQAC9",
  "key39": "EmsHsHRvF6mMtvNHWKHqDN3rL3nYRuVL8By7GocaWCEFuQ2ryUkxaqpRjfL8xkwnudqUa4omWfsE7oy2Xng72XR"
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
