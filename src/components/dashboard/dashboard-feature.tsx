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
    "4dzKEh2vcHmiKVvbbxTH4RFdKHdmo9uuWJJqyibnB7ZdqNpYJqVps6qM8eQGx5wsooU6yc8gnkbE424FKPXRKD4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ojCxLafHaofMYe3V31Mpxe8cnGZkPYXswKRfU1Xe6PUc52bL96oPP4Ca1shYY6ivAQ3tKpo29vZcMMTWadaYby",
  "key1": "2Vth7PSpDAMDhyuvP5YBfntDMyHiGEQXoFCHDexXv6NHvQgiMjWhtMEZnYc2q3shKeYMorN4EYQbdSBYqsyRgEhm",
  "key2": "5mFW4XbqGwk9NqJnRHiiyAKt1rGsy5GNG6pkrY7eaMfDGRmB2v86ggk9xVUrYrvZWSMb1EXtQCp3NEUyZs3jHphB",
  "key3": "4N2TQpvaBbNeouhTb3g5VaRpXaazXa5rP7o5dNZA4jSQEHFAz5AM7CEGx1rxUfq6m4f8NNAAhkDtd3UTHEcNXnAV",
  "key4": "4KBJfjn92ULjXWfySsXw54F1mpxKNhJkYqU1VFc62ryyfBPkQwGAhP1ptEnnvEbnD4dk7X3fotD1VddaooVpoJGc",
  "key5": "5HCwk4bkkLBdFGGU8PzRNCuxXAuV725kJyyikXp9AbBqYTRsTHtZLdv5JxVcEzWYr9XzmiY5RqmFfUvDmidS9Juk",
  "key6": "hAuwU2r28cqabhEwAND8189TwT32HTwpSnpHXZRCrKK4HPjqWp28yrGMuxErbgT1VSPT6ypZRdPxjwn4CaMf8vD",
  "key7": "2cZt4mc27XyyubtTnQ6zLdVSpAF2AMGWByL6Ddh36F36LPKtQ29cgxz8yrodYqcj5M1qNsW1YZKMbRMYX2Fj5BcY",
  "key8": "QMMcqycDKUpyKBV9z7NfFibFPKZxGMiMx6fGrqR1BKS76Z3xACHZRZQKNB7qk4Dz88yyPbD6tPcTWR9w7zyDVKn",
  "key9": "3NPtCay7hrbYBrg3tfm6PLJE8Hxm2t77tbYYchdDsEzbLmgHvNTw96cz4GLoL6Zh8k5aKCzZGV8H65ZQjNU1EYmx",
  "key10": "3taY5FaUyHdk6Ev7bCFdfxfuzeWjzBhGhUwedYFJ3QUwwtLTvX1JJ2UFM3vk6JXqNBp34H1X262f7xEx2VdzwT7n",
  "key11": "5Ye2TWuYFL7TyNxAuYxFTz8pDdy6DsQQuhv8jVBpEFePjA8QFXYPBnjuVEXjSaJnseTNt4QtMZPeRSXp5UkaGZGH",
  "key12": "4LGPxwDxucm42tea3PP4zhXKTsGCLUwrqrMUpca4vZrMrSgZ1eL9a3o2rEyno3at5PLB2boRaM81DfRnbzPp3zJX",
  "key13": "4RNwP94oab5nbRcZZRTWqn3fTnxVUex8JjcMFgo7kTEcQeBQFHcpNS4XR6oZeecs9Qqb1P2HwSBDxJAcUGs3tKKQ",
  "key14": "4yqHrxJAvhwFppGxHVzEzb9hGRWtpDxSMsMRq72JaMAuiKjsxmeUJW8b2TVMx4bKMmW7MXPfTks7dQ6KAJrFYHh6",
  "key15": "5nTvqj8aAgceazGSaEeqvwJov4Yxqjcr575PAxqKNUafGnZ3SnEgzc8dz5w68ocnvZpVsgP7nBzEp1hVZbxG6an3",
  "key16": "55t8JTXKTLZVBvcRSkeaVxh9YjttUbdf2TzL2t9kdYu2o4x26FpW2YowKuoWdC682PRPYcyeW8vL8cqPqfzggU24",
  "key17": "5CBjuBvMBWJinDej7pT3zzyEdJWGpn4TX9men5oQnzodq6Yuybzwekgwt14jCau6qZqybGcXDVqUrP1WKnuWhQRr",
  "key18": "3vJCFLYffnKi9qSPbRZ1dov1LHkDexsYWjeCuQ8YEBSxWgkBRmmaeMUo6byzKcwwBDC7FY5hBK71AqXZQqPsZUae",
  "key19": "2c7Pba1UPQoc8GFMFVPAQfMEGpXbCZBjsiQgWhfa98QchfSdePG2M7x89n866ebp9bpchwg7jX9GtUPJ9y92N9t2",
  "key20": "5GuJdmGrM9yfD96KPpUD9cC4XMJgqiU8tzQaqUeHqeT8DZbrBJuWDGxvS76QeFp2rqki9wuC8HSa69nuVxbxqYsq",
  "key21": "3fpoYoeBNjJt4kaCsogWyZUUkcurQxYY6NWcxyEzW2uG2oAXKzWTkCWkEtKHJ8RFNLKfemaYRm5neVbzX4c9jvcs",
  "key22": "3bvXFvcNAsNAka35ZXBbEwSEhbv7BBguEftmX9qfwW8dbNnYH4hnRRWELKwYa6t3arWWFyw3t1tNpBdyq3k4va3i",
  "key23": "3d7W5NSiSa1wXaYadZfU8gGNvmyxg8T5Gb2vTjQtuiE7k4vNaoGe51jecQsBMp4YbbYFLmcqCHh87X64gbdd5M4C",
  "key24": "5UA4DmPvop7imewbS3f7G76no4o3zrMiYixstQSHojcDWAVSBzNAKn9NUkXzGtAnVNyZVKZRBauDjfpJQLnXuYLP",
  "key25": "2ab9TEaUzuQMnhD1os2vykQRG54BCLu95sEcKnUtBepzCFobHmS791k746TUG9g5vgXvfCUv63Vj6UqmimKSz2HM",
  "key26": "2Zhwq2Js8L1svYLMfKXfA5WHVkKo7k97fWEwUNFizZ5Zn8Z4H7xZF6CjkRcG3EFWM1rcxPjYYRr2x99pTYsDdV82",
  "key27": "agEbmZUjNC1umDBGUKNA78PzDMcBP33cGf3ZtRuoP45YQzwt435ppAh7Wj5qXkHMSWezCUNF97Nazxx4UQy9X1J",
  "key28": "2vgrZCwRc6ecfc2ZKx5QV5dmoCm647veZ3mZeR3aCWnZHMSK4cvREJ7e2SC8dFZ6voai8GVcFfMAPX9S2c8dffVg",
  "key29": "4PsTE3FxV5TRN5SfNj8pvLZeSBsPgqGsJjJzewAAXZcy9E9MrboqcXiRjq6fhgtNZnjZHgHeksQa6itbCj8PGTDK",
  "key30": "378vfVnkyg7ARJXiJUxTaWmbeL3RpBuhx8CH2Bi42p1HmF3sUDuMXiFHCEGnxrkUdCSyUvRZ6Zzpc3rB5bDttmJT",
  "key31": "2Dj1uo6gVvJF7N5ry2YqSXZHxPpujh76kdc5v4GKwyox6iYUUYU9WZUmHe9mPL7WC5gai1J5tc8dCLDgkzL6avF9"
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
