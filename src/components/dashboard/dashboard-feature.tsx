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
    "3qej2RDKMp7MEiSLpaC8w36iyDNCPVm5VfhpT43scbKPytLrBJxMc8WJPUweRR5Cxya7Cd9eNbsCpqFtUd5ts4aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51WvTKHue8Ypri81iBe39ijqFNpLTk2eKRW58mW5XUYT8FjanMg6UdE9zaazcvpRX8EtTSoZJnpLY3o3tBgFBdnF",
  "key1": "3cGcAsNB3cRxLMxjpLcbhravvUS6FjNSxf61fKou4knVbPSrD22v4gHxQurspSjsNQN2vNTie2S4u1BW1aTHE3xV",
  "key2": "VAxGHkBrLbp5fBRpVFbB5JYxA3vhPD2FZ3BCUMYVnpg4csDXDTASDhCtZ1fzYUgufP3L9fr91wHdTpHhAivh1KM",
  "key3": "3yt7C89Vq1LZxTPaod8oH1qnr2NzYEsfMovMJnwBXARRNep61JfmvH82WfFZY8m46rjm1rnQ2TH9HBgxK7RHRQkz",
  "key4": "33pbiBDSzuPzfMFG7xFmzZZibwPKzLdcmfAFPSt4PZXPDfooj76DYpR1QNvuCoLdN3jupXnt1w47Z2mu6jtrHj5v",
  "key5": "3ui7A5SJBKdTzX6PfHfo2op3oumQPpsy9cF35kWCMRdYCVQnFDdTis9oeaxb6TtERBQ9BKzSv9aiAMBTR9D8BVH9",
  "key6": "4HrCZoYStTjd47zfoFFCJMAxGSZbe4cRcffHugSPcvFB6ahjmUfeeGJPv33pVXntA33g6ChCYffnjtpzaEsTWtKh",
  "key7": "3vGJswgAgLUJyvPvEnURczkc8jstuo48LdLkYpPHFSaYRMtrxQYjfUT1nMvWiLJUw5nvazXKeSSp1PwWZM5pGyS7",
  "key8": "2AH9h5LVpPYRvzMHFZWxWEqD9woZM8cHpeqqKEwKAHhmZx8ob9vgqLxGySihLH4gjewwrQfPAhgLr1hMKRXzv69P",
  "key9": "5cstoNoS8C7F5DcHuRzhCddmz3kMXBT66o2iLRXxc5mAFwcbv7Vm9sodi2LKRwjxJEjU2vSCQQiFw4cKLA8SxHn4",
  "key10": "hvBoXFkyeRbKaCeyQbKTorsL4cJH1uH4W8CHGW2YTc1HWmcSPWpRiz82yKhUu3eRwjouz9zQA1hr7v9YbPuLcqK",
  "key11": "3ytjdvecCfL8LvWT1UuQCGX6QWVuiLMKWQfMEWuJp3GbdfvMvkg9BamngfRc7bhjj7buApR5MxeQtzTQx1uonyqy",
  "key12": "5HAeQpKKnLNCUM4TNRvRXDJvEGbTzpHhz3xP5B2TENRz8nHMhFzZQ6D9WDB9ERLtteeyYp6BSrc9v262Bxez85Hw",
  "key13": "5pecARJSqDvty57ugv9ErEBcfkGN3X16cT6E3p7GPDtJMQCHSBY1mEboyYnGKrD2Y99gwHrAQJvRLbe2YPNdw1G8",
  "key14": "3oMxwPY2GYo3Z5Xnt8mrhXFERDD716gUJYjjq3SNU9poJiyapeaD2U2LdFx9Kd7ex9GDH17Sy9os8QZ2iQJTd1Vd",
  "key15": "3Bzj1JbhQ1RTbDzP23wDN5QUJ1MBQUp6duudZFQGrnHefj5ccxmvCMVWuKRRjhdJyJkUPuMMWHUFFQa6UWDm5ho6",
  "key16": "3yLxY2qWSh6Xoe6YZQrAK6qiG1befFqoFoMMd6GDct5UW8SKqJeLHzaV2kiZ1qpvMj4WWq6n5iJYzEMyqJGjcPTu",
  "key17": "2wzKeU5FGc8sypF42mCS5ifeardHd4X4qaCrjDcB69ahRHwxx7Y2LPLwifcppxCemkdPCoDxgR5LNeP12y6eiJdg",
  "key18": "4omBkdE87fts5H4ax8qXNQ3XZJjRAFZa1RGtnwkJGmrBwd7PHGysMHhXTdz9iMEZxuBUk4RsW2ope8m9KeVTNjfF",
  "key19": "2HyW15SfZYGtwD7fZf3XyoT6GuChCjfbm4MbrgTCFmkgjmmYB2AnhacocGjmWJgFvgBZ4a4kvjiBiyjh4Dbw24n8",
  "key20": "4McDsMLMT8epXvEa7pEnMK7Bn2Y9cYcL6pHmrNvRbboEVbSBGxAoDPMxPG1zmjEqDKeaKcsKWgNBANpWEWj5zrez",
  "key21": "2Yig8fGPgjLvcZqkT8UcKEcJM2usBgAvGzYYSFH5y3LCdhKbksjjfNRx8BuWbSmk9UFMejLxhMDwsXdCgCeHadej",
  "key22": "4i34N8vVNxaxyUcyWkdLs5amWRzGMejcpR2kgVGX4qFXohjGXHuwk8Spk2pDYk3G8kZXFBJXHYF99QUkXhP6HfZ7",
  "key23": "2JtRrfuQa6XYfdVM3hExmghqekhYA19u1ufp1W3LppQjLErnsa4HGJ9ivJQZRmiCf5f3imSrcD6hah7eGXxWBjNK",
  "key24": "2y2FkzSvwENZjAx5JKey4dJi1NLWS6b17aKg3VTuD8JfZPLHN7J4SwRiv7dDJjMAKtMHAYMgzv3QygSzNzve72hV",
  "key25": "2moJVoGMg3hHXnprDXq6rDa17j2NwpHNDeNwBnXe12JRoBCBcXnC1dSpbdEx6s7HvvGQdRzw7yLeeptNTYGRAi1g",
  "key26": "3HPSYpXtucEfpXZMyVNbbfsXTXwfMf56LVUQRTmWZSS9k3u6bVJrFq9v8kNrGozwjvJh6aPgqQtncnbQCYonA6xq",
  "key27": "4xDn4GqPhpvWEEUv9aGkdnVFZsqev9BTrZknKgYGEcnNwUThcYaCWt2pxime4z98MKALv3K4xCZ5JX9qWZ75d1uN",
  "key28": "gyuPRViMGMspgTHJDwXgwQSTSnEojEyBo9VMLZaGcPc1fBYNW1maFgeSS8csA4VGgqY78oq2sxF5X3GE5pWXpno",
  "key29": "44sgVFYy4jV5AUHed1A3x8disXqxAwAaaU6h8aWg1RrPCzNMm7p7PdyksnYiw1Gxfnj8bWBdX4kttVTv6EvxpmkL",
  "key30": "39hUaT5SLYRWHhUV3KGFarQaGrKPLKzVa4vTjfwgCFbHdso7mUiD9Fo2e4bxPT8JRfGUtR1jSquXWPaVwhSZ3CNJ",
  "key31": "4p5HwyA1NGZxDgqUdxJsGuP7VNLSAhpWZZ5Uk9rpMypS541YPDbGfuzrguwogaYjxkF6sTRPsU4VEUTW1X62kHhJ",
  "key32": "3DEEqeMffh5NBi1ZEuFzhtzKFZuFg8fnxvK1LZmHWVJh32YHtoL9wcQGSRxvpL53i7CbTHtCGDSrUy4MA6a5Lr1w",
  "key33": "25NqdSgR524QCJ5CuVF9B22XUaZrXyJvbt8VeNx8zCeS7Dhd7YzPp2NvLSzdDqBNcrRneQcjCwpifCdfpYuLS3xd",
  "key34": "5qJorkX8R6K54Tq1QRPgmYqwrhrdyW4Y14Rwx5EDkSMjm9GejohyRxyoNPethDEPTQmHyHZ5XHyb9hpMaCHNf83t",
  "key35": "415MgbMU2jFD1Caevfnd7i5KJhUkG7PvtHkyyNUY3ynfwUjU1ThxBAxA9hfxM9CzNTuD7p6SjgtmLuGwpV6zRkCb",
  "key36": "5R572t6RWqdixjGKMenyfJxkfgNwqhHgw341s5Ji5tutNdntH67BEMVkKPup4g3WW9v2E7JiwRDEnckJpKHGn5t8",
  "key37": "7EuJe644xCNMceWb8QQnrkpwmLWgnGNWtCeUQv4aiaqE9UxWfre2FAumt9ndoExQDmEo7uQAhb3ZAQxDGnMXPwT",
  "key38": "55SpkmY7b4u3XcYjRFn7kjb8GU189f5DF1GKGfjw7VwF529i3QnF7doZgk82q9MipZ6hva2qCoj1fmbx79pMpkXG",
  "key39": "49GRv9SSShaTxpqP9o54ZRhKn9HwFshVGXEbQoYTPw52jVgyQYxqth6AdJo1L82TPeMo49XRsbmZ79mow12AqWGP"
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
