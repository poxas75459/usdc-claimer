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
    "3fP92m8vR5Gq76CYWECab6xqtpqPzM8WGJsMtkgBFAstpjmegeaPkLjEqQvZDo6azDBvN47zQN37UM7K7VDXb22A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ySWTQ98DnjTaKaB3PeEday62ZYSXjo99aJ4yB7k2YsjEnV7K2MG9vycYAmxhFa9F6U6pvcxvmsPVpvE69kmwatC",
  "key1": "4TKN8NBTjsX3Tyn7wg9a4nsQDqCYwEwt5gHvifGucGqFZuem1E8NXf1k8D8Gjrgyd64DDLBoNx3SJs3542ZAszm8",
  "key2": "5KpBN2Dsn7NNe4L5pS3tHp7Xy4rxZom1MNwQJf2BeKAq9j6bDceB24KUJYrxHr2mh3bC2GN2E1PT8gLkNk65zYZL",
  "key3": "5YMqNGD14FakXH7Qgmn6CxvaJiVGVBWne3TX4bwsNoe6My8vSQaP6yyzssuHuG7g1h6ip2tf86E6n7TUQdcj36r6",
  "key4": "atSvjRzKsSLbaRQ5JBepktwdksysH2m2LshbUjMwBQYuveJatYguEP5NHrka9rctu3gtzQDFwKzAVpeh9CedVoR",
  "key5": "5Nd9JRfrK9fDxWc9RPSX4gFy8y9hXKb7WciLu6JeJvHRBsVvwW9syY6TGU952mAjEQwhY3StomPMsDRm97sHMBC4",
  "key6": "3bkpzFon4Kr7Ji7gCmsULcsxM7rh79P5L5aQn8AezKn5rCiHZ1ifXmQp1Bm71EAgra5oPF2jNbTmXwTBWaJGu1Eg",
  "key7": "55pSKJWkhum4axLy3JSyBZka5xwoBy9zZSSw2Y14Kr7gD2Gh8DELSGjQYpWAjCFtL3RQQ6h88K32uzTS4nQ2DxbL",
  "key8": "3nxvJmLmesZqJBKVHraMJXhu2HFVXDjvJG4ondnHQTq3uDwqc7eiEk4noT2zxQdBJ4iZahRfAnPG9ioQMNgMm5dh",
  "key9": "5qTJsAU3cn6DTBxcwrzqacTBDNmtpt67JDhZ6wWhY43oCmExXN6BPyKArG99nSpnxtoeAmwNLAtMyJuZY6crmbGh",
  "key10": "4D45sQZ7LmvMDvjSvtxVLNiJ6XdrXfmHYJpcuyYYwb6Lj76eHGe138BQ76etGGgqJjtCSYgL2yrFQFha43uLbATL",
  "key11": "2ZWxHGytTDMyUSXu3Py4Gv5jC51rC2AP4sAU4hpJgPBZv2gjKA55bNJ5koFKVunX1XMVWmkdohGFg5VcFaYCZ9qN",
  "key12": "5AzmUJTFNDPvEMUZFh3KiZWhDh7Ud3283Pwz2uk5sG9KMJoaMCqRjsSeELRkKRepMWB5Ptmkfxfm3JKHCiDuieu1",
  "key13": "9ZLM5BYhqvSaC47SAbnTNyWAMuyZyhPwXdZo6m1Jnsnyu8HtvFDnkfQFQKiz5tmJtiA8PrCHtCdu8PfZbsfTGzX",
  "key14": "39RdLeYjzCoPpq1GALvP4AsqQsXSV17UMxipkYtKd5RkCAxdE9M6ckcR11Syy3sfE3GYU4iYfE78dvDvp5bJtTMZ",
  "key15": "r2uS4ijx8YLcCzhF6WxBfbasLfu4WUd6ZQoftyNrmnrWGYoof2ebTvVJHTgXtQWEDyPDunZuE9uTia1rx4a9YLi",
  "key16": "3G17Y4bFVdumBGcSsDN4BrkfcWvoYiiSrVRd5VoQU26xBszHebbfH1ex4ZCemV6s3ZeW4KL7Pyi17braQZNevLav",
  "key17": "2YpAEaxqDZo9gwsfxec9mJD87etJbbUie9SvrsfXU1dhALYAFN6qr5NuNma7Zqh8zu1m5beWxuzDuURZ6M5tuTex",
  "key18": "BhAW3fbNNsf7DQ9hT2o3KnKkejNPAuBmAWbH9e7FqnoKC3T7ePxTaMSeDznHwjKGVAagVrPzYeGVxik96MLZ43a",
  "key19": "3h4sLw3Px6wUWdCiFs3X2FTtrP8DP9s2j1GWETUdqenchtNDPvh4sEF84xAA67yqmESVfNjvNWGCsTmBWK7w8FK",
  "key20": "4hbRCKN4mWJEdXww783JEohqBrkk6KCujeungqyFH8zyvH9XMBsp8KeBG84b7n81oioYAk8DizPguHwKWiNDQJmB",
  "key21": "2SBETzJnK1RxsV6Whk375UhjFUm6dZS7by5xAGvWqnDWieFZWnc38byPvnTQo8zoBtrHif8Di5Ep4Uge6jSSg8W4",
  "key22": "3Ak8itorSuoK1yEH2t8oac4k8cZ6CZE7LmK645vz3xNCeV6Npu56XwocM2nDuLT2RtgxNg2mgv19NqPy1X5xmHMj",
  "key23": "25tkDJ3X6jQoMxqzi4nX2wVtx9rU3SYowwX9vCUaEV9jiZGX6oQU7gdXyTYMUNGZwJfXb3ZBLyHnZVGUx3kGyWdp",
  "key24": "47qo2Y2P5vWpmgR5soB51QX4NxgKK6aezKm6Fdxe2bNnGs6VDfrZFu295QXSHz68ivEvzPEue6Rm3WcGfthw7tGT",
  "key25": "soENt6mxVbwN4S1qwytCXwNUEXi4aB8tcRhSdHKg9nJiorhHutUtNeq92xUJdzJZLLKNAPMPQt4Sb7k7hsPCwVc",
  "key26": "ADSZdAe2pv2zkdbPxGQ8y5LNomkyVEumUPATKBkoxckuHfuKdFKrsemnkQEGnCzBsLEpfgnJ1hZtGZpJifbo9iG",
  "key27": "4Pj5Jwxsgairuxh2jmTanJkshxqLNureS6r1p4RPBAisrXn1CLkvp54TNnXapYDdxqjuuvfNbm7gZTX5ergPxnST",
  "key28": "2JhNC143RBCYxu2qzU1XrrgFCiXdqVmgtr92wDLjPfNz4RH2miVkZyQijoB7HLMzDQAmcuupj5GcbSN3iM27UMY3",
  "key29": "4b74yPWLmX7cg2pGNiGeZVXrkHKrL1zLnKkndghCaV9uKQKHDwSnBoMCepefWgkavohJK6TTtrqqYj1Lj1Xjx9Km",
  "key30": "35nZyr6VpMXcQzi3N7qLEwHwswYYUQAjw2ZHBPcKZsBeh9yYNcPc1wQv69pT5SSDFYF7BPTKDed3gBeidvmRiQ3W",
  "key31": "4EeqZEPxk2GQk3VkqduBEWoLJMg8X4rPbepDDHoejYiJDBjt26p63b1e8Z8RdsxdLoEmk5JRWtUAzHszS1P1Wxjf",
  "key32": "4q5i4b4HLC1QnELnEWCAMHV1954J4L8jdNpknJLLJvS8bNr4Gcavw7s7qFkEpXf6Gtbfq7NyvbEa4cwnVjvT68N",
  "key33": "NdSow5MabmZeUW8Mavz37zkbGRTWBr4d6RPdNbpQE8mE7yRns3nWuK4S1nXfw94Ahx62FhDykjJE64g9THC46z1",
  "key34": "2CCuW1RaA6557jj3R9FhEh5zxwpDW7PU7atPSU3gg6gUDQvCecsKaLw1QYd1H6KkXZ4MAxjzPPuLpTeSGKpfe6Wv",
  "key35": "28sPkbeJ5FqZ1DtXMF9qZpicZNPjPH3EKLFnvFpdvG87tkvMy22aeUfwDh54dEb46ygECniu5permV79r6gWuJ25",
  "key36": "4dhJdGpiYw1UX77f6MzyMHp1mRNMiY6ZzLLXgARM2krHtASZHKgfAkPELXHBZff8GcnBGpscMWXuXctHZdfp2vT1",
  "key37": "5TeQHTuJRnPp7bCs3iunN639CqKzK3j1FtqtDYbrYUtNqxgU9V8UEzW6P6gudkq9AjNh9zrpyEb1fbPtgUZkVTis",
  "key38": "ucjm1M6BUoqK9vrSHY4MAbdN8QGwXaKfQ59smCV31mL9XsSWoMCqHBadTi9FZjAXCSER2EgfJ8GptWPgu22gNiA",
  "key39": "3un1XdXRgMXZF39yZpLeKxPEQHLmwfNMypgyq9Zxnv49zjL4RQ3NzsLv9Z3VQBPSoYVZHeiN85vmPjkiTx7jDbiQ",
  "key40": "3NVK1HorwcSaiz4mKkD1UJmtd5kpjHwY1e3yiVCrk76FBTnjW8wZMttivyJcohdmtLJWJqrtisM8qUVqhSvmNzEf",
  "key41": "37f5yNsKMfNfcjP2X8qm8T5TVL3Ts9f6g4X3iJqH9H6fa7or6qFLFM3Ud1XxEUbeWBywKoU48oXVWcSfUUa4Et2o",
  "key42": "5MZrze9xB8nw1N9EQvh76YL2u3pXWgek7ttoaCFev2AFr6WCvoF8yA3sYhifENXSSRHM4963Fgz6osQaaGwoH86G",
  "key43": "4UwvG7Y8EKZ1zv1EuZ3uFEGVAtRZ2v4tXCXJJvmUpmanmoPdDYHNeC2or6eJ7BVxJBLu48z5ajfpFaBLuVTvWnQ9",
  "key44": "4zbkpGpv5kdF7aGR5QrpjyVPY8BupsPKF1ZxuehYCZ1dXz9J6g8r8UL3Nr63GLwhwvCHu7ubz7tWVVcatidYZNSU",
  "key45": "JFtbyA8F11DF9SshafZgEKGtTjchhzdYhmi2DhxPEkGZVp8witWCaxF3tVWnKrVujKhEHzGuUzjJnF4otReB6iU",
  "key46": "zUXcJXz8tYi8YuSEiexqdqjCtw3CJFHRchcsappnABkUwq9JnLjWqokj4eVbwN9uJy1VKVVAjjLK3ohca2RBvhs",
  "key47": "4UehXN7opyoCt9peiJ28HEz3TvmCSbNNz3JCXHtfhzhtzeQxKVhWPNvTvjk7AR3cBkNyKU4ykSr6acKJQZ3SDSvq",
  "key48": "554yYth9Pr2PDc6KVXidVbCvkJeBadgjKzNF4nxD35SHqErzUnPjNdeu3iHq5JY3JaqVJgFegnyj1eccnkcu6zyq",
  "key49": "3MmGu9HwjaJgUq1JK73P2N1F96M6YgSKqtV9aWy4E3U16XxsRWLP4vx2vjRzSdkNVT33DM2Awyrsaa2aM5Cw9pPs"
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
