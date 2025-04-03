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
    "4LyEqf2b5NT7SjRTMxGmya7JNuPiFokWYjjNgXK6vjNVCdhQ2id4sw7KoX2eWxmje52LWtr1EaJ1XCqTqzjLXdAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywckLZNFT6uXsxuUyEhmB5Moxub8SYs8km6TfrFBGVCqMJvVSBqucq8e7XHEnB2yQdLZUYxajb53EMyHde6ko2y",
  "key1": "2yPNqgtmmNz33TTCUxZwLxird37dUsduSpVq7qz2xAEdQp6zEn1cEuRpm8QrHNkCthUaeBoELTyxMTyRx8HTZnX9",
  "key2": "5Yomd7EQndmBLu51Cuh1WMf1tsJUUVScuDatui98NM8GYjCugCfAtw4Wf8xBqNG83fVmvu6hhrQe3CpdjNw6fCaT",
  "key3": "4A8iRFU6v1MxXQxeEWnMqFFrKT5Yp7xvU1HpqHpZrGmMWYqKNpBWwbpY3c4JFeEBFYX99JnZYzHHokTosUv8Ugsn",
  "key4": "4Fih26br6KedLWqk3jMTJTVocTuVBzLsAaQSiKAedTYfAdSsRXkFV6tCgVd1dbGJhHnksLz6QttjtMHHatHDjACE",
  "key5": "5yHPkZVYPqX8fufch7wvkerw8WhncK9GtgFmzkw8AhmTuTm8zysDvUZJCnW4okRcEirH8Q88BKHBw9HeUpjT6dw4",
  "key6": "qzmwJGNvTkbdMEMDmf5SLaFF4LYPoHc1W8eHnHtns6zXUTUbk3LanqEBSpCFuMQFg7yYjK8p9PdPhxZusdE8gcd",
  "key7": "2D8zpeQhirR8wfjPvydxC4DVEYHjjhcgkzz7qJyPAhwQomMdWDwETXcUpdULwcZAYuLcg2URbszRbHHCmbCHz2cx",
  "key8": "3aoqa5YbHEoupcs8vSvnwWBm9ddFpRyKeEDq7SbDhpNwqedSgQAMYgNQjGvsuvawRAadLsHjvRt5gVpjhC3BiUaH",
  "key9": "ATkM2nn2ffEbGo1cRdE8irZ9bUSdCHAWk9ksSAs9goP2FEN8PvdaBdsYV1J7g7DZoAk821nhwcTiSvX5vMDDkDV",
  "key10": "5w5Jj9AvWi1PrtzHGvVCHTVAUKnic5PET9cji8TtesVdVUkiVt2cBMxibZribFrPbq3cnZKjGRhys9bWa4isgNix",
  "key11": "56JinFe3XnPcrRReXhYnv948rcdHDNQCwxJe47X49JFPnydoeiZwS1Teq6K2XFRV1sAXuqCWYAEfQGbv6vzXprFm",
  "key12": "PKLjiqE2zEUZpW9oSG8XXztbsK9gmyNeK59RYSL7xYkAjZL3RAvgWCx6VFKZuRAYAaRqVocV3rcW5hPNkTQ4578",
  "key13": "5QjEGwzvrn5TP4q8bx1TZuH794jPT11ViDFULXokKuTBte15dUpkjtSzzG2CiHkE43T7NWG7NZbDgbnwSBQpcHrX",
  "key14": "29hc8m8dGCKcgN7iAHkGyyA2NUZKccsDmSNyEYz8bJDSq7bjnhM2rnfkYcwQNjpKwdsSaGWquwGm66v9doq6MnZ5",
  "key15": "3DE5QtG1aGWgcHfvrD1yoj8NQZa8a72iNh6kLBZun1fPMsYpvHG314xMSqFTccxzGp2z4tmbYymk9tjAWUbCGDah",
  "key16": "RogqYtrQPqfqiUMS3kv8UFeu6kKfaHCYH5ePk9airRCtoiBkdwmtKZ7bJcf8GMgay2RNVo6ZzLagYG8dooyVS5H",
  "key17": "5muQC8nqeAfGzhiikYahcBvzvb4vuhRPCuM6TMCwy5UGNhpMhZNtKfysv7dJXR7tYGSriguMtfBXPLtXQURPMAFu",
  "key18": "2tBwsXx2BXd717tVFdNe6gLpkuL6MmUz9DPEphGwm7a6KLuB4QPnqeVSoE7KyEEntixjmVV6whsdUubv5F9xmPU6",
  "key19": "5rmc8P7bbCfDUAqZ3dxVYmT8r4XNfsRyHVsaQyBAUY57kG8fs83WuA9vE23YetRfKCd8VHX7qiF5Y6FZqrawdqch",
  "key20": "4drXgneR9TG7n5TBzc5cLaGV2TuwbFFi9gSzFabU9UYViDaLQ9k6PFyULsVDrefayNEUKLTiccTEJWjyJSwqXGkK",
  "key21": "3xwTLhyQNzq5AUWEoCxSsCgFPA6wn1g4Kj8dVY9H2ra9rb3WwcxCwJkQ35c8m1E1GDS2RcyQH5A1We7C1PM19P1z",
  "key22": "3ghAEPiJL1NqokFPk21XKEdkZ2pQUg8rokTmRaaroYxvhERYKo4RMwcFJQEJQc5H4Xph5yv4jTgX7kHTSbzRXYGi",
  "key23": "JKVVLexx4KB6VgEtyBZbSQQwW6oeFGEgRU2dzqHr3hYoG4cAyuakNB6hX5hriBUYU21DCoQBXJs8ekQTEdYpCbC",
  "key24": "34cLwkggUiAqnXFjxSFdCuTZLvxLimgWrgv26ymG2ccCm7jjDxuGNPj7hQFyU9rjS5DASGZYBRRUHZZwzWG86mUC",
  "key25": "WR2Hjuer5SvsaT9xsxisoMF2BpYEKnrQbTueGiTProUy4nKGkzijmoXZFa6HaneAEGTi2HQjTwLbc8qNLokWGAc",
  "key26": "48rosKW7oTVmT7SJBTtvvgyQLhvfZmRh4q6PKXwxocvdAZ5i4gh6v4jjWu2zEcauspJdQXHYuCSBeha4iFyD66FS",
  "key27": "rKh9F7GXGqQe4oNNUFjZeovxj6MpP8T6Ruzkiqa6DazX4HHocZy8vts1R1c3yHee6ewKPK7Zngpp2CbgNAGvwyL",
  "key28": "m8GhobnJ4GsdKuBJsdDtkxtcv8XPcbcwgNFZ8x4wquLejuZAMBjJXq219m6ZkyvCTRGALVjBRWahMMs8TN2rGVp",
  "key29": "qB4HPHGzWu4L3NMupXpwGRWehLD4DcRckYAokLmNLx1whtbstmcVF5cTDsmdaW6TcPUHguKemPp8rJQHDUUfTFV",
  "key30": "29CiceaiTTnUQGjpfa6hw4wMLQG2B2bq2Au7a1zH4CXFfTXwNuhqmS7EqD1iFab8ikLqvFFMjZfR51uernPh2kjX"
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
