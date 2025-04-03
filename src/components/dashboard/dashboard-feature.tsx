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
    "4XcbsxoeXJmj39mTKMe8sDifei4kgR3w9qnGy9QRfAKQrYepEosMwGhCpMCfopHYH5ptuDdsjavLrmpVjRtDswgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDAusMcdpJA8tUECz6VKEwAnTePRoHNLCZwCnqWAHh61hY6rcWQYpr2UvnoA457mL9cQJn2o4oLCQ6MhdFAri2a",
  "key1": "5Vpzt8vvpMETDavVSFVkYt6ECAein5VYQjYYcstHkcJskyBFrE2y55jcbLGujaPvZXQwyS4RE7PVJRsUZeZruBYy",
  "key2": "4imq5qTBGTE6aBGWrtQHBGq6eAH8gaF8fGk7rzyLoWC1iYX22f43fRBX8xFRbHBxG8LtTRpuZcWC55bzM9KTvpry",
  "key3": "3uHYp7K7iD9goyLUkLGqLcBzVVyFacgVofgu7TRTtcmjSh26ndv6WZNEMw4Nb5TAvQbWPs1PLEu24by8s3KRmHzt",
  "key4": "4hCkwNjC1zuETmUrpM7nx2LpqW3mxtQD2eRQSeXeYE7gsjukq54zqDRpJzzZCsz3soFZR93XdWS1RoyRAioPigsC",
  "key5": "2iMNx9LamdZVdTf2XjtD2pak1rzM6ZYXVpbRfKAA2sj94syK2kmED6wSa45rLKQhC2wyE2KwQ1MorFcDLwrLtDrS",
  "key6": "2eDZzfwoXMJ1rZDTCzbZMTirheG2rrSacHDk6HvT3C3er5XFt4yDJ8dCwSvkovZPZJPVfHzoAueyW3yuBMndWzc4",
  "key7": "4h4JFmhqeD7Faugw5od2rdEzhPNQ3A1jxzZxGALdQ3KyJ5DLS35mHGpvmMxwVJk9X2mv5jLncRxpLf9RETbGkH5Y",
  "key8": "UpimD8b7emHhUTS4Tm5RpcJZK5rzt2aVTKVovejy7dButZpBNikQDjg1t2s6h8Non2GfBy1wRoBNN6sUgUdeMTy",
  "key9": "344RxaToQKroFZ2F6w6yMPdWkQCYavmVoqBRXfNDQUhg8EELyHGeaUTpfihCyZmpWz8Ecsb7ZZDMvpYALVDHWxAJ",
  "key10": "2Ba67LDvrbjxxiQH1EUXBtBxtQF3yjmHDKeGqBorVnasMwRmct2tUMTJCew8KQPTDc8UCXxiA6MpUdv5sQa2mr1z",
  "key11": "27BGEn6kPEP9b1E9e5HZJxDH4aTeucXWuuLm22tY1JJKSRcaiVGEpHsKK3CB54AoHCdNf4GiqoCuRbmpi6bJeBTN",
  "key12": "3UHUEu6Wj6NCCAT9hYrifezRb3v5AuMwxtwdnk5ny4ipEnNkBUL9KdWEo1ZW5wYFFwfVRPqmmqShwcmXKftL55uX",
  "key13": "5mR2sKYmiTfLfqJ1hxCzkTBPmt8Bw4QK9cJSeWnCFDRuz4aHgnvJJSg24KtSnkUaUjJKoQoGQdbfxvVGaoriXCrR",
  "key14": "2GtJ7kJrt7PajCeBDb7mWRRR6KAGvZqJkn2JToCgcAAayHzF4TfJy6CTV4fTPMbtEMaWcYMUNWKQCrTrSS1Dds7t",
  "key15": "3xyzp2Ydt8pLTNHz8XwouDG9S9nFTj9sFhTnZ9z4CpaHD3wcUbXBdC9YKePoLfNjL7wqiJbezxtKW4xA62QqMmdP",
  "key16": "3XcpefF3rdvxcbKhCjBs7ayqiH215YcRCqezy67m7YA2fcax3PVRRygB6WiSMXo6WJVFwEPzdJPsi296YK6mPRbE",
  "key17": "4hXwLGmrqTbzQZ4mLyXz98Z3t6DE3MCP4wdbx1xzv6Cr34whizQwiDRmPdXsBDk78eH4QQ8wWafiaMM68tMer4mm",
  "key18": "67hVqrgQyszx1aY7NtCUpb936vY3CneEQTtXkdTTy4Xxky9b7uQ9NNcEsoEaS3BPEA8KQaZoRVnpQf26anCWXesC",
  "key19": "57SR99de3NZ98Wqxo4kcuMpQhay4bLa7VQ7juoHPddWH8RuvVjR6WVxL2sMGSAKnPxuxVUwMj5VSFzvAikQUegdm",
  "key20": "2QZAxWMMSuoYNfJz4uEW4JJXCi7U9V6H27YBe88MFsb8ZcJn9YYAGVt8zcL6PCVxHmChD62t4WNBHbzRrJ4tJ6E2",
  "key21": "4ATuTGL4S9Nav5r1csvqiHHbAutdapTQgu3gux5WJaDYKTpswr27KHpFX49nQpkucSt5pWswEpJvHDVk5RuQN6ZC",
  "key22": "dG1heHFN3NJF5169eya1MVby3aPvTVxediQKMEucxd5Vpv3n71NK97xhmzTkakK6Pc9YxrPJFn7MWNHYhscY3Vx",
  "key23": "4cH67MsWfnDhUAnxttyJbQ8paPsLu8zmQWvCLUqjQAcRREmHCpv6YkJTfAWqgQHCnp4vgc3gQ1Gczn3aGjdxxURF",
  "key24": "4w5svgtUuWiQ1dAvnubDY7dRup4732iNWaTkGVkeUtKANrox9Ha8kfG8nQUF57VphRnANDjU6hmUyubF4sv1tfCn",
  "key25": "3QkECo17HXc9Fi28DH8BuWNhubS67kywj3MP7bEwgUHZ7N3e3Yzahb7gkZB8M4ZnWmk6ZekkSiatiYFErX2d7X26",
  "key26": "4gQ2WMCGN5QpnnRb8q1Tns6tXLNYux5A3hjwsUYoZoYzpW7toSoLWktmS2pZs7T8C4yC6UUTTzQLUKiNeU8Ch6ij",
  "key27": "4J3fmGqAK5hYnmm9kRcj7dNpA8Y6BT7wVCS7hKkJRAuZH4c3pkhmz4vRacPSLL3Sa5oo7GWm3Hvg6xQe6Qbx6Zjk",
  "key28": "5erqQLWSjPgaj4uF49sTo2fGURgRMJYNRvJf6ry2QNaCHZwrSUzhA9kvt4qMM9VJWDcDzw8tk8Lbm5QqL7EbETxA",
  "key29": "5STnzQ4kjnGwFoM1tU7L73xWucHrFQzbR8UP1VTwtLFZyn3FubwVFEEfQZS4DPD8eTnAs4JuUGQ2QqdsXk8PcuiH",
  "key30": "EyqxcGVA4jhE6ArtSmL6xvAWbgXbQFtK2FuzxCvifQ3rxUeVMBn1goU579uyp4J29ciduh5nymwSnSCrheVQo73",
  "key31": "4qf9FcfjVd8BaKjTFV1wMu2C7NrGkUiPLA7kCaEHYZti6XFALCvPP14rDkBy9PrSAHsEyoCmFMUvHRE7nsCEeiET",
  "key32": "4ZWFN89CbgEN7WnyFG14qMqezztjrxYuXY62x2kTaU5Y6HyJLemDp2QzVegzatR1SrqTSX5Labsf4SskjS4hHwER",
  "key33": "FrweSmccKFtfg2dRwRu119z4hTZMnpekMoYwXKhk5WKkC42r1tAEpVEkakumhcKgb8v9Sa1EDBHm4Qcg6uGPyPJ",
  "key34": "5Ri3rbLokMsFQeE4gCpHRqkesv53XFUTab6MWMUGN2U3rTSyTFSbGa5rNoGxVa3ppm722BiZia6jvHBdQV7bw9m3",
  "key35": "2wZ3iJywAsjPjAT5eKGoc2TGG9ti5UNowCpnKPxkx5QVyQSkAz8QuLvi99nNAEGbv5SdhX8JWe8DmDwdEWCTBp6T",
  "key36": "2a4ydquwC25xiu6z9G8e8Ko8nERUjEUE3X8Rh4Y2msVK2WLYnUf11x3pn2nDdSVUvXW51M9PpFzbVzKF7NaMXZoo",
  "key37": "4cBQAhXNcmb7qFnhR8XxQzHNYMejwCkAQRFRTmwc99LmSjq3XTmjq4iHviqmVxDQW5tmAFmz5tkPYwgc3hZKf7Lf",
  "key38": "28KTJEuHSJ5vEGFeCQAPMZJup2Xcd2N7s6crXUKEnbGucsAaD5SN4cwuUjA5e81V1vRV9Bv4QaGe484vm8h1AAds",
  "key39": "2mRjixjWLdH8B6APRWNK9a2Z6soZkm96wbJpE4vYzR3x3Fj4C3HnbFrR5jrqQ6ycESGgW7yPconxxiA39vYDN2hT",
  "key40": "2LjSVhU16NUfPhqNSaYRwXaAU9Fzrc3uk5SXFZJxJ4cKBGS6ahH7cYsk8MHXFQJEDPAQbPGABYDfqGnNcb3rYhUv",
  "key41": "5tufLSFwqoQ1iHtSKouG4CwhjM5WRk9j21Y4ujsngi2p7SdFqW3beMssH9iEuw49tJrLowhhiq6CQeM6PVFLUpbd",
  "key42": "3PYXvsgVEqFzVeBKgRsaWrxJqQe8D6UzUKtxAe31KRzXRSdzwW7yejMEATZ4uV9jRT6p8nr99w4Zt8WrARC7q1CL",
  "key43": "41xL8sPvcJ4PgbznCHjicAozWv3WWrjb6ZAy2PGG8J3yb5iUusqNCRAhuD6k8KSU8W4R2FQ5v1sZv2G2utBWrA69",
  "key44": "2FHnaGdFRtmLwqUYTcWCMEzr68nUvhRWkfusqqT2W724TamGsmm16RZM6z7Vz5iyRvSZZAE3UqUFMJMAgdn7xCm",
  "key45": "48bSR8wKqTVyoYz1vM91Cnw9eSQMsCH1uEMNFPuHfn7RpEEGXCFn76n4TSndeD7bDxDkqcTVSFaBvVYGFASi4hqo",
  "key46": "3CmbrtXx3Zb4TCgk6kVHHsGJ7dLeJTrMtzEVWATqbnAHUJokwBbbUp2duFp5mLhKzDpXmdzX1d2wc89zC3HQgUo8"
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
