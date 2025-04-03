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
    "42eFxnNYuSDLiNe9isH4StGNHCiELiGwQouYX27ybjKGEtWXqrnghNM9LDw9njmZeXiLnfQXJDDeYYroxfD8KFS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7w85WKFMQtLDjqLij7jwRU24fmP8ZGBPG7XpCnSJRkyxLz842bMR5qMzYX4ZZevbaF2wmvEmnrAEQvscN1D6vR",
  "key1": "4XHrjBBsgyyA6227ybrGhokt7dMHiko1spt5x1jp8SAXMDQBZprseFe2pjHmoJHyp8orjdL68Dtq5fZGYr1sej4X",
  "key2": "5j5MFTVJ2wCiVtnN4iFb7EiTbfzZd6x4EgnKCXyemVqL11h6ZSX57czrVxjNCNNnFn27qVxDW7iZA348rKGHpeYe",
  "key3": "5ZL15QkETBQBDraLY5LtpN4zBvSQkfVEeS3jKqqhHzZMqPXXVxTqzci3F7LJyA6W9EYzFkMBwdo4eLWb5jokShBW",
  "key4": "8JH7DbBV9mJYja6Yfnd8aG1EYviAhQjTBLra7zge6JsjQntT56yWhNyDZ9e44xy8NsADENMDmAcgoCPds8sGoMM",
  "key5": "3HvyVQSstaq5WD7f6MT9SaimMJ7yDagwkfK8DJsWFcqgjhduWJBCxpcXiu9v3LAYJJuAXHyBzsAPXKCxiMffe19s",
  "key6": "2Vf6UhvGGJ5XXAJCWsEf3CjWFxwS7jaRE75x8bdMTeStqZWHJCG9fxXYmmW7nws2gGAEULWX5heY3imkTu3fkBWV",
  "key7": "2w44iMxcSR4WCt1kRsb99HMwMHQCMXocJF4Fon8JxcbkTxrt46QgexNGuKmBJdHa9rpqb6dhvV5Bdt9P4PKxmMpi",
  "key8": "FPUcDThRtBwwyXKvNUL58B5qsSdjgrjn2WYDS2JqBrUsUsS6um2v1Jw9SKQ7mMrfz5J8pbw6r9pGzrg2mqkB9sC",
  "key9": "3N1QiujHbNpPLFLV7Wb7tHby4r5fEnCEuTacVAqqQarvn6JctyfxYfWT7bhX4wKeXk49PNJWWrs6NAvqDLFDfPtv",
  "key10": "2LVRfidTw1tbKu8DGff1kdruU7k1xBZA5oFuRnWPXU3SH78HDXBQFkAiyixsvg5WgrxrZ3jAgjyrJdFCzszv4sDW",
  "key11": "2tLyzPDrfmnXa2Rr5twrWX37ZgYJBjWHGL2VjPErjRyu9heB8GZFhEVn8u53wryfNwvvUviL7m9TAbVXJWc74Ysd",
  "key12": "2Dv9Tcbjri4SXQPPJhZvThfxSgsoWhu7xc9zaV8RKQSW3EaW4a29kCtzfmgyyLzZqrBmBfuGsY5hQ9niUdNdw7iW",
  "key13": "4vkum1gbP2s11DZaLcMHW5BD9AM4B1e6GaD8eYTQgcypCGADWaUfDfs2Nh3WUDQXQii42Vajc9biRJk1BiYzpngS",
  "key14": "4qBeT6qj73Zd9dV9HLRXuHWSAFM3MEugphQbL7hAb6PGHaw8MA3esMmaNv1QAEfAX86FfATnswPJg9PUrXGpdxH2",
  "key15": "3H2S7YHpohkLpRkUCio6Gy72QtpPQ9JciCcNTAPiJA2fmpxAGdXbLYRTqxWHMH8i4nSQRN7MLcc9DzK4vkmkkNFJ",
  "key16": "4N37KfQDaXija1hwwEnQYeZyfzC19HzBq8stLgYBWWXVF3SvJjmxbva1ijpnkxVCLPBiKaKZLEGGbD7PD5cdQzHS",
  "key17": "2UWFSz5BTmrbuP3HHANhZJjnigFHgJpKVMGzNi4voQs9qU3seimJh2Fr4UJeiAeLE181dgcZAy5Qw6dzFJ9ocU7y",
  "key18": "5KRTWyGa7PfeJ2ucH9uLcsp1eyC5nZGzswWah3hvz3Ne9wvAexQA8iVpASKTw4Ba6z9dj8cEJcyuZvNgGuCrGpRr",
  "key19": "UYq5d7huQq96iBfv9LM3uQJNyme85TZ3JEQiQmNxSYFj3fLVX6KrZsa3WdVM3QvscCetTRSQciNzLkCVPd6cwAA",
  "key20": "2NGDR9p4Zv7Jm6xK4aYjQZ5eAvV9svXECMGJ4fgxCQkvoJhqbjZRJNfNaKPvdSYH54ks28e1QRj8hXGTJoiVALyv",
  "key21": "2ZLaRwpSaKtWaDznZFifCdcP1STLMgAyjE5N7fygrsmidqUWdNmAB6d16GduJxNKi9NBWcgnEmcokp3b6h61dQqv",
  "key22": "26FPJnzPv3QNSuL3ed7BxDVBJz2CrkCWfx7pmeNjN8K5Me6ZKX9xMaYyby9unsVR6tmKQCYtJ9a1a8TsTPx5H2mE",
  "key23": "4Eu5nGEoWpzwEAjUb39gUfBPVWzwuVeG4yBBQhZUUy1xGrVBf74i4MaKYZv1bHZVLov3nNVN1xXkyx75XMDJR4im",
  "key24": "4AiLc2xDQCwjS7D6M1ayhiqoX67Q9eqirzpzMdgMdMDiu2NXJC7Dk7renvecAg24HAta7GxUcLzbJRFZBYjav5XH",
  "key25": "3Hd5445guW7iTpJvDfgpYCM3oNAmCXJs4P2ny3jcvutySb3GsZBxMB2U4Tg8EHqYmZ1reqpgYz3u3orAmm26MwuK",
  "key26": "WjLbrCtxAdh9xZHJgK8rZgXjGsU7e22yCsnmBckgt42oGiouA2Kg5vuKGwuthsrKYqAuybScu2J9eXq92CpTVWp",
  "key27": "3kjStMQopRocQW3zLn3ZKrUooMuKssHArjUX5yJhvkgTZmy876d6Ly5k82Zx4c8ZN5SnJACf64EusFFtxcbNB2rh",
  "key28": "3t3pS6FR64Dd4oRTCwWoQPVf5WApTxJsgXqQnbVzZDtnCU69zfZpyZcnPegVurcPaJWAbpnrX8VdApGQzwjYoC4q",
  "key29": "3znvod4H8gHyVYVPUNZDGuMy5QSVZ2z3ZmnjGp1gfjkE5mGDwDAhN9HBrvgVkcWNaC9rD8Gbk8XhGvRhicLeiTve",
  "key30": "2iuSmJD778z1xePZN3HHtDaesVEs2ydBAENdJMxdFsTrLDZKUZGDFjdh7a7h57BFVDBzSrkAdLSQPiMaH3ynBwjz",
  "key31": "4Tdo3hVdxG7i4zMzd5Ck6HQneeXTZYfmCY3AHanpWjSWS9bwafv5d25g9DpdG2m67Wm7jHX2UZag14CfxW8Uzaj2",
  "key32": "2GHEG2N1yP3GUAg5j4TuRyoX21WwHtCg3cQJjFABrDmRWYbumdnJk9vxED1ZUur7cyQWmFBB1qojuojgDqnLpoUb",
  "key33": "3os7WuhA1DEXC6RFphue1LDkaMBL7TXXkwMLnB7XpDBrH8Feo8Zms9UiLBqaoWHDLVcu1B7FrmfFBgq8wKzWLZap"
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
