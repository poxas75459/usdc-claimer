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
    "5cPggBLU4NtTDeqEHPoavzv6tEhPhcdooS6J8xsNY6nsetEXT8AWFAg8ZxmrAD7dNt3qFenSrPHSNJrsCevvgpe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6d88yCWRUods6BwSkYTB3E9isqMw1qDg4BXt35rFeFTu9QBTBPpLhmVXNwXSjZD4MTdSuVSrcf8ohMpsBnPoyg",
  "key1": "waS6xfRPYdQd33TipeMGCFvLJgb1468bLTxJmuugo4CGnHrPjvGpk3LEDMUa4Cic8oQXySNJ9gWmwvU1d9qC3bj",
  "key2": "mpk3ZhgYcupxyXeCMHwYUbqgjbuwJcK9LsHyBjcGmW1UpRWpLDRbyW7qCCpxSYiE9njM8oRZQt9kUzwbzExPnkq",
  "key3": "5wtNBN59ML6BJWjMfSsqRJykYDUFgoaJAYrmegpj8hffPM82264Y5EeDvMHAkomFHR7UeBhdBnzy4ABf6uenLwAk",
  "key4": "5JupXB5L1aR8vcMf1XkAoePMpdibhiNN6WZZXcQgfPPaXYaoF9FFeKtNdNjnQ96CDMw5W2dfZSzh7vftLDpZy9LU",
  "key5": "4AXgMgkzRzhsKv6MKSLFd3MqWwwtz9r1LiARRFFxdNtoGS29gE7zJSt5k77fhaLaw2qm1QCkAXeeHwUNfz7HyL1X",
  "key6": "2jH8K6t2zmhaBQbEixSJciGcqvYLvyKi4mjKph9RRnK47BzMN4ih6bDhd2pF4uLRT6nSPyrK7Qx3MzWmJ8MWhv8e",
  "key7": "4W2wPUwNDcAYzWoAhpDNwdHmaynKTF2sAf4zNnZzXMH9bieEaM3wbPR2keKSWvLx4hUWo18KWKeYfkLHyQ79RRWQ",
  "key8": "3icRQuzR5ykFzZq5dTgGDH9ZyPciMkRGvznQjPzLem4VFsDHkMpxDXmEwaVkLF8YJzfKyx2d22W8f1Bv4wWQfztW",
  "key9": "52dQdayVb7hGCGdNBe5yaBKHqYo9Ydwua3pZ7U7fiRC6DjQcW6udBX6p625ukkUFcojr4MnJxLb1zNkDBairTJVJ",
  "key10": "3gMdvB8h8UkuuwGZ97JM7AXMgJsTKQ65mMn6y6dfbHjtKUUpqG818BigiyQYBzkDs1CkVYpmmVC2yMBNobYGVZHo",
  "key11": "5qYirVXBWCChq8jXqnBqm5NmUwVDNoxfmmLwszsSEt9iABAf2WvT9Df8Nds6GK4bt8NKg7ESsWAnXaAbarWwU4Gc",
  "key12": "5K7mLKS6wZiZZ5GURotrJyUzwDfT5LLK2DraTATvS6PF925q6dQHxRnwTyQ59Y3vYQRP49KmxUy9X6MYyHfrC9gK",
  "key13": "4A6D2HAKZnAfjD5W2yrnLqvTJEmcNZkvyKKfQNdJ1k2ZviGcMorGQ4Ti7ciaqv8EN5RQhoytD6yzwFfAkFHdqEQ3",
  "key14": "2W8xXBWuocCJU3tsKpnky8SwWS4FnaLrL2whKpkkoVencjunvJMbLAGDqqoUNGb84wszE5SqtSPqhxThJeorDLpT",
  "key15": "34p9cvNtAKmtcTURTuZCrCBXWMufyiQxahMdYbjCvTducmiXRtdiEdc5dENGJTobziDB5U1SaQfy3YW7pP8XbKpT",
  "key16": "vuzceuvKhGDFNDib9dnQ6maxETBsv8HtpGJLRJPqUYU8FgKb3HTTBMkw1TBuHgnhu1XBYuZXEyxYRxuU7rKEqBE",
  "key17": "2XWJkREa9pNe6QsAi3FaWFm2tebzkQV3fgbEF4TwLnUMEsAnDNDwU1PvdfowP7q88Q2jp4Rv2stbkhfVeuKET24N",
  "key18": "2XPcpYFLL5S9EpFCyUtqKK1FnAhJiyUuAD3rqmPUJ2nocxvZcNtpRVrA395mNXv1MBu48iYmZfwUf34RJN8QWJMy",
  "key19": "37aMvkDrpBSS4K6N5qn4dtUKwk3TgnYN3uKNFNpnkAE5RcL5RD1iGVLknfcdyzM9wpJeBQZEpyyrK1SZawimrJz6",
  "key20": "4TC9EWpLPwcXtAw5jp9Ehxsoregsq2Q8HBFTptimmrFpV6A28HTS3hE72NFZXi9Px6tF2HczmKFgXJK5s41LqQfH",
  "key21": "vH77JkJkcJekYgfh2fgDkuNzSrTX2PLkVinLKEczhaRLHKnXcdMPQM9Pfh3f3JGZY3B1DEwz3n5sipA3Asmtjfe",
  "key22": "2N4VVnEYdpKT8NF1JDX28L29N4H829A9GjCWG9yhNp37Yppc14W3M78siizoax7DWSG4fFHpquP9fz5wvjyWW7jd",
  "key23": "67mZrAw96LHW5nR88wmCKVTpQ9ZRAE9Kpc4RtSZrdpJp75EpFXGneEpJuQo4JmGaB4zwksKzqu3FhdNx5B91HdEy",
  "key24": "UTmyb2Z35BaHrde2CKZgtN2dbUdEQGvwczdNd1hqZHpASVpcNzYpFtn9ByiwPeRdvJea4d91SLEV1SNqsX9dX8P",
  "key25": "aT6rnhwDKTiiKVptKgS8gYmXjf2Qe2x65tXm3CPUaNd3cWVkmpQitQKXx4u5orwZV8ZJyquri8hZm18kSXzUjhY",
  "key26": "Tnnbbx8tTBsNvz5HoepXq3X8SSJJcWk2w3zesSZomJ9KRUQop1PABau4VgWQbhYX3fysP3MLLurR69WJafv4Fjz",
  "key27": "46jADJg3nKp4BcvQdSKyNFRdEKteXvS3iKP2QF6Z7tcsXBp9aw9gPf7dyHBEDoWo87ycSsKAPKzW43MYAszj7zsu",
  "key28": "DDt7xgFsSEeRBmZAP49RgMV17J2yNs9sAVXZX87FWufMK43icxTnRnMGYFQWeZ4LmtcYbVDxmKFMyNL1ebsxmna",
  "key29": "2dGG2hE8u89XMrSaxSZQuHnQK7gQwnWkMg4NjV5L8i3cmb4w3KSrDHs9n1RU2SW9oq5wcuTMJE1aWM88m8TEokHD",
  "key30": "5XSjGnXFQSeheS33pMaxjQK5VDMPbRBseN3W7vtBkdNzVkEQ7DC259FMnrKHseUpm9sXCWX9SjFcU3zJBy8bNg82",
  "key31": "2ESfBdVusEpnkqCTVAm5iTHRRv6czVq1N4S7uMToMcRkGmTCZTh4opY2hdBKuK8Emk1rmTfN8GRTZaqrt79cjK4V",
  "key32": "3pYvoaYAHtxEz35o2D7DD7uXgFYS3CV4UEiqinopSxFPkoFps7kiQqSRhmS91VPpEqYg3N4xJbDXv5fq1jiUXEe9",
  "key33": "j4V13TMPsJHo5f8BGLG4ur3wyRF1emgkumQx7imZvsErHsLwsSpd5MTLYxXmYsnbtaEJhwUmrKP21Nm9T6aSCNB",
  "key34": "2vHnodANMyie8xS3h24amuCj4QL37AgM6JDnQPHy8D2ht4sv47yznh2J5v1PLWEwv9rRRR4zp8oYQnYaKwkfxLqL"
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
