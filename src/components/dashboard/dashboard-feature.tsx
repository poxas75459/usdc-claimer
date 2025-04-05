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
    "3cKqQ4Uak26BdaYqSFgM7t2DhyJptMEuwVM46srHiNrmyT85MsfVEoZjwqE5WUsxYnLerTqHmrVD739WF75Nycf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rsJdrTk462KWgFCAAYpSiWmzdbPQnqmDfr4NJB9toVsigpGTX2sNuTpBNACosxVz8VyJkTBJaKfQGTUR2vbKzpe",
  "key1": "3hK3WZ4mKxALuFE1EL4XpXdhwHj3rd6DXihjuCXuXTRGtULEVoAEoTZSmtqPRkjohbX6GxYggdwZ4AST5JGKaCtN",
  "key2": "y4GXgxesYzs8PTkpSzmPwvVjarQ2Gz42JZG3ca9Ba1REdApdUghG3JgXysbx3fwUSffd1M7gnuXhxM2vak61UBZ",
  "key3": "2ccFfSrC7mVxXSPhmykftxESSf7AUAerexFUc2XKEHiuLVUhVRacxsFJyw3baU9BRWDNmuBizhaXugfiAWkHoDpB",
  "key4": "58jPTmiMeovKFQpui7DQp7RogFz2xsMuTxzmUnv2pn1qXvDNMHrXW6yLjDT2pQMZpBSb8at84yp23DQXCG26Gocf",
  "key5": "3raAAceJpiMz8J87XeSTedL48x2ZNFfVFUYez4AQ5d8ie1Z8zoQdpQjqEU9vZQ9t4W4KZv9H8xc4MFQFC5GaBVcw",
  "key6": "bu8N8rZCjSi1p2tG6B7K9empjmHxWH7fq2aBxVpYQBuK225QXf98VSgYBHdCj29GcUWNoxcHzGXJdZXthqXgXFM",
  "key7": "LULkgVNrp8YwT6N4oCmf2r8eakKCC1tWPdKWBGmcxhFwFaRHRuapjrVXeeTdKRJHtrrZxyn5VY1SShQABQH9yRs",
  "key8": "2yMKNQcd4FxLRYNbRQECALPrmmjSbBZTLMMBJPuKRscK4Auk7PyxjSfmE4pyGYqofNfDnhn6vXFy2g5qShi3oujP",
  "key9": "31Y7Ng55DE5WGkkLBknnWoLaXVMA6sp4ZBrLoMAre63jMYuNEaiZi8EyxoYFMAoJiW89qfjDUsD6pmbusBRExHPh",
  "key10": "24ZEw7YhNYHxgjBjwRh8pgKvC6PZojVdgqsgSuXUtTzLd14owTuokn4KHhyF63NwVJQ4ygeAWQzkSxSR7dgkW7Cm",
  "key11": "4QJLYMzxFbhyaApDn9uWYFy8i4T521uHT5pC55jkfHiZHnaC6rx9uivtbSS7TLjQ5vmV5woo9VgnKWb6M8VUtpSh",
  "key12": "51mhUNow2CF1ZqLSgCQyhb2gWPVFXZFQcukKvkNryvuaQTrsAuEE51HPTVbp811YLAkHP5Txfc1hhBV751kzdr1b",
  "key13": "5LkX23uSUiiVN5RjaKUxnyQSToPtDz1qQKFTeTtmWR7GdWLLFUCBqmhhfjYWiUsDKvdsUd1KiFnP1J2rzUWQ1uLu",
  "key14": "5CxHrUQT8pqeVxP5jfBYKqEptpidpMzgds2FUivPRFKG34RzCQZHGBFQsXNoGjWpyf6F5qifBmSR9vhQ1YUBvH55",
  "key15": "5pNW7JWzhqc5WDmi6avyqpbqydXoE4Y6iiXH8h4oyfoW5yiMmzUAh4zV6GXz1iy8Hr5fY1BW93XGogbfmsNGrwDz",
  "key16": "qjyq7kvMuAw6mCWXGYXLDempHVLYLQxUSKsWe7Wts3uqwq9qjTuoQBvQgXxMZuWwoZk1JYR5B2MrDn64zBDjQYk",
  "key17": "9r8VFbPDGpkYUTvHgfHZ5sHZV1XV8C437orqrZGLfyZyWxyXiXM78sRqxdsFSzSLynLEhCFguxJCBXVc35Z8x3Z",
  "key18": "4wqkW52YZj4UyKHgwjF8BDauRkvQoPqP56zaHH3B9CkJAWaWmU1uM97vjBfmonC8Ts92RXnKjkJoGx2GMGf1Q24u",
  "key19": "4uADCyXhM4k4jRzcoSzgKgoLVPn9d5jkGAmad8TohRqC5be8fTMhjKJbTqDujVYx6uMJAjPzotaNiWryVMbbYLwh",
  "key20": "2JMekh8w4Kb9pDz9X79py2BxoaaKcVDjGKzcbrjmiNkqVqp4ADczWntZDA44bA4m6tvjdegfRKECpMBYdDqVvZPn",
  "key21": "4ao6NJoAfq7EdUKcwXwDFgpaz5aRx45hHm8BPsHzgeU15d6yn3aiQusa4XAojiRGXVV4PAURGFnpsGiJnMXerY87",
  "key22": "2wPo9zxC1oxCfgic444U85ibPpJs7qzdFnvsdS2JP8UKnBJuEDYPWA1xf2em1VBNndUKKho5eSHKg91BPULnNQW1",
  "key23": "3NJcTAQntj8YnmQ4iNVZoRB9ChTWR3XR8pTC2rMP9j5W7B3f3JgdZgHBMZLqmX9gD4gP7JSEkQcJmu5Pb8BpCb7W",
  "key24": "L9Ajob6GEFMqW1M1WazkAzQyHVRZkbxqegzvB9yCTpAXj2ynvwPm5wknnkijHzSUWL17HZBEWyZFhJBubzpAt5J",
  "key25": "4r17Cnsr8NieN2xS7oDvKL92EYyGmmuxzLkhhXvMaL4dUF35fBRa4bLFsTHRkSYtetKEx1AaNvq1cuunEkdh4cUp",
  "key26": "574Bb1ZZg4hCP3u3YeFVQSeqKjhB9u18i13i9My9KhbA1vHbA82Bh1HNi2wj6xgFxJ79FJAzuiTyv7U3ufoxixJT",
  "key27": "V5zqwpERuAaXPQ2J5UyMY2xzejqfeHXAptYZeyeNPHqKjtT7kT5q3ycPPJPya3AcNE1Qnn8BfjkuoNhZb6bJnfW",
  "key28": "5w4yQfLo9JUdVH9GTzDhWnHapvTtfcBPdENCtsq3DTixX2CLmVcaHZsWkiMKsWSYigSDe6D7v6SHrrcHNBaUZgAy",
  "key29": "4X6CPWiAmZbWdSjwZVTwHpfGR9SnYerp85SKekKnENQKsTh9X81gZZ7F8cTS3feVsjZbxzQSoHZz4s5vyEhZ3w56",
  "key30": "47vMBLy1ono8DUiJYZRRnfwwHjAfV47p7JXfv3KmBfcc1JvU1n4yWjpCE9mhpRtQTCUgLoJ4vs8mXZY5VLNnGiys",
  "key31": "4goWt9qZwc4XJmrYN3PgoHmJTHeXx1EhcoVfJp1asKVQ5a3LMJvfprSLsdTLLbhppSVTsmJ49zptGV6jk5Z7z9HP",
  "key32": "q1RWVX5sodMhx8MZK52CZX8GYuAZVVFjuLbF9eqSt2WPWyrvp9RPsBy5B8KZUJzJDCT1Vxs3agT7bZehm2eN3SW",
  "key33": "4Dhte5d8mwfbaYt9sdhzj41qDADyjR1LtwbxPjiYzebxYXVMiCqoKri9RjHedY6EpG9nNfFvpGu9mPmaL6WN9wCP",
  "key34": "543rAVgtAbtyzQjw6Mwn5tXxiuzvnqip6fKXW9dubb2fpFAFi4KPs4YGTh4EEg1JrjQRPZQgDibzp3qxpdLsosRy"
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
