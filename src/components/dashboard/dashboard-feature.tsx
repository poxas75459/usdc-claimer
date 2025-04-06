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
    "5AJmb8JyhdD9FiPzNNEeVVEdHtCwZH721myuGKrfCcmJG2c22UWQj9uFZtYMA7HaN2RPqGBi15RXwMcVY3GRJLjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GL3uspHFwBVwkwPYgAQRqFo1v7e75xHEv4g9iuUy8Jcc4iQNdxg7FHZo4JtGfk5nURGrMhCoR1Rq686FZ7x7ccw",
  "key1": "2x1h2DHLnCj7TrfnrBaWdjc1u7i6mA3p9ZkdvAxWjt5PjcGdFowQT2YPhkgRBUSfrCWUVp3oeavAX3HQB3YsbbuD",
  "key2": "25aHcs6nGJ2XPdJp3yRWFoKL5PXVXEnknmMjo2gosaAq6zyt2TxwseBvPxn5iYfz2kaPFBnNhGwN5wBMA6uYnv9B",
  "key3": "2RU2p2GungmZ8aCoJmrW1t4iZmkCpWXE4rvT3ECrFVFunHC1SpoYcEGzQauzZuasGU9uydVvYpvCesDAMHoM3V8o",
  "key4": "5vZpNMKuwDqA7ppnkKP9VBdmRZjprGoQEhiv64Ja4HNyB9Qwz5E6QmjYB1wXTYiDYZsUbGotVPsD3mEiijQnmnsZ",
  "key5": "4rac1Y26xjp8oFF3hbEave8WxGhNxHjYQXkFCHryR4kkgLPFGK6Lpj6UpVTQkksph4N46gNE5q7rCkwgSLnT81gC",
  "key6": "2AbyiFD1eQKybjzBpwNtyqHrLLWj692zdZPBuxLrQyEu7C6jJzRCcJGvxjax8Hu71LEx4qCsEyFmHuZJ8nV28Khh",
  "key7": "3NZ3ZBB7yX2UuSwtN23gATVFqp1TU1xN79gVxaKiqAbyNP5roDdw7rAsKKXkEi3XwG6BKGrVhuUxkLjEdkbYq3SG",
  "key8": "jq1PZReABYugkUiPmCjU9CGH3HXWEqqHLQtPxcoiSWDiG5Z96bDca5JMG9tb4BPafuficQwdY7FjGL7Qktb2kTr",
  "key9": "A4tbcHhSC4KPWZCYjZm3SYvPkhtdoEUatkENjPgM8kiqaK8GZoAsvYtJvzhmBBvkUGzFamoV9yb94YPyyk4pyEY",
  "key10": "47fyyxaY1CENXpb82EuK9zcS5MwWBoMnwYXGPnWk9dmFPQqMJPxf7uo1QVPPkQDwyviziGQtwpaBWyKpdeYoCU6r",
  "key11": "5Hz8abeEgua2izcAfYcCURS7Q4kNyhWZ256L95aZde3vabYatL8Fivfi1ohGYw3a6jLd9eT7nPtPt6DBfhact5og",
  "key12": "5KZxca2jYcdq2mKZ6kdnAREXo89XQc7QJ32eXDH98egXoSMRkbJNUoZcwp4nEwgAxV1jRrfjdgagut7ccHcg9YMU",
  "key13": "5gVNJYgDPmFyhbuKk2rszV98p1oV3DeLVH9W9QvBgPgDhNTH3KwsYvAq84CDudPaeZwjFrKF4nsu7bGrasRPG863",
  "key14": "5854ZT9Vi8czdHHpKedLhwbpwvQmymRPmU2spUVb4qp2sbSZUTps7TLKsBZvwS4UyZqa69dqVfq9atRboVPJkHsp",
  "key15": "5cPX9JaBkhssUkSYXFTDm68DaoKd2ibbTJmc2yrTaK5QMmC78sjktCQ1hPwt66vHZtjaDjr4xHWyWaPFMxAFaBPW",
  "key16": "45gsJwWt84jXsYbYZTkAaza7ZQK4MKdLN142tyxSyFZaqPBD4czP2nCP5DwWmXgfbxEmXNepQi1j1R9RxWHuov5m",
  "key17": "28n59X7fxtaaDioE8KptY8aFdC9NTGZkq81G7q8ngxGNWJW4cLWVyixxY29EmnPUdoauSn5to8kLz2yqcjZrxxja",
  "key18": "5VUzKbgsPyeQ7P6EevbAMa8HYSToqbmnRMPRmrrQASvsJdoqFDE3rWMZUkMKMrTonsmwaTmdmuS46fAgJwJ6mEBQ",
  "key19": "3sSoZq4TqQPTPDBi3xq69LwgoNbgfrm5Zt6PqkcvxrJMJNFEFJeEAc6FVKVePb4zkNCfRkMW6ZDqXAAe134YBqP2",
  "key20": "2ynfFdGvjMpGEg357CMQg5wCPqshsoTShQde9uiCf4efRHHvDxzGr4JxWFhjdHS31UJcyLo9W13jpgjsouytc312",
  "key21": "4XJ6eGazcMh9GyX8NUx2qCRCWNhSTDAzq1eKhGV3FYVgRtDb6rqXWQg9gARuA2ARNgCnq8mJVur5EXaCakiFCxp1",
  "key22": "2tX3baeqmSk5FV7128eV4fTrh6G39VM7jzmvmvb4y5boQPGWasx68HFqjxGyED2VA3epVCGSrnF9A62VabPmw6M",
  "key23": "As8Ped2VjSa4n2agRvXfpowa7Hq6tGfvR62xDds4ayUmwFs6JkEeSk2hVkurbL5RBTLUvYoD8dvhiom6ZrLZHSn",
  "key24": "63eruJRAj8p5woXGuTKWGX6SupPV7YndMu1SxxZ7j81H6Ec2tPCZzkpd4CxDfjRC5xdZfa7krosuF43MFKs8Ahsg",
  "key25": "4zdTBRJzxekG6V9vsyTNrRsjtmhrrQow9iZERRmnoD5xYov4BprKBxjCFAzWB2PqoGEiZaQUctkV9vghcc9i1FWJ",
  "key26": "3ghQ7TNZfG5QYVFvS63Jkej9sJqx8z1GkWWZPCr7KuE1LXMpRyvBiBdQsUtRxrRLizuskqLz1wssExJx8UKp24CQ",
  "key27": "4TvC9eVnF7omnzcToNx5PmDg5fFv1Bj9vB2qsTVrsJV91DbRko4dzD7pzfz6zKJhWSSsHt3yd4ZZwg2k9aSKDGgh",
  "key28": "36CdnyhFZG71jpoGu5TsfyzPJjNdaeaGgujvKZBDdnS2L3232Zixz76eMsXw5LWsBTdaJH2NsD64nxR4C2tWQNEv",
  "key29": "3UW6F8HUAiWV8dvwZHq1bUk2FS8cNriXMXBvL94kv7kKbk6DvhcmE8zotxpMnrvT9fwUtQJUnUqTiWk8UdLY98Gf",
  "key30": "53y2abL82v6HrTvwd1w1pE1Jp7KrVxdwZCFJUqpx8A9eWYZznngpNzT7Qnv8bZy5ZvHhD5UWZZZ8zP5jChdDuNmQ",
  "key31": "eWBmDHgejewDqwDPi1zCPRcWDSigSz1P7qh4usJwJMdrW7NmLKg3PwGMDW7hxAUZwyZw4LwwnnerTpbTrfLndPd",
  "key32": "2ZiLuvzKpRuM8EvzCH8smr5oDgnQ7DijetcognUTtEKH295j1AwQSRovM4ni7XK9eBPBaRdYKCTAk9poMECdvDXr",
  "key33": "2pXEoAgjCYJJvvgL6PCR3qadfhfv4cg6Es6rp9PgXsJmuiuidUsAVwmvzPrfXyah1pV1Wya8hNtWX28yvv1hByqv",
  "key34": "4x96afh14DWTVTU6CzJJv9LuqgevaxzeFcseJmBZj9EaMGL9crrZEEdXcCFQfFQLhNdf2YBePZApaJtGx3g1VhpD",
  "key35": "N1EKEvVbPHHogRP1UCMTeZ3LRBs2CRsBZaqPqCCPXHDYYQewQVr3k7i45ZvLsAy6eXX6926HVfMswMX1y7hvM22",
  "key36": "66DDXM7RH3cczdR7aeAMw9HFqfTqNQfX63RYVa2V6jFpkcGfYALyBFFgdmDr5WWRDvUNSzBtR2DeccHB2frwTuYH"
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
