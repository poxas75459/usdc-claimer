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
    "4LpCRRvEsj6QtPU4JELFHszYPabpScawGvRJ9w5ibAkSc9JS4sEaaJUU72qPFtRMsTwUGNNVCNBW52kD4ijDVssq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5XfStMHGc7MxNwceXragNz3VdPyyJUCCPBxSsuKhRRSPTnbHk51YNndXkMWSky5Jp4MZAfHkptiLWXJpgvXpL1",
  "key1": "5rFTbtS94yYyqbUbN6SH27YzNKcW9hmA7NgFgRU9v98LuCLrL1FStQLm3qyi8eUuHEZS4FwK1MBwX3eP1Sox2CBT",
  "key2": "3nFfWE98RfEJcjZ4Buz7yrXPS1LF2LzcB2u3pUFmMVwS2WN9RERJ7VQLZNJ6vBMupuqvYg4acFGXyv4tvWJiJfzD",
  "key3": "5jBpb7nRvbHYw3VnrgWMnWrTkX53GK4afMQ2fxeFVDpwLcLjhByc46NY63ePHLrTgLbu4okZs9yNtP9d4hYC2sZ2",
  "key4": "4nD1DqgzHaroW6LrZ9iUJyj4umgp9qRmVMpVU23a9wvbXbDwHV7fRqEgd1NTmVwXS4nBwvHzJDah33FF1haEb8YD",
  "key5": "5q6QkQZtzeZ4xUZaxVMxvn6kwuKNP4yoDSGs8kSu2pzMQ6JFQSJjBYxUJMSqUdUfVoRmW8CeqoFPNSTHAP5DvJce",
  "key6": "3gqUzUDueERzaKcvcKJAzfxNcZtRK6XajZQRZWeoUPF2gexDNmRPUQpidjNMvX37hsdCM4NuGBcnV4yqS2Zo36EN",
  "key7": "xdm1BH373fFXXCXBzWjtsvZRYW6DoCkkwQm6gC4SgdmYCGUqRXR8CAxLbSNo7YgU65vuNNKi9rvkgE6CaYdcnXQ",
  "key8": "3Gd9tBo84MVGbdSDcyokhoUGuRVLWM3DuWYLED9SkV7viPK2z8GTHko1Zgqs7ayWN8tB1mQbjLkzyA2qKoxYkTF6",
  "key9": "3GHdgq5DjYSU4Ur6VbMgb7WJnMwJzC14mdegMZMHgTZCo17BSBfwpX9cU7eNmGKoToSspSQZi4pqy6EmwJxBoro8",
  "key10": "QtHSxGemExw66J5i2jo6KE9DFSaRq8TK56NAFDgb41dmbWMfjf3iiGDQPFAMHUJVPbz71f6x6XKMdsoSzzchtba",
  "key11": "2LmXWr2WoVkhJ6BY3VTzJFyuQpmNUaJrdqy78M9y78xiFoYvqnHZSP3qBy7JPBz3gzxyGpDdnaATQj6KEF5454vN",
  "key12": "2Cva3y2tMMZqAVH1PxtUSR3893kS8jgkPDmNV5cw2CCyjrK2v5Ds6MPbsmKcpu7LrgkVvX6cEFG2hEwNUNiuo5MT",
  "key13": "izKqE1SZZW28AkBgpS5ZLfZZfZy54HQv7McrsExckyS7v1bxgNeZCDLo183h7PFFtEhUTgtAPHhauZCZH2UkYtF",
  "key14": "3nnUkjiMXWTNi5QSdmGoGAp4vY2NiR2J4WkMEvFeRRo4hFs5L34oDUsFBnLVsGqhExb5XdvUxkD7zqNcJYVg32Tf",
  "key15": "4JEv5rC44gFSgvNwS8kNBjV2y4eR6FjEuB17rWXyRNSSEV8tQbYiucbaq6zUGCitrGGmUv619KNysauYrjQBbaR8",
  "key16": "5im8zJLb4KmPme4kyuaXxg1p4dQSPao3LuG3shygwgrkW3wmyqReuAGZonCRbdRvbvg4xbuEfw5xG6dsaXhqJaGt",
  "key17": "5tQT9fnrmgPxemjTFVenki5s6fFLfRvDfvT7Qkq5NR442LwB5GrMncPeNPDWM91PKoaoE9ZHnuw8q5xH9E3FqXJu",
  "key18": "2uKNhv7DSGTHBxmJvr7cVZNRDcbH2RdoEZhLSKK3qp9mSgqbCGP3ybzXfs3h8FQspHYgUpwzW5oL85fgixPd32dm",
  "key19": "2FJesDVc5hoGj6YsrJsrZBTtjYFDoP32YsuXx4wxr46T3m8NBngDMo1zFAqGKK44Q9WyV34angqMsxxpJzJNcWRT",
  "key20": "2QixJKhizyMfxhLhZ9Uepzego6b6htvep7LTCPpG9biafPxFqQZNsoC7qAd4PqNrQWxnGPqnnqS7XeCZBZ5jZsg5",
  "key21": "339mgzbRZHtkZhaKoKBXmC1UMVHy3g84mmJzPDMeuN24JAAmuLt4yYssV87PazHY42Qk3pbhykQCKqqNMEsHLdSL",
  "key22": "4zNPqGc4HsEVzZKSyKo1Xoh2B61746StcrWbPz9rE3xHaFWCV7whmiTYi11YSm3DJgR7uAdj1vzFAq3B3SGrcu3S",
  "key23": "2LGxb9C8Dgb41QQz5tHJRQT27Cs4W5wjPFaV66HAAp14H3DGNPJdBK2Yw939dMedy8zCvT5MYiCKtVtR8tnCkujT",
  "key24": "vyEqP9b7cFVjxwtcQdWxhhKLe8rnN57QaVpYemJKpk2wWDsm7wDQbxUuGdJeBFs9BJTwPQrRi1CVRSj84bKoysW",
  "key25": "3H3uK6UF9ChPa8zdKbJ9uX4kZFY1EfPYBGoaixCmFqVQK1pVvYDsjJ6bMp6YaaAQKEUtVA4hD8wTnva1PqEUSvHB",
  "key26": "2xtxKUDNhcvpBZ7BZKhMGHuHrTdsLdYSnCqbpbY92XWaLa9eeMqT5QP9xME2SWnSR9bSrjQHzueiUC4e6Sto75ts",
  "key27": "4nEBdfhDtd58FrMp9MLp8KzqbmFg6SnAunKHY4fjRrXtRPnZgq6Guu4eTxBAYpuFswbXTPECj2LmMix6jjPivpwr",
  "key28": "3b9Jrxousrcq3QgebixSc1T3tcyhgAX6xp67PQyzDPjHBXyagdk7f4fzR1mhvy7ZCvu1xxL9vFV7Ncgqdkx5FvNZ",
  "key29": "5zU4zKjk9yQyNsJ6Z9gHWsHKKKGbcWhQPYm3G34MDPt2b8CKVeVoK5WutrKg2sCsLnPJcaFF4KfXV7m22WxZ6aYw",
  "key30": "3AS6aW9B4MyfDnjYaFDGycQndZgx1gXwrNXGZJSPgLLUPq3j4xTujqPQiQqFKFNmkQSyXfwiC4mAvrHzaUbUJCpy",
  "key31": "2hh1QvYtXk5W2g8tWnu5YvjTckHdkBPTgsXMo2X3KtdhKErjx94LnW6jxPYiV9n4reXLWJ6pd56o84ut88rYCTKh",
  "key32": "55C6eYw6Td7Dut1oGS5fJa2EuqPGb5f9b2iSenxM82yxJYb19czJLhGqzHsk4d5cERFaf7yPdD91h4B1zvtFyQCb",
  "key33": "38zZSa4C6TfwvAvoR5E29GHFK8AnYV3orbNQFiMgAPCZrAT5BDvH6kWejc46f5F7o4dBxwrUsE3NvciWY7WiXusS",
  "key34": "2WdsrC7fr7MKG2GXGFwmeqeY1mSh3ipdTRxburTHbiuw3ofusiJTYuHepX1JxAF9NWt5fCVSXgRVexs1C5kfdeJH",
  "key35": "5gFgssfsWFS4C46AbJq72sJ1yGdeMKNanATymFP1VCYZUHXsBQF5yk5oqcu9p9uNUr5adDw1obgTVTyiTS8pH7Wj"
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
