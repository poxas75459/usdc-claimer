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
    "JAWgR1fG5NiSwRaoyb75rYoytmRb4FnARGSFL8nrMMpT4rqTVWTT7TV1zv3aEKWhmdxGfndY7MmnvXjgmvaGBn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vhn1zq8HzsGdvqV9xPzTVvA5YrREwKjXomYRSwYRnGWWD3Gm5qGPYkq3mAsHY2K5amcLiG9x5QXaffgGc1SfqNL",
  "key1": "xnv1QXxEo9NX52j5nBqkbCbix3p7VRGoDJ5W36ybi87LpaCJEZMrPjrmwrKwhykM5mNNVKrGEmKyCa4KHLreMd6",
  "key2": "3Re4eHPxbAV5CY21ajAcHpS4w2x9Hu1sWX9nuKiVCdxBM5zsa2NLPvd53hqL5rtnmQD9FSVLAESVfsTFrH981xgW",
  "key3": "5i1HQNQN322XuwTpgxG8tE6VUzAM5WnYsZh39ynz3owe9M4hYhuE119Ljz3KEfE8hg5LBvp6Gc8gjVrquwD9Lgip",
  "key4": "4We3q5VoVq4y2WiJRWdv4NgCvGCVFv9RShEoCTXdkjQUqVbVbN9dA6gGWbD2VF2z99LKQVr4CGLmq5c3umhLAYTE",
  "key5": "De3UG3vEecWDEHpJMv41HDSv9WFEa8JkeHrV2KccR698M72uXcz2umD9BNP6Tnh8NzpyCb15vzPyn8B24XSBf5m",
  "key6": "5qXREah4wBcPc7DQTmPRHHuEu6SyFRRjzyPqqJuVMFkbv8Thm7ruWDnimJqhthExjGcWsk31VbWFch4FJQ3x7DvA",
  "key7": "3y5tciGMKDgwMHKdkw2oG7TbPZzE6xk23Q6nbYfdAH47LD9deL2aSRGU4VnYsc1ESj4jeUps4GbCKdhHFWe4saoA",
  "key8": "5e9BthEkio21YDbPrmgqqv8BwoSxZniDbceH3abdPXyx1ZVEfskvnu6PKfZETQGnzkdtN7WX2LfUbudKMGrr3wzP",
  "key9": "4QY8GGFckBZLqvucNA3mk7zATr9aZoGL9t7ozgRArsqkybxQp4U6iBuxmi98mVTUZXdjxLeQDjZ8mJGHCgUSPjJx",
  "key10": "4J5DqNQV2dqbWz7M5ExmRqM4LZcKxZrzr1k57bmXAxub6hGsZFNbinbyNRXYMaWaj7xMD32Y57rrKydJtToz4h7s",
  "key11": "2CyPL4AaCttTo8oHzqejxDarz4kJvk6pmNxx49NPPhvhWeTz426MGpfNm6nc5XN3wXhhFrHs2bTsXVh3f1atefdL",
  "key12": "4XX81FG4fFEM8GgmgJjoZsnUsBMygSLrqFxTu7a2HGo7tAahKQeQ6bG8QA6e3UPaKEVTi7M8cAzNuvJZB35ei3MA",
  "key13": "3PcQT8MjRKXZZGWxFesJDpj4EwjqzRNn7KZy4BinBWN8ku325TQ7op5WZvsaieCGeTZCJCNSLxVdiFjdkc5PtQDo",
  "key14": "Hmi5BRurD23VTKQYW7g6QEusR3yubktC35Ze3aBzNxuzxejmFBvszgKepC9pELBsjEqNrXBQm2c3ywo1iTvzuXd",
  "key15": "4C2RsbLeXb9YYakUasQ8k7S6rrXwkUdQtbDsshgrMXqDsjWpaXqHdfyTMzstBVj3EwhmKFTdXzWpV1k3HcL4devD",
  "key16": "2aRnsCjr3nhZPYUh4A6NtRPefhSMdeh8rxGvc9TqpArtKT9sKoB5FML4MyMMYxjskvvJGoP6G3HdJq6ArwViCs1c",
  "key17": "4zrbEMmKTYuDDvpY6Zg8i4otaNL2vqL7JuYqMzK284mkeDuHpJFSYF6MHiHLZvakNfMbgZsgykhQDYCxLwbeaXpB",
  "key18": "5163kaGaUcQ8rDz9njaquEqMTii31dp7tzfDcCE4jFmwR8AaqvZrThsdSTJfxCTi8syu9GzQS9VoDxZGFcNCyyUc",
  "key19": "3YPSjSkhoYeFTRY54Y6rpxrnDnC6NuDaUdGBPizhXE717J4g35gR8tQAQazdmCtrPbsGfX2fyrYkeXVJu1pL7ZhL",
  "key20": "KzaPSyDJXAcH2GCsXCE1fDsLbBtGVL7jkcdoAHkGDWzeFAo6MwMKgy8M8K2HLQkEhSXxCLw2rFbn7qeRr5JHwAB",
  "key21": "4jRmwwCH8ffDfCMBZnmitt7AMA5CyKPwLKzNdZfXjPec23mJSZw3YSntYXnC9yA9CC4tR9FbwymegUYY7Y9pdjts",
  "key22": "61kScZ2Hc3AaXSWY9mFGTqACTqn48zTGPUjEdCjNowpJhG5fwcebysCEePR8CLBfDbmsvJkvEHAxc1L71oqh7qWr",
  "key23": "rRkGoHC28pqbWrZFBZn1mWf8vWrgtjQPknP2fAxcExEtxtPFCanrzEftczaKVy1zUoH8LB9mW37pxffwSRmKcCA",
  "key24": "5oTQkh8oiEtTs6fdKE6sEvCBvKApCjzEZxKSHL1FG4cbATvvRPWTaDWtRm5cEs4Yrrt4ZnLBNiyQsKqPfEEnbERo",
  "key25": "5VM7Z3dFhYxnSutqqERnQ3fM8W8XzpmZmWGsYqxnRdp8T5Gp4KJEWeTHt2vZX5u38sVS2Y7A53oZdaa8x51fTLTt",
  "key26": "2xmMHQiuZj92nZaVXCWyeHqeSkUXEEQmvEa4NsemrLhmYTtfPtoJz1NgF949W3gQ4cyh73FK3DPB5pyVXfHkDjwi",
  "key27": "4Tz1ebAKu3W2ujFRK8iMAQNMahEEkGUdj4ivmCgxxAHMWAudVeSy541GyVro8NmvEEq5KMUWXKMzft8PxYkFuyhJ"
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
