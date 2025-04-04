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
    "5bUoHfu3XkvFsfeLuzN1t272UokXcG7SQyLkyscH4esNruCaxkQEoakejbCN6SFVumk3gpeC3GwXmpxxokrrC1vZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "654ukBwnjtPSenBfaSxwMDPvM4azKFfQ3vznbRHB2dXjikZtZBp1xgTbxoNtzRpSCBFRqqHdUVx37e2jM1xBfPNM",
  "key1": "2WB9WcgMN9BrUw6aAKbQWjw4gBPJ4G9UNXrDNVVs2JKhEgevhec792bK9aEsh3wydXXrGQpZYedKNAA4FdMqjGsc",
  "key2": "2BLNRotSSXWqaEDfCe78umVyegrriAXSEoAGyCzYcgkvUE5CVyiHP9m6fizCCxpP9R7wQzEix1yu7ihm7jdR54TJ",
  "key3": "gKZfp3WAEVMg5o6KwNu4VkBLzYeANWk1wvTEcBZu2GfCRbvnn8SMm3woLZrgDpqXtrE1UURgiW6qH6M8f3cQTSX",
  "key4": "2k1L4myMBJZtQU9bhoQv25YXwa22UJu36QfkrLCrYbAM5UKzE2VCme5yMXSKzKZ7y1gyokYeYgLkoUaPbZr1wwyW",
  "key5": "4zK2iKkXzbFWjQY76eH6c8w29q5u62K8uraYAF9LrzHDRhHqbBccpDFmBgyF5DuLjmFZ7Vr7t2CFkY71tJUmA7JU",
  "key6": "5aUoAhkhZkFjd9GQ51h7We6qEARkKiJUo9s1wKj74Y4XZUHrWEuQ9ZDbMLKYZW9K65XDE3q75UkU5Rc4Ei2q6i3i",
  "key7": "4LwT8EKVw7JjCNLJFMzeGSfH9Zcog2PYdenDSTXokAYMcXFG9yxEUhFzdBD9UEJnqLwrGgqwNUGc2Lm8RrvH4vhh",
  "key8": "2BNxrRBqatEKYE2FdkGvUeFXupgDB8Qbk8LjpMmyX4XhC4yobcHVy6SL4QvJLSJ2VMFTP1rR2CrvCjmLkX3S1mJA",
  "key9": "46qUi35hNheeDKhA9Jx99PmjvbMJxE1sEj6v2LkDAfv3VUJSMb3CXKvznFNjCDLUvh1Kz3FjQFh5UuTQxPACgmgF",
  "key10": "3qYNGo5EwzmDB2GxYAArmJuXy6yT2FkRL2bZvUzPcP7BoZaXa33hdeL8RGD52QDmSshheNFudjPmdDE1CSJCdavM",
  "key11": "hLYbbL9oZd2HcotifdUhZv7rAvzrr5nL1kQBAmQvehyzQTGQ72wdHbfhkiCM6uVmZjpM4LNopcuMGJVHb7ZtboH",
  "key12": "2t4CBAourQuPnABaiUNdV2WCVnNtkEiDANVPxA6Dk45puV63sw3yWk2NYUvE67cpX3H14BfoGCx14vnrMu2cwDdM",
  "key13": "217z8L1XzvHbJPgSTbsXv8u6zdxNLuqAzCjcAmqVbrdLr4sc7svkcjN28pwNv7xiqj6XQp1Ep2hwybzkW84R6frE",
  "key14": "27G6Cg5VETVZhTvX9b57S4yqtzMSacmWmmw7HhrxaNXhnsr2VuGm48myZDAqtfcDCs3dhu92CjT4gxkZC7BrVZkD",
  "key15": "4UKeQ1L3zp8sGgYd2ymXvY6tVuUtXXHUhaTi16tqfz5o6odzrL4xrbk3xkRfYqN8xduucZvD3xKpFpe38xCLnoLG",
  "key16": "34MWYvtnEvpcA5my1pSCFnazohV24BqRbTLWLMeSo4ht8yDCGf8cH59JNHZ1is7rvF6m6grFZMEot7SBFeFe5oKR",
  "key17": "4LD6b4V8qUMLyWc4WGwhPo83AbAz3svn5n2E9eJ4ytubpDqYzP1aJfu4jcsYuN5Lbi6kU5fyN2zcRSTcUN9Ko2Wn",
  "key18": "FvtJJBDqdFE1avywDQG5murKxdActpP99u8fKMmDp17xYVGZoFDFQJQu6GtfhaaiRjHbJNjqN5NjwhVdSrt7CYw",
  "key19": "66NDZoXM95wcL9vgHaDp2CXoH1U1Ao4w1EYNG9SyhNXaySvH2tjBuSTBVxdkDuY6x4bSD3TEDcwiL71ZUJXoh3E",
  "key20": "4ZHcxBiSAMSso8ZLvq7Yoz8eNFUJnUipckWw9afNb1EPa3fJb5sehybMRWaMgDYKi6tbMbizik1sT7BhAUFGz2HZ",
  "key21": "WNqQNkg1TKfFTDfSpJqvEADQgqN1JtyxdcmAP8RbeBqeZ2BkF4rhtSmcPQ1JHG2LNVhCy3tEVLLYTyUooV8akac",
  "key22": "55vqub7FsADtpqRpztGPYeDTnEvK1PazF7mBG3EJMv7HDgfbhu6CbfP9YzG81d8H1gzrLirYgZqjgcDVTst8XWCY",
  "key23": "5jTYCuFHXRzqKzmpodft3CycHb22vubvrpN2oDSBNqQQ2uizeQzHD2r6nsEk8Wkp4xoHepHZGYDrvRPdu6xfo9hx",
  "key24": "4sxQP1CCk7qzMupDcaLhqmmm46s42jDKiyUGrGrQvbg2W6LRvjenLUDNMcNFF8imyGbPhr7pqAwDgUVYVkfN3L9Y",
  "key25": "4hjBm2tCNizbWxaHD2fjs2c9zaN5qbQ4yPk3oxZCkjHHq4BTKZAfNCLp6KXWNMXfGv8SHVDHrEXHG5PX5K6Rh3Hf",
  "key26": "GnjRS6hdAVAjnvmdacAK7fMu5nW8kSyVSYZ3mTxodKaAb6Hu1NVEkviCWKTQNM7UAYusQqtVJz5mjdBRSNXZidy",
  "key27": "4YXNRu6bXxMWavbBAMT1mSC7H3zVZobNJqcBtHuALwebEQdQX95xqzAbUaFtX6qh7hD7PQJow8SyNo7Hz8CwJMDC",
  "key28": "4fMPf99QYiEd1ujWfWL5NwLxAVpLf7DpLYt5SwFTJqQMZb3w29ZwrCUTLxKNsDorahTh8DHZM1LWo2cGik8a43fq",
  "key29": "2UG5zoFk4ySA5CkCrDeFJ7SWfiskBh7Jk8RhNDjDQ3QPAbWiPUkhkNG2qymBb453bAnzHoc28z55EDvuLnD9GLJ5",
  "key30": "3TnbB7pErQy6x3YFDCPXDVvuEzU7nVeTt45M8LPdE8oTXNz4rbQUMyuhjk5qAU3pqjfZboC8cEPRVCmd8CfzuWkT",
  "key31": "2sHKVKdSpe5mrDa5fSjdd9b968dCqjEjj6EB6EzF9eZxK5ncYnAbjet1P5uQQF2NcPozmk7KYENjakMRuRJmHLes",
  "key32": "29PVJy1rqCWkJbsn8F9Tqu1Scoq5yFRoLmTyPHTadsBpw8uDNKvHXwo7oFAEx6NyJP9ZjuJ2AaGxjCKerm9f8Bje",
  "key33": "5AiBbJ74QJHVN4h4cGeBM2ULFHZGtDGqdJHM3doBTj2eMcDq3mDALC2KZjc45hQY4u6o7eJVCU6FsCDjCd7kLZXH",
  "key34": "3esuwnQMhsgmzuUSz6jeUjPcZfqJvCEa3qRSFLmWoLav7FTVD9yCBdh29zyegUEp5A5TGNNzBbC5NS7tezhr1jGT",
  "key35": "555ULqSumoUNRxsNxrV3PpDdMK5YCxMGtUPc5MT1auXqtyFVs65CdncbzGKzxa2HNcSP2Vi8hDeUSjyrK2gasoTc",
  "key36": "42satQex3p9tAc7FM5KAZExz2NNKcp7sjzRZNoq2LRxoKmQ5ct5T7Bug5eZyzd4Nb8Ds6fBsBYCVAJavDPajYpj5",
  "key37": "2M93KYCGNZzkko8UvqxuHjPJrUCz2n4oemyxtoxVMSB4Bzf4VvESQ5Sg9Xdw5sagze8xiXjVNreoFUaUzQoNmkTi",
  "key38": "tGi4kkDzUb1i2Znd27yZEy2tmqgZxPyhoCG82VgGmrR2HgCjaaGsVC8YqznjGz9ynWEL7jziRhfmMYkFCCXf4Ls",
  "key39": "5GTFMRcabAW5WKsc15p22zTiVwVhvhGNdeht3NrmFwdcUr4w6tL2ouSh3RBYMFZscrsqKqrvhq7GNRs5qFvJJK9K",
  "key40": "2x7PRcSRqhNnVDbSxZpijT5iREmac3bUQoBffiuRucRS3mdRuXP493A71F2qswCSnbvZSARRS8YCuzbLezsq7uEF",
  "key41": "5xvgK5kAuKCBD6y2ip1VjQ46sPf2pDr9MajpW2FPJr4sSx4eq3hwkGPYNw4QXkX2cNkYqZ5RQ6M4ETDNTgRxgeVz",
  "key42": "5TozsRaJbZmkvR4xVThZiry72Lrss6LgKfDRmEHmvYqP2DNVcP3NwwgJCEcqaHPcT37MmQSE9qS7RR74yQcQ39HK",
  "key43": "3VcyWdgAf955Bsw6cBLXxGGYtNaMtLpd6dwZzUmhUS47eJxNc7dfg7KSsMnLjfDuj5WDV4xvyNT5romo4Wde5Cyj",
  "key44": "26uYWokFbYHmNjEBtbGzXzguMkqESnuRQ7rC8n92oGfn52xUBHoBA91RqnKxN2LUxoCu99rmpkQCQPZehNyPE4XC",
  "key45": "2V98oVB9Jo3zTpsSnGzqF74PV6fA1t3ymYwaU8QJeVRq5dJSxr1HEcko2V3YynMSLe5cMJcNTVADPRCZRBXDZwFc",
  "key46": "3xkVG4qeZP3mwRbZNwfJaJ8GPKEEECQaHudLjG5DxNWNioHyyC2vwUrmREcZM53AusVfTwx54zgjz9etpgAgkVcz",
  "key47": "31Sg5CbjWjvteCGJViumvX2jwMVjXRo1c5qP8LxJoG8mYGUj8zFpXUccGnA1331thY2tYjiezJAnfeWoeFXuvCAF",
  "key48": "2qHZD2VzMUc1wQNVEypkKsEabJbrRDDnysnAHh9m1kmSWJRy3m1QVJE4vQUgk2a85E9askq84hwPxU5r6mYjXWFp"
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
