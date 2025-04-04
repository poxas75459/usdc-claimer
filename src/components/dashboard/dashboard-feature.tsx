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
    "4xPyxKX3nd5CqifmU1CcFv5yib2XwWLkpSJ8MoPbUtT9c3DScZRatu8bCrSwnSUGXF8CmxfTtPBrv9TW3q46qoAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YybTtufyGrKfX9N8VRS3ffteytTyXo6dJoKiuzyUeMdNfSU1pq5fTt2b6p8VW4oH45G61rgsm4pGHGfPrvSNkg",
  "key1": "3iTmnXWhjVwwznbV8hrzf7B7Y5J9qd92AahojbiESqtdbFP6TjW1QdP5JtkDzEo2Jj45qoWh7QmXro6ZiDvRD8wY",
  "key2": "2WJMUnwYpnCWszwvnqCzf5Jzffxt7iY5J1QbGweT8Fd6warTQvxnAcUMKdChWwa7pvku3Vawtg6Vx1HN8kHh7cmc",
  "key3": "zmEk791mGWBV7sJD8PwaMRNjySQVm85UZyaMLSCw1LajxUz3U1adezJTnjoefna2BwTMAyp6SUwAkFtWuKSg46Q",
  "key4": "3mwdNEJ5hoeiHPLee4b89YBqpQjoBkYJkmY6iZowXcRVHcSyu3muT3DZP1MR1o7H6mg3FEzhSvUD8tFq2G48mCjv",
  "key5": "4Vv7HXkcEisxaET9d2BPFkWfC68sKNDsFubVPeG5JsPFEPwhPsmoVqeKtmX4svWDgos1phSYCNrdNgtKhUdaVv4q",
  "key6": "2KUC5qynShWY5vUMbLZ1ggqhew92mKUrZzhA7LBtWmkdSqsLPGhodbnhaaKKHerfasNYnuKGfECf16DRjwFrsnyn",
  "key7": "2ZraZ3Fwyuk7eKHwk5dtY3WwCJJk9CGWe9atLfPW8zQ84drUbkF8jB8PQyMQpaJ1J821DYVEG51FbiPrNvArh4c3",
  "key8": "3b3FqZW5Xy9M2wKsmTMsVCQYtAToryAkg657Urd2uZ9Xi6MADRMbchHzPWHDQ9yVPhxB74C98CtVX6Wa2o9i3Lxq",
  "key9": "48Q1MtEUdD16z9NsoCfXXH4KefqPK8iggk6yqwDb68B1P2ucpdjCiqS5xiJ6UHJShXpbbTjuygTRy4azN824u2au",
  "key10": "2e2fPori2J7oro8tk1ZAxQztkeqtYw6gxh1vkUXd8sV421QWbdgpsYc3RCarZWPg4rAKTRUgrXXKyNVt278i4wHg",
  "key11": "4Kc2dr9GvT2Dbc9XDQwK6fkU3ZpDRQU1A41JPFtHfT7qdY8mr6Qy9Sg9DWJUKR8VG45mceG1nosaFwDFHMNZMe9i",
  "key12": "arP1G9uU8dNGovweYqtxU41Uwq16VRJvmdxZG67BrnDAzCjgF3vVL6rWcsFcR1yAqAfxDoWRW3e5zBNe5U8jCqy",
  "key13": "2hVZ7GHQKMwotvPk71U424973hgc5ov43yL5nhHXu7VP758tPX8Z98Vrvajkwt6LKcKFHfkVQBLr8AVA36iXT9uH",
  "key14": "4hDywoJSm6futPJpRNQ6Q5wiEUeUVJhqSU5d1Kt3svi8gE7ekBd3rNgcfeELLFxkrhZdktFa6LHP4VT3NUx5GHVS",
  "key15": "2rMLCVfQ7oyZCizHL4uMRGxCLXStpyNSwWMkU4A5NJJhYiAePMf1Zi2QhbtdUVSULLzy3huLGfBmpMjdnkfEEfDM",
  "key16": "4Q8SYnBB4kfeLM5Mwea5ucfc7k3vHCaW4mbTKwSdoc3LPSmwDs3UTcqSbkHtKPwScWSgtcnJab7YoTqVgmBYCH5K",
  "key17": "3p9SHGuXcaasnXnjZ12EMhCjTjJccEedcodY5GFRBvAP28AUzmCSBqvz85jAMFiW3p4W2MAHUuiE8E62g2R2v16V",
  "key18": "2LWRF416HtRPWX1bZcgW61EQxaH4spUCJocArZooWTrDPXX5MYAkViTJrqMAtbHFfvGpQoeB6LFibnQvEWJcR1qS",
  "key19": "jmzY1w1nSoTQadGhx5aYmFxcwdZdELYnjgAJijuCU9adnfK4y1Jx8PgQ3dSo9iyaF8W26szyZQWBH4SrYd1Y6nd",
  "key20": "qxif9xbsbSfaMj1hVpojDT71Lujdna5NQQUxMuifijbT122iq3HuSnQJNwdFvnEokFVf9txNHTWtHdGVbyNPz5f",
  "key21": "4AnJyUoQAucX5U22zYFLxMZfAqH2ExLKrd7M1dRvNd7ckXuyNVTdpoTsVFmbZsA9pmLGBYZw3FaKcyjUcWZWg6CX",
  "key22": "2fH1vZn74KJQRgivNUneVuZgupbJro1goJN1CR2yFzuoiFyVe7ZLGymbuhR38PTPaDRSaCvvKRiASbaSQzD3cJT9",
  "key23": "3sDKd91wGjgmNp1a3zog2N8QLrbnxJjFBm6TPyN1pkS4k8Esn2QAkndfKCifb3sGCgD6wYaJ4fVe6o2JijJ6ySUC",
  "key24": "3RgZ1baLsAJrZygk28VGRQz78d1D5PdtB3VjDhhBsyf7ESRvtYJZyCt3DyKQwnY7K2tjLZFgjdWg6jrirCCRJjsK",
  "key25": "3yPSJkh2qGDDudBKnZHZCx4wMT4WpsFMk5rg4rfPz8CVbhzd6ZDyb74rGiWmzPMj13WUCgBjYABD4js6Qsa8Rk6p",
  "key26": "LZsCFEB8E4yxTTDZeypwLyLUwzpJcVCPaMKQ1w7d1QjSdgv6Er1y3bjTXYoUhBysma9tEKZ87vxNxaXkoTyuuLU",
  "key27": "4UUXJoeXL9SQzaRWRm5BTA6ezHEae7VcYL1zp1FFvTbaR6ato83xxX7zDKHcAMoPeMUSH9viyy8FFMLqoLRGUgpg",
  "key28": "2JPbrj2QZwMyszx1zVwqQ2qqnuJzF9sLLpN82zNX2rxuynEPVsHUY6XJH4cMKhM1KPSQF8nU5p3C3WNrW27igCVQ",
  "key29": "121SvDa59yKxbWcv4jkjEU6Au44eVxWWHKYawgXEDNo4uapX8AA4BDX6Gossxxa9dA7munc4dw98TbzghAWc2LKF",
  "key30": "53PQcd2inEi8x8Vfa2sBbCiowNJGpojg2k2yBzfe6Vx8wgYgUmoC17P2AivyDmswyL1MEryjYDkXWtzDEPsufbXn",
  "key31": "XVgBfsoREK18qRPpi6ZWjtqrhQW4B8C8vPd8kAF8SWXoXtNUjU2PFo8DPXgAqG9SXEQt4in8B8jeZKRdzo7WeYh"
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
