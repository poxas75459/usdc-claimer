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
    "4M3uA4utVZT7SFmhsYiGYWZ8K1nrvQ1NzxeeXpYRig7zpyxFbyqpYt7qQeiDuuw7JZjpAw1KVh8zxypfQmMhGNA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1XYTBe2N6B5xKRBL2U3jsgUoDGHfrgA2TwFp82fqPbxm2CnVbemEaVFqX6RNASxqoNcEBvqyH3X9w4vrYWFqQE",
  "key1": "39SWqsmijJ1c7YGTBcDCrbDkk5PaCVctfV45MMBo2GKNRiFbttvBuHunCVrp9FAWBpNd2J8MPaXAtEi2ekv4iVaW",
  "key2": "3w2qrneVuzgt2BsjrBq1tVkJJngarrpSXn5h8CstPdcRxWCh9tHAnM7NTzJv4Yo4vbs7axFxm58TH7uFusJsaK4L",
  "key3": "3cm8kxXk7jYainAtWH1YjfM3bnQV3g7oxSm5G3sKqaLVve7D6MJHWyAQscGjYq57mGQSvJe96N5NLuMdBpU3V4fM",
  "key4": "4y4g1zfaJA2ub8G8RBCuKs4HNPaw6bm5PMQ37A2V3N2VudW1jNJib8PEodm8sPr7MdS3SquDBvTkmCJtLNob5QBe",
  "key5": "4QxXaTs5GF8A8maMEZPxbFqy9ndxGYixKGuoVjXP1NQspJNMrdpMbE6iY7LXa3TJp97Rz56uF2y1noHWcqwUt2aR",
  "key6": "3wDgek3emeeqtXSjpNGFZAmE9iKzRfYuMiQ7fdfwuxUxzLmrMLGPR9GcP5DitNHwg4yFxBq15b99iFuiErs5V1TG",
  "key7": "5ff1FLHUtcXSQfn2vxKz4qZjVDonVv7UQaafNWRr72ySYShg1pP5NH7mHJsct4MyJRE7EBLiajYSmV9Yt3d89m2n",
  "key8": "NcToJ3KEbuMXi25xfX49q3Azu8WH1s9N7MYNcSjPGb4fUsRxQKxQhip9qz6oDwaVNJ5mmYs9LLdpcGH4UANJVBM",
  "key9": "UNyLxeadihG9kJF7X19qw1FbySNYtAN7BNtMTh1AryRP2a2MHa9jYeBiw5Xu5oaTAsFuURhdToJQUPUtFQuLSLV",
  "key10": "5Zcpdm5yMHf4ynrFzPiNLtqW7zJD5ntpaLNxUBtdDLhNfHiVhKmGzAULcwrUcciJw59Hm23DvvErsNfqTDeK1meg",
  "key11": "2bGnPiD5739i9djHQtkE97Tggn2xx2uTNZawgggthNqDERwhvxit8ktbdkRSUztzHEPsxtRhPfFGjTgNzgddYujk",
  "key12": "tcmYisTZRd6X5msXNmAi6WPoXvmZ66pKVxALqyLVsnPeMRqfs9QWFH333oo7wDF438CcZ14tNA2KSW9v9zPycmm",
  "key13": "TGV4KyoWZhQptQ3d3WKyuWb6jyG5x56bf5DQi21ruHUzKKCn6DEPVL2PjSfEvQgK75EK6AYKHCsTPY6ozdCMRE2",
  "key14": "2x4VvVnZSbmVygexRa1ZW3EbsABPhJcRdywypzArkYgzFSoMN216XxVotmLYeQDF8VYwFueYEb3o5mnuQ2FEt3vy",
  "key15": "47B62L4AcKWwDkHzXaAE7aE3C54AWFP9XSV1yHLQbxJa6hCHX2QKBbn1osL46VbFDDLVeLr8xtHfkA2uY7hBwJRo",
  "key16": "8jrk5dzRxTxUQpRtCckwy1j46BFdoVKEiWybspzcDF3F2WkPZ3yETzaKwdqRLmwSyYjNyuResfMFr89Dchs9wrr",
  "key17": "3YgCHHvQSUow8bfib3uA7Y8rGAxT8BgRccimywuAjeSXJ9rZjFKP6ED2eVhX3iuhn2iZgoc2Qe6dMLmjjuHp2JDn",
  "key18": "3YLXFeTSHKcdCZBMSU2sTNbcQJKmyDvHCKwFjLiCsHiMifWfhWFEhUQDZ66FF4v7LBubkwb1LfpYsWuYeNxzotBB",
  "key19": "XKbtUwKVfMtypipNTStXhVdH1biqYW6rFiXrXpM13AeeAzz6v6ePgijWegs67iPppB2eHpcJGZXUDQWKTC8iAK8",
  "key20": "4MHfxAAYw1tJ2P5jkeX6ik4zVsLM2gDg5X1pL3q4PEtpVF1NLA7QBB3cap1iZ4zPKrKa3WGfN6FMsKk5XEyLxdYW",
  "key21": "wLekofGAyiP1e2SEwny5GWNnNkJWQAGuXqi9PPFjAUkkXh6jNGcBSrLQ9fHGyy3RMT6rudrkiUaX2gjRjP4st95",
  "key22": "5vNzq2rodH7tqsZByG4zovH8RPB1WCPTbYKu4Sz1K4coz7svdUXqKB23aGXZVpsbGbFSCttMnS3F25xAR7XHaVCW",
  "key23": "5AvRd7z7cqTaDLxp4TfJgVh9NM6EDwSm2qrZkpKWLNhE63kABjRkJmoRg56QbhsA1yEyQiyN7soHNhBC8tnY7p1y",
  "key24": "46r4wct5GoikS4kKfo5VKsbWDXrygGCAgwJAL5cGYQZefe1EmvsZDN1gcQbg94t6a5MmLDT9UYPUQPVah3L4ksFg",
  "key25": "pt2RDw132hc6U85WkqsmCWYhuPQ9qiZFNzs1HA3rA7hBW9pzPRJQFqiqcn8bu1XtSdG4oGVMinNqPySzeU6vxjj",
  "key26": "2iMzk3wH6Cexk2ScGPg3zcZsv8PCFgninoetWvYnndGc3afXmbyxRxMEf4S5BVyPJsh83UYXBE8jvsDpk4azJgcM",
  "key27": "HboGCXuZdjEqmbzbXQdYii8VrRpDhhhCeqWGsHqnZy48xFuVJjDd2EbPV6NzVTMeSkwFxbbfkxruutEnEowEcf7",
  "key28": "2v2rvJJxLDRYVzGMaASDBwTPxfKhPUstG5CkHb4cNn9uqsZ8QnRPm8ig164z4JyJ6SxeSKHuD8UNQv1GyiWReQyf",
  "key29": "64hegicbKfJwgGazM3woEyqGRmdSnVZYr2LBdSmgQLqb9u5xfoWDUtooqpKHATkFJJY4EWF2678LEF1uhT2WL8R7"
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
