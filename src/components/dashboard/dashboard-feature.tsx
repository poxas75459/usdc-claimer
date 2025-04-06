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
    "3ScMd4La7PJmoeYyFJJoUSQjKBTgqQB8qNPF7ucYxzL959sm1SMh4UYgJ9RCn92dWHF6G45cuzXhccH4XvBkLw7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeAP3fQi398Y4g2UPvycpiYm12mYk7FsUmgQQZXxat1cojLtUrg6tnb7UcQ79h2B4sYtieEJzTMs1952e3BVgTJ",
  "key1": "4zHyqbWBbYLqScYEYpirbSpKXfU29Y4QnMbHqGjJNR2dzxpCr61vC9Kh5JtuYwtNY456F4B4z8TYnaN5RXD3N1Ai",
  "key2": "3yzV9K2CzMsQf4gXK14Fbi2K9Fot1uqZHGC9xpkMxkqEgq39Gha4vJeuEjDUQ9NTRqXtKDohevuqH4kgEWiecr26",
  "key3": "5taiNAuoZeMYni7pnoxDrDQKEatM1zj2H8ydgBVm8Ce2sxDCogBNfbAdj7AfTAkzLsHW5WMRkUoBv5vd5gjBsHTp",
  "key4": "5EMGdcfKm2eAwfD8H3NBHaB3oupGUfYZdtwKLXN68hoc6HSzTKDYNHdYa4pJEf72C4YKZqGfzBqGrac6gxb7zK1o",
  "key5": "5DkgGyTFNPkhD4P5vRhFUWwYNoKVyGZoGii122b4kF1RSNVejxTKb2tFfgGKTyUsmfTdeGLnY4Q59hRq4xZn25hm",
  "key6": "3fFnzYgWfvfPZdk9BM9ze2fP5kP8Xz3zdXJVLaogza6Pmi6ojvUuf1ENHXFSAiLjG32gHWQoAZhrzzZ8YYuAjn24",
  "key7": "32Aqpyo3PPAp1CztDBztsW7BLTjRy8z26qBEex3fa9D7gJp8HyteWjASwqJgaU4r9Xs8nT23o4rLXLmwgyPu7jBe",
  "key8": "5i9rSxaqXLErsPg5kPpttffaZ4JQQ3efDCBDbRh91N8YgfpPHqv9VxRbiZa4yNPjK98wzYUDfMn7QAxJbiNjETwf",
  "key9": "5gdUUVkEE2nVtTBkMmBga3mUKCFQoRgrKYrrfGShF6LyiQug2UCTPDMAineRJkwaY4i5qFKN2kySjsB6jxp4h1Ay",
  "key10": "4aiNWkffKbncBgQ3AYyKtEHW9Bp1kpDrR59SMWhVJ16AgAGatZj9A3SuXqK6SKUje8iDE4EHed51i7i6XHhiy2vY",
  "key11": "3x3hRvoL3yEM3pnGQPjGVzCbigYHdFJVGCgmCcXQXUk4CsWnM3hMpnBRWHou8Nv8qNveTuxtY3yn19wL9AzYwdkC",
  "key12": "4yGTyKxGHs2UcSwdzyPJx6AS89zaWnHexh4N4h2oXiUTaPwDJNQt2TVvHMJKqzATeKHUQLYHzRa7tt6kSj8K7Fu7",
  "key13": "6U5vUkNCF5RwQjGUJDMxeUnEUf1y1PLYD55ftSyrSZtDnYLaM7rtZjJJLfP5qB4bHLxDiQushoCYu7t6q6dNbUV",
  "key14": "2X2qv5Ug3x2wfAdjd7qVAqbzqK2zRF7GWMZTf4BuMYqwbcnsrboPnCVArRRwRFUrYyFK1bmHCWCXJsdZVt7ju5AB",
  "key15": "5VNacdSHnozLUdTCK52F7XrYM5nXo4jQA8d2eTi97shCTKjxpEV9bCr6DhRyz93ZvBnirJSLfQbzhrn2iRkMMduL",
  "key16": "KoEn4i5W6fH6t4P6H6WYRxibh88wDbaFhLJJzj3GXZVBb2atut9HNMVkcwVA5R8x9GH2pC2JWJPnBnJehtJtupr",
  "key17": "4JoV3UDnrwe66H9XqgJmEAXnobCMabACfRQo5JDKRbqfyinC3hrWeJYeBUkMFaFbbYuqvVsZLSKf7nhudmzLfg6V",
  "key18": "28C3eomaaGhzQJgdtvmPWKAQP2TakAbzFN2Y2HMwcEdvoMaF34DG3HbAgxAUwM6jDF8NAm29JoWe2SJTK9vfQyPj",
  "key19": "3GfXSyYHPVtQNTpAXzB11NEhgFVrWiQgiSNR28SrvENibsgiB4HKAaZ4KHi6EQVmPTULTXmgmnB1gEXdCFRPFMdL",
  "key20": "3YdtZxiF34tGoyxX1nX2sy8h7P7GQ2kRAyoV5Pv3VMNbRVSXPK1mdn53f3ZQwSX4QqipuV4TXvEt15WurojvvCGf",
  "key21": "79w955Mi1264ushnLGanUUY3yUHvo64Fh1LD4Zi76CG8RPghSjBByQKGGaLeqCzx1ACPprMD5HpxUYWd5dEc5vn",
  "key22": "JGVcddrqBo35r5MNeLs4x958eL6pEpkPaK22p6NYyfEH48MZtV24CqETgAackRDvCYLVAeBW9pWGdZMxjE5Pwcn",
  "key23": "Q8x6EDKMXdCnWNVStp9xXVrUh92R7tVyxQUhnSHpdYVAVsUxvzpywQScSbLF5oAngLBRMScrKBa3fHbZJk2zsmt",
  "key24": "M8vPKPqTRTbCTbp7GD1Z7f38ddrsLDvSDRJXaykytNJhbb2aEx16bq5NkMJawQ6Nby2DoBhSYQmRN5kqfik8x3A",
  "key25": "2gwvySKR7B6W2vHj2YJx6jnEzZNJAHvUG2NuWrbMskitHrxaCpKxSopbir9ud5bLdQXREiaAgdhD5zxskGxhMYwr",
  "key26": "43EMCxYQimiDthPfCxauRpApe5eieg3bB8i5ayEQbjxmqPW4RsD1d4gmqXCmDury2ApewCvhY2pFMHQadw3fLFb2",
  "key27": "3QHaYpud5YtFNDD7zh6jpS311f2ovGFDweww5KY1C5nTFEyxagNdAnovXKosjjT3sfprX4FF98gnHcudSgAaMXqy",
  "key28": "2kosWAkxHbSLRbLxX2SipjpXVhungbHPTuNgeKbDuaw51gKuJe47ZwALirUJmFkMAy5zNvhvNB3sMsiLaja6HqH9",
  "key29": "3sQ3oQfZwja3Dv2tp3gpC5RWNcCSPq9N2sMSQFdA8T1WxNZEHhwVmm9MTyQxE9SHies8ELZ2d2vkvTtiY9QHk8aH",
  "key30": "FGt4ZSb91Ni3CAhJfhuXydj4cMMSXeS3qCKJTvNs3zDEtjstcawkXdXLC6VTp5DAa8piSJyeWYhkzzubEpyfPCN",
  "key31": "5NpHUA48K4En4sCghmcE6AV32o73MRn9ZzNLk3MTTB3fPzNB1pCarx6iwy9Rs1veFZPU16avv5XdGs69Xx62D5qZ",
  "key32": "4UZBcuwYnhvk4FoR614PV5FnoifSWUjZBBQHAwUKUmGu4YFMN11eHJnsdCSkwRymQfsGwK9NYwAQRXbGbdBVET8m",
  "key33": "Vo2wF6cpsXquR6JQnmpoo1KdbFHnhs1g91YqC5wakYggk286W6U7uefSJme2r9QWDDKy4HzLkGM8wS2njPYo3pS",
  "key34": "2vceoVZW28JVjswXt3yqj745ZoZm42Zts6Uj44Y1JPB6fquCTeNZGGTs4mxerUY9b8qAtwaZoxRvAPWDVCxw9bBj",
  "key35": "WZHcNd8XEF15ESyrsiUBiXR5jkEmHupVCYPTs8gnpeDSBKFvaKr7tecEdYP9t3GqGdJ96PYsJN4zkLDUsVk1Tqf",
  "key36": "5TT8Sgwv829KdaSbNfkeLa3Ei63Z5jBtPF6UoDdAEbLdU8UZyBx52Nfo2sH26KkpV8hbCfVnm3pniCBLNjUifPbJ",
  "key37": "34zWy8nFneYuytRc3pcCW5HzRdKsemCxeoddqCuW8ZnW2CineYfueQhjcVRYB8etfDe1vwMyCGMBjEf19XcXYg5e",
  "key38": "529UaWwnKm3HWbMw3KYn392bszzC2bMBGhfaHvtmfwP39imAcZsyBPsJURTdYpj3JbDUKZVhHL1njkXbruHyChhD",
  "key39": "66fTjSRfnJ4n9gcBMc9Bn6ajaznVVMNStUvNfjDAq94PTRJyD966MGYW3FoQaF6dirKGyvqXEL8zf8Cv2bqDY8Hv",
  "key40": "3duMZUzGzeNuEuLYL9k1M52DyPfQ1ERRQsrDu72VVtZRfSeQxr3sYAEZQ9ybCLzDm5juaypraojCMpuK65BRYFrA",
  "key41": "27RZeoJXqo1ArDWh473zU9na9a9hhE6v79f74S3dtiidMfAoPYvRW9Txj4dVfLeGVo3DhGYGY49Wz1wFJaYb5z6z",
  "key42": "3ckaZjPFMEhLT5sZpBLMVvf2DYpovFGYEmXP1ChP9vd61XbQ7h1E3A5jW64qqp81sdBkUAEcYYnvissPKM9bo3KA",
  "key43": "4J5YJwTen56mRE2k9u2mEdvZCjQdhUCEqWfMbTUPbfDR2GAYUcByAaEE5Qh3wGEJvUn2VPAwYdjR5Vrv3aDXwWQ2",
  "key44": "5rdGzBRV2HSZ8kQUb2XjgpaByDi7SsRfWT3Z7iFYhmF61ckYuSYC2qcDBFYbwyGoDjEautLnZ1HHDLDv27ijwh8d",
  "key45": "4QtfFsyKuE7GutqpmmNHDuFn2BehUmgYchki2cYxXCStfW2pKPqiTV4quMuqf9jYNZfZtRZytR3eu71AxChxs1kZ",
  "key46": "349GReLpmj9HRPfLLEE2uFjJEj8M4MmKivwt7rhUkGkNAMpbGGKvUk1WLrhZrWp7AtBcqH52p9vyvUk1HqZqxyHy",
  "key47": "PtMnVp9dLAqC8FJeBMSRgpzeR6jPVBDHtNmZrAv8cJh7TuDSqqcimZyDzVfCSofDd3tJxrMXnGahsnRPq6jHzxp",
  "key48": "HcLqjtvFM1Xb7QkZ8p3bxc6Vq3HX1XfmJfKciHyepJfSXgzSZqnd3pZc9oLncyuf9LpzFVY3UtoYweaLTbHTCSe",
  "key49": "5CUM2MoCuoNB3t5nuVqAFexd7KCLBtxgaKDtYNp914ZPdgyXNk5iJpm6a2URVwCYS9eKDMSVZyn6qxCb8Cb83gRP"
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
