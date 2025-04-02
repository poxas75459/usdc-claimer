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
    "5nkoQHTQNgJzfVMhqn5G3dFJs7424A7XFsYgyDLyufTjwu9RsM1UqHLWrDdTWvffizm4ABZ3rtfRqkh8zasN4cdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWNYJjPwPRzYpk5wKfLeqbmXFxQ5MfkKn9nwGFfCAta2noMHNGECxiR95ya36DhT6PeRWQrBPdkR24sXtTjKYZx",
  "key1": "E7EvzJiXKqq5E9mK7BYnH4jhkFYi2AmKPy8S2i97v9TUsmaRNv8aazp34tV7E93ishUBnDHNP3TAkHCgRztJoPX",
  "key2": "5siNUXZHXaNSeHXvbDFpgvRREzJmhwTFwtCrmHVbUBYJ2oueiGkEUM1HkQDxWhMQpTeYPTAfBtuy3MbXnAHYKzD6",
  "key3": "3YKnRSTZNHKCm31sy5LcCzVLNdqFZr45RNkoqNCMtYhhZnHCQJ1ijFbRe226wNsP9R3TmktX6i1muZsWm5SaQMg5",
  "key4": "N9xc2vEzUX7VbPJzEiYVXY3e8iMujutvM689BWtaqi7D81ArcXAXxzWEdAtUUPfZU7wfcsgzaLKzr9kWRJooqhF",
  "key5": "3Wgjeradoe3c1damKCksMWPvh3fpEWwt2KUuMJ5g7g4oRc1vBoebKKuGde5NMto2nnmmVrq1JsD9VRwrBTFkca63",
  "key6": "2KRZwcq7Fb441QU9zTQpaYB1FRFKA2XEQ75ih97jgMyFWAGp5cXisN65xanHtk9D92JFFswxr99SaTzpuqfLShF",
  "key7": "4j6VN6X8L8WnNiebnkNscSfRP91oTUd3iCY6msYVBbeCdH7woa6pxFJNLRV3DPXeTFKDzH63dv4pt6cgkSfkijv8",
  "key8": "5E5aE5kregt3KkUYbWg6j8ZvEE3zunVb1p52qxN1SZwAQ2fZ3qmCJhGfokkpx4zSZhAvQ7JQK7PL1sWdZgFrJFZ2",
  "key9": "3cd8pAt23KQ4cNf4nvAwifrKeg29z5ecdGt9qUgBYDk3N31dUierv7V8HztN43JWPe1D1ZftAQprNzkZ9h1kTcF7",
  "key10": "3kfzJUEhqZsHAhgciz9Dg8S5AxxwAWzPsEUFEE6T2SFHV8pWmt8TyijUF3vr7BNbxMgxHfcmUjwtnidAVo9gQtLU",
  "key11": "66s3fPLDCFVFQWNWr16TKsRDJ7At49njS3gnu8GvXd5EBDwmLnRdMeUw4iDN3WfTMZkdHNLupfn1owkBiN5Zs7H2",
  "key12": "4ykm5ufeJp7VJgdXZbrMNsuvFp6NX5zmxg9EXUoyrcLRsXNM3VvLtdiB8v6L8K1CnqTzegnX9GzXR6WT2yUPX8tj",
  "key13": "S8HTjR5MJ5Rku1dGi4SL21Wt97z3tKWQwp6BCRgorc864sRqqEeJ5HYYmL9MWe52pfRZAk6765X2RTHtd4kBN2L",
  "key14": "4Y4efgzhhHyc2XnkNuug4U11spVaLWNP3APinMJ7ByC6Jxbhc8uKBWcvBB4UtM9VFiDtREJ52BEcuAeGSeiMdEV7",
  "key15": "3wX35KMgZzqmAiQwEXAGXP47cyhSx6cq8EPFpZdochNcsuGWPpKt1FUx3qSGTGVQHFysnd8pv5wAXgvdPGicXASr",
  "key16": "2ZAWg6TLACH1Kk2vsnDfZKxKWCuDTD1FDmtefZHZiLYAuMpo9kjrubykx9ykHq4gpw1Dhh9XZmtU7H8PpnG78Mhy",
  "key17": "2aKtgePYGyegSXXdB2diHmFPeZ8Jfu2ae7eoKhAKKduKPZKPbftDARAZtV87kc1sKpKqxv37s29Jza94C886krdH",
  "key18": "CEB2z7LPL3xj5dhg4u2omBfrRih2QnbY5DUCZ1UKQFKPWJNwSN6q3Vv9Czha7UEYPmxDM4eZPEfYr5r5bGzoWuS",
  "key19": "4Vs7QqeVuV5VmKpqwbbv5H871KTGLqUu5T2t38oThEaH8EbMho27yCWmnvid5WDdm5Lg5LeZDpAeJfvkpLQnP3jS",
  "key20": "5GgzR7CzCLaoQejfgiDEjQNa1jhJqTqfXqSyu9gqwReUk3xPz146tDXvgfyagb53oGTweSkLAs1pTDKxkNQeargM",
  "key21": "2tqoLdVrB1eNu9Tovt9UuDKdsEiNm5RyohH1o2jT9ujVNbASS74cnT6ciCwKtd6cvA8pJ5hzHi6ZA7S9fgwn8jYU",
  "key22": "3omiesMbTDU4ypEU72M7kEREoAnb9EBuPfGXyGBUAmaDwrQ3Bj2kSaUns42JafjfFwdGFzrPjG6LGHwtzFjU9Z5V",
  "key23": "5hAzAop5rUg8naLT8Q1hi3t1VLZEmLsMwJQ3GZoCk4c9e9U9am5zTERLqi55jQazix4S1V6yghikZiFUxEqDt8w4",
  "key24": "4QWx5zsq6okwP9n4dfGtAYnHFQ3PfxNuBmo7HhYVfzunoPcQtMXjf1bCiizbX5mAvUn7SARKWQN33MZoSusJtYpe",
  "key25": "2sbQ7TjBgPXdBPqT14fSLxmDWs63wgRoQPEbb8c4YzKGFw8cLNh7CjfZ2WT6STgrb2fxXRPBNMPXTHQeLuPJuZ69",
  "key26": "4QpWN7whH8FkRKJmz3TEafW4qf7oNBYoCrpZg7SPzDFBkDkkz1BNQ2UN6h9shWmiFiZQiaCQD3o2BxWorNzK8sAZ",
  "key27": "5h6qB2AxXinTCjdeW8WhyC16skGFQuF46k3qkA64pm6u3HobZWZPdt2Q5dXBUSYUTKU7o1XJzGofZA2DwhPCxaHJ",
  "key28": "5WScwy7sfrGRPa9coQ4d85kXRX7qJavZEjxmSngyuwXNJU2hQW4WaDPF1Mh3VXZPpvZfo7AScidQ5wuk1GT8LZZk",
  "key29": "YY2yCbXXTZe8YNKZ1BwnyBKLYnuo3GWpx4UE7b1Bf8mekUQCiqeCanXHAECiQeyRAhCu2AoES99WAbyPL8yY7Wr",
  "key30": "2J5tJrzpc1SZmbRjHzNYesFtYqWvX5pN1VHFohQHxPKRAFxpMPWFyEYNpnfMUFsg21HC6K8VoBUKEr1DkBG12qht"
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
