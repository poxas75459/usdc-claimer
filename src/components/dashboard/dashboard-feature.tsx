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
    "3uPDK8HiMeCLVmruMkacxVn9wkVzZDmrH2HaUi1s3d5JMK7AhRNHE1RoKooF31Gf9ue3NCpXLmHWaSK8aXDVJhs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XpXsQGQoenKuNvVuMiuq6FQmfLtQLf6F4vsMiBXDL51ycmPz6cUocYjEt1miuEMfh32fmMcDXqPgyDhjCrNQzeb",
  "key1": "3uvCJY6ndprySmapthiMrXnUQpMD1DEHoWxnSfsHs2eT7pyTUpcvVTsxpvt2eYUuv5izMvhGRoB3eKGjENCRTdVS",
  "key2": "2aorr9eeGXe37o3xMmychUdJ3xeA62C3wvWjv7KHDCwQRxcMcVeJ3fYPHbrZSYHTermNBS5YPZTawGayubx1ccRH",
  "key3": "2XqevtLi2uxuq2enYfkRCEjGVyhneDjyAQCtVchtx1RpUAkz4DYNqnYorLRLJTAAEUEVaAgn9vCd9Bt8XDdJyBkc",
  "key4": "3yQUvnA9y3uohdUFFR4TLYbKRSCGLPtLYaiFWFb7bhTwCoQbBYqPSHHoM1LqjVsKeyQLUX2WdwHBVzbKT1pW1Jft",
  "key5": "5G8yENxvoUjmiJdajbXTejYMoyDnHq3LiAdfo6Yz3syCXGv4XHCVt9bbJDN5CrHWvGUUpYA3FrfSKiMZhHJwZozg",
  "key6": "4CLCjc5nkwxmMPZ5MeF41pcMZpUZv4FhxxqTfCjnHwn2s49JJGmNWHiPS71PRz4FZL9f8LoJvi6duARqF2wSdoeg",
  "key7": "3WvfKVzSxDfATjDgC4LvTtA2CKqm8gp47csGMHThAsd42EctA2xYcctVbjANJz9qYnH83qRhmX9Ntei4VYsnJWB8",
  "key8": "2NF1sPj47b982fpDaaAkrLoM3x3h4Ewuk6V28XxA5H5vFprXUENGZU24o24WLuwYvCHsuywJsZqbuwYdzvGsjEjL",
  "key9": "5FyBNLVY37P6r6MuTR1oHYRMrUxQACefWetpzetqZxP6bM6Ry4cmpsFtfKzUgKHSGuy84F7emG8kTh8FAGC4LN2o",
  "key10": "3KMPwzW2FqaRdEnxyKADQaruKE3UmxPa2hnkEgUBBzyQvPcp6Wqcnx62rMxy8AgXa3rZMtUnakqQJCMV54ioZwsS",
  "key11": "6w4KNLHGsRnJTQnhVaAspKjJNEG3qEU4ojUzy1m2boevXm3G36Fp22TrgA8UXX8u1epqtwb5Z2ogDdDLm3PyJw4",
  "key12": "518j9Soz2V8HEiY88zULrqpzzYLRcZFiMJgHzYu5DWimUaPhqUxcvtvkSfrZDmr5EWddjk2DP8koZzkALwSneVZv",
  "key13": "WmXkH8abr7N2gAncwm1EbNZvCyXfit6haWfzrmFXzA6V4KbGRNpZLoZsPvpmSPfXXACbEGY9M3votysZGCBqA55",
  "key14": "3dK2kjJBqDQevdBEtV1pdAQoiyCTpnL5gv6GMZz7LnhDLkTPev6nM5jToRwxT3sEApEr2GQgzH7SACkPRWXcumk8",
  "key15": "3yopjvD5SLaKFZCPrPrAx65A8xWfGZhwoW6Uk12daff3JPbFTdZVz2yB5LELsBqnM4ZERxTcQHjXtYV8v9XEvwMt",
  "key16": "JT7aqoBsnw8udAd8UZq51QHTtHVxf6JXY4mUiMpy6RjmTYuPQVFAEXAEeZnwBAX1aTMfpYroZRfW3gm3YdshcNa",
  "key17": "41jKNsvtNqUx9tBGY8gupFunJsBnm5A7mGpFRBeeXkAkvcnvjkyGheQx3VLRvMpqrNkfiMsyfPaSAKBBPcrAucBN",
  "key18": "3y8FNsdePABNfFm8nuAWaquPTcaXjmBAmvhXt31hxZDE5rtt1yqMqg9Rtz2JMx4eQaeZWCPeM6K7SGhpHhcxUNMm",
  "key19": "62zbuMNesQwfEfAbJerG7DHZd5wdnx44p4eZ5qWQwNQakZZ5qXSHfMNr8BLHBWUscFA6Cv8FP9Vfj1n9KiXLcC8B",
  "key20": "3qmNjXQ8ZY7LTbQXvnmSV5dg51dQPgk6nEuhokNeiJ54AgDQkgu8VfggzrjvFUqX4pf5LTzLKbVgqa8boM5FySYU",
  "key21": "4VED1C6Az9wxkkrX127dGDqnQMRmD9joV7vg1abS6xmF8gqhkG2hrjbcME3tUXoJoSpG8UKuYqzsmUKurozrXa9B",
  "key22": "24uMmzzouMjm29RL7dvG8JZXDtq3U3PcTQ2VjC2AbnpBTtgcXd7Vrd2giMxduDL46rMH2uDauoRpNiZng2yVuGHr",
  "key23": "679C5BBcn3ksoDSBhLspbWHcLJAQhQVmyiN7gNQriHNkz3UGB8A8zptZDdMqW2fZhsVjWfe98tQJUDSuzN32n4DD",
  "key24": "5z5cSKyREGoqgomp9xLHu37Ht1TBY3JGv63vLd5fi1Hr38xuts2gNKfbokjNUBxHvKmChuS44c1WBDqSESpGMdio",
  "key25": "4YWtY7R7QUrVzbzFfuZbsvDQhJKuCkbJ8ECFKdR97KFy3f4EyKPuyQTv2Eb1sAhBQhQxMJ1M8M56KsicXTCMbooZ",
  "key26": "3CaPfXuNEgkrC32xMS8GUjUZ7hvR4uAi3o72vfjn69Yj7FsJAGp5DWpd4eQYNrZF39Uw8fpXoQsf1PoLrNaBAC9m",
  "key27": "4qHRLdPbhkoszjvYwsuW5YC2hLfpY6YDA2w42u5vtsdRoEuehuZX4pZzbssoytvRAD6imutCzxKw45UeSbuaHBS5",
  "key28": "4unSA4MmqaQGSnc7UWMsxBf9tSEcJ6fGeJzZqcxBunHbt9v6GaupGRuNqMe17FvJGq5hXoWmzi2nJXRDNdakX4d9",
  "key29": "2BkG9Hc8JMrwKqTPszAxKJpHdjQQKYvmZCqD9veJpS8zpuQSkCRueV64EcbEZF3h3bMiigSWLB35cPGyYs3nF5b9",
  "key30": "HAWqS7KP2GVvDxgDzWUe8d4XwnGT1VQdrEcQBpHWnuXGugrfa6KM866QyRbuT4onDhmezW1DnD4PqyaTSqKqMfy",
  "key31": "2MSTYG33iHHWkCEMgBswpoxaDQp5hyVo7E3AFC87QBmhzi337kygjnPcNjynuD85RK5i5Ydz2EWD7eVDjny1UVZ3",
  "key32": "3KXrDok3GHTbPBvXK4MXZLV74DSfGhJAxu6sKN7oro6wTpqKXkrboFMMab6StNNn1oEzzweYEzapsmFktq21ZYWG",
  "key33": "5BthFRsN9o2HoZD6UDRnnyKEXVM1jS314SP8n7CLuvLLStApL2XHYwq4uK3asqLi1SQs9hgsSjD6dsGaBc4C8i9P",
  "key34": "5dyX6oKSs1cyAntCDBGpppqUK8EnnLwwX9L97vKz1c4kScXgpjnVCvdi2SYRTLxBmxoRawtnRBEwxAY4Re5jaZMW",
  "key35": "3fCQBVpf3GxFR6aDQnbcqSyAMTJrNA8MXb91iggjbyqpEU7L2f3E7Yh45RQPSQA36Zt55StVPZwSRoBDcfDMEDaW",
  "key36": "38GiJhthb6esbkx9G4hpGyULH2LxwjutRHsDd67w2J8g745osrgHE98emAsg47dsJm7L4h2zAiAdyqH1DHeuerve",
  "key37": "FTwnxXnS16ak1GPmtmHUdojx99qwGP8DcFhezebDP5dyM2TCWEy1r4BC2mbf3DaXE7fyVL8VtMcXS3JDve4wF54",
  "key38": "3bGRgKsNRXndvZmUGkhGomTCq9dPUuqi9ABTKjLKMrNs25QgZSi5Ba6erdeHfTS5ELGEs2zLLrVQLB4pQC1sMhH",
  "key39": "2w5YwU7XV2g19Mx4fk7ztwgh6E3XhFyKDCNMeCYvMqC3MCVyWYSJi4yL2TWp98JSj8rf5RMNerYET6GRJbMoD7iQ",
  "key40": "2bmwAQQXzunQ5ZKTSQzaAGzUZoEYY1bQHqH3yHrLd1dT7ueAPhTzhWe9DWtCRp4BcJgnpmzNWx7d7v6pXmRfwBGk",
  "key41": "5sE5UMHcHsu5AkZ5FcDvXiVeKybW5FXqTbpus47aBi65CGcSobM8vshUYfGcsJrwxjntdnqNK7LomxUJAQimATy7"
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
