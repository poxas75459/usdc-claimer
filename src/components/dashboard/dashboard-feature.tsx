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
    "2WrRqrwQqVf1mjnb6Ducg1BD2UUaucChso9JZsmLWQwEzxbKps5GTyfBjxvrJeC2vYcpNRcZ86V4KL89xJ8vGaRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iktZ63PtCpn3UjfkKegGnZSpKow9DpjbjajssY2drPnBb6nJax9XU52tM1PwjsnG9RKkLTCcyKanVxWVfzbGDF7",
  "key1": "4NAFHJGVc5rFDaKHWX4BY3niBEejq9xqLTFD5XrarPtGhbR22ua4UiastHqcFu2n3NvxzNtgEJvjquEveudJgwU2",
  "key2": "2tdbzhz1poF1rM8Hne3pqDVY8Pp8vJiDiU9CcV7t7DzuveNS6EEdSu6Z8SkHJ9Eh598WqD4LPM6fynX8UyDkVqhr",
  "key3": "oXUb7WTDoKe8CaXbxDdTDR7w7LKZP2PP5Q1YVeQ5amUNvYwt4bm5vPfpgS324RfT9KWJs9CJJ83Sf1b8mTbZryM",
  "key4": "3htp878ocgyssFNTKrEdrd3neajnhaV2SveXt1fUK6RoTutTWjN7FUwrMf6umSRdSt2Mr8aJ5tejhXjVpjN9Tq3y",
  "key5": "5nQRUm5XEZY4yDhFYnjXBKwRqm4wFtg62ECqPxsJrm2kwFy1gP9aSjtZENNZeMfcJaDSZpF5vQJrWHcAMfckcQV8",
  "key6": "5JPpvjHVJjL7TqYqwpHzdQgw7256vJqiH3kqT6cekwREe5aTFrNAci33dsGdUT5NEckwmhw7wxysMnh8TR5zyHqZ",
  "key7": "5nNWuqJRz2jAd3AmqB2pbxhgFzNBBYNNpgKioD73QY5iNw5BCgKpAKtHfL7J4rwhvP17Fkrcvw17Yz8i8wpS5NZ8",
  "key8": "2vkQe47JWzX8YmeJawafH9gwajqZAC3CwvoZJgvensXUAxtQWttwrSc95V2T3ZjnuNe21J1zooi9Q5TfXGRNg6CD",
  "key9": "4GLgtFcXK9tQ2paEH7QH7yEjgzU1FhX27FaBfm1LE5eABeySDSHEdazhnCm9ABenr9z8jKwoa7gG2mCSgoCUK8cx",
  "key10": "5q68K3RLMicedUenxnJCG4HQB8KJbLxbSzKPQmRw4MXzroNwgevNBDFtaTZBEvXwCUkkzTwdkWchzwPWUJ9fquvm",
  "key11": "3V5SF2491mnKdCpzDRTFgzUHLHDBpMFbwrA8qepbeYPA1wuk1gjNZGtMh9FYx6s6trfG8CFJcdJGMMSTwBJB8m2L",
  "key12": "5Vc7yDEDjtp1eiiR8pNizZ1o2JSfJeMknm9V3DgYLFExg5zJwaTWhYLh1KT9DuvCJdewqQWWm53SYEzb7QWiFeUv",
  "key13": "2ULHFPbfp8ebeQJaQQmz8FVcbPGvKzP4p7htHF2EkuiMJYUGnaYLzacUzAAAnRz3Upjbj24wN6Fekxd7jxEV2V8r",
  "key14": "4PVbwMYmrN1GcYTs8HFyE3SW54YPoDdxtBuhpFg7DF6ikYhzBWNftCuybAY5g1k8pxjPNwP8zJVxeDgHUFuLMDKg",
  "key15": "5qxh6kw18n1QivjLLCjPHZPC8uJaqK9om245Kz7TqL5mGG2aAByfUMeLMAk7WKj6cEXyY4DetLwwbtpG4KxG9h7y",
  "key16": "67Z2w4ytTpcjbcLUgz43Wbx3ogrCUUh8b13nuzuEuucGYaMEK7KdY9vxvAf1qPsKXhNbWYrrLNQ6USj4qUZgDkAW",
  "key17": "3hnvJRVqWuNkqzgmBrPYeZM5UdCp2U8brfcZfYsbYjUaqWVMi11UWnR9aDk9PhKyxUpdp2jDFTZHv7oyQjezFGBY",
  "key18": "3Nvk8yGfEVfA2rzfzcm86u6cZLHm9xFyhMGuCMHMuaMoQhG5Qi55dHH43WPhPeiZ4YopUr6WaBkS2mYJQ4sWYEWE",
  "key19": "3DDoWpke2hFwwGVz5RfanESXa3ghQQ41iwe1zcyfD4WHvNLdQGoXV4AC9dBNRVWhJU4JztbNVSAQDhDrF5bPsd8j",
  "key20": "2e4J6MBeuzYGZYhytwekZrXeuxk4jefYAE69rGjTBcKbGfUH81CwY81w3zCXhyt8MWA9UzXfJxMME7rohN21D4uk",
  "key21": "2BkN6hdi4DykJpbuDvnTErq4LG3fYSJFWreyLwQyk8co9AbHKhwRUN7SiJWRw2x3ttbhPgp3gQdHR748fJEjmrJ3",
  "key22": "LZLnZNZbt67sxNLPzdPRhEaBvPsG7RkEpApJsgVxEGKhYu6ASLonmqQ8DxC5RM6x6nVWC6SpLPNdxg9d3H7UzV5",
  "key23": "5dYVaphPaVFbBFFyRheCNxYQrdnaKYVFqLRkVpbJe9GP4H3xCLBdijUSCpuWNbKCFBtHq8KC2VAWvHmh5kkQ1JrV",
  "key24": "3dZRVC5gUpA6xywsXk5RjU6SW83PJ8Y4ehi5VxNkZtdWXuyGzj49H8zmBceSRSKiqeZ92aJLot3NVw85TA5RHXTg",
  "key25": "28GgFVh4MdRRpWJBhpCAexSYTWxYbSzNYeAsvWLfG9NziQBRzwgYYddw4hKVAzKCWjbq76v2gU4r7dwkcPRyzaKs",
  "key26": "1dfnuQXiff2nfZoR9XsPuUvJsWbGFiStRYzvuQMaQfjBhmyi3xajbGkL2JLDRqv35N8W3z5v7t21RsYxvZhvVrD",
  "key27": "5PH7XaE7aQQdcvNTnreTTD1bsnqwGCY8WJWRMKPsbTDTp8LPNd6EgcC1S5pXCkKd3NBtHgGXA8qh28pL2tR9FiY7",
  "key28": "sbwHzic5aJJLoJXNSpYpp2QkbGinTkBsphDWQ2d8yMHetWRRruxmBNC7kH7JjjmKLcATJ6HYmJiDmRA7x6g8p5d",
  "key29": "24zSRiCWCD2YLswp4UQzJCznHYf9RGzqEb5cM33qsAm8k5xmJefrDMsau4nk883eCCx4zyedFYwU3KC5QXUujFZK",
  "key30": "3edYqAXVxrFsFM2tivpbhRwew8DtXnshQNrxR66NwWc3FvAf4KVNuZg3WU6S2jqnwXaVgPF1GaWw6yTgDkGJpZBa",
  "key31": "559zPan61vc1PThmqiFxtepmqrrPT1CGJNKDUu9GK4CeVEeHGau5Z5wM78269JKc34c3FhjB32DJjpTVbnFDYQVe",
  "key32": "2LVoHRPV3fY8AwjpK8Knp9GPfiw7St76FZ8TeyiBp7dicu8H3a8CJDdhsxQPoDFWq63rAWqyHf4K7VCvGVZ3zqYS",
  "key33": "2zPxw7DpqRygvsec8w7HnZi7z3Ptpv529fib57DdBWNBFpXvaWwUcDghe3jcMD8fH2wLNyFZJsAUnjmAw8PciFKo",
  "key34": "5N51K3ma5Jo9BkSHi6kqe2bDtAW81VFugNtNBLK5L4gfbMcJk9UL37rCVQf9vZZaBdsyPqtvY2CR2ofGN83CbE2K"
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
