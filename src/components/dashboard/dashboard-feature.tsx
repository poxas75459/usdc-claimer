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
    "4j1rpUvT3EFevb4LAcdrbcupdP8SYZ3M1qVJV1dPK1ukXyas3jL6LZBbDtCmxBp52gH94Zu5dado4oewsJF9qCRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mnvy5W6YpeV8apzy2bzYps9QbtLTj6QgFNbatffgXBKxZApSvuZSknZqQhSXayYgDswxcxXf6tBM6Y45jQqMmgv",
  "key1": "FVrHQVMcBnsaWZHaVtUedtAtDn6PirbEaZCobnjb1unP8Th1RwSLwhXWsaX8q2wB1RAJhEPAaJju7LhfPAT6AP9",
  "key2": "5KVNvos2kuhTVrKLXZZHkr7eTCgzQw68rseoL3y5Pe4PNh2zkGByUqwWozkU2U8PYETTFukDfh7Z1GmrK5yX6oRN",
  "key3": "3wkcNNaDHHTqE7wSKFCZu8zLvXdrc1nu1ZXwveuqu2k8e8FnThy4WaxQXWQKupckMxKKVnjD6PHgirEkvYsR74Un",
  "key4": "21xDgsfkxKR5s7SL3WZiG1urwQxSyrmdt3x2EKWTjeXjKAkzD8i99zG2gc7FZQwn16Q2tmW2cPkzkGHoW4io2G1E",
  "key5": "3Sgpj7WAmaGAuzRw57NutpkYrvJmVnJZ6VuTZjA2aEz4QpfxZWdiNJdXaxx32gkxVduX7h26cGRYwsYnnMSXNZ1t",
  "key6": "5imDSDzHmVezNzWjHXpsL8qcKq3uYDdWHL64URVLxe2JbNbuMWxTPUuvpEUQ17J683qv2HJX2TGiaay2fsvoHT55",
  "key7": "nAwLheZacrFN1eSXATRneMoEufzLiJycNUE9GFMtkpoAiNRUS48ZmLsa4PxaWFME5RMZmmarnfZ6Ag8NUZQzVEh",
  "key8": "yBZMAAzhyN4Sn1Rt9zRkXwcaeF5UVTnv8sKkkkTu3oQY6V32CcJTT9aaV7k9nVWuU2tMKQCNfL5MGmifN9UpoaA",
  "key9": "2H4koH5j55dmEwB9YiXWU9fUrMgiUxCkF21SCq3TDnqrGCUSA2imU7wN12TngG9utiCZpL9Gy8vEM2dNkxG6fyWy",
  "key10": "4dq1kwVHysgPbMd1RNpuyAMqakhyDizH3pRtNn626L87yJ3CYmfzqMKdXqVd4aY42HyBQz6GkA3Z3gZYQ2jgNhKT",
  "key11": "38mRs7f77eow2zd3HN9T2GVh5kpXZvby53AnrhxVjmNgmHempz7SJ2M7xXY1i77xbdrzZK6JvJ8Rv2SufWE5bsmv",
  "key12": "2JMkemTPPmy2oXaP6KJQ5P1vzuaFDc9GnFmtWoTX9GWqCueJxJ3SbqFvw3FPyMhzFr1rWeBE1xGcb51kMKk4vqS",
  "key13": "3h2WqsP5YdbeVxpBca47RHrXiYoJHgSuD9XxeeacyJ33zLXkFpWi1wgSNa1Ms1Z1bQCs3fM9HyrkNZvX4BorfQzM",
  "key14": "JmJ3G5F54cAS2Vf7ukjj4QafFRZxm64X73QY9x1gC3e8gUG8YK2yYNe66TUJYvGf7oAEiTqkrbnHj6DAm1aUaat",
  "key15": "2goikHuWQk4CtwGMV79Ej92bEFMXZLu97ZnCAjU5bJX8ZTeiG9eFAtGCxc3NhJnivmNN31r6hbqrbxXuMtH3FiDZ",
  "key16": "5jnQkvYzbcWaFpSakKTb9LsodPjhUu6whwN6NiUdzQ5LXiPANrg4ruz5YHBiPZc1mjFiKgXLW8yi7SXA1jwWaFpV",
  "key17": "4VF3rt43CHR52zan3LigL4Zf2fVgVLLELpdh1t7x2mBL4doXNxkb1PfkNQZ7PCFu1zo16XPKzsxMr8BiCnepXkq4",
  "key18": "4FoZSDsyRSvUvogSNcUcyJb3b9qyz3DJtB6EZG6vueroxrpBRmcmK3UxSFVw2vwmSfgeosgBRrVum2aiX4vPZn7A",
  "key19": "4hK4mitZxByQ4PFF1ApTjA4uqXj7DR64DDq3mCjCHi62mNrT7SnYbfUkbAEfFrqDuuCRN2JPCJfYfoQo3U3LN6hi",
  "key20": "5o9VZTUe6gsRF5Nv3PhWY1fR1fGnqxKCWWgYKfbuhybjS2GUQwHDMgJSLvEQ9FkzRtomSj1j26o2b59gWjW9EYbj",
  "key21": "4GF8GeXudG19DVbELzSw1JE6uSQ6uBp3RsAtH1C2GYpsmXTPjnLhWuX4B7HPY7E1NFn7x51YVUBeMUcq9Pb1RUhK",
  "key22": "ko9zaGYA5tjqx8vPjvx9Dq9jxZubhkVhYkAJThPNunpNGSYY88UKX9jQk8RwwEKWwyYtgdhgFgnJAu6v4uwVxnb",
  "key23": "wwbuQHQs93ZfZXzZ63CoeVqupbBTkL3YrKe1XDwVZQvnAziv5RFGTfoDuJrTpUfoAxng9nZkhKQMnasxfgiWurp",
  "key24": "4ZeXMYjviUr3cwFTsiTf68cUqzhkctGSzfY8JiK1AjY9omhoowdM865MQHgG7uDzN6MSVRESXpebMsn3VWVnHT3s",
  "key25": "G7qnuo5YYhwRHsKd47stfndDtK2mVLuPucMSAqeLhTR9tkd5QH3MhAeEoXK5hCAesiErTRUJaKd8Swq49pEALKS",
  "key26": "5YgUgyE8rdUpxRPoTzbXAK3jsUzwn9P9Zm3kGmoRfCVQhXxaRQut7mnBVsuivmiXBZ47uyLzopk8JuFZS394pNho",
  "key27": "2LTwb5WZHRqbSGq6gwUvhn1FTsiqHwH22MZKV1YhXq9PLHpUD7LRW7KLeAZcoY2rMKZjqHsULE4wAbnnXYR2jGS3",
  "key28": "5rotomeMKYG8aPwDxXztPHgjiXWGJkLLEokFbNddMUdKQuDugHCSH3v3Yb5fH58Na5Es4yXpjwxs1W6abAWhSfuo",
  "key29": "5XkMVtiQkQUsgYcEHqWB5bQLyFARmLtrkVn9TSr81FMNncPq5pwZMTMPCa2auBUu2b3rCcaAz4cXKqYURmi16UER",
  "key30": "5vcKMTNYnbTvK1scACAvB4feiqUFQGnsYP6gAEf1aDhEk6MWKXncx5A8kDmj9aBA2B3SPrBQnSFFe94MpcovCj37",
  "key31": "W7XpD1zw2nGyuUYpDS3xdL7BZGDkkEj9DvE6AC6z31UebRJU4jJtoS8UhreYwGpLe8ZqUFVbTTz24GcvsJPEEcM",
  "key32": "5FEqZWdCFX6DKqenHCHxML9DgojJEYsXskoWwKpwR7L3fhxE356uMrb243KDrpZKCKzFkPw62N8WxJKAUxvrjJ5F",
  "key33": "3s182N7pdf8mALyyDzYWMWGzbAheo685iEK6QoJBDcuYQKEJ49tnAh7fGkgNLemigrm7mPVzRP5MFav7L7A5xQzh",
  "key34": "6Ei4g1N1Vcn7oUSaNA1MhCwnWFQtbn5MqKWkMvELzqBVjuwy5RZ4Yafjzkw1xfHd4SFGdFRPbjT12f2tDLqY6kD",
  "key35": "M26n7wJonivpjZFeuZ1vHfnxnaQ3raebfJ3oBP6vgy5Bkjn8fLTvTokk1SuXPs6igihLCy1cVuhHcYhp3zhM6r6",
  "key36": "3EhDZctHpCsf4KsQSY36QLRzZP7oy7aNPeKDuV3SYY5ANM6hXqqnnVCuyMsRebQQT5Y1QrpqAaz6mBiDptah1Brn",
  "key37": "dDEACgxs9VqTv8hLoDGg1sm35HdCFUzQpRSbMCa7Mtg3FQJtphjLCtrCQuv32Y2SKopHP9QtL77qQr49ZswtJkE",
  "key38": "5dCvhBmywXcfUUEeuuNaYLffnkq3MdZ6t12MA99hej4KKtcsgYno85LqGuYUUdBkcahEQQPJQnAWUhBdirMRwbhH",
  "key39": "3hAiz9gzLPQ2hzFVFiUp8ZCcyZmMfUwrc2CEJDTNqNmGauSyJazQNGHtxMhSp7gT8QkgpTnHAVuqNccnj2n1Ae8k"
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
