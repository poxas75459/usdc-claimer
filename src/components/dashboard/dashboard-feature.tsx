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
    "3Dp7RJJFTroRbjWmeg1UsXgZJmuZThDDR48TJdHsKAkE1uvhsRbt5hLoe75gNrtyKTHtBwQK3jdvMHweP2b7espm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6hmtu8AuyZpBcc92JoEP6HDQ2nMzm2tXqDjNhTv62baW1VQ7p5fhBBjw6BtMwHNgqE8dAn79yi7BEGXRTQsbDe",
  "key1": "A3FM8e76ty1EVwAEHBJgtuxfwKUrkx1fxos9GYNJsGmcczcWvDwtH8ZPTE1SrG6mwNc7BLgBWhWxnXHqVCD7B7Z",
  "key2": "3e46EJzbq5xwkGJaZCRwJeGBwApUSTPHioDnNGZm71NZobFQXmodk5BvBGHQySMkgsQLPhpdUnZec1V2ov6gMkSQ",
  "key3": "yae8hTRfLTo3Yf83bSPR2cnVEeUzGQt2ets57qth17aytYaEUtCigcthvsmobJARpLt8YpSEAhMi5M4YgJd8swG",
  "key4": "2asWZzGUec9Eqr4naVmYMfa2XxnS8wpn85TxCHKYYTFgyJE8niy8yoRaSUvePYnayZ9ordFGbfFCQiEjnbkqoiNy",
  "key5": "3jVxEqyVfaMKoFs2geiZqkoecEmwb9UYZ7nmMe18RBLnnGmBPJgvM7diUs54Xws5QMDjDybFEoqsG9R9fbnyKACJ",
  "key6": "5kcDSYieThcDi9knkqKFFRkfUAqABA36sRoigmhRYnSs4BQ2KNC74sYAK32WRLHdkypn6BCr7PpjUjwKVdyZAsfS",
  "key7": "588YTKiJMYo2dUFWaV4jpPmudrnoCziYF99eGEBM2hnPwbQc8k115BZqtXMGFGmdULXnmmFQKwFTghum17Y15WsT",
  "key8": "3yGoyUZe9JFuPWtx4EuHhxRvNb9X4UfudZG5umnLkbmmNf6Y4psYC4zGreyrQpGqoyjoN4c53RmPrfB8TKEVXEbY",
  "key9": "67gLbbz89kqwgKbb9CcaG8K3iVYcjs7mYij7WEPMVAYvyat49gDtQ6o4QdJ7gMxvS4vuwz1RtuXNXJY4x83Wan4b",
  "key10": "55dHFGExHdU9enKNfu4tFKPaoE4NbYywxvDoH1JDRpQnnGzfHq6Q97b5Q6uWqM3Hb9My6yVWF1SHekpfKhFQnJh5",
  "key11": "675X6Dv6xtVsKeqGL5ABzkumxLCpizkhBoRYduFybdKwad14H53TkUn3DARRY9WjXs6kQ9G8zEs4eQsMJWVVFFTJ",
  "key12": "3EnZNJq292b5QDMHy2UoVtDSGFKcCbhhfuXWLiRVG5HfBdziCQaoV7S78DQALgYPtU7cagutHj2UYSVFdnh1dYsw",
  "key13": "4e35hjUXH1A3NW8esehLhDSxeoX9kotZfg3JknW7df4CiLw7roX7gjgF1iBD9tRZPzm12cTzCEr86qX3N53j329q",
  "key14": "5ofyq2ddjadtGQz1KdQqGGbtrQWgEVSH7JAdgeejrBr52SyzbAzLnh9KGPnrDpkyJs6PKbwzjmLEdJLRWu8rPyU9",
  "key15": "4hVbUwrLNnFDtoonFDWpLqECqt6k32M9MBw27NiVALvbkMvfyybKYJ7gEmPqPBMniaS3r3Q4TthqKGhGYrqjMDxV",
  "key16": "3Z2S3VJnupZRJtR7mAoYvVwAFYCgXnDkTYzwB9vMNVmFJTYLpzujQC3igaW8FALe2C9Bm5VVkWr7GUSUhXyaZJAd",
  "key17": "5Wnz9QWNRcZuG1UVX6FrGCLhvnybdLNjuT1QERMcgpmqD3EGtKc98ybjBP5KkZT5QTXZQAqKmR6ZAUeRJA9k1ok7",
  "key18": "5xcy8TFt1eL7rXmfWEw8i99QJe6zNoRBnMgvAwSSnu3jRY5zdzHc1UJ8Tyio4hfahoHMVPc6By8RUXTRVHXFgPtp",
  "key19": "UmCjpfPtiunmqnchu7FiQdaPmuwbaEJ9NMKEdGymSYgwyvyx6ChyNupQp3bBUQvfmfJ6n3pwRRH4gVqk6hhNJu2",
  "key20": "8qF4UA1ZgnSJrKJWfH8xcDP2jct3obP8vPQtpaNJc9FFbx8gpdRFiyrmpN4zBGbh5evnKNp88WfB5qaRN183eej",
  "key21": "KrJiwZCs2WpfVXLLVkPK4ekwr3DMbgBf2nQNYSKr5ngBGYe9buNJaWeME7H1NzV78d4oNySbbcpCtxAVaxpnUUv",
  "key22": "5oTkGXyrkY1eHxni7a1EAH9KLqe3Co46hNsqjVXuGDPZq38v9rcjWyk1qhETM7YSij8zSAYxpfuW9XWC9d79BmUr",
  "key23": "2aNVsPfHBgLw6RcrTiXoRB2gLKo83NPhx1LUHksdLQg3nup55ZVnfPVXzzVhCxNfMoByKvTD7jmCUC5SD9Yi1t4t",
  "key24": "UoJ6UXNfQPk26LLMJ6BSb6uDtue4YxZo5fL4oeBRqBUaQW3PMAmwDYUj55Twt24Q5vFezpo7VK5ciGoLEbruHjX",
  "key25": "2ddAEtBmAH9N2emh7RKJminZZc9yfuiW3GC5uCJUma1Mz646TiVTVBMGTgiEsVaHp5pcFJ42XNd34NJwSuD3JksM",
  "key26": "53NRSkeHqvGXw7zB9HtfJEQayQ8bsDWasQd9yJeArA7BgkP87FWc8KoWBij9bqJ8sRadUV2V1kKDvMxgvagrFYLs",
  "key27": "Hwrq9CYzS2EQV6iwWbsAq4sRbcEhcDZopVz4zf9eytdqfUs5V3MFYLjnKuJNqzo1dup7f9dxx9WRNgbA4XvWwwR",
  "key28": "4BCNLQJqFWcR9dvx28AwyujZGBsMDwXHzTAxvhk2uQXFqjyjmssmFzhyxCVt1WeDBJs8jh5aoApgMKu9727EJmer",
  "key29": "5x4TWUQ7dBc1wVn2kPGdcbHe9MeEB26cm686nbP6AfX9gUEx5RyyCZYMmFYEchAyjF3chLEt1m7sXCSq7Vz2UoYV",
  "key30": "2t2cBW32g7FYbX9BxZKPprdV7zJDYrkAehh4s7hq9B6iXcBa2EfLvVsiSbNGUTkWj4J6PeHYSg4tthmMFB7bz72F",
  "key31": "D71ykKjKk8Ysp4EKr6fR4EceDV5VqF3uwnB8GdgJv2vxptHh19g28N3mu2tVerMuv4ijDuV38aF4ELcV2wF34dJ",
  "key32": "3kRUh1PFSzRPzLKmqoKgdAdtHJan954NQqi4Km3A7hBAnw8x2DE6BPk8SezN4ndiyfMZXjXHX1TcLJY8qTkSwrHy",
  "key33": "4YEjDDTAzjtQ1pNkwwyd72MtVMoCmpz7a9TXsML4MVtrzc8rFJuJENTLF5x7BEUuj4mUVbPwQyFYXTxwMNHyCgUU",
  "key34": "5okSSzH1RpAe93fnsC6noEQyppkJcmNwt659kxZoj7kJP4p1jQ1bKzEir6BV2bgREKsGF5SajeheDbNtZUvkUzw",
  "key35": "2boyBpPHtr9KrWRPpUSWoinrzzQLYUWr5EBNQeJzv8SCFEtbJaMLUb34v7FzKqGM4pqZNv8RHfMpt7pGTXcbJSEJ",
  "key36": "4h6jqc32mfxXut3Y7eeUQAfMfa64NcS58tYfxumfnFxmX6JAuBrF4G7Vm49o4BH7cnhxFYCUUabaEoZ2gjZW54LM",
  "key37": "3mNj6yEwckZYb1cMNoLKvwTin494cfywSaWvJR7fFYcAZGTskyKt99PDvjSNKZkYx4Fw3tZEzzty7JFFcPa58u5a",
  "key38": "djeohHWkvwaqFXvXoCmnnLSPjTSa2oA3LpBmjhpf5Wx6kiddYioTCV2bBwAbXZjFCf1T4PN974HiGQaRJYiRMmP",
  "key39": "45k3dEyBjNgxjfmLoSqS33atuBj3bDh8mVeUqgQxKwtohophHoWbmUAX4v65gUcuD7y6JDwvwd397XQSrWctNWZ3",
  "key40": "2Yokn6yFYfKHLTTou8p8snHsZuhxmZT7Bs9BJ97jpXRQHK1n22FCtec76HrHeQzTEQ1zphPeHyE4XxwA6cMTsVUq",
  "key41": "2Jg7RLjAXJSYgXu1NYiceyRBE17BCu8SVcnhSEWhya7i1KSyTBU36zsMP7RYzBc1iiy5QYwge5G74SuyACfnGW6T",
  "key42": "5C2QyW5AdRABqFQ4UkLoGijerHNAPPTzrp9aLHod8SYcRSmpK86rrCF6c4i5UW57KZcQ5saDWhrPZfyDtxJw4xRC",
  "key43": "2fzGR4dFfQT1EqgTj2NoixQy19F7bmcHtfopirx9ZPN3ZkdbeqouJHGQwQPRH8jGxizvKtJSv4yHdVwMBEteqQhx",
  "key44": "2QfBZHGPAcLGCG3oRMA4dZYaJbTYMQJTSCxdKC5qyWzEfg9LwcVENscXyjrZuaHGEiPt1URW616GDmKjxgptcwsN",
  "key45": "JYw8PnU6Hnk4ucAwCFAium2RqhAAqnHD2pFCocPwyRcFmu1K2Bn7EjDisjMANJPG67khWN5CJPM7o4G8MfX5474"
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
