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
    "4LAFpkuQXipEMFtR9fXCHt4MbtB6T5f9P7Sz7Go7qNQLaBJJxBXL4jBWrDh3jfEkM3qHhs9N19uzy8V4Zq8iukpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uELJxWjaB1cBJp7AmT7XVUBYphVmmzabGD4xQj4ivij92vhDRNRgVvK8figJeW5uu9qMPurVdZvDFA9D4mxkFZE",
  "key1": "TmPpKCGvSwPo4EMTPwxLYjPXusvEe8MpuWsvK72BzW3NJ33msUvBNp8n7p4yaRZN6XWhvFBBTT2E8RFgn4MAnGb",
  "key2": "3MTbaH5F7oqyazvb7Kn3aGpgQDQvVrNngfAkTNsxHYt8G6ji518Da79tf7be1ipnfq1zb8VdQYQcQDGM73zhrHyW",
  "key3": "5hahPfZNYgPpVFJZhki2mMbi3TrqWE9KtJ9dUU29XBbCyDKKgMnaYYxVoqshBMVuMrN4PBzXoHsjVpMnG8v9zwfZ",
  "key4": "surGMQez8BJRB1cjjUaRfCYDKurj8QM5P656EPYmDsQz1LJ1V6ATMeK9zmnWCWU3H1csLaqfvtFV2d4NR7jAEDk",
  "key5": "2fsM9oK5u413PdJfjDwxtfQHxwczwwXDRRq6AEGTqB93qiVVgJhhmicdW67KCPbMxbet5BFLfZavQygQnQ2jWoLh",
  "key6": "bM2PMHXQwJ1MwbhAnuEMVvPWiPsJJMW1C54PsZ4GDTvP8matL16hh5HTmfS1RRdpf5P63xWdFxz4qfUjwn7Y7M2",
  "key7": "q9K6C7htNJf6N6QCqWspWiyRrNKtqhJ5sZtn9XrnfG88AzjK1XN1cCQbSCR5ft94KwUn5Lcif2xinsCUtWVC8Sb",
  "key8": "2zQ31fi7LNUiyT8SthS2MSHW7TaVaYC186JrLoEztJ4cMAmZbUMDFMjL51wz6zgqHVqVktJBKhe87Ht5PevX9Ep1",
  "key9": "4pxB3hJGA3QGfJMYjXUFq1yPsxbjPyKhF5LeawG8Httt2YWXn913FNZiGjgBSrUMguAbDP1FCDSXCFVu2932BBVL",
  "key10": "4VSXxBTC69wFQ9yT2kVMcChsCBfFLRYa7M3fRWoccMQQLemjhnp7E1gRb6UJURJnoo2fGjiJ26SRLuk3zCoKxvTU",
  "key11": "5MpbemycMtv2T1J3ygdzEaw1Q4rwiK1t2YmximtQJsXz7hYnWH1FMfUCMvZnLtdYK7Dja5azmVJ282Rt8i78BriX",
  "key12": "44EJeU1YBrWtjjN6wi8VCcyBhFTzsiEY2qz1nuxC4iPLT8WR46fA9xxb8LX9QKh8qQ5DRTFY2pt2UN5FkTEECoy8",
  "key13": "2HR57ZrDzKRWtPEYcnbpwx6pgsPFR31cNksw5nDyU96gj3RJF2wLAz1ZVFzWhjVwfNQGtpQXWv9BTC2BBUAoMG86",
  "key14": "2yUm2JAz4fsLL2FXDBq8cqPuwAzcXvLyLrCuG2TKMwBYpkf8f6SxybNDX2tH1f1FSu6BqNjinqQx6mqZ6vnkXfPp",
  "key15": "7sCvwtH4YUqyi7LRDf1F5QeQw5LFpL5CKG9BmKjYKf4f1GnvDfzSZLN26UK6DBSRHCDUb5X9P4BE2oe4v2LTNi9",
  "key16": "45o4XGMQQ9jQpt5R673wM7tYY7J2PecsKXp7yPz5YLWqwSPjvXySrDopt6jn2j2JBFJeDBwe4tnhXwpVnHs3KinB",
  "key17": "5PDijjDCTvVdBcgpu2Yfi3XdPEBubSPC3jZ8zKqzea9YdKfz12gnzjSAXHUoB4F8Q1a2bAPmBQPMNAedV5UHp9th",
  "key18": "2Bn2fptHGDitE3AgK9TNRKFwUuLTLE3waM2Y4jCQXNG4FSU4n2HraKBrwBA1L7iod5TqnFQnGSHz1TsqorvqENWf",
  "key19": "643dzTYdzjyhf64AGpVVePnWWDiJUBrkQKTExgXwSHRi64dWPAY1diSgvAF9U26JBhxSpn3WUX7nHaHZcJ74AQ2q",
  "key20": "32FJuyYJUX6ynEiPtyCAaGTULnsWDbKMMvXkukDwwJKWMtLXYv7kqLREKSsqS4eBFP1fpA9N2WLK8Emn1o7BNpXv",
  "key21": "47Abf1bQrgFamqntmUPZoiJmWbTLRz9mgsn6JKdWdcszgJXYFdDQzwqQpjzUSVCmCTkN3ehSw8g9Szn2MduJ6Zwm",
  "key22": "N3WZqco4h7hnFPxHSABHcTJP48d96vaqKoosysWtdcCwwPSKHMFBXit4dcHY8rFbHCpaMzK8CTYUz8dfdYPyRz3",
  "key23": "5NFrQJcGubLFRSnw2aELeENTSVKhPRxL7Ac2YJhqgvWZ8pRPaG9DBC8cz2UKLbuozeUNfmiPXfbF5oED4gePG1iF",
  "key24": "3bjxE5DEUgHmCJttfFtGEYmmTzeJhC1VKdFGyqDsXmeVK15pcK4EdPNyHw8XhtkJafJtRbpHUpGAQonhSg8u5z3q"
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
