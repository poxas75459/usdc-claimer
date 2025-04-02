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
    "4YfkKgcEndnmx8LRqULvLD4uL38cWbH7spV8vgZcHkWViKEr1wgowV9k6SRRbkVwWaE4xKH2Hvt6GvUWJi5PrsrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PhyMgcYHKkRNqwBxgQ6zB4ih5ccZoaBtVYHL8Ku5k9j3EsQDf4sDCX3e5gVTUfeLLku6EBUbUSUt67QZZrnDrtn",
  "key1": "3AePYkf9Db2YKDwkniPL7tZhz3vVjjWTJKbAuRRRjvVUxSCCrCTsyJjoUqKCzm74ER8yTJ3mg2Yseq5FgadkP2MK",
  "key2": "4gt1rqmwLVLgt4mswBS8h1M5TYpysMG4Ycjsfwc5oJcaSGrx9UAFXMNsLuVD954SEnfkCTpoFCQU3caNPYKj6Gi3",
  "key3": "4PpQjGftn1nKk3uznhWrxuFE1EU71cHhAFjTGMSG7jvq18oJ2QwiTh7iKk6xk9kEruiXQutrjva6TSy4o1h1Gar7",
  "key4": "3EQwdqbynDp46R2k4pKG1s2nd7NVpLW5DiqBuWyS7b36wqfpYLf7oW2ezqX4zEmhxuG95KCkKrgMJtPByaTAXTo7",
  "key5": "48teopdeDfgBsMLNjEnVFQFuYjjHCCKTEXtJpZoLwD3j9BCH341pNSFXXEdifggR6DL3uYFff92EgC9rKgbREoS6",
  "key6": "5GZJytWhFy47V1dFpRwg67SCAK5mWJLivZDjNz7hkjPHCQeSkijRMcLoPTbxBxUUspvL21KnSXx6TKx26Lcktq5Z",
  "key7": "5mHRaU7cbscvm78VamMj25JZjRxyh7NxvekRpofUQxAXvfouaQnyqkKzk5CZv7PFqzdYV1iW8VjdqC9f77oXzEkE",
  "key8": "YSMVbhARDq8z6xDJZhZ6jac7QULLS5tiGyK18Ra3tJFzXMQm6bgW8WB2C8XgsU1ZCQu3MBK5MgGGyELfQ9dZ5is",
  "key9": "4scVYNyCj64RXiSsUkCzFRK9D16mt1TU2P3QGZfcgjFVS9iaCF7dXkWnnhVCxpxpBLRYUh1y4eet6rW2u1WPVW3m",
  "key10": "666KgicJGucEgLqXTxnFJmJazkPRcXZZ7aPrNzVdjhGhAyLuJTsvCqLFhPcRBx6F5LJ7ZX25qfcNiicREuXjQexy",
  "key11": "3EW5bvDrAmgLxaUm9C8gabVrvASuuzwJvtTvHLeehYSFQdvw7oDfzzgn3xf8DmddwRjN8td17AusAVZZTdcj84ir",
  "key12": "5yTvagF2SNMSQM4fL5V1jg4bmHUjDS8WJb1aR5sKSdokZB9eag6sBpxJ6tiGuoxKDNBtXmWyodjiVN6tYE6h9bgv",
  "key13": "2z7tAjK6bLX7noU9Qazb5PqPEPBWpdgvA4GVYF2hyTkGEZusKernSKYfByd3wgD6hnhKrz1phzcymUQyRPZ2R5bD",
  "key14": "4RNAXL95v18cJkFA1qtmhgUvGxC1VPXhefM9NUos1TS8AU8apb49KpDNcWMV1NgWQZwkAYxUdwaGD12Q25NUYBaf",
  "key15": "Y9Snd1n47h8zuxRcASN2FGzQogQsxcpKvYhKNQuvTjwmi8FAkwebV9iUhwmpygGPvxxMZJcdLVUewHkLP6LX5i9",
  "key16": "5kjgZcQwHp9vAdoEai8q2SUtJD6PTWW42FFwe3XDQybnsdVyM1oC9cvdAyP1WZAdp9prYBbMgeeCJv7SRnoYV5JR",
  "key17": "4oSL7rBdxPV9aDXJEETjGffq33XitKAzC82oS1JGKEFjEsatuEBCQ6m4Cce7FFDdT88agvK2NCo2p8FSBWuYLuwg",
  "key18": "32ueWy8JW2HMmFiUpKTc9KQBAXSdXSwcDBmdiCs9hRmDAT9yrk4ZaJSJA6ZFwuHMwaSZ8jKvtEBAjC9C8hjE55ep",
  "key19": "2qB1CTZK1UVQQfQNWaZRUaCtUBhSScpW5CWLcw9UGXxBow9ZvC4qqZD18T4TZgSMd9mThjWfezuyX3vAKNeRRuBt",
  "key20": "543tH6EayGJSat9DLAdSSQGj4JvaQBkt7ZQPPWGjx7RsZVpimNC7tPrUoGrK4Mer5XeTtNyZjvejyHTz3aYNaSXr",
  "key21": "4aVUyAUoCBpDzZV38Sp5Hpvy8BAyE8W9CR9wZBhCtikwCqaCWkujW6YRzgpKSFLjfMEGu3f1X4aEkf9bRKsyQ9PV",
  "key22": "2erHmCuTQ4w7cxRYwsyesq7w395JiAg8EW1ca2wutFHyHEESzX6h9kv7iDh9YcMzCqpKM73TS3pAQDxF7RvSukhw",
  "key23": "7fLeg58VKMA6pDuV7rhsLcD2duo5hS9GQiKxpM3f2JnyMCS4w3gLp9P9v4Xirp9AN3qTfwhDjWAoZuok5z7iCbx",
  "key24": "NsaZEA2QQXs2bUx2jhpAbFU1S29A1XgrA7PGLTvfFQoNw8cqxYz8XNdfg7jPrXNhw2aMuwWktRxyTuAbCfaxVJL",
  "key25": "454d7AAQaHZgnJQpvrxbH4fBKrZq7vLb5o43hwsagPmKt93qhB7yqbiUJtHEa2Patizn9eQFQjo4x3gCBjTpSCKw",
  "key26": "2BSvLcmqfcMhi86D2zY4J4RmmhQ1c9uV6SXQcSHWEyqAbbmvKqNSCxLcrn2giBve1X2P8x3KdpZiN3yvDM8u2Hzw",
  "key27": "Vs9dyVpMDdx36MCcEa9wwsBqRAovo5Fq7Q793zK56iXMJXfGHc53KAXn3gehSxTTKEFu4vSRsAgNCRRSFcun8EN",
  "key28": "4wbqN5Gi2pAk9u1mEUpM4rfLa8QbZ3ha2NsPEyD6YqDu83tWWQQghJStSZjgtJVpWTivSaHUzsdow2FDz8RUf3sm",
  "key29": "QYKYfQyiUbdy6i3Sn7vMXy93bBzSD69vGrxN6fug8PzcbPDdpebQEvGQcxmYUgc4FReVv4t1GX6rUrsCWWqpupJ",
  "key30": "3HMPzXtwL9XYVHJTEMHi6tp4kxNodYkhjTe2pDyc5uxGBr3dzZX38GV9YpvtyJmqSkytZWWq8GKQT9b6ZApDdGVb",
  "key31": "4EQru83NkPSAztC1qytK8hJT8PAnxrWJDL5VRgRhfxjuvJHQLbvnmpwfW8vjUkJgp9ibe637KiGVEDEMsz3KH2Ys",
  "key32": "3AGuYiEEraQXaFugBpgSf9oarjuYdeL6Efcf34ExqUx57XHxyEWH8sbZXFJNA6TZwjpjGcxifkMT5F1hBiMUNCWY",
  "key33": "3Ez35GPy9aort9mNiB7x92KFUx21euTA1F4Kguc3VVWy5Ksvm3PWyc5N5s33zcbs7cKiW6FP3N32K68DMLt9PRio",
  "key34": "2RewZ33ZG5XL84MCvXQeMdGiWxHBrpy3e3BuKEdkq31swByRC27fxVXycgR8GuRuxWAPYwMFbszVNEdkBG3XPoc1",
  "key35": "UN5fh3CHU7ZoVpEU7Zxynn8u6udXVLJUiDv2mREvMXFjjfeJVVU4Uu5QJ7Q7tE7XyNv2C1Yb4zqxvYMXBzhX7Sn",
  "key36": "49g2yeJ4n1FbcUCUoQcjHJXMugtkGcEJHGXFQy5M9r9nNFwFHAu46zSPR7saRAaYRtB1WE7AgNMqxekGF3dd5X81",
  "key37": "EqMu9GgwJ52TGLwjaFLGorMEFZsTHudxtFDpYQ55ypUKE5smfEnKSi3XnAvbHfSvfU69Qvg3KmMhALWH9hTjv1X"
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
