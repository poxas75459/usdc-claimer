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
    "mDV8VDZ61DurMFrUts4kZ3j5bgrGLPr5mHWh3jwhkoNSm3ZpyAf7vAsXeUz1i77xzjuMT9ZLDq2tbtgGEm1iuWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zso368zPZY4yhcZuyXSYwz45WAWgewD5phEkf7qrVaL1cND9syB7ibFFzYa68cUVixMAwkpnZSNdCKeUEre2gBw",
  "key1": "3YDxkWLFvAz6o6poBAsdZ63GXSGHJxkkQfD4nnPp9frkWeWLymxmDEDegEoTzhvisx7rHu4qDGqja7mJjVapkaPp",
  "key2": "3Lbpb5ZwaRV25HwK8jbKEBnTr14NCQFUxVe9rmU8oDQ3DoZqfz7doBsvYBHvhC32Tq3fMV4vyfaXrgBpZHp21c4C",
  "key3": "4ZFcctygR4eFEJWqhsng4dJguZJnQNztpdg9E4ECDLnGoPBeCqvkNeGsdfAEjEyAgZQy34GeyAoHV65AUMyfMetf",
  "key4": "4NQXK5tHbHFMa8bd1KHgcLNK4yQATcQ9PcbTAYhc8CHd8s4spzfqdB1XRqZak5Q5MH78R49tEx4zMN27SjmjyYm2",
  "key5": "UvCv4FjygUKEwFooiKY1gZRoTSkj6dB62bkdSqQTS1SeUhbB42qBWtTvsqT23VoqeKRBvscwXRUTjKMT3yS3ewx",
  "key6": "uiuVtbjGmQyDAtVYEg6tRNKZGfGEMk4hfhnT4PePoKDBZP4PXGrDwyPxbLbmruoUAYDvRPkkKWuDjK5M5EJqj7v",
  "key7": "4mdnZy1vZ8ku5PBQ6tHzNS444UzFKwS2mvrv1gA57XSAatpzLVLLhXTHocS88ef6TLSDir7TbQa1CxHEw82GDTZF",
  "key8": "4jZjP6BnC8qoBdaHqRij2uiC7bckC3oAYGezk5jVR62HWvW7XigcdKmqtHuA1Vsg52HmMzJz6xVsyB7yWjRWxv8z",
  "key9": "3g3uai68oudoUJQQQPW5s3tE912GmBHGJB2zTUzLhXYUfx99Gu5pdkqdMP82t4M7moAwrXMKqC8cAqSseECMBM5C",
  "key10": "2Bmw6hs8P4PUg3GjFzwnbbEUy31fFeGYEpFYBUrjZkCJfJYCx5zXBJPLpgFQ4vc9No16Jb5es3vGfqyYuWFYUBmd",
  "key11": "3wofSb6rUgZewzeD4fZkMebc4BCghBHE6WUXVv2hYDWW5afuimbmQRt6AA5dnbhdeXLEnsGuq3cPN8Epgf6AkaNM",
  "key12": "3bQzsf3hurTVCFGiVfj87mdSBNwLwwBr5gJHStPNipS6M5qRTAP7CXeCBbhj4KPTMhtYqFZrxv1TZHs4tr2zSV9V",
  "key13": "2QYoaD7RbjvhqU9FMH6ymfbET7rgscyadu7hNCfX7X2hvRbcLwPdw6XtUQzqj3qR951kFbMsohX17EZE4MMyobiR",
  "key14": "F3MQZ7BXLS8SU5Y2y83SRcATSnxtQGFzZdSHBoVRuBseScy2nRAJbGTctuwbncfHrnYsHbmXBGFBD4R2HFgRZNb",
  "key15": "3cGv33fjUS2nsrMsukZ33PV6ZtnnQ2kYQnLx2MBg9a2chsBu8kNRUxNFvpF8KVZBupfThuu9iUHqPoJu83hZYP2R",
  "key16": "3993wg3seFK673bxaN581UuUDBAwc7dSZewGKGvEAFh9s1JBafocLXn9hSGPuNrFQLpuWzLRjmwrY5yLu6CvTBNd",
  "key17": "2DBz4X7bny9gWBxp8jeueKcnQbzB8j1UaLdz3LNiAxZEzRqHkFafZeBPZAthhhTBLK22Y284inxPTHWvsyBsxHKF",
  "key18": "KcHJeQNQwtekAKrsTG2BtLM4WdQh6XaicE6qoE1fDax77rdqv1uhcxjRkBiAEQoQW7N2PPygMJzhrCGnuZRG9gw",
  "key19": "2wp7ncCsBQVD5cahkvEKKiqPM2t87pBrcK57LonfYT8xGhjfATx5KXWdWNHR1tQeMQeTMVBHVXzoihGfzYnkdWdY",
  "key20": "5tdpXZ47XnNecxbYBtiNoioYQNLjZVnrqimxzTz55gqfBCQFJqa968t1hvheHaTyqwne7bSWwiBdvkKbm7qY7WTH",
  "key21": "3QmQ2PufaGFND3hNZGVnnN4MH4hDBf9SMVis6sbRKnbvQnZFWhj9mwcHPrp87Zeh2jog8aoPWTCaSdUydvpmcHD9",
  "key22": "4t8C4mQQVGtwVvgRgpyM9sHZQQFv4qSpLKNy4vLnqBpHjUy4D7J1ZxfrwdXiRVTtGHoSUPX4vih7xv3iJuJ6L59E",
  "key23": "5y223Hb5vKff2CQwc46T8borv464reGsJJQLkavBZjf7vJFjWndWVN1HX7FCbkd2XFvhaHkGuHzM52jeTkKDeUeN",
  "key24": "5TBSi9QdHPq9bo8esX6tZap6EFJoxeTbFbu2HahKmCrTP8VLASBVmkDd6tBSXWvCWytX4fxdiej8gy2G5GVqdvtJ",
  "key25": "3KtG1sguJS13z8zbzYYCz8XW2Dpee7oUdNtsHaGyrgjpoDFSDfhHuBeLrqgCttK1A3TzK9z9LB4nypWnTesAQecp"
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
