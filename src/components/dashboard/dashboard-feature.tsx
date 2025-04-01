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
    "2o4Afv2Hha6NknE6u5zYzdK94cGKkKan5oiBwRXrfuTmHezDMUEx7AuGnkcDVjvboVAYwc6SSTkFzgYwrF5cwEEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSfneKvUvr78jBkvTjMkyNmSf3sitTjtjxdR2o5B8ezRWXDCJ8XFnjSos1uM8hDoZkks6YjupfuFfZosWwdcnQY",
  "key1": "673y7JE1wG7fh6QSbkfJRA2aSAc3S5yubbTMYxQXWhYK1kWiSffaA4YrxzcTLvR72PtQMeAncq7iodypFZbqbKE8",
  "key2": "3X6hqQrAWsjSPQ71ouQfMxQRuFi2UvMgTyEZ32ZrJf8pUyh8p34a348Y24eYpviidgxJuAYcKYvce7rNyhDC9GyG",
  "key3": "PUkeZUdkJypwh67cf2CST3soCr6xfcCJHscZT3NwytTB6qDF4WazeEohHi78XCghbeDubUjNTDjfzxSWmN4L6c9",
  "key4": "272tJfkmqHgQdjV34PM3BUwjuRkE7wknSAB1GJmx1No6r6D1EAR9v19K6pBvXeCKW3dF9uaZLDQwkLnbGg24LtUq",
  "key5": "29y38y7C9QRvk3DpahAscMdrCpxUFM7X3BgEzXLUDSYpPAGjUPGT9HPaXdVXiUMyMV7q1Zgi9iUciGdVFvbjzrj3",
  "key6": "pXk9DJC6nC1gPdF6EqQo6sXZmrXkWht86gkCYNaDqLNXzRwTs7w6VipCs4GUCtcduB2wMir8YEXeEfkt3mp4phz",
  "key7": "2kE25bi7NXkyGzkqtrBThKn51o1PiMTmayn1D4otWbtGiQ5NbGnZfY4beHkBstu8nWiVcvQNcDnv7YTpJqN1f4j9",
  "key8": "2Nvx3XjrJoS4SFd3QUj5GbTHKqAtZC8JJkhBnWRHUTsroTCacBgXKecM8kyiVJx1i9DZYTMM76CWrujDFssij588",
  "key9": "5AWyeckhaKqd4eCVyYmefsmU1qswHUDtHwmT65Vwrt7Fmt4cDgTB2MgoyKtdA9YMiUa1Ko6xNSZXp93vFLEs9UBX",
  "key10": "3KquskadvjBc9tcaqmnwm94sQGZHHevvyAePeV4bZqwpbrqnrQsKVMC8mgE73zarpijGJ1TtTxkB6HbuuEskAs8P",
  "key11": "2GKaWXjxV9pRpWmvMax4SnKtzC43pgzyfk2VAPzu8NZvKDEztzi3Nvypyr9ofQ3EYK6zpCh2y7xpDvBWQeq5f3LW",
  "key12": "4moPaRn9iSLfpYnPSauSTbB8XTBYXmUzSttKpjiv164oDkp2HaUJSqPG7MMHE2KYQ7f7MzhhcasSNfjC6mrPffJf",
  "key13": "2ZsHGz8jHTZ7J7e1ksfj31kmiWmnubzDDytgehzusdBBSZ25NvkxTtDADT85HacY9LgCrecHhSknbTaV9rNdi5nH",
  "key14": "3RX8ApjUx6UMeLrKuL4SMhnKBxyTZCbTpQJghzhaReerZL5SQPB1uKnJ6yg75g1iXjHNGbXfsyojPZY9WkJyqiV",
  "key15": "4TWJbSGedjMcdFefz9Ztrwcviq2NgcJGvFW7AopSubz7LPnMUk7NVwRryqndBwQaJbiSbkGMSGJF3hc48ZPEmQXB",
  "key16": "JQgkaMfYxnzAy7wKUaHMcie1HjacRSbsgLVQGfmbox69H35KYb1EoWJrypR5tr6Bcc7NW1JDP4Mz6PY8m78SwNb",
  "key17": "5wX6JmSthj9CjGpCq6GXpKtFubktewx4FTgpniRQ7DXqHn93b3H1w9sEkThhcmSMZoywuxXiMjcWMVSUNQjxFrC6",
  "key18": "22yMjePSYbKvnuPivWfJF1DxtZ6LyBeCUm7zRFQMTQMnrRHBuQYztYRQuWySmJvodLWp2R9ERCKTEbtUx5kV5tRZ",
  "key19": "3JNRYGARdkeN4MXAdJX3QgaxfzEcvBXbSyKRgkLFFtjbfKpDEwpetq357cNJu3Lb8fvdJHigZiZAfPCjYhZKQfcy",
  "key20": "3NYp8haJHDeBV8xeKPJgEuTubj8G3YDbBUgHZmt3wpduko7iXCCUXiVN3mjhjm8ezgu8DVZSchW7L2ahJzan7s5t",
  "key21": "5uHnoYCXeGmPgBVzBkBd5Hy971WsXaUVuhyuWfyXPVNnHABmLEUCCxDiP7nNCXNhKvjJyrJrk3HBrP3CPQQQaKSZ",
  "key22": "3jvkGjwAQCPK57eFrcXc1NFJc7bJ1oVzJAG1F69t6mo74Ebr97GpgCHcuFToinLDhMY2HjnN9m52wnjAvBagb2oT",
  "key23": "4jKckDatL9cSHoXi1HFZESW9HzoAqAAjvaTLyWT95TcrPTP6JrcNm9hUKJNMo7DMG1zRfmQCHJoTrt9ZA2J9Sahe",
  "key24": "5XsU7ZLamxv9mjatr9FcRoPtfmskYQGWd6NKLe86KgMhMkodeMFefFpJiqd1RdVnWTLTyTcBERVxi8TwqRE8kobx",
  "key25": "3YdGcnZEkoPrQgW1XeRxCPiXV8992sB6gRTzDpRe2Ks62zgK6iayyGzkMgjKPCCWEUR8McYa1wWCPtDpQmEStbiy",
  "key26": "62YdqexQk1ENKYpre2dm3qyTsyh8VRPuivby53eKRcDnAdWg3L2WqW3y3cwgZUpUPNdHnicw2zf4FRb3oUJFTAus",
  "key27": "CApSqUwAr7oTAWFyUgH4igA4hf67yvaeFKBD7GkKKFVVspdsLNRGTEgdrMYj3TGqWZjQf187tYEXAe1QrCjAY5p",
  "key28": "WXECtngxS43yCy7K8cTARxSf85KJrQLG7P6ikbwpbfEBKU5og1DAsNKBt5bTYrgn9zv2vQGETwfZEkCYbbXTMRA",
  "key29": "3m2bmxZgKwN3of7FM6reVeYQ2q14bqnWfhsb6CyV4WnYaNxq14ixaxQEc2cCQKmjLEhcdf9yVPibcBSnwErSJUQM",
  "key30": "5cDg6kMNWdj8NcEKFTBk5U5FmAcavF96nw2Zkmtwzk6VYZDip82WKFGA2yuZ5w1aN6YCuvq6UB6ndY5VWvPxoj7c",
  "key31": "4gzBcvHHkr7oBad8GTowfp8zLsWo3TLwu4XHgeNuSbD6xdNqxe5WEJYTNZ6VSTGtubgNvAK3HSm2xQpTqayMvUZz",
  "key32": "TKxBCQfDoUM7XyYXWnLbdkqaDpCt8ZbPoTv3a5f8EAyuDRQMTmgk9tuzMfdiwkMCekcUy4WpaRsPkqM84UatqPJ",
  "key33": "2TrWYxtdYzjNsTJwp9gyks3xzRZVbYdGeN56Zb9SLAFub3fyC2tLyP1THucBPbQf6dzBsSauoMG95HY9nq4UjUcF",
  "key34": "xsehoJZxoayiNi33rJCSVNDDPKhzxtaWwp178EUTQpkoDHTLGLzE9T5Ue9et8HrgoK6gfRLfHLUahDahxxRWqda",
  "key35": "47r2a9ca47XD7vmgWxziTkXr38pCpqLskEDwYmQk8mUXevW4YwXh8sv33cxwaUYY3R2q5kYR9bxKikqh5mJ9GMQf",
  "key36": "2HdhL1HiWn7yrq7U8y6M1y8bgEFJZp56PnL97zfQY6amyYLmKKBfvkUA4RgJhqzDWf2CbUPBjV5UVbxo8wjFd8vg"
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
