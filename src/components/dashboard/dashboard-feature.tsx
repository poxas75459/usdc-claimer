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
    "4ZBtHN1LAbxPTb1szzLHDeDefDoUfxT8TJHPjrR2yhS9HkAu453ZQrhaVP2WYb6vzmVaBjHHZ8RsfNVnkAh2Pgqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBmESY2VSWMvRPvTXHY5FU1uqj9xfULvBg2CqFvnNPhMhJaPzi4hnkZAyKm6UPUbbdgVbdA3W8mmumVkeJ5H4wR",
  "key1": "5BmiVCZTsyY39wgnfDhaRGk5kUeXqTAAda8VasUeNKw5EdLZy4BWW6koUjuqme4ZjpiUgs7TeoimsSHWYqooUReH",
  "key2": "4Wq9HRzdvqC4FBzJpSy5CfBsGW4PQRyuiLXQZ5XtvGNJ529Vd3nWG1m2tnvPVBQourPY1b9A3VeBZprkvbqxw4Zr",
  "key3": "5gTa7Ywg3qkcvFRdaxE6azgsd6Ug1u8bVhpjJ8KcjfQAuJsTyW6TZxVkgvAp9RP8Wzwm3M3yrCREid1p4otjXSc8",
  "key4": "5QFSMbkW19JXSb1QAshxdLdFfkgjbmHTmGfpWFsLFqf8kmN2VGFMdq2f39GKttQMg9RKvfKcZ1CtxgUR4AH9ddVZ",
  "key5": "3p7wzd4asktwwaQAM8kGR7PrhD2X5TPbHhPvanPRVtcV5RFFDiiSAkiucp5MHSnbXu7KbLqy6sMQcNZBP6hW1AzK",
  "key6": "4WsZwcVEALDTvJmJ8D5ZG8mcWEkeKQ9K4LJdMm8DTk1o4wh8nnDRXpmUqqY1TTWbTuUUU2xNzj7t5RLHCeejwHnP",
  "key7": "5Btx1NRX78munrZ11rn3S3LWZGXMMe25aTuwuSFup34qHZPD3KXZZsAZh5BKxdrVmgmgF78PhrH5Au3yPBajQhQX",
  "key8": "4uZJWH4KBY9gSSB4zugKG2rKUXZXhtyYC11XKcu3xZjX7Q1XPXmwCZNhApYym5kLKqMGWtJBacqa325tLwxfsQ7r",
  "key9": "2Eb4R41FZQBh3R9yUcFjzdjBeruKGD7YtA9TvP91jdeze7RaS1ghKdquda5HwyXpXNQGn85HN46rAqiEQRzKrr95",
  "key10": "4rYi9xCkCoSjKFzth58nJdbnyKpfxekX3xbCCvcxTpp4HcGW5nK4LVxNyLB2wnrqpmzt8cxJnXuJxzz2M7L8K3g6",
  "key11": "5q4rsyJk9BCGADBkSaow54JePE1C5z1oGus15tPvMQHaqcGxBcN9udSRciN8jde7bYVrVALat6Lg2hbhPTBbeEBB",
  "key12": "hYXmCx3cm4UFUPi6nUqEpZgHxXDftBfQcrJaxFnSjMMXj86QKBBgQRaCYakL3MtGkM2Tu8ytesbpB4Sh5XMYyeU",
  "key13": "4WMVRAijGGanVXgrTdogwHAKKw1vzmLq1JQfBMswq8qcuuVhATRf94WDinwUtygcGnGsPGgbG2GvX8m3jEvih6dn",
  "key14": "5Hu82fyDQkPncVK7dEjnHS5hEfkx5RL1ESZno4ZVkWAfASGenTbixiV6Ss71conTw2TF8cTuKVLMpB6JjuFWrhWN",
  "key15": "3B1bYRHtXyiz5n1mRUioStgW8UambokPUE6igvCVhBWtPeMHKxoV6e8BB43F7jkH3X9H3Vnsb5e4hHWxXheHwxJW",
  "key16": "3pXY2zrkBVW7khhiCYUdvUkAPC11tM24GGagu2k29AYtZKyZHu6pKw55kR5LgvB5W8MDCyfpcW1q4RVpgbDXm5BJ",
  "key17": "67YjkNHefFfSw7GQGHoEs9fzggosaaqPqxuNTKoqEC2br8KzFQEZaCz4ViGJdgY7BVf7McizXWabVRrnc9KYYqTt",
  "key18": "3xU9BfrDgGWFXPqfxE8rZwrmsgYqMgBvk2BjkuePGtFhmJdvR5FgSa6suRNbjPkVXFercgcCkiwZ8hUhKMcddCXk",
  "key19": "4dUE7V8JHQWB9kFTmCAAR4otcusJGF9AYefiacNiVwd4vV7ASvBEUJpMwUm1SV3qDuSFRCV5nAFCeky2eEEywnrf",
  "key20": "g1UADXq1rSJeww6DaMtXy7DnS8aUC7CexM2CNPsftDjo5AXrKCHSF5X3JKgrSGbm9wtAm9ubSPWDJNXqtncBiU4",
  "key21": "352xYjuR8QumTuRRPV3RSA7MgqFzXxSasDnUJKwGiJnD626nETWCgcZ67tSekRWLpLsMo4yP6SMa1mTXckcQRc1W",
  "key22": "5eMFiQzeSgFijQqcRu6j9jHg9BwHoatn63kxKhyyVzZBY7EQwTZnqLyFT3jBg5xndZkA3Fg4AsEYdBWmRxrCdQY6",
  "key23": "4gPkz9TYUf8wWcUgYacqsqEgdwbYb2ZSuVmZ4jKTMdUFmgpytzJA5L4hYryTKZDGgo7PedwNe7PPMbo335xs5tsY",
  "key24": "4fBMSbsx2QPhomu18fGECg6VWZpMiiwYtLZiy5zDDgD1Z49vEZSvZyye2uvAnNiouHqazMNqYVqzP23Wpdspqfa",
  "key25": "2XqZKSCocguhgLjYGKkuG1TAJetxqWKZLZFjR8761mAAbHq1Av7CX9q9KVHrAYric5pwaYgpKwakgoS5tJw5kmUU",
  "key26": "5dXhWXN8VadozWb6M25o3kwKqXEzkyoJQ55i83S9m3UFcYUy4ouUJVKirwQYpKhFuJ3x8FrNgJt4eEr8nBNai9oe",
  "key27": "61P5y5enLtgHLYNsy9wMYqsijr9JK9MuaTSZevvGrjbfVh6qwAQR4E8MhmZeztj9yxMZ7QundM8i6268vwZugwj7",
  "key28": "2s3kxd8vJqBhWQkNAhjBtMkQhZ9Kyr8zVZjNtaE5jx2twJfuYxyDxXbxu8x14hH8sL3B23D8zgWRksX6KCz5n28H",
  "key29": "2PxzVzn7eKQxFbjfnUy8SCRAppakCxpsew2ujQ6o1R1Drc7TiK5EsGBwRviUpQzeDgQVqaPjqj2oi7JMVex45649",
  "key30": "4PhEf7MvCQVzgVmFCLsYgsxcxdNDKE4LExSxKom9DcHmxzYbiR2avdwGRSKhpsBiw4zHiwtuYbkc8bYnvBrQqKJs",
  "key31": "uoQH63b26BSkmZ1wYrC9riyUtBbDvbDnAr9Hu41DypnEVXwVYXM7TxYkM5a3VAMrx8GSrz9srd3HJVDJCR9JVkt",
  "key32": "XcWAbifKVbX16aRpvmSNSWvxKQoeN4nUEhvYUtZivy5cfNZXi8dusPSaRfdLS9n4RVAtFWqEjS87hyWpqfK1tkQ",
  "key33": "qATPsbb3KNsB2TzpQfA5G4fekJHMQ1PE4xBX5BAk5hfjTtQaNZ15oqWC79EnbfLuqn3xm34Q5JFTg19NMrE82ms",
  "key34": "2N5JqNPUFc2Y6urAfTg8Brs7KrihpkM4d9CQrHF61n45Vw4cmQu7dr3ULF6Xnkzs9aH7TLvMLsf4QMWRPfD5jYEP",
  "key35": "4EiQjU4nLsD8eVDKkyLfzn8zU19obe1AsfKarEU64GeorP1bis24uHSHMgyUqxRLjRWJBAiz3Q1vxu22R7XQ7whe",
  "key36": "jS9P1rBUtZpxG5fBkmxrJGjHY5S5nnM9SEczd5cNVpqKsnsMGuykofqEQuQuhPBpS5iAbVAR1v6J2idRUCLDXKS",
  "key37": "JidtXyxJn9Rsnru2EwXkeBYeDYbWLyEZGsTeSpCsUsDasf6hD7S2Xt8cNegNNeJ8tVRXmu66ERxPKCcejHkTJDN",
  "key38": "FifB5Wn9tzvF5d5W31wvCjA1P2gNG6S27EK9GadfCZ9yVnzR4cBerC4r4dVtzRLZ98umZciNhxgz9TBh27QowoC",
  "key39": "4psAwxF3jpfChnT2nDMcqwXg6XQYjz6zuqEcaCNc6yuyybaLGf14D91ZK1ti1ni9GkgT89RJN7dhWjBhVPZt4xMW",
  "key40": "3JokxXSuL3wXJytXGSS957jPsn9toqvCaieSiudTemcUCLDxtMRHN4TEzDWhALsT9oY8WPcu5hYy1ZfwYUScPjKR",
  "key41": "3XU2DoGEf5PY5pCbhm6xEa8pUewA918xvV5zK1hcioimcgG2jKbnzqoyxpzTJTDaNhM7LYh1wzTxBP8FWHL9eF54",
  "key42": "3gjAcUEpFrDMyyXoK2V6j7x5TuAYCXXBntzQsViTYHxosuBkH75SnJPQ7LDwVHJbh5ogeZqGV5qjqbChuZkyP3G",
  "key43": "2t8uhRvPZP2oD93ebinTg3Ue7aEj5Rrr1KdDqzrgDFDxNNihVz7Y2BuSTeXeRhFiyTniubPBC5oRL9DjNVQgpPpU",
  "key44": "4Sv6bJQEuFhi8GH1UYiE54mf447Ycn22u74jnN1Eop4oUAPZn6zdYRLyxwKwog7KVuEQFF5uqSDkxRhAiFeTAZjW",
  "key45": "45B3zP8SszypHU2h7k87xKfhtburdhHHFrV8HokgMt7Y28Tou8PXeNdxasKxdEpDdPb6tmMj9X4rLTVpesj1PKY5",
  "key46": "37jMA6iW9FDHduDqTmw16ZZ2eGDvWKXSKoYnyAXXu4F65KnWNPA11T7KjKSm92Mpey7UEeb4BBkN3qm5SRQTbFcg"
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
