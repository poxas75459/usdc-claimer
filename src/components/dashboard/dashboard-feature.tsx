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
    "5bAUDxUFz6ivRVi6rRg1sz6k9weViBr8nCQmfsJXy15WnLKapnkTRkv2bAriFGzvHEZN4dhFcNehkh8xqGZP8eHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Sq8MvsCCJVpMx2wrMaG68cHFJeksMMdJBUP7RrKYV3Ce3MpocD8gQUDBk1sr4e1NLdRFZTfr8mSEnKzAKWnK7X",
  "key1": "4xME3mhRDqKtQaccNTbi28ePQymAJc8sDfwjiP7wtTzGcU2AYCvToT2J26ybXiAXBzy9MmV7BAwCuFi8hUvZodUv",
  "key2": "528NPvvpC66Ft8xoZCbVyoXzq6CxFHEcjz5R4YhtLyBMR9vXqQEbwT4yhHwSZDHszkhqqgcNs37PCBd8LVU2KexW",
  "key3": "PFDct2HpVZ7UmtcoUNprGF6oURL1K8cUdEUMz5qbCGEXYhYcLApvmYS13K9WYi1aa9dTWYadZdk2mJVAXepuqHn",
  "key4": "4qPF2L3dLJzrqb74RfnM59ANrMhhZjqfnxTNT7hMmKz4WVCc1E2zfRK7wzYapfu3dDWR3n4vBMXyBoLSvb2x4waJ",
  "key5": "3ByCKEhp2hUY4vUzGYrC2ZWx5tmMd2gffPpKZLS25gqTinS4tDGU1yy1jUv4ebBpingC6WBzjNsdUf8KzaX35r1G",
  "key6": "5jSGtKxmsg3VBED7R7itegQVRygtfwkSrZ7PaL6ecsYtBcBb9Q5TCqLHTeSuJ7LC1iKqvFdXCZ2b5J5VkGfWVeKC",
  "key7": "2YForePQNBDmP6TAQ2crBRiCeMDbAMT1s7AVZ74FWtKYAWJFUeX4iGcsBFSkEPgpE2zXZ8BFDPZmiRuaiCcstZmy",
  "key8": "25Z4MamER6PjdfHPQEgSkrJoCPQKjXxJ3qLZpUcCCVngzic9bfNFifXAfHUwUeLoUb1zSughTMarccWveNbygLQx",
  "key9": "5udWobryfnJpRBNMYwiG3cQN8cz7Nmhzn4jAtqfvvf66ssjXTqj3Nw8WnycSWDS8K3aMqnoHzUYDpH4RibWVjGNc",
  "key10": "2QzVQrTKbnde22V5aU6axA3HBJFGPqnf8WcBJo9F5JE3sG6549kjW3DsHSFzQssd7w2Q6aFxeAjcMrVyQXy4eJDE",
  "key11": "4zcW1TWh9xmZojAnNWrHjJPKPq9dFwpJRb4EioWz5B6Hbnn1LJZshWQsRHefaD6oEVV8UzFV2BsySrsbMJ6g533z",
  "key12": "7rsfwddaNghtk3T1btkMNLEW39ZSGFwhqmVw665a9ayhE8gQEPBhShMtRXWb4uM4Lu6LtokNzvRoDoXiZD2ZeVx",
  "key13": "4DbKvTpbDYXTUNgtcxW3JLtcbgJoFi6curVeCsRVqRykc2iSqdFjAJAatEBFuZqQKBJq6zxRugNEworGT7A1pj9q",
  "key14": "344NoVviyqvymjtSDdJc4rZnP3GMMgCUfHE4wnzsekrxqmfLrZwVoaC6uLQwrVFsPZb9vohTZm8GBzNtmDiKJwiC",
  "key15": "XXL145jQZu3Bgror8AezEPt6h68GFwSHM9D2dvqbAKtNgs6GLrWavXYNLMx58Kzdfk3CpL4CD1sYGEFcqcJHRfx",
  "key16": "5Kdj18zKwdknTpcNKp1BvYQYWavwonwcMeTuk5BrcCu5bcB7LzCq1NJxj1XYuLZF9cVxJAM5APMut8xd3nKwgURJ",
  "key17": "4DBLQX6MPhpzSD2yhYkp1RvJP7TBwpAQM3KAXBEskLjVbv269hpRpK3ZacLwFnttFvN2SomMP1Cd9tmERyt2hipN",
  "key18": "2KLh2UyJCTQn9b77se32NKTcQEykArwpX2bub4qnE8XwGciG8kzJysRDNEeuQaRxXvQFB738TgD3iAGsddjGC2UD",
  "key19": "38t6RqbGZvER8kZLxM2kxGrQmHPpz68kRHJtdDK587kGaYKA4yquEcCHZCSiMgpBHvuqqT13cKk6tep8gtPirkb5",
  "key20": "3Lg47WLwqy8wh3UXA3ie8M3GXM2gEhC4FrNYfaANj4NuKZqT1gZni73wKNRYjrys7p381FHJSE7j9Q9Vi25pKjQQ",
  "key21": "oAd6MTRH6aoRQr4gmTdqZbKh8V6euN6K1maaZLkSLLE3TADmuyMfhGAjZAcyMG4cXv8Wx9qk7HFfxaDtBu2pw2H",
  "key22": "5hQq97wyHdahobMZGVi1NpCBtWALrVLG5zRqwPss8xRznXWWqZrPSokvCtxz4xNBrk7DHbkuQ9F6bL4zPQgbm12f",
  "key23": "o49aFvXiXe5FziCujUG6XrRnZNoCKjgBYns543PgbGg9FG78Gz2q9VR82Vc8WEiuTYqXGKdnf6RHaKGTv1p7BLN",
  "key24": "5TiEuorjpwy6ggPgDJfMgNJ9MLf2tCtipHSCHYQn3ZqMi2L3svXitAtbfhphpzTZiRG9dvKevgF27fYV16RKJZLg",
  "key25": "2M1LcFdoqhkdjte5XQmV75d286UcEsnbbCbLPFR9b2E84Tvtj2VsL9mHs5Uez2iUJf4Bzzn1RP8MRr8f1e1TJkRe",
  "key26": "2iaYVf8nAPPafR1HVpxt6ysp2soeuM3f8JhgjZLvwrHjaqzp1MZidsXhRzMZkfUyPmXxqPfZbkU6XSAs2HmWg6wj",
  "key27": "2KvXfBGiZZUgA5P2mKQ9KhewiaJDYvu87vvrf47sbW1gmFWCenbaU2DBscUhFLuqxb2cmNhjqnXUeJKqygH8bXdt",
  "key28": "D8JimA5CpFr4fDkfL7R5E4GjXMiffEWk32N4TjT4BtfbExqUMJwNx3rER5wxRS8Mk1u3tobvfUec9WoL4Ffe8u1",
  "key29": "31b99VevxmC4hau7JkkuqnuYW5DpMsjpygvHj74919ELfXwGtXttkh3oDdoB7uTVw69K3TJx6cNt1hZgwZRCX8MG",
  "key30": "2m2gs7ZZKS7h6rApuxZjgaNf9yP17HJKh5Hw6672zXjGSA18bdmUtquxy8AT7Jqybvp7c1diVgiYh6oBVTTEge5Y"
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
