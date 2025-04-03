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
    "5SQLQ5jZ3HWnNb5D7VWGqKaEcwyDkW3nNVtgpGr2CUpvhNnHxELbvKCjUBKk68JjYWt6vbzQkFbZ1JafE1dY1u9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ya92s4iKccyqmxpBRUtPGRFZumsFsTF8mrTNhkRK9nnz2A29tpqQjTMf7PbgV2BxFXS2FGJvZB7c8gp4sqEnrGT",
  "key1": "3dD6sRmksXj2Q8Z3xroNeDaGZgBpMKVi7zvvGGbjNps8q1y3kRnzcwhEPVa5Mr183btNpxhuyV9SdQiPX46FYy4a",
  "key2": "3JuUkGKodcwGwgBgGgipaKWLxEq9iYmtjJQgdxfWfQ7r7dCSWVrkfoJ9MCTT88JCS6q8zXvLipQ2PxrN3qu5gKFL",
  "key3": "42AXb9LfV14HLE4c9h7sKzg18E2C3pd2R1uFYJFCM13wAx6ouLjR33wCkdKaeR8J25wqagir6z7eF2G5WJYHGcwL",
  "key4": "3G3DX5jZxS942U3wRhTs8uUuNLhhtAEwLzM2EgWhLtTJEGZzJF74f2859YHsrhAtjeukZubR8aSqzJqg1eVJb1uN",
  "key5": "5er8V91Y93FHLSvVtYpSgRvej4sDgNS8AttoCKfVr5tyoDiLygGXonnV4MqApjjdYKG95KZkPC6FAj69Afy9rZMr",
  "key6": "3vjp312vdEGeY3MRcVRYSFZbKm2eS6p5tC9xNzamWnWMPi48byk4dtLw9wyniNnmSX52NsRignAwwVKjuUXfoeXa",
  "key7": "4Zr5GBTAysuWYeaESk3DYeR5tcWHvva1WxVe37KBuQtN82xVjDrpsZq1cWXkiZrXJuVUowLxECVbLmEUSKtxFvzh",
  "key8": "3horYp1YhsFGGuWNrq32RcpidT2bopGe4iRzyTDQhYtBxe7TCR1ZKLEytCbzmAXMFRVf8wxVAsWxZ54aFZrcYgxS",
  "key9": "2a8HSC6UNRVMs9s5PL7vKVZuyaF14878HpL7dDNTDtij3mBj3CBD6EwhurecTxTrFxzfbrU2w9ATTCRkmaGVHDD8",
  "key10": "4aaAYqaqMEA4Cpb1btwZsxSipdVQbKvj9j56au5YcwLuRpeNgBNEj2n4JdQE9M5UpHXUYaNBHukod9zuvkoVX5sA",
  "key11": "45qmaHYCw1aRssFuyoQn96L7nhbyKHYWompefxDXB1yxGACL45uGgjdboR3NEtCCNJTWZ5E5MLbrsP7Y8Bqov16D",
  "key12": "4JNS4XxsZhcHoL1hLB8rqg71eDVz3tWKRwUqWKp1xnj5B8ERobb6xAQ2qjxQ5YCfKQmrhnvY6s6WXaTbpZFi1Qkp",
  "key13": "2cUyh47YZ4WcjAc9chzoH2Z2TZ6fgNeCq2s2TwaLw3js594GSd7q8sUDieaMnArakVo83X1qXFy3pnygaHfVEttd",
  "key14": "2yoVvW3imA7R52Bt9opJ4tr4RgtJaxwoA9pKkzeCqGMtajKjzA68YTNdEGcpDMURMBapNhKdDuvXqD5vvrhb7Knt",
  "key15": "3Lvijgkqt23RTxW9QV9hktFHBkPoCJZbvJTtper3dHJFi64Y1sFx91ejhFkH8AJLXqwzSu85p7UPeuZvYLhUwKvj",
  "key16": "127T7qvMzReUC8Hsg6B7soZnEqpo8TFp5H7uSr6LbK4oqgFEp9NskteFf9tZJJUF16RBvYpcukzHNcExpqrqAAEW",
  "key17": "4HQoLWLgcz4QkftQm3T8R8JEfa2p1EZEf1LJtqZM13bHN75htPktdNw8PGVLrzJGsVGhU5UU1dTLL37i4uTrM5BX",
  "key18": "4roGXVpcNA2ptWusve2emD66Xwgn186Abrkftffrx3Zh6qfnavkX2t2AhyyP34SNtHAANjF8wnErZJPEovCAKm9t",
  "key19": "3JncKeXkwp1AjQEkKLELSGFYzirjiAUB9qFu7Tn1aSVaAzRryCbXGGm8r8aUdGbjADDHtyygX6Qoa8SwURTUUEuj",
  "key20": "5aB3pRqX1Rt5qXW7dvAPWNubEFNkVsB2faNQHjK5imsWtQdDp2UitNHEtaWebm8jaF5oEqSgTDZzA6fo1XWF75ww",
  "key21": "31ZSRpNSyfkYx7WJ9jf9VWugvvz6YuVAdJNM7GgKdkkr3eCH683eQKYknXtqkzc1afCpFxTM3aPLeS3aKZzD6mNZ",
  "key22": "5jLWhZ3CDinPuZrZkPnkv1LCcHrpTJ3fgU2vyPvPSPQkkZspJQD3dEBHbkyPs8KXfSi9h9EJuxtZXgpWkjofXAKJ",
  "key23": "UWVgnKVpjJqB8QoEBqvksCLmk7MrrHu4ShMK71cDeYNYLvvengsGYrnM6w527j1itxDhCVScfDMvgC3ofSwy1R7",
  "key24": "3r3ABsY8m4wmD9rYkkKZXpmaFU2j16qioG2fDJSZUgw1X8cmJRfi2uWpawCcV7FxSCiAVBUsULHGL7VchmydRJKa",
  "key25": "6h47mSCz5HL1i9jUk4eagKeeTieb6mLJ37CP5o8M9bxvkJEQyfWjaAbWb4d87ezvYWTEYZBhw22RcWqKg5Ces9E",
  "key26": "5dv2jrZ2WRGyypdcdFBzetKrrDUnVg5wWYq8N5dcyr2stXMqk6Ua9WtzYBSWzaKq5BhXkP6yv9zf6ynDVwVnnQRN",
  "key27": "4MSe5ntGqu5tKRN2cEBpxMkxnGxji7y1B1d5gMkCrCTRuxRAg4kqNtZQAq7WXFwikGxuBJRNZwtPBgfjQZTu6Hdr",
  "key28": "3xdsJCoV47m7H7kLC23n2adBrogQvksPNDjqE3ezzhB3hHkwTgfqY99ksmhCDamMcbRtueabozZYZfw4HKP2ibsk",
  "key29": "wcE45NWJYDGzsuGT9YLgyw3j8U3z3Uo9kqVEiuJueqgTa6KR6oJ3dGBWB26681ppUANXhD3wMXeb8ofgKj9VBCK",
  "key30": "3mwLxPrYZPJuUL7iZaVCdSu3xFgattJVo7E9EvWHquVrjA1MBAEBLjKd7wTtQzKLavAQN5Viee76bncWwsgDU23w",
  "key31": "wmLKe7VXT7xdCJPvkbgLVh4MDYYofa2G9TBt5jVsUALzMWRdvasdKVZbtRSw1P7M9hjfCjya7JGmD9zYNkN7PHF",
  "key32": "4T7hRrtPBn554sh6EYYUpktqGUeh8nvuDrMLmCY1AjHrgfnyRbofoibXjwm97aYS1ZEMRx67LibDBNqpBtzvyuCc",
  "key33": "ney1iDmS7vV9wBvYxsvUbud8BMTUqJgtApexVfsbgWb7zsYt9siTV3qFAPyovVF7TSaPACgmU6wkE9o6YsDVdH2",
  "key34": "3KHbfWdGpjZh5JoevCY5Sjq5QqK2T6vCyD6DXoHHvcwLwbFPwvskga8xga4m5mb5RQMjwBMPq3A4K6ogKEiQNsFJ"
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
