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
    "2BV1prMtesBbURhCWWvFsRb23kkVem1edR5zxzvqxLLWYgndZaA3vkdt4yzkAJLQymfpCL6aAXkYZZfDhghHMuwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385rUruCgijR2sUvibpJk23d94xzLTV3wMmSxJkXJnZ1diXavxxvKBzr6rUHqTGyy6RaguLXR8rZ9eAThKsh6VBR",
  "key1": "9n1zemVazrDi1tWE6KKi3jTHUHbJEDD6KhcbEV72CVhB6WfZMfATZg1Pbb82Yo9LPBEnVKsEFkZcde85rmCK2eU",
  "key2": "2cwk5Xcm74hsGHer4qwQhsSgFDTNUwDaujVSrjLbPbZJyKng7UgFTenFCK9pQtnuP7uGwx5VaToiRjUzfgJHRNVR",
  "key3": "5B8JDJuSjGXGgaAj6DsF2LGp5xpcn1Ye2cKkaXDhAscQMZouamedao2Lxb66WQ8ydxmp9F1ctTN5eD3ECQhj9UFd",
  "key4": "4yz6u2gK88XvgQjJikGeekNvXnn3QUJyLWWrsD7hqvpiwL8BLQ24XJQDR7B16DEkYzdR9pRtjpviYhGo2f3nzvjL",
  "key5": "4WS7gnQYMfUK7g8VgRDRitcPS1DtRfohLEub1pDqR3g36C7RhBT5tACbZtvicj6DAqYiMCSt85bggYpjcrJryAeL",
  "key6": "5yXGgTMySfuXMqybDaebjCSzoT67vrxJJ6W5c4yuMn53r55AA13wWtuzfydhAVQuWBKMTRhZ1otsNvchgbBPET2o",
  "key7": "3nbV7SiXLY9pz3fDTDA1c56WsZGFkVzsDFv9D3dh2qVjv9KAT8q8r83m8Q4KWkmBLvYoDx6HYN6QnAmxdfYW6JfK",
  "key8": "2Nc2aCGgGks5TA4Z51xN7GMh6RgT9gETz3PGy8hNzwCihYRFFZL8EyD29Ug5B6J8TQ66z4RRiwRhsnN2BxQNZypD",
  "key9": "2gCXTKUUsydd5zwFjcWzcjwztKptPCBZ5zVuA14NS3vZTW5wxciqjh7YT9dc7o6x1S7vqG68dA6cNe5wREwHLqiS",
  "key10": "5yZkAVXMf6MQQyXwj8zvk9WsLWecsoDK5dak12uLQkNnvy6SYyKAMFeEGwgRQZnGAR7RfYsnA1ARz7gGjrQqJqrN",
  "key11": "2QcPLwGZnoyoK5oRa29yv4bQfugjfxcH29UAE7SUzdgzR15kxvjR7fVCDtDEtR9NU7KYhg5RdoFqLcHXEaJuVrpY",
  "key12": "gmNSzGkeVroP21T4F8Nmu7JU7JTpz1TEuQmdVs8L4R7BHqpGekQ7rxUEs8tKnqMsCZt6FKiXAXTAs4gxTWk8VdU",
  "key13": "51PL1dEBzCoJEXCwRZs5wynGnzUz5v2ukADM3UJ4c2mBERADt51CtLZi4NCAvBzn6RXDqaDjfQXnrAkoNSfbQyoX",
  "key14": "E7c4xPXUqqHCQypT8dnnrGSWELEgLFUsccXDynq18SbyDdnKHWT3W8scNX9QoDwKSfewe4wosQ7V1FTGQPU6vbU",
  "key15": "mMr8EW5BiZbNZjUrMkXxzX1ekhEnKCyqrr5QZVUoCgNaRnRZGjHaBVZ89UBSLagAfn9xtiWrLk2nBMJM7VS3EWX",
  "key16": "dnzfJ5S4Sgov3aUgmnYgFQKArhB6qEqyt4TL1eBrouY2uh7SLCj6XtjrutbDBe7sDPACcvM42DB3mmkTHUCu6EV",
  "key17": "f6GF8hiywUKqSfMEnteuLY1V7JYKAvqJpNsgNXgCs3AFGqzDf2BXro59kNiT5xZcihBVKcRMfwBduhb7oLC193Y",
  "key18": "Z4D57McH9oAfY8emjFQ3sv3GwE3e9EKvrZy29MHNhuQScF35mBHEyEyTzQhcMWFFSYCZiHzTTLZdv9biZAW4zra",
  "key19": "66UhmTaZ8vKF5iZ3WST5oC8DQ2Jow4vz3QSLrHiaizrUnuoQ1VWYhcDJBzthytwLq95eB8zRvUASNi56vJwgxL1b",
  "key20": "4JuhGUUQez8hg4gny6uxTx77VD7q85iQGDf8CZBigqzpVaBS5ZCnjrxeZhjwSZCvfTLTmMiJ6qtVCCC1hkUivxJF",
  "key21": "2xexfqw9jcmgdu1PTuEV7ndjXoLnQVw1bbzHymUJHHUcYfiQaVeYh6YdjgHzwEXiRxwmKFxwqSddugNU8vfYBLEz",
  "key22": "4mqBYxUA98iMc3rAsdvcPhuDdbw37LAwVb1W5uo6X8uJNdDTcoFS1MTNYpVNNJm43bTDnr8MSpRXsMLuuuPko14V",
  "key23": "3QQqGPmRejNpZwikfvff7Yw4v1m2gmnUeiEaiNv4TQP4CeTCY47vGWzHMxneoHh3yZwceG1vcfEq5bSztWfncjxC",
  "key24": "4fghkQ6zn4P3UJNxLikztLrnXDkb4pHtWgdYecd7TMpHmGQUT4NgGRdPqQg2Ryq4EGQge4C4MY54K25i7BzmbSBk",
  "key25": "8Cg3HFvw7KgStZ7uPC5t9Rm8itobqYy2aYG1bCJYcT3nKk79B8yeWSmSxsWfzjr9jom2PwYSw6VjzWUyoMdsbyp",
  "key26": "sKWHCDsGZfuTDckVKTvn9DTwDT6f2HP3XPCe3187GHW1youbAJDuRbrrUKWa88F1YgSVqEjyVzWGkTXEzkGafUv",
  "key27": "gwZwDpEqXpADsuSJeXDdSw9BD3XCvvGpidiLc9VvTLwY2FGeCTBp8HkgtL1H2mwmTE1zg1SijJcxUDvGhfUNqdJ",
  "key28": "2t5uSuFwVd5agFV61XWJE5gE5Lv9rsy2tHpNV78qmKPVXKEne4oSSomQToKZGpRS98Pmh6wTrWL7nKHABBeHG62K",
  "key29": "kNFWzQpezCsLrLUbjwbMHWRrXAVeeGoJyvbn5YSXVtaJctfxdAnUGgUvHJ78a14pZTEe3UBtw7b69hfH42rnaAw",
  "key30": "HX3iPFbarimetedFgqBMq71UpgFpxcyGEg4AyGNuN33vPSCcuNEguvZ1PdpYWECDNZitk9UuupRugkHjEDEZvaB",
  "key31": "5tjqkM5mgVSzEof6xhG6pHijkb83fzNyrgUAgsjL7d4uhQqheYxTnCDhtoySG1Epn6dLWbgdu4js4APaRo3XgFwD",
  "key32": "4BFwBLbZGJp6tim7ZUo7JWUhp6kREjgi9BGqV4V7E5YhcUnKToj6G2KWy3222KVL8Pew1Ge72jWBSfBnHMFQy2Y3",
  "key33": "5TZrpuFyiTToSsePFEMx1SjcNscf7NMkdZAZAxrdayGq6WeFUL2MzGs7XtesJJFKpJZt9puMK5ggAhdmsNb2DEEb",
  "key34": "8StdGvR7eQyztmoxFQWwqDPPMgr426D8xDoomcbz75WFMuQqhcvyrm1cZwqhseXFNHekiPRC3swDCGydzt2LyvE",
  "key35": "4dC2fjLQFBcg4F9hXRfXsdMjKcy8NUfiyHzBeqbesD4NvA8hXQ4UWueYj2175W8rJC9s6LuuRRMa3M2yPxEJsvHv",
  "key36": "2eJpBCeRjEm961UeGWeEPQdF1d8wonEWEjsaRGBV3APweinmJdEXhEWd94Ert54QQy5T1RNPpc8orKU7mjYbd2wN",
  "key37": "kzFssGxpjfDnGcv1MfdLMoD7x4pKxyKx4Dizo8c4hWL6Vm1U5zfmAvvJpczv9e2ohhfR2FSGWjxHiDfoXUo7FMw",
  "key38": "5YCwhGbeXjijcjYz8CBescCXJT1MTTT35fLgdVL8NU8cFV4KVxTVunPsqLjMZjooaaFjNsGViWX79Sur5vrsjgyu",
  "key39": "5wRYRgo2i8bxJjFGgUkvfEfSpXxSfnXoJZnazyPZmEm1yC9M2TFfoMFEeinPSLFZHyH3U7B45vT7ES5dKvz68qcs",
  "key40": "2SeXST8Z9UPrKKjHnP6WudJHhTKzugFLEyhRM4CvowpcMejWRufcUqkq1EnPYbSFdhyy2Nkk4CGLb68cbLTL1TaM",
  "key41": "57SWLW4BXUqjeUr1qLBcLSqFUxEZwkXcsifFWLM6cq4gULgpCymcnPJa7UK4duhhpXds8xAN5fJmyoKQvm9SoyKD",
  "key42": "5S3HYoT6Xeh3rvJdRLymTQCTyGbQvqy7SybF2cc49KbtXgbMUsyM8rbvzVfJTWdYmGVm5xNpALDH1DKeFsPvhAjz",
  "key43": "WnG6R5fpQSt1BrrVCk7FujHzPx7Kz3AR3NjV7nnpQanDfSpMaQS6FpqDvYgPPZJtkapC6t4P5A1jtNMYdaoABy5"
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
