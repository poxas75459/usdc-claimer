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
    "2WKRFVD2yHGrkEScY4ZYDxmSAaK5M4N5QmM6FFWrbP3QubKSWCPUUz34KtS2XahgDmWuLa2obZsCddCMNdCAMgeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8rXC7DDXzQUq5K4RDtiV7b1KkBSNAEB9zjFRfciLvtQQP5ZCBcYrFPaTeWSv4vsZz6wTowSDvvS34n2BtxhNPA6",
  "key1": "2wxYkg3ivGft5bjVG3zsy1MZQkhqJPcbBptDNnN7obBNZuy4dN5rKaSV7gdJh99XYYPEwTCxHXUna3RfcJswHJwz",
  "key2": "3M2jVy8yxP3miCfuDHqDzSv8r5ArbYknc4cbsaTSUBMfRX7gm6evGyCRpSyjmcCySNQoi39Bp5Cy1S1NKMfna34e",
  "key3": "qADLJJ7CnX9MeN9sJ1HSyN15LnpPTWLbXE3ciMw5icwzNzbFXwX1SxrcERhyXCdMRkJQdeWKKyqiReeremLcB9h",
  "key4": "XGS6b5UTUCMR6SpJ3ykuuh3sFaBG76GCpvJyUiG1UzHrn2No6ChU3qbkK9dXHKjNMJEh1nhtawcfNfpc1E16k5s",
  "key5": "2Wd3nmL57aFG5DVGs6xVuJvNpkALHSXb6ZeqxyK9PDzr6ZKBajxwimtQudnGnJrfZ1rEs5Fevef5kiC8hptKC1wu",
  "key6": "2Wy17dBScPh49XFotVyq5pkFosaUjFNuqHcsGLE3epiNKDiEft93uf7NQ6GP5w8DqcAfj87Txz4GHkaxJ4eeJoRC",
  "key7": "67SxSDaH2SeFXos1zAJemSDsybzPufE22z3vUzHsS7aG6Q6Vwdn6g9VpgRL2SYNSyLZdkbRpcoYYvzRArGGaUD52",
  "key8": "41sNGoJTriemhW9nrd9bVDk8Gis6G4dZwkp31SCavuxwtDU5Cmi6Qg18Va3ZAAz1AQqxfF4gr3ycTVFTATKK8Mgm",
  "key9": "27rMcjawN5MpF3iG9gN11iQEu7PmyRLL6Rb2gTYmPKu7SM4SSvBEJvqL5Zsni9S8AsxbPmNgMCUSNMfRnFoVr5ct",
  "key10": "26ge5mZP7jynBZGG2zPGHUvSXZ4LmncYoiYa7K3xswxvrPmzmmG7hPyNXYHoFKcbPDCZqzdxqWXQFXhGrvzu3KXz",
  "key11": "4jitxgXaBhPoHzKZBAGZt7AM9mHfT6uVBv3C6W3XcaJohS7mdzLtvYV45DXNx7dJX4q42WhmFu9ZFTUM5gSs11kM",
  "key12": "xvDLfPm8AiaRSoYYtrUkGGFr8Azk1z9jG43TYNSaY2pwB5pWszNpMEvEZtPdZMbSd5tnFVdQyGQ4jj87tZukopo",
  "key13": "5bF2ofjvuLShb6STqWR1oaWDFW6h4ZrEnoNaAsDpHWj4prwYnQ2LvnMC3j1n7t8aFHZm71DwCKFfHP3FYapS1tHG",
  "key14": "5pk96YnGVXkhwz8SRnZYaa85heisBckc8G3hiwYi18k6nUeRFY8NoreSVtgjDsDtrLRs4hD3Mrxsx7V9X4bCuYWV",
  "key15": "2uzc9bpazqwqLWujm7kRJyotjg9f56voEUe5wTAcBBqV6KuUfzuesiWWqnq7qi2JoxovX2bdjRbsmJVfabWbZn9F",
  "key16": "3khvwPRJ1tbzUyHra9kjxM9VogmGdKSgFGyjqJhLfWYsiNzj8i5gWTMPWwijyzZVvyrY4f5neQUCdtFEZj6YDKy3",
  "key17": "61FHiWwKJ8gq12DR2w8d8HLyKwH5WkjkXrJ9NanDBwzfbnmbCsRwXt726YSDxqLDMoSayvQnhzNLY5ePMHMiLABo",
  "key18": "4Gwke6UnixmiVjJZtrWYUKAQWn8ub8JpBSLwS9gN9iaryXbqg9HkpLq7z47q5xMWppJcfuSe1xfVaEx62QTMvpfB",
  "key19": "5LSK94yd3fERMQJ3uj5mpGS4P5597ipejVeT8c4xiqwbjykAcFEfQECBDY3pZLqqipVizhLZhRpij8MAVyFy3J9E",
  "key20": "3mN11YgPEUdArrWVk9tsYfpx5qZSV5EHpbuVZkBM29j4EdhGSUPmC3qeUqfE1s6qxZ1j1HXs9ibd1nm69acFawkT",
  "key21": "G4cscsqV9R8GY5qGGnXnr396KbCVLPq8NjnhgFrsukdUfY3tPkdATHce75fY48wpmXQGYQ3Mvrse84QLUauWRjY",
  "key22": "32n9ApnUMRAKjnufxxFUcEkaC1GtfC2gDLWanxbWFTBnpCynaHHpWZpagreA22fgMGHvLwRAkeyuFm9B4dKJm7oh",
  "key23": "5LdjHNvKUtY2BnXvHmp4kY3CqH2knRz4f9QHpirs2vDK1Zc5TQCQWdhgqnYMk7qjynJDG1CXJGSuBwUhEafMC1VU",
  "key24": "5wb8bJotSEMhK5Qn5Fv5aq8FiTCuWzPwwbX8jvb9DdpcVz7rJmAuBCy9dU5iAcGY2E5VxefJ31fZUH2zJSLnVM67",
  "key25": "5vtDzByAwP6VuiAEoBM2fb3wmK1uiP6WWkhQM1ugNaSKeGjeYoZ6YiWWe1Czwx4pUxUfMHY7h1UUzV21DeioKAgr",
  "key26": "3CZfQgnupMeGYtYtzVsu9CytsUGUzsDJH5s7b2gxUhgVppRXCkWxMAUCqDcJyMyaQP6PKiU5VFTjsKDQhLqVhb6L",
  "key27": "sRwC5XHVwDQ7fBf8cvWyPZav3MxFNwURn2xzqxZoJePkcA85iGyQ9exVNVnMQbmPY6nM35W7YTiVgFPubNyQFyP",
  "key28": "WStLaPBeAYGCtX5phgNV9KucLBcRQB25tjZz4rtrpoXGD1b2K2nRs8HDYYxreZkq84YVi5M52AqevAdQ9BtzJ97",
  "key29": "cJor9ESZyoC8KTYLJx8L3ZAQDc7tmyj2g99Z2DgczzPtPn1FVRpzNGBZm5LmCELsKifyS4dKhT2vGmoz77V3srP",
  "key30": "4Zkau2BUdKDbezbasKYkNFyRs8LgUbrs9YZmny17JFeSEqMHB2DjqXseYemubcQjdaygkEVQRJpbecEeP1KffSwV",
  "key31": "49hrJBzvmGnmqToKw5Xivv421xyfksbnDsKoUPVuEw9wLBvaSR3LmkHZxRCgbZUajb2vWdcC1CiWJGhm7QF1C9r3",
  "key32": "3QA4CLmhn1rSJYeaSb4vdVYa2KprjNdL71DaXZ1LLpZTt7WnfVnFwHQ12AFoFqjTyzdkDCXocTMuXTFJocziiJtf",
  "key33": "4Z3jdLDEwaBRtcroCG1XBZoyStmG8A36ZTa7tyu1MLpBDj46nyPEYfwsHT74LrLzVeFvacMoSeTdodTbs4hgM2bn",
  "key34": "3sW3rHo5qobhGYTvPgWYC8i4PV8yFf1LPVnwzFxZZpXPAhjd2ste7m7Y1p9aJdYckG9Vi3D6qWMFX52VH5tD3MZr",
  "key35": "5iVNkuPYVExRfcR7kGvQrUZJD4f62b7nGbktpoeJrmDPHGcbTQeYCxs5sYYNdSeATwtVPKH7QZTYs6ydvSTzhPq8",
  "key36": "29z47ttroiKSATNEbU4qaCTAPcE8LtYqdFg4S25sBK4vvCvcGCPURhaaRfH9SxgjHLUHBxNwwQVsHFNmTxonWyPF",
  "key37": "2P3Zxt5XjuB7vN1wpMU32KwjQTdWeybQXcy2yFriaGCF8f5oN9qsz5jmb9fuHFy2XrNH9TWojRqcjWEKcbdXL2sq",
  "key38": "5o4sCvjyRwRQycGYcKrSSDsDHCPzZDD5Won1iwVCeJeNQYdcBGA8XieEFmtKhs6MryCgfh6ewvTPvn7gU5mr43Sv",
  "key39": "5boxDAJkvuBbJyimD4ngWpBMWnpSiqE8XrSGrKpC5hGFrMqL8C612knHZqRwn8r9Xbrkuuxx5R93p8QNAw6DhWWr",
  "key40": "4Rd3XuWh8QqhHM7oeKoNAtJUfyXutdsgypcA3FJsJfWxuYT1mjDMv5wewAMaBDqKHtmtVMtmgA91q4aP6sVsaR5j",
  "key41": "4RRUgWUHRim8vPq4oTQX2qRePUtdWoJJsDjwfd6xDkkFXVyW8jqbwfzCQgB46J6paJdzJQwzBZxTD6weDbj7Xyma",
  "key42": "1Yu3SzpWSrmgJaox2p9Wu9cNBxPqydz2G2rNNEGC2zPpUJcQGVMYYPpQWZ6BLaBdfYSRCp4B8CfcfHKSUP8Y9qt",
  "key43": "2YKLCnRkvHn8uNyxLvzbTTYvPgLszqrV2Ap4ToScipdWTHjixYNyyG4wYoZUFNKf2itXPQM5Qwcr1qeJuk1MBJqy",
  "key44": "QruS3vF2DKFRKzpeNurWksfsBZ1npLZoCVN3Ej8qtbBFCtFUTkBjSZPGvPPiT67kz6JVSY4nmHBpm2nrKkDKMNE",
  "key45": "5kTQ4HGxV1vU9UFgT6B9ev64iRZqCXsJX3F5gPtKLFYjjrJttjTiNJ7Fm4ANNgKWc9B3n1zKqFhDHvPsfNbDjfAk",
  "key46": "3KmHFgUL6WQn8dWuDzWw6MW1LQfbiUFRqUNBX5UyS9opbZdyS7bRE6NqifAo6gjDFnUVMQXs8bmzKn841YcahWVz",
  "key47": "5uC9odjktuRFYKJzbQCyAbKrFiqtYY7jDCS5aD8vPFj3879VyCiKSTBEihp3v9GcvsdV9rs7p5XqyBKFB9QTzVT6",
  "key48": "5Y5MbLJw3v3k5q1VHQU6RvaeC3YiBafYXs9XvoTruY8xDbS6HSBvPN7WCFNG7NrC9DvsBauDLh3m2xRq8PzxmPHL",
  "key49": "2PN1nyEPXY7vYvhCfJB9KQboWqXpybaCnXWA12x3kGixBsN6449dACdjR3qGjgYF32F29WyoRKCpqXSWd1gfN8Yn"
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
