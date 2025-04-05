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
    "5qREt2WW62ygZEvVXnnCJxLsx8opzKzZUHg7jLAxTC9H5SUCHPZsQiVAPi69T2S6TGpBdp6hDxR5eerjyUY5VeC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTvSek5NPsxaPhXvUpDk4tnmX7J1cr374X6u9n3YCELTMrfx1S6hhgThNp9gXs3tYpuwKpNphJXqgoKjz2prX46",
  "key1": "3dZkwFXDvzP6qxvMjNf9KqpwTQncgqPxJZ8txFMb526Me6ZP5De7sruA4PR6EUiFQjtog1BVNTFmr1JSy6jgBiqd",
  "key2": "Z2K3y3kxWAfQ6yYw4Pri1joHCNA1n4SgjgzLZhE1ET4Kf2zNU31YsJY2YM5ETxP9hHT11DWSXiefYdHZ9WZ64ce",
  "key3": "FjN99DTt5CuwMDzhsav2r5F2bB6pqUuzA8d1mVWNr2QZsBJb4q2G3Cpv61UUyWyj8Hozf79WmydYqWiVf3PuEDQ",
  "key4": "YUEYd8gRyX4utPADSscfWK8keCLaXHSfuAtiNqxWBxgs9WrAy26d1rToEwJY1pW9NJmtWDWyMwGWDqmbn826wMg",
  "key5": "5N8f5JwUPxTCCS1wginon4Yf6v2rPfqVX2RtZjDMiN3nfzQnoJhpuxd7Ym6EyJfctK5jUa8Uqqnkmp6NcYQb3qh7",
  "key6": "4tJFkHL3bsDZJFTd7KJCx9F8uivCN2a2Q3ZpScR46aqDh4uGbwMgkbUa391psG9h4VtaaEUQz1av3rNgvEF9QTcG",
  "key7": "2nDfgNkb1cjM9tR7G4pS2fSXepZcUeqygCcrCtHtMKxMnZB4cTQfjmY5hKxX8P6swtUwykCK6jCzL1hmAjpn1YWA",
  "key8": "5EhaZaJm7EAGzsBYAFSou325viv5masomd9hz4V3B4eW89UZchNuBV9DXuRjF99ViifHfEBq8Fz6EntcwScDD3Zo",
  "key9": "23mwY1ZW4jigYumrMh8oXzXSZ6CyV6LyNYcuqxPCHJKZVt95NMDeXQtVCZoZJFuNX25jDLySUqLbi4jZVYqHAu24",
  "key10": "4YceWRn4tGKkngUmhy3DbMVwfRBrTaFC8GEmD4M72yiDk76nrc1hRnbc5vBDs9TVKtfJWwGz8Vwj4aYuD3MJcpmi",
  "key11": "4DXfdh8jcAfR51RwKa9YuQoN8Ln2gEa5BeWeFMwUdCXUwwZCoCRRP5FmuuzY3Lkm7fg2VdfR7KHLxmV21eThcSam",
  "key12": "5NmYMXJExmSBqVLjtNC7AtGubCuXYGyxsuzow7Ubcrb7bpfXd8GuNNHEksyqYxge2V9Wu92h1DmZd4u2FgUm9AyH",
  "key13": "39RFYS4opFkkKWojSsxdZ9AGSyv3zZBQStXQT9F4433uWZzucJ5m4mJmeherFPrgkUs1pzjGAzEJJogd5AAcBuM4",
  "key14": "3ZbtHTUqLZNQMESrLsBAsbyfsQc9DWFmQ35J9f51eMU6JSZiNst3RtSU7yTYpuWf7kurj9KsztmjB2kTWZJ6BY9Q",
  "key15": "2udugoqKF7fxJLCZW8yGYnhCS1Xb55sDbsUihG9PuHevMAyMghpxmpC9JJ62ka8QHDubBPf9T4Dejp8GH3siE4Kc",
  "key16": "2CqJTUaY6GzR2mJEpoNbHxhgusf1imFTbszDVP847h4FC8g5aMRmVd1TEDMduM1yV72uijFWm8DV238YfMCTsK8A",
  "key17": "4UHB21qVaqDsni96WXWPrMzDPKQcDQX8bYZSLfs5qzS2Frnvp6q6bddc2MpLnoRBkWMU9neLSHbfkL1dW7CE65M4",
  "key18": "4h284GGCQww2mhskhDYEDFLUPtfx3zVDNDwDD76BQYFhM1xrmW8Aic7TuceuzjAWo3BjGV3nDB2hm6XahHYNAyXe",
  "key19": "2sMTB8bkug7exuxjSX1mB4NgbjbswafWSTCCjQL4LXRH1NkKX2pLBrSWZCm3nzkQUQ19DBqHP6KJkbvyeK5hrGf3",
  "key20": "3c9wu33Jfty3f4KnpkygQeLMMHTFGAoDeqT3Z67xhd6guXE63nhQiSAVxw7bDPDGf5ZG2RKbttM4a46WGoNJosYK",
  "key21": "cnYKjgQmrwR5xWfbBupQD7s8YSfd6HJepQD59YpKa1u5Z26GKQP6gTWCdWAMD9RkeV8xttjs4KSureyoew2WfiW",
  "key22": "2X3RX4iwhWwcCa3nQVHWcNAC6BSUjYcW3q38fEkHDfffbXBjYq3NC8YDKccGr7XsT719vH1NGURJ8ZmMUSz2JdwC",
  "key23": "3QGFCtCvVbhY2G9sAK8ETQcaH5hG6UBFgHUCv2bWRf8NZzpy36r7Z5vGPb9MAjNzrvC32Y8NFMc6jC9vJe2QzoVs",
  "key24": "2fp4b5Ba9X28QAVhh4WnFwqLpit5iYXjKSZzVZSWwfggXqjdcQhJTCUw8jMNSAB1JG63vUWU4rwY3HRRwUjFbFjx",
  "key25": "2ehPCzFMRYGEfu1jkCFPMADp4zxM3vRwoGzkrAo6uhTMP7sJqKnL1K2VkHFswhz99kYUo5NiNmbUrJUVk9s5Vc5u",
  "key26": "2Q8gjxfmxM267XhP2CnXKrAK5wdMceEjoCvM3iZ3cot8dnE44RwpQdNnzFZVLoSg3M8BTE4i6zUnELGv9hg9F7rB",
  "key27": "62mRBLM9yrhKHVjhqL1fPihVJR4eLXjMQhwFSrnf23eomR3xkSADEoT1s33h7ySGx4vruUThJ9g5iUMmQH5Bhqw"
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
