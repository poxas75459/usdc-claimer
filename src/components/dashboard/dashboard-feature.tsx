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
    "4g7HGpRxZpJrLyD81pngCVsfX21JxNxEebJRPGAdgYCApqAxTK8S2ASUaCyhoZNrmSq7h7B2eBVMkL43WaYpsHG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kDZQnAC1H7YKH7HicQLEPPQ1vh3eaFvsSzYhCPrwHCy8gWScLjX32jYz8Yw7t4SMaiXN8b7TsvwvnvJKC8Z1Sd",
  "key1": "3Dpq8N1kXo3NybS8geKbLbkgQ9nyaYt2PHZ5ma1Q8iWDmfB17NfkTPj3duDNaqRfm4137zsrz8v9fu8ubExMSkZS",
  "key2": "2wGarH6FGVLHmbZtCa8TCzZhPetFizjTVAV8dfrYJJd9BmdabgVtQHphbL4J2kEzq4PR9DSgPCBmTtAYg6B6D4TW",
  "key3": "C5pAJvQPjvPYdTv9SWJcuDT1HGe3fZ2Bv9mRqmeXHYUMpdr1ujbipYfyHPeQBCZBfTNzcchm8kPXhD5nnTFWC6H",
  "key4": "4wPDnNxDoEfSRVKHHiTMuLnvVcMzjRxZHJyAeh1K16NWcavAFKD89aAkCppQDN6MXfKBT4SYAqje4heeksGMjRKg",
  "key5": "52cufgpLN92Y71cPkyMHvCSjLQ9xe7t68DhWHATL8MZAjTxCauEHFCZhHqoE88RtH3E9CDpCjpexC4kpWCFPC3yy",
  "key6": "37SpDWA3bLSErLsn6Yr8P4cizMfbGRGMSChYBFdgjJm5LEgvtY4pWvRpNyM6NBZCf9eEamhdYKQtRriWexv7TWEb",
  "key7": "j8S3XHHjDzYkUz3rF5DdtqDRVsPWvv7uQYzwhaSzFAypfEYSdDPtEeS5nqpUqPSova5A9xSVcv7ZF2a8R2CJprh",
  "key8": "FKLAfjyrn6WSxnD1YAndPTLfneA6x74udEPPfQXBorewyub1mSnuV3prcW7Kcy4Rwf4hMooJsL3AYo1iuXFLJTV",
  "key9": "49d1iTXkjfZsoP3peMMQaspEvJmDCfbY3QNzd9brwLpev4zXUSD19bTpNiBsG1X5gHSW1rtjnEiNyQDVuhTYTYCH",
  "key10": "JEFYLmBM58uDKCZArEHGQ92tsUXvsRMz2ejVSetCfVr8LyyFP6CYf21w9iKhxRZTVg9YyzD1HuRpogiB374xVkL",
  "key11": "2wyoUb3W3NEdU8kaka8hXY625VjLSxu3sKUradQjjMxkgy9E5sgQ2riM7uwRsvqT98jK6xmrmk9qGHnU3aFEqgNd",
  "key12": "3qNueBHt67caeHfMitXjCfrtM6vFUWy8HgR2peDFLXdHcjwW5vx4GPwhwFzpLKRYJ2xE1FeQwZ8ZJbpTKc6BPvjH",
  "key13": "G8rojZx1RtTDjpY9gsHe6rW74LwVZuwmGWfhzaBuQkwAHh5YzBNd47ckvb4EwmnSASE1p7n7aMeNjJvfuhn13dr",
  "key14": "3SJzQHJbcusKRgv3SV886pCJTXLLYsiFo8GPh3rS3Wzwk4BsnVXC7txxAfKi8tJ3SxCVtzKBi12HZfpDhEd9JoKR",
  "key15": "iqm6errFRQvzEVwFnJ1ULQXNsjxfz7oq79yaGU8E3Dqrr6wwP9HLHJhDEVfNN2eSKTDkHoXBBxX998ya8fssv5n",
  "key16": "4CEju1oBRuEMVWhyRnKQPJtvGicpD3oLbh6QxB4sGnP4vd7e8Ewr2gkv7BsZXVfxPSC5BzLrLS8aW8dc5DYgvrx4",
  "key17": "3qw181eYfhHSHTHUFyQi7v2NJB3A3Jifwq85wmSNELzgfsASBicFVPBDLbUJq1o3cu1XGfi7Fooruo88D2qQ9oSR",
  "key18": "3GSXF7Hdr7qLedj675YpXyqJtxRHESmmPMV4zfHonj4Ez6GhGvoqkuhGVNTYsm46qaCXKpUL2x9tudvp8kM7qnpa",
  "key19": "L5LDphsz43Pfiw8hKSsygqStxj3nNW4MypRCznvPBMPtNMgLjmpMcQrLZbmmfxNwpB6fZEsPY6wWr1bKahqvqUJ",
  "key20": "zjUArsZw2Sb4vK13T5jScnT8FyrHA9Q9rUKX3G9QVGaTAfAMke2WGPwby7BhbzdnpFk1omRhhfVAXh9ksyERdeo",
  "key21": "5EhhiGW6j5VuqW9CcmUpy2kaQq5XSPpo4REBveqqhzSAuNc3Z65pSZpiBQBNwNS7JyRGn8QuuUJA9iEZ4kiehmGf",
  "key22": "38VgGc98y4ruAfiziGeGwrpfq85yQ2rE7HThiUQzf51oydvFztSMVAWM3vhDhjeNtEA4yK65NXo5N5nP9R9qLpwY",
  "key23": "XovExeHJh591skFAm8JBJxX9LCmD1JMVHm2v3cXR69YdVcUJdPkuNT1ZTa6ZBbop3oN3RR7vXkmf9CrJMNeKeSe",
  "key24": "3Lu8LHgZ3NBn8dM1SYyXFU2nhKwSD3GhTkS5Fae8jXAKo9Ev7LQKvZNusBxc55CQXF95VTFF8c2VLWjx7HBsSYNp",
  "key25": "3wvdrcCz5N29QZ1DAi2ov8mjVvnwJU75tmCYsiNaXLMR2SuZ1jk8h5PWUSZ36SCWnb27ow4yYUB6moxdXknx5P5k",
  "key26": "j42o4euPMXtyxYE1FDHJ9LNgX8TfNQJnTKXgLJHLDthb4K9R14BCA7DJQdrZCicwDGFz9bS2b5GDXxFwSjwZECq",
  "key27": "3YPXeCvm3aFDb7Y9xS8hQUVdUQumt8nWapB2EZTBqJmdfuW3BqTx5MoxkDmtmDAUpdtzARg4whHyJhjkYvn7qdwf",
  "key28": "3sb18mYzuwB551NS3WP6uowJdpxarMZKdiRJF17VwRapASjGuHMYA3sfhiqPTgvhn8zFXUVmXECVXKKnteBgTSmQ",
  "key29": "2TTsHWy3jhhsVEYtULcLSGhYdLg84AuG1ctek2bXakjrjAg2miumBFS3uXKZEA7RVZHA3PpWL6DwuyomP6qmk3Ay",
  "key30": "3vAB6KRMuQGCBn54g9NU3QmTxfPNkPWrCLnBZVbfH4jKwQs196Jid5wK9fReyp41jBemLfxiV9eccLm8U8go1qEg",
  "key31": "PWiJ3TdpociexY9d2EDpJ5qr8gWRxnDBU6E8vMgyievtDeS2n8FHSLmq9mFFnKrPQYK3oB1PaYg6UhSHYDKrcTY",
  "key32": "5KRAMRxvpoJU8GFccgtbAS1yyuUoBoH7Ux6esTQDg2tvnEZ64othDRwxGYb8LnRaWY7Mvz4fqARf4e1ZFV9AF3tP",
  "key33": "24vR8wLqubH6FZ9tL24jZNAi6aeRezFtenEyPb5ARJx397exAhFeRKbCDeJZfNq8u33cxcvkZ3hx9r6aUSHwv19Z",
  "key34": "4PX41xEBSYueANajZEdT3TLvD8nsvL3azYGJhCQBeWXUEcWr9vX7Gu7cGfxvkqaVMG8an42BhmP1uj2kTEn5XCki",
  "key35": "2qwdkGjmhFx8NtG82zXXiEWknJuRetPVHFGJa8BiHnAsCuXajHDjZLnZYyzjnigK4nKqedT2d2HaqAeK9jVJPWV8",
  "key36": "Bh96KgxdnvxmnHk1gG5bG1XNBjyMrWwDx3ona5tHjYEPsEdEwS421mC8zF3R7jaPHgfPsWMNpbfiP9eWuTET1QN",
  "key37": "3TXwkSvZvyriKN8ZQaaHHcpNuZZcHyH35wDfduWuZpoebwCU54TGWht8bFvTZ2JLeRvKYD9eS72z6zYV3wjg5APM",
  "key38": "47FQdkaqYBFSigLXoRsq7YXp8JwJ27BDeDdH9LmHzX3HiWXcWc7Jp5Er7jncJdUUB6fPK6iw9PCPHwFieVDQxYoV",
  "key39": "37fwGc4xb4YsQua1NWvsDqavKHmNWrceapx4cEaYJkd3ZHrw2gRcDM6UfGS4xpsKEPbmhPoNCp7BC8T2hcNzr7eQ",
  "key40": "4ZSugyCiuBiC3JjkEMSyEPFaCoAQSV9mhuEARBZB12rBWQmZRbL2EdU5fRqseGseQe1XSP73tPivNe4aaM8xJTt1",
  "key41": "q91gPUzvcat1PT3wVuB1isb5Ba1tNUvZmW22DA5uMonRBopdCNGdLApMqH6fu7xDnvH9K1HDFTkNcbvipP1HnES",
  "key42": "k5hyj2uuPCK24qsb28TYmBGLhVv88Sr5a6QA9LR3tdchrynv4ux2LPdB2XQrWwfbcyc9msDuW12JkTPQSFtUbRy"
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
