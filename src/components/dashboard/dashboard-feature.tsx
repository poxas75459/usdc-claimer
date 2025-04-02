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
    "5ptUMD6K3szGEMc2RUrvRriGTSvFfZMqRFmxkqHhycNzqy9kbwPA1nmVVY7avbgkK7cAXWMwdaHMojHu6n2yzRpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWfENtw2ib7LkTnB13XMrJ8icLZU19vNJfX9XzYJW4E7Fa5cwWFRuMfNPsuEpFPbyp6KkFLm9jomvvPnnSAinDa",
  "key1": "5fKnj2yY51EMsDXqmYRAemWDLcuw2d3NQQySxks2QrCHPyiGEhnrDxrutzs4MCMA57Bei31ciTuCM4wtwLmHKGem",
  "key2": "262xtnwg2oztgxG5UTwzg6tXhh3xX9uxwi2cAzq2YJj46rbUmFzr4342FA7NWdhgxfGHS9UiFu2STaC2Zv8xT4o3",
  "key3": "24bAM8s14MBCVX8G6wSYYdrTb8DSinYQmRKLp9jAPC3VhzYcD9uicFooUmQuft6q6D5dbcEYDH6WyTkY6jaA3hrY",
  "key4": "3WzF2JyjddD5heXUtdexTBFcxiR2xzCVV7bdyP9UThiTBCeynkXNFz2NCAKLqdxMRaeDsk7j41KxA5KL7jRJT7L6",
  "key5": "4ri2uVeVxDMDF4wjTbfHFDYAsEWwRjdc7WvZdQot2UjwjdSNGXGbKhkdCsRBvrroGQpL5jW9VcAY1a6oWYaFZM7Z",
  "key6": "3L65naVW7ThVkYA2Pvvn8j9v9ErJ73C86o2Jp6hBTYygd43SmSiYfvp9HCBtRpJPMhnKGHG2AdiGL5DeTmfWjmoo",
  "key7": "3gpHYnQE5TmrbAVmfCRfr6xP3U8x9e2ksjW5DC7nbWdxMcZw2XMufKRuHuFmaeDyWQaZHKLZ2cDFWLpyoZKJJX2A",
  "key8": "5GBsxpYnuwyrZgrX9aFbCJDmVc2NBsFsKRFtzwCpTTHH6N56i7kMzQSrNf9w6vGSR8AWRpH6Sz8ZTiAL1ukjV6h9",
  "key9": "5pAGQBTR8RM45G35dkTq29KbEADR3UPCNNCxvYADW3EqJ3AmKV73MSC6TVw9wtTBXCJLGwYr3gcKyvXzVAncHZMj",
  "key10": "22RnnPiDwrys9hoSU7nCuzMRfKami1JT9pmJmdE2FKEM23WA3WCHENWCGiDe6QWwoAHJTLriz1CMLLtugRjyhWni",
  "key11": "4MiY7HY9m1yxzfphUaV7WMVeLtK95TGxf5vJymuLeozvg8DT73daT6xeaRV8yMwRszacWbAZfBPUxah6q3SKz9aQ",
  "key12": "5CRLapfoyB4HQz7nsQRNwEqtFg9T6s1M2hyibkrC9AhNQJfHwHVKDLBCxNbPkMkK2M9wVAbhrdXxHaJhUG7zwt3d",
  "key13": "9q3Nz77GacXSnMDiwFCdQ3tzkxYyzJoxugBHJGSsp5jKHwf9oai3ZPdd6TawRyALP9cXc3dHuyASR55v38bw8S5",
  "key14": "3VBTPBunmaMoZBiqDBr9w7j3UGVMP9VSx83TbNvybFuhfLFytL7gs3ch17KeKBcNY33jhDgoowwt3VZLZRoH1Yr5",
  "key15": "3MfMU7gryFToLmLsUnKb93V8yHAW1yo3WH2LAtnKHWVR95jGuGLXL18gnd3uX8SHtXpyUUazSWgyptCV5JESmzLj",
  "key16": "27ukgHrtaiUG4btD7hmDb9S1UZb32dvQ3b8LvuZ57RLdF41NrBsfiGj9AaxpToaM5MaHun7gg1KK2msrwkNxdqMB",
  "key17": "TQz4FFWmTTUcuh2uisYwPzmbgy3owLtvS1jD7y8LAaL9qxhuAj6861VFFvBekXQjEDBXx9p7VYVd7bKStLJrGcp",
  "key18": "265p3y8YDAvJbZ5f9YbYQPk4k6JC4p3WAT1pQsZM6pCAw9hLQtrrP1g3voGoHcuyDhsxz8oLbWecmYVBi8WRdYX5",
  "key19": "2fxBw72fVqgEN89EWTEj8q29nSGadTR2XaWx4Hv6uBsX62jDUfiy6GC1AcGHW6ePLMMVLfLZc2RCGR2ZzTynjwSh",
  "key20": "2gLFWPrJ5aEgExaDRZM3yyjquw9j1SJ7X43SRHTTet7pLBHCkRgXReESfhJsaBiJP71dWZqTvLG41LCBpRxGWJKk",
  "key21": "4bMJeM5J3qPsdWXmbdEqXmTVYPwhYGZUuWZRZohuYgTRtZr6RxX8LC78rLT9fzQiQ4TVpYavazz27sjxUGopWFhM",
  "key22": "2JpxEZkpQ6EEYc7KTEWrUyJKiSfb6GpBwEXTB94frXA7oqjwQUicTRQB3YMYd3T4ZtBahUQpkt2q2cRcCwVBuGeL",
  "key23": "4B91foT7Z5aVJwYfFzewwydsMb1wU6A319A6cYTm1SThDrTTEzrh3SRnF6XwWsQc2kqdzFYAsJJUUrXXjLUtf85e",
  "key24": "3TRYRu2owC1KuWphDH8jbcauyJZaFaBueVjJr3LgHft7xqkkAZWZptpLDTaCDPV4cFWp9Sr8XeQ1yRQRuwT4Fww2",
  "key25": "Ye4PGdtaxC4nirj2J1R1ryfyj3yyNi212Yj1huVyvhenq1h2A8pC54nDTPsGKurxAFjkuHBekZXU1hWYUWC2RZP",
  "key26": "5MiqL8fLxY8mdyZ91WHoFAswecbQhmWMLBB9X433bU4H2KV74HHmR1ht8ihs3wLdsjcquwrM3FV8xvLKUnKFRo38",
  "key27": "5DidqHULkXVL5NJTZDbTkdenN91JqEGLcPDTDcyNZfB93fPLE7Mj8Ks11NULBCrT5HXXBFYmmUHVkJDj3QgXZwvR",
  "key28": "3b9Zny76HkubTY5FdYVVt3qtu16vqL8PnkWPimSTKiEm8edxBgWXGZHnet2RRfL4v4Px2ZFs96m2W5UuQWfr7fnL",
  "key29": "2v5aoVqdMvSqywtS16MXgLyWB5cotKqyAVkK4hPnrmCpq3Qqy4N75SfvqXS2LZ34xfAAXkeQZtg2XFGJYckHV4aq",
  "key30": "89FwizFsLp7ZUhk8hEPKUqqoS798StKS53P6dq9bNqwJGHGMahixVFiUEEtKWXh2mWVqDyhAheT67Z8UveMjxye",
  "key31": "2YQ9M35B5mGy5XvrT7U5ivP5hm5S3DDoLELU9vd2xdsTDhKeRZmXSn8JcxtgpdA4eSoM94koiVnAmDBEPFuUfLxD",
  "key32": "a73fVYqrsBD5VyyHzbQnZSckjgNP1vFs4CbR3yEtjUSa6JocidF28nqyo8e4bi5KjivqNrJi3nhotnCMBiXa9eY",
  "key33": "4Nu3MxdxhkCnB8XFzasupf3VU83fAJmb2euVx6R88AuJCX1fUACxuNwzzr1A7EYhz8dHQuvccXeAcm14Vvmszq2h",
  "key34": "xqx7joDrn5QxYLzEwjbgzoDJ2a6cZqvq3h8LMJZN8PuFFiahvtoDqvUJhrxeqA7bwpXZS1LrbzZVejBDYgu3eyB",
  "key35": "2bE2hCmVRrBfiu8G4R5pCUEhstogPZET1BPiJCuyyQJf8ZazLTK2MKkrHMDRPSxgCkxWCZuRzcfVLNnrhBv2uYwr",
  "key36": "4r2Lq88jiM4Ggy2cztfKHSEpr79z4pgEZP1CKxbBtkQdH4U4tRKWnWvMVYPV3YqAD4DJCXECchgCutGS5zyM5SJ4",
  "key37": "3uSXZYDkkjntYkYT55FMAPfmvdbeSTMXeYavsf9P7mfKDnNyifLutPRwX23mLe9mdSkh9kLpsWtZE9nza5UGYuCt",
  "key38": "65tBz9FbAY22UYND6pjmU9ruVUP74GWEekCvy2Ch29Y92JJWEyHdgVBxFd5qif6mXnkNbZsxfQT4pMq7VzeyAJww",
  "key39": "2asSqoKQ8NgcMrCrkQqn8xjS1yq49nVj8dAhr2YVXGeU5mspVMkAUAtT5JaFS5offmX4QUFaV8ButauNuCZTn6tX"
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
