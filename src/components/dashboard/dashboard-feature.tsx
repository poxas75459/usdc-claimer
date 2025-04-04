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
    "3FkVK2KSryajBMaSoHKfLLvSKwU93Goh8LFJYWNeLNYwS9Dow35Us8fbqnJW5dMBjWrjEQye5NErphdFxWKDeseE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ygu37fvqBfzh78gCasBakJGcTmALp97oWQzqmjN7NmmtfrYGiQyTJviNDoXLvK5fk7EVgWi72EzUDEe4Y9aFrXt",
  "key1": "9EFWgmUnMymkduaQAEv1G78TZQLprSYYqFAazRWWfNHohTSAkBnivs2hPDU2g1AM4siZbBSXVuPxdchSbD3kuZo",
  "key2": "3Foc1ScA3d98LTa5XCArkwoiE773urKAazkQvEzMWHBXD6ECQKDktQCQMHGCitwZy4EmuWVCsg8i2wRGF9jvtieD",
  "key3": "5MEmNwqFAJQAVCCYExZQZG33mXrYiZuwaXYXTyG5B8hZfmnrUPgr9kGDTQkejxH3kHXkMA2zzuohoojsaqsLoDv4",
  "key4": "MrAKfVskgt1preKx53oWEqF5mumWR7SB79hdEwsxH29rjtuHq2okrjPRMr95hC64NcZG4RvnpVjEWHVfWodtzFH",
  "key5": "3h4RQtmLVDNeUTCN2YTLnhY5CaBiDebDrBi3mhm8v4T3p6BGYzXe1H91PpWCyHqZeH397y49iJgAHA9SUT6D7hdD",
  "key6": "5cGw71NXGZ3PRn6EijXABZsdGay9NkidqY1kbuoYthdraGAB95CJMRRrErztUFdFc5HUQjdNr3rsi7DV2kcqA5zL",
  "key7": "22vuD2qaXjEAkWk5f8iN7aJUycHJYChsyemZnAN5db5CQYn6MEHCKmmENwdKNbm2Zjrid3R2jU9bXH6FMFH8vuLF",
  "key8": "3JqSAd8x61LvYgmmDdY7oJ6jiiakvcqoDBctzefxpXksnXUP69ckVdyh1P63kipcmky3dNMA7ZefAvfenPeCemZG",
  "key9": "9VvVJYMhJLaL9rnCKfiWEPGfGGkNgFWeeykEJg4NjwvBNVcs62jfAj5miCyLSoNHRfQkpyhTU25RHYTqDL82MSK",
  "key10": "3SLxohTuVwpGiLQ3gPbJYhbzoGCT4xJTB9Tg1Gdr5bgwPnmHuZthiDMyx9P18Jwa2xqgZ5jy1zXo9ugF5WZPgWbJ",
  "key11": "2QVep1HKAGob6tYFnoYGrzTWhvpXRi9mnfXwYXf82M2wnuQ2nKeKDFYdT4K2cSpaUZsYq8VtW3jc9tV6Z1BDacb9",
  "key12": "2UPqsa3ReKmutENWSKxpkR6dYD8fqvnxGob2Cv4b8suJ5NzXmi4MLvvKKk48KSdUPxQZoLtCNLFVqiAmGQ8aff5m",
  "key13": "4ZGjejea6NW1vbYgN2wtZ6efpj8oNj6yjZv9R2WyT6vXbvCXsm8DQgAcvPXaps37zJfyzn8qPvrSXzsubnteCFEx",
  "key14": "4zDBx3bUR2WYJiZpFKx29omDuAAMHsc4qtTacqFvDwVMec1js5eWUFjN3Te9WCoYDMmU65GFYtF7KsKm2GGT2KVG",
  "key15": "5m6eiK3L1fRHerqxJBkpySHG8f9AEKwyk8rhXtFkQSruLSmeZdQBWf1WLLrhzY2qiwL99LGnmB4thvHurkPxJu8Q",
  "key16": "2vRQcZKMnJorgosG8KcvR4Uhf49wqwHt3UPChAAcGUdD4f5D3RBkzUZcqwVMx3uRmWw3dXQB6vTWfah2RJjHzDyh",
  "key17": "5pc8PkY8uHtmzVWUev4zUvmtmtSc9pB9A9wtFJF2GTfdL2yCAAPgRvXBJieivEvmDEJMX2upCwLBysikDnMu9NLV",
  "key18": "kpDoFoA397FXgRzVQP8SrYX44EV8jXd9y42xgBsRYmy9hm4S1yfZa6zQiesUUpWmMpGvhC8Y9VvNGB9xL3hqM1u",
  "key19": "kfH7YweYFhEkfCN86pqZwujpsNzEvdtA8bFQ7uUnAu19NCnyATEDP6v3oA8YNNhEEkmuVypCgJG6dVscqafjzms",
  "key20": "2SV8SavyNv6ibpqq2h84k33HbbTbrtD6bowBrLf3SKSJuU1YLSiojfk4qfVzsgB1bef5zuSwR2UgY1RayUMPD6YR",
  "key21": "2V9AgqhzDF2KU7Rns5kUSe9r1abJKtUpcU3EB44fp1nwr63LSBfrPrPW7zskYb77kQnZEFxoDs2NskAJm6E92d5G",
  "key22": "5mKNCi2ggVMcewQoTsWHavfj6WuvPosjjquZoRVjrFPGwt1eUhHX45VW5BQMpCJBzhYn9HBvyE77wwvPYezAwqDA",
  "key23": "4jFdZKJiBuro4RPZx5sTtRdv1USfLbKNoKF38fjwSZEPv3DeVYLRSyJ5MytEgLWgNPiS33Yb328C9JJtcRHi68sz",
  "key24": "2Xu6QTbMwqULzX9zQErwbMi6NJUpdNFLxv2CkhpmHE8XFXHcN86XbTmZhmovKFZKhU51iqmoFzBaUvR95LjQ3tRQ",
  "key25": "5YnnD3LG54oCNx7zD91s66xLU6uYZqMseqkkV3yTowzxEZB1c4Dc4J4v8SR3qx7LDrbREqp2n9D29vRvtwpdSRHk",
  "key26": "3mHnEDsmoAMNKNZYtoiTJNuUxMSMqL5gRUFFyo8QS9NYAL93xxbUGWcfeT4BHEH7cPPBDi5vJUA8dvYDahL1BwY6",
  "key27": "4o8upVDtdcd85Ya2YuLieGWBxWnNpmKeUbsVeX7WCSHaku5kC8ddqRwP7f4DZ4Vj4ty6BKWHNCBoMpk9VxbBXUvN",
  "key28": "3m5YusbaPUrcfBtqe5ep472WrngNAtwdvXhWs5JfPEhCm4vtUWfYMj4ykrq49L7nuKxA62H6RfTNaZgiWdgv2djx",
  "key29": "56fLmxcZ6pHx77nUBXDoA97MVqcUv83mQzQvkCrhgNLQpjZGVfj4UKf9ot7BnA97P2eBnCpGR8PnvVBU4vqieckB",
  "key30": "55SD6nsbiXYAXdWTNRRq3xWvACGLYSYzKn1JrLy9xRB9rnb3paraD8G3B7KYBBGMWNiwJkGLfuNweAEVhZAJuvS4",
  "key31": "5LmHZ1V1FgNZ5MLxajqcbhe87NzZR4ddVK6EzfdXo7YuLJf8DYmpxrrrgiCRVNQEEFiB67ZXTUB3c77uu4s1N4DF",
  "key32": "2uSGcTsF5DA8NoRpkGj2fHnhu2ktwmtfzDM2Spmndq5MrpF1biyQJJSn1X9AGBV2YuKcVNTwb6fxoRVNM4k158Af",
  "key33": "4VyKdoSdV7QaE8iyvVeP5gqM5GDLqy8ji2QWXYnpx3UC5Y7s6RFBeDdn8Te3E4wPmkr3dYXUw5mmUDBXohHsx2xd",
  "key34": "2KB9QdiBr2Yeh3KhKCwcjxjFJRTdvEn18XMN1pNzT76fyWpLML56Na6aqKn3deN1aZHMz6XYVg9h4Zxwta7rJdoE",
  "key35": "32yQgL8Kviugc2SywdPaBE9rzipGVPWkhhR3teTNaYq1b2mDYEF6XpsP536iqy4Boump2UNHcWnyf7zvNUYhNBJv",
  "key36": "5Cugo3t1gyW6RWXnJwx2ZEzqFCUw9wikiXwU5RTAwGCt1WWUFTbtqv7YThz5BqKxXfWxwEvgQCAcffeHw7ptfnu6",
  "key37": "59eZBpwbmeT5smPFF9fz6uHPzRqjrSAiRFcEhCcpXLRSTVA7vmh6Tax1t6hx2dGT1nKY47is45oCKAqpun9JtBKt",
  "key38": "5jBs3maPDjBsDMhrKpVyMJAujz8E6CF5qXNruhw8PDSSPsHZu4U7VDwZ7u61UvLT5ZpGHYYLqtQA3igXkAL3siNg",
  "key39": "2n7Nop5GwL8QPd1YXuitoj2bbziR7JVPaSaaYNjzUPdPhPsW9qLpgbBVDUNHLavvCE7yq8wxgE4jiE7LvQVWVY5K",
  "key40": "3AdTYn9LMTxFqydu7U5UYyT7tLSzQbtcaQipf12vwbpwBHUGbH5AtUdbHJTyriNwgDiDCiaPadb8wiLY9Xq4mApV",
  "key41": "3osmPb9QAsjzSBJKLhxUHES8VxtwWNisYt6ENo8KR9ZQTMitWcczn3QF4hh6j6jA6mby5B4ze9cGhyZA2tWb2V7T",
  "key42": "3WBF88ZJ3KzktroykKBm8rSnCFe2TXJaqgH7FGmkxZRS96B643aTi2JhNnrfCMnRbipHipasGgBm3BTHV1qcveir",
  "key43": "2qTDHmmRDhyCENkrYxMzGeQ1qHMZGMsvbN8n6S6LvBdzNn8SBma6ypSRPKU1MdCYjmcWonhB9RtHBkjaqSLHczXQ",
  "key44": "4wA5nWnunEt92DQTjW7UzPpZfSCSc5jngJLpapnn1G3nzGqKvEypZ1zExWv5qRX8aDVKpHUcSu1RdoAjTVtvTkdC",
  "key45": "5gkNK4WQJSc7Nd6Xz3Xp7F4jdMuKbNofCzYgaL5j2VX8KYTAjvpcXpk3uGaTBTKzGvk2cTpJiQQiiE8dbCoj18QL",
  "key46": "337H1232Kx2chJRX7i3as7sWKcJX6JFihL1JNAhWE2VUTumEJYVGGrzfX77VRp6stwmXz6a1psbSstQD8vGMdFzn",
  "key47": "4QamXM8oNvmxJo4wZV7b8Z3EVYggfXDrKJGgUYGFyk6CzFNBbPNsKedsPc6Evd86cJHMFmRjzEYZKFfr3VqEtCSa",
  "key48": "gdPNNne9Ro6uBbwLqSN53uxcZMXwricE1LGrvRpoAYTVyHDCaLBWDJYoZZnLdaVhhogVWcbiDG8LgUAkjEstNEf"
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
