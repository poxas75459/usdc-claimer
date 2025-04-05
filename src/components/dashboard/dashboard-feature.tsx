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
    "35Dcf6bvhRbAWYactms5P26PeHwWZX4VeaAiYttKAMcFwVAnZBjZsKxREiXkQY2isuivdes4hWYNkohfNXbFUPwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJLi5P2AK8xaf3gdufjsfiMHLJnpBodhKKo4pAypAyKoRUSqNGCF1tCzBThHtkaQb5NRraTS4uTgU61DLaUa6zJ",
  "key1": "4Hj4G2j6t6C3KjZE2eHCgVAAXfFSA5gocfsUQfLUiPyAuwqa8LwLL3SXv5Kng7wMd25WMvW4Q66itAsbW63kyvhJ",
  "key2": "56B93rd7LpsQskFbvFpHVvxrw1yociNMyMqQCSUxJHRYEuDJFwAdUsNYHPHQ7A8ubnShbAyJMhaCxJ7j4DqSXwZ",
  "key3": "3vipAeEjqdqNb7usJav3kxbzw7sGViWxpSLJ1qe4859Kbt1EUt2Nic3nmz9K7RTPteQuG2NCjaME4uhKxb7Ku56f",
  "key4": "7epvdFGPzYnUKYVw6HT6aWQgY4LZrn5mUgZ5qLR18AmFVo9QcDcjQfS4jotkiEqX6bh1JQgs5acrk7TatSKvoXA",
  "key5": "5xNzDSNUr93iLnjEWRCxsZDvaxMZQxRRTsWsaXfUXeTRMCLUG5zc3WnEhQWVwSmE5F8pFtSd2caxGxQKqwUhuNUT",
  "key6": "42mQavTcUZb49wiPNXsqg1xP5vxRBQPPQKV3r5xt3jUraHDSjbAyJLggKp7cTcL5c9M3sNrhNSAd9ZCusHQEAB3A",
  "key7": "qChVM4hDxPA1LZTLwVmkospcHJC1wMypBUE7t87His2eThhkfWhRzne3fUDfekJnA4GmscJvp393Zfde68TF1fN",
  "key8": "6qjtQaF9hF6WR7aRsMPqkrpEvH6Z8XCm35aGtgXjyhUzEpL8RVEJnTy5PZ1zyiB42ckLbGXvdV9cuFBMjNyvPTd",
  "key9": "22n4JDtybst2efZ5GkxmiLV4aK46j4YVcM126Jg9fTsn6BeRHJgDG4xgxSjyiwhrhMPm5JkbgBT16vFxKtsR9A3C",
  "key10": "3FSBn1i1iQMjTdyi4tqMWFKWRLrCGpZTC8wuAGiJQ9XkewxyZyTzW55f48mZJ9VACrqr3hhY4TSsKmEfEddinnV4",
  "key11": "65kvCUvnLemEJ3KWyqeugbkXcUN2LV2WEDPcxBxiP5AjkiirUXgKKjhLRJ5REfK4CTJAFizwvLj311mWEefwS3QQ",
  "key12": "h1WoEh5NvZzgEiKiBgSZRnX61KHz6GxXatUpUBWNSSmPqZ5FMPcDhxbB85HE2JJT8h9ar8vxXwYYnf4eUGxbCTa",
  "key13": "5N9psd3UuuPTUvLTaHmBaSyZ9Mi7dqNLWrE6fC63RqUpKFGmQKJcDo2EJovtRFEWRcK7GQwx3tcsi6N3imMoHVBe",
  "key14": "4M71hagb9wzJJ3CqSqbBuxqVbP897NURCuhcNhwEnyys3cJ4rFu5ykirDZA3gNSufE52q5hhnt8dMwc8axTLNB1K",
  "key15": "3F1xGHz6rLW3tNS8kkpdyiv87TTQJRnEekv6iMQwyo8ndqh67perNCY2nci1ScNgUXaJUT58aFZxFjjVa1p8e2Tb",
  "key16": "5DpLHKMhCdD9UfbM1LeiUhcjQr9Dh5nrPXmxXLh4ARebdsAT9myNTG9MLtvuB777H9grQf9RuwjNTXFZ4uKPF9xw",
  "key17": "4MvcRSrLDUzZVrJrAGwaZ7M8YtMZtodkAz8bc9Vi3kiyfhxhJE8spEJWsm4SpkATpft5R7y8P1mjTVJ7PKM9sspB",
  "key18": "QrmaoTKfxcSfPksgZYHAJbS9M56bhug7gqAfPyGWaapHR7tjA1CoLF3XtFawLr2QXBhEA7pHmnxM5KD3kY2XzEN",
  "key19": "3P4HE2CMJR5M28rtb2M113zU7JTBEs1LWMme5fDdRQuGEJ4WxsL7gPxat58nu7fvMi7ahBxVKqkDnjVUUziBnbpD",
  "key20": "64fMc2YvGNjiF6kZNeWBXMcA4PMxHry6uU4wYk9r4AwX8Z9FTne1LAzgm22imamSUQFixF9WE93ZJde9zd6NtgZx",
  "key21": "3eVbXYLL4mZKiLmxsZQnUaXAUDXKqqqEtfPJhUp5epzmXxoxZ4kBt9BcVC9xneNVK84CsW2yraiZM2iVbQnJ5tk2",
  "key22": "3CrYxj5A7MuPRNaxHZsTwtcudMk96rrMu2kDCrCWaz82pf86pCRYrQAbNzDQLKMkNndcDEyzzrLVWA9eq2nsLBA2",
  "key23": "42aciEpRTRzSXbNHCLJ4Qg1WC3htWJofZZr5ykqvq3T9q4NdhwP3dVn5d9qqs75n1Szd2YwjAfqyoXwVp83wcn1Q",
  "key24": "4YUrHL7Vd2B6c8sjhPx17b81iA8ESqzEyPTRXhtmkcCMYQ5SUh2UyeoaN2x7wBw9WaFNUghJxT1miGKB9kfwauhk",
  "key25": "2bqwEAkzNw5hghV12Eoo1RjeT8Yiqg7cihecXVnjm9o8prgtYcVEXcXbHeGwGt9q89GVcEP4UdB3CmkVfMwtQauA",
  "key26": "5Hq4QnKhBDzyd5h2b2LTNhaQC2nfqkFSAD8159pzz5LUvMbuTherBseZXMGfhhnjnR5tfxBF1BGjhPyD8Maa14b9",
  "key27": "57dJjgJjTpZxZxCE8Wxrw8J95qtizxMraM3QXcvHksfeZQ8sEbtctKirmuZZ4N4a4QP7mbpWwvZp4QV1x8bCAZQ7",
  "key28": "nFxUz5XdSe8kJWdFUXgmTaBhT7tpFrLiGV279CvfLQd7JWcNjzSHcPJqmLG6zQMMXUj8ocLtmmX9CcZRzQR7tBv",
  "key29": "3Q4mETYD3CFvKCAJf3Aunwke2auVuKcKy7o2Mo5Y62pbeFiw1tT8RjPjF2t9aQ3nuLrdg9v9kk9smucBGuvavxZe",
  "key30": "4gQiWCaQcVEGbj17ix9ZzEU5bAVuutTRBFNwT5oonbHoAeP6k9CLUntFvTXCjpLyXad2xVdeD5SQAy3LzwVJVuCt"
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
