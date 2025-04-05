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
    "2KSKWCNUKQQkPBri3Wi4P9KeTr3pXgzMrd8Ex9XE6HmYA6mgsVKZimaUdJyKXdtzUPasbyJGoNLXCAPKdspbA8tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n718St7u6o2RrUVAVqP5R1F3fSLdRSs3XsLQydGhyX9rbjWBHgRUGjihmiDZ4RCCA5qrUdmyub5SEvtk67q3c2N",
  "key1": "4YSHTtCZ7uyqgL8E2aCmByqHP97V92Pc4fDSP8vfXhWbexQhfdHxsRGqgt63PaRSR821ec174QkpjQtVA6rFccS8",
  "key2": "2ryTCs9kUY94nzjvURJCu1FuXBrhyT1MGrndsxwXBjidewZ75UNimgCP8jM8WbttBnLxWbaAdiYoPMiSywjyxhXm",
  "key3": "5vsTesbTiV94kspAkdUCRHEcpvxFGnv2pwC1R2MX1PWdoqaxyNEc1CNWPsT8SHpPEX5M8oWvRCvPMH3rNLorYj5v",
  "key4": "tNPWmz3XgNCvR2DSbr7VmNv6cWKzDfQ35mygNW3a19t1wBmtHrHudSzS2VRQ1LtiZYSSESBRQv1QMXuWHtBkqqu",
  "key5": "4EMP6n7kuucNGWVEWZ7ZUE2rvevGDkRXDkHYVq8nrBCiGUETPRCyJSztcQkyQZCKBn8c3LgrAVSN3jMGgKDNvt8z",
  "key6": "4gPEDCgyo88X4EJp589A3LHNWiFiUQBe1UK3agMzdxtdWQb7eYSbE2BBJrGaRLtJbBWy3ApxM5CsARdsUDPiCKZQ",
  "key7": "3o9CrjpiBRzUooBP5Aa9oVL1Eoa6CYNZajSnnFurWdhWTrPQD2fkaFcoPXQUfqw7PpJgGYmiAeaR6mi9JhK71CqW",
  "key8": "5xH9B1VSuvbuufFiLCqDXP7XP1GjYP3mM8h1TETYwctgjrvhqH7dsHco1rkKL3zx1HEn3cYYsNKUKfi9QaQDvMPw",
  "key9": "UKv9bAMQf3kKicZXKQMyYk8URd6bT5oD2N3y8MYyYWMwTNWWX6JsZHgtL8uC2HBGFxbv7jcoz7HCc1Nz4yHXpUh",
  "key10": "4jbPJXtgM9ubFJtKye7PWwVu3kDWZWu248gEEYjZLG14J948PEyGtrJ47TWRt8YAigA5fgKvpriGSEn5Zv44jVnn",
  "key11": "5AQLCVdARpxU6VC3k7n9TSd7bF9sJRBfhZoyudbuXfiFS8gnTPP2ZEibKscZnM2mZdUbmRZDkLWN4GswLATGt1Ts",
  "key12": "38cQYiRvfYicSmXKEQoqBEi1dfRQ5S1wTuYbn68sSXTZy9ksYdFmRKyxjtsx2CkTZg4cgyZWDzMAMyt69CE2Gek6",
  "key13": "4LpNfbsN1TBQ6JNo19JkTxpxfG7biLKnLF2RWbqMzDCuuaXkjXvNvBqB24DdCqYvY9F6aJEXxgNWfKvdc2d1zN7e",
  "key14": "5iLJVxsD2yspqB4fBeQz9qMAhXtnyCrJvAgiciGuerMgegy72QgRSoEV5ZCd8SgVKDTLKMy1Z8uq6PMDgixTFE2n",
  "key15": "4RomoaTRzWPTR4S7vz6FSGJfTrhDSVkEdKtfyeQbqJ7KwvGg6cqEP5fimPzar7WbybTu9xNTtQEuV2biCf5if2j3",
  "key16": "5v8Ue1rNWHijLfP8M9u9Jp1WVKCzks19SgDTsXC8d9oCaYmRRtpEJ946YopGTa9WFtEmomfunNCghhPQZDsR5dzL",
  "key17": "2RkqgeaqWiSh4m88S71NQj4RtcxFD7dSbNPshmMBvmriUvUfc515tyj8px1nduEvVc9Pw3rEAkh8MEydSRtsFa1Q",
  "key18": "2f86rAFhhYHnHvopxsWD2gxehnc1LAsYTiHZi9fFpJZfhhsxM4SkyZTf2N3JkvM51jLt9xvDgg3xCESmca4XYBCn",
  "key19": "rZmBtwEnqpA9icKYLy4ExqJjJWwtHcQN27L6sq68s4bWjWu1tVL9ktACWA8C1ZeTwjD8BuSSb55RBH1Lvh8Bvfs",
  "key20": "5WES9rKE4Ncb6jE4pHbmwySwh8gNik3xDezfzVaS3VFx9j6hPT4CYBx6EdzW42TnhokUc7hKrjiN8vJK7UCE8je9",
  "key21": "2QhiMEGWZtx7ahTKegRXMbTuXLNPQ3RTN43eJCz1UF5wmLDad8Jt1XV9nK6cq7r4hrmhFMSox5LGTgZXuBRrUr1W",
  "key22": "XMsXrg9d7LeAa7S4eHAcTGAEBcYdU3X9sgXRQKMCT451qH5UzkCHFaySFDhPCszet2cAQbiUEiCXp4EZb1gSiVX",
  "key23": "5rkCqx5W74q3mWW7Y4487vcQjsFmepXFdKN7Gzqzd4EXHEt2MaaR77v58XsixrVEnWoepUoyS3AHAf2Z98MxkxAq",
  "key24": "4CEin5QRYwj2Zb43binzS5uJineLABJaNhZm4Bvc46bA51zesU2KhPTuRDfmYrpU37yLxqVfrA3mbPAWiiuwNKDD",
  "key25": "5NKjsLTTTeqnkUn2dAkVbe2LVh5o7JjMA3gVxDqmMQ9h9oKvyQPZNMxLbvwXdUrgg34DeXEYhVDg8BVXpTA2Kum6",
  "key26": "hjcVShwiWbMvuwvJPctEmc9quDNP4nychcWwWCUQLyHrraxM4ZsGDiFcSG9AgMi6A5KZWymppbqhBKrUXS884hh",
  "key27": "66gQjVL7JqZr1U149v1aBMxYxL79nwe26YpezqEMHD9Nrynv114yxePCvQfTDJykemgz8Uv2oNksdgUgCxGLgTMd",
  "key28": "35JUNh9bQxKk38fxJENweHYUedDyMUGfouCe5EmW64pytVsqMtjSU7sbNuYZAwzZLExHjosbTdKR7ATQGVPdMVgx",
  "key29": "3bf9x5T2jthN1XDPyH41hoqqZCDNSipjWPbzkeyrBSypYx4xCMGTVySakgByrKG3g1YxoK9caUf5jaspTLzELwoL",
  "key30": "o7N2u1EKLCiPtv4C58dmJ9dFsFQApZvab9tGGffzwBX6kUWA5x45GaJ6Lma4SYP7rKZiECX33TDo9uYSMRx8fwG",
  "key31": "4HfFHGtgfuCGtJcHd9XVVfMjXbj2orqSxwHYJynKn8utoKgndxX7pg4LjK8iQxZ4zTE3bw8TAwAgfTfib2NnkxSf",
  "key32": "eeMgpg5sojQ4EGsqvgejaEucz39BLBcsBomHqfKcWxiJ7kaunXuG64z9CLRRQ1gVAQb8jvmK1cSHUD4oLbjZvqV",
  "key33": "58LFfiLXxti4NCy9PSPpg6odprndcqXooRpEUQav6SYrKTUBade3ZdtLND4FbrVwHCEGQEN3T9pXp5k64E4XN6Sh",
  "key34": "4zxNucDNNNvvEHFAdPoZwkCuX3qUz79yuAriXvmYn7W5fna2t1YXxvrzAAfmjTbm22Tm5BdpC6YYVGsfB29LKune",
  "key35": "4vsXRUe4LGdYBHM5jrnfPtTHB5JGSyKXMdszZDedaa8jWrSgRKkejZTbLtMwvMXypynqUgLFNuYfuqeirSBubTa9",
  "key36": "3pzwf7REZdYha3HTBi8CDv7arcbGLwatS2ohAsNkY8Qd3BgxCZPPXYg7x2S3kAnhiSSqhCbWvdMuoZAvCDhhGXkP",
  "key37": "3ekZFMGc17CovJKLFegLUCzuPewTtW4unJuJnQs1pXPPqvZBpJqTb9bymoLhxxiShhV2MGqxgTddLJVwacRMf4sX",
  "key38": "2Mu24iTa4CP1sxTgrtcBt8LRyQktTyVUEMUL6u57yfnG258dUApxRZsdenNDJcnQR2bjwxHi7qZjgwQT3rjA3JmP",
  "key39": "2ym7F56Kb7rCVcZCvj5Eu174R1nTRLxHTJb6cJmD3ZeXQ2vwbZ5beGr3VaNf84s78TWsBTF7E1cmkzmJKE36ydmm",
  "key40": "64VJ6r5t8D7RKQWj5b4pLFaFyAFbPokQMC5tsNbxCzrcWw5ksWaWXQsmDV53tHnVBtTuGhwEfGWkBDA3ft3jXJJf",
  "key41": "4dWHMLMFY9XtYt1FsVyrXgZbDXcAa4SxikFfHNRvwZXxrDb2rhhTg6z73hEZ2eSZ6dRG8qakAbyUyqEoyDjSi3kY",
  "key42": "4ji97gpSz4yui5k7QojJ4iA9Y9taWTk8ETwCBrBTWCiVpTm8NQ1KJXFRojmWtPB6dBUNNxt2RhK7BNrLEQ3EJ99f"
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
