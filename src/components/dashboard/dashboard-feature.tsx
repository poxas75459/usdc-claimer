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
    "49fua8c72EWAbKmhLoercJkzsnb6gyTFRNAradzJMfjnjLN9thE3z7VaH2FLzwjUjEbeZGLDmcQPJ5gQrK24pN9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DxEG1srTMNggWV1i5NGmshDpcuzoHfW6vWVDJnasyeCGvuJyd2gwL1GCvCFAjXBkByMAbU6M8ebSE43wXFgUVKs",
  "key1": "2r4pZjQJ4Wda5XfEhXnQYid9VZqieAbR6Nsp2q6z6KGd88WAXWvAJAyPxGTQiScBD93odeE76ZHiyMY6FqHi6ZX2",
  "key2": "2nWGqf7bXbBHefuhK4wiVdcdjg1BBmD4i5HMsS9A9WWfg1sL5L3J2Wh2WuGK4kyGBKsqXfX6GJ7XtGrefPG4WSdd",
  "key3": "33YEwztwgxim1ehcSPyYeEbFiMjTmVHb9QASQ27Sx9FgnByx13GpMnCg7Px7Fa1ih6dmUvi7kQ1GjQPpCcdfXrqc",
  "key4": "quDA9xLGY1CBTJ1yZmhJqCZJqH9mUrqXUSCBTneTchhSteigsEqU8LPNpq35gDfoLMNxRJZCeevMtZCKhr9ecdk",
  "key5": "4JBdiEg7jdtUMV4fYNqVjr2VuDtKKYvVGdkoeKcDVrRAzepJ1a5s48s2ueB2zuUC5NXxNm6EpStd25jy8vu4r7jR",
  "key6": "5PM62RLVPsErmEsPqQTajstupWk54UiBhcWnxnzsoB6PsdtdY98DwnqwzkaGYm9vY1uZo8D5dvYYNdUAQebE7NeG",
  "key7": "43VWJhogy2r6zVs5yfrAzU5J3jCx6R4nVFXQn5bCDnmEsfP2CzeuK6AddB8wUfxq3A2z63wGxfnEbbwUatNgeWGY",
  "key8": "g9ZhR8YZ7HjLFVLu76qtHzEE4j3z3yHtmRmEqMQrnM9wz9SfxCo96wQKMfzA9YVDCQn7v8QVMrUekuiCU27fpWG",
  "key9": "4LCAkjWmiKKmsYxJVbUhw3f2QHJZJEvWL6WBKAgnee2YH5Gp4if6rRM8BUrhLopdbWeJG9XTWB5zfdMGGimQaaQ3",
  "key10": "4CuL3pgpPNXdqTnECykJ1czXZhkgtamcAkGpkmmGfyCXmJZxAHDqQnJwSmQP7iM7cAoVCX8TzGYhaTKyWcuFDemJ",
  "key11": "49GYghQi5YGyByGhu1fLfmhonmTmKiifkDQ3sAnLNmZnEUnnd5S6HYa5XX7X6NYMjyxWJQFRxR4RVx5imDKU9qM9",
  "key12": "2kAaaf6zwau3JhgpLBGcuG1aS1M45sj6zSsJUqaEr4RhS1wQVusNVRxzbM2qhCCdSq9tsUbwumJpjFFqPuCPKYj4",
  "key13": "vCiqC5nQtk12DZZpbShAxXtW3P1pQs78Q1UwFmSdok8vrpdqvcz1PBBPKHn2XME9FSBDbtKx4ci91j6SSmw3452",
  "key14": "BjZHmyEgz89jHhxjkT8dHcQxQtBr7M2JNRJwXB5ja1DyUgCt4bQfrYDotQygE2SUtTYyACeqhUCq4SXG13MzJNS",
  "key15": "2W3q2aW8XkGzSWWk5vkMCpJioPPrU2XwbSGY54Xk1u2p2tV822q6bwcSYcRF3KSekm3R3Az2SCa3f4wTbaYCsE5j",
  "key16": "5ZmP4RRmmDQDekSi5XHVpkFJKQT9AhrarF8QEiEK5NKw7xvArSSyXY1TgtMtUwowCctxbLXaAwWMkFxo6Ugp7r9k",
  "key17": "2UTYjpxpSq2GzVu5RvUkQXfJhPTnfz2fNPMZNHUEemyR2xsDsY2aBgRMkHwT54enQ2rmUT7twRMi7cx7EN8Hojdx",
  "key18": "z6FxWUrcnTqFnYCLSaneis5mGKMSzT1jFdDy6TYPQEYyqZXrdY3PRTa1SaA9rBPD3hSJZkLBtjQmNVstpVZAq4u",
  "key19": "3poKxLncWpgt34mT76MVjSsBCA8rmA6tonKAG2eGX6tnicohxZz4GW8KRu3AMSuDvPrb3nsgNtPbks8f6JMWE3aR",
  "key20": "5Sw24uvZWVkrx62BvRHaV33ec21bAJpbuqFCj7Yz4E6KtNXzJVLkwxFaBX1UF18da6qg1fo6kAU9awz85DdpU3Du",
  "key21": "26AMbHzJn55ReiaK2GmD2kxumHyxtKX2Fx78qu1ZioGMHB6dwNBmp7sE5wbe6UC4ML2ix6XarrXLPYVa238sMaH3",
  "key22": "3VQYn2PabZru3HmWCiMtNaLUXKEvpzZ1s6Ysf69QFVuhNA4w5g4ACuYw9qitjQ2poPQ4jT84MjCJ8RdRGj222BYW",
  "key23": "21bLC2nA4e34bjyMay5pA9ra9WckXnXccvXjq2QeFe1zpTfHrwc3f19raFDRVvHSvKu9fhoK74yhhQu77d4LQXMN",
  "key24": "5ZMKfXk7rJz7dHggSjZATsM8g43ZPT6gy2qpVcSQRzpHaB5rjXBFMi4anVQnMv7fLdyD4RVy163fibMxtqVDXuVC",
  "key25": "2sCHJBebjhiDzVzgdzLnxqwu8q2S8ZSPmXJDdpTLyPTD6eJrTWjscuSVwwqovrWEqq2yTy56e4ECeJxfhfw2dM6T",
  "key26": "3A9LVc8L2R42XonSNVfpRvDqtjuggQf62sBBfM52kSn1eaKKDtrxZ4dxh8a5XLJfLrHf3jFiK5MZFwNBAUvQVuCk",
  "key27": "34GgzSiUhF4HJrMXANEoSJ6CqYGrv4HSDanJQkToyKKqYaicaDiNaZbWaN7nWb7WbFWAH1JZfRwUca6zG6Lq8A3M",
  "key28": "5rPTHdK4yF3WuWjRA1KeCa3MjaBwyRJrigTJrfHk7LBaNAuWrZQ6SudTrNAjP93rNyyWu9fKctvzfiDvwEyNfieM",
  "key29": "4iVWHJF3dMBLAWGrYpPKdvMvz5YjHeCXtHYH2mkDhLR4ZhXf9aLsSRNcbAq8knERean82BpeNteYNZUiGBxwVf11",
  "key30": "5c4T3Asz6Kry378jbV2AqL2rSzcTqdi7TwkosrX2VfQYoC5r18qLxx53yCVrXmUzT2jcRHECiomuUzbNs5Ge1CcW",
  "key31": "47wT1myvTSezGGkK5oA4sixWXKxwjTBZJxWHQZCtCKRvn85xpC4FgBTE7hMsBcieM4UWVNA49oWdcyMSjVEB4C2H",
  "key32": "ydD9VVE9B1wxVVzdGhAsbmUS9dxqAH4ebaqFXrEDULWEQBEgYAYoFfPdQRcRkw1ViWzz3oZ9Fh4CYjyAJ66VbAF",
  "key33": "5Kb8587bqsEYbt4N1bxojFMRuaHVoEsf6x3JTDosKvyJyLpKGffssZcKRQshjiDJXD3WSjFfFUyA4ySmYbSRz2ht",
  "key34": "2CBMr54K2UiwW4Cx8YtBTznQmmUW6NFK7Ag6KeugN7dVoxekbRXEwQCPcLgWEA7GyfdsVd7pFbRabCEbHxwHRQAz",
  "key35": "4n56dtKNm5iiyCzs8V8DRcpfWbxEdtdskrebtABXK35TTmUdsmwG1cD5ShZ4v1fsYuLmH1v1PSVJ19iusZSNAZck",
  "key36": "Ye99Yb5zTohqNawf9cTQV5dUoqusXbwrP6BZx7ceq5zEs8rvSf26G6FBnPamfKZn5g8fMPx9vy5HHpBVW45EEKp",
  "key37": "3S3DTUXHqydkom9jzqKYAQRNCsneuXN9TAiztGGwcwXRPiRse7NyHc6WZH2z2aVXsn682Mm4Z81GHMZaN3UYAKCL",
  "key38": "2Q414gRbTrujuedgspuMSSbMAoR6z4xifehkTmEkfLyt9hdYnA4qAqo8QqtzapEfwjaWZLxn89RviZhW4QSzTV9V",
  "key39": "3sQozYsRJMHVBYA67Ja2ZYwHWn9TiZq7GDNW25F6hWJMLvr5fnJqGFPvsZasjeFeohpYYJPHNNUrZRyiWrGcXn6S",
  "key40": "4fkYaZdHQEorgx9Mq7aDSxJhBuac2FEHxWjb6fbgGjkU7Lam25kwV2PWGPYMKRiges5ebzF1JKcDC6USHkWmbVNj",
  "key41": "3yNEFCPxK6RroqNC8dnkqzg1L5Dryz5eYFZwNmuqCdjNaQcvC5kzXemCneQDCnYShVyTwjrR7kotnXHnWUhGSijj",
  "key42": "5K3iuYRtTH1pnRwaMfZup5qMDXrGu9vMjcWVULST2xdXjc3YpgF5jLe2pPfcBoyret5mGXPoM1b8gafdPo9J1HFr",
  "key43": "SykbMg26TqwjhjooXyXTerLVKEpChVMMK5Jo3ZBXf2M6CjSSBgkPAGE2CLfRgZCeNScgq1GQz1Sx6KC7jJ2k8oG",
  "key44": "2q3rhYTEtfmFQVSkjDSfmNUHFyVq4uSUMVbYKVaiqcj4UkGUq8YVGhnnXh9zyVMBpfEJVJcU5cPDksYMzUqN4EZV",
  "key45": "2VsnJSnqppa3N4mYg925HuoXRwVZyEt4zhATPQmqN85vJvK7PLZJwKwviH3mQ4KS9kaxqCwedi2F2q3kHjcLSWTg",
  "key46": "3tuJTGUr37veJpuRDVpC9jgicAoA1Th4ghskTh4EkP5hmuZcqYonxUvy9CxRsK1Nt9JeiWhZszeky6LoXxucSrYb"
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
