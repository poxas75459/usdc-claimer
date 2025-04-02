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
    "3SBCUtC9YUekjeCia4amTPXiz4LJZ8g1xBDnSxRC7zVsG9CoWbhkjDr4BtCJc7ekCVgQha8sn2t6Z75yTPLahbq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bXu1PrG3ez6S6SQYR3pGqst46kE7wwR35hWApuPEoeXa2aLEY2QfvsDUonQHF5BjkFAFH62kxLuM5kQewzFYZJd",
  "key1": "3Dc3WmtXfEZJuUAvWy3RmUxxV8BkBWgGGgpxQakqkMzQTeHy5bKtqPfkUbu6LYKbBs6tpAW1HcSdyWs537MwKJFT",
  "key2": "65bpXWcMUJGbyhCH4UczXsyJ7HMpjK9yXiXBr2ssh2FFqDR9xmq1PjdRRKUYoiLB8FQH7d9DTNxUAGQhXYnC5nGn",
  "key3": "swxZiPRuhRDnCgw6wpmm75aP2wVZhTSPtMYWEcDro4E6LqXXK8i12zkKJEXT2d1yAihFdgij2s7Fd5m5L1f86JN",
  "key4": "4XLw7MjuHfS9ckfbzYewKjPqm2yUJ42hKQ4SipgNeTWr6NMkapwmAiQvPSLzivLWcFk22PibesNaVF7GJqeEqpkh",
  "key5": "r3qSR8Py6Mo7E1CLSNcWQCTXzn4h1cgUVRZhmvza2zZTtczfbxhWJjzjeHa23KAJDfK1DXk69be77zk24DY25so",
  "key6": "3KJRnKG9VsNdsTyasgac61AkVozcHxVqNPawDz3oM2AUYgGZ9wwVTQJF5NBR7Q8YUa2n9sLTjYRf6u1ZUyCixg2Q",
  "key7": "54YWjCHcKmdsVYUyZiYp4rHM2DmvozZjV2nxVp3ebwErNixdSER7MiAjW7iQqzMvLnkgACy5q9vasSD9QgK89fUX",
  "key8": "4WPgXK6gG7zRcHrw7LBxQRURGVaSLcxwc8j25MrGtjvnKgMPsTZrGSBto5AfCuT61svcyAHxUJN5eVgL3hVKqesg",
  "key9": "3Uh68u4uMG8ZqNVBz9rw3ceAZzfKgVXTif7geb6z1cdCURwkCncULPBVKwf7JLueBx2g6ZU1w2GVxGaiYtUNj8ou",
  "key10": "3BRzcK6TgN9y4v9Cjc4wv1Y9gvaW1TbfQqeYXfFEyvVeua7f8gtxFSjmauCu457g9RebTnDPPsvSRsGZ8nRTLzkh",
  "key11": "2czRZpTY3zuQuynikFvuhc9T3RwFwHRzcdJYE7SmTqbFE8tR9ffeXfzcUkJfLSRFLmmNAZgs91dEh8jUfWg9NHA",
  "key12": "5dqCZTUDJj8zBa1RvFmEYb21ivvFS2Bwm6W4rSTurVexvq8jGytJmRNQGR87Q1yqLeYdEVbap1631DQGp4cjgFhR",
  "key13": "4uyUpQ5oU1aa43VfWtzP8tMQGy49vkvZ5zcUKSYiHVEJvLadWCz8MZHnqEM3cyfRaBXWxJBRgbN6j7YCwV5ovy6t",
  "key14": "4ptcu62tjAJe9xWhCgvRmDHFM7xpX7vmMc89c9KTyGwJ4EgzgApdFPdWkMaapLrns5rX31GzLoQbT82Zz9uhtJw6",
  "key15": "3T4He9VzFKhNUWnMW2GH3tz9mCUneJwocsQqKNQq6QskGpsferhjowSGrXLTdsoHdAx3btcHksY3YRtnmWMrXiCz",
  "key16": "5W3P1TdRGP5BrXa3pWeCP3Y8BabEjLEeHxT8zAfeAK52an2nptrVT6ZN3AbrcK445vciBnWrdX5hAaCByb6xXco2",
  "key17": "4CB8wyVFo3w6D5fNx9dVq1iE5vjK7CbrGRJMuoBCt4AyuFRt7ARifmR6VS8Hu2twVkbVhLAtxsifmrqpzMEd5nMa",
  "key18": "oDtHg2jRCiqT8eTZNYzhpEP4fmr1B7kAEngaPQp5J8gXFcgz13xqgPxPxaYpCp9meepKUpbpNgaKQY8ycTQFT9b",
  "key19": "4JApGqKYop5acFQFmk2ea8TzKqQZAx1R1jWUPnCrwXVdhKy6pZddhp8CpS7cAqE9wUBZjizTQDzaWxAMYSg6VXHe",
  "key20": "5uCHgYNAs7iKQHaNxcS77PDMQAeWdT5EaJqoJUpe9qD2TFU4SFV1osmbhbrtbjLAQA2oERZjfxe3N5z96rpGgAof",
  "key21": "5FErr9A8tCJd7fnoU5QkHqDb3FQ7TXQBYJuKvDt9ktRzcG6dAVSs9tBZsNSKv6UYGuE9C4iWB3A5VJkAE88xofr6",
  "key22": "5JFKQySg4Rhkn8L44zfE52FiSaufS3uBSBkVo99bUgGVxhJwCLsuQ3VdyYuqJKto3Ttq6hendLBkXCdHKLvswLgK",
  "key23": "bF7ijS8YKGxc79GfK9npxbWqeaFrBmi6ujvVG5VZy2UoppekRB221gJXiFCtPX1Qh5ht8itPaxYUEyfYxMLYhX3",
  "key24": "3FkHYjWtUtkgMB8y5cihiAb5MZzt1RCt4t7GzEWf54mmJgXw6TVWPo39FsbvfSvoav3ahJ8odCQa6etJzcUF1NYF",
  "key25": "Xh8tPYLZFFk4kpZaWu5abgkPRK2QrePJJXrDg8NymwBSCC4mwCz5xJmqVpL156Bp9fDHNF8NZVNZGuhkge5Z7pV",
  "key26": "P5P4sxozmwsPiFmC4c9RDK5FMmUeRfEEoQdYQXvBqKWKW4UsZYqAk5hovbzrZnxoZ8gxkXGAfJHNBkZJTGMQXW4",
  "key27": "5pb2v3PRQi7k3j6xaXnY4zSxoKMmThR7EQJi7g23ZX694AanYZCTvxSkC7uAXUg2P7492LUDx22pudMm4GTDeHSf",
  "key28": "5BCZZYssQYv6PKgUcMYhGTHrNARF5iJQR4GQTwKJcZnrPTS1fWSsAmVuHb5JndyT1CyC7shQjNDLWWMUzjXFwZzA",
  "key29": "TmQmVxeUZcgvnCswno3JjsstLYfN9gAhd1NpamoCTgCEjqTBdUrHeKSqLmS3mbvTQsoYeAtZqPDxSPS6po9UGxL",
  "key30": "SqizLNnTyhwew6GUiyEG12k4mf2wbYnXanFJqtCZ84BfVkKWVGf8c4Vkhiqokom6jKsuELxXkTRNfzk8T84rbxn",
  "key31": "3eXn1FdhKErGQKQyX7mMB1zgK7CH2fQRRtNJtdp8oRvXagmoAhCwGuTbCQfEfhD71pW7ZYJodLM1qEJ2dsUFx18W",
  "key32": "2WzGXYVNTPJAcJUjzQ7Xt19kpMEL684axqodh1e8aRQbVtFhs9sWrZF6YDCMVggXVC2NEbeV55mz3ZW59GJQVeda",
  "key33": "3oJx5BDYgafzLnUTgGQHSkWrpzjU2Ts8GNAFHmcQimvdB1izPqvZAsCaK1LevMcj4eemEEpuSbGSWjt3HsPDMXXR",
  "key34": "2UtDd9tJPeDgdND983hG12JvvXa3ufrhtxKcgsZYWRT2xg9KvEpWNXbHvkUbSaEVBDYpwfAD1jaWkuavLuuWtw9e",
  "key35": "5DdrntJq8vaRstJQ1fBWmkfMzLGQMgzf5UhcYBmg6y7MvsYdZxo5oHLrJBGsSBcHPSAyS2Du8o1C8zZaYNTxp9XR",
  "key36": "2a1FSRZ9QuuwigWPHj13XLcKXK51fTNTeHLsoQNakrckaeCFXg6VE7kA3kdC3XUNcufD33s22Tji3Mby5XDSD9GJ",
  "key37": "3ywtaCgVRSPHSJGec3yyzB4Q6NB4sFBzQu6zFELFsucKHFdjL3E9VJ3UW6iyD8CBkCRiKUa8QG8w3SjhonerAhLC",
  "key38": "3AW3REVpzE2hMANyWJdZsH5vXAfBHQzGKEzmmBPLu6NrcykwZLNNdJyBAL4YDqUEYWQwgkh77JNG4fd7g3GatRR9",
  "key39": "2K6PXvPuquhqo4gmq5dZ7Wvfd8ZJbpEYyfb7uRrDx9m6L7RNMWZMjeyRzxEoySuZWCeapLZUJ1BG5iZ3Q7umE5tD",
  "key40": "2JcdXZkkCL4chS1ZaepYBiV1EgWvHojtt1jC4swXzdeWgmNiqM5f9W3CQV7aAsWdD4CHHa75hef62GYcgyTvcrpL"
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
