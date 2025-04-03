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
    "5qRHdJVtAsfj2KKZfyWGnUWwY8K7M9w3kgKM7bibT57Ya9P2yu1EEacULX5gAKLehTTEuKRarULx1bts4umaNU6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5Xd6cz1tWZpB66TY1fPsaerwej2ctWh5ofgZRCFnK5vppWy862DfnLtqfHoCL55Kj6dzRBYTJkAZBJTBDrs2Gy",
  "key1": "HXRWRpSmDEgXfoB5XgkLEkNXa1dNQm69mpoeeX6uaFLYZgYiG75qqwbNHxNLUA6MkVMyh4nd7pSR2ubWMYzW8fF",
  "key2": "5ao9rCmgujqUgEqdSPxixMbQEw9BEM3fPMpcbNe9TaFqVZzF3tTXEGBzb96oX9f4ANtBYcN4uQuxV5RzvScdkSsG",
  "key3": "3zYTZP4PzDZdB7YDdHnG7pqBFM7QALajeMnCTspF6hJAqBUbDuB4xnfwh96Lo7GPpk7ALkrR44bjvFaGGnDi4piG",
  "key4": "5iWhxBHDwDPna69F6LjY1UPR3ZJtYLD2Bg1zyGqFqQNwCKzpSbp9smrsrxErkMf2ukWcwjRCR8gxA86vX6tFhx8d",
  "key5": "2wccr9hmtu4cjvumgEAPe5Ru39uYKgii8Dz1CsTxravERMMXBykDFedhDdUSuEd5piEgvfdWbbxLeKGnXokhRJX7",
  "key6": "5vsdXkLyAcPrLdWywExNH54K21zSGwx1JRPivpnuTXUPn8UEFfVditWQSEinAT4KcA927mxiKZ8zTABE5jxzXqX2",
  "key7": "mEusA5UurV1wWyTH7SQyWzkH6Xt6yNxkHLo4ATHTvQiN5aTZMYnvdCLhaTbcs2vkysHJqBKCw9WUT2ZfzS4VFnF",
  "key8": "4FRvMGxG7REWFZtPv6jPvCVBze1G5eFVqnoqEwhd94cyCfw8Ea5URPPRLeUWohot4tDvWKxr3i1o8tFJX9A2AsN4",
  "key9": "5LpZMBqMaAXUZsxZjpSqcTLE3iLApgaciENTkxeuNQ1i5QhbDP5B4qwjhX6bFPohgFYMqwA8xnYwSycrgxqJtxXG",
  "key10": "4rMc2ByuwauXBs1Ujfsta1PjwTNAwH2AnvnxSxrv1VLByMi7Nn4KMzmPF2UvxHC888Rm8SCkTadwZ6Te6yBoPgyw",
  "key11": "1hYYCdBBuzQSRi1d9h6deiak5CUFekhSJSCZ4TmYaVurhZtFAjtsUhJ4atVZAh2bVxLb512AQ6AicZbZntYfqYj",
  "key12": "2eMoPCBtbboVaJe2ri12Nci48SnP6m5GKLzd1GnXVL3ssFtwKfemhResm3si9dyMFgTsQo1a4rz6moQ74182XoxZ",
  "key13": "26YnZ7LfRw1gBWLGGpEZKv6KG43poAoip84wT9fVgaYFy1UYv3v1kVvocQueNCToZzeRvfgSfXkLvGt96LnkMRT5",
  "key14": "2t6i1qAtdC65r7cPmMwQLmMHMpKgpfC4hf3v5QD5x18TzwbNHWvbkFQDerSpZBPasjofRFbzXVWaLagmbbRmZjM",
  "key15": "TNnx9wJUQU7FEXwMdGdXUzUxXztrWQSEbskv4Yg3ZfsfaQiThbujf3Q26gg9fhBzfqXQQBg6ikqfdZaWtunvZaQ",
  "key16": "3C4UVKtGCxApixYujuSZXLqApPGs261w8mNrd2WJuuyUfymehJvB7wpzVQmXy3aNJyWE9zZAJakjwrRx8DRJa27s",
  "key17": "5NbxFU413SkmngHCsiSLGEMjRcjUMZLotFtWzbW16bCnyWDVZxQem2AJa28N4NnCYqBg7MDGLWNsKmoFN3qi6y72",
  "key18": "LSN2VJZNjxCQtMMtp9SVz5bBaW9je1qwzsm6XqJieqfmZH8uHNUxWF7toWBJHjxcXR19cfd3KYpb62TVcbMfNXK",
  "key19": "3Jfi4U4EkTLDEt9Fni9LoEc8gL3GTCTFrLWXzF2WmP2xEq2uzSa1Td9FyRkCFe57iGoSrBpCJYh4NPS5dGHNqtrC",
  "key20": "WYbG9NzyeLGRejh1BGBEWXTJMzq6Z8RRNxYUcgNn4DEmxQEXZAbS1HogBTXfTsFJa7VFDmmzY3mHXhCcwPQziFt",
  "key21": "268tUdEyZ9m57Hd19eZsc1MQQtRZnX9GXHb4J5DUmQtFZGpGNZ9veJjD6KucxBqXg2nsSPtXXpTzZmc3fXHj7HLR",
  "key22": "2U7pd1kbujqLVKsSYdyHoYcGSNC69YtxGo3rsrjat2zZ1ANpkPrxfenBgMrhjtk8nqSwoeMLxa3sQYo432KacgDz",
  "key23": "2qMnqxd2SQhrGBUDZHL1sBZusLcGVfFtvWQzYr8DqmNswapJhTSyDMRJGqKu2Yxxs4jz7ApR3E3Ke8FiXFgRAfaD",
  "key24": "4NLKMqQZiNRcktodBEUWkJ7UAeGpZ4Qkep5ucC16oGCZT5dEKAYBQbe9aVAvZ4uYUNYFpBkZEyXjF1DJr76fwzwB",
  "key25": "2wXspoSdkns6iXsAHi7gxUi6ESFGDdFxo89TiTbKmtGjj11hSuv3UdGxPqR4nDHxGabh7ST8X22rpMJPbqARqnD5",
  "key26": "3Jqz9qjUEkfZuY4YZJW5a6TB1CRDNQHAJKJZT62SZ1b2oijpxQEdcQK6fWo352SZYB85qGhzrRhK4A2Lz7EUEueF",
  "key27": "3X9tyUEZKsskRz2UQzZfCe4kBrRy4xf8KCmwxagQFDQjYTiqtCXyrKfMh7YeGRYT4hXEgtDjBWAN8B2KSRRoLRrY",
  "key28": "xreufnpoXZ23Gg68JudHRLwUZZkUQjDGhwNEeJiacjBBD569a3yvQtvJkyz1Wwnn48D7cGrViuTd5M1nBYHBK4H",
  "key29": "645cAHeWnnuQW1WsPpjgLaqyikfryg5KLDinywfG47E6yvL2e1QGrCntqrAQniD15fZsBYXJvnedDKN3PqW37ukz",
  "key30": "4b4UaoVh9Md7zjjQwjW4LgyrmxjTKCg4mVNWQPxVdzdtKAyCariU4s1apoZZ8psiSCJwXDXiHmahmGHqTSL2iisE",
  "key31": "5TmGnXjvGJSVgWuF2mWsKvr53L57HpAWZRE6kE2tJ4oiVnPSuK1gUKkQA3H5tzeNemCCDKeecuJtsNGcgFbdgrr8",
  "key32": "4jTAZvGGtDttXFHuW4j94KDDQEmDgQ9nG49RU71kCEfPgorPx4a78QhZ8sDn82a3ARaRS3rHtogbj8e2qk3v9hJF",
  "key33": "2K628Uip5cNWwMtUYgv5TJGBc3oXyCBRiDNHw7Uj4iUwawKCNCpUpGL7G6tTydFZhHBp1oe66BH5YzXyCh8kyMqP",
  "key34": "5mw5WMuK8dTAgmZfEtqK5KmNZSM2BrNQRE6Q21fN7rSCDDaSbyN97yRkwrkN5Y8BfSjuGj5SmUTbGTLb24KHBsCZ",
  "key35": "2gZpyjKMvvD6NampuKCb2s85k2S8SWV2HrjazGy2EbebjMLGGYAqwjTjCGgqp8pWtTQWyYmPMbEXSTy3gnADacYt",
  "key36": "4TmHDfE2TVNTcfpqRhvCttEiGRnU8KcKg7QHrnVisBM1yDgQuKAiDvVXTtJvLXWgsmVtJp9sgjUsgSTR8b2FQgyJ",
  "key37": "2zbNd6tfeDJudHXz52w51i5dAUcXvTsuxLP8t6y2Jq1dMk2vyzccgGBJWbBfL3RGKXNnXy2u9XKny6JahhnqX6h5"
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
