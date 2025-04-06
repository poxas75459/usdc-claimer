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
    "22fEXXceRMz9iif6SXauVJq7EhmXVSetvx3DRFqgt6XUrdjSzZ8Jb8De8KfZLZEwy5zVQ4fq1BbT9KfV54zpvhEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BeUm5dJ6QPkzdgdwwUHf8wQZyQ2JcYDZKJ3mBDG7Uc2wSfo6k14izAhPYhz8v15ofSmUkhSsuDkaFkwP6aBioFW",
  "key1": "2c5tz3CcHuvnffJdFpTfxsKSkA37rfkqDQTgr6cY94KruoWa7Y3km1u66fXCvTWNnsQjwJcWrY8jMm3R94ad8Bxc",
  "key2": "4Fo9oR4sxbAyhMBBi13E3TLsFkMqjx4WXXggjAuRRvjhGCYY81MaemEfDbhEAxNPPM3ic41CRTrrU71T9cZ5zUeK",
  "key3": "2F592wQd98ZqJJ85ahASYJczVhtduBY1gCtdbQZK8DF3WitXSzXYq5eLnMjLi6aN6jh5sQMaQ189WhWXFi7eMPuE",
  "key4": "WTo8b2BkxYMgi5Y1GTXuLG4Thi5yeGG4JawfHfoK2fgH7u2qox4dmnaUKkAESavm2z5voWCJskCndqSU2iHnQ74",
  "key5": "4rioKDoaCe8VUhXhzXJH9YfdWTu4mAwG6KTjZjdw2MYLsbLRx4dTZfpgFFioSihCdnhYUtsTFnjMyTEEFP7EJhn8",
  "key6": "47TGJ91JpQwZHbfVT4sNuonSGQZ2PdoVM2UJYdC8ugNQS8R6totpomPv571z9ZbQzRw1Uc51rv7sQh8aJh2NA3QA",
  "key7": "3HxnPBZ2vpKKDsY2u33hyx4WiTWqv4cr9YB7T53eCLgo29pdRrf3TZuqhFJ7bhfiqqz7CjG32JjPJ6CMWhW3E6mL",
  "key8": "iqaLSbH17WB6F21iKDUPrabP7sy1hVx4KahtRpUzR9Vfw7TDtjTLXPUYHXgECM9dboXdCT2YG6738LU2unKx2Tm",
  "key9": "2RdfSEpAmHNadJ1FTb4Q2q3Nb54Zk3U6zzHwKMBA2GKJP4PtLXVv8q8ExPvEH6EQe55qKxcmiQ8L3GHnUXZrLFJF",
  "key10": "33Jqz4Y6gYUEGyu4CNK9eyXjwATj4eRL5Frx15xDgPFrrzqUyocR9kd88c1DvM2bt9o1pRmCwmnTsQF1DFmnxVU5",
  "key11": "6Yf2YbUYvjjsRVjs2WJ4cGXXpg1mHiPyTWcmkZYw1vPmdQj1Wfk6ysS7bdkBqE5ctahazd2nPoyucsEGF2X4feT",
  "key12": "wuDnJGo7nRWXCZupESk9r7wcw4YYVFLDmyvojhHCpWN6LScZszCwbrz8Szz5AMQ2ShmpKuEcKB5agjFUCaUcHwq",
  "key13": "2ARbBmjDPBLuZ2wMaQhtrseTjS1M4gSTqo4SSsD2foSKkNd5qbt8wawZLZeMxdSpMHK7XsYRZkzcP2eS4xkB6pVZ",
  "key14": "3G1yugKqJQeuxraWb8JaKmvyRDXHiAFa7ZWtAtKuXAE9GQZVCBRX3pCWKH6P3RTy7sBWhvCEGVTuY1b9M9bndC6c",
  "key15": "2T5ghLAMXkAZu1ekwzCZqoDNnCXyt73GG9puqx3zohKgPPLNqg5Coi3GPW2Kozb8rek8et1HG1vwaHjTf74fvn6k",
  "key16": "4upSqBTkhDdQNCEk6augva9SRTR4XKrKicgcDGhJh1dbSXcN77PqbFkjHPmrzdy87thuJGkUmGf8DmkSoeSuGBUA",
  "key17": "2VGJMjZcpjpFonDBhQfXRCWwhohD5E5Ay7kv9iNp4DgbDSoiaFUDADSxNFNZQRXTtYDb4rZVpxatbr1jETs2Hpdd",
  "key18": "364dFuiY8yAK2kZabKcGKJjniBS3nxJwdBrsxqrGkxcHhm4S5QzAokerFztuhtL9vVjVcV91bY66zP5TshHLJi66",
  "key19": "x5zLnSqz6CWixP3ec6Hnxc2MjdQNbig7acHunoQx39MJBVTBDXNuuqsSoQCEKQssjcFbfqMiJiPx78xnrb6Bm7w",
  "key20": "5WTa1763KDusVtaJsSLekXp8H1ThuVEpT3o8QGaGF3jAwYQtB6uLVPtWTutBnT6b5hbLZsMCgkS7LJgXJgxanMra",
  "key21": "UZwrFbErqmJ9GbWJSPfSHoMXHopWSskBcmSxscR8kMnZVDBZCLU3tK4W8xBUeqCforyo7cwVYEXQ8HYHtjmX6o7",
  "key22": "4nxWYBmRtoi3XvZ35i2UfTbaTvjVQsL2atpDMzXzm4jhf7ys19WPArzRXXbBMi9pLPcDnyRXuDQxq6LKfQMbmJbi",
  "key23": "3FdxLAusaKZho5s7pidgXhrXSUW9YgVt2LEoKQqgB1XKPFSsRSPUfzXV2cbbXWRYyj4ut5wEkwEUUA2HrAwwc5Rq",
  "key24": "2mKJ52k5c6LPc9kzSCQuSv3r6iSEd5mHf1Hs83maQXQSWbCNjKUbHVsXG7gAzTYWHxeXkERgrmCwdJZ9JGxMWAJR",
  "key25": "4g5Gsu2nyNYYGeb9sH3yAgSt1xPNT5iLYxm4M2TpoHLSqMQTnnKhMnqxM3hc43uSiWHxPTBTZFzKo5XmjJGpEjLF",
  "key26": "HVnJ3kEJEGr6HrhZt6aSg7zZz54y7qyJK4NNmaGsGy5URJKmGXfHBkuGk3nBf4Un9TaryNBThupX8Aswm7RvRGZ"
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
