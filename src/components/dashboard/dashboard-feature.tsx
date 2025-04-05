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
    "5ijH6tivbj5PJofSz8sivRK6SDp51cx4ppNKHskxd11yYL6wPpYEaeK4MwvWpXnUA3ZwfHT5f1PDL4qGdhcxUKbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beDtXGy9XKtYtwbdSBTY79593aKsRCXwYsLWTQsAnvraUBsHvzCKjt7BndeysPPhvsM87pAqKJQg9fXrigCVGKC",
  "key1": "3dsrSuyW6zDe8USG5MimwUDb6WXmrT6feXrgBvFZi84ugYX969rF3akzd82yKKUUWvyWtBLXEVsqYonpiF8YQ1KV",
  "key2": "3eLavuMzSd6QBGRdT6NyeHZqM245is17Wx8sM16YaZqdXc7uXp5pePhVoTht8C8c4pmqrxHEDqgBR4c7fXDkmjUw",
  "key3": "sJsJ1EYY35JgBH3RBKbSoxbiJuQbYitSZJCjqnmrYonf2edm9NVjhjM9w4Ykh8ndJ4duVMwAqZSLLuH3ALUJusL",
  "key4": "3C9r5xmd7k5aJawgE4WMdk6GTn5KT7SLajMohbiFq5H75d89YiSGTwDSgCzDVnX44945rgFHRzsqxMHtPVLXK8d",
  "key5": "3G8X6NwbUZcTEYKkeTSGcLsscuuszeFNLiFH4bEdYmN1BVyxQ7zz9AoFhAS7S9TMng5vK4qK3Enn9DwwdbtNqrgE",
  "key6": "3EGCW8NcvJkkES2MEmWrQNNFAoq6biG7TwkVZsXwUXAR7xfWArvnuh8YjcXiLuKou7gAqNBpJqeobkou7v7B6Qij",
  "key7": "3XfswwgoMYYb9P8HFUm9RuH6RbnbWNjprMbwcq5i4RniQzM1m6cusxmpEmZozZnKSHqKdevainVKA57SuKnSQPXv",
  "key8": "22Cr8dvLAw2fLdnHM3caofn4DzdXUniVJUsg9BfhdM24QfZMGknVwq1dmgAoWRN4ChVZ5LwgRoW2NwCsmdq6tysz",
  "key9": "5AQ1LSkATb7gitt6WaNTVeoBbCPMBqva5uNXgvgPJ2UawftV3NGmDGLWtWptudWR6PLT66g4ANH8YXuiuo9PfbcD",
  "key10": "3GquGNJ9wDb8aRx1i8zDsGUtY1Ee5dQw5Q4gBonfg9rg3fGq3b1aW8CPh9bTRcwud4ZqYM8KFoFDcnJ38vxKybPi",
  "key11": "LWY2rfbULBB37XiyRLvYENCnrFJG7MC3dSa4p7Ege5t8CYFKbt3fE2T6UaMtjZyQtdCmVLksiq1MCibmHMervvR",
  "key12": "4ETwWQxRD6nnpSUvD9RiHE1Xj6WQhcWNDt9xJktb1uFBAZuigLbeoZsCneFKbWmSZQR2MjvB4cFpgps7NWPaYkAc",
  "key13": "3sPobxZ98MSXehKYQPy9W7uUJ91JbpkWZf8fGEqVSffeLGBEgFaH1EjGBhUw5VgPGYSp96LS6K1SB23YME5bg2Po",
  "key14": "QC7RN3J4qi6T9UQoHDxroKPR96zgJ61JbBqQfaWZ6K99LpfvjebBGAhmcTTMZEPa5hsahCyMRmkdv1TNyt88xZv",
  "key15": "31F3t2ZRUEVHjpKw2ZhBwNTArxFQ2ViDYc9dr1akUtABe6LsxQk3zKh81cxMJZFJFyspjRb54Q7Xo2Ypg3dBZwwX",
  "key16": "526S57oduV8E9kufNqLDhdBbmcwV6LUDEQmbSREVLdqKpMr3gDAEZotZgrYYxdcMPY4EauepuPVmvLvhxyUCsLSV",
  "key17": "jRhD9zyixptpWaP3g5Gd7jgfBfSzfmkWDjpMapiv3AuNwDUP68MDpMeqQDFBDJbbcA7BgEzo3xxPCuyg5W3BZit",
  "key18": "5v75VPWXJC8K3v6RZhSV2tLv48NrnNHFCJThXp5GkHJ94FWcLXkNKbE3jgFrHHAB8XReQt9LtEddKUiUhz6gMPPu",
  "key19": "5gfWxfcFoWPXrerzKwDZM1gFKqJatZZF6tWAEm2iJjmZ9nT2KtpbRY9hPhaLroetB9WdY1PjGrkcnpvTWUieFTrj",
  "key20": "5qRWrSiHeHAyDtTkhezJg4Xkq18PWCDUFcGvNuxPgDx7B4ohavZyLRvKV9X1kkF3S274C6WnVdF6UEDzp7sp9w7D",
  "key21": "57b1U3NyoceEpbGs9cHUBWoWPiuFSJkHQvbmwfWSAMquxFkeJN2F1D7VJxVC6aVEvmQzqCFoxm5wcbcf6y1rkYf5",
  "key22": "3U9xxBid5LqeySpbHL3uCm8ZJz3pzp6Sm8kKTcFKGWuQZJ4SFTHLW7sG5fBhqyUZXaugV1gaq9hZ8W9FL8yAC4q",
  "key23": "42UaaEbpc2W5FRAupqLC88hmGYiEEhLNEEzCvn5RquDj6uibLbkp4nn2HhdrPkN648oAbik9ErvtEr1CsFNFRhNY",
  "key24": "poq7C2Z7LYCvhfTupJaMaQ8TDrVuRqKBPnwEoYbiFe9opCxRcE4p9cnmi1TrMKKHFco4bzfmVTTc4hDHtgrGEh2",
  "key25": "2X4zHXDfyVvnxY8KbJxxSisDbT1rv7mA1iL1trQksheLsMXW6G4U7qes8ekMALAjz97zGZ6JjHYsZAKJMJmQg9a4",
  "key26": "5nkiobaZuUw5o2DDjERDnv1WGmoaBAXF4xZU62dviKA1NLCuHgRQm9RygELHwVjYgqCMkNKknz4k9TaKJtsk2LhT",
  "key27": "5Q9FnHj7aYf4sfVfg1umuzuMTC3zHHQR422F1UpcC8rrbNW9EufbLJCMkpR8YoH95qEHeGAC6gqswsXqwbXJNEcX",
  "key28": "sbtPtUtWWTBqZ3fy39Ndfw4YuHJYXDLoD4TRAEP6oeFZxnr7bSgnWPTrrKbx9uepTbu14zYScetJttAarZYZPxa",
  "key29": "44UzheZp78AuSYmxhohHzfzTJVemfbf2Tzj6bKeYkyDQyvQ5wUeiVyEN6EJbXxj5me6tma5q77sxHkJZwxr1UD69",
  "key30": "616rVU8vD5DX7xidHHFD1RXsg7r9oA7faQynofvRr9iEKVF52r2cN13WuHa3aNd72YoGzfNkpUEkuFxrxv9Cna2Z",
  "key31": "5f1omtJuPERD4dyH2oUPKEdP5EbA9LvUTqEqMmibtGqdqLE3tDJ2Qn3QqkJXiystaJkPMh5Nb68CMSv22YcojQ5E",
  "key32": "5mD74n52XaynXco21djkm789THRsXi2nDtbAPtPLe7HYeKL5g4YxNwsGY3SASnZUJoeiNo3wAstHTbow7j3Pf6An",
  "key33": "jpGg1eAPGcgwaymvVMRLCyMKeRm5MJRLS6eXLYaUsSKADXgk52t6YpQyW7gpBgdWwywEPqiCZsgobSJx5VQ6dDy",
  "key34": "sB7JrHaRVnUMJhbaFZpEHRYqNv4DgA3ymCKSv89dztEHkGx1Fm6JUkyaYyq9sGdYX3iP94Vpp8UUN4SBiJycH3M"
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
