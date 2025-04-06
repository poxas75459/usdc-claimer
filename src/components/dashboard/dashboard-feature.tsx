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
    "7cNzsdN8RQRujYy8jgTqL2j28XR9gYuw3aV8acwcN5A6K6yeRVFrjzriQzQrF5DwDF2At8dN8jSK3p6L6DnvZnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCbtXR6btXDVEvkjdvscdeAEZBWThsaKWj6Zei7QbU64yN4GHMREA7wzNzu61GzAWFZHSWS6NUH7NepUBqQVgXo",
  "key1": "5MM7uKuzpwRVWymvejvuB25x2CBgDAe38vAyCHcPaVxP4Y88YSQDuaBte3x4fjyUvjY7prGYZNqoVUCwDh9yBVPz",
  "key2": "4AUWesBToBqoZukKtaxRYFeGupVMVWPymzF5mT3cQsQ8saKyF4v4o4fajJAS8uuuaCfzuQG3cxWZg7mwppLn22sA",
  "key3": "4W9uUP1DFxM1nnwSnj9iBcSdhtQ2bUnK5uH7XfShrnbLqAfyC9mYy3X4V3jsCr8g8d8XTPASo9zNwZeKhbPjFHzB",
  "key4": "5LuoHP9bQ5fmC6DFgGeK3N9axz3fY8LUs675pWayme2TGCp5ZhTcDqEceuabVbrsCe2kt8YpE5aRchkKmP6Ez1Nh",
  "key5": "5xmXt4uwxG7DqxjQjZ1dq24CU2JUHiLibZe9n7LPAT5Sy8E92ffqYFDDfaTebpYtuQQYfDX85kHsSr4U9yBgujf1",
  "key6": "42qe7pyKRobt4s6v5iiP1dXZF3jFwaCaQjeppaehdQZsyhUVzHRHTQ2hVdPSQAQnt5H2uiaWiXrtZm8aLRWm2NxN",
  "key7": "2d9BqapMUPs1YEJu9rg2TRiPwWLn9RHqZVBJR6e2M3ShTpyKVnzRVidszZx3Sz4jkhETzExxXijLvfT9xzKC7LNG",
  "key8": "3PN4mabckrvnopCUVyuqbBg7kXdgVhdKPzaTV3JcNqhqEuh5fgpkgBmpiCo5f1GMMwszRoEt4UBRQWoLJ1BnnEbD",
  "key9": "4UNj51AkrXgdPrGY5R7KK9LnBTwT1Gr8RkF3AD9nZrC78gKrdpiqhKGQ2P9CeusckzjnvhF1gS6fB6pM5zaBVkst",
  "key10": "zCYStfxhH6YDP6m5hDJ4VMzK7igdi4AEfV8SNvwdjMKCQUv5aW5yPtPXkwtofBhxeUwFABQfyaoWQJu6CDq8xUB",
  "key11": "5tw5kYCt5CjzxcazwfK6Z8ABiKKmmT3LtspXf83f98Bd4iST9cNhYDosGi3LYui4tubi3JKBHgaeCr6mYGTYpDTa",
  "key12": "5SEuWBrndvYPqw4X539GGSEx7mxh59egsPKyDy28jsH2h4akMB28GGZJYHa18viGLhQAJPs6w2as4cgqcrde8ojq",
  "key13": "3W4DLvuuu2swP7Yz1ypjeu8nZCXUUvcQbXq6A1xwRVYgeXq6syFnLsLGVuD7pia3yPqK2555wBvbRFKVQiwRQbqg",
  "key14": "38ndpBgD24rfHNDhCtiMQZRJxxf9yeN6SNnua21YWPrGY2FgJo7ApUygjHVDebe5wr6TiEVWp91swJugYfoikcW7",
  "key15": "4kFT7uz5TFzNDp9k1kM8iAiKXZWmDB1rZNJnyhMXc9p7cW94kpSnDpnqJWTbu76Xd6r4J867heaycCJspfUCdVWH",
  "key16": "55NCn8VWnpe2MiRhH9fn9Piaj16c5zHDvamumRf1Dm9sugiCuQmGcRajQa3nBPbDeUvr7LaTPU6MY1ZFhurtSCG9",
  "key17": "Vtit6wpDH9YaTBmxLm7iAxuRXeFi955AykgRyoyZP6AuaLGveWRNqUWZ9Mx1wkoMB7NpSJiqcN4upT2YQJpSekq",
  "key18": "2LquKW6iasbmYNnyna4n3URVUghH1AkU4roAszagKcWBzSExDtb39zs7779c6ZNrsRmKR6J9BSHvPC2fA6SL6U6G",
  "key19": "49nXX7QLoczLBRh1BSnydZ9aZnZeWEgvtNSGqpPtEW4Qi6EttBASSLAV9UHdm8ybfg24z7MapCmCAQrdWfiyY6Dn",
  "key20": "2J7CBmCqB2SCwfSVsBxDtAKwHqeVXtG2x4iE8mSPHiSxLNjS6ifUyLxyoUscJVKZGnzoPzamztugB96KrnyjQ6EK",
  "key21": "4EKkcfiQgTtwcrEEwCZP1Boq4V1tzmXzSbjpd3NXu8Lo9mn91Acw6wprQeGe9RaAQSPiCoukcWSCBeGKQVy7Zt3k",
  "key22": "5SjtRcPHgise1JYn5YxMCaeQVHz9i2LgowHazhhQ2G1xyGagWqh9NRSJozvRkxm3mQJJzt1UGUzz9abj122Mk5MM",
  "key23": "4RTWHzzFH4ibwosuU5rvoiZabyPGwpQ8pG5qKMecL338pfF6xRB5zjg98Dj6EcBoZZHTVWsr916k4uxjViY6Dvrb",
  "key24": "4DsxyGFfcTVfede1kD4rejy2vPv8FHWF92mLNsTcwEXmMzM9MGPksUz2Wh81t4fSgsgKMXdQP8jix4vKeyWtxxLR",
  "key25": "3rnx8zRkHwJ8WUZAXTocAYKqR3o1zFazBH645GjpHDTUnpHWYjHnKPJpX9gWq1UGGbA3QpEtXz4guN9ghjmUgVQW",
  "key26": "2CHQJUo9AWvjJ2DFQKHqyjXvyZY7HACwmMCMWHsyN7TpsuBHvaAG1AmFRqBGDtnGKMT9P9jMkPXBjWdDJ7vggBGo",
  "key27": "4MRed8t3tqQ8mWTSPm9u4GNVKEj3qJ2V4gaPV2FKugZsyBp1WZ1RYJyG2gfyt8xpcL7ydEvuqxLt7vn2YL8YUFr9",
  "key28": "2URAgYbCut5MgpFqE1KBXqrfzHGnTvyoaXHWuGHbSkPxPmczU7xUW9kxjtgNWQwivviGsGtxXCXpASanRBiz45ZY",
  "key29": "4fKPX2y1F9uqprvoFp2LvzBXvUfSYtgx6xFEuoJ7Meod5cQrkQrpuC7Hx77WTrmtYy1FtQNtJViUiP1mGyCnwSpH",
  "key30": "3UjqgCVEWTVeayjQ1iy47DVqJQp1hjJ8bRcKVpPB4raQLDSouPa3nM9r3Rbpa8A3U4WKQKdREQuBPSLfLwyPBTqn",
  "key31": "2n9EFz4JG8NQMFCJWvGgE48v7bVhbFJjvF7kNhyA1HnUFDuvMKpe1BkoRby8yZmGNoCBhzzESL9YpVTKQ4pxauh7",
  "key32": "261XFTNpaJeHakq2EYohjUuLdeTpXooKMi8SqxLUHzVWJDB4YWKrzUctXJCFgcS8WT6aasF9VgyKmpwzXRQg8r5r",
  "key33": "h3R4D3Eg9rX8gpGNH5Tkh3MMspWXEwbJvs3tszEN76nNcNpVWb16fhiHhsxdEnYaF5A8hjooacefYLs3BG5JEpm",
  "key34": "4RFRSCPWLsNTHU7UgLFWfGMLRnxAYppL96x12CG4rJRMGH2dLScerqVojVKfpC5DzD9gGeheCJfouYV5ELBFUi26",
  "key35": "5Bg2bCeFQ8qcgLMyqDzT7ePuXErA79uY2nYL3YwboaEYAMHUNbD5YzoXDhWgRR9AXRt6Et1mnDthPuM29SYr4ZiC",
  "key36": "3KnxDCg1PjmEGTcPqmjMzy28KwdC5X9Fg3NVmzCfGAshgYz7Z28jBnHk1R7VQ2aJB7SJupfZTJp7jmh4k4qsrQY8",
  "key37": "5UnWvAtRZ5SHNUaxs5Z4Q9BSeKAzi9NadRsou2T81KKRYjvN9St4ZF4hcGrpuazUamo6HUx27dKQBZqbkWkb1wCQ",
  "key38": "5N9tLF1TCFLYxoUoztFPaLxyygnSkZavwchwKJmkS6PTZqPSR3SVhkkMBzENoJptk1QpbfauThTuS646k4yVac4G",
  "key39": "51iqStny9KnvEaUpT4wjqr5hAVDtaDQLxXddTxyFwUKwjcdVpoRqYdKQZXazccAXFQvCwwfRhiEZp64AgNjwvi6L",
  "key40": "4ETRmXiyoucevihEDupLD5egTV1YniRJnAnyLe1NsERaWmhLko8H61eYKh2KCJ2VAW1ceRAGt4eeu4MggJLW6RMd",
  "key41": "2iMM44E3cmyGqA5hwbG3PLcDa6auqCmPcUqN8E6EVZyugapXWbBpvNkeDYo7qQH1XUW5X1FQ8e7Pbum3QjWsYuJe",
  "key42": "FztNKQbqTuLNkiU1D3mghVaeZxmGDhpa5W8xUbw163yo6kJYAv9CK6mQS3gSQBxsvy2XqawpJFJqtZH9kW8Mf5C",
  "key43": "2j4AzuMMgFEis3vcZWL4Fqv2CvaQvKPT6dg1Hu8nKJxdgRKCCYZ4RydG78iPFxDZBSZAHmYDHECseeo1aV2Rm36B",
  "key44": "4pNnWAPfZ6c5BcmewpdKQdhcaX8JZyNmxYd4oA7P25J4ys27Nq7zCS9MvTEifWXJp2t3F3X1Xq1iWd8YXJvMBH3C"
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
