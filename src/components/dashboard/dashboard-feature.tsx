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
    "3QgELH3XkeWAYfxvUBn4BJcQT4VCP4b2eejWJ9UBXTrPQL6zxfPspRPGwqYMtQBnEVEBUFJXfVFbVqyn3YP3xMHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vF5NFdZZ5mMAChrNJD8ZmLHyT3x5SXzvNzXsiR2C4wGu7Xi4bWhRTNGtdZ5NchwkuBcaRdMQNdK9K6mVk1Liwb2",
  "key1": "5bNbSE3r2h8XTDwxzJYMPkkorD5txPuRnttiuL2SQjZVLYsMwGx6EsQ8SLYSbLjxZ4wB9SabcUWDuS158FCgiFYw",
  "key2": "2ZejhHXGki5ESh74HhCndWELHszJppDFJvtSYrhUiTQoLLH2LKf4bEan2JFoMUXMy38vH5vycgfebR2xpbUL46Fn",
  "key3": "5AQ4CJEFxT5fJn9DNtEEVQcb963RKv8woh8VarU3MS9e67kWT4X88yRpyHUAJydwZgocRPHCDpbDoncS5hMErDwC",
  "key4": "62kb6z59wG9RppPJkhP7epEY7Qr1iHb6sdkQGBGGs2FYDqGg6xo1QJ4WhtTVMg9fDpsnNEhA3kGtuwu7U48sCJFx",
  "key5": "2wKHAk4cdMvXnwz5zS6KrGjTRYgANi3DYM93kxGmmPWWtyAtFKny4tZRr5URfQ1KniypB8qQRPBXdJzkFyicYoDV",
  "key6": "2ua4Ui1mu6jnJRK1zKRxE54EnoGNVs9xihCrVLmRreJVtCcPHqq5VDeHB5JgudQe4dz1HwJUo1PQthDikdmZKudK",
  "key7": "nMEtgyqWkJ1358ViKF6XR2khEpnk1tEetPwKuTX7bmhQgwCUr2wVppEYVf7D8ewfJVLjgEhFTQA2uJs6SU5FCBQ",
  "key8": "3iZivK8Xqu1KQ8iQYiWNsiZeRznUJ53e49UpYYJCKhcXEmaHcD7DZdGjdLuJCFLsWTsdfyuWh5V55CqeAySTu8UU",
  "key9": "4oBC5SVHhxTcnMXx6gdoUiZwnqa1Hg3qkk6RXmf7KkCPtyzT5hWymRVfi9JPDNiczKXpDStUFhcXRTh25KvGiWhA",
  "key10": "FHMZiF83J4qkdyuTjZhMKmTo78J7SdKU3XMnY6sE5djqqEC268fheiiLpHzdVoeZqaS5csCBXY39XnbC9Sf2HiD",
  "key11": "JG7rfb9qceZeW3jCtprhrwSSo3u87jymYhvk1o57gGm4bX1eUKrR24JUV7mwHjexGjHWCMkFhbqspTa4rnRc5X8",
  "key12": "5dcafJqMc98r5fd3kiMBac7iEkqqqcpATn73NnBPmqfzroiMjfQwG2C4WiH8ABdPjnToki9sHW1yAHjvwURMR56s",
  "key13": "4XcuUyGW5MQ1uKL8LyBvqRcqiath49MN5CbDfMWLVCe3gNyG5uqSjKQpcD6KLQY3pWMqDor3rYxFzAj6ecoctmYs",
  "key14": "4r6RSFpwi4S8Gkr8XWHWqZvWyrnaXTmdGrCW1sixZTpFmiaEEzM9AUbhBoTPQJDTwjACJPa57wVTmeiTghbeQYM3",
  "key15": "3pqd2o8HLpz9horUk8WgD2Dp1bUxadUkCufint99ThWxK5G48W3Jj53cppeNSy72E5euBW8ZfkSmFf1qphUiTPeg",
  "key16": "28QmyS4ZVCRtpEsXVQrcFMUdNW6w4ioRYv37kuh73ASMqyxsduxXvcuw26z7GuKtaSz8p3nc1V6WEdkHXq6Meke4",
  "key17": "63rdkpWdgpBPJ3ckKopx5iye4dnPfd2J5g4KbEuPnrc1TgrpnFaL9xDnVmcfBKbVpAMFpwRhydFVF25u2D54bZq2",
  "key18": "5QefJwRV9Bo6AtND8tD8rwqrRphNzZm58NVzyTxyiDFN5DYRHbzrBzB2buNL5AV2oKFU3VYHD49Ha4pzN4fBtLQ2",
  "key19": "678riDmxS37jjjvhKXja3n85qj5eeMdswvXdyU8bpfByp3Aoueft9sPPCwRchbR87xjQMPJsDDFw6Xdb8fVnhsgT",
  "key20": "2Fvib3S5FQWz7cJWeCyD8J5h3cSLt6ehH5zsKgpz5jYz4Ljmn5WsQ7XKALPbmAkceptomoNbZr157yp4uNuZxc7j",
  "key21": "5P9Laez6cTk4UywAudQgZkEfDi6be9Ybfk47PjKNX6MTbnMvPsJctZMjtyFV5vx6r31WRsk16TvuypDVxCNy8Fh4",
  "key22": "BmDZbUAFDWruFUcBCAXiVn7pM5oY2Yq2qtnMSJya81mCvaceBaKVdaoc9nDRd17KtsXWM8zf7S5XzMzJ4Qzd6ge",
  "key23": "4SMMCBf51RtFTiCBkQtAaRpYXbCFq6bLGUDfBsnEHcXgfj4vkvBkS29EwvrKAMBR1znPj5nF4R8XVSWLPJfY2QX7",
  "key24": "2uCx6aZJoWq3vBUsYLEmLtME7C6h2ghUvi36DX8xb9sstHKHFRPByYeGhrGcWuV3XXEZsCCfXJiW65WWE4TcXcWb",
  "key25": "8vuSsUZTxSkJqMQSzYoTTBCCoSiU1nWPDUuuBD9fNPx2nds6Fy853TeXFvQ8j2UXVTDQBMiYF6x6oLTQTxc1Uk9",
  "key26": "2nJygjdwhXdU9prGfyvMVXZRHXdMeoi891tdK19vZgovuHv2h9QFCB4wq1mAi7cSkLmQmWNgbhg5jCbdF3wXrgv",
  "key27": "4a7SpjPv6QoRAv2tKojQryxFsM7MQVGTBUe4MMhCBjCMTHi8tGoP3Ab5TagLGyq1r2cp2TDZBRugPn3omFwJXRDE",
  "key28": "55ZSjpiKgAW2vvobRrXNzpeHFSgdj5GTVTAj4dKu4uPetRUQvtwJhUQQXAB5dmED7uGD7SXD3jd1Z6FzAFJ75LL7",
  "key29": "5XrLfT9iuMFpPQbYo57FPcgYA8yzkutKEW2dWM6MFUkJZmLwk4WpNCtse3bU9hQLhJLsmTVz5MxfVhTYxyXUP2Z8",
  "key30": "3LrHngftHcVcY68EiLLBincZswwsFDnJhTQXszbQ4T2HPJBFNnEmC1YtMcoCeXA13XagB9CagG1f9w94FBS9vWES",
  "key31": "4mWGH9evnTscfc3HAr8RDdMAedXxWihxhS21q7GabdUuqXkzV1mYo2PeuhYymAfdX9Mndq53srPxeq6LRY8ueQ6i",
  "key32": "2MoHXab9LDYPTWtpHUSMxxFebsYkiT3rY1eqshJu3iZUfKtk61ttL8JPenKKuB7jJfnL56f56hJgMPPtEkYf2PUq",
  "key33": "4y9fYZuqWuKixYVnUs3qyBS6tBXUrHGrkTxKbPYx6zgWEmSeynAaoUpXWw66muBJ98QsjDB6TDP5x5xuGJqbSGM5",
  "key34": "42X92V6tBDjdDc8BWPnaZFTLnLmwWAZTq4mMQmka1edc9Wi2sGjuWz1Jm1Uc1ju8RksF2PC7dT97HbHfUUZRXR2S",
  "key35": "4DeNbpqSbQNEcQ341xh8nMLPkjTpaTFA8WCW8c6mvXt3stcf1WqzHnnHUTUa5hZYXwakFhkDHUgsgoFcRUsQAA45",
  "key36": "eUh395AgFiNtjccHmP9KoxG8YmUpveD6eTUEe1zdaWrjy9Jj7qmVpz5uvmqYvzKsxSeHuEryYTefFXfFi7CNtzm",
  "key37": "2YY3AeXpfifE2PQw92a9gTGfgErNpYXaEWGp4m5yttDWRkFNuDmzVrM5PGtp5xweNEXCe5Q6z56amx3ynyDcrPCo",
  "key38": "5nEUge6oq7q1et9DPbWtFqmeFTsAYarmzhhYEis6oXZ7aLD8ac4R7aMsM8hCyP9E6qZD5WEhC8VRTSoHAdoUR7vs",
  "key39": "4QaFnvas5xWoKizrZutapWK6D97Dvb76G3fvBEeKZh5fUfPu43xYdKjUnRCmkrzeJU2FGgPyZ3TuS3zNq2mxKhaK",
  "key40": "2bsU8AoGuFa7USe2EWBmjqeLZUG7sV2NzRs9qonxmZH7BgRcXTkFaVfq3zo34mBa6fZKmF7JcGQL8SGZEiNNgwx5",
  "key41": "31JgUtfUKqb3a4cczzry1A6DwMUVxEFSrSfvYdYgF64UD7MWCvBky13g2WbGyqVt3uyc5Pgaoghh9jsXgw4GbFzQ",
  "key42": "5G6qNQLoVzYfdvPHr9joBfX768xv3ceGSJy7J6pA33tutzJZCp62VGF7sRtrEbMoFg5WwTfiwEttpThdbmsMSy6Q",
  "key43": "4Z9zm6YBMnYt9mWUgzbJu9ifB5cuCHsUKoh646YsLv7aDZb3j63WFBa6jmRkWk1HnjfCxbwwEDNX6KwYmrKZ4mT5",
  "key44": "G2KrcXSyAXnfjd9JWK9Yd4H8kkgtzkB92vXyrmyYBVVZzBkYzcdAZVPAgKvwYY2RsPESRQ4PfW45RUz6NHQMMJL",
  "key45": "4udTDL7o7PivW6fFS1yFNtCS2zkTiBzSimGyD9Ea6tqAAPpMPMpYBHdszvrtN5hsHHj961paoXDPWSuYjD14UQsR",
  "key46": "LsWyqMscyqBmodouBqz999FoD3S9LbBNQrDDpqB1bEhPpqC16xJ8BrhCAUvzp7ytzp5sMYakg9J1NYHx9JhpxyT",
  "key47": "2pZidxSFWbWvp42evdgAmQE1UgHVpUpBsbzXiTtN2PwaW3AcLJudDNWZZqy3iFsCeropAiCJebEKSHRSgC4D6MUk",
  "key48": "5PZA5jPkKQFEC7Wa7LEzLt2eDe7YHrCsPsAwfnR7Y9tWUMK27kvN7yKj9tUv51yPt9bxdrGZePMz5FUk2VSbr8yb",
  "key49": "5ygCVWHQBKvjHvPpCKWkHKVSXrzLEZNmcKhSymccztMkxhFjiibVomiv4FMsdkETW8cBrYKpTGrkSH88kQ1qHW9o"
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
