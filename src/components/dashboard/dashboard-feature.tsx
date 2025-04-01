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
    "2ccb6L7uLz6Y6qUCAHjnbX3aw2EpXQVk2vtjHuBZc3nsGQiZb4Ng9J2Bx6YqVkJpve2YgsmMEVq94naJViwehz2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rt9tx2oSDqckbAtw1E85NxkbyYgLn7udaME996BsRyYRj1yQrBw4K5czJAqiRq9Prtkx7SaqnjECtrx331uoH26",
  "key1": "64Atrh1ocEnRfiHVhQMuyuaqqur8gFDEAFdN7ahaeQCg8tvmWz3SMZfAxZ9M7RybXH3NP6CwGgHBeR8RWEUZBH5o",
  "key2": "NRJjrfUD4MbdKVQHpWr6JG35YnW8Pu7rKcbNP4eBkAgriYHpBhsXmk6YUGvKLreBcnkbuMDPh3LpSAchox4aUdJ",
  "key3": "3XTDEvNLWEVno45WKk2SX4b1ZT2PLZeqbsKHDsjXEmjm2nQXWSaZDdhBRif8b1LuJG5YgQdAFHd1U9g8n8BFcPgQ",
  "key4": "Frrea5KxJdy66wjryyDZUL1vx1gt6biMEaVzdYVV3jjoQhb2yXHVtRPdCQX2d3e2Gtk7hfGDF42iCzG4Ezu3mcC",
  "key5": "2Q6AmqRrgEnoBDTFohW9df4EfvoA84f8TGVgCsw2b3JwZDTwBNeKYy6xajjXFt3KwhNpmpgfpw5ZvbWDc7yCSBNY",
  "key6": "64dsEqWPNAYuD6mCPzQ2NLnKw2opnRLZbhoUyEubxcGEVHV1B6JHjFNQLWdNK32qiAEpHLkeKLeUhNgDfApBgggb",
  "key7": "5butyVxTLRKkwLJpxF9UUcn9LcTVUxaprejwyKgzcLdN8rPjCqFHRWdkCmXKSfLVZbDTiiymJTDJFYRKaTsFLqt5",
  "key8": "DQ3C9nrszQrMxjS3PRtXt11HJV3y7ue6vxCwKAH4sC7UgSPHk4BPjLZeWRbV2kpP2qAzkzo6fHwZB5qutCdRBYV",
  "key9": "35dRP8kba15hCEtvqssWYLMBdsLjWk2PJ2Su8z4oemGqbzX5KbkQtLzpU5sqajLDJ2GXmhj2KpJ8toyo2kusxThm",
  "key10": "56o8rwnSihR46FtB9xQiTFZ2FBtRNosXjtxtiFpAwF5JWbBeDcz1sZoJXeuvB2bE18HddDZLdLeZnDyigvY6Q8Vo",
  "key11": "67NeMWXGxCU4DjWXtyjrkUt7wUF2bPyiVEgHUoszutbH5CdH4rifaHwhagWmg3zvTpWqa4rFFrq7QfnqJrbLDGsr",
  "key12": "22HqCoen4pPuf2E3cESwpppPwWaPFLAV7oyGjFSDukREDUsbBg7x8zqBwZftwPPdEkUFgsncwQCZjdv9JecCG7Sx",
  "key13": "4qK4KGf9hEzTkdd6QxNBPxwco8EFLSbU5ZuGqPieR51E8R5pQ6tEibRrVH6HT8RDkiH3SZNzYoUYjrzrmu9VEwhA",
  "key14": "rBFZDHNnqPUyGh7cGLAA6mZ8YSiJwqTCZ1gCGZLdMYVNggNKELpJLn5AAvXf67P2jvvF46jLhcD35aLGZ17pNGU",
  "key15": "5FkNvsscRA6nwcgaz4mARsVN8cpxyZUeYFZfSUfSkaJooB29ekFrBqHKoRNRXpfwzFZ4C1wj2vbXEZTUVPGUz1uE",
  "key16": "4yRFM1khwSvVyCnpJaXmgcmF1x8WN8AaENyDgHLe6rabeW1fd2tLZ2j3tN3AAEUc22WmxSXSzfhPPYQa1oQz2ky1",
  "key17": "rgE4CHrNDdajPd3qQq5Utnjdzf7bKEsCK8MjbbxcdhnXeQAgvgQ4G2HUVkxLspjZVgLtiaFsWDuZ45CnCwB2CZ6",
  "key18": "2uMtGDQrQWwoZdxK1vBNasPrdqPSY5NibZaQ1EAH3zVcvXSqPoyWPvj34ctVvUUjyUJXtvUhNtEtxURaQCim1FGW",
  "key19": "3e5C3BBqrEFxEL3oK7tzRtFfw2btZbBinbcPpu6cPcA1tG8S8iYns9UkgqXvGoh2PknJHXsroYMPRWvZUmaWNqJi",
  "key20": "3CHAFzqNPE1oLRA2i7a94a2ebDyR3RyC9CXaafeh4sHeYgx8B1HHXUxou2q8jJ6CApkdEhYepHKm4JfxAuxZa6Gf",
  "key21": "5SZaYztqqnWB2EenaKHmsM7ucsmdiZCME9mNPr1zjUt43MfUqDm51CLyVnE2SutuRZ8QwpXsXLfwiuuay2Kz2Vuj",
  "key22": "5kMyzPRD3PmxSSL3Fcv92bXFnwKPB38yEsBuZCS1dH71oyVzFcgRkScZJa6EcdbC9pXANZKM7CET3qKMBvn7PmGM",
  "key23": "4N3bj4cqwNvbohxuFzsLHcfQiYARn5Cx6bnLqmLTkNrgfufAte7Bn3q9BRV9iL31f5JRqh1VkQq9GiJvGzGNQ3VJ",
  "key24": "62KR2AyHDCrT1m94mn57LNDAh56aeot29nAYBuSp4qCHRJLWnjkvpsPrAqBwXAqaLGjEA4FAFtRcnEGTq5jEwiPu",
  "key25": "5bLgvVS2gVKDa5S1jyAhq6XZgRkZCG3fi27QncRXSzCuFPhXWADm5Mo51bywHoXrkXEgbzN2wacFSZDoJoHvhwnL",
  "key26": "SJgDyssdD9xvwrYaytF9uk9Sjr7fQ7gpgmaAJCFN8YC1JKahC2JmAbUmCBQXdc3S5XhtfEDEoNwN24jHwJqyERh",
  "key27": "56THLtNJy31ZkpBGmcVLzKxW7xVbrxQK7zKy6Kc9itLgT9YakfQzypUxhYPJspYhDYJ4xPomu3EAcxT1iwcJMMGg",
  "key28": "4BSjSiXvRCoRtrQtMZqhhxdsN8MsKtKtFUWeFK2H69FGWp8n9HYceeZoNAfySwU3chhihxfn3f5bS9t5u3zWmZb1",
  "key29": "3ty31P4vm1WX38DCpipThS5kMyKhM2aUho7YiDyRHPpTKZhihJuzVdfJAHkDkfCCSWTBP9GRSvygjvwCPncLmgFC",
  "key30": "28BRTag2kY2y6eY2Gsizkr2t582YJH7bvDDWWtg8Rd1LKW2WZo2aya4NZvYGLJXsUqTyPD8ACMsE5Lren9LHMwAi",
  "key31": "2ETxY4bcE37Go5FSgoyi5nYnn7fw4u2Y67B8a4LdL76EjAokyVvqdxmnFqjuHBAcSgzyqkif3vcCmu6VPyLBM2PC"
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
