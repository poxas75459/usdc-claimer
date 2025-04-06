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
    "oQug8ZvFJ3evUCtMANwmMiS3E6gs7K14yGPKwCx4B4d3JWhBL57ugNbLjKaA9NyCD4szjk1iYneDhtiVassPNTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXuMxnPS3HKDsjvgytq6c3X4b1gWwMZrhf4gKpY2JWhQZecLbBCQABAfkjYPKScbxVcumxzMGExxwvX5WMy9K6z",
  "key1": "2ULw2yzfAJ7FsMUcDsC7dTv1YeDfFLyAFth4bb6daYe66MKXJKbfYk5Uggk1MGgrRLfbRK2HW1tiTBLPnV8rEYuC",
  "key2": "37sC9WADawRkXFxsrAK2tiTiVQawAUygFVCwvfL5H35Md3hoNSoG91XmBXHhRdhAGkmBtifr3UgF2xw4c2STn1YW",
  "key3": "2PhrzH4sG16GwanQDG7x7vBQGMozuKoqApDgwnvKYmA5x1K2wUu58azeimSj8AYnbYoXpiSPaux9CXok5MtMU3sk",
  "key4": "4ZAUfdmDSyg2S13R44sNhgSRZwxgdaZJDL8EiRvBSHEE5McEGv4oGzHMn9drwnykf32JAthSv8mZ78Gyx4HLUeSw",
  "key5": "64w1r9xHg4xoFDhV63pMS6c5chGRSbVoHTSvsW23BavpJ6qhQokHdQQymuNw1kLzRS66X3hRH7QKwUBMstkWweMa",
  "key6": "3mbwe47yTbZ8L6eDrRYzkiN9ho51cW4RAfL8acyrhrmRFQiJvEMFrSp4WM1PTv7cUL4YRBU9ZdWFR4J6oPiwNzH",
  "key7": "eqWQSEVZEJDUEgh7NQxiKPh15o2paXXY59jsVASdGGFBQHdstUJKfXWqMs5Kf2eiDpejyoH2vmNZfdqSssjK41V",
  "key8": "5C8xxkJuJuuf1xf1oYUDxcT1ctxDoHdRQXzDeXhv3DNnSVoJnto8oBZYF1AkmaEF63qgWnBA9sq3QC1uiojoDUsQ",
  "key9": "3riaPxcqkJLt185vND4ximN6AApKV5hxfVP6aeRAj4xbuH5iNp3U1adoDKx69JFzDNgtNZ3qR1qgvqgyEyXC68SY",
  "key10": "2HLp9TB9YZL6fruZMCgdKCrespNZydfExveF6RGtS9CmvQYPuG3UgQFSuoY4AE8XijkKEfs3i64x3jgZhMwuFy6p",
  "key11": "5yqUeADAz1gXhvrteBEwrGwt9D1RLD2J23PsbK3KbU5PJsKkgLdUBtZ1t8hCipGu9i8R1Yxcq5BdoAvszRM7J49b",
  "key12": "5U6u4igdav4LWnYDtCQuKJGxxgL2aVedfNny4pDWET2EJUCbyPdEDY9tkroXGLbQh9wJ9k7XLQtgsxevdWKbUizd",
  "key13": "2DcmR58hh1NF28Rnx9Y2Nmt9a6qVuhcJ3k1Ro8F2thpmpBjwqQC2Ec6PRHpRrLP2Z8ySg4cBY19T6qAfQuNEviRX",
  "key14": "3fZXsKZuJp1e6ufk4eTt5GAfXdR8P5Y2iU7MFXQpbaBjiXP1ntEaCrdDqBCfe7vi9NYkKDkwgberE8JRGPUUvgkk",
  "key15": "5fuTzxJ1Z9JshLZQk9oUr6ZXfJUtCFaEeQdA9XwZZ4YNpMuE2h8kBj3QbVjMhHR7xSyjwM4kNQ4XdeGYG5NMq1nb",
  "key16": "4b3uUBJS7xQsfe5exhYBnKQLrsj9av1GmKzbn2yFeaasK6yNrBEo3Gq9ESCm2BC7NkXgAhuhJsNa8yMBXdqdofvF",
  "key17": "5WLTv2Qx4tgRKY6WvFV65YuRfsSj8NvC8DEjg5KzWneY6MHmiAQc8A6LmfvcEdokRsddw3qMM4R9uNVhFpM4sQGc",
  "key18": "4japR3CJ9gY8tn8FgXCXfNjQwRvernN1WdkotBSk4k1Rh5LrYkWb9s1fYjJhwdNJv3BshubBJGrK6XHQRStNyvpB",
  "key19": "jAJ4TDHEgMUttXE6GJbQ6gXYh9yJeioQeRRRExjbHS1XRFzP1V1JPw79ixddSZy7R85FU7PEX2ZgzTnXMEpuWXv",
  "key20": "mRKdA3YTUcurgh43vvYvEjKW3qRvEsybP8fxnrg1Q1LzFrxk9VKN6ERu6ry1dY59mKNDCzjTXrbLu8cyN5esY95",
  "key21": "3pM3Sq186V34CXhSd14exLNZSEEn7Gd8DUUwJBhACH8mdWksuonnqPuUAnGfm4euUPenA36FCXkiwjTrKHpm434z",
  "key22": "nSFZm42coLeU597o1GhtZTgmr8fn8BouewXcHkwCUxkHvrCrjwBVKskgBc11fzsSiCPbHjFdn5bW7BZTrYf3tuM",
  "key23": "4jKXxEpKoxGpqFkxa69MoKLpqoJqBGsCau9X97MNSuGsYYoUV9Jn8cPqAASAXkSPrGVNGsxz9tXhnCRhwrSYPXWc",
  "key24": "ur7qRxo5UiZuzXtjKb73P6bcDDtz1Q7CXyahsdQUgxR3uR5za67eqe9yR5XRqxkxrtmPMRZDAsLGiDQ9FK2ZL7z",
  "key25": "4FsSsd36JMyEMPTN6LMkzregicmZ6B4PGSdDMfdCchiZtYMcPvkxBEQpRbUAPKKSNQr7b3QCvdoQbAbsMDDy5zbu",
  "key26": "2UkJBytEgLXknbsZSiFUmYBCASVsASTX5brzbxMJFgjuJfc3LX8gwA4rJC3jT129DatqwpJEPGpTKBDzHxjAPAVu",
  "key27": "pyJ5fv58EsE81LNmWU9fgweY7gCojFezBGvhHWiM6iES8YTMzgTMyXeATjM8KLqeZHuhvqThRf7FWGbvRnqU5Yf",
  "key28": "5jSJx5LBX2LmhskTtUKb3iSKWMEZ8UPYZNgjaRfn2ViNaEwxpW5KfwzqYf1jGKgHgAYxZTxc6s8qu6r7vWfbKnBv",
  "key29": "4Kz5gokn7H42DEbWufPjkZzpmq6TVKPgxphZ3hWGKxaUtiUwuQFdr34zcuwcZtiLrH3hd1utV4KtyUeyjGzBWFwg",
  "key30": "VgatiwdcuDbZA2rToQBFb5joXiCMHLJh8WY9YBP21jXafYNBSwJaGQm3fXhX4t7AV5cwA4f2Z3hiLy8AXDn1XJH",
  "key31": "47rsUQA2HybeLC79iKDAeTepN9F1NwwC8Q7pAqfPL99YsskoctCxoP5DyxsUQZTvngYHsioeiu28KhTGLXYheRb1",
  "key32": "4we6suaw5NX2ziYDdtMMGNHqDfNb3gKgEq2NtwH9NniTE7mg2qPk6mUhhYekcKPEEf6ak4PLNcnr7naLDqHApHAC",
  "key33": "aDKx5b1QoKdjurug4WXKhKMDirGMcpBRV69emwzTBmkand7sNk4KXGR1VrWkZ3SmvsEufMSVwW7mq7yU9uAWJwN",
  "key34": "5YYgfuE47EhVTdJSYbaMhGxSBwf3ujNrQPwZTGhytVSypohBfmtpViW6UtV4EmfPUeNBCgXSnMpniA6YnsJ25LPu",
  "key35": "3hKcijnw2eLD6ZysbQ4GPQoBK5oaJ4yxD25fmDBnUnF7Di7b2nBr4LTnQrgMXuvftmva9xCkjCmoJhG7m4DZ7CNh",
  "key36": "3Kr2SjyCGdcEA3PPfQjsL9yot31e1SRA4yihP784UzvAWhMR4mFRvCYXD5ssxUyqHjfe8vkJcptovBWYaKEURwbm",
  "key37": "2yUh3LJh2Rj6RNNxPnA3UPfN3qN5JzGMYv1W5sgUq576eHMEbHMJEevk7yndeet7v8A8tWHfWF33btT9s1es8zSs",
  "key38": "YVzdrQ432VEzAmEHXyasHYdQLxCv5dBnD4oCmUS5EDv7XpDKyk12EkRdkhMumGwNd8x78rqSbpoK4kCDq9PjLXd"
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
