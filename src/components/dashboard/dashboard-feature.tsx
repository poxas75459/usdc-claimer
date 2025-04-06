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
    "gKDpZwN1NbkZ7pMGWiyA8bUgF1eKv6yxQScmGsDMd1JTzWbW7CwecaPUvAMGvihFfrshC1QQ4v7S82b5Mp9aj81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qqnwCwwDFDoUntTgniF4NudyULrjb9SvUBUaAQtfLB8JVMXcyGxKLVmWqdBwCCYzJ4qwQ4E844ui2VVMCA453tB",
  "key1": "36qY6m8DCdSH8oWFsu3xjSMvAds2vvwxdjGQ9iFsmo1YcAMXirD6oyXDNss2cXR3V569rWG8ehpKbV8LGm6q6Cff",
  "key2": "2zfFtTWUviaqPmXxsugSg7LSoBbenN5uThU9uZ1yABZuV6tnRQTBs8CP3fRZ338pxcQMdhc9b1m874TCxrA4wVHr",
  "key3": "3T7UcKEkVkmRTMAzPJxejEm7Zm1Mzor3wxuJJxRYM4sbyZdrKW8JFgX1byo7KY3vZQC24kNMDsNrUBYHAv6mXSgr",
  "key4": "5PRqma3UYjFywegU7Qt1Fvqyw51KW1ettk7sxgyGMhT8zZNEEtbQZeRMsogQEP7WwbFyCuRsb1AVrMXXdPJ4wWR7",
  "key5": "YjAKkNyZ8vUR6oAtBnLhgYuJnqYEUixX9xbSoFojXc8qKwQsJWbt1WNPuZuiDH3V1nTTRQB2bgbsFEdVu2PX7rZ",
  "key6": "36WSo7jABdXUrjpmVXtpZLZSNtAr3sWtKQvH8pHRp8EYdniAF57r8b6ewKjLMAMs9teaxsBzttEyjskqGozoQhte",
  "key7": "RCj6zVb9e84wg8RysbA6PcnvZTKkaMBvBx6ARnnPWj53TWWbcMFZRHitzehgsKPL49C59iAG18gMC1weJ5MSzXK",
  "key8": "4whY2V3VtfDyGopNG4ChW7WvFdrv8mS3dn71mUZ2ddCEKcxZGS5BzkDfMSfy3xxvzt3YybXQBjqhP6BFsWedcHxs",
  "key9": "2ZQZa1QY1xQYqGFp1NyVEkv29ff6ZnNEtJHCWtbyNRV29mfAbDp3wK7JzVAtMCSsRkq7muyT7c8vqtbCaUb8pyKg",
  "key10": "5q6vSDhEjAssTezi1Et2e7yQXtFxsc59qXHck5iG3EQcXjt6gREA7GNju1wkbmdTHDCJmiGPLgd2xM9E9RKbNf6h",
  "key11": "2DAX8X1JTSfmUWofvHRYvRq33kMwJVV137uZThbafsAu6ZhY4tMQPMiKqgzjXf3Siuh2NmREuL2HBvobxcdfBJGz",
  "key12": "FJnwgiDJEXwwBGF5Tig8AHkHvHDiJDzxA3EQnVBEw7Ahpp2kWjtbuimgoLeaoFWiQr2Ck3HJxNq89Gm3S2f7c94",
  "key13": "5EA3zpyVggGCvQ4o1ACuQX5aQzbZvPjA2Zn8Z1fyCUDiFfqG51zrG4f454FfagTmgHh3JR4hWPjRjXCgt5ZnJpLU",
  "key14": "5bcn9NqFmj9FEWmgnk6LRnjU6StxakizXP9ECGX7cEkUApmLkxponfMvbdMRAXXXtw1zoPkTSCCmmJVKgPDiu4Mx",
  "key15": "2uosXqRztbHkZUUHYdB8oemTa2FiFaU73ru6P467SScV2AT44CLU2B2KNYJLL7yh6r3ekGrxz5bRQ6kvgGC4JiDq",
  "key16": "4zrPtvKpr8x8Q1kT1bYmEAzQttUyMeNVm8mU5fASyaDx69EE6h14YhHc5yqfF8qxAzpUq3qeRAqPgXVRozGnW79a",
  "key17": "3SVTthK5jcNgJKsKR2VBfNjYtHuFffkbPk4WS1jJhTcoASn4S3fYQgKZiKYjSq4nnfBogCqbAW9rirvfL4wTA2GV",
  "key18": "5mdqBSs2yrx23xc8zYoszcRzf7iamVHire2FcvWyovF44QU7G3guPACgQiwiDzGaKLpo7AkkW6reZSWMZANn14u8",
  "key19": "36vomjFxBWFLaWtU99vHcYBv3PBQVoaupF4W2HyKHgPMDSUnyMQKpK22FToBwCd5vkzzmwgXfWwcwC6Hk2q9isAR",
  "key20": "4MjCdazreU365UhFVRqVAqMrSkn2WpbfXT3gjeDa5vpDKQAfHZX1r3ZyKx1vtiG2wyeD1qJsJwLo8LCLFPZKAkyo",
  "key21": "8CyKS4ACXdydEHKxcZHwLeBFfuH2m3jKg14bX9q1QDnzhP3ZKEnjsAW5u5tGd7FDKHjq3BiQXQSuvTUKLiyJhc2",
  "key22": "27qSe2MBwSezy7PuiD1S5BtdQVX8feBTaDyGtUYNFW1mADztfeZtmFQGutYtTWufg21R3gsFCCkgbp1AS2xi7cnF",
  "key23": "5Q3u9UFHpPujzQ4zYzQzJMr1NTSwjvR5gfwKfre1Jaxdn4oANKCcyD17FbNypEH7u9DVBY9gU2D3NqCFDJF2yAMJ",
  "key24": "7LAbhsJ6VGYLsdDE6RMC6NsYubAVQXqBtqMepG5ihRsAg5avobjdSFrJNQXy3DFbbfMprPR2QHtSL9zgY9Mx8ne",
  "key25": "4yVYLgePG2zfM8fpJACAuMVjDXaYhYpy75uKpLrJh5j8Sbmbm7QUXT2fzA4S7hzbaLLgLMaGoymhJpStRpBEhHk7",
  "key26": "2Z9dnQXQ4Gs71zgxyfjDggABRrrzZGEkdbHxZ4hQFh9FGms6dqbVgeTVfCTbaLvb873Ahw3zoptizyw3tJhTC5R4",
  "key27": "5j2tb8THMDBJjkQgRYSwVSmJFE8M8ZBVo9U5N5vwKeQax9iowdLqLNo6a4qEFuhgT5cMsASSdRTsZCeYdkaPHaH3",
  "key28": "5yyCxAe35p46bUeLnuZ1WVmVLkyufuDWTb63ukb8Wv2VA1bSgTmkTuLK1PheNcHmpfvxBnQqs7ifoGouhrxTmGnP",
  "key29": "3xqD2foqSwGisiAkge9JAMCHKRHAmdDpsbqHgxWfhUf9T2HmqrRUZpNNrkZ6sTsCNBY6Kh3GCMcbFzLA4NPhwyiU",
  "key30": "2kFNdnW5Z7JUMHw353HjR5MZVA6VgV8GE6j7NddvmuJtTYyQvDPogtcfdXhr256SWrMPiMBhLMk6aM88Lz6DBRah",
  "key31": "3pJjFLmcmRQzW5XZNfhT756ZyhjNNYjyPSLheN6N1MpSdyo6EpYSEsZDPXiff1jU8dS1Az7tpFJT9ANA2VCu2Yz7",
  "key32": "3zYXM8bm5KLxBCkvuXDrTErGhKuBeaGmeb383nAoxwsr5GgBxdpEuyuopa1x4oU7cTHy2NDkUR7W5H628sXvwFy8",
  "key33": "DRFyMNNASV9fteuJUDtnWsLMXnYaNqmyq9JceraLoKmh4yiJBehjChhCEbZjpiML1oZmizqb9ymt96MaZCBAzQd",
  "key34": "eKmdGJzD3JEbGRUWGqK2iK76VsHzaAZqm8jrtZNqBqXcntAecuE7G5g94mNZAXZg2TSFxAVp39NUyHMhDR1XmNq",
  "key35": "33yRTgLLE5XR9fdY8FUdaeKkBSFGW6ozUP558s5SUepFUqbRsgMFaTvv3kCfRYcBFnHNPj7HehHPDJr1iKVkVewe",
  "key36": "5ChAEBTJYU9EWsP1o4K8TugrCRDyG2moiFp29Wa6DAXh2mGi4VsFsPUcyudx6149UU5vXM8irWFpe3zxtdQqzVu4",
  "key37": "HpyGD4VYAJwSm4hBfXqrbvR76phUFYVFu8kRKrR9W9WPSgqnrj7vGP4ugQpzKLM9ctcKT78MreVPfoXUG9U9gDn",
  "key38": "27L3gPR1ymUKLXDcutFRaNBXaZrQjaxUDJ3xE4p3TdJTafdGD6qTB5pCj7DwEBhgxuhdSP9LvJVGVwXaKMzkbaPe",
  "key39": "54bwRTWt34bE7sf36LU3xRDKwGaqtpeLeBKrr5bWADTeQS1TnpcxycHhfn3PyH2p8G9aG4bQHikhJv5hjZHCsp84",
  "key40": "2M2EgmFC1wVzhGmAcfjwHqyL716SDzXTiBZDL6wtiZ9MGSp3E9cEcVs7cCTfCSZQhvqtiSR7agViBcJ8SauisEqL",
  "key41": "2woXyyps4qndkXuEDjPyWuL8Xmoso14jt3pq8pBcZjM396e9MkRN2JUxQdnfe9fBwKx85rUESeSEXz2Q6DzRJ6ZX",
  "key42": "VA57Rnj52o5zWchs9odVn6nwjwZWq8QL9H6zps3iCXCfHrbVwGms7YTBwUgXtwJsWDNAEbGoSc5faZuuvqSUuRe",
  "key43": "NXGLtrSdR12FGZoNw6jxXwjcV73NnP1Kf4mvvz1VZrdL6yKEznFNbyWbVgcGvs79T7aEp9TVRjbvqSpxjpV4zgM",
  "key44": "5YKKaA5JB5owXmZB4ACrc3wjis8b6kLS7zCHHPPi5vCGJ3SeNHCNCjodmFieEQmtgXyYnu8QCwcQW3d1naFcm1N4"
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
