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
    "3Z2hY5WmHGAL1GoQrvf9uigMwZr8bYavsQ8wTLDMcWYY4rZh2sRoPFgCTv9xVea5ma9HhvTtjrRj7LWTNXerjC4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uqv9Vg5bd3u3fR3apnAZAKRYjchpQuUCZiN6313RqByAeBn5cxsWoABfJ86852hHBvj6KPGmcSo8nAPU25vzbjg",
  "key1": "3HAzeCc2c3EaHwwrzCWGJ8bDbjfXDUu3ayYUaMAmknetrJn55PxKefamUnwcrAKEsHFRYba9cddStfj7PBig6iRv",
  "key2": "47y3Thu9xyepTDmAxogZzkuDSCXVvQQX8XSXLbLJhea8bcTFmVM6FN8B6DEB96H8FrceLdDZ4vsGhuFoAMaGsM9g",
  "key3": "55vuYDgsRgX4rWmeEHLwAkfhMSbLnmUS2Jn1HuVSQCknEbfwRxaaNgZNhwP2EFQGpLgZHrNYPQhFeXggHeaWdSY3",
  "key4": "2z986AZPsk1Bwr8kEghUHL5aDBNXeC9jv9ekUBeB9CtP9iuQU3KvMrBTA6jPtbRfxsDoZy85QgKFnoEfDvZ8HiFF",
  "key5": "2foKjrifCe1RhpzY4gCvjBn6RoABeVCrdrAabUtkZ5Lz74tKVaadzRxPz6DqdEwPhrtxJmTCxQsrEECBMDh7FZA5",
  "key6": "5Qv54CwnjAR4pu6RGubuxTMqBggbKuL9ev4CCJYgDUkk1XZrqbChKgJRTa1ssefaVRHU65z1BStpakvzYzBU4wRe",
  "key7": "3xKJws7XfnyDkou5BSMh8wJ3VYmhQuBt8jTeDJNZWkk4AL2t1NaERwv1ouC4KBGRP2aSGtVDnX3hfm2eEdj846pz",
  "key8": "64dRqU2cBrcwZohwWynrCRmXk8TwHmLqMC6VEwuJCewqA2xebb3rnLSUFigjPnLaYcjgdf7yqKocs7fYKDx3WsFu",
  "key9": "4aJ2LgUU2vnkX1Czu6mQneYCz51ScCyVGkFBV9TEuSRwRyQfjpx2PJpUUS4Huqodvj2T1WMTHxG6bBY6nWVEikP9",
  "key10": "5p2ufVRxJpQuq1kJS5ZpAQuhKZRjyAxn4To4ewFHTjqiYaJyu2SXdaKXHaxTZzabxzC7vBmEaQWVAWoLVwyacrka",
  "key11": "663FBvpXsRfu9SFudvyVAG1FiL7wC1p4kTK19krMGu6t6kLVKPfxztnTVkVDAZRF1MkBUdw33QLafovoBicZAS5r",
  "key12": "2EVPyuXZTNPHMdckdfD8kJMhCtkuKES8EZ7BWC7Hyw1zp53p9PDm8zsorH2SUDTBRYqG1yBvq2x59bod2X9bjMDz",
  "key13": "2nbgDxGeFE5kBj6HdAJrUDFPExU2WBRATENzutZjKzLAJAQ3MoQftNAxerkUfhZprRr7HfnPniRb2mQfkr362bYK",
  "key14": "23xcX4Wd7nx4oxW9P11qtH72EXpmuy6KroECAH6rq74e83PP2Jvrpm1nyfQsnYsG4D3c5vxJRYUdrzGP4A1K9VP9",
  "key15": "2Vgio4SStp3nXwjmsy3syjuj8NLpK85oFrbSMTozBKzcWUwHLUF6z9roXETpgThQE4MchruF52MsufYjmchtVr4e",
  "key16": "3iGc5CgwDGHtM2nJ8X9d6QUTKmQHxH24ZMqnMjupWLnVAtqEkio6BbqwrTnW7PmVUYJUBv4kPdSNWxYGTs1Wp2GM",
  "key17": "32VNer23AdWDCfjZcxyFgyXQupdFBTNwnfTYBEEEqM7B2m5PZEV5ebUp8iFXzrkbjHeS1H94sFFV5vDGEFh9DypU",
  "key18": "ienoh6BpjRe9B914tvgTwJow8HaEgnwFVgPUPvUqLn7AeN29KopWgMCbn6FTioUp6GZck4tahodXqme9haVpqpr",
  "key19": "4JjXNZMrFKEzJHZRK49u4uzveubkYtvftjC9HJkY3WngcveaddDVJVvmm3SAGHvFUGcE1bNVbQzK3M4WbNtBpmq2",
  "key20": "41wqnwPRMzGW9QourDyn49bCu8QK2EU1mF94XSGtf4fysWYgkKWU792ZVZ7RXHdCENqGudUUEB1XtDawrKqHgix8",
  "key21": "2L1VRiV5d9wMECrxKegb3n8N4J3sBbACKDBqoJjYn36BAxdWoUsBJqX3z2Zmw79PxdY4zQVGP4Mi5fdMrfjFscCV",
  "key22": "mQt4UH7nqDNhP6pjJXAnbWM4Ev58Y4EALBvokWRY2DLdB2APopU5kUyRrQcyvXWf6ax3MAxNELznXzShFZpBL2w",
  "key23": "2qJ6WFBr5j6JFubz1MfBuWKyoXkfhuScibZW1U7e6DMVQnBdV4Mtodx2SN1zvxaLVLniGTwMthLad7QfvMtVtCZU",
  "key24": "2qzCt9WiVft8VBW2bU1pH5CGRyHJ7wpxxmgbpfumoyyBbtKNkpE5D6ckbEugmZgvLQaEp8Y6iYdqwhUeF9rkGPtK",
  "key25": "2qGV4t8zyhc6kT1KbStKiQmvDjrnVM1kusRJejhkcyeemFRRcQ6C3zco3vqm19FnqF6mmdjwLk2adsRNzTz4viHJ",
  "key26": "2PsfGNQrxfPPkc1gE11kCYhYrZSt8p4AinFztCUBQ56GwcBaPW9YjqtEcku9tGHMHQqNA5ydAFDybGgrkgJZW2TG",
  "key27": "2j2azD5QZyz611oyu1hYN1pZ5by1ctaMh6DVvbNUV6SG6QBGKMyPCqKjo3RgT7JHfL8ScRfsCJENkiRmy819reZM",
  "key28": "2AMhXeN7o26MENuKu3ZchXabJtH142xqM91DLxoVLuEZMaPXpjo7DfU1sFS46FTZg99mq7DXWZZXBsANyavpXLyg",
  "key29": "3K9o31Ppu8dd3XCnyaiAjeb9Q5bkuKqT25QvZgUdBEMgnTRRfvKWdZijpWhjXR1eMuNUs7Y7umCxEUYWPYV83j6d",
  "key30": "5uuWQEQivcUowafGXWozq8LBbtxsqnb34UsUmDENrETZpf1te7BDSFJ4qAkDCEVWeUsrWab25Ax7sqjwBW925W5V",
  "key31": "5jKpP8ar7zAtz2ypU9nytmQGtthHYDKc7gSbeqDPitgSAnRPDM8E5vi1r7knsmvjaMwa6PTyUGU59H8LmYcYBNVn",
  "key32": "ipKUUeEv7j3BmjEdyFXqQSusR95QzdeYozMA64U8DVY82xaB4FbZLk1Ps8WFAFL18VKEzV4GGkEHj8qUQEst9YE",
  "key33": "4aXd5shu8ZNJPm95EGCzhUgnjCXipoTSDf58BffJSjhMeCMkHvfqFWTQesxArwHjKw4w9QNNfvfJE7rxFBrEPm1W",
  "key34": "4jpg9wkYpA4QGWJHH4DtTVJHURXiRZxtMcPL8e7GdXsv4jnBkTJrQjYY64FZfh5BRac3Z5kRTeVS2DQMM9mgTnwM",
  "key35": "5gebuuVmNJW2XE8PniYk48PFx8aDgwobPgWoqu3827nXxroYCyKhFLyJotK8bpnePfrWxjsyTQStb9iugTAsjcDa",
  "key36": "bC2rxUpohZm46ZhLnuNVyKRA5rg3uUvkhwbLpbMgEeWGw4ucbWXRGLCYJsmWE11PMWDJdRTyePnyFa6dV7pKRMV",
  "key37": "5fJ256CmywiaCHp2djJLkChPD8KmRwfhNBHdtmxePm67QZDEbpNtnnPTz3fcizFqQwtLdc9P3yXCPgBuZ41zibeH",
  "key38": "4tAnnDiYAMRnqrhk8rUxDFw66aznKpt51yJjm56WmaPfTkRqyLXTfK1GcBrUJjdeT5bvVJ4FDzpoQKr1q57LKT6R",
  "key39": "5xxX7r9tS7975s3zC6Efdz3Qi9MSF5G6jaMgCJJ8zTT7hDSbsun86i1m72XyhgRAT2CMyGmbCbJL6bf8PAkChpTN",
  "key40": "i88Yzy13guWnvuXZ7f3vvLyGXTYdeyKpR4dG5Q4TDpu4onz9C8bx4p5DP6j6vSTRnYb35hgZ3oiaqa2MjGVkfEX",
  "key41": "5fRCA5zaPpHWAr1mxNayaBf99gsxVe5b83EZdY8o961vzJozEhSewcNekPoW1sgLGudpW688r9k6gP5Gf8MiXbEr",
  "key42": "VpGWxDURpRK1KPUqGhKeAcsHozRTxyGvp3gr5Zyhhas9MJi1SJTukffAb4kEbRhoyajEMcrTWHiHKLX8c4Wzmjj",
  "key43": "4nE8bMK4JVuhk424SFcHJFr7HQRAkLc6qRbsFaDf5bySxiWfMshz1wa6FsSnSRJ7PEWqXsvaErhSjFoirXNWhf1d",
  "key44": "4saCV8Mj8f1EC1QKf1rPWPi4MhcBvdWfnJZykq4JoFrwcMYrTYYs1k72QSJzVdkhFKTez3xuPezG3b5eUHDV6LMv",
  "key45": "h43uev7L9PTJcwkyDjK3gjDYK2FDBqCACzK1DcVRJ5f1x5jnCa2DDNQ1TyX1yQvMD8naArgqj4sRTbEj64RFMAs"
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
