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
    "4EX5U9DkoDw1BYNEC6iofvV44PSCY37JCXCnh3n3VwMWtes8x5FAz1WGtMbJt9uTJSZQfRQGWNuQQHQXrgDcAYtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xo5CaE6HhUGYSU4i6DCSbUsByns9UapyHrY5e9MDGbeNNPAo6f3B2xmGXM1fTQ2fQteQnpyokpX4Tx25QZPKYAd",
  "key1": "5RJxnaBputVwy9esXSFJKnGuRy2G8AU5ygnmcmFGh68ZpZEZeBc5gsVTMhuFyeFWPTuSaM8MCsWV4YCmPrMcqGKC",
  "key2": "JV3a6h3dnSJhisb5TinbupWyo2UV2yr8hemRmbezhSHns7hXVqfQchHVoHetEdpz3S1PE1LuUm7Gs4uLVcbr9b1",
  "key3": "3PrQf5G5JRhBdBqVL6pSmFW3hDyyEGNjjqNQMSRfP1FdCJsUhM26VjVbcYvLnAVRmjiwxeqovu3Y5da7uR7VzNXf",
  "key4": "oLGH9KLDnqrWd8z4EY2Td4QXvERa14YmT5zNZWctKciWDjstPjoCkpGqK3TGWt8s1j6Fb1vLeW3gTk9qwDoxRav",
  "key5": "y8aiHrHKNDN4BMrEUMeBD4Va1rko3DrZMhSDQSnTvKZNepFk5KwdGa5FpNBo728Swd3fArnfQfikuxJc4hGxwoG",
  "key6": "4XsN23kR9VnAevEFPLyELgtMKqCkxCmhnjwjTPdV4z4c5sXH19vdvs4PpH6DV8VogTLjAcNhPiqFNuTwxUs5jUgJ",
  "key7": "mbQYcYtamv99JdqQ5t7b4Ff2Hau5VvgebQZrfikthTS4FH13DTcGYsALNGRHK7FF2D7BNvd3oT39TwhTPfPtpQA",
  "key8": "veHFMnzQ4Ytgnukk72kedfXxfGUqNJBWkfzoDVvDRFFPQdYFBhuBXX1zexcqr9NsnpUFvtgL27Wb3ufk57nwtPR",
  "key9": "47Q4cJ1afEwidRmzDNqy76Hq1uP4i6K6LcXQPeZwPhFCCsrGZ3f9mF7eazSuQQZjCbmQ9qzPUnKcvWf99wkCCCQZ",
  "key10": "3HaUBQHLiTz4gEx77MNTkgPEKZKNnytsQvPSUG7t3mDkrWTqXm6P8EofTdiXuYyRVhnGEhfjrxSzVJqTohghSUVv",
  "key11": "5BkKeeNS1ySfwLrpGYTGryX2xFA1Rs2DgLzWPuuWVnVCrcuyy4aZ2sL6gokdkXVfV6pNoWAzLxJmU3skCbU9xrr5",
  "key12": "YGzGHvFfUR5Dubg1Xe8X7Tittvp7XcAxu1riQRA6BgmfsbgLaZVkUf42Y3EPFBv3Dz9ofWfh6L1avmjm9PNzKf4",
  "key13": "36cLbCPFkAcyWoreEiYeSt9tXHayBN5qgiKHMV4HwmFFxwD4NYuXNdwwrbfJ7ZHY2BFXbcZJzA9ZtQd2xyd4f8wc",
  "key14": "Chi48T6zRYkd2dS2es8UWNj4KU8b8XzzFNLphy9SuUE7p17ypXBftvmvmjYwRUgibgPNSC21ze769kTMG3aDoAB",
  "key15": "2Quze9oWG1nhrvXHcKshxiEwpE9Jo5sUeCFpXqNB9F6zvs5qsQD3YoufDMi3wzNXjSaPDTk7gU9un2si6Kd9ANAR",
  "key16": "3mX5f5tTxufwkFQxxykCe3pNf5Ya2RLgof1FKupiGrFYoFyC5sJPJ4hiidC2CHdUnKXPphQwo3otbaL32VWE5GpT",
  "key17": "3g5fF2eqDR3YDYDEZR6TP4yJ4GgLEfUTAw2rtmz2Uw3ViRPDaT9YBsgkxsfN9mqNwptiuYuxWou4pbcrFtLk8xtY",
  "key18": "4Qi7uK2uu5pJoys2npPTSDFSLgeZo3wABkxjMVgkK86uH7nULQiZfdDgeMV8f2XAte4ENXQPj4rNR77WmgumiD7b",
  "key19": "65dX3GQURnMvjzYypiPsVMdtwPxjwiEFwuWqeBUeEPktb6uKQdNPvmaQJ6pgK2WkPkoVsG5YK28Ebzp6rkycqcwF",
  "key20": "52Y2UqsxWSAFxnCJ6rVm3CF1ik5frTyLmJzQD6EjvJw6pvDCVmZjvJGYYU62KLMagbNp8Wg9JL2MzKXwPBjdyVdg",
  "key21": "5kiieF7e1E8i1Sc931URFzmNdkQAccFwBNNedqtzfzpJC5aUbDqP6N3WaCLNHuRZmYG5WDSExbERQ4fiYwenvKPw",
  "key22": "2J42ZWVRpzCGn4GiiaKq9VPugfvPu6vuV83DYWu3UATCGBz6NhUXVxU5yF8kZhS78d8B84iW3kV2m3PKDPR7kGP8",
  "key23": "5HWdG3rxXuRwk5LG3wPpH2L8xw4AYxheqBMZtxgfkUZwUm8CBKwCUFsSpUSeLLyA4FR23QRUNvyJr7cfeotmee8D",
  "key24": "3Ac6j7Sfa3JZqHQaZvQnSXPhkyfT4STcsqxsauFZKNkQFoxqkKzTgHXCxYFTkfs7aJ2wMpSVNJfZAmbcUNRwegiT",
  "key25": "2VgY5nDWTBLAAhXd4i2ayQvCUCbwcnt2QYVg3Ucvk95LDhEPY9c7fgP4s2eKw2X1JSqm7B4RqEuZJgV8U6Ze2JRm",
  "key26": "3QQTzAovV1ys2RqZ9Ysp259hK8gCtfnjnSkb1ykvbYiCXw17Fqt2P1ihbtsBXU1x1GUMy1BY4M6MzmxUSrXrrfm8",
  "key27": "YzAixUjwC5EgqhxbwDrEe9Ab4Yr5hPYD9DfTEaGaje1uqbz2fAfN3XERAtGsjZKRebam8pmhGygEofjrMPExfgp",
  "key28": "3R7MrhYcsMGcJ6KWMtXPL5N13ZZBMy9rSgxfiWD83Y9pQye45PXLsnAbvfZWqGSyNFhXiCiSwnn86E3ug4T8ADJL",
  "key29": "2s2WuSEbQzwGPoj1XmLBWjrZY7sT2XqYjbnzeMagbXypxuZ15cGbh6Ht7TXmaT8CERNA7c3674UV58RtJcgePxEu",
  "key30": "5JQJqm98fRpu9qEtMdbrUHQoCaXdD2cm5rB9SPUEgbyXjg3ftrGUkoShkrv3Pk2xPjxmY13qdYRRfQWxRopbLxEK",
  "key31": "zM9EzwZ5N2NfyEFoyXnQzB6EeAikGgv7piAwrKsW7goyUnM98HWNkQN2qJwKCbEBiWcgBwTz4ndZ4tCmWJ3SWh5",
  "key32": "2swhdABiBkh18pfVqzweZSNcJw4LVwJFV7kN4SVsxLoPJv6F7WB5Vn8saiW99tm47jyBsEhUgWdps3v28DeLsDku",
  "key33": "62smfkpUcuEkgYwQ5WDjHEbwv7RVbGeHhEgh2LCbeKn9MbE1TCjpSddravRenJshrutypoZXmBuC7W1wdZShQbPq",
  "key34": "32dALkEXBi722qJ6RrTrtmxkLvikQggyXWvzgr8rXt3YqUZpnyaRZGPowiqqKk7m2X3ytnCTyE21TgDsjizDuNAY"
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
