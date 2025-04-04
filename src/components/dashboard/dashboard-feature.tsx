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
    "bHLdkQVEWnzZEKbNkqPtzrdWrfkobUykaUnyC835XrnyioyHY59Nm295wUPTHg84r8PNBqSoi7E8e5oEe7hsXWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4suMUhjJB5C81HkUwUoex6E9WimX6enoJxfvX43P1VigBzTRbLMn1B9ZcetnGv2vw6w3f7aMM4dkVbQjHprrFhbi",
  "key1": "3Mc2tVcCoLvKtpLR3v3nt8TPXEyMSPM6gtBebLanaQaVSGHPewocXKRsKd5ECr7fJ8GotzW2MpxSPwFKMp8wDsyC",
  "key2": "5YsJ599Bfb6qpSirFVvgzhGQvRDaFK9Ayu4x6V56tn7kx3qXwRTBmtAnRQ4UcGWJ2gH8WG96ywjiAvKjZxZBsRKc",
  "key3": "4FVCNcH7L9g9rKpoifHnT9NGzxdT6YyY5nU8Xcvi6WTFEqYCDbYuRum65J7wHWRkJ1eSJsXXiA7spNP3iNRJPoNU",
  "key4": "2VNfEz621QMe8KLfiCik5xscn6tqhH3a5fg6TcnuM891rLsHE48WdyJQKmT7G2Sc6jCo9yvHyZrGu8ES6PrKyV9S",
  "key5": "33WeWGsc74NcWX1BsMzuSJxkvQdeTpk1VRLjUdJDDSw46ZCozL89PPVvsAG5pCNEuAMFGhHjnhFrTx55cQ4gUx2U",
  "key6": "shNodFovuBby6JXytg9kMJ5MdpwdPZxtiR9J6dBKXUg6uvWgsUcVNyKZ8eRgVU2aBMDyGihh1PdyLVZq15RoyHN",
  "key7": "255b8L978KnsERyPAN9qwwEDRXSy2T7mFUqXV9gYyEFFQ2kAv4Xd88Txd4GK4sEi19wYv1EWTo6qRGz9QW6aLxoJ",
  "key8": "8k1ezwWG9ZwFSQAVjkqgg3TN4r54jaFYKfFkWp36JeuLTgVAQzT4LHF27q65nxDpp9kCAAJz9ub35c3FysPdJRR",
  "key9": "4JrVuHkbkHhYNMEmXdijRcNqDyf1Z24Z5C2P3qznqtmRwakaa4RyNZAjc7UqWyuLJvo6xgTRPJoA4oC74gV5eXEd",
  "key10": "4ApBUi3ajSK3eeXypyPELaq88DxV56psE43fnWHUfvGcrSmWjxSEx63edvhNJuisczoad76pygFEhP91kDA8rxuV",
  "key11": "4aWHbq4cJc8wEj3CqhahHYPgyPZ6VRmDSCH5oZ7NwucDwyBqPL5Q1eQej8JYiG7yHbMLDt1yc3yRcLpDvJaeYrtv",
  "key12": "uNSV6MY39zcA6dP3XcCLiaCfCGMgiLiMz5um2aDZfC2ePReZwXf27qjsezvyBknjyZfeD9eASLfbRZxPPwQsv4c",
  "key13": "4q4Wetnp7z4cV16wr8hFzSJ1zmCVY3kr113ujrqkrBimhct7VJa7jA8eKAb7tAQWDbBQYuANntu4kGDjuRwuFoyq",
  "key14": "39McGMHdc6oTFaSG4asmzZLQZAundmBa7obTkP35jUuz4efMYm6Vk5u8ntCowzFyTtrixyrKBPMKgF8GaYU84LF2",
  "key15": "seP2QYWrpyeusLipdopD6B5kWwvo7bnZMxk2LbF54kAWdsbDzuqV55SSAab57QvDJ9n3DN7DXgwef25gyMk2vvM",
  "key16": "3yX5UpbzLxZ2Yuk7S9sVrU3thnnXaGycGxvGkXKcdT7ARPTi9rf7mSWAa4Nyp4s1iBLRjiHRhRL8j6MBJJ5e74r3",
  "key17": "5S8FS3dz7c3rzzifNTzuCNGM8WMz5rvzDnS4v3pUhVEZWXTMifmBMVrvNjeDToPwN2YP7fJcgqHJvQrnCzqvnhyj",
  "key18": "B7qgw6JN845NR3iDqq8DLtWhF5AumCp9hsj4rjYN3KESpLETAg5Fhaf8NxkGdLk1gNV4Dvcjm8aqz1rUdNog7m3",
  "key19": "4a3zxGcVdNypDT2qNt3aL1dsVAGSXV7Wfu8wYb6aGbGrRSGcKMe4dSjMHR4b2QdrBZXrt3vfNkY58NKP9Y98JDoA",
  "key20": "2WGVBW7BAMZ878eBX4r7VgmuZj5fot6Z556mNoDHZaLgAsr8WQHt7eH4UAqTNexqS2c3gAoQzfDCZR1YCnAnA3pd",
  "key21": "5jdYH8WxQFyReDGZwTsMfH2TUZ6GWVxyjsFKyJC6RVuxFgTBbXgmiLki8nSN3kYrsKZoACyTCiZTNqhE6gLz3GU8",
  "key22": "3xdwLfdhooby252WXih9wZUwSWMPorN1JqFFYzdedxYniELd21GWEJ5kBEoC2nGZK5MqPeYxu1TwtdmBYufDmUQc",
  "key23": "4Wj2EZ93pg9DyRKpDbuLyYvcMbYYRykBQWXLqBEGKuroDWnyAhWAErbjkyqZhseGatvLqUYryetsvesMibjPhXzT",
  "key24": "MU5tP8Z7A4PZttMPxRRYDewXBnpbovaRv3pNmQikAPE2ky2mpn4Hmyt7dHuewBnCw8szfDDYedAL9NADzSVq3ZJ",
  "key25": "4eAZAto1FXmr86b9DQdbsBBMYvJhYeJ1G5P6fjbTjHJtA6jVVgJjFJjUJHFty6vs7EM37r7j4Kvf9iXUhWqdJhMW",
  "key26": "5VrxQnqY1HStHzoJFQsTJVq7pR86KKGQY9KhJWz1g35acBSh9BzRY6EfAoFaBnN42Z74rSL9PwFdsDEbTjoTHwqy",
  "key27": "3dgLwDowPQ1pKJRZzTd3WFUTGzWa7hGrvn4uv8Cp2Wgwn5swgGje5f6VuDGXS9oQyhFXkkezZtNLzpXktCZ2xJYF",
  "key28": "2Zqit9qnQgdHr4zn2GyPEkjNLSSRJxJFVYQuhwteFHhJNWfx4SUGggjhf5Q5j7xoNFT393H6ABRBPunArYNkYMns",
  "key29": "3coPMGP9pWMztATQPBQchoVFTWcos1uECEJohvPxvjgR52ZNaSJFhqdEfJGAm8usWYWypTckfRzWvwCMCX1X4ddW",
  "key30": "7Ry6BehFSvzjw6KMcn5872JwTeYMxWDqv9oEGP6GycgKbXajaEkfgvXtJ8tbFrZG6xNBGDfoXFsBQr7fBuaU7LG",
  "key31": "8YSHBiNqFD9zPiRbQiSX88kMJyFxJpCqnLmTBUFUPMRq3ZiMbnrNd4GZSq5kTYXiyqMzE2nY3GJs1rwAkurB7Wn",
  "key32": "38s3DD3whoBWYyLaiAA9SHaVt5ZCEUbykdeCWdkwgB4zQf2NQ14FpLufx4b9TMzLZsPioWfYVjosWVHfL5D2M3or",
  "key33": "24Cb9UAcU7ZjZ1iTeLJXB8LoRe2rFaKQdt1CwUS3dQJHFcP8uH4Ea3UzEo2Fzn1ZbNJAoRLqS2Qjp9W67nsRTQzJ"
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
