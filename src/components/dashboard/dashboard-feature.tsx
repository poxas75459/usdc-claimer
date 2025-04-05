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
    "ykKespX9owcXtysd5o19gJBo8AN4WWWjQJJTYQnfX9My7gatpvAaDmLtmJosSX4cVtPgPiZQV7Yn3LjBm7qC7Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tsti8jMhK7cwMw74TRYEiAX5fXtKLuvRJJCHiHnUq24QMAzuZwNYP4KntaBte8EP7887nhJ6n3nLyGKudDPHu6L",
  "key1": "63qq471D66qThjKsQ6E4QnqCifUM9vZN1UKYiK37DV3eMKVucW57H9nChLt7ZicTb5B6RhUfkcaUDGYNRqh2qJpE",
  "key2": "5nPAC6AWDcSiJZsDQqffdw7tNdySmN8satULYFdL2jJGrQUHDUvZwKM6uDQFStsceB2MKLfyP571Q4ouYUd1EYtb",
  "key3": "2wzqhkZDgQTsFGbVsteoHYuBCmi4kP7eBNWyaHMoC1h1yxeu6RxXJf5GSuxgLxUhFyV97UyxJ4oNyxuC6fSPNZX5",
  "key4": "4n4EyHKq1qBesPoBo7LJFVhwtULfpCC91zw8dkZYWDtBC4NpLtz6NGrY4ZA4toNDQc2cKtFV9yNDAJAjigATLnF1",
  "key5": "RwaaeYtDRMtgKXswq1kvJ98V9YhqcbwT9fma2XewnX3xVh6FgMduuEgvF6mzGwmC9k642bh4ESEdevaAJJePvVE",
  "key6": "58W5Ts4p6mTGWD1muyfutLatU5mmGMjjcwnQcJPkjFVksk8Gw8JGVBR2Vf3g1mETEuw2eYxW9nLcFyzUExFwZZTS",
  "key7": "3M7AT4aXkMq81BdRoCnjcnQVZdXqTcC899qJVeuGKvZiTvgNxjYi5yz58252cFjwS3SGP92tnwdUk28Y5FnGMqQM",
  "key8": "3uWyq2uSkHntFEBb7cHgJeL2iJf2iT5yhabm2EZEa4BsLn5NaMa4uThjkW1hYEFXaTh7xZkqsJHz75yBit2ganHu",
  "key9": "49HoWAAxXAcNsHxUCTGK85V8Ek5fYWewagdKme6beH6m9Jv542x4TZ4vvUrBx9aob8aFTUpuax5wtAM3Si7247eh",
  "key10": "pJ1iRw3txkSJ9RaG5dQcoTptf3vHuneHNAtV6x4VGSo9ai9moPoyM8SAxZnSmwvNXhKYJYemcdmS5vpJH6LwHzu",
  "key11": "4zWzJJFXNAZQCMTH7EhngCAHwKCLfnFTF6ECMo5dr3SqPobSiXYdip55WqRUT5UDvAy1n4yZperRhBx7ZCgfXJ3Q",
  "key12": "4PSG5UNinmyJpdbPohyAVBA1MRWyNdLP2157vNG28Z6CKEzeDNeRtT7nPQPpGbFQhvFVJ7JbJDQhbFi8zuNGg8Le",
  "key13": "4YpcpezJw36rP78tqgwjDGtiidrwe2vnxXBCZZSnonUNCtVAXwBfEtLkbF4s4mL7cWXrYJW7J9je1etJJLcaMnAP",
  "key14": "4wpePotGLz6xiZdSSDKahHDFN64D5H5zu6DYAVD8TD28wg7yw9FoJBMuzN4EVpiXEYQxprnm8ULhrBJvJPVgubE",
  "key15": "4mkucHqb1DBHfcYbpf3s7sbfgKms8u7CQ4dbgBr5sorG1Qhh4mcELsM4jonJx3djQipRbkBaKVL2tR59opGNwyzb",
  "key16": "489GyyQHnyFdTJhM5oQRTV71RxyfPdAjmTJvX1d8WJfYcxqvtPVmnKqn2BbLr5cnnrkGniBBCY79wBARoxDVpa4",
  "key17": "4hpB5WaMp4pAfxYSThMyMPrRBoyWXdxaXjbErzgjETY7tRticbcfVaCDCogTM2jqkHL7NR8SrVTkVfFXiSmoTJfx",
  "key18": "ii3sP4GTHnCNCs59tAJ4SrFQVbXXtwKzPVSM46RmFu2dedMK499Wyfq36opZoK9eT2sy2PVwauey5ccGDFwKJEY",
  "key19": "5eCNmMAsqR1Ji3woLmfXaUWmRSotT5r299Fr5jgPs2pE7Mba8apVrosoKhidTwrjfktPt7LUWgGmehSdru4kJ3kc",
  "key20": "331ZKThGStZJhgkhovpWHviA19d7UxfjGFfmmDFADDbSbceVTXyrEbS465mYM4Dw2m1cs3Cc9YhfkPrgpYW44zXn",
  "key21": "32oqs2ozvbbg2kG5PYbCByASBiNZ7ehrwBR6EXpnWrLfvUXbJS5ttC3UTD4Zzgcp22n2R6CgaGArpJUyRh2ZhCPh",
  "key22": "LLXL9TosSEhds7xM86L1Ud1Wovzn9CZgCQqpFSvEKCNP4vbGYrsCGr3PG2QzmWFJMjW8UZwSCeWf6pLDGbGFT9S",
  "key23": "4eHGKQJMN1YaavWy8tAvFhXUPFXmNoWYDGL3hJTWPtnnAPcmvscWjYh2ncHXBEV3nCnhqt7C8P7jF23dowFgvQJo",
  "key24": "3JWS4RN2jFNb3Qh6rzCb26ZCio9KkMJknUGW5md4XVPPoF6JviAFm4mVYBK7bEg9VLTG48boZ9fXJzQYqGRsmjXY",
  "key25": "3cSCPDdQ6mC9pR5YycVbxu6cCr2kqQXJ8CZPeesijt8CWwU9yTjXrKg8EHGs7g8yLybc5crDqCHMx4CTafbNeaB",
  "key26": "44BGhaMeHWg1rjinPWHrZgD7KEorBCjHQwgnf216aUteqoNJKT6xgk1Ny7Ry8vzsbCGeJsuyVVNQV7BZdBjyiSad",
  "key27": "2pMWzRHvFthHDTARE25aXB7q7zgPVvWmqeaFFmHWTkyLuj5DBgYfGhR19ZAVBHNkD6XLyxhZNJhtKMj65frc2yzp",
  "key28": "5zake1Dt6WDni9v6abWHf1YqSfgyK2ht6XpgyoEbeKPyJJFZGoyVpykswkqQhjEUxf4TxoGWgbHdfXPeM2Y6R6JR",
  "key29": "63VA5Vpvn2Nch9SUUQEJDzfZGsd9K3zYcQg4LaUzcwe3FCsYamUA1oVjvJvz1pCRKtSbT4eh6BWshVFYDPeh5x2F",
  "key30": "5BjuS9NaS5VpjQ6vCws1Xf135NSaYEFrYrLwVNQQXosms9uxACm9ZoYAAxaEH7hsfDk5d5q9Z6uYS4hDnvAhcArc",
  "key31": "4QCD9mdhXJTKXvoQbDZqQ9PKEGT2cS1Merm4VYPci8RxnAHbbR6ynNUs7yjYurV62rt6Rz9PpFniT3pCxzuf66K8",
  "key32": "2QTG8ZY6HVBK1xVu6fYUZb1ZdZo66CBschuGMkkxzjeeUyTeZxSEzBf7eYg4VWCMrG1nZMF7FNimvMKNTA6W2sCs",
  "key33": "4n5BQzTUdSBb5CndUK7pvt4MvFPtrREQ66ooszA1YLacXLpVPmyHgxWYDFBRrFzyJqLSwSXKQv7hEPG12qCV7S2x",
  "key34": "5jJTjjptZ4LY6XVtfjmhiDg8VUDDrSjpQk7Dp5f5Eua6ASX8bkzXyCS52U28U8EbTRErJgh4kr5WVoJURY3vdGMm",
  "key35": "5ENzQAFoARwXuMZnLm25eTtewsiXp3MeLRTuLNRjxdKd1tJwTygHqiaDvWdChetrRemHC4TDGorjR5Bk4zJCUaRX",
  "key36": "5raN2XK9xM6VeRc91trbgDQtjdpwfAXPhPsju8ZGsmprU45idJvDAdrxDkEBSbobwwcBJxJykBVKC8gCHE5gFKLu",
  "key37": "3hMxc8ptWioqmqicTL3Qj22K8zndjmMB4jobBq7jxN4vtKN3zoheAspVWX9JuzCeTTcxhdHmMgwgydJmxhSt94Gs",
  "key38": "koff1VYYJVYPZbyVEabuaL73povGeKK4U1VyHX6YDYWMLZJfqUe7owRVnrUxnBU7iWBhBS7vVuPPfskNKBY56Af",
  "key39": "1Vf6Qqbd6fUtGDFo1tX9Dd28bs6nzztzpoE5ZeJLxj5kwe2kyKV4scgSB1kD2ZZEPgnkATcEJWJzfTaJB7tTNgQ",
  "key40": "4zaBZpr7gxSFPmFmMcY5hZffmNYQLo5KvDNNWBgd6Y9nZNgZiwUKy494jT7ygCi8Wjv7CDzAU8Dm7upA8gJEeq5u",
  "key41": "58Xm9pABXZQ6a2MEuSSfkANo3TbuuH1WghtYcieMzNnuWVzw2rVGqFgkzdaKsNG85uxDspDHKwnKoDkUT8mXs2tH",
  "key42": "529TPKAqT56dCSVdnuveZ7bSXvGJnwMfr1hzJAefnHK11RjV5DijrNCVC5NnchLjjp3UgzqkK4RKkK5iETkiFkaY",
  "key43": "3pnp2wKwyykyzfsa58bvgS2WMnBQTAvjfdDiC2wrT5UfQaGQUTfby4hgLfLNESJumK5VRoNjDg2mfWN9diduxr3g",
  "key44": "65MwbVtq3nDcAgCTYH5pD9z4Kq9Q13pR7BUQZzhvGfU83NgeCzXJprox4j6PyjQm29yhMczB4krPnUeDqiJfjqi7",
  "key45": "4BUJGgCyEFmFTT8tDv81wcya9gYa69Cey5DpgRf66hhmHtLBeMFno4cHZ1pSvWj23SViAheGPrp4EF4BrQJpKSYE",
  "key46": "4soVZY24Ctj6sEr9CdWDPQu27MaRLS2jx27YH4wv5nktRFhQY49Y5wRsj6qeXM8BNzLyZVUwFjEHNSqF3C3i1y3b",
  "key47": "37bN3XvLR2UiwKY1QPeqCVwD8WQwC9qWGHDeD8CE2a6EM1LGzxNY6aWKXUieiHFvsvV2TUmvm24PVQZC39bHJK4X",
  "key48": "zo5xih1m1Ds5tpVpn6ufPUeufzXEXUACnBPY7dqVyKdQbn67oJNVxpdRkRjqBMYLhHgBAkfT2S6HyGCsGVHMu6f",
  "key49": "evRQjV5EdSVTzFqMU85pABp28dk1afxb9EoHae96aGBnHwfyYHeyUXh8VKh7RYL17oJktAUBQBbzJNKa5tZPftE"
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
