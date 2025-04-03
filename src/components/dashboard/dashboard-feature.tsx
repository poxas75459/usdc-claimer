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
    "23zgiyFmMmStL17d8XLSxRupUsrqMBGYaKdRh4Ma8sENoY9jmmWgVRk2tKY3y5jwaynf5ojKVfLBYGDtrfszPyXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8YFiEY3nxYeaNo5zmUmRqXfQsfzFA5qUb6Exqv8fWBrCjoTQcpQ6169MXaGDWNeSK8HmtVmGtEqKoXe2VdwkB7",
  "key1": "59kRrfnhJsAoXbVZxkqoBDnHyXGvpd1sDg6fjDNg9GSUDEe4w4xjPjEZNDQZ9pb1CqpFzjzzTb5DBrAqQM3GWpPi",
  "key2": "3MxQGdD58maY9d9agwYc9gGvRL2g4YeSQhhtQeyZeTYSzMEyMdTRktN8X6NEPsTVDkoCi1zvsHTBrXTJDsBccDK2",
  "key3": "4fnT5C9BGDmpHUWgZLm2y52bZfvXWWC5TU5AojrbDHDeHS4zamJhrKWspZMajp8scHVbuVMXRpzfMsNRynru4Vx1",
  "key4": "QPSGp8hZGfbzXA861KxZ66TPiWrFsSvjiv3gDvwx214NxnPoZac8xcsSbyEyAvK76fUHdy9MwQ6SV8jZ9B9bDoR",
  "key5": "3S8UNx631ctuH1UreRv7uLvKdXbauPU9MBSF1gFLjqFABKqWmGRZcBjayJUoCRVBcGSQe1peQBcHZhYsVpWBkM4i",
  "key6": "328eUBemi6YhurLT2qpE3NGuHR35z3AQQ65GayVBs5A7x7B9UsdGn79SgeA1jaA66cRAh4gXNGnZMrg7oNYDV19s",
  "key7": "4jFDp9Cg1MC1dZEhvSXQQxtqsqcFkfv4WkPcMJsgz6zcaEL29wX2Vy3aWL8vfw5uvZqGQtNQgyvjfUYBtKSVgueE",
  "key8": "3mdTnJKGim7NDedR3kmSwkf5Sj7YdaHuqyyaq3Mwir1YeQwiuk1c74ZAK3abju9dQJMMLHCJthLMUJ7982KgajfS",
  "key9": "33rEZC7rPRuZZbvqU8WRAMiJHTBsq9BpXyF2cKN9HXUnFcqHGEEEii7jzGhn1vrUuueqdqxwtJKMnDYw5hn9RbBG",
  "key10": "nb1couE4RsYmiDhaqoLQdyugE28a25FkunrsMcPr893DVxZvpwGyRdKNwha94kEMdsa7JD6NpqUynFXCgJEjwsG",
  "key11": "ayEMhHSTBmSqBKwqj38TzS5G9s7pRQZLU7M8q3Tm7z43EfcuK6cD9qZCURjiiiBcrC3bivNdEgFBaFaPidheccf",
  "key12": "4Yi2sk1k6UCGtbh4aPiGFtyyBBVPQzgRAMw6yaCcDpuEBvUQK2MxbRpy7TWP42CL1nD72srqkYwoR4pmJVsZpEZh",
  "key13": "3xRpjTtS8U3DTDwFgnSLtZaAaj4uzgZzaArNfVAAzzkW46PrLqF9husZcGu18Tzt2EtnrPF2yiJRmSe8Wqhw6Eo2",
  "key14": "NR1m5UkK3uBUisESRhtQVag35vYgqiNS7f5PzVRdQGgXvdcGJJEe6ziKymzHJhaZzKmRo4ZHojh5KzewHoNHstq",
  "key15": "4bFHXgFA2SQcui9dfhu9tM9WaTPYnmqK6CC8eCAtt3DwA8KB8imuBMTsQJGzMC7Lw9b5d6DgraqrzLNHk3YbRCh1",
  "key16": "pncCZdkjgzLtQrS24TtsTrgAjcDjYkrxqST9KzViRC9MncjyajfZ7SnsFuBPmswbkEeTYtiUuD3Zgqs9773HqPx",
  "key17": "4wFpWGFnwjikXwSoEf7B4iNFohoQrHy6CY5AG5utuke9Va58v3yXNFB86GH6kmebgpetgykDJ3GUb1pXShZUwRtU",
  "key18": "5PzvA3GzPRNWUy7Pm26Tb8TVF2ncsQuP9SVfJ4F12GRnLrnZhct8vApRnsaj6Rr6KzpsEGoUuC6sKpZs2EkKN57U",
  "key19": "26AeTnQg2QpJZsNfQBAzqNkfdmMsLB8Rp3VeUcofaBmhxUt1iJrwCgK46n1gD628qrcvVEZ6EgtfPGXcDJ8fvyLh",
  "key20": "rSt1QQ7KXWc1w89JjmwmyvmmQgr68z1yYyYjTmM8jHWXk2Q75sW8JJZkZVqrvDgwwavJtn6JJYa3bagLxdtWy5G",
  "key21": "2g9zqiWYYjLe75MUYru2Va7cHSEiirCYNqYKTHfq4viqr9s15r9bj24hVLpGPSwbGzjW6SfSAV4yD68WBTGwZ5yy",
  "key22": "4xfjHNJLmHD5Mx8ecX7qjP8fW1qvACto6A5tYof4ujCKjTvBV9jmsBwfk2kJs9RHyVGZ3r6y7HoXkNwJNB3RJFiS",
  "key23": "5Whcie67LgBSEcKNRPyjU6HGBumkhJztLRghnpFH16GYoXT25kMfmvZcWKfmiH1yt1vbwT5NLmHsYTy77c6dpfgG",
  "key24": "2dVTaAH6bMkMpX891ZMJtYdMFoDSxDBRzqjkPNLbzvy9S8ht8McZrurU8gkfn3YpT99THvc9rtfYnF4hhUDR4Hci",
  "key25": "gv7kkW4Hm3qBDeiFV29CTfPNZi428AVkJgzeH3cLyU6kfFeZncvoJrnFENAJN2NCNGKNpwr37msqz2eyCMmCa2F",
  "key26": "659NbuiwjivquEk4mJ9cWwM339phqpULijMwHXtKREphyA8v5ooEut9iEScWULnrD6ZbpyredBDtYjFnrL4K5dDB",
  "key27": "5zHY8SbxNvxSfV8ZHSbm8iAEkHQ7WumNSEb12jbtNBbn6jnQf6xsCzpAsC2FRTMDJdCgAX4CnC5f1GLvzKTKt8sQ",
  "key28": "3QdYtUckRBdAWRARqV7jfiWgndCx7vCmPHc8S1aamdsfxap9SimvuZk8HDyX9pfsVTQegxojKpK2ufHw8VC5ANGV",
  "key29": "fSuvF1nL9d2XZAJqz9A9CMycFJAoxpAKqqr6sRARgiMSsRPiCE8fmRq4CDbDporcDZn3AsEWBNjLyjoDV6tLcLT",
  "key30": "ZhUgCiRkt2npNWxQkM3AdcsV1Ss4kzi4jgVcRYaQ3EeNsDipRjftpWZoBPdmhYBK26YusCWYLJ9JxdaTLXCzcWP",
  "key31": "3oq37M6E6mmM2AhPTEBitzPz33ZgJun9tcepvqJUvYJzp1nsTT8ZoYEem5qSajUrp93ycL1s9CnwPTaFwX1F4jLC",
  "key32": "5oCVAvQtQczvK8Gg3NW1GadGmF5sizYjqzgoLmJ2JVs7Z9ApVTEFKo5m8FyqbBx9P5gYEw7N64KqaU5J9NbUMLfZ",
  "key33": "4SnrtvzncP2JWJ25w4qvbU73kZvHRHaNw3Hdaw1EBUKD4nfJQNAbzVPibT9C7wq1bez8wTtNeXN1NMA1FpT27iKB",
  "key34": "3aZBR9rJxwYzFB3z3NQ6cgsD4xZKtLiafyzVbFmpJ5mVCjfFkxNxBBQ2sbM1pu82MqGP9sSpX4kNkVdDJSqMSP4H",
  "key35": "3TRfrgiQp25x8hLXUqfkYxgtWveV5ajSfWjcqfoPgVXffBsWHuhfPb7k1ofdoH75PpaKa4FZPu9nyhAg2q4xpdjP",
  "key36": "49bcViCZqe5iDhCtNPXJwaEUhAjKTq8ZxMs6Zbb3qtYZZee7jFNSyXpobXcYvXsAfSN63G83J5sus5e7yuSfJCBU",
  "key37": "3A7MCcgfcThLZLgtwXAGdALUjKFMBHuuSxft4sq9NSa21QtJcQ38nnGXGojzqSs1meeejkoYpr36VwngYtitVjax",
  "key38": "1ZKJXW5sZkCZekdR9RncUa1iAg3qgEmTn1njQHoipJHWdvUn6yHnPqoW4ZbiKvdJCRebtoipsN8tyNTgMwuK3hN",
  "key39": "575Ue5zBXgWbbx7AiBgwYj2WBQRYnaL8X6dyGvkdKQoyRfm1vGDv2zkBReGFAWLshA9JxEzQsMVtL7SNireovqsn",
  "key40": "4ZUQnLqeiyn9y4FrrX3f1r7yiip81rf5DhMxPuYfWg5L1P1oVKAPVZKrkgYtEjDLfDzrJRCpqgJyZ5dPxdsDzAe3",
  "key41": "3ARG9q8DpKd9FCusmFHetSziZFWt2EUhUyfsYB6uXApij4tr9XU8eccAGUTtJ1YKcpJfKE66Yc8UHsZBnDjEJuGr",
  "key42": "5eLfe4wNoBMttQnyTyW9Fj1NevfR3cJT6p6gQgnuwa9hrjsNBDNiARxzP5sJgrhTws4yk8jUgpnV9jTaUUHkcCgQ",
  "key43": "3RSunxVV2VgKoq5tU8mAzUcoUSXYhuYmNMFy9Wa2artG59SQcX1NaBJiAkEJriVJDZSgAeZFrWWtHicJrb7n8APK",
  "key44": "5fMsBLv3TuLBECGdqDMFcQzSQkkexMN1LgLSTqgntF2ePoN85TAGuVhyr96JHbpLFox8BKhjnqvP15Hfr2cgEkeP",
  "key45": "2GPzmzL5HjKjvVgEyHE5LAgJ6dio1mBv5uUvYaxBVHJJXNSPkZ8sNuf2MaDEgZUTPKmCgK7AzjF2vvwr7ySKE8E9",
  "key46": "3Hc8dmX7fzfhR6W2brMjwvwdhHA9ETF4rE7u1oCWgQPKm3cFxQ9kSFSVaWbjn6QF7ji9KEW4WTLakik1nKwofjVa",
  "key47": "5KQfAeq18T3UN1FQfvWM7jnFNyNm8LyuBKthxZGfypkWBQeb9NPQZyFuJVHQh9iWJqecgRmPfraXfTZxknjd1XK4",
  "key48": "5WBCJKoNs63kBzbbxY2EEjbjXrtmbFbV9hEMA52CNPmSrhSHaxxvo8tnJyomTewT9ymEBvFdsR3b2AnUaof1ivHM"
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
