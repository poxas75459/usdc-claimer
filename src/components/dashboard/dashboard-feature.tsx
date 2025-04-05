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
    "4yfxiXTmF16kfbyyPKT3xdt5GeJTGXDnsTf1zX6Yh77EU5ENGs49M1BJghEp5Jq9gLTkSs9hbvBnuaJVvThTXjng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L94XRggPh16WrQbY2wwpG2kudD8WQ3czFgDzCV5mSNRgvBK2Ac3J1oYf37Tq2WHtKMKfqPnPVucxro3XWzTra7J",
  "key1": "3TDMiHHwYd6KgJ7ZfMqUvurccf63Ga1X1dohHyTJsWvLy9fCCdMKYKJVwZmrzP76KLWUwgeRZ7ghmSeHwCK9Mjhk",
  "key2": "2D78njEcGWbBcGLzZVKpiuBcaRMoxrRXhYHhx8tQuEVsHW6ELihV8JWULyiG6pdZTorL7TBb6xSjpJ9dr2YcXVZU",
  "key3": "y3aBww4T32WwWkwaBjwRoVGKyMVsxu3WV1G1uAfntsLGdJMnrKXUFZmWQQxsJVhL43irr8znPfuEx56fbyzbL87",
  "key4": "YFt2v5yQK4j3GA6U96wa4r36EZU9tE6wAqbQqZ8AJzsNXDwYJsRETpLzzL6AnTF6jj4DYbKXuyeTWAvkvMj8FjD",
  "key5": "2LmFH5s6wn87AV3fJ6VC645kKut3sTb5UZYdtnngjgP5T2Bq7g5iYC2oyZicTREdLJBB4y69Xc5WirzCHHML1fKX",
  "key6": "3WHZZcdqPKyx8x1wSLsr1V3GLEmwnRjqDEz6JMBJJ3tpqCDkgkv88ha8or69aD2ELDKfDuq6nq4L4ZQ6h7FQCjH3",
  "key7": "3TmkXAP7Tbb7QdevKJEj4uqEZJ56GhcSUdTLJYrvsYfruaJyjYD1QxAMei7BfK49FK7RzCqBJqD4y3ZJ3xSZ8yGP",
  "key8": "3ijN4MJfXSxDYh1Zaqugs9bijfe5yT9K61HXzySzseuS4t6spBEeqH1y5YiZBNgLzmtB1GMTexTvLzSVsVp76y95",
  "key9": "3PAACffckWScGCgttA1PmMVGdHmwjarcbofTmtnWKgcivvrzNRJ3V1TD1QZW2uGm9DpkogqNo5q2CRxTr6Zyeraf",
  "key10": "3tmJ1nfUbyb7K9iXdmMtgc7MBUaseDrV6i6wgBKRHF4i1USJ24ufUhjCSxP3CnEZY3rw8LSmuQJL8feyUVxtRarF",
  "key11": "2rwp2oSrKejdD4E3i9XaA9ztedb2uCVL8fijYjRTc7VCNoMfxXE9oagkhYQDw9RFZfM93fhRAHDXAp1W4vXDSC7p",
  "key12": "3qRhYfYu95a8XVBPq75CJXbzaHdcmUricDYenzNhJt3E5hbP2FNdNYvQiAkscNfxv4TU672eck7mh3KqJ9cN9y5z",
  "key13": "sEZh5UmKurgfjoCqsq74PgzMdTrqwKiw2uscDHzSqvoxQY2EkZPUF58oGFLcDHpZB33EDuvTy2koe6Wrr1bR5fF",
  "key14": "2Ud6iPMngn3Mx8GfpdmkfXtqtKUnzPB2nExDteb4AdfFYf78poE33fY2bcibbrxtJyXcUwKKTEPM9enHzZD6P5Pg",
  "key15": "5iTcmp9Ri76C5crvVVct7pAz1LmpvL2f3WFCf75Cvf1fse4rJM9wfke4sYFDfoz7S3aNH8ThVzHnMhw8mgvQxoQA",
  "key16": "57usA9LyohchtCcg1LRy8dGDXL2EfRTWozucUBVfdJogbHq4uNs7Q1wHWcv5VJLKugknF5ci9rUZfxJ6tP6e5hRa",
  "key17": "4BCCxM7XEuX6vdTpJyseQaq7rQpeK5fYwe3XzFa39UYrwAvLM6JFDGSXE3Kutvegibo82hYJ8bcBVa9jzA6QMfq8",
  "key18": "244tPAJmtXV76AuQEUxutyUexTG7Vvyh5Abb7BDQBbKP3tZ7unWc1JiFMx9URkvuiGUunFCAkcaQZjuEceKoMosN",
  "key19": "zFJeHfa6JHQBq61gTDQWzympB9G6BnAQGmNZwnsJ2iGyRqWGi3hFSXX82ZkLuJr8PbAXz8qe21LwFRTgdFrMfaS",
  "key20": "2JBeGSDcW8JtNF49TNUbWie448WbwzhRst2DdkPmmpovrckRjPbx7JWaYfrgY8odkkH8mDAih46WdpXFBpac5htT",
  "key21": "2MxhCGVeBauV2FXEyLcoSZcVD5tQjbFE7Zi72mVfaxC8YwBSCmfkEmDzQnQC9fG4LfKFbMTAsNhw8HKfvrUHrb6F",
  "key22": "5aDj8vJLyGUghXUnxHaR4p2veF8H2rVeyPw3vVvkg9oMhagGpGRiwddKxjcs63iSA4oUJ5WDc5NtZEVra8JHn8SU",
  "key23": "4B2KgsSKmizjQ7Pzo2tfbYtJSNPo2iD7TzZPon2nGvX4FuKyEKbnbChjUyrYDbHxdGjsQ4iQzp1ZMF47bfjyy1ed",
  "key24": "4hq3yYKYVxwhFNP2yCymr5nHhwoG4Mnt4GJwzQXcoY2G7rRPMWBe57Cxw8CkcuKfddgyjQJHZP8tSxF1hXb7Ux14",
  "key25": "2dsAjJFqHoMWG6SjcDwgBqbDV6aPwNfvYm3NRfEtRxrpeypLkbdLXa8LaYBW1wVpMxzs3u17VGLoLzLsxzdGzTmp",
  "key26": "2CAtZ6QqqgD1Hth59pBVzeggtqEZMqsK9wMnAVXPJNHRYdKMXS5hSDjD3mcaCbCAfs8Gpz3AguzAbZbQRrPfJo5G",
  "key27": "2HtZ6nkrdBQq4rpfmuUuS8fFF91TRCyDPi64uh1aQUR991M1uAV12rZcepYwJ5zgUM6LkJCHTuL8mubqLbiMBznn",
  "key28": "22Q4G7j3gyLc4XCpcvknuz3jE2qk9Vx7ARtrJrB8VUMBXhjKwxSrGbu5fRWZ7BFFrMYKEj62V5KyPLSqGjTLppPQ",
  "key29": "5QutJbyts5davRTdTDJWGH57vXJc6CPfXjkMy7xqi47aYWGbJb65hVZ2MW8kkENb8W4gSS8Fs1tbQXaG1WT9Vw8M",
  "key30": "2CZmG7uSNZavnJuqBEt94VF3DoxAKqSKq4rvaZApDqZi4bmE7gcrtoJzD9GoHGonXx5fccB6TVaHTf2EKPZHirVJ",
  "key31": "5rYNumaT5sq7W8x57C9q4EH1iyP86ksAhrDGbEjKZSmrPgjFjiYF8VRvxFpSVAFDPBP66fxtYxuYUCYiZMEU3inz",
  "key32": "3cDosDerWTmX3FeNSPjNSwv9xmLcFjPNUNhZjJVKY2zyGDkF2bFLvGnsaXdS1e7qqBZjLsusvK4cNd6AtEnVVLya",
  "key33": "5Ew2tx1qgweCEuVa3C5GG54SR9fhjTC45munKuTZNYnSXo9Ga5ouifUQDYWz8A5ufmt4y1GhaRuzMWQVCWCM6nk3",
  "key34": "t7z4czMvB9YtEmiL4DTL31EvA1VZzZFsp8UEK6DP2hhk1VS8tzP9jN5iqLjhs89fPUr78TrkdXchTEwf9WUMpk3",
  "key35": "46GTsjnb91wa79DEcxxSMWwmJevguapqXusMgytgayi6zWVTVnQt3YyDVUGm8wq4X3nAfPdwjdJ8BUH3oznYqt3K"
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
