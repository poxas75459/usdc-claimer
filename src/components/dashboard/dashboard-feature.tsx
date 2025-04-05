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
    "4Y61XTo7nzrihqQiF6FNkRTpLymtsgZgGnP8HK8c2rehMpAyGd3X7RHJBR3pgM32uNYP78ceFdeCyWcR7225FCah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mBRALkQsYtLRf3tFcf7n4G86HGrBgLejNDr6ZueGhhSomL5mDrcVtx8jQPWEP3LbT8R8VxUmYk9t9CXmtHDV5K4",
  "key1": "5VPQb2Buguaz9yN4o1YthFs7rDWi9ALWhCKLX5XcrUYkFjPvs4fg7s5GRP9VKK1CaJRZK4zg8BLiiYy4puK1PdWX",
  "key2": "2FEKY28TRF98o4RCQxtyz7WQ7cxaFUsYsmfRnGtEoeL6H6B1iSpAaYpFgLK4BcTjyMnHZW8yyyumaFruyH9CyCYH",
  "key3": "w8Xg1ZZmttZYYJgMqccW3cY96wiAMHtRQojWH1NJG7h1dqsohC6ku2GXv7dbLXo39V2B4g4oYTLQ7uGTFPMgZhB",
  "key4": "5kBH9UxJ3j65K7MpVTBVSBtqCn9jJ761ZjhP3cJTJ9cNWeANsCj5ttnZNsFBxzE4Jqee3LKpVJ2RWK8vKRN1RnsV",
  "key5": "2pMiV59VQyx53bC71hxyZjhVcuPxTMVMXhmuL5V4wuaNYVrXGoqpGUyXzmAXV6wzTX4zCByyHn6FKF3xEN1NQAYm",
  "key6": "3z6h4Cf98EPXXfnzLhne8STS9JsXygjA8cwMYpZTDgouXTyMqf8nZRkqALt8BZSErEi49LNEnfGvzFuHrPz2jFoC",
  "key7": "56B7MHoKGwkaTyTPgUQ3z3RaoyzbkCYTu31pMkUX6krUtLY5Cqi7vZmFBHUDU49U2u6WTUu4V92Q9B2uARmCvKS1",
  "key8": "2jYD1ms2bQeXUkx58WtMkEmAQAXkcSoYdKuykaaroV44Wuvjf4afufjV6sjwPZoMSBqBazKAwybd7yTQtLETUr6t",
  "key9": "5aE9NVc5SWiLYAywmkDXXCA1aVBB9h4w5g22Fdus94eGKNdgZnh9iJd16Bmgu3u5uVMbC3HarJh9M3MzD9FvDPdn",
  "key10": "Jww1PhcZDRNoa5xUwwjyBThzXJuxgBKxTk8n2gHk1RRNzDXBmRUqED5apWYYDHU9SwxhoqWt5rJU1XtPgRtuVWi",
  "key11": "8MK1BwNQ1PDTjkAAQFq9cBQrVdmQLgku8d1vtWx6ej8eUQX2EDRWG4WPoeCpvc5ddJ8eLSdnJqJ5JHnHYWn1PSN",
  "key12": "26CtpfiXPyUhPHo8jrKs4ry8W8G8KrqePXQXzXme8GEtcMo8pe6m3JwUsKKcQ8oSjuqKkuVCVmDDLX5Cg3X3Ru8z",
  "key13": "42s8qqKoxerK5DQFMdTy97Rzv1Mm7SHt83Vef8d3pXVHVNVsspTtef3aYUd8XcMePSmCH9P7SZoRVBVya7krEbNN",
  "key14": "5Hmn7dm67bMbkQVdSQ6En4dHJ5UBsGueUeqg8LtV3mUNgoiUkfVwX79JdxkfpKBTqCh2cDHnjAW6vdj2xLTVUR3E",
  "key15": "ut2nxWpvUCMbqmrwx9Z2MWiJh5A87nJN7FPhAbGUDMVyxga9qHXzWboM1L9VMQSEhtFnUX5SVraPSNMyYwjsNWo",
  "key16": "2hyXESoPWkBVUttfypU1N9k5rk7fXfLEE9WD8GoRpmonHji2jefH1tc4DRuu48oagND39RftBY6ZFNVNGJSLLoZc",
  "key17": "5RcTpCZoqxAvntmraxhHNL681JaDW5WmagVfMAsdWfq8mjGa5cFeZukEKAQmNbEMgJBoXZibWryLeP37UsFkBycw",
  "key18": "39VN6woLbt8VJhGMgT4jham3i2m4HwsZ4qE83bBSJg1afqrhtvdKN1QpAjsqGnhM74u6xvBfNySwwtdpUFZhqwgE",
  "key19": "Wj4YYVgxmdtk1z3sdBcY4EvkxyH8kpaokCDKdaxzJaUkFpY4TCaU2sF66ZraAA2QGHSjrsVc6MB7dUGyTQeK889",
  "key20": "4kQYWS8TwVRP1Ss6XDWVM4LmWmwBc82dUmBYwRLcBSmGxjYgfA3Vzjzrq7vh5UBne9D1RfQPGdWKmX8GYb37wJkv",
  "key21": "3VtNpW3eyAekV3iPsqLW3m4kvALMMDHW3B9TnksmY9pftw68uE82hTjp4d9XseZrK3tUXhCii5sAz2rN5SXrGD1J",
  "key22": "LWSZjU7QhUVQShuHNoAbswa19wAGuJgDH3RU43BbJ8okCsEQoJQb3EcWCC6Dh3pCURiYMSeLfbKoG2dZRzncGaV",
  "key23": "5UVqFaPbPKqCCzBWqecC3xLuhfaH29GMAxVWFJgQCVmJGqvCfcp5ArSSz966edj19wU5hxJ9DC4dKLpk8KxuWhJN",
  "key24": "5cXEAxkfwcm7Vv5kdm1RNoiD943W3FsYSeruqRy5CST98bwsqBAaxM5TLusheK7utHrYuNfeWxRAVRRz9UKc34ea",
  "key25": "rX79C2kJRi4Ry9ETKHZeCuzrHRLqPxpS6oCaU4QNQVcBYmnFimzXnxh8KHWQrggbmoio6z5EgiUbmFsNjZpKLqC",
  "key26": "5TxidZdSKJjUsMfG6tHFjsf7oauKbsFCo6PjpFeSoVS8eUwtpG4UAk5i81ku8SaygTUpJhBVB3PkUmPNyaLS9gR1",
  "key27": "5FgfucvXUyX2CLh3PRDYRf2nh6rM4cFsjfKohbVLEeAL6pjQ9xuKVd6NfNHCBQCbhBWQJgUUW2sW9WhUp5ya5vJT",
  "key28": "34nuxkxUyLyH7VdAeKFnM2Y6BzvZvYA5JmwA9bktTDhupziCVpmBHL2xUwYDTjw3hKssMpM2x4WhDwDxbfcNxazQ",
  "key29": "5d4mYRSCKTt6jDnRrecyQfLTBTDFFYapzFHASYGsHKM3EWYWKMSpgRpZDwVNhT72zQwVHqC3THydhdVBw73arxfm"
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
