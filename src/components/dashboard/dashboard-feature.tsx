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
    "r5ZzaGJ63zqePcSoraPxhVp62MrAVWYAcDtEzGhNfWnc6qvByoZVJhdDFAqYQKcR1ZAU2i14ZxkUaXWHmWQe9eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbLZ46kZ2XBvfM8GMkmJHtPoUaCaS7oGgQRzMAdhpqq94wMjY5YQDnQQuVYWtAa8CH9akcF4uCtfWqHDKYc7Vjr",
  "key1": "DhqDYpgPd67JE4ZbNYFptmKrtmyMd6A3P782iE7ruxWLk4MpkcM3uzgKGfvar52nLZp6Wux5fPidR6YNNyAaUSa",
  "key2": "3yB4TnNNQqxLoSVWSFbtyB939BNek8QzKtGFfvB4eQWCYzPmpGKtAGrwnpFoZR3JqVJU75YgDcEvaXVYHEVrQVVr",
  "key3": "2K8ZbAkcpYuuA41xrkNDNZKJyTBCVwgmwbMQSMoJDArWEQ8LhooKfpZT9riMuaX7Gbemf5rwGjpCz6Hp8T3icavH",
  "key4": "2R7pqaQBHGwkfPQFS5S4p4yAZSoufCSaKh2gR2p6CLzTFhMKMFHg9k4JdwkLzkuNrKT59RcAGi9R5aoaJm2zFNPx",
  "key5": "3hMHQEcCLJv49ZH1wQERQF4b2CuKCajJNwFToN2gNBrQ7HSZpkmTW2tQqRbqiuew9bL6BGZrqi1yZ4u6eAfKaq12",
  "key6": "2wLzHiCL5RcDZ6aVUY9orTtVJrDT1DFhHPEvbivmxScSjnfH2ye3XCmnRbGW4p9YAbnpJLBnqrnVnSVn9jxsoEZh",
  "key7": "4cnK2pNCMhJYj6WygjVMN1k226wAReA3nXR8wD6ctd2ew29zj1ssgRDwtnVStaURpjeyUsrCCf5cgY9Vhvp7pmbi",
  "key8": "wpihwDN6QuBEkqXNhbfKp51VHhZP5MvzNpci8U6enW3Z9jqDzguKhuWSz5FkD7hvuUkhSvdCMZwVuLoCKKCpcLi",
  "key9": "2wc5d3fdrSw5vdXkZAAsYdGAQYX9V86Y61Lu3JS32JmDaENVZcVauHQy1yadK1H5QvGG79ptCeGVySw5baP14ebR",
  "key10": "tuPGVfqtUQryaXEMm29JPhtevXZKasgWHYvgzfNs9EaBwTtFzbuhBVs8DBsqZcR8mKW2vTY4hzfykcmWAEbJHjZ",
  "key11": "4L9zx3N2cxocvxDba7NTaSerUzR1aKExUC9p7fgNbgCa8fWNVtz5LEmKVBqRixF8Ci97DEWZoPYqeqZEGEpn8WqB",
  "key12": "TW1Mbkpp6STS9VSYjXYR2WVkrUWmE8nWV2xose6cZNykZXaMLSGDqdk7dcR3LW8o9zK5VAFLHkNGtPLpdN2PFQq",
  "key13": "NPVyaeJLGe2XXvYDKRD2NRrG41ayRkSgZfHqD46FKb5T8JNXafFERbpJoimhEyQDovSPPFfSRTNTFDf7A9pkLQE",
  "key14": "62pRJ4ks1V8ZGv2Zg42Hk7cU5atD9BNntWRvWr7Top8PUZg3Q82M6SbuW2PoWVGkeehKY2CghuRkTDCNKfVVXack",
  "key15": "5cMVyQWc1xTrL7jmYXLPNf5kUy9jDvswyU3yx9zf23bGkb4RCT1DvigUJqUGdJVWDFhHDiofmybR3p1HL35sa2g4",
  "key16": "3V2EjGURvHKx3pKc6STYu7LoWdZMpkdpvQhzCNV3EkZ79HtumUgwK81DyLMtsDDXTH99Yej9XK8XdzBBpw8VXjSP",
  "key17": "4tnnRaDFH6NXJAaNy34Ab2bQ54nnoerUPD9AUkFjBidhcf4Bas6H4eowrrBTjuu8FMzmASH1LMHRkkKKx9Gyi8Xg",
  "key18": "vud8wPYW5iKpMW9NUf94pKoRWncvGgCTcP61aETrrrpGp7eBgdbXR3iRMWBmRByfx653nmj3zySG5z822KoDtGJ",
  "key19": "526a2poxb6EQXCGdxLg7ZwHbpWqx4NC9kkmC1cTs6h5Zfg54jRkwjN7FccUyQc3uJNhQWqVJMJ8uJnMSVrVFoWUD",
  "key20": "5B7rK59FgGj2ZrYtpAk7qtA3rL1DFDbE19ejU9gZ8Yy9huY4bKG5SRmABQ5w8KBEw1iyA1sSkeAuccDVa9BK8Ufe",
  "key21": "5Tt8Bv8dbthMrHSrFr3gyqyBSYEXXkhDWCJAvWxPtcait5uecHGbFLA6KFW16BfSxGBMi7Fc5wZ5AQ35GRmiAUxH",
  "key22": "2zoQMmmQmVr2QAAzKUHpND7rGnqMpjYmVKZXgWqSAddMvsxdxXXWJG4BtKK3T2iW4cgyjd8ccB7TDX19nLp9S4Mn",
  "key23": "VgnsdMBpdmiJHnqp7mErJJyj1xQoeqL5asrD9sB35YfvrwNBGXTA2QtQRWo3MVvc977XhCjBWApRGtsyYemKz1z",
  "key24": "37aRjvGuqL3HDjcCFSqWRz1RA8vwW7V65K7nvKFbP1aFJH2az3yBxzvgK13e71DeHuFur8WXjVeUudXzxxMwupxg",
  "key25": "5eQ9HKiQcQw7wGhVdeTPN8XgzF13VJeDX7q3AWkQrpFrZKuwdEE69Bgi5UyTrKuSdGdPYwo1nNyuaquHBxoTFF5Z"
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
