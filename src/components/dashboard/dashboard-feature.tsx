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
    "26yU3uHUmT7oNvyPb3FnB1Nv5tZVc8bCWgrdzKX9e1QfW6aV2eAK4a1p4fM869SoV95DvUVFSguxMjdBbQLvcSy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1S3DBS2uWJv8UZTE2jABojSkzX4Ror5EQLn2y7kMPMvPHELmcKfWfvxFRm6hNBePNbp9h5HuJn4fXpnKP85Y4a",
  "key1": "355c46NQo2kjF27wb6Nizy7V5yWhvMEoJyGVoXnr7c58zk8mMRWKk7dvoxAPF1PELN8wmTSMNkxiuFqKTtu8kqEo",
  "key2": "W2uXaue8zteBzuToAnzAcjtSmYNuVQE4AndYayBoxgXenWjb6Sp2dgmcfDWWesxJSkexc8Us4oQkELwdXo66NKa",
  "key3": "3rXSL1cyemkchsT2si8ZiCjHCsc2y9pYtg8VTEWjM8akU2equnksAHBMJRYYwcCR5wuBBxqR71eN7wQhw7xwWTeA",
  "key4": "4GuhBiPqLkHzANrWLpY7UKeHTRCFazwNs5RpT7epfLgbCu3CsAfvTYdZteY3G2vpUFd18qwq2nvT6TxuXbAK74op",
  "key5": "F3g3VyQQ89wcC3TMUVgc8foX79TNAqqz9SwwtvmWi8G88hM7KGkS1aRYhPQcznFNbE4kzNkSiVGHPrg4tJeRk3g",
  "key6": "3vw3BnsaS3SckxMxa9mpzKnbXj3JLJXpUzC3yc89qxWQe8zisFBy8asCsGQXZfDGkuEjJaFHVLNaqE1882sBbVh5",
  "key7": "5Pr54SXSPWHj3TN7WxzJ7d4YFdvALnqbtAVEbtmj6wWdqK6dLiBhNGkc5cvYz3sw3qUBdLDLZmyQserqBQeKiEw9",
  "key8": "5UuFSaFoT1MqTPJbQC1cBNDzTobwpuhPQ4TNZgoTBLA9VvsKieSdtJjprhMZrUENHFo9xqTsmTEvWAunXPukgX6P",
  "key9": "2gAyPmsdbUKUxnD66XTFjuk4WJ3hTGd15A8R8zNdTFeebdT1xtf6EtqZZnvwjVTZX9i89zyj4bUpM3q22GsZZ6z2",
  "key10": "5ZZxmdQ1WsLtsfGa8vkPi8fgYssDuHAnhGP2X77KPVHgvQ9oWAxYVq4DHyjTY2LCQK77oHdzLfJsw7PtcbR2WRzn",
  "key11": "24A64cwYwkGrLpsvgPgWti2JHVDFWFTsWbULm427LJud8hHiKCNKX8XR82Tj1ipeRyt5VDbRSYBqtPqzuhbYy6f2",
  "key12": "o5udwAd8fi6HkMDmBEKtTQZgZP5g6Ss4gwrCq2wWg3T64d3iCdWk9JXGjAF9gUqY2NzedPP2xromDJ3LQDdDEAu",
  "key13": "2NVsXMprNzSZ7k2AwCGmonvSxbZvfmy9iWUXop6oiASQZiV8YNwZtsjVuVEtutJ4bq3HbhHoLgEUsw7wAdtqg1WD",
  "key14": "4PqPAxbRo6d2HUcpyPtnyZYhtx1YCPieZwSLC6TtfGN1cAjm2zq5GuyAMbae4X9AwyXwNirCGmRJ9jcrNx1V9P3o",
  "key15": "5Dvj8VcmdrxkXwDhah1UFvpnVS5Wb98nFHMXsvLt3dnnrpGHV3Fo6kbx1Jw9n7NB8bQHBmPukWK3fe5Zcfk3szdV",
  "key16": "57BDWk1zVeiC8Dkyv2H5N6xEa9qbKXSNAD64vFpSKKdUkDAB1hWRTK4ihva6RqV6svJMQEKRsU8FZ3539yihDvNy",
  "key17": "2cYu8umsKtACCH7VB6sYRxKXzgQGtHk1RtoxB3Zz1P41azm9uERYdGncMUxAMqPvJgwaqVCMKB6nbYuJBbMv7CzH",
  "key18": "3xuXjzKSVAekRP3FCM1ZLWscq6aAdnCWbNMm8Pk1XSuEJNtsP9nv1kgy7LSjFGmRxF4ejcwuDXfXU12bGZk4HBXt",
  "key19": "5HN21ptTDfBYf9CeAELFozG7F3NeNVRjL4QXGiafjMmSjdqt9oR8FPJuNfuDfAf1zs6Jx6YGT4tavzauWNEgHpnh",
  "key20": "SM7xC4KkdDeXhifBpmzCtiWrfUAhQzCqopNQx33ZW5rHJkkoT46zFWX1rKs13Rd9kcYGKW4z79dTRnZzhTNspSP",
  "key21": "5UB2b5s3vfT9SBSrgmTRnWQNCEAg8F11nVikxA3vmEgna7E6BH5s2nyPYV8ggm8848JVBYeWnkEJ6Zj3xKGpz6gu",
  "key22": "3fJpUiGcKkCAtL8ma22c563wfdwWh7Mo1eAierYk3dytL8ekbwk1YLzP9yTkKog3VUz9UUngKm7JZD45zY2E3k6U",
  "key23": "5j6jT1nk6dsQBpNnmXeY4ow9xx5MsQSzRowFX3HHqPaH7ENotrD8YDAXp5igoWqt7o6ok7Nmb4t9u5L8LE3SsbqD",
  "key24": "3T7WJSi5kv4BDz7uma7QiGLhcx3armxrhmQbcnB3TQ6Jq1jP9o53dBSroEXYWkX24menkV6knEFnD7AiSbePjnWL",
  "key25": "3gbNDqzgMqvSKyR7wfZzVwujWT8EmPZCke8kKTtC1J8msoDMAtRMySVy2R8QYDGRcz1ybDXiomXELfm94YSM7pJU",
  "key26": "sWtaVaDucXnJmAKG3SQBNGyuw7j8dBdadtLruvyuiiScAASMMRc7gHMfq8gX2gRKpJXaPeAfzjdS6VeGzT4k8wy",
  "key27": "XrVVu8rv4uYkybWX3KAbxzdogzxUL7kE9R18p7gBQE9ddEJP3A6iy5KVJfUNFFuWXq9RSesP9qzYLjWXKhGZvq2",
  "key28": "3wM3tn2Z8mBw3WYnqKR7oDh73yxB4UV6t571ELAawgd7p8AWPh88HkqGmqt7BdhoMr3wVws7TXgxSUA4rW7jUuzb",
  "key29": "2sxpsKZzwoL4NrNthJDYXdZpX3owtUphsiJwgzirveJGdGjb8dnDfpUT9Q5HV5zze5cgEbQWZFi4sXCJfR3xUYj1",
  "key30": "Ep4KNwPQPb5Ta3zbTRdFezhAPCpAWiNZzNDQC1Jgt5oeurGCLzx4tWaTSr4L6uDAccBSxzaTb8QQ39t3yiB6BMQ",
  "key31": "29GX4qPc35U5stEzKdBpEH2sLAJyQNGT78UwM9BM6PbJ2ozqrjEvLXW2FfffLKYB76Lhekky1kJDWBt7m15ECSYM",
  "key32": "2t1RGiWZxJfHQAumMJbb2a9kosPTqraiWNVbp1nwUWCQRMdsteKRDME1WidfqHr6UxwERX7GZhqB5waxvbPhBp1z",
  "key33": "5vdHkYjyhyFnp2aJDo3j2Es7TA5uFcWLREoGWm8nwTE99WTWAjwNm572imf7wCYNQzrxxmad7evx3Rnr5r2AGUgG",
  "key34": "3Ap5MzLAYj4pGLeT9qc8VNhNVS41y7MA5UoeFokCd1WSYS9kEASNvMcsrHjdkrq3RXb9s4T1QyCrtU9MyvB7aHn3",
  "key35": "3yCqLao31525iBySHVgS1GDRYdnySuj4dPLTUEGmYK4k4qkJa2iq54vJpKVxM6uiwae41FJerMJJFoPQi1Lm5r2L",
  "key36": "22YjJ8XvVh72K8JQv4GMxU1AT9ZxJevjpSvwno2D4F2c4Xz97hcEgiK7yj4e5HZFnLwcLiiJZ3ECBixGvun2m7eM",
  "key37": "51SKqrxU8ouzXdngBUjk4ZiXTAksYGYMWvxYGRW8ArpfLzSvsdQCPS8Ft2jGWXKLVb35pwXWWT9HrFRLpvGBmV9g",
  "key38": "5McKn4akjR6gryH8AXYA7NXmu8nrBKRZ22WGZApn8dmaq8ohQ2XtsaFzLnCHhAY4gvr3J67FyTGFCtjfTeeH5Z5s",
  "key39": "3jSxaWAp9JndsN5xSnzqoQ1cVRaaFDXYu6KN8EzUP1LsQkzrELRNjtkSVnKK99fdWjMuJzwnMUV4sg67EkiJyw5h",
  "key40": "2jex9jUngMLSjmC6wC5VGiBX1UYyZJN6F9c6j4hDvgkqeN7W2s2w1m77CUhvAEbJVKrao5yLgfBRuh5gq7nsHnoF",
  "key41": "5eYMtBaFHEJJZ3WSGxmxb4vdVNeYqa4m4HAftHag8nEikxymKu6VCRYcaNkiMaTs3DSmc1JW16wZrR7fMhWQ23tw",
  "key42": "5wZE73UEwr5wkA5tLPw3xP9wPpRz38pZMUvsVL6BrGaUGHWupdVdFHQPUoeMGPBTAvQqLTyiRDBdVudpwJt6HWLS",
  "key43": "7Z3HTaAKHEDqvZHDQJPGFuuqJ7jZTk723AFVT7HGnf9AAn2C7ZmbqkQXWFgZ6HAFVXtvvZVdQMFCh2ueKwhSWuS",
  "key44": "2N1hFXuPtqwGWBuZHzznj3wHhLeiGyS8CdSwtswV834czKV5v5gnxgFZNQYmB666wpNBduB99PiX3GFPgsBjXMj1"
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
