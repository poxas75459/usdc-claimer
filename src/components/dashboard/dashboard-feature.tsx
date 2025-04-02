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
    "4wCCFpZ3G1NGELFzvEedm3bFj5NGDuesMLA7fMAnWv5vnWChaeFEajNcAD4fi6ZACkDuU1yzMgvZe152zQaPJipe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c64phk7cpHXrrDMi9RUDAUcU9cofpmiXr3AhuA1nLSF9CboS3zBvL2unPVMffvyDHVJiE7UMMSHABpKA948XEWp",
  "key1": "5mANyFXiSQ9CJsFHmapPZ69iasZB39DHbbvHqqFZgN4EXabA6nF8zo6kVJE57P6jqS1vxk8212Fvp7SBbPveED1d",
  "key2": "4t145B4dwfUZ1pJCRQPPT8UG8p4VSziMHDoFpi5yYF5X8nUmBLdqBZWz88nQUYEkYK4FzHiV8n1Mw6ZFPFUjTqjc",
  "key3": "3SLHwAwSq7WA69hRyFX2dwyCzaeTKUfLw2nPP7tumtxNR2hXtVcMh4DHwXehBTVSNzisNVdVmmata9cYoQAabLwU",
  "key4": "EJF3driQiSywQ8i2kD8UYSGFuzqzgizhq8cuG1WC1DjH1pu1EbcBPXANfJieuT8aASvJQ27wpKNZkwHFrQZxcfM",
  "key5": "5iyCuJSVxjz2PyWozC2vWEB2JYX9nehaB3QLQ6a4BL6p47eQEDTJZFCscb8XEcT2Km6kdqPCBw3x1a57XPayum3f",
  "key6": "X9AgLsSiuitN3mMkGBsDeM5zfYXXVSGqtkDt8GBYBq3nwxz7S9PdMt3FGNonMcmfs99cCV5FnqAJsVbR2D1NM3Z",
  "key7": "53AMRkDQphYtB5pZTK891s9t8bxCmfGJx9Zr8kQRKcrEB1uZyAms2xb2x2MRq3Lw18H3H1mqM2tLWBCV5HYYh1xo",
  "key8": "5WXjpyJgNaxGmnSN5af7iTzcXBq9Wg9xoDGHRiacskf6VUqxYjEF827ksRiJD77BMDmf5EBTtsjnxfKEqavYx5Km",
  "key9": "3UWapZ97pV3d78wtnEoytz8rKxmPYNNQDH1dBQtwYg8DqQCrEhXcACLweYo6AtCUojbRULRjjkXZH8WKhoMT6kWK",
  "key10": "3wz9zNawhz8TZRZkiHbFA1KwEy39RbNHfx2xN2mPWhrQCZPsXjGJG2twjRAB8LPEZj7ZyKoF9rqYf7SKhacJ2yRP",
  "key11": "2fJhCTvdk7He2HmYKoUhjR3LgxKLzdCr8Gh8Hnut1LWdi1uQCbK36bP3muUrGsXiR9maK1bkhDCaCeR2VM2bdhUd",
  "key12": "G561aiExMSxB435pRtghbm3xZ6FKXmxBztk22Q2URq6QaRm7SCuszPpxeodJbETwvc9YmP3FW58bJF2rW1FoHRo",
  "key13": "4jiFXTBVRZHhMckC36um7VyvUqKfQV2WVGKFZ53UchQgYtpk6w7SorZgPLmw3x1T2ryFek9948e5B1cevh1WeG9b",
  "key14": "3SurfcRLJRiwx2edMFoTALy4EWAipDiq3WmXW1Qd5xcgAxmBRvfRAdEZipQiHw45ynVCQG9Pixcej9LoozTmKZYA",
  "key15": "3agqL1gpGZjM8EWMXq4yLR9ZX5qnFqPZ3cvdaYLYuPmoFg6SDEmhBKJeogPgd8vW96fBfGgjRXipyZpGvMgZAfj2",
  "key16": "ehb7AMsH1DkYKMbmhMTK6RbBM57aceEfsv3v3sLCBD6f83PgYbRF2y1ook1H1hKLqw9LhC5T9zXrMyJDPQv69nH",
  "key17": "4M2Y25KQ2bfTDNrUDF669LCacfKhdFh25QCCW2NR86VQ57kFGMcR4n7uZxovpZZXbae3dv8eA8ac5rUbnE3Fyr6i",
  "key18": "5AjHhKegZLqGdnF6xFE5qLD5bs15n18VqV9iWs1SZHnATEwCsnQZ79Cr1bUKezEPspo9PuV6FjYZ3y8rAwed5hoD",
  "key19": "36oCMyh77c7pJ3fQFgYXR4gTvHCM4kuJrdPUZurXWvVbAzo1vf5o8GnqCAN1rm4eXmr67FU1WBQCTLdYsi4b9bB5",
  "key20": "Ng9BPKXW891smft7gywqs3hzeDdDDfGotCmuhYfreVp2FQxsCUZnjNw55gE3Go32wuh7HhqjE89w2Jd5LebiJip",
  "key21": "5hDMMkFcHgZBQBi4JcoRmckFuSwy2ptoa5NvYiacgnRUN77pswcggibDqRosV3mfN4K7avBukntRsSqnYRjYnnKm",
  "key22": "3PhcZJi82CwmHtRV6xfzgDqrMkP3b7apj6vuw2vyZBHdnMFEfzWjh35ToZXpAPKfeg6An9AeETdy3dFbFrG2fV6T",
  "key23": "5kx8ek46AUt7oEtusxVUG5Ektj1u9GVeuvxLxZRT2HCm4tCAEtyCTWvHAAEYt91rngYNDw5XGFbXGHNzg49tVi53",
  "key24": "4aMqD2fEzG7fhgcuYueimyHkTdvPyHnfDHRf8yDzGJY15PyMnWdk76UpBzB4nxocgP13xQtzgRHiz7cZWvj3whz3",
  "key25": "5nPAwRKoiJhzSWS1Y2eGDDSRFdkGmR2Z9PrsTSCB9SEiWajh4i7skMdtFiFG1DrPJi78CLRhYvVHMAJPxqULvu8d",
  "key26": "3VKRFgQ9DeDFerXPfnbcKbr9u8H19d4sqC9BNMVFsGbooWSYGZ4Zom3sMWCV2b8nSRKM1CP1oVAudn8sSMMC9DNN",
  "key27": "2XtK1G216xLy1Ai6SUGv6aB5Hhhapu8DJG1ZuFvK1HAp1cVeUus47BnVRVXuaHrVZkXdDUs74wS6qkirmAEY2HCs",
  "key28": "66Vg51a8QchaAXUsE28VHuGm1UmnoefgwibU9z3oq2Wqbsxw7yGgcvkGznMKjYfF2BRfX9HRBpht3cSJjRR6paby",
  "key29": "5dqsyXtoUK3W3WujTKP3sDAG4K3irxmH5EJRJszcujcgai9JPvUTy3UHsjuZKeAduxfYqWUVXKf12J4TtiT9QGvR",
  "key30": "5ZjNQ378dpoEHVQDCXxZmweFcVGwZDUAAYJDxeNwjRt2d1sNqB44a82BAWfGzZ87qWKe3NNBtKQsn8pHKtpMR4uX",
  "key31": "2fkYDFF3XLvL4wzkkMztwWwGaNTUk6E6K9FTKrPAXtiW1N4NCBe4mpgEveW897PVCYhfGaMtFDL672PzL2hYYo9n",
  "key32": "5YswFNg9ds1s3Dyt382ddjT6tkbBs8WVQaVbnrErF43xztovPh61AtN6b8RwhJBq2y7gy8EGdUbMio7bQEbrgDpu",
  "key33": "4utVQEz3QwUB9WM14abK5a1vxuxvV7mPzA4cFA3dndBJpz9eBNq8Zx48gVJjTaACuQ8dt2V6UFk2UY5L8sjCtfzV",
  "key34": "c3bQBdfHeAYEiKpdsajcenjugyHYTkTWeap3AS8Y4ZMiwoHMZf3frWMfSvAQx5Hcq99KjEGF4c6kRjpZG5p1PS1",
  "key35": "MatfaKaEgDJjAbdhn1aRee9tiuvGpSuxpMbSXLbHzdjXtt5EN6VWmkdWMwmXQH4w3yGpA5bb5HLLNcmzdxp9VEt",
  "key36": "3A5y2NN7YF5iYXCWH5EdyxFaKdYz5hz5QU6gadFLP1tCvCg7t4EU2EG5Zn3jyK7Ch5Z4TCsKNzLebs2VeLLXaTvK",
  "key37": "1CYbbDCLBhGgm4jpoBYJDYggssbUXs9cF717H9Y6H77fr2F5zaPa5WFeuxzCSyx8kx6n2YDhcAj8SJYECGudKwv",
  "key38": "36fjyj2ifCLmfwPKMb5P9Cj2qEHxtdbrrH4o6tzod5iVe84CMshzYPuTD2tnBU4WcaKF2KgenSVJpr7wrWhct4qq",
  "key39": "asewSkX4KPWk6NLm2nmK6krkXQbyeo5MDMt8HWszKkD3SBuwTyTHMPQrwzk8WX4qL1gBvh5eXbizHU6AYvipSM7",
  "key40": "2Nqv9ysLtaEMNEaF7dvj4wRmxERkFr43SR79Fvww8RGSqiCCgqzqdP21bdA5dwjoyJ7R9EpcVjuZ7fGyGFXUM1Av",
  "key41": "4MXMKCrHYJcFtypCxYjZCamGu4WnbqPnGDx8sC4W5v6yWY9Ebv8Mzy5NghggoydsRAkvKzv1dcjt4VQNnbsCfxhL",
  "key42": "c3CexYQEGPzJJSrM42myqPeVrRvjR8nqkevkMt61ZYLsz6JCYt9wm8cL1MSd1Do9vLyYaqeFKc69gfHVtMAXoNE",
  "key43": "4Uj62PUDjHXP9JmdrxwZFntGnyLGo3w59y6zE7vAGKEvoGKuJsNVmbBnroKssDWNb3D1Ff15EGzCJPeLbA6HoUaZ",
  "key44": "2QfV4BRS8YEGtzfcqDRnB9SbEG3JEKkcNWZzPNc9Adfj3XnkqnH1cM1nejnLyGvGKHXtrytFx6xdsazujsNZc5Tt",
  "key45": "43mj5tVG7Y6z2e1aoev1PLQFKDkr9jXYVwz8SPYuG1bw6X3w5Q6ZGYdLidvY9CR6J6LBvgBpNyHUhuX25xoC76U6",
  "key46": "3VAkv7kPE9jrCri2LXPMF5u2yWD4DabWKWD92nYv5f6iPWyix6daKePvoQwF8vCjubHMk4oLuosXTLasWWTrdtMz",
  "key47": "4vqNQeTNAeeYR4NreP7ohfZYV5ajg5rtknBE2jP7HmMwhaScZvU4U6UiUTmrDTyJvFDPpif48WqnWuyLQiL6mYKN",
  "key48": "2obbDP4khGg877P68o2jKCdae7AP8DLqFZUuJAQ6LeWSG2Q2gMWBEhN4w6c4C9kxTrzm6g88Mdp9AmvZwsA5wLhC",
  "key49": "3oi5jjpCqrTj1C5E1yDCtNdBe8LPPTAfw5a3vdXq2Vn5bvUJBp5rFaibU37hhFXpMScpRnN2RiUzpJkQ2m95igwJ"
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
