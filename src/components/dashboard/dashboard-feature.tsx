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
    "2K6p3Mb9ZTWAQZaV7D6E1fxrX9DToA45URy6JbND7iXpAh3QT3sAXjgXYqMG2xPSi5dNfy7i42P9jQtiVB9RcT6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWNH7D9GcZjCnu9fhiGcXEZUr1Lx6YVoDVXeCkTcZacfTTjA3F6Z1QuyZ9KiLkuSsFqSU31iGNqYwBwak4bqU4U",
  "key1": "Zm8sBUoGCtLs1XZbnw3ieSJ1KHT2cCgYvvLSTEFUJrzKLLds6RNK155dNSNndp1C3ZfFb2deibQjBQ1iGzXCSDJ",
  "key2": "3jsZS35TmHvmEV9FiTstmVkpbZsfwdurQbv7K3Ka3F4DhW3Nk4xQR6n6mpcGLU7UpFfKZ4qhWPzT5zAUiCBGeEsQ",
  "key3": "3vAoPMWkNSJrja86qsLndMn6rtbgYQZMeYAWK1Zz49UDeojgjGa4PgqU6nUrCFvFniJ7K7UcmL11cSG98Vvu3ShA",
  "key4": "5mpeJ93pD7x6FCwnRQ46nz9nRHtXj2qd7m5u4k85hadu38EP49VWvKEGwyb4KjBdrYc5VfQXmAzM6mBgr29fem1j",
  "key5": "5QH5T9DPkqsCGVP4HWLobXY5Po18HADMq9w6ivANEuZ1kgTDkoCQpShgEJejW1QdHJJsW5J1ruA9ACcs8JU7xdiF",
  "key6": "2VTQVSHKLutMzSBEBGBEry2zVXPDQY5UzXcmUqjZr9qGBEGsWkiK1fE7eQiDxvezG52Bd37JEhnpWM346u6zPdrG",
  "key7": "tNNxrLR1wRnSMoKy23L9aSHQHsFCxm2mhvnnLreLpGhWDMNdAp8cVQSFAdcJyyeM7PApKbFL2vxLSGkbd6iPgdx",
  "key8": "grJrWkVeA5Ch49mFc9cAedYSAp7tpMhFYYoN35dyWH8VHh28kvpVheVRU66rj9E7whtLeBMcDLKf1VVR6V8k6Qu",
  "key9": "2H35HBuzF3Z2ZScBWM6cYpehB581xFNfqtdDJBLpBkyhnTzg7ALk2ph4jrga2HrnegSgdKdkuF8novagWyb8DBjn",
  "key10": "37q5KBD5W5ey4RY8PU3a8o2eYqJJ5JYdQPnFVxS3snK64hBf16RBcGwMezqp4djJgwKNdLeHQ3ZAybaH7NyTX4jL",
  "key11": "4DoVMtHm6B7BAHqhpSEve7wPzkWn38ZkUorbq7R1qxuU8XbgPtfvFWAipxHdsoBRBVJwJ37yX7kq2v5PoCyPsD4b",
  "key12": "VzJfv4ybyVg6fQpAnPzdinHb92N3BKmQzvwM62prA9D86hbE29GTySwoVkn42bhBCsqMnGM1GWcHb6n3GigoyLb",
  "key13": "2pF33uNXvLR1ubFtDGpJFxMTekYtBga1oeq5hjhhJm445sQFgm7ad3bLxvG5kjs9qwbUkM8EwkGmGtAgAfKaZi6d",
  "key14": "44WfVwWYagysFMD7me1q559p3obxrMiFCB1ukaYtjNLQDkwBnpYinyDXHk6ku9JbvQa9AgdRsxmo28ckz142B78M",
  "key15": "2ndUniqx3GwmwirruR2v71L9Ny2TZ6dJiFJGZ4XCgs8owR2EZk2sF7A2CM7UJxdwwSGpybU9vkQZacSGkcSNohAo",
  "key16": "3umu9K4i5ZrzwtNVsK38ew6AN2aCCmHBa4t7iyXiAiVR3fGkwmwJ6sbu4bvK6ikd8a3zPMi8uWZeaCac7d7BzyKY",
  "key17": "5GTvMfTscRtowj8FzXqfNTPQRWj3ywZgXPQDUdxchCKQdPxxsCYJopEZVudfLYpiPLgNneRGSLr9qGWvVemUKFa2",
  "key18": "1gNuoYJcVkhmxnnYQxKFaPfwjgNXqbNqq6oaL592kmtmvVy3PdATe9g1SzSE1cr1mnd458t7R3VGZiUiP8BPfGx",
  "key19": "Vv2W9U3jUqaA9YLCBZymUUu3hU71y2rbBQRgixZ1twHVLXAkafjaA5xRDZUfW5WWWcngDn9Q31gfvmA4dCrbC4A",
  "key20": "HihEnoAVpYVUS9azxLVjv2timcoFDz7USQUkwn51q5nMqUZyLDt3yUho5Nb7LKy9oR7inTkJrQ1cznGstS8qnVY",
  "key21": "2sSP6a6fadLWNbnDQ5dWwpXPeQ9VRfJvFcxpyMFup3uAEqazuehiYbv3wLgsRa2dz2W2d6KzkRbQCkbbBJu2YN6z",
  "key22": "2uAqKGQBrWkztMDZjTJ52TbCismMXDdY4wnJswK5Mz893WLYe8C1RdkFy8FPLSwW4QzS3fernftYwcUJwoQKi14T",
  "key23": "5udMzHS2Jd4qPPqGayGujeULGyWMgdhamrn79tcucKH4Q87cG68WPJctAw5zS4Zeb6zC7q4MNYKem7HVsaZb4vav",
  "key24": "39EJAXGuDjyKDB6btXJVygwWxbUQiGem2nJ1kxHJJPLu8qgWZjB6nqHTe1CbVqq9Lzm29MAF59f4Gamda8pHwHvS",
  "key25": "3XwnhAoBtbvPWJhrJgJb4WHZ7U25YvX1NXBne3oNEt5WGFRCBAze4K2s3pcArFRYvTaLHE3GNxgCKyjNwc6KnSfc",
  "key26": "YBoKCyoZEYmmTnkzpVttwfj5SKjHWGYXXpDN7e8rUzk5k1pRzvw5uszN6ssaKuez5XQ6W2RT4CGNV1y62jix3fF",
  "key27": "5SN58Lg2GDM8UCsvohFhMdEkyXCkkk52oUtsFaTENGgFBX7MiAiZLnweN6d9vnwmznvDsWhJFcLHdPpzzMcxBii7"
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
