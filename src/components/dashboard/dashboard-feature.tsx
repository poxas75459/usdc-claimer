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
    "bgfd9GAv2MA6mMnCaMixc3YdBfzCUYusybNGufDMzLZZxb9bF1hcjYefsBF4txbuMN9epoz2Bfmz2qa845UGa2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ryoXBcvEYxNGUj1LcVcBswo2dmJX7ke2JFuYuYChp8aqB8vMMLTme4f39ajiSp2Hk8j4ZA9MR92LaWZjPKmBPE",
  "key1": "4zuM59zVuJXaYirc3nGvQma69EmwgB37K3qrHsPDZD77RBhzxWrFNSa7XEymMAqNrA3GXiutX9kSDoR6xiZm6y6j",
  "key2": "2DeuDaKPTVdwNZptJo31opSGrq9PsihmawQc4n4YFbaRaZevAn4gvmLTSgQtCpZEXeth6ytuWb3qHbEVRc482MKB",
  "key3": "ggpQ7VzoxYupMvbUbEPzpiKrj2itS3sg9wqEq1yahf2NoRBeWJsdoYdRPceofjh8cW9y3qA5pfkhGPzQKdcTWqq",
  "key4": "4V7y1ysLybZEWdMqRQqsYTeZvDS7VxjV7DAkVp2wjZXNPPAGzfiGBVknXNxTQZ7jj7297wFJ8FywLZnPVyR4pEMJ",
  "key5": "5AWTT1zc4DfHEMk2hrcZvD73anmdxeP4rprPFSRScZqqGGgVxPPogBi9KMFCHYCAH1FdnNgkk9gPLdX57NbPwKD3",
  "key6": "4Q4CC4H8Jd1VaVc3E49zHb1WhKYGta1Cfiakd5aiUFrN67ze8ro795tPqwPYMGTaL2jyaGJ7m8Mj1F4ZJfJqb4ih",
  "key7": "3fR4W8FJY9RqmHBKf63mgUbLcqsqSBcz7mPaGZKZB7Vt7QfhrTjEn9dn6aNMrpSjzUFpWSAS5fr8voJUwJ3rFmyR",
  "key8": "2cA14r1Zs3UVNWwbd9PMifSbh7X22BthLt2MJWTTQkxZmKL61jreq7DPcHFSoZbPmcw18GBt6iDwYznLyUg5UUPh",
  "key9": "5uxd5RHzKMNEYbavoStB3ioj2aJ26tt7Jh9SYZTfYthDbeokwJfqAkpCkyEM7veLxLtViVwoPCipwmFNXXBVYgEZ",
  "key10": "4P5nxwfw3BBs3HutQU1qfzqD6P8QVBms8x2HzYa1KT57JtLCL42gUEYi5JKFhTLqbqHYgk7AEa7MMdFGkEyW8zNC",
  "key11": "2BoP6cH2s6DbbooJSTYhXzwJe8LRQaDgr5cvf1E2pSnRDv5zUoGWfbXTEECQXL2rgC89dTQhETaVbatn3oQkGKhW",
  "key12": "4nWLfWiWFYyucAPxidR8XVbB1kzesUW9u5D7A6Ecj7KP9UuaNodzzChDbxJKjMVfxLAZ4JjD4QhLX6aTy1V3w3FL",
  "key13": "CWjBaLpF85aH6gAK3T1sCK4wYnT7VkBazTMmF189Aqu1vFusmtVA4PUYYj5pWiRn8VGUKbE12upcRjUELc3baS1",
  "key14": "KD37mLASdsst7pjSigCiGHJ2gZof8f5eoDyt64hNGm9hk4jzx3jWPgpWEeoSxw2tjniyCJjnxVXJV8yo6HmiWA5",
  "key15": "3fF1Rk4k3FV35MKHQXRxnzM5nW3rdeVxcC4TS8xb1Kqf2QadR5t87EoxcUaFyYW43Wbo1PMb13APAH3F7XcckXkB",
  "key16": "c9yxXVsSzo9qpKNwLdKHbAEN9bbjRQPhwioNu5LH3nBwReHERWmKZqtXykiAfd5MMvNsNpo3PBFFpBRBzETZWKq",
  "key17": "54B4CKSEuaGwMRMJagf5vq4VMPXNWxtpQgfmKp33f7WKZTExkj6oSdPEgnFV2TC5TXtUrFsMKWjhzPSMJWtrQcjA",
  "key18": "5JyAGVvDjdtgJP4si2QTfRoGyXWwbGJduoyuN57rnyXaPVMWZEKBXQqf9oqaPbpTbPBbqNHqHWxwstTES4ZbigEm",
  "key19": "2mBhSNe2ikaHUjkP7no95ypbMPMA3HJdH3fAzV7Rto4qYqRLqFk3QyT2CiiNDTeHoKhX7m3xbxbWSkM35MrCWUqw",
  "key20": "RyWF9bbkvNCLBfNbTZkM2ryEGuPMXWpBry6wijo1AmbPmMBjMpUycSGWiMVzfjnbbdjZLbs1gF4RSLk5PQZxrQ1",
  "key21": "Qic8uKkMYtbWwANdMjUk6BXiMETGipzGin6HmmDDosnCCTDs59UhVHQPo47DukH4hGDLtUVpR3AV6B5uDBMwC8u",
  "key22": "4Ex7CN9JxHVN5mzXfjFeARzmMxjPRRkaaSepFjSWbiimWVb6tDC9Xsa9uZnRRzZntGcaKwzRkjQeNZXxafVuDiLS",
  "key23": "2e4B3LwFuzvRhvZFSbAEKdMU4TaPGUtMn19jE7p3G1PbHY73L3vwvC1rAqToQbQW1NaW3sMzHgqD5i6a5Vm9oYeW",
  "key24": "5FQykSdhg8iaBLmzDfsYgvH5s2M6FhhwD9JBj6kn3yVwF5ETGm5UEheFn4egihtwUBny7HmZUzuawJgiuQfRbvBk",
  "key25": "3i4vFCULkVGJriK3HnT9qhGbX4tBkMeN3xMf85JdN2ZPdLBDXYRA2YitQ71nNGkLETtQgo46jkrPzHzYjd8GKcqt",
  "key26": "2bH5v5bJAoq7ZcCa6M1QxtSQqSk9p3fxyCxpSnTQjXtuQKzHmd33ikHZ7SxTZY2hi5LXjDqv2WPwJVdXc6gGuGaV",
  "key27": "4sN72NtB7LExyResFoL3P3BkN7725XizRBub4zeeGZKKJzo3xiG2gQTN7M722psZFeb6r7ch5V5FUjdtJuj5P7WC",
  "key28": "5Y5ybzUWJpt6wciS4JXnakcYWUJrvGKPYKQ8dxeFcLqGQT323J7m8Y6S8rPAg4AaF752S8ESFFGeAjTE7ZM9D6dY",
  "key29": "wBTeKAu3hJ47EwDFXSTNXrEsNE6TuaPfU7DCe2AoT3pSrBrPT7gASh3EhUuZamxYkUn2Wkf1euWwqry2oJA8eU9",
  "key30": "5cVwQe7h8fmPb8wKVQLymFPvCUtn7kpLapQdK15Ax4GDUptj2S5CSc9HgQGqSYG98KWQYsViv5nwUMSDiTREY2dy"
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
