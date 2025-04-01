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
    "gCCMXjfYaj693N7XrKhngRNALzXpFEugWwpSbm44G4i1AymMitdWn8dNDi8hJwMyZ2nMsi7K8UQdBKgWsTigqs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V6UTM8BRbmvRwkzcyj3mbqkgZF8zfhbanoqETAPongqa8hTpPwnLqsfAhSJWU9XaQouBdmVZWLzsMKuQ8LHQ2mR",
  "key1": "4DWgLDB2sHjANMbhbqy3PBD23ydFZBvw9aYe41XFnLuFy1HCNiZ9WjYX43cqpS3mmD8X1pkaRwwPZYtHm193d5rG",
  "key2": "4jxxCaXugjgUPzdHE2iHW4RDNScM2Qhn6LYb9UAqvNaaA8pG6sP8nUWSk8pPWCLLui43igPMHBbuhY9gzmXLDfuR",
  "key3": "ocPMAXzgZRzP5aTmehzHSyfkFMAjMuXzT3go6NjvNMg2jfkQW1JYD79cNfiezpYL5RGxJx3VaW5HWskoTvMiabK",
  "key4": "48YwKDkrMH7dMMka27hcSENFzHQ77mCqbqmUhgqEAnwtE4SyB9jLxTUcwM9chMvCedc2vaD2Rsxd48maCwcdgwps",
  "key5": "3f2u1BvSFnurj9a5mhaeYRqr7ZZH1tR5KNnRYzH2M847XkCq6RdbYpm3dufUTomEcQmyLSL7UGKF1aBwRj4VNxjp",
  "key6": "5jVhFkhiHyYhGs3nhLvq5XNAw281wbtZvGPppbDheCPNGjtgykT6jrfHBWpG5apo6wt9i2J3e5MaQZFA1P4LfJt6",
  "key7": "65Ns1ZghByGypY7noB8kimQPeJUcy9ATrjN5eHuYUNabgccpnyWmcNZ7y5J6wbosqot2zXnmZUFeQy1LBYE6GH33",
  "key8": "ZYsyLRXr4HUhmd45MNMfrwdctbCxeFRmi8SKWbn1iSZxfRNxWuTRSbk9hTDibVGzSF3ZVTyW2UJbbAonsKrVcGp",
  "key9": "55keQTUNsbJpsbYV8LF3puyQgPyge5qpJ1KorXoEQiryEXoHgxY9uHBjcANG3EWAKL2jDNXCRs1e89SFjzN48X1t",
  "key10": "2CBW9iz8DWviAZ377XY7DCSkV7VkdUHdqowgeDmiRRcvtvpBbJkNefQg5U4E6BqwQwSVSR84XPBNi61qqQR2s65g",
  "key11": "FBeE5hxKAUnspG1EaHCZ11B5acEQt5W8wtUhh9VtFDSuoY1NCuiPA5Ysbr8Ga2Dkhto6cnM19E28Y7QBTvrS1B3",
  "key12": "4BSWyMKZW15bdbjvitCiJBLCqi1X1XNUjDTUG9gf3nWVtxhqgpLaCi8J3UeUbzJGtbvGtGLnkuMmp17RGrTZuUsh",
  "key13": "29x8eeNkDN2bg7FVWduqXQ196Q6VimETzf8ziANbg6YV7w3WhajTa3qExLXdSmDK51GvqLEyr8FfXwLoaCp85xdg",
  "key14": "4h9rjik4CqUvid2CTKE8MVEpkhqfaj2Hv1v66e7DBngdDkNwMrB1z1Me895Z7LyA3ucUXj2mcYoTP5CW7CU3yatp",
  "key15": "4uPaRJutxNjt2fzq2e8dfTYY9sdcTR98ASzWQX2a2B8UnzbFJw6mC9H6H2zqabURFuM2KtUKp2N8yX5CGADtYEWa",
  "key16": "2Y8MF21rRj8kuosnbvMh35cFzNpPErmKanT8HXkUJZbikKGW7haNv1EjhvkqPaJjd28YKvzEXwZHJvddGtH1qha1",
  "key17": "4gW5PT8XPAVJFny7S5MVi3fdQpDCkcbQkjwVkNa9D3awGgUhZuPkEakWSWKVHmZmywRxvAkMMaQFSerGduzhhhaW",
  "key18": "5NnjXRGpEqZpV8Ut5Mynruy9wF9wt7WFDY28zkDGr7GwcC41Cd3D9Zqx8ZwrS2ZQSsKm9T8wrt1aA4GxwXyykoUc",
  "key19": "y93EmnNtk6Aj1AYRzaCsgETRdVPy2LsgEiyW3HPnoSPhrjdqq8JMvqsxM3yvCXm5bQsr8eqgRGjiZyH81zRympK",
  "key20": "4pu7rJStkHAWmWzTp1BVCoM9shyRWjyaYkLbQNxh8CpaX5v4SkrdujmzBUxW6uJeuYaMgLhcCBNLFsut99kgMBrs",
  "key21": "5CKWXmD46L1esRMQYVguanjQtXzBuhA3jknBANtqf2rnfpCrTFEzce6seSWQv5hjHJAkpUorHfJBbTW8ResBaktt",
  "key22": "2Y3AD8qKroUW7xbQRH1mLdTZqDuuf63Gqb3YBUbeFLzPKwtyMxij8dX8mffAuw4AmKiPKZG69gy2tyo8hJXdJqR1",
  "key23": "4dm9JjuLF7KRRgagDHzhNsv5n9njypNB6cuWAf9VbMqfmUCT3ZQBFpEKue2zVgYM2QQdaRzkYV6UHDygKLnUL4c5",
  "key24": "5o6nKdtEVv2WydRC5VnP78M9YzT5DNtR8Y7EDYb4K6KUZ77SVpDvXU1uGM7JEdVWGXpZaPM4aihC13KiWSxDei71",
  "key25": "4JyUirgGEnwNuPmcBLwK61qKSLANXM3jYBdngvq6x9Mej84wXwE2zq83W9DdAmUo4TvrqR1us9irNKckBP4eFbQA",
  "key26": "2qLQGA4x5TGRSzGCNommuprtVhvCyo7BMe9HJY1Zmgw91M8zGzpWPUuCh2YRGWUcp2bKcdFcMjgUfoc7B9RFxmvE",
  "key27": "V78RyCv55WAVKDTwyVohK9h3pS8MptaCNinJpkMZwmFx5FFb1kN8MSe2a68hFwyHxYo22jLxsXpexnm3br5WWFc",
  "key28": "2jjgZoW2CcjbhTSk9vBxPRjWtqLWQaiRJP2vrS3QBRnwj95xTHqCwb4HWT6ewwZdduSXxqddFEAYVRXBeWud9XXQ",
  "key29": "gqmDGwP8WcQLNAwz5KnEo7z1KsSff6aEpwWr9PU7c24EcmWg9BCgG32XtfMQktNpich1QrJvTvyo9wWmzV1HAHX",
  "key30": "4Ci3s3UudPAjkaiuTrFmWEqbTRw9v9ivUDQKKTjz31Ng91WqyRRYUsYPPHQWVgyY6diTTMk76cKR61Xu87vAEbA4",
  "key31": "pT3jf5pdejufvYzQWaMaHEFsjUagp7oASPP9DETzUMbfUKdrTbt8RsrPbBusEBSVEJcw8Ubypre9GbHwfZSDRQ7",
  "key32": "3fqgHfprwdnnaLmE9QYiXot8RbdwePKw9tsfmM7EvASeF4kbGyHiELhGUEfPATZA3GAbiY1Ze97jQ2TueYWnWQpt",
  "key33": "QSdc2qAVNemZBsMcDWR4DkZLwLBDwocgGNqM1EFHzTg5bxbVhJqV5qWz4q2SHtGa3t4j42Q7aXup2zM91n5HTPX",
  "key34": "56NSUGiHCLnWqVk4utcRBKewprtwtzwDrFzDAEjos8wLikvVxEyYCZeSgAe8wkAQKecyvgCWhmPmXUAr5Tjw3Xfp",
  "key35": "2w4YH4NQht1bMHecg1cADvLZjgjrKa3MqqHaLhAAMNBK4bHaENKYYSNT9piQGGs7gAR6yQXxCJXT2GPfFcVZnY5w",
  "key36": "2AYziqn2BTrJgi7j2dAy5s9EnYyMz5wJFgnerMFJpJn2YxnovRa4GEYCRUYQuecm8y3YMP2Jk3ri6kiRPRLQy8ye"
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
