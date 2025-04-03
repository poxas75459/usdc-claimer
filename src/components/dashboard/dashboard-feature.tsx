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
    "25JALm1tq88jVQqT2ejXxHf7VAvStU1nS882TyoCXpxYr1SnibNgqwDwR6DUFQLknhtLKFCkWKHo3ApHtrxukaEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46z5RyUecmkuS5MznonAJXJFCMQGdx9HZey1fuqy8LmtTrAA9v894r2WVXjMkTBAn3rbvoqZugJ4x1gE9CzTbUGD",
  "key1": "8tScQRLr69r6ik17svCoHn1JeHXvEehwmJnkJqYczNt6gTiL3XPmfeB94WbWkG6ofxmvi2y5h9Kx8j2jxR7N5nj",
  "key2": "34Y6EWqdHMsPnZfSJS6w3jbJc1Zk9kwHpta54ScJNNjpk8ZQfVgycJEeDitK5MPct4eAYWATvirmnrnQEt1JXhAL",
  "key3": "4pVVnysNYGNi3B4LcTSPZg4SdXe8oF5pi8aj9DjDbYzcTRpkdT5kZ59u5NxatW16sXeVbqs5BWrPZjxKzNwrgsKG",
  "key4": "2L13AtB3a7mvn8Cryb6PYy99drHeCXecf7qFPemRzgk9p2iGgtVQkV9PVcRFpRr7ypomXwGG8uF3UxHcuAt8etX8",
  "key5": "48G4Gb8uy8xV3QSSG8o7jqAnofosACNmEXqKHdKrNX6T64Lfag6nEJEFScY6s3Qjad3uNvAtjrYf1TZzi7SWK4Jy",
  "key6": "5fFLaceugE2XJ5m89SZPzmFGwGZKiE7FjGtSg64WZvSArNtQBKuJLyqhWi9eCg2E4tVY6rYrtiPUCiBfeH96ZEDS",
  "key7": "f3A7ybF4gispQWpTN31curSxb6mqqhKZ1qFLtH9DdPffTMWPGCPZntR4AyZC6upgWxUpCVdkadMp8NUHtWLUiur",
  "key8": "x7VS8WLiDs6HN6iejA53UW1npWqhhR3U3DDLawjcEUrVBURxck7e9kdSN5Ns3cSmSgbECtJVDkL7bRtTrdcnYa9",
  "key9": "2MSL1tVfKcR9BrHsNpmasFLAFsToyPshnEmxiq76WAgZAPKpp5AcZnAvJk2EyzGW5XzQDDA4chRmrp7q3QoYk1aF",
  "key10": "55tDHhGBDMjUqKsbn8BJLdZQ6LfWtqrQCMqPmn3bgiMWc3DyHo1vncHNSHHYzQ1SeahSDAzi3kUJATwAoWS2b84L",
  "key11": "2scBvt2T9mmEs3J1o6PH7JCgjrEQFe8JVkAsk3TbpRkYJfjLyY4ApzXPDFU3dCNtdPZ2XyNptQkdjWBmbTjzgpgd",
  "key12": "4HSxzcwDgCjm2UhVruek8HcBADeuYrvwebTntvFPCDUNwzgRUMYGSfSEuJM2zNvx8xsNz8Nbg4p7JJeu2gGGhn2V",
  "key13": "2mt97f6g8hHzRa5HKAVGseyz835wybAXEbzUs4ayca1kwfNJNJat54yUeoMPtfuyTyuUYjLYfjkTxoz3cbBM6Ute",
  "key14": "55zSBVEsDBRJsCZmtAAWbS7h2fhtzFcfdsjohX6gk48Z92W73gSSgNbXxEtqnuGJeYEthawYMx8rSkRMs8LE83Lb",
  "key15": "5MuN6qrEqCbRJ4pYAGCjNj9UjFqs5hDqFzWpBAZPDns2mYAJTMGbmNPD1oTvwQVZE5RrShmjCBA3yYKeZgNJ3jzC",
  "key16": "2g86qGBWNyUhJLjVUMhR7aYFJGkoXUaR4Wmoe1AuZHTujutYUD19DnbiJt4CZzNr97y2GCGUAH29Y2KaE3rCjDF1",
  "key17": "5GytGkinFuyHsj2RDGkb2a79HErfmv7kg7TghN9b3hN5AQdC6QjPhRTVXJwXhzWaoNv1XK8qeRy1dgg391qf6Qmh",
  "key18": "aEUUddxzgy7irb5SqikWVJT2ViWz428txPBSaoEtKjiU96DhrNBK5XBMUZ8vmHUX9NJswqKMhWmkvyiCGACLFHK",
  "key19": "65XQQbrPTX1LpCHTGBgZjJ4BDfNNopJYKUwxm5RYuMnLYSjhxXhZA1PiqdE5hm2fNS6VzShve21wsPpPBaq3vCXS",
  "key20": "2y4dn1Lg93HfDrj2SG37ZBqeNfB2nyLFznhcj7PZDtMKRsWGh754wfzfZeFx61L6kxobkmezuLefVnN4d4WHg4Go",
  "key21": "33S5nXsQqZ2Hhi5RvKcHhxB1RNLyVGqgSUgkWSvXPKCJnVYDDmy4hP4rDiq4wHhaPngYKkZ3oNQD5yVwGbGRNTBj",
  "key22": "2VfTtUM8GPNGwXiYWnung4Hu9RQpvMLBfRj4G2s2aXuov1tNXpkNYX5EN2keW4Vrb3JyeauZWRStmnXAJcqdaHML",
  "key23": "5FNPMxC1ABkE1sGQZ42rCyMrm5y4b7ALKWwZfbEUygHwRNbTrdoNBtyU2BVHBkZMyYpNeyTraQCXSK5sX8yaA7rD",
  "key24": "5hX3wnYNkPskEowLodLVgUAJUnhzyRbyQ9WMG5i9FJSnWGEXfVdbrDz2wEfTYevjDtvER3RrDEktzG23QpNWzoyE",
  "key25": "4pGMq9U7s4k9d2oXv6gXRBv82NLmvBe5sxDdM9ex3vmHuGG8tg9oRmtmonVXLucphHKq5WcQebAt8g3AowYGc5hH",
  "key26": "5mYt72KWpYK9r82qZXWajVJJuMvnQQ9yFuhq1g6VE2zAAQ1SGGtYYcKuHjABNN6GwGa33dsV5KBoKPvvqGAtka39",
  "key27": "2DmGnibwv7nkrFfa3qGtxaRviUCMYvnxud1d4zaT4a8mSA2Xi5gr6Eua6JzweR6b9XnNbMJZwrnKMn6nm5y1niGo",
  "key28": "2sCcDgGZPTkRn4AJBv2uGeyv6XNgSaDdN13tF2A5G3QYRLZFSwPmUregkgHKiUEBXfi9YQugPBZzdbxiFLFFdFh5",
  "key29": "3fj2eoXtPudY5xGdNeUGiaWj92Nh5v1jdtiPxmtXez7egazkMSDbCC6HCW8hmPdkymJxLKSDGDFhMDpX1eEx1HkH",
  "key30": "5LV4GDQWodF4A9MW6so4baxEKEJzq25SYtx39fybvR9UjTmJRFuLnM5u3QiBgaTLCqLZzc728kFHAA5sumH7UmNf",
  "key31": "2LkJJb7cwuPMdCWQRTE3Szggb35LpuFvfBwXktXiWjo3KnFhfxiMYynVm9n5rebt3m7kfvQxfamJ46d2mCXBAjmB",
  "key32": "3jSJdCDapCZNRLF35rb3YFdvg3NTXYpr1eyXgedLpbvxiaLqepVUwgbtavPYE7eGLJBG9dGpieqHRHc4XWHLHE63",
  "key33": "2Z2y1jNbcRktuUpktkMgt9bEuowRKLodku2NurD7AHQ7niTPYKLc6oeAgszuVWVctxggEKEov1jTTAVjaBPuF7Xf"
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
