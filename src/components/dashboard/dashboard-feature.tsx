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
    "4ZMFR6UKNPtaqgApNS5AZptBndyZMkbzTXqXz2kJWS8JmNBEAKp2Z2tFky6rZZtR63cgXgoRuPyrdv3xWd29EcUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abWvoHV8M3BBxrMe3H1hwRyAYM1FrBQTiki3puA3i66YVdYf6hJdyBXpcGNQX8aZ2hP9fzSEoYXCtZcfk53YFRD",
  "key1": "3dyeMsm18hTLr2JNrzChUnC4QiXJZWkgTW34VRk9eSZzsMNqgdViTuwpAGhEmesZsM7ukGzTC5upz8fk6H7nV3x9",
  "key2": "22YkjtFxUka5mSy27bKH1TGfXciABFDRfESqpqb6iGDrY1rk7kbU1FS2Mr27HfHBN7vfedZyUVFoEadK2xTTYVWM",
  "key3": "4WV8Yn54pobzwS8eMVCcpy61fgGARS2C48t7dSrJyd732pE8T7ZbyJYKXV1wgNzi8pgUiG5bEG62f3qVRuTT35xG",
  "key4": "4muE8vYxf25DFCoaX6BQoLJcgDvWZFq3p1arBrx8VV4f27jJUsnKtdgoWB623Dp3oRgJAwficYgLoquUzFHigbq",
  "key5": "4TaRJL2mgVb1NsZ78UA8Ekwo6PEqoQNSoGiFx7fBzv5BGmx5rfH8FyscyHu7E6CZWDsj6o2dcztVviKDZmQd3cGH",
  "key6": "2p2TeT7yXiiFa2oKrmazhHrwsby93iRocV6TeeKkFAzA4v39CEww7nfipXq1A7gY46GB1ywJX7ETC8Kka2H8URVw",
  "key7": "39ZLf9sfrKbF7Kj1WdAJDYsW879PvPWncx59of6x9izmvVmBEGxS6c6fi33zomKqFKJ4ASLDRVs5nXva9b94K2Uo",
  "key8": "2q9wUzcg5JWxmUkDEdkZYZsv8B48QXHWEdWAmiwD8HQezjQ1QuFAfrsAQSbptMXmJxpKTQuDVtnHWbjM7HhaZXFk",
  "key9": "2DMXpYsKsujMRFxhkjYZ14BdNAKn6AerqR3BED3qw8DtpFRvuR7oowAv3KtuRNbwDxFgbnDFgrPJoXC8gZS9G6p3",
  "key10": "5J6UrJTUUQBeFfcXDTsuTt4tJZV5GhwvhFB7QWDeHwkifXtGrV5bsKkAH8uo6trc8m9tUjzqXbf8tNsS6QWtoXaw",
  "key11": "5isE6n4x8NeMrUrTbkyysE6QDmPMnHiBd5dJYr8LJ5Bf5Q99Eyf1HNg6J4fc2zJbL7Y2YBo9uoC5qMKQFp3LJcsc",
  "key12": "5akoN9s7BkXjAQ8oWS1LiSSEeKua2cjQHW42tEHcJJdCgbg33nTGov7vDVZGECU7HUPN1xUi635qfhv4uZSsWmDe",
  "key13": "5ocUGqUqocDFeuJe8FYaHFHvqcbvuwDpq9kk9wyyjv6LcyVYYeLdtK6sKniqu9kAeQdrwaqRfcJ9ASawUiBvszWL",
  "key14": "ZUiHSMUboworNTMpgh2KwqthjPJkkECdAoiy9UPcXwaw9dzMsAudY6CMVRWTpwQht344sRDaeppR1Bw7M79GqLk",
  "key15": "4qmiK6jEYtTWFP394UARJ6MvV7sbQ7dxdjMFnsmK9h4n3wewhNNDfk7v9AEmGttN618qnFcEJH8JSorPnXNoYEPo",
  "key16": "21g9Rq11RnkJk5nqwhMZdq98t6hgrKPt9QasuU9RQXcnX4Xy1GyR86gEmGhkduquJnCUgE1xjzHJTwBeThnNvKzR",
  "key17": "2Awr8ar8obWRbFCNNWBpuu6vtbb6BvVXdMAd9ah5sPBiUuzTkF3PH4twADGhUkwqjVV1MBe27g5prXFWDb137csq",
  "key18": "SfQy5d9D6FtiP4vfJgv59XjshTAKjaVgSGnNFAvN83iyu2Bpzb2XDxtU5ihWTSC9h8D7V7qNbqTYyhAfP8ou5ve",
  "key19": "3x51rtoW9PJFWrQDSzyLeaYde8k86t5mpDHQXbHiQYug5t6836JzywMJa3WFDBmTEqhV3aSxQDmCLjXRQerMiuPb",
  "key20": "e9yGN6TYZa8hf68LVEznTv3TPDHt3ys1uKtp2zBwLbUwzau5LWGuA5ydVUAivo6hThWtrou1DSpdmzNCpZ1Wkpm",
  "key21": "46oH39WWNK4mkq56Vi9o78jRyLuuoNGVLC3AY6MZCteHUGLFFZUUn5Mc9EJp5AUPBjtLJgkhrukQddtC883N6aNf",
  "key22": "DxP3Qy8kceEyfs71DFzzDtawTH6wZEUvWZZzEPcygiHyPFmX9HMYM8Hxte9RRpMYs9VGBwCLbdVN6HsKTD7kfwz",
  "key23": "2MUcKS8emjvf9dUnxsg4WvKxsbzu9zNbpbQLdk8ernbmZtfY7mvciyiQ4WC74dWppi32nz4rfo8iZFuM3VXTGoC",
  "key24": "3dFd3PHiYGvCCRY6YMx2VgZSvV2Nkt1ZfBgTSckswsTpwFpD9K8xSVJUxUxTA7MGTcNGUmuAzqSJUoad5Dq8skXU",
  "key25": "3jouNGVu1yJJMjrsL7EPcBfgJ8ZxfERhNSLY1CEkh4MBj239d6Y3B9TrJSQHCMq38cncV3EuSP819huWawWNuAU1",
  "key26": "2eFS1cwcU8TQYsiGBhAVK3vPyhiirP6N6gW8UceaW8wDbSnLap8d2FpYmnTU5yJpNUisr3ivD8tnJwGMs97Xf2hf",
  "key27": "4XuuaBH4MyhhbCqd9nKAtYHvxKpmbooPHgF6vWubW8XayFQzgXHMEXzYuVCCZvfezTJmtBhLH1EahdJ4PXk4QSHY",
  "key28": "385XZZD2MKcBWVbKfknWwZVzjvmTVGs6b7dqqdfud3LhpmdmUWs7kVoLpcVg8ckmQY8ZXsKRz8MgXBn1MALUrien",
  "key29": "552rWZVzj1BMg21TaCbhekjzFQzjzMrCPv6h217XbKwsjRsUjoFNRmRFLmEuGK787dq5V5Xeq8zC4Z4KvS451uc3",
  "key30": "5PCntqcL3soU6zFvBvSK47KPKPf5ax5oQFr6QGghKiSwjLKGeTwaet183S8GWWLrh7j1kT7Q4UuQAckzMA9RRMP6",
  "key31": "QQ8qKo4Y7LKZFFT9kJF3qre6cLw6kLMmhRgMPjiRf8trppEaER4FfR7cXcmRFoskgF7Ukec8b9oBSvSbPriRAjL"
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
