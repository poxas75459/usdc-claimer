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
    "53bVUejVxHmT7GqmjpWR48yb4hTwvc9DiN8SVDPkxAd4tSMbZsPVLjSpd57DCNTxC3hftuM1kr8G9rFHYXRU6hCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwkPJGNpysEGFQJdJefEaNwdS4XTNHtvMpWhJVUDP9V5j4esrrycULhd8hZvAhKe6WcmGV2FzF5CdYCzGBMkUKy",
  "key1": "46vYqeJYZNi1dGpfm4cWvD46rYkmAvK5ePdFiTaU61p6EjhR6QRJTcxK7s1kzFKddYNRkFNwwTaZ67w6rqmSGXEq",
  "key2": "2xd7kL91z2LbDRqokswgcUd2a18wu44ghCQ5Y8dbWJ1pznihqQkXVwPL39Fwzc8uNjHBSXPfHHaJZuYNdXFh91HQ",
  "key3": "65nKWjkKyGhkR4xyhSn8qcQPDoKpSuF6N1xCCxgCrzee5AmsJFewmLYaGZ7AQ9NufqQjZPV9PeDRgVgpeSLWQMW6",
  "key4": "whiC69MLz7zqKg8vRTjsUjKWmZ6NX4ui4th6d5HdoWNQcrAKCTthAmQ1rqmUQ2Yu5ZAyNTZRRCpqFC1xJakDD3D",
  "key5": "5DvZtECjNf7131MDQewi2PZh4693w5jfHFQdfC9aFUpVVQJFT3b6xXaUKPPJEac8aUVTd8y8swY1ZQ6MVBZ5MkUc",
  "key6": "H9pkNiHr9SzSW5a4vyaRvLKQidGCozo2fJ2aVsTHr4oY1YqrvH9fKCscqK3hbFWbYxhT6TMo1X9GDMfnDJeyQHR",
  "key7": "3jC13MbU8DhF939WkdKoDH7iTf9ToQEShdQDV7MkP7aQoGAgiasxj7vpx9o9LPUEtXxovFSNgrDUJrkcV9HgzDv5",
  "key8": "4Z2PFEKZ58ZuhRFNaC2U78sBuqX2Hefs5XdBsY58gAvw4XhiCjtaFG8AbEsugd8W9bsbmHq5VvsLCyaPBBhVJYpB",
  "key9": "2ogmsRNWvqhq8BUGw9eZHEsh3aDVzrMPADjbTnEkG8KaimmpsbvatBDKCLQPrjmfBktX67QeBFhF5egNs9bLxyHg",
  "key10": "41HvWVHGMMC3cEsKVBkGPqHso4FUCGhw93xY8SKS5dHgzmBHSDfeqvcejVaGKsToT3PLtsfRLzTkZJMswukCqhHr",
  "key11": "3K3BEbDcR2aQCiYJurCp4cJuDuqpQXq18wRDcBsetqhmbGCotyigc7k2dp6WNnjYa7LkWK13sZLvn9WNUEz8Fqey",
  "key12": "5WKeW47ZFA2FfS6nh8vN3SGxzc9k8YoocZHofTSfmwVXA1XmaxVYXCCV5mA9LV1PzM4poV3wzg2hbm48vGn17c7n",
  "key13": "54HPekA3Ab59PExLyXy5sFhuTmeEV7UqRRCjXRJjeuNm4KuzDKXgSeNe4FdQGoPpxWZz8cmuaMQ5TnbdfjXxx4L4",
  "key14": "5wGcpQDvzoFdf53AHZxXtQbQcFGjPsT1d6mSwzS8QaPxW3EvY8pu6At33YRsSj7h4JrdGoTU232aahwxF55WfneA",
  "key15": "wzEHvbcdDdTGLL2taHcVMxXuLzk5VzWvRFJEiUFHCzLvknvxgKV449CG9EtK6Nd7XkvmdynvAE741k45jiBfngB",
  "key16": "6jgLB5ToKuFVvgb4xqXEbN9KzhkPkypvqxN29gLE9pEMbENoDfmKYsUcRTRya1piSTWhKHVVDoNxYGp7mWfDK3n",
  "key17": "3ioVteTKkm5sxdF6UEZNRCsDo4TzuEL9qb26KEBptFMYRgHkrLQBwjvqt9MCGMU7ZsPpxEK1Dem4PnWmDnHfCwKC",
  "key18": "2uHfmGwrBJuy4dBLwJ7GzJ6DDh61GtyHNip4a6ZE7NXzZCANGKAoM7vgRk5Hb97vWV427cFez3ZdX36FeWyvbZbB",
  "key19": "28DYLAMJwvUiU3KpZfJLfEp8N1ZdqhjQPFGnhHnRVcMLZo7fwmrdqAPxu1qs6QhaUZgvL7mCqd7PpJRTcZ4a6n9h",
  "key20": "4hptwBEv2GbVBzLRCW8JLU1MMffcfHYV3mzceyXTZD3Znq87iQHumgfnr41yYY8Gm9vNuvU5nPM6XmaB24i9pSUc",
  "key21": "5AfDU9tfbpa3BQTieo7qStH3PUAULtZVBLLF15j18v73TnnWEnAcqs3LiwCX8d47B8mDHoNeRscxLHaktBxJ4zNs",
  "key22": "Ehxti4o64jXkSDSnYN2pCqK1vsTvpryZXqob4U7fVGAkc2Bb1UJ3c5WJzo6F2qEjEb4t9JkoxwuPJZV7yqf5y3Q",
  "key23": "5oeyVz6sLmZghY9t5qPvaRSbRTL1SwLPaKzTeHYcisWDxTjP7jUhCFUNGpiJtvngaco7ZFM63edMvQ5eTQAyuN1W",
  "key24": "3sNjUJ4J1WGK1VxLqh12bLjRA7BmpCMNWpQZj7Z68JqWtdt4t4FxtN43ZBFi7Ngdg8vggX4W9pNR1oCmPgSG6DSv",
  "key25": "4UDHvTiUH8ChrpPNji2HAGwqp9kNHoyAU5ygnbDYM4KtN1qbTLBPjxXxbSxV88EaLz1o84PhuF1o2AkKnCEJ3dyb",
  "key26": "PijZL6z8igBTqiTR9yP4fRvVt6S6h9RbssnSFz19gzo88Fj1JKCtjwyjjNaH5KmM29xhnZggrmcRv9SS81pEhZZ",
  "key27": "s6UP1MycpTbtn5xRCMmcuV47gR34yUi2SJhMAH9CSui4pJ5PTcUDNNHnNNHYaEQYimE7U76et9EKr9yyHDXYxG7",
  "key28": "5ptEaarEEo6o72b4vukgoFEFSTmcUHVErDLTXtRT2jpdEbwPfpUSc4hDoJPXNdkz5387YSxoX1ABiXgYXg5AzfJA",
  "key29": "EyeeifabhfsBhMcHDtyPDzhuiThC98VsxSVhQFgrZKYEzb5Qj5jJGkdY8iMhsmReRamDRUwZkjAxf6XrZr4BCAe",
  "key30": "3rQ4sEARkatMvyLM2a2GgMDvtfJzR89n1uwZqpCvqrjRcBvSJ6QGveiHXWiYE8tk2PnRmETQ7iqnHNJy8ae3UyTR",
  "key31": "omg8taoVyhwmN7PSBAWRrhvscZiAWxgy8X5TN6WmsR8KFqZeA19uDBdnaym72mZGJsTpryZmD9B9mwsmPHudQCR",
  "key32": "3dB9St9dkUEbJxn6rEfAcow8kDtgn7DjS1juoFsc13TPuzKiQXJxxyx55co1TbDnH2R5epDMMHydKNA7o7MM8hgz",
  "key33": "4yhvR6GJBQchsY75zA6S7hGCk2LoiBKeUtsJGLcvHHXd3Dqh3nhaNxbUAta3cgjGVkVVfJfD282f3uftnUhUWoRg",
  "key34": "5QAocBaHCN2ALAB4ddzSvkPBDHs8VwBDe1ipDLwkESnSuzsHJpgY8vnHvsnruMN7yuLgREL1Mqu6fe2VPGyGBwJ7",
  "key35": "BJZmCrwNm341S7hqmcVL7UwsfGcFLWpNzbAR4wWwWMr4Bjv3tXev1Eoy3igyaFsTpmG94Y9uQGzszXkoaZ3Xhf9"
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
