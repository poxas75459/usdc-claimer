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
    "5XrH4v6uwsiABi7Y5ai83SWejpBySm4qmyr1GU6zZ9VNamjkhJCVx7War33wb2Kg2GS2n3suY6dsBmGQVqXBvHnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QytgzX3YHFtt5eGVMxRQ2CiYTyZdN2UytQXigqCY7RffyRaAUrN7fUVdZS2FpWWtHFGEH2ucWnqA4TQpADkP5tu",
  "key1": "3nVhf8xzF49C9Y1rH2rytPTQHPUGvVB9JnS35UMvmQNDVZJbY6AEo3WQWnXa75vv965rmyVn63m1CUo3xTpQS3jR",
  "key2": "5P5n2rDr724akywxVyViN4CBNPVBxDjGayoNFEtwfVENuC8YayyGrBTgCpf31b9LYcV8SD38o9hvgfThPPT9knWx",
  "key3": "5x5GKvNtHpnxihn27NeAgWNuN5uJoVK5u11DS8WTtPwfQzh7vWFWwDg2QygWqgN2kkBhCbsQ9xJkDPB36EAr45JE",
  "key4": "3HKvHZQwxgPeCjCy13j7ZV9PtJr3FMdVdF88msQnHsci3ByB1THE8GiAxN6LZKtapXpx281hkrEuBfvDcusZ4ErU",
  "key5": "2kPL2sqYd7HBagrWv2JeZ4APPe9J84TyGdWaNXBvBNebGZ1K5v7puuDRFQDiWdu9iXB5aHZmjtV4wX7Amg5QByWD",
  "key6": "5JzQFLGuxVdG4in3PcJM8C98HNg6U9ZxocwjjAPznvw8DyDSHfKcXfXgCeXvQSAQmhoUb1xouS5VFiBVv4XMvK6R",
  "key7": "4LncgFyrBNtwmg3wDEu21vUmA79LBnHRDVYrgG8k9QDQ3iuMh7UvkrjaGbC1yhmD8qkPBdguSvWEmLMcsdWTbJiv",
  "key8": "22m6ACnt8QaVvgwX66XTVADuqh65oZFVuKQRpBsSb3s8fa4ZLzUn59xpPzL6YuoH8vSQevrYgEj6E7RtJmjdoQkq",
  "key9": "dhWMvFMDBHWqEgBL7hiV5MDnwweEVkPN5EnJDeiG5hvfjhCPN3A4cZVReePyKmLKgJ7vRtbPVgfn22ZMwyf9gnk",
  "key10": "1dwehh3CkecFGNzJepSrLDZhYmbU5i5pXe8EnTe35oTLBcr7SKBGehmxsz6zLrkP6dM56YZFPWXdRN9zEedxRGb",
  "key11": "4gtjxbdztujVoqZTNxkfLWic7Bb8UuaExwxuTDDeh5RWq7ZaFDeTivXHuw5sJzcGPAvQdBDkFq4mDZ8746Giz2QM",
  "key12": "34zZzeTacK7wGpqp6cLyUkvkd6zvRksCUReGTTuCpnzbZ444NWgDLDhibRAYDwKTPygHgtaVLt29bWiXEZaQPqnT",
  "key13": "dLTki5VLTFDW2U7oLbtZwkiqSGSmGaQGMU63BkVidnaDZXstFfB4DuvZdv6jSwREG4LeGS9wrpmi6gpyZBCZh8a",
  "key14": "8pPa4PThprFY2kmHHKSnZ9tu4KQtUANdYqPqPvP1DhcxVb5WvizMUytNq54edXjQhFDDcCkQN2v5zpgQJKodV68",
  "key15": "5MQPTqADRmmbcoJ6ZaMvcqV69JkUwcFM7a4hm8sWLMkPGJTnwsNSywc1UJjLiqXFpLNGWzTQn9WKFVNzCuG3NAbH",
  "key16": "3UnZorCjCCapWem85eJwq3qCgTWLAprPkHJzz18nXSSctXhaDbArNovq5Q2UckKF81JmeZDSYFb1BYmcU46aoCtg",
  "key17": "4mH4b7YqvcNCmd8fSN736ZraEAgfarT2RruzeDvGHfqnDCvW5JVFuzsj32by3EdDA3qKGtqcskbLjCJ4sqdV5WBW",
  "key18": "kErD2oXN2B3ZYLQSfpjqso8sJxFNgjwpoN7cAaUqaez9p3nsbE3mVgBanujnzQiLdb66krUgsbE35tUaobZ1hvT",
  "key19": "4ypunJ9cLP3PF19XbdGrEjQ94Y9YwbHPphyKQVGM2CCqU4ePi4akQPVCfGMmF7RKupAyaFnY1sZn9JBFvg1WFFLg",
  "key20": "28kEta1srEHM5jRc6NC6kLDC4VPXHHRfGfVHLSckSyJ3QerMzQsiqJiLmBzEESdFdDSsWd4oT3EH4XFBwoSGjRU9",
  "key21": "5NKxea884A6Z3mPLMcMpMECGZt5XkZfwZZs2MAAGaKRi8HFmXbwMjYr9Pen7d2cWHkr3o1wZyQ6g2qk2B3RX9nXq",
  "key22": "2WckEQGL6i45EZW9ub1XcpUQh2fB8sSGfPZq15zP1GpekmgprjhwJrUgpkt3jfpwcGy8xf2E7XgFudWQmG4FYhW7",
  "key23": "2xbvmrWDUAUzKsAFXkrdUoFud33QN9yNY9XaowPNcDe11L7fM9JEBZr1pohx3ku3FgcENWckBvEqZkQ3sKpCHcQs",
  "key24": "4FAJHQwXPuHQcqkS92DQb2yKY398DSefLYM95Lm3FEXFejW6oFygWiVTSTiez74C27rAX1ted7DBgRJNvJDZedt9",
  "key25": "27xG7LN4dDD8FRAiU7A4CfMmzK6gkUNJ9SE157nYWLQkzqQhGiQQH9YiWthqE5GMjb9pmm1YG7VQgAbuvbmCmLwQ",
  "key26": "2vQzMD5ayAz3nrcMWVcaptCsRjXZWPMCoDv3F582CJ8eQ5c8UJGzSECDNooyorahMRNV95P7nqVB8AfQnYFdye4a",
  "key27": "yFBz4Z5DErgkTZFyLhqQGcSXBKadfCimXpT1H7qW7AZycd1H94tsdnEhnuPAfyG6WhLkeanVpane7GMQDQEKAbb",
  "key28": "5GQ8MjY9AHh9qYQasVmjaNEp9oFkmFFdPgH22KPNDNHZ7MDW8fEbdScp2JuwEBXydfjRCvaXFSoSqMiNbsgYLf36",
  "key29": "58zBY4SDzZSGxzJZn7yjtMoaBayGQAzBo9CLRgjj9f6qRUQHovQ4bTH31wFMi7JfhEsmf4BavXYh1RWX57FuzEez",
  "key30": "ZQH5pUboXcP8g1Q6ZPeCf9z3rXSa7x7d14nmjcGDGNW1pqQXwQu5J83hGaAxvV6tYqymMPiDDsgjwCD2pE4KjJ3",
  "key31": "BUr8fqogUJa1mwkPQcuW8iWof1HxWQDh5fRXiyCMYjLeKCZ8u6M3vYtbFqU3MZxuyjEAoZCWZF8qBuRmbTmESDA",
  "key32": "2v2EZa2c8VR6MSJHAHPn9zWQBM8kSTdWbq5oAQeVVJ8NYF73TpW8zM4o8hdUeozNqpUoVZoVvSzc5aCCqKmFZZQc",
  "key33": "2TnS4MMXEwCDwf82j5GHTjNhGpLH8pM2wh3iXeVLR8vuVsmVCTGtsiz87GgSSCULFZcLdWcY13J1F3C5NJ4Bpsjt",
  "key34": "5GPmWKYkfiXwkFtph5V8UtSveqAvb9mTjoNbyUS7iPsvjb18Vx61n8d4h2eVUuSZvTTHUQaTYhuHVnA7FRwvrfPC"
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
