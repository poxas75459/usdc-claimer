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
    "2fQwDU9hAg3iwhHKU9rZX5yYumbCpsSq2Di72Cc6svCrn7dkrYoFHn77jB9uU3P5VcmsRvJ33JcNEH29xWaEUtZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEiVVbHL8kexK4LDGQbkjxa3gm55VJfoneMAWTZQ9dvEpE3a9JkfdHnLpinKe5GyNQGdbDf6hMtWjEPAAsV3ZAb",
  "key1": "3YvTyL8MV548keU1WLhJ7AVDNuZMW3AmaFhQ5x1A5V8fg1YJzmx5P1t11jNkXhyg1f99TBuqbiYDLwHRfdZqU6ih",
  "key2": "3kTQAQprdcJb9TBPMxZqpGnSi1ZTyQAPjPXp43mXVHtX4AA7aYyMmZ32sEnHyTw7F6vFs8AxNswD5jpK9uapkADL",
  "key3": "4J12wpPrHV3irsRmS5oiBaoiCLocExX339gDFvPSJcgCbPmszddZNzYZf9NLbJU2Une2GJREY4weHTsQ2fkH6AGQ",
  "key4": "hroSLJZb3d3tmkeXirseYVHBxRUgVGG75hUt5jt98JsXWe9oaxfaFRpGFEsu42ffErcFgy3xjiPPjZo98DNMkL3",
  "key5": "4uEAL2KprSFwX7TLFvCYrEgsNoo7cNMAnCWrzmddALULVszquwZ1e9egLZCPLdztSjG1miPDvHEhTpZaCov7njqH",
  "key6": "5qVj86BZjkTyN8XixWCJL3CWwqHU1m9rbtEhKa8exGeoxFPsYyyVsVULi6ZJ4W4uyW6BzNo997cidVEZA8BUh9NW",
  "key7": "CLJ2KywJWbWjY5xD3Lyunv8meso2TSJYWMrUzpyvjkFuwayyu5HDkTVGRufzMkhrreETJQVwErLw6KNqxKjribB",
  "key8": "5tKFbni7YJ4wCgDHy5uoKQVETogvjecvQDeu3VUYX43E6DuyvXuiuua5fBAqmcFyB8StTfrnsQZKnnVJzd281dnk",
  "key9": "53cXMbBHYpefZ6YDshdLDGW6aoKzMFkQDJM3wgYgupiuxazifD6hhAK36pBnqNyVs34vV3G3gmKDUXXh8e9f6Q1a",
  "key10": "DouoJRvm7g3bdCKZCZz5YAk3dR3QDSh7zyG4qqxnr7QjWcyb6QKZuu9wSw8wu1iQWJWo59EqhFd283cpdsfEiKp",
  "key11": "3o4vMaZTPqPNV4Axxixb65QegkLd6dAr9LAAVZGoiY9VTVKke93omXYH5Rxe7rsJcL1dbqv4u1dRgV225LeY1WyV",
  "key12": "ZRn6eHWMEwQDeTjPdMRQvQ1KHFzGFQH4SCG7Lp3wJahp2b76akQgJwRimZFvm9CkCL8Y6YC7NfvophSJJS7aRra",
  "key13": "mNYWZxZoNbAwSJKeRSEnDuTf4qsTeYyjP5FahozeqmQ8dCwwS2SQM1tDXvsmTys8TFd325c3MPp8TB91ugBotJv",
  "key14": "2QxfNovaxX9xN7ekt3Vu9MFtjDrFjJhuuGdQtsUoY1B6G7foNXFrGEcwC8a4hFFhBMG9i7NM6bY7rVsoDmxhcFey",
  "key15": "3FgmidrHTWYy4wRnkeiRcNtbKCgCQ2rVVeZpUM9CLSN2GBqDi2ndCG4HnG8SaLBpzi6F9j55Mm5eBUxMSe5iEUR6",
  "key16": "3q9wwQHQ1c97dnF9dZo25GJLor94FNCeRisNPJvf8YVyBnhgrG9im7DLucoyiVR52oEpUYJmnMranzk4Chp4w2hJ",
  "key17": "3RpDdogG4t54DoGQ4eH9VXB7SQxwXecCLUdKsnSymxYussRgMzDxD6KCghLXt4du1KwLrdXrMjvjd8YSHx9TKgNP",
  "key18": "4XupcSoXNm15YX8utHk15kMHSWdtopcm1guWANmX3dsEouHBVWRVbgFPBPndWv6JeDdHYBs1Usncdt2CzqntK36B",
  "key19": "4Uf3iUDtJJaupaC6vtjgS6p9ZKHSRyEYs94jkHT86D8uDmRDqTsQ2APXPwfvsK7JCbb5CgzxZoNenxTc9NFWeS6N",
  "key20": "fRa6XegEmbHDstddZP78MPMPhV6ZWdp2PSWqvBRJgqN5SH8juPCvwKJM6hrsZVr3eB9e8jcHZGqG73ideYFU1Rr",
  "key21": "31WPHHoSCVmNVoHfAt8C5NGMfuAVTxhVxZFzNSKzMVGgCaBRzHEYVUzHdPDUUb9g1hRRn1pzcZmqr8asMYnGMnyz",
  "key22": "4SmwvxkM3kfCCnpyhBEMqpkqj6jaMzxNnGmGRmiU9zSyDbkiBp3Ddcxs5ykVsqi5KunTJcLQz6gCwtVMHrbpcqTX",
  "key23": "5UM1akH8EZvFsCczc752GGqGVWFgYCnbyzNpmkyviVtvquDGZLpqAYhxY57wMJQbeD3fYVjiGKLtWjFCSnnu9C6i",
  "key24": "551k5tdsY7Hm9ZWt3jw5RSoKek6yDZAxECQqsXCmvZ8518iSPMQxmTqkd2WySFFpVsxusrYML5WSkUy7BwPPpPm4",
  "key25": "5iLgKucUREXs42iXu1Bes8RTSAm6Kcvk7pRWc2MkHsjkLmuun4YKdhgS7nM6Hj8ToTizDwMXv3U19hD4vc64gxao",
  "key26": "3iJUoCfk5G6WdpFCKSnSd4oBS7H3ZCXTiY7pnGymHwnTiwaQY5affFw6hF4p3KqW4AKsLoEjfHFKtXAQUuDKidpH",
  "key27": "4BNgAZAwmgfvmjnPsNWtgSo9oK3LWuT9sTtCtLzHT3x71z625ugeFHjaj3ArTjy99pVKCLpmsEczre2F1X2ZCqnv",
  "key28": "5fPooKygXjERe5Qn3i7wXUxgTb8Wo7E2WQJd4LKg9djL5FVJGrRE7dDyZ8sZDgVDD3zPuFgfQYYZgx9VKiQgtj83",
  "key29": "2tcTxtGPvqRxeshaifQ6qfcxCVhTnqt6hy4fiJgNhNXaQGDWwT6QcunLM58F7Jc6e3AHbpZ7TgATfyGYzXSqiDsh",
  "key30": "2N31vCB8xzdZPug26Wh8JrPdUFRepQQqUXMzRvz7WcPcTMtnziaz4jh5hS3jPejPVWQg76MFtdK6fqELciXF1Hit",
  "key31": "3YJgkdkYDUBBCLoobeu7sNFANSXQu2rj3F5KJLPenZeDFa5QgyZn2CrmWVd8W8XM7KfL4H6hQfCzuqWWRGF4pThu",
  "key32": "3iqooAZmx377dQYeoWkKyuQtjnWmXgZRg51zkekBg9txqHWwo7zkdunZ1KKivd8LpganQfMdYqhDZn6tiZSS2L4e",
  "key33": "4pkCxASLXWocSk18rLc9U53FCeqNtD6PvUs6WYVtUoYfSr6ekgFLeCZaju746qL6qBmLbWi3UdjCkc18MnbHiMCt",
  "key34": "bTStHFECdZBw8JR6eiHkpKGWjQPcun5uDWog7AoRF3xRteGpWJrLUdFXXdG6X4hFLMQLb9BnT2ReAjcvH52xVwF",
  "key35": "5NiwSHupSquSivDnJUUdQobCuqhze95vTUPd75Xwp2Th24aNfnt2szwQvAkZqhQhEiEL7mpbVybg2zXqxaWvoazL",
  "key36": "41xDqMqq87VpFK5jp6DYZ7fYgEryTGTahTSZy3xwG4ebP5HowsXn2zK674iDYxxpH4q9bZKGuB5AfB32QsQrZxdQ",
  "key37": "4SVXSNk6SWJ3cA1jqU2gt1Sohnx5UFUdC6dcfCh38NT44LwCXfbNn9ZTKQiLTPGPf6s6QW4wyKmCnA1wpuG7eBRx",
  "key38": "4EU2r96KuQCyFctANkMVFyje15b2egPkXQUaMrRvKgTs3vgpDHzQvEpZuPPofRWABKA4PKkspxoAfddPx4ffQxqQ"
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
