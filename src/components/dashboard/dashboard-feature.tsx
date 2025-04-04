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
    "u3oHf18Lr8A8Kt7Mn9VWMJbzkGjBNCaMmm94JChXo2MvbteYi41zmwwASn3Ybfhc2WLoxA3LU2fLRwDKApHKm9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tn2n8N7xAS2n5NJbMArgUuZJ1TAwvvSkxnGrpH7JFWdjAmist1WdWbmMX7YJSCZxA92yqnzJ7BQvtcwRuouvUri",
  "key1": "5UAZTwrmZRBGbdHi1pW6rr7vynNdZtykiAPmXLhKhBgayNwiQUbPFaVAVs4DaCrZqiDnKmGpyZMdeFAyovnVDRYJ",
  "key2": "3tqFUELvDxz8VqNWugZYW6rZ2nR5PrcMQhizsQRNG3tSLPYMRXNSsxeNhBehKd9Sq16y3HJkigCRhV9do9PLvWd4",
  "key3": "3Z5Y9wrXn4zuADXoTxcFRNWdDbqSCapgD1jpFgB6btSZuuwKdsU81CGRWcpWnvVKshjwXjaAPEG2hdfvkDE1RU7A",
  "key4": "2UMDHgc3r4TsrncVX5MRmXhk9gQm6FUr2zs8PFF2WEsQaTsVcYwi5rh5gLm5ScN1ksRQpjog8gGo7B1kHQq8MSxe",
  "key5": "4mNtBgS7BWHyCGkofgSWvA9x3R9BYBrLeFiiqaXBJyWMxEdrXxbqauhjoqjts1D7xbRG1PcGb1KWcxSrzuxtFuru",
  "key6": "22x9GbbGgP9f2vmJ7uDbG1DYtvJ48WZWNrwwxq22kj88UmHGRh72REXMA85a4poE2RK92nfeNjeqDsQid8ddYw3F",
  "key7": "5sVZ4zNnuhtnEgZ8js5BoFvoB7byKfcDhRqf2J28VpzweE4kjTtuhS61kN5cCjYSnLMQSr52t2S5Wa5D5opbzvHs",
  "key8": "5PnhBEU9eXmPRHvnzsgcHxdSi84soeSWNJFnf7h3rwe8b11EA8bkrpfG5EzehR8pe8RNy15iBBdf8xfSoHtoStsV",
  "key9": "VRDCDnB2YS39sxBHWjZLuFu7tiuAddxPVvM7ibuZzoMxnHbHNz2BZfZ77vbpwMFWfAmzq9ZX4ZHNFEfDqiffDX8",
  "key10": "53TkY7y8czQAG5E7zzKe6Atpah52g7kZ2YyEQzA8mfdK4iz99zSrHYUcQe2v7zQJQj1h9ZooZLhBRuVm9kTMpMLX",
  "key11": "5sxYzYxmarX8AeQwgqhqjXdyecQ93HmKpRxYG62B3vR54sKNUNxpNg5jfGFQBS3WE4HdDQAYBh3RvGz14rwcNoVu",
  "key12": "4ES5ZeSUcXFE3PNqQ6bCNj7XTf8xKu9vLFtoeDarF3UTTz1kF1ZyaaZ5sVbucxkeL8v5StU3DuoVHBr51tid8ALg",
  "key13": "3yCEjL4V2oUB2bCuzNoSGAByMQU7Bba7hCL4efMCAxAHW5N4iaxQkGyB1QbcJf5iw1NU7NDwBiB77kyMF1dfGDuo",
  "key14": "5wZib4YAYqNpEAnFRneuufFGpvcjtDvt9GjSWaAUoVHUqAxRcuXFfsUGL85EL4grWGhC9GP4eN5oVmzNugVGjJ9T",
  "key15": "3TuGVmXNiHWx5CFagqXe66Q3uLmhMNdbdtesHY9977hx2CQhm2h6kDJP4MGgwSV3CUp8XntjDVvtbeYcDMNJJQZ9",
  "key16": "c1kS7p7xf1HrosEYLmmeuhNm3AsGyeRAxyrhj5mLXvXTyTB5HdRUSZ1RWTuyo7VErBRhj9cm7VgDr7bF7D4prMH",
  "key17": "iiyoGdsetmUDTu3ar66YS5DysbkiNyAhAprsQoUBx3SC1FUf1V65ShumR6yLHYnCvBo5YEWEGy7WdBVNQYSH2Dk",
  "key18": "57eLDDfnmHPfuzGppZ9zEEYo9sDpTKR9QzghseiGZzBzPDiPWeR9u7dCEBDshEvW5aWK7XXEFnMsimujbqYif7yC",
  "key19": "4HX4LvHsmu7sPbHqJoatNGhVQCSSRdzLfo1T3tkBcNuUEcc2ae3kdeaFhRRPcqNuKZCiyTHkcYzXcNCPagxD2Y7A",
  "key20": "3mcLZdWsRFj45v9UPq8VVRJ7FRAA5TTFaed1yZb3eYZjhFLfMpRqHcG7pu2WejvkGLqQHRwZatK2bqVoDw1NbPcd",
  "key21": "4p1i7HSUs9L4qrHh3M9MFNoybwixs34NMuGBJ1BoC5PZyZgg7aSpYUy1KY8bAQQbdmcfnSwJBJ4kP4obRFNxqDFP",
  "key22": "sLaQ1B3bTjthKym4ZpWria4bCXKSqsHA9bbVF1xponFj5PxeGnaZsZWHJVg7wXdJ3HyySL45MbWhAGWBCgdxTSX",
  "key23": "5kuWGCwDLXMfVaHzyE2E3QQiCNYikxhtAfb1KwcWHAzkLD5mV2Ki4Uagnep5JRzGJSCGNucLhCohyP8xZBf7Kigs",
  "key24": "5bjExryYjnEPCF4LeDyvjxv2dhkQyqkCG7jkmpLHxi3RXXZGd7wLDzzRnydxHPJXtc9dPegz25okCvcgAhRLDTBz",
  "key25": "628eu5iK3GsrRFRaHRFpURoXo7XaLQDJP5y2CBHLFQxJeoCX5iqSgSCsZgkfsD2MoYjsnECX21raKYVPsuScRajv",
  "key26": "2aiwibayx9ALbc82cycrxeQ3VccbsEtFxspnETSZWDkSaqNPBCNXrYTXc3kZqmfns2CVhbAr9LYegieSBYZaTeGJ",
  "key27": "3XpNR5JhSuoPnKXCsuUkENAXXZ1jqE8LEj1QGmLbfpzadZ63WZb9u6QUcFWLzj4LfRmBcnN8D2t2SsQhySiyTWnN",
  "key28": "47gDrd7aFPswcv3diKuA5VzDBDccmnjYGZS6GN9eGMjRhRSvxssmTCk66H9ntv7zgw9tVfzEZasCrkdf4qGKGHB3",
  "key29": "4R4C3XHHqR8AZK3K1DYnJWKuQ4k361BfsdPwrmS49D7XNqQCk9ayiAkGjCowtgU3NZvwgjDrUpKdMqEcUe5QGxtT",
  "key30": "53kKFwZ9aDtu5mrfpVMr5Ecsvxy6JdmwiRzYbzFE9ed5sNcgbjoJkah5UAAtChQ8uVN74Ygsph8221ewhkEkQKPK",
  "key31": "5A53zUFzA5YC74aamsH6b1V24ubgXzg7EJmSLAG15AJibLM8bA4nA2hGLyrQBqKPyFzdoYmK33b2ppiKxaMbRiRZ",
  "key32": "5FKmuBqTdJPh3jGXWk9y42fbVKVCyCEqZrAQEsondfJbKQhrLwRfiY4rYN4BWs7d2pPUcNjxabgug3eNjY8ahuFK",
  "key33": "5nHGYRwUsJpDS4NmQf4ogs28Ey4258KuuL6YXNp1pdVRZwkp9Vf8DdgMpTh2oSsHZaBUHwf4peJm5Wo6qBNSjuB4",
  "key34": "24GsxbKrv7oaEWV333Ty8cNRnzGw6fhFewNjJF5HxpaPAgsYxscHEAx8bNCKEj1iV4731aijtCDvVX9GBtLuCP7v",
  "key35": "2bJD1XhhSJML9PuogVAVsSWa4Vgx1XndD8ukAFL5aqvpgc9fKYUXFYbNQ8rHnpV3wWTHGqeoCsc8pw7e4DDibnQn",
  "key36": "eZFzPQNo4SYQbq6kkiPjEwvzv5zuCDhpDEYfJ6pRmPjyB8cq4Z4YQPSdAQChQ2rGGmqXuqJ9m4bysxCt6KvZQer",
  "key37": "2Q2sksFPRbxemUGfSTqEufvxt9ZCMeZZig4DDa4Yftcr3BocS395TmXo75iRHRFjNTzXmzBU8XdBabcRCM2e2gJA",
  "key38": "2voBUfQksfygPzMyYaYHhbYGde2KGjSN7J8C3TriSopBAMVzXQUGuVa4VZ49EucFYnpquPyHJg2LVpzCpMVwZ9KH",
  "key39": "3RkZJYfGFnwxiikhDWGt4tW1PUK1PAbPVfhfDRFD9K1rCM3f3gm88YVTymeRuFcnwFVYSPcmobkZtTiJyedZb9iF",
  "key40": "4EwR8XajVF5GqjcPPqcxN7Nys7zaV8SPXqFKKnKXdQxTDxiHEhJhPTeWNw2r7HnGMu1yDnSMPVHttehpsLQeYavG",
  "key41": "5ZXPDNrKrMdXMcGxyiB4xc2J2vRpq8puu7ToCAFjEuLyRu61ccYadyPDdJ94GpSLwzo1FXufdHDwUYVdA7oVbQ7G"
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
