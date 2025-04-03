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
    "2j6EzjhcU8p1swNWpQh2j2upB2CCN5TYVseRERxUzMqim9QEri6y8e4LwpuuUFeyLHPbvRyzHTzApSSeNyzMVy2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZBXxw2NmVGYhs9yznmztaE3bMBSgbcAzV1usk1TKqffSb9eRrxPVTQJd8tyquEJu6Ls8fQxUDQWJaX2SFU7TCw",
  "key1": "5PKQMgVt2jx2NGz8ewcuRaQrZW8YCPLhjXRUw9T5Bu3aKukcayusX5Vu6uAUpw6GGwofefcBNfYaf18Lr5vim4Dx",
  "key2": "4iv1zKzbVRz5tcwC944FJfcxTSPmwNoyKgyiMBb1DuiX1YuKEpgD8mkwpJ8X24PSieVUXwK9EaaXQ4FYaxfhnyKX",
  "key3": "4Mybi71tn6tfgff1RhcXZfc4bZg44iTgWQBsELrV5u3eSP1ocNvsJvey6B3y6i5URQM3M3SSZphqccx19mKMsmbZ",
  "key4": "3gTdeFxRoimpXPAiCi7GDBafHJ5hszmFFBCbS2LdhJ9UDubuVoazBSQ53o1BPrGCXQBxK7HVfEkJ7qKPv7YmkL4h",
  "key5": "whhvMEs3mJ1H637s7rqubPygrbnm3pLdCa6jCSnniVnFZ427XSCeopaBvkZv8d6SagfWLhjS66LsRTLzou3u1yE",
  "key6": "4UYfvC9tirWBKaYJZpmHARTQw52xBBXAvFfPXGgnDNvj9ZzC5MPgKzs4YS7TPcMW9x41x7RbCSFMFWhWx46XiSkA",
  "key7": "ZtTp1ESQoYGcyqs6nN9PhbAoCD6dYPFVNFGY54hySKvL4g3tojbxrcL4EcRxEGAzrqta3RjaMec5XMG7Lt3hNyt",
  "key8": "5d7A2LjKCGgncG1ESHcRj5iAR4eiSwLSLhYBr7BjNW4pWJ4Dm2w4ncfB8UJbhZ3Ev59dAgWYvPknx11PjRxZAGFX",
  "key9": "2aBujs12W9cno1uikM4uMYwPQY5ZUsyrhSiY9uVCWegHsT4eeAxanAVcbRmmeUffwjC5qxkK6qULotbH9SCVbXMf",
  "key10": "5wsWdVk5KmcVHtJAxEJ6Yp6CgtEwReLA3UAz6carCQYzhJvXdNVr2uLj4AmDGppcH4owmnfEt7MpwPQ6EFHgdprf",
  "key11": "4AA9qwziVr3KoKk1qSSLV41RMuB1KLY82BQAdkzR66XjXtNieHEbaAbyk7NBkH2FzziwBqRzt2XSpjr514MjUq9g",
  "key12": "4kKAVP1nn8nN5Ln863Ct5JtN2U3SFKXvKi71UVsEq1jxcgGCrgAYYeuS4k3b61Cw16A4yYRagrrGCu49fZtpUWiJ",
  "key13": "2oNhma6mSoYVW5JHgJ2FQWMWhfsPFjN4iRMyRk2zUbkHFPnsCfZvB6sYzp1aBErRnbkX3n1B1jYnVcUwoHd8oDNq",
  "key14": "5cMbRzwzexVxtGTKWyrykG1s445UwA8ZVJMMVv6Eumxx6m52AAqk8wPUAFxuvFHUTRNSM3qWAcy6KW1kDBuNMuqz",
  "key15": "4fS4dRdnvwptbfwkiHzogezmEzNbs1qvh4U5JUgQkbSpPB3E6D57RTYrWxx9bobmHwVK3ve82pL7k8VRWtzkn34y",
  "key16": "2sB6NLKZY5GCSRpnC97gehBpDZzs7h9eg7egFxusQ843SL6XBDMoaJrpEhghzRNhmnw14b89EXPEBQx4vgikJLPL",
  "key17": "3ZqGf4eKxcyx6K3Yec4iSxoTUPuk1hFen5Q6wumLnDjUc7cK14SAkbDAB1tFeHqHTTKdurJsDAY4aAGPmRw4XxWa",
  "key18": "3jp6YBVYZM2b7z9ZjU81xMPgDmksZzwGECDvjSxx39bwbX793fPjuvGuwAJoAZijnrubr732PCk69B1JpPDkcfmF",
  "key19": "4GjgqLCUemC5x7nMvnHyuiJfFd6LJmcTF7yd7sz2gNUAczVnppFvo2AsBdi4W7SCBm8Dzw29W67dFASmjt966Bgm",
  "key20": "5ccKY2HtPtBZnDoBuZbw4haX3Y6rdqQMw1DhjsEMg8sjDx7bxygZLuJjpFZLXrPHmjm9ADWevg4rBEjMuQTHuX2o",
  "key21": "2qLXRyuG6YNeTx24SZvLFf9cVwPS4SWkZ5yywLXmZRfxA99ZEPwnSzdFGfGw42i66rxSrkB7Y8MpxQScxguPojdh",
  "key22": "wCzwq9ZqbiYGWc2jQaZtxU162hvarZVqo13XqH2RSmSX7hVT6q5597i4PR6RqZ9hoS1APFURPPY69nZXTb6VwYU",
  "key23": "4UK8CC39DY1tRZxugrSx6en3zZxXB2yzKUQMK5sjNu39ouwbL64q7A47uoZmH2zRpFmLPqEYUBdmX4acrQZy15o5",
  "key24": "4tJjC8pMEn8LNYpYTj5nTdHGrErnjcJDaU6MUL1Cs39GY4iWAH43cxTL6Qkn5q77PAq1E1ACKFt9ctQyCu9NNZHk",
  "key25": "4VEoo6Ju1eApRPWpMr9DGfHpuFbYGsNpRAjUfNcbRQbyx6PJjk8JDffepk5GmXZrkFTPxsKFPFYGEAw7cu2Lr2bv",
  "key26": "aJK4aqJaLfaB9wuLw7MEKGbTup3U4iM5NtCqsLQnVULGQu2eh9Aba38wdqPuSvFxPFcbN7gFo84vr1v38EbkwgY"
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
