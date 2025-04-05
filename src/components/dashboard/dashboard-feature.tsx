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
    "5H5u5KWey6LbwYHhAwrDp9Y3tzW68kUusC9VD2297KqPZhKrE85LB7HnHgVMXCzT39w5mMiknLZgfPjzxPih5zqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32UoLESbsRBTqrvnnjHurRULC8ZdjhBywfXA6GZjoWgxs3MzbEY4qdvspnTyvKmA52zEPh2gpyb7WPVmh4FCuyGp",
  "key1": "2FtaetUuscsHVnVJewWTjyUCzmDkdvHxcSKW538niReDCWjsLkgDQZ4o1foZMJqX4yx1b9k72nBKDR6KVco7hffr",
  "key2": "3UgEKujjXWsx4vcK4kqXZYkv6nG7HxMsg3XuZoYgC8qm6iJQrZezaHQio1yUa3v6ngTsfKaLs7MCCwhCCnfY3gQG",
  "key3": "4GMndAexwJjirnTPbAKTXJKH9mMVLHxR1p33mRfQTuUYZ4D6hYJh6rwx5q2eVixpqXLsynMf4kVpD8xjrng12VFa",
  "key4": "24k1Va9oRMYt51wnZ8uEDx6SdGTo5V4Q3dVdFWkzeyNpTmuYz32vrKBjQNQym2WHt7tpLRMJYhxd9Lc63jUtVA2J",
  "key5": "3dpunjh3Mv7YSkQHTTw7uQbYWAbrnpUb3fmjuaB6CqUfRCizMLP7DREPH18GRg2vnz5gPxZifqTdL9GmZWxqsBxF",
  "key6": "5hpuTHG54QQHQRxCvnUCmjAkQwVfEXHF234va189XyVdfLin5yX4aXkGcTBCK5ekmAtvXtCk7SrweC3uhvjWLZMS",
  "key7": "64YcVC3k4V1L954qXwSdK1E4R3McF993QJqDvcgESW7vkyEgP2X2soS7n2qq2YnQatSfYLVdUpmWd5xYf1GQroSo",
  "key8": "2QwG2Tbs4jtkWTbPRMKpRscqG7xd6DFEEoSwtVWtcrvE2j2V3fAvizt32UfZAyGkZ6yeU8o23Sfhx9yDh6CVnKHN",
  "key9": "3eBQkBhkr56jCkqjC9cnq6eZVZzPt7xJX5pigJtyBFQpJfSBkPeP6cFPGm2XisWiMmEKaF7JAnQmMRPdA16TCwBN",
  "key10": "2fotdBvWPCXwq8tP5zy23WtNi8cBeJnw6551KVvPKEF7N836hMw2c2Rh641VVHfWmdAZ7aGWgymfesTTzCH2ADNk",
  "key11": "8kniR43RzZ83KVmmevKW25c7FMWDzp4gUA51PthQ6omCYgGXnLs1HAmuKQHY39gxogStkTSZaJBtiu9e4exnTi3",
  "key12": "GNM1iMqY6xoeDTXy9NDrEaZa756dSKcvkFHDyjw28xYZqKMwV79tom4eBNTF3yPKNocVie9jj17NWzbxq7XT3MZ",
  "key13": "5ErYFrwShgcmQssf5jambUfMtKC6aG8A6Wo3PQt4P1VZjymrQ3DiPKMKvcLeumm79VtiYRWRgezFcfVH47VPxzGL",
  "key14": "Se5CpUJpN5e7X2ySEZrq3RRAPaympSvxnh1QSDhzkNVcjpnFj77eXBYuQ9obCN1HiZGSmhZrbe62XaYCHY75QKo",
  "key15": "UyTK4pxHsVSBVhHDJ6eaVVqcEuMkVN39zHvH4PGn2wS6qzu49xwVUrETk6mijg27Prq2EoeawHhm5vMJxfhfLaW",
  "key16": "5eTN5vZiMUWcwvCQir8e54Qf57fWNmXw9RLmY4pT59JcDwGmvSVyEWTfGgNr8m9GoufWV7P6pQ71nCLZwEfw3G3Z",
  "key17": "HPQ419BSLm9r3UAeKpmnz9uSzNwGSG7BuSjnVxcNHQDhS6Ymnr1543rfwKJKBkvEHJyKbsWJa1z4JH2SXHbpFUr",
  "key18": "3KJ1F7vsu71dXvzXBZjA3vgfJXzPmw7xrcgpYyAF6ff8Nm1hHRF2P1rqg3mt8tfvzmBLvTpmfeUXrDnsphZhGLVW",
  "key19": "aPCQQbCzmZZjrXG8xwVwTqHD3v32ThXV9UYeAUMdokZd7VKFB3qxZYu68rfrtxGaGRcqLdmN9fsA5vXwAAUAYS2",
  "key20": "3F5QNWYizp9r6tB2e1VRE1pWcvxaBngqFmcmVqUA8gRK1MxA4x5RujfwmW6ZL2Rp4HZ4vWsn6F5avFj6bpP99MGU",
  "key21": "4PNqCdp5VL2KN3gGRSdK4T49QLB8SRYcaAS43uvR7sgNpFg2orZ6aKj4xX8pT8hHKSA3uJtSWgB4K9FkEQJBntnS",
  "key22": "iEorxMXCHSWgp12YBHGBVjqePGRf5nKuJeEcZDAHupNQZrdXyNCU79yuU6Ccane41LzjwZBzBKdLkVkmzVwB5U3",
  "key23": "39CZiLS88hGWhErmgbuKzMRhKDHkw3dqtG5Q7HTCwKC93F3rGiwcWqDpMSGzEvxHRVMnh22FX2Frj9tS8FrQfHii",
  "key24": "bbdKGZNxZDP3hXamqoKZ4ZsEMzoM2PqJ987PXDEtEEG94AdfpJhpaxJLGDFqEBSNRuqRJMNQhbSVoJXYoqEJGFG",
  "key25": "5oab6dtFBUy4MYyUrbqxfruEScebGK5ptCNxgWV4z7918usGjavKxp4xCokFn8XwsP1bta4LVmU9iLQTGsJ2V6kq",
  "key26": "3qKukSFSA8pZbMa1ZTjiNzP2WLJofyjY9G1FYs94SgWPriF42SmhHwUvx3vaRWfRFLTMY5xysfwuu5oUyiwMGHb2",
  "key27": "48SikhujvNm4fAgGfpWZrj36JrY1gQcsvodkuqrGinYjQJ7j9arkgKq7iYKMZRqewdCS8kSCBUjYqFPbD7yp6dYG",
  "key28": "43B9bfoLgdQWJxx7BPEJfHytciD6X6Edr421eu8chVDwwFBwW8XZwVfycB3fUJeCBwWQ8guPb3B41RAV5J8XruWU",
  "key29": "4bETZMmrCpvCsPA9J9uRc9nTbW7DkjNeTg9EJzt3Msv2fdVFxqmJ7dF3R9pzPa6fgNzz9wY8kunX7wn4hpCnPARM",
  "key30": "5gKLrULf8y9oL4WsPfQuz72LMbGznvU31nW2Wa2ZHfn6w26A3VvjobHHKjML66JnZAHJ1bQ4L1tfjRuxRH8iBcJ3",
  "key31": "34Jt5FYiPNuSMMKFz1Qxkocs73jwUEdgQmzfJAu2gp8WavUdV3ps7AFG5tHN3BSvVorMMAnchc1dsqaQAeznK78k",
  "key32": "4p9kAxVhDXj5nAJxgq8HLzcZxhZyvCeMTpYAjtSnuP9wg6uQFCqKYSh8UF49tLPg2kJaR7rz3SyY1xL1nXoAk2Z5",
  "key33": "qSQLhuvCSQ3VSCUc3xkyxTPWH3BJs8np3jCNZ5S5kMZjoshoS9MxkKUWTT5Cx7mKYQxhoXPypxRdfbrBSsjmphw",
  "key34": "sX8ffYGJ3tvHfcZRJoHDckBDFQwngkC3A96K4x3qZ8VzYFqN2uNGgUmLPeLPM1MTNekydY9f1r9rjTYdkLFxaaK",
  "key35": "5sW1fdWEEtxAUXWrazpg7hCtypptkpqpKbSRfKvk6b3h1mibxPwv9seaSAGB7Fe7at1m5NJ5QWk4VSadEXVUKm3m",
  "key36": "5Du9a8D8icg3sV1pPJYGtUdPV4x4D4kzqdHqtoXTi4EcJDqd2xU3SD9vSNKantdESUrejRmkTSGuPn9LQrhNS7N4",
  "key37": "4nMTRxXyCKtib8Y3REn7EEr1uhTxBYbKE3dCBYzK7AJjbYhpsscZiiVLSDJB5Uy6XjAFgMAbx6ZJU4c5h6AEJBP5"
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
