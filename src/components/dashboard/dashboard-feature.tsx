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
    "49RswXsdwPrVq1JE7xvpm1xx4vzF42cF2cYAnPMnyjDQqw6PiDB6uA3kTwhxd9jE4QsMpcHEUwQvSxKsB7mEEVUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayq9Jmsp9kvhj99zkLjBDPmwsBCtRkZmxtFaqQv2baemL4txepUxezMipiNtbqcCoUDJLQR2NtDmg983oYVP6Q3",
  "key1": "BC8ZEVxZjj3bcUZLkheymNS5kZKpp2edC9GKhPEuhJd2WE148kAS9uJwFotFjtKN5HvpXoN1kCYF48UmbwSaZSR",
  "key2": "4TKX9bfm2Bi9xAd7f89peSb1R9QEpCJcu4KyLi44FrQcG44RM68cPDUFkccddJ9mj2o1LS3TjVLGqheFQyGXF276",
  "key3": "4gzrJxjCk1TFPLnMpTrEtZcr3gKXrEqZZamp62yYEzvmysjYzB9wmX9Xzs7xm6qJSnfN8pWy4BmPdht15i3LFGee",
  "key4": "2NyczPBJJSxGHnhSwKP29FxMVoUJNDnfRLnaCzravi1AAsf1i8Mdot6XoY5kosSKKTj1a33E54buboMA13KzHMU6",
  "key5": "sPcMJGGgXeABwrrfEW5H9MBhLY2JNmuNMgcmrnBoGmGnqVGww3hKhoM7Z3xHF27X3xFTsn8tKDTHHGbjbFMovoB",
  "key6": "BrZyuX6e3Rs3tq6uMfL9qtmDv2xw3nh4odS418gnsDQtEH5k3sPBk8gUUW7txXULb6VaoYZjbuDdZxrgmUba6Yf",
  "key7": "4uVPrZu1xUTs9sztgxbgnAHRzgzW8LCYWPzKxvUZE72ARzeq53q9e8w8Gp8m2gaMnJvLE3emwr6sVp8EypRuxJxA",
  "key8": "52xE38jivs6y46zLs3TAsuUMzxR1M1ryee7b1p5KRvwghpm1qCLuBWkFYuamJouoX9ehhNUERkSrR97z35qMbLVP",
  "key9": "39Fao1wT9CbcY6MVL8fP7q32kZQqzcJLijbPZZusHP6djap7NWkq53ufDvHa7UBxtSCX3LteE65Bv8BtwR22FSf4",
  "key10": "jvoSCnS1NdW8wLjfLfLhG6jmUYUSXZETxe5Qaywd8DrT8451xXymfPPiWxj3KgyNZtm5os7pML39egFVjZ4uTH3",
  "key11": "2vXtapj1HqfkAvk3LV81mYZ8LfpqfJD8d8HWSGZE8huMoUWGuPRYbxo6yHjH9fCnrH1VTjeZMmh9BSD934eTuCtq",
  "key12": "ovaNhiqR3MUpu6e95K6pWnp4Wz3Lp6jYUcghRmirQ9urAMuBU7Rf2xfa3nfP3azEFt4vtpTQX3B6vKJHFEGiEwd",
  "key13": "4vukFYnaRoLNDpT2NjuDTrQ2Uu2F3PB7R9yQiAEANJs9SFLw3qxnTXRerbCmoBBvVtjY6JkZDnhnTvX6bUMX36n9",
  "key14": "awiZhceeXdGjfj5qtvudsujfa9Bh9Hd2AjrZMncXHs1m5UyUyfh3cPbegFkp1PHvT16orWxq3U6KeoSKvcBapcm",
  "key15": "3mz224kSCSrXgrQqrowZrhwMeHN3gRGcZLGv2fJcG3wY6a4gN4qmeo28ts62HArQt4GkbzZPkHCLuEwTjnAuYUd4",
  "key16": "cd6Fnu4unpsPNZcdk9vh5NUde6Ho364PhXb2Grph5et4PZ2yWCNNLU7RJSkS11jQWznUN4y8XqhHqjHqxKV6K9e",
  "key17": "2rgc8n3b74miDo2Ke5jSBSMQjhHBgZ6cXGtE3qqpLZsbhsptzLGFaF3ankyFC8acS7t3b5PGAE9rs7NwxTJc321s",
  "key18": "62n7ozrKkaGsyEk8yCkX7YYPx5YSCVa1yo1LEsfWzzdeVyaVSHh3LUrvZKfj1uVHeR9bGgs25hKu4SMkwvt7XdSk",
  "key19": "2VVQTxSJZR9nWJ8VZUrbDJiqe45sqntB3wWBBhJJLGnwKLe1CpkRV8QCdLhuxWiVKz6v8pGduUCYp4eVJxGQBPk7",
  "key20": "3wCeUjDae17Sx4FTeMoz12RHhEzE3fCX8iSYt9qPwi215kXqoE4VqLm5LXzssYb3EutPWxZLzRHc9efMuPVnU9Q3",
  "key21": "2qc7YzR4xwQk9TYap8PtE5CgJKCw2H5RMwUShUdoRDGTQWFMkyj7CtbjSEaoiKdjBKAMQU7uCHLVtf8ZWiKVtdoA",
  "key22": "5Nmp6WLkj7MDi2CtdyemgE4zYx3gBtd441ZnEob8wR3XbBqEKiGjQqPBnhtUBkYMTCE1CD6zcuSgrUQTnrYpTbg5",
  "key23": "34hwKPCTxKQiemLiLQWKEx9qamEsefHsDwwEG93x9zudsWzcuT4Awr7KgdTBmfEyCAPEqTDyK5zmwFkVmb1rwg45",
  "key24": "54XLcP29vQaxZor5F1Tgndt48G3Fs55ZxX8fePJC6UpCUuA4dKyFS2NsSANtkrc7XYhFsXZDscYmaCZ41Ti4q9rV",
  "key25": "54eYdXWYxZ9hV3JgutJAd6W63gkT4B3NTQv9bDpJgN1niyNkhaWAm3SgWreJjKfwzrm5YG8Yzb9Gvn6ofEotfLba",
  "key26": "AHvewutbzhdZRHosRjWaAwAot1fAgu6Uw7sMy3zr85h8pG1vaHd16uoWi7AwiVb4SiutE5PZTQwWRUw2UG7znvf",
  "key27": "65CscKZ8ij2J6KXG6urEvnFeAESso2QWZ5FPay2rBzoy8WxEzjvRpg9Bm8BLbFyKxxzjmciNNSRgTiKZtDBSN1QB",
  "key28": "3Ut5AbYPB9P2eoQ11iF3UiWmdBrfE4XFHJdSKkQvuZgUM3FJWkPjNQWCfaf3mJfkWTzBSPTbAnzLnqJ9CGZVXWeL",
  "key29": "2CJkYP7mrBCVwznfXUssKSzHJ5DJSgejLqwhqdAHCKJNg7efUFfb4dUEPdQMAsHrjjMeWh2gcFHKfEqNkdzMWjiA",
  "key30": "4XD5X3PcwXXrFxxacn7UNazX8xYNpnAvbq54dnCAcy4as4QzRwbkV5FRUvudEKZ45TJnNtcWXtzZtqzcqeiRWU9C",
  "key31": "2UvANofZPEWC8D8j6g3ayKSqEVrGuyuDQJZ1YdVLYctf7GRSnUgZrD666UtHbJYxMYcC7RZH6tqBaZQmVYf93Hrp",
  "key32": "3V4rnFsdcXpfnj5PpdSwVCqFBnacBm17PXE2oDprhRNWYMnoSE9TUNDLAZ9kDakcCnQEvKHh5mBnvCcuvdSCgzM6",
  "key33": "3t9aPDTbqvF1d5AbTM2bjoiWjLZWTMvtjJ9S1fLYW67Q1o3VDgqp9Dab3Gnqp2fUTEzMQ48Hmf35NAzo2E84ykCN",
  "key34": "2oUPcVb5qwP4LyWeVGiE7yjqTfYi8hKnYQut8WJTLxoT794h3HM9vW916vzasTkqSJMLSAJGZs865Yz8WKeUsPAn",
  "key35": "4j7Q1r156Brs2ky3XK6dqVkhZ84kBMBnVnWtVkryEEcbwDAnsvEHhWPrCGHeMwu8mtvJeMz1MVZ5SARi9fDbbuye",
  "key36": "ThWPecbk72MZv1YDXMizcxvEq6nqqDJE13B5sqZHSjw8jfUyPsvcmU74CGnX3BiQFpMw7eaRFroTCJsd68ue4tv",
  "key37": "2zd1inuekH4cnPXkAq1U5YeMbqC2kt62HN9BZRBn3rNN4HhmkX6pHSVsQdw8frNQ2Wa2kxAHsatL5WfXT7M6UhSG",
  "key38": "2rmPYMR41zAnPL6HKwN5zWFdQ62xhidcswENFsQhfTmS7ZRYGPjfe5UhcAa2PKg6J8Hw9ZuEz54RiWKRbniQ1MF4",
  "key39": "4C4GrhQuw1m23VdGp8jv6CeMK9dYeASTYKR9reWqcA7JDRdchaGAXPAQ6NZ4JyxsfJTg1DJGjdBGC1y7pAoct2BH",
  "key40": "4SUoZ6EDu4tr2rPryx8oe6EeNak4qvqfbAJHMURoDar7zpfAcQPYP2FuS6aWB4yHD4uNvCRhDokjXX2HLGjtKKoy",
  "key41": "4zEMfvQmi8523NVSucSJwbtYp6vw8z8ZzNpmDzVPp8gt9hfv1ha8orwxtQMTSmkwZ1r1PUtcUxsUNFQHmz1CbHUj",
  "key42": "66RTSwUhYh9vaH182buad4bmWYiM5JLPuGTm7LLngVYNjN7JzGWjZ9E3JMuGHwTsd7748r3nMng4bShrt7DVQSiH",
  "key43": "49RwrqCL6DcTKjcUDwPXuRZrK9qk1xs4q3upn7gsFcCA5juVNYEHZ2kZ4dSjB2Gxs2QkKyxVoXeczJzWZfmTxStt",
  "key44": "5C1zmSgo4k8hziachWNzKpGmXU1vQsr5syWQNgVDezHnKng8eYkeR17bzeMGAKSrooxPsdGiwvAvGWr5sqXzxHre",
  "key45": "BnxCsZQL8DQzgMyhrErpkKQC696wGo7PCVmHXNBSU2j11kyKwnmkNxNTDtjBQ5FaYpMcr5MBKkzAS2izz8MGG6L",
  "key46": "5V7S2Lizt5e4r59Ahjvus7ij1Kg9PznRM39B6No44XVuUWRbe9WZ21v61ekM5Zd7PpCFzy54MLWDHwC2TZHg8bNR",
  "key47": "2tYUS8KjkTqoVgZewPwsr9dK2nTDHcY2YdqTgyvKMGdBohFPVxrqyHMDuoXShte1FAFuAiR4oqr2kJmT9P5MT86y",
  "key48": "Rqs9SjY6AmrWCcaSv9je2AnDqyEzYd8nbZCWRG4FMznQQsi5DWA5LXtHDH752F4UvaMNTBfHL6zEgeR7CwWAa7U",
  "key49": "5gPBqaUp4RfP3xD6Aj8NEZjSbhM1SdnDFaP93NZHjr45iBAt6GwA7oNr3JrPJgNz5x12JE9Y7CNz2793onZHs5Tt"
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
