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
    "369vvKZYDX7xiaiPeCJFKYX5vsLHi7o15w9K5PranYpuS3Yjheu4wNZYPPDQ43YVMbviqvwF78FyxY877QVasfD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gE5E76e88fXkd3VS86br6bSXuxHRXR7Qyo7kaPmiD3HvPNMsDMPZJDPNbwcWpYZ1nwuHPj9zv8iBaWbRoxjaWKb",
  "key1": "673g8Fba84eCDCRpmG5KHjmnJtXrRGxjEJcoKhPBq9YQNXPA7a2oiYHoHkTbEnQncwBWSQ7vXX4MawaZyzBgX9a9",
  "key2": "vCXd1hxoCejTYZjK5JFxycnLrSZZsZjcwJymPWQpVX6XLhBSBAdDP1mumjqZ4hDEkbSN4F9DEb4fEEN7kHjqxQc",
  "key3": "4gWvAyrH7HuBvdqvgUUk2NhaNut9AM33SGzy8eMVjmMjqB51iG1aL14XgyQABpA4UQzERRqRRewws384PkfQm7m",
  "key4": "exEvQDdeps74x7MWKp3bQtvavtgq9wTqSHsBAPivUvLxz5LjDAH3k4DL7BwnAqPEBJyTLx4bBsrEkwsPwscANdR",
  "key5": "66kd91WjXBoHH3YyFZSkxs43Hx5fparA7bxHj7NL6DZmR4Kk9c78SyyPvNKjFnc2ts8Jm56jMWfggwP7xhbzyefU",
  "key6": "5vbiD2RwoX3h3jmCi3hgKPZxX2ZTmqpLrBZoq6MWWpe9pbNeybZ9WVYqAuh6oWCcKWa5U8131QfAg9DTFxDpPoBW",
  "key7": "3v9u2rRXJNeai5LgxsgZ5FEJxbgMDq1UvTQETR9qUk6idfeAWNj62ggM7FTPjff9zWJsME2yZRq79iAvNqMoGeFX",
  "key8": "CJ6WQ1vv4UeZ97CZkGDUERn9w3AASsHBJ3LBnwd2BYnmcSMkU77tss52XFHRsGR4eBqHWRPaYtvn4iRsxNomjvM",
  "key9": "3kgrgsNJr2ukPhbBjemFT9Bsnr3McDiftnqQZXPMt4kZoEwCVQQgHG8u8HEmdmXQZeVMqha8v1HuBhhZHZxyBerM",
  "key10": "3Jn9uVP6nVUcMfFidppMvh8V9PL4uA9MrUfxJLPFaJ1Z1nVnVipQm6CsULpLyu3h7KfgkmMqnasQiUsmriMpJrgC",
  "key11": "2Za5UZNNX3bVmj6UquP2VzUtGypqH6Hh21qt9zFL5tfiy6je7wuGY9LKxr3Nt3XNctzBo5RmPcTPXeGSQKvzwUFh",
  "key12": "56bPdAnJuyYcBRUvp9jFdZ7q9EYNXu2opVhURnuSyf6eLpxB8dFYYS1XCcaaiVh3eNUdifrLeErmZoXdQxHVvBWz",
  "key13": "x5qFqmT3rg9JA5pA7PyYYkNrAtGsxEvPiHnknQQprQYeDnx8bKmpnd9FkWEptzixdH1EtHSxRtsXtUwo5sqFLdz",
  "key14": "3Bp6V3odVQMDpf6LPAgbR4b2g2StS7DfVrVFfWEqTcei9VumDPX5tz73WgXhZic2YVppwNEfL7UJWGXAvzYxRswT",
  "key15": "4racCVsmzfHwDtrqfeSLPh951xWa3ozsxJfpfoCFCHgE2Wo7Tyxgr9gXquaqN5xzi5m89YMSJE9B5ai3TCvor8GT",
  "key16": "4xyTHsgiBQFmruvJzSGEF2gm84Axdk2SyTrsE86fX9hD3WUP439avUDaAGiF5bunrHWt4VVisVmUTAEAwCgFCufv",
  "key17": "XzAh43CdJ7eCMyat7nTinHtzGDEzZCtgtiEqn8s7SfxCWn2APYr34Xcq6fASCNXYSUWe7WrbvUZSEbTtadtdWhR",
  "key18": "D1Nuv7dbwKN4k9RbWp7hp5zFqzazk7LVLcHuEjW2RAHtjwDGppsJeuEbDLuW7yxh7hEoFZ2C62BCzFKRVzznGsQ",
  "key19": "5CsjWZQUaheCYBu4eq2E9bq1uaWz8PrkgCUPkfNmZArT6sjq2QTuBQCtUPs4w4J49Lo1sLiVf7WUC4uaNbsBfZCs",
  "key20": "5hnrdBFzpsBSMYGHfPZ1JqFV8WMuCEEkhFuprGjEz8CDgG66wNci2A8sokYzxYwPWtb6ESYRdfKDJ4ZwespKdbwE",
  "key21": "2NjVzTZbKkq7Kh2ZV1sefP2EXLEeUBAZseYGC6RhF9f53fptqsK9cpFLqQQqBwyyBbz232RsPNcNemsez8hchLkG",
  "key22": "z62QbGXL59j2FVz7HGbfYLdL1nAM51SC2eqp53iarYApjrEjcJMLCSjUb2AdisgPAQTKvK7JR8PrrjZ6b4bLmZr",
  "key23": "3hMGv4Xw3VUWZtNM49bokJMREYcvAvpWVszLBpZs8Lxb5CMy2sKFdAYxVPmaTEyLnNAQgBSrX95YWq39MLn2xe3",
  "key24": "25kDea6yhccU3pziq2MbnvWFUPDbsb7v5BCXgu17cEgmKYBqCq5KmVNwWFAdxWB55aw6wzNftA143LZWpwKuQ84i",
  "key25": "5r2DLCaNoWL6fLgAqa69jAkYjDMHBsxyz4JKUpgosZGVT5MG1gQgDGtgn84BrnKnN5wFszyoWmvmnfgdvbmaPNa1",
  "key26": "485mWTyRRvx1jo2jUbw9mAWfaxJY6UXcmMgPnuUNKZaPgXKHtik1Z1Da7ziV7TNDqzHKKJPzP7ynQ76BMk1nRq6T",
  "key27": "2UThhwNge11ZDaif3b3jZ9tZ2PK5pydfWtRwtFzNw97zdPJfNWKGWn3KSp95wyWcvQAsSJ4kH7mHYhhYfwvskVBB",
  "key28": "65tmZ4vChDoPoscmwCdK3tkHBvM37HMdYmsTeZsEKSafKXkjSeeqyJvYvfRu6kKGP98z9uykyME7UoTsHfjpHCYk",
  "key29": "3g4PK8gsEsDkexmWUYWE6bpAqmkZYBaqxfusxwFu6oiHtitFkChqDcRCasb1XrggrMNUJBHfTgHRMMT3KUACk4vL",
  "key30": "67ZMtkjp8XmJMFRYsYHpw1tCFnHvnAcETaUtEAWwqUfG3r5WSJbc3rkRuiMusNCFmrDU69WBXaHXphAhUEAKkJUh",
  "key31": "FWMyBVwYDhUaieSe6ki36JmSBE6YpqRJSWruB1T6ZgMPwFtxcfbXNJ3DARo1k1zuxx4TgrKS8D4cNgmst2FcDEG",
  "key32": "4DZcTuEB7Pb2LThjKsJMaTjd4J67TW89qRNfQY3MnUqt2XJcKA8F8FaXgcC7SwD5XJWHAupkvCsSmDCqDKEo76Zn",
  "key33": "3gSqVw2y3C884LWxagGBQo88a89FKPQLK38HoKcBPhZbdsqXysbZof792HELHP3x5QsQKaKmNhrnBePcx6RFW5Hd",
  "key34": "42N6M7Qq7tEonxrthGVvFZi8EjYH2v1o1Vce7zJASV4XHsSVeNkMZVekxd8bEAJKkit9VX3Fx8u27FfqWoMc2XRA",
  "key35": "58xi5bdmSa33kj4TeQoVmCYCJx1fKxf43v6kvANVbLutmNxRnUwtPRry2cEr17kpyRjxXAQDWajK5kj5M7NXptB8",
  "key36": "5hvqFYTcWJGzgyMspob4WxdWUqo61U5eJ8UedHSAjdrUMA3bM8U4LGkBzQcxVFkTgm8awtznUA2FJDni2rWrB5T6",
  "key37": "3M9QHRkiNLw9aaPccE7gzfjCVo7GdLXJAjVUrW7yY6MnTzGAhubX8HBTNLPiCUnvDg6eSAkgdhw6nVZNdc3BcXi9",
  "key38": "3qfPT4SHbDquudfpTS5xr8Xup6kLyon7GYp1pQ2sVZ3yFgLZChHTpFVAFeZP9oLfjzB2kYY7GxmURhCwqjwBhcQT",
  "key39": "3o3L8XR9bajP2T9PFjRDsSpr8uWyD68DAZV6WKKMdrjCNZiwkC8KWiNaZgUgW9J1wDUUJok9PxSAn3zBTwt5fjHo",
  "key40": "2hZM2S2ncLf6u42BfFrUiMxiYxUNDEV8yNMecJ8sb3ZWTKNDhaYx5qe4F48f3UqaxFMoTVdr9uGEQ4KUvXjpfesB",
  "key41": "27MYbbrMp11GbLr4NUKWcDJ6tyfz8NzDES2NsDcygTKiaAQ4HQ3yukmdja3FuAh9JBj8rabGichSULLkXXDJngfB",
  "key42": "W1xjvWjn2AKkmpz4LGWaQqZszbtkQUjbKMFiWYLPZWtRaS4SUAdrGEB98nNSJ8pj9M7osEpKEp7i4F5tu8jXK5Q",
  "key43": "4DPKRkgU4KkprzoHu7b3WpJg6ZkMdGSdjZDMkGcKoKa5ZZxE47dUpWeRkzDNd7vnctpW3UT1zRzZ7q2g1Q4YNYrB",
  "key44": "2jcPQS9C1tq4pmY21RSmkEJ6Z8vfub6N56tKGV6HH8WAZRiMApFZyJw5JSniEkRH1dY9rdiDFBwoqCXzzBK5NTpf",
  "key45": "4T9QoAdLyHoDhmb5sHVDPwZXBveSTw2jQ3TRkqZq665dDMhdJQ1HV92m1uxWE7pSFk4erFUJ62nAJropE5R7JrzL",
  "key46": "2wQ6KdAtUSJeKAFSKjeYjwhUudzQ2gHAkJivg5LKFB6CHWMfBtTKivC4yKTQBc4sLGeE2TxWYA4wGGbtHFTWpt1j",
  "key47": "3ikWgJvC7wJ73rCGG42oMcwQ3G8gv8UvhuC9RAGM2jwsSDbqBqA9rPWbPn59Z4zpthAvx9dkBmtHg4u5iLhSTEZw"
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
