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
    "5d8rNNoeJ5SewZdbuRdqozBvduzuJCErf9ce79mHp2Xr7R5CvgbTJLqjePARcyRBr95FfunSf3ZFQNppDbXoDxXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkSUApCE2QH9i3aSNVGCBgR5RHWHJ42DrvcWHjkGzBzfPQMj2uSnQDowo2eeUo5vfXtriG4WSnXiSbs5Z43UKaF",
  "key1": "271moNXpCXkizeK5hE2JADs1JhGiReWNGFZrv2KpfaDK6m4nyTABhqKcd9mGGNTNmLssAK8hvw8Dw6X9MHDZccnx",
  "key2": "4QqUnVZxrUzeuZ1xdvdAycoToS7YpVVwvfucoaWo6g57rxyxGfXhxVMgqfBQirdGE9BTqZQvW4HgZQHJAokUfZbT",
  "key3": "2bFtxaCsVSxsgd5y2BCEH53R6hmYQyLt5nCrHA5qXrrpGTZFpkvLusAEvWMPgeRTkaYYqg3N5wBbCRmYKeGLp1x4",
  "key4": "3v5pQXcEkSF832QZJtZc1hcHuugMRXfLSrLqNvZ8L8rCCQDSmQcqpjRASqWFTM2Uf9ggGgupRrA4QJyUAwN3u3iM",
  "key5": "5xeLDgT3hfai4rHPc31Z8WVgHPTqNRFn9TUyTVvQ4fwemGfpGMp2tGUSVZtwLSTnzkAqXY3QESEsY7AqZxa6cdP8",
  "key6": "2CM2GzCpXE3wSvYUAd98q8P9Goqz393CV3BahbX79zrSgRJ7f3R65CozXX27kxZgJpzcpyHLgjzHn8Krnsnk5nba",
  "key7": "5N31AtsTGWjDwMqNSygWWmgoUE5RZBDc8J67gP4ctXfi2yahaNx42xP8Tgq9piNyZPN1akzeqjNbNN6roH5Br3Ra",
  "key8": "ncsKsn67VAUDfT58RJjsmHKHJ7HDy8CLxTxMvbRZF5sE4FcMkLfxJhiqmd3prfnrvrwsFfK2JGGwchAcjw7kStF",
  "key9": "5RZLJ6c6Hw9esdfnvTcwVEhWJjByMDYJty78FqofD2eBenJstiUxw8zi2eXVgsHbiSrNiKtjrwwXUuMgsFF6MKsF",
  "key10": "5NyYhephgsE1LjwjR9Hmihz6hLuT1EBVEU64DAM43cUV15MYePmBwfnNMJT4HtWnFpAJucxLjGkx465imNYeH93p",
  "key11": "4GBHnt8edRY8QaxrXr8vChetGMapnocZi9npF6x83pS67ChdJPABdhYqNGDLZgFnZ57uB5JqpXd9MiR62J3G5G1H",
  "key12": "5ZGFVQTkj1jLmWbwbZNzMiMpzWFs3rJt9TG92bKTcKx3boUqKtste43zo1HyT424Z3RhiAgvHguPk5o6jWmVJFXp",
  "key13": "5ivu2mTp4tmZXbT9523SYhhdCLmyL8Bos6vuS2MmDKhLF2XiNsqeHmqGze4yS6PtHwvrikjgbtxytWiEUxzvQ8DC",
  "key14": "3JK9VR3yLdkppRuZc4MkpAaQxMhdetBeWXvizCZsCiSsg7dmW7jP13AeviKXDKR4CVDsmj6RD1Sgfm5Cf8piGMzU",
  "key15": "4CU4hvyESb6e4SH1CN8xsXte19W9Lm87Fi6JEKi2zZyb68iREoaoojXVVnWHAqzmLF4THtEVLU3Dn9eJKmUQ8Lxt",
  "key16": "3vfDPAyAihYMiG7zgrrxY4XJx88619tH43qK2G2avetd1R45BNTV1WRcu25kCtEutAY5oDbB6QbVvPMCEx879jYD",
  "key17": "3AoxSFBKn2BC7n1tTP8UgRZktgvaCQdqUUKP3vexSCBCisLBc7fs51eYTB2GFxpoYiUkxVEQGSjh8MrhDVPWShQs",
  "key18": "MafSaVuz8Tt4JQvyHGZa3aRMqLx6WvF1XTPku79esT6E4RFAAhzMokC1tYrYpxmQ98bRpYXynjH1vJtcnReuEnJ",
  "key19": "2zQUrcX9ZH9vwsxseiVzro4buBdqF9D3LFCuQHEN7JpDMCTMPf7CKvbopTxbnn4eg7zkbj8LXoyL8bZJNoD1X6eT",
  "key20": "4sgWqQqwTJ7Zhh41jztDwsRCBJVGWoxVW7UZDvbvnXtkFtTTUoU5qK9bEzk3MyLy7LmehpBxMvMQaWo8kdFuuxQ5",
  "key21": "5GgLSGGWF5PsvGS7bvTMbzFBgumRdse9vqrkWmXTzrWx4w1MfMaJ1dgNAeKFaG2gNxFcvDzAE2pBWqMHixeraWah",
  "key22": "Rci8spuNR66xDYyNrLzZG55sufebdGiL2iPksepANj32oQFyh29jmg9aQQPDau9MY8HU7fPsdhhxZ5EPFXC6QqD",
  "key23": "jgfSGiXFhZYWvRzc4mCWCTghgyts7Ruk6A8yNwrTbz1KntT3LD8vqZSGWPNs222MfAAfoZiZzS7xUy3W8iiFkrn",
  "key24": "4nDrad5GkUmNDXDL843WAutg3wgs9opdjQKBazCXjNirh4DwNdn5aZp2D4uUF9XysCu1eM9wEvZmoybuRyv9FxKJ",
  "key25": "2EoMF5FBT5BwKAxzcDBfmikMw1QwgRGuRCH2eGKYxthPxbvMg9Cg3RBLC98BiWT7hZAazUj8tcqTiXskyrHkponu",
  "key26": "4kzmJAp9CKbkWY8anBedRKGkjXzqXDW3PXpcf31aGsU3eZUrG3MuBqXp7NLN7jPudeLzoq6eBJYn5SiehY1QCboP",
  "key27": "3sDVvbLBLkEJZ3CFehbBJA2o5KW92GWwbhU3r4eAyLpEdtyNdemKnzKwTZrapuV92Bs85KxGGsp7EP3EdqrrhAbZ",
  "key28": "5rjorJzGnsCo6M6XoC3TymPQKupKiDG1ygukeDjV7fk4e1HbQn9GtH5DV3aQfWR6nhL5tTq1oPTaDiENWrGPDiz5",
  "key29": "3C4dNGKUaDKFQKLMPLEKy7DH4v1eJdkB23JjaP4fwQmBkihn11bHxkmuhQMio41Gume4BLDu5udMqhJndiSDJSVZ",
  "key30": "of15e1nunohETDYvQvzJtDH6UMi4toWYDFaKdLkUSZqyGitj5aj6KZED1qLnKUQViWaVQLoP7H6F1fPKH2JrysJ",
  "key31": "m1iCm6UdjPTnj2GsRnnnLxNL1ZM7iydwMaQ7c3JuftdVQC9f2SZh5GGxZkHRSTJiJxwj2QxTSwEPdxcKc3VcKTE",
  "key32": "UNDdvhRyCKcJjPYNduNX4NU5YX3t1D89cC4acxvG9cb1kjeebqXjqrg6F3pwrV65ERrZoQpABrEPg7L9dyE6U2D",
  "key33": "QW7jXpP483Kivg3Q2Xm1Tbx95kvNQQmy7Rvataqg8cUSPBPWDsoaDPD1xjccrktUaJfVwuRbvXVP4YkhZ3vUdxs",
  "key34": "2m1QCu1L8YjWWczUJRswnYUzWgFiohdBHfovfGXeEoST1LG39HyUv8pekJtuNUd85x23EoY7x2n5JhRYL5EJTmEG",
  "key35": "TYZSsjnPf4ey8VN6itE9KQBRe2B2MVicvUyW2vu2b4X2zhMZ1PTvEYntW4iAaGpZ7GzSaBtyUx6iidV82K3NmVL",
  "key36": "3gTtTbdbDhS53hGaC4Rrv3YCKZbSLbty3aJDb9aRWi7ZkyuajHLUQPuK1SvUZkDuNAd7BxYYv4cuTiqciVc7cuG",
  "key37": "4RxSat3Ehr7oVpL3mkCwx4k9YUptF1iAyNAPuiMmZLu96TwwpmJKpUcWLCzU8YXiFwQg4DeRc6tRJWEX1cjHdd89",
  "key38": "3GZ4wCkWVhAijWNMFZpXBCtr1mJEVTf5b1VG2GPY15zvRUs7j5f3m2aRTK8FVBKVXrcDGWs53U3QkfKSef8JmZhh",
  "key39": "3JhMotWKLxPFikPpGSgXZfPmSDvjkPLc5byfShTQmBRGrbV1gG9gzM4cD1hWXz5Cgbmssn2kJ2B2hBxq21pq3zjH",
  "key40": "5xBvzN4Nje1tw7FqsGgvz4TDvLhYGsWPwuyJKK5igtr3dKUxqVTeX3dVQn2tFTXYNXWEJA15wMys1679sLWDttpP",
  "key41": "oDyT6CYkqcA21LKaCQseAj8rKic6DArUC3GBgybeV1hieqzCXZ2DTMyNTL4uqhAhthfuTF9BzKewrNPgB8R85ct",
  "key42": "4zMTi6PRTKtVERjU2M2sBLZCxf7sxgU1F7NeMLPh3SkNa5ADAqng1abY1VkQ9Foivxox9qvsVWEKpoH3RQ7RUNwJ",
  "key43": "aVrcaKcKK7NrVXXuhjhyCHC3X9sFQsbmZj9cCd2JDHPBqCEzAEeScuCMtWadaDvsdvfavF5nXhMreRjSedth7YG",
  "key44": "tFHLY1NEL4QZsXZj8AkTzBuq4aQEEAsh6SUU7n5znkqYdS9Xm33QL3Fi3eWcFQonLrgcCLiX97aYD2G4ozXNG1b",
  "key45": "41Lji1UqPTWdZ6RwCoCRUAbBKfCxUfjnLWZNxwPnhKYX94xmA5hekLz7HeQBTLFfdmkVyvbT6x92QTaApkuPnou6"
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
