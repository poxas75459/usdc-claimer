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
    "3EtxnK2zaZBux6zFQtsvmNkai1Cvr7sb6vki7X8asXutxDNHUzgYEX8xQMv2TN72csbmZMdcqmAvwVW56SWm8qM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fW7VadAcionktg49wi5HAYPDja3ByFfUwvbri63baCP5CHJvzucmb2CuQAabBwpDedZRE1x1cJ5rDfp7SVs2ggq",
  "key1": "HBG4Lzm1GuudnQJ3V7mwjJUAoxQffHLXtbPXgDgaZ7wNREfxgASZWN8VXhPDa9hfZs6pNU3egy2aKWVd7pM3Kpk",
  "key2": "2wgv6bA2wdctyaVmZAtrvSzsq1SBJJCfp7YwNCd6GBVAWc6NLAj28Xiaz9jo3YznNYxFPVitwygLnNh3kxrymtrS",
  "key3": "MdQXUpjPHK13DefDJd9s8wSWB4osNSJi2Gj3ukTLF1dRvVnMpkGDjSB6MFULR6dNrtG26fCVC9CPcFfbEk7e1ip",
  "key4": "4KrD67yZcrJTiNgQQYDpDCwQPehfNHR1g9tv6wSqhVvkJapEcjBKi4thHN2MCtCJXr9urAu3y9pDPAPmXwpWu1Lv",
  "key5": "2YikxHzKznGbghosad8WxLqhpRP1QUL7HDAv77wcUgUVRfSKE3h64xYoXpBaVL4eJ5VsgxzxFqsxqeBPJ6qdvfjY",
  "key6": "5zqSnskiGY4UJetRJu2ADTb8pcDagYc5AfMinhrPmt8DPhe1E19Vz9TMmsQ5kUvsictKsNZMNp3ugyaeD9w9zrmi",
  "key7": "vnufsyRyW7MZhUKvFS8Ny4foow1bfkPnPF8conrGr9Z7QooR7NTyBtYyRJvMzjdYuHAKyQwBgHssYDfkfD8SCgz",
  "key8": "5xJ397X3Mfzvkzm9LSnyWjpuGLu2Bnb3HJwoWGDHk7winmLrgZg4sCL8LRC5kF4wGoXZqCcahfYEH3ptwLvTB3LD",
  "key9": "3gSweYCbStSmSP9MzbLBGRyeSSKGc3qtt6aLTeK28uqAL5bQWRgCDB8jxXkM4jUzP95cZMaGQXVPRqeEPpU2dnDT",
  "key10": "2HB3937R8ufVqsUk86xNw7Bdaf3u8mqVBZy1efY52vhMzunPmjRpCWnNoq9XrtMEo9iyw16hmjnrxCgoKMhQBc1X",
  "key11": "37AEPNe1NzJA3jSpEiLPg1n7hooGyZNgTBxTo28zKDW9KR4m1Co5H6RVyUUpxtwXj7phAzQPMiqDQYtZXaU5Kg3J",
  "key12": "hXC4biKnKrPEVxpH4aPgX3WkDDqcQiRebk9SuF2CpTDLezrb24DQtsK1kk6wsMgPoZP3ZTo3gcCNKUx2Me734Wr",
  "key13": "3aZK9VLihcpz9oCNNdyVnWyWUkBg3jTMrzxFrouqjcrz2ezVmsD1kZVNHhsTZm8AGBM8tKFhSZAwzfo7kfTzrFsr",
  "key14": "5dmm2DbizpbhfS6qgLrGqySZynUeDrfVbcxEAPvD5emyZ5N5Va6yEAUamMLbHMBw4sYhGtjKsRWYCmo7Wctx5UKj",
  "key15": "5bUtRo5boswaPqAqHYG6bqfF8NkNV92xjKFPudYQK1T9AhhukY1u5S9WTN6ZEJNgecyTb1maPjfB2FvxMHNuXkBV",
  "key16": "323AmKsK9SbmpP2qQuJRycWG4kRkHCgJwxGR6pgkFTCnQgnBHm4Co1epzF8eLsySM1DqGG3XmZJTfwsrF7KVzwBH",
  "key17": "2VbyhkGh4Z34TzdDiV7TEmuebbYcQosQWFxZK2nuL7MctPnsKL2zDHP8BFcHMReedeyG6JgVJT4fjD8vo4oqB9Zx",
  "key18": "4wtMzqCj51dgcR7iQXetw38wJxhoWAn2zgXExwsBZv2PvVHyCVCnNLZvyXnD4ehpRnZmrKKL5CHinWzmd4sWxkdk",
  "key19": "3RkWHPgDJoURrytAcVarp8UKafJeRZF4L3A4YGC2AZJ4cXgNi6t9d9bM3d3VfAs6fUQjSH6sirNLfCUL74SmCH2Q",
  "key20": "2KYHKxvBRfzBwurh1pGr8iAmedAu9ECb6NohVyKCDAuMxdz2umfLDTtKEbHMNrENQ79zKDJJopi2Fuxtvsy35USH",
  "key21": "576mAcLxSg5MY91HYmmrDDkGh6KqhYc9kXnyFNL7waPMi8QPya34cAZ8Jq9wCPv9Ufrboeo41Aum9vz1NQdGChwj",
  "key22": "dEmTEydbAha2WMoDtsWvbproVDcGSHHURZsQaPQfQTedmj2eJYYu4zg7P6J1XA5EQoqvnauhvfcsqbecCm9UcAL",
  "key23": "4mCRnuLnWtzB8HeTB74QPvVFzBLXZUA92DVnscEQia4eZt6qFoEpZrNdHFGSihkJvk59BnTiHXrwgXu9aYd3CdPn",
  "key24": "4v6cygQrpCMfD8WPxv51JH9mUKDHDr8PBtnM7Aivuu6ztU5LELs6uQHW9yRGVh9A9df3royjKWVM6YhTHGDJRJub",
  "key25": "2GSD1W2HJy1BkhhHmgyNWffp1AairvNvTQjJwsHJUJ6qag2ziJdV9zttSX6WbxjVtpk3K6Q7E91pdVbvddBxP7Zf",
  "key26": "EmEKKbitJsRHq5vVh6gmf9SwRaYdUYKFsTybwWnteM7o123ontGYrscpGFR4cQLqu2injgB7aNfbzpxsS1PEREi",
  "key27": "3jyCyhPXprcusEy3jCEnpwpunmcaGsXvpZiVqJVmYiDfNPLzBpY37nxuBWPc4SqrJ4gWgyGKuz9a21tVNMvjkdjU",
  "key28": "43Rhrevq8cyNEvk84QaRVDkHBUrEeMgc6rZZ5pUZockmXbvzsA4w4fAU3vyeususg6DKbjoqMVavHZGWaqtppMMK",
  "key29": "4AYbZiFnUB3siX3ekiRsfFNfRCUNj2uDgRS3w8bBZmioUrwARvpC567Y2L6MaRgJKbQ3s2By93HQJgu9K5NRGovC",
  "key30": "3LTngk3yU5eieAhcZ2obsLMte38vVbcGaXBwVcMfJNdZ83irvqHNY5DPp8xiZwmweKbPrH7EQbS5yTHctRsLUpzP",
  "key31": "254sZGyCGhNRQHuHymTyFvzfjBiu8yhDqAf9WdiWrUr31mq347ETYgEo9fMJRdm4SFRQ8wvx6CEoVgWpLD5FjbhL",
  "key32": "5o1XnvotN3iXcTyC8jJzC561HjjPfmf5n3Ppmy9FautTneRiG1FvaNsU9ShvJkNGaVqqhqhTz6aahqMp3e4rypiP",
  "key33": "3FzQqRVdFGhvyuZtjBg3XSgAXZHdd4WjwPfMV8aFVKffsShUPaVQpcFEDev2MrQx7oHuTgbHvJPxBkMw9N5bZHJi",
  "key34": "63rHxvCi11CLGTcSA13rSyBRQg1TbY685AQeiNdGCFzaxaMXKBFP7eqWHqcGwabtkUvZpQBmDP5t9GkZkvGrNzS9",
  "key35": "rtrrcedUXKhsoaXVmkmZRY8VT5Hr6sKyDZFUHwLSc78ocFawQyXPTRmRcH91y4YU4CBWLw5pgadDF5tvBqdSbBw",
  "key36": "3j3umcpxH5Ld5itD4ei5Y3ULtt89Kj4LsMuE1qG313A3cNNmCRCa8GC7NQQn6W9rnre9ciQUgt9qWz4ELVPEztzk",
  "key37": "38HfYpFXhTK4kKnLW9h9Fw5izQkibowVBg37AhhcWG528qghtG5nprwm9pJoVbeesP82e97FBY8JpYHmyvQXHqdV",
  "key38": "5fepp5cs6tCPsrLKKFusPcpUJb4rzXFkL68BueZC7Jof6auqy9yZnWa7nVevNFcXtNdphEFCY92FL4kAc7yEwFuu",
  "key39": "2S7jEphFWtfsjKEmxQGFvuxMDEy7nDMXerxxosVRPSyx3bicYBC9d4eXSN9MXKzLa6nKThgyrkzigXxKjRd8hzx6",
  "key40": "541SXPkScAHLuKujUbKMeBEsmMHd94vxgSSYyiF2GeRQXwd5WNzErVkBXGHfKujULG2ZQiJHQnQMHoFJ2oozcyJ1",
  "key41": "253BWYUKPaACbGH7ZdJ2vPGQj7ppMbmZ6p1JkphNw57B45cJ8DRJBZmYZagh9p4YT6aacSnPaf52SuA7uHnEQroQ",
  "key42": "UvyZpPSeWbjVnfArqzkegJKJ4AwCxRdAcYVLjP843komkUdyt9C3hT2sCmywXm2eTYaKbW1FQxamUVNJMLBSVkW",
  "key43": "Fyv61Xm6pt319bNH5evDrGuNECdfWCyD3GbABfyTGBeo7K5uWBSEZx3naZMpA5XkN7CuCgSkAw5Sio894kZEY5u",
  "key44": "3KYCKe7vetmRYvJdhtQU7RhZ5fKQegRHxpfnvujBY95uvJtqaztb4ERLZPxqi957bQTkxsqYfnn49d9oFgPbYVmu",
  "key45": "3vYFohknvgoR7PiWREepH4JXdj9ZihgA94cxTqEvLbkPScj3B1YMCh6vWG2XWbS4xkyQZEQ3QuWrPdk875eRtdYM",
  "key46": "31ktHMBgS7bqtWVYf3Hz1xpHiGphcuLnZ3w8nW5dh28BfBqzWLmwknCwEo93k4EF6KMhCKHCpvRHHW3t2gyBzsC9"
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
