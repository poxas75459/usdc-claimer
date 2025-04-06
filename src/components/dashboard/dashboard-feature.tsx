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
    "4tqBvXjgtjmVbRkTwE72uw7wjsHsdH3YADcz6zAmthrEELWKPTjXjuYWCsvM2sf4QUXdFrZ3J3bUsMx8wXz9Wik5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZUQKqgvAwLeFnvNmBMLfEWiodW6ixJ2CQKF4V46XHxwKK7DwZCvZfA3Aahj29mMndPSwA9Y9jAYuXTcUXCV9PQv",
  "key1": "39xmA53sv2J4oVvMhawCAtdwnBnNNLH6JS2b4Y9SngUKXnvfxbs2qNz3HVZppdQ6QdB9eQtZVoqTCuMof9tE1Eik",
  "key2": "3tvet94gmw9D3LmQaSW6hrShvg1ZEXAxqKe2knUCdrvwTEKmc4qNKRQjfpcMCer1wm2FsLEdjTDDwSkhgmB4xw5S",
  "key3": "6439qcKhoXnA6ZDy9pATZtD5G283LPJC3ctqR7vKFTzEAY3WwFQ5isYCZ9gEsh9KRJD2xhVVNGeWNBbj5xQDV23F",
  "key4": "2UzoXmD8vVMfLQdL4BbNif8iFNg9zQ9uvM2aqvDo83XRfUV4DYrX9MwEaNS2AZaSR4N13AZocyRAwoQuFjsxYAan",
  "key5": "59GE3sD2zvbHG1ZzK5HELtLtSwLNwBtciS4vh4PWqrZaEvNW81iRkJS9qwXqs1YQAgYvCUAe1EL9TuCSCtR3ZG3",
  "key6": "8NbMHSYdKsD14U3uaZ4ZiC3CUcWFP6PXSaFh7cxWkoAuSa8KURy3sbdFRkuAE5gtG8AaYnrz8VFWTLG7B55z7zQ",
  "key7": "7U1thMLUH9cU67Zw94muvf6cvMsHJ81Yakke8oQFLC3V4shQgxywgxsDBkVjv5DKuAwpczGXvVQiZWPnghh3YJ2",
  "key8": "3nxrJi6pqMja592XD9hTbEADjvicYxvnELq6ycPpJ1CjaLuUd7hAsUYkLhCC8TCcVuY51ZYkA4Y6cyCWpiXLpJCd",
  "key9": "4ACe1TESHgKgStfcBmzGcUCzSP5SY5Jxttvo7ZUSVNVGw2wpEmmwkUKoUYRFDuZnw5fMSHPECQSEzttWsVpFfPwJ",
  "key10": "2AJwBWg2QxEWm2whYFWs1e8pknSnQiZcdJcT1S98GUuhqeSdpXvxyZE89fjksWUim5jDBv5Brfp4L2ekkPbTNuLW",
  "key11": "2dDYVKpqHML7xDVbrDCCmK8KG9VbjdLs3sRKUwhhSoaat5gvVQm4JnhTnQypbgmuQ4baX82joT2HKWrstDzdLS7K",
  "key12": "3aZZw8vrDoZkC4KjAHCA8RZaW1bEH9uXqBq8KLHAoUHdatNhXEjxk5NoC5jznWwdPZF6z6NVc4UVXgELbwGHnAGo",
  "key13": "4baTqkxRvnzNezroui2sUfwwzjZRgfxJJE8567wyDLuJuwBBwKsy4c48e4jygBnxmnxY3cqiHp5iztqmjhmCcX9m",
  "key14": "2e3XRbsj2ErXKkktyGMrKQARfM2J3spSzj4cmzCDEjKo7CMf6LtkL8ahUNzkBfkbBZuQWPitU5xoQmwbR8AvFhnb",
  "key15": "4BC1fGx1kLMs8sgBJMsVErQt1ixJy3YVb97XxYKADFudwprwSjCAT5yKZ6wYwikb8yP5U8mYspovxptUm1HHoRcs",
  "key16": "3kBCFjLJE5xCcjNr2gjs1rBWdiiBuoLcMWLC3NvKsog3nfBgjZz1oexi6tUK4kJwTJ1Zrjcx9U6vE21FDB95bfrB",
  "key17": "5Bg33tDyGAzwX29S7u6cmzJrXaMZw1dcH81FWMF3zNyj5U6kprGXdLfSSoTFCv5P67L3YvVJrdamkt9j3CRrR6q9",
  "key18": "5yiCw5u17u29ZWHpui13d7oHXmdp9JezrvKfhuPpZMsB78W1igAuqPY3T1ujbQjzsRHrUdWBLEgzPQQCULeTDgk5",
  "key19": "41sj4H486oPpxt5CEDYKDrqPNL4z8dgceWqHxiE28p5yMdnBrdc79Y62wtQJaKcY9YomFbatsoxdAoWzxiMsDvGD",
  "key20": "2R8ox9Xvca2UJyvrguWp7UB92grHMUUXHtpXB21r1433KKP3TYEi9S2HAVm2D7LuqCP9xTVUZEMeQbSWhvCunk88",
  "key21": "2bFtyRMncNXoQg1TiBDBrd8ov3j6QPEkHs7kwnLL8R57exZPbK8bbeS7McmXoxWzJSC4xqtDnJ1SZtVBiL2JFKkr",
  "key22": "2qop2kCEzSkXmAfgd3zEBFyhWbyjfs9Q2VWxAkGEPZbmryMJ3ZB7Ry1cn2jCEPDMoCH45NHsBsETBXWjifG3GBP9",
  "key23": "UcarQeJhvk4SKGwMxw5tavuPbDX88RnU35EdESfx8kLuiuY2UaWHn5hdcMY6jsnb1KNsgVU3k7Uomea4HB5F7Mc",
  "key24": "3E2Zbym69H32AsiF8QZTZwMGzcBe3WymBUViQjsQJBMfKpzbyw9ukcHUUnhoDomtydWtVV6i56So5kGLjua4TxHN",
  "key25": "575pFkGMAZR8P8r95nUWNZDU3J2Jreff4GMpDAQPneHHDTukFzxLXcoJ8YBJi9u2U1V4iHW5T8foRcKzZkCCLP9e",
  "key26": "jyFVHWkbfJCdwd3DLJkcnyt3R9V9HbNHm6pwYDjFTJsGBoytRNcXVkd8d5XvaAPMQ1TMPU8G3M9KXtAZPBbuqw4",
  "key27": "488kBtUefjUybkUL5M5TvDMYbUyV9Ai66xfbT9pKVWss1yPanwGrnQDxK3XCrohDmkRZRnjCCDoLbv3LgGUijDtE",
  "key28": "yJsFeHkHvB9mrTWyis6HRirdDiPsUvcyiJucoCFwKAMYHGrzKC6fvsrmbJT5LpCyVutsWTMukBwUgwnsNZhTfZ4",
  "key29": "4yydAzQ8xmUMWQr2tQLHrECn69adD3Y6iYrYv5YAEPxCMBdySMEsS6rWLZoRsKhar9gDQpkvvXnwGgo56sT3xeGE",
  "key30": "3iohqENnESgQmKfT7YK82TZbztooQK54zgUWG1yqaacsw8Ta7q3badgEZuJp8BXLBWB6RXEkcBfHLEApT9xHB441",
  "key31": "2QS2qtsA6zBB8MUVhSxzY3L6xGyJMgUmjwRT9oXW1hfGP8JBY7JLP56dTuA3S5oxyrCnVwgNCUXN6hJJZM84ApMU",
  "key32": "kHSWsZhTxxx1kspvx97tv2uu2r6CtnowHjHrNHrp1bdePrrewtZaeUUCVFbpDTLyXinHhmsgqyZKruJYFWDcfzW",
  "key33": "49ETesj999Zri7MsjDdoq1eUdXJgVGVKAa4dHxoAFBAdP1W72mRC8wq9n8XaoKGf1yLtHZrhePn2wwPUREuhyfJz",
  "key34": "2kAmi8o3QR1juArky1NJFwmaBZXfL9DW4RjvSJNJcguQNdGM5tiwK3kqWdiW7A5tZrnr2D5uHyQsWPaTKuknUobj",
  "key35": "3TrTqbVP4E2tPjCupsuPp1nCXyeEtQZHwztUKpFHTXpv13kNdxgbmQBD6TUCuhrp8x8SbvjupD1P8rELssdpbV78",
  "key36": "57fkrpeZY6dUbgnUg8LRGdYNZvY4eLzp4UasHHN7Hwp7AGTMzh1XnHcy42Jt38SawpocuvSKGJiWdbeH6yB6sLXc",
  "key37": "2UodNJq9cLW48yiPSBvkq1RGjSAAFGkHR3VzKytFgzDbXBHEGhEnpTZznTpyMQc8q7wFjhPpGbAVmKecU4PRU9hd",
  "key38": "5reT3qTb8bPZd5p6VXreVXvZs4SpwefaMyukN7NNaTZhfg72rEXpQBCJNjxz39pxrjV9SQcBcc92FzPySSLon8vv",
  "key39": "4HzhKQ6YyjVdQvLrGxKgbbAXwzT32ET5b7FrZMx2ScJkXr5iVyD11ozFnNuKMwncBWTwjkyqzEMmFrLPzoQGUki2",
  "key40": "5jRPzSjNq5hTMb1k7KVUfRqy2wrMU6GiRUnSDg87RHgNH6Vm3AtJ85PrkxHxPHnn2H2cy4wTA7JoVrbZpwzRDScV"
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
