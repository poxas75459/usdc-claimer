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
    "2oxsDRPeradRMbiPBZi3B36eBr5Her6b517cWbk1m1CxMC1bfYAkxKriyK9G68aFzDnvYguDyoRcSGhEvWLtpdqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TomnMwnX8oATUzvu3QeGSAu6Ze4pveu2sLi9WLC7igcPPoe6ycu8vt1fzyoXbeDgzQfr2w8eKgQyzBQ3tKNemk",
  "key1": "4YjjnnLt5W9zqFEcofNrKNLvR1NoDZFWRNHJKNV1F1XYHCXXXdWdE1eDheXgdBs1vqEyngn4uK3oW4f2qd14kjHp",
  "key2": "3Sgq1PvE6ozBf1MjQzQhTv1AfHs1dL7g8WjA58dMfbP12FwPd7tDUaLGngeyzgaDYgF1zJTTVEe6zEmjCKuqXJqu",
  "key3": "zKY9tNNgyHL37vCTm85AG1fa2H5NjKeJXkCvMSVkFjBVY7FR1Hd1T8Xkjd4LCvvTd2q8N2A4SgxrFQP9wxUZa1y",
  "key4": "2mDndYZVaNWLjVWYxGqxP6EnqwZPTEjJ5M8CiUHT2bn5ALJzrbpL5DNPKX5oaQiQpbhUXHjXkPHNmGrmqFcoUNFf",
  "key5": "qa7MvhYBTJXqeuTwmWZYheNTW3F1WCSJgSnQX7ePcG2743pp5GGsTLcX396yUZv4oyPLZ7FWfcd3EUETYYD4yJ7",
  "key6": "5mCHoRCJbe9KQZF9yTV9ezupM3myEEFLNe6TBnLGs6KRe1zWb57Bi4r8LJVmgBopspAcWqwbuw3RjGTWZd3EwaY8",
  "key7": "3uxRLRqpJGHFxUYZDjetVBStiNcqJyqTVMrECsFLPrmYasJhWhUQfwEe8Zz3WsJbUEp9rWnEeSXmQiPjYKQjQuqP",
  "key8": "4WSC1aSZ3bfrtcENujNSRu6NmnekS46HpaVVogeHKKCPZXxQNzbT2mpwDEJ8btUNhy5EJJFEebp3A8iCD3hGjdbi",
  "key9": "5XQTrDskwf9BwsJHvGPpnF8AmZuwiByn9GazyWByMfGQVQq1oqyUAp4huKJCXeZXP42m3cmTzPaERFpUCjBLAMB4",
  "key10": "3eunLLjnX74YxjfgXUfUC6VtJddYTzyjhk3kvizHLfDoDf45mg983VGrFNnjLfobZH9D8F73oqmgFYgiBVWiDJwg",
  "key11": "5UZpLWVLD7yLWZ218G3okBdJ5YEUBEsTZWf2dZy5jnAYXQxYFX9JSpV8KgvP69VD7HhjnwcL9sMK5cLTooYEh5oQ",
  "key12": "2vXgVQTuh6Nomi6RCpfkFgJEfV3VGuH5fqY7cMUGtTfC2VffHRjvZpue6iJwNtkRDGm5RbbNDPuN1iVUA6BsRgHn",
  "key13": "gBfU7SJuzY2x6qT95yzc1ULEmJaELHgvrGbRwdhWcaM9gXV25HdpUo7wDL8xmfaUFggRDd7RYDTztdsHshxBL3P",
  "key14": "beoU8zzRxVtwNjbDCLZZfbwgQVuJr5US1URPqmPmcr9YV2XadnXwR7GoykcM1VYo1UUW8nSAr2ukckdDd5q8N1X",
  "key15": "2itoqz9wpspZeAemBY5pZnEfGyHqaNm8sdSbzMwXay2bbqrtWV3KC3cKmLemSRkvwFfzHVh99PmD6Vbot3dffA2e",
  "key16": "5H2WukYera4k48ihPkaXNfjyxb78BRDQNSw2jkSUuq965gNYfLGceBDiWNT7VcFTHk6AdznehS1FLcrTFUTQvM1J",
  "key17": "2DHbNhhfDmEAkaqQfcVrjWSLSU33rrwVU9koKyxcomwYP99f2JpgMq44Hzq65epR81sdGYzPg4YcwgZXpmJQib1C",
  "key18": "4yWgs3NKrDM89uN7GJsvpMRWV4BemAztxkoJdccqUW21ppHLLz7AYP7gKy1HbkErKX6RUT4GC9XhmJMKF6oj3Bh5",
  "key19": "2BtJsdWHXp6ASfMMX1B3jU5TVpQLfpzQU44CozZcGL5UFwV5STs8Fa2MMwDGfJAq7yP2wBGAdbsVegSwM1Dd8ntA",
  "key20": "5AVPUuuAienoveXRHT3vLg8oaQVjvujSx1WXjTKWVyZt41ZJZr1VkXwK8s91xniY1WKE5XKTSbqiBGpQdC2qkkb4",
  "key21": "4pgjTtoouSfHEouXDrsKYe6bPM3PwLheVCjSHYyM3QrTpNwutzZj2m4aH9PK3d17eTJf1aJHQWZ464MHcZfx3tAx",
  "key22": "56C3JTrdjDHWojmVtMST3JYCDP5eQFkXKV768CUrEyG8LYRM7RQYVCv7rEqQGB2K7qojjKuMSgHzuHhoZK4umrxG",
  "key23": "3n697mWroCAc2e4EmEWVHaUsRHHABiphEVsAgZdPEgt1ZEgook5dRxSew55aZRD3ZsQZHcDvktEqPz47eq6UseJQ",
  "key24": "5sqTKbHqNFWaipgtLkbFiFG4qD3KwGd4YbGVgVtHHoZ7K9Q3UMsZ3Cd32gEEabWFxGTAb5YGC9VZMuYjDDmN21iJ",
  "key25": "4ZSYuncgoM4wc4a9LWFgYRWTfKoWJJDsH8fa1zZxygxrfRnXZp3apMC6QAoTdbfZy5KLWmFM6KLpHbayCcZ1CgGD",
  "key26": "5N5eTpccp86inrZ6WgJkDgNUFu5xYjYyLfNPYyXk72r6hYLsErMmRGd2tGPokXgWksKT8CBbMtVwNMkRDTyDvBtN",
  "key27": "4gMwA58JGbm9BeBsd8GqgbBpQcBya4xq1sQxM8CuQHzexYSpdCUXQK7bhsHHoZZJNjBdP3iVfkfRc5BXwQVsd1zz",
  "key28": "3ek5V7GHfdtzgukJcphPSxxq11QXUtBDvxm4j6pqNEAmGXtceHeFwATExaMFp3RPKe2uuWqxYgsL7GQbvdHXFGQU",
  "key29": "2MxzkpsdUjRmvcURYaTmF23KNxGwrLk7LVZBpiAfMqsyeJpmkh5bVCq52znfZAG6piso5MjtWFoZFfbzJPNJXkBX",
  "key30": "2C7rhsPPfC1MP6RcmwenAWH7nEBwSNWxG3SymTAmApuGWSvWgkbUoeTHbDjWe7JrGCYigf99XXZbQu7GXyhN7bHo",
  "key31": "3VfSYJh4U7DUpKzCw8oUXFGWf3A1oJCk55TWGe5ayE3y5roUrYVU7kjL3pUNxfCCXqBZuLpyH1a8aM3RKP3UqorC",
  "key32": "4YSTRx7GKWEJqMhJFKkHNYQxgiLn9aC22pqCsw2NLG6ecV8pVBckZQEvBajQmY3Wgq7ewtsB37qgfs9Tf5LmysTn",
  "key33": "3A8wg37MvJ7HaMNrmPVmXPpqzpM7AYnJU8sjReBzmCRrLRtVi7Mer69dXEum2UsELRQv6qmYU3FTBWRDoc2wejjS",
  "key34": "3MpPUZVT68MerJzshZYqqEuiJsFEfew9fhKa6DkTWD12LNvPWBYU93RPdQ6D2aq3oPA6MHNJVVquVnNQgwfU9KtB",
  "key35": "5KLNUrRkkHsbgANcdPZ7ihFwi7LZ9zj9HDyhSQD2QPS2oZ7KEBGZAoNaU3VBYHnKYe2mSy8aTYiGYWZP8BHCirxM",
  "key36": "rMiFrT2gMbYBzcP83iyK2YvBm5gsuybyWwhZS2wTRmNG1n93p2RjxTiiCgtJGMTaw2yzEVcZ9webZd8yJxKwe1K",
  "key37": "2FVjh78s2uw4sfngbEZERpriLxFsgzJz3UJEcZK7d2oxrHo9ZhRgEPSZ12MtVT13nM3RyQEibZEZcieLZaaUo7RK",
  "key38": "32MLrHan5HKtQKCNprq8cQsfYCAY4fLazRqixFm3qMtZYb56dFh5sVvKXQ35SKnKdkj5Rf9GFKA4Zxp4HBb9wrwY",
  "key39": "5w2JVbyCLzQa5QyL82tT8DNmcM4gsvGwN3cN3q4UpQrn4GdKmPp3ChRHbBrFQCM9fxjsW3Q1wT8c3yWBWC3nArPe",
  "key40": "5zASXYUg2DwTdBqAoj3UgnZ5TyveEMWdCcEpho7YDsuoNTkz56CvHPgRjGjt1iik5JoXjyB1CEzQfLKQXehbs2aC",
  "key41": "4fKMZruYajqxZxiWE3fVTqijNRWTc9Sh3ExWNc9MNrTJCmxLiYTK8Goa8fw1RPPNGHw6kgdqikmxjgfCjJXT5zJT",
  "key42": "Z6QpQYuWLdxwZffpjZLutGxbhcB44VevGJ5CXuxLgZ6PQm6huYaUm4suhgdK85qmmpXm8NDjSnQSFguhHDbb1tW",
  "key43": "5KdgUdN8ESYHn9zrNNXeeGVH5kUoRfaYMg2UzJA8dY81iQe2dHHFEbwSdeSerC4txyieeAEACQS91NuXJLWvQv1s",
  "key44": "2pFBJ9uhYNnCiCx4iXo4d5d9j5whkQjcnApxSpJp6gd169VkTRqGd2Q4cpMd3BaE2fQcL422nfWVXvfxrSFptPqG",
  "key45": "52PnDsjpjpRoZTgQoLLNzNviXoHYSBsPp29HCsSzkiyMV3juxFG3Vv2fjF6jtRNWh5ScJyxW6ipcGLLGZpLJs7vQ",
  "key46": "2yeJvBEcJfCMWB6LqLMXaSQhH6BWyvbuswmbAj2yauC9TdgcsqLpUGFsARkE9uX3R1geatrxBBtiyT7qFxsB4gXA"
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
