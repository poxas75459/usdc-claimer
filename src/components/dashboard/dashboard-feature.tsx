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
    "PZp9tzNCYNhboM9Wx2XTL7YG3YQtUeX7ss59MBHrFdGhWwCsxiTz3HnpWz2KV8jdphQU2W1JfsBtazgqHqq6sYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31PCKBggdip8TJx7Qqwan82bUDySRU6JnvbmbZx4BGg1B551yZ4QQbnuoe56yAANRJheridYZi2YhNu3VQFpE3hT",
  "key1": "3QZDWdPrRTvSf7yRXYwy1sXstJkTdh7KsjdA7C9XpZ3kRTactw3At1sC9uJfdnZMnoWSjZkRgFq4ZomgaCmfbjy6",
  "key2": "3bs3qAZcuXdNzE5pcQn3y92YnCioqqYttHwNW5tZuRoHseWBjzatzDGTSq1S2cvTgrTFAh2QYXSQaKZjWhpATsRr",
  "key3": "4qJm4qiCpFZts5Mh3t6pTQL6YF7CsVz1aDknvvffA2EsGu2WRku7eynFEqKsaLAg85YUXopLV1Z4YoXUResbYggH",
  "key4": "3LLbdJd4F7UTDPNV7PVJ5UWFnit4hSBdpNdpCTTtDccfgChghsvMTqTw1hXeMdYMGX6gfqp9rqRYSttFvZss1z4",
  "key5": "4yLs3zzUgMxEWgdD84ii2N4QmxoKr2EVtPErJFLtMe1MAnGx9V8Rg7wq5tASVe6Z7PRme8eyYWG9eY6Xrh9Lo8ff",
  "key6": "2gqJhCw1EcTHbAGguVCLmJ5a9XdXxqGtZZ7E94tKbWzvHaBjd1xUonyBeq53rtaS7Jzp2w7Ge4zaeeymaWKd7LZf",
  "key7": "2omNVgWasNVUxcHtJtY5ZPjVkVUUMCho85vs5hapTen1TaKjfMKqgHSJ1HoLx3jFBuyb9m3FKk66Jov4dYFiRjRG",
  "key8": "483QAatYgoehxZmkdFDYZJbeqiQnXPBrcZ8i7ZqTTNAzCo1cLDtYeNcS9zgfAjL954zoiNLpoG5fqHdsLCw8HNsV",
  "key9": "2DNSijR7C7ZekT6kCUemYD75rx2Zx9K1B877nySKZHaH489yRBiAftfzUFeTYNBGhvYCmba8NSfCv2zadBrkoHnN",
  "key10": "5iQeFhg1ApimnDtXns27VRaiDCF5mznfMbY5rQehdUKhbYhjX2wqCnEuuGodnWGauPHPqs5z69GAeohLrYB1B4ng",
  "key11": "4TMJYLL2nBdy1cVLXenvzbFT1pAwqq8KKkmJ1zUMaJxj4K2iPPCJWAQtc1Q2iSui2jMxCugmYHpRVuCVfrzbvZbs",
  "key12": "md6Gk4AahkKZSADC6y2q5ddJdUtKHhN1fXbT6CqqVXjxG9jf65txt9CgiPkWSKfzXjAMab3um9EkH6WMgjNTK4a",
  "key13": "2nVgqLcmzAd5eQQC2vqumisHk3sAaF15MTbknfmqyXiD4LmRyfWLJ5bRWx652S9wruzaJBMa3zo7XR2rdFq6CMdf",
  "key14": "46TdEDmo4igU3rFpVJqYDvCGFvaJv88HZmVVJEHnN5kwGkf4ThZ6APr3tZ3EdNxcwgwDLSCN3FqhEqaniLrfurHY",
  "key15": "3bedcnVYqByMZtRMvbSn4jAZN75z4eu2wFGe2UgJuuXCpsW8S9EV59rrcyriAQ1sgKDWfz5hSaFrunNEAsZWFVpX",
  "key16": "2w65nr4wL1ghzp8H7dgD2qnmc8FiX1ycKChvbZ9RtXZJdnKHCJMr6iiWtqR2zYD31jUDUpNVVvrRG8GvyY8DeNi9",
  "key17": "MeQrT1gYuivReioAmxsCdSMH5BaC1LUk8U2FXojhD3ggPVvcFXsZZ1kZBQjLsXuiswzsi3W5uNEik6oCbmPw7hf",
  "key18": "24BWGc95rqjZ4XPfVUpHfTbRT6b7v6F1yxvZy4KXD4p9FxiVmBBKWe2jbacLZWQPFBHNmTc83efKR2bbbeTVLt85",
  "key19": "5PpjugdhdMYrsKhTkA5A3ykQJu37U7osv2p75TEziyryBQtt1cyVFL4ivoYMLX92hSc3b8xUi4gppPpmNwzGhTxi",
  "key20": "qwoYvw6frodvPDeaKwNMe6yTqK3aMC4CKuZXFQ8cqXQJ6gdszBSBbeaSi2RwePMhnA51Fd5QiQ3t7CsQmHDnpCe",
  "key21": "281ChMAKzFdUFFLhzFHteFMKZpn2sA5hwbJmUbrGRjmnkBZQhoihcaJtNAyKFKEz9X8GnbWSkA1ivqdLVPTs15wF",
  "key22": "2j8Vd1WgrYBQrBzgfobiyLBpBhScBiY8BxGZuyVzwJHyyYr8dCmKBBNQL3dqxZfpuojCVscjL5sUGce21RmNw8z7",
  "key23": "4cmGwRuJBuyEMdfkHidyQERArrGNUn99ZMWurC6S3imeJGRJuX4rPaCjaLHWJHGTR144e5d246NwuqqLarFBMVWV",
  "key24": "3qnWMunyaMNtpfq6GFDYUAkVMswmpac7XnENevPZw8bdJgP979Toe7z14kV7uA9N3Ccfhby1J4bxPzptUDVUxaoE",
  "key25": "5MRXm33jLaQBHRLw9XUWsyAaXuE3o1fxee6EHZMNKE8QH5exv4N3n5AcL9yvb51WTAidZq51w7TW72ZN5gAMSfX5",
  "key26": "5uo97L8k8bUjHtJH1L2nXWbWHm3GD5DDCbDib9weUtSrnCxW45hW6uNdbSNXxGFbTaQUXDao5JFSqj6ZCmawmXC",
  "key27": "4Fry3x57jnjQ8W7mKJukaPW3oe99vTWQX2DYvzcwTLCUe2ai8MRjgte4qhgNokUdU6pP9C2JP1VFLJXu6Wmu1vv1",
  "key28": "58MHBmx1V6tUiKBVwdck5kpc7Ff4awCP3EShMimbaHrNHY6L9VATF68wb1PjLaGRjZaUtBgfhaoL7o5pGXqzckhq",
  "key29": "4rxcwNnwhvaRM432b4MZR1Xwm6UscZA1Y5HcZ32XFqJ2bE7N4Xcu6cpNi8v6VSq4JUa6Bb3y7GUyGvPFZbYHhHDj",
  "key30": "53Gvu4yXqPcHSagiv3AY6RWUKUjhXVnnURBYvyMbgTMW9hPHhx29wZJQSpW1N3DW2ABLpPPBuf3dAe8TorrSDQVH",
  "key31": "3DCNX1NQiwdYojiJ5Q2LbwexxqKTHnSAdqBXr4BAM58Bshabn74fRwF8tsuPGBFwybZmpiscGr1uuCA43fG4S3vF",
  "key32": "5NW3kK1MiZEHRroLkJVGxEPzXKT1fdWxH9xgb4Bkf3Q43h88wGEExHyXVXbmkuBHqVHQeVKhkwuG4Hd8cLgY7DKx",
  "key33": "3LgnaaRb6SDxgHLW8ZWjmv7M9TG596jJ3UgfjA9uuhY5mxR1Nd33BPMVuxnn1ke5cR9g9QrEoQWyB8BC8edHS74X"
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
