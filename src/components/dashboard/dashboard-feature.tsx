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
    "35MtUJXYVmXBd6QGtMopJVsNeB8esQ1h8hiKmn2eUTtsDrxEqTEZKtJv1uBFoHkrdvtnmrBT3ggLmHTXRcE2S3yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uLeynXbpTW4wW2zMa73TAeBRUXpyhvtF6cM4NPyyBivxFb5cUDeYUH4FphNW5iBoM863P4Nsxdh97c8yGfwjdsQ",
  "key1": "2m41cddMz5rG4GsrpTRigok715fKbT91SkJbf3GjHK1B1ScBurrmNFQsFcK94qrE2SyPp9k86bpkhpsKUrjekQnF",
  "key2": "4geLByXkxsPQWB6kFLZUr4a8bxt6KuF5LUiVDQynPaTTqtyERnCtHFFg3uMXPTEGQU8g8ZAhuj7AfMPynSrWfRk3",
  "key3": "3DjFbMe8TSj4vqqpFZfAqFf2qDaEcQXYStU4DAxZ573GjxWVVqtqTc73VdgGwzf3UBJToDA3ycxxXGFjeDf32sfu",
  "key4": "63aBuzrJYQ8TTeXs9tHaekG8wRbNaEgrvKb8p8b5Qgo8e8AsMjzpVy2A7WcPvPtEex76eS3UoSVB39z3hsV8VjnC",
  "key5": "VRAETHBbzdvTFQjqmPdT6CF1Ee5wjg2gAs9PRSwsfVqUrpMF8ZaoMpVMQZUryqxdngvdqAStqzGM5c3WE2FPMRt",
  "key6": "YhANn35qZsGBrqEQfPeDJsWUWULc9fYL64BjRXkruXgYfwjzLyuCvuoMYZD5W2K9M7H6r5MWHFTz8TSdAzseeWG",
  "key7": "gygiUkujgCTxt7bgv97opGgsutn1AnPF2p9uYMFkXMCcwimBcy3MW7UFnJgjvoiNkcnMj7DJQbEwhCcZvGwkwXf",
  "key8": "3ezxJHhmenTkAVs45RhoYWFG7GnvHuuvVFJZgpZmJMgSPvA5vYaMN5dgHNSE2kL7PNeRiytpQo6p7ys2TxrT6noN",
  "key9": "1ne4t5JxJo34W6LbHBHkSLqowNEd1MeQC95ke5WLzB6vYohhpJdELgE5PgDzGPyWY9xeMEQ7CXJK6c5pEyUAE7J",
  "key10": "2i9vSLTcFqkf8DycLKVYbdUMCexTntJPTxQ31iTwjxDcFjwoZDpoALYPeBLyqntnv6xYZ9E5ZHmMFHQk8gKAnZAs",
  "key11": "4TJ9kEKyxcQ9DH4qp81WV81pih3UJsURW8oCwchuoLg7EdTdUSTG5HwLjTU6qHb9wgiybM3Qa4TsQGYiWfsnR7zJ",
  "key12": "42rv1eS4grU8VJcaeZnCuJTnaPv6YbfaFLmrMpd5aBujVodWQuLiNTsFr3WeVosGjSw7sMzaGyHtNfax6AkT8AoH",
  "key13": "3FYFw4g7imWnjQhaTJXqJrbTRnzvbX8gaoHCmuv55acAnbcDdwHeA9qENjrZ5zyrYwUwihwsct8Tf8SZn3sT4CZj",
  "key14": "27xLkJo2LQz4MvfiFxM2prNL6YrjfLAje1SDd1wt3Bo9vyYDDWVefgQD36k5JiybfRt9NWuWnYZZnP2eyg12U5Tg",
  "key15": "5FRJ7qfRknbSndBEJZyW7sjW8eRqjwCA8EEdRMEQdUBAj4teSrn4pV9yi5s2aJfuCQKuE1jXja3WZcN8HQrST33r",
  "key16": "36xLSPYFSE2eTSQ4U3n6rVuPQudvCLDBLZrxAmNZQejTHHy888z5p5mmcoM4wkLYvV6K7Eiz7TSvP7gQzpquaFtZ",
  "key17": "3dZKWvQPtopD9xdFP3hefyeVbt7MSVC257nFpZDRdWgkKHxbmgz3iE5mcunzMi8kqttocuRxVy2Sqr35BiAFK6E7",
  "key18": "2Jg6ZNrBzVKk9S7nLPPpPP31v9d18v3DdwKNTtNrFRLg3nmrSsJhR9HSewgPUo9Ue9A9ZBM2VYnomkK9qmtDbrcm",
  "key19": "38G8foVUdugfZ1fUoffs6sZ3iGFCVDyqjLA8GutMP6aTtmgrCc9nD7VMkXRswnEYKLq48zeFEhH5FmUbca2vviug",
  "key20": "2XGUpwrc4EMc2d4aj3hbWwVxiHR1i3Ube6EFhDFhhEbAjzCfRVgfNfM9SSBBZVPsU6Tp33pB6PkaYXR25nbrrYUu",
  "key21": "3swpZQq1rm4TSC6VnNLyijn5kSmiSQA6V532onQCCx6SConX1C322FUqvYg9o1oVdMMDb6nyTcyQCgKgrsQxR5K7",
  "key22": "282WNQGffg9nyEqsfPf5ig9jTLMW7eqpLG5SrZ8McPu4yfT4B6wwAo2kfK64SPvAzfiMk4xecsTcAvVTQ91E4moY",
  "key23": "3Vgm7nHdVui267zHYC4SAb8eu46NRgBJbafnMrjUtXyXb1ghpwDBaYwm4byE3MvSTyVTqvoefE4so8eXV81Xos1f",
  "key24": "3yqQo9mjGVa1WXo4pGKXDzE8sSLE1fGLoeYX7DiXZSYdbhjRWSX4bUBfSytY5vNqsq7BkHt9Ny47SHeJxxHLgZ5e",
  "key25": "4AuxWzccKY2f5TqZUFpmwReUEFH8HpvnsHsREAPXpbS3YSpnfAXraRyCia5pykYBvfbgrKHwoZA8MgvgSL5SudAD",
  "key26": "3DZ7B1LpK4unf1LJYTL2b5hvuFkGVyoy9PVqzPwjJE7gbtGvLZPgNC6926jJ9PE8thCEFWGGy7zfhZkEvAgppqR2",
  "key27": "4dQXFyTSNM8Cz9G2QaxF9NSc9c6YRe42ABUyzykpAjiFXrBK4uC9NkDW2HRA9sHkFNEYAdv9pKR91cXP1EU86yLb",
  "key28": "b855QcPKVAokHWx2tUuRp12FFJmSGPwNMTNG65YMAhDoEFnbd7zPmyCv7AMvEH4DUitJufRifprG7kgXszDddSh",
  "key29": "3EHEQcmBdAQEaDz7388tCNm91f1DBWGGgJwuoFm6cHMbN8AybeBmpmTq4v7FxKjMAHaKu3PufDV2xEXRgR8b9RxR",
  "key30": "2mCT8yi5FEtYdDBbFnAh4R6FM2cViyAKGodKbfMY77sR3e7cGdxUgRGH1qUahh2DPZVXTte5Hvk54dLc9rUipAKr",
  "key31": "4xPWgg96nwAsuT7ZxHsufdKM4RWAYvynrjNwdzaiMtW2oqRREFosEH2VBpCUccJQtSZRr6AVmHYAuT4gFnj6XnAo",
  "key32": "cyzRrC1oz9SnUZXCeofD27QhEEsrYP9Tj6HCp4XsEkghAkCPspjvYG8Row3p3EkNLP3aZunYqBc6k82VutxhWYo",
  "key33": "3XK2MBDjJBaezUuZsD4vKNEdBChJSfPcvfVYJw1Tkzps85c5WcboZxFF82KQgJ4HsKLQT6h1CZweNsEzhqcXBxVX",
  "key34": "8mn3bsjGfFLHxULR9JzsJawLkDhxnwnkUoJZFEeNSLtF4XsKfKZpbKkxVPFWpg1JVrxZbQ8oQJ4ikNSwLjXwdRZ",
  "key35": "2MV1jQGfurQ6x7cbT7ujMt3TiCbWgWK7Npztr2B7ZrQY3Z4cqyHgevRo9bKzrWUgd2qVKKNsqNW1wtXMk6Z9FY5s",
  "key36": "2QN5foiWJdzmySNsDRffMsur3zcsj5fakib4GfpbK1SdVvgNcZd2bKjhQL7ZFs45vAzmwW6WwmzKhy8x6F1dnNZk",
  "key37": "4t3t41FLhWjFxKCUK2q9n8Nc6pjitmWaPGn9URapchagJUYkK98JcFBSVbCJiApZqDwBact2KneEBk5rfUXLAGK5",
  "key38": "5rAWYPNAyoDdZKcUyi9gfX57gap924AFMjBPqwctQ7qWvqqyCwGB8q1cEUeJch75veM9jvFtWpJw6pNoN7rhwsA1",
  "key39": "44EBNSQqan5ecKpMcQvcHDX7tQ4xa9ft5oEZLPjdPR9YRfXUpZmmtxyrYYGXZTmeDbfU28CccZrmircjQB33zS2a",
  "key40": "5eW1gA6SX9TG4aUFTE78xCkYHB9qRg8iTjNzcgxXpENZRjSSSo6yV8JUbijV9cxm6rf9JBaw6T4MikhKSys9NSWB",
  "key41": "2wzBkw1CSikgyA7cedRUzGHcmuogifT1Gq9o9JEe6sFRCuRp9ng7KHZwReBf2yuYeQnEq9xDTrygR7imt7qF7FRK",
  "key42": "3qxjhxC6ojhBhHJfNnp5m5aP4QtztmUBeZRAHSUQ3R8WdAdVZgfdbA2UXGadXytHSu3Zz2Rt3F94KG6epRrgkQYF"
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
