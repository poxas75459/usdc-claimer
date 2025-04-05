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
    "4gSbbLbUdumJZ3zmtKWLenSrST6PrnXRv8LkyRFXqruinsVsZbextSoUx1QbWAJukNeJeVrpFSxQcRwa96hJsBa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WokNmbVCdu1VX7fPpVeDe8dPC9UnvehhWJj9wTWNsXXqcXjW3JjTFYe3PfK9ySwU1kWHPFF6ePRgH3V7coRL4yw",
  "key1": "2QWmF6zrDgfitu4Yq1tw1DrYEbE31nMrpXEgqvmFNRT1jA9HRJ5Eq2qNdkTijR2oqss1SzD5etG9K24HNARdj7WB",
  "key2": "g33QLng2vguZHrsctHipMjE3S6f7LskVrE7GPDe39NKF9TjDshudRWU5P1k9zdCWtHakPUoFLZcwAahLyJsQaTg",
  "key3": "4HP1o1bCcpMN5GXVNjKcZK18tzNdpuAwaSnpXtEoSdNvwrZ4ojqjL9xot14tjYKA6inV1ovRRYRKv8rQ76YfhH3f",
  "key4": "4yUkcJRqQYU64cUebZ8uj8aWaKU6kCxCVntNJsfoMUG1Z1MjHajM143LKniVex7mEGzsMZmKiiDSZzXNKwPLeazR",
  "key5": "2KktNGC9c3nZhyrdTMNfqDib5JjmE2XLiMTsLJs9t62Wpr7Gwxohhv56FP49TuB19EauZ26btFuRTtMbfowa2DHa",
  "key6": "2kX3M9SrDhRjUUzfKgwb4v3oPACjyNR3ynjoGrTLURLT2d7J2j8fbUtnU5KvT8KCeq1bS9PYUfG6mKdWsR7BCdX4",
  "key7": "5eZi8zVi2fHGWoBEntTDLtDFSz8rPXShyaraTSiXQJxYaNtzEjCCDBncg4xg9ENhrF5YoqCbvFt6cSfUtzJjWN4N",
  "key8": "4NA8B1hMGXVAP7CEXApXpfrnH4W3wLNRuSg7qQb88hFaeA6dY9d76X4Zvf2gBLdmsjrSMhoNiwbHp2vorjs1gnr7",
  "key9": "3vxZVoLTPYqHjREJdC8KHCFNh3HZYTkZCpunonS5Koa6EEqiWDcJ88moNQvwtgUEFbqDqEoU3YX3hZCKZAj5rMZ7",
  "key10": "pLnv53p2Szmg3Zm6j9DKQtzbxVQgLHujxQ39aAT26scVwkvqgL7N6x52JmR7h4mGLMcwsrXXpDGNmBK3ErDRFBB",
  "key11": "3EMKtvWv3K4bUPi17UD7PD6nNL3S5Pd4mBuTGbNzso7rZKc4Qjtf4fkafdqsHUVdaGCPVf8aYYD778nVsB6EQnwD",
  "key12": "p5W3v9pPmQHiE4sv7pzVhhc6e4sCxaVeFXZLknWqM8xotkYyPPjANf8jqqJVgAeZWZJ7WmdKve3hz638h9drfbd",
  "key13": "3rJgH3FzvidzFuJEsfnSZE16HMFxTSbzxeSGjYYwMrc4osRtoyfq2hB6oTG8PQQhEHaDGyCfJNt84EvmvK85VrPH",
  "key14": "21YE3hYicrTjR3NN4MVcZgRUW7JY1pgmmCNjEd5cEwHUL6wqkBt7YWbqPihzpJv8DJdKKVdsnChyeWgG1vfqnopJ",
  "key15": "3HZ11ug4TjSE58jtTvfHYtbrhNJsp6Qyt4HdWPSe8wA7jyJqMsg7Bx7NAQZagvYZwriSoM6iHmZXRJRWtbHjYomJ",
  "key16": "8XRB86JaHjJWj7CRNnESXhnZrR3zpm5A4Qfq3P4ua4QeSUFsJM1MJVuLWBQwwmGsSWANxB8rj6hK4kM5iQScvcj",
  "key17": "3q6njnqQmYKv1DtvPzRKdeCCgyS9jDNB6MQGnXMWooAwmdmdTiTGtewP9NtpsvAEdVcSwREubXKooL6ibkWC76kw",
  "key18": "axD5Lh3EgH7ocxnWAxhusJUTXhudvhNmmvHN91xc1rQdoxrgxp8XovCni2EnWFsjNEYnHhKBGmzg29U2qSdSPic",
  "key19": "67YC9uFMAuU67y6AhDP2vhP8iTEVdd8pSAMt5Xn7N3xARiRz2E6tufcq1cR659qvpZ64ua6oSkW3yxLX9ym4DTFz",
  "key20": "4w1jLW1biMRfN3RtPyifkXrsevH5KcyK6XKVHJZhLAxxTRALnhcxLtD7LpVGBe6Bzz3YGqzAqQYX6ricLRbQMcmV",
  "key21": "49gmVR2JmeKS9kELQP7R9x17hJt3WDEfBxeJkrqGRmEwwGZNyKQpDsrb2GqH5z5e7idDi4P48yvo9EJe6sDpZ1N9",
  "key22": "38VLySQBUnJHDFD8hw9HSZxiY9otNyxP7g4fP3qejBF24REeMFCru3TcKNUCEE6P69TVX8uPfUmfCGDJUNaLiEdJ",
  "key23": "fkoV2FWJNLVqTQy9yYmJHdxbNX1dXKcmhVqY58FRZ7d61SPKGM3RtUFdatPWi53XGZQcVyXeeEKqaJn9r6EkwiJ",
  "key24": "3RjHtWBCdeiJH8XAcc6HdjfNS97GAtZgBinuqLxip1ZyyEJyQx5WZ8gB2PmH1MJAuf5w6TRqY4JZ9PedWMzj2MKG",
  "key25": "4V4xSEBjMyL6CXyMvofpEta59j7bXSVmoEb9FYYDrsMDRpuk376otobgYnXSGqBikJaxvAeXTN8JdjAd9NjYPUGT",
  "key26": "5yVDeb3ixL7DHwXwpeqDSBxJWCoGe5aqXpjjiBS4UFxSkST8s46jqYYBBTfxjm5sgvMizne6Qj9iy9V8ibRVUKgf",
  "key27": "386qduEQmCeDzvkxpDTFieE7ErrGeQvwDzkuir26PN8exqynZFN7Mw36ey6JpGkit5URVzVQxQ5FrZwAii2Hf3HM",
  "key28": "41guy9hH4Bz4GtHhqUMinxJtwx2Mzwt6NSRqMy5sKwXysfrrFbayuWc3PJcKSex1caNzab5gPZyRkM747GREj4wF",
  "key29": "37i8e6F71m9LXc6xnGXubGKVBHiW3d3oyKSjVi7z5Y4thAGgds74QST5ao2cc61dSSx15qBamHu9P1LSYtuCfPsj",
  "key30": "222JjAGC6goXjz6Q8FUcZDQ3kSGmcAHpACsNggZLE6XZYWLmxnLVQVHCR4nvozvRMQvEzXJ65vEEcFdvdE8MbpL8",
  "key31": "88t5JkrU1z6JezE2zoCGD8FoC8o9ihYXNyNSiMBHsDYfSBoeTiLaNKdQUZZKtFYyoubPU2LZx43vSJ5WxsF6pxL",
  "key32": "53ric551exTQMvKrVp5kLeFrbQ72Qg7oZRWSeC4SziqjxpusGYnGFW7wiPtLvppEgYdawzRqm4181kCHs5ez465N"
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
