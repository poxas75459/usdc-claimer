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
    "4KnBXKZsS475mp3RT4dyUzxRGLrB21ytuYJUGPdQByqJC5FqSNoQbvEjhedvEakYjykni3dg1kFhNQ2RRHZss6VR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWqeku8oqmJpd1y3KPVzufaSvTZnW22R4p2DqubHrwB8o2TjeBrGbiLU5EnugQRG5FPAGY7Ad8gHkFkwctz9FSo",
  "key1": "pfh2VrDDrUw5EFboVUrdte9LJ6C2fPhWbSRpGDiqwhLG4kKd9nknYyhFA7pwG2iULuu8EHcBJmFeoARKFpeHd8Z",
  "key2": "2a8jdJjxYFHrUFXsR45tazCrxFyX1kYaWg2Bdbg5c3dKs37rDQzFwNdncLUsQL1i6qErXEoCRTLHEWbiJnsDzGND",
  "key3": "4wHKrVx3Xrj9RKnT6Pg1gSrMV5Fuz6AjqJwToW7XrwYjpPCLQRHcTgUUak73pKHL6Cy3XAhHvAoacQWLpbtKeAKZ",
  "key4": "GDX13mrEMBKnqVtxffZzgwQpayrR3teNeRSxoppgHaRzfuWvitmDX2Go6LnYdYKprhNFHRiL7RVoFyzoBFWzcUN",
  "key5": "4fM72z5V45ewYjFqrLMp9SXwGZG7fGXtwuTbezb5vTJVCvFTrPj1bXS3mEkZ4tBjAFdJ1egMmPFV4PBXUF1qYB7h",
  "key6": "4NHiFMzBSAhJqsMo6Mapc6jiFvvXfP4GoY3N3ykou8WvroX1k6picAkSQbJkK6txkrfKNCHTG6FiFUm9QYTYT46Z",
  "key7": "5yJFyCi7ap7atmpUapoHT9LBmE9ih7tdcJUyvaqHYo6m8ADdP8GTY74t7ETygm2yhgh3anCy9grBqfw49HK2isEA",
  "key8": "39bqAEU7yqZpo2p8AMDWJFMPRADwkYfPTzpb4BZhFXKHHXNqyrpTQkcgTPB4BahHbuX4bPmSFtY8xQRJ1b1Yjiqn",
  "key9": "3c7FMGDgZCMetwrvW3zQiSudNTL41sRF9qL8NpTPSs2hKExDiHUBq3dwwsdKXm7YCj5qG77d2jA9fddGrmdLZzQh",
  "key10": "4hD6uxEnoLJ42MxveJ6Dzkrgc4WrpvwWmpfW15frDX5UVwYojMgkFJaP4KZfDGVZCcMKYNHHP64uYaMSgdbZ2oRf",
  "key11": "4ywnc7Hc8ZybZ2mDQd9FeuM4eTZeQco3PFf8CzWB7uHSyYeaF4gjVVMX16zQqHsXmQXVuJYJbx1yCo2XocHFHsah",
  "key12": "4kdLeueTRSkZbDT9rZXUWYL8WHHJ4rqBgAF5cuJsVuyZTqArrdEVfaGr6L8dRQeYSpTFw29bx7C8gega16m8mNJZ",
  "key13": "4Bv22zQ9Aj8ovYLxKYtrbuTJBDVv5fCCDdSZStRt3DJbLAb3tiorxjZzPw5vJoaYsqYuo1691fLFAS2shmUZH7rQ",
  "key14": "5UeBj5j96wMYYzKrouUKamsD1exPMUK1XS4inZpw3DsC2eKL5DtZdPzWBD1W2sNXJWexgmgRatwqRMtYUhuhHPW4",
  "key15": "2vUqGzVSrraKHLgAMhKxbNJBeGHpR9GosSCBCmZxbCcbKpYQqLnx7W5m4AwJakx2mJvThq8KgoNyQYTyaStTV8uu",
  "key16": "44xpyk8SMxqNgZc9khuy8DJswwoA2ypaSKCez8z1UY6rbAhrSUsZBob5jLWjinWh25vW49TkCrKawNAc73KXXS9p",
  "key17": "zZsmnvmxkNhjpVy6H6sqABaSJKyunMusEEhYgDvJGeGdpD5FMyxu2DLrXgb1pXye3wPypCthAvEgBjPYdaGrtZF",
  "key18": "4XZ1EChh2XXqyx4wGrtRLMAEmNp7ThYmxXVWAb92ztFy3g9EiW16fad4HBVhcgjCNosaFMAQpBQ4fSYbKAa2KrVn",
  "key19": "3wmJR265ji9Fnbvj7oztGLcMiJDPFjTAypcjLNhnVqmLudQxFVaomgqbEGwDGC82efrurGfomdWFDS9YtC9jTQTt",
  "key20": "3QEqXgF9gtxQUsMviMHfbVP6YFfnRdn672YyntmcNawThhzsV4tvAFVx6YZFRGN8jsTcKY2AQWQ1CZeA9wfwapup",
  "key21": "4NLA7mJ3QBXPDyHjZiTuLsGFiZ1eFHvfKwYwM17X7p1qBcHvc8hUduGNWtaX2gdDDnThdu1ENePH4jMEDryqaDUu",
  "key22": "oqzePPCf1kDZDC6R7eCd4zK7Y8JCJAvzejFan6Hde6W61HNPfUe2DrA8pMeg1daAjPwx863wpkQNWt81gRDcLtk",
  "key23": "2L2xgZHnujiB7VHdfqmnKosAzFAAXa4UijeYqaw6eKgTo8XA2bY48RHT55fovFyf4oxYLPjg8wVua3HSmhryB7hv",
  "key24": "282QVHrVBkbUv7jJfqs3urh67yBK5n6mEH4Y9BaWzhrTjKkRmwyvLvEhHeCzB1tf8CVC7w4khzAAAk634E2FyM8a",
  "key25": "249KmkzXQAyoP8nxETrS7uuevzE8gARxQZxFPNXSyTnFTvr9NtPmtH7UVsuGab4EaXG5bAY3jfBK9CUPEPPQ8H7M",
  "key26": "34bRDFsPzfkfWZGbDU1bxgHNqN6N6LKu7r9WRcQVUabnx7oUytuiova5JDN1qM8o9tN4Gc3PeLHVY4vhTVEm7pYX",
  "key27": "2BQUt1FnsciQWA9v3uBewPwK54VujN75NpmMCR4P6iEFkUBpwZMZzkVpJj9Jr5jkPBC896gDN4NEFmSDwqNpaZy9",
  "key28": "3JqEEaYv858hfUaokYCjpbMA8SXiKjwT3BxwVFrkLouq4BpsBiRUtAU99ZYFnJe6HDvzDJnxx8DrAcNtHf4E7QY1",
  "key29": "3frvkwjHy8uJQyPgGU4jEj2AHD9vJMzP9fsUc7yEtsDgpzgF8HqcZLBywVPb55GwNGZz544KRw3QPvjqh2EFjDwx",
  "key30": "2ZQcr4211pGwmGT6mhd4mnxtbSSPJA9F8YBFfnFvkkVG4nii4HoaHVLuqSM35NzzdZhKmYGf3BgnzckYf2jR8eBh",
  "key31": "23Z2ZGoETYk8o8Jxt5D1NYFoRJ3KiLTdc13LD6Q5xvdhJXAqLqpEufi8R95EZazN5wmRjyNWeshazYX4B6xEKJpj",
  "key32": "63hMyJDnoCCBTHJLNNAC9VLiwyB8wXfgU1ZgwtTe9gEzKNJwweUMNyzwJRLMn8FT9ubyU6BQYLZgQqkmUboQXHFi",
  "key33": "2jFo2XDm3u44y1rfPpzsPPpCmbrmpVNPvYF5GNgfk2yv7ShYPdVNvWATjgFEsS2biF4quPMu1JMVqher1aHESi3N",
  "key34": "4TGVEahrfzuLr3mJRpSBF6G6h5cQHqehn49fs3FDDwqJbZkqAZG3cYxjPnVH5uanrSQ1jjpjT8qZwSovxT34EuKk",
  "key35": "5WPPHQXmQ1nP7q2kQXNpUzDaNoLyUnuCDfAzGHfiwTUHAaE9eLzefYwQrEJqkd2MjA1rKPC2ANSzC8cywpqk5TZT",
  "key36": "51hjawcDKT6uvRMM5RbPTF3RcG36BYNsvP6ewiDYaNoZBmJMgtKoSBmD4rpxJkDQXg9Drmdg8SDF242qDLoTgGZJ",
  "key37": "4Ze8jPfC5bXHZDgKR1VmRNAzrSkbHxf31VFkY4BVwMpNbNDeq8hqUwF6vysLhvEbdWiE9nuBa2qeeG2k6oyjhimb",
  "key38": "3AeyTnv5K7LgCBodopeoPv2d7sDosVunCbs5jq5aw1vZtX5pbuML1XUEk9oyFuRgVj3321BASbN6AmxDexQqsk3Z",
  "key39": "2Zg38NNzZRau52gHxYKihX7Xh6NzsCSR62NKRp1TbvZArbPCspRv1VTErQ3FeANMxpCmwCe1g94V2rBGipuL9rBC",
  "key40": "67aHLWdhUCeZLgbZHRztMvaYNYZhe88PrdVb7tLJi82NehKyPcmXxX8kxewBpSqDJcjbuDam7A1rsndgJgTMqEEi",
  "key41": "2Ts5BmJS9nUoZq5yiw6dqtKv4aMKNEt9Y9YwbbwTAt4iPZTWhWFy4p9HrKUzgvSmANz43Y7TRckzsHFoQeRpR476",
  "key42": "4rirVMjBYwF5Bb6kbk56TyxjUVwDhgSP2fWYVWvyVkbRgdvhow2Z7vYVKf4GRWDRivmtfKqAiM1PRcgiRNvzDkYd"
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
