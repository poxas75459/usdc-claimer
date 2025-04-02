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
    "ToMf5udKJH6idxT9C719u1VQoov72PpevgEHViVhvya7MEm42bH2ouLJnnJygcA2D63jNq56xAVyDX1ExHhM8ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55EFwbQMCc5sdVcFmff6pXkA7oUg5PFXjrSCQzyoiuCvyAYptiJ8LmP4DVYVCuqakhXmBFKR8CCHde4dYUzK63cG",
  "key1": "2ZixW6G3yVM3oCmCjTv8xb9CKv3vaHEcwMfZj3QMzsoouhdTNQYhv2hRWBHwMgUw2rgiGMruqpeCGwVx3HZhmt19",
  "key2": "4pV1veJCFnAeaGdWqqi4xz8LSxRR8gxpt1dpga7gu5AcLcxUiTBjmukqYnCEdUUagVAFppnqACPq9L6jPSpfUK3g",
  "key3": "5LkZ3knZYgeqbVCiAnpdyaqk6uUWSFERSAo75BmUYD5qKcBTXEYaxXRw2kKwFiuLr6Ha23NG3FycM5gusAsGcxkS",
  "key4": "4n7HiBHZrxqEyh1hyBCGp4Cpyg4auefos33sC3CyfBM1GBvawd4AwLzhk65P34jqDvt7z9CGJvpC5GH6r2Y3toyt",
  "key5": "3SQPw88VFDx8Kzg9q5gZPzAzFV2DbLJxHgosporMmt5z5S6SV8CTaJQ5BPXwDTm8gNBaMEPymWCMuWeiYwyMZt48",
  "key6": "2AK7Z1hm19JGgqXw6viJz1mpxLqxcMabvHMN9yWj6yJT7uuMxEbM8z1VjnR2u73ig63ZyivQcHbcL8FWJM4cVvqq",
  "key7": "3dv3dGthNbUhNX2CiTUfBy8rnRPU38NLqbiQNHNDsP7hQy8nFtz44Y69VFn6kqYevUDuoeegNXoGthXRYL9MmBcj",
  "key8": "3FZgNQktDuQRwDDBzFAapWLRArxp9YoVQdPEU5rhYPd67Z6vCpa9YrvoWWGdaJPxPP52VTG7EysVurqXTjUAk1rY",
  "key9": "vNbwQA74U7vi8TMbrT4BGK5LBNqEirHBBvTgPz4ie1LUHEXdQvvHwBS1cQ7aLfGQftXDGaPLR4qDR29uZeJ4Q5X",
  "key10": "g6hW2pRqVijkeQoDPVNzav636tMeYwMtRQPpwAHH48cFgdMLH98c7SMq2L6DMTjdMHutmK2T1uPpFbfgwKyD1fk",
  "key11": "36rd1sQpEkahCNrWaxTA13o1ie3Zb3Q9HucHwMDj7sWWY5WMexPnUqPSHWtKYwUzUC9DyssyLiQ8RMtUuzQh35aF",
  "key12": "3hKxTry5KPsVw26RRpdaX49At51XXyaLy2MBQYA9uH5LQ8U5sk1hU2vd6PxHtTkTZDsSw1o9N5TJoRkC843Bq9m6",
  "key13": "4WemcYdEVSidQY6V7BAQHxXZWG7ZUBNocdFHE9RHhrWZwp98SEA1f2E6BmDZjaRbqJbb12E2tHGiyBNjPLTaM4k9",
  "key14": "3vxpvDQWQcHKGSuj5iJWbVVKuDNR9TpFcZXbvUi4AYU7u5jHhSkAvu77YvFiFiHDuFAcPoEw13V6ia3dp8cmayNu",
  "key15": "2p6HVyeW9UnjMWaTuxAkxYDmq5P8FyUXFa3fV9t9wpAXBoq3gmSVcifVQTY59pwsRnPu6QXQnMdgqoWawYRV8213",
  "key16": "5xj3HHuJdiGfRyLMwxxDMaLidQd22XpAeBFaeMrrbZ5pKtgHvzwqedkV2GMG1Y9dSmQBufnVAgnQCUQe6yHdA86t",
  "key17": "12tt3VxtmBGuCx4dTXDyCLXq9LqkYxfW3Uk6P5ZoTq5jvmzkYRzkdxGkCFtPf8LBt6xZEEtZu2BZerRpFGUurVa",
  "key18": "r9nYz9vkE5L2zNiDPEGy9Xr8uEoDLBqjSAA5cBS6GRMn1to723vCLyUcWoy3V8WBo93Yq6pVksGrtTke4Ugqvxo",
  "key19": "5SfkwxTRWCEP1kLheATQfBt4shs4gY5ZSkrJM9D3RxAPk9V3yUW5YMd16FfzJwfJ2pqxvp9fqaoLK6iRZvVD5m5o",
  "key20": "5NhQTdFNHLNYqaLnfSM7bSYGCubpsEjHioyAR24xGCGpfYQYjWdGVZ2yE9vrk5KpypNvqJF3tipj5LiGAUq3HbyR",
  "key21": "3C9BWKLEgkRJuf97EeAWSEkgy3dw7YEatWxRmpXTm5wFeMwmgAi5VXM8us2boPQPt4nCnpFos1QxMrsmoKx9juqm",
  "key22": "2tEJWdmtfeN1G5viDpcyL5fH3Cnn9jiMYGLfNLepC1desjvsCwh4zFRDqZDfJF36iy3XVpBzqjf4jMrzBZhBwiwm",
  "key23": "4oryLYFRMmpKPYcS2QoNJiiTz9Gyhx8WbfrMRF4G57WAczeg7mXKQLaXxM8rEmB363sSKVs6PbL8j19NT4uxjLU4",
  "key24": "26W4eJ4KxAizVjMzuvJCYAgKU6WAZviG1PTQTdMMxzRhBT3ssoTBbAMRxH4LXyAvDSxyK31HamNNP7GJztZbtbXB",
  "key25": "5XQXw951xgrEaqMBeW97T9wqeK3RLpQGFXLtcxvXtqS6id8CPSa2B1AY7fW21v9WezxGe4uiHbaaMhHmH32mNudJ",
  "key26": "31dxLKTL2haASBPrTqtYMYQwBwMA1JVZVfimC4uLyFedcE3kDT2VXcTMdCVWgVHssWwvVJTgLWxC78p59ViN3MH2",
  "key27": "2TZcsycdwYqgeoCcGGgFQfxvrUvPqJdTUGMeRJPyRuJ4FtdWoFB4dHGjvKSYyMBKance2ZyfUUSxdCbGmuWnroZM",
  "key28": "5xPU72BmHZGp5BwPhTiLPL2pWHW1UMewRf3h78Ue6Gc5k8bsXyESSo7fcX97gkx5uXUbF9nvc1XmS83q2FZMZoNn",
  "key29": "4TGujkHiddXZ6NCnjPNnVX5cEsuVfV8kkn4v44HwRBKoBoRodxBnzmG5xTcDHvRcbTbbYosPk6R47SbrhtM6hAUK",
  "key30": "4kzb8Tj66uDirmVZBi7sVy4YXwtJvkj1WzkV6i4YvpG1thMMo59ekphkMU49WnCUy77iNooNt7gB5yDRR6REon6D",
  "key31": "2R55RYqMcuC6H6jenbKdVNPbSZdhSyJvK3iVzJW482hBh29CQKZrNBgZiQAyvxDMf9rCbbZMTfi8XWgvLnW9Bhnj",
  "key32": "5foFguJAB2xCxhiddPP4urxBqm1oHMJNLkh9dfhrTMBF8qSvf6c1V7qYfhy5MZiTdREdzb26QqReE6rBHvVjeLuL",
  "key33": "2VkmqmAT5byFVmqsVV7DmkvxPA4F9HPTnjb9gCcVR3F2uZNdeVZ63pM2T4GtPZsj5nxK8xnowby3KUbuUAVBYa2k",
  "key34": "5UBfEtErrErBwRXxydAxcYFZPYFSHNT4Zt23HUBXuPQ3n7MvoponecyC8dQZjppQiDx9DxKDuQPnMSmKa2ApxRAp",
  "key35": "43DSRpB5k4uYwVGFghq1WR5W9Pb8cipW8Ta3QWL9FqPThhhjs4BN2bxeZYuqBWXvTbYgCFuvUn6wdZxm1QU6vMj2",
  "key36": "3jPZUUa1fgXEQz1EEQm6TEkytBND1MB34uSUrjdUUBxK2MWQActU3wUqWhV1GWa3TsHPt4bcBNwoERX5yeXLSURS",
  "key37": "2EW1mis9pyT4V5yW4eRkxDq76DkrCw6BBGJe1GFk3Zwrx4Y3u76HgH7e1ukhKYWynST9txXcVFxyGxLTBkADQa5W",
  "key38": "4DW2qpgJXg8ACtktQxczottJqCxHbffmytq26G2qBk7CDpeNCyQA3bUpMXrZcTeCckxkYiLbA1vsk6Pqq4YTSBN2",
  "key39": "24xeM4gtDfpPUYuSPJiddrWzF6F5uW7cwiisu9x5EMdyWBYd3AifRfUx4P6CR2k6JJgi1LY278QBmKiLuNq1FZDf",
  "key40": "tQMbebMc5oRGkPjysbEtWdKKTTBaL5rE2AyF4QK9WzBz71ZMMJA6DLLFhygPkXX3n5XwcNcGwoL5fRJGwSPkoN3",
  "key41": "45axKeFemgSSndNk1RE9wvncUXu5zKjpHoDTJwzD1T8NVGxw3ry294S1HkAtUc5qzJ8URWTHRc8qJew8wMu1BmH5",
  "key42": "42nLeQTbAhnenTs1ePHvpkfJiaebuNxTk2v78D1QTc1NEbngZeXvUV8jmBB3reM67NqmQrrpZZUNgV8vUUXrad1y",
  "key43": "46vRmVzkuE697UzNiMHqT4HyQ2tWBUgt8mYL81TPj5iCyRYSwm3Qhufj6UwGSvsTqwsDiM4yhiRwndGTumpTtvjW",
  "key44": "3HFukFGr5cE5ojyJ84accK1h2d4pvuT5dSWYBxjp2igBkPZxxoGLVMtkSc2YQM3YMErpqa6DXrXBVc2ZzfDMn1TE",
  "key45": "5ivsJttgsrbgQdhdPs685LWS4SvFpKwCxF6jCTZ4HHH9V2RC34qxwxnJHrA2EnZ8H76mx3QBbsYwgCbaXLpSPNWU"
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
