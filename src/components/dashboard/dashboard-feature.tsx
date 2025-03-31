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
    "2AdZpHLmN63Ft8R8BNoj4G8m47eCGBocqmgthzk1dj47zgx8Wc19kygAEzgck2L1sdtvkNS9PBMBgbKZxz3d96YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdFNmTLoqymsZpKRzkqJgRoiKMo1ndrXnANP7FjpDmSNfVtqEH8a2iyKT7dcCMQthm1YLvrjDJthxysUdrSEiea",
  "key1": "4YdKjUM5SqQchar1gYMWFB5M5Bj5Wk1LdHEMi9CZGhugBLS1NcvqhGtWcHSGJJX5YxijVJC5FkTgH27QLmUSaHoX",
  "key2": "5AQ6ySiqmnaBR8GiM9cdvHZJrFXCSi125FswdV5Sb5X7DVDnHvfE9XBr6KmTd5VMyUvUbeN46d71Do579othjUxH",
  "key3": "2ozbP7bn6HNDfZy5fBawHBzyNuLdKj2x64ZrLAFQxNWQMJWmvJGDVVxcBY76LJ832EWmi1hFSoUwZEjiBNtK48Pg",
  "key4": "3c8de64MugKX5XS96v7QiY7qgmCuR3W1RHLBrHB9GEAciR7VQiUAS68SKnyFps2prMFMJuARfYbXuYSWqukqhQE3",
  "key5": "3t64FGau4G2sZ7hVKF8tjdhnSXgk9bbCi3DBowrNpYaGcaFQBr9YhZH29QyhKi65w3tDU56Urh1VUMeVkJM7Zphn",
  "key6": "66jXZAjSs4qGtw93UHVmuXPZ2UwjhzNFMiEVGEJ9BWwgBBc37fVAN4fZGbpEcv4QXTCqw3Ssi7sBdksTmB3nyVeu",
  "key7": "2aC3mENJ3YygSkwJqR6zR25GUYJnKrJ1sSqA4QuFy7qPAnXNWr8y4Pkb6dU6A9xX9Mc26UmpgAW8aEpr175o2jKh",
  "key8": "2Vo5s7epFA2SPfVQZmXUp1Voh1AUk5TgFLkNKfdL4RdfV37KQ9QDNUEF93HM1vjQ8Ea7wXond9uGZ3E3F6smKHmo",
  "key9": "44KwZdMwMF8hT2wFzn6uuojYpMKzeYVhfZL2aNbuzdJ6NYmCK6RjrM8gMkpTkRN6e19NxhMFdygoLUFkXKzHFvYR",
  "key10": "5LMTwntHvs1wejkh1SBXYE7gmrssogMBcCpeJKVNvPQW9rp2bsq5UqsMhEaK15qWV5JtYMdzrZYYiKUzawzGLbyc",
  "key11": "3Up1LWRmege4XpaJtkMQhDu2gy8FCys8QuzK2uzQztgbMDHe4AQhuDfkdoP2CtW6fgd4rgQrtB4WE5EV8UCJefi2",
  "key12": "5kXNf7inN7oiG5guJ1AWgDYc51nmFJf2GSRpiBobvWcu92LYovKz8esuTU6AtRAeQW2qP9BpTdesTTo4ueaUEeeP",
  "key13": "4vt8c6Tivzgex3rqiGZPYeEEKZMv51BDGzexPnkQ74ECaLgccT1YTeFkgFEcwFGwYzD2qq2ijV7ubb6CFLnFbsd",
  "key14": "4V7YP79mdJ4CEZat4mvia24huo9XyLxVsY6EACYYuj7fdfoz3fR6AypwVHox5koJNCUqHY4V7JFCqxGrUPYQJFLw",
  "key15": "63JDoWsAAFvHdYQUSLoXHoem3bZj5iYt9xZxyYH6zYykRwWNs3NkCBx72ZiLLsw9No8MCMa2mhXe7WxoWYXuC1Cg",
  "key16": "fMhCL7PLM8DE68pmff3tTq2NwzYDmn7DmSXUdCg82F23AgzCfFKJhEEMuRUqGSwxcGgyne26tL48Js4n15Pfdeq",
  "key17": "4K9vugompwoNumb3nev3FpGFyr81vzn8GCmY7tBaVeeRdBte61tGm3fpPEoa5Q8SdzznmJ3Q2rccVy9ZJZLyY2Yv",
  "key18": "3KA7dhYswnaz2SPtK8SHB4qfchQPvHZpUYkcBd5FBRE3CUCZKxnsqztCwypvuQW6YHbhvXUkZdSjGWXSthAZXEfn",
  "key19": "61CRnUjc1JkoRE1xzuhJeaKwo9kg6NdkqnqApuywx86NEng5bBrWEGtFyvJNqinpCCP12gQMgL7kH7GDGjBqzanU",
  "key20": "3ShUSve66spKE2CuaUDTihpeJEvvWuS4LRCgXxZ1mpp68ygRyAqR65eDhfVPSXL1NjhZ5RNdECsvEdij3HjiHvLZ",
  "key21": "34XrVTQ8WoPZujGBXuqx1p2guhjYhEpy8Y46Dpguv5WmkVQfCYwGC1ZbcbLhysSE4pmj9cAGBSxU2XegnANtV8fS",
  "key22": "5VwMB4TDDN2DhznskY8MiJdj7hGLxi5YcfW8dsgLYw9YwtaViM8wQsb1LQDprDnHRvnTE6ieQeaqGonkaUQdnP2F",
  "key23": "5uzafUVgyAt4WsX9TwcCuUttp4zcuLzBTTFvzorKo6QZK82ELWWACjUxRQzti2oUAwHP9EncD2AUL6PfdZpK1XMG",
  "key24": "3esVTX1SCWHQrBKNTou1Qoq8LgNwXdmAH8dXo77Xka9P1csQgVmidcdrToDmkXQpvvAGMqF5CW7Qf2oefGiD395t",
  "key25": "4g6DoituHk5EAa671NuEYKrjMQhQ2wCYQhq4BxFJmi4gaMM34z9DaLrZSn3eUYBhA1fWsrcyVdzkVQ3fwe1AsiYr",
  "key26": "2VjtNyfe6BqUTZBzEXr7pzRPRaZ7dHVjp2YnFM6A6at6okvWwHyUm7uZQxgkGKkpmzSkM2Xtd4jrNTBiZben5hmb",
  "key27": "61fsmBwCcTu8i9x8FUfmPPsWUw9PkoTHuKsbXVi3DgaiXVkxDFbnTYbJgUUvSLpWTkE1jy67Ys2Xsy1o6ahyhgpC",
  "key28": "51VEsmZnQRFXFYyC8V3YfFnziMwXPdHuqsXavdC3o6BQn9cRqFCrdc6beeNGNYEVASKi9N3zp8nAnxNPoz8NrrFy"
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
