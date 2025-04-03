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
    "3au1nzm35H6awEdswBYQWuG2hbSd4EgtAts6wqLAwaY9Piycp2DSweFiQf6qiU4KAfVrM86zBpEJPPnP9rR1rUM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pNwuX8xpV9J2bCzpKr1pKhMoVLdpXMThrkyzzYQTXaRsDtALjEa6jsCPHjm8yanjGcKyrKLWnPkP6dzUXTTTndd",
  "key1": "3Ndz4GzVkYSYHZYyQMSE5smQ5dxukSkyQ1MUcT4PBtrxqZs6MiZ5x7RBWWYcDb4Cit7cYPeiTfbXdXkhocnTfE5w",
  "key2": "3jXjHAfNnhsPYAMki3fZiGtpr5sTzARvyjvsUY38A3A7Vp6TYM5Z4GdENF1j3o6br4yfGSDw4DP4GmaCzPed1vdM",
  "key3": "541T9ijbQaNScgkdNdF3YKw4kC53zEuRWaMiJRtV8ZVhWJhpiFppWHBde7ySV9t1iFyfsHAnwJh2sgj9SZqhQRTw",
  "key4": "2vDjbb9h7NfH2NVaYswoiNxjR9tWX9fXhvFXhkZHHzQiVs4a8T4jEfLpZdGNrTVG7XPwUdRrqB8yRjg2qZUDT1UH",
  "key5": "5gbN91aYsPTrtYeBrGmNC9itnVF3acHe4C9mYqSMyEBvomKvRXcoLMErkkgDiCFSpQoYm8U9AGGpvkfLkAtTam5i",
  "key6": "281GRDSRYM7xDPaYB1DjLDDsRqQZGhbWZapRGst3W7BkD56r7R29LPQmBdkfhfbENgEfwjtUkjY54R6DZZJ5AKpT",
  "key7": "35T1DASS9CD8VnfADhi5baScaq5ykreRe7w5Qs1shPXTGnAbHvHVySRvLGfb3bh4GbGkoQtQR5j3MoJKuqJXE6bs",
  "key8": "4ZM4fn73xzjSf88z5gwVnk1EKJkw9jiXMVMQnGZkqujrPVXLdHp98Zvd9A4ar7PH4v1XexHRKgTc4hYrQmVqCFjm",
  "key9": "PU1eCGdH4oNteVoH5wiA7KxDaDDYrQsWPDtur17HR2aHfxxt2yGh3DDP8LUd3oyQEKTPg9zfL1EzzFkxtVg84Ko",
  "key10": "5Wr1iaL9knnpaHgRYSoWsyexWu8qWpY9AXnsivyotGEXc7kwJegHKGsha2J7t6cnuTLQ5MphSddmaVcpAvZn3sFf",
  "key11": "8H5mRt5qEXEd1xCbwouwBqiqmLmTxGnxW9tDfEh2XRDZA3VtpFTdzdLFWTTcKvfMXJ2ti78dsP89DSjPCgeXHoh",
  "key12": "51St6ZyEmPyESpYyuP83Gqm4jSt96gC7mF5C2anFZrzArdiR6ZFLAXT7VuD9VGGcaotJERXwzUNC8sk8MnQCFsBe",
  "key13": "5t3CLjgJGdQFE7UmXQT5c4GSQvCo6fDdbLu3PkeHp1QYYzk2cdp2a87gCZVM4YDbamKw4a2g51qZXD7SnNzFjFG3",
  "key14": "5JMF9ZLUqGC3TQ6FNyhFJLQut1rpGnFDTBDwwiXqHSuk8DYMQeZ9X3UscSvVvbQzxMUfkKNqLfG7pH4KLurVKHKJ",
  "key15": "4aCZActCR4W2e7sx4cpb1QVhuLhrcYgKkykSmRGxQJ7AHJ5VEWMiJWvbsJqovFFU2neC8bRy5tuYF5cE7QHATwC7",
  "key16": "63fTLUXW66UEa333D51uk7rKiWGxcJpJmNtue4PPyC517iNxECjmboPeGeLMVYbGgsVzT5UuVZbp3TFSURSGQh9M",
  "key17": "3FsmdzZ2jP9YPF6tu52V2sKu6EPgHtErywHx9p7KCE3jqKejBg2DBHsjMEscDMPRQjePnBrEfCkCrBCQzhDm4yPn",
  "key18": "4drrfKZnGNhKB9ArR431zH2oe1KWxZxF4CDue9dpCED8atg6Yt89Z727MX2EunsY1zhKfckTDbNKzdrMHazJTcMk",
  "key19": "3s7vEt7EyeJxKaZCVBa63z5AStPvTUgFAytxJfosNG3UNx5w5oivqpYyEath5eNeLJof1XNhwu6JzMwezUdKKnkS",
  "key20": "4aALQwxASza45B58PMrPZr9AN1xbUHZ68C3wxVcD3fA9pQeYz6WfurFLxqi4ad1ZzDSuQS6pfxBvE3xtjeahzGcF",
  "key21": "ubhaUThXGMWq6Yq5i9cmFfzoUWmWa1NmEMHipxTPdUX8KoYJcrJwDuKPofUuvCgW1iKCqvVRX2W2cp6mjD5LBrw",
  "key22": "5kDQEmtJtqRMtA5Ph3e11PCZUfAkQazz63PmqmCcMta5tcEq1mbRLKo3ZA3TFtzsJzGz3Ht64iABAwfYikfWb8JP",
  "key23": "654LA58Szxa7kqqJyGQPF731XU9MwinkaWDwkJCtv9WMbBHu5HdrZnUj1GqrDQPkRJVBWmWdhjoHSSQbVaLhJVym",
  "key24": "tgJBgu6fz8GGdik8gcH4p1DCW7fmqoLLR8nZriKo8nK6rDHUj5Dr9mspn69hmwb6xGfAENxwfqC636wYyAaH7Nd",
  "key25": "4ai6a8j39ELo7zr1yVcL8tyhDdcibzsS43DdCRCbSRSGfbF31JnB2ag3EYSxrLPM3KJE95e9iTDG82WNNtj929Q5",
  "key26": "54wZK21pXtnhoiJRYvLgE5MhiAAGuyCEYVgV6nT5rbSgyWpV3RBFSNmju6Za2p86TMTS3TNeYUBtqHdsnJoU2owu",
  "key27": "4dHiFHcaTpa2VJjUi1SA2NBgoYz1SLempBBfKBsBeYZ4n7ircvNA4XWY5r6gN4tk9yG2KFyrEo43vYh28CssxLF2",
  "key28": "2GNqpC5hnNYgUjM4LDwx2YmU5kyodPHtuq2VXNYotj2Lj9ForFx71M6x2XhQn9uDBeGVM7oHvchtPoD1WWNZBy4N",
  "key29": "8GDLeBFSu9b1XxTaBythvDVC1t1VW6MZ4q1mpxnos1zc8oV9ApPw7Y7UJrNeS1r1N2mqcxEdhUQghUu6NNk8Y5o",
  "key30": "3kr818msZg2bui3QaSwW8CuC5J9LB3js7Rxedd86sKMKMoNbSpjGUgxp8rFecJLTMvRrL1AxSs7dtcCDx28enevo",
  "key31": "2cNJ6rvXCyqQuRRx6mQH8J5GWFQVLkp7y3ngMq7JPP9L9sJSx9fTJYJsBQ6yYBumX7JJmDb6QgjNzBjVgGdRceQa",
  "key32": "4SEim8RGJ1QwU2vaRsd9cnfVzJ6zUgwgCYMqhsGAjFfwdbuityRgHUpq7FkcWw7DYxK55fNwJHy2KjXNUeCjzbVR",
  "key33": "3GoFFbL3cEZxwU2RySGDjG6M5LCFzcF1gaSYJAXyZPpTvci4Hj4RMv1YsjLucD2gkLWdLFC8hvdUPLCH81H4tHDx"
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
