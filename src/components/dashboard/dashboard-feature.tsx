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
    "4pkbq1GZfJpZZBjjNZKcksig4n1o4f1Zr32fhcH8Ka5KLbqjt9i7wzJTYKSCH2SFcakCw5GYVbuGqrSBd89rekvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35S5ahHm7tot2TPYTiiVWfVq13tGZEHmMnNoTmCmrrppCCEsWRdtTjqhDZwHiw7v3csujX9tgap5uQZugj1zx7oR",
  "key1": "2Cf1JnHaUjPh1weYBhrr7L8xpkLibY5ZMr3bLY9rFx67NECcR2GYcGp8MbiPNe3wkPUq2FHEJjyizDRmX9FwKMEY",
  "key2": "EiPVXsXWjFSe35ocsgqVKL5GSTtKxKJJfJV7QKvDYfkKnzxakRNqJT3hkaDBhovJ7pgSPdDSvhA5KG764cbUQ5Q",
  "key3": "2q4hfpsf4nrccc3GZLDuqiXmNJUyn8DAvvDtxek743ekTArkZSaMAF4JSDDFNvkX3a5ZFbr33PP7GMMikiPgDzGK",
  "key4": "37BRMs4KXq4rw1zXQbRd6aGT4jVsUSq65TFrQYNZR9wX7qrwKetQAGWGsGzJheqKtgCVXEXa9R5sZgz6R5ziJx96",
  "key5": "T2SRPJPBbcf5pS6TmbstZ8caWi83kWnzrZ9vG2Uu9oQG7EusAuo9wiPUNAvn3bAYKoNw3XMmx5rJre6xGur7iVj",
  "key6": "Xw65exQD3msDULav4QrasDzS2DwT8fRFy32H92Dm8RC8xM6kyk6EyzKUMmRxUt283SzekmP5e1aVhriStCAa4oA",
  "key7": "23zk38GrX7F3eoTFb98VZUqky2HpcHYVEV6F1zuLBT5oAiCpv5NgRzDY7xoyaKJXVPscgANCkBokZPuT2m4espYV",
  "key8": "C57cEoVkcGbfy2frSULiBTEKZvcqG74oWDjZ8GqdtswiZwCCHivPTpfnNasw444WuZ5tUpAmAfmh8GN4uWPnsma",
  "key9": "ReK7TJcH9i93Rk5tVirDPPKf9z7iEgkr2QR77nXSPmbiz17amdrMsSjmMYoZ9ADVucT1Cvhtb6yLSAncqx9PfU3",
  "key10": "4AbGLdSDgGMV9nhYzGjebddpiw2ejc1yRMFbAdNewvnvuQms3HaD1h51kGkw6uyxGfkbiqSJJ6j6wVhw6MMemLTJ",
  "key11": "wRHdSD23uAXsXhxhNjsUmRR4c5gLS2ggvocdwayUC7U8ZjMYvPHT4vKX9G4NxdfSz1CaKRt4P9cEC1PjPgd5wQD",
  "key12": "5BBgK4UkZPHSBvxB26mbev3fGX4seo3raRBCiC4DBV11C1CSWKmrbcqs75Yt5CJHdbnyA7iqg8rLMNCwJW9yKTQ1",
  "key13": "2y2Q1JjNdK9D6PLEyy9AnWNC3CV5sNRpPUvJ4RoyKrqABVMErSzG13SECfNj1mzSxr5XBhwMpNamyUKs8kVrVbBQ",
  "key14": "5UCFQgaKCmqA7jBgMfTrFgv7mFps6TBsyZxsb8PvuBntPe6eQZ4VXWw4Y3kyb6FjjAKssh8fGkgpbuY2dxShfFNs",
  "key15": "mFpFav15Wps4FUySyFbxB6gZcNXvsWDz1L82Jyo8iNx3fFw7JDuELXqJRYwyN6YMMaLBbvf1pU1Jxf6d6wk882K",
  "key16": "61jhMpAUu5aAShNqZAReaiogwg4tw8jhaqJXW9fPW7ZGSNdRzTFUQmSHcuC5hh9GKFQ39zoauZkXSwH9ciyGefmN",
  "key17": "5yKdk9SqjZbsXZ7LcpAREh5NaZcgLmT47QL4y1eJ4y9EYjP77tE2MbPG4LdwuZsYa3WZjBFqef2KxnsiYwmQfwNq",
  "key18": "bkfE4qgTXhjoDitPKZ3TeFQBbWdrJkwcZVt8HheDEQJAz5eDJHTDVgF77XsSoJgGUEZ1b4iHxfoy4eGGk3KnAd2",
  "key19": "3su6np7QCB2qD8e5Jni7RUEY6sz8TXf1jobYSTqFtdxCQD47vdhcRN81wvZwumGXdPUy9X6pTtPpapgCQUfepUBf",
  "key20": "4v8wAz5r8uQqsG1zu8x1vgz3R7FNbuKUV96mc3G3PbLmwpMvZ29gqJEhrLLF52JAyTjbLu5gNwBsE2cScfLya31E",
  "key21": "5nukEteSGNLHHML1XvB4TBUNY3hmEXR2YdW8psAnUX3ATCgr3S6YNtHEjDBdXMbQWYo54aswsN7KPCYDiBaSX8yr",
  "key22": "55hWJbH4A3ESEMhoAUco9vQvEjucWN6JUJ34gs2bQ2VijYMLfTJCwWizKEAkMRjzkNnrcytedCx2o7NQNkG3pbua",
  "key23": "24K3QxUV16MSrbcLzpezDeu6vevXgSiBNKgv7Yc3znFRnC8paiR9z5qn1EWUsHGga4jknhahWBh6okRePa2gN2Vu",
  "key24": "3yUzDWrqHsGV2TTxEr73RPdWhBUL1u9sJLAyxXByv5vXgbAkrRb9KWhUtpMJ21FdRxx3YsBYeFWcLwqxhA93qCgu",
  "key25": "44Xz6XxQ4nQsDbtU8Av8ZHVE6wB2d6udQKfHeKyp7rEkz3YnZi1diQkLt2BXr1q474amDxcc5RAKHsBG7jyf9JMh",
  "key26": "474Cj6DbqexEXMPKekdMmACFKgcAySBtNgLwFmTpnDbhDSdj1JvpVZzfqkvYDKEvdBftTu1L5hYShGRopbwUcpwM",
  "key27": "2w3jaDf1gyrwiYrGjXPe9gWryoKCX2g2aFGQTkvkKzN7kA4wUcDTAu1TS6G7wJPS5gi3CWhdMi3fuk86nfgjRC97",
  "key28": "5o2EYwsdDraJ5RQvD8FkKSLSEVXDvnmjfuMumbCi6N9PVZ5bSCFFXzSADG2LQVgPJRUK5gHRdpZaig9Ue4wgQD6n",
  "key29": "5Di8SiUs3BwcYwsqpU4mr2Eqm2D9BDSpN3vWgoX8VEhfhA9XA1btuLr21a1HwhnSZ9aPe1wKKyfgUdZCJN2hdFSN",
  "key30": "3NNtTRe7NLnJRqL5qFEVsdszrHo4vB8DvDQ5YnkNDF5axgZAVU7P68aj8bxWaRoNLrmwJB9Gy4hf4nuZr6vo37d1",
  "key31": "4DDy3F2viDdVjbbAmD2AgSLhMH2inrQQC1uGCmN3ucMnmr743vkCKQUch5jSF3eKiC8v1627ZsNN7978pAtVBiHo",
  "key32": "5rhWDsi63dxBcE4JaBck5QpcQZqW9Fpj3Zi6h6FPPJFTCKfDHfuWhn7W8vfoQdEP6ToxPsiYkkFu4TsENr4kiJoE",
  "key33": "37kcNpgCh4kQ3V4URRkshLUKjcmtx8NMH5efAQxVniDmFDmJYNSETfD3qfWjyEuep7nv1LA6xicxnGDHWjuLcN5i",
  "key34": "56qA3PFkx1pWSALpN4Y1muP2rkTRfDHbpSeVpuRxA6qdtZdYM56QX7RQd9M33rhgLVFaHa8NZ2TJTnapG8eGTo61",
  "key35": "2eVydaf7WitzjP3LBJS7AvqpCTThYdzHChYuwkNCc3SC7RJgjn5hixwcTcSs9akBEhoL5UNFQ9UEAMX7ZXwfL2wK",
  "key36": "236ecbKnD1ESAEGY1nXtEdm49Qf4HLEMULHcSybhZF7VzuhNk4NuLgsrvtsYSqmhWVEGEDqMaZbUJtFiVqXBsGax",
  "key37": "2m2MCziHTrHTLpugDfUApjsNewRk5m5wB7eVnkugm8JFcAFsE1JCUKyRaCpBKTVWHq1aHCUxBre4ZEfE8Memgv9f",
  "key38": "4GC98JxEf2x6qXFT8pU1sLgzjLNKDqeKGpkW3atqtnLGe7vEdHotT3FFajHrba8TnR9XfU14uQ6gjQDF9PjWm5Dz",
  "key39": "4JeD1DsaQzVLuSaeWHo6eiSKnQjBb1GrMxbY9aqGY3wpdgqi24MKgYdSnKWcFTHk81k7srNqCPfZLDwtn9uSwHMt",
  "key40": "4fw9WFUSHV8qmWiZECLzzmEtL8VVutKMarh3wypNwPdfCgLj5X2iNiFuuyhCWQnBfM8MXAnxAGXmkF77HipyBB3e",
  "key41": "Pg8sN18K8DCYPu3YpD2Wh3yeKuDQYJeoftseFu6GaSs9m6yn9BEmAvBKbdZgCMiFACzFdC9X1L4vHjgvhtZxCi6",
  "key42": "WTFygXa2MqtrzhFA3LGYSQt2spdvTbfyc9Rjqb1cWY9C1NW7tg6XdLtt71YPjkJMHBDoDEhygofWTgU7eCcLTR3",
  "key43": "4XSco9DLc5Qvt3NDgjDXPDNFpXzyv9ZsVnj5puEwfw3nSrBiGTGaiVUjGVfuRm6fKZv4iZhJ8qs9SjmsBmD4WywF",
  "key44": "2Xoy16NFH5ARgqtGXGqt3iPM6U9FRQGHpo7QxidqW8xet1mWBMDyaEKZFHuXtJuZiTTkRRrLpNQMjEgCAprrN2de",
  "key45": "fkFe3vLrfdxXVAnYvVZwNEZwMXsy6uHP3pWEhVRuiwjDaim7gMUrrPrpP4qMrEquB94bZCW9CA7Yijjd3VDvRqS",
  "key46": "4M6di8PnbxUFh7BBPGSS3BvehxCsXoEGnb6UpR86qjwFsKqgVDu5D1X46nGNJPm6JQo7177uHPK4naN2MZydFTEK",
  "key47": "4V4cXp3eqZcc4ehy4gUEMveEvBtWEEKVjT2XbfXcHKgo5aLrQbBPqY4tJyYQWMpMLmHPg2R3H57jynGqz7CCM6gK",
  "key48": "4SQbV4QsAYHJBhsG3YksAQMJT5AYzbQ9hgN3QHdAb1fisSPpoUCene7b3nyGXYQtXKb54oPtMpAoG5Dpso4FxwWL"
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
