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
    "293dEzq1fDB1xVVnsN1P91yKfmfE1oNQSSBd8M2PWhYpQC8Cf662veHamdvoXTL4MQkFWJdtXuhPm3HAfToLmgSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbCPzmQnPYy5XFGxc9W6x67q9rQGGbjJqKDxkojP2kHkHSbcih88iDDZ73xjnHQkhgr4v3ix7gRfMJzdpE9YZMu",
  "key1": "FWbQsJdgE8xNpf7nq3URVbD7VwiV2Y9uqovQq6BB8whTMD38qTdS6VhUzVCSa3maCMK3dhxpSKkdGyPMg9WS5Bd",
  "key2": "E5TqMFtA89WXD2YE4YcPPd6mUta3nu1ZWTUDkcpX29yPR5ytm7joF428nFWc35oSr2c47q2bgo41kxtvnjnZMdG",
  "key3": "4ffpCsUnASbA8MByo2fjiJv9VM2p3S2tjWFtx1ef3vnNmBwXpbFDWX8WQaEinj2f1Dbr5w7naBA2mUZRs6HnY2uq",
  "key4": "5ZiwRocWzfipg5CGYE4JY5sZFa5wv5C19wXtoxX6gNcz2XuwgD78feJxgwvtvLZR18uzibgrqg33Fqzv5kGR62QV",
  "key5": "1zuZMYerUz9YCJZP3fHz9omKLmuTboPDd4NS3BBMo36oBWUzSgw1ZYGSHNGf3sFGmqqz4t1K3jZBc64UrRcRvzJ",
  "key6": "B7bgsmf4Amj3Rqq9BtvgRnUoJtNuQpprPDHrSWSbg3ZTiLQBeswXQKUVBQu3MKTf7LZUvfaPLFJKcuTbgNVt6ef",
  "key7": "1Aa8C4t1pau6n7LoU2e5dt2ENw3eay2sGzMBfvpfKJGPtZywR6Di7jWP7tSySsUXwyvFDVyTE3eBkXqMXbH38Tb",
  "key8": "49Pye6zmHazeBgR8syUv6wEDp4RPsxH2ENy4sPnrBoGQYuS7DwijsQbhQtiXPYG9nPVSdGr4bfjxu9c9moLhV2aH",
  "key9": "MwdyfHF7xwJQFD9YUjJhhrUgiYB3RVzjgahUqbYVAL2t2ujv8EFcahbQGMTCzsKb4HLHsoZtE3hsxtdmfWdmgqu",
  "key10": "5ijBT175ZgjRJCsXVTm1Qr3kSa6HNP96akxtazA1jMvzWwfh7ztouYdhX9TDAoRxjeMpYXbLnTuBz43aJMX6ZFvC",
  "key11": "5DYVoUvJkvMhUBbDGSdUNfDZE7Zh2jBSRw9EbMjoGMQzMvfTMeHvhBVYBi8QRcxV6zrn4zhLXGqTEMb3Vk2EUmSm",
  "key12": "4veZMMfcEUdrAXfxg2mh4jTNvDmj5oHDNbMHtjES5b7TyhA2abVWq9MvdGBFdgj9jWYXVq9SH3tPtq1dqZCqmWRv",
  "key13": "4rXeN2ZayWJUW7o3weJgYgb2hzfFdSN9jRetBjxkJkKLUxau6kdAg3czawym8qB5jPdjo9Bxd2ESCZLgGQyzLsMV",
  "key14": "5GusRv8s8bx9rptS7pht2L5j8p9QqEEzEBnD2n2U641khcqLqkJxBDru35krirXAMKm3ZpHqxBbJRiSc8kTfTBNY",
  "key15": "4e6ejyAv56xKttYHUmmG5QrZu5NngniMCtHvNXwuxtymFuUjGddPNYEHkzW3n2qch83nSmEHYJCAbLVgAcqf4r44",
  "key16": "5kEtznemYLUKwirvyE3q876n7NuXm75T5NdxxbEKbAWkLCGd5aKVSsBipQ3raGm9b91yx1xRgRvVCYgVAnjxVPi3",
  "key17": "29CEB9F7JWk6XtmAruVFjazMxWdmYDLW4a9ntcCES5MWJnKdLW4bB6aNyzVnsZwWh5pZEtv892Fqtcm61Yxmv41P",
  "key18": "2PCsj2VShvQwBenaKi29SihuymYQTSHjipuYHde9c6EmJK94UVJSnBS4WpWUZo77G9ykx6372T6n9rpZxyWtDE29",
  "key19": "5nf9EoeGfRJ4EEYXomR7kPjR8qQ1kog6c45JdBD8Q1cA6i4kcwUHWhthepDtijWq5HSf2nuSUTFiq2nusaKw1PjJ",
  "key20": "4EmSQyiJPxDT2REkShCd9gqGXFA9fnuuEQVoVQBMvjJdBa7hEvjeWFZKkcxUMPT6PV3qnCaj7Dk1PH4wAWvsazBb",
  "key21": "3mE9SYvb1iobFxFaTh95mjWRLB8tzsKCA6ozTgc7DybSS3b8cVoRKwckEEvZQWFAZNbEFWU7ojdYqSTuwQ9T7xQD",
  "key22": "2yVTk7aBp7Vn9pUQCFH2VG3YmE49ZLzJFMQ92tGNhprB3kUoZTP8yf8v71XYY4wqpV3PhuAnVL1PvpijW78uCKx9",
  "key23": "5uYF3MpK719XHt6xHHLXQCcHdq1MvXJv7uhmYaqKkwK8DVPckdALMWjoq3zPu1ehLEU3TfF4Zy5MPwyuFYuSog7M",
  "key24": "3rKqd9T62zHPUsNJP3KdBwQvVCCwsmkwniXSrzWLrh75B9kUGxLEG1s7da5ZKS5UiigMx3GXgyaYTofKz3hnKCwb",
  "key25": "4RcXSnNUAVbh6sUgvXc6eVSDqYtdj6NxKoU5am2F6XUi9PDMwpSb798fw26UUL322HxnHbcu1kLZEmhjvgXudicu",
  "key26": "pGuxeDYSwkZkn4KLFvp9Va1ohPbkLfESGgYyHXRPcb1LYafnnmrqC9QSnF15HKYKjSbCr4o2ugoqr5GnXFKYj3X",
  "key27": "4xZ4V8vDpiVbncuWAXrTaG1XxSjMUvPmyb2Dmzh8c1u2R2Up7yJRmTG7dZuRW2cxBQ9XV41yDmQSaMrMW7CNvGFK",
  "key28": "3A7jqJgmf3R33LjA7JAUhoDruhWmCZsCPSVSgkW8G9Ugg8bNrhg9hL1TUN43X3NnG32J8PGHvBXJWkkre7CSrVfm",
  "key29": "32kXyP5Gos7bfNtQwRtUs5LiMnCsNgXrAUjM8ZEsoUx6nZRk7aJZTuvZSw2jtSKcoS4RR9WM4iwsE5HJWgpbtaDM",
  "key30": "3EJzZG2VECsiNprPR1Ta8tQCdgkZMFjsUBXxzk3dS5hUXQXstrH183zJJdccBWVVvSvdj4nVT333vpvHHcL2tCyt",
  "key31": "xEcHphKF5R3xuZzujfG8TfcVaq4q1TrLhaaZF6Z48a6ZRhFQMjXzddWk5U9REeqw9au19Q1T6TUd46pK9zNqbpi",
  "key32": "61pVg2FJjv13Bk2McJtgubhbwTboDNGKAupRZs3unaGJpJ5rEhTWgBge8BzKpBF3ET47xqTkpFLzUJYUBx9XnCh8",
  "key33": "CGSYUraobiUZiLpDrxjt3LxSSKtE4Cdd7BEcwfYMJc7dz9FXPe6hmpg3sR6p3YnUQhvtM8yhfcrMwkLUd8Spaer"
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
