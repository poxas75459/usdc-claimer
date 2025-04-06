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
    "3F2M3FnAFFdv7KD2oi5KPtPiiGWuPMhXFZqmdohijRRYKEbd5RoyMSm2D7fWJT9gAEj86mtRc25sXip8TojBzz1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNE6EzE8h5wkc8XKLeFrxu7CVgfk6TsC1yaeoV5e57yNdCH4xZS47FXKcVzBGV9qe2dyjCp9xF7Vhe7cib1D82P",
  "key1": "4LbYZgSyRZkvcf2bSLByAtffctroBxmXFu4Q63AWs3mmNebmuw1ZKdbsdyKbxBemEW8g9TzNZToURkp9yxRSg1ue",
  "key2": "2iizPR5nCaXgY66V91Jnbcw3eSApHMDcAVDUz71jnGksvRXAmjMMUn5dstvG4oMRFmcCxa6h3th7RtiY5owt4YKe",
  "key3": "5XqMEYSxqPvWyEa6uPy2yrnLKx2auCLhNe5Gj2Gnq9NRM7exJc1b1bWw5wf1HfovK4Ct1gXrKpJh4gvDEhWBLuss",
  "key4": "3XVUVseVoHEaFjugaeQduK1cgZ5gx61RUnrCPFpcJP76hJZGtqMR8pK9jgPgiRD7wXT4HTgsAEhVG785JUa3FiAP",
  "key5": "5V5AnXhfUGZxVXeEhXnGck6GTXAPCfuuP8sar2rvXSjbN8rM5hRWU5DCz4ziy2TArqnxj334mNDbQ4ftrvKvn5VG",
  "key6": "3LG8VKWsaxCCq9ge8V3EYBPGiadmckkTBkVe5dSP8KgArf4H8PtaXAnYv3cVgMTNqqWTedYFSnoUG6HwzCxBgr5R",
  "key7": "489wq43ruKZyqS1cu8ai49v8VY4JkGH5E1Z8HQ79zi8DAyMmr4opmkY9K2vLv59fBQLjDcgKo1uYYN1PFM3K5fKm",
  "key8": "4JygF9D2rxKcQKBvELHCVof3XtHVrRB2wKkJjBYcUzy7foJyRjiJxWndEyfTqMvmMjJ2Asf5MeTUrabpsVWfaYY1",
  "key9": "Kyx6H4vZbbzuz1UDoDCqK5e2E8kfsRWjBkYMGUwsPWwXE8xMLayy5hos81iN8kEXJir2ujpBT7m1fpNCSqH4Mp2",
  "key10": "2AnY3caewb9y2zrvMftBJ8vthfJX53ecVEEh32wpcW2wKF9PyLiVk8Ncp2Ltp6kSUHZVsPaP4kEKhwmiLjSadXXy",
  "key11": "3MSy87j1R5rbr8xDZuvYwHxuCF7SabyMU2nCEAMn5SknKqs8W4rMb7v8LgayfRokk7Vgm8x8qcSvs75K3Gqx7nrV",
  "key12": "4gGVJH7aS5zDbTukR3k9jviEdwrUjb1cBFCC76C2KwT65c87NvtajPTfFcNSxTyTW7dbjYtEtDhM7pmb7NZERoXR",
  "key13": "4VGiqXS6VXD1oeNZpUeXqXo3E6fc5u7GqjNJ64RAavy8g8JkwckJxDGyr1QeUQ1MLgJVYDjZY2Dz4CrajgHrFYE9",
  "key14": "4GDk4c9VsF3Ay7DYZpgyZGJuzzypDsVFq67U87u5igPjenb2GC2M6Tn17UamsqKxt4rPTNUB2jLkoQodrJaXLGnp",
  "key15": "sDxUQj7duB3oiD3P1ZS6BRoMmvDCXxnBSEsdGiz5bsM5eWCv3TyUmUxLe1brq2tQxA87rkgxZQ8VRAVBtQLSHuD",
  "key16": "4asGwdP1BAC7W2AJg9oEA7Si1KuehMZckCocXD1SkJ7nm3RhT5xN5xG5ncCmZdgxKmFXYRWBv4UhTRrXgwNG8S3s",
  "key17": "7x5ckzWSM9t4GYUggq5V15GEyYd66TGWTTQtTdvpUVTD4tUN5H69sNDUx9u7BdNaCCB6RHqVTPjjhL3QGzreeGk",
  "key18": "59jyGbCbcztJgTCgYhZghSsF8Ve5DMZiPwGHsmHGNV9Zge6jj2bwYgiTs62j6QAyL5LQuHr8LS5rH9JSqrGFW1Cn",
  "key19": "34NSaE6kneTmfGDUW6XooDyw7zabKWVKscppCtyaahSaWiTB5pcymMF9AWvpWo8rmpbraDfjt7SecR7hxNqzURVk",
  "key20": "5nfVJLEBScFUGQj5JG2zYARt31vQ4ZQmSpixyHUFVfxEyufUMZjfgcA5FHK7WC7sMDiVBE97Qy1CVrAN8Xv6Z57t",
  "key21": "4mEvH2kakxgEjDPdeSf3bVfTkbfbtshpA9Pr5SHbZQKKwkL76SmfpGMaZnSfS1zJSkpQEa3eAqBrLe2YLGh6nBPu",
  "key22": "5cSTmUP8JL5BMGrWsuurrMiYXsXjThREKdugbLpHX26Q9zSpLRX1K3FUT6TGmST9qBetvV4dd2b15Hg4WTvJ19CJ",
  "key23": "hK8dqarkU4CXpkAdcNVa7c4T3M5SHchjREnNyVMJJTeiaXsgKr1RGq6HY4ji5KxKdKiqNAxJ7GHnxztNzVNXswY",
  "key24": "3nhp1dp3V9oHQ5KUdd1vEQkfMQrbS3pi7zZDDVc4JKwEcWbxCxeBrEWspWRCw6XLEsbFPYywZCJgFBVsUj8fufre",
  "key25": "3mcXtw1ncHaJSkBMqPKqKWftj83p8LDrJ2DdXiHYbhGRn9SLaLj2nuX7AMh4vsFqUQALd7PSxVjnuUk1Dkf3FqsZ",
  "key26": "262SNriV2RCBAaKWFscwW6uCusbUgY2Mibm4AXREgYbQWdkLSsNFba4N3faqay1LPv8x4qQzqsv6SKgnpuLS6SGh",
  "key27": "2d7XhWq7hXDnAKcZ7xn95JpBYZzJRCQxozKeYXF6gEVuQ8VuXAGDZRZ9hpfMwpzmZaCJJCmWN6vSdhqJ6xwgMoEU",
  "key28": "2gvH58DcWpCXMZX9WsTUtq9mZfoKKidLyKhVnFU4TKQqAemiHjqPnwqd4tnh33nPtyr2WAZWCosm8vmDJGFQCjRx",
  "key29": "3xQht8FYRNDYifQR421T7UtUN5NNmkKUdpXzg4gcBDaxopurpFGDVNiHVNX7yKhduyZvxGX3Bhhv4JK1F5SnWCL3",
  "key30": "2eUoHMcVpVcKchzY6Hnq122nHoEtcMbWZk9jVuewjEmSZJzTTeoZsAVbBxhwrV72hw9B2n8W5Lxa7EobsZfGC6C4",
  "key31": "gfeDPDEwAev7aQnMUBxGpY6sLhxzBoCR5kYNddDFticv3W4RY1k1pvTdVDushvs37id3zLVc6ozKPkVH6sFLJZ7",
  "key32": "3aMg1fzvfRxJJ9RYvds7DhvyfvEJKTb7wnEZtFxZ3znRZp57bdf3Cp3CucmpbSnMJSVeihAaLKuXN1quVErQ2Sng",
  "key33": "SzznRo67B3E34BrzZPRnVufjCrGKkY5GVzY94Q4yQDK6Y7pamiLhHUxe5bD3eS5Vh1di8GaiBM5FViWaMBjZYvZ",
  "key34": "5FairNEifzFm992s7qcgVsiYeAhT4utFuL7shBQyFdc6PashECe7PN129CsrTsb4NuCpLa6beMEhGUjfm6tMaeaX",
  "key35": "5HsLB7JuS2RLUNVPEyS8M1ZJcu4WKwgVDcamxRGHwtmj46AvjzvdQQpMw6jobvuRgqYJzEJwZokjvxcZTLcqL8Fz",
  "key36": "48royVf9GptWn8JBrNvZMAHgNwYamd1PraPLXvF7jvPedTqP8UixmhydxWCed8xJBEYYsJridvxza35reCYLYNvn",
  "key37": "4TewSJWBsK3Q1i5HMrybh7jxrTbwPXbi8UuqY114duorz7GBMzuGiYsDDhm8xyw2q3q5W28iZbfciZe4pxGJPugF"
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
