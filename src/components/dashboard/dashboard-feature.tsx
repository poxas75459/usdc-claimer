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
    "4FMYB2hJXR7oAnsSuy7UUar5omyxNPp9TK8JUEEJumSSqQb2ATtPitCAiAS5neXHEjonAH9TgQFYDfBGUdHZuCNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urjgwUYbbPm9G2rGcFY8MfzF48ShvSDdp4QLXrAN3anmwZVi5PqLKdbo9YBrPC2EzsiobB94dSNPtELRMLriRYR",
  "key1": "5MHRVyoGwVxcnwoqrCMBqK8Lucy2z8sHawjbNsDqKpaH9GLkNPKrS5Pj4fV58oDZPzksnrwtWnWmsUH329GdqEHZ",
  "key2": "zj9rfcWhC7jKjjV1cuQKUvwEoR4qFQhhnVT7enXhMZhVugJjEajPEeUxSwjwLcEpSkALj5Z7HmHV3Gqzq35TmdR",
  "key3": "43Ve2vHA1hvyR4DbdkrhwD2Le5jhMt1k6og2LoftBQMRJ7L7iwNWj7Bc4uQpMGP4RfGptseY2nTggsgdfepXJo4d",
  "key4": "66b3EvP1eA8pJ8V4RDxJqdeK2X3tNMoAfc46hFQNoKRbsZtsEmNrWLYX5KqApC62nPjFdCnYWsoBZnudbhaVsRTN",
  "key5": "5uUWU9kXt5nQBHTgk4orR3R72dpf16WW9ayqvkNqWu4k356idHWTqSyBJHWpnS8h6QWuNt4tr6yx5cPJyaHHsWH6",
  "key6": "4hfnBsmoTo4CNXM4Kw2vi5Go9vwqsYkSHgaMPt3yFDRifvocxE1wyVLTN2xD7NVYVFGp5SDihFKcbNGASy7h3ucw",
  "key7": "2ibySWohF9zFsDFwLPLd7vbnZW3v4BdcorD7vp3F75QvrapBKSs5cA79mWnVhfUg5dd4ftwQ2ePRFZL2ae8BAtLn",
  "key8": "5TN5zdGvoZfHsyMRC7fknE5Ys6psTrc6HZktkNUFAeR5jaMBcFKfpTuhMf41gioKEsYZFgboADcNoGWTVhYsyJ6E",
  "key9": "2Xo6yNhR5ovAFEXFi51xC9p9PiSJZMtbiSHjJUfLeis5hqkLCvgV9CSvhiAM7eCNNncmeohZbqv5idGZiZr51kRE",
  "key10": "3QntoXbREdnBCgtiyQpsCx31JTWLhUHmz1qZw4s8HqtSRV9ZZ2xh7U2zHxge4GGGn6nXgjMmyouTMMymT1ktXwEU",
  "key11": "5o7VW4NJrwhFuuYbQiQydx7BYje5452mVscmCYKh9xQPCWwGpWxUZe2Mk941JWYqMyszjTDziZiEk5c8ZGgzS9UR",
  "key12": "2ezeiTxexpoTLudUphLF7M3UyR1uxWiuVUUgw4ETkyHgFFUynBdkpKrYL7s5QSfg4JCBXPRSMH1KyZGEs3WNTPWe",
  "key13": "2YCx4UW9AvGSAVSA93YfDRV8jUTHbbK5fEEc7cK5HVbTKF81RZNznR5ptiXBmPR1kL59gM2tJtycx1AFNmgWJdZg",
  "key14": "45wEYGCapjcFxUFk1r6ueg8w1bHksdjmqtmyFpXK8b8kSfZFzXuF8aJPq69FoAcDNynJF8ZrNCrrfx5KeLWMqYz",
  "key15": "3oVr32MVw3tPfh6PZhsvNmkFjaK9DJ9BG6rnWU4Vv4fUKWdcpWEckQnaxvU48pTVyKFbnkewMGqkvfYgRrqYPn8f",
  "key16": "4GmPrJFyUDMBfYaR6EN6f24t7LYj3SDc2CJwT7gZ7nhr9BuAxRwuKvqUMwnFsDe699ViqMu8t9MQTHArNYDYKTe",
  "key17": "27xE5XPUBPvrFxWc5NLv47er5c8nrXWzNuicWDbnu1QYkszefvPBMZK7ZVxmRN37uogetumRJRQZHQPW1VKEh92a",
  "key18": "5TEKcTTasYy5x84hAVVWhBKGkocZFGDYmjGu6SmLNbAEDsxKzspGU31fr6WxyyiZT2yiyPxpHvWkwLfjbhTCKJnk",
  "key19": "59W4siozZAWUihHhpciCBiM1w9naqWE61sBUtDcF5AmGh9oahxXMUNumnv9W25i7St1aq5woQns3vs4939uTTWNW",
  "key20": "5u4gBEMgNgUAnwQifvZg5byn4xnvarvdWdUMXjSuNVHHFGXgvJKFrpcDS8iRRtLBokmMsQ1JMfvQSMum9KEVZ78f",
  "key21": "2g4DBpVtpBHZcoaA2hCkrRVsu214Li4fr5UhhRYgznXGds5rycwReesjVwwvtUNTUDbqzZXsCnGh7vaiCRxZCSnv",
  "key22": "48S1kriVuu2svRMiPnWd4BkcNPz7LevAtZ9Ykvjf2gSKRqb5qEeJ1eJ5BAnz76TRAsNwAgwRd5ZUSGyZfUij6dV1",
  "key23": "54PX5qRWh1Vu6NQiKmy6BBZ9dbMu4WF5VN7W8H2njtJ7wPnWPUmUzDxgite5dyMy8jk5862CQXkhRG548jd1eZ8Q",
  "key24": "5PHjTCii4SUZSw8dE7J2nT5RgqTPSbyuhU7rWH95KDHsifrSztKtivGF6km4dKfX6mCFr7Wuevgj5VPoNdfErjxj",
  "key25": "2VoDtJooaagP6mVDgAarskENb8jpWB8XNC4fXLo6H9QQWk1bgsz7WSerVBgGk2cvbj7w6r2vdA7xZeajZyUpy9PF",
  "key26": "5qscnkmECXssFCLSPAL2Sfw7TdJgcVfSnNoaYp5Q7hW18cieFhB2UCKHRfRNi9Y4WKjyLG1vSVySu3wJbZvktgkQ"
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
