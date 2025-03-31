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
    "3pA67azbyx9cUBvySBsDSCwiZ6eEdpqAdS7SVHxJm7P35F3rFEobp1QqN53cxoGDSBeTqj2uPFzG63ZZKRcGqRq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxKKt8gTF4FoPSBBy8yrvHXFpF6RddU5KEPbcB98CvKvQosHGgL9bnHrv1po7TTZdZ2vmuPp3q8huxyajmns9N1",
  "key1": "2E36KsFtgGMHqdQhQYL5TW5JzprrK3s5th2jH1zijqGbxKZipb6DvjrFM96qEuC3G9ucWHJRMHuT2BUDzMHZacsU",
  "key2": "2KbkrhiPwJ6i6dZKxyc3Vid2CpiLbQpfrjxR2vBvs83nJQMUxkSxCxmyhDFHQ8HRFr4mFhrTqojABum2od2UipE5",
  "key3": "4pd1XE8o9HjSyrtLuwdnhzXAdbGSBue1bEz1e4eb2QcaRf1ysW5uXS5vvYqwGq37nsacJckNDkMBBbDiq8HwvJdV",
  "key4": "Z4H787AeMN11nSxmhsEvSpL3wsSd6CXdi6F5SqX9MEdYL7s1TAMgMUfJVKA18Q4q6Yjy9wxcRcNC8iyY72GnM4G",
  "key5": "5ZHG3Rx2gNuBYqTwmZj43hmyENGxA2EpST5AYDXk8fsWMbssCxqyX5Xo7n2JxAio64UZzWQSZpY2hZwfdmHEjR3n",
  "key6": "4TwAGRZC6ZpWa1VsaSL8kuGSm9kYYWNgNd9ywpmn4Q6WFa8CmzzZKZzAhbmP5v3a1Ro17aJPF4XaxZzPBcihE97N",
  "key7": "3mu5ZTigKXMBEJ2DQPmEWZ9qmHw3ieYz4rii5DChFyAwhcLghp9qcSknTtxVZiEG7psLJbt9r1oPHG62HGrNPpCh",
  "key8": "2Kq1kMMZKbQQQKc991S5iJ5ZcLHb4cAhgTxXDNae5oQKxHyE5aU5vn9igv5FjYXRwzFby3h8r7aorDSMA3r5dweG",
  "key9": "2HBofiSUVe88HQCQfZpX6UmL7b6KLjqNkGxjLQytZX4oZxcCH4HNgzjRYhX7MKRGvJvBNXVUFiYELDNw7c2QYhzU",
  "key10": "4vFHMtSWWPvLQ8JYXp2BXQBmVbmsyvHZ4yM8i2Un7fVNX5DnCtEYqK7Z2SHE2FL87ZWHoDGJmsDFzjks2dnXk8XC",
  "key11": "KAc2oqNkiisB4CnjFCtPbw3CFyde3ryKeSPfTFTBDUvQQsk3GbDBkmKrh8j3BnCYf3XSfxSGDBCiVqeLhTSNTHx",
  "key12": "48Y8yNRr7sJue3kiZxPFdivzvGifGAmwp61TScgwriaBbfedbkaT6z8vgXQj3qXPvfeZDnjDsmSVdkEz8NHANqsj",
  "key13": "hhtJMB7bcokhutVMKNVtRcWgjw6S8rtVs6wrVdTzSttpuc1uEo9PsZm6bghxGHH4puhpqRfqQqp4g6v8u6Eue2D",
  "key14": "5FjPFYfkgXMA1LCZT4QVdtzdB9gkv3hHyyEg6w43c1ZpVs7iYLSLKqUBuXq3oyNKXqQDpAn5kmEftNeRHFwEurgn",
  "key15": "2FKAmZArKhnnqeTVfhgLXozLUjScwnjhJsNvUjdM7r9nxbRVvmpA4rj2qowoJQxRTN1rQnPoqn7nRe8ZQbNvAPJn",
  "key16": "2kH4Hiv64kowa3M5JKDBiRfFD9gqXUM1e9VVLq2Dczb1gStMNjzJGvR9D6N1mAnabS9vuYnk8yXrZPn7RFN6UQfN",
  "key17": "3mg8FGVezBe2NLVEwU1yrZv6Brb8FPgu6NSMckvWqX1rx3U4zaSHGXDdQ4hoiSJM1FuQvC8CWPmW5jgaJhUV4K31",
  "key18": "SSukyjUwss8Jh85cEJ4DwKCe9H3khahzmCX8QKaUXToc9kSzVawKhQmTpRbmgRvpKupq9wsGgPkNhMeoKtUKKE3",
  "key19": "2kwDKeGbrb95iXyYWGjKLnw14npaJkXVtYYgK4t9vfHyezZPgFV5mWFRGmqaXqn9MHfFWqWsP4uC76PeEdyodfyc",
  "key20": "5ajt2uSDJ4NjrW4mxpobhA41ZAc8M32e3dE6Lr2dnhSH1TX7jPfMDTAMKeeuX1SDG5PrdFL9wgcBq6Rw2c9nGizw",
  "key21": "65reUBEYVaACta7cnVukq3cWvVs9W5DzsHkPTjddshGh6A8zkxA6RNcA7BqhbwepV7x7DgqX7cLU6DkezUYTMLQf",
  "key22": "3xekUB4ro5EsjNg6uidsmaJV6TF2CwYikLbhL69DzMmu6aTkdVkFHZt5kckHJ4pNsy3zuEx5roKu1hFWsJ8FJRe",
  "key23": "4qpr6R6uKTk7vQ7zE1fPQCYQhBMdB6eN216pkUe5tyebiK7c1Yu6KNdCi11MWPPt1mRYskNgsyWeqzvXL5JdWqqs",
  "key24": "4zbbQ52ghag2WjRXMNuWZBy6DfToXv4GYMPBYXYZFWJp773vR571demgRoVbyE9G3bcwmqLWoTWeZFXygJjqrGEa"
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
