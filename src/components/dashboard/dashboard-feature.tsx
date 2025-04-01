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
    "61V7DVwMuqe9C15MXNTcsNa7DeiK6dtPdiXspGBHTuVQQAQsukHx9ZgbgAT1koDaSvubAa8GazFnjJpZg7U3PQUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PpErnMKyfk2K99LP4PJykiq48dKPh3Da1ZvFEJKQydamXiiZ2NjwN6XubkVfGAS1CbRfV3KHPtMW9kuoBHk8f1g",
  "key1": "qVfUL3zvKu7KDrXdyVbw8kp51SPu9X4f2TMt9Zs5kHfQpEgw5Eww3xQm9GXRhaqQSSAks6AFynaZ2faWJvbJEcN",
  "key2": "4S6qm2V13WSAcMERm4wt4tK7hb3ow1ibj9uU2YvPtu4wDc6NfhhiMKfsmvYpBkjyBkuTTiBhUxicjsCy1mSijM3Q",
  "key3": "5sej6yiC3EninuoWXsGMEPEPynkoTj43JDGxjV5HLJ3JdpttaaMCifWFuKK7KbajWgPvyjqbZYU45YipWQngpxvs",
  "key4": "38YdizwXe3G9YDkwUxEQg2WQ7HYtRkuXPHiuLYhe4QcerT46K9QMGqyi4An2bwZLAKeZ8BQbgUoHazewFY7kBjYZ",
  "key5": "SquaAWt5jTr9RJGBtDLMMhUT8pX7o8fHeagnRBF83m7o6VasDuiSe9vYHApkMF791AwUERZ24BD6QReMomQVj91",
  "key6": "NXvM1fvxaJNVRWo7JE1xEFQhoFUVdQQmMUyYNKHfMvkCd1YAtZwQ73j6tnqsaiKvqBjWy6KquSYvK3VeC1HS5zm",
  "key7": "5Dqxuq6zkVUTZPbvQUBdYBVUEFgnrmb7qw2ZJBRhb1r4iWc1yPVqCTQTvC6F528AGVjc3RUEpBwXoxBoXB3Wtzvf",
  "key8": "ZpZd5pFTDQiE3S51yCsPbW74o7MeaQWd4BpTPq1nCb8wAfVaRz7E3w9ExkpzAfiHTSp2QvNNCiKsiPSdNq8H2GJ",
  "key9": "3xLrxmV1kWDJPHcmHpRpeqhP7RQDw7QYiqsDoU7kyhYCvdne6u2EVjSpNBmyBxnuUbbJc2Cc1jHmvZSrhomLmVCM",
  "key10": "35sM5CBsBhL7g6RDP2mGXZRidCBg4JUsLjhgrreS23phKhAK2vzN2959iYpZKu4hHXexHKu2WRjRtarzuQgqL5im",
  "key11": "2DYXpTK8yRUJi5hzrMzYXs2k4bPQ31RhyEPBW9yPgm5ZTvoWxE8JZob7YsZdFML2BSwfgYg7GMCMz8cuTGimFEba",
  "key12": "4PM9mnkmCVAFvLhPN44pKa1eetbXYN42x5xe4Ta5NiTmQ4chhfW3aDe3jqqz3xwf24Qx7kTF3HySU6nwRUpM7MKA",
  "key13": "3zZxMt3hhSd19NxpjhSdGfcPUpoxrr3BLXPUEs7vUAe8vnyq6mLFkZP6HuhgFPuzfye7uuzCu3ax31nFQaESSsaT",
  "key14": "46uAd9Lr2xuSHBvVp6NBH4exNKR2gKFXkETon6U3fUDkiump9QkZGqYMAm7CsrYdBnPJXsyQAuUinxqbjXmUq25v",
  "key15": "5Dtg3SWQURFKE1rTbW35L221FzvP9xVx2HB8cj9YEwVtcFhtLRsoCnKLmEYps7jJ9UXEAqChPLjoeNS4CVe64vhB",
  "key16": "2PbPYp5ER7FhuFkMSWFPR1WTxxj9kxcC6VMW1JrprQUvHSkiNzdpaXPv2k6oK6vFa3pK2FuAxtGZXKTHr5YZwwor",
  "key17": "3U8imxuMo2dPsJ5LTt4AVUPvExNtBtVagbyoAwokyXPo3TV2UrMaXpQKSFVs7zUCDqrWBrRF2iWr7UjAbWsvcxRp",
  "key18": "36snHcuDkUjT2sZuHGE2aawDXH9DJXr6nWP4nkGf2NEbt7pdk4a2yHCRDf16pwV6k31twyZFDUdw1ZyADVx4aTgU",
  "key19": "ERUBL32iZdddy6bQsuk3hS5VcE9cjySyDYGdQWGeVhmUvo1Ma9mWmvTSgovMquEi9MMH8hMhvg6Rf6nvb1mZekJ",
  "key20": "33Dj3V99TLYAFmyeHUCBDhvx2TqnYwS7sPN6x7RQm489hK2731hRKVqu8LBSbP9DokLkz2zmqFYa7tiiPXykwGuY",
  "key21": "3WifgvLHfdj6ErJiKem3CXxNLFpLz7RreK9G5VPHyjAzLEudWkypWEYnepAne6PUNvqVRR4UoQejVTXSisPicB44",
  "key22": "gP4BhNkAeuoN9Cbz7NKhrNgRM9ws4SftcUNPKJZvCxBSjJtGaFvYiWkCJdnd4r9x3Zp51n4V3VPqWcaPZfxDX6w",
  "key23": "62YD31h9XTXTEffxs2B8MMgo6d4pF5CN51RYef1nAHmezJd9hf2twSmWDivJ8TuCdVhrD5BTU2Sn1AzMm3F1NDge",
  "key24": "4A3axCjF2MZhLoMGyZa8vtimjFTwK69BXVtfzTkwcDDATCjq3DqDg5bC2BUH6GHLU48wz4keRKe9rqoZUj3UQbM7"
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
