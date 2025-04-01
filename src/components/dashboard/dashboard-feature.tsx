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
    "2cFEsaA57J4BUW4vphLpBkE4WDvD5sQp2hpUWq5fs16Nhrh51vsjBaHYCrmsn4UUdarNoAkPkevRtvpKDZnk4ggS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61zSWSbeDFEaADjddZC3PuA7dAcfSxmsvnUXapqbF1bCvj6VfdycHdE1nKeP1kKFURomq8uUHNqryF31BNksG3hT",
  "key1": "471Pq3zMDCzCDL9UNb4QHSPMssB3sp32Hcy5THJHK7osXR8NehGSQfYPeZTqAg28V4SQNiBXw8s29uBRauytmYp2",
  "key2": "5cu1Hj6ozq3GdGrrCuyK6fwtBTwqd8YTDuB4jobwhmRxxbXHjdEmtLo4LWgzj5Q5pmE55z1e6P9iZ4ntJEtSYruE",
  "key3": "ZW6BMWcJsLL97rtJ6YJQu7LkrAMkUTqi2Vp8rLkJu1QFi9GqxLNPVgJTWwcNLHXqbp647PebwPsnHyVgdMTX2YR",
  "key4": "5dBpV55Fn9J3j8nYqH4r6C7mCLSmM6EHM3kYPKe66LfbEpRS85MSW1ifosv4BspfMUHTDfAgVgom7eP4etAUExwa",
  "key5": "P1P9THQggKsEUdK9f4SwwpwmttkQQVjYPHLGGvxQ2d8dF5kts9e5CdFMWqpKwYP5wVSFscCrHEqhArrJwxat1kr",
  "key6": "2ruQ9hr8Rh6GhUdzP65HAWqsJ5D5kWRwvnGmVAEUCrLEnu95puKrBNVXE4ZZuy34Fwyqg6AhrSr9YscrFW52Lt7L",
  "key7": "wChimVqagLKisvo4LVuLAWRsPAsAyMLuMzPQFp3b4KdDihckxwYTFvw4kv7AjVyufNoHtbqTn5bJ3gnhtLEokYT",
  "key8": "4CSCdBZyA5Dfv2A8c27xNDLyweytxwHLbMaNBHFMU9N1FjfCxizT4PRuaRELBm4f3YGSmTpgk4GqEax47D6Xqqqx",
  "key9": "4sBjhPmjy6jzv1GtsTB8v8cPkF9gaudhTUqoazejniT4a8Ke2hi8EFyVCUgoQRUmhBgkbaw6XVDMSTi2w28tsqge",
  "key10": "24SGF5XADhRWVVMpcXEVQQ3afU2iv18HonH89tkJaknoeJGaon9A8Fzq6hraEBQFDV7nnTksUPmVm7nrbcRPo3Gt",
  "key11": "wyV4cQgi7ds9YRZJh4ov99QWT5MtXR6YEZ8Gmst2Bg5j1EYv8DwvVVTSp7UCMCsZTkq6jezfkjkET1Excux5rMz",
  "key12": "4xAA3f8G4VBCfjhPeKpSBjhjCfFwE5LExqnaLcGRUZwPeQocW9ZmEb9xPUY95G8ruNWoivnHrFr458HYRDZPdGXZ",
  "key13": "W7yj6xjSSFc53qL4kxCESxBHnT5iMLPuvKgdEYZxoy3RszJd67AhoK2Y4euUCkniDE379ftKcQfDyiLtuB44qkH",
  "key14": "2pD9Cfv5GAbs3eQSzs3kLqwuGEFu8aXCZynzgQ819uGMEHsKAvdzSJcXk5kSiJMNA999whY1Kmm7stLqNZzLZnxE",
  "key15": "5b58TkPJ3an55fvHHcHyWPhtttZn3NwAv6qctciu6tVuzJ63gXUmSfevvgpTVSFWr2CFYBfQ5PzwpwGV7zq1ampG",
  "key16": "2ncZcBQsKaWN18aapaymzPBrSazapJB58RjVXoAozhx7du6dfBCtnmpftfifGMKHq23BFszwVUgFvaN3AJmqamvr",
  "key17": "4Bggi1hGFKX5suxcGyG3oyY4iC1fHkypo71ApYbwvZRKZswwzhGanPvihsG41EQoQW7B1DSy4iVnQKZdsew7e6oq",
  "key18": "5f86f9gohhbmKBQSDNMX2oZJUXiQsdptr9DDrT2s8Bj4u71yhH1g2is9ynk3seC8DjhK8PVuuxKbckQSSGF585C5",
  "key19": "2Gv91AkQDJRGWZ97qRQHRg4vndUksh99L5coLJPNPuaYa38vXAtsZMTr1NCzk5Aa43e7XhuNb58duBYneGoMQh3k",
  "key20": "4Fm4azngWodF53HUcUFujWH25vSNQoZQBmFwaLHCNKvQDFK3Lx5yWvhyynJQsoGd8qurB5Q1pkQPYTZxD5APPpSD",
  "key21": "onNNHDwkYWHEGo1SVcnaiVDZrf13jCia9VznSnoRnrfLq7QBfxt4whizGJcrAv4CvC1uS5x91jgdQ2wxw1qiaEv",
  "key22": "4PHogwXEMU8cCRW9G6EptUMFbiyPenxq1V9xRSEJSBndrur9rvRw9m5F2YpiF7rtzTav7p4cu2idhQ8yAsihhJW1",
  "key23": "xeFjhWPFHowDk5iBbg7Ar5BRRUhZYeQXbdmZpdioWzWggfUv6SpQFxu428eJa4kJKw14kJfVFkf9pR1g8qKnXuZ",
  "key24": "2Puvzi9BsPv9Aghehrgj2ChdtWmSnecRRE7SosRMEK2vGwAPsfuuERd7HXLKNEUmUyqc9YFAaoCqvczZvGqQpcgy",
  "key25": "51oaz5ihTGzaJzDpZovzz4HuhgY6BqqCd2koAvtffyfXEsx2SXjKCQcVmhwYSvejx3KcjW37Fsz4npo1V2T3BzNz",
  "key26": "4xAUKgoN99dK8Y49qemR4yAjWaUQysEGpiUaa9zYqBhB7LMNuDZG4nMs9EuxnMsi9z7ZRhkGxhJRpkhGgGwcJk3u",
  "key27": "3J4wGC7RcPm7ym6gvZR96EsQwwTyjyQLC6cGn6siVUzfZJFhysykJ7DcNnzxNdowUp6ARfSDZFaNKsDmew39BfqG",
  "key28": "2RUE4qq1HmcV2PMp2eD3kTvkf8zA5VxLk6Aay2ENAdgT11GSAFm3jJzHDiEaZkfF1TdcrxLiXs7n9hcNY4ZwSwTL",
  "key29": "2tmWGmjHXaamEgRsj5td73t7HQWYT1GammNTByR6SdB2JLhu2NY8RTisZehBUGVoKWmpfBA5W4JCLL9h87MkVkrM",
  "key30": "BVekWXHJ7nBPayFuk8j495X2HvwdRs3cHKdFCJ1dayrbTK1uJfwh541KumwLnxJN3GYiXi5FiivhZGajAwJyhQY",
  "key31": "3u2Xh5gooYUwDxh8X42xPLdnbruPo6BuKm1Xjo7BGTtTDjDk5ZSNbf9UxZfQRBEWSRUpghqRs9CbA8zQdfRxGgw1",
  "key32": "5aHBDGt3ReGfKneyhzF3dNz8zxp1mVtLHWmqDz2UCGdbWFy2BHErs3XWrCDdKMS7FJ9252PJMURzzXe8bnDfUa4k"
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
