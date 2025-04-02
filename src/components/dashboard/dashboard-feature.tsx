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
    "p1y8N2q4YdmtBw1ordqCpvhYV7UHzM6EkkNVXzkLZnsnKkDWWidmR54ATi2msQjV2x4kwU468p5h7JQpW7i1Wzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rgWkkL7mXCfqiDYRTxSYf8pReyuruXSKMaGxPL3U6CahfXcQ4sbfjbESFHFnXhcoLwHLWXPMbLmfGNdYrBgjJf",
  "key1": "D9yEWp2Jdghtf6Nwokp8zQUWdrEa2LQAqJKvcpuXP4iL2x2PZNtyhhyu4wNPmLaQPYiW5PQWd7gmCcqxh2KHbhV",
  "key2": "41WrLpyWDe7njJWASsJgZVSeS13TzMefTXd2B7B3EdWKX7MowaN4hGKhV3fTSxi2diQjSjKiiadBGaop7mfme3EH",
  "key3": "25EpjW9LsMakPh8MqLzge8T1nQrEDfYMg9YAvEc41zA44URmz6iwP1gbvEvzMBYxa6mEpszJA1eJHtN5H2q8Sa8n",
  "key4": "5gHGYUntq3W5XM6y3bbLuDe8696AjDZGrckfRnZRCB5zdJxV2jpAmuQniPQ5o58ZsV2Vp1BVHv14oH331X9ew2GG",
  "key5": "2j9eVjTPbzxZYJuzFqpTNe8VppDX9SnqwCrGZfAv799YtBw4GUDE42Var8XdjcLyBW9gmDA8Nea42k7mQ7zbWnpL",
  "key6": "3xRnkbartFVdg2TddSDpgLZXuPk1P33hbv6sXS8FYYZMVaNKxGuFC4sVaGRocueCk6jdAawEqM7fKBjxrX6JA6CL",
  "key7": "LisQcqr22369f6Y6W3yhgg6b6YrADjJY68sZnajmxkHrHMaMod349usuWqM78nVL3edYqDsgHEraenPxzwyErY6",
  "key8": "4MfjC4uammuTYaMH9qu1Ta5HoJvccWpJNVoYUBNfjtt5P5CZfbzTZybaX5QDNuERCx7eMkiSAdyRRKgUqipUHcYx",
  "key9": "2B7chDBVh6GcNaGa8mKK7xDnxrXAQBgoF9by1sZ5X3zMwUxr9ELjVfXXd1mTXuk97QoWwK4WpDXBRmDcFV6gw3Ds",
  "key10": "qX3aA1ma35PNokF9Kj9ALvdytgsvqeABrwkeX8mMXXeQCEf2c2ZRXrBBKgAUKhoqTKvzBj8GE6joNpuqKjasEwH",
  "key11": "8giDst3w9hVW7aGFu6atnsqeqVv7sdWMn5SDUqDPGnpvXykQ7ReycNTw6bmmM5BMqY8CeDcW2G1ZztFSvLsog9t",
  "key12": "5KtSV12BnsnsvcdHzvSwZ1KwX83328id4CwCqmvjugwBbSmkJfhbcpnucYVmsgQr5SvyZkQ4xrspZZB6QQjG3qZA",
  "key13": "5WsKmtTapdarFWLk1VHiVAXSE9YyTTsjDZpYoLDscps1P4tJ1PDMUiBbvscKDsEqjDk6TeBHjjMwBspMiuKGUFg",
  "key14": "3zVu1xVpXKS9Qtpogd4BUJ3w1QjsrRCNkWXTGvzv4yhZqNW8xE9BUeE7vKGxtqTncLN4DphU43NNJ6BMM6R48Kan",
  "key15": "3XQ1pzVAA7gv6KmK3du6jPNWamCjDFGFiRFeCt9RiF6ezcsGZdUh83tC6x7XBPG6Kf1Zgqvi1Qt8Eeu5WHCxENK3",
  "key16": "5SrAy392cKuwWv5f2vponGctBNLMC5tmgb64Q2zdqHpXfBoyAbtoK11eZNbawXE2hmkdSaNqE12HsQ1KyBsuhfVF",
  "key17": "4tahTKGCvD9xQA2BnYWjuJahJuo9AE57UPAqr6pg3zsiJCpg1grx2CiMWRjMNxShen6yVAcB6ZBC9dcSzuiu4mBT",
  "key18": "5qKRtTsKvkR18AGf4MhQNPvi4DKTDwHe7Ri8F4jReSHYuMNcnmJ5z722k6qpTudjsVpDUKnrmEYAMHDNRZTS3CQC",
  "key19": "SrVmwBeZePzXw6mjAcK9bwFFbzYNwX7vw5tgJXax29wkDPYYodtBcEAmmJ3QsQoWAJ7vEwYWxKeGrVed1ikEGc3",
  "key20": "4drot2ZcGZKkRhGSvZBS9Mh13KfmmW2fQCWmUH563jpwiamQctYHF5sxCebDCvdt5r6gAuSivg3BafWx3sNX3QgR",
  "key21": "3F7QxSYhGAvTZXhWv73g3cUEoECKtyx9z5qmZw7KAVvpiFvrwrdKhpD7GGZt2BPxn2tJazUXvrnQVdcLQRV5a9ja",
  "key22": "3L9RgF656ZM7jM8nY4HxEJvTQkCpuYB5ViXA1a4NkQYNQ6i8V18HCidgChcccVk7phQX61cbPy1oB8KPkZpa5TK4",
  "key23": "4hBnjEE61rUdyE2MGV9xTNaVwL9k1fCZEeiCTBcLRgQvSynQdf9o1JQXaB4zTJyjSPmpSb88DGvPQesnHXsRmS4D",
  "key24": "338WaxhZC97CeQcY3Kscg1j9dxCaKMzfkmH3pCwqvfTyh9FCAZmTV7aYqu67Po9AoRqHk412vknZbqVu5wRzVtN4",
  "key25": "4wvYT7AmDwbsyBtbdd2HkFS2sJdVPGdLPH3HheCnJXKBqL8wyef19cgXJuFHqxUszHhWwVurTKfaRCgZjbtpQ2jW",
  "key26": "5hpAs9hDV7DrJ2zpCy7ujDjStn4hxnKZBGLyxPoPtFZKkuc4RuZkgiJbP2gJ8MrJdzdPue4Pf1sENzLqMiAV9whd",
  "key27": "654ytZV8eZoC15tvTY8gz41dsyRj1U3CeJLpswF36SAaiGKGk2XGsn6XSGUJXANUvVoyi5qUaC8Uo41H2XXfAUD9",
  "key28": "5CzBArJ23HM2KeB5ZU6eThKx3Ey9RNHiXubH7utM3x9cLU1cSaLuTuVkbo4QANK7WdUq3yHXjudb2ToHqDNDoLAs",
  "key29": "21b2nr4nHd8DfSR7DCbqGXBhn1doGmY4e6eNP88EspJSLEKveUwqDhDvAbnkCGHgAe2i7MxUCapbeqejXErKzJtN",
  "key30": "3q78i3Hyt1MJiFkuigrLFFk6WvwUb3NhFxPTLfXMeRHw97DwZicAxa1CUHLjn3c9cL3cf4JKD6SZCY19bSZPTEwi",
  "key31": "2MiKjmAbM1uKzbhwnynSVA4cz6LFopPAnBFLYqNKsuxiD7ZsTK9rDB5cWcyPzjQX4z4TdoC482nmd63j74u9ggyr",
  "key32": "44U29PCRoS11HMhuFbSTzwQRfUK3V8kagqEDQJE5vPhJFa7mjvGpnwe4wwwwuH6ae871VsfHL6tCVAsrXvDZUd9r",
  "key33": "3JiiXx24kaoDrDQt1F5MRMaXwp8MYikby3rg9c5jc34fHmUfg6ui9At9MM7gRdW9b4Bt4N6xtTxAhrmrt8RBt4vQ",
  "key34": "5fX2TzMLPccMGDBmf8wDsSDL3dpT8CDy8Uxi3Ktn5KeFp5oFYcLkrBNWND9QnWY1Z9rjwCsdm3x2NkjP7H5j1Sih",
  "key35": "3kVMJJchvzxervGjvnVWvgypBhhZAuN21pcbzp9g31qMxX2XykLxMCrZYEjetfvJXB8bkZACc3BdXJUYGamfFumo",
  "key36": "4dM7VEkA59hy97L97ro2vxpXmsLUPC6KHYR6vFmYZiE9jj5N5Ndbzz9v17buYYwqAE912TqkUDGD3adUdaujJ98e",
  "key37": "JPX9erx7kV9kHeYjqp6Qotqx2qRNzP8xyBBeyHNnyREnJBgcffZqYLs1gWme95VsyifLPeCzAUHfaE9EGU5eddA",
  "key38": "5fE7uWbfGtrjPp34RJfjGtdgu5FbpxoLQ5en6bGx7EKiksxBLBoUB7P6y5nkTxYcukbLcT2TRgop6VRE7SdTcG53",
  "key39": "5duoeoSijU6yExywN6dkJnBtRTVFX3q1TTXzbdXxbiEU2xxQ8YttEeoQoQN9osEocpkhxVoxLaWv2a4vvbCNJgSU"
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
