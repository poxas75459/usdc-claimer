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
    "3p6ycGUmUHQfcpewihmh5xfo5hxiSwAFE1N9XBEaQqy5ANfuvZGymcNdfawFTDAMhv7DbnRW2yesbiiB6XwsaFRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwJrA4hPt4iVyPd4n32tkiX1yf598ovBFGXcjAqcmvkkLq42rdM57U336eYEAUig4bbLg2p278saQWJKLQprHTk",
  "key1": "vkudbsNmGqE8GsBAB1M82or7JRUTrLVWvebdBz46U4A3AzkaEUmu7XYFLGrbYdY7t6ZyCRsy8iJAihrvdDN7bSo",
  "key2": "2HaWTiAihZg3z978euRxa6KuVQcaBH4JfVBJFXEgiiMzPRj9npe957HxngbD2LLPuDNU6f7oc9K5qbU8BuGMcJGd",
  "key3": "4M2v9H6mg4HKnTV6NUexFdMFFHFfJHYePZtusvEXEAZpsVqwyLEVRwKMNGmRdi1VimtjXT3Bxuuwd4U4zDC7HpNC",
  "key4": "3TEWZwfe5gCCXn9kC3S3zCeTXTjzn28yBH4FEeMTknJ7NwhFsjxFYjyKyRf9vALcJXzbRTqWzeKHgLaEGeBMib3U",
  "key5": "7dTFRZ79nBhkcnFRnUqA8vNcZ8YhAnKrCQ3AnZqYd1eSVyb42mUcQZmKH73Tc94axvh6MnmTcCN6aPVuwBgXUxA",
  "key6": "5gSJzpY6c2735jHPbt7d3nnZm5c8atr5wJXYmH4ibhBJi2xuAWp5L2KqAH5BLGsDRooR65QkLdRBN4k8spmbwJ8f",
  "key7": "321Jb6VcrywedrDZ9hw6sqTGfEnza77GpEek9DTUW3FU69viu5yTwyBmXizPkBEYADMMghqR4bzE3Pgs41gzB96t",
  "key8": "5mEGEE7KFyPijR5GbDTfR4VuRrxsGxwUYwrTBKH8zHeJiAu2jfFUHspcpVhzBnjsoe1cj51icrbHfYNA5c6vKTjY",
  "key9": "2fwwaNMNos852jeKTuDqWgUfMRQqFnqRwvKqMnCattrKM3raAig4CaBKLdsjcZKhv2Asie4QRH3BxUiD6sY4Gpiy",
  "key10": "2yz1QX6RcJBCkJiPzJBhfFnoZFmzdxLoN9ouamj5HDtBE8HYBTh7NLTxbY4QmWJWRy2cQaiXUpSeTwrS3rJGvbhQ",
  "key11": "4VHmFMCy2g5fCRi3WiiHsjHXUCbYK8UiTgRLNYN3hSJZbs4j68acXZEdtiqdQa9GJB4JATTPiTwhdpn1xNRpAjG3",
  "key12": "2R3U8nJpZepoEhLJ1r8iXUmyoZbhwc8rav6Ws7K6xzcb26h8dcMWftm1uWvM5fNDee5MQuknS4JomnFk1pyePH8q",
  "key13": "8tF5qdyVbeRiykUirLzKEjfvC4KTBB2UWCUpvRjaUs2fopd6ReRvETghXAf4XPCjUKmeebsrb535EUAR3q4i7o4",
  "key14": "54ktrEZaG2haojPA8aynFZyGFvW71NoC1CoQvUr6Q6vJce8iT1xaT7GXQ8N58XkXf5rDCZrftm1d3kWG268mLTNg",
  "key15": "64tmMA7opR5RtwEZSKEWnTveBmAB4pjro5rX51c7ji1AveCRG7LYd81kYYNFSbSaiZSE2MoSenVTAvsdnWAWCFyk",
  "key16": "2cgozvGLjqy4iM8MW969JhKQS53TKk4bRpZvrP4gcpjzwwY11HfZbcA9GX9jnDYqhtqV5jx9eDXWeJMQmBTix3ni",
  "key17": "et7BC6oJ6GMNWeHpLsDsqHpu1LpN4R8zGGpaWDuJH2LoTxkdkLSrJjturMYeUxY32RBFenAvbAeAmPGvLn5Y6ZF",
  "key18": "4xGzig4FCpW8bq9Lm8TvnA1oucFW3tBxPsHchGGMyddPkoPD5vVR3n6csyt1Vzvg2R3ukCBSz6jVenjNGBtYf2mp",
  "key19": "61cTy2dCTFqniLTDvFDXu11qK4JY47tPtHqAiffiQQsxkjyRAXghtaLGmgtjfFyJKeMSWcxD6hT9DrV4EkmiPwW",
  "key20": "uSxZ4wHKmCxZhKmJmsAseNioX7xeYrSZnwT6iU3BArXE23JjAzuagwo9kUWjYf6k8nKdMKSbdiZJzd3n43aqjsj",
  "key21": "5G9RJfvf3rTXmu6BH9ttBn6bQ9Se2CmvaM7T8RcmCQ6ozc1mSVuvzhhqs2P6M3u72ji7BKhiFwyw6HZfCQubQ2DA",
  "key22": "63aDWfBkSYrQBnCcs6C7g1RNM82vCALJSFszAshKFdnqABiJUxXJuBXnQTNjeyPvaZEj75ju8rzhpDtELxSe1Vdz",
  "key23": "b1gF5ij1BpNsLwjF4hTvJbiC2KcRfiWGR9bGVDtzzLUgWnx1RJrMnsyirMZ85MxdMhA75YPUVjLbRgKsZoPVCia",
  "key24": "4chafEhendKx2BPbsSKtNChhweDGtB22GT4EureVa7NHY5pp7vNnrPTVZYRkX34eJXcJJbGzL3S3rTELsdSEiFvF",
  "key25": "2rguQDVNmtk1HvLFR1wpAPJMF6txUvb3szXgjzLdH6GR6osBwJcYd4bEiztPBowec26XdeLVBvobBhrpp4DNUDXg"
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
