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
    "4XTqv82foARwe1Mqb5ZfqhbyMg6WkNgZKEiaubbw7gS9k9KL8FFNS7rgPJZoSeErF2f9JaLd9tdWpVTrdGjvhez7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Qv1daJKSCSj3Uo9QCwAMHqcRh2pCwNY1FZ6UT8NPYXSuXAsZ7o2snU2ZCqW8ziAE1WhhypgdH2K5ZudVTNmXB5",
  "key1": "5C8PJRQ1oa5Py94GduhUBBeVYYNup4Zbs7oXYo6iNDXQdCrMXEMCQbHe6LtWozqCqjiwESBcjk7YU2T44JLXAHEm",
  "key2": "4ja4aaYBhNw73gZvsafmmSANrnwtH9m3S7eZyuU6pdY1NSPdHjaxxmxqdEYNt3JDyfUcQGVqNnwB8jx8QZQMe1Tm",
  "key3": "5LGSRw56D4vQV6kW2zDVA9W6RYUxHLKkFX1dbTCzxE87Vjwru9N3kya7N54UrwBo4C8p3gmrbrzjnsLZJCeXPPC1",
  "key4": "5kB4ZiRpzRMtzxFdZ4P8oGaUw6wrxRGHw7DmA7DP6CVQS5WWMRWjbGy5hf9KHysazfgVcPdM48RqV8avzoAFpiHL",
  "key5": "3ifLg4t2xGzQFVrsCqPLhzDH7ndSRNaJies3UnkfBRoWmaVp4ShS53HPpRTCoqbFGCpwJmqhod4KweV6BvKwMd6B",
  "key6": "3cfb5EDMb7E1owAusMGiRcYPrtwqSbSJtpVHNHdhT6LXUpYkj5EEmCvaWweUjuW84oZ2bGTXx5CyadokLePyoV2u",
  "key7": "ftkWdc5k7uuotZp5osqgzZW68EqT9fQajwQWbWxxTeYxkXZsmWhMayQUaFCw1iCf7fmDJkyTHv3bW3kL68GYdWr",
  "key8": "2s1w3V3vZGKu4DfRdFZSbcMo9g2MRtcDG3prKNDBfP7yB68R58FqZ1F2ENzDxj3mvxxCrbpJPpAAVCPFvVt631jP",
  "key9": "3bAkf1noFjgj1yA5iRztfz8GCAHRmHMVAJQV42ynZ8ZujmjeZYMG89Mo5FPfTK7JCuVCYuh9kAeibei73Rak9z42",
  "key10": "5XB9FH6eoQdvwSgo2nfQthV3xdihFq8GqHtiigpsza2nCico4zRWWNfpogMNn9afJYvbLfeWCajbP8pHF7cDZi8U",
  "key11": "oacPMftEkRq3iZMQ1DLdRLnYK1raQUoGAY6EvCPqVfSM5PVbAVjZeD9g7sgtqtJpRYpstodxdpa2SQfzaYraPzb",
  "key12": "281YCwgqMgqnFEyAjuVADLYHLjRqnhPEQpMUBiMKDUM83BJQrB7pu1neLTePV2VgHJvuQhmZ5kFjGNDVr1anStPR",
  "key13": "5nFiU99xbsJrJfJf6Rck5cwUF6uTNbehPewRnkaZZ1BDuNoxgGV2nEoAHxj8t7vP9zQXLCeadK9EYC7MKUqxaDo8",
  "key14": "4wpY2FsA4eS3annnM3bk5sAJWdYMJetLo8ePbcToNtYnogbm42s2xtzd4wuUByvbpq1gyKZ5bWB1T4eNdaqgQ4aQ",
  "key15": "5xjjYVyKceuHkCjVbvVJwHMG5rQD5sMqEKmikGbad4d6ScP7VrTRFtWKwY1ckav4RBu6wxdBSMJ2g5H1AEYoCKmH",
  "key16": "5Vhw6qntwBcHMdXA6XzYv9pT3b1toxVQo2xEtywevZFERCQZyrbBMvNhPvra3L8sezGXSs7MyczKVpUXjra6sbP2",
  "key17": "652gjqqPPSuuuaXxa6HkQrZFJ6Tw22DysT3R7SajG72ojwxugyhFCpBSs1A5HiepPLmjq3rbEmuQKWFVtgTkwLJk",
  "key18": "18siKatjzyZ9xhe11QctwG5u9EMfRjxPBpVVziRWwcaRaESeGkcNn3fSPxww5TbbwC98rzm9VtiSZ7YkP3LxunR",
  "key19": "5LoZr5rDoyWq4mcrzk7UFGkiktBqRsoNJk9nEH92vcmQUMJf3inySm9VGtkzfJXKkvAQVkTVjzNA2yLa43syHHEh",
  "key20": "4M7PjnJuH2wgRLRSwERZosTLYrfLeN3f8TdEW9Yzr77GtiD7UNgYa5YnBDee8yEN5h1PQtAgatnEeXBejp2U7416",
  "key21": "57hoPQVNDvjhHeuUHHBayik729gUEe5VLi6xzKPQ6KHzGGCUd9PZnYwTQ6HsN3EQ9gbjugcMnYBogJfrCb28yncZ",
  "key22": "3emkFYZVocKjBsxhD1cBtsx5LgfCh5cnxrege2k4xUr25YbzRECKKAh7XMedSrzkRBDK6qbBxnFoRd9DFA4GdSFG",
  "key23": "3bpjwN8jTugupSw537wGtD4bd82Q7DAsNp4E9hNmoPir9XFPojnxXPgTJRXcMd64dq9YPKhsqTgkx7dnK4aNruVy",
  "key24": "5V3R4teLK35sr5rDWoAdbfKCwkuyqU6FRTuLwbDvo7fjfsdsBP8aHmNUfKXrKLEwfbvT24okoGgNkdSjB8QmxtB6",
  "key25": "BwNkQNvMTmM8YwU1SzkQj38jsp6d6wKGAw1BSHjpsG8uGHRnM9kM1zgBPgz3QAS4fiJk7cNWi8CnjtvTJ5BjP2u",
  "key26": "4wU9jaKpvRez4cpPG2W122iCmhnAhiYxprKK2eSCNsrwrh2ArERjCiUzKS2iKkb4GNjqD87ihnMH9FBx785Evu69",
  "key27": "2qzaBGUyBjjhAHnxBXoRgZAg8bCCddqgQbNi1E2Ta7z8XCZ7cJdWKbChT8ieAmyzKc4B45a9RL8F27YpJToDbQnS",
  "key28": "4CEhMPh6jMfnPAikT9vTmTxQ36CWqGE94zeoGq9nBbPigsy7vvy5tYu7Aaxh1CLsEMamJoEwbf6d69r2o3PBenmb",
  "key29": "54GfQ6r9Zb3DumsqKQbNYJtk47rxagaY9oYaXoudnQnTQqnYjkERhsNWtMXFjCuvpf4RU1G8xF7aQvud9Kb2yuPd",
  "key30": "P9NTPgoXhvJXJWeZxstnXkS4FVCpki3iLk8WnT9xfLCiavZtimK3b9acULCmCX7R9Zw1uwKL6xJXSepR2sfLLQ5",
  "key31": "xDZoFUvLEFf96eKn4JnmPMdsAWX9cHcyNWLfg27TD72iwKZabK2r2kKmesjQ71vbGAAV88NCbjEaxZ1tLkY85n1",
  "key32": "rcci65s7stiokUjMAMQLzgkVb3Z8rjbfwxzG58Ck21CwBC4gUpQrbb6jU8CKxF2s6LgpihWyPuVSmjESjeuP4fs",
  "key33": "34YDaVVgMYuuatFPRS4nfbFsiAGTEWC3H61RigC5s67oVuQZeERexsa1F5o6VuN5Ey7jyUEf2fSUh1UJYb32nLgu",
  "key34": "61WYVr74VtRWYPHMSBCN3cADgvnR2Rh7RTwRDLrxv4C4E14hXoxXVdwGMF8ZiaPjQETxdRFTM8m8Y5UJfdMx7BRX",
  "key35": "5ePC2wDci28JfkYth1nwEyUfiuCSWCKHELhrG6XPnpbZTXPhmqgo4WpMcTZmEVga4WKtejtmcjQDo8AD3i5jVdPe",
  "key36": "vaJkHFYme9U6x8f4RjjrsEAhLNsjxgMbs5kvpi3WzPobQvVbTAqUGWFiTYisBv8gWo27Ew8m2s5mhY52UhVqUgN"
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
