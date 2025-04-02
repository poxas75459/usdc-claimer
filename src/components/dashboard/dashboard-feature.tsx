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
    "HqWkQXYWLRAE6EPdEQrAMQCtFbJdhgXqH2DyEHrEiJumK4RbgK5QnkKT6f6Q3FzW55JXtVDUSf4UgQL6ycGzYEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PS1d1k8aqJuYoUCHS2NyqtTfJN249YWKvFTpwJ4JfgLj5iXSwXgem3DJopfF1mZjdeUwQzRccft9XAasUo1mX5T",
  "key1": "52CCJ4gzn7bcxRi8eDFBCYsK1C7qyMKQpJfDvd31oj3ggxdZBqpRgR7cAkcCcjRWgRjmh5n2F9pUaSH362iWhBna",
  "key2": "5SPKRuv64p4KDy1n97ELm2CseiWX8gCxUpcsZUNa1PSd9poLAZGUBbkfCAfDfWwt3VcijX953Db6qH5iNdmD3FQg",
  "key3": "oNdw1F2Sm4xfCDsfSCWjM78KtEFpntWgre1jmyCxPVg7cpD17jmkWeCamEHim19PawQ4C1JrYRu6a6TRUGqeZqm",
  "key4": "4D283CD4PmCXrHzr661VSYms73kwfPiq3vGPNipBtpx2E696gifXqozcTXo8KwzcdWi3ny5rPqdX5YMWrVkGmPQU",
  "key5": "4JLm1QQbER6oaWzgZsg9o6RXdckDXXW7R4v11ahMWkRafs4xTmaW9Yde4sDCS9JmZ1fvi4ctNn7NZTh19YEm2Goi",
  "key6": "3DJN6yPVyb7F7egy6sisQSbHGnBMUpX7YfQd32MVRpAwQWyWKcuL5L5ivhTa7x3KDJqBGnyGE24RhgT2d1icHQea",
  "key7": "47sN3nBUXUhQ3ke2WDDeS3STPKdErKXRFi8gZFnQ4dugiV3zTQDhDRkqXs5kuBvE5ioSb3wAzWbiCwfxTayCMEnX",
  "key8": "4hGx3endiV41dBHC6NxZ6sCex6TwXGBjR9cQhx6FkYiRrZ1uYdCDXE4uSsrSdU7TVo2UNFUxo1BF3mqZS5i639WB",
  "key9": "cvnbviMBnakB8PonyWDV6atCgFaXouJa33UJ4QA77sPncEtFLs8WEuxYPmRyXXiQeSoSsoA1fxMoAbPYrooL8o4",
  "key10": "F5PuY2TJi7x3teU626dTXPaSvc1mMXWYuq5z66VcJU98TXJMnkBt2Hk6pC4vaYwvBvKqzDJ5aQLjTZMDpj7HVdT",
  "key11": "2ADLWAdSdYCLo4dizhuKCmHtP3PHNbJPauT3asUFZft7YraUVxAwzESYx9UP6EGg9uY7wFC93VBT3gRLkEiMcYxm",
  "key12": "3WWQwurADQ3ySPhQBMu1GrySiWJXJ971hp8LCHG3Q3a3E3tE7e8BQinjefn4zHHMbeJmwFkr6sDwyhcQSGUNkGss",
  "key13": "3vzPkP8BxQ51eFJFiE9KfAGMU1mk8sKyMHFGVYHEBNK8VPYffJS1YsUNV4ACycgqfRCWDR127L7obGWvNStS7CwT",
  "key14": "2vpmbKrEQgYjZTduUpF8XajzicvMxRaGPrJFtuhBkrzRvTxZxbez5pSVTUQoC8ppaS4JFAuUvEXeCji8M5y3J998",
  "key15": "3W7VLyduNcqMAQqPRnCJHHDQXB1dvAAxj1xQ8h6cVK4WuR6gQ6r7SmqmhzU79EPvF1yiNFeGw7J225tRZ4QHvSv7",
  "key16": "32pfTZfWd5f8ey6s4zdEYfV4qzvBpJRZHcckyf2ypy1UraFnmLsCiKmFMUJGEiSDuLhsxUitBhgu1fJfbEuJST6R",
  "key17": "nxmCFKqdQS36eA5SV3dNuKmBDb3Hd1fdLTRTvTwYxBNgSWx4wsiMRvwVFba3w7LhH5EmVd3sXmBbx8jNSzahZNm",
  "key18": "5uneaKkTxWpfTPz1B3Y3rH89fey7Nk3fywZbwpY5TRiuG7a2jK3NGPf1KnXVZLfpmdXbWedGv28yVZC8d2C11UhN",
  "key19": "35ChkHEvCZYGPh3ETSJqoME8G87JMD2YGcmN3UZA3wRASmQXRAoWPGg1fEtA46StNDaMwnPHzEW54pqWAtftuLSc",
  "key20": "56eztFyGZqe1wqBwCL3gAWpxzqsePhttLWdfh6gPJDtqYGtfJjugWLGmuEHy4G4PWU6U7246sDuTjHEPS4qvfWeh",
  "key21": "2Yg9SLJzFRoVwxgWbjDe95RoahTUWAUh9zCph9bUBRJEKNL5jdVrbEKY5K4M2NJt9GdTWpuA8V7hjSwcQLrfy6qy",
  "key22": "2UL9Rfggt1wAbnKnCs53wLGNs9SZZjskPQSkEjJ3A2ZwQiPjcEdZ5ka7SFkHY8UGi3eVH1nC1N6yvZ6vJaRD5NdB",
  "key23": "56T4hCqLf7rYXUCT1yztQfxWifZw2Vot8cGQx71kvKVBK85D6Q2rs9Gh479LDgRMmLmptz3QmLmDTWHRbm5GwsGS",
  "key24": "4dUTzU78ZU8NSxr1GErKtGnuYwWUpKr26SmYYdXD5BsNPeLKRRSoQADGgrCNk2QjS4qz54qHNVXg4g7xVQX2axu8"
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
