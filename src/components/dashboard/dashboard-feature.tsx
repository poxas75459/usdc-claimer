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
    "A3XEqdUihJvW4DKDcjJAp5BTrLkedKB5PZAV7gCcsyc1BpUnDtQWGKehGY84Q3zi6idTwDhPnG24NvE3DwucuJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxtcfvXNiyw2HrJDVJVkrZBcd9W9ZJ86iBuRRurs4vmZwU3XjzsLrQ5Nrd1QCnPe8NPZXEq69VHAj4HmBkvicnc",
  "key1": "3WhwWGyqGUNQiD4G6PRUJ2fVm1HXUyRye1Ls6Qf3JKy7B3Ha1E1qgE5155yasbZFib5DdVmdVdNMCMKpdFg6oxPX",
  "key2": "5Ym1kvB5QD4PrXK7SPJgSvMNFGq3VG9BjWyw5J59ADvqXxctTjh1AbMM9yYwRmtq483KJE7HAGzuvsvq42oMLbYB",
  "key3": "5LHhmvhjpJCERDqxHH9kVn14sXnHcvv3y38bcSuqVAfV4Ppe1iSYpMRQ4BUUyxQ7dDE8Aj8nX3UyzYyP6sLsrqKm",
  "key4": "5EGnKNxXZFe39XQUcpVjR9t2d3exC54LuWs7s3L5aysaFGQWhhjYFkSz3AHUMyRZsKPDoMmkF3cyCdwsSeFnvKE1",
  "key5": "34LkBS729T9A2eSAXz74PFcd9AxjGb5DraoQexVrXzubbsoAnPpWHPzVubYBsMR66HDKxjhxXFsF38DzZaK4Vv46",
  "key6": "3o1vEt5rhx7txNanyXZUjTrpWBFhU3MjerKoTHqEwKqh9FVw9hUNzCEkTbbaQtcJTbVCjTumxP3CWAKvVMqpzkhn",
  "key7": "3Rsi1DkeonYfJEd9AVoPPSdwsRNP7NRruMdrLa7JWbUSZMJdEMB6wWsxpjZMEDmkWcY2wbv4tvyo1ySdTsCZGYpc",
  "key8": "3PRuM3B2Mdd4VUaVHTRrVUm8NxSHfR22Vd2ZBUj7QDbQcSmQtGoBAAcrnGbyx8d7JahbdGBYLVTgQxttCU9o8PmG",
  "key9": "2fLA36CJvyqMp6BgRggSi4LbpLQUMGockeC7Q3LkfZtHiFJriAycLUtE4Z9zFjUh1oAq3FLGj3z79m7DTdSAArZM",
  "key10": "1hXzcGz72SZXzwRWtJTg2eKj1japWNoxqS5UBxR9jfS1KMjzxTMbk7geyxYwAnBPtnercYMEa9xQXjqk13j1fhM",
  "key11": "2By1kvhTJV1HxBTib6DQExN6ZiofbHLR7GBBh5pRXewdk4xYtDiFUG8uEwoL6ZAMipAnU1tnFSyaQse7yPLh1wAm",
  "key12": "2aBPszbTqmiCxbxYJyTKSYWQTkNwuziWGm5CkMqSXXeJp7VCNVDTXCbLWcBwYT36zAcAUnSg4xS4VQP8XAScYTsb",
  "key13": "3PxSGvVmNBgs83xBMkAiPLmPiWf6TadYwrLNDz4AhZvZyQkLPkJMuj4QszeGUFiwSVUorPiiUrZXFRWbsRToqBcU",
  "key14": "336GcAuriCaUVkf3iMz9tHHay4nmWNGpg3SqZetZz4xWdE4eYMq1dcjJyYgM96u5mm6XZzYXk2g7nKGKHG9UnuDS",
  "key15": "4BPM5PotFVbFkvqcxJh68A1zwZX593enL2f16FXS7CxbBx9XxPu4EtSwkXxBXu5TGg9hejWtmb4aSdeDwWEWt67V",
  "key16": "4ToD9C2hJbjw3s5vPY3Q6xEkpUcTfjgZxg3VqCkzxe6hokezYQgQmMdD7zY3VxB7vtbR29fmAyEhNbajr5optWnW",
  "key17": "Wbx5qvdtbQknWwJW55fAi1MZ8MkDk4BuJvLEbLxcKy31MapDf4pTQcxHxLCKw2kad2djxhFr2hA6kjDQgZ81zPY",
  "key18": "5LontyPGFhMwysy42r7TzuH7NMhNuDRmxRTAunXSF6EijwoDvtNAbMYdamZZvKSwS87inJXYc1KtEfs6rkDSDHWH",
  "key19": "23UuMatqhDyJstHkpsaNhLK2tdvTQEKQTjrHW3fMhSKW2ghHvx3tEQLcBwWEgxPn6gJTYHoLGryvxnKwojz3yJmi",
  "key20": "4uAgcbAe8w2kwDLnbu6UiRPEFgPgbx1HM2jJ3FBmcutf6xpaMH7WmyB2na514v6pzuLRVSqnrLgiGo6T9uKHajvH",
  "key21": "5pcAMqrAPYbMgYb91v9RCfY9YsfQqohQ21AotHxBiNbeqEWkKMco1Hye3SrhD7xJFvHfBCqdRuKdL6VA2rfAjX6Z",
  "key22": "3A3mrKWCpCU2P5FoVwF6BAYVE43JXi6CFtqiMpdKNNAeCqu5TSJcFMAPoxsMc5NM8oEUVrKjZUo8TCMRmmreKjbr",
  "key23": "uFiSZKFc99V4kc3VqQcYE5H6yDwS45KpTjvo7fxePvR6WDWiVLLaEQh5rEqQi7WnvLqGWx5hd7Cxb3nrpozSdmj",
  "key24": "2naRhtwwAx87YBsDqHwjBMx3KExw6onFWwzqxaQwUeyaAXkAonkfsUx15NrAwyyrJtTAyvSDr6ssTMiDHtt4HpfK",
  "key25": "55WYaEtzRGcMKCU27PyQqZUBZcxm54kcG2rPZGKHDkxphDnPX2UCr67CDduDrJPGZ3RFMZKmdSsaYXKRxxffp6ar",
  "key26": "5gT25rdPwcAVGRNMaL1ujvrM8bhNBBcts3i1gyeKAHTzRGbb2y22kMuo8rYJ4sDmzq73oygKBpuA2nyJP34X8Ugo",
  "key27": "4CcmDXBw8rWw9hxP8KLkU87tHGJaWNYzUxvLRMynh8jR2xGY51zjVZFA5hBo3sFZrb1T4jkTziNcSQMSV2g5MZhC",
  "key28": "HS39eS6bM332p3wtPXL9Mj5W3TCozYoC5MTdoXMoVg7t6mU9VG5yUXim6HmeZ6SQ4pRvzBi7nE3cgUwAaoo4vSX",
  "key29": "3QJafLTkxnw2Sokego86oA31Eq8M96y2Ju73rhGRbAqLynQTmayXx9U5snN8hkXzgrgST2RUMQ4JbLDTHM1FNVxV",
  "key30": "5m5RUiqirRmyWKv1U3epSUsjs33b8ohiCZ3WgRWYtz9aifXAc1eaQNQ6wSSg4529vgjqEQa1Zv3WQrUATdVyuyZY",
  "key31": "3YUTEkkeQmUJFmRNdnURPGcMe3eUSrCe1qMcUzB7MKeHNboshdQZdHTH4QptnxL4bZVCcjYQqHjwUDQRo18E2Ksj",
  "key32": "3Q1GBVeJpimCRX8WqoqUjpPHGEbYzsgJK4v1NdXrWQsdCuaCcYWCsx27R8vMyXXBRg66UVvxFU5DENpFxn6ZqSGF",
  "key33": "rUaBzJPVxL8SUSCbMLvfZfLbwzSvTiHRF3yUEe5DNGfCgbaQw3MWc62GS84URFNGjGAGBMkJqbx4XR8zpgceTzw",
  "key34": "4ViYvQ3dkjAR15gAsjyQdvaGZJBVjKTXDgbp7Yuz4J6C3wtiAg3mZKAaAzM3XxGMxzRE5mfkAuiLsYuVwpazqmwF",
  "key35": "4TsnDTv3xxBXY5a9gSXPjM1sybAu9ZWtRvPt512xa4Lepb9jznFV2wyPB5HHVAmEKkXoTAoFWBEfFCYoYiq4Hfnz",
  "key36": "4ApBH3JSK1vpk2hputqGBY8Dh4nnJYaz8LXzX3BsfYMJzPjgJZDwW35VoNR9StZS6uSifUowqHoVQrqqjpadpp8u",
  "key37": "LR1cjsPACBbmX7oHJkbtM1vs2JCGPmNNT7gFXXo9cvTWsXzL8s6m5WkRX8n9t46DLmSkDU1dgZTkuZdX7skBZgm",
  "key38": "2mB9pFmTJBBp8Pcwf9DEBNYESz9xrp7fsT4zuVPGvrkBHozXZ4KjRmXuohL5HyGPmfvXDaTTkmQ8WfjbtMTeb3p8",
  "key39": "3R3nBXqReghwGvgasuZ5Gp8M4RhZhhjTqWVJD5yREgtiQcdixuV3JjGd5KRu4NgNmLWYtKT9gxxidE7GqPZrqzFL",
  "key40": "2FPLytYrSWfcwgx4Vwc6KBcGHQtbX3QkBWWg25Y1Qsdm9bhmhCG2yMrzwtLxEqQbaayAwMdo2NurNFGc26UhdRz8",
  "key41": "57NC5JjfXApDe1p4UGTdB4HGakuTgVSfpzeqcKwWnu3wJmhsShP7vkLmp1xkyN5k3wzhhBJEdqAEEzZzmmm1kawk",
  "key42": "4znquuM3YUFv2YVXaH5K3HoTxZrPvN4VLceRuz56Zd13vqJcwaR1n7RtfmtxNVGSJzJNac65XaHFPyNqhS482HBe",
  "key43": "3jZNLPSsnqgRgMHqaU25V3zwLFrwkxnpVSMtzH3Nz2YK1PC66mPgJGBJq6GxCR8myeq6EUn5pb1mapjvGcGN7Hvf",
  "key44": "2RVTP2DJKydtoFnTzeJaU7zGLQAh5uFX7zTyCiwHuAUVBVhXueHK3XaXQRPnXWj14XdcUdmQkNZUfHeDcfNyqp1j",
  "key45": "59RnsGVsuaU1Q1ka4tcCiaRsyZLiqyBfNMX2VJei5kcxMGZwesUcwYPzMFwHt8fPz9EP7Vh2twMLYr7A7ArTu16f"
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
