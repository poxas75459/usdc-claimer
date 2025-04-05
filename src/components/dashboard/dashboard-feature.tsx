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
    "2BUUeL2VSk6AyEohnWS9n5E6eNyVVPsXVFN81qQtLQMeY5r2P14JD13NGjJSzFVaw4cXNpL84S78cPtPxEGn5uSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459DzFA6RzU4UUsWCv5JjBc6BxD43rGhupqfiQ4LBBZ8sxXZiwKDsSPjkjFkfjAZCBoVctUrJgBS8yJoKMbXHdQ1",
  "key1": "XBxRtDDnpQVhqpxPVUD5d2qk8Jh9GoGeSwxzYdwMVtm2zj2wms28sRcB9NArJfQXdZzoe8y7kBsNp3FW7dpZiVx",
  "key2": "21knGHvjeHGFJSdLxjwC9NbQstMYogr8K2yf5SK3MQbYcimouSJSm1zF2wn9YvvqSkQQ56GgQBkwXcorzsKtP7Hy",
  "key3": "32VSnht9D49JX2XxDtjScK6QCKe3znkSiVtmDkSGahkAnKnjbs78JWLsGYsc2xGkA2wzGYvrF9HRAmAfkkvhHoHY",
  "key4": "2fYmKAKt4KhTt9NY8ey3Fimize1ArtktevWJ3Q3f34t7yjv22VejQphp7sx9hUV3CX5Aa7kRJ5gEZWp8R8gFuPtp",
  "key5": "5E4dGUexkMXMhSEJcNyuRqFG46mFiCJmgBHVb7VnENGGtKAQa2LbCzgz3KAzrZiouU8XpEbePUiEwPrNtHziKDd7",
  "key6": "SrkguMaMNNrkFLTni6sRNpgfXMvrkmt8tDhj3hyxCxJQxeNHYMrXMXSFDLEmDDPebakmbTB4vSTvvvaeNes813U",
  "key7": "4w9m6j55PFEhvjtzjGjefKMqoZWvYvcMnqp82su5Cv9eYA2fn4gKgUijmde451BNBnaXr3LBigHKUCR2zxpVhDDu",
  "key8": "559oavMYMWyPsQspfjKUM8TKyVp5s4gsMEjaqRWKgMKir7qQbdrwcixeYpVUJ4NtQvQwyeBh1WFYPJebuaqWVLYg",
  "key9": "4S9LSLaAHGndm2zxGcsEie7GfMKLMV24sJUC4CRmFUWzmfDjdZjYX6mSNuULQtyiBM4v7uQi1TnkocrTv4XR6axA",
  "key10": "34FQmRBiBHE7NUjL9z7Wts84ny1w8Shc5oL4AQokupQeM8SThJ5evxSKhbwpTXBsscLmpwvpKqqgsqsJH8DCiGih",
  "key11": "jjjZ5Xzn6QB8D7MEssT58ae2HFfhEcN43bv5DQBEWnmLbfCP29FZijwcWZzkV8P7hzuceAkrR1ZEBuFaXTRuyzi",
  "key12": "365A2PeWfC2NN1gX8XezGCc8sjpFfHqAQXsZLh9hn6FWdVQ4zyKD3u8kV6oDAAys3Z4gdrqYnbLJTA1cWmpXQoB9",
  "key13": "XuodbjSpYNrh2fSZc83zj42bCRscCkCLCZ6Yyy51Qwr3V3E9Kszvq21tFXGgARs8JDY2jLYrgTQPAKHfJCdn7CZ",
  "key14": "3AUyMEWCiEgcc3ZPUEjT7JcpPbUqBkrn1W8hwS6Zbm6tZFQPQVR1jnGpEGkqGq8BeLb5WERm2nYddjRoMGTNSCf5",
  "key15": "3n5tdWT7jMMcw1cvocSDV4cqQ22YVTvH5rsQ79tyZatQh2DZen6CqDqmjAGWo5fJkrXQBJ6kFxEsWsaSbM6AD6CB",
  "key16": "4LgfUFSfSdfyVV71mZihGUNaaX4AM6zWxjTLiZ3X4E5ji9cg8Tv3WGneTjmTWQpg3hYbbSwKgWbos49Fgtenb1Pd",
  "key17": "299pmTL9MbnM1WMtcEeWZKo463QqA6g94QefSyyrzKRrUTbg4i3EhqzcpW9kospQunMj9xdLCBcKAG8xLXH7d6Uk",
  "key18": "29gKGnzoppMXnny6pFe8V44EzkZwouzaJb9DzN17i5Pekoe9s4ow8gFW5tSszLXAxQhzEeoxdsfd7nve15SjRviD",
  "key19": "3yi4QomNf9ju2hW7aXwvnALWuSVs84X4zDMpPWQscHtJcJzTL593Dqc78quX2Xxq5oac9msmoDQW1ziCdGa4q4H6",
  "key20": "qufmnVDS1qQdMQ9K4e3Q8JKfZ89sfDud1RE3yyENSerZSsyTG5tbHhMjbqNeo19Z9Xzjexhv63cdKoZELfZJpzb",
  "key21": "4im2jnmkv1G92ehswcYBzqJuDEMuWeDCA2Mz7r8jLzKxx4jKN2nEz6kU94LUJqxxfcf3nhaPj56Tokkr5aEHH2Dr",
  "key22": "4odgBg8qG3nVQRo7fYeLXWP4MDGLYV42Hfr99Zk2YNMMcfBWRaMQi37EbjBVoJmKmW6SE6jBMyHWvAwvrzDtJver",
  "key23": "7Tvv5LerV5TNy54FMgje3UjKzFFoYZpbjKeen7DLhWD4iZna9iQUsPrNUQ8d89deggGJUKDSxPM64y4y3H6ybq6",
  "key24": "2Ez9WoZhBYVuKXhedtoATPHs37GtVdnwPFXicgHLywigjhTeQ8NAZVzyk75GWfQd5Ay3LDwccExWoG8zd2ZXCZYL",
  "key25": "5ZcRGKnSY6cFtqEWQpgv3UKm3FimEz14ejzE4N8HgPNCwBic99JRDzfRKysXxiMtbiVU7NfoDd5UbayH14ySgmcV",
  "key26": "4tYhyqoxZeTQnnYweEV6tuC42ANGh2uRbuNjXdVNXxTPt3UxFX3rQg1RLcHyk9fMHF35wdooWDzgVzmdSpu4fv5q",
  "key27": "2Tb5MRyZt82yrymPRY8zrA3zGcmZ9JB8jNRpSeGbkz2kUceaNdRCYYjw3KmUTvoCSW6BKLS6ENuAzqj8WGxig1qT",
  "key28": "dYoYuuQ3wsyvzqK5aXztcHBzAwoRccw83Po9DBUEbCAPK2vfZ1R19KQaFnsRotWZrtJFDcNpjcBvNEjyrhA46sB",
  "key29": "3MNPdRCEYoBCBUVyNukqtu44iZ2WsWsAcWXXRsYU5Us2gZ3QxQJByyLxAEmMGGbfurZzLbV68yGMDY9sH5TWj4HD",
  "key30": "ks5MBxdeTMWeUxe9BnXZJpLT8RDpMa3vHxsyB7GiVUFWVEhNe774VW337rHWG13orEkD9MCJqFkwHtE3sdRamUm",
  "key31": "saGyVWaWFEbTALDkbsznDCrBKHH17TEBfmMj24cAhgsNvjkxurdpsHtN8C8gL6ANLVRGUZxG2CoZVdNCgFGakE7",
  "key32": "28LMQVy4pxJH3cNDeTSLfLvnJEDbx6XjwgEC93STwoiCUwSDs6HE7tRswPXNoKBJzvJWE6Dnagavgzopeg1uG6Bt"
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
