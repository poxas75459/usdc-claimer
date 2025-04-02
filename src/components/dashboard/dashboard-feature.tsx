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
    "5ytDsR2sPiLxQmVHZRYV4xSuWJsuRShZpkLz8H549KpRszauoegiFNiKmb2UaabUmNm6qfPGikpRMDwaXDweVhN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RaDYXEt1DrKaW6h4Fd4Uv9TQRtX5oHSEvDVAcWMPifJbiqefyt3Cae1QLLKMEsT8QtVGCwauQ43yqpPDPT7A79k",
  "key1": "3zcyvou2z3vaiR39rxEij2KvcScGReubjCcMTPg3iM8rLGpHbBHTt6JMikDWsqWeewngK9m3bthjqGaQ1jXcvasi",
  "key2": "3e1wKC9tUUiFXVyiPJda4xn2VJZLHeaLe1TaLnk1y6R5NEBTXLfbzdW5bXAovae689eXPf5YptSWUgBxeCCKfPkA",
  "key3": "4abpyauPbNBPnkPFquKUM9CDB4SMdPuPXKSBbxqb8i5WJiNoetkTQYa4ZYdrcccZMY3iNUnu95A7MzDJJpnxeaWU",
  "key4": "BHZ216NgHRNXHhQCzorUV2mTyiSB1PryXraK7hypcfJquuG7TrH8rnfkJ6wUcEnA1v1hxY5m9gQEVz6kPTvotP8",
  "key5": "5cqzp6ePTofzBU4LzPHdw973LpiARq6Aj4LmtxDzMXScDCLka56yZJ4P5FDhJvPQNCghCnWsiwdH1vQTqtRhzSTk",
  "key6": "61A9YcmXKgeMymPJB8FCoRWu2ktHWHwvavjGb6RRwcFGpAqKZnuA2cf74VqhmfhDKtFFSU1x2U9tiF7ocWvfAFx",
  "key7": "4ADa1R7HGG579qmE6FyBw4C1GX29frKmgr8A9xPSxeFSxNt3TK5c4QieYiGoV62dvzftQqyk2NraYEPS5fR213Pg",
  "key8": "4mb991e3BoGSjkdk8RtXp5vJm2hSDAPv8BmFy4F6YUZHuMsBDmToU2uPsMLKtNBGoKnvU9vhT7Qo8AaJcfsJJN8A",
  "key9": "66wmZHceymSYofCQ89Mhf4DQwQXAo6RMXxr2YXpSC1tPYEKiByipysGqcWKQXHbfWGPXawasA9usLn4jFnHYVNRe",
  "key10": "2kCix3FRg6VnG5T5eFCPbYVs7HvYGgo7e7W9TtAggNLRzjdxUY9GanehNaUabn5WjvvPf5Gg1PeAZBeMqYHKwMLD",
  "key11": "2pqqCL9WmunMQAqdXhbDcEAT2gKGkG8KJrQ6chVq1v41u7fU6iHHLTPKSWBzRjgHWaKkpakso7NPT8h2wG4DWTEH",
  "key12": "3KyfyFVp7dAfvnvpJECfdHt9eY8ko4WKcqPyXuvEQGE1r89HGbWmHjcg3erwtWncL5vtWpZgvSvU7PbRNcNEvvCi",
  "key13": "DtsLbJHTFFnFEjteVvVuzhbpzpWEgBVTHor8FqG4DExVgUnZ1D27RPGXgNhqK9mBAjcHEH8tJ28Z8Lxw5HgSuVd",
  "key14": "wm4rhXCyDoGwZCVtbLmsdajCLZTw2DA5ub4nAz8QiATrgjkTZ4K9ftee8xK32FkV6enmckZYceDTo58JryvmhUk",
  "key15": "kbaCbCy3Q8H3bqWJ2qK9hdNemJCvkuafRnXrVyEV6vkW8pw4ouSMg7UnkuJDFH5KR9wNtLxHKAUxXrN7ztptwhN",
  "key16": "3nCUgNRMUoxyQeG1cvUTkRoWoCg3gBuUpPAdLpRhieUR1dgSMXBRzEviqh6EPGRzbCkpqfCAVXUQMSM5PMddfd2q",
  "key17": "3EWVJBUcMTPHoELA6dbDB8j8GjDad2cKb9tFgJBNrK2UZJGnLxq5qvUkFFzYUP4xKpSZRV9ytTSWAbBi1ZA2khRa",
  "key18": "2RZ1d1FksTXXpEihs6yLToMXLDodVnBADfKv9Xvx5Kgfpx9EGbQhUK4iSiiuyFJXdNJysBbgwRJoxZv3t7zKiWmJ",
  "key19": "X8EHNGjCcdDxCY2GvhHRjqBUk5MT8pQsakcB9bCWzbVnUT4mvTcPPsS5jF5uw5ioS92NFerd8qDfvf65ovyfy18",
  "key20": "5MGEpwz9LpqgMt7TsaWfTszYXnQfNtjV7kQFQoivygdcENUqNmQerajSuWG16BUDe1RWBKPy1Jqmp7kxTyyoULAo",
  "key21": "2tuYjsM7dMLFacPXSRZvkrpAni5HzFf8UrKb1idXRdoxwW7sSXdn4oZhEhRpsu25xC6HxL8bBCBV9viJJvB92nMY",
  "key22": "4FFX6hCRNpdgH3vxSwFWMF3ghrtTzFLuoNtZUGhGigtzftdNrvvHxJFstiJWjtBQs89L92sPXtmed7oxW9uyecEx",
  "key23": "2cdv8AJGUNEKKyd57aiaT5smrw9KMkXqTKu1BFqp8HZfZG1sMXtvqFHMb8KdexUpxtTmb1X1LQTShmB4HyCcLbec",
  "key24": "2runJXFMLJxcQAPnpb1JrwFEGgvjJD2fP71d3i9JmQ5Wt8fz9jVhztoCLctQrip3uxttNstREa9ppRHtQKMiGaGe",
  "key25": "2otzJGbCuJRMiZbr8YmSetdg8iCasWZncLxrtS3NaMLyt1TCBusqzLj2YSsP7pRQXXyhcwCRsJzVpe66o795tf7t",
  "key26": "4dSz5FXxpXSaNcCbhBbFSptMi7SERNhQiQXm1HW6x2y65kCUu9J9ikNcH5RSvEa2bKTLerxjZQbrMRBxesVsjYG5",
  "key27": "5KXY11te3shANtoS5aDfCN4fCx7aHfDtJPJoESRZ2T7zNgFJgYboSs5KJW9zaWRzjoG54xK2JQHnCxZs4CbNyGGg",
  "key28": "4ob1QGH7y9S6mZuVSJqvyvfVxaiyej39pesHSSMqLBnCdpwJ3MQt3yWV59TjgTH55sEejwXzTX3HAheHumpxFbHj",
  "key29": "28TkWbgXQbFRPL9norJcfbP8Hj94uzhd1c9cp9SfcdcPRfSmV23myF9Sh1novfnLz93LN5NcYdXqDt6T5jrLQGeV"
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
