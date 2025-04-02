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
    "REJYcdRtMFj1x6wvMQaLURj3c7uyPpFX99k5USre22sf8BoPcHbRdtmFqVTKdHzzdZN7GjTNHq571ZUYuUh9qFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PkYko6QL4GqQE9jcrRoRVB45SB4WG1VwL2ARBiD5uUwNHrJecRxW3YTDcgU6k2S9wmEaQMg62fKBQSREG9EZhU",
  "key1": "vmMQFa41BLk9aGsvU2RntDn573sEDyAzQTo91RaQBDw7xV4bLhz4HUGPYSsn7YNHLxTo9E4EvzcgGqY974Q2sw6",
  "key2": "JkD1hoSceGCrX9QqDZdoxuZDudnWjcugNgcM4MGXtWkCVq84skAEg2ab6QiKk8HhrpoTTPXC1nYsvUiESCo7yVJ",
  "key3": "22QFenViwqW15LofeKVdzutvgExr7SEQC1iqVbpT2TG6jPTr1SgRpWGETCiU2c83kgAfXhkwQEuoPgQhDb7uLq5E",
  "key4": "52Nr3YWk3YJpFwJStD4Xzyqr6PAFQb69q1YpLVzMFzyApdzebF5wTUbCqvDPZrLhYMPiutQtRcTjtW4D6xHENJo3",
  "key5": "46WkTUa2pqwHNHRksqACP4aZ9pZNG2tsnnWFoMPAxN2wtj8hxHpqjTxo1UHPkz9cjNjePB1tPc1RB6urNw6jJVKe",
  "key6": "WmJcvAjGyiqdocyk9hFTQefWgqzv8RUSarjz7PKGGwMa55pcAc5GAv9oDwwnu2rieBHQf2fqipZE1uGiRXGBTYU",
  "key7": "59y1rykA6scs1PzMdkgSddwBXhfWVjLsG3ZjLTFg5EihWqyAvx8WdAUgye1D7fVchcwVsSkV84McPiMrW4mDPwPo",
  "key8": "khUeNNn3Y8YNancqZXf2ynWw8VbpH3zquQczPwBzqsV7nnDby5U68dKKtMCa4ApwBxReendKhzawiuCqMMDeWPx",
  "key9": "4s73TrMAeNc6jYGx2Mtfyouqx8TK1nRnqmHhWghjnw68hc2e6ag7PwqBWoZ5BXhsxuXeZ74rNvQrXKLbkyszVBDg",
  "key10": "57m64V9Dus2nvz1fF5JRVsxBB6MZy7sAWZvDQXPAhWwYepnMUagXtAcrbX5KVq6FePMCQJZ87u4qiirPBPQ1mjEi",
  "key11": "2z2kRz6XgUJUCUBRumSzovtrqKe25LE2FvNoxoUnJCBWC4ntJV43wVuwQv9YZWAeQ1X5YG8Lrp6tQFd2GvB5ieXe",
  "key12": "2d5gmRoG1VmwAtY2YZhHasniyT2qfnZo5p692YY8RSkN3TSWMh6txYnrd2FCKBLUcnDUEedKcTG82mB7EpMYo6Kh",
  "key13": "5MuCQ1ks6fjYWPWzLKQDVAbWpbNR1FCFdX8XV7wyQ8sG75jmYyPmZ2SxYaRHkdE9t3S72YHMDzeqP1Dqhaw7kest",
  "key14": "5VAR3gYqxxhBSQQiYLhArucWyYhToDQXAb1D1G8XRfQjffK8YhjBxv5sn9JnyUW1zjTrU6vnZRqyCND6ZhbzhVEn",
  "key15": "g8r2caM26LApXUn2CxajwsVp9pW3rcGvK1VscfarS81WbuHnE8uhWkztMQhA46Vo6hKzb52JvUc8KRABk7taiRr",
  "key16": "2RqGhzLgm1RJs2BTGoG4TrmxLMtyLrUr2rNuNfSTMcMQ4RyZ4spxTyLi37crT9ENfkTjZbuM2RyDJ8sw1zSzkDsY",
  "key17": "iNhBttvyN9rhNtsbbFGU4ZXgn871bkQBaPCib1PPFA3NaxjvMvgX8DXm8FHrN95pmTqK18jEj3mkhBWvmioG1De",
  "key18": "59ZRSSgg41PjSno2RHUQHrzikdfN7dvPz6S1Soohz9JEX3z71iehHn84DCiCT5nPUEouGZiLhQhd2ZWN7xoircLU",
  "key19": "2jMPP5B9YPUhnssKdRozn9oKkDAZKtGr5HQwA5xriog9AY9mySYA4UZvmb891pQyGhrX9YWfwC944vWs5hMtt5LG",
  "key20": "5o4AZhn7jvSqonGyrEabrJRhQFhsp2RRxWFMESgZQ6SQA4uXnLqyS5dAyptNotpz2GbiKMnU5XxGW81DSX12DYRj",
  "key21": "hDSiSWhZAuXEsW77KwsJsrwTcqbRJWUmtQfLvN57J5K1yMFHxf12GkupApMKmNxc8ArxBLiZm9W5ke5ghbmsceC",
  "key22": "5grJfuVAK69PDihYYMtYNnf3Sp7mPPZj6ZgZ2x28GevnS7i4M4pEL7fca5SjV46ZyEzH96N6QU4xcEuwZ6ZGUAs8",
  "key23": "2M9ww1wcByc5sedWoA7Yk6eNPYzm6eNrjEoHBw9vzmMfehxvQbhAgbZLZPaBMr5abMLpsVX7oGEJTHcXzuKsS7YS",
  "key24": "3yjK6c6pu45MnaYCNdSp3w48g8BNwUsxUJyeY8LDYpv1qyR2iw9rpkZdzp9dMp75ShaHKTHTwyHQrq3faQ3ZVBJL",
  "key25": "4oXigXCWcdEx9fHx7M3pU8o9XvKguKQS2eMGHQfz4YetPq3CtwB9FJVm4Shp9FUajchZ44bLZh7q4aA7tTHgK5qP",
  "key26": "3FkAkfn2PjoSg4GjZgMQH77iMEUNdx3qLvH7jkRSZXkw7t3LonRbZHYics2SNzuGhqJRtH5gXRgYyuE2yn8uyR5o"
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
