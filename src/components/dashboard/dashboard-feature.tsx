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
    "3YfA4TZ9oUDjA7DKNk3AzLNbWZqAo1P26tszy6Xx8rqFphFzkPvzerr8pqBt1mYtDU4CS5AYfZA5QPCiTFETprDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SnK1ADFD4QKxSg5iDHnEwwzJMJKJ8x3dszdrD1HGizGqFKQdcUdgmzu1y9F22cfSH26VGDDqaTAR3H9GuVjndvc",
  "key1": "2gYXoSPe7tSbHKgc6vArFjDCKWGydEt8CtrBs68jRNLzuxstMa94PSbkHM9CjkEUo2Uaa4JZ88GWfQdVbxycqwvU",
  "key2": "5DyAHHFp2d9fckC8eNm7LQnEKdQGvGjCnveeJhfXgKpUEj5LsWq2D4nWtj5NkB7speULJz1fYhxPP7zxKjf4oZ7p",
  "key3": "5XX1cdgioCsca12cnKQf84AhsSYKh2ejpsESSRzcF7d8f7CLdcMn6d6YgKZ51LnEJiCCzT4hZ7UNVy25YgzBiri2",
  "key4": "4G7jBE7rLvQUq9149DpT7eEps2iqVSmdWJ7tr6AmpkyRmcfp4UpS94weVnjdjvsV5mkrybfkas5YebzCmu3iT8u6",
  "key5": "4ZT7tShchKxpyYaBahtH3uzAs8wV4AG6WXSEmZodVq11iVshho12JPJAFt81bX6BW7HWmCFF7rDWPXifLnTY267i",
  "key6": "3b27td5J4r6ffBSNYSTAME9s2ReNQyLEgGgMsPY7VJWtuHfwDcpXFgu3TpH129JH3ky1gjBVhjXkwucivtrnVHCu",
  "key7": "2WGyhdWG96Zte3iBMDhjsN2ntnfMSwWZMkNFXtrfEndYAYWtZjefn4C2gvy4d5wrrwtA3ffLqdBZWDYv45sAX17W",
  "key8": "2YLtoSG5hTVMxeCdDNHNAfiEWbM4uXWTwMQarX385M6Y3toRdnBKQYhVnDAZv92vn1qEjhLbrXHbTPMxGUMUhvxZ",
  "key9": "3XFMVnMYr9kVnX6TENZ8RhwzweKmQFs5w8jt6AESA6r9swZsEqLtKDQDcqesyiCK4dhrFCVj8PcyWLNswLQKpzYD",
  "key10": "5ey9Cws9bTd7h5HyGCYHEXRmK62H6M1iUE7o4GkDxLxETfRJmQEaFEEyNp6XqsMbZKUrM1yQyyoM9jKAW42C7W3c",
  "key11": "5vsJGW3uBj9Ffqnxub9zVxzNvaYdGw76qmPkbpF81geKHtCyyZ8PxF9zr9aE8yvFTJPj3tXqZjjHGFySspjpZnKP",
  "key12": "4yPFpHbSj8uchHRS3PpHSVDyyVnXDci2e2dJUE5Sq9mdtRg3UmAEkzqxk1vZjkwbd7mAwpYsa5fc8zAAvRHami4h",
  "key13": "3shB8PKqjqKmUv2WKJYrDKsw4gp62DLzrPj6vDWiNBHDiF8ZS4rWxpxh5FP6J28Et7MUuQG4kjehYdqqVjxM96Dd",
  "key14": "BZLm7Rf3VyEWEYwwMog7XirYMYXRAHQyVSexHrdMYh9FaVvnrBChKzwG6CUtpZdMVjrH7gX8ZhUBV81Mk5iQnmT",
  "key15": "XATicxDLw7AT6BGvAoME9pSwk7VnFtyY3BTE3TtLQMxZFtX1E9HH8ea7NkUdDoBHKFhrit7MBwGvtkgCJqcCXAK",
  "key16": "2seDFUGK58pPKcERzwU1xyExFM3c6VpSNezri1wLiCT8JVxoieS76AoiPVanaA1EVFq3e5we96jnds5JFHGAmcM3",
  "key17": "2wiUtob5n78jMN3KuRth4yxdw8ZuTr8JNT9n7zKt8X2CEAmu7RRHBv24RS3pqXwmLos6EmjZW9ok5f2TJtPvBMs6",
  "key18": "2NDWeXdw3dZsRXuMGr3fJ9CTCt8hPcA6Q4CGs1tYW8mazgWkSQ4i91phMPQvYBgVvbzSwwSYVLYeuq52BoC861rY",
  "key19": "4NzeqH6Rskf8zFRAYeLE3tsAKG5HF57B4kp7Qx81aLVwtteCmPT2mFMus5YVDzecduDKotgA56Kq8aK6ycwRu92b",
  "key20": "5Ybf3eism5gBiT2R8k3rufdMiFfLVArBGhEfTkvXxdn9Dree8U26ESgY2d7CapAk6yusAEadwQTLnRi8Dz8XnDF8",
  "key21": "LAyr57fJEZ2aH4X6sbHKzGcEjyVD4A3mKWRLpZ7e4SqJwSsJn38cmhVS1dHfHzd2nE5scaVrY2zR8vewyhzR56j",
  "key22": "2yqu5Zn7NiPkqkZmxJCi4cEiEJdPwV4LkFUsnTZgSRx1FDej7iNQ7JWEnhYVcrhVNp3bBRZnFVZEc2uBCXdAVNyL",
  "key23": "5Np7FZR6aRFDuGVSPsJTGRvBU5CiRnuovARcWfSm7ywtSPe5H96XHz7x62ys6sZF6gM6BHsvCRwzZqjKnzSPzMEP",
  "key24": "3BUxPqeRx7nhixXbthzQCJiHrfCBHJ1ZZzPskY1zLLe9w2igEUgps6bHth7ThVEJZsgRC7acZ3yZRuDZW6cDZaWf",
  "key25": "3K34Eh2Uu73o1mGisodKPzusq6v2dKRKkYKqwaf7EgLqNaA54XMrwP8SGbV79XPgjtQGWMVtMbWhHfvpmZQqBbbd",
  "key26": "4SYdmmjRuRtGcKkcHnpDUqZXDYSkSCGtqPrr7oiYuTawFh5sxWueNwjbLhntv5jNMWga3S6SmtCBSW7F1U1RpGTe",
  "key27": "fcpVYtzHATc99xzLKD151JvLAEFay2VdWLFsFdU1vTBxvorySkQWqgJoR5c8ceCXKnaJDnWqVL1gEPhzL3F4RRR",
  "key28": "PYp2nYbxnaNhmsNv1AMkZrxdjFrZfoffvTutC4ezwZY1BZWbJRj9JKT9FnxLFkZqKGT4FV7M9TCwUgC264NHy4X",
  "key29": "5tt3zcgsPRU6nFSJeb7bAGGTEgp86TyCVVuf38HcTSD4N6pktwrsb8M7UQJGTNeTUmvWNdz6tdF4YpUmCjkRSSB3",
  "key30": "V3m5aD4rb7nWKW89jRwBUMTHEuTz9HzZ1TzRx4r4F7fUTFXVHFLPmTFsMY5WNX9k6A7XC6Su2hQnPzBLUZezTYW",
  "key31": "zcgk9d4EaHeh231jYxFEHiBZFpZUp3QMCTTgRJ9HS2J5Jgwpaggp8JKCxaxM1phcfRCbvT4N6SpZssi67jiKgkV",
  "key32": "3tP25yT2tK9Dxzde98XoWq4pocT1qHvWaxS3yzvmKWrWSiHDTdMZA24rGsxmkhpqyS2qpRahqnNydfX56vwWc8b",
  "key33": "63VVSkAcsDxDhG4SzKqWMdEWU414xvrop8ZY3W3Hx3n21Li4yNj9M43WCNfrim5vTcQkj2ej7D6aEcCoRDtDCS5t"
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
