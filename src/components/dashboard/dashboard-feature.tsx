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
    "4mgX7sjCTqcFRYCD3SwMNV5v52rECt7Agki4FUTbz2PozuhVErDCrBCVitSpFT6gGZLSh72FYW3QgdTScuUCbhyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvQx9ynvfiNU9wk8ub84wA7VmHNdMZbZFP9fMYdKkYNmkA9MmQS3GunTR12uEzZN3QdzAb49Vk9ZVWoVpwi3vCu",
  "key1": "4zpJrUCXeExU7fSiGwe6yDUGdqz2na1n6v1oDMZVi5DyrkPbagcE6ptz29WfAnE1PUDMTjhzghULMfvipxxEyiVw",
  "key2": "tx1GS4oFn9Q4BUAdkUPJVpAJEbUL6FDsSV8GKphTh6eK2PDtRwUw4CZLs9iVDgM1dj293JoBeyYs4NxZfPJXyKt",
  "key3": "3U3NKLHqqpA1a8WbA24QwGv6rW8nef5ZgXdsmBifoztfFY8NFXydCZrjVs2e5JMcid7XmFwgtwbuXhSgL9cCu5t8",
  "key4": "29QPjwGezXZmVYVYfX7ZKG9PhQucaFRXGFpUFyRC9tXyotDRKqXQ6EnhdhJGyVwWYhf1oW7VMTdH7b9hffn7BwXS",
  "key5": "2UsJ6FcDfWJn8YCqYeE4owNj3fpES2r2z7sHXTCs2xUJELsK8p5jCKWJZ84NG75AK4318HgP59g9mPP1YLQFyvcm",
  "key6": "3sogfMTBtvNGiJGpLDr68wePKsAXEjaSxDfpmUnQB5q1TmSy3AsAnTZPnwHxuCGxi4MakfDsM2SWZUgsfgm1YJoG",
  "key7": "2ddq3WQ6Eos3iasY4CWWjj6GC1pRSh3yid9DqHA7UXf9oww3PW2Ndn95rVJyzFcoNFTUY215YQBHiytrRNVqpfTw",
  "key8": "4QbKykrbcWYi6JgJZbNq7JvWbGq5ig4kZFpZYcsjCJJaiTKJGWP7ipjqZsCc1QwTFWFfk94cMfpaRQ8uR1PBpkEk",
  "key9": "52qMB6BQEZRR4yuaBC2i1PhuUtiuw8HCnUV1ndxz4ePdHJf79d3kSEWRDESYMzFQipEH9GuDA17gDcsri5rJiJcM",
  "key10": "4Ycnu8E8i9B6Y3VdGL4PPnkdcNVpf2tirH99jyuP9FjaXrF1GsTi1HELJSs9Ku8DepLCXa4ojPGp46n7qhnQkxN5",
  "key11": "5xaCiy3dy3pJQaBXiuud8zwSBbh2CV7biD8QKLZAAePK3L8xFMNbZcHedJLWL6aiiSK188Ae4XUivgjYob8FY2wQ",
  "key12": "VN4MiwFN8v55nbZRmKfqyyMpXPUwKptmvgzqUZP1JHLqxHztQJ6mjZdxTnFWYcLYMWmZynE8t8xNhjX8xH7kJsq",
  "key13": "4QPf1npBRVVPPZrG59ZsimZHx38eWF2tFUWxoULA7gPYooQi4Kz3aUzNQ9hit31MYhGJ4A6965kREFoJmSfh2pQk",
  "key14": "442eGN4qKG5K6gjFTo3m2mPpoKH9pnrKwYt85ngP7birhnoDrVxdw4ShxVw3X2GtkNdYzuDeZA2gCV8qGSfbW676",
  "key15": "4PVGTgjyTCbV57HxejgeT9FYDHyLoVW7EW18vdeSbWKoXbRwzmkj9cqkUH4LkHbk5oXdH7qSMTK5uPtgwKp3dNhE",
  "key16": "2oVgYNoLfM6b1bAdwcZgCMicrNZBLusXnFvjcTrrP68Y6WrHfZ3g19mThDbUoXzUgf5qZL5ksVDA29qhMkFjGq26",
  "key17": "3T1qYcpDHbrwhBF2qs9H8FdHLCfSceiR64BgrU9UM8wkih69kJ7V7ALwJxswxxLyLaQSwR2Ua1Z2PL7BMgxKxxv3",
  "key18": "58rgN1Dqi3kLZqUK3NYgJDW24Yk6SFJtoW262iNMtFf6jFMx4qASw7t9KCKLn6hLRuKvDZKEDxRXNeNbY9w1YHAu",
  "key19": "2V9jGYy5ao2wgGNfrsfFatAy4WfbRP4S4gZ5stCApwFXa3GcaJQudS7vShDdeczgRxnYSZSUA9XXHRaK7TGJPaoP",
  "key20": "5Q1nQikAjyBedxUzA1fgD3CDkmYFZtfrzvvtsMfFvCxSVAqBwkkvqv6xD46s5wMJfRxKLC15neuUqRbG1XWVGohf",
  "key21": "2R1ogBuadwsWM24Nt4Q3zKLUn2ZnnwtiVCPEYW3UxtP1AnnrSr3U7MVji3sGA6fSNM4pvLeKQinM88JR5u23Zicy",
  "key22": "4uj6dHWJVC44aeWtooXd1xLiXWC3Ya4MibGfNWX3BXTCxgenRwMtmHpwi9DktrzxdgThbnenXbTJiwimezDhKj8A",
  "key23": "5krYMV7uTwFRe8tRv7g6tKDY34XhgARiC3ymXWk9r4WAofNVvPwFKMbj8xhWGAp1THh5tAFggMsKRj8TVttKYaxA",
  "key24": "2mxXCrpifbiuE5XesouUXPKVa2TTMET5Crg1SybLZJ72Ppbg6eCcv8RHFyYbcjatyWYwQpmdo1hBmzp37sqBJPGL",
  "key25": "3P2pv9zfYB41Z1bNmExzjo9sQDSfdnsb3Hyhc7grLb4GkBSvGpQw4ARyeGssRpyBm3Eo3eBqNZXtqquyszd9Kzwy",
  "key26": "2z5tLza5useDDC3GqCRF1BLdGDTcqgag1vZ8UAc5A8S4UQUAcAoVd3fdfs1pvyBWFqBzP9ncyNpSxFCYKyc9ocyq"
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
