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
    "2F9Rtu5kErd2Ns3guRG8NkCG1iiHpWT4Z9T5Sx4fDDTxmmav51kkYPGmHkfyMvw2bf1my54RY6wK5W9Gr3VswAJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDsyqNxD5UeAAGeheeukrLvZSPAFTsAtro1R2McALLcnKE5WSQyRTzmL6enpMLWDCHYD7eYQcLYC5DS561q4aGy",
  "key1": "My929hCQMB5QcRuK5Xybt5hop6sV5anHUT3wjLRKiB1YZxJL3BB71ScueQ2yeNSfh8hqLdgC1FwToWey6NePm6U",
  "key2": "4ofMF17pcgMzkmCx8voNyu9abfmquESeHBChkmmgUZUDBk5uKtabimB8sQPKRifDoALKYFZ3S4sHM6seTZHMfEDG",
  "key3": "2yXSKVBc8FMGJh1Egcvip4BJ68NF1GaHeCZd5LmLUE4NYshSDhTKzgFufTpwi9R2LPfB5vhr1DTe28rMXZud1mrH",
  "key4": "4p7yX7qTVexvAEFbVUpBAbaQNsHWSgQSmo9nNLFHmX8jXAiMqCzjY7juUjJ81G8VdJu4vjsiQuQQU4bEXuNRXbZ3",
  "key5": "3Sz6ghrgVM3V6tMCPq4mkMiinUghxv2vKydt2ihFq5gNK5BNGHEdrCPyxh3YgV5gc4xhrhaWQiVtYcA3s5cGWmEg",
  "key6": "kxsfu7dfRGCgmfhSykAFY5cZmXH7eUHDG5cPNC6EgBpQmRfxdf4WpQCMpHM1VPq1mY5gWQyzTT8KEPK2LLoGQTC",
  "key7": "3CFtSQ7TsyxSNeUjo9MZZjuEcZK88NauAB4yuUm5x2FCTi1fa6wptzvmHzwvFHC9gHnsiD1kECEY3aX1aX5TtZaH",
  "key8": "5iTK9fYvDkQYacNgBdQXXmta5KorXm4anz4oo1MP1QfUorBZtsM37o1jPPy3o6K5UmgZhTkShMiDdkEdciqpv7P",
  "key9": "55CmvidQy31QC7odqt3ec2kBQTzSfXDyw4qogGYw44RTVRVCugdE5fxf5UorvhGXwoymChhoH9i3zp3TrbyTiiuV",
  "key10": "5CUiFzbvT8oXt7aAB1EpcgUc35735GmSPJFvRyaqjaFYBYzyG3UUtrdPoeUQKdDyykkDditc45HQDAFXxgY2zYff",
  "key11": "TPxfKQyxFV6UxfqtVvZEoFdj1DaWfKJVhWsivQgxwJ9eQf1rSxXH4SAB84oLK8FGQxcuuHZW6q3XDpwtdygLN8K",
  "key12": "uxjHaMeyr2caA5nB9RomHhr7yiWLU63Fz6vZB8w2jSsFrvyTERjJhMfEAR2KVPptWPrgtrv1Mt56ZYGUHpkNFBm",
  "key13": "jkKN7b1TrQ7bZsWTaQw65ZNGh6PNrPtaHHgRJwKuWH27tcsELuDhU9UvZRxF7NfbmGauUxusDRtTYgEfSzZixsy",
  "key14": "3jPh51WKBagu9QSXpBUw5Yj9HuEHjeMr1WcUcsQFxQtcywxgWBbwrQfQUFBnG67bmL7LaC9UkhqLJSykJpRa25Xw",
  "key15": "33tTzKft96adY9KtE5YditP9MCDEbpc2KTek5aKDYdpgDphAMGvRqRUHPvwU97JgWmPVKHyVJF4sMRaJioH9QWZF",
  "key16": "396J11GkjeuHwb4zrVpXH3vWWTnapSsNRMkNtu3QM1MBdXM7wXHc43UoLx634TL6bs1h3ytK3zK9pfCNpty2i6hk",
  "key17": "2g57gQ6HjhfcjUzciepimC66E3fKzaUpQ8pAaytpH5NYYuaBYocQnELzyRtjz6VaTkm1hdF56Vua8DcY4daoV2gW",
  "key18": "43UEysDuG6GmZtu7KFv7v5EWw5mxyvkHm7Hzj8XckY9zx2sGb3pzTCpjRdRTwM1jWynMSBoTG4KubfeUgSgt94hH",
  "key19": "PBHQtEAkmvAJyEXSUdxvNZQxScV41PDhfWNs6gWiEhLbwgCWQXCjMhKrNWv1VUzB9DRDL1cBS7UUS3aBFDRWsLH",
  "key20": "2495aPeFik2hggbRa9BJcEiAotv5dS3W8Tiy7ESg7SEWHuhdvDihFg3TwyEoWpP6fZSgiCppcBHhqFP6YGgoX5a3",
  "key21": "4zg5FMVYYtdCWo7f4Rs9Tpe4boVUJLREQUjEwWnB7ARFrvXJnaU9QVDxVz93dZ6m2hCSdDhJiSWrGe4tcWdwLF3E",
  "key22": "PnBdi1TULA9NYz5CJ3aBT5nA6kW9PZWmi5FMpbqFjvCxuwMiWcKbozuHxd1XSzWCgoH937jvf7AvWp46Tasd47A",
  "key23": "5YHG1dY1SwgpQfTrhdBsjLHWh2Ej9jVoCKSPjW85WsEFiH2siMNgBCvCwL5WP8GTSinRqvfhxZHEKmFEEn8j76qt",
  "key24": "SftidcPF51vvnGbc4dKZgcTD4NivYeVanP8QReuacHUUwgRTDS6t2stZG5gDhq7ZMvXvM8Ksk65RtpJhUhhbsxh",
  "key25": "4LaGLWd9mpCxxEsB712usQtqufqD2LVgR7VuLQsho9oKaHHzpFn9vXKRFtxxJ6v4YuBQHByJtK7TUN8r9JMn8M1Z",
  "key26": "4v7Gsoa1Sy2R6udwXt2L8cTcghtBH4qfTHk8uSzf6bt9yYsrTEE81DpWv7RgU5cLvMRf3rMruq14Qn16V6hT7g95",
  "key27": "2fdvKJWS132jsxKF2DeoPBPAWeDhLNUTKAZzBCRdYLjYoEtsmrvgXg8JSNFq8X3q4SWV1m4v8EHF4wsXDPRBFksR",
  "key28": "5uUoTHMvre1VC7AttVdXpEpRdKyLL462rJJqBzchNnhyW9URzRMEWkUzaqfHVhwZrDDJ5CHXkxaFnkyfNwUs4eEJ",
  "key29": "64JBRhaGqiczog69nrxNLtJBwskpnds7pUaebVdYsqpZvFaUSmvQqkyg3mCkLRh626heFb9sfGw73TyZy8gsRgi8",
  "key30": "5uueuj6ASeSJujyom1gASXeRLGDNGVik9FvEFJfe1vj4TswbiF9EJjkYmZ27cHpVAsXbftmjNRefhWhpmxGpkDHH",
  "key31": "ppdejr3EkAy3kWWsRfh2q73fBCsyzUKjYyjGKLWFfRJPFkBKt4BTTXbdZHof1GFp7P6C4LAcb3VyjjWn63PACmP",
  "key32": "5VoQwJshKVQL2RM6SCXdHC5m5ozYBkyjckmmDH9VjbKJpMHbSv6UHVZvahRmdmdaoP7ARTmkJBWurVQXJFAVdcvo",
  "key33": "66ZiEFF8NDFLGHMHypScdwV6pYnbSJ6UTpby6apSL1AYuS9GQrP6gmtTfa28DFr4mmjqvSqhUnAkrGCZEumGKqmE",
  "key34": "B74NrkQaxSp4bvGE2pzL4vuPzF728RtFyFrmnf68Vq6NFb2B1JTByqR78sJrAzMWXqTz3voJvttRee2jF3mwJUp",
  "key35": "UfTTQFM6TmyqLT49vdaBsJP9FdRLEYUcmC7zYVzVSXrkDWaL4osyvJiubmZhfvWvzhPuVHEJLxGDMvUK2qQFNsX",
  "key36": "xBELt4sPhstJAHDeaAj1ncevzkyReCPLSySSox5ncnwXBBLxFY4Bo6VAAAGKuyqjwFtpDZVUtsaqpbnCauAK8LB",
  "key37": "4zmy7AVDvMJ1sGfqZTRzhkP99uJYFoVR8oxnpnMSeDFk1jFt7YgwSJ85hQ6o2sLRn4vKuEXetRsC25XP8bVhDhX1",
  "key38": "32bdtvGLgDpMekNhZJcvGmDncaWk3ArMRwdZfmVgCU7SRA8CXDtRZd96GtN6q1Qps29t8hVVjsGZQ5vYCnnPes9f",
  "key39": "3gdLvXkMcVoXznCb5rLQ5VT4e5WwQjHXZ8fwoZVpbf7i53UDcDff4Nv112TRAHhC1fRBzmonJF3W7MxnodRUjFYb",
  "key40": "8Gj6yBfM6R8aDZGkkTrx6LRffyirLcqrED4Grg7BKUqHmNgRQEvwkgshY5jrvndVGyxPSPnx6fwia2VZBRWt2ei",
  "key41": "3zKYgWKCRnREJkq3YwNFMEjWG3eC3wG4emAdVHjXpNLE7NskAGytAoV1ovePuNuiCNpYhnqpQvvn1n3SMkL9inEK",
  "key42": "5vmF5C2N4Uod3TXGB8kCTG8D81YK1oLb1js3sJt38xieTmS3JFH8ZNiRaQ6SxThC1tmdUK9PNbuFR8nZShceKThG",
  "key43": "4VFzYPfreZYziCHPeLTSaWafLBJMYMB6NnXNPw6UVhY8HPcEEgnTtraN5JLpuW3dxTsnj7UMYbx8DP9BMhDuQVjh",
  "key44": "5v4vAnhetak7hugqBvdzN6qajAYR5ng4M5mAFB3kZfZMUShVDYL1J69oMMCM9g4Wvvhy6n57EzseFT7LvJFhJrKj",
  "key45": "QSmyAQSFyNQ7m8zys2wci7Jxm9DoziPXT2ULBhqrvMW2BHHcUP5S4ooyUS5iXhHJpueRsLjLM2HT3ZpUaHmzroh"
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
