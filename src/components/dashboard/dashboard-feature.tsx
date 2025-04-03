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
    "4oyLvkbcwA4TAaCJanwnt9daSmxctesxsrDdwEfbkQALzq5nFigp6Ndn41fP8ftCvPP7haDKo1TpSYDthaUD3tMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q1gnF7TXCPFBCq1EX7X5GgdytJEYiYrXpo5F8VBRL8xYDjQMPrGiSfVNzfd93DyKXVv3H7LBAnzzxV5Bo5QPibj",
  "key1": "2XTqMQpNcqiqnjwouqyvezxhYFKRfqhf1RjuyKkGhoLB2ykHawuKS1q1KoFazrpubnSuxqkJNGxXEfANuTHQLcC3",
  "key2": "c77DfeDGRwixy6VqvW9Pq5BtxUjhkYvbTTvEpWMLMjaQQRixq3MuR31r9CFRrzWeTmAHqXXEqcch6mqKFsFX8wd",
  "key3": "4gDiEhp2tdsXZSHxPJfgAnP1a7bgwf3RjUSYLgE4baR1rGo88tz4fWhUfr8kSpCecYZfGuTsp4TZroWKkWKNBu4B",
  "key4": "4LvxMMov79rV8AAxZLqYSMYXyXMcsFAGx1awruQQqtJPVu7skqBQmprcogDbLSXdJW9tJzubraginG5FG11PhnDp",
  "key5": "23VdS4AFAZ2pZpTK3U9ReLktRPryBn8QvSgBQxF5kfmmS4EQwcRKU3PVrXYBZfh2KaU8ESZkBNycke2g6cTou9P3",
  "key6": "2BvQChUnoL4hLiBe8iHyUcgtLG8aE2eZsyxLfy3jFHh36AF6PLUzDyAVPAopWVXWgYF1XxA31eogmGbHGzd7cEg6",
  "key7": "5pC9wTahEnthPz3rt6x5b4bCewmbxyHP8vvoUoyvddtRDvMf5thJEYYQiRBPYCEFEJMUqtXXQ1Mx1KPdsRW47ho7",
  "key8": "3qs5g9zaE8gCyHG9oanV1SekDaJscS7HPJmhvAAPpDxhbiN2eD6aQey617pzUtLyL3QqJXQqAwDC47DgsZEKh84Z",
  "key9": "4tqiQj61UuMifAeXgsYF941KeftLFGLrFnEnk2J4hhK5K8guu8U1kYb8wpyADA39r33fw1WSAd3EvnHnBnRWkX1H",
  "key10": "2CmTEZRM2efh2xEaavx52DsqRy2rzSWDZzNCUNY78rXFnwkKkm82V2bE5wHw2a5okzeA6YKTHeVHuPsbCeR96dPK",
  "key11": "3KooVsQ8SVNvcNi6VtfqZSqv6E3WSyYDoc9EVGMA2yMDdpYiUDbkUfUkZVepGzEFa1gVBwpLWKVM52tbDUML8xNJ",
  "key12": "8TqTZxjZz5sddakyc9SsM6uFUyosbs3pnLg1yyUbviWZJD8qcMQ7sRuAZrgu7GBTzufhBj9d19AqzKi5zYkFuPq",
  "key13": "5TeZsgz3ZBnkBNN7NVUmQtMSDKfb58vByYRp1GoeWN97JLHsd232ZdNrqYV3apN2FKUAhsNHyVuPqyTdcepTDjXk",
  "key14": "4xEhp5BqgpzvnKGdiYUk6GWaFT1iasAXK36VDHRY9BzLB3VJGf1TivAKB8q6q7WVE6c2Xdm3KmyQ8uzTdsiau7UL",
  "key15": "44am6JVp2PJ4eGZaAVTQRemfYNh6D8MQZdeWydAtksToUN5muQqchjstNppkT59Ydk8Wx9ri9dTqtnSdEbDLWjaQ",
  "key16": "2cwizQCcqaxGh55vZA8ehGVzrRowx3JeTBRJ1FcqKQCALWA73Z1bWaAeqnhCmGC7669MLWKd3yt6cXrKCMBHPZZo",
  "key17": "5qzUb4ZBU6z3XA5fAor5JR8SEfMcw6YY4KTq1KQKsTbsxR2LGFLVkxJGneJDbGryffXtXjNgiMTuB6hSwJCx93C1",
  "key18": "6tCq46pHadexNbcms8j2zYf7LGSN6LyWhrcaMHoab1wSLU8QQd6qUfYnQjRfDsDGvXqokBZJ5voGQwJLu2VRc5p",
  "key19": "3mjKxQviNVd7BHFDWZqVw7ihB8qELS4V9a1wy3WYRhwDengTxN9Fq9bJiYyGSP1oZqSR6m8zKPxxxrvhsn5ZoWJb",
  "key20": "4HXpG1okN7nMn6t7uVZdEB6tTvmJ7upgLzJTaotkXDeV4LW31pXruq6WSC87xLF1bo1XHP7iX9JHmxz2fYk6HRnW",
  "key21": "TvaQjS7i56bmUiZYqxujUubVA3e1GHEzMtfQBM4D17zQGrqXXwFDg9r9k8BvWC8JYdYGNDWr46PXMHEwongKEV8",
  "key22": "4kchnXrtqfcGrauVJG9LnSHexuoYz6ejkW3eNB8M8jJg7ziazSi9RULoBwC3Na8u1fo7vENTc3Bw5ptbvkFd2WMs",
  "key23": "3Q2LQEUzsyocRuu8cyA1UfLiXvUQDsqjBRdhPWy25ZXEa9tms3LZdFGwku9vnyPUdcSJRSeTFKXUWZTNVVk58Uhu",
  "key24": "24C5DDtUUzQShTn1gPaw63z53hQ8AzffS8PpWQYpg2ZSRSqSoyBpqzpimkSUxNygaMvU2a3mjCDGatgHo48PM59o",
  "key25": "57jKHB53Xn3ebLTGGHZCRVrA5iQXuR3aJRJTN8SWS8UcMuUhmDHRRcctHwpXr2i2w58GmPL4o6P5eFeN1ZkbAy65",
  "key26": "4vGcAuydZWjUX3xoDQaX8hpK3VNUEKMH7Lgpj7u4sgcXP8fJwXzq51eCVLzWSUkHF2jvEf21PgrbKetZjSobwSvq",
  "key27": "4J1gT8atfhJu1mTyMt1FLrh35iNadfR3nGrRDHDV2kYNXz3py7ryo1gYABetCRX97Q4pWepWHTMcST7Sde1UWMxP",
  "key28": "48ZKHgL3muzYPzSZ1HfuJeLrQuMsEAhYFC8MfUxV8jDtu7D2xAZuDh5qAhvFV6DtDYaVZ4b2Kr3XfkNT6PiDCLjk",
  "key29": "2RAhVE1Bp4sh9BQu9gTUqm2y6AZZ8p2PZBQhhiKUDmHNGxkdZrcVzEX6kHfS9v8gVbGhrLfEXq8XyYc28Bm7rkSC",
  "key30": "529t9qri7vsxoKchiY4rPEBvSei2rtWq3WHrf7Q5jj8bU8Ftqi8ccimzK5Hg6r5fAgivxJctiaBxyTN13buXXe7X",
  "key31": "d9uEH4fAKMTvxA7xt5UTPgBKgt3idpDbcwm9jB6rgwPiHBapyLTd1TG5AnYdxHD4cRA2EB2pkNBcLUoUGgsUBAo",
  "key32": "4AHoJXZnC6Um1f1ixuGJBfe7NMDWBYFSoEHmrUxm1rqC2V8UTguwQaEpuxcV9Axp9UeUhaTZMPB2kpu5M88tWNU5"
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
