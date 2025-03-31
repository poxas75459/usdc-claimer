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
    "3fatYA1XsQaazwFB8WzExNJbDRvd7fU3vso4Wbanuhay7CDvsJpTvVpBptb1ZxmZFi4XuXNJ1Uyy7KF6rEfdK2ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdNmHZepFL9QphNpEE9GWemnrc3hZ7dXUiFaMo5nptzSD8JknHZCcZHAAHxMu7vNfxyugeCgFXf4HM37MTR3fws",
  "key1": "2XJxN39YPtSV43t44A8Nc5jXNLe4u3DGiHaBTSUyFq8CkYEvkyFyTyNruZMmky2aEHqEu4H7wzanpbgvwonm9kQm",
  "key2": "66PpBog8ZeR13ZJWAFgnHwruk8sXddbn2dVo55GJgkgTu5Xrzi8MmVavghsy9HtM6rAmtgywiedYy7npCzqTYCC5",
  "key3": "2TA3gbXsum9QYEFQVyT77UBaC3WMms1pX6RRUdnXdkqZgQNgYtgd8eSyLfcDkxANwLsyDq8PYA1bBQsyGunFsAFW",
  "key4": "RZDErQvHUBBKjrWuggMFj4QBwfH9xu82MGBd3HfwFk1MWP4wAxRqxFpruVXGLEgcudkFiaYHD1m2PVSqa6uaWhM",
  "key5": "66RiDTB4pfGnPs5Yc8kQ48QKribrJ9iQFxKn77JQkQWyYsvEtSSGoDWiWrFX6y3YTTbZPnqVsGuCMtYVmQ5bHV89",
  "key6": "46GWMpG5rxyf9cHjTk3ZrABagwNXczwrwQgd5urNsCHYy81EAzBeAkGRbKBZiFdRiMj551WtnD4qmSWziiw7D69r",
  "key7": "4beY549osRqSxYdjS65YvdGCMQiKFNLoxurdaATh8iWzKqPZbGYdxDjtSi39Jr8HqQ1EGre6gW4AfP5Jz71cUGD6",
  "key8": "4brnfLA1iv4SLbYHwAb9UGZoc257EsJCcJbQ7Da8waTSH9RW9jkWwU3k5MFfSWoPHLNKSqB6ji1VgHdoXePpL9GJ",
  "key9": "2whQUWYMP2epdoMzcaY9ESBbPpoDYN7K8MsdvRWpqqL9tnE7N3hwdGUiY1oNQtfP9jyukP5tRUePfJ9tdTAjr4HB",
  "key10": "4oeNNzB7qhECev5TT6yjrtKKDfMXEJDHZWPZmBVqdTWfRxXq8PArMPx96EM9FgFUE8L7rE1WqTP75DDyHFhun3fo",
  "key11": "5vB67sxfghj7RNnsWw4VLAJzLdfNPZJggRgvRvLQTk65Fhs4RTpd2mLtj9Y9mSFf9Vs54ZzboeoHDLxCrZAyTVUM",
  "key12": "3kPn7md8LEKH9X7pL1EoEd38NAN92CNzqkCwYBv9cRbEk6EQdcoshRQtvsVEUTo9DN14v2HqAE1FA33cZEd6YLYZ",
  "key13": "4a73cBVxeGjp2n7WY53HBZNexVuWrsPTfcW62bkmGqUdocjk6kGVbokgzC8Ha2nhmQyJacYQDccYhLNJ4nYVT2gU",
  "key14": "2cNo5uWEvfxGdSEDainQtd9wStSAQAV4hgxgUSfN6SZ2GMraXUaYpwah8VXkHy4rHQVw67svRrPZLthodhg6j8sm",
  "key15": "34ffuFH3bEJ9NpQjYiN5J7xo2ABQ8FjvgX58FahmhEKGVZYSTW2LMWhJe4AcgyLBLt6LVPEsiThipL18pWHupnKq",
  "key16": "2Ahqpo1sohvYPmU1SyCbB1kdCSN9u44SGwgYuBe9fyiKDUn8xgT2CQvqQZ4Qu23z7tHAxm2eJAVy2UyjXLAdSAAB",
  "key17": "65hcUf9S5JiLRVpTanc8iUF12EkeE4M46MQWqjvEFjpw1Q2GBEscerDS3t8PLxZnhGt7A2DpeMTVbmfqRVaTbjQK",
  "key18": "2JcVBAS5cxg4L8GWRVF3Z1Am4mj1YJJB184F3hEnkVaRCfYV8BKgR9QVTJZCiY85umSS3eJ8RP5NYaZGVsnTpe46",
  "key19": "2QEsg4xCnYNbEyHLWYjpjGNsmy58Y8ZFtXkERWc2MFk6madSWdF8mv8dqbB9uQMasipnPhbWCEbzC4y8Q1PsX8wv",
  "key20": "3VVPotn1ahGNBga5KbduewL8GooL5ay8wVCYerF8VDMzr8Jtz4SVSMRxymCGwD7PFicv6y2zF9gyyvtBQBdN93t",
  "key21": "49nTFE6UX2ZauriAY3xT6oPkhoRZLEP6GcREvEdyDhnHDvUiHGB3yxez29o1y9ipSq5hsqJ1B39XQJEvB4NpJaNF",
  "key22": "HeRUA9zh9qcDGBY9wkGXnSDH1mVdXK4Sy5t9eFB3fV64BAL5JYRNpaoKnJuSeFRmf7oirn8j8Wo21tgPUtNgKbT",
  "key23": "66tQwYxipcT7bQVxjKHyFomHoaRQj1osVtUXmxYD43CwP2Bd6NWTDd5Gf8qMCAuKPKmeCYCJJouPhMQG66SGzxxu",
  "key24": "5G79CLhCfyWrLpoqodsAsPxbVEn17k5F1JowRbxA3WYygV9bgXineJhQo11f7t22uFwiooBwc8zJ7anwgerWs7vm",
  "key25": "31ajvNhBf8eM4ZUrQb3qNuE33YRpcuPv2geBKji1dVLdE3WrxFqHyJtPcRMdjsQTVkQtfDq68HdYK2qBo8wKwCSJ",
  "key26": "5Bn4eKXf8zKtF5cCeqX2ZHQH8UPntmpV5wJMnWx8FrdwZosZqTKYf9XZtag6yp9GTEy5EXB3igxewfm3UVxFyKiD",
  "key27": "3wZ8eeQBdbx7MjkXmWuKfJvpUi9obhbKrzdJF7J1p4ZYtUWbaJwyDQfwzJr1kPd7SMuJ8agq28QKktb8JHT4cou2",
  "key28": "cjvGMzMvBLcimPyU185PBgwHMqgtT73nMsAQczBXgQZq6Bxzog3U6Tn8rDnSbfbBhA6eYQqQSrwGmhJ4gdyk9xT",
  "key29": "4X8UVVNbLPTkA7AXu21JNYqjBrAGznNVKWHsWdjhusryPoRsUxBYZSzz8oLqyJjLEftnN4eXRdwtFRHSuv1rU3Fu",
  "key30": "5nniMzRrWgw5AoByLPytFACE1375V6iA3T6MLvyKqGc6W9jjxf9Sm8QoxwMRvPQZ2hPuJbLrArsmjC1FuHrMeVqw",
  "key31": "XAaN93DjRBQ1H1h6hzaxog1m9EFQ1zwLFKVLjQja259yXt6RFEVLNWnYK6uKspK9oLJqQdLYCSd5SNbDAoQ7gBk",
  "key32": "5pxnEwSxgLsqHpNYeE9RsXfsS6KuUmFPzDv4dzjS6Jk6fqjPpQKXE1BVbLgEFvha5nzN72a1ykBiGJgkkbufT5hY",
  "key33": "5hmqt8G72YEeoApLKDnVxBjPk8j4WZ9qnkTYNoc3F7ZrUdShcWsPr3tqH7WfL9zj7rNvS5HZQeTspoEsDWsBAS87",
  "key34": "4dKoYM97cFsTFFRKPkVmWcLMyRGpPuC6fE8K5dU91tQeHh4Ha31xcDi9G5PDidSHAdwJnCoViyRx3ywXgtWg3rkE",
  "key35": "HuYhdixsWctTQz2WmKVcWJSR9GsCK4skqppYjkrN15eLkihXDaEXPopEsRRiPg7hLG5KFXVzzonmmwSraoiQfB7",
  "key36": "3UhjqCPnXayZs1W3e2WBkPvFhipBa9LCddZiHtWtFymtEBpmnNtH9n2M7KwwdLkUxifQCnUFVDzMATppNX9zdgy2",
  "key37": "5sWKXagWWeP4ypxPst9z42NsaFHB8f1WM1qbn8rRDSP2nTWKGpwvTndEGrnzsfLNAVseCBsvMS2QxmhxJscvdiju",
  "key38": "5Pm8cLzntFj3pomCMvfLEWA2kQsqWXEzMCnqJ6YoBFMS9okrMrfycDAEtkcwSritzrdFwCbMNFz1akaoJyKgLW7T",
  "key39": "27chtzEU2HqW3AyrMwaxSvuU5iLsBycR2Mf1pZLoqPNSLye4yfY1mZokB6ZLiSBik86RNZgZpBattMiqPARUw37Y",
  "key40": "3PGto3x7k1D24kEbWFr3E5hvhwZRtzupXdPAo9XjZZHBCKSnbQ7aCkHLMTD7TvQutGXduztrEvHbPDf4KoUXZXf7",
  "key41": "4H6zuy8EnMV3PkBHEdZt19BxpX41UCusdgmriXQ5T4ipCGhTMMia2vz6SRsF4mL5KYKjDguJ5PfJu6MgydT8Pn5L",
  "key42": "Y4tSd3yfqraDevikbNyjSP3wyYEtnL2soNwbdC2KPbfk9vTQaBJnqcA3QGm69k2q5FAyzr6j3HYMatZYEFagVJ5"
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
