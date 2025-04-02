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
    "51n38SQYkRnUd2EEP8zgd7SivGrrJ3Rzk4VL1nqPkdS5USxRhcq3Cj5DM7LFcKDZaEEgrpx6VQDdzsfYfq6UKmJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEc1V96NV7acW2hHSgDKmqAx5qLhVwYC5YMKPdwhm65qCF5qqjq6AvD1KCoz2yL47dAHnLD8UAkVoSYJMsuwda8",
  "key1": "QYbzihnhqZM1QXQQqwfCr64BzKWyEmrfywMy6HveXr5ZVUJJk1FJMGsbVda6ANaeD3ecQdvm3iriAftu1hhhkQt",
  "key2": "44MfCem7TF8XE2omJzGczmF9wSBS5q7pzJEamwncbMpn5RzPnZHRQkHxXyq8jySZSYrC4goVGhoj2RyqX2pgfpqk",
  "key3": "32e5gpTPJSFkA7NNg1VS2t4KSM4cEgbbHrGiDJ9WqJ1c8SLi7aD5bkfaKW3XEBq3xZRrqqZYMSyaXMsxrWCSPQ5w",
  "key4": "5NLSJ98C9tCUYhGesBh2ysnkUAx3pinivaASYb77xy5YX88TSQZ2WRKgM1T1aLABkkT6stV9JwM6qoVRE5GgoxDn",
  "key5": "5yRZtgBeJxzXZjMAra3n9WtKh166bWTgJJE39vaFJyBiBtcfpN9ZQbFYBC6YSknY1WsqfpQaXAKfsJrhH25R6Kdm",
  "key6": "5QTZD2mArDSNX8NeFcqryR7XEGSCrBXzFysywoBCZHRonC6T4ddyYUP7DjZhKxNuf2YHrVb1JqtqPu7qXAMUYjC2",
  "key7": "3piQ8c6fGGxsYNnEWZwcVghDEhm4sGtSomn6Cq1RZrEXmSjs3oz3krPWDucy6dSkCLdxBn4T2heGp38mGVQfdmQ2",
  "key8": "CboHHfozcTzYYDgMrsmr3zUo93gBTGRut3Ax1mUEobb86EzTVSTGGik1vD4WV4KdVy9ic6f5g2NjkjCcvz3vhfb",
  "key9": "5YjdDpt4JK8kLN2nKxK5y522Ls3wbZnRSx67s5XwXW3qi116iAKoFQaCWLyma4xT6xPmLVxXepve8M6rkWa18pji",
  "key10": "2cBkgoMmyRE7rQaKbrfLs4BxTFi8HZV1edva6DEfJizHEJqgFvEGjYBMnAqkK6aFMfcLPn6WgQJxctXN1s8YbRaW",
  "key11": "5Ywvg7D3A9PVYQbzEBqaxmP5LACKd12YAxCmbLH6RYSrxhcYaQgF6phDNzEsT6ebFW8QE2dAUUGM5ey83o7d6o64",
  "key12": "sLRbsPiwfsHq4imZLRP7hvw6Si6joA2sjJBzcioTc9ReRwkxp6ypqnAqd3YQwR92RXndtSzuxiHmSoPaJYyZQQJ",
  "key13": "3KyVGbBWR2azFPxNU3gXCAc7FdDycLWnVzaN3iJdjCy5mvws3n3eg3w7nScCunJAtng75c31put5agaFp5AUigp9",
  "key14": "62hfrekC66dEyd4i6wi1cr9Cy1E7ukuRYNE3Mpiyg8EwN3RmrarJyXmssAx2riqAEfAw4JTCh3LCN9fqha6yk5BE",
  "key15": "4yh8esFtvpMr1KvmFS8V3XNVckCXXESsEirPXccudDgKR7GqMEWcxYcDqDnFApTkvrWanoRsDG4amcR7ngnuEFYd",
  "key16": "58BTZZszPhkvgapJDrAzWcpgvvve7DbzzmnfpNSMBiXzWDdsYdevc4eZL84XVN4qYREPTKMkiT2ud8nDQzw5tRAv",
  "key17": "EPhYkcQuCuNktePYsemrtipYUmudtnY4aogBTuMY6gxPkos2vgCs59iMUg8Wsb7uiFg3Lux5s2j5HTzSU4hGZYP",
  "key18": "HecByNqsEw2WMBArkatZ6ayTLy8SuCDWbjLjQ3Lm8CbocRzs63GMKxYgTADkNgMDGGCurSy5s4AGBrk46KASP28",
  "key19": "T6VV7S8uNLYF3wnHGgX4dZGtYYRrqmL2cWMTmGpYS5Kw6gAC6Jaksy1Z9R7zLVFzkfTS6SKdE2V5ChciRj9VScD",
  "key20": "67Xbkm6Sj8EJC488agJHVQ7vntkDcjjJop5m6USaqTwu7uVM1hwiZKCcdm8UBwdMa38EEqcsW4nqgsXksd52pr6G",
  "key21": "2RuDjun7LEfuxR1YtxzaPXgox6kd7U9wkNBUqWtt1FSfurYTfGvsywcCoob3Z2Ku4gRKPPtqt7HQ67Z4kBYok81r",
  "key22": "23rMpgCweU8xjbrHB47zxEtvQyR3g37ikquGoWEq4B3mNwHcDJXgBCMz8vAZFqjYD2mo3U69xuSxhTqb1fBPd16w",
  "key23": "5mBeKknvcskffoFkkA9dHu5M3E2UpNQBhnGUF2Duch15UbfasNky1sd1ix1o9Z8w3HtMqa56UJXFqxx9Nit3WBRc",
  "key24": "Y1xWLYNZKQyMRtURLibJztPTv9xybiGqKJGnHegxVCitb3orU4QV4MAtrofm84itYyHwhSXGfiiBeg2puBdHHRg",
  "key25": "2tSzw6c5GWXrm1BmcyMdtxvX6AMh1H5FGvBTQWVo9pApkx9xy2FyRdjtYf86PR56sUmPTy1dXnZ5dwAjADRRR2Xt",
  "key26": "3Kw32bMBArUr4HCJpFuwwv1L5ccDRrbtZD7DTgyBC6VuNnW8thNDcbgonttQGiW1QMo5nPG5PDtezbDLCTixF9op",
  "key27": "5jFz4aQPvftnpYPQLCKFhBrvMGzBKQ25Z2rBMmtKjBMg5Sw1XAWqEzf9qPed4m6tEz4VpTcvNcWvSn1wJgLNfpLX"
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
