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
    "5utqVrE4WLXmvycvoXvjLaZBoci7UU5WVJRQoLbhDuntQwkfS8nTBUhBYPdCZ6gW6pvKemT8fvHFGdJhBfrRc9HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54tYvq2SnEhr8KPJ8Em3FsVx3mXt7MBuToWuxt2u6Crz3mEQyu2fHZMnKPFbagYDdYeLYKeQaGyVjQvWtWbMkpk9",
  "key1": "oNb3vEdgsqYsFkAm5vHAy8sFcnKKDbTReeVNEr823Y3Vn7HmZpC4SDM416PfUvrFc59PjhdZmc7x3WDfzFkCEtg",
  "key2": "3JLmD24UEyYTyQ95bSdTFHUtsq7LUp6dEeuAKArcxizbFBLhJQo7nuVL92kWyU98gCEw3hFVVvx3wL7zRqdCRtJy",
  "key3": "KDozmHNA7BWjAZFz6TB78vxt9rNikkmRNLwwxUkUudG2M4fje6h56shSBFUNJbgreaFADVu98qKBzcUS2NJS2A8",
  "key4": "LEDKUGXVvHF1tYmmxFwicrBDJyQfbziKsV5VDdZxqaEqXQJgSotsjjFSxMdVh6KMqXJbepvexHriyjwNE5ULAW2",
  "key5": "5ZN1P7krj1BApdR6jNieZzgxpfrSNMAAoovPggnPhXAaohojW9iywf4ieXb4jerpnfCpYUbeaEdHTW4KHRwWkztp",
  "key6": "5TjWyAeRbaxa1xp5JYq1uK8DMfB63HrPNTgWUWCHZw9aJpMnET5X5mtdpWr1jMHqjKoGnmoQsFzZC8Q3b3WjAdH9",
  "key7": "3xicbzVWDnzDRRu4QucQru4Yr5W21poGvSHBHStVN2QJ7XEJRdoBZNCToYMj9kZxEAX4Ge9py23eBWw5UBdAoE8U",
  "key8": "dSx7V6rux61U8JmygkBSf3fzsxYaF7oe9FNPWMiCv7CF42Myh7BY43kDkkH6RGXm9Ndz9Yr64wDVYwFtYyEKgAu",
  "key9": "Uae3qh2xKFizkeh6PfMYCKjmL2HTLcQCJe6Q83ZFx6XNJGjfHvrxDtYHRCNnVdmM1bUvYG5CcWKQMUA4VDAq3kt",
  "key10": "66nudbpkwdaPLEJQMmAymMj9zvcM5ZNsq8mDVc5jvSDLJBTvZw4TaynrrnE5XnBaH6KbMMkLtgb8VeiukfkpNTdX",
  "key11": "44NeFZ55HfmDrh8uwXAL6aqvjnVXaiVsy8nZcmdJPtMr6fsoTdjUX5jcvXbmLK2zGbRdvfVDeUgWaZLYPdC1uUgG",
  "key12": "Dhz37DToDXyqjtUxqUM3fuWyWQarD8EJp5WUHohuN1F2Y5JkdSxFxvFiDXsxzN83Usg2gS3pnpccoW2Kkkgprtr",
  "key13": "zSq6BhvrYghSEzXYgAJTbeiuPL1byD1hVg4sz3k254r3TMSRDrbCCAPJCrzp5S4gUh58QeStYuY3sm75p1fFTce",
  "key14": "4bqutV4PYzd3BoWnah4uXAeVz1PGYjjWoNQZdqEd2D6HE7brwGG3Wqytzx3QyHxytgweqDjUz4Mmyg4Awoftx3tu",
  "key15": "2dCnFNgx5vsgue6KGaKmsnnYZRJEG6qMtrw2DXvCzLwFGRvtGhspY9YYAQtLjFo6TB8oB239gUYqp9SVhkbUUdZH",
  "key16": "36VKcGyEZte289DRS8tSKbSDCoa7Yn3YK1XBjLQvXav46ScD92eNx1nYp4meJvt2QQYvcJRSmxPXRu9nQnYnRSQ1",
  "key17": "3ZQmubPruZrV7tkPiwPN97mJb7dQBTUX8jVR2VVjq3oKtNUHj2dWXzm4KHhsfwNLLcvHM2RsrLVkGhtDcdgzUUoo",
  "key18": "5bwG9DmsBkk69U64nigE5exviAuStJaKzrKyt2ixhzShhvf4oTLHg1UxncPRArWD9aqYWqMiqVCcGn12AfJaq4Ah",
  "key19": "2MS1anTxhDqydLocJUkxmfPD32sJ89CupcwCseiagQt4xYQMG83WnsBBFiR2ms9tLhnJvzaj31qN3NWYCnXK5w7Q",
  "key20": "5Hs2t7hkdXna8DjsqoP6z1on19guJusSuaVy8N5Uws7j3KKQr1AF5oJQCNNYHnGZvNE3JHAKmPiZZd2Sk9nVbELn",
  "key21": "RJ8givnDLxFS9hu95ac83Bnj2aLpEdpMUdVNctbVksQyp8t1JpwDTpDGSmNNiwm7D2ij61GXjXAzWuvhuFg41NS",
  "key22": "4xbMY3PBBVeKbSGkVMAH4xiSoQ1zJUt51qdLE4sb5RgbxoDNdzpQ9GpKUsixdJQbw5GVreqvbK79Q6AZL8EVi9Zs",
  "key23": "3GYKX5Frymsv6UZZ9NWhJXaAr7qEW2AiMj5DjeEtcUc8d8DRSDMRMAdq5SJdzjXor7x7oDNVsNxzCcoppP6bWchi",
  "key24": "5gomQsqqGN7HUVEZU7fhLDUJZn6PDuoL1BFHb4gHdb4NYfPbrKCqoBvjBLJsBDVho6WnKmCkg9XzCRvv1dryN9Ad",
  "key25": "3i2wcU81qRWxxv8CNiBFFM7J1NGLUEiutxuvQm9jXXh4EAL5vkiKR35p5nz9rgxuG5rJYTGy9sb5VshoE1JnRXHr",
  "key26": "37j3rwWYDCbg7sPgHFStdApw76fKbNQ8uw261S6tYnfvANMGa6q9Tp889pYpjQRsxLMWDVzN1PGjcJQBpaZGctjt",
  "key27": "5nXnoVav3LRMcC1KNBMdfS6djNXju6X4o1hJN7zpYBQXdQJC3iTetwnhEzJxpEGhcjhA79UKtDyEBmUvf2xC5WCw",
  "key28": "52x5qYr423zE1Cj4MZhgmgzTNYChihbdzaCMEvtE8YcezoV8oYGBoVst2T3F4ndimgvEgp3DNmarcmEULNxHJswp",
  "key29": "oVnqa5dYkvL16U9PGCbXehq5boFLnYUsBCyeFF588tBJzWwnXJD4bS42YTbsNoFm7nqGMVgcfmJgdFjhRVZNZeL",
  "key30": "qxUf4QhU4sVezRaN9Ch6AZeSPfRxSX16Nu5YEV6ZmR1Tf75d8oVbzVzcHSPfVzzwiJd8UoYVFutvhGXe12KGSwR",
  "key31": "5FiqriSvwX9QKVW1bjvUmQCdds4rMLS4uCSd1LK6vGDBXL4fDpS9LKv16UNAdgt2deVsxL8Jfe2BiEAPNANuN5Zr",
  "key32": "4uGLpteAzzQoTvDAxfzcBh71wageKUwp4sTwRXqGXJK2ZQpxhPMaVgeMw3xbyWer5QMxxEEvUpwXG6LWUKYvktfF"
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
