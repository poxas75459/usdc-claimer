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
    "2mQ2oJReSjQJoFUTSDjemVc1L6MSSmskAxbJZBKxJ1QFk26xC85L1kQ2bfAEgDk1vHUtuuKYWVbCQmAckyxpeht9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jaJQ7mdBefssZGs8UPKeCaziLXRGy7KVh2sMRZyPFeB2zZQdCzTzdd1Y1m5kLupRwphnunYkzfHKefNgi3hfGg",
  "key1": "2kNd51Ehj3928EB8J1cF21ZR2MF8oo4pq6MbP7Qs971d1W94Eu5C4fum9DSv38dsPwfid3qu1JRsMwJDZY16J1fU",
  "key2": "2uX4pvdGbzyHbn6cY5DvT3xhzX8adzqNRKXMHUbwGr2DU7yk8fLfW1qWbdgF9NT5bu9bmRrgWg2BS3vJTwnm4gfE",
  "key3": "4YdWwcbrh7zsxegbucPhtQeq6cy2Co8BzKumi3GU6ZuULCXeukwVX64QyntRpTqXWW7zakUCnwffQ6GY3hgmzbf4",
  "key4": "2VaqvLcTbMSifEwRTefEk7yTQ8e2ZPuwxKUsUs867nBRqaYuVTTEP8Vo7wgjxM3kTa8NWvyTAXosGTYwHQoPN7NM",
  "key5": "5Sj9tUtVovECVipXrVvLB3GZRpudh978KYp6aYtRumYPer6ywVzFgFxr84s9cCfWkA92A4mnkjtxYsvDzW2MkQRM",
  "key6": "37EPejZcgzkJeRSGBJ18u5RcqQGe1vbo1vbR7241jVzqXvQRTphN84UQUKJD8tvMPvrLCeRwGuAA8PcTY2mAstV4",
  "key7": "Q4Kmm99x8Piuw735AMStK78z1xrYZpH59rhdP1vKAZavCAxuQnwAvF6s7rSmCLYzm7rybWj1i5ExRBnjx2AmbHX",
  "key8": "RPaDfd5Brv4Y643zoPBrsFBZBsQjweavX1a4aDedKHxx989ZaNrEyPyKJZ6b6y8mwLxg4Zp8pxYX1kkCFnqQqpQ",
  "key9": "5mWfvgrmaywCcRMXMirsu2Cfcon8ZpxKm5rAVwQ1PmvSWjT1F3K4g2fz8rkMkjngZQwa5HuEHPiAGiHfbJeh2h4v",
  "key10": "hga1LnDwA6UGoHU7rNaQVjM9D8a2cpJJomKFekuGX7TbACEDjUP4Ri5oynVN8yunFrj3S331XWx3Q2LWmRk1Gsj",
  "key11": "3grc63aRo1dNcvoh3abFF8x4gK8JRJuA8oLzgKzAJRprTWVrGPif6m1cnw8teHTmpGvDXKwRBjey6eF2zy9zJm9M",
  "key12": "3sS2qqKFkHfQFoput1QKo5eDJBX2ZJxS4UuBxnNbtvwfMwzAvjcef35J7zcg3Dt4rBiBSZgF2xMFeW6DFf896V6M",
  "key13": "5CgLgBKUfg1hnJVVo1RqnY79FH5zLgPZCMnNVvoxqAakDMM6PNbuy4PoM4GobaxjjagwVk4WB1XqLWDtuqzS1ZeJ",
  "key14": "5N8Ht7BMPpDsJRQRf2FGtAxCz5prC2k8q9WioRtNyPBNC1S3J7gEjSsufkcbD8vqqtxUnui7SEW1voeSMfsMJ3Zn",
  "key15": "2gTTb7xDXoapJb8ZFWxk7SxVCstLU8sGoXwL8Z3FVozzu9ffHy4qpt3FbysXcrij4p3NExniHKcFQsTqtkrGUbWe",
  "key16": "2ynWWU2kHRV8C2LsD7gBqxS8hZ7jRS2f4VcvBRQroEDXxzQB8G9JijQBLs1iaYrKXdmQWSL8wvmmJb55eyvLpgv7",
  "key17": "5nhRcuKUd6EVAwDKSJgRGNFx9B13eLeZDk2otGabcko9i8rypSuFcsaeTzFY5SWgYuYvVBM4DjuhZUBrB6PSjEUk",
  "key18": "WGy7KXdPp2rWZ1jbsnymYsVdFHHZ6FdfFaaSiAmeEyRCZVxC3EMVTsXP5ZcaLKLx68Y4wmKiNsTnAemabScbmHE",
  "key19": "2b3QKJi7kuRj2Cn9YeUKdTEBsm6mpr7PH1B7z3bzTCcYSmRV9K5RETpLSxotEdyiGgFwxTPnh1U5azYpDnH2t4eV",
  "key20": "5LWYD1bguhV8cWpGC5yTDjNsVLKdVzf5oB6ssLKeoNhq9YdHoUYDwPHTMT34cYmuRx1FSCiN8SJVHxivj2SBnT8T",
  "key21": "3bGYG5b5jFECLs7xRwcuZhUBZBFXm4j6b2W4tW3HvHZ5xoGDNr5cM4JFQvb6WnL6XmspD7Vys93XwRUC5juYES9S",
  "key22": "4vEsaAsNg2Mv9VfepfiHmx6hir9dm4idJzaP6NMp9prfHsX8y1roC8LxbZ7UrdPLJmGxW26BGAsiVEgwhctDxHcy",
  "key23": "4MNADWzN6bTHP3t4irHCi2dUvi8ZPmMVJbqTf6JCgVFdWxsbVh4YietqAnm4ECHRttAr7oweLLPqgHDuYqpS6qDS",
  "key24": "5qWBZbERhbB327hS7mLmuwCznFHzNUso5zvA12H3uN7UbZFXesPEkpZsmjKPP5UBYK5RFWTEa37XDpXFqpE2fkzc",
  "key25": "2cqijWzud49zgN9ufozYAXaKeKYwqYFbU5MCLRKsJAZqFLDZeH1tJa5jDj7NgXkumDhpYS8FCh7MbgFvsWkDvLKS",
  "key26": "65BmZ294Mx1PyRLEbHyZp9ae8wHydPepqPF7T4GxsNd1hXsR1ApxpXYrVesjXbQvjbjYHAU8ty4wzm2UKf8e3bS8",
  "key27": "4q9P4GSmBEeA8RWDnenj3KmhXCaLqDtmWDzdwceHKn5xTSjtGXAejqoYYH8QLvGqp95kYaVv8UR3vyo72Y3y7iBx"
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
