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
    "5w4Mm6GGNL39EoUmvmyDabWrjeQzJzhYBTHXyQvExx2FxMeKiXiaXSShJv4FaspLFBuZ1raTYW3haRhxq5GWLJxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2Wx3gvQAQkLwspNfXkBoT77J2ab16jxsVpPEbkcGBvwpV7fSAcRakw9PmHmz8qek2iYeaVrTP65Yb6PEcSqcqc",
  "key1": "5ZmQjZoP8cQpyvhsDhMYabYkdASzDkS3FKVFEioCmafVVohZd6HcST6uRPY6vY8KjnQCtHhYRV5TGBQRTRr16LWm",
  "key2": "TnLv6djX7Vz9C8KXMG8UCtYgpYgAC5vivbrLbyqfi2KXnsi7MUzHCbUMDHyTamxDv28yHE8GD5TJsuVSfMf4ZyA",
  "key3": "RAat7RK5s8y67BSCVBFL3PrmkS5yRSSSnoPnyBQmnEEugMh4P5Qb1dAj1gBKp6KwMj16iSgKsotxza74uh439Ui",
  "key4": "5i5Uzbk3t5M8YurKwANsyR9A3KEDV2KsAndtb2g5PwnTbohhneo6GX8uoNVoDMirzAbfvymJ9gMEF7yT7ch5YE1n",
  "key5": "4Zu6zPc1sCUf7krErYdwTBd6PnDZK5fCmDN5nJnGwUR42kmakZTngmpuLCFdKmF2GVZcA8JN1wgvkkrb6TJaFvxq",
  "key6": "3oqQNpkJvXxuMYiJJ2aDxBW8uXRaP65WnipTzjCF5AkRKNTMhQrNgxA3bvVbD7LvJ8zM8aGUJvHsfwXPvi6dpC8H",
  "key7": "45EpRdaQMFdusjyMu3cf1qHUp2865d7diZiduvUMYLsqxLz4D2P3oZq9BqQQKF3RDzyQMgvP79jvLHE1vEcmbC1t",
  "key8": "YwNgfeb4bwGCqwntoNjmbnZhhy1ebwgSU3Fujyt7ATsBF1tu3eyqk6CPXqAyQetHe9Q2RYS56CJSYnNcccoRNzK",
  "key9": "66Whhb8ZA6RSLhVvnzY8k1orSTaDKtjjBcH99fZp33kKkgnc7aWrA17dhcoUk2S5wtWGwQPjxabQt1rXgyDhssLF",
  "key10": "2yE6g7xwKRSKRBpyegrrPajRRw2U9qNKXAqRA391B4KVosbccNgW5er7tM6EhJbSSdwoQw2sUS7cQCyheoWSPjYN",
  "key11": "63Kj18GugAk9oXUdMmJ3u2asUQ9Q2y42oeoESsnQxE9Nsrs8Pf13BFrDP4Yp87VcVP2y9RtbdcAQK26mEoiKwSof",
  "key12": "4i34GNrw7je25kJ2X6suyq6WZdQvkUf19YvzAKFKzZWmWqppHGq1bCfLcKghgAueG9KE4qkD22kz1pJWKd1cBD33",
  "key13": "3tt64n57n1qUCd7KYJL9aCsyWdr7unNt5MRU9PPrtKHCY3qAozQQCAJ6uTzV9MdBcg5cwsxnp73ThAZ31a3JVcLC",
  "key14": "4S9or6PABNVdSyMZzvovPfGwJbCE3p8W1yjhmVpczAmtUQD2eGaPVXbkpXr4hrhZcbmkMCAB8oc2eSU9yHsbExns",
  "key15": "2Zdtk9eufhTdpDjRcdMiZHNPdB3KazNGSRcFmSQoJEXJYuCgiLLNE5oeff4UpuU5eLTTXQUGYEaYEUcHsbFLF6vi",
  "key16": "4PMsaTCiMwBuatszaaKPTMdFHHieRTNiNwXFKq8qMqTUCLEz3CKarv8MaT82UQPLSULGN231c1vUBr7QWsexhru4",
  "key17": "5romjkR5ZqKj96A8a7LoNe5G8FR5PnnzJaUGPPu1jqFDbbjoSoP6zAVVQYe6PxzAv2kexzAr72NTpeRPYSyEpk4e",
  "key18": "27L81gaemPnjVJ6c9gAKWoQsaqeg61xM6a3sz1NwZu3wC9BCEjXtas2TTqH27xim7sp1eKnGDt8b6BUSxcKvm5hv",
  "key19": "5utYUmcdNoCxcjBGwjQMchziAtCJJ2d2yxhjeuoinizMFa8p8vcBZDVBeQs5Ak4Q2Pa7Xn96vSvf2Wd2dz4SgXrA",
  "key20": "56XGzonrsXZYoN6vN8xeMK7Vwu9bMYSCwuSZXmfGMTXu1Cmr1p3zBrd2QwwB8pqAKYSVYMoqQN7NWnUztNAn8ZRX",
  "key21": "3hoPz13a5RJifycNXfoAaZExoB32FrZipPif3ZwJnnCkFv52AepqGB3j6yudz76jVaRzPYyePKphb4pTG2CWxcLB",
  "key22": "2adUX1VyV3Zwv5h5Cdv8CX6HrcxbarbeaQDNuG2oxQckNng8L4UtAZ7qDL9c221E41uPkFaw8GMowcnqbtdcmyVR",
  "key23": "YqrLHDtNgnNBefQ4Sms2dZMPzPT1EqjZBk4HYe1bFgzXYtEKt5n4Q59eeDvdSXc2F82y7ZJomAXe9ydQqiq9VjU",
  "key24": "cqvgt7EEnPsa2a4e1dMGXqzmTjiR3j92dnxrpZhXXYtVoLfKbQtuND7gc9bJCQN5YpSWtCeMzLnm9hT2yepcnyY",
  "key25": "5kvixB1NV19av1dP9bZ4anEPcrxX9mtt3WDEUDQuT8i989L6NwgjsXZgLZ1VyJv6WWSfEH7oL1AdooYUjM8yF49F",
  "key26": "2p94CDQucR3PfH7RuF5xQqCTnLmgamhBt3TMLZpcJ3pTJQm4hoYwXUqPnCNwyVqf6DcuTh5sXKZsZcZx8Yt1xA8L",
  "key27": "4TmkPJiEZYTz85JfVa75wboxJsyWbdnHSjgroy4a7wWmceGo7PaPpHjTBVJjwjdtNWLKdxZGHk8cSuqi9Kd7v3fd",
  "key28": "67SUVWRXasnMYeYtihtZkNxYFHhUpjYvZKoEuBoTbgcczcdKJ5gynYdKyUEiVqyPXGBrbFc26QSM3wWp3a6aJSuH",
  "key29": "45FRhxRdTQZtbQbKTLvtL44YGV81595HJm1kx2gKtLeSRuBpauq67ekkzWFn5BNMkByypoPTxZHF1ioS4a1sfyPV",
  "key30": "59HmQKF2KxS8BuKyGJ4wnNJ356c82NCqwukYK89vKyZpF2KertauA1npaRUqCbBstH2cxysPdsDAdMFDpPXWFRDX",
  "key31": "4DB2aWoEAShBymtrRCF9miPavt9gwa4xbWePLZpRRr7fjkpUcF3KvdyWCAg3NBGL9NkzbjfNx7K4yodvM8RCW6ET",
  "key32": "4S1GBN3nM9A1QpBCheZn2ySwp63dvHwece2M36Ee3JJEsaQBYHXhpwQDozMmPvMsAWf5FzuHW4w41B3Gc4b9MQWJ",
  "key33": "3FJjcZnTYTCM4irVnz5N3XvAFxRKMe7yM3K3hqH7voqBncrr2Z4GNrterncEHxknhoGij35VDHC5QmuiSfsyuEGp",
  "key34": "42VU5myyXiMwHgbhTTaeKh6r1veKWnmneAJEGWQdghoUzhMLSJxXVVeBBmeQYz61kSHZ96iThYrgydbDFioa6MSf",
  "key35": "4gvMnVoACLTfv4mv7fPHJUHVsMSiCg6s4dWH8Pd6uCuwB2VcWaw1XataVDkkozzbwSh7PAmqzg6WTvfqNy3K8bre",
  "key36": "5UzmwzaNU6Qv5M87H1fkppRzitQPuhzGfFy94Fwk8oezoZY483KHioqKWE8pfCY8w9pEuwMz5kBxmXvXXiDbcFRL",
  "key37": "3jLPgD68Uq1cTEeKFyQViNYLEjKgv6EzwNDediEj6HSrkYymuiwi4ae7MwgdHPYJQDPy1LJ7SDJZ5kQBaRKa6379",
  "key38": "n3oLbKxwQXmcMiN455JCXHDQuyxCLyvV5XgZrBXM4dA56qtVnMQi34QcC81mHVg17NJxsxdW5RTMXLUhz9A1wKV",
  "key39": "4QNeWziRF1TUBU7R1VVM3S8EdiH8ccSHRico69VFE1Drv8pP4WPsYREuMTsYwKxFXX9wUok3kKq9Seg2PVpZBKCz"
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
