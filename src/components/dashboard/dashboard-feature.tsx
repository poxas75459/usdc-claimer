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
    "3Vk2pcat8H34w5TcWAy3qvAtkL1w4Tk71NNg7DktnfBSXpWPLS4f1AsVEo8oCpkVbUGJF4QwRLKUqkBHnk6C9hyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbLjz3zLUGkSTwk1T7P5koUKC4NbibbQMNxG1mkAx5yUvJqTP7obkha1u4DXTPWEDzvvRHULdYChJJTk3H4CgA7",
  "key1": "8sGi4EGCTU7ie1WTjCffVtMHgSvHmZ4pHJNLWHuQzNW5WVKsrRnwNoRPKvurxNAfMu94M1oKNEu84a2qdvCgmxv",
  "key2": "4hejmor4Be3R5ZXXxzc174pCwEjuANYUXts7HvbCuHashfwzURtP5gKtNGusdihP2HJnn5JnoegbdU1PD1qbmcHb",
  "key3": "3ehfvMWfqdNxuJziLsru9zjAMVFGyFPzvpWUQWpEoDbv82wyXTFj3o4FvhAUjExKxStsnmE5vcszGVNYhjv1TseS",
  "key4": "5PAJPJiPYiJayERwSR9CVpAB8ZpQzo5LWtWwGgh3BSJH5KDkac6FrzUkWCT93f3EYqbxVzoCbh9Eju3nJtuV69XJ",
  "key5": "4upQjqsgAy5Rq6xzMq1o6FJWDi9F55xjXaVNkS3FYdn1MRu9NcAmK7tvSuttyEFdcqcmE3PRBXPj6MVAsqPiY6vP",
  "key6": "5xovW68Eiw92CRc3QLXwP3mZzj3YZnQ7TRZcNFkAf2dbNcZpRHkiotvitahxbowae1Tgi3cYxDheFCggciwajeXJ",
  "key7": "2nuwXNtGqBZEvJqNUvqj55qMQSgLQZeeZDHJeVf7ehPEyorZskXiu4zSx5kbtApH7HTRh8Lu3UtaktsHapxarnVc",
  "key8": "4yrSU448pfWYPfb8iocEjuvqddpJxFCZdVncvJYfjX1UeUeB4muYMm3vtexLtM18y2qXaYQWsnZ87oiGgVkpCBYT",
  "key9": "1FU9USdtreTAUZG6bo99vKDkdrfPu2DfPUxidbbZRSzAwF3v2K764a7Kgdg5c1VJFsMpqvCEVsjsiJtR3phfkST",
  "key10": "fsWc2fFtXEDw8B9huBv5zKaxeeUQzso3c1UYAT6e9BEfi3igru9z3NmFmzDPeHamcZ4VJPWTczJxqH1uDJrrBrW",
  "key11": "dxNX2JpekJk3RMtRrXpsdXpepfDdVVP5J7VkmqEUJGbYRsauVVZeVVxksvipYk36peWWfUov9PiWehnKnBVcceK",
  "key12": "EyUU2V8d2ivvdJwTfSty4mALaYuq7HDG8wEr95pbiiwqppJoqAAoG7xS5z7k1JcTyZXpUkQ8idLZVq8dFuw99Wj",
  "key13": "5zF5MUarfq1pvLtV3hXDeiF5G1B9eDNvYyn4HGvdMPMm9e4YiSLaoHauUpf4bTJ4tNsGHNuQb2xJgAB9QqtAU6Ss",
  "key14": "5Z5YeKxXe41CAcQkoirP8Lw1mMvDNJbv78VkVwDfQba71qp2RPzCjhCLwXJnQDsyw9YXTWr671LQk4r6h5itCu1a",
  "key15": "2gJCVR7UherjjGjxtQW5WWo5bvEBRYybJJFbYMc7ZiSYHMB4JBC2hQLC6qRDHo8ZeUhe1x5nGbTXhct9krYTrVrm",
  "key16": "38MjHeWHK1meaY2Fkd2UqoC1VoKd1ktkKfHoTG1c3fEcEMWN2bDdbEiiroiKRCpLTNWFK5UEBijzEjfTpjAqhcyZ",
  "key17": "2QR1BsDVySunDKxMCmxKKb713A53afx4L7FLLsHibuHTzZww6reQxFTnkMEU4ZWH9nAynjL5ukFkF7uBsnFxZVo",
  "key18": "57eGyBhvmYpd5Rmc3uX19x784cf2FvMEsaojnvW55n2AUce4TRiUFst4VffYSj9kQnFHwxhr8CxaXmLmWHM7pts2",
  "key19": "4vvYPkv4h2jLB2fUCWgZmUfMcNWZTV9KJPGAdT3ktTMDzr3MCHc6rK7VdFsd9Xu4L41BFj8xMdNYUgc1VayPx5tm",
  "key20": "4ZKbiYGbLxrUcGSucD1JMkqHR3f2wTqTXVo18dGowcbkLgiCqvNqbLgxrV16WFtK3Z32GykvzVxWs694w1oerBjN",
  "key21": "2KpW9N8qZfG9izYseEkr1L9Hz6LFmYrjkLQcKNhc9sd7hrmNJw4Pgi7YKjB3f5hJUGYSdpYsHprR1NSQQE86JQeT",
  "key22": "PJHU2rgcuyJFmVQaydqaGR2Lo4vJBStv7UqNUWGqnkZVrwqn9VrcnLJ1Jyh5ZLJU4LzTZUSC8xsuLA93iQZTcLS",
  "key23": "2d1BgutZTchBe2XyYL4e1wNu59f962qF47F3PmNQXRFkWZGZj3mjHZqmGb4iqp9NsuBEBdC7uYt3tk5HeE1PCA5S",
  "key24": "ovLVWjHakMotMoaqinxP5NYu2E3YMW6mSkPSFMeJLDtZm4A322mVvGMAES9W3MSDn2DegJ3iUiG5ZkuMrNLCuQo",
  "key25": "4ZnVB4FtxdE8ApkPP53m9Hn9AWLN918Fy8XQzZwYZYaKYuKCrUsR4DT6Z5TqeZzZGKrnsXx2XaGYf5k9hRYjaE26",
  "key26": "5BmYLGpA15NLpZUA2s4uHaGseTNHymy7wkmxazv2wc6vKfu1JSGfGwDWi7AacfePo8gTexsF3Ch1vLgNf5ExSNYU",
  "key27": "4rEFNg1gw27QEuhndkxhwGEMdNZ2L8NNvQ5ccVyZMdFGaYgWRjqWEbvBj7SV5B9EoJUDR75Yf1qiGv6878GR97eA",
  "key28": "3v1SBWFEZ6LiMqM9afcbPuQeG9kapxBAiVej5tS5E9AVVyA9EACLxxiZnZtbSmqw8bsmtm2v8trWNPo8M1SKhzHc"
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
