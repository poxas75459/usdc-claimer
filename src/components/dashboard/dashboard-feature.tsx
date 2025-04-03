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
    "2UsRD2MqYHsJKK3vU3sJdZYJHA3LoU66Akg1wiK4wziichVzEyYrwEaJJB1S8PkoQX1aHzhqc4ZYDwrTP3p7wQoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4ydR5vumQPZUAspLxLKvKKbioyUfLH4RjHvNXE65oSpsGHfZRL9MtLPEgiNN4cd4kYZwRHmUL7KHs8tgDF5Lam",
  "key1": "GXWrhyg4xw3cGVGZGDN5JUyE2rbf325o3opkskoE4GDV55jfPPwxcX66AMYPQNdbxRLohSiQ8TgTE8YtuT3aSwP",
  "key2": "5di51GosTktL1pTfzeE3rMtDFxWRZ88zFfTqib7ELke5jkKrfZ6i8qE2vMQSa4coduuPQ1asRDn6uK2CLrYBTeYM",
  "key3": "64UAMTPA8T8LiTtckuQ6L865RB5M8kozJEjmXjNN1t9Zax7GmpgA24Ev3EEhyxc9sZdSnEUwmh8LyoVwegA4Bnt2",
  "key4": "Faiges2Atnn67DRpf4Fw5UVXLfocw4oNtCeGTgytJ5VR9HixjQqHMidsut1L9qBtadsgJr7F8ABJPtgzxH4Uj14",
  "key5": "63SFJ8eTcmJvjxjpQkGi9nogemre8FYfRW5DLYv2Z7TA9zJ3zc4FdUzPqA5iotNKdRZ5ggU4Eh27e4qEoeDvraws",
  "key6": "PRjk5dUzjBmbYdrpWF2RgCBBgsmVq6RwGA7SvQDHmm3WykJPa26zezufU7h28T1yZcerQuc5UdvcrS9BaqcJ8SM",
  "key7": "3y7rfzLQ9PhnjmmKqeaVmRtuQVEVLvGxKpiXJhc8Qj7RNqmuPUBSuPjdegrK64ECLjWkwwY7MoBwkKq6EnKvxomc",
  "key8": "3o9BxnodeBhMCQegjNeoiFtSZWouW27pH8RijXZSKp164mF4Mz5msXGrzm8KHTAWHTtYaYnYUSm5fMxGGS96Hzcg",
  "key9": "32sE8ZoeSATdoSgSgghadmwLjtZN6Jy9HrPLzBgBY7SR9Rhx494YsWR5jhYKr9mqGmSpgSJaK5TaRLLs9cqukcsx",
  "key10": "4hKtg3QdrLPxKMBDo3yZcqzsJcQWspSETdtMzmQ8uHwHnMFRk13vaS1Wv8bQu9qzLBMsPzQKYJXKSrjNKL97GtDe",
  "key11": "3yWHuYUDxJCUecj6KmrkFRsX1aP6JuFDMKm1mnCvq6WMY3JLdLcmYUfWn5sdahwWkP2e3aUHFTSKHcVRN7vQPnsV",
  "key12": "2Akbq2uPeRCJX5cPM1tKsNeZtDJ3fT1Ms13wp6Vw3dMC5XV7VSvxKiSDpSbkFfbPbWKUYxABPUKJSMCURod1XmLm",
  "key13": "33sXCcZxzrpmpHeg3YYaSdzpq4kKJAF86id1mxJvQYJ4V5CznVjs7Jn3j9TK71WDjoqHVJnNHffoB6XXPKnE3vnp",
  "key14": "5kaudTR85Pi2fPAPTTNn5cd2LhpUZ7c9sf87X7pfNcFfu6u9SQoe24iEZdBe8xYZV877Vpsfaw5fi77zjCCP1E9J",
  "key15": "3xPuBZt65sPdsaNij6FdTkm2NjFtmzG7JsjcJMsrchE3ZUaMda2eTJQ262TJBu9XmUxL4bkz4ULXozcXDnihNWUR",
  "key16": "5yNgFRwqKbhD5E4v4SLAzizcQP6348dZarRbjU2ipWSNisSSvHYR6DWqNmhgS5ywnt9WxYo1Ttavt83KJPEXMnf6",
  "key17": "7DyLw311rqsZFKs5JVELmmrMcMYFv7zTJ4Umm6ZNNCnYZm4Rw7ZX62CRifyA2GF2z5MEUoUv5o1SHP2c4kaCy8z",
  "key18": "58Xr6yFgphQim6YED4Fe6P6ZE6ZUu9jfDm58JJdPqBQdNn4wrScyAWpCy3Pxo7mEABtR1zVzbNi42MwUCQLWr9pX",
  "key19": "3u8YN5xRVsay4GnfFz95AJ9GDfSPQdk1oCzZyYQ5AUCTjz2VYsW9HvBFddUediZgVbwB4rbbCKnwcJZ6fB3vnvUT",
  "key20": "3TPTeh3PuJs3qkUkYKCgipMFi5wdLWHLQZ9V9FvG5Cy59Nngu5iX6LAZi4ZtvYJhY266fkuTbjGwNwwp1kp1mBpz",
  "key21": "22zG5FgG4wAarXwCRH9aJf8TXX4keiK7b4oG3UvRdcSEdpp7AWUzsBFPb22khq5UiVWqWJCw2kYD7xKRAhfTkAWA",
  "key22": "52tbnAkYMAXxvLsYwbgytBKDKKcWNF7Ld3yCPtmnTgwdGt7wuJcqgSvHxnHHnPFgXNLwrc3qfJjbMry85CLxgbkz",
  "key23": "y2BhfcxmKpVEdkUrLynEvJy9ZGgtUerTN5kZjxx6rwrosRYXZy5tk1vhA3NjQePSUzWPqYvqX7DzjJsbPMy2Qx4",
  "key24": "N94oWcfDZBfe5pdWMhq19WCet3byivdymShLQzN2w4nMQvGXnWpENNwPuTedY4j39wUd8hmiuGJWWx6hy4Bb6aq",
  "key25": "2gAMKEncg3BtJzYZW2fvHsdfMpNcaRtswiG7cip1N4Fg7rj3eeo6PYtpeQFSJnbRvoRS5H9JcTymzj4ys6tV2cEk",
  "key26": "w4H1WQ85xwB5LR6cNH5BkokJJ585aArx8WXndXa535xnkxgapAV172doD4Z5emdTKarE6spdeP9QQiRWXcB6Hah",
  "key27": "3NSmQeRfMffA9vXsziVqj1RNYmYwZdnTfZEaSJgVRSEKQhDiYXqFZuDcFFMKoCBocUsNF5WG5hpn841uBJujzs8Q",
  "key28": "ij2HqmPwnpZjSrgqJR22XZU3ha8trHRgBmDigzLMm3gwei4W2D1ytm27DgbJfDLVkZWi3FhSnP7zLPFpPuN5EBF",
  "key29": "7nZkMWdTrXM6a1bqX7JPUKYPc4VFZFfi8Bx3CfphQTTvmk76xF7Uo7fBT57Zs6dsqVVftWiRtf9AcytHV8rzjuj"
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
