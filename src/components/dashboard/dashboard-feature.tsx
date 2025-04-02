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
    "5uxbh8wMcpBoJ1RkoXEFgyRK9iivt9qsdz3JaLpWt31FCNyKNwNptmGNfkYoNET8XjUSM2tcjWcsstS2gjVfGwDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uShh5Wkht5L5ymH7ebDeavapddKP5PajUrLftyTA2rxuLXjRm3L7wMZjQcYo8GVbpcNA3f5oS9qpQ2bTq1Dmsw1",
  "key1": "2tprqs3DJ6jXQNZzpPe9depdbD9CT5Tyet83GsAQf9tUezDCVEmxjxup8BE52vVDQuFTtTtWfTGuaaS5jKUb8GFL",
  "key2": "5vPzxZX6ZqDeujTcLWT9VTfc9zBhukbkd4MYifTrxP84sLFn2zBXrZ9wpZgVDoEPVHjyWzEdsXUQVVFdX19LJK4U",
  "key3": "4zhGVuLuzGbnNeinymmc7oGtJAyY45sSLwqn2ktCqZfjCef2XxNVyD1n8EfuMmbQMtLcXeSuxNdzYUhw5Gi6hQNz",
  "key4": "3fpZsL8kdGKV9VVF8YjWdsc4LR2TJRfRJq1oS6ywmzSi3eWUhRGmoBrx2CVJ5nFeg7iuh82vLuyjxmyA7ZBbyQYc",
  "key5": "2zyJg19kU1AW7vsGekNM4ZGezhjckjDRa6Z7FntkaUWHbWbQYiKbvhPaGtMezfq2E3FbJ2J5DaaFAxP6XDNjpWcw",
  "key6": "3CvB2dC3uDQJEd2MvxEDoETpjZuYH4LLq2TRd2fT4miqEr59Bmw3sxfDbED971hVkrwdnHojecwVv9De1xY8dMaG",
  "key7": "2zrrbvQFPQ6yHCGYiigC6xex3bEycXnmGnSnoUJBJb5cJQjTy3FYC5vCHHkUfFEymrfD1A6AETAk3HnXCevwK6wR",
  "key8": "5j6ZuDM8zCdjugkHiSQ4iF7Gz85N7E5X4RFRADwybS8VWeeHXpgqg93vpi8surUDD36LbiRAUHjVrUU6MhTtK6Rb",
  "key9": "4P6dJpnW9oDKT47M6wH4DDRYRMmA2osmhSiRct2ngdQrDyhzXhvC5NHfEboSW3U2svBW84hB3oZFYhi6Ua8D436Z",
  "key10": "SRjx9wch7sqCNARfBZ13e3CSGLrVGQqJn5BAu7DDdZjSLUCFtcwouYqggekCeLXjccVWmkcWoAC2DWD93EHah3U",
  "key11": "5EwzMMjrG5Jni1tzrSJG6eqbZNgvF4gikvHk47cGAsShBd2j4oZArGhbc5oZd15XMpsckXgTKiqKergCXKhRRtky",
  "key12": "5vbtyVDUKaj3hh6EByJG55Vjx7cHDcCSfSjdUc5aqNUiFd9Ri5UeWJfjJBKoFK4tHq2hAzoKXyJWzj9LcdbNa5eq",
  "key13": "2HZ9YkJYJ7RxPttM6pwND4TaH3Lxnu8MGzDnaydhuzEvoGmFPQz4WXjdVyZkavFaHfq6AfdtVcx9c5nKBLNFB9Mh",
  "key14": "39Vjm7MBAFcF6tK2rjmEmjYT7U91x2cQ5LtmxrL7gj7SUM6jxKkuJ4deqjUqTCPHiDCTLCnRaz5DvummSuwURmUU",
  "key15": "4LvuQAZ8MwHMc5FxEfescuBcW7KhBWWgKhbrWXbpvyysB7sZaywtjZhxeUmy1tTc5jEsPaKLW4y89Tk3LeUzMdmh",
  "key16": "2ivvs1J3EQH8AUu1AXDNUU1Cpx28U6mBcD5qwj7eLuBKV5qMZkZV92ZijgJzxJjAgGEogMVEsodvdh76m3wAQynz",
  "key17": "41bykW2pGJtzt8uoCXLopt17kWg2szxFwtmHYSvWskkwPACD9kWSV2uZnCDdeMkfTHP4Lu1ZpNvXqbV1R8TdM144",
  "key18": "434BFANufPko7htrKW7rv6Fnpm332eXkCKucEz6Vo8mydrX7pCvGvhLjBf7H3mE7G3mtUE6ZE8ThnHadhfo6LdNk",
  "key19": "4ZgseyE7RWWWVyKnb14Pn7M8BcX1U54VfF9G1si1RPVfScy7KZoZhsxBVjBFwrvJoRc5fPQS9tUV9iHhN4VFTgNu",
  "key20": "2Z9cTEFcAdY1BiruWtuKX6nW5oRbNKJBJcr7D96oYxbNVxaQbb5S1E9Nki1V7nSUpJqtquW1JgNXEhdPXxdA6D5x",
  "key21": "22vMrPFu6CV7iWfY6CcyJtR79MfwFVskYrbULUeaKU8Vgmp5YUsgZDrPfqfLYxK8aNVaU2YFQBYg7JyLvyLTiZAy",
  "key22": "5auXpprniNbAHre1KB1v3xtzEhmxfQh5b2WYYfiR4CemACPnM2CGLXPxBLPf1wTvkibAdF9pTt1e8wKp2PLwFbQi",
  "key23": "4tTt1PmXW1NjvLMze2bpQq5ajwrrztXXXs4gPTzoTs74Sc7ndoZTQEEm2kNQwbxoXyfRiZqUXs1R5NQY1193vyZw",
  "key24": "4pG4UDxSQwEeWK9XQNMzwvfjNZSQ8d92fUqbKvYDvG6bYn1WfWKMJUS5YvyzChk3NZQke15VY6NNPDG3dLsdkkUs",
  "key25": "jqvc4AfkHejW9Gg5SBNqufXUrwL8GJfCgX3Fn7Nh4MFUQbYEbucJGBShkG7zpHDoKE93G5JvsBEsM6jvUbmh1Wu",
  "key26": "HFqekSvrDMLLfPnsvPrdA6nR2cXVvwMKYUYoLD4BDQK3dGBN6XDGVNXCMM9cA18nCsVR3U3q8ceBiT2frCTYeAA",
  "key27": "29zby9jUASrfe3Fmgd5YejpiHMZGNWUWrFDipELtqp2D1jkCUeC6ZcSKyuKZXKZwPRdsXSbkcEGK1KPSBDXXVFzN",
  "key28": "5szupfQvTQLde8gG5VCEGnt1rY7ji3i6qjdATN5dQVzn6FXz5o2XnY513r8NhtoCXtap2VHhkpcqpMUuR7t1XUjX",
  "key29": "4idykfLEEgxFTVK7wHPjUNKUFNjW55T1ZNwpSRiZqrYx5XQRzfcMTjNKz2PajfpF2TC941p1sAgqQkm6Z9eCEq6R",
  "key30": "3jkggYzhvZgk19RCqNhsK99iAVT5dcZFYiRqtdxP3fkW1LvEmy7nGdQvAKVEAj1VpsRQfrJhRjx6yYPp5edigrbS",
  "key31": "3XCLTT3jGDBCc9AocYzAPkhsTQUXtC6QUFVNC1531r6sQGAuqrj5jzHUMCCH43pGJ81cW4nQx54yQr33HBDx7VUj"
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
