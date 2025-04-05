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
    "5tfXeUDYMZRRBBjUDECadCSURG525vD7Hc5pFRSs8RR7FeRkxXWRzizdfMoWApJS6Mva4HcXQ3FAihp2xuLCLyDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnHQTRTGtnkXKmJBX6Pv3G2vZNzybeREPAXh2AkHGdKuirfjVjrXj3GATGS2usu4GYNgfwbYFrbjQQSwzEnPg2e",
  "key1": "4LNrxzADgwebHMq4pqELKrqJLXHSrecjHAJ6CmuuQWLMzo1aGNsyqjMFrVNGNiB1DzpjuUskzAviUA5h2cv9FbGQ",
  "key2": "5Uqyx51aVpdsPrpbkQXEU4xo7McjBZwM7KAGCvscTnZE2Vy42LupRSxcgQX6m1DpfPEyZMQtU98SWkf6JbtrwMLD",
  "key3": "3iRcCcPYtJ5afTaq9M95djgb3scLak9sTdPaYwWxng5MPsLzm2ZHA9m4e54oQmqzYRJC3ko73ERbWKkfxbf5fp3H",
  "key4": "3QcRq73crgEjjx1c14o7m2edYGZNV1H5UuYJpzBZnmkMfch6NmxJr4e52r4wVhX74EpRiE6Tixp7Ujt9T3x1hwPr",
  "key5": "RFhdkdSzyAhEubfdabd16RSPtMA1V82RFvkfEPqBjWK8qB9dDLSDKFzXYFoCC2soLmoEFseHY62Rauk8y2V4t8U",
  "key6": "5YCq3S8VVnsxboDC86sqXt9WqCiPLSPz4UnfgDRSk8KTx43Xk8s7s7Kst6XGDmVy2fnbWCA89jqXssQzCU666ThW",
  "key7": "3R6MCJJqPxTypNgzzfcuqHra7nxYrSQKFNaaeMNjoMVZbnVFFsukgSQX3BEMHRkSRFer95dYrSzWxoN8LujfQmyG",
  "key8": "pX3ZK2UqNBXHhbWM6WHavBBKqEq8RDTi4hyzj3VNh41T1ReEecDWVbvyUJNc3RXqi7SyjTZhiskh3qL4Xj5wgm9",
  "key9": "3HcCwBqiSeRzhyivE8P3T7pRCasEawBn1C49UxNdRgCTj9FQ1H4vjAPGGZEuiFVF9obHGzaNF7q6H7LGbtSJ7HAh",
  "key10": "3wxXHsyq8eEYkNfpBcSh68ChjGrG8DoP3wVTCcSZBFBLQUQ7q65Q5xdehX9RBH9RcqtTDFHdcojicP1SNZunfqX8",
  "key11": "4f6uWs55dJDpdRt5aHsovtpEuFLFDvmoFcWNTs4d1GQqJiU73KFRDvyt4wcyRj1v49bGUgtcGwZSL8fVy1qgMnnY",
  "key12": "5KyQwQ3ByQM65Ftgj59TBsAEZLB3mqD3Tiz5PURcstZ2tn6NfxrsJr9HbDzJ8E8RLdxekstrq1wRdTncZ9KnsFc4",
  "key13": "2obfZBgWAD1CvEPjoafSwk4buegpiBJHhrVfqmfGvdgWQNQSpEVXGkbiYiHL9Mj14Ua26jkZe3EWsNQPv18ruirT",
  "key14": "4bEcbbhauDztLNJ8f4w2keow48nDuCUxDmLX148gquXYFBhnLXb5qxcTqc8KJXQXtxUnmrGmkWSSqLkME1B4poAn",
  "key15": "oxkYQUKY1KVAR75CXNA25ZsRHr7bsukukvDZpbNwuAFXwXam8BnJ8sDM7qR5B1Y3wPsCZq2GGSCGm3zHG3mWwBe",
  "key16": "3e42aRQ3oeT1nXk2MAx7GC9hqcLaaaErsADDzuVV8j3gLX6fDWRjusSJqFnX154hX93Pvhet8qGXL5ds7QxUM597",
  "key17": "5syZA7XT86C3emhEmd5QmCVoRBC9sjiSjawGTdhy8kY6FAgwbTSTdAV5xSBrhZ6RLDM9Lcs9HhVsnazPiEtf2bAt",
  "key18": "5GBseRY7jjBcfjmtRGZ8xsXeQU6vQJ31QpFBAkPtR672djDKc5GhvqSpXqjN7qsp5XaE1MpTYQNzpL9bGi2Dxtck",
  "key19": "4ooCEtANHoGxaacyk3HMdgxz3JwLNz4WTZBxFZuyoQagv1cZpQYLabNXHHfHei3t3aMHqsURxDVwaZxuYvP12Sjr",
  "key20": "65Z9hNts4hazXnHGbHq7YwosaZDrkeRMxP7vVnCftZsvrem1ZpaqpNyHYqRoSETBngTUEC2PKRejmkyevcYpUYKU",
  "key21": "64Bg2W6DnXei33pZGdSsBYRpZCX6BH8kpBeKZ4HkBZQNaJpChvDQ7y6JjxLxdK87TReqDRQVTFSH8aUEq4fQ6j2P",
  "key22": "5dpvmSg7jQ2AJcJf5NmLYzdLCLnR5PQ1UhZaL9vqbFDNFUxeDhPLuF5kCBL6BPgVqfVRCnTw6rMudN3AcffSX7SZ",
  "key23": "5V4hqVsfLpnduKHPuBcGMhzYkXaK7XTqwgfzRMPXmzn3gLW2bxZQT82GjixEhSNDKXVYmKK7EYXatRF2PKvihbSL",
  "key24": "3U49EEkrBk1YDQ3qLDR4mpr7BeApw7H7S9qa9JRxvm1G7h1CZLUr4X6noG7zGQU5thQJor12Bxj44TdvdWJ3oHAB",
  "key25": "9wwYx63gZA9vRYZZWRPdZCQCL2kdsH4pdPfoDcTR7t9rBzVWtYg3sU6hMxomsGsbQUmrmsSrmgoyEN1Q1kDUFhS",
  "key26": "4i7RDPTXoceiaByQ1QgZC3cfL51JFuBZS9tzjWmbYvmdGZU6mawkHT9G1zQNShtKksE4xVGG5L8WoiSR9TZedpDg",
  "key27": "33j1a8dZoFA6FFW3zAVvDcp75ds3TZq4tYy3Qb7tspFgt7DgUFJAfoZ6E18NcesZcHxgxPwZvkAVbnGNqYfY1Ngp",
  "key28": "mSNpUpi5rQt86vJ1cdnMvC8okZr7Kz7GfpqjuAtjXYUAh3Vb9BsKc6t73wUDbBZEYNuiSaH3hqXZmEPpofqY29P",
  "key29": "3xHcRzsUT7BaeuLEVA9bGAQGJHthYX2wf2nqRdScEN8GTJwCbwHg3DB2ZwEjk29o9XDCNbG65G99JEVUbFKCab8s",
  "key30": "EfYTYye98EHTUUJaYjm599A5JwiMUTjApnBdDmQyiWcWnYHMJ1StJFZCjqxHu2ko6nRsfzvxJky3WYRGFifkJrP",
  "key31": "Ns5XLxjpkquP58eyzQc6zndrZ7zZxSuzAiTqFRMMH2EsaTujpcndDQvn1NKWs2bd8bnCkVFSZE1zeJKaHf8Qwi2",
  "key32": "4Ls9vEaDxyfMcLPix17i6GYwYhYKCnxkKKynHoRiADE3gpX7yDWmAEYErhe9tg9ojCt5JFp5YPRneCPbgzKETVRc",
  "key33": "5VmfRYcDApwjfr71zrg6FyaPTjLwFCav71sSB54cWwns71b5EcGTdUDvVYCNjncAMyWEVq9T2vp5x5MF8FtzekL3"
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
