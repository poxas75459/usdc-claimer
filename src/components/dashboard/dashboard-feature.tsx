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
    "7v2YVhvYCjau6B2mLhzidjmiMQrKmeHSBS4eyegDM3HR8GZ6wUtqpdcNF1NaAZ5BS1Lyp8pDeEUs1J4VC9xtsiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvW6tyBdcJMnGkrRqChB5RpEPGosabjvCzG7CkqPmkq8rwBGNDoM1VMiSpiSVXQnMBf9haqkHxX65rnhTh5hm3X",
  "key1": "4rz97vA8CMSWnmmnjzuAVBTfnokW8mfunDTDoVuycnyAtfde27Xnkbie2Bbqtw85apsgrrM7kxPU6rkrdFcHtNo8",
  "key2": "4dRMjxNKPx7dBRwexX5UvSaRKy2oetZBJQAMowPshfth95bxyYxbKMZoEWERXWiNK6AtVPS1Ynq8V1zZDnxV9skV",
  "key3": "VDWR2f4ZvXGoAtPGnfaCzWyvtaSvfBkbNFqxvPJmAJmzWkJJbhr7cXW4AHxDjANARhoRMe1K6jE6XesJ96aWQX8",
  "key4": "2En898JD5AcbZUZSd9ty3Bx4jUkUxQBYRGprtP24E9c8cRYjT36nLwHLnxjWgY2EN9q7Mk3o7DU4wxjLgCwMiyeP",
  "key5": "5sazj33pdzLsduZg7FptkTUdCTNdJmAerfNmDGHugTgKaSiEDrMYtQdpgdEMoHPh2mFHbrWkDMp9fd82PuRA43Vb",
  "key6": "5Cdoxe6gN2iWZ6SgCTxNh4X13wuDXxKWbAJsvN62fX2xGyWuiYUA3qf9X3itsfpVKkyMofLapLwaFymwbmBEzCsd",
  "key7": "2CDEM2eU8rSMZNJEFGpVGDk8zL8botokHRpRrMBKi65CJvYhpqUaGzsPEjW91hWpNVocVWZuUT7uQY24msbj3XZd",
  "key8": "4mWrXCjCAGhLPyVPUbpC7grJN8wRTXx6gYU3nNxpXZRRVUDACEsVfbXpEWPNZYZBBwghUnNWi9U6HgLVngfAnnuk",
  "key9": "4shkgXiJULafT7S6HTLRVU2vR6GBmZKKui6Z9dgZTcvZFLtZEqTawFndnVnYzAZGqmxRvgoWkw2jodg4GA3F7vqZ",
  "key10": "5fA6ekHUqVCVLE3p3Q3jB9Vt1MCd3GWxK4vVrTkqYqY21dRMjnE16ETSKEZVU2qpxDeXNpLS8V33PMHs8BWwqRrg",
  "key11": "2SJS283FVDGUb9MK3jhWP3XPFE8DtZYp1AytcdWmt3mi8FoKhru4CaME454bpEfSDfCgSn3RPRQJqPNAALeWqQKy",
  "key12": "5Uz9cdnYmWEiiSefrSZeePTskgzu5hHsY7yCeYwC3X3Dxi8yY6N15EnJ8ejFToyTokQRbvkHvf7o6r2j5V1rD1R1",
  "key13": "14eQoaicWNoDPDA9f8WKGkhjWs5UctLm6DPisoeTusYWjgiTNwWUaW4sQUEd6CmqzAED5YNcd9fJqi24fmVa2Ap",
  "key14": "2QG6FwhQSyjQVL7EqzDiycJRSudQ4tvqvEkt8HAyWnaJKXakTGzSDBkm11NxDFi73bKTygHdq8VJFCp8jMaQ5ghx",
  "key15": "31LoVyfNaj97TpeU2ncaYBoVGUBLDSDLMZ9T3cexvZRQcuH86ZHHyjeAX2WzWJG9woe8H6wdyddiV9SQCvxXtDVR",
  "key16": "4Frz4wiVRfrmZsQ9nqM1UduV5xt5ftXMQTY18VSDyrxAsiUZG1UzN3dN77Amg5W24P1VWBR6ah1q2EeGbiAVd8Tc",
  "key17": "3ELWMdSo85MX8yvonZNj3w1bdZ6uqCpCFcMN147gBDpuTiAZeqpeET77s9vsDtUJVPwrdP4Vnnz3JoU2xPDkAu5Z",
  "key18": "5A4iN65Hzz7PSmXFXESvNuNwQgJm4F59Rd2UayJXwF7UUaeiMeGZm226keLEpLnee9353WJRyQrA6AUpnMwrat7Z",
  "key19": "2MkvHonRs8cmZrez3w3hLnGknYAHywYyQCxaDiD4Dhof4qxoDTxv6bpe7tTww96oKRVtmBSsaUdnqf8xfBM216oh",
  "key20": "bALWhgugm5ipYM3kCVH4TGNpMwNrABUbdv1bWz2CumFhvbbDnyNX4FGnzDedKSUajKnJzy9R6Ye5knoyucQr51j",
  "key21": "3J3yW2kGS8D13sL5kkcUc2cmbx9suXv7CdTcA1aVRWPcyHFVzVXhvpBa6cZeSPk5RrYGjWuECUkU8JmrVgMxpRiG",
  "key22": "4zgfzmKFwGvYSphTv6iwPML4J9vjbZXrTCSvTNBP2AqyBiugkB8zsoLcKH1A5muJ7vw6eYqXZ64hvLRC7GLjww73",
  "key23": "5N8cWKrSKfVNCQ7PiWgVv6Nqdmy1Cs4WCWPj9UexGGGehc9aftqrFV6KxpFaQ5E8NYpqJQLk5nMnqYz5dP2Mwy3w",
  "key24": "PWsdDFGmc3aH81RahgBcpDtCkhEAs1EqcgUWXQr9CM8KM3mEyJtHi2H9uGbiQ3YGceFX6ahr1LEjXowy29Sqz8L",
  "key25": "2y5V7bTXFjMW6SYF35Tpe58DTdCcq9qL1NLpWDK86yqcJi5sTP3Vz27HsMWwDQ7fiPJDbpZuHXLze8UCvTwfEG4u",
  "key26": "4Bukwf1vovZpLC2CBgi2J37VWVEXLQYdcu4sGcZy5MpQeNriGdCuYiR9NCPsQWRoXUvhP1SPY4vWFfWBFcRDFggR",
  "key27": "2KSUCq91ey7Ain9YcMJYoo4PpP59wLeNA5whANHwHLibhrZgyu85DRv3MrR3PwGwStJXonLzsoEmUuVJiS7p8GSt",
  "key28": "2UzozSYBbX7WbBEutyqDVwAmkS1hy5umS73vLUuQWuwAYdL9fJBbWF8LqCHyR49AFB7JR7qDNkMencWueoxbhgTS",
  "key29": "JT97apFEz5Uv3PDH1LBfXi7dB6kZty6HREyxEGQ2US5wLBhMQUTUicFh2c576cuzHoS2L1SuWHYfESc4M1SKmra",
  "key30": "SvdPE4n1fdR99oRy7b8kjBVVwMCqHUGjZejFnLJZuJagdFMpGdUMmC6A7qFcQr9LN5KAego6RmksU7BNU4Touqu",
  "key31": "262BWFjqJRTq8HfwhQv91jaLJanZxUEFeBWZv68r8Ua2677f2mvjXA7Sy2GRbJompJket6pCRSEoj3idUBnbijyD",
  "key32": "2KBFCKwX6NrGEg6F3DxYXdieMyrqY4mgS2hQR8eKr6YnCg7VRH2AeJPh6P6Xcd7quMEiU5KabpgoJNtVvvC3te8",
  "key33": "95Qj9wwEnUNv4PdhwQrRbAq6j9uje4E3jhtytQW24epwK9QWoXeG5786m3kee6xo3qW97B715PxCMoQrrwUijjL",
  "key34": "8ShzpHmyXEYtrSoLMw3gWBwR1AFkksvrhCXfAMZUKG2zveGMWjmGUuiAce9pmCV4DbahErRZY4PR1M46Gf1KaP4",
  "key35": "22myFMBgt9j7Aqa1CwVpy4PTEdhn7ZjB9EihzWnPPqm6AKeo3wUk3LnEKWQwn6kRnZAwmU4zBYDrqpzQHyJCLm9t"
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
