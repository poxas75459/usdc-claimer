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
    "2BAmD9Zz3QT6EkQqZgjV6cYgATXBHcX59oWDA6uC5zE3LHUq5PrJbrWtZa3WJHn1Ztm53MHrsvwVc9xePyPcHoEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyKYfLmALk4bGxUXVmjVPQXcn3gQ6TP638DubaXouE1jaHcUDaUKxxCgqkurS2xpjtLFHUbZNHZBtPXSbyg2Ld5",
  "key1": "4mTm1sXWGatWYKJoHGaeMFeiaCTozYfkgsexBEb7ynmU6csReNESxsAxT7uKNnrTpCVLCXvEQdDdktE4EMbvYxSg",
  "key2": "2j1hFNxDkA8addMWwhxtvyUGyQpyCkg2Ytuhm5k5CmwNSG4DcLMjk5UXACCjXuPADrHUAT4zrX1vR2v62NfCAqbX",
  "key3": "5ERxanNcNUVRZuCAxASwPwYzPKCHFq5Atfajf8b2HM5uyFdpuNaU5AApTqZvnKjKyybeoxH7agyXuTyEfDdRSxCG",
  "key4": "5JZUUsd3iFcu4123Fis2gNinisiLardsTgKSJ58AjLyM23bsZSxj8oYhUD64stm3hL4s4EEM61ey8p3TNH8WJanJ",
  "key5": "231XPeRoEkgzH8eicLFZw6huABifceWLurg6M9rL6pybMMecDSFoGLFGmjX5fd59BPN8WknK9NNEDXZbrteBHxtm",
  "key6": "cYL6hQEPGLKZtWqGvoHK1eMcWbHN51kVhtYw4guUJtMHQp9dW6UThk6hBnrCfrs3rvyGiLuXT9f66ewC1417Bmi",
  "key7": "fdPSmnNrkcUNRzKjCayfkS5z2W1zEpHh8aM3xQmySZEaaFg1k7fC1mUTDdz1E31Y3qCofBpB1g7Lzm2r1ygCU4L",
  "key8": "27uwkWd99R8M7febMkVd8xXcyRA4hMGKNFpmb87X96f4RgemqrHWVW6NxauT5sPKP6o7wk6dWTdFj3XAGeSiAuW3",
  "key9": "49TNRPvNLXc5kLgmwQkyJeBCtq1BUfaDeeHxZRp4jULvRCK6ZfnQ8ptVbZvLvx8UeL9ABtrbH4935dWtBWMPJNpC",
  "key10": "4xk43KqBPnpsfMS2bF4wtEmefA9pWXAf6Jt3dfxtxsjL1HxucDiYWoezg99zDG4ci1jE8DcpUq8EamZ9qzAAf3qi",
  "key11": "V6uJqAfmwFdoU2qfrPP6AyMuZnsuFw5xsAiWu4cuB7AMwyaSYPvfNbCBUupoZZwxq2b6UtivCigDV1RErCukU49",
  "key12": "47mpR7qg2QgxRHewSeFdtejTUVXnWwVABVsvn6ciXGNipJFydtmHJU4AtKZzLfd1su7bghEv5RkQPD9f5B9cfJR9",
  "key13": "4xwqsiFFNA8ybJhaH5j5tTD4uiCvxtjcVocSysmTn1PdATPNMAgRTCzbadhLNphj926BvevP2apbBqR3Qaegpcfq",
  "key14": "5Vxv8JbDD4nmR8DgyzgNUDBJ9NhriUudty1MLMZ9UwgVgu7MJagajiKcWrxe2sXBcbKh5mzVtV5bVPGg6X9HH4fk",
  "key15": "4SAMuABs1sFU7VwXt4bHzS893XUvKnMZ5Tsf4oaVBFUw8ZVCou7PK4kZgsFvfNUbHmtwW9yMiC5SS3pGysEtpdug",
  "key16": "gtX9ZvmV8qGS4Hv3NigLhjYQQZj9ofrWsFC3B1qpoSbqgDsZXHHpRiK3XC8cP9MsyfX5rgTM86Cnj8hJheHdPRn",
  "key17": "5zLXF7QoPaq3GL8rnyVYyS6eb8uGVrn1nt71BKmppyzxeSZrsRQh4oCiqzEAd8yRJYFxNwG47A3spwbDC24fBWN4",
  "key18": "aPjYU81jfYb8aikeenke6Ex5CxyR8EyMseTB4yXC4z81FEexM3SdcRM23iy8KdQhnVtHUJjCMFvm3rGiTzdUR2T",
  "key19": "5Tg92zPaHNvRpGtJQFZdGx3TEzixFM3TEPG2rij11P7g6QYuoTPV73RzbCq2RUBudVT1ZXB1Y1Hqwvjv5ZczPYGb",
  "key20": "3eLgTpKxrDEdzfz1FmaKoGbCLsr372urHHp9Un4dTFbMCm2G1K4c9awPpdr3KYAEAnXgrMngLrRgh9W8Kga6NVgF",
  "key21": "L2MRS1CLnz3n8RxWsnG4b6gXyBmU5pERFcBDQgs5ZgfM6Gwbr9Vmk3gRK4K5GJ7DYovp1EJReX6CEAHKGRrkr1J",
  "key22": "5WPiKmcsZeFEfbG9iW1TXjmvxQMLwsE2YHq27C1dGQdh82yrzrPuUvdAySG1Wr51wKYQB9XjNG3uLk6W6zyafYLv",
  "key23": "36uG3fdwVUBHgv8c6rNXApRCwxrRxEKPsvm3LzCa633MCHVH6GUKinXxJK8GHkSMvT84Ha3VTxNiKDgWc5739Wcx",
  "key24": "2STgZ2ddWYtDejY52gWVSo5Ruhv5aFCRh2vRi1JTsychGsoGYvHUM5LaJowcJA9RtmLkcig7RYiU84JAC8RCkf3X",
  "key25": "2gwGrEHXYAYvAs5gjxt2CrmVP8XDtdASAHHnAkjNt6FUptihdnX777zTPkSCKGYZ9HoXugAiM3M5QEqVVaSMnS8P",
  "key26": "2jtmKvYtfZi2iEhD8T77HZQb1FopLuAKbht6qmyuBjnp8s96mxHKhg958Tu2Xyv2jiKWajYHoW5Yq5QGct4XCzup",
  "key27": "3YkkxEEax3AKiS4bYsEm1yiH7uNFkgaYgaaG3XA8jX4CitLFyyWnNXo3QY3y7ioE11pCozch2GLHwbZH4Z6GafwQ",
  "key28": "3RjRMmrSTD7cDJHoT3RqB3KTtK4EzY1whoXAPB5YYVPBjfZsL2MVREzy6BKRs9tgKYa7XVE7yE8V5iW2mpMjSDYx",
  "key29": "33xuqjVCeKL3m5xmQ5DkRRTagCVwhspmiwXGoo5y3P3x9xGTunV4VAu1uj7ZS1sC8jHiWf61eCKaVQmPjwm7q3qX",
  "key30": "2UUStvWwWd4dAqXmFMGUH9Pb77yUkTR3hxQuNsWsqFNBV5VWEVDNsEo7AKcbDDxhgJ219PEgiTwGu6Lt5EJ6uwF1",
  "key31": "5yPbW6mmNH8m18jNjDyZ8NfjKcRm5D8wbz2AWXbLdWkynYJ2e4eT4vFahuBEXD4YznZr73kWVAy57wXCSFApDKkD",
  "key32": "2TWDXCZRoEoLuqoJWSE6CJQVwvywf2dD13bZEoRUWWbvfkFSmkSNDNDoZ69mAVnYsj99zBPbjokaVjsiNvx7obUX",
  "key33": "2PWFurzd1PuKQmuFDFWk39jQ7X46JDongSGJMRoLFZTFRu8WzMRPSE5Qm5UPqCwp5n3GZeoAzdGBp89ukts6XQMi",
  "key34": "qeHiUQpRU5V75NUUouVsKBiYz6eukpJQ68M1DTHZCnZ6kW1bQaKDGZTvFEK1yHPYDrtkXecqPQ2YV1P7HaZgpMm",
  "key35": "3UQAenNUptD1GCUpi41TDs2GJGqqmVbb8pfSi7cu2FVSuEzYu45TSn9r8UXvx6Uddw5HjqeJwehWpyXd1BapZHvH",
  "key36": "3A1MhJdboiL4wG1fKGA6zUaFVzWRv5iK696MnP4MWvKC1sgQBKysH3FfpK87u3X8ckU5bmBVBjZtFH1aRhL8UZ6k",
  "key37": "5fJhBXGyVfQ75pyvVjFJECvhg9F74FRf4uwR84BPVPGJPHf6DQSLwMyhZ8nDH8agpN9PGZ7HPa6UHDEtzD3K9ZMK",
  "key38": "43U6AFToMiEstRDqa36vmYvsRJ6zhykz2wndjBjnEU8MnPkbZke2FgmVmHknrTiGamrJbeGC9y7U1pLPSe91yTMN",
  "key39": "4AfkuWgL9R1fWwHR9uR7nJd8nR4KEW86QD7ATHD5r9B21sUMBCttcPHcCNDu26RStGdn1BfckRjMxg8kPsVN6Bow",
  "key40": "5Wuop64brdKX1xQg8M28PN5SYjh2aEShJS154Wvi1wY6fjdhLtC4LL8dmzWzujxu7rE6tYCMh8B3UrooxEg1Wgm"
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
