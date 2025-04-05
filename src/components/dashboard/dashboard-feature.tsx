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
    "35CBJJEBRYRgikyQubStMEzu3gANeytGFVDBzszDKo6cF4oQMihRTtc9Q8oc3MvdegduaQxUDdG17dSymXG5zCGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mm73MCcanykWjdFMn4aR7VVJzWfuBHNmu67BFNVeQkRUtSAC2hSBk6obgMKhC3ZexWsKqd5EJFztjesJYkwtLRp",
  "key1": "5RdaeAYHhv2rvc2bsoh14993eRWYjdZ9oGRUzULetBDaBQtCaUZXxn42md6UCu3zYcznAJwA3UnrcTb24PvL9hAc",
  "key2": "4JGyVUfJubxmQMujvgow9SoANJXMsY6ox9iLKAQw82gJPvJ1G8BVY8fhRo8g9DjCRGgqRp3stvobn3TzF6pK8SbE",
  "key3": "3H3JqVWVVe1XTXSdusoaunKdgmmaKyp6NU2dWQs2dTrChwydrU8VbFXrCiRrBCB7n2DPd5XN3UwA15v2qyudpZ9v",
  "key4": "66nnhi9RPBWa1F4tUAWKjfbsa4ELeNidgJEUzWeyk2JG4rD5E37EGahsAB2XmDz54VxrDDifYZ4ERMGN69zLKxsv",
  "key5": "2WYwCgRikASnug9HDychURMxLAcCdNQ1h1vZ4ERYkycEo4bZLjJKnMqABLk8D9YedQDh9CqdAEXUk5xRxHWg9XYx",
  "key6": "17Uc8rY1RZD5Jf8Sodng6ABDDtVeNej3LQrMxJ5bexsbemjgt3ddXo32z5JYEP729sxutZUrG6u8uvXRHXkptnS",
  "key7": "3kUrzUcTwYmqF2FfS2sfWNvaWzpn5HMechoYBBv1VQbfW6AVs6wGQ4UJzJiNfpmFEE2jbdePbiEqPoM92VkhZkRL",
  "key8": "oBnfMzqfY57tH8z8gTvCXoYoHzmZQ3BGyaJ3us8XUPvQAqp1PiDjpX8perfz4BHJiVWksJkag8CmRGxj83DSzML",
  "key9": "2HwoN3n4tFPvbausfPZb5MMKm5W5wHnmDFmZ1qRqEPg7uYAqCDqv91hGJjwPaV41RrvsiyYcKiDMUCy1MpuyMgQn",
  "key10": "q9oX7ueyrq5jS8qAP1m6ejeLHxghd2Bkisfsqc74AFnaaFfjt7D8cEH3aUKKbz7keENvFnNKFHnUenaHfaip3nc",
  "key11": "4rV4HCng5QXCnJRDGFGhX9kbTaaZpdsjG5sYijeH4L8UMSeUZpKY2hhEDf5nDm3V871Krd3GEBsixupNneVtQJKZ",
  "key12": "3PKo6TnzR7js4w2gbrg1JvyrRRrKxyTzXM8cCK9RLdK7241HnMAcgfJq5iYXvoEJ4JCsRxtrqmRtcuFgHWcGnibe",
  "key13": "5xpvUMxfFwNuFMctv1atkhgtJ1AMtphA8kfLeUKFPAoKht3zAWNaBzPzP14yumByk9KMVcVn5smDLKmEs57PvfDh",
  "key14": "5WB4xfGo83FQc8jozRq1rvaGFWjLA7AztzQkBNG2dzN32xCXrhRfXrwcSeXUhnFw2fzSFHdDFqpUch6kV4FRpX6E",
  "key15": "2xH3DLneiv32Efq6tFrJo9TAzVimwhfqBJfBH3qeGfLQEuoeka9i8o7RoUu67wd3Ciqv8mHetqp21YZGHgSyMY2q",
  "key16": "5sgeZXGjkgenVczUzxNBQyXUT69yUCCgsGwFMcSEceuhhDSRodCnQk6ze3XuhRToBaMq7cfEfiXbXoyjC6Gi3HzQ",
  "key17": "2acdSichvBC6hbjXdLNrgjg3Tw8o4WA8WJChJu2DhjGNnBA6dpbH7BKiGmGUzD72RarVCDYZ1qi1FRYxdeznR5ZW",
  "key18": "5DrjoV44Q5NhP56kp4LwzwQyGqhKV3ztynBnciE8WgsMQgKHrRs1T7MGF1bPdMicqhkoj5yL73p5YuZf6bT6qRVn",
  "key19": "5RMBkJxj54pCy3jXTrf3f6SeDCcZShcPcGHUrnmTPxsfXvrnzJ2KRYf2QgYBtJG6CpsnQfZf7BaxrFw9QhsS19wa",
  "key20": "m87kcQuXzzU5PC6zKnKNqymG4XKs6KRebwMDuRiVCfbVn5HVRCSxJGGkFrS4taxbEzJQXF25NyJiYfxu1yQibp2",
  "key21": "2tUXwHQ3wRxECirD7xuWKm3Ne987LBKrakq6kEPGNbrVp6jHvs2zdd2r5KuxNDZhp2cU2iV23DWzzq8JHAwZmuBg",
  "key22": "kyYMQ5F3hzXEEqmzsSgroEJrtjkcGE24VhGEuedhgsn1PZwkMBTwR8m2okxwswtg5ZvV9wMsrX8VLjHPZusBrVC",
  "key23": "3rqvLoApcxpAo5nNi6srDKkwLLufTLZAbZfmbtdCcjaVMVwrmhFPvSBLm1kmfu6Gf4JhtyJREYAjRPvn4XoxvcCT",
  "key24": "4DEerSBKYDCD4BYjn5cUdc5DYHrPrq4YyifGsmUQmsKWbU9YFKtVb5uGfRMJmFjKmszyKXfwAMR27rDonYvzJPiw"
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
