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
    "4HJQrLimdc1Na2nCLEbm6bBo6FyHKuSdnLeU8FLeyHwuFNh485CvoqTTtLNt19UERL4anm4rs9DbwTwAtRKmGPck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vp2ArDZCNwH3usNBgtwTHnPwDB3ZfXpHSJdioAHJob7NCLUKmDfxeCxBPTWcY21kN39jUNpHtDWJt9j3xbpegvy",
  "key1": "4HJPQBjbGicvwhU9mxrexvTiKAghMVnTKbQsXAEpWH6AtYHTZ3KFTLttcRv8LsWyR8iuGMXx8YmEqiyGXGHXMfLW",
  "key2": "56QeSH1M5bPyzxgQGMiSXERXKaBmGefChPh7apZAMJLK8z6TMEVZMvFr6QDvSfnP4vPeyqnHktJVJUtVQLrzxH8U",
  "key3": "4SCMg4JrdtHe2937kTqwqKSH5AAX6CR7RJV7wLtPq88w32bBsa4BhjyGfkCFgUcpRGK8hRtzo4F3iLmQUUEnJryG",
  "key4": "3SWzo4hBy4Y5JLBLrGuw1gSq6672pTzeHH14m3iMgBRuoNq6vhMmFtcd8a2oscSfnJ1sLVwoDKoQB95ezeuNEcxi",
  "key5": "4S74coWcvfSqo4zJ3rNQmRkdV8q7khM2aeeF3PjhPhSPsSyca8Wk1ko7evggh3coeQy2opuwCcumiq2T9zhWUWVb",
  "key6": "R4q62fJNae3kj546NUCLVgAcuyxJZe4uCJCU39fHHyKLEXuptvNGpAzmC4WZJdKeMR7W44R7Wds6ihapF1bLBdQ",
  "key7": "by8NrFXFk4SiqQ2AzftuyvJJddbFRmYBRn2EfVLsiAPeVcGxarLaFubsrp1VywdhpeX1c5Lr6CXh8QDQ7NbCvGZ",
  "key8": "67SAaKPxMwRDcL1KcKWoEn2BVmB2eyjD6iGKsLAa4T5dpkRLHpgBg94k4g6yWEEvSSHZCSQHwHWvgpQBPBdbMDxh",
  "key9": "2piaPCG5tBXnKmJmJ69gEW2x1YXCboCFrrFgSbeznW6FUJGVAda4C5H666vYCMkkzuoDPZYNwZBPeDa71mNpUYM3",
  "key10": "u2SjnBqUMXiuThUW5NAVg5XHJFrXhxb3e59VHnt7aWCJRozWN9EtJyWWsXsNPU7cdPJCVeLq4xGQoPoSt5qkNhz",
  "key11": "5KB9MYA3P3QFV4WiSs9nNYxMa4AiZzr5hJTcauTAG6XMFx2bZzG6eCcokaq9Wvj3D7C6PXQjcFGZLU78NJmi8iDr",
  "key12": "66p1q6NwTjT81Z5KEGTZLYYKM2WQvW8KJLXndrZdPrgpMHtRTznFx5BqDVYoQ34GVP4J3rqdqF2fB6mnoTRcsqzi",
  "key13": "4Lh8td8zgCHUQDWPRKb43C6w8299N66YxWYNE2Q7MEkFZdFww3sxoa5y96Yy2cijsAbaJjyyxbGeBweXSMy56YMA",
  "key14": "4ZXACf3CpLcxMmuUekojXTsdBfNa6QxvBKKBhZ4EvMdDXCsyQAHbKUZZCMsUtajsyxK5cDeWkdsd8naVpestSUur",
  "key15": "2TfVA42uhBpBg4ySrcPdPRCAMFhwNxUqsBhCcnTMKesyQm9TxZqSJXRpJQudgX8V9sQZc5gdeNRLi4zoxmSCjh3z",
  "key16": "63mKrEfiK4r2EfKafHqdKeJqse7xjSaMVEGReBhqRKNq7yjqMAv7RJatJmh2343K7uw8LQGx94mUZWQdtEjhM2xD",
  "key17": "7yDPjSdVwowuYCydp3gpy572B95ThZ23MSqoJ85VT5KSzHjXDTUVPcNK8nCsVrr1VnszBa6ofzMLkQocW9gRixV",
  "key18": "4tGDXMR8QBN86WjPEVdmVmVDCjqeUMCvnXpDmCiji8ReRWBTCrvWZKDVeJA3NuqUF77znELBXwEu3hWGYsAXEKBr",
  "key19": "2nNTLwGLEHke21uV24uQjruRgPHXkJ2XBrS8fYXXVVGme58xK9zrDT3HrqbtEP2CbTBZisPjV3v9w49Hf2jdhWaR",
  "key20": "99KppULfT9awwtSdDSNcvL71mPospBpJgSQGY2tjvBqcKYZGzhEjKXa8mHis5rchXqjW8K8cH4EWNDRayjtbFVm",
  "key21": "4fLMGtEKq1f3KLPGxvQEz7HRb1xaKawVuGy51d4M8DWq8SczU9cxfazkuVDxErvAUKWL6Uw1wmHPA4yyKJPn96c1",
  "key22": "3A3W2e1RvCQCC5Yv7S1RpsCVD2WzySez1c6zwPtA6ceeZEzm8Y7Ro6Rga9gQCZuMa2hSy4K35DCn2ucJ8iLSxP3G",
  "key23": "4RHyauTg5BngtCke9dpWuG46JQRRtVQVvgHDKctSty7AsGw8qU39unySCZCjwZGaMzSwq5fxBEF6nYANtckTY6ba",
  "key24": "3b56eq44wY6TpPamvxGDREx1ncNUdHuM79HvV1zemrk4FrspdWa4bWUKzQ1UJ5TqrfrBDHozT1Gpp4YLVTTamTaJ",
  "key25": "2oY83FxhyocNPWFkZGe4NMH81HSuMpM2GU86uSzHYYaEX1A4nVp4bZno7pXonRRpAeHiFEHtXDXuM1pwCY9jDesp",
  "key26": "468VxfLwmeVs3PkdWH2myApPaEjBZ9J8vfwDDSiUQiuUKKmo5UYQcAcVzG8qnvkcJJtVysKdbfUSAa93tThexoNU",
  "key27": "63gcB3NkBv9XMk6wuauBvsuY6t2czBjPZLJ3QW6MttFtEwXGJSoEbkN4k2bEsSSYWiHYSZUkj5ajA6qLq2UWrKCb",
  "key28": "54HiNe7h9KCFwpZvnzuUQcz3Mpq1TLXkAmwQ8ckp7EAAStBNBswPgv7jf31fNyi44P3AqkMZC2aU4WmUFavqVWaH",
  "key29": "4PSZuuo2QFS1sETpEroPVA2CNWxHsdZXF9F87HWsUFg4Nyw7aaw75ttgLtAf8ApBi3rMvpYXfbc9B5Gihw1JGDeF",
  "key30": "3YmwdTugP53y1YALb4FzCWLcpDBXCeSsDSpBe9XWhhop16fSPFw6WKHzYzix5tsdrpuYKmrTj38ThnBRLHNZ8Bm8",
  "key31": "2TCxczeQomGdEaCJJezvgRSnJUR4GxqQFKRH9nhZyEky8deBxDAjVGYYxFGkYo9GSjBGNFyqaUu48AHUw9mUwRXp",
  "key32": "47ke8zTBJnAAokzX6VHAHtVrSni79wAKxq864z91DvvUnDAm2tS2KKf9y1oiWgDQhx3SMVtzRnoYwGLi4Y8moUmS",
  "key33": "2Ytyt4P48sYZ7ackVMCphzL4MDfz32aRi357iBWsLJczg5ZQM6cUC9TDT5u6S1B6sRGxycuyRyuzUi2DMyFqJxzJ"
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
