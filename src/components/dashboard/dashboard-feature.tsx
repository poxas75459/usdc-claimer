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
    "5LqMMpUeJEYhRQVfR2rrLpaxTU7zYGv5skjk1FjgQktN6M2fAZWeTaG1HC7MwqNHbNtiXopidPuh7LXfkGjzjGwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23agspHdRR9oS3t9FdCDmw76QEFCn4rAXpw5NZw9ppjCGVKFy5w3SMrz59Qds2VZbApaG94aXzuR14D9fRLhutUX",
  "key1": "RCtwAgAxzDvjQBk5Vg6vG3KCu4JAvpMCiLXtQs6rmZoQPT57PNvDSp9aPfv6wZMHGHyFYXM18ixRMGpAQJeSS9g",
  "key2": "4QvHwrQ77nUPegkZvEhMuHT2fvQp4kyLNWugpoNG3QoLNWm6ZsvLNVhqNWxuNeKVvsF8gLKv59xCcgnbQowzCZPm",
  "key3": "53hiAEH49Zzcpyv99bENLUz2g5nsNMydy1gvXLLmL1KavHzNycNN876fjsuQ7rxnkCrT2K4RYcPcdPZAFbo6JG2T",
  "key4": "4kQpbFrVWGRQJeW3kR3Q5DrrudetmWY4gFhyAe4KEZf9RA6ACps3ZhsyCGVuJCT9uHa5dbrMeMSZLqdrCA52YD6X",
  "key5": "2iAHqMN6YW7BMpPNwpgsXAaPCE3PWS2ATTnzD3gsKFHpdta2G4qguCHPbMnCP5CFJocshG7EfuNH9ZE5nhEcbhYo",
  "key6": "4ZNPFKKHBAx4hePF54k43x6gRmNjfZWz7pnPjk2beQSvJW2cFxdtFnSYuZTWmLPRcTKtH2aKPxaEx4aij582DwhR",
  "key7": "2s7MWrtspjY5iFh52AhXnKDC4oPxKhBBGczRWFkTzgEQ2tnGqiYSCXKzqNpJFzjyefw1zhKT4A9thpy4DCcAWnVx",
  "key8": "4zzvR3Qn8HsihocUNhyw21QZ5AsqvjFNCMiHab1LTeXd6Dz51wzrz2PctubwRzNgCopDt7qkhnw8Ucn8vmxZUdpD",
  "key9": "3DKSJFvth8quCjsk9xuPNriWNG8eURE5sd1EUDuRTecynn61XaKVqZxXb8PoUnhJEpWgy53JQdviWvMvnwgYu9nW",
  "key10": "5ZBvnPFKx6AUwXu5jjdoyqH5amWtypAkAU2SrmUJ8KEETqGrY8N9idvqDNffQPn14qxQExfSaYyZ9oGvqbqCu55R",
  "key11": "4qRLWKyHHKB7wKFdjX9zSSEmLLQGefiMRTgBZwXKjkg1fFhVqoAHUoWXc6BqtqFnDPEoH38TvegLmasyrof8kcVV",
  "key12": "5QrNFnaqLjyddgBsjfWMrN3rWbepkEagdCRrCQkCgn4tC9wzvMJZDtcdDeNCagDXCWHkNKkSNYY27FVLbTkN6doF",
  "key13": "3D5syHHmj1zMYn4SARmB7LWDJdQ54uDB5tbeACHRoT2z6sAQFUan3Yf8KGg4qHt2jJzGCynyZEpVmjigSVcYMyCz",
  "key14": "5RhKZRRhvkSBKMrKusWp5oqST5Gq52xw6EBykLrpyTHbE6yANYnQzPy7LwNckFaUjiktSjrUiuSkFHCqrauVDMn5",
  "key15": "5k6tM4ePr5bYk5Hxoj3TrSZiVz2TJps2Eg2USm6KeMrC7ojMvogDcoxz8wA7EEwbzUd5P78zaGxMh3ZtuJRb9Vf1",
  "key16": "2dPDiQxhn9NXkCykUcZCxY2Tuck1MnfnxSwDCERUJCKKGUsuLz75NA5cofxpWmic23iDA6Pt2xffc1RZ7J5CUQ8J",
  "key17": "45Yr5Z4JSMLaEZYgARcjQu8mXNBc2hHS6BjHDJodpBQ2hcABr4bHGskE2fpVJMmEj1P9Cpqyem3BMagDGdZX375P",
  "key18": "2g5zX8oG141a2SGvQE6BwhEkf2Erdzoamw51QBH7b1EzjNftEtY1j4oUrxeUU4d62WYC89VdwD6Y5UWV8eZshpyd",
  "key19": "4TCRDreFey1ocF9PRuxVTkeGhWWDrhkCeZ2vxeZkg5wWN3tDvAqMe4VZWwXqECjw4mCq4at4MZ5M6wHmkoXe6GnW",
  "key20": "5rYrNXn4iuaL99Ad5GQ81oaBJ5VwcEdw8sQmUg74tfkWWxYdNWnmRMbXbwHGumSzVBHNze1yfQytL2iqT1F9oiWm",
  "key21": "oZkY16hxRskdt1xLzgCkVGMwV2NhD9PF4ZcyTEcsMhBV6q44cqMvE57fj6YShhRRMTsxzwms5y5ny2rUMjJCpp4",
  "key22": "2MXbPWguA7n7SfTRM68tPForYHVP6dtTrxxj8MxQjHT9JAR1vptCgQSRqypvrGqWANTJgmzgp6kuATRnBqv1uJAZ",
  "key23": "3RxTXSUAaFzFgaVdnmXBdruE9hLXATqLgxmAr2RrLwDwHMpbgC45Eg9kQrXSENzS2GgTGKfyuutEgJ879DoNxiHR",
  "key24": "3CzyeNyZyJxaX3rSAYHXzYFjbWhxEQtcfjeJPZzyuHKs4qFUCRJ1BQK6mUf9PsxzmrUUo5LGxj17onRZnAfrBVwk",
  "key25": "37UdPWdipvUjoh7yhHG4W4szqVXERGVhuCitKSv2shpkhWuuTCK7m3LBzprnZcGEbgrDyirwniN1TDFnmveayiH7",
  "key26": "Jh6PAZUen7rw2tYKHYXoaeij9FSjeCo6ZApWZMNzTToFTYVuXajFtKQhkfV3PzycnpRZtxXrwKKQhTbhaRAY6ad",
  "key27": "wKRy7gEqDKpYgb1zs6HcqmJwH43ukeQUxMPw7agtmwKxhEBudvb8TjnSJSv6Y1vKL9FCQVm1p7jj3ynjR8qQe91",
  "key28": "dPerbumhGfYv6MD4ATD7K4T66wkjCQdqgCTxrkWq5Rmj2BnuqLDguzpF7u8EybNEDBui1TxBc2uyBaqXYF7GFHM",
  "key29": "3adhb4b3JzX11Ef8hq3J8FAY42fCY3QABaDbNELARBn79rL8QjGuimxABBa65YtGEHXqDddteNhvZeZRjFuJgfYk",
  "key30": "5FkhtZaBygGJskmw9uhpQpVnWfu3bJkhHBNE6vwkbopG3osioiar61M5TY2qiSxvFUdPHqdLJoDMNLAE37RXR9R2",
  "key31": "F5rG6SYKc7JPkmaqky4no8NP9w26GakVaduwCVFU8gev3KTC3XoCdpcDx2bTburoyk539pQM7WxgLDuc7nTXWv9",
  "key32": "4Bmfif6MfiXeKSGvDrup18PpZpcgjf3rrsQoC2Xonby3YwRhwVQNsHdjhdSmqq1ozX1Ee7speTjiMMPFw6DPrYnd",
  "key33": "ZSm95c1WFHqXkDhcoXpt3yrJGnNUQnvy3Gd2XqAcZkAWcSnxyqxVSB9qauN7Y7LvkKgi7C6HvbdUbEx846dvEBX",
  "key34": "2YtoLiz1kFiUHeWVJZ4CixmnLc3NhFbVy5aPKJjZCiXiusDSnGahoKmii7zkULyGhaLQ2S9vxM6RkGkbVfQRN7eA",
  "key35": "4bSFzCX6T3shnYRFizbFsZHzus4CxcgGufD7aTiJGsSUNQHmSVU2MzPPS9ST4skEgLeJp5xyrmYkKsxuNqABxUf4"
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
