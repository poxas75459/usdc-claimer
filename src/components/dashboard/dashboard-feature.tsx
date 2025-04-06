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
    "3gHw4CGNmCJPsak1o655Fm2SxW4q1ehiH2mDsgzDX5i61CxbwJsq8weeKnFN9bAUSdLPdJXa7XtsmucTuKEFMk16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkxWrrvN2pEASCVxANp9CobU7cwdnMw8xoZoSKRvuH5wS6jF8YQhJiFsSg7KVNeMWRXa9QYybEZeb1jg4ibTW5q",
  "key1": "bz3u3YnPzbpxyXXMw9kBtvSTeVfdtGzx57NfNYRxYmHnJZ4kYS2AGffyW5dq9nRjuREN29SU3hWBRe2xj348ewx",
  "key2": "5L3Wmuq7GL62Tww1pRjGTqDo4ESXVtozdQUCeJ3tYR9BE2weBX1APaC6DGxtqJhtJFFyBo9XRCohoVst9W825Nw",
  "key3": "2ddXwwnxM3p6TJLgiHGifPrdZEjYCqpAHW4mLjqiyNQfTFJcMLyBxo1N63DjV3kS7TNmPLUwX3TGiqyEErnPeWUg",
  "key4": "3c5LiW6ngagwMSH4Z4P4eXQES71aChDmA2HqLyGX1hvGWZEWeE3RmL5PB8XiCC8TBXkkK6WuSkgZZEzBQhRVp3dy",
  "key5": "4kz9hqqv8fkaBCU9gMWc4k3q7eQ4UPjBzrWUdKx74bGsuDb8dA1F29k3yME1gEYSaVixPesyrYou6JyDFQHR1yPN",
  "key6": "3uH9Mj2PBKQ1j2yK4mvJQBrjCGucL8ytoLjV1LuajWp16MY3GKARGWeatG6sZdYRzn86dgX2iHXBk69tQ8Sn1rDm",
  "key7": "3qJsJmmSD4tvwudSowb7N6jDjSHvzQLwUBp7v9HBfvhz2zxqvCpP9jX3v1MFfW2pCwEAjUN5xzMpQMzStGTCbDCA",
  "key8": "2wuRdaUGzg9KQ2r1q3FHCDBKtaQ6z5KUbD7Xv1v872xG9eYKvoHz15P9HfXmNSShzYcSPLb17ejTgVZnEaDL2VoX",
  "key9": "5qyyALSgBf5Xmcng4VetuGmm8CWtJzaEPJEJ3h6cADsght9rXcV356sRsPc9HKGAw3tL3CwnABfg2X5WdMK86oFH",
  "key10": "5ZKRcoxoGcPX3Up7fVff3B1RDN3xvS4Aat5KdQbxrBTAazigFQ2VVwT7oWJJuWHpvA9foN3za2nqnZ2dT6Md4eUr",
  "key11": "55gYGwdpsU3AS27pMKSuRNtPukXkyUVuXEiT8aWSV4TDHr95hcKmp6jnZc3wBWz7SbWBzuTv84fHq82y1sFx26K2",
  "key12": "2uiFKXkPy2mEnGpdHaSKxyY46sNwihSvENNjX9qZMTm82vb7zjo35ET7Vy4DcLwuKvCH4THEuHgmDUMaJGzPGRWv",
  "key13": "1gvoXawdn43HvCE32gJ5aa2jwzvCnqh3UMTkSapZGf413sK4EEZxh8Bn5uWWiJvZp5FUjXp7rfj9uuCiJAwBm8T",
  "key14": "61wFwKqTqeoS7DRgZdMckiYEoKPCkx2nWpLRM2fkbDueqmNw3aWxYJYi6gPN9QN6TjDsfDqeAoKhVwqPNPu4kCg8",
  "key15": "3BFW9mxsd3xAkWkdv7ecN1Zhf48AQnAL3fvkgG26HGDFRpabSM5rX4MQS8nUHk4522uB25DwhV9AqHwP3owGxTkG",
  "key16": "4Ewn1wM64wrRZHosQN1cKfVF2hQPKdbsmtVGjRVR8KzrwKtNdqcGAbpSz8sQ3E1SoKrwnXNtuL1wssYUWpfZg785",
  "key17": "Sd2dhVJ1EFdYQ1BXVa9KTrn9eoSSpdAUmMgqYVpWGHmuAEay9Ms6jfG3CPgMMu18ouLPq1aavAC5W15kSawn78W",
  "key18": "4PDUACgExQTHg5Z9dXhTrgmsB75nXCTbLy1PWV3uCJWykLs8yHMeApM3jPovxjjdp4NZQzj8Di76oDjUngwKSaWA",
  "key19": "3WUEwsyJNJZVV6uueiGRALQz3TAhg5RrScgQyyWtk1cYkAncgpwAhunySi7XfADjivSmGHbh7pWXLT6m1cEDV6hU",
  "key20": "2e9aysgBKR43AqH7wgJ4y49rCCo6BGKn2gzmswg8ASmChiqs9cFv3hnVoxjMMY2WKQb4zg9bKj9nMEFdUQs3K9Sx",
  "key21": "4sGRTU3jpxuowzHkc1LK61iaz48UCVVkAqGHQgUBaWiLPjYfLrF94yVUjUGzTXbRxzLiuse137fe7FEbEuJQHYgm",
  "key22": "26RVZ97bn3uptDWGeamnFtWMbLuT1cS8LfAfSt8zzaSzRaBww3JPW8E6cATohDRFbV7FHeRhdsF8sgRqHvt6esC3",
  "key23": "3j5LxCzhijwNDkjNKcM6drdbtRqoy1YGewWhv4213eRYvpUNcoVnv7EcNJTvde3XhhBsUJC7G6tpkrwd2ebM7XW5",
  "key24": "5VahTuAN7aqdb3ytEM6kMXZkG86vwyoj3cgTQZSGe9gfsiWQwc6TcKuAG14Tv7BAFK6x9k23ucL6VvKvuoaR2mny",
  "key25": "5PeeqrJw8r4Af9RqxrkbCrz5k9EXD7unFdS3T1MSDLSsdgWfiDEu2xiRrxaVtUHaGoy7ixV6vg7w5RxbeKQ2HQd4"
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
