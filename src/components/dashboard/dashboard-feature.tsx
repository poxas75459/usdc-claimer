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
    "49EUNzERozJmBiRTssNPeRKodmBgni4kvomSSEWuJZGuvMg6wz2rTSvZU99sR4HR2fsK84yuKYZp2jKwsWa9Kvmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37AsFPttZaoUyY6hcEPCtpmkwnXkF65FkjWmVHkV9uJEeyPM8u8BxakKsBta9B5yCMB6cWPkyS1sxUet9QGHwzpQ",
  "key1": "qudqN3bSg9cQ4WQQ5VcAZ2hnkXge52c69rLRG7p55PjRMwPqV6z81ujyRRZEE8S8bQD6pNsB1qjwyeyiwWAaw6g",
  "key2": "36977ofxDfMigZP7UhNyqBZuRHaDUUX9jp7dpzDtRkVktjuoirXsFEzH3qkxo2o5aD8xiELaRspwQUctme69tSU6",
  "key3": "4uDKb6SZdQLF5YznKKm9Ckpa3LGbrTMkPoQxbCHXwjyivtkD7EQhwQhDzcQwGBkpgFGdEFgqs5tLxWtbtMn4WQbG",
  "key4": "BbKT6Le9MVggdWzYiJiwNELM97qrdtufVjSUr2zzPNfMemfFAjXzjTeuaPd7QtsDo9GjLwFmq7Ps9wVUScVRQnj",
  "key5": "3MDCcnJvoS6CHt3iLvt7epRN1J3YGFvj6mTbvcUK9xwzxqupvp3mhBAEAH15hp9hpfJR8GbTMUGUW8D5PKEJfkMq",
  "key6": "2tr6CZZUdpb7DnLqzghpdwnkm1GHv1DdiDPcSPehqd9bQPshaWpfvvPxcK8sjN7Aic1qtA3smWXGLc4k4gjDJyqx",
  "key7": "27NzN5AFev6vN4e9fRodQumSs1U4uKco89HvM1sSHBdGAeyPS76ttwCj5N9GkUyyzNiT5iDM9235HZYLunvYAtQz",
  "key8": "VU1HyecWBv1PYShhzWyoxELuPHd7fGLuh9MxEGThLmRaAcHKcV3PTUNSm5tqoS6BGFEPC5XNf1Cpe8ajePaRycL",
  "key9": "4tkZXpwjwUoMnySRa4h5uqb4bGxc2jtgEXLAoi5HCHSNBUab5kMG8bmmZ1imWLfJ7dLEbdiGKys9mS9wMRadCRKP",
  "key10": "36w53DxHMDGz6zYYfqQwH9t5fCPCnvHLLQbCvMWWPH7vsHYrptxpBDEeCd1ACRZdEz8RYTASSQrALHpdm9gvDNXS",
  "key11": "2x78eQMTHgoEPqHWkK8DkxUKmZjPqa48KBq5xKbwEkD6aqPGEdrjXWNjsHvZ8fPNHLRCeg6zTZoU5GPo48QeG4fC",
  "key12": "5A7Z37EQoTWiFYt7h9KANEsZmhz9WjUNegnoktJ7EDUCJpqnexD9K6MaTtUPPGfqvQUmc7aeoH2UeifQ95ojc2mW",
  "key13": "5EyxHepzTJZuWfCSQzk9cUNoSLiYpBTCVBRC4pbYSisJJvHRdY9JjVUgSFj3tcYtbPahECBDBRA69ZTY4hjAQuZm",
  "key14": "iErqkKMNjxXNsyTjQdSnLJ2nAeFUZEPdJqRmyaTHG7ByTUqZTmAHPEXeTTFgcVGqZrotLXVGWWh6aAKUYQ2H22v",
  "key15": "4Rf6dXpQShmaq367eqgTiKtsxW7cA1JMnXKV12eqxyeioqhBu3cN9mhAhFn1v6BZaH1S6EJvewJaCVH5Ec5VGqdK",
  "key16": "VAiD4AZARvfAKrS81DWGaiEXAaAuYhGWgkyBzWkdaFF3AkokpfkjcbW1QGy5mWHi3ciVvYS87pmkkQbY8udmqaN",
  "key17": "2kD6vQg1y1jPkQDyMyV7nAoE8FKSenrAacaz42BtQ9HpKwNC9fVworzPkrYojWz1tA8aaSF8pzyLt1prxrqjKDFS",
  "key18": "2J7R14wNjskny94Y9wDHeDvWnzj78asRBAgfP1qZoW6SWz8oxPqstudtA7BnSppXZ9eLzkesCVbKWEP36ZZJ6gAU",
  "key19": "1KWQYjbp7QoWY1VsTUBgfLgjiBoHZnag6PUN6RGPr4swvQNJAmBWn8tNy8aW9QyAZmZTKpJXvHkLsvazGnhHAgc",
  "key20": "2cghqhoMs4fwb4WhK3BomEPmTWM5JsFV32G8ja3HFF2LNNbYhT3tcQofM1wYSduxPLC6nredDQ9AGgbeUGtBmUdt",
  "key21": "24P6ABP8ZqikDLLfKdANYe9wpa1VaVcbfK6Q7n3tVmm21kvg1K4kHVpZiMpQEvrpm1p3rzPh8emDKdittUWRecVk",
  "key22": "4Ekc1ekW7ePjxXDJpiokVCuUQyYs6mGar1Eq33y52StwnU6BTyNFNsTNS1DUA2Azs1ERaS68knmmUjZbGw43ZVVr",
  "key23": "2BWTYt8PyBLz6ugnhtKvr3qyBV1skVwDfyA2upYZ71fjKXq1LbZ9Spe6w5GZrTGBF4kR9VgFP2TX2J44GSjAJ8pE",
  "key24": "qEyQfq6pzU5XE6v711hguWnjfA2aabKdvkKzj8uRUz2eowmcM83Ej9NtRhboT5CFyphjmgemMCE9e6ALTMuBWQ4",
  "key25": "525pGjc3VWps7gwA5229KMBn3dimKo9JuLyJ5jcGpcJZZtHrerC8QVX4jfU1WS8G2jvvm2mfMYajAZiUKBzd22Pa",
  "key26": "3c5ie8nTBuoRR1d1TMUbNMg8bYHHKwyz5CJ9raiCYF57qRU5SFpYhbPLDAr7px1bhw7zhkfbPmJk39sprXhUpop2",
  "key27": "4eKmmC6LeH89DbeskvVHfXCrwbrSwUPgenAi5HVSmp5vugoHKjA82vrF3PXdcBS7KLErNZ9MJriJopA2A3zGrEsG",
  "key28": "6CM7NfWJ4wsEubyTU7ntVRtASMJi1ofhBnBWNiTAYpDMGrK4DFUVKohPkH37PX6YQeSqX9EU8mZy4xvMWM3A4S9",
  "key29": "5iprB8pwsu5VChNMoZbcBV11ufWAH8y8NEomZ2J5HJAWSufM7mCNMkkyPv4sasRUdWb2nVwj5vn6bUXkZ3uSncKr",
  "key30": "4iNDU5gwR2EzHXjCptdzoy7hDt3qRiiKsdCmviD4D6tvoXhkR1nFVvJK1YPoGam2n2haJ4jjBr149LBtf3qUrDyX",
  "key31": "3bnY7feTpr2SPzgRoMJfjg3QEmuFGEXqsxsXKWLQaFuxoBin1TEjpLhbssVk6NthwvpSipaC8x2mA3w9kbGrhRNs",
  "key32": "5U3vn5W7dCVs2papiqS6sVGtkQZC8kiaCkx3KJZNPkgo2T8m36Gt8NSUFWz12XsWe3qHKzdW2kvoLLxHHnvDvx42"
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
