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
    "5jLEUWd2iVtwHXfRKz96tBcHp5TUtVCbJyES8i8QuSP6LzzuT1HHp6N7eoaHgykjvg8C9aAoZZkGkAg2jcgb5WeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvP1ycA1Qu7vunqbgmpesSBo6PmzQVjYA2QZb3epc2BmhB7QRHVmLDJksXi8mJX8S7r44FULB82oUNW9ygc4utA",
  "key1": "2hQtzeTyWSnLzQuNASEkc2bi7hNjbrue9wZQ9hQ5vYzvjjgNahPWdBYUkwEkDfwhVJSTSDVWY9sWtQjKa5aWmuu3",
  "key2": "41T3SmQHNxXb6HrJGZtCkugBF1JQBdBnk8WFZrbom91aK5ugNJGxvNyDeopcuwBAPmrGr1wxLkaR9qiQJopNbwbU",
  "key3": "3Qe2cwiJhLcHzMFBkMVEyqhghaYCWQyoWt7CsPkukvWBDXa585SrLzRCPuHv31oqUdJgPyofVWLZJqxxS7d8cRX2",
  "key4": "4uDL8V7vjQES82eGzVMEG1ZWEUeahrgDkA6SowDuSGRLQsKgEgVHdRBvbDqkCz6iot2TRiSrcDo44KZbBSAPizSP",
  "key5": "2q89QoZVDbBjuWVknMWEqQhm5gkAp32Psa8tu14tqAdCxKxfqA1XcbAbqfRG8YEKyGs2HKBCHAoufRQLfHz6BKxk",
  "key6": "bn6mm3mtqK7rvQTC4Uj2Y1NYrnKcAyboDB3cuq679CwbAEPGiBNrMdKvtLMgtHKuGaMQ93hvvxj4NeC5gMAJcLJ",
  "key7": "kTm19fi9F2o5QAFgATvBUnaGXQZ15bhQiWDhk1TUwSWNvDHfZWnns7BJJJu3HLy9W9q1X9hhhdFCzAi6USL16MF",
  "key8": "22CtF1Hrd9NwdstYT9HnTiy27jEFBWLy7i9DV79sEjpbr4tzytbAM5PEMUFDXyW9H63jWXt3KyR24fQYKZscAWNs",
  "key9": "5QC4VW4H767TF9iVtZ5e4nqJZNwps3kg8UHcXefJc3cxLczBhem1gsUr9vfhMFin8gXnzN3CNpjQQ55wLZtra6pw",
  "key10": "4wugfgRdvzPCwxhc9XejmYR39eZKJH6C9mCbFiNHrfWzDx7dAL8Brdcdc2YZmXb4kvoKooM9ZfjFRgmxHSGSqB5u",
  "key11": "2cjRNWLBKsH4xjhyoYNZd9yGGhPnzcrK4UidcASjsQG4fJxoeDhk6nyML2nnJqUhFDeMpCFARKuA9uAyyNcvhk63",
  "key12": "2Ugf21vMkw8DrpGTDC9DyuMWU96HV6uDq8aqnCT6VtdaH1L8dJssvtSFz1ySfWNro81d9JzAJZ1wkWnZvP62oUbJ",
  "key13": "3fimuuKRqzX4DcmbsmYdUToYBtCPb3U13Lw5g36g7TLomc7KLiVdNHUY8rsbzsFqKXTjiCdEDW5WNvru15oEJkMf",
  "key14": "5CULJodSpFAYXdjXyQLeE5LC2hsA4XmfmWU3bsS1aTEQDkCtAePUhP5r2AU67wuKsUr3tHefithbrdxBcfjECb68",
  "key15": "ZWqSzVyUAHxB8ti6ByDitjYnW5FuDmT6HUrsYNP7oBGB5GsM1YnVX8DL7UZyZ88AZvY4YMRZhuWbeYR2JwDZpX8",
  "key16": "5KrVGUjgqdCeRfnQ7BMVAgHYt2wZGXng4mNLBtcgmVBokATcFVgAVVFoQvNSwBuwyz6nh1HAuWnzhu1gNQgmq5e6",
  "key17": "NGCQuoske3vBaqji43ppypxwkQfHCBNnWpXhPZPKoJ4XrNhcwXyHhD6AfZzRGo6vum6YqPGHZGgDxXhoTozsnpP",
  "key18": "4cnoAxcMLcMPwHhNyg8mWsaR8zHQaqazYyQKTY7RaeY6Fss76Rr1UVvgA1whoGm8Cjg8nnGDd6TjE7QCTrqSvZH8",
  "key19": "2DPvJ6SnyvijkGQhuNa7soYdgCeqEVeDB6ZnW2zpSHcjJXS2d9m3wzaJ5RVzDkUfVv4wLF2EVpkxSAzHgXHKJrkn",
  "key20": "2kVJvpPj7D7WJ6sTYCPtBkKFSh7t7oFCWoiRcqGroGYKb79D5GGPC4szyh2N7TJf3q1GFbg9HuQbR17c1R9cmAyg",
  "key21": "2yvmqmZX7hsLufhtbDE9rJxVjoDKxb8mkZgRohMbFz1YWfp88VLgCf8WUMzoATEnPCsZ7aPSNW3iEGHT1dbVmQt2",
  "key22": "JJGiUvb5xTbkQwey1671beodtkwhyMYUoAUi1Xm75YVqBpmnSas4jd9rVPWC4cfvRWanmQqVF2paeYHM6SzMJrb",
  "key23": "2amZCScGLt6SpnHjZddcqSjcW1Z8V72JRMJrWLazbCb1E5GZZL8kfD8wC9XJqWrmS5tPSm7nMiTZ95i8t4Qb8dBy",
  "key24": "NSxkKhd6Wbs9443NapCJ4V89bexJwm13acVWntarXUfwvbeypT7YWa57rFFP5KecmPrhWGuyPqc3S6a7wHrhY1f"
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
