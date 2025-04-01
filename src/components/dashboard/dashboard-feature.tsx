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
    "5KNhWQyJbqQUQNBYSWnwSKTZ4gxF1CVn6bvhqEubQpVSs8sqYK78CU4p9gvR1kxUnX31myZL78uTjaaEDsGF4RdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3JXFK24Gqxv6pXhJw7azcd2ZzsgSQBdN7uh9559hncbUnbZLwvky1XKgz2Vn8tKDCiRnBiDDmTiCDJp5yxN2UG",
  "key1": "5fHw5G5MBSJuNcNFuQyhTQByNZY49kvfvsSan4jPoyfUSh8MKUUjX1SzdPEDGBo5g7NLKWJCcEBksXKoc1YUAXCt",
  "key2": "47MFvvEZNY4uD5P6rnnf8z4SEtsNg7cKq6nnCWYony8WB8U8WhLby7nGiBWYWYUwmfLbSicngmvW8PGeoFpNpu86",
  "key3": "5SYbTF2RPh9wBKcL7Pw1aUzq1X9XbAYCitNdDSNb7Xk5NFxkXJL7VYQveM7mKfsRDwRJdsud2pgaMSnMwYc8BFwJ",
  "key4": "4XYj7TLshGYkJcctMwYqSFNH6c4KBJ5czdHwrA3HjB1fFpAJaEjyTfce7VK6uU176dHoeQu7BnC1ZmfPV6t3uhKi",
  "key5": "5LGnJcLb9tTjWkjUiMVhL8M3TR1jRaLcxeeDynDS4RVME9JPYr4AZ9sWamDtcUFeMjyWDJydgCcVz2M4tbzq7WFi",
  "key6": "4WntFxsCTqwktmUPyhPT5b57byBkVEmq88vMu2M9H9MWYNwt1S4RUnWAU9EH92keojsbRTvkpK6msk4NKQcJV4id",
  "key7": "4MT3Zb8jzfFAvPyUwBvNs4t6pRrQyMaWoUgfPgDYf13xUSsj9aYDDPVxQ3oYg4avLrqyszsvxqPAd4HtvDJ647DV",
  "key8": "59Us9ScK9JQrJPvPqXccpDnYDmnhmAWr7hG3WL1FLuQZ1QGsnDqsz6NV96UhUQbYH3bG66LaFaQLmcAdawJBcR2D",
  "key9": "5UE6Nh2VBRAET3auYYb2o9qwnYJ7ZGCW5uJYMUnFD59sUc98VWS1QczAbMVswL5bVLKwXyNegBVmNEdgMCEbp4WF",
  "key10": "3XTtu6ToFU8XdR583mtHrms6zbn1xcuvrjWGHznC5MXxK3vqArqCrh1CtrYKad421quWst9gexJuj3YaSGX4uhwQ",
  "key11": "5ATgnkYnzqUvmvtmuWDxiCssseXGcajbdWFCur3mCosxgythTbzwsHUmE1JFyANYKrhGHPiahi11CEiT3xdAXPXz",
  "key12": "3jVYkbhhudQM8mznJnG4s9qywGX4LxqeAwooPycobT7gUpAu2TmGsRwEcYJoauLr2ZbV8CCm8inUS6VK6GxKYVYE",
  "key13": "36dtGN7u1qJ3UoQB8zeaebxGX7Mn6EAzZ5UxqU81gP5vp5syYWc9uj5QnPiZC8FUTm4h8QocJFubekwNmmpkM3Pi",
  "key14": "2scAUQHnioA9p8ThvMmApSZpUxVcn9tq9ZvXQa8zfC7XEQboWtSWWZNJW1faERB8fhXb1LRgaKxJPUVyRfxhpVmH",
  "key15": "8De3QwcLCPDfZKXMf9NAZwuZMwyBoWvmQpu2jqHW2SLQTooorLV3ku7AKPvN7CJB6A18fGvsDP4w4aGcxuFEBjt",
  "key16": "w9iuTCoeoGhjrb2G2FYagkL5w676ogtW6Fvu1tXG6gsCHxyAJjmov9k6Sim1Y4XVT2LjjuNSvuENsGyJEXS8N4Z",
  "key17": "5tSA53a9wS37vUMYc5GjLqh9ZnbkmXB9iJ3yWZSSatKuAWhnUxJXQraZb4YsQMUp6guVDcEzpB98uf3gRmQPFUdn",
  "key18": "64VxHUscJsiJUEZhhs6MF5eS21voiYFMTRTXL3DpG4MmLSHuQGeMxjmFomoyjyXXFM2QNFW9UssWz9rdAXBT2Tf8",
  "key19": "eNSmwb9frtdYCuqS8HGKSsp5nBEMczQ6hFSBm9rg2WAkGhLhHr7i9Nws6f2VS9LtTNZjeEUGZ8ryyD1Qwooo98o",
  "key20": "5mVKCcStohHpRMzJ88frda2XWC1nY3rXxYNW9hgvyra8L2V12jsZSRT9JqjJYea5xrsWSv29MKL28dycX1AcGe1A",
  "key21": "429z2J7iV6Xkp7Tq72XukzkCamAANRNPLA9NKgjbGzB81ruAdMn8otbK8PpFK612BD1toBQ11TGK2DRB8kGiz3S8",
  "key22": "57NCxEVEXtoBZYeMQ1gXkuQ2twzuNdCwjnACtAUAsJ6MhuUSda8ceq2zRJCgYYjimJBJZNmyfCa9xqyBZ9ZLq19Z",
  "key23": "3VzEutjbw2FZRfBKc1CcYHAdYqf1FoczB78QsBnXF1hLgU9kK2K2mQQTWQd8wfRKPFEw1zW3CB2324SqYVnKvHT4",
  "key24": "4bFdv9bVEed9ykd5EWTrnmtRGAsE4cFJNbZ2iB3GeqvatdUsXCMynxr5TgBqvaUE7XocCZ12rNny7aMoA17Pgarh",
  "key25": "3tDfi8ZrL4f7yZZXJPd5iWYqErcp9AJYy8sZU3RNZ4G44uHk8N8BJJSeZekomaKWrCP72nkq71JEQe5uhD8U4VpJ",
  "key26": "4iSh3a86sKwryDi1Ln8irm2BbJ2mrG4YYoFpVKjyfPB1QnrQuJJBUgekkvFaCxY1mh8s2FwcvCK3QJcTa6pZufau",
  "key27": "2GBtHW9sjytvyxS8Abi63zumwpKk613EiQhn89i89SPhSUwDfRd6Dv77A5b56fRsY3aeAedNafSWEgqbGSDG2D8B",
  "key28": "3McMw9Meyv43GWGcKLYeVAsJphJMpneuX2Y4H4LVGcB7RAMuXzuDUaDGWLPJuA9dcKLeud8PRAtSrFthvn6KDSk1",
  "key29": "2oGjKdttQNHyku331wvpGVRbxacYtW1KzxxQmkNbiVM2Da85QbsH3Tp3xtW7srbpK2AscvVPugn1ymTpnWUJ9zqb",
  "key30": "o1jRDyrrYCMzReGwxitQYunncbkQRCJMSk9ULu5T8YTCVPLThVZZm3jcP6mfANsr5SY1dUmPmmz21Rb4scN6ggB",
  "key31": "2SkVviQVmUZtBbUKLWPxGcdEsRuxXkHutxzdHdnKzgKExc4CzzuMbkAbzNMsSBfgN2NQu5kYbkJRWZfjQuCH4A62",
  "key32": "2SZ9zFwmNTVZZUH8PQcseJ7TqcWGzbnKVw9RR2AdvmBHXZWjjHqLuyhnLqUpiLp8TBVo2xKbX3EJ9pioCAL9QmCZ",
  "key33": "3xNt6ZUFNaQdbXFKGEJP2M2GjHHm2vUtAnHGAqTuqmCAUoWNdhPubnxcNMkVAdN7CBXxmMWjTi1VVaio7gcVii7v",
  "key34": "3FQC924Cx1nQcL2eHRFTTgxCGJdes6vXm6Xs4CpqYnPsT5SWjEAfwyYChR5gWijwWpDeK2tTMEbsSSFjzQPzgMhy",
  "key35": "3tJdq41b7x5cdSZN5tG9bFKW1dPfkGqYeL2t45rChiFNWo3R44YcKwmdNrYe3UJdVH4PrKN187CKKhm4TFZJraHA",
  "key36": "utSeXi9A76vS2FQkBwZZKRtbTUE66hjaBdmAqd999zT3LivQZmj5Jcui5W9fLJaFKU38JiJAHR69CqGoYmm5oQB",
  "key37": "4ya6MitDJGSVhBTRgDWfLkBPyufAy1rwhBCpKRJcPuDUQd5mTcHGtcs3oJYtcyWKXi4AgvB2xJvAMo9xWVpt9SYy",
  "key38": "3tSEdtiAYjgznVqBfHDAynBnPt3aFp1jepXynWeF5QRnAx9xcvE3q1kp6QZsiZC2HYhDU87v1ZKHMw8DsvcBmjK3",
  "key39": "2YDUe67oSxMougCpHb7YBqNn8i7fhQrwa5XyaeaPKPkbVGw7hatN5NzUQttMC3WBeNPi7F75pYShvVf6BwDYCcq4",
  "key40": "7tjHEUvFggbCEofiSRfLD4JrdSUbs3uwiw21pGgguFY2AfDaBKSKKcG5xL9MQaX7U7qssSFzsvoPevoL2ukv38Z",
  "key41": "3xBW7KGj6kzyPwLin4XCcfRZxS1YyjSBMbJSQegtKbhpQkcZHqQg6Kqfbyd5oZWm7xRDtsXSkzAbi9Kdvmwm6W6B",
  "key42": "4f6BQMdEzXQHrSSxbtE7V2xYg6VXzdvdjqvRqTZAYuyXJpjcGb4JcMGrYfsdMGY8un3i3QuQccyFLfhb85QTYVQu",
  "key43": "2MjX9A5qX8WRtbXGCWU1pPTJB6p1rBMxgz1yGqwnnSFpoKsbM8zQUcvFmHG3o68QNvw2CcJ9gfK14VE66Vih71Jf",
  "key44": "3u9jqKbJwe19yst9eDU8NyDwCCjCEikvTP46qQM39ybcQboDEBQbUmuNDk1jn8yUDfqufcQavPk8R6rr3Kvrp9pJ",
  "key45": "4JA8bPXurEnMNzRVWLwhBUaBxZBkYFv42RMLe43igdvbEx5K4HrguirkEqWBmo5SAk9fXYtMb2Kq9gpubX51oWge",
  "key46": "3PUPjNVM764QgbNdAaYMtWXdZWShkLnwX5DQ6bTVm86X1qWiScXikNjPzdfcNRaWJCsZUSapxacGUrZc3Zfr61nz",
  "key47": "4zAsNyrvbJw3Hftve33sr64oTgj1sY9FFE2GeKVou22p6AHtaBpNX6BNKwwYLoqjZga7LehPRggGkPJao9hjdGs8",
  "key48": "2Hm5SQSsoDwJNu8C3tmLZTb7Xukn2nrbwqQzuYREDGDjE8o6CaV2A87CW2eN7Ah7sKhnGXoSZsLMi1GL5xFh6Bgj",
  "key49": "5Qdsg5tL7oFPLhTVJkzhob7UFVEbUYZswZoujHY7aSKJ459SSpWnnfwRp3Yim47spEMjmqjsR2hnmwSe1fkTuhQE"
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
