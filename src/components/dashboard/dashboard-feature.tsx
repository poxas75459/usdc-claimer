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
    "3RgxT8aJ3tun9cvGLDDFpwG1YadkswdymVQsrfzRPMyBVa95kUFCPsf5GJBRSCENPytqdmFvrgKurWMj2ZCDPb3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GTF63b1vML9YTAebViQ33w5VBGn5Y7FdyJHVU8xRaGe4Acxnu94PBdwgiAvGV1mQD46Ht6ULhWv1e83cch6REW",
  "key1": "VgD6fnUKhkVMC7Vqq1bxDfC7W9nJZmnnzK47wDiqRjoDRCWtND7rkdWfafbK36corh8XzQ2ZjkycdTdx7tmE3i7",
  "key2": "XAh5gBhnZnyH5Ay3PvHTbVYNt8EgSxp4dsycQGBPmYPqB8tRxEknPJ5EUWUJdt5FLoK5mBpU9FNN8iw3r5hjhPv",
  "key3": "H12nJqtU3xc2Ydo6w8e7Vk4YfySmotZNvCVpUuaxiL8yPgEMw9LNXtRsZPVmQG32TbFu11aiKjxHL2bfaM5nXjR",
  "key4": "436aVTg1jLWT5ViJPtrBDYJCMW2oiax8J275TaCmP8B5CLdBsiaWwS5vdS2Doprd7b6iEaeU7MyJwa4CTvdn4VUR",
  "key5": "3UFR6D4FwiBWSo9CMn9BSs1Fn9StxyoGvQVqmMuF4e867FeVD4hfnQUSvRd82tehLZHCUYbfMtK4Vi7NYmj7DCov",
  "key6": "4STW5xfFAFHrQGAMBrYvfWynrGQULhcLy6reidw9dwyL6kNnRCZ2WcyV5QkZsXsJF7Mayyds2QYJQx4CzsMjyK7c",
  "key7": "3sRb2VMmiFSc75U8n7hidwqdDDBH93NkmGsFZJHpSED4JKo7hgKFNh5wnv5hjFq4wW3fuCsu4obQfpUBcEUUE3GX",
  "key8": "4Kym1ycPJGYNjw9YyxadkMYRnVbf6DL3S4hVrjiC9gzMw1BbtbHim6PJSa3z15r7m1WzU9KHvJYMBMYyT8CPw85M",
  "key9": "28A2r5gC2hQt2Pia5LaFdYETwY6mVhbFTQajzmewsNUts7YMwnnSzLmX239oqLb2mv1b3GMemRCZArcthq6Ngkei",
  "key10": "216JTcbDtSCfTV3gLXA9k7TiPBjXtjxicMXQNohjegdjQsYsfM5ddC2Kgo9ZpJNE4bTqvpYmGPgPYYZ5CuDUnUrk",
  "key11": "3Y1gY4PWTwNbinMaJsqmgzHGqNRqW88KjM8R5Do4sjiNHoxFT1Mr4uFzVqHZtovq9jnna4CY57ery3hzzLW7d9Hx",
  "key12": "2UAh91W9TcCZMUjTMQPh3BRr722ETtNJjUfkFpB8L8aWYx2T3DBgD8cUnQ17iHNbjn8f9KKtMAhGAd5NNFstdo6G",
  "key13": "4b3WCza3sotfpadw6DgNAzJfTtoni8DTUg3eDYGBWfxMArsuZ2huCrBxEdnEKGJrvRFfVD5zR9fyLDHTumS4GswK",
  "key14": "3Caum6HK4DKVg8fcyLWWfpg4XXqDJh9yftivu8BfpiKajAAwp9XcHNNWSugNeRvnZYbHviGH3QEzZ4B4Xqu7HHTx",
  "key15": "4YZabguJ3vdJk1kWvcWhpUkPDU3epTMjnZNtKdtefhuAXi7u6ijf2xDzRkB9xpu9C4GBfdP2C7hDekHqeLMQZew6",
  "key16": "4PLgNfzY5crEw7RtGiXGvAzKCew9KtqFC3vjG3Fy3ETBcmkcUYQutp1yyx7iRpVcgKWQ7P34N5fRzrkuEgRNEuCC",
  "key17": "25XENFbZsRgu79omJYvyQPFVjpHaMHMDSjXeb3kbks8pMV2M1a5w2GtH5o2WRLEVmadbJUAssuDNNGzbkoBFfgKe",
  "key18": "581ijcuM6RcMxcjYhHuz1VSytG7JEUTgBVyLRriGKjXMo8Xj9mfaHn8x7G9EbU7gRmiMEEJjVv8RWmGnjWEj2XG6",
  "key19": "9NSTrZsKF5mAEp24zjrFgfWRve9KzuvPJkmhq8yBBgQNUdCFtSo9yY4L1rnFLhnT3iDKVVTnsR4zqaCmmxvujj8",
  "key20": "EaPrBF7Bt1JUL9aY3kNp8Lr4mVS7M67d5pL7CjUvq5X5DDT1REJbdoz8wgA2RmMUAVv6YyrmSTmq1PYuwDcSHSF",
  "key21": "2v8hkMx9UWzRbU16eX1TLPpdFGUxoSmrwfbqw7Mts7ReCurUyge4hC1MFjjRAsLLy7zuKdLLv1xdSRLSprCFwYQw",
  "key22": "3C8P8KLNif4h39tD8Fn8pd3SHoCEsXdzWedXAzgrWGqqajM7JfGQ1YgHYfPejdB3FXZqRMv2EZewW9NSL8cYXFvp",
  "key23": "5xRVZS4cvdLdZVuqeJkZwNqur81dBxuvoHmzWAbymurg18kABycnhzE8RqqX32ykWzhHgj3TXKr3vnPUX5ket5tY",
  "key24": "3Ss325fF6La7K4JcMVuNAxW3cU1pc7JAKd3SLwew1jihbU7N1sKP6944q2ZbJGvmVj37vi9hWYTDAwqAvfUBja4G",
  "key25": "dQPr3fy6JmSkHYvC1acxwNXr9UHwjb1aFLiie2kSqbRBmSuHtKhcUBK7KW7jBLPPhFUBUGkaSRo53QDm2xXy4pT",
  "key26": "5qQ5rBrJ6FAAGhyRySkyqHZQ1FSpxGHjWBJCLaRfuj5xL7zgPSuq7P7nagmGZzE8B1XvbqNaWNrRvCW9tY28AJFn",
  "key27": "39HFqyHmSFP9bSUGeYeYksnosxzReGBzWY95Hfi4pVuY8WYD4ZWtnRP6WHBmAyez1H5AZPS8xQGwbi3cSEsWLQLD",
  "key28": "32QziUWVTDZ7WMgunGeXJKWSqAWGjHSAKr1qmjfDkXuwUQ4gHsfBnTwWWCYVwzRFvnAMrfbDN91jcNNvJzWKoKUv",
  "key29": "3X1SRr7CBD7T6T8R9Yny1hNg87zXsvjmF2Bt5WswdQ1wq9t2zTe979rwrXYPTxKb1wjXjb2g782mGw9GCLrC7yVJ",
  "key30": "3CgsoLqJgYQTGdSUrvtG2z9VVDCqkZyNLJHp7xyjJLvCAH6vwvvg2VrGpSe3kjHWwuh44qG6vVciWq3iD8gVVKzS",
  "key31": "5bEyBnM8hBerUfk9tqdGc3B8BTvFeeTPBwXrJnxyBUCSosAupfRyDkQs2FRZDKzZuGcDqBSiDAw3T8H8454brGby",
  "key32": "iMr3t2qWK35gdJcEHpiuCQqnPwTgaTBXGx5r4bZbhb6Zyv3WHqXr76fZ7HNM3y2pXSUMbQNt59y1Q7j4Jkoo2tp",
  "key33": "2Qosn751BxmRKKdJHnuWtGEEsvyybha9pdHpXasGTsrBq6zHan7h7hVJQeaCfc7ZYfaRXQQCAp7ZYt4iPE5zn6F1",
  "key34": "3r2bn2mBDMeXJNERH59LkKeGkBZSj1p4ypDwHxVqgJ4DieZoMxafmnMmk1wGKiqahPksugyEEg6tKNBkfHjWWA7z",
  "key35": "383Ygrv4eQPd4C4VdFRfCQku6LkA3FNMmJDB7gbAQ2qtMpsG99PrGV2FKHch4ihwRYPYWYAKDPZRyyzC1dtDmKVM",
  "key36": "4skrFNYgfe1Y3Y9yVVx7fkDQvSr1gS49KjjyZtxbv2jsNKZLTgw2TpUhh6arhyGhU4cvWt9HDWH5PCTCu1wMYQdi",
  "key37": "5iKqy85fW1zJQsPdRuVzQcmzx6U4sRZjTaEejgJufB1y4iZcX9PaZ8vSuRb9uTvJ9AB5eyH8ePg41ix8TfM5XjZJ",
  "key38": "3ad7EuXbMFQhRLPwnsVr3faFb5WGvuFvU8nHANmbyLqQwcFsdcPD6ekhpRHQpLjjJrq9JJjWdCRrcBUG1cyQNC1Y",
  "key39": "4SvGWRQLRL71vv2T1c8n4mNQt59KwD5QqdwrKfvqkXFitDt1coo7oe5TpbSvGxGKyTgv9zn1CMYaEjce2wKEYmws",
  "key40": "3EnaD1zXFjPDoWf6V1EsAVsr8zVRbJkAwrHC2jdfc6Fcego648ncbXXfG1417onvCRuKzrSuPJdERg3LeqdRdonf"
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
