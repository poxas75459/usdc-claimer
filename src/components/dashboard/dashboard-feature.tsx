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
    "4AhJ6FNnRAw8brF2kqikLfXrHQg9q6Kv5PLbxaGDd62o5AXu4FEMM4Bg4xmK74YppULLNWLHG4foQRMDqTdTsow1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPa3wX8kRK6dP4JGx4f4w5SZB6EwmrTWe7hQLyxYJFtPMqN1sdGsuE9nqwZmyGcNfY7FVY2qpPW4RswnX3aMoLs",
  "key1": "39xmMQBhATGd1tUAHYWp7K4MVMybTj8pQ16JWiy4aNDmQtQNkhtiaKUUfvHB2HgZZD86NPUogZrq9Fzf6MC2j1nu",
  "key2": "53bxNEubb94kaUciScaGgg2MYP1rZ58uV8NDjQQ8266mxZT1bWFdmW1arQNDvsAkJ3SvZjtwa6y6wW8DrTeCfSRG",
  "key3": "2eCLrgN84N31U12s6jxn78VFiQycrQaeMC6ngreen17wHZiBwGcLpHTNuW5AnDZuAUcwfU9G5ii2YbSbb8fExn7h",
  "key4": "5vVjoPfaZxi778UU68cNjuTpB6MVaHd4sjEbGgYqJrVpLkp8886ByU9bdPYmim62aPzdjk2AQFMbkBB7Bfs5mdPc",
  "key5": "CFFmzEa5Ck8RnRh5f43UUnanYwgV6QkPTVRyRhw1P2b9JJzi9ay43VFTyn5KBuaHmyqma2ck2u95SW7i7whTHm6",
  "key6": "Rh31Wgy5n7BKQoPGxjim7X8v4C6PQG1vGJQBghwSVbRGmw2UnSML7tUf84AMtRwRhYoSbCpHhpy14DWyJ8AM6nu",
  "key7": "5UyVtTAHdBHLNZ1P2csUFjbCa8C5ZTyAmZPJ9kj8TYDNFHxLBvyYX1x11Qp8sVNngtowfA6VXrkSbGrDpVgrp8hm",
  "key8": "3eTbkmNEdj27wREHiYqagQ5ectuLqc5R7aH5WqbYgYtZyhHbzEvD1EXnhVfVfhmNPVNxnz7e4GNu59ZtunmkjNu1",
  "key9": "fRSenp3AKaM1eM7Yi5nVQDNY6McVLVS4aEGfTBhJh8UAYZHgtqScrxJHndovHNi55r4sfX8QxYpV3uBhG4Rv1oR",
  "key10": "64x4MCc3WwPm36yBD3ZPixuzFPYmaSZbL75MYs6sp6GeKX4o8L15vu3CaVJVkyfLm2DXyNKmbBoyFCAXUrV5bwj7",
  "key11": "4vXW4SFJbxbniwmdk65JGkj71uZEgaXmWbPZ4BbJ9qPh3jA6rJ49QseJ7a243k2bMJABEiz7cC8QT84zvP1xkCbL",
  "key12": "2quPqvFxFQn3JfoqBLrmqGKY4sDUfHFXMmyX3sR8qk7H83JdsdpMiX2GjeE9uHRWQ5teCC9JYW6nqhfMNPZNrKcp",
  "key13": "2MBbVVBh1sewx9nFNjEbKrDf8H6GYeXwpDWmQpsKLNWJvXUGxeZCQxg2emNSjnYnpGBKySoHoPRE2q3tY42JeEou",
  "key14": "3L6MEU9rYgfr4zPVrVXcrM9RiFww3MhZ9DXoobNRKfXmqNknZfNvkJnr6hjxvuYrgUJmYQKu72uNM88RSoVp2A1e",
  "key15": "3BCoYaNp8NMkoqsf5UP8iYVhemiPhtRukx5f2fngjW2U14bwkdj7g1jQFKn2MyCtLbxTfQEvJemBSHvaxphosvzi",
  "key16": "3WdQJAEmU2pUC9Z8W9FXTXDgi63VkXnL148pznyfKa7Ut2W4UFjLb2jYxkLmox5jULCQyN6wN9MgYiNgVCmYf3vb",
  "key17": "5hxeJmsVcnadwHRnPzzCWQtZCQmFyhid1HydPeMVVr7cLGjpngp2btKTPrxLpr13A2aqgxSWL8Hf1qPjjBbp2WuN",
  "key18": "2PMu6VHTc7b7xhnkkuZ9msKpZfd7EMtYg1tfhU5veGZyQdiPGVrDPBZprh6Em2h2r1znzVLmkpXstE7AXSVXBdrr",
  "key19": "4nRCuDqyU24fFGAz7CXkLf7TiwtEQLt7KbBwMBQ3Sg2okNyQYGqtSWjyNvFqcgso7YjNTRGuwBrZp8Aiw9ysCS9q",
  "key20": "4mcVzobk6yy56yqf7d6Ni7GiexXgdEpXPmn25TTtUL8sQTCx5jEVpxKysd1MmkSiytLsGPpd4gND8RKREgUHVsEn",
  "key21": "4R8EMbuCo4gsM42TJkqPNQfGSzXM1Ydw67mhckxxeMr2AYVmU3c2kpEDLkVE55iNqY1uyFY4rSt3mwnmap7jgsvM",
  "key22": "3xFv5hPFqQTriR5BZPJ1prWvCPqPz6vg5PbS5w11i9cZVafS4vKbH7ZsNo1cMDiC5JBvKGsDtxyXExdPKe4nDmsc",
  "key23": "4BnDYUpnQeczh6byE6EvrkhWGnQFrM4tpuMdfCrmJh74nQBqGPCrHrfx98YrWamLMFezoDBVQ3X43qbPUraS7r6",
  "key24": "3ozLjqnaHtcKb8kYYr7wdtnbpxxdoeMHQ9zVfsHSeKLJkCPfRtPnD7ndgLM7Xrj865rSCsqBNyeY9Y5SMXJ8Dcoi",
  "key25": "2rKtAF4pRDAVv5VR6RiQMZ2uFxhSY3kK4CybD1tUWJ5SKgPdCsJMoPwmPip6xGDccXAqfN2a9gX6W1b67qgXjTXF",
  "key26": "5xyDvaze849uexu31H5662TRUhhfghJvRCbfVGWdWdcQ9wAiu1BSiq5y3dbAZL3zyA5a1Kh74Za4oDizdMfy6yFY",
  "key27": "4LZ8B2ZzhXsmeRDBbR3QvavnLS9JikTM9WAn94uRt9LWdVvbfaackFdZynXH13hUH8J2cEgSzHY3j9asi4Yzzoqs",
  "key28": "2cR7StxXC4HsqjAcgdpnNDRH9V51QFxQYRmTPaYSFGxbJrf6esWPAi6NKLfnSaYtKuStefZ1xBG9FoXs8FhJHUq4",
  "key29": "4QG6Mak5W4tU3vA4d1XAiNEeC1t6v38MAMKQAncCs1FDnPdBeGqLnmAaWpxZyYsFRCvin9VjbZboZoKPTSqjSJuZ",
  "key30": "2qohxi6oJuXMGhGGKL7KK3eET4NpdDc9rH3MzFWvf4G4fzmWznfFMiAL2GmFgCpZQdRcQMyLrQTngauikLnUNeme",
  "key31": "4YZgpobtLFt2JamLYYvWUv5jSZZFQhH7h4PutjxMhKGZz4dMzHpskhgNK6dkZp3f9ZhsFxTX9twBDLMiLXZziTab",
  "key32": "3PQobfwdMafMWzE4ar6JzNsfLarx1otgvKjURpact2q3BdpMwtJziWFs1PbYWwNuiSi65zHpHUmJF97YxmhusS8S",
  "key33": "64Z7bNJZEaiPY2CrfSf6BEGaRk3wEK6mXRgFToQ1mrkY8yvDVL7qgyYmKLvvJX6kGzNREdUfV7F3VABJnUgqWEmy",
  "key34": "5YRb1F31CraWumC2A77cWfTjD9qtmUUhWZJxVtiLiL2qYc85rXVbnV75uy5jkSgXZUvNQitoVsw3MpEHUw8mJMJo",
  "key35": "5PggEHf1fV9YGSp3DNuUpYEkAKmMWHp65NcDGrxRttQCBRfrqayNELxHQPGBwkJwVeyUFbnUk7dcP6ik3dBvU4wU",
  "key36": "3YDUcCLzfmyv6JVroheYTq7g5yBV9fF7UUGZ5VnjTLirURyhbYWnbZVLh4v5258pEzMKKpvwoUhizj4VRn3V9Pe3"
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
