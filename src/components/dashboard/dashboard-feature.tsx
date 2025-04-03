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
    "52mrYe8PfavwXN7ne2x4Eeqay8VZsH2oaWDzTTRpvVkqaAQz1jKZaMG5LQJaP8mswcz4Gh7cWnpzpdnnEvvrLnok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uU3xRfCbUbLXzBSRxSqDdFZyrBJCuj6wqdQK7uwh2SW6MHY53BztNCnF6VV2g8btv2Gs1XJT6zFxVYDQSgKCWfp",
  "key1": "3poLKwVwgJnZg7G5wCb4PvA6bXru3ZgUA1u23jEhNgWz3SPajDHezedrNhghUMADyK3bphGLMRvnfAhaMAwfRvUz",
  "key2": "5yxnkFUA3wpe3rqm3u36ZymZnEWHQYbbaj2t2Fq2V2GFBY33k8zXVC4NxApxiVKci56FREmkGQRXcNjxWpnMjn6z",
  "key3": "5Htirq1f8kryZBkJmXraRHz2AZjSoUiD9ARWj6L7Mkyoto6FqNHz3G8qQQZyz19nJVf152yTFVC4oArKps4t4Q2c",
  "key4": "2tUGaS6nDpEzF7Adj4azSBrHz1ScgKCYFHgr8iNvB5GVqAqVvQFt98xuqWxqAyKt31foCDFNEAt6RzJi34GTAWw4",
  "key5": "36TS15prkehusZ1mTdYKwFYn3gBRL8SEs7QxY9QdQSt34ZtTbSkALgMjGFD9GNSHoejLjx3XsrwTtJjLM71htwmp",
  "key6": "5wQaHUb7abHXaBcuSxdqmDf7mRDaemMdAgWDgEczNQb3v7aKwHM3AUFd41Bvc7exbg37D3DmNSn3RqTuY1hjVgy9",
  "key7": "4gXZ3DTDnFvbK3YsdKqe32yWjL7MbbPA6r7QcoKRyW1PSQRWPCt9rpLNJ81v41aa5YacAw4bG8wkVKubFBDojVWq",
  "key8": "5nRkMusZT9QqhnUWhr2A3BRGKj2XQFhC5Fs45fo489K1Aqq11uZRMSugCAF11dArmmZzNuz75gyjdgqNVgBEmCcF",
  "key9": "2uKeFsPa9b5F7fPvzkkM64LZ1TN3NXKmJZJF4Ge4dH8XUuNJFwe9SsANiLL4APqvFJ2r3Gkni9Uw5r4zprX4WhnZ",
  "key10": "2TTrQVMN4FV4TowxPgNXMfWCSKv87bdghCnvHtAdiRxGXgXQf1AjF9746zpsRN7oKa5cUkjRQSZdsX63qD8UgfhA",
  "key11": "ceaEgAQqYN3jDxT8bwynJPdnsqxFhAakdL8g4mL7DQP9R8SvU3d2qbQCmA2CPxZMR7Co8Uv8CWqSE4oY44zVVW6",
  "key12": "46oRbUfKVCoHJcnx7L8SCighCfLyRQBqK4zLgdnh2uy6kXasxPD8MG5i4h5rbn9vbcGaMKaMFiUSgXuS7FFfxNFk",
  "key13": "3NFrSqZ8DgdUgoZBxeEpdB6t8ZE9XEqR4zPo7kdifpZL1BxAd9fvv9YcfNdNv4NEwm87SPx5Kbiq8tdWKtXNWnL5",
  "key14": "UMBxkwcj2pNM6zwxh8ZbNKvx5SntdXc6EHnvNTsPEGCGZNNqq22BEfgc1TFnJRHDWotGR2oBWXBMB3QuwbTizBR",
  "key15": "5YgeujPZEKJdsFW3369QjjNKKyTHripXdFNqVuxKsjCfL5YwpWjwGFwfBnYWy2bVyz5wyLcqwG4keoBmnnegxq27",
  "key16": "3USNKzyq2YfsSFCFc8Bw1PT4RXLUijSmmxABTGF4x5SHFEPNbn2PLfuXD7spzJEha3G5z9hhffsZ9f9oBptHmnPk",
  "key17": "MrumR5LLukcPwsoKobh5p4hiRXJzq9hvSb4PWFJTRrxiW9jQ7YVsWAQjvzBQtbEXr9S1oKnszD4RfdBcuBzcmSe",
  "key18": "AaP1zzq17zmWro9U7FcPV1Goyvu26MV1pGinRoECdFmJNzGYpR2jjnm68WVkQveACDtX3sLcKAo9t9cyiCLYzgh",
  "key19": "LHMr5iSoddawVRcfPy2sPVrZqfmN9z4ckftTSaAoywBg7oZ8dosLX3Hurf6UfdXR5maU21yvaL6ebdVZqRqUouA",
  "key20": "3rw4gU6gULriR57jypafknWmUb2hCtoyW6Vc93R24eNQckDWBRiEfRNfDZbLCX25tMPAmRH76vYK6jP5T1E1MsBA",
  "key21": "21FYSDsGNGuzgNNp6TPjyJJM6r5iDRc4aDS6Equd7qU77EEXR3FVDXe9nuURef8jheUoWeGWRex2QPZyDyg4jx1o",
  "key22": "3NYUWM4fHTU5tRbgPLVZgJnxaofdLYQE57em22CBbcwycKZAaBNQW2x2QQNuGmYVTd3wxthapYST5221RzZ3XunA",
  "key23": "3CetxcZ3E8kdaDPXUETTmprKMNawbxaVQoDxZz2DFMxbx6Bi6bR7vaeW7KN6U7QvWWGXGuEtgJ3AR134ZTU55LSQ",
  "key24": "REi9a7uqZX5GhFxmLXRG3BEVfKrjZv7cufLiX8A5hmheNBM6LS4YNS3Zg3D9rAUG8xFXdP7tcUHMzwtHPLj39aG",
  "key25": "3rXT5Kjzdg6uSnGWcuUsZ1o5KmEagPHUFgzuKFuJPLNwgxNwGGrY1cQLNxSYni62qzDrMmnbbgkwkDCzZEGWRusx",
  "key26": "35yQMwY9CQHhkMUyG65tcHt7VGUuYYFz89T5ZLwVohKZpTbDQGMBQx5CCK4E55m6vK2iv1EJZPY9r5GDLScJFv3Z",
  "key27": "5N2LEpw3K2PX76SJ9yR4KBDqjbiRMD5WX6qz1hSuxm91zYQjYcJBqofnk2bUe1GN2z5riqMiRVePU3itAVKSS7dk",
  "key28": "5cLYrXqjs1NbCqeURufUCBbGxvJ7HiWqNhVTAehJ7Gp1R2UE9EPPo9KUkHWxX5WSch5TT49Th2DbXnivVgtwj5Ca",
  "key29": "maCScieAZcwePpptSBvuCWgAMQ8A7ntLo38eXmXgFs1jHxmRKdKgsKHPNFYxiJLuqhpQ8MFyRTbwHCeCKaS3qwB",
  "key30": "5RyopYt1s5mzkDWwJC9BL9mBiM9uRN3gHDm8bB788fyh1rnLgE8zKTy8qwL1kHGsnV1xyvGsxWZqz9jL3HrQqgR3",
  "key31": "2WQPTA1tH1dDe4mnzwm5fNjWZy2s6HnhQ9DFt4aAYwTHPbrVsJ6FdDsyRN7GXBcnrnAHrzRnepFfo9kmgk2bdKMV",
  "key32": "38tsJ3Y6o4DZVm2QF3pdNRDt9Z6Jx4VzU2Ho4kdE78pkXMeTdRxqtR9XXnb61BBSeoqAzfpuWWHxnDqtg4bRTvXG",
  "key33": "27PUh3QC1wETdaQvkWiFPb4w8Ay3ENXvhGo7HJ79qdvCu5NT5FPkr4ybaTm6tdLhJfkh1rU8yfUe5G3S9fS1vk7u",
  "key34": "4PVRiDUGHzrsjV7n5n87dLqvYbgMhXVdHmWnQqwYWgt6J2hWje5FCFb9LppMzeLXq3WkKojEntt5UNYW9vf9aGzC",
  "key35": "5eAA19GXzEQqTKdT7BCiesdS7ogAHB1pEBPHhYdW8GzVAruEBa6SQBQPg77fiJKuqFCWXbZidPQqpNKhGu9N54Fr"
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
