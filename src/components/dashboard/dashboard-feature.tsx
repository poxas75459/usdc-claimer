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
    "2kNZrPw2Sv4EMiV89ymXVhHkjQ9zXZqaAqMiAa3xrR94KjqHUSGm1dR7CXJHAzxy4uPNMSa7PQgV4FBhrsGwvZgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1P3udAoAQ4ZdGmBMMZ5FEuVy2wRD8ra3cMh24PWtbPxREsD6so4nnSAjcG2qravSDD2pCcrncSvoJ8gd93NoAeU",
  "key1": "5uqjYEkJa9oKj9Qqna2Qsm6kVthBszsUFiRv9r8mmKD5KmhuJXakGwetRujNqbkrtT9sNqP4hAHPiTmRSpbj5eys",
  "key2": "4vG3SU6HkbEmtNKvHyHyazsz54bTGsmqJXgucHzCQKJE8RabimCRM4Kz6W6mr6REX3rASa2KXWvw4hzJYzNxnMHc",
  "key3": "4RdzpXio2Cg8AgpzH9CxcqWcVosBBr3CDaABqiziNh3f69p5aQspPfMWLmQCnuyZ2cJMZq2kKRRTtmAoJXfTA9Zc",
  "key4": "5MLabN8u48bqPS4DgnBbykPKvZx2pUF6uV475WEbNE11qV5C8BxxYPRTEhqnxPykUqpnvoiFiHQptpcKxbJRzGLR",
  "key5": "5rS9kZ4PjHwksWZUw2rBUkr42o73mXT5pgJtvV5nLpyqZ5TiiwU4kt9BuyKcGPSAJBeeoNPYXKW477MyRx6ExHQv",
  "key6": "53ZnmxPq6SVvt4Lo8FGy9Jy2eWKkhC4virsSxpceLALzUCUGfBsLVqLVBkQW6twHA5cCvD7vSzqSX4faH2dkNaXB",
  "key7": "5SbWAsNRv7t7CE26tuG86Cy9tkppEUEcy5LmRPsRKfspqkurgo1UQkx7jZQNJ4UQGvTuCnR3FFYrtwe6pwHtYkVU",
  "key8": "kYs2Fsbvr5NBRVXm7qfF4T5emYCgHtoMAnviDVWLcqxJZDsdbeTrWeo1Zca1ZPfGqL1Re24XC5S8aD4Tnd7FeCK",
  "key9": "5gnizMWFksCAhuqpjSE4MoTswKmHsKhKbQBK7KjvrE5wQuPjrSxym8RfagHubsisHGUDVyzYWXGeiaXXuDCBpuPQ",
  "key10": "44AKhqEW5mFotH9re3q4agQQZWnJ9LaVmU4iQ7mg8Jhbb6SXj5944QkfjzbJzBsueYiXfyRgmFuyQUXowvjdaXn9",
  "key11": "dQKb4wDVLtaBgAReoQJdDqjfwNy4Wp6s8fmLf71uncUYgAY9K9Q7ZYsZoUd2AuV9f6zPsNxzzm6cgnSbkt6Ypvh",
  "key12": "47yxT2RDLq5NoNRk2eJWembk5k7GisY96fMubLg1jCUrvBkasTzTxQsmuyNxo8ELwz3WuCTYx5uik2thZz1Bec8V",
  "key13": "26f1LX9SYahnpZaGmtBjfEQr8t2bhyXHLuLeCCykqnyHzrrd3XeDNTqAtLf9aHakRRFH2x3FpKUzbF58J3fQC553",
  "key14": "2j9XxmJYj9Rh2oMLMsTe1UqHayvTJXm4WmtxVeyhYwHwBjHR5MRrvsQp1hAY6YNqnQQAnS8LrQ5DQStUurCAVQSg",
  "key15": "3PCReyqVgn84aSSvvGp1DaoHrunVHFGK2UgAgJSVNCUo2t1nKYSPKbb1KYhw8pyScizf9KLPFk7rJivAynZS5exd",
  "key16": "59QG59aC2BX6PkCrdhRzYLgEdcgiA4B3VUuvCfgoj2YCkqR5Ueahi8Jwcdia8vFiBCLQHBztRKGZBTnSK6nNBAMF",
  "key17": "2sbbyHtMv9hawc5Mqebxt48B1QMzn586Q35dx8iG8pAbx5yYLSvNe6tofnS1yZ65zioF1fwssgDyjztkWVRRv3Rb",
  "key18": "513aXJHEUtNX9QkKhfmN2z1L5N5Vrughy96Q5Z7PKQZFqyhBstrJNxCK9zg52HA9iZbSrwAqmDmpjGoo2pV2X9jR",
  "key19": "3bgBc6fG2Xnmv9evMgoDcMEU37t81bWpzvCgKZ8b5vFCUABsr63ExD4X272Smsng76PX8ixhSp4kQLWWCFDWFkzL",
  "key20": "5D6XVubhSC2pzBLv28zf1od2Jr17qtMNduN9MChxY3XdWyosmPWHht3J8NjVVheukpBKM1JNVN5vnWRNvoRjZHKM",
  "key21": "3xEgkN6CAmV8BmZ2KqJfRewb99g19n1JgFCBx13C3L9t4fUyjWXKMq4JH2L6yc4dfvntrk9Dj9qgRwG3spjtoRRE",
  "key22": "2r3grQXZjFdgvNSi9nSC1Lpv6i5xeWRWzueXvF35JLeDbsw7qyxiNCuBJZU1ZnnAwhTQmQMj1fkZuWhMiD83jmUe",
  "key23": "3921tEkzFHTYVqK32ewe9bdwF3waKQsYDai7o3LkLbHDR21D9uuh7oZiCxfYrHfRJdZy9WUK4hN7iao4xFF2bxzB",
  "key24": "5K2UnDK7VMBCajkyt7oFj17YWBXHxr6bzqVZA22XpNsEUvhZ79YX15DotceyQthbkdeVNojvMZPpic9Rkng5utiH",
  "key25": "2PWSp2d6sp1Z6Rv2QxJmaCK133WkEVBeAFsfBjyypyAPbnPSag7oBLKrSq3SYeTZ3WLHopRui6MYMrYBABpAtqAW",
  "key26": "y1jaTZRRvPHkjYmDKMEPMUX94siUKGhwLudu3ZHbToDVrBWyaLpbryWjLNRufnEfaQRcMVQZFQRNvMejTUnjTEU",
  "key27": "5kFivRA47tqcVfXwH8Mt6GNJ7B3fLThzr7F4wVSKJyz6M4w9x5B2uSJfPA4QhVoVjv1VsRdBivQztcmw5V9u8We2",
  "key28": "4xshHfXDn586ffjc1amDmE36sAmFTLBsmmCEVFomVqQmW1aWrNs3JD6HJp2rKDtvYhar6pcFoHfFv79d11P2qqjD",
  "key29": "5VRmKPMgfgnsJdudp7p6nuvGHqffgNhPBgVJoMv7dVAyHNfNnRHP8KaEJYDU4QZ98G6WdLioA8uqXNayZaxKJMz",
  "key30": "67EvR45qDfftLSVZ8GFu7YqdPP2XQAxmmbNdDvVPbM2FYV43NMEDHJgGySNXKuxFbeeXYjojPEkveR6NwTghLWSG",
  "key31": "64Hu3mn1p6pFzma83GU7e9QbxMTQKcctyAkJES3ARKKyYYYcYSdeubK5Kd4hhA91jRa8V1h1M98Vpg91MjrAjKTh",
  "key32": "3dZ9knboGG4bFLsaBvxeyq4hb2QdPCuEFrW3aKxHyhJ3ziaxA6cYraT2kF1TdhnA6cEzNz8PGt5PtytaYPm7e5T3",
  "key33": "NsRYUNsJpP6VYwoBbFviKu7DMPZMdn8LXVyBM4kig3TG3mQVWBtzuvKJoJ9w78p9qDEsrqLwXb3EZx779Hp95p6",
  "key34": "4LKPXLGteBJBx61X37vfUn4mAahcN8H6euWjWQegS3bZM476vvdKBvCCTFLEe7iKHXUc9GUfYiovu1eCwgKgRJD6",
  "key35": "22tgno1xB8pgfz5pAeXie4ZnJjpN9KbHPrHHqB9R6Mou3rJMjZbRgH12QsRLCjs3hxQv6DcpzbMoVoCj42R5G42Y",
  "key36": "5m8qR4W9hBHTUWUoBPhjm2paKiJHuCwmkWHNoCtLjMdjxR6dwdAyJ4nQaMAK1hL8yK1HFCEB64nH5DJCEMYP4ywk",
  "key37": "35Be7z9LUNjY9Aey2Q3vjUD9gneQNJoHmhhKRN7exN171uH7znLA3rPdWi6Bnaqzqo2c7DUYo1SRf1CN3ahydUYp",
  "key38": "35zWSCAZTfTvNCT6V57aNJRDmDJiR6QKMJtxmQVXi9KXWYBX2TETEzaccj6svwsNSnHQxgJXqC3wFGn25gpJ7kcS",
  "key39": "2ufCw3cxwiTPbrLHG8x1nT4gDzFANMzGnqcdkUpTsdap6vwPUuRbxwwK4KDw2qnP8ZusABYZB69Ad6VjGdbZ3VSg",
  "key40": "amH8H9jK8wpazk1qqFon8vmmMT29vD8YHHZSboz7icpYsraiKc5Bd4DbrdWwZy5689gjYMAPMEP3yi5jCeC1YxA",
  "key41": "4MbxgTMmL5YG4MF3zsVeLWw4k3Uxn7kxvDW6kK5mJa4HikzZ6tNvjbBz3UiYSDC86RhpyA8KEXVag3jBKfYy3BiP",
  "key42": "Zy8XziYZeuxesTn31vW77MHFgHtFXRG3yavfoGNErFbxyCvKuzWCzDySoEJQwFLt4jg9a9aUnDoQ6Jdr6c61x1r",
  "key43": "xLMhewYRLuf211P4C8rXuHavNrLwBVrumudw4BvBeAbJhFkaPLksySCQbGBeAFgwT9mMvf5AZ4WthWKHwBG1TNg",
  "key44": "5UhzGZEdytGzSHku6haVTNPSSyMZqs2oz1MCqMP6QizeY8QVWm16M9QevCDML3m8YkDmC2dt7mbhwXLPj23UqKKi",
  "key45": "4zrsqYwRt7zovgLF2EK5gQQFHwnXrKphQ4gJrdf6AjiSnDa2yRy3p1TEdFoXvampASLVuKbrMYYDoqhjMCy28dzX"
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
