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
    "5EiKe8YLgs5s7JBzZx6DsFamFkyfoZECTrYNF8k4dxMsNU1QmPfAQAheu9kmgeHSTFP4c3HSZhxs4cHegAso51en"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TCdcjMQFiqk893hCCYv8LZQiDtAjejjm7UUoYLWgcAvLCRukUcbMBZPLAP3M2PRFQ3V8S8D8AkbFRoQUWrZHTnr",
  "key1": "ZhPV3mbukDa1AJysB27eZfs3YMhGSx6PS7P7BggUUMHiTndnbzhjK7GfJhHuu2pfpByJ6Uuv6joxE6Q3eiQok8i",
  "key2": "2dqQ1dn81fAsS8zLpLk99Jq5RkY7dUkUCPvDiRm8wmbdpYQTpQ6454ZC5izkS78AprhjH1CtHcSupnRi5HVuBxhR",
  "key3": "4uGSNTH1qBdpv9m54kGVXJhrn17QwRvFZ95vhs1X5hvBuMChP8ZpBePJskbPvdYkzUgGc6GfF2MZWJN6mcy1L4SE",
  "key4": "4645WYfFXuJcbZR1Gyhq6aaPGojLD5Cfbbi9e2XnoFdHsUhWGd4TeWmheN6Gu2iMEPcy14tPD7R48x5C6ttXQ1Rr",
  "key5": "65ZKiSV7zdZ7DA7qitivPHMCxnrcywQZdB4HsRmEwsVj6KDyuUCxMxhiz7QiSzD8CzLaRPaAphYd4eDMrLXKMXUw",
  "key6": "HhfsHZvGaXe5v81X2m8BvUWhV4xtr4KqkWc5NvLE6FkCJhrjTX2ncWx76nkjW7ikE5TPP5VPUVrfc2xiyFzevgn",
  "key7": "5ryLSdgvwWStWfp66JE7VRtN1ybFfAPwDWVUtkapDQ3ba8KfaY9cEWPBo4s7i1LrqPce7AMWDbT9Ge1MtLPubPgy",
  "key8": "Z6vay5vFypwu8o95WiarQbgvpFMccmWNHdyXAPunwPWw7f1wH7RbH6f95egREnsu54VpjVWaPFF5R2MK17wbUf8",
  "key9": "646vJpKanL5NGJoixwzP8nCPHYhTHUHZCeApnmeooKgtLFgVbJkA8aoCoBkiXRShuRTeugzMf1U5vxDW78sV4BBi",
  "key10": "4f8roKbRBMScK2MusrM3n1Z2wu22Dw8QFQwB5yvFj7tfVLGTNHPeWFCpG5vNqpeuYHkakGJhuMWrNr1uqK8hHDqJ",
  "key11": "43UrbkKrtqoGE9UN9BJATAwAFPpikwfpuRrFFKYmBoxvA4BZaYA7bNAYVtRiHXbg1iXwh1pnBikhudnGYvWs8zxT",
  "key12": "5iQ7BpBy4TzQjx4ka7Urdsrb5MfsGfnoH9f8aeZS1JUgoyFkaF8qYytJzdxRDZoK7yigRZPB5Y263AaAdHbujPci",
  "key13": "4B523hrLcDKbxEJKeb54sVynsw6yfED1QceSqyjxgEBH4gHbARS7y6XBhrXef3KREAyrjF2Xd6gUbzrPinkWUkcL",
  "key14": "4PZgNBHzwqZwRSPgFrNjcze3JLBP2DnZY3W7z1SYt9jkaAReFhNaHBvxYMC99ZGpkKQh91c9E7fuznaha3YwhkDm",
  "key15": "27kLfoXBzR5P7bE9aKCrAHHZwGhkvoiqetKbyrGZUtMReSHtqQJjEbSRMujx3zQEE8Ky9gWZrTg69yHFHtWWb1ML",
  "key16": "5gLEcAFSkwG6WDjvhfr7eCDq1DSPq2dc6vaXnQ6s7eVCzeupNRSkQohpsFJvR612r47qSKFsHXoFQ2UwT9cxjRen",
  "key17": "C5UbAKW2g3czpupjN9fBVs1nMxt2CnxNEdq4BjonP8S8yDrPY3FtjckALNZBejGvgSjj2bYqvFrQuL6tRuetNDn",
  "key18": "5mxqxbLQDDEifNyr3R6iN4rddy5QouuW4rbJ9z4fDCuCfrBaKSCdzSPUzQqHVXKi4RkJMyg2eBv4pAFtKNotXHa3",
  "key19": "d8UrsxvCry7sYcT6vQ2WXs8YEkmmR6yvjpqT8VhKdrQeLVnhVhdb7JLdrbiJ28xU7qn4761g3Nb5oCPkpN79fpJ",
  "key20": "3BscJDhAgVh6H2mD1MB2W3Y47vsPYGrDCvwGdnwnBVt8N7tgKY4jYgQDwBiJEvqMgXD1Hgz95pEaA4TcMxy4DNWa",
  "key21": "4Yvgrx9w1My1Q4QwsAunMNpysonfefgJYfdh2uLz1efpMW6fF1ChoBjhaUJZuye8GYUr1rbL375yb1DYP6cWqCUa",
  "key22": "5XjFmbm4h4v66giQS6SdzWXKVYaN3qUCsmYmBDnox3aSkhj4rcXrt1FMJ9xYUkvKdom9DnrmSB5M9mosvobw1GCu",
  "key23": "3BSvKbwCgqqoVFBYvtHhTovfmVchaav8GfVQksNemqy8RxfGy5ibUCCRxuijpSLWYaZvLd19c66fMegegY2YpWLB",
  "key24": "4u6eomkSxStHmL8vmKZAHsWwuh95JPBqgeLrnbcBmjqhUep4ZsdsnnV9USdZFuZEkk3sMrR18r6591ZsRrTa7oUY",
  "key25": "5aTwnJNNGDrm4nt2UC4V9yFncMVc4ohN75rEc9hNo4KMiF21Z6wNVRRf1gQpVmFXFJFAYB6m5e2hViKHpg996DnL",
  "key26": "2gY5Ur9WLrhAHPzVBkeXEjai1a3Jd4H9ZFa7dnQh9r243LyQNf7itb4iTVR5LFLpJa8RpgveE1xdd1nexoBeGr8U",
  "key27": "3yf5buchCgznv35oSuAfSbzssV9qK41PB4uTbtZuUrvAQm6eomRTHryBaTEmdisLNzTJ1g36sffxXVGtDdezV3PV",
  "key28": "3YqdCtxGB4iz9sWUGx7a9o7PB7uEkvwdX6hkkHtpPQDqzPtioNgPwUEb4ih9MFqtcUcyVcdzKMeX9aVcrVTf2si3",
  "key29": "QgSVEKJeUZNA6AXRKJtiQyh1WZBUJRyqv7U8jTV9R7kArYocw6ZvysMNCnuUKD3J8NXchRDYM8wwVtG5TFrm4Jm",
  "key30": "251YjvxbzXzWEgJbycSK4ZrhMSGS7x3cC9jiKFWgMM8Bz3uihM42xV9ypMwEGkQrj7uHPPoTuQGyJUWPUhUczN3Z"
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
