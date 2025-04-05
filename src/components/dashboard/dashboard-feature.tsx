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
    "3k5hC6PXnh65sKGzWytiTF3zPCS1ir6sqfKHR6kx5p9RGTACuesEcXLT5odkbkJGWEcXHgToePei4FsbdRUANC42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TfRgwKubMJkvtt1YWbGDNowAgo3Mu1S8R7jcvo3eqSz3mf8rS5DDQ1gq2b93LNHc3QD7Mz5JzTYac6riwVaMogX",
  "key1": "pPKQcMPutKyas42bvKVZC6v7ArncGaouwXSh4Swnim5hTzxkupVgZTLie6ExN2sKqWZpsF4g8EDh75u5NkFfusS",
  "key2": "4Cg3RPrKQgLpVokGaGSGDuKZoPo2ur5ZqPbRNRgCQ8eNPJ7pejuxy4kXwVxueC5Jhqc9iZoFncN3t1hUV8vN1NPw",
  "key3": "mtT9UUsmFQkA7gYf52anqGBvY9uYu8KcA4EhEzssFNoMrTCfK5nHm7QFwP5t5w1w26PJHqwbqRTDq6uLtSxXQJp",
  "key4": "5CkFBC5EqDo6YBpSkb5jPLRnEzY81EQR37LiFGiVgLBFTgJ826zdJFVEhuvVUWu9W9kMFwbmrtmZejN4WwunvuBd",
  "key5": "4tSsBEgcxUMj1bP4xcpzgQ1BAcBvTXC2tMezu9MpPUv9WirkPRCtbRdi8XUUpiS8yPLm6ZNgdbPrXkxxCqFqXN9f",
  "key6": "atCwf6VWsL2VwFB6mQm1rDLsrMuZMFxj1XzXXVwP6PtxS9wJzzgyHPLhzmATHkQ9TDiEPxFhBoxTTfXQrQi3Ytb",
  "key7": "qvAszd9Yz2vh5C13Tj4YgEsTREBg5hFNsvJ2hmrubZbEske9dF2r9CoG29AVrXF59YwuY55Ji3odGB8nEyhRsYQ",
  "key8": "24wPc3c1T6rcQuzbd6GjN5nMxA2hNvV9BEWvyKfQuEawZ5AXDsjHGDGr9cSp8LFQbKG9orBGPEddmDN65GbGLSeu",
  "key9": "5gcT816TjqVX8mLm4YgTsS5JQa3mvTDMBDgVrXcWS2sTtABBSM6wvsU5bzuqLavA1QEvwSLoDEmmTv6yFrjDbLen",
  "key10": "25BuvavwQkmqc9VD8dRiKBr3NcYs8rhFRdj2T173wFMwpnWvWwPrj5TGK6DTm4HMfW4NkTgjJTN9ZMC77KiJmsTs",
  "key11": "5iDTUpiZHgyvN9NnLxZDvi2Auhs7vWXQSMHNBcm3aQLo5YYYZPKq7YgyJUV785LLoHqBT5gda1WLaadtUi7RGPtX",
  "key12": "3Cboyc5Qr8tQyaerAytqa5y5Ets19Me1L3KY82syBRk96LMVUN9dBogkGwNaU6LTcVEGXdTsKwnrdq1nThPTB17r",
  "key13": "4Ek3wJ1etjdfqzGXVaQwLuZ4HUERYPZjVXaDYNvAmB35si3HRSJC6BRKk2F4djTqtgiLFMTeZfD1h3z8sYe2et2d",
  "key14": "4cNyS6jMovph7D6VcAt5JeMfZ4FhqQvwnV8yaiaGryxYfP7rA4esqQnWdFJyNauBGKAMKZYyvpFUD9m1QDEuJRmY",
  "key15": "3kUdcKKxgwsfZiQAQ4N3Lehc2atYLcCaAXW1qhFZeX5KnwHSfHXTjT4LA964bFsLq91Hgi5Qgamt1FhTmNrKe4Sy",
  "key16": "4P22K62U4jBA42i1BkyjuJejENhdr44AVsTrwQ8SwD4BjGdPbguTG3wVcJPkWbUeLgRdsij6E7ze7xhkkGfQiD74",
  "key17": "3iExovpPtch96zKtTFnb8z8QtrXBM2kd1fWqQh4cBDHfgZFWAdHc8kGF1cEvuBgvdrE3o3ibGf2o3ivB3VJraqQZ",
  "key18": "33rN621mW4aRVZ4YQRM5bh1wypp1QgSV6KivGPR3TuAEKJkPByiWgurHdaBxaLoBAs1bZjNgcR7PTw68C1Ufhutp",
  "key19": "27mvHLGcC3r1NpASLNKFousiNSzGJoM7aMkFGYMPm9MFS3E5picQTaACoNaNvhRsRZy8LG4Tfzp1H1jRhyzRBGu3",
  "key20": "52Ss68toWjBZ5gy12peHm5NBovGGCLthtWkTjGzG98fofiqCiQRYjEW2HsWe18ihVbbddjyj2iVVmbcTYMPrWBGr",
  "key21": "5ak1bZdY9ygh47EtQ3uVyY8VFnWPkGykmWfNBnFSGpU7ecpL2S5ZX5muYrVp9nMcqLN7fxTN6zB9W84j8HdzM74o",
  "key22": "2fcXoHAsmqtEQw4cjzrVUcvtXPscYDPKV8PCKwvkQYCBNLLfUeEgDVTRD2MMzvHExJHk1fTnD7wv9gcQ5ZUfZSPi",
  "key23": "3aHzpSAdrRtnNY2CR8zkKvqucvGsEKFD53GPByAAY1cbkwouwZYntnNPwvCimJdvfWLDZjcsjJcTo8WCK7vJgNPx",
  "key24": "3iAUhYPheaZDEhb42PDZNL2U9StvM7XLq7BfXSqbKT8viR2e4w7HZgqG52Xx6bXM2ikTjXzPX22HiTtPM7oR8cZ7",
  "key25": "3idarsPXm1nxfUAXjFhbcvpFzkDRXkNk61oY7Za1tq314vJbmRZ65HMHqTH9kHccjFaYJ4vdB3GC91bCMroPy8oc",
  "key26": "3pFEymhhzaMtCihN4Q9jCAU26Hbw3x7EADfNSnwZk6WQvLfpgJXRBUwT5GkPVtUZw2RPhqMiEtUuRWLpr8k7GDt5",
  "key27": "3bLYL5uRobV2QjPZtYgwZMdaHjXHVC4or7cFgx15wEXVFPBU8iLctrRyjxe68s1i1uS659pFtmKF2VU42L2FvyCp",
  "key28": "3ugQVuHmLfjtyATj9DcSsCffQ66zVeZqzX3Y788NkpKVX8x8isxvgzbkZ6VhfEebXrdhqJsEhN7dHxpWoYVFF7Vs",
  "key29": "43Bxuajh3EJaFw22hwP7kGbdBaZXSER9N72NLmwpinqn46ujRtvHgg6TGedAhfKnN3bDFWGQD4sBhnjbr1Kgh7JZ",
  "key30": "3CmvU4xMdgArAZF6dcUXCu35DKTFQxbJdodLBaFeGmKVyxxXAe9EKU1qvAxFaZ1raQhGdW8Y8Awfvh77rQS8P6MF",
  "key31": "5HMqnaFTrFwMnBH7RJj2KZBymBS8ds4YG1GFza3rfCntDsCrYMpmKdUfbeRSjrEuZzHimHxACDsuyC4Z1V74o5Pi",
  "key32": "4ytvaYW8jBU2PeppVxB3xyhkteABbijtGYSUBG3ApKVXJUtqDrDVSh36CVSPU2d1jwHJfP73rAzyP7VwM3EX5Kxk",
  "key33": "3aiaeH9Ea5iqydxUXF6jtWeoJ53pLZQRXiNTYSja5KjfSVWLVWf8XAdyTyggj8hDP9ptoWAVz4oyDNzb17Ccc4XV",
  "key34": "5TFfbamqqMc8QJGcGNU5RnDb4pwRsvWSXqzKvs8LKfGAo1wmAoQUNLvwwc1xoHfyNmwW43bDBiwArpts2UQp7tZb",
  "key35": "5SB3Sdf4Jk4VGB3dmW6DSFRsMfVjJBo5LN8ZADirwbYai49oHXKjxRMES1ns3BnPnEtkFhsj31Aa9TVw4LZT5HQ7",
  "key36": "31wbW1GfrZ7MqUi9uYvSR8G4TiQuZdeN5VrKDB87tUqRQgb7GVEJdkDVCeb79zGDNzPjYH8hpT3gGZ1sTm8fm9gG",
  "key37": "CH3zqXTRizoTxFL74upZFvNDZ4Fbes7KbantoKAtt86XegYUHi3d3Gro3481YSLKRfD7vovX318QguUrVQVH4ew",
  "key38": "4t7uDpuiJsWA3q9xiRozm2n4bcNnoez2HyM9SuDJs1piKQtXLJL7biUe4mcJVgk1GuSsxGqArPXKRxQYeg42BK8T"
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
