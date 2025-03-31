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
    "2enAFajPHC4WzcLNuQotSJbBeoCJT2x9azzmnen5iXs5XRELm89QRD5LxTouWwwVHhcK8FNgK4kbac7ekQ32xp3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qy7TTSTTmoFa5sEfRShQAFjKhT3JUtUEGfMvY8Y6SD4QThgu83JCtrNamR87dpRf5n56aT5UzkzYFbqaC6C78SA",
  "key1": "2Ty7ydwgrAzq8XrsPzyUHT6tbZe6UgQLdBVs8YZVQrmejKmhRAnVNAvJ8NtNbNrxMAtXzpZPGFYp3mDn52Mb3Lrr",
  "key2": "3car4MtUs51Tzig4jw9scAcL8JJey5bYhLgeL38CysYpdBcea89Vb6Prv6GC97NBrG7m7MACMkbBWMKg4hoB9t8R",
  "key3": "U5fs37CCxtVeNZEbjwnGhHRLV2vLFi1bu7dxLRb8zipRq1zp3WNaPpMSr17fTXUKaUbQL3uErKyK3RgFwcVVxH6",
  "key4": "VUEDzQbyAoBjY3q7z6a1wFytmoEg5MdVguMRDypZ5RioxTYJgHSea9e9GsyP8tjrtMnVCpkWdLqT2p3tWEDxC7A",
  "key5": "456GsigX7qdeBQLi2fhhwEnna1wbaEbPAGgg6sMjXAhcTGzM4nDoQ4WSZAojPu8SwoP8oxZPXinsmTYwipErk9Z9",
  "key6": "5afbrLYXCSBQDPZaTABf6yo7kfcorBsrGKpjwwBQc9LFh8DSKNLeaArCtGPPsQwY17vbSNzEm9Q5mhi5JqQ6zY6M",
  "key7": "5pPd1xtS3ZwN3aaJq68WucCByLjZZZBVieZ2vkgVE7tZ8eViaq9Gca4k2V9kj8dKgsNVENgR2RWkN8G3DjKJhX8o",
  "key8": "2zHtMg9jsL3iE73vLKqsrQgXowVd9Q3YCpJFrEVnYHqPrVvQJ8L3b1tqSWPeHjykfu582GmxiSi8E2YLhXVUkQ6g",
  "key9": "3UqsXZYPJiah43egzgTvQC46kQDdnYvgVr6kym2fXB4ucFgspnQ7pk35sSzeqyuEdscXfBkKAT6e1xn7Zv51wuYn",
  "key10": "hhkUumt2Nh9p5suCcAWimp9Mwkqhz86LbVh6jh8ZRG3WzYHRxXZHCp8XNu5odpNGecEKsP6vV1w3fFYBFUQfsaQ",
  "key11": "3u5wcbKnZF9aoai7BzLHUqkrXRwWnUaimRFP8waTUbgmGS65e4EjYmXzAtXSRFGoyMS7P8ATbGzerdjVyCbugK1t",
  "key12": "2V5oYusUo3YfitNZ3dgppJPPDwJq7sZyZEPGSp5cW4nVc9jLXE5em8VPhWM6cipFAjJxGtQCUr2KXkk6NVdF8qqu",
  "key13": "5zeXBcuBxCX8nQRWF2dWn1cbBL2zzc1kbnDR4Xyzu9UM4n6jGVsGNChgeGKUbozHvzpURDkk4HonLLW4GhufNp6",
  "key14": "3af15AazEUcjBF441XfXtutqdCpu2VG3qkygRuG9RnzT1bG6cGY17kwiFdu5pqaXgedhLDNskBsLz8TpR2rHor9X",
  "key15": "YuDiDrbcqYLgErP4GCR5c6qtcTs8G3Hr4yxEpjCfihTc4kp9E9Uao5F3AozaoCVtQKvVXx95wUAbRvVtH4xWu8X",
  "key16": "fTBHXhtGJ9RuTDZ7xwwSXponfDFAwWk6ecFYrSXCngcSJgCewxsCKZdEXyNKoi1T8QfAq2izyM9j9UntizHtWfq",
  "key17": "2Lk1y3KQXPqa4xJUCzAqykkD64rr9QV3ev648meskA2ZHUijn6oV6yuVUkuSWiHfUf1Eoqc2U8ZiTExjnKGsNiAm",
  "key18": "3ZEnReGg2ttdbSYdsQe96evKY7GVTT6Jy2GiddfUtkBjrkzWfHgHZL1CNreazm286X9a5QqQdjcbbw8Ar1MsJotN",
  "key19": "2QzFks6pmyZhwBrdGxK8P6tdjQyqPNNaryaAAg2cipcd4rL2FtFte12RWevQv336daEDgdB3Z9vUniyd2AVeE44D",
  "key20": "iPdDqFZXSy7medff29K7FyZ7kcSiLE7memkhLZfQ8dz5RmeVKUA3bZRuyes9eGA1F39TKzNu3B3DTRkKuwMofNa",
  "key21": "2Dhfn1argR6TsYz2FnHHB9aNh5XkLzWBbPYqzYKm1GEQy5iM7CJ2AyspCBpiHaXjb5hB6vQd4ChFDYW3pNwertda",
  "key22": "4XUpnsEDJqx9i82JhfMh12hnQiVMv8rRSdCrZitTLeDWTUCZduSSCQ6jD7ATWrtUM26PwQYZ5RDBsBHkHnxHDUe6",
  "key23": "3LctVpgpbfNfpQ1ZTGTmiuPf1cVC8VLUuTKofKVjw1WfeHLM2D7fXpP9VVWd4rzNi2ZY84KNkxfsizyiyUpkUq6m",
  "key24": "38mniirjCWbHVKtj7RxUPj7FZ3EkQzRVA3QkfpY2QEmUCPADdf2VRwmTJ2eisvR9FvaE9gqd8G3QQjgeV8L6hwxL",
  "key25": "2E8jkG9sSv3DdT5SUKuGzSGbX1PyiUDZJ6g759GBmgx2j5yXGPqEU4TRhX7TSMpMh7Z3M7NMnmkcBmCDodXCCi6g",
  "key26": "2SFAm3ffE29n8RhpHMwxGdnbNZmJYwsCwVQ8vNiVsQGv8EcJA5HfvGzhjfhvuJraXY2jZFhkoFUDatSdmYXpt9Xc",
  "key27": "itKRVVBN7aa9PyqEWXrdbV4k3EHjSMV1XzzKpytct3AzdmjqSCAUP2nwzSLWGdhf9kopskPJHw42op1nAwWfYEG",
  "key28": "3FDbErjPKEx5wv4AHAESPrCuNYcEhFV1WwhnwpZti8ejrUpHzVse6K3tYxuRXivaci4PB6kJnis57eMuST4Zrtv2",
  "key29": "4E1bcNpTcZr5Uic6ZEkXFkNWtfowqdzqPnDg2bxCrtDxBwWJ6drVv3uHNbcwDU9JrJUk2fEr9SnK19sVqH4sQog4",
  "key30": "4ua8KhBqu3UabfiMNCE3HsBiZQfkPTsLwQEQNJ2RGdkWCrQd56kw6HJjmRf4ttByx2mzTbS41MxjBrosE33mNEm3",
  "key31": "5AKJ55NSBBS4hu7LJdBPHQ2qbmuVt5k91ia1BQTcfzcfqpWqtWkrFuEJyGeL4PHiaBzhH8XLqf5wZvNCxjAZhPpm",
  "key32": "649zWzjP9sj17BWGBbXcFCv4gWgZnREZmix7qtm4QRqDrcdLGYGc4DY9Z1KA2jBQZUBRvvJAkUscwxh7htrELQJj",
  "key33": "C92uXJu8GaEGMVxv8Dp1AU4DoHi7ge1gUccR84uuRommYWJYC3mEV3kQrKznuDYdd5dxqnNStizRQLco1LZwtpd",
  "key34": "4ryQRN1JLDBTw16sa7hesg5c4ggrnbNR9RU4gFiDQnvMCoz15mqhgqpghWV8FkWymKYUazR8VhfncXmy7C1bcNFb",
  "key35": "5V7s5ufWco6jpamTWZ5VqTMqA1kPKGgxxQXj615fr9vuUoqGyCNbpY6HUPCR89jCmu8CQLZDv3NRK59uCijW8i1Z"
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
