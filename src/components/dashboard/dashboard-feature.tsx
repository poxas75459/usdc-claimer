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
    "4oEiNe4Gz1Vyu4JfsTk4SZ7YPAuEsDTA8u8NkYuySGdQBcrNrCSTP2QZm4BEKyo1jAY4S3ncHrsw3S5NEk3KEM74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2cykB7Nz8Ja1vW6xcs4qGLwwd7syUvuKUcwth6XYYcKUTDetPm68QKfWoC5LkTdMcuLDH5vbL8ejjmeGCdbSa1",
  "key1": "2avZc54Lz8aVrUbnaxH6rWAYs5mLxz1LVGpA7hz4YrqVvDzvqnsbPXKBtBkbZeYnCWJko9Kq74eb5WLMQPLbKzMu",
  "key2": "5DuWSv6DgCxiwpP88xyzkHjgScLrQHeeLKwNQtEDdEqdi5PEpKy8fApBAz3tqE9wvWSVeuy5739RnJw8EGoVygsp",
  "key3": "2t3ZNfBKU1eVy3sZJGBQec7X6uZYLvDbtEHuURyfEpgCE3deVYofXhEk6YEZH3bZZXNsRVKxgZfPoRSz4D66bvHJ",
  "key4": "6Ba6yR2kDZ11JW8ZuoTeE8nFEpAGP7S1eckA1Hk21Qkvz3QoStJuPZ3Ei1CqXDod4GdxGsQ8HT4zMtoNpToD1AS",
  "key5": "fcxbPAyDDKJSQQZxqLbgjN2ds2w3CHyA6nQXL6dLquXRxXu3qqewvEy7aQRP22bhzZ5epDo6Be1gBYFtAHDaFK9",
  "key6": "3JV2ZSENJs9hWy199sb8mSfatdzmdYqEfM3AGzwa74XwFSwhATP1WovMRghLyora3LaKssSuakicazszXPgDuHw4",
  "key7": "3AHLb21hjZ8ZNT2bTQ3DCBkT4k83UggGG4YKLGP9HdGmKoo9VXy8gzw6sGHAm6pMRC77dU6iyigbnJSXUBXSZGgN",
  "key8": "55d9CpctXNZT8Gn6ouqECWwXCTympECcxtdWbZ2r1WrZ5Dz5BEU9KhrRQAJiFGrhEHXdQHvK6Sr2Z2v467o2k6yn",
  "key9": "2gxkwRyBTf9FSBXsdTyH1hLR1Kgjy3uqdiE3GxLCbyW3VceEdBcpY7wjRvDtEh66p7M6Gdh91WmNhwoXGouuC39j",
  "key10": "46dXNajgzBHHaUaQqWSAxQ1Ta6iPgUW4j6pnFdQJ6auPd9N9iLivuNQytgsgDZvWv158BU8hx5zVdpBimABY4m1b",
  "key11": "4pLePgLmTBAijPBJj2kR7TpdRhpfosUPysxbXNr3AGEQo8pBTHogS6A7WFK4A4ChocPJVb9AY8iZ8UGtnzqyMdot",
  "key12": "FJ8ReWFCddr9rdSxNkQriYNqHpNJMyHGkfWcE4qKK5w6hbtpth4y13eLDsjkjRdhMTbhr4CnTYjZd5magd4E928",
  "key13": "5oVAnXVUS4zuH2csD3ixjvRBgvsTSDwRL6n8UWwnBszbdf7D56u6V8auPBXVYT3tiawfgu636V2md3duLr5qHNMt",
  "key14": "2p8tjznxQwiwuXcvSECt3Q6DAPEGrXW1pWJ9JdVbh1Z1pt48GiChrVgvyibH1wRMd2aMtra1LYhhB1SxksSwiBoc",
  "key15": "3XZtpPDTQkr6Z3E7BTzXD5x8cCayVvzbu6s8gLftPQ4W6z6wPuS9G4ygXYyZNM1b5WTfjqRDZUz6xhRUGMSeCRU9",
  "key16": "2pLW8yrY7oqdkMQxUqYZiczAXmgXEhbucxPaRNye8zLeAVGpxVqexDjgpT47twozG4xh9JpS36FMFtKe8rCTnZ1Q",
  "key17": "2WVAQR1DNF5dkZPZSpBXWesJVoQNzkjgibSwsU4EQfHS1o7Ls7Jt7hrmVo8PxwsoZ4M4Tc7teUqS11RmeCg1LRhV",
  "key18": "4nvAsfJeNEbbJD6P7aUTVVNZvBPGX3prGdbWiQZdZoWrobUtqawukJpiiUSW1z7N7Nx9WYYdxz5sy1MsRfR3MLp9",
  "key19": "4KDVDQG7xQSCinbtgANpStcBCQR6UUBcqnphsSKSWv2xJmmqnv6Mh2k9Ydtw5ZhhctYbsZKVTgHHxBayBxpn6XLC",
  "key20": "9JxG67fdM57EY76L6jjP6pwB8iZkeVoaAZVZzqRoAb3XkEdVUXG9Rvap5nBai87yDPb5KPjrf4vAQpRaWo8qUdM",
  "key21": "2DKATa7rPEKVtbBMZFK7N1ijtjRR39PijgKPHTx11qyYxRmVtEqn5CiSUiaCkTbuaHQfUoZnAqr9LHM3RfwTm3uW",
  "key22": "3wS5w3fyREu2nEkVt2fviEgGcFMjPwDCne11XbYZBtivtxKFKsgTdiUw8zxaW1SSPvCEL91WMyytS9euNuPe6cDa",
  "key23": "55sMRni1D37M8pw2b32nh4xvTnhWhoTugy8r2FWB17wvx3NxdG1RbtrepNbMRrmd1jnygtxL5rtKgpqw9sCWe6P4",
  "key24": "3jpUpTDa84dc1LLKpLrrRa92gveedudpwSSoSE1LvfS6gb66DCz2kroWN7iNNRyJpN4g4yUPnJPT2T82Ye5PbpHA",
  "key25": "5zm56tZgbDY4u2iXfHtSnSvUvusNZ2DTja8o2erdGPrd6Lh8At1FLRtCaBd88wuKk5gazfdvJPBhQ14gWjDfRYM6"
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
