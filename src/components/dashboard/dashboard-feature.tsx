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
    "674jw3Pojy5q3vg8wJFWQNmi4wFqzvPhHRZM9Vf2ZUiC2njWzxF7tPWSfQSiPcEYATbcr9efBoRZ2R5wfNjgg9Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vue3psLXhH4nhZwTpExHfVZEFm574hsoYrog4LkrJ5KqXrgH4invGMErPy44C7GiJz8XcphLJcxs8221Yz7drE",
  "key1": "iuiSafxGqLx9WKuR7DsLNn8Nmm4aD7DwhcAQpwf73cfwm2WWgpSeJGhz7gsrKhM8LhXgEKyPbFbNiL29EbSc9Kv",
  "key2": "uFGhLC7dDTnbXMGgyFgzrB1enyiEv1wFiJMX9katHo3Ze48T4RK5NKu8YFCz5tmyAcP9bEBeWG4NEudZQxkM9Z1",
  "key3": "5nJyoCwkZVXrkmkDNgTcFU2LoHqC2Ct3FzJhoPMAvbZM2BGz21tEgCE7ZHxaDw7V9DB8tov4US2tHdtB5Bc1Doz7",
  "key4": "5s9rzbahs9Zijo9Pi98f4QCAA5Q3v7ZbST8C7qwxYpPHPYr2XjP2ERSPXZJn1iHYHf5nK7Dm4M3B8B3eHoJJgM7C",
  "key5": "2JkfXgBtVeZq5fv4PQyyDRkj7nN8G8z5yv56mSNmnsLMBjMoNoLTdaJ9kqgbs4aTiG8gD13VcYdZm2iUzE8CztC8",
  "key6": "3gKY83bvrSQaCvjzjGU5LDtjxpf2oB3JKYqtDMTL766qdu4Trd2a6oXp1ScqnavM13VAXMdSn3c6gG5J5E3UrXXP",
  "key7": "4meszzKDGxCkwGWhg2UPQBWsx865KsJDpgSaJs6VAvRXHzeWYXKirYzwUmjUKNR2wvkkp3ymVqUckZSb93VoQZ5b",
  "key8": "4XgtdZkQTof3dWck1ny1F6oJ8B1bWndcNbcLpkHrH415HPWvEyQ12w46wQHtEP5yNbLs6ia7A2R8XkG21znPFE6J",
  "key9": "5nimTzPZ7QgfpsyWU6JnM3smYNrjatfY5c1goaovZtDGL72C9vJJ5sfK9Ki8nd5XuCGtyjuJNo4UFwktPGrcpgfG",
  "key10": "5yDRALwkYR2NZfzacCszyQPiSQrd1sw8ca8HXdb66MQxN8vw8FTSo762CzpDfgE1z4aarxLkPthVDPaTKgcTsf7c",
  "key11": "63eEAA5QBDMGUwqfVxsGez5E6R1H6Yqje3KqVowzHp6vvndXpAqSQN5iEdMDK5YEqGoiUFgELkWAT6TY5i6R573E",
  "key12": "3NK6FgzkmL3teVV8VfpgNuvVNvNK245G6FrZ82VqUPvU9RJuPih1Ze6QLgoeE3iTNLYWVGUNfW13koaVaufw581T",
  "key13": "2FubjJq22wmEbuPHYzxxzTuvvG74ZL8KDrjyTgz34HELaUB4S2XgAENXtoTzckCtdnVqUGsacdpn6DKCyJ8FH99j",
  "key14": "3i6nu3r3D7nrLW5BUEatCBqEeZC6Fa6XgNNS2GxcXxBD2HQU1XcuJqAbtFYDvCF82fyD6wNMAzWZuZTEYTyrKfmy",
  "key15": "659RWuNq5maHGYVmW8AeiPgecH32PKAfFjutdrz5FznzqkP4APBEZcesq3Cqb1LExMpkVNycM1Jf2kEZWFGW2R3h",
  "key16": "2w5bRmLavWnUgSFptnz58bw3ry2nkCbw9EPQKw5j5sbAy1DQt8Fegu5E63otpry8ka6QVDrgYDpdFePi3NA4VoqY",
  "key17": "2gZRe2tcybWi6v5pWarnNDdqpocrwLbsuywWczYdaKDZQ6Yfqw9diBdoHZWVeCKy7nLJWSHyaJkHVpZhATkfxBaR",
  "key18": "JMJbim29TnPi2qnDagrBZQL6AucoEsoKMmEd9ijAqaE8z8WfBt5cmVxpovzKGT5YebffuVwaXsYUbc7ruc4AMUq",
  "key19": "654Ur8V8zueGAeiEbaoicZmSWvYJMU2xGV2C8AfZ8Wk29VDkcP3DbAgsqfi5MYVKLhGJebAjt8bJk1CpuYdNaYuh",
  "key20": "5kjE4s4rQWnodnuQ5YudtLgbsnJDDtdftEnmvaS6JjjTS4of8eZpHCdYN5DBMhyhH5J8wtsSKDZvbBcCFDrANf2x",
  "key21": "3gsBTSgPkdqaeNdeypF3C1iqzm5Fj3ekhpeytNcUbWE3hvzt6kb6rud1YV4W8DBKFd6vmEHnFDM1GjRVawEUvYS7",
  "key22": "5qwCBM8oQKUh9Qih2fZszdzrhbLt8xGu5TKwvS6EAYu34TZYVd1ukduyyDm1cvEmPfBbkcPkZGa5rsZdu4J8STWj",
  "key23": "2q4d8tYhWtqmCAguy1X6wDpGXnw9wuxT4H4zBUXzfAqVKLJ4sTQSAayQxkF5z9uc5LJ3LxHp61xAKGmquJ4JwSCX",
  "key24": "2zcA6XtQTe7xs121hFbDNv4aerD42dFdE5PKijCKA7Ynx9d4CdAAHHZsyX3UAMpKznUDn7AW56Xx9xC5TfaUUkYi",
  "key25": "3yaivMWVK3ndoQ78y4MfjLGUmxz1hM8HL4Y4Umde1ujUtkscCShXg5eT51Mar4vL22DTrms165N8vBJJ9ZpqEdvB",
  "key26": "Tmi6yYe7rW8rJVyNkN7ra6eVhz1qxtv39McW4Hrv9osaChnNgYX2sZp61jSNFWXSSLzsTTjStGTWyDFziyf8eEc",
  "key27": "2uRAAUyUE33tPjAfVwUcugTJ9AGoVXUWW3rndNoH6GuxNpjEL24Zj5graCoxRHTsbpSD5n21bFwR5tv2KBo3KVT9",
  "key28": "nEGRDnFhkSEmqRha7wpLE18Mex2xj45jJ3FPaA939qStSSwvpFCpdP1zuYpjwNRB2hn1yG5j4ZhZ4CiZEJQQ2E2",
  "key29": "3QXD8VAk7mQ23v4LBDQNpdXyKdUPaViLQxQbNibrzz5iVZWx8b2RVfCW7LULZ7TNmwEPX5s94voNd9vVwLL5ij2u",
  "key30": "3D4RGUzC5CX2tBBv71Wirsc6je4Tc9zQb9Dy7KVcHfuvfTkEQCHCyF5SEERSwkRPwcQ2rPddrV6xLy5odXLu6BP4",
  "key31": "4pTR7fmxL9961y4uZbapVhbecxtxwEGtSJuvshc7RYhBJgB7YPeYVCWoERmaSL39KeXfDtcmpBcuZHVHjo1NT5WA",
  "key32": "28pfK7ngr3MvANSbZx9qstMoXZqZEu7RmN9HVLHNskqrREStGMCd8PWber2mNgdyzEoaqU6bbVr3n6shqpFyon6V",
  "key33": "2wV55rVNmVcPKW92tz6gsSTpcU1q93MCnhrBbWLEfDLkDG3FoQG699Ce6yMLKGMC2XPJvmqDn7sk7fwaSbMaTScu",
  "key34": "2izLb6LEG7CpbMvy5NwxxiYCCb1b7GdTB5mtYVNo8MUdNy8rgXPXSSsgmoKofsQwsxz8XJZEnAUrLtdDSzpD9aej",
  "key35": "4yQ3zRKZUcz4ZcxkLvthmhBtxM51wdEehXNEWqvFU9pJituw56wWkgXfkkVD1VNcBHMCh1jiZXTzWSfk9SQfHvXF",
  "key36": "65z8rTR3DaFYfyMmqSyaAbMqDsD5fBtXzbSynMQLvVRoBzTeaMHYJoSxfvMbU5KHzS5taPzraroLUg4twZaWxe5V",
  "key37": "2gcqms7xdNrYvAvFkezBwByNXNGsRC9dwkFB4TBN54vX3Tkhqt84MswKsGXR7jU9jnYSeoEMow2RYCYc3bcGtJsa",
  "key38": "4mYLqXkuch5RaAxCnDPWrEck5jfoV5dSQL8dJADW7cZXgQd7iBi7aekGiG4kknvr82j71gpxdRAPbvnA63LZuHJS",
  "key39": "3jJHiFt6u9rwGM9YGEMcTP3BekRN3Fetokc9Lq6EE6Hy38hk3642JLHPxsdRUaHEZNUkNpBsmdTE5jEerMuu63X9",
  "key40": "3xr5mqdTEuPWWdxEpEEBX24GExKMp3eDqFWKjGwgacBUUqWKRrRwNxwuiNupPYFniBnvm5rCJUDVku7SCruCHDUD",
  "key41": "22Dk5pJVXJeNx6hXAZNqCq4vd19RpJpmQoPncCjUAXHDuu7hoxke2McPMBAqAgdRECstuh78vEW352NFRKBG2HPj",
  "key42": "4PYGAoY6i1DaQH88H4J8YExHN9xCc8VsYZtJ5rVcZmqfTypziHyHRCzwPNrdPbHCC47cHJH1iQ63y9psAP19edVm",
  "key43": "4sWy7r3EesUxCGqKMg5Mm8fQPMhnDgR8cGdGgN5Thbz6Gizp1WSTKXY1hKvQNuAC8QhTWWY5uRz4FJsU3MSiVoKz",
  "key44": "4YPreT3nkBxtqEFqwC6gJmxG17dpDJZz98P9JB53pJf13p1Wh42m3j2nHPjoDqzMrR8kw7AywYZwtAUaRRSSyWML",
  "key45": "2311ZEtKAGpQiLi2P5itpR34tuVZFHyEd2L9CSpsHQ2H2ohpe88NnQ6Umws2SPWQrDBuT8LohLf5jroCc3Bu2nwh",
  "key46": "4n7vwxRSTu6djvRzvq98L4iKqsN5WvicYPP7yTw7yZZCJAUNzKQGZ9NhzqEqzvZcUV5rcjVcJZCZkPTnM9pAvSsM",
  "key47": "3VbbJDKxxVEdEBxjes2QXVfM2W2fcXoBXXRKDViVqAGeLqyDbF5aGY3okFp1z8bxZjYTonyTDom9G9Zr98RE2Qhe",
  "key48": "3ZN2TpcujsWmWTR7skz533mJHkLF5ZztBcbEJZi4VdXCznjtNdDy1cQSfEYDa2p5p6V2kBQdECTz8J2n8Kd6bENR"
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
