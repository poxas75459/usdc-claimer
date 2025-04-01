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
    "5JugJ8BRp7g4f5M4pC5Jcre9Br4CA4bK6YcaiM2EX8FdrNV3kqh2zS5gjZEtvbgFtxYzcJ9irEdr3oFXrTVDys4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54C9wkwq8XYderADTH8AGBuwefh56XY4K2h52PadSm96hjE3U4yXhfn6Zcqbz5NwwxeBEDQGayN5LFEPGVzfcuoo",
  "key1": "5zZPWkHwMMKLXAdsR91vH367CDQnc8b4dpbiuppjkUXbv2o2dJcN3J87gnt7SdVYoSoy9Mb687g95MAFzDiV8NV9",
  "key2": "5mLhHBydYnSzuVMNyvCjnqscmFxT6XdQyxLfRqRuUZi7vg6sbtChMCmNVVopQjM8zqDcuJHP42QodvUAQZw1HJ5Q",
  "key3": "63DasY6v6SdvL3kkTxAZ8eX4PUcaWNL6Hfa7LPb2kLTtzrUh9vcc3EG65NEvXostArypDMNKcfUczcVfQJFaWhpK",
  "key4": "4TMzzBm3qskHiTWi6FTU9Nayzx1MFWAE2E5yqHRKiSkYD5FtEWV8LGJ1XYkjwCi1HnBPGgkDhi7U5APatQNEEiuk",
  "key5": "399asV7FuF6aB16T1vKHuVwWh4JiF1x8SqkfnwSrs4DmJAjEw8puwJwGXWtHqwgMCmKQyd1gQ5sLqBUefDFs4Y9M",
  "key6": "2roZhKAy54VhfVrmoYWE2j5phjSt4CN2G2urAqAXCo9YFgEi97nRMAJenxcwcaPmZmPipeqE5fbsxEjkjURoeu8v",
  "key7": "2mjTGmftzRrr1T3FwfxM5qwhq4WZxdxKJxZzDoEcnpURA4uHUvoVuFpyW7iXHQVnRuGDsmA5nGmnPbHHvDR6xwVW",
  "key8": "256BJGrKsBXig9WaH7bzpzG3xHSpDL2w9H6GsBbJWMvPzJgDmQuY4umFW58jR99sCmYZyrDcNYb8JmfoLCiWg677",
  "key9": "2c1Q2PizFFrpqA2QSTckeyvRTJ95Dkw9Hdn2Kqv8vRevULUJCznTDEk87B8rQca8d688Bgcs8bngRy9xxNJoAuRT",
  "key10": "Weq8WNc15jy3YYQgVWK823S4kRs9SeQ5HxYCH8DNXxWKTk1cD3ph8Rmeb6HuuaMsqs6Xh7xCbak6iGBgC6PPqgk",
  "key11": "2o8Q6SZkHCqfK7VwZujZV318KW2U2SFjutHKP9h46rVwugufEb714P2tgiDjbrJZABy2UmDrPtMCd8LYPPspqg4j",
  "key12": "1kC1Kjry1zCmLqn6iQs8YZAYfEaxkr94eTduHE34GjNBHnjd785tN5UKVK2isV9Nck71cQJQGepQNJCrrpiDWUa",
  "key13": "47Qr6ckh1YiyvACJiqBKgCEeLSeVuheAyxKyofkvhD5n6io8LcbbCJcn4EgteiofTxrSFTGacCxahSb7irD9t6mN",
  "key14": "5gt1xgpg2tYHajT9npaABUczN5tzvWuvicn8Uvyee9r1yLZv9AxPzTuErmStPtaVVzULfcLhfJ4BCSNpUDTkn31D",
  "key15": "3QvyyGddRAYSjWBqAJo2thzACJWyxrDqtCsDVzqJqTktwEC3dUdPyVgytJ5Qzb1YQ3u6wCtMymijWZcSrBYMCP6i",
  "key16": "hBjDqE4mvN37M8xrqzp3LJvCw5pygaYW8tCjiJE16vppEzYcbxHqzTLkv5dNdpN5oyDV8uLm4Tb3ic2uWoianD4",
  "key17": "2GEZPU9Cy88sNH2LVYDYXJA9NXU1xgUfi1LB8ot8FzPnH4U5ocywhFpNrg3VyuApnm21PJoSHi2WhDi9cq6gM7di",
  "key18": "3dEf7qbx9ykFZHKqfRSRgD6Af4LCERMwu32fU4WwVjfc1je2Hn9YBeL9MNnpEqN4zXM5o3ZpA2btAwPRJxEycJQY",
  "key19": "5Ntw1kEyVCJbhBCS8KdVMjxgRYoP8tJNVtBZ1YhrPxREFj5hyRNebsYCTfWiqYGDHt36Y66Wws5nRiGC2ajRgQae",
  "key20": "3sb7jahxjKpuQoPtbU4PxYfwZMVqsHwS9K7yAxN7ScnfZBPwV8RFd8BShGerFFsAAjDgMR6euoMTpAjTTQccZro",
  "key21": "3hZLZJZkhjMns3YFcadiiVMCeS4muHLZME9GNkMiCPJSx8eGE6sv3Mw9i7oZiBQAz6R8BG3LKH3uEnWUqWszpARj",
  "key22": "3i8aq3Kzg7hbn11nVbn6P1f5p6XgQurbcBDgmMGbia7NVZtGGyhtiXga1FbPbAqp6oYxHaDVuUSEyEiM5C7r4WXv",
  "key23": "2gAVS49xi8C7ATE5N2KYmPNVsBgGFFzQi3Jbmz8Yi1aRpu8vD5yD3jkpQERSEovFh8cnfVQNUPgyWUV5BVkKx4Eg",
  "key24": "SrZnmWGi9AvZ4ET1JKm6V4cRZchhzoqZ31F5S2dQggESF1wF1F1a32QDrDEQJVsrELyuCEhHkhPdyf2eNoLXDK6",
  "key25": "5Xz4bimd1Sg6g3Cp4Ygkavw4N7NuN8B128SQebX5xFcAhkDFDsE8Zq3BDgWj7LZxgT2CQtJ4ftUUMfLoHSuUPs35",
  "key26": "2R9AzeMypE3g9UAhYW2MWYDj3wmdcD3ha3fUXW9srWswxdY5cA3aGsKd8rgFMCDxyWdLCMgatphSbWqbXuu5NFDW",
  "key27": "5szdMGNbVTUqoaHUnDPbcF2c91b5G3zA4KyaRGHdxrjzUwLMx68hunnwXPBegN6riKHYeeaNUVHgFhV5V36ewxjq",
  "key28": "38jyJtgwqKNGLFmqKsXQMFUWnA5qc6d6qJokdaW2RxEiERyo8kFXB78PAQsYQqXbx5LRqqj4AkyCWsMky9uP5cP4",
  "key29": "2DTHUSPSaiBVKcp7GDNaWgKFKT6dawKEYBUBU1MtbPT1UAQopEGjPtX4jSebK1i1EzBu6KmzEffTGK2MExxmGydg",
  "key30": "2JsjkuBaSfbvuaSusxVUVgiPNDmbCwQ4YuQomdUy3a2URv3f8K3tWAmcV5m2nnpJpmVPc1tXGNVvBCrSUqhtNxMG",
  "key31": "2QSc4YQZrQfaArva8KkFMowfEWMp1z4eWGvkgZxme9RWHcw1HdM4ZRCQJPNwHq7Ruqsu4PhnHG72Nkmnvh7vrcnm",
  "key32": "66YQFVG5J619XFMMUn21VVFAGnEGMbXbQayoMpjMoPQNYWgUPz3BicC8pv9JXBRDHxfSE4jQytcs4KAtyo4Nfd8a",
  "key33": "2BGX7ByVvapSQG6zA679j7x1CwRfs29zVW5UNzJmCJqUsRuRUDsR1xLTnjCy7thr8c2Yu3Vt91TpnBYnCfW5hfTR",
  "key34": "23JDJeNLy8vKHsFYPzLSFYuxfZ2xHMJ5PofPYnBFogPb5kRZqyT2T6AR29EkuFQvvJi9FcbMJGLn9NnqK7z47MFk",
  "key35": "3ojDtsMhDyVMMw74oXXxysEjF26XuVxfYbMUEGssCCbgAyUqvpxGR25z1nNnM4MvxyjvYNRvd3871AfLWnjXohZQ",
  "key36": "488BN7wKx8coHR1vrXJvThkJD2yNoCfLFcWXSMMHdUinbzExCCsobmBmmUwiH2gUGiSmHNKpwj7UHPYdDoz1xzDy",
  "key37": "3DqSCFmhhrfVW55npjJFKovtXQgq6Vw1npTchB19gDsSwmHJ444zHcMU1Jn6SkzhHg3hq8mrb66B2LbVAj8UcQ1k",
  "key38": "4TvTtgZU6tMHi6KwoWVQZVRzCvXif1i3d8WS9HUjCLVia74BmJojaN1nc2FPvdL7mi4Xc6AjnB4RR5cRJp4oTXCK",
  "key39": "3zX9MiWdZCiuBoyyPs1sAsWbvnbmmBQrdBJFQg1bW9RUuHQApW3zq6ctakAK1jD2eHgLyxDJMuis1bv8qU82w3eX",
  "key40": "3EcAm4Mtra1HcvG9DysPyZqG9URSvQ1cb2mG3jWVZG843bsmg67zCnuUQMXotygHVYfUAAbbn2JKRfwk9r9zPJFU",
  "key41": "5xLdGhrbAqQgw2ZA597js16E2JbhW75mcV8LZjg7Cc29qVKMwrM88pKciTvQ5ZhxiF45sJgFP7WEWTcWVcntviDB",
  "key42": "53ZsfkA4VMWCxdVr14u1du7wTvoH1MtSid4Z42e8NnsHHnWhA3pPnQn8XTWuujFjcYxnP5rpu1uAbYQceC7sxvtZ",
  "key43": "LdLd5V6SwdznPKtdpphcTYVTd5KWutnM3Ka8egrWPW6xSuC6Gd7hh1dezuqFXapbpdBuLyMVEMM4SKBYii3R5Wo",
  "key44": "5F5xTxg3Azmxg6CVFqHqn7xxHEmX6SAyXPRhvWmhtSwprkAps9Dnp7DDz3nqjrHkBr2LgRaomNrTN9GjwMMPKZwV",
  "key45": "46bDaRqJCH2LMCPpQMw1kqovYhsjFHcBTC5PUGjcD29GWy258XVrTrF1KK5rNP8xDPV4fRERjXHmYiMPoNKgw1C5",
  "key46": "qcL2haDjL9M42PnX21pxmZGyi1t5SfN2y5vMZQrc2erEoWXpxtKhU7T76QyyvVjAuExUM5pj4SU7CLFFvxxVEud",
  "key47": "3k2L8sJh8G86e6fzr4V3CtiHKoxc9nrFmn2wCy1x1BiuCCgY3HgkamFPZxe1rUKvD8kch7hFQcsmqFkekBdseU8S"
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
