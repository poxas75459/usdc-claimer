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
    "HpU4FJKUBuNWn3fLVeYDZ278S52uhvunRGr68VsArCxo1JwQhVCsSPufUFisP9byNzqD6FrXvWLSTSa9y4syj41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsXjqX5KirsQA92pYJ1PVNjXt1BGHcxBt69aNp3uDhz1uMbXmRDEWpjjQvN9opTf1f8nRQswSToEBtYvgwUEuYF",
  "key1": "2HZcQpqseSe8C8dSGYVhCVej5HbDnjv6qyL22WewwGCxtF1MTJ1hfgivjWQWWBs3MN1o6nVtkPjcKiNmyzGdYuBa",
  "key2": "2HyWffkPtbzJNpddwpSKKTo9ggx26fHKCPLfCUtrvY3w4ySGsmW96KvSSekwuCm4YBg7SGqqEe557GwxvsfHxeE",
  "key3": "3yg4tYYpZbTFDGvQgKfm8dMSNKZ5PpjZkbhK1CyvDxQyXZ62b8ShG4kcwScKoYF8qzfqokH6Ncx8CJTP19xTkHGG",
  "key4": "3t71v5b6WTwPwv1RfDEY8seGopKAtwZbLytEuuVASgJsHw92Udxv6rzC6hRzevjq85S7EpiKMBbQdMkuJpwDHKRY",
  "key5": "5WMV9tnJWyJZfnj1b4K3AqnWsmq5EhfTrwCoqyQo959XvxhHbKsMZy3QVjZdy38nPCP2Z2sCoXM7JtALLevdWvk2",
  "key6": "5kPSeA3i2WEvkzRFBYKVSuqR6LQ3eX716qpufKbGJ8yb8aey5voJQeQpUmLpVKiuWRQSQ4sNYCBvBiU7cM3km1ET",
  "key7": "4nsxrT2oVZCx1iExFujAwZYYh1VLPcptawrxtC4VMzWfD9dyPYXjrR5thCweV4JAMWtr8c1xbszTp4ef2PQSAkHp",
  "key8": "4Y841PzmrZfa8T5zNNxQBACgyK6Q5T3Nf3tDNPQJznSG3YNp5hAtWp7z26mPDhiwTfuK9ceqNkndsxKMxVKYKR2o",
  "key9": "2R81zQ4PWJerhNbSq2pN1HSRhQA7XJjyHU5uBVfkTTyBNYan7j3ehopvCrtCW4DqZnJMAz4vXxrkf9WjRjBSTpey",
  "key10": "5j8qeJ9iGRDSZRbkUgpefrFSPsU5prRX5Mk4ABiC11Q557EtPjMHX5s3dnVX1zE4kCDz8XimDbN4V9vG7PTFun6i",
  "key11": "4qJx2QAXmjrweTgXVJWxFCd6UaEkZycJWZRN9xQMhmdWWJ1aFUwSErbvFSuk4kYNBgAd9upZu9LyjxLTPAwDXtLn",
  "key12": "2NcZM6H7iLENBLKoih5SHft9AXV5kCMRsHsgaQNV7vkudxXQSUmAj4EYLrRE24jv8znksCa2C6peEpXSgoewSJd3",
  "key13": "2w4A54Qzx2FzwPVtHUf2nXNekMw1cY1gq8TsKHHjnTdXxXDLy3Tr1cbohqkwBGegUBBeo8JkSeA14EvSHJgMrvfx",
  "key14": "3msVPXtjBypaPxwBAQVQ7MBRvMCRQUjkoqcFWgjsRzVbrSUqrkAsVWzef6XNPRhbwQiYmRVyfVeD2XPwJ1eKCSLW",
  "key15": "YT5RGc8LnsqomYoJ76m6dD4kwsqd6Hz78vXeVMqBHa9TQTDCbKUzszdHAzZqX8Gtige4y41sog7RDVNMnWZMqLa",
  "key16": "4wCyAhTam4nutm9whAV4TMPCSVZmk5R5dyMG2GhufDDTq1tfUkgqLUDkddpPxwcJfZHSHqVCfwm3GSikWNxMYfsb",
  "key17": "5AU2D6eGGiJpWnDgeGRMD39AMYEWxSDUg8MzEHtYKZMFtEpaHWRAH5DTvFWimJ8AqGf7YY3Bn7gfCok5qQchjxGb",
  "key18": "N6oERJoX49cmj2AfyVDBpRjJZuEUqnvGaeJ3r53igpyQkDQpUCjFAVKnXYUCSJBGj7UdijDFMiGkTwvkn6nbvkM",
  "key19": "3oPdXiShYvjcmwqMYB73629D8FiWQRqFSEwCohGfF9VQw7e4YWsz9NZ7uPhh26U1Q57nHvC9uoWNVAftc4EAK4KB",
  "key20": "cV92Mmmqk3KLVnDLQ8A2nN7pgpP6aNKLGr7ffx4M2GbTsuFhNa5DYW3peXop5gHrU2WdfsaKkSBoMfo8k81Shud",
  "key21": "58cgd4mUdqqo2KwufLd4K7HaxEjRuaPsC93Xs2HxXQ2cQYsgkfGQQgJRsvPGi1vLuAFEdx3r43qoBZLboL6VRk7o",
  "key22": "2ikUgzznpieUAqznRtrwzG7RMDZtJMdqehFL31Um8rCM2fzNhbHFfreZg3ffTwaWauBqWEkRJ517CajfyZD5o34Y",
  "key23": "2XtR2aYAfK6V71aGwYT6ZcJmrPPskXyEMPuKW19eaqC4rrsVyEukFaQpNSg4enCs7njfhYsiBsvs5DQ72vDimgwM",
  "key24": "3Sxbwzg3wmqHe9BGvvrh1aotfE51VLBXDATKYdv1izGfjgBLj5JYpFZXSjkoZXX4fTq2VE2iPRcbxe6j83zHLY5E",
  "key25": "53qznH9xrZBhYXnbCLHn7ZcjEn5acFUaHW5RZ3LDaGhw5E571wMXbaDksCEg8VBKzPNGbh6QhuKeFjPG1dKJgrhy",
  "key26": "5inXVFjpsWnZ4DB3sASNnot1L8S7RbranB5nTkvZcyVwN2bUGwcEkhukUJb23tYsn9i9DWKjEGJPh7RCX7nJ7sAc",
  "key27": "2Z6BS82UAw8KrBDEquPGkUdz1BVLy8MnStaedYEB2DQKnZHxxBiuA8jSU3VtFM6fNpZyoyGR782v92UCnNpfFNsV",
  "key28": "3r87Ci5s2LFtFEjvLVFmFiA3LnDS2hSCNaxSyENhzB3FAW4wLYtyiZQmMqd7qEs7hMZXnKWd3wKjxFV3NdJUG1pa",
  "key29": "5t7Jf6u33p2HDEhLFBafjn3zhSz1BkTJMDdaR9G3DVBNRYLzEWwi77NTdEhRb3Tm2FiJs6L7z82jQfqD7ZkDvZfi",
  "key30": "y9mx9VQrktqAyzFa2FjgtaNGKyVHav2eQDH37XKjhmZeDMeaAzARnvCzwYQvu1mYXaA5bfrwpaCK2NP8w6xth8o",
  "key31": "UttZikLbsYSf4YxEJezg6y5ARUQ3SQxYVGF5RVK2cu4XsDm2ySPgQ83tJNy6A2FP87Htk8ZorZkKu1qCEmuaGXm",
  "key32": "3WsFcstiPV1r5LADWunzeLw9YCcnB7TTLxyJho2zgNAefQs8tUCn1DBZM11mCDq6AMMkmupivQD4TQoKdnt3EmvA",
  "key33": "4LzrYwDbRsNkoi1vcjqfzcUsVZMGdt9bYFo8nTjqqPQqDPWT4piDZfHTPn9AWv5A4avrFsKZiQ4Mxq69v7DFPYT8",
  "key34": "2YBHiCsa6N77jDJ5Wk4sr8HhG7G1yit2sgUcAktz7AZXJX86j1ezK9kDbZnm8WnuxAeJrqzLBN4Lp91n72EhWCdg",
  "key35": "3gxq6X4RpDWwH6ZKHEXWyoteaMPAmJ4FC9tgCEnKdMsyAoUE61c3YaWJPYLLKa75yRTwKxTveKYjvAEJ6pJQfugd",
  "key36": "3LPR1f5zRMGtnsJ9aVFjmdKY5VGnjk3eDUvjnLySTfw9SoZKufYDPD5UbZubVkRF3PeysqV2HwZoZGNbn3rd4bqN",
  "key37": "5A2ehWw471o7Z2mqjNjotHt7PQHu4orhucknHF8YWoG7G3ywYxRsamtkEr7eNHQnm1CKFUrLbVJPaYiPhhpmti6Z",
  "key38": "5djj1jkfhMJuPBtYxXnxjKv4ata5J73tQRPBaf8toMkmPc58SxFzXRWdpjcyNAxtLkmjeFEhGVaBRqgU6wqNCitw",
  "key39": "55sP1HsXfkNUvgVrTDjKUAwjmQ6J7iPbngk4qg5xCHJ3N5QM3SwvZpAYwPkk7Hid59rsPeSBvP5Ech35w4ixWGnp",
  "key40": "5S9nsqpoMLd48zuxsoFSQkCL72sN2B2mYKTmE7UxL9rjNjQLPBQS9j7769YDiSVbRJztRmWmojsJfFcFR3a4X4eM",
  "key41": "3XpHeTaN7gfHhwa7mmByhtQbvfeRbQFu5wo2A5UVs6QMSzHeujGhZQznH9q1vr9uo3E6a8Etptivnqk648HUuRW8",
  "key42": "47NYm9i4goGvGVBkmNu1haghjMxC9gyjMDSV6Hgh8dSbtzAAGHW9UjRRHFsiEuENwbUN1cX6pMLjmQwkAvSzoVLu",
  "key43": "2fUKoPRQ5uK7DptBopbSQbwuvuzygfPvkkmUdd9Njr6x34P71ypFX4graLDu3QE5jEroMTuwcFPPoxjFq6PrP6cX",
  "key44": "2QjuAsB46Rb7xYkyD6j9JZR7cq7cCHRsJp92rpax24zKscL92Jp6U5kpnHgAgYAb6snr8qD3VB9NHEsZZJssW9Gc",
  "key45": "3EP1di8BPRSCxLSz2LTGWmFsCkXKTmfEJ5ghgmFokLWXwUjm3HXbmeX6DZ3Rxq85Xqmj7EGuAXpZuqqH7nXeXkwo",
  "key46": "5RAu4itEW3wvr223w9iWRRUMRG5sD1dK3Vwus3NVjzHmsGrnMF71X9oe7ar2xUT9cKoroAedmZf6vEdzjUFfmBmu"
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
