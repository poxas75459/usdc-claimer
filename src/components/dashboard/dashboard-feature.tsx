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
    "5ga5YaG5Bp16WQwGczpzGqMGyaCN4UbBFRtyDn6yzo9HHbrih4sX82RzRVHaBpiaJZDH6suaAUKrgFz7JAMg4xgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApABudFoSTKyUf2YHA83QQmjprXrnwjPcWhGX38dALDhVsd5Hpv2eT2JwhEbzK68S9QFuh9EmvGfbfJeAMCm7mG",
  "key1": "33oyv7ipMriwv6dJ5aGy9PscTpRqgyWT4MmcZFVnMFJK8irRk5Dya7dq1VbXD3kKSLpvk4Jpc43m6g7moNFofNPJ",
  "key2": "mVYutTwUi7W35cM8Zfj5SWnk9UGzHnJh46jSpGiaWKcAcwx4mgNQ8VKMctspiLmhkh7JPuVTbCBnVvw7BZ2GLTt",
  "key3": "2iNUcnTvrwv7p9PUSdQEZyBvMSNyaTpmVHbwpQ55HGfVeMezEm7jkFo53yF2hwNTvPUFvLKDEedep4BrPAZVYFv",
  "key4": "5yffDMac5xfVSxFQqCHKHnHGuPPyZuvhTXz2cWctsSY3t2t6kr8Y3m1V26PPu2wyG4nTSZURzNNuKJJQVdbRK19t",
  "key5": "2sNrfr46Skmr5GSP8iigjhhAF8r4Eq4pewtbWJAYovnJUXZGBeBbMz3on6rnqAYjmyEsiXVFXSkEXLrL9NBrzdfa",
  "key6": "54WEZmg4qVc8eZMuUTszfQN6MeLzGwuqtdZZLALjCcSy8fEN8GsjZVaaubCLZarvcQRH7So9bANfKBKr7NW7imdY",
  "key7": "4mb4pKBKM2YRR4StQbD9eVuAGW1XE9jhuTccn9F3EH5nPUq9XZbwY4RxH3H9fgWsfPvUggFz3sjWHv69dNMqGoae",
  "key8": "3xMK8dZ4vwNKskCes2Uy56pPs9882w4mEKATBHKXQRu2kjaivYELNKNTPupFtSstgR4sbwxiiRHpHXnjZaJRWvR3",
  "key9": "66bmHDNA7YYkQxFhMWvLBY7L8EetjDD1cLWnKTQMFc3oDB6LeRPAMWsLzxq8iR2AYszrotYUBZ9rVfcQWp3i3jMi",
  "key10": "59AnwWwXv6SjAXiEWSdXEmj8pdpKbGpfHMMLcWhcRa9cJy34f1fHfLLz9D1TdMVWVQK88af4LpWh5aQ6SAzuoagy",
  "key11": "6DP5EhKqJCWULyj2tHH3igtKsVmyaiZ6PNNtgaiCtB78Zhb5qFfwZMxLiGSeYTLxNdrMQLAMT8mbiQwgU3cNruE",
  "key12": "5MbVeg7g2CuSyYswPNwXfgYVVpYj1iV5hki9MY7tHuAXswZFPtL4kLYMBjVTJNGJCb2Rxd3c8ewQJcjdUBPYuU6Y",
  "key13": "5mLKbLQYv1S9c7PqK33AJT4NNibNjp1WwbFAjsC17dezWqBcxJC2KnmTiNLvKxcDet2XvqS9rsWdXQ1QvTY1Vfqu",
  "key14": "3xUTkjuUZkRzpTLLA4E2iTdHXC6PgLJQnH2iLszt3HMVBTohJxvsmLBEdUERZu1cSKSphhavitr2hXsPgQGkS6DL",
  "key15": "5VpNQje4Jq5zxtfQVSJPSgik5Atx9xuJSQtYR7SjZbtToYHudvsqsmYn3VymzYJnFykM4WkqX6oNvjqUx4jVch3s",
  "key16": "44Kp3E3EPf8LmFJu6qmsmEyX12e5nZgPNi34N2kGemoTv8JN55guKVt7ya4JNSDzpAaLqV2nXCeLr3eg9WLLtDXV",
  "key17": "kxFiNcaZYybxCTP9SRywLxUhoZhWz7QVw1kNAiFaNyFi4iG1eHGcTGTH8FxTaja9hKVy7dbx5MAnKi8BXLVqL49",
  "key18": "5uQu9TXA6Vsp1vpbA6ftrC7wbCGCi2K2JkgjnZ83aN7qLzj1CBAf9PCCx7m8gdv1LnRjGYDCKhYSxUYJwhB9nCCa",
  "key19": "2fPWFCg6oSTHv4kntavD7L97zNWJT33KyoVggqr3X1wdRcHMUJecNKGr4aDVsjFzyc1VpbsQ3RsTfz7mjDbristC",
  "key20": "2RR9gm9EH9MBwD3vxrCQ3pRZrXYcEgRUugf1h2nBu1pNFBtmxFoEi9HBHYMe3HqYbdqj5A78HebNo3rUsPBXkLKw",
  "key21": "24D6UR6na6Pb9KaYUGmGiYnjg3jw1wN25GEHH4feUhLWg8JyBdXgRriVEgj1LdQ535nTRypuxb32pf5KDJdUyu5g",
  "key22": "dhhSAHYsmAnUz9WTAk1mFayuAHYTazR6Mpki6goRbnMNgimSJEFYZV6uBcAx6pKN8BaBgMu2kZfSv4D5PYg7RRW",
  "key23": "4tVxc6ij9kicz5PnzY1HTkmEw3hUfmVgRHuJFUpBJaDpbmfMhJPKU8AhuhefqEhfTyDjXmVBfUyR62u5H2gt9uki",
  "key24": "3xE5LtsKVjF5X9joN8EwKmRezdZh1GXr4iSEMXaT6WyPHwm5jx7ULHi5Hw71X7eSbUKNnvCCiL25SKRCGynuxF5Y",
  "key25": "3KxFfA8sj8tHxC6WumQ3BTScXqbhFkQKwRBKz9wpZYuoesT8AWed3n7ryF23BfDcRwZFxEVfYDfVqMFgJ7UwqJXR",
  "key26": "31ss2SQtBbPZ2oXWNM7kAUjF5m2vF4wvya3sfuwcrJPJ8B73EqR6uMd5J1peuEuiHk3rLU8HvXCVe3NLX8FEA9gK",
  "key27": "2DNyB1CwGuU2kQU3oLbqMnjd5c3iXo5NGWoDRTWzpCcwdPsdra5nETdHyKTq8ncv9GJqGUrdp9kNfNpJ9fo4pwtq",
  "key28": "4eWFPEQnBmmnHQeEq21mFaqv12NSyBisjQeokbu54MgGhMpvmZrty1KV4hpqgPh979LPfXi6K9fAkEWAjd4q2pkN",
  "key29": "3BEUB3vVWDtbriYq1D6S4oYxDKjXsUm8BWWkSMuUdfsQxfzcELRvmHTYUJBkhwvf9C1UhB62BLUiuUYsZk1x7duo",
  "key30": "3UgeCe9mWGokqX82t8Ens3s52nJ8QHWjbP6QWMpesXKDmcrzFmEaMJREiKJZTwy3utjiC6ixzmE8N6X9V74bYcLE",
  "key31": "YXV6rQ6eZrxTQJCwYijusKQHScxYyMuRWNCYCAv3TLG6oYTRo4LvfcoycyznpzKVXdocBaLjdSzFvaTynDe3vMU",
  "key32": "2Vr8dMuTcjoGAS43LKmVBuJD6jewZ1EsXKncZQyggNKtay95cXQ9fApK4RjRiFE6w538etcHLKzenLpA8nHZw6RL",
  "key33": "h6GzFZBJRFiw3k5JdrqKNuxZ93DJKssTreGeaFfsGbp6iTurwnE4MnCQArenXUH4Sv3fwT7UdhabbPnXAGjaczd",
  "key34": "3MFQpVsYAG1mRY2As5kM4z5Pv8cZcBr5rAyG52LgxWA4AMAi4mbhyVGmGN7KP1XryJ32wicpUKjsxKvhR4fJDus9",
  "key35": "3EJaEdRpJHupBdxUN4JmPehWvbUp9nQhxeRoK5UdggZ5qzpMXG7AWvzQ8DpbWYkjc8Z6QQQwhQGnK6nM3fmskyzF",
  "key36": "2EWsDvnH9Lbh9XhQ4CUJZnipvHWpZgZEZLuyXztr4bZwWMBbjTVZxzGhymQJvdX8kNyjiC5ZiKqdubYAS72YnWBw",
  "key37": "2m2CVFzPPR6VkCge79rcYMGNbCD3rjx2bCpYBqybaSwCwvdTyLSQeC9r3cG2fN4sfDQP3Jewg3kg4ej9yG4KQenv",
  "key38": "4BGAzHwLSCdohajhff7E8msPabZ7Jbk3ernm9HNkYGFnEoyPuEJxMpzZnJH3LenKEHgaqxwbnJVb7GiGJbFMXnk2",
  "key39": "4ygzfA7zhpoTBRUUWpTNGkS5yMsgEyy5YKxwwiN7JcqQsiM4fnAo91yvMvqEDEyMP7yn6CaXHCwZ2Rovfc67SYe",
  "key40": "br1tGv9VzgJLJLBxaiUWDpiPEbmsHn6QthFMEjXoT2q6jHSCZ4eP48TXtksGXy7xMxVunw2vfZFRTprGerCVjak",
  "key41": "emyfPEdbEmt6dkrHCRxBKcAiXhBKDxQq42xPbHs19VAwCouX4dHhPptszbqoHqhdsTkHeyVPSqPCD9RH6YXvHfz",
  "key42": "3vTGnpmGT1nuRu58nGxSu8f3kv47nNZXWR34xEF5zf65mcLH6TzjpRGDtuqFktfk8kqGD6hXTRN8Md9mcvqEG4Ea",
  "key43": "2F43bXuvh3sN6GntnWEEtYqFpVzE1Hvwdv3aCShDisu8Cm7Eu1EDVn5yrkyMCegHVbLPUo2VAWVXAwtmiVVZcHy5",
  "key44": "5i82sfbVuAsTCf8B99iGd9aP1GiC5ecSzHYSpBGgLHXqgjuAfsuBjdf6Wefgq18DQLRSaCSt48mJ35E4gtH2fw7h",
  "key45": "2jhrCDVCTVWt8mHE1SKX84o9Ue6vnQGHBKqNwouog6F1gmjgbcmbJj56jtFsEKTwvikE7StACqXezjnEiR1WTj4"
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
