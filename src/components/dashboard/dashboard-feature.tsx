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
    "4WVEkbkuq6cUVR8oYZ2QBVtzSSF6QaZ9mmYAkMqn88KdwcmdfTNkwzUPvHjD9UtuXwUWsX4EpQuQeCJ4SSTaAvJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kTSnFhvZP1q8S9UDxBTfJx1TKy3Eq2SCCJzJebYrNGeFZC732x5YteESB4Wbn1Yn24L5j1DwdGiVAiKWMBb7R8t",
  "key1": "31Bp7Sj3CdNn9YFasvzGcJELqxZu42rGSAtmrPEvSyinMUZweTJCxn8DUw7DTuncywdBzs3Jt927j5ztvzCdQ94T",
  "key2": "5xVNYxKTu4NCW3bV9xzRG1Cg8XVcmwwKgcbRE9QJrYrekboPtrJm5yS3y5v5bqVbMCp4ecoaAbis6sQhVV8joa6Q",
  "key3": "mG2abB1DZrcp8KffqxmawBM4zFsSngoXnV87aGeqonAJE11yWTqnacLyYqnNrWfCNCJbzMBGbZMXvZjDQvdMYnF",
  "key4": "4C3J6zb1J8LP6rRuYN8HxHpXhNb55RAtwtPEvm51vqo7JJ6E7eif225JiQPBWuo8HzWyHd8RB232JTrCDHL9Ym39",
  "key5": "2rM5qBZme2SB4g8waJJVh2djHhmQ7MCS39H4pkoAPL4y6o3hGw2vDEW3jm5TmXpriEQZhpZY6G4MUeD2Ww7Hv7VC",
  "key6": "5KtFyfU1stEpHWW37eBg4anYEj9aPgpHYxKK1fNsugaUohRko3PMvGueGWQoqk4JodSkbxhTQJi3rKvnfndp4sXY",
  "key7": "zdqoKRKxcoiYVWwC2N2kZc7D462i464MUb8RM3nM7LR17wqWrh4YyPJDfxVNbsziHiNfLvi7mhEo2GVaVztyJ2Y",
  "key8": "3idxnqsbpbA7V67iBgdUZGW1kcK5Pr3kBQ2MjmWPviZuYn9WYq81WwAi25RwPu9iHozxtr8hvRhZ7bL7WoztUudE",
  "key9": "Du8Ykg6gDkh8vAoDAPaFVwwbQbfAjiVw9KxXUYwHtQtq8FeMtmpHr2tXPfbYyXncemf4GRBtH56UqLWuoeiCy9L",
  "key10": "5M8592VAupaQCXJxXPJTpyEUM5YiF69WAb74PJ4vkpPqJpq8CSsZgo91NXaTvf7t2oDMGJoRsf7oyVDCv9TqEKQL",
  "key11": "4EqwpyswUXiF8E6vo7fPaMgkxKdpx6atmRTDs266s76rKs4m6PBke3sjjZtHkSZxE2VLi7u7XoCydJ71Y3WenV5r",
  "key12": "vQvoRMKXAQrZiYniZn1yGvospMiGiHLXzXxbw6dj3bfRVM7pPYd85HcRWUs6xtpHZ3NBXY3zT5ZWUVaWmy2aULS",
  "key13": "21h3VBnpixgKpaWvKRnLU8c2XNkHC2AohQZi5ASEW7VdbB26Vktdr1fgY5rXt3UxLB6FpBqGLtZkoBSRrTXbKBhM",
  "key14": "5E4R9K4pydQJ9Fow6uWwr42btcxFcww7bDcXmBxkMsmeMLH4n2efHgxs6tGmQKa4kmMhw99w7sedNP9CFEezPsjG",
  "key15": "5R1QaNGKh5Qjvu7nQt7a6Cu9jYM2zxyJRujDE8zzPjKPVWLpRzxeiqND2SKvpKkpRp3BS757TCzMKFh7eGxfLiWm",
  "key16": "4H8waWryigNkkiDDABwAZvGHnoWzzWZdY7AvbT8M4XDTbSaagEaf7z3fMLM5wjXCA4gRCAsJe6cN81dZvHAnFon9",
  "key17": "5cUEUpZ9Fbt8taxUgtd9KMfSKhDzfkXWeiWwma2QQe2HSU3e4YJdNXEd2P5Zwe2wwso8veaM1d1HpXU89hACMYR3",
  "key18": "2Wp7C3aqz3dKxCvjSZChhnn9aQPTpRjCyhtkqoLhP5NbKcPnwRTPVzS8qhPbQ1ghoRDfLs6YSXYfq7R9AmWN822V",
  "key19": "2K4wUurjGWi5PBCbxb43EGLacEgknHMjDrnzmJceEudi4dQjcHiuK3cAwQ4dmioSsYWg2BLDfUXfAxAo19TxWZKG",
  "key20": "59SEhC5afkkppigcyALJEW6NB7aNvpTLL9EMbY7sJQnspsBUXsdnP7MgQNkght1HqvvqK1q5BffB1eSEd3J3FGAZ",
  "key21": "LkcNd32BhiZNS2SJfgSCXj9BCQDXRrWXDdPq7BaTfwU4doNppazr6xxMik863hGUUdqqPRhASWtTnQBQ7876jzn",
  "key22": "3sjx4tZS3mpzGox7PvhnaJBdqC1LyTnDsAssP7g9HTbhkjqSKcbrSE73CSdRdpCmQHdT1BB2krNJ1vkPnamoE3S5",
  "key23": "4ennS8bsSs4S6uynU5nTbvNRYX6bn5tJAJLtUZXuHtrx9uJJGsqCApbHAxegdTpHBCY3n6U7ZorThXeaRHp1Hv4n",
  "key24": "5Li2Wjgjw9oiD2sB9FHkJgPMQy7bAhC9PmZke2bEiAX9VTBK2g74yFgkse7B2zBQZ7gJoRzJgXE96eyDNCeDUaW",
  "key25": "48HKtfiRojxGTw64Gvq3JFg1MnhYg2r5F14nh29NmCHAHE4QQSgyteh5BGmbuo2GArsnvwakptTYS3rXYd13FU7p",
  "key26": "vCsM4FFDS5RkoK864FTKmDwDsMrvu68NXCx3snhpH5JyvGKXqqqbG8yZgXroQ3KVv2rbZwDrcCKBL8Nb5ojy5VT",
  "key27": "32SmS2EFFX6GNFYDZKDMakVbgDS6Zzog2WvWBChpk4EifWy3BZvqzE88g5mgiQPJ2apVDQYxbYZDhSHLGqjfJ36s",
  "key28": "H828Gj3c4arUmEFRFKKgRAuwno15QtjZpgaXM3vGGzivj7CCiwckPfDfAasTdaddypLH96QY3FwNCKRJ6uv7VKN",
  "key29": "4fBbgM3f2byDnkAfeU9BidwyJK9Ntf5SBGc3hEsgLMYVk93H2ap8SNaUKHPpNnYJCCYTLFrmcA1HzAxa2GgeyhZ6",
  "key30": "4w9t3PnVwtqRG9fmyaRe2dB5QSYJSGusK36B5Gs5s4VbBKtjaeKcep8P1qZpSwxofb6WaFA9KQ92dLgKyjTBsPsH",
  "key31": "2neQ35Zcjaj9MBSRUE97YKW8sZ8E4jJuPdA4JjTXXVbCt9TUuDBriSXAW4Uomi8WK812jii349NaYYzX1dXYmNPp",
  "key32": "2BSecyQKxEEQmAoYMkRKkDka8SZGwMyC19jXHMzGhWvaKni3FNkNV5ec3r6bs2xxQ4kAEU9AjtY3AB5J52RthJiG",
  "key33": "4sk4eHpUVdyc6tqzFjjfS53w3ZR9pqGFdyyW2pe25e3dsKwVWWKDjgPbsxqED4A86v6Ri63TBsuWkKYeVXoJQqwU",
  "key34": "4SVxP6uPXP25oSkLawiq3heStqDopXF6qnSxCZYNtREoBnBPNSFDWptrKmAjXpaRBTngyhTNZNAATBNd35qk2FT2",
  "key35": "4bDUW29jkJ2j5V4q1q7AzzuECpSPSrFnRY71rqEAEVfFaYzhZwY9ccbjzyQjtjxjSXqu9hmg4oLmWpNRJHxF3oV7"
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
