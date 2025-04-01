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
    "dU1NwDJWgWQa9oBknN6QHLy3NZJoidFew1tSY2ewZ2rYMbXj5Rhvs23zU7qvS5bJhw649NqibCR2pyrdTb87W9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjdT9Y6JHj1Lt5xhgTyQo6rPc2oE8Vz3qA6tx6L5HZDRaYq9N39kHD7pqtZcL98JkLBHaQ3FBi9TuRzKMDQUApK",
  "key1": "56BJVtMmicwCs4Ly2wjk4LGmkH4SqECfVtcjnyzZGpDtasFJJNhNNq7MsZKL6BJ5kkYAbFxqLJ2JtcGaD2YJwRrd",
  "key2": "5qbXcBip2fH62CoBowTxFTBMmB9LndPsyHPZyD8RdfZuGLmQG5kHVZxqw1GoinPEfMMCnx2iwe4YxRPXe2jU3R82",
  "key3": "K9zDL2nagnaQ9SwHSqTJ5AiTyvRLqWEGKRqTrmKM2d4z3PLcSigTEy4gkQ19jnXhS5q8AN4JMbQavVU52K8Ykwk",
  "key4": "597F4ZMHYykznVJc8ZkUKTimcctryZKDAsMrSbyudBt9qxCmRZfUoUhweGVFWF3kKwMRV978h2YetQfLGz5bxzRk",
  "key5": "3YztoygC328xKGYojFTmzea3S4snw2F6UWqPa56hgvMwbWfuWTeU3Ft1kDL86tgjfyP4MfkZonwwjRYFXuutR8Rp",
  "key6": "3WBqMKhthZwhKQDLzWVFLBE9SByZNc2esPQJtWtp7KGzZvGiLkun5Xm7D53tcGy3qXaiXmAgx8QHYQJnt69PfMGC",
  "key7": "5GmThC3CN3c3dGYtsPcrAu9h299dmayGX6FEcMkdcTjzyFrGaXP5ZysdM4X4E5EmxMk4j6V63psKgDv5oCwnRYQq",
  "key8": "36gqp1PUC9umfkDfPokHzM4sWXVocarKuPpTSudEp2jbcP5gzVcimninhKN3kCyd79LVJwTEFGCQdo4PnVKNAdKH",
  "key9": "4xzG33aicGkyZbC4dPHDzpwsGVyGpiNXcPTEYsuBCFC5sUHa1BoxHf741dkfvPk2y6u1YuMoLh2KfpHTYeZzP1Ws",
  "key10": "3tadpmdUfS9V7Y3JvCbWCvCsJR8Zx5ht23bBxNgCjgbHBaS3Cukj4FkY1wahtZx2a1HqbAQ8Zwtbsj3Vee3bWEKZ",
  "key11": "5coyBDAKLcdAWXD2uETdhXFNvjGTkw7rd95mXXpixQjnE6w8gPjdNv2XVrGeXFxsXxdyyfeEYDQVZzD1WwfjJFPo",
  "key12": "67JWMzKDNvLTo21ReAU93tdQDS8G9BmU5C6H5v3Q5upiSFeLnAESSyoMhkbZF7iX8anYha43uTNH5s2P3kc4v7DU",
  "key13": "2SFLTzU2jbRYDQ1jWyMr6ZxAJhC2PktTn9J1nigz9RL3ba82DqjqYWC2y3iaoVAUxvBF2yjc7MqsjSYpJrzDVRpk",
  "key14": "5ZPJHbyZtpCuSTkQUL5zo7US8UU6QZvkW8V9gaxug6mj8kHcfqrevyeSX8KahWaRrZW1zeNggX2z57vsrGkHoEZR",
  "key15": "5vKUYsxjebRKiydGqYvCnJdRD8iUmFNo4BjqF3Vw4WebLkb5WHptvUGphPmZh1nuiKJqbmMNgaGyUHt5odEdzXi2",
  "key16": "4YHLPCEpu57eVpBduJJBZH49KtyJDo3M9ukoUEhqjxbcRbzSCv1tQ73Z1Jvocq1XJ6ZB7emHuh2NF9CQkYjpVsbp",
  "key17": "5FRYBCBU6A75rAHT1EuAoZbCRHr556z52WX7cZxqB55pTwT4fEZ3R1fZkqsj9N2o9Htnxw1bUS27uYrGcnAH9jC5",
  "key18": "PmFqTEb1io73JSSXPyfygAUU9e6GdNXfikLRv2BF7JEzDBvCYWGAYEYXVzN15T5uQreMoRA1xdKquvGuRktwf1c",
  "key19": "2F5gJGqMi4tyrtAXgZyaGyDBzJzqmDXrtNcozbGQbaRqu2VQ84qgMCtAF7pdk1BopPfuxyFRriUpJym4SUdksMRR",
  "key20": "3QcPCZMLgLL95QWN91EnESbcMo6mk8aUmvPsfYPfMprisDzcoEbSa9W7HhpxEo8ZiXMRANZ3sz6DczJeqBq53hTU",
  "key21": "2G2rJUaxUsyVAMPjE1H4qNhmaEWQ41kk4ZfSUaDqPiLEmpyGBgMhbDFpEFNsVf2mzrZYghddNHmfS1FdRVVwcyBD",
  "key22": "hyR9X6cMHCD8wp7JHX6ZpkgH6sgGWTDWHMkXXMNRKojz1rJqx6ajJCZBSVKvCsEgjwY8EGhwkRCH4SvxfRcaTDd",
  "key23": "5uuoEKHj8ZdiCw6bfQdTFfvetsEbjrUFyMacbaF6dALTPFmtjRZg7P9iD9yDexXCBG3D4iS2q92P9uoptSsfFrwY",
  "key24": "3Giwx782YXLDf67ENiTvtmacQsCXsuXZHHNc1ouzsDkoiGnMrmN9XftdksaPwEckL4nibhSq93UnmQ4nApgnqia6",
  "key25": "2CMTUr9EyPa5McNTZgptZULzDh8CgN5S5b3HncoR9nTR2vkineJ2zrSePG8tpLeU1ibp5mnWqQn7bVHCb1viaLhr",
  "key26": "5dh8aJKzsfVBdachBA6MbVHgfncTGix4ipnpuspCjcUdynH95tbHPZ2NvuVwdXzRXasK96fHhQzVErq9JrQfUVTM",
  "key27": "2H2gfyyo6osYTxTX1g3P2W5fkyFr7oDmh7NQQV6MdvHo1fDXTVTaRwibKb2SkxURC4CEzC8suj3omHvLVRhyXkx5",
  "key28": "CZeZUBv5MU18qHMx62BAUgVSRdwQ789mJRqiHsGgZGzTWiZAmQ8bLwTTRwq7RR3z6TSHbS8RVV9E9QN4bAzDkGQ",
  "key29": "5AVzgckHvjpv43tJzXvmoXwGgV3gTxR7XWZ3c6uXG4km3aRxAuXuDKZQoZTHmiXtqDjnvA6FfoDZruQ3Q7hodt1L",
  "key30": "bnVaxSV6NAZs7JqX82xmXujeesjDmrpr26eJvq9RfX5rLgoyzMx1t6xgNHRgRi8YoeupWdxu3vzkZhXrGRMEXez",
  "key31": "4D2THJCAW5GKhACexSM1XxBm3tHQU1XcLoXNdNLVhVyDqUYjzgZhNP4GJykSG4NjPP9UNmtLmKk6GS3K4wWwKNGP",
  "key32": "iJwCo84JrSq7b76xpVVSj4LKJKA2Ms8TY7B63vwy98JundykvgDgeBA2jkrm9rc24ifzaXEbavfXog8KL6iukUN",
  "key33": "23QoqPcXfYpN58o15bFsi151LxxgaYUzyFxkpH7inz4eajZpB6PrMnF98BdQcZWtVRiKV22cucafQjZCA3kbFx7x"
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
