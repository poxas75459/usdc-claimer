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
    "5BjE1HvpXSKDdWbxojnDYwBojjVQnz2cRiy5YDiWvYN7ggTJAiaBU3YTq9s4iCeAHzEKxEx2YjtuBqzhk3xmvstJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYmCpycagQ8KAuyZwUm9vZ954nm5G3iGX1xWQHmG2PLEXm6uTRrLcHRkKaaqU6fEQRw5UQzaWjXYCEqKKhuC2BX",
  "key1": "5CEiBg8xYBtTLUXNKZeghdcSC1GFh6yRBAugRe8wuUnDAaAnsvJwKXXaaztGpLwsg4ZMvKoPinQvcWZaQswN1Bqi",
  "key2": "3tcof346KQXn3Y8ZVDpJpHxKbN9MZeA4wumqomYCqFn7BBvKXFDnxeBLgUR7c3YwwgDScuXJLZn41WjWvMg61ovY",
  "key3": "yZadD2hexpdpPHSoNbbFJ1vgUqDZw7XM4wZzQCWvPJB4YSuK9VyFVWn2WoEYrbBGhrvvBkELN7MKNuMQE4zieVs",
  "key4": "2qnjQyMZUkTs4Sh8pT3c8eJBFHRrz9G8gFLYx5mwRWCkyTb2RZRw675uM1Eu5M7hW7GDMnmYhMPHZEcCkzqHWUtq",
  "key5": "5MWYeA47wewfq5HcKYS5G4iqQnsxLua3r7U1RiHv4D2pVPqchBK85sTKzJh8MiPefTgo3fiPy3imQn3LR5PtvPXT",
  "key6": "oUzzpwbE1btgseT9xNTsM2knQpNmr3aTkRXEb8XuMh5vStxUpZUjGAHSyRY6KRAxA9FtvzcKWocqPN2PRE6Qkq4",
  "key7": "5VbM51TngrhnzS1YtRLpyMr2FaciMFVb78fFp9iJq1ofj7FBR53vxNWETR9cdvrXmwsoGnsMgRsbB3RZfUBmD3Fo",
  "key8": "5fL1LUpWD47ck6eGu5t84td9gBJn4qAfwf1BUooPvpacWjGaDr229HriBhJSyEL8syYsAWxpJa5hTZ441vYHD7ai",
  "key9": "673ZgPpRLLWfGPMGNSQfh9aWJzpa2hBtHnTGQafAFnsm4px9ZuBiR7WrP4voWCFgDiFY8t1v2EBME29NqKFi98W6",
  "key10": "4CtHzikLkHpff3Lf7qtyGfkMrMahv9pzk9JbyeZCHm2ASxYAMhGAQq8uetLF3nWU93wizGqYLsStU4SrHhGvGXk2",
  "key11": "4r8rChypddmzzyEiJKHvcDuPrfB43D9HfsPU35P6UqbDFBhthgbDHqwy8uW6jJQSmntYL9WWa6uJ771SNhG6GVJJ",
  "key12": "2kQJvZGxFhDMaFc4RHXDncNJQMcg9S7xkgAv3LaUfeNubbWkWAuaU1b5y3NqchpdDJoKak39kQtKBJ8fesfLDMyB",
  "key13": "VYkxAc9daS4WMuLUyAtaoQcpZSSQBPcKdG1rN9USgC5KnFsMPq8eeU6Qp38VfTFxjy9YAtx5YbbTgYmQzV2S3Lt",
  "key14": "4bQon3BhpcYbd4581LKLRhbmoNSKC4o7EKbMnBjHvHoKGtGaoxeo63ZgSpkhzGqanD1unJLKfD2n1U6tsCxvaMgn",
  "key15": "4RLUzKYDrVFNG1RxqtQAtEkJDknL8AiRAzmfo7acCNvC4qKcREeaot4qY5ixboPnb3SZmV5Z61FLoBprAEQijS5X",
  "key16": "56NK5M2pv8o3KEgXwU65xdgcgBbrRjGxCbat8f1PHJyLvRJyD1poYdT8jVmAbCcb8bnBCDHe1scPt2KEtgVCpEgk",
  "key17": "52DvjTiRyqPG8jqsYTtxMqYLniD3L85LKC4QExgwdDiDJZJVAtQZbrHPZvnXU5ttEU25xfybpXq8PKkdZj55BXG9",
  "key18": "2r6kiF8TDxo12jx9vRdtid4FkHaZituH6Ts6B4qmtNUBnbA99CM1ecx5CnRZMUAX4oJhkLZF1tKiyWtMZE9eLJ2G",
  "key19": "2aHd92YZwaAiDfdryDZuLsMBs9nizJnPmPAtp72u4esY4MfRM1HMBB1CqNuoB3J3tvdQz3CdjA6nKiydRyHhkLrh",
  "key20": "3AD7n7CKXLkFR7hZysfTik2S5GZtqUCNuGdoowdLsxEJDEF2v79M32kwWRiQ2RhKKAdXwNhSSGaGZdDx5seuy9w2",
  "key21": "2QmdPFRvixB643FsRamjL4ZvVrgKP8Bx1Bgq1zu2N1fBFgydkKA4e7K9RzcLh6Fpdf1cchj4fVbrSfjEGXUNhGeJ",
  "key22": "5bfrcJGrUWKg9Usg2FBMfbVJZ62ZvKR2a6kTxDHGD4FpJRkowKrRJpGPxfRyBCdyDaaaDk7sjMJRzSjk4JdsguEh",
  "key23": "3GQ7pjjComwQ5RUwWWni1KMHpbJReTcZ8D6d6QrmwXbrUhQcHgA7mrttVT3oRWHJtSqPq8hajLjySsNRN8kxY2Zz",
  "key24": "3PAn82MURgxgWfg8dL35LBKqhgZHxD9iqN8BkvH4dtskwYdcbsHTF5bSy19dHZPgczQKsfNjjWjs5HSakwej9iZd",
  "key25": "2jQh1Pwq6puiyNc5r2XQdQE41hxcHgeqdrCkcqEcH8oD27zBPGkcjSaTQyYHsMmSanBGYXewdESTJCY6HFcyPjA3",
  "key26": "2RfsA269RXZw7sRUWhDasN6CjP2fG8xHDQaNpaxfSUptWTTM3HNcWnw7ZaZ3UZ9dZGokLAfKrfcQtuwMBBzStxN7"
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
