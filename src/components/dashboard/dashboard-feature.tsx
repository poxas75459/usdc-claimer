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
    "hv3RxKg3DQoEU2DE9BECyz6rMKp59EJMLPtSWJsXqq9gNKsPGHZuy5786ZhNUSv6WhrLieVZHCTi5y4vdBbcx4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRf7RD4xVEDQyo9ZSgGYBbL3eXPLZH2CaoNRJGMWD6UfWJ9eqRVMc9jfwB5UdMYUCbb4BGxVxKiVNQ9Roousec2",
  "key1": "4MfbLXTf6JKEruxwLFFNsXNaASPhVt668nLH5BgTTp4s3uoaZjt45YzEdodgvvie1B9qTyyai4p1Uy4zYG2u5Bzs",
  "key2": "4mgDT9bSPU3rUnmGR3pUcqyFo15ktXB5kG6d3u1U7Z6NATrBYgcsRTagUCFcfJmisGn3QPLzB8GY47MvXFnnNcyn",
  "key3": "3NFFfBPZURPEZn2uP5uE3eseiv4qFvknc64rWpBrFAKXiZCXg6Db62VRSKYya9kaK7u2M93PgoMAGVJsDP2cAWED",
  "key4": "2y7wLK8aZE6uK9PAezNS5wK43zNmnqB1CaP23viTNmdPQj3Gw3YhMHWuQ32K8Z8Ge4oNREub4ifXVs2McoDJyLTn",
  "key5": "U7q5DaJB3RvZ2DoBoobLQqDZuCi5aWYShE8jRoDCadhY8P9bMqkDPDkmNKwZfZqQGsQ7FvcJLNRUAbx37r7dWHe",
  "key6": "2tJLHVyWqVAaAuvgcUpU79DRXcYQ9r62VoyLwAw7xKBT32cHfBYxeYvvs1C7wtJN7RE4nshTMscqum8AF4PLnvWF",
  "key7": "5c1H9itq19Sy5shAhR1YYMKNpvNjiTt5f52Mpkhz1dDTb5FgjXPBrbZHpmT65B6JN5afje21DAPUW3ggqUzdy1Ve",
  "key8": "4KNB56wUpruHehsHvLepfrDd82EEWH8L8kqWFbRoXT9tYJ9QjUEVVmu9eNHECz9SqXqiwSHWqWghvhig5BvrzN7g",
  "key9": "CXqG53xqTmMfXHUw8qdyPsB2YRJ6vimQpNbe8o9B5VXSQzG7t9JXvQPaS5DbHmb9ApRDQjeJ9QsAXmSmbqbuaun",
  "key10": "2kct5mLd6BdmrFNTgA5Lb1toFUXjYc93FM9DiscNfVPmr16SrspZ9iTSeS468HBjbFTum7iq3vJo6XkpQsyvg5Lz",
  "key11": "5ng4LrPCggCQbxhcto9zf9T6GSEAY2ugv6QQEA5axXrZMqHSWgiiC8towpWwqQkfAnwxmdkobKfJSjX1aXKndidj",
  "key12": "44ohWBCxrTADVJhHkdQ4bNsNJPizq7Xo9BBDHkwgN4jnrr6FzZwXQp1Nzx371TfXJmA3YT1pWQhjV3j6pcRpQH5",
  "key13": "5x592PL6av8TEZMtxsVU27vZmkpR1njd3wKxig7LmLo9FodDSGQPV9nYYGBYMuapuiSyx749zGZvSn1K4GGuhbjW",
  "key14": "3Y7Ne5fco8S2EgUVMEwXK232TjpCyWSLs6Nr6mjdAZ35adDUbHuRYUfhaNFmkPMSxvbpZ8En1APAGXdqThUgtmQH",
  "key15": "ZJV4Z8C5QkMHNZCAKCDCbbbcDgLfMZoQ1fGdnpJ8i6K4vt5vuWf1QrAPJMNNdtfVGygMTADp5vJbhfxrzchKDvz",
  "key16": "f1omWdR7CqX6LUKvjz4VXFLuov5qwqixxXjHCoMveWdH67Mx1EJ4WZLi5sC8jFxcDrkVAnu84K1dJV4jiA5VwEA",
  "key17": "PMuhrUnStGRDtg7ZNBFy9cae4UmRCBBDNjtB8bVxR15kdRLugN7gyBiYZ9s12PWswpKBe6q5gwag22jHJHmLsVR",
  "key18": "3trpKeQRFbnGbXxKghe9BW9ihztB1qZB3GfNu9MX6QGxtZqdY8vt9MqUi5NW3vhU9Q7HZa5xJY78mY2B5v6N1syw",
  "key19": "5XsYxTVRBBHbSQ6edDKSe15J61mWnoXGnyUmv7PanuKKxzuTV8pxvnZBthw9RUS83abQawfRToontN86dNCJ1Ran",
  "key20": "238NNK9ptXQJZJ3Qa2PEUTmNfMmyx1Uv1uDWJC3ZB49iDLdPcjt47eoYPy1p1LCfbKweG4AmwNV7s6UNbLxReDpU",
  "key21": "msP4W94oHbdyEnHVXwtUCGgTdKGHySGbPMnRPEUnr9Qr1vxMSVVvpbHNURBipGB5Bk6Ld9W1vqcdnjoeFNPAvCK",
  "key22": "5tGYF153RGd8jep5DJP9iHeCaa6YaNBLRRb48sUcPpT8UdxmXEzYxnajhrerqj3L5Y7xG3VjbPnQ8FCrqLCyXp8c",
  "key23": "4bTGheYaVE3U3NLMbxuJd8JGQqMfheF5PZG994RqjbnnifSZaAmNnCTu5aXwugjYVu87GoWQUzxqyeHmVffHdzd1",
  "key24": "3dx8v9YXrST72VhVkb48wkrZ471TURe398ay8oHj2Ek8dxsPRqmob9DE9cqrGL5Fu72XRAimok5Zam2UoRt9mFQP",
  "key25": "4FqosJ7LKcLms5pkkUJC6KLo5avGWcxiSPxokE8WoV67quB7HrqLtCH9qwJqrYQnN2nKDXEtjD3a5BrNEmDFiDgt"
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
