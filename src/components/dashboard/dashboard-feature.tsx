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
    "zd4wtAYEJ5tmkx98CibgJkHa2tB5HpqqMfjaJYfXnLx35dhLYRnaoCtm3jeufrtUKxbD6hnz2Q99Rjfxx63mR1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Y3KT7BQJ4kVj1ZkgPQ1jEYmowse3uu3bigeBYdSaEcqPLySqADgmytJ5x3bYCfcUFnbQEWNE7BWC4MkoNfztWo",
  "key1": "2qFSmjEHx55tZmttwH7tdwjPoJGrnaRGvizbseCCUyWfS38gwuKfGYxmghh9hNeGcLQbrQfMfc917PrDhD12WANR",
  "key2": "P8ziuihkJt78UND7q54hFwgsTSnSPwYrTuSVVqC9Hu6gdyJA5AN9x3LNEeM25H8vebiK7KFRnjuNQ26nbqpV8ZF",
  "key3": "2CZeuJSJeK6sEk5UaDXZVLPdQsifysEyfiDn4amXjDkqLomz36a9F9XKqBtWeAgoN6j3Nva89JKdUgtdcpDgiiXh",
  "key4": "aGdBKhE48NMgM5JYUE37Ak721Liw9Q7b1TQRHDSdM7zqCXnSwNFLUcScxvt86DuekocvDcx6hndBHCcFw6LEqiZ",
  "key5": "NL5wjnnFPkFJb5wht7uzdwcKyNSZD6gNaNDRayApaw2xqd5sEXoKnnxP1r9WyG2B617ZLsWYwGW1vAzZ1JYPXfp",
  "key6": "2XznBi3o3tPebQJjZ7eV1LRscwSWZ1ARi18Cxr4785PRyj6DDanToSicwe4zpKTqbJ1e7qDBHBvCzczQeUjtB8fC",
  "key7": "5NcmopYT4mJgSGm93z2oNZHLNApkS6h4dAVAxzk8g34NbFymgsPfVk8V9UYgMyjQis6Aj5uXEJneji14iC5Gt7B",
  "key8": "2Fssq8zPnrjUGn399THjGzyyyQwWbPKVEgjFX82bxWrAhnWFw1f8FX76r22NaVcSNwD2YDXnBHSZ8ieb9Z5is6QR",
  "key9": "3KNT9s9kR2NoNkqXhLMXyoWdEASgkvzy1SrtEXSDUN1DPpZoYDr4QLSUp4yWF4awQ28CbqDAtgJ9LqqQdQgwB6y3",
  "key10": "3zkbsumpQCPW1CnzjftWxa9GLPnzR43Jm6W1nbZJHG29PduBM9jKCjvxFW3KG4x8My9Jz7UfhuLnnyLGupaoNdUX",
  "key11": "qCvVKVhCiLYdZKJ8BSknxVAwMh5rFXJCD2nNk3MWwgowvvgMCb4WnmD2CY2LvuSYV1Scrj5TdDuhZzsYoCJs58z",
  "key12": "2Hr6jrVvZ3vazmX1zxu7VRT2owoG4Z5sFg4WGjFg8qXXt6JxETSnogaDsHmBhyYgTjNEBxGq6Q2x7yyLapZmtUjB",
  "key13": "3beB1bTsyaPaJVDP8ojY2KVDLcw7mkyZA8ZopFEuhQZe1fsUqSq4By6TqdXYkf2ZTersrjNDGn1GYYq2w8sbAxTW",
  "key14": "61xsZL5RnRWjJrWZ61msftZBYDeb1Fkc4gfNL779uB7uzEA4z5AP845pQpjXG15811Mw35vuUNee3u2pfBmjxq7w",
  "key15": "3rwv9RfBwrUSY8THPDU6a2aJhimAjTbbvSDDRA22VmSScHVPx3EtigMrJg4fL1ibkRwAqnDS8q1dsYm5HrgJgrTR",
  "key16": "PMjt1MDe4BLCZcjZwBUuDcGm9NMHJCa8jcKQNNZVdTQaWLHxyxG23vLZYHuozd3hzMiPyaAm3crY9X5YqdToqiD",
  "key17": "5xvj99nU2eKBVVat1PP3nGPtY119iS8G6eiC2wx3w9D6MU2affufHVzakAH52o8XJdKs44znyNPcpmML3CvZfRtJ",
  "key18": "2mMU6roMsxKyftMyAR9cVUdZ9wRDDnUe1vKhdR8gBAkHuPakLRcU9mG5KyYAi6gqTVP6abDzjWETymyfquCgjRsu",
  "key19": "3j1Xuj6NUcpVCCa5bhSLxbNFEmqqFc7Jt9Zm1Vti9MUcbHtP9wG989y4euf2jD5G1aTJ3JsyaegL7i878AUeagfM",
  "key20": "5tGLPWcwXY55xUJXuwiAumcGzFvHFNN9xVVPzLBZmbNp7D8fKzJSgCY8R1U3LWqSFkfbCVkjGRKPNoSbyJkCZ57h",
  "key21": "2vXsjKNEk2NAWCpkMod9ByrcxXAQNEwkxiBK3yuYUU3hkpUkmANfnRqpK7oxFTH4CAK3US8EC53GXtEBeYWLdrS6",
  "key22": "PiZj3j6J3cybcjUEPXUFkd3F2Fmbzo5oQfqEiNNFLLk743KCfV4BMfFSthRNq1Sn3336RwJvxGW3LaufyW1z8gy",
  "key23": "62umQRwsE27raET3kJu7E7czV7xJ4RF2FDjGUJGsX1JvvZyBhhEhh5eBCg3GcdQyG54KdpuyjjxKeEmm379aPhVW",
  "key24": "3oKWLdikpB8hGxPZF6Ry8HkEb6ZfqEuRpDzcEcwtqaaLMosenE2F5sTfFzBhFaqL8iz1ozGaGrT1rqjaE3CbbgXN"
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
