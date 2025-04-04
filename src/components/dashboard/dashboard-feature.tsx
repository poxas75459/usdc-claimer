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
    "5EFwzD8AbTgAsirQswPF3WCksd3bittXHXH7gbABmC6pQPxb4ZX79EustC818oWA86Yf7rU7vKV6GkNeGEeBt2MW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TbPZnkNoJUuUB1kecnnmuyo5zfZFHfEAf7jH8DmgM6NsX8hb7E31sL13NfnemWp6HqBhHSzpVA9KAtUn4JqGCh",
  "key1": "4JTP6BCj89kJDWGYi1t4AHGNh4fMRxCVQqm7qX4SCqfaG8RnAjFddv8FLBUUgjVBF9tpUtRVNv3J47VturPCE6ei",
  "key2": "2Mvm3LeQtedhwgfnX96c8BoPmFXkwDHUtxg8yHHirsaWQdBkFUsukbMxka86DWnNPa4GPrdJtW7skxwHL3Ei9mSn",
  "key3": "5BWNacoanEmEQXWEbS262jsgD8cjHdum5S33yrvB52kMd1ayHP8HCjAdq6W9Pw4VY4F262G8jjDHdYojwZCpHkN3",
  "key4": "4oJvHP9wSNQmwxSqtnYGzkzjrrPhSLB2izTfyb12FfraJdtDsRbJZ15bizzUNQmCEsMukmU3WgE8RWC4HHCYx8Ve",
  "key5": "3WyDRewDfX5RszsdZMB24TM3CiQSftb9RiZHpQWftoCDUEDeKZ3gViUxkA5zDHMQcEBsLksxZEq7cnVcCAVf41FD",
  "key6": "gh26CkdGQ3aedAdYxKiesHhqreDTDxPxJSE1xSJhVYcZkSjMtApcjTPrCgHEqVuCoWKHsCJ1xi62oX4DneNGZyx",
  "key7": "5cMWwBbHqBeL2wzdh8KBDXZRcCt5BejThgu4d4wfHxftpZ7qMD4QsWNNS9rg8EbLvaXgr1qLWoTsFT9cnLZGCL7z",
  "key8": "5bBUiioh3m9GXgogLMxqrx8psogZsc5Kx7gBS9dEpkU9dW6fezcApEEhH7vfEkd6xrhCMHpnXtDdnDLcMhX83Djc",
  "key9": "QmfbYTBMcNYAM1iWEJeR8482NfTQU8LNcTjm64S9ZhccfGU7dJMcrSKiVtZsZYMHYMeK4LUE7vSUqvna6LqFR7e",
  "key10": "5TWeNiX2Vm8ji2efy9dbEtzt8EVAPTHk8Nc3D8UXmXhNzNzdJcye9m2zGxvVYbUtM1bBoASe2mFtXzmYvLQhAdkQ",
  "key11": "2g2H9KoMFtxcpAZuPEkwsNPKSvjn4noWaqWJbmk36paFPyAUXGgKwdGdbQgo1xFSx4LiB9SHef2iMuwttdXcz4Ye",
  "key12": "1ktj6RMC5tgFQX4WK53GP11nF63mUHCYJghvvY9v3EdMcJsU2EWmbMFy2YEqw8785RnXKhgtxvYMch3W3nGyp9A",
  "key13": "3VHtrDpb9nKQ4UMBDdXevu4xp7rqiBE2S2ZUsAezt23Tbdhb454jm8PgiCsrvcMcJEkweGc7M1A8rinK1xZeMyb7",
  "key14": "dxSWWK54szmiyzzosHnpxMQJPy74ZfjDPRdZxaSJPvAGWa5T3G8bG4RxQrG9zHEx7ZSAqKUg4RfgK7XTR9VKdNR",
  "key15": "2cTWcq4gvw6j94dH78pfcuWv6bLFDMoEvGWHT9BMLSMCtFKAQx1SXDiwwrLynsVhvDbNLmDhBSQuA7FwGhq4vSBK",
  "key16": "fcNn9Yv2SqYTLftWG12pxMqkpGsULxbKRMcpGuA6SpWpasc43qn76YozqNjAxZaPBMcxCkKWtt5YqmpExRNz86D",
  "key17": "3j6bVSsuwVEf6rrMiTPwXSqY1nCezMYyCt3ekG7wpf3DtB61LcMfDxaEvRmJ9pR7uPXufQJ1EpbJwtL37n6PKrVq",
  "key18": "2pLgnHwt89dNADsAzM2q9n9sZsPXaFJCik12LKtDDTrKtEuPp3isQviphwEivRtomnavVz5QV6KzvUn5g4JxE93f",
  "key19": "3sedn8EfVD3ZqeGtzgpaJwUP5ohFCRWJPZL8yiYm5X8DEb1UFdQPHSkBm5bocXa6KsMGfaCsCdsA5jPpdQuF62em",
  "key20": "2Cbmg1Ws4kjzhkgADNtMGhKDTHeFDCQ9orhLu9HMLwjmLtS9h91GaEf9JjqD9vUfiuWekS7EXtVva4Mo7k2AzcAU",
  "key21": "5tKaJZuYV1bYNE3BaZxeUTnQxpEHdLviCMUxQqLUNsvnHHrwyFAtQHK9EWu5L82oS8mwJQHWnUXCvaNQn3WHTj1h",
  "key22": "3WQRCziTMCbLEUHF7fiLf8WPs58e18w1xnunSEDpXRqxWzTriKXgE5sk8UxFxUtBVDvHwx6C627NNqgc9KQ2JxnE",
  "key23": "AZecjCufasa3rmnhafk1wDwGCUvkyRykWWngDbFjPepSqx34qkWNi4mquLfidBxBopoENR4N75fxdgjyqXCh5iv",
  "key24": "2TY5DgT2JhMyeqq4SKeXxdD1VfFfpEXPAuMBqjCvAHyVh6MtTEKLAFGKBnMNgbs9YtbbU4et2vBBs3KiuuGHtG6S",
  "key25": "3xMDsN6UpdtRF9nQgMFC52Lrm6UKR9CynpxHLXBDqq4deFCEbE1iCPpj82g8FTgfdM3ch4j373CQTH9v1y85dXBe",
  "key26": "3D6viX6aDu9BZ9W5CNTGtMJ5MrNWqHTbAf7bpESamUWUHceatuJZjYmTXhD52P7G5qweoXUK8UCgjV9Mr8V8QsTF",
  "key27": "2b724jnxPpxK3GfFjgbxQATwy4TX7Nnie1UhhNFonDkUfmGX7KqPqwww8Dr12JjJA2kgnZ2j351R7fKwPecqzwFp",
  "key28": "2FfXERqkh4byeXHHutPnXfiwx8GQxEC8tANEC4he321Fx177sZzhRRNZNAoY27occstqbAgr9Xu1hQ3etVEk6gRR",
  "key29": "4F3pLEU1pnSYEjxWrikuugBTdzVcjnWh7Nb9MmWhSaeiHVZQkh9cbvzDwZPnLLuCFZToXmcEskWswbcJqfbqyc1i",
  "key30": "4r4BUZd8xZAg68dCmeLBAZ3Xx2Q7gmYtp33MscC9EwQzeARbyMYCqCf7jBmvunUvU9SQLMqqjEsJtuoN9NpCAYvd",
  "key31": "4EPrNygmmavajhq6DYS9HeDhEHLQswbKEfXTvJ9rptkUG3DK8DTSKUo6Duw97PT5F5ztfq8gHXzzdxw2fSo9UF3P",
  "key32": "3LWmUKfj3vCanzC1dXigmuTt7K3Y3EK5Dwg9g1grJ4MGsXjBXeo1e1vaSu7rGMDUEEd2Xhdjjhy5QWwRs9dzpBP4"
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
