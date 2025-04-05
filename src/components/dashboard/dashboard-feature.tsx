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
    "2qwbzqyKTDPDiokMKkC9A8wTBSgjYrMEmESxRPyJf2t3JCqUKZtEt6yNju1zdhiuvYVGGBbWQ1QyfXa3rhhe2gQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BGHq4k719beDscM7XAFFuuVxv9CsBhuXwZ3ffiAxQTxD9c4No6FVZSJVz4zScs99ougpHauR8tVhmFAUqKBieE",
  "key1": "47yY7yY5LLcfyCTCYRGazwRLdZ9NAsa3gFBVsnfDzP4Kqp3KoGMR5hqXeeEUNVNcc82J7imrp8oPDNxqJ5cTwa7k",
  "key2": "5cgj14juPM8sN5UFXzgjAQY2vvF8S4kCKNuuue4Mwjx9iZgJNtSZjmW599XdCqxQPriJ6gtRMxRzZRrWLwvUTR6q",
  "key3": "5PVY5eiSy4ZKnrjjWBHkMrDq2TCv123f6YWgBN7bkx3xSpVUtZM1n7XjA693RAGrqxx3GFmKAXLGJKjFihqti9w5",
  "key4": "2yx9t9YmMSL28cRufZhyU4RJhjGtX5AfW1wWLoPd49b1L6xkbqeGuSG9jz8ytZpEHLBiTRfdKkkPYikV798EyycP",
  "key5": "3BEd3YXs2bpfQFBfoUzBC9Pha6PhYzPmy4m1fyQAvF8g7Kioo4yGbd9W4wYDr2vWMgjKisPWFVUsArVPx19BiDPT",
  "key6": "2DXksfZejxvupVUxat4HsDdpyMV3rusqZtybtc7EEedjZk4UmP1kyYiSEWyHemfYGbGCeUHnjxyYyx8NayEwSWbh",
  "key7": "eUFWQrWG9azsCnWpC4y7xwyaNtKb7PCTtSTkQVyASbKaCvwSGFx9mc8tVtncBMqMrPQzExyHyvax573PEhMHnQG",
  "key8": "5ZTVnJ86ieXw52rVtWNzFrGHcdLCADaVSE6ryXr62demQXz1CNn6mrzw41RNfS2VW6JXdjkHsDJTJL5KqPegmGum",
  "key9": "2moUH67KmHjVQc9d8KyvZCnZd1MKAZ5HteMPY7d8bgGLhymwbak9zT1RHSwHimSDs9qNgvSJs1JU6Qbz7vU9jzgJ",
  "key10": "2RskMdWut4CadxmK9dvEUKP1fCUgnFRfKujqx4NUEsxYHpiPSZgUgYCda2akqQvGkPC8HT5hq3ynvuM6wHKWeh5d",
  "key11": "65a2Gr2PBR3WcLfSogVMoK21fbMWieS8WSwHPWsXCPdVLcV8C33Ri6HuekdFZTGQXPixCkYQfhEFGFqWg9HTFum5",
  "key12": "5sZs7dtiCZhjsKcQTA4unYL11XEJ1RyLpdVyTsR9Au6WKyJKg55uUU3aTxczRHipdREpxBfp2Aj36G5Wrhr4UkQ",
  "key13": "4B3N7G5EQpME71zPLHt5qAmvdsBHcKdfCq1rQd2cbMvEb3RCaMwqXY4wPk3dPyWFS3FBBti5g3LuGxCGsmF6HVsB",
  "key14": "4PzZgtQ4UZNVMbaAx1bW3MT3hMBuBKJtKWN9RK74NTfEbjvrMNykeoc7yxi3aoZhCyQTDBKcBM23X4jc8To6kUTA",
  "key15": "5676fuwkqxJHtmEV82JhVKHV91Qt5XCYLZrenjP4MMZ9ntH8ojBgVCoYsGpB52YrjCPst7f54RWsuN3kPFY68SkG",
  "key16": "5TNiEg9dRVyTSwyrSAtoXJsmz5oazijSii8bY11cK9KXYCeJbAEdcWbPnuFrenyzCaga3RyHoPKWWwLG1x9zCKCi",
  "key17": "4SJj6cKtVhKUbdJTy7HXtF3d77XDuzduXSLvg6uXfNpces5LzPotYxHjWkQ3CCMG3KnXB1odrEMq4ipuBTtjYTth",
  "key18": "3bEoere57bGu83AKCTkaKK8otbyTZw9Ywhsx5GbNxRZDGZtoe6tDrhcLGfMJ7fZhFKvWTz4Vps7JtVemSdnDM9Nr",
  "key19": "5xVrtBRGxmCBRUNmcEb4db1Y4fhZSFyKsuQ4b9kaBH4A6pqgqA21cnfhUpAvu2tweeoFjGLeCjGCvX5e7DjpcKBD",
  "key20": "64BxRwvPvtNWuUUET5gDJpCJFsAB7WeQXF4kqwZyVzNp2JiDRgJcjqjDC1DLxQmv3iePYovKhTuUvT9gWG1yR1by",
  "key21": "2vq88PevQsMQqhtNNqEvjDfBU5Q5PgNps1D2WLNQNohB2LF6waEccxtKtjUc4jyjqsVLnu5Vd5YzJTo49fezHvLP",
  "key22": "vbrs47w3uuTMi94bjeBw5UoEGBHdRaMmNAFWmMqqvQCE6tdTMzrMu2bQ1XFPRH39n2pMduqiKx8e6R5jaB3diN2",
  "key23": "3dKHZycy4TLzsUUb1xor5nYocHkrNVUaH8mJPnHcdxnf1X2tYrtcavygc6uQNR53sxut6p7EJw6roCg3WDdH3hjQ",
  "key24": "4JgAtbhoWoVTaqKBkPVYAsECbEFdX75RHi9dZZYbKjB32wRBaf63YXEz7SnCxT46pqPm8QXHQqdrZhRgWZCkHGPL",
  "key25": "CXDpHyCMEnPHWHwuDCEtFEio8XpYz3PJbFRwpX4qwwyRzdg2nkpRd4VTucBi348iVbYmeQjBhK1yDfQgDT7C8Hi",
  "key26": "4WfhRk2fGT7U6VEnDkiX92Mn1634ouibijUG7tbqsnXCrkr67VKWQck8DdVfLQZkRPjDXg142fbAQZMKP3W5Enrc",
  "key27": "KwkdEZP2d6xhBGw9CRkSrzA35pEqUBNkpkGm4rLBHPwPA75bRgwEvdkmRp1nq6P7ERsqFfNk4tNvnRjnTuMicrt",
  "key28": "2QKjhqRCSoVgZuBTWNkEHRDrSD2xwdMHuVm8rBSbQ2za3zyL1yPXVec2cWLFvNyixBLSytoMiSRJbMT5paVqCaNH",
  "key29": "3VqxUYj5QzrD8KnChKF7z5CFeXeRvy7d4RXdfohGsHMFh6CqvPjouDNXRbj43BpeyGcnXqkLDVkjFu4zhZMyhsDA",
  "key30": "zmt7a13KjV5AHX9dCqYHXZ9CUhsVottr2UJHS2nrcWogiwZL9XtjqwM3bvJudg4xs9yJZoUUxvfApLUCJhUpKpT",
  "key31": "5Xb1jKnVeHmnBgynfRTBhHn25SjeSd9Rd3ykfofv8tgSURwqNV12gMPxE9caPTMT2gRbyd3r8PQZEkzok4fCSiKs",
  "key32": "5xYtBSJCgyQZ1U9pTvT7yHtqZYn9zcVVzq9LeF92VM6ZDou23YFkskk7no2yDuUEA6obGCcENaQJ2KfcBxUDhKjh",
  "key33": "2QbZsjHMcBTVifcKeyFGSsaaHPc4GB94je6bMBwQ77pCbhns8HKUfm9PyRGqAkJF4HfqkNiBbHypePseTT7t5gW",
  "key34": "54CRdDkErHS2odHNCFpc4rfvFZoNkQ5Pamnn3ch1boHrq97AnqXtq9JKowi2uLvzziabtMWVijEPErURF6rpwRGM",
  "key35": "4RM2kEKCjBq9LQBVQTbnj5wmxpfPhkxccPDiiuYS3tCbdRWS6LPAReeWxPZ55U7vEWwDoxyxf9vjD5xfB9dVb1Et",
  "key36": "2Zz7iTLdb3t327wcZV3ruUZ64JizL26Tr1PyeqxgmmYQfbSSUJTh8ersgSSGgUsRgWUaF2qGAD7EWFAmvQexuQGK",
  "key37": "au2XX9w1UqViy57W9YoxiFSk4XFQGTnVjdirRhCpmFjv45zXPwQNpaJg81xb2zDWs3Q9x7wF7mHv9XK6JSki1mx",
  "key38": "J7jvNwinfdFSkNofDxHqLvsLKSk3oDgZ16XakUwLhoc12Vo6DWhS3RAGBRw6KLHA6PjkFyXwcWGorf6no2uWqiD",
  "key39": "57FCBE5ojgS1LYTHBNqPgVU7CHj87GkGB4t8LN2ckh231o2mWf6iXte9YJZLP6ux379G3zpKLF4ztKrsMtCsfCfn"
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
