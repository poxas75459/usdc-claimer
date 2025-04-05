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
    "4C8GpGHsa44dxa72CrXMg45hjSrScfc62VZYXpdqDwzYBo8ARzvG9QzAj7DMjw99ncNeM9CgGwhtTrwYXAL4doKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUNFya17UPCnnHXvQkjJi4dcnaWUNKtVXaVyvnWC8LL7MBjWfWUTJSpqoRaeehiYfpMr1z7JPiEaXLMrAFPq3qb",
  "key1": "5EXCT7rYQnhEV44VzRxRe7aCGbKeUChkFjuE7RjfVocoyWv4NhLAJ5cGyV1dNBdq9adwwdM4Pe9ciga7ynwdU1VR",
  "key2": "3t6Bwj2qPkZ8JkEZtSjHgywH19DFyEuzAjwAjAzBhtj9bKMEifsy8BGf48NcHnWvRJabZ2SgCMeu7edoVAxQMfCi",
  "key3": "Yd5rcmaGnwGqMX4LuSfRboMypaivHzUUaKG18K8Q6c8rUiE6duKjBfW1RJWiw73gEAoDb2gcETaLWS3hfCM7iwx",
  "key4": "5YxQQdcpbQ5tgdSrjUdRyT9cBBzURnngfjob2Hrk2LMzBWntnYG9q4Ctd2NH8BEm6PJNeLJn93SZt65YsNfHquC6",
  "key5": "uYtJQaQ3QJoRMbXKHWEqLTz7U3fqdQXoBExy5jAACantDmZpBtFgGWqSQW7QyhVm5fzfAchEVvc3eiLKivQDTWn",
  "key6": "4etJ9TvGyPBwRGoPVEHDCjQquCKbKkcNgQqbRS1NeSWRTob3UENamAyuQUpDJhvYnn9foa8tHea1yQVGRfnezzp1",
  "key7": "3PPFo2FH8EBgBBVrxfiaTtMQtEdK7GGA6ndkZbDKWeVL41YJEnyG74gRvPF429YtdnqLPNzP7yMZnBxjY8xaY9zu",
  "key8": "4UtfrsKubfriX52rhuoaZGQtFvJaRXThG856F9ZXGEJCDRsLMQVzAxM8TbHiJJQMpj9s5vp1KpaBSVwpiRQqfvkq",
  "key9": "4Grkwroy8bSVpajbcvH5HE22R9Bv4fVpNS4bouNDjVxgVHwhivXVdbsf5HmgfEksxZSc5XcsmMuDBsEz7VVzKeo6",
  "key10": "54GxQs5yXpwDG9ueBA1pw8oYvPrqa5pv6t3LwiKUSpnAXiXUzVmVySn9A5c2p2svKNgnKCcCsTRGAHASQw8cXiwD",
  "key11": "cAqMRbEHMjd2ynvLdqzRrf3JZZQTjTEYMvuKStAMH7Zj7AofM7gi2EyKswYq2L1g7SmGos4TTWzejj1FcMnTz6C",
  "key12": "2oF8iyTBikbyfYnsYVVAhJFDiKYSUgP73fP6Rcj8DycJeuGfyTawQFffAJ8YHAPtwxSoRtgX7rW8FXnaa6YdUVZ8",
  "key13": "5oM7MxtPmCM6CSShfpseWz35mJLw3ZSYqPen7QxKB7XhFLErP3yQDU7zZnEhQj48o6K1SP95cGhJvLL9FbGtZQJu",
  "key14": "4d3GunT69uW61xeKd7J5h1nwd8YmPUFqiKuEM9RfSSXjFSjkveqkTtmAch39tnN2nwXrekouxfAeEeJfq1MEoBK4",
  "key15": "4Y5VnUZTAY79AhGyw6ZeY3jzehaAtTWFAzk1PMSsiKurjcyAQ9paA4xGwo9TKtB3a4VY2tQYzkjmbxtvHNXK2XZC",
  "key16": "ZnAcZcQzzsUNwDe81XwSXg83X7ZkQXn2GeRuW8dh3p8YAJNN8H9dkKwfwKXYGDYXACh98SMwh2gy18bQumV3sun",
  "key17": "5BXWPtrARed6dfwG4LrHXQmNZcPPSMKHfsZTdZg4nNoATZTLktbYfZBmHoQkuwd6T9VS39UTzCd6cxfvj9kHNSk7",
  "key18": "5CL9tP2uYZKdwe6fXnWG4i7vyxWw5HMow89VBP1aWwoSdK7FJzSHHEZEjdwX5CcKoDWB2p5vxxoA2MZ4x26WNcro",
  "key19": "2Xy5EwNZWBZy8E64UPnwf714CipMx4rLuvwiBh269NqYDngrd2BfDbGsBBxYTjPYzsP3Z9cH438hENfkvDzbkcbL",
  "key20": "126SJBzmTqMNP4wetp7c23zVucUDdiE2YhwALGU4WykdyiPT7peed6PvyaZ9CiaB8VcNMA6Gq73WX8gEjPezCNF8",
  "key21": "4ASGKBveTqJfwf1RHxwch6vVctw8ZmdjjBqaAU5hY5qff4ZWh6LKoiYCEFyrsmmHzpUc7ZUU3GMGYsnCzeSwbQTt",
  "key22": "51z62dHv9vVfWhvjEW4HSwU3T9DzDKovhFGR2zQaeujvm3xka1dVz9yTpQLYdsz3veL4mdV9kuoXbnF6cR3ifKJs",
  "key23": "3GnRjYskmCX5unU156qHEd6bePPEY3CisagsTLQSUK7ScsdF4BL8nJqGBSKxefE6AbxKTo3Kp24jEpqQL4HvhTFH",
  "key24": "4StFqLWZEaocf87Ke4TcLpNtZC4X5axFWJe8fdM7eVPqJHwtf9CFy4ToCMmn8eZKyHtUaujkx9BnhSwYUU4JitGn",
  "key25": "4LUBDq97VCxY1uQQFHSLzqPb4tJ5tEJU9fuiPTiXHugheXTibTcQiWgk8Ltsf5Uv5Cow5GyaWaXk65qc93BpGPkt",
  "key26": "5Lh64eev4ZAemPxNo7Q3MRZA27ZFCAEKoFhhqxLS7cYx9TsfPguxgGfC1hR8JUritSYYiFfaZdw5b5MaJcSRSBEs",
  "key27": "4VjLz8d6tHzMY5ecY6bncsc74tpTtMw6pfDXPcLo3WCATbjRaaFPogZNKZyce9MQVATdc9ne3rismgs62zh4SrZy",
  "key28": "61PGaxTXPyYEyJjrieYBuGogLxP3JdTAdwzsvMNJPeZG55A75W3TQ67f3Xs8p2yAKpKo4AbPtFNfqcahoTYe9QpQ",
  "key29": "4iB6Z7saVyxs4GPFgUwBipaAUyDrhAuXpGDNVdM3TewCTvDA2mbLZa6UYVDm6gzTECjYpCfTfB9pfidQPfHrBmBP",
  "key30": "5o6yw4c4zQ5wDj8WSN7M9XtxNxksvLN47nRsqDfGn4zYNcwgP9ZWorqwESgFGiZ68kXTEWzwxyJDWQsahtSe7TGq",
  "key31": "2213ejiEM3yQLJx79LAKapP9qhFu94NRJS8TmDFd7MKxC7z6YipB8jV3wvgbX5pmRYYb6f1AFhdr7N8CyfoJdUhS",
  "key32": "ft6kXgdnR2s35DEKAb2DYK19JCX1L7igEy3xVnEW4VQDaTrXXQtJbv7bY2AAAbdJjQj7JRBTQxgAqo318M2UAmz",
  "key33": "53qQNTsYvo9xr2DJurEfsMtji6aRW76i9GdozMPco9wAWL21RVLuyrVSjhzKeg4sGgwF3AL9p9mkqP1KeF52DGtc",
  "key34": "3jZf4YedA4LXgdPePgzyfN4aq1uh5ZpgYzZQ2z6rk8xL8UR3jyWKhXej4e6RGQjkSauihVZdUtuv2ZaXtaDmBSsT",
  "key35": "243NLvNKNgBxNAY7A3PxsKeww33qjrgj3hL5WqMz8AdG7Xiud4aQ4ahRX6e1t2HaL6ryFtctBdguK9EFhio9exrK",
  "key36": "3g5vNdaZ7WGbfQ73U6PCNoAFBj6sX6ERaHH7MKsz21Ackeq1cbFMf5zwxyKPkirGUHqcNVGhw8NWw86Nqp6Dr8Cz",
  "key37": "3QYRea2vPhdrvWAKynJkPLobtszHxRh1MRA3TqMBj6qKBGHp77z6pXw8z1qtVP3oPchfjjgLhNqx73wPNE1cNtUR",
  "key38": "222rNSm5PK8WqiDwdkgYjo2BDZwJUPfbHTDp43wdvV57bnZaZf7MgJUtfAq27NajfqizG9HyNAaZsqUqMdRvXEJc",
  "key39": "5nAttJ2Vugxr13o3u9njJ3bp7Dmf9WVrCyMUSUPGf5MaxsJm9w8H3tHu28J9ufjQp8qMPfy2h9d6RM3JGtdR9Wcx",
  "key40": "23wE4uZRdCL5FGpkdpKvU1Bo74YZp2inExP8ZN7uhYrgAKbWu8a5wiepKnrCnkQMxaCLhM3s5bVygeVCyaAUra9f",
  "key41": "21fQmLYDZUSCiohYoXKsGDMyETK6Hm9HYxuWqQAVMNCTLd7oj1vbxvK5yPynqEjJpRKDe7RjaKjXbJYUW7xrGNB8",
  "key42": "5ULTJdrt2tWi5EXcqUDfWbJadqrjspwMHPetyZjCCjYSxnfNXGRNNhxMbfWagyDSLHd4bQ4FsM5NCQn36PuL6kot",
  "key43": "3ns4HBr2pSN9hKJbVNLJUEuqftcyKBDE4qeJgM4VztvJkLnThXnYXCd6TbV9Z9c2oABMi7R2Ab5gG8RvQuBbKJcD",
  "key44": "k45TNXraVVq6J4pUHteNLUhGPMVk89EzFCkdEytT4j7EWdFYusgBd8Y8TjExhqo1WnHy6TVdqZrjj4Jfc1etEGd",
  "key45": "4DwSwLScmVtJhVU1aMiRzeJ5DtnNqxoxwyWdYPN1yxU3usejFKBAPxnCVVzUUMfsfwc6UmvmW48ynqxEEMeyCqzL",
  "key46": "2tA4VBgCbbYEWmFSPsk9yNDRgojRixLpMEKyDa44j137oiNYzgytq5WGFEDNjGpaHSq9Yk5X4yH4G76hSEJ9DPnq",
  "key47": "4xht5hQGu8ywHsFCPYjpMGXTnJwc7SUj8fdsKhBRJXABEuT9AjFnrruP57suzFyv9Uve26jrcWJewKwrGn6PPzLH",
  "key48": "2jxXrf6Ua6JugDnibSagYbsCgUm7QQMG236zygxK7vPSXncLuwRWFf9xxDoGMjKA9iXWSWSjTQyTJKQ8nQNU79yL"
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
