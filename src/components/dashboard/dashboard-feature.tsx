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
    "bEkiCnyFCeR2u4UJiMSxjwSdoma3Ucg9hR4Jy18R2TD5fo7d5JGgB1KJvhGnFUtCzPwrshinYKLB2ViaffEXZrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGVjgJ6aPmLkvEmFFqrsdmM27z54wQbJdi5RtGQ46kLoKVcLKDAof4av395VVWRbQTb84gPshTUpvF2w8QQsrW5",
  "key1": "JUtoA8RzpcFCeM6y9r6fQ7MHDiogdG35dWWZwXEiCiSfT7m5XHTZARz6y1AwQ8g8VXvkZx7ooL94gjvEcyBSi6h",
  "key2": "5151aee9LBazR8CovzLGNz6TFzGTKDvPQeXpkF5LJrqMzRLpU9ii2HvPFCFNFfbX2G2ikULpgDz2wdcMePd2vVVM",
  "key3": "59TYRtwz2FTzv3mv3Cnpgmh7m4ME6eSosDMrfQrj8XnYZjvGFb6WdzDNmW6m2LE2sAyatUcGEmmev1HjA34yYHE2",
  "key4": "4TuXQL7d5HCSYJwFQpcFJK2hATJHT4Dau81NhsRD598gnGoYXR5coAg925RcddtjGUDENEaNYyZuHPrqJdTwC4MK",
  "key5": "42zQ84FoY1sC8m3f8V29kEu9V3kEURLMRcYNrbi2Q2ZSyYWbjYGH3mrghhA31YiqHrQMsKZKv9c1ys8vYjLWWSFq",
  "key6": "4x2wSq9JLYu2QXwA6DNa8DkebT7JnikfqBPurzaEuhSfva748RmbQPF3tDhzQD9PfsZkAgFRqtWRJ4Mdduv3aKEi",
  "key7": "3b8MinU2oUZh7SrfZJQq4rvE4eq8hc6LvvT26xKgwSBFWKanSQ7b5q78xJ687okYj3NQNgmGHDzx1rcKw6Ve4Mai",
  "key8": "5GQpJwm36ArVneKPR1bAeYBiZYfCTuHMbetRoESDHRWpGEgZPKvbqRx3yXVHUQCVuvPDWSopv7qPZam53DfrXKnZ",
  "key9": "tvsFQw3ipZYBAWMHv4VRtHULr1dQQxZmiQ8VM235vcqpGXEz2okoFvfzwNC7zcqGLcQAGMcaG6xq1LzQ15XX5Ei",
  "key10": "NFpWkvSZfkY3ybGmBknVmWzdpbmCByo3oJknMWWMHwiVt98iBHatDncHTwGQnU9s61jRswxHec8FtaaeLxyG1Fv",
  "key11": "2V4agnF7wanG7rCgkHSLZu3nRTm8oaCDH5dxEmeWQj1Y4L6Cs7SkxSXsyAf8JT22kB8VPe6P8e5LEZU3pS5tGXFo",
  "key12": "2p9skDBz6ScELdH7ddUNTH33KjFL2rUsmRw1QU8QS2aore2UFpHgbDQwUf66yWLucwkHuQbpBQTWUjtE9o8n5Ff7",
  "key13": "51SgKyrKnPXNCyUFUDF34QybUGC62Dnakp6PJDzwycF3CbnauQVhCVi4VyAzc7JiLdavS9x6gCPX6HKoBPdZ3uSF",
  "key14": "ss9Gz6yDk329vAxSAsym56AF8hksKxoGuPskTYgwsKhyz2Y5zSNMcLYHd39Jxbz3MGCtCbWvabwARTQFPbzwjY9",
  "key15": "2pEyG7wsFM725eCZDaqgRQs5pyLTuZX5u6NsKTfmoyHZJvQsfHts9xhhKwUFLDpD2HRbYpHb34RJyEXPNWZmvbbX",
  "key16": "2MkoEXuqFTUJAQ9GvBBG81mafcPgKVF75Fwe4fsxnLbnfH8EsGwNuuBUtbJVFnpNjBLt89nEPWQfja4JEJbEfiYV",
  "key17": "MwVMjTo4c4FgkiJfBfbkph94Z9VLwppb4APSjUJ46DESCboQpbYC742twCp4bqiHrutrL7GAzCoVAbTeLKSUcS4",
  "key18": "3LHhJ27nhuiJg8k43MA1XMYGR1zbndJ9Jcn12m5garVpvDr4Ld14RDnx3DnjVG7GsNqJ32fREtWRZG3GJCdwCrCU",
  "key19": "4BeQsRZg7JQWqqsLerAuc4ok6kbj87NiUpp4MBAprw8yZChYAeFbXHUfwj4PWTa7Tn1BvoxcBdBx763PnjiixCqL",
  "key20": "WCFSstMNa17rQQymd1wBeanfNzi4GERFUyC9pzgXxtjWQaQN9jUMx7MMNLhL9g1MGnsieoERsHdC5x7hACnSeMx",
  "key21": "X1dxP5K82w4cZBMcREGpQxrZpNuW6WTBcrraY97UUZFFCrEk3mXLmMqBkSsFwpsfnLuvgceptHCNShwWZUw1y6D",
  "key22": "5PH61zHeZZTnsPV8DecqJP6hvQjeuzCtURfBH2ouLjjVt39byFuHhrieLxaAFipzGvit1occ9E5KeAuQ2uvQhDWx",
  "key23": "DGtHdYFNZiyeP8zR3bjQKz3GTqHUjc5vR2LJXbHpeExSuRDhhXuSzGvKubuKojM5MnqFuvJ233ia6FfLzkyt9Yn",
  "key24": "2pzvNydCzbPjkuiSFeVU3kTXETuaQ1zkJKJwNM45FtGCFuyR4R1ysf89MmwzrFnMeizarsku75S2vej5DKtuwgfr",
  "key25": "4E5jGTEVZDVFwoWSDkPNbdSC6f9qjpVfE6mXeP1eNmhLPCBn5y3jJtn4augdkMe9qdUcYVJBAYSeQTKmik1iRMxq",
  "key26": "67BQ1Rq5sGNTMtoA26Vv4KYZJKAAeQmu5jXuMZNnpPBLzB8ycVWQcfKSXoHQRUC51aqcxXKsYD3h8H2mS5YZAn4W",
  "key27": "38o3jYMT2mW1kot36jn1WEktk6tYLQwjtkLkAvwMwYR2i23xd19xEoZ8sZzVU4i9FHxJLon43zMbdh7dBAZn1Ro7",
  "key28": "MvmN1f7BVjeGho35yWjFhz77KgraonjJKtdvpWHcpsKiyJkYHRF3reTCNrqPdK2u2uGefboFZEmwGmaVMqLhH22",
  "key29": "4KWR4bfNwVpPqgt3rNKLPRRNcJsi8wWqgSmuNmZV43P8iJyAjDEUmTDGsdKsGvKeWhzxXA2aPmS9VaHPk7nssUJZ",
  "key30": "4hNM8DxP2MEzsYbdDo6aBe8nu7dJZ8Zs6cMuiUFAGfxtcJXGNVRyqDaqaVtAv7io8vwKXYmbsFPGShH9UxYhQ49Z",
  "key31": "3Gcgcv58eStUzpaZc5v3NrPGApBaBiu14o1pnrSnj9qsTL2j9Vws1nR28GmYdYPb4UAV2LhMEiKtrzjT4X6UgFKb",
  "key32": "enikF5qRL1sXo9p7ucKApYKpEnS7U5W3BJk9eDdDhyWUHwcRDAuNL4gVVz2MaETrExya4Qiyn18LqEYub2BDDBb",
  "key33": "4if1vtw1ptuuaaUMzFfxWjMRNxzEzTrBVcwUYVJY5cFcjMK5uVEVHKqa5iwhET41g2BV7wC4DgQagiEvnxLBmHNP",
  "key34": "5PVbZnDrXXn97SP8sErZuEsC8UogAkfLF41Ua9niG9fGDMwcTdiiQybvVLdbD3SGTpn8Wgn22gieugvAz8Fo1Mce",
  "key35": "5DJtRrF5XfWz6M4xQA15MADeniznta15m5ArZ926vZYJv9W7gZkGRdz92XByCnDDw1gTAJq54SFiWWWa58AgyQND",
  "key36": "4NZRNUcszWatY69UP25dxp9X2e596R6Ck1xpGiKZvSTrUUgKZa1gSYt4hkbSLDi8c5hDfPQx7wYjRcbGPaHRdpjv"
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
