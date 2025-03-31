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
    "4CmUx9bqEKo6NYsX4M3mKaEuPNm9u55RcRVaYPaN6FaDaivCEHT4fbD8Hjzej8AjnTAipDjyUmQxmRNA8BPZbcgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRXFVCVw5SbfbmDdQRXR9TrJY2yvc9McBH8VzhbWSkgPTVXrkWUYsSb8mJYncDnDJDdYMvzXVveUpoa3y3XzCKy",
  "key1": "4MZQLAqib8fQop9DHLRHFYsjRFRzqFSrxbpdS9j1ezpfRqsEw1MmrDosan5NE34NebEfpazkA3fwB1BH8gGupWLU",
  "key2": "3Mse4NVjYeGN16NKwMHzr7NMmxb9Q1uRi2k7MWQU4AJirW9KPdxeX7awnSbmJWLcxjFgZgt2qB7dRsfvaKniRWB8",
  "key3": "4ToYrnx9nmN5eTGJCQcxGEyNH3QpjmQuj1QeXkRvRwyfLwmW7BvX3vk1adbmejVm6KDs7cfHymsP5BRPQeGn3aZo",
  "key4": "38YafapK8wBZYxG34SX8kDnHZpSveDugQ9JfaoBs4xHrtdPjGfk6mYkjgV1W7eKxfRec1r3MFkMS7WGptpefzmQE",
  "key5": "5M1yWciWtoEWVkiTtgj1C5H24gE2HVBhjxzXdTUdgzkSSehkAPgSz5fAHHT91TmKqsztMWsxLhUiinociSWFaCSt",
  "key6": "2aA2uyxn5Q6ty3EdqRQHzEoLpDHziNyLhLcUhpGX5t9YJRy29K1dCfq8AKj4SQUMQ8WMThMoZH4kByitJwo9e1nu",
  "key7": "KkwDU5TKyASqTgE7XHrkkeTtM6Jk11kM48gS2K7k5NZmcnYdP3jsRMfoGdBugfQGzGYTiePM92fwkbjjzSmHQGg",
  "key8": "5op6Mo6miBtXdo2YAFw2XszUgBnJy42Zv53b1fZddLUAdFzaSWFsYNr2E3PXgzsWHLeswYExKsGR638iLnUSMgjE",
  "key9": "66iihUqbpX1bpW7mvi3LozXXwaxaPfFjQiAwG22A2FoL7taoSxSgQi8bMsVpLFPwkRUusQ7s7HWfFtYAXHHQzjk2",
  "key10": "5Td67TanVhoK4TGuKeedpwXuJdPJJrCG3JFzxSszdXaeZ9aYA6ukVe9etfDWhvg7cjcx6HHBLFK8kRZChHaFrXAP",
  "key11": "5W65Bf4TPwwJPsKs1eV4BMrjyw8Sm5edsKHV7fj22dwfMuNbKGNKf8mpdCssrwnpfjuiY5ocsoqVtXWn9ZL1qiFk",
  "key12": "3zNwTnywgbgm4PXyWF3vJEWqPVr5X6GGRnNwtmp27ry9u662E9vYAYgVmXakmpMqaHMeyg3CxGPq4DRoFv3vGYUV",
  "key13": "dsWFonnbvF2gKr1duN1mSBMeFNeCBaRzXASThXsJugiTWn9rmjw9gDv4UMnJ2BNbhPMiP8T7HtX2peUxm8K2aw8",
  "key14": "4HHkMFyG6LNSdgYrjgS4jmmdUrwBFYrSr9jje2dW9HmmHMuLkcbh7pbR6aDS3thVUJqXzf4kttKKqN7kVGPvF3U2",
  "key15": "rjnVDMMmg7PWw8PEGthSiE4mwkCaqKjjJjfYaJm3i9d1okdFBJfJfJ9SBKaw98bDnu1PY55QWmt49EuApeW2wLm",
  "key16": "43pWQdbsq7mfQLbTcyDNSWebf8YijvUdXLQfS5uq2NBEikFN6G4e5qJwzhFnWfgqtwe32f9JDtRaGBTqCX9LUVHB",
  "key17": "5PVZTFpiJoj4cTWhxsm1irB6aFbhXBxGHaDQcCosw7kUY2KSmCF9qYLeLFiSdwQJg3q3wkvGSfqRzBidHw99Ynsx",
  "key18": "4c3kDY9R4B1STUZtfVu6KGYeQAEP3TDgJDVy6GxY5vkDgygbTEkLedvVAVGDyYb7pX1uhzrmSUbyun2qk4zvEwmm",
  "key19": "jK7VagjxTQrFn1sHcjq1GRL2MHoQzMNNZGQSwvytDmUBAMpbHhuN2NGNQCNUN8BRwnfGWeF4wKSr8cUZMXqqbd5",
  "key20": "2wHQjKrMwa8WkWpYroivQdKtUwqz166afAoLU647DjinrSNajLyJxPg7kGXkz75KboDxwZJd4fqz1uWkcndcT9br",
  "key21": "5Py1wdNvKTjQ7hJSzM6po6DLmhjF7a4wM8CnjhWGpLbZvvEJt23edFGjaVwKLk1UeEpvMYzBgz6rjiNFCvp148y5",
  "key22": "4fomxyr5EvkE2E5v3cWtu2BB2FSTPomMxTrZdmZfFrL7p9vbCzc6FR4gFqrWg1M6cVQd4kh6uf7DRHMayGNDXJ4Y",
  "key23": "2MH8dYVYqnBJ4EEhVMmvDr4H8aFzKu9DFSdEmaf2Di76hQqh9aWQWWLVW9ni4WLp1zNjXW9baHAc8J5e8B5siwsK",
  "key24": "2LpcHcYxRrYvu7AEyAtTo6bmkr3qaS8yyN84kqoeDn1AZb4sAJZ6pEbbDxhY54WnxmVYXbYHwhKuZrbrzTz6DC1p",
  "key25": "2Na6B2pFZBEp6VRJXFiVYFZtinvYB4EnjTk1VTDi5LQbqqmhPVJRG6Q7AsUK9A1DXFNBaNoQ2T2BQCZ6ztXKZzEb",
  "key26": "5vy2DHrf2io44xV5JwfELn3zuTeaFhyF2oKAK1xbaLQUpiEGSihpGG8vfwaYFjZWBmpBnKpE98zJ4JQeJgPxVX1f",
  "key27": "499cs5ofKGmLTMXVqzq5zKDBiCppmKnxc6uQjwicHkuP8sszXDTtC2KWjb32Tq7bvWPNubGW7hEAm89B9SCdbsdm",
  "key28": "4NKXYz3VVQRepoVSS3UEJCWrqyBqojXuXpqtzV9gwxroFYm6emngz2BHvw8d7dv5ZMysCzpPGqCMkUK9AQgqj7gt",
  "key29": "A5Ki3GZRQdhqq1ucVyGfCG8PHo8RUbcMZrBmoH2F3p2co2qbzAU69yXQmnjxzPjjgDo2tLrtKW8LTFZYXzj3NnL",
  "key30": "JukP6Cjt1JrnVvm1V8icXWQyqRVt8aWm8ntZjgFFpZ7Sb9MMcd6AdSM9Mk15wv4nr993Vu4YvKnepnSntpw8KtJ",
  "key31": "5ZGDHcexnEbZpcwnZ35QPyLj6kbT9vTbo8VwZGzrLVW4WPXM8W6gQphqpvrCmpUcKQpKvVQxvgfdTkzUqnip7eVA",
  "key32": "27CJ8bLJ3e9tAKWGCMaKzqvhUVD5v4rsLw9moMWGeGbd9aQrzDfwrXqLZHzdumZezzVBzWsGuKBPtpjRTGS6N647",
  "key33": "nZaRdpz3BHQkThWuYaq1UdcQ8Hg56skhML8RZcysXJVGzowsULxoq69EHNdCxHo84TN4U9wPwV9DP1MvbJykEbm",
  "key34": "NEshnbbrTnLb2oz667uFyUJLonc3shd7bYvvQYsMnDf37fFjy13crvotLQm43sXiA82xWg47HQNhPmm7DJmQDWb",
  "key35": "2WVLcF56KjCAzJpeP84qWfLid5e8WPkSuTYBZZpAkKHF1zfe6C3wG9E25Dd2uQ6FocpfQeaJ1mgMSrzwi7hQDYzs",
  "key36": "vMdRnhnuxrBMxUaAvUfsXAr9BjB8DvAwdURs3YGfLYKWkkMvQAswVVA7omib2b8kv1KqtuzM9KAvkdaT33KSQnV",
  "key37": "5hb2mHoDVEpxqrqUN3ur7CsjVnysUq39kCEiP64aEKwX9ZcEibGJ3Lu974o1jBMSpSvHGqB4bNgB65VnT3dX8tye",
  "key38": "3x5y1P114Z7XgndKimHspthmGhfG3rhtK7UtABj6eFAmSJNwnanTdJx4TJGqDrNc6usm6c1H9NmbNGNGmYabTJmU",
  "key39": "4hiwX13ynHWxDJBCuoAhpkeErKvHQWngXnT83AnfNrNgmY5uE5rC6JBqDHURfcXZHL62fb4vji2JsZExsZ9zZzwz",
  "key40": "xDeQd6q3PtRh4hxAfCnqP31rCA8LeySEJbNQq5UUy18D8FaaxKiyx9avnFN7vgqFTT52K47vHCfxahjVyXaxTc6"
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
