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
    "58mCXpXauhrkwqTCQUaBsqM9YuvpLsDjx7bGhxgocRoCQtsCTRXLaL4KDQ2RbbDEdcDkFAkbRBxNquuPjA3eBSaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52YkyJTtzBPJZsF1QFRr8ZFk5EM5q225MTggmQ1acDf6oYj59Thxugz8Ku2fntVX6FSjLoUy9ns4ta3xFz78fH5p",
  "key1": "4Y7AW4hQorYR5TDc3VA2H62zpvZCD1JY2SmkQGqPp8iNB9Vb4kpd2AjHsYwUTHuP8z4g3h6Lga9zDzJZhEJJ87HM",
  "key2": "636HAFMQLs2KTtkW26w5ewyFKQft8JVHXkHifNSAtSZYPoXu4k88w7LviG5WBgAUnoAnPfhFXBk8yze37CwptTbn",
  "key3": "2RfinneihNvrTmBV5VioEEeYmP4GJDmAdv2CmuosyGquuYhyMauDatq5oUBZ7LJSVahN2cx1deFjwfTQyyrFUmk",
  "key4": "BryiYgSmY2juUnY9uPLqnRk4USYcwkDvxqYayeXNqRbCHFP8DPNR7YpSYLyCGxhGH1KFNyL9ByXi532yFksioud",
  "key5": "4pS4MLKdeTwmnjBdXWPk4yduoTg1MmczSx1s6XzMyhhLcCussjQKzJeE1hWsEwnWbyFUXNCevePNU11tiBQMLPqQ",
  "key6": "2eAv3ghCuRJsHdumWRk6jeaD9odse7P1PTyYu8taC8d7uA2Eoem28J4yoK7zHH37yo1XHGdRH5CG1cHCCDxm1QoQ",
  "key7": "4sktZTowG3GGVRVGWCB9aG1akrAQFCqparZP3HWq8dd7T98DxuNjPL3eAmbgcM1xQDJjtrNqTMvX4vY6pGxHKoeH",
  "key8": "54iSyphtXpbVPsYuBbCZEpqKYFLL7bpPQVeJcpy7gxN8XrWcqcVR8xV81wmLpcUaXBzyuWnHhhs9mPRXCmPxzQZ6",
  "key9": "2bYSGkYwoDLYCW9UFBbJHsdj7V2Qnc4oDci1VnZEEc9qyRZSeuFRt13FD9vf8VRSCrsyoLXeCGQmKoFtV7bsVvHt",
  "key10": "2pNKh8kJCuHtb9aBbqnoRjZvnMmFKcMzviF2dMS8VndMmrQty7GcamgDE5J8bKuzRqukax4nAdwvqcD4N8sSDwyo",
  "key11": "3upHY6QXwvuCz7H9MVr19TWWGAkn6uBwy3K1jsH1LeTudkYazvRr7ojHx3m6Xd6zMNdbKu5Hu4F6u5rZ8B9ves98",
  "key12": "2FHka2mVt1N6xLvJaG2jwRi1ZiB64zCdM8rHFrnRgkpbNovxteNJTsbRFZ613RALjiij2bZVuBK31SaiX6KHJGsX",
  "key13": "2KApyB5xA3k4isSV1h6HdqkVdhsZ9yPnurQ8imXfr92Q7sLBA7pzFtXGQ4nRcti2wursx3xAkn4M2iHP4udnjrsP",
  "key14": "4pwfKfFqEHt3GpbqKjHejXCm9phuc9QSdVV5SsTizE9ZQjCUdMdUP2JB2gbaf3tD6J66av4dj4uSffSLHw2CsN9D",
  "key15": "3ZTGuzuRUyd5ydYmj9vbSn6WBuRQxDcZ9FZ5oS6emiQQvEcZRTUSpfS28SAz7bHKusEq7HH9BTY9MDm5vcqG3XcJ",
  "key16": "5Y5xQBhdQPYWjD2EEVdUpEdRyY5iSV2EruHEoJ6dXeFbGL7BsYGQJfKfaKkPbpYooYb2NjvthxWREy5kNjnQe3wc",
  "key17": "2hLfJaGYtjHGhrFZ2gpMEvperqHKDGtdamx8idrCnUh4PQrsp2m6qEn1Uhy21fBUaYgi51N7k8AR7UN6oZnAVQn5",
  "key18": "31BG4BZiQz3n1amq17ayjEuoVjSwCP1ZMRNBTsijfUqBZd6c1qjxPT7ccqAKihmgBvhqueWitgVC5DLUgRrt9t29",
  "key19": "41nwtSWxnTEuqqHBSjBJFb6rNvRYu8noeNfbdXNvyfYBsb4KmqpWd7mCLadPynWa8Dxky2fN9L8JWozYoNDmpRxa",
  "key20": "5ez9KuGbqKm3JrSSqLSp7CyfFRcoZVndfgmVnGiv6MrW3zZDGUS9GxUSJkLumrysifHJDGXYYvCyxCtYffGqs2H6",
  "key21": "4mQuPfBk4NrXGpuPUr8GbWavnkUzC1NBbREiAA9Wo6LfFxdoAA35eEGxjPiHpnnnzMDnWNXdSquHfn6FHFn5zw33",
  "key22": "dMG9xEZc8d5jakhWwKdmrqZXQN92rjpnPJd4qV3bYw6EznJMGSuzaXtPMYweEWTsnV3eZQbh8DCzwDSJeoZWTz9",
  "key23": "XLq9GLb3NZV3vMwN2LsDNtgvibNsdLncMH8n5g7meRbEah8dBvSk7Q6mLw4t6VLT92mhSwD2P7e2CcM5vPudTDq",
  "key24": "4yDswuX5Aj7SjhP99bSXwebH9Yy96NggNsMds4nDtM6ZJJrpf1sBkxb1zg8EWyERx9XvVCetwNS5FfU6FHYwRNtr",
  "key25": "33wh5UTs5Ledg43FjQBv6BUVBp5j4twisgtBU9NfqheWoxP7ufswzVBkvyMVj229VpGvXkUBksSq3xD7osZbNr9H",
  "key26": "2HA14Z1K6ZCGgvB9irvjt63VMeaJPWefQFgCCqhCeyBpVmLqgAwKgELhiufAah5aSoAyDfQNRHcbNy7n5kLXkAAT",
  "key27": "2EU8vwtnLeo6Zs5VN6AQzsBUmL8scmsQ9P2BQM7cfg4rNdKAH6PxLQ4gDSrLVk9pq8pTDiZoeosSRok189eGAKkk",
  "key28": "5grt99fDYYuQLwhNTw8VvPb5YzmynPojFxmom7Q265YUNYuTbXvPwTF933yU2fvKNgjUmejE9Qm44vyHgWQNrESD",
  "key29": "5HQwawVc5Xa9nbsGCj2m9mRvhjG9PfsrNRKq9viQz3FNj7WpDe2r7qgT22jBjM7s77xzUnxCh2y1YbvJ3v5oZaNG",
  "key30": "4KdHV8t4DC2YtJGZWgJzxUC6LiGX8tAr6pLvY9GpQYM2cUr5MJ9EFqpBDo9Q3sDvVBQQ7ioH6vfD6oYLJvRyvWms",
  "key31": "5iU5PgTh3WFEVcr4skA6FiZK8nrTGZX2LSLwj6WvHEbqQNoaGTv9c5b2FyTFAebccB63wACRnSYPHb8DtFe97TU1"
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
