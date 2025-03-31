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
    "qmBmuDSnahV149H61nKFmCWVP2xCjVn1F9DPcdNKvwJz1NYbyYvnA3zhNsTS63NLrA1Z2E4UYjU1uRTLFQiAtQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NM3n5EHw4s3oyp8SJ5AdQ1YhLCSZVyGLs9vjTu4MGrLNJUEBoMtrEXXdG9s65kuxgr3E5GUV5L6f2kz1zPpPeUj",
  "key1": "4jWD6ErU8CnCCPdYp1G7gbYmaCCwZrMFWr9eMCMsGQVtJLWxwW8z5wfWXMnuUwH9p3jzui3a2FALRQmqLfVqukxU",
  "key2": "4FPAHzP4rWzsaR6hW5LJK5Tyuutnge6DrWCXhXFtk8hXUus2UZvThhZTuF3wvASgxXcSfT8GaaaSDZx8Gn6uTWrX",
  "key3": "3KR4a3BnCaj2Sq4UVM2R3aaeUckme2FRoYmYJgCmesDhqVDLyR589gQkrTC8EgQG4gKYRv3YEmZLLyPXqhG53Lt7",
  "key4": "5hjEhMKNccgTFsc6jiFcHXwn55Ey1f5Pk6Fc48LwNLbC3HsurKYH4UPhNWfGbmA5fFgVQNhadznNVTQJZpKb5gy9",
  "key5": "595AnT1XjY9dkqttc1uCc1vjC66dhs1rEj3k8Y3bGbMDrQMQUChJ1hUXGDCAWKzpYx8emHNMbLUZZEstJDL4Fv3W",
  "key6": "9wuuNtQvwPVLpqxzFAtczZituEa37wMar5zAXGXBm81kSXk1nTELtGPVehSvkXigjfkcyEoxLJyL6vUPLjtiXTA",
  "key7": "2khrzTuR9nZo88os9DSvLjz3274ue48eYNUNeT4t8oCcNjMxyzzLeAdgRWQMuRHtRKwRyQPwCZxyeu3DBjLBVhtg",
  "key8": "niSGeMp7vYGouu9o1P8kUxrBqVJGdpYYD92trkurfbz3PBPj1SzFy4NdeR68FRrkSYdTAzbffS81ZZxiadctiBL",
  "key9": "4Lt5bF6shioZakz6qrhKd3Gih5numkxKuqDGC4YUDjsUZ4vAby3jyyPbwPZoDirAf37ux3RjWzwq5yfL5U4bgzYw",
  "key10": "iK1BzpgQbuuqL1Gmcn3yfayTLvwXEwyXMB1LTJm4A3FagtbgFUnEzmgq3VY6kjmVr5nN9cua7ojyei3ycPDXmQt",
  "key11": "3Sx3QAhHbsseNrsDoNoMFHjwYTvp6ESsZF7wweq59LJphxsUCxVe3nzj2AYUcua36YJbpHhvfT1pBp9YNwQDbmEG",
  "key12": "zCP7PxJVwtmiD2td5QStRafqmBNU92j4Aa1Y7Y3athAojYnfvv33ZRzFzDSvaajxbP6M3uoxkqvqmAhRNcBvobY",
  "key13": "31o7TQ45GRusPvpYSBWCaBk9B3n2Lwfenv4owKnwK3RjrBdcAM2xNsWgqEcy5N2fukFjCedJ8uEVbL9EfFZa6Nzt",
  "key14": "5rZTSfjagFreTnnmmPmE1YnN2hEJ8VjJadjrdNey1ijRrnFcTyfVjLVDzonMx6JEq6ak51xJhHPX3BSDkZsEJ93R",
  "key15": "4QjoeZXcRyN9QC4AsUiNU2DWxMT2E9hnocEo8gV9m66TfE8VFaFDquTMmK4Sd1xfbQBqXFeZTa5W3u7xGwYRHrmi",
  "key16": "5dXMAbViuTLDjXGGZjnW18byjBuc96NG1LA2AJjGfEKM6wrD6swCqMBVmLH18tXpJuNuen7x4VaoPjNsmLtYV65v",
  "key17": "3LqyzZw3C8WYHWi5g6Cv4f5r78WKqZfzm4sKdqn697zMoLwfqAX6KqFygCsaZSdwJvocxUC9Tcm4evTo3Sa4phb",
  "key18": "61rQnimUMnw77vvXZhWSun96KRx6myRmAcbKJpThwNvD88eZqRTJfRRRLEUyhpVoCMuybQLVarscXM2YPHabCF9E",
  "key19": "5XLZGCNK6RQAaNeQUmapaSFvRFSXDyvAyb5huWLFLSFMwLLjH3QhHgcaWMthuvTP6eXjwPRJSq7GfhFCzfpK9Y6z",
  "key20": "41EfgyMWLGNY2715CL9fWTKX3Ao4zeb2qhkGSvkNocuPc5Bw3Uszmf8HJcPCAydUhkTes27VkGtarkBaRLMJCfQo",
  "key21": "3XEK5ucGxkEQRzyKwNEjpZqnAddEVAARrMfcixnjAwaZUjkMuUSccemGsCQEXNnLgN6JsDWCN4ZwTywp2qGvHHKk",
  "key22": "3xP1xBfDwxkPkrpbvK1kghGXHdTQau846T18pJK8tZV3jt6XYkGnjXWNhoUiG4i6Bj3Ed2Zq2aMABuEjpAkPMevV",
  "key23": "tAwHvsRdFTgTpqMz4SzWRt2XvehwypyVgCpUvj52pLSSsHehjfv4dNhQGmnnPRVMF4aGqGgs4EnDGkhsX5Z6R6X",
  "key24": "3YhY9ogeC2VSw6zj4G11fXfxYBvaZWC6uRNq6po6ZdJ4h8dzoN6cr6JjzFmiCrGmNomzsLyEcU7gzHtNntq8CmZ8",
  "key25": "33nmB3y1nKxpz2CGNRz7G3Gd7J2nGX22TzmdeAQ6DRTNehvjLkMnx6LFhyQrEuBzhDu4QmBrxQpnMKgGbZzGfhxe",
  "key26": "28VokjBByvy41W6tynWS6mYgKXTFWgmRAGYkKmXCii6rN4h7DSt3qA9rwPQ6f7hHN4swVoqaVHrKqtoQh82RAcQG",
  "key27": "7tXcpcaPfV5E2B2ohUPftbwLA2dPTY913BdFsgDYAg7BJueg2rfNrMTBTn2jmi9YFRb4Hshb3hW1Xs1b59QGDTW"
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
