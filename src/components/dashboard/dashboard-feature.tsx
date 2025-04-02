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
    "58MUFS3e3m2KGmFcgcXVLtwr5i2Wrg4ndPZWHgrxcY4koLCsJAgDsoZ9PXSRfdL23qETCufkjUY1nUFoDd1cosvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRwGLFMqv8mKesCPS6QXNqx8oR7P29vN9bgiw3HLJtPtqX8b6M89TAbSFYM519veHPcGiRXCkjf24fe22G69fQT",
  "key1": "5Wy4ckWMY6gQCxjtZ9GGemWPPfMDccqLix136MF94Mmnmn8o9d7aBaiAcUjXFB2VKGa7puU9FmM9dgSTUjQXdsjc",
  "key2": "5rissVMez9uPAKyepminUN5PD3gztc4knuaj9xN7ZSQk5Cqj6WVEMXTVrVbYPCzCfd65NGodXSZd3jhLQu2efGm",
  "key3": "5UBTYcEUEZEd6NP151jb2m4oMML9uA7F6U6JqU3Tywd894xWoDGbwVPbnSYGWoKARHboaeC5ACCktMcWHQdi8piS",
  "key4": "2VwFFcgJAZvxK59j4t5XymvwJJ3udWUQeDDEUodvbwbzUvSk7BetEQywhMpJoGvMC5RVU1LGDkEWgomARnvzEGbL",
  "key5": "5ZecK6fNm7oEiJb1ARdhTSfQUZa73W7rwQJgsqyJU3LXdTapPFeRpUyy2ZNdXPZPEQwS5h4CujoShhFdTTfhppvX",
  "key6": "3PTHacMnSyKhjBQu43mqfX3HqGvch8RuCMnDZiShkhEnetzqG8JjhfAmTHZGLPVPPEUGYtJC7yUKxVrAFKs8nHXN",
  "key7": "4gca5x8pywaSEVmGPruVLksEmJBvRCCM8RqZqwT4b8PJ2o2VsLrNsGBPWNKuXhapdxitqrPMyq6NtNRxCXx9BqN6",
  "key8": "h8s9Z3H3yP3DWLv83RaX15ZWK9cLHABra4xFb5xrmWuPLvnqjNaBLMmjwPBb4fRqcTKLnMAP5s1AeNjWvv4pEtp",
  "key9": "4HPUSWMBGj8No5p4W4sU8YRg7DVdLqkPB4Wqwt2vYBcua8tiB1uos9awyJnw6g2EhbHaDaduvGxmtefUsqzY2rxs",
  "key10": "TpPrMXyLwZLMPRpaPFqpnKMbU41pMaE3WzoGtL96nuq3xbGik9GgzctFS4MVMx5c3mpBmemT4heEP3UaBzaUkAf",
  "key11": "5bqx1GTpMz35fDvoYDS3KAaLKzHra6CG4FSQmHFWdrruuKuHJiu62tGENF8aoC5WrfbohTVu9Riyc8Tog8hLLYGm",
  "key12": "X9WpB9ZyxptBpZfj7QSRPM7c7WM1EoMAnRPEU4mDvRDQaBKYNEhNugPwPAWg2qYTEq8v8Y1cCibpCvTPVt1ZDYo",
  "key13": "4z5Ts8BYZ4JoinGynXreFgyAgnybPKuo5dk2PHdxjNjYsPJQ26gvQWJRiHAQVDE3syYeucQ15UBnuVpL61FrB8A1",
  "key14": "5xcsuN8XyjjTK95jUe3NJPitYT6NsuF3KjVN7X5SPJ4fGVyUsgr4e5BSvnhgkPEZk32xKYsSPdEDYwhvwAXyaiYw",
  "key15": "N9FiYmx46YnTwDAxZR5ix4TQkan2dcdxVTE7rSfv9roN1gmJpugkE7R3LKjL4XLQTLJaXgNv9ezP4N2383FzYoF",
  "key16": "2uKMdBWYeEy7m5YBoQV2ezdm2D1MsuZe1sFXMHksejru86LF5G1XGYXBAC1PSS6fkBVjsKfnxdvd33bY6bSsNZi9",
  "key17": "387giLicucUJoCfn4rGoRmqhCT9cTzZSZ53NbJw3rA7oqctSBCxJvJpmkUiwr5NkvmZFLcseBgoJ1hhveuJP6Cih",
  "key18": "4nMNV3CB2BVKZGSDhzMBHi9XL2z8LkXYTz81kbiPRfJUmTWnwqFvqqGAUKvTQWzuBazpeZ3qpemQ89YTrvv7SwCk",
  "key19": "29wJKzojXdemE9c5Lf5EYe5GzSdLk5WCEukHEgwmYA2TNQVtJvcQSHhdwbfYi4XV3NPF7rHoSx4nfLr4qDfCASL4",
  "key20": "5vKpKkXuYWC3Z1vjB28XD6dyfT1jrBYjdVUBD61ySgjsnudQYKYb49pJ9FZtZEBQzq8rgcaCRoucogcRn7HdFJod",
  "key21": "33JcaytAmszqgNvDiXfjN1uoTcbBtTiG22q4TETzvb6XAtrCRJiMauF5pWmi5KHQj8SZoxrrurGwueHbY5XGBUeZ",
  "key22": "2GB2AgZkJQGetrcXiozgmojYSf18ygMU524Dhu7MCCzLeS8SsC4muDHPSYpCcJ8odaFrm7gm7Qw3NKHHRqEpMJMn",
  "key23": "5wpUa92vmocuUGfdQFvgDttorYwyJqtDXdumnJByqxdwY76EUjUR3TcDoF4bwTSCoEWzcscV2UJZYhgfYwnMg8CB",
  "key24": "4u2T2AQpH1WHaKxkcF95wZKX1zetmh56mGVxnhrDao1KpKuHtwV1w5UbFUkXU36ubL9T7Dh3Seja8RhqyQUCEZLR",
  "key25": "3m8tRzGGJmY5J58kBt14m99pHtQairXc1CsWvmScLxW45i7CMbEvx19U1uB8WdL6fXDvKbGADjhpaLyxsdyTKLUA",
  "key26": "3ifWznNjvWeCmt3MCW16cPSxixsmcfF3mUqoV5X6GgAgxWzU9swNVJXZcvr2RqphPPrMu1wZN1PanmWGY7bPqkbW",
  "key27": "3tQpxQtxPh321FYHvqmPz9mtix8jD1hZyc6TyBxngWH8z5xxrN9MukHi5QH43FMfS7fYqpqr5LFJXeSHKHZ47LVP",
  "key28": "35DTFssRByhn62b1F2FchQv4rUJnsft1vjW5fJuBD9TqBdpj3Gu6P1xxXwD78LCYxZWB2LpdYXcnK7ex34NM1TVY",
  "key29": "zaFAGDTt9nKFxAoAHmXRsGwHXuQFTbw6GMMYagj9WsctU9kaeQkBDoqsuvK7c64Y1j9aqBjG8yA7StnBQ4rN9xs",
  "key30": "5RtRjBx7ChG7SsabFKpeMCfn3hfbtjwUeZysS5isrZeUyf6sor2iKZCzGwN1HqnaCKfwJS1HazMj5JNsQpyf4jkU",
  "key31": "UvRJbmkiJmCcUjdYUK3LAbVkKRrtPABuv84jxLYDLu9Kif46XBtJ399LeAnpL7gpNsACQXefRNVQ5qSk9CbvmTn",
  "key32": "29pbWvM99KBgsY4nHKoA8iz7aDyKufskMTM9Lckk89RZGTTyST897hhkfwqnesikRwnFNJo6hQMnXXcjGssKRWUs",
  "key33": "2auNLfRg6aksvht1FoxwsZLk2UGSj6TvgNj98jePRkZbEswCsv4eP4RpKnhswyfRfzrQzCqoWEXy4wsVV7ZsP4YF",
  "key34": "3Z8Ue3fC2CnfDcL3h84a1p6aCaG2TcdYAgTx67G7ea6WGFyp5CeeZWtgk8DnN8cYHbTbWRpb2xAcR6Qg3fvqo47e",
  "key35": "5X8PsicvannCgCK9BcXEKoxyqiTcb8nrSFz1iijiwoh7mdtLCy5BZ2SDEypeKJnCDZZb4oVjooer9WFj8Qgo4qZk",
  "key36": "4ezGjeoNneqpEHfXnXxTkuDNC8kZHhzzo2B5S4fiHZRwwFupDPgDfWY6kz39nkAKe7ZTb3avLjPGbTKwKD7RSemG",
  "key37": "2jXWdLD16HWFm5QhBCT67nAVJo5WWnywuwEEShs4jzSYYGxNmq2MysJtcndeZXgbuwA1GiJkuMuU67jSd84BYPoP",
  "key38": "3w3W4SBet7GyJpJF9bircJiqyFwoGJa63XDTzi3A4Lxzhy2WERwR8nKY536ZroB3SCdYZLk2ikLmQgxt8bKiHRnY",
  "key39": "2qqk4VY8AbR2NCMqgizYFokq4GwCb66kPCtQbHqtATaMCmEGzjQ95mv9K2dwunZgXt5r3z1Deua3h7po93E6Ysds",
  "key40": "3LJ2jjtLVpxXr4fiSEdwc81dvkuMUVhwdBbKkGU86FGZMuvD3tKQWJoMzsHmezvRMXArw6C6eDohY9h5dpBf4NF9",
  "key41": "pQhaLfRtXWpWfKvwBMgfmGpbcvcsCkHGeH2CCp13X2DxHD6vSdRNNQPm2FS2Yf46quzykWLMVZwEZCAYtsRUTji",
  "key42": "V3fhKF4QY5ncEVyWoMCidD4WEjSX3yjbjRHh9Ra3TY1PsTxdWLLAiiR4MHmAtJZR6nvx2XFgVSUA3kwXEh3vG8Z",
  "key43": "5fFgoKRsWVr44cE7h4FwvQCpbUdqHvynCF2yLUqFET9q2za18mL9wBCcHCpoP5LWM6H6xPDebNVL4RsB3hucY5XY",
  "key44": "3tYYXg234Tx9b7RWyuif8r8gyA7bKS5t2qZ7EX4NRC4miWHhYDoTQMrvYdqFXWqijkCMFnhGqDXo554cpeYmzgv4",
  "key45": "3davcxxLq5gePGFHs6jJ5MWmQiXVaNsdwPWaCQGvkfAp3U717qErb5uVEQAyGogqyZxzMpoEp3A2AwFqeyNfTQ3e",
  "key46": "42NiQMxJhYM52wpd1vZhKVzYbVbJpHrMxKajSiCczoht63jTJzZgumJLpJ9aF5bTuzi5sLqqU4BdMPUj35SruvEv",
  "key47": "3DPawdVPEYThbBPKjNkpJKmmvdrwoSX3VhnrjqL8q327EP6Lw8HwxeZcwsDNQzvUwmuV3GWZKTcgKSHPWfUsT4mK"
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
