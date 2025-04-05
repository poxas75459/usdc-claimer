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
    "3R9n1GBX2m8WzP6Pib548XbfnGgZi9doc6VEhvBfPgJ7S3yGfXr4E3Z6xZapsjQpCBgkNQNptETEa9Ttq4FaE73h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dYDB3W9J2Lb6CNHeBDCGmJyVea58F4HLcq6brh8VbJok86fA2RLKXMUmT41HjQ16qMtBX5uCprUABmqJ1bqYhJp",
  "key1": "5faC1iis4mZXgbWYctAQmAJuLwEdWv538ndLgdqvBu9rWAh8fqw5YbyVwhUTm6cAYX4nQmDHBewG8zXGrhMuSLC2",
  "key2": "GwyL8JBLjpxSorpPcjRAnnTs3KPxnMbT4L69WhF1LWBdhnXxaos6PP5gvVbwwbVAshxZFrzwLba8JpMiKJ1Umd6",
  "key3": "4PqBkT4W9UpXGfc7Apsn8kGbnw8fHnjTSofqrN5migpc3WpuoXFjURYQbmJPNSKUuDciWMqWtNr5EaECzG8iAvTk",
  "key4": "4zbbNF8D1amuNU5ic61PsS1sukexToNHBQrbz3a3JScMJcPmMdy28BYpJWCVUj4ZHsgRiwibWwpiBbcvNgfyGQg7",
  "key5": "28uFRSoyGh1FLLUxCWobRd8RCit8oc5McUBZn9oGvCUXExtD8nq4jT1spaY7ZemaHprHwXmBjQSmoGQNDPtxLTbg",
  "key6": "gzkN9uPPR8bpovxwdz89qiCVozMi6qnCXudAH1xRVC5qaRuZzCujQtsUfHTnn9DB3qBHY4nEwEB2YfqkVBzywCU",
  "key7": "29FyAygbH2tCcKysuYwSouo6YCgexmYjLaTLMKi5GiBBbHu3gp7RHbbyz8LqzgkoTuL69mJeYQgcuPievDVAcixW",
  "key8": "4HWuAJ9XFHGdWBqVGmWkYRQdJCYkoQWnZnMQgEsmbnXZ85gLYNRyynnxGgJYFYYbULZDesNmWwBtbEE7x3g6ZLhF",
  "key9": "3iAGai1UzSFsE4BuBLx819w3WJkRvi23LH6Y1onN7SX9Rijv981wWMXiN8LdSRpyKXDSAoiphxHdhMVQ57NN62Qk",
  "key10": "3NktSd7SR3qGG4kr6qTLUmkuzQC86tYRashye5riZoMKQYAgYunHrjczKgWm2a2BDjtYPz2QQEWCDtgm1dwwn4XM",
  "key11": "3x4BPymTByzGiiyRoKHNrfSbueAy3zKVvhkx2x5eJSFGwnu47CHW6eDYacA4ShFycEwmdsscD8zYuG1GQbCKf4W2",
  "key12": "4AbiLSg4KnumYrvTFQCeVgEFn9gDb8EqS4L8qDuzcjeFhSprBP3j6atx36kTGqGPTTommbm6jDVZ6AVP8hyNjJoH",
  "key13": "2f2m4mTWbbquucexijsxA4XAmpexxHnuAeQgngn841siFw8Y77diKDNFV4PuuN8bh3CRGWjtRjJD7gqQLMXi89g2",
  "key14": "4TK7VU9HauKcXBx4rwrX2yvpbyoKck3Wyb6tzseBjiLfopjAfbwfDPZShfRqhAkCqjvu5Vww5ZpL1mEyWXPFTnzz",
  "key15": "4EungR2T5HQaBdZFZKvJrf6pDxpRmb8K44wtKc7Nrhb5yjYb7RdfdZTNwpaFYajXw7ntnfNbXGErvVPU1nQqgxkH",
  "key16": "4jjVyGuBEo6ycYB8Lt5ahn8ixJSxogrjz2Xgttj8PmszqwsM8nhixSbP5kdFiSBYrZ1dDL7b57GoqkBGUX2eYdCk",
  "key17": "4Gd9Bk2jqBzdPa6DoVVZ2L4Dmb36QYLkGYfuQ4HW83YEdzpYZRM7bCAJt2JfWGcN1N8pv7mxAgdMGhrfJeRjkgth",
  "key18": "4sjgd2MP5FgzLN7LtkJE7rdPkzsChGK9TXNzmeMHtxVRjHdzdJU1YzhC4JX5NLSrnMdZg5K8xjo7SJVHPgYQCRL6",
  "key19": "21WL97YVgbeWM53ecmAMdaqTDMypisWnevjCMS89L4eG4YCMQGVhDPaxxYYP73fcsh5wb1oJ2W5ZnnVHYYfqXuet",
  "key20": "2MGAvmY3LPbGefjwLoA9UHs44xXwndMxhubTbrDxi24oHmC5vmee9XwrQKW5ywnpqSxCQaGkemayHzji1VU5AmFr",
  "key21": "5bwEANaZvQfSyyCqnR1UwPUGWCQfBJ6HVdGU6mnQTMTZeT7PMavhrSyGyzNV4dNjZ1wgFth2QsCB9VjYVkQ6MSGh",
  "key22": "M3CjdHWJhCVv8dTDjhmBksA4ka7Xeb714kGQfhZEHxDxtcArK9KnCXokFHPp3kp93K6V8X723QV5VvbNgjMwaEL",
  "key23": "2c96YDhUg9hR7ugo3C9vJy236RQB6F4uBHrYZPJbwwAnmcbk9VzT32HAotHKVXouypnLXbUHxea4Cr72gW6mG9x6",
  "key24": "5L26fTefug2QZ6ur6n5YPGc5HhfbXKTcoPaFwNFe6kgEZZ7GgAgT35Jo4m7VS14Zxkj7xBb8Ug2TZbn9cZfGsAoj",
  "key25": "372f57bpmMnzV4fFJ1bCkYmRz9YoPRqA2sBnh47BUDMMVqDd154XUD9RjzMrRpsGUVZDkuXUr3RTmeScwrakvJ68",
  "key26": "4UCozoeqaXHNMKGL1ZaPg7cozb1Ksyh9NehJ58HZ91ByHsTFKMv5wj4PyYkHMEG9irGkNQyAGhGVtkzKLYxNWRV1",
  "key27": "41hHwVLFfnZPUkxBe8UndwscEV1Dgh9TrcJ8oqNaPkKaus2Wpv1jnkhYN4Dx4khQb2oryLt38WhbiuLvxqQVvM6a",
  "key28": "32dSsFMcLGJyyjQGcxZpXBwRiDh5D1wYzPB9eos3Xi5RZcRVne3Zh5yC7KqzwFFGC8p4SD9CvHQDfBGeshC5W5hn",
  "key29": "JtVyfX1sDWkLj4JYmgJuoDJTLFYus9cyrvPzujnBCLMHau95QReLEbA1s33v4aY5GVgqGjQdLD99B4HC6eiKVeQ",
  "key30": "5h1n6tvfkhBCF9xZ2w3skjHR6uxQ9JV3zTpmp4TZWQZkjJau6KTcjvymQpWahhwy6kycxTf55Shn1oz1L8NWZXLH",
  "key31": "3PZ4BKVkceDWJc4Ags8gsHYNDi1yefc6NZPy6XAkuGoPs83ydP3Go7rvsvfctMgZ7REwoLrkLE12NMXYrzjsXGKK",
  "key32": "2XAX8Nd979VCAuTBUC1tuPYGAh1ZuT558pRGZ2v1CZcZDVXKGD8D3BfVGE1Qs3XNBVK41NkqMbus9j73AKmtX1TW",
  "key33": "4F8t7jtdehHYf1FFcN96HiGeNUHN5TBt6jTNiFiWh81tkGXYUEB9ekuXCGYw4hoTqTwQApZVw3YMC1uEpZw1NXmj",
  "key34": "2nJZ4MQo4TcpvoDFntuaSsiCRo6kcDF8KfmjUhBpPHdbezZy7SjQC83frU6czsBhyXDgzkPadEAFtpyPhzUFjafS",
  "key35": "x7p56YEf6WqNUHnGGFvwFttR2LAkHJ5Bk57MjsPT7fn9T2kJLb7TdbECXec7ir1f1rF8LEsFcwh43H17dX2CnNx",
  "key36": "4ukVksbGFvtAR2udkfMegZnseZJTFPxDW9b4ooMHndSyhacNFGCpkxTapi9xj3QDfaVtDdGho77jMXnzJG6Yp22f",
  "key37": "5sNkyugh8cQzZt8at2v5GbdPQBv7zHJ8gNvWsG6Ud1zCjHhXPjLgkRfiyRSfy4KcbeUGdde9W28Fg83RxgQjJdhZ"
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
