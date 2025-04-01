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
    "2PqqPbqqJpS1RpMjtBXk2WEW2obdYWDBrT4ANgzUSKyYcUgWw4kJGe9iZtdrTFgxt89toA7Q3pe1z6dwnRxXN4Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23r5WDdWShWq7WuCBE2yzSeYnbRsDBBfQXpW3dbXA4bPZtngx8K9qeSsUB7tpMch3dvxpFC818Yk3YUv6f5yFPqE",
  "key1": "P7pMukmSccbjdqA9y6WUyR17xGPedQogJmCmjy5d6i7PsnJHN9B8f9mxku3vUGL8w3RdVHNsWiEzjE7uZgLAkkL",
  "key2": "2oiHkT4Cb9a6kt4ATqNsJ8vxXTy8dS1i5P48HpY1TA87Y3pATBak7rh8qCWNiDhEKh9g16tn7JCcDv6SucxQDgbb",
  "key3": "3Ms9oFePY6ZpvDmskxEtnrVpcZA5at5Nq4EuDJwcPcPGJnbLbUMfcj9KBzL7E8KKPvA5qDv8XkuhStVAr1BXoVb7",
  "key4": "4zPLKz6rXgDtVdUMqoLwhGjbRgxt9Wpxhz7AExoUZqd6sAmDqgbxTUktdkHQKbWmn9pk66Q1ix611nAe774zmxyY",
  "key5": "5ZYN1bZzravj59JpnP6nhbDbQmrv5Asp45G3s5B7X5hbN38aAWNshkQeVNEwfxwZ2aE99gnU816eLrLrYbUPqkXf",
  "key6": "2UeCKQLJagxmRWuXUzTVS7iiWkz4a69V9SSHfyRBAKap8YFRCTCJABvWEPKMJQ7fPytj9MqyaTXrAorTE1VqVBmX",
  "key7": "5maJTXyHvh5HPDwExemKWo7NcZTT3Jea9dkpkGAcJe7hUmXXL3bUPeyZveK2XLyrfZvUNJHVEovyMFPnfRFzs3Cg",
  "key8": "4VZKzPnoN1FYA9fRKhSmy7A9HCJbg3ZDiWgsjxrKHB9U791rtHhdvd3CedVZaCx5xcAdXK8BRUnAu2SNr1BAxbch",
  "key9": "CMYMBJh9Y3UhQV4P1Q7iYRJfbpEb2zGf1xF59hNdph2j5RzfvF7sUKvvp5zupeCsWRshGizgZEnS1EMxkevPbg6",
  "key10": "4qxHzSBJXfML6pEYgKqCuvR5UCkJzzvz5QMH5o5pSr72aLtHVLqpojojx6xzKpPn4dV7XttFhmd2QhfxiyMx2NFy",
  "key11": "2LcmvFsMexvMeu72LXYnnfNpJPDAGPVdPiJuvX5NHzyWDDzBYB3u9c5zQWTBza6wNqUKkfy1z9r9LgDwa1CfDZbp",
  "key12": "56HoxvrBdoKLJ2V3kdcuTb1FgdLc9DEvjrg44of915PehcL5ezU75YjXLdF53CDbVVbV9J5T1hssXVpQ1jNCB1ta",
  "key13": "YH9iYvVyvzKd5nadnRXw876vRoMXuQHpZZSvtTTXEQTd6cVwNDJxm7YK2UsgU71UXFVMW2fdWi4fwg9kMGcbZHd",
  "key14": "2fhnwmDAgo4Bt28m4EwKSDQL5xXWEUTXmnSvT3ZA1uH1aj8wXsD2bT118j2BZFZp1tWXM4MegQMXbjyTdFnGXH4j",
  "key15": "3uG6tALvjUNBSWKjkZNu3dERGXZbqTKiJh64ByDRiZiz2GAeyimYsm7JFBHWwtXwrKpsx5J9agYX5KdUFbu7Thkh",
  "key16": "4LqprwNGdQys89dLBcmrtjtZ1urKHpC6TPQn66Z1od2xxFtigXGnjAe1SPuNEL5KLntNQqDUBVXUEtH2Jjap61EX",
  "key17": "4PrrVSf7tqaUm4Qitu5wHAKJUGV1cCGJMiTNuEC8b7z4jRTNiKtegnvzPAc7X4SFGiRpNgzzFxDMNkp31EM8tHhb",
  "key18": "4FaA4wx59sQsmJDmNenY4gdrgAjNqJFKyNvqkKkLwGaUzrjVUa7KM7oEhh2FhZLjy5JEMgeBDAqMCigwErE3bYPc",
  "key19": "5gdDdUCf4Zdb2oQb3N8KUcik4kzkHV4Yp3zAhYDdV4yvTBNqqfNvBWZfDVQbipThLCW4NRUXGFg5NaS53h4hUgqo",
  "key20": "LXA2ixisRAHLdZZ2b2grxysuwUvifcugwSJC8iadwwJAP8V9uxz4M2VZbDtd6ysqjxAU6aJf6XFWvhpJDmhQGEo",
  "key21": "3SR8WUoUifkdW4cEFYxo96VGnjr5zo2VHyFdoQeHE9oXVHK3ZjBVCkqSkTuxLwX6f6yhbgb86BN9JADTSLFg9UGk",
  "key22": "2jYwfocrtsUrPEv1KbDgxBx6JCJBojFpMa1dWAPJAxpsoQS7Xf5hoX5qSP1XypT5vV9BzrXT6YWEEek5PKqQbY9N",
  "key23": "4dQihoLtix38k2Gie32gmJwHRTdi6jMVjumg7S5dVejMnZW93Ng6bzh1hrYdkXtDBjE3ZpazmfVDoUt89SkxYPaY",
  "key24": "5zRFojs16s753j7ue72K8JkXqKFGNthHrrQTBeL562Z4JuK7DADFeVbWDwz4e7xnoDE1SVPMS1WGttzBggrKZGrX",
  "key25": "2rztD4MZUbpJqW5m1iSCoJHpEppaiRWVvPHtmhFiLEjgepM7AbDUd5ZaLPW9X5JennQKyD95CndKsh2iaohpq2TR",
  "key26": "4ujCxu6kZqftgtt1Bo7vsfY7CnWwhezLAJvC4HZqS6kgibb7cTGhGcBzi6zxjKGPL76oS5Yd2DQGmiXqhKGQwBij",
  "key27": "4iipgZP36uCuRqeok2m3pfGotXum7GWaScZxQhxfiAHwbMjrAh6sTqNW5LqQPP1PrCfTafGiA1P4cFydYsQF1tVW",
  "key28": "2E13ozB1J7hWAVVSRD83xxGoexPDGmZCmMvjjcuZes9UFzHcFW3U6fM9MddTCFNnNK7jo55HD8nppaJEmTcHssfn",
  "key29": "3XTDtKc18dqZTeEFj39AuhR8mBiy4YMmbFk22psYHx5mrZBMEMxSHZPU3ebixzzbV1EoDZNiahx9aMMxebjrpCAE",
  "key30": "2drnm8ETGn169CdanD2Rx1EWqK4CyXoMpbKsVL41YPrkr2h4tL3tSbvPU8K2UtGGByRxzpAyMsdocosqf3ef6V3r",
  "key31": "3hKcrtrMLZ1y2b7LXrgLYtq9ZYwcFh9t3eASw4b1JCgufPRQ22RVEcruRc1gqyEnCzGgBA7UiwNLfzXE83DDykjN",
  "key32": "491SF1RjHpoovSJ3JhMRR6kmYFsvqacaZQNXVcJEGpV6HCAXD7AFn4y3CYxoySjLPKVqoic8szMwp91UqvGujBg4",
  "key33": "iq8hg8ozYSg3QqcJuXHvhjsyZRo8txUeKJKsbeu9r6MKu8Lvfu1raSTyR8kG2uocX3r6U31V4y1FUQDUX8PduiR",
  "key34": "2DCoH1ws8y7ecxJcVBGNEAbSM8KFWMUQE8eTXMAUFktgkv3H3hDTLsKkbJJ8YhJXp2hyd3rzxDcjLCHFwbfPZBgM",
  "key35": "2xp6zfKqJM4vWLZG3nwetsGxiaWKseZBBShzn8SFDW8JXXumkBY98TBBS3HvpDVjVqTdTr39kNooGkNPGzKdQ5Zd",
  "key36": "67MNkGaGmc4zqLeFnjwQw5iV3hiKEuoJHakHcpqnVmUWv5iT7WTJUfiMH1MeGPeXHFupYbDLqHMfYJU5oRSfuqNr",
  "key37": "4p5pb2AbR1A8ZYUUmpRB9M9eX7fFYs9cdCdLhMtLBn8XpqUqGusNjseT5Tas1zLbRoNbJKryRAZmywTjVFnfbPhX",
  "key38": "2uPsz5jpcTyxJGN493a2U2vguCNbQzrpJGhwTfAT8p3ngsYKd3fiEfniqNapkGvkHspreJ9ESCWvYas1wVJMsjZC",
  "key39": "5ms29gpPcchtofF8yWNJMfZwrTukxs5dyve5An6NxxnocrS9Sax7qhke4kdQ83cx3SQgoRGPZHjJC14fEgNrAPnM",
  "key40": "zqgxY4mgGKnFCQ2bSn8PoaenxxSfcTvpVqfJxh2FrYz82rameZERwk1gsrbcdfRr7L9atnee8nx1rJhxEF6aXS4",
  "key41": "5PxufySS72qHQWaZpXC4DCe2HCqUav1DqNXcjw5hb8YrzkjoRUYRUv47v1yeGFLGNSejawg6sJCbBcQmymauf8K2",
  "key42": "3XeP4bt4sLL1xgHgENnkZLdiGZpBEVv6qocKTVY3D4cYGvDnnybNBRPPgAXjWfBJZQaiw89GBpeWRbWJQVnbmJDP",
  "key43": "5gVfhdzZHxno11VG1LhMDFR1GiriG8JQhmyYhxMsFB4CQVKeRNuVtwYoxodv1exF9HkHZ6YxXioy52UJ4Qe2LA6b",
  "key44": "35r9eAN1nL6KstMBo9zBquNeS77zWUm7bdm3gwy7wdEjGqF3hVBsXLQqrMFANChzFa8GSzMrp9XHtVfgkcv6q8S9"
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
