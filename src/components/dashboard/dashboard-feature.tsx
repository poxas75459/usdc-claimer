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
    "2uxdzkPhyPNkMWbZGWV4DNRnPoSUdVp9UQcJjQ687tkoa3XCDEiVJEWDKPVfjYHLVNvHjAUhHYthSiPK1bYAfyWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rd6sjSjYnQW1up7oGGi5BERY7nVuLNUMowaBLTbvTqphC9qQRcnA79NAuAjY6iagNwz8MwkZmS6JXmKroUVqBuJ",
  "key1": "438SKrC9jQCBdyjHxwYrGSi8iAME2tM31uUKPu2LL81jbytxEPJurb8JUZ5JaKe4VQWSu1ZAFEcWGALZeung22r6",
  "key2": "4j62km8qhcb1tDUHQP2iGZ2ahmegDKGvFLaUjGi3siSqTxzRkjHnZNFsi5gJV9KKW4afHsJ5rvLhDtnPKEXvUWeP",
  "key3": "4ywHYe6ZEsmrxMBVnmp6wEeu5o4QGyohn1Wx9ar7nhvoj61Aw33cue92SqPu9XwyaoQffdC4v4CMkCEfszus1Jvy",
  "key4": "4oK45kxCbKbhr4rKabQPvyDWsQLZCMqS6vmwiodTAXZ4SjKwb121gosCgJCrST1HSNfoJrskmvH8yqzwoXrVaC2e",
  "key5": "3XvvFxUiuvf6uX12dAhKeeFiD8yixwQof2apKnckYuv17Hb6yNsWxZhSjtZDjandUns8wqU4VccGMDNX7WRERkW8",
  "key6": "5RJmuZfAZBp5cpQLEpxsaTLQw9iqopXETamXE3VNuz6eRLwKEHn17Yme1rbLY8TAdEQzNDLPv7rARdwSos1f3Zf3",
  "key7": "4vHURueuNozvnYk7gj5Wg1WFrR7WUxWh1xRFsQy7Bc3ix9uWcL7vWrbPqTdLfUSGDSip3QhFcBFXJNQixbEU5cDJ",
  "key8": "4mHzwaSPNpWwC9jt6jwFqUQcHvaGqCun6e5ifFaD7DtPY9zBWY6jrrHi3c6BfGXvq4YjWSWboLvpBmurfGXvd5dW",
  "key9": "5EqmnmwKLHx1pagBrFf1d3wApv1hGaq3WuVTMoZVM6sXkfD95KU6AFPuAy7Pq2YQ4ZyCsjEnQuMWSQMexQxKsHZb",
  "key10": "3D1oLUkZn4Pi4iMSQF8FnNaPfjnPmdFZRUbHTnRC59EqfcYp5UjdN6XJdPkunuA8Pv9RfxGR5P1DpdEBYuqviZhm",
  "key11": "p9HLFXSC9NwdN7Q8BWWW82vKp4Higba5asEo25CHUHjYFMKxd1du82fyiauMMmGc62JKE6Fz5tNzeygzhbrjbxw",
  "key12": "2WPKv5Z53u2Myh6wt7MWyKTeVxjuwU9EFRZycHGem5WzJ8k4pZN4dSrDeAYPdjY3YVUbDtz3ZqDvUHd4TqpTU6es",
  "key13": "4pR4G9RiQ9G2y2dNLNFftTLyY7TdwZ4avkiA1Bg1AAF8tFRBdc4zwUi9FUPHCAUJZ8QctrURVdeWapHefqJSHSoV",
  "key14": "sknYdUfUiJRgYFiuYTNtrwkfX7XBC6W6KJotUWxUhiCLWqdde2pZ3RR76pz4CEhDHD8gP77PKcYKtEMcEMnzQ7a",
  "key15": "51bHZpui97vpRWKLgPLnWHDPceTKLk65zwAf8rL9pBsBzQSZPfZuvctxTfnaHJdPggGeMWRVDTotz517DsA4ToEB",
  "key16": "2z9PwCxN6P9yfhQCraubDEjdrUq4BhZAUhzxfA9EiDLhnwUTJDhatk7bsYmJtuXeaHNzx7CRhN2vSbcY5wWDVrt9",
  "key17": "2iGeWBpE9hEoVMDk1a1CT3JdnetjgJDBst7tmZwxdfnxS4BMncxm9W7E2cSLsZdrboKsH6tZUbn91bhZA3eBqwkg",
  "key18": "28wyZAvbSWgD3BrxdQ5JgCjrJWRz817yKbrD8KwRvRHzYKwPvUoYDJMi8N7tYKa35vSnJGuvLLqMGqHziTj1jAYL",
  "key19": "4q4P4hvnrGuZc4HEUfBLGgAKbnqcPoHPy3aw2iswkDxeCU5MYhBmbPyXe5JgQ9ERYJbCWjhSGyB8tFmecD8vJHwJ",
  "key20": "4pd4seUYpuQK9yFbCBbuUEoN9Xj5AmVzrTDj9qxY4X579VkjDu6b4n6e4PC2CgebCGHf5u6idXs2f5WS8tifJUnJ",
  "key21": "8qZx41BMiJuMJ4pVgjCE5oirER3riWm4XNuump4F4rtT98yzoT2AfGCMzYe9sDuB5K16vTUrjPCEuRnvArpjwKt",
  "key22": "8b3z9YBSzMRgb5r59CQg9SBGqJrNrUw4x8zP3RvF9XGKpBXrgXhxCQhpCEvnzsNzUPLrPRVyqmXVJKFj3eHJAJL",
  "key23": "2v1dkkEYntoXM1R1ktEM44ejcpUyq2yhUWvetEDDuQLzmwMzejYke17rvd2FCwnFAJ8yPq5gbmDEAE6KMEGHbuAR",
  "key24": "5q5XgMrQc78Ya5Ed2zynGANxs9bv6fzYBpKyq46eRYaHGTbPhEFEf6Qo8Yq57kVCMzX62tr7YAMGwqnz13mNAkNt",
  "key25": "MszxGe7G6noFHcpVertDq8jyUBYghKHUWwQfCyraAWsuhaoHyLp29fu3UySZtkArBezQoucSnHnGqv3CLZ1oEV2",
  "key26": "3X7VaDSFg9pFVtFFHhNv3VQ754M7k28PeGEw2Fnth3TTG8zsvVScMGFdg2zNcbBbvgx5nrcepKVXpt4V8ZNPciXd",
  "key27": "35Pu3rpzYzKSkYbBiwkcic79ESzVQurqRfkWRxjbf3TfKNsyxAGQC5p1SUBjgL161zc7FFTLZxP2jfquJMGXGP1U",
  "key28": "41f4Y1RyvtVr4CbmrKMKmM827v2KYx6eSLL3b8wkZMmF7V7Vea8cB3dvKFhYmpgvwho9xmqq6FgRRy3GCFYk1oJu",
  "key29": "3oCMhYSy5z5vBHhBHBuSasEUiu1rMbhJaHAXd1uw9YrMpC4F5UNqgVoGYTFVFuZAh1PyFR8ZPd8kAKwh4YYSojSA",
  "key30": "2VD4ofVHYYj8kAFbHxsSsJmscQPo3BMk73kJTtHz4KoUZFDF8kkaZdmA9ujNiBa4phbuTwKRfsMbimPSbEU9murw",
  "key31": "5r2zCmkJfTX3boZaTnHRTL3P5NmAwV3UQtqgG55NXKUDABYyuUiVaLa4ER9ghRGNn36FjVBna3RDBJYr9CMDYcpK",
  "key32": "42RCcmGcvApZndkZgfQhAog49Z7SBdUW8GGV2Qi5SqZyFwWKZayL2VSAm9vV7TaG3d2qNJCiMNzQLY7SyZGpPY5j",
  "key33": "3fsVkQACsxfFexG9qXYPNTSwZtXbvuYXzKWTAuYE7gbA7uN2Ucpf9v58Xxe6CiCxTUnBCvLmpdUf8ibqfhjzSE9e",
  "key34": "3e72kJzpGdSoPM7CwnfgCexWcmWcmsQ2VHpQjR8hkWeZHLS93QLj89Xe8J8A84yQusVjwKTdFrUhss1Y2krTJPd4",
  "key35": "2VMdpQS3jbPedGLrTuPvMSJkuBmE7UBRc7xkYRTyNeEWBW8n8hPNS11dT1KHfH6JEWcegw9uBpRFuRSyCnCNkcwe",
  "key36": "5e849WPmsJBJgBRox9kxREueTXYazpfZgrKj66TxfQGgtmXTSdct71EyBcDW6vDCQNDekyrxSp3MSATPDkJAGVNJ",
  "key37": "2vY3NbbX1YDFfZWbg1BZh8BF6RXSh1dS8DVieb11i6SxF2o7ySTTvLQzGDwXu2mBJcbR9wdhNYveJh8TvpjNaYco",
  "key38": "4Shc5FrTZwf3F3a6qp3QLKRHTxEzNdQ9eser38oxE1DGQuRgqdMvqhq8T3pvjBhPgDjhLPjnqHXJ6BAJntuxZFpP",
  "key39": "4nzmdSpj6Ni9q7s3KamBAPHCNHyWVndRj9R5pRkR9mc13cFpuPzD2evYqNsh6P4WCAJzxQ5vtTFroVsCiojmqJnF",
  "key40": "4CHmxo7oe5UCJaM8oid4F1who1ZsFdPWpxp3FQsCUEW18SK6q8kVwTtFBzW69NDSqNP7FxDQLtLdxXRFFE17y4Jt"
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
