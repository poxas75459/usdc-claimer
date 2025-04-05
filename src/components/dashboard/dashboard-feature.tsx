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
    "3WjVkBnrdjB1jUvnqscexao6nByvGpMo7A5Am2vB8ioSyKKn8PrFcXftuQRxvQyu45gJAKFNxnNkLhk2zVLzyxJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uh5UinEXHqHBne68RFT515YSR7vZxK1cGjQ3Twgkft1KZgkgficutDxESthU3AP6UW6KAjyqjTWcYCpNFqLFjuk",
  "key1": "3Tu2PgU13HVWB8Zu3CsY6htY3tUs1Udf99KodNqXuc3LXH1anSXPHmGPiAySSDLxjNzg8Ua2mUN4wmEizBKXeAvJ",
  "key2": "48r56BYnM5Mwhg59371xkAFm3qHXhFNFDwmxqRfHQt9joTYjGTMfYegzZR5F2WA4J76Ggw7cULCE626sX1CfR1ts",
  "key3": "QkFYcQfFVgQU7VyjdEAZFBP2vrSZak8472Q1aHKMVb6HxQypQeZtSRFR6XqkQDETJousFcXivjWAS8ou6k637rz",
  "key4": "4tkHym4zeJDFJbUMTYwRsBrDZNXEJzasPrqRZCc5JdH3zoifqXJ94PjJmAnscvmcoyQoUNa86BBSu8ja94ZvwShm",
  "key5": "4uYjBTuDtA4APE57Jb2Yw1huPQAi41KfyPTjW1NVkoyNHwfMdfhxY6ktqQpxYJgfK1ixvug6uyVnySZMm2DAgcpV",
  "key6": "sCGjvXRiPLogEPRpWx1ax4PL26ZegctszxSwLQDz4FK5PH1CQPQ3xc4DRnAz5B3WDvdJqK2DzVjQJCtHhjwKsnT",
  "key7": "3msvLDRRpervgK8FedZ2KC3adTy5AuyYg5c7GBLHJYvE3inKc9N2FBisxi2kpL9ZhgX72iBdHZmeHZSNCvge21r4",
  "key8": "4wsr8Tz4yu2w5RQ9KzrEa2dMeta2iQyKKBfMthfTB21dWtVha8ho8zfx3LtKLfevv1NSnRVcAnuyBBqRgFMyXUN8",
  "key9": "65pRiewxd8Q5rH5SNWASnYj7FyWyKhyi2inXU8F6zubJ9pRQfnS4nWQ958eEMrJDM8vqiD9NBnvKYPxqPpcmUBPw",
  "key10": "2n8Ws7y8QxVjSY6XGEgzfqWJKH1Ba1dsSusUXSCPZQ7Xa1h23X1LujS7x48pndAo6iACdEa59Twp8Lr2qHYA2ojQ",
  "key11": "3NXUSqv2DGy1dbSUohwzNxk4DkHDrXpc31YWnTqkVu9kMdpcM9eihghprhoYBGNW7UgtkEdQ4poPf5YETEsjYwCN",
  "key12": "2L5qgAjGxnoat3PorGtNcomfcMHHA2EuUZVjX6QkNNfpG7E4G8FDYoTYVQTNE5LEqcLxeju2s3313ezCzgfFNJ2B",
  "key13": "4T96dEWrxx7qFRhntWCMSEFP6QtKGckq7vUxi2eLGxddGpJHmYiDCRW6vnErZE3e24dxPKQ16o24q3t1q47oQbnB",
  "key14": "5XtPaZkWfWoBSqnnQjRbM746dmah6vfpx884i5BFwn46GHiFmFC5tu4r9SprUswkLHNgBKjkCvopqe5bkA65ZFYb",
  "key15": "2uvhJVmbX1Ccf1QR4AqACAZSG4wy7pYbtVMxqaXS7twdMDgMCSdwwq99NVR91tW4ZMsc9Xo7fYX9YDV8fUNwgJVB",
  "key16": "4Lax9Y3e7fo5439BhfaFQNqYyrhU4Br66zMCzUVMWXf288WPCToPiqsMjowWQxGoqrbtVi3paXCMGBLiw4LhFJkz",
  "key17": "5retUvg5ynxGu3s5nAcJAh7WgyfcGoxNu1m95Cj2agHbJ5mg4vkY6Mje3sksZyhNJhawB1ZZzg9GbEgYxUggAWSG",
  "key18": "2rx8uqws38iyTGq5kacZoxZeHvQw8DNRahVpJsYfXh7BAScYpTEMj9PvnRwugQFGJd9Lj7upQ8GdjmZhNdfuzLe6",
  "key19": "4jyyRJQoxcZNmTAWQh8YA8KhfRcerp1T3NbRvs2imUsSXzzqBQgU8jxGsP4NepYQDqhsXk9iPSnh6v8WK7ZXC76B",
  "key20": "54i9qKssSjMBD4cQHuBm6vyecbwe2LiKb4k7CMueSWjLxeHdJBG5BEWmDu6zJM34DWx7AGsaex4XD7JXNjCazSKC",
  "key21": "2rFinvTKVXvzE38oDA2kQWwdYpuCRNCf6WoqrdGaSg3J73jL357fy9tco9DvCw7wgBmB3qrvqDeU3yXgYvZmLaqP",
  "key22": "2nSSSAAg7ZJMUMxmmNoNcM2hnEEFsQh7RWJGj1QhBhoZShZrsmJKeG6D3HKs3VH3ixi3D9fTU5j4gJpNgvLTYYwp",
  "key23": "5GQJQwirgwf2Uo1PXbrcGcs2v38DJCmGBEwTTyugeX6iU7UxpkNC2SYDajxv7v9ZKAYUZ92Rq7Ew7LjBCxPZBQa6",
  "key24": "2q2SiRcDbmPXyGjn7JFxTyZiP6k5MgGmArhFiDo6Y7fMXSVQJuBTnGfRG9zJveh89V3uksE2hs8LiSnPCTLVFdKr",
  "key25": "2MZ9fRhzJPPsGtSpa7amQoEcW4AGtHCa27LyGynvDohUoYrDCRNS56T2Z483bzi2a4wsCG1hXpUMgJvHQBdNYeUB",
  "key26": "KwKkGf361oF3pF7mCcVYLm4ss6TsiAcy6cdHswcPrVbLCGsfNkpbPbBnLSnedCCbBFgvCd37sKoEZp9WPWPvPQo"
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
