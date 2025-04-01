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
    "S9EAMRNbCux3mCuysGdAWoyQbkgKKatg5aLsvWwgYFqxJaHm5mBTLA4rvdfqpWqEbqf2c8zNLnXNb7LrDM6RWBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyZrGCEExYUaZPTBkmMryQfGS9cziSAEzMT6k4iGWnFPJR9rB5ahg7C5dvLbY7HK4NEJJdPS1nF9y2JZq43iS4H",
  "key1": "4TUVMhbbbc4E1T8HniwrCydfrgu5H5KmL3p3jL9pqhUN7FnqFHgoZP3oXjgz53CWXRxsjX8NR4VUJ3LSE28w6CMo",
  "key2": "2hStucK5Jk3HpQt7CmekQstX9yqKgXgi3Rbnrmp175JZpCoa5gxYSfvj32V6hTUHgt1YDvL78CheKei3U7X7sXey",
  "key3": "2V67hoarA1rL22fW3j7bNViqGvSKRc8Mwi1uQEXbY78wzxr9S1m7cBQRJTGwefofHwgVBECj982PbDo1byEMBben",
  "key4": "39s3MuEtGCDBvP9wssELr3sbNYKVU5DKNE5Lp3htCxqGXAtSQdG7n6b73JikRv2N1xGBGPMjWKLoucuH8vygSGks",
  "key5": "5bAPuhaHKUKrPFhMDDPx6wSwY2J78Dn5D3KS1JLhwtaJ4Z2S2fkBoRDbGBxaXM7yCEnBZHK6792Zdv4WLUeU8fDX",
  "key6": "5Ys7idQn7BeaxMADX14SJSrqvrFYjc8c35BAzu2DE3YZrpwteb5ERf9EY7GCfdCQLd9txFjhrVSm9L5959br9xko",
  "key7": "RoiDMkhcoj3Dmz372iTp51X5VS966zLPTuRyZmgHC3rm42nERZPH2sQ68inCQcWBwTVtrNEej7k12WnGvn2649p",
  "key8": "N68ej4npKAieJSkr2dQhoFTDzd2T2HrhqkX1PvJjV7cJ9SGz1jp17iDHtWbKKeYZZB8jw8hLSC6VaMTfzAhgwih",
  "key9": "4ht39SmGDxAJ4qG9afjKpEigKRC7aZPJ5Z53jJyQdPTqyv9YLy1ybGDm7tayrKb6SY12b5yiDeB9wVVbozpvun7L",
  "key10": "NnBXn6C7xBaxwB28UeYJMUrk3SVvhaYKAwp7TRD4bbu4tdu6ZiyFAQMM1FgmGQwmW45442NwQyHLz3kYvdBJR6d",
  "key11": "3oswSuEQxD3mgN6zqhAtTw7gxQHssSk2kukEEMkg1xPV4TXwbdZgGkjnBRMF9aRX9CRCbTWBcSEApyvjEnfijkLc",
  "key12": "5m84uA6oXByi9LvZvbrFfDqgjSrpfviX43EBJ54h4WT2Lc8wkP4GfeRAigbdGLYferTjc2a8PE9PBjZYh4tazFFd",
  "key13": "gGSxMgF633umXaVNFXnkcvb6PaFCfiXsWtJvFm1A7K4P5owYHZXZb3MqMNmsmvJtDTTiH1TwuoQE36RJ9HqrDnv",
  "key14": "42ggUanV9f9SgyYdaxfJVrtDAqaqMUVPFYHQDhsEccxLfCzzzyHDAn1tV4KT2rsGGHafkr2mFxG88cHGsWYR5hWd",
  "key15": "2fDYTSx8x5au1hpboXAU53CMm8AeJqxzYz2QaXBiMh2uFmH8jcBwHo1hhHoLZPyjQAWt4NkHfd4qna7TS8MWVqJD",
  "key16": "4JG62v6Qcagdz2xUDkRTwihSpy5xF61WnpJV3xvjzLkSSboVvw7pyFCyQzzi2W4hUiEBJpv1LWa2eSUjRSBaV2BA",
  "key17": "2v8BVc2DCKWnKX5WmSUm83NgyeLV3kknPw5MgR55RF4it3FmfSfhtS583UPhvppXgzjRM9v6zyzrFhpBn2JC5P6P",
  "key18": "xGH1hiEUYAr5g4WYrTHpt4K93i9DZkYRpRmoM6kF34z4ofQuLN4X4ySEfshHyP5afuyoXDKLxj9YNHEraoUah4h",
  "key19": "xZ85gNEdvzCZ7gDF8QgCN5oyCLC8VG4ShfBpBdSC8QA6ARUcDVp59iGnDKkXHhaJyTv55WGHmGmkEn1EMUXYeuz",
  "key20": "3xS4dkVAyuBDCf38ccpmbzn3zbvhPZLQ1NFuTyC5rSEqk8jegDHugg8RqR3VNeHRdV7VCXvWELvyGYzd3r9SDLHL",
  "key21": "46Je7ynjkMb8cGT2i115upfebPEa55nXJYXZkv6jv6AX5M9DM781xxpYQTYkosu84thwcPzMYM71oUhgVjpkhGwr",
  "key22": "4zuHndcASBVMHnqXEuy2Z8QVSZCARJd4SYfwbfatikRSh7Dh1avLxiMLFdVHyy6uHjWxfKExkBNsVgXKx5tDFa6a",
  "key23": "5UYKQ3Ux2WEqXus686kC4Y5nAuc8iJbCSHLR5pAPvwnGgvD3rzJdFdg5eT77vqYfcJErAuqrFMQnez4dS75ShyLR",
  "key24": "DAvLp6YifVqswt74W8kHzKwQe1v8ThfZenGde5GAK9bh96aTCCqqjg2Q8jMUzjKzKAjMBYxkYmkdAfvtSoA4Ucg",
  "key25": "4oQw3GSTFwkCZzW1roSEifP3pKLiFkDqiB1WHLmyh2QcigMGSn1UMNrbMGpS69W7dNMC6PftxyaVqHzwBBsQoUCS",
  "key26": "4NsCRUdmEqkMX6x7rFeQ5zWc6C5L4ajuiwE6khpPo1MM1fg8fuDxRjX59qmhnTDCEQVVfKUZTSXExtzcykGbxCBs",
  "key27": "P8m2KUN1Q2e6qdhd4pmSTujDJYwjmiA3n4JLXWn8EziUpJRBhFAPnrk9e7cchZJLSLhZHkfdqss7cu139Qpq64N",
  "key28": "E9WaYGr6GcazoWnxz2oPke3tJvHa5owJGgduajohe5A5tHp5zdXvkEQ3XyhpHyKSQteZMrwtXJvtESJdPDxeGK2",
  "key29": "2McDracZHND9B7DUBCaAo143cATd7Ykm4FyuQtS7AiykPrqvU3PCV7RMaFy6LYi4rrzKnEBWoWXDVvWog6Lmbg73",
  "key30": "5o15aPYojB9QkzbLpjiudu38FwH1sTdsQfkZSEp9HrgyNu9NxSMn6sCHdFdXqshQzEWeYSqPiPR4xcUjFrtWSTW",
  "key31": "5E4SuAn7mzCVn22jfepBjt9senfp7NCvHd25fHFXip421qdQLFH4idZmgA8emihuRELUaR2UYRsRUYWH1LTFXmFh",
  "key32": "2txWwrjE3qaXspj7TRWbZ5voJkZvXKv87wuMuCJ6Sc9DeJibYK6a5hNHZkKer1wVeW5PX72Va2HbSXPJkLqxtbfc",
  "key33": "252pHvGuwHyUe1GjgjCvVGdpvhYfwTn9yVyUmqvjjYoD4DEQ9SazU8N5z4Kjwyids1Sw17t8DYhvrE1jkq3HkMSV",
  "key34": "sgTgPfm8vWJyRq1HthAm6pPYYjonLavXfYE85FPqcxX43jvt7ndqyirzwKsPnkE4vsMwDhMc27XCzy2jTcQ6xTL",
  "key35": "3Q6gQJgncP6P7CRj3XmpedceUW8kdVrcvAeNGrXz3UYd3XR3WE8PXoZecz5fa2nGcj94s8szdcWkhwT2PtvXmmyq",
  "key36": "3XUqUoFkNVoqCEjUwTREvVZcPbovWioT1B3Wt1c2PwmEBeeaXY3y4ST99rEr8QLYgQM4pHC92BuHXWgGoti56ZxX",
  "key37": "3NMHKtzqaCwc9Y1H1LCDyFb1WdsQnoxRa2KTqvT2v1dj69zJW1xU8ZTsKvX3bG1Rk1UBWWG4YPHxNUDYMJ5S5RYk",
  "key38": "52MEiZivW7YYkFmczGfzfAV7PGguB247LhTVoQEWZPRNqaa3rjC2GrpYby3Vc1YSvj6fauHo7RkUz5HC45vCM7F",
  "key39": "FKmGocdy2GVhPFKiCKau42agVUQmyg7iMxvn3csLq6amNYVBbpDtUN9DzzZACYgtiPB87pNYfVEwGisjnDsX7gY",
  "key40": "3UiFDAB5piyevtRPA9bMFvCLZKixBAKSuz7BRMFKEVdgWJiJ9hui9Ps3qgXLuSozMUVMtG9MtsZo4i7YXRpT9Gc2",
  "key41": "5az9QYBSacXMCGZDQXE1ScCidtcZXMz3z3JVYRbmiTHTg7QUazbxyu2QMCfaE9s6urmguHE7cMWEmu9HoGhb26uP",
  "key42": "4kJgds7taYNtA6aqJq9KXmrnJW3yRqNJi9Y9ei4tQzJzxLcrPzNLEKjvdJNHq26SZ4TT5gNJP1xCy467ERWBpNDd",
  "key43": "5KzWnfjgNVVTQa4d2Yyvc8tiqxMV5moVewWGvMMGtAGYKEaJdCqWa2UiQ1Kw2tCXq3eZitA8nmcw7zFG5hotTDjJ",
  "key44": "3PjLpzS6o2kWuxvjo2ADw2CzzMuXEN7Nn84t4XVoMxcsneLArA9trr6F5da9tFKxL3P4ocwmFgccBEnrXEkmq7mK",
  "key45": "5wpbuc8zaTzq6pPKTnahLP57AgeAr3iQi1qKndazBtmD2EJKiwZh6NGctmbvMo2N6rb8re3E4oGLysABfYBtdTkA",
  "key46": "66RN7auFRFPXKotZjDfCzUAPaYP6hYwnzDjPLY1UMCNei2KDfK7AfaY9gqySrguJEqyAYdtfENEg2ZSNuBwmx4AN"
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
