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
    "k5a7fCLRKgB4Ry6eEMY5CTFCJirirT6YwB4mjorN6wDmXqPfVtGqKczxGKSguhQRZbL2UdD7yH5WJPHpfznJj2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9JvF2UBp3ihsoyKsFd6qt3jywYP3DV6vAh9aBgjaA2KXwJeWe4uUBtSseACw13f7dMEV67qD4aHxWWfZXDBTzK",
  "key1": "5VCvm3ytU2YC5z3WXXhFBVXjwQYUKuBdEusMFqGj5jsAoqYzf3pZNf9CvgwvpXy25YThVLMAZpLEHqwp9WEaj9zr",
  "key2": "2Bbt2coC2P8ZqhAN5yuipqzj1np5udSXAaZicozDo1NfEuVvjK4yXhc1NtEEMNggbcBPtsKTDMP7kCQbNapCxoRY",
  "key3": "2DdhZL2yXLpNBQPa9iLF7ej4KGquEaPHRoBRXE1qc7EcghrCwzuvUsfDVn8s9Bg6yAirSWWYbbw5X52DrwAGNqNx",
  "key4": "d35WjhG4GrPuYVdbvKL49r6r3dQBPUS1MxEyCHKwyrckcgiu9gKMmB9LpXSDEdkjfy46nVhH7cuVcrUmcwKa2pU",
  "key5": "3rrw7UytXoiF6ksFek5ANsnxFWKKxpngQDBEgBqUftFCztqvRwcoA1GKLUL2qm5zuSeVrYW3FKTJFyVAccLHsxWn",
  "key6": "2uTCzy36JfBBXbGmaA13AFAZnQuyH1uRKwr9gJhNbHMgoiWc2nK71kh4EbRRj9e2uRS1E65jpgWJ7MUker4Bd6tZ",
  "key7": "5xcNyM77CWDSvgJ4h5TZK7xX4VW2Y859N6ZqTBym6g6SAStjvrbFe7AJWBLfnREpPDNYW169QXP1kPwzk8krmPMB",
  "key8": "4XWG3L3afCgpaFrz6AjKYMLWDZgPDhNHfLqGs9XopJyMQagbPeb4Mz472Tu5XXwk5yvzYWGDJ4rp1Bkii1deHDUY",
  "key9": "zsnYKBB1e8PS1WeC8Zu1p4PWZCw4UQ2FNsNWTMuc8vtbWq3mR8Ymjg6snkbVFAs9tAYyyppPvEJvVmyzKJACSBe",
  "key10": "3JSoHGLVrA8Rm5Dz4qVsz7YiNx4GTTFK7HTfbs8KYEigameVDZYHPpkqpQ1HHAfjVVSJjV8uxUmJuYkHmBeBYJ7E",
  "key11": "2sF4WQDnSBQ88A3wnd43yLeiYwS6sMtyhhmVBb3DcUAZAqGsHgWGoYG9igpYHtLZGB3g3QWVgPBRS9Rh1zZYEFZ4",
  "key12": "5kwS69F3dCdMfkMZXd9Mq3yAbWetHNuX4JHZxa6FVeXz6ABK1yf9khf6icoQEg3UVieePPkBQhaS6ySwWW44ZrAU",
  "key13": "3QZtMEsujcMw867EZo4DRbS2Q1mCfdFobxbuNTmXMpmdDbmuAMYhXm9FoK4cWrk8B5zTj5YqZvHWP5xEMxQyq8NH",
  "key14": "3j8ksqkPD7FMarq5BJTw5HpUq1pNSpisufL9YMd4Hax3VKDV5Xorv2yiown2NFukA6e5g5snG33FogN6kUupPx5Y",
  "key15": "3d9h3sjZbgF9sz4h5zHoLneVpDVx49C9PKKqb8X5gxzGtD36uAVJ4YxU15V1o8CSRCp2rthvzh6UsdgXNG18ygRJ",
  "key16": "5SdhyjHZpwTTnZfaxW2AadcsbFN7CnUXf3JWRNsrfGxpUb7mvYAqj9gBzd3THNsBqq3YA5n5BCAyoVqm28STX1cF",
  "key17": "iZ4gEq8MgpGLcjxdARggbHp5VjyhVbw6jSSF8AwjFYJtMYdGGLDiJt8m6G8J6dSDZWtmXiX8bzp2acRvcWAMaim",
  "key18": "4AYxdrV9qXAx9TM3Ac2fwR1Dq6yt74ZFd2c8rb7vXZUYvnKMxi3iETQ3Ayn7FXatUoGWzzakQDNEMCDZRx23J7Sx",
  "key19": "xZnYc5znsnK7RKPKs9KbVg7NdPWuCKrCaAGEzR3orJ64GQUmZLX2GctVdroCHTF8shZK8LzrSEuBXtBq6b5P5Pw",
  "key20": "2N9w9VgnNMsGx8wd7AZzytU5pwpUzBdK4v5qDUXqKPPFmqn4yQScB6ogU7fiX1ujUuC3qpgtAidhNR4jvUEAhZx1",
  "key21": "xGXuXyuKciVPSBC7xTM9oHbKUSLEJAAdWavWLgb2kmPqLGQytHVmnWRj7utDLRGgsgbBxPTu6SC8Yz9tFn8cCCt",
  "key22": "9vtZJXwNZDz6v1e8Y2zYxFiX2NGhN6QvzFfwhNd4RhTtRLSUfPXQaXdsNrckqdsjqZpWii27xBj2s6ELE1wjp2o",
  "key23": "5igBn46DGQUq8Q6GqxJYCL9W8HVy9CvZg9FL4bWPEe1jy7kVvP3uGQbMQjor3j7VDqfDa6wLKqoG96U86ZC9MEuN",
  "key24": "3wy5jF1sA9TRhKYBNjmoJtteG2wgHvL2mkvcPAbP6unJXx5aNC28X633f4xtMewki7x2Jiy7wG6SWwSY5VbXyKP3",
  "key25": "5w958wPBQov7Zigsd57gWUqQBTEVUYfCZNRMWZbTws919KLYowVth4drgtYTh2RLu3i6iTGj2a1q7k6itQhhxwJs",
  "key26": "517vfd4bbWVNFJLWWwtvCzqpcHieczJwVZqMxR53smJTvA1EUMDKPu6RCoxnqzaomD5Echs3upudLuFmQtwziBa3",
  "key27": "32GyCGA9yqyb3nufh2boRv6Q2x1xYU4jyiG5hvJXayARrGQvvvNbf3KsXxwdRXuoZ6uKs32L4rLz8W4mP8VVKvaf",
  "key28": "37rFSkX6KbR5qz9vjf5UPkyzt9CoyNJTS4bkYjvFoajmZu7Ex3XY8Vt1vukun9bTM5sLdsq1ek2fSNi72iJ5rQD6",
  "key29": "3D6S5ANTpp3scaSp94e41ry9dZAwi5AzshnRFgN1vD1pMBd852puDbCEqbWV5VNW79MMixZq7NE3AATpb2uh3TUX",
  "key30": "5WcNspA9Y5hzue7DHqV8MsgPyq4Q31XG8tUBp81vEEErbJkvDotJfb8nntRLJwkxa9E3HXnY39pgX4Ubb6y93zKp",
  "key31": "4zAuveAtMHMf8WwbBzkUie1aHWMdKLAavfC4jTgQE1p5MgKxWQT4o4bTXW3QEw4pZwcQ3zbz1DnyUkSXQdUVkc4S",
  "key32": "4jsvGZwiv3cWSoDBtpdjvgCEmxfvjx4vGvgXZjYLHDYKWGtDH9UQhuqiWAKMZshsPcZhFCrsgVtMBbksA4yLvr73",
  "key33": "2RRfrQNBAMsKaw5KqoMPoJagNma9zffS8VHEaCDcM2VrkepHLcVfXtP2mrmjZjAwALTLEsYMhVq8EgxHW33PSzHG",
  "key34": "2k7LLofbHLGwWAVE3Mft3ECEfiFUtjd8KQfyxg7Rov8KXRT7yz5tXUwQ48wLLJ6sHgS8cb73nocjFrWFFhz7Jq3R",
  "key35": "mg9rbDZU2JR7U5kM17E6UJrv8XWNSCPiBZfHBq72c34UZ8WJq28bvxFdayDAvysZRpriDDSNWMk2JGhrmpmx2n2",
  "key36": "5JVFtne55p2dNG3uYmFqJHJq8cyYNqUybocvkQC2wsXU61YRerXMhe5gdoacjMyoczSisauAGKgwn75QCkh91TMd"
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
