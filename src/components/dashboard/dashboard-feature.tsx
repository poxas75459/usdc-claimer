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
    "v47xWKSUYvj1WsoAFbigdhorRnNWLDyZn2B1M2LRgyxhzQSFSXRAP5dCDMrdS5EQYdfVhXs55Z59cNHf1uNnTut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozMMru1Y5FhNqxPZfzSL4CiYCC4YYkKMvdg7oRa81WRsGfLzKCn7jdMhnoqs2TCcfHZbh15ukVuryYgKAGQxvow",
  "key1": "414nQAdnzQWfb8p65P9hDnqC6zp6HHdMXs1cNWFR4JzdYA4NU889nUqUvizctfMDqYZ1q9AhpR2CxAeUdSgUPEGs",
  "key2": "3vQQ7pA23ZzEsM8C9fMe23pP6NZH24TDFvpFU4ippbTBgA4t82bEgHzTXCLeP6HgH1xDo3cg7sqiBRNFaFSVzQQg",
  "key3": "4oJyc2ARcc1z3yzvaXivkfFb7aX7NAePbvwukMxHvXrREwePt1k1avA3dWK6nzHQ3jvhDg2KCpmY5tbFvBosnXo4",
  "key4": "3d9GSgLy1KLrV7YVbwEW6vWA9MnGysNqec46P5mf1QckxShPFJX2uAFNMLxnnUTQyXUzDwfdvcMajyQywDVTByP3",
  "key5": "3MP5Tf6LfqxpUBLKVPbBVAoqEucUaKozHxmqZUzrMg7xiYqmnh1t8YzYLgstop1GwMFJ1eC5HC96E1xZK8BZYoAR",
  "key6": "5QLEUTKvN4sKusPyKkRJucPxJTiNU8skZKWXdJxU7DgW31wpPgbXSigYEEceUjZ9MzRbv5aDHeXkErm1SQS6bqKC",
  "key7": "4fez3cf5tK3sYigFVu1qdDWSUKzhvJ9RuscCzzZpQdEAzJJCJKPanz534fxLey4jxRmAJfsPjBsro44zjEhmiLov",
  "key8": "5tZqDH5yZJXjyeswwEEPZrz6rr6rp45RsSxzHc5aiDx9K61KM6y7R2anLZgDQu1EGRJT7H7My8WMFu8zYPkuqtvw",
  "key9": "66wcZXMRtnzs66Sp4zNGKXQVfGiLNNwcghJyDtKVVtUYL7aqsJheH9EQNQ8i9D5vHycUMaLZyXxvqYahwahf5fH",
  "key10": "5xunotVpCoKmWqgC4t337SwUowrNYPAP4GqksTu4um5zkmD8jrmmT6euV6wvJE47yB131GQRGpVoDVRLFTcTEbkm",
  "key11": "2e3rv82UP3CgkViUExmR5773YW7AdApme52vvCugCkKSocPEiK8wfnWAkMvkxSZrssZXy5dn4szqpWqbJAFJSFGW",
  "key12": "2ckM5PtfqDb3aaprrPQ6obEs8yVEYySRsXKfoP5xA3M9R3PLeUKGaDytjaTCrcVM5muHTBHQVkKVL9h3Hx1XtaE9",
  "key13": "cK2YgMMhKPEsPGa5PPHM86Fsn6nyCj2HvoUCPYZRyw5Dcyf3cBqoj7PfS6Nfk8sN8SE7MvLnD4tYkULJJvLBfyz",
  "key14": "4aCnVWyFRKt2TfDMsuPKqGcuXaxUqP9HxqcPNW5UW3Lu28YgQNjG8JdNgLKeHwvhQPuDE6QFTtixUjuUogAJ8SQv",
  "key15": "2JQ3VwHNoQ6YMRskHRM7tZZCV1Kv7qbgiPG94ue94RwfLJoxeW73UaM7JsBwuTNqKzyuiRAtFwRrRBiYpncuTF6A",
  "key16": "3ZM4zvnPMZt1GoJJTudxDiihET9c2yAy16MWHmfHhXqnkhqTcxYXF37kfoSzdAQv1j529p11XFk9KwN4g1TmkFxR",
  "key17": "56pKnAkZxb5Mrds4NiHgQXc3PQ7u6mN4mwoZo8XFgKcA4LGLYPQJhHW2mEZ8qY9sjbdYcPQwyUhHeDecWkfUzLgV",
  "key18": "pXjB3c5yeVfEBSESQTqkFvxpHpEDCsz8NchiKd5aJBMfTRLDmc2QzFBUe9RQqwEoJ7PTUoDrHivAfPMgB3A76Am",
  "key19": "DfVm92nKp4UdzaNPMQ4iz789Sz1tmBYnHCB3rj3wfLTomWcHs9QtPymPfyfgP8jVJDAC8a76XqhY6LybP7yj9Yp",
  "key20": "7iE14s4xhEMhrP13wkXiEK24qKhCFrz79fosBKnTtFxFz1cud4PutwjfTcCXtwtRwncxCuokHUKrGKHnY51jB1E",
  "key21": "5VbGgJfXh86L23Sm8M5orabfnzgMFKvJ1rr7n4Gx7QhiM8LTk6ZYPszUoXQQDW8kGjwBndTDDbnWvDmrguPyvYhn",
  "key22": "4vkG5wXzVTpoiPFbRbpnDT18YaN9iYAWHW1KYB51RC57P3WQHTtBnh1wjN2MLp3y5HdxL5FPiNUaaMUbqPhUNcFX",
  "key23": "3vDFpThxzkget4NTDUZEWwVoSRdbi7jTfhNVu6VwGF3eA7ThULgweQiWti4VZuriZFcvSUpk5t9w5tPEp2xp43d5",
  "key24": "4TUwDUxmhY2o89RTqmeKXW5K1fZLV2LJt77VYvboWx2yRfvE2GwRPXWJ8QqgqC9PL1REf2TdrfYwEN6KdCPsYdQ9",
  "key25": "51bRWWkmL8JwnLnm7g7rYhgX84dES9WgiaGs7autusCYkDs4fnkkqk4BuYrDRzXrTapfUdRcaSV9hyQRQNfdGUq3",
  "key26": "3UqZRk9qoTwdjouUF88YNNFcykpKCXu9paYPrLd7QpfghiP7VBvnsNA2m8e5nMj6krfLjgyW7aFWk5fFz3WSZgBD",
  "key27": "3xBdAuzxNgVR79QJERr7ZcPw83CW44C2HSqaKTLGDw8PeZmHXRyhDQ8RhQ4fiG2ozkig12au9Rce5deXx3getsNY",
  "key28": "2bfvBqq4TAgvreBTQRNEYrRP5EMQ7EyGd81UXi2bMs1Aaxgdp2ffVwrFXhEs56EiTUMKK6i8XQN7Yiw4QLPxkyrS",
  "key29": "3BJ78kvubbDiSJBamnYC82Eq3WKXE4Eeu5Ax2PhgAXmHCXv5LVkdRunSCBbZBBCAvKKzkT7FQR8LeQdjcX9gxoFf",
  "key30": "3aL7nHJoDJEGeacYdzdPiDx8FuBFLYapdFoRsobNKv46GEkS16SGXZWVt7r4m5o41UXmid551jvbCVpi5CozPbzN",
  "key31": "2B8YVk9E4swmgc236EiE6z6E1EuaqpjEAV7GnFrbqN8UkmCePbxXY4C6ftwc7TdmzEKL2x11BQcHaHyZHLwDUhLK",
  "key32": "5vLK7CCXiqQn5iQsUEbHv4eJUZjeKYxPtD4Fq1dEWcBeVnDv5siXfEddTGsZpBJaWp5A9xkVSrgEFMjaqT1CLZfb",
  "key33": "56GxTRWhbVw3c9J8Z869zevVGmF7xnTkyBV4dLE2xqeg9ibrCLdduCGiyEJoRhTMzfNDqj45MsWh7NcGiLxVEKhM",
  "key34": "ZNKa6BNaPgS2zb1QcFCqgZxKAHWVpupy2qGB1DBYhot31YNgtQFG5qXLbGBvd6UXXZXLuZrKpLNuL9PgUg31vTs"
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
