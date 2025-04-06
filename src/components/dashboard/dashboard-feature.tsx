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
    "4ifShHzDFTzcrhnejtMyFTvWoF6rBLyMyuBa2nkpiTeQCeGHVuT6jbSD3TQhLWkdZTdKmi6Tt7maZ8XJKQEogkRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AqUm4Jph8ZGX4MVx5L9VY27BaomwucPpA7wp45K48ozubm1diNcVj4YZa4HpNaCkonbgSF8uhvmuNy7SHT8v56z",
  "key1": "4fr7Y1wgqWorvvBadNMd8Xr95Xso9XnmnYqTpp2esDfDCkuMezPKErRoZ8VqrB5cH4bBYKNfRXd2v5aVGBy4rjAz",
  "key2": "2YFsxWCUxqHuUiGNPWDz3xuTwDAL2iYAWoM4irLnftgT5kKnbcCUmYVRoyGKJoMay2ghRXHrP7X3W8ZPwgdsMv8S",
  "key3": "27NGGpBAXH1yUSudLNGvRXgtSXKsjGW3fYPbkrcX4NyvCamHK9funS9a1onNuspyLfBNgHpA2mHZDsoiLUrVunDT",
  "key4": "31Z6QXbKG34mFQwbVc9vfEtzQVUsnGiNGC3BKKa8jrbKz9BecHY8omjyYYg2JgYsqXosbw4cpmxpJUQFunQcBDKy",
  "key5": "3uKza3beKiwNYWxNWtkwBG5Mz24PBfK47K7HEqVcAKfxox7XYjPXu4QTd2bkEkHYREV8cQxviP2m86CXdsKuk5sk",
  "key6": "5t5AzfFAUqMT6DsfTQGAa39GVrD3B9NX178dz5VxEuYasozCU5xNfKNpvVtEvcxvH6rTvTn7c8aynRKf7N6rGT4y",
  "key7": "4czWq6XsbjpPiqWD17ZWT17QgAdg1ssRhyKJ4ruzELjJ5X8YBZ1SgBRYL5MpXewU2opykkaUrBXDzzgLdH7FESrG",
  "key8": "LNd6k7JaYWgLBcXCSu679yHp3xd2cT2CXBjCE35hMD2XcjhTSxu17aq6bK6YDsYSLKDf8PYQEhMGVNMm3iFvbrx",
  "key9": "29QPUpA69Wb9244C8urf9iR6Xb4cCkGBXiWZ8djuSDLRFY6GUDWXGArn6BHGCZJEJpJf1zQfZDmbL4o6ToPpSj2C",
  "key10": "2rkVecAXWRrTkBoXpsMcw3Xsdw5BqiqNubV5mB8P49W6ajhex12c942TujVvUX9HCo171TNwxuFVigPmnuHAr5wC",
  "key11": "3rtMt2E71vEFuXxzchCYbukHgECEQH6MziRuze5zTeDsU64eYzhBJY4njmuCA5hQqkhBaQeg6yooewxsKCMBBtnM",
  "key12": "1ZAFppukNdXt8jgkKXYWKoDpj91beBXXByyaHkpMV73tvZ8JtB7NFX2x3TzTcwMJ4AFGjKigMJhskJgHPAHEzyY",
  "key13": "4J4kwvuKJcgsLwqZjf6jU5mQXHy4JFxjCDRJsBspPcwwUmXwwKDG5FiSZeMLsqwCNeR41YSVc9TZxtwpuZVePZoL",
  "key14": "kTNrwveye7hVpkxDGnjXsfj6r8mVzmBfVM3mWefF4gSeULTG8kVLdgxsbpoACzFKCKsV6VkRAwRpLfFCxbn1Pu8",
  "key15": "bjybSfnwwG94RV346mZ7ayRd3zF54qRYw2HEsPjdJLQZ7bdGBTyjiNVvhNNCcYVaLutP3dicX2b3kbXNgiKxudi",
  "key16": "62U876Wx87urkrSVUAF5rWUT9zSfzdmSSQf6VVd7jawZiZwTuBWCvgKQytDtiwPRyfWGwKhLAwmDzfUWRUhy9Uop",
  "key17": "65YGaHWzEhRJrxFxNFpMgAPVW3cPpMDw5aDYdJseiJpnVMHWBFKG9odKWhvBrL9o4sHdnyKPXqFJ1kbsVMcHVEej",
  "key18": "3wZhHGgbAPCit6kfGT594fbZGwySZR9Voki8juYTYUpQZAiQaDTn5n1ovt7mjmdgxZDeHjhBMtbJVXqSXygcsGTb",
  "key19": "63n19aL3LpaaXnYD7m2ftCJxCgaePZuR29n7HEzxYS4qUhTDvm6UQ1wDzvDUrt6d3fhrh8vb8xz1C5pHt7MLpCE9",
  "key20": "5VdpkM2UNT93AR2gzsveYUAKJg4q1cHYqPHLt3QcCXRgD6w3di3en1LFoSoj4ssoVpq6c1fWLW8Yji1HnZNvef8W",
  "key21": "5Y9dGt7F8zxWTKkNCz3a4E5HYTxResxQHz3qd4TafNYVd7NNBU79fC2jCRihukxqTnGXrXvKFc13xqKJmzAvB91L",
  "key22": "GbQZMAAHcXy2ouJRTbDCrrhKaTvwRBSyPP3NfvyaUez5K5mXvScjC6yZ2EvLJ9h1NEim23fBn995V373kQVmoBh",
  "key23": "5NQMDBfZJAvpm4rjPWL3DN1w9MFaCWigitZi3qAYwLRuvmPsSvtMr8wdUgnFEFiY6MceAkRr6VbpWb9BXJocLR7D",
  "key24": "5VT1n4rR9jSwxjXwGHaYXgti2DJxLxB7bLdmo9odvYrhdhfMyutosTutsdYBjTkTFcxMoErnLpxdym8kJj5Qh1SQ",
  "key25": "4jnjqXrWWo5fSegQdTozbhcmPmzwAUohNsaYAcfRyQB3juCEnRh2ga8Je629xoVPMPcpjjbo9pQRo8y6sSVfhPaA",
  "key26": "4yb8asmQD1v5U6kzy6iVdXa6p2LqWwVYttfszhYWG3y3N63gMbsJVBoqky4kRkMnUBbSTLBfVh8nctLsuaWgdcxL",
  "key27": "2NPY2oTvDEAoocQZbt3ws1soCYcnxYUsYr5PDvT7v1b2Cmrk32HNcBPxB5qLeMdHaRzk6y6m83Tsd6yp7N3f7mRj",
  "key28": "2BhKqoq2WmmV3fU9hdS1NVztzD9hR4wXQFWhbjsT5Zm5kL1ZeaN2oCaJRzEcAUeePf6dFxgbrLixV38F4x2rTAqF",
  "key29": "59eCYJY4pLdVMZFePsU5cEPDZhMEtxbKQKMG17pUmKzq8GHGnoeiGkZb74q3CRgdimwRKDnBkyJnxtJaUx79DtHv",
  "key30": "4UWvsafB8TcS57kFUn5gCDdRKjtCcXKoTUvRzeQKnBSoTKevoQbBbyFSJxCavsKKrqJvRGhfVWsYxYYFYxfgSV7K",
  "key31": "4MvnyRbkwuYXSbWq5pBmmDTWfuC7k4yWQEFzJHJgXvLX2767CQPpRNKTHwbdKfwZBf37Nz2RaHGBNE9ma1ZuUj1U"
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
