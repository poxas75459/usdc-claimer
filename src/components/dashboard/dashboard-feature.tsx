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
    "3SnqAALH3HBoCGLbgCwwxqU9FdrQRAop34ruqJtYQb9RNedcKb4vGK4spVM2BRSwi8EmmASVNNw6QiRYc4VJNV29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KeoAwQFW9hUtLeNVwBj3Q5GxZuNHTSMCtYKzHXPcMPc6xS2HMw4MpT94q58ycVVMCCp3Dk6oNqVpya5n4w3C7wi",
  "key1": "439zkZQhpx2SSQPVZyJSerPeRTyanUP9jNLhMbSzc7ej3NSFmY9Xjx1RzFfNUde535w5hvYb7dpAyPrudZR23Qc4",
  "key2": "5xR7Wh3bqaD4aoFXwCquCShB6ZUyNYV1DkP966vjDUau47NswkcsAvXsT6frm6bSEjUHC135o7FRFmw7Hx5GY2Dz",
  "key3": "33gmRCtxAgoVJUx3EVYt9mppkSZ8Fo6cVUtzpqtvZapVGaNV2LspQEGJNe3mr2kLh93rHLenXE2wwVuZtTRZhgoV",
  "key4": "2n1U6NAdpNMDJrQ2UvKKKT6ZAYhFFGsh15jkzPqzHZqCezb7iG9dvfQa1n9ArjS2AosHRUFkx7fYiw3K38LhpmiF",
  "key5": "4XXfzY1zqt1AYAkPm2kiQBUEnvzjxQWHWe7e4MTpsXJcqDbr1i557k7ErgWUwkQJkQmiRjAn6VMuft9P27ahcoAS",
  "key6": "4C5kPVQbeKSXzjksj5r9PeWXm35WmVizwEhPK53nbvSMSN1oqTvHpPEhYJBPLuoaZsPJSVVppXjVBv26Ymwr7VVi",
  "key7": "3nGiCyHiUJCoP3tQGBGfbo1NG39NCmqkj5p4NH54gx7gMMgvCBdprP4BzYiZUjGg9NZ8JR2DiEz14tAE3F6LLzu2",
  "key8": "3hoRSzRK5icP7KR2CTFPEqGu3gc3H3aTaa6vGRyd4vjBUtK3mmro6ztn4LY36Zgm6pRydz5T5HAzhdMJv9b3zoiC",
  "key9": "2BDy6ZCxSvAWZhdevfcoqjuFSdhyWSBjD3484VtaARmTTewfTMhGKvfgWosfkSJaGAEGN4A2in9yhsUoaXPVjeQ",
  "key10": "23AuqrvJ2QFWMzCEGPthj2upaW4mNHux5hQRFooSzL9B2suvYYvnTb7YTvGqsUrehY1K9MeQWFYNXc2cQd3nJd87",
  "key11": "3YYxeS7nCELKWqhGwxWfwEWvnDcYzMWTakr912r7BZ3vM6CbcYLxkr2AwpmN6KxdoJZmz94ZS38nf5qFCrSEzRfB",
  "key12": "4cZ9KAJttETX6P5GMHfMQSbqFNb5t7Z9HodEnFbqUgDvpfXfAwZ5c2jXcXMo49A3t4eavzttge9eeW2rPTQrRf1Q",
  "key13": "5ZB48zub57q9mXpK98Fq66HhaT1gb5bGSCDn9jpw8zCDRSQEMXpk5BPsvWGHUjchm1JzKZDgVzL74DwrxX8Q9CVM",
  "key14": "27nByjsidmrUE7mSm91AGUbrs1fndRSynkZgyMu4uBZCpug6o9zBdQ8imoZPQ1BM4GenZo9hsrZfjmTJRZA7hbcK",
  "key15": "61iNj9z8LRyJkaM56DzaQM15rsdqyR5MFU3pyp4nw6EH1ZdZNHnzrKm9WXs7qzNzBhyvve8FcwpRTx6aaEo9hDab",
  "key16": "5xAUXaVRzhrVPGCc93aeNBWuVUpZopRYkPK5xrRLqJ79bwUWvhdx2AtTqViUHribdtKSGe7M8Cyk3rnwiqQaLvW1",
  "key17": "sM8GEwjfZc9JfQvE9fsKzimbF5yotJx58nkfBHUWyBtCZazoSaK4yKXfftxNvVhmgtZPoSiPDxjL6XEKTYiqErx",
  "key18": "2NSUWs8S6UND3LDUBjtzshxdQDAaAyAYkC85BVzPL9zDvUfLmUJZHTwLpbKDg11EzKN32i2kcZ2q4LKDKWdA1BwR",
  "key19": "4jHDjvjQQxm5hAEEmJMoKsNo3gU9HGjDbxjxvBuJVp9Tap3vwz22CPynFK1u7AinwEajknAf44ai2M6nwScXrRWB",
  "key20": "4khh9aG5LFQjNsMCTdm74eAnfWXBP5hdmGQWVLKstfxHAW4bY2qfN7egMVyBAE3Zgse4vsjTwL8UPkfFbtGCigfQ",
  "key21": "3BcRPC6Fydmr4mPxQiSwFoUVSAcKjP3Mv2jMHKFAgBXb5jZR4MpqMhPivs5382mdY77kdC5VzceS7E37ceJRhP7s",
  "key22": "2EiAEs2ypnStsyPCaNNNncEetwGBGsh9WxjHMJNZNExtN6FTaVzyP2TWQFP3KCNa29t3gVbMrdbkHLvAN4K6kv7s",
  "key23": "5ixPS4CWxMMWqgiKEeosvA4Cv7ETbsL3FK7csVkeJtrpfzNL4WXSBA85cojXa5TvLKUuGt372G4rDNo1gM2a9RcE",
  "key24": "4SJjNfy64Twuozir3Y443DwuGd8zJpuW2bURydMmAcTXNp4J9ZUrPVjE2xUbmQ87Br2yTzubxtvpuNfFG6Rwzheq",
  "key25": "4sjYbKsk5GyogYfiwf4McD4z6LvwSyZhQ3GjrrithWQhe8jzh9z8TjQ1jMJ1KVsN5ZgM7USr8zU4iqNFX8VwBGTr",
  "key26": "2y52R4nwL8jaHxZyfkDKXLdeyWN9gXUEj1XVVgf8twquEGSDSKzEocXFDqAuDJhzdGnE3eUE3FDiaqzAaJiZF8ZW",
  "key27": "AVn8oxYW4fZ1B2KdQe27FuaTLDAR9rWkwde3wAnjvJKHsGeAMJzN6NU6qcBBLSSE8yqRJFwmVc2ir44xbcmanVz",
  "key28": "5FqzpnacHqRZ35RR545mUHmYpeFGh6ZvToV69jfhaeCDf4wkzQVws8GWFHj21PyxD1S59rVQ4VQ4hKqVMy228Hpr"
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
