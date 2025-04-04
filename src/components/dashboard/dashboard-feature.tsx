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
    "4kiXsePwAkNVhmRyXZPHJGkpSf2PFU7eJBmZCoZ5oEv4Uc5v4ojXwXbmtWvqTVRwJv6dnpkNyafTwowutYLUFoxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wi7aBLTad7ncgXEcVDXdxNoRwzuBKMrvRLSw7xVX3Tww4qXEwe6PM7dSQKnmf4TGYrLf35ST6SjxPVpomAcLq9R",
  "key1": "TRphKLQTMefhSQiDHnotL5pYgZ3mu3uzA1vLApxwsUkxkaDUwtQDCFbKQw19BnZQyqKjyHb9zVU8H1p1UapEcND",
  "key2": "3EC1Tvtvd9MYan3gDs1wmiKtHZC6c3w9FnBjQJjWNZeGR2gttVwLQ9RaRzdStgDrmeoyugve4PxHXYBahpv9yXqC",
  "key3": "4EP5oJQbu7C6aqgfafNJzKv68zf43hixu7EFLRKdrvCaFAYZwJe2MJhAUhMBq7mj327tSjT3mWgV14oELNEqPfig",
  "key4": "3QG31Kd29PKhnuBH2SK3RUNDjFkoBSztLWw4bA3upwWF224cXzKxfZZSZGqRVCnQRuA9pouqJg7AU4QHeH3HfQoq",
  "key5": "64doJRirva8pY28HWgsTHEimUbKXLRVMF9NAG5bQU3WjvexMyohzKdUy46i5iNMYM9ZK1ijQWxqFgVm94DwhLAu5",
  "key6": "5nFPvPgM6yVzB8az2Q2fpEePxerJUsWXGuoUZwtcFLZAXzSZ9osDy2GDZZgXbggkgumLWdV9u83NtJ2TrjHgXdab",
  "key7": "W6aKVe1mQEqJ5Atp4JekpNpY4wYJqXEvonVukYwsm43qb3fwLxLPvB6vQAi8wzq7w75N1rofqbZ8cEXSEBPeSxN",
  "key8": "63EGHMTyE8FK9AFRtEgK4b8jtRsYN85ruCw8CLQ6pgvSXqEw5op1LHcYtrCZcMacuVw96PSrzSqRwkeGvLCqbijB",
  "key9": "45FAz22SrRhwLDHs5jkobEscBQczDzaVC1PMojXYXCJADkqciHWJE8QQ3ed7Ty5fHbUoPV3JCVwAQy1CrFS5Pdy4",
  "key10": "4YXvmvj9erWQgJCqAqdG3pP8mhwvD1Eg6nLPGBNQ55PBaCgPWhRzitU7s1DFqbk2pPjGpTmksEVkAYnwMdN2KQ4d",
  "key11": "5WvJZbe1pui5rDLT45XsXYmM69346GcYFWf27UUC8FgqR8VTUujaa7YeuJLD4WffhSk9kdL2rzRCBrT1Z5WHQFqf",
  "key12": "2aFneKA3tswvWrcLDKedBPgM9Entu1sb73Bg1kjAYFwMC6bkFVYfzi78WCkLQSCyMfSAJDEdif5YYBneu8QwY3ax",
  "key13": "2xMEu2vzdZKnU4YYD63anco2yxBSKnqrAV4D3E1KgT1qsRKwX9tAJUtVNb3hvcL7qR9s6me3hKTeqQxFjrRVpzAx",
  "key14": "2mFr6HJU1ofDz9K24ADcXJUsoSGdVFjEGsgP3vvJe155aTe8eZfrK2NXU9aPKAsRfV3RCDhyhsNHzGP7xssg8eUU",
  "key15": "2w5yxB6k5F5G3XhBTNFTGq3ADmze7VAaoSZpn3dNHMMpQJUfHNPoMNBerWSkqCosAzZT2DgFVSL32BgVa4LZaUDZ",
  "key16": "5epPfU7ztk3jRZzHQnkoV1UKDu6CUufqPzUKUTSkH8aZdHFPD5FCK7ktmYbW8cWDd5kM8GWmjotQZZW7q1TLuMDo",
  "key17": "5YXQuhDykDkTNkpzeKmmpvVGHvoW8WwiixBW5tGxKNVNcTgiH24oPMDV2WcREExUmcGALPH1TmYMSUZYy1u16xb7",
  "key18": "59Dbc2no1rqG18sBf6hwD1TRbxR9vpSMayTn7PYqmmmVs6Fw9DT8XZNn7RKsd77NSnr3xVh9CUDpw6knYNWq5Vx6",
  "key19": "BgLvLgWYnX9GJqzogXRS8QZ5G4HA6wSWmjKUBDNDddF999aeJpmgx2a6pWxvJLfiRm51qPRtBbZQu8DANSiz8gt",
  "key20": "62rB1TgUwMojEpUY5x42NtHjVUiHQxiVJRVkVRgkbqos94B1FTxzuuMhWgw4XBXsiXGSan3ifjBM2H7ZxC1jyVdN",
  "key21": "kAnTSVBPDfK1jZUfj3ZBGo4drVnWtxHJQEw8nbCVxBP2pioBDE65duhw6TcLaW1KMgHidLfPHe25mExxj72a1Sf",
  "key22": "3zxAkUXc3eqY9aqrC4GdNaCK7qsZ33eQiguefnscjxF4fwVbznvQdYsrocDxP5RMpZ2BimJ16urC32RuLW2yViYh",
  "key23": "qBG9G7KwX9XZWR7J69KPNtBukFqyY9fwubAJ4kqukSmscGoo9ThHBXAY3VUCCPzGT72hvguotesKa6wgezPyjT2",
  "key24": "3YF5DafCLXACMCx2j3cULS4ckCHdKu3mvaHWLRAnjjPC1Gp3QyLYwSEFknoYR2XwPNtNzZjpahN3kiKcBNqvyp4P",
  "key25": "5cDjjjutUMpseBnWDnY3aRBW6YFAtjirNLXR3XhXGrQXuRfLZZeaJRfrkMrHxvfCSLjd4BzK1B42SujWqKUQRys4",
  "key26": "3zqnjGCnqBc565bvTCxWv4ybpZN8oPuzD2rtWaT5kNtQpfwXjntiJNhvvLVXv6AQGMpf7wNkXSfB9YVVLv248hAT",
  "key27": "jcqgDorz5BnbiRqqx39ikMcfvkGqByJoQPW56hZxtizcXjBMghghDoyzH7xxnnXQh5NHGe9t6Zu5rYhjyk6QWfa",
  "key28": "PtRjD6YBgwGxrx8mJ9fGdrZ4idsN9fAqsajgSLpvNhaTNr9xq6shjmeXyaayYsQKrWwTWjGQDmCsbw87v7FTjTP",
  "key29": "66nq7C6vG1C52YMYdftWTC1XHsLck1seVw9xmFGBPb21VzQ5PrFBCXpJaEAwapFhhtUnmnozhU5JMqeUTh2WrqUB",
  "key30": "2u3sT6eA49V3emrmXiAFyyuem35DuPp9wFTse7jb5cA4nJqSo9qaX9R3S53FC6JsvmeBGL44zJkDFXdKPVXUtATT",
  "key31": "52jPvM4hAxNWDAaLaRJW2o6ce7reRV3C4LTuk1hCP9psitrYMDQA5J5dWak4gxZKVBQ5nPq3JvKECuDaJALqzMmS",
  "key32": "24jei7ccvW9dBaaqWv7aqVuyPXYPTbeGxT3g9bHFHgfgghbkUwypNAZEkptjuVWZp9jU41FzBjbZQADhzZJUGJ5J",
  "key33": "37QA5e6yjQEE9Vc9gVqcGwkoSAPae4ByBQK19Tai3nYruP6gc66uVme4ffjp9qLWNvmEujmmZC2WxJxqKZjxC7ts",
  "key34": "3H8eT2UnvGSvmMMfQ34vxyNQCYeFzUqwg8rhLnGa9hxBe3iHCutEofzGDgtgnxyRvRTzqVVgotzcy2EyoejeS68a",
  "key35": "2txzFyjENLiUMkJzQ2u4RhGgg1NYHFBETAwedYKta2ZqZiMBK6PsFTM6xT6NU78CT2c8iMi8gq1onvMg5jcF2kV4",
  "key36": "4udG1hiaLZ3ZEZaKZb6NQBU2XcTGPMFUfRN1aWZT6VKquo5MHoYiEh8N1jA3YUbsFVzFryNKf9AbXYDwXXhLh93v",
  "key37": "2Rm4A8EShk4hCbyaYtKiQCyDaH992A3N7M7GjnKe8HfPnF5kYPm65ftTtKqGYMgWZKz42dH8YhcMn94ikbR44pZq",
  "key38": "5vGDdD1UUnmoAp6zoZLo8RUoH6SUuQs6j8RHmcGUPYvFSFtPWFwXLG77Q4QY2jNaLHE7RoVVBBf4uDC9BdeREv1Z",
  "key39": "3RhujfUFiJrG66ahNpeq7FUctutdcGDLGxKUk6ws1Bf4jXuHcMqisrTxs43mf6XcnjuLQJ1H6xAdaA3zo3y1GQKA",
  "key40": "57XpQ7gc6i3cAT5Pn3SKXZKHjnkE1au16enp1eBs3cdZDe926MDB2zBPRhKQ9PH77L5LkZFwC7P1PZooqSDf4Jid",
  "key41": "ekqcjBioQw3qotQt8JJFKXepWhMBGbDGs2vSh8HrnSVw1EqD8MCxjwGnLoFXrejt7VUq2YfuAiY7gt6fDBuYUqX",
  "key42": "2RpH4rkvznR2ujKzHHxXxKrViPn4UJhTYWq6ZWnjKEiVr3Wjvvokuvp5wPXM8Y6Phaybqvwyhyfiomk1aDrMm9mr",
  "key43": "3d1TBBUESeeeeaeuWNVFNtYGcZwXdSZe8ezDgcxsqyXw5aY6BsdR6FU8Umpxw32LpnWaBurwgzsQmDiKtodQMw8d",
  "key44": "5AGDefdU6RHgQSPSZN68LcsJuQ1mTsEDvuJrjggKsY1pPy8HyUiK8hYcvmb8pa8csx45sQV2vY3Z2gsryzcTs8HE",
  "key45": "2WySSZjEcw88g6fbNwsH6jzim5VZqiFf2H8T6dE2kLYeEnDeov2VzznxAY1dzn9Jt7FMnWQvtYdEGsHEmkWVjM5r",
  "key46": "z4jFcWYQz2Y6rUs1Q6wMdnLV84Ts2TfHw6KyGeC3EYbZN1phD2XgNHCuGeF1y7YZYG9UiwMs6h8q5ee4MpUEU7f"
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
