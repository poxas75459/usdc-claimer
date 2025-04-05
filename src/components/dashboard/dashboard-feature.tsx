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
    "4N7TuHPLhnkw9PUJNgpC8AsGNMQTfRVbAFdCYX42xeSyZCGDYdymu8spYmtVK5KGw51MxuocJWsGTF9SB4y1VndX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u9wfJn74b9HRNdBeEx4YLwbT6XaAtz4XrsoweSGEEfsS19Ka3woB352kKxX7GbpkH8LPi3dSkvXVTy6oqJc2yLn",
  "key1": "pCTMp6g7hwXxAZFR4E7oTygGnDhiXThGdDsxDtkKCQTSnArBRe5RzfPbqSRBWoSKTSN4o9wMrjX2x6dWDPGAp4F",
  "key2": "2icdAB3aUsXNTTHpE7YYCTw1q8gvnPtZAM3gAZrHZ4EWLmUrGUcxmWTRJJavsxm9pD8o4G1NtP1S1sCXnD5zin75",
  "key3": "6qe3o7kRGDhSj2YUA7AkMEwmmSpyG469h7yqwjci8yAdFYNe3zd5VEhNCuP6wK9LSsxSfcmzerGnpB13fVSjY3f",
  "key4": "3FpBeDPZDtXs7CRVA72fQcsy31tC3Bc1DBXo8d62QUQ17YbA7JVjTR1arUhuXf9NSAUmnDFZwPnpbUjNchk7foPv",
  "key5": "4LEvZZKHFAgnXTwSDRJ8MggYHhkWSvrK3ESGNLmKf69Wu96GcnpTAoFaXicr27aqJGdQxVgk2bx4ET5LKB2LmYsL",
  "key6": "3XePRH7wfhKTUyNjvznaYKd815RpaZ6YqgRXUoHN3LSTaQA5pCYRv9pBYin1dSfiXKHcuQLo6y24RKYayG6jcE5D",
  "key7": "5D2p8CEZk1TAC1UE96QCEiAKFMJShvQcxFB9wNzfjq3eXLtdHWcQK3tWQ1Bnq3WZLviboTj35ANiQQc5AAgo82hf",
  "key8": "NVg6awqSxHiwbWeuENG1U4JbLzQBwiAmEEV94TtG3UdKkMxX1Y9L8GMxiKoTgZ7aSmxnD1M3otrp86muMUieqQR",
  "key9": "39iNQzUqnbMKpZo45QHGK2313587JL7Cidd4rj9pUDJMQSsoQxck16EhvW3JapTErYnPQyrQ6DBCZ2sCJgDHr9eb",
  "key10": "56nt8f8uVvwbGX96AmGEiqRBaaasoJZ3THnHrSY8XDpumnuDTB8KmAiZftoeiLazNLXHvD4ftzRusS6BKJqzrvFW",
  "key11": "5Pzik3yRGb7mdJDWNbaAqcCRaJJLaJ9UNg53jQXuvRUWkAsU66mrBzkuM5qyVtgwadSJmDCk7mLXW3xYajmwnauS",
  "key12": "Uy6VeVDCSTcix33GWFGETmt6TYxBMNbxh2J36ZmVnhLJzyy2PRogDajFSTMujCYohNoxDm8PM6hf7v5df6nJMk7",
  "key13": "5GbwRjG6igURxFEkwyHzaasnQMiJrXc1V9NgncQXFM5jNjZsiE9eNSpthPxCKET4tDvdQGLWvezhhnUCNFJzoj2v",
  "key14": "4U2Kytkhod25UGUZpePKsxnSnwpDQQdZVncGg992BSmCoxF6BdFCLdjG4xy54WgvjcaAr34P5wVwspWkVCrcKS2C",
  "key15": "34E7CXuyjTqi2oPUo5PrqpLV6VCtdZbDLHDgnCE1UWqdS5oiZ7p4yTVx72xGVa9T77cyFMJQSazPPCkCzube7tBU",
  "key16": "3D5UQh4ZCdJEhtoTHTPFnwqEaNAFBVCuR8u2AVptibBXU4ZXJpKmnf9CvUbMgyboa2rzsAuySobPi2FQs5k6PzWZ",
  "key17": "5hf7AkK4ALz3okz75uEjNhXkSC3K6KqPwGmFztDTFQqcJ5WryWwWMEseeWUUznaCMHPHVL3Ya1sgBo5fJw1EAAZb",
  "key18": "4CSC652QU3bh482qt7xHEvp2EPX18mirpRKU4wHdeBXAvj8vwYNPi9Rp4qRfydYgwTCLrD6Cs7a3eZvy9dWbaYgs",
  "key19": "rS2wheBhgggfwEAvUW6XLQcSfUq6Umwae8npmTicCPxws5ZCYspYpeuqEGX96aAUBC2ePKVZ7cYTvsZXPyM2cjS",
  "key20": "55nHA9GKcdBeyp7NTRDAcDBz9DBH5FptQGAQDkX8Zmoazxjv7NbPnyDzfYS5s8JmDn6AQ1jAx4cSgBJxz9Zc9ncm",
  "key21": "2oTKAHKuNoVR43Y1nBxVCxCqYwjhaQQpMqQVr1EenmafKZPUCHnuRoZGjyChnBRCyJq7boyWKZ38Sjmoua7MuhwX",
  "key22": "4Q8TYvSyBSqdxqKMkMehJBcdRmPAq9vLCmYy2LwUmF46WhxLvBusSfJGuso9bFJ5eGCmTTW4diRqxSEn1EAqCTQN",
  "key23": "BaJt3NAJfgFNPtrCaNUCmTXjem9B6bxEYfWuUC4iD2P5WL3Nh4RC6c6jn6NkWRFVf2RjqmeTaxUqKDZN3ZgtNNG",
  "key24": "5GiaMWmoSeHeCEFPWn76DyyJNNvqWGy5yEcitDELFvwAKvxg3MmG7rP71f3vVcFYrccTmRYjSBTgu5LCUtifU5Ks",
  "key25": "4QiG3wGLUTwNXkWZLWrRQRbKBg9d6EhAnQBrfunUkzR7MDigvop2xVkxK3XodN2W7qwj9MUsKHPQ8vTKiv3eEv9p",
  "key26": "4kgHBgEuCzTpkyofiuhWwsiYkiK7jwvWykNV9VhHFHFswYH2nkroh9fdZqEgPHJu9LHxXVRyackv7QRCGtqqnCuB",
  "key27": "3rx5pir5orcrmCP49VzTvgwkvSEBoFHgZBYCfFcxWSjTwA8AzRXahJydXNRFJyZAaW8QrYvY8aePu8c5Kkt7aHjE",
  "key28": "4E1enVR9yf9w3JxKJS6xVWZtxJeXN6aPxd2YVEdsrG2ee7a4LeBqrhU66ugzewxRBEo6J4qdtLgnvGdFh57zLPwJ",
  "key29": "VvXYbSD79WrpvwP9CNCkKj627bkvKQthPWWLTWPjc62yMk7iynZzKtns2NURruTZh2HfMAT6Efm1wf2j3L6rtdv",
  "key30": "2E7oN1F36ASbFBTEKB64voJxw4ggFqS9fXznogUveU2xAy2jQynqCsmcQ1FHKvk8rkzKnkPhwrEegqCRHo5rXXSD",
  "key31": "4pokv6dXy8R5UBbcYiTGewPaVC4e1gWUGZse4uxjDjPcezztffDeRtkzdUzyH1dHF6G3W9Uu3iz3XHVNUpRWkHpW",
  "key32": "5jHYKF3F4eVE3Rf95TksDFA9quaFdhCQF3DLpNijWPyRxA9WLbmiqcKcbms3YQZ9EdfpEvxxfSDJgiUGCjGy2DM9",
  "key33": "29mi1awfjuCF9SKTLwXuNZQKhsFmfpYPPdn793KN4mrxpPZ47X8kUC7o1vWabtJaQz8CeBSZ5iEdY5SeiuvurB5w",
  "key34": "4mKS9GCpyqZR6WiRxxc2egHB2SvzMkdLWd5ZDyW2vbEVj8AbrPSxwCb5SiVjK81nmqJZZDpXWPTgP2yBFwoRspuS",
  "key35": "4ENs5aMfMHQxQKybsUJbkC2RNeafrocyRednHHYDhuHFyju6oHbeiNUgomBT3BZTeZe52CLWiUn1UdK9ZeFYhtjc",
  "key36": "2S4MqN8ypdVVKVRdy8DBn43m3A218ETzC72GdFwWzWvQuCQUof6BV5P4H9RxTFSFgHsW5PvxpE6gEieEoA5rfkui",
  "key37": "3aac9kBDr14RJMavJqpPbfteQsNhnNFLWE94z6JVgBtWsXc7DCh1s4tGsC9r4QC6wgUcMfzG7K7wEi2FTVGkQHF5",
  "key38": "5dV5GXHkb7o9DJv5ARPXUeVtQ9QGdSdYvC7zmbxUnHzVphV5sMDGTW6FnbW2YberiRHjDQPPsz6sBoawdXonLJoK",
  "key39": "5EAVxsFaZS1eUBKn2yaUNRn3PHGfzAAYtQg8dUFQe1oq4nR8AkRowR1NnYDjeKLtGKP7kmPJcKVgjP3TKPHeJ1WP",
  "key40": "3qwy75nve8EEJoHRcrCk6cx8ha7GJLgGdBVyDgEnP42ztK1StiT4CRAEigHQ1TYvTzSF5no7ZeCHjM7epfRrpFAJ",
  "key41": "VJWdUcE6kdwCcJ3RSLf6zuW3gEmWfuAqPsqDupXnQ5Qz28yXJ9jopefJnZfe3JGma4xrH9gZWefWqPNP2RbuT3Q",
  "key42": "5BaWECNDwVtABo6hvQUZXCEAB6aRrv6A6NUs5ZzhyQrNdJT1t32HcEe3N5vJXdUjYsknzfk8nyMeFgSFHQLYiDvq",
  "key43": "3CrLN9AA2tZx7Depi7TWJU5gc5VySyi8XRCx5NwNCR2XVta95yi69AJDeV5pwqBHu8V1fWikrciLJpmoBVoEM5eA",
  "key44": "2SqXVzZKsnTkVxk91j1WiG3cHjJE5QArWhYvgqd3dbUMxBmuxREfMrQeh3fQWa6dyLkowdDSRe6UmEzFEegchyo7",
  "key45": "56P9og7oSt8E73pE15wGJmp6zzVByWe3PP2xbD4zz6RLjm2wtjyHUbmKohbknbSKS645VjGytr1cKgYnxE8oiQJ2",
  "key46": "5U6iQ1PwZj52s6kpLPdCx5iym9pxkcbuT6nPM9Lh7saDMyaRoZRPfERoK1yqwgfociYXyUtjYgXma2V6d2baXEtz",
  "key47": "5UzJprrfJcpCVnVo9vxTnPipf18WNhq3rUQbH5vGqXoKNVTYsy32Kh3QtK8ZKW6j2JSE7wXekgouZxZ6vEgPXWgG"
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
