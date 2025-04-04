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
    "5PMBzhm7gMXf1qDqKrx1MpQ9LRU7qmLQWE5c87qMyuMeSit8i7KAbq9QhupjUL2y2xbUutS1rNyMHhaK7syqZpEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmViRApgxU4EuyVbSSkp2uE4MDx7C7WPHTWbZKGRx77d7qkB9py23s8MdywWcgn4QMWwrKm5DgUStF1AA4T6JSo",
  "key1": "3CtPTXSX67guShVCGq5rQBoHDrNJPC8mEwUNkKem2obgkdyc4bz2nZ5wWMWNhcSQYb3MFX4hsJ17Uu7wWBuhUmeR",
  "key2": "5Q1Sdy9ywnz94o7D3B6RZqPwzEdaT7MPLwhTYZkR4iGLcbt2Dq5TTpKerNtjmUAcc6si4aSNiLYkHoPmHxe8hnVr",
  "key3": "5QK5oVBck8BTuA53ULAdSTHKVEtvTqugvnqvStnQdMvsCCkXiByzNoy5tzUF3THspJyPoi8q7BmiiL3G5sAZU7hg",
  "key4": "55Pw37vAuqitL3AmjxPW14DfTFhZo3XbHHRCrKFxKC6EMBoW1gs4AfPjpDsYudmvwyejq28Cvnpyr9pWYtE3ySTW",
  "key5": "2ZMnbmy8HeWHQ5yPY2P1CZuGdyHJsVYmKuhnpAFDbW721TRwWeNnuUPy2Ud7MEfVWE95pj4C2NaEkXjGFxFe8dxS",
  "key6": "sA5FTD1i9KR52AvDpx3V35iMsbTYDDhrEYwzHnWEyL71J9wD3HcK4SK88adHLCBrWhXWVmEUwbqCpc5TnbjSJPs",
  "key7": "47UVAvvH24mmGgyrELPVbjQFLATPqMreyAeUocqvyjntVk4D3ApCFSZzZtvMmUsnkQYDkBYk3JBTf3eqzVcR4f7v",
  "key8": "4JMyd84aSebfWK9mT2JmcSc4SgTe1srsyTULsrEDFxPPp7tbQd6rfFmL8kDDfhDb9FuE7ifLd7Jw33CjAwKJb5pD",
  "key9": "3wwuGRPCCH6xWzCiTPwNitJwDxc4uuQmZJex1SyWxdqF2TU93AohAESewmvvFWtsm5bJrqM6neuB3cV6FhnuRMtx",
  "key10": "5FqjJXJeNrVkm6ZGEhVrG6vreZFxe9fce6FijBYtT1b5hGCGfyZPu8Z3kR5fDE6U5bACG3rSk4E98Fu5HwrRCsV",
  "key11": "2PNAKfCuPChJtqYLjTwx2LH3yojoXGRvRyiBLQ3Au8hBeWVUguZMFi8HK7Lez1aygVjyLYzpfd7mNicqvEKvBwdD",
  "key12": "5thm2Ra4oPVTpTKY3tcbdm1b7hwvUK14B3M3o4ggZQBeYxJnHd5RmFD3Fipdh8oErtKiTsgjAY6vxR6yTdUcU1fu",
  "key13": "25YgXSD6m53a7DdQf6FFjC9K94gWKJNozhMMFkXKXfR9JKduPRE1UAsK7B8oRnLjZUf4jht61VQXWUcYKvXhgr9p",
  "key14": "4PSrX8nvbTknHQdFwLo9Pux1SVEsH1umho4mVQKqZxogwnBDQ3beC64zo3c8xo7DdXKpHwzFRGyd2aDUtU6KA1au",
  "key15": "5F8naZZRDkSCQiuJXEvo6Pf7kZs1Gk8YkUKXXJwuCeX46bU7A4nBLPdRTssDw3r9taWgWXMTQZB2ciV9tAexgjW8",
  "key16": "5xdWV3NXR3aJVEfpJpQQ5jFfzuEvSw1smXrFGAasstyudxCQcvLuosBgac2duVHNBo6dAh4SuBMPgkAjdJipGWVS",
  "key17": "5bL3KSXJcuJCiUkK9xeHWJiRdTVeUrY3pk5iBqwvwQnbAGqkKfpMKkeuwmERdzfDkZi1LMmRq6JWAfF67EzpXcYz",
  "key18": "3WFtEb6PFoUsWagTeVC4mRBqigtkTxQytFzaGJ1LzdH9uQsgRzZyQXGZr4NZXMti1X85f8vyKt2ZphaD3W66hEgF",
  "key19": "2Fwx2dAT6rQGUNU29PAPp5QS91MuvntenJ8CvNqDzZZghLnPZK1hssJqkoMbx46pc6yug9uh7dxsPWKTD7fKwGnc",
  "key20": "3QUYGczpXBbBnVpZuHFmRgi6BwxzxAaBrKupkYx7rMCPfyVQr7ufrXMKsvCtERYQhNUBPoUHRdHjA2CoBtuCwCYD",
  "key21": "4oAqVLW1ozpfGubdfJNXySg7pvHPvZxwMeCFyP7YAYSiv5Sazioxve1K6LmUsYveG74cDYzAakWPxWqttcxywLWd",
  "key22": "5xHWXS34Mvki1tjj1Lnri7shnXte6XknY3BM4KcURUM9LG9fT9yxmWg2oHw9xc5LKFoKKs4s63ZR1uRJF1J2aRXa",
  "key23": "3igVjtPcFd9JcVmwSEdPXHct8disVorJbjGxnkBcwiexEsWudGjxJV5JucGcxzogS8obBENcuVvSkVEVWnjHd4xW",
  "key24": "2B61JpSBTC4X2xBJd79xQjKSaQCLtDD1HXXbtCHHtxzDY7MX4uheqjRgABkTNiP1rKrGg52pzUBG1XMpLoWcmiei",
  "key25": "3JUB6C5bouC6pq86TpJ7SWk6D64z38ftCPBE8ssVm5FXXR4Gi95wXCCTd2WmBSWt942zmbpqJAau4B2y8xvahrXw",
  "key26": "62sxKpRwAWRhFWHowFmTDPcCMNML5XtdKAdsxLgaPCKBsPmLwgznD2xs9SmqdNAPoJK6vQmwh5xrhAsAtNM35NHT",
  "key27": "3HdVnHHihUvVLfUS1LeSY8tt8JP6Gz5Mm8zzWZ9GZCiv4YbJa1Q6A6k6D2YzdvTGHysKPMngRsNP75vt5uXDQ846",
  "key28": "q8Kafv56xm4ZxGcKjdMmeix2Wahn6gova2ytj4A6frQ6FiMcWpSvbDoANMY7KwRafBq5CNHjULGJ3QW33tJNd7i",
  "key29": "3cEDo5BrJvNaT3u6qKQc6THBh9Y11EYPwwnrpG5iCyP391vuvCVFcQjymyoeyjkdf8MqSjGXHnkdPg2AHTY7H8Gf",
  "key30": "2EEZRS4unrs5y7RWxmnDaBhuDTMKkxn9xgZqgrshT3SAXjfwgpztAwm5JPZpbJSq6LpHFuWocsZ25DBGjYGr5mFR",
  "key31": "qd8D4naLMswjJGXYoVbBTZrhu4dtD1gXj7DYPdmRFcZuY64UGgXHX3MuGSUyEsXDTLieoMQguNocE3wdDAUtigb",
  "key32": "845bBSXxTU4ajVujVUCucz1K2x4fUPr5HresBZnvrP5BFSnfJP6rZRHd1KvJxVb1geAhijkb9Uh2CvGYF7N2xTY",
  "key33": "5NhaU22ZK95WwcV9m4t9sFUTaF9oEmHeHLhVedQZDo9zcymwdY2NuGc5Uu8Y447eBq7JJLLtZnyxPhKN9GPXbhu3",
  "key34": "ptJnzYbeZeiyfHdYvJUQZjui6Ft7bhUtek6hgRsm9M6mM2bzy9c8j6CWARSowSh6ZaZ7Z92tTLGrpXNxVs3mcUQ",
  "key35": "5fwYf7Wrrtdg3T1txVet7eo9h6oxDY7rTLmFnHzeAdZS9GfQbYVQimS2M5dhwCby9Vg5QaLQc4QrV5mLieDa3aVg",
  "key36": "62WpHe7cXbuCUTQfkgUV4UnGro5GDHtUFxd975eqWtLBQdSa9eGtvQ74PeRoxfLCkjyYimsM5dhfcqELG8MHdKoA",
  "key37": "2tdWoMVrFFHGka8EaqfncojWJXokSrBsweZ4sUQ6GF5erDYiAczuJBiqgWs9Rf4GxGw7DXWPvGnXhegL8ABUxkfE",
  "key38": "r3STq2E2Tst5TioPN4EjVgGEpYsxnnHnhFcuVXU7W6EQ8YpS8wUu7DGZ6htfoPaJvfFu4cjjRcXwwJtsAsqtFbD",
  "key39": "4URWnBunHAdSN9CETJYfXbfT8U4argukU7xu6xvfi824sRdeHKT7Z6ANzmq2nRMovbBMTwrfo5mpLMD9XDbSXpH8",
  "key40": "5p5fX23Cch9da24rySLJMESTKx6ov3mYbwWXWHmJVP16zUn2bFSpr1eUgcw3y82TXWF8HVKPAPgv18eYauA5xEeJ",
  "key41": "3CpUEV7Sn3Cgu2ADcqe5FYGkVpmY7TmaWzBfhjoUocQ7bahP9cu9N1mYCTAqidpmjD45SxYujTQ9GztypzmsaFZo",
  "key42": "3bQrJq2qSkxYRKiHDLM5fb1hMXMhSUtbXZnw4uxuyEPLVJpdjzLLat32evNY4CnsyFBJhpbY8AKGmBqrxrFN3aEi",
  "key43": "3HerN1zmeE9d6cVee64dxoG3wqsMt9BSy1exX1fPzPTVYgsKRLbUqr2RbZdJksFAmGjsBTF6wx3NVMC72NRhYANF"
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
