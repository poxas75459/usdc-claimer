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
    "xauMBwGw2siL1pYtoMT3kUwDhcqR947zHsSn1ipRq9uLry5twvqN4PQQqd55dGsuzsqUTY9yixsGrkPAAmESTGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvGLdmH8s37HZkHxzRopRXCKqdUq9andK36Y6Tga3PBzCPtAQsn33QRgLWroyr5PJudPgwjXDyxtWLoGypH9AkY",
  "key1": "5tVZU5qJ8UVhruzQeFXKfKVRRTBggjHe9MVdybKDa3fJnaCKzxobjaUwrBAPjNUiy9fZQMq5i7vUGxXfrMkFGvWL",
  "key2": "2nJCbywFPaVPoHPpZgXvyne8g2jkKTcATodcCN2djeVs6Lbsqe5bDqZTVZmP5KRevXu8EZEneQYvi5Aq4u76RrZ4",
  "key3": "3szp7p3huj3vrEEfUk6nc2ruaC9vv9PX9PxhQDSZXnBNufnRzEmAzbeTPBfKiTG3qgQ7QiLcJNpkqSXoCiMP66TU",
  "key4": "5BAjunXWU53X2RTHEu6p9fccN6uMhzMifggvKbYcLFdg4V1vTVne6bj4Kx1WTHVSP6FjrZW3r87A3FYSQefqtups",
  "key5": "5UyYnuGMcPiyhBz6AU1bx9sVD5jR7owx9UWF2tMKrocADmit49A3QzQkbYPjxDyEWNkafERMAV6gYNfaFi3zB9un",
  "key6": "3YAbGpJpCFuYnqHDcEvr4upQVzt3zd7HHjpvAduEvh7J5kJLqMPEpuMxsD6xFCWAZL6uDxM781vP8sW1HxDjgnnb",
  "key7": "F4PEYxRTC3wi6aD2CaBoiQTg5Ynh7uDd9dANsr7oedvCnpoPpHsYB3DmmssWkXRD36cSo7AxFeRPykezEZNDrcC",
  "key8": "3128rwXJEsJXjv9WY2xRGef188g2sN3LBcfL8wSXPxTEooGHZJ4kZUKvwqmLpZgTwRroYRUwaHznjC7gBcU4Wno5",
  "key9": "5EQz5rPYcfPqhEyjvc5W2Cdi2uJmjrumXNDXYwi1EcEpx1KUMgGKuZvHHSiAKJWHgNKedqqHRJx3sQEA8Df9zdAD",
  "key10": "5MvUwQ4z9SSCC7VPgGBoBEGDGHTKj9NJgBGjEah9fme82o3AJLf3ic9mMtNiZVog3He1XWkbkQe3XjJiMx8Msg4i",
  "key11": "64onQJ5aWJh6NFNkWVjLoHFuJURrCS2pyZRYP8iDyqSbTvu5CeZG9rN2bncC3xExGPDfXoSB1y3oUQZw1PqDdUyU",
  "key12": "3NKaBBfzM5L94voUJKuGRjoqrXBK7y3TbAoWNX185HoTciFYVugJ6tNX36UGrScqxdjU5eLGoscP9kS8tn7R5NWj",
  "key13": "enNJzYoK3wBG9QcczT5kKWdTsiZT86rdu5uYb6vU9RYaV557pEb7zqbAoCXnSv4CLzRUoUbCTzCYLfZAtKaRQ82",
  "key14": "ZC297EpGvpChjmCuFMHgHcbaLBt9tfjAi2HWqqvFmYrHN3XkAeHFtUk3H2e8Me6nm1t8F7CJhHYDEVbqktWir5M",
  "key15": "4Jsqi38VYTuEFibtkPdZSfccSwdDnjYjMK6ofkqR8qAGoxvSQeNpsqxEJAvyTraEAC6YDeEyWmSR4Y4vps6qF5aW",
  "key16": "qNuyTGEZ3gxKiRyYg3oMMmdC5bg7eBtu9gFd2A1oYk8uobQ8eSqfEGDPQJLh21NALHwVtM6DdCdYk6pEzJvMufF",
  "key17": "2wHRUXMaWLWa3o9uMG1EvrbH6CYLFwBsABJAXCa4AtCXo7V6NKPcEC634hn9e4rV9GsrGwmipKEvLs9mk5xzaGqB",
  "key18": "4wAXgYTMizg8cKLgLocWbKdGRP3qHUuvoxDNErsZA1nFXNfUJUUkkBctod4Dqb7BKCySr47ULjuMorcbsoFKo2rj",
  "key19": "52vNL88GUHd7Nt2vFot7NT2QJyY9WNF5Rw7JBWFVfkKy4swxdddCkVDufqxHMv5EuUHrE5XZmMVmD3jF6uBgYWFi",
  "key20": "3jdGmx94jaooxHTFmjEgNWTtVvmrvrgKkw7urrxMtuv61t1HgG5rh6vrxACXNMkmbY4PQ44g7mkip4GPfXiqz17",
  "key21": "n4E4HHUtjLHkx7rK8zt2WAiy1h4Rsmrnj4tbuHBGyZFKSrnqvZwBoQ95ek9gkDvvVhg9Kd1v9mry2gw54c3YJKR",
  "key22": "26Qt8rdDxBDBKLrQmKGf3qyNX4nkW364dhJbQMZh7H6Wdj7PBXCbzbDF4V4Md1B8oX3N8C8ng1BcyCX3TRqct8c9",
  "key23": "4gTeVsAxECAKxVpzgVGpTC4FKeSWKk95aSpHViuBWvY6ryj8BmjJcS7a7rzJucp7Monnt7spR6zkHHYWuwEwLKTA",
  "key24": "2c8nHn72P2Nmnmyf7Y1fxsGJv5GciWLQvyBQk4Zb5gkg364n8pEFef2YdMnpc28xmfPKiEHNnrCdK34VHt44r7Yb",
  "key25": "2X8NVuNBzrVwgghGxNDvUpkUoSr8na7mJ7yKMVMQjYRffZbSS2YrARLKKMCkzhL9pZCth6f9UChFam7sv8FDWkbw",
  "key26": "4P8GtfWvVmaYgKn7goSXB5w8SrG3RYNJUTzftJgryKMotkGqxVdZFX1hvcJjSi6oemzLd5TQqbBW9HmM973Hy4ht",
  "key27": "3iHi8FF3ZwyKEDjq3T47V3McweixrqwHmh37KHoxUJuNEc4bnK7peHqQ4SA4gdqXJT36VZE73vpbrwkKgQqw8Ccb",
  "key28": "4yuDhLNhLF5qWTDP2BB2x7QscW5jaHw9Ur3QkiTbScDstxabbhL57reH5Uz6ivZNQLVASfshLGouhajasazjkwgw"
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
