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
    "3R1GSH8xcS2tXDHEMBe9j4Y4aFmtdjieH1i5TyoWnB8oGAEnLxPz9BiDBQjRUwCuJMimtNkgNiw4sEo6U6S9DNH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GrJVv8GsEhC4Pik4Vcoocx61JoUUFoGjuaNPZUPj7LTNDLgG5APbfjRDwUvN8tVWm9qzuHX1E8MkJxV9UhFWs5",
  "key1": "5qXLaG3RT2GSiVF22Papfe6AU3zjL4kJCoicpWFMKARfAHyxDYTmpHnedeHgvtgMREGKuYvu1P5xUPm8FfvVj4mr",
  "key2": "3f4BKnVTdawHoebvoqpceZVth8R9URzf8yrB3ofvTj9KtjiW26guiA4hFggGCvSgnTUQ2Bw3bzVWMNFvxotP6M5K",
  "key3": "5CizWRL6ebM9DvmGT8QaDEgoWpxQXaULPn8oVm5mu98bdcCVd3o9Z8ydhuYQ4L4RKtwHSf559UkeHgTCkdkL3s9F",
  "key4": "3RD2qYCmS4QNp4m8CfdgenEkGcSgy5T6mHquU4EajgsAfKt5wTAL4z9WWS848PuT8G7Tx49wKYw2ARMB5DcaUkJD",
  "key5": "2QCFySf7AUVKPHkFEXf2pSsYfiSCY4j6gVAgL23xztx7uwxeMKxWjA7weE619VcSoePU3w5T616YWrUoTT1ontQG",
  "key6": "4PjKBco9z4wVHwqHvdkRLxjKJeQGfGttyt7NP1jrC3KPhRrDV3rd9BZMB9XJHGyksxJD4RFYQcBMjnyLSCLiJsPy",
  "key7": "3zYYez4QQ7vkcP8thgmUJgyYKr2A1Hbe9qpgaoHNu5VGPfvayLq18h3ZiumXAcZXD2gLHQPz3EVyQscrfYN4G7Xf",
  "key8": "2koQXjZ8VqyQqNKftsxikJN1W4v36q8j5CHbyubSbqEaMfj1N2ebVW9UVuG9mXtdG6HSurVCTdUz1Z2hRywnkEVC",
  "key9": "542A3q3VX4j6xVrxrAukEJars7y9DwnAnFxb8QZ4QTVoWhSf6Kd8Xjtozy233fenACXMwjDc1k9Lqtmgg4Z19o9K",
  "key10": "2qQq34vuhBRCZNKbh5fXRqyQT72SZryX8WBha3tSqZuToghdNqvLR527LKfMbHw1w1k3AtMXSWnVEB1uYBA8PuhP",
  "key11": "4XR8qojXot8C6DsZHbAAdJJAyuHFeVKnMVrQaq225Pz8WsMfQWiAxqrG5bTGtCFHr8erz6bFDespmw6bAYv5NoRj",
  "key12": "2wNZPfVK93afHnbzWtMvsADNBVwb8Q25AssYqbpt6jEiMzKK1BsX6gjbDZYeC33g1meBtWkXDCypoRfLddYUS5QJ",
  "key13": "4sDVCpMouRzWFo9JzXrADjpqNrhJSsTjND2QMKvy9zYiBEE8cJd3zPe9EsGZPT3wFYcLU1Q51ttb96E5wyCiCuvF",
  "key14": "4KKcpfu5epPXuyc4hwGiu4F2VC4Y3oQHwmiGfhpXf8d1hca7W3dXgEdek8CGNhgU3STYq5LzeHDhegR8LHRZZ13L",
  "key15": "3u1gLZaB5vtVYNkXeGCK5Mr2E6BiYoQ6YedouXQHGSu9hsKxCot5iZvqadS9qGAKn9vV33LNPGz9EprbWomyn8UY",
  "key16": "3WxoPyXqbctymKGHyKxoudsSnoedK4SuA8Ze5KMxouNPbW95BAaKjhsBkvn35euqDpZSW9BqHqJsncggAc9kQDTR",
  "key17": "5kAn6QqpaXXZLCe8Bfux1jEuFETzUkXKwRCEDM82K3L1Fy6TeD4iPeUrWeMycJPvSA2HZ2Lb1qyGwFrNP9i56efJ",
  "key18": "2vTS52PFzdPrzBKAgv8DXciJ81BBK9YCJydMZwCBFvb5QuFJ4WvXKzfXCHxH85KR7oLFMyJ3fN7CpcDDWyAVAoCn",
  "key19": "4QzPSX9JKa8HMtnrcFWVH1V2toad4F1nqHxNF1kveLRk8E3j9GDFmbUqcawEnjcZSnK5u8TeBLC4V5BYmr1NZNcv",
  "key20": "4eEoWiziL2rA31YjUD8dK4gpiHTHuLfYjaKNuunrYqj5o5nffzq88Wgnh7y3K6PB8BSJTZrZf6r45owxcvK3YWTr",
  "key21": "2MoFghq5Ca6Kp9rq4m6iqS8soRsC9SJkoGRWW1BmbkEPgbzvpqSb9PZekrcH8XNvJvcrmGDtFy1Eu3ZDwhDc15ZC",
  "key22": "2bNepgGSyRktVAHRS6evDeaKVRY9fZ7he22irVZ7AJxgaqbgvkynVk8JwMySfHd1WY1GAwt7Bvv8TpyyvYsqFao2",
  "key23": "2KSbSWK1QGc45iwjkKwFnbkdxetWut2VK9RuDTBg1cWtWBBbF6ZEEGcmYnJ7GntJyze5qKbg5XedxhY9nW7iTx8Y",
  "key24": "2QWXDuuuMQDgSNkhKRUfVxKaw8AxbhhF3CuSd5EhNaiVAH5Eu4Mn7KBAveB7hcZ9kbwuQSNMDa5UbEFP6fjDo5BZ",
  "key25": "JfkAWwstPLCHRcEojsZmCoCBNr6jZwd3pcrGW7EdH9TTw4iYMDg4Yr9T1DbyV7BM8PBHFb2Eih7YzdHPzhFHrAo",
  "key26": "4gKd53NqihrcEV7AetcUpWu22hKst59eCrVRbzZbhD9QfYcEYGrZpSNQSV9BPsUzmRMm4KN1RYSwAzgMK4YjDpEf",
  "key27": "3DwzS7pbyGfSiaWarbrBR2z22c3bVuRK3i6UMD3QWmW7zQ6oiNLjjb1ZGAyYuQGma2M2pd2A1WJZ7fJtMmZ9EWDM",
  "key28": "3aC7MMEsDuwt8zbenQozxi5NZKBxwnWGhMAJhsbERoBSADZWhD6HGk73VQrSdpdMoAntbTXJxJFHQUYdoqqqjAi1",
  "key29": "2yusP8DkVsVjRn7Hn4RpuaLgRavGv8NvVFDbskkb9fpvvsqhgGH6gtMWVUGLEsfFNnxA5HwnMCyxgq66V9wJKWXZ"
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
