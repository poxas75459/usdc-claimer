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
    "jcJ7WAYifsda19bQTr95VXwWdFFSar7XKayURvu8b9LiBYN7vUobC4JnkuS1HbRCDq4w7RybZeTjt2eobPMRWiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CtenDkyrjm8FCaMro3ckdeUAznBJAif88bg44mssxXhC3t7cyk52CY6qtcqnJNR2LnFWwza5dM2yqqB4h797rX2",
  "key1": "47u4xLnGTTDfrd53FTzbhiEjeGZzRSdmwDnjRqSbk8Xe7BABgDEzc6poU1Gq1UqtUACGbMDVatSAYkmzjVPuZRJe",
  "key2": "2F7isiFQmVSPESidsHkKh4yTxXakrxn5CsdV1RRiESokk31G4oQEu7UGLKYkw85deMqj4qNJuwt5Awf4on7gdQA5",
  "key3": "3i7K7Dv6hGQArKZFxontso2wG8cJQSkQnPxfz3QkiKGMezXDSpyPxTbnKqfUE8phmSj9U6Kad3bMb1wN68gditaa",
  "key4": "5JCDuVw3hbbViah5Xrvx65FAG4nsJxfSgUG6vVwGGq4e9X5PwBq2vzgDJiNfEWFfjQDVZfKzKaUR9uAErfSiHPfN",
  "key5": "zhtWUnRZysek8Zu8ATkwtP4akndNcCfedM258rrESBaLsGEi1oSygekocDfhgduV8kVeCemzCTifFAMJB5YQkFi",
  "key6": "2rRRTwRn1BpYeEEgJE3Q5LGUw1eGVE9D4U9BqDTzPfC4a6nqrsGqzzN4E93MFs6LnuMQF9AXaqxa7eLWRMypmbUh",
  "key7": "5JYpk36tjsDpJfYPHf9WKEKzxGtjtkZRGEJXVUvnJjfenQXBsuemJE13ayk5PPJs8Lw5CzhyqUY19qUHVMQHgQRx",
  "key8": "4vJXVcePzjcr6MtGo1xWr4KJnNp5SEkBNBPhaX6AaxePD7Vf3HiYxHWZSd2Ni2vxXJ5srnHwG1JqaXU4z6UehgeJ",
  "key9": "VvsiUK7AMyq5M6YxstgDusVCqeFvcBwijfPGwdLooNBZDxWeNWK4uchYQY1xghpRh9DhAt3XhHzR5sdFKjnBXRV",
  "key10": "536ra5ZnuG2DbmjiGn9Nx1VfxESgWCJ4MvpN8Ky4vb5U9QmgyemYMJNdxx3SrGmBSd5spNJDxk7XgNxZKG9i8qwc",
  "key11": "42o1q8pupkzChG53wd8CRXpRTaCXqubrNCz5H2CVqBKPWgMqeLpsTzQH5Qb53qxZo1qDD4W76nDra1p8N6j1mxeB",
  "key12": "2M5Q9jiPJ8Zx3Bt52QUMBjLa132aVkstoBwgnCsp4tAgCEantW3aCfan73Vj9tDthEW6dEG4CUZh2qGkLNM2hNmc",
  "key13": "2kr3zv8MDu1CraZyTjX8Fk3QFfUbe5W5cDh38AHV6R9nsCgaAk8HknpbJobaSA7EUSzsj9dW8EicrXmwgcxaKuc5",
  "key14": "j6V2qghDWGuUKCbf9GmBiYC8nKfb9aKCStnTYnmbS311MKk3sqMj5tkYzAKPmrsA3cRwPqcZNsm18rW8mgbtitc",
  "key15": "3sAN2m49qCbVx56t9ghzBGHWNwuo3gHDCZZYwQfEgNneb4tTCCRRWLoUJ6ypA4fYq15ULanv3STSD231Fp7C2Hfm",
  "key16": "5qpouUPwD9Zj2SikB5DAvkjFkxarqGuwDHWsoz5Abssuvf9MjuzRVqy4qFiqtor5QETLo1nSHNjRTv2PhVjqCCvs",
  "key17": "3RhYGbZstneJ3qcAhtughKDdwsLekryNcxnJGQKERxcgHfcTievucTRFLE8XRswKRvxXyNEBRRnhHxj4CDDmsUbk",
  "key18": "5gaVDi2HDnxqEwnNqZ7XJNADm6kW2QUhfzQUFVEPxmUKXVPSwqHbHPZLmAQAdXwSuskPduqvaYhFa9CoyF9u8ZAc",
  "key19": "43JwAVB4ro2fpsAB9xAYmzc4RiQ6k3u63b4XHX6KyJqpTeRQxQ4S3BLhxqxCbeCWtFcVcfYLigpNYshUDd241DXo",
  "key20": "XHCQ5CSnqD1Evr5eJwsn2sdNHbCVK5jykJUsQFUMEyu1q6N53vENvzvWHoFNEQ4k9VNbf2aNRJZhsgj8Lq82KmC",
  "key21": "4wzqQ7YWDkQpdKQmjPnxnYkJuiESZme4VqyRhfE8imS1o2EA7g2Pzoo38QjaZUtqk9Bs8khDKG9GsfW8zZpCEWb1",
  "key22": "uTY5sYH1pXtRDvcAxcw3ULvw93Ut3CgiZZGaod8WWeJraAwEek1cYpSjbWGv7xsxjPGeeD9s7rUg8JZRgYdTWon",
  "key23": "58SkFAq1ZDGVAQqGRtkLeDbtodJmB3E8HxyXBvJ8HLp7t545oC8ckWPxFZuioAhSjFuRML2JTcMuHmMWJumqijAd",
  "key24": "3DN8dXzztqk7Vj2yvffK5QHy4M6nANtW2JjTq3kwqj6U3vnmbZQoXTNBhxxdhLA4bnHzPuricyqmBUTVfTcsU1rr"
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
