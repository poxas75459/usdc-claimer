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
    "4FtNH7kaFUdQpkeUKi9woLtEm6nMwjUoTjR1rsy2miF4Nd2MBCe6GyNp5hVTdipb4YPf4cpMgBspsuHzQnHV72PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QuTo8cdP5EahjgnEGfiiy4aFBpK6xZeBehSCeQvVsSz16DJtZLAryVPPMPeKn8VJyhSVSnxeyYW64NJW6rbHMPo",
  "key1": "3QiRCAmEMaVWhMqD6EqpAo4MQe2aWdfztpcDFH9pBMTvk42YXYtkn4B8hPt4iCGHTzyqkKvDrAG5kRDRULarJ1Hp",
  "key2": "vfTGX9r5xHzsmke8NCmWFZAGbcfYtfjnu3FDJnDMRQrKNUYYqQhVMFSCMu1NKYrr8o5WfX2tqHeRW9z6y12MwzU",
  "key3": "4qRCPiTmXyq679TSPsCfHdKaTkyiZqiLCFejRmpDaLyPCQfdEtp5tEh83jx26rrXpvM9ZDbXC28Uhx44YrH5Qzur",
  "key4": "55dynUC8AJjXz86fdyncwo3JBVThokdLzxWfzk7N1eNaRMTyxcxsRUGkoTnC7nHWQbBMF99VCRwNdM98hjZwn5K1",
  "key5": "4VreEy96CnZRvUSAfhkznzby9StZedqHYjkNDsTqRLGx1NHrtMRNV8G4GHErzM7h5ZYir4e5H8bVGdkJ9ZhUnZPp",
  "key6": "44hWccSxLghdM2ZVVSUiLE22uiwcTnYzNevsKkahz1pPTJks1wULCpm7jzwVGQd92KjTZhbi3HsegXGaavdXAL4v",
  "key7": "LiVEgv1nyVUZCXZAFZBZPvYuyuVxm8N6RaEvimoKuczGiEyJqv9UFf4FMCnoMFBfZLkPyNqRaYm16QyJR3jBU1V",
  "key8": "5vTfRE2PtSKszGf2K2L1cAxTQKD1Zx4zu8hwugSWez5PZ4q1waT4rPzphJoyDWbM8bUgrZx3QHGM9kxHQtg99CuZ",
  "key9": "57PzCH1ASGMwn85qf7VL6rnEB4EmdyXADvqG2R2YeskJg2s2YUfbm7nbMfwx7nab4h2agscYddLS6Y8YdZN26uwA",
  "key10": "4BK1KKRCsQkUPXSGBtTz6ftumYrchHmERQNHNb1jQi6KVM1jhS9RGdwoizcpsk9YdWKxxyWtpq8DKbeA7kuCoLLK",
  "key11": "3nU5M2GhaW1f5ZxRe1SqPX2HFxDFbLnWTEeYvwrjSD4kJxyB4ZFCoyqaYBuAwqXChHXHR6nMViSLfREL76VbRNQT",
  "key12": "3KmCFM32HuSZ2a5cUntprf5xqFeXBWYX7KnDebNixXq4VCgJZ4g6Dxot5JzvFLvDHJyuUiE5z3UuD6YFjvwGchfa",
  "key13": "4bwMx76xtGS4YZsCLPkcqjEBzRSm2J3VJzNQsBop6V4eCFzF91XRZPNzaBfYhMuMHiAvanpjxJv5SETw4Vn5Nz6u",
  "key14": "5sKaqMAdtr6cngFFcJhrQGmzvofdA7HhXvtFr4Jdt4QVB43CcwMspos7aesomYVwh6M98Zgry7oWyUsCZjVjjMDQ",
  "key15": "3ndj6o1ocuj9eXEjHQWH8QjvfP4gHdLcTr21MHCva5JPvCozFoi5XL7LxCFsmuEkTT4SmjKHi8tFMpFTwJKeQwm9",
  "key16": "2wSGYPeNN9LqkjqHiujqyDQYRqRR3A6c9sGxDTXUbTqRQyP2yEiuiRPsdsKwjL48QfKLmj5nKBkYPWJQPaJZHGnt",
  "key17": "2NKRR2AkacVDpzKpQQsTDjiWvxQEWbsbf83R9defpHxUVYh4GQCfUq6EG22Kp6BrVJYQeZMX3LHpSg9QfHyP52dG",
  "key18": "2y9UXZVwiTGnhkDbR3TvAFnGtgQEMAdaJJciLdNR8feqfRqbX4HR2r9iKYRti586sd78adJZcdPzaeCQJvp7Y8ct",
  "key19": "3HdFqhtVTcfw7F7e2vk8Lb8pSzHAc44FRshKbbDyG93xh5J4eDMBMccCrW5cLxYbne1qEA89jWqiWWL5SB7Jaxsz",
  "key20": "5aMboNBuh3cBvv73u8w4XVhgfCqRFNj7x3r1atrcMPdaKUm3UcY9vDWM7JmieJJbzjfxBsn7V9hLWutjbeb4cvxz",
  "key21": "2mAGYGapHMn7VmyQ5cF4SUsM4kX2N6SzabVFkJkGG3ihkk4GyNnC6whYaYenwiERwLQUDSURQHXNTxFh9S2j4xmk",
  "key22": "5YZDfGyNoM9fo2dwQAaHCErmbAqLj2XFzUqCruiTTDFGkGfvgC9z8BrPq4eetF9jBjhgZB8hWikkkrNTgBEfcWnF",
  "key23": "3hbm89dmJSTamWS4hQA4DvT5MULnqxi86p11qKb2RrSK55BG9rw9Gc357KNvPPQCBhWaMDp5VCjzX1hXSS3i7GkB",
  "key24": "4LzZGJf5dESrt4N4MAcd2dyrkaPGvxBSBXBptSqTGmpG7WKBWM54oEcBj3Bs3ZjbLCkearNtfVYYrV3J5NH2zdpN",
  "key25": "wrX4CvgYvvktVVoprpc1dnvGYLyVJ7n3VNvEfLq4qS4qatLd9mmD3jtYymm49xk758V2k1H4RtrXjPkxQSo5x4o",
  "key26": "3Ch334KZCkjsbRD5t8wpfc62x5MNcGbgDsNmHAAF7Y35xA62bp8BWGbRZUUcrSmvkVUvK58n7FwWTnFwLm9SETDS",
  "key27": "4ofsvCo1cCBtrfhPAmePRWUipowWrvmSTmkUJiPFHSrqZdpf1jCXVhfqEsmVAuPQaqnX2mcZQQ49e6PoF97gAX6j",
  "key28": "ENFG2D9s96PjLH3ZYXprP8JTeFY9rVvMoxFrRREJguZqYXA7189A529VQ9DmNPggdVK6K9e6pZQrWVsHKwurGZ4",
  "key29": "4JRJLJWA3z1MMyqceMYcSrzcjYcvJsbXhAXxnuJtPZGyQKRKvt7DcThVazKTNgGETDV7oaUi5kV7qYuS3FNgv3yk",
  "key30": "2DR3aHpKxe9K82vmVpv4f6UMYAgTCFt4QJ3zrn1W5d3iSxja8gQFsvS5urURxqymCvGE3eTJFMbUquXyTyqXcsjF",
  "key31": "29bqCcnHc9v7Sas3oGcGVy8mYZhvVWQbicTZkiB5WmV8GZwynEc2Bn9Xt8yPbuDh2zeHsja3JrSpzksCB6GEbVd1",
  "key32": "4HvqKy6BF5vejqi6dW1AxPuCYBTvqszDzMBLTNQTh8MrczKeBScFLb4PXacvvY9Z7nxywVc3kAGGtx9QAggti8py",
  "key33": "4kgnU65PHK9t1o1oKgHQ4FxVYtq4fEmDhDMgUo96BQT1Rf7dtcTaMsWP5SNuRyBw8ScntZSQX4HYpS5unUgMve2x",
  "key34": "4K9MPtY38WYdyWKq5No2Hi7MGXMJkXXh9NLa7teuHvPhzfhCSFYkDRpTCFJjhkTiqS64xpbpoUBuhB91UxL2wz9e",
  "key35": "4qbbtgMVLDFZmdXoWMnfvEsdTrSWkig9NsQL6GgR3qdtH7JgfuSWuQ1vf6fLxUSAKXP4a2apmf4kzUgdRXqaFV3M",
  "key36": "2ULfA7oRBo3so2DyJH6BxyB3kokNw8qWDJBRZsXzk6qtE4WgWHLcu6UGRpLoBKAqcbi7Xi1zidXvhSGF3P413NjA",
  "key37": "LnV1jSXTGhfvuD6BCSf27cBYvwKDbQxUSvaZGt6QdYfK7iqKb6Mt1jZDZDJbwkV4MDAGvXadHyM8ksBYGPiBseM",
  "key38": "63PNzA6s771EAQvRSFhSz5PwrJddLZiKkt2g44kLZBhGf2PF6zic6dbQ86Dj2AuoiUNkUFzudXxfZ3m67RJxLScF"
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
