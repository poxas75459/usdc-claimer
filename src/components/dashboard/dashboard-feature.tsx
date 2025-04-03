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
    "57D5FaMXzZdv7uqWqyKHBWB19omrYvhpdUDDzaBaQRji4eGzHqD6G4h4tSfQ8pLrggcwmhigKDjsGaXdSKmvAYWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yosveViQcR5e4VYcu15oC9q7zJdsvASVwGhpKeAMk1HddUeeyUt1hNN2ZjX58gKDfxyDUFGkRUoarVcFH4zxZQU",
  "key1": "34ixvyHtm5bo3rt2ykwC5wxWQPQetmBiXcVcN654uwpT4GjihovZ2yAXNq6ga7sJ2bbgVzPNrXdpKtJypq12386n",
  "key2": "4R34HQHPYHVzyJSHWb1v4renj13j6REYJC7ErbGgXwEMUpgJycGxFywqZEBde7mkHj6uD3AWLa6gZUxDmYjmZrH9",
  "key3": "2eFoFDk79oKa3dS2FXJ5HRS91HyGsGJ4jfrg9zbwDeMQy4n987wNtH1pmQbUrgTJssSv6C4JaniD3jtn4qbfFi9c",
  "key4": "4fSsRZRrmdB331uqc3jCJzgEGR4p62psFKzfGkwA6Kgt324aMkqutDFSTmdTRCpuDQWK38buqk8LkpYMWonFbTv2",
  "key5": "2Sj8P1Z5BpURHY3BAWVuRdFs9xWcDcM7Gn2L8JAm293tE1KyZd7VwUt4nZd3WkkDS48YDRXPd6uYhMXgcCeEQXCt",
  "key6": "4s5ZnwzxXc1NuWAfMo1dmJzHDsGti17wsvobWA3TyEKjdytjMENfNQvWrxQ5V3wiztFx7nQ7UUjguaeSvesLMehc",
  "key7": "3cn5drkC6sibwRWqN9cg54jcHqs48vg9Dvp49o4kEAb8PY8gL7cnWAmCyCWuwCF9bmc1UuQgeBHCoBcceXjq8bTK",
  "key8": "2NHxQHsjbzXB1ppBVwgxzH6JcZByTfVbdgHdtHJ5P74tkVK4mUDETp7JhY31g6EWm6ad7dddMTyGWMkKspXkxr5y",
  "key9": "4Pvr98QCCKVK6MAHdEMMWLnn61CwkGoRwPffvby8kx6MGoK2be9KL5rdBoXFgSeRyPmhyXncBVJfhjz1QsTCiatm",
  "key10": "3YdmVNQaP1xPJ3xTxYS28AzmdoeApLcTZmeAEfso5uMLfteEwyyTtcWw67mCqa3vTMwYndVKSj7XcVPhK2z2cH7T",
  "key11": "yw586RC1nYhQjHWD4CjtDLczdUinWWyyiiPYYoMyPfgCRSYeVEax6uak44Uj7KNT7mrAAEQrVqBA4rGcHawXm5t",
  "key12": "66YDRoubmcGDhs8PMbL82rmJy6sGGYtnap3AksGZKSy8HGQ4BJW81vsof59w6C9SaFKny5TJnDk87ZTZmyF941ws",
  "key13": "4h8vrxWZPuVfonNXacLybYmMBpjE5Xf5YXcv8fa9BCb4fjnJkqmn3nDU7mCMpqfPri6zqACZD6M5Swm56QUshoyt",
  "key14": "2fmvpmYt93cfPSGdLTFVQ3sDvYVUunaiVEBqTCGNqdrodRHwSCyePRqAqHJ7T9fGdyM5NgubHEXmEEcwJBXN93Ag",
  "key15": "L7QfSB5z4AtaGRp9un25dJd5QJWjVgKdWx7ficExLKBkLpDpp94KUyJfo3F4nB2fST46Uvttb2Xm1E6QBmjwA1D",
  "key16": "32uFzgSjwykTwdn1nc9k5vCzcJrFVwZhKc64GUWG2dX7T8yeQoAKkaEKEaNy2Esz92XBa5Y2CbiYjDYrJCTFyg1G",
  "key17": "2z3KcioW5mwp7CpdrjnMx5cDEebuVEkRx7aEgHtoGmB2DtDNNgXXVLKmU9NeKBbtMedKxmmUVyUHo6xWa5Aji3h4",
  "key18": "3efs1xf5vKXym4xCDhJXvwdmP6bLuMMDxRwjDV6ss67eVCc9wqfmpH7svBkC7gzEm1JyHqU8PgX1rztGrzrsMJRh",
  "key19": "39xW3DWxR7Hadb1VYswojyeZytqu5ZmmjiozkoTmHWbumQHewtqBPGcyZ8EY2dy7hwcZr5hQbtgLF2MpzDZMQx1h",
  "key20": "3JMTKCjZ9bAaLFfCZaCdZHmdfebu8jsroAC9xNgSLiX7f7orVFgU5KuTZDRos5MZkHpMmXLc7c1kYDR1Wc4iJrrm",
  "key21": "3cksSHS497FVKVEQXLj7Vov13mKxnsjVKZVbrtJ88om7KerDxkdFStDRaDMbWcwDfBmmH5kpqcw3ramvk2Urd9j7",
  "key22": "3XqyCuUak6tfGrQD6Rra62oyLQVTSAkykK7TkE8TMXbeXUxihT7GgukKUxECWwJVzjymiYPgeHVLdz7wvACuexYP",
  "key23": "drCKcGiV8ZNayWjQ66msEsdu3RNMcQZFanctP9CdH15VCCLscej8CsMUaUNwbtj81F5gbMRq5xn7ptKBw4E8Hr3",
  "key24": "2rKRgWSh6e1hvvT9tmjY6QAiFsoyerkkRagBM2VMdFTUzv4HxdxWBtHSesEmrbr2pNQbSDrUYjp1auqjtVqkpdWR",
  "key25": "4o6FeNPgU6Zt9hjKPZhXCQnBNmno5mngY1RL6HrpdjpmKNP6QVHJGCW7e14vo86tS2D8ridXiitm94GiS2ke9hSt",
  "key26": "2WPaUiyzDnPu8amER2dsVETAaGaRwq6WxQbScWYVggxgbMm2QFUnbiiS3XNHrzVE1cQbKH3zaWrA44RLBvRbYGdk",
  "key27": "5bFGehrFhoSyeEjtjrc1iY8x62JxR5pPZZLnJAmjUYThbY7bS3FzaGBndWk4uW5hTxS1VRJzCGojVvW46k5T5zqB",
  "key28": "JanGcFKAYsVHpBG9a8LaGfekVa12cqj8xmNDnvG21ay8BaR8USWbQS1kZPatdARZpoEdEvxJvjYpVWUMJMS32DR",
  "key29": "39fcs38mCenXezcr62KLoxoM8qLECss3hierEL2JW4djUNVM8d86VQ3u5DTRVQHkexFnrzLiwRA7FgtwmvH5Qbu5",
  "key30": "2He3Mv4khh4sMHa76asWxMq9tSXRFAzdQwDpuZbehtcetq5y3S1FwdGfRHvkGED2GnMpKT2sDd43rWBWeXWxvPnT",
  "key31": "8pMd7bkfRkRr18cGJYCasior6R1rX7cw7XtcmmXNzwv5Ki3Q5JtbX6HgHxciSJhotse2wFFQf1CmuBnWiA6CQmw",
  "key32": "5QvHrXCWSGocxzVWmHuwAwgFsbfiB4eGCZy829ax29qMZqQA8FPmNHJHNa6kraWFmK4QPPTTWnRJ4Jds1h2C4Vk3",
  "key33": "36GS8dp5j56jW3EPnGtkXGEfgCmnGrJfi7ZRzmCRqFp9wabXynQDBd4nQMirHZKipznAUU5jgKqUEo678b33d1ct",
  "key34": "4C7UVjSE9hWnaTvMNbXw6zjtwh7N6cVqfpMk7nPyczwJampHhe8ZLoxXVH667jSycj6XRB6G1Yzt26XWdQ4JFa82",
  "key35": "wPqNg9Lv9DXFuhaLNZ4cp8qVV1rx9UaPxpomMotCpuE2XuyuccpuyMyLeoVPsy8V3j4dHWQArLxQ3RBVny9ek9S",
  "key36": "ZuXPmcb8Ty1kH1L7NQsWYrjZPQdRMDS8ZNcGx3BaSWS6uyHKiyn7xUtQdQo56EczTQgKzYJPJuTuu8zkZa1a7rC",
  "key37": "3hzY6AfMfqpjdQAr7TUcv68MZRUsYhmoHSf46zeXVajNmy4L2kiqzTT4BekQVsuBbg9moSwc6YFqCYMB8BGfuUcq",
  "key38": "2euH3NDo3fFLhiUb1WGaci3qa4Q4ECqD6H1xrKjtXXrdpSEtuZjva4U6pm9X9VkayvwyL1aiCx5xU8N1U5MXZKXr",
  "key39": "33zG6jZ3SSWUNm9gu3byTSWa4FUGYB7ahjK5Uj6RUPwPbQSgpRrCScy9fWAaKcQmxyrk7wbSztAirEsTVV5SgAfe",
  "key40": "24TNCrdEkqn2y7se1T8HWukcA8VSjcckGmEoZzPtSARxRMk6pFe2UPepxpPqBGcwNhSyAS51KgqjunNoY4tws5Cm",
  "key41": "44AHJiM5YRw3JqKBgxnB48D4PxTiUBqFmQ74Zz9vF8ZhDsikoXfzjkZMmx6vmnsA8cPvsrV1hB4ABapPhZvbTxYp",
  "key42": "4kVpWPUFMaZt73ATdxdPSPS7cLQyPoDkEyJGJHU7XEqfFbVecXjDVukWRFQSeNQ7BaQM5X1TFkgW5b5FQTq3pPoG",
  "key43": "3VCmhhxXYVFTv3RVEq2svKXVxaLYU1h5R9LjmtQcuBP1bwxpvMfGsWpxtDBGVFTR8L4sh5LuSPwb65ws52ZQS3qM",
  "key44": "4GDxjvvTUBEda5LQGxytgBrG7HA8CqKrnrB7SLhT4wMTEhEppZiVPMJezD651fR6ED8NY3px8xm8qc8noGDETyTo",
  "key45": "5VT1UMTdbp2ZMu5u5nCnXXp9M7yk6wBkPsZzFKm138vB8A9GWHaNhFVHPyCDHVNGsDpHVd5kJUcGynoY45sCAVRa"
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
