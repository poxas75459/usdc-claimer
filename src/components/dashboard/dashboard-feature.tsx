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
    "658nrwxsRQu5Smbv3qVneDZPPQvHxnUjXsCZjJHioydpntWEEFjvf9AEFnvYW1cxEfkzakmqz3f7AZddBkNa5vgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PAMQXQeYAqtHY351g7hphV2kMCUswyJ8KhxJB8nDwTTDHSR1GnWH9yQ4qvojHLGt31LmSWews52R7qvvqbxQ42d",
  "key1": "XvXxevjws7DymNnnteJ69CRsUHq7NNhUN8NiJngzFawkRRBGaeQ6FHqT2srYce1B4w9FwgoaZRFVTVgGm4SN66p",
  "key2": "2spjKokYu2Prq9BK6zruJsT13cmVzMQmdigTtRtiApfHMcfARCdWSAkuGDB6WSuHceHS8MeVBGfJA69z3dWNZce8",
  "key3": "2d7zU5qAjSJY2UvzNQDowd5beNyEL9FW4TySAUYYagjekkFTjcfmrtMvcGekShHTr6wVzfYS4J1bLr6t7RUsrquk",
  "key4": "rmux8eTWXeb6XkEL8rn5wu5B8DZVjdHWVwDzVtwqZz8q9d2cofTUPVut7znrRyd1nWcRoCoQTkJnxRKHs6fZTg9",
  "key5": "8kHzxf5Z2xjgekVHz6MyBE4jVtZAwaYtzfrnGpQmJ3NE8k36dfPMa7RRzuZSk48Y99VMovHkMW7MjBgms51mgPt",
  "key6": "2oH6o74gK7baTGk3L9SMfiGjNAdv2PvsLQ1Tg1WJ3uj3gLjNF4Emc2d36FNS7mTK2HKBaBKKA4Y1iCvxA52LZ9TE",
  "key7": "PbimyJztBY4W4jfMAS54oBEQvZKpxJeoc9ZqcrzF1EYsp94eyiVPeiBaVv2WHa2SdxvHr13FgdBgbreb43sSLQh",
  "key8": "4RKL1ujpuTcyxjQXndzqcWA6ubMHd8VVUVGYMEma2VWBFrappTUYPVyDGJmtpsFrZptoGd6pVABsXt7cvE8sxTFT",
  "key9": "23jZYVcph6ajwqcTwNoJMJ5wycMb3eH7FbwJSew9cYLYX1tNuWQKGajHw4gEWS1aVxSsp2UAzCauEH7DpbUmZgRx",
  "key10": "uQRZipZAPs7rGJjJsp1esnuKq224YJxL195LBdkRxRSKRSQ7Y3YJ4mUQ5Gq2WfCvE38K87Pm9oDGrKe9diC37HU",
  "key11": "2DLoC7K9hRvJEQnkjGCnqabG9NhtejvVuPRp64apSe7ohB52MdwGa9PD2HJde5hMY53jsFXoPaLssB3jbfYVSdjd",
  "key12": "4egxkKXceava9UKpmg9J3kmHBiq6YSGcSvvAXnrAyn9rGHtsvQqXAYkVfZcUH2vYczBmQdehDBKctWgrnX4fuK7H",
  "key13": "3KxYX7zfSxmefDPGqpJQprTKa6nrR1j6VWqSUzT5ejvrEqCqHgsgBjoLeMk57fbF1Grkb72nXfjeJLHcmZsoUDQq",
  "key14": "2ys13RfnSqVQEpBktftuPH4g4oqW9CG2uv8unSLiYXWhQXtrk2jYHjDXUxQEjHAHdtUY4LhCoGgkPcDezxMfm6BW",
  "key15": "3wr3rjAyCJ8jhUBdehUGG1oD3xAvUP5WRDAKojjZzzdPBdYm3kqoatjcd4Xj7youWheDydkb4VmiLjnREH7D3aBJ",
  "key16": "5stQcgkokSrUuhpWtTyc7eJuaNZwicYwbzsdmumroB7oTRWvEkVMep22D3RYJQ8WpUWSSjMS2hYmxipcoxcEe2yc",
  "key17": "4uHAXfvPWB7M5FEssUd92qKhmb2gfrw819aFoTxG7cgyfzrZfShVztYtDUaDrE5bC6b5obZyREAC8aP6kLSxzeLK",
  "key18": "2Gr9jTPXnWB85ExCMa2H98yra7YRBgvfxhfNCWDgnX9YmE3nnJxbgRRTEtxweWEQP2epXrkX5wFu3KTFTEtvLca7",
  "key19": "5PZ85b1tupZpGdMUWsRpFTU5tVo5uypCgceJcjNC6iiv3aU2ti72E9f6w4gbT6Lk3mgsNWhZwECdULPzhMHHE6t2",
  "key20": "3fJEN2y4MKzitRJUpABnNs7De2U8vvbRjeJMipFRt1NpDrkYrmXatLFMmVN6U4VGSGPg73q5ji4YvY6WA7ZMRgCo",
  "key21": "5vKymqKN13NJ85zB5w2BYQGCQtMX1BnJfYwd5QRYRAP4hGiGR4fDyELE8k9s2ombEYi9dnn9SamFouSYv78fBaT4",
  "key22": "YBvjHGaLPX2tQqj3MV2LXRUtaD2pvoPYnHB1NjheySEYYTPgVPXZmfrhN1VC6bCMtjyredjnz13Hyqatepfdpk2",
  "key23": "7ef4kcxGHCQrACw63HXz2ABqF3x4BD1NX7wAre2QvA4QyekyJM3hwQQ9LeGp1GzAtyXZNLN4XjZwmQszbQNGgNS",
  "key24": "4stMkdLogt2Exenq46G7mSyEtQB2uJe77X59FJ3t3gKYaYZ6YdJE7cxhCAzdz1hRkhF2JCZVPCssZNTb3KeSDXgS",
  "key25": "2chJLccAzibgyt6isnBbL8HJgGhPvtmvpFgsipjgss7cKa9cEv6zZdmP75rmRTdvnuqEw4H35SJrWxnkWwu3HMhj",
  "key26": "4ePv1YoSgo2XU6iwS1cLDBPvsqL3AyfbWjRkcdYhJnNPKZHEGbfW2V4HEpCZHmabnH9foQMszc5XAxMUcmc6q936",
  "key27": "5ZWHhrZaDTeFv2PQtqzPYJLH3XRsa1unhKp8nd5q65cWq9veLLSYmMQnvB7KBuux3ZpWRmKnCa7u4dEqr14KC5pA",
  "key28": "5Lo8wxuZdgkWz4gJdRewkJEkPSH3hzKsxjd5ScYQ95SYzXK6sBGLdnYt45Nd5p5CRrrK1k5mo83ALt2D7BnTL26B",
  "key29": "4BVyaT6TXuFZJ8DYVjHmLaxcwFrWARRCiKgyWfSRuW3aGzwXYpm9mNRyX2efWMhP2yY9K8exDx2vnwZNF5j5SUN2",
  "key30": "32U6FBGrkqVKf4Rnh269uhD5LYr6HMXyysN4P8Dnf1CSirWXqjhbP6aEmywaFvJww2Vqd3Xu49p6Jjy1BusuwYLh",
  "key31": "3GCZD6x8aBpAqr93uLmGbWLvWhKigV7DVjUTSfyax2hFLBe1q6poojCxc5yfFvsWbkcCJJFw9nFRGbsobJQnqb9k"
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
