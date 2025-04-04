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
    "2P7uVmVJEUZSNR5gLYDpgaW9vDm5nuQbDQ4TRx5vSN41vtKSkQTzjoQB8KVNmtcZPd8SmAxikuZWyvP5i79TTkmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewNgE3HdZsnRSrEmbtc2xqS7y2Z7vctNNqqd6BBmeKkVmJM3sTEferD4nEDZXoYmoruVRoWNwXGVQrxNqcDJi5H",
  "key1": "2tYesRjrny2NseMDYqBGs2qd6LHaUkuZrag72FuzipWR8ZdPkJ47vw3MjuWFU66SxaK2Xhdp57yySk5EpD7MFq4E",
  "key2": "3RfyCwwNwmd9J1tgCfkWabGkxewFy4Xr28fNohmts4zijYnNJmUYY4tEUWGvNThZQfhmqBTeRnYVZWZJo67wd8vR",
  "key3": "2WQ1thRfJkrhNHiL1DkpacgwFcC4QDSsM9yUXbuxPFAPbRhnLjXvC59yT29Rx7fYxo4c8orhQgXKTG4WAjRBk5RQ",
  "key4": "2FQo1f9dZxbZ97CiLRaQKDaAdtxSG8VtyswVUKN1YiwHrWWoVriC6fgeWKmuBV5FuGXCVEGuWW2tgfn59ym45z9e",
  "key5": "48vQcKSPeCdtP2xT8YxHJK3XWUksSpR6CfjDV4B2er7STv8KVVAQyLwz3knpHzaiZvoEJ4Vjy6Tcbp5CvEzGN2aq",
  "key6": "LNuUDbNcRTQSap5LnrfeQLaeSGfZCfPt1eZweM2EGtz8nWYh4FMNJ1npqb2924iAgvuRGPrRREcmBtAvMCKuZv4",
  "key7": "ARxMFCyLugXZ4QBkCx1zVrTpXKuzN6p2uxtzUJpSfFLjJS7YKxaXd5vELoWs9RVuzJ4h3MVNTADZokc3BLppZGY",
  "key8": "4rPyF3G6o6msZWsuTKynfM1JUMBKtbnqZD5ZdBrHs3z4WPYBUnnt5GH87qHz49QBcp1RzTu6hAGYjdWpL5GRGJDS",
  "key9": "5cWXg146YeTt54ht98xLLDRtAKwKfcmFrus8QNisuuZVVuXfRmSVqacHogwrP33Hy1Yiu32mpgWg9R6pZdnMYvh4",
  "key10": "bvBi49XYELTQ5d2QHzKCTNpTAKTTvL36j8uAbNk8BsmbYz4KF11gikAchCqM7J5tVDYApPiaLqL7ZmRycAQdfkj",
  "key11": "3yYwEKXzyKrcD3d8fcTbEx4fpwU4cK2gUBuwjwuyWmZYSuQ2jgNqGNnNQf5kNx5w67vytnwUvTwwXuBGhWbHSFKq",
  "key12": "5nTSH6k9s67dWkt9u7Gbj4bgNxp4Zf5rTMTG1itjde3mbzGbKYQL96GzVdAExq4NA9iGiYuuNcohcKir7raojQoW",
  "key13": "67TjiFsMXbxoxJ7cPX4VYvgjfZBHm58v8pJ3xWBFn7Q5XxXSwvWQR2CULWS2nN7BAR8f5efSTkHd8iXT5RD9KA4g",
  "key14": "26ANPD8A61gu6HqrBK7VzNUKZXXhmUnmKxWMNaZ6oYGvb2T3y17NLX2T545pgveowcTPocVV5toP5sFiW8xeas7v",
  "key15": "2Sv2Ko7DVzHGCsm1ABwpKe3Dao1qBMPwxjnAP3mmvEyPFXKNSoPLAvwA6osSjbunWHDkRgAnpmRAYpBZg8Jxus2A",
  "key16": "4JfzUXFpSrw2BbaQsDMfu7CsycKXEtYA2L1JnU8cq4yBfYoaZQAVpLjk9ZBg4gWhpmmSjrM1W439AQaNScYtWL34",
  "key17": "5xZp9yWysRhJGxTvNeYxZudRMN8AKtWbPwRiyBLSYw8Ejk83C8J7EVgQqUddhtE9Zn7VsuGg45HJKRsoL2SW6n3g",
  "key18": "2WCf8bhPsa2qtPfcy6FvT7SNkFRQCxKyotigir2kkq2Q78zzY9gxQM6mfydafCXrUW6xjpPUq6qRFBFg5UpbzaYc",
  "key19": "nQnd8CFhHqR7PZMDohpipvnQZHtg7EuFG29zzjQgvQnsuePFUW9HaESsfGiTj3eGDixQqo7g1GXbSFgEHeGs8tU",
  "key20": "35jWng9BcAfWXZeKWgissXZp1pPEVf3ct8md33xAu6F6D7KHH3ZbU4VtCfUgJ54m5QTXW676wByocpW51TVdTokz",
  "key21": "5mR8Y4J6KtQao5i4BEW2SaAzWvG6cFQ5wzFoUwHqxTFUJfReQcwvfRpAG3Z2wRg8ob3juWj2PErrsUoYxjcDo4Cd",
  "key22": "8GSLYTekUJCYqpGaRHzjkYQpDE7XWCULFvQe1vqN1jjZXHFLH8H6NJRK5XNK4QY6uAqzAsihKstS92ZjpXwbdrZ",
  "key23": "uwthBVrQ3qZT5QSU8jWs6ADaqRaV15fGiYswqcYTQxWWSisWuLtjPUoz7WpTsSzdMTJuK4xFHPpodHZSD9rX4ug",
  "key24": "5Q36CRPVMRHY9a7FYe4uEu3aK6WnoswG4KxwsdkeRP9X5ZHq2jZ6iphFo5jNYaca85MCJQGqe1STWJFU7cVEuLRW",
  "key25": "5CQzRWMGm14MNW5VUbnf1Zs5BTk8uaXQrPMjm2vnEQ7zeuzbGn9GKGSTdn1MZJW6YhzGVCww92gz6XtgW42izYXV",
  "key26": "6728BTEr7ieLhnKkUZoHNVxTR8TUMMnyaLkDWAvieLeZs3pZETbYL5cbrwG6zwGpPYketRVZuBXXrcPpiFm8T4qj",
  "key27": "3j59HcsWBMiyNGuk2ZWWdF9LSe2XYRyauDdQK3x2eKh6ke541wLXf4xRjJcKntxswyv1y4h9U9bQE6gLuqh3AXCh",
  "key28": "ALUn1WxECKyQgiQHf1NP9mj1QuGKBfPpeBvzUByVAaGNWSio1T93cXRF9vavU5HC73Sg5xqxtJUxMRZTRxCjyfU",
  "key29": "5wsh7bMc1ovgHegQi3sm3JCTjCMR6zzXYF89QWCMxxU7X65qpxRRV7C3SkKLTtRTXvec8qELMDhK7TtojQaUR686"
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
