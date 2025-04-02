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
    "2ub6MCLKa34KJLHNYxPto48qfP5s7XJ4Rqy4cnSZGxXUPAAaSytCw43Vqrg8P9qbTmNbC6FiGT6fT7PjUAtaSFgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cYnoLozDtvJPiKC1UVK2LY54NUnTeaDvVLwf1Aj3GHHinGtkDJPkyewt3eNT9VmkM1drsRizn8gMkR6Z2RtpBiu",
  "key1": "HoLQFUaDcpAM44RrBcorqiddpDboUTBDNws4PXAeDBk3vtZ4mm5MqB39f1suy4jSt3LmGsYfvGmtYFdAUKoZHVk",
  "key2": "2Yo13QtmY9H14XFLeP56DD2wVG8nN7KRJqjjJrbQnP3Ga2Xrry8pWgtSLVKdtXr96AC3eEbtH1mvwToiCwH1Ax2F",
  "key3": "AUG6tCRRPfaxVHDCZRwPnJYdKFpS3mF9Q1X5zawd87khndTGQeyABjcgN81e4d7hRzy2M6o3YbH2e2G3UVDfeDJ",
  "key4": "WqvWfUtvGxCNfQSfMZ9tNsYJE6ZJt7cmgisSMftDjqHRNHxHhu8Rad7qZdWQR3tt8nCPEmmAoRuz66ARGS7RVjo",
  "key5": "41mCqqkAhBn613SxzBCDpgfGXrvjbFsdhQD5jFM8vaCX5xrMa4mHnLj1kmWhL3kqivEtsMTvFA4d3ennTpEmKk4Y",
  "key6": "zx45xSZGhY17rjCky14WaKdcnM4w5fPC9A2Hrva3N9GF4ausRQYVJ3Pjz9amyqG3DoUgcEwkcpwCSaN3Go1B6yX",
  "key7": "4NPoyTzB5AXtYiLXVdTmWQffRvK1g1fWEwZdxg3c1WSdGxQhw65bE4YCCRSdDKuXpm6XfUQ9aJsPcYRUEXczt3BD",
  "key8": "27zRTJRX583j7t6aeeyF3Gu85rDcsfnjsurhhwkER1cct52QGfbzSegZr1krvTcF6XRLGmXEvmiDcigNnpJPDWRZ",
  "key9": "u4RznKiknt3mEeGHQY5yKxStz1x3kW6ntifgRyc4r7ztcXhJHk3ge3LQR7Wr2rBYdVuKSsr7Piu1K7D46J2Hozf",
  "key10": "5p1L88feXSbuBmgpmfVGFgnc6L7sTS4wwAsLoixHAjS7GNdtTcGTb7ed4UAKinbFCvVQHuxoBaaqBvc5K1t6oMvs",
  "key11": "5LGMywAY79vu7W1auQ1P3L27StodzByDU1Ex4EvDxUZgaEpfsZGwoDdJ6UZBahmAdrdUvk2Tfh2XZUVvV1x67EMR",
  "key12": "2RkkAk5Pb9Af4BEm83DZaTcULSJnZipnvuW1oz5SxmZhV7H77ssSfhjLG5iq1QHgjgm8sqohoN58XbBEAD8UFdUg",
  "key13": "kq28x5HR1gBjkTXPiGAtE7Nr7AUqsHgxf7BSuZ1UuQAsGb6gxUzLaoSkTUrTGFR8tETcSsfkH15hGAU9w9SGmuw",
  "key14": "4A8Fg6oaGRU9dWWfuYCks7b3cQ6QBYVKcGzAXdudz7qyGsGyD7FfYpkgJzU26WuMBbK6waUDFLooq9Ng8LPN2k5",
  "key15": "658bZUEeRj8TfZSQdvPac9ArfBtY7XC4QsKgS3bKYfgESJFSSc1HvnSESNqShF1k1pt7sicTwsdUCGEEDB29s5Ki",
  "key16": "2oyVWHT4WCw6Sjm1WbCrhiNq6KHKPQBQUvJ3vLK238MRtUJv6iUtRdCSGNC3MxM4jXpVobDFt4o8rFubBVws5dk2",
  "key17": "HrEJUaRptcJpp6ToBZhbi4eWGFPUdKipzUSxFNhfvgY5HUyPZaKroKNubG7F3YtAh2sTfUoi3XZkUXd2ZZrfTF7",
  "key18": "poDnZM64TbL3hNr94S7Am5yzM37Ymd9huW6F1sHDLqEVg4mkeHqZBVQ5xUKM6jXRpuXZhZAH44XS2HN6uGL1idE",
  "key19": "34S2vvQ7awbaE4B2qtGhv33ERZtmh3ggUvY4RCm2E9nAvVjcJecRhLUnZBTywLqZhPB5EhfGxpk9CmV1ooxf61nn",
  "key20": "5ihBFs3CMPisLoxamZWi5MkMDRyeSiGzhy2n9hzVhqx62D7Nm91BQwSgM4Q7k5QwSjXXGZ9LBEHXQxMVwW3CsC2s",
  "key21": "4jEif9nZvgb4DcuV3mssmgfL4WQmmPgXwrPWKis3j3UJXPkhG4E5gVkvrxFr5XAB2FbQBkeKsibcLjVHuGzABtio",
  "key22": "5mg5dnfpGyD8XvEoZxEiR3HyPGfarDHFDKnt2wu9n6ECJuxNPUz5SQFfbpkRfdtAGJZxztNMqysUnYtjLeGmkrjq",
  "key23": "59zyo8UCoDpiaJsucu42zwmENetm8j8FWcCiMaimCeEfdeYvw4LpcdBrdpfvq84wYt4xzqVQfKYwYDgbDvfb9Rfc",
  "key24": "4tixA4zqfAqTDsM5j7kpab1cgwy3se4CCvm9f5ECUdFCFnpCTQ6TNV5qyKvNTtikgH9xm5qrjbFn3vteWGrE5h9T",
  "key25": "2k6GYvqNCEhG7GDfvKoBAF7swzMiL2uatzRTi5YLPkQokf14tUFzpsGED2TFRy5MkmWngBj6y1DcrButW4rjTjve",
  "key26": "5iCW5FtDGSYnfZrQcvMwgpbtKrKfMVpBtadycTPfpG8or5zHLM6gSCm9dpk1wHYJuAZXa5fEvoy9B6L5Jopz74Tj",
  "key27": "gYLMGTQ8LTQCVSTsweRKduDEiuT3SWLA2vnegPdS6pgVWevVy16hugmBg56k8EC532CAywrzDJccdGYRtmgXr2N",
  "key28": "2EpkyBSVZBbjbWtbmqKj6M47TTRCGVJLHLSehsRX2B1PYSzgnjeCGYZr8QfeZfwubWNUe1zRjhMz5X733WFP8WWm",
  "key29": "3EDCwrwgd7wqrDssn4mqPBs4B7mg8DPkm3wX7Tfv4sUTGStDDpBahiroYxf1KbDc5KCWnR3rWujZWtuvFYhqhbAD",
  "key30": "5ieEyKaHMzatCKkgTRSJkrQKAHAi8QHZ33Mfqy3Pibwm5gLTrNHFqVn21V1ohcHVmN8wcbtZ4GS4JeEhPL1TAhQP",
  "key31": "64cGvJGFrTSAsKh2RNaUM1iFiSC7oyQqJFaCE6RHLq9mznNPPf89qNxNoCWiSTdoVdTkRKjxaN5aisGjPQuy6NVU",
  "key32": "3dPwQ7rgGv3kgvBnBBaqSva54W9wvoCBxvxXQMeBeuejoED4J41PPSSJz6g22Gr422G3gPguAUry62nFGtfXnJPk",
  "key33": "2XzNnsTwwpFKQaxVDNFgzXepaibz9wzb9uMPJ36193GTkTAteCXhPPg34ELUdE7XeaSjL3D7gKNm2VavVT55mMpw",
  "key34": "4ssErbUf694k9cY6zPPTdbQ6Yi5bZNgHgfAdayg5hCWS1vRLjbdmYV4LsFNtb71R9N5iUou8hiGnthV5AXToxDiz",
  "key35": "2tnFyweysiaWtFbi5Ujsf76Wtw9C76J3DcbcBAKGj7UGM4CsiV74t6t21fVbr7jjGMfD6GKCHYwDpF2r1zUSK8jX",
  "key36": "5SFyL5bNCiEMmYazxSqB3UxFSH69jZeh657PHpJCV39brAQi81RJaDHSLc3XkEqGAAgYhP58Ri93nqxT75hx3kHc",
  "key37": "3ZitYr3rCrzmiayPQtgm2kmSrKbKySC3qU5j47BL69BAG2Dpm9RWfV64yciAk36LC9PtqTSQdW3QnPzGeT7WuoPs",
  "key38": "48CpBLFdbyrTYRmb2t7qSMN6SZXQBjTdkx6iQ4Z8Jsj7AFbCS3MKtgkLuCWerysa2a2CZ3bmorbq4s6CXEAnjwJU",
  "key39": "4foc3Ykzd6hzdPW3MLwQooBxxsS8oV7DFb6V7DHFod2sxDSjnPd1vNTzCSLxe922F7QbhsQjDjDbKteJPZD6QbYw",
  "key40": "3yRBtkntDmtbkuQfg8qew4NNQHcdTwCw28muT4GUhapv1Pf3T9g13g6VkN7cLbZLMoaWaKvayLCtsqVu8d5vP87B",
  "key41": "wbrsYRUryF2r8R1rX5vYrjeqkabGbKukKbYAd3jwvf9Qg51efNw9kg5wTV4HWgFV9G9eUPREXAHGpWVaNGfUayb",
  "key42": "5ZHhGguw3LzS3GeME1DxqLVYiDGAJLURtCcJuomVVyYMfqKDAHHZNoyfSPfTwfJg7Kt6ZXrqPntEtkrt31TAXZWg",
  "key43": "66BwtEGBtgRJ9KPPmF2bdo7xavPMwjrr7cfzMTAp5dYRkUqSTZs8CDhc1F1TzibejiVZGYJzSR27AQT1W9vGwEQN"
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
