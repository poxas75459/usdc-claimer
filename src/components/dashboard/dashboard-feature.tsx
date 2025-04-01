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
    "2GeBTB4WWRQtHXBSLxAHm8iJ5hqCnfm1ToKE14EGu3tQ5upSni5riRwdrwRFZze1v8JDUKx29GBgYZDpcTFtYgAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47CVjwAdTRqfKm3YfzCZwxjnwnWVr3bBasTYbKGtsxDaLz3CYtD6va5VaZ364V9hh9MKmPhpw6nKm2hXgVrBFCZV",
  "key1": "2xmDft8G1x67QuNZ3qfM1CAMxYNTnVYthXzkwzT2oCmFabcH3sRagPWY73vdvWvrzKu7SiSEqsZa5BX4b1WvTDqX",
  "key2": "56VwmYCbmA7GZhfaX3dm4hU8pciG5hS5ZAf45t7NfBi4mbEZidVp7Zw1WjXMabwFiiBapXAT1uzyFocuAsVZHPTF",
  "key3": "4ym9u14g89PMGgPYwBotLB1i438HWXMVEVHjqLLxBpZ7NBoVY9kAPQ79HEqqDTv6RVg5Gn9wqaimFYqFuRetnHYW",
  "key4": "4ra3kax6UmFT7RPPaHUttvhEjwUWz2yWioYhEfxoqqV8QsMMMsiQC29heNw3Spxr4Lf9M3JsTE8DQH9TKnm2wTq9",
  "key5": "65PUpyhxZXMgrQXQGUQxqn2iMo8wbNouSvJSqfsjT1FctCjCzoSkgKgeKwf5FQ3DkJb9fGVShkUTgNvZSqDtX2U8",
  "key6": "5rpoaH9BXMSNhAd7FZAozcbyB8BE2W5xMqg8GM7EHdBTZXFqX6ns4UyZBJ7bmR1hjM7DC1JvahbwfNNWmWkiF5FA",
  "key7": "3hqZ1Rdn5V9fY8fg3YUrcr3uRvjtb6cqqJahdCcMP8B7YKkYutm3vjbT7J9EUvXGGBFdoNkWmbTbgUhGdGVubnFW",
  "key8": "4aXQRv1JpWnV2WD8VVEJihviiLocKwewJffNoST8xY9rKk5LKxfPtjMDdxH8DzeRWVnSzZhfiqWSJjvmJJxTPaMX",
  "key9": "2YRVVnyNZZdxznhzvfkB9uYr6hneYmR4Lw99WsnNLPEWaGtRksdxuR2kQTM6GFRsyjiBv3My5NEoY85d1F4sEyV7",
  "key10": "24MN6cRtg6XxMectdKeTLFf8JwUq94UiKrD1tS9TZQrUkG48SWrGD94bgaG4xkR4TmBx32r1fi571k6moGZ1Uns2",
  "key11": "5Xf97oDREaiGNvTnoSLg5Mvrzv8CkEQKnNkpjAGqzbgnoft7S77AAeXByMVnByqzoeW6SpB8sNzGpK6FjKgTRMLA",
  "key12": "2WQFcDQUzCh126QFBuiDPb93F5cWLFA6AWeRVA4xpmyUAd3Fo8tanbtT1QXpCGwbxcTN4j43JWTf4WaE7qSVV55B",
  "key13": "3AJ1T4DHKTrNPpYfBBKNxo7j2w9umVhFaW4zdhB6qoNh1eXhcJZRbDGBfHKh9z56ZEPgKyVq8doGrnuyqNo2Vsqq",
  "key14": "4wYovAeQpxrWV35i973kVRZeNUcSt94xAUwQ3fHNbsT427pvybWFsBxKSNDXRqwv6ZWudXNZiygvvYYzrD1asrYM",
  "key15": "R7buTifhxW2ozmoaEQpReUdmMCusj4z2VwN47baYipekk3hmNhHKamD4jGUiqtqEUxqDVESg4Xaudhbwu14N5Uv",
  "key16": "2CVd1JcVPV3mn8JRFbzAnZFGQB6CYP5vYqUEtRc8qveGLmym1RjZup8wDL42a7PKesDJqarReuQGJ8GWx62isgtV",
  "key17": "1Hp4yn7rB8qU92GV4WXeGYzxRzxLamkmefQEJfyEaMuTdT6XtqdkSi7RQGYuytmtiJewZa2ZP4WR2Kq9iZuSf6T",
  "key18": "5iUiFQ67YBRukEoRDKs2rUeBwgv6M17sf6PKQRFLZ64EAkuANHyV3JWYR2rh32XJM1rb8rndN3BgTKridvbQZskj",
  "key19": "5Y1DEafPNqWfBkwQq68Z1WPB5bwheQsFLbzjsrFNP4bw8191SA2V38cgUkcx5z1CUdBkAMH8Jgffqs1jdmuSHnRZ",
  "key20": "39pjFuH4P4xt6BbuBwQxa2invZyeBuxBLvZJponm3ttE2VjyVLMoTVFNNBbTkp1NTSbqjuEKfxsTv2Tyh6zs5rfU",
  "key21": "3pNWRekoVJRGSaJ3skCvrJ8Mdz25EmSTA3bd2ZwB1j5nwuccyt27wxvjrTCe3WPvboxWw5bbWhPBx5w1YREAvXUw",
  "key22": "3aTA7K7mntPQhJiuFrTi9Ggmz9hEGdApwC4pLc4r4SV883wMU2zvegfWoEVJ3LUzNVG4rhtmdEgtfCRR9N9v7gGF",
  "key23": "4R1dkKDjVTf8RBtjHT7QT6rWRypmY7GRcWPKXF9RVgn8QKhBiMbbCySULVAMxUcbHnBkxyKA3Dq3ocZTfzTwaq66",
  "key24": "3DTLFhGSfJrVNBUTs7hgZYT7tNQDRSFqx7TDaThYrpgPuWYmqdhaeq1kWLeKJinC3TGbqma8NWKTcidzvgb2Bn4N",
  "key25": "4mAdPXRuSUXBKLWQUhCE5piykMxfBpk4S6cowbrnR8GYCiph2Luh15Lz9kwhnUWS9d5AbAxtcZRbozTFd6Tm7a2y",
  "key26": "5xSLfQoVrsMoFqKTte6HN6AJfjpsBAsRESPcpxWy48EPsJBdtLa2PZjeeQ2rwkwCxgmLGgBSXvZjsgqgaF2HNq7F",
  "key27": "4v2gLYEBUYdKcFG4ty9YpkGyVDXAfiBjGCoyPwA2rRa3SURU8VFudHddq4dpDzQLhcdboQToxrRXDaSvWh28xsVA",
  "key28": "bqcQFyysD69nxnhMBN4CykysHEWuWaa2DDxqZi3RXmwTWWhmmGvhwHBSPW56qqZenYeAEwyrAsAa6nvEbn7tAiL",
  "key29": "St7p71DRWcSGG7pEucxeSgzYF1yCXqtDmcCVgS1oizNdao7d45YhyUFWyjW9aYax4A1usC2Bqu2xSgRsdDhXuwy",
  "key30": "gcHpeEXtRqgtNmQA1pHdY9wAnFkpjaZCm7kDUzsR24AaofKDhujvjZqSz3AfQnPUBqGqPtyuQvxq4rAQ9h5x9gd",
  "key31": "2tmDUvQWYpV7s6X2eSjd25t9rhP6ezTh1XaWqDtauxh6j2dKX2st4e9Kw1fCahrWiycbPBewTWDFbmaQX9uamUgR",
  "key32": "UgwR49XonmNtpW53H2yp8tYFgqyhGUHxdfCvadMTpDu32BiRJheZGFghTEHgrD2TMejZmkzvWRemrAUN67nSDob",
  "key33": "3QatqGkbpA8ejadNyydx7drKMdkWkJZh5a7FKPxpstXYXtv4eY3mdwUAz8Qry2cmvCtpBgZKHBykqu9EwLb2hDR3",
  "key34": "sSi9fwSgei8PwsotSxdCKhNzc4ebSev8QkT5xyaHEsDrp7LydkiT5D7RG5STCRzDQK1JN5NRz3TaM51grxAFiGw",
  "key35": "xHDBeNRGWWtjSC9K3HwxkvDXfJW8zPWE5ioV7B3NvdXM24AuZSg2SVmYNLU2pM4yPyEn9YYvw8DtvBTAzbK2DGm",
  "key36": "52tf9iEYHrgbGXrHKR72Lidqu8skYG5MMnGtGNmoYN5GrAbhP1VdfzqBur8ZohN8bQ8i93DSSXqM79WcFosCTTYx",
  "key37": "2AbRX5dR8mKGaoN6GoMUqh2sNgPgHaqawaK1Xdrh5czYcaFQqwTHN9VdpiuNM4pfghhrqbw1xuLWaYFNdfYNqaL",
  "key38": "61DnXaJA3ZrUefXxReMcJLStuE4xvMUWCkZGzSEpsN7JHqtEsPWWXmWCJqnedMdYDUFwTTzsbbT146Ejkj9NwcEd",
  "key39": "5JpGztsGQ8v1SSgSzua7h7vpDo14q5amJxLuPG7yWoELXUuc5R41a3eu2Wm8xPg14RaikwVXP47maPPhZPyWmAq",
  "key40": "2kpAxNfoJSYy6hssdPgD81LAXqnT1PvVpboKNLzwH1bEagifCLgY8kcVD8JtyjQHNp3qspWUwRB7ooNnrhpv7tQX",
  "key41": "5cVLYwF8frsEWQi8X2Y9X45VLpthi1TLaxXSQUtCHgRMXGnhyG3jvDdAchHYphjbDe4LUu7x2CUL7r3b9dfG7zN9",
  "key42": "4jfbT7VDHXgHnRJvjt8a879ToEYmpGRBxuy4cK4HhqNyKdJawVu27cWu8ebprEGqoCvJyUBKiGsXyFs7zt3FkXoJ",
  "key43": "cTrUhyYiHfRPwU4Z1k9xyaKCR3knKx33MGioUnV6SEVqvZNt6fAKyhX3wz1kLr14oDxpuYv1SNicsfX1gPbcpV6",
  "key44": "4WzznE75T3aAoBeJMEwcHmJ8jjkK9Ybq9NdG3UxSoSRHHshtUudSPRGr6HgVWRPoHg9DatWiRoZ12iskEy2e75hi",
  "key45": "25myRAFZymkaPzLiX5qW4Lr5bLGFPDCyPtYcp8sYyfvG6du51U815AD3efnr3GBgnbwcwf7zj2mibFtXowpHpHFj"
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
