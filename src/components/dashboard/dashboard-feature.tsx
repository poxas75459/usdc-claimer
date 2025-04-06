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
    "67e57TCuAFanCr4aUu6qAJpQJnJp1TBMPtrffcKqcUoXFKzjdkP7V6LM4dQfgvuk6WS3mu8drkFX7ci9qMnjo7CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCZAYCyGYs8Lt6n2Nvqs85h9d9gCtjHbn3JtM6xfGygbfY9pupmhN7BU95KcMy1JHxhjGRsfBWGjRJpD4bLHrjK",
  "key1": "3DhUuxCmAVbvk2uU1xVvQUrP3kPPvFGLSatzqKuChkxjMWJfeHRazyq48xoztxRUHctzRGYKST5bq75DFkqhfXTX",
  "key2": "JUP15dunY7umYWfevZH15cMBHJSGNfBFG35hMb9gWHh5UPk6iBBpaTJXGcy6BRsCDDiocHvZnKsi32qqjD3Y57Z",
  "key3": "2D1sX7xMN3CSkyabvwbDNoKMGSiYXQfR4cetHnt8tFwUDE12Uoh78wBmWXyU878uj375SY9HeCDck4bt6NUAmPzi",
  "key4": "3b6t2s9KM1RCEfFHcxK7XmN1nb2mH7pzvBrd35LBJzoG8H6n6yH1tr3UfhNuhwSwy9cBdWX8amwLsRycsHqZHrPA",
  "key5": "2BAvD4fFFBGMLyFKG1WFsYCFkJ6UJRytZnumxtYKWAXgCyKjBjYYH99P6jHciMw3vbmPVP49SpMqcAMdLqCR5g6V",
  "key6": "2qX9SsctSJYfZk1XD76ft8axWf4vGeTCAQVp9zeVUhXoPtschcQ3UPxnbBdfz9TMMwEcKyFJSW75GeLo35Guvr2c",
  "key7": "Z9pHePYiVNq2yXbo3qLNJxKCMqK5KZSi9CpG5GvEbYzSpcTsjWC3ffsXJNWzeacEYg9YWUtb1Py3hk2CDkarmaw",
  "key8": "49Hw3N8RJJtpKUf4VwFPSAbDPEfbuY7ZyMN5HdTvwe2zc3pdusM28C3oWrbE1V6rBXnJVwnEsjukTKYnTgRkfYXa",
  "key9": "4kRSXLPScGMg6LxzrebTuvdKioeFDiBUeykHpAQHDDuRmNW3VBPpD7NFVgvi5Bio9fSgjg5RhronWY6vKnQemRMD",
  "key10": "4etHCqGdxTG1rBcDzdvhK6RdnFEdUN8Hej2gx6mpWA7kKS5hAiQXemuBCd2bfPZZBf3JZ8WsFqZMjx4Wk58EGGvu",
  "key11": "3v5bMyY1U8rb7BtF5ppiJUJUe1k9a9K7njHXKi9JSbXoRntc2hhcRbcmrQDtXND2rknoaTemPvV9HGPdRXxjkjnk",
  "key12": "3ZrNFuJnfy9Csta9yP3KG1zKddo7MDjbXjq6HP8iQFBP4Vv672rdeAr9tpsmdxyWjEfQcMPrFvsJW9QeZSL6H9R3",
  "key13": "3sVL2G4HPdjUS5tforfcsRynEajGeqkNtEs71BkMWFr8siY7tFxUAZM7mAQd5Zn2hKucsBRGPfKrbTB9ZdLSbcbq",
  "key14": "3cu5EoMBVC4cpCyQRCBtdoNjsKXm95EHrumhLqvShrqE5UyVbXZKa62oe466Y9gxfgxupLKL5iHj4QxKu1qQqUBH",
  "key15": "56QT4t41BTNsYsPEgFvsNH6Fgj1pqytwZAYRwF2w4QvuHkKrkCktsTPpaY6HNX2inkZNX8TgJPS5dxtSw2Lqo4mp",
  "key16": "3CHCn6gG6ognpK6WSwSoaotEFoZeihDzTwMfL6Kn5YevuNdJVMTxfHWLMKJfSqHXxvYcuz7mymJnCWK4PeYeagSE",
  "key17": "4XF6urbMUwcdshBxs7yj2vqrr6LHDL7ksi7bonwhVwNAfBGtGMG9HBiHMN5nfn7QFGochN3PZD3Q5exeWe4BzynE",
  "key18": "5bAokkXcMhkj1zTXG8jokKvj9MoM3JcFMsd6o3TSqh1A3fTmXNXgzw9xZPtMNaThY97XWvEg9S3FeEVoxRJFepWE",
  "key19": "5y4ztxS7mcdU4VJtSx48RKGDhHQMXfZRyAtfMmdAj6aNicLHSTtzS4nLhA6DtzPtW5LBtqUXWTAX1oC7rqo8B7JW",
  "key20": "3zhKkduuWcQfTbemGwByKyYKpbwrRGJdHSeeQGsEwjd7Mdk1hH1jnqBXhz1GucHi7EVBhiiBhHD3KWg7DBV7Pq3c",
  "key21": "2SVnM3rrqsF1rqwGzQcD6NMyiyXmqPcbPfd7VaDP9cJVz5SqiUjr4HW8vPVHZgri9fp3s3mrUctsBsNxR7eX7mUY",
  "key22": "3NYZAXzryj5BHgdcDQqUvb94eyarcSZQkMx1FJ8jWbZyLgwFbdu3YLwcaLNsTAMSkUjfrexMiDcQBVMHDpUnni4z",
  "key23": "2i8YFLCMzUS7itaNCxfnEPUEpdW8LnSZbqFY3ga8JHUkoZkvph4WEXbnVEzGrovWd6P5iW9rc19XUj8eky3S8zJ6",
  "key24": "5tCUrUzKZsrVZEcEy2Jgw9Nm1LBCiEh6dJRfxchRsW4MdQ4fWkCjagm47ZbC9XGNiUvLwpPEhuUZaMULPtqy9TdJ",
  "key25": "QQ9ujVLkJLmncXxHHejkE1dj1uXASvumZx5snUToADgRZcrrYUYzpyhA6g1ik6ws2cnFy3mX8uMHr3rYMYU4F9G",
  "key26": "5hacmgwdeMkUqdEL83ES7bkMeKEm3g7nvmsH9zg6JhHNArxp36s9w13ib1dJFYMMcPA8z5V19ir4X5fGW6b2wX8r",
  "key27": "3tqYV3GizRw6r1ojaoKpD3o7bV2yRQq3yyJDswoyXi6K65BJs5XyPZboWbyvMzpvdwRi5L7g3eoivvk7Hm4yhSTY"
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
