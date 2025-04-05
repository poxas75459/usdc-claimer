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
    "2vEwpQtuqAGCjtuJBC2okBM2iyWpF2Vb3cSKT3AyjSYCF5Q3g959ATmvdn4nb5jGX7yHT4xEdmu75sDbBa5gSMXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ok5ze8UWd5kon4cY666kzyVmDs8APWSxbqe6WfU8NAa51MfCnsMJ2VVy8fbDqx1748r9rNwFSN8oT4nCFe1UoBU",
  "key1": "54uWAJqacajdqNjmddaSC1Er6jszCFP3fTKYUJm5efCqxkTx2KfBd4LdYsr4u55dRX2vVUCS5eKBoDLHxGy5jVX6",
  "key2": "5VYpDxGki3NZavSa6hq5zLua4ELpgVuWJyxS7eV2Leqy5m7FbhtfRochkF7Cjv3sYdnebXn74VzEji23gZ5J2tDH",
  "key3": "2NNqSog6wV3hgwNbyytxM5cMfBfoZd5JeSwwUNnwzKJ5NcdQ4mvkbem9fh5vBdF15pGKJEfG4hno66pTcyB28ci3",
  "key4": "rW3XeYHjg3Kz72ZeZjpxJiVfNhDakMH4aLteDhY65Z9eiXbNmjhnZ7LYtASmfdvj1o2PeawucuGtPacyu4H9fpD",
  "key5": "4HeWiz4NgAZ2AAh6cFRWinJy7UY4ykFCUXC8ggcLJWSnAbC63ZSnib2FaTGJdBxpnqSiiG2UocEoKttDXHVEBRYK",
  "key6": "5keoapEzzfGun2AEZ7cw85vKq9x9raaHMgAztdeEikSZaVTheFwFKPygxiV6uxhwXyEjVdS7Yo9pjFVoFhk7V1Sf",
  "key7": "HmrLzm5nSvM7foZfv4JUuCA2Nu47sHJYFetdfeRtSKWLndBVAMPozgTg8mR18wcfDJuy45MqYJdXdW2C7FGb4Us",
  "key8": "4ibYx1qTmo4b3QwtSvcTYUrpPUbj6W9grCxuGNtB2guukwqLKTi3cMxwLunHzZjwM8Q8uBoGn8CPRLKnQX7jn65E",
  "key9": "27dLovy6fMq1z3Zei9sxTMPCeAuEhX8fyje7mU5ndz1rPo6DahNEACgu5JXZZ2mvjKQCvgQUPhL6pgpjk7CQ1K5Z",
  "key10": "554ZMPCYyKxouewY62XpQiMjaCJsWMhncok9MK5ozxqYMkTWy3xzpVkLEGoicHTrK8RczpmZ1EUVBkkSBzBC3Mj2",
  "key11": "854g557WFQbc7PPQz2tViGYj3iKhAhcuEtLqhBAMq5vUzgzZXyaE5WF9iwBWe9K5Y1N5cxoTVj8a1bxsJ6Fdp84",
  "key12": "3imnuHsFh6RwrVfXgmobqsrJ1cqxKjxANUnvrUug2psDMy7iGKsdFj7G6KVv9WBBJe6gWiHpoate14Rt6AoA8fQn",
  "key13": "2JHivoDCsV5JhWW2iey22uEB1uzzwrsANSknaEXVaL5hbfie9LXKPvY14EMnF9RoRUCA7pkMqiHRTuApwfBkMG37",
  "key14": "vSngTBiAUwQLavv2YJRBwsa8h9q6hSErbMr2aJaaJzTwV9vb7tdrUajvxC9ArPSZsdKrD5LKkp51dJBEi69MhyM",
  "key15": "3FioDuUFCmfhLSor5W52uAszcHY8Ynp1DhibQLF7vRMxB1EtvXJe91RYwfBE2pnp4ncmSBFtm9AEfRYK9JA5fPsh",
  "key16": "47FJJLsqK6dYEoPFvNDVPByANvWkrBT3iYYLYzcEJQawScNnrKWrwtKR8YkJCZrTz7EUyBrh6EmtV3EDqGRuD7rF",
  "key17": "5BKeBmCvG5r5HaRxSxkwekEuj1eGk8jxYxpVJ89PTg4qUNijtuDedusK4cBzHgeSSQJDMjUZP6bhP97FmjCmpxAp",
  "key18": "5fvKapnCc1tgCeVzoBiMEBbb7FFBpp4FeQJsXSBXVYNxef55898sJqGGBCXRJRdc321ZAQBBN6NbseZoJ5vVhhJZ",
  "key19": "2kzRfiah7E3o3DUmi9LxLT6A3y7iFRvkc4dnx5qW8SCpwgqrebncpaZ59AstVofKHgXQLCeH3ZmNnYfHvCTL9L5y",
  "key20": "2VDbLqjWzxTdCiyeQZEgffxFedmRUPm9PUxnbzw4gchsLUhSMUt2nKT9TVifUbv23oQbJBxACV9Qcss5vweMHaTr",
  "key21": "58dwfVPvbzqXzKCs7RHqPF4HRhw9KVAYAyukqaKCt8K4M7XaJ95wqKsRHm9MgU1Vw2wqqHQCmGrXqjQNfbaqTXKo",
  "key22": "5NAx7C3j2jqbNbqutmYsJiqv45FAJFTt8c2r3Ja3pNmeN1X5E4ctrzq51vMPd8ndembDNaSwh3D6aeieLCYjY1p5",
  "key23": "2G3Hx6KHAwnQzW7nPmqUV5SU4V3XzhyRo2LsX4Q6dGiUZ6VdaqCjXqcFC7NY7GVQWEo1SU9owY6KSZTu2X5LnzwA",
  "key24": "5Zy8DZ5YZafbhPQBb8fxpQszqHFdYVwRz67qKL7yDHCp5eRwrgUUuwJabwYwHQqi9LaZrimNmJV91Ycqpd7VTrVF",
  "key25": "3B6rBH8X1euoQP8ZpFmU3dqAbXWmhKcRwaVwTiJRzVxqGuFansWpE6veuMRHyhjdPsZTHUR7ALhKxEU3Yo3nUAY2",
  "key26": "37PqXEB7kmU1wfAhKSzzxQdZMuUCuy29hYfjkKE8dGmTzzYXxxzMfxdz4Y2bY7roXVkZ6dZ4ZZexLpq7ySaUaMUu",
  "key27": "2jSuFqqeAjXX3kqvT2VKte2HCkb1y8im6dLurTrN5cxhGYueZ7jNYgMzyv2MHq9gvmb8p9EieqKiu89M9ozWgzd5",
  "key28": "5ckc8mkfoRzXe5s9XgFcqGtnHMrTnYk5hJadJvUCMt4b45voLLBkwaYbFdjo9pER1cd5RmyZGA7WpnhGtqAHePVb",
  "key29": "5s64XVZUx8LgHGgc1uNh9WA6dvtUaHmkN63xCwviQBjP1N4JqN6ayMhH1KY3GPn1bkNtqrnUKuPXpx1sgU3nW9dt",
  "key30": "54qQsWHnwaTaTqK1L7fAtnU246b3aHPt1E2mVFN4DwKGXMinhhe23VoCBU6i7ZSi9nzR4UYYX9LHkm8XbnGHiFVo",
  "key31": "4bP4mzfLRokmku6J6wrLzLuR5QkjUN8W7fxHb5j4KHe6E87P6NJjcBsHz9HjbqkHJMqoEJ3c9JyxG4jrnGbcE9YS",
  "key32": "4srZcb5R8CJy4LzUkAw4Ly4upymTybmf3ekHvP8FBXSHCtsVFmVAm3dYs7RQrgLuvTDe8FU3QUA9mapvqbTtjaJv",
  "key33": "5dRBY5ZngUYHLUCrdvy1bJbutdS7NzMr46zVbmn4vwb5eYRQ5ehAbarxtY8jA3evDzAEakVPjoUjCp99g2Eo6aF2",
  "key34": "3RnGz7mScAXLag6ftVFcKD2UjmJRY89VQaVuPoHsp2iuBfQR7iTyF1KikhfF2n4tBqUMHFpepypKPTiHzLH5Qo3R"
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
