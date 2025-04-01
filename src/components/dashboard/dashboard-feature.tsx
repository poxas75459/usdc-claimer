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
    "WdvQFhAspLyo7rRtR6mDSrNjcLTkaLm8RCsCcfU6xA1Cg5CdeK3biMdJk7yXCFfrUNDSyPh66iQoduAcHPjQdyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGStktnSH3pPZnExpTpp2uySfgJGH6uaAdEEQzxvmzpBMQn5VjB2oyHv46D338Nzy7EMnSdQEGnDiK5wEYerEuW",
  "key1": "MkgmNAng3fhchr2Yp8G7hmW3M3kiZPeX8MbzMX9axN15Bk4T8wwLzRjhaooSjU2h5oQcXpkJT2rqbfmexdi2ZtK",
  "key2": "3ZXjzHbuHaHQgfK1D9BDLNi4hBceSQ8rutSXM876fkoETt2Kwcy8SfqKPfQGEkDuf6xP4SgK1y2h5jcJRBYGAs43",
  "key3": "5UCAKbNCsnkrdt4tR2HJbrp5eEAkaLVLfoYpFE4bmzbZaxZLXSzA8QpNKHsoKsaqByPG8yVJJGYj9bEBoQBf6Y8d",
  "key4": "28NrmEFbXgHEp8b85aXFN25Y2YZs5AajCVaQ9X89DRVwfarxa83Jc6cuSeLSzQT1DTjTtwxLXTGRoVqZ5HXMirq4",
  "key5": "442YyLqyExENssDUazPyEzX4cQF1MFdgYWdrrXaWXdLPM9qHPgGi8TsSuxVeKxuzgRyB1My7QxkoKoaEMRchAXp4",
  "key6": "2186gTmUETqFXUCxLb8voc7AmgWQkirQLufnAMJJV4GHH9e92U8FznoAtCdPqQNX7znTf1DjQhYF9bxM29deRYKn",
  "key7": "2P77dXAKg4YJYkWJSLgjEc8MeiQUJv34SbcSkLHdgSDorSYMUaQH7BKyhzPexpMwL4jWZVuacME8bkW1WGLv6Ksq",
  "key8": "5PEWusTrYc2x3UFPBuBsZUkStDTCHEpAsvzuAG9xBti443HuhxVQhFKpnbraKaDt7gNKnwS56ehZcFA1EtP3C7B5",
  "key9": "4PQaxBJBAgce5gffpt45QxRWpBi19vNMckpeorwkYENAVjXcUAEf7XkWErfAEz9N9rubjRPV9XgvmSskLss6gmQn",
  "key10": "4mqNPCqQb56E1UXe9fND3CkA9PGPmHZUNkVPCutvKTuSu7ebtmKjJcgwrctN8z5f7iaszaP3n4mA64hYGWss7niY",
  "key11": "33Tm8eqW6gZjESpiPgL9f2GwRJRFazN6esY8UVxXY4eG31HSGA5eLPRHNCHQoMami2ZLZtrcb6KVCpjgjdjxtGLX",
  "key12": "2WY6urrkkF4G5cxpnj2w4ByvQf8rSY2epH7fxJwFKN7R8KZoEKcCq4oCYjkFxGKquoDHqZVdNXMtZD9FtB7vyJSZ",
  "key13": "2qF5MgqEgzgsZFnvSzfsQ7G6XmRJojn6DWWNUxkKQy83Kc5mtEcBr8aFAc9jdNg13315eoD6hzWS9mJJtptqAkve",
  "key14": "298jzf3wdmn33jNh2znfuX4jTdgoCcSija6WBSnCaLvuzDbiGcXCpzHwirLEs1iaK9fgBiXUKuMwzptQkuGNF9PM",
  "key15": "5rtxDUCWpUojBNzrgXsxsRzEfYcqob9SY5oZMSKmcitYXmgqvLWqAbUj1LnLZty7qamegsX1sRPotpwozTsgn6wQ",
  "key16": "6WsdnLD58MxRTRNDBb1drGLNYTiim2ZhbFLzQbDUzmxGgfxZhoyoa1zymNPUd2AjKny95254L1Pu35mDLrCQaW7",
  "key17": "8xaxuL9g2LufrDuvz72FDziPsTGT7peUvSqXcarH6sJg4mzTPFtyShuiD6erz72Fvb1HmXLrm1B2dgbu78KVC7B",
  "key18": "5TyHQ1iZacHYoa7DyR9fMKQsAUBAqjXbz4h3HvhGA5AMG98hgnm4F7aCu93EM6sPxvksjqmwJEu7h1mBKWceXuVv",
  "key19": "MwpE3zJDfL8QuQGQXak72tfnk5wCWoHLg1UwWUh4iCx6fL8jeGBXburyR3zYHuhyWy5UQxY6dBKeHmqcCvcbApg",
  "key20": "4eQ7XiHTpbzRHGJBTJ45gMm1AYoYiAWoK9wsh2owG4fBdetAXLFNJZ2YBvGyZLtu64CXTmBgay8SLuSBWEQStAMd",
  "key21": "3jcf6qMGcY8xMPBXFduxXvGDGyMrtoWBdRhXU3GGQbrj3f2XTWd4kFM9asW8JWyAGSQVzANVcqui4w9KnCmxhWqg",
  "key22": "V6opE1eDE7mWkpjwyvKaGfrzMPqLfaEAqEJQH1pRkz6QmAx1c3P2MV4cS2HaSLAhBksA2cZSSAeCzDqWHigsmoP",
  "key23": "4f5rQrGg27kAeWe4GjWEe42pioHNjAcqRwsrgjouJbEgjeftSZNjFwvyqZqyG4rsU7JDxjb4Pb59eV5vQ9evZm1f",
  "key24": "5xBCusU5NndD3wAokqRXwnYoZBnHhEdHv5BsevFztWtyMmyKkCYs3UmiiuK8PFWKt5FXqBo5xAGSEDbVZk1nN9dV",
  "key25": "3wYLJ3ZquvHR6GjAPC7V7PTxEn5FdG8NggKrruhGGjRkBMmLruusG4oyrgWFSNh5byCHY2gAVhXfmFrXUgypor8L",
  "key26": "21h5eFRPVzEPYBPrJ4jzFumajiGckGeZfwspAK24UtzLvcNj8Q6EXRTFEExg2AWu4CCyXNtFnc2NE3DCWqKCF73E",
  "key27": "5hdpRvfdpKTu3GoVgMWCmDP2om3rSqVMQBYZvTyMDiYNLQPnf7nWhyFFuujNp6LLFu4gie18grxsoB1zLn7Gu9Ym",
  "key28": "5B9PVMVSqFSnBTwNwWyth7HacRnsUQnQn9EBrKUEzKL9bTPica3MM8CrH4fBfbocUFuM2dftk2JVRJPhXzHQM4G3",
  "key29": "tYHNYyECXDYG5D4hMjBgNYmSZGvEqjZB9FFcEwRwpJ3ZrEgKjmL64mTgrj8TwsZUuJonGykiEdXK2qsoaQqghcM",
  "key30": "46WabbQkGLFGUriWJ3px5H9S2TxhbfrKk9xsXbS65d8H2vqpC72fSSviBAfiJV94bBKqmq4dBzFq19Y3Dpp7v14Y",
  "key31": "3SDychc9hEmgC25rTMffK79f8rRUeCNk3FgbFPovGR6dTV4wqkSL8ZFLS6z2GLMYg6pvcSt5CE2WGpFupgUJDy2a",
  "key32": "3u83vxBtwxxfcT8ULhrwAGdapTnm8o4RLwGQfQELqJZVSayUG276hnHJPpmEzQd3pemRXAjGE3LTJ78WtZe3rr59",
  "key33": "VW5KobPcJE2yftcpT5P28AmRTGcqM5DLttupd8wvaYHb6XCPKp1DNxvMmCi8uCqfkutiB36wejcaN1ZWkhwWRr7",
  "key34": "5QVE78hygsAkEwrYK5NzdH7fxjaoXuRPSZHNit5L82LaaYbmFdvwNCHijzwQuLh2k4pdRY2bG8x5t5XCqASjYUVo",
  "key35": "3vxwejBbxpRvqCdKNgnNMfjkHYAcdy5kB6pR2JfD7bm7mS8aogs8zTe38MjZZubTQay5FkyGHMHC1wKUM3qzakyE",
  "key36": "5dvwGFMwqcg2zvcVfZnhbEtPvpsQteSMvBmSmhb8EPRyMWibJjP73GUvSXx6C9YucCEhMHWJaEH11euvKh3VECEi"
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
