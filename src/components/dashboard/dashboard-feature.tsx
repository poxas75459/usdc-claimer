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
    "61TQcn9E5kntXtfWjrNcVjTH6vkehLXJk5qAkTj8L5ixxYZNP3dfQYgY7PKCwsGFPo9KQi6ZR9gNRKFBfCvDECqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m66TbViDvcNFL9v8ux9TxK4Cif3zJpR5nUca3kDrH7KaNvaJy7q4VcMixjzkh6zNoP9PBviJGskZNWLrNw2ewZn",
  "key1": "4b7BuuAm3ceiQVsPYS8UinJPHAdCRWG4oULgByS3gxqWTvPMeTVdXaBFLzRZpRYrAvj2ipMMsMaFcF7qjPsSF4zS",
  "key2": "2pNYExBXbZaDSpfL7MpbeadxaEKk11nn4YNyeoiYE6cE1XYuweQZzKyxXjT7WHUy9HtBceqHFcL2YySE7Zs1wTmy",
  "key3": "3e11HkUqyPPqT2YeEHiWpSVt7PELKY8g9oqKTuMazDxDHJ2dFX2oBQgKQf1WGcv547QoAHtMxYQJGhpDRwUxokuv",
  "key4": "4Shq2QJsiBnwW9Fi99GNFcaYyFLdtRRFf9ctrbTxKgh3WfbUqE3aW3dNmLA9iptZoYahZVa6utt4cjHRbryfnnNe",
  "key5": "4vkMqdyvo5RWBzHTBk297tm4yv4EGe7gN59QivDhhMuXjGDAZSARDJdYy9KRTRmsZAepe81QJag2Fta43HyewbGU",
  "key6": "4Vq15eerdi49JBovLxbp5StvqCCAxYAqddQYdHtNQuroGU9vhxpMMCLnjT5XUviSxQTWBjjhFfQJLvxyg9TCynTZ",
  "key7": "4HeQPhjiUa7ZjjVBmw79bognEacjBwUhkrVMUcMNkeE1QZzGKKMdVVCDvgDMBepX3smy5WxgmedJ346FiTZTbyzd",
  "key8": "2CMkSG8TfyKBKFoq496e6mgusL6ATE6i1Gp4WDikSk4rVcZkDNkJWJen8nxTv8G8Jfjc7CQQ4Evox7gSaRN1t8vv",
  "key9": "29uwYSvaZWNx73aWNwsBq9ZttzXtH1vSgmbnthyzor9hh5KPBuZAe4VSEFZyEsTisLgc2jqyqcyvXaDNx2Zhn48b",
  "key10": "3X9B9dd72A3CRCRyncfsW4autjENoruQANc85wTktiLm9rce6ed8uVEjbmDjQzZJ4fxpdrNPmwin8VvqidrMavGP",
  "key11": "62ffvWy47EQx92oQeakLw4U1PeqsWK9w86Zbmq3hbfzWG9ACzwGqarPhBPsr25TkQw69fvf5PP3gJn3cBNyqFSZR",
  "key12": "4bMUJHaa5S75n8RW3dkgmR2udfp8dLy6hLCowLAPYwodndicpWhShhQbqB6Rpij4pE7u3x5uVcgNinhfKHSCgBkG",
  "key13": "2DrKjV3WCcfiB48E4TVXjWQ36cxaHgY1yGURJi3e4u3PrnB8R5c4gu3v3KD2jNUVKABMs1WrpLfa8jea2WKsJ2yF",
  "key14": "3rcdPPywNs2Z18TASDFD7BDf258UDyLFiF23xYRj9YCWg8AaKPQyViKmqcygA5GHpamxwRTe8nYSKqDZQBsFdEiz",
  "key15": "uLqQgzUFXFdKitrdQ6wx2gyDaZRA9Qs7wTUd677BMZgyNbaBoTgCyFdim2Q8fmQDAs8UCcePmTGgChLoMprAK8c",
  "key16": "5Nrz4EdhhnTqXW3RZHt8YZQyxXWDdfH24Tt7bVYAB7eSsQcA8NTxZJxWDk5HK7BBgq5gqKGyU7Q8X2LtQWMxwvQ3",
  "key17": "3n3P6ouPYZzkZTi41dVvY3yjSLHnGYGRmpDaoAunBZ2NK5cwh2LT1JYwZxHYSqRAuEgYW5qeaE3fi4NTvixwct4E",
  "key18": "4PpaxC5dq44hyzQfRwkR7rWoDkogUZ8g5fRYmP8pNbd1JrfwTzSeGd9p9N5NRaDtrVQgvnNhb81nnKJuLHJWh3np",
  "key19": "2JEaYskawsAytnRnkvdQ5Wj4a6YWHLqnQiyAbZtsgqqxh5VNmKWUeYnhWdz3w2ZdZWGXRBkwjLqvhNEuoDrLc4ys",
  "key20": "4NVqAk7pPh4nw6yWU5E7fNsFFZGoAqyt8MJKUniFDEPHTGHjVKSMUasnyY6K7txEGSJ2cLVt5nSKTcUwg7MbvmV5",
  "key21": "9TaqazYWRX12ULFDKmbtDscYgQdk9YZtfbmrKTnbrSpaFzhyycZYqHeQRxKxq6McHeaUWxcAsQFAgVEh3YpfgjU",
  "key22": "5Lm5MgMBcicYnoeC9tJ7grz1LwGiSju25pxcTDKjV1s9KMFYzBGaEKqgH7xSYWyKT4eYYXkExahVESbjxTB3rAJP",
  "key23": "3rm3R5bcnSeLRYKXTtUFEGVKmPojo7JxAS78CwzKPvaBxa38maX8Ha9F4xVPt6oCSYUXm98epXMKofvXUCyXKJS8",
  "key24": "5jSCNqdKvW9gK9viRYQ8d4cRtMnQpaHxrvoKdWn8wfb4NkNWxjiPXiwdCjLWMNn9Rr2u7LmNhMLMsjcNqxb5eeki",
  "key25": "QCkjgP5e9rGhpyRJ4C7GUMukEyeMSfGCJdzVWWUSf3G3m3ymNpsLxaSrDTHLLsNBsRTXPWXfphcntV2i7hfDwaX",
  "key26": "48uY8yENoUG3WQSjutqRypW8Tx7Ts7LfxjG6wMB5mx5LUeUbRsLn79q81qSRYr5NsvknUvJuPCcDSJs8BJZzRwP1",
  "key27": "2gukEpFg73JiszvFYyAQnGb5Uq2cVCGj61wV9ivGrq6EaJPPhNBaejaaGLNJY4mtH1oUJuBtK3xroR3oZF4e4MTK",
  "key28": "8fHmnaizyCyT6ETNQagzN3sdhdbmQJdr46cLaKjNhbWeydot7db16gzJNHccd5TymcpqbkicCR8icQGqW6ZBKor",
  "key29": "38Kqbjzs97AqWHR8fBQUSF2W4s3FpUhnxN3Wgn7Ye4iadr3LjThJLE7eKsv6hsKsTafYdPWEdDXeiYexcxirCEqP",
  "key30": "4TFZ7jBxt9CtNTizQqiXKXGUnufNXwUTUkPgYBM7JayPmnowKzvt8i27La8xsjfsnD8P46wgAn6281G66sQSTJmk",
  "key31": "JsxzdBotSXY1v3gYUQ29u8JmUvHjFAGfBFWRsHDCaunTrwVt3L5AQvSTdNCApmM3bSFFagg3fDS5u3SZ7w82cSn",
  "key32": "nNSnv1tCSU3gwTGdWc3xq5cjMpSCzES24HhhimRLr6FzYE7Quz6NrsR62ddyn3RMkECUSAZpJRbkFiFQeVTXi4t",
  "key33": "wmRZEAXLB1K2uBk5c264n3rueDovZRzRHc72ebyFNW8rFZCaA1jmX8ppCqrJXAgtGJCgaxfXi1oiWprnAJJPN37",
  "key34": "2dBpqu3TZJEN2qw9WmBJ2RBSvJza4kfBJMo3APVGFxcpoGGMEwrxjDGBC57DhDg2PaDA5C3WkBaYHDVP9a7ohdHG",
  "key35": "2qsVLyAcL3b6gKgMY8BPHKwGkVXyRNQPPzy5tQeizVHpSshfZ4qhruXWz8xWD9Q7ZTxibE7Cy6kFTTsE3hKpyRkD"
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
