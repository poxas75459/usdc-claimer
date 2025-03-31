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
    "3cgkqTPJQoyVqXW82v16nYPDxyVZqQdZ8V5HMCdwtqWtiiG3AVxDHRgU3wakagztW7AtqQ6UjKDSMPL4CE2FAdx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pte1hLRrHHbwyFti9HGJxq5KcenAj3ufgYyymfoXKbJ6mjbwS8KGjG7jmkYXWSMGB1qSrjFZkSTkh96CgGBwfFj",
  "key1": "2mMT88NyokYYh8yxER7Bo6g5PQibtJwvDT5oevHqgZiZUbTpEvPGsEtpiG2YZtPxVN1ibCdjnGDkvTsWEk1ccdvN",
  "key2": "3MfJ9ZhcTAityvWpdPCA7YutFF8bVTrtnDLhh63Zob663qeBqFkok4EVW75t66KbpJGGui9G5Jm6KVbGJCqdqZdD",
  "key3": "ttimC8vJx9tpNkDVMk977JH7LGHjfwJRofrdNd7pLTfzUBd5xNjSeTFGLkwYzQA8TZARfdhsTnvDtLisreb5JGg",
  "key4": "4Qk5VCUvfgbehPqTFkS1SkPyT2bV99BgHS3nkmA865chRdDG2dVnwJKM6qiJeeiqWguy7MtGSaFbxWf93Uv7FD8T",
  "key5": "2cc3e6yar6ewv9vdrWdsi7PXNPch7VCctNofBmNnwRAX4RH7KZ4AyHepWdZwn18qPJ2Z1kXQjR1xTReqyKW3CV7K",
  "key6": "2fQCjEhv1k19ScGXmcBJ4yiD59RczDPLad9Ks45xKKExQ2DTqfaEFAFMuf5ifACjbkbbwW8SMZutqxkaRpjJjFar",
  "key7": "5JWKHDjfSkjtsAbAyD3j3yJDMd14w32w6Uqb5gcJcvvGNiRt6SLvwXjgSe925EsxYumikjwT4hpW3UtkRPMUxEYi",
  "key8": "5uHQWxqsNba6VdLQy1khgsJwsc3bZzYWFxJEnFDksWqEeyHUmeq1ezSc1Eqq15ibRcH5CAC2NJfj5W6MWYstHSZm",
  "key9": "4S2yopf8bECa69AvBL3fenoAAEJ5XunFjLUgpN5ynWuDwhHL3bVKtMZUbx3CP6NfWxjWs2WyuRUQiDXTcjPE6u4g",
  "key10": "4hC87zSGrPcVhEL1kNNoA1ru1foNQRxGF9mBz1e5ZXKHr2Ny3dQ3mye7h4erMXeiCkB8uhSYTPWPfSFoxvMAznTu",
  "key11": "59pshs5rNjQ5VLA4WfegthjYfb2kzWKPuA3cdBSpXP3YimRzCaKKV7ZwmUyEJuHmZYYvZqsZRr7wyfCqnhovv1QF",
  "key12": "5Povkma4KoVLYgx2MpDEUf4arWcvTqXBtc69w1g4zVbhjR5M6BqKLv6gkisqUzSiYWWoYPxrcJFvWUa4GGxB3ijJ",
  "key13": "3eAg33NycgcFveoyuGDKfMCYNXQQVbtUTbD2miLfTchZMYtL6mE5z7JNKJrdFFFLZDyZwnC3XLNpS8ibb6uSKtQV",
  "key14": "mR2EKpBcMabAJzeiFtboLX3J1JCYcjUPt6xswfJWy6m6T7pXMSwghusDP9TeErhxqzGefsMVhtWZ1V4fPxFnEfU",
  "key15": "3cxbEbjBvuneQa8s8jLj12Q7AfGhvdk2uq3MoKD9NWE6r6aFcLcSg85jtEgQjEWKYT5XCWzngjKrbAiprpzokAGU",
  "key16": "5DwQbyTUMWAupFwzEA7g4LYvDWnpvyJnfqm6GaDSNM1WUhsVWKYXmNHq9HuAakMmWgmSiL1DeQsNAcAZC1d3mXeV",
  "key17": "bajG3rW1DoNu35UythyqdTBfHE3qphxdQ6YfM8o3GvPTAWAEWjcFKxhJQBVB5MgyXeyy5k1T3F19zAbZaE9i2zD",
  "key18": "3sJuyYDBXeGdAD86E9vZ9X5E5Lk1Moj359N4eHFQV2QixqPCh5zWjTkwxNTufhTACw4yJqmcJa6uWppdVQjy2CAp",
  "key19": "3zU3pjasYRHNx9kdjHesQJTU95roATtDCFFLeArqXEiNGjmXgZtjg5JSwK7qh1UrbDS81j6ejrrAN9URQRTywbT8",
  "key20": "JxLuY27gjnpbnCqfXjYCTYgBBsYwsGMJxBk4SicBPFqtKJExArLTAxsxvQz1iW7ZjHqS6NxqXqEwFGqThuNWZhb",
  "key21": "4RP7x5Dee2Acbvb5drKFnLJrEWCErTXMmXVBQoXhtXbYcWKahsnuFHSqjmZHWAqjfP6vDTsHq8xoSVmj91MecCFs",
  "key22": "63sXhKaqKeqhnpvtJfZH3gJYHfg7yv8b16fJv5kG62UpxxQAVNYcfBCiQzyrRV4YaVRn6duTwrmFdyGGbrbjfxeB",
  "key23": "589K1aiJ376QpzBnCDVioEjPWRmVJGJYgW9tAjvBKMxrEzKkNb33KpVz5LWacVqYtudWWwV2cL6v82TKuHnaYS3B",
  "key24": "35jjYrjCCazmJzoKhTKvh1FPwopF4bEEzCa9281qWrJ7TgvdksQeR5c8PrMTD3QXWto4jMnjJCPaiQW9xPkkGbU6",
  "key25": "xtoAhrYp4pBsD2Y6HNRnJAR2Z8D4NQ37t48TB6bvc1DCcRygbmMzkRghitXBxcdot2iyN4xAbqAWebkXDWudMSV",
  "key26": "4Y7fhHn1cm3KiWZ2knUGoggBKjaQxGuFUHU8vVfTzMB43UURpPKgSTrvXH7vnPVnRgoa3ptHvPe3e3oJD3uraG7M",
  "key27": "4ZjhQ5greMuVvkzKpdc3TAwj7u54zm1bXhu5G7GCq4L2FFXJ94thp3em7CuZzwn1fBH9UjvHWbxaFDoaRpKutpLE",
  "key28": "355XsFuzekydBxFyB1UkorxmJycdMpRWLBb2WpWvzyFJrMZndEtQd5E3zStqJPQoB4i4mbKP3XG9j5Bd7PQkTVRe",
  "key29": "n8PDfdLqUGrJdJUCLTncMkUjtBc5TNbeq5KD2uRtRYhJastNGxd25fzwT7QuEGmVVe7s9XbBb6EqgwBjWvEDm6c",
  "key30": "awtytQyGMbjgATeHPfoCeSkz6LJt53yrK5oBTHnTSHRVFCGmjA9kLj3q7cESZk6veLNeyQhfqdJbUnuJ8WhEWqT",
  "key31": "uHT6jsSkPKdYmBdw9nQzWtRBtj3FJSfhEtSHrw2YCtuv6cKUoeYQcvwWNJ22rAHsDzZsTid19jWYHJ8kzhdw9qE",
  "key32": "2GWiPoNNGyqpwmrU3ezJjmH4kpYSBgA2CpbzJRQ4tZiY7iQurbxkLXJDxFMv3o3XjzZmxhxdn4LnvVpjmeo7qZh4",
  "key33": "26xhz75XyWuKEzP2BW7nn8R1koEEPopvda7mQG863ErD6g8BNCD1N1JgcDHjwgdEeGRsGtUjbrjvpiz7skxA9ub6",
  "key34": "5FCVqSbv6dvnQpryBZxZk4JDBHjd1scLdnsQ7M7U5UTt41DTFBeCT8DddJ9Nq2mVPs1CrumeHZUe5U9RCNSuuZ2",
  "key35": "33MoKCMF2gASgBiUjVVsvmtWEVV7ZCTPPDo952E2M6qvztSWdk1XiJckjqwALHQFoyh7YkyKLiyjaZMbZTBnkB2f",
  "key36": "3hT2mYWxiSX4fMnvnLGCBpHqqZQXbXkXgTmfv7zSiMqzWceYtGy5xfXhnaBprXYvYposSVFDt8zsb3Kxfd2c7esK"
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
