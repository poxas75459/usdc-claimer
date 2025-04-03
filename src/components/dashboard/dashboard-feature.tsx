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
    "es6vxXSo3GTx2wHunBVEBZYtpnmxKUrywz2VRW5ZtBNvehnHp5wLGYNDYXsTxb822zHAQ6qawNBLEgyCVVLoXH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nStHSkWWWTUeunggWyiHXbVQ9ZL3pyWVP31vWyKJ87QGeuq63jzFyfwQkF8eWRVE3M5kGJHgqcBctoS3nVerWBz",
  "key1": "4ty7fnaUNAUwjYx4StxEwJkEiwxUHjkwyAtj6z2tKU8pDQBPd4GqbHQwSijNPrJ8PXWaSVQsFPhpBFN9WupmnP9N",
  "key2": "4dYqF7i7JbVuCQJHBTzxFawu5RdtuqPggh4BSEnpv27XuUFin5G8BhMESPjrVSAkkjKsoNTFeHFjoTvWGeFmKBzC",
  "key3": "FCyTs7kjv81vrSJE8WPWJnFzM7fUAroy8oYQnq4RzqeZniopWwMaVtSKqVswmLLTy2A7JkY8iScx7safXc84CDY",
  "key4": "2mGK2Nk3oWEaqkg3x8VC2piUoaYbDB5PNxUbzq2mwSLfVcubhC4gyc4KHqC23KpCzwhPn8UGphp6DtUZnuXnLJqn",
  "key5": "4BPWStGXTDFtTCqWfgTdAYUYV6vdWBsVc1dKdLnY4Jwf8Ck7H3iCEECAoko1VS3ZeTo1PtdyJBYVLiwNf5h84yR8",
  "key6": "4vWsj1oatqZa4J2WwAL6GdD4fxmdLUHLY5pU2YY3EDkg14ErPtTXJya4EEafnXAFod1CuEncuPkrw3Mw75GKwWB",
  "key7": "3rX2D7fWmXikuX64MvwSVgw6Yd5w2bJsqEqddsZDgEcPmPyC4LHH8ojzAUtHL8CabFxzN7pCFedSufSAmPTLtCf",
  "key8": "2mzRE81JNr5SfZzLasdaSiNZxRW6WdMUEMHEF3Gbavk98rdNkHJJFsZWDEEppzVrVfEDBgZ8L36oLhf6Pccdr5L8",
  "key9": "4i4UTVdw1bi3dUnW2cgNdcxYJDk89uxbMVHdpmzvAypT8SL7TromXUvnWX8eBnFbzC2QcHpnz3o5aD94VGMWyTM",
  "key10": "4YH2seVMhhYmZKFxmeD6tFba2ei8MsXUsQ9Zb3cZiLdbxQLXKADCKccnfmwNMDx7SfimBaJuh4uNH9psiRXGk7Kx",
  "key11": "2HCxrQKpRuR5nARXmBqYeuTtcYtFeofov6dX23bQXvV3ARXf84qTQsTNQK3VSGL4bvBnqEb2B1JEWG1BbvDvGBK8",
  "key12": "gMiBBwEAr8p6bvccomKexUyaGTcUN5oRMhH1fyrPdr3k7jMbUSwNyRdLHZApnzP6PUPfeF6T41v2o8PKJS3T2Jk",
  "key13": "5fTBYxNPGrphve2fXSf8hduVfPSxxWJwXgi3gWmze8Adgo23EFuXWixypTK7PMPBfRDZmEjd2TEffqvjeLUEUhoK",
  "key14": "4YG8PqHSnJv8jxcbmxPemgVPS4w7MSf1LxSepyM4xsWtcH2vzekhHnxrX77RwpmeBM3iRrLUkJD7CYUp2Lt2tpvY",
  "key15": "4neMTtvS6N1qA8Wk8NqHC2purnoQ3UDMSfkuNdycFK7hUNuK384sepfzEAEgtAvUq35hcLpumfoMRmvsMofDvqLi",
  "key16": "35XRKYUUCd7WSdrXVJdvbdoDjwo5o5qadLzQK8REmnWFyxPdP6RmWcrwLqkBb89XTQc8uhYcD5FvMK3YmR1SsXtF",
  "key17": "25W7uWxs62yJEF3PfdVMTtrMHmtXAKAT9xGJJyJLLRyB1FEKk1YK8fxq2sv7PLh1o5cnfsScrJ2xrp9uEHZsfqF4",
  "key18": "5rvALujTa1oNDwHZmwW5odS8o297VcrsriSXcM35hxbDN6fp4NbPByRmBaJXzvzR1QJbocTEkvAbcrCxQVF4g5ih",
  "key19": "38g9SJgBJ8ttLFKYANLFknjJDrXq2G3aiqXytwFcBgr3H9ip26BSA1iAM6bkUEFskww6rKCK4B2mVTPK8X5VCFF3",
  "key20": "3EDqqa17qx4JjaTfKDPakqRbTiSTtuHAGB6VVdwfWca4kTWtFhhe2CcCoo3stxNyuunVoJM6hM7bpHYiSUvsuqzM",
  "key21": "2R98f9Byc5NEJqdA2vFWwJDnjgytaheWdEZYPkECTT3YnNAXMYA5QzQAe2KeUXfFAfCX7vCph47V9vQHvPzhavfP",
  "key22": "2bNKwMGuqsXcTiZepuN3YwWMdNSDFXAFvTqj3VAWjy5Ho1eqcD3EvjqrPGYRoFn197LQxUVHGPFg5yqH21NrFJqP",
  "key23": "5asV3KttddRGngwEhFQwVGuR3nCJ97A2JnoRSSvx5QbDuxyUvig6pbCQJreYWFXJWHEzALBUwEU8wXXzv5d1j4C2",
  "key24": "5Fph28sRLpkf5xjRm9UvuFcep6g3Q9vg5NTQR34i8KvTYYALk7TT7tKb2iZ82GbtzWneEEPu7F1xb5qvXyUE1VdE",
  "key25": "gj2E7ZoHDJKXfw58kCJrbYhVeui6azuTTrSuBhdus51mXwGgmvdV5Dr4B4GwtfQFjryoLWAJWQjZgfCsLSz9suc",
  "key26": "4EtxWHCsfNr6Zbc9ZTrJaPStXdAVMf4BVB8jKPPViquQeFFAJz5Q3Tr8BfF7cxJG8xaBnaeWsn3uJZAaEDhJZ3WK",
  "key27": "nMs2E8p5tHDXDdJ5aDkrUz34RokP5GNcBGUQyJWc86ZPC8mu7nqsrQtEwdRVk6aPK5rVQru6fbgoqYcggNHPNUK",
  "key28": "4oP9LKerDvp3doKebERWDQfNeZK9RBeK2vndVkspZyAMpfg7jD89KP3PJwhCzEmQ94GizLrRGcQXUmxpULjPerXc",
  "key29": "5yrWW2exMrqk7BnPQWRUjXFcHyqU6ZzS1SiXtjq1NkTn2a4Misd28wMjs3iRgsBSP8hJ1nYGpQsq5smWbVVrSU9g",
  "key30": "5EVBcb3NnyJtMVMVGYaVqeYuwGj9geG8GnoDtVLxueqQsLdgYEq8FTPCP6Dg91Dx1df3UsiiFrwBy17Cfs7Phyzs",
  "key31": "49PnU81oiCNoYqtKrUWPRkCLXqS1NNaEL3n9K8DziG7haGHnG6u6zTHpdh2i7b7JmCM2ekb1YK4ZPNv7BGUppaBU",
  "key32": "3Eypv8vN2Es55Syrbjp9uGYrDyu7M7nB1oz5tjfkjh3DeraWBnqH1U8R5BpoXgLkdP75zq44Jp83AXY7xS99jkD8",
  "key33": "8wV5z2MJu1KYkGdFmztVWb3eyQzgcR2Pk5vMseZnETaY34d1GiKvbXvwXTwkcHnBjvnGyUZ3q2pDqTMds4uGDGo",
  "key34": "5XW5NS2WEfN2kh9UMF1c473VB24hpsdHLXCp8iCc5xQLpSYPviHNnyaYwqr8JeGJzPVr2Gbcrvvq42yPb7A5VLMm",
  "key35": "CGRFNqo4amWczQyEgnUpoY94MQDdbUQdNw1UcGHjd2qRmjYN8vDvDwD27cxigWTewFv4HiKAEbTS4RQKKKogtL2",
  "key36": "Ktkz8Rui2PNNyuW3XiFGUWqx7VTZU2Yf6zR1rFXmuSgqzyo5x5Pht1K76XByQmqvKeb6GoUHxoqzHSVtvJ5nL3m",
  "key37": "zhE2avYmygntQm3tY9zkFHtzmCA139RcUEPPSqyCgy7Fxfvc2aYtPxDWf39TkkPamk5Us8comXMzptiAF8TQEtr",
  "key38": "61iGhRJAQap1mv7XmKputx8TLnrGy41tp4KT6RZJhgJDJwjGtRdZLLs78a2iZ2nxvyaX3zUx6EJ9B3fkaLf3Cj1F",
  "key39": "AzLjpAhuT3dChWBLcT2jrAyZrvp9FjPgwDghtV11aiqXznJYMGHxqqRAuW3Z1e84vUAbAwNDq3mpGyo232R36Us",
  "key40": "wRviAnZsypozV9V9qAtjo9nv1KM5TsqWEN1sjgGUdpggpCcQeJcRKWHAk6jxG5JEBAgfpqnEvpANHjqhLi9H89x",
  "key41": "EPkPqsMHgKyHjszHZNDgYjuZTuVzttjnY4aCet6qmF756t1L3VaEZDUX3WFQWS8bKEPhA9LzbZC4satP77eFsJ8",
  "key42": "5PHa6AkBkwVW2hVkYqB8tUyesC5WPjwojQ4TBPEYYjJk3h6RxPuqi3BxsrGbgUVa3dxwsLzy4Dtfrtd71K7FckUK",
  "key43": "2FohzRXALh1wQaGeAVhUm72Puk41xUPDnC7ZRZ3kExyqHHAPEJzCPPF4GoXDQ88zSurEC7SV4AzzxCnRGFGKUuGG",
  "key44": "5WR8hGfCVNQd3D4fswAd8M1JZ3Baprutywkdp5stexiGd824tsvPaiuLDm3KimMddzQM7u6GkNJ9H4XHussQTKn5",
  "key45": "5eK2DaVrvZVE7zyyMfEWmJ2Xab6RipRHXsWPwy2wBa5pJDYGCE6omuiT1kH4LFu5mFaxQjREARP24H9ADyYQzpQv",
  "key46": "3qGSTt9NzAArEpzFFgUTpnuTQM2ZmdaupDrhimn8nznvcos5NFqCQzmFgK7GApgNawwV3qfwer7VbWMfEkKsrzR1",
  "key47": "4FZuhaxzxhTzwsCGq45G95PnqrVHYCN9diKawG6HVqvRPwXdsE4qxiGiNDdj9zoXtWimVhGCkAv1SPzENCqMEAEw",
  "key48": "4QZm2fVHva59EPB4dBmxMgUCZNj2GGcoivVHrnRnRbnkEDieA3CxXf6u1eNtAmbrSF2Jf9KgFacTF1TfLvqJJrEu",
  "key49": "5FLwsC5XpVqyBpTgJso6YW6eTWW6vTCiDfHeFWS94ycpXcaRSgJuiBLjK25zb6pNtvwLF4k3EfBvWnDLUBdNXQTa"
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
