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
    "3i98SHLYNT5BTs6u6vsroFF88Fd6MBUzeEj79iQ46oL71GQNzSC7KLAp48LVF9ciKo1rspTsKvyB7JgkAJW5gVgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LfgpE59h86epm1ZVUKon8ZMNhz2qp446cg9PoJ5Zep8hoxUyLGtiMHXJTpMMR4TsnFQ8jKHKvpoT1wne1iXCPa1",
  "key1": "2u2Xqj4pEuoVGyMLUYWVz6iRErrs4NymHbv5oihuS5UjiYx3bweKwA2sn1U8kszGYYUVCnSXGPKni8kTSrFeYPRS",
  "key2": "2UD87Y8P3Ayg5k9jzZ95V5pLtN8JEKJVFN3pAVeCaUakSEnG3ZKr3xxYEjQdEiK4zMn4RTXvDsud13QvvfenJqWH",
  "key3": "5yUJNq1ZAFanecpbAFJfJ4Vv3HVSyXmx1vfcdgdz2s2UBBSuKfETcCrDyxY7z9P3EfXSEHHperDbnkyeKQ5b98GE",
  "key4": "2zQqZZZpkfYbMME9mQxcrzUZNcfnNjLzKRKPFjAZKZVkyC1P34a7xnKVuvy22fBt47jZmjg96hJxVzBsUJ3vZJ5H",
  "key5": "67F3DjnvtFjurisVoYxLCwrmff6N4BwjWhBED11qMTXntuv5sfM4vGVkdJX3y4eYSDubupMXJW5S5Uz8LHAXLqeu",
  "key6": "63Ghhkhj5T3PGU5R7FjXSai1jxg75zdXW9wx6SrdfHsiqgtw2VkiSgiELtVvSrPveTjbBCKxN8uxuTLczRwAzfLw",
  "key7": "5FAScADiFYMtKcYYyAoKx38urojoL1LLGgeZ2LVVHVT4QAe6Lej1UDYx92mmgZwMkGRBTFRRe9yZFDNp8dipUXmC",
  "key8": "PyRjMdSiNgNnUxA99TEMo2iWntz87pxJrgh5ctVvVij8uZNCH4DPSD31jrdn8fNCD32RMxQGaJeJ1N3monYhGFX",
  "key9": "5Yoo7ULLcRjZzuVKqSVLS1MLa8CjzzADnPeuEKMqiCZwj6BKp2S4Uf36n7Eiysh5rDikWyC5kTZpBWc2LPQbAfLM",
  "key10": "5XYHVzN32Ju4H7nPzpaNBZtBLhganQDFWMyqBeReYts9vTVdxMVCgxKJ4ybyRkHT46ntePZQ2Hy6b5ogU8DbQAcT",
  "key11": "qyLwVRcVu69JtPJRrKaXRezVw81XtUvrUp3ZRxayrEKM6ng8ddwfuNrgQzg5GRXtmSRr3Pmjc61mR2ByYAAFTqv",
  "key12": "5ZpGu7tFCVXn5aECMyKMiuYpCQ4JKN8zNgm4K5Pv9GiB9jeyLY7t7kspUXEgtLw3AgcJj6kw357dtpV86jWWYShY",
  "key13": "5kgR7jMGYg4H23qsy6NeAD63JtyDhbMSReMRF7wFJ69zaFneRXNqPSEWhGRpraVzrDz8qfTnopuQtqxd1XVdUTG9",
  "key14": "3xiudAMjAMrtSYjBGiXi9Eq67U7qRsJQWRP4UAkpNPBEXXyAMQT5omg1KnoB9EwvrNjQh2RUofJZPWLDXurSGVP1",
  "key15": "3h3bW2jiS3u3GMhP6vF3giwdasrEWhysgF4dvWFgwqiF5PH8czy1GuLXwyJfp6uNUJ2hafc8aHu6ySYo8XUyHpjQ",
  "key16": "677mignopWofyixFHm3teFDBhLV27eJHSqNhSL85gFBhUg6oAMxPBhGHaoVYJA5zguQuVVyZF5gTiCEPjd7hbtbx",
  "key17": "5D8HuX75iJinEDM3xc7X2VWUkHf2zdxdFQwgQdERA5KKUVbB13aFechykspirxJKJ3fy6ZahQVRmLBL8ED7vuLMz",
  "key18": "3jSbeKMPxnc3Em8Ys91KVFa1PZtrqntN2Qu8LQYuDVB488YCrY1EVHqAJQpr5Qk9seQn6LVsw2Mr9WMmU3FHqXeR",
  "key19": "5wkDo7rYkQ2oZrAN6w8cFJKRXiN114TATmhmukC7FxxF7Rf8HK3rGdaQmLP6xqAhiutUN83ksHPgN1R6Ka6ALN5V",
  "key20": "5UGUS9gGi6oY1digWWXCoBeRcGq9w6jXV2Q5m7tq89ao99PNUCHtVdsQc8dvTWtxkA4JikRbk4SfZqYoJ7zRZTVu",
  "key21": "3x5xuj1WrLRyuWPrf5WD9rRhJgJ5wW3LCvpgwJpT8m8aFUNAXnVyToYm5pY9gdV4sKMeuHfGYGgNRHmo3e7oP9cJ",
  "key22": "2YQs8EoG1Jy8Dmpw38iSPo1RycjtbcqyvWfw8wLAzfTBrnpWiLrUob5E5gewRYQ66QLmj8sNyfBq7LJNBtmnysau",
  "key23": "t2qQK3DP6tLBWzq78dJ2drHKisVoyaoKQ97a2ZVXR9HQbgcZWHCfhtmT831LYDi4AgLN5QoPpCx8u9uJVXvyC78",
  "key24": "4Uwm1bdiVauw9rxYChy7darjVh9wp5Yjuh9Wq84s5puBHUgwrXKZihnKC6w8X4RDaVneBZkMoTXPtk1jo1KFVxwD",
  "key25": "5zFQ7x8kUGxEjJmKweLby4JRdwNYXCVcVGKPgp4WNZgFrpQeksQa5c42RCwHaUbYfsCYWDv2F8ysnK6G5g1KCz71"
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
