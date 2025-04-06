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
    "4XsAF6iAEhsrovYwPuCCHe4KQCvYPvXV6W66jmyR8Uau9EDuqd2NLaQLdjqUsBMnnhZn5wDCzDtwCyLjPr9DZYi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qCmvVYhnrEpMtZdEBDsVjPHW8cwYUaqhh2N7SVL7HV8h3dSLsTGbFm3ZGUVpZrey22g8x6vDonarQKggqLiCr1E",
  "key1": "BphHvLUf5gQptPUHFkS3DoJwNCJe5TzoWnZ6mxc7yeeWX7fVcWnL8G5G95mJk4Gh1R1djvE2SPTaSjUdjvdBb1w",
  "key2": "MeRDaDWsVkqfiUyjyzUJwZyzy9h5DzkKqqouaM8XbmF2cx7hMvaxKpVpNYzaC5qyzdPzsDW974ST6ysqSSKG2V7",
  "key3": "3uhzEHgPqveX4Peu9VCQaQY8Ws6oVUBGxswZH355SfCjVBzkZr5NpEEeKGx9kKPjZa855gG5vvNHXZ6fTrxen8VB",
  "key4": "4rGuZi11uSw7YEJ4zqqbDTpb5rRj7J4EjqbzdbtdNETKokDJ7iqTuQyu2H5Sqmq6mtEZhDpYQfX7EPSWvoJTV4mr",
  "key5": "64FQZB4mK5QgfD9upFxb4Q67UyMpHNjszQLhdapSjiwLv5VZsac4Pk9gDXWpemKN2zEf36zsUN1UMVgs47Dip16J",
  "key6": "3XfGtdPWBFfEzwBmuuA2yhnh69PiureLb9ezaviR3mN1RwVE3PqDb6RAa2N585KuQ71C5nQd6wdaBELS1C9GTmjf",
  "key7": "4zbbZ6nYTxiN8cJsCVoQVYsm9TBUFpVr29m43LDqjowLAeKVfJ7AJMBLbwNQd8UR9XoTD6LMYN3HGoK4krxewKwQ",
  "key8": "5yquBkjG8Kwy3E4ZfqZPRa8QcJYnhV9tbRfTT8DvxrH6gLiX9F1NhDTi7uQwrXBafN9YPgGcvgW4TCDTeQvoB4ti",
  "key9": "2QBde7dzf4Qgtr4iJBYebRMKxmLRL698L2uyaSk9cyxEiWn4xv6GNEfzcEhR5D3Etj3gQHc8Z53Kpxrvez7hXDha",
  "key10": "5amHVoZSSCkM9VnjG9sMJCcHZu415iMv24FDX8D45JsQgeLsnHZVtcVuzDNugHFmBJQjWg7gEowCr9DqMjqFS8Hj",
  "key11": "5DXJZjGjVUsevM8x1DrjpJ4tA4kHQdtdMa3JWG1sC5fkhSsBE91yqAGqkgQv8qDutqVZTYWUPT6vkWMBWgQzAh4v",
  "key12": "3y1DuPJ61QifurmxNQPf3aiUZGnspXosKu9sMq5gDwiaWFd2MZGQWpiyVnbKpSVgBY4TuAdGcuYQbwz9JdmvZBhX",
  "key13": "5CDVrFmndMY8mQyGP3KbbfAaFCyEvNqkxNnVyvNZLTQFCeYrYGtfiYtRyCJgSwyfn9bqhzrPjzAEUEhsqHs3YC7u",
  "key14": "WUJCqknxpVqAeWcEYBveELkQySNExHkyjaxJeC9mu7y7UMjPjtpyGMmWRFvisnHAbtVe2vzsinPaWQvJRdk3Q8t",
  "key15": "2XHnFbjkVzyeWH111JHV1hTQj5MSHuApMSpPAtdZ2r7PfRoci9HQGtHuyDJiE8jFpdQQt1Wr6svpFNuKN7SEZmmJ",
  "key16": "2bnRuq5G5HTKFuWQyeAtyeLuvLqjcuEv2QtcG3Xtr1MJm4o5QfJffbtYFkbbtbnyE3HLwbtP7tNYM9eHHxmvUqAs",
  "key17": "2Qfv3LVnsXS8Q5UQJJfuYXWauSvLjQLBcdFotQwonsCD2tnbacqHJzhB2BAWTFwc5qJkosJq8Si5zXgzdVhtAKcL",
  "key18": "fbq3H4BNZYytMYdzENyxLqfCeuz7r4LNCEXoKWkPRQfEQYV2kJ5fWx7EhxvbE1zMNEtfq19nY1brYQA3KTz3Y4i",
  "key19": "2LmUyzyqg5DkLnK4RbYsfZAj8tfktEvoMLU4zbhCtWboecy4Yt5bh9zMzokNPVYVZ6mnrqiUhgzQT4MWWHotz2m7",
  "key20": "5p9JGVxj5xbeyZcKWMPM3Ld7wppGyYKqfqDDk2BcgLxKwgNKQqNzjsKG2SDZAAJ5yrQM8wQzse9a4g2S7WRZZf2s",
  "key21": "5BYKm5jsJVMk7o72UjF5KA2xexhzrr327Ngc99Y1RLVsdMVAUJiwr3viAVUygXQAy9eTsF5MH9PRMTZN1VaeDMPz",
  "key22": "5iShBfgXhwmz59ceSbFD2k7S7tsKVeZYwYjaZdnWs2PcoZa6nA5N4YgVT77UFkrKsSkjfXF3vdGyPixSQZvHXfAG",
  "key23": "12rx8YXdAiBdhUo3ppwiaSJhUEUFU1RAe1zFgVDGMxjx9iQSF4SRvXryDUdjF4ABVJiKtcTPPB1frLVc2hxwEyW",
  "key24": "rvL8VDHs56eXBsykKh64k6852LW1FHzgtgi7FDwcnh6Da8turYE9vehKzexD7XqBj9g3q7PxeVxshmEUPrJQ6io",
  "key25": "kmvaiDEen1NaGX7rx4rthACXx9vgstZ4rNE9x1kvE8in98ReWTn7BoiYptEjsngXfnZJbqWVJ14dxrnq8UGgDAY",
  "key26": "3dKM34o8iG2PnCmom3KEZLu27n9AvU3qxrZCYqpSgfnDpaU1w7zUJBiJk5CvZtZz7Ux65SNwv4AX9B7az26i1MJe",
  "key27": "33tmHxyJcg6YH7krfB2JZGFLYELNArEtyhKHAAU3ci9udgmmbbzS9SezNemkaxL6tRLtaZM3deLKbTcYTeAPzNhb",
  "key28": "EEDCmCzy3PpJb3G9NZxFYCYBDWxfvb68ue9ATzxKNbv5oc6wSUsDLwQJddFgqaDTMnwtsdG7H2ngLfgfA9zCrkE",
  "key29": "55zyB12jrtUc8WQsnfhGwoEmCBJLmVJ3S63nCFWdqQWMjh731MS72rQXr3yMscbxcvJSmJ2BUBufYw4aCUtDtjcS",
  "key30": "3qwEC2a4PjW3vjd8i8dR3xQ5MSiAEDSvha1WhKv7yzXJiUWG97swWUiP9dN6mJzkPKXWiKUfaWfN5d3QiJh8KPe4",
  "key31": "Dit7emTskBbQRbgDX6Be6UEpKyBrGeaMvATK5HvFseTDJ5jtRLzB663ieF6FoyRnT4B42W4bGTKEfvmZujGjibK",
  "key32": "3e3e8c5Cv499qf1dnjoAkcmmmP8wnNtxZMANxmfcUwew1F87iDTMLBKWDe2CPZ377aoYvc12AMuru6YYYSkBshw7",
  "key33": "42pb6xpqybH5PPpmQc3EUGP5HkcP6HV7kYHiykeHKvVnpBfUzyzFsUcWYREBLpkGd7DHPKRPqoqb4iot7NvZVtzh",
  "key34": "4zQC9GRhBzXxoS6xP9Kqqtmr8QVGaMGLoQ6RyLNkf1qk1ESP1gFx5eGg5zbGPahmpB88S1UFSaLB9XNgruAqdDvd",
  "key35": "3iov1MA3NnKkbxiWWuk8tRGQpyuQRSdN7tAtJA5HmH91rxD5vn3kkucYca2W1VzBj2hM4vqfUcbUVeiLJF81NEB",
  "key36": "52uQ7FxoFUMU4qXA1UWC5A2oUPd66qMCCxV4mgPB3dATDVG9oqKn2yoJazSu8TTQmmTuHFRAEfkrjvQfEJXXXMuy",
  "key37": "5ZF8YFLikRacCfWU3oYTYwqWBQkeHRXjN5jWEPj78KNXFmS3fZotux3cHiwTHrRpJi8xPiEgK3mELJJ6fXkDUjYG",
  "key38": "2b64k7t6t1Ds46W1CFYB4L7wamMfHDm3GVJieadHTShLLn6ftZemuhA7Lm1Wy1jjFov2EaDCiNXJr7b3zNPC3eD6",
  "key39": "5suCZjZgUwdztNQ92wiwiNBLhScQoTCQL9p3WTFz1SKkv7DnMrWTdr1SKpauojaxyPbwkWgVMEmcxqod5zEQW2Fm",
  "key40": "2KasbJP6yrMcXuqngxoxcyEKExHLuWnRJTJuD2accjjo6C6CjnR1tF8JNmRSFdQV7s44mdfVWohtUCmohLpf2WQe",
  "key41": "4nfS4pF9jQZwUBBNAEgE62UQGfEEidd7tGG3asv3dejhLJLJUjGmGASTZRNFyEMLidFTUBcMxUjYbN6YV4PxqgCJ",
  "key42": "3EBY9mzLTMMNYUUMrJEMwbFKTzTSpPYjAJSezVf3fvRQEAV2yAzR71zUzuyX9Z7pZ4AcVeR6fzFMuD5AATHdDVPD",
  "key43": "g7LhCXgKR6ipZwPBAfvGu9qosDmyU4PsbSBqA7GszNMrEuXVr8ojW83dYHTtczjm3P3xSZnX5WwXziyBkygwfjd",
  "key44": "ki9BUM6xE1KcmdM2Qd7j45pCPivrnx6HYW5KH5XbVWkwBcmvyKKdgWoX1FQR3uVtTEd2Ci1tMiQQEG88coUuPBn",
  "key45": "2U2gcz686KbWKC2vywoifpeTMLJNvwrntyzn9ra1TvonvZX48Xf6eQZ6ncJpNMUwyZ7per1cwST6vtX5X9i4sg1e",
  "key46": "3DLw9pypovZ2yXjP7vXqjbnHnMDtZttkdzEf5DBeun6iAjqRja3CjSB31SPEx5N7X91JxU5AYEeFcvpS4yHPEunN",
  "key47": "29WfZsrMYoirkbXpTE7P2dF8jSFXSkZ7h8tGnnFnPTVHmQyt8sf1AYBWapw9rPmqPtPpLL9WD8GTEonvK282nkKk",
  "key48": "3CbYvKzsSJsmytDNKcLtYsHL9y1nx6g3Lg4PHVeoi4hm2DNS51PcfLvEyqjCFV4weQ7ZGiLgidnvzmQLPV4JTjEh"
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
