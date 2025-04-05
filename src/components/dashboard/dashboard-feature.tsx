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
    "2x5HKfL4spSbG66i15MfcMN4SSTSZfzgeYFLFz2r2RTyRJ9obpLAfz3u5453VsfBDtbTEdcg2EXGme5imrDUTyhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eutTctXudMDupJ73kvo2zpvRj1KHxyXym1jHdatgUPth8Kg5myTwFZ1NGqFPHEKB2e8ciCgekgQBFTP8eLUxGmP",
  "key1": "mftZDsGyGn3awaqARTH4TdDuLSn8XBKAspHSjkAkXENgTm8cpAwZiCoWN17hjMfX2rqcouHWum2JfErY9RjXvkv",
  "key2": "3D2icfN67w27hTxmwNghryecBtyNichLe7hYrnguh9DtjG8CkUqiyZ5pB5hn63WU8139bJ2u7U4uE4RxNBJDVjX9",
  "key3": "4dTQxgy3szd7V2ud1TdnT8wDXdaQ6vHDzUg7CsLMXLx3JXeAzFPFgkkw4Kgn4Tp7bnkuLw8qMBhiaXrPAEdJgVvG",
  "key4": "vpthq2jtmdmstBWt2mdvRawUuzjb78pqDXEdRyGdT8U6D5qhxHZ8B1LhdejK2FoGjuLZdS8QoTkfcgA1smpZr8D",
  "key5": "66fNm1Yh5g6uG7BKPTkUNmNC7ptYsAzCioZDNJJhzV1JiVcAWCgxdeYPnq4cud79VTHwRWEU7YeuEaeAQFJAxZCA",
  "key6": "2JM5S3jw2U6fMSpns4G83366dfWDWC84Yy5wnZYZAN48vG1QZpxY7oviarNaF8kEXrXVfN344w2GpEgCHMBBXGZK",
  "key7": "5B1MiZXT5fMa1SQAMYqaunmsPwdUckXk7SPQVNKCkpRtMESLdowrSg4EVE54iE6Lk8cpqDgVLoDM5Dt9eEL1Cgsw",
  "key8": "3x9dKij1Ju5XZhtgoz6sqxeM2gb9LddKbpDwX3QKZE5wgGTVp6QxxqKQuWnVyPhADLtukdXGKx63AwyCkeiCT98t",
  "key9": "5p635L96SyvxW2bVN5EGtLWmEZr2WWo5QywSUEmPR3BATiX9WAEsUU4ap3k85cg8VjKEAh5VwmFgFZJWBQwQgnKy",
  "key10": "5ZPbCGPaNBoT2MgpzoanpNZ9HdsvUdjuG5woBwwU3QaV6YNPkydjQJTkhE2UZ2ETwosKVxK2LT8pW2whQuhbomeA",
  "key11": "3vb56FwhyS2DGUqtBoXCQWXJb9UVhFA5ZhbgHWde6jaHBhw7Zd1AhbJ2i5wpg1VosKzFV3y8xuxD2S6Zk6xFtLaA",
  "key12": "35ytzUW1zDH7SShYNAkTqShKHtcjXqF7hpAvTx2bS2mmJ81JeqWnjQ67WBQVP2PyDDN5ftoSuRvwa4qX4Xc3qZBq",
  "key13": "22Y2esgm8S7PGX1oafsgDLVggn9y756Sp8yfKGmx856mXcZrgczjg3zeZrP4jjqJcAGBuV78A51FMGpgRnZxWMVA",
  "key14": "2yzr4wudSa2FB89FsqoBXkZDLgg1FoG3s22i5t4uq23Nj4dfufXnEsu9zhkPGxbYLnzZNPw2zBSnV6pK5NyN7jnf",
  "key15": "5GHemoDQN3QQWbeZHf1J88mPZz4RDoDjorf9vFCZxKxADRxDMwDS3LrcPJ9dHr8sQg78715waDdNZBpLbr6pCFKg",
  "key16": "5sWVjZuKuLfXBqHEp6CcwY3MYQGEuiWaJSrseZZsH5yeL2RqhXZfhr51rbqiZEx65waHZUCa5zLQpCA3PQpo2Cpk",
  "key17": "4wU24kUwJ353X8CSUcksurME1uk5KjWHryUZt3iQgsWi6wLRLLJMXZwWXAD6MdjmyinoKj3moHtbddmmV451Z2PQ",
  "key18": "gEFhJoPYapGF2JXrYm99ejfV7Pbi9UF9WYU15C22Sou45N5K8qW1QQXJFfajyWc4gDaBBsWQV6hnwHHQhQ3eUvK",
  "key19": "35eCdWAEZWU4xdisbVwZS913Jpjg5Xo2Db2bS7vEHx61q4T3xndzfDNrkD8RtxG4CWY7tS14NQ7K7DvLqY1AVAF3",
  "key20": "4D2uFvL3wjFVK7WbyT5Dia9DPFzUj7M7bPGj76Lz5dxNb3zNbtan8rCKAqs5r6NUy9nm3HNsa66QVY59HBiYmehz",
  "key21": "2w9pfgLd6PudV8XCviDM7Yj4cT113FwwPmbMH7JjYaroQ3JYagC5CnfHatEdzkggZPahpuunG1peKo1KxgfJmz1r",
  "key22": "621oUKB1TfvYBQkt8cq8BmELpkb5o3VUKwQVo432qLibwPZgu1dwe9Jx8hT3MuDU48H8ArQvkwW89yQjJnSGYSrt",
  "key23": "648YYmL5whAzw8dHcozj2qKeY7jApnQPBp673sthC8XhbnPdrfydvcb2Jv5HFLsrZ6ca6Sgwp5EUTbSrFZRGD28U",
  "key24": "4rLQXAyeid8zmPiYMkcSgbrdgqYZwGL7Z7dPbyuka2NKgoYPjaJoeGYyYeLWpcEcZ5bmsL26CijRSGYZ7L1SS4wx",
  "key25": "5LWYDmJZshG3WiSRz7Ams1wDbdL3BnZKPcB97ce1fh3cHCtVtaBbKvfefQRw1RT6SubP3W1Uhh9KGg7HeDzJ6arY",
  "key26": "M1hrwctL87v69RosU8Rj7GiJPafSfz61tf3w7yNt91Qci4mSVMs9TfZ9yCn7fy5WXd8Cgk38ZKRkJwYwmF3ZWtP",
  "key27": "5QtAidF5sWPA6TFRotvMvgpF4g6aWgDTroa2x9ufUFXXLAC4ZPaTcH58gb6Tjam4La11stjdmmnxXPDL5ZUQKd44",
  "key28": "2iShfKQUBazy4xP1rwTQThNvdaZamCqNSrLRUBPSfojApKm2MPS5iW2b3BSHGHHq4DgTkhEhkrLi1n9N1q3uDnuP",
  "key29": "5q6HvXJcK2evkPsyspMUTypJD1Szz563eGWovZaouYELgJ5YaNK8nhiv6BEdndLyfoNpTY3mBcLwrNhTZ19CACbX",
  "key30": "dUdQV499mcP5P1GojaTVwxf8q74XXjCdRd2XFNkPVMkDch6V2UkwT4nxiB4ueEoWJKeFVzUDLCsxWYZp5jBE5YU",
  "key31": "HinBLBX39ciBrfz5WzbXt2hiJj4dSnV58GehiRTSBhJ18y7aTeoJk2rnZEcuTDndZ6fd9TAYe7YdmJVvG3wRfp7",
  "key32": "3c7snmj3XtRWa4hEovP8qiBW6Lwnh8boiN7AN7j2WKEpu7rYN9kSMXnBMRYMtZs2nP9U7LUqLYvSkRTGPKrQWQcE",
  "key33": "28H7UmY6NaepH7Tat2F3ZbGhW4ofWR1Jy6sniahYvnkQo2DAVRcMT4qRqTe6LSBSSC5nSLnMLXQkyk8kRDx7XQVt",
  "key34": "3ohGnuS7mYJeS478m674Nm1b7WBw22spT1UbEtYacfmXzmj6hMuEQuDQN62CVS5xD1txWRz7foYC4adV3jtiMneU",
  "key35": "F9cgc1pEvcUBJigRvpyZfCwbQMeDY4YnbHLy9aubkBGFg9XDb4UH4aS5uzdYij9SbYLbZNkTVuGJwLSGQkiucV8",
  "key36": "iDbCEbtzDx8TygpBBN3bLAAf4upau7EfpBABwHSTRKJARHvCnBnSd17ybvWYzr79eHNauyD52MGbSKWd4GH7oB3",
  "key37": "3tHgSDDH4vxtTHP1yCH6K286VzPp94Z3NL7rq19yMEqHwLzqHWjkFuda6Lsynr8ypJR8xe4EcdayA5PbEG5EmWaS",
  "key38": "4Hm4qfNEfZMsWJ1MWjYGwGrP1AtKPVZrWwBreP5JqVuf5hsRui4D2xV4kPi8cbxAcjA8ji7jRQVQYXF2yrgrYCL3",
  "key39": "2iHuPtCqFqaDxtf7FnDDq23f1JgzxwbJfPbXBpanYiN86vZUhiWSi1QtmyQY1mX4jrLZdcfwHYkir3bhU8grWzxJ",
  "key40": "5gU6Gs4KoG9no7tP6L3a1wMr6SfMjobmGqJZXGmQzcp9XNQGv5rySSP3nFmfdt8B6w3xbLUDqvAwNVNDmzWgzc5V",
  "key41": "3G1gE7VJJqmyj192VGm7CPumvd4hwuzAixw24enPJP9RXKADs5QriRFGrS6r9iN66n398VYc4ogM4EpRftfUtiLL",
  "key42": "sNhuifxtzECyTmpP8ZFc8oga1aCvi1Sh2dnoic4nciHgHiyrwNgURCUJ3WmGQVXTz4zb1wpuyu7SpPqvaxaEUvS",
  "key43": "3NMZEyViLET72cakPpqfziscnDQNBPWFvcgDvagxh3tzegiZiRFuiBXH6oBS9L5ajeMan44LW6BgBuc6K3k6jZVJ",
  "key44": "3jYq2nJd9U6BP5EWo3uM5sjmRpFXf3swGRBirjMsByWztheZWJBo6SCtDWzD5G1xv5KqRNqdF3A4DgpzUn59HdfY",
  "key45": "4MXsk9PVfAgz4eXtqHgNEH94B98DpkrNgcFwJMkS7ceLz1Azae4XrvkZXgpdFj6ug1hKGmGrA3YnhVajC1drPSL4"
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
