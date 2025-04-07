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
    "CRRSwTKuyKhHhofdNbSJn2aLvn4i7ZeaTsxMvoZr35oh7kwMjvTnZA6FqoUAc5QuSV1eafzf8Cjs57rGCepxX77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7GkbAjthjCncviCYjSvkGHWPvXjsvqNgqG9zezeM2NAEf4xnsg6tFE8FGTFBfuy5BDi8XwCKhisA1VuptTysDk",
  "key1": "2NCPgj11KvDaJB9MAwgiR13WKwbYJd79acrTqdfpCD4SvRcx2GCXaxBt2GsJkdnHvNuNHrtRyDxSgjvDGag3qnYr",
  "key2": "2uwAsnhjvFQPzKTmikYTGQW4YKAdM23eVwHRRLhedmtEk6n1AEkEKYzTyvpLfvdwTkRMWZXnGDUzn9tKr5h2m1rg",
  "key3": "2eRKLhNwWi8UXmFg3wyVBMdBGbWLsA74p9MH4c51R1HWkaxnVk9MTv7J9RGcQHT3Expphaku12chz9enPiZkWNm4",
  "key4": "2EhvTyvb2aMpCybmY3hv2Q9SUQPCsuEdXcRTKLcFWkGoyW3mPQckYpqW2g42tWTLuiPsodJadDEH6QgcJUSAb4Qr",
  "key5": "2wwKwwUJrEAkJ1wEpC6JR7RQboFaD6TSfe6SHrgBqCsG4iBeYV6u2LT1kYMumFCgS2LQdUgtzuupKKEAi67kcdjg",
  "key6": "3DdQgayhrAUSVGgimDrFG2rQzKP1m8rzCLASJp3ippY9SAtGprCaCkgqHzawXUeRj7C7WVg5zFdbQxYQ5wz76ghX",
  "key7": "C9x88Ptp7m9kvrkeqpgnHnBDCSX8SDehQBxRDsHgLhD1bxgxrby21zhwzZwNVPTr52kRuSSy9RJ98sHJyUrDe2e",
  "key8": "vfy4kk9o4Ev42JY392dwtKp9ncDWNL6jnToBrtQ8GUbQXd4yVKFSxViij9KKEGoAiGrknr33B9njT5RgZo9y5rk",
  "key9": "3jYBqkR8eyXgJc46hfVJxr3ioQBav3u46SBunPW5Fr4qeko5JaHMB1KY8w8GovnSHpsPhYs6qWfUoFoosbJExArt",
  "key10": "w9F2wFZC3zPJUEEf36kHTALHFhMM9PzrFGXmztA2UmaDigrVhwv1kpFgPeBLZYUY9uSQondLwKWxw37fJwMfCMq",
  "key11": "5VXn1fAgncLq2GkLWz4M4NkV1uSmzWTY4YqD9cKP13yyJGSnjmGr1U9nSH7xKbAsTyw8pYesKv1GRkXyBN44DWf5",
  "key12": "4tUmcG7ZKKnRiAim4iJumEGodR5ebWLNm4D7qnrmFBhZkxV3SvvTZxExBFWtdawZFctbZLpDRDu185b6ghy8PZnZ",
  "key13": "2dZkArPtR216pyzzurGJhdEzrYBytqacTrGpDm9JXBhG7E8Tn88rJrf63SPc8bLmkyhZtQyGumfmCbE55rBQzdcW",
  "key14": "2zEd8yy5hbMsrEEWogTWTE7W7qvr95PaiFzjGVMjrDV3hW1Uxnf15dVYQpPcCuYd3TJVhfVSP8ixV52nEemyJdw1",
  "key15": "r4rufVXyWZGpSAAcHWT3JmcB6xN2CJfKxruYhAsD6Cj4sHfTkoYgfgba9wcyDHzUzfoo4BviksjqRbU8YBc8SWM",
  "key16": "4pmgTVQPXWyg6Ptk7Kse4eLEV63WCwsdR9KVxozAcDYFmqNX8iMGGAw9HhV7SZNPQBg3gnU5in87s6HD2mjn1efq",
  "key17": "4P2Vgk1ssf4GMJWS2r4V4LzBXwNQbY6Jb2zQrzZZTRSkd6kGNDvTg6pkTMAht7eQzCNo3H8rQm1kvdmApJKDCHu6",
  "key18": "4hB4Z91c4uGRz2Fb3XifnoTajsE4MR1sTMELDGUjh3NDiDSxZFqYFNFJPDbf4TfyW7BgVV23NJRnTyBaqYCLrWPU",
  "key19": "4Fxd1K7xa97JnVtnb46Ba9eBiNnA9k8sChPhRk9E55knyfMLEokjfdHFkgssTUW9EP7bZAXEF1Morkt4MXxw8bzt",
  "key20": "2X4aC6cinCeA9BqpakihWJfi2FPBEBKQunD8eZW24dJjMR5TNmL6iwaYYYicSGnkJzfSWVuRR9iPcr17ZmHtDgnr",
  "key21": "5hRat3rdQfZNpK9WNiaFnrUwzQdoiS6c7vgKi5k2nSn8NpXDstWVWBYiNpUzpKWcrydKQGngZApXevJpENnXjX42",
  "key22": "5deuqK6uFtnTrqmkJqdEXx6zEBkcFrPxBm9W7Xty3oqMNpuY8iGRBDMYg7Z2mNs5Th38ZsGsc7RLKrtD1W5H2Kp7",
  "key23": "2WRWQvx6UMDAdt2W5YK1unoPMvYyN7GjfRjTXP6evUtoEuEGQTjDj6xfa69B8bCMoZmTJoiUfK5tLtnvxGz3BHbN",
  "key24": "vedgGcRrZF6THei3LJvDu5RCVP2vBjPPgwT1kLsLEo98gwvZ7jkgCqr1xuZtNtdH2YUFYvJBvHQTJcB5GaMBrD9",
  "key25": "b6btC8HfUuwD7TAGgWAc73upGrQ4NZidzDJ6dgsx5zDACmaJKiiFMHXc7iWeinaBViTkxbhd1AYumuKb7zs4tRL",
  "key26": "5JkMMMoQDs1bDLzB71n9KLwChDavWynNfgnuFSno3BRjQsTZjWAq8xNisWCy28Z3wGdLETSDe5GQ2fwcVCZ81RtF",
  "key27": "4facjWdSym6md9ARzbFP8aVmHW8jsg7vn8Rt251tnhsFE8CWWcTvGcvPp4Pik8igCVXWXpwEZPyi8SwNzXCUBm9S",
  "key28": "2GCxVn8625eRKQ8T6M14RXA2JgDXFbdSWaD3CpWfivroAdR7LWEgZQwhraZYH5seas4EAeR1bf7sGxskFkaaRZf4",
  "key29": "39iHscGbP6GvDFUaoRxNxUwYtYTyTbLiGEhasmP764AhNmjmwVzhL6aivNb4kTk5yoZeRr9iJ7JKmkbuZjTFshKR",
  "key30": "VCLGesQAoK6WrLy1uHzy23xPCmCeYSUogvuNmZS3gggbEeeqv7nN1vcPt5Q5pVd2eWXrZB9Ra6z9SRZBUS4vuxE",
  "key31": "un1a1dRsv1qYtuyK2CXqiJYPfJWzjcAsCzrSRwGnnHKk7ibD1teVHEbHpjfxcJRKwGZ1FZ9i9SCKCb49ySUJiQZ",
  "key32": "2Lcp5KFkD6b4Zrew8PnR2Lj292b85Avn2yKGEfvdt6DZFDZMi517ckGgTfW94CxnZG9oEZKtBAkuaiuRRHiQNvtm",
  "key33": "9ySnAUMUv85yYfhxr3Sj9zxg2xCnJju36oWDRJvJBj74SBmCBMK3aYjUMinQKNkanoj5gRMoeY9C2CuT5eAHWLw",
  "key34": "251SMoTCSttmHo4bqrnM9CaNuZN4n72ZqrWtWXC9dkFpVRmg7S7CSAj99wtmmXWK17fddAmcjxpqFQcfbfbEYDZQ",
  "key35": "4GuXegCszUrTi5ahcdnS6P2MgnmVnZqo2ioZx2zB4ixJzUzB9rCnhHPXbKsYS43fFhpr61s1wJPKx59tdn4dr3iD",
  "key36": "4mVQC4HJzLQ3k554srXdrzQ76ToHspfEDGk74wnqJ5Ug3PJiaEQCmJWqXHyGFoqi3aCb6atZoqgQpfHsJ2PBCTGK",
  "key37": "5dcZJ4JXoVWLeDAUvB8TuRmbgqEzqiWAXTwhrgxUuJiykQs8tYgtHwvjaNW6opLKekpAJZBzMLvosUWvNATdgbVQ",
  "key38": "21os1NnxwBLXWZvRMWDeonZSZX9TJFf6HEK61eWBt6yhv6axoCts2mQLx36nMu3q4xpMG8LAggJqftxEaPGCgfat"
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
