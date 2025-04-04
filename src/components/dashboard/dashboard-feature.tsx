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
    "39dHJshawHnTRr9V5gQGqEsmsDyACPjR3Lq8TmVoztcMHy2HyyKypaej51dSTe76kah4tn6t5tqgKDESAh27c9Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46adqcvpJAk8wSrL2MzAmmHQemidDS19jNcC9N2wb3VUm8Twnwn7mkSc6GxzG7nqCbjMVSN89xRQZqgXqWDKFxaz",
  "key1": "5yDE8t7DDi94g2tnNKgGfXmEZSsoCxJ7ffGt4AZi95VizsXwbehetzWReT3peZroMs7rxfRyWWRPauH2SzwYG6ka",
  "key2": "5qRQAfu1vbBkHHRo89w6kaCBhPmsDBiBEjqxsxPFkAaeKB1wrSWTDx1QCNJGDvzc2KXkSBqHR23Lux3ZF1njc6Hp",
  "key3": "eRu3FZng2WcNtMYK6mRRYuCfAaF4UbstCFeXGKaj3G5XZ4tKx5EUESjhmYqJYgoxh7B6DNWRAfAdpKBwiRJMnRd",
  "key4": "4rSLAEDmUmWxeNnwcguiZF6Z9hFBVcFwSzd5GDDK1N42kiThf34Wn2WWSYERsSVwjCHzs6VLwdiP8XhDxdKByrQM",
  "key5": "5nCWwpcquuE3rkVGXuYoDVKdS4hJfLswb13oEHFgCm7rqt3vhvGdxdGsZmnxtESyskUtPP2TigwsfoenR2mikRCu",
  "key6": "mRvvH3mB8n6cRkTvH7J9j49g3GpscaR9gRj2NYm8fsAjbdDqbxdjjAABb281gjAde4o3s6NVhHkvmh1uPsZmTCr",
  "key7": "5oH74vfPgKY9czvRwiuHC1rgm2xvrR6Cx3UjhtNXnjcDnpLFtrfc2Yog6v7cpty6wVEW2x2aEjWNAmTZFysYMTjk",
  "key8": "22df1AhVeu5zcNYzynji19qzdMaM5jEVbXaY7tXED3vgYmbZqofWnNQdFyJYdv12WbQ81SL8DB93SCeSqVGuSPHk",
  "key9": "iRCmWWSXKKKQ82CtZTFYUc6x1FDBZGcqJCFkiTdvXbkoNMNbUM3k3pTiPfSv3KWFXULt7QnBFJp5cLSjVVVHziL",
  "key10": "4KkRp5rrxfDw3Z2krTuMvX6SCgN7bn2s2Hu3cczCt55oLqJA2SjS7nSsUpZDEXAiygbNd3A3sEC9KCpWdGMzvPZE",
  "key11": "Vv8jYnz5Cn3m1AtgFXdNLHAvKXfpRSMLKF3jt7zFw9HcjvSBgAkNY3hVvAtcvNNjNB81SzDS9cDkLMgS52o71pn",
  "key12": "251q8SQMhF3o85WXSpEUhPPvyJuGADegwMMjRXZ6jeHAFYqt5c6DDbTFe8huj9XMoHAgKCweWEjC5qeYWk4J4Hk2",
  "key13": "5HmMFxEViNj5gcgBBwdSigSV2H8yVNhMfuGtJxNcc9WvK8swQk5MpVdyDYVf4fnBFheYvgNrfNXDwueGPaKSif6k",
  "key14": "fjb1wZ39abACbmjyXGijPjygTTbbAkK8YTP92LEoMxDvdiNkRxZsnPsSeCyGNtGhUZVwwWU64H7towbNyGXexgF",
  "key15": "5Ji8dLRR1PL4iK4Jp7ZmeAwwUwbBePGCZXnDyjVpUrzVUchD8fdCnjXstipdk7hvYrrWxNvhyZE1Np2AoTVaX1hX",
  "key16": "3Wrhxbm8FxJ37JiFdU9cAvRScgyRRjKR9mAUnYWjQFaPXiWcy8tN4bD6NH4LcDDmpYUtuFjBA6gRLA4gkou8LpJx",
  "key17": "468pwDdPfvBPL1MFtGDU8n5gQ47pMDFjMm1vBfZqpHKaKCAqbjqAoavTwgwx4phePTrgb3f1bx3LA9pCLqQ33CmL",
  "key18": "3DUvof8oa9dgJX8QrTXapf6Cxzj1S2DerYAHRJpUztdPyKANWY6RWtBE4GAueePPq6MjK8XfFLoLFHXA7rt9EQRg",
  "key19": "CjuoSg1qhe9aiEUNVnisP5Nc9m5mMXhJfvmwk12TW8ZmVmEATeUHt5KLhigK7sVGRmTdv9GiEi6TRywhWW611dc",
  "key20": "2NLXybMkorW8B8bUmafToTbQXWgJ7DAAaj92WPSrsgYXjs3ox4ZFFQvWmU73embYN4CM6qQM57GJfFMVb8VuZ6uh",
  "key21": "5UDzj9D2gp6x4AW9YLEGHMMGRdc6147Dsiy29628pY5C95ePpEyTBXFo4UQ814f7QCTChgAb8TVCN4ZsGoCHJmbu",
  "key22": "7wtUkfLzceNTBNCy5eVg6e2GUDoDHfdbyvuwHrydYaEUDUTFn8B9Jqv4u97KFZ4t8Sr9uMUKt8A2RGKUc8LdQDF",
  "key23": "3SHPU3XLd1LmsMt8iFc3VFBNddYw78xLhCiVsXnz7UGPhx22VuvACEzWcT71pd7B8KXXty2aHqmocBu9XphLx1YF",
  "key24": "vraoVEYXNQyPapHj2cBs4ik2kt5hcXk28tZ9nS1tSvJiVoXJJXeYjniYiNghuCgm4rgUbKWwez2enQZ4Th6HWgp",
  "key25": "5ynRZShhKYckSFsCAx5UCsJjM9F7MuNwYhdrti3xR2wHPm1gNJ8gc4AggPLy5R2E4P35ZiMYuujCfn7TeKZAMWYW",
  "key26": "GYLvu5gAe1QWjQKpLKrhqKaYGCA2hAuQ69t8kb6cxeSF9324pmCPmcpRPq119ATU7aaogwQU9AnazvALqepBefg",
  "key27": "Tf9ByLzXZzVLYSFczs6g6j1G1p5ZFdNWwQakhJuf3zjCWvfDrmN7cCAQt8E3xGaoQXuwQcCrh2en8q5D2GqGzkp",
  "key28": "2BK8N3pta2LWZjgFbkHHAfKyvi6D3kFVNbLr4sQQfDvRhjUDJeM9y9abC47rqhBNEZVyitJk21sjQYgr8DhPnbE6",
  "key29": "2CZuQdWtw5FtRMsuH793TsDbFdhbhe9bPXEudnhvjRw78re4Mx1wg6zaHXKVLhCP9aEBdcBb7km1Kmbjaip9v4CX",
  "key30": "4nYVw7Kmidn7eHPJhe1mJVpLK2TBbZAmuERBp7PabbL4WkcnFKwusKLFRhsr14bDLY4SHg5qnX4hLcrHTxUn1kq9",
  "key31": "4TZva8VP7pAE1o2L5WiR7ERrCDwZwwmEUvEVvNCydZYnhrnGyu2EQNZGUH9X8SVpRZXBKcx6t8VrAXaVXwsKdhx3",
  "key32": "5YRRykExrGWLzK223oYg8MQKugVPAr5vDYGwLqiE9cM9rwAAxBGiNT3xQAxLM5TGqXK7tvsNV5hk1VWm6Cucwbjs",
  "key33": "PcGbvdaKq5xZ294wpDRXosvhmunTPJ8aia9V6Xo6EL4aPEskVCKeJtrFJxJ8gsNqCmg2QetFdN8GVrazcpx4CWE",
  "key34": "4Egx4Sj73BvX5XnS8YeDBVnq1giwPE6hefHsX9yDxzmp5zNsCMnavizbRYzabJ1qr3YMT4j78g1X4HSyeH4jZzto",
  "key35": "2ERyW4DjkQAcreCChe8qeSe1N5iizyj7hC3vkTTVbxKijNASfowsmdDzoBdzeoZsZTsXS2RHQk4CyvQyTvWqDzem",
  "key36": "5MAoxX6qvZ2UKYa6182Rea8nB728yDrfqLf2uPFKpjznnGxgYM6czz6fcAZ3ywzaoMtpg8krtkezzQfqMxscaBpH",
  "key37": "3Xd5TZJQiW9UR56GiPGYHjLrE6NzUHxaeGzsC6ReXPFQU6xrz9FKdax8WV8AUwxgXp1zDtLxRfjHHDcypDdhmP7p",
  "key38": "44KhixekmsrEBL8m5Q4CRVvgixe5uVkni6UDWCiqFnQHq54mkLbedGhGZeXY9UCE7L5ki34DjYzYwAdZZHEbucMm",
  "key39": "nutCAnpZq3ozsWAYhYVoHcy9YVTbcNHdjhw5wCcLRjmQcjZhdXJ5uKc22etLSaCSwDt3vq2cddFkbCXr7EHiva9",
  "key40": "3oEeDke2FyViVstmFugbiiASWnx8c8k8dsjSEydQwtC5tnBB24thQEAnY1QVqTwNE7igoNKarumRPFY85SMqkmfX",
  "key41": "4EVyfXNcCmswP4we6dKpModa6UiNqn2vBTEZ7EjdCxd4hLwvGNQU3cjURi2xdiX7CzCAKRas1e3SoFreMsaWW5os",
  "key42": "3qhoJocVmPoaE2bCWoMutsd3rbijAToNwNLX4ubibcaF851cmybVtEhbAgURdGZNesv75uhH6MpuCUH5xVGPkgDB",
  "key43": "47njPbhSt8uAxZ9kGXwhPk3KeEkhFGHWP82DneaWvUWSG65qji8vLUwgz93tVEy4o4N4A5hAbok65T3N1Fw7ticM",
  "key44": "3dFHu8KmXPbBrim487j54re91H779SvNzB7H8WTTcNEGZcgMmZqjiBiTXoDmgXkmDL827Jw7dcv3r4tEkGcpeN6X",
  "key45": "5ejbNEf2aXjicdLb1BjtCM4TeKtvSRMZD3FHyyiiy6hXLbNTgPmBcUYoV6A5MDvGAh4cdx9BoUQsYgsbQ1hkLtvD",
  "key46": "38x6sE5jSkFDEdSb4TwRNe34ZiNcqiTinXsB4MgavxZMTqDwZ2nxEcmMciw1u4uTvyXWRYDgepkB3HXgSrPAToFG",
  "key47": "3YyRudYahYrjf8PKeP8VmM4viAg5yiG7Bp7zTd1quG48o6kpCmMQDkPLtncVpoCGMxX6X9B98jULKYmojwKJAAWh",
  "key48": "wnuiNDAFsP5mtHHy4eqXVRrupAT1YKbusNYorgKffwCBt3ZNojFzi2ckcpqM8QkrW1m1pdhcNPM8SarNk8EUK1b",
  "key49": "W9ZfZSUjAEmRvyEToRjwyCg4NWgEJjDfGgJ8drFjbWFC1egJcv8sCaeSHMfv7BeCqnb4i6qbeTEuZbijzG3AoLC"
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
