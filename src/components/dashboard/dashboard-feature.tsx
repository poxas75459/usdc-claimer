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
    "4sXtDybkn3Lc4hd7BrHWyPpWunEwWrVmw5QHmk1HhSPoeMVvpBEjaum5PgL8JWohf9fnFq8LiUqDYJyDuMMyUiQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581z6pNpAnUxvpQtjnRy9Av1T9Us8yUTKJBEZvh3w7VQVsqo7Atj85VEQrPVAGNxyw16xwFXywNhiMyKEEiyKLEx",
  "key1": "5bdJJeosncZDXmasji1TpSns3Fu4kRQnFqgHQDMkrtJ85FwyrPCCuTdmjzdXS34kVTs7kESNPjKjFdCzUXYqnhjs",
  "key2": "5JeKJWkAEKBLZZ2sNgcvZBUvXTgC9SkenSrTUvaPfWyFmT5FtbzAmgup79UqYwdLFETFpk8eLT9RM1jLTdtJPpta",
  "key3": "UMtCPtdazcQM8cGbPqp4T7pFgbnTqF95ZXt8ffdknWbry4629jGBeiw6tifT8DvjFG7nFFJqWfv4K6kEa8ARPPT",
  "key4": "mbYKw3QD8SemuyTmMpDXkUaY3YcQJHQc8o8n2ZvwCyZN9KBUnCv1dqvAvmoQuDXKcQ2qAMpqgq5a19SfYhkdY5b",
  "key5": "2mhjyfssNx31fCybMTELyyapSUFzWv8GuZsDf2zG7NgY5SHsbRNTkDuPW5S27oGfvT7h2noQgRUnkwa7A2zSMdH7",
  "key6": "4DtzoPrDhRXCpRFGn1DeLokpsVLaLBp1xEAW4N66u2sqsuxL3gHzRmbUyCLXUZJgCBESGuFY3eRXAcXQADUTgU6U",
  "key7": "2TDYqBKex8WkRp32ybHanAMBEcmJ5cT3cgsHiK1yv5X4UEjrSZxv2iWReVTHed51iJzEqDVbHWy2NZx2HqQJYqpm",
  "key8": "4zX9M2uYtASQPZRmKcQYn1X3MrPuSDRCreFrdb1SBPBcsP6E45y6Fe8KEqutBHsCALwksP8FrXfMeye9kgHm74Xv",
  "key9": "2GWNkLgxJrZxquwMQLw2hET5CQp8rqr2yPpHG5aFMJcWw7Qxr5yTsf8AeMrzr1FknpLsiKh2sjqmbF88sF9CtXa5",
  "key10": "ZGhNBML5ABCsUBtvqVk1awTxdifMgUBoJsGkSCcGPsgndp5dMBiMsG3ELLSAoA4fqaKYyRVytbPE64wfEtzMGzU",
  "key11": "4zisb7RWC7mJ7XwZQyhk4j28KVCuPhTZfisRroYt87DdjtLL3hu9Xnq28MKpK6jUnYVdKeSGSTAuixhTNzT9iJ7x",
  "key12": "CcURXDW4ha9a2Zy1P7Aq8HdubffcsPt71nM4a2kjvV5ABexQNsQfJP6HjjnwXCAFWUuTYSgYTbSQPCwVTvNnwMW",
  "key13": "5EKf7A9Ar6GtoJZ39qR4dsHQR4sWXCKrAp5S6hSs1745x5QFncckPTQ8BbMS4kGPQ2dyVExH5D1pHqfwWiBCtwTD",
  "key14": "2CqVvAABmfuwssZ5AwAT2SYtCN7hWaXCbWzMsfENcYJttpSJSWdDLzUsSjYssjM54pRHDvr8mByp5oqqspXodHZk",
  "key15": "4ySt6GoPg5pKdYU2ex2ZkKzeabMXAKHmc8Fd4VrUoA1tV1qjHSo4RksyipwHsajuy2Pi2u5pyS9zTXpSrm5aSUTc",
  "key16": "5FUyCcv5co5Pri7Nn5bTVr2aWB1NNbeFR4JneKhUcczdgpZzgRPpVSFVeADDEjmpGWe8kzWEtcAt2uqCYwrzyKCK",
  "key17": "4cMbe1bQXqfSKqhjHxqbR2NiyJSfug7GkJ9cqrnmaEC8Gawo6cnpFXG4QVdHRh7aLSLNeBUAyapkrWM8EANk1TjV",
  "key18": "4sLrsqKGSqzbJya52h1zPtQ1NtUrtP2U6Y59bBhQF1X4UdNQKyw3ZFinqHTs6fSPHGdx6AUEYnbzBCqEBD8RyiR8",
  "key19": "5s2AWf9nCbKk6ERd6YDA5CnchXLRoAScSMwnXFPTp93mKVr9RRRNVpCRAB1v6hYbU4PG1vyxn3PQga16FCJUBWHE",
  "key20": "5yVPtn915dPZKus3qifsSGy5pgWbfjTRd5FPXnkKpyWP1MKdhd24fiLo1SDZ1VesAZCfu39WsWAMUZu7GcN4hnyb",
  "key21": "3ZCgffWL4CmQQgpomMrcZTq6jWZR79oALmZ1qZdFFaPo9hdkyNxjLiJfkJaBxsfatakzmDYDpUkxyoxqnkDERSiS",
  "key22": "3Da6GBy8LFd93cook8s9YcioEUVnEfory3yrhCLqkoMktQSrxRa2Ho1VKk6t2uNxLZifbGXWtp8FQiqhDQGVMPDm",
  "key23": "2Va2oxrpo8E92PSrZxiohDkD9uuMX1xd8iaXF6FGeb7fmuabCJf1ESVEMkm9UvJpnotRTAoZ3Qid8eb9RgyjMPzr",
  "key24": "2F5Z6eGSvMtXfcCqRusgW4M6DyBVGDP7SqovXBKyYbJTRU9sa8ywKjBb5XVxh7pWk3RtPTYk87EyxDJbz7Y6jiY3",
  "key25": "2ogQ2d2ZfB1zgnQkFY3c9wNtQPkreVSrQiVzGWnbE2NK1KC9B2PXdTK4YjCopPGu5Wdz4526KQ5o2t43uNMNAgJT",
  "key26": "3zCXb2TFFrCV7qBXijLUT2BTqLLJdDDfkKD8Tntvs2UGpSgZFZcf2qCp65e4UcUpserUqzN7gtKAeLFMvRA74YG",
  "key27": "qddeiWT3cZD2fnS8CTEtBu5U6Nethi8NpDbZpwnuWWMg2FmPrmBAzmioPJqvJkidn7LsrGE4ZCpqxUKAJHSt62u",
  "key28": "5GTTt7daNsUxqGdhK6jBNicimZpaYGkbYHLJPqg8izaPX8ts7R7w3ZdopKGu2tybovj1ChmfgUVNhwxCoMNEYygz",
  "key29": "3pHMCxcm7HKg8M3u4ag9G3G9ZqdTUzHWGzE1uV6PyYHq2wsHHZs6fjdDbdPCEpnew9pcVvzo97XqVSJVVuHeX8EP",
  "key30": "24ARtCYDSXexH8skuYehEeJBK5M8DtMTcDj3CHFzWBhfR9U8JcYWnPYWhojZDfqUWLSNQy4p8gb5p16XUhumUSp8",
  "key31": "5QZBDiR5mvzE5z4TQkiDoPU18XPnkXa3Jyjr8Ntzgf7xBXDXQotp2raivYNkqvYS8r4wPQTBvnJiWRqYt8V5DkF7",
  "key32": "2z2z2fLUayMPjLvpsUruSKAFzR7FwK5JkG6ZWXhX7sSLrC3L6wrYtEsQWF6LnLQEMJet18JXNdGuj6BVXhnGvNSo",
  "key33": "Szk4rxa9JNC3V7H5ZQA85CzFMdkQUEEWyZVzjaVyUymy2fjZvPv1SmFWijAYRngfJKXL9WhWkY4xou85Y6ebXYF",
  "key34": "3DENXuGmbk2Bzvf2sPyBmqvMhzUDSHTc6YwTWTLYJW4kULGsQ1jKnULwmYr7xdQDTtYf2TBjDCKeLGFppRw15zLD",
  "key35": "4yUG9BVbAkYwDSFgkMi6nuNzvtiSKf7JT8FkUD6bfDstG8fxJ2BhkF9UuMTnjpzsThx5jVJFwQDBwZxhcU46wFfc",
  "key36": "3WA2jmDB3b9d3raeLFwq9morPnmcC22YoFUJZ54Uq4HqWR4uxep9Wp6Lqe1cer9PsgvGXW2ktjCm7yFBfdW9RQrs",
  "key37": "3UuvyExBzawm6zvP9mWHEtuw4a8YZCtoXShvFaAw2FZknSZwshVXkgEszHW2f33zuGHVovRcN1P49DmaLVRuTx3c",
  "key38": "5yeLYSgbGDddGkSe4j8cDjDsDde1gxEUGuUCW2aJitAgoT8F2u2v9zf2JABc785viV78FWc4itRc49QuNAs4za7o",
  "key39": "2hkMhqm3uvpSXZvWpDzPqrPY7JHDR9R9nVLtQWmQcaj2ihWhN2qR8bi2priGpkHJEVJtMp1sm16RGNpiUw1QWEss"
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
