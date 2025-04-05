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
    "4Twb7C8Q6J5XNqpWFaH9kzqUzbPVnKAg1mofwJhcadkYAsgnChWWiozy8myx88f8quZASriXQBiDJc1UfejsJZsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t5x5CncaeJdg3VbQo7cdUtX6RmVCxTWNHXBNh52r5mnCv8eRfnyEzzwd71sy3n4EScQwi5FHYKk7yaVCM14ALQw",
  "key1": "5XLY7cUTsvvizga3p5nFzMukZAGfszi5pyDQF5pbGXL3RvBReZw2xpKzahD7e5JJotWygVn8XJ2zPVkznbTw55kc",
  "key2": "5iVk5aERtpNNPKK4LLdw7pucDJHRANLJrfMgb5gKANfELL1BeMNpXY7CqtrDrdTbfHWY3GBdo8kcHrqgXt3JfrLH",
  "key3": "2uYvKFxtF2dNUtZ9f9D5kdEkJNjpJVaDnZFjoMnsLBcGQBNiVXStepkaQQsPsDWvNNG7boGLu4U1oWBtLZgFeAnD",
  "key4": "2Kk9S9cQrvX1bSuaDi4gubHu3sUwLp7TpuZFjTzMvFgSaE9MqeiJu7nXytw7d1CrxvARQv2NM6HztzDSjotWH4Xg",
  "key5": "3TWucfFy2a8zgmc3pq9DyTzSD89cy8ZRjv3eoUAK6yXcFRnYapEdac9Y2UZRkAXAMDBGpUTpZ7jzVeeaiLAx19B2",
  "key6": "3R9n5GdzmbVDcwnJEoooct51WYZbqEQyep83Uzwr4xCHJf6tCVg39iWxgJzTmGsewc9zEiZeTdpua5Ek7BHVre54",
  "key7": "2oiAEm8o2vBRU7vXSj9hMakG8AqHnnFDCApM73iGqeucyjLAzCYqxh7Jngn1GhdcicjPquHAx1YUtBsE4gZLas38",
  "key8": "3w1FBZUCzG3NwkDfL8Pon3bDANARipN2bFZzHqBGLA6FP4UAvzDHK7Boo92gNMfBmPqSzZJWxGyhfvUFNRkMZ6xj",
  "key9": "2LnwfjzHmVQmsetH5nmDkKwCLpnJ6b2nGwe47UCZa1ovz9PDBvcdepShqfpVCZP5VHfkYZUejrWrNQXbe8gp9P9s",
  "key10": "4rgFFoyP64xHhhVwiC92PHKzEbudvvnXG5hRF4GVWbc4QFdSPrwRmmZdhgcYLi7hwmMcUpM2zQDv3sXJoDwGPFv1",
  "key11": "3BMhsZmitrfo9FSN3MhX8dRkToxGDbVJnjvhJYiammgph3LVmv5WJAzbu8sGXPheB5FbFpjR9dGhJu2sW6VwqejL",
  "key12": "5NphmB2FZJLuE6D8vhWZ8vm5aXWVgp2Scm9bsAqbWPUfhS51QnL8rbp3J9PMTeSz6FZS7Jqot1fyPdo3gXttsXor",
  "key13": "2vhFmu1vArZUg62wWCG73TTaGpiJs3R9sCMTkfUeX7frLn9oSXe58v8yPG7ftPuQPPQ7g7T6s6idJYV6FutLtgqN",
  "key14": "BMMGxrXMf5aope8Hmf6wYoPpeuQC1VcQmvKdUjrvhLS4hLt6uCzK9NYPhiKHQukBvECmVaAkBfiEApEEtb4A5Wh",
  "key15": "3EX7LYkJgxWEYrfj2ik2X8mxrnWpKQeiNcbZC23WMWySzBFJYsb4nwqWWPmtvEfw4gmBWQhv1DBHfBuWxoQ6R5sD",
  "key16": "UN6RjnSNzNNcZNme1Byr3vvU9u5oe5m5pXxGn527J9UbGJw5LpnoTyZontPT1efsfxzydgLoCsU1DHyzEcoByiQ",
  "key17": "4pHr8nPUwuG1g83bDFZ8rdj1Qd9MudSaWWfkee4pCDEzhE7yJqs9U9VqT5WmFWznYxWPDDgwC1ck1RTWsgXzpasK",
  "key18": "5nmbuhmPwCKbXbSBkJLEYipLosPSdoyGhfwfr16gNc6NvqMsSniGRZo8TSnpdfwWdgx3gApmXZvdqT2aZksYAmcU",
  "key19": "5yeioSX3GP9qaSBV11d5WC1QLsHpekkmQJmFYwmZu9b1s4jseCGGwmhkLbxPLbTxEmsNPdeSpWhQYemWVeW3QUBZ",
  "key20": "4kHQzyi21gjTd6wJeDBwry2HBd265qypfmtAgzQzjGJ6Gp3sgJDGEVzJfTLxBiewyDnNRivqj4qgFRjfbHtJLe6K",
  "key21": "23p86tLhW3JFCCXAhJ2Mpq2sNaRdQFMdsDEDgPpvU1MmdDyu4pCZmPoXwayUjYn2iZUuGHsQK91Wec42yeVcyhu9",
  "key22": "2f4zp7GwJaSbs3wH8xs9QZWakDKPMawaKqi4kJELPMeBw2eQW59btbNa9qp7G7kwouqtndr2z3fdNMgBxaMk22uJ",
  "key23": "4rngpp9ifng7yWL3jjMYT3PMKKaXoRSG7Qf9ffd7dEe18WZMHbfTiuM6f8yAxpF8fRU1v6RoXPBDDtfhbrKWqKr3",
  "key24": "MRY8dQgDWmrUGohrEwzn67vhrnsgmeqrxfYynrY4k3u6Awv74u7BjGBscua3ZX7mgpdogrB3MsUN8kvTRyNt9Ax",
  "key25": "2Xc4FQVj8ijooEXVuW1hi8PJVwhGkHmmXtHL172pd3qwDajBsxGwAQypJ2Po1yCgFXhWPb4pTNpuxTj8WPk4A8xc",
  "key26": "2y9MedzQPN6SB5ALidPYy9pEcpSXqG7UwMeKcaukk3PgVzkQw92iWneZHbQMU839AN4fm7DhCoPX8NbxiLQte39Y",
  "key27": "2yhJpaJqbFBnLdpdaXfsHmHSavkqtvFDX87bTnc77BRZR6PjbdRMHkHgaK9W89zEYbD9dcTtiChmbcksL4Zj5M4f",
  "key28": "22MC1QLBwxhkBA3W5qUwhfaJPBDpmonyPBwR3VHwQUuN2mGNseyyXvqsHURiRs4N5EfabmZUJ4XBzbenVuXcfx7z",
  "key29": "57hJSATG2Xt1ATwLnPFtf2KwSgptpJu88C6W33Rm5CAZtgsCraf8nXnNvbqAHQ48ba8vm8KgQWJ6GBjhaBdD6Mm7",
  "key30": "2BXyLE9WyUyxcz7PqaTQv6hgnTNJEGe7FZVDVJz4NTijvFdyNRp5nFEnYeCL8g5oKVhs1zgZVRhKqML6tq2aVygX",
  "key31": "2PrXuTBxK7XDsSaj9xToH3qKfbXQGs6g37cDxvdn8KsrM2ZVk8iGiU7yjmt4VqK359ttVUtkrgDauibrUHG65UHP",
  "key32": "4C5W22mdLgW56xXH4eAvPcoAe5V3kjQsorxH9FSc2NRvfnPUQQhoN4SVn7Jd2hdnogMV6J8jqgVcHSx2x2L6toZL",
  "key33": "5kSe6XijU3jzX5FV4H9uJkVvDCVVqSj4gBdweW1aXtHHQfeT1ErKyBKi4aXQGtCaTcQeqbFuqp5HX7HSWtcpwEib",
  "key34": "3qBfb3b3LCA96Wvhg3LHsXa4kMWfbZhvK7kTnpEyEXsgE2iMRYX9FdyarmW69obHN9LzoYsiW6rWoLVLjR9JceGA",
  "key35": "3NBnzghngfu6yWxkgi4SX7NRg3NE3r5s2YvzKC3W6yRzzbPcY5gMSqTWdJNpmPoDoYEPtRRJhHJRxmQ9SzertuLs",
  "key36": "5LQx7XG3pb1iLTbrCZTQqG3fR2nNuWoqsQQg2n1SqZJqpTxwmpWhFxCMJaP9CLCA9KhMoctArBUjhqjVVgACDibN",
  "key37": "FuyL1JNNCYsRWp6pBy6ry2BU9tUwtbds47rW22xXK4kz8n8PpGoCgBb8DwEjT8WCu73JjKQfH2X2nYbL3tMKV5d",
  "key38": "311Hq5M1jjMdfvTo9BCkio9FhoUhXEKynSKzWusfYctuVY9Zxnmt79Q3qwbud9NNuZ4HSiJu7gcJsKvBw3Y3bt1d",
  "key39": "5TGAmMhivmgkEx7kTwmbHFMgtYYBe1tFHpji6Yoar3uEZZ9YPNYGDK7wnmV89uo7qVyp8rBMJheV6We6WEJHw3zw",
  "key40": "1vsRgK6W1r6nHbNdtHEybfJWW8FDWDkZ8Kpmg8AnUsnZUJvybBdk54chvtkrLHVfmkASXZfyqEwk9mG2CDvA1UQ",
  "key41": "5E5jY2Kh89okx7PtGB3c8oUMogtYdRU4oK6WeWLr6YLRKHSM6ArtRfj6VFRcrNhoEmXZrGnQESfKRbQv4BT2YYcq",
  "key42": "2Dza9swQH8XfvRRcFaH3PpFWBNwZewfHQfQHxSFpkBGpM77hLecJVPjC42n4TtMukHJra45x4VMNUMfEiFzta9CF",
  "key43": "5Yk8bZ1jgLHh3CieVD9voRXvCLSngW7eSWcA7H6TyjqXhM8yzzrbV6sBpeFoxZFXCKvHznpwE3UNvKAB8QzTZtug",
  "key44": "hRzPupampMVd4ES2t7XrLJsjmywRuzKSgvaRJhhEC4NHLJUNfZke6G33NsVCsRTFVaRE7SFKRi6dbYEv3tQEQHa",
  "key45": "61vp11444R1w6jk9tsXGFYcYyit5cvaQFrznQ2TTCdvjYgeqmSKtRYzLTyqSqDWocodvmEqtYvUzHZ5DJ2vLqU7Y",
  "key46": "5vB7LAoSTcRVKnAaonSNFubnj1n2BvDeCcmdwnrNDYHuUMZbnv7VabPnatk4zacrQCYRcKnQHurGK5Y4yj6bEQPZ",
  "key47": "mTiyVH1QgDfR7pqmvwzoKb3RBQoppHH3tAYTVdL3h8yNVaZCDd38UoD6X5UQQxSKivnFVzjS2tVmmuAkugrbGdB",
  "key48": "HyWUYZqYiQs1ZUAHMpPsaxRWJD8Xm2FsAjJRdHDm6gsDRPYGBN5WfGiGnCStF5iqA1cH2gboqkmFyBRATEckHMv",
  "key49": "3CLQhMjS2gaUWkNWwCuYHw82czA62UWUVwfXtHWm4gWwQwQUyE3gsNEyktP62CxZXRzaUXbBNVyjR2ghK3xZMnNJ"
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
