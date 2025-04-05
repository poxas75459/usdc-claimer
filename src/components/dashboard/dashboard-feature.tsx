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
    "2dQKZAAAV8QRkYjU1tspNFypsbuLrPKu2F3LR3NGzbhJKtsfMhZmtBnAXYDZTG23SYMUFKsZLrp9P8MzaHK1PCRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmJbBkCb6oLba9h15QPyB8P55AuJoup2bSuNTExPXx8UW6jVbFmWwsQedDJvJDcSBtosWftxUgM1NFxWGYSo3yj",
  "key1": "2HcLM7ohyqxpvwhU3rvF5TuvqaLSoNnpNSL2mcPkrdgzR9DhzwvyrR2civ6tN2Ho6844zZRBqWj63aVJKPXj7mQF",
  "key2": "5WjvnU3tUV5J6YVpJt5XMNEWerV2xaG9GgwN1AkYddskSczpvhffAMYMhHFukuHiVgaPpshTAJpmZR8PYNBaCr2R",
  "key3": "2aKU359HMcPU6YA7nwi8bc14TmJuL5vpVAaizoJQS5kePgNsM6XL8ZoNn5s4KXpNcGtVaGExTwYaar8Cqqds1y6F",
  "key4": "4VNQSS2wUNAPuWfHiBraQAf5Uo36KBfsJabydfakSfvNSTouHXnACeAgSZPtxPYqVDdvQde5qdwdwXfb53e8YGQ5",
  "key5": "39xhR4e2EJ1fmmaxZmFs7HEkSWPUqEvoM7D4m2huBdyaBN2tzVnE64e3986d8YpavoVvu8yxt4tXrM8geG1RKabo",
  "key6": "5PeCfXUjqNqWfDb34cvT8D4gzLoH1qff9RRP2GY4Ym7phNXfKTw1yY9AHccDUetQhqJi8rNXWr5J8XD5tKkKqP14",
  "key7": "21ZzDW6C33H8Tdx5Gv3e4c8cAztQtMRiicRb9QC2St6K5Nmh6NJp9Yu7oPj2Nayhx75Z3EASDLryGSwjft3AnBUW",
  "key8": "33FnMSE2ur7YAhPf1gvDeG5A2FNW3rVtjybxbhgtPGhPdmtjpzSqPLdD7ByDMa4BWoyL5qkAKATvS1wFntwqWv5y",
  "key9": "2H7A5bJSb7FMEGEeE9ZtdRgucyHdgfxwooPyVfXhEp93qaKhJg6jAjTRyBCStSMXgTocSeT6VCBko2fKwfx5CppZ",
  "key10": "5uuAKbW5pqhhuhS2XSEVzK2EdVag1ZERM4LoWLcDSrivaaVdbBempNishEPbvuUUjgc7AtghmcyfV2YfegBHdkVy",
  "key11": "5bJhHEDCB3GghutbFbCwLXxBU9tirLHQS1WsrSiEBEnRzzkYnD9CjnHs99q2Qzn7DHMrBxyF75Gyd62oQ2mQ3fFe",
  "key12": "5dhWKGUzMi23kpswxUyhwjcyxhA79wB1hMSKcLYbqaxL3dwmmoA2i4r1KPXauKedRaMahg8oGLh6bC8ieNzxyHEf",
  "key13": "3h5pqXnSpS6Kr8L7Yu5CEzMKJqaR182Kmnae8zHZoxjwJY4QEADtRgwnXTnheN7DpAjtoRZcAKhHdbryX5Pb2hxN",
  "key14": "kfs4hyWxupq4kD34Xy8k3ZvxrEwgfnHYVgVPZooukXjPHzu8uUhgZAGGv3gasV5ZBEB2Ubt2TDAuSMdDxeTGbso",
  "key15": "3VJBGHhQdrFadvPAHLrGb95ZUsJfLNnA8QwQ5sQoCbTvdy7KGR2M9xcFUm88R5SuZvNpQgK6UEdrBmE7oi6S93FZ",
  "key16": "bqRKGgncACNStyCvCnD3h2uztNe8mn9ECi8UYtvKjgQPvbVyV2cZoDEzR6zAgwAtvyA9Vn6fMTtWHDj47btq21u",
  "key17": "59kPdTXjvb1hgZ1hEB7nwrFa3yzZxS2Hp8aaxhYDHFLKAaFCYpJSbSvZVudwb7cJAKEi8dPro6Rq5cz497dFCg8E",
  "key18": "2YLB57nsAUFJZ9ub84G9RdzMxXpeEMypFrPsMnGrfrrV3ALbSkAHP7DWR39pZNKjWQpQGMaNcyBjzL33AkpENP24",
  "key19": "3xwLhVwLzoon9cepppvQ2GNeocjzr4CnrrVTdTw3sdukwfHZmtoZjDHqkrjCGvVmxe2bJQ7LkJhAtr1AbsY6c56p",
  "key20": "5QBM73n4z9RTwRxZaN43vssA4hPWqtC9zLAZ6UtK6tSoafDGQedVAAXEUeeLXw1CW9dQKQRi74U54frww8U1kgce",
  "key21": "3QVxR9kPww6gB54yzwzucQrUGN1G7cmLkk9nvUUqt9k5C3Jq8B1WQji4WtYuTsstp4udRFGNPBcKuYVDA3poKTrh",
  "key22": "36h8C9tcrDCgFN6DynmobzUMhygLiStRSjMCvZo5zCrLXV6gtyFXLpCHCeMDfgtscA3Q3kgNHeR4BDbufMSJTBNN",
  "key23": "5Eq4tQDkbxfK18W47x8iFe9qB5Lu7pN3xZHokvUbsCys2CcbnBfRZoVTQytqgtDEuWuwvcchzjbCXk2LPe5FFYrt",
  "key24": "2c7NX334ZHy5dkVAck7tMMaFd5HrjXvAakK3uJzRtX5NxEsoXTgkBhqHEDfrEt7kUKET41q3WnctjwmpGgwxEKMY",
  "key25": "HxLXZF5bwzF3MjPeK6XCnGNtJKXpKPdcA7WT7Fuunv5qcJrcp2aeKeREUsSQ6GHUKjsFaZzJQkJoddtzFchsfY3",
  "key26": "5eYsHuB6BV7Tak51TgFCPTQyVavQp8KbUMqz4n3aBVBN6WDXAcMERBdHPsrT5TmMswr4LN3HhHc8whgF1o33Y7qK",
  "key27": "3UF5p1HF5p1wpp1SYnZEM4L9YLMgcXnY2YCAFWpxEp1ruFHiuALpGSNEhLZpPWbHLy4RBbUFZeK5q7ML6bryL6XK",
  "key28": "2UZcWh5NCtce1yZ1b9qPY7oH6kG3A4Y7infjHxMQySziDxCvpxn4Qt3yVdXHhEXkXR2VTz2LiGvhDsqn9gxT86HK",
  "key29": "4bLiuvvkKj9yhNJ8FGkajjnLibKAwx9kYDcezDWmoz37bdA6E6XKFJRKWou6sPHrZ7bBUa5sjLCL383nEN3Jcmrd",
  "key30": "MN9qNK1S8STGfE5ZSxWd1TYX7WGijARhyYMPsCzxF2xq5xZyfgxfCXygzFBKT5F2uwSbtA4heq3qBVx24qrVzET",
  "key31": "456C7CVLEhMprgLnAUoBFGuhqmT38bmMS17McHCEousaVyowrqoBTwzaDrRimagc6zToxqpBPhtNUyMunn7PiujT",
  "key32": "3S2CYqL5m1ERVPRCTmEo87QJKZ5aQxu7w4Q8uUPm8wwyYqnJZ1mHh1BraGePbFTEMEoFTwnG2psuE8kU8jEDqqiT",
  "key33": "3fEjZT6iDZ9QbZvyV15h44eXuoPq9cDtB7m9wMuVdcqAWvYBG4w9BX1yynF3Rb5P3M77TCaPWcgv52ex6vCbFJML",
  "key34": "62abGPkZigTFSmX3cPv8pit126ErPq9HkwooVYxdhkNizWhH59tAyFMpkmmjnCvTe1uAPTLsT7FtgdXbRhB5r2S8",
  "key35": "qTKTkoMEhQMbCwyF6xVr574GcXkTTTKifCmoLpszPv1EmeFpkbcFmNvTaUkuSnePtKBC6KDezDcBd7kTXMbrcQf",
  "key36": "2foFrirBtCpaU67aCqVVsYBVrJgwSEoGnRxXzP4JdBV5Fp9nwhNiw91oiYex3eUZLn6C5hTsZLsLGqpJWyX5HufD",
  "key37": "EQXrAyazyg53BHo11ed5A2eg3JyNEeSUPT3YLPPgY7DkFtVZHRbRrwmnqw18Mvv4bNc46PokwG92iSQ68gxJVTf",
  "key38": "pzGWNYAETnRaRvq6PttAJAU1JAhNhkw9KAF4NXwmdGdsQTuXL9LW8w7cTvtqQA1cnyfrFVKwYvpGg6Xui7b2E2a",
  "key39": "4BtL1hET3eubE92XEPvZzitN6GQxeTBKemsFULjaRTRX4RJThN2XVjVcXjVqytsvihKwp1pfyw4HEXHNDkxhQFXr",
  "key40": "2o6EVtf4FW8hGpV15sRAjxHu5SkWxXWCcNxMduekfGtDhsZHwvXH3yeVNA6vF7sGX5a3hjkHL8aXnq2ZrcbFnqZX",
  "key41": "4VTCBbmSefuHm6KP2iwk1nRkN4DDqAhRcQqXarPnimKaXvEW7fXwxiPqfj6QAcUfjRt7DQY4xdjYoAiVj4DARcf8",
  "key42": "4NE3ZRzPsB3LrpjvZZQSWXN2PkvLrZEZftE7Bjgd3jWcFkHt7hDNhRegjZ5QCCj2vGA6ppELZuYX3WEQu2BT9jqy",
  "key43": "3zfGffTEKYMcwMhyXRjkVmMfjp3uw9KG165f8yY9McAhzBp1k6KbjmFZCYiVmbhV2EnjYnS93xuk5Fpe9sTMjhkP"
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
