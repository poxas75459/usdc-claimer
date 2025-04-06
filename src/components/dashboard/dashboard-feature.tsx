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
    "3m8zvsF4XtZK5n3Y6CJ7D8Z99BML2aXhSzDabDjff1r7o4jHnrSzuFMJfqf9y53UW81Fa8yjGSjjhU7J3SQAwSt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HaqePapRP2AXM94B73YEm6yvVALgcGVT9735rm9ShPBYFqgZLkWgVjdAs6hJpH3dpP5Qx637PR6t66TrfU74yVa",
  "key1": "59geeAF7wFkQica1WeVocpgKXWRxhuybwx311tziF49hrU6TgAYyrBLkcryp96JunkvTxjsmPbMxgaFLrd6nfyWh",
  "key2": "5WEagxdKZSLk3EBEFaDczX2uG6hg1X1t1qVfVoqf2R3PNYtGJjkdcjiy4u2aTUYyAdSpGQXRKMeVqFyyZC1EcgzV",
  "key3": "FuzoAs6kRtKYuNSWqWEZ8ee5kHvXyYC6VjVVENT3KB9PWADH1wZ1biuKFYGGa94ptG5VNTF3HsM8j5kqrt3pZQ1",
  "key4": "4ueaPmhFZxoAKyKYjok3wWFpnBZpKziopJUrYT4poKUV5nwYCgepUMrDDMMheAc4NNpeZqscLi8Y5aY2JjFsU5HF",
  "key5": "5gqnnMKiGmPJzxaWpSm2tz5dCtoJrEqMrNmS91QN4Ng8eBH4CLKN8zx1sBay9zJPmunXp5D2NzCmTRJzK8mkK7o1",
  "key6": "59f6FSQxANS6RqtDi3vx9Jhy1exKrroyY3DDd3ZZXADrVwRq8MVKWxBtVtJEtsUsbtBBFny2c5nn6EyCLYQJMoxY",
  "key7": "4DmqdxSuCYRJ6LJHFxaxPBcJWCy9hRhS3vcgAbVUJfyd5BQSiUJVFkbCJtbhWMJJETAoUEFJqQEGGi14ZRbkhdF2",
  "key8": "5fs75jqCwgubaVo2fAKwNQdpBnWyhnE3Mwfd4MdnfwenxZ8kNnip3vdqLzkB26vCfcG7GXmdwh2eP9x8qTiTucwW",
  "key9": "5BGEphVRb62U5LTvhmyTBJtkYSgYT9cifM4cMADzRQtgpjVsqNk6a7dbL8C3fv6eMXmNgwDWWQqrAqGo7j6hTWsU",
  "key10": "3vHEYBPENUJqwVpmUjdszSG9WHKiu5fbL5aToqsXCpVouqk5nPg2WytbstQTiQULWph3BdSrL2yUMTYjC6LMyhG8",
  "key11": "34FqHAgaevMGfhY8ucqgDFsGdLuTys1yzTemtnLa1oaNkBNZtzp3nWeJjDP45EdYcYZ8ZTbr7pexBgvhLbze2Gox",
  "key12": "2rT3bcGQch3dkdJZUko35soKkCmyqa8dyEnkLtQU1HfUn87SnrgjsGyTJGYo73kranRMapa34voFJcKeoXx3Wmj8",
  "key13": "LJLS45XMN6xqrQp54kWBDiFgRDcgty4ynMcHqpUaPXKx2qrHAtXMqwpKzoWQkFSSBBP1VJ1358fHEfZrJAQg5K3",
  "key14": "5wRPE5cwhqoLiZxkRmr4Act9LMnNLZYyT94qbaH7KD9Rz8Cx52kyi2J28oCC1Jbs36Y5Z3zj6iqwgo2PHZyRTeGf",
  "key15": "4mose6PTwEFjX8kgszdnR984tTsSJCeXcAvbNstsHdHvRqimGLo9NMSd4mUmro53Qb6VgbWmJoagc5FcC7Vt6XNf",
  "key16": "32jjvViPDE98yPKixfScNRh8WyfoYfqKM5yeQhbNcLs2b9VcRENN7UCjZ8dTUdkEoYaKGmkZ6kWvjbr9Mc9o8vu5",
  "key17": "5Vt92SyNryDdHUeDW3qCVNdYqjojyUy6NPdSJmZYb6hehNwHZtM9vB1qrgrfpZesgUcWwDhm3zJPvanRiKsj3Kr2",
  "key18": "65mc8QGgqJNwAP5Yr9DJa1RN8TaRvVhUM593VadZ2D5MtvkN4pEDsuP4bUmWX2ZCzP8uwqogkmrNz1jWjCCw14X4",
  "key19": "wtC5miiXhH899TG6jtQ5bfp3LSANXSPLg3hp3UcqrqyjnnN8quDXAkmi1sG2p8prcsYG118T9hr3KcswrJPxXee",
  "key20": "3NnwJLTSym2xSCv2FXYpXmYCumGVGe7Rr3nAaTuQ58vETczEi69hoepqNerr93kvQX84wY4DQ4fFL8cJgm529DnQ",
  "key21": "1sqpGMJiMzJEibjhUm4nTeBcysKiRaRTErA5gUow9AgQS2NrQYpp9kRjCHYhDiYYbjwF2M29LgXLovRskSNULwK",
  "key22": "2TtMWmSBwhvEREXSHzrU6QtmkPh98xo1d6rknMbeu6eaQwPzZHGQkq6EQGmK7WtMvisBHmrnz1gNDS9A1J6wbATC",
  "key23": "57ogZL9eCM8pU8pfKC8Lu9DGSfFtgPvGRYPxLQ85y4obzz4jE4N5uffkn7piLqoZ1W2WB9ULafCcCjdfQRmjkPtL",
  "key24": "4aihdXvkEz5MufRXC1sYrpHQJK9v1PWkkTAKmUSuEMLxuCH8VHcQ9iSHii1JYbhQWgbZfNCgNLsSjUomviipmnC1",
  "key25": "4pbrbzdXZ3u1jGWHg4MRxxhEqGiD5nWzRBTMxSqsV1EadWodmF6iTaYWMEBvxuAGBFGQJyMPDfBGMxFaFBocYJ5C",
  "key26": "4qjV1jDh6HeRwvydXaxdqkBmXicprVz5LnXq6VJehG6DSeJJopgyPBUTpUUZKExMMvB3PnFUqfmL9B7u6RWDGKS9",
  "key27": "3rHBSfUE7oZL4mfTpazW9bRW5Q2SWZyRDE7kczD1x6rCCKMbu7CoWJ51UMNFdURkxL2S3bTs9DFbAPpbhVWTZDMY"
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
