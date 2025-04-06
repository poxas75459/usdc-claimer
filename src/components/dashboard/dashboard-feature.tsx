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
    "2S7uqdS4xzMFKBV76vx4XVgb37ed95fc6AukpwUFBQxxj4dgCLyu418NTuFUqXsZB5qmhDTipfQENWP1mRQhVQpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7z6ktTPMtDbP6cWfkezncaAtwoE8qAXRGnhCuWR48srJj1pX41TV7uu1Wv46NGiD9Ds9T8HU8xCDAqQ1NJLnLr4",
  "key1": "wmBbMtaaYUEU361qC5z9dDCT5bGT7KnDc9SvfpLqdDQUccTQHTG1VsNVnktUK4Gk3EPmejaXXS9ZqX3ZEzySsts",
  "key2": "62HL64o4MvSJtG5HL4gdU4A4Rgk4QE6ikCErznnErALTEXoYdDb9gMKKx1zEfxiz6Z4UEVjYrUYFksuiL2qzKErh",
  "key3": "4iKdbrAmWoZwatzTVoYLQBa5RA1SmG18yNDkRQsE236oWJZaKBqa1afCbTnR8ZNMcfNzCqD4RxaBAfxRRPszsaRA",
  "key4": "dQhLJYyT8nj8kFbsXXtJ5Qewy2ugtYjStwSMQD9R2cRAu3bE5VAgHo8ZeeXway2DvTTVVLW4H9YJH3M4Tww44BC",
  "key5": "9mFocmUXA5zB8D25kGEpfu1u5a9i52KnzmJRcVNFesnPmvG88YKyFv7C6iU8oRivWwHcaJL41pxEi22NMmvFkd8",
  "key6": "2Br1QHaTtXSwFNrKUyhaAxnz8UiMLPQN8MX8X3T4cmVUxFKajsWwYe8H3SmWv5EBtUKt4GvbRatVWprvwRLVGjuv",
  "key7": "4scFjZjjGqxbiSysHEoqe1UavwskKc9J9ru5sTHAMazW2RtiywW9dJuJVnp22dtfixXquanufofCuD962uegVzjA",
  "key8": "5JkdMHcjg6h5T7AMKgmpHLeqY4wYum5D6KCmRP1gxM2h8bNdWNmkLSL6LCQPRtdfCGV8uPKkY5e9ghpU4yGyPf9i",
  "key9": "vaTBbrr7cYyKU6LpPmvkTAzous2LRodSthzEuQk8MjFkgNjnBVYCs3p5BCyKJnwGdMMRmDuo2A7CSqA6fixXN7H",
  "key10": "4Bv9dbaJgadJPoSpKJZNhk1wxLT1iksQPCLCxVWvKdYGkNJZMZdBfZ8y1MLxRHhqpWe2Zzrj2h8SZbfntiwT8aQe",
  "key11": "5KuyAu2gU5XoRBvV97KZZfAy6ZgMkXToV9QBGYVjUY3yMVnRLa6VCyibNQAj3fxwh7ciPjjrBMTaUthheS3gorkb",
  "key12": "2viFbQNBv39RZGKHjw8ryM9S3THEnHGRcdWp2mLVF7S69dzkpDVdEnfd44baFiFQGiqgx8CNRBoZsJiffBcnUVkB",
  "key13": "522A7emZWo5G88b6S3os3ASkSjf6v5tmCZg1nNhYE1X9JTYCQvkaD2c6Q32dowpinpjaJAEnPgpWh7QjTMCGs7X7",
  "key14": "4GZXSTuc8JiusDLjT1qM1wDsKAq1jzWjrvHNU5P8hh73w938PyuYUy2tTNLfoetmsSGKJtZ2r7HaoqQDcVaPygv6",
  "key15": "5ZR6H9cFAhN6NjBvK3UDPaPgophufU36fdEEBybd5ohy4LzL1bbU9EmGBgYHrBRN23Zs3T1513VmmrFhYtrPyQz3",
  "key16": "4i78sgYL84V2umdKPwYQzNJgPw1Y2xz5eQaaxGv4dPdmz8jTHccbbmLfm2kwkH9r8w45PUpZSaoBeafRq5MoVmAE",
  "key17": "49nJ8keXp2N3DUxM87VHoaWrXiGPSJRJfWXZxSVD6GnwRkfWztemK4vdpviurxKSoou4C3Ms2Ue3MMc8s6cz57dZ",
  "key18": "2pB1yFCUvE5Y4c4BejxoPCqUyZKtFga38GY1bdWZ7CUDMoLFYSeQUup1ekKw9w4AkrBNfkvx5Uh2oLB2oAHLLadZ",
  "key19": "Bd1CYtEuzNYjK7Fea6j6JfwtjZ9r5LoCymNuRT3sBKurEwVzJoG8m3cYN42eGb4dsxRfkKd8huGHeQ4HCSPihaJ",
  "key20": "4jWYLRRQezmxgxbyk6wBh5WwZEqVRYYeLZFdfd1dtTJjYybmYfDwGehq5giP8GCq9Ej8iZ49oFJy6iMDPQ7Fnt3X",
  "key21": "4HC5h9NvCdAYGjMVxvFSFwCoAGUL6GtpWSRtaAj3HKMD84RpMT2XXgYYtjKwGNfdYuH87XJvWrhTai6Kpx8uR3FR",
  "key22": "2e8wyWfgxwhfrsCDbFS79NRi2zHoqLgjHKxPt8fEaw6uv6a7UnzTCnRFAQJVkZqkyPTBZBRz8L73QFBWiDTHnkvk",
  "key23": "2x5HzK95sD83EkhpDC6PGSKVdifGrAp2XPVyp5ti9zijufAWxjvdUu8JNtSDVaLjfk7NReZKJiWeb4XK9HtUmnAb",
  "key24": "668JFmRGwozjGNqYdvsQJBEN4xEEqQzkWoSwhKBvAQB86p33URyKxDp3uzQZLJbBTpgCCNx48uZMHvbMiJZ1Umic",
  "key25": "Srr9pDGww15SJtdv6u75fcBjDanEyhDsG68xeU9u32hT1bwjkjZvCeWA1ePLvaR8uLX1t9jA4WpmPP65o8yoGWM",
  "key26": "651wKG6Xv3Pihp1AzxVtcPiHPPijaSysf27NNwzP6rYDaB7jpN5FKoVL1TaKQj2GVLmLozYUxXqxDonJn84WU3dn",
  "key27": "yafokEx2w1X6gvLShaEGgWRFEFPq9a8goNgjYErC9Fqu8BKhqkbPwCTPc7ykpANCjhkikuMWYHtRVRdqgBEubT3",
  "key28": "59TyTRVw1SmsSeg1tDe4VzRnqrJ5i4KyTnh5z7CrWDseCXyQg79Kmm2nDJyTHEpaPAx7c8yoUF1vF9CDzXyFUTMC",
  "key29": "7ZUioY2tNREFKSeN45y3UgVeJXcUaSiRgk3be2GYfJWtPqHMuyMVV5toKGUQxxa7FbZsJv3a5ZEPZNGYiKHTaAP",
  "key30": "3NtcqJhn12LsU4TzZuTYtxEhTye9TLZ1SNpCeXBsngvDG76mJRSoGoNQaadtWBW7rzZh7SZDmtoEzRPJvYunkmuk",
  "key31": "5KENpzPiZ51kV4SSGTzQiDn3D5HFrTyKJkEW9qtNevord31AFwVc7Mafw6GcJSWJpoNSAWaLPCUry3M4RvTxBeZ8",
  "key32": "48Z3LYnnPXrUqWjhhFdo7UimEQMKXtM5VgmnnJyucXovXxwe1mLkDbDEFVdAJkbsJt3du4PwCZ2jP9V23NzpTRDD",
  "key33": "2oAhHWpna91NF3WBJDU92GmQeAUjPb5AePMrQvr3wFpM6uGdB7HadPvNnkDRTVduLHp3YqqJmCAUgA5Jj2gfNai3",
  "key34": "55eAKRaUW9pjbLVHQ7uJbCZbwjhRFmceME3njmWSRnY4hFKxUHPGgQ3x8zW39Q9Ak1XtstPB13n6UMRVjgsNwwxp",
  "key35": "2QWPKKvkUHwWqk37dqSNwqY4Aiqs7Ashh9vVrG6NEyVwnXtVY3CMfSHjxSUueh5KrqKWnnULdgGEZTECZ97DTCwi",
  "key36": "3pd67a7uJEVd5PzJ2ZPYBRjwSGuRqTXfdxJatPFeedDMBSPmut5atgRTgjQxqBqtP4ck2q5whGcM62V84R3PMqf9"
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
