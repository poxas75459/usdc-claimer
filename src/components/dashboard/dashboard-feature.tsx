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
    "5GgZy3XocR6u7cyBNCxXGtps6FFujXFxxboHZA3hSPxExhXaYEE3JTGm9DQrVb1PoJv385U9fHaT1CJAVxY94YvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZ9DJt9wMxSrKBJujbSRqU9pqFa86AqRmr6auf2r5y466jy3HNyyDD9rJRHLpr4a1RJWxGpsRK9kzfir51s98Sj",
  "key1": "3sYU5F59SGYNJGmJsEcRGFPMmjjL7KQjGgnoYpR1yjr2Lahoyatz2NMmWe8UTwh3zJU5xcsKozvrVKWCY5DUkNDB",
  "key2": "49pAbiSmPE8GpLY6gMpjvz2GPcLspWAgdPmcX26BNKxERcDKxp8oW72ufV5e6UtAjzxmukesMJie3jz8PySWhfNM",
  "key3": "4sLX2PLcfmVemRsqUEtHSQv4QxRbHDxxw3GxRF59xTNbx6gK7fXweNtqRbKd5xrpMUr9SHB7XbpeizCzd3wAynGB",
  "key4": "igMSCGpyRxJAexoFPQWYJJ9rd8BNhxXyNcgpuVmqp5zhNnXRVGN1JLGTTrAkfPqop3wh3Qeugoo2kzncSRc46vy",
  "key5": "3TttRc1qnuxWkTYLzgXyDJx1MiZ9XL4voaprSdcWHH8uB9XKhMQMShTLtojWyXShCZorEwDGdqe8BP6tiWb7kAoB",
  "key6": "Qx9FvZ8kBiQkbdL55sQetXpmDKbk3HiafwH5k74M3fjxEuLgQ2KbuWRdgj1VnHgmKZ2o2wdLmkUpZy9SypXjvLb",
  "key7": "4agjA3t1rL2t9i8UdtWN8XroxcX8TfXXrXkjuAgJwaFS7CuohbtNyYenqNhYVRwXNtuKFVMuYM8cXaiwEmooHbvC",
  "key8": "Qm9v3LYt9cWneMYG6Z8LPUJ5TGi9vjAD9k37NRkM9mACSi8fH8FdqKgkeqa2BvEXeaiJ8zDMfkjwETtxSUrs6Pp",
  "key9": "2DuZfSsGutqmd8YdCbrZz8Sh8vz1BZiHj1T6H3hLEDFhrHJVPrGHjaUs8ZwJJPT6qmcgavgDsBeKm3iF7NTeDexH",
  "key10": "2HKdVa8JDDcoY9q2MWsnvMV9jKJevLk7scFiC7mDaj2pC8SbyoeYjLK1Bp1T7k7Bk7c7KcfueUP3C2nZa4we9x9a",
  "key11": "JtZZbrTwbqSFwFfPDbex7DXJ7HrmqgU7YuH8Fwj1J9aUMe4nfNScvdLrTwQmVkkp1znm8qKc9C1hitZ7caByt2n",
  "key12": "e9WD1ML8MMNMGTaGd3C1m5mJpVFHH5Qxijbb11jtkQzfgNQJZ8oWnHszznDWnbm7WSpoTMb4nKrpVQNzxjTZLag",
  "key13": "3RhdTxN6RCrgUvETVuFPfF15XVDscEgdotoJHgg4L3xyxDWcQwhCoCjwFaWTjSJSA2TgsL7zdEC6q9vG7A6Fyyj6",
  "key14": "Avp9D7WxdfK3sZ7UzGE5PsdwcAxrgGW6JzPgjqokCus7WsJkxofAYFQzKpV1Vmyf2PQBt6QKPzjDJL1UHkqfAc8",
  "key15": "2F62KvMGyRrfGPwuJHk9WP1FD2mJikLLyTVfty1Ho1sGUtqkP8tAVoLrZP4uQXV85HtygFotDdfNzAx4TxM2mMyh",
  "key16": "6ee4ed5Zb5yqA91Z7nRbeZt7GzdABam2BNsR3qMaYed9n8YBSTqxgL5GkgTtv2ygTpDkuxfEZmjAMaWZadfychc",
  "key17": "4gKzrof18AYtJ4KX2r7zcZhTfZqQFg6jpSdkPREV2ietz7Mo54yuMF7v5U2XyuZw5t1JnDPRq6sYHY6aGM8Zym2v",
  "key18": "S6QjcXUds9m7eATh33P5Qdri8cSpKYbPuQ5JtpzCCdtKTtoEh1uUvif1tWbQPy5RVVB5YMGQhAjaJPXLstwn55f",
  "key19": "5pdk8pkPJUteeowh6FvPxsbcDbYLbcjvN79KavfFA32JEamqUvCiGcVoYJyDfREQYiwNMfyeTDFi67imdrRkGoLL",
  "key20": "5XqnYzj7QfBYaLB6p5nVMkVFXM8WekkqkYqs2sL3aiPpDFG4pQ4sGtxRiEiNWSiB4B7EDjTa1PehSjHBNLe7PcXX",
  "key21": "2p255otWsjjQ8NJj2RJqmUocuyBY3XoQ9jNqNojmQW1RYcHZqJcwkjMjGKbo1bRmre34Jf7Euf5Gmp6sy5jcn76d",
  "key22": "3gZ9tStmWgRWt3nqwomDYoJTPkCHWZf8FL4DeyM5wCn1aexQGqBA8xi6ZvLC6MKgM7rf3bat1UFWo4WhJfnAos1M",
  "key23": "4UhiGrmHvKNumzFxqi8u8qV4JkiBD2hvtbQXNbJyZxqsCcXC83G9aWwfPNAd6WWGSzMJ3WHCVUCMF7KmDG8Um9TJ",
  "key24": "23BqBtMWvidvHk7dg5bMF7fERrsuS14eDzjtyybMAGyKx52GvGdYPs898H6EBcYmSAk97ehmQ94Xvi5RZh3NNRRN",
  "key25": "5hd4hszYMY11xsNNi25FBx8quSjPgqanRFwtKyDPQ6mqYtN3pm8Zk1RBeukzpYT62Uqv5XdCPB8TuP3Y5C6uWwn8",
  "key26": "iWEbyaZg4UyNJ2xUAPRmn6UZgs4d6kSGpiBS8iipVMTQMPk5sMyUWr7RdxEQ5Cg9zmA5Yu9DfVeLK5sDKXH6EGo",
  "key27": "215wnPGP7ivP9ApkSsfuJiKrmvDMf6hjPi5NsPTTSyu2UFrxpo9NoDwyhhVwmYzwL1WRuiKJJhnwfkg1m8z6ANK2",
  "key28": "5E6tc4cdbPSzNQz4bm9Yeqz4KoEpoEyMye2nHBo3Qe2XFdhv4ev6y5RjTsrEaiE1mYyHVNsbrSYVKQ1fJHUyjR8V",
  "key29": "fLbgwPMiP8bc1XhFB4SjygN893AzJBLfgr8axoDQkbmb3jBdEcRKXWPHbuWYqioo8TVuxwtSN4CfmrYU1rRXU1r",
  "key30": "2wQby6RsmDuQAKhZfKqVcCm6auP2nRJV32hhFte2dab5WSqjNrGCr72YtKSJBCyaHrPgGnn6roK3MGtLjeAdAxeZ"
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
