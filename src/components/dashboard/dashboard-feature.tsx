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
    "5JwrQwGMqDt6KkTaQvfFVPUyF5tajKbNjZJCo4XFbBmwgjSPRopZnF6Aw43eMTNFN6p5UKQnxziZ6H5DHuRJa5nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHyEdMa4doP42dK7CTSoQ3HJydWULv6ft8JUM7NbRxKc83QLibPzmKY5AGdRULEwBtiPhemdcGiUmAEF2EWDEzR",
  "key1": "47FXZ92mt4JPwPuwfpSTYhKiHNQitoSchEV7DuzHMQ97ENpNSBRLyPwmnmgSN94w4D2rot58EQMrGZPoqetLki3n",
  "key2": "557DBM97QdicsNnaLaCg4Letzbj2pokM2q6DMmmehez7UNHmaYDaiqnCpBQoCbKSXwPDH7xtfTwXHCH2y2MF2re9",
  "key3": "5HptX4QDxP5vACGYieAfDFnV8A3vHvUgM2t53x9JLAKyr1CpPdM1LC5DKdpDNayzNzHjppm9aRchw2PCGn7aXsDf",
  "key4": "RSf1x4Cqex9vZnNdKr6NjpoXvcUrW7s56oFbPNWPs2EkT3RAbVBFBJbVCMZbbsotbxnVjXyjwfoL5DEMvdsWrDr",
  "key5": "2C3ExniWiyrXRWZNux7skswdP8z2B1CYghHbZEy2bbwGpcZpethFcn2N67niFWgB4pwRw3j1mkJ1xCtgbQ8hDRjN",
  "key6": "5iNcXYiFHDX1M5r2jmhCBoWhsDsMHPtySs2TgNfkr3dRKMAb3LPRRfsNYdNLrU6V3FPobPTR4ut231zPjY1oY44A",
  "key7": "4gkRrvZpnGwXfRHGLMezPoSiTnfWLqz48a9jrCLXfvaU7UPtirzC6agzHS2Pz9M28GiMTfyNWrVXGcZ2Ln1bphHy",
  "key8": "9NXQApJLg8jCvoxUZC6RKarwmAFKt3Skcb2aYKLCbi8fpebTKWfM7EW3yUgzTv7bM1jM7pw9CTi1xMUpYSP4CDR",
  "key9": "5Cq9M2i54QMjAm97JWiwHgRGphXny5NEjKUvy1DFijyVi5V5vCGpfE5L21aVZYkSdRrJHrUXMcwWNv44jtaLXh8M",
  "key10": "2p7TqZBKRmfnoV9kGhjw7yhu3vNjZy2acc8mYrAmWLA1vstLJWfTw9VLTedZcVPGoaCETnDJVVJUh6F3y9mJgDhE",
  "key11": "2ZUP5jr8WotnxEeQnADfBkZWeDVzP3dkksrSzaWAwpcBX3mr1GVvfdPyk3pmxUC4D5UkLfsS6cbiAVw9MBY7qfXX",
  "key12": "41mARFjGSPnc5o5tc81wDQvEN81eoUycVSHZRATGNYe4yi4aDzJhuR89K3tqe8cLjHz4wrRRC5Z2aGhLTj3zfCF5",
  "key13": "5Mzs4FhQUknHQfHsd4ZmVBGxKzUeE4mAuTQi3C2cMxS1xK4Avgonbr1DCpjqxE3mP71hEDMPvaViQBXSqN8ntGyz",
  "key14": "3j8FANnJwxYYbW7QxuHHL4GJUgeP74wawYY9zVSfesQBn3MTK4avBqZQSLDYUBWxcDai7J4EUPWCLQfamXDqBmL5",
  "key15": "23ynQ1SdLUvCBCWAucG7YbYd3kALMYBg6GoQ8UBP7QGBoZQ84DAJwE3w7NSHCrpmUWaZaaRyGTjNChoVC6R1BMNB",
  "key16": "4ovWBL1djEx2G6p3XZyVqHMjHWq9rQyvFGQQwvSxMYtvJz65ZndusX5eZFaEtSdsP5rTiH92qM3L8JK9fyNj6fio",
  "key17": "5eSs3HgSYBghCCbCHfga4yGxHkvpNZD142AqCJTpwt2W8U5bQyYVBXQDEjRrptugUHgv5swqYs3wjcCHuc5gXqMs",
  "key18": "23TH2tDuECbkzbETKPzjPBQjffFFzNvEzbxcS1pyQXMaNDLsCzce1mFW7hus5L9Kmh7JYun3b4X169pLGahY1LZf",
  "key19": "4Nk5NFwXjeiAMVmnAEdwg1NzSL2RRHyxeWNih8kRskx1LCVm3vJooZ8RzDcK6aU7B7HXDhxuBCvKkz73j6XVtF8q",
  "key20": "4syRgysPng4MqVSfMzHNqECxT3RP8npxwVm3nqXFEBBg8Y2SKcDyp7noKWpPyxQyNeCyxY2mj4bxGKouRKfzmdDQ",
  "key21": "57W1gNkbw3uFouZ4JcUhA7TVuegQALr2fypdncWXxmwwUVYnFdBscBzTrQh6AQ1rckpyCgKi9RBXWKPjTpfrwXoN",
  "key22": "5psM7QZCijhzmavGqnccF9v6gQs8r41qRf69ZeuY32YeZkxCsByDqxv6AoDAcJY8QP6Z6oGiTZLPstUCYwvrNpCV",
  "key23": "4qHRYdZ9UjUvmimt2rf65Fi2bcoxaE1AUhsiykmZdcBsCzsMQmTUsT5V4KgyhM3ptLWpaJek64xRvJzisTXyo7GV",
  "key24": "2r7N9xr9t6xrQQS3xHvrvevTnZfhLnpgZuEG3eqMczCpXS3utM9TzbWBcciWg3CWGPscjTGQd9Qd4q5jg76XTpdr",
  "key25": "dcTHWL9rsfGi4PhCWxnyXGLP7ftjPSY8SUpHbPzDPQEgoBP3rQUjUmtDHWru7vnvegY6E6jkhbgagdCBQWyhhBb",
  "key26": "63QyLzPPWDT2rVUgQV3s5J4ex9f3xH1k3cjvmDAHfr7zGjWRisAJY425cbko2E5TzabDEmhXGMRujKpsoNPR1fXt",
  "key27": "2BAndW7tgn6BAbe4p2CCdi2Gp9obLo6kTmLbiVZi3jmKM4y3u357PqKCwBLg4mZvwXZDGr8QzF9gnXQRAA4YzHtv",
  "key28": "34nWDz4DzLdDGrotAqKJjErMKjtTadS9GgQareNmcnxzRCCeQwVfSXmppd7YTPcwzKNC9oMmVzA5iKsAuEucfM5m",
  "key29": "26Vn7zLoyy1QFHoawJSdyRirtfk31Qt2cdC2eBr1FEpkBGh7E7rfpEmvxBPRorvTgDKLWkBwShbWmaPyaAt4U5sZ",
  "key30": "4sqQ4yWhsn2Ub7iqbzBettc1eNuD8y1x9WYja3NiuHweLRWv72retCbnY31X2izu9KztJ6qaXX3KcsMTSJv4wxJ8",
  "key31": "5wrisjSjZgaEHKcjsKrFNHSQ5Cc3DNZXDf7BvxynGAN7ajMr87DyzxBeAM2DqvoZDrNLuWyWj4AQuKARkBwXEacf",
  "key32": "3HtzNsBhLQqL8cN7UfHSvbtHxWGKPkMGzsdZPkxEM4fJDy7pp7LWJyFsWdg2HKSqHeRkqPsLmNqUd9QT83AE2725",
  "key33": "4kwR5ZHNoAEf9Sksb4VfsKRxgKzzCeQwoXxQYHNCQoofPxDEsuyrH2tjZQ6MdGwtjjUBMbYoFvDddajLESLmSM1Y",
  "key34": "42PtH3P6kMCUELFCjogZWsfrV3nzvR4hKwoGgLqLVLVPUmDHG7FEM8FFg8dc71wW2toF5d2i3PcQk7juHJMgEefz",
  "key35": "4hF6wVcCimCaTTBChykSQQqoWhvFVSRdM1ccjqEce8yhsjV9roWPVzTAVtAdLpozfrnabq42y4tYALSMXJgukQcM",
  "key36": "2wRyrmuWE7gTtzQXA56UFyz8v5mzvx4YaUH4ABaimnRXKwA67y1D6GguuT31SEK3a7F1vUjfWTi2dPByVunDaim3",
  "key37": "4HrJUFZ97W3SKXzJP2x2MKhp433Ndnd7GbZ7kr5un4NZKTH62XrfcTCqvhd69Yj3rGgJ3Z4d7VH3MgLmeLNjPfN8",
  "key38": "2KDx5ZogULuyWek9BoYK1B843z13F7hWpkqRYzbsA7HQiwhGt8Egd3dt75maRoTMB5kQysSTrqpzeYrnejuo4kCE",
  "key39": "foBu7YMxKK5Ah3pqNgt2APK9r9Rv6FhDiC9TAffG9hkPsAusoDAuZSneW2gQKsNuFxbtZdeYNswz1bsVGLB7Mky",
  "key40": "5iWtgSvSh7xYkXLjKDrR8hpDsvTfszLF9Cz1v3RYC6q8C4kRjKLcDt5n1r7wgC5vNisVcHj8Xkh7ZRJriQCCg9Em",
  "key41": "2L3PjAwtwoKKcCvrNkDephMCcVsLa54RvN7E1a9d4XGYcgTr2urnT8XWrnFzCh9cQxqFa68aHTzfCuCdqm54DUZ1",
  "key42": "2iYTCySipnSzihL4sqSkQmpmSF3RH4v4Q8AiakbyorFtWDKprZ6vXzs5Sh2PBvqhWGqPuDD7P6TEujS3Ku1geUUL",
  "key43": "3c4adR23FMdcBVTqSVqCXS2oYeQGqpL1pyecPwd5wR5ADu42Q4u3SNxNRcw4b8ZuDfYnhf3gUuAbZziaTmfmmhhZ",
  "key44": "37Ld8NiC9fxpLBYq4SkoQDWjyd49BmC8oGaYLDvthaKPcYWMi6RvfMBpnnSEbqYnpSGZvVVfJpeJGBNemQgquJdq",
  "key45": "x1ANFE6GnVBjxay1iWf8eSJBA32Y4gMFvFK55C9wzpkkJy1QfBCqc5ZgyN2va4uzhUink6gHDt9kPkJXv8LN6p9",
  "key46": "61DUWgoo873iH8cP4gwpJMfwvYMCKmc3WWVJQnWb2CFcCsRUDYf6eL8u8dBP9eBNUYNsuTeUXWSTb9xTBSGv9KEe",
  "key47": "3X2dAyTfMCpU7etuj48D8VBm1GkY2jkGruNJpR6fNsMfstoFKfpDf1DyQ5ZqyxYa8ftJPpn5sVZZagTEPoeDMifd"
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
