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
    "5L6oAAa8ebBKa8eCobHhJiLhA6dKAdNBRd5bwmWXX2hAExuJUd2SLqaCRFJK3wFNXjE3qP5x8ycrLNkXfvoPe33g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZtG4zfFs7WbRVrS4N2Hy8vuLZorCX272cUp1xVGbZuBRAQ92rcYiH1hyhHPsfUHjMcX7aPPebitXSec5VA71o5m",
  "key1": "4ddTg5Wa1tGfi633tsVoGhMBowAqu66oZ9u7BhL3RFkoo1PiJD2pTpPugw5W2rLNS86vbuHA6YYmi57qBgtoWQtJ",
  "key2": "3gUBaefrW5fnn8rrv31LGC38qLF8nhNKQ3S36MLKnXgBRQCUAdUJVNs5o3HwLjR1Foc1oUwJZUn4ZmQryJCEYwFT",
  "key3": "2QQuzg9W41p6uNTV1aKp8usbyrgL9HnVz4LdNhHMmK2YYgY3empCYw2yVb5EKHPKRUnK3nH8yh9rfpck5nH5TAC",
  "key4": "2zidQfSsTD6BsrSGpnhh6iW6QEWXDbsMyqUr8S8nK2BzrmzrJvsBmC3DG6bdAZNDjFDPLxPDkU8QH5X1o3A1rupX",
  "key5": "2atjgLVov3oz7xgtJNcs5WaCAVK4sx4L4ExBkiGaNRwRyioJw3BfrGDSTujyT8QUnGiJ7p3D7gQkb9ZDdAnKTKXM",
  "key6": "2SNdnHxZoF1mXQZnvtY1pf9SFHvwBSi1oscDSbwhvRG5u8sUCzZwpTkxkAf3vVPyLrQgitwDz65RRei2bd1VENRz",
  "key7": "3ZrjNe8ZGFuPfEfmc973fgxoiCE7s9ygrsKu34SuEGPBQRgw59fbKUk9RWyv26MVwWFtBfxdmU6TYdwrLrTqJLxu",
  "key8": "3j1aQCc3NDG9pLkRapgSrw6PqwSeP5ZUU4t3825NcSPYgD1m63q5TZgw31668szHC152UZasNz7eeCZCZebFdvWD",
  "key9": "2yqXnoFjpPrWhLkffFL7DKztb46Y1BxsGacWw3bLCvzWsJfpAiPKYnPemUXVfQUwrUHz3xtk5GSo43fhMz3bHW6x",
  "key10": "5aoyBqX981PLNt1WjaQvmvJCFpJTVqswFPoyJrDpZeHiUa2JLz7MhkrVwofJuPA9DszTp6dyVSLiPEhie5spKFTV",
  "key11": "51YnXtjCMsriPonkMJTAU8XkzrDsJtXYmZCSvSzP34K9H8sBvDBFDPV32fABiL8xwvrzVJwoX7mGHip5iPCJgvuX",
  "key12": "59oRZvRkoGN2ou66LqhJTbqggYvjudTPvpumjLr64qbowTRqK9yxVUHj3JdzPN7BB7CErX1e6k4dnww1vxQ6j1PD",
  "key13": "5Mb2dB3GrkJJt9mqeP59RGAQxahvpiwXBaQaejPjK7q93bGPo7QYdsQJacYL9yo8bnNebeyHWqSCxyhqQ1SC7pE7",
  "key14": "2PffHTTwHqzmfk7KDt8SC61EJhp3eDyBFjrgcfYDMdx2t6VzYxzm5ePh6jiAfwb7vzKzkJDkEPAxSoKBxzMPjNY8",
  "key15": "63zSVkdRLkz13VeEYMjmiqAx3mrmXxsuK6zjcQXnTPwEsDgNydk2jvBLsEycn6ATN1fExt3arjRX1boSTp5Btddb",
  "key16": "2EfAZDANjSyxjzAEhmTGHNKtjVzYkvtAUPHeW3mADEj54MhTG2vA82cZXaq92e1KFj2XR4MiEeXqFydPukMB5JVc",
  "key17": "32vv1xR32a2LmbVyPgagDdonJ5oS2bJGNFKStedpJDdLLMxk5187iNRhHVhmyuwqUEZeRZHGhYjQgWXdnMhQhkTb",
  "key18": "Yem7SQTuNRWSmhUZGkWzZWRwEjJGtcSiHY1JxeUm4fbAyLe3L558StEeSzqEm8Juo8N7maEKXAm8cdxBCYf2MTu",
  "key19": "3aFS6XuZAMToZdYfypCApfmpcvqcvpqXAyVyNNuQKa2H6Vor5nR38peZ3jdJL7oZvhSYyys6MzBVqkEfLrWLr673",
  "key20": "4dQ3XvNccE85qJtW3vEiHcWYgsL9NwoTU9Gu1BwEynnjYjYhW9RQCkcaZTvw4TgWhhJz4uK1hio7zGMHkncuseYR",
  "key21": "5V4zZQrweFAubbQoDE3XKsKty5qdrac4kWLZXQQqVktWsfkf3oA22qqxM7UA7kd6L486TDUGFr9X1cBHmDMZAmZE",
  "key22": "43Z2bqTSBkxA4T5iZWDrUhbMtgDtpAQYgdesnMpHXr8V8wdSLVmL3g1vpLkWhCPERGJ3g7DnNWReUY6YBUf2fbKR",
  "key23": "3jf6g3nmUxJuXiYbcKFuAgZDUPJ7gDupuCjZzWLuKKvW3rKTetWT4KBQ5JEM11L5hnnAgLAraMbiTQYzXRvEAF5n",
  "key24": "5BrCmv52vSD5L4supbuskTn9KCSmx3eM4pgsRSgysAg8Sqjq5KENnWsjGGfpwBDoJ3Fc6Ss7onhLaX2grqugYVbG",
  "key25": "4FLP5FuQBC417gfFX7HQUb3Mk5fvLXkGC2NL1hAX6ekLAhdH2e2FAcozQ62DBXhoKDNuQqWxBbZKNNsFtRRi9Xn",
  "key26": "5M2kfueozkWMJsuHKPdMVvkFcQPP6YfMTgUxeZpvMCg4iFKxyeB8wHhr2VWWrBb84SCCyDqYt9EioVhU2oxVnbzh",
  "key27": "BTsjS1sDGwAZiMp5FP7fZ1FDxdK1FW2oK5uhSqsuvxarGrsR3RqrePoCWNSMbYQd3S4f6HwQpqmfCxepRsKZs1J",
  "key28": "4g5kWJ7M5n73Zwoz1uHMNGb96kUnsQm1mXT1qgHdVzvAyRXMtHXgS8fQkmCQ4YAYGJCMvjQiSWYy4EhETq9QkdTD",
  "key29": "412Jfwac6gi4ujf3yRkdzRP9t2aveww4WWErw4whNs2sJNZ2rLddN1aRkczVh4TDtxvk3v4DDvNsqigVRWGN3EbQ",
  "key30": "37rHhYpuD2rmCrRRmhF31vu2kuGjGYywtoFLsFZ9myd77sRvpjb73yqWkS1ev8hoqUqSzCnYP7TAC4Dgb6t1uoR",
  "key31": "3n7xp3SB2bJwLMbDBGg1xvwm8EwHZfRN7kAsobw5jjbBaWq6bro82yCoyXpHu8Qep3KSdBkBjiSSj4y1zQiLJ7sy",
  "key32": "5wmZQKFNL6xAsDALdfMYtbqdUDKvi4vHppcoYYhamccSUVX8dC17cr1zYxu9Agm5ZE5WvfUJQumsCm3vTUi1ciJA",
  "key33": "5MkuW2YApHR7t7LHufVmda9WqURMD7TR34t2SEvy46p4piz2Ygqp9eU1caJEf2sQo89JFjUmabrS1YQxVWMBFQLH",
  "key34": "3D3yuVKDLEQh3eXPCRNJ4MZ1Xx7pPMPqA4FcEwfo57i91QwYkTm97X9Bvqi8wiawm3rNMLqZZxP31Z2btk3RTr5Y",
  "key35": "5awRLyyKP1ECSZoBVY8jgpmjva1D7v4bXAht2PwtPxsnuhZLsR5hAhNTfyTHQXST7wRfHngJpNwzYF64VtNGBFKy",
  "key36": "mN6iTPRP35oH1dtX6ATuJdPTUH5xHJK5QhcfvchDQWkxSsQbZSaeuYJBvURpWeGXgzxQPwyHZFUc6PyzNC2oBaF",
  "key37": "42TTvPx4UNoPPCS2jzx53pvMzKpKqrQjX74aSJzmUD6GvxdzaK45KS9ZmkRpU11kP6a4MoZkJaJ2Ub6avkVDbyDW",
  "key38": "jWnUSw9AFHiit41oE4HYxPWtJ5NZ2KEssvP7Bjkiu4fTnZQHZcvHp5sF1NBSuAG2Zji7VuLM2a3V67GwAUfLuY1",
  "key39": "Yfn25g1dedAXiHJWRK7HRpq8cuo7GUcwxjxw2CXMxai3zt5GSLieDnR9uxn9yUEcXkdWzBoJ9NYgzkd67L3Zca3",
  "key40": "3SYd3W6cenL5EPPqnveriwAicbnxxJ7trnLuXpmfvSGrzLCySWGMZ6zW9tAuZcvJqh9exq4GM5XKk4MittiPvRH6",
  "key41": "2PPZaJTnF5g9wnVf79jwgAgCp2z5KstvNVcVbv5gYA8rv1XLJNqu2GWaVAYDzHxYq3z4cNy9zMSagtxPzYbt9mHg",
  "key42": "X7w5cvC6KuRVKUrhL6g3DdhCpZsXKeahWb8ztJUKkHCiX79a4PQwzJVPvxFsyJQawjUCqthFKEyx2wzfy8oQMyZ",
  "key43": "5vqzvidPPauntzL5buLG5DEXQvuayrfETr899R3J5u9HBaUvynA4oxGQLpjRZnJAbnrhvmoyk6k7KQvK3R9Stut4"
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
