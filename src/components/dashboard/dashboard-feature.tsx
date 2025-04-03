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
    "4KheE3gjMWtTZCWTgBt7af75xfLJ7J7dvhX4d1KAuUeRKKZ19Mh32YTEDaL82Towir622PMfiVmJZS1DmdqKmg6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dcWi4FnBVgnpjVvPjjitRPeAeFaUxLco4pfBdhFM3NqKouCtUgsMEvtHHFsBCm84EMVvKeVjd4aqcxveHn85taR",
  "key1": "4L3rqa68BwEa5xQfoPZ4ncH3p3U7mcFE6vqboysEu2WaoKV1ua3tZetpE8vG8Z8xYxsTQkCNuQKmi2jrLJN4KEkj",
  "key2": "5XdM7enVaPh7WfyG8sHXHLUbqPofeBcsMcWjLgvHWg2zvWN7FPYCE4ZjbyY9Zxm3otujgfKJDp25mK5CLjBh24jT",
  "key3": "1yyCq7qv9Lc8826DwKv4ptdWUsu5GmdPfp2JJZcVVZV6WTbQwypVvkQ5EzgLGEnRGGvGPDiyvY52gNWX1FbRe4u",
  "key4": "3MLmcHmqkhGxvX8LbnHjrCujvqPpbjXMMeFhFy1QRD6M6ZC494ZJWHt8Dpxn8mFAddY3dV42PYFhG7Pp36CTrJsp",
  "key5": "5pGytfba4e6PDBVvtpfAYo5JFzxxCxh3WLSBd9zitkdaduCA48fc3sz8J4RogHEmVFJgcx4fh6pH1XCEoRsRn6k",
  "key6": "5JpyW21Qwn4vJ4UEfriZPFsFb7GonEmRoJ63iyHM52iTA5dvmEZ4N3NMGaAgC8SqqyNMxFfS4iA5WG1iRC75HWSF",
  "key7": "2MrkS6m12VEe2SqmQ1dkx781ew96kiCEYUryDPnw1Nyx4HERzN9yPiLkdCg5XrNdvCBATqApYUQ3wK4WYGv4graN",
  "key8": "2w3eELuKBJuujG9N7qiDVQvqCvf2kT5vsGFGo4to9SMzNsD1HtjsggSpXPA5vtu2H97vXvvARvFaYCvDt55X7hsU",
  "key9": "58Pn9256eBdA1ba8MLkTYoLfKR9V6wncjqdUjK9Zfch7HoYGgHWBrATQYeA8NyMsprYMRWv8zRNjKB7AUnycjfnk",
  "key10": "2Zcj1zXCTes6TjKiWGb1y4qSApzbYt8oS7jTxqushGCgA9P8ZtCgCqKpwyHtHtW5Y6wNacg4pqEjFRVuuMCoALRz",
  "key11": "2tFgimX54KbLtm2PvajsVvrTwnCNYSgJMeptwukwmHS9esCSRTyfBCb959vNVRePUJSjXA3DP1DQFAMmc2retX3x",
  "key12": "4xfK1fBWNMrEJicqkgxeEFMjnKwNwidQ7tCc9gT1p6ebkQNAoJk6K9tttuXnS3tSLBwVX35nUfZxQg3hrjnWgsix",
  "key13": "28TUQrqDVUasEZK1uJ3Qkdp5UBzCGGxiKHjWUMmMTPFtqFEGdTHFhvdPQ1GGRZkv1XntmX6GvyacZTeKhgw1ZNTR",
  "key14": "EVkT59gNqBRgKdhwhBxCCyskVsH2jzTZv99QvuEE6yisxgSm6BK4X8t7FqktasCfWykhaFx12o7WWoAe4oq6vf7",
  "key15": "b2mgrQx7fkT8zSzAfeyWgL4bDYwTPzCwSr7MnHKM5jojjXAcjUeXyhZNMqccG3DehGRgPnL8i8SgSinRuNCqpF1",
  "key16": "3vf1c98vbzeEDJmhvVKsMezxayqQg4GwHiYdsvf1fLCdhwku6k1eNL79S1P8PUwZV6uKzHghCNZ7FM2HeCJFPAML",
  "key17": "5pEzxtxoaPJc98yzVD1upcG1ngx5xtC1ccjFSSUhFbyMdUTAPUnuob2kf6i8wgErkpEZQFviJD4eceHZYd8niHtw",
  "key18": "FLqmvjnayHRg6TNnRzR3CiAX9i3awm6fzgUepu93VhdsSUmpfugmjS8cL8UQQPspyHhLGxHm6D3oTfatTHvJPAQ",
  "key19": "4vc3kd5WA5SByT2fW8e7yDJNtgpUFUsFWiMbBTyDkhpFS6EHGYtK8y6EyAUJSiQcdGiDFtLrYVUUp3B6stBVCb5d",
  "key20": "2deChX1FFPWoNYkXuTPxpkXx4Qh9ZrikVYq8rFqJN1GJb461Hy1JDE2gcc7t347WjyRk8kqLDWLE9kH1fKpaSdoL",
  "key21": "2f49QVdnFsTrpPsYYUKwUUjcy3UotepNKEHHqGEAJCNrMRXnvY68LeAHiK5XbaLggwTQxxtcYVGwYxZUXgoNyLgk",
  "key22": "mLs741h8HgCDHMdoVACW7HDJmUNpsqB3fFRa9jdoKtZK1YoLeKajsBrnm9Jji7MSZcyMdnnvhLPptQVQN3qZg3z",
  "key23": "4yzUXUen3desDjDqxcv6vJm8AyiGst6c71WXX22a61jZs21SucuAXqHwNuXwiaBDaLDYj5wGQpxggQ7VbGR2vjAM",
  "key24": "3QjUTnDWH53buDBgQq1H2BLbuuE9U9e2YYmWdAyQEonzj2Spya9g615cVsXvbEiU4CcfsDcxLjj5bQtf3QSxisPK",
  "key25": "2ZZtjwsBBSV44kDjauZvG88NMbGBZ2jrrsF6WbuTTmXcJ3wiNzfrLG7wNSwEEbNs8V4TcYkG2XGrij2xqhK3LgfJ",
  "key26": "2wxtP4294kpBoyYMyTshtCb6b6RtK4tGz646JwM2CfZMPbW1PNyhqGmJzw5KhPHRo1mqwxmxpUov76CbmYe1fLzX",
  "key27": "ZtEhXeMAwkmzwc1CgpSfP5CcnFURAsn1gSg1SFuvwqKPYbdLcTDAoKehfRy3AgBXP6UExjsqUnfHmQEDChZtm6n",
  "key28": "5WYRtVQRxQ2omwPRgKsiZT343PF9B21obhfy6dcFWQiRmyuVmrwycs344atJL149LoxLLn81x4QoQnFLETzUFhdK",
  "key29": "1fHPz7WTithQFYhvKHwpULn4iXnKyHuMCSzAbdh5a5XYvCgFu7UFzMv4dZMycM8nZ4zX8WxZbGbq9T8U6HzSzju",
  "key30": "2AxkjAh8r4LkgATahRU4PUXYMXFiUfyQxkXLR1vcKE72hsPmBF3aJE6BC2gXGeWm9xE8rRsTFehzj1xsej4vhiga",
  "key31": "2zySq55TTUSEYG7A1dDGMdcgFaW6meEwWdsz5Q6Dt6Yj1ha2VZQnhRfurBwqNsnEdCdxZQL4BJVqadeA6cmq4ZLM",
  "key32": "2Azfqjt1gNouR72ezotmDEtoBzKrUPMnavmE2tYgX5AZ3yUs1Wz2c5M3dLGwpZEcRK1JSX7BkfX5at1hjvW412rQ",
  "key33": "4nyzXkqTzevh6pp5HKyEZkpVcmu3oq47rannDXaRzcWPqi8LZ2XKw8aBJZh1yX4JeCsH3R9QNKXZDz65VTTCPmV1",
  "key34": "4JaxU6GLEDmS5TMaqhDosRDJ9gDxEaE89VFTSQHB6reqKfKz7M4X8LDupb9cUFY69jj2wEybVbNLy8pnScbnsJyD",
  "key35": "2uAq7zj7kEnNu9Kvg6hf4HUV51tLrB5LrZxPu5jWLn8ncJgFWC12i2G2f2q6kmgpDbcDmvXb6eF5341tgnAT6df3",
  "key36": "2sAT91qqpUyP8s4osk1dRCuXhuZxj8JFocLFfbrcBFEXv92vkCTeu9rZ2bb569oDCzFYJymhC3YphHq76Js134kv",
  "key37": "3K3FCkhH3kLJ9SsAc42QBAN9ysTVbeLQrs9aNiaYmTNCqK3oovm1cGSeQJZjhra93r3ApSoLvG9PPw9Z2pBBubrZ",
  "key38": "446WZ8DJg674pGkqcpuTmAx7zUDkGL8aqFhL8ViiNPgm1ioAPDPGzqKEmkmwyQFPWDjv1vQ3qAL3JBvUEWZ4CYXv",
  "key39": "4r9KDZSUbedfYFbS34yY7dPvyptrU6zZnffoL7KX4iSmvVNwidwAVpiQeiY6oBBfHiXkhsrN4Q14oksshdFvnw6t",
  "key40": "779fjmteuAPBY3Be2JcywsTQgFJrmHiv8nTqQpGJxKwmQ6XrshcFaVPH3UmWJhBaytD6mxBZ5swt9zSWm5Wvm5W",
  "key41": "59KRZCcCNTMrtdoHPkGVjMozf8jk9G9wSgyakDGqjcQxwD5M2fCLrUvuTtttaAWgoS9SVGu2LTzVi5qP5u9gbC4z",
  "key42": "nV3F6BbhXqeQDP3o6VqX2Z3AY1uBowYkgaoKNjdBwQT724xaLcnTGeJWyJJ4sqpBPQY5wotHqq9LQUnpYSdxwRa",
  "key43": "3rg3ScsS6LcWk4RyMfCrKWkWN1L6pDmERSNfnixwzZ3aNiRAA52GXVLsyDp5q7sSn2ToBkH6MHByZn7JFXdp7LEB"
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
