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
    "5pUDDJotkn7TfHmtxFwEojNhMJMQkZYYFHFopDF5wPpt7wDJRgxReY3P7NkpF9tKj47QvXeKhXEsAqH99rTz9pC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpMCEZnLvqYFRp13AoeCZKG3fJvyac5Je2woKo6JmSCiYjGaX8KZqgZcou43QQU9V6F6dQf1MgbQXrW1v1RS7L3",
  "key1": "4sxfR4s6C96zRscufpPrTf8oMPXYjjMSvdKJMaA8HpfKpLX165yPvbZyENzoaak4VGi4BV4kxgGVaXRdRiNPjjTK",
  "key2": "2Tya6m4NKM3p79hazJcJySyfefvWSUjU3kBdr2PUVzZ99faD2QDTV8oVZ6vYYDaEwEwt3vkvuteq5SRqTozoWpUy",
  "key3": "5meuPx1g8AmYrpH993aF1mVoydgJoqHFFuZQA6evq5gGNP8C8969q3sFNL5oZvaqEPYEpjT8P2XuvfiadfLmze86",
  "key4": "5R84E4iVi2Tsgz7MvMzRbmE6SfB4MyusMRXkU18Uh8J4V93vzmXP99BMkfB69we1oztovvsRbyDD25ryy1Zc6vF5",
  "key5": "5nJq5M8PvZk4eUcajg1jaMd4iyBgpV1VWEVVvpFNtpi7HqZwJwi8BKoUowXYTNfMt7N6Yptbbj4DaZWmN7i1z1Jn",
  "key6": "64ywUmyRzG6pkaTU3txxoaPBDSts5h1oZJ1gc7qi3uW7BKaNTrQ3e5mRNr933DUWLQrYcqPJeMg5YU9WuwekPyYv",
  "key7": "5mk2YgPQjVKQidvVUnbWdniwACRhNKLpSk496psfaMPHMUbNG7DBp6xArP4EtpGP6w347y5kh3wwhGh14n3sq7vM",
  "key8": "4JrXBvduyAAqQEEdC8a3XVvE8VCKH3GfAj4qvN94CTGhieJRqHG8Vp9UzXdbTua9o9yqkAEzoyPwxJN7xjsUG3in",
  "key9": "3RYfNricxoLZgD618wKBnmedZLSuRUHgWg3UBDpUYJJ3xeC1rgjgiwQcv3W7sgvKbe2NDdrR9PsMH8dhhMpvrU8h",
  "key10": "5ksgKor5UCCxKCLRwuH27w5Q7mNzLyzacntuo9HFz312sMVHqZuJQpdyXtcegtz1HUhgEkzBGJJNKZz7GN4ubusK",
  "key11": "4e2AFwWZLm4J7A2butJyGQVY4pdqo8gL9kR9CARHh9vpgETQHEh5m54VAFGtY4R6DK3fxbjRQf3jwaTbp3JJ1UZ7",
  "key12": "5NCvPxCVfRwJ4VD3M7BbAvAoBj9NFG9t5ktyrXDygnYLwzCH2yDCk2UdLvcaNLRTPJWf5KwY1TYvawxBsyG8MZ6y",
  "key13": "3FRe7YLgfvXDsSworRdkBZccNaJtrWbfWCsy6J8n3wPahNJWZKXkBESaJF1cVPL5D9rsHJDjGuL3BjyDuwfQ67tY",
  "key14": "42jbW9xCPcrVrMBtYiq7yyWk5q1Z3t1iBQN3p1NfeQD4ReTkAmwWDbyjvZR6mH8y94mfeGVYmNH1aAnNhJjSpVTo",
  "key15": "2c7z9zCtwrXVR5B12EMuk2X6N2UnKd6D84NTn5EErLsmBnYUF5A7Tf8hQEf53b4KYirC5fLWeu8Ahe9S8kbkmpTJ",
  "key16": "36WM1VLjH5FwWcHzpyhpkoUmrtm5Ti32QyFjkt97WEFfpZYMrPSjkJvWqgsJYCjkikmeAShcrNTTuFVwJuaUJxQJ",
  "key17": "27S6vPKGHbaYv8R2priGBUXEQtp2AyPEfFNXiAYQPXvHuNTUg51wHYcQS4dhXVyHAJtKCDHdYASbCR8SX9pseznz",
  "key18": "3M8oqNnWjCUkahrYdyKEpGdaXY8AZ7NK6a2KJraQrwnppmibMASn3Jetrm1HMYSXhU6KxWDRw8Fe9tZhvDTQWV9A",
  "key19": "4zYQZEdmyxCkamBxB1YN2duPTkxmECjB3Y5MyvNzebqhhfa5dkb7bWbqM4jCbGsutYL7aNFLjy4Qn7JqFWsY4spM",
  "key20": "3a1SE2XmxJUS8QrqDfzSoYa5PXkd25LFRHwHLcdBiwx2d92WjUQyYD4zQF2rRnyJkTJ9tXJdNyvNZiu1hL81gomv",
  "key21": "23cZdcAbsSexBK97iNFts2Tz1B3dj8rUzyakg2WQQLaU6HPpBX6Y79Ju9Aj7d73HcT5BjVgVXWkS8BoC5xJXvdKQ",
  "key22": "4Lp6TWW38Pi1RFDUtgYmBFQYo7PPK51Squ77t467owCUfPQkzpNkRkAwPozqfsbdgpjM2YsYbnu3FJKq5GpdgAot",
  "key23": "5ETk29PVqUU6g5BoKaWgwetDqREm84oGxkB1dhwm5HF76FBDfZk9bVZrkzeUnvt9s97m2jTrjouwyjx171uZkbqP",
  "key24": "3nkdGX9vDHwnPxAhnATvczjcBBiZF9GQeAMiAogoHWXyCNm1HxF1bSmbNBU9k2no5JY7irqzcF3d1YWLEVARc7mn",
  "key25": "3uX5wgDGqe9qAnDQNHAbuPLxFPG62f3Du6RwdMtm1RJ8gCEXPZJwymKcK9ejwRGmcL6D3dyG8zaN6YceBgCbPwn4",
  "key26": "2DddTKiVW5ZP2cneWufyvGMjhQS1rBwvTUogjECjfBLG829CaibmAwPQNnviECyw6RFMFrtr7x6WiWcmTtzUY8Z8",
  "key27": "3rkWxcTNytEuEezM87qR62bpoLnJ3mSnTMNeVWDJXMHS2Tf9jSCf7wm7xTbL7NrpJZ6pEiW7bCfgV8cBf3fVn3Ph",
  "key28": "2Q4S8ph9HqFRqW83tyBBiN1C33qLXUQZ3gWrEWJmP6NpMhvojy3qULMBY1DZcQVCFcG44TbrVpjNQ6iXeaXfPXmv",
  "key29": "9JWHgGRh8rHDBq6REtTz8zun4YvnMQ52WfWHe6sGyVbwe2RnhGvbcZgLTw1vzNoKpBpALbwicJ9QTQxeAHUSTwz",
  "key30": "4XwxVrptaxXeXraziNPqrjqer5nD8UZDYDyAuSf4TYuxwXceM8rzuqryspDdq9eUHtEv6TwkX6rrnKfDttPFbZLf",
  "key31": "23T5DbR1cHD6my7oXiaiDjNJ533ESh8hXmZSQ7iMYERwDb7mZcyyBAYwu59Y65Hm1kM3HKaHW4duNJpTZM3RwN73",
  "key32": "5fjHJrQt71TwDaGD3Sc6W1AmKtiz5L6rbJ3xUkPVMP4MsawL5M9ppMUcRbMz6MD7TGspkooP6vp5ZfQjp5SizxKy",
  "key33": "5x7smexehP8aPxZ8VPL29uawjTDrnTsG2H79iikmJhTJ75MmyqcffWTnToJUyoWASnArmkzH6jfXTXDdvBVJwwpj",
  "key34": "3V9MxE29BAoDfEVbW2QNYpCPKngGB3g6XZHLNfrdDAZBsfjzDU7NPBx4nNiSBzkR1DdnvBvhZ2zvgUzzirx7rm9z",
  "key35": "Jv968DiethvdVSKtuuqmrgCLKRPrGuK2oystUVJuH7wbsX8nbygoHvAM893xd1ZXUfZYkn1cJk4cz6TCAa8VQB9",
  "key36": "2pKAimJyxPyiAZx54yaoD3csegmgQzfJDbhZZDQD1ngNW9NLQj5TMcacPmFxCaMXTL4reUZWzX3xqwxQ9RvFWPuq",
  "key37": "2GzgQmyb3iQ2dQgYfwFuFeB1fECYEtEy9aBDKP47Et89fD1QK8RxN8MNuV7CQna3bhviP49KSu6Pyh28hUZ9YQcL",
  "key38": "3m9SktBBv4fgasvnGDAARAqykS3Ge9ukxcFshtMW6DZoucTxv1vEznyBqBCpkjfbm61zAJyZDH6xcmdh71GFL774",
  "key39": "2pijeannPAH6P2ctMZ96JzTiETgsmkjDFDsDaRQasnLjHiRyxZ5WPYFKqi1VgDsgW97CjHgQbsbjBorgUqzMg6tR",
  "key40": "5SH7gvVVzhz7oiGho9vc2yy8MH1SNVERc1FJhT1Di5fMkcAqWMq5DeRnC95AhxVT1zeLQNPK8vZiR4VPQESC4XRG",
  "key41": "3FqMh9JWwsoFhtXU2eccbTPAuQji7WZbqVBgRuRtp7rK7qg8AmNZcaNYAhx3B9aVgzVSP4Lns46gDPnoCrjkm6Sj",
  "key42": "5AiViYMYFEjXU8STWT1qiTzMe8qLgLkJVVj7CAdKuTYfNEpmKCNiUhk1NeJrXwKvVv23EyxTHnNxWSRCdyZaFeGw",
  "key43": "513S2iRnBUgwWEUZUv613PdM7rQguVZzSFkwhcLxWKVe6dPLdqgUA5NsePxjdN6bZZQJaN3MfFmPVL7fxjH5KTd3"
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
