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
    "3EJ1n37jJ5Fri3bN6giuFXCaiZF15Muk5Te2BW9bhjVaeGohYYSkMkaDL3CcTH4sq2NCeaHjro2HrSrJCHGTzBmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37eQia59Yuv8CkBRB8oeDa7Ehsas91KeS6wsrqvrLQY5nySiCjYmhR6pgqWEFizXkhShq5DBs71e8uKvXqLTgQxG",
  "key1": "28V6mdoUXRd1AhFJNdZvdu4kFhzPTPph7Sio6PQfgsCb1g1vN9aC7Z4fSgc8gX8PrcAr7B4787U29XUQD3xt2uv8",
  "key2": "642SBM2WkFa5azvLyA4MCWVrR3YQmfLoDrqYV4hfHPmP1uw4ZvaujUfhJxXSjCPo7dWf4epnoPuhHAwo8LTwpvPQ",
  "key3": "2upCCMtDCKMcLBjaRYhGHtcrE9WT9AbnnVPQzZjMybo2cfkZovoDmVHiFrDQTGeEkw35hYBpaW9UJH4W7P2fVJ1R",
  "key4": "4QemZ8f2zgJt5M2g4VG6RgcuSFd6F31uJjYaLRzr4rQesCZx638bWqDt7xt5qAtDtjqBF37BvASAkofRv5enYY1Y",
  "key5": "5UStdVTPLXxnvn4LqHMitk7G44GHxg19syUtbfxxQQr3n6PE8jebfP3QqbyivRRLvyz9L8dDABbXLLHm1HLLZXJb",
  "key6": "4RUtJm9wTNmPxucGRmGgDoTzwCLzpjDJzRvc8xQdCTHZKS5gDs4WdGCF3Q1wHuV5YJMnjfttVsqFqnbxESxGxbav",
  "key7": "5BdJpegTSyMKxrSfH2jLBWKSuPMPubsXPQqAKeFyrMNqxbMBgQSh9ScGLft3ds4w5dvsD5oLcxUChWybsuKKSwJH",
  "key8": "3ujbuHZonHWxo4yWwPe3envb9gbD3Q72XQaAgoK3nHFG8HU7QmG4rPFAhf4ks1j7r8KoRHmqK1djUPyQc5UcjijJ",
  "key9": "5Vh9QrFRQTCCi2aKFRBwhHB6NpoepWLRsZJBDkdRhcVVoh1HbnCUsed4YFbYHu1huhChaaaugHvcL4zq4aWYU6b3",
  "key10": "4MbBhYZ4y1dX3gVYw3tPQm6kJHPiAqxbxn7p2V6EHnm6nCBRHkZw572abMP8w2rVFVkPLpSA5KUMtatshoyotFxV",
  "key11": "3kEwFAeJN1UVkwJMjbCwi3RHXQqLRnV1UrzdeJPArEKeuCa9h11GAZpuqVbFuYHNcQE42DFfF4mdrYRJfXwhEDcj",
  "key12": "m57PqLykaEFjNxCcLUuCieBX1ioD3ma5qwxmyUfaTdjt5NNQpUfgEmUcRbPfu4aHmwDa819NaijszQ38roB5c9C",
  "key13": "2U4LmU2X6PGSA4rUgQEZJfeFVmXoZgxMrUbAiKJ1u8YsxQrBEB93a2XPwF44B4zoeu4MkmenFzTQj753G3zSAPkM",
  "key14": "5XEq1Zv4LbPJWLiduqea4P6KdPAzQung9x1Pyb8z5fgdtto3ZFYfLCS6acdqLJayoPv2BfHSoq8aF1cmEEqdRiaQ",
  "key15": "5E8SK3jmqwkRfgSq5LT5wd2QG8gpVPjJfFrS485KBGtPfW1g1Agfs7gytLy1X2AmwKoTFpdszuyt9XbEXf2jKyVZ",
  "key16": "ETocpgvgF1sUjCvfXZbbE3Eg1LS3upYLtkfD382SwzCGhFY8TQdqL6i6ELNkgk9nUqrRhCTbHndtfQ4WcVRrhJt",
  "key17": "XJUp9Zi595QYiMy3V5nNnHpmFCER11MG41FcteE4rtQvCyxg6Hm7z9m7LSQHimugpvuQKNddvqWhABNDx1FFTo8",
  "key18": "57DUAGT8GibcQgJSmdP6WDA96KzD4nyeyNfVNVrpE51M48wZgj4zqD2YPgTsQvMWojZqNGhm4uBbiZkJrzHg7Zoq",
  "key19": "z3NWadbNMiaE5gYGLenzjeHPuTNnXuZdFeEHA4oR1DMCxBaRpVfMzjhfuFdTPiH9A6HeEf2U9rsqMmurWBkRNwZ",
  "key20": "46dp1Ckb7eFHtC2uTYaS8RmvZJ94jFujgVxmQaVssoT3Az9FEwC7sZYYzQ4uUggFCx3tszxe8mfbD6eJYTQLz21P",
  "key21": "5pymcftTVwf7DtoPyPxRVLvD5jPa61wJMMxvddeCnM6NGnAypNBhrnXL5eajmPvsaeiekADfUn8EJiEpsDw91bZD",
  "key22": "5AogmA1QC1sN44gKgRNShDtr89PUfpwc3GKkfJK9Rtyisex1zN6KYR73qCj3T3y3quJaHRARGyEXVXG5BDTg3xnj",
  "key23": "8e7NtvGEKWJ55aaYV1Vw66ouHX6NPBLFY2aaBQyKbrw9JVqzhUiavBRHu8B11W3MiKPEf6hGUa6wA1ZAPZNRsyh",
  "key24": "2L54XzHRkRdH7AhyHLsgUthKaXKFur6fhmomknL9xp8J5EwAaRUj8DdxvvV6CT8ebvUczrzTFbAbx4nkfTWHhkS",
  "key25": "4CffJ6SxFC6ArW6UK52JmVNeLeQxTuJFkubjuNgfwishWtqqyMCeE84BMd9UwK5giTCLV5f6NrMEkNR5c1YRBENG",
  "key26": "DsMM9n62JjnnKEFrY8oK7BgKdrCaW2A8M8pfHbXWfGMoS48HWE6QsmwTGTJDTr7xWr79BNTRvzeQh8ZZE9wmQKA",
  "key27": "52BbFMkN6BYerSQwBGWpCqxWDmFPLVGhkbnrg49Ms755BkRzLAkunWeK6uM5iw65aF2Nu7x1oBoP5p83uazfiCHG",
  "key28": "eR8UeQT7KHxbYnGE7DQhgY5HCy2a284h2KjJmm64SLE6wQpf2FFrtqxBvdeCVeyZnfHjXKku2PVHJVt3kmNCxNd",
  "key29": "JbGpbxE8j6yJk3dSkB3aK6a2gzUZyQjWWnvV6ZbApjiqMPE6nRgZcpDTTJKkR7XyZCZ6L7SvCLhJVnsYnnkxTXp",
  "key30": "5WdJv2CEwLm5h3repUE273QgPjx93ERSiXHfii1sNPw2XMYCs7PwAVkD2tL95nHdTBgVtG13BHChDCVxtqmJzo9G",
  "key31": "3PnaytXhhWq9jtw6U9THRXuBZzLxg3vcQQCD4MwDHiFVwvvL5ZtzHgBaZFDt5FtyQg24CXHR5k1MhuRkrZW3LCQ3",
  "key32": "2sdZDYRZZbPynzboVd3QHzboGcnireqbLf46wVrGwytvLpT2EHcPfrm8VzcpGRB5k75xeCwR3bHv67xrrRxoPWx9",
  "key33": "2C8cfcnPH1qUfkbVa4vdCCHUgYhSfHtM1yN4oSqyUnF76Q2jDrHjNXkeDhAXivfbsqSiN5h7WePTiuPdhFGViAoe",
  "key34": "5HCM38rVDiyqdZZziBZ6mN22oahwTUDASLe3DDWkaFcjnYWnDYkq4tohSCtY2pRiqftTskUNdTxTU8pR3LHeKuzQ",
  "key35": "4vKrTR8uvuJBoAC91QruBf9g2MJeowTt1pxvefjcYNonxX4cySgxwkri7wDzWNk52JKv2FdbUj3fpAHDbUtML8hG",
  "key36": "3MwLNbzVPpqq7QgZbDiDcBgytuHc7k6y7ACDYnnnwjkBgjFcNMqAsXVmA8vi311weQTmb6m9AcGwX51JqFhDBErh",
  "key37": "27JA8go3t6Dzc8fydkGRFnivRAAqfPswvwLSv1WSn3e7RQ1cxCnc1i5e44QetLkgSin6gGbQnj7TibB8Em1XbTuG",
  "key38": "2NGekrwdjF9jNtQzpo9TZTR4RaCDnP6yjt76X2kFjiRXSs4U2mkDtxGE1vErJ5vspbdpVeoJHXL4rVeJecmTRzYx",
  "key39": "5Lbqi61Cd5YrdbMCHxjVBjuTLGJ41HWbqTFyrShCVz1bLXARqyTx3N8Kf9eorRCgnbnETZwAsbhy85z1XzU8JYJp"
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
