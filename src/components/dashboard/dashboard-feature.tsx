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
    "53FxqqcnKffw88S31ssQdCXL2vK4YVBiGg2aug5EHdvF4ZTAcT3w3na8YNhyn1ND5DgkQWjfGMyh8pHHB22bpAeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYm4Kw2ajb5AZmeVW4kd28uaPU4RoowGTTtsw4d9wtazmYc9QWjpiTdjKATsL85MqcfwxBCAvD59vFdk3GFeaL5",
  "key1": "2VKVMsDdoxE1ouUGK1kFcXddNz6AKxyaMUJGWfdXduVCorqssqX8PfCiurqsMxkrqZUQDL8yqcbCxCqvNQa676Um",
  "key2": "4iQSZeqPundeemcsaFZcP4cdmngHqDuhH75RvN7CQrsLUwcoKrGs9QWbzdLJ61bpu3FiLWcjHRHqJThDqXYr1BcA",
  "key3": "5ffHX9qwAXbeDG39kpVAC5yqyY1V7ttGASaQv7nA22ff6fSAk4qunMxJFKFs3Yg7pYYojH1ijphTrKcFrdxNHAtd",
  "key4": "4kq8DFz9LdTATGvsaht4HHMm7CxVMc2gLM7dW6Khnp5LqGJF3SrqSjwbgn2AbpxNhZcSLHSf3uihL4RQJMCqyjAS",
  "key5": "3BnQJRyM1tidTMcPpaEnUfiSMGFdZWPjcGBHPWRyfe5YweQWV1tuDa8fPqzP7o1cBpRzDviaD1k7yJX8yVanva8Z",
  "key6": "pFsns4wsHMm8ghemL4XXfjzzyPQGCfchkYZrn47vVU2ropY2GLgK7RGLfxmxADkMBqWwdMhu5D6bi5oGUVtvqUe",
  "key7": "ktPMK96UBmCXedwCH2QiJtYPX6JEyxSgM7eTQJ6ufbPf11KPhqiJQ4XZ2B6x5y8L4f8PQr3V73BCny41RgrcDXc",
  "key8": "4b4ByUkNrXQfiH8LbYgH5p6s7wwexG54Y2a6BnhmRHGLwi9unzWgmYaRrRE6LhQU1QW5VhjWVJ2jTYqyiXudM4ag",
  "key9": "4sqtLqRUk39rdCdoAz6R9fH8ozCzUk2Cmr7i49ZV8ERFZ4oJ6hjvUwSqaTXcBXUskzojVw6Zdt6kNfFJ8BkJq5rB",
  "key10": "5p2rAA1PE5wi7ab2UVeVqX8X82HWUAJtuoNxfxJ7487oxvr911jXQx6TiX36zqgT5ULPzCf2cqhHoCEfLWab3Xw5",
  "key11": "3gu6sALfG7R7Ux2jMZ1fQ1HBANeBKd2R7tWCmv1YHMrCn2Vdqu9XLieP8wwofv5KYYy5Uhm9n9qVkBQ5ZNEdBeDz",
  "key12": "Ey9ZoW6EuXax3kRcfmiGdA8fKdZRfuH4L188rf1BNDXed6u5r8dRYKeNkb1iJR2x2ApfoWQnkLUvnJsAg3cgvha",
  "key13": "5p5Q58YQWY37pozTbdswC6QcpFqoBzE372NdqeUe5gFdS2DvT6hEQW5LSfteHRf2zVdvrAye4sFVE1bLHCTK4VFn",
  "key14": "32yE734LedTKnVCtfmsYrDYQaaueK8syTm6gnejLHwVBdZiTbX47jSFvCFvkR7DUpP7k2m1qvbnMrbb1PNoevQHp",
  "key15": "5e4SgGx4Rih5EjG3wnQUb57GhHgUy45pquYAz7Vh2C2nhhTnHuZE1a2wvLRaBqumkzHi4rp8fRcyoWeP2iKJrhgW",
  "key16": "5H9ew2afgeL1rzUfnyWMJQxv8MJwzn82eK9MZ1Dj7zGRxNeqpr5wgWqzzNAEgzyD5T86SER2UVMpufme2Uby77FL",
  "key17": "55MXrvAL6aQRSLH525KyucVgNapZ5erENTXQQ8XBKYFKHU1CGcpaz5V2oVRfakhq1VXF3y3gyeVgQRjgtfFVv4rt",
  "key18": "4vfcUeEw1Fo7i4TZfqgQZSdEYFJghRjX9r1TKYroXjkA3G5gxTodWaQvNtgZaX3vQQRmKiFrzfLmK13CZQCKsyVP",
  "key19": "5hUz5QR5L8mtFAux7gFz4VthXHKhZ2FeufmooppszKzhySLkR2stnFcgSkHq5jqe9wzQiCeQCCJcHPYCjD6U9fgt",
  "key20": "KaGqxy9KqG8HVZEZeC9CRW4KtbXPYMpo17MNwGkDFdtwWjZXvUCAW7oSHSEm7sXxZ4qCjPony3DRrAphJx1jvfD",
  "key21": "nvbAhFyiQSuRXE62RPA1SesUQd5oR7LfiDJQQkmxCVnjhAzetv8nhqNeg1qbCRotoN8sXxfZgQEg5YH2CFa2wPs",
  "key22": "fkgQhDwHE7GvNt2PaUDbUfTNAewcRwcDz3uTZc9hmtrRTees88rA911XoVvTEeHxt7iq1fWo4cU9HYNxzLcWN1W",
  "key23": "2TDhX7Vx1EcBvaiawuQohs1Lr46q6zbZmopiuWGPTUDNybmft9k5dn65rdkmGtAeMkKMmBhZDafnCzVNQnz6CFu2",
  "key24": "5yC6B8kHqVwwvnH74nxVK53zZvSmHzhST64a1omGRwnwBnkVVS7MvdB17M9WVRouVKCy76sBVPvZCyWEgUkDobhz",
  "key25": "HvwwiwEXCRa145jH9d4Rs1JccvURmKDDhCru4ixdpLMsU43FHj3SzdsPTUmYogs9Hki3ku6ATAjYBsGvmanKjzv",
  "key26": "Eos7Fs7CcCcDJPeWPR9XkQft8tk3fQxquaHHb89Uv9GM8Uv1UaaFQDWsVBEhEQFJNtBc256FhNpPBzZsdRstKr4",
  "key27": "ExP8NPTrVUFNMRyz6q97MpT2LVm4dyge67fCiJsUcAi98gjCK6VqvaEN4TPZ6h7uS5m6Ew8kmNGqebHT2oJ4w6Y",
  "key28": "4Xek6TMHNscNxbKva3E1apmncdKrdYa2Su4zmYjJNksEDBXDtrCJbkAGVG89KLmfDQ74vP4HSeyqpPetDjt3eqXp",
  "key29": "5nWca4hfN3FQdZUUbpegKJ4GQN4Tu1D9HsK4aoRyn3YDQrB7QD4HXbmZNh7ujcR438bEKBqvjYiXh3jmjRMmGwgP",
  "key30": "2CprQpKLw7tHr3hnvJkcGgqtkPANfn33dPHsXS2YBx3kZX8Tv5pFQJQ1HCj3ekJz2JMKckHUBrPgc34F21VU554p",
  "key31": "qvVCTyAy1fJPF7jHCQ98pc5Qy7uy5a6f4YSReUbk83KJxL4Jj6k7H1DVq7dfvzaSsZCiFfxiaiakcTQWhtnv48d",
  "key32": "RvQsg61HNAMGDRDrDbFV6E78ipmNYossucznpE5Kw3YD1tWMzWqpFfwAyvAuk8Xs4NmUCYgQigMATTCnpibvyqp",
  "key33": "4rXEDxkMw9Vxb2z1WEtrRJ4hLa8UmzxVtxMuH4CgZSRtde4WX5cAZJZeCPqWmhH3j3VhnDmqfcCof97iPquH5VNw",
  "key34": "3wmSB9SbJsoQjA2M8CLeiRWn83F2jqqMh177bxR96yvrCGCuNtbqv6af6kgFSbUjkBixkCfGxLC1A9hADx44toW9",
  "key35": "5EuvgLMcYJAtWotP5VN3e7A28t76A2pKRUYj38bz9LJSZ6FETZd2e4GUF81x1mv5RPeAHAxifGusZu4fT8VciHnG",
  "key36": "4J2TdNtTiojLpZrUnrCvHwhchwd59mC2ESZZwgaaqmLpVBgMPgAsok7W9os4BSsWKnqdhMU24nRFxBaS3UenLRkh",
  "key37": "3swgAVZHrNQMChb6jbazpKP7gbzcgHekLi1EUAqf1yeE3SbtkZPT6z6w4pH6dLUwpKZu5MXZFoKWey64uLD4USK6",
  "key38": "5Z2qUuEaJPZTaRY9TWK13ZL1ZkymtGgdjp5hRGbHQuxef8Boz5Jp5VtgXWSoxHa4Qtne26JuStkSLqgaFyJaw5hM",
  "key39": "oMCn7tmdvFbJvsEZDUnFTdyeUjHrWvbdLbUD3nPLdse9A1y4x5KiohiJJbS8uiZxDEMxfE62HuwZj6Bw74MEBJC",
  "key40": "4NdLQKPtGdZxba9ryirhzJeBvUpK5Mroxvd1GoFVTNE2gq8n3CrBx4pFYyknKKsL8wYVMTDGyuvSTvFp14sCmekX",
  "key41": "wpVZFqBnHGfCYdf2STF9oBEbEB2rNU7bqzN5fQePFvaYiPfQvH47NFD2fCYKwKgxnuma5eGPGYaZoohrzC9ZwrB",
  "key42": "5YhUPiyUTQZdvwh2Bkm3EREmvcdVJQvDjmG8yWeArHzMhyijJgKrZq1whfYuy2wtwS6MrWpREQLegNQb8w2FaVML",
  "key43": "2fcfhsHNYMDBNRrRyfVRRz9EBhM2BWvBmUDBCtyEppQ1kexrVzv4V4zeDxFxF9mdjsKvKbMyqR7tJ8rPSzT33T21",
  "key44": "4GSnKEqj7hrYqka1o9DAJNiW8bURfyofKSviL77unjwsguUs2NAdBGZuLk9ae3871xc7rCMXAZ3JWVsyKsSFhBUK"
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
