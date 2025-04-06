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
    "2Xy2f1hyjgnAdTjmjfnJ4UkDeYzGT2WkwpJsRvLm7kzPuJqfN2BsTSGoCvqQ1BoTvjtpENJKwsoYUpzUmutnrYhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWxTxzs3YGaeBgrKgGhEaEx8S3Lbsouw6akN4conCJZU16fwe8f1m566K6aaY83bAhw9m8xSA6REt1c7YWxLeUh",
  "key1": "4D9z65tZDiQt3eihL7BssthjYVkBsynvXkG6n6KocouSWx3YcADfS6fESwEAe8jiXhkzyRyusCSmtCvccKPKPgdg",
  "key2": "2VUi91SMtoRTvcWM8KgzgWvhaDUQoRaZV5FhmL4zCw1PdTGiCZSZqSJacoWbokX7pZdjjfHED4mqxEevE1cTKVE4",
  "key3": "2f1x13BKBA6Av3BsfGVSQtrs9WHXPaRPpSpk9hyLZigT6gSEBz9SNLgkjbZNCnzay3oUtqU1PWzkVTPXyQwHdBqH",
  "key4": "4pyu4LYqeLVRc5RAd7Hpdyz9G5Xn2E6siPuWpZwfTpmA2NYWSGPoke6sPMJNWBgWTKPo32SsadCcifYaNxNVnAWN",
  "key5": "35BgHaXNhhHPnoDXGaMrnFVY5x1o4oWwrEgVUpnvq5czeRkyTfUPkmQWoH3EHC2xESqbWTKLmLAYkTtmSHRiVcgm",
  "key6": "4vYRB1WeZkoRxqXwcqUmBtaoLRcyJqvCKpUQwoqUsN4JiJRgN8PhHRmKtW6Bjg68WruH6PCz8hsfoVNmg3rJieVV",
  "key7": "3V39bhkiooqBvjNpo7hqbcGTHqsX82oVVDhR4Bihh6tMcrLr8Yq2LEUfPDXsccJppcnLz23RtYggE13bY8BfNPmC",
  "key8": "4XAhPjVwUgRCuv2rUde3jpJQvsj7FhLawiW3TfG3ZPeUxkKnXj83q7ExxFEG1H94D5DLMDDpF8C1sTxSUcAZB7U3",
  "key9": "2WfQ4EeuvLG7eiekx5YwjjzWLbeznoDdTQitTPCQeQHrMJont2YjnLXAZd8kcXpAS8ArJNR1DuAo6kieTmN5qv2L",
  "key10": "5yNZmu4XzsfY64ixMXzCq6Jkr1qhEVqxGDP35a4BJV8TNeKSGtdczxawP4J3ywf9QAxYyC9f6rXzifLM2jrGsjXY",
  "key11": "NaV6cKeEyTUDAmtLTHNjzcMRVttLh359BApQpDx457Be3kLcGXmEcFjn3LFFB1VG3bDSmDcT92iWCDp8Fh9UR1Z",
  "key12": "4VXYL4BMg6Zq7SLVNrHdycYTZpNGz1qAamoX7KgrqK9xKtfHbGSs9tbG9nv5n3Af1DcSu7P8hDLqvQDN2JekKqm4",
  "key13": "3MWxwYzjDdXu5mB1xgH6R7UJ7DAqtT8LM6ysnPMPXTQfthNTA9uwddisvBRxBuZ16ueXtixFVzh8EJVkju6Ah6ea",
  "key14": "bLYUJkTm5v4HHeUa793nCqYfoHGZ5nybHhxbHFQX9kaLyVJt4Br6eyV7HbceohSe4TfBYjgr7qcb3PMpzYYt5ZK",
  "key15": "333kXupvfXmw4f1e6We5WwH8NbnLaKgBUg8irtfvSRYXBQjgpGo7caJQCdbUL5Mdam68mW1ABxpP8tUdNgtScPTD",
  "key16": "5KcKHsZJiYCAoj5GBP5zZ1KJEXrrTSsfF9Mr3Zqdpk1KZM9poBGKPaRfsgGCEegsyJHpnqj4YG84bugu9Sjk2Nno",
  "key17": "2e3fT17JuvEyLXQU3HJo7pme9gL1iohA3HrN8ZMb8uqG3hRmy49YwiLR9asY5yDwp7dy1z4Dc2yfi6nNRnbgqEDA",
  "key18": "3zZikRExeLMMq7q3E6c7oX73GceqYip8ywy8m3zKxWSG4Qfwk7gSiQvYfcvaZQUAsrYfe381aXAovJuLvjN9QLLH",
  "key19": "2fVeFrtgprXtLGgS1rvrAV1UYQ5GFqWD2WrTont4Cxjn1fy2Tn2SBP4J5R2hLD6oM5Zw5EjvUm9cZARY8Fx3Tiam",
  "key20": "5n6djErGTiWNgaL9D47MS37pAkEp1KvX1M9PMSxVndskyb928MU4nkEuSLtigZMRpSqG5CP9vasXF3CjJW8o4yNF",
  "key21": "2p3xeuezZfSBFazd4LuXG5ACnbdsnXSARpw5HYULK3twSFnWKbjW6dgF2rYL5HGuEfBB7SFbTvMLFWe1TY6eDuQQ",
  "key22": "2KxAmoti95SPBYnisL45bGqNcqEjk5desfmiRjmcw62ZkxDFBcNmGid2sZrAjGrsoALyMVQ2LaFwUQVq9v6sNEa7",
  "key23": "3buciWeAB7bwDeqocFaSmDQLnEMajUg7P4VeMzDnGut4SbFGTvyLQvT2B5mW6B6TamaGFsh9kkNAMP7t1kGfTiux",
  "key24": "PhCqEP1V3eWfgfFNXv7Yq7Rnh7xgXEjaoAYEBf179yLW6rVTYXRGc13aKiBg1j4TQAxigzfr5oNirqnLzPSX867",
  "key25": "5ZFSNhuCWp5e6VqT77WYTofdUNSDuCnmAihExpkXX25KjA5Qp9UYYTXaQ2Kfb9NpUbrdX6ujJcDPp6zUxHBCdZ9G",
  "key26": "5iHJcBvjYSxqLxAWQkh9mCcLnh1XvFjN3tUdb4gRXv4CxhWB8YcqsSsBdKsGaXxugyu8z6aZcA5boHebXBx8jaAc",
  "key27": "5y7MDWPsZUHuAe4gLjeuqcT92bETe1HJ17bPBX5Ws1ZnYTvNHcNMt1pBikX7p374khaFai8ziYH4MBpd8WCdaPYF",
  "key28": "2aoxESy92mzM7K5HdWmPjMG4psGA9eKV7FZGazWxj3xPdQxj8UAiTGU4GuzdJeknXpadwvDao8HtMTsWvo1stnUh",
  "key29": "3apEHHVhJRQujRambAcKzckjsL2a1Amev72mtuKkFC5yWmvcwtcM3HsFsaAShv2kieKF8TQvC6Qm99NVmEZYMVWu",
  "key30": "5L3siwca29sBGSJjuB8E7WwhzZobaTx136ZmVkk62J1jiFiojejbZDULn9LutD4Yzofy5FJ7ZpvV2M5pMQdTewKZ",
  "key31": "5Mx5qEztqkot8Mx1XDNbbF8vcPmGq63Kr2ZpmRroEqCYhkij3X2i7BdyFLknY7F9yXAAeiuNWc1vR8GDmDaZsonY",
  "key32": "35MPrh4ETf1gUoZAAkq4ZiEtx7F2dpyAVE3LweCf91vaK8SPXmvA2zgisbZpAnakdKmgVxJPpFYq2XGTVvb21ish",
  "key33": "5ENELbMSUyJMTzvy6CN5MPnuFDw8pRQaqhcNmWVxMsWfqZCFQHMCaY7qaiRQ3m8FARBwp4rE3ZWPoDgUCiGJ162Y",
  "key34": "pw4s58SVVgBPxdkvLeXBj34cARLdpgb76SDLwhX1Rgdc6bp1FzpYeNfxPQeghNJjbMzVrvZtPY5GSqe3kyisHdD",
  "key35": "2R1RTj4VE2pzeXnwrxTvfd8WJ9CA8MN24wfHiJ3w4xLbR6n1MvcSFwrc9zG651KcACumjSMXm7hwGmywMdGskn6e",
  "key36": "3L4YXd2RDqoyen7ke1EgmKoV73ChqyMEEo57Qq3ohdGKaugoaBUBwSBLfNmqL1ZN24Q3Dn8kHMK4aLKsx28vTF45",
  "key37": "2KTGB36QEWBhQHBzatmfU2amrvCW4WtCSfE9ZWMFk4CNTRCvgwzLTYNknAhTzuS4eMbsoAaJkxJx872T74B8c4Cg",
  "key38": "5ji25JjnwCt8hL1iGxXceg2ZfC1quJKkPcgQVRk3Cb4jJMvt6ghx2j9ypPTkEtqbV2LwZ2zWn8fGUuQmkFBSo76H",
  "key39": "2fGYVSfKDyNpHQtHharVASHj6ppRVSvau9GtTNmxfw9TbnfdK36pcB8ZiNwLwvvnWCqiL55kjdvVjxuFSYwwqwbA",
  "key40": "2asNnCAyhFEgm8pvwGemF9r4AWSiicRRpVUjc3wkZRGakpiF6zuGYhcbDiefRKAGbomcLyLjqhxovdYevRAqdbMx",
  "key41": "4zHY3pcjM3toK3oZSoDgLQQkAM25MTWyUUfp5wvL9UxfkjTRJgPe7bXcKQ8gc35b28eMQaLqt4qxm2ShVm1aXswT"
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
