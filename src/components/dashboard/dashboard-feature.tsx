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
    "2nJgbiFHwXeBFMUSYqv2ziHApdCCRrVfVrJf9HDDEgL6jh1eydEnAPNJVPE1n6woYuEi7PdhhYka68SLVA6DsMK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLb5yUjsehWvvK4jxNcMcuJf7bGTLJdYkRLsc4zGK3XpxhkXUa1YzYPWtDCX7t9J2uJLTzMws5ShFvYv8QiBFC7",
  "key1": "3fzCTk3UjPs4L8P3Qz52C9RYEsc4hpti7kW8PBh5khq6xJ26MSx5VRCMZQfcPi92zhwQWK44fBGq3A2dhTdJeE5G",
  "key2": "3AFp1ytXtac8muNGUzEtMxFYxcDnc19T2Rmki5TuSVajtoRaEy8Y2QY2kC2SRFjrJ5qcFxXezhtGiSAGys8TsgLr",
  "key3": "2XWpzgKpcGZ5Qxkis4dQY25EcKNu7mfPiyDWnvhJ42Nd5UX5jWZyqyXdiZeUFoz19Moz3eWTAsgxAAPwAUL1Pa2K",
  "key4": "5hxphds8cHLn4qH73MhsiugJjPgqBhG143jos9CcYMxjKCCmZ1KiV5BzzjUsQqmxRt72dVh6U3wXuvLzi6CqUYpk",
  "key5": "2dfejD2pxyv37tuS6zeREgCXaqQnPd1wF75hsA2HJMyPrv99ds6riczf2hLCGaNhj5nqm66d2STUeWWcV5tDS9B5",
  "key6": "4efnmbUc2Cxcc91KmP2ynifAWs5H5dQVs2SHWbfNsFTrAbgfsfh1vHkqapWxGzRrrTjjLYf5ztpPXjRrewD92m62",
  "key7": "5SE5zuMRH6dx9Y6Ank6Dq6ja23U9425oLN68R8Uo44eFCpbzhQnutct5pmjbmJFXBGFGY7SdWvgthw1erx4hP5uT",
  "key8": "5z1hZpiGpGiUhRc9NpUKcPsFhXrxQnSNYo9sRAsTkRrifua3DLU3osxSVuLXivxUNLVpCVpcPC5PHknyr52RVDCm",
  "key9": "4b43prACmxqpLuTfVYAQDXFR2RWwqdKAx5BHgiXYQPoBVmo61Wa8QxABH628NL46jA4DV8gM3a1pCnNSGLymxN88",
  "key10": "5LWH2QoBW8Pea3XZiHfyM9QsXxPBeaZ21mByRLTYBfzbVU4ZfFbdkRv87zbkgR5tnJ1FeZMTueDC1RLN3p8hT9rz",
  "key11": "3T9fPvAYDXyuN4ui8AC2k6CW9fUvDtbPMASoy3MNo2L9hAmzhTusMuJDuXfdbqaCgAa4CgaFJmY5rPFQ4mFgD9gi",
  "key12": "3RHc1Jw6nNTErK81fhdZYprfU1XnvAuDhoX5C1Xs6KjRuGuBTcvjA3jbFNbJjtJg34TpyKwNLer878Eza6H6dzYy",
  "key13": "RWcGeVHQwpGRtP9YX9FuaWd9hc74PFpHa5pJuVizfVokAxZL4m6HxR79myBku1euhhSwomoaVyDQ2fTpZiU8FDB",
  "key14": "4XR5bvUVnM6TbNYGNErYKCDo8wg3BLywxJ2BjatGn6Zaq4PcWTHyoMzepgHz34hjyQ4AP2DPHX2tMwphTQ2wWisC",
  "key15": "5KBsdHmbirtGCizFTxDxsufwvDoPC7C4e6PH4znyETGuMYVXvoWUUaMbxiXAt3HpGHBVkYJ77nFrTqB8su58KjWW",
  "key16": "4SBQYU493Nghom6ANghGBp239r4yq27j5TZ9p7VfCwvRvBP7T9EP17JYtg5EDY2Hc81mPcVZTUaLH9WCgw8egDxH",
  "key17": "5pzpNh41zy8FpxggPB8h8o2BASAy97MNs7DtviNZdMZP8i9eZtKBQbrEhPT43KMx47qZyt54m3SyJsYYuU82Chr5",
  "key18": "5hiE6EncvwT4HwdZebzrYpTd3Adr9RSMED2P3FTA3c5KF257itt1Xs1v4DDJSEVrWNT8vXdRCtzykk5XfNX4G7G6",
  "key19": "4NZ287xtJrgpaZ2xgrK14yoHmm75NsAdAyZ2nNUGSCK9gzzQ2PDqma1kYF4stk4QnLtnYTZBJwHaATJgFNh8HgyM",
  "key20": "5zcTfcnw7JwhCAAzo4PXDiTPwdgPpviYVABDUD9BLC33T4ZViKo9SXrXhtSWrvbGcbian4s841fR2tv17wcgmLyD",
  "key21": "4W4rqaSr42tXAnLEqqYx1VrYjsZzebujbdjhMjD5sg8HwKKxiXqeMYSwJz7Y6SvZy9jBPmyaoLST9hd5XVsR3QeC",
  "key22": "2xyM1q4Hob9kR7sGdCEWgWsCfvwFJiPWMJpiAbKa4Vt7B74kn6uNkpzCLnp3MsuFB5NKCXgnUbnejwapaYVRT2kq",
  "key23": "4Eoyhr84Ag9LXC82tgEe94KG6EMUpYUsnM3PT4AyaRwbpVH2fcqpiiiPydCSP1myvyZdNLHA3LV4YseJdfgEsuDq",
  "key24": "Avsr5igCsnHFWfjLw5Z1uVB2UyuR9g174Pn7rT4nNAs781CiYSjdAiPhThYWGAGZ5D5mdkK3pcRdMbuiM9GsTP7",
  "key25": "5P4pZh9cLeed2yTYzRaUFDEpeucGsMXSL4zDd352DDUBMtp5GsFr9PYCrSU3XEpxs3T4nCvAnzo5L7f1Z1tXzF7K",
  "key26": "4J6CW5HB23jFRMuqUFAk7T8oxnPHsi2uSGwgiWamqLB6vTZmSUPx4WEAFDU2Y8rK2M5vWQb9xKckhncG6SG3gZss",
  "key27": "4tNwSVu5AMRn1FzMyc6Pt1MtTJB99MQ5e5Fahx7Jx148RL9Uzdpz14rS4tewqbG2cLZQSjtNJs1GHPz27fnthoBr",
  "key28": "3cS8j5sZDGRQ7B4neYLtPTcN35QJPXUERVhFpAzvXniWaLUXJjdhnQ33CJe8EhXdiNSboT7L1vtaUYtLZhn3Lpxu",
  "key29": "5siLzs7TA1EbhEW7veVfkvwkRK8HdxEQ3tRjTcqj2H6dR837KiNSfakb3sYVwZRZpAX3QD8ZR39qjzY4fp1o5TNH",
  "key30": "HxHGTPXxTvWP1ooNpzDGXoQG6n7KuFiGfcvnAeKQhD1VAVmJ6K5MHQvtAazDFARCbNoEx5VMKZGbsbcaGL8oHnw",
  "key31": "2ZzKwdD9QARw3kzrqUgDoQ5GHiiUsNaa7Bvb8ibvWRH57x9RWyKA8NJTtH1DM7oKKwRMw6ECgYhcWXPGps6z67LN",
  "key32": "WUgQ3JCk3AhT8oawfEzPQynCcKDn9fjJuF3Qi7Be1kZUhFuUuB1MQhseVSQWZwz3mGWPPhfn73bDPwyLHYjmtmy",
  "key33": "5KsTFkY6y98psKUuQG4AUNRE6BkNjTtaCG1SUPCcAGmoY9p1LMZXqAN6tVXJiknzq85eC6qr9uRuqizHM96uv5oK",
  "key34": "5WnH6S1hjAMkAQJ3RzDrf1QT7kh1TLr41gLLudouTF15pYp9zevA36gKaHbj6mLGMcrrAXfj8hBVRsMDBGtR1JHS",
  "key35": "5GRBcEVpf6ewmBk1DxMTysCx32aP9WGrfiZ41C8u9ZJuKQsACGS44rZMVD7NnAjnjx7dG7FACoyaDCi46KQq5m8b",
  "key36": "3gHChfZcYzBb2vkBjZnMoPYX7A3RNzo3A6G6PiKPf2y2BHBp57LvJCTPCCjmRf1R4veambo1jy2hweSYTR8qQPFn",
  "key37": "3NEK3wKAPGT19kzCfSizGZwtnU2TmW62SLgdw2onEyFA9CeD5dtet1kKAGsnLFcVvSvQW7nvpHW1DHw1LksdQXua",
  "key38": "3ofTW3Hz29zGctCzTHAfjS49g2uboUML5R6d6N9kLXJgJgCD3AUvepzhjSWAetv2vFghYkMcFzbM7qFTX1nWLVqR",
  "key39": "AsvXN1JHiuMijdgUSFxgemYh2WBG3LeLcFiZXjRtSVpBQA7YQMLYuxmUhXx5SGCEp7DD1rcymoHjt2o7oUCXEtf",
  "key40": "U1e6aCtPoqGvmyViwzUWvA48f2MGQh9CvLTkzFGN4ZQcqaVda53XQuHEGnbz1FFDbZ2Fv4k9oYFegzYD9PkYehL",
  "key41": "65Q8mV9sMwevgWD5JKKE7YXjicaM7bybWvZnWf5ykBoZbMdTNfZnrGaS1MHkAJ3vefpHR4FtVmZwWoq4nTTRYC4W",
  "key42": "2Ue5ZSJSfLbgqhkuTcxAdNQSNiL1RkZnGq6uWmJoerekXpce9BmXQKn19FQWHyRjj68XSA95YKcnrepi3DcJkeGe",
  "key43": "2arxWp6sv2h1f2sYtXByrZ4PJtsTTBQx1iN1yjLYL4huuyuteknffVEZvNWvWbbfekcgY96iWJNG5F9Kwg21kxM4",
  "key44": "5v9Wk4oTVreWcguXs2WTsvGZEX6m9AQ75zuhwq3pRkKaukDjptvovEFwv1ydRh4LGXsU5AJH17nehVMvqv1UL69F"
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
