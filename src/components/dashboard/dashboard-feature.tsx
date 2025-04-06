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
    "d7wfmvCU1pCqhyHbgDFoaBFseMKtnVck6Hi5CyGvfKu8cNLhKFhrStS3ZVFWy6mUqc1bnD4SxN8w5PWELHcouTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSPjfNWdv5aeRAeDxHG8ug2Yp6YugAh8UhyH95HRJGZGe7H3u8aSkgRxp88oMwPHd5MzPDNXLykeakBydspKKAY",
  "key1": "5Jo9h6ziQvQooCs6mHtMSc4jbuT8w8dykfNxFPTQbYC8KVxBzphw9eKFczhvm66E1VjPsBMmoSrw3NTanNifzhjY",
  "key2": "2CtPGTBqGaDUQ2XcLcxvGoc3xdLcFLanSGBEeyWME3gvNmuqQqXcnctmGCVrXTKP2u2d7yjdb4XP6D9AMjABFRz6",
  "key3": "5NGHNqjiXVG1iRpVtdTapTZXLvfQpz548Za7ETLojhs8pFXocHPgR4J5F16WpYHByTGcGQ3bfpm5747gcT51jyw1",
  "key4": "3dhsuS22x5PVzZaVb39oTWnrXLi3Wrofd1D7o57HjZMJzBZEz9issxtsc2gXeo8nZvVV4z8R6UchvtQZ9MzdNQxk",
  "key5": "4vymbhyAmaeaareG7jdvuHkLd6byQSTqaAqxAQsFao2PtRzKZ7fQBNx41WTqozFVeZ3pP2BiV8FZC8jFsv5pSLb",
  "key6": "5TQ2RhtrdGfLr3cx1izoMVDnFXA6BWD1YeYQYH1NPj2GUQ9nqQVPQTUQQi7mE4K6UnT7b62L6NSw7vFrkTrmeGiv",
  "key7": "5AywNWEohSbBHST7nKJAxg1ttPCf3rE5kiXTdoBbYNtY414d8i1cdzzyoNUQrZw7ZkNNwHFgSJmqtWMnARRWcmqn",
  "key8": "4uRYLsmK6pgXwT3JdN9SR3MtnWnmQfM3HjPzMm3PGXGjSrbYJsTMRTkTRFt9VKviBm3foiTT3vBwmXizs88BQzjF",
  "key9": "4ZG2mfmrF5cvgrfpUbSfF7v2WPbVB7v8MN9hfhZBDuk4b8eoqwkoqiHeWDFYicn6RqiTdKK8fdkLoJWPyqutzrHE",
  "key10": "3ZApvauKVxm4X6gvhCHJiq2AL14yTiXyN3q7qsYAEJoQk2T86S4Uoak7UU92xzA6QXod5nQRJXPqR6opcnFcvfoP",
  "key11": "651UAXwZbLBn5G3561f6H3Bg7PzCccoTBmcXmZ3JgKVK7Q1Zsbh2r2eLFY2SaiUe7bg36YGFpcVpxAKZrzsL88fh",
  "key12": "4MeLqz3vRAQpf7JRSUoZ2sp2UQD8JZwX2CnvDxrvLV6Jgc6wt9dq8PesZD4tFmMboobEuXrqFdNdEYZGXuaCakio",
  "key13": "26wWWX5oAZBZ8Mtr3A7UdPUBbRofqE5R1ru4DkZvHn8vactyxXLTu646JFHFqv8LJx9RWDinF8i21fANCMPBxnBq",
  "key14": "63XcumZMRWVPGwvzXNHuLvrmqgurUDFcLTmeV31TJwC5vP5BUhbfzv1L3YchErzsEWpq3BgWJaebKZQ64ZN4aZEi",
  "key15": "4xY1VmQ2ytDGzD6zG7LxCu2NaSDPNY9zuKW6tXApu5bDnfGjTXuKPSYT17esVdqFVdoHRb6vWxR2yrjfHx2bT6XA",
  "key16": "3c5CzccxYS3rVvZUK2TMiSJCgJ6dgSq8qiUZLJXcTMMcYijSdoqWhW4sQZAdiu6nJ1iP7yrUwBHzwQySgo1MhLs6",
  "key17": "4ibM9FTBoB2oi7SrpmhroSX3H1J3UFtEfDztSKX4mEyRinXmkKMws2TQAihSeSvXRzuvNJW3vMrKr9R4r3DW1DWt",
  "key18": "2tsQg6HRQFLNPbX3F9T1tD8CZUtVG3F2q3xVgiBC96PFHUbQew25zBbZ36dD6XCGLNYckYi5EERneGA2YonBPCrq",
  "key19": "QZwJpxBcxSGG1azi7Adrhx5Sjy8CJkdZVDehnrnAPDcz33kw7hjU2j5RMx1cU4S8h6wLqBBGHbWoCtVUm6hHcz7",
  "key20": "xWqaDfer7SGixPEtyCESoBJ1qqjiEqDo8qawsfVhk5Xr7hGiy2ZmqHLGgrKrncpvMKDJCBEZYvbjJQ3D1S6Ewc9",
  "key21": "4aChpTFyCNrkeNDaWp9j68qVqrAoXLD9DNpnGMFLbS5QPwdd6hXM59a9KwG9oyWeXHKCDxgyYLoY1SiJazwAzY1h",
  "key22": "vJJzqSXYu9yw5K8bj7CJbwz8RLdExJ2n9YGVTvJPm59HiGVKqoG8oCuEFsW37eGTCtTiJK33hybFn5DhKtX6Zy1",
  "key23": "3euvfZnpB9ECC1jqzXGYstSm6BdncoWCKdB8LicdZvVbKtQDp9pKdtmDFx79A6WhuN5cJ6sytLMD5c8qWkMrL2nm",
  "key24": "HL2TfokVLPgB75CSsiB7kvS3cQPKaE7HFHHqvkjx8F14k6Y91R9aLyc6CGyFKUbPdeMBaMexPJ3C7nMFBXqVWwX",
  "key25": "4PkqZNLDba3eNwRpUtSL1CbfHviksFSK3FtHQqMnALVyRozxTQwS5n6teDXGev7GxU5v2Cu1WezBaZnedJuJci6U",
  "key26": "d8qgvsDrXPmBSXeVYda2ZcqE98gJkavYBPRhux1X97m3AqUX9ddakPU6nfiZ3ZRzadHpfdyJwX4442sskaLdSns"
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
