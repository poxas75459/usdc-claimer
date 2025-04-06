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
    "5SsejVQ7D27sc4Yh48cc1yfb9rfZJUPArbR4SgEaLwAScDyp6ynaSeN4EhmThgm9Znq1iatztWVXH93wKZRHAss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwxyfDBvJXyrXdUgNe4CMMLY54Pg7edmTZL5zHjmvg9yHbzUunFT7yNe1U3SRERdbnHBdToPVLkKofoZVnfYujz",
  "key1": "4pyJtsAKLA7RHxnQKq6pnCbFuZexZcHuiVeqmqWDZfZQBnD59PkmdCiDg69LjVctC6QkPpbZFATJBM7DGtHtXUSY",
  "key2": "56gPjhV3QUhRxDziPJdVProFt8Vp8y1DypSSwcAQJXH3FQNWLM56yMVa4KCbTg5bjJkuJPPptLhLEMynVS4D2fJ",
  "key3": "2RLyKWWgPns9bvYsTf3TfmnUC7LonMXkvWgaND8QWBZWHj1zgyGFGabCUpCy7UthTdy66g3UfUmnunoWZEzs2B1D",
  "key4": "3bLBt8cUgoQTNiBiSNRaBnSdLMUjAHNJqB9yWi918MNuALRh95TLKoxd4PVFPN1utVwTusaQBg92JeDqm4qDCugb",
  "key5": "44qiBiEd43gXc4YyJ3rmJoeVE4Y4UmqxKB2vGMay81en7dp6Do27JrwyvnX3iZaxWQa4p7hgwCNKza9ThQr52F7S",
  "key6": "36sZKynQg2TYpVFQbpyHDk8t4YY51nUZn76Jx73Y8FQM6oP2zTNrdPCqQkYsn7Jz99zdAfbkRDFHCHg8C33HXXeD",
  "key7": "5krhzDTdHeFFCBkUKd9mATDWEa5B6ceRGHgW3Xdp8TUGJtDo7AyWHyXwpSm9jUZYTcbaarDhzFQwbkD2MVJ4pwmK",
  "key8": "2x89HDBFNpPg6z62iJM3V24QNweaw2App3jirxVU2bJFnZH38vjbnxVhoYydUUnqmpuTAEgfvV5QXgCY43UciZG9",
  "key9": "2HAcswUKALv56pKReNRq3uHiCwt7Hzkvn3RkFib38CC6F4dHUwoEkjHnRwMh4JjyL3sJmfVpykTp3Lo2vYpbaiJE",
  "key10": "1cUEtDtcs3wfU8myLt6hcWYjgychXsMenBpJkLFcscc3Hi9vm7i6CmLmcCbsZNd6gFBMDX4jqXqATQ4YzDvGXwV",
  "key11": "4MwJX7zki5yFPWZ1tUstPUpARphFccQjVWnbREurqhAnCUq3U745m4WVeMrzwLUqTR2aLjY9EnotrZGw3uZok33N",
  "key12": "dcZvWZTwizBF13DkCZ6Vd9L3vU9Zp8tN19EmHtjfsF2RB5Z4Zft3dhAwQ82EBVhyiewZca5U57NGiJJou4tCSHg",
  "key13": "3zgzLLbHuzzWkpgVxSDsoPcr5hQcdYEsiRwpsbEDKsGhvzLJBrSa8KP1gtzMZgB6yRN5fsrsb6BqD1RNNdWxdNBo",
  "key14": "5bUj6u7UtJSoTWQJss6QhHdoifNAemaeCqRBpt8PDMMrZE7AEZLSg3jt5DxBSVto8ioH9qyNss1LjSZ4cxeWwqNg",
  "key15": "pDKrTWikD8WscxvcKZqB3gLGipcrrrgDYiikxHQ7vW18bFYQkL5PHEsgrLVxsaduTeYGafLN5tXgk8yeNBE44fQ",
  "key16": "5bbSd6TXcHw4o2RbyUGT16iRsmicrwcccHJ3s5C5VajzmMHeLsNVdSQt5Z7J43yjZWcGNMzYpsM9dxadsmwdVqmA",
  "key17": "5fb4Kqv5fte2Hw3SPkAdupenKpE9XrL8m6YdWE2YLEWpH2BXRFsqhQYDUbNJst8mHNXwwRPdU9n7AVi2n8iibRDv",
  "key18": "613qNtEGmu7S8cMeoLm1UjmsrhQHCJriWHsRseT4wYjjE2LXqqgMoh1RV7WDWCcvxXY6yuM19qUndhVGEfkavYU1",
  "key19": "41LGrzozFkBJxpyv3c4TdSV9BU3hMZ3HVJoocgEQShQsWE3EFQkqGGDkhzjhx8z1evREtEXwfHXfhf49aCRRCR38",
  "key20": "5kRk6Dti3WEcEJq9NvACP4KBpW2fAKCARMeD6KKrzeUhosvrNMKgSTmcsVtuAqEvE23LB4XwqvMwfsDEZV4Asxe6",
  "key21": "4aNpfg9QbCTBKQgd4iVXFPmfUTj5rEzrnG39VZAR3GCX7o5bZqsfRq5NoPaWySLcjpkMhMEm9aZ9Mqx2NLYicGoT",
  "key22": "53Hw9hiwgSvXdskuqfo4Rxgfq6vZaDD8UEciTFSL7PQ1nZ993APhjZRNr6EC9JmXbtsUygcdC24nbNGdUZsrddPo",
  "key23": "3vzuadVMTdu2bNoNznEDTG2XW2TFjueWJ7J1nC9UEta64Z4f9MJnQHJGXo7WHjByCNeUvrV2HXs1NdxGF1xFNVNd",
  "key24": "3dj6W9XP3eS6TXbotHFkVCJRspXsHV8oaQtbxWdvbkciSB1G3zNpq2AsowFbefDT16eecdyMcg77iqc7ahccJczb",
  "key25": "4D9RFnWmcTfp1MqH2hA2jJw49UbWdQ2rJvUkLaBN24AY8VnxSrosSgWB6mVbhMZy9NPUN6nH9y2pwxgfWVPieZ9s",
  "key26": "2h8CBwNdLv6jfjPRpqyCZp4cejPn6jV3F3YpomXHpz3iqVnEdrEsKRxLUqcD6Pg3FCkauMSYDse7njXvP4nHCdKx",
  "key27": "4nhQbSswXXzjiBzZkAsY2jA8eFjWpEe6w81QFgLR1cTPKXQVHt2SbZDDo92mW8FeWw8ziWs1RoLLg9Vwt8669Amw",
  "key28": "ym2x5PrhaKND8nXx3ZV4d87wczWPfeojqYvEQXi1x4J1xHMEvNhXz2BYvoK7WJiNhDJqDzuGYnqrzcSdQRYEbtM",
  "key29": "qkzV1yR8ofTUyt2t9DS4ZoqHvs9ofDVdb9y1yQgASU78mmYyMkMK31E8R9KryyTEp8w9x2YMXxVQfVAJoCGCWeH",
  "key30": "5P1nJgi49eS1Ugs3JPJ4mXeRrSgDjCrRTyxAdtyoTFUL5BHQUB14S9kd7DVV7UubDjanW99eyFiDWzr8qXwdM8VK",
  "key31": "7gcxt2ZtaBbyGcxFCpF2RNb5YiPxhAjze9nxMhP6G2KXFEaPvu3kTsoox8C29fog9xGnq8aJgwLbFtfwY3Wc8z1",
  "key32": "3GY96v4unKiQYHA4varH15qG2s72CAw6LDzKCUPXVvMdV3vkDG7QuP5oUmKxC5LC9F77iQvmdkkpa9PSe7uxijPg",
  "key33": "62Qmwu1h4MAXuM7C9K1DHMXPdowrdkTgDEZwaFanxthLCuYq3nJkxsAEwD4bdBL3sNKoyhwp1oiQkdJJvomCx7VB",
  "key34": "4KyWoUjgGqFYvUjgLJrZHz2MQv6rdoSzFB5AqtaTdoSv5tkfTtcbybcy91J941wMFPben77xzDpESfiSUVNc7njE",
  "key35": "3Htz1HdJNioD5uXMrjp4HdgJw6FPcMtFYjdg7eRQCeaf58ZPqZGesMSNVB1jMRb9dDK3z2Uvc6fiMPbQ2bZJqSED",
  "key36": "7z3Mk5kj25FjwfvJaC559bUPqizptrdRy9TRJH1GpV6yEr6xG67FFW1EsPsTnqcwziURMDzdpSqjYWzwYNM2WFz",
  "key37": "3EWSZZACJGkLet4B2uBnwwgxRcFkVKjgVJ3izAiaL1kLpsMWp7q819D2CmnWpQRqYQbjZ7py9fUCJ5jLrChEKrCk",
  "key38": "5cR4w5wgj963L9TE54WaUjLSTmdfpdyQ3uy6hv2Cc16z7CVrAr24BBjLZqZYKQQSk8gioGjBmZRx4CASySa576V1",
  "key39": "5BbHi5JEPBtVfmCztiQjHQYP2UstrimU8ajMrRinPbo5JFrBQt4ep8nc75rpYy7gmJFLzEPC8WgHxMtEL3X2Pfzg",
  "key40": "3WEL6VmRy59N5Me8w8K546ZHTD1Y2s9bgFeMtuoh1nsbH1BQHNsE6Eof1h5chHWVQd4CJab6rvxW5zsY4ABuzQfn",
  "key41": "5fiERVr6sjUzLDVmpPhjySFQkQnd47ija9KJtiT7tR2oLTCmHERNWVEfhLVRrbmbK1P8bZdPqs4CmZKk4fM77M8R",
  "key42": "2TVykmM1A4W2PKnqqjDUccxNf2rC4f7nomqnZwrn1AgnSmkNQyBiBZu9Q8jjMxF6kiv2gULMz2jDgtQpKXTimpht"
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
