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
    "2oV6ZQzd87LiVAsaAe9adg1uRvh1w53JyXRoFott7XGVvjEdhxQPqTxC2oUxH6tqEy5dTerQGEh6avfX2UhsAfn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hNBBqQq4LCqp2XtVfmP1emTaeqFEqGkzmFQsgHBpnvu6TCdV7hKY5LGigzL1UyAh8ovaDyDZvfFigcw3n65Vrc",
  "key1": "2kkh4Bgu46GaMMaXYDsFKftTn2EFHZvbyqJDfwfvUViXUDo9fnkuu8Wj4L3SbPddUC42YFC75dr34Zc14dmdh9K2",
  "key2": "8UkoQB2LMiJwWa8S56mRL2neYynSGF6XoXezGhJn7WRdvMi79P7t6Mhyzy1L7RZBDaEyHFAiduF69a5TLUSL7gb",
  "key3": "tAxdf9KScuBZAXPAoAASaJNcrEevLzKRJU9dHdU7MvhPgEiq6V2GTRZf46hp8ZFqHRq4PYw2rZWQwW4RZriPd3C",
  "key4": "5tR3RYegYC8wqymxNrxTmhy9wNNrLckG3zeqHMgsksgDzpF6f9rhQx9E92vhTkvEgCEqvW5pnoKz5BdaTJ79qSso",
  "key5": "2VcHkjM5N6U7qttE1Ec3TNmNxDfGUKXmD5w3i7mZwbBVp21ArvSxiKnv9RYwHhRPJMBRXFoXSxE8G9NoR6H6iGQC",
  "key6": "3t5LMQVLMs77usgQDwKcJ2YMBTV9U8vxG13ewvQsm3YURBttSxLqTAwMBd2uKm4sf5HFewLSMJPwWridYKZpAhVJ",
  "key7": "4yEDZUu8kay6vzCwRKvCNCAL9oGSZvdss1WjJcAEEMsn57ffsPYwmBEysrFiY57NyBvNAjYiKTs7pj8aGYykvCWe",
  "key8": "5bjpEiL94CMhq5BkuApydrNrWG1RGykA44a7MqVGp3AG8kwKUCrdg9n21UM4c6PCqZ15Brh5SsW1g7EYukGrqjat",
  "key9": "xNTGzkg3q6dxbGRsfsL8hMn4tL63VYtmiGZieZgmDbNWzkyS4RyuRZk9iVcpSZJ2DHyHBTbk8bJQUigrbowkt2N",
  "key10": "4awou4pyk7JUpqys5kaEVwas3ubhp4oKy3JJ1BYaGskS72M5sXTuK4nbcuhM41fXvCC9go2hrYQ3JNJb6eQFK6bo",
  "key11": "jepXaLqn8qosZR4V3RD8RLWMX1G3hsqaTm3aMz3Ae9mtaU8uowYMRzygmfp2MaT4W12aQ69frsQ1s3wBTcNQ3Fh",
  "key12": "6EzPTWRkoN3fdoEgMdXNWUfgNSizK2LErpQkmBQEKNXNCX3MvW6QRpt4YDLeftz8rCGtH1odgjjNFAGTe1uw2Cn",
  "key13": "4ChtyQNDMvPXbsSTvc8xR137MeCh8Kb8qcJxb7DGxAra6Pax9ArcjtMUEMv4MwNmgs4u2JW2542i2nvgTef6Xxme",
  "key14": "5fDaCbK97pSEXgbDHEmgokh2nK4Vg6Tc1iS5XVLJbvodv5SHc93JXEf4k5UEwpRmiyCn2RbPG2bCjWPiqqS5uHQj",
  "key15": "62pK8LAfD2keMYGUQnQ3Tg8PqCyckZ2BoYxfyFC6b4SjW1tfzhVwRSM4z5hVkfW1JnAzTqnUiQMk4UnBaxkbYRhU",
  "key16": "5HYqhnj7MtWQGuNNbhYr5ACwpTAuGLi1KCLYV6Kaej2XjWQE5mKyx3FPtskxQfHGA7ZkqEQtbLcVscD62ijdQfdE",
  "key17": "2qawM7MddoviKxUvPpcp9TL9hLd8P1h1jSvqVFyGr1vwriEXyEFVNrQu59XZz5jdhv7TbkHiDs2zk7RAfk5JWP63",
  "key18": "2A1PvodNsQ5qesNhy8AV6uNe7rNXtAnRaeCuqY5pYak7MDY759hL5W7pgU2zYuZPZDpXXpwXQqkSjQodWQxcfhTu",
  "key19": "3CdAEiySvbMZXnMs1TQDfeNmMTs1LVCD2kPP9yPgc3W5iTXQnLofa5MHd5qFuz6owtAKhM7bw6a9DpV7vt2RHRSy",
  "key20": "3yz4kA7qdbQWwaDxx5rzGis5eoxpmsAk7yWh94dMqavZ9maYGVCSjx3Jg1Z4WPSyqDT34jCjTAwW8FaXPWvGqdJ2",
  "key21": "26aYfXh6Rghr6XQuYabZdsTRkqp4mxVuZpHkFfChBiTz63AfgqSwrwfQbQXjRDJZL1Q5j4oc3PF99TMEKVg98c1d",
  "key22": "5tbzqpg3kMgMHUXmuAnAd5AxYEpHaJixasBBHTycf3EPXN6pTaJMnSgcR6uJB5cmW9oTYmNoqTDMFkYNzE5TuUcC",
  "key23": "4Now4VSfBtzCQByn53mNJMipmQSSLxQGDJzuxchMEmbZrtt5j9vNQwukVKBW1exnPeHB18DLxYm2gVSP3WMGBs5Q",
  "key24": "21ps2C8GfELWpdwjaz4svR6ZQmVVcaLuWprckRbcNLGYQ8Kk5WoWajBj6Eg3oNeDqBDjpfhHvfZi6swLU38YtYny",
  "key25": "7XRmXLXcLdBM3bME9H5EkDWkkWq3ieA3LJU5CH3YJESStw5L3Spf9cUrepxK9D6Tkh6vNVvpea1UCJqd6NaJsdR",
  "key26": "4VrDDdc9cXbRJNSMcqd4rzy9qYDeN9pUbYT3Y51sRWZdoJnFj14uVvfEu253G1guWw4Aup6uAmXoZPLKEbRFnzoV",
  "key27": "9hAh75ScmhARTvU2CfnjpN52AUF11SuuaobCicABj22YuzypnAircAdieACvvfhKfenZB6oadi89ypTmMwahwR6",
  "key28": "4Ay5gp9BPd4nTh4BstCbH7PbfedMXP7p7kgvHyhtrFH9y1CN7oxnEiwN8w2LsXZtWqYwkKP5GKLixeJ4nTSXBw6s",
  "key29": "53R87EvJCXFWAe8QTkVB7xpPFedxTW2Li654FUbgMSTKSgcH5eNxy2CUD8CjGtmBLYhHj8dzazrrNqYRdJjvWzdV",
  "key30": "4izCRQqedR11Ai4gUP2jSbLAyLArcfzJNsfqoMRSuXvUD65K6TREPEoGoTrbED2vHwQquj1pRtiWFf9CD9FvGUbh",
  "key31": "2vmeBsTgAVAGbj4dUVtiSofXZ9tKtTS5oZQtKRxhg93cZ3ym4eatpGmvKRJ3ThtAxpLzPuAZ9izQpas4KiZu1DbL",
  "key32": "c7jXNEGPgoyowZEeG6XnbcXfUBF3bfKA7xN49wxPH7UWBKLUzZDTQM8kJ88aJDNuVu39Edj775F8uU4fdawcAg7",
  "key33": "3NZ41FfJgSH7XwL37QvNFyBkiJjnH86GqUwQS5gtRYtPaXjxWyePad69wpyxN2bT8EfFrvDXAvKgKYxMc1x187L2",
  "key34": "4unZhGzHNmW46oFtKJk5eJQUQqJNkqjFaZN9dvKKZcfbufTiLtB3uykifqBZLLK6QYZG9CRQh7cJdcoiqQuJELfz",
  "key35": "oXkPjPvDVZGqnYs4azyrSDAVqt5iudSngRLN1krRXFvaVLRUV6RoBSBDQgkni7ToqRmUf8n7RtwFtxV97Ka5vne",
  "key36": "VYdHZK9U28F5xh1qhfnKtUTY17rZAYsQxwptwmSCDUNn5FC8Vri1hD3Ycf6pe3LdzhR4UeCVCS6JrLm1eN3sDp6"
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
